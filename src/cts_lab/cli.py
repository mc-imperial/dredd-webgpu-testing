import argparse
import os
import json
from pathlib import Path

from .cts import CTS, CTSIsolatedRunner, RunOptions
from .queries import to_file_level_queries
from .kill_cts import KillSettings, kill_all, load_mapping
from .kill_fuzz import FuzzSettings, fuzz

def main() -> int:
    parser = argparse.ArgumentParser(
        prog="cts-lab",
        description="Research tooling for WebGPU CTS experiments.",
    )

    subparsers = parser.add_subparsers(dest="command")

    # ------------------------------------------------------------------
    # run
    # ------------------------------------------------------------------

    run_parser = subparsers.add_parser(
        "run",
        help="Run the WebGPU Conformance Test Suite.",
    )

    add_common_arguments(run_parser)

    run_parser.add_argument(
        "--track-mutants",
        action="store_true",
        help="Track mutants during CTS run.",
    )

    # ------------------------------------------------------------------
    # kill
    # ------------------------------------------------------------------


    kill_parser = subparsers.add_parser("kill", help="Kill mutants using the tests that reach them")
    add_common_arguments(kill_parser)
    kill_parser.add_argument("--mapping", type=Path, required=True)
    kill_parser.add_argument("--mutants", type=int, nargs="*", help="only these mutant IDs")
    kill_parser.add_argument("--timeout-factor", type=float, default=5.0)
    kill_parser.add_argument("--min-timeout", type=float, default=30.0)
    kill_parser.add_argument("--baseline-timeout", type=float, default=600.0)
    kill_parser.add_argument("--all-tests", action="store_true",
                            help="don't stop at the first kill (full kill matrix)")
    kill_parser.add_argument("--order", choices=["fewest-tests", "file"], default="fewest-tests")
    kill_parser.add_argument("--limit", type=int, help="run at most N more mutants")

    fuzz_parser = subparsers.add_parser("fuzz", help="Kill CTS survivors with wgslsmith programs")
    fuzz_parser.add_argument("--wgslsmith", type=Path, required=True)
    fuzz_parser.add_argument("--mutated-icd", type=Path, required=True)
    fuzz_parser.add_argument("--tracked-icd", type=Path, required=True)
    fuzz_parser.add_argument("--survivors", type=Path, nargs="+", required=True)
    fuzz_parser.add_argument("--outdir", type=Path, required=True)
    fuzz_parser.add_argument("--programs", type=int, help="stop after N programs")
    fuzz_parser.add_argument("--hours", type=float, help="stop after this many hours")
    fuzz_parser.add_argument("--first-seed", type=int, default=0)
    fuzz_parser.add_argument("--min-timeout", type=float, default=10.0)    

    args = parser.parse_args()

    if args.command == "run":
        return run_command(args)

    if args.command == "kill":
        return kill_command(args)

    if args.command == "fuzz":
        s = FuzzSettings(wgslsmith=args.wgslsmith, mutated_icd=args.mutated_icd,
                        tracked_icd=args.tracked_icd, min_timeout=args.min_timeout)
        fuzz(s, args.survivors, args.outdir, max_programs=args.programs,
            hours=args.hours, first_seed=args.first_seed)
            
    return 0

def add_common_arguments(parser: argparse.ArgumentParser) -> None:
    parser.add_argument(
        "--cts",
        required=True,
        help="Path to the WebGPU CTS.",
    )

    parser.add_argument(
        "--dawn",
        required=True,
        help="Path to the Dawn checkout.",
    )

    parser.add_argument(
        "--vk-icd",
        required=True,
        help="VK_ICD_FILENAMES environment variable.",
    )

    parser.add_argument(
        "--outdir",
        required=True,
        help="Output directory."
    )

    parser.add_argument(
        "--dawn-isolate",
        action="store_true",
        help="Use Dawn internal isolate flag to run tests in isolated processes.",
    )
    
    cache_group = parser.add_mutually_exclusive_group(required=True)

    cache_group.add_argument(
        "--mesa-shader-cache-on",
        action="store_true",
        help="Turn Mesa shader cache ON.",
    )

    cache_group.add_argument(
        "--mesa-shader-cache-off",
        action="store_true",
        help="Turn Mesa shader cache OFF.",
    )

    parser.add_argument(
        "--query",
        default="webgpu:*",
        help="CTS test query.",
    )
    
    parser.add_argument(
        "--n-dawn-runners",
        type=int,
        required=True,
        help="Number of parallel Dawn runners used to run the CTS. Set using an internal Dawn flag.",
    )

    parser.add_argument(
        "--test-json",
        required=False,
        help="JSON file containing tests to run. Output of run command.",
    )

    parser.add_argument(
        "--test-level",
        choices=["subtree-root", "test-file", "individual-tests"],
        default="subtree-root",
        help="Level of granularity at which to run tests in the query: subtree-root runs the full query, 'test-file' runs subtrees at the test file level, and 'individual-test' runs individual parameterised tests.",
    )

    parser.add_argument(
        "--n",
        type=int,
        required=False,
        help="Number of tests to execute. For debug purposes."
    )

def run_command(args) -> int:

    cts = CTS(
        cts=Path(args.cts),
        dawn=Path(args.dawn),
        vk_icd=Path(args.vk_icd),
    )

    if args.test_level=="subtree-root":
        
        print(f"Running CTS from subtree root with query: {args.query}")

        run_from_root(cts, args)

    else:

        print(f"Running CTS in isolated subtree mode at the level: {args.test_level}")

        run_subtrees(cts, args)

def run_from_root(cts: CTS, args) -> int:

    opts = RunOptions(
        dawn_servers=args.n_dawn_runners,
        dawn_isolate=args.dawn_isolate,
        mesa_shader_cache_on=args.mesa_shader_cache_on,
        tracking=args.track_mutants,
        test_level=args.test_level,
    )

    run = cts.run(
        query=args.query,
        outdir=Path(args.outdir),
        opts=opts,
    )

    return run.returncode

def run_subtrees(cts, args) -> int:

    source_individual_tests = Path(args.test_json).resolve()

    manifest = json.loads(
        source_individual_tests.read_text()
    )

    all_tests = [test for test, result in manifest.items()]

    if args.test_level == "individual-tests":
        tests = all_tests
    elif args.test_level == "test-file":
        tests = to_file_level_queries(all_tests)

    if args.n:
        tests = tests[:args.n]

    cts_runner = CTSIsolatedRunner(
        cts=cts,
        outdir=args.outdir,        
        tracking=args.track_mutants,
        mesa_shader_cache_on=args.mesa_shader_cache_on    
    )

    results : list[CTSRunResult] = cts_runner.run_tests(
        test_names=tests, 
        source_individual_tests=source_individual_tests,
        test_level=args.test_level)

    return 0

def kill_command(args) -> int:

    cts = CTS(
        cts=Path(args.cts),
        dawn=Path(args.dawn),
        vk_icd=Path(args.vk_icd),
    )

    base_opts = RunOptions(
        mesa_shader_cache_on=args.mesa_shader_cache_on,
        dawn_servers=1,
        dawn_isolate=False,
        echo=False,              # per-test output still goes to each stdout.txt
        timeout=args.baseline_timeout,
    )
    settings = KillSettings(
        timeout_factor=args.timeout_factor,
        min_timeout=args.min_timeout,
        stop_at_first_kill=not args.all_tests,
    )

    kill_all(cts, load_mapping(args.mapping), Path(args.outdir), base_opts, settings,
         only=args.mutants, order=args.order, limit=args.limit)
    
    return 0