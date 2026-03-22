from abc import ABC, abstractmethod
from pathlib import Path
from typing import List
import csv
import logging

from .mutant import Mutant
from .utils import now_iso

class BaseMutantKiller(ABC):
    def __init__(self, mutants: List[Mutant], output_dir: Path):
        self.mutants = mutants
        self.output_dir = output_dir

        self.killed_dir = output_dir / "killed_mutants"
        self.survived_dir = output_dir / "surviving_mutants"

        self.killed_dir.mkdir(parents=True, exist_ok=True)
        self.survived_dir.mkdir(parents=True, exist_ok=True)

        self.summary_csv = output_dir / "mutation_summary.csv"
        self._init_summary_csv()

        logging.basicConfig(
            filename=self.output_dir / "run.log",
            level=logging.INFO,
            format="%(asctime)s %(levelname)s %(message)s",
        )

    @abstractmethod
    def kill_mutant(self, mutant: Mutant) -> None:
        """Attempt to kill exactly one mutant."""

    def kill_all(self):
        processed = self._already_processed_ids()

        for mutant in self.mutants:
            if mutant.id in processed:
                continue
            self.kill_mutant(mutant)

    def _already_processed_ids(self) -> set[int]:
        killed = {int(p.stem) for p in self.killed_dir.glob("*.json")}
        survived = {int(p.stem) for p in self.survived_dir.glob("*.json")}
        return killed | survived

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