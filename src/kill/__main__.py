import argparse

def main():
    
    root = Path(os.path.dirname(os.path.abspath(__file__))).parent.parent

    parser = argparse.ArgumentParser()
    
    parser.add_argument('tracked_vk_icd',
            type=Path,
            help = "Path to tracked_mesa vk_icd.json")
    parser.add_argument('dawn',
            type=Path,
            help='Path to Dawn')
    parser.add_argument('--cts',
            type=Path,
            help='Path to CTS',
            default="")
    parser.add_argument('--output',
            type=Path,
            default=Path(root, 'data'))
    parser.add_argument('--map',
            type=Path,
            help='Path to mutant to test mapping file',
            default='')
    parser.add_argument('--wgslsmith_touched',
            type=Path,
            help='Path to list of mutants touched by a sample of WGSLsmith tests',
            default='')

    args = parser.parse_args()


if __name__=="__main__":
    main()