export const input = [143,247,1,128,115,208,93,219,177,213,9,45,28,189,255,212,45,96,7,118,245,213,246,231,172,149,212,31,115,98,224,75,39,140,244,68,164,195,170,187,60,210,207,6,90,96,219,43,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [143,247,1,128,115,208,93,219,177,213,9,45,28,189,255,212,45,96,7,118,245,213,246,231,172,149,212,31,115,98,224,75,39,140,244,68,164,195,170,187,60,210,207,6,90,96,219,43,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[143,247,1,128,115,208,93,219,177,213,9,45,28,189,255,212,45,96,7,118,245,213,246,231,172,149,212,31,115,98,224,75,39,140,244,68,164,195,170,187,60,210,207,6,90,96,219,43]}
// Seed: 10472289949864690393

struct Struct_1 {
    a: vec4<u32>,
}

struct UniformBuffer {
    a: i32,
    b: vec2<i32>,
    c: vec3<u32>,
    d: i32,
    e: vec3<u32>,
}

struct StorageBuffer {
    a: f32,
    b: f32,
    c: vec3<f32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> LOOP_COUNTERS: array<u32, 27>;

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn func_6() -> vec4<bool> {
    switch (~select(i32(-2147483648), _wgslsmith_mod_i32(-5862i, 15427i), true)) {
        case -16641i: {
            var var_0 = false;
            let var_1 = Struct_1(vec4<u32>(_wgslsmith_mult_u32(62349u, 0u), abs(1u), select(6654u, firstTrailingBit(_wgslsmith_add_u32(40218u, u_input.c.x)), true), ~u_input.c.x));
            return vec4<bool>(((~u_input.a | 1i) == -reverseBits(u_input.a)) & any(select(vec3<bool>(true, true, true), vec3<bool>(true, true, true), vec3<bool>(true, true, true))), !select(!(u_input.d >= -37795i), true, all(select(vec3<bool>(true, false, false), vec3<bool>(true, true, true), false))), all(vec4<bool>(true, true, true, any(vec4<bool>(true, true, true, true)))), false);
        }
        case 1i: {
            let var_0 = _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(274f, 745f))), _wgslsmith_f_op_vec2_f32(abs(_wgslsmith_f_op_vec2_f32(-vec2<f32>(718f, -680f))))))) + _wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(vec2<f32>(1f, 1f) + vec2<f32>(_wgslsmith_f_op_f32(-693f), 2056f)), vec2<f32>(1023f, 730f))));
            switch (u_input.d & firstTrailingBit(i32(-1i) * i32(-2147483648))) {
                case i32(-2147483648): {
                    return !vec4<bool>(any(select(select(vec3<bool>(false, true, false), vec3<bool>(false, true, true), vec3<bool>(true, false, true)), vec3<bool>(true, true, true), select(vec3<bool>(false, false, false), vec3<bool>(true, false, false), true))), all(select(select(vec3<bool>(true, false, true), vec3<bool>(true, true, false), vec3<bool>(true, false, false)), select(vec3<bool>(false, true, false), vec3<bool>(false, true, true), vec3<bool>(true, false, false)), select(vec3<bool>(false, true, true), vec3<bool>(true, false, true), vec3<bool>(true, true, false)))), any(vec4<bool>(true, true, true, true)), _wgslsmith_f_op_f32(trunc(var_0.x)) >= _wgslsmith_f_op_f32(f32(-1f) * -320f));
                }
                default: {
                    let var_1 = any(vec4<bool>(select(true, all(vec2<bool>(false, false)), false), !(u_input.e.x <= 4294967295u), true, !(u_input.b.x < u_input.a))) || ((i32(-1i) * -1i) < (countOneBits(u_input.b.x) >> (_wgslsmith_sub_u32(select(u_input.e.x, u_input.c.x, true), u_input.c.x) % 32u)));
                }
            }
            for (var var_1 = 1i; var_1 != 36315i; var_1 -= 1i) {
                if (LOOP_COUNTERS[0u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
                continue;
            }
            var var_1 = u_input.c.x;
            var var_2 = vec2<i32>(-countOneBits(abs(u_input.b.x) ^ _wgslsmith_mult_i32(u_input.a, -39096i)), max(24355i, u_input.b.x));
        }
        case i32(-2147483648): {
            switch (0i) {
                default: {
                    let var_0 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(sign(_wgslsmith_f_op_vec2_f32(-vec2<f32>(454f, 872f))))));
                    var var_1 = Struct_1(~vec4<u32>(u_input.c.x, u_input.e.x, u_input.c.x, ~_wgslsmith_mod_u32(u_input.e.x, 19174u)));
                    var var_2 = ~((countOneBits(-vec2<i32>(u_input.b.x, 34724i)) ^ ~vec2<i32>(u_input.a, u_input.a)) & vec2<i32>(1i, min(18987i, 0i)));
                    var_1 = Struct_1(firstLeadingBit(vec4<u32>(66714u, var_1.a.x, _wgslsmith_dot_vec3_u32(min(var_1.a.wzw, var_1.a.yzw), ~vec3<u32>(15953u, u_input.c.x, 4294967295u)), ~(u_input.c.x & var_1.a.x))));
                }
            }
        }
        case -5253i: {
            for (var var_0 = _wgslsmith_dot_vec3_i32((vec3<i32>(35068i << (u_input.c.x % 32u), ~2147483647i, max(-1i, 25446i)) & -_wgslsmith_sub_vec3_i32(vec3<i32>(u_input.a, u_input.d, i32(-2147483648)), vec3<i32>(u_input.b.x, -8043i, i32(-2147483648)))) ^ vec3<i32>(1i, min(0i, select(u_input.b.x, i32(-2147483648), false)), -select(1i, u_input.b.x, true)), countOneBits(max(abs(-vec3<i32>(u_input.d, 2907i, -41863i)), vec3<i32>(1i, 1i, 1i)))); var_0 != -25219i; var_0 = -6066i) {
                if (LOOP_COUNTERS[1u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
            }
            for (var var_0: i32; false; ) {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            }
            let var_0 = vec3<bool>(!(!any(vec4<bool>(false, false, false, true))) | ((~27364i >> (countOneBits(u_input.c.x) % 32u)) <= 1i), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -654f) + _wgslsmith_f_op_f32(ceil(1585f))) == _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(1462f, -1134f, true))), 274f)), u_input.d < (i32(-1i) * -(~u_input.d)));
            for (var var_1 = u_input.d; ; var_1 -= 1i) {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            }
        }
        default: {
            var var_0 = -115f;
            var var_1 = Struct_1(_wgslsmith_sub_vec4_u32(vec4<u32>(u_input.c.x, min(116239u, 1u), u_input.e.x, 52489u >> (~u_input.e.x % 32u)), _wgslsmith_mod_vec4_u32(~(~vec4<u32>(u_input.c.x, 4294967295u, u_input.c.x, u_input.c.x)), ~(vec4<u32>(u_input.c.x, u_input.c.x, 1u, 0u) << (vec4<u32>(4294967295u, 106123u, u_input.c.x, 36919u) % vec4<u32>(32u))))));
            loop {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                continue;
            }
            var var_2 = Struct_1(~vec4<u32>(var_1.a.x, var_1.a.x, ~(~var_1.a.x), ~reverseBits(24266u)));
            let var_3 = var_1.a.x;
        }
    }
    let var_0 = select(firstTrailingBit(-(vec3<i32>(0i, 2147483647i, i32(-2147483648)) | vec3<i32>(u_input.d, i32(-2147483648), 0i)) | vec3<i32>(countOneBits(-15269i), _wgslsmith_dot_vec4_i32(vec4<i32>(u_input.b.x, u_input.a, u_input.a, -1i), vec4<i32>(0i, u_input.a, 0i, -6854i)), i32(-1i) * -1i)), vec3<i32>(u_input.a, _wgslsmith_mult_i32(u_input.a, _wgslsmith_sub_i32(u_input.b.x, 6254i)), firstLeadingBit(_wgslsmith_dot_vec2_i32(~u_input.b, vec2<i32>(u_input.d, 1i)))), vec3<bool>(true, true, true));
    let var_1 = u_input.c.x << (~(~firstLeadingBit(~u_input.e.x)) % 32u);
    var var_2 = _wgslsmith_mult_u32(_wgslsmith_div_u32(25395u, u_input.c.x & 1u) >> (~var_1 % 32u), var_1) & u_input.c.x;
    var_2 = u_input.e.x;
    return vec4<bool>(!all(select(vec3<bool>(true, true, true), select(vec3<bool>(true, true, false), vec3<bool>(true, true, true), true), select(vec3<bool>(false, true, false), vec3<bool>(true, false, false), vec3<bool>(false, true, true)))), any(select(vec2<bool>(true, true), !select(vec2<bool>(false, true), vec2<bool>(false, false), false), ~u_input.e.x == reverseBits(var_1))), var_0.x < u_input.b.x, var_0.x <= 0i);
}

fn func_5(arg_0: bool) -> vec4<i32> {
    loop {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        continue;
    }
    var var_0 = Struct_1(vec4<u32>(u_input.e.x, 4294967295u, u_input.e.x, 0u));
    loop {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        var var_1 = (~(~(var_0.a.x << (0u % 32u))) ^ _wgslsmith_clamp_u32(2456u, ~1u, _wgslsmith_dot_vec4_u32(vec4<u32>(var_0.a.x, u_input.c.x, var_0.a.x, 1u), vec4<u32>(1u, u_input.e.x, 46592u, var_0.a.x)))) >> (68173u % 32u);
        let var_2 = ~4294967295u;
        switch (-1900i) {
            case 28304i: {
                var_0 = Struct_1(_wgslsmith_add_vec4_u32(~(~(~vec4<u32>(u_input.c.x, var_2, 4294967295u, 1u))), ~(~_wgslsmith_add_vec4_u32(var_0.a, var_0.a))));
            }
            default: {
                continue;
            }
        }
        var var_3 = select(!(!(!select(vec4<bool>(false, arg_0, arg_0, false), vec4<bool>(arg_0, true, arg_0, true), vec4<bool>(arg_0, true, arg_0, arg_0)))), !(!func_6()), select(vec4<bool>(true, arg_0, !arg_0, !(!arg_0)), select(vec4<bool>(false, arg_0 | arg_0, true, true), !func_6(), vec4<bool>(!arg_0, false, arg_0, true & arg_0)), vec4<bool>(true, true, true, true)));
        continue;
    }
    let var_1 = Struct_1(vec4<u32>(58778u, u_input.c.x ^ 33614u, min(~u_input.e.x, ~(1u << (u_input.c.x % 32u))), var_0.a.x));
    switch (abs(select(-max(-106901i, -u_input.d), _wgslsmith_add_i32(u_input.a, _wgslsmith_dot_vec2_i32(u_input.b, vec2<i32>(u_input.a, u_input.d))) | firstTrailingBit(u_input.a), false))) {
        default: {
            let var_2 = vec2<bool>(all(vec2<bool>(-27641i < -u_input.a, true)), any(vec2<bool>(arg_0 == arg_0, func_6().x)));
        }
    }
    return ~vec4<i32>(-reverseBits(_wgslsmith_mod_i32(2147483647i, 26207i)), i32(-2147483648), min(_wgslsmith_dot_vec2_i32(u_input.b, u_input.b) ^ max(0i, 0i), u_input.b.x), 54904i & _wgslsmith_div_i32(u_input.d, -4363i));
}

fn func_7(arg_0: vec4<f32>, arg_1: vec4<bool>) -> bool {
    var var_0 = Struct_1(~select(vec4<u32>(~u_input.c.x, select(u_input.c.x, 4294967295u, true), u_input.e.x, u_input.e.x), ~firstLeadingBit(vec4<u32>(1u, 1u, 35276u, 42376u)), false));
    var var_1 = _wgslsmith_mod_i32(_wgslsmith_sub_i32(-17974i, 0i), -firstLeadingBit(_wgslsmith_dot_vec2_i32(u_input.b, vec2<i32>(u_input.b.x, -10735i))) | (_wgslsmith_add_i32(_wgslsmith_mod_i32(u_input.b.x, u_input.b.x), max(0i, u_input.b.x)) ^ -11765i));
    if (false) {
        var_1 = min(u_input.a, _wgslsmith_dot_vec4_i32(-abs(vec4<i32>(u_input.a, u_input.d, -28518i, -3905i)), func_5(!func_6().x)));
        let var_2 = Struct_1(vec4<u32>(~(69099u | _wgslsmith_clamp_u32(var_0.a.x, var_0.a.x, u_input.c.x)), _wgslsmith_sub_u32(_wgslsmith_mod_u32(29440u, u_input.e.x), var_0.a.x), 9679u, reverseBits(u_input.c.x)));
    }
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        let var_2 = Struct_1(~vec4<u32>(~23526u >> (_wgslsmith_mod_u32(0u, 5691u) % 32u), ~var_0.a.x, countOneBits(~44285u), ~firstLeadingBit(var_0.a.x)));
    }
    var_1 = func_5(arg_1.x || (_wgslsmith_dot_vec4_u32(~vec4<u32>(4294967295u, 4294967295u, 4294967295u, var_0.a.x), var_0.a) >= reverseBits(countOneBits(22905u)))).x;
    return true;
}

fn func_4(arg_0: Struct_1, arg_1: vec2<bool>, arg_2: Struct_1, arg_3: vec2<i32>) -> Struct_1 {
    if (false) {
        let var_0 = reverseBits(select(vec2<u32>(0u, u_input.c.x), _wgslsmith_sub_vec2_u32(u_input.e.zx, reverseBits(_wgslsmith_div_vec2_u32(vec2<u32>(78873u, u_input.e.x), vec2<u32>(0u, 1u)))), all(!(!arg_1))));
        if (arg_1.x) {
        }
        let var_1 = Struct_1(vec4<u32>(u_input.c.x, _wgslsmith_mult_u32(countOneBits(7782u), 1u), var_0.x, 1u));
        if (!arg_1.x) {
            var var_2 = min(_wgslsmith_clamp_vec2_u32(~vec2<u32>(abs(9983u), reverseBits(45691u)), vec2<u32>(var_0.x >> ((var_1.a.x ^ 4294967295u) % 32u), 0u), countOneBits(vec2<u32>(_wgslsmith_mod_u32(arg_2.a.x, 1u), ~var_0.x))), arg_2.a.zw);
        }
    }
    if (true) {
    }
    for (; func_7(_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(1000f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(1001f - 808f) - -1704f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -581f) - _wgslsmith_f_op_f32(step(-413f, 542f))), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(trunc(438f)), _wgslsmith_f_op_f32(max(1000f, -881f)))))), vec4<bool>(_wgslsmith_mod_u32(arg_0.a.x, 1u) >= arg_0.a.x, false, _wgslsmith_dot_vec4_i32(-vec4<i32>(u_input.b.x, 2147483647i, -66975i, u_input.a), -vec4<i32>(1i, 1i, arg_3.x, arg_3.x)) >= _wgslsmith_dot_vec4_i32(~vec4<i32>(i32(-2147483648), arg_3.x, arg_3.x, u_input.a), func_5(arg_1.x)), true)); ) {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
    }
    switch (2147483647i) {
        case -1i: {
            for (var var_0 = 6152i; !(_wgslsmith_mult_i32(_wgslsmith_div_i32(firstTrailingBit(1i), i32(-2147483648)), arg_3.x) == abs(_wgslsmith_add_i32(_wgslsmith_mult_i32(u_input.b.x, i32(-2147483648)), -u_input.a))); ) {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                var_0 = 2147483647i;
                break;
            }
        }
        case i32(-2147483648): {
            let var_0 = 27407u;
            let var_1 = select(select(vec2<bool>(true, true), arg_1, !vec2<bool>(arg_1.x, u_input.b.x != u_input.d)), func_6().xw, func_6().zy);
            loop {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                break;
            }
            switch (countOneBits(firstLeadingBit(32515i))) {
                case -1i: {
                    let var_2 = Struct_1(arg_2.a);
                    let var_3 = false;
                }
                case 22892i: {
                }
                case -2556i: {
                    let var_2 = arg_0;
                    var var_3 = Struct_1(min(vec4<u32>(~(~10717u), arg_2.a.x, u_input.c.x, 67724u), vec4<u32>(_wgslsmith_dot_vec4_u32(vec4<u32>(arg_0.a.x, var_2.a.x, 1u, 27166u), reverseBits(var_2.a)), 16432u, abs(0u), 4294967295u)));
                    let var_4 = Struct_1(vec4<u32>(8683u, ~(~arg_0.a.x), select(~arg_2.a.x & reverseBits(var_2.a.x), ~0u, true), 23107u));
                    var_3 = Struct_1(_wgslsmith_div_vec4_u32(~arg_0.a, firstTrailingBit(vec4<u32>(75220u, ~415u, u_input.c.x, u_input.e.x >> (arg_0.a.x % 32u)))));
                }
                case 1i: {
                    let var_2 = arg_2;
                    var var_3 = 891f;
                    var_3 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(353f)) * 377f);
                }
                default: {
                    let var_2 = vec2<i32>(u_input.d, u_input.b.x);
                    var var_3 = _wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(1f, 1f))), vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-1000f + 317f), _wgslsmith_f_op_f32(f32(-1f) * -931f)))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(f32(-1f) * -405f))), -1122f)), true));
                    var var_4 = abs(vec3<i32>(-(arg_3.x >> (1u % 32u)), var_2.x, 47052i) >> (firstTrailingBit(vec3<u32>(44020u, 31510u, abs(var_0))) % vec3<u32>(32u)));
                    let var_5 = var_3.x;
                    let var_6 = firstLeadingBit(~max(~firstLeadingBit(vec4<i32>(var_4.x, u_input.d, 41325i, u_input.a)), reverseBits(~vec4<i32>(2147483647i, var_2.x, -4898i, 14160i))));
                }
            }
            let var_2 = arg_2;
        }
        case 0i: {
            var var_0 = countOneBits(-vec4<i32>(~27931i, u_input.b.x, _wgslsmith_mult_i32(-1i, i32(-1i) * -4909i), _wgslsmith_sub_i32(u_input.d, i32(-2147483648))));
            var_0 = ~(vec4<i32>(-1i) * -(~(-vec4<i32>(u_input.a, 75125i, var_0.x, arg_3.x))));
            var_0 = abs(vec4<i32>(1i, ~var_0.x, abs(abs(1i)), var_0.x) & vec4<i32>(i32(-1i) * -33128i, u_input.b.x, -var_0.x, _wgslsmith_dot_vec3_i32(-vec3<i32>(var_0.x, 52956i, -65931i), vec3<i32>(arg_3.x, -27436i, arg_3.x))));
            var_0 = vec4<i32>(var_0.x, arg_3.x, u_input.b.x, _wgslsmith_add_i32(1i, _wgslsmith_mult_i32(arg_3.x, abs(arg_3.x))));
        }
        default: {
            var var_0 = arg_2;
            var var_1 = vec2<u32>(1u, 13529u);
            for (var var_2 = 1573i; ; var_0 = arg_2) {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                break;
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
    }
    return Struct_1(arg_0.a);
}

fn func_8(arg_0: bool, arg_1: Struct_1) -> vec4<bool> {
    loop {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        for (var var_0 = 2147483647i; all(func_6()); ) {
            if (LOOP_COUNTERS[14u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
            var var_1 = u_input.a;
            var var_2 = func_4(func_4(Struct_1(arg_1.a), vec2<bool>(func_7(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-1474f, -447f, 967f, -421f)), vec4<bool>(arg_0, arg_0, arg_0, arg_0)), arg_0), Struct_1(arg_1.a), vec2<i32>(max(1i, ~(i32(-2147483648))), u_input.d)), select(vec2<bool>(arg_0, any(vec2<bool>(true, arg_0)) | true), vec2<bool>(all(!vec2<bool>(arg_0, arg_0)), (arg_1.a.x >> (77367u % 32u)) < 32900u), vec2<bool>(arg_0, any(!vec3<bool>(arg_0, true, arg_0)))), Struct_1(vec4<u32>(select(arg_1.a.x, ~arg_1.a.x, !arg_0), select(arg_1.a.x >> (arg_1.a.x % 32u), arg_1.a.x, !arg_0), _wgslsmith_dot_vec4_u32(vec4<u32>(0u, u_input.c.x, u_input.c.x, arg_1.a.x), vec4<u32>(u_input.e.x, 0u, 4294967295u, u_input.c.x)), 39914u)), vec2<i32>(u_input.d, 1i));
            var_0 = u_input.b.x;
        }
        break;
    }
    switch (~u_input.d) {
        default: {
            var var_0 = vec2<f32>(914f, 1f);
            var var_1 = func_4(Struct_1(arg_1.a << ((_wgslsmith_sub_vec4_u32(arg_1.a, vec4<u32>(145903u, 4294967295u, 93775u, arg_1.a.x)) | ~arg_1.a) % vec4<u32>(32u))), !select(func_6().yx, vec2<bool>(false, arg_0), !select(vec2<bool>(false, arg_0), vec2<bool>(false, arg_0), true)), arg_1, vec2<i32>(-1i, firstTrailingBit(u_input.b.x)));
            switch (-17193i) {
                case 28508i: {
                    var var_2 = func_4(Struct_1(min(arg_1.a, _wgslsmith_add_vec4_u32(var_1.a, vec4<u32>(var_1.a.x, u_input.e.x, 33381u, 4294967295u)) | firstTrailingBit(vec4<u32>(4294967295u, 1u, 39071u, 0u)))), vec2<bool>(true, true), func_4(Struct_1(vec4<u32>(_wgslsmith_dot_vec4_u32(vec4<u32>(var_1.a.x, arg_1.a.x, 107519u, 81536u), vec4<u32>(arg_1.a.x, 15837u, 0u, arg_1.a.x)), 1u, 10046u, ~u_input.e.x)), vec2<bool>(arg_0 & any(vec2<bool>(arg_0, false)), all(vec2<bool>(arg_0, false))), arg_1, _wgslsmith_mult_vec2_i32(vec2<i32>(u_input.d, _wgslsmith_add_i32(u_input.b.x, u_input.a)), u_input.b)), vec2<i32>(-(~42217i), u_input.d));
                    var_1 = func_4(Struct_1(_wgslsmith_add_vec4_u32(var_2.a, ~(~vec4<u32>(arg_1.a.x, 0u, 4294967295u, var_2.a.x)))), vec2<bool>(arg_0, !func_6().x), arg_1, vec2<i32>(-1i, u_input.d));
                    var_1 = Struct_1(var_1.a);
                    let var_3 = arg_1;
                }
                default: {
                    let var_2 = _wgslsmith_div_vec4_u32(~(~arg_1.a) ^ reverseBits(var_1.a), ~firstLeadingBit(~firstTrailingBit(vec4<u32>(u_input.c.x, var_1.a.x, u_input.e.x, 112660u))));
                    let var_3 = arg_1;
                    var var_4 = _wgslsmith_mod_i32(u_input.b.x, 49968i);
                }
            }
        }
    }
    if (arg_0) {
        var var_0 = !func_6().zz;
        var_0 = vec2<bool>(true, true);
        switch (-35647i) {
            default: {
                let var_1 = countOneBits(_wgslsmith_add_i32(max(i32(-1i) * i32(-2147483648), _wgslsmith_dot_vec3_i32(vec3<i32>(u_input.a, 2147483647i, u_input.d), -vec3<i32>(-38736i, u_input.a, u_input.d))), ~reverseBits(u_input.a ^ -13606i)));
                let var_2 = vec2<i32>(-34592i, _wgslsmith_add_i32(u_input.a, 1i));
                var_0 = vec2<bool>(!arg_0, ~(~(4683u ^ u_input.e.x)) != 0u);
                var_0 = !func_6().xy;
            }
        }
        let var_1 = func_4(arg_1, select(!select(vec2<bool>(true, true), !vec2<bool>(var_0.x, var_0.x), !vec2<bool>(arg_0, var_0.x)), !select(select(vec2<bool>(true, arg_0), vec2<bool>(arg_0, false), arg_0), !vec2<bool>(arg_0, arg_0), arg_0), vec2<bool>(true, !(!arg_0))), Struct_1(vec4<u32>(~arg_1.a.x, arg_1.a.x, arg_1.a.x, ~arg_1.a.x >> (39301u % 32u))), _wgslsmith_sub_vec2_i32(countOneBits(~min(vec2<i32>(1141i, -3145i), vec2<i32>(u_input.b.x, 0i))), u_input.b));
    }
    if (!(!arg_0)) {
        switch (-abs(min(u_input.a, firstLeadingBit(1i)))) {
            default: {
                let var_0 = arg_1;
                var var_1 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(-vec4<f32>(988f, 156f, -131f, -373f)), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(-1648f, 392f, 190f, -413f) + vec4<f32>(-173f, -1000f, -1000f, 698f))))), _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(-627f, -607f, -444f, -1321f) - vec4<f32>(-1230f, 1246f, 168f, 344f))), _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(1336f, 1000f, 1000f, -199f))), _wgslsmith_f_op_vec4_f32(-vec4<f32>(-1172f, 385f, -1000f, -891f)), true)), select(!vec4<bool>(true, true, false, arg_0), select(vec4<bool>(arg_0, arg_0, arg_0, arg_0), vec4<bool>(arg_0, true, true, arg_0), arg_0), vec4<bool>(arg_0, arg_0, true, arg_0)))), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-156f))) < _wgslsmith_f_op_f32(_wgslsmith_div_f32(209f, -1149f) * -678f))) - _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(1f, 1f, 1f, 1f)) * _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(468f, 1000f, -314f, 1181f))))));
                var var_2 = _wgslsmith_mod_vec3_i32(vec3<i32>(-u_input.b.x >> (32903u % 32u), i32(-2147483648), ~_wgslsmith_dot_vec4_i32(-vec4<i32>(u_input.b.x, 38367i, 5023i, 18181i), _wgslsmith_clamp_vec4_i32(vec4<i32>(-1963i, -3596i, -24250i, u_input.a), vec4<i32>(1i, u_input.a, 0i, -10644i), vec4<i32>(u_input.a, -1i, u_input.d, 803i)))), ~_wgslsmith_add_vec3_i32(_wgslsmith_div_vec3_i32(vec3<i32>(u_input.d, 6243i, 2147483647i) & vec3<i32>(1i, u_input.b.x, u_input.b.x), ~vec3<i32>(0i, -1i, -6255i)), ~firstLeadingBit(vec3<i32>(1i, -44533i, 29330i))));
                return select(select(vec4<bool>(func_6().x, false | arg_0, !func_7(vec4<f32>(1533f, -1000f, 663f, 439f), vec4<bool>(arg_0, false, true, arg_0)), arg_0 & !arg_0), !(!(!vec4<bool>(arg_0, arg_0, arg_0, true))), arg_0), select(!vec4<bool>(!arg_0, true, true, true), func_6(), !all(vec2<bool>(arg_0, arg_0))), true);
            }
        }
        var var_0 = max(-(~max(vec2<i32>(12998i, i32(-2147483648)) | vec2<i32>(4538i, u_input.d), u_input.b)), u_input.b);
        let var_1 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(-785f, -758f, -951f) - _wgslsmith_f_op_vec3_f32(-vec3<f32>(979f, -167f, -478f)))) - _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(-912f, 637f, 1503f) - vec3<f32>(278f, 858f, 1024f))), _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(vec3<f32>(-1601f, -1706f, 890f) + vec3<f32>(405f, -864f, 371f)), _wgslsmith_f_op_vec3_f32(-vec3<f32>(-927f, -1000f, 652f)))), !(!arg_0)))));
    }
    if (true != !arg_0) {
        let var_0 = arg_1;
        let var_1 = func_4(arg_1, select(vec2<bool>(func_7(vec4<f32>(1f, 1f, 1f, 1f), vec4<bool>(false, false, arg_0, arg_0)), true), func_6().zx, !(!select(vec2<bool>(arg_0, arg_0), vec2<bool>(arg_0, arg_0), arg_0))), Struct_1(~arg_1.a), u_input.b);
        let var_2 = true;
        switch (-62184i) {
            case -1i: {
                let var_3 = var_1;
                var var_4 = Struct_1(abs(vec4<u32>((u_input.c.x | var_3.a.x) >> (63800u % 32u), _wgslsmith_clamp_u32(min(var_3.a.x, var_0.a.x), _wgslsmith_mod_u32(arg_1.a.x, var_3.a.x), 1u), arg_1.a.x, var_3.a.x)));
                return vec4<bool>(((396f >= _wgslsmith_f_op_f32(sign(155f))) != true) && !select(select(false, false, true), !var_2, true), arg_0, !all(select(func_6().xx, vec2<bool>(true, arg_0), vec2<bool>(arg_0, var_2))), var_2);
            }
            case -36959i: {
                let var_3 = -24679i;
                var var_4 = var_0.a.x > firstLeadingBit(1u);
            }
            case 0i: {
            }
            default: {
                let var_3 = firstTrailingBit(0u);
                let var_4 = ~var_1.a.x;
                var var_5 = var_0;
                var_5 = var_1;
            }
        }
    }
    return !(!(!func_6()));
}

fn func_3() -> vec4<f32> {
    for (var var_0 = 30647i; all(select(select(func_8(false, func_4(Struct_1(vec4<u32>(0u, 1u, u_input.e.x, 4294967295u)), vec2<bool>(true, true), Struct_1(vec4<u32>(u_input.e.x, 4294967295u, u_input.c.x, 2084u)), u_input.b)), !func_8(true, Struct_1(vec4<u32>(u_input.e.x, u_input.c.x, u_input.e.x, 31597u))), func_7(_wgslsmith_f_op_vec4_f32(-vec4<f32>(144f, -221f, 733f, -256f)), vec4<bool>(false, false, false, true))), select(vec4<bool>(true, true, true, any(vec4<bool>(true, true, false, false))), func_8(true, Struct_1(vec4<u32>(u_input.e.x, u_input.e.x, u_input.c.x, 9782u))), func_6()), true)); var_0 += 1i) {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
        let var_1 = _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -1054f) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(201f, 1066f, true)))) + -1480f), _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1304f - 1266f))))));
    }
    var var_0 = _wgslsmith_f_op_f32(-1026f - _wgslsmith_f_op_f32(step(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-168f)), 220f), _wgslsmith_div_f32(-629f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-440f))))));
    var_0 = _wgslsmith_f_op_f32(floor(604f));
    var var_1 = !(!(!(!func_8(false, Struct_1(vec4<u32>(u_input.e.x, u_input.c.x, u_input.c.x, u_input.e.x))).xww)));
    loop {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        break;
    }
    return _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(1f, 1f, 1f, 1f))), vec4<f32>(1f, 1f, 1f, 1f), true))), vec4<f32>(_wgslsmith_f_op_f32(sign(1572f)), -955f, 1f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(-1342f))))), vec4<bool>(func_8(true, func_4(Struct_1(vec4<u32>(u_input.e.x, 1u, u_input.e.x, u_input.c.x)), func_6().xw, func_4(Struct_1(vec4<u32>(1u, u_input.e.x, 1u, u_input.c.x)), var_1.zx, Struct_1(vec4<u32>(4294967295u, 30688u, 98759u, u_input.e.x)), u_input.b), u_input.b)).x, var_1.x, !any(!vec4<bool>(var_1.x, true, var_1.x, var_1.x)), var_1.x)));
}

fn func_9(arg_0: vec4<f32>, arg_1: Struct_1, arg_2: Struct_1, arg_3: vec2<f32>) -> Struct_1 {
    let var_0 = -_wgslsmith_clamp_vec4_i32(~abs(select(vec4<i32>(i32(-2147483648), u_input.a, -48454i, 28303i), vec4<i32>(2147483647i, -6636i, u_input.d, u_input.b.x), false)), max(vec4<i32>(i32(-1i) * -62690i, 2147483647i, 9302i, u_input.a), countOneBits(vec4<i32>(2147483647i, u_input.a, -1i, u_input.d))), _wgslsmith_clamp_vec4_i32(reverseBits(-vec4<i32>(u_input.b.x, -1i, u_input.b.x, u_input.a)), select(vec4<i32>(u_input.a, u_input.b.x, u_input.d, u_input.d), vec4<i32>(u_input.b.x, u_input.b.x, u_input.b.x, 2147483647i), vec4<bool>(false, true, true, true)), abs(max(vec4<i32>(0i, u_input.b.x, u_input.b.x, i32(-2147483648)), vec4<i32>(i32(-2147483648), u_input.a, u_input.d, 37161i)))));
    loop {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
        var var_1 = _wgslsmith_mult_i32(u_input.d, u_input.a);
        var var_2 = (_wgslsmith_add_u32(_wgslsmith_mod_u32(_wgslsmith_sub_u32(25602u, arg_2.a.x), countOneBits(arg_2.a.x)), func_4(arg_1, vec2<bool>(true, true), func_4(arg_2, vec2<bool>(true, true), Struct_1(vec4<u32>(u_input.c.x, arg_1.a.x, arg_1.a.x, u_input.e.x)), var_0.zw), vec2<i32>(u_input.a, -40411i)).a.x) > arg_2.a.x) | all(!vec3<bool>(all(vec4<bool>(false, false, true, true)), any(vec3<bool>(true, true, true)), true));
        break;
    }
    let var_1 = _wgslsmith_sub_vec3_i32(firstLeadingBit(~(vec3<i32>(var_0.x, 2147483647i, 2147483647i) & var_0.yyy)), vec3<i32>(firstTrailingBit(1i), 1i, -var_0.x)) | firstTrailingBit(vec3<i32>(u_input.a, func_5(true).x, 1i));
    let var_2 = 26420i;
    let var_3 = ~func_4(func_4(Struct_1(vec4<u32>(arg_2.a.x, arg_1.a.x, u_input.c.x, arg_1.a.x)), vec2<bool>(true, true), Struct_1(~vec4<u32>(0u, arg_2.a.x, 56019u, 46479u)), vec2<i32>(-1i) * -var_0.ww), !vec2<bool>(-202f < arg_3.x, all(vec3<bool>(true, false, true))), Struct_1(vec4<u32>(_wgslsmith_clamp_u32(arg_1.a.x, 0u, 1u), ~arg_2.a.x, 1u, ~arg_2.a.x)), var_1.yy).a.xzx;
    return arg_1;
}

fn func_10(arg_0: Struct_1, arg_1: Struct_1, arg_2: Struct_1) -> Struct_1 {
    let var_0 = Struct_1(vec4<u32>(func_9(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(795f, -146f, -885f, 736f)) * _wgslsmith_f_op_vec4_f32(min(vec4<f32>(-1257f, 469f, -2956f, -1271f), vec4<f32>(634f, 514f, -243f, 697f)))), func_4(Struct_1(vec4<u32>(arg_0.a.x, arg_2.a.x, u_input.c.x, 1u)), vec2<bool>(false, false), func_9(vec4<f32>(-226f, 800f, -1157f, 894f), Struct_1(vec4<u32>(u_input.c.x, 1u, 4294967295u, 4294967295u)), arg_0, vec2<f32>(1957f, -125f)), func_5(false).wx), arg_0, _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(1252f, 937f)))).a.x, func_4(func_9(_wgslsmith_f_op_vec4_f32(vec4<f32>(1211f, 1000f, 2966f, -1043f) - vec4<f32>(186f, -1779f, 144f, 457f)), func_4(arg_2, vec2<bool>(false, true), arg_1, vec2<i32>(u_input.a, 4728i)), func_9(vec4<f32>(360f, -1247f, -420f, -326f), Struct_1(arg_1.a), arg_1, vec2<f32>(476f, -420f)), _wgslsmith_f_op_vec2_f32(max(vec2<f32>(-1156f, -1265f), vec2<f32>(-244f, -1143f)))), func_6().yy, arg_1, u_input.b).a.x, ~(~max(33442u, 1u)), select(_wgslsmith_clamp_u32(countOneBits(0u), _wgslsmith_add_u32(u_input.e.x, arg_2.a.x), 31330u), u_input.c.x, all(vec4<bool>(true, true, true, true)))));
    for (var var_1 = -67622i; var_1 != -30466i; var_1 -= 1i) {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        var var_2 = arg_1;
        loop {
            if (LOOP_COUNTERS[19u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
            var var_3 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(416f, _wgslsmith_f_op_f32(select(-860f, _wgslsmith_f_op_f32(-800f * -1040f), true)))) - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(692f)) - -152f)) >= _wgslsmith_f_op_f32(f32(-1f) * -226f);
            var var_4 = u_input.b.x >> (_wgslsmith_sub_u32(1u, arg_1.a.x) % 32u);
            let var_5 = Struct_1(~(~arg_0.a & ~select(vec4<u32>(arg_2.a.x, arg_0.a.x, 4294967295u, arg_0.a.x), arg_1.a, vec4<bool>(false, true, true, true))));
        }
        loop {
            if (LOOP_COUNTERS[20u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
            break;
        }
        break;
    }
    var var_1 = all(vec2<bool>(true, true));
    switch (u_input.a) {
        case -42369i: {
            let var_2 = arg_0;
            var var_3 = Struct_1(~vec4<u32>(~73916u, var_2.a.x, min(~var_2.a.x, 31109u), arg_1.a.x));
            var var_4 = true;
        }
        case 23013i: {
        }
        case 1i: {
        }
        case i32(-2147483648): {
        }
        default: {
            for (var var_2 = 0i; func_6().x; var_1 = true) {
                if (LOOP_COUNTERS[21u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
                let var_3 = arg_2.a.ww;
                var_1 = func_7(vec4<f32>(-1000f, _wgslsmith_f_op_f32(-1048f), -2123f, _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-360f + -719f) - _wgslsmith_f_op_f32(f32(-1f) * -1000f)), _wgslsmith_f_op_vec4_f32(func_3()).x))), func_8(!(func_6().x & true), Struct_1(func_4(Struct_1(arg_2.a), vec2<bool>(true, true), Struct_1(arg_1.a), u_input.b).a >> (~vec4<u32>(57651u, 1u, 4294967295u, var_0.a.x) % vec4<u32>(32u)))));
                var var_4 = vec3<u32>(_wgslsmith_clamp_u32(~(~(~26828u)), var_0.a.x, arg_0.a.x), 3672u, ~max(~(~u_input.e.x), func_9(_wgslsmith_f_op_vec4_f32(-vec4<f32>(1182f, 1816f, -435f, 1516f)), Struct_1(arg_0.a), func_4(Struct_1(vec4<u32>(var_0.a.x, u_input.e.x, 49035u, 1u)), vec2<bool>(false, true), Struct_1(arg_0.a), vec2<i32>(u_input.a, 41037i)), _wgslsmith_f_op_vec2_f32(vec2<f32>(910f, 264f) - vec2<f32>(-913f, 838f))).a.x));
                break;
            }
            let var_2 = u_input.d;
            var var_3 = arg_2;
            let var_4 = Struct_1(func_9(_wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(vec4<f32>(-298f, -373f, -209f, -181f) - vec4<f32>(374f, -916f, 143f, -232f)))))), arg_0, Struct_1(var_0.a), vec2<f32>(-893f, 1f)).a);
            let var_5 = vec2<i32>(_wgslsmith_mod_i32(-9588i, _wgslsmith_div_i32(_wgslsmith_clamp_i32(u_input.b.x, -u_input.d, 27013i), _wgslsmith_sub_i32(~u_input.a, _wgslsmith_add_i32(i32(-2147483648), var_2)))), 2147483647i | var_2);
        }
    }
    var_1 = !(reverseBits(max(arg_1.a.x, arg_1.a.x) << (~0u % 32u)) < 4294967295u);
    return func_4(var_0, !select(func_6().yy, vec2<bool>(func_8(false, Struct_1(arg_0.a)).x, true), true), arg_2, vec2<i32>(_wgslsmith_add_i32(firstLeadingBit(u_input.b.x) | -7857i, -1i), -_wgslsmith_dot_vec3_i32(select(vec3<i32>(33567i, u_input.a, u_input.b.x), vec3<i32>(31069i, i32(-2147483648), u_input.a), true), _wgslsmith_sub_vec3_i32(vec3<i32>(u_input.d, 14352i, -1i), vec3<i32>(1i, u_input.d, u_input.b.x)))));
}

fn func_2() -> Struct_1 {
    let var_0 = func_10(Struct_1(countOneBits(abs(vec4<u32>(u_input.e.x, u_input.c.x, u_input.c.x, 39285u))) >> (~max(vec4<u32>(2024u, 32439u, 1u, u_input.e.x), vec4<u32>(48313u, u_input.c.x, 4294967295u, u_input.e.x)) % vec4<u32>(32u))), Struct_1(_wgslsmith_add_vec4_u32(vec4<u32>(1u, 4294967295u, 1u, u_input.e.x), _wgslsmith_clamp_vec4_u32(vec4<u32>(u_input.e.x, u_input.e.x, u_input.c.x, 27237u), vec4<u32>(u_input.e.x, 3360u, u_input.c.x, u_input.e.x), vec4<u32>(4294967295u, u_input.c.x, u_input.c.x, 23771u))) >> ((abs(vec4<u32>(4294967295u, 74978u, u_input.c.x, u_input.c.x)) | vec4<u32>(u_input.c.x, u_input.c.x, u_input.e.x, u_input.e.x)) % vec4<u32>(32u))), func_9(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(func_3()))), func_4(Struct_1(vec4<u32>(4294967295u, 4294967295u, u_input.e.x, 95242u)), !select(vec2<bool>(true, true), vec2<bool>(false, false), vec2<bool>(true, false)), Struct_1(~vec4<u32>(u_input.e.x, 1u, 0u, u_input.c.x)), func_5(true).yy), func_4(func_4(Struct_1(vec4<u32>(u_input.e.x, 31524u, 4294967295u, u_input.e.x)), vec2<bool>(true, true), func_4(Struct_1(vec4<u32>(27270u, u_input.e.x, u_input.c.x, u_input.c.x)), vec2<bool>(true, false), Struct_1(vec4<u32>(u_input.c.x, 1u, u_input.e.x, 4294967295u)), vec2<i32>(u_input.d, 1i)), vec2<i32>(-15692i, u_input.b.x)), vec2<bool>(true, false), func_4(Struct_1(vec4<u32>(112556u, u_input.c.x, 4294967295u, 29195u)), vec2<bool>(true, true), Struct_1(vec4<u32>(u_input.e.x, u_input.c.x, 63056u, u_input.e.x)), select(vec2<i32>(u_input.b.x, 1i), vec2<i32>(14572i, u_input.b.x), true)), select(vec2<i32>(-1i, -22802i), _wgslsmith_mult_vec2_i32(vec2<i32>(u_input.d, 34744i), vec2<i32>(35386i, 2147483647i)), true)), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(exp2(_wgslsmith_div_vec2_f32(vec2<f32>(-780f, -799f), vec2<f32>(1297f, -968f)))))));
    for (var var_1 = 0i; var_1 != 1i; var_1 -= 1i) {
        if (LOOP_COUNTERS[22u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
        var var_2 = func_9(_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(261f)) + 1504f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(-509f)) * _wgslsmith_f_op_f32(1427f * 535f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(-1309f)) - _wgslsmith_f_op_f32(-342f + 1330f)), 261f)), Struct_1(_wgslsmith_mod_vec4_u32(_wgslsmith_mod_vec4_u32(select(vec4<u32>(20626u, 1u, 0u, 4294967295u), var_0.a, true), ~vec4<u32>(4294967295u, 0u, 77522u, 11048u)), vec4<u32>(1u, firstLeadingBit(u_input.e.x), 4294967295u, 39066u))), Struct_1(firstLeadingBit(abs(firstLeadingBit(var_0.a)))), vec2<f32>(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -237f)), 771f)), 2185f)).a;
        var_1 = u_input.b.x;
        let var_3 = u_input.d;
        break;
    }
    switch (u_input.a | min(_wgslsmith_dot_vec4_i32(vec4<i32>(u_input.a, i32(-1i) * -35894i, -1i, abs(2147483647i)), vec4<i32>(-u_input.d, _wgslsmith_mod_i32(-1i, 37874i), u_input.a, ~48010i)), ~abs(i32(-2147483648)))) {
        case -4144i: {
            switch (4802i) {
                default: {
                }
            }
            let var_1 = Struct_1(vec4<u32>(~_wgslsmith_sub_u32(abs(1u), ~var_0.a.x), u_input.c.x, reverseBits(u_input.e.x), 6423u));
            let var_2 = func_4(Struct_1(var_0.a | func_4(var_1, vec2<bool>(true, true), var_1, select(u_input.b, u_input.b, vec2<bool>(true, false))).a), !func_8(true, func_4(var_0, vec2<bool>(true, true), func_10(Struct_1(var_0.a), var_1, var_0), _wgslsmith_div_vec2_i32(u_input.b, u_input.b))).yz, var_0, -(~max(min(vec2<i32>(u_input.d, u_input.b.x), vec2<i32>(i32(-2147483648), 1i)), vec2<i32>(1i, 0i) << (u_input.e.zx % vec2<u32>(32u)))));
        }
        case i32(-2147483648): {
        }
        default: {
            let var_1 = ~firstTrailingBit(_wgslsmith_div_vec3_u32(~(~var_0.a.ywx), vec3<u32>(u_input.c.x | 54955u, ~55613u, var_0.a.x)));
            let var_2 = vec2<bool>(true, true | (true && func_6().x));
        }
    }
    let var_1 = func_10(func_4(var_0, func_8(true, func_9(_wgslsmith_f_op_vec4_f32(step(vec4<f32>(158f, -1000f, 1400f, -520f), vec4<f32>(-509f, -452f, -1130f, 945f))), func_10(var_0, Struct_1(var_0.a), Struct_1(vec4<u32>(var_0.a.x, 77678u, var_0.a.x, 83998u))), var_0, _wgslsmith_f_op_vec2_f32(vec2<f32>(740f, 127f) - vec2<f32>(-231f, 1253f)))).wy, Struct_1(~var_0.a), _wgslsmith_mod_vec2_i32(firstTrailingBit(u_input.b), u_input.b)), var_0, var_0);
    switch (-select((u_input.b.x & _wgslsmith_add_i32(u_input.b.x, u_input.d)) << ((~4294967295u << (~var_0.a.x % 32u)) % 32u), _wgslsmith_mult_i32(firstLeadingBit(-u_input.a), 23656i), !(!func_7(vec4<f32>(-788f, 1082f, 790f, 1680f), vec4<bool>(true, true, false, true))))) {
        default: {
            let var_2 = -1286f;
            if (_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(var_2 * _wgslsmith_f_op_f32(exp2(var_2))))) > 375f) {
                var var_3 = !vec4<bool>(false, func_6().x, func_7(_wgslsmith_f_op_vec4_f32(max(vec4<f32>(216f, 723f, var_2, -1370f), _wgslsmith_f_op_vec4_f32(-vec4<f32>(var_2, -532f, -1021f, var_2)))), vec4<bool>(true, true, true, true)), false);
                var_3 = vec4<bool>(!var_3.x || var_3.x, true, false, any(!select(func_6(), !vec4<bool>(var_3.x, var_3.x, var_3.x, false), vec4<bool>(var_3.x, var_3.x, var_3.x, var_3.x))));
            }
            let var_3 = var_0;
            var var_4 = Struct_1(vec4<u32>(var_3.a.x, 0u, _wgslsmith_div_u32(func_9(vec4<f32>(var_2, var_2, -2155f, var_2), var_0, func_9(vec4<f32>(var_2, var_2, 891f, -696f), var_3, Struct_1(vec4<u32>(var_1.a.x, 8385u, var_1.a.x, var_0.a.x)), vec2<f32>(-282f, var_2)), _wgslsmith_f_op_vec2_f32(vec2<f32>(var_2, var_2) * vec2<f32>(703f, var_2))).a.x, ~(~50169u)), ~(~(u_input.c.x >> (var_3.a.x % 32u)))));
            switch (u_input.a) {
                case i32(-2147483648): {
                    var var_5 = var_2;
                }
                case -28982i: {
                    var var_5 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(-898f, var_2, var_2, 1037f))), _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(-vec4<f32>(var_2, -558f, -156f, 619f)), _wgslsmith_f_op_vec4_f32(step(vec4<f32>(693f, var_2, var_2, 108f), vec4<f32>(var_2, var_2, 1276f, 1099f))), all(vec3<bool>(false, true, true))))))) * vec4<f32>(_wgslsmith_f_op_f32(f32(-1f) * -785f), 279f, var_2, _wgslsmith_f_op_f32(f32(-1f) * -1037f)));
                    var var_6 = _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-var_2)));
                    var var_7 = _wgslsmith_mod_u32(0u, ~firstLeadingBit(0u));
                    var_6 = _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(1000f * _wgslsmith_div_f32(_wgslsmith_f_op_f32(step(var_5.x, _wgslsmith_f_op_f32(-744f))), _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-var_2)))))));
                    var var_8 = false;
                }
                case 1i: {
                    var var_5 = u_input.a;
                    var var_6 = func_4(var_3, !select(vec2<bool>(false, false), vec2<bool>(true, true), true), func_9(_wgslsmith_f_op_vec4_f32(func_3()), Struct_1(func_4(func_9(vec4<f32>(var_2, 1000f, var_2, var_2), var_0, var_1, vec2<f32>(var_2, -544f)), vec2<bool>(false, true), var_0, u_input.b).a), var_3, _wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(f32(-1f) * -197f), 1822f))), _wgslsmith_mod_vec2_i32(-firstTrailingBit(_wgslsmith_mult_vec2_i32(vec2<i32>(u_input.b.x, -1i), vec2<i32>(u_input.b.x, u_input.a))), _wgslsmith_sub_vec2_i32(vec2<i32>(u_input.d >> (25205u % 32u), firstLeadingBit(-26581i)), u_input.b)));
                    var var_7 = false;
                    var var_8 = Struct_1(countOneBits(func_10(Struct_1(~vec4<u32>(var_3.a.x, 0u, 0u, 1u)), func_10(Struct_1(var_3.a), Struct_1(var_0.a), func_10(var_3, var_3, var_1)), Struct_1(vec4<u32>(var_0.a.x, var_4.a.x, u_input.c.x, 39489u))).a));
                    var_6 = func_10(func_9(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(402f, -1063f, var_2, 873f)), _wgslsmith_f_op_vec4_f32(round(vec4<f32>(var_2, 1185f, 659f, -836f)))), var_1, var_3, _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(floor(vec2<f32>(var_2, -659f)))))), func_4(var_1, vec2<bool>(!func_8(false, var_1).x, true), Struct_1(abs(vec4<u32>(7027u, var_3.a.x, 22694u, 71945u))), _wgslsmith_div_vec2_i32(firstTrailingBit(-u_input.b), _wgslsmith_sub_vec2_i32(countOneBits(u_input.b), u_input.b))), Struct_1(var_1.a));
                }
                case 4487i: {
                }
                default: {
                    var var_5 = var_0;
                }
            }
        }
    }
    return func_4(Struct_1(select(~_wgslsmith_div_vec4_u32(var_0.a, vec4<u32>(var_1.a.x, 1u, 1u, var_1.a.x)), _wgslsmith_mult_vec4_u32(~vec4<u32>(1u, u_input.e.x, 38871u, u_input.e.x), var_1.a), func_8(true, var_1))), vec2<bool>(true, true), Struct_1(vec4<u32>(9791u, var_1.a.x, abs(u_input.e.x) & firstLeadingBit(76216u), ~52018u)), func_5(min(_wgslsmith_dot_vec2_i32(vec2<i32>(0i, u_input.b.x), u_input.b), min(-17178i, 1i)) < 1i).yy);
}

fn func_1() -> Struct_1 {
    loop {
        if (LOOP_COUNTERS[23u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
    }
    let var_0 = func_2();
    let var_1 = _wgslsmith_mult_u32((_wgslsmith_mod_u32(min(1u, var_0.a.x), 80130u) | (u_input.c.x >> (~var_0.a.x % 32u))) >> (~30639u % 32u), u_input.c.x);
    if (any(select(vec4<bool>(true, true, true, true), func_8(select(true, true, u_input.b.x >= 2147483647i), var_0), true))) {
    }
    var var_2 = var_0;
    return func_9(vec4<f32>(1f, 1f, 1f, 1f), Struct_1(abs(min(func_2().a, ~var_2.a))), func_2(), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(min(vec2<f32>(292f, 1336f), vec2<f32>(1558f, -1651f))), _wgslsmith_f_op_vec2_f32(vec2<f32>(-943f, 580f) + vec2<f32>(-864f, -668f)))) * _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(-1679f, -171f))))));
}

@compute
@workgroup_size(1)
fn main() {
    for (var var_0 = i32(-2147483648); var_0 == -11996i; var_0 += 1i) {
        if (LOOP_COUNTERS[24u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
        var var_1 = !(!(!vec4<bool>(all(vec2<bool>(false, true)), false, any(vec3<bool>(true, false, true)), 2147483647i >= u_input.b.x)));
    }
    switch (_wgslsmith_add_i32(select(_wgslsmith_div_i32(u_input.b.x, -2633i), _wgslsmith_dot_vec3_i32(vec3<i32>(83684i, u_input.d, 0i), _wgslsmith_clamp_vec3_i32(vec3<i32>(-1i, 246i, -45078i), vec3<i32>(1i, u_input.a, u_input.d), vec3<i32>(u_input.b.x, i32(-2147483648), -41450i))), true), _wgslsmith_mult_i32(-37797i, u_input.b.x)) & _wgslsmith_dot_vec2_i32(-_wgslsmith_add_vec2_i32(u_input.b, vec2<i32>(u_input.a, -1i)), vec2<i32>(u_input.d, _wgslsmith_sub_i32(1i, i32(-1i) * -30742i)))) {
        case 0i: {
            switch (min(_wgslsmith_add_i32(u_input.d, (countOneBits(0i) << (u_input.e.x % 32u)) >> (((u_input.e.x << (u_input.e.x % 32u)) | u_input.e.x) % 32u)), u_input.b.x)) {
                case 2147483647i: {
                    var var_0 = ~u_input.a;
                    var var_1 = _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(abs(-340f))))) + -291f)));
                    var var_2 = u_input.c.x | _wgslsmith_div_u32(_wgslsmith_add_u32(~firstTrailingBit(4294967295u), 4294967295u), 40145u);
                    let var_3 = func_1();
                }
                case -1i: {
                    var var_0 = Struct_1(vec4<u32>(u_input.c.x, func_2().a.x, func_1().a.x, ~20029u));
                    let var_1 = vec3<bool>(true, true, true);
                    var var_2 = func_4(Struct_1(vec4<u32>(~u_input.e.x, var_0.a.x, var_0.a.x, firstTrailingBit(var_0.a.x << (u_input.c.x % 32u)))), func_8(!func_6().x, func_2()).yz, Struct_1(_wgslsmith_mod_vec4_u32(vec4<u32>(~7936u, func_9(vec4<f32>(-143f, 1000f, 838f, 1291f), Struct_1(var_0.a), Struct_1(vec4<u32>(2082u, 4294967295u, 21010u, 46610u)), vec2<f32>(1365f, 1000f)).a.x, 1u, u_input.e.x), vec4<u32>(_wgslsmith_add_u32(var_0.a.x, var_0.a.x), ~9047u, u_input.c.x, var_0.a.x >> (36569u % 32u)))), func_5(!(!(u_input.d >= 0i))).wx);
                }
                case -10312i: {
                    var var_0 = countOneBits(u_input.e.x);
                    var_0 = 66355u;
                    var_0 = u_input.c.x;
                }
                default: {
                    var var_0 = !vec4<bool>(false, func_8(~u_input.e.x <= (56796u | u_input.e.x), func_9(_wgslsmith_div_vec4_f32(vec4<f32>(1602f, 335f, -673f, 1391f), vec4<f32>(-612f, 1148f, -1850f, 1027f)), Struct_1(vec4<u32>(1u, 34291u, 70871u, u_input.c.x)), func_9(vec4<f32>(929f, -1291f, 1009f, 370f), Struct_1(vec4<u32>(1u, 13181u, 62528u, 1u)), Struct_1(vec4<u32>(u_input.e.x, 50944u, 38620u, u_input.c.x)), vec2<f32>(225f, 305f)), _wgslsmith_f_op_vec2_f32(-vec2<f32>(954f, -517f)))).x, true, !select(false, true, false) & true);
                    var var_1 = func_1();
                    var var_2 = any(!vec4<bool>(true, !(u_input.b.x >= 11871i), var_0.x, true));
                }
            }
            let var_0 = _wgslsmith_div_i32(u_input.a, ~(-u_input.a));
        }
        default: {
            if (true) {
                var var_0 = _wgslsmith_f_op_f32(f32(-1f) * -2463f);
                var_0 = _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-133f)));
            }
            loop {
                if (LOOP_COUNTERS[25u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
                let var_0 = vec4<bool>(any(vec4<bool>(any(vec2<bool>(true, false)) | all(vec4<bool>(false, true, false, false)), !select(true, true, false), true, all(select(vec4<bool>(false, true, true, false), vec4<bool>(true, true, false, true), true)))), func_6().x, true, false);
                var var_1 = func_4(Struct_1(select(select(_wgslsmith_mult_vec4_u32(vec4<u32>(u_input.e.x, 61447u, 7287u, 4294967295u), vec4<u32>(u_input.e.x, u_input.c.x, u_input.e.x, 53808u)), vec4<u32>(0u, 4294967295u, u_input.c.x, u_input.e.x), var_0.x), select(firstTrailingBit(vec4<u32>(u_input.c.x, 1u, u_input.c.x, 4294967295u)), func_10(Struct_1(vec4<u32>(u_input.e.x, u_input.e.x, 33212u, u_input.e.x)), Struct_1(vec4<u32>(29667u, 4294967295u, u_input.e.x, u_input.c.x)), Struct_1(vec4<u32>(u_input.c.x, 33661u, 21532u, u_input.e.x))).a, u_input.e.x > 1u), !vec4<bool>(var_0.x, var_0.x, true, var_0.x))), func_8(true, Struct_1(abs(_wgslsmith_sub_vec4_u32(vec4<u32>(0u, u_input.c.x, u_input.c.x, u_input.c.x), vec4<u32>(u_input.e.x, 4294967295u, u_input.c.x, u_input.e.x))))).wz, Struct_1(~_wgslsmith_div_vec4_u32(vec4<u32>(u_input.e.x, 10096u, 13175u, u_input.c.x), ~vec4<u32>(16747u, 135313u, u_input.c.x, u_input.c.x))), u_input.b);
                let var_2 = select(func_8(var_0.x, func_10(func_4(func_4(Struct_1(vec4<u32>(u_input.e.x, var_1.a.x, 16016u, var_1.a.x)), var_0.zw, Struct_1(var_1.a), vec2<i32>(-1i, -16151i)), vec2<bool>(true, true), func_10(Struct_1(var_1.a), Struct_1(var_1.a), Struct_1(var_1.a)), u_input.b), Struct_1(firstTrailingBit(var_1.a)), func_4(Struct_1(var_1.a), select(var_0.zz, var_0.wz, var_0.xw), Struct_1(var_1.a), -vec2<i32>(u_input.b.x, 50433i)))).wxx, !func_6().zzx, (func_2().a.x ^ u_input.c.x) >= ~(~29773u));
                continue;
            }
            let var_0 = 515f;
        }
    }
    let var_0 = _wgslsmith_clamp_u32(~u_input.e.x, _wgslsmith_mod_u32(~(~_wgslsmith_dot_vec2_u32(u_input.e.xy, vec2<u32>(u_input.c.x, 10281u))), u_input.e.x), u_input.e.x);
    switch (~(-11355i)) {
        case 34267i: {
            let var_1 = _wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(abs(vec3<f32>(_wgslsmith_f_op_f32(max(_wgslsmith_div_f32(1486f, 777f), _wgslsmith_div_f32(-1874f, 892f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-2459f - -498f) - 1f), _wgslsmith_f_op_f32(-712f))))));
        }
        default: {
            let var_1 = select(_wgslsmith_clamp_vec4_i32(vec4<i32>(-27193i, _wgslsmith_dot_vec2_i32(vec2<i32>(7057i, u_input.b.x) >> (vec2<u32>(var_0, 13745u) % vec2<u32>(32u)), _wgslsmith_sub_vec2_i32(vec2<i32>(78979i, 0i), u_input.b)), u_input.d, i32(-1i) * 0i), _wgslsmith_mult_vec4_i32(countOneBits(select(vec4<i32>(i32(-2147483648), u_input.b.x, 0i, u_input.d), vec4<i32>(u_input.b.x, u_input.a, u_input.d, i32(-2147483648)), vec4<bool>(false, true, false, false))), _wgslsmith_clamp_vec4_i32(~vec4<i32>(u_input.b.x, 65010i, 0i, u_input.a), func_5(true), _wgslsmith_sub_vec4_i32(vec4<i32>(u_input.b.x, -15107i, 0i, -44780i), vec4<i32>(u_input.b.x, -5620i, -1i, u_input.b.x)))), firstTrailingBit(vec4<i32>(-30912i, max(0i, 14646i), firstTrailingBit(u_input.d), i32(-1i) * -19918i))), abs(vec4<i32>(_wgslsmith_mult_i32(u_input.b.x, u_input.b.x), u_input.b.x, -u_input.d, u_input.d)) | ~(~(~vec4<i32>(7363i, 0i, u_input.d, u_input.a))), vec4<bool>(true, true, true, true));
            let var_2 = Struct_1(vec4<u32>(reverseBits(_wgslsmith_sub_u32(12941u, var_0)), ~(~u_input.e.x), 8162u & u_input.c.x, 1u) ^ ~vec4<u32>(~var_0, _wgslsmith_sub_u32(var_0, u_input.c.x), var_0, max(4294967295u, 0u)));
            let var_3 = var_2;
            if (true) {
                let var_4 = vec4<f32>(-2635f, _wgslsmith_f_op_f32(-1000f), -801f, _wgslsmith_f_op_f32(ceil(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(752f - -2206f)), _wgslsmith_f_op_f32(f32(-1f) * -590f)))));
                let var_5 = func_2().a.zyw;
                let var_6 = vec3<u32>(1u, ~4294967295u, reverseBits(firstTrailingBit(1640u)));
                let var_7 = var_2;
                var var_8 = firstLeadingBit(~(-(~func_5(true).zxz)));
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[26u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
        let var_1 = ~(~(~u_input.c.x));
        switch (36245i) {
            case -1i: {
                var var_2 = false;
            }
            case -27221i: {
                let var_2 = Struct_1(_wgslsmith_div_vec4_u32(func_9(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-777f, -1906f, 791f, 1000f)), Struct_1(~vec4<u32>(1u, 8078u, 12263u, u_input.e.x)), Struct_1(vec4<u32>(var_0, u_input.e.x, 2933u, 13378u)), vec2<f32>(_wgslsmith_f_op_f32(f32(-1f) * -1052f), _wgslsmith_f_op_f32(-1097f * -1429f))).a, ~vec4<u32>(firstLeadingBit(var_1), _wgslsmith_add_u32(var_0, 4294967295u), var_1, 1u >> (u_input.c.x % 32u))));
            }
            case 2147483647i: {
            }
            default: {
                var var_2 = Struct_1(vec4<u32>(~(~(~var_1)), 30882u, var_0, var_1 & func_9(_wgslsmith_f_op_vec4_f32(round(vec4<f32>(-667f, -594f, 504f, -1956f))), Struct_1(vec4<u32>(4294967295u, 0u, 4294967295u, var_1)), Struct_1(vec4<u32>(var_1, 1u, 29218u, 27591u)), vec2<f32>(-140f, -845f)).a.x));
            }
        }
    }
    let var_1 = 54088u;
    let var_2 = Struct_1(select(_wgslsmith_div_vec4_u32(~vec4<u32>(var_0, var_1, var_1, 22307u), vec4<u32>(countOneBits(11870u), _wgslsmith_div_u32(0u, u_input.e.x), 64474u, 45705u)), vec4<u32>(0u, abs(19233u), ~u_input.e.x, u_input.c.x), true));
    var var_3 = var_2.a;
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(1134f - -1224f) + _wgslsmith_f_op_f32(min(1000f, 1000f))) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -411f))), 944f, any(!select(vec3<bool>(true, false, true), vec3<bool>(true, false, false), vec3<bool>(true, false, true))))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1439f + _wgslsmith_f_op_f32(f32(-1f) * -1087f)) + _wgslsmith_f_op_f32(min(-1461f, _wgslsmith_f_op_f32(1030f * -724f)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1394f + -1000f)))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(sign(vec3<f32>(530f, 1415f, -1047f))), _wgslsmith_f_op_vec3_f32(-vec3<f32>(-543f, -1332f, 982f)))) - _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(abs(vec3<f32>(162f, 125f, -675f))) * vec3<f32>(-1224f, 1484f, -1671f))) + _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(-206f, -339f, 1000f) * vec3<f32>(-148f, -765f, 2380f))))));
}

`;