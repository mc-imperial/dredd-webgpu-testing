export const input = [107,91,236,243,227,200,185,36,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [107,91,236,243,227,200,185,36,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[107,91,236,243,227,200,185,36]}
// Seed: 14235979699648517858

struct Struct_1 {
    a: u32,
    b: f32,
    c: bool,
    d: u32,
}

struct UniformBuffer {
    a: vec2<i32>,
}

struct StorageBuffer {
    a: vec4<u32>,
    b: i32,
    c: u32,
    d: vec2<u32>,
    e: f32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> LOOP_COUNTERS: array<u32, 32>;

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn func_6(arg_0: Struct_1, arg_1: bool, arg_2: Struct_1) -> u32 {
    let var_0 = vec3<f32>(_wgslsmith_f_op_f32(-1323f), arg_0.b, _wgslsmith_div_f32(arg_2.b, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_div_f32(-1500f, 1196f) - _wgslsmith_div_f32(-419f, arg_0.b)))));
    var var_1 = ~3647i;
    var var_2 = arg_2;
    var var_3 = Struct_1(52146u >> (~var_2.d % 32u), _wgslsmith_f_op_f32(ceil(-1179f)), arg_2.c, ~_wgslsmith_add_u32(var_2.d, arg_2.a));
    var_1 = abs(_wgslsmith_clamp_i32(u_input.a.x, u_input.a.x, ~(-1i))) ^ _wgslsmith_add_i32(1i & (-u_input.a.x >> (~18350u % 32u)), -_wgslsmith_mult_i32(22328i, u_input.a.x >> (1u % 32u)));
    return ~var_2.a;
}

fn func_5() -> bool {
    let var_0 = _wgslsmith_sub_vec4_u32(~vec4<u32>(1u, 1u, 1u, 1u), vec4<u32>(_wgslsmith_sub_u32(1u, min(81235u, ~4294967295u)), firstTrailingBit(_wgslsmith_add_u32(firstLeadingBit(1u), func_6(Struct_1(0u, 1016f, true, 42145u), true, Struct_1(36683u, 658f, true, 4294967295u)))), 100025u, ~(~_wgslsmith_dot_vec2_u32(vec2<u32>(0u, 3896u), vec2<u32>(0u, 0u)))));
    var var_1 = ~var_0.yy;
    var var_2 = vec4<bool>(all(select(!select(vec4<bool>(false, false, true, false), vec4<bool>(true, true, false, true), vec4<bool>(true, true, false, false)), select(select(vec4<bool>(false, false, true, true), vec4<bool>(true, false, false, true), vec4<bool>(true, true, true, true)), select(vec4<bool>(false, true, true, false), vec4<bool>(false, false, true, false), vec4<bool>(false, false, false, true)), vec4<bool>(true, true, true, true)), vec4<bool>(true, true, true, true))), _wgslsmith_sub_i32(~reverseBits(1i), -max(-1i, u_input.a.x)) != reverseBits(2147483647i), true, !any(vec3<bool>(any(vec3<bool>(false, false, true)), true, 4738u < var_0.x)));
    switch (firstTrailingBit(~(-firstLeadingBit(_wgslsmith_add_i32(i32(-2147483648), u_input.a.x))))) {
        default: {
            if (true) {
                var_1 = _wgslsmith_div_vec2_u32(_wgslsmith_add_vec2_u32(var_0.xx, vec2<u32>(0u, reverseBits(5127u))), _wgslsmith_sub_vec2_u32(abs(~vec2<u32>(16251u, 1u)), reverseBits(vec2<u32>(var_0.x, var_0.x))) << (abs(~_wgslsmith_sub_vec2_u32(var_0.yx, vec2<u32>(69614u, var_0.x))) % vec2<u32>(32u)));
            }
        }
    }
    for (; select(false, all(vec3<bool>(var_2.x, false, any(!vec3<bool>(var_2.x, true, var_2.x)))), true); ) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        loop {
            if (LOOP_COUNTERS[1u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
            var var_3 = Struct_1(var_0.x, _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1455f) + -312f), -789f)), all(vec4<bool>(var_2.x, _wgslsmith_add_u32(1u, 102588u) < ~var_1.x, true, true)), ~_wgslsmith_mod_u32(34148u, var_1.x));
            var_3 = Struct_1(func_6(Struct_1(~var_3.a, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(var_3.b + var_3.b) - 406f), _wgslsmith_sub_u32(4294967295u, var_3.a) > _wgslsmith_dot_vec4_u32(var_0, var_0), ~min(4294967295u, 0u)), all(var_2.zy), Struct_1(reverseBits(35773u << (var_1.x % 32u)), _wgslsmith_f_op_f32(-var_3.b), false, 1u)), _wgslsmith_f_op_f32(var_3.b + _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(631f))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-var_3.b), var_3.b), any(var_2.wwz) & true))), !(!(!all(var_2.yx))), ~4294967295u);
        }
        var var_3 = _wgslsmith_f_op_f32(1f * _wgslsmith_f_op_f32(f32(-1f) * -489f));
        var_3 = -625f;
        if (false) {
            continue;
        }
    }
    return true;
}

fn func_4(arg_0: Struct_1, arg_1: i32) -> Struct_1 {
    switch (-39521i) {
        case -109669i: {
            for (var var_0 = select(~reverseBits(1i), ~(~arg_1 << (_wgslsmith_div_u32(133442u, arg_0.a) % 32u)), arg_0.c) << (~1u % 32u); any(!vec4<bool>(func_5(), false & !arg_0.c, false, false)); var_0 += 1i) {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            }
            if (select(arg_0.c | arg_0.c, !any(select(!vec3<bool>(false, arg_0.c, arg_0.c), select(vec3<bool>(arg_0.c, arg_0.c, true), vec3<bool>(false, true, true), vec3<bool>(false, arg_0.c, arg_0.c)), true)), true)) {
                let var_0 = Struct_1(19273u, _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_0.b * arg_0.b))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1369f))), true, arg_0.d);
                let var_1 = _wgslsmith_add_vec2_i32(min(abs(u_input.a), vec2<i32>(_wgslsmith_dot_vec4_i32(~vec4<i32>(-23339i, -41747i, i32(-2147483648), arg_1), vec4<i32>(-25955i, 29295i, arg_1, -5997i)), 1i)), -u_input.a);
                var var_2 = _wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(-637f), _wgslsmith_f_op_f32(-var_0.b)) - vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_0.b + arg_0.b) * _wgslsmith_f_op_f32(max(891f, 1948f))) - -1000f), _wgslsmith_f_op_f32(-arg_0.b)));
                let var_3 = var_0.c;
                var var_4 = Struct_1(~(arg_0.a >> (reverseBits(~12779u) % 32u)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(min(arg_0.b, arg_0.b)), var_0.b)) - _wgslsmith_f_op_f32(var_2.x - -1686f)), any(select(vec4<bool>(var_3, func_5(), true, var_3), select(vec4<bool>(false, arg_0.c, var_0.c, var_0.c), vec4<bool>(var_0.c, true, false, var_3), arg_0.c), vec4<bool>(true, var_0.c | var_0.c, arg_0.c, !var_0.c))), _wgslsmith_clamp_u32(27572u, abs(var_0.d), min(~var_0.a, var_0.d)));
            }
            let var_0 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(-arg_0.b), _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_0.b * 182f) * _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(arg_0.b * 513f)))))));
            for (var var_1 = -1i; !arg_0.c; var_1 = abs(arg_1)) {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
                continue;
            }
            let var_1 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(max(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(floor(vec4<f32>(var_0, -522f, var_0, -170f)))), _wgslsmith_f_op_vec4_f32(exp2(vec4<f32>(arg_0.b, arg_0.b, arg_0.b, 1000f)))), _wgslsmith_f_op_vec4_f32(step(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(sign(vec4<f32>(1012f, arg_0.b, var_0, var_0))), vec4<f32>(385f, var_0, var_0, arg_0.b)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(-772f, var_0, 1250f, var_0)))))) + _wgslsmith_f_op_vec4_f32(round(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(607f, 1316f, 1000f, var_0) - vec4<f32>(var_0, var_0, var_0, 391f))), _wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_0.b, var_0, var_0, -1623f))))));
        }
        case -48866i: {
            let var_0 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(step(vec3<f32>(336f, arg_0.b, 681f), vec3<f32>(arg_0.b, arg_0.b, -169f))))))), _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(arg_0.b, arg_0.b, arg_0.b))), vec3<f32>(-138f, _wgslsmith_f_op_f32(-arg_0.b), arg_0.b)))));
            for (; ; ) {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                let var_1 = vec4<bool>(all(select(!vec4<bool>(arg_0.c, true, true, arg_0.c), !select(vec4<bool>(false, arg_0.c, true, true), vec4<bool>(true, true, false, true), vec4<bool>(false, false, false, arg_0.c)), vec4<bool>(all(vec2<bool>(true, true)), arg_0.c, false, arg_0.d != 0u))), false, !arg_0.c, _wgslsmith_div_f32(arg_0.b, arg_0.b) > 1239f);
                var var_2 = false;
                var var_3 = !vec3<bool>(false, false, !func_5());
                var var_4 = ~arg_0.a;
                let var_5 = arg_0;
            }
            loop {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
            }
        }
        case -1i: {
            var var_0 = true;
        }
        default: {
        }
    }
    loop {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        let var_0 = vec2<u32>(arg_0.d, ~24202u);
    }
    var var_0 = vec4<u32>(1u, 0u, firstLeadingBit(~arg_0.d), ~1u);
    switch (arg_1) {
        case 1i: {
        }
        case -1i: {
            let var_1 = var_0.zy;
        }
        default: {
        }
    }
    let var_1 = select(!select(vec4<bool>(false, true, arg_0.c, true), !(!vec4<bool>(arg_0.c, arg_0.c, false, arg_0.c)), !select(vec4<bool>(false, false, arg_0.c, true), vec4<bool>(false, arg_0.c, arg_0.c, false), true)), vec4<bool>(true, true, true, true), false);
    return Struct_1(func_6(Struct_1(var_0.x, arg_0.b, var_1.x, var_0.x), true, arg_0), _wgslsmith_div_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(step(arg_0.b, 2785f)), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(arg_0.b * 1293f), arg_0.b))), arg_0.b), true, 1u);
}

fn func_7(arg_0: Struct_1, arg_1: Struct_1) -> f32 {
    let var_0 = _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-186f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_0.b - arg_0.b) - _wgslsmith_div_f32(arg_0.b, -1331f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -119f)), _wgslsmith_f_op_f32(-arg_0.b))), vec4<f32>(arg_0.b, arg_0.b, _wgslsmith_f_op_f32(f32(-1f) * -906f), _wgslsmith_f_op_f32(arg_0.b + _wgslsmith_f_op_f32(sign(-1438f)))), vec4<bool>(false || arg_1.c, false, true, arg_1.c)));
    switch (u_input.a.x) {
        case -21868i: {
            for (var var_1 = 1i; arg_1.c; var_1 = -66693i) {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                var var_2 = min(~vec3<i32>(18839i, min(i32(-2147483648), -30439i), _wgslsmith_sub_i32(_wgslsmith_sub_i32(u_input.a.x, u_input.a.x), -81808i & u_input.a.x)), -firstTrailingBit(-vec3<i32>(-29082i, -1i, u_input.a.x) >> (_wgslsmith_div_vec3_u32(vec3<u32>(21684u, 0u, 0u), vec3<u32>(0u, arg_1.a, arg_1.d)) % vec3<u32>(32u))));
            }
            for (var var_1 = -1i; var_1 > i32(-2147483648); ) {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                continue;
            }
            var var_1 = u_input.a.x;
            var var_2 = func_4(arg_1, 7180i);
            if (false) {
                var_2 = Struct_1(_wgslsmith_add_u32(1u, ~_wgslsmith_dot_vec3_u32(~vec3<u32>(arg_0.a, 4294967295u, var_2.a), vec3<u32>(arg_0.d, arg_0.a, arg_1.a))), arg_1.b, !arg_1.c, arg_0.d);
                var_2 = arg_1;
                var_2 = func_4(func_4(arg_0, 11878i), -(~1i) << ((_wgslsmith_add_u32(4294967295u, _wgslsmith_dot_vec2_u32(vec2<u32>(0u, arg_1.a), vec2<u32>(arg_0.d, var_2.d))) >> (110717u % 32u)) % 32u));
                var var_3 = reverseBits(vec3<u32>(11456u, func_6(Struct_1(0u, var_0.x, true, 0u), var_2.c, Struct_1(arg_0.a, arg_1.b, var_2.c, arg_0.a)), arg_0.a)) >> (min(vec3<u32>(_wgslsmith_sub_u32(_wgslsmith_dot_vec3_u32(vec3<u32>(14580u, arg_0.a, var_2.a), vec3<u32>(87243u, 4294967295u, arg_0.a)), ~var_2.d), arg_1.a, 91716u), countOneBits(_wgslsmith_div_vec3_u32(vec3<u32>(6578u, 4294967295u, 4294967295u), vec3<u32>(var_2.d, var_2.a, 72932u)) ^ vec3<u32>(arg_1.d, 0u, arg_1.a))) % vec3<u32>(32u));
                let var_4 = ~max(arg_0.d, var_3.x) ^ abs(~var_2.d);
            }
        }
        case 26429i: {
        }
        case -31612i: {
            for (var var_1 = -1i; any(select(vec3<bool>(arg_1.c, false, true), vec3<bool>((arg_0.c && arg_0.c) || !arg_1.c, arg_1.c | true, true || arg_1.c), vec3<bool>(any(select(vec4<bool>(arg_1.c, arg_1.c, arg_1.c, arg_0.c), vec4<bool>(false, true, arg_0.c, arg_1.c), arg_1.c)), true, !any(vec4<bool>(arg_1.c, arg_1.c, arg_0.c, arg_0.c))))); ) {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                var var_2 = arg_0.c;
                var var_3 = !(!select(vec3<bool>(all(vec3<bool>(true, arg_1.c, arg_1.c)), arg_0.c, true), vec3<bool>(true, any(vec3<bool>(arg_1.c, arg_0.c, false)), 24973u == arg_1.d), arg_1.c));
                var_2 = arg_0.c;
                let var_4 = countOneBits(~54406u);
                var_3 = !vec3<bool>(!(!(var_3.x == false)), true, true);
            }
            loop {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                let var_1 = -530f;
                continue;
            }
            loop {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                let var_1 = _wgslsmith_mult_u32(1u, arg_0.a) > 2222u;
                var var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(_wgslsmith_div_f32(arg_0.b, -1190f)))))));
                continue;
            }
        }
        case 1i: {
            var var_1 = _wgslsmith_f_op_f32(ceil(var_0.x));
            switch (-22826i) {
                case 35500i: {
                    var var_2 = arg_0;
                    var_2 = arg_0;
                    var var_3 = arg_1.c;
                    var_1 = _wgslsmith_f_op_f32(arg_0.b * var_0.x);
                }
                default: {
                }
            }
            loop {
                if (LOOP_COUNTERS[12u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
                let var_2 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(arg_1.b, 1396f) * var_0.wz) + vec2<f32>(var_0.x, arg_0.b)) * _wgslsmith_f_op_vec2_f32(var_0.xy + _wgslsmith_f_op_vec2_f32(select(vec2<f32>(arg_1.b, 1912f), vec2<f32>(-458f, arg_0.b), true)))) - vec2<f32>(arg_1.b, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_1.b + 1207f)))));
                break;
            }
        }
        default: {
            let var_1 = arg_1.b;
            switch (firstTrailingBit(~u_input.a.x | -countOneBits(max(15904i, u_input.a.x)))) {
                case 1i: {
                    var var_2 = vec4<bool>(true, all(vec2<bool>(arg_1.c, !arg_1.c)), false, true);
                }
                case 2147483647i: {
                    var var_2 = true;
                    var_2 = select(any(vec2<bool>(any(vec3<bool>(arg_0.c, false, arg_0.c)), any(vec3<bool>(arg_0.c, true, arg_1.c)) && false)), !(!all(!vec4<bool>(false, arg_0.c, arg_1.c, false))), all(select(!(!vec3<bool>(arg_0.c, true, false)), !select(vec3<bool>(true, false, false), vec3<bool>(arg_0.c, arg_0.c, arg_1.c), vec3<bool>(false, false, arg_0.c)), arg_1.c)));
                    var var_3 = !vec4<bool>(!arg_0.c, _wgslsmith_mult_u32(func_6(Struct_1(30528u, var_1, arg_1.c, 4294967295u), arg_1.c, arg_1), arg_1.d) == 94548u, true, arg_1.c);
                    let var_4 = Struct_1(63580u, var_0.x, false, _wgslsmith_sub_u32(4294967295u, 8382u));
                    let var_5 = func_4(func_4(Struct_1(~(var_4.a & var_4.a), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-var_0.x), -1890f, 268f <= var_1)), arg_1.c, 65786u), u_input.a.x), -(~_wgslsmith_add_i32(u_input.a.x, 7965i)));
                }
                case -15148i: {
                }
                default: {
                    var var_2 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(var_0.zxz, _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1993f, -220f, 1059f)) - _wgslsmith_f_op_vec3_f32(min(vec3<f32>(1253f, 1016f, var_1), vec3<f32>(var_1, arg_0.b, var_1)))))));
                }
            }
            loop {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                continue;
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        continue;
    }
    switch (max(u_input.a.x ^ ~_wgslsmith_clamp_i32(1i, _wgslsmith_dot_vec4_i32(vec4<i32>(u_input.a.x, u_input.a.x, u_input.a.x, u_input.a.x), vec4<i32>(1i, 21730i, 0i, u_input.a.x)), _wgslsmith_sub_i32(u_input.a.x, u_input.a.x)), 0i)) {
        case 1i: {
        }
        default: {
        }
    }
    switch (_wgslsmith_clamp_i32(u_input.a.x ^ -1i, -u_input.a.x, _wgslsmith_dot_vec4_i32(vec4<i32>(u_input.a.x, u_input.a.x >> (27385u % 32u), _wgslsmith_sub_i32(u_input.a.x | u_input.a.x, u_input.a.x), i32(-1i) * -u_input.a.x), vec4<i32>(1i, -(~(-1i)), -21054i, ~select(0i, 8058i, arg_1.c))))) {
        case 2147483647i: {
            if (true) {
                let var_1 = Struct_1(_wgslsmith_mod_u32(arg_1.d, 96512u), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-arg_1.b))), _wgslsmith_f_op_f32(step(arg_0.b, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(exp2(arg_0.b)) - 1133f))))), false, _wgslsmith_mult_u32(arg_0.d, 4294967295u & ((1u & arg_0.d) | arg_0.d)));
                let var_2 = ~vec4<i32>(_wgslsmith_mod_i32(~_wgslsmith_dot_vec3_i32(vec3<i32>(1i, u_input.a.x, -11323i), vec3<i32>(3733i, 2147483647i, 2147483647i)), countOneBits(-9843i)), u_input.a.x, u_input.a.x, (0i | (i32(-2147483648) >> (var_1.d % 32u))) | _wgslsmith_dot_vec3_i32(-vec3<i32>(u_input.a.x, u_input.a.x, -1i), _wgslsmith_add_vec3_i32(vec3<i32>(1i, -4790i, u_input.a.x), vec3<i32>(1475i, 2147483647i, u_input.a.x))));
                let var_3 = select(_wgslsmith_f_op_f32(-arg_0.b) != 1846f, var_1.c, false || all(vec2<bool>(true, true)));
            }
            var var_1 = select(!(!select(select(vec4<bool>(arg_0.c, false, false, arg_1.c), vec4<bool>(false, arg_1.c, arg_1.c, false), false), !vec4<bool>(arg_0.c, arg_1.c, arg_0.c, false), select(true, arg_0.c, true))), vec4<bool>(all(vec3<bool>(true, true, true)), any(vec3<bool>(any(vec3<bool>(arg_1.c, arg_0.c, false)), select(false, false, arg_1.c), true)), !any(!vec2<bool>(arg_1.c, false)), true), select(!(!(!vec4<bool>(arg_0.c, arg_0.c, arg_0.c, arg_0.c))), select(!select(vec4<bool>(arg_1.c, arg_1.c, arg_1.c, arg_1.c), vec4<bool>(false, false, false, arg_0.c), vec4<bool>(arg_1.c, false, arg_1.c, arg_1.c)), select(vec4<bool>(true, arg_1.c, arg_0.c, false), !vec4<bool>(false, arg_0.c, false, true), true), !select(vec4<bool>(false, arg_0.c, arg_1.c, false), vec4<bool>(false, arg_1.c, arg_0.c, arg_0.c), vec4<bool>(false, false, arg_0.c, false))), select(!(!vec4<bool>(false, arg_1.c, arg_1.c, true)), vec4<bool>(false, select(true, true, arg_1.c), any(vec3<bool>(arg_0.c, arg_0.c, true)), !arg_1.c), vec4<bool>(arg_1.c, true, arg_1.c, func_4(arg_1, 24363i).c))));
            switch (max(u_input.a.x, _wgslsmith_sub_i32(countOneBits(-1i) ^ firstTrailingBit(u_input.a.x), -1i)) << (4641u % 32u)) {
                default: {
                    var var_2 = func_4(func_4(arg_0, -31516i), u_input.a.x);
                }
            }
        }
        case 22863i: {
        }
        case 1i: {
            switch ((_wgslsmith_mod_i32(_wgslsmith_dot_vec2_i32(_wgslsmith_div_vec2_i32(u_input.a, u_input.a), min(vec2<i32>(u_input.a.x, 1i), u_input.a)), _wgslsmith_dot_vec3_i32(reverseBits(vec3<i32>(u_input.a.x, u_input.a.x, 1i)), _wgslsmith_mod_vec3_i32(vec3<i32>(u_input.a.x, u_input.a.x, i32(-2147483648)), vec3<i32>(0i, u_input.a.x, u_input.a.x)))) & (i32(-1i) * -(u_input.a.x & 40384i))) << (abs(0u << (func_6(arg_1, arg_1.c, arg_1) % 32u)) % 32u)) {
                case 0i: {
                    let var_1 = !select(vec4<bool>(all(!vec4<bool>(true, arg_1.c, arg_0.c, arg_0.c)), all(vec2<bool>(arg_0.c, true)), select(any(vec2<bool>(true, arg_0.c)), true, any(vec4<bool>(arg_1.c, false, arg_1.c, arg_1.c))), arg_1.c), select(!select(vec4<bool>(false, true, false, false), vec4<bool>(false, false, arg_1.c, true), arg_0.c), !select(vec4<bool>(arg_0.c, false, arg_1.c, arg_0.c), vec4<bool>(arg_1.c, true, false, true), vec4<bool>(true, false, true, arg_1.c)), !arg_1.c), -835f >= _wgslsmith_f_op_f32(-arg_1.b));
                    let var_2 = _wgslsmith_f_op_f32(-612f);
                    let var_3 = _wgslsmith_div_vec3_f32(vec3<f32>(-544f, arg_1.b, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_2) + _wgslsmith_f_op_f32(-var_2)))), _wgslsmith_f_op_vec3_f32(-vec3<f32>(arg_1.b, _wgslsmith_f_op_f32(arg_0.b * _wgslsmith_f_op_f32(-1660f - var_2)), _wgslsmith_f_op_f32(1000f + var_2))));
                    var var_4 = func_4(arg_1, 1i);
                    let var_5 = arg_0;
                }
                case -18533i: {
                    let var_1 = func_4(arg_0, -47173i);
                    var var_2 = vec4<i32>(_wgslsmith_div_i32(reverseBits(-1i), _wgslsmith_add_i32(-1i, u_input.a.x)), _wgslsmith_div_i32(-1i, 18937i & min(min(47355i, 1i), select(u_input.a.x, -13067i, false))), ~u_input.a.x, _wgslsmith_mod_i32(u_input.a.x, ~(-u_input.a.x)));
                    var var_3 = !(!select(any(select(vec4<bool>(var_1.c, var_1.c, var_1.c, arg_1.c), vec4<bool>(var_1.c, true, false, false), vec4<bool>(false, var_1.c, arg_1.c, arg_1.c))), arg_0.c, all(select(vec4<bool>(true, true, var_1.c, arg_0.c), vec4<bool>(var_1.c, false, var_1.c, true), vec4<bool>(arg_0.c, true, false, true)))));
                    return var_1.b;
                }
                case 1i: {
                    let var_1 = vec4<u32>(arg_1.a, 29962u, 4294967295u, arg_1.a);
                    var var_2 = vec2<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(1838f * 1285f), arg_1.b), 1000f);
                }
                case 19333i: {
                    var var_1 = arg_0.c;
                    var var_2 = select(!(!(!select(vec2<bool>(true, arg_1.c), vec2<bool>(arg_0.c, true), vec2<bool>(false, arg_0.c)))), select(select(vec2<bool>(true, true), select(vec2<bool>(true, true), select(vec2<bool>(true, false), vec2<bool>(arg_1.c, arg_0.c), vec2<bool>(true, arg_0.c)), vec2<bool>(arg_1.c, arg_1.c)), vec2<bool>(false, all(vec2<bool>(arg_1.c, arg_0.c)))), !(!select(vec2<bool>(arg_1.c, false), vec2<bool>(false, true), arg_0.c)), vec2<bool>(true, any(!vec2<bool>(arg_1.c, arg_1.c)))), !(!(false != any(vec3<bool>(arg_1.c, false, arg_0.c)))));
                }
                default: {
                    let var_1 = var_0.zzx;
                }
            }
            return -692f;
        }
        default: {
        }
    }
    return 747f;
}

fn func_3() -> bool {
    var var_0 = _wgslsmith_sub_u32(1u, 0u);
    for (var var_1 = 2577i; var_1 == -1i; ) {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
        let var_2 = vec2<bool>(true, true);
        if (!var_2.x) {
            var_0 = 0u;
            break;
        }
        break;
    }
    if (false) {
        var_0 = ~1u;
        var_0 = max(1u, 1u);
        let var_1 = vec4<i32>(u_input.a.x, 1i, -46308i, 1i);
        let var_2 = abs(-countOneBits(vec3<i32>(~var_1.x, var_1.x, u_input.a.x & 1i)));
    }
    var_0 = ~43422u;
    var var_1 = Struct_1(~_wgslsmith_div_u32(_wgslsmith_dot_vec3_u32(_wgslsmith_add_vec3_u32(vec3<u32>(3773u, 5090u, 3484u), vec3<u32>(54946u, 1u, 0u)), select(vec3<u32>(35363u, 0u, 0u), vec3<u32>(4294967295u, 4294967295u, 1u), true)), 21561u), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(func_7(func_4(Struct_1(15770u, -830f, true, 0u), u_input.a.x), func_4(Struct_1(1u, 337f, false, 0u), u_input.a.x))), 671f)), -363f)), true, _wgslsmith_dot_vec2_u32(vec2<u32>(1u, 1u), min(firstLeadingBit(~vec2<u32>(21647u, 25839u)), _wgslsmith_div_vec2_u32(vec2<u32>(7224u, 0u), select(vec2<u32>(12859u, 4294967295u), vec2<u32>(91490u, 4294967295u), true)))));
    return var_1.c;
}

fn func_2() -> Struct_1 {
    for (var var_0 = ~select(abs(u_input.a.x), 27079i | _wgslsmith_mult_i32(reverseBits(0i), u_input.a.x), func_3()); false; var_0 += 1i) {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        for (; ; ) {
            if (LOOP_COUNTERS[17u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
            var_0 = u_input.a.x;
            var var_1 = 89482u;
            break;
        }
        return func_4(func_4(func_4(func_4(Struct_1(28424u, 744f, true, 1u), u_input.a.x), i32(-1i) * -1i), _wgslsmith_add_i32(1i, -abs(0i))), _wgslsmith_mult_i32(-1i, 34036i));
    }
    switch (u_input.a.x) {
        case -15932i: {
            let var_0 = select(vec2<bool>(!(_wgslsmith_f_op_f32(step(-336f, 935f)) != _wgslsmith_f_op_f32(1210f * -487f)), all(vec4<bool>(any(vec3<bool>(true, false, true)), true, true, true))), vec2<bool>(true, _wgslsmith_f_op_f32(-859f) > _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(-532f)))), (true | any(select(vec3<bool>(false, false, false), vec3<bool>(false, false, true), vec3<bool>(false, true, true)))) & (-(~u_input.a.x) != _wgslsmith_mult_i32(u_input.a.x, u_input.a.x >> (20201u % 32u))));
            loop {
                if (LOOP_COUNTERS[18u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
                var var_1 = vec3<bool>(var_0.x, true & (u_input.a.x < (0i ^ u_input.a.x)), !(true & var_0.x));
                var_1 = !select(!select(select(vec3<bool>(false, false, var_0.x), vec3<bool>(var_1.x, false, true), false), vec3<bool>(true, true, var_0.x), !vec3<bool>(var_0.x, true, true)), !(!(!vec3<bool>(false, var_0.x, false))), true);
            }
        }
        case -10783i: {
        }
        default: {
            loop {
                if (LOOP_COUNTERS[19u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
                let var_0 = _wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(round(vec4<f32>(816f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-709f)), 1615f, -717f)))));
                continue;
            }
        }
    }
    if (16033u < (~1u >> (~_wgslsmith_dot_vec4_u32(~vec4<u32>(70222u, 0u, 4294967295u, 14764u), firstLeadingBit(vec4<u32>(0u, 33546u, 79683u, 43595u))) % 32u))) {
        for (; ; ) {
            if (LOOP_COUNTERS[20u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
            var var_0 = Struct_1(665u, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(sign(202f)))) * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1088f) * 1541f))), true, _wgslsmith_dot_vec2_u32(vec2<u32>(~(~0u), ~4294967295u), vec2<u32>(119864u, 4294967295u)));
            break;
        }
        loop {
            if (LOOP_COUNTERS[21u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
            var var_0 = ~(~countOneBits(_wgslsmith_div_vec4_u32(vec4<u32>(4294967295u, 4294967295u, 3807u, 1u), vec4<u32>(1u, 1u, 1u, 1u))));
            var_0 = firstTrailingBit(~firstLeadingBit(vec4<u32>(_wgslsmith_dot_vec3_u32(var_0.yxz, vec3<u32>(var_0.x, var_0.x, 56489u)), var_0.x, var_0.x, _wgslsmith_mult_u32(41239u, var_0.x))));
            var var_1 = select(~countOneBits(max(_wgslsmith_add_vec3_i32(vec3<i32>(u_input.a.x, u_input.a.x, u_input.a.x), vec3<i32>(u_input.a.x, -33722i, u_input.a.x)), abs(vec3<i32>(0i, 17254i, -10030i)))), vec3<i32>(16178i, u_input.a.x, u_input.a.x), true);
        }
        if (any(select(vec3<bool>(u_input.a.x == countOneBits(u_input.a.x), true, false), vec3<bool>(true, all(select(vec2<bool>(false, false), vec2<bool>(false, true), true)), true), vec3<bool>(!any(vec3<bool>(false, false, true)), u_input.a.x <= ~68585i, true)))) {
            var var_0 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(1000f))) * _wgslsmith_f_op_f32(exp2(_wgslsmith_div_f32(-623f, 942f)))) + -216f);
            var var_1 = ~firstLeadingBit(~reverseBits(vec2<u32>(7472u, 29690u)));
            var_1 = ~(~select(vec2<u32>(0u, 1u), _wgslsmith_div_vec2_u32(vec2<u32>(19887u, var_1.x), vec2<u32>(var_1.x, var_1.x)), true) & ~(~(vec2<u32>(67995u, 1u) >> (vec2<u32>(var_1.x, var_1.x) % vec2<u32>(32u)))));
        }
    }
    switch (_wgslsmith_mult_i32(~(-18096i), -65104i)) {
        case i32(-2147483648): {
            for (; any(!(!vec4<bool>(true, true, any(vec3<bool>(false, false, false)), all(vec3<bool>(false, false, true))))); ) {
                if (LOOP_COUNTERS[22u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
            }
            loop {
                if (LOOP_COUNTERS[23u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
            }
        }
        case 75401i: {
            if (!(_wgslsmith_f_op_f32(trunc(-461f)) < _wgslsmith_div_f32(_wgslsmith_f_op_f32(1126f - _wgslsmith_f_op_f32(round(244f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-231f))))) {
            }
            let var_0 = Struct_1(firstLeadingBit(_wgslsmith_dot_vec2_u32(_wgslsmith_mult_vec2_u32(~vec2<u32>(4294967295u, 1u), vec2<u32>(1u, 1u)), ~vec2<u32>(46599u, 37429u))), func_4(func_4(Struct_1(6608u, _wgslsmith_f_op_f32(f32(-1f) * -1000f), true, abs(0u)), 1718i), _wgslsmith_mod_i32(select(29591i, 1i, true), ~(i32(-2147483648))) << (_wgslsmith_sub_u32(_wgslsmith_dot_vec3_u32(vec3<u32>(5625u, 29734u, 1u), vec3<u32>(4294967295u, 40782u, 1u)), 1u) % 32u)).b, _wgslsmith_f_op_f32(-609f) >= _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(f32(-1f) * -1378f))), _wgslsmith_clamp_u32(_wgslsmith_mod_u32(reverseBits(1u), ~(~16677u)), ~abs(countOneBits(4294967295u)), abs(27985u)));
        }
        case 43950i: {
            var var_0 = any(vec4<bool>(true, func_5(), true, true));
            if (true) {
                var_0 = true | !all(select(vec2<bool>(true, true), vec2<bool>(true, true), vec2<bool>(true, true)));
                var var_1 = _wgslsmith_dot_vec3_u32(~(~vec3<u32>(8384u, 0u, 35967u)), vec3<u32>(1u, 1u, 1u)) < ~(~6647u);
                let var_2 = countOneBits(_wgslsmith_add_u32(1u, ~firstTrailingBit(reverseBits(4294967295u))));
            }
            loop {
                if (LOOP_COUNTERS[24u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
                var var_1 = func_4(Struct_1(~(~_wgslsmith_sub_u32(4294967295u, 6994u)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-230f), _wgslsmith_f_op_f32(536f - -1998f))) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(611f)))), true, min(4294967295u, 1u)), abs(~u_input.a.x)).d;
                var var_2 = Struct_1(4294967295u, -802f, true, _wgslsmith_sub_u32(4943u, countOneBits(~func_6(Struct_1(98602u, 1428f, false, 0u), true, Struct_1(67259u, 464f, false, 4294967295u)))));
            }
            let var_1 = _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(-274f)) * _wgslsmith_f_op_f32(-1843f - 967f)), _wgslsmith_f_op_f32(trunc(1483f)))))) == _wgslsmith_f_op_f32(f32(-1f) * -545f);
            switch (abs(u_input.a.x)) {
                case i32(-2147483648): {
                    var_0 = true;
                    let var_2 = countOneBits(firstLeadingBit(u_input.a.x));
                    return func_4(Struct_1(58454u, _wgslsmith_f_op_f32(step(-987f, -536f)), any(!vec2<bool>(var_1, var_1)), 1u), 0i);
                }
                default: {
                    let var_2 = func_3() || true;
                    return func_4(Struct_1(func_4(Struct_1(0u, 1159f, true, 1u), u_input.a.x).a, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-2480f + 464f), _wgslsmith_f_op_f32(1024f * -2072f), true))), all(!vec2<bool>(var_1, var_2)), 1u), u_input.a.x);
                }
            }
        }
        default: {
        }
    }
    for (var var_0 = 1i; true; ) {
        if (LOOP_COUNTERS[25u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
        var_0 = _wgslsmith_dot_vec2_i32(select(u_input.a, vec2<i32>(u_input.a.x, _wgslsmith_dot_vec2_i32(abs(vec2<i32>(-18927i, -1i)), vec2<i32>(u_input.a.x, u_input.a.x))), vec2<bool>(true, true)), max(select(~u_input.a, select(u_input.a ^ vec2<i32>(1i, u_input.a.x), vec2<i32>(2147483647i, -1i), any(vec3<bool>(true, true, true))), false), _wgslsmith_div_vec2_i32(u_input.a >> (vec2<u32>(1u, 116316u) % vec2<u32>(32u)), min(_wgslsmith_mod_vec2_i32(u_input.a, vec2<i32>(15835i, u_input.a.x)), u_input.a))));
    }
    return func_4(Struct_1(func_6(func_4(func_4(Struct_1(4294967295u, 535f, true, 0u), 2147483647i), 26923i), !(u_input.a.x == -1i), Struct_1(_wgslsmith_dot_vec2_u32(vec2<u32>(23029u, 862u), vec2<u32>(4294967295u, 1u)), _wgslsmith_f_op_f32(f32(-1f) * -1380f), true, ~4294967295u)), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-1892f), _wgslsmith_f_op_f32(_wgslsmith_div_f32(638f, -138f) - _wgslsmith_f_op_f32(max(-1135f, 261f)))), !select(true, true, true), _wgslsmith_dot_vec2_u32(firstTrailingBit(vec2<u32>(1u, 23261u)), _wgslsmith_clamp_vec2_u32(~vec2<u32>(1u, 80441u), _wgslsmith_clamp_vec2_u32(vec2<u32>(0u, 6534u), vec2<u32>(0u, 9412u), vec2<u32>(39582u, 0u)), vec2<u32>(1u, 20762u)))), 7698i);
}

fn func_8(arg_0: Struct_1, arg_1: Struct_1) -> u32 {
    if (!all(!select(vec4<bool>(false, false, true, arg_1.c), vec4<bool>(true, false, arg_0.c, arg_0.c), vec4<bool>(arg_1.c, true, true, arg_1.c)))) {
        if (!(!(!(!all(vec3<bool>(false, arg_1.c, true)))))) {
        }
        var var_0 = arg_0.b;
    }
    for (var var_0 = 1i; var_0 != 1i; var_0 = max(~u_input.a.x, select(countOneBits((69593i ^ u_input.a.x) & (2147483647i << (arg_0.a % 32u))), _wgslsmith_clamp_i32(2147483647i, u_input.a.x, _wgslsmith_clamp_i32(u_input.a.x, 0i, 65757i) ^ _wgslsmith_sub_i32(u_input.a.x, -1i)), false))) {
        if (LOOP_COUNTERS[26u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
    }
    for (var var_0 = 8329i; ; ) {
        if (LOOP_COUNTERS[27u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[27u] = LOOP_COUNTERS[27u] + 1u;
        let var_1 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(arg_0.b)) + arg_1.b);
        for (var var_2 = 8930i; var_2 >= -45971i; var_2 -= 1i) {
            if (LOOP_COUNTERS[28u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[28u] = LOOP_COUNTERS[28u] + 1u;
            let var_3 = func_2().b;
            continue;
        }
        var var_2 = vec2<u32>(arg_1.a, _wgslsmith_add_u32(firstTrailingBit(abs(arg_1.d) ^ abs(10029u)), abs(countOneBits(_wgslsmith_div_u32(arg_1.d, arg_0.a)))));
        var var_3 = -574f;
        var var_4 = func_2();
    }
    for (; ; ) {
        if (LOOP_COUNTERS[29u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[29u] = LOOP_COUNTERS[29u] + 1u;
        if (true) {
            var var_0 = _wgslsmith_mod_i32(704i ^ -(~u_input.a.x), _wgslsmith_mod_i32(countOneBits(_wgslsmith_div_i32(-u_input.a.x, u_input.a.x)), reverseBits(firstLeadingBit(i32(-2147483648)))));
            var_0 = 31237i;
            var var_1 = arg_0;
        }
        let var_0 = !vec4<bool>(true, any(vec2<bool>(!arg_0.c, arg_0.c)), true, all(select(vec4<bool>(true, arg_0.c, false, false), vec4<bool>(arg_1.c, arg_1.c, false, true), arg_0.c)) || (u_input.a.x != _wgslsmith_mult_i32(15155i, -49745i)));
    }
    switch (u_input.a.x) {
        case 0i: {
            var var_0 = ~14710u;
        }
        default: {
            var var_0 = Struct_1(~(~1u), arg_0.b, arg_1.c, _wgslsmith_dot_vec4_u32(~firstLeadingBit(abs(vec4<u32>(arg_1.d, 43807u, arg_0.d, 86294u))), vec4<u32>(11611u, abs(firstLeadingBit(arg_0.d)), 6840u, 39832u)));
            var_0 = func_2();
        }
    }
    return ~select(~1u, ~(~_wgslsmith_div_u32(1u, 60014u)), arg_1.c);
}

fn func_1() -> vec4<i32> {
    var var_0 = Struct_1(func_8(func_2(), Struct_1(reverseBits(1u), -1343f, true, reverseBits(6650u))) << (_wgslsmith_div_u32(~select(1u, 0u, false), 1u) % 32u), 1f, any(select(vec2<bool>(true, true), !select(vec2<bool>(false, true), vec2<bool>(true, true), vec2<bool>(true, false)), vec2<bool>(true, true))), abs(func_4(func_4(func_4(Struct_1(3209u, -184f, false, 20437u), u_input.a.x), ~(-25422i)), 0i).d));
    var var_1 = i32(-1i) * -2147483647i;
    var var_2 = func_2();
    var var_3 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(465f, var_0.b)));
    for (var var_4 = i32(-2147483648); ; var_3 = _wgslsmith_f_op_f32(func_7(func_4(func_4(Struct_1(func_8(Struct_1(42382u, -1375f, true, var_0.a), Struct_1(var_0.a, var_2.b, var_0.c, 26418u)), var_0.b, true, var_0.a), _wgslsmith_mult_i32(_wgslsmith_sub_i32(u_input.a.x, u_input.a.x), u_input.a.x << (1u % 32u))), -7184i), Struct_1(min(~(64812u << (var_2.a % 32u)), 1u ^ reverseBits(var_2.d)), 1064f, false, 52132u)))) {
        if (LOOP_COUNTERS[30u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[30u] = LOOP_COUNTERS[30u] + 1u;
        break;
    }
    return vec4<i32>(_wgslsmith_div_i32(-40232i, u_input.a.x) & _wgslsmith_dot_vec4_i32(abs(countOneBits(vec4<i32>(u_input.a.x, 12748i, -1i, -8867i))), ~vec4<i32>(u_input.a.x, 37098i, u_input.a.x, 2147483647i)), ~reverseBits(_wgslsmith_add_i32(1i, u_input.a.x) | -1i), ~1i, i32(-1i) * -u_input.a.x);
}

fn func_9(arg_0: i32, arg_1: vec3<i32>) -> Struct_1 {
    let var_0 = func_8(func_4(Struct_1(0u, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(-1246f, 1908f)) + _wgslsmith_f_op_f32(f32(-1f) * -1000f)), false, ~1u), arg_0), Struct_1(_wgslsmith_mult_u32(_wgslsmith_mod_u32(~4294967295u, 2513u), 67579u), _wgslsmith_f_op_f32(-439f + _wgslsmith_f_op_f32(1216f * _wgslsmith_f_op_f32(-1648f + 953f))), true, 24157u));
    let var_1 = _wgslsmith_f_op_f32(f32(-1f) * -595f);
    loop {
        if (LOOP_COUNTERS[31u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[31u] = LOOP_COUNTERS[31u] + 1u;
        break;
    }
    var var_2 = _wgslsmith_mult_i32(reverseBits(1i), u_input.a.x);
    return func_2();
}

@compute
@workgroup_size(1)
fn main() {
    var var_0 = Struct_1(_wgslsmith_add_u32(0u, 1u), 1000f, true, 78125u);
    var_0 = func_9(~(_wgslsmith_dot_vec4_i32(~vec4<i32>(i32(-2147483648), u_input.a.x, u_input.a.x, -24658i), func_1()) << (var_0.d % 32u)), select(~vec3<i32>(~38931i, -19814i, u_input.a.x), max(vec3<i32>(9672i, -4880i, u_input.a.x) << (~vec3<u32>(26120u, var_0.a, var_0.a) % vec3<u32>(32u)), vec3<i32>(u_input.a.x, 1i, 69430i)), select(u_input.a.x, func_1().x, true) >= ~firstLeadingBit(u_input.a.x)));
    let var_1 = _wgslsmith_f_op_f32(-2048f);
    if (u_input.a.x == u_input.a.x) {
        let var_2 = !vec4<bool>(var_0.c, false, true, false);
    }
    var_0 = func_2();
    let var_2 = ~0u;
    var var_3 = Struct_1(firstLeadingBit(reverseBits(abs(0u))), var_0.b, _wgslsmith_mult_u32(func_8(Struct_1(86761u, var_1, true, 12181u), Struct_1(17374u, -693f, false, 4294967295u)) << (var_2 % 32u), 683u) != var_0.a, 26203u);
    let x = u_input.a;
    s_output = StorageBuffer(~vec4<u32>(0u, var_3.a, 47736u, ~var_2), 53158i, 0u, _wgslsmith_mult_vec2_u32(~(vec2<u32>(60074u, 1u) ^ min(vec2<u32>(1u, 20200u), vec2<u32>(var_0.a, 11101u))), select(~vec2<u32>(var_3.a, 22772u) | vec2<u32>(60073u, var_2), ~(~vec2<u32>(4294967295u, 1u)), select(select(vec2<bool>(true, true), vec2<bool>(var_3.c, false), var_3.c), !vec2<bool>(var_0.c, var_3.c), !vec2<bool>(var_3.c, var_3.c)))), 323f);
}

`;