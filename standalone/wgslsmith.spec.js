"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.g = exports.description = void 0;
exports.description = `Test WGSLsmith compute shaders`;
const test_group_js_1 = require("../../common/framework/test_group.js");
const gpu_test_js_1 = require("../gpu_test.js");
const check_contents_js_1 = require("../util/check_contents.js");
const shader_wgslsmith_js_1 = require("./shader_wgslsmith.js");
exports.g = (0, test_group_js_1.makeTestGroup)(gpu_test_js_1.GPUTest);
exports.g.test('basic_compute_wgslsmith')
    .desc(`Test a trivial WGSLsmith compute shader`)
    .fn(async (t) => {
    const code = shader_wgslsmith_js_1.shaderCode;
    const inputArray = new Uint8Array(shader_wgslsmith_js_1.input);
    const expectedArray = new Uint8Array(shader_wgslsmith_js_1.expected);
    const pipeline = t.device.createComputePipeline({
        layout: 'auto',
        compute: {
            module: t.device.createShaderModule({
                code,
            }),
            entryPoint: 'main',
        },
    });
    const inputBuffer = t.makeBufferWithContents(inputArray, GPUBufferUsage.COPY_SRC | GPUBufferUsage.UNIFORM);
    const outputBuffer = t.makeBufferWithContents(expectedArray, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST);
    const bg = t.device.createBindGroup({
        layout: pipeline.getBindGroupLayout(0),
        entries: [
            {
                binding: 0,
                resource: {
                    buffer: inputBuffer,
                },
            },
            {
                binding: 1,
                resource: {
                    buffer: outputBuffer,
                },
            },
        ],
    });
    const encoder = t.device.createCommandEncoder();
    const pass = encoder.beginComputePass();
    pass.setPipeline(pipeline);
    pass.setBindGroup(0, bg);
    pass.dispatchWorkgroups(1, 1, 1);
    pass.end();
    t.queue.submit([encoder.finish()]);
    const bufferReadback = await t.readGPUBufferRangeTyped(outputBuffer, {
        srcByteOffset: 0,
        type: Uint8Array,
        typedLength: expectedArray.length,
        method: 'copy',
    });
    const got = bufferReadback.data;
    console.log(got);
    t.expectOK((0, check_contents_js_1.checkElementsEqual)(got, expectedArray));
});
//# sourceMappingURL=wgslsmith.spec.js.map