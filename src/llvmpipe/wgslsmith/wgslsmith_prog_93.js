export const input = [245,82,101,34,42,27,5,173,239,116,51,168,107,203,187,23,154,81,155,231,221,169,206,54,147,87,196,34,30,208,22,101,187,156,210,121,254,42,253,34,173,166,224,192,52,153,114,67,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [245,82,101,34,42,27,5,173,239,116,51,168,107,203,187,23,154,81,155,231,221,169,206,54,147,87,196,34,30,208,22,101,187,156,210,121,254,42,253,34,173,166,224,192,52,153,114,67,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[245,82,101,34,42,27,5,173,239,116,51,168,107,203,187,23,154,81,155,231,221,169,206,54,147,87,196,34,30,208,22,101,187,156,210,121,254,42,253,34,173,166,224,192,52,153,114,67]}
// Seed: 16817079161589079890

struct Struct_1 {
    a: vec4<bool>,
    b: f32,
    c: vec4<f32>,
    d: f32,
    e: vec3<i32>,
}

struct UniformBuffer {
    a: vec2<u32>,
    b: u32,
    c: vec4<u32>,
    d: i32,
    e: i32,
}

struct StorageBuffer {
    a: f32,
    b: vec2<u32>,
    c: f32,
    d: vec4<f32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<u32, 8>;

var<private> global1: bool = false;

var<private> LOOP_COUNTERS: array<u32, 19>;

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn func_6() -> bool {
    let var_0 = 92541u;
    var var_1 = Struct_1(!select(vec4<bool>(true, true, true, true), !select(vec4<bool>(true, true, false, false), vec4<bool>(true, false, false, true), vec4<bool>(false, true, false, true)), select(vec4<bool>(true, true, true, true), select(vec4<bool>(true, false, false, false), vec4<bool>(false, false, false, true), false), select(vec4<bool>(true, false, false, true), vec4<bool>(true, false, false, false), vec4<bool>(true, true, false, true)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-146f) - _wgslsmith_f_op_f32(f32(-1f) * -550f)))), _wgslsmith_f_op_vec4_f32(step(vec4<f32>(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-1136f))), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(f32(-1f) * -1000f), 1f, true)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -570f) * _wgslsmith_f_op_f32(1035f - 257f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(603f + -1000f))), vec4<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(f32(-1f) * -427f))), 757f, _wgslsmith_f_op_f32(_wgslsmith_div_f32(-1237f, -1082f) + _wgslsmith_f_op_f32(f32(-1f) * -519f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(101f * -2585f))))), _wgslsmith_f_op_f32(step(218f, -705f)), select(firstTrailingBit(max(vec3<i32>(u_input.e, u_input.e, u_input.e), vec3<i32>(u_input.d, u_input.d, -38603i))), abs(vec3<i32>(1i, u_input.e, _wgslsmith_clamp_i32(1i, 4957i, u_input.e))), vec3<bool>(true, true, true)));
    global1 = true;
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        let var_2 = _wgslsmith_f_op_f32(-720f);
        global1 = (true | !(!var_1.a.x)) || select(any(var_1.a), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(874f + var_1.b))) >= 1547f, select(any(vec4<bool>(var_1.a.x, false, true, false)), true, var_1.a.x));
        if (!var_1.a.x) {
            var var_3 = Struct_1(vec4<bool>(true, var_1.a.x, false, false), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(-708f)) * _wgslsmith_f_op_f32(-551f + 1390f)) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-217f + 697f))) * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(-1000f, -798f))))), var_1.c, _wgslsmith_f_op_f32(-var_2), ~var_1.e);
            global0 = array<u32, 8>();
            var_1 = Struct_1(!(!vec4<bool>(any(var_1.a.zx), true, var_3.a.x, false | var_1.a.x)), var_2, _wgslsmith_f_op_vec4_f32(round(var_1.c)), var_3.b, reverseBits(~var_1.e));
        }
    }
    let var_2 = (_wgslsmith_mod_u32(min(select(global0[_wgslsmith_index_u32(var_0, 8u)], 31955u, true), var_0 << (global0[_wgslsmith_index_u32(4294967295u, 8u)] % 32u)), u_input.b) >> (6312u % 32u)) >= 9741u;
    return any(select(vec3<bool>(!all(var_1.a.zyz), false, (var_2 & var_1.a.x) | (var_0 < 35596u)), !(!select(var_1.a.yzx, vec3<bool>(true, var_2, var_1.a.x), var_1.a.x)), !(any(vec2<bool>(var_1.a.x, false)) == all(vec4<bool>(false, false, var_1.a.x, var_2)))));
}

fn func_5(arg_0: vec3<f32>) -> f32 {
    let var_0 = 14474u;
    var var_1 = vec2<bool>(true, all(!vec3<bool>(func_6(), true, all(vec4<bool>(false, true, false, true)))));
    var_1 = vec2<bool>(var_1.x, true);
    let var_2 = true;
    var var_3 = Struct_1(!vec4<bool>(!(449f < arg_0.x), var_2, true, func_6() && false), _wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -252f), _wgslsmith_f_op_f32(round(arg_0.x))), vec4<f32>(_wgslsmith_div_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(ceil(-1635f)), -420f), 1930f), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(402f, _wgslsmith_f_op_f32(arg_0.x - arg_0.x))), _wgslsmith_f_op_f32(floor(-1000f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_0.x) - arg_0.x)), 159f, max(-max(vec3<i32>(u_input.d, 2147483647i, -17391i), vec3<i32>(u_input.e, u_input.d, u_input.d)) >> (u_input.c.yyw % vec3<u32>(32u)), _wgslsmith_mod_vec3_i32(vec3<i32>(u_input.e, -25961i | u_input.d, u_input.e), vec3<i32>(_wgslsmith_dot_vec2_i32(vec2<i32>(u_input.e, u_input.d), vec2<i32>(u_input.d, u_input.d)), u_input.d | u_input.e, u_input.e))));
    return arg_0.x;
}

fn func_4(arg_0: vec2<f32>, arg_1: vec4<bool>) -> u32 {
    var var_0 = Struct_1(arg_1, -1064f, vec4<f32>(_wgslsmith_f_op_f32(-1430f), _wgslsmith_f_op_f32(select(arg_0.x, arg_0.x, any(arg_1.zy))), -650f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-730f)) * _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(func_5(vec3<f32>(arg_0.x, arg_0.x, arg_0.x))))))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_div_f32(-213f, -1183f))) * _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_0.x - 825f) + _wgslsmith_f_op_f32(915f - arg_0.x)), arg_0.x, !all(vec4<bool>(arg_1.x, true, true, false))))), -_wgslsmith_div_vec3_i32(vec3<i32>(i32(-1i) * i32(-2147483648), u_input.d, -1i), firstLeadingBit(vec3<i32>(u_input.e, 1i, -1i))));
    let var_1 = select(!select(vec4<bool>(true, true, !arg_1.x, any(arg_1.xyz)), vec4<bool>(!var_0.a.x, arg_1.x, arg_1.x, true), vec4<bool>(var_0.a.x | var_0.a.x, var_0.a.x, var_0.a.x, var_0.a.x)), select(select(!(!arg_1), select(!arg_1, arg_1, var_0.a.x), !vec4<bool>(var_0.a.x, arg_1.x, false, arg_1.x)), vec4<bool>(var_0.a.x, true || select(false, var_0.a.x, var_0.a.x), all(vec4<bool>(true, arg_1.x, arg_1.x, true)), true), select(arg_1, !arg_1, var_0.a)), !(!vec4<bool>(true, !var_0.a.x, arg_1.x | var_0.a.x, true)));
    for (var var_2 = 1766i; var_2 < 1i; ) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        loop {
            if (LOOP_COUNTERS[2u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        }
        global1 = any(!vec3<bool>(!(var_0.a.x && true), true, true));
        if ((~(~u_input.b ^ 1u) & _wgslsmith_mult_u32(0u, ~select(u_input.a.x, 1u, var_1.x))) < 1u) {
            break;
        }
        loop {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        }
        var var_3 = var_0.e.x;
    }
    var var_2 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(max(vec4<f32>(-655f, -140f, var_0.b, 638f), _wgslsmith_div_vec4_f32(var_0.c, var_0.c))) - _wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(vec4<f32>(arg_0.x, var_0.b, arg_0.x, 481f), vec4<f32>(arg_0.x, -699f, arg_0.x, -601f))))));
    var var_3 = !var_1.xy;
    return ~(~u_input.c.x);
}

fn func_3(arg_0: u32, arg_1: bool, arg_2: Struct_1) -> Struct_1 {
    let var_0 = select(vec4<bool>(false, false, arg_1, false), !arg_2.a, (~1u < _wgslsmith_clamp_u32(func_4(arg_2.c.zx, vec4<bool>(arg_1, false, arg_1, false)), ~global0[_wgslsmith_index_u32(arg_0, 8u)], u_input.c.x)) && all(vec4<bool>(!arg_1, true, arg_2.b > -163f, true)));
    let var_1 = _wgslsmith_sub_vec2_i32(_wgslsmith_clamp_vec2_i32(countOneBits(-arg_2.e.xx), ~countOneBits(~arg_2.e.yx), ~arg_2.e.zy ^ arg_2.e.xy), firstTrailingBit(abs(vec2<i32>(-1i, abs(-940i)))));
    loop {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        let var_2 = Struct_1(vec4<bool>(!func_6(), all(!arg_2.a), !arg_1, false), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-1551f + arg_2.d)))))), _wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(-arg_2.c), _wgslsmith_f_op_vec4_f32(min(vec4<f32>(arg_2.c.x, -854f, -1341f, -431f), vec4<f32>(-1409f, -837f, arg_2.b, arg_2.d))), vec4<bool>(var_0.x, arg_2.a.x, false, true))) * arg_2.c))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_2.d + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_2.d))) * _wgslsmith_f_op_f32(select(-372f, arg_2.b, !arg_2.a.x && true))), firstLeadingBit(-(~(-vec3<i32>(1i, var_1.x, 31806i)))));
        var var_3 = max(vec4<u32>(~func_4(_wgslsmith_f_op_vec2_f32(trunc(arg_2.c.zw)), vec4<bool>(var_0.x, arg_1, var_2.a.x, true)), firstLeadingBit(_wgslsmith_mod_u32(func_4(vec2<f32>(170f, 974f), var_0), 9622u)), _wgslsmith_mod_u32(global0[_wgslsmith_index_u32(reverseBits(_wgslsmith_div_u32(arg_0, 38602u)), 8u)], ~global0[_wgslsmith_index_u32(62796u, 8u)]), _wgslsmith_clamp_u32(min(arg_0, 0u), ~1u, countOneBits(8668u))), ~_wgslsmith_div_vec4_u32(_wgslsmith_mod_vec4_u32(select(vec4<u32>(0u, 0u, u_input.b, 12788u), vec4<u32>(24381u, global0[_wgslsmith_index_u32(u_input.b, 8u)], u_input.b, 2359u), var_0), u_input.c), u_input.c));
        var var_4 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(-arg_2.b), var_2.d, _wgslsmith_f_op_f32(sign(arg_2.c.x)), _wgslsmith_f_op_f32(floor(362f))) * _wgslsmith_f_op_vec4_f32(var_2.c + vec4<f32>(1675f, arg_2.b, arg_2.c.x, 450f))), _wgslsmith_f_op_vec4_f32(-vec4<f32>(-867f, _wgslsmith_f_op_f32(var_2.b - arg_2.c.x), -834f, _wgslsmith_f_op_f32(-var_2.d)))));
    }
    let var_2 = vec3<bool>(!func_6(), !(!arg_1), var_0.x);
    let var_3 = !arg_2.a;
    return arg_2;
}

fn func_2(arg_0: Struct_1) -> bool {
    switch (-1i) {
        case -23670i: {
        }
        case -7989i: {
            var var_0 = _wgslsmith_f_op_f32(max(arg_0.d, 1000f));
            let var_1 = _wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-arg_0.b), _wgslsmith_f_op_f32(ceil(arg_0.c.x))), arg_0.c.x) * arg_0.b);
            var var_2 = func_3(6932u, arg_0.a.x, arg_0);
        }
        case i32(-2147483648): {
            switch (-1i) {
                default: {
                    global1 = u_input.e <= -arg_0.e.x;
                }
            }
            global1 = all(arg_0.a.wxy);
            var var_0 = !(u_input.e > func_3(~_wgslsmith_dot_vec3_u32(vec3<u32>(u_input.b, u_input.c.x, global0[_wgslsmith_index_u32(0u, 8u)]), u_input.c.yxy), func_3(firstLeadingBit(u_input.a.x), select(false, true, arg_0.a.x), func_3(global0[_wgslsmith_index_u32(86689u, 8u)], false, arg_0)).a.x, func_3(global0[_wgslsmith_index_u32(4294967295u & global0[_wgslsmith_index_u32(4294967295u, 8u)], 8u)], !arg_0.a.x, Struct_1(vec4<bool>(arg_0.a.x, arg_0.a.x, false, false), arg_0.d, arg_0.c, -2525f, arg_0.e))).e.x);
        }
        default: {
            let var_0 = 21890u;
            global0 = array<u32, 8>();
        }
    }
    switch (59401i) {
        case -1i: {
        }
        case i32(-2147483648): {
            loop {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                continue;
            }
            if (_wgslsmith_div_i32(~reverseBits(0i), min(_wgslsmith_dot_vec2_i32(countOneBits(vec2<i32>(3784i, arg_0.e.x)), -arg_0.e.yy), 1i)) == countOneBits(~arg_0.e.x | ~(arg_0.e.x ^ 2147483647i))) {
            }
            global1 = true;
        }
        case 54824i: {
            return arg_0.a.x;
        }
        default: {
            switch (~(-arg_0.e.x)) {
                case 0i: {
                    global1 = -625f != _wgslsmith_f_op_f32(func_3(93642u, arg_0.a.x, func_3(global0[_wgslsmith_index_u32(_wgslsmith_dot_vec3_u32(u_input.c.zzy, u_input.c.zwz), 8u)], arg_0.a.x, arg_0)).d + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-arg_0.b)))));
                    var var_0 = _wgslsmith_f_op_vec4_f32(func_3(47127u, false, func_3(~9853u, false, Struct_1(vec4<bool>(true, true, true, true), _wgslsmith_f_op_f32(1789f + arg_0.d), _wgslsmith_f_op_vec4_f32(-arg_0.c), -1468f, vec3<i32>(arg_0.e.x, u_input.d, u_input.d)))).c + arg_0.c);
                    var var_1 = Struct_1(!select(select(!arg_0.a, !vec4<bool>(arg_0.a.x, arg_0.a.x, false, true), arg_0.a), vec4<bool>(arg_0.a.x, arg_0.a.x, true, arg_0.a.x), select(true, true, arg_0.a.x)), var_0.x, _wgslsmith_f_op_vec4_f32(arg_0.c * vec4<f32>(_wgslsmith_f_op_f32(-var_0.x), _wgslsmith_f_op_f32(floor(_wgslsmith_div_f32(arg_0.b, 690f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_0.x) * arg_0.c.x), _wgslsmith_f_op_f32(func_5(_wgslsmith_f_op_vec3_f32(vec3<f32>(-668f, -1530f, arg_0.b) * var_0.xxz))))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(arg_0.d))) * _wgslsmith_div_f32(_wgslsmith_f_op_f32(-arg_0.c.x), 154f)), firstLeadingBit(arg_0.e));
                    global0 = array<u32, 8>();
                    var var_2 = _wgslsmith_mult_u32(_wgslsmith_dot_vec4_u32(vec4<u32>(firstTrailingBit(~u_input.a.x), u_input.a.x, 4294967295u, global0[_wgslsmith_index_u32(~_wgslsmith_add_u32(global0[_wgslsmith_index_u32(46367u, 8u)], 32703u), 8u)]), u_input.c), ~(~0u));
                }
                default: {
                    let var_0 = func_3(abs(73291u), arg_0.a.x, func_3(_wgslsmith_mod_u32(18775u, (global0[_wgslsmith_index_u32(4294967295u, 8u)] | u_input.b) ^ min(1u, 42605u)), all(vec4<bool>(false && arg_0.a.x, arg_0.d <= arg_0.c.x, all(vec3<bool>(arg_0.a.x, true, true)), true)), func_3(_wgslsmith_dot_vec4_u32(_wgslsmith_mult_vec4_u32(vec4<u32>(35447u, u_input.c.x, u_input.c.x, 1u), u_input.c), firstTrailingBit(vec4<u32>(1u, u_input.c.x, u_input.b, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a.x, 8u)], 8u)]))), true, arg_0)));
                    let var_1 = var_0;
                    var var_2 = func_3(u_input.a.x, all(!vec3<bool>(var_0.a.x, any(vec3<bool>(false, var_1.a.x, var_1.a.x)), true)), func_3(27133u, 4294967295u != _wgslsmith_clamp_u32(u_input.b, ~global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.c.x, 8u)], 8u)], ~1u), func_3(func_4(_wgslsmith_f_op_vec2_f32(step(vec2<f32>(var_0.b, 206f), var_0.c.zw)), vec4<bool>(true, false, true, true)), var_1.a.x && func_3(4294967295u, arg_0.a.x, Struct_1(var_1.a, arg_0.b, var_1.c, -1112f, arg_0.e)).a.x, func_3(~u_input.c.x, false, func_3(global0[_wgslsmith_index_u32(u_input.c.x, 8u)], false, Struct_1(vec4<bool>(true, true, arg_0.a.x, true), 758f, vec4<f32>(var_1.d, var_1.c.x, arg_0.d, var_1.d), arg_0.c.x, arg_0.e))))));
                    return _wgslsmith_f_op_f32(var_0.b + var_1.c.x) > 1000f;
                }
            }
            global0 = array<u32, 8>();
        }
    }
    var var_0 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-arg_0.c), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_0.b, 1000f, 1859f, arg_0.b))))));
    var_0 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(abs(_wgslsmith_f_op_vec4_f32(-arg_0.c))));
    for (var var_1 = 46469i; var_1 != 11363i; ) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
    }
    return true | any(arg_0.a.yxw);
}

fn func_7(arg_0: bool, arg_1: Struct_1, arg_2: vec2<i32>) -> Struct_1 {
    if (!arg_1.a.x) {
        global1 = !all(!(!arg_1.a.wwx));
    }
    global0 = array<u32, 8>();
    switch (u_input.e) {
        default: {
            global0 = array<u32, 8>();
            let var_0 = _wgslsmith_mult_i32(1i, _wgslsmith_mult_i32(i32(-2147483648), min(_wgslsmith_clamp_i32(arg_2.x, arg_1.e.x, arg_1.e.x), u_input.d >> (_wgslsmith_div_u32(53670u, u_input.b) % 32u))));
            for (; ; ) {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                let var_1 = Struct_1(!vec4<bool>(true, select(true, u_input.b >= 20521u, true), arg_1.a.x, arg_1.e.x <= 3096i), arg_1.c.x, arg_1.c, _wgslsmith_div_f32(arg_1.c.x, arg_1.b), arg_1.e);
                var var_2 = Struct_1(!select(!func_3(u_input.b, false, arg_1).a, vec4<bool>(true, any(vec2<bool>(arg_1.a.x, arg_0)), true, var_1.a.x), var_1.a.x), _wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(arg_1.d))) * -493f), _wgslsmith_div_f32(_wgslsmith_f_op_f32(step(var_1.b, _wgslsmith_f_op_f32(-899f + var_1.b))), _wgslsmith_f_op_f32(func_5(_wgslsmith_f_op_vec3_f32(-arg_1.c.ywz))))), _wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(var_1.c * _wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(-var_1.c)))))), _wgslsmith_f_op_f32(f32(-1f) * -980f), arg_1.e);
            }
            if (u_input.a.x != ~(~72817u)) {
                var var_1 = true;
                var_1 = arg_1.a.x;
                global0 = array<u32, 8>();
            }
        }
    }
    var var_0 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(1288f + arg_1.c.x) + _wgslsmith_f_op_f32(-953f - -1427f)), _wgslsmith_f_op_f32(ceil(840f)), func_3(max(4294967295u, global0[_wgslsmith_index_u32(14376u, 8u)]), true, arg_1).b, arg_1.d)));
    loop {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        switch (-18468i) {
            case -16165i: {
                continue;
            }
            case 2021i: {
                let var_1 = u_input.a.x;
                return Struct_1(arg_1.a, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(f32(-1f) * -475f))))), arg_1.c, arg_1.c.x, ~(vec3<i32>(i32(-1i) * -1i, select(arg_2.x, u_input.e, arg_0), -76546i) ^ (~vec3<i32>(27061i, 2147483647i, arg_1.e.x) | arg_1.e)));
            }
            case 0i: {
                continue;
            }
            case 2147483647i: {
                let var_1 = Struct_1(vec4<bool>(arg_0, true, !all(!vec4<bool>(true, arg_0, true, false)), false), _wgslsmith_f_op_f32(trunc(var_0.x)), _wgslsmith_f_op_vec4_f32(vec4<f32>(-257f, 626f, arg_1.d, _wgslsmith_f_op_f32(-var_0.x)) - _wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(select(vec4<f32>(arg_1.d, var_0.x, arg_1.c.x, arg_1.c.x), _wgslsmith_f_op_vec4_f32(vec4<f32>(1177f, 958f, -1000f, var_0.x) - vec4<f32>(arg_1.c.x, 276f, arg_1.d, 1290f)), arg_0)), vec4<f32>(_wgslsmith_f_op_f32(-339f), arg_1.b, arg_1.b, _wgslsmith_f_op_f32(round(arg_1.b)))))), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(func_5(vec3<f32>(arg_1.b, _wgslsmith_f_op_f32(var_0.x + -1370f), _wgslsmith_f_op_f32(-arg_1.d)))))), _wgslsmith_clamp_vec3_i32(vec3<i32>(-1i, min(-u_input.e, _wgslsmith_mod_i32(u_input.d, i32(-2147483648))), -12745i), vec3<i32>(select(_wgslsmith_mod_i32(12408i, -62664i), 1i, all(arg_1.a.wxy)), _wgslsmith_dot_vec2_i32(-vec2<i32>(arg_2.x, arg_2.x), arg_2), _wgslsmith_sub_i32(arg_2.x, arg_2.x) | 2147483647i), vec3<i32>(max(15224i, firstTrailingBit(arg_2.x)), _wgslsmith_dot_vec2_i32(arg_2, func_3(global0[_wgslsmith_index_u32(15331u, 8u)], arg_1.a.x, arg_1).e.xz), 50665i)));
                global1 = true;
            }
            default: {
                global1 = !arg_0;
                global0 = array<u32, 8>();
                var var_1 = Struct_1(func_3(select(~global0[_wgslsmith_index_u32(~40580u, 8u)], global0[_wgslsmith_index_u32(4294967295u, 8u)], !arg_0), (0u >> ((u_input.b & global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.c.x, 8u)], 8u)]) % 32u)) >= 18301u, func_3(_wgslsmith_mult_u32(0u, ~1u), !arg_1.a.x || true, func_3(_wgslsmith_mult_u32(0u, 0u), arg_1.a.x, func_3(24170u, true, Struct_1(arg_1.a, -2031f, vec4<f32>(402f, -358f, -1619f, arg_1.c.x), var_0.x, vec3<i32>(-1i, 0i, arg_1.e.x)))))).a, arg_1.c.x, arg_1.c, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1027f + -1029f))))), -func_3(func_4(vec2<f32>(856f, -1000f), select(vec4<bool>(true, false, arg_0, true), vec4<bool>(arg_1.a.x, true, arg_0, arg_1.a.x), arg_1.a.x)), arg_1.a.x, Struct_1(vec4<bool>(arg_0, true, arg_1.a.x, false), arg_1.c.x, _wgslsmith_f_op_vec4_f32(-arg_1.c), _wgslsmith_f_op_f32(-arg_1.b), firstTrailingBit(arg_1.e))).e);
                global0 = array<u32, 8>();
            }
        }
        var_0 = arg_1.c;
        break;
    }
    return Struct_1(vec4<bool>(select(false, global0[_wgslsmith_index_u32(0u, 8u)] < 1u, false), all(arg_1.a), arg_0, true), -899f, _wgslsmith_f_op_vec4_f32(abs(_wgslsmith_f_op_vec4_f32(sign(vec4<f32>(_wgslsmith_f_op_f32(368f + 1486f), _wgslsmith_f_op_f32(f32(-1f) * -830f), 1932f, 211f))))), _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-1696f))), reverseBits(abs(~(vec3<i32>(-17146i, arg_1.e.x, 0i) | arg_1.e))));
}

fn func_8(arg_0: f32, arg_1: Struct_1) -> bool {
    global0 = array<u32, 8>();
    let var_0 = arg_1;
    for (var var_1: i32; ; var_1 -= 1i) {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        global1 = true;
    }
    for (var var_1 = 2181i; ~(_wgslsmith_mod_u32(1u, ~1892u) ^ global0[_wgslsmith_index_u32(29621u, 8u)]) < u_input.c.x; var_1 -= 1i) {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        var var_2 = vec3<u32>(_wgslsmith_dot_vec4_u32(_wgslsmith_add_vec4_u32(_wgslsmith_div_vec4_u32(vec4<u32>(11831u, 12096u, 4294967295u, 1u), ~u_input.c), ~(vec4<u32>(22377u, u_input.b, global0[_wgslsmith_index_u32(9414u, 8u)], 65993u) ^ u_input.c)), u_input.c | vec4<u32>(~1u, ~global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(0u, 8u)], 8u)], _wgslsmith_dot_vec2_u32(u_input.c.xw, vec2<u32>(39000u, u_input.c.x)), 4294967295u)), abs(~(~4294967295u)), _wgslsmith_mod_u32(abs(4294967295u), u_input.a.x));
        loop {
            if (LOOP_COUNTERS[11u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
            var_1 = var_0.e.x;
            let var_3 = vec3<i32>(-12659i, 2147483647i, var_0.e.x);
            continue;
        }
        continue;
    }
    var var_1 = u_input.d;
    return select((arg_1.e.x << (7144u % 32u)) <= ~_wgslsmith_mod_i32(countOneBits(-15875i), 1i), countOneBits(u_input.c.x) < u_input.b, !arg_1.a.x);
}

fn func_1() -> Struct_1 {
    if (!(true && func_8(_wgslsmith_f_op_f32(-276f), func_7(func_2(Struct_1(vec4<bool>(false, true, true, false), 877f, vec4<f32>(336f, 1182f, -517f, -1020f), -1225f, vec3<i32>(i32(-2147483648), u_input.d, u_input.e))), func_3(u_input.b, true, Struct_1(vec4<bool>(false, true, true, true), 525f, vec4<f32>(-1816f, 1000f, 1271f, 185f), 1379f, vec3<i32>(u_input.e, 0i, -42448i))), vec2<i32>(1i, u_input.d))))) {
        var var_0 = ~_wgslsmith_add_vec4_u32(countOneBits(_wgslsmith_sub_vec4_u32(u_input.c & vec4<u32>(0u, 4294967295u, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(57055u, 8u)], 8u)], global0[_wgslsmith_index_u32(0u, 8u)]), u_input.c)), _wgslsmith_mod_vec4_u32(u_input.c, u_input.c));
        switch (-1i) {
            case -51475i: {
                var_0 = vec4<u32>(reverseBits(50532u), ~abs(global0[_wgslsmith_index_u32(func_4(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-730f, -2058f)), vec4<bool>(true, true, false, true)), 8u)]), 20888u, _wgslsmith_add_u32(~select(_wgslsmith_mult_u32(var_0.x, global0[_wgslsmith_index_u32(var_0.x, 8u)]), _wgslsmith_add_u32(0u, var_0.x), all(vec3<bool>(true, true, false))), _wgslsmith_div_u32(2377u, 53449u)));
                var var_1 = vec2<f32>(_wgslsmith_f_op_f32(f32(-1f) * -329f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1000f)));
                var var_2 = -16753i;
                var var_3 = vec2<bool>(_wgslsmith_f_op_f32(-var_1.x) != _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(var_1.x + _wgslsmith_f_op_f32(-var_1.x))), any(vec4<bool>(func_6(), !func_2(Struct_1(vec4<bool>(true, false, true, true), -903f, vec4<f32>(203f, -1629f, 614f, var_1.x), 1133f, vec3<i32>(u_input.d, 1i, 45448i))), all(vec4<bool>(true, true, true, true)), true)));
            }
            default: {
                global1 = any(vec2<bool>((0i != (9346i >> (global0[_wgslsmith_index_u32(0u, 8u)] % 32u))) == (any(vec2<bool>(false, true)) | true), true));
                global1 = func_2(func_7(all(select(func_3(global0[_wgslsmith_index_u32(u_input.a.x, 8u)], false, Struct_1(vec4<bool>(true, true, true, true), 201f, vec4<f32>(151f, 551f, 463f, 836f), 260f, vec3<i32>(2147483647i, 1i, u_input.e))).a.zy, vec2<bool>(true, true), all(vec3<bool>(false, true, false)))), func_7(true, func_3(1u, true, func_7(false, Struct_1(vec4<bool>(true, true, false, true), 300f, vec4<f32>(-836f, 114f, -1059f, -691f), -2157f, vec3<i32>(1i, 45600i, 0i)), vec2<i32>(-8389i, u_input.d))), select(vec2<i32>(u_input.e, -1i), vec2<i32>(0i, 12070i), all(vec3<bool>(false, true, true)))), abs(max(vec2<i32>(11870i, u_input.e), -vec2<i32>(u_input.d, u_input.d)))));
                var_0 = u_input.c;
                var var_1 = !(!any(select(vec3<bool>(false, false, false), vec3<bool>(true, true, true), vec3<bool>(true, true, false))));
            }
        }
    }
    let var_0 = vec2<bool>(true, true);
    if (true) {
    }
    for (var var_1 = 37265i; var_0.x; var_1 -= 1i) {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        var_1 = min(_wgslsmith_mult_i32(abs(-u_input.e), -(~select(u_input.e, 37976i, false))), i32(-1i) * -81357i);
        switch (i32(-1i) * -func_7(true, func_3(u_input.c.x, false, Struct_1(vec4<bool>(true, var_0.x, false, false), 536f, vec4<f32>(599f, 1000f, -583f, 1204f), -169f, vec3<i32>(-1i, 1i, -49122i))), abs(-vec2<i32>(i32(-2147483648), 0i))).e.x) {
            default: {
            }
        }
        for (var var_2 = 1i; false; var_2 += 1i) {
            if (LOOP_COUNTERS[13u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
            var var_3 = select(vec4<bool>(true, true, func_6(), u_input.d > countOneBits(~u_input.d)), select(!(!(!vec4<bool>(true, var_0.x, true, false))), vec4<bool>(false, var_0.x, !(!var_0.x), true), select(!vec4<bool>(false, true, var_0.x, false), vec4<bool>(true, func_2(Struct_1(vec4<bool>(true, var_0.x, var_0.x, false), -540f, vec4<f32>(-717f, -129f, -789f, 1598f), -151f, vec3<i32>(u_input.d, 23505i, 68739i))), select(false, var_0.x, false), var_0.x && var_0.x), true)), var_0.x);
            var_1 = 2147483647i;
            break;
        }
        for (var var_2 = 1i; var_2 >= -1i; var_2 = max(u_input.d, 2147483647i)) {
            if (LOOP_COUNTERS[14u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
            var var_3 = global0[_wgslsmith_index_u32(4294967295u, 8u)] >= u_input.b;
            var var_4 = _wgslsmith_f_op_vec2_f32(_wgslsmith_div_vec2_f32(vec2<f32>(-1320f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(657f, -2155f, true)))), _wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(-605f * -575f), _wgslsmith_div_f32(-847f, 1277f)))) + vec2<f32>(_wgslsmith_f_op_f32(min(1021f, -776f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1000f))));
            continue;
        }
        return Struct_1(select(vec4<bool>(true, true, false, true), !vec4<bool>(var_0.x, u_input.e != u_input.d, var_0.x, true), false & any(vec3<bool>(true, var_0.x, true))), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(f32(-1f) * -518f), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(-1302f, -1034f)), 1f)))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-1234f, -670f, 368f, 312f)) * _wgslsmith_f_op_vec4_f32(-vec4<f32>(147f, 718f, -2116f, 648f)))) * vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(493f, -1017f)) * _wgslsmith_f_op_f32(-180f - 1426f)), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(round(-911f)))), _wgslsmith_f_op_f32(func_5(_wgslsmith_f_op_vec3_f32(round(vec3<f32>(-166f, 1564f, -455f))))), _wgslsmith_f_op_f32(1945f * _wgslsmith_f_op_f32(round(-639f))))), -346f, select(vec3<i32>((u_input.e ^ u_input.d) >> (4294967295u % 32u), _wgslsmith_mod_i32(min(u_input.e, u_input.e), 1i), u_input.e << (~u_input.b % 32u)), ~(~max(vec3<i32>(-1i, -27915i, u_input.d), vec3<i32>(-40112i, -42405i, -1264i))), func_7(true, Struct_1(func_3(4294967295u, true, Struct_1(vec4<bool>(false, false, var_0.x, var_0.x), 1777f, vec4<f32>(-431f, 1218f, 437f, -1412f), -337f, vec3<i32>(u_input.d, u_input.e, -1i))).a, _wgslsmith_f_op_f32(-377f + 1000f), _wgslsmith_f_op_vec4_f32(vec4<f32>(954f, -973f, -430f, 1285f) - vec4<f32>(1069f, 1227f, -1084f, 1302f)), _wgslsmith_div_f32(-1737f, 2109f), ~vec3<i32>(0i, -24375i, u_input.d)), vec2<i32>(u_input.e ^ 0i, 1i)).a.wwy));
    }
    global0 = array<u32, 8>();
    return Struct_1(vec4<bool>(true, !(var_0.x & false), true, var_0.x), _wgslsmith_f_op_f32(-1000f + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-574f), _wgslsmith_f_op_f32(-820f))))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(abs(vec4<f32>(-917f, -1416f, 727f, 552f))), _wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(217f, -1280f, 879f, 490f))))) + _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(-1059f, 620f, 642f, 1200f) - vec4<f32>(-140f, -683f, -327f, -532f))))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(194f + 916f))) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(-660f)))), _wgslsmith_sub_vec3_i32(firstLeadingBit(min(vec3<i32>(27297i, -1i, u_input.d), vec3<i32>(u_input.d, u_input.d, 52112i)) | -vec3<i32>(u_input.e, 41495i, i32(-2147483648))), vec3<i32>(-func_7(false, Struct_1(vec4<bool>(var_0.x, var_0.x, false, true), 1124f, vec4<f32>(1403f, -342f, -1941f, -1534f), 1686f, vec3<i32>(u_input.d, -1i, 1i)), vec2<i32>(u_input.e, -1i)).e.x, 12492i, _wgslsmith_dot_vec4_i32(firstLeadingBit(vec4<i32>(8071i, u_input.e, u_input.d, 2147483647i)), abs(vec4<i32>(42322i, 1i, u_input.e, 1i))))));
}

@compute
@workgroup_size(1)
fn main() {
    let var_0 = func_1();
    var var_1 = u_input.c.yzz;
    loop {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
        continue;
    }
    switch (50904i) {
        case -33264i: {
            switch (9457i) {
                case -1i: {
                    let var_2 = _wgslsmith_dot_vec3_u32((vec3<u32>(func_4(vec2<f32>(var_0.c.x, var_0.b), vec4<bool>(true, true, false, var_0.a.x)), ~u_input.c.x, 1u) & _wgslsmith_sub_vec3_u32(vec3<u32>(u_input.a.x, global0[_wgslsmith_index_u32(1u, 8u)], 41053u), vec3<u32>(var_1.x, 1u, 14078u))) | _wgslsmith_add_vec3_u32(vec3<u32>(4294967295u, ~54099u, 1u), u_input.c.zxx), vec3<u32>(var_1.x << (_wgslsmith_add_u32(_wgslsmith_add_u32(1u, 1u), 4471u) % 32u), 0u, 25613u));
                    let var_3 = vec4<u32>(_wgslsmith_dot_vec3_u32(~(~vec3<u32>(4294967295u, var_2, var_1.x)), vec3<u32>(12113u, 42492u, _wgslsmith_dot_vec3_u32(u_input.c.wyw, u_input.c.wwx) >> ((62484u | global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(1u, 8u)], 8u)], 8u)]) % 32u))), _wgslsmith_clamp_u32(~(~_wgslsmith_mod_u32(4294967295u, var_1.x)), var_2, var_2), 4294967295u, 46230u);
                    var var_4 = _wgslsmith_f_op_f32(select(_wgslsmith_div_f32(var_0.c.x, var_0.b), var_0.c.x, func_2(Struct_1(vec4<bool>(i32(-2147483648) > var_0.e.x, var_0.a.x, true, var_0.a.x), var_0.d, _wgslsmith_f_op_vec4_f32(-vec4<f32>(var_0.d, var_0.d, var_0.c.x, var_0.d)), var_0.c.x, -func_3(var_3.x, var_0.a.x, var_0).e))));
                    global0 = array<u32, 8>();
                }
                default: {
                    let var_2 = !var_0.a.zzx;
                    global0 = array<u32, 8>();
                    let var_3 = vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(var_0.b, 1060f)))) * var_0.d), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -293f)), _wgslsmith_f_op_f32(-732f * _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(f32(-1f) * -1000f)))), var_0.d);
                }
            }
        }
        default: {
            for (var var_2: i32; var_2 >= 0i; global0 = array<u32, 8>()) {
                if (LOOP_COUNTERS[16u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
                let var_3 = vec2<f32>(_wgslsmith_f_op_f32(-1000f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(step(-1567f, -1000f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_0.c.x)), !all(vec2<bool>(true, true))))));
                break;
            }
        }
    }
    var var_2 = func_7(!(_wgslsmith_mult_i32(var_0.e.x, var_0.e.x) == firstLeadingBit(-42125i)) != false, func_1(), -var_0.e.zx);
    var var_3 = -1095f;
    loop {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
        loop {
            if (LOOP_COUNTERS[18u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
            let var_4 = var_0;
            let var_5 = _wgslsmith_mult_vec2_i32(countOneBits(firstTrailingBit(_wgslsmith_clamp_vec2_i32(select(vec2<i32>(var_2.e.x, i32(-2147483648)), vec2<i32>(var_0.e.x, 2147483647i), var_2.a.xx), _wgslsmith_sub_vec2_i32(vec2<i32>(1i, 24103i), var_0.e.yx), var_2.e.yy))), vec2<i32>(-(~(0i << (var_1.x % 32u))), var_2.e.x));
            let var_6 = var_1.x;
        }
        switch (i32(-2147483648)) {
            default: {
                var var_4 = var_0;
            }
        }
    }
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(var_0.d - var_2.c.x) * 760f) + func_7(var_2.a.x, func_7(global0[_wgslsmith_index_u32(var_1.x, 8u)] >= var_1.x, var_0, _wgslsmith_div_vec2_i32(vec2<i32>(u_input.d, 1i), vec2<i32>(var_2.e.x, var_2.e.x))), ~(-vec2<i32>(0i, i32(-2147483648)))).d), u_input.a, var_2.b, vec4<f32>(_wgslsmith_f_op_f32(-982f - func_7(var_2.a.x & var_0.a.x, Struct_1(vec4<bool>(true, false, var_2.a.x, true), var_2.d, var_0.c, var_2.c.x, vec3<i32>(1i, i32(-2147483648), var_2.e.x)), vec2<i32>(31715i, var_0.e.x)).b), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(_wgslsmith_div_f32(-355f, -395f), -1000f)) + 684f), _wgslsmith_f_op_f32(_wgslsmith_div_f32(var_2.c.x, _wgslsmith_f_op_f32(func_5(var_0.c.zyw))) * var_0.c.x), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(exp2(var_2.d)), _wgslsmith_f_op_f32(abs(var_0.c.x)), !var_0.a.x)) - _wgslsmith_f_op_f32(-737f))));
}

`;