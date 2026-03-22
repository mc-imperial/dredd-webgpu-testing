# utils.py
import json
from pathlib import Path
from datetime import datetime
import subprocess
import ast
import os
from typing import Optional, List


class KillStatus:
    SURVIVED = "SURVIVED"
    KILLED = "KILLED"

def write_json_atomic(path: Path, data: dict) -> None:
    """
    Write JSON atomically to avoid corruption if the process crashes.
    """
    tmp_path = path.with_suffix(".tmp")
    with open(tmp_path, "w") as f:
        json.dump(data, f, indent=2)
    tmp_path.replace(path)

def now_iso() -> str:
    return datetime.utcnow().isoformat()

def gen_wgslsmith_program(
    program_path: Path,
    *,
    seed: Optional[int] = None,
    recondition: bool = True,
    as_js: bool = True,
) -> bool:
    """
    Generate a WGSLsmith program at `program_path`.
    Optionally recondition and emit a self-contained JS runner.
    """
    input_path = program_path.parent / f"{program_path.stem}_inputs.json"
    js_path = program_path.with_suffix(".js")

    cmd = ["wgslsmith", "gen", "-o", str(program_path)]

    if recondition:
        cmd.append("--recondition")

    if seed is not None:
        cmd.append(str(seed))

    result = subprocess.run(cmd)
    if result.returncode != 0:
        return False

    inputs = _get_inputs(program_path)
    with open(input_path, "w") as f:
        json.dump(inputs, f)

    if as_js:
        _gen_js_program(program_path, js_path, input_path=input_path)

    return True


def _get_inputs(program_path: Path) -> dict:
    """
    Extract WGSLsmith input dictionary from first comment line.
    """
    with open(program_path) as f:
        first_line = f.readline()

    # strip leading comment markers
    input_str = first_line[3:]
    return ast.literal_eval(input_str)


def _gen_js_program(
    program_wgsl: Path,
    program_js: Path,
    *,
    input_path: Path,
) -> None:
    """
    Generate a self-contained JS runner for a WGSL program.
    """
    with open(program_wgsl) as f:
        shader_code = f.read()

    with open(input_path) as f:
        inputs = json.load(f)["0:0"]

    # Ensure storage buffer minimum
    MIN_STORAGE = 128
    if len(inputs) < MIN_STORAGE:
        inputs.extend([0] * (MIN_STORAGE - len(inputs)))

    input_array = ",".join(map(str, inputs))

    boilerplate = Path(__file__).parent / "boilerplate" / "shader_boilerplate.js"
    with open(boilerplate) as f:
        boilerplate_code = f.read()

    with open(program_js, "w") as f:
        f.write(f"const inputArray = [{input_array}];\n")
        f.write(f"const expectedArray = [{input_array}];\n")
        f.write(f"const shaderCode = `\n{shader_code}`;\n")
        f.write(boilerplate_code)

def run_wgslsmith_program(
    program_js: Path,
    dawn_node: Path,
    *,
    vk_icd: Optional[str] = None,
    mutants: Optional[List[int]] = None,
    tracking: Optional[Path] = None,
    timeout: int = 60,
    env: Optional[dict] = None,
):
    """
    Run a WGSLsmith JS program using Node + Dawn.
    Returns subprocess.CompletedProcess or None on timeout.
    """
    if tracking and mutants:
        raise ValueError("Cannot enable tracking and mutants simultaneously")

    run_env = (env or os.environ).copy()

    if vk_icd:
        run_env["VK_ICD_FILENAMES"] = str(vk_icd)

    if tracking:
        run_env["DREDD_MUTANT_TRACKING_FILE"] = str(tracking)

    if mutants:
        run_env["DREDD_ENABLED_MUTATION"] = ",".join(map(str, mutants))

    cmd = ["node", str(program_js), str(dawn_node)]

    process = subprocess.Popen(
        cmd,
        env=run_env,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
    )

    output_lines = []

    try:
        for line in process.stdout:
            print(line, end="")  # live output
            output_lines.append(line)

        process.wait(timeout=timeout)

    except subprocess.TimeoutExpired:
        process.kill()
        return None

    result_output = "".join(output_lines)
    
    return result

def extract_output(stdout: str) -> list[int]:
    """
    Extract integer output array from WGSLsmith program stdout.
    """
    s = stdout.replace("\n", "").replace(" ", "")

    start = s.find("[", s.find("result")) + 1
    end = s.find("]", start)

    if start <= 0 or end <= start:
        return []

    return [int(x) for x in s[start:end].split(",") if x]