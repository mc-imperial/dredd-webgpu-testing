from pathlib import Path

class FileInfo:
    def __init__(self, 
        src : Path, 
        compile_commands : Path, 
        mutant_info_file : Path,
        track_only : bool):

        self.src : Path = src
        self.compile_commands : Path = compile_commands
        self.mutant_info_file : Path = mutant_info_file
        self.track_only : bool = track_only
        self.mutation_files : list[str] = []

    def __str__(self):
        return self.src.stem