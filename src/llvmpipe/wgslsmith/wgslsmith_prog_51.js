export const input = [155,101,141,212,197,201,233,64,192,11,82,213,166,130,224,59,105,97,53,8,186,210,92,225,67,224,62,255,228,48,78,241,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [155,101,141,212,197,201,233,64,192,11,82,213,166,130,224,59,105,97,53,8,186,210,92,225,67,224,62,255,228,48,78,241,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[155,101,141,212,197,201,233,64,192,11,82,213,166,130,224,59,105,97,53,8,186,210,92,225,67,224,62,255,228,48,78,241]}
// Seed: 12944432133620626898

struct Struct_1 {
    a: f32,
    b: bool,
    c: f32,
}

struct Struct_2 {
    a: u32,
    b: vec2<i32>,
    c: bool,
    d: Struct_1,
}

struct Struct_3 {
    a: vec4<bool>,
}

struct Struct_4 {
    a: vec4<u32>,
    b: vec3<f32>,
}

struct Struct_5 {
    a: bool,
    b: i32,
    c: vec3<i32>,
}

struct UniformBuffer {
    a: vec4<i32>,
    b: vec4<i32>,
}

struct StorageBuffer {
    a: vec4<i32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: u32 = 1u;

var<private> global1: f32 = -108f;

var<private> global2: array<Struct_1, 24> = array<Struct_1, 24>(Struct_1(418f, false, -1000f), Struct_1(-1086f, true, 838f), Struct_1(-1458f, false, 1530f), Struct_1(1000f, true, 1000f), Struct_1(-1147f, false, -1960f), Struct_1(-805f, false, 1520f), Struct_1(1174f, true, 153f), Struct_1(861f, true, -1000f), Struct_1(-1149f, true, -506f), Struct_1(1354f, true, 196f), Struct_1(737f, false, -1000f), Struct_1(431f, true, -1023f), Struct_1(1072f, true, -307f), Struct_1(-593f, false, 1425f), Struct_1(1000f, false, -1042f), Struct_1(1368f, true, 1000f), Struct_1(764f, false, 720f), Struct_1(671f, false, -647f), Struct_1(-1276f, true, 1210f), Struct_1(1089f, false, -471f), Struct_1(-172f, false, 1000f), Struct_1(409f, false, -284f), Struct_1(-1817f, false, -1092f), Struct_1(-250f, false, -1073f));

@compute
@workgroup_size(1)
fn main() {
    let var_0 = ~abs(u_input.b.x);
    let x = u_input.a;
    s_output = StorageBuffer(~u_input.a);
}

`;