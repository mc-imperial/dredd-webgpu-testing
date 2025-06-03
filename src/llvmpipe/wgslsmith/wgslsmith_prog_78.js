export const input = [246,157,229,4,232,227,57,140,156,9,194,228,84,100,65,254,231,107,150,19,127,92,70,236,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [246,157,229,4,232,227,57,140,156,9,194,228,84,100,65,254,231,107,150,19,127,92,70,236,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[246,157,229,4,232,227,57,140,156,9,194,228,84,100,65,254,231,107,150,19,127,92,70,236]}
// Seed: 14240077297094541795

struct Struct_1 {
    a: vec3<bool>,
    b: u32,
    c: vec2<f32>,
    d: bool,
    e: bool,
}

struct Struct_2 {
    a: Struct_1,
    b: u32,
}

struct Struct_3 {
    a: vec3<i32>,
}

struct UniformBuffer {
    a: u32,
    b: vec2<u32>,
    c: i32,
}

struct StorageBuffer {
    a: i32,
    b: u32,
    c: f32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: bool;

var<private> LOOP_COUNTERS: array<u32, 21>;

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn func_6(arg_0: vec2<bool>, arg_1: i32, arg_2: Struct_2) -> bool {
    global0 = true & !all(arg_2.a.a.xx);
    for (var var_0 = 28500i; var_0 != -1i; ) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        for (var var_1 = i32(-2147483648); false; var_1 += 1i) {
            if (LOOP_COUNTERS[1u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
            var var_2 = arg_2.a;
        }
        continue;
    }
    loop {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        var var_0 = Struct_1(arg_2.a.a, _wgslsmith_dot_vec4_u32(abs(select(vec4<u32>(1u, 23642u, u_input.b.x, 1u), vec4<u32>(u_input.a, arg_2.a.b, 1u, 78063u), vec4<bool>(arg_2.a.a.x, arg_0.x, arg_0.x, false))), _wgslsmith_sub_vec4_u32(~vec4<u32>(arg_2.a.b, arg_2.b, u_input.a, u_input.b.x), select(vec4<u32>(u_input.b.x, u_input.a, u_input.b.x, u_input.b.x), vec4<u32>(38799u, arg_2.a.b, 86886u, 1327u), arg_2.a.d))) >> ((~_wgslsmith_dot_vec2_u32(u_input.b, vec2<u32>(u_input.a, u_input.b.x)) ^ _wgslsmith_dot_vec2_u32(vec2<u32>(90162u, arg_2.a.b), vec2<u32>(arg_2.a.b, 4294967295u))) % 32u), arg_2.a.c, all(!select(select(vec4<bool>(true, arg_0.x, true, arg_0.x), vec4<bool>(arg_2.a.a.x, arg_0.x, arg_0.x, false), vec4<bool>(true, arg_0.x, arg_0.x, true)), vec4<bool>(false, true, arg_2.a.a.x, arg_0.x), any(vec2<bool>(arg_2.a.e, false)))), !all(select(vec4<bool>(true, arg_2.a.e, true, arg_0.x), select(vec4<bool>(arg_2.a.d, arg_2.a.e, arg_2.a.a.x, arg_0.x), vec4<bool>(true, true, false, true), vec4<bool>(false, true, arg_0.x, false)), true)));
    }
    loop {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        let var_0 = Struct_2(arg_2.a, arg_2.a.b);
    }
    for (var var_0 = 0i; any(select(vec4<bool>(!(arg_2.a.d | true), true, all(select(vec4<bool>(arg_0.x, true, arg_2.a.a.x, false), vec4<bool>(arg_0.x, false, arg_2.a.a.x, arg_0.x), vec4<bool>(false, arg_0.x, arg_0.x, true))), arg_0.x), select(select(vec4<bool>(arg_0.x, false, arg_0.x, arg_0.x), select(vec4<bool>(arg_2.a.d, arg_2.a.d, true, true), vec4<bool>(true, arg_0.x, arg_2.a.a.x, arg_2.a.a.x), true), !vec4<bool>(true, arg_0.x, arg_0.x, arg_0.x)), select(select(vec4<bool>(arg_0.x, true, true, true), vec4<bool>(arg_2.a.d, true, arg_0.x, false), false), !vec4<bool>(arg_2.a.a.x, true, arg_2.a.a.x, arg_2.a.a.x), select(vec4<bool>(false, false, arg_2.a.a.x, arg_2.a.e), vec4<bool>(arg_0.x, true, true, arg_0.x), vec4<bool>(true, true, true, false))), true), _wgslsmith_div_f32(_wgslsmith_f_op_f32(ceil(1000f)), _wgslsmith_div_f32(arg_2.a.c.x, -887f)) <= _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(select(-148f, arg_2.a.c.x, arg_2.a.d)), _wgslsmith_f_op_f32(-1000f), arg_2.a.e)))); ) {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
    }
    return true;
}

fn func_5() -> bool {
    switch (-firstLeadingBit(select(-_wgslsmith_mult_i32(u_input.c, -37766i), -31910i, true))) {
        case 0i: {
        }
        default: {
            for (; ; ) {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                global0 = select(func_6(!(!select(vec2<bool>(true, false), vec2<bool>(true, true), vec2<bool>(true, true))), i32(-2147483648), Struct_2(Struct_1(select(vec3<bool>(false, false, false), vec3<bool>(true, true, false), vec3<bool>(false, false, false)), u_input.a, _wgslsmith_f_op_vec2_f32(min(vec2<f32>(1000f, 904f), vec2<f32>(710f, 305f))), select(false, false, false), true), 15597u)), !(!func_6(vec2<bool>(true, false), u_input.c, Struct_2(Struct_1(vec3<bool>(true, true, false), 0u, vec2<f32>(1331f, 806f), false, true), u_input.b.x)) & !all(vec2<bool>(false, true))), false);
                continue;
            }
            var var_0 = abs(_wgslsmith_dot_vec2_i32(countOneBits(vec2<i32>(_wgslsmith_add_i32(u_input.c, u_input.c), ~(-21319i))), vec2<i32>(firstTrailingBit(-u_input.c), ~(-1i))));
            let var_1 = 36469u;
        }
    }
    var var_0 = Struct_3(-_wgslsmith_sub_vec3_i32(abs(_wgslsmith_sub_vec3_i32(vec3<i32>(u_input.c, i32(-2147483648), i32(-2147483648)), vec3<i32>(-34381i, 20781i, u_input.c))), _wgslsmith_mult_vec3_i32(vec3<i32>(u_input.c, u_input.c, 1i), max(vec3<i32>(-1i, u_input.c, 2147483647i), vec3<i32>(1i, 1i, u_input.c)))));
    let var_1 = Struct_3(_wgslsmith_mod_vec3_i32(vec3<i32>(-(var_0.a.x << (u_input.a % 32u)), -43631i, -_wgslsmith_clamp_i32(18489i, i32(-2147483648), var_0.a.x)), abs(var_0.a)));
    loop {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        loop {
            if (LOOP_COUNTERS[7u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
            let var_2 = Struct_2(Struct_1(vec3<bool>(true, u_input.a > min(8224u, 0u), true), abs(~(~6658u)), vec2<f32>(-1187f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-165f) - _wgslsmith_f_op_f32(sign(512f)))), false, true), u_input.a);
            var var_3 = Struct_2(var_2.a, ~u_input.b.x);
            var var_4 = Struct_1(var_3.a.a, select(~var_3.a.b, 4294967295u & (~0u & _wgslsmith_mod_u32(var_2.a.b, 18858u)), true), var_3.a.c, all(!vec3<bool>(false, var_3.a.e, any(vec4<bool>(false, true, true, var_3.a.a.x)))), var_2.a.e);
        }
        var var_2 = Struct_2(Struct_1(!vec3<bool>(true, 26694i <= var_1.a.x, false), ~abs(~u_input.b.x), _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(step(vec2<f32>(1f, 1f), _wgslsmith_f_op_vec2_f32(-vec2<f32>(-2135f, -935f)))), _wgslsmith_f_op_vec2_f32(_wgslsmith_div_vec2_f32(vec2<f32>(373f, 1000f), vec2<f32>(467f, 2598f)) - _wgslsmith_f_op_vec2_f32(vec2<f32>(-1036f, -817f) - vec2<f32>(687f, 875f)))), !(!all(vec3<bool>(false, true, true))), true != any(select(vec2<bool>(false, true), vec2<bool>(true, false), vec2<bool>(true, true)))), ~countOneBits(u_input.a));
    }
    var var_2 = Struct_3(vec3<i32>(min(_wgslsmith_mult_i32(var_0.a.x, i32(-2147483648)), -(u_input.c >> (u_input.b.x % 32u))), _wgslsmith_dot_vec4_i32(_wgslsmith_clamp_vec4_i32(~vec4<i32>(u_input.c, -20620i, -1i, var_1.a.x), vec4<i32>(var_1.a.x, 11377i, i32(-2147483648), u_input.c), firstLeadingBit(vec4<i32>(48948i, -26673i, -1i, -16180i))), vec4<i32>(i32(-1i) * -27370i, ~var_0.a.x, _wgslsmith_div_i32(-6529i, u_input.c), _wgslsmith_dot_vec4_i32(vec4<i32>(24765i, -1i, 1i, u_input.c), vec4<i32>(-1i, u_input.c, 2147483647i, -4012i)))), u_input.c >> (~(u_input.b.x << (0u % 32u)) % 32u)));
    return _wgslsmith_clamp_i32(var_2.a.x, var_1.a.x, 2147483647i) < -var_1.a.x;
}

fn func_4() -> bool {
    global0 = all(select(vec4<bool>(any(select(vec3<bool>(true, true, false), vec3<bool>(false, true, true), false)), any(vec2<bool>(true, false)), func_5(), true), vec4<bool>(true, all(vec4<bool>(false, false, true, true)), true, true), !select(vec4<bool>(true, true, true, true), select(vec4<bool>(false, false, true, false), vec4<bool>(false, false, true, true), false), u_input.c < -41852i)));
    for (var var_0 = -1i; var_0 >= 2147483647i; ) {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        break;
    }
    var var_0 = Struct_3(-reverseBits(vec3<i32>(u_input.c, ~(-1i), -568i)));
    let var_1 = any(select(!select(select(vec3<bool>(false, true, true), vec3<bool>(false, false, true), vec3<bool>(false, true, false)), select(vec3<bool>(false, true, false), vec3<bool>(true, false, false), false), all(vec2<bool>(true, false))), vec3<bool>(true, min(84755u, u_input.a) < ~0u, any(vec4<bool>(false, false, true, true))), select(select(select(vec3<bool>(true, false, true), vec3<bool>(true, true, true), vec3<bool>(true, true, true)), select(vec3<bool>(true, true, true), vec3<bool>(true, true, false), vec3<bool>(false, true, false)), true), vec3<bool>(true, true, true), true)));
    for (; _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(1000f)) - 253f)), 1272f) <= _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(sign(-613f)))), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(881f - -1265f))))); ) {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        let var_2 = !vec4<bool>(select(true, !func_6(vec2<bool>(var_1, var_1), i32(-2147483648), Struct_2(Struct_1(vec3<bool>(false, var_1, false), u_input.a, vec2<f32>(-440f, 586f), var_1, var_1), u_input.a)), false), var_1, var_1, var_1);
        var var_3 = (~4294967295u << (u_input.b.x % 32u)) & _wgslsmith_dot_vec3_u32(_wgslsmith_div_vec3_u32(vec3<u32>(u_input.b.x << (u_input.a % 32u), ~u_input.a, _wgslsmith_dot_vec3_u32(vec3<u32>(4294967295u, u_input.a, u_input.b.x), vec3<u32>(u_input.a, u_input.a, 1u))), vec3<u32>(61071u, 1u, u_input.a >> (4294967295u % 32u))), max(_wgslsmith_sub_vec3_u32(abs(vec3<u32>(0u, u_input.b.x, u_input.a)), ~vec3<u32>(38438u, 2288u, u_input.a)), vec3<u32>(u_input.b.x, 59879u, ~4294967295u)));
        var var_4 = Struct_2(Struct_1(!select(var_2.wzy, !var_2.zyz, true), ~(~97769u), _wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(min(vec2<f32>(649f, 187f), vec2<f32>(540f, -1130f))), vec2<f32>(1239f, -100f))), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(floor(vec2<f32>(-336f, 769f))) - _wgslsmith_f_op_vec2_f32(sign(vec2<f32>(1786f, 783f)))), !var_2.x)), var_1 || false, !(!var_1)), firstLeadingBit(66716u));
        break;
    }
    return true && ((u_input.a << (_wgslsmith_mult_u32(1u | u_input.b.x, 4294967295u | u_input.a) % 32u)) != _wgslsmith_sub_u32(4294967295u, 26447u));
}

fn func_7(arg_0: Struct_1, arg_1: vec3<f32>, arg_2: f32) -> Struct_1 {
    var var_0 = arg_0.b;
    var var_1 = u_input.c;
    var var_2 = vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_2 + arg_0.c.x)) * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_0.c.x) * -310f)) - _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-arg_1.x)))))), _wgslsmith_f_op_f32(select(arg_2, -305f, false)));
    let var_3 = arg_0.a;
    let var_4 = true;
    return arg_0;
}

fn func_3() -> Struct_1 {
    switch (i32(-1i) * -47397i) {
        case 7098i: {
            let var_0 = func_7(Struct_1(vec3<bool>(true, true, true), max(~_wgslsmith_mod_u32(1u, u_input.b.x), 0u), _wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(-1550f + -985f), 487f) * vec2<f32>(_wgslsmith_f_op_f32(f32(-1f) * -1598f), _wgslsmith_f_op_f32(-342f))), func_4(), true), vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_div_f32(968f, -1179f) + 225f) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-369f))), -183f, _wgslsmith_f_op_f32(f32(-1f) * -529f)), _wgslsmith_f_op_f32(f32(-1f) * -1997f));
        }
        case i32(-2147483648): {
            return func_7(Struct_1(vec3<bool>(true, true, all(select(vec3<bool>(false, false, true), vec3<bool>(true, true, false), true))), u_input.a, _wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-1752f, 311f)))), select(true, all(vec3<bool>(true, true, false)) | false, true), any(func_7(Struct_1(vec3<bool>(false, true, true), 1u, vec2<f32>(122f, -960f), false, false), _wgslsmith_f_op_vec3_f32(step(vec3<f32>(-956f, -1892f, 1449f), vec3<f32>(-871f, 719f, 1667f))), _wgslsmith_f_op_f32(f32(-1f) * -515f)).a)), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1400f, 677f, 1471f))) + vec3<f32>(529f, _wgslsmith_f_op_f32(f32(-1f) * -1767f), -1716f))), -464f);
        }
        case 2147483647i: {
        }
        case 8178i: {
            for (var var_0 = -25255i; true; var_0 -= 1i) {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
            }
            if (_wgslsmith_mult_u32(_wgslsmith_div_u32(26280u, ~u_input.a), ~18980u) != _wgslsmith_mult_u32(select(_wgslsmith_mod_u32(u_input.b.x, 4294967295u) | firstLeadingBit(u_input.a), _wgslsmith_mod_u32(_wgslsmith_dot_vec2_u32(vec2<u32>(68941u, u_input.a), u_input.b), u_input.b.x), ~u_input.b.x == ~1u), u_input.b.x)) {
                var var_0 = func_7(Struct_1(select(select(select(vec3<bool>(false, false, true), vec3<bool>(false, false, true), vec3<bool>(true, true, true)), vec3<bool>(true, true, true), func_6(vec2<bool>(true, true), u_input.c, Struct_2(Struct_1(vec3<bool>(false, true, false), 15381u, vec2<f32>(-386f, -643f), true, true), u_input.b.x))), select(vec3<bool>(true, true, true), vec3<bool>(false, false, true), select(vec3<bool>(true, false, true), vec3<bool>(false, true, false), vec3<bool>(false, true, true))), vec3<bool>(false, u_input.b.x > u_input.b.x, true)), _wgslsmith_div_u32(min(u_input.b.x, 33467u) << (~53575u % 32u), ~u_input.a | 4294967295u), _wgslsmith_f_op_vec2_f32(-_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-783f, -869f)), _wgslsmith_f_op_vec2_f32(max(vec2<f32>(-1446f, 1000f), vec2<f32>(-329f, 1447f))))), true, !any(vec3<bool>(true, true, true))), _wgslsmith_f_op_vec3_f32(select(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(abs(vec3<f32>(816f, -548f, -744f))), _wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(857f, 1183f, 899f))))), _wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_div_vec3_f32(vec3<f32>(-855f, -549f, -387f), vec3<f32>(-1749f, -1255f, -1000f))))), vec3<f32>(_wgslsmith_f_op_f32(step(_wgslsmith_div_f32(-1813f, -362f), _wgslsmith_f_op_f32(-1554f - 401f))), 347f, _wgslsmith_f_op_f32(_wgslsmith_div_f32(534f, -301f) - _wgslsmith_f_op_f32(f32(-1f) * -252f))), select(func_7(func_7(Struct_1(vec3<bool>(false, false, false), 1619u, vec2<f32>(641f, -153f), true, false), vec3<f32>(-422f, 1000f, -977f), -459f), _wgslsmith_f_op_vec3_f32(floor(vec3<f32>(-482f, 1000f, 156f))), -2292f).a, select(vec3<bool>(true, false, true), vec3<bool>(true, true, true), vec3<bool>(true, true, true)), any(vec2<bool>(true, true))))), _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(trunc(1f)))));
                let var_1 = _wgslsmith_f_op_f32(f32(-1f) * -1322f);
                let var_2 = Struct_3(abs(_wgslsmith_div_vec3_i32(vec3<i32>(countOneBits(u_input.c), i32(-1i) * -47177i, -1i), -vec3<i32>(13469i, 57635i, u_input.c))));
                global0 = func_5();
            }
            let var_0 = vec4<i32>(-(~firstTrailingBit(1i)), ~(-abs(_wgslsmith_div_i32(u_input.c, -20668i))), abs(2147483647i), 0i);
            var var_1 = select(!select(vec3<bool>(true, true, true), vec3<bool>(true, false, true), all(vec2<bool>(true, true))), vec3<bool>(true, true, true), (true | ((u_input.a >> (u_input.b.x % 32u)) <= u_input.b.x)) & !(!(0i == u_input.c)));
            loop {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                let var_2 = Struct_2(func_7(func_7(func_7(func_7(Struct_1(vec3<bool>(var_1.x, false, true), 4294967295u, vec2<f32>(1182f, -411f), var_1.x, var_1.x), vec3<f32>(-113f, -453f, -349f), -1619f), vec3<f32>(407f, -1362f, -1037f), -823f), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-709f, 1000f, -2228f)) * _wgslsmith_f_op_vec3_f32(round(vec3<f32>(-296f, 250f, 1000f)))), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(f32(-1f) * -119f), _wgslsmith_f_op_f32(abs(364f))))), _wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(vec3<f32>(-1768f, -1766f, 1658f), vec3<f32>(-104f, 357f, -3003f)) - vec3<f32>(1388f, 375f, -455f)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(-1331f))))), _wgslsmith_mult_u32(_wgslsmith_div_u32(~u_input.a, u_input.a << (~1u % 32u)), u_input.b.x));
            }
        }
        default: {
            var var_0 = select(true | !(!any(vec3<bool>(true, false, false))), !(((4294967295u > u_input.a) | true) && true), !any(select(vec3<bool>(true, true, true), vec3<bool>(true, true, true), select(vec3<bool>(false, true, false), vec3<bool>(false, true, true), vec3<bool>(false, true, true)))));
            if (!all(!select(select(vec4<bool>(true, true, true, false), vec4<bool>(false, false, false, false), vec4<bool>(false, true, false, false)), vec4<bool>(true, true, true, true), true))) {
                let var_1 = vec2<u32>(u_input.b.x, ~reverseBits(1u));
            }
        }
    }
    let var_0 = _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(1f + -175f), _wgslsmith_f_op_f32(min(-389f, _wgslsmith_f_op_f32(-1380f)))));
    return Struct_1(vec3<bool>(true, true, true), 0u, _wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(1495f, var_0)))) - _wgslsmith_f_op_vec2_f32(round(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-229f, var_0))))), _wgslsmith_f_op_vec2_f32(round(vec2<f32>(_wgslsmith_f_op_f32(-var_0), _wgslsmith_f_op_f32(var_0 * 230f)))), true)), !func_5(), all(vec3<bool>(true, true, true)));
}

fn func_2(arg_0: Struct_3) -> u32 {
    for (; true; ) {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        let var_0 = func_3();
        global0 = var_0.e;
        let var_1 = _wgslsmith_f_op_f32(step(var_0.c.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-var_0.c.x))))));
    }
    if (!(!func_4())) {
        for (var var_0 = i32(-2147483648); var_0 > 12052i; var_0 += 1i) {
            if (LOOP_COUNTERS[13u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
            let var_1 = countOneBits(~countOneBits(vec4<u32>(u_input.a, 0u, 12246u, u_input.b.x) << (vec4<u32>(4294967295u, 0u, u_input.a, 9517u) % vec4<u32>(32u))));
        }
        if (true) {
            global0 = !(~(-15138i) >= _wgslsmith_mod_i32(10652i, max(~(-1i), _wgslsmith_mod_i32(u_input.c, arg_0.a.x))));
            let var_0 = !any(select(select(vec4<bool>(true, false, true, false), vec4<bool>(true, false, false, true), select(vec4<bool>(true, true, true, false), vec4<bool>(true, true, true, true), vec4<bool>(false, true, false, true))), vec4<bool>(true, true, true, true), vec4<bool>(true, true, false, arg_0.a.x < arg_0.a.x)));
            global0 = func_3().d;
        }
    }
    var var_0 = u_input.a;
    global0 = !all(!vec4<bool>(all(vec4<bool>(true, true, true, true)), true, any(vec4<bool>(false, true, true, false)), true));
    var var_1 = func_3();
    return ~u_input.a;
}

fn func_8(arg_0: bool, arg_1: vec4<u32>) -> Struct_3 {
    let var_0 = Struct_2(Struct_1(func_3().a, u_input.a, _wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(-1000f), -416f)), func_6(select(!vec2<bool>(false, arg_0), !vec2<bool>(arg_0, true), false), 54551i, Struct_2(Struct_1(vec3<bool>(true, arg_0, arg_0), 48632u, vec2<f32>(-1078f, 1502f), false, true), 0u)), (_wgslsmith_dot_vec4_u32(vec4<u32>(0u, 1u, u_input.a, arg_1.x), vec4<u32>(arg_1.x, 33759u, arg_1.x, arg_1.x)) > ~1u) && !(u_input.b.x > u_input.b.x)), 4294967295u);
    let var_1 = Struct_3(-(vec3<i32>(_wgslsmith_div_i32(u_input.c, u_input.c), _wgslsmith_clamp_i32(u_input.c, 55191i, 26447i), -u_input.c) >> (_wgslsmith_div_vec3_u32(~arg_1.xyz, max(arg_1.yyx, vec3<u32>(u_input.a, arg_1.x, 4294967295u))) % vec3<u32>(32u))));
    global0 = var_0.a.d;
    switch (53984i) {
        case 28627i: {
            global0 = true;
        }
        case -17312i: {
            var var_2 = Struct_1(vec3<bool>((~u_input.c << (~u_input.a % 32u)) >= (countOneBits(var_1.a.x) << (arg_1.x % 32u)), false, arg_0), arg_1.x, _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(step(vec2<f32>(-377f, 861f), var_0.a.c)))) + _wgslsmith_div_vec2_f32(var_0.a.c, _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(round(var_0.a.c))))), var_0.a.d, func_3().d);
            var var_3 = ~1u;
            loop {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                continue;
            }
            if (var_2.a.x) {
                let var_4 = func_7(Struct_1(var_2.a, 1u, _wgslsmith_f_op_vec2_f32(_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(var_0.a.c.x, -1744f)), var_0.a.c) * _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(var_0.a.c.x, -762f)))), var_2.a.x | true, true), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(2229f, var_0.a.c.x, -1000f) * vec3<f32>(var_2.c.x, 560f, var_0.a.c.x)) * _wgslsmith_f_op_vec3_f32(max(vec3<f32>(-343f, -1000f, 2542f), vec3<f32>(1000f, var_0.a.c.x, -1000f)))) * _wgslsmith_f_op_vec3_f32(vec3<f32>(1057f, 376f, 535f) + _wgslsmith_f_op_vec3_f32(exp2(vec3<f32>(var_0.a.c.x, var_2.c.x, 275f)))))), var_2.c.x);
                var var_5 = var_1.a ^ -min(reverseBits(firstLeadingBit(var_1.a)), min(_wgslsmith_clamp_vec3_i32(var_1.a, vec3<i32>(i32(-2147483648), -54569i, i32(-2147483648)), var_1.a), vec3<i32>(1i, var_1.a.x, u_input.c)));
                var_3 = var_2.b;
                let var_6 = Struct_3(-reverseBits(~vec3<i32>(i32(-2147483648), u_input.c, -23652i)));
            }
        }
        case 0i: {
            var var_2 = var_0.a.a.yx;
            var var_3 = abs(arg_1.wwx);
            if (any(!func_3().a)) {
                var var_4 = vec4<u32>(_wgslsmith_dot_vec3_u32(vec3<u32>(_wgslsmith_mod_u32(var_0.a.b, u_input.a) | arg_1.x, 1u, _wgslsmith_mod_u32(abs(arg_1.x), arg_1.x)), vec3<u32>(~(u_input.b.x << (0u % 32u)), u_input.b.x, 4294967295u)), _wgslsmith_clamp_u32(arg_1.x, _wgslsmith_clamp_u32(arg_1.x, 8649u, ~(u_input.a | var_0.a.b)), ~u_input.b.x), ~3971u, reverseBits(u_input.b.x));
                var var_5 = vec3<f32>(var_0.a.c.x, _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-var_0.a.c.x))), _wgslsmith_f_op_f32(var_0.a.c.x - -1000f));
                let var_6 = var_0;
            }
            let var_4 = arg_0;
            if (~(var_3.x >> (9776u % 32u)) < ~u_input.b.x) {
                var var_5 = -_wgslsmith_mult_i32(u_input.c, -1i);
                let var_6 = ~vec2<i32>(1i, _wgslsmith_sub_i32(1i, ~_wgslsmith_mod_i32(var_1.a.x, var_1.a.x)));
            }
        }
        default: {
            var var_2 = !(!(!func_7(var_0.a, vec3<f32>(var_0.a.c.x, 576f, 536f), -362f).e));
            var var_3 = var_1;
        }
    }
    let var_2 = select(var_0.a.a.yz, !vec2<bool>(func_7(var_0.a, _wgslsmith_f_op_vec3_f32(-vec3<f32>(286f, -2242f, -2059f)), _wgslsmith_f_op_f32(round(var_0.a.c.x))).a.x, false), !(!var_0.a.a.zz));
    return Struct_3(select(-var_1.a, var_1.a, _wgslsmith_div_f32(_wgslsmith_f_op_f32(exp2(var_0.a.c.x)), _wgslsmith_f_op_f32(-var_0.a.c.x)) > _wgslsmith_f_op_f32(-var_0.a.c.x)));
}

fn func_1() -> Struct_2 {
    for (var var_0 = 2147483647i; var_0 == 1i; var_0 -= 1i) {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
        var var_1 = false;
        let var_2 = func_8(abs(~u_input.b.x) > _wgslsmith_add_u32(_wgslsmith_mod_u32(func_2(Struct_3(vec3<i32>(-55620i, u_input.c, -86584i))), reverseBits(u_input.a)), ~u_input.a), ~(~vec4<u32>(32617u, _wgslsmith_sub_u32(u_input.b.x, u_input.a), 0u, min(u_input.b.x, u_input.b.x))));
        let var_3 = Struct_2(func_3(), ~abs(_wgslsmith_sub_u32(u_input.a, u_input.a << (u_input.a % 32u))));
        switch (var_2.a.x) {
            case 1i: {
                break;
            }
            case 39356i: {
                var_0 = i32(-1i) * -3439i;
                var var_4 = vec4<bool>(true, !all(!(!vec4<bool>(var_3.a.d, var_3.a.a.x, var_3.a.a.x, true))), var_3.a.a.x, (var_3.a.a.x && var_3.a.e) || true);
                continue;
            }
            case -13910i: {
            }
            case -9580i: {
            }
            default: {
                let var_4 = !(_wgslsmith_f_op_f32(-349f) > var_3.a.c.x);
                var var_5 = Struct_2(func_3(), 1u);
                var_0 = min(select(i32(-1i) * -25642i, var_2.a.x, false), u_input.c);
            }
        }
        for (var var_4 = 1i; var_4 <= -22649i; ) {
            if (LOOP_COUNTERS[16u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        }
    }
    loop {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
        let var_0 = i32(-2147483648);
    }
    var var_0 = reverseBits(u_input.b.x);
    if (!((_wgslsmith_sub_i32(u_input.c << (1u % 32u), u_input.c & i32(-2147483648)) <= u_input.c) && true)) {
    }
    for (var var_1 = 0i; ; var_1 -= 1i) {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        switch (i32(-1i) * -9270i) {
            case -66929i: {
                continue;
            }
            case -59999i: {
            }
            case 31386i: {
                break;
            }
            default: {
                global0 = func_4();
            }
        }
        switch (u_input.c) {
            case 24143i: {
                return Struct_2(Struct_1(select(vec3<bool>(false, false, true), vec3<bool>(false, func_5(), true), false), 1u, _wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(_wgslsmith_f_op_f32(-1246f * 794f), _wgslsmith_f_op_f32(round(1026f))))), !func_5(), all(vec4<bool>(true, true, true, true))), u_input.b.x);
            }
            case -1i: {
                let var_2 = Struct_2(func_3(), u_input.a);
                let var_3 = Struct_2(Struct_1(!select(var_2.a.a, !vec3<bool>(var_2.a.e, false, var_2.a.e), !vec3<bool>(false, true, var_2.a.d)), 24748u, _wgslsmith_f_op_vec2_f32(-_wgslsmith_div_vec2_f32(vec2<f32>(var_2.a.c.x, var_2.a.c.x), _wgslsmith_f_op_vec2_f32(vec2<f32>(var_2.a.c.x, var_2.a.c.x) * vec2<f32>(510f, var_2.a.c.x)))), var_2.a.d, false), ~(~_wgslsmith_clamp_u32(u_input.a, u_input.b.x, var_2.b)));
                continue;
            }
            default: {
                let var_2 = func_8(false, vec4<u32>(func_7(func_7(func_7(Struct_1(vec3<bool>(true, true, true), u_input.b.x, vec2<f32>(2634f, -848f), true, false), vec3<f32>(-1119f, 373f, -242f), -381f), vec3<f32>(1247f, -1394f, -1000f), _wgslsmith_div_f32(506f, -1099f)), vec3<f32>(_wgslsmith_f_op_f32(sign(-546f)), _wgslsmith_f_op_f32(f32(-1f) * -426f), _wgslsmith_f_op_f32(f32(-1f) * -1163f)), _wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -460f), 1639f)).b, ~(~u_input.a) ^ func_2(func_8(false, vec4<u32>(u_input.a, 5845u, 4294967295u, u_input.b.x))), _wgslsmith_dot_vec2_u32(reverseBits(firstTrailingBit(u_input.b)), _wgslsmith_div_vec2_u32(~u_input.b, vec2<u32>(0u, u_input.b.x))), ~(~(u_input.b.x & u_input.a))));
                continue;
            }
        }
    }
    return Struct_2(func_7(Struct_1(func_7(func_3(), _wgslsmith_f_op_vec3_f32(select(vec3<f32>(1663f, -1244f, 157f), vec3<f32>(1000f, 405f, -1564f), vec3<bool>(true, false, true))), _wgslsmith_f_op_f32(-704f)).a, _wgslsmith_div_u32(func_7(Struct_1(vec3<bool>(false, false, false), 4294967295u, vec2<f32>(2554f, 1603f), true, false), vec3<f32>(532f, 2098f, -1167f), -826f).b, ~4294967295u), vec2<f32>(_wgslsmith_f_op_f32(f32(-1f) * -1382f), _wgslsmith_div_f32(1029f, -284f)), all(vec3<bool>(true, true, true)), true), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(step(vec3<f32>(-167f, 1185f, -223f), _wgslsmith_div_vec3_f32(vec3<f32>(1000f, 251f, -1906f), vec3<f32>(1599f, -465f, 1000f))))), _wgslsmith_f_op_f32(f32(-1f) * -1381f)), ~20554u);
}

@compute
@workgroup_size(1)
fn main() {
    let var_0 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(abs(_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(980f, -1000f) + vec2<f32>(-1271f, 137f)), _wgslsmith_f_op_vec2_f32(vec2<f32>(140f, -750f) - vec2<f32>(330f, 1000f)))))));
    for (var var_1 = -58318i; all(vec2<bool>(true, true)); ) {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
        break;
    }
    let var_1 = func_1();
    for (; ; ) {
        if (LOOP_COUNTERS[20u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
        var var_2 = Struct_3(~(_wgslsmith_sub_vec3_i32(vec3<i32>(0i, -13687i, u_input.c), _wgslsmith_sub_vec3_i32(vec3<i32>(u_input.c, 5965i, u_input.c), vec3<i32>(-12316i, 2147483647i, 0i))) << ((vec3<u32>(u_input.b.x, var_1.a.b, var_1.a.b) >> (~vec3<u32>(var_1.b, u_input.b.x, 1u) % vec3<u32>(32u))) % vec3<u32>(32u))));
        var var_3 = select(vec2<bool>(false, any(vec3<bool>(false, true, var_1.a.d))), !var_1.a.a.zx, all(select(var_1.a.a, !func_3().a, all(!vec4<bool>(false, var_1.a.a.x, var_1.a.d, false)))));
        continue;
    }
    let var_2 = _wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(exp2(vec4<f32>(501f, var_0.x, 1581f, -1834f)))), _wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(vec4<f32>(-148f, 712f, 170f, 617f), vec4<f32>(-1380f, -1316f, var_0.x, 638f)) - vec4<f32>(1f, 1f, 1f, 1f)))) * _wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(_wgslsmith_f_op_f32(-var_0.x), _wgslsmith_f_op_f32(1000f * var_1.a.c.x), var_1.a.c.x, -691f))))));
    global0 = var_1.a.d;
    let x = u_input.a;
    s_output = StorageBuffer(u_input.c << (abs(max(countOneBits(u_input.a), u_input.a)) % 32u), _wgslsmith_dot_vec3_u32(countOneBits(~vec3<u32>(49166u, 1u, 75671u)), _wgslsmith_sub_vec3_u32(_wgslsmith_div_vec3_u32(~vec3<u32>(1u, 1u, var_1.a.b), _wgslsmith_mult_vec3_u32(vec3<u32>(13811u, 0u, var_1.b), vec3<u32>(31259u, var_1.b, u_input.a))), _wgslsmith_div_vec3_u32(vec3<u32>(50200u, var_1.a.b, var_1.b) ^ vec3<u32>(17107u, var_1.a.b, u_input.b.x), ~vec3<u32>(1904u, 39789u, u_input.a)))), 457f);
}

`;