import argparse
import os
import json
from pathlib import Path

from cts_lab.cts import CTS, CTSIsolatedRunner
from cts_lab.queries import to_file_level_queries

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

    args = parser.parse_args()

    if args.command == "run":
        return run_command(args)

    if args.command == "isolate":
        return isolate_command(args)

    parser.print_help()
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
        "--track-mutants",
        action="store_true",
        help="Track mutants during CTS run.",
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
    
    run = cts.run(
        query=args.query,
        outdir=Path(args.outdir),
        tracking=args.track_mutants,
        mesa_shader_cache_on=args.mesa_shader_cache_on,
        dawn_servers=args.n_dawn_runners,
        dawn_isolate=args.dawn_isolate
    )

    run.get_test_results()

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
        source_individual_tests=source_individual_test,
        test_level=args.test_level)

    return 0