export const input = [158,86,79,151,254,114,163,162,12,81,91,252,204,238,109,219,237,210,235,91,125,99,219,144,151,165,155,73,194,232,173,112,84,69,220,172,166,188,124,111,105,69,244,66,0,149,254,208,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [158,86,79,151,254,114,163,162,12,81,91,252,204,238,109,219,237,210,235,91,125,99,219,144,151,165,155,73,194,232,173,112,84,69,220,172,166,188,124,111,105,69,244,66,0,149,254,208,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[158,86,79,151,254,114,163,162,12,81,91,252,204,238,109,219,237,210,235,91,125,99,219,144,151,165,155,73,194,232,173,112,84,69,220,172,166,188,124,111,105,69,244,66,0,149,254,208]}
// Seed: 13116759313369010741

struct Struct_1 {
    a: i32,
    b: vec2<i32>,
}

struct Struct_2 {
    a: f32,
    b: u32,
    c: Struct_1,
    d: Struct_1,
    e: vec2<i32>,
}

struct UniformBuffer {
    a: vec3<u32>,
    b: vec3<u32>,
    c: u32,
    d: i32,
    e: u32,
}

struct StorageBuffer {
    a: vec4<f32>,
    b: i32,
    c: vec3<u32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: Struct_1;

var<private> LOOP_COUNTERS: array<u32, 19>;

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn func_6(arg_0: vec2<bool>) -> u32 {
    for (var var_0 = 47348i; var_0 < 2147483647i; var_0 -= 1i) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
    }
    loop {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        if (select(all(arg_0), true, arg_0.x || select((u_input.d == global0.a) | false, arg_0.x, all(select(vec3<bool>(arg_0.x, true, false), vec3<bool>(arg_0.x, arg_0.x, arg_0.x), vec3<bool>(true, arg_0.x, false)))))) {
            var var_0 = Struct_1(_wgslsmith_sub_i32(_wgslsmith_sub_i32(global0.a, 0i), 0i), global0.b);
            global0 = Struct_1(0i | ~(6797i >> (_wgslsmith_clamp_u32(0u, 49667u, u_input.b.x) % 32u)), _wgslsmith_sub_vec2_i32(~vec2<i32>(var_0.b.x, global0.b.x), vec2<i32>(u_input.d, countOneBits(global0.a))) >> (u_input.a.zy % vec2<u32>(32u)));
            return 1u ^ _wgslsmith_add_u32(abs(select(_wgslsmith_dot_vec2_u32(vec2<u32>(4294967295u, u_input.e), vec2<u32>(u_input.c, 0u)), firstLeadingBit(u_input.c), arg_0.x)), ~(~1u));
        }
        global0 = Struct_1(i32(-1i) * i32(-2147483648), _wgslsmith_sub_vec2_i32(select(reverseBits(global0.b), global0.b, true), global0.b));
        let var_0 = true;
        let var_1 = global0.a;
    }
    global0 = Struct_1((global0.b.x & ~(-1738i)) & -1i, vec2<i32>(u_input.d, firstTrailingBit(~max(global0.a, u_input.d))));
    loop {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        let var_0 = Struct_1(~(-_wgslsmith_mult_i32(global0.b.x ^ global0.a, -26813i)), vec2<i32>(~(~_wgslsmith_clamp_i32(0i, 11983i, global0.a)), firstLeadingBit(firstLeadingBit(~u_input.d))));
        for (; ; ) {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            let var_1 = _wgslsmith_f_op_f32(1160f * _wgslsmith_f_op_f32(trunc(271f)));
            let var_2 = Struct_2(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-var_1), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-294f)))), !(!any(arg_0)))), _wgslsmith_mult_u32(40717u, _wgslsmith_div_u32(1u, u_input.b.x)), var_0, var_0, vec2<i32>(global0.b.x, global0.b.x));
            break;
        }
        global0 = var_0;
        switch (max(abs(select(i32(-2147483648), -34813i, arg_0.x)), global0.b.x)) {
            case 21416i: {
            }
            case 93843i: {
                let var_1 = var_0;
            }
            default: {
            }
        }
    }
    global0 = Struct_1(2147483647i, -countOneBits(~global0.b));
    return u_input.e ^ min(63822u, 41479u);
}

fn func_5(arg_0: Struct_2, arg_1: u32, arg_2: vec4<u32>) -> u32 {
    let var_0 = min(reverseBits(_wgslsmith_sub_vec4_u32(firstLeadingBit(arg_2), arg_2)) & vec4<u32>(~75966u, _wgslsmith_mult_u32(max(32777u, 4294967295u), ~arg_1), arg_1, arg_0.b), ~vec4<u32>(~u_input.c, ~u_input.c, 1u, arg_1) ^ ~vec4<u32>(~85332u, func_6(vec2<bool>(false, true)), ~u_input.c, ~u_input.e));
    switch (1i >> (~_wgslsmith_clamp_u32(20433u, 1u, arg_0.b | 1u) % 32u)) {
        case -1i: {
            var var_1 = arg_0.c;
            for (var var_2 = 2147483647i; ; var_2 += 1i) {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                break;
            }
            global0 = arg_0.d;
            global0 = Struct_1(_wgslsmith_add_i32((arg_0.d.b.x << ((var_0.x ^ 62319u) % 32u)) | arg_0.e.x, 2147483647i & var_1.a), vec2<i32>(var_1.b.x, var_1.b.x));
            for (; ; ) {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                global0 = Struct_1(_wgslsmith_dot_vec3_i32(_wgslsmith_mult_vec3_i32(_wgslsmith_div_vec3_i32(_wgslsmith_mult_vec3_i32(vec3<i32>(var_1.a, 62569i, -54877i), vec3<i32>(21885i, 3877i, u_input.d)), vec3<i32>(var_1.b.x, -1i, 2147483647i) >> (vec3<u32>(4294967295u, 34441u, u_input.b.x) % vec3<u32>(32u))), max(min(vec3<i32>(arg_0.e.x, -26294i, u_input.d), vec3<i32>(11760i, -10904i, 15398i)), _wgslsmith_div_vec3_i32(vec3<i32>(global0.b.x, 96182i, var_1.b.x), vec3<i32>(1i, global0.b.x, u_input.d)))), vec3<i32>(firstTrailingBit(u_input.d), _wgslsmith_dot_vec2_i32(_wgslsmith_mult_vec2_i32(global0.b, var_1.b), global0.b ^ vec2<i32>(-4634i, global0.b.x)), 0i)), var_1.b);
                let var_2 = _wgslsmith_f_op_vec2_f32(sign(_wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_0.a - arg_0.a)), arg_0.a) - _wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(abs(-1255f)), _wgslsmith_f_op_f32(-243f))))));
                continue;
            }
        }
        default: {
            var var_1 = Struct_1(0i, global0.b);
            var var_2 = ~u_input.d;
        }
    }
    global0 = arg_0.d;
    var var_1 = !vec2<bool>(!(!(u_input.d != i32(-2147483648))), any(select(vec3<bool>(true, false, true), select(vec3<bool>(true, true, true), vec3<bool>(false, false, false), vec3<bool>(false, true, true)), true)));
    if (any(select(vec3<bool>(var_1.x, var_1.x, all(vec3<bool>(var_1.x, true, var_1.x))), vec3<bool>(true, true, true), select(select(vec3<bool>(true, true, true), vec3<bool>(true, true, true), !vec3<bool>(false, false, var_1.x)), select(vec3<bool>(true, true, true), vec3<bool>(var_1.x, true, false), any(vec3<bool>(var_1.x, true, var_1.x))), vec3<bool>(true, true, false))))) {
        let var_2 = arg_0;
        var var_3 = arg_0;
        let var_4 = var_2;
        let var_5 = !select(!select(vec2<bool>(var_1.x, false), vec2<bool>(true, false), true), !select(!vec2<bool>(var_1.x, var_1.x), !vec2<bool>(false, var_1.x), !vec2<bool>(true, var_1.x)), select(vec2<bool>(true, true), vec2<bool>(true, true), var_1.x));
    }
    return arg_0.b;
}

fn func_4(arg_0: Struct_1, arg_1: bool, arg_2: Struct_1) -> Struct_2 {
    if (arg_1) {
        for (var var_0 = 4800i; ; var_0 -= 1i) {
            if (LOOP_COUNTERS[6u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        }
        let var_0 = _wgslsmith_mod_vec3_u32(~(firstTrailingBit(vec3<u32>(u_input.c, 0u, u_input.c)) >> (u_input.b % vec3<u32>(32u))), ~_wgslsmith_clamp_vec3_u32(select(vec3<u32>(u_input.e, u_input.b.x, 4294967295u), ~vec3<u32>(1u, 6035u, 3538u), vec3<bool>(false, true, arg_1)), vec3<u32>(func_5(Struct_2(-1572f, 0u, arg_2, Struct_1(0i, vec2<i32>(u_input.d, global0.b.x)), arg_2.b), 4294967295u, vec4<u32>(0u, u_input.b.x, u_input.e, u_input.e)), ~61664u, max(u_input.e, u_input.c)), _wgslsmith_clamp_vec3_u32(u_input.b, firstLeadingBit(vec3<u32>(u_input.c, 1u, 39592u)), ~vec3<u32>(0u, u_input.c, u_input.a.x))));
        var var_1 = _wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(-983f)) - -509f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-366f * 918f) - _wgslsmith_f_op_f32(684f * 1176f))), 665f));
    }
    var var_0 = Struct_1(_wgslsmith_clamp_i32(-(~(-arg_0.a)), -(1i ^ select(arg_0.b.x, i32(-2147483648), arg_1)), firstLeadingBit(arg_0.a)), global0.b);
    switch (0i) {
        case -71978i: {
            for (var var_1: i32; -548f < _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1801f) * _wgslsmith_f_op_f32(333f + 1526f)) * _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(sign(-427f)), _wgslsmith_f_op_f32(-1722f)))) + _wgslsmith_f_op_f32(-1223f)); var_1 += 1i) {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                let var_2 = _wgslsmith_f_op_vec3_f32(ceil(vec3<f32>(-1427f, 588f, -560f)));
                let var_3 = Struct_1(-1i, -max(vec2<i32>(54938i, arg_2.b.x), select(vec2<i32>(1i, 1i), vec2<i32>(global0.a, -36117i), u_input.b.x < 1u)));
            }
        }
        default: {
            if (false) {
                let var_1 = -25809i;
                global0 = arg_2;
                let var_2 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(-680f, 210f, -1000f, -204f))) * _wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(vec4<f32>(-1364f, 791f, 2529f, -517f) * vec4<f32>(-1109f, 1263f, -1166f, -242f))))) + _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-1000f, 268f, 963f, -312f)) - _wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(vec4<f32>(455f, 838f, -180f, 870f), vec4<f32>(772f, -654f, 107f, -702f))))));
                let var_3 = 2244f;
                var var_4 = !vec2<bool>(false, any(vec4<bool>(select(false, arg_1, true), true, any(vec3<bool>(false, true, arg_1)), arg_1)));
            }
            loop {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                continue;
            }
            for (var var_1 = -39359i; var_1 > i32(-2147483648); var_1 -= 1i) {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                continue;
            }
            var var_1 = 335f;
        }
    }
    loop {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        var var_1 = arg_2.b;
        var var_2 = Struct_2(268f, ~((u_input.b.x >> (1u % 32u)) ^ ~u_input.a.x), arg_2, arg_0, _wgslsmith_clamp_vec2_i32(~select(vec2<i32>(-1i, global0.b.x), vec2<i32>(var_0.a, 1082i), false) << (~u_input.a.yx % vec2<u32>(32u)), vec2<i32>(2147483647i, 69608i), vec2<i32>(-14095i, var_1.x)));
        loop {
            if (LOOP_COUNTERS[11u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
            let var_3 = _wgslsmith_sub_i32(firstTrailingBit(67303i), select(8633i, max(_wgslsmith_mult_i32(global0.a, ~var_2.d.b.x), i32(-1i) * -u_input.d), !select(true, all(vec4<bool>(false, true, arg_1, true)), arg_1)));
        }
        let var_3 = arg_0;
    }
    let var_1 = _wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(-396f - 1346f), 824f, -747f, _wgslsmith_f_op_f32(floor(-717f))), _wgslsmith_f_op_vec4_f32(vec4<f32>(-161f, -640f, 723f, 376f) - _wgslsmith_f_op_vec4_f32(-vec4<f32>(393f, -660f, 1188f, -288f)))))));
    return Struct_2(_wgslsmith_f_op_f32(101f * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(floor(var_1.x)))))), ~max(25368u, 19120u), arg_0, arg_2, ~vec2<i32>(-46457i, -3349i));
}

fn func_3(arg_0: vec4<i32>, arg_1: Struct_2, arg_2: vec3<f32>, arg_3: f32) -> vec3<i32> {
    let var_0 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(round(vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_2.x) - 2045f), arg_1.a, 837f))) - arg_2);
    var var_1 = func_4(arg_1.c, -34408i == arg_0.x, Struct_1(_wgslsmith_mod_i32(i32(-2147483648), _wgslsmith_mod_i32(-global0.b.x, -1i | arg_0.x)), _wgslsmith_add_vec2_i32(-vec2<i32>(-42781i, -2573i), _wgslsmith_add_vec2_i32(vec2<i32>(18982i, arg_0.x), -global0.b))));
    var var_2 = _wgslsmith_f_op_f32(812f * arg_1.a);
    var_1 = func_4(func_4(Struct_1(_wgslsmith_clamp_i32(reverseBits(global0.b.x), ~3810i, -53830i), arg_1.c.b | -vec2<i32>(-1i, arg_0.x)), true, Struct_1(arg_0.x, (vec2<i32>(arg_1.e.x, arg_1.e.x) ^ vec2<i32>(-57977i, var_1.d.b.x)) & vec2<i32>(global0.b.x, 16036i))).d, any(select(vec2<bool>(true, true), select(vec2<bool>(true, false), vec2<bool>(false, false), vec2<bool>(false, false)), vec2<bool>(true, true))) == !all(vec3<bool>(true, true, true)), var_1.d);
    for (var var_3 = 1i; var_3 != 1i; var_2 = var_1.a) {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        for (var var_4 = 1i; ; var_4 -= 1i) {
            if (LOOP_COUNTERS[13u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
            var var_5 = select(vec3<bool>(all(vec4<bool>(false, true, true, any(vec3<bool>(true, false, true)))), _wgslsmith_dot_vec4_i32(vec4<i32>(i32(-2147483648), 2147483647i, 8324i, u_input.d), _wgslsmith_clamp_vec4_i32(vec4<i32>(arg_1.e.x, arg_1.c.a, -1i, -1i), arg_0, vec4<i32>(arg_1.d.b.x, -41605i, u_input.d, -10381i))) > firstLeadingBit(_wgslsmith_dot_vec3_i32(vec3<i32>(var_1.d.b.x, 2147483647i, var_1.c.b.x), arg_0.yxz)), !((arg_2.x < var_0.x) & true)), select(select(select(select(vec3<bool>(false, true, true), vec3<bool>(true, true, false), vec3<bool>(false, true, false)), select(vec3<bool>(false, false, false), vec3<bool>(false, false, false), true), false), select(select(vec3<bool>(true, false, true), vec3<bool>(true, false, true), false), select(vec3<bool>(false, true, false), vec3<bool>(true, false, false), true), select(vec3<bool>(false, true, true), vec3<bool>(false, false, false), vec3<bool>(false, false, false))), vec3<bool>(true, true, true)), vec3<bool>(all(select(vec2<bool>(true, true), vec2<bool>(false, true), false)), select(true, true, false), true), select(select(vec3<bool>(true, true, true), vec3<bool>(true, true, true), vec3<bool>(false, false, false)), vec3<bool>(true, false, true), any(vec4<bool>(false, false, false, false)))), select(vec3<bool>(any(vec3<bool>(false, false, false)) || true, true, false), vec3<bool>(!all(vec3<bool>(false, false, true)), !any(vec3<bool>(false, true, true)), !all(vec4<bool>(true, false, false, true))), !vec3<bool>(all(vec2<bool>(false, true)), true, all(vec2<bool>(true, true)))));
        }
        if (!(!any(select(vec4<bool>(true, true, true, true), vec4<bool>(false, false, false, true), true)))) {
        }
    }
    return select(firstLeadingBit(min(arg_0.xxy, abs(arg_0.xyx << (u_input.b % vec3<u32>(32u))))), ~arg_0.xwx, vec3<bool>(true, false, !(true && select(false, true, false))));
}

fn func_2(arg_0: vec4<bool>, arg_1: f32) -> i32 {
    var var_0 = arg_0.yy;
    loop {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        for (var var_1 = 0i; ; global0 = Struct_1(select(-1i ^ _wgslsmith_add_i32(global0.a, _wgslsmith_dot_vec4_i32(vec4<i32>(global0.a, global0.a, -2949i, i32(-2147483648)), vec4<i32>(-27002i, i32(-2147483648), 8220i, global0.b.x))), _wgslsmith_mod_i32(~(~(-3865i)), select(abs(u_input.d), abs(u_input.d), !var_0.x)), ~(~u_input.a.x) >= ~119287u), vec2<i32>(-(u_input.d | -global0.a), _wgslsmith_dot_vec3_i32(_wgslsmith_mult_vec3_i32(vec3<i32>(u_input.d, global0.a, -33649i) & vec3<i32>(i32(-2147483648), global0.b.x, global0.b.x), vec3<i32>(i32(-2147483648), global0.b.x, 17577i)), func_3(vec4<i32>(1i, i32(-2147483648), i32(-2147483648), 0i), Struct_2(arg_1, 7646u, Struct_1(global0.b.x, global0.b), Struct_1(u_input.d, vec2<i32>(81074i, global0.b.x)), vec2<i32>(u_input.d, 0i)), _wgslsmith_f_op_vec3_f32(-vec3<f32>(arg_1, arg_1, -1000f)), _wgslsmith_f_op_f32(select(122f, arg_1, arg_0.x))))))) {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            global0 = Struct_1(func_4(Struct_1(u_input.d, -vec2<i32>(u_input.d, -62689i)), var_0.x, func_4(func_4(Struct_1(1i, vec2<i32>(u_input.d, 0i)), arg_0.x, Struct_1(15332i, vec2<i32>(global0.b.x, global0.a))).d, u_input.c > ~u_input.c, func_4(Struct_1(25467i, global0.b), var_0.x, func_4(Struct_1(0i, global0.b), false, Struct_1(u_input.d, global0.b)).c).c).d).e.x, vec2<i32>(_wgslsmith_div_i32(select(u_input.d, 1i, var_0.x), _wgslsmith_sub_i32(1i, 33153i)) << (u_input.b.x % 32u), -1i));
            let var_2 = _wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(arg_1, arg_1) + vec2<f32>(-478f, -1432f))) - _wgslsmith_f_op_vec2_f32(abs(_wgslsmith_f_op_vec2_f32(vec2<f32>(1508f, 407f) + vec2<f32>(arg_1, 414f))))))));
        }
        var var_1 = _wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(arg_1, -349f, true)) + -1607f), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(max(-332f, arg_1)), _wgslsmith_f_op_f32(-arg_1)))));
        var var_2 = Struct_2(1393f, ~24469u, Struct_1(func_3(_wgslsmith_add_vec4_i32(-vec4<i32>(global0.a, 0i, 0i, u_input.d), firstLeadingBit(vec4<i32>(u_input.d, global0.a, 29822i, u_input.d))), Struct_2(var_1.x, func_4(Struct_1(0i, global0.b), var_0.x, Struct_1(i32(-2147483648), vec2<i32>(3383i, i32(-2147483648)))).b, Struct_1(u_input.d, vec2<i32>(u_input.d, 0i)), func_4(Struct_1(16426i, vec2<i32>(i32(-2147483648), global0.b.x)), false, Struct_1(global0.b.x, global0.b)).c, vec2<i32>(u_input.d, 3863i)), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(ceil(vec3<f32>(var_1.x, 1329f, var_1.x)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(var_1.x)))).x, max(min(vec2<i32>(global0.b.x, 1i), global0.b), global0.b) << (u_input.a.yz % vec2<u32>(32u))), func_4(func_4(func_4(Struct_1(1i, global0.b), any(vec3<bool>(false, false, true)), Struct_1(13247i, global0.b)).c, true, Struct_1(func_3(vec4<i32>(global0.a, u_input.d, 84538i, 1764i), Struct_2(985f, 0u, Struct_1(0i, vec2<i32>(global0.b.x, u_input.d)), Struct_1(-26972i, global0.b), global0.b), vec3<f32>(129f, var_1.x, 1400f), arg_1).x, abs(global0.b))).c, true || any(select(vec4<bool>(true, var_0.x, var_0.x, var_0.x), arg_0, arg_0)), func_4(Struct_1(u_input.d, global0.b ^ global0.b), all(arg_0.zz), func_4(func_4(Struct_1(u_input.d, global0.b), false, Struct_1(global0.a, vec2<i32>(u_input.d, -32466i))).d, true, func_4(Struct_1(u_input.d, vec2<i32>(45270i, 1221i)), true, Struct_1(global0.b.x, vec2<i32>(i32(-2147483648), u_input.d))).c).c).d).d, abs(vec2<i32>(global0.b.x & i32(-2147483648), 0i & (u_input.d >> (1u % 32u)))));
    }
    var var_1 = -1i;
    for (var var_2: i32; var_2 == 2147483647i; global0 = func_4(Struct_1(-u_input.d, (vec2<i32>(-1i) * -vec2<i32>(-1i, u_input.d)) | vec2<i32>(484i ^ u_input.d, i32(-2147483648))), arg_0.x | !(arg_0.x == true), func_4(func_4(Struct_1(firstTrailingBit(global0.b.x), firstTrailingBit(global0.b)), arg_0.x, Struct_1(u_input.d, global0.b ^ vec2<i32>(global0.b.x, u_input.d))).c, arg_0.x, Struct_1(1i, vec2<i32>(_wgslsmith_mod_i32(11696i, global0.b.x), _wgslsmith_mult_i32(31460i, 21383i)))).c).d) {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        switch (5829i) {
            case 23726i: {
                let var_3 = select(_wgslsmith_mult_vec3_i32(vec3<i32>(~(2147483647i & global0.b.x), func_4(Struct_1(-139481i, vec2<i32>(1i, 4485i)), true, Struct_1(0i, global0.b)).c.a, 35460i), vec3<i32>(1i, i32(-2147483648), countOneBits(global0.b.x))), _wgslsmith_div_vec3_i32(~(-vec3<i32>(u_input.d, global0.a, global0.b.x)), ~(vec3<i32>(-1i) * -vec3<i32>(global0.b.x, u_input.d, u_input.d))), !(!vec3<bool>(var_0.x && var_0.x, true, var_0.x)));
            }
            default: {
                continue;
            }
        }
        break;
    }
    let var_2 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(step(_wgslsmith_div_vec3_f32(vec3<f32>(arg_1, arg_1, -979f), vec3<f32>(arg_1, -987f, arg_1)), _wgslsmith_f_op_vec3_f32(-vec3<f32>(302f, arg_1, -226f)))))) + _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(round(vec3<f32>(283f, arg_1, arg_1))), vec3<f32>(-1000f, arg_1, 353f)) - _wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(select(vec3<f32>(-583f, 102f, arg_1), vec3<f32>(arg_1, arg_1, 869f), arg_0.xxz))))) * _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(round(vec3<f32>(361f, 548f, -1000f))))));
    return _wgslsmith_sub_i32(u_input.d, 0i);
}

fn func_1(arg_0: vec2<bool>, arg_1: Struct_1) -> vec2<i32> {
    if (true) {
        let var_0 = arg_0;
        if (true & var_0.x) {
            var var_1 = Struct_1(func_2(select(vec4<bool>(!arg_0.x, u_input.c >= 567u, all(vec2<bool>(arg_0.x, var_0.x)), true), vec4<bool>(arg_0.x, var_0.x, true, arg_0.x), !vec4<bool>(arg_0.x, var_0.x, var_0.x, var_0.x)), _wgslsmith_f_op_f32(-1f)), abs(~arg_1.b));
            let var_2 = func_4(func_4(func_4(arg_1, arg_0.x, arg_1).d, false, Struct_1(func_3(vec4<i32>(2147483647i, arg_1.b.x, i32(-2147483648), u_input.d) ^ vec4<i32>(45231i, 43838i, 2147483647i, 1i), func_4(Struct_1(15548i, vec2<i32>(var_1.b.x, arg_1.a)), arg_0.x, Struct_1(u_input.d, arg_1.b)), _wgslsmith_f_op_vec3_f32(-vec3<f32>(1301f, -835f, 401f)), _wgslsmith_f_op_f32(round(1398f))).x, arg_1.b)).c, arg_0.x, func_4(Struct_1(countOneBits(-2147483647i), -max(arg_1.b, vec2<i32>(global0.a, global0.a))), !(arg_0.x | select(arg_0.x, var_0.x, true)), arg_1).c);
            let var_3 = Struct_1(-global0.a, ~(arg_1.b & var_2.e));
            let var_4 = select(u_input.e, 52153u << ((var_2.b & ~(~var_2.b)) % 32u), !var_0.x);
        }
        loop {
            if (LOOP_COUNTERS[17u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
            let var_1 = arg_0.x;
            global0 = arg_1;
        }
    }
    global0 = func_4(arg_1, true, func_4(arg_1, all(select(vec4<bool>(true, arg_0.x, false, arg_0.x), !vec4<bool>(true, arg_0.x, true, arg_0.x), any(vec4<bool>(arg_0.x, false, true, false)))), func_4(Struct_1(-u_input.d, vec2<i32>(-1i, -14280i)), arg_0.x, Struct_1(_wgslsmith_mult_i32(u_input.d, global0.b.x), -arg_1.b)).d).c).c;
    if ((2344f < _wgslsmith_f_op_f32(round(_wgslsmith_div_f32(_wgslsmith_f_op_f32(abs(246f)), _wgslsmith_f_op_f32(-703f))))) | arg_0.x) {
    }
    var var_0 = func_4(arg_1, arg_0.x, Struct_1(abs(~min(1554i, global0.a)), func_3(vec4<i32>(0i, arg_1.b.x, u_input.d, u_input.d) & (vec4<i32>(-1i, -6865i, 2147483647i, 2147483647i) << (vec4<u32>(53387u, 22392u, u_input.b.x, 0u) % vec4<u32>(32u))), func_4(arg_1, arg_0.x, arg_1), vec3<f32>(1f, 1f, 1f), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-1466f), 1537f))).zz)).c;
    switch (_wgslsmith_div_i32(_wgslsmith_add_i32(var_0.b.x, 2147483647i), -11100i)) {
        default: {
            var_0 = Struct_1(18632i, -(~vec2<i32>(var_0.a, _wgslsmith_dot_vec3_i32(vec3<i32>(arg_1.a, 24037i, u_input.d), vec3<i32>(u_input.d, var_0.b.x, 24683i)))));
        }
    }
    return arg_1.b;
}

@compute
@workgroup_size(1)
fn main() {
    global0 = Struct_1(min(-global0.b.x, ~countOneBits(-24905i)), vec2<i32>(-17103i, _wgslsmith_dot_vec2_i32(~(-global0.b), -_wgslsmith_clamp_vec2_i32(vec2<i32>(global0.b.x, 1i), global0.b, vec2<i32>(u_input.d, global0.b.x)))));
    global0 = Struct_1(2147483647i, func_1(select(vec2<bool>(true, true), vec2<bool>(true, true), all(vec3<bool>(false, true, true))), Struct_1(_wgslsmith_mult_i32(0i, global0.a), global0.b)));
    let var_0 = _wgslsmith_div_vec4_i32(~_wgslsmith_div_vec4_i32(firstTrailingBit(vec4<i32>(u_input.d, i32(-2147483648), global0.a, 0i) | vec4<i32>(u_input.d, u_input.d, 0i, 26029i)), vec4<i32>(_wgslsmith_dot_vec3_i32(vec3<i32>(30167i, 2147483647i, 0i), vec3<i32>(u_input.d, u_input.d, 0i)), _wgslsmith_div_i32(14981i, global0.b.x), ~(i32(-2147483648)), _wgslsmith_mult_i32(-17966i, 4680i))), reverseBits(select(_wgslsmith_sub_vec4_i32(vec4<i32>(-1i, i32(-2147483648), u_input.d, 37071i) | vec4<i32>(global0.b.x, u_input.d, 2918i, -37127i), min(vec4<i32>(49859i, -8678i, u_input.d, 31813i), vec4<i32>(49444i, global0.a, global0.b.x, global0.b.x))), min(-vec4<i32>(global0.b.x, i32(-2147483648), -59937i, u_input.d), -vec4<i32>(-13308i, -1i, 0i, u_input.d)), any(vec2<bool>(true, true)))));
    var var_1 = true;
    for (var var_2: i32; all(vec4<bool>(all(vec2<bool>(true, true)) || true, true, _wgslsmith_f_op_f32(step(1251f, 804f)) == -1000f, true)) && false; ) {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        var var_3 = ~_wgslsmith_clamp_vec3_u32(reverseBits(~(~vec3<u32>(1u, 19740u, u_input.e))), ~reverseBits(~vec3<u32>(1u, 4294967295u, u_input.b.x)), countOneBits(~firstLeadingBit(u_input.a)));
        var var_4 = func_4(func_4(func_4(Struct_1(func_4(Struct_1(u_input.d, vec2<i32>(u_input.d, global0.a)), false, Struct_1(var_0.x, global0.b)).e.x, -vec2<i32>(var_0.x, 9262i)), all(select(vec3<bool>(false, false, true), vec3<bool>(true, true, false), vec3<bool>(false, false, false))), func_4(Struct_1(global0.b.x, vec2<i32>(var_0.x, var_0.x)), true, func_4(Struct_1(-1i, global0.b), true, Struct_1(0i, var_0.ww)).d).c).c, false, func_4(func_4(Struct_1(var_0.x, global0.b), true, Struct_1(-1i, global0.b)).d, all(select(vec2<bool>(true, true), vec2<bool>(true, false), vec2<bool>(false, false))), func_4(Struct_1(22151i, vec2<i32>(0i, var_0.x)), select(false, true, false), Struct_1(45640i, var_0.xy)).d).c).c, true, Struct_1(_wgslsmith_dot_vec4_i32(~abs(var_0), vec4<i32>(i32(-1i) * -1i, -global0.b.x, i32(-1i) * -32467i, global0.b.x)), _wgslsmith_mod_vec2_i32(abs(func_3(vec4<i32>(10168i, i32(-2147483648), 1i, global0.b.x), Struct_2(827f, var_3.x, Struct_1(global0.b.x, var_0.yy), Struct_1(global0.b.x, vec2<i32>(global0.a, u_input.d)), vec2<i32>(20476i, 1i)), vec3<f32>(625f, -385f, -334f), 368f).xx), ~global0.b)));
    }
    var var_2 = _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-1f)))));
    if (!all(!select(vec2<bool>(true, true), vec2<bool>(true, true), true))) {
        let var_3 = Struct_2(_wgslsmith_f_op_f32(max(288f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(-628f, 1629f)) * _wgslsmith_f_op_f32(-2457f)) + _wgslsmith_f_op_f32(-1273f)))), ~(~select(_wgslsmith_dot_vec3_u32(u_input.b, vec3<u32>(u_input.e, u_input.c, u_input.a.x)), u_input.b.x, true)), Struct_1(-u_input.d, _wgslsmith_div_vec2_i32(var_0.zz, vec2<i32>(-u_input.d, 52756i))), func_4(func_4(Struct_1(var_0.x, ~vec2<i32>(-21083i, -22079i)), !any(vec4<bool>(false, true, true, true)), func_4(func_4(Struct_1(var_0.x, var_0.yy), false, Struct_1(37973i, vec2<i32>(2147483647i, -5593i))).d, all(vec3<bool>(false, true, false)), Struct_1(var_0.x, global0.b)).c).d, true, func_4(func_4(func_4(Struct_1(17575i, global0.b), false, Struct_1(u_input.d, var_0.yx)).c, true, func_4(Struct_1(17128i, vec2<i32>(4026i, global0.b.x)), true, Struct_1(-7798i, global0.b)).c).d, false, func_4(Struct_1(global0.b.x, vec2<i32>(global0.a, global0.b.x)), true, Struct_1(1i, var_0.yz)).d).c).c, vec2<i32>(i32(-1i) * -global0.b.x, global0.b.x ^ func_1(select(vec2<bool>(true, false), vec2<bool>(true, true), false), func_4(Struct_1(-1i, vec2<i32>(-127i, i32(-2147483648))), true, Struct_1(0i, var_0.yz)).d).x));
        var var_4 = select(countOneBits(vec4<u32>(~var_3.b, 0u ^ _wgslsmith_dot_vec3_u32(u_input.b, vec3<u32>(u_input.a.x, 26658u, 4294967295u)), 0u, 0u)), vec4<u32>(_wgslsmith_sub_u32(~4294967295u, _wgslsmith_add_u32(4294967295u, var_3.b)) >> (~countOneBits(var_3.b) % 32u), ~u_input.b.x, ~abs(~4294967295u), u_input.c), select(any(select(select(vec4<bool>(false, true, true, true), vec4<bool>(true, false, false, true), vec4<bool>(true, false, true, false)), select(vec4<bool>(true, false, true, false), vec4<bool>(false, true, true, false), vec4<bool>(true, false, false, false)), select(true, true, false))), false, true));
        var_1 = true;
        var_4 = vec4<u32>(4294967295u, ~_wgslsmith_dot_vec3_u32(reverseBits(~vec3<u32>(1u, 1u, 37270u)), u_input.a), 30793u, ~var_4.x);
        var_2 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-939f - _wgslsmith_f_op_f32(f32(-1f) * -751f)) * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_3.a)));
    }
    let var_3 = _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-966f)));
    var_1 = 4294967295u >= select(4294967295u, abs(~(~1u)), false);
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_f_op_vec4_f32(min(vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(var_3)) * _wgslsmith_f_op_f32(round(1000f))), var_3, 310f, 889f), _wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(1044f, -424f, 854f, -1371f)))))))), _wgslsmith_dot_vec2_i32(countOneBits(vec2<i32>(1i, -19543i)), global0.b), ~_wgslsmith_mod_vec3_u32(u_input.b, vec3<u32>(u_input.a.x, _wgslsmith_dot_vec2_u32(vec2<u32>(u_input.e, u_input.b.x), vec2<u32>(u_input.b.x, u_input.c)), u_input.b.x)));
}

`;