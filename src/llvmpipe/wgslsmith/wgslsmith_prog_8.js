export const input = [88,94,68,248,168,29,172,167,173,124,180,247,98,4,241,140,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [88,94,68,248,168,29,172,167,173,124,180,247,98,4,241,140,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[88,94,68,248,168,29,172,167,173,124,180,247,98,4,241,140]}
// Seed: 9123696965685142642

struct Struct_1 {
    a: f32,
    b: f32,
    c: i32,
    d: f32,
    e: vec2<f32>,
}

struct UniformBuffer {
    a: vec2<u32>,
    b: vec2<u32>,
}

struct StorageBuffer {
    a: i32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: vec3<f32>;

var<private> LOOP_COUNTERS: array<u32, 15>;

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn func_6(arg_0: vec3<bool>) -> f32 {
    switch (countOneBits(-48397i) << (_wgslsmith_sub_u32(u_input.a.x, u_input.b.x) % 32u)) {
        default: {
            var var_0 = Struct_1(_wgslsmith_div_f32(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(trunc(-651f)))), 128f), _wgslsmith_f_op_f32(global0.x + -826f), 35028i, -1434f, _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(floor(vec2<f32>(3077f, global0.x))) - _wgslsmith_f_op_vec2_f32(-vec2<f32>(global0.x, 649f))) + _wgslsmith_f_op_vec2_f32(select(vec2<f32>(_wgslsmith_f_op_f32(-global0.x), global0.x), vec2<f32>(_wgslsmith_f_op_f32(f32(-1f) * -1166f), global0.x), arg_0.xy))));
            var_0 = Struct_1(var_0.a, _wgslsmith_f_op_f32(sign(-421f)), _wgslsmith_mod_i32(1i, 12301i), _wgslsmith_f_op_f32(-890f), _wgslsmith_f_op_vec2_f32(round(var_0.e)));
            loop {
                if (LOOP_COUNTERS[0u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
                continue;
            }
            global0 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(-var_0.d), _wgslsmith_f_op_f32(var_0.e.x * _wgslsmith_f_op_f32(abs(var_0.a))), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(step(-384f, -115f)))))));
        }
    }
    loop {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        global0 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(select(vec3<f32>(global0.x, 682f, _wgslsmith_f_op_f32(f32(-1f) * -968f)), _wgslsmith_f_op_vec3_f32(abs(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(825f, global0.x, 1452f) + vec3<f32>(687f, -752f, 1161f)), vec3<f32>(global0.x, global0.x, global0.x)))), all(arg_0))) - vec3<f32>(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-global0.x), global0.x, true)))), 265f, global0.x));
        var var_0 = select(vec3<bool>(arg_0.x, false, abs(37312u | u_input.a.x) <= firstTrailingBit(u_input.a.x | u_input.a.x)), vec3<bool>(any(select(arg_0.zx, vec2<bool>(arg_0.x, false), arg_0.zz)), arg_0.x && !arg_0.x, all(select(vec4<bool>(false, false, true, false), !vec4<bool>(true, arg_0.x, arg_0.x, true), true))), arg_0);
        break;
    }
    loop {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        global0 = vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(global0.x + _wgslsmith_f_op_f32(-549f))), _wgslsmith_f_op_f32(742f - _wgslsmith_f_op_f32(-1361f)), -671f);
        if (arg_0.x) {
            continue;
        }
        global0 = vec3<f32>(1874f, -1008f, global0.x);
        var var_0 = -707f;
    }
    var var_0 = _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1000f, 152f, global0.x)), _wgslsmith_f_op_vec3_f32(select(vec3<f32>(global0.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(global0.x + -276f) * _wgslsmith_f_op_f32(-1000f + global0.x)), -434f), _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(global0.x, global0.x, -591f) - vec3<f32>(227f, global0.x, -1951f))), _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1867f, global0.x, 388f)), _wgslsmith_f_op_vec3_f32(round(vec3<f32>(-763f, 131f, global0.x))))), true)));
    loop {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        switch (_wgslsmith_dot_vec3_i32(select(abs(vec3<i32>(-32779i << (1u % 32u), ~(-1i), _wgslsmith_mult_i32(35701i, -38758i))), firstLeadingBit(vec3<i32>(_wgslsmith_dot_vec4_i32(vec4<i32>(i32(-2147483648), 1i, 32777i, 60742i), vec4<i32>(-23397i, 1i, -1i, 2147483647i)), _wgslsmith_mod_i32(-34581i, 1i), select(2147483647i, i32(-2147483648), false))), arg_0), vec3<i32>(_wgslsmith_mult_i32(_wgslsmith_dot_vec4_i32(vec4<i32>(0i, i32(-2147483648), -13375i, i32(-2147483648)), vec4<i32>(1i, 1i, 1i, 1i)), ~2147483647i), select(min(-28835i, 1i), 1i, any(vec4<bool>(true, arg_0.x, arg_0.x, false))) & -1i, _wgslsmith_dot_vec4_i32(_wgslsmith_sub_vec4_i32(vec4<i32>(-1i, 32091i, 3924i, 1i), vec4<i32>(1i, -811i, 2147483647i, 1i)), vec4<i32>(0i, i32(-2147483648), i32(-2147483648), -29282i)) & -(i32(-1i) * -1i)))) {
            case 94378i: {
                global0 = _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(exp2(vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -454f), -1254f, _wgslsmith_f_op_f32(ceil(-391f)))))), vec3<f32>(var_0.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -941f)) - global0.x), 666f)));
                global0 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(var_0.x + global0.x), _wgslsmith_f_op_f32(ceil(-172f)), _wgslsmith_f_op_f32(-global0.x)) + vec3<f32>(global0.x, -479f, _wgslsmith_f_op_f32(-global0.x))) + _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(vec3<f32>(var_0.x, var_0.x, 384f) - vec3<f32>(1163f, -105f, -640f))))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(global0.x, global0.x, -197f)))));
                var var_1 = vec2<bool>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-296f) * _wgslsmith_f_op_f32(round(var_0.x))) + global0.x) > 447f, !(!all(select(arg_0.zy, vec2<bool>(true, false), arg_0.x))));
            }
            case -9105i: {
                continue;
            }
            default: {
                global0 = _wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(step(vec3<f32>(global0.x, _wgslsmith_f_op_f32(global0.x + -382f), _wgslsmith_f_op_f32(sign(-703f))), _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1439f, global0.x, -1000f)), _wgslsmith_f_op_vec3_f32(vec3<f32>(120f, var_0.x, global0.x) + vec3<f32>(var_0.x, -1219f, global0.x)), !arg_0))))))));
                return _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-194f * _wgslsmith_f_op_f32(min(var_0.x, 1597f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_0.x) + _wgslsmith_f_op_f32(-411f * var_0.x)))))));
            }
        }
        switch (_wgslsmith_div_i32(_wgslsmith_div_i32(1i, _wgslsmith_dot_vec2_i32(vec2<i32>(-30193i, max(17496i, 0i)), vec2<i32>(~0i, 0i))), 9976i)) {
            default: {
                var var_1 = _wgslsmith_f_op_f32(-216f + 2217f);
                let var_2 = countOneBits(~(-vec4<i32>(1i, 1i, 1i, 1i)));
            }
        }
    }
    return _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(_wgslsmith_div_f32(global0.x, var_0.x), _wgslsmith_f_op_f32(round(-349f)), true)) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(-784f))))));
}

fn func_5(arg_0: i32, arg_1: vec4<f32>, arg_2: vec4<bool>, arg_3: vec4<f32>) -> bool {
    global0 = _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(max(vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -1000f), _wgslsmith_f_op_f32(arg_3.x * arg_3.x), _wgslsmith_f_op_f32(global0.x + -1000f)), vec3<f32>(-1024f, _wgslsmith_f_op_f32(func_6(arg_2.zwx)), _wgslsmith_div_f32(global0.x, global0.x)))) + _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(step(arg_1.yzw, vec3<f32>(global0.x, -2469f, arg_1.x)))) + _wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(vec3<f32>(-556f, 460f, arg_1.x), vec3<f32>(-551f, arg_3.x, -1710f))))), _wgslsmith_f_op_vec3_f32(select(arg_3.zwx, arg_1.wwy, arg_2.xxw)));
    for (var var_0 = 0i; var_0 >= 1i; ) {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        for (var var_1 = i32(-2147483648); false; var_1 -= 1i) {
            if (LOOP_COUNTERS[5u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        }
        continue;
    }
    let var_0 = false;
    loop {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        switch (6323i | _wgslsmith_sub_i32(1i, arg_0)) {
            case -32169i: {
                break;
            }
            case -6526i: {
                let var_1 = ~_wgslsmith_clamp_vec3_i32(min(min(~vec3<i32>(-37446i, arg_0, 2147483647i), reverseBits(vec3<i32>(arg_0, arg_0, arg_0))), reverseBits(vec3<i32>(0i, -30015i, arg_0)) << (reverseBits(vec3<u32>(40460u, 4294967295u, u_input.a.x)) % vec3<u32>(32u))), vec3<i32>(0i, _wgslsmith_add_i32(_wgslsmith_dot_vec2_i32(vec2<i32>(arg_0, arg_0), vec2<i32>(arg_0, -1i)), -34919i), abs(arg_0) ^ 1i), ~(-(~vec3<i32>(arg_0, 23910i, -1i))));
                var var_2 = vec3<bool>(4294967295u < (1635u >> (_wgslsmith_clamp_u32(u_input.a.x, ~7233u, countOneBits(u_input.a.x)) % 32u)), arg_0 < 1i, all(arg_2.yyx) | ((_wgslsmith_f_op_f32(-arg_3.x) == _wgslsmith_f_op_f32(-687f * 380f)) && all(arg_2)));
                global0 = vec3<f32>(arg_1.x, -1663f, global0.x);
                continue;
            }
            default: {
                global0 = _wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(f32(-1f) * -1733f), _wgslsmith_f_op_f32(select(global0.x, -1000f, false)))) + global0.x), _wgslsmith_f_op_f32(arg_3.x - 815f), _wgslsmith_f_op_f32(ceil(arg_3.x))));
                var var_1 = min(abs(vec3<u32>(u_input.a.x, 30897u, _wgslsmith_div_u32(~u_input.a.x, ~u_input.a.x))), ~(~(vec3<u32>(u_input.b.x, u_input.a.x, u_input.a.x) | vec3<u32>(u_input.a.x, 4294967295u, u_input.a.x))) & vec3<u32>(firstLeadingBit(~u_input.b.x), 4294967295u, _wgslsmith_mod_u32(~u_input.a.x, ~4294967295u)));
            }
        }
        switch (42129i) {
            default: {
                break;
            }
        }
        break;
    }
    global0 = _wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(vec3<f32>(arg_3.x, 113f, 502f), arg_3.wzx) + arg_1.wyy);
    return false;
}

fn func_4(arg_0: Struct_1) -> vec4<bool> {
    global0 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(vec3<f32>(2743f, 1000f, -209f), vec3<f32>(1007f, -2142f, global0.x)))) - _wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(global0.x, -1500f, arg_0.e.x) + vec3<f32>(-235f, 733f, global0.x)) - vec3<f32>(-1000f, -1316f, global0.x))))));
    if (all(vec2<bool>(!any(vec4<bool>(false, false, false, false)) == func_5(arg_0.c, _wgslsmith_div_vec4_f32(vec4<f32>(-171f, arg_0.d, 1000f, global0.x), vec4<f32>(global0.x, 1464f, -1000f, -377f)), vec4<bool>(false, false, false, true), _wgslsmith_f_op_vec4_f32(vec4<f32>(-578f, -899f, arg_0.d, -1041f) * vec4<f32>(arg_0.b, 1701f, 203f, global0.x))), any(vec2<bool>(true, true))))) {
    }
    switch (reverseBits(arg_0.c)) {
        case -52419i: {
            let var_0 = arg_0;
            var var_1 = _wgslsmith_f_op_vec3_f32(exp2(vec3<f32>(571f, 1447f, global0.x)));
            global0 = _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(-vec3<f32>(115f, var_0.a, global0.x)))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(var_1.x, var_0.e.x, 586f) - vec3<f32>(-845f, var_1.x, 252f)) - _wgslsmith_f_op_vec3_f32(exp2(vec3<f32>(global0.x, var_1.x, -1855f))))), true)), _wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(-var_1.x), _wgslsmith_f_op_f32(-2200f + -2066f), -461f) * _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-825f, global0.x, 547f)) - vec3<f32>(var_1.x, global0.x, var_1.x))))), vec3<bool>(true, true, _wgslsmith_sub_i32(var_0.c ^ 69693i, _wgslsmith_mod_i32(6403i, var_0.c)) < arg_0.c)));
        }
        case -43073i: {
            var var_0 = arg_0;
            for (var var_1 = 40909i; ; var_1 -= 1i) {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                var_1 = _wgslsmith_mult_i32(_wgslsmith_sub_i32(var_0.c, var_0.c), arg_0.c);
                global0 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(vec3<f32>(arg_0.e.x, _wgslsmith_f_op_f32(-global0.x), _wgslsmith_f_op_f32(trunc(1335f))) + vec3<f32>(_wgslsmith_f_op_f32(-1000f), _wgslsmith_f_op_f32(-arg_0.b), -3529f)))));
                let var_2 = arg_0;
                var var_3 = arg_0;
            }
        }
        case 1i: {
            for (var var_0 = 83630i; var_0 <= i32(-2147483648); var_0 += 1i) {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
            }
            let var_0 = arg_0;
            let var_1 = vec2<f32>(-1000f, _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(f32(-1f) * -1287f))));
            if (all(!vec2<bool>(any(vec2<bool>(true, true)), true))) {
                var var_2 = reverseBits(~vec3<u32>(_wgslsmith_mod_u32(55408u, 4294967295u) & (u_input.b.x >> (0u % 32u)), min(u_input.b.x, _wgslsmith_dot_vec2_u32(u_input.a, vec2<u32>(2764u, 1u))), ~u_input.b.x));
                global0 = vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(-1136f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(297f - 675f)))), _wgslsmith_f_op_f32(abs(-634f)), -872f);
            }
        }
        default: {
            let var_0 = Struct_1(-619f, 1000f, -_wgslsmith_div_i32(firstTrailingBit(arg_0.c), arg_0.c), _wgslsmith_f_op_f32(func_6(vec3<bool>(any(vec4<bool>(true, true, true, true)), false, true))), global0.yy);
            if (true) {
            }
            for (var var_1 = 2147483647i; false; global0 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(-546f), _wgslsmith_f_op_f32(_wgslsmith_div_f32(953f, global0.x) * _wgslsmith_f_op_f32(-191f)), _wgslsmith_f_op_f32(min(1216f, var_0.d)))))) {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                break;
            }
            var var_1 = Struct_1(580f, 552f, arg_0.c, _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(sign(var_0.b)), _wgslsmith_f_op_f32(266f - 551f))))))), _wgslsmith_f_op_vec2_f32(-vec2<f32>(1000f, 1917f)));
            for (var var_2: i32; var_2 <= -45737i; var_2 += 1i) {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                global0 = vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -2206f), var_1.b, 725f);
                var var_3 = Struct_1(_wgslsmith_div_f32(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(arg_0.e.x))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(global0.x - _wgslsmith_f_op_f32(-754f + arg_0.a)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(f32(-1f) * -1000f)))))), arg_0.c, _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(abs(824f)))))), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(min(_wgslsmith_div_vec2_f32(arg_0.e, vec2<f32>(-971f, -702f)), _wgslsmith_f_op_vec2_f32(vec2<f32>(arg_0.a, -1458f) * var_1.e))))));
                var var_4 = u_input.a.x;
                let var_5 = select(vec2<bool>(!(_wgslsmith_f_op_f32(trunc(-586f)) > var_1.e.x), select(any(vec4<bool>(false, true, true, false)), true, true) && true), !select(vec2<bool>(true, true), vec2<bool>(all(vec3<bool>(false, true, false)), true), false), vec2<bool>(true, true));
                var_1 = Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(var_1.e.x))), _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-var_1.b))))), i32(-2147483648), var_0.d, _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(var_0.d, _wgslsmith_f_op_f32(-500f - global0.x))) - vec2<f32>(var_1.a, arg_0.a)));
            }
        }
    }
    let var_0 = Struct_1(arg_0.e.x, _wgslsmith_f_op_f32(global0.x + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -1383f) * -1680f) + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(global0.x)) - _wgslsmith_f_op_f32(-global0.x)))), -1i, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(1403f, global0.x))), _wgslsmith_f_op_vec2_f32(min(global0.zx, _wgslsmith_f_op_vec2_f32(vec2<f32>(-261f, _wgslsmith_f_op_f32(arg_0.e.x - -554f)) - _wgslsmith_f_op_vec2_f32(arg_0.e * _wgslsmith_f_op_vec2_f32(round(arg_0.e)))))));
    var var_1 = Struct_1(_wgslsmith_f_op_f32(min(362f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(244f - global0.x)))))), _wgslsmith_f_op_f32(-global0.x), -66640i, _wgslsmith_f_op_f32(-global0.x), _wgslsmith_f_op_vec2_f32(trunc(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(round(_wgslsmith_f_op_vec2_f32(exp2(arg_0.e))))))));
    return !select(!(!select(vec4<bool>(false, true, false, false), vec4<bool>(false, true, false, true), true)), select(select(select(vec4<bool>(false, true, false, false), vec4<bool>(false, false, true, true), vec4<bool>(false, true, true, false)), vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true)), vec4<bool>(true, true, true, true), select(select(vec4<bool>(true, false, false, true), vec4<bool>(false, false, false, false), vec4<bool>(false, false, true, true)), vec4<bool>(true, true, true, true), vec4<bool>(true, false, true, false))), true);
}

fn func_3(arg_0: Struct_1) -> f32 {
    let var_0 = all(select(select(vec2<bool>(true, true), vec2<bool>(false, false), any(select(vec2<bool>(false, false), vec2<bool>(true, true), false))), select(vec2<bool>(all(vec2<bool>(false, true)), arg_0.b <= arg_0.b), !select(vec2<bool>(false, false), vec2<bool>(false, false), vec2<bool>(true, false)), false & (i32(-2147483648) > arg_0.c)), vec2<bool>(all(func_4(arg_0)), func_5(_wgslsmith_clamp_i32(-1i, 7337i, -15336i), vec4<f32>(1538f, -738f, 1384f, 1469f), select(vec4<bool>(true, true, false, true), vec4<bool>(true, false, true, false), vec4<bool>(false, false, true, true)), _wgslsmith_f_op_vec4_f32(sign(vec4<f32>(arg_0.d, global0.x, -1000f, global0.x)))))));
    global0 = vec3<f32>(arg_0.e.x, global0.x, _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-arg_0.e.x))));
    var var_1 = arg_0;
    var var_2 = Struct_1(_wgslsmith_f_op_f32(-1478f * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(-761f, _wgslsmith_f_op_f32(var_1.d + -1000f))) + -956f)), 933f, var_1.c, -582f, _wgslsmith_f_op_vec2_f32(exp2(vec2<f32>(global0.x, arg_0.b))));
    if (!all(!(!(!vec3<bool>(var_0, var_0, var_0))))) {
        var var_3 = !select(select(select(vec4<bool>(false, false, true, var_0), !vec4<bool>(false, var_0, var_0, false), vec4<bool>(true, true, true, var_0)), vec4<bool>(any(vec2<bool>(var_0, var_0)), !var_0, true, func_4(arg_0).x), select(select(vec4<bool>(true, true, var_0, var_0), vec4<bool>(var_0, var_0, var_0, true), false), func_4(Struct_1(1103f, arg_0.e.x, var_1.c, global0.x, vec2<f32>(-1045f, arg_0.e.x))), func_4(arg_0))), vec4<bool>(any(!vec3<bool>(false, var_0, var_0)), true, !(u_input.a.x <= 21373u), -652f >= _wgslsmith_f_op_f32(trunc(var_1.b))), true);
        let var_4 = abs(select(vec4<i32>(i32(-2147483648), ~(-21197i), 1i, 0i), max(select(vec4<i32>(arg_0.c, -1i, 0i, var_1.c), vec4<i32>(16043i, var_1.c, 1i, var_1.c), true), vec4<i32>(2147483647i, 0i, -56301i, arg_0.c)), true) | vec4<i32>(~var_2.c, ~abs(1i), -_wgslsmith_dot_vec4_i32(vec4<i32>(-27396i, var_2.c, var_2.c, var_1.c), vec4<i32>(-5337i, -41333i, var_2.c, var_2.c)), -firstTrailingBit(var_1.c)));
        var_1 = arg_0;
        if (all(vec2<bool>(true, true))) {
            var_1 = Struct_1(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(var_2.b - 1000f), 316f)) - var_2.d))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(_wgslsmith_div_f32(global0.x, 370f), _wgslsmith_f_op_f32(-1479f + 527f), var_0))), _wgslsmith_f_op_f32(f32(-1f) * -112f)), -var_4.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1000f * -1262f)), _wgslsmith_f_op_vec2_f32(exp2(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-var_2.e)))));
            var var_5 = arg_0;
            let var_6 = !func_4(Struct_1(749f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0.d)), abs(var_1.c) << (1u % 32u), var_2.a, arg_0.e));
            var_1 = arg_0;
        }
        if (false) {
            var_2 = arg_0;
        }
    }
    return _wgslsmith_f_op_f32(-1118f);
}

fn func_2(arg_0: vec2<u32>, arg_1: vec4<u32>) -> f32 {
    var var_0 = abs(~(~22767i));
    let var_1 = Struct_1(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(1f)) + 562f) + -531f), global0.x, _wgslsmith_div_i32(~21206i, ~(i32(-2147483648))), _wgslsmith_f_op_f32(func_3(Struct_1(_wgslsmith_f_op_f32(-452f * global0.x), _wgslsmith_f_op_f32(-760f), 1i, global0.x, global0.zz))), global0.xz);
    let var_2 = i32(-1i) * -1i;
    switch (1i) {
        case 40976i: {
            global0 = _wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(542f, global0.x, 1173f) + vec3<f32>(463f, 946f, -191f)) * _wgslsmith_f_op_vec3_f32(floor(vec3<f32>(-1804f, -142f, global0.x)))) - _wgslsmith_f_op_vec3_f32(vec3<f32>(-1623f, -481f, global0.x) + _wgslsmith_f_op_vec3_f32(vec3<f32>(-1000f, global0.x, 859f) + vec3<f32>(global0.x, 920f, global0.x)))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(var_1.b, var_1.d, 1944f))))))))));
        }
        case -13847i: {
            let var_3 = var_1.d;
        }
        default: {
            global0 = _wgslsmith_f_op_vec3_f32(min(vec3<f32>(global0.x, -257f, _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(min(global0.x, _wgslsmith_f_op_f32(-188f)))))), _wgslsmith_f_op_vec3_f32(vec3<f32>(-1459f, global0.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(1440f, global0.x)))) * vec3<f32>(-1000f, _wgslsmith_div_f32(_wgslsmith_f_op_f32(564f + global0.x), _wgslsmith_f_op_f32(func_3(var_1))), -1943f))));
            var var_3 = Struct_1(_wgslsmith_f_op_f32(step(global0.x, _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(round(-604f)))), 120f)))), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(var_1.e.x, 894f, true))) + _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-var_1.b), _wgslsmith_f_op_f32(select(global0.x, var_1.b, false))))))), -52236i, _wgslsmith_f_op_f32(global0.x + _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-443f + -924f), _wgslsmith_f_op_f32(-var_1.e.x)))))), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(min(global0.yx, _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(select(var_1.e, var_1.e, vec2<bool>(false, false))))))));
            if (select(false, true, true)) {
                var var_4 = Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(global0.x, var_3.a, false))) + var_1.a)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(798f + _wgslsmith_div_f32(var_3.a, -1000f)) * _wgslsmith_f_op_f32(trunc(-1000f))), 66957i | -(~var_2 << (1271u % 32u)), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1000f - global0.x) + _wgslsmith_f_op_f32(-var_1.e.x))), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(max(201f, var_1.b)))))))), _wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(var_3.a, var_1.a))));
                var var_5 = Struct_1(var_4.d, global0.x, var_2, 2209f, vec2<f32>(_wgslsmith_f_op_f32(trunc(-291f)), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_3(var_1))), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(f32(-1f) * -841f)))))));
                let var_6 = Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1285f + _wgslsmith_f_op_f32(ceil(_wgslsmith_div_f32(586f, var_4.a))))), 143f, -53381i, _wgslsmith_f_op_f32(func_3(var_1)), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(var_3.e - _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(max(var_3.e, var_4.e)) - var_1.e))));
            }
        }
    }
    for (var var_3 = -1i; var_3 != 2147483647i; ) {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        break;
    }
    return _wgslsmith_f_op_f32(exp2(_wgslsmith_div_f32(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(-287f)) - _wgslsmith_f_op_f32(-1000f)))), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(917f, 1000f))))))));
}

fn func_1(arg_0: bool) -> u32 {
    global0 = _wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(exp2(vec3<f32>(765f, global0.x, -909f))) - _wgslsmith_f_op_vec3_f32(-vec3<f32>(global0.x, global0.x, -495f))))) - vec3<f32>(global0.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-731f) - _wgslsmith_f_op_f32(func_2(u_input.a, vec4<u32>(44872u, 34934u, u_input.a.x, 1u)))), 305f))));
    loop {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        break;
    }
    var var_0 = Struct_1(_wgslsmith_f_op_f32(trunc(global0.x)), 1811f, 1i, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(_wgslsmith_div_f32(-436f, -1683f)))) + global0.x), global0.xz);
    var var_1 = Struct_1(_wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_div_f32(global0.x, -805f) + _wgslsmith_div_f32(-150f, var_0.b)), _wgslsmith_f_op_f32(max(var_0.d, -251f))) * global0.x), _wgslsmith_f_op_f32(f32(-1f) * -1083f), min(i32(-1i) * -42621i, var_0.c), _wgslsmith_f_op_f32(-433f + _wgslsmith_f_op_f32(func_3(Struct_1(_wgslsmith_f_op_f32(func_6(vec3<bool>(false, arg_0, arg_0))), 1768f, var_0.c, _wgslsmith_div_f32(var_0.d, global0.x), vec2<f32>(-532f, -748f))))), _wgslsmith_f_op_vec2_f32(exp2(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-var_0.e))))));
    if (all(vec4<bool>(false, false, !(func_5(var_0.c, vec4<f32>(var_0.b, -523f, var_1.e.x, var_1.a), vec4<bool>(arg_0, arg_0, false, false), vec4<f32>(global0.x, var_0.d, 334f, -1326f)) & true), any(vec3<bool>(false, arg_0, any(vec4<bool>(arg_0, false, false, false))))))) {
        var var_2 = _wgslsmith_div_vec2_u32(~vec2<u32>(select(~1u, 148907u, any(vec3<bool>(false, arg_0, true))), ~(0u >> (0u % 32u))), vec2<u32>(_wgslsmith_dot_vec2_u32(u_input.a, u_input.b), reverseBits(~u_input.b.x << (~57650u % 32u))));
        loop {
            if (LOOP_COUNTERS[13u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
            let var_3 = Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_2(u_input.b | ~u_input.a, _wgslsmith_sub_vec4_u32(vec4<u32>(10974u, var_2.x, u_input.b.x, 13637u) << (vec4<u32>(61247u, var_2.x, u_input.b.x, 1297u) % vec4<u32>(32u)), vec4<u32>(1u, u_input.b.x, u_input.b.x, u_input.b.x))))), _wgslsmith_f_op_f32(func_2(~u_input.a, vec4<u32>(var_2.x, _wgslsmith_dot_vec4_u32(vec4<u32>(u_input.a.x, 45714u, u_input.a.x, 0u), vec4<u32>(16144u, u_input.a.x, u_input.b.x, 1u)), _wgslsmith_mod_u32(41325u, var_2.x), u_input.b.x) & vec4<u32>(var_2.x, var_2.x, 1u, countOneBits(0u)))), 3069i, _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(var_1.d))), var_0.a)), _wgslsmith_f_op_vec2_f32(var_1.e + _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-global0.zz))));
        }
        return u_input.a.x;
    }
    return u_input.b.x ^ 43334u;
}

@compute
@workgroup_size(1)
fn main() {
    var var_0 = vec4<bool>(any(!vec3<bool>(true, select(true, true, false), any(vec3<bool>(false, false, false)))), !any(select(vec2<bool>(true, true), select(vec2<bool>(false, true), vec2<bool>(false, false), vec2<bool>(true, false)), true)), true | all(select(vec2<bool>(true, true), vec2<bool>(false, true), vec2<bool>(true, true))), true);
    loop {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        break;
    }
    let var_1 = ~u_input.a;
    global0 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-421f, 1000f, global0.x)) - _wgslsmith_f_op_vec3_f32(-vec3<f32>(413f, -773f, -1192f)))) * vec3<f32>(-757f, -2058f, global0.x)));
    let var_2 = 2147483647i;
    global0 = _wgslsmith_f_op_vec3_f32(abs(vec3<f32>(-292f, 1180f, 1f)));
    let var_3 = max(vec2<u32>(1u, 1u) >> ((~select(vec2<u32>(u_input.a.x, u_input.a.x), vec2<u32>(u_input.a.x, u_input.a.x), var_0.xy) | countOneBits(vec2<u32>(u_input.b.x, 37987u) << (vec2<u32>(var_1.x, 76618u) % vec2<u32>(32u)))) % vec2<u32>(32u)), vec2<u32>(func_1(var_0.x) << (9606u % 32u), func_1(global0.x > _wgslsmith_f_op_f32(func_2(var_1, vec4<u32>(45942u, 8346u, u_input.a.x, var_1.x))))));
    let x = u_input.a;
    s_output = StorageBuffer(-_wgslsmith_sub_i32(-1i, max(_wgslsmith_sub_i32(0i, var_2), abs(2147483647i))));
}

`;