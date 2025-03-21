import subprocess
import os
from pathlib import Path

from mutate_mesa import *
from run.wgslsmith.utils import gen_wgslsmith_program

def main():
    
    base = Path('/data/dev')
    dredd = Path(base,'dredd/third_party/clang+llvm/bin/dredd')
    mutation_dir = Path('src/gallium/drivers/llvmpipe')
    #mutation_dir = Path('src')
    mesa = Path(base,'mesa')

    mutated : FileInfo = FileInfo(Path(base, 'mesa_mutated'),
        Path(base,'mesa_mutated','build','compile_commands.json'),
        Path(base,'mesa_mutated','mutation_info.json'),
        track_only=False)

    tracked : FileInfo = FileInfo(Path(base, 'mesa_tracked'),
        Path(base,'mesa_tracked','build','compile_commands.json'),
        Path(base,'mesa_tracked','mutation_info.json'),
        track_only=True)

    restore(mesa)
    build(mesa)
    install(mesa)


    restore(mutated.src)
    restore(tracked.src)

    (mutation_files, tracked_files) = get_files_for_mutation(mutated.compile_commands, 
                                        mutation_dir, 
                                        mutated.src, 
                                        tracked.src)

    with open(Path(mutated.src,'mutated_files.txt'), 'w') as f:
        for file in mutation_files:
            f.write(file + '\n')

    mutated.mutation_files = mutation_files
    tracked.mutation_files = tracked_files
    
    x = mutated
        
    mutate(dredd,
        x.mutation_files,
        x.mutant_info_file,
        x.compile_commands,
        x.src,
        x.track_only)
    
    build(x.src)
    install(x.src)

    # Generate 10 WGSLsmith programs
    for i in range(10):
        gen_wgslsmith_program(Path('dredd_issues/sample_{i}.wgsl'))

    # Run the WGSLsmith programs node.js using [unmutated Mesa (/data/dev/mesa), mutated Mesa (/data/dev/mesa_mutated)]
    # Time all tests and each test individually (to see variation)
    # Initially use a 60 second timeout but adjust this based on results to e.g. mutated timeout is 10x longer than the longest unmutated time
    for driver in [mesa, mesa_mutated.src]:
        for i in range(10):
            run_wgslslmith_program(Path('dredd_issues/sample_{i}.js'), Path(driver, 'build/install/share/vulkan/icd.lvp_icd.x86_64.json'))

    # Compare time

if __name__=="__main__":
    main()