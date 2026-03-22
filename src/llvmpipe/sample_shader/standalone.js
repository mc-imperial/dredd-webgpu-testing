const { create, globals } = require("/data/dev/dawn/out/Debug/dawn.node");
Object.assign(globalThis, globals); // Provides constants like GPUBufferUsage.MAP_READ
let navigator = { gpu: create([]) };
async function main() {
	 
	const input = new Uint8Array([215,23,148,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
	const expected = new Uint8Array([215,23,148,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
	const shader = ` 
	 struct Struct_1 {
	    a: u32,
	    b: vec2<u32>,
	    c: f32,
	    d: bool,
	    e: i32,
	}

	struct Struct_2 {
	    a: f32,
	}

	struct Struct_3 {
	    a: vec4<u32>,
	}

	struct Struct_4 {
	    a: vec4<u32>,
	    b: vec4<bool>,
	    c: bool,
	    d: vec4<f32>,
	    e: Struct_1,
	}

	struct UniformBuffer {
	    a: u32,
	}

	struct StorageBuffer {
	    a: u32,
	}

	@group(0)
	@binding(0)
	var<uniform> u_input: UniformBuffer;

	@group(0)
	@binding(1)
	var<storage, read_write> s_output: StorageBuffer;

	@compute
	@workgroup_size(1)
	fn main() {
	    s_output = StorageBuffer(2*u_input.a);
	}

	`;

	   const adapter = await navigator.gpu?.requestAdapter();
    const device = await adapter?.requestDevice();
    if (!device) {
      console.log('need a browser that supports WebGPU');
      return;
    }

    const module = device.createShaderModule({
      label: 'doubling compute module',
      code: shader,
    });
  
    const pipeline = device.createComputePipeline({
      label: 'doubling compute pipeline',
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
      label: 'doubling encoder',
    });
    const pass = encoder.beginComputePass({
      label: 'doubling compute pass',
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
    console.log('expected', expected);
  }
  
  /*function fail(msg) {
    // eslint-disable-next-line no-alert
    alert(msg);
  }
  */
  main();
