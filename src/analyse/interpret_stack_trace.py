import subprocess

def main():
    txt_file = 'stack_trace.txt'
    
    with open(txt_file,'r') as f:
        txt = f.readlines()

    stacks_idx = []
    inside_stack = False

    for idx, line in enumerate(txt):
        if line[:3] == "===":
            if not inside_stack:
                start = idx
                inside_stack = True
            else:
                end = idx
                inside_stack = False
                stacks_idx.append((start, end))

    print(f'There are {len(stacks_idx)} call stacks.')

    stacks = [txt[start:end+1] for (start,end) in stacks_idx]

    mesa_calls = [[line for line in stack if 'mesa' in line] for stack in stacks]

    for item in mesa_calls:
        for line in item:
            print(line)
        print('-------')

if __name__=="__main__":
    main()
