export const input = [119,198,173,150,42,129,113,84,114,119,15,86,239,251,156,239,185,210,33,42,183,96,112,175,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [119,198,173,150,42,129,113,84,114,119,15,86,239,251,156,239,185,210,33,42,183,96,112,175,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[119,198,173,150,42,129,113,84,114,119,15,86,239,251,156,239,185,210,33,42,183,96,112,175]}
// Seed: 9625443725820895843

struct Struct_1 {
    a: bool,
    b: bool,
}

struct Struct_2 {
    a: vec2<i32>,
    b: u32,
    c: i32,
    d: Struct_1,
}

struct Struct_3 {
    a: i32,
}

struct Struct_4 {
    a: Struct_3,
    b: vec4<f32>,
    c: vec2<u32>,
}

struct UniformBuffer {
    a: i32,
    b: i32,
    c: i32,
    d: vec2<i32>,
}

struct StorageBuffer {
    a: u32,
    b: i32,
    c: f32,
    d: u32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: Struct_1;

var<private> global1: array<bool, 4> = array<bool, 4>(true, false, false, true);

var<private> global2: vec3<u32> = vec3<u32>(33443u, 4294967295u, 31293u);

var<private> global3: Struct_3;

var<private> LOOP_COUNTERS: array<u32, 15>;

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn func_1(arg_0: i32, arg_1: Struct_1) -> f32 {
    global1 = array<bool, 4>();
    return _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1000f) - _wgslsmith_f_op_f32(f32(-1f) * -509f))))));
}

fn func_6(arg_0: bool) -> vec3<i32> {
    let var_0 = reverseBits(_wgslsmith_div_vec3_u32(((vec3<u32>(global2.x, 232u, 0u) | vec3<u32>(8053u, 12654u, global2.x)) ^ (vec3<u32>(0u, 4294967295u, global2.x) ^ vec3<u32>(global2.x, global2.x, 21912u))) ^ vec3<u32>(global2.x, ~global2.x, firstTrailingBit(global2.x)), _wgslsmith_clamp_vec3_u32(vec3<u32>(0u, global2.x, abs(20914u)), vec3<u32>(1u, max(21696u, global2.x), 1u), ~_wgslsmith_mod_vec3_u32(vec3<u32>(global2.x, 0u, global2.x), vec3<u32>(global2.x, 8156u, 0u)))));
    var var_1 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(select(vec4<f32>(_wgslsmith_f_op_f32(f32(-1f) * -1000f), 1165f, _wgslsmith_f_op_f32(423f - 616f), _wgslsmith_f_op_f32(-1067f * -188f)), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(168f, 912f, -1266f, -649f))) + _wgslsmith_f_op_vec4_f32(-vec4<f32>(157f, -811f, 1898f, 833f))), select(!vec4<bool>(false, global0.b, global1[_wgslsmith_index_u32(1u, 4u)], arg_0), !vec4<bool>(arg_0, true, global0.b, global0.a), select(vec4<bool>(false, global0.a, false, true), vec4<bool>(arg_0, true, true, true), global1[_wgslsmith_index_u32(var_0.x, 4u)])))), _wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(243f, -1454f, -406f, 334f)) * _wgslsmith_f_op_vec4_f32(vec4<f32>(467f, 1543f, 1891f, 144f) + vec4<f32>(-1021f, -619f, -1573f, -154f))))))));
    var var_2 = Struct_2(_wgslsmith_mult_vec2_i32(-(_wgslsmith_mod_vec2_i32(vec2<i32>(global3.a, global3.a), vec2<i32>(-53745i, 2147483647i)) & select(u_input.d, vec2<i32>(global3.a, -31346i), global0.b)), _wgslsmith_mod_vec2_i32(_wgslsmith_add_vec2_i32(u_input.d, u_input.d) | vec2<i32>(32607i, global3.a), ~vec2<i32>(-21619i, global3.a))), 27990u & var_0.x, _wgslsmith_mult_i32(-1i, abs(global3.a)), Struct_1(true, all(select(!vec2<bool>(true, arg_0), vec2<bool>(false, arg_0), select(vec2<bool>(false, global1[_wgslsmith_index_u32(global2.x, 4u)]), vec2<bool>(arg_0, global1[_wgslsmith_index_u32(var_0.x, 4u)]), vec2<bool>(global1[_wgslsmith_index_u32(global2.x, 4u)], global0.a))))));
    if (_wgslsmith_f_op_f32(-var_1.x) <= var_1.x) {
        loop {
            if (LOOP_COUNTERS[0u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
            global1 = array<bool, 4>();
            global1 = array<bool, 4>();
            break;
        }
        let var_3 = -(_wgslsmith_clamp_vec4_i32(_wgslsmith_div_vec4_i32(_wgslsmith_mult_vec4_i32(vec4<i32>(9003i, 27680i, u_input.c, u_input.c), vec4<i32>(9898i, global3.a, 1i, i32(-2147483648))), vec4<i32>(u_input.a, 1i, -1i, i32(-2147483648))), vec4<i32>(_wgslsmith_clamp_i32(63449i, var_2.a.x, -31631i), global3.a & -13052i, -30701i, var_2.c), select(vec4<i32>(0i, u_input.b, u_input.a, u_input.d.x), vec4<i32>(global3.a, var_2.c, var_2.a.x, i32(-2147483648)), vec4<bool>(var_2.d.a, false, var_2.d.b, false))) & abs(vec4<i32>(-12292i, global3.a, firstTrailingBit(var_2.a.x), var_2.a.x)));
        var var_4 = var_2.d;
        switch (-_wgslsmith_clamp_i32(u_input.a, var_3.x, ~(global3.a >> (min(var_0.x, global2.x) % 32u)))) {
            default: {
            }
        }
        if (true) {
            global3 = Struct_3(-10458i);
            var var_5 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(var_1.x, var_1.x, -202f))), vec3<f32>(_wgslsmith_f_op_f32(-var_1.x), _wgslsmith_f_op_f32(f32(-1f) * -1009f), _wgslsmith_f_op_f32(var_1.x + 510f))))));
            var var_6 = -_wgslsmith_mult_vec3_i32(select(vec3<i32>(global3.a >> (var_2.b % 32u), -69172i, 0i), _wgslsmith_mod_vec3_i32(vec3<i32>(u_input.d.x, -1i, -1i), var_3.xww), vec3<bool>(global0.a, any(vec4<bool>(true, true, true, false)), var_4.b)), var_3.zyx);
            return var_3.yyy;
        }
    }
    let var_3 = _wgslsmith_add_vec4_i32(-_wgslsmith_div_vec4_i32(~(~vec4<i32>(2147483647i, var_2.a.x, 15572i, 18337i)), max(max(vec4<i32>(var_2.a.x, 24164i, -1i, global3.a), vec4<i32>(1i, u_input.a, 2147483647i, global3.a)), abs(vec4<i32>(u_input.c, global3.a, 29755i, 0i)))), vec4<i32>(i32(-2147483648), u_input.d.x, firstLeadingBit(select(-1i, 1i, true)), ~reverseBits(global3.a)));
    return _wgslsmith_sub_vec3_i32(~(vec3<i32>(1i, 1i, _wgslsmith_add_i32(u_input.c, u_input.b)) ^ var_3.xxw), reverseBits(_wgslsmith_add_vec3_i32(abs(firstLeadingBit(vec3<i32>(var_3.x, var_3.x, var_3.x))), vec3<i32>(~var_3.x, firstLeadingBit(var_3.x), ~2147483647i))));
}

fn func_7(arg_0: Struct_3, arg_1: Struct_1, arg_2: Struct_2, arg_3: vec3<i32>) -> u32 {
    let var_0 = vec2<i32>(u_input.b, _wgslsmith_mod_i32(1i, -1i)) | abs(vec2<i32>(~(~arg_2.c), abs(1i)));
    global2 = vec3<u32>(global2.x | abs(4294967295u), firstLeadingBit(_wgslsmith_mod_u32(4294967295u, ~_wgslsmith_dot_vec2_u32(vec2<u32>(19258u, global2.x), global2.yx))), ~1u);
    for (; true; ) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
    }
    for (var var_1 = 54756i; !global1[_wgslsmith_index_u32(~1u, 4u)] & false; var_1 += 1i) {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        for (; ; ) {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            continue;
        }
    }
    var var_1 = firstTrailingBit(select(_wgslsmith_div_vec4_u32(firstLeadingBit(vec4<u32>(global2.x, 1u, global2.x, arg_2.b)), vec4<u32>(1u, 4294967295u, 0u, arg_2.b)) | max(reverseBits(vec4<u32>(7211u, global2.x, global2.x, global2.x)), ~vec4<u32>(68076u, 1u, global2.x, 0u)), min(~vec4<u32>(49319u, arg_2.b, 35080u, global2.x), ~select(vec4<u32>(4294967295u, arg_2.b, 1u, global2.x), vec4<u32>(1u, 35749u, 27477u, arg_2.b), false)), !global0.a));
    return _wgslsmith_div_u32(var_1.x, var_1.x);
}

fn func_5(arg_0: vec4<i32>, arg_1: vec2<bool>, arg_2: vec2<bool>) -> u32 {
    loop {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        let var_0 = firstLeadingBit(global2.xz);
        global3 = Struct_3(-(~15098i));
    }
    global1 = array<bool, 4>();
    for (var var_0 = 0i; var_0 != -44715i; global1 = array<bool, 4>()) {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        var var_1 = Struct_4(Struct_3(-14049i), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(-1958f, -152f, -352f, -790f) - _wgslsmith_f_op_vec4_f32(-vec4<f32>(-182f, 1000f, -265f, -1000f))))), firstTrailingBit(~global2.yy));
        var_0 = ~2147483647i;
        switch (2147483647i) {
            case 2147483647i: {
            }
            case 0i: {
            }
            default: {
                global3 = Struct_3(countOneBits(global3.a));
                var var_2 = func_7(var_1.a, Struct_1(true, true), Struct_2(_wgslsmith_div_vec2_i32(vec2<i32>(_wgslsmith_sub_i32(u_input.d.x, u_input.c), firstTrailingBit(u_input.a)), ~vec2<i32>(var_1.a.a, var_1.a.a) | arg_0.wz), 2788u, 1i, Struct_1(true, var_1.b.x < _wgslsmith_f_op_f32(f32(-1f) * -1005f))), func_6(!arg_2.x));
            }
        }
        let var_2 = ~(-vec4<i32>(max(-9524i, -1i), select(31654i, -global3.a, var_1.b.x == var_1.b.x), func_6(false).x, reverseBits(firstLeadingBit(-44695i))));
        let var_3 = !all(select(select(vec3<bool>(arg_2.x, global0.b, true), vec3<bool>(arg_1.x, true, false), false), !vec3<bool>(true, global0.b, true), vec3<bool>(var_1.b.x < var_1.b.x, arg_1.x, arg_2.x | true)));
    }
    global0 = Struct_1(!all(select(vec4<bool>(arg_1.x, global0.b, global0.b, global1[_wgslsmith_index_u32(global2.x, 4u)]), vec4<bool>(global0.b, true, false, false), vec4<bool>(false, global0.b, arg_2.x, true))) & arg_2.x, !(((40938u >> (1u % 32u)) < _wgslsmith_mod_u32(global2.x, 53669u)) & true));
    global3 = Struct_3(-53806i);
    return ~(~max(4294967295u, ~1u << (_wgslsmith_dot_vec2_u32(vec2<u32>(3505u, 4294967295u), global2.zx) % 32u)));
}

fn func_4(arg_0: vec2<bool>, arg_1: vec2<u32>) -> Struct_3 {
    for (var var_0 = abs(0i); true; global2 = select(vec3<u32>(69664u, firstTrailingBit(~4294967295u), arg_1.x >> (~global2.x % 32u)), ~(~countOneBits(vec3<u32>(41138u, arg_1.x, 4294967295u))), any(!select(vec3<bool>(true, true, global0.a), vec3<bool>(arg_0.x, arg_0.x, true), false))) & vec3<u32>(~arg_1.x, _wgslsmith_clamp_u32(arg_1.x, min(arg_1.x, reverseBits(arg_1.x)), _wgslsmith_mult_u32(_wgslsmith_sub_u32(arg_1.x, 45517u), _wgslsmith_dot_vec3_u32(vec3<u32>(7650u, 4294967295u, arg_1.x), vec3<u32>(82573u, 4294967295u, arg_1.x)))), func_5(_wgslsmith_sub_vec4_i32(vec4<i32>(u_input.c, global3.a, -8595i, 5318i), vec4<i32>(u_input.a, 16829i, 2147483647i, u_input.d.x) << (vec4<u32>(global2.x, global2.x, 0u, arg_1.x) % vec4<u32>(32u))), !arg_0, !(!vec2<bool>(arg_0.x, true))))) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        if (global1[_wgslsmith_index_u32(~global2.x, 4u)]) {
            var var_1 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(max(-1000f, -790f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-1000f * -780f)))))));
            global3 = Struct_3(countOneBits(~(~(-30543i) ^ _wgslsmith_clamp_i32(global3.a, global3.a, u_input.b))));
        }
        continue;
    }
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        break;
    }
    let var_0 = Struct_2(countOneBits(_wgslsmith_mod_vec2_i32(vec2<i32>(countOneBits(47229i), global3.a), u_input.d >> (global2.zz % vec2<u32>(32u)))), 1u, 2147483647i & _wgslsmith_dot_vec3_i32(vec3<i32>(-29028i, ~u_input.b, 29744i), vec3<i32>(-1i) * -vec3<i32>(-4480i, u_input.a, 1i)), Struct_1(true, -51903i <= ~u_input.d.x));
    var var_1 = abs(-vec2<i32>(-(~2147483647i), _wgslsmith_dot_vec3_i32(~vec3<i32>(global3.a, 2147483647i, var_0.c), vec3<i32>(u_input.c, global3.a, 14022i))));
    global3 = Struct_3(-1i);
    return Struct_3(~_wgslsmith_div_i32(abs(_wgslsmith_sub_i32(i32(-2147483648), var_1.x)), -(global3.a << (1u % 32u))));
}

fn func_3(arg_0: vec2<i32>, arg_1: vec2<bool>, arg_2: Struct_4, arg_3: i32) -> vec3<f32> {
    let var_0 = Struct_2(vec2<i32>(-_wgslsmith_mult_i32(u_input.c, 0i), -2147483647i) | u_input.d, _wgslsmith_add_u32(~(~(~4294967295u)), global2.x & 0u), _wgslsmith_dot_vec3_i32(vec3<i32>(abs(60052i), arg_2.a.a & arg_0.x, _wgslsmith_mod_i32(u_input.d.x, u_input.a)), -vec3<i32>(-1i, i32(-2147483648), arg_0.x)) << (arg_2.c.x % 32u), Struct_1(!(arg_1.x && false), ~(~1u) > ~arg_2.c.x));
    var var_1 = var_0.a;
    let var_2 = vec2<f32>(143f, _wgslsmith_f_op_f32(select(arg_2.b.x, 1042f, true)));
    global3 = func_4(arg_1, global2.zz);
    loop {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
    }
    return _wgslsmith_f_op_vec3_f32(-arg_2.b.zzy);
}

fn func_8(arg_0: vec4<f32>, arg_1: vec3<f32>) -> bool {
    if (false) {
        global0 = Struct_1(global0.b & global1[_wgslsmith_index_u32(3088u, 4u)], false);
        loop {
            if (LOOP_COUNTERS[9u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
            var var_0 = Struct_2(firstTrailingBit(-firstLeadingBit(-u_input.d)), min(global2.x, global2.x), -1i, Struct_1(all(vec4<bool>(global1[_wgslsmith_index_u32(11085u, 4u)] & global0.b, global1[_wgslsmith_index_u32(4294967295u, 4u)] || global1[_wgslsmith_index_u32(global2.x, 4u)], false, !global0.a)), func_6(arg_1.x >= arg_1.x).x >= max(abs(u_input.c), ~global3.a)));
            var var_1 = _wgslsmith_mod_u32(1u, global2.x);
            var var_2 = _wgslsmith_add_vec2_u32(global2.yx, max(global2.zy, _wgslsmith_div_vec2_u32(abs(_wgslsmith_div_vec2_u32(global2.xy, global2.zx)), vec2<u32>(~global2.x, ~global2.x))));
            var var_3 = -(~abs(_wgslsmith_add_vec3_i32(vec3<i32>(i32(-2147483648), u_input.b, u_input.b), vec3<i32>(u_input.a, -1i, 35128i)) >> (firstTrailingBit(vec3<u32>(global2.x, global2.x, 7554u)) % vec3<u32>(32u))));
            var var_4 = arg_1.x;
        }
        loop {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
            continue;
        }
    }
    var var_0 = Struct_2(select(u_input.d, _wgslsmith_mult_vec2_i32(vec2<i32>(_wgslsmith_sub_i32(global3.a, global3.a), 2147483647i), ~_wgslsmith_mult_vec2_i32(vec2<i32>(global3.a, u_input.d.x), u_input.d)), !vec2<bool>(global0.b, global2.x <= 5978u)), ~0u, ~8687i, Struct_1(true, !global1[_wgslsmith_index_u32(_wgslsmith_dot_vec4_u32(vec4<u32>(4294967295u, 80053u, global2.x, 49768u) & vec4<u32>(32396u, global2.x, 10036u, 1u), vec4<u32>(global2.x, 27950u, global2.x, 86077u) << (vec4<u32>(10552u, global2.x, global2.x, global2.x) % vec4<u32>(32u))), 4u)]));
    let var_1 = Struct_4(func_4(select(!select(vec2<bool>(var_0.d.a, global1[_wgslsmith_index_u32(global2.x, 4u)]), vec2<bool>(true, global1[_wgslsmith_index_u32(110275u, 4u)]), false), !(!vec2<bool>(global0.b, true)), true), ~vec2<u32>(max(6851u, global2.x), abs(4294967295u))), _wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-arg_0) + _wgslsmith_f_op_vec4_f32(select(arg_0, vec4<f32>(arg_0.x, arg_1.x, 1135f, -639f), true)))))), global2.yx);
    let var_2 = _wgslsmith_f_op_f32(abs(-1411f));
    switch ((1i ^ u_input.d.x) ^ max(~_wgslsmith_mod_i32(global3.a, _wgslsmith_mod_i32(var_1.a.a, global3.a)), _wgslsmith_mod_i32(_wgslsmith_dot_vec2_i32(var_0.a, var_0.a), _wgslsmith_sub_i32(global3.a, -58124i)) & _wgslsmith_dot_vec3_i32(~vec3<i32>(-44832i, var_0.c, global3.a), vec3<i32>(-46050i, i32(-2147483648), 1i) << (vec3<u32>(global2.x, var_0.b, 4294967295u) % vec3<u32>(32u))))) {
        case 6524i: {
            let var_3 = func_4(!vec2<bool>(true, global0.a), abs(global2.zx));
            global3 = func_4(vec2<bool>(global1[_wgslsmith_index_u32(4294967295u, 4u)], global0.b), _wgslsmith_div_vec2_u32(firstTrailingBit((vec2<u32>(4239u, var_1.c.x) | vec2<u32>(65647u, var_0.b)) << (_wgslsmith_sub_vec2_u32(vec2<u32>(var_1.c.x, var_0.b), var_1.c) % vec2<u32>(32u))), global2.yz));
            global0 = var_0.d;
        }
        case -42515i: {
            var var_3 = i32(-2147483648);
            let var_4 = select(vec3<u32>(~1u, func_7(Struct_3(global3.a), Struct_1(global0.a, global0.b), Struct_2(vec2<i32>(var_0.c, var_1.a.a), var_1.c.x, global3.a, var_0.d), _wgslsmith_mod_vec3_i32(vec3<i32>(0i, 1i, -24813i), vec3<i32>(global3.a, global3.a, u_input.b))), ~reverseBits(1u)), vec3<u32>(_wgslsmith_add_u32(~12118u, var_1.c.x | global2.x), ~var_0.b << (func_5(vec4<i32>(0i, 19017i, -50786i, global3.a), vec2<bool>(false, true), vec2<bool>(true, var_0.d.a)) % 32u), ~(~global2.x)), vec3<bool>(true, !global0.b != true, !all(vec3<bool>(global1[_wgslsmith_index_u32(var_1.c.x, 4u)], false, true)))) & vec3<u32>(var_0.b, countOneBits(var_1.c.x), _wgslsmith_add_u32(abs(abs(1u)), 48593u));
            var_3 = global3.a;
            var var_5 = global0.b;
        }
        case 22389i: {
            var var_3 = ~(-var_1.a.a);
            global3 = var_1.a;
            var var_4 = -1i;
            global0 = Struct_1(!(!(!all(vec3<bool>(global0.b, global0.b, global1[_wgslsmith_index_u32(4294967295u, 4u)])))), !any(vec4<bool>(all(vec4<bool>(var_0.d.a, false, true, true)), var_0.d.a, var_0.d.b, all(vec3<bool>(false, global1[_wgslsmith_index_u32(var_0.b, 4u)], false)))));
            let var_5 = any(select(vec4<bool>(any(vec3<bool>(false, true, var_0.d.a)), !any(vec3<bool>(true, false, global1[_wgslsmith_index_u32(20775u, 4u)])), global1[_wgslsmith_index_u32(var_0.b, 4u)], global0.a), select(!select(vec4<bool>(var_0.d.a, global0.b, global1[_wgslsmith_index_u32(global2.x, 4u)], global1[_wgslsmith_index_u32(var_0.b, 4u)]), vec4<bool>(true, global0.a, true, var_0.d.a), vec4<bool>(true, global1[_wgslsmith_index_u32(31367u, 4u)], false, global0.a)), !(!vec4<bool>(false, var_0.d.a, var_0.d.b, global1[_wgslsmith_index_u32(global2.x, 4u)])), select(select(vec4<bool>(false, true, var_0.d.a, true), vec4<bool>(global0.b, global1[_wgslsmith_index_u32(4294967295u, 4u)], true, var_0.d.a), false), vec4<bool>(false, global1[_wgslsmith_index_u32(var_0.b, 4u)], true, global0.a), select(vec4<bool>(false, false, global0.a, false), vec4<bool>(true, global0.a, true, global0.b), false))), true));
        }
        default: {
            let var_3 = func_7(var_1.a, Struct_1(any(select(select(vec4<bool>(global0.a, false, true, var_0.d.a), vec4<bool>(global0.a, global0.b, false, var_0.d.a), vec4<bool>(var_0.d.a, false, global0.b, false)), !vec4<bool>(false, global1[_wgslsmith_index_u32(1u, 4u)], false, global1[_wgslsmith_index_u32(33034u, 4u)]), global1[_wgslsmith_index_u32(0u, 4u)])), var_0.d.a), Struct_2(_wgslsmith_mod_vec2_i32(var_0.a, select(vec2<i32>(-18564i, 2147483647i), u_input.d, vec2<bool>(true, true))) & vec2<i32>(_wgslsmith_sub_i32(-34433i, -35090i), -1i), global2.x, _wgslsmith_mult_i32(u_input.a, countOneBits(2147483647i)) & i32(-2147483648), var_0.d), _wgslsmith_div_vec3_i32(vec3<i32>(-u_input.a, -var_1.a.a, u_input.d.x) & vec3<i32>(-12084i, _wgslsmith_dot_vec3_i32(vec3<i32>(-20292i, var_0.c, u_input.b), vec3<i32>(u_input.c, 17368i, var_1.a.a)), 1i), ~vec3<i32>(_wgslsmith_div_i32(2147483647i, var_1.a.a), abs(u_input.d.x), -5523i)));
            switch (3354i | _wgslsmith_sub_i32(select(-1i, abs(-17832i | u_input.a), global0.a), _wgslsmith_div_i32(-33937i, u_input.c))) {
                case -5143i: {
                    global1 = array<bool, 4>();
                }
                case i32(-2147483648): {
                    let var_4 = var_1.a;
                    let var_5 = Struct_3(var_4.a);
                }
                case 2147483647i: {
                }
                case 6892i: {
                    var_0 = Struct_2(var_0.a, ~_wgslsmith_mod_u32(var_1.c.x, ~_wgslsmith_dot_vec4_u32(vec4<u32>(var_3, 4294967295u, 10365u, var_1.c.x), vec4<u32>(var_3, 1u, 55347u, 4294967295u))), _wgslsmith_div_i32(reverseBits(global3.a), _wgslsmith_clamp_i32(-1i, _wgslsmith_add_i32(func_4(vec2<bool>(false, global0.a), vec2<u32>(5473u, 1u)).a, 12830i), -32999i)), var_0.d);
                    var var_4 = true;
                    var var_5 = Struct_3(0i);
                    var var_6 = var_0.a;
                }
                default: {
                    global2 = ~(~min(~select(vec3<u32>(4294967295u, global2.x, 1u), vec3<u32>(var_1.c.x, var_1.c.x, var_1.c.x), vec3<bool>(true, global1[_wgslsmith_index_u32(var_3, 4u)], false)), vec3<u32>(_wgslsmith_add_u32(47312u, var_0.b), ~var_0.b, ~global2.x)));
                    global2 = _wgslsmith_mod_vec3_u32(select(vec3<u32>(global2.x, _wgslsmith_mult_u32(~4294967295u, ~0u), global2.x), vec3<u32>(29981u, var_0.b, ~(~1u)), select(vec3<bool>(true, all(vec4<bool>(true, true, false, false)), global0.b || global1[_wgslsmith_index_u32(global2.x, 4u)]), vec3<bool>(var_0.d.b, !var_0.d.b, global0.a), any(!vec3<bool>(true, var_0.d.a, global0.b)))), _wgslsmith_clamp_vec3_u32(countOneBits(vec3<u32>(var_1.c.x, var_0.b, _wgslsmith_clamp_u32(4294967295u, var_1.c.x, var_3))), vec3<u32>(~_wgslsmith_dot_vec2_u32(global2.yy, vec2<u32>(var_3, var_0.b)), global2.x, 4294967295u), countOneBits(~vec3<u32>(var_0.b, var_0.b, var_3) << (~vec3<u32>(28458u, var_3, var_0.b) % vec3<u32>(32u)))));
                    var var_4 = Struct_2(u_input.d >> (~min(firstTrailingBit(var_1.c), _wgslsmith_sub_vec2_u32(vec2<u32>(var_1.c.x, var_1.c.x), vec2<u32>(var_3, 13847u))) % vec2<u32>(32u)), global2.x, _wgslsmith_clamp_i32(_wgslsmith_clamp_i32(35824i, -413i, -var_0.c), 0i, i32(-1i) * -_wgslsmith_mult_i32(6124i, var_1.a.a)), Struct_1(true, all(vec2<bool>(var_0.d.b, var_0.d.a))));
                }
            }
            global0 = var_0.d;
            global0 = Struct_1(false, any(vec4<bool>(var_0.d.a, global1[_wgslsmith_index_u32(global2.x, 4u)], global0.b, global0.a)));
        }
    }
    return all(vec4<bool>(true, global0.a, global0.a, global0.a));
}

fn func_2() -> Struct_3 {
    loop {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        if (any(vec4<bool>(true, func_8(_wgslsmith_f_op_vec4_f32(-vec4<f32>(1728f, -460f, 1439f, -707f)), _wgslsmith_f_op_vec3_f32(func_3(vec2<i32>(75849i, u_input.b), vec2<bool>(false, global1[_wgslsmith_index_u32(27322u, 4u)]), Struct_4(Struct_3(global3.a), vec4<f32>(-1508f, -1000f, -1048f, 2448f), vec2<u32>(global2.x, global2.x)), 1i))), global1[_wgslsmith_index_u32(~global2.x, 4u)], any(!vec4<bool>(global1[_wgslsmith_index_u32(global2.x, 4u)], global1[_wgslsmith_index_u32(global2.x, 4u)], global1[_wgslsmith_index_u32(0u, 4u)], false)))) || all(!vec2<bool>(true, u_input.d.x > global3.a))) {
            let var_0 = _wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(step(-1000f, -1297f)), _wgslsmith_f_op_f32(-1028f), _wgslsmith_f_op_vec3_f32(func_3(u_input.d, vec2<bool>(false, global0.b), Struct_4(Struct_3(0i), vec4<f32>(-1559f, -2311f, 846f, -1620f), vec2<u32>(7041u, 4258u)), 0i)).x)))));
            continue;
        }
        break;
    }
    let var_0 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_div_f32(748f, 1569f), _wgslsmith_f_op_f32(floor(930f)), _wgslsmith_f_op_f32(min(310f, 875f)), _wgslsmith_f_op_f32(687f - 1000f)) * _wgslsmith_f_op_vec4_f32(-vec4<f32>(339f, -217f, 293f, -220f)))));
    var var_1 = !select(vec4<bool>(false, global0.a, true, global1[_wgslsmith_index_u32(~(~global2.x), 4u)]), vec4<bool>(false, true, global0.b || true, false), !select(select(vec4<bool>(true, global0.b, global1[_wgslsmith_index_u32(global2.x, 4u)], true), vec4<bool>(false, true, global0.a, global0.b), false), !vec4<bool>(global1[_wgslsmith_index_u32(1u, 4u)], global1[_wgslsmith_index_u32(global2.x, 4u)], false, false), !vec4<bool>(global0.b, global1[_wgslsmith_index_u32(1u, 4u)], true, true)));
    global0 = Struct_1(true, max(global2.x, _wgslsmith_clamp_u32(0u, 0u ^ global2.x, 19789u)) <= 56534u);
    global1 = array<bool, 4>();
    return Struct_3(_wgslsmith_add_i32(-(~(-1i) << (abs(global2.x) % 32u)), i32(-2147483648)));
}

fn func_9(arg_0: vec2<u32>, arg_1: Struct_1, arg_2: Struct_3) -> u32 {
    loop {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        global1 = array<bool, 4>();
        let var_0 = 1i;
        global1 = array<bool, 4>();
        for (var var_1 = -69300i; !select(!(!global1[_wgslsmith_index_u32(~global2.x, 4u)]), arg_1.a || all(vec2<bool>(global1[_wgslsmith_index_u32(4294967295u, 4u)], true)), arg_1.b); var_1 -= 1i) {
            if (LOOP_COUNTERS[13u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
            let var_2 = select(!vec2<bool>(true && !global1[_wgslsmith_index_u32(0u, 4u)], global1[_wgslsmith_index_u32(select(4294967295u, ~3113u, arg_1.a), 4u)]), select(select(!vec2<bool>(false, global1[_wgslsmith_index_u32(global2.x, 4u)]), select(select(vec2<bool>(arg_1.a, true), vec2<bool>(arg_1.a, false), vec2<bool>(true, arg_1.b)), vec2<bool>(global1[_wgslsmith_index_u32(4294967295u, 4u)], global1[_wgslsmith_index_u32(0u, 4u)]), arg_0.x != 29659u), func_8(_wgslsmith_f_op_vec4_f32(select(vec4<f32>(-262f, 705f, -2639f, 1134f), vec4<f32>(-514f, -229f, -1226f, 546f), global1[_wgslsmith_index_u32(arg_0.x, 4u)])), _wgslsmith_f_op_vec3_f32(vec3<f32>(1917f, 847f, -613f) + vec3<f32>(1208f, 878f, 1000f)))), !vec2<bool>(true, arg_1.a), true), arg_1.b);
            break;
        }
        continue;
    }
    var var_0 = Struct_4(arg_2, vec4<f32>(_wgslsmith_f_op_f32(f32(-1f) * -302f), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-238f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(-455f))))), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_vec3_f32(func_3(u_input.d, vec2<bool>(arg_1.b, global0.b), Struct_4(Struct_3(u_input.b), vec4<f32>(1000f, 477f, 726f, -1095f), vec2<u32>(60981u, arg_0.x)), -1i)).x, 1f)), _wgslsmith_div_f32(-316f, _wgslsmith_f_op_f32(272f - _wgslsmith_f_op_f32(f32(-1f) * -328f)))), min(select(vec2<u32>(arg_0.x, ~29726u), ~arg_0 ^ arg_0, vec2<bool>(true, true)), vec2<u32>(arg_0.x, ~(~1u))));
    global1 = array<bool, 4>();
    let var_1 = -2296i == u_input.d.x;
    let var_2 = vec3<u32>(var_0.c.x, 0u, ~(firstLeadingBit(74522u) << (_wgslsmith_mod_u32(1u, 43088u) % 32u))) ^ vec3<u32>(~(~_wgslsmith_sub_u32(var_0.c.x, 0u)), arg_0.x, _wgslsmith_sub_u32(var_0.c.x, global2.x));
    return global2.x;
}

@compute
@workgroup_size(1)
fn main() {
    let var_0 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(select(vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(1440f, 1499f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -462f) - _wgslsmith_f_op_f32(func_1(2147483647i, Struct_1(global0.b, false)))), _wgslsmith_f_op_f32(-335f)), _wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(sign(vec3<f32>(-142f, 1000f, 1516f))))))), vec3<bool>(true, all(select(vec2<bool>(true, global0.b), vec2<bool>(false, false), global1[_wgslsmith_index_u32(global2.x, 4u)])), !(global1[_wgslsmith_index_u32(68103u, 4u)] || true)))));
    if (!(!(!(!select(global0.b, global0.b, global1[_wgslsmith_index_u32(global2.x, 4u)]))))) {
        global0 = Struct_1(true & (func_9(vec2<u32>(global2.x, global2.x) & global2.zz, Struct_1(true, global1[_wgslsmith_index_u32(0u, 4u)]), func_2()) <= _wgslsmith_add_u32(firstTrailingBit(global2.x), global2.x >> (global2.x % 32u))), any(vec3<bool>(var_0.x == _wgslsmith_f_op_f32(-405f), func_8(_wgslsmith_f_op_vec4_f32(step(vec4<f32>(var_0.x, var_0.x, -175f, -1303f), vec4<f32>(var_0.x, -173f, var_0.x, 716f))), _wgslsmith_f_op_vec3_f32(-var_0)), true & global1[_wgslsmith_index_u32(global2.x, 4u)])));
    }
    var var_1 = 4294967295u;
    switch (u_input.b) {
        case 23084i: {
            let var_2 = Struct_2(_wgslsmith_clamp_vec2_i32(reverseBits(_wgslsmith_sub_vec2_i32(vec2<i32>(global3.a, global3.a) << (vec2<u32>(1u, global2.x) % vec2<u32>(32u)), u_input.d >> (global2.xx % vec2<u32>(32u)))), select(u_input.d, select(u_input.d, vec2<i32>(u_input.a, -41905i), vec2<bool>(true, global1[_wgslsmith_index_u32(4294967295u, 4u)])), global1[_wgslsmith_index_u32(global2.x, 4u)]) & reverseBits(select(vec2<i32>(u_input.a, 2147483647i), vec2<i32>(-1i, global3.a), vec2<bool>(global1[_wgslsmith_index_u32(1u, 4u)], false))), vec2<i32>(~(-u_input.d.x), firstLeadingBit(u_input.a))), ~_wgslsmith_add_u32(~global2.x, _wgslsmith_mult_u32(min(global2.x, global2.x), abs(global2.x))), abs(0i), Struct_1(!global1[_wgslsmith_index_u32(1u, 4u)], true));
            var var_3 = func_2();
            switch (i32(-2147483648)) {
                default: {
                    global0 = Struct_1(!global1[_wgslsmith_index_u32(~var_2.b, 4u)], any(!select(select(vec3<bool>(false, global1[_wgslsmith_index_u32(var_2.b, 4u)], false), vec3<bool>(true, true, global0.a), vec3<bool>(var_2.d.a, global0.a, false)), vec3<bool>(true, global0.a, true), all(vec3<bool>(true, var_2.d.a, true)))));
                    global0 = Struct_1(func_8(vec4<f32>(_wgslsmith_f_op_f32(var_0.x - _wgslsmith_f_op_f32(select(var_0.x, -1000f, true))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(var_0.x))), var_0.x, -1028f), _wgslsmith_f_op_vec3_f32(select(vec3<f32>(_wgslsmith_f_op_f32(round(128f)), var_0.x, _wgslsmith_f_op_f32(-var_0.x)), _wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(var_0 * vec3<f32>(-1247f, 2058f, var_0.x)))), !select(vec3<bool>(global0.a, true, true), vec3<bool>(false, global0.a, global0.a), global0.a)))), func_7(Struct_3(~var_2.c), Struct_1(select(global0.b, var_2.d.b, true), true), var_2, ~(vec3<i32>(u_input.b, global3.a, -14580i) ^ vec3<i32>(51330i, 17138i, var_2.a.x))) < 27342u);
                    var var_4 = _wgslsmith_div_vec3_f32(vec3<f32>(var_0.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(var_0.x, _wgslsmith_f_op_f32(select(570f, var_0.x, false))))), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-_wgslsmith_f_op_vec3_f32(func_3(var_2.a, vec2<bool>(true, var_2.d.a), Struct_4(Struct_3(-6907i), vec4<f32>(-1000f, 1806f, var_0.x, 706f), global2.zx), 1i)).x)))), _wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(-var_0))))));
                }
            }
            global3 = Struct_3(max(_wgslsmith_div_i32((global3.a | -7699i) | min(59075i, -1i), global3.a), 36i));
            var var_4 = var_0.yy;
        }
        case 7448i: {
            var var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(var_0.x + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(var_0.x)))), _wgslsmith_f_op_f32(-var_0.x))));
        }
        default: {
            var_1 = ~1u;
            for (var var_2 = func_4(vec2<bool>(false, global1[_wgslsmith_index_u32(reverseBits(global2.x) ^ ~global2.x, 4u)]), abs(vec2<u32>(1u, 1u))).a & -global3.a; var_2 <= 11562i; var_2 += 1i) {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                global2 = _wgslsmith_add_vec3_u32(~abs(vec3<u32>(global2.x, global2.x, 27750u)), _wgslsmith_add_vec3_u32(vec3<u32>(abs(32859u), _wgslsmith_sub_u32(global2.x, 1u), select(global2.x, global2.x, global0.b)), _wgslsmith_add_vec3_u32(select(vec3<u32>(1u, 0u, 1u), vec3<u32>(global2.x, global2.x, 4294967295u), vec3<bool>(false, true, global1[_wgslsmith_index_u32(45376u, 4u)])), vec3<u32>(global2.x, 4294967295u, 70783u)))) ^ ~(~(~max(vec3<u32>(global2.x, global2.x, global2.x), vec3<u32>(global2.x, global2.x, global2.x))));
                var var_3 = _wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(vec4<f32>(var_0.x, 2100f, -175f, -832f) + vec4<f32>(811f, var_0.x, -518f, 1285f)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(657f, 1044f, var_0.x, -513f)), !vec4<bool>(true, global1[_wgslsmith_index_u32(0u, 4u)], false, global0.b))), _wgslsmith_div_vec4_f32(vec4<f32>(-267f, -238f, 1122f, -526f), vec4<f32>(-438f, var_0.x, -288f, 510f))) + _wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(-vec4<f32>(var_0.x, 1911f, -395f, var_0.x)), _wgslsmith_f_op_vec4_f32(abs(vec4<f32>(var_0.x, var_0.x, 699f, -1639f))))))));
            }
        }
    }
    var var_2 = !global1[_wgslsmith_index_u32(min(7992u << (~global2.x % 32u), select(_wgslsmith_sub_u32(func_9(vec2<u32>(global2.x, global2.x), Struct_1(false, global1[_wgslsmith_index_u32(global2.x, 4u)]), Struct_3(0i)), 22739u), 4294967295u, any(vec4<bool>(global0.a, false, global1[_wgslsmith_index_u32(global2.x, 4u)], false)))), 4u)];
    let x = u_input.a;
    s_output = StorageBuffer(143120u, _wgslsmith_div_i32(global3.a, _wgslsmith_mult_i32(~_wgslsmith_clamp_i32(u_input.a, 16263i, -1i), global3.a)), _wgslsmith_f_op_f32(-var_0.x), 1u);
}

`;