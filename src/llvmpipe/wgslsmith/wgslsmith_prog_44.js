export const input = [43,129,10,53,187,12,92,206,169,114,241,232,15,60,180,165,243,94,43,210,63,200,215,74,195,76,20,42,105,33,24,83,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [43,129,10,53,187,12,92,206,169,114,241,232,15,60,180,165,243,94,43,210,63,200,215,74,195,76,20,42,105,33,24,83,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[43,129,10,53,187,12,92,206,169,114,241,232,15,60,180,165,243,94,43,210,63,200,215,74,195,76,20,42,105,33,24,83]}
// Seed: 2943610294652265799

struct Struct_1 {
    a: f32,
}

struct Struct_2 {
    a: vec4<f32>,
}

struct Struct_3 {
    a: vec4<f32>,
    b: vec4<i32>,
    c: Struct_1,
    d: bool,
    e: Struct_2,
}

struct Struct_4 {
    a: i32,
    b: Struct_1,
}

struct UniformBuffer {
    a: vec3<u32>,
    b: u32,
    c: i32,
    d: vec2<u32>,
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

var<private> LOOP_COUNTERS: array<u32, 24>;

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
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

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn func_6(arg_0: i32) -> i32 {
    var var_0 = _wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -213f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-152f * -1384f), _wgslsmith_f_op_f32(select(1000f, -797f, false))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(1f, 411f)))) - vec3<f32>(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(f32(-1f) * -568f))))), 1385f, _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(step(-368f, _wgslsmith_f_op_f32(f32(-1f) * -204f)))))));
    var_0 = vec3<f32>(-1349f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(var_0.x))), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(f32(-1f) * -2546f))));
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        break;
    }
    for (var var_1: i32; !(reverseBits(select(u_input.c, 4177i << (0u % 32u), all(vec2<bool>(false, false)))) > (-58368i << (u_input.b % 32u))); var_1 -= 1i) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
    }
    var_0 = _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(select(vec3<f32>(-717f, 1689f, 556f), vec3<f32>(var_0.x, var_0.x, var_0.x), vec3<bool>(false, false, true))))) - _wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(-var_0.x), _wgslsmith_f_op_f32(-1285f - var_0.x), 416f) * _wgslsmith_div_vec3_f32(_wgslsmith_div_vec3_f32(vec3<f32>(-918f, var_0.x, var_0.x), vec3<f32>(var_0.x, var_0.x, -366f)), vec3<f32>(var_0.x, 1000f, var_0.x)))), vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(-1699f, 354f))) - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_0.x) + var_0.x)), _wgslsmith_f_op_f32(f32(-1f) * -195f), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(-526f)))))), any(vec3<bool>(!(u_input.d.x >= u_input.b), all(select(vec2<bool>(true, true), vec2<bool>(false, false), vec2<bool>(true, true))), any(vec2<bool>(true, true)) || true))));
    return arg_0;
}

fn func_5(arg_0: i32) -> u32 {
    for (var var_0 = 2147483647i; ; var_0 = ~u_input.c) {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        loop {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            let var_1 = _wgslsmith_mult_i32(_wgslsmith_clamp_i32(u_input.c, ~_wgslsmith_dot_vec2_i32(~vec2<i32>(49077i, u_input.c), ~vec2<i32>(u_input.c, u_input.c)), _wgslsmith_clamp_i32(-(arg_0 & u_input.c), abs(u_input.c ^ 0i), arg_0)), arg_0);
            let var_2 = !vec2<bool>(all(vec2<bool>(var_1 < var_1, all(vec2<bool>(false, true)))), -1i <= var_1);
            var var_3 = Struct_4(u_input.c | (_wgslsmith_div_i32(~4929i, arg_0) | func_6(arg_0)), Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(1f, -1007f)))));
            var var_4 = -163f;
            var_3 = Struct_4(i32(-1i) * -9341i, var_3.b);
        }
        switch (0i) {
            case i32(-2147483648): {
                break;
            }
            case -11699i: {
            }
            case 6510i: {
                var_0 = 33955i;
                let var_1 = vec3<i32>(-23660i, ~u_input.c, _wgslsmith_dot_vec2_i32(-(vec2<i32>(-1i, -41504i) & _wgslsmith_clamp_vec2_i32(vec2<i32>(1i, arg_0), vec2<i32>(i32(-2147483648), u_input.c), vec2<i32>(3801i, arg_0))), -max(_wgslsmith_sub_vec2_i32(vec2<i32>(u_input.c, 1i), vec2<i32>(u_input.c, 19539i)), vec2<i32>(u_input.c, i32(-2147483648)))));
                let var_2 = Struct_2(_wgslsmith_f_op_vec4_f32(select(vec4<f32>(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-835f * 422f), _wgslsmith_f_op_f32(f32(-1f) * -1679f), any(vec4<bool>(true, false, false, true)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-305f)), -667f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1316f * -1333f))), _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(abs(vec4<f32>(148f, -690f, -370f, -1000f))))), _wgslsmith_f_op_vec4_f32(-vec4<f32>(-464f, 850f, 125f, -1439f))), any(select(vec4<bool>(true, true, false, false), select(vec4<bool>(false, false, false, false), vec4<bool>(true, false, true, true), vec4<bool>(false, true, false, false)), select(vec4<bool>(true, false, true, true), vec4<bool>(true, true, true, false), vec4<bool>(false, true, true, true)))))));
            }
            default: {
            }
        }
        var_0 = 8042i;
    }
    switch (min(firstTrailingBit(~abs(arg_0)) & reverseBits(min(u_input.c, -1i) ^ arg_0), u_input.c)) {
        case 1i: {
            var var_0 = ~_wgslsmith_mult_vec4_i32(_wgslsmith_add_vec4_i32(_wgslsmith_add_vec4_i32(vec4<i32>(1i, 2147483647i, -20935i, -1i), -vec4<i32>(u_input.c, arg_0, arg_0, -71836i)), _wgslsmith_mult_vec4_i32(_wgslsmith_clamp_vec4_i32(vec4<i32>(-12879i, arg_0, arg_0, arg_0), vec4<i32>(23283i, 1i, 3168i, arg_0), vec4<i32>(25451i, u_input.c, -32232i, 2147483647i)), -vec4<i32>(2147483647i, 2504i, arg_0, 78517i))), vec4<i32>(~u_input.c << (countOneBits(u_input.a.x) % 32u), max(_wgslsmith_clamp_i32(1i, -30164i, u_input.c), abs(2147483647i)), arg_0, ~3103i));
            switch (max(0i, 54369i)) {
                case -3086i: {
                    let var_1 = Struct_3(_wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(1255f, -844f, -1000f, 1519f) * vec4<f32>(192f, 659f, 333f, -313f)) * _wgslsmith_f_op_vec4_f32(sign(vec4<f32>(2591f, -293f, -258f, 2042f)))), vec4<f32>(1f, _wgslsmith_f_op_f32(ceil(1000f)), _wgslsmith_f_op_f32(-938f), _wgslsmith_f_op_f32(-174f)))), -(select(abs(vec4<i32>(-1228i, 2147483647i, -52165i, arg_0)), -vec4<i32>(arg_0, 18431i, 72063i, -19639i), any(vec2<bool>(false, false))) ^ ((vec4<i32>(-45102i, u_input.c, arg_0, var_0.x) & vec4<i32>(-33457i, arg_0, arg_0, i32(-2147483648))) & vec4<i32>(arg_0, -25516i, 47168i, -24713i))), Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(_wgslsmith_div_f32(-1000f, 1034f))))), true, Struct_2(_wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(ceil(2208f)), _wgslsmith_div_f32(112f, -281f), 665f, _wgslsmith_f_op_f32(-626f - -1000f)) + vec4<f32>(_wgslsmith_f_op_f32(f32(-1f) * -986f), _wgslsmith_f_op_f32(-221f + 1731f), _wgslsmith_f_op_f32(-471f), _wgslsmith_f_op_f32(-1000f)))));
                    var_0 = ~select(var_1.b >> (((vec4<u32>(u_input.b, 0u, u_input.d.x, 1u) >> (vec4<u32>(5541u, u_input.a.x, u_input.a.x, u_input.b) % vec4<u32>(32u))) | vec4<u32>(0u, 1u, 47683u, 1u)) % vec4<u32>(32u)), min(firstTrailingBit(~vec4<i32>(1i, var_0.x, u_input.c, u_input.c)), -vec4<i32>(var_0.x, u_input.c, arg_0, -1i) ^ (vec4<i32>(arg_0, var_0.x, 1i, 48795i) | var_1.b)), any(vec3<bool>(true, var_1.d, all(vec4<bool>(true, var_1.d, false, var_1.d)))));
                    var var_2 = var_1.e.a.yz;
                    let var_3 = -var_1.b ^ vec4<i32>(-u_input.c, firstLeadingBit(-1i), ~(~(~(-1i))), arg_0);
                    var var_4 = var_1.e.a;
                }
                case -1i: {
                    let var_1 = var_0.ywy;
                    let var_2 = _wgslsmith_f_op_vec2_f32(round(vec2<f32>(-741f, _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(400f - 637f), _wgslsmith_f_op_f32(ceil(662f)))))));
                    var_0 = abs(-(abs(countOneBits(vec4<i32>(var_1.x, var_0.x, var_1.x, var_1.x))) << (firstTrailingBit(_wgslsmith_div_vec4_u32(vec4<u32>(u_input.d.x, u_input.a.x, 24295u, 1u), vec4<u32>(u_input.b, 4294967295u, 13168u, u_input.a.x))) % vec4<u32>(32u))));
                    let var_3 = u_input.d;
                    let var_4 = min(-reverseBits(var_0.x), firstTrailingBit(-1i));
                }
                case 1i: {
                }
                default: {
                    var_0 = vec4<i32>(_wgslsmith_div_i32(firstLeadingBit(abs(firstTrailingBit(var_0.x))), _wgslsmith_sub_i32(arg_0, func_6(arg_0))), -15439i, 0i, arg_0);
                    var_0 = select(_wgslsmith_clamp_vec4_i32(vec4<i32>(max(u_input.c, arg_0), u_input.c, -arg_0, select(1i, 2147483647i, true)), -vec4<i32>(arg_0, var_0.x, 0i, arg_0), select(~vec4<i32>(-7236i, var_0.x, u_input.c, 2147483647i), -vec4<i32>(1i, -38662i, var_0.x, 2147483647i), all(vec4<bool>(true, false, true, true)))) | select(vec4<i32>(8072i, -52296i, _wgslsmith_sub_i32(-40716i, u_input.c), 2147483647i), ~(-vec4<i32>(i32(-2147483648), 6771i, i32(-2147483648), 1i)), select(vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true), select(true, true, false))), vec4<i32>(0i, _wgslsmith_add_i32(-1i, _wgslsmith_sub_i32(0i, max(-19533i, 2147483647i))), select(~(~(-29703i)), 24274i, (arg_0 >= var_0.x) && any(vec2<bool>(false, true))), arg_0), !select(vec4<bool>(true, true, true, true), select(vec4<bool>(true, true, true, true), vec4<bool>(true, false, true, false), vec4<bool>(true, false, true, true)), vec4<bool>(true, var_0.x >= -1i, select(false, true, true), any(vec2<bool>(false, true)))));
                }
            }
        }
        case 10729i: {
            switch (u_input.c) {
                case -32664i: {
                }
                default: {
                    let var_0 = Struct_1(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(f32(-1f) * -341f))));
                    var var_1 = var_0.a;
                }
            }
            switch (~u_input.c) {
                case -1i: {
                }
                case 46337i: {
                    var var_0 = Struct_1(_wgslsmith_f_op_f32(select(-507f, 789f, all(select(vec3<bool>(true, true, true), vec3<bool>(false, true, false), vec3<bool>(true, false, true))))));
                    let var_1 = var_0.a;
                }
                case -37347i: {
                    let var_0 = Struct_3(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(vec4<f32>(611f, 1141f, 1000f, -1995f) + _wgslsmith_f_op_vec4_f32(vec4<f32>(-1072f, 602f, 188f, -1001f) * vec4<f32>(1427f, -1000f, 2315f, 137f))), _wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(759f, 658f, 1231f, -1017f)))))), firstTrailingBit(_wgslsmith_sub_vec4_i32(~abs(vec4<i32>(arg_0, i32(-2147483648), -22933i, arg_0)), ~(-vec4<i32>(u_input.c, 0i, arg_0, 1i)))), Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(-1561f, -1000f))))), any(select(vec2<bool>(true, true), select(select(vec2<bool>(true, false), vec2<bool>(false, false), false), select(vec2<bool>(true, true), vec2<bool>(false, true), vec2<bool>(false, true)), true), true)), Struct_2(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(-293f, -894f, -229f, 1294f))))));
                    let var_1 = _wgslsmith_mult_i32(firstTrailingBit(i32(-2147483648)), ~firstTrailingBit(_wgslsmith_dot_vec3_i32(vec3<i32>(2147483647i, u_input.c, -82303i), var_0.b.yyw)));
                    var var_2 = vec2<u32>(1u, 1u);
                    let var_3 = u_input.d;
                    let var_4 = vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_0.c.a) + var_0.a.x))), 256f);
                }
                default: {
                    var var_0 = vec2<i32>(arg_0, ~(select(arg_0, i32(-2147483648), true) & u_input.c));
                    var var_1 = _wgslsmith_f_op_f32(select(-1525f, _wgslsmith_f_op_f32(sign(638f)), !(!all(vec4<bool>(true, true, true, true)))));
                    var var_2 = abs(_wgslsmith_mod_vec3_i32(-abs(vec3<i32>(var_0.x, -27100i, var_0.x)), vec3<i32>(arg_0, _wgslsmith_add_i32(_wgslsmith_clamp_i32(i32(-2147483648), 2147483647i, i32(-2147483648)), -1594i), u_input.c)));
                    var_2 = ~(~(firstLeadingBit(_wgslsmith_mult_vec3_i32(vec3<i32>(1i, var_2.x, var_2.x), vec3<i32>(var_0.x, u_input.c, arg_0))) ^ firstTrailingBit(~vec3<i32>(var_2.x, arg_0, -21226i))));
                }
            }
            var var_0 = Struct_1(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(-652f)) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(276f, 210f, false)))) * 1000f));
            switch (arg_0) {
                case i32(-2147483648): {
                }
                case -1i: {
                }
                case 5814i: {
                    var_0 = Struct_1(_wgslsmith_f_op_f32(ceil(-1824f)));
                    var_0 = Struct_1(982f);
                    let var_1 = false;
                }
                case 61349i: {
                    var_0 = Struct_1(var_0.a);
                }
                default: {
                    let var_1 = u_input.c;
                    var var_2 = Struct_2(vec4<f32>(var_0.a, var_0.a, 138f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(abs(var_0.a)), _wgslsmith_f_op_f32(-var_0.a), all(vec3<bool>(true, false, false)))))));
                    var_2 = Struct_2(_wgslsmith_f_op_vec4_f32(-var_2.a));
                    var var_3 = ~vec2<i32>(i32(-2147483648) ^ firstLeadingBit(arg_0), -(~(i32(-2147483648))));
                    var_2 = Struct_2(vec4<f32>(var_2.a.x, _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(var_2.a.x - var_2.a.x))), _wgslsmith_f_op_f32(-var_2.a.x))), var_0.a, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-130f * _wgslsmith_f_op_f32(518f - var_0.a)))));
                }
            }
        }
        default: {
            loop {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
            }
        }
    }
    let var_0 = Struct_2(_wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(-141f, 101f, -1024f, 435f)))), _wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(step(vec4<f32>(731f, 135f, 1613f, 1000f), vec4<f32>(120f, 1926f, -574f, 1217f))))))))));
    var var_1 = arg_0;
    var var_2 = !any(select(select(select(vec2<bool>(false, true), vec2<bool>(false, false), vec2<bool>(true, false)), select(vec2<bool>(false, false), vec2<bool>(false, false), vec2<bool>(false, false)), true), select(select(vec2<bool>(true, true), vec2<bool>(false, true), vec2<bool>(false, false)), select(vec2<bool>(true, true), vec2<bool>(true, true), vec2<bool>(true, false)), all(vec2<bool>(true, true))), all(vec4<bool>(true, false, false, false))));
    return u_input.a.x;
}

fn func_4(arg_0: vec2<u32>, arg_1: u32, arg_2: i32, arg_3: Struct_4) -> bool {
    if (true) {
    }
    switch (0i) {
        case 22381i: {
            if (select(true, false, !(select(true, true, false) && !select(false, true, true)))) {
            }
        }
        default: {
            let var_0 = arg_3.b.a <= _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1274f)) * 1226f);
            if (!(_wgslsmith_dot_vec3_u32(~vec3<u32>(0u, 1338u, 30822u), vec3<u32>(countOneBits(4294967295u), ~7979u, func_5(-34579i))) < ~u_input.b)) {
                let var_1 = _wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(max(vec4<f32>(_wgslsmith_f_op_f32(142f * arg_3.b.a), _wgslsmith_f_op_f32(-arg_3.b.a), 275f, _wgslsmith_f_op_f32(arg_3.b.a + -1430f)), _wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(vec4<f32>(379f, -1527f, arg_3.b.a, arg_3.b.a) - vec4<f32>(1549f, -1521f, arg_3.b.a, arg_3.b.a)))))), _wgslsmith_f_op_vec4_f32(vec4<f32>(arg_3.b.a, _wgslsmith_f_op_f32(arg_3.b.a * arg_3.b.a), _wgslsmith_f_op_f32(arg_3.b.a * 1000f), arg_3.b.a) + vec4<f32>(_wgslsmith_f_op_f32(step(813f, 517f)), _wgslsmith_div_f32(-2466f, arg_3.b.a), _wgslsmith_f_op_f32(trunc(215f)), _wgslsmith_div_f32(-230f, 1566f)))))));
                return all(!(!vec4<bool>(true, true, false, var_0)));
            }
            let var_1 = Struct_1(_wgslsmith_f_op_f32(arg_3.b.a + _wgslsmith_f_op_f32(trunc(arg_3.b.a))));
        }
    }
    var var_0 = arg_3;
    var var_1 = var_0.b;
    var_1 = arg_3.b;
    return select(any(!select(vec4<bool>(true, true, false, false), vec4<bool>(false, false, false, true), vec4<bool>(true, true, true, true))), true, !(!any(select(vec2<bool>(false, true), vec2<bool>(true, true), vec2<bool>(false, false)))));
}

fn func_3(arg_0: Struct_2, arg_1: vec4<bool>, arg_2: Struct_4, arg_3: Struct_3) -> vec2<i32> {
    switch (arg_3.b.x) {
        case -73135i: {
            if (any(!(!vec4<bool>(true, !arg_1.x, arg_3.a.x >= -742f, func_4(vec2<u32>(65361u, 1u), u_input.b, 47038i, arg_2))))) {
                var var_0 = 1120f;
            }
            var var_0 = -1i;
        }
        case 1i: {
            if ((-313f == _wgslsmith_div_f32(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(max(arg_0.a.x, arg_2.b.a)))), _wgslsmith_f_op_f32(sign(-446f)))) && any(vec4<bool>(false, arg_3.d, any(select(arg_1.zzx, vec3<bool>(true, true, false), vec3<bool>(true, true, false))), true))) {
                let var_0 = arg_2;
                var var_1 = arg_3.b.xyx;
                let var_2 = _wgslsmith_f_op_vec4_f32(step(vec4<f32>(_wgslsmith_f_op_f32(arg_3.a.x * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_2.b.a) + 1498f)), -1369f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_0.a.x - _wgslsmith_f_op_f32(495f + arg_2.b.a))), _wgslsmith_f_op_f32(-arg_0.a.x)), arg_3.a));
            }
            var var_0 = arg_3.d;
            loop {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                break;
            }
            for (var var_1 = 2147483647i; var_1 != 0i; var_1 += 1i) {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                var var_2 = _wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(abs(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_2.b.a, -1709f, -680f, -894f)), _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(step(vec4<f32>(arg_3.a.x, arg_2.b.a, arg_3.e.a.x, arg_0.a.x), arg_3.a)), _wgslsmith_div_vec4_f32(arg_0.a, arg_3.a)))))));
                let var_3 = u_input.d;
                var_0 = any(vec4<bool>(arg_1.x, true, true, !(arg_3.d || arg_1.x))) || arg_3.d;
                var_2 = _wgslsmith_f_op_vec4_f32(select(arg_0.a, arg_0.a, arg_1));
            }
        }
        case 56694i: {
            loop {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                let var_0 = any(vec3<bool>(arg_1.x, !func_4(select(vec2<u32>(u_input.a.x, u_input.d.x), vec2<u32>(10106u, u_input.b), false), 1u, abs(arg_2.a), arg_2), true));
                var var_1 = Struct_4(~(~_wgslsmith_dot_vec4_i32(_wgslsmith_add_vec4_i32(arg_3.b, vec4<i32>(u_input.c, 31546i, arg_3.b.x, -3406i)), arg_3.b)), arg_2.b);
                let var_2 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(select(198f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(-1504f, 927f)) + _wgslsmith_div_f32(var_1.b.a, var_1.b.a)), false)))), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(select(var_1.b.a, _wgslsmith_f_op_f32(f32(-1f) * -730f), true)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_3.c.a * -902f)) - _wgslsmith_f_op_f32(sign(-1000f))))));
            }
            var var_0 = vec3<bool>(true, arg_1.x, !(1u != _wgslsmith_sub_u32(1u, _wgslsmith_mod_u32(u_input.b, 6740u))));
            return vec2<i32>(arg_2.a, i32(-2147483648));
        }
        case 2147483647i: {
            var var_0 = (func_4(~vec2<u32>(u_input.d.x, 506u), countOneBits(firstTrailingBit(u_input.b)), u_input.c, arg_2) & arg_3.d) && arg_1.x;
            for (var var_1 = 30092i; var_1 < 38025i; ) {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
            }
            switch (abs(_wgslsmith_dot_vec3_i32(-vec3<i32>(u_input.c, -2147483647i, 2383i), arg_3.b.zxx))) {
                default: {
                }
            }
        }
        default: {
            for (var var_0 = 68122i; select(arg_3.d, !(!(any(vec4<bool>(arg_3.d, true, false, true)) | !arg_1.x)), select(true, select(!arg_3.d, all(select(arg_1.xy, vec2<bool>(false, false), arg_1.wz)), _wgslsmith_f_op_f32(-arg_0.a.x) != _wgslsmith_f_op_f32(932f + 470f)), select(all(arg_1.xw), true, true))); ) {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                var var_1 = Struct_1(1222f);
            }
            var var_0 = Struct_4(arg_3.b.x, Struct_1(691f));
            if (all(vec4<bool>(true, 4294967295u < ~(~u_input.a.x), true, !arg_3.d))) {
                var var_1 = ~_wgslsmith_sub_vec3_i32(arg_3.b.yzy | -arg_3.b.xxx, vec3<i32>(-1i, arg_2.a ^ var_0.a, ~3544i)) | arg_3.b.www;
                let var_2 = _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(var_0.b.a + _wgslsmith_f_op_f32(sign(var_0.b.a)))));
                var_0 = arg_2;
                return ~vec2<i32>(u_input.c, i32(-2147483648));
            }
            let var_1 = !all(select(select(vec3<bool>(true, true, false), vec3<bool>(arg_3.d, arg_1.x, arg_3.d), vec3<bool>(arg_3.d, arg_1.x, arg_3.d)), vec3<bool>(arg_3.d, arg_3.d, false), false)) && !(all(arg_1.ww) || (_wgslsmith_f_op_f32(-1000f + -665f) < _wgslsmith_f_op_f32(max(var_0.b.a, 703f))));
        }
    }
    var var_0 = u_input.b >> (~u_input.a.x % 32u);
    if (_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1729f) + _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(-1372f))), _wgslsmith_f_op_f32(arg_3.c.a + arg_3.a.x), arg_1.x))) <= _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(-arg_2.b.a), 119f)))) {
        var var_1 = Struct_1(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_3.a.x) * arg_0.a.x)) - arg_2.b.a));
        for (; ; ) {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
            var_1 = Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_2.b.a - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(arg_2.b.a, -746f)) - _wgslsmith_f_op_f32(sign(-1421f))))));
            var_0 = _wgslsmith_dot_vec2_u32(~(~_wgslsmith_add_vec2_u32(reverseBits(u_input.d), vec2<u32>(1u, u_input.b))), reverseBits(countOneBits(~u_input.a.zy)));
            var var_2 = ~(~arg_3.b.x);
        }
        let var_2 = Struct_4(~(~firstTrailingBit(-34911i >> (u_input.d.x % 32u))), Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(_wgslsmith_div_f32(arg_0.a.x, var_1.a))))));
        let var_3 = vec4<u32>(u_input.b, u_input.a.x, _wgslsmith_mod_u32(_wgslsmith_dot_vec3_u32(u_input.a, _wgslsmith_mod_vec3_u32(_wgslsmith_add_vec3_u32(vec3<u32>(u_input.b, u_input.a.x, u_input.a.x), vec3<u32>(u_input.a.x, u_input.b, 21914u)), abs(u_input.a))), countOneBits(reverseBits(u_input.a.x)) << (~u_input.d.x % 32u)), abs(_wgslsmith_clamp_u32(~_wgslsmith_dot_vec3_u32(vec3<u32>(1u, u_input.d.x, 0u), u_input.a), 0u, ~(~u_input.a.x))));
    }
    let var_1 = -1000f;
    for (; abs(_wgslsmith_mult_u32(~u_input.d.x, max(u_input.d.x, u_input.a.x))) >= ~20514u; ) {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        var_0 = u_input.b;
    }
    return -vec2<i32>(~_wgslsmith_dot_vec4_i32(vec4<i32>(15547i, u_input.c, u_input.c, arg_3.b.x), arg_3.b), _wgslsmith_mult_i32(abs(~55049i), -1i));
}

fn func_2(arg_0: vec3<i32>) -> bool {
    var var_0 = ~(~select(-func_3(Struct_2(vec4<f32>(411f, 590f, 2076f, 154f)), vec4<bool>(false, false, true, true), Struct_4(arg_0.x, Struct_1(483f)), Struct_3(vec4<f32>(608f, -630f, 991f, 1000f), vec4<i32>(arg_0.x, arg_0.x, u_input.c, 0i), Struct_1(-659f), true, Struct_2(vec4<f32>(1084f, 131f, -1437f, 1637f)))), arg_0.zy, select(true, true, any(vec4<bool>(true, false, false, true)))));
    let var_1 = Struct_1(_wgslsmith_f_op_f32(1800f - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(-756f)) - _wgslsmith_f_op_f32(f32(-1f) * -359f))));
    var_0 = select(-(vec2<i32>(u_input.c, _wgslsmith_sub_i32(-5418i, -1i)) << (vec2<u32>(11769u << (u_input.d.x % 32u), firstLeadingBit(1u)) % vec2<u32>(32u))), -arg_0.zy, vec2<bool>(false, true));
    let var_2 = Struct_2(_wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(433f, var_1.a, var_1.a, var_1.a) * vec4<f32>(var_1.a, var_1.a, var_1.a, 825f))) - _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(abs(vec4<f32>(1450f, -264f, 419f, 1099f))))), vec4<f32>(var_1.a, _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(sign(645f)))), -718f, var_1.a))));
    var_0 = countOneBits(abs(vec2<i32>(countOneBits(_wgslsmith_mult_i32(u_input.c, u_input.c)), min(arg_0.x, -2147483647i))));
    return true;
}

fn func_1(arg_0: vec4<f32>, arg_1: vec3<f32>) -> bool {
    loop {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        for (; select(any(select(vec3<bool>(true, true, true), vec3<bool>(true, true, true), true)), func_2(vec3<i32>(_wgslsmith_mult_i32(u_input.c, _wgslsmith_mod_i32(u_input.c, u_input.c)), -37532i, i32(-2147483648))), all(vec4<bool>(true, true, true, true)) | true); ) {
            if (LOOP_COUNTERS[13u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
            var var_0 = _wgslsmith_f_op_vec4_f32(trunc(arg_0));
            var var_1 = abs(vec4<i32>(i32(-1i) * -_wgslsmith_div_i32(u_input.c, 2147483647i), 2147483647i ^ ~_wgslsmith_clamp_i32(u_input.c, u_input.c, u_input.c), ~(~(i32(-2147483648))), u_input.c));
            continue;
        }
        var var_0 = Struct_1(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-arg_1.x), arg_0.x));
        var var_1 = _wgslsmith_add_vec3_i32(vec3<i32>(20574i, u_input.c, _wgslsmith_add_i32(0i, countOneBits(2467i))) << (u_input.a % vec3<u32>(32u)), _wgslsmith_div_vec3_i32(vec3<i32>(~(-70777i), 1i, _wgslsmith_dot_vec2_i32(~vec2<i32>(u_input.c, u_input.c), vec2<i32>(7981i, -1i))), vec3<i32>(-_wgslsmith_mod_i32(2147483647i, u_input.c), select(_wgslsmith_add_i32(8295i, u_input.c), _wgslsmith_sub_i32(u_input.c, u_input.c), true), ~abs(u_input.c))));
        break;
    }
    for (var var_0 = 48398i; var_0 < 2147483647i; var_0 -= 1i) {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        var_0 = _wgslsmith_dot_vec4_i32(_wgslsmith_div_vec4_i32(_wgslsmith_div_vec4_i32(_wgslsmith_mod_vec4_i32(vec4<i32>(-2376i, u_input.c, i32(-2147483648), u_input.c) ^ vec4<i32>(-4900i, 291i, u_input.c, 22951i), -vec4<i32>(-30155i, u_input.c, u_input.c, u_input.c)), _wgslsmith_mult_vec4_i32(max(vec4<i32>(2147483647i, -1i, u_input.c, u_input.c), vec4<i32>(u_input.c, 13407i, 0i, 1i)), vec4<i32>(u_input.c, u_input.c, i32(-2147483648), -1i))), abs(vec4<i32>(-1i, -1531i, func_6(60918i), i32(-2147483648)))), (vec4<i32>(~u_input.c, countOneBits(u_input.c), _wgslsmith_mult_i32(-1i, u_input.c), u_input.c & 0i) ^ -vec4<i32>(i32(-2147483648), -1i, 43700i, u_input.c)) & vec4<i32>(~(~(i32(-2147483648))), u_input.c, -1i, _wgslsmith_div_i32(u_input.c, 0i)));
        var_0 = _wgslsmith_div_i32(firstTrailingBit(1i) ^ -(_wgslsmith_mod_i32(-19080i, u_input.c) | -29392i), select(u_input.c, _wgslsmith_sub_i32(i32(-1i) * -21996i, u_input.c), true));
        var var_1 = _wgslsmith_clamp_vec4_u32(~abs(vec4<u32>(1u, u_input.a.x & 0u, u_input.d.x, u_input.a.x)), vec4<u32>(_wgslsmith_sub_u32(u_input.d.x, _wgslsmith_mult_u32(u_input.b, 4294967295u) & _wgslsmith_clamp_u32(220u, 0u, u_input.b)), 0u, 1u, ~_wgslsmith_clamp_u32(~19412u, u_input.a.x, 1u)), vec4<u32>(50303u, u_input.a.x, firstTrailingBit(firstLeadingBit(11381u)), u_input.a.x));
        var var_2 = _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(min(arg_0.x, -1000f)))), arg_0.x));
    }
    let var_0 = _wgslsmith_add_vec4_u32(countOneBits(abs(~_wgslsmith_mult_vec4_u32(vec4<u32>(1u, 32039u, u_input.a.x, u_input.b), vec4<u32>(u_input.a.x, 55581u, 4294967295u, 11811u)))), vec4<u32>(~countOneBits(u_input.a.x), _wgslsmith_add_u32(~0u, u_input.a.x | 36218u), ~reverseBits(u_input.b), _wgslsmith_div_u32(abs(u_input.a.x), max(u_input.a.x, u_input.a.x))) ^ ((_wgslsmith_div_vec4_u32(vec4<u32>(1u, u_input.b, u_input.d.x, u_input.b), vec4<u32>(u_input.a.x, 60608u, 53160u, 44370u)) >> (countOneBits(vec4<u32>(u_input.b, u_input.d.x, 18233u, 1118u)) % vec4<u32>(32u))) << (vec4<u32>(u_input.a.x ^ 33630u, _wgslsmith_dot_vec4_u32(vec4<u32>(u_input.a.x, u_input.d.x, 4294967295u, 81811u), vec4<u32>(0u, 32534u, u_input.b, u_input.d.x)), 0u, _wgslsmith_add_u32(0u, 45487u)) % vec4<u32>(32u))));
    var var_1 = vec3<bool>(!(select(40668i >= u_input.c, true, true) && (28579u != var_0.x)), arg_0.x != 1138f, false);
    var var_2 = Struct_4(u_input.c, Struct_1(arg_1.x));
    return all(!vec3<bool>(!(arg_1.x < 153f), var_1.x, true));
}

@compute
@workgroup_size(1)
fn main() {
    switch (6153i) {
        case i32(-2147483648): {
            for (var var_0 = countOneBits(u_input.c); ; var_0 -= 1i) {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
                let var_1 = true;
            }
            let var_0 = _wgslsmith_div_i32((abs(41733i) | select(-u_input.c, u_input.c >> (15867u % 32u), true)) & u_input.c, i32(-1i) * -1i);
            let var_1 = !(select(!any(vec2<bool>(false, false)), true, !any(vec3<bool>(false, false, true))) && (u_input.b > ~45623u));
            var var_2 = vec4<bool>(any(vec2<bool>(~43090u >= _wgslsmith_dot_vec3_u32(u_input.a, vec3<u32>(u_input.a.x, u_input.a.x, 91713u)), !var_1 && !var_1)), false, !(!(!(var_1 && false))), all(!select(select(vec2<bool>(false, var_1), vec2<bool>(var_1, var_1), true), vec2<bool>(true, true), select(var_1, var_1, var_1))));
        }
        default: {
            for (; true; ) {
                if (LOOP_COUNTERS[16u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
            }
            let var_0 = _wgslsmith_add_vec3_u32(~vec3<u32>(max(_wgslsmith_mod_u32(u_input.d.x, 0u), u_input.a.x), 5537u, u_input.b), ~(~(~(~vec3<u32>(u_input.d.x, 4294967295u, u_input.a.x)))));
            loop {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                let var_1 = _wgslsmith_add_i32(~(~(~reverseBits(-1i))), u_input.c);
            }
        }
    }
    switch (~(-41321i)) {
        case -4777i: {
            for (var var_0 = firstTrailingBit(_wgslsmith_sub_i32(i32(-2147483648), u_input.c)); var_0 > 2147483647i; ) {
                if (LOOP_COUNTERS[18u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
                var_0 = _wgslsmith_mult_i32(select(-1i, _wgslsmith_div_i32(_wgslsmith_dot_vec4_i32(vec4<i32>(u_input.c, u_input.c, -5027i, i32(-2147483648)), _wgslsmith_mult_vec4_i32(vec4<i32>(40808i, u_input.c, u_input.c, u_input.c), vec4<i32>(u_input.c, u_input.c, u_input.c, u_input.c))), ~(-12988i)), all(select(vec4<bool>(false, false, false, false), vec4<bool>(false, false, true, false), vec4<bool>(false, true, false, true))) & func_1(_wgslsmith_f_op_vec4_f32(round(vec4<f32>(-1000f, 142f, -223f, 663f))), _wgslsmith_f_op_vec3_f32(round(vec3<f32>(-460f, 1298f, 845f))))), select(_wgslsmith_mult_i32(_wgslsmith_div_i32(_wgslsmith_clamp_i32(1325i, u_input.c, u_input.c), u_input.c), (u_input.c & u_input.c) << (~u_input.b % 32u)), u_input.c, true || !func_2(vec3<i32>(u_input.c, u_input.c, -45807i))));
                var_0 = i32(-1i) * -21793i;
            }
            switch (~u_input.c) {
                default: {
                    let var_0 = ~u_input.c;
                    let var_1 = Struct_1(_wgslsmith_f_op_f32(-1496f));
                    let var_2 = -vec2<i32>(~var_0, var_0);
                    let var_3 = _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(var_1.a, _wgslsmith_f_op_f32(round(-732f)))) * var_1.a))) > var_1.a;
                    var var_4 = Struct_4(~2640i, Struct_1(1000f));
                }
            }
            for (var var_0 = -18410i; false; var_0 -= 1i) {
                if (LOOP_COUNTERS[19u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
                var var_1 = vec4<i32>(i32(-2147483648), 2147483647i, _wgslsmith_dot_vec3_i32(vec3<i32>(~2181i, u_input.c, ~u_input.c) >> (vec3<u32>(4294967295u, ~u_input.b, 0u << (u_input.a.x % 32u)) % vec3<u32>(32u)), -_wgslsmith_sub_vec3_i32(vec3<i32>(u_input.c, i32(-2147483648), -704i), vec3<i32>(-1i, i32(-2147483648), 2147483647i)) >> (u_input.a % vec3<u32>(32u))), -u_input.c);
            }
            var var_0 = vec3<u32>(_wgslsmith_sub_u32(~0u, _wgslsmith_clamp_u32(u_input.b, u_input.b, _wgslsmith_mod_u32(~111642u, min(4294967295u, 4294967295u)))), u_input.a.x, ~3042u);
        }
        default: {
        }
    }
    for (var var_0 = -1i; var_0 == -1i; ) {
        if (LOOP_COUNTERS[20u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
        var var_1 = vec4<bool>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1155f + 1463f)) + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(1261f, 100f, true)) - _wgslsmith_f_op_f32(-476f * -134f))) >= -1053f, true, true, true);
        switch (_wgslsmith_dot_vec3_i32(min(vec3<i32>(i32(-2147483648), -_wgslsmith_sub_i32(u_input.c, 1i), _wgslsmith_mod_i32(u_input.c, 34286i) << (u_input.b % 32u)), (~vec3<i32>(-41471i, 0i, u_input.c) << (_wgslsmith_mod_vec3_u32(u_input.a, u_input.a) % vec3<u32>(32u))) & vec3<i32>(countOneBits(1i), 0i, -62682i)), reverseBits(vec3<i32>(u_input.c, 0i, _wgslsmith_div_i32(_wgslsmith_div_i32(-1i, u_input.c), abs(u_input.c)))))) {
            case 23287i: {
            }
            case 83322i: {
                return;
            }
            case 6091i: {
            }
            case -13922i: {
                var var_2 = Struct_2(vec4<f32>(_wgslsmith_f_op_f32(max(1963f, _wgslsmith_f_op_f32(f32(-1f) * -1544f))), _wgslsmith_f_op_f32(366f + _wgslsmith_f_op_f32(1677f + _wgslsmith_f_op_f32(f32(-1f) * -442f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(594f + -148f) - _wgslsmith_f_op_f32(-1682f - 2879f))), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(891f)) * _wgslsmith_f_op_f32(sign(2276f)))))));
                let var_3 = abs(_wgslsmith_sub_vec3_u32(vec3<u32>(u_input.a.x, ~u_input.b, 1u ^ u_input.d.x) ^ u_input.a, vec3<u32>(u_input.a.x, ~3448u, 90029u)));
                let var_4 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -218f) * -969f) - var_2.a.x) + _wgslsmith_f_op_f32(select(var_2.a.x, _wgslsmith_f_op_f32(-431f), var_1.x)));
                break;
            }
            default: {
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[21u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
        for (var var_0 = 30859i; var_0 != 703i; var_0 -= 1i) {
            if (LOOP_COUNTERS[22u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
            let var_1 = _wgslsmith_mult_u32(89972u, u_input.a.x);
            continue;
        }
        switch (0i) {
            case 1i: {
            }
            case -1i: {
                let var_0 = _wgslsmith_dot_vec3_i32((-vec3<i32>(1i, u_input.c, u_input.c) >> (~u_input.a % vec3<u32>(32u))) << (_wgslsmith_div_vec3_u32(vec3<u32>(21265u, u_input.d.x ^ 1u, ~u_input.d.x), u_input.a) % vec3<u32>(32u)), ~vec3<i32>(19109i, u_input.c >> (1u % 32u), -u_input.c) | abs(vec3<i32>(_wgslsmith_dot_vec2_i32(vec2<i32>(-45906i, u_input.c), vec2<i32>(-17620i, u_input.c)), u_input.c, firstLeadingBit(u_input.c))));
                var var_1 = !func_4(~(_wgslsmith_clamp_vec2_u32(vec2<u32>(0u, 1u), u_input.a.yz, u_input.a.zy) & ~u_input.a.zz), ~(~abs(u_input.b)), countOneBits(_wgslsmith_dot_vec4_i32(firstTrailingBit(vec4<i32>(var_0, var_0, u_input.c, i32(-2147483648))), vec4<i32>(0i, u_input.c, 52669i, var_0))), Struct_4(u_input.c, Struct_1(_wgslsmith_f_op_f32(1427f - -998f))));
                var var_2 = Struct_2(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(-589f, -113f, 259f, 1143f))))), _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-992f, -211f, 1000f, 261f)), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(-1379f, 1000f, -1000f, -1316f))))));
            }
            default: {
                let var_0 = Struct_3(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(109f, -1000f, -1276f, -340f)) * _wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(vec4<f32>(-1445f, -1539f, -1487f, -1369f) - vec4<f32>(133f, -361f, 1201f, 2136f))))), _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(1f, 1f, 1f, 1f) - _wgslsmith_f_op_vec4_f32(vec4<f32>(-368f, -368f, 1000f, 1774f) * vec4<f32>(495f, -1073f, 1000f, 356f))), _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(min(vec4<f32>(-657f, -914f, 374f, -2608f), vec4<f32>(-1544f, -604f, -1000f, 638f))), vec4<f32>(1f, 1f, 1f, 1f)))), vec4<i32>(u_input.c, u_input.c, firstLeadingBit(_wgslsmith_dot_vec4_i32(vec4<i32>(u_input.c, u_input.c, -907i, u_input.c), vec4<i32>(u_input.c, i32(-2147483648), u_input.c, 2147483647i)) >> (_wgslsmith_dot_vec4_u32(vec4<u32>(u_input.a.x, u_input.b, 0u, 1u), vec4<u32>(u_input.a.x, u_input.b, u_input.b, 1u)) % 32u)), ~_wgslsmith_sub_i32(~u_input.c, -u_input.c)), Struct_1(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(ceil(1000f)), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(round(-345f))))))), true, Struct_2(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(1014f, 245f, -122f, -1018f)) + _wgslsmith_f_op_vec4_f32(-vec4<f32>(-1577f, 157f, -107f, -283f))))));
                let var_1 = var_0.c;
            }
        }
    }
    let var_0 = ~u_input.c;
    for (; 1f >= _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -206f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(-958f)) + _wgslsmith_f_op_f32(max(835f, _wgslsmith_f_op_f32(f32(-1f) * -218f)))))); ) {
        if (LOOP_COUNTERS[23u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
    }
    let var_1 = _wgslsmith_sub_i32(var_0, u_input.c | 13895i);
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_clamp_u32(_wgslsmith_add_u32(u_input.d.x & ~0u, 76444u), abs(u_input.d.x), func_5(firstTrailingBit(~u_input.c))));
}

`;