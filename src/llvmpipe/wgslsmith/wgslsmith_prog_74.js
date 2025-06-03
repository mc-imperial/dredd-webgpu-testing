export const input = [13,40,134,115,39,167,12,15,113,12,9,233,125,238,134,144,108,94,164,35,131,195,92,231,14,133,103,228,53,87,142,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [13,40,134,115,39,167,12,15,113,12,9,233,125,238,134,144,108,94,164,35,131,195,92,231,14,133,103,228,53,87,142,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[13,40,134,115,39,167,12,15,113,12,9,233,125,238,134,144,108,94,164,35,131,195,92,231,14,133,103,228,53,87,142,217]}
// Seed: 936947376401692765

struct Struct_1 {
    a: f32,
}

struct UniformBuffer {
    a: i32,
    b: vec2<u32>,
    c: u32,
    d: u32,
    e: u32,
}

struct StorageBuffer {
    a: vec3<f32>,
    b: u32,
    c: u32,
    d: i32,
    e: i32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: vec3<bool>;

var<private> global1: array<Struct_1, 23> = array<Struct_1, 23>(Struct_1(957f), Struct_1(-347f), Struct_1(-1238f), Struct_1(974f), Struct_1(-466f), Struct_1(595f), Struct_1(1109f), Struct_1(1329f), Struct_1(752f), Struct_1(-152f), Struct_1(-206f), Struct_1(-1268f), Struct_1(-1018f), Struct_1(-1784f), Struct_1(-1565f), Struct_1(769f), Struct_1(252f), Struct_1(143f), Struct_1(-388f), Struct_1(-709f), Struct_1(-1000f), Struct_1(-478f), Struct_1(726f));

var<private> global2: array<Struct_1, 27>;

var<private> LOOP_COUNTERS: array<u32, 19>;

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
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

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn func_6() -> vec2<f32> {
    let var_0 = firstLeadingBit(1u);
    global2 = array<Struct_1, 27>();
    global0 = vec3<bool>(all(vec3<bool>(global0.x, true || (true || global0.x), !any(vec4<bool>(global0.x, false, global0.x, false)))), global0.x, global0.x);
    var var_1 = Struct_1(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(863f * -414f))), _wgslsmith_f_op_f32(max(457f, _wgslsmith_f_op_f32(-345f))))) + _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(-1000f, 1356f, global0.x)) - _wgslsmith_f_op_f32(-199f + -274f))))));
    var_1 = Struct_1(_wgslsmith_f_op_f32(-var_1.a));
    return _wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-1550f, _wgslsmith_f_op_f32(-var_1.a)))));
}

fn func_7(arg_0: vec2<f32>, arg_1: vec4<i32>, arg_2: Struct_1, arg_3: vec2<u32>) -> vec3<u32> {
    for (var var_0: i32; var_0 < -903i; global0 = !select(select(vec3<bool>(true, false, !global0.x), vec3<bool>(!global0.x, all(vec4<bool>(global0.x, false, global0.x, true)), u_input.a <= u_input.a), _wgslsmith_f_op_f32(arg_2.a + arg_2.a) > 679f), vec3<bool>(select(arg_0.x != -1129f, false, true), true, all(global0.xx) && true), true)) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        break;
    }
    var var_0 = _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(1f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_0.x - -232f)), false))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_2.a - arg_2.a) * _wgslsmith_f_op_f32(abs(1697f))))))));
    var var_1 = -1i;
    let var_2 = global2[_wgslsmith_index_u32(abs(_wgslsmith_dot_vec3_u32(vec3<u32>(42927u, _wgslsmith_clamp_u32(113248u, 21215u, _wgslsmith_mult_u32(u_input.c, 0u)), arg_3.x), reverseBits(vec3<u32>(~u_input.b.x, firstLeadingBit(4294967295u), arg_3.x)))), 27u)];
    var var_3 = !vec4<bool>((0u << (_wgslsmith_mult_u32(90882u, u_input.c) % 32u)) >= ((arg_3.x >> (0u % 32u)) >> (abs(u_input.d) % 32u)), !all(vec3<bool>(false, global0.x, global0.x)), global0.x, global0.x);
    return firstLeadingBit(vec3<u32>(1u, 0u, arg_3.x));
}

fn func_5() -> f32 {
    let var_0 = vec3<i32>(0i, u_input.a, _wgslsmith_div_i32(u_input.a, max(~(i32(-1i) * -24415i), u_input.a)));
    let var_1 = global1[_wgslsmith_index_u32(42452u, 23u)];
    loop {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        let var_2 = global2[_wgslsmith_index_u32(~(0u << (~u_input.d % 32u)), 27u)];
        global2 = array<Struct_1, 27>();
        if (global0.x) {
        }
    }
    var var_2 = Struct_1(var_1.a);
    let var_3 = abs(func_7(_wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(-vec2<f32>(2657f, -1497f)), _wgslsmith_f_op_vec2_f32(func_6()))), select(vec4<i32>(-49649i, var_0.x, u_input.a, 9435i), ~vec4<i32>(var_0.x, u_input.a, u_input.a, u_input.a), true), Struct_1(_wgslsmith_f_op_f32(var_2.a + -287f)), abs(u_input.b << (u_input.b % vec2<u32>(32u)))) >> (~_wgslsmith_clamp_vec3_u32(vec3<u32>(u_input.e, 60424u, 0u), vec3<u32>(u_input.b.x, u_input.c, u_input.b.x) >> (vec3<u32>(0u, 2087u, u_input.b.x) % vec3<u32>(32u)), vec3<u32>(u_input.e, u_input.b.x, 96786u) >> (vec3<u32>(64421u, 46854u, 20856u) % vec3<u32>(32u))) % vec3<u32>(32u)));
    return _wgslsmith_f_op_f32(-1040f - _wgslsmith_f_op_f32(var_2.a + var_2.a));
}

fn func_4(arg_0: Struct_1, arg_1: Struct_1, arg_2: Struct_1) -> vec4<f32> {
    for (var var_0: i32; true; ) {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        loop {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            return _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(trunc(arg_0.a)), arg_2.a, _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(select(arg_1.a, -241f, false & global0.x)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1724f) - _wgslsmith_div_f32(arg_0.a, arg_2.a)))));
        }
    }
    global0 = vec3<bool>(true, arg_0.a > _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-arg_2.a), -1000f, !all(global0.zz))), false);
    var var_0 = _wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-632f), _wgslsmith_f_op_f32(-arg_1.a), false || global0.x)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -312f) - _wgslsmith_f_op_f32(select(arg_1.a, arg_2.a, global0.x))), -148f, arg_0.a), _wgslsmith_f_op_vec4_f32(vec4<f32>(-919f, 115f, _wgslsmith_f_op_f32(func_5()), 130f) - vec4<f32>(-1878f, _wgslsmith_div_f32(1229f, arg_1.a), _wgslsmith_f_op_f32(max(1503f, -273f)), _wgslsmith_f_op_f32(-arg_1.a)))) - _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(arg_2.a, -1762f, -665f, -1418f) + vec4<f32>(-271f, -564f, -436f, arg_0.a))), _wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(max(vec4<f32>(1443f, arg_0.a, arg_0.a, 500f), vec4<f32>(1647f, arg_1.a, arg_2.a, arg_0.a))))), select(vec4<bool>(global0.x, false, global0.x, false), !vec4<bool>(false, global0.x, global0.x, true), select(vec4<bool>(global0.x, global0.x, global0.x, global0.x), vec4<bool>(global0.x, global0.x, global0.x, true), true)))) + _wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(arg_0.a, 1796f, arg_2.a, arg_2.a) - vec4<f32>(1258f, 187f, -1376f, -2153f)) * _wgslsmith_f_op_vec4_f32(vec4<f32>(1170f, arg_2.a, -976f, 1174f) * vec4<f32>(arg_1.a, arg_0.a, arg_0.a, 600f)))))));
    let var_1 = func_7(_wgslsmith_f_op_vec2_f32(select(var_0.wz, var_0.wx, select(select(vec2<bool>(false, global0.x), !vec2<bool>(global0.x, global0.x), !global0.zx), global0.zz, all(vec3<bool>(false, global0.x, global0.x)) && global0.x))), vec4<i32>(1i, u_input.a, ~1i, min(u_input.a, ~(-1i))), global2[_wgslsmith_index_u32(u_input.c, 27u)], ~(firstTrailingBit(vec2<u32>(u_input.b.x, u_input.c)) ^ ~(~vec2<u32>(u_input.e, 4294967295u))));
    if (true) {
        var var_2 = Struct_1(_wgslsmith_f_op_f32(-arg_1.a));
        var var_3 = Struct_1(_wgslsmith_div_f32(1f, _wgslsmith_div_f32(-1562f, _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-1143f * arg_0.a))))));
    }
    return _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(func_5()), arg_1.a, _wgslsmith_div_f32(-627f, arg_1.a), -1875f) * _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(floor(vec4<f32>(arg_2.a, 859f, -1364f, arg_2.a))))))), _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_0.a, arg_0.a, arg_1.a, -963f))))), _wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(select(vec4<f32>(-617f, -160f, var_0.x, arg_1.a), vec4<f32>(arg_1.a, 217f, -1732f, arg_0.a), global0.x)) + _wgslsmith_f_op_vec4_f32(-vec4<f32>(var_0.x, arg_1.a, -1017f, 466f))))), vec4<bool>(!select(true, true, global0.x), global0.x, global0.x, _wgslsmith_f_op_f32(var_0.x * var_0.x) != arg_2.a))));
}

fn func_3(arg_0: vec2<u32>, arg_1: Struct_1, arg_2: u32, arg_3: Struct_1) -> bool {
    global2 = array<Struct_1, 27>();
    global2 = array<Struct_1, 27>();
    if (true) {
        var var_0 = vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(trunc(-597f)), 131f)) + _wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -1513f), arg_1.a))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(arg_3.a)) * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(arg_3.a, 1021f)) * arg_1.a))), arg_1.a, 860f);
        for (var var_1 = 8368i; ; global2 = array<Struct_1, 27>()) {
            if (LOOP_COUNTERS[4u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
            global1 = array<Struct_1, 23>();
            break;
        }
        loop {
            if (LOOP_COUNTERS[5u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
            var_0 = vec4<f32>(arg_3.a, arg_3.a, 774f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_3.a * _wgslsmith_div_f32(arg_3.a, -896f))));
            continue;
        }
        switch (-(14508i ^ _wgslsmith_clamp_i32(_wgslsmith_clamp_i32(u_input.a, -32848i, u_input.a) ^ u_input.a, _wgslsmith_mult_i32(u_input.a << (arg_2 % 32u), abs(u_input.a)), _wgslsmith_mult_i32(firstTrailingBit(-33550i), _wgslsmith_dot_vec4_i32(vec4<i32>(0i, -21829i, u_input.a, u_input.a), vec4<i32>(-6753i, u_input.a, u_input.a, u_input.a)))))) {
            case i32(-2147483648): {
                var var_1 = vec4<bool>(true, false, all(select(global0.xx, !vec2<bool>(global0.x, global0.x), select(global0.zz, select(vec2<bool>(global0.x, false), vec2<bool>(global0.x, global0.x), global0.yz), !global0.x))), global0.x);
                var var_2 = arg_0;
                var_0 = _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(arg_3.a, 1000f, arg_3.a, var_0.x))))) * _wgslsmith_div_vec4_f32(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(arg_1.a, var_0.x, var_0.x, -1076f))), _wgslsmith_f_op_vec4_f32(func_4(arg_1, Struct_1(var_0.x), arg_3))), _wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_3.a, arg_1.a, 456f, arg_3.a)))), _wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(f32(-1f) * -107f), _wgslsmith_f_op_f32(sign(431f)), -1193f, _wgslsmith_f_op_f32(step(739f, var_0.x)))))), !any(vec4<bool>(all(vec2<bool>(var_1.x, true)), false, !global0.x, any(vec3<bool>(false, var_1.x, global0.x))))));
                var var_3 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(arg_3.a, 363f, -199f, -286f)))) * _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(func_4(global1[_wgslsmith_index_u32(arg_0.x, 23u)], arg_3, Struct_1(arg_1.a))))))) + _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_1.a, arg_1.a, arg_1.a, -2523f))))));
                let var_4 = 4294967295u;
            }
            case -1i: {
                let var_1 = Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_3.a * arg_1.a)), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(ceil(arg_3.a)))))));
                var_0 = _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(exp2(vec4<f32>(1668f, _wgslsmith_f_op_vec2_f32(func_6()).x, arg_3.a, var_0.x))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(abs(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-447f, arg_3.a, -1934f, 243f)) + _wgslsmith_f_op_vec4_f32(-vec4<f32>(151f, arg_1.a, 930f, var_0.x))))) - _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(vec4<f32>(arg_1.a, 1208f, arg_3.a, -167f) + vec4<f32>(2341f, arg_1.a, arg_1.a, var_0.x)))))));
                var var_2 = max(_wgslsmith_mod_u32(u_input.b.x, u_input.d), arg_0.x);
            }
            case -45658i: {
                global0 = select(select(!select(vec3<bool>(global0.x, false, global0.x), !vec3<bool>(true, global0.x, true), !vec3<bool>(global0.x, global0.x, true)), vec3<bool>(global0.x, global0.x, all(vec4<bool>(global0.x, global0.x, true, true))), !select(select(vec3<bool>(false, false, false), vec3<bool>(false, global0.x, true), vec3<bool>(global0.x, false, true)), vec3<bool>(true, false, global0.x), true)), select(!select(select(vec3<bool>(global0.x, global0.x, global0.x), vec3<bool>(global0.x, false, false), vec3<bool>(global0.x, global0.x, true)), vec3<bool>(false, global0.x, global0.x), vec3<bool>(true, true, global0.x)), !(!(!vec3<bool>(global0.x, false, false))), !select(!vec3<bool>(true, global0.x, true), vec3<bool>(global0.x, false, global0.x), select(vec3<bool>(global0.x, true, false), vec3<bool>(global0.x, true, global0.x), vec3<bool>(global0.x, global0.x, global0.x)))), any(vec3<bool>(global0.x, all(!vec2<bool>(global0.x, global0.x)), false)));
                let var_1 = firstTrailingBit(~(_wgslsmith_mult_vec4_u32(vec4<u32>(72562u, arg_0.x, arg_0.x, arg_0.x), vec4<u32>(u_input.d, 4294967295u, arg_2, 1u)) << ((vec4<u32>(u_input.e, 95324u, 58240u, u_input.b.x) ^ vec4<u32>(arg_0.x, u_input.c, 50505u, u_input.d)) % vec4<u32>(32u))) & vec4<u32>(arg_2, arg_0.x, ~(~u_input.c), ~100516u));
            }
            case 1i: {
                let var_1 = Struct_1(-425f);
                let var_2 = Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_vec4_f32(func_4(Struct_1(_wgslsmith_f_op_f32(func_5())), arg_1, Struct_1(1389f))).x));
            }
            default: {
                global1 = array<Struct_1, 23>();
                var var_1 = _wgslsmith_f_op_f32(-1383f);
                var var_2 = vec3<bool>(false, global0.x, !all(vec3<bool>(global0.x, var_0.x >= arg_1.a, global0.x & global0.x)));
                global1 = array<Struct_1, 23>();
            }
        }
    }
    for (var var_0 = -abs(i32(-2147483648) & _wgslsmith_div_i32(_wgslsmith_dot_vec2_i32(vec2<i32>(u_input.a, i32(-2147483648)), vec2<i32>(u_input.a, u_input.a)), 24584i)); var_0 <= i32(-2147483648); global1 = array<Struct_1, 23>()) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        switch (0i) {
            case 23475i: {
                let var_1 = _wgslsmith_mod_i32(-17166i, -1i);
            }
            default: {
                var var_1 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(func_4(arg_3, Struct_1(arg_3.a), global1[_wgslsmith_index_u32(arg_2, 23u)])));
                break;
            }
        }
        for (var var_1 = _wgslsmith_div_i32(select(abs(u_input.a), u_input.a, global0.x), u_input.a); var_1 >= 43953i; var_1 += 1i) {
            if (LOOP_COUNTERS[7u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
            var var_2 = Struct_1(_wgslsmith_f_op_f32(arg_1.a * _wgslsmith_f_op_f32(min(1292f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_1.a) + _wgslsmith_f_op_f32(f32(-1f) * -1000f))))));
        }
        loop {
            if (LOOP_COUNTERS[8u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
            var var_1 = _wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(arg_3.a + arg_1.a), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(-1648f, _wgslsmith_f_op_f32(-1201f - arg_1.a)))), _wgslsmith_f_op_f32(arg_3.a * _wgslsmith_div_f32(arg_1.a, _wgslsmith_f_op_f32(arg_3.a - arg_1.a)))) * _wgslsmith_f_op_vec3_f32(max(vec3<f32>(arg_3.a, _wgslsmith_f_op_f32(-832f * _wgslsmith_div_f32(1076f, -1776f)), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(1172f, arg_3.a))), vec3<f32>(_wgslsmith_f_op_f32(exp2(arg_1.a)), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(-270f, arg_3.a)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_3.a - arg_1.a))))));
            break;
        }
        if (global0.x) {
            var var_1 = _wgslsmith_f_op_vec4_f32(exp2(vec4<f32>(-150f, arg_1.a, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_vec4_f32(func_4(global2[_wgslsmith_index_u32(arg_2, 27u)], Struct_1(arg_3.a), global2[_wgslsmith_index_u32(arg_2, 27u)])).x) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(-1003f)))), arg_3.a)));
        }
    }
    loop {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        global1 = array<Struct_1, 23>();
    }
    return global0.x;
}

fn func_2(arg_0: vec3<f32>) -> f32 {
    let var_0 = global2[_wgslsmith_index_u32(u_input.e, 27u)];
    if (all(vec3<bool>(true && !(global0.x | global0.x), u_input.c < _wgslsmith_div_u32(min(u_input.d, u_input.e), _wgslsmith_mod_u32(1u, 87101u)), false))) {
        global2 = array<Struct_1, 27>();
        for (; ; ) {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
            global1 = array<Struct_1, 23>();
            continue;
        }
    }
    let var_1 = u_input.a;
    var var_2 = false;
    for (; ; ) {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        for (var var_3 = 11798i; var_3 <= 2147483647i; global0 = vec3<bool>(global0.x, select(true, any(vec3<bool>(all(vec2<bool>(global0.x, true)), -4633i < var_1, var_0.a < 429f)), _wgslsmith_div_f32(_wgslsmith_f_op_f32(arg_0.x - -422f), var_0.a) == arg_0.x), !(!(!func_3(vec2<u32>(1u, 4294967295u), global1[_wgslsmith_index_u32(u_input.b.x, 23u)], 1968u, Struct_1(193f)))))) {
            if (LOOP_COUNTERS[12u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
            var var_4 = global2[_wgslsmith_index_u32(4294967295u, 27u)];
            let var_5 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(461f - _wgslsmith_f_op_f32(arg_0.x - 121f)) - var_0.a);
            var var_6 = -3066i ^ _wgslsmith_mod_i32(u_input.a, u_input.a);
            let var_7 = var_0.a;
            var var_8 = Struct_1(arg_0.x);
        }
        let var_3 = _wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(arg_0.x + var_0.a), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_0.a)))), _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(min(var_0.a, _wgslsmith_f_op_f32(trunc(var_0.a)))))), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1597f)), _wgslsmith_f_op_vec4_f32(func_4(global2[_wgslsmith_index_u32(0u, 27u)], Struct_1(var_0.a), global2[_wgslsmith_index_u32(~1u, 27u)])).x))));
        for (var var_4 = 19861i; ; global2 = array<Struct_1, 27>()) {
            if (LOOP_COUNTERS[13u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
            var var_5 = global0.x;
            var_5 = var_1 < var_1;
            var_2 = false;
            let var_6 = select(!select(vec2<bool>(u_input.a >= var_1, false), !vec2<bool>(false, global0.x), false), global0.xy, !(!(!select(vec2<bool>(false, global0.x), global0.yx, global0.x))));
        }
        loop {
            if (LOOP_COUNTERS[14u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
            let var_4 = vec3<u32>(u_input.b.x | (u_input.d >> (10243u % 32u)), ~4294967295u, _wgslsmith_add_u32(~3872u, ~firstTrailingBit(16259u))) >> (vec3<u32>(~min(33593u, ~u_input.c), firstLeadingBit(_wgslsmith_dot_vec3_u32(firstLeadingBit(vec3<u32>(u_input.b.x, u_input.e, u_input.b.x)), ~vec3<u32>(50802u, u_input.b.x, 0u))), _wgslsmith_sub_u32(abs(u_input.c), abs(_wgslsmith_dot_vec4_u32(vec4<u32>(3312u, 69408u, 49913u, u_input.d), vec4<u32>(0u, u_input.e, 1787u, u_input.c))))) % vec3<u32>(32u));
            global2 = array<Struct_1, 27>();
            let var_5 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(arg_0.x - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(995f, var_0.a))))), 468f);
        }
    }
    return -852f;
}

fn func_1(arg_0: vec4<f32>) -> vec2<f32> {
    loop {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
        switch (_wgslsmith_mult_i32(u_input.a, _wgslsmith_dot_vec3_i32(min(_wgslsmith_mod_vec3_i32(vec3<i32>(-1i, 1i, 3479i), vec3<i32>(4159i, 18673i, u_input.a)), reverseBits(_wgslsmith_sub_vec3_i32(vec3<i32>(u_input.a, 13143i, u_input.a), vec3<i32>(-1i, u_input.a, u_input.a)))), -(~(vec3<i32>(36897i, 1i, i32(-2147483648)) << (vec3<u32>(u_input.d, 72783u, u_input.b.x) % vec3<u32>(32u))))))) {
            case 2147483647i: {
                let var_0 = _wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(func_2(arg_0.yxy)), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(ceil(486f))))));
            }
            case -1i: {
                var var_0 = vec2<i32>(max(u_input.a, -49275i), -firstLeadingBit(u_input.a)) | firstTrailingBit(vec2<i32>(u_input.a, -(u_input.a ^ u_input.a)));
                let var_1 = select(firstTrailingBit(_wgslsmith_mult_vec3_u32(~vec3<u32>(u_input.e, u_input.b.x, 62177u), ~min(vec3<u32>(u_input.b.x, u_input.c, 12701u), vec3<u32>(u_input.d, u_input.b.x, u_input.e)))), _wgslsmith_sub_vec3_u32(vec3<u32>(max(3981u >> (1u % 32u), ~u_input.e), ~u_input.d, firstTrailingBit(27573u)), vec3<u32>(_wgslsmith_dot_vec4_u32(_wgslsmith_add_vec4_u32(vec4<u32>(u_input.c, 1u, u_input.d, 52559u), vec4<u32>(u_input.b.x, 0u, 0u, 86174u)), ~vec4<u32>(33880u, u_input.e, 4294967295u, 0u)), ~4294967295u, _wgslsmith_clamp_u32(_wgslsmith_clamp_u32(16210u, u_input.b.x, 4294967295u), ~u_input.d, 1u))), global0.x);
            }
            default: {
                break;
            }
        }
        let var_0 = u_input.a;
    }
    global1 = array<Struct_1, 23>();
    global1 = array<Struct_1, 23>();
    switch (-1i) {
        default: {
            for (var var_0 = -firstTrailingBit(u_input.a); ; ) {
                if (LOOP_COUNTERS[16u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
                var var_1 = (!any(!vec4<bool>(global0.x, global0.x, global0.x, global0.x)) | global0.x) & !all(select(!vec3<bool>(global0.x, true, false), vec3<bool>(global0.x, false, false), vec3<bool>(false, global0.x, false)));
                break;
            }
            loop {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                let var_0 = _wgslsmith_mult_u32(func_7(arg_0.wy, vec4<i32>(-1i, 1i, i32(-2147483648), -6846i) & vec4<i32>(2147483647i, 2147483647i, u_input.a, i32(-2147483648)), Struct_1(arg_0.x), vec2<u32>(1u, 4294967295u) ^ u_input.b).x << (0u % 32u), 141900u) >= ~u_input.b.x;
                let var_1 = _wgslsmith_mult_i32(2147483647i, reverseBits(u_input.a)) << (_wgslsmith_dot_vec4_u32(select(vec4<u32>(0u, reverseBits(u_input.c), ~u_input.d, ~77099u), vec4<u32>(61303u, ~u_input.e, _wgslsmith_sub_u32(74211u, 1u), abs(27608u)), false), vec4<u32>(func_7(_wgslsmith_f_op_vec2_f32(arg_0.yw * arg_0.xx), ~vec4<i32>(-1i, -1i, u_input.a, 973i), Struct_1(754f), ~vec2<u32>(u_input.c, 0u)).x, ~(~94554u), 67015u, _wgslsmith_dot_vec3_u32(select(vec3<u32>(u_input.d, u_input.c, u_input.c), vec3<u32>(0u, u_input.c, 4294967295u), var_0), _wgslsmith_div_vec3_u32(vec3<u32>(108949u, 24901u, 0u), vec3<u32>(u_input.c, 1u, u_input.e))))) % 32u);
                global0 = !vec3<bool>(false, var_0, true);
                var var_2 = ~(~countOneBits(vec3<u32>(94127u, 55697u, 0u)));
            }
            global0 = !(!vec3<bool>(false, all(vec3<bool>(false, false, global0.x)), all(vec3<bool>(global0.x, global0.x, true))));
            switch (-1i) {
                case -1i: {
                    let var_0 = vec2<u32>(97936u, (_wgslsmith_mod_u32(_wgslsmith_div_u32(u_input.b.x, 4294967295u), 46554u) ^ ~countOneBits(48815u)) & _wgslsmith_dot_vec3_u32(~(~vec3<u32>(u_input.d, u_input.c, u_input.e)), vec3<u32>(~8815u, u_input.b.x ^ 2761u, u_input.b.x)));
                }
                default: {
                }
            }
        }
    }
    var var_0 = global2[_wgslsmith_index_u32(u_input.e, 27u)];
    return vec2<f32>(_wgslsmith_f_op_f32(var_0.a - 1767f), -1005f);
}

@compute
@workgroup_size(1)
fn main() {
    loop {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        global2 = array<Struct_1, 27>();
        let var_0 = true;
        continue;
    }
    var var_0 = vec2<u32>(_wgslsmith_add_u32(_wgslsmith_div_u32(_wgslsmith_div_u32(4294967295u, u_input.e), u_input.e), _wgslsmith_clamp_u32(0u ^ u_input.e, _wgslsmith_div_u32(min(1u, u_input.e), 0u), u_input.d)), 24446u);
    var var_1 = _wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(-_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(func_1(vec4<f32>(-1252f, -348f, -414f, 544f))), vec2<f32>(-484f, -448f), true)), _wgslsmith_f_op_vec2_f32(-_wgslsmith_div_vec2_f32(vec2<f32>(-1721f, 1000f), vec2<f32>(-1959f, -237f))))), vec2<f32>(_wgslsmith_f_op_f32(814f + _wgslsmith_div_f32(_wgslsmith_f_op_f32(-1904f - -163f), _wgslsmith_f_op_f32(-330f))), _wgslsmith_f_op_f32(491f - _wgslsmith_f_op_f32(-853f * _wgslsmith_f_op_f32(f32(-1f) * -964f)))), !vec2<bool>(any(vec2<bool>(global0.x, false)), true)));
    var_1 = vec2<f32>(var_1.x, _wgslsmith_f_op_f32(1495f - _wgslsmith_f_op_f32(var_1.x + -210f)));
    let var_2 = global2[_wgslsmith_index_u32(firstLeadingBit(firstTrailingBit(min(58800u, abs(countOneBits(u_input.d))))), 27u)];
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(_wgslsmith_f_op_f32(-var_1.x), _wgslsmith_f_op_vec2_f32(func_1(vec4<f32>(var_1.x, -980f, 1371f, 931f))).x, _wgslsmith_f_op_f32(-1000f - _wgslsmith_f_op_f32(-var_2.a))))), ~u_input.c, u_input.b.x >> (62184u % 32u), -_wgslsmith_dot_vec3_i32(~vec3<i32>(u_input.a, u_input.a, u_input.a) << (vec3<u32>(44275u, 62977u, 0u) % vec3<u32>(32u)), -_wgslsmith_mult_vec3_i32(vec3<i32>(16092i, u_input.a, u_input.a), vec3<i32>(26011i, u_input.a, u_input.a))), ~36134i << (_wgslsmith_sub_u32(0u, u_input.d) % 32u));
}

`;