import argparse

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
        "--query",
        required=True,
        help="CTS test query.",
    )

    args = parser.parse_args()

    if args.command == "run":
        # Call your experiment/CTS code here.
        print(f"Running CTS with query: {args.query}")
        return 0

    parser.print_help()
    return 0