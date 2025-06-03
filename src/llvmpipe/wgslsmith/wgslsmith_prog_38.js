export const input = [213,148,254,132,146,169,211,132,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [213,148,254,132,146,169,211,132,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[213,148,254,132,146,169,211,132]}
// Seed: 17040562717923490692

struct Struct_1 {
    a: vec3<i32>,
}

struct Struct_2 {
    a: Struct_1,
    b: vec3<bool>,
    c: Struct_1,
    d: Struct_1,
}

struct UniformBuffer {
    a: u32,
    b: u32,
}

struct StorageBuffer {
    a: i32,
    b: u32,
    c: u32,
    d: vec4<i32>,
    e: u32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> LOOP_COUNTERS: array<u32, 24>;

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn func_6() -> vec3<bool> {
    switch (-_wgslsmith_dot_vec3_i32(abs(~vec3<i32>(-28147i, 2147483647i, -38257i)), max(vec3<i32>(1i, -1i, 14440i), ~vec3<i32>(71679i, 7800i, 61124i))) | ~_wgslsmith_add_i32(firstLeadingBit(-16177i >> (u_input.b % 32u)), -(44892i << (u_input.a % 32u)))) {
        case -1i: {
            for (var var_0 = -1i; ; var_0 -= 1i) {
                if (LOOP_COUNTERS[0u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
                var var_1 = Struct_1(~(vec3<i32>(1i, 1i, 1i) << (countOneBits(~vec3<u32>(u_input.a, u_input.a, u_input.b)) % vec3<u32>(32u))));
                var_1 = Struct_1(firstLeadingBit(_wgslsmith_div_vec3_i32(var_1.a, vec3<i32>(9708i, 2147483647i, var_1.a.x) >> (max(vec3<u32>(1u, u_input.a, 0u), vec3<u32>(39756u, 15647u, u_input.a)) % vec3<u32>(32u)))));
                var var_2 = select(vec2<bool>(true, true), vec2<bool>(_wgslsmith_f_op_f32(sign(140f)) >= _wgslsmith_f_op_f32(abs(_wgslsmith_div_f32(980f, -363f))), true), !select(vec2<bool>(true, false), vec2<bool>(any(vec3<bool>(false, false, false)), true), true));
                continue;
            }
            var var_0 = vec4<bool>(any(select(select(vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true), true), select(vec4<bool>(true, false, false, true), select(vec4<bool>(true, true, false, false), vec4<bool>(false, true, true, true), vec4<bool>(false, true, true, true)), vec4<bool>(false, true, true, false)), false)), !(531f == _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1312f - -790f) * _wgslsmith_f_op_f32(step(-252f, -605f)))), true, _wgslsmith_dot_vec2_u32(~vec2<u32>(1u, 73897u) & reverseBits(vec2<u32>(u_input.b, 37793u)), abs(vec2<u32>(33171u, 857u) ^ vec2<u32>(4294967295u, u_input.b))) != _wgslsmith_clamp_u32(u_input.a, _wgslsmith_mult_u32(abs(0u), u_input.a), ~56285u));
            for (; (_wgslsmith_dot_vec4_i32(vec4<i32>(1i, 1i, -16930i, i32(-1i) * -25697i), vec4<i32>(1i, 1i, 1i, 1i)) ^ firstLeadingBit(abs(22784i))) >= 1i; ) {
                if (LOOP_COUNTERS[1u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
                var var_1 = Struct_2(Struct_1((vec3<i32>(49896i, -25434i, -6940i) >> (~vec3<u32>(u_input.a, 64625u, u_input.a) % vec3<u32>(32u))) << (max(~vec3<u32>(1u, u_input.a, u_input.b), ~vec3<u32>(10611u, 29240u, u_input.a)) % vec3<u32>(32u))), !var_0.xww, Struct_1(vec3<i32>(2147483647i, ~1i, ~(~(-1i)))), Struct_1(select(_wgslsmith_sub_vec3_i32(select(vec3<i32>(-19424i, 1i, 16925i), vec3<i32>(-22932i, -16511i, -15736i), var_0.x), _wgslsmith_sub_vec3_i32(vec3<i32>(-12595i, 18249i, -1i), vec3<i32>(-1i, 68133i, i32(-2147483648)))), min(vec3<i32>(i32(-2147483648), 0i, 16941i), _wgslsmith_add_vec3_i32(vec3<i32>(9996i, 13046i, -6750i), vec3<i32>(-37404i, -13955i, 9853i))), var_0.x)));
                continue;
            }
            for (var var_1: i32; _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-2509f), -1820f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(f32(-1f) * -429f))) * _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(select(-1000f, 273f, true))))))) > 1f; var_1 += 1i) {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
                continue;
            }
        }
        case 51187i: {
            if (true) {
                let var_0 = Struct_1(vec3<i32>(countOneBits(2147483647i), i32(-2147483648), _wgslsmith_dot_vec3_i32(vec3<i32>(countOneBits(-17572i), _wgslsmith_mod_i32(0i, 2147483647i), 1i), vec3<i32>(-20562i, 51634i, 0i) >> (~vec3<u32>(4294967295u, u_input.b, 36788u) % vec3<u32>(32u)))));
                let var_1 = ~vec4<u32>(~min(u_input.a, ~u_input.b), _wgslsmith_mod_u32(~(~4294967295u), _wgslsmith_dot_vec3_u32(vec3<u32>(u_input.a, u_input.b, 0u) & vec3<u32>(u_input.b, 129600u, u_input.a), ~vec3<u32>(u_input.b, 1u, 1u))), ~u_input.b, select(u_input.b, _wgslsmith_mod_u32(115727u, ~35725u), all(vec2<bool>(true, true)) & true));
                var var_2 = ~(~(firstTrailingBit(~vec4<i32>(1i, var_0.a.x, var_0.a.x, var_0.a.x)) >> (abs(vec4<u32>(79326u, u_input.b, u_input.a, var_1.x)) % vec4<u32>(32u))));
                var_2 = countOneBits(vec4<i32>(-1i) * -_wgslsmith_mult_vec4_i32(~vec4<i32>(-1i, -1889i, i32(-2147483648), -1i), ~vec4<i32>(-1944i, var_0.a.x, var_2.x, var_0.a.x)));
                var_2 = ~vec4<i32>(((0i ^ var_0.a.x) | 1i) | var_0.a.x, 2147483647i, -3835i, _wgslsmith_sub_i32(var_0.a.x, var_2.x));
            }
            let var_0 = Struct_1(_wgslsmith_mult_vec3_i32(max(_wgslsmith_clamp_vec3_i32(firstLeadingBit(vec3<i32>(-12255i, 33955i, i32(-2147483648))), vec3<i32>(1i, 1i, 1i), -vec3<i32>(0i, 24641i, 10141i)), ~(~vec3<i32>(0i, 0i, 12624i))), -vec3<i32>(i32(-1i) * -16723i, 1i, 0i)));
            for (; !any(vec3<bool>(true, true, all(vec2<bool>(true, false)))); ) {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            }
        }
        case 1i: {
            var var_0 = Struct_2(Struct_1(~abs(vec3<i32>(0i, -66001i, 1i))), select(select(select(vec3<bool>(false, false, false), select(vec3<bool>(true, true, false), vec3<bool>(true, false, false), false), true), select(vec3<bool>(false, true, false), vec3<bool>(true, true, true), true), vec3<bool>(true, true, false)), select(vec3<bool>(any(vec4<bool>(true, true, true, false)), any(vec3<bool>(false, true, true)), true), !select(vec3<bool>(false, true, false), vec3<bool>(false, false, true), vec3<bool>(false, true, true)), true), true), Struct_1(-vec3<i32>(_wgslsmith_sub_i32(-25939i, -35446i), firstTrailingBit(39328i), min(-1i, -12808i))), Struct_1(vec3<i32>(_wgslsmith_add_i32(1i, -1i), abs(_wgslsmith_mult_i32(-1i, 1i)), countOneBits(~(-3603i)))));
            for (var var_1 = i32(-2147483648); any(select(vec4<bool>(true, any(vec3<bool>(true, true, true)), all(vec4<bool>(false, true, false, false)), all(vec4<bool>(false, false, var_0.b.x, false))), !select(vec4<bool>(var_0.b.x, var_0.b.x, var_0.b.x, var_0.b.x), vec4<bool>(false, var_0.b.x, false, var_0.b.x), var_0.b.x), false)) || (_wgslsmith_dot_vec2_u32(min(vec2<u32>(u_input.b, 1u) & vec2<u32>(23986u, 37643u), select(vec2<u32>(u_input.a, 29178u), vec2<u32>(u_input.a, 0u), false)), abs(select(vec2<u32>(u_input.b, 1791u), vec2<u32>(u_input.b, 36227u), var_0.b.yz))) < _wgslsmith_clamp_u32(abs(4294967295u), _wgslsmith_sub_u32(_wgslsmith_mod_u32(u_input.a, 4294967295u), 1u), _wgslsmith_mod_u32(1u, 4294967295u))); var_1 += 1i) {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                continue;
            }
            var var_1 = 19894u;
            let var_2 = Struct_2(var_0.d, select(!(!var_0.b), var_0.b, var_0.b), Struct_1(select(var_0.d.a, ~(~vec3<i32>(i32(-2147483648), 15330i, var_0.d.a.x)), vec3<bool>(var_0.b.x, all(vec4<bool>(false, false, var_0.b.x, var_0.b.x)), any(vec2<bool>(var_0.b.x, true))))), Struct_1(reverseBits(select(var_0.d.a, vec3<i32>(var_0.c.a.x, 26897i, 0i), var_0.b.x)) << (select(~vec3<u32>(4294967295u, u_input.a, 22039u), select(vec3<u32>(760u, 9252u, u_input.a), vec3<u32>(u_input.a, u_input.a, 35955u), var_0.b.x), var_0.b.x || var_0.b.x) % vec3<u32>(32u))));
        }
        case -9102i: {
            for (var var_0 = -1i; var_0 < 1937i; var_0 += 1i) {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                var var_1 = _wgslsmith_div_vec4_f32(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(min(vec4<f32>(_wgslsmith_div_f32(-516f, -646f), _wgslsmith_f_op_f32(852f - 455f), _wgslsmith_f_op_f32(1572f * 1075f), _wgslsmith_f_op_f32(trunc(1312f))), vec4<f32>(1019f, _wgslsmith_f_op_f32(f32(-1f) * -751f), 129f, 556f))), vec4<f32>(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(263f + 963f), 145f)), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(f32(-1f) * -1624f), _wgslsmith_div_f32(-401f, 1000f))), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-673f))), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(1614f, -476f)))), _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-252f), -605f)), _wgslsmith_f_op_f32(round(-1046f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-486f + -395f)), _wgslsmith_f_op_f32(ceil(1170f)))));
                var var_2 = ~abs(_wgslsmith_dot_vec3_i32(vec3<i32>(0i, -15293i, i32(-2147483648)), vec3<i32>(-25551i, -42943i, -1i) << (vec3<u32>(u_input.a, u_input.a, 0u) % vec3<u32>(32u)))) >> (0u % 32u);
                let var_3 = _wgslsmith_dot_vec2_u32(_wgslsmith_sub_vec2_u32(max(vec2<u32>(~4294967295u, 0u), vec2<u32>(5426u, u_input.a)), reverseBits(~(~vec2<u32>(u_input.b, u_input.a)))), (firstLeadingBit(_wgslsmith_add_vec2_u32(vec2<u32>(0u, u_input.b), vec2<u32>(u_input.a, 8619u))) | (vec2<u32>(u_input.b, 1u) >> (~vec2<u32>(u_input.b, 0u) % vec2<u32>(32u)))) & ~firstLeadingBit(_wgslsmith_mod_vec2_u32(vec2<u32>(17504u, u_input.b), vec2<u32>(u_input.b, u_input.b))));
                let var_4 = abs(vec3<u32>(u_input.b, abs(var_3 & u_input.b), 0u) >> ((~vec3<u32>(u_input.a, 1u, 70349u) << (vec3<u32>(~u_input.a, abs(u_input.a), u_input.a) % vec3<u32>(32u))) % vec3<u32>(32u)));
                var_2 = ~abs(1i);
            }
            if (false) {
                var var_0 = _wgslsmith_mod_u32(68448u, _wgslsmith_dot_vec4_u32(_wgslsmith_mod_vec4_u32(abs(reverseBits(vec4<u32>(38533u, 0u, 4294967295u, u_input.a))), vec4<u32>(_wgslsmith_mod_u32(0u, u_input.a), u_input.b, firstTrailingBit(u_input.b), 57495u)), _wgslsmith_mult_vec4_u32(~reverseBits(vec4<u32>(51932u, 4294967295u, u_input.b, 107175u)), _wgslsmith_div_vec4_u32(vec4<u32>(u_input.a, u_input.a, u_input.a, 0u) ^ vec4<u32>(9344u, u_input.b, 0u, 4294967295u), ~vec4<u32>(0u, 0u, 65024u, u_input.a)))));
                var_0 = 1u;
                let var_1 = select(vec2<bool>(true, true), select(vec2<bool>(any(select(vec4<bool>(false, false, true, true), vec4<bool>(false, true, true, false), vec4<bool>(false, true, false, true))), true), select(vec2<bool>(true, true), vec2<bool>(true, true), !all(vec4<bool>(true, false, true, false))), vec2<bool>(true, true)), any(vec4<bool>(any(vec4<bool>(true, true, true, true)), all(select(vec4<bool>(true, false, true, true), vec4<bool>(false, false, false, true), vec4<bool>(true, true, true, true))), any(vec3<bool>(false, true, true)), all(select(vec3<bool>(true, false, false), vec3<bool>(true, false, false), true)))));
                var_0 = ~max(~(~u_input.b), reverseBits(u_input.b) ^ max(~44447u, ~u_input.a));
                var var_2 = 4294967295u;
            }
            var var_0 = abs(-_wgslsmith_mod_vec2_i32(~vec2<i32>(8635i, 8170i), _wgslsmith_clamp_vec2_i32(vec2<i32>(i32(-2147483648), 2147483647i), vec2<i32>(-1i, -1i), vec2<i32>(4054i, 18775i)))) >> ((~min(max(vec2<u32>(u_input.b, 0u), vec2<u32>(4294967295u, u_input.b)), ~vec2<u32>(28381u, 24861u)) | vec2<u32>(~u_input.b, _wgslsmith_dot_vec4_u32(vec4<u32>(u_input.a, 22194u, 13037u, u_input.a), vec4<u32>(45881u, 4294967295u, 1u, u_input.a)))) % vec2<u32>(32u));
        }
        default: {
            loop {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
            }
            var var_0 = Struct_1(vec3<i32>(_wgslsmith_mult_i32(_wgslsmith_mod_i32(_wgslsmith_div_i32(-38559i, 12550i), _wgslsmith_dot_vec3_i32(vec3<i32>(-57472i, 0i, 36115i), vec3<i32>(-1i, i32(-2147483648), -35797i))), firstTrailingBit(37419i)), 1i & (_wgslsmith_dot_vec4_i32(vec4<i32>(0i, -1i, 0i, -7326i), vec4<i32>(60200i, -61479i, 3259i, 2147483647i)) ^ 1i), firstTrailingBit(-22388i)));
            var_0 = Struct_1(min(-_wgslsmith_mult_vec3_i32(select(var_0.a, var_0.a, true), var_0.a << (vec3<u32>(34042u, 1u, 21649u) % vec3<u32>(32u))), vec3<i32>(_wgslsmith_mult_i32(-18159i, abs(var_0.a.x)), var_0.a.x, _wgslsmith_add_i32(1i, 31334i << (u_input.a % 32u)))));
            return !vec3<bool>(true, all(select(vec3<bool>(true, true, true), vec3<bool>(true, true, true), select(vec3<bool>(false, true, false), vec3<bool>(false, false, false), vec3<bool>(true, false, false)))), (-1i ^ _wgslsmith_add_i32(var_0.a.x, var_0.a.x)) == reverseBits(countOneBits(var_0.a.x)));
        }
    }
    var var_0 = ~10409i;
    switch (i32(-2147483648)) {
        case i32(-2147483648): {
            for (var var_1: i32; var_1 >= -1i; var_0 = ~(-_wgslsmith_sub_i32(-62633i, _wgslsmith_dot_vec3_i32(_wgslsmith_div_vec3_i32(vec3<i32>(-702i, 2147483647i, -7767i), vec3<i32>(25574i, 2147483647i, 68241i)), vec3<i32>(i32(-2147483648), -11895i, -1i))))) {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                var var_2 = vec4<i32>(1941i, 0i, 17866i, 1i);
            }
            if (true) {
                var var_1 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(sign(vec3<f32>(1f, _wgslsmith_div_f32(1833f, 253f), _wgslsmith_f_op_f32(sign(1730f)))))));
                var_0 = 1i;
                var_1 = _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(sign(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(-385f, var_1.x, -639f))), vec3<f32>(-1000f, -1051f, _wgslsmith_f_op_f32(f32(-1f) * -2249f))))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(var_1.x, -1005f, 990f)) + _wgslsmith_f_op_vec3_f32(-vec3<f32>(var_1.x, var_1.x, -1319f)))))));
            }
            var_0 = firstLeadingBit(_wgslsmith_mod_i32(2147483647i, -abs(_wgslsmith_clamp_i32(-8911i, -4195i, 14865i))));
        }
        case -20937i: {
            switch (~1i) {
                case 0i: {
                    var var_1 = _wgslsmith_f_op_f32(465f * _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-1000f), _wgslsmith_f_op_f32(-220f))))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-888f - _wgslsmith_f_op_f32(trunc(1434f))) - _wgslsmith_f_op_f32(-127f)))));
                    let var_2 = Struct_2(Struct_1(vec3<i32>(~715i, _wgslsmith_clamp_i32(37008i, 12869i, 0i >> (0u % 32u)), _wgslsmith_mult_i32(select(-16186i, 16819i, true), countOneBits(-1i)))), vec3<bool>(true, true, true), Struct_1(-(~vec3<i32>(43870i, 1i, i32(-2147483648))) << (vec3<u32>(_wgslsmith_dot_vec2_u32(vec2<u32>(7618u, u_input.b), vec2<u32>(1u, u_input.a)), 1u, u_input.b ^ 57312u) % vec3<u32>(32u))), Struct_1(vec3<i32>(64699i, _wgslsmith_add_i32(min(2637i, 13671i), _wgslsmith_sub_i32(-21883i, -1i)), i32(-2147483648))));
                    var var_3 = var_2;
                    var_3 = var_2;
                }
                case 34629i: {
                    var_0 = -(~(~(firstTrailingBit(-1i) >> (1u % 32u))));
                    var var_1 = Struct_2(Struct_1(_wgslsmith_clamp_vec3_i32(vec3<i32>(1i, 47211i, _wgslsmith_dot_vec4_i32(vec4<i32>(-17391i, i32(-2147483648), i32(-2147483648), 1442i), vec4<i32>(1i, 1i, -53722i, 0i))), ~(~vec3<i32>(-47482i, -1i, 0i)), vec3<i32>(i32(-2147483648), firstTrailingBit(-63933i), ~327i))), select(select(select(vec3<bool>(false, false, true), vec3<bool>(true, false, true), select(false, true, false)), select(select(vec3<bool>(false, false, true), vec3<bool>(true, false, true), vec3<bool>(true, true, false)), vec3<bool>(true, true, true), select(vec3<bool>(true, false, true), vec3<bool>(true, true, false), vec3<bool>(false, false, false))), select(vec3<bool>(true, true, true), select(vec3<bool>(false, false, true), vec3<bool>(true, true, false), false), false)), vec3<bool>(true, true, true), select(vec3<bool>(true, true, true), select(vec3<bool>(false, true, false), vec3<bool>(true, true, true), true), vec3<bool>(true, true, true))), Struct_1(vec3<i32>(_wgslsmith_div_i32(_wgslsmith_mult_i32(0i, 23663i), _wgslsmith_sub_i32(13692i, 0i)), -1i, ~_wgslsmith_dot_vec3_i32(vec3<i32>(16564i, 0i, 20896i), vec3<i32>(-1i, 0i, 0i)))), Struct_1(vec3<i32>(_wgslsmith_sub_i32(-1i, -5049i), i32(-2147483648) << (u_input.b % 32u), _wgslsmith_mod_i32(2147483647i, -41044i)) & _wgslsmith_clamp_vec3_i32(vec3<i32>(1i, 1i, 1i), vec3<i32>(-2856i, 0i, -30609i), -vec3<i32>(-3557i, i32(-2147483648), 78325i))));
                }
                case 19424i: {
                    let var_1 = Struct_2(Struct_1(_wgslsmith_clamp_vec3_i32(vec3<i32>(max(2147483647i, 0i), _wgslsmith_sub_i32(0i, -60262i), 0i), max(vec3<i32>(1i, -23897i, -16397i), vec3<i32>(1i, 1i, 1i)), vec3<i32>(1i, 48320i, -11737i))), !(!vec3<bool>(false, any(vec2<bool>(true, false)), true)), Struct_1(_wgslsmith_add_vec3_i32(_wgslsmith_clamp_vec3_i32(reverseBits(vec3<i32>(i32(-2147483648), 1i, 1i)), vec3<i32>(i32(-2147483648), 16434i, 1i) >> (vec3<u32>(u_input.b, u_input.a, u_input.a) % vec3<u32>(32u)), vec3<i32>(10539i, 1i, 1i)), -_wgslsmith_add_vec3_i32(vec3<i32>(33912i, 6935i, 2147483647i), vec3<i32>(-1i, -1i, -24799i)))), Struct_1(-select(vec3<i32>(-1i, 0i, i32(-2147483648)) << (vec3<u32>(u_input.b, u_input.b, 23945u) % vec3<u32>(32u)), select(vec3<i32>(0i, i32(-2147483648), i32(-2147483648)), vec3<i32>(-29892i, 30129i, i32(-2147483648)), vec3<bool>(true, true, false)), vec3<bool>(false, false, false))));
                }
                default: {
                    let var_1 = -443f;
                    var var_2 = Struct_1(vec3<i32>(26892i, 28959i, 1i | ~firstTrailingBit(2147483647i)));
                    let var_3 = all(vec4<bool>(true, true, true, true)) || false;
                    let var_4 = vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(var_1, 1628f))), _wgslsmith_f_op_f32(-375f * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_1))), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(min(_wgslsmith_div_f32(var_1, _wgslsmith_f_op_f32(f32(-1f) * -632f)), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(exp2(var_1)))))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1810f)));
                }
            }
        }
        case 0i: {
        }
        default: {
            if (!all(!select(vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, false), vec4<bool>(true, true, true, true)))) {
            }
            let var_1 = true;
            let var_2 = !select(!(!(!vec3<bool>(false, false, var_1))), !(!vec3<bool>(var_1, false, true)), select(vec3<bool>(!var_1, true, all(vec2<bool>(var_1, false))), vec3<bool>(false, true, var_1), !(!vec3<bool>(var_1, var_1, var_1))));
        }
    }
    for (var var_1 = 2147483647i; ; ) {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        var var_2 = _wgslsmith_div_u32(u_input.a, 1u);
        if (all(!(!(!select(vec4<bool>(true, true, false, true), vec4<bool>(false, false, true, true), false))))) {
            continue;
        }
        for (var var_3: i32; ; ) {
            if (LOOP_COUNTERS[9u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
            continue;
        }
    }
    switch (4889i) {
        case i32(-2147483648): {
            var var_1 = abs(~abs(_wgslsmith_clamp_vec2_i32(~vec2<i32>(-843i, 29109i), abs(vec2<i32>(43156i, -29086i)), ~vec2<i32>(2147483647i, 61766i))));
            var_0 = ~(var_1.x & -_wgslsmith_sub_i32(var_1.x, _wgslsmith_dot_vec2_i32(vec2<i32>(var_1.x, 2147483647i), vec2<i32>(2147483647i, i32(-2147483648)))));
            for (var var_2 = 9758i; 2147483647i > (_wgslsmith_sub_i32(-_wgslsmith_mult_i32(var_1.x, 54533i), var_1.x) ^ (2147483647i >> ((~u_input.a << (36542u % 32u)) % 32u))); var_2 = var_1.x) {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                var_0 = 2147483647i;
            }
            switch (i32(-2147483648)) {
                case i32(-2147483648): {
                }
                default: {
                    var var_2 = Struct_2(Struct_1(select(vec3<i32>(var_1.x, 13247i, 1i), abs(vec3<i32>(var_1.x, -41472i, var_1.x)), true) >> (~_wgslsmith_mod_vec3_u32(vec3<u32>(101133u, 13941u, u_input.b), vec3<u32>(u_input.b, u_input.a, u_input.b)) % vec3<u32>(32u))), !vec3<bool>(all(vec4<bool>(true, false, true, true)), true, (var_1.x > var_1.x) && true), Struct_1(vec3<i32>(-1i) * -_wgslsmith_div_vec3_i32(vec3<i32>(var_1.x, var_1.x, 8981i), vec3<i32>(var_1.x, var_1.x, -1i))), Struct_1(-vec3<i32>(_wgslsmith_div_i32(var_1.x, var_1.x), -var_1.x, min(i32(-2147483648), -30178i))));
                    var var_3 = 1000f;
                }
            }
        }
        case -25713i: {
        }
        case 18423i: {
            var_0 = -_wgslsmith_add_i32(19543i, i32(-1i) * -1i);
            var var_1 = -27818i << (~(_wgslsmith_sub_u32(max(u_input.b, u_input.b), firstTrailingBit(u_input.a)) & u_input.a) % 32u);
            var_0 = i32(-2147483648);
        }
        case 0i: {
            var_0 = _wgslsmith_div_i32(23620i, 13546i | min(select(-22180i, reverseBits(0i), true), ~1i));
            var_0 = 1i;
            return !select(!select(vec3<bool>(false, false, false), select(vec3<bool>(true, false, true), vec3<bool>(true, false, true), true), all(vec3<bool>(false, true, true))), !select(vec3<bool>(false, true, true), vec3<bool>(false, false, true), true), vec3<bool>(!all(vec3<bool>(true, false, true)), true, true));
        }
        default: {
            let var_1 = vec4<i32>(-(i32(-1i) * -19962i), -_wgslsmith_div_i32(_wgslsmith_dot_vec3_i32(-vec3<i32>(-15724i, 16495i, 5462i), select(vec3<i32>(-1i, -20734i, -39182i), vec3<i32>(-8085i, 0i, 0i), vec3<bool>(true, true, true))), _wgslsmith_mult_i32(_wgslsmith_dot_vec4_i32(vec4<i32>(-72377i, i32(-2147483648), -1i, 4143i), vec4<i32>(47403i, 2147483647i, 1i, -37777i)), -2147483647i)), -31782i, 2147483647i);
            if (all(select(vec3<bool>(var_1.x == reverseBits(var_1.x), true, ~var_1.x > abs(-8274i)), vec3<bool>(true, true, (u_input.a >= 4913u) || true), !(min(4294967295u, u_input.b) > u_input.b)))) {
            }
        }
    }
    return !vec3<bool>(!(true | any(vec3<bool>(true, true, false))), !select(any(vec2<bool>(false, true)), false, any(vec4<bool>(false, false, true, true))), !(~u_input.b != ~u_input.a));
}

fn func_5() -> Struct_1 {
    for (var var_0 = 28976i; ; ) {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        if (false) {
            var var_1 = vec2<bool>(u_input.a != ~(~(4662u >> (u_input.a % 32u))), _wgslsmith_f_op_f32(f32(-1f) * -178f) <= _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-1594f))) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(504f - 406f))));
            var_1 = select(vec2<bool>(any(select(!vec3<bool>(var_1.x, var_1.x, var_1.x), func_6(), vec3<bool>(true, true, false))), !select(true, var_1.x | false, var_1.x)), vec2<bool>(var_1.x, var_1.x), var_1.x);
            var var_2 = _wgslsmith_f_op_f32(select(-974f, 461f, true));
            let var_3 = (_wgslsmith_add_i32(abs(countOneBits(3018i)), -_wgslsmith_dot_vec2_i32(vec2<i32>(32265i, 34531i), vec2<i32>(12117i, 2147483647i))) ^ 328i) ^ (_wgslsmith_div_i32((2147483647i >> (0u % 32u)) & _wgslsmith_dot_vec3_i32(vec3<i32>(-61475i, -1243i, 2147483647i), vec3<i32>(2147483647i, -66151i, -2785i)), _wgslsmith_div_i32(23869i, 1i)) >> (_wgslsmith_dot_vec2_u32(vec2<u32>(57157u, abs(30728u)), _wgslsmith_mod_vec2_u32(~vec2<u32>(9564u, 0u), select(vec2<u32>(53999u, u_input.a), vec2<u32>(21374u, 0u), vec2<bool>(false, var_1.x)))) % 32u));
        }
        if (!any(func_6()) & true) {
        }
        var var_1 = vec3<i32>(firstTrailingBit(_wgslsmith_dot_vec3_i32(vec3<i32>(countOneBits(17116i), firstTrailingBit(-1i), 1i), max(vec3<i32>(1i, 1i, 1i), ~vec3<i32>(29407i, i32(-2147483648), -1i)))), -_wgslsmith_sub_i32(max(reverseBits(2147483647i), -65522i), ~1i), _wgslsmith_dot_vec2_i32(~vec2<i32>(abs(1i), abs(-1i)), vec2<i32>(-1i, i32(-1i) * 0i)));
        var_0 = -firstTrailingBit(~(_wgslsmith_dot_vec4_i32(vec4<i32>(0i, var_1.x, -1i, 0i), vec4<i32>(var_1.x, var_1.x, var_1.x, var_1.x)) | var_1.x));
    }
    var var_0 = select(vec4<bool>(true, true, true, true), select(select(select(select(vec4<bool>(false, false, true, true), vec4<bool>(false, false, true, true), true), select(vec4<bool>(true, false, false, true), vec4<bool>(false, false, false, false), vec4<bool>(true, false, false, true)), vec4<bool>(true, true, true, true)), vec4<bool>(true, all(vec4<bool>(true, true, true, true)), any(vec2<bool>(true, false)), true), select(vec4<bool>(true, true, false, false), vec4<bool>(true, true, true, true), vec4<bool>(false, false, false, false))), select(select(vec4<bool>(true, true, true, true), select(vec4<bool>(true, true, false, false), vec4<bool>(false, false, true, false), vec4<bool>(true, true, false, true)), any(vec3<bool>(true, false, false))), !select(vec4<bool>(true, false, false, true), vec4<bool>(true, false, true, false), true), vec4<bool>(true, true, true, true)), true), !select(vec4<bool>(all(vec2<bool>(true, false)), any(vec3<bool>(true, false, true)), true, true), vec4<bool>(true, true, true, true), false));
    if (func_6().x) {
        if (true) {
            var_0 = vec4<bool>(-1000f < _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-618f * -430f), _wgslsmith_div_f32(1676f, 369f), func_6().x)) * _wgslsmith_f_op_f32(f32(-1f) * -709f)), false, !var_0.x, !(_wgslsmith_f_op_f32(trunc(-1000f)) < 1f) == !(!var_0.x));
            let var_1 = abs(u_input.b);
            let var_2 = i32(-1i) * -abs(2016i);
            var_0 = select(vec4<bool>(true, false, func_6().x, true), vec4<bool>(func_6().x, true, !any(!var_0.zz), 15723u >= var_1), vec4<bool>(true, false, var_0.x, select(true | select(true, var_0.x, var_0.x), true, all(vec2<bool>(true, true)))));
            var var_3 = _wgslsmith_add_vec3_u32(_wgslsmith_sub_vec3_u32(vec3<u32>(_wgslsmith_dot_vec3_u32(_wgslsmith_clamp_vec3_u32(vec3<u32>(9002u, 36834u, u_input.a), vec3<u32>(var_1, 83157u, 0u), vec3<u32>(1u, var_1, 4294967295u)), firstTrailingBit(vec3<u32>(4294967295u, 1u, 37273u))), firstTrailingBit(89768u), 21964u), (~vec3<u32>(10847u, 1u, 4348u) >> (vec3<u32>(10781u, u_input.b, 31298u) % vec3<u32>(32u))) << (vec3<u32>(abs(u_input.b), var_1, u_input.b << (1u % 32u)) % vec3<u32>(32u))), _wgslsmith_mod_vec3_u32(vec3<u32>(1u ^ ~var_1, u_input.b, ~(~4294967295u)), vec3<u32>(abs(_wgslsmith_dot_vec4_u32(vec4<u32>(u_input.b, 4294967295u, var_1, var_1), vec4<u32>(18944u, var_1, 69101u, 1u))), ~_wgslsmith_div_u32(40110u, var_1), 0u)));
        }
        var var_1 = ~(~vec2<u32>(select(u_input.a, ~25632u, var_0.x), select(u_input.b, 1u, true) >> ((u_input.a | u_input.a) % 32u)));
        let var_2 = Struct_2(Struct_1(vec3<i32>(_wgslsmith_clamp_i32(firstTrailingBit(2147483647i), min(-1i, 0i), 1i), min(_wgslsmith_mod_i32(1i, 2147483647i), _wgslsmith_sub_i32(-1i, i32(-2147483648))), _wgslsmith_dot_vec3_i32(abs(vec3<i32>(21325i, -12557i, 1i)), vec3<i32>(1i, 2147483647i, -1i)))), !select(vec3<bool>(true, func_6().x, select(var_0.x, var_0.x, true)), vec3<bool>(var_0.x, !var_0.x, all(var_0.zz)), var_0.x & var_0.x), Struct_1(vec3<i32>(1i, 1i, 1i)), Struct_1(vec3<i32>(-_wgslsmith_add_i32(41880i, -60379i), _wgslsmith_dot_vec2_i32(vec2<i32>(0i, 0i), vec2<i32>(-76655i, 2147483647i)) | -1i, min(_wgslsmith_mod_i32(2147483647i, -1i), countOneBits(0i)))));
    }
    var_0 = select(vec4<bool>(true, !(!all(var_0.ywx)), !var_0.x, any(vec3<bool>(var_0.x, all(vec3<bool>(var_0.x, var_0.x, var_0.x)), !var_0.x))), select(!select(vec4<bool>(var_0.x, true, var_0.x, true), vec4<bool>(true, true, false, true), !vec4<bool>(false, var_0.x, false, true)), select(vec4<bool>(!var_0.x, all(vec2<bool>(true, var_0.x)), var_0.x, all(vec4<bool>(var_0.x, true, false, var_0.x))), !(!vec4<bool>(true, false, var_0.x, var_0.x)), !select(vec4<bool>(false, var_0.x, true, var_0.x), vec4<bool>(true, var_0.x, var_0.x, var_0.x), true)), false), select(vec4<bool>(var_0.x && var_0.x, func_6().x, true, true), vec4<bool>(true, var_0.x, true, var_0.x), !var_0.x));
    switch (2147483647i) {
        default: {
        }
    }
    return Struct_1(_wgslsmith_sub_vec3_i32(select(-vec3<i32>(0i, -4587i, 1i), vec3<i32>(-17751i, 1i, -1i), var_0.zxx), -_wgslsmith_mult_vec3_i32(vec3<i32>(34853i, -5984i, 9796i), vec3<i32>(-1i, 0i, 1i))) & -_wgslsmith_add_vec3_i32(vec3<i32>(1i, 1i, 4156i), ~vec3<i32>(17830i, -5072i, 56831i)));
}

fn func_4(arg_0: Struct_2, arg_1: Struct_2) -> bool {
    var var_0 = func_5();
    var_0 = Struct_1(select(_wgslsmith_mod_vec3_i32(abs(vec3<i32>(arg_0.d.a.x, var_0.a.x, 61951i) | arg_0.c.a), ~arg_1.d.a), arg_0.c.a, func_6()));
    var var_1 = _wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(-759f, 312f, 1000f))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(select(vec3<f32>(-1039f, 558f, -475f), vec3<f32>(-330f, -159f, -1410f), arg_1.b.x)) - _wgslsmith_f_op_vec3_f32(floor(vec3<f32>(906f, -264f, 1263f))))) * _wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(-2387f, -116f, -2659f) - vec3<f32>(-647f, 1236f, -513f)) - vec3<f32>(1f, 1f, 1f)), vec3<f32>(-1865f, _wgslsmith_f_op_f32(select(-402f, -1072f, arg_1.b.x)), _wgslsmith_f_op_f32(f32(-1f) * -192f)))))));
    var_0 = Struct_1(vec3<i32>(arg_0.d.a.x, ~(-(var_0.a.x << (u_input.b % 32u))), func_5().a.x));
    let var_2 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(abs(vec3<f32>(_wgslsmith_f_op_f32(-var_1.x), _wgslsmith_f_op_f32(-674f + -407f), _wgslsmith_f_op_f32(var_1.x - var_1.x)))), _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(vec3<f32>(var_1.x, -1083f, var_1.x), vec3<f32>(var_1.x, var_1.x, 392f)) + _wgslsmith_div_vec3_f32(vec3<f32>(125f, var_1.x, var_1.x), vec3<f32>(var_1.x, var_1.x, var_1.x))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(802f, -1145f, var_1.x)) * _wgslsmith_f_op_vec3_f32(exp2(vec3<f32>(-1029f, var_1.x, 671f))))))));
    return false;
}

fn func_3(arg_0: u32, arg_1: i32, arg_2: Struct_2, arg_3: vec3<f32>) -> Struct_1 {
    let var_0 = arg_2.a;
    loop {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        continue;
    }
    if (all(!select(vec4<bool>(true, all(arg_2.b), true, func_4(Struct_2(arg_2.d, vec3<bool>(arg_2.b.x, arg_2.b.x, false), arg_2.a, arg_2.c), Struct_2(var_0, arg_2.b, arg_2.d, arg_2.d))), vec4<bool>(true, false, false, arg_2.b.x), select(!vec4<bool>(false, arg_2.b.x, true, false), vec4<bool>(arg_2.b.x, arg_2.b.x, arg_2.b.x, false), arg_2.b.x)))) {
        let var_1 = Struct_2(func_5(), arg_2.b, var_0, Struct_1(arg_2.a.a));
    }
    switch (_wgslsmith_dot_vec2_i32(var_0.a.xy, ~arg_2.d.a.yy >> (~select(vec2<u32>(4294967295u, arg_0), _wgslsmith_clamp_vec2_u32(vec2<u32>(4294967295u, 6184u), vec2<u32>(arg_0, arg_0), vec2<u32>(63271u, 22507u)), arg_2.b.x) % vec2<u32>(32u)))) {
        case 1i: {
            let var_1 = arg_2.b.x;
            let var_2 = 92871u;
            for (var var_3 = i32(-2147483648); ; var_3 = var_0.a.x) {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                break;
            }
        }
        case -16941i: {
            if (arg_2.b.x) {
                let var_1 = ~29989u;
            }
            loop {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                continue;
            }
        }
        case 12960i: {
        }
        case -1i: {
            var var_1 = 10882u;
            if (arg_2.b.x) {
                var var_2 = arg_2;
                let var_3 = vec3<f32>(_wgslsmith_f_op_f32(abs(arg_3.x)), -1869f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1346f + _wgslsmith_f_op_f32(-arg_3.x)) + _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(trunc(1534f)), arg_3.x))) + _wgslsmith_f_op_f32(abs(119f))));
                var var_4 = 0u;
                var_4 = arg_0;
                let var_5 = Struct_2(arg_2.d, !vec3<bool>(true, select(9634i > var_2.c.a.x, arg_2.b.x, var_2.b.x != true), arg_2.b.x), Struct_1(~arg_2.a.a), var_0);
            }
            let var_2 = -383f;
            var_1 = arg_0;
            let var_3 = Struct_2(arg_2.c, vec3<bool>(true, true, true), Struct_1(countOneBits((vec3<i32>(var_0.a.x, arg_2.d.a.x, arg_1) & vec3<i32>(i32(-2147483648), -1i, arg_1)) ^ vec3<i32>(-21968i, 1592i, arg_1))), Struct_1(max(_wgslsmith_clamp_vec3_i32(firstLeadingBit(vec3<i32>(arg_2.a.a.x, arg_2.a.a.x, arg_2.c.a.x)), var_0.a, vec3<i32>(i32(-2147483648), i32(-2147483648), var_0.a.x)), vec3<i32>(firstLeadingBit(0i), arg_1, 1i))));
        }
        default: {
            loop {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
                var var_1 = var_0;
                var var_2 = min(13257u, min(~(1u | _wgslsmith_clamp_u32(u_input.b, u_input.a, 6479u)), _wgslsmith_dot_vec2_u32(~(~vec2<u32>(arg_0, u_input.a)), ~(~vec2<u32>(u_input.a, u_input.b)))));
            }
            loop {
                if (LOOP_COUNTERS[16u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
                let var_1 = all(!vec2<bool>(any(arg_2.b.yz), any(select(vec4<bool>(true, arg_2.b.x, arg_2.b.x, true), vec4<bool>(true, arg_2.b.x, arg_2.b.x, true), arg_2.b.x))));
                var var_2 = ~abs(_wgslsmith_add_vec2_u32(abs(vec2<u32>(40862u, 25887u)), ~reverseBits(vec2<u32>(u_input.b, u_input.b))));
            }
            let var_1 = arg_1;
            var var_2 = reverseBits(~vec3<u32>(reverseBits(arg_0), 18136u, ~select(71972u, 4294967295u, arg_2.b.x)));
        }
    }
    if (false) {
        let var_1 = arg_3.x;
        if (all(!(!select(vec4<bool>(arg_2.b.x, arg_2.b.x, true, arg_2.b.x), vec4<bool>(false, arg_2.b.x, arg_2.b.x, false), vec4<bool>(arg_2.b.x, arg_2.b.x, arg_2.b.x, arg_2.b.x)))) & !(_wgslsmith_div_u32(54357u, abs(u_input.b)) <= 23773u)) {
            return var_0;
        }
    }
    return arg_2.c;
}

fn func_7(arg_0: Struct_1, arg_1: vec4<f32>, arg_2: f32) -> f32 {
    if (_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(-arg_2), 185f)))) >= -1005f) {
        if (-35285i < (66056i ^ arg_0.a.x)) {
            let var_0 = true;
            let var_1 = (min(1u, abs(_wgslsmith_mult_u32(15163u, u_input.a))) & u_input.a) >> (4294967295u % 32u);
            let var_2 = Struct_1(arg_0.a & (arg_0.a >> ((vec3<u32>(4294967295u, var_1, 48233u) << (~vec3<u32>(26312u, 0u, u_input.b) % vec3<u32>(32u))) % vec3<u32>(32u))));
            var var_3 = Struct_2(func_3(4294967295u, _wgslsmith_dot_vec2_i32(vec2<i32>(_wgslsmith_div_i32(arg_0.a.x, i32(-2147483648)), _wgslsmith_add_i32(69864i, 1i)), vec2<i32>(~var_2.a.x, _wgslsmith_dot_vec4_i32(vec4<i32>(var_2.a.x, 48867i, -21587i, var_2.a.x), vec4<i32>(2147483647i, var_2.a.x, var_2.a.x, var_2.a.x)))), Struct_2(Struct_1(~vec3<i32>(-329i, arg_0.a.x, var_2.a.x)), vec3<bool>(true, true, true), var_2, Struct_1(max(vec3<i32>(0i, var_2.a.x, var_2.a.x), vec3<i32>(arg_0.a.x, arg_0.a.x, arg_0.a.x)))), _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(arg_1.xzx + arg_1.ywx) + _wgslsmith_f_op_vec3_f32(-vec3<f32>(978f, -690f, 129f))), _wgslsmith_f_op_vec3_f32(vec3<f32>(-996f, 685f, arg_2) * _wgslsmith_f_op_vec3_f32(min(vec3<f32>(arg_2, -986f, 808f), vec3<f32>(-396f, arg_1.x, arg_1.x))))))), vec3<bool>(true == (!var_0 != !var_0), func_6().x, func_4(Struct_2(var_2, vec3<bool>(var_0, var_0, var_0), Struct_1(var_2.a), var_2), Struct_2(Struct_1(var_2.a), vec3<bool>(var_0, var_0, false), Struct_1(var_2.a), Struct_1(arg_0.a))) && (true | var_0)), Struct_1(var_2.a), func_5());
        }
        let var_0 = -1430f;
        if (false) {
            var var_1 = 612f == arg_2;
            var_1 = !((all(vec3<bool>(false, true, true)) & true) && !(~7727u == ~u_input.a));
            return _wgslsmith_f_op_f32(f32(-1f) * -848f);
        }
    }
    let var_0 = Struct_2(arg_0, !vec3<bool>(select(true, true, any(vec3<bool>(true, true, true))), any(vec4<bool>(true, false, true, true)), any(vec4<bool>(true, true, true, true))), func_5(), func_3(0u, max(_wgslsmith_div_i32(arg_0.a.x, arg_0.a.x) >> (_wgslsmith_div_u32(u_input.b, 4185u) % 32u), _wgslsmith_dot_vec2_i32(~vec2<i32>(arg_0.a.x, -8685i), select(vec2<i32>(-32111i, 27704i), arg_0.a.zx, false))), Struct_2(Struct_1(_wgslsmith_add_vec3_i32(arg_0.a, vec3<i32>(20478i, 8588i, arg_0.a.x))), func_6(), func_5(), func_3(u_input.a, i32(-2147483648), Struct_2(arg_0, vec3<bool>(true, false, true), Struct_1(vec3<i32>(arg_0.a.x, 2147483647i, arg_0.a.x)), Struct_1(vec3<i32>(-35026i, arg_0.a.x, i32(-2147483648)))), _wgslsmith_f_op_vec3_f32(-arg_1.zzy))), vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(-1000f, 1697f, true))), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(534f - 1161f))), 1f)));
    return _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -1439f) - 489f) * _wgslsmith_f_op_f32(-1f));
}

fn func_2(arg_0: Struct_1) -> i32 {
    var var_0 = any(select(vec2<bool>(any(vec3<bool>(true, false, true)), true), vec2<bool>(-1388i >= arg_0.a.x, true), false)) && select(any(!select(vec2<bool>(false, false), vec2<bool>(true, true), false)), all(select(select(vec2<bool>(true, true), vec2<bool>(true, true), false), vec2<bool>(true, true), vec2<bool>(true, true))), true);
    var_0 = all(vec2<bool>(!(1i != _wgslsmith_dot_vec2_i32(arg_0.a.xx, vec2<i32>(arg_0.a.x, 66873i))), false));
    var var_1 = vec3<bool>((_wgslsmith_f_op_f32(sign(507f)) <= _wgslsmith_f_op_f32(func_7(func_3(u_input.b, arg_0.a.x, Struct_2(Struct_1(vec3<i32>(-1i, -1i, 0i)), vec3<bool>(true, true, true), arg_0, arg_0), vec3<f32>(-668f, -441f, -1966f)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(1586f, 1583f, -879f, 1369f)), _wgslsmith_f_op_f32(trunc(-596f))))) | true, any(vec2<bool>(true, true)), true);
    let var_2 = func_3(4294967295u, arg_0.a.x, Struct_2(arg_0, vec3<bool>(var_1.x, true, !var_1.x), Struct_1(~_wgslsmith_clamp_vec3_i32(arg_0.a, vec3<i32>(0i, arg_0.a.x, arg_0.a.x), arg_0.a)), func_3(_wgslsmith_dot_vec4_u32(reverseBits(vec4<u32>(31389u, 62092u, u_input.b, 1u)), abs(vec4<u32>(u_input.a, 85464u, u_input.b, u_input.b))), arg_0.a.x, Struct_2(arg_0, select(vec3<bool>(true, false, false), vec3<bool>(var_1.x, var_1.x, var_1.x), vec3<bool>(var_1.x, var_1.x, var_1.x)), arg_0, Struct_1(vec3<i32>(1i, arg_0.a.x, -9246i))), vec3<f32>(_wgslsmith_div_f32(-1422f, 143f), _wgslsmith_f_op_f32(select(106f, 1439f, true)), _wgslsmith_f_op_f32(sign(-1683f))))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-288f, 221f, -2437f)))))) + vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(-1000f))), _wgslsmith_f_op_f32(-538f + 406f), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(round(-810f)), _wgslsmith_f_op_f32(step(-913f, -1000f)))))));
    for (var var_3 = 25099i; var_3 < 2147483647i; var_3 += 1i) {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
    }
    return arg_0.a.x;
}

fn func_1(arg_0: vec3<f32>, arg_1: vec3<i32>, arg_2: vec2<u32>, arg_3: bool) -> vec4<bool> {
    for (var var_0 = func_2(Struct_1(vec3<i32>(i32(-2147483648), 30071i, ~arg_1.x))); any(vec3<bool>(func_6().x, arg_1.x < arg_1.x, true)) | false; ) {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        continue;
    }
    for (var var_0 = -5693i; ; ) {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
        for (var var_1 = _wgslsmith_dot_vec3_i32(arg_1, _wgslsmith_mod_vec3_i32(vec3<i32>(-50354i, ~_wgslsmith_mod_i32(0i, arg_1.x), 1i), _wgslsmith_mult_vec3_i32(reverseBits(vec3<i32>(arg_1.x, arg_1.x, -1i) & vec3<i32>(arg_1.x, arg_1.x, arg_1.x)), ~arg_1 | arg_1))); var_1 > i32(-2147483648); var_1 += 1i) {
            if (LOOP_COUNTERS[20u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
            let var_2 = !(!all(select(vec4<bool>(arg_3, true, arg_3, true), vec4<bool>(true, true, true, true), any(vec4<bool>(arg_3, true, arg_3, arg_3)))));
            var_0 = -arg_1.x;
            var_0 = 1569i;
        }
        continue;
    }
    for (var var_0 = -17206i; select(all(!(!select(vec4<bool>(arg_3, true, true, arg_3), vec4<bool>(arg_3, arg_3, arg_3, arg_3), vec4<bool>(arg_3, true, true, false)))), true != !arg_3, arg_3); var_0 += 1i) {
        if (LOOP_COUNTERS[21u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
    }
    var var_0 = _wgslsmith_sub_u32(~min(~4294967295u, 67268u), arg_2.x | abs(_wgslsmith_div_u32(min(u_input.a, arg_2.x), arg_2.x)));
    switch (_wgslsmith_clamp_i32(-48441i, func_2(Struct_1(firstTrailingBit(arg_1))), arg_1.x)) {
        case 26051i: {
            var_0 = _wgslsmith_sub_u32(1u, _wgslsmith_dot_vec4_u32(firstTrailingBit(_wgslsmith_mod_vec4_u32(min(vec4<u32>(18587u, arg_2.x, arg_2.x, arg_2.x), vec4<u32>(u_input.b, 0u, 34482u, arg_2.x)), ~vec4<u32>(arg_2.x, 1u, 0u, u_input.b))), vec4<u32>(u_input.b, ~u_input.b, 23757u, _wgslsmith_mod_u32(~0u, arg_2.x))));
            switch (2147483647i) {
                default: {
                    var var_1 = -vec4<i32>(_wgslsmith_mult_i32(arg_1.x, 1i ^ arg_1.x), arg_1.x, _wgslsmith_div_i32(arg_1.x, reverseBits(-arg_1.x)), _wgslsmith_mod_i32(-(~(-15714i)), arg_1.x));
                    var var_2 = arg_0.x;
                    var_1 = firstLeadingBit(select(_wgslsmith_add_vec4_i32(~vec4<i32>(arg_1.x, var_1.x, 2147483647i, 2147483647i), abs(vec4<i32>(arg_1.x, var_1.x, 0i, arg_1.x))) & vec4<i32>(abs(var_1.x), countOneBits(arg_1.x), arg_1.x, _wgslsmith_add_i32(-1i, var_1.x)), vec4<i32>(arg_1.x, _wgslsmith_mult_i32(-47966i, var_1.x), firstTrailingBit(i32(-2147483648)), var_1.x) | vec4<i32>(_wgslsmith_dot_vec3_i32(var_1.yyz, arg_1), _wgslsmith_mod_i32(var_1.x, 0i), -15328i, -arg_1.x), select(!(!vec4<bool>(arg_3, arg_3, true, true)), !vec4<bool>(arg_3, arg_3, true, true), !(!vec4<bool>(arg_3, false, true, false)))));
                    let var_3 = vec4<bool>(!(!((arg_2.x < u_input.b) == arg_3)), !((~u_input.a < arg_2.x) | (true | !arg_3)), select(all(vec2<bool>(arg_3, arg_3)) != !arg_3, !(func_6().x && arg_3), _wgslsmith_f_op_f32(func_7(Struct_1(vec3<i32>(45924i, -26795i, 0i)), _wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(arg_0.x, arg_0.x, arg_0.x, 438f))), _wgslsmith_f_op_f32(-arg_0.x))) <= _wgslsmith_f_op_f32(-_wgslsmith_div_f32(arg_0.x, arg_0.x))), any(!(!vec2<bool>(arg_3, true))));
                    var var_4 = Struct_1(vec3<i32>(-16202i, i32(-2147483648), ~(~arg_1.x) << (~(~47480u) % 32u)));
                }
            }
            var_0 = ~(52700u >> (_wgslsmith_dot_vec3_u32(max(vec3<u32>(u_input.a, u_input.a, arg_2.x), vec3<u32>(14265u, arg_2.x, u_input.a)), firstTrailingBit(vec3<u32>(arg_2.x, 4382u, u_input.a))) % 32u)) ^ (~(~4294967295u << (arg_2.x % 32u)) >> (~(~0u) % 32u));
            switch (0i) {
                case 0i: {
                    let var_1 = _wgslsmith_div_vec4_i32(reverseBits(reverseBits(vec4<i32>(arg_1.x, arg_1.x, arg_1.x, arg_1.x)) ^ vec4<i32>(arg_1.x, 26126i, arg_1.x, arg_1.x)) << (_wgslsmith_mult_vec4_u32(~firstLeadingBit(vec4<u32>(arg_2.x, arg_2.x, 4294967295u, u_input.a)), ~(~vec4<u32>(25610u, 49304u, 1u, 131608u))) % vec4<u32>(32u)), min(firstLeadingBit(vec4<i32>(arg_1.x, arg_1.x, arg_1.x, arg_1.x ^ 2147483647i)), -min(vec4<i32>(2147483647i, -80320i, arg_1.x, 2595i), -vec4<i32>(-22662i, arg_1.x, arg_1.x, 42926i))));
                    var var_2 = all(vec4<bool>(!arg_3, !(!arg_3), all(select(select(vec3<bool>(arg_3, arg_3, true), vec3<bool>(arg_3, arg_3, arg_3), vec3<bool>(true, arg_3, false)), func_6(), true)), ~(i32(-1i) * -18407i) <= _wgslsmith_add_i32(_wgslsmith_div_i32(var_1.x, 29784i), arg_1.x)));
                    var_2 = 4294967295u <= _wgslsmith_sub_u32(u_input.b, arg_2.x ^ arg_2.x);
                }
                case i32(-2147483648): {
                    var var_1 = _wgslsmith_f_op_f32(sign(arg_0.x));
                }
                case -47429i: {
                    var var_1 = vec2<i32>(_wgslsmith_div_i32(arg_1.x, abs(2147483647i)), ~arg_1.x << (4294967295u % 32u));
                }
                case -54703i: {
                    var var_1 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(arg_0.yz * vec2<f32>(arg_0.x, 586f)), _wgslsmith_f_op_vec2_f32(max(_wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(arg_0.x, 607f))), _wgslsmith_f_op_vec2_f32(-arg_0.xz))))));
                    let var_2 = max(~vec3<u32>(~arg_2.x, ~_wgslsmith_mod_u32(u_input.a, 1u), select(u_input.a, 20319u, all(vec3<bool>(true, true, false)))), firstTrailingBit(~(~_wgslsmith_div_vec3_u32(vec3<u32>(51925u, arg_2.x, arg_2.x), vec3<u32>(31012u, arg_2.x, arg_2.x)))));
                }
                default: {
                    var var_1 = -firstLeadingBit(select(arg_1.xx, -(~arg_1.yz), true));
                    var_0 = arg_2.x;
                    let var_2 = Struct_2(func_3(u_input.b, var_1.x, Struct_2(Struct_1(arg_1), select(select(vec3<bool>(false, arg_3, arg_3), vec3<bool>(arg_3, true, arg_3), arg_3), !vec3<bool>(arg_3, arg_3, arg_3), 0u >= u_input.b), func_3(reverseBits(arg_2.x), -3357i, Struct_2(Struct_1(arg_1), vec3<bool>(false, arg_3, arg_3), Struct_1(vec3<i32>(arg_1.x, var_1.x, 2147483647i)), Struct_1(arg_1)), _wgslsmith_f_op_vec3_f32(vec3<f32>(arg_0.x, arg_0.x, arg_0.x) + arg_0)), Struct_1(~vec3<i32>(arg_1.x, var_1.x, -40014i))), vec3<f32>(arg_0.x, -843f, _wgslsmith_div_f32(-1154f, arg_0.x))), !(!select(vec3<bool>(false, arg_3, arg_3), vec3<bool>(true, arg_3, arg_3), vec3<bool>(arg_3, arg_3, true))), Struct_1(_wgslsmith_sub_vec3_i32(vec3<i32>(select(29053i, arg_1.x, true), max(1i, arg_1.x), ~40627i), select(func_5().a, ~arg_1, arg_3))), Struct_1(min(-abs(vec3<i32>(22537i, 66715i, 1i)), vec3<i32>(arg_1.x, var_1.x, arg_1.x) & firstLeadingBit(vec3<i32>(var_1.x, var_1.x, arg_1.x)))));
                    var_1 = vec2<i32>(-10821i, ~(~abs(select(var_2.d.a.x, i32(-2147483648), true))));
                    let var_3 = _wgslsmith_add_i32(var_1.x, _wgslsmith_dot_vec2_i32(min(var_2.d.a.xz, vec2<i32>(~arg_1.x, -27198i)), var_2.c.a.xz));
                }
            }
            let var_1 = _wgslsmith_f_op_f32(trunc(_wgslsmith_div_f32(arg_0.x, -238f)));
        }
        case -16113i: {
            loop {
                if (LOOP_COUNTERS[22u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
                continue;
            }
            var var_1 = ~_wgslsmith_sub_vec3_u32(vec3<u32>(u_input.b, u_input.a, ~(~4294967295u)), reverseBits(vec3<u32>(~arg_2.x, arg_2.x, _wgslsmith_sub_u32(2114u, u_input.b))));
            if (false) {
                var var_2 = all(vec4<bool>(arg_3, arg_3, false, false));
                let var_3 = arg_1.x | -arg_1.x;
                var var_4 = _wgslsmith_f_op_vec3_f32(-arg_0);
                let var_5 = vec4<bool>(!arg_3, true, _wgslsmith_sub_u32(firstTrailingBit(_wgslsmith_dot_vec4_u32(vec4<u32>(4294967295u, 32206u, 1u, 0u), vec4<u32>(33339u, 75067u, u_input.b, arg_2.x))), u_input.a & _wgslsmith_mult_u32(arg_2.x, u_input.b)) < ~9397u, any(select(vec2<bool>(true, true), !func_6().zx, func_6().zz)));
                var_4 = _wgslsmith_f_op_vec3_f32(min(vec3<f32>(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(select(1066f, var_4.x, arg_3)))), -1260f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-149f - _wgslsmith_f_op_f32(abs(1448f))))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(max(1271f, var_4.x)), _wgslsmith_f_op_f32(-289f + 1000f), -1651f) * _wgslsmith_f_op_vec3_f32(step(arg_0, _wgslsmith_div_vec3_f32(vec3<f32>(arg_0.x, -1000f, -745f), vec3<f32>(528f, -551f, 638f))))))));
            }
            if (arg_3) {
            }
        }
        default: {
            let var_1 = Struct_2(func_3(abs(21383u << (firstLeadingBit(u_input.a) % 32u)), reverseBits(select(_wgslsmith_add_i32(arg_1.x, 0i), arg_1.x, false)), Struct_2(func_3(arg_2.x, -arg_1.x, Struct_2(Struct_1(vec3<i32>(arg_1.x, 1i, -2079i)), vec3<bool>(arg_3, arg_3, arg_3), Struct_1(arg_1), Struct_1(vec3<i32>(arg_1.x, 0i, arg_1.x))), vec3<f32>(arg_0.x, arg_0.x, -922f)), select(select(vec3<bool>(arg_3, arg_3, arg_3), vec3<bool>(false, arg_3, arg_3), vec3<bool>(true, arg_3, arg_3)), vec3<bool>(arg_3, true, true), !arg_3), Struct_1(vec3<i32>(arg_1.x, arg_1.x, 2147483647i)), func_5()), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(arg_0.x, -1161f, arg_0.x) - vec3<f32>(-116f, arg_0.x, arg_0.x)))), vec3<bool>(!all(func_6().xz), -1772f > arg_0.x, arg_3), Struct_1(-(~abs(arg_1))), Struct_1(~arg_1));
            if (!var_1.b.x) {
                let var_2 = arg_0;
            }
        }
    }
    return vec4<bool>(false, _wgslsmith_mod_i32(~arg_1.x, 35653i) < _wgslsmith_sub_i32(1i, firstLeadingBit(-11319i)), false, u_input.b > (51453u >> ((~u_input.a ^ 17737u) % 32u)));
}

@compute
@workgroup_size(1)
fn main() {
    let var_0 = vec2<bool>(any(func_1(_wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(-vec3<f32>(804f, -1139f, 1193f)))), -vec3<i32>(2147483647i, 29924i, i32(-2147483648)), vec2<u32>(u_input.a >> (u_input.b % 32u), 4294967295u), false)), any(!select(vec2<bool>(true, true), vec2<bool>(false, true), select(vec2<bool>(true, false), vec2<bool>(false, false), vec2<bool>(true, true)))));
    if (true) {
        var var_1 = -(~(-select(vec3<i32>(29166i, 2147483647i, 30389i), abs(vec3<i32>(-1i, 2147483647i, 2147483647i)), !var_0.x)));
        var var_2 = u_input.a;
    }
    if (all(vec2<bool>(false, true))) {
        return;
    }
    var var_1 = var_0.x;
    if (all(func_1(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(1603f, 544f, -353f))), ~vec3<i32>(min(-20657i, 4580i), -44717i, ~35944i), min(~_wgslsmith_div_vec2_u32(vec2<u32>(u_input.a, 4294967295u), vec2<u32>(1u, 0u)), vec2<u32>(countOneBits(53185u), ~u_input.b)), !all(select(vec3<bool>(true, var_0.x, var_0.x), vec3<bool>(true, false, false), var_0.x))))) {
    }
    var_1 = !all(!vec4<bool>(func_1(vec3<f32>(1508f, 1408f, 209f), vec3<i32>(-25693i, 30652i, 25488i), vec2<u32>(41673u, 66283u), var_0.x).x, true, all(vec3<bool>(var_0.x, var_0.x, var_0.x)), !var_0.x));
    loop {
        if (LOOP_COUNTERS[23u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
    }
    let x = u_input.a;
    s_output = StorageBuffer(0i, _wgslsmith_sub_u32(0u, 12025u | select(0u, u_input.a, 24224u > u_input.b)), firstTrailingBit(_wgslsmith_sub_u32(~(~u_input.b), ~(~46292u))), countOneBits(~(~vec4<i32>(2147483647i, -67622i, 1i, 2147483647i) << (_wgslsmith_sub_vec4_u32(vec4<u32>(1u, u_input.b, 7799u, 4294967295u), vec4<u32>(103563u, u_input.b, 0u, u_input.a)) % vec4<u32>(32u)))), _wgslsmith_mult_u32(max(u_input.b, ~u_input.a), 15027u));
}

`;