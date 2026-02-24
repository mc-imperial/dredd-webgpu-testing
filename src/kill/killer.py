# killer.py
import os
from typing import List
from .mutant import Mutant
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
        """
        Run each mutant against its covering tests one by one.
        Stop as soon as a killing test is found.
        """
        env = os.environ.copy()
        env["VK_ICD_FILENAMES"] = self.vk_icd
        env["DREDD_ENABLED_MUTATION"] = str(mutant.id)

        for test in mutant.covering_tests:
            # First, run the test unmutated
            env.pop("DREDD_ENABLED_MUTATION", None)  # ensure unmutated run
            print(f"Running mutant {mutant.id}, test {test} unmutated...")
            if not self.run_cts_test(test, env):
                # Test didn't pass unmutated → skip it
                print(f"Test {test} did not pass unmutated, skipping.")
                continue

            # Then, run the test mutated
            env["DREDD_ENABLED_MUTATION"] = str(mutant.id)
            print(f"Running mutant {mutant.id}, test {test} mutated...")
            if not self.run_cts_test(test, env):
                # Test killed the mutant → stop immediately
                print(f"Mutant {mutant.id} killed by test {test}")
                mutant.killed = True
                mutant.killing_test = test
                return

        # If we reach here, no test killed the mutant
        print(f"Mutant {mutant.id} survived all tests")
        mutant.killed = False

    def kill_all(self):
        """
        Loop over all mutants and attempt to kill them.
        """
        for mutant in self.mutants:
            self.kill_mutant(mutant)
            if mutant.killed:
                print(f"Mutant {mutant.id} killed by {mutant.killing_test}")
            else:
                print(f"Mutant {mutant.id} survived")