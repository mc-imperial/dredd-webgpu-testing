import json
import logging
import random
import tempfile
from pathlib import Path

from .base import BaseMutantKiller
from .mutant import Mutant
from .utils import write_json_atomic, now_iso, KillStatus

from run.wgslsmith.utils import (
    gen_wgslsmith_program,
    run_wgslsmith_program,
    extract_output,
)
from common.run_test import compare_results, KillStatus

class WGSLsmithMutantKiller(BaseMutantKiller):
    def __init__(
        self,
        mutants,
        wgslsmith_root: Path,
        dawn: Path,
        vk_icd: str,
        output_dir: Path,
        run_timeout: int = 60,
    ):
        super().__init__(mutants, output_dir)
        self.wgslsmith_root = wgslsmith_root
        self.dawn = dawn
        self.vk_icd = vk_icd
        self.run_timeout = run_timeout

    def kill_mutant(self, mutant: Mutant) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            tmp = Path(tmp)
            prog = tmp / "prog.wgsl"
            js = tmp / "prog.js"

            seed = random.randint(0, 2**32 - 1)
            test_name = f"wgslsmith_{seed}"

            # Generate program
            if not gen_wgslsmith_program(prog, seed):
                return

            # Run unmutated
            unmutated = run_wgslsmith_program(
                js,
                self.dawn,
                vk_icd=self.vk_icd,
                timeout=self.run_timeout,
            )

            if unmutated is None or unmutated.returncode != 0:
                return

            baseline = extract_output(unmutated.stdout)
            # Run mutated
            mutated = run_wgslsmith_program(
                js,
                self.dawn,
                vk_icd=self.vk_icd,
                mutants=[mutant.id],
                timeout=self.run_timeout * 3,
            )

            result, _ = compare_results(unmutated, mutated)

            if result != KillStatus.SURVIVED_IDENTICAL:
                mutant.killed = True
                mutant.killing_test = test_name

                write_json_atomic(
                    self.killed_dir / f"{mutant.id}.json",
                    {
                        "mutant_id": mutant.id,
                        "status": "killed",
                        "killing_test": test_name,
                        "timestamp_utc": now_iso(),
                    },
                )

                logging.info(f"Mutant {mutant.id} killed by WGSLsmith")
                return

            # Survived
            mutant.killed = False
            write_json_atomic(
                self.survived_dir / f"{mutant.id}.json",
                {
                    "mutant_id": mutant.id,
                    "status": "survived",
                    "timestamp_utc": now_iso(),
                },
            )