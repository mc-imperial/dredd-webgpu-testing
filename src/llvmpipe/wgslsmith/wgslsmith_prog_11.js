export const input = [207,98,80,108,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [207,98,80,108,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[207,98,80,108]}
// Seed: 7994549606210646788

struct Struct_1 {
    a: i32,
    b: vec3<f32>,
}

struct Struct_2 {
    a: Struct_1,
    b: vec3<f32>,
    c: bool,
    d: i32,
    e: f32,
}

struct Struct_3 {
    a: bool,
    b: Struct_2,
}

struct Struct_4 {
    a: vec3<u32>,
    b: Struct_1,
    c: vec2<u32>,
}

struct UniformBuffer {
    a: u32,
}

struct StorageBuffer {
    a: vec4<u32>,
    b: i32,
    c: f32,
    d: i32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: u32;

var<private> LOOP_COUNTERS: array<u32, 23>;

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn func_6(arg_0: vec4<f32>) -> vec3<bool> {
    let var_0 = u_input.a;
    var var_1 = vec2<f32>(_wgslsmith_f_op_f32(sign(arg_0.x)), _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(arg_0.x + _wgslsmith_f_op_f32(arg_0.x * 1140f)))))));
    if (true) {
        switch (firstLeadingBit(~1i)) {
            case 2147483647i: {
                var var_2 = Struct_1(~(-1i), _wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(round(-283f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1138f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -530f)))));
            }
            default: {
                let var_2 = Struct_2(Struct_1(_wgslsmith_mod_i32(28106i, ~(-7622i)), vec3<f32>(_wgslsmith_f_op_f32(round(var_1.x)), var_1.x, _wgslsmith_f_op_f32(sign(arg_0.x)))), vec3<f32>(1138f, _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-1660f * 103f))), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(trunc(arg_0.x)), _wgslsmith_f_op_f32(-arg_0.x))), select(select(true, false, false), true, all(vec3<bool>(true, false, false))))), _wgslsmith_f_op_f32(abs(arg_0.x))), !all(vec3<bool>(true, true, true)), reverseBits(-firstLeadingBit(~1i)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(arg_0.x)))));
            }
        }
        var var_2 = _wgslsmith_dot_vec3_i32(vec3<i32>(_wgslsmith_dot_vec4_i32(vec4<i32>(i32(-2147483648), 1i, _wgslsmith_mod_i32(-7924i, -24498i), 0i), ~_wgslsmith_div_vec4_i32(vec4<i32>(i32(-2147483648), -1i, i32(-2147483648), 1i), vec4<i32>(2147483647i, 2147483647i, 27643i, 5420i))), 31225i, ~1i), max(~reverseBits(vec3<i32>(2940i, -12565i, -1034i)) ^ _wgslsmith_clamp_vec3_i32(countOneBits(vec3<i32>(-22326i, 0i, 54354i)), ~vec3<i32>(63574i, 1i, 1i), -vec3<i32>(0i, 22963i, 28983i)), vec3<i32>(-(~(-65753i)), firstTrailingBit(_wgslsmith_add_i32(-3671i, -1i)), 2147483647i)));
    }
    for (var var_2 = -4704i; u_input.a != var_0; var_2 -= 1i) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        let var_3 = _wgslsmith_f_op_f32(select(1668f, _wgslsmith_div_f32(_wgslsmith_div_f32(-179f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0.x))), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(exp2(var_1.x))))), true));
        continue;
    }
    global0 = u_input.a;
    return vec3<bool>(3579u > var_0, all(!select(vec3<bool>(false, false, true), vec3<bool>(true, true, true), select(vec3<bool>(true, true, true), vec3<bool>(true, true, false), vec3<bool>(false, true, true)))), select(true, true, all(vec2<bool>(any(vec3<bool>(false, false, true)), any(vec3<bool>(true, false, true))))));
}

fn func_5(arg_0: vec4<bool>, arg_1: f32) -> i32 {
    let var_0 = func_6(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(1080f, 896f, arg_1, arg_1))))));
    var var_1 = vec2<f32>(-1000f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -445f)))));
    var_1 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(max(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(vec2<f32>(-864f, 348f) - vec2<f32>(arg_1, 1048f))))), vec2<f32>(_wgslsmith_f_op_f32(-var_1.x), arg_1))));
    if (155f != _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(max(_wgslsmith_div_f32(var_1.x, _wgslsmith_f_op_f32(-1753f)), _wgslsmith_f_op_f32(1160f - arg_1))), _wgslsmith_f_op_f32(arg_1 - 1206f)))) {
        switch (~(-98788i)) {
            case 0i: {
                var_1 = vec2<f32>(547f, arg_1);
            }
            case 42964i: {
                var var_2 = Struct_1(_wgslsmith_div_i32(i32(-1i) * -(i32(-1i) * i32(-2147483648)), firstTrailingBit(-1i)), vec3<f32>(-1284f, 157f, _wgslsmith_f_op_f32(-116f)));
                let var_3 = -var_2.a >> (4294967295u % 32u);
                var_2 = Struct_1(-1i, _wgslsmith_f_op_vec3_f32(var_2.b + var_2.b));
                let var_4 = Struct_3(false, Struct_2(Struct_1(0i, _wgslsmith_f_op_vec3_f32(min(var_2.b, _wgslsmith_div_vec3_f32(vec3<f32>(-993f, arg_1, var_2.b.x), vec3<f32>(var_1.x, var_1.x, var_2.b.x))))), vec3<f32>(_wgslsmith_div_f32(var_1.x, _wgslsmith_f_op_f32(-var_1.x)), 1103f, _wgslsmith_f_op_f32(abs(477f))), all(!vec3<bool>(var_0.x, arg_0.x, var_0.x)), _wgslsmith_dot_vec4_i32(abs(min(vec4<i32>(var_2.a, i32(-2147483648), -1i, var_2.a), vec4<i32>(var_2.a, -12966i, var_2.a, i32(-2147483648)))), _wgslsmith_mod_vec4_i32(vec4<i32>(var_2.a, -21261i, -1i, -12613i), vec4<i32>(var_2.a, var_2.a, 32201i, var_3)) << (abs(vec4<u32>(u_input.a, u_input.a, 42883u, u_input.a)) % vec4<u32>(32u))), _wgslsmith_f_op_f32(step(var_2.b.x, -550f))));
            }
            case -22412i: {
                var_1 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_div_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-arg_1), _wgslsmith_f_op_f32(1000f + arg_1))), arg_1), vec2<f32>(-803f, var_1.x)));
                var var_2 = Struct_3(true, Struct_2(Struct_1(1i, vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -475f), _wgslsmith_f_op_f32(trunc(-2966f)), _wgslsmith_f_op_f32(arg_1 * var_1.x))), _wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(floor(vec3<f32>(-832f, arg_1, var_1.x))), _wgslsmith_f_op_vec3_f32(-vec3<f32>(var_1.x, var_1.x, 1048f))) - _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(max(vec3<f32>(-1000f, 267f, -1525f), vec3<f32>(arg_1, -1470f, -181f))))), true, _wgslsmith_mult_i32(_wgslsmith_sub_i32(countOneBits(2147483647i), ~(-27400i)), _wgslsmith_dot_vec2_i32(-vec2<i32>(32845i, -18431i), firstLeadingBit(vec2<i32>(33367i, -10545i)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(_wgslsmith_div_f32(var_1.x, -1205f))))));
            }
            default: {
                let var_2 = abs(-1i);
                var var_3 = ~_wgslsmith_sub_vec3_i32(~(~(-vec3<i32>(-1i, 30601i, 36614i))), vec3<i32>(-1i) * -abs(vec3<i32>(-46001i, 1i, var_2)));
                var var_4 = Struct_1(_wgslsmith_dot_vec4_i32(vec4<i32>(reverseBits(~var_2), _wgslsmith_sub_i32(~var_3.x, var_2), _wgslsmith_add_i32(_wgslsmith_sub_i32(44520i, 2147483647i), var_3.x), -var_3.x ^ var_2), min(firstTrailingBit(vec4<i32>(var_2, i32(-2147483648), -1i, 0i)), vec4<i32>(var_2, var_3.x, countOneBits(9408i), 72000i))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(floor(vec3<f32>(350f, 327f, arg_1)))) - _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(arg_1, arg_1, var_1.x) + vec3<f32>(arg_1, -300f, arg_1)) + vec3<f32>(549f, arg_1, arg_1)))));
                var var_5 = Struct_3(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(-2207f))) - _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-arg_1)))) >= -1193f, Struct_2(Struct_1(~abs(var_3.x), _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1434f, -1884f, 1000f)), var_4.b))), _wgslsmith_f_op_vec3_f32(vec3<f32>(2760f, _wgslsmith_f_op_f32(min(var_1.x, var_1.x)), var_4.b.x) * _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(var_4.b + vec3<f32>(-677f, arg_1, 118f)))), true, _wgslsmith_add_i32(10094i, var_3.x), -1054f));
                var_3 = _wgslsmith_mod_vec3_i32(~(vec3<i32>(-var_3.x, var_4.a, 2147483647i) << ((reverseBits(vec3<u32>(21232u, u_input.a, u_input.a)) << (vec3<u32>(69191u, u_input.a, u_input.a) % vec3<u32>(32u))) % vec3<u32>(32u))), _wgslsmith_add_vec3_i32(~(vec3<i32>(0i, var_4.a, var_2) | vec3<i32>(var_4.a, 5375i, 1i)), -vec3<i32>(~(-1i), _wgslsmith_add_i32(58527i, 10749i), -1i)));
            }
        }
        loop {
            if (LOOP_COUNTERS[1u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        }
    }
    global0 = 58959u;
    return ~max(~((34461i << (u_input.a % 32u)) >> (min(u_input.a, u_input.a) % 32u)), ~_wgslsmith_dot_vec3_i32(vec3<i32>(-15601i, i32(-2147483648), i32(-2147483648)), reverseBits(vec3<i32>(52891i, 2147483647i, 2147483647i))));
}

fn func_4() -> u32 {
    switch (~_wgslsmith_sub_i32(reverseBits(-24720i), func_5(vec4<bool>(true, true, true, true), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(floor(454f))))))) {
        case 32654i: {
        }
        case 60803i: {
            for (var var_0 = _wgslsmith_mod_i32(_wgslsmith_mod_i32(_wgslsmith_sub_i32(~0i, ~2147483647i), func_5(select(vec4<bool>(true, false, false, false), vec4<bool>(true, true, false, false), false), _wgslsmith_f_op_f32(round(-1498f)))), _wgslsmith_sub_i32(max(select(i32(-2147483648), -35159i, true), 1i), _wgslsmith_mod_i32(0i, 24057i))) >> (~(~(firstTrailingBit(u_input.a) | (u_input.a | 42714u))) % 32u); var_0 != 5735i; var_0 += 1i) {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
                let var_1 = vec3<bool>(true, true, true);
            }
            var var_0 = Struct_1(min(countOneBits(_wgslsmith_dot_vec2_i32(~vec2<i32>(9980i, 0i), countOneBits(vec2<i32>(1i, 1i)))), 1i), vec3<f32>(-448f, _wgslsmith_div_f32(-1000f, _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(trunc(1007f))))), _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1269f + 837f))))));
            return 118443u;
        }
        case -1i: {
        }
        default: {
            switch (0i) {
                default: {
                    var var_0 = Struct_1(_wgslsmith_div_i32(-1i >> (min(u_input.a, 1u) % 32u), _wgslsmith_clamp_i32(~_wgslsmith_sub_i32(1i, 42571i), 0i, -(i32(-1i) * -20474i))), vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -911f)) + 1392f), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(f32(-1f) * -318f))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-374f), _wgslsmith_f_op_f32(-414f))))));
                    let var_1 = Struct_3(!all(select(vec2<bool>(true, true), vec2<bool>(true, false), any(vec4<bool>(true, true, false, false)))), Struct_2(Struct_1(abs(~var_0.a), _wgslsmith_f_op_vec3_f32(var_0.b + _wgslsmith_f_op_vec3_f32(ceil(vec3<f32>(var_0.b.x, -1473f, var_0.b.x))))), vec3<f32>(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-var_0.b.x))), var_0.b.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1225f) * -147f)), true, var_0.a, var_0.b.x));
                    let var_2 = u_input.a;
                }
            }
            global0 = _wgslsmith_add_u32(~6093u, u_input.a);
            global0 = min(max(1u, u_input.a), 26960u);
        }
    }
    let var_0 = !select(!select(vec4<bool>(true, true, false, true), select(vec4<bool>(true, true, false, false), vec4<bool>(true, true, false, true), vec4<bool>(true, false, true, true)), vec4<bool>(true, true, true, true)), vec4<bool>(true, true, true, true), all(!select(vec2<bool>(true, false), vec2<bool>(true, true), true)));
    global0 = reverseBits(u_input.a);
    global0 = u_input.a;
    switch (~(-1i)) {
        case -35170i: {
            let var_1 = _wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-1f), _wgslsmith_f_op_f32(f32(-1f) * -790f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(sign(1464f)))) * 146f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(1030f + -358f) + 146f)), -1557f)));
            var var_2 = var_1.x;
            var_2 = _wgslsmith_f_op_f32(max(var_1.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(f32(-1f) * -1000f)))) * _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(-120f, -2777f)) * _wgslsmith_f_op_f32(1000f - var_1.x)), var_1.x, select(17908u > u_input.a, u_input.a != u_input.a, func_6(vec4<f32>(var_1.x, var_1.x, var_1.x, -518f)).x))))));
            switch (-_wgslsmith_clamp_i32(-(i32(-1i) * -41780i), ~(_wgslsmith_dot_vec2_i32(vec2<i32>(2147483647i, i32(-2147483648)), vec2<i32>(-4628i, i32(-2147483648))) << (~u_input.a % 32u)), reverseBits(~1i))) {
                default: {
                }
            }
            if (false) {
                let var_3 = Struct_3(!var_0.x, Struct_2(Struct_1(abs(~(i32(-2147483648))), _wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(var_1.zxx * vec3<f32>(var_1.x, var_1.x, var_1.x)), _wgslsmith_f_op_vec3_f32(step(vec3<f32>(971f, -1000f, var_1.x), vec3<f32>(var_1.x, 622f, -985f)))))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-529f, -490f, 277f)) - _wgslsmith_f_op_vec3_f32(max(vec3<f32>(-272f, -575f, var_1.x), vec3<f32>(var_1.x, 1252f, 208f))))), all(var_0.xyy), -85791i, -1000f));
                var var_4 = _wgslsmith_div_vec4_u32(vec4<u32>(4294967295u, ~(~1u), 9176u, ~(~u_input.a)), _wgslsmith_div_vec4_u32(abs(vec4<u32>(u_input.a, u_input.a, 34466u, 66493u)), max(select(vec4<u32>(u_input.a, u_input.a, u_input.a, u_input.a), vec4<u32>(u_input.a, 1u, 16808u, 4294967295u), var_0), ~vec4<u32>(u_input.a, 1u, 25571u, u_input.a))) ^ vec4<u32>(~(u_input.a ^ 4294967295u), firstTrailingBit(u_input.a), ~u_input.a, ~(~147u)));
            }
        }
        case 1i: {
            let var_1 = abs(_wgslsmith_sub_u32(_wgslsmith_dot_vec3_u32(~vec3<u32>(6726u, u_input.a, u_input.a), _wgslsmith_add_vec3_u32(vec3<u32>(u_input.a, u_input.a, 0u), vec3<u32>(3076u, u_input.a, u_input.a))), 12549u)) << (_wgslsmith_sub_u32(~_wgslsmith_add_u32(u_input.a, ~59316u), u_input.a ^ 0u) % 32u);
            for (; func_6(vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1000f - -1032f)) * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-507f + -464f))), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(sign(704f)), _wgslsmith_f_op_f32(f32(-1f) * -230f))), -537f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(245f, _wgslsmith_f_op_f32(floor(-811f))))))).x; ) {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
                let var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(-796f), _wgslsmith_f_op_f32(select(-1166f, 2036f, var_0.x))))) < _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(round(_wgslsmith_div_f32(818f, -626f))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(233f + 169f), _wgslsmith_f_op_f32(ceil(1083f))))), 288f));
                let var_3 = ~_wgslsmith_add_vec2_i32(_wgslsmith_div_vec2_i32(vec2<i32>(-1i, 2147483647i), vec2<i32>(1i, 1i)), vec2<i32>(_wgslsmith_mult_i32(1139i, -1i), _wgslsmith_mod_i32(-1i, i32(-2147483648))) ^ firstTrailingBit(~vec2<i32>(524i, -35927i)));
            }
            if (true) {
                var var_2 = vec4<u32>(u_input.a, abs(var_1) ^ max(var_1, u_input.a), ~u_input.a, 30003u) << ((firstLeadingBit(_wgslsmith_mod_vec4_u32(~vec4<u32>(u_input.a, 17637u, 33515u, var_1), firstLeadingBit(vec4<u32>(0u, 1u, var_1, 1u)))) ^ ~_wgslsmith_mult_vec4_u32(~vec4<u32>(var_1, u_input.a, var_1, 4294967295u), vec4<u32>(u_input.a, u_input.a, var_1, u_input.a))) % vec4<u32>(32u));
                var var_3 = vec4<i32>(_wgslsmith_mod_i32(1i, func_5(var_0, _wgslsmith_f_op_f32(min(1f, _wgslsmith_f_op_f32(f32(-1f) * -227f))))), -1i, ~0i, -1i);
            }
        }
        case -1i: {
            loop {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                let var_1 = 4294967295u;
                continue;
            }
            switch (~(-(i32(-1i) * -1i))) {
                case 0i: {
                    let var_1 = vec4<u32>(~19486u, _wgslsmith_mult_u32(reverseBits(reverseBits(~u_input.a)), ~(~(0u | u_input.a))), 19826u | firstLeadingBit(abs(_wgslsmith_clamp_u32(0u, u_input.a, u_input.a))), u_input.a);
                    let var_2 = vec3<u32>(4071u | u_input.a, 1u, _wgslsmith_add_u32(firstLeadingBit(u_input.a), _wgslsmith_add_u32(50410u, ~var_1.x)));
                    global0 = 1u;
                    var var_3 = Struct_3(var_0.x, Struct_2(Struct_1(8515i, _wgslsmith_f_op_vec3_f32(vec3<f32>(-1620f, 2593f, -1623f) - _wgslsmith_f_op_vec3_f32(-vec3<f32>(-478f, -1484f, -291f)))), vec3<f32>(_wgslsmith_f_op_f32(sign(-1000f)), 658f, -1000f), true, -(~(~93929i)), _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(max(270f, _wgslsmith_f_op_f32(ceil(-1512f))))))));
                }
                case -1i: {
                    var var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1520f * -762f)) + 1f)));
                    let var_2 = _wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(2620f, -1316f)) + vec2<f32>(1425f, -157f))))));
                }
                case 2147483647i: {
                    var var_1 = Struct_3(_wgslsmith_dot_vec3_u32(vec3<u32>(u_input.a, max(u_input.a, 12811u), ~0u), ~(~vec3<u32>(u_input.a, 0u, u_input.a))) != u_input.a, Struct_2(Struct_1(_wgslsmith_add_i32(abs(2147483647i), 0i), vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -330f), _wgslsmith_f_op_f32(f32(-1f) * -118f), _wgslsmith_f_op_f32(min(1401f, 796f)))), _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(vec3<f32>(-1383f, 942f, -238f) - _wgslsmith_f_op_vec3_f32(floor(vec3<f32>(-1000f, 673f, -1540f)))), vec3<f32>(_wgslsmith_f_op_f32(max(-325f, -627f)), _wgslsmith_f_op_f32(-1038f), _wgslsmith_div_f32(130f, -186f)), var_0.x)), all(vec4<bool>(var_0.x, true, true, true)), 11047i, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(trunc(-1180f)), _wgslsmith_f_op_f32(515f - 1502f), true)))));
                    var var_2 = max(min(vec4<u32>(_wgslsmith_mult_u32(~u_input.a, u_input.a), firstTrailingBit(79195u), ~u_input.a, ~(~14508u)), vec4<u32>(u_input.a, u_input.a, abs(min(u_input.a, 1u)), ~18995u >> (1u % 32u))), ~select(_wgslsmith_sub_vec4_u32(countOneBits(vec4<u32>(u_input.a, u_input.a, u_input.a, 4294967295u)), vec4<u32>(15958u, u_input.a, u_input.a, u_input.a)), countOneBits(abs(vec4<u32>(1958u, u_input.a, u_input.a, u_input.a))), false));
                    var_1 = Struct_3(var_1.b.c, Struct_2(Struct_1(var_1.b.a.a, _wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(-var_1.b.b)))), _wgslsmith_f_op_vec3_f32(floor(var_1.b.b)), var_1.b.c | all(select(var_0, vec4<bool>(var_1.b.c, true, false, true), var_0)), _wgslsmith_add_i32(~var_1.b.d, var_1.b.a.a & -18531i) ^ firstLeadingBit(0i), _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(2751f * -210f))))));
                    global0 = ~countOneBits(var_2.x);
                }
                default: {
                }
            }
            global0 = _wgslsmith_dot_vec2_u32(_wgslsmith_mod_vec2_u32(max(vec2<u32>(_wgslsmith_sub_u32(u_input.a, u_input.a), ~u_input.a), vec2<u32>(u_input.a, 0u)), firstTrailingBit(min(vec2<u32>(u_input.a, 4294967295u) & vec2<u32>(4294967295u, 0u), _wgslsmith_clamp_vec2_u32(vec2<u32>(u_input.a, 27833u), vec2<u32>(102376u, u_input.a), vec2<u32>(u_input.a, u_input.a))))), select(~(~(~vec2<u32>(18158u, 4294967295u))), ~min(_wgslsmith_sub_vec2_u32(vec2<u32>(u_input.a, 64694u), vec2<u32>(4294967295u, u_input.a)), ~vec2<u32>(u_input.a, 41241u)), func_6(_wgslsmith_f_op_vec4_f32(step(vec4<f32>(1f, 1f, 1f, 1f), _wgslsmith_f_op_vec4_f32(-vec4<f32>(-1183f, 243f, -578f, -570f))))).xx));
            if (select(!(!var_0.x), !var_0.x, all(func_6(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(max(vec4<f32>(419f, -2275f, -1751f, 1000f), vec4<f32>(-750f, -775f, 749f, 1000f)))))))) {
                global0 = u_input.a;
                global0 = max(u_input.a, ~0u);
                global0 = u_input.a;
            }
        }
        case 45166i: {
            switch (_wgslsmith_mod_i32(i32(-2147483648) ^ (~_wgslsmith_mult_i32(-1i, 24879i) ^ -select(56239i, 48709i, true)), -54006i)) {
                case 2147483647i: {
                    let var_1 = _wgslsmith_sub_vec3_i32(~vec3<i32>(0i, abs(0i), -reverseBits(1i)), ~(~_wgslsmith_add_vec3_i32(_wgslsmith_sub_vec3_i32(vec3<i32>(-28138i, 1i, 7835i), vec3<i32>(i32(-2147483648), -1i, 1i)), vec3<i32>(-1i, 1i, 4982i) << (vec3<u32>(u_input.a, u_input.a, 0u) % vec3<u32>(32u)))));
                    let var_2 = Struct_1(0i, _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(vec3<f32>(-1283f, -1227f, 870f), _wgslsmith_f_op_vec3_f32(vec3<f32>(-349f, 987f, 411f) + vec3<f32>(-836f, 675f, 162f))))));
                    global0 = u_input.a;
                    global0 = abs(_wgslsmith_dot_vec4_u32(_wgslsmith_add_vec4_u32(~min(vec4<u32>(1u, u_input.a, u_input.a, u_input.a), vec4<u32>(4294967295u, 76209u, 60582u, 55782u)), vec4<u32>(abs(79453u), u_input.a, u_input.a | 86347u, _wgslsmith_add_u32(u_input.a, u_input.a))), ~firstLeadingBit(~vec4<u32>(u_input.a, u_input.a, u_input.a, 0u))));
                }
                case 3832i: {
                    global0 = 16988u;
                    let var_1 = Struct_3(true, Struct_2(Struct_1(2147483647i, _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(select(vec3<f32>(509f, 562f, -1297f), vec3<f32>(1292f, 304f, 323f), vec3<bool>(var_0.x, false, false))) + vec3<f32>(495f, -1140f, 845f))), _wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(566f, 2029f, -1000f))), vec3<f32>(_wgslsmith_f_op_f32(-1928f), _wgslsmith_f_op_f32(-2227f), 540f))), !any(vec2<bool>(var_0.x, var_0.x)), 5142i, 1f));
                    var var_2 = Struct_4(vec3<u32>(firstTrailingBit(_wgslsmith_dot_vec4_u32(vec4<u32>(u_input.a, 0u, 7790u, 26483u), ~vec4<u32>(u_input.a, 4294967295u, 8070u, 0u))), _wgslsmith_dot_vec4_u32(~(~vec4<u32>(u_input.a, 4294967295u, u_input.a, u_input.a)), _wgslsmith_mod_vec4_u32(vec4<u32>(26882u, 66149u, u_input.a, u_input.a), vec4<u32>(u_input.a, 61943u, u_input.a, u_input.a)) | reverseBits(vec4<u32>(57648u, 13322u, 43147u, u_input.a))), _wgslsmith_clamp_u32(abs(32998u) ^ _wgslsmith_add_u32(109240u, u_input.a), u_input.a, _wgslsmith_mult_u32(5031u, min(u_input.a, u_input.a)))), Struct_1(-(~var_1.b.a.a), _wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(-var_1.b.a.b))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(var_1.b.e, var_1.b.a.b.x, 294f) * vec3<f32>(var_1.b.a.b.x, var_1.b.e, 1904f)) - _wgslsmith_div_vec3_f32(var_1.b.a.b, var_1.b.a.b))))), reverseBits(~firstTrailingBit(~vec2<u32>(3724u, 35001u))));
                    var var_3 = Struct_4(abs(vec3<u32>(4294967295u, ~abs(u_input.a), max(51403u, _wgslsmith_dot_vec3_u32(var_2.a, var_2.a)))), Struct_1(_wgslsmith_div_i32(~var_2.b.a, 4156i), _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(227f, var_2.b.b.x, var_1.b.a.b.x))), var_2.b.b, var_0.x))), ~var_2.c);
                }
                case 1i: {
                    global0 = _wgslsmith_dot_vec2_u32(vec2<u32>(firstTrailingBit(u_input.a), 64256u), firstTrailingBit(select(vec2<u32>(u_input.a, u_input.a), vec2<u32>(4294967295u, u_input.a), var_0.yw) << (vec2<u32>(41345u, u_input.a) % vec2<u32>(32u))) << (~vec2<u32>(~4294967295u, u_input.a) % vec2<u32>(32u)));
                    var var_1 = -177f;
                    var var_2 = vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(1731f, 205f))) * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -385f) - _wgslsmith_f_op_f32(min(1000f, -1196f))))), -1486f, _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-1478f))), 1000f);
                }
                default: {
                    var var_1 = Struct_3((_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -349f)) < _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1000f * 1128f) + _wgslsmith_f_op_f32(step(-234f, -321f)))) & (-max(2147483647i, -1i) < func_5(!vec4<bool>(var_0.x, false, var_0.x, true), _wgslsmith_f_op_f32(floor(201f)))), Struct_2(Struct_1(_wgslsmith_dot_vec3_i32(_wgslsmith_sub_vec3_i32(vec3<i32>(-13084i, 2147483647i, 40423i), vec3<i32>(0i, 2147483647i, 41128i)), vec3<i32>(-19601i, -6742i, 0i)), vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -780f), -1309f, _wgslsmith_f_op_f32(-109f))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-vec3<f32>(735f, 530f, -551f)), _wgslsmith_f_op_vec3_f32(-vec3<f32>(1705f, 198f, -421f)), !vec3<bool>(false, false, var_0.x)))), true, countOneBits(_wgslsmith_dot_vec2_i32(reverseBits(vec2<i32>(23286i, i32(-2147483648))), ~vec2<i32>(1i, 24548i))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(f32(-1f) * -925f))) + 1498f)));
                    let var_2 = Struct_3(var_0.x || (4294967295u < (1u & ~u_input.a)), Struct_2(Struct_1(1i, _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(max(vec3<f32>(-460f, var_1.b.e, var_1.b.b.x), vec3<f32>(var_1.b.a.b.x, var_1.b.e, var_1.b.e))), var_1.b.a.b)), var_1.b.a.b, any(vec3<bool>(true, true, true)), -_wgslsmith_mult_i32(_wgslsmith_mult_i32(var_1.b.d, -964i), 1i), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(f32(-1f) * -130f))))));
                    var var_3 = 8455u;
                }
            }
            global0 = u_input.a;
            let var_1 = ~min(_wgslsmith_sub_vec4_i32(vec4<i32>(1i, 1i, 1i, 1i), vec4<i32>(0i, 1i, _wgslsmith_dot_vec2_i32(vec2<i32>(20627i, -3718i), vec2<i32>(-1i, 17577i)), min(24144i, i32(-2147483648)))), firstLeadingBit(vec4<i32>(~(-33314i), 1i, -2147483647i, 1i)));
        }
        default: {
        }
    }
    return _wgslsmith_add_u32(_wgslsmith_dot_vec2_u32(~vec2<u32>(u_input.a, u_input.a), reverseBits(vec2<u32>(u_input.a, 4294967295u) | vec2<u32>(1u, u_input.a))), 1u) >> (u_input.a % 32u);
}

fn func_3(arg_0: vec2<f32>) -> vec3<f32> {
    global0 = u_input.a;
    global0 = ~u_input.a;
    var var_0 = u_input.a;
    global0 = func_4();
    global0 = ~12972u;
    return _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(1039f, 374f, 763f))) + vec3<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(ceil(arg_0.x)), _wgslsmith_f_op_f32(abs(-794f))), _wgslsmith_f_op_f32(-1320f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(arg_0.x))))));
}

fn func_7(arg_0: vec3<f32>) -> f32 {
    let var_0 = _wgslsmith_f_op_f32(144f + _wgslsmith_f_op_f32(trunc(-784f)));
    for (var var_1 = 2147483647i; var_1 == i32(-2147483648); var_1 -= 1i) {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
    }
    var var_1 = Struct_2(Struct_1(_wgslsmith_mult_i32(~1i, ~(i32(-2147483648) << (u_input.a % 32u))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(floor(_wgslsmith_div_vec3_f32(vec3<f32>(arg_0.x, var_0, -571f), vec3<f32>(var_0, var_0, 1069f)))) + _wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(arg_0 * arg_0))))), arg_0, true, ~0i, -1691f);
    var var_2 = ~(_wgslsmith_mod_vec2_i32(-(~vec2<i32>(var_1.a.a, 20493i)), -_wgslsmith_mod_vec2_i32(vec2<i32>(var_1.d, 1i), vec2<i32>(2147483647i, var_1.d))) >> ((~max(vec2<u32>(u_input.a, 1046u), vec2<u32>(u_input.a, 4294967295u)) << (~(vec2<u32>(u_input.a, 1u) << (vec2<u32>(1u, 42635u) % vec2<u32>(32u))) % vec2<u32>(32u))) % vec2<u32>(32u)));
    for (var var_3 = -45438i; var_1.d == -(~func_5(vec4<bool>(false, var_1.c, var_1.c, var_1.c), var_0) & var_1.d); var_3 -= 1i) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        loop {
            if (LOOP_COUNTERS[7u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
            var_1 = Struct_2(Struct_1(6649i, _wgslsmith_f_op_vec3_f32(exp2(_wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(-var_1.a.b)))))), vec3<f32>(_wgslsmith_f_op_f32(sign(-524f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_div_f32(-867f, -1136f))), _wgslsmith_f_op_f32(sign(var_1.b.x))), all(!(!vec2<bool>(var_1.c, false))), i32(-1i) * -((2147483647i ^ var_2.x) >> (u_input.a % 32u)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-908f - 306f), _wgslsmith_f_op_f32(exp2(var_1.b.x))))));
            var_2 = -(-_wgslsmith_div_vec2_i32(reverseBits(vec2<i32>(var_2.x, var_1.d)), _wgslsmith_mult_vec2_i32(vec2<i32>(i32(-2147483648), 9347i), vec2<i32>(-1i, var_2.x))) | -(-vec2<i32>(var_1.d, -23058i) << (~vec2<u32>(55517u, 69137u) % vec2<u32>(32u))));
            var var_4 = Struct_3(((true == all(vec2<bool>(false, false))) | (false == var_1.c)) == !(!var_1.c), Struct_2(var_1.a, _wgslsmith_f_op_vec3_f32(round(vec3<f32>(arg_0.x, var_0, _wgslsmith_f_op_f32(-var_1.b.x)))), false, min(-_wgslsmith_div_i32(1i, 53315i), abs(~(i32(-2147483648)))), _wgslsmith_f_op_f32(-var_1.e)));
            let var_5 = countOneBits(reverseBits(abs(vec3<u32>(u_input.a, u_input.a, 4294967295u) | vec3<u32>(9805u, 0u, u_input.a))) << (_wgslsmith_add_vec3_u32(firstLeadingBit(vec3<u32>(1u, 67445u, 75976u)), max(reverseBits(vec3<u32>(u_input.a, 23092u, u_input.a)), max(vec3<u32>(2096u, 0u, u_input.a), vec3<u32>(u_input.a, 4294967295u, u_input.a)))) % vec3<u32>(32u)));
            var var_6 = ~max(~vec2<u32>(0u, ~1u), _wgslsmith_mult_vec2_u32(var_5.zy, ~vec2<u32>(1u, u_input.a)));
        }
        if (!(0u >= u_input.a)) {
            let var_4 = reverseBits(select(vec2<i32>(var_2.x & i32(-2147483648), -12448i), vec2<i32>(-13913i, ~924i), any(select(vec2<bool>(false, true), vec2<bool>(false, false), vec2<bool>(var_1.c, false)))) ^ ~(_wgslsmith_div_vec2_i32(vec2<i32>(var_2.x, var_2.x), vec2<i32>(var_2.x, var_1.a.a)) & _wgslsmith_div_vec2_i32(vec2<i32>(-20602i, 64096i), vec2<i32>(var_1.d, var_1.a.a))));
            var_1 = Struct_2(var_1.a, var_1.b, true, _wgslsmith_add_i32(_wgslsmith_dot_vec3_i32(select(vec3<i32>(i32(-2147483648), var_4.x, var_1.a.a), vec3<i32>(var_4.x, 2147483647i, 23602i), vec3<bool>(var_1.c, true, true)), -abs(vec3<i32>(-15842i, -25603i, -19374i))), var_4.x), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_0))))));
            var var_5 = false;
        }
        if (all(vec4<bool>(func_6(_wgslsmith_f_op_vec4_f32(-vec4<f32>(var_0, var_1.b.x, 145f, var_1.b.x))).x, true, -824f != _wgslsmith_f_op_f32(ceil(1258f)), false)) && (var_1.c | true)) {
            let var_4 = !(!(!(!select(vec4<bool>(var_1.c, false, var_1.c, var_1.c), vec4<bool>(true, true, var_1.c, false), vec4<bool>(false, true, var_1.c, true)))));
            let var_5 = Struct_2(Struct_1(1i, var_1.b), vec3<f32>(-820f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -555f)) - _wgslsmith_f_op_f32(round(var_0))), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(f32(-1f) * -2293f)))), 955f >= _wgslsmith_f_op_f32(min(388f, _wgslsmith_f_op_f32(_wgslsmith_div_f32(var_1.e, -348f) + _wgslsmith_f_op_f32(arg_0.x - 522f)))), countOneBits(firstTrailingBit(0i)), -533f);
            global0 = max(u_input.a, ~(abs(40543u | u_input.a) | u_input.a));
        }
    }
    return _wgslsmith_f_op_f32(var_0 - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-var_0), _wgslsmith_f_op_f32(var_0 + -892f))))) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0.x)))));
}

fn func_2() -> i32 {
    var var_0 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-372f - -1670f) + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-1000f - 444f))) + _wgslsmith_f_op_f32(func_7(_wgslsmith_f_op_vec3_f32(func_3(vec2<f32>(-724f, -209f))))))) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -2151f) - _wgslsmith_f_op_f32(-992f))))));
    loop {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        if (!(!all(!select(vec3<bool>(true, true, false), vec3<bool>(false, true, false), false)))) {
        }
    }
    switch (i32(-2147483648)) {
        case 0i: {
        }
        case 1i: {
        }
        case -14103i: {
        }
        case 42253i: {
            var var_1 = 1u;
        }
        default: {
            let var_1 = Struct_1(-1i, vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_div_f32(-922f, 1150f) - _wgslsmith_f_op_f32(-461f * 948f)) - _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(sign(-708f))))), -1197f, _wgslsmith_f_op_f32(-290f)));
            if (true) {
                var var_2 = vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-355f * var_1.b.x) + var_1.b.x), var_1.b.x)) + _wgslsmith_f_op_f32(sign(-520f))), _wgslsmith_f_op_f32(max(var_1.b.x, _wgslsmith_f_op_f32(-var_1.b.x))), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(sign(var_1.b.x)))));
                var var_3 = var_1.a;
                var var_4 = var_1;
            }
            switch (var_1.a) {
                case -10458i: {
                    var_0 = -176f;
                }
                case 40477i: {
                    global0 = _wgslsmith_mod_u32(reverseBits(42252u), func_4());
                    var var_2 = -firstLeadingBit(select(29387i, 1i, _wgslsmith_f_op_f32(-var_1.b.x) > _wgslsmith_f_op_f32(sign(var_1.b.x))));
                    let var_3 = u_input.a;
                    var var_4 = firstLeadingBit(vec2<i32>(abs(_wgslsmith_dot_vec3_i32(_wgslsmith_sub_vec3_i32(vec3<i32>(2147483647i, var_1.a, var_1.a), vec3<i32>(var_1.a, 2147483647i, 30648i)), select(vec3<i32>(-10296i, var_1.a, var_1.a), vec3<i32>(var_1.a, 44772i, 2147483647i), false))), _wgslsmith_clamp_i32(-select(2147483647i, -11329i, false), -(~var_1.a), 2147483647i)));
                }
                case 2147483647i: {
                    var var_2 = i32(-2147483648);
                }
                case 1i: {
                    let var_2 = Struct_4(~select(~_wgslsmith_div_vec3_u32(vec3<u32>(u_input.a, 0u, 77702u), vec3<u32>(22615u, u_input.a, 4294967295u)), ~vec3<u32>(u_input.a, 4294967295u, u_input.a) & select(vec3<u32>(4294967295u, 9644u, u_input.a), vec3<u32>(28283u, u_input.a, 0u), vec3<bool>(false, false, true)), any(vec3<bool>(false, false, true))), Struct_1(i32(-2147483648), _wgslsmith_f_op_vec3_f32(exp2(_wgslsmith_f_op_vec3_f32(var_1.b + _wgslsmith_div_vec3_f32(var_1.b, vec3<f32>(var_1.b.x, var_1.b.x, var_1.b.x)))))), _wgslsmith_div_vec2_u32(((vec2<u32>(u_input.a, 20558u) >> (vec2<u32>(u_input.a, 99669u) % vec2<u32>(32u))) >> (abs(vec2<u32>(u_input.a, 0u)) % vec2<u32>(32u))) | vec2<u32>(_wgslsmith_sub_u32(u_input.a, u_input.a), ~u_input.a), countOneBits(~(~vec2<u32>(0u, 32173u)))));
                    var var_3 = _wgslsmith_mod_vec3_i32(vec3<i32>(reverseBits(var_1.a), i32(-1i) * -var_1.a, var_1.a), _wgslsmith_add_vec3_i32(reverseBits(vec3<i32>(-var_1.a, reverseBits(-993i), -15832i)), _wgslsmith_sub_vec3_i32(_wgslsmith_mod_vec3_i32(-vec3<i32>(var_2.b.a, 0i, -34781i), vec3<i32>(var_1.a, var_1.a, -3304i)), vec3<i32>(47598i, var_2.b.a, _wgslsmith_sub_i32(var_1.a, -12705i)))));
                }
                default: {
                    var var_2 = ~_wgslsmith_mod_u32(u_input.a << (u_input.a % 32u), ~u_input.a);
                    let var_3 = 0u >> (max(u_input.a, _wgslsmith_dot_vec3_u32(firstTrailingBit(~vec3<u32>(47234u, 1u, u_input.a)), vec3<u32>(u_input.a & 67158u, 17334u, ~u_input.a))) % 32u);
                    var var_4 = vec2<bool>(-4708i <= _wgslsmith_mod_i32(var_1.a, i32(-1i) * i32(-2147483648)), ~(i32(-1i) * -73233i) < func_5(vec4<bool>(true, true, true, true), var_1.b.x));
                    var var_5 = _wgslsmith_f_op_f32(step(-2651f, 1659f));
                    let var_6 = Struct_4(_wgslsmith_mult_vec3_u32(countOneBits(max(vec3<u32>(1u, 4294967295u, 14163u), vec3<u32>(var_3, var_3, 4294967295u))) >> (max(vec3<u32>(u_input.a, u_input.a, var_3) | vec3<u32>(u_input.a, var_3, var_3), ~vec3<u32>(u_input.a, u_input.a, 1964u)) % vec3<u32>(32u)), ~_wgslsmith_mod_vec3_u32(vec3<u32>(u_input.a, 1u, u_input.a), _wgslsmith_mod_vec3_u32(vec3<u32>(4294967295u, 12080u, 1u), vec3<u32>(var_3, var_3, var_3)))), var_1, vec2<u32>(_wgslsmith_mod_u32(var_3 << (469u % 32u), _wgslsmith_mod_u32(var_3, func_4())), 4294967295u));
                }
            }
            loop {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                var var_2 = u_input.a;
            }
        }
    }
    if (any(vec3<bool>(true, true, true))) {
        var var_1 = ~(~max(53701u, firstLeadingBit(29919u))) ^ u_input.a;
        var var_2 = true;
        let var_3 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(max(vec3<f32>(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-174f + 1041f), _wgslsmith_f_op_f32(round(-979f)))), 1f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(-799f, 1044f)))), _wgslsmith_f_op_vec3_f32(-vec3<f32>(-633f, -646f, _wgslsmith_f_op_f32(-663f))))) + vec3<f32>(1000f, 1329f, -408f));
    }
    let var_1 = false;
    return -23151i & _wgslsmith_add_i32(abs(-func_5(vec4<bool>(false, var_1, true, false), -653f)), -17364i);
}

fn func_8(arg_0: i32) -> u32 {
    let var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_div_f32(2465f, _wgslsmith_f_op_f32(ceil(-333f))) + -368f) * -2506f));
    var var_1 = Struct_2(Struct_1(arg_0 >> (4294967295u % 32u), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(var_0, 1938f, -1071f))) - _wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1847f, var_0, -1000f)))))), vec3<f32>(_wgslsmith_f_op_f32(ceil(var_0)), _wgslsmith_f_op_f32(func_7(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(select(vec3<f32>(var_0, 380f, var_0), vec3<f32>(1576f, var_0, 182f), false)) + _wgslsmith_f_op_vec3_f32(vec3<f32>(var_0, var_0, var_0) + vec3<f32>(746f, var_0, var_0))))), var_0), 49600u >= _wgslsmith_clamp_u32(u_input.a, _wgslsmith_mult_u32(~0u, _wgslsmith_dot_vec2_u32(vec2<u32>(0u, 4294967295u), vec2<u32>(u_input.a, u_input.a))), _wgslsmith_mod_u32(select(45703u, 4294967295u, false), _wgslsmith_dot_vec3_u32(vec3<u32>(u_input.a, u_input.a, u_input.a), vec3<u32>(u_input.a, 29919u, 34138u)))), select(arg_0 | ~arg_0, func_5(vec4<bool>(true, true, all(vec4<bool>(true, false, false, false)), true), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -313f))), all(!func_6(vec4<f32>(var_0, var_0, -228f, -789f)).xx)), _wgslsmith_f_op_f32(-var_0));
    let var_2 = true;
    switch (var_1.a.a) {
        default: {
            loop {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
            }
            let var_3 = -618f;
            if (!var_2) {
                let var_4 = _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(var_3 * -513f) * _wgslsmith_f_op_f32(-var_0))))));
                var var_5 = Struct_4(vec3<u32>(abs(_wgslsmith_sub_u32(u_input.a, 1u ^ u_input.a)), _wgslsmith_mod_u32(4294967295u, _wgslsmith_div_u32(~u_input.a, _wgslsmith_dot_vec3_u32(vec3<u32>(u_input.a, u_input.a, u_input.a), vec3<u32>(0u, 0u, u_input.a)))), _wgslsmith_add_u32(8059u, 791u)), var_1.a, _wgslsmith_div_vec2_u32(vec2<u32>(~(u_input.a & 0u), reverseBits(u_input.a >> (15547u % 32u))), ~(~(vec2<u32>(u_input.a, u_input.a) & vec2<u32>(u_input.a, u_input.a)))));
                global0 = u_input.a;
                var_5 = Struct_4(~countOneBits(_wgslsmith_sub_vec3_u32(select(var_5.a, var_5.a, false), var_5.a << (var_5.a % vec3<u32>(32u)))), Struct_1(-_wgslsmith_add_i32(var_5.b.a, -38698i) >> (75239u % 32u), _wgslsmith_f_op_vec3_f32(abs(vec3<f32>(1000f, 1000f, _wgslsmith_div_f32(-1731f, var_0))))), _wgslsmith_mod_vec2_u32(abs(_wgslsmith_clamp_vec2_u32(~var_5.c, max(var_5.a.xx, var_5.a.zz), select(vec2<u32>(62590u, u_input.a), vec2<u32>(u_input.a, var_5.c.x), vec2<bool>(false, true)))), vec2<u32>(u_input.a, reverseBits(var_5.c.x) << (_wgslsmith_dot_vec4_u32(vec4<u32>(var_5.a.x, var_5.a.x, 38237u, 1u), vec4<u32>(4294967295u, var_5.c.x, 4294967295u, 0u)) % 32u))));
            }
            let var_4 = _wgslsmith_sub_vec2_i32(_wgslsmith_mod_vec2_i32(reverseBits(vec2<i32>(-1i) * -vec2<i32>(arg_0, arg_0)), vec2<i32>(~reverseBits(17385i), ~arg_0)), _wgslsmith_clamp_vec2_i32(_wgslsmith_add_vec2_i32(vec2<i32>(4108i, var_1.d), vec2<i32>(-1i, var_1.a.a)) | select(vec2<i32>(arg_0, 2147483647i), vec2<i32>(arg_0, arg_0), vec2<bool>(var_1.c, true)), _wgslsmith_div_vec2_i32(vec2<i32>(var_1.d, arg_0) | vec2<i32>(var_1.a.a, var_1.d), select(vec2<i32>(var_1.a.a, var_1.d), vec2<i32>(var_1.a.a, arg_0), true)), _wgslsmith_mult_vec2_i32(-vec2<i32>(-16726i, arg_0), -vec2<i32>(arg_0, arg_0))) >> (max(vec2<u32>(countOneBits(u_input.a), u_input.a & 59901u), _wgslsmith_div_vec2_u32(vec2<u32>(u_input.a, u_input.a), reverseBits(vec2<u32>(u_input.a, 8159u)))) % vec2<u32>(32u)));
        }
    }
    loop {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        for (; ; ) {
            if (LOOP_COUNTERS[12u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
            break;
        }
        var var_3 = var_1.a;
    }
    return u_input.a;
}

fn func_9(arg_0: Struct_4, arg_1: u32, arg_2: vec2<i32>, arg_3: f32) -> Struct_2 {
    var var_0 = Struct_1(_wgslsmith_dot_vec3_i32(vec3<i32>(~arg_0.b.a, 0i, _wgslsmith_sub_i32(arg_0.b.a << (u_input.a % 32u), _wgslsmith_mod_i32(-262i, 4530i))), _wgslsmith_clamp_vec3_i32(vec3<i32>(-1i) * -vec3<i32>(37815i, 2147483647i, arg_2.x), vec3<i32>(arg_0.b.a ^ arg_0.b.a, 9843i, 2587i), firstTrailingBit(vec3<i32>(arg_2.x, -3399i, 41964i)) & -vec3<i32>(arg_2.x, arg_0.b.a, arg_0.b.a))), _wgslsmith_f_op_vec3_f32(-arg_0.b.b));
    let var_1 = arg_0.b;
    loop {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        var var_2 = !(arg_1 < ~arg_0.c.x);
    }
    let var_2 = min(~(~arg_1), 1u);
    for (var var_3 = var_0.a; var_3 != 1i; var_3 -= 1i) {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        var var_4 = 37645u;
    }
    return Struct_2(var_1, _wgslsmith_f_op_vec3_f32(arg_0.b.b + _wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(step(469f, -1000f)), var_0.b.x, _wgslsmith_f_op_f32(-1627f * var_0.b.x)))), true, -18302i, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(var_0.b.x))));
}

fn func_1(arg_0: u32, arg_1: bool, arg_2: vec2<f32>, arg_3: Struct_3) -> Struct_4 {
    let var_0 = false | arg_1;
    global0 = arg_0;
    if (all(!vec4<bool>(min(u_input.a, arg_0) >= abs(4294967295u), var_0, !(!arg_3.b.c), all(vec3<bool>(false, true, arg_3.b.c))))) {
        for (; ; ) {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            var var_1 = Struct_3(arg_3.a && true, func_9(Struct_4(~(vec3<u32>(u_input.a, u_input.a, 19945u) >> (vec3<u32>(arg_0, arg_0, 1u) % vec3<u32>(32u))), arg_3.b.a, vec2<u32>(1u, 1u)), func_8(func_2()), -(~vec2<i32>(arg_3.b.a.a, 35251i)) << (~(vec2<u32>(0u, arg_0) >> (vec2<u32>(arg_0, u_input.a) % vec2<u32>(32u))) % vec2<u32>(32u)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(arg_3.b.b.x - 236f), _wgslsmith_f_op_f32(f32(-1f) * -1802f))))));
            return Struct_4(reverseBits(_wgslsmith_add_vec3_u32(vec3<u32>(firstTrailingBit(arg_0), 1u, 4294967295u), vec3<u32>(arg_0, ~64661u, abs(43194u)))), func_9(Struct_4(select(~vec3<u32>(69854u, 1u, arg_0), ~vec3<u32>(u_input.a, 1u, 0u), true), Struct_1(arg_3.b.a.a, _wgslsmith_f_op_vec3_f32(-arg_3.b.b)), vec2<u32>(u_input.a, 0u)), ~u_input.a, max(vec2<i32>(_wgslsmith_dot_vec3_i32(vec3<i32>(arg_3.b.d, 32565i, 54024i), vec3<i32>(arg_3.b.a.a, arg_3.b.a.a, arg_3.b.d)), -var_1.b.a.a), vec2<i32>(-9441i, _wgslsmith_dot_vec4_i32(vec4<i32>(-1i, 15044i, arg_3.b.a.a, arg_3.b.d), vec4<i32>(35698i, 1i, 23492i, 2147483647i)))), _wgslsmith_f_op_f32(round(arg_2.x))).a, abs(vec2<u32>(u_input.a, _wgslsmith_div_u32(_wgslsmith_add_u32(arg_0, u_input.a), u_input.a & u_input.a))));
        }
        if (arg_3.b.c) {
            global0 = arg_0;
            global0 = _wgslsmith_div_u32(~(~(~reverseBits(u_input.a))), u_input.a);
            return Struct_4(~abs(~(~vec3<u32>(4294967295u, arg_0, 1u))), func_9(Struct_4(reverseBits(_wgslsmith_div_vec3_u32(vec3<u32>(arg_0, 4294967295u, 8869u), vec3<u32>(u_input.a, 753u, 1u))), arg_3.b.a, _wgslsmith_sub_vec2_u32(~vec2<u32>(17162u, arg_0), ~vec2<u32>(28924u, 1u))), 0u, ~(~(~vec2<i32>(-4670i, -17762i))), -899f).a, select(vec2<u32>(arg_0, 1u), ~(~(~vec2<u32>(1u, 38925u))), false));
        }
        global0 = u_input.a;
        switch (-(arg_3.b.d >> (countOneBits(108186u) % 32u))) {
            case -9236i: {
            }
            case 2147483647i: {
                global0 = min(min(arg_0, 19758u), 13480u);
                var var_1 = vec2<i32>(i32(-1i) * i32(-2147483648), -abs(select(firstTrailingBit(-1i), -1i, any(vec3<bool>(false, arg_3.a, arg_3.a)))));
                global0 = arg_0;
            }
            case 0i: {
                global0 = _wgslsmith_dot_vec3_u32(vec3<u32>(~_wgslsmith_mod_u32(0u, arg_0) << (u_input.a % 32u), select(u_input.a, ~u_input.a, func_9(Struct_4(vec3<u32>(u_input.a, u_input.a, u_input.a), Struct_1(50882i, arg_3.b.a.b), vec2<u32>(9522u, 3564u)), arg_0 | arg_0, _wgslsmith_add_vec2_i32(vec2<i32>(1i, -1i), vec2<i32>(-1i, 1422i)), _wgslsmith_f_op_f32(trunc(-1498f))).c), ~_wgslsmith_dot_vec4_u32(~vec4<u32>(u_input.a, 0u, 1u, u_input.a), vec4<u32>(1u, u_input.a, arg_0, 4294967295u))), min(vec3<u32>(_wgslsmith_dot_vec4_u32(~vec4<u32>(arg_0, 4294967295u, u_input.a, 9746u), vec4<u32>(4294967295u, u_input.a, arg_0, arg_0) ^ vec4<u32>(arg_0, 4294967295u, 0u, u_input.a)), _wgslsmith_mult_u32(~arg_0, _wgslsmith_div_u32(u_input.a, 1u)), ~52015u), ~(vec3<u32>(4294967295u, arg_0, arg_0) >> (vec3<u32>(12843u, 4294967295u, arg_0) % vec3<u32>(32u))) ^ ~(~vec3<u32>(0u, 6564u, arg_0))));
                let var_1 = Struct_3(func_6(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(-1320f, arg_2.x, 250f, arg_2.x))))).x, func_9(Struct_4(vec3<u32>(21808u, abs(arg_0), u_input.a), func_9(Struct_4(vec3<u32>(u_input.a, u_input.a, arg_0), Struct_1(2147483647i, arg_3.b.b), vec2<u32>(u_input.a, 4294967295u)), _wgslsmith_div_u32(arg_0, arg_0), _wgslsmith_mult_vec2_i32(vec2<i32>(arg_3.b.a.a, arg_3.b.d), vec2<i32>(arg_3.b.a.a, arg_3.b.a.a)), arg_2.x).a, vec2<u32>(11121u, 1u << (u_input.a % 32u))), 34507u, -(~vec2<i32>(arg_3.b.a.a, arg_3.b.d)) ^ vec2<i32>(~arg_3.b.a.a, countOneBits(arg_3.b.d)), arg_2.x));
                var var_2 = arg_3.b.a.a;
            }
            default: {
            }
        }
    }
    var var_1 = Struct_3(true & (any(func_6(vec4<f32>(1000f, arg_3.b.b.x, -462f, arg_3.b.a.b.x)).xy) && (arg_3.a & !arg_1)), arg_3.b);
    for (var var_2 = -18809i; var_2 > 33308i; var_2 += 1i) {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        var var_3 = func_9(Struct_4((~vec3<u32>(arg_0, 1u, u_input.a) >> (abs(vec3<u32>(u_input.a, u_input.a, arg_0)) % vec3<u32>(32u))) & ~vec3<u32>(u_input.a, arg_0, arg_0), arg_3.b.a, select(~vec2<u32>(1u, u_input.a) | abs(vec2<u32>(36527u, 70912u)), vec2<u32>(4294967295u, 76768u) | ~vec2<u32>(u_input.a, u_input.a), func_6(vec4<f32>(579f, 1831f, arg_3.b.a.b.x, arg_3.b.a.b.x)).x | !var_0)), arg_0, vec2<i32>(_wgslsmith_mod_i32(-(~(-1i)), firstLeadingBit(arg_3.b.d)), 0i), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_3.b.a.b.x * 2156f) + _wgslsmith_f_op_f32(trunc(var_1.b.b.x)))))).a;
        let var_4 = ~(~vec3<u32>(u_input.a, 0u >> (arg_0 % 32u), _wgslsmith_dot_vec4_u32(vec4<u32>(47082u, arg_0, arg_0, u_input.a), vec4<u32>(u_input.a, 52410u, 4294967295u, u_input.a))) >> (vec3<u32>(10458u, _wgslsmith_sub_u32(0u, ~u_input.a), _wgslsmith_sub_u32(~u_input.a, u_input.a)) % vec3<u32>(32u)));
        let var_5 = Struct_4(select(~vec3<u32>(_wgslsmith_clamp_u32(var_4.x, 11156u, 3459u), var_4.x, _wgslsmith_mult_u32(u_input.a, 18260u)), countOneBits(vec3<u32>(u_input.a, 19168u, var_4.x)) ^ vec3<u32>(u_input.a, func_8(-36536i), abs(u_input.a)), func_6(_wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_div_vec4_f32(vec4<f32>(arg_3.b.b.x, arg_3.b.b.x, var_3.b.x, -914f), vec4<f32>(894f, 785f, var_3.b.x, 2021f)))))), Struct_1(9155i, _wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(-var_1.b.a.b.x), 991f, _wgslsmith_f_op_f32(f32(-1f) * -1000f)) + _wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(round(vec3<f32>(arg_2.x, var_1.b.b.x, 341f))))))), var_4.yx);
        switch (firstLeadingBit(var_5.b.a)) {
            case 1i: {
                break;
            }
            case -751i: {
                global0 = 69753u;
                continue;
            }
            case -15236i: {
                let var_6 = Struct_4(var_5.a, func_9(var_5, ~(~1u), _wgslsmith_mult_vec2_i32(_wgslsmith_add_vec2_i32(select(vec2<i32>(-86179i, var_3.a), vec2<i32>(var_3.a, arg_3.b.a.a), true), vec2<i32>(arg_3.b.a.a, 2147483647i)), _wgslsmith_sub_vec2_i32(vec2<i32>(9247i, arg_3.b.d) ^ vec2<i32>(-1i, 1i), -vec2<i32>(60833i, i32(-2147483648)))), arg_2.x).a, var_4.zx);
            }
            default: {
                let var_6 = arg_3;
            }
        }
    }
    return Struct_4(vec3<u32>(u_input.a, 4294967295u, ~arg_0), Struct_1(_wgslsmith_dot_vec3_i32(vec3<i32>(-1i, -1i, arg_3.b.a.a), ~vec3<i32>(arg_3.b.d, 30478i, -5327i)) << (func_8(i32(-1i) * -1i) % 32u), arg_3.b.a.b), vec2<u32>(1u, ~40477u << (_wgslsmith_div_u32(~28858u, ~arg_0) % 32u)));
}

fn func_10(arg_0: Struct_4, arg_1: u32, arg_2: bool, arg_3: i32) -> bool {
    let var_0 = arg_0.b.b.x;
    global0 = _wgslsmith_sub_u32(select(4294967295u, u_input.a, true), ~1u);
    loop {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
        if (false) {
            break;
        }
    }
    if (!arg_2) {
    }
    let var_1 = _wgslsmith_clamp_vec2_i32(vec2<i32>(arg_3 >> (1u % 32u), i32(-1i) * -33548i), max(_wgslsmith_div_vec2_i32(~vec2<i32>(arg_0.b.a, arg_0.b.a), vec2<i32>(arg_0.b.a, arg_3)), firstTrailingBit(vec2<i32>(-1i, -1i))) << (~vec2<u32>(func_8(i32(-2147483648)), _wgslsmith_div_u32(1u, 4294967295u)) % vec2<u32>(32u)), abs(vec2<i32>(_wgslsmith_add_i32(_wgslsmith_clamp_i32(arg_3, arg_3, 38907i), _wgslsmith_mod_i32(-1i, 2147483647i)), _wgslsmith_mod_i32(arg_0.b.a, arg_3))));
    return false;
}

@compute
@workgroup_size(1)
fn main() {
    if (!(!(!func_10(func_1(u_input.a, true, vec2<f32>(-1000f, 1300f), Struct_3(true, Struct_2(Struct_1(61065i, vec3<f32>(1000f, 1206f, 1382f)), vec3<f32>(-2079f, -544f, -779f), true, 2147483647i, -530f))), u_input.a, false, ~76152i)))) {
        switch (1i) {
            case 10146i: {
                let var_0 = Struct_2(func_1(max(u_input.a, 18141u), false, _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(ceil(vec2<f32>(1151f, 673f))))), Struct_3(all(vec3<bool>(true, true, false)), Struct_2(Struct_1(10612i, vec3<f32>(952f, 1000f, 1674f)), _wgslsmith_f_op_vec3_f32(max(vec3<f32>(-1160f, -490f, 440f), vec3<f32>(1858f, -1028f, 468f))), false, firstTrailingBit(i32(-2147483648)), _wgslsmith_f_op_f32(1258f + -2379f)))).b, vec3<f32>(_wgslsmith_f_op_f32(floor(-628f)), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-func_1(49092u, true, vec2<f32>(-908f, -343f), Struct_3(false, Struct_2(Struct_1(-4053i, vec3<f32>(2040f, -2102f, 1000f)), vec3<f32>(-991f, -508f, 1205f), true, 7168i, -268f))).b.b.x))), 1000f), true, max(max(1i, min(-5514i, ~(i32(-2147483648)))), _wgslsmith_mod_i32(_wgslsmith_clamp_i32(0i, i32(-2147483648), -33978i), -1i >> (0u % 32u)) >> (_wgslsmith_div_u32(abs(u_input.a), ~75487u) % 32u)), _wgslsmith_f_op_f32(f32(-1f) * -466f));
            }
            default: {
                global0 = u_input.a;
                let var_0 = Struct_2(func_9(func_1(_wgslsmith_add_u32(u_input.a, _wgslsmith_sub_u32(u_input.a, u_input.a)), true, _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(-1000f, 260f) * vec2<f32>(1126f, -1419f)), _wgslsmith_f_op_vec2_f32(-vec2<f32>(-1150f, 1000f))), Struct_3(u_input.a > u_input.a, Struct_2(Struct_1(-32105i, vec3<f32>(-1761f, 1754f, 1105f)), vec3<f32>(1283f, -1133f, -258f), false, 1i, -1000f))), 22057u, firstLeadingBit(abs(vec2<i32>(1i, 18673i))), -1000f).a, _wgslsmith_div_vec3_f32(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(max(vec3<f32>(-2560f, -825f, 3130f), vec3<f32>(-1075f, 731f, -345f))))), vec3<f32>(_wgslsmith_f_op_f32(-1000f * -731f), _wgslsmith_f_op_f32(round(1205f)), _wgslsmith_f_op_f32(step(540f, 1617f)))), _wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(round(vec3<f32>(372f, 431f, 1070f)))))), true, 1i, 652f);
                global0 = 7968u;
            }
        }
    }
    global0 = _wgslsmith_sub_u32(select(u_input.a, 1u, any(select(vec2<bool>(false, true), select(vec2<bool>(false, false), vec2<bool>(true, true), vec2<bool>(false, false)), true))), firstTrailingBit(u_input.a));
    loop {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        let var_0 = vec3<f32>(func_9(Struct_4(_wgslsmith_div_vec3_u32(_wgslsmith_clamp_vec3_u32(vec3<u32>(u_input.a, 20678u, 44211u), vec3<u32>(u_input.a, 59636u, 4294967295u), vec3<u32>(0u, 4294967295u, u_input.a)), abs(vec3<u32>(u_input.a, u_input.a, 14676u))), func_1(~u_input.a, func_6(vec4<f32>(-1843f, 1026f, 181f, 715f)).x, _wgslsmith_f_op_vec2_f32(vec2<f32>(-719f, -775f) + vec2<f32>(903f, -732f)), Struct_3(true, Struct_2(Struct_1(i32(-2147483648), vec3<f32>(1000f, -686f, 122f)), vec3<f32>(429f, 108f, -652f), true, -1i, -489f))).b, ~vec2<u32>(u_input.a, u_input.a) | vec2<u32>(2940u, 824u)), ~(~20668u >> (_wgslsmith_dot_vec3_u32(vec3<u32>(u_input.a, u_input.a, u_input.a), vec3<u32>(1u, u_input.a, 4294967295u)) % 32u)), vec2<i32>(1i, _wgslsmith_mult_i32(~20889i, min(1i, -18879i))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_div_f32(-1339f, -983f)))).a.b.x, -978f, _wgslsmith_f_op_f32(floor(_wgslsmith_div_f32(func_1(1u ^ u_input.a, true, _wgslsmith_f_op_vec2_f32(-vec2<f32>(-144f, 288f)), Struct_3(false, Struct_2(Struct_1(-67102i, vec3<f32>(945f, 424f, -294f)), vec3<f32>(-1585f, 676f, 296f), true, 2147483647i, 2311f))).b.b.x, 638f))));
        loop {
            if (LOOP_COUNTERS[19u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
            global0 = ~(u_input.a & select(_wgslsmith_mult_u32(~u_input.a, u_input.a), ~max(u_input.a, u_input.a), true));
            let var_1 = vec2<i32>(-(-(~2147483647i) >> (u_input.a % 32u)), countOneBits(-(~(-3697i))));
            var var_2 = !vec4<bool>(!select(true, false, false) & (func_10(Struct_4(vec3<u32>(u_input.a, u_input.a, 13261u), Struct_1(var_1.x, vec3<f32>(888f, var_0.x, -996f)), vec2<u32>(1u, u_input.a)), 59247u, false, var_1.x) | true), true, true, func_9(Struct_4(vec3<u32>(4294967295u, u_input.a, 0u), Struct_1(var_1.x, vec3<f32>(var_0.x, 1122f, -929f)), vec2<u32>(37026u, 7568u)), 70521u, max(-var_1, vec2<i32>(var_1.x, 0i)), var_0.x).c);
            var var_3 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -322f));
            var_2 = !select(select(!select(vec4<bool>(var_2.x, var_2.x, var_2.x, var_2.x), vec4<bool>(true, true, true, var_2.x), vec4<bool>(var_2.x, var_2.x, false, var_2.x)), select(vec4<bool>(var_2.x, true, true, var_2.x), select(vec4<bool>(var_2.x, false, var_2.x, true), vec4<bool>(false, false, var_2.x, var_2.x), true), var_2.x), !select(vec4<bool>(var_2.x, false, var_2.x, var_2.x), vec4<bool>(var_2.x, var_2.x, var_2.x, true), vec4<bool>(var_2.x, false, var_2.x, false))), vec4<bool>(var_2.x, var_2.x & var_2.x, (var_2.x && false) == true, false), true);
        }
    }
    let var_0 = select(vec4<bool>(!any(vec3<bool>(true, true, true)), func_9(func_1(u_input.a, false, vec2<f32>(-833f, -846f), Struct_3(false, Struct_2(Struct_1(9195i, vec3<f32>(842f, -167f, -1482f)), vec3<f32>(-984f, -1444f, -851f), true, 0i, -2143f))), _wgslsmith_sub_u32(u_input.a, u_input.a), max(vec2<i32>(40535i, -19632i), vec2<i32>(-15172i, -63762i)), _wgslsmith_f_op_f32(-1415f)).b.x >= _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(2105f))), func_6(vec4<f32>(-860f, _wgslsmith_f_op_f32(530f + -1231f), -957f, _wgslsmith_div_f32(-1000f, 1264f))).x, all(func_6(_wgslsmith_f_op_vec4_f32(select(vec4<f32>(-503f, 2483f, 1464f, -2163f), vec4<f32>(-1000f, -511f, 152f, -216f), vec4<bool>(true, false, false, false)))))), !select(select(select(vec4<bool>(false, true, true, true), vec4<bool>(true, true, false, true), true), select(vec4<bool>(false, true, false, true), vec4<bool>(true, false, true, false), true), true), vec4<bool>(true, true, true, true), any(select(vec3<bool>(true, false, false), vec3<bool>(true, false, true), vec3<bool>(true, false, true)))), i32(-2147483648) < _wgslsmith_clamp_i32(-1i, max(firstLeadingBit(-25020i), ~(-40477i)), -func_2()));
    loop {
        if (LOOP_COUNTERS[20u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
        loop {
            if (LOOP_COUNTERS[21u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
        }
    }
    let var_1 = func_9(Struct_4(abs(abs(~vec3<u32>(u_input.a, 1835u, 0u))), func_1(~_wgslsmith_clamp_u32(312u, 29636u, 1u), true, _wgslsmith_f_op_vec2_f32(abs(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-1000f, 545f)))), Struct_3(var_0.x, Struct_2(Struct_1(-1i, vec3<f32>(1306f, -831f, -1486f)), vec3<f32>(-726f, 1026f, -249f), var_0.x, -1i, -431f))).b, ~(firstLeadingBit(vec2<u32>(u_input.a, u_input.a)) ^ (vec2<u32>(u_input.a, u_input.a) << (vec2<u32>(48656u, 0u) % vec2<u32>(32u))))), u_input.a, abs(~vec2<i32>(22823i, countOneBits(1960i))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-351f + -1434f)) - 1000f)));
    for (var var_2: i32; !func_6(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(1452f, var_1.e, 861f, var_1.e))) + _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(2026f, var_1.a.b.x, -839f, var_1.a.b.x)))))).x; var_2 = var_1.a.a) {
        if (LOOP_COUNTERS[22u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
    }
    global0 = u_input.a;
    let var_2 = var_1.a.a;
    let x = u_input.a;
    s_output = StorageBuffer(select(select(min(vec4<u32>(31004u, u_input.a, u_input.a, 26264u), vec4<u32>(u_input.a, 4294967295u, 4294967295u, 32621u) >> (vec4<u32>(u_input.a, 9293u, u_input.a, u_input.a) % vec4<u32>(32u))), abs(vec4<u32>(1u, u_input.a, u_input.a, u_input.a)), vec4<bool>(true, var_2 != -1i, any(vec2<bool>(true, true)), !var_1.c)), min(~select(vec4<u32>(u_input.a, u_input.a, 98391u, 4294967295u), vec4<u32>(49420u, u_input.a, 1u, 47658u), true), vec4<u32>(1404u ^ u_input.a, u_input.a << (0u % 32u), ~u_input.a, u_input.a ^ 1u)), true || !(true && var_1.c)), var_2, _wgslsmith_div_f32(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(var_1.e))))), var_1.a.b.x), 1i);
}

`;