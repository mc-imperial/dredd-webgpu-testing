const { create, globals } = require("/data/dev/dawn2/out/Debug/dawn.node");
Object.assign(globalThis, globals);
const navigator = { gpu: create([]) };

async function main() {
  console.log('Starting')
  const device = await(await navigator.gpu.requestAdapter()).requestDevice();
  console.log('Next')
  if (!device) {
    fail('need a browser that supports WebGPU');
    return;
  }

}

main();
  
