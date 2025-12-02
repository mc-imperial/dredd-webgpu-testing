from pathlib import Path
import os

directory = Path('/data/dev/mesa_tracked/src/compiler/nir')

substr = "if (atomic_exchange(&__dredd_already_recorded_"

fn = '''void mark_execution_once_per_test(void) {
    static const char *last_env = NULL;
    static int printed_for_this_test = 0;

    const char *env = getenv("DREDD_MUTANT_TRACKING_FILE");

    if (env == NULL) {
        return; // no tracking, nothing to do
    }

    // If this is a new test
    if (last_env == NULL || strcmp(last_env, env) != 0) {
        last_env = env;
        printed_for_this_test = 0;   // reset state for the new test
    }

    // If we haven't printed for this test yet, do it now
    if (!printed_for_this_test) {
        printed_for_this_test = 1;
        fprintf(stderr, "[coverage] compiler file touched for test: %s\\n", env);
    }
}
'''

print_substr = 'fprintf(stderr, "[coverage] compiler file touched for test: %s\\n", env);'
print_substr_rpl = '''    pid_t pid = getpid();\n    fprintf(stderr, "[coverage] file touched: %s pid=%d\\n", __FILE__, (int)pid);\n'''

print_substr_2 = '''fprintf(stderr, "[coverage] file touched: %s pid=%d\\n", __FILE__, (int)pid);\n'''
print_substr_2_rpl = '''fprintf(stderr, "[coverage] for test: %s file touched: %s pid=%d\\n", env, __FILE__, (int)pid);\n'''

env_substr = 'atomic_bool __dredd_already_recorded'

dredd_substr = 'static void __dredd_record_covered_mutants'

fn_call = '  mark_execution_once_per_test();\\n'

fn_substr = 'mark_execution_once_per_test();'

fn_decl = 'void mark_execution_once_per_test(void)' 
new_fn_decl = 'static void mark_execution_once_per_test(void)'
def make_fn_static():
  for file in directory.rglob('*.c'):
        with open(file, 'r') as f:
            lines = f.readlines()

        line_idx = next((i for i, s in enumerate(lines) if fn_decl in s), -1)

        if line_idx != -1:
            lines[line_idx] = lines[line_idx].replace(fn_decl, new_fn_decl)

            with open(file, 'w') as f:
                f.writelines(lines)



def clean_fn_call():
    for file in directory.rglob('*.c'):
        with open(file, 'r') as f:
            lines = f.readlines()

        line_idx = next((i for i, s in enumerate(lines) if fn_substr in s), -1)

        if line_idx != -1:
            lines[line_idx] = lines[line_idx].replace('\\n', '\n')

            with open(file, 'w') as f:
                f.writelines(lines)


def add_fn_call():
    for file in directory.rglob('*.c'):
        with open(file, 'r') as f:
            lines = f.readlines()

        line_idx = next((i for i, s in enumerate(lines) if dredd_substr in s), -1)

        if line_idx != -1:
            lines.insert(line_idx + 1, fn_call)

            with open(file, 'w') as f:
                f.writelines(lines)

def add_env_tracking():
    for file in directory.rglob('*.c'):
        with open(file, 'r') as f:
            lines = f.readlines()

        line_idx = next((i for i, s in enumerate(lines) if env_substr in s), -1)

        if line_idx != -1:
            lines.insert(line_idx, fn)

            with open(file, 'w') as f:
                f.writelines(lines)


def remove_bool():
    for file in directory.rglob('*.c'):
        with open(file, 'r') as f:
            lines = f.readlines()

        line_idx = next((i for i, s in enumerate(lines) if substr in s), -1)

        if line_idx != -1:
            lines[line_idx] = lines[line_idx][2:]

            with open(file, 'w') as f:
                f.writelines(lines)

def add_pid_and_filename():
    for file in directory.rglob('*.c'):
        with open(file, 'r') as f:
            lines = f.readlines()

        line_idx = next((i for i, s in enumerate(lines) if print_substr in s), -1)

        if line_idx != -1:
            lines[line_idx] = print_substr_rpl

            with open(file, 'w') as f:
                f.writelines(lines)

def add_header():
    for file in directory.rglob('*.c'):
        with open(file, 'r') as f:
            lines = f.readlines()

        line_idx = next((i for i, s in enumerate(lines) if '#include' in s), -1)

        if line_idx != -1:
            lines.insert(line_idx, "#include <unistd.h>\n")

            with open(file, 'w') as f:
                f.writelines(lines)

def add_env_back_in():
    for file in directory.rglob('*.c'):
        with open(file, 'r') as f:
            lines = f.readlines()

        line_idx = next((i for i, s in enumerate(lines) if print_substr_2 in s), -1)

        if line_idx != -1:
            lines[line_idx] = lines[line_idx].replace(print_substr_2, print_substr_2_rpl)

            with open(file, 'w') as f:
                f.writelines(lines)


def main():
    add_env_back_in()

if __name__=="__main__":
    main()
