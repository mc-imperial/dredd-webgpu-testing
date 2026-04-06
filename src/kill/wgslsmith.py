import json
import logging
import random
import tempfile
import shutil
from pathlib import Path

from .base import BaseMutantKiller
from .mutant import Mutant
from .utils import (
    write_json_atomic,
    now_iso, 
    KillStatus,
    gen_wgslsmith_program,
    run_wgslsmith_program,
    run_wgslsmith_program_harness,
    extract_output,
)

from common.run_test import compare_results, KillStatus
from contextlib import contextmanager
import random

@contextmanager
def test_work_dir(debug_root: Path | None, name: str):
    if debug_root is None:
        with tempfile.TemporaryDirectory(prefix=name + "_") as tmp:
            yield Path(tmp)
    else:
        debug_root.mkdir(parents=True, exist_ok=True)
        work = debug_root / name
        work.mkdir(exist_ok=False)
        yield work

class WGSLsmithMutantKiller(BaseMutantKiller):
    def __init__(
        self,
        mutants,
        wgslsmith: Path,
        dawn: Path,
        vk_icd: str,
        output_dir: Path,
        run_timeout: int = 60,
        debug: bool = False
    ):
        super().__init__(mutants, output_dir)
        self.wgslsmith = wgslsmith
        self.dawn = dawn
        self.vk_icd = vk_icd
        self.run_timeout = run_timeout

        if debug:
            self.debug_dir = Path("/tmp/wgslsmith_debug")
        else:
            self.debug_dir = None

    def kill_mutant(self, mutant: Mutant) -> None:
        seed = random.randint(0, 2**32 - 1)
        test_name = f"wgslsmith_{seed}"

        with test_work_dir(self.debug_dir, test_name) as tmp:
            prog = tmp / "prog.wgsl"
            js = tmp / "prog.js"
            inputs = tmp / "input.json"

            print(f'Generating WGSLsmith program in {prog}')
            if not gen_wgslsmith_program(prog, inputs, seed=seed):
                return

            print('Running WGSLsmith program')
            #TODO: parameterise harness
            use_harness=True
            harness = Path('/data/dev/wgslsmith_harness/wgslsmith-harness')
            if use_harness:
                unmutated = run_wgslsmith_program_harness(
                    prog,
                    inputs,
                    harness=harness,
                    vk_icd=self.vk_icd, # If vk_icd is set to None, harness uses default driver
                    timeout=300
                )
            else:
                unmutated = run_wgslsmith_program(
                    js,
                    f"{self.dawn}/out/Debug/dawn.node",
                    vk_icd=self.vk_icd,
                    timeout=self.run_timeout,
                )

            if unmutated is None or not unmutated.returncode != 0:
                print('Problem with WGLSsmith program')
                return

            print('Extracting output from unmutated program')
            baseline = extract_output(unmutated.stdout)

            print('Baseline:')
            print(baseline)
            exit()
            
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