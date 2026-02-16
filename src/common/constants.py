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
        "commit": "f545629edad55c0026b9b07f376a37dd0f759609",
    },
    "mesa": {
        "commit": "8418351c7c56f06312d1bbb285ce776b41f6790b",
        "release": "mesa-25.3.5",
    },
    "cts": {
        "commit": "49ac7ea2497c6d3a4a741557c46000d70655d55a"
    },
    "dredd": {
        "commit": "639addf1043e82e06f4cf3ead5f6ff50d3df1823"
    },
    "wgslsmith": ""
}
