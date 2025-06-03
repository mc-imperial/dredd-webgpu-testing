export const input = [187,109,195,87,75,93,50,183,71,73,153,207,208,244,218,80,83,103,141,237,113,201,212,26,74,171,136,57,48,100,54,171,229,131,225,43,133,57,244,77,131,231,119,50,220,250,186,215,161,64,41,117,201,6,2,223,244,102,23,16,109,39,45,82];
export const expected = [187,109,195,87,75,93,50,183,71,73,153,207,208,244,218,80,83,103,141,237,113,201,212,26,74,171,136,57,48,100,54,171,229,131,225,43,133,57,244,77,131,231,119,50,220,250,186,215,161,64,41,117,201,6,2,223,244,102,23,16,109,39,45,82];
export const shaderCode = ` 
 // {"0:0":[187,109,195,87,75,93,50,183,71,73,153,207,208,244,218,80,83,103,141,237,113,201,212,26,74,171,136,57,48,100,54,171,229,131,225,43,133,57,244,77,131,231,119,50,220,250,186,215,161,64,41,117,201,6,2,223,244,102,23,16,109,39,45,82]}
// Seed: 18300077454165818045

struct Struct_1 {
    a: vec3<f32>,
    b: vec4<i32>,
    c: i32,
    d: f32,
}

struct Struct_2 {
    a: vec3<u32>,
    b: Struct_1,
    c: Struct_1,
    d: i32,
}

struct Struct_3 {
    a: Struct_2,
    b: vec3<u32>,
}

struct UniformBuffer {
    a: i32,
    b: vec4<i32>,
    c: vec3<u32>,
    d: i32,
    e: vec3<u32>,
}

struct StorageBuffer {
    a: u32,
    b: f32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: vec4<u32>;

var<private> global1: array<vec4<bool>, 18> = array<vec4<bool>, 18>(vec4<bool>(true, true, true, true), vec4<bool>(false, true, true, false), vec4<bool>(false, true, false, false), vec4<bool>(true, true, true, false), vec4<bool>(false, false, false, false), vec4<bool>(true, false, true, true), vec4<bool>(false, true, true, false), vec4<bool>(false, false, true, true), vec4<bool>(true, false, true, true), vec4<bool>(false, false, false, false), vec4<bool>(false, true, true, true), vec4<bool>(false, true, false, false), vec4<bool>(true, true, true, true), vec4<bool>(false, false, true, false), vec4<bool>(true, false, true, false), vec4<bool>(false, false, false, false), vec4<bool>(false, false, true, true), vec4<bool>(false, true, false, true));

var<private> global2: bool;

@compute
@workgroup_size(1)
fn main() {
    let x = u_input.a;
    s_output = StorageBuffer(~global0.x, 1000f);
}

`;