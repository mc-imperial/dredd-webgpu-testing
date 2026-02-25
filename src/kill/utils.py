# utils.py
import json
from pathlib import Path
from datetime import datetime

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