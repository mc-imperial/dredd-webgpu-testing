#!/usr/bin/env bash
# Commands used to produce the paper's figures and tables.
#
# Usage:
#   ./icst_2027_experiments/figures_for_paper.sh              run every step, in order
#   ./icst_2027_experiments/figures_for_paper.sh STEP [...]   run only the named steps
#   ./icst_2027_experiments/figures_for_paper.sh --list       list the steps
#
# Inputs not produced by this script (made once, then committed or copied here):
#   results/reachability/raw/shared-v2/run-*          shared runs from the instances
#                                                     (aws/copy_shared_runs.sh)
#   results/reachability/runtimes/isolated_runtimes.csv
#                                                     analysis/check_isolated_runtime.sh --csv
#   $GEN/mutant_file_ranges.csv, $GEN/setup_generated_macros.tex
#                                                     gen_setup_generated.py --ranges-out
#                                                     (needs Docker and the reachability image)
#   $GEN/mutant_function_ranges.csv                   analysis/map_mutants_to_functions.py
#                                                     (needs Docker and the reachability image)
#   results/fuzz/run_72h/..., results/fuzz/unreached-24h-ip-*
#                                                     fuzzing trials copied from the instances
set -euo pipefail

# Always run from the repository root, wherever the script is called from.
cd "$(dirname "$0")/.."

# ---- paths ------------------------------------------------------------------
GEN=icst_2027_experiments/generated
REACH=results/reachability
ISO=$REACH/processed/isolated          # run-<timestamp>/, one per isolated run
SHARED_RAW=$REACH/raw/shared-v2        # run-<timestamp>/<configuration>/, one per shared run
SHARED=$REACH/processed/shared-v2      # the same runs, processed (process_shared_tracking.py)
MERGED=$REACH/merged/mutant_to_tests_union5_isolated-no-cache_max100.json
SURV=results/cts-survival
FUZZ_SURV=results/fuzz/run_72h                 # fuzzing against the reached-but-surviving mutants
FUZZ_UNR=results/fuzz/unreached-24h            # fuzzing against the unreached mutants (prefix)

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

# RQ1(a): IDs of the isolated <=100-test mapping mutants, for processing shared runs on the instances.
mapping_ids() {
    python3 -c "
import json
print('\n'.join(json.load(open('$MERGED'))))" > "$GEN/isolated_max100_mutant_ids.txt"
    wc -l "$GEN/isolated_max100_mutant_ids.txt"
}

# RQ1(a): stability macros and table from the merge summary.
stability_latex() {
    python3 icst_2027_experiments/gen_rq1a_stability.py \
        --merged-summary "${MERGED%.json}_summary.txt" \
        "$ISO"/run-*/mutant_to_tests_isolated-no-cache_counts_summary.txt \
        --out-dir "$GEN"
}

# RQ1(a): shared execution against the isolated reference.
shared_compare() {
    python3 icst_2027_experiments/gen_rq1a_shared.py "$SHARED" \
        --isolated "$ISO"/run-*/mutant_to_tests_isolated-no-cache_per_mutant.csv \
        --mapping "$MERGED" --out-dir "$GEN"
}

# RQ1(a): isolated and shared runtimes.
runtimes() {
    python3 icst_2027_experiments/gen_rq1a_runtime.py \
        --isolated "$REACH/runtimes/isolated_runtimes.csv" \
        --shared-raw "$SHARED_RAW" \
        --out "$GEN/rq1a_runtime_macros.tex"
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
        --mapping "$MERGED" \
        --out-dir "$GEN"
}

# RQ1(b): kill rate and time per mutant (macros; the chart is not used in the paper).
cts_kill_rate() {
    python3 icst_2027_experiments/gen_rq1b_killrate.py \
        "$SURV"/twenty-four-hours/run*_24h \
        --out-dir "$GEN"
}

# RQ1(b): where the unreached and the surviving mutants are (tables and macros).
survivor_analysis() {
    python3 icst_2027_experiments/gen_rq1b_survivor_analysis.py \
        "$GEN/mutant_file_ranges.csv" \
        --functions "$GEN/mutant_function_ranges.csv" \
        --isolated "$ISO"/run-*/mutant_to_tests_isolated-no-cache_per_mutant.csv \
        --runs "$SURV"/twenty-four-hours/run*_24h \
        --out-dir "$GEN"
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

# RQ2: compare the 72-hour fuzzing trials against the reached-but-surviving mutants
# (picks up however many trials exist). Trials are labelled R1, R2, ... (reached).
fuzz_compare() {
    local trials=( "$FUZZ_SURV"/cts5x72h-random-seed-*/cts5x72h-random-seed )
    local labels
    labels=$(seq -s, -f "R%g" 1 "${#trials[@]}")
    python3 icst_2027_experiments/analysis/compare_fuzz_runs.py "${trials[@]}" \
        --survivors "$SURV/combined/survivors.txt" \
        --labels "$labels" \
        --split-hours 0 \
        --outdir "$FUZZ_SURV/comparison"
}

# RQ2: compare the fuzzing trials against the unreached mutants (picks up however many exist).
# Trials are labelled U1, U2, ... (unreached).
fuzz_compare_unreached() {
    local trials=( "$FUZZ_UNR"-ip-* )
    local labels
    labels=$(seq -s, -f "U%g" 1 "${#trials[@]}")
    python3 icst_2027_experiments/analysis/compare_fuzz_runs.py "${trials[@]}" \
        --survivors "$GEN/unreached_mutant_ids.txt" \
        --labels "$labels" \
        --split-hours 0 \
        --outdir "$FUZZ_UNR-comparison"
}

# RQ2: macros and figure, reached-but-surviving mutants (\Fuzz..., rq2_...), with each
# trial's kills at 24 h to compare with the unreached runs.
fuzz_latex() {
    local trials=( "$FUZZ_SURV"/cts5x72h-random-seed-*/cts5x72h-random-seed )
    python3 icst_2027_experiments/gen_rq2_fuzz.py "$FUZZ_SURV/comparison" \
        --kills-at-hours 24 \
        --runs "${trials[@]}" \
        --out-dir "$GEN"
}

# RQ2: macros and figure, unreached mutants (\FuzzUnr..., rq2_unreached_...), with reach
# from the trials' programs.jsonl.
fuzz_latex_unreached() {
    local trials=( "$FUZZ_UNR"-ip-* )
    python3 icst_2027_experiments/gen_rq2_fuzz.py "$FUZZ_UNR-comparison" \
        --prefix FuzzUnr --tag unreached_ \
        --kills-at-hours 24 \
        --runs "${trials[@]}" \
        --out-dir "$GEN"
}

# Steps in the order they run when no step is named (each step after the ones it reads from).
STEPS=(reach_summaries reach_latex merge mapping_ids stability_latex shared_compare runtimes
       survival_combine survival_latex cts_kill_rate survivor_analysis
       unreached_ids fuzz_compare fuzz_compare_unreached fuzz_latex fuzz_latex_unreached)

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