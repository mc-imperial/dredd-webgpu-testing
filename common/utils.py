from pathlib import Path
import datetime
def process_logs(dir : Path):

    times = []

    for item in dir.iterdir():
        if item.is_file() and item.suffix == '.log':
            with open(item,'r') as f:
                data = f.readlines()
                start = data[0][:data[0].find(' - ')]
                end = data[-1][:data[-1].find(' - ')]

                start = datetime.datetime.strptime(start,    '%Y-%m-%d %H:%M:%S')
                end = datetime.datetime.strptime(end,      '%Y-%m-%d %H:%M:%S')

                times.append(end - start)


    total_time = sum(times, datetime.timedelta())
    print(total_time)

def main():
    dir = Path('/data/dev/dredd-webgpu-testing/llvmpipe/output/covered_by_cts')
    process_logs(dir)

if __name__=="__main__":
    main()