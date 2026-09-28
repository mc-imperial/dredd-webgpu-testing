import argparse
import os
from pathlib import Path

from cts_lab.cts import CTS

def main() -> int:
    parser = argparse.ArgumentParser(
        prog="cts-lab",
        description="Research tooling for WebGPU CTS experiments.",
    )

    subparsers = parser.add_subparsers(dest="command")

    run_parser = subparsers.add_parser(
        "run",
        help="Run the WebGPU Conformance Test Suite.",
    )

    run_parser.add_argument(
        "--cts",
        required=True,
        help="Path to the WebGPU CTS.",
    )

    run_parser.add_argument(
        "--dawn",
        required=True,
        help="Path to the Dawn checkout.",
    )

    run_parser.add_argument(
        "--vk-icd",
        required=True,
        help="VK_ICD_FILENAMES environment variable."
    )

    run_parser.add_argument(
        "--outdir",
        required=True,
        help="Output root directory."
    )

    run_parser.add_argument(
        "--query",
        default="webgpu:*",
        help="CTS test query.",
    )

    args = parser.parse_args()

    if args.command == "run":
        print(f"Running CTS with query: {args.query}")

        cts = CTS(
            cts=Path(os.environ["CTS"]),
            dawn=Path(os.environ["DAWN"]),
            query=args.query,
            vk_icd=Path(args.vk_icd),
        )

        output = Path(args.outdir, "run_001")

        run = cts.run(output)

        results = run.get_test_results()

        return 0

    parser.print_help()
    return 0