import subprocess
import os
import json

from pathlib import Path

from run.wgslsmith.utils import gen_js_program, get_inputs, run_wgslsmith_program, extract_output

def get_js_tests():
    kill_folder = Path('/data/dev/dredd-webgpu-testing/llvmpipe/output/tests')

    tests = [Path(kill_folder,x) for x in os.listdir(kill_folder) if os.path.isdir(Path(kill_folder,x))]

    print(os.listdir(kill_folder))
    for test in tests:
        inputs = get_inputs(Path(test,'prog.wgsl'))
        with open(Path(test,'inputs.json'), 'w') as f:
            json.dump(inputs, f)
        gen_js_program(Path(test,'prog.wgsl'),
            Path(test,'prog.js'),
            input_path=Path(test,'inputs.json'))

def sanitized_kill(wgslsmith_js_program, dawn_node, sanitised_vk_icd):
    
    env = os.environ.copy()
    env["LD_PRELOAD"] = "/usr/lib/llvm-18/lib/clang/18/lib/linux/libclang_rt.asan-x86_64.so"
    sanitized_result = run_wgslsmith_program(wgslsmith_js_program,
                        dawn_node,
                        vk_icd = sanitised_vk_icd,
                        timeout=(60*3),
                        env=env)

    print('\nSanitized result:')
    print(sanitized_result.stdout)

def get_mutant_killing_tests(kill_dir : Path):

    tests = {}
    
    for dir in kill_dir.iterdir(): 
        with open(Path(dir, 'kill_info.json'),'r') as f:
            kill_info = json.load(f)

        if kill_info['kill_type'] == 'KillStatus.KILL_DIFFERENT_STDOUT':
            tests[str(dir.stem)] = kill_info['killing_test']

    return tests

def main():

    base = Path('/data/dev')

    mesa_mutated = Path(base,'mesa_mutated')
    mesa_tracked = Path(base, 'mesa_tracked')
    mesa_sanitized = Path(base, 'mesa')
    info_file_mutated = Path(mesa_mutated, 'mutation_info.json')
    info_file_tracked = Path(mesa_tracked, 'mutation_info.json')
    mutated_vk_icd =  Path(mesa_mutated, 'build/install/share/vulkan/icd.d/lvp_icd.x86_64.json')
    tracked_vk_icd = Path(mesa_tracked, 'build/install/share/vulkan/icd.d/lvp_icd.x86_64.json')

    sanitised_vk_icd = Path(mesa_sanitized, 'build_sanitized/install/share/vulkan/icd.d/lvp_icd.x86_64.json')

    dawn_node = Path('/data/dev/dawn/out/Debug/dawn.node')

    kill_dir = Path(base,'dredd-webgpu-testing/llvmpipe/output/killed_mutants/')
    test_dir = Path(base,'dredd-webgpu-testing/llvmpipe/output/tests/')
    output_json = Path(base, 'dredd-webgpu-testing/llvmpipe/output/results_summary.json')
    output_pretty = Path(base, 'dredd-webgpu-testing/llvmpipe/output/results_summary.txt')

    dredd_covered_mutants_path = Path(test_dir, 'temporary_check.txt')

    #mutant_killing_tests = {'438114':'wgslsmith_3179931480'}
    mutant_killing_tests = get_mutant_killing_tests(kill_dir)

    results = {}

    for mutant, test in mutant_killing_tests.items():

        wgslsmith_js_program = Path(test_dir, test, 'prog.js')
        
        regular_result = run_wgslsmith_program(wgslsmith_js_program, 
                        str(dawn_node), 
                        vk_icd = str(tracked_vk_icd), 
                        tracking = dredd_covered_mutants_path,
                        timeout = 60)

        print('\nUnmutated result:')
        print(regular_result.stdout)
        print(regular_result.stderr)

        regular_output = extract_output(regular_result.stdout)

        mutated_result = run_wgslsmith_program(wgslsmith_js_program,
                            dawn_node,
                            vk_icd = mutated_vk_icd,
                            mutants=[mutant],
                            timeout=(60*3))

        print('\nMutated result:')
        print(mutated_result.stdout)
        print(mutated_result.stderr)

        mutated_output = extract_output(mutated_result.stdout)

        print('output:')
        print(f'regular output:\n{regular_output}')
        print(f'mutated output:\n{mutated_output}')
        
        results[mutant] = {'test' : test,
                            'unmutated output' : regular_output,
                            'mutated output' : mutated_output}


    with open(output_json,'w') as f:
        json.dump(results,f)

    with open(output_pretty,'w') as f:
        for mutant, info in results.items():
            f.write(f'Mutant: {mutant}\n')
            f.write(f'Test: {info["test"]}\n')
            f.write(f'Unmutated:\t')
            for x in info['unmutated output']:
                f.write(f'{x}\t')
            f.write(f'\nMutated:\t')
            for x in info['mutated output']:
                f.write(f'{x}\t')
            f.write('\n\n')


    


if __name__=="__main__":
    main()