def to_file_level_query(test_name: str) -> str:
    parts = test_name.split(":")
    return ":".join(parts[:2]) + ",*"

def to_file_level_queries(test_names: list[str]) -> list[str]:
    return list(dict.fromkeys(
        to_file_level_query(test) for test in test_names
    ))