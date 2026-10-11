# Reachability Analysis

These scripts extract the raw CTS → mutant reachability data produced by the reachability-stability experiments into a format that can be used by downstream analysis scripts.

## Extracting results

Given a completed experiment run, for example:

```text
results/small-run/run-20261004_155747/
```

run:

```bash
python3 scripts/analysis/extract_results.py \
    results/small-run/run-20261004_155747
```

By default, this creates:

```text
results/small-run/run-20261004_155747/reachability.csv
```

The CSV contains one row per **test × mutant** relationship, together with the experiment configuration:

```text
configuration,servers,repeat,test,mutant
subtree-no-cache,1,1,...,929
subtree-no-cache,1,1,...,24930
...
```

The extractor handles both tracking layouts used by the experiments:

* Normal subtree runs, with a single `tracking/` directory.
* Isolated runs, with a separate tracking directory for each test.

Configurations without tracking data (currently the Dawn `--dawn-isolate` configuration) are skipped.

## Generating a mutant-to-tests mapping

The extracted reachability CSV can be converted into a mapping from each mutant ID to the tests that reach it. This is useful for downstream analysis of mutant reachability across tests.

Run:

```bash
python3 icst_2027_experiments/analysis/mutants_to_tests.py \
    results/small-run/run-20261004_155747/reachability.csv \
    subtree-no-cache
```

Replace `subtree-no-cache` with the desired configuration from the CSV's `configuration` column.

By default, this creates:

```text
mutant_to_tests.json
```

The JSON maps each mutant ID to a sorted list of tests that reach it, for example:

```json
{
  "929": [
    "test_a",
    "test_b"
  ],
  "24930": [
    "test_b",
    "test_c"
  ]
}
```

The actual test names depend on the experiment data.

### Generating a histogram

To also generate a histogram showing how many tests reach each mutant, add `--histogram`:

```bash
python3 icst_2027_experiments/analysis/mutants_to_tests.py \
    results/small-run/run-20261004_155747/reachability.csv \
    subtree-no-cache \
    --histogram
```

This generates two files:

* `mutant_to_tests.json` — the mutant-to-tests mapping.
* `mutant_to_tests_histogram.csv` — the number of mutants in each bucket, grouped by how many tests reach them.

The histogram uses fixed-width buckets. The bucket width is calculated automatically from the number of distinct tests represented in the mapping, aiming for approximately 20 buckets.

You can specify a custom output filename with `-o` or `--output`. The histogram filename is derived from the chosen JSON filename:

```bash
python3 icst_2027_experiments/analysis/mutants_to_tests.py \
    results/small-run/run-20261004_155747/reachability.csv \
    subtree-no-cache \
    --output results/mutant_to_tests.json \
    --histogram
```

This produces `results/mutant_to_tests.json` and `results/mutant_to_tests_histogram.csv`.

## Custom output location

Use `--output` to specify a different CSV path when extracting results:

```bash
python3 scripts/analysis/extract_results.py \
    results/small-run/run-20261004_155747 \
    --output /tmp/reachability.csv
```

## Using the data in Python

The lower-level extraction functions are in `load_tracking.py`.

For a test-level representation:

```python
from scripts.analysis.load_tracking import to_dataframe

df = to_dataframe(run_dir)
```

This gives one row per CTS test, including the set and count of reached mutants.

For a test × mutant representation:

```python
from scripts.analysis.load_tracking import to_mutant_dataframe

df = to_mutant_dataframe(run_dir)
```

This gives one row for every reached mutant:

```text
test    mutant
...     929
...     24930
...
```

Downstream analysis scripts should use these functions rather than reading the raw tracking files directly.
