export const input = [202,51,197,212,89,213,34,213,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [202,51,197,212,89,213,34,213,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[202,51,197,212,89,213,34,213]}
// Seed: 11772933832664795306

struct Struct_1 {
    a: vec2<u32>,
    b: f32,
    c: bool,
}

struct Struct_2 {
    a: vec4<i32>,
}

struct UniformBuffer {
    a: u32,
    b: i32,
}

struct StorageBuffer {
    a: u32,
    b: vec4<f32>,
    c: i32,
    d: f32,
    e: i32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: f32 = 964f;

var<private> LOOP_COUNTERS: array<u32, 14>;

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn func_2(arg_0: bool) -> f32 {
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        if (true) {
        }
    }
    switch (max(i32(-1i) * -61147i, ~(-62109i))) {
        default: {
            global0 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_div_f32(-960f, -359f)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-379f))) * _wgslsmith_f_op_f32(-168f)));
            let var_0 = Struct_2(vec4<i32>(select(_wgslsmith_clamp_i32(1i, firstLeadingBit(u_input.b), _wgslsmith_div_i32(u_input.b, 37401i)), u_input.b, arg_0), min(u_input.b, u_input.b), 1152i, ~u_input.b));
            global0 = 1693f;
            global0 = 747f;
        }
    }
    global0 = -1571f;
    var var_0 = Struct_1(vec2<u32>(u_input.a, 14439u), _wgslsmith_div_f32(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(f32(-1f) * -112f))), 968f), true);
    let var_1 = true;
    return var_0.b;
}

fn func_5() -> Struct_2 {
    global0 = 368f;
    loop {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        continue;
    }
    var var_0 = true;
    global0 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(-1696f)) * 816f) * _wgslsmith_f_op_f32(-1475f));
    let var_1 = Struct_1(reverseBits(~vec2<u32>(4294967295u, 1u) >> (~vec2<u32>(u_input.a, u_input.a) % vec2<u32>(32u))), 1f, true);
    return Struct_2(countOneBits(reverseBits(~vec4<i32>(1i, u_input.b, i32(-2147483648), u_input.b))));
}

fn func_6(arg_0: i32, arg_1: u32, arg_2: f32, arg_3: Struct_2) -> u32 {
    let var_0 = u_input.a;
    var var_1 = all(!(!select(select(vec4<bool>(false, true, false, true), vec4<bool>(true, false, false, false), true), vec4<bool>(true, true, true, false), false)));
    var var_2 = _wgslsmith_f_op_vec4_f32(vec4<f32>(604f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_2(false))), 298f, arg_2) - _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(min(vec4<f32>(arg_2, -821f, arg_2, 1000f), _wgslsmith_f_op_vec4_f32(vec4<f32>(arg_2, 1542f, 538f, arg_2) + vec4<f32>(arg_2, 668f, -2086f, arg_2)))))));
    let var_3 = ~(~(~vec3<u32>(var_0, arg_1, u_input.a) & _wgslsmith_sub_vec3_u32(vec3<u32>(50760u, arg_1, 0u) << (vec3<u32>(27878u, 49339u, arg_1) % vec3<u32>(32u)), reverseBits(vec3<u32>(arg_1, 4294967295u, 53501u)))));
    let var_4 = vec3<u32>(4294967295u << (var_0 % 32u), _wgslsmith_mod_u32(var_0, 22113u | max(var_3.x, _wgslsmith_mult_u32(var_3.x, u_input.a))), ~_wgslsmith_div_u32(44908u, _wgslsmith_dot_vec4_u32(vec4<u32>(5210u, var_0, u_input.a, u_input.a), vec4<u32>(var_3.x, 1u, 50651u, arg_1))));
    return u_input.a;
}

fn func_4(arg_0: vec3<bool>, arg_1: u32, arg_2: Struct_1) -> vec2<u32> {
    for (; !select(!(arg_2.c && any(arg_0)), any(arg_0.yx) & arg_0.x, select(any(select(vec3<bool>(false, arg_2.c, true), arg_0, false)), true, all(!arg_0))); ) {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        let var_0 = _wgslsmith_clamp_vec2_u32(arg_2.a, _wgslsmith_div_vec2_u32(vec2<u32>(53035u | arg_1, 41447u), firstLeadingBit(vec2<u32>(u_input.a, arg_1))), ~(arg_2.a | min(vec2<u32>(4294967295u, 1047u), vec2<u32>(arg_1, 0u)))) ^ vec2<u32>(func_6(~u_input.b, _wgslsmith_dot_vec2_u32(~vec2<u32>(arg_2.a.x, arg_1), ~vec2<u32>(arg_1, u_input.a)), 676f, func_5()), arg_2.a.x);
        loop {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            var var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_2.b)) + 407f)));
            var var_2 = arg_0.zy;
            global0 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(_wgslsmith_div_f32(-875f, arg_2.b) - _wgslsmith_f_op_f32(round(arg_2.b))), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(ceil(arg_2.b)), _wgslsmith_f_op_f32(ceil(arg_2.b)))))))) * -859f);
            break;
        }
        global0 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(exp2(arg_2.b)) * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_2.b) * _wgslsmith_f_op_f32(arg_2.b * arg_2.b)))) * arg_2.b);
        for (var var_1: i32; (all(arg_0) || true) && !(!arg_0.x); global0 = _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(floor(arg_2.b)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_2.b * 1424f) * _wgslsmith_f_op_f32(max(143f, -1037f)))))), _wgslsmith_f_op_f32(_wgslsmith_div_f32(arg_2.b, 521f) - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-932f - _wgslsmith_f_op_f32(select(arg_2.b, 261f, false))) - _wgslsmith_div_f32(_wgslsmith_f_op_f32(arg_2.b + arg_2.b), _wgslsmith_f_op_f32(sign(arg_2.b)))))))) {
            if (LOOP_COUNTERS[4u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
            break;
        }
        loop {
            if (LOOP_COUNTERS[5u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        }
    }
    global0 = arg_2.b;
    switch (reverseBits(min(u_input.b, u_input.b))) {
        case 1i: {
            global0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_2(arg_0.x)));
            let var_0 = func_5();
            for (; ; ) {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                let var_1 = _wgslsmith_mod_i32(var_0.a.x, -57899i);
                global0 = 708f;
            }
        }
        default: {
            global0 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(-1000f - _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(f32(-1f) * -1348f)))))), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(exp2(arg_2.b)))));
            switch (i32(-2147483648)) {
                default: {
                    global0 = _wgslsmith_f_op_f32(select(_wgslsmith_div_f32(1000f, 263f), arg_2.b, 4688u < ~arg_2.a.x));
                    global0 = arg_2.b;
                    let var_0 = ~vec4<i32>(~_wgslsmith_mult_i32(u_input.b, firstTrailingBit(u_input.b)), -1i, -82477i, firstTrailingBit(-5396i));
                    global0 = _wgslsmith_f_op_f32(886f - _wgslsmith_f_op_f32(min(arg_2.b, _wgslsmith_f_op_f32(-arg_2.b))));
                }
            }
        }
    }
    let var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_2(arg_0.x)));
    var var_1 = -(~min(-vec4<i32>(2147483647i, u_input.b, 1i, 28579i), ~vec4<i32>(u_input.b, i32(-2147483648), 27098i, u_input.b)) ^ reverseBits(vec4<i32>(-19289i, -18415i, u_input.b & i32(-2147483648), abs(u_input.b))));
    return arg_2.a;
}

fn func_7(arg_0: Struct_1, arg_1: vec4<u32>, arg_2: vec4<bool>) -> u32 {
    var var_0 = arg_1.x;
    var_0 = 1u;
    var_0 = u_input.a;
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        switch (u_input.b) {
            case -1i: {
            }
            default: {
                var var_1 = Struct_2(select(_wgslsmith_mod_vec4_i32(_wgslsmith_add_vec4_i32(_wgslsmith_div_vec4_i32(vec4<i32>(u_input.b, u_input.b, u_input.b, -1i), vec4<i32>(2147483647i, u_input.b, u_input.b, -60836i)), _wgslsmith_add_vec4_i32(vec4<i32>(u_input.b, 1i, 2147483647i, u_input.b), vec4<i32>(u_input.b, 34610i, u_input.b, u_input.b))), _wgslsmith_clamp_vec4_i32(_wgslsmith_clamp_vec4_i32(vec4<i32>(u_input.b, u_input.b, u_input.b, 24757i), vec4<i32>(u_input.b, -10175i, u_input.b, 1i), vec4<i32>(9170i, 1i, u_input.b, 1i)), vec4<i32>(613i, u_input.b, u_input.b, u_input.b) & vec4<i32>(-25465i, u_input.b, 20428i, -1i), -vec4<i32>(u_input.b, -1i, -56692i, 27145i))), firstLeadingBit(vec4<i32>(u_input.b, u_input.b, u_input.b, u_input.b) | vec4<i32>(u_input.b, -1i, -15505i, -12858i)), vec4<bool>(true, all(select(arg_2.yz, vec2<bool>(arg_2.x, arg_0.c), vec2<bool>(true, false))), arg_1.x >= _wgslsmith_sub_u32(u_input.a, u_input.a), true)));
                break;
            }
        }
        var_0 = ~6531u;
        let var_1 = Struct_2(-_wgslsmith_mod_vec4_i32(vec4<i32>(u_input.b, u_input.b, i32(-2147483648), 46701i) >> (vec4<u32>(24797u, arg_0.a.x, 4294967295u, 17914u) % vec4<u32>(32u)), vec4<i32>(14207i, 2147483647i, u_input.b, u_input.b)) << (vec4<u32>(~_wgslsmith_dot_vec2_u32(arg_0.a, vec2<u32>(105091u, u_input.a)), u_input.a, reverseBits(~u_input.a), 33128u) % vec4<u32>(32u)));
    }
    if (arg_0.c) {
        if (-1502f < arg_0.b) {
        }
    }
    return _wgslsmith_div_u32(arg_1.x, 34090u);
}

fn func_3(arg_0: Struct_2) -> f32 {
    var var_0 = arg_0;
    switch (u_input.b) {
        case 2147483647i: {
            let var_1 = arg_0;
            let var_2 = vec3<u32>(min(max(u_input.a, select(12066u, u_input.a, true)), ~select(~u_input.a, 25533u | u_input.a, true)), _wgslsmith_clamp_u32(func_7(Struct_1(func_4(vec3<bool>(true, true, false), 1u, Struct_1(vec2<u32>(u_input.a, u_input.a), 1702f, false)), _wgslsmith_f_op_f32(-548f), true), _wgslsmith_div_vec4_u32(~vec4<u32>(u_input.a, 78211u, u_input.a, u_input.a), ~vec4<u32>(u_input.a, u_input.a, u_input.a, u_input.a)), vec4<bool>(2924u == u_input.a, true, true, true)), ~u_input.a, u_input.a), ~_wgslsmith_dot_vec3_u32(_wgslsmith_sub_vec3_u32(firstTrailingBit(vec3<u32>(u_input.a, 1u, 4294967295u)), max(vec3<u32>(u_input.a, u_input.a, 1u), vec3<u32>(u_input.a, u_input.a, u_input.a))), ~vec3<u32>(u_input.a, 9815u, u_input.a) << (countOneBits(vec3<u32>(0u, u_input.a, u_input.a)) % vec3<u32>(32u))));
            if (true) {
                return _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(981f * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(1528f)) * -705f)))));
            }
            if (!(-1i != _wgslsmith_div_i32(select(-1i, -22465i ^ var_0.a.x, true), _wgslsmith_dot_vec3_i32(-vec3<i32>(0i, var_0.a.x, -1i), vec3<i32>(2147483647i, var_1.a.x, 1i))))) {
                let var_3 = Struct_1(vec2<u32>(~u_input.a, _wgslsmith_div_u32(abs(4294967295u), ~1u)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(_wgslsmith_div_f32(-1117f, 558f), _wgslsmith_f_op_f32(-1942f)))) + _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(-1366f)))))), all(vec4<bool>(!(var_2.x >= u_input.a), all(vec4<bool>(true, true, true, true)), any(vec4<bool>(false, false, true, true)), true)));
                var var_4 = func_5();
                let var_5 = firstLeadingBit(countOneBits(var_3.a));
            }
            for (var var_3 = -14795i; var_3 >= -12829i; var_3 = arg_0.a.x) {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                break;
            }
        }
        default: {
            if (false) {
            }
            var var_1 = vec4<u32>(3511u, _wgslsmith_dot_vec4_u32(countOneBits(~abs(vec4<u32>(1u, 3575u, 79941u, 0u))), vec4<u32>(u_input.a, _wgslsmith_add_u32(abs(u_input.a), u_input.a), 1548u, 1589u ^ _wgslsmith_sub_u32(u_input.a, u_input.a))), ~_wgslsmith_add_u32(u_input.a, func_6(~41572i, u_input.a, _wgslsmith_f_op_f32(801f + -221f), arg_0)), ~_wgslsmith_clamp_u32(~77997u, 18135u, u_input.a));
        }
    }
    for (var var_1 = 39777i; var_1 > 2147483647i; var_1 -= 1i) {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        continue;
    }
    let var_1 = Struct_1(firstLeadingBit(vec2<u32>(countOneBits(u_input.a ^ 38544u), u_input.a)), -1071f, _wgslsmith_dot_vec3_u32((vec3<u32>(0u, u_input.a, u_input.a) << (vec3<u32>(79373u, 39182u, u_input.a) % vec3<u32>(32u))) & vec3<u32>(u_input.a, 9872u, 1u), firstTrailingBit(vec3<u32>(u_input.a, 1u, u_input.a)) & reverseBits(vec3<u32>(u_input.a, 0u, u_input.a))) < u_input.a);
    var_0 = func_5();
    return _wgslsmith_f_op_f32(sign(-537f));
}

fn func_1(arg_0: bool) -> f32 {
    global0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -1791f) - _wgslsmith_div_f32(-1824f, _wgslsmith_f_op_f32(-224f))) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_div_f32(-1675f, -1586f)))));
    switch (2147483647i) {
        case 1i: {
        }
        case 0i: {
            let var_0 = vec3<i32>(u_input.b, ~18632i, 404i);
            let var_1 = -1053f;
            var var_2 = -1284f;
        }
        case i32(-2147483648): {
            global0 = _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(-1808f, 1029f)))) + _wgslsmith_f_op_f32(func_2(true))), 2022f, !arg_0));
            global0 = -1231f;
            for (var var_0 = -72054i; ; var_0 += 1i) {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                global0 = _wgslsmith_f_op_f32(func_3(Struct_2(~vec4<i32>(min(u_input.b, 11310i), _wgslsmith_dot_vec4_i32(vec4<i32>(-1156i, 28393i, 68449i, u_input.b), vec4<i32>(-1i, u_input.b, 18805i, u_input.b)), u_input.b >> (u_input.a % 32u), 0i))));
                var var_1 = func_5().a ^ max(func_5().a, firstLeadingBit(vec4<i32>(i32(-2147483648), u_input.b, _wgslsmith_clamp_i32(u_input.b, u_input.b, -1i), u_input.b)));
                break;
            }
        }
        default: {
        }
    }
    global0 = _wgslsmith_f_op_f32(-1334f);
    let var_0 = Struct_1(_wgslsmith_sub_vec2_u32(select(~vec2<u32>(102819u, 14502u), min(vec2<u32>(u_input.a, 19640u), vec2<u32>(17995u, u_input.a)), false), ~vec2<u32>(4294967295u, u_input.a)) ^ select(vec2<u32>(9138u, u_input.a) & (vec2<u32>(4294967295u, u_input.a) | vec2<u32>(17775u, 34664u)), ~vec2<u32>(0u, u_input.a), select(!vec2<bool>(arg_0, false), vec2<bool>(true, false), select(vec2<bool>(arg_0, arg_0), vec2<bool>(true, false), vec2<bool>(true, false)))), 2164f, !(u_input.b == -u_input.b));
    loop {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        global0 = _wgslsmith_f_op_f32(func_3(Struct_2(vec4<i32>(u_input.b, u_input.b, _wgslsmith_add_i32(18611i ^ u_input.b, _wgslsmith_add_i32(u_input.b, u_input.b)), func_5().a.x))));
        return var_0.b;
    }
    return _wgslsmith_f_op_f32(func_3(Struct_2(vec4<i32>(select(u_input.b, 1i, arg_0 && false), _wgslsmith_add_i32(1i, u_input.b), 1i, ~(-1i) | _wgslsmith_dot_vec2_i32(vec2<i32>(u_input.b, u_input.b), vec2<i32>(-28479i, 1i))))));
}

@compute
@workgroup_size(1)
fn main() {
    global0 = _wgslsmith_div_f32(2208f, -1041f);
    global0 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(f32(-1f) * -2117f)))) * 848f), _wgslsmith_f_op_f32(f32(-1f) * -671f));
    for (; ; ) {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        loop {
            if (LOOP_COUNTERS[13u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
            global0 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_1(false))) * _wgslsmith_f_op_f32(-1f)) - _wgslsmith_div_f32(489f, -406f));
            var var_0 = true;
            let var_1 = select(vec3<bool>(true, true, true), select(vec3<bool>(true, all(vec3<bool>(false, true, false)) & true, true), vec3<bool>(true, true, _wgslsmith_f_op_f32(func_2(false)) <= 792f), all(vec2<bool>(true, true))), !vec3<bool>(false, false, all(vec2<bool>(true, true))));
            var var_2 = -1698f;
            var var_3 = min(_wgslsmith_add_u32(_wgslsmith_mult_u32(_wgslsmith_clamp_u32(u_input.a, u_input.a, u_input.a), u_input.a << (18706u % 32u)) << (_wgslsmith_dot_vec3_u32(vec3<u32>(u_input.a, 0u, 45102u) ^ vec3<u32>(u_input.a, 1u, 42375u), ~vec3<u32>(u_input.a, 0u, 38353u)) % 32u), abs(func_7(Struct_1(vec2<u32>(38364u, u_input.a), 263f, true), ~vec4<u32>(u_input.a, 44381u, 34787u, 34421u), select(vec4<bool>(false, var_1.x, true, false), vec4<bool>(true, false, false, false), vec4<bool>(var_1.x, var_1.x, true, false))))), abs(u_input.a));
        }
    }
    var var_0 = ~vec3<u32>(u_input.a, ~12865u, ~u_input.a) & _wgslsmith_clamp_vec3_u32(abs(~firstTrailingBit(vec3<u32>(1997u, 1u, u_input.a))), vec3<u32>(u_input.a, u_input.a, 0u), abs(vec3<u32>(6443u, ~u_input.a, func_4(vec3<bool>(false, true, true), u_input.a, Struct_1(vec2<u32>(u_input.a, 74799u), -1526f, false)).x)));
    if (true) {
        return;
    }
    let x = u_input.a;
    s_output = StorageBuffer(func_6(u_input.b, func_6(abs(u_input.b), u_input.a, _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(max(-1181f, 147f)))), func_5()), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(ceil(1447f)), _wgslsmith_div_f32(329f, -978f), true))), func_5()), vec4<f32>(491f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(step(-1100f, -522f)), _wgslsmith_div_f32(1951f, 1000f), true)) + _wgslsmith_f_op_f32(_wgslsmith_div_f32(-1000f, 1000f) - _wgslsmith_div_f32(2483f, -1000f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(182f - 600f)) + _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(trunc(-668f))))), _wgslsmith_f_op_f32(ceil(2309f))), ~_wgslsmith_div_i32(~countOneBits(u_input.b), _wgslsmith_add_i32(~66069i, u_input.b)), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(f32(-1f) * -2080f)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-221f + 1327f)) * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(1040f, -867f, false))))), u_input.b);
}

`;