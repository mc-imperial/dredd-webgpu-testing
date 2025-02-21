const { create, globals } = require(process.argv[2]); // Pass the absolute path to dawn.node as a parameter
Object.assign(globalThis, globals); // Provides constants like GPUBufferUsage.MAP_READ
let navigator = { gpu: create([]) };

async function main() {
    const adapter = await navigator.gpu?.requestAdapter();
    const device = await adapter?.requestDevice();
    if (!device) {
      console.log('need a browser that supports WebGPU');
      return;
    }

    const shader = shaderCode;
    const input = new Uint8Array(inputArray);
    const expected = new Uint8Array(expectedArray);
  
    const module = device.createShaderModule({
      label: 'WGSLsmith shader module',
      code: shader,
    });
  
    const pipeline = device.createComputePipeline({
      label: 'WGSLsmith shader pipeline',
      layout: 'auto',
      compute: {
        module,
      },
    });
    
    // create a buffer on the GPU to hold our computation
    // input 
    const inputBuffer = device.createBuffer({
      label: 'input buffer',
      size: input.byteLength,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST,
    });
    // Copy our input data to that buffer
    device.queue.writeBuffer(inputBuffer, 0, input);

    // create a buffer on the GPU to hold our computation
    // output
    const storageBuffer = device.createBuffer({
      label: 'storage buffer',
      size: input.byteLength,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST,
    });
  
    // create a buffer on the GPU to get a copy of the results
    const resultBuffer = device.createBuffer({
      label: 'result buffer',
      size: input.byteLength,
      usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
    });
  
    // Setup a bindGroup to tell the shader which
    // buffer to use for the computation
    const bindGroup = device.createBindGroup({
      label: 'bindGroup for work buffer',
      layout: pipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: { buffer: inputBuffer } },
        { binding: 1, resource: { buffer: storageBuffer }},
      ],
    });
  
    // Encode commands to do the computation
    const encoder = device.createCommandEncoder({
      label: 'compute encoder',
    });
    const pass = encoder.beginComputePass({
      label: 'compute pass',
    });
    pass.setPipeline(pipeline);
    pass.setBindGroup(0, bindGroup);
    pass.dispatchWorkgroups(input.length);
    pass.end();
  
    // Encode a command to copy the results to a mappable buffer.
    encoder.copyBufferToBuffer(storageBuffer, 0, resultBuffer, 0, resultBuffer.size);
  
    // Finish encoding and submit the commands
    const commandBuffer = encoder.finish();
    device.queue.submit([commandBuffer]);
  
    // Read the results
    await resultBuffer.mapAsync(GPUMapMode.READ);
    const result = new Uint8Array(resultBuffer.getMappedRange().slice());
    resultBuffer.unmap();
  
    console.log('input', input);
    console.log('result', result);
    //console.log('expected', expected);
}

main();