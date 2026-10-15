"""Shared pieces for mutant-killing runners (CTS now, wgslsmith later).

Anything that doesn't depend on *how* a mutant is exercised lives here:
the kill statuses, timeout calculation, and the on-disk results log that
makes runs resumable and lets later stages see which mutants survived.
"""

import json
from enum import Enum
from pathlib import Path


class KillStatus(Enum):
    """Outcome for a mutant, following dredd_test_runners' KillStatus.

    The Csmith runner's statuses split compiler vs runtime and compare
    binaries/stdout/stderr. A CTS test compiles and runs shaders inside one
    process and reports pass/fail itself, so those collapse to the cases below.
    The member name (e.g. "KILL_CRASH") is what gets written to results.jsonl.
    """
    SURVIVED = 1
    KILL_CRASH = 2           # test process died before reporting a result
    KILL_TIMEOUT = 3         # exceeded the timeout derived from the baseline
    KILL_TEST_FAILURE = 4    # test passed without the mutant, failed with it
    NO_VALID_TESTS = 5       # no reaching test passed without the mutant
    KILL_OUTPUT_MISMATCH = 6  # fuzzing: program ran, but its outputs section differs

    def is_kill(self) -> bool:
        return self.name.startswith("KILL_")


def mutant_timeout(baseline_seconds: float, factor: float, minimum: float) -> float:
    """Timeout for a mutated run, scaled from how long the unmutated run took."""
    return max(baseline_seconds * factor, minimum)


class ResultsLog:
    """Append-only record of per-mutant outcomes.

    - ``results.jsonl``: one JSON record per mutant (full detail).
    - ``survivors.txt``: one surviving mutant ID per line, written as soon as
      each mutant is decided, so a later stage (e.g. fuzzing) can consume
      survivors while this run is still going.

    Re-opening the same directory resumes: mutants already in results.jsonl
    are reported as done.
    """

    def __init__(self, outdir: Path):
        self.outdir = Path(outdir)
        self.outdir.mkdir(parents=True, exist_ok=True)
        self.results_file = self.outdir / "results.jsonl"
        self.survivors_file = self.outdir / "survivors.txt"
        self.survivors_file.touch()  # exists from the start, so `tail -f` works
        self.status_by_mutant: dict[int, str] = {}

        if self.results_file.exists():
            for line in self.results_file.read_text().splitlines():
                if line.strip():
                    record = json.loads(line)
                    self.status_by_mutant[record["mutant_id"]] = record["status"]

    def is_done(self, mutant_id: int) -> bool:
        return mutant_id in self.status_by_mutant

    def killed(self) -> set[int]:
        return {m for m, s in self.status_by_mutant.items() if KillStatus[s].is_kill()}

    def survivors(self) -> set[int]:
        return {m for m, s in self.status_by_mutant.items() if s == KillStatus.SURVIVED.name}

    def record(self, result: dict) -> None:
        """Append one mutant's result. ``result['status']`` is a KillStatus name."""
        with self.results_file.open("a") as f:
            f.write(json.dumps(result) + "\n")
            f.flush()
        if result["status"] == KillStatus.SURVIVED.name:
            with self.survivors_file.open("a") as f:
                f.write(f"{result['mutant_id']}\n")
                f.flush()
        self.status_by_mutant[result["mutant_id"]] = result["status"]