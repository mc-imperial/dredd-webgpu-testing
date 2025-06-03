export const input = [234,161,197,149,72,32,53,202,144,76,221,45,125,149,25,64,11,103,19,77,250,213,156,211,203,245,249,132,244,89,207,177,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [234,161,197,149,72,32,53,202,144,76,221,45,125,149,25,64,11,103,19,77,250,213,156,211,203,245,249,132,244,89,207,177,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[234,161,197,149,72,32,53,202,144,76,221,45,125,149,25,64,11,103,19,77,250,213,156,211,203,245,249,132,244,89,207,177]}
// Seed: 3994646278645796784

struct Struct_1 {
    a: u32,
    b: vec4<bool>,
}

struct Struct_2 {
    a: f32,
    b: vec3<f32>,
    c: i32,
}

struct UniformBuffer {
    a: u32,
    b: vec2<i32>,
    c: vec2<u32>,
    d: u32,
    e: u32,
}

struct StorageBuffer {
    a: i32,
    b: vec2<f32>,
    c: vec2<f32>,
    d: f32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<Struct_1, 11>;

var<private> global1: array<u32, 20>;

var<private> LOOP_COUNTERS: array<u32, 12>;

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn func_1(arg_0: Struct_2, arg_1: Struct_1) -> vec3<f32> {
    return _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(vec3<f32>(arg_0.b.x, arg_0.a, 141f), _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-arg_0.b), _wgslsmith_f_op_vec3_f32(arg_0.b - vec3<f32>(arg_0.b.x, arg_0.b.x, -2071f))))) * vec3<f32>(arg_0.a, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_0.a + arg_0.a)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_0.b.x * 807f)))));
}

fn func_3() -> u32 {
    var var_0 = _wgslsmith_f_op_f32(sign(-510f));
    let var_1 = vec2<bool>(any(!vec2<bool>(all(vec4<bool>(false, false, true, false)), true)), false);
    global0 = array<Struct_1, 11>();
    global1 = array<u32, 20>();
    for (var var_2 = -1i; ; var_0 = -265f) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        var_0 = -1029f;
        continue;
    }
    return ~(~4294967295u);
}

fn func_6(arg_0: Struct_2, arg_1: vec4<u32>, arg_2: bool) -> u32 {
    if (arg_2) {
        let var_0 = 49834u;
        var var_1 = ~func_3() > ~global1[_wgslsmith_index_u32(14763u, 20u)];
    }
    var var_0 = (func_3() < (~arg_1.x >> (global1[_wgslsmith_index_u32(_wgslsmith_sub_u32(1u, ~global1[_wgslsmith_index_u32(0u, 20u)]), 20u)] % 32u))) | !arg_2;
    var var_1 = global0[_wgslsmith_index_u32(~(~_wgslsmith_dot_vec3_u32(abs(~vec3<u32>(0u, arg_1.x, u_input.a)), _wgslsmith_add_vec3_u32(arg_1.xwz, ~arg_1.xxx))), 11u)];
    var var_2 = global0[_wgslsmith_index_u32(var_1.a, 11u)];
    let var_3 = 42616i;
    return ~firstTrailingBit(firstLeadingBit(_wgslsmith_clamp_u32(0u, select(1u, arg_1.x, var_1.b.x), var_1.a)));
}

fn func_5(arg_0: vec3<u32>, arg_1: vec4<f32>, arg_2: Struct_2) -> Struct_1 {
    let var_0 = !vec2<bool>(true, ((arg_0.x == arg_0.x) == true) || true);
    loop {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
    }
    loop {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        for (; ; ) {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            global1 = array<u32, 20>();
            let var_1 = global0[_wgslsmith_index_u32(_wgslsmith_dot_vec4_u32(vec4<u32>(_wgslsmith_dot_vec2_u32(u_input.c, ~(~vec2<u32>(u_input.d, arg_0.x))), func_3(), 0u, ~(~(~arg_0.x))), ~firstTrailingBit(vec4<u32>(12493u, 156u, global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(arg_0.x, 20u)] | u_input.e, 20u)], u_input.e << (arg_0.x % 32u)))), 11u)];
            continue;
        }
        global1 = array<u32, 20>();
        let var_1 = 1i;
        var var_2 = firstLeadingBit(countOneBits(~1u));
        for (; ; ) {
            if (LOOP_COUNTERS[4u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        }
    }
    var var_1 = ~max(vec4<u32>(_wgslsmith_dot_vec2_u32(_wgslsmith_mult_vec2_u32(u_input.c, arg_0.yx), _wgslsmith_div_vec2_u32(u_input.c, vec2<u32>(u_input.a, global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(4294967295u, 20u)], 20u)]))), _wgslsmith_add_u32(~arg_0.x, func_6(arg_2, vec4<u32>(0u, arg_0.x, arg_0.x, 1u), var_0.x)), global1[_wgslsmith_index_u32(_wgslsmith_sub_u32(13635u, u_input.c.x) << ((global1[_wgslsmith_index_u32(78487u, 20u)] << (4294967295u % 32u)) % 32u), 20u)], ~countOneBits(36989u)), vec4<u32>(arg_0.x, 1u << ((36965u << (u_input.e % 32u)) % 32u), global1[_wgslsmith_index_u32(1u, 20u)], ~(u_input.c.x | 69713u)));
    for (var var_2 = 2147483647i; ; ) {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        switch (_wgslsmith_mult_i32(-u_input.b.x, abs(abs(~(-arg_2.c))))) {
            case -1i: {
                var var_3 = arg_2.b.xy;
                var var_4 = Struct_1(~_wgslsmith_div_u32(72666u, arg_0.x), select(select(!select(vec4<bool>(var_0.x, true, var_0.x, false), vec4<bool>(false, true, true, var_0.x), false), select(vec4<bool>(true, var_0.x, var_0.x, false), vec4<bool>(false, false, var_0.x, true), var_0.x & true), vec4<bool>(all(vec3<bool>(var_0.x, var_0.x, var_0.x)), true, var_0.x, var_0.x)), vec4<bool>(any(vec2<bool>(true, true)), !var_0.x, var_0.x, false), _wgslsmith_dot_vec3_u32(vec3<u32>(arg_0.x, 0u, global1[_wgslsmith_index_u32(42595u, 20u)]), min(vec3<u32>(u_input.e, global1[_wgslsmith_index_u32(4717u, 20u)], 4599u), var_1.zzx)) < func_3()));
                var var_5 = arg_0;
                var var_6 = vec4<bool>(!(var_1.x != _wgslsmith_sub_u32(reverseBits(1u), var_1.x)), !(!(!(!var_4.b.x))), true, var_0.x);
                let var_7 = Struct_2(arg_2.b.x, vec3<f32>(_wgslsmith_div_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(round(1000f)), var_3.x), _wgslsmith_f_op_f32(trunc(var_3.x))), _wgslsmith_f_op_vec3_f32(func_1(Struct_2(_wgslsmith_f_op_f32(abs(-126f)), arg_1.zxz, i32(-2147483648) << (arg_0.x % 32u)), Struct_1(4294967295u, var_4.b))).x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-var_3.x))) * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(-546f)) - _wgslsmith_f_op_f32(f32(-1f) * -693f)))), 17035i);
            }
            case 32638i: {
                global0 = array<Struct_1, 11>();
                continue;
            }
            case -36770i: {
                var var_3 = 63921u;
                var var_4 = Struct_2(_wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_2.a - -577f) - _wgslsmith_f_op_f32(step(arg_2.b.x, -757f))) - arg_2.b.x), _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(arg_1.x, arg_1.x, var_0.x)))))), _wgslsmith_f_op_vec3_f32(arg_1.zxz * arg_1.www), -17728i);
                global0 = array<Struct_1, 11>();
            }
            case 0i: {
                let var_3 = Struct_1(~var_1.x, !select(select(select(vec4<bool>(true, var_0.x, false, var_0.x), vec4<bool>(true, var_0.x, var_0.x, var_0.x), false), select(vec4<bool>(var_0.x, var_0.x, var_0.x, true), vec4<bool>(true, var_0.x, true, true), false), var_0.x), vec4<bool>(!var_0.x, var_0.x && var_0.x, !var_0.x, arg_2.b.x < 1000f), arg_2.c < arg_2.c));
                let var_4 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(exp2(_wgslsmith_f_op_vec3_f32(select(arg_1.xzy, _wgslsmith_f_op_vec3_f32(func_1(arg_2, global0[_wgslsmith_index_u32(~46005u, 11u)])), all(vec3<bool>(false, false, true)))))));
                let var_5 = vec4<u32>(~min(firstTrailingBit(59677u), 4294967295u) ^ ~(global1[_wgslsmith_index_u32(~arg_0.x, 20u)] | arg_0.x), var_3.a, ~(~var_3.a), ~countOneBits(~(~24519u)));
            }
            default: {
            }
        }
        switch (arg_2.c | 2147483647i) {
            case 34200i: {
                var var_3 = Struct_1(_wgslsmith_mult_u32(func_6(arg_2, vec4<u32>(~11249u, u_input.d, 1u, global1[_wgslsmith_index_u32(u_input.a, 20u)] ^ 2552u), all(var_0)), reverseBits(0u) >> (_wgslsmith_clamp_u32(12998u, _wgslsmith_clamp_u32(0u, 30271u, arg_0.x), _wgslsmith_dot_vec2_u32(vec2<u32>(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(var_1.x, 20u)], 20u)], 20u)], 1u), vec2<u32>(u_input.e, 4294967295u))) % 32u)), !(!(!(!vec4<bool>(var_0.x, true, var_0.x, var_0.x)))));
            }
            case 0i: {
            }
            default: {
                let var_3 = -u_input.b.x;
                var var_4 = _wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(ceil(-1363f)), arg_1.x));
                var var_5 = vec2<i32>(~min(0i, var_3), _wgslsmith_mod_i32(countOneBits(_wgslsmith_mult_i32(15020i, ~29275i)), 2840i));
            }
        }
        let var_3 = ((-905f > _wgslsmith_f_op_f32(_wgslsmith_div_f32(-920f, -313f) + _wgslsmith_f_op_f32(-224f * arg_2.a))) & (false == var_0.x)) || any(!(!(!vec4<bool>(true, var_0.x, true, true))));
        let var_4 = !vec2<bool>(all(!vec4<bool>(true, var_3, true, true)), (!var_0.x && true) & true);
        global1 = array<u32, 20>();
    }
    return global0[_wgslsmith_index_u32(arg_0.x, 11u)];
}

fn func_7(arg_0: vec3<f32>, arg_1: vec2<i32>) -> bool {
    global1 = array<u32, 20>();
    var var_0 = vec2<u32>(47079u, ~u_input.c.x);
    global1 = array<u32, 20>();
    var var_1 = ~reverseBits(-1i);
    for (var var_2: i32; var_2 == 2147483647i; ) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        var var_3 = var_0.x;
        if (true) {
        }
        var var_4 = min(u_input.b.x | min(arg_1.x, reverseBits(2147483647i)), _wgslsmith_dot_vec4_i32(_wgslsmith_mult_vec4_i32(~vec4<i32>(70356i, u_input.b.x, -1i, -44010i), _wgslsmith_div_vec4_i32(-vec4<i32>(arg_1.x, u_input.b.x, i32(-2147483648), u_input.b.x), vec4<i32>(u_input.b.x, u_input.b.x, u_input.b.x, 0i))), vec4<i32>(11544i, min(arg_1.x, -1i) >> (~24469u % 32u), u_input.b.x << (countOneBits(global1[_wgslsmith_index_u32(1u, 20u)]) % 32u), -1i)));
    }
    return true;
}

fn func_4(arg_0: vec3<u32>) -> Struct_2 {
    switch (~abs(-u_input.b.x)) {
        default: {
            var var_0 = global0[_wgslsmith_index_u32(0u, 11u)];
            if (func_7(_wgslsmith_f_op_vec3_f32(vec3<f32>(1f, 1f, 1f) + _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(select(vec3<f32>(1786f, 1046f, 1227f), _wgslsmith_f_op_vec3_f32(-vec3<f32>(-2577f, -767f, -212f)), all(vec2<bool>(var_0.b.x, var_0.b.x)))), _wgslsmith_f_op_vec3_f32(func_1(Struct_2(-1000f, vec3<f32>(412f, -104f, 1803f), 66278i), func_5(vec3<u32>(1u, u_input.c.x, 35673u), vec4<f32>(-1631f, -291f, 1796f, -1692f), Struct_2(-745f, vec3<f32>(-648f, 2108f, -361f), u_input.b.x))))))), u_input.b ^ _wgslsmith_sub_vec2_i32(u_input.b << (_wgslsmith_mod_vec2_u32(vec2<u32>(global1[_wgslsmith_index_u32(arg_0.x, 20u)], arg_0.x), vec2<u32>(25912u, u_input.a)) % vec2<u32>(32u)), abs(-u_input.b)))) {
                let var_1 = global0[_wgslsmith_index_u32(var_0.a, 11u)];
                var var_2 = vec2<u32>(arg_0.x, _wgslsmith_dot_vec2_u32(u_input.c, vec2<u32>(~arg_0.x, ~39280u | func_3())));
                var var_3 = Struct_2(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-830f) + _wgslsmith_f_op_f32(-797f)), _wgslsmith_f_op_f32(f32(-1f) * -679f))))), _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(step(vec3<f32>(348f, -1292f, -399f), vec3<f32>(921f, 577f, 904f))) * vec3<f32>(1054f, 109f, -589f)) * _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(step(vec3<f32>(-946f, 1695f, 1000f), vec3<f32>(-1127f, 1302f, 380f))))), vec3<f32>(1f, 1f, 1f))), _wgslsmith_dot_vec4_i32(_wgslsmith_add_vec4_i32(select(vec4<i32>(826i, u_input.b.x, 2147483647i, u_input.b.x), _wgslsmith_div_vec4_i32(vec4<i32>(1i, u_input.b.x, -34714i, -1i), vec4<i32>(u_input.b.x, u_input.b.x, -1755i, -20486i)), !vec4<bool>(var_0.b.x, var_1.b.x, false, false)), _wgslsmith_div_vec4_i32(vec4<i32>(u_input.b.x, u_input.b.x, -7541i, u_input.b.x) << (vec4<u32>(var_2.x, 17753u, 0u, 1u) % vec4<u32>(32u)), vec4<i32>(-8713i, i32(-2147483648), 1i, -51063i))), _wgslsmith_mult_vec4_i32(vec4<i32>(u_input.b.x, _wgslsmith_add_i32(u_input.b.x, 2147483647i), firstLeadingBit(u_input.b.x), _wgslsmith_clamp_i32(0i, u_input.b.x, 1i)), (vec4<i32>(u_input.b.x, i32(-2147483648), u_input.b.x, -26524i) << (vec4<u32>(global1[_wgslsmith_index_u32(44187u, 20u)], 0u, global1[_wgslsmith_index_u32(0u, 20u)], 0u) % vec4<u32>(32u))) & ~vec4<i32>(2147483647i, 0i, -31232i, 0i))));
            }
            global0 = array<Struct_1, 11>();
            loop {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                break;
            }
        }
    }
    global0 = array<Struct_1, 11>();
    let var_0 = u_input.b.x;
    let var_1 = !select(false, any(select(vec2<bool>(false, false), vec2<bool>(false, false), vec2<bool>(true, false))), false);
    let var_2 = ~vec2<i32>(firstTrailingBit(~(-18313i)), _wgslsmith_sub_i32(max(-var_0, -1i), u_input.b.x));
    return Struct_2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -188f) + _wgslsmith_f_op_f32(-1707f)) + _wgslsmith_f_op_f32(-647f))), vec3<f32>(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-193f - -1768f)))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-246f - 890f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(-1807f)) + -467f)), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(268f)) - -1324f)))), u_input.b.x);
}

fn func_2(arg_0: f32, arg_1: u32, arg_2: i32) -> Struct_2 {
    loop {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        switch (1i) {
            case -1i: {
                return func_4(vec3<u32>(_wgslsmith_dot_vec3_u32(vec3<u32>(func_3(), _wgslsmith_div_u32(32576u, arg_1), _wgslsmith_mod_u32(1u, 97484u)), vec3<u32>(_wgslsmith_sub_u32(1u, global1[_wgslsmith_index_u32(0u, 20u)]), 33016u & u_input.e, global1[_wgslsmith_index_u32(~5560u, 20u)])), global1[_wgslsmith_index_u32(_wgslsmith_add_u32(_wgslsmith_add_u32(global1[_wgslsmith_index_u32(1u, 20u)], 34314u), ~(~arg_1)), 20u)], arg_1));
            }
            case -18437i: {
                global1 = array<u32, 20>();
                var var_0 = Struct_2(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_0 + 361f)) - -1130f))), vec3<f32>(_wgslsmith_f_op_f32(round(arg_0)), _wgslsmith_f_op_f32(round(-600f)), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(arg_0, -791f))), arg_0))), func_4(_wgslsmith_add_vec3_u32(_wgslsmith_mod_vec3_u32(vec3<u32>(u_input.c.x, global1[_wgslsmith_index_u32(1u, 20u)], 4294967295u), vec3<u32>(global1[_wgslsmith_index_u32(0u, 20u)], 4294967295u, arg_1) ^ vec3<u32>(0u, 0u, 0u)), ~(~vec3<u32>(4294967295u, 5125u, u_input.d)))).c);
                global0 = array<Struct_1, 11>();
            }
            case 6584i: {
                var var_0 = ~2147483647i;
                continue;
            }
            case -39699i: {
                let var_0 = ~firstLeadingBit(reverseBits(_wgslsmith_add_vec4_u32(~vec4<u32>(4294967295u, global1[_wgslsmith_index_u32(0u, 20u)], u_input.c.x, arg_1), max(vec4<u32>(73393u, arg_1, 4294967295u, global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(43331u, 20u)], 20u)]), vec4<u32>(u_input.d, arg_1, global1[_wgslsmith_index_u32(30687u, 20u)], 4294967295u)))));
            }
            default: {
                continue;
            }
        }
    }
    var var_0 = func_4(countOneBits(_wgslsmith_sub_vec3_u32(min(_wgslsmith_mult_vec3_u32(vec3<u32>(96269u, 1u, arg_1), vec3<u32>(57751u, arg_1, global1[_wgslsmith_index_u32(arg_1, 20u)])), abs(vec3<u32>(4294967295u, u_input.e, 4294967295u))), _wgslsmith_mod_vec3_u32(~vec3<u32>(1u, arg_1, global1[_wgslsmith_index_u32(u_input.a, 20u)]), vec3<u32>(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(4294967295u, 20u)], 20u)], 58007u, 99490u)))));
    var var_1 = func_5(vec3<u32>(~func_3(), ~(~global1[_wgslsmith_index_u32(1u, 20u)] & arg_1), ~countOneBits(global1[_wgslsmith_index_u32(arg_1, 20u)] << (4867u % 32u))), _wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_0, -1171f, -226f, _wgslsmith_f_op_f32(select(func_4(vec3<u32>(global1[_wgslsmith_index_u32(arg_1, 20u)], arg_1, 4294967295u)).b.x, var_0.a, true)))), Struct_2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1512f))), _wgslsmith_f_op_vec3_f32(sign(var_0.b)), arg_2));
    let var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_div_f32(arg_0, arg_0)));
    global0 = array<Struct_1, 11>();
    return Struct_2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-arg_0), -123f) * -435f)), vec3<f32>(func_4(vec3<u32>(_wgslsmith_dot_vec3_u32(vec3<u32>(global1[_wgslsmith_index_u32(u_input.c.x, 20u)], 34745u, 1u), vec3<u32>(u_input.d, var_1.a, 4294967295u)), ~u_input.a, func_3())).a, -1000f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_0 + _wgslsmith_f_op_f32(-955f * 1000f)))), select(arg_2, ~_wgslsmith_dot_vec4_i32(vec4<i32>(-24807i, var_0.c, -39614i, -21098i), reverseBits(vec4<i32>(var_0.c, u_input.b.x, arg_2, arg_2))), !(81448u > var_1.a)));
}

fn func_8(arg_0: vec2<f32>, arg_1: i32, arg_2: vec3<u32>) -> StorageBuffer {
    let var_0 = global1[_wgslsmith_index_u32(u_input.a, 20u)];
    global1 = array<u32, 20>();
    var var_1 = func_2(_wgslsmith_f_op_f32(arg_0.x * _wgslsmith_f_op_f32(-arg_0.x)), 1u, i32(-1i) * -39762i);
    let var_2 = _wgslsmith_div_vec2_f32(arg_0, var_1.b.xz);
    for (; ; ) {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        continue;
    }
    return StorageBuffer(-func_2(_wgslsmith_f_op_f32(340f + 1242f), _wgslsmith_div_u32(reverseBits(53515u), 1u), _wgslsmith_mod_i32(_wgslsmith_mod_i32(arg_1, -74503i), ~arg_1)).c, arg_0, _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(arg_0.x, -813f))) * var_1.b.zx), _wgslsmith_f_op_f32(-var_1.a));
}

@compute
@workgroup_size(1)
fn main() {
    loop {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
    }
    if (!(!(!(!any(vec3<bool>(false, true, true)))))) {
        if (select(true, true, all(select(select(select(vec3<bool>(true, false, false), vec3<bool>(true, true, true), vec3<bool>(true, false, false)), vec3<bool>(true, true, false), vec3<bool>(false, true, true)), select(vec3<bool>(true, true, true), vec3<bool>(true, true, true), vec3<bool>(true, false, true)), false)))) {
            global1 = array<u32, 20>();
            var var_0 = Struct_2(323f, _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(exp2(_wgslsmith_f_op_vec3_f32(func_1(Struct_2(-275f, vec3<f32>(-242f, -1372f, 588f), u_input.b.x), global0[_wgslsmith_index_u32(u_input.c.x, 11u)])))))), _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(-482f, 568f, -620f) + vec3<f32>(155f, 772f, -269f))), _wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(-vec3<f32>(244f, -1000f, -1097f)))))), u_input.b.x);
        }
        loop {
            if (LOOP_COUNTERS[11u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
            continue;
        }
    }
    let var_0 = 347f;
    var var_1 = ~(~vec3<u32>(1u, global1[_wgslsmith_index_u32(~u_input.d >> (1u % 32u), 20u)], u_input.c.x));
    let var_2 = Struct_1(global1[_wgslsmith_index_u32(~global1[_wgslsmith_index_u32(~u_input.d, 20u)], 20u)], vec4<bool>(true, true, true, true));
    global0 = array<Struct_1, 11>();
    var_1 = ~(~firstLeadingBit(_wgslsmith_sub_vec3_u32(vec3<u32>(41503u, 4294967295u, 9864u), countOneBits(vec3<u32>(u_input.c.x, 2708u, 6391u)))));
    global0 = array<Struct_1, 11>();
    let x = u_input.a;
    s_output = func_8(_wgslsmith_f_op_vec2_f32(select(_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(select(vec2<f32>(var_0, var_0), vec2<f32>(var_0, var_0), var_2.b.x)), _wgslsmith_f_op_vec2_f32(vec2<f32>(var_0, -1000f) - vec2<f32>(var_0, 385f)))), _wgslsmith_f_op_vec3_f32(func_1(func_2(-274f, 59342u, u_input.b.x), Struct_1(1u, var_2.b))).zx), func_2(_wgslsmith_f_op_f32(exp2(var_0)), countOneBits(~20352u), u_input.b.x).b.yx, var_2.b.xz)), abs(1i), abs(firstTrailingBit(_wgslsmith_sub_vec3_u32(vec3<u32>(global1[_wgslsmith_index_u32(39516u, 20u)], u_input.c.x, 4294967295u), vec3<u32>(21213u, var_2.a, var_1.x)) & select(vec3<u32>(var_1.x, 40413u, var_2.a), vec3<u32>(4294967295u, 19195u, u_input.e), var_2.b.x))));
}

`;