from pathlib import Path
from zipfile import ZipFile
import json
import pandas as pd
import re

# Display the full width of any column
pd.set_option("display.max_colwidth", None)  # None means unlimited width

def main():
    data = Path('/data/dev/dredd-webgpu-testing/data')
    stdout = Path(data, 'full_cts_stdout_031225.txt')
    tracking_files = Path(data, 'tracking_files_full_cts_031225.zip')
    test_to_id_json = Path(data, 'mapping_test_to_id_031225.json')
    output = Path(data, 'tests_with_results_031225.json')
    
    print(f'Getting test results...')
    test_result_dict = get_tests_with_results(stdout, output)

    print('Loading test to ID map...')
    with open(test_to_id_json, 'r') as f:
        test_to_id_map = json.load(f)

    id_to_test_map = {v : k for k, v in test_to_id_map.items()}
    
    print(f'Getting tracked test info...')
    tracked_tests = get_tests_with_tracking(tracking_files, id_to_test_map)

    print(f'There are {len(tracked_tests)} tracked tests')

    df = make_test_df(test_result_dict, tracked_tests)
    print(df.head())

    # Count how many 1s and 0s in the tracked column
    counts = df["tracked"].value_counts().sort_index()  # sort_index to show 0 then 1
    print(counts)

    assert len(tracked_tests) == counts.get(1, 0), f"Expected {len(tracked_tests)}"

def make_test_df(test_result_dict, tracked_tests):
    # Convert test_result_dict to DataFrame
    df_results = pd.DataFrame(
        list(test_result_dict.items()), columns=["test_name", "result"]
    )

    # Convert tracked_tests to DataFrame
    df_tracked = pd.DataFrame(tracked_tests, columns=["test_name"])
    df_tracked["tracked"] = 1

    # Merge with all tracked_tests to see if any are missing in test_result_dict
    df_merged = df_tracked.merge(df_results, on="test_name", how="left")

    # Fill NaN in 'tracked' (should always be 1) and 'result'
    missing_results = df_merged[df_merged["result"].isna()]["test_name"].tolist()
    if missing_results:
        print("Warning: These tracked tests are missing in test_result_dict:")
        for test in missing_results:
            print("  ", test)

    # Now merge df_results with tracked info to get full DataFrame
    df_results = df_results.merge(df_tracked, on="test_name", how="left")
    df_results["tracked"] = df_results["tracked"].fillna(0).astype(int)

    return df_results

def get_tests_with_tracking(tracking_files, id_to_test_map):
    with ZipFile(tracking_files, 'r') as z:
        file_names = z.namelist()

    pattern = re.compile(r"test_id_(\d+)\.txt")    
    
    # Step 1: filter files matching 'test_id_{x}.txt'
    test_ids = ['test_id_' + m.group(1)
                for fname in file_names
                if (m := pattern.search(fname))]
    
    # Step 2: map test IDs to test names
    test_names = [id_to_test_map[tid] for tid in test_ids]

    return test_names

def get_tests_with_results(stdout, output):
    # If output JSON already exists, load and return it
    if output.exists():
        with open(output, 'r') as f:
            result = json.load(f)
        print(f"Loaded results from existing file: {output}")
        
        return result
    
    with open(stdout, 'r') as f:
        lines = f.readlines()

    tests = [x for x in lines if x.startswith('webgpu:')]

    # Use a dict comprehension with the helper function
    result = {
        test.split(" - ", 1)[0]: extract_status(test.split(" - ", 1)[1])
        for test in tests
        if " - " in test
    }
    
    with open(output, 'w') as f:
        json.dump(result, f, indent=2)

    return result

def extract_status(status_part: str) -> str:
    """Return 'pass', 'fail', or 'skip' based on the text, or 'unknown'."""
    status_part = status_part.rstrip(":").lower()
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
