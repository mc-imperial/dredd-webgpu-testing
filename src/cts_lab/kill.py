"""Mutant killing using the CTS.

For each mutant, run the CTS tests that reach it one at a time, first on
unmutated Mesa (the baseline, cached and shared across mutants) and then with
the mutant enabled. Stop at the first test that kills the mutant.

Results are appended to ``<outdir>/results.jsonl``, one line per mutant, so an
interrupted run can be resumed by running the same command again.
"""

import hashlib
import json
import time
from dataclasses import asdict, dataclass, replace
from enum import Enum
from pathlib import Path

from .cts import CTS, RunOptions


# --------------------------------------------------------------------------- #
# Single-test outcomes
# --------------------------------------------------------------------------- #

@dataclass
class TestOutcome:
    """What happened when one test was run once."""
    status: str      # pass | fail | skip | unknown | crash | timeout | not_found
    duration: float  # seconds, including Dawn start-up
    outdir: str      # where that run's stdout etc. were saved


def _test_dir_name(test: str) -> str:
    # Test names contain ':' ',' '=' and can be long, so use a short hash for
    # the directory name and record the real name inside run_info.json.
    return hashlib.sha1(test.encode()).hexdigest()[:12]


def run_single_test(cts: CTS, test: str, outdir: Path, opts: RunOptions) -> TestOutcome:
    """Run exactly one CTS test case and reduce the run to a single status."""
    result = cts.run(test, outdir, opts)
    status = result.status_of(test)

    if status is None:
        # The test produced no result line. Work out why.
        if result.timed_out:
            status = "timeout"
        elif result.returncode not in (0, None):
            status = "crash"
        else:
            # Clean exit but no result: the name didn't match a test.
            status = "not_found"

    return TestOutcome(status=status, duration=result.time_seconds, outdir=str(result.outdir))


# --------------------------------------------------------------------------- #
# Baseline cache
# --------------------------------------------------------------------------- #

class BaselineCache:
    """Unmutated result for each test, run once and saved to disk."""

    def __init__(self, cts: CTS, outdir: Path, opts: RunOptions):
        self.cts = cts
        self.dir = outdir / "baselines"
        self.dir.mkdir(parents=True, exist_ok=True)
        self.file = outdir / "baselines.json"
        self.opts = opts
        self.cache: dict[str, dict] = (
            json.loads(self.file.read_text()) if self.file.exists() else {}
        )

    def known_duration(self, test: str) -> float:
        """Cached duration, or infinity if this test hasn't been baselined yet."""
        entry = self.cache.get(test)
        return entry["duration"] if entry else float("inf")

    def get(self, test: str) -> TestOutcome:
        if test not in self.cache:
            outcome = run_single_test(self.cts, test, self.dir / _test_dir_name(test), self.opts)
            self.cache[test] = asdict(outcome)
            self._save()
        return TestOutcome(**self.cache[test])

    def recheck(self, test: str) -> TestOutcome:
        """Rerun the baseline (used to confirm a kill isn't a flaky test)."""
        outcome = run_single_test(
            self.cts, test, self.dir / (_test_dir_name(test) + "-recheck"), self.opts
        )
        if outcome.status != "pass":
            # Mark it so no later mutant trusts this test.
            self.cache[test] = {**asdict(outcome), "status": "flaky"}
            self._save()
        return outcome

    def _save(self):
        tmp = self.file.with_suffix(".tmp")
        tmp.write_text(json.dumps(self.cache, indent=2))
        tmp.replace(self.file)  # atomic, so an interrupt can't corrupt the cache


# --------------------------------------------------------------------------- #
# Killing one mutant
# --------------------------------------------------------------------------- #

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

    def is_kill(self) -> bool:
        return self.name.startswith("KILL_")


# How a single mutated test run's status maps to a KillStatus.
# Anything not listed (pass, skip, unknown, not_found) counts as SURVIVED.
TEST_STATUS_TO_KILL = {
    "fail": KillStatus.KILL_TEST_FAILURE,
    "crash": KillStatus.KILL_CRASH,
    "timeout": KillStatus.KILL_TIMEOUT,
}

NO_VERDICT = "no_verdict"  # per-test only: the test didn't pass without the mutant


@dataclass
class KillSettings:
    timeout_factor: float = 5.0   # mutant timeout = factor * baseline duration ...
    min_timeout: float = 30.0     # ... but never less than this
    stop_at_first_kill: bool = True
    confirm_kills: bool = False   # rerun the baseline when a test kills the mutant


def kill_mutant(
    cts: CTS,
    mutant_id: int,
    tests: list[str],
    baselines: BaselineCache,
    base_opts: RunOptions,
    outdir: Path,
    settings: KillSettings,
) -> dict:
    """Try to kill one mutant. Returns a JSON-serialisable result record."""
    start = time.perf_counter()
    mutant_dir = outdir / "mutants" / str(mutant_id)
    per_test = []
    killed_by = None
    status: KillStatus | None = None

    # Cheapest known tests first, so with early stopping a kill is found sooner.
    for test in sorted(tests, key=baselines.known_duration):
        baseline = baselines.get(test)
        if baseline.status != "pass":
            per_test.append({"test": test, "baseline": baseline.status, "verdict": NO_VERDICT})
            continue

        timeout = max(baseline.duration * settings.timeout_factor, settings.min_timeout)
        opts = replace(base_opts, mutant_id=mutant_id, timeout=timeout)
        mutated = run_single_test(cts, test, mutant_dir / _test_dir_name(test), opts)

        verdict = TEST_STATUS_TO_KILL.get(mutated.status, KillStatus.SURVIVED)
        record = {
            "test": test,
            "baseline": "pass",
            "mutant": mutated.status,
            "verdict": verdict.name,
            "mutant_duration": round(mutated.duration, 2),
            "timeout": round(timeout, 2),
        }

        if verdict.is_kill() and settings.confirm_kills:
            if baselines.recheck(test).status != "pass":
                record["verdict"] = NO_VERDICT
                record["note"] = "baseline flaky on recheck"
                per_test.append(record)
                continue

        per_test.append(record)

        if verdict.is_kill() and killed_by is None:
            killed_by = test
            status = verdict
            if settings.stop_at_first_kill:
                break

    if status is None:
        any_valid = any(r["verdict"] != NO_VERDICT for r in per_test)
        status = KillStatus.SURVIVED if any_valid else KillStatus.NO_VALID_TESTS

    return {
        "mutant_id": mutant_id,
        "status": status.name,
        "killed_by": killed_by,
        "tests_reaching": len(tests),
        "tests_run": sum(1 for r in per_test if "mutant" in r),
        "seconds": round(time.perf_counter() - start, 2),
        "tests": per_test,
    }


# --------------------------------------------------------------------------- #
# The loop over all mutants
# --------------------------------------------------------------------------- #

def load_mapping(path: Path) -> dict[int, list[str]]:
    raw = json.loads(Path(path).read_text())
    return {int(m): tests for m, tests in sorted(raw.items(), key=lambda kv: int(kv[0]))}


def _done_mutants(results_file: Path) -> set[int]:
    if not results_file.exists():
        return set()
    done = set()
    for line in results_file.read_text().splitlines():
        if line.strip():
            done.add(json.loads(line)["mutant_id"])
    return done


def kill_all(
    cts: CTS,
    mapping: dict[int, list[str]],
    outdir: Path,
    base_opts: RunOptions,
    settings: KillSettings,
    only: list[int] | None = None,
) -> dict[str, int]:
    """Run kill_mutant for every mutant in the mapping, resuming if possible."""
    outdir = Path(outdir)
    outdir.mkdir(parents=True, exist_ok=True)
    results_file = outdir / "results.jsonl"

    # Baselines run without a mutant, with a generous safety-net timeout.
    baselines = BaselineCache(cts, outdir, replace(base_opts, mutant_id=None))

    mutants = [m for m in (only or mapping) if m in mapping]
    done = _done_mutants(results_file)
    todo = [m for m in mutants if m not in done]
    print(f"{len(mutants)} mutants, {len(done & set(mutants))} already done, {len(todo)} to run")

    counts: dict[str, int] = {}
    for i, mutant_id in enumerate(todo, 1):
        result = kill_mutant(
            cts, mutant_id, mapping[mutant_id], baselines, base_opts, outdir, settings
        )
        with results_file.open("a") as f:
            f.write(json.dumps(result) + "\n")

        counts[result["status"]] = counts.get(result["status"], 0) + 1
        by = f" by {result['killed_by']}" if result["killed_by"] else ""
        print(f"[{i}/{len(todo)}] mutant {mutant_id}: {result['status']}{by} "
              f"({result['tests_run']}/{result['tests_reaching']} tests, {result['seconds']}s)")

    print("Summary:", counts)
    return counts
