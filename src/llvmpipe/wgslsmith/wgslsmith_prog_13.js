export const input = [184,114,28,85,40,121,78,125,123,49,88,254,244,54,154,54,88,96,18,59,63,237,41,130,213,197,215,222,13,49,17,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [184,114,28,85,40,121,78,125,123,49,88,254,244,54,154,54,88,96,18,59,63,237,41,130,213,197,215,222,13,49,17,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[184,114,28,85,40,121,78,125,123,49,88,254,244,54,154,54,88,96,18,59,63,237,41,130,213,197,215,222,13,49,17,32]}
// Seed: 11880281504858525559

struct Struct_1 {
    a: f32,
    b: vec2<f32>,
}

struct UniformBuffer {
    a: i32,
    b: i32,
    c: vec2<u32>,
    d: vec2<i32>,
    e: i32,
}

struct StorageBuffer {
    a: u32,
    b: vec3<u32>,
    c: vec3<i32>,
    d: vec4<i32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<f32, 11>;

var<private> global1: array<f32, 4>;

var<private> global2: Struct_1;

var<private> global3: array<vec3<f32>, 26> = array<vec3<f32>, 26>(vec3<f32>(-1000f, 234f, -2142f), vec3<f32>(1000f, -1073f, 931f), vec3<f32>(-218f, -324f, 203f), vec3<f32>(-1100f, -1287f, 521f), vec3<f32>(530f, -491f, 935f), vec3<f32>(1119f, -1492f, -1147f), vec3<f32>(-189f, 1607f, -145f), vec3<f32>(1133f, -1000f, 657f), vec3<f32>(-670f, -1448f, 494f), vec3<f32>(-1735f, -667f, 730f), vec3<f32>(-1136f, 906f, 1000f), vec3<f32>(-306f, 150f, -1698f), vec3<f32>(-203f, 485f, 283f), vec3<f32>(-536f, 1555f, -665f), vec3<f32>(757f, -2051f, 403f), vec3<f32>(-577f, 1468f, -1809f), vec3<f32>(528f, 515f, -234f), vec3<f32>(1538f, 1472f, -181f), vec3<f32>(381f, -132f, 274f), vec3<f32>(-1805f, 843f, 780f), vec3<f32>(-962f, -509f, 1642f), vec3<f32>(-1799f, 495f, -195f), vec3<f32>(-647f, -1110f, -961f), vec3<f32>(-143f, -847f, -2102f), vec3<f32>(1071f, -1000f, 1000f), vec3<f32>(-353f, -505f, 404f));

var<private> global4: array<Struct_1, 24> = array<Struct_1, 24>(Struct_1(-411f, vec2<f32>(-1610f, 146f)), Struct_1(-783f, vec2<f32>(-1435f, -1037f)), Struct_1(177f, vec2<f32>(-641f, -1207f)), Struct_1(-1698f, vec2<f32>(-783f, 2219f)), Struct_1(-319f, vec2<f32>(-866f, 2222f)), Struct_1(-1357f, vec2<f32>(878f, -336f)), Struct_1(157f, vec2<f32>(727f, -601f)), Struct_1(682f, vec2<f32>(509f, -808f)), Struct_1(758f, vec2<f32>(1000f, -396f)), Struct_1(-669f, vec2<f32>(287f, 1469f)), Struct_1(409f, vec2<f32>(799f, 125f)), Struct_1(1000f, vec2<f32>(-530f, 1957f)), Struct_1(-1288f, vec2<f32>(1000f, -1000f)), Struct_1(-1000f, vec2<f32>(-2590f, -724f)), Struct_1(1276f, vec2<f32>(1000f, -988f)), Struct_1(658f, vec2<f32>(409f, 726f)), Struct_1(1345f, vec2<f32>(-290f, 264f)), Struct_1(2388f, vec2<f32>(444f, 1000f)), Struct_1(222f, vec2<f32>(1486f, -1000f)), Struct_1(1343f, vec2<f32>(195f, 182f)), Struct_1(1545f, vec2<f32>(-826f, -157f)), Struct_1(-1000f, vec2<f32>(-542f, 456f)), Struct_1(-1100f, vec2<f32>(416f, -919f)), Struct_1(1836f, vec2<f32>(1524f, -427f)));

var<private> LOOP_COUNTERS: array<u32, 19>;

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn func_6(arg_0: i32) -> i32 {
    for (var var_0: i32; var_0 <= 24636i; var_0 -= 1i) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
    }
    var var_0 = global4[_wgslsmith_index_u32(_wgslsmith_clamp_u32(1u, u_input.c.x, _wgslsmith_sub_u32(u_input.c.x, 84100u)), 24u)];
    let var_1 = global4[_wgslsmith_index_u32(u_input.c.x, 24u)];
    loop {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        let var_2 = select(vec4<bool>(true, select(all(select(vec4<bool>(false, false, false, false), vec4<bool>(true, true, true, false), vec4<bool>(false, true, true, true))), _wgslsmith_f_op_f32(-407f) < _wgslsmith_f_op_f32(var_0.b.x + 303f), true), true, true), vec4<bool>(14694i > _wgslsmith_dot_vec3_i32(vec3<i32>(22128i, u_input.e, 2147483647i), _wgslsmith_clamp_vec3_i32(vec3<i32>(arg_0, 1i, i32(-2147483648)), vec3<i32>(i32(-2147483648), -1i, 56395i), vec3<i32>(u_input.e, arg_0, 55529i))), true, !all(vec2<bool>(true, true)), false), !(!select(vec4<bool>(true, false, true, false), select(vec4<bool>(false, false, false, false), vec4<bool>(false, true, true, false), true), vec4<bool>(true, true, true, true))));
        for (var var_3 = -17110i; var_2.x; ) {
            if (LOOP_COUNTERS[2u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            let var_4 = var_2;
        }
    }
    global0 = array<f32, 11>();
    return arg_0;
}

fn func_5() -> i32 {
    for (var var_0: i32; var_0 > -40342i; global2 = global4[_wgslsmith_index_u32(4294967295u, 24u)]) {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        var var_1 = select(vec4<i32>(reverseBits(1i), -_wgslsmith_sub_i32(u_input.e, reverseBits(u_input.e)), countOneBits(-7462i & abs(u_input.b)), abs(u_input.b)), vec4<i32>(_wgslsmith_sub_i32(~u_input.b, 33270i >> (~u_input.c.x % 32u)), -48963i, _wgslsmith_dot_vec4_i32(-(vec4<i32>(u_input.d.x, u_input.b, 25807i, -6624i) << (vec4<u32>(0u, u_input.c.x, u_input.c.x, 0u) % vec4<u32>(32u))), ~vec4<i32>(-24112i, -17283i, u_input.e, 32034i)), func_6(abs(-u_input.a))), vec4<bool>(true, u_input.c.x == _wgslsmith_dot_vec2_u32(_wgslsmith_mod_vec2_u32(vec2<u32>(0u, 62971u), u_input.c), _wgslsmith_sub_vec2_u32(u_input.c, vec2<u32>(89325u, 25136u))), false, _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(ceil(global0[_wgslsmith_index_u32(0u, 11u)])))) != _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(global2.a)) - _wgslsmith_f_op_f32(sign(408f)))));
        var var_2 = u_input.c.x;
        loop {
            if (LOOP_COUNTERS[4u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
            break;
        }
        var var_3 = _wgslsmith_clamp_vec2_u32(firstTrailingBit(~(~firstTrailingBit(u_input.c))), reverseBits(_wgslsmith_sub_vec2_u32(u_input.c, vec2<u32>(~u_input.c.x, 1u))), ~(u_input.c >> (~_wgslsmith_add_vec2_u32(u_input.c, u_input.c) % vec2<u32>(32u))));
        if (any(vec3<bool>(false, select(true, false, select(any(vec3<bool>(true, false, true)), any(vec2<bool>(true, false)), global1[_wgslsmith_index_u32(0u, 4u)] >= 1655f)), true))) {
            global3 = array<vec3<f32>, 26>();
            var var_4 = Struct_1(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(_wgslsmith_div_f32(global1[_wgslsmith_index_u32(_wgslsmith_div_u32(u_input.c.x, 1u), 4u)], _wgslsmith_f_op_f32(ceil(global2.a))), global2.a)) * global1[_wgslsmith_index_u32(_wgslsmith_dot_vec2_u32(_wgslsmith_mod_vec2_u32(u_input.c, vec2<u32>(1u, var_3.x)) | (u_input.c >> (vec2<u32>(0u, 1u) % vec2<u32>(32u))), min(_wgslsmith_mult_vec2_u32(vec2<u32>(4294967295u, var_3.x), u_input.c), vec2<u32>(var_3.x, u_input.c.x))), 4u)]), global2.b);
            break;
        }
    }
    for (var var_0 = 4956i; all(select(select(select(vec2<bool>(false, true), vec2<bool>(true, true), vec2<bool>(true, true)), select(vec2<bool>(true, true), select(vec2<bool>(false, true), vec2<bool>(true, true), vec2<bool>(false, false)), any(vec2<bool>(true, true))), true), vec2<bool>(true, false), vec2<bool>(true, true))); var_0 += 1i) {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        if (any(select(vec2<bool>(true, true || any(vec2<bool>(true, true))), vec2<bool>(true, true), false))) {
        }
        let var_1 = u_input.e >> (~u_input.c.x % 32u);
        global2 = Struct_1(_wgslsmith_div_f32(global1[_wgslsmith_index_u32(1u, 4u)], _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_div_f32(global1[_wgslsmith_index_u32(u_input.c.x, 4u)], 419f)))), _wgslsmith_f_op_vec2_f32(trunc(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(-vec2<f32>(global1[_wgslsmith_index_u32(1u, 4u)], global2.a)), _wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(-746f, 265f))))) * global2.b))));
    }
    global4 = array<Struct_1, 24>();
    var var_0 = 1u;
    global3 = array<vec3<f32>, 26>();
    return ~_wgslsmith_mult_i32(_wgslsmith_dot_vec4_i32(_wgslsmith_div_vec4_i32(vec4<i32>(u_input.d.x, -1i, -1i, u_input.b) ^ vec4<i32>(1i, 2147483647i, u_input.b, 2147483647i), abs(vec4<i32>(0i, u_input.d.x, 1i, i32(-2147483648)))), vec4<i32>(1i, -u_input.a, _wgslsmith_dot_vec4_i32(vec4<i32>(-35900i, u_input.a, i32(-2147483648), 2147483647i), vec4<i32>(u_input.b, -4876i, 2147483647i, u_input.e)), -u_input.b)), _wgslsmith_mod_i32(0i, min(u_input.a, 0i)));
}

fn func_4(arg_0: bool, arg_1: vec2<u32>, arg_2: i32) -> i32 {
    let var_0 = -abs(-firstLeadingBit(-vec3<i32>(arg_2, u_input.d.x, arg_2)));
    global0 = array<f32, 11>();
    var var_1 = Struct_1(-649f, vec2<f32>(1631f, -385f));
    if (arg_0) {
        if (_wgslsmith_mult_i32(~_wgslsmith_clamp_i32(-arg_2, -var_0.x, select(u_input.d.x, -1i, true)), -(~func_5())) <= ~((i32(-1i) * -1i) | ~u_input.e)) {
            let var_2 = _wgslsmith_sub_vec4_u32(select(vec4<u32>(arg_1.x, u_input.c.x, _wgslsmith_dot_vec2_u32(u_input.c, arg_1), u_input.c.x) >> (_wgslsmith_mod_vec4_u32(~vec4<u32>(u_input.c.x, 0u, arg_1.x, arg_1.x), _wgslsmith_clamp_vec4_u32(vec4<u32>(arg_1.x, u_input.c.x, u_input.c.x, 268u), vec4<u32>(arg_1.x, 12748u, 1u, 0u), vec4<u32>(0u, 1u, arg_1.x, 0u))) % vec4<u32>(32u)), abs(select(vec4<u32>(arg_1.x, u_input.c.x, 0u, 4294967295u) & vec4<u32>(u_input.c.x, 0u, 3065u, 28770u), ~vec4<u32>(4294967295u, 53544u, 0u, u_input.c.x), true)), true), countOneBits(firstLeadingBit(reverseBits(vec4<u32>(4294967295u, 22465u, 55394u, 4258u) ^ vec4<u32>(27625u, 4294967295u, 11200u, u_input.c.x)))));
        }
        for (var var_2 = 2147483647i; var_2 != 1i; global3 = array<vec3<f32>, 26>()) {
            if (LOOP_COUNTERS[6u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
            global0 = array<f32, 11>();
            global4 = array<Struct_1, 24>();
        }
    }
    global1 = array<f32, 4>();
    return ~0i;
}

fn func_3(arg_0: u32, arg_1: vec2<bool>, arg_2: u32) -> f32 {
    global1 = array<f32, 4>();
    global2 = Struct_1(1000f, vec2<f32>(global2.a, 540f));
    let var_0 = global2.a;
    for (var var_1 = -17923i; var_1 != 1i; var_1 -= 1i) {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        global4 = array<Struct_1, 24>();
        loop {
            if (LOOP_COUNTERS[8u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
            global2 = Struct_1(_wgslsmith_f_op_f32(global2.a * _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(-1330f, global0[_wgslsmith_index_u32(1u, 11u)], true)) + global1[_wgslsmith_index_u32(1u, 4u)]), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(global1[_wgslsmith_index_u32(arg_0, 4u)], -1103f))))), _wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(ceil(global2.b)))));
        }
    }
    loop {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        switch (func_4(all(select(vec2<bool>(true, true), !(!arg_1), !arg_1.x)), ~((vec2<u32>(39629u, 4294967295u) >> (select(vec2<u32>(u_input.c.x, arg_0), u_input.c, true) % vec2<u32>(32u))) >> (_wgslsmith_mult_vec2_u32(~u_input.c, vec2<u32>(4294967295u, arg_0)) % vec2<u32>(32u))), max(2147483647i, firstLeadingBit(~(-34015i))))) {
            case 0i: {
                global2 = Struct_1(214f, _wgslsmith_f_op_vec2_f32(global2.b - _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(global0[_wgslsmith_index_u32(u_input.c.x, 11u)], global0[_wgslsmith_index_u32(20642u, 11u)]))))));
            }
            case 5089i: {
                break;
            }
            case 1i: {
                break;
            }
            default: {
            }
        }
        loop {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
            let var_1 = -23611i;
        }
    }
    return _wgslsmith_f_op_f32(global2.a - 671f);
}

fn func_2() -> bool {
    let var_0 = vec4<i32>(u_input.b, -u_input.a, _wgslsmith_div_i32(abs(u_input.e), i32(-2147483648)), -16040i);
    switch (~countOneBits(-25839i)) {
        case i32(-2147483648): {
            var var_1 = global4[_wgslsmith_index_u32(u_input.c.x, 24u)];
            let var_2 = vec4<bool>(select(true, true || (global0[_wgslsmith_index_u32(~u_input.c.x, 11u)] >= _wgslsmith_f_op_f32(-588f)), true), !(true && !(var_0.x != var_0.x)), true, _wgslsmith_f_op_f32(trunc(-1756f)) > _wgslsmith_f_op_f32(func_3(22873u, vec2<bool>(true, true), u_input.c.x)));
            let var_3 = _wgslsmith_f_op_vec4_f32(round(vec4<f32>(_wgslsmith_f_op_f32(exp2(global1[_wgslsmith_index_u32(u_input.c.x, 4u)])), _wgslsmith_f_op_f32(min(global0[_wgslsmith_index_u32(~(48132u | u_input.c.x), 11u)], _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(821f - global0[_wgslsmith_index_u32(0u, 11u)]))))), global2.b.x, 301f)));
        }
        case -22322i: {
            let var_1 = 2147483647i;
            loop {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                let var_2 = ~_wgslsmith_div_i32(9438i, _wgslsmith_dot_vec2_i32(-(vec2<i32>(1i, var_1) & vec2<i32>(u_input.e, var_0.x)), ~(~vec2<i32>(u_input.d.x, 22042i))));
            }
            let var_2 = vec2<u32>(u_input.c.x, u_input.c.x);
            var var_3 = true;
            global4 = array<Struct_1, 24>();
        }
        default: {
            global2 = Struct_1(_wgslsmith_f_op_f32(global1[_wgslsmith_index_u32(~max(_wgslsmith_dot_vec2_u32(u_input.c, u_input.c), max(u_input.c.x, u_input.c.x)), 4u)] + _wgslsmith_f_op_f32(-1000f)), _wgslsmith_f_op_vec2_f32(-global2.b));
            for (var var_1 = -56005i; var_1 < -1i; var_1 = -9278i) {
                if (LOOP_COUNTERS[12u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
                continue;
            }
        }
    }
    let var_1 = vec2<bool>(true, !all(vec4<bool>(true, all(vec2<bool>(true, true)), true, select(false, false, false))));
    global3 = array<vec3<f32>, 26>();
    for (var var_2 = 2147483647i; var_2 == 2147483647i; var_2 -= 1i) {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        global3 = array<vec3<f32>, 26>();
        var var_3 = any(select(vec2<bool>(true, all(vec4<bool>(var_1.x, var_1.x, false, var_1.x))), var_1, var_1.x));
        if (true) {
            break;
        }
        global3 = array<vec3<f32>, 26>();
        let var_4 = global4[_wgslsmith_index_u32(u_input.c.x, 24u)];
    }
    return true;
}

fn func_1(arg_0: vec2<bool>) -> i32 {
    if (arg_0.x) {
        if (true) {
        }
        for (var var_0 = 3393i; var_0 != 2147483647i; var_0 += 1i) {
            if (LOOP_COUNTERS[14u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
            break;
        }
        let var_0 = _wgslsmith_f_op_vec3_f32(round(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(global3[_wgslsmith_index_u32(_wgslsmith_clamp_u32(59725u, select(u_input.c.x, 36460u, arg_0.x), min(u_input.c.x, u_input.c.x)), 26u)] * _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(exp2(global3[_wgslsmith_index_u32(u_input.c.x, 26u)])), global3[_wgslsmith_index_u32(_wgslsmith_mult_u32(14304u, u_input.c.x), 26u)])), _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(global1[_wgslsmith_index_u32(u_input.c.x, 4u)], global1[_wgslsmith_index_u32(4294967295u, 4u)], -757f)), vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -909f), _wgslsmith_f_op_f32(floor(global2.b.x)), _wgslsmith_f_op_f32(global1[_wgslsmith_index_u32(0u, 4u)] * global1[_wgslsmith_index_u32(u_input.c.x, 4u)]))))));
    }
    var var_0 = _wgslsmith_dot_vec3_u32(~(vec3<u32>(1u, 1u, 1u) & vec3<u32>(u_input.c.x, 1u, u_input.c.x)), firstLeadingBit(vec3<u32>(u_input.c.x, 0u, 4294967295u) ^ vec3<u32>(u_input.c.x, u_input.c.x, u_input.c.x))) >= _wgslsmith_div_u32(firstTrailingBit(u_input.c.x), select(102841u, 265u, arg_0.x & false));
    if (any(select(!(!arg_0), !arg_0, vec2<bool>(!func_2(), true)))) {
        var_0 = true;
        global4 = array<Struct_1, 24>();
    }
    var var_1 = vec4<i32>(-1i) * -vec4<i32>(-49188i, u_input.b, _wgslsmith_mult_i32(18039i, 26544i), -76365i);
    loop {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
        switch (var_1.x) {
            case 26080i: {
                let var_2 = global4[_wgslsmith_index_u32(_wgslsmith_mod_u32(_wgslsmith_mod_u32(_wgslsmith_clamp_u32(_wgslsmith_dot_vec3_u32(vec3<u32>(0u, 1u, 123043u), vec3<u32>(u_input.c.x, u_input.c.x, 18244u)), ~u_input.c.x, 1u), _wgslsmith_sub_u32(4294967295u >> (u_input.c.x % 32u), _wgslsmith_add_u32(1u, 1u))) << (36495u % 32u), 1u), 24u)];
            }
            case 0i: {
                continue;
            }
            case 2073i: {
                global4 = array<Struct_1, 24>();
            }
            case -13528i: {
                let var_2 = Struct_1(-1597f, global2.b);
                let var_3 = reverseBits(vec4<u32>(u_input.c.x, firstTrailingBit((u_input.c.x ^ u_input.c.x) << (4294967295u % 32u)), ~1u, (_wgslsmith_sub_u32(90842u, u_input.c.x) ^ 33103u) << (_wgslsmith_clamp_u32(1u, _wgslsmith_add_u32(4294967295u, u_input.c.x), 50376u) % 32u)));
                global2 = global4[_wgslsmith_index_u32(u_input.c.x, 24u)];
            }
            default: {
                global0 = array<f32, 11>();
                continue;
            }
        }
    }
    return ~11864i;
}

@compute
@workgroup_size(1)
fn main() {
    global3 = array<vec3<f32>, 26>();
    global3 = array<vec3<f32>, 26>();
    global3 = array<vec3<f32>, 26>();
    var var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(global2.a))));
    global4 = array<Struct_1, 24>();
    var var_1 = u_input.c.x;
    var var_2 = _wgslsmith_f_op_vec2_f32(-vec2<f32>(global2.a, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(global1[_wgslsmith_index_u32(1u, 4u)])) + _wgslsmith_f_op_f32(f32(-1f) * -1172f)) - _wgslsmith_f_op_f32(1728f * _wgslsmith_f_op_f32(-690f)))));
    var var_3 = ~40660u;
    switch (func_1(vec2<bool>(all(!select(vec3<bool>(true, false, false), vec3<bool>(false, true, true), false)), false))) {
        case 54319i: {
            for (var var_4 = -1i; var_4 <= -14556i; var_4 -= 1i) {
                if (LOOP_COUNTERS[16u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
            }
        }
        case 2147483647i: {
            loop {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                let var_4 = global4[_wgslsmith_index_u32(u_input.c.x ^ ~abs(u_input.c.x), 24u)];
                var_1 = u_input.c.x;
                global0 = array<f32, 11>();
            }
            if (false) {
                var var_4 = 23134u;
                let var_5 = vec2<i32>(abs(u_input.a), func_4(false, vec2<u32>(abs(u_input.c.x), 1u) | firstTrailingBit(~u_input.c), ~u_input.d.x));
            }
            var var_4 = global4[_wgslsmith_index_u32(countOneBits(max(u_input.c.x, ~(5399u >> (u_input.c.x % 32u))) << (u_input.c.x % 32u)), 24u)];
        }
        case 8913i: {
            let var_4 = global4[_wgslsmith_index_u32(_wgslsmith_dot_vec4_u32(_wgslsmith_mod_vec4_u32(vec4<u32>(max(43221u, ~11537u), ~u_input.c.x, u_input.c.x, ~u_input.c.x), vec4<u32>(12441u, 0u, abs(~10903u), 44190u)), vec4<u32>(abs(_wgslsmith_div_u32(~28471u, u_input.c.x)), _wgslsmith_clamp_u32((u_input.c.x | 4294967295u) & _wgslsmith_mod_u32(u_input.c.x, 1u), ~u_input.c.x, u_input.c.x), abs(19315u & u_input.c.x) >> (u_input.c.x % 32u), min(~59241u, 16265u))), 24u)];
            var_2 = _wgslsmith_div_vec2_f32(var_4.b, _wgslsmith_f_op_vec2_f32(-vec2<f32>(var_2.x, _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-2845f))))));
            let var_5 = false;
        }
        case -9938i: {
            switch (-_wgslsmith_dot_vec4_i32(vec4<i32>(reverseBits(22808i), -59402i << (_wgslsmith_mult_u32(u_input.c.x, 10795u) % 32u), u_input.a, 29192i), max(select(abs(vec4<i32>(2147483647i, u_input.b, u_input.b, -12930i)), ~vec4<i32>(u_input.d.x, -1i, -1i, 2147483647i), select(vec4<bool>(false, true, false, false), vec4<bool>(false, false, false, false), vec4<bool>(false, true, true, true))), vec4<i32>(-1i, 1i << (u_input.c.x % 32u), _wgslsmith_add_i32(7035i, u_input.a), u_input.b)))) {
                case 53522i: {
                }
                case 45811i: {
                    var_0 = _wgslsmith_f_op_f32(f32(-1f) * -456f);
                }
                case 1i: {
                    global0 = array<f32, 11>();
                    var_2 = vec2<f32>(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(-579f)) * global2.b.x)), -1640f)), -993f);
                    let var_4 = Struct_1(global0[_wgslsmith_index_u32(abs(firstLeadingBit(abs(u_input.c.x) << (u_input.c.x % 32u))), 11u)], _wgslsmith_f_op_vec2_f32(abs(_wgslsmith_f_op_vec2_f32(-_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(global2.b - vec2<f32>(global0[_wgslsmith_index_u32(u_input.c.x, 11u)], global2.b.x)), _wgslsmith_f_op_vec2_f32(select(vec2<f32>(var_2.x, global2.b.x), global2.b, vec2<bool>(true, true))))))));
                    var var_5 = select(vec3<bool>(true != all(vec4<bool>(false, false, false, true)), all(!select(vec4<bool>(false, false, true, false), vec4<bool>(false, true, true, false), false)), false), select(vec3<bool>(true, _wgslsmith_f_op_f32(step(732f, 759f)) >= _wgslsmith_f_op_f32(round(208f)), all(vec4<bool>(true, true, true, true))), vec3<bool>(1f <= _wgslsmith_f_op_f32(sign(-1211f)), any(vec4<bool>(true, true, true, true)), false), false), select(!vec3<bool>(true, any(vec3<bool>(false, true, true)), all(vec4<bool>(true, true, false, false))), select(vec3<bool>(true, true, true), select(vec3<bool>(true, true, true), vec3<bool>(true, true, false), select(vec3<bool>(false, false, true), vec3<bool>(false, false, true), vec3<bool>(true, true, false))), select(vec3<bool>(false, true, false), vec3<bool>(true, true, false), vec3<bool>(true, true, true))), all(vec2<bool>(true, false)) | true));
                }
                case -23135i: {
                    let var_4 = _wgslsmith_clamp_vec2_u32(~(vec2<u32>(u_input.c.x, ~35778u) ^ u_input.c), vec2<u32>(select(u_input.c.x, 0u, u_input.a == u_input.e), ~(~1u)), _wgslsmith_clamp_vec2_u32(~u_input.c, abs(vec2<u32>(~1u, max(4874u, u_input.c.x))), abs(vec2<u32>(~u_input.c.x, 1u))));
                }
                default: {
                    var var_4 = Struct_1(_wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(_wgslsmith_mult_u32(~(~1u), 1u), 11u)] + global0[_wgslsmith_index_u32(u_input.c.x, 11u)]), vec2<f32>(-2284f, _wgslsmith_f_op_f32(select(global0[_wgslsmith_index_u32(6227u, 11u)], 620f, true))));
                    let var_5 = false;
                    var var_6 = -1i;
                    var_6 = u_input.b;
                    var_3 = _wgslsmith_mod_u32(~(51093u ^ _wgslsmith_sub_u32(min(1644u, u_input.c.x), ~1u)), ~u_input.c.x);
                }
            }
            var var_4 = _wgslsmith_mult_vec4_u32(~(~_wgslsmith_div_vec4_u32(~vec4<u32>(u_input.c.x, u_input.c.x, 4294967295u, 1u), _wgslsmith_clamp_vec4_u32(vec4<u32>(u_input.c.x, u_input.c.x, 4294967295u, 1u), vec4<u32>(9076u, 0u, 41042u, u_input.c.x), vec4<u32>(u_input.c.x, 1u, 1u, u_input.c.x)))), ~abs(~firstLeadingBit(vec4<u32>(u_input.c.x, u_input.c.x, u_input.c.x, u_input.c.x))));
            let var_5 = all(select(!vec4<bool>(func_2(), any(vec4<bool>(true, true, false, false)), any(vec3<bool>(false, false, false)), true), select(!select(vec4<bool>(true, true, true, false), vec4<bool>(false, true, true, true), false), !select(vec4<bool>(true, false, true, true), vec4<bool>(true, true, false, false), vec4<bool>(true, false, false, true)), !select(vec4<bool>(true, true, false, false), vec4<bool>(false, true, true, false), false)), _wgslsmith_mod_i32(-36897i, u_input.d.x) < u_input.a));
            let var_6 = Struct_1(global0[_wgslsmith_index_u32(~(~u_input.c.x), 11u)], _wgslsmith_f_op_vec2_f32(_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_f_op_vec2_f32(abs(global2.b)))), _wgslsmith_f_op_vec2_f32(vec2<f32>(var_2.x, 185f) + _wgslsmith_f_op_vec2_f32(select(vec2<f32>(1049f, -1614f), global2.b, vec2<bool>(var_5, var_5))))) - global2.b));
            let var_7 = vec4<u32>(firstLeadingBit(u_input.c.x), ~abs(92141u), var_4.x, u_input.c.x) ^ ~(~vec4<u32>(min(0u, var_4.x), ~u_input.c.x, 43383u, ~13175u));
        }
        default: {
            global4 = array<Struct_1, 24>();
            switch (-20555i) {
                case 2147483647i: {
                    var_2 = _wgslsmith_f_op_vec2_f32(min(_wgslsmith_div_vec2_f32(global2.b, global2.b), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(global1[_wgslsmith_index_u32(28817u, 4u)], global2.a))), vec2<f32>(global1[_wgslsmith_index_u32(45871u, 4u)], global1[_wgslsmith_index_u32(1u, 4u)]), global2.a != global0[_wgslsmith_index_u32(44630u, 11u)]))) - _wgslsmith_div_vec2_f32(_wgslsmith_div_vec2_f32(vec2<f32>(var_2.x, global1[_wgslsmith_index_u32(u_input.c.x, 4u)]), _wgslsmith_f_op_vec2_f32(ceil(global2.b))), vec2<f32>(_wgslsmith_f_op_f32(f32(-1f) * -365f), 1f)))));
                    var var_4 = Struct_1(var_2.x, _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(floor(vec2<f32>(_wgslsmith_f_op_f32(max(var_2.x, global1[_wgslsmith_index_u32(4294967295u, 4u)])), _wgslsmith_f_op_f32(global1[_wgslsmith_index_u32(1u, 4u)] + -2237f))))));
                    let var_5 = true;
                }
                default: {
                    var var_4 = 1u;
                    var var_5 = global4[_wgslsmith_index_u32(u_input.c.x, 24u)];
                    let var_6 = countOneBits(2147483647i) & _wgslsmith_sub_i32(min(~u_input.d.x, firstTrailingBit(~u_input.d.x)), func_1(vec2<bool>(true, true)));
                    var_5 = global4[_wgslsmith_index_u32(29695u, 24u)];
                    global1 = array<f32, 4>();
                }
            }
            for (var var_4 = i32(-2147483648); var_4 >= -1i; ) {
                if (LOOP_COUNTERS[18u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
                var_4 = 1i;
                global1 = array<f32, 4>();
                var var_5 = 1u;
            }
        }
    }
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_mod_u32(90888u, reverseBits(~abs(u_input.c.x))), ~select(~(vec3<u32>(0u, 54790u, u_input.c.x) & vec3<u32>(u_input.c.x, u_input.c.x, u_input.c.x)), ~vec3<u32>(u_input.c.x, u_input.c.x, u_input.c.x) >> (countOneBits(vec3<u32>(u_input.c.x, 0u, u_input.c.x)) % vec3<u32>(32u)), true), -(-_wgslsmith_sub_vec3_i32(vec3<i32>(0i, u_input.e, u_input.e), vec3<i32>(9709i, 16894i, 4768i)) >> (firstTrailingBit(vec3<u32>(31631u, 4294967295u, 6055u)) % vec3<u32>(32u))), _wgslsmith_add_vec4_i32(vec4<i32>(u_input.d.x, -1i, _wgslsmith_mod_i32(~u_input.a, max(u_input.e, 4232i)), func_5()), vec4<i32>(15430i, ~0i, u_input.b, func_4(true, vec2<u32>(0u, u_input.c.x), 1i)) << (~select(vec4<u32>(14471u, u_input.c.x, u_input.c.x, 25725u), vec4<u32>(5672u, 1u, u_input.c.x, 1u), vec4<bool>(true, false, true, false)) % vec4<u32>(32u))));
}

`;