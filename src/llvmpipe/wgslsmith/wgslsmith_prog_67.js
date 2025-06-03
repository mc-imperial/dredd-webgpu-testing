export const input = [121,80,32,163,198,252,99,95,229,51,182,87,138,189,152,96,210,160,130,144,91,126,150,179,220,24,78,18,66,176,87,131,178,73,217,31,189,236,124,148,79,75,149,51,12,102,65,49,235,132,17,204,11,187,133,134,254,165,103,201,129,21,185,93];
export const expected = [121,80,32,163,198,252,99,95,229,51,182,87,138,189,152,96,210,160,130,144,91,126,150,179,220,24,78,18,66,176,87,131,178,73,217,31,189,236,124,148,79,75,149,51,12,102,65,49,235,132,17,204,11,187,133,134,254,165,103,201,129,21,185,93];
export const shaderCode = ` 
 // {"0:0":[121,80,32,163,198,252,99,95,229,51,182,87,138,189,152,96,210,160,130,144,91,126,150,179,220,24,78,18,66,176,87,131,178,73,217,31,189,236,124,148,79,75,149,51,12,102,65,49,235,132,17,204,11,187,133,134,254,165,103,201,129,21,185,93]}
// Seed: 7234172275819294106

struct Struct_1 {
    a: u32,
    b: u32,
    c: vec2<bool>,
    d: vec4<f32>,
}

struct Struct_2 {
    a: Struct_1,
}

struct Struct_3 {
    a: Struct_1,
    b: Struct_2,
    c: i32,
}

struct UniformBuffer {
    a: vec4<u32>,
    b: vec4<i32>,
    c: vec2<u32>,
    d: vec4<i32>,
}

struct StorageBuffer {
    a: u32,
    b: f32,
    c: f32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: Struct_1 = Struct_1(85745u, 9119u, vec2<bool>(true, true), vec4<f32>(-1809f, 829f, 1227f, 833f));

var<private> global1: array<vec3<f32>, 23>;

var<private> global2: vec3<f32>;

var<private> global3: array<vec3<bool>, 10> = array<vec3<bool>, 10>(vec3<bool>(true, true, false), vec3<bool>(false, true, true), vec3<bool>(true, false, false), vec3<bool>(true, true, false), vec3<bool>(true, false, false), vec3<bool>(false, true, true), vec3<bool>(false, true, false), vec3<bool>(false, false, true), vec3<bool>(false, false, false), vec3<bool>(true, false, false));

var<private> LOOP_COUNTERS: array<u32, 16>;

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn func_6(arg_0: u32, arg_1: vec2<i32>, arg_2: vec4<bool>, arg_3: vec2<u32>) -> bool {
    global0 = Struct_1(~arg_3.x, arg_3.x, vec2<bool>(!(!global0.c.x & all(vec2<bool>(false, false))), all(!(!vec3<bool>(global0.c.x, arg_2.x, arg_2.x)))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(round(vec4<f32>(global0.d.x, global2.x, global2.x, 799f))), global0.d))))));
    global0 = Struct_1(countOneBits(_wgslsmith_mod_u32(~_wgslsmith_clamp_u32(global0.a, global0.a, arg_0), _wgslsmith_add_u32(_wgslsmith_dot_vec4_u32(u_input.a, vec4<u32>(u_input.a.x, u_input.a.x, 42245u, u_input.a.x)), 71036u))), 4294967295u, !vec2<bool>(any(!vec2<bool>(false, global0.c.x)), !(global0.d.x == -1000f)), global0.d);
    global3 = array<vec3<bool>, 10>();
    var var_0 = Struct_1(_wgslsmith_dot_vec2_u32(firstLeadingBit(vec2<u32>(arg_3.x, ~37708u)), ~(_wgslsmith_mult_vec2_u32(arg_3, u_input.c) << (u_input.c % vec2<u32>(32u)))), firstLeadingBit(arg_3.x & u_input.c.x), !select(global0.c, select(vec2<bool>(arg_2.x, global0.c.x), select(vec2<bool>(arg_2.x, false), vec2<bool>(false, arg_2.x), global0.c), all(vec4<bool>(global0.c.x, true, false, true))), !arg_2.x), _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(global2.x, 299f, global2.x, 1000f) + _wgslsmith_f_op_vec4_f32(global0.d - global0.d))), _wgslsmith_f_op_vec4_f32(max(global0.d, _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(global2.x, 225f, -1619f, global0.d.x))) + _wgslsmith_f_op_vec4_f32(max(global0.d, global0.d)))))));
    if (!all(select(select(arg_2.zxx, !vec3<bool>(var_0.c.x, true, arg_2.x), vec3<bool>(arg_2.x, true, false)), !select(arg_2.xyx, global3[_wgslsmith_index_u32(0u, 10u)], var_0.c.x), (4294967295u != u_input.a.x) | any(var_0.c)))) {
        for (var var_1 = 0i; ; var_1 += 1i) {
            if (LOOP_COUNTERS[0u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
            let var_2 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(exp2(_wgslsmith_div_vec2_f32(var_0.d.xz, _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(var_0.d.zx - var_0.d.xz), _wgslsmith_f_op_vec2_f32(-global0.d.wz))))));
            return !(!(var_2.x > _wgslsmith_f_op_f32(-global2.x)));
        }
        if (any(select(vec4<bool>(false, !(arg_1.x <= arg_1.x), var_0.c.x, global0.c.x), !select(!arg_2, vec4<bool>(false, global0.c.x, global0.c.x, global0.c.x), arg_2), !vec4<bool>(194f == var_0.d.x, any(arg_2.zwx), true, true)))) {
            global2 = _wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(global0.d.x, -1141f, 1728f))))));
            global2 = global1[_wgslsmith_index_u32(_wgslsmith_dot_vec4_u32(~(~vec4<u32>(select(23938u, 6189u, true), 4294967295u, abs(4294967295u), u_input.a.x)), vec4<u32>(var_0.a, (arg_3.x | arg_3.x) | ~11040u, _wgslsmith_dot_vec2_u32(~arg_3, ~vec2<u32>(0u, 1u)), ~0u) & countOneBits(vec4<u32>(0u, _wgslsmith_mult_u32(arg_0, global0.a), 1u, arg_0 | arg_0))), 23u)];
            let var_1 = ~u_input.d.zz;
            var var_2 = u_input.b.wxw;
            global3 = array<vec3<bool>, 10>();
        }
    }
    return true;
}

fn func_5(arg_0: u32) -> bool {
    let var_0 = -vec3<i32>(2147483647i, ~_wgslsmith_dot_vec3_i32(u_input.d.zyz, vec3<i32>(u_input.d.x, i32(-2147483648), u_input.d.x)) >> (4294967295u % 32u), -1i);
    loop {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        break;
    }
    let var_1 = Struct_1(_wgslsmith_clamp_u32(u_input.c.x, u_input.c.x, ~21589u), _wgslsmith_mult_u32(1u, u_input.c.x), select(vec2<bool>(true, all(vec2<bool>(global0.c.x, false))), select(global0.c, global0.c, func_6(~arg_0, u_input.b.yz, vec4<bool>(global0.c.x, false, global0.c.x, global0.c.x), u_input.c)), global0.c), _wgslsmith_f_op_vec4_f32(exp2(vec4<f32>(global0.d.x, _wgslsmith_f_op_f32(-_wgslsmith_div_f32(-406f, 405f)), global2.x, _wgslsmith_f_op_f32(-687f - _wgslsmith_f_op_f32(global2.x - 866f))))));
    let var_2 = !select(global0.c, select(vec2<bool>(true, any(vec2<bool>(global0.c.x, var_1.c.x))), global0.c, select(vec2<bool>(true, global0.c.x), select(var_1.c, vec2<bool>(true, var_1.c.x), true), select(global0.c, vec2<bool>(true, global0.c.x), vec2<bool>(global0.c.x, true)))), func_6(u_input.c.x, var_0.xz, select(!vec4<bool>(true, false, false, global0.c.x), !vec4<bool>(false, global0.c.x, true, false), true), ~(u_input.c << (vec2<u32>(arg_0, 4294967295u) % vec2<u32>(32u)))));
    var var_3 = Struct_3(Struct_1(_wgslsmith_clamp_u32(abs(_wgslsmith_div_u32(var_1.b, 79113u)), u_input.c.x, _wgslsmith_add_u32(~44310u, arg_0)), 1564u, vec2<bool>(true, var_1.c.x), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(max(vec4<f32>(global2.x, global0.d.x, 568f, global2.x), vec4<f32>(1134f, global0.d.x, 164f, var_1.d.x))) + _wgslsmith_f_op_vec4_f32(trunc(global0.d))) - _wgslsmith_f_op_vec4_f32(abs(_wgslsmith_f_op_vec4_f32(select(global0.d, var_1.d, vec4<bool>(var_1.c.x, true, true, global0.c.x))))))), Struct_2(Struct_1(~98570u, ~8450u, select(vec2<bool>(false, false), var_2, select(var_1.c, global0.c, true)), vec4<f32>(_wgslsmith_f_op_f32(-global0.d.x), _wgslsmith_f_op_f32(global0.d.x - 1077f), _wgslsmith_f_op_f32(-488f), _wgslsmith_f_op_f32(-global2.x)))), abs(-38394i));
    return select(false, any(select(global3[_wgslsmith_index_u32(min(u_input.a.x, global0.b) << (select(var_1.b, 1u, true) % 32u), 10u)], select(select(global3[_wgslsmith_index_u32(arg_0, 10u)], global3[_wgslsmith_index_u32(1u, 10u)], false), select(vec3<bool>(var_2.x, false, var_2.x), global3[_wgslsmith_index_u32(12568u, 10u)], global3[_wgslsmith_index_u32(1u, 10u)]), var_3.a.c.x), global3[_wgslsmith_index_u32(reverseBits(~global0.a), 10u)])), var_1.c.x);
}

fn func_4(arg_0: vec4<u32>, arg_1: vec3<bool>, arg_2: i32, arg_3: Struct_1) -> Struct_1 {
    for (var var_0 = 2147483647i; var_0 == 0i; var_0 += 1i) {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        continue;
    }
    for (var var_0 = i32(-2147483648); any(vec2<bool>(true, all(!arg_3.c))); var_0 -= 1i) {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        continue;
    }
    switch (max(i32(-2147483648), _wgslsmith_add_i32(i32(-2147483648), _wgslsmith_sub_i32(i32(-2147483648), u_input.b.x)))) {
        default: {
            for (var var_0 = -22936i; !func_5(~57905u); var_0 = -40985i) {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
            }
            if (false) {
                var var_0 = select(vec2<bool>(true, !func_6(firstLeadingBit(80239u), u_input.d.yz, !vec4<bool>(false, global0.c.x, arg_3.c.x, arg_3.c.x), select(vec2<u32>(u_input.a.x, arg_0.x), vec2<u32>(arg_3.a, arg_3.a), vec2<bool>(arg_1.x, arg_1.x)))), select(arg_1.zx, arg_1.xy, !(1u == _wgslsmith_add_u32(arg_3.b, global0.a))), arg_3.c.x);
                let var_1 = !arg_3.c.x;
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        var var_0 = Struct_2(arg_3);
        let var_1 = u_input.d.wx;
    }
    global2 = _wgslsmith_f_op_vec3_f32(max(global1[_wgslsmith_index_u32(4294967295u, 23u)], _wgslsmith_f_op_vec3_f32(vec3<f32>(arg_3.d.x, _wgslsmith_f_op_f32(f32(-1f) * -1131f), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(round(-396f))))) * _wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(-global0.d.x), global0.d.x, -152f) + _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(select(vec3<f32>(arg_3.d.x, global0.d.x, -859f), global1[_wgslsmith_index_u32(4294967295u, 23u)], vec3<bool>(true, arg_1.x, arg_1.x))))))));
    return arg_3;
}

fn func_7(arg_0: Struct_2, arg_1: u32) -> Struct_1 {
    let var_0 = true;
    switch (_wgslsmith_sub_i32(u_input.b.x, firstLeadingBit(-(u_input.b.x << (u_input.c.x % 32u)))) ^ -17849i) {
        case -6437i: {
            if (any(!vec4<bool>(true, all(arg_0.a.c), true, var_0))) {
                let var_1 = ~_wgslsmith_mult_vec2_i32(abs(vec2<i32>(-1i) * -u_input.b.xw), u_input.b.yx);
                global1 = array<vec3<f32>, 23>();
                let var_2 = vec3<f32>(_wgslsmith_f_op_f32(-1420f), arg_0.a.d.x, _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(-global2.x), _wgslsmith_f_op_f32(global2.x + _wgslsmith_f_op_f32(select(149f, global2.x, true))))));
                global3 = array<vec3<bool>, 10>();
            }
            global1 = array<vec3<f32>, 23>();
        }
        case 0i: {
            let var_1 = min(~firstTrailingBit(84159u), ~arg_1);
            let var_2 = Struct_3(Struct_1(~abs(var_1), 4294967295u, select(select(global0.c, select(arg_0.a.c, global0.c, arg_0.a.c), !global0.c), vec2<bool>(false, all(vec4<bool>(true, true, global0.c.x, false))), vec2<bool>(!global0.c.x, func_4(vec4<u32>(var_1, u_input.c.x, var_1, 4294967295u), global3[_wgslsmith_index_u32(23704u, 10u)], u_input.b.x, arg_0.a).c.x)), _wgslsmith_f_op_vec4_f32(-arg_0.a.d)), Struct_2(func_4(u_input.a, global3[_wgslsmith_index_u32(~arg_1, 10u)], firstTrailingBit(u_input.d.x), arg_0.a)), ~(-select(_wgslsmith_add_i32(58079i, u_input.b.x), _wgslsmith_add_i32(2147483647i, u_input.d.x), global0.c.x)));
            global2 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(ceil(vec3<f32>(118f, -763f, -1199f))) * var_2.b.a.d.zxw)));
        }
        case 19105i: {
            global3 = array<vec3<bool>, 10>();
            if (false | var_0) {
                let var_1 = _wgslsmith_mod_i32(_wgslsmith_sub_i32(_wgslsmith_sub_i32(firstTrailingBit(u_input.b.x), u_input.d.x), u_input.b.x), 0i >> (func_4(~_wgslsmith_add_vec4_u32(u_input.a, u_input.a), select(vec3<bool>(global0.c.x, true, arg_0.a.c.x), global3[_wgslsmith_index_u32(~46935u, 10u)], global3[_wgslsmith_index_u32(~4294967295u, 10u)]), u_input.d.x, func_4(~vec4<u32>(global0.a, u_input.a.x, 1u, arg_0.a.b), !global3[_wgslsmith_index_u32(u_input.a.x, 10u)], -49293i, arg_0.a)).a % 32u));
                var var_2 = _wgslsmith_clamp_vec2_u32(abs(vec2<u32>(50992u, 16496u)), _wgslsmith_mod_vec2_u32(firstLeadingBit(~u_input.a.wz), countOneBits(abs(vec2<u32>(arg_0.a.a, 20383u)))), vec2<u32>(_wgslsmith_dot_vec2_u32(u_input.c, firstLeadingBit(u_input.a.wy >> (vec2<u32>(global0.b, arg_1) % vec2<u32>(32u)))), u_input.c.x));
                global2 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-func_4(vec4<u32>(u_input.a.x ^ 6640u, select(1u, 0u, false), ~5471u, arg_1), vec3<bool>(global0.c.x || true, any(vec4<bool>(var_0, false, var_0, var_0)), true), i32(-2147483648), func_4(vec4<u32>(arg_1, 4294967295u, 67102u, 38517u), select(global3[_wgslsmith_index_u32(88533u, 10u)], global3[_wgslsmith_index_u32(arg_0.a.b, 10u)], global3[_wgslsmith_index_u32(4294967295u, 10u)]), ~0i, Struct_1(arg_0.a.a, u_input.a.x, arg_0.a.c, arg_0.a.d))).d.zxy) - global1[_wgslsmith_index_u32(~arg_0.a.b, 23u)]);
                let var_3 = arg_0.a;
            }
            var var_1 = Struct_2(func_4(~(~(~vec4<u32>(arg_0.a.b, 0u, 19161u, 1u))), select(global3[_wgslsmith_index_u32(~_wgslsmith_dot_vec3_u32(u_input.a.yzw, u_input.a.zxx), 10u)], select(!global3[_wgslsmith_index_u32(arg_0.a.b, 10u)], global3[_wgslsmith_index_u32(_wgslsmith_add_u32(0u, arg_1), 10u)], false), false), abs(~u_input.b.x & _wgslsmith_div_i32(u_input.b.x, u_input.d.x)), arg_0.a));
        }
        case -62969i: {
            var var_1 = max(vec2<i32>(-1i) * -abs(u_input.b.xy), -u_input.d.ww);
            loop {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                return func_4(u_input.a, vec3<bool>(false, func_5(0u), true), u_input.b.x, func_4(_wgslsmith_mod_vec4_u32(_wgslsmith_mult_vec4_u32(~u_input.a, min(u_input.a, vec4<u32>(global0.b, arg_0.a.b, global0.a, 69048u))), vec4<u32>(~0u, 1u, ~arg_1, ~4294967295u)), select(select(vec3<bool>(false, var_0, var_0), global3[_wgslsmith_index_u32(arg_0.a.b, 10u)], global3[_wgslsmith_index_u32(44538u ^ u_input.a.x, 10u)]), !(!global3[_wgslsmith_index_u32(u_input.a.x, 10u)]), select(select(vec3<bool>(false, false, var_0), global3[_wgslsmith_index_u32(global0.b, 10u)], true), !global3[_wgslsmith_index_u32(u_input.c.x, 10u)], !global3[_wgslsmith_index_u32(0u, 10u)])), 0i, func_4(~vec4<u32>(134992u, 4294967295u, global0.b, 0u), !(!vec3<bool>(arg_0.a.c.x, arg_0.a.c.x, false)), i32(-1i) * -u_input.d.x, Struct_1(arg_1 | 1u, max(0u, 29683u), !arg_0.a.c, vec4<f32>(-173f, arg_0.a.d.x, global2.x, global2.x)))));
            }
            let var_2 = u_input.a.yyw;
            switch (-21082i) {
                case 1i: {
                    let var_3 = ~vec2<u32>(4294967295u, ~28921u);
                    var var_4 = arg_0;
                    var var_5 = Struct_3(func_4(min(_wgslsmith_sub_vec4_u32(~u_input.a, u_input.a), u_input.a), !global3[_wgslsmith_index_u32(arg_0.a.b, 10u)], u_input.d.x, var_4.a), arg_0, var_1.x);
                }
                case 72i: {
                    var var_3 = Struct_1(0u, _wgslsmith_dot_vec2_u32(var_2.yz, _wgslsmith_mult_vec2_u32(vec2<u32>(~arg_0.a.a, var_2.x), reverseBits(~var_2.xy))), select(global0.c, select(!arg_0.a.c, vec2<bool>(arg_0.a.c.x, global0.c.x), global0.c.x), all(select(vec2<bool>(false, false), arg_0.a.c, any(vec4<bool>(false, var_0, var_0, true))))), _wgslsmith_f_op_vec4_f32(floor(vec4<f32>(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-arg_0.a.d.x), _wgslsmith_f_op_f32(f32(-1f) * -920f))), func_4(~vec4<u32>(45423u, 4294967295u, global0.a, arg_0.a.b), vec3<bool>(global0.c.x, false, arg_0.a.c.x), ~u_input.d.x, func_4(vec4<u32>(var_2.x, 4294967295u, arg_1, 1202u), vec3<bool>(arg_0.a.c.x, arg_0.a.c.x, true), var_1.x, Struct_1(4294967295u, arg_1, global0.c, arg_0.a.d))).d.x, -407f, global2.x))));
                    var_1 = _wgslsmith_add_vec2_i32(vec2<i32>(-1i, _wgslsmith_dot_vec2_i32(u_input.b.xy, reverseBits(_wgslsmith_mod_vec2_i32(u_input.d.xw, u_input.b.zx)))), ~u_input.b.xw);
                    let var_4 = reverseBits(abs(_wgslsmith_mod_vec2_u32(select(u_input.a.yw, var_2.yy, func_6(arg_0.a.a, u_input.b.zx, vec4<bool>(var_3.c.x, var_3.c.x, false, global0.c.x), u_input.c)), vec2<u32>(~1u, 29719u))));
                    let var_5 = _wgslsmith_f_op_f32(750f - -1493f);
                }
                case -1i: {
                    var var_3 = Struct_2(Struct_1(arg_0.a.b, 1u, global0.c, _wgslsmith_div_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(-634f), _wgslsmith_f_op_f32(-global0.d.x), global2.x, _wgslsmith_f_op_f32(f32(-1f) * -1259f)), _wgslsmith_f_op_vec4_f32(-arg_0.a.d))));
                    var var_4 = Struct_3(func_4(u_input.a, global3[_wgslsmith_index_u32(firstTrailingBit(_wgslsmith_sub_u32(~55204u, ~arg_1)), 10u)], select(~_wgslsmith_div_i32(u_input.d.x, 1i), var_1.x, false), Struct_1(_wgslsmith_mod_u32(89811u, ~u_input.a.x), ~arg_0.a.b, !func_4(u_input.a, global3[_wgslsmith_index_u32(4294967295u, 10u)], 1i, Struct_1(global0.a, 12102u, vec2<bool>(global0.c.x, true), global0.d)).c, _wgslsmith_f_op_vec4_f32(global0.d - var_3.a.d))), Struct_2(Struct_1(var_2.x, u_input.a.x, vec2<bool>(!arg_0.a.c.x, false), var_3.a.d)), abs(~(~(-u_input.b.x))));
                }
                case 18200i: {
                    var_1 = firstLeadingBit(firstTrailingBit(-u_input.b.yx));
                    global3 = array<vec3<bool>, 10>();
                }
                default: {
                }
            }
            for (var var_3: i32; var_3 <= i32(-2147483648); var_3 += 1i) {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                var var_4 = func_4(vec4<u32>(~max(arg_0.a.a, firstTrailingBit(arg_0.a.a)), 1u, 1u, global0.b << (1u % 32u)), !global3[_wgslsmith_index_u32(arg_0.a.a, 10u)], _wgslsmith_sub_i32(_wgslsmith_dot_vec2_i32(-vec2<i32>(u_input.d.x, 6068i), select(vec2<i32>(29715i, 0i), vec2<i32>(11703i, -1i), arg_0.a.c) | (u_input.d.ww | u_input.b.wz)), ~(~(~u_input.b.x))), func_4(u_input.a, !(!(!vec3<bool>(global0.c.x, global0.c.x, true))), min(var_1.x << (4294967295u % 32u), var_1.x >> (_wgslsmith_div_u32(41667u, 34638u) % 32u)), arg_0.a));
                let var_5 = Struct_3(arg_0.a, Struct_2(func_4(_wgslsmith_mod_vec4_u32(u_input.a, vec4<u32>(var_4.a, arg_0.a.a, u_input.a.x, 0u)), vec3<bool>(1802f >= var_4.d.x, !var_0, false), ~u_input.d.x | var_1.x, arg_0.a)), 0i);
                var var_6 = Struct_3(arg_0.a, Struct_2(Struct_1(~select(1u, 9542u, var_4.c.x), u_input.c.x, func_4(vec4<u32>(var_5.a.b, arg_0.a.a, 4294967295u, 0u) ^ vec4<u32>(0u, 1u, 30034u, 15158u), vec3<bool>(true, true, true), abs(2147483647i), func_4(u_input.a, vec3<bool>(var_0, false, var_5.b.a.c.x), 2147483647i, Struct_1(1u, 4294967295u, global0.c, vec4<f32>(global0.d.x, -1396f, 794f, var_4.d.x)))).c, _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(global0.d * vec4<f32>(1994f, var_4.d.x, var_5.a.d.x, -485f)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(-1000f, 1082f, -457f, var_5.a.d.x)), var_0 | false)))), 57378i);
                var var_7 = ~(~(vec3<u32>(12712u, global0.b, var_6.a.a) << (min(vec3<u32>(var_2.x, 1u, 3977u), var_2) % vec3<u32>(32u)))) | var_2;
            }
        }
        default: {
            for (var var_1 = u_input.d.x; global0.c.x; var_1 += 1i) {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                continue;
            }
            var var_1 = arg_0.a;
        }
    }
    global0 = Struct_1(~func_4(vec4<u32>(u_input.c.x, arg_0.a.a, 4294967295u, u_input.a.x) << (u_input.a % vec4<u32>(32u)), vec3<bool>(true, true, any(vec4<bool>(false, arg_0.a.c.x, true, global0.c.x))), 2147483647i, func_4(reverseBits(u_input.a), !vec3<bool>(true, var_0, var_0), 2147483647i, arg_0.a)).a, firstTrailingBit(_wgslsmith_add_u32(~(~5352u), 1u)), arg_0.a.c, _wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(global2.x + 234f), _wgslsmith_f_op_f32(global2.x + global0.d.x), _wgslsmith_f_op_f32(-arg_0.a.d.x), _wgslsmith_f_op_f32(-func_4(u_input.a, vec3<bool>(arg_0.a.c.x, false, var_0), u_input.b.x, Struct_1(4294967295u, 53307u, arg_0.a.c, global0.d)).d.x)) * global0.d));
    var var_1 = Struct_2(arg_0.a);
    let var_2 = global0.b;
    return var_1.a;
}

fn func_3(arg_0: vec4<i32>) -> Struct_1 {
    let var_0 = arg_0.x ^ u_input.d.x;
    loop {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        if (all(select(vec2<bool>(all(vec3<bool>(global0.c.x, true, global0.c.x)), global0.c.x && all(vec4<bool>(global0.c.x, false, global0.c.x, global0.c.x))), vec2<bool>(true, false), global0.c))) {
            break;
        }
        var var_1 = vec3<bool>(global0.c.x, global0.c.x, all(global0.c));
    }
    let var_1 = Struct_3(func_7(Struct_2(func_4(reverseBits(vec4<u32>(u_input.a.x, 92332u, 19529u, 11827u)), vec3<bool>(global0.c.x, true, true), firstLeadingBit(u_input.d.x), Struct_1(global0.b, global0.a, vec2<bool>(true, false), global0.d))), ~u_input.a.x | ~func_4(vec4<u32>(global0.a, global0.a, 30311u, 0u), vec3<bool>(global0.c.x, global0.c.x, global0.c.x), 2147483647i, Struct_1(global0.a, global0.b, vec2<bool>(false, global0.c.x), global0.d)).a), Struct_2(func_4(u_input.a, !global3[_wgslsmith_index_u32(~4294967295u, 10u)], min(~(-11486i), -21829i), Struct_1(40588u, _wgslsmith_mult_u32(1918u, 60931u), func_4(vec4<u32>(4294967295u, global0.a, 4294967295u, global0.a), vec3<bool>(global0.c.x, false, global0.c.x), arg_0.x, Struct_1(2898u, global0.a, global0.c, global0.d)).c, _wgslsmith_f_op_vec4_f32(-vec4<f32>(699f, -1064f, global0.d.x, 561f))))), ~_wgslsmith_mod_i32(-17811i, max(42280i, u_input.d.x) ^ 24148i));
    if (global2.x == var_1.b.a.d.x) {
        for (var var_2: i32; var_2 == -61268i; global2 = vec3<f32>(_wgslsmith_f_op_f32(-1934f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-175f * _wgslsmith_f_op_f32(sign(var_1.b.a.d.x))) - global2.x) - global0.d.x), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(global2.x, global2.x))) * _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-330f * 1722f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(global2.x)))))))) {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        }
        global0 = Struct_1(~u_input.a.x, 63859u, vec2<bool>((_wgslsmith_dot_vec3_i32(vec3<i32>(-21742i, var_0, arg_0.x), arg_0.xwy) << (~33379u % 32u)) < 0i, var_1.a.c.x), _wgslsmith_f_op_vec4_f32(select(vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(global0.d.x))), 482f, 1020f, 1137f), _wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(ceil(var_1.a.d)))), true)));
        global1 = array<vec3<f32>, 23>();
    }
    global1 = array<vec3<f32>, 23>();
    return Struct_1(firstLeadingBit(global0.b), 11795u, func_4(_wgslsmith_div_vec4_u32(~u_input.a, abs(_wgslsmith_mult_vec4_u32(u_input.a, vec4<u32>(1u, 0u, global0.a, var_1.a.a)))), !global3[_wgslsmith_index_u32(min(15485u | u_input.a.x, u_input.a.x ^ 1u), 10u)], _wgslsmith_mod_i32(~(~u_input.b.x), arg_0.x), func_4(u_input.a, vec3<bool>(true, true, true), _wgslsmith_add_i32(u_input.d.x | -32438i, 1i), func_7(var_1.b, _wgslsmith_div_u32(global0.a, 47755u)))).c, vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-395f * _wgslsmith_f_op_f32(-1230f)) + global0.d.x), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(global0.d.x + 1932f))), _wgslsmith_f_op_f32(-1000f), global0.d.x));
}

fn func_2(arg_0: i32, arg_1: vec2<f32>) -> vec4<f32> {
    loop {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        switch (0i) {
            case 4297i: {
                global0 = func_3(u_input.b);
                let var_0 = -797f;
                break;
            }
            case 2147483647i: {
                let var_0 = Struct_3(Struct_1(_wgslsmith_dot_vec3_u32(firstTrailingBit(u_input.a.yxz), vec3<u32>(34248u, global0.a, 37951u)) ^ func_3(vec4<i32>(42472i, u_input.d.x, -13438i, u_input.b.x)).b, _wgslsmith_mult_u32(global0.a, firstLeadingBit(u_input.c.x)) << (_wgslsmith_mod_u32(104932u, 13425u) % 32u), global0.c, _wgslsmith_f_op_vec4_f32(global0.d + vec4<f32>(-763f, global0.d.x, _wgslsmith_div_f32(838f, 172f), _wgslsmith_f_op_f32(arg_1.x * 720f)))), Struct_2(func_7(Struct_2(Struct_1(93200u, global0.b, global0.c, vec4<f32>(-261f, global2.x, arg_1.x, global2.x))), u_input.a.x)), -28284i);
            }
            case 3872i: {
                return _wgslsmith_f_op_vec4_f32(exp2(vec4<f32>(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-634f)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(exp2(_wgslsmith_div_f32(-2238f, -1290f))) - _wgslsmith_f_op_f32(f32(-1f) * -2696f)), global0.d.x, _wgslsmith_f_op_f32(-global2.x))));
            }
            case 12788i: {
                var var_0 = global0.c.x;
            }
            default: {
                global0 = func_4(_wgslsmith_clamp_vec4_u32(select(select(~vec4<u32>(global0.b, 1u, u_input.c.x, global0.a), min(u_input.a, u_input.a), !vec4<bool>(global0.c.x, global0.c.x, global0.c.x, global0.c.x)), u_input.a, vec4<bool>(true, true, all(global3[_wgslsmith_index_u32(global0.b, 10u)]), global0.c.x)), countOneBits(firstLeadingBit(reverseBits(vec4<u32>(4294967295u, 29338u, global0.b, 9936u)))), u_input.a), !vec3<bool>(true, !func_3(vec4<i32>(11419i, u_input.d.x, -34155i, -1i)).c.x, ~1i >= ~u_input.b.x), arg_0, Struct_1(_wgslsmith_mult_u32(~1u, u_input.a.x), 24156u, vec2<bool>(true, func_7(Struct_2(Struct_1(19865u, 4294967295u, vec2<bool>(global0.c.x, global0.c.x), vec4<f32>(-644f, arg_1.x, global2.x, global2.x))), 4294967295u).c.x), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-global0.d))));
                continue;
            }
        }
        loop {
            if (LOOP_COUNTERS[12u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        }
    }
    var var_0 = u_input.d.x;
    return global0.d;
}

fn func_1() -> vec2<bool> {
    let var_0 = _wgslsmith_f_op_vec4_f32(floor(global0.d));
    if (!(select(global0.c.x, global0.c.x, all(select(vec2<bool>(false, true), vec2<bool>(global0.c.x, true), false))) | (global0.c.x || select(!global0.c.x, true, any(global0.c))))) {
        let var_1 = false;
        for (var var_2 = 0i; var_0.x <= _wgslsmith_f_op_f32(ceil(520f)); var_2 -= 1i) {
            if (LOOP_COUNTERS[13u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
            var var_3 = Struct_2(Struct_1(global0.b, _wgslsmith_dot_vec3_u32(vec3<u32>(38924u, 28225u, u_input.a.x), u_input.a.yyw & vec3<u32>(global0.a, 4294967295u, 31972u)) >> (12122u % 32u), !vec2<bool>(false, !global0.c.x), _wgslsmith_f_op_vec4_f32(func_2(min(-22577i << (global0.a % 32u), 1i), _wgslsmith_f_op_vec2_f32(max(_wgslsmith_f_op_vec2_f32(-var_0.xy), _wgslsmith_f_op_vec2_f32(-vec2<f32>(global0.d.x, 2007f))))))));
            var var_4 = firstLeadingBit(4294967295u);
            let var_5 = Struct_3(Struct_1(var_3.a.a, u_input.a.x, !(!var_3.a.c), _wgslsmith_f_op_vec4_f32(round(func_3(vec4<i32>(u_input.b.x, u_input.b.x, u_input.d.x, 12549i)).d))), Struct_2(func_4(_wgslsmith_mod_vec4_u32(vec4<u32>(u_input.a.x, 0u, global0.a, global0.b), vec4<u32>(0u, u_input.c.x, var_3.a.b, u_input.a.x)), global3[_wgslsmith_index_u32(_wgslsmith_clamp_u32(countOneBits(55860u), reverseBits(var_3.a.b), global0.b), 10u)], reverseBits(_wgslsmith_mod_i32(u_input.b.x, i32(-2147483648))), var_3.a)), abs(_wgslsmith_mult_i32(u_input.b.x, firstLeadingBit(u_input.d.x))));
            var_4 = 44000u;
            global2 = vec3<f32>(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_3.a.d.x))), _wgslsmith_f_op_f32(f32(-1f) * -306f))), 1239f, -1000f);
        }
        loop {
            if (LOOP_COUNTERS[14u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
            continue;
        }
    }
    global2 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(-vec3<f32>(var_0.x, -329f, _wgslsmith_f_op_f32(global0.d.x - -446f))), vec3<f32>(1956f, func_7(Struct_2(Struct_1(1u, u_input.c.x, vec2<bool>(true, false), var_0)), u_input.c.x & 4294967295u).d.x, _wgslsmith_f_op_f32(_wgslsmith_div_f32(global0.d.x, -1917f) - _wgslsmith_f_op_f32(-var_0.x))))) * _wgslsmith_f_op_vec3_f32(exp2(_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-global1[_wgslsmith_index_u32(4294967295u, 23u)])), global0.d.zyy, !vec3<bool>(global0.c.x, false, global0.c.x))))));
    var var_1 = Struct_1(~u_input.a.x, ~func_7(Struct_2(func_3(u_input.d)), _wgslsmith_dot_vec2_u32(reverseBits(u_input.a.zy), countOneBits(vec2<u32>(global0.b, global0.a)))).b, vec2<bool>(all(vec4<bool>(global0.c.x, true, false, global0.c.x)) | !global0.c.x, true), var_0);
    return vec2<bool>(global0.c.x, true);
}

@compute
@workgroup_size(1)
fn main() {
    let var_0 = func_1();
    global2 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-global1[_wgslsmith_index_u32((max(u_input.a.x, u_input.c.x) & ~1896u) >> (31392u % 32u), 23u)]));
    var var_1 = u_input.b.yz;
    global1 = array<vec3<f32>, 23>();
    var_1 = u_input.d.yz;
    for (var var_2 = 40023i; !((true && any(select(vec2<bool>(true, var_0.x), var_0, false))) || all(vec3<bool>(true, true, true))); var_2 += 1i) {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
        if (var_0.x) {
        }
        global0 = func_3(vec4<i32>(-_wgslsmith_dot_vec3_i32(u_input.d.zyx, u_input.b.yxz & u_input.b.xzy), 42611i << (~_wgslsmith_mod_u32(global0.b, 1u) % 32u), ~1i, u_input.d.x));
    }
    let var_2 = ~1i;
    global3 = array<vec3<bool>, 10>();
    let x = u_input.a;
    s_output = StorageBuffer(26439u, _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_vec4_f32(func_2(firstTrailingBit(i32(-2147483648)), _wgslsmith_f_op_vec2_f32(-vec2<f32>(global2.x, global0.d.x)))).x)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1250f + func_4(u_input.a | vec4<u32>(u_input.a.x, u_input.a.x, u_input.c.x, u_input.c.x), vec3<bool>(var_0.x, false, true), _wgslsmith_add_i32(-8907i, -31260i), Struct_1(global0.a, 1u, vec2<bool>(global0.c.x, false), global0.d)).d.x)));
}

`;