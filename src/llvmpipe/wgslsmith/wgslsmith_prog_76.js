export const input = [90,135,130,144,133,103,234,8,215,164,209,35,126,250,61,168,254,38,117,161,142,122,21,2,149,10,188,6,27,200,204,146,183,169,118,223,110,158,61,64,170,141,132,151,242,3,122,131,167,210,52,147,100,103,222,6,254,110,33,237,218,166,96,161];
export const expected = [90,135,130,144,133,103,234,8,215,164,209,35,126,250,61,168,254,38,117,161,142,122,21,2,149,10,188,6,27,200,204,146,183,169,118,223,110,158,61,64,170,141,132,151,242,3,122,131,167,210,52,147,100,103,222,6,254,110,33,237,218,166,96,161];
export const shaderCode = ` 
 // {"0:0":[90,135,130,144,133,103,234,8,215,164,209,35,126,250,61,168,254,38,117,161,142,122,21,2,149,10,188,6,27,200,204,146,183,169,118,223,110,158,61,64,170,141,132,151,242,3,122,131,167,210,52,147,100,103,222,6,254,110,33,237,218,166,96,161]}
// Seed: 817846024320554480

struct Struct_1 {
    a: i32,
    b: vec3<i32>,
    c: vec3<u32>,
}

struct Struct_2 {
    a: bool,
    b: vec4<u32>,
    c: bool,
    d: vec4<bool>,
}

struct Struct_3 {
    a: f32,
    b: bool,
    c: Struct_2,
    d: vec3<f32>,
}

struct UniformBuffer {
    a: u32,
    b: vec4<i32>,
    c: vec4<i32>,
    d: vec3<u32>,
}

struct StorageBuffer {
    a: vec3<f32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<u32, 11>;

var<private> global1: array<vec4<f32>, 16>;

var<private> global2: vec3<f32>;

var<private> global3: vec4<f32>;

var<private> global4: array<u32, 8> = array<u32, 8>(1u, 4294967295u, 1u, 0u, 10546u, 4803u, 1u, 1u);

var<private> LOOP_COUNTERS: array<u32, 20>;

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn func_6(arg_0: u32, arg_1: u32, arg_2: vec4<i32>, arg_3: vec3<bool>) -> f32 {
    global2 = global3.zwx;
    let var_0 = _wgslsmith_f_op_f32(global2.x + 746f);
    switch (_wgslsmith_dot_vec2_i32(~u_input.c.wz, u_input.c.yw)) {
        case 30431i: {
            loop {
                if (LOOP_COUNTERS[0u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
                break;
            }
            var var_1 = 924i ^ ~(-_wgslsmith_mult_i32(_wgslsmith_dot_vec4_i32(vec4<i32>(arg_2.x, -1i, i32(-2147483648), arg_2.x), arg_2), arg_2.x));
            let var_2 = vec3<f32>(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global2.x)), global3.x)), global3.x)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global2.x))), var_0);
            var_1 = -22846i;
        }
        default: {
        }
    }
    for (var var_1 = i32(-2147483648); var_1 >= 1i; ) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        loop {
            if (LOOP_COUNTERS[2u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            global4 = array<u32, 8>();
        }
        let var_2 = _wgslsmith_clamp_vec3_i32(arg_2.wxx, ~(~(arg_2.xyy << (reverseBits(vec3<u32>(1u, 1u, u_input.d.x)) % vec3<u32>(32u)))), abs(-vec3<i32>(-22124i, abs(u_input.c.x), 0i)));
        continue;
    }
    let var_1 = vec4<bool>(all(vec3<bool>(arg_3.x, false, !(!arg_3.x))), all(arg_3.zz), arg_3.x, false && arg_3.x);
    return _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(-1059f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(-639f))))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-global3.x), _wgslsmith_f_op_f32(global2.x * 558f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1067f - var_0)))) - -746f)));
}

fn func_5() -> u32 {
    let var_0 = select(-1i << (~(~max(global4[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(44321u, 8u)], 8u)], 8u)], 40996u)) % 32u), reverseBits(_wgslsmith_add_i32(u_input.b.x, 18491i)) & u_input.c.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(global3.x)) - _wgslsmith_f_op_f32(func_6(_wgslsmith_dot_vec4_u32(vec4<u32>(1u, 1u, global4[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(1u, 8u)], 8u)], 4294967295u), vec4<u32>(u_input.d.x, u_input.a, 0u, u_input.d.x)), 68006u, u_input.b >> (vec4<u32>(51427u, u_input.a, global0[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(23584u, 8u)], 11u)], 36696u) % vec4<u32>(32u)), vec3<bool>(false, false, false)))) >= _wgslsmith_f_op_f32(floor(-733f)));
    loop {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
    }
    global1 = array<vec4<f32>, 16>();
    loop {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        var var_1 = true;
        var var_2 = ~((_wgslsmith_clamp_vec3_i32(u_input.b.wzx, u_input.c.zww, u_input.c.yxw) ^ ~vec3<i32>(30670i, u_input.b.x, 1i)) >> (vec3<u32>(~global4[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(u_input.d.x, 8u)], 8u)], 1u, global0[_wgslsmith_index_u32(4294967295u, 11u)] | 14658u) % vec3<u32>(32u))) << (vec3<u32>(global4[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(3483u, 11u)], 8u)], ~global0[_wgslsmith_index_u32(1u, 11u)], abs(_wgslsmith_clamp_u32(_wgslsmith_dot_vec3_u32(vec3<u32>(global4[_wgslsmith_index_u32(u_input.a, 8u)], 0u, global4[_wgslsmith_index_u32(u_input.a, 8u)]), vec3<u32>(global4[_wgslsmith_index_u32(u_input.a, 8u)], global4[_wgslsmith_index_u32(331u, 8u)], 4294967295u)), global4[_wgslsmith_index_u32(max(global0[_wgslsmith_index_u32(u_input.a, 11u)], u_input.a), 8u)], _wgslsmith_div_u32(u_input.a, global4[_wgslsmith_index_u32(u_input.d.x, 8u)])))) % vec3<u32>(32u));
        switch (var_2.x) {
            case 26454i: {
                continue;
            }
            case 1i: {
                var var_3 = Struct_2(all(vec4<bool>(true, true, true, global0[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(~63302u, 8u)], 11u)] == 4294967295u)), ~vec4<u32>(~reverseBits(4294967295u), global4[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(1u | ~u_input.a, 8u)], 8u)], _wgslsmith_dot_vec3_u32(vec3<u32>(20804u, 56943u, 1u), vec3<u32>(u_input.d.x, u_input.d.x, u_input.a) | u_input.d), ~_wgslsmith_add_u32(u_input.a, global0[_wgslsmith_index_u32(0u, 11u)])), true, !select(select(select(vec4<bool>(false, true, false, false), vec4<bool>(true, true, false, true), false), vec4<bool>(false, true, false, true), vec4<bool>(true, true, true, true)), select(vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true), true), vec4<bool>(true, true, true, true)));
                global2 = vec3<f32>(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-global3.x))))), global2.x, _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(sign(global3.x)), _wgslsmith_f_op_f32(f32(-1f) * -624f))));
                let var_4 = ~vec2<u32>(~u_input.a << (~(~4294967295u) % 32u), 28031u);
            }
            case -1939i: {
                var_2 = u_input.c.wyy;
                var var_3 = Struct_3(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(-393f - _wgslsmith_div_f32(701f, 1289f)), global3.x)), true, Struct_2(true, select(vec4<u32>(56252u, u_input.d.x, 30197u, u_input.d.x) | vec4<u32>(global4[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a, 11u)], 8u)], u_input.d.x, 0u, global0[_wgslsmith_index_u32(0u, 11u)]), select(vec4<u32>(4294967295u, global0[_wgslsmith_index_u32(4294967295u, 11u)], 4294967295u, 4294967295u), vec4<u32>(u_input.a, global4[_wgslsmith_index_u32(34008u, 8u)], global0[_wgslsmith_index_u32(u_input.a, 11u)], global0[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(1u, 8u)], 11u)]), vec4<bool>(false, false, true, false)), vec4<bool>(false, false, true, false)) ^ vec4<u32>(firstLeadingBit(u_input.d.x), 1u, countOneBits(1u), 26183u | global4[_wgslsmith_index_u32(1u, 8u)]), false, vec4<bool>(true, all(vec4<bool>(true, true, false, true)), any(vec2<bool>(false, false)), true)), global3.yxy);
                global1 = array<vec4<f32>, 16>();
                var_2 = -vec3<i32>(_wgslsmith_div_i32(-var_0, -u_input.b.x), ~(~u_input.b.x), var_2.x >> (~4294967295u % 32u));
            }
            case 52395i: {
                let var_3 = -vec4<i32>(1i, ~abs(-u_input.c.x), _wgslsmith_dot_vec2_i32(min(vec2<i32>(-28324i, u_input.b.x) | vec2<i32>(0i, var_2.x), vec2<i32>(59304i, u_input.b.x) ^ vec2<i32>(u_input.c.x, var_2.x)), -(~vec2<i32>(var_2.x, var_0))), _wgslsmith_mult_i32(~(var_2.x & var_2.x), 15815i));
                break;
            }
            default: {
                continue;
            }
        }
        var var_3 = ~u_input.b.x;
        for (var var_4 = 10979i ^ var_0; var_4 != 2147483647i; ) {
            if (LOOP_COUNTERS[5u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
            global0 = array<u32, 11>();
            var var_5 = abs(u_input.d.x);
            var var_6 = false;
            let var_7 = _wgslsmith_clamp_u32(~(global0[_wgslsmith_index_u32(_wgslsmith_dot_vec2_u32(vec2<u32>(global4[_wgslsmith_index_u32(0u, 8u)], global4[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(46984u, 8u)], 8u)], 8u)]), u_input.d.yx), 11u)] & ~global4[_wgslsmith_index_u32(1u, 8u)]), u_input.d.x, _wgslsmith_div_u32(firstTrailingBit(u_input.d.x), ~6175u) << (4294967295u % 32u)) ^ ~1u;
        }
    }
    global1 = array<vec4<f32>, 16>();
    return ~global0[_wgslsmith_index_u32(_wgslsmith_dot_vec3_u32(~u_input.d, ~(~u_input.d)), 11u)];
}

fn func_4(arg_0: vec4<bool>, arg_1: bool, arg_2: bool) -> f32 {
    global4 = array<u32, 8>();
    global4 = array<u32, 8>();
    var var_0 = _wgslsmith_add_vec4_u32(vec4<u32>(min(global4[_wgslsmith_index_u32(func_5(), 8u)], _wgslsmith_div_u32(~4294967295u, 0u | global4[_wgslsmith_index_u32(0u, 8u)])), u_input.a, _wgslsmith_dot_vec4_u32(_wgslsmith_mult_vec4_u32(max(vec4<u32>(22935u, 371u, 9824u, global0[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(4294967295u, 8u)], 11u)]), vec4<u32>(0u, 0u, global4[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.d.x, 11u)], 8u)], 1u)), vec4<u32>(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(4294967295u, 11u)], 11u)], u_input.d.x, u_input.a, 0u)), _wgslsmith_add_vec4_u32(~vec4<u32>(global4[_wgslsmith_index_u32(40725u, 8u)], global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(21075u, 11u)], 11u)], global4[_wgslsmith_index_u32(0u, 8u)], global0[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(88095u, 11u)], 8u)], 8u)], 11u)]), vec4<u32>(4294967295u, 38274u, 4294967295u, 99850u) | vec4<u32>(global0[_wgslsmith_index_u32(u_input.d.x, 11u)], global0[_wgslsmith_index_u32(3472u, 11u)], u_input.d.x, 75123u))), 51030u), ~vec4<u32>(0u, countOneBits(~global4[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(12349u, 11u)], 8u)]), countOneBits(countOneBits(u_input.d.x)), global0[_wgslsmith_index_u32(reverseBits(u_input.a), 11u)]));
    var var_1 = Struct_3(_wgslsmith_f_op_f32(sign(global2.x)), arg_0.x, Struct_2(true, ~(~(~vec4<u32>(30395u, global4[_wgslsmith_index_u32(36119u, 8u)], 71028u, var_0.x))), false, vec4<bool>(arg_0.x, true || arg_0.x, !(6232u > u_input.d.x), true)), global3.zww);
    global2 = _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(1000f, _wgslsmith_f_op_f32(ceil(global2.x)), -1406f) + _wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(-global3.ywz))))), _wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(select(var_1.d, vec3<f32>(var_1.a, global3.x, -900f), !vec3<bool>(arg_2, arg_1, false))), vec3<f32>(885f, _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-506f - global2.x))), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(var_1.d.x + -604f), _wgslsmith_f_op_f32(-1000f * global2.x))))))));
    return global2.x;
}

fn func_3(arg_0: vec4<f32>, arg_1: Struct_2, arg_2: vec4<u32>) -> bool {
    if (!(global3.x != _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(-512f)) * _wgslsmith_f_op_f32(min(797f, _wgslsmith_f_op_f32(func_4(arg_1.d, false, true))))))) {
        if (!all(select(vec2<bool>(any(arg_1.d.ww), true && arg_1.c), vec2<bool>(false, true), arg_1.d.yz))) {
            var var_0 = arg_1;
            let var_1 = Struct_3(_wgslsmith_div_f32(global2.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(trunc(760f)))))), !(true | (arg_1.a | all(var_0.d.wz))), Struct_2(!all(!arg_1.d), abs(arg_1.b), true, vec4<bool>(arg_1.a, false, all(vec3<bool>(true, arg_1.c, var_0.c)), arg_1.a)), vec3<f32>(arg_0.x, _wgslsmith_f_op_f32(func_4(vec4<bool>(true, var_0.a, global4[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(26100u, 8u)], 8u)] <= 12724u, arg_1.c & var_0.d.x), !(u_input.b.x >= u_input.b.x), any(vec4<bool>(false, arg_1.c, true, false)))), global3.x));
            global1 = array<vec4<f32>, 16>();
            var_0 = var_1.c;
        }
        let var_0 = arg_2.xyy;
        var var_1 = Struct_3(_wgslsmith_f_op_f32(trunc(_wgslsmith_div_f32(global3.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global3.x))))), select(!(!any(vec3<bool>(false, arg_1.c, false))), true && ((47638u > arg_1.b.x) && false), arg_1.b.x > ~16374u), Struct_2(any(vec2<bool>(!arg_1.d.x, !arg_1.d.x)), _wgslsmith_add_vec4_u32(_wgslsmith_add_vec4_u32(~vec4<u32>(global4[_wgslsmith_index_u32(arg_1.b.x, 8u)], 0u, global4[_wgslsmith_index_u32(13725u, 8u)], 22982u), countOneBits(vec4<u32>(22481u, 1u, 115978u, u_input.d.x))), _wgslsmith_add_vec4_u32(~arg_1.b, min(vec4<u32>(1u, 18724u, 45194u, 4294967295u), arg_2))), true, vec4<bool>(arg_1.d.x, true, true, max(8328u, arg_2.x) >= firstLeadingBit(arg_1.b.x))), vec3<f32>(-1000f, global2.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_0.x) - arg_0.x)));
    }
    global2 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(842f, 955f, _wgslsmith_f_op_f32(global3.x - global3.x)) - _wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(1031f + -539f), 599f, _wgslsmith_f_op_f32(-437f + 462f)) * vec3<f32>(_wgslsmith_f_op_f32(ceil(global2.x)), global3.x, arg_0.x))));
    global1 = array<vec4<f32>, 16>();
    global4 = array<u32, 8>();
    let var_0 = _wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(533f, _wgslsmith_f_op_f32(-118f))) + global3.x), global3.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-158f - -1000f))), -1871f) * _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(select(-1052f, -1112f, arg_1.c)), _wgslsmith_f_op_f32(f32(-1f) * -1134f), _wgslsmith_f_op_f32(round(943f)), -508f))));
    return arg_1.d.x;
}

fn func_7(arg_0: bool, arg_1: i32, arg_2: bool, arg_3: Struct_2) -> f32 {
    loop {
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
    loop {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        switch (~u_input.b.x) {
            default: {
                global0 = array<u32, 11>();
            }
        }
        if (any(arg_3.d.zz)) {
        }
    }
    let var_0 = ~_wgslsmith_dot_vec2_i32(vec2<i32>(u_input.c.x, 0i), ~_wgslsmith_add_vec2_i32(firstLeadingBit(u_input.b.zz), select(vec2<i32>(arg_1, 2147483647i), vec2<i32>(arg_1, 2147483647i), arg_3.d.xx)));
    let var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_4(select(vec4<bool>(arg_2, true, true, arg_2), arg_3.d, arg_3.d), arg_3.a, !arg_3.c))))));
    return _wgslsmith_f_op_f32(665f - 245f);
}

fn func_8(arg_0: vec3<u32>, arg_1: f32, arg_2: Struct_1, arg_3: Struct_3) -> f32 {
    for (var var_0 = -2147483647i; _wgslsmith_mod_u32(_wgslsmith_mod_u32(func_5(), ~arg_0.x), arg_3.c.b.x) == (~(~(~global4[_wgslsmith_index_u32(4294967295u, 8u)])) >> (~min(67523u, 1u) % 32u)); var_0 -= 1i) {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        global0 = array<u32, 11>();
        continue;
    }
    let var_0 = _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global3.x) - _wgslsmith_f_op_f32(f32(-1f) * -629f))));
    global3 = vec4<f32>(global2.x, arg_3.a, 590f, _wgslsmith_div_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(global3.x - _wgslsmith_f_op_f32(abs(var_0))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_3.a - global3.x) - -917f)), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_3.d.x + arg_3.d.x) * _wgslsmith_f_op_f32(trunc(-1000f)))))));
    var var_1 = max(u_input.b.zy, firstTrailingBit(_wgslsmith_mod_vec2_i32(vec2<i32>(i32(-1i) * -1i, abs(0i)), -max(vec2<i32>(49493i, 1i), vec2<i32>(u_input.c.x, i32(-2147483648))))));
    var var_2 = vec2<bool>(0i <= -arg_2.b.x, arg_3.c.d.x);
    return global2.x;
}

fn func_2() -> Struct_2 {
    global2 = _wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(func_8(u_input.d, _wgslsmith_f_op_f32(func_7(true, _wgslsmith_mod_i32(0i, u_input.b.x), func_3(global1[_wgslsmith_index_u32(0u, 16u)], Struct_2(true, vec4<u32>(global0[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(4294967295u, 8u)], 8u)], 11u)], global0[_wgslsmith_index_u32(u_input.a, 11u)], 21595u, 6669u), true, vec4<bool>(true, false, true, true)), vec4<u32>(u_input.d.x, global4[_wgslsmith_index_u32(1u, 8u)], global4[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(0u, 8u)], 8u)], 100983u)), Struct_2(true, vec4<u32>(0u, 4546u, global4[_wgslsmith_index_u32(6298u, 8u)], global0[_wgslsmith_index_u32(u_input.a, 11u)]), false, vec4<bool>(false, false, true, false)))), Struct_1(u_input.b.x, _wgslsmith_sub_vec3_i32(u_input.b.ywx, u_input.c.zyw), u_input.d), Struct_3(global2.x, true, Struct_2(true, vec4<u32>(u_input.a, 4294967295u, global0[_wgslsmith_index_u32(4294967295u, 11u)], global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(20718u, 11u)], 11u)]), true, vec4<bool>(false, true, false, true)), _wgslsmith_f_op_vec3_f32(global3.wzz + vec3<f32>(111f, -1000f, global2.x))))), -328f, global3.x));
    for (var var_0 = -1i; var_0 >= 0i; var_0 += 1i) {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        continue;
    }
    let var_0 = global3.yy;
    for (var var_1: i32; select(false, true && !(!any(vec3<bool>(true, false, true))), !(false && func_3(global1[_wgslsmith_index_u32(_wgslsmith_div_u32(0u, 1u), 16u)], Struct_2(false, vec4<u32>(global4[_wgslsmith_index_u32(4294967295u, 8u)], 48002u, 28431u, 62941u), false, vec4<bool>(true, false, false, true)), vec4<u32>(u_input.d.x, global4[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(4294967295u, 8u)], 8u)], 57486u, 4294967295u)))); var_1 += 1i) {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
    }
    loop {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        continue;
    }
    return Struct_2(!(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(func_4(vec4<bool>(true, true, true, true), true, true)) + global2.x) > _wgslsmith_f_op_f32(-1076f)), ~(~max(vec4<u32>(87008u, 4528u, 79612u, 26231u), _wgslsmith_add_vec4_u32(vec4<u32>(u_input.d.x, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(4294967295u, 11u)], 11u)], u_input.a, global4[_wgslsmith_index_u32(u_input.d.x, 8u)]), vec4<u32>(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(4294967295u, 11u)], 11u)], 4294967295u, 7426u, 3909u)))), all(vec2<bool>(true, true)), !select(vec4<bool>(true, true, true, false), vec4<bool>(all(vec4<bool>(false, false, false, false)), any(vec3<bool>(false, true, true)), true, global4[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(u_input.a, 8u)], 8u)] > 1u), select(select(vec4<bool>(true, true, false, false), vec4<bool>(false, true, true, false), false), vec4<bool>(false, false, true, false), u_input.b.x == 1i)));
}

fn func_1() -> vec2<bool> {
    switch (-_wgslsmith_div_i32(firstTrailingBit(u_input.c.x), u_input.c.x)) {
        case 21626i: {
        }
        case -1i: {
            global4 = array<u32, 8>();
            loop {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                var var_0 = func_2();
                break;
            }
            var var_0 = _wgslsmith_mod_vec4_u32(abs(vec4<u32>(global4[_wgslsmith_index_u32(u_input.d.x, 8u)], abs(83347u), u_input.d.x, 0u)), ~(~_wgslsmith_sub_vec4_u32(min(vec4<u32>(4294967295u, global4[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(0u, 8u)], 8u)], 0u, 4294967295u), vec4<u32>(46139u, 1u, 0u, 12478u)), _wgslsmith_mod_vec4_u32(vec4<u32>(global0[_wgslsmith_index_u32(4294967295u, 11u)], 0u, 17269u, 0u), vec4<u32>(global0[_wgslsmith_index_u32(46982u, 11u)], global4[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a, 11u)], 11u)], 11u)], 11u)], 8u)], 64510u, global0[_wgslsmith_index_u32(39984u, 11u)])))));
        }
        case -12657i: {
            global0 = array<u32, 11>();
        }
        default: {
            for (var var_0 = 28995i; true; var_0 += 1i) {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                break;
            }
            global3 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-global1[_wgslsmith_index_u32(select(1u, ~(~4294967295u), true), 16u)]) + _wgslsmith_f_op_vec4_f32(abs(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(select(vec4<f32>(-685f, global3.x, global3.x, -390f), vec4<f32>(global2.x, 542f, global3.x, -428f), false)) - vec4<f32>(757f, 549f, global2.x, 882f))))));
            for (var var_0 = 29264i; true; ) {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            }
            global3 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(-895f, global3.x, global2.x, global2.x) - _wgslsmith_f_op_vec4_f32(vec4<f32>(global3.x, 1085f, -706f, global3.x) * global1[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(u_input.a, 8u)], 16u)])) * _wgslsmith_f_op_vec4_f32(floor(global1[_wgslsmith_index_u32(func_5(), 16u)])))));
        }
    }
    switch (~(~74595i)) {
        case 2147483647i: {
            for (var var_0 = -78709i; !(func_5() <= global0[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(u_input.d.x, 8u)], 11u)]); var_0 -= 1i) {
                if (LOOP_COUNTERS[16u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
                global2 = _wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(global3.zxz, vec3<f32>(_wgslsmith_f_op_f32(global3.x + global2.x), _wgslsmith_div_f32(802f, global2.x), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(global2.x, global3.x)) * 2336f))) + _wgslsmith_f_op_vec3_f32(min(_wgslsmith_div_vec3_f32(global3.www, _wgslsmith_f_op_vec3_f32(vec3<f32>(-291f, 1082f, 1516f) - _wgslsmith_f_op_vec3_f32(abs(global3.zzw)))), vec3<f32>(1344f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(global2.x + -586f)), global3.x))));
                break;
            }
            for (var var_0: i32; var_0 >= -84497i; ) {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                break;
            }
            global1 = array<vec4<f32>, 16>();
            var var_0 = ~vec3<u32>(global0[_wgslsmith_index_u32(~_wgslsmith_div_u32(global4[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(_wgslsmith_add_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(u_input.d.x, 8u)], 11u)], 8u)], 11u)], 11u)], 0u), 8u)], 11u)], 8u)], 34499u), 11u)], ~func_2().b.x, global0[_wgslsmith_index_u32(_wgslsmith_add_u32(~global4[_wgslsmith_index_u32(u_input.a, 8u)] ^ ~0u, 1u), 11u)]);
        }
        default: {
            return !(!select(vec2<bool>(global4[_wgslsmith_index_u32(70594u, 8u)] <= 23200u, all(vec4<bool>(false, true, true, true))), func_2().d.wy, select(select(vec2<bool>(false, false), vec2<bool>(true, false), false), select(vec2<bool>(false, false), vec2<bool>(true, false), false), select(false, true, false))));
        }
    }
    global3 = global1[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(71110u, 8u)], 16u)];
    for (var var_0 = i32(-2147483648); var_0 != 0i; var_0 -= 1i) {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
    }
    let var_0 = Struct_2(func_3(vec4<f32>(_wgslsmith_f_op_f32(max(global2.x, _wgslsmith_f_op_f32(-230f))), _wgslsmith_f_op_f32(-global3.x), global3.x, global2.x), func_2(), vec4<u32>(_wgslsmith_mult_u32(global0[_wgslsmith_index_u32(25820u, 11u)] >> (30941u % 32u), u_input.a), global0[_wgslsmith_index_u32(~_wgslsmith_div_u32(44256u, 52339u), 11u)], u_input.d.x, firstTrailingBit(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a, 11u)] ^ global4[_wgslsmith_index_u32(39129u, 8u)], 11u)], 11u)]))), _wgslsmith_clamp_vec4_u32(firstTrailingBit(~(~vec4<u32>(u_input.a, 4294967295u, 4294967295u, global0[_wgslsmith_index_u32(1u, 11u)]))), max(~vec4<u32>(u_input.d.x, 4294967295u, 61394u, 2629u), _wgslsmith_clamp_vec4_u32(~vec4<u32>(4294967295u, 66844u, u_input.d.x, u_input.d.x), abs(vec4<u32>(1u, u_input.a, global0[_wgslsmith_index_u32(53433u, 11u)], 23291u)), select(vec4<u32>(0u, global0[_wgslsmith_index_u32(u_input.a, 11u)], u_input.d.x, 72520u), vec4<u32>(global0[_wgslsmith_index_u32(5196u, 11u)], u_input.a, global0[_wgslsmith_index_u32(20075u, 11u)], 23020u), vec4<bool>(true, false, false, true)))), _wgslsmith_add_vec4_u32(~(~vec4<u32>(0u, 28409u, 57069u, 4294967295u)), vec4<u32>(_wgslsmith_clamp_u32(11175u, 11513u, 0u), ~global4[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(4294967295u, 8u)], 8u)], _wgslsmith_sub_u32(1u, global0[_wgslsmith_index_u32(0u, 11u)]), 32877u >> (u_input.a % 32u)))), func_2().a, vec4<bool>(func_2().c || (u_input.c.x <= 20257i), true, any(vec4<bool>(true, true, true, any(vec3<bool>(true, true, false)))), true));
    return !vec2<bool>(all(vec2<bool>(true, !var_0.d.x)), !var_0.c);
}

@compute
@workgroup_size(1)
fn main() {
    switch (select(1i, i32(-2147483648), all(vec3<bool>(false, true, any(vec2<bool>(true, true)))))) {
        case -9343i: {
            let var_0 = select(!select(vec2<bool>(select(true, true, true), true), select(select(vec2<bool>(false, false), vec2<bool>(false, true), false), func_1(), vec2<bool>(true, true)), vec2<bool>(true, true)), vec2<bool>(any(select(vec4<bool>(true, false, false, true), vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true))), all(select(vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true), vec4<bool>(false, false, true, false)))), !select(select(vec2<bool>(false, false), func_1(), true), !select(vec2<bool>(true, false), vec2<bool>(false, true), true), all(func_2().d.yy)));
            switch (i32(-2147483648)) {
                default: {
                    let var_1 = Struct_3(_wgslsmith_f_op_f32(sign(global2.x)), var_0.x, Struct_2(false, ~(~abs(vec4<u32>(0u, u_input.d.x, global0[_wgslsmith_index_u32(u_input.d.x, 11u)], global0[_wgslsmith_index_u32(4294967295u, 11u)]))), all(!(!vec3<bool>(true, var_0.x, var_0.x))), select(!(!vec4<bool>(var_0.x, true, var_0.x, var_0.x)), !vec4<bool>(false, var_0.x, var_0.x, var_0.x), true)), _wgslsmith_f_op_vec3_f32(-vec3<f32>(global2.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global2.x) - _wgslsmith_f_op_f32(282f - global3.x)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_6(4294967295u, global0[_wgslsmith_index_u32(0u, 11u)], u_input.c, vec3<bool>(false, false, false)))))));
                }
            }
            let var_1 = _wgslsmith_f_op_vec2_f32(min(_wgslsmith_f_op_vec2_f32(ceil(vec2<f32>(global3.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(global2.x)))))), _wgslsmith_f_op_vec2_f32(vec2<f32>(449f, _wgslsmith_f_op_f32(_wgslsmith_div_f32(-784f, global3.x) + global3.x)) - _wgslsmith_f_op_vec2_f32(max(vec2<f32>(_wgslsmith_f_op_f32(-global3.x), _wgslsmith_f_op_f32(-global2.x)), _wgslsmith_f_op_vec2_f32(max(global2.yz, global2.yx)))))));
        }
        default: {
        }
    }
    if (any(vec2<bool>(false, false))) {
        let var_0 = Struct_3(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1000f))), false, Struct_2(true, select(vec4<u32>(global4[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(func_5(), 8u)], 8u)], _wgslsmith_mult_u32(global4[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(u_input.d.x, 8u)], 8u)], 8u)], 4294967295u), 15305u ^ u_input.a, 48744u), ~(vec4<u32>(global4[_wgslsmith_index_u32(global4[_wgslsmith_index_u32(4294967295u, 8u)], 8u)], 62422u, 91069u, 38476u) >> (vec4<u32>(global0[_wgslsmith_index_u32(22670u, 11u)], 0u, 1u, 4294967295u) % vec4<u32>(32u))), ~9731u <= _wgslsmith_dot_vec2_u32(vec2<u32>(19553u, global4[_wgslsmith_index_u32(14061u, 8u)]), vec2<u32>(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a, 11u)], 11u)], 4294967295u))), false, vec4<bool>(true || any(vec4<bool>(true, true, true, true)), global4[_wgslsmith_index_u32(abs(0u), 8u)] == select(u_input.a, 1u, true), !any(vec4<bool>(true, true, true, false)), func_3(global1[_wgslsmith_index_u32(firstTrailingBit(4294967295u), 16u)], func_2(), vec4<u32>(u_input.a, u_input.d.x, global4[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(18225u, 11u)], 8u)], global0[_wgslsmith_index_u32(44053u, 11u)]) | vec4<u32>(8924u, u_input.d.x, 11938u, global0[_wgslsmith_index_u32(102452u, 11u)])))), vec3<f32>(-1117f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(global2.x)) - -995f), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-423f + global2.x)), -365f)));
        global4 = array<u32, 8>();
    }
    loop {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
        global0 = array<u32, 11>();
    }
    if (true) {
        let var_0 = Struct_3(275f, any(vec2<bool>(true, true)), func_2(), _wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(global3.zxz, global3.xyz)));
        let var_1 = select(var_0.c.d.zw, vec2<bool>(!var_0.c.c && true, !var_0.b), select(vec2<bool>(func_2().c, !var_0.c.a), var_0.c.d.wz, select(func_1(), func_2().d.zz, select(select(vec2<bool>(var_0.b, true), vec2<bool>(var_0.b, var_0.b), var_0.c.d.xy), var_0.c.d.yy, any(vec4<bool>(var_0.c.c, false, true, false))))));
        if (global3.x >= _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global2.x))) {
            global1 = array<vec4<f32>, 16>();
            var var_2 = func_2();
            let var_3 = Struct_3(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(1232f, _wgslsmith_div_f32(_wgslsmith_f_op_f32(-global3.x), _wgslsmith_f_op_f32(-1503f + 1588f))))), !select(true, true, true), var_0.c, _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(step(var_0.d, vec3<f32>(_wgslsmith_f_op_f32(-global2.x), _wgslsmith_f_op_f32(abs(var_0.a)), -447f))), global3.xzy)));
        }
    }
    var var_0 = vec3<i32>(-1i) * -(vec3<i32>(firstTrailingBit(-1i), 46614i, firstLeadingBit(u_input.c.x)) & select(u_input.b.yyw, select(vec3<i32>(-22064i, u_input.b.x, u_input.b.x), u_input.c.wyw, vec3<bool>(true, false, false)), vec3<bool>(true, true, true)));
    let x = u_input.a;
    s_output = StorageBuffer(global3.xyx);
}

`;