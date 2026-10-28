#!/usr/bin/env bash
# Commands used to produce the paper's figures and tables.
#
# Usage:
#   ./icst_2027_experiments/figures_for_paper.sh              run every step, in order
#   ./icst_2027_experiments/figures_for_paper.sh STEP [...]   run only the named steps
#   ./icst_2027_experiments/figures_for_paper.sh --list       list the steps
#
# Data sources not produced by this script:
#   results/reachability/raw/shared/run-*   extracted from
#     webgpu-shader-run-non-isolated-1-run.tar.gz (as run-single) and
#     webgpu-shader-run-non-isolated-4-runs.zip (the four run-<timestamp> folders)
set -euo pipefail

# Always run from the repository root, wherever the script is called from.
cd "$(dirname "$0")/.."

# ---- paths ------------------------------------------------------------------
GEN=icst_2027_experiments/generated
REACH=results/reachability
ISO=$REACH/processed/isolated          # run-<timestamp>/, one per isolated run
SHARED_RAW=$REACH/raw/shared           # run-<timestamp>/<configuration>/, one per shared run
CFG_OUT=$REACH/processed/shared
MERGED=$REACH/merged/mutant_to_tests_union5_isolated-no-cache_max100.json
BUILD=REPLACE_ME/build_mutant_mapping.py   # TODO: set to the real path
SURV=results/cts-survival

# ---- steps ------------------------------------------------------------------

# RQ1(a): distribution of reaching tests, one summary per isolated repeat.
reach_summaries() {
    for counts in "$ISO"/run-*/mutant_to_tests_isolated-no-cache_counts.csv; do
        echo "== $counts"
        python3 src/cts_lab/analyse/plot_reachability.py "$counts"
    done
}

# RQ1(a): LaTeX macros, table and figure from the five summaries.
reach_latex() {
    python3 icst_2027_experiments/gen_rq1a_reachability.py \
        "$ISO"/run-*/mutant_to_tests_isolated-no-cache_counts_summary.txt \
        --out-dir "$GEN"
}

# RQ1(a): merge the five isolated repeats by union.
merge() {
    local merge_args=()
    for d in "$ISO"/run-*; do
        merge_args+=(--run "$d/mutant_to_tests_isolated-no-cache_max100.json"
                           "$d/mutant_to_tests_isolated-no-cache_per_mutant.csv")
    done
    python3 icst_2027_experiments/analysis/merge_mappings.py \
        --max-tests 100 --output "$MERGED" "${merge_args[@]}"
}

# RQ1(a): stability macros and table from the merge summary.
stability_latex() {
    python3 icst_2027_experiments/gen_rq1a_stability.py \
        --merged-summary "${MERGED%.json}_summary.txt" \
        "$ISO"/run-*/mutant_to_tests_isolated-no-cache_counts_summary.txt \
        --out-dir "$GEN"
}

# RQ1(a): per-mutant counts for the cheaper configurations (pass 1 only).
config_counts() {
    for root in "$SHARED_RAW"/run-*; do
        local name
        name=$(basename "$root")
        for cfg in subtree-no-cache subtree-cache file-subtrees-no-cache; do
            echo "== $name / $cfg"
            python3 "$BUILD" "$root" --configuration "$cfg" --counts-only \
                --output "$CFG_OUT/$name/mutant_to_tests_${cfg}.json"
        done
    done
}

# RQ1(a): IDs of the isolated <=100-test mapping mutants, for processing shared runs on the instances.
mapping_ids() {
    python3 -c "
import json
print('\n'.join(json.load(open('$MERGED'))))" > "$GEN/isolated_max100_mutant_ids.txt"
    wc -l "$GEN/isolated_max100_mutant_ids.txt"
}

# RQ1(a): shared execution against the isolated reference.
shared_compare() {
    python3 icst_2027_experiments/gen_rq1a_shared.py results/reachability/processed/shared-v2 \
        --isolated "$ISO"/run-*/mutant_to_tests_isolated-no-cache_per_mutant.csv \
        --mapping "$MERGED" --out-dir "$GEN"
}

# RQ1(b): combine the five 24-hour CTS kill runs.
survival_combine() {
    python3 icst_2027_experiments/analysis/combine_survivors.py \
        "$SURV"/twenty-four-hours/run*_24h --outdir "$SURV/combined"
}

# RQ1(b): survival macros and table.
survival_latex() {
    python3 icst_2027_experiments/gen_rq1b_survival.py \
        "$SURV/combined/summary.txt" \
        --merged-summary "${MERGED%.json}_summary.txt" \
        --out-dir "$GEN"
}

# RQ2: compare the 72-hour fuzzing trials (picks up however many exist).
fuzz_compare() {
    local trials=( results/fuzz/run_72h/cts5x72h-random-seed-*/cts5x72h-random-seed )
    local labels
    labels=$(seq -s, -f "T%g" 1 "${#trials[@]}")
    python3 icst_2027_experiments/analysis/compare_fuzz_runs.py "${trials[@]}" \
        --survivors results/cts-survival/combined/survivors.txt \
        --labels "$labels" \
        --split-hours 0 \
        --outdir results/fuzz/run_72h/comparison
}

# RQ2: fuzzing macros, table and figure.
fuzz_latex() {
       python3 icst_2027_experiments/gen_rq2_fuzz.py \
           results/fuzz/run_72h/comparison --out-dir "$GEN"
   }

# RQ2: mutants reached by no isolated repeat (targets for the unreached-mutant fuzzing).
unreached_ids() {
    python3 -c "
import csv, glob
reached = set()
for f in glob.glob('$ISO/run-*/mutant_to_tests_isolated-no-cache_per_mutant.csv'):
    reached |= {int(r['mutant_id']) for r in csv.DictReader(open(f)) if int(r['n_tests']) > 0}
total = 837386
with open('$GEN/unreached_mutant_ids.txt', 'w') as out:
    out.writelines(f'{m}\n' for m in range(total) if m not in reached)
print(f'reached: {len(reached):,}   unreached: {total - len(reached):,}')"
}

# Steps in the order they run when no step is named.
STEPS=(reach_summaries reach_latex merge mapping_ids stability_latex config_counts
       survival_combine survival_latex fuzz_compare fuzz_latex unreached_ids
       shared_compare)

# ---- dispatch ---------------------------------------------------------------
if [[ $# -eq 0 ]]; then
    selected=("${STEPS[@]}")
elif [[ $1 == --list ]]; then
    printf '%s\n' "${STEPS[@]}"
    exit 0
else
    selected=("$@")
fi

for step in "${selected[@]}"; do
    if [[ ! " ${STEPS[*]} " == *" $step "* ]]; then
        echo "Unknown step: $step (use --list to see the steps)" >&2
        exit 1
    fi
done

for step in "${selected[@]}"; do
    echo "#### $step"
    "$step"
done