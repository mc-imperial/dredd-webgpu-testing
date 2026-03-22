import subprocess
import os
import random
import time
import csv
from pathlib import Path

from src.kill.utils import run_wgslsmith_program_harness, gen_wgslsmith_program

TIME_LIMIT = 15 * 60  # 15 minutes in seconds

def main():
    base = Path("/data/dev")

    infomutated = Path(base, "mesa_mutated/mutation_info.json")
    vkicdmutated = Path(
        base,
        "mesa_mutated/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json"
    )
    vkicdunmutated = Path(
        base,
        "mesa/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json"
    )
    harness = Path(base, 'wgslsmith_harness/wgslsmith-harness')
    tmp = Path(base, 'dredd-webgpu-testing/data/speed_check')

    approaches = [
        {
            "name": 'mesa_mutated',
            "vk_icd": str(vkicdmutated),
            "device": 'dawn:vk:0'
        },
        {
            "name": 'mesa_unmutated',
            "vk_icd": str(vkicdunmutated),
            "device": 'dawn:vk:0'
        },
        {
            "name": 'nvidia',
            "vk_icd": "",
            "device": 'dawn:vk:7425'
        },
        {
            "name": 'mesa_ubuntu',
            "vk_icd": "",
            "device": 'dawn:vk:0'
        }

    ]

    for approach in approaches:
        print(f"Starting approach: {approach['name']}")

        start_time = time.time()
        iteration = 0
        data = []

        while True:
            # Check time before starting a new iteration
            if time.time() - start_time >= TIME_LIMIT:
                print(f"Finished {TIME_LIMIT/60} minutes for {approach['name']}")
                record_output(approach, data, tmp)
                break

            iteration += 1
            out = tmp / approach["name"]
            seed = random.randint(0, 2**64 - 1)
            test_name = f"wgslsmith_{seed}"

            prog = out / f"prog_{seed}.wgsl"
            inputs = out / f"input_{seed}.json"

            print(f'[{approach["name"]}] Iteration {iteration}: Generating WGSLsmith program in {prog}')

            if not gen_wgslsmith_program(prog, inputs, seed=seed):
                continue  # skip failed generation but keep going

            print(f'[{approach["name"]}] Running WGSLsmith program')

            unmutated = run_wgslsmith_program_harness(
                harness,
                prog,
                inputs,
                vk_icd=approach["vk_icd"],
                device=approach["device"]
            )

            result = process_stdout(unmutated)

            entry = {"iteration" : iteration,
                     "result" : result,
                     "stdout" : unmutated.stdout
                    }

            data.append(entry)

def process_stdout(unmutated):
    if 'timeout' in unmutated.stdout:
        return "timeout"
    if unmutated.returncode != 0:
        return "fail"
    
    return "success"

def record_output(approach, data, out):
    fieldnames = data[0].keys()
    with open(out / f"speed_check_{approach['name']}.csv", "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(data)

if __name__ == "__main__":
    main()