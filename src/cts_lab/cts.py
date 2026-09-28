import json
import os
import subprocess
import time
from dataclasses import dataclass
from pathlib import Path

@dataclass
class CTSRunResult:
    """Results and metadata from a single CTS execution."""

    outdir: Path
    elapsed_time: float
    returncode: int

class CTS:
    """Run the WebGPU Conformance Test Suite and analyse its results."""

    def __init__(
        self,
        cts: Path,
        dawn: Path,
        query: str,
        vk_icd: Path,
        mesa_shader_cache: bool = False,
    ):
        self.cts = Path(cts)
        self.dawn = Path(dawn)
        self.query = query
        self.vk_icd = Path(vk_icd)
        self.mesa_shader_cache = mesa_shader_cache

    def run(self, outdir: Path) -> CTSRunResult:
        """Run the CTS and save its output to ``outdir``."""

        outdir = Path(outdir)
        outdir.mkdir(parents=True, exist_ok=True)

        stdout_file = outdir / "stdout.txt"
        run_file = outdir / "run.json"

        cmd = [
            f"{self.dawn}/tools/run",
            "run-cts",
            "--verbose",
            f"--bin={self.dawn}/out/Debug",
            f"--cts={self.cts}",
            self.query,
        ]

        env = os.environ.copy()
        env["VK_ICD_FILENAMES"] = str(self.vk_icd)

        if self.mesa_shader_cache:
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

        elapsed_time = time.perf_counter() - start_time

        print(f"CTS completed in {elapsed_time:.2f} seconds")

        run = CTSRunResult(
            outdir=outdir,
            elapsed_time=elapsed_time,
            returncode=process.returncode,
        )

        run_file.write_text(
            json.dumps(
                {
                    "elapsed_time": run.elapsed_time,
                    "returncode": run.returncode,
                },
                indent=2,
            )
        )

        return run

    @staticmethod
    def extract_status(status_part: str) -> str:
        """Return the result status from a CTS output line."""

        status_part = status_part.rstrip(":").lower()

        if "pass" in status_part:
            return "pass"
        elif "fail" in status_part:
            return "fail"
        elif "skip" in status_part:
            return "skip"

        return "unknown"

    def get_tests_with_results(
        self,
        outdir: Path,
    ) -> dict[str, str]:
        """
        Parse CTS stdout from ``outdir`` and return test results.

        Results are cached in ``results.json`` within the run directory.
        """

        outdir = Path(outdir)

        stdout = outdir / "stdout.txt"
        results = outdir / "results.json"

        if results.exists():
            with results.open("r") as f:
                result = json.load(f)

            print(f"Loaded results from existing file: {results}")
            return result

        with stdout.open("r") as f:
            lines = f.readlines()

        tests = [
            line
            for line in lines
            if line.startswith("webgpu:")
        ]

        result = {
            test.split(" - ", 1)[0]: self.extract_status(
                test.split(" - ", 1)[1]
            )
            for test in tests
            if " - " in test
        }

        with results.open("w") as f:
            json.dump(result, f, indent=2)

        return result