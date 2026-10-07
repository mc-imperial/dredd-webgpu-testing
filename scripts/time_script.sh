#!/usr/bin/env bash

start=$(date '+%Y-%m-%d %H:%M:%S')
start_epoch=$(date +%s)

echo "Started: $start"

"$@"
status=$?

end=$(date '+%Y-%m-%d %H:%M:%S')
end_epoch=$(date +%s)

echo "Finished: $end"
echo "Elapsed: $((end_epoch - start_epoch)) seconds"
echo "Exit status: $status"

if [ "$status" -ne 0 ]; then
    echo "FAILED at: $end"
fi

exit "$status"