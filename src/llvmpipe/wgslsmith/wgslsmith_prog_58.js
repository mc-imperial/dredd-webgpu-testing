export const input = [113,51,105,216,169,109,174,140,49,146,219,128,27,207,222,151,215,64,156,246,171,216,228,113,145,237,107,145,210,7,211,182,16,51,10,86,33,203,60,192,57,118,178,216,219,94,27,144,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [113,51,105,216,169,109,174,140,49,146,219,128,27,207,222,151,215,64,156,246,171,216,228,113,145,237,107,145,210,7,211,182,16,51,10,86,33,203,60,192,57,118,178,216,219,94,27,144,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[113,51,105,216,169,109,174,140,49,146,219,128,27,207,222,151,215,64,156,246,171,216,228,113,145,237,107,145,210,7,211,182,16,51,10,86,33,203,60,192,57,118,178,216,219,94,27,144]}
// Seed: 5634912446755019030

struct Struct_1 {
    a: vec4<f32>,
    b: vec4<u32>,
    c: vec2<i32>,
    d: u32,
}

struct Struct_2 {
    a: u32,
    b: bool,
}

struct Struct_3 {
    a: vec4<bool>,
    b: Struct_1,
    c: i32,
}

struct UniformBuffer {
    a: i32,
    b: vec4<u32>,
    c: i32,
    d: i32,
    e: u32,
}

struct StorageBuffer {
    a: vec2<f32>,
    b: vec3<f32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<u32, 2> = array<u32, 2>(17852u, 1u);

var<private> global1: array<vec3<f32>, 21>;

var<private> LOOP_COUNTERS: array<u32, 26>;

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn func_6(arg_0: i32, arg_1: vec2<f32>, arg_2: Struct_1) -> i32 {
    global1 = array<vec3<f32>, 21>();
    let var_0 = _wgslsmith_dot_vec3_i32(~(vec3<i32>(u_input.a, reverseBits(arg_0), arg_2.c.x) | -_wgslsmith_div_vec3_i32(vec3<i32>(arg_2.c.x, i32(-2147483648), i32(-2147483648)), vec3<i32>(u_input.a, arg_2.c.x, 78028i))), ~_wgslsmith_mod_vec3_i32((vec3<i32>(arg_0, arg_2.c.x, -32267i) | vec3<i32>(0i, 2147483647i, arg_2.c.x)) | vec3<i32>(arg_2.c.x, u_input.c, i32(-2147483648)), _wgslsmith_clamp_vec3_i32(~vec3<i32>(u_input.d, arg_0, 2147483647i), vec3<i32>(-10494i, arg_2.c.x, -61404i) & vec3<i32>(arg_2.c.x, -69399i, u_input.c), ~vec3<i32>(16279i, arg_2.c.x, arg_2.c.x))));
    var var_1 = Struct_3(select(select(vec4<bool>(true, true, true, true), !select(vec4<bool>(true, true, false, false), vec4<bool>(true, false, false, true), vec4<bool>(true, false, true, false)), true), select(!select(vec4<bool>(true, true, false, false), vec4<bool>(true, false, false, false), vec4<bool>(false, false, true, false)), !select(vec4<bool>(false, false, true, false), vec4<bool>(false, false, true, true), vec4<bool>(true, false, false, false)), false), true), arg_2, -(i32(-1i) * -(-17460i ^ var_0)));
    let var_2 = Struct_2(arg_2.b.x, true);
    global0 = array<u32, 2>();
    return i32(-2147483648);
}

fn func_5() -> bool {
    if (false) {
        global0 = array<u32, 2>();
        if (true) {
            global1 = array<vec3<f32>, 21>();
            global0 = array<u32, 2>();
            global1 = array<vec3<f32>, 21>();
        }
        var var_0 = Struct_3(!vec4<bool>(true && all(vec4<bool>(true, false, true, false)), abs(u_input.c) == u_input.a, select(false, any(vec4<bool>(false, false, false, false)), false), true), Struct_1(_wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(-658f, _wgslsmith_f_op_f32(f32(-1f) * -656f), _wgslsmith_f_op_f32(f32(-1f) * -551f), _wgslsmith_f_op_f32(-285f)))), ~(~min(vec4<u32>(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.e, 2u)], 2u)], 2u)], 52836u, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(0u, 2u)], 2u)], 25577u), vec4<u32>(global0[_wgslsmith_index_u32(1u, 2u)], global0[_wgslsmith_index_u32(1u, 2u)], u_input.b.x, 11270u))), _wgslsmith_mod_vec2_i32(~vec2<i32>(878i, u_input.c) & vec2<i32>(1i, 50902i), vec2<i32>(~52935i, 0i)), min(global0[_wgslsmith_index_u32(select(global0[_wgslsmith_index_u32(4294967295u, 2u)] << (21369u % 32u), global0[_wgslsmith_index_u32(u_input.b.x, 2u)], false), 2u)], ~(~4294967295u))), func_6(select(1i, abs(_wgslsmith_div_i32(u_input.d, 28224i)), true), _wgslsmith_f_op_vec2_f32(-vec2<f32>(1f, 1f)), Struct_1(vec4<f32>(2090f, 711f, _wgslsmith_f_op_f32(floor(622f)), _wgslsmith_f_op_f32(541f * -279f)), select(firstTrailingBit(u_input.b), vec4<u32>(global0[_wgslsmith_index_u32(17394u, 2u)], global0[_wgslsmith_index_u32(62952u, 2u)], global0[_wgslsmith_index_u32(6348u, 2u)], 1610u), any(vec3<bool>(true, false, true))), -vec2<i32>(u_input.d, -435i), 1u)));
    }
    let var_0 = Struct_1(vec4<f32>(899f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -260f) - 1f)), 725f, _wgslsmith_f_op_f32(f32(-1f) * -186f)), vec4<u32>(_wgslsmith_div_u32(~(~u_input.b.x), ~countOneBits(41171u)), 26798u, abs(7520u), reverseBits(~_wgslsmith_dot_vec2_u32(u_input.b.zy, u_input.b.xz))), abs(firstLeadingBit(~(vec2<i32>(u_input.c, u_input.c) >> (u_input.b.xz % vec2<u32>(32u))))), 54577u);
    let var_1 = vec3<i32>(~(max(_wgslsmith_clamp_i32(i32(-2147483648), 3305i, 0i), _wgslsmith_add_i32(u_input.d, u_input.c)) >> (abs(reverseBits(24561u)) % 32u)), var_0.c.x, u_input.a);
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        var var_2 = _wgslsmith_f_op_f32(step(var_0.a.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-var_0.a.x))), var_0.a.x, false)) - var_0.a.x)));
    }
    switch (firstLeadingBit(-30106i)) {
        case -67717i: {
            if (true) {
                return true;
            }
            for (; all(!(!(!select(vec3<bool>(false, true, false), vec3<bool>(true, true, false), vec3<bool>(false, false, true))))); ) {
                if (LOOP_COUNTERS[1u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
                global0 = array<u32, 2>();
            }
            var var_2 = Struct_3(vec4<bool>(true, true, true, true), var_0, var_1.x);
            let var_3 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(-1341f, -186f, -1000f, 1000f))), _wgslsmith_f_op_vec4_f32(-var_0.a))), vec4<f32>(var_2.b.a.x, -577f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -341f)), 1683f), var_2.a)));
        }
        default: {
            global1 = array<vec3<f32>, 21>();
            let var_2 = 16172u;
        }
    }
    return true;
}

fn func_4() -> Struct_1 {
    for (var var_0 = -29719i; var_0 < 1i; var_0 = _wgslsmith_div_i32(-u_input.a, u_input.c)) {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        for (var var_1 = -2795i; ; global0 = array<u32, 2>()) {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            break;
        }
        var_0 = u_input.d & (55872i >> (global0[_wgslsmith_index_u32(~firstLeadingBit(4294967295u), 2u)] % 32u));
        let var_1 = _wgslsmith_f_op_vec2_f32(ceil(vec2<f32>(1f, 1f)));
        for (var var_2 = -1i; var_2 != 1i; var_2 += 1i) {
            if (LOOP_COUNTERS[4u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
            continue;
        }
        switch (-19215i) {
            case 0i: {
                let var_2 = func_5();
                break;
            }
            case i32(-2147483648): {
                global0 = array<u32, 2>();
                continue;
            }
            default: {
            }
        }
    }
    switch (select(u_input.c, ~countOneBits(countOneBits(u_input.a)), !select(all(select(vec3<bool>(false, false, false), vec3<bool>(false, true, false), vec3<bool>(true, false, true))), func_5(), true))) {
        case 2147483647i: {
            global1 = array<vec3<f32>, 21>();
            global0 = array<u32, 2>();
        }
        default: {
            loop {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                var var_0 = Struct_1(vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(-516f, -176f))), _wgslsmith_f_op_f32(select(1f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -235f)), !all(vec2<bool>(false, true)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(-277f, -406f)) + _wgslsmith_f_op_f32(-1000f - -307f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-419f))), u_input.b, -vec2<i32>(firstLeadingBit(~u_input.a), -u_input.d), _wgslsmith_clamp_u32(~countOneBits(8508u | global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.b.x, 2u)], 2u)]), global0[_wgslsmith_index_u32(u_input.e, 2u)], ~global0[_wgslsmith_index_u32(~4294967295u << (_wgslsmith_mult_u32(39806u, global0[_wgslsmith_index_u32(4294967295u, 2u)]) % 32u), 2u)]));
                break;
            }
            var var_0 = Struct_1(_wgslsmith_f_op_vec4_f32(vec4<f32>(1f, 1f, 1f, 1f) - _wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(-vec4<f32>(181f, 964f, -1153f, 298f))))))), firstTrailingBit(~(~(u_input.b ^ u_input.b))), abs(-_wgslsmith_clamp_vec2_i32(-vec2<i32>(1i, u_input.c), ~vec2<i32>(-18184i, u_input.a), ~vec2<i32>(u_input.d, u_input.a))), min(~_wgslsmith_mod_u32(global0[_wgslsmith_index_u32(u_input.b.x, 2u)] ^ global0[_wgslsmith_index_u32(u_input.b.x, 2u)], global0[_wgslsmith_index_u32(~38636u, 2u)]), _wgslsmith_dot_vec4_u32(~u_input.b, u_input.b)));
        }
    }
    let var_0 = Struct_1(_wgslsmith_f_op_vec4_f32(vec4<f32>(1f, 1f, 1f, 1f) * vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_div_f32(1268f, -457f) + 2451f), _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(893f - 1197f))), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(ceil(-1065f)))), _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(sign(-514f)))))), u_input.b, reverseBits(-(~vec2<i32>(13039i, u_input.a) | _wgslsmith_mult_vec2_i32(vec2<i32>(u_input.a, u_input.c), vec2<i32>(u_input.d, -17139i)))), _wgslsmith_add_u32(108149u, firstLeadingBit(reverseBits(global0[_wgslsmith_index_u32(15865u, 2u)]) >> (max(1u, u_input.b.x) % 32u))));
    for (var var_1 = -12054i; any(!vec3<bool>(!all(vec2<bool>(false, false)), true, -2153f > _wgslsmith_f_op_f32(abs(var_0.a.x)))); var_1 += 1i) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
    }
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
    }
    return var_0;
}

fn func_3(arg_0: Struct_2, arg_1: Struct_1, arg_2: Struct_3, arg_3: vec3<bool>) -> vec2<bool> {
    let var_0 = _wgslsmith_add_u32(~33800u, ~_wgslsmith_clamp_u32(arg_0.a, 37033u, global0[_wgslsmith_index_u32(arg_1.d, 2u)]));
    switch (38875i) {
        case 0i: {
        }
        case 2444i: {
            if (~((i32(-1i) * -1i) & arg_2.c) <= u_input.d) {
                global1 = array<vec3<f32>, 21>();
                var var_1 = func_4();
            }
            global0 = array<u32, 2>();
            let var_1 = Struct_2(~var_0, false);
        }
        default: {
            var var_1 = -select(-abs(vec3<i32>(-1i, arg_1.c.x, 7074i)), max(min(vec3<i32>(-1i, u_input.a, arg_2.b.c.x), vec3<i32>(arg_1.c.x, -4042i, u_input.a)), ~vec3<i32>(0i, -1i, 4772i)), !select(false, true, arg_2.a.x)) >> (arg_2.b.b.wyw % vec3<u32>(32u));
            loop {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                global0 = array<u32, 2>();
            }
            global1 = array<vec3<f32>, 21>();
        }
    }
    global0 = array<u32, 2>();
    let var_1 = ~_wgslsmith_sub_vec3_u32(~(~min(vec3<u32>(1u, 0u, 4294967295u), vec3<u32>(20948u, arg_2.b.b.x, arg_0.a))), func_4().b.yww);
    if (true) {
        for (; -5354i > arg_1.c.x; ) {
            if (LOOP_COUNTERS[9u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
            break;
        }
        switch (-1i) {
            case 1i: {
                let var_2 = firstTrailingBit(countOneBits(vec2<u32>(_wgslsmith_mult_u32(arg_2.b.b.x, 1u) | 12373u, ~_wgslsmith_clamp_u32(0u, 71573u, 4294967295u))));
                let var_3 = arg_0;
                let var_4 = arg_0.b;
                global0 = array<u32, 2>();
            }
            case 2147483647i: {
                let var_2 = arg_1.c;
            }
            case -65470i: {
                let var_2 = Struct_3(!arg_2.a, func_4(), ~(_wgslsmith_div_i32(arg_2.c >> (4294967295u % 32u), -60456i) >> (global0[_wgslsmith_index_u32(18794u, 2u)] % 32u)));
            }
            case 0i: {
            }
            default: {
                let var_2 = arg_0;
                var var_3 = vec2<f32>(arg_2.b.a.x, _wgslsmith_div_f32(arg_2.b.a.x, _wgslsmith_f_op_f32(exp2(arg_2.b.a.x))));
                global0 = array<u32, 2>();
                global1 = array<vec3<f32>, 21>();
                var var_4 = _wgslsmith_dot_vec2_u32(_wgslsmith_mult_vec2_u32(_wgslsmith_mod_vec2_u32(~vec2<u32>(23831u, u_input.b.x), ~_wgslsmith_mult_vec2_u32(vec2<u32>(arg_0.a, var_1.x), vec2<u32>(35221u, 57313u))), arg_2.b.b.yx), firstTrailingBit(_wgslsmith_mult_vec2_u32(arg_2.b.b.yz, ~u_input.b.xx)));
            }
        }
    }
    return arg_3.zz;
}

fn func_7(arg_0: vec2<f32>) -> Struct_2 {
    var var_0 = ~u_input.b.x;
    let var_1 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(arg_0.x * arg_0.x), arg_0.x);
    for (var var_2 = _wgslsmith_mod_i32(-1i, -28410i ^ _wgslsmith_add_i32(13530i, u_input.a)); true; var_2 += 1i) {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
    }
    var var_2 = ~(vec3<i32>(-1i) * -firstLeadingBit(reverseBits(vec3<i32>(1i, u_input.c, -33068i))));
    loop {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        continue;
    }
    return Struct_2(_wgslsmith_mult_u32(~global0[_wgslsmith_index_u32(43335u, 2u)], u_input.e), !select(false, true, !all(vec2<bool>(true, true))));
}

fn func_2(arg_0: vec3<bool>, arg_1: bool, arg_2: u32, arg_3: i32) -> u32 {
    let var_0 = _wgslsmith_f_op_f32(-135f);
    for (var var_1 = -5537i; var_1 < 1i; ) {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        continue;
    }
    if (arg_1) {
        global0 = array<u32, 2>();
        var var_1 = ~_wgslsmith_mult_i32(u_input.d, ~(i32(-2147483648)));
        let var_2 = func_7(_wgslsmith_f_op_vec2_f32(select(vec2<f32>(_wgslsmith_f_op_f32(var_0 + _wgslsmith_f_op_f32(1000f - 186f)), var_0), _wgslsmith_f_op_vec2_f32(round(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(var_0, var_0) - vec2<f32>(var_0, -314f))))), select(!(!vec2<bool>(arg_0.x, false)), !vec2<bool>(arg_1, false), all(func_3(Struct_2(16040u, true), Struct_1(vec4<f32>(var_0, -900f, var_0, 1182f), u_input.b, vec2<i32>(-48490i, arg_3), 1u), Struct_3(vec4<bool>(false, arg_1, true, true), Struct_1(vec4<f32>(390f, var_0, var_0, -807f), u_input.b, vec2<i32>(arg_3, arg_3), global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.b.x, 2u)], 2u)]), u_input.c), vec3<bool>(arg_0.x, arg_0.x, true)))))));
    }
    var var_1 = !any(func_3(Struct_2(firstLeadingBit(arg_2), func_3(Struct_2(u_input.b.x, false), Struct_1(vec4<f32>(1000f, -1185f, 2706f, var_0), vec4<u32>(0u, 39969u, arg_2, arg_2), vec2<i32>(arg_3, u_input.c), 4294967295u), Struct_3(vec4<bool>(true, true, false, arg_0.x), Struct_1(vec4<f32>(var_0, var_0, 821f, -606f), u_input.b, vec2<i32>(0i, u_input.d), global0[_wgslsmith_index_u32(arg_2, 2u)]), u_input.d), vec3<bool>(arg_0.x, true, false)).x), Struct_1(_wgslsmith_f_op_vec4_f32(round(vec4<f32>(669f, -1042f, -1723f, 233f))), u_input.b, vec2<i32>(i32(-2147483648), u_input.c), ~48332u), Struct_3(select(vec4<bool>(arg_0.x, false, true, true), vec4<bool>(arg_0.x, arg_1, false, arg_1), true), func_4(), 0i), !select(arg_0, arg_0, arg_0)));
    global0 = array<u32, 2>();
    return _wgslsmith_div_u32(29939u, arg_2);
}

fn func_8(arg_0: Struct_2, arg_1: Struct_1) -> Struct_3 {
    var var_0 = vec3<u32>(0u, ~arg_1.d, u_input.b.x);
    let var_1 = arg_0;
    let var_2 = Struct_1(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(ceil(arg_1.a)), vec4<f32>(-120f, arg_1.a.x, arg_1.a.x, -1628f), select(vec4<bool>(arg_0.b, false, arg_0.b, var_1.b), vec4<bool>(false, true, arg_0.b, arg_0.b), false))))), max(_wgslsmith_mod_vec4_u32(func_4().b, firstTrailingBit(abs(arg_1.b))), arg_1.b), max(reverseBits(-arg_1.c & arg_1.c), _wgslsmith_mult_vec2_i32(vec2<i32>(min(15816i, 33445i), -46826i), abs(abs(vec2<i32>(-54941i, arg_1.c.x))))), 1u);
    let var_3 = arg_1;
    let var_4 = var_2;
    return Struct_3(!select(!(!vec4<bool>(true, arg_0.b, false, false)), select(vec4<bool>(true, true, true, true), select(vec4<bool>(var_1.b, arg_0.b, true, true), vec4<bool>(arg_0.b, arg_0.b, var_1.b, true), var_1.b), any(vec4<bool>(var_1.b, arg_0.b, var_1.b, true))), true && all(vec2<bool>(true, arg_0.b))), Struct_1(var_4.a, var_3.b, var_2.c, var_2.b.x), -_wgslsmith_div_i32(_wgslsmith_clamp_i32(_wgslsmith_clamp_i32(-11234i, -24056i, u_input.a), 44062i ^ u_input.c, _wgslsmith_dot_vec3_i32(vec3<i32>(-1i, 25651i, 1i), vec3<i32>(i32(-2147483648), 10609i, arg_1.c.x))), 0i));
}

fn func_9(arg_0: Struct_3) -> Struct_1 {
    for (; arg_0.a.x; ) {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        for (; arg_0.a.x != true; ) {
            if (LOOP_COUNTERS[14u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
            var var_0 = Struct_3(!select(select(vec4<bool>(arg_0.a.x, arg_0.a.x, false, true), vec4<bool>(arg_0.a.x, arg_0.a.x, arg_0.a.x, false), arg_0.a.x & arg_0.a.x), arg_0.a, func_7(_wgslsmith_f_op_vec2_f32(floor(vec2<f32>(293f, arg_0.b.a.x)))).b), Struct_1(arg_0.b.a, ~firstLeadingBit(u_input.b), abs(_wgslsmith_sub_vec2_i32(arg_0.b.c, ~vec2<i32>(-1i, -1i))), 0u), reverseBits(_wgslsmith_sub_i32(func_8(Struct_2(10336u, arg_0.a.x), arg_0.b).b.c.x, 1i)));
            var_0 = func_8(Struct_2(~u_input.e, _wgslsmith_dot_vec2_i32(min(var_0.b.c, vec2<i32>(var_0.c, -37933i)), vec2<i32>(arg_0.b.c.x, -66649i)) < func_8(func_7(var_0.b.a.yz), func_8(Struct_2(4294967295u, false), Struct_1(var_0.b.a, vec4<u32>(55587u, 29452u, var_0.b.b.x, var_0.b.d), vec2<i32>(83026i, var_0.c), 42668u)).b).c), var_0.b);
            global1 = array<vec3<f32>, 21>();
        }
    }
    var var_0 = Struct_1(_wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-arg_0.b.a.x))), 1519f, 482f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(arg_0.b.a.x, arg_0.b.a.x)))) * arg_0.b.a), (_wgslsmith_add_vec4_u32(~u_input.b, vec4<u32>(1u, arg_0.b.b.x, 1u, 4294967295u)) ^ u_input.b) << (abs(firstLeadingBit(vec4<u32>(49267u, 38762u, u_input.e, u_input.e)) >> (abs(vec4<u32>(0u, 0u, arg_0.b.d, arg_0.b.d)) % vec4<u32>(32u))) % vec4<u32>(32u)), -min(vec2<i32>(-u_input.d, arg_0.c), ~(~arg_0.b.c)), func_2(select(vec3<bool>(true, true, true), vec3<bool>(true, true || arg_0.a.x, false), true), false & any(!vec2<bool>(arg_0.a.x, true)), ~u_input.b.x, u_input.c));
    var var_1 = 1u;
    var var_2 = 2147483647i;
    global0 = array<u32, 2>();
    return arg_0.b;
}

fn func_1(arg_0: Struct_2, arg_1: vec4<u32>) -> bool {
    global0 = array<u32, 2>();
    loop {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
        var var_0 = min(select(min(vec4<i32>(25839i, i32(-2147483648), 1i, 1i), ~vec4<i32>(u_input.a, 1850i, 0i, 0i)), select(~vec4<i32>(-7558i, u_input.d, u_input.c, u_input.d) >> (vec4<u32>(arg_0.a, 1u, 15036u, u_input.b.x) % vec4<u32>(32u)), _wgslsmith_div_vec4_i32(vec4<i32>(u_input.a, u_input.a, 0i, u_input.d), vec4<i32>(1i, u_input.c, i32(-2147483648), 0i)) ^ ~vec4<i32>(0i, u_input.c, -3200i, u_input.c), arg_0.b), !vec4<bool>(true, any(vec2<bool>(true, true)), arg_0.b || arg_0.b, false)), firstTrailingBit(~(~(vec4<i32>(-30294i, -1431i, u_input.a, 17705i) >> (vec4<u32>(global0[_wgslsmith_index_u32(11296u, 2u)], 2465u, arg_1.x, u_input.b.x) % vec4<u32>(32u))))));
        for (; ; ) {
            if (LOOP_COUNTERS[16u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
            var var_1 = func_9(func_8(Struct_2(func_2(!vec3<bool>(arg_0.b, arg_0.b, false), any(vec4<bool>(true, arg_0.b, true, true)), reverseBits(1u), var_0.x), arg_0.b), func_4()));
            let var_2 = 522f;
            let var_3 = vec3<bool>(true, arg_0.b, all(!vec4<bool>(all(vec3<bool>(true, true, false)), 44259u == arg_0.a, all(vec4<bool>(arg_0.b, false, arg_0.b, true)), !arg_0.b)));
            var_0 = select(~((abs(vec4<i32>(i32(-2147483648), 35147i, 1i, u_input.a)) | vec4<i32>(0i, u_input.a, var_1.c.x, -23996i)) & ~(-vec4<i32>(var_0.x, 2147483647i, var_0.x, var_1.c.x))), ~vec4<i32>(func_4().c.x, min(_wgslsmith_dot_vec4_i32(vec4<i32>(u_input.a, var_0.x, 18715i, -11280i), vec4<i32>(var_0.x, 7622i, -1i, var_0.x)), i32(-1i) * -14169i), u_input.a >> (_wgslsmith_mod_u32(44174u, 4593u) % 32u), -13829i), select(select(select(select(vec4<bool>(false, false, false, false), vec4<bool>(true, var_3.x, var_3.x, false), var_3.x), vec4<bool>(false, arg_0.b, false, var_3.x), !var_3.x), vec4<bool>(var_3.x, true, !arg_0.b, any(var_3.zz)), arg_0.b), !vec4<bool>(true, true, true, !arg_0.b), all(var_3) || (var_1.c.x > firstLeadingBit(2147483647i))));
        }
        global0 = array<u32, 2>();
        var var_1 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-global1[_wgslsmith_index_u32(~countOneBits(u_input.b.x), 21u)])));
        for (var var_2 = -71690i; var_2 > -2416i; var_1 = vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -1184f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1000f)))), -650f)) {
            if (LOOP_COUNTERS[17u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
            let var_3 = Struct_2(~arg_0.a, abs(_wgslsmith_mult_u32(261u, global0[_wgslsmith_index_u32(1u, 2u)]) & ~arg_1.x) >= ~func_7(var_1.yz).a);
            var var_4 = func_8(arg_0, Struct_1(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(-371f, var_1.x, 930f, var_1.x)))), _wgslsmith_mult_vec4_u32(_wgslsmith_clamp_vec4_u32(~arg_1, vec4<u32>(var_3.a, 1u, 45292u, arg_1.x), countOneBits(vec4<u32>(57040u, 4294967295u, arg_1.x, 14400u))), vec4<u32>(~10341u, min(arg_0.a, u_input.b.x), func_2(vec3<bool>(arg_0.b, true, arg_0.b), var_3.b, global0[_wgslsmith_index_u32(var_3.a, 2u)], var_0.x), 55216u)), firstTrailingBit(select(var_0.yy, vec2<i32>(u_input.c, u_input.d), var_3.b) | -vec2<i32>(2147483647i, u_input.d)), u_input.b.x)).a;
        }
    }
    if (func_8(Struct_2(~global0[_wgslsmith_index_u32(~arg_1.x, 2u)], all(!vec3<bool>(true, false, arg_0.b))), func_9(func_8(func_7(vec2<f32>(1198f, -944f)), Struct_1(vec4<f32>(-225f, -111f, -908f, 904f), vec4<u32>(4294967295u, arg_1.x, arg_1.x, global0[_wgslsmith_index_u32(0u, 2u)]), vec2<i32>(1i, u_input.d), arg_1.x)))).a.x && arg_0.b) {
    }
    switch (func_9(Struct_3(vec4<bool>(arg_0.b, arg_0.b || arg_0.b, arg_0.b, arg_0.b), Struct_1(vec4<f32>(-2039f, _wgslsmith_f_op_f32(ceil(813f)), _wgslsmith_f_op_f32(-1540f + -483f), _wgslsmith_f_op_f32(-1321f - 1090f)), (u_input.b | arg_1) ^ vec4<u32>(global0[_wgslsmith_index_u32(u_input.e, 2u)], 1u, 52592u, 0u), -(~vec2<i32>(-43885i, i32(-2147483648))), 0u), u_input.d)).c.x) {
        default: {
            var var_0 = arg_0.b;
            var var_1 = vec2<i32>(u_input.d & 36206i, _wgslsmith_div_i32(u_input.d, u_input.a));
            if (!(!arg_0.b)) {
                let var_2 = Struct_3(vec4<bool>(any(!vec3<bool>(false, arg_0.b, arg_0.b)), arg_0.b, true, func_3(Struct_2(arg_1.x, arg_0.b | true), Struct_1(vec4<f32>(1f, 1f, 1f, 1f), ~arg_1, ~vec2<i32>(u_input.c, var_1.x), global0[_wgslsmith_index_u32(_wgslsmith_dot_vec2_u32(vec2<u32>(arg_1.x, 1u), vec2<u32>(arg_0.a, 40902u)), 2u)]), Struct_3(vec4<bool>(arg_0.b, arg_0.b, arg_0.b, arg_0.b), func_4(), select(var_1.x, 12987i, arg_0.b)), !func_8(arg_0, Struct_1(vec4<f32>(667f, 523f, -1213f, -260f), u_input.b, vec2<i32>(u_input.c, u_input.c), 70343u)).a.zxx).x), Struct_1(_wgslsmith_f_op_vec4_f32(-func_8(arg_0, func_8(arg_0, Struct_1(vec4<f32>(-427f, 208f, 347f, -756f), vec4<u32>(1u, u_input.b.x, 0u, 4294967295u), vec2<i32>(var_1.x, i32(-2147483648)), arg_0.a)).b).b.a), ~_wgslsmith_sub_vec4_u32(u_input.b, select(arg_1, vec4<u32>(25795u, 4294967295u, 31524u, arg_0.a), vec4<bool>(false, arg_0.b, false, true))), vec2<i32>(_wgslsmith_div_i32(u_input.c, u_input.c), _wgslsmith_dot_vec2_i32(vec2<i32>(var_1.x, var_1.x), vec2<i32>(var_1.x, 2147483647i))) << (select(u_input.b.zw & vec2<u32>(u_input.e, 32569u), ~u_input.b.yz, arg_0.b) % vec2<u32>(32u)), 3895u), -1i);
                let var_3 = func_8(func_7(var_2.b.a.yw), var_2.b);
                let var_4 = 170f;
            }
            for (var var_2 = 65464i; arg_0.b; var_2 -= 1i) {
                if (LOOP_COUNTERS[18u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
                break;
            }
            for (var var_2 = -1i; ; var_2 -= 1i) {
                if (LOOP_COUNTERS[19u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
                var var_3 = -(_wgslsmith_sub_vec3_i32(~vec3<i32>(u_input.a, 25128i, i32(-2147483648)) >> (vec3<u32>(global0[_wgslsmith_index_u32(57131u, 2u)], 38369u, u_input.b.x) % vec3<u32>(32u)), select(~vec3<i32>(42049i, i32(-2147483648), var_1.x), _wgslsmith_add_vec3_i32(vec3<i32>(21128i, var_1.x, -12897i), vec3<i32>(-3916i, -15810i, 60980i)), true)) >> (~(arg_1.yxw & ~vec3<u32>(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(4294967295u, 2u)], 2u)], 1u, 10628u)) % vec3<u32>(32u)));
                var var_4 = vec4<f32>(func_8(func_7(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-2173f, -1577f)) + _wgslsmith_f_op_vec2_f32(vec2<f32>(780f, 754f) + vec2<f32>(-671f, -1000f)))), Struct_1(vec4<f32>(_wgslsmith_div_f32(1004f, -922f), _wgslsmith_f_op_f32(min(1000f, 411f)), _wgslsmith_f_op_f32(f32(-1f) * -715f), _wgslsmith_div_f32(479f, 1000f)), ~vec4<u32>(global0[_wgslsmith_index_u32(4736u, 2u)], 5127u, arg_1.x, 0u), var_3.zz, 47045u)).b.a.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(func_4().a.x * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1957f))) - -2705f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(1000f, -1642f)) - 1162f)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1f))));
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[20u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
        continue;
    }
    return select(!arg_0.b, u_input.e >= 102226u, all(!vec2<bool>(arg_0.b, arg_0.b)));
}

@compute
@workgroup_size(1)
fn main() {
    let var_0 = Struct_3(vec4<bool>(all(select(vec4<bool>(false, true, true, false), vec4<bool>(false, true, false, true), true)), !(!func_1(Struct_2(u_input.b.x, true), vec4<u32>(35087u, global0[_wgslsmith_index_u32(58676u, 2u)], 1342u, u_input.b.x))), func_8(Struct_2(u_input.b.x, u_input.d >= 2147483647i), Struct_1(func_4().a, ~vec4<u32>(8497u, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(43375u, 2u)], 2u)], 0u, global0[_wgslsmith_index_u32(4294967295u, 2u)]), _wgslsmith_mod_vec2_i32(vec2<i32>(-31992i, 13993i), vec2<i32>(u_input.a, u_input.a)), _wgslsmith_sub_u32(global0[_wgslsmith_index_u32(50263u, 2u)], 0u))).a.x, true), func_9(func_8(Struct_2(~u_input.b.x, false), func_9(func_8(Struct_2(25805u, true), Struct_1(vec4<f32>(337f, -495f, 1256f, -1790f), u_input.b, vec2<i32>(u_input.d, 0i), 63067u))))), -func_6(~(-1i), vec2<f32>(1f, _wgslsmith_f_op_f32(f32(-1f) * -581f)), Struct_1(func_8(Struct_2(78695u, false), Struct_1(vec4<f32>(393f, 2362f, 1060f, -581f), vec4<u32>(1u, 51984u, u_input.e, 4030u), vec2<i32>(-13225i, u_input.c), global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(0u, 2u)], 2u)])).b.a, ~vec4<u32>(59479u, 4294967295u, u_input.b.x, 0u), _wgslsmith_sub_vec2_i32(vec2<i32>(-1i, -28706i), vec2<i32>(u_input.c, 2147483647i)), func_2(vec3<bool>(false, true, false), true, 51497u, u_input.a))));
    let var_1 = ~min(1u, func_7(_wgslsmith_f_op_vec2_f32(-func_4().a.zz)).a);
    for (; true; ) {
        if (LOOP_COUNTERS[21u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
    }
    global0 = array<u32, 2>();
    global1 = array<vec3<f32>, 21>();
    loop {
        if (LOOP_COUNTERS[22u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
        let var_2 = func_8(func_7(var_0.b.a.xy), var_0.b).b.a.zxy;
        loop {
            if (LOOP_COUNTERS[23u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
            let var_3 = _wgslsmith_div_vec4_u32(vec4<u32>(1u, 1u, func_7(var_0.b.a.xx).a, 0u), ~_wgslsmith_clamp_vec4_u32(_wgslsmith_div_vec4_u32(vec4<u32>(14762u, var_0.b.b.x, 5695u, 0u), vec4<u32>(121340u, 0u, 25826u, 21398u)), func_8(Struct_2(var_0.b.b.x, var_0.a.x), var_0.b).b.b, ~vec4<u32>(0u, u_input.e, 1836u, 1u)) ^ ((_wgslsmith_add_vec4_u32(var_0.b.b, var_0.b.b) << (vec4<u32>(u_input.e, 17366u, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(1u, 2u)], 2u)], u_input.b.x) % vec4<u32>(32u))) << (vec4<u32>(50544u, 1u >> (var_1 % 32u), 44879u | u_input.e, ~1u) % vec4<u32>(32u))));
            var var_4 = Struct_1(var_0.b.a, ~var_0.b.b, var_0.b.c, u_input.e);
        }
    }
    global1 = array<vec3<f32>, 21>();
    for (var var_2 = 1i; !(var_0.a.x || true); var_2 -= 1i) {
        if (LOOP_COUNTERS[24u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
        loop {
            if (LOOP_COUNTERS[25u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
            var_2 = select(~(i32(-2147483648)), ~(-u_input.c), true);
            var_2 = -23447i;
        }
    }
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-247f, _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-var_0.b.a.x))))), global1[_wgslsmith_index_u32(var_0.b.d, 21u)]);
}

`;