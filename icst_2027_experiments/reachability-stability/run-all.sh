#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd -- "$SCRIPT_DIR/../.." && pwd)"

CONTAINER_PROJECT_ROOT=/workspace/dredd-webgpu-testing
IMAGE=dredd-webgpu-testing:reachability-stability

RUN_TIMESTAMP=$(date +%Y%m%d_%H%M%S)

RESULTS_ROOT="results/webgpu-shader-run/run-${RUN_TIMESTAMP}"
SERVERS=4
REPEAT=1

mkdir -p "$PROJECT_ROOT/$RESULTS_ROOT"
chmod 777 "$PROJECT_ROOT/$RESULTS_ROOT"

cp "$SCRIPT_DIR/common.sh" "$PROJECT_ROOT/$RESULTS_ROOT/common.sh"

run_experiment() {
    local script="$1"
    shift

    echo
    echo "============================================================"
    echo "Running: $script"
    echo "============================================================"

    time docker run --rm \
        --ulimit core=1073741824:1073741824 \
        --mount "type=bind,source=$PROJECT_ROOT,target=$CONTAINER_PROJECT_ROOT" \
        --workdir "$CONTAINER_PROJECT_ROOT" \
        -e RESULTS_ROOT="$RESULTS_ROOT" \
        "$IMAGE" \
        "/bin/bash" \
        "icst_2027_experiments/reachability-stability/$script" \
        "$@"
}

case "${1:-all}" in
    all)
        run_experiment subtree-no-cache.sh "$SERVERS" "$REPEAT"

        SUBTREE_RUN="$(
            find \
                "$PROJECT_ROOT/$RESULTS_ROOT/subtree-no-cache/servers-${SERVERS}" \
                -mindepth 1 \
                -maxdepth 1 \
                -type d \
                | sort \
                | tail -n 1
        )"

        INDIVIDUAL_TEST_JSON="$SUBTREE_RUN/individual_test_results.json"

        if [[ ! -s "$INDIVIDUAL_TEST_JSON" ]]; then
            echo "ERROR: subtree-no-cache did not produce a valid test manifest:" >&2
            echo "$INDIVIDUAL_TEST_JSON" >&2
            exit 1
        fi

        echo
        echo "Using test manifest:"
        echo "$INDIVIDUAL_TEST_JSON"

        run_experiment subtree-cache.sh "$SERVERS" "$REPEAT"

        run_experiment isolated-no-cache.sh \
            "$SERVERS" \
            "$REPEAT" \
            "$CONTAINER_PROJECT_ROOT/${INDIVIDUAL_TEST_JSON#"$PROJECT_ROOT/"}"

        run_experiment file-subtrees-no-cache.sh \
            "$SERVERS" \
            "$REPEAT" \
            "$CONTAINER_PROJECT_ROOT/${INDIVIDUAL_TEST_JSON#"$PROJECT_ROOT/"}"

        ;;

    subtree)
        run_experiment subtree-no-cache.sh "$SERVERS" "$REPEAT"
        ;;

    cache)
        run_experiment subtree-cache.sh "$SERVERS" "$REPEAT"
        ;;

    isolated)
        run_experiment isolated-no-cache.sh "$SERVERS" "$REPEAT"
        ;;

    file-subtrees)
        run_experiment file-subtrees-no-cache.sh "$SERVERS" "$REPEAT"
        ;;

    *)
        echo "Usage: $0 [all|subtree|cache|isolated|file-subtrees]" >&2
        exit 1
        ;;
esac