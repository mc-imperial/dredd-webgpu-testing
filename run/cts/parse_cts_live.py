import subprocess
import os
import signal
from pathlib import Path
import time

def execute(cmd):
    popen = subprocess.Popen(cmd,
            stdout=subprocess.PIPE,
            universal_newlines=True)

    for stdout_line in iter(popen.stdout.readline,""):
        yield stdout_line

    popen.stdout.close()

    return_code = popen.wait()

def main():

    # Args
    #query = 'webgpu:shader,execution,flow_control,*' # CTS query to use
    query = 'webgpu:*'
    cts = Path('/data/dev/webgpu_cts')
    dawn = Path('/data/dev/dawn_mutated')
    vk_icd="/data/dev/mesa/build/install/share/vulkan/icd.d/lvp_icd.x86_64.json" 

    # Run CTS query and parse stdout live
    env = os.environ.copy()
    env["VK_ICD_FILENAMES"] = f'{vk_icd}'

    cmd = [f'{dawn}/tools/run',
            'run-cts', 
            '--verbose',
            f'--bin={dawn}/out/Debug',
            f'--cts={cts}',
            query] 

    shell_cmd = ' '.join(cmd)

    
    start_time = time.time()
    with subprocess.Popen(shell_cmd, 
        stdout=subprocess.PIPE, 
        universal_newlines=True, 
        shell=True,
        preexec_fn=os.setsid,
        env=env) as p:
        for line in p.stdout:
            print(line,end='')

            if f' - fail' in line:
                test = line[:line.index(' ')] 
                if test in reliable_tests
                print('EXITING!!!')
                os.killpg(os.getpgid(p.pid), signal.SIGTERM)

    
    end_time = time.time()
    print(f'Time taken is: {(end_time - start_time)/60} minutes')
    

    queries = [
        'webgpu:shader,*',
        'webgpu:api,*',
        'webpgu:compat,*',
        'webpgu:idl,*',
        'webgpu:util,*',
        'webgpu:web_platform,*',
        'webgpu:webworker,*'
    ]
    
    short_cmd = [f'{dawn}/tools/run',
        'run-cts', 
        '--verbose',
        f'--bin={dawn}/out/Debug',
        f'--cts={cts}'] 

    timings = {}

    for q in queries:
        start = time.time()
        cmd = short_cmd.copy()
        cmd.append(q)
        print(cmd)
        subprocess.run(cmd, env=env)
        end = time.time()
        timings[q] = ((end - start) / 60)
        print(f'Time to run is:{timings[q]}')
        with open('/data/work/webgpu/log.txt','a') as f:
            f.write(q)
            f.write(str(timings[q]))

    print(timings)

if __name__=="__main__":
    main()