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

By default this creates:

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

* normal subtree runs, with a single `tracking/` directory;
* isolated runs, with a separate tracking directory for each test.

Configurations without tracking data (currently the Dawn `--dawn-isolate` configuration) are skipped.

## Custom output location

Use `--output` to specify a different CSV path:

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
