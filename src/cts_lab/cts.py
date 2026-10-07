import json
import os
import subprocess
import time
import shutil
from dataclasses import asdict, dataclass
from pathlib import Path

@dataclass
class CTSConfig:
    cts: Path
    dawn: Path
    vk_icd: Path

@dataclass
class CTSRunResult:
    """Results and metadata from a single CTS execution."""
    
    outdir: Path
    run_file: Path
    stdout_file: Path
    config: CTSConfig
    tracking: bool
    mesa_shader_cache_on: bool
    dawn_servers: int
    dawn_isolate: bool
    query: str
    time_seconds: float
    returncode: int
    source_individual_tests: Path | None
    test_level: str

    @property
    def individual_test_results(self) -> Path:
        return Path(self.outdir, "individual_test_results.json")

    def get_test_results(self) -> dict[str, str]:

        with self.stdout_file.open() as f:
            lines = f.readlines()

        tests = [
            line for line in lines
            if line.startswith("webgpu:")
        ]

        results = {
            test.split(" - ", 1)[0]: self.extract_status(
                test.split(" - ", 1)[1]
            )
            for test in tests
            if " - " in test
        }

        self.individual_test_results.write_text(
            json.dumps(results, indent=2, default=str)
        )

        return results

    @staticmethod
    def extract_status(status_part: str) -> str:
        status_part = status_part.rstrip(":").lower()

        if "pass" in status_part:
            return "pass"
        elif "fail" in status_part:
            return "fail"
        elif "skip" in status_part:
            return "skip"

        return "unknown"

@dataclass
class CTSIsolatedRunResult:
    results: list[CTSRunResult]
    time_seconds: float

    @property
    def total_tests(self) -> int:
        return len(self.results)

class CTS:
    """Run the WebGPU Conformance Test Suite and analyse its results."""

    def __init__(
        self,
        cts: Path,
        dawn: Path,
        vk_icd: Path
    ):

        self.config = CTSConfig(
            cts=Path(cts),
            dawn=Path(dawn),
            vk_icd=Path(vk_icd)
        )

    def run(self, 
        query: str, 
        outdir: Path,
        tracking: bool,
        mesa_shader_cache_on: bool,
        dawn_servers: int,
        dawn_isolate: bool,
        test_level: str,
        source_individual_tests: Path | None = None) -> CTSRunResult:
        """Run the CTS and save its output to ``outdir``."""

        outdir = Path(outdir).resolve()
        outdir.mkdir(parents=True, exist_ok=True)

        run_file = outdir / "run_info.json"
        stdout_file = outdir / "stdout.txt"

        env = os.environ.copy()

        env["VK_ICD_FILENAMES"] = str(self.config.vk_icd)

        if mesa_shader_cache_on:
            env["MESA_SHADER_CACHE_DISABLE"] = "false"
        else:
            env["MESA_SHADER_CACHE_DISABLE"] = "true"

        cmd = [
            f"{self.config.dawn}/tools/run",
            "run-cts",
            "--verbose",
            f"--bin={self.config.dawn}/out/Debug",
            f"--cts={self.config.cts}",
            f"--j={dawn_servers}"   
        ]

        if dawn_isolate:
            cmd.append('--isolate')

        if tracking:
            cmd.append('--mutant-tracking')
            tracking_dir = outdir / "tracking"
            tracking_dir.mkdir(parents=True, exist_ok=True)
            env["DREDD_MUTANT_TRACKING_DIR"] = str(tracking_dir)
            env["DREDD_MUTANT_TRACKING_FILE"] = str(tracking_dir / f"{outdir.name}.txt")

        cmd.append(query)

        print("Running CTS:")
        print(" ".join(cmd))

        start_time = time.perf_counter()

        with stdout_file.open("w") as f:
            process = subprocess.Popen(
                cmd,
                env=env,
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                text=True,
                bufsize=1,
            )

            for line in process.stdout:
                print(line, end="")
                f.write(line)
                f.flush()

            returncode = process.wait()

        time_seconds = time.perf_counter() - start_time

        print(f"CTS completed in {time_seconds:.2f} seconds")

        run = CTSRunResult(
            outdir=outdir,
            run_file=run_file,
            stdout_file=stdout_file,
            config=self.config,
            query=query,
            tracking=tracking,
            mesa_shader_cache_on=mesa_shader_cache_on,
            dawn_servers=dawn_servers,
            dawn_isolate=dawn_isolate,
            time_seconds=time_seconds,
            returncode=process.returncode,
            source_individual_tests=source_individual_tests,
            test_level=test_level
            )

        run_file.write_text(
            json.dumps(asdict(run), indent=2, default=str)
        )

        return run

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

            result = self.cts.run(
                query=test_name,
                outdir=outdir,
                tracking=self.tracking,
                mesa_shader_cache_on=self.mesa_shader_cache_on,
                dawn_servers=1, # Always one server needed for single tests
                dawn_isolate=False, # For now use server approach in this isolated runner, rather than Dawn isolation
                source_individual_tests=source_individual_tests,
                test_level=test_level
            )

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