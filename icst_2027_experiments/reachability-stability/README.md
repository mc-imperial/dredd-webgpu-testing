# Reachability Stability Experiments

These experiments measure the stability of the relationship between CTS tests and mutants: which tests reach which mutants under different execution configurations.

Each experiment script performs **one run**. Repeats are identified by the `repeat` argument; the scripts do not perform the repeat loop themselves.

## Experiments

| Script                      | Configuration                                                       |
| --------------------------- | ------------------------------------------------------------------- |
| `subtree-cached.sh`         | CTS subtree with Mesa shader caching enabled                        |
| `subtree-no-cache.sh`       | CTS subtree with Mesa shader caching disabled                       |
| `isolated-no-cache.sh`      | Individual tests, run in isolation, with caching disabled           |
| `isolated-dawn-option.sh`   | Individual tests, run in dawn isolation mode, with caching disabled |
| `file-subtrees-no-cache.sh` | CTS file-level subtrees, with caching disabled                      |

The subtree experiments take a query as an argument, for example:

```text
webgpu:shader,execution,flow_control,*
```

This is set for all scripts in `common.sh`, which also sets Dawn and Mesa locations.

## Running a subtree experiment

Both subtree scripts take:

```text
<servers> <repeat>
```

For example:

```bash
./experiments/subtree-cached.sh 1 1
```

runs the cached subtree experiment using 1 Dawn server for repeat 1.

```bash
./experiments/subtree-no-cache.sh 4 3
```

runs the uncached subtree experiment using 4 Dawn servers for repeat 3.

Results are written under:

```text
results/reachability-stability/<experiment>/servers-<servers>/
```

Each run gets a timestamped output directory.

## Running isolated tests

## Running isolated tests

The isolated experiment requires a `test_results.json` containing the individual CTS tests to run.

Usage:

```bash
./experiments/isolated-no-cache.sh <test_results.json> <servers> <repeat>
```

For example:

```bash
./experiments/isolated-no-cache.sh \
    results/reachability-stability/subtree-no-cache/servers-1/<run>/test_results.json \
    1 \
    1
```

The tests listed in `test_results.json` are run individually with Mesa shader caching disabled.

The `test_results.json` can come from a previous `subtree-no-cache.sh` run. It does not need to be produced on the same machine, provided it is copied to the machine running the isolated experiment.

## Running file-level subtrees

The file-level experiment also requires a `test_results.json`.

Usage:

```bash
./experiments/file-subtrees-no-cache.sh <test_results.json> <servers> <repeat>
```

For example:

```bash
./experiments/file-subtrees-no-cache.sh \
    results/reachability-stability/subtree-no-cache/servers-1/<run>/test_results.json \
    1 \
    1
```

The individual tests in `test_results.json` are grouped at the CTS **file level** before execution.

For example, these individual tests:

```text
webgpu:shader,execution,flow_control,for:for_basic:preventValueOptimizations=true
webgpu:shader,execution,flow_control,for:for_basic:preventValueOptimizations=false
webgpu:shader,execution,flow_control,for:for_init:preventValueOptimizations=true
```

are grouped into the file-level query:

```text
webgpu:shader,execution,flow_control,for,*
```

Mesa shader caching is disabled.

## Repeats and servers

The experiment matrix uses:

* Dawn servers: `1`, `4`
* Repeats: `1`–`5`

For example, one complete configuration can be run manually as:

```bash
./experiments/subtree-no-cache.sh 1 1
./experiments/subtree-cached.sh 1 1
./experiments/isolated-no-cache.sh <test_results.json> 1 1
./experiments/file-subtrees-no-cache.sh <test_results.json> 1 1
```

There is intentionally **no requirement that these commands be run by a single orchestrator or on the same machine**. The experiments can be distributed across machines and run independently.

## Output layout

Results are organized by experiment, server count, and repeat:

```text
results/
└── reachability-stability/
    ├── subtree-cached/
    │   ├── servers-1/
    │   └── servers-4/
    ├── subtree-no-cache/
    │   ├── servers-1/
    │   └── servers-4/
    ├── isolated-no-cache/
    │   ├── servers-1/
    │   └── servers-4/
    └── file-subtrees-no-cache/
        ├── servers-1/
        └── servers-4/
```

Each individual run creates a timestamped directory containing its results.
