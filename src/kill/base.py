# base.py
from abc import ABC, abstractmethod
from pathlib import Path
from typing import List
from .mutant import Mutant

class BaseMutantKiller(ABC):
    def __init__(self, mutants: List[Mutant], output_dir: Path):
        self.mutants = mutants
        self.output_dir = output_dir

        self.killed_dir = output_dir / "killed_mutants"
        self.survived_dir = output_dir / "surviving_mutants"

        self.killed_dir.mkdir(parents=True, exist_ok=True)
        self.survived_dir.mkdir(parents=True, exist_ok=True)

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