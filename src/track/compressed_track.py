#!/usr/bin/env python3
import os
import re

# Directory containing C files
TARGET_DIR = "/data/dev/mesa_tracked/src/compiler/nir"

# Pattern to find the lines you want to replace
FP_OPEN_PATTERN = re.compile(r'FILE\*\s+fp\s*=\s*fopen\((.+?),\s*"a"\);')
FP_CLOSE_PATTERN = re.compile(r'fclose\(fp\);')
FP_WRITE_PATTERN = re.compile(r'fprintf\(fp,\s*"%d\\n",\s*(.+?)\);')

VALUE_OPEN = '''fprintf(fp, "%d\\n", '''
VALUE_CLOSE = ''' + local_mutation_id + i);'''
VALUE_REPLACE = '''int value = ???;\n'''

# Lines for the new gzipped write
NEW_LINES_TEMPLATE = [
    'gzFile fp = gzopen({fname}, "ab");',
    'int value = {expr};',
    'gzwrite(fp, &value, sizeof(int));',
    'gzclose(fp);'
]

DELETE_START= '''  for (int i = 0; i < num_mutations; i++) {\n'''
DELETE_END='''  fclose(fp);\n'''

for root, dirs, files in os.walk(TARGET_DIR):
    for file in files:
        if not file.endswith((".c", ".cpp")):
            continue
        if file == 'nir_lower_readonly_images_to_tex.c':
            print('skip')
            continue
        path = os.path.join(root, file)
        with open(path, "r") as f:
            lines = f.readlines()

        print(f'Reading {file}')
        modified = False
        new_lines = []

        # Track if #include <zlib.h> is present
        has_zlib_include = any('#include <zlib.h>' in l for l in lines)

        # Get file value
        try:
            value = [x for x in lines if VALUE_OPEN in x and VALUE_CLOSE in x][0]
        except:
            print('Problem getting value for {file}')
            continue
        int_start = value.find(VALUE_OPEN) + len(VALUE_OPEN)
        int_end = value.find(VALUE_CLOSE)

        value_int = value[int_start:int_end]

        value_idx = lines.index(VALUE_REPLACE)
        lines[value_idx] = f"int value = {value_int};"

        delete_start = lines.index(DELETE_START)
        delete_end = lines.index(DELETE_END)

        del lines[delete_start:delete_end+1]

        with open(path,'w') as f:
            f.writelines(lines)

