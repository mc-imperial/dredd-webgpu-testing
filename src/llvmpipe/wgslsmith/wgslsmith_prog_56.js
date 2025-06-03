export const input = [98,219,45,165,242,229,143,240,104,151,104,218,37,156,143,181,75,232,96,214,128,134,98,114,160,126,11,5,141,105,74,46,168,100,122,130,72,121,84,26,130,252,200,42,181,112,200,217,219,59,226,33,13,16,109,61,201,18,57,135,39,30,240,18];
export const expected = [98,219,45,165,242,229,143,240,104,151,104,218,37,156,143,181,75,232,96,214,128,134,98,114,160,126,11,5,141,105,74,46,168,100,122,130,72,121,84,26,130,252,200,42,181,112,200,217,219,59,226,33,13,16,109,61,201,18,57,135,39,30,240,18];
export const shaderCode = ` 
 // {"0:0":[98,219,45,165,242,229,143,240,104,151,104,218,37,156,143,181,75,232,96,214,128,134,98,114,160,126,11,5,141,105,74,46,168,100,122,130,72,121,84,26,130,252,200,42,181,112,200,217,219,59,226,33,13,16,109,61,201,18,57,135,39,30,240,18]}
// Seed: 410236828725391228

struct Struct_1 {
    a: vec3<bool>,
}

struct UniformBuffer {
    a: u32,
    b: vec4<u32>,
    c: vec4<u32>,
    d: vec2<i32>,
}

struct StorageBuffer {
    a: vec2<i32>,
    b: vec4<f32>,
    c: vec4<u32>,
    d: vec4<i32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<f32, 11>;

var<private> LOOP_COUNTERS: array<u32, 18>;

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
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

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn func_2() -> vec2<i32> {
    return vec2<i32>(_wgslsmith_sub_i32(i32(-1i) * -16933i, firstLeadingBit(34227i)), -1i);
}

fn func_6(arg_0: Struct_1, arg_1: i32, arg_2: f32, arg_3: vec4<f32>) -> vec4<bool> {
    global0 = array<f32, 11>();
    global0 = array<f32, 11>();
    switch (_wgslsmith_mod_i32(countOneBits(arg_1), -(reverseBits(u_input.d.x) >> (_wgslsmith_dot_vec3_u32(u_input.c.wzw, vec3<u32>(u_input.b.x, 4294967295u, 4294967295u) ^ vec3<u32>(u_input.c.x, u_input.c.x, u_input.c.x)) % 32u)))) {
        case -20884i: {
            global0 = array<f32, 11>();
            if (arg_0.a.x && (_wgslsmith_sub_i32(_wgslsmith_clamp_i32(func_2().x, u_input.d.x, select(2147483647i, arg_1, arg_0.a.x)), _wgslsmith_dot_vec3_i32(-vec3<i32>(u_input.d.x, arg_1, 8976i), vec3<i32>(arg_1, 35024i, u_input.d.x))) >= arg_1)) {
                let var_0 = u_input.d.x;
            }
        }
        case 2147483647i: {
            var var_0 = u_input.a;
            global0 = array<f32, 11>();
        }
        case 54074i: {
            global0 = array<f32, 11>();
        }
        case -1i: {
            let var_0 = vec4<bool>(arg_0.a.x, false, true, any(select(select(arg_0.a.zx, vec2<bool>(arg_0.a.x, false), true), arg_0.a.zy, arg_0.a.zz)));
            global0 = array<f32, 11>();
            loop {
                if (LOOP_COUNTERS[0u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
                let var_1 = Struct_1(select(!vec3<bool>(var_0.x, var_0.x || false, any(vec2<bool>(false, var_0.x))), var_0.xxx, arg_0.a));
            }
            let var_1 = arg_0;
        }
        default: {
            let var_0 = select(vec4<bool>(true, select(all(select(arg_0.a.xy, vec2<bool>(arg_0.a.x, false), arg_0.a.xz)), select(arg_0.a.x, true, arg_0.a.x) && arg_0.a.x, any(vec2<bool>(true, false))), any(select(!vec4<bool>(false, false, false, arg_0.a.x), vec4<bool>(arg_0.a.x, arg_0.a.x, arg_0.a.x, false), select(vec4<bool>(false, arg_0.a.x, arg_0.a.x, true), vec4<bool>(arg_0.a.x, arg_0.a.x, false, false), vec4<bool>(arg_0.a.x, false, true, false)))), arg_0.a.x), !select(select(!vec4<bool>(false, false, arg_0.a.x, true), vec4<bool>(true, true, true, true), select(vec4<bool>(false, arg_0.a.x, true, arg_0.a.x), vec4<bool>(false, arg_0.a.x, true, false), false)), vec4<bool>(false, all(vec2<bool>(arg_0.a.x, false)), -981f != arg_3.x, arg_0.a.x), select(select(vec4<bool>(arg_0.a.x, arg_0.a.x, true, false), vec4<bool>(false, arg_0.a.x, arg_0.a.x, arg_0.a.x), false), !vec4<bool>(true, true, arg_0.a.x, false), 1256f <= arg_3.x)), !(!(!(!vec4<bool>(true, false, arg_0.a.x, arg_0.a.x)))));
            let var_1 = countOneBits(-u_input.d.x);
        }
    }
    for (; ; ) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        for (var var_0 = i32(-2147483648); all(!(!vec3<bool>(true, arg_0.a.x, false))); var_0 = u_input.d.x) {
            if (LOOP_COUNTERS[2u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            continue;
        }
        let var_0 = ~_wgslsmith_sub_vec4_i32(_wgslsmith_mult_vec4_i32(~_wgslsmith_div_vec4_i32(vec4<i32>(28500i, u_input.d.x, -8459i, u_input.d.x), vec4<i32>(-298i, 0i, -15800i, arg_1)), reverseBits(select(vec4<i32>(u_input.d.x, arg_1, 41995i, u_input.d.x), vec4<i32>(u_input.d.x, u_input.d.x, u_input.d.x, u_input.d.x), arg_0.a.x))), vec4<i32>(2147483647i, ~(-17952i), ~_wgslsmith_dot_vec4_i32(vec4<i32>(-1i, i32(-2147483648), 1i, 1874i), vec4<i32>(2629i, 1i, -7826i, 10263i)), u_input.d.x));
        var var_1 = vec4<i32>(firstLeadingBit(-u_input.d.x), 31013i, ~2147483647i, ~_wgslsmith_add_i32(1i, -1i));
    }
    let var_0 = u_input.b.x;
    return !select(vec4<bool>(false, !(global0[_wgslsmith_index_u32(1u, 11u)] >= -1376f), arg_0.a.x | (1u > u_input.c.x), !arg_0.a.x), select(select(select(vec4<bool>(arg_0.a.x, arg_0.a.x, arg_0.a.x, false), vec4<bool>(true, true, arg_0.a.x, arg_0.a.x), vec4<bool>(arg_0.a.x, arg_0.a.x, true, arg_0.a.x)), select(vec4<bool>(true, arg_0.a.x, false, arg_0.a.x), vec4<bool>(arg_0.a.x, arg_0.a.x, true, true), vec4<bool>(false, false, arg_0.a.x, arg_0.a.x)), any(vec3<bool>(arg_0.a.x, true, true))), !(!vec4<bool>(arg_0.a.x, arg_0.a.x, true, arg_0.a.x)), arg_0.a.x), !vec4<bool>(arg_3.x >= 1215f, arg_0.a.x && arg_0.a.x, all(arg_0.a), all(vec3<bool>(arg_0.a.x, false, false))));
}

fn func_5() -> Struct_1 {
    var var_0 = countOneBits(_wgslsmith_mod_i32(~6507i << (~_wgslsmith_add_u32(u_input.a, 4294967295u) % 32u), firstLeadingBit(_wgslsmith_mult_i32(_wgslsmith_mod_i32(-37329i, u_input.d.x), -u_input.d.x))));
    var_0 = -62285i | u_input.d.x;
    loop {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
    }
    switch (-countOneBits(~u_input.d.x) ^ (_wgslsmith_clamp_i32(1i, 2147483647i, ~u_input.d.x) >> (~0u % 32u))) {
        case -17025i: {
            loop {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                global0 = array<f32, 11>();
                let var_1 = Struct_1(vec3<bool>(true, 1u <= _wgslsmith_dot_vec3_u32(~u_input.b.wxx, ~vec3<u32>(969u, 0u, 669u)), any(vec4<bool>(true, true, true, true))));
                let var_2 = select(select(!vec4<bool>(!var_1.a.x, var_1.a.x | true, true, true), !(!(!vec4<bool>(var_1.a.x, false, var_1.a.x, var_1.a.x))), vec4<bool>(true & var_1.a.x, true | all(vec2<bool>(var_1.a.x, var_1.a.x)), all(var_1.a), true)), select(select(select(vec4<bool>(true, var_1.a.x, true, var_1.a.x), !vec4<bool>(false, var_1.a.x, var_1.a.x, var_1.a.x), vec4<bool>(false, true, false, false)), vec4<bool>(var_1.a.x, all(var_1.a.zx), var_1.a.x, !var_1.a.x), !func_6(var_1, 18928i, global0[_wgslsmith_index_u32(u_input.b.x, 11u)], vec4<f32>(global0[_wgslsmith_index_u32(u_input.b.x, 11u)], 851f, global0[_wgslsmith_index_u32(34335u, 11u)], global0[_wgslsmith_index_u32(76576u, 11u)]))), select(!vec4<bool>(false, false, var_1.a.x, var_1.a.x), !select(vec4<bool>(false, var_1.a.x, var_1.a.x, var_1.a.x), vec4<bool>(var_1.a.x, true, true, true), vec4<bool>(var_1.a.x, var_1.a.x, var_1.a.x, var_1.a.x)), -12225i <= reverseBits(u_input.d.x)), var_1.a.x), any(!vec2<bool>(true, var_1.a.x)));
            }
            if (true) {
                var_0 = _wgslsmith_clamp_i32(-31817i, u_input.d.x, -u_input.d.x & u_input.d.x);
                let var_1 = vec2<u32>(_wgslsmith_clamp_u32(u_input.a, u_input.b.x, 87423u), _wgslsmith_dot_vec3_u32(vec3<u32>(~u_input.a, _wgslsmith_dot_vec2_u32(vec2<u32>(u_input.c.x, 1u), u_input.c.wx), _wgslsmith_dot_vec4_u32(vec4<u32>(u_input.c.x, u_input.b.x, 4294967295u, u_input.c.x), ~u_input.b)), reverseBits(u_input.c.wyw)));
            }
            for (var var_1: i32; false; var_1 -= 1i) {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                break;
            }
            for (var var_1 = -6399i; var_1 >= 1385i; var_1 = _wgslsmith_sub_i32(-_wgslsmith_mult_i32(_wgslsmith_mult_i32(u_input.d.x, u_input.d.x | 46905i), -countOneBits(u_input.d.x)), _wgslsmith_add_i32(_wgslsmith_mult_i32(abs(1i), u_input.d.x), u_input.d.x))) {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                global0 = array<f32, 11>();
                continue;
            }
        }
        case -2753i: {
            if (true) {
                let var_1 = Struct_1(vec3<bool>(any(vec3<bool>(true, true, true)), any(vec3<bool>(true, true, true)), false));
                let var_2 = ~u_input.c.wy;
            }
            let var_1 = 120f;
            global0 = array<f32, 11>();
            global0 = array<f32, 11>();
        }
        default: {
        }
    }
    for (; ; ) {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        var var_1 = Struct_1(!(!func_6(Struct_1(vec3<bool>(true, false, true)), u_input.d.x, _wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(47607u, 11u)]), _wgslsmith_f_op_vec4_f32(round(vec4<f32>(global0[_wgslsmith_index_u32(1u, 11u)], 988f, global0[_wgslsmith_index_u32(57792u, 11u)], global0[_wgslsmith_index_u32(4294967295u, 11u)])))).zxw));
        continue;
    }
    return Struct_1(vec3<bool>(false, !any(select(vec2<bool>(true, true), vec2<bool>(false, true), vec2<bool>(false, false))), any(select(vec3<bool>(true, false, true), vec3<bool>(true, true, false), false)) || any(func_6(Struct_1(vec3<bool>(true, true, true)), u_input.d.x, global0[_wgslsmith_index_u32(u_input.b.x, 11u)], vec4<f32>(-477f, -451f, 224f, global0[_wgslsmith_index_u32(u_input.c.x, 11u)])).wy)));
}

fn func_4(arg_0: vec2<bool>) -> bool {
    var var_0 = func_5();
    var var_1 = global0[_wgslsmith_index_u32(33585u, 11u)];
    for (var var_2 = u_input.d.x; var_2 < -20756i; var_2 -= 1i) {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        var var_3 = firstLeadingBit(firstTrailingBit(vec4<i32>(-1223i, i32(-1i) * -2147483647i, -17679i, countOneBits(-u_input.d.x))));
        let var_4 = Struct_1(vec3<bool>(any(var_0.a.yz), all(vec2<bool>(any(vec4<bool>(arg_0.x, arg_0.x, false, false)), !arg_0.x)), global0[_wgslsmith_index_u32(_wgslsmith_dot_vec4_u32(~vec4<u32>(u_input.b.x, 49116u, 4294967295u, u_input.c.x), vec4<u32>(u_input.a, 1u, 0u, u_input.c.x)), 11u)] != 890f));
        break;
    }
    var var_2 = Struct_1(var_0.a);
    loop {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        var_1 = _wgslsmith_f_op_f32(select(global0[_wgslsmith_index_u32(_wgslsmith_dot_vec4_u32(abs(u_input.c), _wgslsmith_mult_vec4_u32(u_input.b, _wgslsmith_mult_vec4_u32(_wgslsmith_clamp_vec4_u32(vec4<u32>(u_input.c.x, 17732u, u_input.a, u_input.a), u_input.c, vec4<u32>(u_input.a, 2760u, 4294967295u, u_input.b.x)), vec4<u32>(u_input.b.x, u_input.a, u_input.b.x, 0u)))), 11u)], _wgslsmith_f_op_f32(ceil(global0[_wgslsmith_index_u32(~u_input.c.x, 11u)])), (_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(u_input.a, 11u)])) < -248f) && var_2.a.x));
        var var_3 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(abs(_wgslsmith_div_vec2_f32(vec2<f32>(225f, -617f), vec2<f32>(global0[_wgslsmith_index_u32(61057u, 11u)], 1394f)))), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(round(vec2<f32>(global0[_wgslsmith_index_u32(u_input.c.x, 11u)], -2340f))) - _wgslsmith_f_op_vec2_f32(max(vec2<f32>(global0[_wgslsmith_index_u32(1u, 11u)], 1156f), vec2<f32>(1168f, global0[_wgslsmith_index_u32(1u, 11u)]))))))));
    }
    return arg_0.x;
}

fn func_3(arg_0: vec2<i32>, arg_1: u32, arg_2: bool) -> Struct_1 {
    var var_0 = vec4<i32>(min(abs(arg_0.x), ~1i) ^ ~u_input.d.x, reverseBits(-arg_0.x), -28763i, u_input.d.x);
    loop {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        continue;
    }
    let var_1 = _wgslsmith_add_vec2_i32(firstLeadingBit(~arg_0), arg_0);
    var_0 = select(~(~(~(~vec4<i32>(u_input.d.x, var_1.x, arg_0.x, 56076i)))), vec4<i32>(var_1.x, ~countOneBits(_wgslsmith_dot_vec3_i32(var_0.yxy, var_0.zyw)), (i32(-1i) * -10101i) & u_input.d.x, 9831i), !vec4<bool>(func_4(vec2<bool>(arg_2, true)), arg_2, global0[_wgslsmith_index_u32(~arg_1, 11u)] <= global0[_wgslsmith_index_u32(min(0u, arg_1), 11u)], false));
    var_0 = ~_wgslsmith_add_vec4_i32(~(-abs(vec4<i32>(i32(-2147483648), var_1.x, 0i, 11602i))), vec4<i32>(-var_0.x & select(arg_0.x, var_1.x, false), -u_input.d.x, i32(-2147483648), min(var_1.x, u_input.d.x) >> (0u % 32u)));
    return func_5();
}

fn func_7(arg_0: f32, arg_1: Struct_1, arg_2: Struct_1, arg_3: u32) -> Struct_1 {
    loop {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        continue;
    }
    if (all(arg_2.a.xz)) {
        for (var var_0 = -1i; ; var_0 += 1i) {
            if (LOOP_COUNTERS[12u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
            break;
        }
    }
    global0 = array<f32, 11>();
    var var_0 = min(_wgslsmith_mod_i32(~(-23993i), ~_wgslsmith_add_i32(_wgslsmith_sub_i32(u_input.d.x, u_input.d.x), i32(-2147483648))), -3444i);
    var var_1 = arg_2;
    return Struct_1(func_6(arg_2, u_input.d.x, -1218f, _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(select(vec4<f32>(global0[_wgslsmith_index_u32(14661u, 11u)], arg_0, -762f, -1716f), _wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(arg_0, arg_0, global0[_wgslsmith_index_u32(4294967295u, 11u)], global0[_wgslsmith_index_u32(u_input.c.x, 11u)]))), !arg_2.a.x)), _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(floor(vec4<f32>(882f, arg_0, 949f, 1375f))), vec4<f32>(-1056f, -620f, -828f, 967f), any(vec2<bool>(arg_1.a.x, false)))), _wgslsmith_f_op_f32(353f * arg_0) <= 1265f))).yxw);
}

fn func_1(arg_0: vec2<i32>, arg_1: f32) -> u32 {
    let var_0 = _wgslsmith_mult_i32(u_input.d.x, -u_input.d.x);
    loop {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        let var_1 = func_7(_wgslsmith_f_op_f32(-887f * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-215f - _wgslsmith_f_op_f32(sign(252f))) * global0[_wgslsmith_index_u32(abs(_wgslsmith_add_u32(4294967295u, 0u)), 11u)])), func_3(countOneBits(func_2()), u_input.c.x, true), Struct_1(vec3<bool>(func_6(Struct_1(vec3<bool>(true, false, true)), -arg_0.x, 291f, _wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_1, arg_1, global0[_wgslsmith_index_u32(u_input.c.x, 11u)], -1847f))).x, false, true)), u_input.a);
        loop {
            if (LOOP_COUNTERS[14u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        }
        var var_2 = 22270u;
        let var_3 = var_1;
    }
    if (true) {
    }
    var var_1 = func_5();
    var var_2 = _wgslsmith_mult_i32(arg_0.x, 2147483647i) >> (~(~_wgslsmith_add_u32(100611u, ~u_input.c.x)) % 32u);
    return 20408u;
}

@compute
@workgroup_size(1)
fn main() {
    let var_0 = ~_wgslsmith_sub_i32(-(~u_input.d.x >> (func_1(vec2<i32>(-2442i, u_input.d.x), 701f) % 32u)), ~_wgslsmith_mod_i32(~(i32(-2147483648)), abs(u_input.d.x)));
    global0 = array<f32, 11>();
    global0 = array<f32, 11>();
    for (; func_6(Struct_1(func_3(min(-vec2<i32>(38394i, 5716i), u_input.d), 31354u, !func_4(vec2<bool>(true, true))).a), u_input.d.x, 1f, _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(min(vec4<f32>(_wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(u_input.b.x, 11u)]), _wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(u_input.c.x, 11u)]), _wgslsmith_f_op_f32(-248f * 197f), _wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(1u, 11u)])), _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(exp2(vec4<f32>(global0[_wgslsmith_index_u32(2170u, 11u)], 1186f, -1942f, global0[_wgslsmith_index_u32(u_input.c.x, 11u)]))), _wgslsmith_f_op_vec4_f32(vec4<f32>(global0[_wgslsmith_index_u32(1u, 11u)], global0[_wgslsmith_index_u32(u_input.c.x, 11u)], global0[_wgslsmith_index_u32(u_input.c.x, 11u)], global0[_wgslsmith_index_u32(1u, 11u)]) + vec4<f32>(1220f, -149f, global0[_wgslsmith_index_u32(u_input.c.x, 11u)], -576f)), true)))) + vec4<f32>(-614f, _wgslsmith_f_op_f32(trunc(global0[_wgslsmith_index_u32(1818u, 11u)])), _wgslsmith_f_op_f32(step(global0[_wgslsmith_index_u32(u_input.a, 11u)], _wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(u_input.a, 11u)] - -1112f))), _wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(abs(u_input.c.x), 11u)])))).x; ) {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
        var var_1 = countOneBits(~u_input.d.x);
        let var_2 = u_input.c;
    }
    loop {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        global0 = array<f32, 11>();
        global0 = array<f32, 11>();
        var var_1 = func_7(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-1099f))), func_5(), Struct_1(vec3<bool>(all(vec4<bool>(false, false, true, false)), true, false)), u_input.a);
        continue;
    }
    for (var var_1 = u_input.d.x; func_7(-872f, Struct_1(func_5().a), Struct_1(func_3(vec2<i32>(44867i, var_0), ~abs(4294967295u), true).a), ~_wgslsmith_dot_vec3_u32(~(u_input.c.zww ^ u_input.c.zxz), ~vec3<u32>(17805u, u_input.b.x, u_input.c.x))).a.x; ) {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
        break;
    }
    if (false) {
        var var_1 = !select(vec4<bool>(true, true, func_4(select(vec2<bool>(false, true), vec2<bool>(true, false), vec2<bool>(true, true))), all(vec4<bool>(true, true, true, true))), vec4<bool>(true, 66548i < u_input.d.x, true, true), true);
    }
    global0 = array<f32, 11>();
    var var_1 = select(select(vec3<bool>(all(vec4<bool>(true, false, true, false)), true, true), vec3<bool>(true, false, func_6(func_7(global0[_wgslsmith_index_u32(u_input.c.x, 11u)], Struct_1(vec3<bool>(false, true, false)), Struct_1(vec3<bool>(true, false, false)), u_input.a), u_input.d.x, _wgslsmith_div_f32(-658f, -308f), _wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(-1836f, global0[_wgslsmith_index_u32(u_input.a, 11u)], 332f, global0[_wgslsmith_index_u32(1u, 11u)])))).x), !(true || all(vec2<bool>(false, false)))), func_7(global0[_wgslsmith_index_u32(_wgslsmith_mult_u32(select(max(53622u, u_input.c.x), _wgslsmith_mult_u32(u_input.b.x, u_input.b.x), true), ~26005u), 11u)], func_3(_wgslsmith_mult_vec2_i32(-vec2<i32>(u_input.d.x, var_0), u_input.d), u_input.c.x, false), Struct_1(vec3<bool>(true, true, true)), 20133u).a, func_6(Struct_1(func_3(u_input.d, u_input.a, true).a), 42315i, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-150f * global0[_wgslsmith_index_u32(u_input.c.x, 11u)])) - global0[_wgslsmith_index_u32(reverseBits(abs(1u)), 11u)]), _wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(-vec4<f32>(global0[_wgslsmith_index_u32(u_input.a, 11u)], global0[_wgslsmith_index_u32(0u, 11u)], -1131f, global0[_wgslsmith_index_u32(u_input.b.x, 11u)]))))).xzx);
    let x = u_input.a;
    s_output = StorageBuffer(u_input.d, _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(sign(vec4<f32>(_wgslsmith_f_op_f32(min(-1418f, global0[_wgslsmith_index_u32(u_input.a, 11u)])), -236f, _wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(4294967295u, 11u)]), -877f)))), vec4<u32>(8311u, 4294967295u, 2724u, u_input.c.x), vec4<i32>(33870i, var_0, _wgslsmith_dot_vec4_i32(~_wgslsmith_mod_vec4_i32(vec4<i32>(u_input.d.x, -18465i, var_0, var_0), vec4<i32>(u_input.d.x, 0i, var_0, 1i)), max(_wgslsmith_clamp_vec4_i32(vec4<i32>(-60688i, var_0, var_0, var_0), vec4<i32>(var_0, i32(-2147483648), u_input.d.x, u_input.d.x), vec4<i32>(0i, var_0, -7066i, u_input.d.x)), vec4<i32>(-3580i, u_input.d.x, u_input.d.x, -18145i))), _wgslsmith_dot_vec2_i32(vec2<i32>(_wgslsmith_dot_vec4_i32(vec4<i32>(-37310i, u_input.d.x, u_input.d.x, -23071i), vec4<i32>(2147483647i, -30942i, u_input.d.x, -1i)), select(var_0, var_0, var_1.x)), u_input.d)));
}

`;