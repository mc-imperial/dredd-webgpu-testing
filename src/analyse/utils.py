from pathlib import Path
import json

def main():
    data = Path('/data/dev/dredd-webgpu-testing/data')
    stdout = Path(data, 'full_cts_stdout_031225.txt')
    output = Path(data, 'tests_with_results_031225.json')
    get_tests_with_results(stdout, output)

def get_tests_with_results(stdout, output):
    with open(stdout, 'r') as f:
        lines = f.readlines()

    test = [x for x in lines if x.startswith('webgpu:')]

    # Use a dict comprehension with the helper function
    result = {
        line.split(" - ", 1)[0]: extract_status(line.split(" - ", 1)[1])
        for line in lines
        if " - " in line
    }
    
    with open(output, 'w') as f:
        json.dump(result, f, indent=2)

def extract_status(status_part: str) -> str:
    """Return 'pass', 'fail', or 'skip' based on the text, or 'unknown'."""
    status_part = status_part.lower()
    if "pass" in status_part:
        return "pass"
    elif "fail" in status_part:
        return "fail"
    elif "skip" in status_part:
        return "skip"
    else:
        return "unknown"


if __name__=="__main__":
    main()
