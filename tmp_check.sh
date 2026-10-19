OUT=/workspace/dredd-webgpu-testing/results/parse-check
mkdir -p $OUT /tmp/parse && cd /tmp/parse
printf '#!/bin/sh\nexit 1\n' > t.sh && chmod +x t.sh
touch $OUT/done.txt $OUT/parse_errors.txt
dirs=(/workspace/dredd-webgpu-testing/results/fuzz/run1/kills/*/)
n=${#dirs[@]}; i=0
for d in "${dirs[@]}"; do
  i=$((i+1)); id=$(basename $d)
  grep -qx "$id" $OUT/done.txt && continue
  cp "$d/prog.wgsl" p.wgsl
  out=$(java -jar $PERSES_JAR -i p.wgsl -t t.sh -o out 2>&1 | grep -A6 AntlrFailureException)
  if [ -n "$out" ]; then
    line=$(echo "$out" | grep -oP "line: \K\d+")
    echo "$id | $(echo "$out" | grep -oP "msg: \K.*") | $(sed -n "${line}p" p.wgsl | head -c 120)" >> $OUT/parse_errors.txt
    echo "[$i/$n] $id: parse error"
  else
    echo "[$i/$n] $id: ok"
  fi
  echo "$id" >> $OUT/done.txt
done
echo "Done: $(wc -l < $OUT/parse_errors.txt) of $n programs failed to parse"
cut -d'|' -f2 $OUT/parse_errors.txt | sort | uniq -c | sort -rn
cd /workspace/dredd-webgpu-testing