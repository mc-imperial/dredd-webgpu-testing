export const input = [148,43,210,123,185,63,46,71,253,129,53,106,138,126,201,173,195,108,165,96,144,181,22,96,166,43,172,47,253,222,172,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [148,43,210,123,185,63,46,71,253,129,53,106,138,126,201,173,195,108,165,96,144,181,22,96,166,43,172,47,253,222,172,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[148,43,210,123,185,63,46,71,253,129,53,106,138,126,201,173,195,108,165,96,144,181,22,96,166,43,172,47,253,222,172,217]}
// Seed: 6893176720659171544

struct Struct_1 {
    a: vec2<i32>,
}

struct Struct_2 {
    a: vec4<f32>,
    b: f32,
}

struct UniformBuffer {
    a: vec3<u32>,
    b: vec2<u32>,
}

struct StorageBuffer {
    a: vec2<f32>,
    b: vec3<f32>,
    c: i32,
    d: u32,
    e: i32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> LOOP_COUNTERS: array<u32, 23>;

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn func_4(arg_0: f32, arg_1: vec3<f32>, arg_2: Struct_2, arg_3: vec2<i32>) -> f32 {
    if (!(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0))) > arg_0)) {
        for (; ; ) {
            if (LOOP_COUNTERS[0u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
            let var_0 = u_input.a.yz;
            continue;
        }
    }
    for (; ; ) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        var var_0 = ~u_input.a;
    }
    let var_0 = Struct_1(arg_3);
    var var_1 = u_input.b.x;
    var_1 = ~6875u;
    return arg_0;
}

fn func_3(arg_0: vec2<u32>, arg_1: u32, arg_2: vec4<i32>, arg_3: bool) -> f32 {
    return _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(func_4(_wgslsmith_f_op_f32(-1932f + -1478f), _wgslsmith_f_op_vec3_f32(vec3<f32>(132f, -588f, -1000f) + vec3<f32>(1321f, -1015f, -813f)), Struct_2(vec4<f32>(1379f, 2102f, -229f, -506f), -1301f), select(arg_2.yw, arg_2.yz, vec2<bool>(false, false)))))) * 793f));
}

fn func_6() -> vec4<i32> {
    var var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-1493f))), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(546f * -1426f)))) - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(func_4(351f, vec3<f32>(1586f, -771f, -938f), Struct_2(vec4<f32>(984f, 1110f, 714f, 896f), 1298f), vec2<i32>(82072i, 0i))), _wgslsmith_f_op_f32(-295f - -1073f))) - 302f)));
    switch (_wgslsmith_mod_i32(_wgslsmith_sub_i32(reverseBits(~_wgslsmith_dot_vec3_i32(vec3<i32>(-39003i, -76069i, -51827i), vec3<i32>(i32(-2147483648), i32(-2147483648), 3363i))), -(i32(-1i) * 0i)), -_wgslsmith_add_i32(1i, max(1i, 25560i)))) {
        default: {
            var_0 = -604f;
            var var_1 = _wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(-1320f, 1007f)), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-1083f), -590f), false)), _wgslsmith_f_op_f32(abs(_wgslsmith_div_f32(-1891f, _wgslsmith_f_op_f32(func_3(u_input.b, u_input.a.x, vec4<i32>(10687i, 28894i, 2147483647i, 5339i), true))))), _wgslsmith_f_op_f32(f32(-1f) * -916f)) - vec3<f32>(_wgslsmith_f_op_f32(func_3(_wgslsmith_clamp_vec2_u32(~vec2<u32>(u_input.b.x, u_input.a.x), abs(vec2<u32>(u_input.a.x, 4294967295u)), u_input.b), countOneBits(_wgslsmith_add_u32(0u, 16687u)), vec4<i32>(_wgslsmith_dot_vec3_i32(vec3<i32>(-1i, -1i, -20240i), vec3<i32>(-2172i, -12801i, 0i)), _wgslsmith_div_i32(-10475i, 24768i), 1i, _wgslsmith_sub_i32(11261i, 18645i)), true)), _wgslsmith_f_op_f32(f32(-1f) * -2256f), _wgslsmith_f_op_f32(1208f + _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-257f))))));
        }
    }
    var var_1 = u_input.b.x;
    var_1 = abs(~_wgslsmith_dot_vec2_u32(_wgslsmith_sub_vec2_u32(u_input.a.yz, vec2<u32>(4294967295u, 73889u)), abs(vec2<u32>(u_input.b.x, u_input.a.x))) & 48511u);
    var var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-411f + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(140f - -209f) - -792f)))));
    return countOneBits(vec4<i32>(-1i) * -vec4<i32>(~15543i, -2688i, ~(i32(-2147483648)), ~0i));
}

fn func_5(arg_0: vec4<u32>, arg_1: Struct_1) -> Struct_1 {
    for (; ; ) {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        let var_0 = Struct_2(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(max(vec4<f32>(405f, -1060f, 414f, 906f), vec4<f32>(-360f, -457f, 1790f, 1161f))), _wgslsmith_f_op_vec4_f32(vec4<f32>(-192f, -1729f, -1000f, -100f) * vec4<f32>(273f, 1138f, 1228f, -330f)), vec4<bool>(true, true, true, true))) * vec4<f32>(_wgslsmith_f_op_f32(f32(-1f) * -475f), _wgslsmith_f_op_f32(-840f - -132f), _wgslsmith_f_op_f32(122f - -919f), _wgslsmith_f_op_f32(1255f - 860f)))), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(-1000f, _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(step(910f, 560f)))))));
    }
    var var_0 = Struct_1(arg_1.a);
    loop {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        let var_1 = ~(-arg_1.a);
        if (true) {
            break;
        }
        let var_2 = _wgslsmith_mod_vec4_i32(_wgslsmith_mod_vec4_i32(select(abs(vec4<i32>(2147483647i, 0i, 29614i, 11908i)), select(vec4<i32>(30132i, arg_1.a.x, -1i, -16186i), vec4<i32>(var_0.a.x, -1i, arg_1.a.x, 2147483647i), true), false), ~_wgslsmith_add_vec4_i32(vec4<i32>(2147483647i, 2147483647i, var_1.x, var_0.a.x), vec4<i32>(2147483647i, 21563i, var_1.x, var_0.a.x))), func_6()) ^ (vec4<i32>(abs(arg_1.a.x) ^ ~arg_1.a.x, abs(firstLeadingBit(var_0.a.x)), arg_1.a.x, abs(var_1.x & var_1.x)) ^ ~(-vec4<i32>(arg_1.a.x, arg_1.a.x, -1i, var_1.x) | ~vec4<i32>(-11356i, 1i, -1742i, 2147483647i)));
    }
    let var_1 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(sign(vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(583f + 1225f) * _wgslsmith_f_op_f32(f32(-1f) * -1000f)), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(round(966f)), _wgslsmith_f_op_f32(-796f + -741f), all(vec4<bool>(true, false, true, true))))))));
    var_0 = arg_1;
    return arg_1;
}

fn func_7(arg_0: vec4<u32>, arg_1: vec4<bool>, arg_2: u32, arg_3: Struct_1) -> bool {
    for (var var_0 = 35118i; all(!(!vec3<bool>(true, true, arg_1.x))); var_0 -= 1i) {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        let var_1 = Struct_1(vec2<i32>(1i, arg_3.a.x));
        loop {
            if (LOOP_COUNTERS[5u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
            var var_2 = arg_0;
            return !(!(true & any(select(vec4<bool>(arg_1.x, false, true, true), vec4<bool>(true, arg_1.x, arg_1.x, arg_1.x), arg_1))));
        }
        var_0 = 1i;
    }
    let var_0 = Struct_2(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-493f, -1291f, 1545f, 1370f))))) * _wgslsmith_f_op_vec4_f32(-vec4<f32>(-1038f, _wgslsmith_f_op_f32(func_4(188f, vec3<f32>(340f, -414f, -1628f), Struct_2(vec4<f32>(472f, -1618f, 912f, -868f), 1418f), arg_3.a)), _wgslsmith_f_op_f32(f32(-1f) * -1250f), _wgslsmith_f_op_f32(min(-884f, 789f))))), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(sign(988f)))));
    let var_1 = arg_3.a.x;
    for (var var_2 = 1i; (arg_1.x != arg_1.x) & !(min(98131u, ~u_input.a.x) <= arg_0.x); ) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        let var_3 = _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(abs(var_0.a.x))));
        let var_4 = _wgslsmith_f_op_f32(-1360f * _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(min(432f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(var_3 + var_3) + _wgslsmith_f_op_f32(ceil(var_0.a.x))))), var_3)));
        var var_5 = Struct_2(_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(var_0.b - _wgslsmith_f_op_f32(var_3 * 363f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_3)), 1047f, -955f)), _wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-319f)), _wgslsmith_f_op_f32(f32(-1f) * -417f)) - 409f));
    }
    for (var var_2 = 22689i; var_2 <= -11043i; var_2 -= 1i) {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        loop {
            if (LOOP_COUNTERS[8u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
            var var_3 = arg_1.wzy;
            break;
        }
        continue;
    }
    return any(select(!arg_1.yzy, vec3<bool>(!all(vec2<bool>(true, false)), all(vec2<bool>(arg_1.x, true)), !arg_1.x || true), vec3<bool>(arg_1.x && arg_1.x, arg_1.x, !arg_1.x | any(arg_1.yx))));
}

fn func_8(arg_0: vec3<bool>) -> vec3<bool> {
    switch (42868i) {
        default: {
            loop {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                var var_0 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(floor(_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_div_vec2_f32(vec2<f32>(789f, 900f), vec2<f32>(201f, 1687f)))), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(650f, -242f)) - _wgslsmith_f_op_vec2_f32(-vec2<f32>(-444f, -1302f)))))));
                break;
            }
        }
    }
    var var_0 = Struct_2(_wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(abs(786f)), _wgslsmith_f_op_f32(-1000f), _wgslsmith_f_op_f32(func_3(firstLeadingBit(vec2<u32>(u_input.a.x, 0u)), 1u, vec4<i32>(1i, 40048i, -1i, -1i), arg_0.x || false)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -239f) * _wgslsmith_f_op_f32(-1000f + 603f))) + _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(-929f, 935f, -251f, -837f))), _wgslsmith_f_op_vec4_f32(floor(vec4<f32>(606f, 1694f, 456f, 132f))))) + _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(1745f, 370f, 483f, -537f))))), -189f);
    if (2683f > var_0.a.x) {
        if (true) {
            var_0 = Struct_2(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(var_0.a.x, var_0.b, var_0.b, _wgslsmith_f_op_f32(-980f * var_0.a.x))) - _wgslsmith_f_op_vec4_f32(exp2(vec4<f32>(_wgslsmith_f_op_f32(ceil(var_0.b)), var_0.a.x, 267f, _wgslsmith_f_op_f32(func_3(vec2<u32>(0u, u_input.a.x), 4294967295u, vec4<i32>(2147483647i, 1i, 12703i, 2147483647i), arg_0.x)))))), _wgslsmith_f_op_f32(round(var_0.a.x)));
            var_0 = Struct_2(var_0.a, _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-var_0.b))));
            return arg_0;
        }
        let var_1 = 2582f;
        let var_2 = -29411i;
        loop {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
            let var_3 = vec2<bool>(~(~firstTrailingBit(11293i)) == 22682i, var_2 > 2147483647i);
            let var_4 = vec2<i32>(~(~reverseBits(i32(-1i) * -1i)), ~(183i << (_wgslsmith_div_u32(4294967295u, u_input.b.x) % 32u)) << ((_wgslsmith_dot_vec4_u32(~vec4<u32>(u_input.b.x, u_input.a.x, 35077u, 27857u), abs(vec4<u32>(1u, u_input.a.x, u_input.a.x, u_input.b.x))) << (u_input.b.x % 32u)) % 32u));
            continue;
        }
        let var_3 = u_input.a;
    }
    for (var var_1 = 1i; ; var_1 += 1i) {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        loop {
            if (LOOP_COUNTERS[12u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
            var var_2 = Struct_2(_wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(var_0.a, var_0.a) - var_0.a), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_0.a.x)));
            var var_3 = Struct_2(var_2.a, _wgslsmith_f_op_f32(floor(-682f)));
            break;
        }
        break;
    }
    switch (i32(-1i) * -(~_wgslsmith_clamp_i32(_wgslsmith_mod_i32(0i, 12986i), firstLeadingBit(1i), abs(2147483647i)))) {
        case 2147483647i: {
            var_0 = Struct_2(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(var_0.a - _wgslsmith_f_op_vec4_f32(select(vec4<f32>(var_0.a.x, -105f, var_0.b, -222f), vec4<f32>(-928f, var_0.a.x, 1402f, -2325f), vec4<bool>(arg_0.x, arg_0.x, arg_0.x, arg_0.x)))))), -665f);
            if (arg_0.x) {
                var var_1 = _wgslsmith_f_op_f32(-var_0.a.x);
                var var_2 = Struct_2(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(var_0.a * vec4<f32>(var_0.b, 973f, 839f, var_0.b)))))), var_0.a.x);
                let var_3 = all(select(select(!(!arg_0.yx), select(arg_0.yy, arg_0.yx, !arg_0.x), any(arg_0)), select(!arg_0.yy, select(select(arg_0.xy, vec2<bool>(arg_0.x, arg_0.x), arg_0.x), !vec2<bool>(false, arg_0.x), !vec2<bool>(false, arg_0.x)), !(!arg_0.x)), vec2<bool>(arg_0.x, arg_0.x)));
                var_2 = Struct_2(_wgslsmith_f_op_vec4_f32(select(vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(-954f, 564f)), 1f, var_2.b, -759f), _wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(var_2.a.x, var_2.a.x, var_0.b, var_2.a.x)) * _wgslsmith_f_op_vec4_f32(-vec4<f32>(-168f, 657f, 1242f, 896f))))), true)), -631f);
            }
            if (arg_0.x && arg_0.x) {
            }
            var_0 = Struct_2(_wgslsmith_f_op_vec4_f32(-var_0.a), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(var_0.b, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(-1952f, 463f))))) + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(var_0.a.x * var_0.b) - _wgslsmith_f_op_f32(func_4(_wgslsmith_f_op_f32(458f + var_0.b), vec3<f32>(-145f, var_0.b, 1000f), Struct_2(vec4<f32>(1795f, -273f, -576f, var_0.a.x), var_0.b), _wgslsmith_div_vec2_i32(vec2<i32>(1i, 46874i), vec2<i32>(-86104i, 2147483647i)))))));
        }
        case 23229i: {
            loop {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                var var_1 = all(vec3<bool>(arg_0.x, u_input.a.x >= ~16757u, _wgslsmith_clamp_u32(u_input.a.x, 1u, ~u_input.b.x) > ~4294967295u));
                let var_2 = _wgslsmith_f_op_vec2_f32(sign(_wgslsmith_f_op_vec2_f32(ceil(vec2<f32>(-375f, -547f)))));
                var_0 = Struct_2(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(var_0.a - vec4<f32>(var_2.x, -2891f, var_2.x, 1000f)) * _wgslsmith_f_op_vec4_f32(step(vec4<f32>(var_0.b, var_2.x, var_0.b, var_0.b), vec4<f32>(1000f, 1000f, var_0.a.x, var_2.x)))) * _wgslsmith_f_op_vec4_f32(exp2(vec4<f32>(var_0.a.x, 396f, -612f, -1626f))))), 918f);
                var var_3 = func_5(~(~(~select(vec4<u32>(u_input.a.x, 4294967295u, u_input.b.x, u_input.a.x), vec4<u32>(u_input.a.x, u_input.a.x, u_input.b.x, u_input.a.x), true))), Struct_1(~vec2<i32>(_wgslsmith_clamp_i32(20152i, -1i, 19495i), func_5(vec4<u32>(12796u, 40898u, 51951u, u_input.a.x), Struct_1(vec2<i32>(0i, -1i))).a.x)));
            }
            var_0 = Struct_2(var_0.a, _wgslsmith_f_op_f32(-527f - 455f));
            switch (-1i) {
                case -6082i: {
                    let var_1 = Struct_1(vec2<i32>(-1i, -(max(18638i, -27003i) << (u_input.a.x % 32u))));
                    var var_2 = u_input.b.x;
                    var_2 = u_input.b.x;
                    let var_3 = var_1;
                }
                case 46144i: {
                    let var_1 = ~_wgslsmith_clamp_u32(1u, u_input.a.x, min(u_input.a.x ^ u_input.a.x, u_input.b.x));
                    var var_2 = i32(-2147483648);
                    var_0 = Struct_2(var_0.a, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(var_0.a.x - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-234f)))));
                    var_0 = Struct_2(_wgslsmith_f_op_vec4_f32(var_0.a + _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(-236f + var_0.b), _wgslsmith_f_op_f32(var_0.b * var_0.a.x), var_0.b, 154f))), var_0.a.x);
                    var_2 = -max(_wgslsmith_sub_i32(22439i, firstLeadingBit(1i)), _wgslsmith_div_i32(-(~1198i), -1i));
                }
                case -27711i: {
                    var_0 = Struct_2(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(var_0.a * _wgslsmith_f_op_vec4_f32(-vec4<f32>(-1742f, 749f, var_0.b, var_0.b)))))), _wgslsmith_f_op_f32(ceil(-1000f)));
                    var var_1 = vec2<i32>(_wgslsmith_sub_i32(_wgslsmith_mod_i32(_wgslsmith_dot_vec4_i32(vec4<i32>(0i, -25881i, 56372i, 9158i), vec4<i32>(1i, 18903i, 0i, 2883i)), func_6().x), 1i), ~(-1i)) >> (u_input.a.xx % vec2<u32>(32u));
                }
                default: {
                    let var_1 = Struct_1(vec2<i32>(_wgslsmith_mod_i32(~(~2933i), 1i), i32(-1i) * -1i));
                    var_0 = Struct_2(_wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(var_0.a * vec4<f32>(1077f, var_0.b, _wgslsmith_f_op_f32(-1406f), _wgslsmith_f_op_f32(var_0.b * 1429f))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(-675f, var_0.a.x, var_0.a.x, var_0.b) - _wgslsmith_f_op_vec4_f32(var_0.a + vec4<f32>(var_0.b, -1000f, var_0.b, -863f))) - _wgslsmith_f_op_vec4_f32(floor(vec4<f32>(-1694f, var_0.b, var_0.a.x, -1047f)))))), var_0.a.x);
                    var var_2 = Struct_2(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(abs(vec4<f32>(287f, 1061f, -2104f, 728f))) * var_0.a) * vec4<f32>(_wgslsmith_f_op_f32(var_0.a.x * var_0.b), 594f, _wgslsmith_f_op_f32(-1526f), _wgslsmith_div_f32(-689f, 1069f))) - _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(step(var_0.a, var_0.a)) + var_0.a), var_0.a)), var_0.b);
                }
            }
            var var_1 = vec4<bool>(arg_0.x, all(select(!select(vec2<bool>(arg_0.x, arg_0.x), arg_0.yy, arg_0.x), !select(arg_0.xx, vec2<bool>(arg_0.x, false), arg_0.x), select(select(vec2<bool>(arg_0.x, arg_0.x), vec2<bool>(true, true), arg_0.x), !arg_0.xy, vec2<bool>(false, arg_0.x)))), !(!(true || (arg_0.x | arg_0.x))), var_0.b <= _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(trunc(1141f)))) + var_0.a.x));
            switch (-_wgslsmith_dot_vec3_i32(_wgslsmith_add_vec3_i32(-vec3<i32>(68577i, -17827i, 15895i), func_6().xww), reverseBits(abs(vec3<i32>(0i, 19842i, 22136i)) ^ select(vec3<i32>(0i, 1i, 28685i), vec3<i32>(-22388i, 20359i, 2147483647i), arg_0.x)))) {
                case -28418i: {
                    let var_2 = Struct_1(vec2<i32>(func_5(~vec4<u32>(u_input.b.x, u_input.a.x, u_input.b.x, u_input.a.x), Struct_1(vec2<i32>(1i, 49432i))).a.x, -1i) | firstLeadingBit(_wgslsmith_clamp_vec2_i32(vec2<i32>(-20325i, 20531i), vec2<i32>(-19133i, -34389i), vec2<i32>(-47630i, i32(-2147483648))) | -vec2<i32>(1i, -32425i)));
                    var_0 = Struct_2(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(vec4<f32>(var_0.b, var_0.a.x, 1000f, 851f) * vec4<f32>(1468f, var_0.a.x, var_0.b, var_0.a.x)))) + var_0.a), vec4<f32>(_wgslsmith_f_op_f32(f32(-1f) * -965f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1616f - 216f) + _wgslsmith_f_op_f32(-1000f)), var_0.b, _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(var_0.b * 580f))))), _wgslsmith_f_op_f32(-var_0.a.x));
                    let var_3 = ~u_input.b.x;
                    var_0 = Struct_2(_wgslsmith_f_op_vec4_f32(-var_0.a), var_0.b);
                }
                case 23618i: {
                    let var_2 = arg_0;
                    let var_3 = Struct_2(_wgslsmith_div_vec4_f32(var_0.a, vec4<f32>(var_0.a.x, _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(step(-731f, 1790f)))), _wgslsmith_f_op_f32(func_3(~vec2<u32>(u_input.a.x, 46510u), abs(u_input.b.x), vec4<i32>(1i, 1i, 1i, 1i), false)), _wgslsmith_f_op_f32(-var_0.b))), 619f);
                    var_1 = vec4<bool>(!(!all(select(vec4<bool>(true, false, false, false), vec4<bool>(true, var_1.x, var_1.x, var_1.x), vec4<bool>(var_2.x, false, var_2.x, var_2.x)))), !var_1.x, !var_1.x, any(select(arg_0.xy, select(vec2<bool>(false, false), vec2<bool>(false, var_1.x), var_1.x && var_1.x), false)));
                }
                case i32(-2147483648): {
                    let var_2 = ~vec2<u32>(1u | ~u_input.b.x, ~1u);
                }
                default: {
                    var var_2 = func_6().yzx;
                    var_0 = Struct_2(var_0.a, var_0.b);
                }
            }
        }
        case -1i: {
            let var_1 = -_wgslsmith_div_vec2_i32(vec2<i32>(12757i, -31901i), vec2<i32>(func_5(select(vec4<u32>(1u, u_input.b.x, 30607u, u_input.a.x), vec4<u32>(u_input.a.x, 17606u, u_input.a.x, 1u), arg_0.x), Struct_1(vec2<i32>(-9811i, 1i))).a.x, ~(i32(-2147483648))));
            var var_2 = var_1.x;
            let var_3 = _wgslsmith_f_op_f32(-var_0.b);
            var_0 = Struct_2(var_0.a, _wgslsmith_f_op_f32(var_3 * _wgslsmith_f_op_f32(var_3 * _wgslsmith_f_op_f32(exp2(var_3)))));
        }
        case 1i: {
            loop {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                continue;
            }
            let var_1 = !arg_0.xx;
            if (any(select(var_1, var_1, !arg_0.x))) {
                let var_2 = !(!all(select(vec2<bool>(true, true), !vec2<bool>(arg_0.x, var_1.x), arg_0.x)));
                var var_3 = false;
            }
            var var_2 = _wgslsmith_f_op_f32(exp2(var_0.b));
        }
        default: {
            loop {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
                var_0 = Struct_2(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(var_0.a * _wgslsmith_f_op_vec4_f32(round(vec4<f32>(var_0.a.x, var_0.a.x, var_0.b, -1000f)))), var_0.a, _wgslsmith_div_f32(949f, var_0.b) == -776f)), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(var_0.a + _wgslsmith_f_op_vec4_f32(-vec4<f32>(var_0.b, -741f, var_0.b, -716f))))), var_0.a.x);
                let var_1 = _wgslsmith_f_op_f32(func_4(_wgslsmith_f_op_f32(func_3(_wgslsmith_div_vec2_u32(~(~u_input.b), vec2<u32>(u_input.b.x ^ 4294967295u, 104907u)), u_input.b.x, max(~vec4<i32>(1i, 1i, 1i, 1i), select(firstLeadingBit(vec4<i32>(20450i, 2147483647i, 646i, 27545i)), ~vec4<i32>(1i, -12225i, i32(-2147483648), 2147483647i), true)), true)), _wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(-658f, 415f, var_0.a.x) - var_0.a.zxy)), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(var_0.a.zyz + vec3<f32>(-1000f, -407f, var_0.a.x))))))), Struct_2(_wgslsmith_f_op_vec4_f32(var_0.a + _wgslsmith_f_op_vec4_f32(round(vec4<f32>(var_0.b, var_0.a.x, var_0.b, var_0.b)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(var_0.b + -749f) + 576f)), reverseBits(vec2<i32>((i32(-1i) * -4834i) & func_6().x, _wgslsmith_clamp_i32(0i, countOneBits(-1i), firstTrailingBit(i32(-2147483648)))))));
                let var_2 = !select(!vec4<bool>(false, true, arg_0.x, true), select(vec4<bool>(true, true, true, true), vec4<bool>(arg_0.x, true, true, true), !(!vec4<bool>(false, arg_0.x, arg_0.x, arg_0.x))), vec4<bool>(select(arg_0.x, -1120f > var_0.b, arg_0.x), true, !any(vec3<bool>(arg_0.x, arg_0.x, arg_0.x)), all(!vec4<bool>(arg_0.x, true, arg_0.x, false))));
                var var_3 = Struct_2(_wgslsmith_f_op_vec4_f32(var_0.a * _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-var_0.a) * _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(exp2(vec4<f32>(-2154f, 541f, var_1, -2082f)))))), var_1);
                var_0 = Struct_2(vec4<f32>(var_3.b, var_0.b, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(855f * var_1)), -797f), var_0.a.x);
            }
            var_0 = Struct_2(var_0.a, var_0.b);
            for (var var_1 = i32(-2147483648); false; var_1 += 1i) {
                if (LOOP_COUNTERS[16u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
                var_1 = ~(i32(-1i) * -select(_wgslsmith_mult_i32(-631i, 1i), reverseBits(11921i), arg_0.x));
                break;
            }
            var var_1 = ~1i;
        }
    }
    return vec3<bool>(!(!arg_0.x) & any(arg_0), all(vec2<bool>(select(false, arg_0.x, false) || select(arg_0.x, true, false), arg_0.x)), 42823i >= ~_wgslsmith_mod_i32(0i, func_5(vec4<u32>(77191u, u_input.a.x, u_input.a.x, 4294967295u), Struct_1(vec2<i32>(i32(-2147483648), -4110i))).a.x));
}

fn func_2() -> Struct_1 {
    var var_0 = !select(select(select(select(vec3<bool>(false, false, true), vec3<bool>(true, false, false), vec3<bool>(false, false, false)), vec3<bool>(true, true, true), true), vec3<bool>(true, true, true), true), vec3<bool>(true & select(true, true, false), !any(vec4<bool>(true, true, false, false)), true), true);
    var_0 = vec3<bool>(true, true, true);
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
            var_0 = !(!vec3<bool>(true, true, var_0.x));
        }
        var_0 = vec3<bool>(!(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1453f) - 193f) < _wgslsmith_f_op_f32(func_3(_wgslsmith_mult_vec2_u32(vec2<u32>(u_input.b.x, u_input.b.x), vec2<u32>(72403u, u_input.a.x)), 59499u, ~vec4<i32>(0i, 17506i, -17903i, 2147483647i), true))), true, true);
        loop {
            if (LOOP_COUNTERS[19u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
            continue;
        }
        var var_1 = func_8(vec3<bool>(any(vec4<bool>(!var_0.x, false, u_input.b.x <= 30873u, var_0.x)), func_7(_wgslsmith_mult_vec4_u32(~vec4<u32>(u_input.a.x, 1159u, u_input.a.x, 19161u), select(vec4<u32>(u_input.b.x, u_input.a.x, 71048u, u_input.a.x), vec4<u32>(1u, 77614u, u_input.b.x, u_input.a.x), vec4<bool>(var_0.x, var_0.x, var_0.x, var_0.x))), vec4<bool>(true, true, true, true), _wgslsmith_div_u32(min(u_input.b.x, 4294967295u), 52492u), func_5(_wgslsmith_sub_vec4_u32(vec4<u32>(u_input.a.x, 45727u, 91064u, u_input.b.x), vec4<u32>(1u, u_input.a.x, 71883u, u_input.b.x)), Struct_1(vec2<i32>(23235i, 12109i)))), !(select(var_0.x, false, var_0.x) && (u_input.a.x <= u_input.b.x))));
        var var_2 = abs(_wgslsmith_mod_u32(_wgslsmith_div_u32(max(abs(u_input.b.x), u_input.b.x), _wgslsmith_add_u32(u_input.a.x << (u_input.b.x % 32u), u_input.b.x)), ~u_input.a.x));
    }
    if (false) {
        switch (-2411i) {
            case -15783i: {
                var_0 = func_8(!func_8(vec3<bool>(true & var_0.x, var_0.x, func_8(vec3<bool>(var_0.x, var_0.x, false)).x)));
                var_0 = vec3<bool>(var_0.x, !var_0.x, u_input.a.x > u_input.b.x);
                var var_1 = Struct_1(-func_5(reverseBits(vec4<u32>(u_input.b.x, 1u, 0u, u_input.a.x)) << (~vec4<u32>(26423u, 4294967295u, 3522u, 4294967295u) % vec4<u32>(32u)), Struct_1(firstLeadingBit(vec2<i32>(-31708i, -1i)))).a);
                let var_2 = Struct_2(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(f32(-1f) * -2371f), -187f, -513f, _wgslsmith_f_op_f32(2092f - -601f)))), _wgslsmith_f_op_f32(-1186f));
                let var_3 = vec4<f32>(-203f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(var_2.a.x * _wgslsmith_f_op_f32(-var_2.b)) + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_2.b) + var_2.a.x))), 373f, 404f);
            }
            default: {
                var_0 = !(!(!select(select(vec3<bool>(var_0.x, true, true), vec3<bool>(false, true, var_0.x), vec3<bool>(false, false, var_0.x)), vec3<bool>(var_0.x, true, true), select(vec3<bool>(var_0.x, var_0.x, true), vec3<bool>(false, var_0.x, true), false))));
            }
        }
        var var_1 = vec3<u32>(_wgslsmith_add_u32(_wgslsmith_clamp_u32(u_input.b.x, u_input.b.x, u_input.a.x), ~_wgslsmith_mult_u32(65814u, u_input.a.x)) | select(~u_input.a.x, ~6756u, any(vec3<bool>(var_0.x, var_0.x, true))), 1u, abs(abs(_wgslsmith_mod_u32(u_input.b.x, 29939u))) ^ u_input.a.x);
    }
    var var_1 = func_8(vec3<bool>(true, var_0.x, select(var_0.x, true, var_0.x)));
    return Struct_1(func_5((_wgslsmith_add_vec4_u32(vec4<u32>(37301u, u_input.b.x, u_input.a.x, u_input.b.x), vec4<u32>(u_input.b.x, 1u, u_input.b.x, 22407u)) >> (select(vec4<u32>(4294967295u, u_input.a.x, u_input.b.x, 4294967295u), vec4<u32>(u_input.a.x, 31372u, 0u, u_input.b.x), false) % vec4<u32>(32u))) & vec4<u32>(30263u, abs(4294967295u), 71809u >> (u_input.a.x % 32u), u_input.a.x), Struct_1(vec2<i32>(~(-1i), 1i))).a);
}

fn func_1() -> Struct_2 {
    let var_0 = func_2();
    var var_1 = any(!(!(!select(vec2<bool>(false, false), vec2<bool>(true, false), true))));
    for (var var_2 = -24173i; select(true, false, any(!select(vec2<bool>(true, true), vec2<bool>(true, true), vec2<bool>(true, true)))); var_2 -= 1i) {
        if (LOOP_COUNTERS[20u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
        let var_3 = var_0;
        switch (select(~abs(1i), _wgslsmith_dot_vec2_i32(var_3.a | firstLeadingBit(vec2<i32>(var_0.a.x, -1i)), var_3.a), true)) {
            default: {
                break;
            }
        }
        var var_4 = Struct_2(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(1000f - 982f), _wgslsmith_f_op_f32(-1807f * 515f), _wgslsmith_f_op_f32(ceil(1033f)), _wgslsmith_f_op_f32(-1483f))) + vec4<f32>(492f, 311f, _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-1809f * 196f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(224f, 488f))))), 781f);
    }
    if (false) {
        var var_2 = Struct_2(vec4<f32>(2132f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-514f))), -920f, _wgslsmith_f_op_f32(func_4(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(f32(-1f) * -198f))), _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(270f, 599f, 623f) - vec3<f32>(885f, -320f, -1449f)), _wgslsmith_div_vec3_f32(vec3<f32>(1042f, 1000f, 1705f), vec3<f32>(211f, 968f, 1000f))), Struct_2(_wgslsmith_f_op_vec4_f32(-vec4<f32>(1834f, 728f, -538f, 610f)), _wgslsmith_f_op_f32(-691f * 2550f)), max(var_0.a, vec2<i32>(-1784i, 2147483647i)) & countOneBits(vec2<i32>(i32(-2147483648), 1i))))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(1226f)) - _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1012f) - _wgslsmith_f_op_f32(205f * 2624f))))));
        var_2 = Struct_2(_wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(func_4(var_2.b, var_2.a.xxx, Struct_2(var_2.a, var_2.b), -vec2<i32>(var_0.a.x, 0i))), var_2.a.x, var_2.a.x, _wgslsmith_f_op_f32(-548f - _wgslsmith_f_op_f32(-var_2.a.x))) - var_2.a), _wgslsmith_f_op_f32(func_4(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(min(-237f, _wgslsmith_f_op_f32(-811f - 572f))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-var_2.b), _wgslsmith_f_op_f32(func_3(u_input.a.yx, 0u, vec4<i32>(1i, var_0.a.x, var_0.a.x, var_0.a.x), false))))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(-var_2.a.zzz), var_2.a.yzy)) * _wgslsmith_f_op_vec3_f32(vec3<f32>(-1092f, var_2.b, -1013f) - _wgslsmith_f_op_vec3_f32(vec3<f32>(-1106f, 2146f, var_2.b) + vec3<f32>(-1103f, -320f, 1878f)))), Struct_2(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(-var_2.a), vec4<f32>(var_2.a.x, var_2.a.x, var_2.a.x, var_2.b), select(vec4<bool>(false, false, false, false), vec4<bool>(false, false, false, false), true))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(2717f - 814f) * 1580f)), select(~var_0.a, -_wgslsmith_sub_vec2_i32(var_0.a, var_0.a), true))));
        if (false) {
            let var_3 = func_2();
            let var_4 = Struct_1(_wgslsmith_clamp_vec2_i32(vec2<i32>(_wgslsmith_clamp_i32(-var_0.a.x, ~2147483647i, func_6().x), ~countOneBits(-42130i)), firstTrailingBit(var_0.a), vec2<i32>(i32(-2147483648), reverseBits(_wgslsmith_div_i32(var_0.a.x, -63i)))));
        }
        var var_3 = vec2<bool>(true, true);
        var_1 = !var_3.x;
    }
    switch (min(-countOneBits(var_0.a.x), _wgslsmith_dot_vec4_i32(vec4<i32>(_wgslsmith_add_i32(1i, 0i), -852i ^ var_0.a.x, i32(-2147483648), -1i), ~_wgslsmith_add_vec4_i32(vec4<i32>(var_0.a.x, var_0.a.x, 2147483647i, 5211i), vec4<i32>(var_0.a.x, -49761i, 2147483647i, var_0.a.x)))) >> (abs(_wgslsmith_dot_vec3_u32(vec3<u32>(0u, u_input.a.x, ~u_input.b.x), ~_wgslsmith_sub_vec3_u32(u_input.a, vec3<u32>(u_input.b.x, 38356u, 21706u)))) % 32u)) {
        case -37781i: {
            if (true) {
            }
        }
        case 46724i: {
            var_1 = true;
            var_1 = func_7((vec4<u32>(abs(4294967295u), 1u | u_input.b.x, ~4294967295u, _wgslsmith_mult_u32(1u, u_input.b.x)) >> (~_wgslsmith_add_vec4_u32(vec4<u32>(41266u, 86302u, 0u, 22468u), vec4<u32>(0u, 47079u, 6498u, u_input.a.x)) % vec4<u32>(32u))) >> (vec4<u32>(52936u, ~21025u, ~u_input.b.x, ~1u) % vec4<u32>(32u)), select(!select(select(vec4<bool>(false, false, true, false), vec4<bool>(false, true, false, true), vec4<bool>(true, true, true, false)), vec4<bool>(true, true, false, false), true), vec4<bool>(true, true, true, true), !select(vec4<bool>(false, true, false, false), vec4<bool>(true, false, false, false), vec4<bool>(true, true, true, true))), u_input.a.x, func_2());
        }
        case 0i: {
            for (var var_2 = var_0.a.x; true; var_2 -= 1i) {
                if (LOOP_COUNTERS[21u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
            }
            let var_2 = func_5(~(~abs(vec4<u32>(u_input.a.x, u_input.b.x, 4294967295u, 1u))) ^ (~select(vec4<u32>(u_input.a.x, 2241u, u_input.b.x, u_input.a.x), vec4<u32>(35044u, 48055u, u_input.b.x, u_input.b.x), true) & ~_wgslsmith_sub_vec4_u32(vec4<u32>(u_input.b.x, 0u, u_input.a.x, 4294967295u), vec4<u32>(u_input.b.x, u_input.a.x, u_input.a.x, u_input.a.x))), var_0);
        }
        default: {
            let var_2 = func_8(vec3<bool>(true, true, func_8(vec3<bool>(true, true, true)).x));
            if (false) {
                var_1 = !((_wgslsmith_dot_vec4_i32(~vec4<i32>(var_0.a.x, var_0.a.x, 1i, var_0.a.x), countOneBits(vec4<i32>(-1i, 0i, var_0.a.x, var_0.a.x))) < ((i32(-1i) * -34179i) ^ var_0.a.x)) & all(vec3<bool>(all(vec4<bool>(false, var_2.x, var_2.x, var_2.x)), false, var_2.x)));
                var_1 = !var_2.x;
                var var_3 = vec4<bool>(var_2.x, true, true, 0i < firstTrailingBit(var_0.a.x));
                let var_4 = vec4<i32>(_wgslsmith_mult_i32(var_0.a.x, var_0.a.x), var_0.a.x, abs(-1i), _wgslsmith_dot_vec3_i32(vec3<i32>(_wgslsmith_div_i32(-1i, 1i), -1i, ~50570i), vec3<i32>(0i, _wgslsmith_dot_vec2_i32(vec2<i32>(-1i, var_0.a.x), vec2<i32>(var_0.a.x, 35448i)), max(0i, var_0.a.x)))) | abs(vec4<i32>(_wgslsmith_div_i32(-1i, -25710i), min(select(var_0.a.x, 29297i, false), min(-13769i, i32(-2147483648))), -1i, _wgslsmith_sub_i32(_wgslsmith_add_i32(var_0.a.x, var_0.a.x), var_0.a.x)));
            }
            var_1 = true;
        }
    }
    return Struct_2(_wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(1006f, 572f, 101f, -161f)) * _wgslsmith_f_op_vec4_f32(vec4<f32>(1774f, 378f, -1833f, -2020f) + vec4<f32>(-850f, -551f, -871f, 526f)))))), _wgslsmith_div_f32(471f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-783f * _wgslsmith_f_op_f32(floor(269f))))));
}

fn func_9(arg_0: f32, arg_1: i32, arg_2: Struct_2) -> Struct_1 {
    if (any(vec2<bool>(any(vec4<bool>(true, true, true, true)), select(true, false, !(u_input.a.x != u_input.b.x))))) {
        switch (~(~_wgslsmith_dot_vec4_i32(abs(-vec4<i32>(0i, arg_1, 60392i, i32(-2147483648))), _wgslsmith_mult_vec4_i32(vec4<i32>(0i, -31376i, arg_1, arg_1), vec4<i32>(2147483647i, arg_1, 0i, -1i) ^ vec4<i32>(arg_1, -33594i, arg_1, arg_1))))) {
            case 0i: {
                let var_0 = arg_2;
                var var_1 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(exp2(arg_2.a))) - _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(step(var_0.a, _wgslsmith_f_op_vec4_f32(round(vec4<f32>(arg_2.a.x, arg_2.a.x, 399f, -635f))))) - _wgslsmith_f_op_vec4_f32(floor(arg_2.a)))));
                var_1 = _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(select(arg_0, _wgslsmith_div_f32(_wgslsmith_f_op_f32(-arg_0), _wgslsmith_f_op_f32(var_1.x * arg_2.b)), any(select(vec3<bool>(true, true, false), vec3<bool>(false, false, true), vec3<bool>(false, false, true))))), var_1.x, 1000f, _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_2.a.x))))));
                let var_2 = ~0u;
                var_1 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(func_1().b, _wgslsmith_f_op_f32(-696f - _wgslsmith_f_op_f32(-1543f)), -963f, 1000f)));
            }
            case -10464i: {
                var var_0 = Struct_2(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(trunc(arg_2.a))) + arg_2.a), _wgslsmith_f_op_f32(f32(-1f) * -1165f));
                var_0 = func_1();
            }
            case -39294i: {
                var var_0 = Struct_2(vec4<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(func_4(arg_2.b, _wgslsmith_f_op_vec3_f32(vec3<f32>(224f, -428f, arg_0) - arg_2.a.wxy), Struct_2(vec4<f32>(-709f, arg_0, arg_0, arg_2.a.x), -405f), vec2<i32>(0i, arg_1) | vec2<i32>(i32(-2147483648), 2147483647i))))), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_0 - -1698f) * -209f), _wgslsmith_f_op_f32(150f - _wgslsmith_f_op_f32(1031f * -717f)), true & select(true, true, false))), arg_2.b, _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(394f + _wgslsmith_f_op_f32(ceil(arg_2.b)))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(839f)))))));
                var_0 = Struct_2(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-arg_2.a)), var_0.a.x);
                let var_1 = _wgslsmith_clamp_i32(func_2().a.x, arg_1, reverseBits(~(0i)));
                var_0 = Struct_2(_wgslsmith_div_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(func_3(vec2<u32>(4294967295u, u_input.a.x), 1u, ~vec4<i32>(-1i, 0i, -39082i, -51445i), true)), _wgslsmith_f_op_f32(f32(-1f) * -382f), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(select(arg_2.b, arg_0, false)))), _wgslsmith_f_op_f32(trunc(arg_2.a.x))), vec4<f32>(1480f, var_0.b, 903f, 2015f)), arg_0);
                var var_2 = vec2<i32>(-18183i, ~var_1);
            }
            default: {
                var var_0 = _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(-arg_2.a))), _wgslsmith_f_op_vec4_f32(-arg_2.a));
                var var_1 = arg_2.a.yzz;
            }
        }
        if (arg_1 < i32(-2147483648)) {
            let var_0 = func_1();
        }
    }
    let var_0 = _wgslsmith_dot_vec3_i32(~(-_wgslsmith_mod_vec3_i32(countOneBits(vec3<i32>(0i, arg_1, 14116i)), -vec3<i32>(-42076i, arg_1, 32784i))), max((func_6().wxw | vec3<i32>(arg_1, -34174i, -47731i)) & min(vec3<i32>(2147483647i, -46142i, -2716i), vec3<i32>(arg_1, arg_1, -40802i)), _wgslsmith_sub_vec3_i32(~(vec3<i32>(arg_1, 2147483647i, arg_1) << (vec3<u32>(u_input.b.x, 0u, u_input.b.x) % vec3<u32>(32u))), max(vec3<i32>(arg_1, 0i, -18263i), vec3<i32>(1i, 0i, 52510i)) | _wgslsmith_div_vec3_i32(vec3<i32>(arg_1, -42021i, 11409i), vec3<i32>(arg_1, 1i, arg_1)))));
    switch (min(_wgslsmith_sub_i32(i32(-1i) * -1i, arg_1), max(reverseBits(reverseBits(41585i)), var_0 << (~(~u_input.a.x) % 32u)))) {
        case -1i: {
            let var_1 = _wgslsmith_f_op_f32(-1000f);
        }
        case 0i: {
            switch (var_0) {
                case i32(-2147483648): {
                    return func_5(vec4<u32>(u_input.a.x, u_input.a.x, _wgslsmith_dot_vec3_u32(~(u_input.a & u_input.a), u_input.a), 1u), func_5(_wgslsmith_add_vec4_u32(firstLeadingBit(vec4<u32>(u_input.b.x, 32602u, u_input.a.x, 90824u)), _wgslsmith_mult_vec4_u32(vec4<u32>(u_input.b.x, u_input.b.x, u_input.b.x, 0u), ~vec4<u32>(6672u, 0u, 0u, 4294967295u))), func_2()));
                }
                case 2497i: {
                    var var_1 = func_1();
                    var var_2 = _wgslsmith_f_op_f32(trunc(arg_0));
                    var_2 = _wgslsmith_f_op_f32(-1180f);
                    var_1 = func_1();
                }
                case -48220i: {
                    let var_1 = !vec2<bool>(_wgslsmith_dot_vec4_u32(vec4<u32>(3831u, 1u, 60766u, u_input.b.x) << (vec4<u32>(u_input.a.x, 1u, u_input.b.x, 1u) % vec4<u32>(32u)), vec4<u32>(u_input.a.x, 0u, 47716u, u_input.b.x) ^ vec4<u32>(1u, 50884u, u_input.a.x, u_input.a.x)) <= 138676u, true);
                    var var_2 = arg_2;
                    var var_3 = arg_2.a;
                }
                default: {
                    let var_1 = arg_2;
                    var var_2 = vec2<i32>(1i, i32(-1i) * -reverseBits(var_0));
                    var_2 = func_2().a;
                    var var_3 = !(!all(select(vec4<bool>(false, true, false, false), vec4<bool>(true, true, true, true), select(vec4<bool>(false, false, false, false), vec4<bool>(true, false, true, false), true))));
                }
            }
        }
        case 39824i: {
            if (true) {
                let var_1 = func_1();
                let var_2 = _wgslsmith_f_op_vec3_f32(vec3<f32>(405f, _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(var_1.b))), arg_0, true)), _wgslsmith_f_op_f32(-373f)) + arg_2.a.xxw);
                return func_2();
            }
            let var_1 = func_2();
            let var_2 = func_2().a.x >> (44260u % 32u);
            switch (max(firstTrailingBit(var_2) & -2147483647i, i32(-1i) * -((var_0 >> (4294967295u % 32u)) & (arg_1 ^ 26415i)))) {
                case 0i: {
                    var var_3 = arg_2;
                    var var_4 = Struct_2(_wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(floor(arg_2.a)), vec4<f32>(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(f32(-1f) * -819f))), _wgslsmith_f_op_f32(-260f * _wgslsmith_f_op_f32(select(var_3.a.x, 1000f, true))), _wgslsmith_f_op_f32(-322f), arg_0))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_2.b - arg_0) + arg_2.b));
                }
                case 5961i: {
                    var var_3 = !vec3<bool>(_wgslsmith_add_u32(u_input.a.x, 1u) != 80154u, false, !((u_input.b.x | u_input.b.x) <= u_input.b.x));
                    let var_4 = _wgslsmith_f_op_vec2_f32(-arg_2.a.zy);
                }
                default: {
                }
            }
        }
        default: {
            let var_1 = _wgslsmith_f_op_f32(-arg_2.a.x);
            var var_2 = u_input.a.xz;
        }
    }
    let var_1 = !(!any(select(vec2<bool>(true, true), select(vec2<bool>(true, true), vec2<bool>(true, false), false), true)));
    switch (countOneBits(1i)) {
        default: {
        }
    }
    return func_2();
}

@compute
@workgroup_size(1)
fn main() {
    var var_0 = func_9(661f, -18436i, func_1());
    var var_1 = _wgslsmith_add_vec4_u32(vec4<u32>(max(u_input.b.x, _wgslsmith_mult_u32(40138u, u_input.b.x)), _wgslsmith_mult_u32(u_input.b.x, u_input.b.x), _wgslsmith_mod_u32(90455u, 1u) | u_input.a.x, ~(~72028u)), ~_wgslsmith_mult_vec4_u32(vec4<u32>(u_input.b.x, u_input.a.x, 0u, 83247u), vec4<u32>(27612u, 0u, 0u, 0u) & vec4<u32>(u_input.b.x, u_input.a.x, u_input.b.x, 63711u))) & abs(_wgslsmith_div_vec4_u32(_wgslsmith_sub_vec4_u32(vec4<u32>(1u, 22315u, 1u, 0u), vec4<u32>(u_input.a.x, u_input.a.x, u_input.b.x, u_input.a.x)), vec4<u32>(u_input.a.x, u_input.b.x, u_input.b.x, 29483u) << (vec4<u32>(u_input.a.x, 5540u, 15439u, u_input.b.x) % vec4<u32>(32u))) | abs(max(vec4<u32>(u_input.b.x, u_input.a.x, u_input.b.x, 106u), vec4<u32>(4294967295u, u_input.b.x, u_input.b.x, u_input.b.x))));
    let var_2 = func_1();
    var var_3 = 478f;
    switch (-18174i) {
        case -35514i: {
            var var_4 = ~(countOneBits(reverseBits(~vec4<u32>(var_1.x, var_1.x, u_input.b.x, 0u))) >> (~vec4<u32>(u_input.b.x, ~4294967295u, var_1.x, _wgslsmith_mult_u32(0u, 10139u)) % vec4<u32>(32u)));
            let var_5 = func_1();
        }
        case 38446i: {
            var var_4 = (firstTrailingBit(~(~4294967295u)) | countOneBits(~firstLeadingBit(29269u))) | abs(42926u);
            let var_5 = Struct_1(abs(var_0.a));
            var_3 = var_2.b;
            let var_6 = false;
        }
        case 2147483647i: {
            var var_4 = min(func_6().wzw, _wgslsmith_clamp_vec3_i32(vec3<i32>(1i, i32(-1i) * i32(-2147483648), _wgslsmith_dot_vec3_i32(vec3<i32>(var_0.a.x, 34787i, -1i), vec3<i32>(var_0.a.x, var_0.a.x, 1i))), _wgslsmith_mod_vec3_i32(vec3<i32>(1i, -7874i, -1i) >> (vec3<u32>(var_1.x, 1u, 16440u) % vec3<u32>(32u)), _wgslsmith_add_vec3_i32(vec3<i32>(var_0.a.x, var_0.a.x, var_0.a.x), vec3<i32>(0i, 43449i, -1i))), abs(countOneBits(vec3<i32>(1228i, -12810i, 1i)))) & vec3<i32>(_wgslsmith_mult_i32(~var_0.a.x, ~var_0.a.x), ~_wgslsmith_clamp_i32(var_0.a.x, var_0.a.x, i32(-2147483648)), func_5(countOneBits(vec4<u32>(u_input.b.x, u_input.b.x, u_input.b.x, 39745u)), func_9(var_2.a.x, var_0.a.x, Struct_2(var_2.a, 1000f))).a.x));
            var var_5 = _wgslsmith_div_i32(max(2147483647i, -16843i), abs(1i >> (firstLeadingBit(reverseBits(var_1.x)) % 32u)));
        }
        default: {
            for (var var_4 = i32(-2147483648); false; var_4 -= 1i) {
                if (LOOP_COUNTERS[22u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
                var var_5 = vec2<bool>(true, var_0.a.x <= var_0.a.x);
                var var_6 = false;
                var_5 = !(!func_8(vec3<bool>(true, select(var_5.x, var_5.x, false), true)).xy);
                var_3 = var_2.b;
                var_0 = Struct_1(reverseBits(-select(vec2<i32>(var_0.a.x, 39512i) | var_0.a, -var_0.a, true)));
            }
            var var_4 = _wgslsmith_f_op_vec3_f32(exp2(vec3<f32>(_wgslsmith_f_op_f32(-602f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(2058f + var_2.b) * var_2.a.x) * _wgslsmith_f_op_f32(var_2.b + -1249f)), _wgslsmith_f_op_f32(var_2.a.x - -2427f))));
        }
    }
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_f_op_vec2_f32(floor(_wgslsmith_div_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(ceil(var_2.b)), _wgslsmith_div_f32(var_2.b, 270f)), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(step(var_2.a.zw, var_2.a.xw)) - _wgslsmith_f_op_vec2_f32(-vec2<f32>(-1863f, 657f)))))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(vec3<f32>(706f, -627f, var_2.b) - _wgslsmith_f_op_vec3_f32(-var_2.a.wwz)), _wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1793f, -880f, var_2.a.x)), var_2.a.zyy))))), var_0.a.x, 1u, var_0.a.x);
}

`;