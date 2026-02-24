# mutant.py
from pathlib import Path
from typing import List

class Mutant:
    def __init__(self, mutant_id: int, covering_tests: List[str]):
        self.id = mutant_id
        self.covering_tests = covering_tests
        self.killed = False
        self.killing_test = None