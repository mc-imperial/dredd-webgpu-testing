export const input = [165,123,185,163,211,42,85,103,251,253,146,201,232,198,184,226,195,243,158,73,248,109,237,243,1,97,22,113,128,87,240,249,189,99,116,183,99,119,9,125,140,22,157,79,17,243,107,43,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [165,123,185,163,211,42,85,103,251,253,146,201,232,198,184,226,195,243,158,73,248,109,237,243,1,97,22,113,128,87,240,249,189,99,116,183,99,119,9,125,140,22,157,79,17,243,107,43,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[165,123,185,163,211,42,85,103,251,253,146,201,232,198,184,226,195,243,158,73,248,109,237,243,1,97,22,113,128,87,240,249,189,99,116,183,99,119,9,125,140,22,157,79,17,243,107,43]}
// Seed: 84942071913606614

struct Struct_1 {
    a: bool,
    b: vec3<bool>,
    c: vec4<bool>,
}

struct Struct_2 {
    a: Struct_1,
    b: vec4<i32>,
}

struct Struct_3 {
    a: vec4<bool>,
    b: f32,
    c: Struct_1,
    d: Struct_1,
    e: Struct_1,
}

struct UniformBuffer {
    a: vec3<i32>,
    b: i32,
    c: vec2<i32>,
    d: vec3<i32>,
}

struct StorageBuffer {
    a: vec3<f32>,
    b: u32,
    c: f32,
    d: i32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<vec3<i32>, 16>;

var<private> global1: Struct_3;

var<private> global2: array<Struct_1, 29>;

var<private> global3: vec4<u32>;

var<private> LOOP_COUNTERS: array<u32, 23>;

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn func_6(arg_0: i32, arg_1: Struct_3) -> vec4<u32> {
    let var_0 = Struct_3(vec4<bool>(global1.a.x, select(all(select(vec4<bool>(true, global1.a.x, false, true), global1.a, global1.c.c)), global1.a.x, false), !global1.c.c.x, global1.d.a), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_1.b) - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(-497f)) * 2089f)) - _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(exp2(arg_1.b))))))), global1.d, arg_1.d, Struct_1(!(_wgslsmith_mult_i32(20101i, u_input.a.x) < -arg_0), global1.e.b, select(arg_1.d.c, select(select(arg_1.c.c, vec4<bool>(arg_1.c.c.x, arg_1.c.a, true, global1.e.b.x), arg_1.e.a), select(arg_1.a, vec4<bool>(arg_1.d.c.x, global1.d.a, false, true), true), select(global1.c.c, arg_1.a, vec4<bool>(false, true, arg_1.c.b.x, true))), all(arg_1.c.b))));
    for (; select(!all(!select(global1.d.b.xx, var_0.d.c.xz, vec2<bool>(true, global1.c.b.x))), var_0.d.a, any(arg_1.d.b)); ) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        let var_1 = ~vec4<u32>(~42198u, reverseBits(firstLeadingBit(global3.x)), ~(~1u), 1u & global3.x);
        if (any(!select(vec3<bool>(any(vec3<bool>(true, arg_1.e.b.x, true)), arg_1.a.x, var_0.d.c.x != arg_1.e.c.x), arg_1.d.b, select(select(global1.a.wwx, vec3<bool>(global1.e.c.x, var_0.a.x, true), vec3<bool>(true, global1.a.x, false)), !global1.a.zzz, select(vec3<bool>(false, false, var_0.c.c.x), vec3<bool>(true, arg_1.a.x, arg_1.d.c.x), vec3<bool>(true, var_0.d.c.x, false)))))) {
            var var_2 = ~global0[_wgslsmith_index_u32(_wgslsmith_mod_u32(1u, 54295u), 16u)];
        }
        global0 = array<vec3<i32>, 16>();
        break;
    }
    for (var var_1 = -23455i; var_1 > 1i; var_1 -= 1i) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        switch (_wgslsmith_dot_vec2_i32(vec2<i32>(2147483647i << (global3.x % 32u), ~(~_wgslsmith_sub_i32(i32(-2147483648), -67069i))), abs(u_input.a.xy))) {
            case 7825i: {
                let var_2 = ~_wgslsmith_add_u32(global3.x << (global3.x % 32u), ~(39004u << (global3.x % 32u)) >> (~abs(global3.x) % 32u));
            }
            case -1i: {
                var var_2 = _wgslsmith_f_op_f32(floor(1159f));
                var_1 = u_input.a.x;
                continue;
            }
            default: {
                var var_2 = -reverseBits(~vec4<i32>(_wgslsmith_div_i32(u_input.b, -1i), firstLeadingBit(27866i), ~(-1i), 0i));
                break;
            }
        }
    }
    for (; ; ) {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        if (_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1792f) + 510f), _wgslsmith_f_op_f32(1f * _wgslsmith_f_op_f32(exp2(arg_1.b))))))) == _wgslsmith_f_op_f32(step(-471f, 388f))) {
            continue;
        }
    }
    for (var var_1 = 1i; var_0.a.x; var_1 += 1i) {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        switch (u_input.c.x) {
            default: {
                continue;
            }
        }
        var_1 = _wgslsmith_sub_i32(_wgslsmith_dot_vec2_i32(vec2<i32>(-8998i, ~arg_0) >> (firstTrailingBit(vec2<u32>(global3.x, global3.x)) % vec2<u32>(32u)), -(~u_input.a.yx)), 0i);
    }
    return ~vec4<u32>(_wgslsmith_div_u32(_wgslsmith_dot_vec2_u32(global3.xz, vec2<u32>(4294967295u, 1u) ^ global3.zw), firstTrailingBit(global3.x & global3.x)), _wgslsmith_add_u32(global3.x, _wgslsmith_div_u32(global3.x, 1u)), ~4294967295u, ~global3.x);
}

fn func_5(arg_0: vec2<u32>, arg_1: u32, arg_2: f32) -> Struct_1 {
    let var_0 = Struct_2(Struct_1(global1.a.x, !vec3<bool>(!global1.d.a, false, false), select(global1.c.c, !vec4<bool>(global1.e.c.x, false, global1.d.a, false), all(!global1.a.zz))), ~vec4<i32>(u_input.c.x, _wgslsmith_add_i32(u_input.a.x, -71963i) | u_input.c.x, (1i >> (1u % 32u)) & reverseBits(u_input.b), u_input.d.x));
    global3 = select(~(~_wgslsmith_clamp_vec4_u32(vec4<u32>(arg_0.x, 12070u, 562u, 4294967295u) >> (vec4<u32>(global3.x, global3.x, 1u, 179u) % vec4<u32>(32u)), _wgslsmith_div_vec4_u32(vec4<u32>(arg_1, global3.x, global3.x, global3.x), vec4<u32>(global3.x, global3.x, 0u, global3.x)), ~vec4<u32>(arg_1, arg_0.x, global3.x, global3.x))), vec4<u32>(_wgslsmith_dot_vec4_u32(func_6(0i, Struct_3(vec4<bool>(global1.a.x, false, false, true), -1475f, global1.c, Struct_1(global1.c.a, global1.d.b, var_0.a.c), global2[_wgslsmith_index_u32(arg_1, 29u)])), ~vec4<u32>(global3.x, arg_0.x, 57335u, global3.x)) << ((1u >> (abs(arg_1) % 32u)) % 32u), 1u, arg_0.x, ~_wgslsmith_dot_vec4_u32(abs(vec4<u32>(1u, 24123u, arg_1, 4294967295u)), countOneBits(vec4<u32>(4294967295u, global3.x, 4294967295u, 4294967295u)))), global1.c.c);
    let var_1 = arg_1;
    switch (var_0.b.x) {
        case 40123i: {
            if (any(var_0.a.c)) {
                return global2[_wgslsmith_index_u32(62602u, 29u)];
            }
            let var_2 = select(vec2<bool>(global3.x < 54826u, all(vec3<bool>(!global1.d.b.x, !var_0.a.a, all(var_0.a.c.xxz)))), select(vec2<bool>(any(select(vec4<bool>(global1.d.b.x, true, global1.e.a, var_0.a.a), var_0.a.c, var_0.a.c.x)), global1.c.a), var_0.a.b.xy, vec2<bool>(global1.d.a, global1.a.x)), u_input.d.x != _wgslsmith_add_i32(~min(var_0.b.x, 2147483647i), ~_wgslsmith_mod_i32(28847i, -1i)));
            var var_3 = global2[_wgslsmith_index_u32(~min(arg_0.x, firstTrailingBit(global3.x) >> (~var_1 % 32u)) << (22287u % 32u), 29u)];
            var var_4 = _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(sign(_wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(arg_2 - -871f), global1.b) + vec2<f32>(_wgslsmith_f_op_f32(-global1.b), global1.b)))) + _wgslsmith_f_op_vec2_f32(-vec2<f32>(global1.b, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(-1603f))))));
        }
        case 1i: {
            if (false) {
            }
        }
        case 0i: {
            switch (u_input.a.x) {
                case i32(-2147483648): {
                }
                default: {
                    global1 = Struct_3(vec4<bool>(!var_0.a.a, global1.d.a, any(vec3<bool>(!global1.c.b.x, -355f == global1.b, true)), global1.c.a), _wgslsmith_f_op_f32(958f + _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(exp2(arg_2)), _wgslsmith_f_op_f32(-500f * global1.b)))))), Struct_1(-1861f <= global1.b, global1.a.zyy, select(!select(vec4<bool>(false, true, true, false), var_0.a.c, var_0.a.a), !select(vec4<bool>(var_0.a.a, global1.d.c.x, var_0.a.c.x, var_0.a.b.x), var_0.a.c, false), true)), global1.e, Struct_1(true, !select(select(global1.a.zyz, vec3<bool>(var_0.a.b.x, false, true), vec3<bool>(global1.d.c.x, true, true)), !var_0.a.b, global1.a.x), select(var_0.a.c, var_0.a.c, any(select(vec2<bool>(true, false), global1.e.c.wy, false)))));
                    var var_2 = _wgslsmith_div_vec4_i32(var_0.b, var_0.b);
                    global2 = array<Struct_1, 29>();
                    let var_3 = Struct_3(global1.a, arg_2, Struct_1(abs(1u) != _wgslsmith_dot_vec2_u32(vec2<u32>(var_1, 1u), abs(vec2<u32>(15500u, 0u))), vec3<bool>(1u != global3.x, _wgslsmith_mult_i32(var_0.b.x, var_2.x) <= u_input.c.x, all(global1.c.c) || global1.e.b.x), vec4<bool>(!var_0.a.c.x | true, (var_0.b.x << (global3.x % 32u)) < -20020i, !var_0.a.c.x, global1.c.a)), global2[_wgslsmith_index_u32(arg_0.x, 29u)], var_0.a);
                }
            }
            if (all(var_0.a.c.wy)) {
                global2 = array<Struct_1, 29>();
            }
            var var_2 = -_wgslsmith_clamp_i32(-6882i, u_input.c.x, -var_0.b.x) >> ((var_1 ^ var_1) % 32u);
        }
        default: {
            let var_2 = var_0.b.wxx;
            let var_3 = global1.c.c.x;
            var var_4 = arg_2;
            let var_5 = ~var_1 >> (global3.x % 32u);
            if (!(!all(select(var_0.a.c.zxw, global1.d.b, false)))) {
                var var_6 = ~global3.xwz;
            }
        }
    }
    let var_2 = !select(!var_0.a.c, select(vec4<bool>(false, global1.c.a, true, var_0.a.a), vec4<bool>(true, !var_0.a.b.x, !var_0.a.a, false), var_0.a.c), any(!select(vec3<bool>(false, var_0.a.c.x, true), vec3<bool>(true, global1.a.x, false), var_0.a.b)));
    return Struct_1(any(vec2<bool>(max(u_input.b, -5268i) > _wgslsmith_dot_vec3_i32(u_input.d, vec3<i32>(u_input.a.x, -1062i, 22453i)), any(global1.d.c.xyy))), select(vec3<bool>(!(false | var_0.a.b.x), global1.c.b.x, _wgslsmith_f_op_f32(247f * -115f) != global1.b), !vec3<bool>(true, any(vec4<bool>(global1.e.a, global1.d.c.x, false, false)), !var_0.a.b.x), !vec3<bool>(var_0.a.b.x, true, true)), !var_0.a.c);
}

fn func_7(arg_0: Struct_2, arg_1: Struct_2) -> vec4<bool> {
    let var_0 = vec4<u32>(1u, _wgslsmith_mod_u32(41502u, 1u), ~_wgslsmith_div_u32(~(global3.x << (62014u % 32u)), _wgslsmith_sub_u32(global3.x, 1u)), global3.x);
    var var_1 = !func_5(global3.yy, global3.x, 889f).b;
    global0 = array<vec3<i32>, 16>();
    if (any(vec3<bool>(arg_0.a.a, global1.e.b.x, !any(vec4<bool>(true, global1.d.c.x, var_1.x, false)))) & global1.a.x) {
        global2 = array<Struct_1, 29>();
        var var_2 = arg_0.b.yy;
        global0 = array<vec3<i32>, 16>();
        global2 = array<Struct_1, 29>();
    }
    loop {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        var_1 = arg_1.a.c.yxz;
    }
    return !(!(!(!(!vec4<bool>(var_1.x, false, false, arg_0.a.a)))));
}

fn func_4(arg_0: i32, arg_1: vec2<i32>) -> i32 {
    if (global1.a.x) {
    }
    for (var var_0 = -13876i; var_0 <= 9090i; var_0 -= 1i) {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        let var_1 = u_input.c.x;
        var var_2 = Struct_3(func_7(Struct_2(global2[_wgslsmith_index_u32(_wgslsmith_mod_u32(0u, ~global3.x), 29u)], (vec4<i32>(arg_1.x, 27414i, -1i, 0i) | vec4<i32>(var_1, u_input.d.x, arg_1.x, arg_0)) >> (~vec4<u32>(global3.x, 4294967295u, global3.x, global3.x) % vec4<u32>(32u))), Struct_2(func_5(global3.xy, ~0u, _wgslsmith_f_op_f32(global1.b + -1000f)), min(vec4<i32>(u_input.a.x, -2470i, var_1, -38779i) & vec4<i32>(var_1, 18683i, var_1, 6480i), -vec4<i32>(arg_0, 22028i, u_input.d.x, 2147483647i)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -953f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global1.b)))) * _wgslsmith_f_op_f32(global1.b + _wgslsmith_div_f32(_wgslsmith_f_op_f32(global1.b - global1.b), global1.b))), Struct_1(!(!global1.e.a), global1.d.c.xzy, func_5(~_wgslsmith_mod_vec2_u32(global3.yw, global3.zz), abs(103491u), global1.b).c), global2[_wgslsmith_index_u32(~46605u, 29u)], global1.c);
        if (global1.a.x | !global1.a.x) {
        }
    }
    let var_0 = 41585u;
    if (!(!func_7(Struct_2(Struct_1(false, vec3<bool>(global1.e.a, global1.d.b.x, false), global1.c.c), ~vec4<i32>(-23721i, -1i, arg_0, 1i)), Struct_2(func_5(vec2<u32>(0u, var_0), 4294967295u, -1092f), vec4<i32>(arg_1.x, u_input.b, arg_0, -37818i))).x)) {
        let var_1 = vec2<i32>(-arg_1.x, u_input.a.x);
    }
    switch (select(-1i, _wgslsmith_dot_vec4_i32(_wgslsmith_sub_vec4_i32(abs(vec4<i32>(u_input.d.x, 30326i, arg_0, -7444i) >> (vec4<u32>(30585u, 4294967295u, var_0, 0u) % vec4<u32>(32u))), -_wgslsmith_div_vec4_i32(vec4<i32>(2147483647i, u_input.b, u_input.d.x, u_input.b), vec4<i32>(u_input.d.x, 757i, u_input.d.x, -11308i))), vec4<i32>(_wgslsmith_dot_vec3_i32(_wgslsmith_add_vec3_i32(vec3<i32>(u_input.a.x, arg_0, arg_0), vec3<i32>(2147483647i, i32(-2147483648), 15125i)), global0[_wgslsmith_index_u32(~46969u, 16u)]), -8553i, arg_1.x, _wgslsmith_dot_vec3_i32(-vec3<i32>(arg_1.x, -42552i, arg_0), ~u_input.a))), !select(false, func_7(Struct_2(global1.d, vec4<i32>(arg_1.x, u_input.c.x, u_input.b, arg_1.x)), Struct_2(global1.c, vec4<i32>(-1i, -26017i, arg_1.x, -20915i))).x, true))) {
        case 1i: {
            if (false) {
                return arg_1.x;
            }
            var var_1 = Struct_3(global1.c.c, _wgslsmith_f_op_f32(-global1.b), global1.c, func_5(_wgslsmith_sub_vec2_u32(global3.wz >> (~vec2<u32>(4294967295u, 0u) % vec2<u32>(32u)), global3.wz), 57246u, _wgslsmith_f_op_f32(global1.b + _wgslsmith_f_op_f32(-global1.b))), func_5(~vec2<u32>(~var_0, ~0u), _wgslsmith_clamp_u32(global3.x << (global3.x % 32u), func_6(2147483647i, Struct_3(global1.c.c, 736f, Struct_1(global1.e.b.x, vec3<bool>(global1.a.x, global1.c.b.x, global1.e.b.x), vec4<bool>(global1.d.c.x, global1.a.x, global1.c.c.x, global1.a.x)), global1.c, Struct_1(false, global1.c.c.wxx, vec4<bool>(true, global1.a.x, false, false)))).x, _wgslsmith_mult_u32(0u, 1u)) >> (_wgslsmith_sub_u32(_wgslsmith_mult_u32(var_0, 1u), global3.x >> (4294967295u % 32u)) % 32u), global1.b));
            switch (firstLeadingBit(~abs(_wgslsmith_add_i32(_wgslsmith_mod_i32(u_input.c.x, u_input.b), -1i)))) {
                case 19315i: {
                    global1 = Struct_3(var_1.a, _wgslsmith_f_op_f32(round(_wgslsmith_div_f32(1f, _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(global1.b + var_1.b)))))), global2[_wgslsmith_index_u32(~(func_6(1605i, Struct_3(var_1.e.c, var_1.b, global2[_wgslsmith_index_u32(global3.x, 29u)], global2[_wgslsmith_index_u32(0u, 29u)], var_1.d)).x << (((0u >> (var_0 % 32u)) ^ _wgslsmith_div_u32(var_0, 48093u)) % 32u)), 29u)], global1.e, Struct_1(true, !func_7(Struct_2(Struct_1(true, vec3<bool>(var_1.d.b.x, false, global1.e.b.x), var_1.a), vec4<i32>(arg_0, u_input.a.x, i32(-2147483648), arg_1.x)), Struct_2(Struct_1(var_1.a.x, global1.c.b, var_1.d.c), vec4<i32>(-65339i, 1i, 2147483647i, arg_0))).xzw, !(!select(global1.a, var_1.a, global1.a.x))));
                    let var_2 = Struct_1(select(true, global1.e.c.x, _wgslsmith_f_op_f32(f32(-1f) * -849f) > global1.b), var_1.e.c.yzy, vec4<bool>(var_1.e.a, func_5(reverseBits(~global3.xw), _wgslsmith_div_u32(1u, _wgslsmith_dot_vec4_u32(vec4<u32>(4294967295u, var_0, global3.x, 13539u), vec4<u32>(global3.x, var_0, 3959u, global3.x))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -264f) + _wgslsmith_f_op_f32(-global1.b))).a, func_7(Struct_2(func_5(vec2<u32>(global3.x, 94849u), var_0, global1.b), _wgslsmith_mod_vec4_i32(vec4<i32>(arg_1.x, 1i, u_input.c.x, u_input.a.x), vec4<i32>(arg_0, arg_0, 22417i, arg_0))), Struct_2(func_5(global3.wy, global3.x, 378f), min(vec4<i32>(-1i, 1i, -22859i, arg_0), vec4<i32>(arg_1.x, 2147483647i, arg_1.x, arg_1.x)))).x, (_wgslsmith_sub_u32(var_0, var_0) != abs(var_0)) | all(global1.c.b)));
                    var var_3 = -7441i;
                }
                case i32(-2147483648): {
                    let var_2 = arg_0;
                    let var_3 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(global1.b, 1336f, -578f)))) + _wgslsmith_f_op_vec3_f32(step(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(global1.b, global1.b, -817f)), _wgslsmith_f_op_vec3_f32(vec3<f32>(var_1.b, -1603f, 498f) + vec3<f32>(var_1.b, var_1.b, global1.b))), _wgslsmith_f_op_vec3_f32(select(vec3<f32>(1773f, -1725f, -949f), _wgslsmith_f_op_vec3_f32(-vec3<f32>(1000f, var_1.b, global1.b)), global1.c.b))))) * _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(global1.b * 1077f), _wgslsmith_f_op_f32(-var_1.b), 216f)) + _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(vec3<f32>(-221f, global1.b, 1000f), vec3<f32>(995f, global1.b, var_1.b))), _wgslsmith_f_op_vec3_f32(exp2(_wgslsmith_f_op_vec3_f32(vec3<f32>(global1.b, -510f, global1.b) * vec3<f32>(global1.b, global1.b, global1.b)))))));
                    global2 = array<Struct_1, 29>();
                    var var_4 = min(vec3<i32>(arg_1.x, _wgslsmith_sub_i32(0i, ~0i), 13010i), vec3<i32>(u_input.c.x, select(~_wgslsmith_dot_vec4_i32(vec4<i32>(17428i, i32(-2147483648), arg_1.x, 11197i), vec4<i32>(arg_0, 2147483647i, arg_0, arg_1.x)), firstLeadingBit(_wgslsmith_mod_i32(var_2, arg_0)), _wgslsmith_sub_u32(21950u, 1u) < _wgslsmith_dot_vec4_u32(vec4<u32>(9804u, var_0, var_0, 1u), vec4<u32>(global3.x, 24796u, 30133u, 1u))), i32(-1i) * -(var_2 | -9844i)));
                }
                case -1i: {
                    global2 = array<Struct_1, 29>();
                    var var_2 = ~vec3<i32>(arg_0, 1i, _wgslsmith_add_i32(i32(-2147483648), u_input.d.x));
                    var var_3 = Struct_2(Struct_1(false, select(var_1.e.c.yww, vec3<bool>(false | global1.c.c.x, true, var_1.e.a), !(-408f == global1.b)), func_7(Struct_2(Struct_1(global1.c.a, global1.d.c.zzx, var_1.e.c), ~vec4<i32>(-1i, var_2.x, arg_1.x, u_input.b)), Struct_2(func_5(vec2<u32>(9797u, 0u), 4294967295u, -480f), vec4<i32>(2147483647i, var_2.x, var_2.x, var_2.x)))), _wgslsmith_clamp_vec4_i32(vec4<i32>(-select(var_2.x, arg_0, true), ~2147483647i, _wgslsmith_sub_i32(~var_2.x, _wgslsmith_sub_i32(var_2.x, 0i)), abs(52110i)), ~vec4<i32>(var_2.x, _wgslsmith_div_i32(467i, -1i), _wgslsmith_clamp_i32(7865i, var_2.x, var_2.x), u_input.a.x), -firstTrailingBit(vec4<i32>(var_2.x, u_input.c.x, var_2.x, var_2.x))));
                    var_2 = firstLeadingBit(firstTrailingBit(_wgslsmith_add_vec3_i32(_wgslsmith_clamp_vec3_i32(global0[_wgslsmith_index_u32(var_0, 16u)], global0[_wgslsmith_index_u32(var_0, 16u)], var_3.b.zyw), vec3<i32>(1i, 11001i, -50102i)))) << (vec3<u32>(var_0, select(var_0, var_0, false) | _wgslsmith_mod_u32(max(1u, 8406u), abs(var_0)), _wgslsmith_mod_u32(~var_0, ~min(3893u, 46406u))) % vec3<u32>(32u));
                }
                case 52697i: {
                    return reverseBits(countOneBits(select(~(arg_1.x >> (0u % 32u)), arg_1.x, false)));
                }
                default: {
                    var var_2 = Struct_2(func_5(_wgslsmith_div_vec2_u32(~countOneBits(global3.yw), global3.xw), _wgslsmith_sub_u32(~var_0, 4294967295u) ^ var_0, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1235f - _wgslsmith_div_f32(var_1.b, -1095f)) - _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(global1.b + global1.b))))), -(~min(vec4<i32>(arg_0, u_input.c.x, -1i, 1i), vec4<i32>(6366i, arg_1.x, arg_0, u_input.d.x)) << (vec4<u32>(_wgslsmith_add_u32(9905u, 1u), var_0 >> (1416u % 32u), ~0u, _wgslsmith_add_u32(0u, var_0)) % vec4<u32>(32u))));
                    var var_3 = vec2<bool>(false, func_7(Struct_2(Struct_1(!var_2.a.c.x, !vec3<bool>(true, false, var_2.a.c.x), global1.e.c), vec4<i32>(arg_1.x ^ -46243i, u_input.a.x, ~arg_0, -arg_0)), Struct_2(Struct_1(var_1.d.a, func_5(global3.zw, 50143u, var_1.b).b, !vec4<bool>(false, true, false, var_1.a.x)), max(vec4<i32>(var_2.b.x, 2147483647i, -1i, u_input.b), var_2.b) << (_wgslsmith_div_vec4_u32(vec4<u32>(global3.x, var_0, var_0, 6903u), vec4<u32>(42949u, 7141u, global3.x, 47799u)) % vec4<u32>(32u)))).x);
                    let var_4 = max(_wgslsmith_add_vec3_u32(~func_6(-arg_0, Struct_3(global1.c.c, global1.b, Struct_1(false, vec3<bool>(false, global1.c.c.x, global1.e.c.x), global1.c.c), global2[_wgslsmith_index_u32(var_0, 29u)], global2[_wgslsmith_index_u32(23432u, 29u)])).zxw, ~abs(global3.zyx)), ~(~global3.yyx));
                    global0 = array<vec3<i32>, 16>();
                    let var_5 = vec2<bool>(true, any(var_2.a.b.xz));
                }
            }
        }
        case -1i: {
            var var_1 = -min(-(vec2<i32>(-7931i, u_input.d.x) | vec2<i32>(-23995i, -1i)), vec2<i32>(arg_0, -17147i & arg_1.x)) | (arg_1 ^ (-reverseBits(u_input.a.yy) & -select(vec2<i32>(u_input.d.x, arg_0), vec2<i32>(arg_1.x, arg_0), global1.c.c.xz)));
            global0 = array<vec3<i32>, 16>();
            var var_2 = 620f;
        }
        case 16081i: {
            var var_1 = ~vec4<i32>(0i, -_wgslsmith_dot_vec2_i32(u_input.d.yy, _wgslsmith_mult_vec2_i32(u_input.c, u_input.a.xx)), -u_input.c.x, 0i);
            loop {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                var_1 = vec4<i32>(arg_0, countOneBits(i32(-2147483648)), _wgslsmith_dot_vec2_i32(-vec2<i32>(-1i, 14370i), firstLeadingBit(u_input.c)), ~_wgslsmith_div_i32(_wgslsmith_add_i32(-u_input.a.x, ~u_input.a.x), ~u_input.c.x));
                let var_2 = var_0;
                var var_3 = 1u;
            }
        }
        default: {
            for (; u_input.a.x <= arg_1.x; ) {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                global0 = array<vec3<i32>, 16>();
                global1 = Struct_3(select(!vec4<bool>(select(global1.e.b.x, true, global1.c.a), !global1.d.c.x, global1.c.a, global1.c.b.x), vec4<bool>(true, any(vec4<bool>(false, global1.c.b.x, global1.e.a, global1.a.x)), global1.d.c.x, select(global1.a.x, !global1.e.c.x, !global1.a.x)), false), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(-274f))), func_5(global3.xw, 17678u, 599f), global1.e, Struct_1(-1i < -_wgslsmith_dot_vec3_i32(u_input.d, vec3<i32>(21081i, u_input.d.x, 2147483647i)), func_5(select(vec2<u32>(var_0, 1753u), vec2<u32>(var_0, 0u), vec2<bool>(true, true)), ~(~0u), 1f).c.xxx, !vec4<bool>(true, !global1.d.b.x, global3.x <= 33365u, global1.c.a)));
                global2 = array<Struct_1, 29>();
                continue;
            }
            var var_1 = func_5(vec2<u32>(~global3.x, ~_wgslsmith_add_u32(1u, var_0) & var_0), firstLeadingBit(global3.x) ^ var_0, global1.b);
            let var_2 = global1.a.wxz;
            let var_3 = 1u;
            var var_4 = 486f;
        }
    }
    return ~abs(_wgslsmith_mult_i32(_wgslsmith_mult_i32(i32(-1i) * -29096i, ~1281i), arg_0));
}

fn func_3(arg_0: vec3<u32>) -> Struct_3 {
    for (var var_0: i32; ; var_0 -= 1i) {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        global2 = array<Struct_1, 29>();
        global0 = array<vec3<i32>, 16>();
        if (true) {
            let var_1 = -min(-_wgslsmith_div_vec4_i32(vec4<i32>(i32(-2147483648), u_input.a.x, 1i, u_input.d.x) >> (vec4<u32>(22783u, 20736u, arg_0.x, global3.x) % vec4<u32>(32u)), _wgslsmith_div_vec4_i32(vec4<i32>(9505i, 31340i, u_input.a.x, 1i), vec4<i32>(32270i, -65497i, u_input.b, -18487i))), vec4<i32>(48465i, -54431i, ~func_4(u_input.c.x, u_input.a.yz), -22029i));
            var_0 = _wgslsmith_add_i32(i32(-2147483648), u_input.b);
            var var_2 = Struct_1(any(!(!vec4<bool>(global1.a.x, global1.d.b.x, false, false))), func_5(~vec2<u32>(82554u, 4294967295u), firstTrailingBit(arg_0.x ^ global3.x), -419f).b, vec4<bool>(global1.e.a, any(!select(global1.e.c, global1.d.c, global1.a)), global1.b > 697f, any(!vec4<bool>(global1.c.a, false, global1.c.a, true)) || false));
        }
    }
    var var_0 = -_wgslsmith_mod_vec2_i32(-(u_input.a.xz << (vec2<u32>(5104u, 1u) % vec2<u32>(32u))), vec2<i32>(firstLeadingBit(u_input.a.x), u_input.d.x));
    var var_1 = Struct_2(global2[_wgslsmith_index_u32(5506u, 29u)], select(_wgslsmith_div_vec4_i32(_wgslsmith_mod_vec4_i32(vec4<i32>(var_0.x, 2147483647i, -1i, var_0.x), vec4<i32>(u_input.c.x, var_0.x, var_0.x, u_input.a.x)), ~vec4<i32>(5079i, i32(-2147483648), -31971i, 0i)), abs(vec4<i32>(_wgslsmith_sub_i32(u_input.d.x, -28174i), 22029i, _wgslsmith_dot_vec2_i32(u_input.a.xx, vec2<i32>(u_input.b, 0i)), u_input.c.x)), (var_0.x & _wgslsmith_mod_i32(-5761i, 40649i)) <= 19335i));
    for (var var_2 = 0i; ; global0 = array<vec3<i32>, 16>()) {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
    }
    let var_2 = func_5(global3.xz, min(1u, arg_0.x), _wgslsmith_f_op_f32(-537f - _wgslsmith_f_op_f32(439f - _wgslsmith_f_op_f32(-_wgslsmith_div_f32(global1.b, -586f)))));
    return Struct_3(!(!select(vec4<bool>(false, global1.a.x, var_1.a.c.x, global1.c.a), !vec4<bool>(false, false, var_2.a, false), !var_1.a.c)), global1.b, global1.e, func_5(~vec2<u32>(~arg_0.x, func_6(-12861i, Struct_3(var_2.c, 313f, Struct_1(true, vec3<bool>(false, global1.e.c.x, false), var_1.a.c), global1.d, var_2)).x), 73486u, _wgslsmith_f_op_f32(exp2(global1.b))), Struct_1(all(select(var_2.c.xx, func_5(arg_0.yy, 4294967295u, global1.b).c.wz, vec2<bool>(false, false))), func_5(~arg_0.yy, _wgslsmith_sub_u32(arg_0.x, ~19414u), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1000f - 209f))).c.xzx, func_7(Struct_2(Struct_1(false, vec3<bool>(true, var_2.c.x, false), var_1.a.c), -vec4<i32>(-1i, u_input.d.x, var_0.x, var_0.x)), Struct_2(global1.d, vec4<i32>(-38141i, i32(-2147483648), var_1.b.x, 17175i)))));
}

fn func_8(arg_0: vec3<f32>, arg_1: Struct_3) -> Struct_1 {
    global1 = Struct_3(vec4<bool>(false, !(firstLeadingBit(-2554i) <= select(u_input.b, i32(-2147483648), true)), false, !any(!arg_1.e.b.xz)), global1.b, global2[_wgslsmith_index_u32(select(~abs(~global3.x), global3.x, true), 29u)], Struct_1(false, func_3(vec3<u32>(~global3.x, ~28012u, _wgslsmith_div_u32(4294967295u, 31380u))).e.b, !func_7(Struct_2(Struct_1(true, vec3<bool>(true, true, global1.a.x), vec4<bool>(global1.a.x, true, global1.d.a, true)), vec4<i32>(u_input.a.x, u_input.a.x, -1i, 1i)), Struct_2(Struct_1(true, vec3<bool>(global1.d.c.x, false, global1.c.b.x), vec4<bool>(arg_1.d.a, arg_1.d.c.x, arg_1.a.x, false)), vec4<i32>(u_input.c.x, u_input.b, u_input.b, -10273i)))), Struct_1((false | global1.d.a) && arg_1.e.c.x, select(vec3<bool>(!arg_1.a.x, global1.d.b.x | true, global1.a.x), select(func_3(global3.zww).e.c.xzy, !arg_1.e.b, arg_1.e.c.yxw), !(!global1.d.b)), !vec4<bool>(true, any(arg_1.d.c.xwy), any(arg_1.a.xww), false || arg_1.d.b.x)));
    var var_0 = u_input.c.x;
    let var_1 = select(vec4<bool>(select(arg_1.d.b.x, func_7(Struct_2(global1.c, vec4<i32>(u_input.d.x, u_input.c.x, u_input.c.x, 0i)), Struct_2(Struct_1(false, global1.c.c.zwx, vec4<bool>(arg_1.e.b.x, true, arg_1.c.b.x, arg_1.e.b.x)), vec4<i32>(-14416i, u_input.b, -24999i, 2147483647i))).x, !(2147483647i < u_input.c.x)), !arg_1.c.c.x, true, -_wgslsmith_mod_i32(63074i, u_input.c.x) >= ~1i), vec4<bool>(arg_1.b == arg_0.x, global1.a.x, global1.d.c.x, !arg_1.d.c.x), any(!global1.d.b.xx));
    let var_2 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(floor(vec4<f32>(486f, arg_1.b, arg_0.x, -1127f)))))) + vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(exp2(arg_0.x)) * _wgslsmith_f_op_f32(max(arg_0.x, arg_1.b))), global1.b, 1683f, _wgslsmith_f_op_f32(func_3(vec3<u32>(1u, 10351u, global3.x)).b * -1110f))) - vec4<f32>(1771f, _wgslsmith_f_op_f32(abs(1689f)), _wgslsmith_f_op_f32(-arg_0.x), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(-973f, arg_1.b))));
    if (arg_1.a.x) {
        let var_3 = Struct_2(func_3(reverseBits(vec3<u32>(15603u, reverseBits(7019u), global3.x))).e, ~select(-abs(vec4<i32>(u_input.a.x, -1i, u_input.d.x, u_input.a.x)), _wgslsmith_clamp_vec4_i32(firstTrailingBit(vec4<i32>(u_input.a.x, -51655i, 45750i, u_input.d.x)), vec4<i32>(u_input.c.x, u_input.c.x, u_input.c.x, 58201i), vec4<i32>(2147483647i, 0i, 1i, -41200i)), ~global3.x > global3.x));
    }
    return global1.e;
}

fn func_9(arg_0: Struct_2, arg_1: Struct_3) -> Struct_2 {
    global2 = array<Struct_1, 29>();
    var var_0 = 46858i;
    for (; (1u & _wgslsmith_mod_u32(1u, abs(global3.x) | _wgslsmith_div_u32(0u, global3.x))) == 60659u; ) {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        for (; ; ) {
            if (LOOP_COUNTERS[11u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        }
        if (arg_0.a.a) {
            var_0 = 51505i;
            global3 = ~_wgslsmith_add_vec4_u32(min(func_6(u_input.b, func_3(vec3<u32>(41783u, global3.x, 0u))), vec4<u32>(global3.x, global3.x, global3.x >> (0u % 32u), func_6(u_input.c.x, arg_1).x)), vec4<u32>(5606u, countOneBits(global3.x), abs(global3.x), abs(14941u)) & _wgslsmith_clamp_vec4_u32(vec4<u32>(global3.x, global3.x, global3.x, 119617u), vec4<u32>(global3.x, 4294967295u, 0u, 39005u), func_6(23000i, arg_1)));
            let var_1 = global1.c.a;
        }
        continue;
    }
    global0 = array<vec3<i32>, 16>();
    var_0 = u_input.c.x;
    return Struct_2(func_8(_wgslsmith_f_op_vec3_f32(sign(vec3<f32>(_wgslsmith_f_op_f32(round(-2100f)), _wgslsmith_f_op_f32(ceil(-1457f)), _wgslsmith_f_op_f32(801f + global1.b)))), arg_1), -arg_0.b);
}

fn func_2(arg_0: f32, arg_1: Struct_3, arg_2: Struct_1, arg_3: i32) -> Struct_2 {
    var var_0 = _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1715f - _wgslsmith_f_op_f32(-730f * 1045f))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -1000f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -519f))), _wgslsmith_f_op_f32(f32(-1f) * -849f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(trunc(arg_0)))) + _wgslsmith_div_f32(global1.b, _wgslsmith_f_op_f32(trunc(global1.b))))));
    global1 = arg_1;
    var var_1 = vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(floor(global1.b)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1634f) + -781f)))), -391f);
    let var_2 = func_9(Struct_2(func_8(var_0.www, func_3(~global3.wxw)), vec4<i32>(arg_3, _wgslsmith_mult_i32(-1i, firstTrailingBit(arg_3)), min(countOneBits(u_input.c.x), ~u_input.b), max(42602i, max(-49294i, arg_3)))), Struct_3(!arg_1.a, _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(937f + 1206f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(arg_1.b)) - _wgslsmith_f_op_f32(var_1.x - arg_1.b)))), func_8(_wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(var_0.ywz * vec3<f32>(arg_1.b, -702f, global1.b)))), arg_1), func_8(_wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(vec3<f32>(-360f, 523f, arg_1.b), vec3<f32>(-369f, -1188f, arg_1.b)) + var_0.wzy), func_3(max(global3.zzz, vec3<u32>(global3.x, 82293u, global3.x)))), func_5(reverseBits(global3.yz) ^ vec2<u32>(global3.x, 34179u), 38716u, var_1.x)));
    loop {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        if (arg_1.e.c.x) {
            continue;
        }
        var var_3 = _wgslsmith_f_op_f32(-_wgslsmith_div_f32(var_0.x, -3413f));
    }
    return Struct_2(Struct_1(~global3.x < ~9233u, !arg_1.e.b, func_9(func_9(var_2, func_3(global3.xyy)), arg_1).a.c), vec4<i32>(~(-(~1i)), -34502i, arg_3, 17567i));
}

fn func_10(arg_0: Struct_1, arg_1: vec3<u32>, arg_2: Struct_2, arg_3: Struct_2) -> vec3<bool> {
    let var_0 = arg_3;
    for (var var_1 = -1i; var_1 <= -1782i; var_1 += 1i) {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
    }
    let var_1 = vec2<bool>(true, !func_3(arg_1).e.c.x);
    switch (_wgslsmith_sub_i32(arg_3.b.x, ~_wgslsmith_div_i32(1i << (min(4294967295u, arg_1.x) % 32u), ~u_input.c.x))) {
        case -1i: {
            global2 = array<Struct_1, 29>();
            var var_2 = u_input.c.x;
        }
        case 0i: {
            let var_2 = _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(vec2<f32>(1515f, global1.b) * _wgslsmith_f_op_vec2_f32(max(vec2<f32>(-1179f, global1.b), vec2<f32>(-506f, 861f)))), _wgslsmith_f_op_vec2_f32(min(_wgslsmith_f_op_vec2_f32(select(vec2<f32>(global1.b, -340f), vec2<f32>(global1.b, 242f), global1.e.b.zx)), _wgslsmith_div_vec2_f32(vec2<f32>(global1.b, global1.b), vec2<f32>(global1.b, global1.b))))))) + _wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(global1.b - 1108f), 2228f), _wgslsmith_f_op_f32(_wgslsmith_div_f32(1000f, global1.b) - _wgslsmith_div_f32(global1.b, -1320f))))));
        }
        case i32(-2147483648): {
        }
        default: {
        }
    }
    let var_2 = !arg_2.a.b;
    return vec3<bool>(!any(global1.d.c), any(func_9(Struct_2(func_9(Struct_2(Struct_1(arg_3.a.c.x, var_2, global1.d.c), vec4<i32>(arg_3.b.x, -23897i, arg_3.b.x, -1i)), Struct_3(global1.a, 628f, global1.e, Struct_1(true, arg_2.a.b, vec4<bool>(arg_3.a.c.x, arg_0.a, var_1.x, true)), arg_2.a)).a, vec4<i32>(arg_2.b.x, u_input.a.x, var_0.b.x, 45316i)), func_3(vec3<u32>(global3.x, arg_1.x, 28365u))).a.b.zy), true);
}

fn func_1() -> vec4<bool> {
    loop {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        if (true) {
            var var_0 = Struct_1(all(!select(select(vec4<bool>(true, global1.c.c.x, global1.c.a, global1.c.b.x), global1.a, vec4<bool>(false, global1.a.x, false, false)), !vec4<bool>(true, false, global1.a.x, false), global1.d.b.x && true)), !select(!global1.e.c.yxy, func_10(global2[_wgslsmith_index_u32(_wgslsmith_dot_vec3_u32(global3.zxx, global3.xzw), 29u)], global3.zxx, func_2(724f, Struct_3(global1.d.c, 2824f, Struct_1(true, vec3<bool>(true, global1.a.x, true), global1.a), Struct_1(global1.d.a, global1.c.c.wzz, vec4<bool>(global1.d.c.x, global1.c.a, true, true)), Struct_1(false, vec3<bool>(global1.a.x, true, true), vec4<bool>(false, global1.c.c.x, global1.d.b.x, true))), Struct_1(true, global1.d.b, vec4<bool>(global1.e.c.x, global1.a.x, global1.d.b.x, global1.a.x)), u_input.c.x), Struct_2(Struct_1(true, global1.c.b, global1.a), vec4<i32>(39654i, u_input.d.x, 1i, -54287i))), true), !select(vec4<bool>(global1.c.c.x, func_10(Struct_1(global1.a.x, vec3<bool>(global1.a.x, global1.d.c.x, global1.a.x), global1.c.c), global3.xyz, Struct_2(Struct_1(global1.c.b.x, vec3<bool>(false, false, global1.e.c.x), global1.e.c), vec4<i32>(0i, u_input.d.x, u_input.a.x, -1i)), Struct_2(global1.d, vec4<i32>(i32(-2147483648), u_input.c.x, u_input.c.x, u_input.a.x))).x, !global1.d.a, any(vec3<bool>(true, global1.c.c.x, true))), global1.e.c, !vec4<bool>(false, false, global1.c.c.x, global1.c.a)));
            let var_1 = func_9(func_2(global1.b, Struct_3(vec4<bool>(global1.c.b.x, 1i < u_input.d.x, global1.b == 699f, true), global1.b, Struct_1(global1.b == -1075f, func_8(vec3<f32>(-217f, 1132f, 871f), Struct_3(global1.e.c, 2093f, global1.c, Struct_1(global1.c.c.x, var_0.b, global1.a), global1.d)).c.yxx, vec4<bool>(true, false, global1.e.a, false)), global2[_wgslsmith_index_u32(0u << (global3.x % 32u), 29u)], func_9(func_9(Struct_2(Struct_1(var_0.a, vec3<bool>(global1.e.a, true, true), global1.c.c), vec4<i32>(u_input.d.x, 28033i, u_input.b, -35576i)), Struct_3(var_0.c, global1.b, global1.e, global2[_wgslsmith_index_u32(50535u, 29u)], global1.e)), func_3(global3.wwz)).a), Struct_1(!global1.c.c.x, func_10(func_3(vec3<u32>(global3.x, 1u, global3.x)).d, ~vec3<u32>(global3.x, 36490u, global3.x), func_2(global1.b, Struct_3(var_0.c, -897f, Struct_1(false, global1.a.ywz, vec4<bool>(var_0.b.x, var_0.c.x, true, global1.c.b.x)), Struct_1(var_0.a, global1.a.wyz, vec4<bool>(true, true, var_0.c.x, false)), global2[_wgslsmith_index_u32(25120u, 29u)]), Struct_1(true, global1.d.c.yww, global1.d.c), u_input.a.x), func_2(445f, Struct_3(var_0.c, global1.b, Struct_1(var_0.c.x, global1.a.xww, vec4<bool>(global1.e.c.x, global1.e.c.x, false, true)), global2[_wgslsmith_index_u32(34930u, 29u)], global1.e), Struct_1(false, global1.d.b, vec4<bool>(false, global1.d.c.x, var_0.a, false)), u_input.a.x)), vec4<bool>(var_0.c.x, var_0.a, false && var_0.a, true)), -19528i), Struct_3(vec4<bool>(false, false, global1.e.c.x, var_0.b.x), 134f, Struct_1(func_9(Struct_2(Struct_1(var_0.a, global1.a.xyy, vec4<bool>(true, var_0.b.x, false, global1.e.a)), vec4<i32>(u_input.c.x, 24119i, u_input.a.x, -8234i)), Struct_3(var_0.c, 1587f, Struct_1(true, global1.e.b, global1.d.c), Struct_1(var_0.a, var_0.c.wyw, global1.c.c), Struct_1(true, vec3<bool>(false, var_0.b.x, global1.d.c.x), vec4<bool>(true, false, var_0.c.x, false)))).b.x < 0i, global1.a.wzx, !vec4<bool>(global1.c.b.x, global1.c.c.x, false, global1.e.b.x)), func_3(global3.ywx).e, func_5(_wgslsmith_add_vec2_u32(global3.wy, vec2<u32>(global3.x, global3.x)) >> (vec2<u32>(4294967295u, global3.x) % vec2<u32>(32u)), func_6(u_input.a.x, Struct_3(vec4<bool>(global1.e.a, global1.e.c.x, var_0.a, true), 361f, global2[_wgslsmith_index_u32(21137u, 29u)], Struct_1(global1.e.a, vec3<bool>(global1.e.b.x, true, global1.e.a), global1.a), global2[_wgslsmith_index_u32(101900u, 29u)])).x, _wgslsmith_f_op_f32(step(global1.b, 163f)))));
            let var_2 = vec3<bool>(var_0.b.x && !global1.d.b.x, false, !var_0.b.x);
            global1 = func_3(vec3<u32>(53954u, 69165u, select(1u, ~global3.x, all(var_2.zz))) & select(vec3<u32>(global3.x, 32239u, global3.x) ^ global3.xwy, ~global3.wxx, all(func_3(vec3<u32>(4294967295u, global3.x, global3.x)).a.yzz)));
        }
    }
    var var_0 = _wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-696f * global1.b))), _wgslsmith_div_f32(global1.b, _wgslsmith_f_op_f32(exp2(global1.b))), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-global1.b), global1.b, global1.a.x))) - _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(sign(vec3<f32>(global1.b, global1.b, 1366f))), _wgslsmith_div_vec3_f32(vec3<f32>(-1000f, global1.b, global1.b), vec3<f32>(global1.b, global1.b, global1.b)))), vec3<f32>(_wgslsmith_div_f32(-341f, global1.b), global1.b, _wgslsmith_f_op_f32(global1.b + global1.b)))))));
    if (func_5(vec2<u32>(~4294967295u, 1u), abs(abs(~global3.x)), var_0.x).c.x) {
        switch (-firstTrailingBit(1i)) {
            default: {
                var var_1 = Struct_2(global1.e, vec4<i32>(u_input.a.x, _wgslsmith_dot_vec2_i32(-_wgslsmith_mult_vec2_i32(u_input.a.zx, u_input.a.zz), u_input.c), _wgslsmith_mod_i32(u_input.d.x, func_4(~u_input.d.x, -u_input.a.xx)), _wgslsmith_dot_vec4_i32(-vec4<i32>(u_input.a.x, -19917i, 1i, u_input.a.x), vec4<i32>(_wgslsmith_mult_i32(u_input.a.x, -1i), 80802i, 0i, u_input.a.x))));
                return global1.c.c;
            }
        }
        for (; ; ) {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            var var_1 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(global1.b - _wgslsmith_f_op_f32(-_wgslsmith_div_f32(-632f, _wgslsmith_div_f32(1000f, global1.b)))) + global1.b);
            var var_2 = Struct_3(func_2(_wgslsmith_f_op_f32(global1.b * -1000f), Struct_3(select(global1.a, global1.d.c, func_2(global1.b, Struct_3(vec4<bool>(true, false, false, true), global1.b, global1.c, Struct_1(global1.e.c.x, global1.d.c.yyw, vec4<bool>(true, true, global1.c.a, global1.d.a)), Struct_1(global1.e.c.x, global1.a.yyz, vec4<bool>(global1.c.c.x, global1.a.x, false, true))), global1.e, 55836i).a.c), 132f, func_9(Struct_2(global2[_wgslsmith_index_u32(global3.x, 29u)], vec4<i32>(28396i, 50100i, u_input.d.x, u_input.d.x)), func_3(vec3<u32>(global3.x, global3.x, global3.x))).a, global2[_wgslsmith_index_u32(reverseBits(global3.x), 29u)], global2[_wgslsmith_index_u32(global3.x, 29u)]), Struct_1(true, global1.c.c.wyy, global1.e.c), ~(-_wgslsmith_dot_vec4_i32(vec4<i32>(u_input.c.x, 27083i, u_input.c.x, 0i), vec4<i32>(-15631i, u_input.a.x, u_input.a.x, 6982i)))).a.c, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-147f) + _wgslsmith_f_op_f32(global1.b - -1000f)), func_2(var_0.x, func_3(~global3.yxz), Struct_1(global1.c.c.x, vec3<bool>(true, true, true), global1.a), -1i).a, func_5(global3.yw, 52573u, global1.b), Struct_1(!global1.d.a, func_5(vec2<u32>(_wgslsmith_div_u32(0u, 4294967295u), ~0u), global3.x, global1.b).b, func_8(_wgslsmith_f_op_vec3_f32(-vec3<f32>(var_0.x, 805f, global1.b)), func_3(_wgslsmith_add_vec3_u32(vec3<u32>(global3.x, global3.x, 0u), vec3<u32>(10708u, 124795u, global3.x)))).c));
            return vec4<bool>(false, !func_10(global2[_wgslsmith_index_u32(_wgslsmith_mod_u32(global3.x, ~global3.x), 29u)], _wgslsmith_div_vec3_u32(vec3<u32>(4294967295u, 97432u, 4294967295u), _wgslsmith_sub_vec3_u32(global3.wwx, global3.yzw)), func_2(_wgslsmith_f_op_f32(var_0.x - var_2.b), Struct_3(var_2.e.c, 1010f, Struct_1(true, vec3<bool>(global1.c.a, true, true), vec4<bool>(var_2.c.a, true, var_2.c.b.x, global1.a.x)), var_2.c, global1.c), Struct_1(global1.d.b.x, var_2.e.c.xyz, var_2.e.c), -1894i), func_9(Struct_2(Struct_1(true, var_2.c.c.zwz, global1.e.c), vec4<i32>(0i, 1i, 40075i, u_input.a.x)), func_3(vec3<u32>(global3.x, global3.x, global3.x)))).x, global1.d.c.x, func_10(var_2.c, vec3<u32>(func_6(-1i, Struct_3(var_2.a, -170f, Struct_1(global1.c.b.x, global1.a.yyz, global1.c.c), global1.d, var_2.c)).x, 41948u >> (global3.x % 32u), 4294967295u), Struct_2(Struct_1(true, vec3<bool>(global1.a.x, global1.c.c.x, var_2.a.x), var_2.d.c), abs(vec4<i32>(-1i, u_input.b, u_input.a.x, 1i))), Struct_2(func_2(var_2.b, Struct_3(vec4<bool>(true, global1.d.c.x, false, global1.c.c.x), global1.b, Struct_1(true, vec3<bool>(false, false, var_2.e.a), var_2.a), Struct_1(global1.a.x, var_2.a.yzy, global1.c.c), global1.c), Struct_1(global1.c.b.x, global1.e.c.xzy, global1.c.c), -41736i).a, vec4<i32>(-44582i, -27171i, u_input.a.x, 1i))).x & !(true && any(global1.d.c)));
        }
        let var_1 = Struct_2(func_5(~(~(~vec2<u32>(global3.x, global3.x))), reverseBits(firstLeadingBit(min(global3.x, global3.x))), _wgslsmith_f_op_f32(exp2(var_0.x))), _wgslsmith_clamp_vec4_i32(vec4<i32>(~(-u_input.a.x), abs(select(-25624i, -1i, true)), 2147483647i, select(2147483647i, u_input.c.x, global1.e.a) ^ 0i), vec4<i32>(-1i) * -vec4<i32>(i32(-2147483648), 61651i, -34325i, -16451i), max(~vec4<i32>(i32(-2147483648), u_input.c.x, u_input.d.x, 5415i), select(reverseBits(vec4<i32>(u_input.a.x, u_input.c.x, u_input.c.x, 43167i)), _wgslsmith_add_vec4_i32(vec4<i32>(u_input.b, u_input.b, -1i, -1i), vec4<i32>(u_input.b, u_input.b, u_input.d.x, u_input.a.x)), func_9(Struct_2(Struct_1(global1.a.x, global1.a.wwy, global1.e.c), vec4<i32>(u_input.d.x, -6449i, u_input.c.x, u_input.b)), Struct_3(vec4<bool>(false, global1.d.b.x, true, false), global1.b, Struct_1(true, vec3<bool>(global1.d.c.x, true, global1.e.b.x), vec4<bool>(true, false, false, global1.e.a)), global2[_wgslsmith_index_u32(29664u, 29u)], Struct_1(false, vec3<bool>(false, true, global1.d.b.x), vec4<bool>(global1.c.b.x, false, true, false)))).a.c))));
    }
    loop {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        switch (-1i) {
            case -47380i: {
                let var_1 = vec2<f32>(var_0.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(1036f)))) - _wgslsmith_div_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(max(1000f, -115f)), 187f), func_3(global3.zwz).b)));
                var var_2 = _wgslsmith_f_op_vec2_f32(-vec2<f32>(var_1.x, _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(var_1.x)))))));
                break;
            }
            case 31063i: {
                var var_1 = _wgslsmith_mod_vec3_i32(abs(global0[_wgslsmith_index_u32(firstLeadingBit(35796u ^ global3.x) ^ 21776u, 16u)]), global0[_wgslsmith_index_u32(1u, 16u)]);
                global2 = array<Struct_1, 29>();
            }
            case 0i: {
                global2 = array<Struct_1, 29>();
                break;
            }
            case -1i: {
                break;
            }
            default: {
                global3 = (abs(vec4<u32>(1u, ~global3.x, ~46840u, _wgslsmith_dot_vec2_u32(vec2<u32>(41996u, global3.x), vec2<u32>(global3.x, global3.x)))) | min(vec4<u32>(_wgslsmith_mod_u32(41338u, global3.x), global3.x, 11843u, global3.x), _wgslsmith_clamp_vec4_u32(vec4<u32>(global3.x, 4294967295u, 1u, global3.x), ~vec4<u32>(0u, global3.x, global3.x, 48890u), min(vec4<u32>(global3.x, global3.x, global3.x, global3.x), vec4<u32>(4294967295u, global3.x, global3.x, 34121u))))) >> (func_6(6833i, func_3(vec3<u32>(1u, countOneBits(global3.x), 1u >> (0u % 32u)))) % vec4<u32>(32u));
                break;
            }
        }
        var var_1 = global1.b;
        for (var var_2 = 2147483647i; var_2 > -18445i; var_2 -= 1i) {
            if (LOOP_COUNTERS[17u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
            var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1288f * 1314f));
            var var_3 = 1088f;
            let var_4 = Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_div_f32(var_0.x, global1.b))) >= 1128f, vec3<bool>(global1.e.c.x, false, true), vec4<bool>(!func_10(Struct_1(false, global1.e.b, vec4<bool>(false, global1.c.a, global1.c.a, false)), global3.wzx, Struct_2(Struct_1(global1.a.x, global1.d.b, global1.d.c), vec4<i32>(u_input.c.x, u_input.d.x, u_input.d.x, 1i)), Struct_2(global2[_wgslsmith_index_u32(global3.x, 29u)], vec4<i32>(i32(-2147483648), u_input.d.x, -10613i, u_input.a.x))).x & true, !all(global1.a.xw) & func_2(_wgslsmith_div_f32(241f, var_0.x), Struct_3(vec4<bool>(global1.c.b.x, global1.a.x, false, false), -253f, global1.d, global1.d, Struct_1(false, global1.c.b, vec4<bool>(false, global1.c.a, true, true))), Struct_1(global1.d.a, vec3<bool>(global1.e.a, global1.c.b.x, global1.d.b.x), global1.e.c), u_input.b).a.a, global1.d.b.x, 27608u > global3.x));
            var_1 = func_3(_wgslsmith_clamp_vec3_u32(select(_wgslsmith_mult_vec3_u32(~vec3<u32>(72072u, 1u, 26588u), ~global3.wzz), global3.yxy, global1.e.b), (_wgslsmith_mod_vec3_u32(global3.yyw, vec3<u32>(global3.x, 1u, global3.x)) ^ (vec3<u32>(1u, 63142u, global3.x) >> (vec3<u32>(global3.x, global3.x, global3.x) % vec3<u32>(32u)))) & ~(~vec3<u32>(global3.x, 1u, 14893u)), func_6(-53134i, func_3(_wgslsmith_mult_vec3_u32(vec3<u32>(global3.x, 12948u, 0u), vec3<u32>(global3.x, 45677u, global3.x)))).wyx)).b;
            let var_5 = vec4<u32>(select(global3.x, ~(~33058u), global1.c.a) & _wgslsmith_mod_u32(abs(global3.x), 1u), _wgslsmith_clamp_u32(_wgslsmith_dot_vec4_u32(~firstTrailingBit(vec4<u32>(global3.x, 4294967295u, 28498u, global3.x)), _wgslsmith_mult_vec4_u32(firstLeadingBit(vec4<u32>(global3.x, global3.x, 27510u, global3.x)), ~vec4<u32>(35949u, 31365u, global3.x, 4294967295u))), global3.x | ~_wgslsmith_dot_vec2_u32(vec2<u32>(9398u, global3.x), global3.yy), _wgslsmith_dot_vec3_u32(firstLeadingBit(vec3<u32>(77801u, global3.x, 4294967295u)), global3.xwz)), 44011u, 0u & ~global3.x);
        }
        let var_2 = 2147483647i;
    }
    loop {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        break;
    }
    return vec4<bool>(global1.a.x, !(func_7(func_9(Struct_2(Struct_1(true, vec3<bool>(global1.a.x, global1.e.c.x, global1.e.a), global1.d.c), vec4<i32>(u_input.a.x, u_input.c.x, -1i, u_input.a.x)), Struct_3(global1.c.c, var_0.x, global2[_wgslsmith_index_u32(22548u, 29u)], global2[_wgslsmith_index_u32(4294967295u, 29u)], Struct_1(global1.a.x, vec3<bool>(global1.c.b.x, global1.d.c.x, global1.d.c.x), global1.a))), func_9(Struct_2(Struct_1(global1.e.b.x, vec3<bool>(global1.a.x, global1.a.x, global1.d.a), vec4<bool>(false, global1.a.x, global1.e.a, false)), vec4<i32>(2147483647i, i32(-2147483648), u_input.b, u_input.b)), Struct_3(vec4<bool>(false, false, true, true), -766f, Struct_1(false, global1.d.b, vec4<bool>(global1.c.c.x, true, true, global1.e.c.x)), Struct_1(false, global1.e.b, global1.d.c), Struct_1(true, global1.d.b, vec4<bool>(global1.a.x, global1.c.b.x, global1.c.c.x, false))))).x & !(false | global1.c.b.x)), !(any(global1.c.b.yx) && func_7(func_2(global1.b, Struct_3(global1.c.c, 159f, Struct_1(true, vec3<bool>(global1.a.x, true, false), global1.c.c), Struct_1(global1.e.c.x, global1.a.zzw, global1.a), global1.e), Struct_1(false, vec3<bool>(global1.e.c.x, global1.d.b.x, true), global1.c.c), u_input.a.x), Struct_2(Struct_1(false, vec3<bool>(global1.a.x, global1.d.c.x, global1.d.a), global1.a), vec4<i32>(u_input.c.x, u_input.c.x, -1i, u_input.d.x))).x), func_9(func_9(func_2(_wgslsmith_f_op_f32(-global1.b), Struct_3(vec4<bool>(global1.c.b.x, global1.c.b.x, global1.d.c.x, false), 2079f, Struct_1(global1.a.x, global1.c.c.yxw, vec4<bool>(false, true, false, false)), global1.d, global2[_wgslsmith_index_u32(global3.x, 29u)]), Struct_1(global1.e.b.x, global1.a.xzz, global1.a), func_9(Struct_2(Struct_1(global1.d.a, global1.c.b, global1.e.c), vec4<i32>(-1i, u_input.b, u_input.a.x, u_input.c.x)), Struct_3(vec4<bool>(global1.c.b.x, global1.c.b.x, global1.c.c.x, true), 756f, Struct_1(true, vec3<bool>(false, global1.a.x, true), vec4<bool>(global1.a.x, global1.c.c.x, false, global1.d.c.x)), Struct_1(true, vec3<bool>(true, global1.a.x, global1.c.a), global1.c.c), Struct_1(global1.c.a, vec3<bool>(global1.d.c.x, global1.c.c.x, global1.e.b.x), vec4<bool>(global1.e.b.x, false, false, false)))).b.x), func_3(global3.yxw)), func_3(_wgslsmith_div_vec3_u32(firstTrailingBit(global3.wxy), func_6(u_input.c.x, Struct_3(vec4<bool>(global1.e.c.x, global1.e.b.x, global1.e.b.x, global1.d.b.x), global1.b, global2[_wgslsmith_index_u32(global3.x, 29u)], global1.c, Struct_1(false, vec3<bool>(global1.d.c.x, false, true), vec4<bool>(global1.e.c.x, global1.a.x, true, false)))).wzx))).a.a);
}

fn func_11(arg_0: bool, arg_1: Struct_3, arg_2: Struct_2, arg_3: bool) -> Struct_3 {
    var var_0 = (abs(~0u << (~global3.x % 32u)) < ~global3.x) & !arg_2.a.c.x;
    for (var var_1 = 5106i; ; var_1 -= 1i) {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
        switch (arg_2.b.x >> (~10756u % 32u)) {
            case -70167i: {
                let var_2 = global2[_wgslsmith_index_u32(global3.x, 29u)];
                let var_3 = func_3(_wgslsmith_add_vec3_u32(_wgslsmith_mod_vec3_u32(vec3<u32>(global3.x, ~global3.x, 29243u >> (global3.x % 32u)), ~global3.xyx), countOneBits(vec3<u32>(global3.x, 85554u | global3.x, 1u))));
                var var_4 = func_6(_wgslsmith_sub_i32(arg_2.b.x, min(func_4(-44769i, u_input.a.yy), i32(-2147483648)) & -1i), Struct_3(var_3.c.c, global1.b, func_8(_wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(vec3<f32>(arg_1.b, 391f, 781f) * vec3<f32>(-477f, var_3.b, arg_1.b)))), var_3), func_9(func_9(func_2(1447f, arg_1, Struct_1(global1.e.b.x, arg_2.a.b, vec4<bool>(arg_2.a.c.x, global1.d.a, var_2.b.x, true)), u_input.d.x), func_3(vec3<u32>(0u, 1u, global3.x))), Struct_3(!vec4<bool>(global1.a.x, false, var_3.d.b.x, true), global1.b, Struct_1(false, arg_2.a.b, vec4<bool>(true, arg_2.a.b.x, arg_2.a.a, false)), Struct_1(arg_3, vec3<bool>(true, true, false), var_2.c), func_9(arg_2, arg_1).a)).a, arg_1.d)).wx;
                global0 = array<vec3<i32>, 16>();
                continue;
            }
            case 2455i: {
                var var_2 = Struct_2(Struct_1(func_2(1527f, Struct_3(select(arg_2.a.c, arg_2.a.c, false), _wgslsmith_f_op_f32(161f * 1776f), global1.d, arg_1.e, func_5(vec2<u32>(global3.x, 0u), 51165u, -716f)), arg_2.a, u_input.a.x >> (_wgslsmith_div_u32(global3.x, 1u) % 32u)).a.a, arg_2.a.c.wwx, func_7(Struct_2(func_2(-603f, Struct_3(vec4<bool>(false, global1.d.b.x, arg_3, arg_1.e.c.x), 1267f, arg_2.a, global2[_wgslsmith_index_u32(global3.x, 29u)], arg_1.d), Struct_1(arg_1.c.a, vec3<bool>(false, true, arg_2.a.b.x), global1.c.c), 1i).a, vec4<i32>(29624i, arg_2.b.x, arg_2.b.x, 0i)), Struct_2(func_8(vec3<f32>(-201f, 692f, global1.b), Struct_3(arg_1.a, -705f, global1.d, Struct_1(global1.d.b.x, arg_2.a.b, global1.c.c), global2[_wgslsmith_index_u32(global3.x, 29u)])), countOneBits(arg_2.b)))), vec4<i32>(func_4(u_input.c.x, u_input.c), -40949i, ~func_2(arg_1.b, arg_1, Struct_1(arg_0, global1.c.c.xyz, arg_1.e.c), u_input.a.x).b.x, 1i) >> (vec4<u32>(0u, ~global3.x, 0u | (global3.x ^ global3.x), func_6(1i & arg_2.b.x, Struct_3(vec4<bool>(arg_3, global1.c.a, arg_0, arg_3), global1.b, Struct_1(arg_3, vec3<bool>(global1.c.c.x, arg_0, false), vec4<bool>(true, false, true, arg_2.a.b.x)), arg_1.c, global2[_wgslsmith_index_u32(53561u, 29u)])).x) % vec4<u32>(32u)));
                let var_3 = -250f;
                break;
            }
            default: {
                var var_2 = -arg_2.b;
                var var_3 = !(true & (abs(abs(global3.x)) != _wgslsmith_dot_vec3_u32(_wgslsmith_div_vec3_u32(global3.zyy, vec3<u32>(27685u, global3.x, 0u)), countOneBits(global3.wzy))));
                global0 = array<vec3<i32>, 16>();
                continue;
            }
        }
    }
    var var_1 = arg_1.a.x;
    var var_2 = ~(~abs(reverseBits(select(vec4<u32>(1u, 19548u, 4294967295u, 59980u), vec4<u32>(global3.x, 0u, global3.x, 4294967295u), arg_2.a.c))));
    global1 = Struct_3(vec4<bool>(arg_1.b < func_3(vec3<u32>(global3.x, var_2.x, 3489u)).b, (i32(-1i) * -arg_2.b.x) >= 0i, global1.c.c.x, false), 211f, arg_2.a, func_2(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(arg_1.b, global1.b, true)) - _wgslsmith_f_op_f32(step(global1.b, 799f))) + _wgslsmith_f_op_f32(abs(arg_1.b))), Struct_3(arg_2.a.c, _wgslsmith_div_f32(1439f, global1.b), Struct_1(global1.c.a, !vec3<bool>(true, global1.c.a, arg_3), arg_1.a), Struct_1(false, vec3<bool>(arg_0, false, arg_1.a.x), vec4<bool>(global1.d.b.x, global1.d.b.x, arg_0, arg_3)), func_5(~var_2.wz, reverseBits(global3.x), _wgslsmith_f_op_f32(min(arg_1.b, -175f)))), arg_1.c, -48814i).a, arg_2.a);
    return arg_1;
}

@compute
@workgroup_size(1)
fn main() {
    for (var var_0: i32; ; global0 = array<vec3<i32>, 16>()) {
        if (LOOP_COUNTERS[20u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
        var var_1 = func_11(all(!(!vec4<bool>(global1.e.a, global1.a.x, global1.d.b.x, global1.d.b.x))), Struct_3(func_1(), _wgslsmith_f_op_f32(global1.b * _wgslsmith_f_op_f32(-_wgslsmith_div_f32(global1.b, global1.b))), global1.e, func_8(_wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(ceil(vec3<f32>(global1.b, 404f, -419f))))), Struct_3(global1.d.c, _wgslsmith_f_op_f32(global1.b + global1.b), func_9(Struct_2(Struct_1(global1.c.c.x, vec3<bool>(true, false, global1.e.c.x), vec4<bool>(global1.a.x, global1.a.x, true, false)), vec4<i32>(u_input.c.x, u_input.a.x, 72790i, 2147483647i)), Struct_3(vec4<bool>(false, global1.e.a, global1.e.c.x, false), 1209f, global2[_wgslsmith_index_u32(global3.x, 29u)], global1.c, Struct_1(true, vec3<bool>(false, global1.d.b.x, true), vec4<bool>(true, false, false, global1.e.c.x)))).a, func_2(-452f, Struct_3(global1.d.c, 633f, global2[_wgslsmith_index_u32(global3.x, 29u)], Struct_1(true, vec3<bool>(false, true, global1.d.b.x), global1.c.c), global2[_wgslsmith_index_u32(global3.x, 29u)]), global2[_wgslsmith_index_u32(4294967295u, 29u)], -15772i).a, func_9(Struct_2(Struct_1(true, vec3<bool>(global1.d.b.x, global1.d.b.x, false), global1.a), vec4<i32>(2147483647i, i32(-2147483648), u_input.d.x, 1i)), Struct_3(global1.d.c, 1000f, global2[_wgslsmith_index_u32(global3.x, 29u)], global1.c, global1.c)).a)), global1.d), Struct_2(func_8(vec3<f32>(-633f, 786f, _wgslsmith_f_op_f32(-global1.b)), func_3(global3.zzy & global3.yxz)), func_9(Struct_2(func_8(vec3<f32>(global1.b, global1.b, -1733f), Struct_3(vec4<bool>(true, false, false, true), global1.b, global1.d, Struct_1(global1.a.x, vec3<bool>(false, global1.e.c.x, global1.a.x), global1.e.c), Struct_1(global1.e.c.x, global1.c.b, global1.a))), vec4<i32>(u_input.b, u_input.d.x, -15254i, u_input.d.x)), func_3(select(global3.zyx, vec3<u32>(global3.x, 4294967295u, global3.x), false))).b), countOneBits(_wgslsmith_dot_vec2_u32(vec2<u32>(global3.x, 21444u), _wgslsmith_div_vec2_u32(vec2<u32>(global3.x, 32925u), global3.xy))) != 0u);
        var var_2 = _wgslsmith_div_i32(-(~func_2(var_1.b, Struct_3(vec4<bool>(true, false, global1.c.c.x, global1.c.a), global1.b, Struct_1(true, vec3<bool>(var_1.d.b.x, var_1.e.b.x, var_1.c.c.x), var_1.e.c), Struct_1(global1.c.b.x, global1.a.wzz, var_1.c.c), var_1.c), var_1.e, 15781i).b.x) >> (36032u % 32u), -8260i << (~global3.x % 32u));
        global2 = array<Struct_1, 29>();
        return;
    }
    let var_0 = ~firstLeadingBit(min(_wgslsmith_add_vec4_u32(vec4<u32>(global3.x, global3.x, 10582u, 1u), vec4<u32>(1u, global3.x, 27521u, 0u)), vec4<u32>(13891u, global3.x, 1u, 93900u)) >> (~vec4<u32>(0u, 0u, global3.x, global3.x) % vec4<u32>(32u)));
    let var_1 = (1270f > _wgslsmith_f_op_f32(-global1.b)) && true;
    loop {
        if (LOOP_COUNTERS[21u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
        global3 = _wgslsmith_sub_vec4_u32(reverseBits((_wgslsmith_div_vec4_u32(vec4<u32>(1u, var_0.x, 4294967295u, 4294967295u), vec4<u32>(1u, var_0.x, 1u, var_0.x)) << (abs(var_0) % vec4<u32>(32u))) | var_0), ~(~var_0));
        var var_2 = Struct_3(vec4<bool>(select(true, select(global1.b <= global1.b, true, true), !any(global1.a)), true, func_8(_wgslsmith_f_op_vec3_f32(-vec3<f32>(1281f, global1.b, -471f)), Struct_3(global1.e.c, global1.b, global2[_wgslsmith_index_u32(0u, 29u)], Struct_1(false, global1.e.b, global1.e.c), Struct_1(var_1, vec3<bool>(global1.d.b.x, true, true), global1.e.c))).c.x || true, true), _wgslsmith_f_op_f32(-108f - _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(max(_wgslsmith_div_f32(588f, global1.b), _wgslsmith_f_op_f32(min(-1262f, global1.b))))))), Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(-437f, 1000f)) >= _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-global1.b))), global1.d.b, global1.a), func_9(Struct_2(global2[_wgslsmith_index_u32(var_0.x, 29u)], vec4<i32>(1i, -1i, min(u_input.c.x, u_input.b), u_input.a.x)), Struct_3(vec4<bool>(all(global1.a), func_10(global2[_wgslsmith_index_u32(4294967295u, 29u)], var_0.yxz, Struct_2(Struct_1(var_1, vec3<bool>(var_1, true, global1.d.b.x), vec4<bool>(true, false, false, false)), vec4<i32>(1i, u_input.c.x, u_input.c.x, -12610i)), Struct_2(global2[_wgslsmith_index_u32(global3.x, 29u)], vec4<i32>(34522i, -45716i, -11666i, u_input.d.x))).x, false, any(vec3<bool>(true, true, false))), -1000f, func_5(vec2<u32>(0u, var_0.x), ~9400u, global1.b), Struct_1(true, global1.c.c.xzx, vec4<bool>(var_1, var_1, false, true)), Struct_1(true, func_9(Struct_2(global1.d, vec4<i32>(-9961i, -1i, u_input.a.x, 0i)), Struct_3(global1.d.c, -375f, global2[_wgslsmith_index_u32(4294967295u, 29u)], Struct_1(false, vec3<bool>(global1.c.c.x, global1.d.c.x, false), global1.e.c), global2[_wgslsmith_index_u32(31055u, 29u)])).a.b, !vec4<bool>(true, var_1, false, var_1)))).a, func_9(Struct_2(Struct_1(true, vec3<bool>(false, false, var_1), func_7(Struct_2(Struct_1(var_1, global1.c.c.yxw, global1.d.c), vec4<i32>(u_input.c.x, 89763i, -16811i, -2820i)), Struct_2(Struct_1(false, vec3<bool>(global1.a.x, var_1, global1.d.b.x), vec4<bool>(var_1, var_1, false, true)), vec4<i32>(-41i, u_input.d.x, u_input.a.x, 2147483647i)))), -_wgslsmith_mult_vec4_i32(vec4<i32>(-6531i, -2685i, u_input.b, u_input.b), vec4<i32>(u_input.d.x, u_input.b, u_input.d.x, u_input.c.x))), Struct_3(vec4<bool>(var_1, any(global1.d.b), true, any(global1.a.yww)), -858f, Struct_1(!var_1, func_11(false, Struct_3(global1.e.c, global1.b, global1.e, Struct_1(true, vec3<bool>(global1.d.c.x, true, var_1), vec4<bool>(true, global1.d.c.x, global1.e.a, false)), global1.c), Struct_2(Struct_1(true, global1.a.wxw, vec4<bool>(false, var_1, global1.a.x, var_1)), vec4<i32>(37120i, i32(-2147483648), u_input.d.x, -8411i)), global1.c.a).d.b, !vec4<bool>(global1.d.c.x, global1.e.a, var_1, var_1)), global1.c, func_11(global1.a.x, Struct_3(global1.c.c, 271f, global2[_wgslsmith_index_u32(global3.x, 29u)], global2[_wgslsmith_index_u32(global3.x, 29u)], Struct_1(global1.c.c.x, vec3<bool>(false, false, true), vec4<bool>(false, true, global1.e.c.x, var_1))), Struct_2(global2[_wgslsmith_index_u32(1u, 29u)], vec4<i32>(-1i, 7699i, 4194i, 2147483647i)), func_1().x).e)).a);
        switch (-(~_wgslsmith_dot_vec2_i32(abs(u_input.d.yz), _wgslsmith_mod_vec2_i32(abs(vec2<i32>(41011i, u_input.b)), max(vec2<i32>(u_input.a.x, 0i), vec2<i32>(u_input.c.x, 0i)))))) {
            case i32(-2147483648): {
            }
            default: {
                var var_3 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(ceil(vec3<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(f32(-1f) * -429f))), 1f, _wgslsmith_div_f32(_wgslsmith_f_op_f32(step(global1.b, -1461f)), var_2.b)))) - _wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_div_f32(_wgslsmith_div_f32(var_2.b, 2126f), _wgslsmith_f_op_f32(step(global1.b, -2234f))), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(floor(global1.b)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-396f) - _wgslsmith_f_op_f32(-global1.b)))));
                break;
            }
        }
    }
    global0 = array<vec3<i32>, 16>();
    switch (i32(-1i) * i32(-2147483648)) {
        case -1i: {
            global0 = array<vec3<i32>, 16>();
            var var_2 = func_9(func_2(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global1.b) - _wgslsmith_f_op_f32(446f * func_11(true, Struct_3(vec4<bool>(true, true, var_1, global1.d.c.x), global1.b, global2[_wgslsmith_index_u32(20152u, 29u)], global2[_wgslsmith_index_u32(0u, 29u)], Struct_1(false, vec3<bool>(false, global1.e.c.x, global1.d.c.x), vec4<bool>(global1.d.a, true, false, true))), Struct_2(Struct_1(global1.e.b.x, global1.d.b, vec4<bool>(true, false, var_1, var_1)), vec4<i32>(0i, u_input.b, u_input.d.x, -7567i)), false).b)), func_11(global1.e.c.x, func_3(vec3<u32>(global3.x, 4294967295u, var_0.x)), func_9(Struct_2(Struct_1(global1.e.b.x, vec3<bool>(global1.c.a, global1.a.x, var_1), global1.c.c), vec4<i32>(u_input.b, u_input.c.x, u_input.b, u_input.b)), Struct_3(vec4<bool>(true, var_1, global1.c.c.x, false), global1.b, Struct_1(false, vec3<bool>(global1.c.c.x, global1.c.b.x, true), global1.c.c), Struct_1(true, global1.c.c.xwx, global1.c.c), global2[_wgslsmith_index_u32(46223u, 29u)])), !(global1.b >= 147f)), func_3(vec3<u32>(_wgslsmith_add_u32(var_0.x, global3.x), var_0.x, ~global3.x)).d, ~abs(-45620i)), Struct_3(func_2(global1.b, Struct_3(!vec4<bool>(var_1, global1.e.b.x, false, global1.a.x), _wgslsmith_f_op_f32(global1.b - -1562f), func_8(vec3<f32>(-903f, global1.b, global1.b), Struct_3(vec4<bool>(global1.a.x, true, global1.a.x, true), 951f, Struct_1(true, global1.e.b, global1.c.c), Struct_1(true, global1.d.b, vec4<bool>(global1.e.a, var_1, false, true)), global2[_wgslsmith_index_u32(global3.x, 29u)])), Struct_1(var_1, global1.e.c.yxz, vec4<bool>(global1.d.c.x, false, global1.c.b.x, false)), global2[_wgslsmith_index_u32(min(1u, global3.x), 29u)]), Struct_1(any(vec2<bool>(var_1, true)), !vec3<bool>(global1.a.x, true, true), vec4<bool>(var_1, global1.a.x, var_1, true)), ~(i32(-2147483648))).a.c, _wgslsmith_f_op_f32(global1.b + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global1.b))), Struct_1(!var_1, func_7(func_9(Struct_2(Struct_1(global1.a.x, vec3<bool>(global1.e.b.x, global1.e.a, true), global1.e.c), vec4<i32>(-17359i, 2147483647i, -13744i, u_input.c.x)), Struct_3(vec4<bool>(var_1, true, true, global1.e.a), 2169f, global1.d, Struct_1(global1.d.b.x, vec3<bool>(false, var_1, false), global1.c.c), Struct_1(false, global1.e.b, global1.a))), func_2(global1.b, Struct_3(global1.e.c, global1.b, global1.d, global2[_wgslsmith_index_u32(global3.x, 29u)], global1.e), global1.e, u_input.d.x)).wxy, global1.d.c), func_5(vec2<u32>(_wgslsmith_dot_vec3_u32(vec3<u32>(80542u, global3.x, global3.x), vec3<u32>(16714u, global3.x, 1u)), ~0u), _wgslsmith_add_u32(countOneBits(var_0.x), 40900u), -1152f), Struct_1(var_0.x < 38345u, global1.c.c.zzw, func_11(!global1.d.c.x, Struct_3(vec4<bool>(true, var_1, var_1, false), 1000f, global2[_wgslsmith_index_u32(1u, 29u)], global2[_wgslsmith_index_u32(4263u, 29u)], global2[_wgslsmith_index_u32(var_0.x, 29u)]), Struct_2(Struct_1(global1.e.a, vec3<bool>(global1.a.x, global1.a.x, true), global1.e.c), vec4<i32>(u_input.c.x, u_input.d.x, u_input.a.x, u_input.b)), var_1).c.c)));
            let var_3 = _wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(global1.b))), -481f, _wgslsmith_f_op_f32(abs(global1.b)), global1.b) - vec4<f32>(global1.b, 1000f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(global1.b + global1.b) + -719f), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-global1.b), _wgslsmith_div_f32(-939f, 612f))))));
            var var_4 = Struct_2(func_3(var_0.wxw).e, vec4<i32>(-1i) * -vec4<i32>(~(-16620i), ~(-8582i), -2147483647i, _wgslsmith_clamp_i32(u_input.d.x, -17997i, u_input.d.x)));
        }
        default: {
            let var_2 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_div_vec4_f32(vec4<f32>(global1.b, 825f, global1.b, global1.b), vec4<f32>(-933f, global1.b, -854f, global1.b)), vec4<f32>(-833f, global1.b, -779f, global1.b), any(vec3<bool>(true, var_1, var_1)))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(select(vec4<f32>(global1.b, -1000f, global1.b, -1030f), vec4<f32>(-107f, 180f, global1.b, 2367f), global1.a.x))))) + _wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(global1.b, 167f, 787f, -1080f))) + _wgslsmith_f_op_vec4_f32(-vec4<f32>(global1.b, global1.b, -752f, global1.b))), _wgslsmith_div_vec4_f32(vec4<f32>(-124f, -1000f, 109f, -1624f), vec4<f32>(113f, global1.b, -259f, 295f))))));
            global3 = firstLeadingBit(_wgslsmith_mult_vec4_u32(~_wgslsmith_mult_vec4_u32(~vec4<u32>(global3.x, global3.x, var_0.x, global3.x), _wgslsmith_sub_vec4_u32(vec4<u32>(var_0.x, global3.x, 43725u, global3.x), var_0)), var_0));
            for (; !(func_5(~vec2<u32>(1u, var_0.x), _wgslsmith_add_u32(var_0.x, var_0.x), var_2.x).c.x | !(i32(-2147483648) > u_input.d.x)) || true; ) {
                if (LOOP_COUNTERS[22u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
                let var_3 = Struct_2(global2[_wgslsmith_index_u32(global3.x, 29u)], _wgslsmith_mod_vec4_i32(max(~(-vec4<i32>(u_input.a.x, u_input.c.x, u_input.d.x, 1i)), -vec4<i32>(u_input.c.x, -35332i, u_input.b, 1i) | abs(vec4<i32>(-5931i, 2147483647i, u_input.c.x, u_input.a.x))), _wgslsmith_add_vec4_i32(-vec4<i32>(u_input.d.x, -38220i, u_input.c.x, u_input.a.x), vec4<i32>(u_input.b, u_input.d.x, i32(-2147483648), u_input.b)) << (select(var_0, vec4<u32>(global3.x, 0u, var_0.x, global3.x), var_1 && var_1) % vec4<u32>(32u))));
                var var_4 = true;
            }
            let var_3 = select(_wgslsmith_mult_u32(0u, _wgslsmith_dot_vec4_u32(firstLeadingBit(var_0) << (select(var_0, vec4<u32>(1u, var_0.x, var_0.x, 28975u), global1.c.c) % vec4<u32>(32u)), ~(~vec4<u32>(var_0.x, 4294967295u, 4294967295u, 19302u)))), ~_wgslsmith_clamp_u32(_wgslsmith_mult_u32(~var_0.x, ~1u), global3.x, 1u), true);
            let var_4 = Struct_1(true, func_5(_wgslsmith_sub_vec2_u32(_wgslsmith_sub_vec2_u32(var_0.xx, reverseBits(var_0.wz)), ~(vec2<u32>(global3.x, var_0.x) ^ vec2<u32>(71090u, var_3))), 52302u, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global1.b) + var_2.x) * global1.b)).b, global1.d.c);
        }
    }
    global3 = firstLeadingBit(~(~max(var_0 & var_0, vec4<u32>(62372u, 0u, var_0.x, 0u))));
    global1 = Struct_3(global1.c.c, global1.b, func_8(vec3<f32>(global1.b, _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-global1.b))), -1292f), Struct_3(!(!vec4<bool>(false, true, global1.d.a, var_1)), _wgslsmith_f_op_f32(-1445f * _wgslsmith_f_op_f32(max(global1.b, global1.b))), global1.d, Struct_1(true, !global1.e.c.yzz, vec4<bool>(var_1, true, var_1, true)), global2[_wgslsmith_index_u32(_wgslsmith_dot_vec3_u32(_wgslsmith_mult_vec3_u32(vec3<u32>(global3.x, 4294967295u, 1u), vec3<u32>(global3.x, global3.x, 33598u)), _wgslsmith_mod_vec3_u32(global3.zxw, vec3<u32>(20279u, 27096u, 35093u))), 29u)])), Struct_1(false, global1.d.c.zwx, vec4<bool>(select(true, u_input.b <= u_input.a.x, false != global1.c.b.x), var_1, func_10(Struct_1(var_1, global1.a.zzw, global1.e.c), global3.yxx, Struct_2(Struct_1(false, vec3<bool>(true, true, true), global1.c.c), vec4<i32>(u_input.c.x, -86612i, u_input.d.x, -31789i)), Struct_2(global2[_wgslsmith_index_u32(4294967295u, 29u)], vec4<i32>(u_input.b, u_input.b, u_input.b, u_input.a.x))).x && var_1, !global1.c.c.x | all(global1.d.c.zz))), func_2(1790f, Struct_3(global1.e.c, _wgslsmith_div_f32(_wgslsmith_f_op_f32(min(788f, -1000f)), -353f), func_2(_wgslsmith_f_op_f32(-1000f), func_11(var_1, Struct_3(global1.e.c, global1.b, Struct_1(var_1, vec3<bool>(global1.c.b.x, global1.a.x, var_1), global1.d.c), Struct_1(global1.d.a, global1.a.xyy, global1.a), Struct_1(true, global1.d.c.xzy, global1.a)), Struct_2(Struct_1(global1.a.x, vec3<bool>(global1.e.c.x, false, false), vec4<bool>(var_1, true, global1.e.c.x, false)), vec4<i32>(-63926i, 7684i, u_input.c.x, 44811i)), true), Struct_1(var_1, vec3<bool>(global1.c.b.x, false, var_1), vec4<bool>(true, var_1, global1.d.a, var_1)), ~u_input.a.x).a, func_5(~var_0.zz, ~global3.x, func_3(vec3<u32>(global3.x, 47336u, global3.x)).b), func_2(_wgslsmith_f_op_f32(-1252f), func_3(vec3<u32>(23119u, global3.x, global3.x)), Struct_1(var_1, vec3<bool>(true, true, global1.d.c.x), vec4<bool>(false, global1.c.c.x, var_1, var_1)), ~2147483647i).a), Struct_1(true, func_7(func_2(global1.b, Struct_3(global1.c.c, 1921f, global2[_wgslsmith_index_u32(var_0.x, 29u)], global1.e, Struct_1(true, global1.d.b, global1.e.c)), global2[_wgslsmith_index_u32(0u, 29u)], u_input.c.x), Struct_2(Struct_1(false, vec3<bool>(false, false, true), global1.d.c), vec4<i32>(u_input.b, u_input.c.x, u_input.d.x, 0i))).xzx, !func_11(true, Struct_3(vec4<bool>(var_1, var_1, var_1, true), global1.b, Struct_1(false, global1.d.b, global1.a), Struct_1(global1.c.c.x, vec3<bool>(true, global1.d.c.x, var_1), vec4<bool>(true, true, global1.a.x, true)), Struct_1(false, global1.c.b, global1.e.c)), Struct_2(Struct_1(true, vec3<bool>(global1.d.a, global1.d.c.x, false), vec4<bool>(var_1, global1.a.x, false, true)), vec4<i32>(8208i, 2191i, u_input.c.x, 1i)), true).e.c), ~abs(-27177i)).a);
    var var_2 = _wgslsmith_f_op_f32(min(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-global1.b), func_3(var_0.yww).b), 1612f));
    let x = u_input.a;
    s_output = StorageBuffer(vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(ceil(524f)), -1388f)), -227f, global1.b), 4294967295u, _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1782f + 588f) * global1.b))))), u_input.d.x);
}

`;