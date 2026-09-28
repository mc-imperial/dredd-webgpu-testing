import json
import os
import subprocess
import time
from dataclasses import asdict, dataclass
from pathlib import Path

@dataclass
class CTSRunConfig:
    cts: Path
    dawn: Path
    vk_icd: Path
    mesa_shader_cache: bool

@dataclass
class CTSRunResult:
    """Results and metadata from a single CTS execution."""
    
    outdir: Path
    run_file: Path
    stdout_file: Path
    config: CTSRunConfig
    query: str
    time_seconds: float
    returncode: int

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
        vk_icd: Path,
        mesa_shader_cache: bool = False,
    ):

        self.config = CTSRunConfig(
            cts=Path(cts),
            dawn=Path(dawn),
            vk_icd=Path(vk_icd),
            mesa_shader_cache=mesa_shader_cache,
        )

    def run(self, query: str, outdir: Path) -> CTSRunResult:
        """Run the CTS and save its output to ``outdir``."""

        outdir = Path(outdir)
        outdir.mkdir(parents=True, exist_ok=True)

        run_file = outdir / "run_info.json"
        stdout_file = outdir / "stdout.txt"

        cmd = [
            f"{self.config.dawn}/tools/run",
            "run-cts",
            "--verbose",
            f"--bin={self.config.dawn}/out/Debug",
            f"--cts={self.config.cts}",
            query,
        ]

        env = os.environ.copy()
        env["VK_ICD_FILENAMES"] = str(self.config.vk_icd)

        if self.config.mesa_shader_cache:
            env["MESA_SHADER_CACHE_DISABLE"] = "true"

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
            time_seconds=time_seconds,
            returncode=process.returncode,
        )

        run_file.write_text(
            json.dumps(asdict(run), indent=2, default=str)
        )

        return run

class CTSIsolatedRunner:
    def __init__(self, cts: CTS, outdir: Path):
        self.cts = cts
        self.outdir = Path(outdir)

    def run_tests(self, test_names: list[str]) -> CTSIsolatedRunResult:
        results = []
        run_file = self.outdir / "run_info.json"

        start_time = time.perf_counter()

        for test_name in test_names:
            outdir = self.outdir / self._test_dirname(test_name)

            result = self.cts.run(
                query=test_name,
                outdir=outdir,
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

    @staticmethod
    def _test_dirname(test_name: str) -> str:
        return test_name.replace(":", "_").replace(",", "_")