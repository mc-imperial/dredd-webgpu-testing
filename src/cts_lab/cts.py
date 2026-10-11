import json
import os
import subprocess
import time
import shutil
import threading
from dataclasses import asdict, dataclass, field
from collections import Counter
from pathlib import Path

@dataclass(frozen=True)
class CTSConfig:
    """Fixed paths that don't change between runs."""
    cts: Path
    dawn: Path
    vk_icd: Path

    @property
    def dawn_bin(self) -> Path:
        return self.dawn / "out" / "Debug"

    @property
    def dawn_runner(self) -> Path:
        return self.dawn / "tools" / "run"

@dataclass(frozen=True)
class RunOptions:
    """Per-run settings. Defaults are for a plain, untracked, unmutated run."""
    dawn_servers: int = 1
    dawn_isolate: bool = False
    mesa_shader_cache_on: bool = False
    tracking: bool = False
    mutant_id: int | None = None          # sets DREDD_ENABLED_MUTATION
    timeout: float | None = None          # seconds; None = no limit
    echo: bool = True                     # mirror CTS output to the terminal
    extra_env: dict[str, str] = field(default_factory=dict)

    # Metadata only: recorded in run_info.json, not used to run anything.
    test_level: str | None = None
    source_individual_tests: Path | None = None

@dataclass
class CTSRunResult:
    """Results and metadata from a single CTS execution."""
    query: str
    options: RunOptions
    config: CTSConfig
    outdir: Path
    run_file: Path
    stdout_file: Path
    tracking_file: Path | None
    time_seconds: float
    returncode: int | None
    timed_out: bool
    test_results: dict[str, str]   # test name -> "pass" | "fail" | "skip" | "unknown"

    @property
    def individual_test_results(self) -> Path:
        return self.outdir / "individual_test_results.json"

    def status_of(self, test: str) -> str | None:
        """Status of one test, or None if it never reported (e.g. run timed out)."""
        return self.test_results.get(test)

    def status_counts(self) -> Counter:
        return Counter(self.test_results.values())

@dataclass
class CTSIsolatedRunResult:
    results: list[CTSRunResult]
    time_seconds: float

    @property
    def total_tests(self) -> int:
        return len(self.results)

class CTS:
    """Run the WebGPU Conformance Test Suite via Dawn and capture its results."""
 
    def __init__(self, cts: Path, dawn: Path, vk_icd: Path):
        self.config = CTSConfig(cts=Path(cts), dawn=Path(dawn), vk_icd=Path(vk_icd))

    def build_command(self, query: str, opts: RunOptions) -> list[str]:
        cmd = [
            str(self.config.dawn_runner),
            "run-cts",
            "--verbose",
            f"--bin={self.config.dawn_bin}",
            f"--cts={self.config.cts}",
            f"--j={opts.dawn_servers}",
        ]
        if opts.dawn_isolate:
            cmd.append("--isolate")
        if opts.tracking:
            cmd.append("--mutant-tracking")
        cmd.append(query)
        return cmd
 
    def build_env(self, opts: RunOptions, tracking_file: Path | None) -> dict[str, str]:
        # Always start from a copy of the real environment so PATH etc. survive,
        # and never mutate a dict the caller owns.
        env = os.environ.copy()
        env.update(opts.extra_env)
 
        env["VK_ICD_FILENAMES"] = str(self.config.vk_icd)
        env["MESA_SHADER_CACHE_DISABLE"] = "false" if opts.mesa_shader_cache_on else "true"
 
        if tracking_file is not None:
            env["DREDD_MUTANT_TRACKING_DIR"] = str(tracking_file.parent)
            env["DREDD_MUTANT_TRACKING_FILE"] = str(tracking_file)
 
        if opts.mutant_id is not None:
            env["DREDD_ENABLED_MUTATION"] = str(opts.mutant_id)
        else:
            env.pop("DREDD_ENABLED_MUTATION", None)  # don't inherit one by accident
 
        return env

    def run(self, query: str, outdir: Path, opts: RunOptions = RunOptions()) -> CTSRunResult:
        """Run the CTS and save its output to ``outdir``."""

        outdir = Path(outdir).resolve()
        outdir.mkdir(parents=True, exist_ok=True)

        run_file = outdir / "run_info.json"
        stdout_file = outdir / "stdout.txt"

        tracking_file = None
        if opts.tracking:
            tracking_dir = outdir / "tracking"
            tracking_dir.mkdir(parents=True, exist_ok=True)
            tracking_file = tracking_dir / f"{outdir.name}.txt"
 
        cmd = self.build_command(query, opts)
        env = self.build_env(opts, tracking_file)

        print("Running CTS:", " ".join(cmd))

        returncode, timed_out, time_seconds = _run_streaming(
            cmd, env, stdout_file, timeout=opts.timeout, echo=opts.echo
        )
        
        status = "timed out" if timed_out else "completed"
        print(f"CTS {status} in {time_seconds:.2f} seconds")
 
        result = CTSRunResult(
            query=query,
            options=opts,
            config=self.config,
            outdir=outdir,
            run_file=run_file,
            stdout_file=stdout_file,
            tracking_file=tracking_file,
            time_seconds=time_seconds,
            returncode=returncode,
            timed_out=timed_out,
            # Parse even on timeout: tests that finished before the kill still count.
            test_results=parse_test_results(stdout_file.read_text()),
        )
 
        result.individual_test_results.write_text(
            json.dumps(result.test_results, indent=2)
        )
        # Per-test results have their own file; keep run_info.json to metadata.
        info = asdict(result)
        info.pop("test_results")
        run_file.write_text(json.dumps(info, indent=2, default=str))
        return result

class CTSIsolatedRunner:
    def __init__(self, 
        cts: CTS, 
        outdir: Path,
        tracking: bool,
        mesa_shader_cache_on: bool):
            self.cts = cts
            self.outdir = Path(outdir)
            self.tracking = tracking
            self.mesa_shader_cache_on = mesa_shader_cache_on

    def run_tests(self, 
        test_names: list[str],
        source_individual_tests: Path,
        test_level: str) -> CTSIsolatedRunResult:
        start_idx = self._get_start_test_index(test_names)

        results = []
        run_file = self.outdir / "run_info.json"

        start_time = time.perf_counter()

        for test_id, test_name in enumerate(
            test_names[start_idx:],
            start=start_idx,
        ):
            outdir = self.outdir / str(test_id)

            opts = RunOptions(
                tracking=self.tracking,
                mesa_shader_cache_on=self.mesa_shader_cache_on,
                dawn_servers=1,       # always one server needed for single tests
                dawn_isolate=False,   # use the server approach here rather than Dawn isolation
                source_individual_tests=source_individual_tests,
                test_level=test_level,
            )

            result = self.cts.run(test_name, outdir, opts)

            results.append(result)

        time_seconds = time.perf_counter() - start_time

        result = CTSIsolatedRunResult(
            results=results,
            time_seconds=time_seconds,
        )

        run_file.write_text(
            json.dumps(asdict(result), indent=2, default=str)
        )

        return result

    def _get_existing_test_dirs(self) -> list[Path]:
        """Return existing test directories in zero-indexed order.

        Raises:
            RuntimeError: If test directories are not contiguous starting at 0.
        """
        test_dirs = sorted(
            (
                path
                for path in self.outdir.iterdir()
                if path.is_dir() and path.name.isdigit()
            ),
            key=lambda path: int(path.name),
        )

        actual_indices = [int(path.name) for path in test_dirs]
        expected_indices = list(range(len(test_dirs)))

        if actual_indices != expected_indices:
            raise RuntimeError(
                "Existing test directories are not contiguous. "
                f"Expected {expected_indices}, got {actual_indices}."
            )

        return test_dirs

    def _validate_run_info(
        self,
        test_idx: int,
        test_names: list[str],
    ) -> None:
        """Validate run_info.json for a completed test."""
        test_dir = self.outdir / str(test_idx)
        run_info_file = test_dir / "run_info.json"

        if not run_info_file.is_file():
            raise RuntimeError(
                f"Expected {run_info_file} to exist."
            )

        try:
            run_info = json.loads(run_info_file.read_text())
        except json.JSONDecodeError as exc:
            raise RuntimeError(
                f"Could not parse {run_info_file} as JSON."
            ) from exc

        if "query" not in run_info:
            raise RuntimeError(
                f"{run_info_file} does not contain a 'query' entry."
            )

        actual_query = run_info["query"]
        expected_query = test_names[test_idx]

        if actual_query != expected_query:
            raise RuntimeError(
                f"Test directory {test_idx} does not match the supplied "
                f"test list.\n"
                f"  Expected: {expected_query!r}\n"
                f"  Found:    {actual_query!r}\n"
                f"  File:     {run_info_file}"
            )

    def _get_start_test_index(
        self,
        test_names: list[str],
    ) -> int:
        if not test_names:
            raise ValueError("test_names must not be empty.")

        test_dirs = self._get_existing_test_dirs()

        if len(test_dirs) > len(test_names):
            raise RuntimeError(
                f"Found {len(test_dirs)} existing test directories, but only "
                f"{len(test_names)} tests were supplied."
            )

        if not test_dirs:
            return 0

        last_idx = len(test_dirs) - 1
        last_dir = test_dirs[-1]
        run_info_file = last_dir / "run_info.json"

        if not run_info_file.is_file():
            # Last test crashed/incomplete. Remove it and rerun it.
            shutil.rmtree(last_dir)
            return last_idx

        self._validate_run_info(
            test_idx=last_idx,
            test_names=test_names,
        )

        return last_idx + 1


def _run_streaming(
    cmd: list[str],
    env: dict[str, str],
    stdout_file: Path,
    timeout: float | None,
    echo: bool,
) -> tuple[int | None, bool, float]:
    """Run ``cmd``, tee its output to ``stdout_file``, and enforce ``timeout``.
 
    The process is started in its own session so that on timeout we can kill
    the whole process group (the Dawn runner and every CTS server it spawned),
    not just the top-level process.
    """
    timed_out = threading.Event()
    start = time.perf_counter()
 
    with stdout_file.open("w") as f:
        process = subprocess.Popen(
            cmd,
            env=env,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            bufsize=1,
            start_new_session=True,
        )
 
        def kill_group():
            timed_out.set()
            try:
                os.killpg(process.pid, signal.SIGKILL)
            except ProcessLookupError:
                pass
 
        # A timer thread, because reading stdout line-by-line blocks and
        # can't itself notice that the deadline has passed.
        timer = threading.Timer(timeout, kill_group) if timeout else None
        if timer:
            timer.start()
 
        try:
            for line in process.stdout:
                if echo:
                    print(line, end="")
                f.write(line)
                f.flush()
            process.wait()
        finally:
            if timer:
                timer.cancel()
 
    elapsed = time.perf_counter() - start
    returncode = None if timed_out.is_set() else process.returncode
    return returncode, timed_out.is_set(), elapsed
 
 
# --------------------------------------------------------------------------- #
# Output parsing
# --------------------------------------------------------------------------- #
 
def parse_test_results(stdout: str) -> dict[str, str]:
    """Parse per-test lines of the form ``webgpu:... - <status>``."""
    results = {}
    for line in stdout.splitlines():
        if not line.startswith("webgpu:") or " - " not in line:
            continue
        name, status_part = line.split(" - ", 1)
        results[name.strip()] = extract_status(status_part)
    return results
 
 
def extract_status(status_part: str) -> str:
    status_part = status_part.strip().rstrip(":").lower()
    if "pass" in status_part:
        return "pass"
    if "fail" in status_part:
        return "fail"
    if "skip" in status_part:
        return "skip"
    return "unknown"