export const input = [189,207,126,43,190,202,54,167,207,230,112,21,223,67,29,112,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [189,207,126,43,190,202,54,167,207,230,112,21,223,67,29,112,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[189,207,126,43,190,202,54,167,207,230,112,21,223,67,29,112]}
// Seed: 12870067535292243947

struct Struct_1 {
    a: i32,
}

struct UniformBuffer {
    a: vec2<i32>,
    b: u32,
    c: i32,
}

struct StorageBuffer {
    a: u32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<vec4<i32>, 22> = array<vec4<i32>, 22>(vec4<i32>(-11000i, -1i, -14634i, -1i), vec4<i32>(-17624i, -29430i, -12223i, i32(-2147483648)), vec4<i32>(7291i, 6423i, -6671i, i32(-2147483648)), vec4<i32>(57100i, 28468i, 33724i, 6113i), vec4<i32>(38693i, 24799i, 1757i, i32(-2147483648)), vec4<i32>(-1i, -14046i, 0i, 2147483647i), vec4<i32>(-70240i, -17101i, 20551i, i32(-2147483648)), vec4<i32>(0i, 9361i, i32(-2147483648), -1i), vec4<i32>(-1i, -52525i, 1i, 1i), vec4<i32>(26895i, i32(-2147483648), -16457i, i32(-2147483648)), vec4<i32>(-74752i, 11613i, 1i, -52063i), vec4<i32>(15978i, 17493i, -25796i, i32(-2147483648)), vec4<i32>(24795i, 42155i, -1i, i32(-2147483648)), vec4<i32>(10944i, -2751i, 2147483647i, 32779i), vec4<i32>(2147483647i, 54006i, 39113i, -22928i), vec4<i32>(23176i, 0i, i32(-2147483648), 41136i), vec4<i32>(i32(-2147483648), 38701i, -54179i, -24444i), vec4<i32>(i32(-2147483648), -65727i, -14054i, -1i), vec4<i32>(2147483647i, 16326i, 8978i, -1i), vec4<i32>(2147483647i, 76576i, 2147483647i, 0i), vec4<i32>(0i, 2147483647i, 37906i, -1i), vec4<i32>(25825i, 19239i, i32(-2147483648), i32(-2147483648)));

var<private> global1: u32;

var<private> LOOP_COUNTERS: array<u32, 18>;

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn func_6(arg_0: Struct_1) -> vec2<bool> {
    if (select(true, !(!any(vec2<bool>(true, true))), select(true, all(vec4<bool>(true, true, true, true)), false && all(vec3<bool>(true, true, true))))) {
        var var_0 = max(~_wgslsmith_add_u32(u_input.b, max(u_input.b, reverseBits(u_input.b))), reverseBits(u_input.b));
        let var_1 = Struct_1(-23665i ^ (-_wgslsmith_add_i32(u_input.c, -1i) << (79612u % 32u)));
    }
    let var_0 = select(true, !all(vec4<bool>(true, true, true, true)), true);
    let var_1 = arg_0;
    global0 = array<vec4<i32>, 22>();
    let var_2 = var_1;
    return vec2<bool>(var_0, var_0);
}

fn func_5() -> i32 {
    for (; false; ) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        switch (u_input.c) {
            case 49549i: {
                let var_0 = true;
                continue;
            }
            case 44501i: {
                var var_0 = true;
            }
            case 29088i: {
                var var_0 = all(!select(func_6(Struct_1(u_input.a.x)), !select(vec2<bool>(false, false), vec2<bool>(false, false), true), false));
                let var_1 = firstTrailingBit(~(vec3<i32>(i32(-1i) * -43858i, i32(-1i) * -4593i, max(2147483647i, -1687i)) >> (vec3<u32>(_wgslsmith_clamp_u32(49371u, u_input.b, u_input.b), ~u_input.b, 1u) % vec3<u32>(32u))));
            }
            default: {
            }
        }
    }
    let var_0 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(min(vec4<f32>(640f, -316f, _wgslsmith_f_op_f32(f32(-1f) * -833f), _wgslsmith_f_op_f32(-505f)), _wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(select(vec4<f32>(586f, -547f, -2301f, -222f), vec4<f32>(-168f, -519f, -518f, 421f), vec4<bool>(true, true, false, true))))))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(-430f, -135f, 514f, -330f)))))) * vec4<f32>(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-953f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1252f * 190f) * _wgslsmith_f_op_f32(707f + -701f))), _wgslsmith_f_op_f32(_wgslsmith_div_f32(863f, _wgslsmith_f_op_f32(ceil(-1667f))) - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-854f) - _wgslsmith_div_f32(420f, -666f))), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-118f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(818f)))))));
    switch (_wgslsmith_dot_vec3_i32(-_wgslsmith_div_vec3_i32(firstLeadingBit(vec3<i32>(-63621i, u_input.c, u_input.a.x)), (vec3<i32>(u_input.c, 32872i, u_input.c) ^ vec3<i32>(u_input.a.x, 9047i, u_input.c)) | -vec3<i32>(u_input.a.x, -1i, 2147483647i)), vec3<i32>(-u_input.c, 0i, ~min(u_input.c, ~2147483647i)))) {
        case -5611i: {
            if (any(!select(vec3<bool>(true, true, true), vec3<bool>(true, true, any(vec3<bool>(true, true, true))), !select(vec3<bool>(true, true, false), vec3<bool>(false, false, true), vec3<bool>(true, true, true))))) {
                let var_1 = ~(~(~(vec3<i32>(-1i, 1i, i32(-2147483648)) ^ vec3<i32>(u_input.c, u_input.a.x, u_input.a.x))) ^ max(vec3<i32>(-46243i | u_input.a.x, abs(u_input.a.x), u_input.c), -firstTrailingBit(vec3<i32>(u_input.c, u_input.a.x, 2147483647i))));
                global0 = array<vec4<i32>, 22>();
                let var_2 = Struct_1(max(var_1.x & firstTrailingBit(select(2147483647i, 0i, true)), var_1.x));
                var var_3 = Struct_1(var_2.a & i32(-2147483648));
            }
        }
        case -4197i: {
            var var_1 = Struct_1(_wgslsmith_add_i32(u_input.a.x, -(_wgslsmith_dot_vec3_i32(vec3<i32>(u_input.c, 1i, -27640i), vec3<i32>(i32(-2147483648), 25611i, u_input.c)) << (~1u % 32u))));
            for (; ; ) {
                if (LOOP_COUNTERS[1u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
                global0 = array<vec4<i32>, 22>();
            }
            for (var var_2 = -firstTrailingBit(u_input.c); _wgslsmith_f_op_f32(floor(1000f)) < _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(var_0.x - var_0.x))); global0 = array<vec4<i32>, 22>()) {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
                var var_3 = select(vec2<u32>(69646u, 39121u), max(vec2<u32>(~u_input.b, ~4294967295u) << (abs(select(vec2<u32>(1u, u_input.b), vec2<u32>(u_input.b, u_input.b), true)) % vec2<u32>(32u)), countOneBits(~(~vec2<u32>(43544u, 1u)))), all(vec3<bool>(~(-49814i) == var_1.a, true, 1u < (0u | u_input.b))));
            }
        }
        case 38237i: {
            let var_1 = Struct_1(-_wgslsmith_add_i32(0i, 0i));
            global0 = array<vec4<i32>, 22>();
            var var_2 = Struct_1(_wgslsmith_add_i32(1i >> (_wgslsmith_sub_u32(max(39365u, u_input.b), ~5434u) % 32u), 1i));
            var_2 = var_1;
            var var_3 = Struct_1(-65935i);
        }
        case 2147483647i: {
            let var_1 = 4294967295u;
        }
        default: {
            var var_1 = Struct_1(_wgslsmith_add_i32(firstTrailingBit(u_input.c), select(5802i, _wgslsmith_dot_vec3_i32(vec3<i32>(u_input.c, u_input.c, u_input.a.x) << (vec3<u32>(u_input.b, 41224u, 20505u) % vec3<u32>(32u)), abs(vec3<i32>(u_input.a.x, 1i, u_input.a.x))), false || (-6907i >= u_input.c))));
            var_1 = Struct_1(0i);
            var_1 = Struct_1(var_1.a);
        }
    }
    var var_1 = Struct_1(i32(-2147483648));
    var_1 = Struct_1(~_wgslsmith_clamp_i32(select(_wgslsmith_sub_i32(u_input.c, -4168i), ~var_1.a, true), 1i, 20578i));
    return i32(-2147483648);
}

fn func_4(arg_0: Struct_1, arg_1: Struct_1, arg_2: Struct_1, arg_3: vec4<bool>) -> vec2<bool> {
    loop {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        switch (firstLeadingBit(arg_2.a)) {
            case 2147483647i: {
                var var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-1f)))));
                let var_1 = firstLeadingBit(~func_5());
                global1 = 0u;
                let var_2 = _wgslsmith_f_op_vec2_f32(min(_wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(min(356f, _wgslsmith_f_op_f32(ceil(-1572f)))), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(413f * 1721f))))), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(abs(vec2<f32>(_wgslsmith_div_f32(-1732f, 1160f), _wgslsmith_div_f32(-1552f, 912f)))) + vec2<f32>(1f, 1f))));
            }
            case 1258i: {
                global1 = u_input.b;
                let var_0 = arg_1;
            }
            case 0i: {
            }
            default: {
                var var_0 = min(-1i, ~_wgslsmith_sub_i32(~(-arg_2.a), _wgslsmith_clamp_i32(firstTrailingBit(i32(-2147483648)), 1i, arg_0.a)));
                var_0 = -arg_0.a;
                let var_1 = Struct_1(-abs(u_input.a.x));
                global0 = array<vec4<i32>, 22>();
                var_0 = i32(-1i) * -5504i;
            }
        }
        loop {
            if (LOOP_COUNTERS[4u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        }
        var var_0 = min(_wgslsmith_add_vec4_i32(global0[_wgslsmith_index_u32(max(u_input.b, min(u_input.b, 35170u)) | u_input.b, 22u)], global0[_wgslsmith_index_u32(893u, 22u)]), global0[_wgslsmith_index_u32(~u_input.b, 22u)]);
        var var_1 = _wgslsmith_f_op_vec2_f32(-vec2<f32>(1802f, _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-596f), _wgslsmith_f_op_f32(-1f), arg_3.x))));
    }
    let var_0 = ~u_input.b;
    global1 = _wgslsmith_mult_u32(_wgslsmith_dot_vec2_u32(vec2<u32>(var_0, u_input.b), vec2<u32>(~1u, ~var_0) | ~vec2<u32>(0u, 4294967295u)), ~u_input.b);
    global1 = 19486u;
    global1 = u_input.b;
    return select(func_6(Struct_1(_wgslsmith_mod_i32(arg_0.a, u_input.c))), arg_3.xx, all(vec3<bool>(arg_3.x, arg_3.x, any(arg_3))));
}

fn func_3(arg_0: Struct_1, arg_1: u32) -> bool {
    let var_0 = 0u;
    var var_1 = ~(~(~(-vec3<i32>(44278i, u_input.c, i32(-2147483648))) << (~vec3<u32>(0u, u_input.b, arg_1) % vec3<u32>(32u))));
    var var_2 = select(select(!(!select(vec2<bool>(true, false), vec2<bool>(false, true), vec2<bool>(true, true))), func_4(arg_0, arg_0, arg_0, vec4<bool>(true, u_input.b <= 27223u, true, true)), vec2<bool>(true, true)), !func_4(arg_0, arg_0, arg_0, select(vec4<bool>(false, false, true, true), vec4<bool>(true, true, true, true), true)), vec2<bool>(all(vec4<bool>(true, true, true, true)), true));
    var var_3 = _wgslsmith_sub_vec4_u32(firstLeadingBit(reverseBits(abs(vec4<u32>(1u, 0u, u_input.b, 4294967295u)))), ~vec4<u32>(_wgslsmith_dot_vec2_u32(vec2<u32>(var_0, arg_1) | vec2<u32>(4294967295u, var_0), ~vec2<u32>(u_input.b, u_input.b)), _wgslsmith_dot_vec4_u32(vec4<u32>(4294967295u, var_0, u_input.b, 1u) << (vec4<u32>(arg_1, arg_1, u_input.b, arg_1) % vec4<u32>(32u)), vec4<u32>(29553u, var_0, arg_1, 4294967295u)), _wgslsmith_mult_u32(u_input.b, _wgslsmith_sub_u32(var_0, 48303u)), 12262u));
    loop {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        var var_4 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(f32(-1f) * -244f), _wgslsmith_f_op_f32(ceil(1658f)))) + 1000f)) < -321f;
        continue;
    }
    return !(!(!(0i > arg_0.a)));
}

fn func_2(arg_0: Struct_1, arg_1: vec3<f32>) -> bool {
    if (true) {
        loop {
            if (LOOP_COUNTERS[6u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
            var var_0 = vec2<bool>(!(func_3(Struct_1(1146i), _wgslsmith_clamp_u32(u_input.b, u_input.b, u_input.b)) || func_3(arg_0, max(0u, u_input.b))), _wgslsmith_mod_u32(_wgslsmith_mult_u32(u_input.b, 4294967295u << (u_input.b % 32u)), 38574u) < u_input.b);
            var_0 = !(!vec2<bool>(!var_0.x, all(vec2<bool>(true, true))));
            global1 = u_input.b;
            var var_1 = _wgslsmith_div_f32(-177f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(1000f, -1117f)) + arg_1.x) * 721f) + _wgslsmith_f_op_f32(sign(274f))));
            var var_2 = !(!((~u_input.b & (u_input.b | 1u)) >= ~firstLeadingBit(4294967295u)));
        }
        var var_0 = select(~(~u_input.b), ~(~(~(~u_input.b))), !(_wgslsmith_add_i32(7683i, _wgslsmith_sub_i32(arg_0.a, 16835i)) >= arg_0.a));
        global1 = ~_wgslsmith_div_u32(_wgslsmith_add_u32(firstLeadingBit(~0u), 1u), abs(4294967295u));
    }
    switch (-1i) {
        default: {
        }
    }
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
    }
    global0 = array<vec4<i32>, 22>();
    var var_0 = (min(~u_input.b << (~21983u % 32u), u_input.b ^ u_input.b) << ((select(0u, abs(1u), all(vec2<bool>(true, true))) | u_input.b) % 32u)) >> (firstTrailingBit(~u_input.b) % 32u);
    return false;
}

fn func_1(arg_0: vec4<i32>) -> Struct_1 {
    let var_0 = _wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(abs(vec4<f32>(-421f, -649f, -220f, -408f))), vec4<f32>(-639f, -826f, 877f, 893f))), _wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(floor(vec4<f32>(-622f, -943f, 147f, 1594f))))))))));
    global0 = array<vec4<i32>, 22>();
    switch (_wgslsmith_dot_vec2_i32(arg_0.wy, vec2<i32>(~_wgslsmith_div_i32(0i, 2147483647i), arg_0.x))) {
        case 4402i: {
            global1 = ~_wgslsmith_div_u32(~u_input.b, 1u);
            var var_1 = min(~(~countOneBits(vec3<u32>(4294967295u, u_input.b, 0u) << (vec3<u32>(1u, 105282u, u_input.b) % vec3<u32>(32u)))), _wgslsmith_add_vec3_u32(~(~vec3<u32>(u_input.b, u_input.b, 5725u)), countOneBits(~(~vec3<u32>(4294967295u, u_input.b, u_input.b)))));
        }
        case 0i: {
            let var_1 = select(vec4<bool>(!(func_2(Struct_1(arg_0.x), vec3<f32>(var_0.x, var_0.x, var_0.x)) != false), (all(vec2<bool>(true, false)) & false) | (1000f <= var_0.x), 0i < -_wgslsmith_add_i32(2147483647i, arg_0.x), any(vec4<bool>(true, true, true, true))), !(!select(select(vec4<bool>(true, true, false, false), vec4<bool>(true, true, false, true), vec4<bool>(false, true, true, false)), select(vec4<bool>(true, false, true, true), vec4<bool>(true, false, false, true), true), true)), true);
        }
        case i32(-2147483648): {
        }
        default: {
            loop {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                let var_1 = Struct_1(_wgslsmith_dot_vec4_i32(firstLeadingBit(global0[_wgslsmith_index_u32(48460u ^ _wgslsmith_sub_u32(54471u, u_input.b), 22u)]), ~global0[_wgslsmith_index_u32(max(~u_input.b, _wgslsmith_dot_vec2_u32(vec2<u32>(2179u, u_input.b), vec2<u32>(u_input.b, u_input.b))), 22u)]));
                var var_2 = _wgslsmith_sub_vec4_u32(max(~min(vec4<u32>(u_input.b, u_input.b, 8978u, u_input.b), vec4<u32>(u_input.b, 0u, 0u, 33970u)), vec4<u32>(1u >> (u_input.b % 32u), abs(u_input.b), u_input.b, u_input.b)), vec4<u32>(u_input.b, 46418u, u_input.b, _wgslsmith_dot_vec4_u32(~vec4<u32>(u_input.b, u_input.b, 87621u, 84411u), _wgslsmith_div_vec4_u32(vec4<u32>(u_input.b, 0u, 23675u, 1u), vec4<u32>(28258u, u_input.b, 71440u, 116191u))))) & _wgslsmith_mult_vec4_u32(min(countOneBits(_wgslsmith_clamp_vec4_u32(vec4<u32>(1u, u_input.b, u_input.b, 24723u), vec4<u32>(1u, u_input.b, 53832u, u_input.b), vec4<u32>(u_input.b, 1u, 29684u, u_input.b))), ~(~vec4<u32>(u_input.b, u_input.b, 28218u, u_input.b))), ~max(firstLeadingBit(vec4<u32>(4294967295u, 1650u, 4294967295u, u_input.b)), ~vec4<u32>(u_input.b, u_input.b, 0u, 0u)));
                global1 = var_2.x;
            }
            for (var var_1 = 41674i; var_1 >= 1i; global1 = u_input.b) {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                break;
            }
            if (true) {
                let var_1 = !vec2<bool>(func_6(Struct_1(-21132i)).x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -516f) + _wgslsmith_div_f32(-1083f, var_0.x)) < 1067f);
                global1 = u_input.b;
                global1 = u_input.b;
            }
            let var_1 = Struct_1(countOneBits(func_5() | -2147483647i) ^ arg_0.x);
            for (var var_2 = ~var_1.a; select(false, any(select(vec4<bool>(true, true, true, true), vec4<bool>(true, all(vec4<bool>(true, false, false, true)), false, true), true)), any(select(vec4<bool>(true, true, true, true), select(select(vec4<bool>(false, true, false, true), vec4<bool>(false, false, false, false), false), select(vec4<bool>(false, false, false, false), vec4<bool>(true, false, true, false), true), true), _wgslsmith_div_i32(-1i, arg_0.x) > (var_1.a | 19235i)))); var_2 += 1i) {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        loop {
            if (LOOP_COUNTERS[12u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
            var var_1 = Struct_1(0i);
            global0 = array<vec4<i32>, 22>();
        }
        switch (-7927i) {
            case 43821i: {
                global1 = u_input.b;
            }
            case -1i: {
                let var_1 = func_4(Struct_1(-1i), Struct_1(arg_0.x), Struct_1(~0i), select(select(vec4<bool>(false, true, true, true), vec4<bool>(false, true, true, func_3(Struct_1(-50521i), u_input.b)), select(vec4<bool>(false, false, false, true), select(vec4<bool>(false, true, true, true), vec4<bool>(true, false, false, false), false), vec4<bool>(true, true, true, true))), select(vec4<bool>(true, true, true, true), !select(vec4<bool>(false, false, true, true), vec4<bool>(true, true, false, true), true), vec4<bool>(true, 765f <= var_0.x, true, true)), select(vec4<bool>(true, true, true, true), vec4<bool>(any(vec3<bool>(false, false, true)), true, true, true), var_0.x > _wgslsmith_f_op_f32(ceil(-1762f)))));
                let var_2 = Struct_1(_wgslsmith_mod_i32(~(~arg_0.x), arg_0.x ^ min(arg_0.x, _wgslsmith_div_i32(u_input.a.x, -6882i))));
                var var_3 = _wgslsmith_dot_vec2_i32(arg_0.xw, arg_0.zy);
                global1 = u_input.b;
            }
            default: {
            }
        }
    }
    var var_1 = Struct_1(_wgslsmith_add_i32(arg_0.x, _wgslsmith_dot_vec2_i32(reverseBits(arg_0.zz), select(vec2<i32>(u_input.c, u_input.a.x) & u_input.a, u_input.a, vec2<bool>(false, true)))));
    return Struct_1(firstTrailingBit(1i));
}

@compute
@workgroup_size(1)
fn main() {
    let var_0 = func_1(abs(global0[_wgslsmith_index_u32(_wgslsmith_mult_u32(~u_input.b, u_input.b), 22u)]) & ((_wgslsmith_div_vec4_i32(global0[_wgslsmith_index_u32(1u, 22u)], vec4<i32>(u_input.c, -25189i, 48469i, u_input.a.x)) ^ vec4<i32>(-35607i, 0i, u_input.c, u_input.c)) & (firstTrailingBit(global0[_wgslsmith_index_u32(u_input.b, 22u)]) << (abs(vec4<u32>(8958u, u_input.b, 1u, u_input.b)) % vec4<u32>(32u)))));
    var var_1 = _wgslsmith_f_op_f32(abs(1f));
    var_1 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -1710f) + _wgslsmith_f_op_f32(-247f))))), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(ceil(-169f)))))))));
    var var_2 = Struct_1(~abs(-32389i));
    global1 = 7304u;
    loop {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        var var_3 = _wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(select(_wgslsmith_div_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(f32(-1f) * -230f), _wgslsmith_f_op_f32(450f - 269f)), vec2<f32>(_wgslsmith_f_op_f32(f32(-1f) * -2068f), _wgslsmith_f_op_f32(-363f))), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(-2201f, -1000f) * _wgslsmith_div_vec2_f32(vec2<f32>(-529f, 731f), vec2<f32>(-1173f, 1000f)))), (any(vec2<bool>(true, true)) == true) != true)), _wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1981f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -477f)))), vec2<bool>(u_input.b <= countOneBits(abs(12455u)), true)));
        for (var var_4 = -12420i; !any(!vec4<bool>(true, true, var_2.a < var_2.a, true)); global0 = array<vec4<i32>, 22>()) {
            if (LOOP_COUNTERS[14u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
            var var_5 = 1i;
            break;
        }
    }
    switch (select(i32(-1i) * -11976i, func_5(), false)) {
        case 8855i: {
        }
        default: {
            for (var var_3 = 0i; var_3 != -47841i; var_3 += 1i) {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
                continue;
            }
            let var_3 = vec4<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(ceil(-1864f)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(1816f)) - _wgslsmith_f_op_f32(select(1000f, 1138f, false))) * -286f)), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(482f + 889f), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(-709f)) + -922f))), true)), 432f, -1128f);
            for (; ; ) {
                if (LOOP_COUNTERS[16u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
                let var_4 = var_0;
                let var_5 = firstLeadingBit(~_wgslsmith_sub_vec2_i32(firstLeadingBit(u_input.a), ~vec2<i32>(-41240i, 56677i)) & (firstTrailingBit(~vec2<i32>(28180i, var_4.a)) << (firstLeadingBit(~vec2<u32>(u_input.b, 0u)) % vec2<u32>(32u))));
                var_1 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(f32(-1f) * -489f))) * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(var_3.x + _wgslsmith_f_op_f32(f32(-1f) * -665f)) * _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(f32(-1f) * -701f), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(floor(var_3.x))))))));
            }
            loop {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(var_3.x - var_3.x)) + _wgslsmith_div_f32(_wgslsmith_f_op_f32(-525f), _wgslsmith_f_op_f32(-var_3.x)))));
                global1 = 1021u;
            }
            let var_4 = func_1(_wgslsmith_mult_vec4_i32(_wgslsmith_clamp_vec4_i32(~vec4<i32>(u_input.c, var_2.a, 1i, -5527i), _wgslsmith_mod_vec4_i32(global0[_wgslsmith_index_u32(32454u, 22u)], global0[_wgslsmith_index_u32(1u, 22u)]), vec4<i32>(17156i, u_input.a.x, 2147483647i, u_input.a.x)) & global0[_wgslsmith_index_u32(max(u_input.b, ~56236u), 22u)], ~(-vec4<i32>(u_input.c, i32(-2147483648), var_2.a, 9022i))));
        }
    }
    let x = u_input.a;
    s_output = StorageBuffer(firstLeadingBit(_wgslsmith_mult_u32(45966u, u_input.b)));
}

`;