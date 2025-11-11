import re
import subprocess
import pandas as pd

def main():

    name = 'joint_tests_ComputeShaderGraphicsShader'
    stdout = f'output/stdout_{name}.txt'

    count_stack_trace_prints(stdout)

    output_csv = f'output/stack_call_info_{name}.csv'
    
    get_full_call_stacks(stdout, output_csv)

def count_stack_trace_prints(stdout):
    
    identifier = '] ==='

    stacks = get_stacks_from_stdout(stdout, with_server_id = True)

    dredd = [[line.rstrip() for line in stack if 'DREDD' in line] for stack in stacks] 

    flat_dredd = set([item for s in dredd for item in s])

    for s in flat_dredd:
        print(s)

    print(len(set(flat_dredd)))


def get_stacks_from_stdout(stdout, with_server_id = False):
 
    with open(stdout,'r') as f:
        txt = f.readlines()

    stacks_idx = []
    inside_stack = False

    pattern = re.compile(r'^\[\d+\] ===')

    for idx, line in enumerate(txt):
        if (with_server_id and pattern.match(line)) or (not with_server_id and line[:3] == "==="):
            if not inside_stack:
                start = idx
                inside_stack = True
            else:
                end = idx
                inside_stack = False
                stacks_idx.append((start, end))

    print(f'There are {len(stacks_idx)} call stacks.')

    stacks = [txt[start:end+1] for (start,end) in stacks_idx]
    
    return stacks

def get_full_call_stacks(txt_file, output_csv):
 
    pd.set_option('display.max_colwidth', None)

    stacks = get_stacks_from_stdout(txt_file)

    calls = [[line.rstrip() for line in stack if re.search(r'\(\+(.*?)\)', line) is not None] for stack in stacks]

    interpret_stack(calls, output_csv)

def get_mesa_call_stacks(txt_file, output_csv):
        
    pd.set_option('display.max_colwidth', None)

    stacks = get_stacks_from_stdout(txt_file)

    mesa_calls = [[line.rstrip() for line in stack if 'mesa' in line] for stack in stacks]

    interpret_stack(mesa_calls, output_csv)

def interpret_stack(calls, output_csv):

    df = pd.DataFrame({
        'id': range(1, len(calls)+1),
        'call': calls
    })

    long_df = df.explode('call', ignore_index=True)

    long_df['address'] = long_df['call'].apply(lambda x: re.search(r'\(\+(.*?)\)', x).group(1))
    long_df['file'] = long_df['call'].apply(lambda x: re.search(r'(.*?)\(\+', x).group(1))
    long_df['src_info'] = long_df.apply(lambda row: get_code_info(row['file'], row['address']), axis=1)
    long_df[['file','function','line']] = pd.DataFrame(long_df['src_info'].tolist(), index=long_df.index)

    long_df[['id','file','function','line']].to_csv(output_csv, index=False)

def get_code_info(file, address) -> tuple[str,str,str]:

    cmd = ['addr2line',
           '-e',
           file,
           '-f',
           address]

    result = subprocess.run(cmd, encoding='utf-8', capture_output=True)

    info = result.stdout.split('\n')
    
    function = info[0]
    file = info[1][:info[1].rfind(':')]
    line = info[1][info[1].rfind(':')+1:]
    
    return (file, function, line)

if __name__=="__main__":
    main()
