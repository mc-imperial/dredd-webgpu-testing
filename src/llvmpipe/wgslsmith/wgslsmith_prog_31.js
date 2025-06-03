export const input = [255,216,231,194,131,94,30,131,50,113,1,157,199,70,77,104,222,40,230,194,132,46,109,171,103,125,175,93,219,111,169,206,197,222,185,243,26,22,233,75,188,231,121,100,17,221,196,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [255,216,231,194,131,94,30,131,50,113,1,157,199,70,77,104,222,40,230,194,132,46,109,171,103,125,175,93,219,111,169,206,197,222,185,243,26,22,233,75,188,231,121,100,17,221,196,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[255,216,231,194,131,94,30,131,50,113,1,157,199,70,77,104,222,40,230,194,132,46,109,171,103,125,175,93,219,111,169,206,197,222,185,243,26,22,233,75,188,231,121,100,17,221,196,95]}
// Seed: 18432050041538066328

struct Struct_1 {
    a: vec2<u32>,
}

struct UniformBuffer {
    a: u32,
    b: i32,
    c: vec4<i32>,
    d: vec2<i32>,
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

var<private> global0: array<i32, 15> = array<i32, 15>(1i, 2147483647i, i32(-2147483648), 27230i, 1i, -1i, 1i, 19576i, 15074i, -59915i, 49768i, -31131i, -4830i, -3308i, -1i);

var<private> global1: array<Struct_1, 2> = array<Struct_1, 2>(Struct_1(vec2<u32>(23594u, 4294967295u)), Struct_1(vec2<u32>(4294967295u, 1u)));

var<private> global2: array<Struct_1, 13> = array<Struct_1, 13>(Struct_1(vec2<u32>(67474u, 32707u)), Struct_1(vec2<u32>(0u, 33231u)), Struct_1(vec2<u32>(0u, 1u)), Struct_1(vec2<u32>(4294967295u, 4294967295u)), Struct_1(vec2<u32>(45769u, 4294967295u)), Struct_1(vec2<u32>(49647u, 4294967295u)), Struct_1(vec2<u32>(36854u, 66286u)), Struct_1(vec2<u32>(1u, 4294967295u)), Struct_1(vec2<u32>(8527u, 0u)), Struct_1(vec2<u32>(4294967295u, 44829u)), Struct_1(vec2<u32>(8955u, 4294967295u)), Struct_1(vec2<u32>(23090u, 32873u)), Struct_1(vec2<u32>(1u, 0u)));

var<private> global3: vec3<bool>;

var<private> global4: f32 = -3126f;

var<private> LOOP_COUNTERS: array<u32, 16>;

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn func_6(arg_0: vec4<f32>) -> bool {
    var var_0 = global1[_wgslsmith_index_u32(~(~u_input.a), 2u)];
    global1 = array<Struct_1, 2>();
    var var_1 = countOneBits(_wgslsmith_sub_vec2_i32(vec2<i32>(reverseBits(~(-31555i)), reverseBits(u_input.d.x)), _wgslsmith_div_vec2_i32(vec2<i32>(-1i, max(global0[_wgslsmith_index_u32(1u, 15u)], global0[_wgslsmith_index_u32(17721u, 15u)])), firstLeadingBit(firstTrailingBit(u_input.d)))));
    var_0 = global1[_wgslsmith_index_u32(u_input.a, 2u)];
    for (var var_2: i32; !global3.x; var_2 = _wgslsmith_add_i32(_wgslsmith_dot_vec3_i32(u_input.c.xyx, u_input.c.wzz), i32(-2147483648))) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        if (!global3.x) {
            let var_3 = u_input.c.xz;
            let var_4 = global1[_wgslsmith_index_u32(1u, 2u)];
            break;
        }
    }
    return global3.x;
}

fn func_5(arg_0: vec4<bool>, arg_1: i32, arg_2: vec4<bool>, arg_3: Struct_1) -> u32 {
    var var_0 = _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(ceil(948f)))), _wgslsmith_f_op_f32(min(281f, -1040f)), global3.x));
    for (var var_1 = 23844i; var_1 >= 2147483647i; global1 = array<Struct_1, 2>()) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
    }
    global0 = array<i32, 15>();
    var var_1 = select(vec2<bool>(true, arg_0.x | false), !(!(!(!arg_2.yz))), func_6(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(1103f, -798f, -568f, 458f) * vec4<f32>(1104f, 1357f, -180f, 1003f))), vec4<f32>(-1225f, _wgslsmith_div_f32(-732f, -1639f), _wgslsmith_f_op_f32(-2781f), _wgslsmith_f_op_f32(838f - -1030f)))));
    var var_2 = Struct_1(arg_3.a);
    return ~arg_3.a.x;
}

fn func_4(arg_0: u32) -> Struct_1 {
    loop {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        switch (u_input.c.x) {
            case i32(-2147483648): {
                global4 = _wgslsmith_f_op_f32(-903f);
            }
            case -10422i: {
            }
            case 0i: {
                continue;
            }
            default: {
                var var_0 = !(_wgslsmith_dot_vec3_i32(u_input.c.xzx | max(u_input.c.wyw, vec3<i32>(global0[_wgslsmith_index_u32(arg_0, 15u)], u_input.b, 46845i)), vec3<i32>(u_input.d.x, -2726i, -30001i)) > 2147483647i);
                let var_1 = (2147483647i << (func_5(select(!vec4<bool>(global3.x, global3.x, true, global3.x), select(vec4<bool>(global3.x, false, global3.x, true), vec4<bool>(false, true, true, global3.x), global3.x), vec4<bool>(global3.x, global3.x, global3.x, global3.x)), reverseBits(select(u_input.c.x, 0i, false)), !(!vec4<bool>(true, global3.x, global3.x, false)), global1[_wgslsmith_index_u32(_wgslsmith_sub_u32(arg_0, reverseBits(arg_0)), 2u)]) % 32u)) & -global0[_wgslsmith_index_u32(8701u, 15u)];
                global1 = array<Struct_1, 2>();
            }
        }
    }
    if (u_input.a > ~arg_0) {
        let var_0 = global3.x;
    }
    var var_0 = _wgslsmith_f_op_f32(-136f);
    if (any(vec4<bool>(any(select(vec2<bool>(global3.x, global3.x), vec2<bool>(false, false), global3.zx)), global3.x, true, all(vec4<bool>(global3.x, global3.x, global3.x, true)) == !global3.x)) | all(vec4<bool>(false, global3.x, global0[_wgslsmith_index_u32(_wgslsmith_clamp_u32(0u, u_input.a, arg_0), 15u)] >= -1i, !(global3.x | global3.x)))) {
        let var_1 = ~(~(~_wgslsmith_add_u32(_wgslsmith_mult_u32(u_input.a, 8738u), u_input.a)));
    }
    for (var var_1 = 37715i; var_1 <= -1i; var_1 += 1i) {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        switch (u_input.d.x) {
            case 0i: {
                let var_2 = u_input.c.yy;
                let var_3 = ~(~vec2<u32>(max(49469u, firstTrailingBit(32542u)), firstTrailingBit(26375u)));
                var var_4 = var_3;
                var var_5 = global1[_wgslsmith_index_u32(u_input.a, 2u)];
            }
            case -1969i: {
                continue;
            }
            default: {
            }
        }
        var var_2 = global1[_wgslsmith_index_u32(~(~u_input.a), 2u)];
        let var_3 = _wgslsmith_f_op_vec2_f32(round(vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(568f)) - _wgslsmith_f_op_f32(ceil(176f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1614f) * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(632f, 504f)) - _wgslsmith_f_op_f32(f32(-1f) * -428f))))));
        var var_4 = _wgslsmith_f_op_f32(round(755f));
        var var_5 = vec4<i32>(-8769i, firstTrailingBit(2147483647i), -abs(~global0[_wgslsmith_index_u32(reverseBits(1u), 15u)]), u_input.c.x);
    }
    return Struct_1(abs(_wgslsmith_clamp_vec2_u32(vec2<u32>(u_input.a ^ arg_0, ~30833u), ~vec2<u32>(1u, 1u), ~(~vec2<u32>(64066u, arg_0)))));
}

fn func_7(arg_0: Struct_1, arg_1: i32, arg_2: i32, arg_3: i32) -> vec4<u32> {
    loop {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        continue;
    }
    for (var var_0 = 46779i; 2903u >= ~u_input.a; var_0 -= 1i) {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
    }
    loop {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
    }
    if (false) {
        let var_0 = -17065i;
        for (var var_1 = 0i; var_1 <= i32(-2147483648); ) {
            if (LOOP_COUNTERS[7u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        }
    }
    let var_0 = vec4<i32>(arg_1, i32(-2147483648), 60136i, ~(~global0[_wgslsmith_index_u32(arg_0.a.x, 15u)]));
    return select(~vec4<u32>(0u, ~arg_0.a.x, ~reverseBits(19309u), _wgslsmith_div_u32(_wgslsmith_add_u32(52331u, 25142u), arg_0.a.x)), vec4<u32>(1u, ~1u, 1u, 4294967295u) | max(select(vec4<u32>(0u, u_input.a, 1u, 18986u), vec4<u32>(0u, 0u, 11976u, 22197u), false) | vec4<u32>(30658u, 1u, 0u, 5976u), ~(~vec4<u32>(arg_0.a.x, arg_0.a.x, 41923u, 10804u))), !(!(!all(vec3<bool>(false, global3.x, true)))));
}

fn func_3(arg_0: Struct_1, arg_1: Struct_1, arg_2: i32) -> Struct_1 {
    var var_0 = _wgslsmith_mod_vec4_u32(~vec4<u32>(_wgslsmith_div_u32(1u, arg_0.a.x) | (arg_0.a.x << (arg_0.a.x % 32u)), ~arg_0.a.x >> (~arg_0.a.x % 32u), 45336u, 0u), min(vec4<u32>(min(0u, _wgslsmith_sub_u32(arg_0.a.x, arg_0.a.x)), ~arg_1.a.x, max(_wgslsmith_add_u32(20693u, 24989u), ~1u), abs(_wgslsmith_dot_vec2_u32(arg_0.a, arg_0.a))), func_7(func_4(arg_0.a.x), 35537i, -19625i, abs(1i)) ^ max(~vec4<u32>(arg_1.a.x, 1148u, 32750u, 4294967295u), vec4<u32>(u_input.a, arg_1.a.x, 24194u, u_input.a))));
    var var_1 = Struct_1(_wgslsmith_div_vec2_u32(vec2<u32>(~arg_1.a.x, 32709u ^ var_0.x) >> (_wgslsmith_div_vec2_u32(vec2<u32>(arg_0.a.x, arg_1.a.x) | arg_1.a, vec2<u32>(84490u, 59403u) >> (vec2<u32>(57092u, arg_1.a.x) % vec2<u32>(32u))) % vec2<u32>(32u)), arg_0.a));
    var var_2 = Struct_1(vec2<u32>(~var_1.a.x, ~34873u));
    global1 = array<Struct_1, 2>();
    let var_3 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(-1231f)) * _wgslsmith_f_op_f32(-597f)))) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(1359f * 1821f))) + 1f)));
    return arg_1;
}

fn func_2() -> Struct_1 {
    for (var var_0 = 18274i; var_0 < -18693i; global4 = 861f) {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        if (global3.x) {
            break;
        }
        break;
    }
    let var_0 = func_3(Struct_1(abs(~vec2<u32>(0u, 1u))), global2[_wgslsmith_index_u32(u_input.a, 13u)], 0i);
    switch (~(-1i)) {
        case 24445i: {
            let var_1 = i32(-2147483648) ^ -global0[_wgslsmith_index_u32(~4294967295u, 15u)];
            var var_2 = ~firstTrailingBit(~max(vec2<i32>(2147483647i, 1i), u_input.d)) ^ ~vec2<i32>(1i ^ u_input.b, 0i);
            var var_3 = -2147483647i;
        }
        case 6144i: {
            if (false) {
                global4 = 856f;
                global3 = vec3<bool>(18933u > _wgslsmith_dot_vec4_u32(vec4<u32>(func_7(var_0, 39581i, u_input.c.x, global0[_wgslsmith_index_u32(56912u, 15u)]).x, func_4(u_input.a).a.x, abs(16485u), u_input.a), ~(vec4<u32>(4294967295u, var_0.a.x, var_0.a.x, 0u) << (vec4<u32>(1u, 56101u, 17588u, u_input.a) % vec4<u32>(32u)))), !(!(var_0.a.x > _wgslsmith_dot_vec4_u32(vec4<u32>(u_input.a, var_0.a.x, 4294967295u, 9742u), vec4<u32>(u_input.a, 100730u, var_0.a.x, u_input.a)))), true);
                global4 = _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(268f - 1451f))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_div_f32(-968f, -151f))))));
                let var_1 = vec2<bool>(global3.x, !all(vec4<bool>(!global3.x, false, true, true)));
                global4 = _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(1000f)) * 151f) * _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(-1000f - 291f), _wgslsmith_f_op_f32(f32(-1f) * -1974f))))));
            }
            var var_1 = 23465u;
            global4 = 757f;
        }
        case 62404i: {
            var var_1 = _wgslsmith_sub_i32(_wgslsmith_dot_vec3_i32(_wgslsmith_mult_vec3_i32(vec3<i32>(i32(-2147483648), u_input.c.x, global0[_wgslsmith_index_u32(u_input.a, 15u)]), ~u_input.c.wyw), vec3<i32>(-23198i, global0[_wgslsmith_index_u32(1u, 15u)], u_input.d.x) & u_input.c.zxz) | global0[_wgslsmith_index_u32(~(~(~var_0.a.x)), 15u)], _wgslsmith_add_i32(i32(-1i) * -30775i, firstLeadingBit(_wgslsmith_sub_i32(-u_input.b, u_input.d.x))));
            global1 = array<Struct_1, 2>();
        }
        case -2885i: {
            var var_1 = false;
            loop {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                var var_2 = func_3(global2[_wgslsmith_index_u32(var_0.a.x, 13u)], global2[_wgslsmith_index_u32(~u_input.a, 13u)], global0[_wgslsmith_index_u32(var_0.a.x, 15u)]);
                break;
            }
            let var_2 = (i32(-1i) * -4234i) << (~u_input.a % 32u);
        }
        default: {
        }
    }
    if (global3.x) {
        loop {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
            var var_1 = u_input.a;
            let var_2 = abs(_wgslsmith_sub_i32(u_input.b, min(u_input.d.x, 2147483647i)));
        }
        var var_1 = false;
        if (global3.x) {
            global0 = array<i32, 15>();
            var var_2 = _wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(step(vec2<f32>(-1106f, -842f), _wgslsmith_f_op_vec2_f32(select(vec2<f32>(2603f, -696f), vec2<f32>(321f, 140f), global3.zx)))))), vec2<f32>(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(928f, -2245f)), 388f)), 1000f), true));
        }
        if (true) {
            global3 = select(!(!(!select(vec3<bool>(false, global3.x, global3.x), vec3<bool>(global3.x, global3.x, global3.x), vec3<bool>(true, false, global3.x)))), select(vec3<bool>(false, false, any(vec4<bool>(global3.x, false, false, true))), select(select(select(vec3<bool>(global3.x, true, true), vec3<bool>(global3.x, global3.x, false), global3.x), vec3<bool>(true, global3.x, global3.x), !vec3<bool>(global3.x, false, true)), select(vec3<bool>(global3.x, global3.x, global3.x), !vec3<bool>(false, global3.x, false), true), vec3<bool>(true, true, true)), select(select(vec3<bool>(global3.x, true, false), !vec3<bool>(global3.x, global3.x, false), vec3<bool>(true, true, true)), !select(vec3<bool>(global3.x, false, false), vec3<bool>(true, true, true), vec3<bool>(false, false, global3.x)), !global3.x)), !vec3<bool>(!any(vec4<bool>(global3.x, global3.x, true, false)), true, !select(global3.x, true, true)));
            global0 = array<i32, 15>();
            var_1 = global3.x;
        }
    }
    let var_1 = ~0u;
    return var_0;
}

fn func_1(arg_0: f32, arg_1: vec4<f32>, arg_2: Struct_1, arg_3: vec3<bool>) -> Struct_1 {
    switch (u_input.d.x) {
        case i32(-2147483648): {
            global1 = array<Struct_1, 2>();
            var var_0 = arg_2;
        }
        case -1i: {
            switch (_wgslsmith_mult_i32(-(~_wgslsmith_add_i32(u_input.b, 49453i)), firstTrailingBit(u_input.b)) >> (91391u % 32u)) {
                case i32(-2147483648): {
                    var var_0 = firstTrailingBit(select(_wgslsmith_mult_u32(0u, ~(u_input.a | arg_2.a.x)), 34834u, !(arg_3.x & true)));
                    let var_1 = Struct_1(_wgslsmith_div_vec2_u32(vec2<u32>(~1u, u_input.a) ^ _wgslsmith_add_vec2_u32(arg_2.a, ~arg_2.a), ~arg_2.a));
                    var var_2 = ~_wgslsmith_clamp_vec3_u32(~vec3<u32>(reverseBits(984u), arg_2.a.x, 4294967295u), ~abs(vec3<u32>(0u, u_input.a, 46932u) ^ vec3<u32>(arg_2.a.x, arg_2.a.x, var_1.a.x)), min(vec3<u32>(arg_2.a.x, 1097u, 1u), vec3<u32>(var_1.a.x, _wgslsmith_mod_u32(4294967295u, arg_2.a.x), _wgslsmith_mod_u32(4294967295u, var_1.a.x))));
                    global1 = array<Struct_1, 2>();
                }
                case -1i: {
                    global0 = array<i32, 15>();
                    let var_0 = true;
                    var var_1 = func_2();
                }
                default: {
                    let var_0 = vec4<i32>(_wgslsmith_sub_i32(global0[_wgslsmith_index_u32(0u, 15u)], -firstTrailingBit(global0[_wgslsmith_index_u32(firstLeadingBit(14185u), 15u)])), firstLeadingBit(-65123i), -14896i, _wgslsmith_dot_vec4_i32(vec4<i32>(-1i) * -u_input.c, firstTrailingBit(u_input.c)) << (~1u % 32u));
                    return global1[_wgslsmith_index_u32(44538u, 2u)];
                }
            }
            if (!(!global3.x)) {
                var var_0 = u_input.a;
                var var_1 = func_3(global2[_wgslsmith_index_u32(func_5(!select(select(vec4<bool>(true, false, arg_3.x, global3.x), vec4<bool>(arg_3.x, true, false, true), false), vec4<bool>(global3.x, false, false, arg_3.x), !vec4<bool>(arg_3.x, global3.x, global3.x, global3.x)), u_input.c.x, vec4<bool>(any(select(vec4<bool>(arg_3.x, false, true, global3.x), vec4<bool>(global3.x, global3.x, false, true), vec4<bool>(global3.x, true, global3.x, false))), all(!vec4<bool>(global3.x, arg_3.x, true, arg_3.x)), arg_3.x || !arg_3.x, !any(vec2<bool>(true, global3.x))), Struct_1(vec2<u32>(abs(64783u), 3522u))), 13u)], Struct_1(func_2().a), firstLeadingBit(abs(min(u_input.d.x, global0[_wgslsmith_index_u32(23393u, 15u)])) ^ ~(global0[_wgslsmith_index_u32(4294967295u, 15u)] << (15197u % 32u))));
                var var_2 = arg_2;
            }
            global0 = array<i32, 15>();
        }
        case 2147483647i: {
            global3 = select(!arg_3, vec3<bool>(all(vec4<bool>(true, false, global3.x, true)), true, false), vec3<bool>(any(select(arg_3, select(vec3<bool>(global3.x, false, arg_3.x), vec3<bool>(global3.x, global3.x, true), arg_3), vec3<bool>(true, arg_3.x, arg_3.x))), true, func_6(_wgslsmith_f_op_vec4_f32(-arg_1))));
            global0 = array<i32, 15>();
            var var_0 = countOneBits(0i) >> ((_wgslsmith_add_u32(func_3(global2[_wgslsmith_index_u32(4294967295u, 13u)], arg_2, _wgslsmith_add_i32(i32(-2147483648), global0[_wgslsmith_index_u32(28636u, 15u)])).a.x, _wgslsmith_dot_vec2_u32(vec2<u32>(arg_2.a.x, arg_2.a.x), vec2<u32>(u_input.a, u_input.a))) << (~(~abs(4294967295u)) % 32u)) % 32u);
            global4 = _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(trunc(415f)), _wgslsmith_f_op_f32(-arg_1.x))))))));
        }
        case -76077i: {
            for (var var_0 = 1i; false; var_0 -= 1i) {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                var_0 = i32(-2147483648);
                var var_1 = 1034f;
            }
            global4 = arg_0;
            loop {
                if (LOOP_COUNTERS[12u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
                var var_0 = ~0u;
            }
            loop {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                let var_0 = vec4<bool>(!(true | global3.x), true, true, arg_3.x);
                var var_1 = _wgslsmith_f_op_f32(-arg_1.x);
                continue;
            }
        }
        default: {
            global2 = array<Struct_1, 13>();
            if (arg_3.x) {
                let var_0 = _wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_1.x, _wgslsmith_f_op_f32(-169f), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(abs(arg_1.x)))), -793f)), arg_1));
                let var_1 = ~_wgslsmith_add_vec3_u32(vec3<u32>(~64311u, u_input.a, u_input.a), countOneBits(max(vec3<u32>(u_input.a, 11184u, arg_2.a.x), vec3<u32>(1u, 4294967295u, arg_2.a.x))) | firstTrailingBit(~vec3<u32>(u_input.a, 1u, u_input.a)));
                var var_2 = firstLeadingBit(_wgslsmith_add_vec2_i32(vec2<i32>(~(u_input.b << (0u % 32u)), max(_wgslsmith_clamp_i32(1i, global0[_wgslsmith_index_u32(1u, 15u)], -4882i), _wgslsmith_mod_i32(5704i, u_input.b))), reverseBits(u_input.d)));
                var var_3 = select(select(!select(vec3<bool>(global3.x, global3.x, arg_3.x), select(vec3<bool>(true, global3.x, global3.x), arg_3, arg_3), !vec3<bool>(true, global3.x, false)), !arg_3, false), arg_3, arg_3);
            }
        }
    }
    var var_0 = func_3(func_2(), Struct_1(arg_2.a), ~global0[_wgslsmith_index_u32(~(arg_2.a.x >> (func_2().a.x % 32u)), 15u)]);
    global2 = array<Struct_1, 13>();
    global4 = -1000f;
    let var_1 = arg_1.xw;
    return arg_2;
}

fn func_8(arg_0: Struct_1, arg_1: Struct_1, arg_2: Struct_1, arg_3: Struct_1) -> i32 {
    global4 = _wgslsmith_div_f32(301f, -1000f);
    return _wgslsmith_add_i32(-43940i, _wgslsmith_add_i32(min(-31827i, global0[_wgslsmith_index_u32(~4294967295u, 15u)]), -34932i) >> (func_4(~4294967295u).a.x % 32u));
}

@compute
@workgroup_size(1)
fn main() {
    global3 = vec3<bool>(!(!global3.x & (global0[_wgslsmith_index_u32(1u, 15u)] <= 2147483647i)) && global3.x, !global3.x, ~global0[_wgslsmith_index_u32(u_input.a, 15u)] >= _wgslsmith_div_i32(-7904i, func_8(func_1(976f, vec4<f32>(931f, 190f, 911f, -395f), Struct_1(vec2<u32>(u_input.a, 9034u)), vec3<bool>(global3.x, true, true)), Struct_1(vec2<u32>(u_input.a, u_input.a)), global1[_wgslsmith_index_u32(1u, 2u)], func_1(-3134f, vec4<f32>(1193f, 1000f, 1548f, 2674f), global2[_wgslsmith_index_u32(0u, 13u)], vec3<bool>(false, true, false)))));
    for (var var_0 = ~func_8(Struct_1(_wgslsmith_sub_vec2_u32(vec2<u32>(141140u, u_input.a), vec2<u32>(4294967295u, u_input.a))), func_3(Struct_1(vec2<u32>(1u, u_input.a)), Struct_1(vec2<u32>(u_input.a, 24843u)), _wgslsmith_dot_vec3_i32(u_input.c.zyz, vec3<i32>(u_input.b, 1i, global0[_wgslsmith_index_u32(u_input.a, 15u)]))), Struct_1(~vec2<u32>(u_input.a, u_input.a)), global2[_wgslsmith_index_u32(29241u, 13u)]) & ~global0[_wgslsmith_index_u32(_wgslsmith_div_u32(_wgslsmith_sub_u32(_wgslsmith_sub_u32(0u, u_input.a), u_input.a), max(0u, u_input.a) | _wgslsmith_sub_u32(30372u, u_input.a)), 15u)]; !global3.x; var_0 -= 1i) {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        if (global3.x) {
            let var_1 = Struct_1(vec2<u32>(~u_input.a, min(_wgslsmith_add_u32(firstLeadingBit(u_input.a), _wgslsmith_sub_u32(58612u, 12570u)), 44651u)));
            var var_2 = Struct_1(~var_1.a);
            global1 = array<Struct_1, 2>();
            global1 = array<Struct_1, 2>();
        }
    }
    switch (func_8(func_1(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(-198f)) - 483f) + _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(f32(-1f) * -1440f), _wgslsmith_f_op_f32(-1000f - 673f), u_input.a <= u_input.a))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(479f, 272f, 362f, 389f))) * _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(sign(vec4<f32>(611f, -204f, 1366f, -300f))) + _wgslsmith_f_op_vec4_f32(vec4<f32>(1176f, -396f, -218f, -1269f) - vec4<f32>(1779f, -1000f, 1000f, -763f)))), global2[_wgslsmith_index_u32(~u_input.a, 13u)], select(!select(vec3<bool>(global3.x, true, global3.x), vec3<bool>(false, global3.x, false), vec3<bool>(false, false, global3.x)), vec3<bool>(false, true, !global3.x), false)), func_1(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(-1561f)) - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(-1000f)) * _wgslsmith_f_op_f32(-424f - 521f))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(-412f, -1178f, -1948f, 285f) + vec4<f32>(362f, 931f, -625f, -339f)))), Struct_1(~(~vec2<u32>(u_input.a, u_input.a))), vec3<bool>(true, false, false)), Struct_1(~vec2<u32>(31496u, _wgslsmith_sub_u32(u_input.a, 8293u))), Struct_1(firstLeadingBit(vec2<u32>(u_input.a, u_input.a)) ^ ~(~vec2<u32>(4294967295u, 23055u))))) {
        default: {
            var var_0 = global2[_wgslsmith_index_u32(u_input.a, 13u)];
            global3 = select(select(vec3<bool>(firstLeadingBit(0i) > _wgslsmith_mod_i32(u_input.d.x, global0[_wgslsmith_index_u32(u_input.a, 15u)]), false, select(global3.x, all(vec2<bool>(false, global3.x)), global3.x)), select(select(select(vec3<bool>(global3.x, global3.x, global3.x), vec3<bool>(global3.x, global3.x, global3.x), global3.x), !vec3<bool>(global3.x, global3.x, true), select(vec3<bool>(true, global3.x, false), vec3<bool>(global3.x, global3.x, global3.x), global3.x)), select(select(vec3<bool>(true, false, global3.x), vec3<bool>(global3.x, true, global3.x), vec3<bool>(false, false, global3.x)), vec3<bool>(true, global3.x, global3.x), !vec3<bool>(false, global3.x, true)), !vec3<bool>(global3.x, global3.x, true)), global3.x & (true & func_6(vec4<f32>(-822f, 275f, 1014f, 807f)))), !(!select(vec3<bool>(global3.x, global3.x, global3.x), !vec3<bool>(true, global3.x, global3.x), any(vec2<bool>(true, true)))), all(!select(vec3<bool>(false, global3.x, false), vec3<bool>(global3.x, false, global3.x), !vec3<bool>(true, global3.x, true))));
            for (var var_1 = 0i; ; ) {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            }
            global0 = array<i32, 15>();
        }
    }
    global3 = select(!vec3<bool>(true, any(vec2<bool>(true, global3.x)), global3.x), !vec3<bool>(global3.x, false, !any(vec4<bool>(true, global3.x, global3.x, global3.x))), select(vec3<bool>(global3.x, any(vec3<bool>(true, true, true)), global3.x), !vec3<bool>(true, false, any(vec4<bool>(false, true, global3.x, global3.x))), global3.x));
    let var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -822f)))) - 1f));
    global2 = array<Struct_1, 13>();
    let x = u_input.a;
    s_output = StorageBuffer(select(abs(-u_input.c.x), reverseBits(~u_input.b), !(u_input.a >= 1u)) | (17260i >> (~u_input.a % 32u)));
}

`;