#!/usr/bin/env python3

import subprocess
import os

def main():
    base = "/data/dev"

    infomutated = os.path.join(base, "mesa_mutated/mutation_info.json")
    vkicdmutated = os.path.join(
        base,
        "mesa_mutated/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json"
    )
    dawn = os.path.join(base, "dawn")
    wgslsmith = os.path.join(base, "wgslsmith")

    cmd = [
        "python",
        "-m",
        "kill",
        "wgslsmith",
        "--vk-icd", vkicdmutated,
        "--dawn", dawn,
        "--wgslsmith", wgslsmith,
        "--debug",
    ]

    try:
        result = subprocess.run(
            cmd,
            check=True,
            text=True,
            capture_output=True
        )
        print(result.stdout)
    except subprocess.CalledProcessError as e:
        print("Command failed with return code:", e.returncode)
        print("stdout:", e.stdout)
        print("stderr:", e.stderr)


if __name__ == "__main__":
    main()