import argparse
import os
import json
from pathlib import Path

from cts_lab.cts import CTS, CTSIsolatedRunner

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
        "--query",
        default="webgpu:*",
        help="CTS test query.",
    )
    
    run_parser.add_argument(
        "--n-dawn-runners",
        type=int,
        required=True,
        help="Number of parallel Dawn runners used to run the CTS. Set using an internal Dawn flag.",
    )

    # ------------------------------------------------------------------
    # isolate
    # ------------------------------------------------------------------

    isolate_parser = subparsers.add_parser(
        "isolate",
        help="Run CTS tests individually from a test manifest.",
    )

    add_common_arguments(isolate_parser)

    isolate_parser.add_argument(
        "--test-json",
        required=True,
        help="JSON file containing tests to run. Output of run command.",
    )

    isolate_parser.add_argument(
        "--n",
        type=int,
        required=False,
        help="Number of tests to execute."
    )

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


def run_command(args) -> int:
    cts = CTS(
        cts=Path(args.cts),
        dawn=Path(args.dawn),
        vk_icd=Path(args.vk_icd),
    )

    print(f"Running CTS with query: {args.query}")

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

def isolate_command(args) -> int:
    cts = CTS(
        cts=Path(args.cts),
        dawn=Path(args.dawn),
        vk_icd=Path(args.vk_icd)
    )

    manifest = json.loads(
        Path(args.test_json).read_text()
    )

    tests = [test for test, result in manifest.items()]

    if args.n:
        tests = tests[:args.n]

    cts_runner = CTSIsolatedRunner(
        cts=cts,
        outdir=args.outdir,        
        tracking=args.track_mutants,
        mesa_shader_cache_on=args.mesa_shader_cache_on

    )

    results : list[CTSRunResult] = cts_runner.run_tests(tests)

    return 0