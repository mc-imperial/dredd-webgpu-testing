# killer.py
import os
import csv
import time
import signal
from datetime import datetime, timezone
from typing import List
import subprocess
import logging
from tqdm import tqdm
from pathlib import Path

from .mutant import Mutant
from .utils import write_json_atomic, now_iso, KillStatus
from .config import TEST_TIMEOUT_SECONDS
from .base import BaseMutantKiller



class CTSMutantKiller(BaseMutantKiller):
    def __init__(
        self,
        mutants: List[Mutant],
        dawn: str,
        cts: str,
        vk_icd: str,
        output_dir: Path,
    ):
        super().__init__(mutants, output_dir)
        self.dawn = dawn
        self.cts = cts
        self.vk_icd = vk_icd

    def run_cts_test(self, test_name: str, env: dict) -> bool:
        """
        Run a single CTS test with a timeout using subprocess.run().
        Returns True if the test passed, False if it failed or timed out.
        """
        cmd = [
            f'{self.dawn}/tools/run',
            'run-cts',
            '--verbose',
            f'--bin={self.dawn}/out/Debug',
            f'--cts={str(self.cts)}',
            test_name
        ]

        try:
            result = subprocess.run(
                cmd,
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                text=True,
                env=env,
                timeout=TEST_TIMEOUT_SECONDS
            )
            # Output all lines without breaking progress bar
            for line in result.stdout.splitlines():
                tqdm.write(line.strip())

            if "failed to gather tests" in result.stdout:
                raise RuntimeError(f"Test '{test_name}' could not be gathered")

            return " - pass" in result.stdout

        except subprocess.TimeoutExpired:
            tqdm.write(f"CTS test timed out after {TEST_TIMEOUT_SECONDS}s: {test_name}")
            return False
        except Exception as e:
            logging.warning(f"Exception while running CTS test '{test_name}': {e}")
            return False

    def kill_mutant(self, mutant: Mutant) -> None:
        env = os.environ.copy()
        env["VK_ICD_FILENAMES"] = self.vk_icd

        t_total_start = time.perf_counter()
        t_unmutated = 0.0
        t_mutated = 0.0

        attempted_tests = []
        mutated_tests_run = 0

        for test in mutant.covering_tests:
            attempted_tests.append(test)

            # Unmutated run
            env.pop("DREDD_ENABLED_MUTATION", None)
            t0 = time.perf_counter()
            unmutated_passed = self.run_cts_test(test, env)
            t_unmutated += time.perf_counter() - t0

            if not unmutated_passed:
                continue

            # Mutated run
            env["DREDD_ENABLED_MUTATION"] = str(mutant.id)
            mutated_tests_run += 1

            t0 = time.perf_counter()
            mutated_passed = self.run_cts_test(test, env)
            t_mutated += time.perf_counter() - t0

            if not mutated_passed:
                # ---------- KILLED ----------
                mutant.killed = True
                mutant.killing_test = test

                record = {
                    "mutant_id": mutant.id,
                    "status": "killed",
                    "killing_test": test,
                    "num_covering_tests": len(mutant.covering_tests),
                    "attempted_tests": attempted_tests,
                    "num_tests_run_mutated": mutated_tests_run,
                    "unmutated_time_sec": round(t_unmutated, 3),
                    "mutated_time_sec": round(t_mutated, 3),
                    "total_time_sec": round(time.perf_counter() - t_total_start, 3),
                    "timestamp_utc": now_iso(),
                }

                write_json_atomic(
                    self.killed_dir / f"{mutant.id}.json",
                    record,
                )

                logging.info(f"Mutant {mutant.id} killed by {test}")

                self._append_summary_row(
                    mutant_id=mutant.id,
                    status="killed",
                    killing_test=test,
                    num_covering_tests=len(mutant.covering_tests),
                    num_tests_run_mutated=mutated_tests_run,
                    unmutated_time=t_unmutated,
                    mutated_time=t_mutated,
                    total_time=time.perf_counter() - t_total_start,
                )

                return

        # SURVIVED — log immediately
        mutant.killed = False

        record = {
            "mutant_id": mutant.id,
            "status": "survived",
            "num_covering_tests": len(mutant.covering_tests),
            "attempted_tests": attempted_tests,
            "num_tests_run_mutated": mutated_tests_run,
            "unmutated_time_sec": round(t_unmutated, 3),
            "mutated_time_sec": round(t_mutated, 3),
            "total_time_sec": round(time.perf_counter() - t_total_start, 3),
            "timestamp_utc": now_iso(),
        }

        write_json_atomic(
            self.survived_dir / f"{mutant.id}.json",
            record,
        )

        logging.info(f"Mutant {mutant.id} survived ({len(attempted_tests)} tests)") 

        self._append_summary_row(
            mutant_id=mutant.id,
            status="survived",
            killing_test="",
            num_covering_tests=len(mutant.covering_tests),
            num_tests_run_mutated=mutated_tests_run,
            unmutated_time=t_unmutated,
            mutated_time=t_mutated,
            total_time=time.perf_counter() - t_total_start,
        )
    

    def kill_all(self):
        processed_ids = self._already_processed_ids()

        total = len(self.mutants)
        initial = len(processed_ids)

        with tqdm(
            total=total,
            initial=initial,
            desc="Killing mutants",
            unit="mutant",
        ) as pbar:

            for mutant in self.mutants:
                if mutant.id in processed_ids:
                    continue

                self.kill_mutant(mutant)

                killed = len(list(self.killed_dir.glob("*.json")))
                survived = len(list(self.survived_dir.glob("*.json")))

                pbar.set_postfix(killed=killed, survived=survived)
                pbar.update(1)            
                
                if mutant.killed:
                        tqdm.write(f"Mutant {mutant.id} killed by {mutant.killing_test}")
                else:
                    tqdm.write(f"Mutant {mutant.id} survived")