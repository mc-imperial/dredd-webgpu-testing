'''
    This script checks whether our chosen Mesa entrypoint is appropriate.
    The entrypoint should ideally be executed *once* per test.
    The entrypoint must be executed before any other code in the Mesa codebase is called.
    
    We check this by running two things:
        (1) We run a sample group of tests with a particular entrypoint set, with Dredd in tracking mode.
            This should output a set of tracking files, one for each test, listing the unique IDs 
            of the mutants touched by that test.
        (2) We then run each test in a fully isolated process without per-test tracking (since 
            we're only running a single test).
    
    We compare the mutant IDs in the relevant files from steps (1) and (2). If the entrypoint is 
    appropriate, we should find that the IDs for each test are the same using each approach. If
    the IDs are different, then our entrypoint is probably not appropriate.

'''

import subprocess
import os

def main():

    test_query: str = 'webgpu:shader,execution,flow_control,loop,*'

    # Mutate Mesa using the per-test tracking Dredd
    cmd = ['..//scripts/mutate.sh']
    result = subprocess.run(cmd, cwd='..')

    # Run a subset of tests in per-test tracking mode
    # TODO: Should already be implemented but double check

    # Mutate Mesa using the standard Dredd tracking
    # TODO: Implement this

    # Run each test in a separate process using a loop
    # TODO: Implement this

    # Compare the results across approaches 
    # TODO: Implement this


if __name__=="__main__":
    main()
