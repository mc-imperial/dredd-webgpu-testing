# killer.py
import os
import csv
import time
from datetime import datetime, timezone
from typing import List
from .mutant import Mutant
from .utils import write_json_atomic, now_iso
import subprocess
import logging
from tqdm import tqdm
from pathlib import Path

class CTSKillStatus:
    SURVIVED = "SURVIVED"
    KILLED = "KILLED"

class MutantKiller:
    def __init__(self, mutants: List[Mutant], dawn: str, cts: str, vk_icd: str, output_dir: Path):
        self.mutants = mutants
        self.dawn = dawn
        self.cts = cts
        self.vk_icd = vk_icd
        self.output_dir = output_dir

        self.killed_dir = self.output_dir / "killed_mutants"
        self.survived_dir = self.output_dir / "surviving_mutants"

        self.killed_dir.mkdir(parents=True, exist_ok=True)
        self.survived_dir.mkdir(parents=True, exist_ok=True)

        self.summary_csv = output_dir / "mutation_summary.csv"
        self._init_summary_csv()

        logging.basicConfig(
            filename=self.output_dir / "run.log",
            level=logging.INFO,
            format="%(asctime)s %(levelname)s %(message)s",
        )

    def _init_summary_csv(self):
        if not self.summary_csv.exists():
            with open(self.summary_csv, "w", newline="") as f:
                writer = csv.writer(f)
                writer.writerow([
                    "mutant_id",
                    "status",
                    "killing_test",
                    "num_covering_tests",
                    "num_tests_run_mutated",
                    "unmutated_time_sec",
                    "mutated_time_sec",
                    "total_time_sec",
                    "timestamp_utc",
                ])
        
    def _append_summary_row(
        self,
        mutant_id: int,
        status: str,
        killing_test: str,
        num_covering_tests: int,
        num_tests_run_mutated: int,
        unmutated_time: float,
        mutated_time: float,
        total_time: float,
    ):
        with open(self.summary_csv, "a", newline="") as f:
            writer = csv.writer(f)
            writer.writerow([
                mutant_id,
                status,
                killing_test,
                num_covering_tests,
                num_tests_run_mutated,
                round(unmutated_time, 3),
                round(mutated_time, 3),
                round(total_time, 3),
                now_iso(),
            ])

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
            tqdm.write(line)
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

    def _already_processed_ids(self) -> set[int]:
        killed = {int(p.stem) for p in self.killed_dir.glob("*.json")}
        survived = {int(p.stem) for p in self.survived_dir.glob("*.json")}
        return killed | survived