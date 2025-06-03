export const input = [96,209,95,106,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [96,209,95,106,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[96,209,95,106]}
// Seed: 1441760532851276280

struct Struct_1 {
    a: vec4<bool>,
    b: i32,
}

struct UniformBuffer {
    a: u32,
}

struct StorageBuffer {
    a: vec3<i32>,
    b: i32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: Struct_1;

var<private> LOOP_COUNTERS: array<u32, 7>;

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn func_1(arg_0: i32, arg_1: f32, arg_2: bool, arg_3: u32) -> bool {
    var var_0 = max(~5734u, arg_3);
    var var_1 = vec2<f32>(1000f, arg_1);
    var var_2 = Struct_1(global0.a, 2147483647i);
    global0 = Struct_1(vec4<bool>(min(~1i, -arg_0) > _wgslsmith_clamp_i32(_wgslsmith_add_i32(global0.b, 7531i), -38769i, _wgslsmith_add_i32(0i, i32(-2147483648))), var_2.a.x, max(14579i, var_2.b) >= global0.b, any(!var_2.a.zw) == ((1733u <= u_input.a) | true)), _wgslsmith_div_i32(0i, _wgslsmith_mult_i32(-1i, ~(i32(-2147483648)))) | global0.b);
    for (var var_3 = 0i; var_3 != -52804i; var_3 -= 1i) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
    }
    return any(global0.a.xy);
}

fn func_4(arg_0: Struct_1, arg_1: Struct_1) -> i32 {
    global0 = Struct_1(!arg_1.a, reverseBits(~(-global0.b) >> (~u_input.a % 32u)));
    let var_0 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(178f, -1287f, 1250f, 1000f)) - vec4<f32>(_wgslsmith_f_op_f32(floor(1263f)), _wgslsmith_f_op_f32(1300f - -1012f), _wgslsmith_f_op_f32(400f + 364f), _wgslsmith_f_op_f32(step(527f, 464f))))));
    switch (~_wgslsmith_mod_i32(arg_1.b, ~(_wgslsmith_sub_i32(arg_1.b, 2147483647i) ^ _wgslsmith_dot_vec2_i32(vec2<i32>(i32(-2147483648), i32(-2147483648)), vec2<i32>(i32(-2147483648), -10829i))))) {
        default: {
            let var_1 = 770f;
            var var_2 = vec2<bool>(!(!arg_1.a.x), ~_wgslsmith_add_i32(global0.b, 1i) <= arg_1.b);
            let var_3 = Struct_1(global0.a, 1i);
        }
    }
    let var_1 = vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1f + _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-var_0.x))))), 1514f, _wgslsmith_f_op_f32(f32(-1f) * -2337f));
    loop {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        var var_2 = _wgslsmith_f_op_f32(-113f);
        loop {
            if (LOOP_COUNTERS[2u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            var var_3 = arg_1.b;
            break;
        }
        return _wgslsmith_dot_vec4_i32((_wgslsmith_div_vec4_i32(~vec4<i32>(-1i, i32(-2147483648), -1i, arg_0.b), vec4<i32>(42201i, -28988i, -8159i, arg_1.b)) << (vec4<u32>(~u_input.a, 1u, ~1u, u_input.a) % vec4<u32>(32u))) & _wgslsmith_clamp_vec4_i32(-vec4<i32>(arg_0.b, 9415i, 1i, 0i) << (abs(vec4<u32>(u_input.a, 33552u, u_input.a, u_input.a)) % vec4<u32>(32u)), ~reverseBits(vec4<i32>(0i, -1i, arg_1.b, -15954i)), vec4<i32>(arg_0.b | arg_1.b, -1i, _wgslsmith_clamp_i32(-7924i, 3589i, global0.b), _wgslsmith_add_i32(1i, 1i))), vec4<i32>(-min(-arg_0.b, -arg_0.b), _wgslsmith_mult_i32(arg_1.b, 1i), global0.b & -49209i, -27517i >> (1u % 32u)));
    }
    return _wgslsmith_mult_i32(3259i, arg_1.b);
}

fn func_6(arg_0: vec2<u32>, arg_1: u32) -> bool {
    var var_0 = global0.a.zwz;
    var var_1 = _wgslsmith_f_op_f32(select(-451f, -638f, (var_0.x | global0.a.x) || !all(!global0.a.ww)));
    let var_2 = Struct_1(select(vec4<bool>(any(select(vec2<bool>(var_0.x, false), global0.a.xy, var_0.zz)), var_0.x, true == !global0.a.x, var_0.x), select(select(!vec4<bool>(true, false, var_0.x, false), vec4<bool>(true, false, true, global0.a.x), false), !vec4<bool>(true, global0.a.x, true, global0.a.x), global0.a), vec4<bool>(all(vec2<bool>(global0.a.x, global0.a.x)), var_0.x, false, !(31047u > arg_1))), ~max(-28330i, global0.b | (i32(-1i) * -1i)));
    global0 = Struct_1(select(vec4<bool>(true, !var_2.a.x, false, global0.a.x), select(!var_2.a, select(!vec4<bool>(var_2.a.x, true, var_2.a.x, true), vec4<bool>(true, false, global0.a.x, global0.a.x), !var_0.x), global0.a.x), any(select(select(var_2.a.yyx, var_2.a.wwy, vec3<bool>(var_2.a.x, var_0.x, true)), !var_2.a.xyw, var_2.a.x))), ~(-2787i));
    var_0 = select(select(!global0.a.xzz, select(vec3<bool>(true, !global0.a.x, true), vec3<bool>(true, false, var_0.x), var_2.a.zyy), false), select(!select(global0.a.yxy, !vec3<bool>(global0.a.x, var_0.x, false), var_2.a.yzy), vec3<bool>(true, var_2.a.x, any(!var_2.a)), vec3<bool>(true, false, var_0.x)), false);
    return false;
}

fn func_5(arg_0: Struct_1, arg_1: vec3<u32>) -> i32 {
    let var_0 = select(vec4<bool>(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(f32(-1f) * -1000f))) == _wgslsmith_f_op_f32(trunc(-374f)), global0.a.x, func_6(_wgslsmith_mod_vec2_u32(vec2<u32>(4294967295u, 0u), arg_1.xx >> (arg_1.yx % vec2<u32>(32u))), 0u << (abs(1u) % 32u)), !global0.a.x), !(!select(vec4<bool>(false, global0.a.x, arg_0.a.x, false), arg_0.a, false)), func_1(global0.b ^ countOneBits(reverseBits(arg_0.b)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1332f) + -1092f)), global0.a.x && !select(true, arg_0.a.x, arg_0.a.x), 1u));
    let var_1 = Struct_1(!vec4<bool>(false, arg_1.x != u_input.a, false, true), ~_wgslsmith_dot_vec4_i32(select(~vec4<i32>(-8991i, global0.b, 29578i, global0.b), abs(vec4<i32>(i32(-2147483648), -60916i, global0.b, arg_0.b)), vec4<bool>(var_0.x, false, global0.a.x, true)), vec4<i32>(-global0.b, arg_0.b, _wgslsmith_clamp_i32(-24907i, global0.b, -2540i), -1i)));
    var var_2 = _wgslsmith_f_op_vec4_f32(min(vec4<f32>(_wgslsmith_div_f32(_wgslsmith_div_f32(-1057f, _wgslsmith_f_op_f32(floor(-767f))), _wgslsmith_f_op_f32(step(1047f, _wgslsmith_f_op_f32(-448f)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(-825f))), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(-1994f, -1701f)) - _wgslsmith_f_op_f32(f32(-1f) * -1311f)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(471f)) + -378f))), vec4<f32>(1f, _wgslsmith_f_op_f32(ceil(610f)), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(613f + 291f), 678f)))), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(f32(-1f) * -1151f))), -126f)))));
    var var_3 = ~(~27219u);
    if (!all(select(vec2<bool>(global0.a.x, var_0.x | global0.a.x), select(!var_0.ww, arg_0.a.wx, any(arg_0.a)), !global0.a.x & var_0.x))) {
        let var_4 = vec3<bool>(!arg_0.a.x, var_1.a.x, all(vec4<bool>(global0.a.x, !var_0.x, var_0.x, (false && var_1.a.x) || true)));
        var var_5 = Struct_1(vec4<bool>(false, true, all(select(var_4.yx, global0.a.wz, !vec2<bool>(var_1.a.x, arg_0.a.x))), func_6(arg_1.xy, _wgslsmith_dot_vec2_u32(abs(vec2<u32>(u_input.a, u_input.a)), ~arg_1.yy))), 16595i);
    }
    return ~var_1.b;
}

fn func_7(arg_0: vec3<f32>, arg_1: i32, arg_2: bool) -> f32 {
    if (func_6(vec2<u32>(_wgslsmith_div_u32(~select(18707u, u_input.a, false), ~abs(u_input.a)), 29914u), reverseBits(firstLeadingBit(~(~1u))))) {
        if (_wgslsmith_mult_u32(u_input.a, u_input.a) > u_input.a) {
            var var_0 = 1011f;
            var_0 = _wgslsmith_f_op_f32(round(-823f));
        }
        switch (arg_1) {
            default: {
                global0 = Struct_1(!(!global0.a), _wgslsmith_mod_i32(_wgslsmith_mod_i32(2147483647i, firstTrailingBit(~(-3173i))), select(-arg_1, -1i, true)));
                let var_0 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(arg_0.x * arg_0.x), _wgslsmith_f_op_f32(1017f * 1f));
                global0 = Struct_1(global0.a, global0.b);
                var var_1 = Struct_1(!select(vec4<bool>(!global0.a.x, arg_2, arg_2 & false, false), vec4<bool>(false, true, false, arg_2), true), -1i);
            }
        }
        var var_0 = Struct_1(global0.a, arg_1);
    }
    switch (0i) {
        case -8625i: {
            var var_0 = arg_0.x;
        }
        case 2147483647i: {
            for (; !arg_2; ) {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
                global0 = Struct_1(select(!select(!vec4<bool>(arg_2, true, arg_2, global0.a.x), vec4<bool>(true, true, arg_2, global0.a.x), true), global0.a, select(any(vec4<bool>(global0.a.x, arg_2, false, global0.a.x)) && func_6(vec2<u32>(u_input.a, u_input.a), 1u), !any(vec4<bool>(true, true, true, global0.a.x)), all(global0.a))), select(~2147483647i, 1i, global0.a.x));
                break;
            }
            let var_0 = global0.b;
        }
        case -16997i: {
        }
        default: {
            global0 = Struct_1(!vec4<bool>(arg_2, ~u_input.a == ~u_input.a, !any(global0.a.wxw), global0.a.x), 41005i);
            for (var var_0 = 0i; var_0 < -1i; var_0 = global0.b & ~(-7170i)) {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                global0 = Struct_1(vec4<bool>(true, true, arg_2, !all(select(global0.a.wzz, global0.a.zzy, global0.a.wwy))), arg_1 & ~(-6218i));
                let var_1 = vec4<bool>(false, !func_1(reverseBits(~arg_1), arg_0.x, arg_2, (9403u | u_input.a) | ~1u), any(select(!select(global0.a, global0.a, vec4<bool>(arg_2, true, false, arg_2)), vec4<bool>(false && arg_2, arg_0.x > arg_0.x, false, arg_2), select(vec4<bool>(global0.a.x, false, true, false), vec4<bool>(true, true, arg_2, true), arg_0.x <= -779f))), true);
            }
            let var_0 = Struct_1(global0.a, ~max(_wgslsmith_dot_vec4_i32(_wgslsmith_add_vec4_i32(vec4<i32>(arg_1, i32(-2147483648), arg_1, i32(-2147483648)), vec4<i32>(global0.b, -1i, arg_1, arg_1)), vec4<i32>(arg_1, arg_1, i32(-2147483648), 0i)), 28750i));
            let var_1 = Struct_1(global0.a, ~var_0.b);
            global0 = var_0;
        }
    }
    let var_0 = _wgslsmith_sub_i32(i32(-2147483648), global0.b);
    var var_1 = Struct_1(select(vec4<bool>(global0.a.x, true || (global0.a.x | arg_2), global0.a.x, any(vec3<bool>(true, true, true))), vec4<bool>(all(global0.a), global0.a.x && func_1(global0.b, arg_0.x, arg_2, u_input.a), func_1(6479i, _wgslsmith_f_op_f32(arg_0.x * arg_0.x), !arg_2, _wgslsmith_clamp_u32(0u, u_input.a, 0u)), global0.a.x), vec4<bool>(!any(global0.a), 1744f >= arg_0.x, any(select(vec2<bool>(false, false), vec2<bool>(global0.a.x, true), true)), true)), _wgslsmith_mult_i32(_wgslsmith_sub_i32(-51323i, firstLeadingBit(1i)), global0.b));
    return _wgslsmith_div_f32(_wgslsmith_div_f32(arg_0.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(sign(arg_0.x)), arg_0.x)) - arg_0.x)), 379f);
}

fn func_3(arg_0: Struct_1, arg_1: vec4<bool>, arg_2: vec4<bool>) -> Struct_1 {
    var var_0 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(vec4<f32>(-121f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-130f) + -1849f), 1f, 938f), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(-vec4<f32>(211f, -1192f, -356f, -429f)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(384f, 255f, -1393f, 1201f)))) * _wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(-962f, 167f, -859f, -143f))))));
    let var_1 = false;
    let var_2 = 863f;
    for (var var_3 = -7920i; var_3 != 0i; var_3 = func_4(arg_0, Struct_1(!select(!global0.a, !vec4<bool>(var_1, false, false, arg_1.x), !arg_1), arg_0.b))) {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        var var_4 = _wgslsmith_f_op_f32(func_7(_wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(var_0.x, var_0.x, var_2) - var_0.xyy) + _wgslsmith_f_op_vec3_f32(abs(vec3<f32>(-543f, 1000f, var_0.x)))), vec3<f32>(var_2, 2446f, _wgslsmith_f_op_f32(var_2 * var_0.x)))), func_5(Struct_1(!arg_0.a, arg_0.b), ~firstLeadingBit(vec3<u32>(u_input.a, u_input.a, u_input.a))), false | arg_2.x));
        let var_5 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-var_0.x)))));
        var var_6 = select(!(!arg_1.xy), arg_1.yz, select(vec2<bool>(any(arg_0.a), arg_2.x), vec2<bool>(false, var_1), select(arg_1.x, arg_1.x, true)));
        var var_7 = Struct_1(global0.a, 11230i);
        let var_8 = arg_0;
    }
    global0 = Struct_1(select(vec4<bool>((arg_0.b ^ global0.b) >= global0.b, select(4294967295u < u_input.a, false, true), arg_0.a.x, var_1), vec4<bool>(!(!global0.a.x), global0.a.x, arg_2.x, !all(arg_2.xwy)), !(!(!arg_0.a))), reverseBits(global0.b));
    return arg_0;
}

fn func_8(arg_0: Struct_1, arg_1: vec4<i32>) -> i32 {
    let var_0 = _wgslsmith_f_op_f32(-1f);
    let var_1 = Struct_1(arg_0.a, arg_1.x);
    global0 = func_3(Struct_1(var_1.a, i32(-2147483648)), select(select(select(func_3(var_1, vec4<bool>(global0.a.x, arg_0.a.x, false, arg_0.a.x), var_1.a).a, arg_0.a, true | arg_0.a.x), arg_0.a, func_1(var_1.b, var_0, var_1.a.x, 36673u) && any(var_1.a.zz)), vec4<bool>(_wgslsmith_f_op_f32(-var_0) == _wgslsmith_f_op_f32(1000f - -535f), ~u_input.a < 37099u, true, u_input.a <= ~103979u), global0.a.x || (var_1.a.x || true)), vec4<bool>(u_input.a > 1u, true, all(arg_0.a), global0.a.x));
    global0 = Struct_1(func_3(func_3(Struct_1(!var_1.a, var_1.b), var_1.a, vec4<bool>(all(vec3<bool>(true, global0.a.x, false)), true, 331f >= var_0, global0.a.x)), vec4<bool>(arg_0.a.x, true, true, 1i < global0.b), global0.a).a, select(60369i, arg_0.b, (var_1.b | var_1.b) > _wgslsmith_sub_i32(-30267i, 1i)));
    let var_2 = -1i;
    return var_2;
}

fn func_2(arg_0: i32, arg_1: u32, arg_2: Struct_1) -> bool {
    if (false) {
        if (true) {
            global0 = arg_2;
            var var_0 = _wgslsmith_add_vec3_i32(vec3<i32>(-1i) * -(abs(vec3<i32>(1i, i32(-2147483648), 2147483647i)) ^ _wgslsmith_mult_vec3_i32(vec3<i32>(global0.b, global0.b, -37014i), vec3<i32>(14346i, arg_2.b, arg_0))), vec3<i32>(_wgslsmith_clamp_i32(2147483647i, arg_2.b, -1i), _wgslsmith_div_i32(abs(arg_0), arg_2.b), select(~arg_0, i32(-2147483648), false)) ^ vec3<i32>(countOneBits(arg_0), func_8(func_3(arg_2, vec4<bool>(false, true, arg_2.a.x, false), arg_2.a), ~vec4<i32>(arg_2.b, global0.b, global0.b, 0i)), countOneBits(39402i)));
            var var_1 = arg_2.a.x;
        }
        let var_0 = func_3(Struct_1(select(!arg_2.a, vec4<bool>(true, all(arg_2.a.wx), true, true), global0.a.x), -1i), vec4<bool>(arg_2.a.x, _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(1537f + 1207f))) <= _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(1394f * -338f) * _wgslsmith_f_op_f32(ceil(-660f))), true, true), func_3(func_3(func_3(arg_2, !vec4<bool>(false, arg_2.a.x, arg_2.a.x, true), arg_2.a), vec4<bool>(true, !arg_2.a.x, arg_2.a.x, false), vec4<bool>(true, global0.a.x, arg_2.a.x, true)), global0.a, func_3(Struct_1(vec4<bool>(global0.a.x, true, global0.a.x, false), max(i32(-2147483648), global0.b)), vec4<bool>(false, false & global0.a.x, global0.a.x, global0.a.x), select(arg_2.a, !vec4<bool>(arg_2.a.x, global0.a.x, arg_2.a.x, arg_2.a.x), !vec4<bool>(global0.a.x, arg_2.a.x, global0.a.x, global0.a.x))).a).a);
        let var_1 = var_0;
        switch (arg_2.b) {
            case 1i: {
                global0 = func_3(var_0, vec4<bool>(global0.a.x, func_1(func_4(func_3(Struct_1(var_1.a, var_0.b), arg_2.a, arg_2.a), func_3(var_0, vec4<bool>(true, var_1.a.x, var_0.a.x, false), vec4<bool>(global0.a.x, false, arg_2.a.x, var_0.a.x))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(-1000f, -1000f))), false, 78733u), select(true, 1i != max(arg_2.b, arg_2.b), !(!var_1.a.x)), !arg_2.a.x), vec4<bool>(any(var_1.a.yyw), false, (global0.a.x | !var_1.a.x) & var_1.a.x, arg_2.a.x));
            }
            case i32(-2147483648): {
                let var_2 = -(1i | -func_5(var_1, select(vec3<u32>(103626u, u_input.a, 4576u), vec3<u32>(u_input.a, 1u, 0u), vec3<bool>(true, false, var_1.a.x))));
                global0 = func_3(var_0, vec4<bool>(true, !all(arg_2.a.yxy), true, true), vec4<bool>(!all(vec2<bool>(true, var_0.a.x)) | !all(var_0.a.wyx), false, 1u >= u_input.a, func_1(_wgslsmith_sub_i32(0i, var_1.b), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(131f * -911f)), func_3(arg_2, var_1.a, select(vec4<bool>(arg_2.a.x, true, true, global0.a.x), var_1.a, var_0.a)).a.x, ~(~1u))));
                let var_3 = var_1.b;
                global0 = func_3(Struct_1(vec4<bool>(!select(false, global0.a.x, false), select(var_1.a.x, var_1.a.x, var_1.a.x), true, func_1(var_0.b, _wgslsmith_f_op_f32(-470f - -1069f), all(vec3<bool>(arg_2.a.x, false, true)), 4294967295u)), global0.b), !vec4<bool>(all(arg_2.a), global0.a.x, global0.a.x | true, (true & arg_2.a.x) | true), vec4<bool>(false, arg_1 == 72273u, !var_0.a.x, !func_6(firstTrailingBit(vec2<u32>(u_input.a, 0u)), 31057u)));
                let var_4 = Struct_1(vec4<bool>(func_6(~abs(vec2<u32>(24313u, arg_1)), ~_wgslsmith_div_u32(56445u, u_input.a)), !var_1.a.x, false, true), global0.b << (~0u % 32u));
            }
            case 2147483647i: {
                let var_2 = func_3(Struct_1(!select(vec4<bool>(true, var_1.a.x, true, arg_2.a.x), !var_1.a, true), func_4(func_3(func_3(var_0, var_0.a, var_1.a), !vec4<bool>(var_1.a.x, global0.a.x, true, global0.a.x), arg_2.a), func_3(Struct_1(global0.a, i32(-2147483648)), global0.a, arg_2.a))), !(!select(vec4<bool>(arg_2.a.x, var_0.a.x, false, true), vec4<bool>(var_1.a.x, var_0.a.x, global0.a.x, var_0.a.x), true)), vec4<bool>(_wgslsmith_f_op_f32(1733f - _wgslsmith_f_op_f32(floor(-769f))) > _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -1121f) - _wgslsmith_f_op_f32(487f + 201f)), false, func_3(Struct_1(func_3(arg_2, vec4<bool>(var_0.a.x, arg_2.a.x, true, var_1.a.x), vec4<bool>(global0.a.x, false, false, var_0.a.x)).a, -arg_0), select(!vec4<bool>(true, false, var_0.a.x, true), select(var_1.a, var_0.a, var_1.a), select(global0.a, vec4<bool>(true, var_1.a.x, var_0.a.x, true), global0.a.x)), !vec4<bool>(var_0.a.x, var_0.a.x, true, false)).a.x, !(_wgslsmith_add_u32(u_input.a, arg_1) > ~arg_1)));
                return var_2.a.x;
            }
            case -1i: {
            }
            default: {
            }
        }
        var var_2 = firstLeadingBit(4294967295u);
    }
    global0 = Struct_1(global0.a, func_5(arg_2, _wgslsmith_sub_vec3_u32(firstLeadingBit(vec3<u32>(arg_1, 66566u, 4294967295u) >> (vec3<u32>(arg_1, 0u, arg_1) % vec3<u32>(32u))), vec3<u32>(firstLeadingBit(1u), _wgslsmith_mod_u32(4294967295u, u_input.a), _wgslsmith_sub_u32(4591u, arg_1)))));
    if (u_input.a > max(1u, 0u)) {
        global0 = Struct_1(vec4<bool>(_wgslsmith_f_op_f32(sign(_wgslsmith_div_f32(-640f, 1174f))) == _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(1996f + -1281f) * _wgslsmith_f_op_f32(max(-593f, 565f))), !arg_2.a.x, true, true), global0.b);
        if (global0.a.x) {
            let var_0 = 1i >> (firstTrailingBit(_wgslsmith_mult_u32(arg_1, ~u_input.a)) % 32u);
            let var_1 = -(vec3<i32>(var_0, _wgslsmith_add_i32(49066i, 1i), firstLeadingBit(39276i << (u_input.a % 32u))) | _wgslsmith_clamp_vec3_i32(-(vec3<i32>(10694i, arg_2.b, arg_2.b) | vec3<i32>(var_0, var_0, global0.b)), -_wgslsmith_add_vec3_i32(vec3<i32>(var_0, i32(-2147483648), 10103i), vec3<i32>(var_0, arg_0, arg_2.b)), -vec3<i32>(arg_0, 18655i, 2147483647i)));
            var var_2 = ~global0.b;
        }
    }
    global0 = func_3(func_3(arg_2, global0.a, select(!arg_2.a, arg_2.a, vec4<bool>(!global0.a.x, true, global0.a.x, false))), func_3(func_3(arg_2, global0.a, select(!vec4<bool>(true, global0.a.x, arg_2.a.x, global0.a.x), vec4<bool>(global0.a.x, false, false, true), !arg_2.a.x)), func_3(arg_2, select(arg_2.a, select(vec4<bool>(true, arg_2.a.x, arg_2.a.x, global0.a.x), global0.a, false), true), select(vec4<bool>(true, false, global0.a.x, arg_2.a.x), arg_2.a, arg_2.a.x)).a, arg_2.a).a, !global0.a);
    global0 = func_3(arg_2, vec4<bool>(select(true, arg_2.a.x, global0.a.x), _wgslsmith_f_op_f32(-1715f) < _wgslsmith_f_op_f32(ceil(-2037f)), any(vec2<bool>(arg_2.a.x || arg_2.a.x, arg_2.a.x)), true), !select(select(select(vec4<bool>(arg_2.a.x, false, false, global0.a.x), vec4<bool>(global0.a.x, global0.a.x, false, true), global0.a), vec4<bool>(arg_2.a.x, global0.a.x, true, global0.a.x), select(vec4<bool>(true, true, true, true), vec4<bool>(arg_2.a.x, global0.a.x, false, global0.a.x), false)), arg_2.a, arg_2.a));
    return _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-100f + _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-328f), _wgslsmith_div_f32(228f, 231f))))) < _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1f) - _wgslsmith_f_op_f32(step(-703f, -1117f)));
}

@compute
@workgroup_size(1)
fn main() {
    global0 = Struct_1(select(vec4<bool>(!(!global0.a.x), false, true, global0.a.x), global0.a, select(vec4<bool>(func_1(global0.b, -403f, true, 4294967295u), all(vec2<bool>(global0.a.x, global0.a.x)), global0.a.x || global0.a.x, func_2(29958i, 7971u, Struct_1(global0.a, global0.b))), !(!global0.a), !global0.a.x)), max(global0.b, min(~(-global0.b), func_4(func_3(Struct_1(global0.a, global0.b), global0.a, global0.a), func_3(Struct_1(global0.a, global0.b), vec4<bool>(true, global0.a.x, true, false), global0.a)))));
    var var_0 = -56894i;
    for (var var_1 = 24261i; ; var_1 -= 1i) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
    }
    var_0 = -(~_wgslsmith_mult_i32((i32(-1i) * -9687i) >> (u_input.a % 32u), -1i));
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_sub_vec3_i32(vec3<i32>(-global0.b, -34328i ^ ~global0.b, _wgslsmith_div_i32(global0.b, reverseBits(global0.b))), _wgslsmith_sub_vec3_i32(-(vec3<i32>(global0.b, global0.b, -11646i) | vec3<i32>(global0.b, i32(-2147483648), -16293i)), vec3<i32>(1i, global0.b, -9607i))), (~_wgslsmith_mod_i32(40906i, 2147483647i) ^ (~global0.b & countOneBits(i32(-2147483648)))) & 15153i);
}

`;