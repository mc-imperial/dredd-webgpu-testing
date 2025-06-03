export const input = [210,121,43,122,166,44,55,117,224,173,46,79,26,144,98,228,250,119,89,32,68,194,62,73,245,211,22,89,159,233,88,92,122,76,202,248,196,120,173,17,172,155,87,246,231,242,3,210,114,209,127,195,80,105,88,3,12,107,35,198,99,64,10,153];
export const expected = [210,121,43,122,166,44,55,117,224,173,46,79,26,144,98,228,250,119,89,32,68,194,62,73,245,211,22,89,159,233,88,92,122,76,202,248,196,120,173,17,172,155,87,246,231,242,3,210,114,209,127,195,80,105,88,3,12,107,35,198,99,64,10,153];
export const shaderCode = ` 
 // {"0:0":[210,121,43,122,166,44,55,117,224,173,46,79,26,144,98,228,250,119,89,32,68,194,62,73,245,211,22,89,159,233,88,92,122,76,202,248,196,120,173,17,172,155,87,246,231,242,3,210,114,209,127,195,80,105,88,3,12,107,35,198,99,64,10,153]}
// Seed: 5446625981014292227

struct Struct_1 {
    a: i32,
    b: bool,
    c: u32,
    d: u32,
}

struct UniformBuffer {
    a: u32,
    b: vec2<u32>,
    c: vec3<u32>,
    d: vec3<u32>,
    e: vec4<u32>,
}

struct StorageBuffer {
    a: vec4<i32>,
    b: i32,
    c: i32,
    d: vec2<u32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<Struct_1, 25> = array<Struct_1, 25>(Struct_1(1i, false, 0u, 0u), Struct_1(2147483647i, false, 1u, 361u), Struct_1(-41214i, false, 0u, 1u), Struct_1(-32902i, true, 1351u, 47994u), Struct_1(1603i, true, 4294967295u, 68638u), Struct_1(21273i, true, 0u, 40353u), Struct_1(-17659i, true, 6462u, 0u), Struct_1(-10397i, false, 29529u, 9473u), Struct_1(-1i, true, 4294967295u, 4294967295u), Struct_1(38051i, true, 4294967295u, 55906u), Struct_1(0i, false, 1u, 1u), Struct_1(20893i, false, 37842u, 26685u), Struct_1(-1i, true, 1u, 1u), Struct_1(-1i, true, 34782u, 4294967295u), Struct_1(2147483647i, false, 1u, 38642u), Struct_1(1i, false, 8420u, 4294967295u), Struct_1(-15392i, false, 12387u, 0u), Struct_1(-10990i, false, 11225u, 1u), Struct_1(-42463i, false, 4294967295u, 26270u), Struct_1(21587i, false, 7110u, 42751u), Struct_1(2147483647i, true, 30414u, 19273u), Struct_1(33658i, true, 11988u, 0u), Struct_1(52870i, false, 19959u, 58992u), Struct_1(-1i, true, 23524u, 22106u), Struct_1(-1i, true, 0u, 4294967295u));

var<private> global1: vec3<u32> = vec3<u32>(25708u, 39106u, 4294967295u);

var<private> global2: array<u32, 6>;

var<private> LOOP_COUNTERS: array<u32, 27>;

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn func_1() -> i32 {
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        break;
    }
    let var_0 = ~countOneBits(4294967295u);
    let var_1 = global0[_wgslsmith_index_u32(~(~_wgslsmith_dot_vec4_u32(_wgslsmith_mod_vec4_u32(vec4<u32>(5654u, 4294967295u, 0u, global2[_wgslsmith_index_u32(1u, 6u)]), _wgslsmith_sub_vec4_u32(vec4<u32>(global2[_wgslsmith_index_u32(u_input.c.x, 6u)], u_input.a, 18457u, var_0), u_input.e)), vec4<u32>(_wgslsmith_mult_u32(var_0, global1.x), global2[_wgslsmith_index_u32(u_input.a, 6u)] ^ global2[_wgslsmith_index_u32(u_input.a, 6u)], global1.x, global1.x))), 25u)];
    for (var var_2 = 43169i; (~_wgslsmith_add_i32(_wgslsmith_mod_i32(i32(-2147483648), var_1.a), var_1.a & 0i) >= var_1.a) || false; var_2 += 1i) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        var var_3 = Struct_1(-19738i, !var_1.b, ~43348u, 82613u);
    }
    let var_2 = abs(reverseBits(reverseBits(u_input.e)) & ~(~_wgslsmith_mult_vec4_u32(vec4<u32>(4294967295u, global2[_wgslsmith_index_u32(var_0, 6u)], var_0, u_input.b.x), u_input.e)));
    return _wgslsmith_mod_i32(var_1.a, 1i);
}

fn func_6(arg_0: Struct_1) -> vec2<f32> {
    for (var var_0 = 9221i; false; var_0 += 1i) {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        for (var var_1: i32; ; var_1 -= 1i) {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        }
    }
    global1 = vec3<u32>(25080u, 1u, _wgslsmith_dot_vec2_u32(abs(global1.xx), select(global1.xz, _wgslsmith_sub_vec2_u32(~global1.xy, ~u_input.d.zz), vec2<bool>(false | arg_0.b, true))));
    var var_0 = _wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-369f - 953f)), -729f)), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(1497f + -473f) - _wgslsmith_f_op_f32(f32(-1f) * -945f))))));
    var_0 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(sign(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(var_0.x, var_0.x) * _wgslsmith_f_op_vec2_f32(vec2<f32>(var_0.x, -374f) - vec2<f32>(-507f, 1000f)))))));
    if (arg_0.b) {
    }
    return _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(393f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-244f + var_0.x))) * _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(var_0.x, var_0.x) - vec2<f32>(var_0.x, 183f)) * _wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(min(vec2<f32>(-235f, 836f), vec2<f32>(var_0.x, var_0.x))), vec2<f32>(var_0.x, var_0.x), false | arg_0.b)))));
}

fn func_5() -> u32 {
    let var_0 = global0[_wgslsmith_index_u32(50773u, 25u)];
    loop {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        global0 = array<Struct_1, 25>();
        global1 = ~(~abs(~(~vec3<u32>(global1.x, 3543u, global2[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(4294967295u, 6u)], 6u)]))));
        loop {
            if (LOOP_COUNTERS[5u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
            continue;
        }
        switch (~(1776i & var_0.a)) {
            case -7927i: {
                var var_1 = ~countOneBits(_wgslsmith_sub_vec3_i32(~(-vec3<i32>(2147483647i, 2147483647i, -1i)), vec3<i32>(-var_0.a, ~var_0.a, var_0.a)));
                continue;
            }
            default: {
                let var_1 = global0[_wgslsmith_index_u32(31679u, 25u)];
                var var_2 = ~(~u_input.d.x);
                var var_3 = _wgslsmith_f_op_vec2_f32(func_6(Struct_1(var_1.a, any(!select(vec4<bool>(true, true, true, false), vec4<bool>(var_1.b, var_1.b, var_1.b, true), var_1.b)), global1.x, min(global1.x, 26700u))));
                break;
            }
        }
    }
    if (all(vec3<bool>(var_0.b, any(vec2<bool>(true, true)), true))) {
        let var_1 = Struct_1(firstTrailingBit(firstLeadingBit(0i)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-2620f))) * _wgslsmith_f_op_f32(f32(-1f) * -526f)) >= _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(1284f, -749f)))), ~_wgslsmith_div_u32(firstLeadingBit(abs(u_input.a)), ~abs(0u)), abs(~abs(_wgslsmith_clamp_u32(global1.x, 0u, u_input.d.x))));
        loop {
            if (LOOP_COUNTERS[6u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
            let var_2 = var_0.b;
        }
    }
    var var_1 = global0[_wgslsmith_index_u32(u_input.c.x, 25u)];
    global0 = array<Struct_1, 25>();
    return max(~(~1u), _wgslsmith_clamp_u32(var_1.c, global2[_wgslsmith_index_u32(var_0.d, 6u)], global1.x & (~var_1.c >> (4294967295u % 32u))));
}

fn func_4() -> f32 {
    global0 = array<Struct_1, 25>();
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        let var_0 = _wgslsmith_add_u32(~4294967295u << (~func_5() % 32u), global1.x);
        global1 = ~(~u_input.e.xwz);
        let var_1 = Struct_1(~(-26264i), !(true != all(vec2<bool>(true, true))), ~13280u, 44131u);
    }
    global1 = _wgslsmith_sub_vec3_u32(~(firstLeadingBit(_wgslsmith_mod_vec3_u32(vec3<u32>(4294967295u, 4294967295u, 0u), vec3<u32>(u_input.a, 0u, global2[_wgslsmith_index_u32(1u, 6u)]))) << (~_wgslsmith_sub_vec3_u32(vec3<u32>(23091u, global2[_wgslsmith_index_u32(global1.x, 6u)], 4294967295u), vec3<u32>(global2[_wgslsmith_index_u32(4294967295u, 6u)], 0u, global1.x)) % vec3<u32>(32u))), abs(u_input.e.wxw));
    if (any(select(!select(select(vec4<bool>(false, false, false, false), vec4<bool>(false, true, false, false), true), vec4<bool>(false, false, true, false), select(vec4<bool>(false, false, true, true), vec4<bool>(false, false, false, false), false)), select(!select(vec4<bool>(false, false, true, true), vec4<bool>(true, false, true, false), vec4<bool>(false, true, false, false)), select(vec4<bool>(true, false, true, false), vec4<bool>(true, false, true, false), vec4<bool>(true, true, true, true)), select(vec4<bool>(true, true, true, true), vec4<bool>(false, true, false, false), false)), false))) {
    }
    global1 = u_input.d;
    return _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-1258f)));
}

fn func_7(arg_0: vec3<f32>) -> Struct_1 {
    for (var var_0 = -1i; !(-636f < _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_0.x * arg_0.x) + _wgslsmith_f_op_f32(-791f)) - _wgslsmith_f_op_f32(-arg_0.x))); var_0 += 1i) {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        continue;
    }
    switch (i32(-1i) * -_wgslsmith_sub_i32(1i, ~(-55775i))) {
        case 41313i: {
            switch (1i) {
                case 72496i: {
                }
                default: {
                    var var_0 = -select(countOneBits(_wgslsmith_div_vec3_i32(firstTrailingBit(vec3<i32>(2147483647i, 83136i, 1i)), select(vec3<i32>(2147483647i, -23783i, 42539i), vec3<i32>(2147483647i, 2147483647i, 2147483647i), false))), min(vec3<i32>(-1i, 2147483647i, i32(-2147483648)), vec3<i32>(1i, -14159i, -9507i) << (u_input.c % vec3<u32>(32u))) & vec3<i32>(1i, reverseBits(-22227i), 1i), select(true, false, false));
                    var var_1 = global0[_wgslsmith_index_u32(global1.x, 25u)];
                    let var_2 = Struct_1(_wgslsmith_clamp_i32(var_1.a, var_0.x, -firstTrailingBit(var_0.x)), !(all(!vec2<bool>(var_1.b, false)) & true), ~global2[_wgslsmith_index_u32(func_5(), 6u)], 1u);
                }
            }
            global2 = array<u32, 6>();
        }
        case -8680i: {
            loop {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                let var_0 = _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0.x)) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0.x))), _wgslsmith_f_op_f32(arg_0.x - -2173f), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-arg_0.x))), _wgslsmith_div_f32(arg_0.x, 1580f)));
                global2 = array<u32, 6>();
                global1 = abs(u_input.d);
            }
            global2 = array<u32, 6>();
        }
        case -74244i: {
            let var_0 = Struct_1(21846i, true, 19019u, firstLeadingBit(_wgslsmith_mod_u32(global1.x, _wgslsmith_mult_u32(global2[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(4294967295u, 6u)], 6u)], 37228u))) & ~(~(~17594u)));
            let var_1 = global0[_wgslsmith_index_u32(0u, 25u)];
            switch (var_0.a) {
                default: {
                    let var_2 = var_0;
                    let var_3 = _wgslsmith_f_op_f32(-1000f);
                    let var_4 = _wgslsmith_sub_vec2_i32(select(vec2<i32>(_wgslsmith_sub_i32(-1i, i32(-1i) * -45053i), ~var_2.a), -(firstTrailingBit(vec2<i32>(16671i, 3881i)) & (vec2<i32>(i32(-2147483648), 2147483647i) >> (u_input.c.zx % vec2<u32>(32u)))), select(select(vec2<bool>(var_0.b, true), select(vec2<bool>(var_1.b, var_0.b), vec2<bool>(true, true), vec2<bool>(var_2.b, false)), select(vec2<bool>(var_2.b, false), vec2<bool>(var_0.b, var_0.b), var_2.b)), select(select(vec2<bool>(false, var_1.b), vec2<bool>(var_0.b, false), var_1.b), !vec2<bool>(var_0.b, true), select(vec2<bool>(true, false), vec2<bool>(var_1.b, var_0.b), false)), !select(vec2<bool>(true, var_1.b), vec2<bool>(var_0.b, false), var_0.b))), ~vec2<i32>(~var_2.a << (_wgslsmith_div_u32(var_2.c, global2[_wgslsmith_index_u32(1u, 6u)]) % 32u), _wgslsmith_dot_vec4_i32(vec4<i32>(var_2.a, 2147483647i, var_1.a, var_2.a), vec4<i32>(23123i, 40264i, var_2.a, var_2.a))));
                    let var_5 = -var_2.a;
                }
            }
        }
        default: {
        }
    }
    var var_0 = _wgslsmith_f_op_f32(-arg_0.x);
    loop {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        var var_1 = global0[_wgslsmith_index_u32(abs(43947u), 25u)];
        switch (_wgslsmith_dot_vec4_i32(-vec4<i32>(_wgslsmith_div_i32(8142i, var_1.a), 1i, 0i, _wgslsmith_add_i32(~10719i, var_1.a << (u_input.b.x % 32u))), ~select(vec4<i32>(var_1.a, _wgslsmith_div_i32(12987i, var_1.a), _wgslsmith_mult_i32(var_1.a, var_1.a), _wgslsmith_add_i32(var_1.a, -40153i)), min(select(vec4<i32>(var_1.a, -61629i, -21404i, var_1.a), vec4<i32>(-1i, 6045i, var_1.a, 0i), vec4<bool>(var_1.b, var_1.b, var_1.b, false)), vec4<i32>(6371i, i32(-2147483648), var_1.a, var_1.a)), select(!vec4<bool>(var_1.b, var_1.b, false, true), select(vec4<bool>(false, var_1.b, var_1.b, var_1.b), vec4<bool>(false, var_1.b, false, false), vec4<bool>(var_1.b, true, var_1.b, var_1.b)), true)))) {
            case i32(-2147483648): {
                var var_2 = vec3<i32>(-66152i, _wgslsmith_clamp_i32(var_1.a, abs(var_1.a), -1i), 45372i);
                let var_3 = var_2.x;
                var var_4 = ~(-7850i);
                let var_5 = arg_0;
                var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-728f));
            }
            case 1i: {
                global0 = array<Struct_1, 25>();
            }
            case -5756i: {
                global0 = array<Struct_1, 25>();
            }
            default: {
            }
        }
        var_1 = Struct_1(-4751i, var_1.b, ~(~(~(~global1.x))), select(_wgslsmith_dot_vec4_u32(vec4<u32>(~1u, u_input.d.x, ~3344u, _wgslsmith_mult_u32(1u, 4294967295u)), vec4<u32>(183u & global2[_wgslsmith_index_u32(67006u, 6u)], countOneBits(global2[_wgslsmith_index_u32(u_input.a, 6u)]), ~var_1.d, 15821u)), 4294967295u, !any(vec2<bool>(false, var_1.b))));
    }
    if (all(select(vec3<bool>(true, all(vec3<bool>(true, true, true)), true), vec3<bool>(true, any(vec2<bool>(true, true)), select(false, false, true) || true), select(!select(vec3<bool>(false, true, true), vec3<bool>(true, true, true), vec3<bool>(true, true, true)), vec3<bool>(true, true, true), select(vec3<bool>(true, true, true), select(vec3<bool>(false, true, true), vec3<bool>(true, true, true), vec3<bool>(false, true, true)), vec3<bool>(false, false, true)))))) {
        var var_1 = 1f;
        let var_2 = vec4<u32>(~_wgslsmith_mult_u32(20542u, 32659u), 47411u, global1.x, 0u) << (vec4<u32>(_wgslsmith_sub_u32(u_input.d.x, u_input.e.x), abs(u_input.a), _wgslsmith_add_u32(min(_wgslsmith_mult_u32(53849u, u_input.d.x), _wgslsmith_mult_u32(u_input.d.x, global1.x)), _wgslsmith_div_u32(_wgslsmith_dot_vec2_u32(global1.zz, vec2<u32>(global1.x, u_input.a)), 63880u)), 18609u) % vec4<u32>(32u));
        for (var var_3 = 56897i; var_3 <= 0i; global0 = array<Struct_1, 25>()) {
            if (LOOP_COUNTERS[11u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        }
        switch (~(~1i)) {
            case -1i: {
                global2 = array<u32, 6>();
            }
            case 10755i: {
                var_0 = _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(-1000f, _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(925f + arg_0.x))))) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_0.x - -1530f))), arg_0.x));
                let var_3 = _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-arg_0.x), arg_0.x));
                var_1 = 1000f;
            }
            case 691i: {
                var var_3 = _wgslsmith_sub_vec2_i32(_wgslsmith_div_vec2_i32(_wgslsmith_sub_vec2_i32(-vec2<i32>(1i, 1i), vec2<i32>(1i, min(-13097i, 1i))), reverseBits(vec2<i32>(_wgslsmith_mult_i32(1i, -34274i), i32(-2147483648)))), -abs(~(-vec2<i32>(-1i, 24519i))));
            }
            default: {
                let var_3 = global0[_wgslsmith_index_u32(~var_2.x, 25u)];
                var var_4 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(143f)));
            }
        }
        var var_3 = vec4<f32>(865f, 178f, _wgslsmith_f_op_f32(min(-1966f, -1281f)), arg_0.x);
    }
    return Struct_1(1i, true, firstLeadingBit(4022u), _wgslsmith_dot_vec2_u32(~u_input.c.yz, u_input.c.yy << (global1.xy % vec2<u32>(32u))));
}

fn func_8(arg_0: Struct_1, arg_1: Struct_1, arg_2: f32, arg_3: i32) -> vec3<f32> {
    var var_0 = arg_0;
    if (any(!(!select(vec4<bool>(false, true, true, true), !vec4<bool>(var_0.b, var_0.b, var_0.b, arg_1.b), true)))) {
        loop {
            if (LOOP_COUNTERS[12u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
            var_0 = func_7(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(1265f, -874f, -205f)) - _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(arg_2, arg_2, 265f) + vec3<f32>(arg_2, -1397f, -1084f)))) - _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(step(vec3<f32>(391f, -352f, -845f), vec3<f32>(-379f, -1000f, 1000f))) * _wgslsmith_div_vec3_f32(vec3<f32>(arg_2, -375f, 2091f), vec3<f32>(-1000f, -620f, arg_2))) - vec3<f32>(_wgslsmith_f_op_f32(-1574f), arg_2, _wgslsmith_f_op_f32(f32(-1f) * -384f)))));
            global0 = array<Struct_1, 25>();
        }
        var_0 = func_7(_wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(-398f, 1169f, arg_2) - vec3<f32>(1863f, arg_2, -2614f))), vec3<f32>(arg_2, _wgslsmith_f_op_f32(-1000f), arg_2))))));
        for (var var_1 = -13402i; var_1 < -21775i; var_1 -= 1i) {
            if (LOOP_COUNTERS[13u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
            let var_2 = arg_1;
            var_1 = arg_1.a;
            var var_3 = var_2;
            var var_4 = _wgslsmith_dot_vec3_i32(~firstTrailingBit(vec3<i32>(-1i) * -vec3<i32>(arg_3, arg_3, var_0.a)), _wgslsmith_sub_vec3_i32(~(~(-vec3<i32>(1i, 18299i, var_0.a))), -(vec3<i32>(-76215i, -1i, arg_1.a) >> (_wgslsmith_mult_vec3_u32(u_input.c, u_input.e.xzw) % vec3<u32>(32u)))));
            let var_5 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(arg_2 * _wgslsmith_f_op_f32(-1000f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_2)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1302f))) + _wgslsmith_f_op_vec3_f32(-vec3<f32>(-432f, 289f, _wgslsmith_f_op_f32(f32(-1f) * -1000f)))));
        }
        if (!all(select(vec2<bool>(true, true), !vec2<bool>(var_0.b, arg_1.b), vec2<bool>(var_0.b, true)))) {
            global1 = firstTrailingBit(u_input.e.wyx >> (vec3<u32>(var_0.d, 17193u, global2[_wgslsmith_index_u32(global1.x, 6u)]) % vec3<u32>(32u)));
            let var_1 = Struct_1(arg_1.a, !var_0.b, arg_0.c, global2[_wgslsmith_index_u32(~arg_1.c, 6u)]);
        }
    }
    loop {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        for (var var_1 = -1i; !(true == arg_1.b); var_1 -= 1i) {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
        }
        loop {
            if (LOOP_COUNTERS[16u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
            var var_1 = func_7(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(arg_2, arg_2, arg_2) + vec3<f32>(arg_2, arg_2, -653f)))) + _wgslsmith_div_vec3_f32(_wgslsmith_div_vec3_f32(_wgslsmith_div_vec3_f32(vec3<f32>(-412f, arg_2, -1101f), vec3<f32>(arg_2, arg_2, arg_2)), vec3<f32>(arg_2, arg_2, arg_2)), vec3<f32>(arg_2, 108f, _wgslsmith_f_op_f32(-arg_2)))));
            break;
        }
    }
    if (all(vec2<bool>(func_7(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(step(vec3<f32>(-1930f, arg_2, arg_2), vec3<f32>(182f, -869f, 1000f))) * _wgslsmith_f_op_vec3_f32(-vec3<f32>(arg_2, 1974f, 1832f)))).b, arg_1.b))) {
    }
    var_0 = arg_1;
    return _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(arg_2, -1000f, arg_2) - vec3<f32>(-836f, arg_2, -452f)) + _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(vec3<f32>(arg_2, arg_2, 1514f) - vec3<f32>(arg_2, -846f, arg_2)), _wgslsmith_f_op_vec3_f32(vec3<f32>(arg_2, 753f, arg_2) - vec3<f32>(1000f, -667f, arg_2))))) + vec3<f32>(_wgslsmith_f_op_f32(func_4()), arg_2, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(855f * arg_2) - _wgslsmith_f_op_f32(f32(-1f) * -1069f)))));
}

fn func_3() -> vec3<u32> {
    loop {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
        break;
    }
    for (var var_0 = 2147483647i; ; global2 = array<u32, 6>()) {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        let var_1 = _wgslsmith_f_op_vec3_f32(func_8(func_7(vec3<f32>(1805f, _wgslsmith_div_f32(_wgslsmith_f_op_f32(-412f), _wgslsmith_f_op_f32(f32(-1f) * -1000f)), _wgslsmith_f_op_f32(func_4()))), Struct_1(func_7(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(669f, 913f, -745f)) * _wgslsmith_f_op_vec3_f32(sign(vec3<f32>(2032f, -923f, 280f))))).a, false, 1049u, ~_wgslsmith_div_u32(global1.x, global2[_wgslsmith_index_u32(~global1.x, 6u)])), _wgslsmith_f_op_f32(-380f + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1033f))), reverseBits(_wgslsmith_clamp_i32(select(-36380i, -41691i, any(vec3<bool>(false, false, true))), _wgslsmith_mod_i32(~(i32(-2147483648)), ~25435i), -2147483647i))));
        for (; select(true, all(vec4<bool>(true, true, false, true)) & all(vec4<bool>(var_1.x > var_1.x, true, true, func_7(vec3<f32>(var_1.x, var_1.x, var_1.x)).b)), !all(!select(vec4<bool>(false, false, true, true), vec4<bool>(true, true, true, true), vec4<bool>(true, true, false, true)))); ) {
            if (LOOP_COUNTERS[19u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
            break;
        }
        switch (abs(max(-1i, 14794i))) {
            case -2676i: {
                continue;
            }
            case 4458i: {
                let var_2 = Struct_1(~(-48862i) << (min(reverseBits(firstLeadingBit(44617u)), ~global2[_wgslsmith_index_u32(48660u, 6u)]) % 32u), true, 0u, global1.x);
                break;
            }
            default: {
                let var_2 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_1.x) * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -224f)));
            }
        }
        global1 = vec3<u32>(u_input.b.x, 101087u, _wgslsmith_mult_u32(countOneBits(1u), 4294967295u));
        for (; true; ) {
            if (LOOP_COUNTERS[20u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
            continue;
        }
    }
    let var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1f + 1743f)));
    global2 = array<u32, 6>();
    global1 = vec3<u32>(~u_input.a, 4294967295u, _wgslsmith_dot_vec4_u32(u_input.e | vec4<u32>(func_5(), max(4294967295u, 53970u), global2[_wgslsmith_index_u32(global1.x, 6u)], u_input.d.x & u_input.c.x), _wgslsmith_mult_vec4_u32(reverseBits(~u_input.e), vec4<u32>(17436u, 0u, global1.x, global1.x) << (~vec4<u32>(global1.x, u_input.e.x, 0u, global2[_wgslsmith_index_u32(26994u, 6u)]) % vec4<u32>(32u)))));
    return vec3<u32>(reverseBits(_wgslsmith_div_u32(_wgslsmith_clamp_u32(_wgslsmith_dot_vec3_u32(u_input.d, u_input.c), _wgslsmith_dot_vec3_u32(vec3<u32>(4294967295u, 4294967295u, global1.x), vec3<u32>(14927u, u_input.c.x, 4020u)), ~49449u), ~(u_input.a | global1.x))), firstTrailingBit(~0u), _wgslsmith_mod_u32(firstTrailingBit(global1.x), ~reverseBits(global1.x)) | _wgslsmith_div_u32(~119997u, ~51815u << (_wgslsmith_sub_u32(u_input.d.x, global1.x) % 32u)));
}

fn func_2(arg_0: u32, arg_1: vec4<i32>) -> Struct_1 {
    var var_0 = vec3<u32>(22000u, _wgslsmith_sub_u32(~global1.x, global2[_wgslsmith_index_u32(~(~84874u), 6u)] | 62319u), global1.x);
    var var_1 = _wgslsmith_mod_vec3_u32(~u_input.d, min(func_3(), ~u_input.e.xyz));
    let var_2 = _wgslsmith_clamp_vec2_u32(vec2<u32>(7077u, global1.x), firstTrailingBit(var_1.xz), _wgslsmith_mod_vec2_u32(min(vec2<u32>(44041u, var_1.x), ~vec2<u32>(var_1.x, u_input.b.x)), u_input.e.zw));
    var var_3 = Struct_1(_wgslsmith_add_i32(~1i, ~func_1()), false, global1.x, (_wgslsmith_mod_u32(37482u, ~0u) >> (0u % 32u)) & select(~arg_0, 1u, true));
    if (all(select(select(vec3<bool>(true, true, true), vec3<bool>(true, var_3.b, all(vec2<bool>(false, true))), !all(vec2<bool>(false, var_3.b))), vec3<bool>(true, false, true & any(vec3<bool>(false, true, true))), !select(vec3<bool>(var_3.b, true, true), vec3<bool>(false, true, var_3.b), var_3.b)))) {
        loop {
            if (LOOP_COUNTERS[21u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
            var var_4 = Struct_1(_wgslsmith_mod_i32(func_7(_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(vec3<f32>(973f, 1000f, -2363f) * vec3<f32>(-1491f, 670f, 279f)), vec3<f32>(240f, 176f, 353f), !vec3<bool>(var_3.b, var_3.b, false)))).a, _wgslsmith_mod_i32(var_3.a, arg_1.x)), var_3.b, global2[_wgslsmith_index_u32(_wgslsmith_dot_vec3_u32(u_input.d, u_input.d) >> (((~arg_0 << (~1u % 32u)) | 32130u) % 32u), 6u)], ~(countOneBits(1u | var_1.x) | ~(~var_2.x)));
            let var_5 = _wgslsmith_mod_vec2_u32(global1.yx | ~_wgslsmith_div_vec2_u32(firstTrailingBit(vec2<u32>(global2[_wgslsmith_index_u32(global1.x, 6u)], var_4.d)), vec2<u32>(4294967295u, global2[_wgslsmith_index_u32(25046u, 6u)]) >> (var_0.yz % vec2<u32>(32u))), global1.xy);
            continue;
        }
        var var_4 = arg_1.x;
    }
    return func_7(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(max(-222f, 199f)), _wgslsmith_f_op_f32(floor(459f)), _wgslsmith_f_op_f32(abs(-1290f))) + vec3<f32>(_wgslsmith_div_f32(-728f, -745f), _wgslsmith_f_op_f32(1924f - -390f), -1109f))));
}

fn func_9(arg_0: vec2<i32>, arg_1: Struct_1, arg_2: f32) -> Struct_1 {
    var var_0 = select(vec2<bool>(true, true), !(!select(select(vec2<bool>(true, arg_1.b), vec2<bool>(true, true), arg_1.b), !vec2<bool>(true, arg_1.b), select(vec2<bool>(arg_1.b, false), vec2<bool>(true, true), true))), vec2<bool>(!all(!vec4<bool>(true, false, true, arg_1.b)), false));
    return func_7(vec3<f32>(arg_2, _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-1049f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_2))));
}

@compute
@workgroup_size(1)
fn main() {
    loop {
        if (LOOP_COUNTERS[22u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
        loop {
            if (LOOP_COUNTERS[23u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
            global2 = array<u32, 6>();
        }
        break;
    }
    switch (-(~(~func_1()))) {
        default: {
            let var_0 = global0[_wgslsmith_index_u32(3793u, 25u)];
            for (var var_1: i32; ; var_1 += 1i) {
                if (LOOP_COUNTERS[24u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
                var var_2 = ~(-vec3<i32>(var_0.a, -(i32(-1i) * i32(-2147483648)), var_0.a));
                global2 = array<u32, 6>();
                global1 = u_input.e.xzw;
                continue;
            }
            global0 = array<Struct_1, 25>();
            switch (-min(_wgslsmith_sub_i32(~(var_0.a >> (5295u % 32u)), _wgslsmith_dot_vec2_i32(vec2<i32>(var_0.a, var_0.a), vec2<i32>(var_0.a, 1i) & vec2<i32>(var_0.a, var_0.a))), -24i)) {
                case 1i: {
                    global2 = array<u32, 6>();
                }
                case 2147483647i: {
                    var var_1 = global0[_wgslsmith_index_u32(~(~(~_wgslsmith_add_u32(global1.x, ~59372u))), 25u)];
                    let var_2 = func_9(vec2<i32>(~_wgslsmith_add_i32(var_1.a, 2147483647i), _wgslsmith_dot_vec4_i32(_wgslsmith_div_vec4_i32(~vec4<i32>(227i, -1i, var_1.a, var_1.a), vec4<i32>(0i, var_0.a, var_0.a, var_1.a)), ~abs(vec4<i32>(var_1.a, -1i, var_1.a, var_1.a)))), func_2(var_1.d, ~_wgslsmith_div_vec4_i32(_wgslsmith_mod_vec4_i32(vec4<i32>(-26438i, -1i, 33424i, 44648i), vec4<i32>(var_0.a, var_1.a, 2147483647i, 15618i)), -vec4<i32>(27851i, var_0.a, var_1.a, var_0.a))), -671f);
                }
                case i32(-2147483648): {
                    global1 = u_input.c;
                    global2 = array<u32, 6>();
                    return;
                }
                case 11969i: {
                }
                default: {
                    var var_1 = global0[_wgslsmith_index_u32(0u, 25u)];
                    var var_2 = global1.yx;
                    let var_3 = global0[_wgslsmith_index_u32(0u, 25u)];
                    let var_4 = Struct_1(var_1.a, var_0.b, global1.x, ~_wgslsmith_dot_vec3_u32(~select(vec3<u32>(21138u, 0u, var_2.x), u_input.c, vec3<bool>(true, var_0.b, var_3.b)), u_input.e.www));
                }
            }
            global0 = array<Struct_1, 25>();
        }
    }
    switch (abs(i32(-1i) * -(~(-30561i)))) {
        case -1i: {
            global0 = array<Struct_1, 25>();
            global2 = array<u32, 6>();
            let var_0 = global0[_wgslsmith_index_u32(~reverseBits(_wgslsmith_mod_u32(~u_input.a, ~global1.x) & abs(abs(0u))), 25u)];
            let var_1 = global0[_wgslsmith_index_u32(_wgslsmith_dot_vec3_u32(u_input.c, ~vec3<u32>(4294967295u, ~3501u << (global2[_wgslsmith_index_u32(~118024u, 6u)] % 32u), 24630u)), 25u)];
        }
        case 0i: {
            switch (reverseBits(_wgslsmith_div_i32(_wgslsmith_clamp_i32(~(i32(-2147483648)), _wgslsmith_mult_i32(-1i, 5344i), _wgslsmith_dot_vec3_i32(vec3<i32>(44922i, 39789i, 2147483647i), vec3<i32>(-31677i, -1i, 1i))) | -1i, 49879i))) {
                default: {
                    global2 = array<u32, 6>();
                    global2 = array<u32, 6>();
                    let var_0 = u_input.c | (max(func_3(), u_input.c) << (~u_input.c % vec3<u32>(32u)));
                    let var_1 = global0[_wgslsmith_index_u32(83712u, 25u)];
                }
            }
        }
        default: {
            let var_0 = !(!(798f < _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(floor(-776f))))));
            loop {
                if (LOOP_COUNTERS[25u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
                global1 = vec3<u32>(15340u, u_input.d.x, func_3().x);
                global2 = array<u32, 6>();
                let var_1 = select(vec2<bool>(false, any(vec3<bool>(true, all(vec2<bool>(true, var_0)), true && var_0))), vec2<bool>(all(select(vec2<bool>(true, var_0), vec2<bool>(true, false), select(vec2<bool>(var_0, var_0), vec2<bool>(false, true), var_0))), true), vec2<bool>(true, var_0));
            }
            var var_1 = vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -654f) - -742f), 861f, 694f, _wgslsmith_div_f32(_wgslsmith_div_f32(105f, _wgslsmith_div_f32(_wgslsmith_f_op_f32(1084f + 1000f), _wgslsmith_f_op_f32(f32(-1f) * -208f))), _wgslsmith_f_op_vec2_f32(func_6(Struct_1(reverseBits(-21784i), var_0, global2[_wgslsmith_index_u32(33537u, 6u)] & u_input.e.x, 28825u))).x));
        }
    }
    let var_0 = vec3<i32>(25349i, (func_2(4294967295u, vec4<i32>(0i, 5702i, 29896i, 14520i)).a ^ func_1()) >> (u_input.c.x % 32u), 2147483647i);
    switch (~select(reverseBits(_wgslsmith_dot_vec2_i32(vec2<i32>(-23100i, -29273i), vec2<i32>(var_0.x, i32(-2147483648)))), _wgslsmith_mod_i32(-48513i, ~min(var_0.x, var_0.x)), !all(vec4<bool>(true, true, true, true)))) {
        default: {
            loop {
                if (LOOP_COUNTERS[26u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
            }
        }
    }
    let var_1 = Struct_1(var_0.x, false, 90081u, global2[_wgslsmith_index_u32(select(23996u, abs(~global2[_wgslsmith_index_u32(0u, 6u)]), true), 6u)]);
    let x = u_input.a;
    s_output = StorageBuffer(select(reverseBits(vec4<i32>(0i, -1i, 2147483647i, i32(-2147483648))) << (u_input.e % vec4<u32>(32u)), ~(-vec4<i32>(var_0.x, var_1.a, 1i, var_1.a)), !(var_1.b && false)) ^ -vec4<i32>(countOneBits(var_1.a), _wgslsmith_sub_i32(-1i, -29217i), -12751i, _wgslsmith_add_i32(var_0.x, -1i)), ~var_1.a, max(-countOneBits(-37724i) & _wgslsmith_dot_vec4_i32(-vec4<i32>(0i, var_0.x, var_0.x, var_1.a), vec4<i32>(2147483647i, var_0.x, -11600i, var_0.x)), -6648i), global1.xx);
}

`;