# killer.py
import os
from typing import List
from .mutant import Mutant
from .utils import write_json_atomic, now_iso
import subprocess

class CTSKillStatus:
    SURVIVED = "SURVIVED"
    KILLED = "KILLED"

class MutantKiller:
    def __init__(self, mutants: List[Mutant], dawn: str, cts: str, vk_icd: str, output_dir: str):
        self.mutants = mutants
        self.dawn = dawn
        self.cts = cts
        self.vk_icd = vk_icd
        self.output_dir = output_dir

        self.killed_dir = self.output_dir / "killed_mutants"
        self.survived_dir = self.output_dir / "surviving_mutants"

        self.killed_dir.mkdir(parents=True, exist_ok=True)
        self.survived_dir.mkdir(parents=True, exist_ok=True)

        logging.basicConfig(
            filename=self.output_dir / "run.log",
            level=logging.INFO,
            format="%(asctime)s %(levelname)s %(message)s",
        )

    def run_cts_test(self, test_name: str, env: dict) -> bool:
        """
        Run a single CTS test and return True if it passed.
        """

        cmd = [f'{self.dawn}/tools/run',
            'run-cts', 
            '--verbose',
            f'--bin={self.dawn}/out/Debug',
            f'--cts={str(self.cts)}',
            test_name]  

        process = subprocess.Popen(
            cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            universal_newlines=True,
            env=env,
        )

        passed = False
        for line in iter(process.stdout.readline, ""):
            line = line.strip()
            print(line)
            if " - pass" in line:
                passed = True
            elif "failed to gather tests" in line:
                raise RuntimeError(f"Test '{test_name}' could not be gathered")

        process.stdout.close()
        process.wait()
        return passed

    def kill_mutant(self, mutant: Mutant) -> None:
        env = os.environ.copy()
        env["VK_ICD_FILENAMES"] = self.vk_icd

        attempted_tests = []

        for test in mutant.covering_tests:
            attempted_tests.append(test)

            # Unmutated run
            env.pop("DREDD_ENABLED_MUTATION", None)
            if not self.run_cts_test(test, env):
                continue

            # Mutated run
            env["DREDD_ENABLED_MUTATION"] = str(mutant.id)
            if not self.run_cts_test(test, env):
                # KILLED — log immediately
                mutant.killed = True
                mutant.killing_test = test

                record = {
                    "mutant_id": mutant.id,
                    "killing_test": test,
                    "timestamp": now_iso(),
                }

                write_json_atomic(
                    self.killed_dir / f"{mutant.id}.json",
                    record,
                )

                logging.info(f"Mutant {mutant.id} killed by {test}")
                return

        # SURVIVED — log immediately
        mutant.killed = False

        record = {
            "mutant_id": mutant.id,
            "attempted_tests": attempted_tests,
            "timestamp": now_iso(),
        }

        write_json_atomic(
            self.survived_dir / f"{mutant.id}.json",
            record,
        )

        logging.info(f"Mutant {mutant.id} survived ({len(attempted_tests)} tests)") 
    
    def kill_all(self):
        """
        Loop over all mutants and attempt to kill them.
        """
        for mutant in self.mutants:
            # Skip if mutant has already been tested
            for mutant in self.mutants:
                if (self.killed_dir / f"{mutant.id}.json").exists():
                    continue
                if (self.survived_dir / f"{mutant.id}.json").exists():
                    continue

            self.kill_mutant(mutant)
            if mutant.killed:
                print(f"Mutant {mutant.id} killed by {mutant.killing_test}")
            else:
                print(f"Mutant {mutant.id} survived")