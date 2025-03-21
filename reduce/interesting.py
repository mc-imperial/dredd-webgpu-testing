import argparse
from pathlib import Path
from run.wgslsmith.utils import gen_js_program, run_wgslsmith_program, extract_output

def main():
    parser = argparse.ArgumentParser()

    parser.add_argument("program_wgsl")
    parser.add_argument("inputs")
    parser.add_argument("reduced_wgsl")
    parser.add_argument("program_js")
    parser.add_argument("dawn_node")
    parser.add_argument("vk_icd")
    parser.add_argument("mutant")
    parser.add_argument("--crash", action=argparse.BooleanOptionalAction)

    args = parser.parse_args()

    # Generate JavaScript from WGSL
    try:
        gen_js_program(args.reduced_wgsl,
            args.program_js,
            input_path = args.inputs)
    except:
        print('Problem generating JS program')
        exit(1)

    regular_result = run_wgslsmith_program(args.program_js, 
                    str(args.dawn_node), 
                    vk_icd = str(args.vk_icd), 
                    timeout = 60)
    print(regular_result.stdout)
    print(f'Return code: {regular_result.returncode}')

    if regular_result.returncode != 0:
        print('Non-mutated execution failed')
        exit(1)

    try:
        regular_output = extract_output(regular_result.stdout)
    except:
        print('Problem extracting non-mutated output')
        exit(2)

    mutated_result = run_wgslsmith_program(args.program_js,
                        args.dawn_node,
                        vk_icd = args.vk_icd,
                        mutants=[args.mutant],
                        timeout=(60*3))

    if mutated_result.returncode != 0:
        if args.crash:
            # Exit with code 42 for crassh (which is interesting)
            # But only interesting as long as there is some stdout or stderr
            if 'Invalid' not in mutated_result.stdout:
                print(mutated_result.stdout)
                print(f'Return code: {mutated_result.returncode}')
                exit(42)
            else:
                exit(3)
        else:
            print('Mutated execution failed')
            exit(3)

    if args.crash:
        print('Mutated execution succeeded, not interesting for a crash kill')
        exit(4)

    try:
        mutated_output = extract_output(mutated_result.stdout)
    except:
        print('Problem extracting mutated output')
        exit(4)

    print('output:')
    print(f'regular output:\n{regular_output}')
    print(f'mutated output:\n{mutated_output}')

    # Exit with code 42 for mismatch (which is interesting)
    if regular_output != mutated_output:
        exit(42)
    else:
        exit(5)


if __name__=="__main__":
    main()