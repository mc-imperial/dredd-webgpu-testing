import argparse
import pandas as pd


BUCKET_SIZE = 10      # 1–5, 6–10, 11–15, ...
TIME_DECIMALS = 1    # decimal places for all time values
PCT_DECIMALS = 1     # decimal places for percentage values


def bucket_covering_tests(n: float) -> str:
    if pd.isna(n):
        return "unknown"
    n = int(n)
    start = ((n - 1) // BUCKET_SIZE) * BUCKET_SIZE + 1
    end = start + BUCKET_SIZE - 1
    return f"{start}-{end}"


def main(csv_path: str):
    df = pd.read_csv(csv_path)

    # Ensure numeric columns
    time_cols = [
        "unmutated_time_sec",
        "mutated_time_sec",
        "total_time_sec",
        "num_covering_tests",
    ]
    df[time_cols] = df[time_cols].apply(pd.to_numeric, errors="coerce")

    # Add bucket column
    df["covering_tests_bucket"] = df["num_covering_tests"].apply(bucket_covering_tests)
    
    # ---- Overall evaluation time summary ----
    print("\n=== Overall summary ===")

    total_sec = df["total_time_sec"].sum()
    hours = int(total_sec // 3600)
    minutes = int((total_sec % 3600) // 60)
    seconds = round(total_sec % 60, TIME_DECIMALS)

    total_mutants = len(df)
    killed = (df["status"] == "killed").sum()
    survived = (df["status"] == "survived").sum()

    print(
        f"\nIt took {hours} hours, {minutes} minutes, and {seconds} seconds "
        f"to analyse {total_mutants} mutants, with {killed} killed and {survived} surviving."
    )

    # ---- Overall outcome counts ----
    print("\n=== Overall outcome counts ===")
    outcome_counts = df["status"].value_counts()
    outcome_counts["total"] = outcome_counts.sum()
    print(outcome_counts)

    # ---- Outcome by bucket (counts + %) ----
    print("\n=== Outcome by covering-test bucket ===")
    counts = (
        df.groupby(["covering_tests_bucket", "status"])
          .size()
          .unstack(fill_value=0)
    )

    for col in ["killed", "survived"]:
        if col not in counts.columns:
            counts[col] = 0

    counts = counts[["killed", "survived"]]
    counts["total"] = counts.sum(axis=1)

    pct = (
        counts[["killed", "survived"]]
        .div(counts["total"], axis=0)
        .mul(100)
        .round(PCT_DECIMALS)
        .add_suffix("_pct")
    )

    outcome_by_bucket = pd.concat([counts, pct], axis=1)
    print(outcome_by_bucket)

    # ---- Evaluation time per mutant (wide table) ----
    print("\n=== Overall evaluation time per mutant (seconds) ===")
    time_summary = df["total_time_sec"].agg({
        "mean": "mean",
        "std": "std",
        "min": "min",
        "median": "median",
        "max": "max",
    }).round(TIME_DECIMALS)

    # Convert to a single-row DataFrame for wide table display
    time_summary_df = pd.DataFrame([time_summary])
    print(time_summary_df)

    # ---- Evaluation time by bucket ----
    print("\n=== Evaluation time vs covering-test bucket ===")
    time_by_bucket = (
        df.groupby("covering_tests_bucket")
          .agg(
              mutants=("mutant_id", "count"),
              mean_total_time=("total_time_sec", "mean"),
              std_total_time=("total_time_sec", "std"),
          )
          .round(TIME_DECIMALS)
    )
    print(time_by_bucket)

    print('\n')

if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Summarise mutation testing results (bucketed by coverage)"
    )
    parser.add_argument(
        "csv",
        help="Path to mutation_summary CSV file",
    )
    args = parser.parse_args()

    main(args.csv)