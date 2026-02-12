MIN_TIMEOUT_FOR_MUTANT_COMPILATION: float = 1.0
TIMEOUT_MULTIPLIER_FOR_MUTANT_COMPILATION: float = 5.0
MIN_TIMEOUT_FOR_MUTANT_EXECUTION: float = 1.0
TIMEOUT_MULTIPLIER_FOR_MUTANT_EXECUTION: float = 5.0
DEFAULT_COMPILATION_TIMEOUT: int = 600
DEFAULT_RUNTIME_TIMEOUT: int = 600

COMMITS = {
    "depot_tools": {
        "commit": "42786f6e46c25c30dd58f69283ab6fcd0c959f58"
    },
    "dawn": {
        "commit": "a44d7a3d78f23c680491c0fc04f53a1df62e02ff",
        "release": "chromium/7680"
    },
    "mesa": {
        "commit": "8418351c7c56f06312d1bbb285ce776b41f6790b",
        "release": "mesa-25.3.5",
    },
    "webgpu_cts": "",
    "dredd": {
        "commit": "639addf1043e82e06f4cf3ead5f6ff50d3df1823"
    },
    "wgslsmith": ""
}
