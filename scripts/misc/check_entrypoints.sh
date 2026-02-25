#!/bin/bash
cd /home/ubuntu/dev/dredd-webgpu-testing/src || exit 1

# Define queries and matching outputs
queries=(
  'webgpu:shader,execution,memory_model,adjacent:*'
  'webgpu:shader,execution,statement,compound:*'
  'webgpu:shader,execution,expression,call,builtin,atomics,*'
  'webgpu:shader,validation,expression,binary,*'
  'webgpu:shader,validation,statement,*'
)

outputs=(
  'output/entrypoint/execution_memory_adj.csv'
  'output/entrypoint/execution_stat_comp.csv'
  'output/entrypoint/execution_expr_call_builtin_atom.csv'
  'output/entrypoint/execution_flowcontrol_2.csv'
  'output/entrypoint/validation_expr_binary.csv'
  'output/entrypoint/validation_statement.csv'
)

# Loop over them by index
for i in "${!queries[@]}"; do
    QUERY="${queries[$i]}"
    OUTPUT="${outputs[$i]}"

    echo "Running query: $QUERY"
    echo "Saving to: $OUTPUT"
    echo "--------------------------------"

    python analyse/check_reset_entrypoint.py \
        --query "$QUERY" \
        --run_joint \
        --run_single \
        --output_csv "$OUTPUT" \
        --process_data

done
