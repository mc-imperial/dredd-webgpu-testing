export const input = [220,143,168,43,94,8,133,152,155,195,55,75,254,48,198,212,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [220,143,168,43,94,8,133,152,155,195,55,75,254,48,198,212,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[220,143,168,43,94,8,133,152,155,195,55,75,254,48,198,212]}
// Seed: 11179178884997513954

struct Struct_1 {
    a: vec4<f32>,
    b: vec4<u32>,
    c: u32,
    d: vec3<bool>,
}

struct Struct_2 {
    a: Struct_1,
}

struct UniformBuffer {
    a: vec4<u32>,
}

struct StorageBuffer {
    a: i32,
    b: vec4<u32>,
    c: vec2<f32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: Struct_2;

var<private> global1: array<i32, 3>;

var<private> LOOP_COUNTERS: array<u32, 40>;

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn func_6(arg_0: f32, arg_1: vec2<i32>, arg_2: bool, arg_3: u32) -> vec3<bool> {
    if (!global0.a.d.x) {
        let var_0 = Struct_2(Struct_1(vec4<f32>(_wgslsmith_f_op_f32(f32(-1f) * -263f), _wgslsmith_f_op_f32(abs(global0.a.a.x)), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(arg_0, arg_0)), -887f), ~vec4<u32>(_wgslsmith_dot_vec4_u32(global0.a.b, global0.a.b), select(39840u, 4294967295u, true), global0.a.b.x, 4294967295u), u_input.a.x, vec3<bool>(any(!vec2<bool>(true, global0.a.d.x)), true, arg_2 || global0.a.d.x)));
        loop {
            if (LOOP_COUNTERS[0u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
            var var_1 = _wgslsmith_f_op_vec4_f32(min(global0.a.a, var_0.a.a));
        }
        var var_1 = Struct_1(global0.a.a, _wgslsmith_mult_vec4_u32(vec4<u32>(1u, _wgslsmith_sub_u32(~var_0.a.c, _wgslsmith_mult_u32(u_input.a.x, 23537u)), ~(~arg_3), global0.a.b.x), global0.a.b), max(1u, 1u), vec3<bool>(!any(select(vec3<bool>(var_0.a.d.x, false, false), global0.a.d, vec3<bool>(arg_2, true, true))), all(select(select(vec4<bool>(var_0.a.d.x, true, global0.a.d.x, var_0.a.d.x), vec4<bool>(global0.a.d.x, var_0.a.d.x, var_0.a.d.x, false), vec4<bool>(false, var_0.a.d.x, true, arg_2)), vec4<bool>(true, arg_2, false, false), !vec4<bool>(var_0.a.d.x, arg_2, true, global0.a.d.x))), true));
    }
    var var_0 = Struct_2(global0.a);
    for (var var_1 = 1i; ; var_1 -= 1i) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        var var_2 = Struct_2(Struct_1(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(-vec4<f32>(var_0.a.a.x, 411f, global0.a.a.x, 229f)), _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(step(vec4<f32>(-349f, -1358f, 334f, -399f), vec4<f32>(495f, arg_0, arg_0, global0.a.a.x))), global0.a.a), _wgslsmith_mod_u32(arg_3, 14985u) >= ~1u)), countOneBits(_wgslsmith_sub_vec4_u32(~global0.a.b, vec4<u32>(var_0.a.b.x, global0.a.c, 0u, 28035u))), 47874u, var_0.a.d));
        var_0 = Struct_2(var_0.a);
        let var_3 = _wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_div_vec3_f32(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1177f, var_0.a.a.x, 1140f)) * _wgslsmith_f_op_vec3_f32(vec3<f32>(global0.a.a.x, arg_0, var_2.a.a.x) - global0.a.a.xzz)), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-var_2.a.a.zww))), _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(var_0.a.a.zzw - vec3<f32>(-276f, var_2.a.a.x, var_0.a.a.x)))), _wgslsmith_f_op_vec3_f32(step(vec3<f32>(var_0.a.a.x, global0.a.a.x, var_2.a.a.x), vec3<f32>(var_2.a.a.x, 888f, 1000f)))))));
        var var_4 = var_2.a;
    }
    if (any(select(select(vec4<bool>(true, true, true, true), select(vec4<bool>(true, arg_2, false, false), !vec4<bool>(false, var_0.a.d.x, var_0.a.d.x, true), !vec4<bool>(false, arg_2, false, true)), !select(vec4<bool>(var_0.a.d.x, var_0.a.d.x, arg_2, true), vec4<bool>(false, arg_2, false, global0.a.d.x), true)), !(!(!vec4<bool>(global0.a.d.x, false, arg_2, false))), !(!global0.a.d.x) || (global1[_wgslsmith_index_u32(u_input.a.x, 3u)] != (global1[_wgslsmith_index_u32(58444u, 3u)] ^ i32(-2147483648)))))) {
        let var_1 = -_wgslsmith_add_vec4_i32(_wgslsmith_sub_vec4_i32(reverseBits(vec4<i32>(-8222i, -17508i, 1i, global1[_wgslsmith_index_u32(var_0.a.c, 3u)])), vec4<i32>(2147483647i, select(-1i, -57591i, arg_2), global1[_wgslsmith_index_u32(~0u, 3u)], global1[_wgslsmith_index_u32(_wgslsmith_dot_vec4_u32(var_0.a.b, vec4<u32>(u_input.a.x, 4294967295u, u_input.a.x, 70460u)), 3u)])), vec4<i32>(_wgslsmith_mod_i32(1i, 14419i), global1[_wgslsmith_index_u32(arg_3, 3u)], -global1[_wgslsmith_index_u32(1u, 3u)], global1[_wgslsmith_index_u32(_wgslsmith_dot_vec4_u32(vec4<u32>(28124u, 0u, global0.a.b.x, var_0.a.b.x), vec4<u32>(arg_3, 42944u, arg_3, 13223u)), 3u)]) >> (vec4<u32>(~0u, firstLeadingBit(1u), global0.a.b.x, global0.a.b.x) % vec4<u32>(32u)));
        global1 = array<i32, 3>();
    }
    let var_1 = (-10501i >> (u_input.a.x % 32u)) ^ global1[_wgslsmith_index_u32(firstLeadingBit(u_input.a.x), 3u)];
    return !(!global0.a.d);
}

fn func_5(arg_0: f32, arg_1: vec4<f32>, arg_2: vec3<bool>, arg_3: Struct_1) -> vec3<f32> {
    for (var var_0 = max(_wgslsmith_mult_i32(-36395i, 25835i), -61138i); var_0 == 0i; var_0 = i32(-2147483648)) {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        let var_1 = -1906f;
        let var_2 = arg_2;
    }
    global0 = Struct_2(global0.a);
    loop {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
    }
    let var_0 = Struct_2(Struct_1(vec4<f32>(arg_3.a.x, arg_1.x, _wgslsmith_f_op_f32(round(-1000f)), _wgslsmith_f_op_f32(arg_1.x + _wgslsmith_f_op_f32(sign(global0.a.a.x)))), ~_wgslsmith_sub_vec4_u32(_wgslsmith_sub_vec4_u32(arg_3.b, vec4<u32>(u_input.a.x, 44282u, global0.a.c, 15001u)), global0.a.b), min(71256u, ~4294967295u) ^ (_wgslsmith_dot_vec3_u32(vec3<u32>(1u, 40209u, 0u), vec3<u32>(38105u, global0.a.c, 0u)) & global0.a.c), arg_2));
    for (var var_1: i32; any(func_6(1f, vec2<i32>(-1i, _wgslsmith_dot_vec3_i32(firstTrailingBit(vec3<i32>(1i, -58804i, global1[_wgslsmith_index_u32(43477u, 3u)])), vec3<i32>(47381i, global1[_wgslsmith_index_u32(u_input.a.x, 3u)], 1i) & vec3<i32>(i32(-2147483648), 0i, i32(-2147483648)))), _wgslsmith_f_op_f32(arg_0 + 1176f) > var_0.a.a.x, select(~1u, 1u, arg_0 <= 588f) << (_wgslsmith_sub_u32(min(var_0.a.c, global0.a.c), abs(0u)) % 32u))); var_1 -= 1i) {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        for (var var_2 = 18162i; ; var_2 += 1i) {
            if (LOOP_COUNTERS[5u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
            let var_3 = select(-vec4<i32>(-1i, -1i, _wgslsmith_sub_i32(global1[_wgslsmith_index_u32(u_input.a.x, 3u)], global1[_wgslsmith_index_u32(u_input.a.x, 3u)]), ~global1[_wgslsmith_index_u32(var_0.a.c, 3u)]) ^ ~vec4<i32>(global1[_wgslsmith_index_u32(min(arg_3.c, u_input.a.x), 3u)], global1[_wgslsmith_index_u32(u_input.a.x << (17970u % 32u), 3u)], _wgslsmith_mod_i32(global1[_wgslsmith_index_u32(arg_3.c, 3u)], global1[_wgslsmith_index_u32(arg_3.c, 3u)]), -1i), ~vec4<i32>(firstLeadingBit(~global1[_wgslsmith_index_u32(0u, 3u)]), global1[_wgslsmith_index_u32(~0u, 3u)] << (abs(arg_3.b.x) % 32u), 15961i, firstTrailingBit(_wgslsmith_div_i32(-21821i, global1[_wgslsmith_index_u32(arg_3.c, 3u)]))), select(false, all(arg_2.xz), false));
            var var_4 = vec4<bool>(all(vec2<bool>(var_0.a.d.x, true)), reverseBits(firstTrailingBit(abs(-46012i))) == ~abs(global1[_wgslsmith_index_u32(0u, 3u)]), func_6(_wgslsmith_f_op_f32(-955f), _wgslsmith_mult_vec2_i32(_wgslsmith_div_vec2_i32(var_3.zy, vec2<i32>(i32(-2147483648), 1i)), ~vec2<i32>(0i, 14955i)), all(vec4<bool>(var_0.a.d.x, arg_2.x, true, true)), firstLeadingBit(abs(30735u))).x && !global0.a.d.x, !(1596f <= arg_1.x));
            var_4 = !(!vec4<bool>(true, arg_3.d.x, !(arg_3.b.x == 4294967295u), true));
            let var_5 = false;
            var_4 = vec4<bool>(var_5, any(select(arg_2, func_6(arg_1.x, vec2<i32>(var_3.x, 16216i), true, 0u), global0.a.d.x)) && !(global0.a.a.x > _wgslsmith_f_op_f32(abs(arg_1.x))), var_5, all(func_6(-203f, var_3.xx, false, ~(global0.a.b.x & 1u)).xz));
        }
        continue;
    }
    return vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(exp2(arg_0)) - _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1305f - var_0.a.a.x))))), arg_3.a.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(global0.a.a.x))) * arg_0)));
}

fn func_7(arg_0: vec4<f32>, arg_1: Struct_2, arg_2: vec3<f32>) -> Struct_2 {
    global0 = arg_1;
    global1 = array<i32, 3>();
    loop {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
    }
    global1 = array<i32, 3>();
    let var_0 = Struct_2(global0.a);
    return Struct_2(Struct_1(global0.a.a, _wgslsmith_div_vec4_u32(~_wgslsmith_mod_vec4_u32(vec4<u32>(var_0.a.b.x, 34170u, 1u, 0u), vec4<u32>(var_0.a.c, 4294967295u, 0u, var_0.a.c)), arg_1.a.b), min(_wgslsmith_clamp_u32(_wgslsmith_dot_vec4_u32(vec4<u32>(arg_1.a.b.x, arg_1.a.c, arg_1.a.c, 36844u), vec4<u32>(1u, var_0.a.b.x, 28140u, 5347u)), 1u, max(39705u, 12262u)), 1u), func_6(1000f, ~vec2<i32>(global1[_wgslsmith_index_u32(4294967295u, 3u)], -1i) >> (vec2<u32>(var_0.a.c, global0.a.b.x) % vec2<u32>(32u)), any(!vec4<bool>(global0.a.d.x, true, true, arg_1.a.d.x)), ~(~global0.a.b.x))));
}

fn func_8(arg_0: vec4<bool>, arg_1: Struct_2) -> vec4<f32> {
    let var_0 = Struct_2(Struct_1(_wgslsmith_f_op_vec4_f32(vec4<f32>(-1539f, func_7(arg_1.a.a, arg_1, global0.a.a.zzw).a.a.x, _wgslsmith_f_op_f32(-global0.a.a.x), _wgslsmith_f_op_f32(-arg_1.a.a.x)) - global0.a.a), _wgslsmith_add_vec4_u32(~(~u_input.a), ~abs(arg_1.a.b)), _wgslsmith_mod_u32(arg_1.a.c, _wgslsmith_add_u32(~4294967295u, arg_1.a.b.x)), !arg_1.a.d));
    let var_1 = Struct_2(Struct_1(_wgslsmith_f_op_vec4_f32(-arg_1.a.a), _wgslsmith_add_vec4_u32(arg_1.a.b, vec4<u32>(global0.a.c, arg_1.a.b.x << (global0.a.c % 32u), _wgslsmith_add_u32(u_input.a.x, u_input.a.x), _wgslsmith_sub_u32(4294967295u, 4294967295u))), select(arg_1.a.c, global0.a.c, false), var_0.a.d));
    let var_2 = var_1;
    let var_3 = vec4<i32>(~firstLeadingBit(_wgslsmith_mult_i32(global1[_wgslsmith_index_u32(min(arg_1.a.b.x, 1u), 3u)], -71354i)), _wgslsmith_sub_i32(28165i, global1[_wgslsmith_index_u32(~var_0.a.c, 3u)]) >> (arg_1.a.b.x % 32u), countOneBits(min(i32(-2147483648), firstLeadingBit(2147483647i))) << (var_0.a.c % 32u), _wgslsmith_dot_vec2_i32(abs(vec2<i32>(_wgslsmith_mult_i32(0i, -37711i), global1[_wgslsmith_index_u32(~1u, 3u)])), -(vec2<i32>(-1i) * -vec2<i32>(13355i, global1[_wgslsmith_index_u32(0u, 3u)]))));
    global1 = array<i32, 3>();
    return var_2.a.a;
}

fn func_4(arg_0: bool) -> i32 {
    global0 = Struct_2(global0.a);
    for (var var_0 = 27857i; false; var_0 = -(~(-7075i))) {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        var var_1 = global0.a;
        var var_2 = u_input.a;
    }
    for (; ; ) {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        loop {
            if (LOOP_COUNTERS[9u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        }
        let var_0 = vec4<u32>(~global0.a.b.x, abs(~(~(~11945u))), 56627u, _wgslsmith_clamp_u32(_wgslsmith_dot_vec4_u32(_wgslsmith_mult_vec4_u32(_wgslsmith_mult_vec4_u32(vec4<u32>(40745u, 0u, global0.a.c, 28491u), vec4<u32>(4294967295u, 26965u, 0u, 18758u)), vec4<u32>(global0.a.b.x, global0.a.b.x, 49832u, global0.a.b.x)), vec4<u32>(~17756u, reverseBits(u_input.a.x), 0u, _wgslsmith_sub_u32(global0.a.c, 29603u))), ~_wgslsmith_dot_vec2_u32(~u_input.a.xy, ~global0.a.b.yx), firstLeadingBit(4294967295u)));
        let var_1 = select(_wgslsmith_mult_i32(24115i, global1[_wgslsmith_index_u32(var_0.x, 3u)]), 0i, global0.a.d.x) > -4831i;
        let var_2 = var_0.wy;
        global0 = Struct_2(Struct_1(_wgslsmith_f_op_vec4_f32(func_8(vec4<bool>(all(vec4<bool>(true, true, true, false)), all(vec4<bool>(true, var_1, true, true)), false, false), func_7(_wgslsmith_f_op_vec4_f32(vec4<f32>(global0.a.a.x, 1000f, global0.a.a.x, global0.a.a.x) - vec4<f32>(2091f, global0.a.a.x, global0.a.a.x, global0.a.a.x)), Struct_2(global0.a), _wgslsmith_f_op_vec3_f32(func_5(1896f, vec4<f32>(global0.a.a.x, global0.a.a.x, global0.a.a.x, -607f), vec3<bool>(true, arg_0, false), global0.a))))), (reverseBits(u_input.a) ^ select(global0.a.b, vec4<u32>(global0.a.b.x, var_2.x, 4294967295u, u_input.a.x), vec4<bool>(arg_0, true, false, false))) >> (~global0.a.b % vec4<u32>(32u)), firstTrailingBit(95820u), global0.a.d));
    }
    var var_0 = select(!select(!(!vec4<bool>(arg_0, true, true, arg_0)), !(!vec4<bool>(global0.a.d.x, arg_0, global0.a.d.x, true)), true), select(vec4<bool>(arg_0, global0.a.d.x | all(vec3<bool>(true, false, false)), true, true), select(select(select(vec4<bool>(arg_0, global0.a.d.x, false, global0.a.d.x), vec4<bool>(arg_0, arg_0, arg_0, arg_0), vec4<bool>(arg_0, global0.a.d.x, global0.a.d.x, global0.a.d.x)), vec4<bool>(true, global0.a.d.x, true, global0.a.d.x), any(vec4<bool>(global0.a.d.x, false, true, global0.a.d.x))), select(!vec4<bool>(global0.a.d.x, arg_0, global0.a.d.x, global0.a.d.x), vec4<bool>(arg_0, false, arg_0, global0.a.d.x), select(vec4<bool>(arg_0, true, true, false), vec4<bool>(false, false, true, global0.a.d.x), false)), vec4<bool>(global0.a.d.x, true, true, global0.a.d.x)), !vec4<bool>(true, global0.a.d.x, arg_0, arg_0)), vec4<bool>(false, false, any(vec4<bool>(global0.a.d.x, true, global0.a.d.x, u_input.a.x <= global0.a.b.x)), arg_0));
    let var_1 = any(!(!(!select(vec4<bool>(var_0.x, true, var_0.x, global0.a.d.x), vec4<bool>(true, global0.a.d.x, true, arg_0), arg_0))));
    return ~countOneBits(_wgslsmith_div_i32(global1[_wgslsmith_index_u32(firstLeadingBit(0u), 3u)], -1i)) << (0u % 32u);
}

fn func_3(arg_0: Struct_2, arg_1: Struct_1, arg_2: Struct_1) -> vec3<bool> {
    for (var var_0 = select(-(~select(global1[_wgslsmith_index_u32(arg_0.a.b.x, 3u)], -1i, 1i < global1[_wgslsmith_index_u32(arg_2.b.x, 3u)])), ~(~func_4(true)), all(select(vec4<bool>(!arg_1.d.x, any(arg_1.d.xy), 4294967295u > u_input.a.x, true), vec4<bool>(true, false, true, false | arg_1.d.x), !select(vec4<bool>(arg_2.d.x, true, false, true), vec4<bool>(arg_1.d.x, false, arg_2.d.x, false), vec4<bool>(true, arg_2.d.x, false, arg_2.d.x))))); false; var_0 -= 1i) {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        switch (abs(-51615i)) {
            case i32(-2147483648): {
                continue;
            }
            default: {
                break;
            }
        }
        let var_1 = global0.a.a.x;
        global0 = arg_0;
        let var_2 = Struct_2(func_7(_wgslsmith_f_op_vec4_f32(-arg_2.a), arg_0, _wgslsmith_f_op_vec3_f32(trunc(arg_0.a.a.xxw))).a);
        switch (global1[_wgslsmith_index_u32(4294967295u, 3u)]) {
            case 1i: {
                var var_3 = _wgslsmith_mod_vec2_u32(~(~u_input.a.zy << ((_wgslsmith_mod_vec2_u32(vec2<u32>(0u, arg_0.a.c), vec2<u32>(global0.a.c, 21340u)) | vec2<u32>(0u, u_input.a.x)) % vec2<u32>(32u))), _wgslsmith_add_vec2_u32(max(u_input.a.xw, max(u_input.a.wy & vec2<u32>(0u, arg_0.a.c), firstLeadingBit(arg_1.b.zz))), max(~min(vec2<u32>(global0.a.b.x, 0u), global0.a.b.yz), select(~global0.a.b.yy, var_2.a.b.wy, global0.a.d.x))));
                global0 = var_2;
            }
            case 13282i: {
                var_0 = ~max(-1i, -1i);
            }
            default: {
                var var_3 = _wgslsmith_sub_i32(select(0i, _wgslsmith_mult_i32(_wgslsmith_sub_i32(-49441i, -global1[_wgslsmith_index_u32(global0.a.c, 3u)]), global1[_wgslsmith_index_u32(~25591u, 3u)] & 1i), select(~global1[_wgslsmith_index_u32(1u, 3u)], 0i, !arg_1.d.x) > reverseBits(reverseBits(36670i))), global1[_wgslsmith_index_u32(~(~1u) | firstTrailingBit(~24359u), 3u)]);
                continue;
            }
        }
    }
    var var_0 = arg_2;
    let var_1 = ~abs(_wgslsmith_sub_vec2_i32(firstTrailingBit(~vec2<i32>(global1[_wgslsmith_index_u32(5472u, 3u)], -78545i)), vec2<i32>(-global1[_wgslsmith_index_u32(48103u, 3u)], global1[_wgslsmith_index_u32(_wgslsmith_clamp_u32(arg_0.a.c, 13291u, u_input.a.x), 3u)])));
    global1 = array<i32, 3>();
    var var_2 = ~vec3<u32>(1u, max(1u, ~(92697u ^ arg_0.a.b.x)), ~arg_1.b.x);
    return select(func_7(_wgslsmith_div_vec4_f32(vec4<f32>(arg_0.a.a.x, -197f, var_0.a.x, arg_0.a.a.x), arg_0.a.a), Struct_2(arg_2), _wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(var_0.a.x, 1595f, var_0.a.x) * arg_1.a.zzw))))).a.d, !global0.a.d, func_7(_wgslsmith_f_op_vec4_f32(arg_0.a.a * vec4<f32>(_wgslsmith_f_op_f32(round(arg_0.a.a.x)), _wgslsmith_f_op_f32(-1295f), _wgslsmith_f_op_f32(-562f), _wgslsmith_f_op_f32(-212f))), Struct_2(Struct_1(var_0.a, vec4<u32>(22610u, arg_0.a.b.x, 0u, 1u), _wgslsmith_add_u32(0u, global0.a.b.x), select(vec3<bool>(arg_0.a.d.x, false, true), var_0.d, true))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(arg_0.a.a.xxz + vec3<f32>(1491f, 1000f, global0.a.a.x)) + vec3<f32>(_wgslsmith_f_op_f32(-1121f * -340f), _wgslsmith_f_op_f32(-563f - -1000f), _wgslsmith_f_op_f32(global0.a.a.x * arg_2.a.x)))).a.d);
}

fn func_2(arg_0: Struct_1, arg_1: Struct_1) -> Struct_1 {
    let var_0 = _wgslsmith_mod_vec4_u32(max(global0.a.b, min(~u_input.a, vec4<u32>(1u, firstLeadingBit(29441u), ~1u, 91422u))), _wgslsmith_mult_vec4_u32(~(~_wgslsmith_add_vec4_u32(arg_1.b, arg_1.b)), vec4<u32>(countOneBits(_wgslsmith_dot_vec4_u32(vec4<u32>(4294967295u, arg_1.b.x, arg_0.c, 1u), arg_0.b)), global0.a.b.x, 1u, reverseBits(~arg_0.b.x))));
    loop {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        var var_1 = global0.a.b;
        loop {
            if (LOOP_COUNTERS[12u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
            break;
        }
        let var_2 = arg_0.a.wx;
        global0 = Struct_2(Struct_1(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(arg_1.a * global0.a.a)), vec4<u32>(var_0.x, global0.a.c << (76427u % 32u), arg_0.c, _wgslsmith_mod_u32(48051u, var_1.x)) ^ _wgslsmith_sub_vec4_u32(~vec4<u32>(arg_1.c, arg_1.b.x, 4294967295u, arg_1.b.x), vec4<u32>(32348u, 36043u, 0u, arg_0.c)), (u_input.a.x >> (~u_input.a.x % 32u)) << (_wgslsmith_add_u32(arg_0.b.x, arg_0.c) % 32u), !func_3(Struct_2(Struct_1(arg_1.a, vec4<u32>(0u, arg_0.b.x, arg_1.c, 0u), arg_0.b.x, vec3<bool>(arg_1.d.x, global0.a.d.x, global0.a.d.x))), Struct_1(vec4<f32>(arg_0.a.x, arg_1.a.x, global0.a.a.x, arg_0.a.x), global0.a.b, var_1.x, arg_1.d), Struct_1(arg_0.a, vec4<u32>(43665u, var_1.x, u_input.a.x, 0u), arg_1.c, global0.a.d))));
    }
    for (var var_1 = min(global1[_wgslsmith_index_u32(arg_0.c, 3u)], global1[_wgslsmith_index_u32(1u, 3u)]); !(!(!(~var_0.x >= 1u))); ) {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        break;
    }
    for (var var_1 = -69472i; var_1 <= -22114i; ) {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        let var_2 = !func_3(Struct_2(Struct_1(vec4<f32>(758f, -867f, -284f, arg_0.a.x), ~vec4<u32>(u_input.a.x, 100050u, 66827u, 2888u), 22047u, global0.a.d)), global0.a, func_7(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(select(vec4<f32>(-500f, -1197f, arg_1.a.x, -585f), vec4<f32>(-471f, arg_1.a.x, -480f, 1475f), vec4<bool>(false, arg_1.d.x, true, arg_1.d.x)))), func_7(vec4<f32>(1103f, arg_1.a.x, arg_0.a.x, 1592f), Struct_2(arg_0), _wgslsmith_f_op_vec3_f32(-vec3<f32>(-131f, arg_0.a.x, arg_0.a.x))), _wgslsmith_f_op_vec4_f32(func_8(!vec4<bool>(arg_0.d.x, global0.a.d.x, false, false), func_7(arg_1.a, Struct_2(arg_1), vec3<f32>(arg_1.a.x, global0.a.a.x, arg_1.a.x)))).xyz).a);
        for (var var_3 = 2147483647i; true; var_3 = -17750i) {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            var var_4 = ~var_0.xzw;
            break;
        }
        continue;
    }
    let var_1 = false;
    return func_7(vec4<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(arg_0.a.x + 1000f), 614f)), 444f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(arg_1.a.x, arg_1.a.x)))), arg_1.a.x, _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(975f - arg_0.a.x))))), Struct_2(func_7(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(max(vec4<f32>(global0.a.a.x, 169f, arg_1.a.x, arg_0.a.x), vec4<f32>(global0.a.a.x, arg_0.a.x, 541f, global0.a.a.x)))), func_7(global0.a.a, Struct_2(Struct_1(global0.a.a, global0.a.b, 0u, global0.a.d)), vec3<f32>(arg_1.a.x, -873f, arg_1.a.x)), _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(global0.a.a.x, arg_0.a.x, -1000f)), arg_1.a.yzz)).a), _wgslsmith_f_op_vec3_f32(-arg_0.a.xyy)).a;
}

fn func_9(arg_0: Struct_2, arg_1: Struct_2) -> Struct_2 {
    for (var var_0 = -41165i; var_0 <= 2147483647i; global0 = Struct_2(Struct_1(_wgslsmith_f_op_vec4_f32(vec4<f32>(arg_0.a.a.x, _wgslsmith_f_op_f32(trunc(arg_0.a.a.x)), _wgslsmith_f_op_f32(arg_1.a.a.x + arg_1.a.a.x), _wgslsmith_f_op_f32(-arg_1.a.a.x)) + arg_0.a.a), abs(~arg_0.a.b) | min(abs(arg_0.a.b), _wgslsmith_mod_vec4_u32(u_input.a, vec4<u32>(6573u, arg_1.a.b.x, 6606u, 4294967295u))), arg_1.a.b.x, vec3<bool>(any(!vec4<bool>(arg_1.a.d.x, false, arg_1.a.d.x, global0.a.d.x)), !global0.a.d.x, false)))) {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        for (var var_1: i32; var_1 > 17339i; ) {
            if (LOOP_COUNTERS[17u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
            let var_2 = _wgslsmith_sub_vec4_u32(vec4<u32>(4294967295u, 24464u, 45924u, ~(10933u << (max(u_input.a.x, arg_0.a.b.x) % 32u))), arg_1.a.b);
            global1 = array<i32, 3>();
            var var_3 = -1i;
            var_1 = 59981i;
        }
        continue;
    }
    global0 = func_7(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-global0.a.a) + func_2(arg_0.a, Struct_1(arg_1.a.a, ~arg_0.a.b, arg_0.a.b.x | 1u, !vec3<bool>(arg_0.a.d.x, false, true))).a), arg_0, _wgslsmith_div_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(trunc(516f)), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-473f - arg_0.a.a.x), global0.a.a.x, false)), -540f), arg_1.a.a.xxx));
    loop {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
    }
    switch (-28515i) {
        case 38163i: {
            for (; !arg_0.a.d.x; ) {
                if (LOOP_COUNTERS[19u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
                global1 = array<i32, 3>();
                global1 = array<i32, 3>();
                global1 = array<i32, 3>();
                var var_0 = arg_1.a.a.x;
                var var_1 = arg_1.a.d.x;
            }
            let var_0 = Struct_2(global0.a);
            loop {
                if (LOOP_COUNTERS[20u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
                global1 = array<i32, 3>();
                break;
            }
        }
        case 52859i: {
            for (; _wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-404f * -1052f)), _wgslsmith_f_op_f32(-func_7(arg_0.a.a, Struct_2(arg_1.a), arg_1.a.a.xyz).a.a.x)) + _wgslsmith_f_op_f32(arg_1.a.a.x + 1023f)) != _wgslsmith_f_op_f32(round(arg_0.a.a.x)); ) {
                if (LOOP_COUNTERS[21u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
            }
            global1 = array<i32, 3>();
            var var_0 = Struct_1(vec4<f32>(738f, _wgslsmith_f_op_f32(-1112f), _wgslsmith_div_f32(global0.a.a.x, -199f), 131f), (~vec4<u32>(4294967295u, 74134u, arg_1.a.c, global0.a.b.x) | select(~vec4<u32>(29821u, 9498u, global0.a.c, 49869u), ~vec4<u32>(arg_1.a.c, 0u, 90027u, 0u), false)) << (vec4<u32>(firstLeadingBit(arg_0.a.c) & min(23765u, global0.a.c), ~1u & ~u_input.a.x, 4294967295u, _wgslsmith_mult_u32(_wgslsmith_mod_u32(4294967295u, arg_1.a.c), ~13100u)) % vec4<u32>(32u)), 0u, func_6(_wgslsmith_f_op_f32(-arg_0.a.a.x), _wgslsmith_sub_vec2_i32(vec2<i32>(global1[_wgslsmith_index_u32(arg_0.a.c | arg_0.a.c, 3u)], -global1[_wgslsmith_index_u32(4294967295u, 3u)]), _wgslsmith_sub_vec2_i32(_wgslsmith_add_vec2_i32(vec2<i32>(global1[_wgslsmith_index_u32(u_input.a.x, 3u)], -1i), vec2<i32>(-1i, 2147483647i)), -vec2<i32>(global1[_wgslsmith_index_u32(19562u, 3u)], -11995i))), arg_0.a.d.x, countOneBits(global0.a.b.x)));
        }
        default: {
            let var_0 = arg_1;
            for (var var_1 = 1i; ; var_1 -= 1i) {
                if (LOOP_COUNTERS[22u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
                global0 = arg_1;
                var var_2 = func_7(vec4<f32>(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(978f * -1000f)))), global0.a.a.x, -554f, _wgslsmith_f_op_f32(exp2(arg_1.a.a.x))), Struct_2(global0.a), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(min(func_7(_wgslsmith_f_op_vec4_f32(vec4<f32>(986f, -507f, 970f, -305f) * vec4<f32>(arg_0.a.a.x, arg_1.a.a.x, var_0.a.a.x, -649f)), func_7(arg_1.a.a, var_0, vec3<f32>(global0.a.a.x, -785f, 1905f)), _wgslsmith_f_op_vec3_f32(-vec3<f32>(var_0.a.a.x, arg_1.a.a.x, 177f))).a.a.yxz, _wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(exp2(global0.a.a.xwx)))))))).a;
                let var_3 = arg_0;
                let var_4 = var_0;
            }
            loop {
                if (LOOP_COUNTERS[23u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
                var var_1 = func_7(_wgslsmith_f_op_vec4_f32(exp2(arg_1.a.a)), var_0, _wgslsmith_f_op_vec3_f32(-vec3<f32>(650f, _wgslsmith_f_op_f32(-var_0.a.a.x), _wgslsmith_f_op_f32(min(_wgslsmith_div_f32(-1158f, -129f), _wgslsmith_f_op_f32(var_0.a.a.x - -118f)))))).a.a.yyy;
                let var_2 = global0.a;
                break;
            }
            switch (_wgslsmith_dot_vec3_i32(vec3<i32>(global1[_wgslsmith_index_u32(abs(~var_0.a.c), 3u)], firstTrailingBit(~global1[_wgslsmith_index_u32(25300u, 3u)]), -global1[_wgslsmith_index_u32(_wgslsmith_add_u32(78668u, 1528u), 3u)]) | vec3<i32>(_wgslsmith_clamp_i32(abs(2147483647i), 1i, -global1[_wgslsmith_index_u32(u_input.a.x, 3u)]), _wgslsmith_add_i32(727i & global1[_wgslsmith_index_u32(38139u, 3u)], global1[_wgslsmith_index_u32(5420u, 3u)]), select(global1[_wgslsmith_index_u32(~arg_1.a.b.x, 3u)], 23716i, any(vec2<bool>(arg_1.a.d.x, arg_1.a.d.x)))), _wgslsmith_clamp_vec3_i32(vec3<i32>(min(21403i, 41724i), ~global1[_wgslsmith_index_u32(_wgslsmith_sub_u32(var_0.a.b.x, var_0.a.c), 3u)], -(~global1[_wgslsmith_index_u32(global0.a.c, 3u)])), firstLeadingBit(_wgslsmith_div_vec3_i32(vec3<i32>(2172i, global1[_wgslsmith_index_u32(4294967295u, 3u)], global1[_wgslsmith_index_u32(arg_0.a.c, 3u)]), vec3<i32>(8706i, global1[_wgslsmith_index_u32(arg_1.a.b.x, 3u)], global1[_wgslsmith_index_u32(3438u, 3u)])) ^ vec3<i32>(global1[_wgslsmith_index_u32(46624u, 3u)], global1[_wgslsmith_index_u32(u_input.a.x, 3u)], 2147483647i)), min(~(~vec3<i32>(global1[_wgslsmith_index_u32(var_0.a.b.x, 3u)], i32(-2147483648), 129878i)), ~(vec3<i32>(0i, global1[_wgslsmith_index_u32(global0.a.b.x, 3u)], global1[_wgslsmith_index_u32(global0.a.c, 3u)]) << (var_0.a.b.zwz % vec3<u32>(32u))))))) {
                default: {
                    var var_1 = arg_1.a;
                }
            }
            if (true) {
                let var_1 = Struct_2(func_7(_wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-arg_1.a.a)), arg_1.a.a)), func_7(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-var_0.a.a) * arg_0.a.a), arg_0, _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(arg_1.a.a.wyx - global0.a.a.xyz))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(902f, -639f, 470f) * var_0.a.a.wyz)))).a);
            }
        }
    }
    var var_0 = _wgslsmith_add_vec4_u32(arg_0.a.b, vec4<u32>(~(~(~0u)), _wgslsmith_div_u32(firstTrailingBit(6074u) << (_wgslsmith_dot_vec2_u32(vec2<u32>(1u, 7148u), vec2<u32>(0u, 0u)) % 32u), arg_0.a.c), u_input.a.x, u_input.a.x));
    return Struct_2(Struct_1(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(global0.a.a.x, 325f, arg_1.a.a.x, global0.a.a.x) - vec4<f32>(global0.a.a.x, arg_0.a.a.x, global0.a.a.x, 1333f))) * _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(1358f, arg_1.a.a.x, global0.a.a.x, arg_1.a.a.x)))), vec4<u32>(arg_1.a.c, 62092u, ~0u, abs(_wgslsmith_div_u32(arg_1.a.c, 28494u))), firstLeadingBit(82190u), vec3<bool>(arg_0.a.d.x, arg_1.a.d.x, global0.a.d.x)));
}

fn func_1() -> bool {
    for (var var_0 = -11964i; global0.a.d.x; var_0 += 1i) {
        if (LOOP_COUNTERS[24u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
        for (var var_1: i32; false; global1 = array<i32, 3>()) {
            if (LOOP_COUNTERS[25u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
            break;
        }
        var var_1 = func_9(Struct_2(global0.a), Struct_2(func_2(Struct_1(_wgslsmith_f_op_vec4_f32(max(vec4<f32>(global0.a.a.x, global0.a.a.x, global0.a.a.x, global0.a.a.x), vec4<f32>(global0.a.a.x, global0.a.a.x, -1424f, -245f))), firstTrailingBit(vec4<u32>(global0.a.b.x, global0.a.b.x, 4294967295u, 30956u)), 1u, select(vec3<bool>(global0.a.d.x, false, global0.a.d.x), global0.a.d, global0.a.d)), global0.a)));
        var var_2 = func_9(func_9(func_9(func_7(_wgslsmith_f_op_vec4_f32(-var_1.a.a), Struct_2(global0.a), _wgslsmith_f_op_vec3_f32(var_1.a.a.yzw * var_1.a.a.xyz)), func_7(_wgslsmith_f_op_vec4_f32(floor(var_1.a.a)), func_9(Struct_2(Struct_1(global0.a.a, global0.a.b, 0u, global0.a.d)), Struct_2(Struct_1(vec4<f32>(var_1.a.a.x, global0.a.a.x, var_1.a.a.x, global0.a.a.x), vec4<u32>(global0.a.b.x, 1u, u_input.a.x, u_input.a.x), 1u, vec3<bool>(global0.a.d.x, true, var_1.a.d.x)))), global0.a.a.yzy)), Struct_2(var_1.a)), Struct_2(var_1.a));
        var_2 = func_7(vec4<f32>(2327f, _wgslsmith_f_op_vec3_f32(func_5(var_2.a.a.x, vec4<f32>(-328f, _wgslsmith_f_op_f32(291f * var_2.a.a.x), _wgslsmith_f_op_f32(-1160f * global0.a.a.x), -1077f), !var_1.a.d, global0.a)).x, _wgslsmith_f_op_f32(global0.a.a.x + 243f), var_1.a.a.x), func_9(func_7(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(select(var_1.a.a, var_1.a.a, false)) - _wgslsmith_f_op_vec4_f32(-vec4<f32>(160f, 752f, var_2.a.a.x, -249f))), func_7(_wgslsmith_f_op_vec4_f32(vec4<f32>(var_2.a.a.x, var_2.a.a.x, global0.a.a.x, 1562f) * vec4<f32>(var_1.a.a.x, var_1.a.a.x, var_1.a.a.x, 511f)), Struct_2(Struct_1(vec4<f32>(global0.a.a.x, -2202f, var_2.a.a.x, 1181f), vec4<u32>(var_1.a.c, var_1.a.b.x, 0u, var_2.a.c), var_2.a.b.x, vec3<bool>(var_1.a.d.x, false, global0.a.d.x))), _wgslsmith_div_vec3_f32(var_2.a.a.xzw, global0.a.a.xxw)), vec3<f32>(_wgslsmith_f_op_f32(1779f - var_1.a.a.x), func_7(vec4<f32>(var_1.a.a.x, var_1.a.a.x, -1391f, -786f), Struct_2(Struct_1(var_2.a.a, var_2.a.b, 73475u, var_2.a.d)), vec3<f32>(global0.a.a.x, 271f, global0.a.a.x)).a.a.x, _wgslsmith_f_op_f32(1085f + var_1.a.a.x))), func_7(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(vec4<f32>(973f, 396f, global0.a.a.x, -1437f) + vec4<f32>(1479f, -1005f, 1071f, -212f)), global0.a.a, !vec4<bool>(global0.a.d.x, var_2.a.d.x, var_2.a.d.x, var_2.a.d.x))), func_7(_wgslsmith_f_op_vec4_f32(-var_1.a.a), Struct_2(var_1.a), func_9(Struct_2(global0.a), Struct_2(global0.a)).a.a.wzx), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(147f, var_1.a.a.x, global0.a.a.x) + var_2.a.a.www)))), var_2.a.a.wwy);
    }
    global1 = array<i32, 3>();
    switch (i32(-1i) * -(~firstLeadingBit(~global1[_wgslsmith_index_u32(9188u, 3u)]))) {
        case 1i: {
            let var_0 = func_9(Struct_2(Struct_1(_wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(sign(vec4<f32>(-1076f, global0.a.a.x, -754f, global0.a.a.x))))), select(global0.a.b, ~vec4<u32>(global0.a.b.x, global0.a.c, u_input.a.x, 0u), select(false, false, global0.a.d.x)), 4294967295u, func_2(global0.a, func_7(vec4<f32>(262f, 1048f, global0.a.a.x, 416f), Struct_2(Struct_1(global0.a.a, global0.a.b, 4294967295u, vec3<bool>(global0.a.d.x, false, global0.a.d.x))), global0.a.a.yzx).a).d)), Struct_2(Struct_1(vec4<f32>(_wgslsmith_f_op_f32(f32(-1f) * -588f), _wgslsmith_f_op_f32(479f + global0.a.a.x), _wgslsmith_f_op_f32(floor(global0.a.a.x)), _wgslsmith_f_op_f32(-149f)), ~select(u_input.a, global0.a.b, vec4<bool>(global0.a.d.x, true, global0.a.d.x, global0.a.d.x)), _wgslsmith_mult_u32(func_2(Struct_1(vec4<f32>(global0.a.a.x, 699f, 101f, 561f), vec4<u32>(u_input.a.x, global0.a.c, 4294967295u, 67893u), u_input.a.x, vec3<bool>(global0.a.d.x, false, global0.a.d.x)), Struct_1(global0.a.a, vec4<u32>(u_input.a.x, 149018u, 47411u, global0.a.c), u_input.a.x, global0.a.d)).b.x, _wgslsmith_dot_vec2_u32(vec2<u32>(u_input.a.x, global0.a.c), vec2<u32>(29792u, 0u))), select(global0.a.d, vec3<bool>(global0.a.d.x, false, true), global0.a.d.x))));
            loop {
                if (LOOP_COUNTERS[26u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
                break;
            }
            for (var var_1 = countOneBits(max(global1[_wgslsmith_index_u32(1u, 3u)], 6254i)); var_1 == 8746i; ) {
                if (LOOP_COUNTERS[27u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[27u] = LOOP_COUNTERS[27u] + 1u;
            }
            switch (global1[_wgslsmith_index_u32(~min(_wgslsmith_dot_vec2_u32(vec2<u32>(4294967295u, _wgslsmith_add_u32(5989u, var_0.a.c)), ~(vec2<u32>(global0.a.c, 1u) | var_0.a.b.yy)), _wgslsmith_div_u32(44269u, u_input.a.x)), 3u)]) {
                case 21984i: {
                    var var_1 = func_9(Struct_2(var_0.a), func_9(Struct_2(func_7(_wgslsmith_f_op_vec4_f32(vec4<f32>(var_0.a.a.x, -1314f, -1644f, global0.a.a.x) - vec4<f32>(417f, 1112f, -645f, -464f)), var_0, _wgslsmith_f_op_vec3_f32(-global0.a.a.zxy)).a), var_0));
                    global0 = Struct_2(func_7(_wgslsmith_f_op_vec4_f32(-func_7(_wgslsmith_f_op_vec4_f32(func_8(vec4<bool>(var_1.a.d.x, true, true, true), Struct_2(global0.a))), func_7(var_0.a.a, Struct_2(Struct_1(vec4<f32>(var_1.a.a.x, var_0.a.a.x, global0.a.a.x, var_1.a.a.x), u_input.a, 0u, global0.a.d)), var_0.a.a.wzy), _wgslsmith_f_op_vec3_f32(vec3<f32>(var_1.a.a.x, global0.a.a.x, -849f) * vec3<f32>(global0.a.a.x, 523f, -150f))).a.a), func_7(_wgslsmith_f_op_vec4_f32(step(vec4<f32>(var_1.a.a.x, -471f, var_1.a.a.x, var_1.a.a.x), _wgslsmith_f_op_vec4_f32(-global0.a.a))), func_9(var_0, Struct_2(global0.a)), _wgslsmith_f_op_vec3_f32(-func_9(Struct_2(global0.a), Struct_2(var_0.a)).a.a.zwy)), global0.a.a.zyy).a);
                }
                case -26676i: {
                    let var_1 = global0.a;
                    global1 = array<i32, 3>();
                }
                case 12722i: {
                }
                case -22688i: {
                    global1 = array<i32, 3>();
                    global1 = array<i32, 3>();
                }
                default: {
                    var var_1 = 0u;
                }
            }
            for (var var_1: i32; func_3(Struct_2(Struct_1(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(round(global0.a.a))), ~(~global0.a.b), 1u, func_6(_wgslsmith_f_op_f32(f32(-1f) * -1000f), max(vec2<i32>(16953i, global1[_wgslsmith_index_u32(1u, 3u)]), vec2<i32>(i32(-2147483648), 58549i)), var_0.a.d.x, func_9(Struct_2(Struct_1(vec4<f32>(-800f, -253f, global0.a.a.x, global0.a.a.x), global0.a.b, 21557u, global0.a.d)), var_0).a.b.x))), Struct_1(global0.a.a, vec4<u32>(_wgslsmith_dot_vec4_u32(u_input.a, ~vec4<u32>(31102u, 67668u, u_input.a.x, 64491u)), firstTrailingBit(var_0.a.c) ^ max(var_0.a.b.x, 1u), var_0.a.b.x, u_input.a.x), u_input.a.x, vec3<bool>(!(global0.a.d.x || false), true, true)), global0.a).x; var_1 += 1i) {
                if (LOOP_COUNTERS[28u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[28u] = LOOP_COUNTERS[28u] + 1u;
                break;
            }
        }
        case 2147483647i: {
            if (true) {
                global0 = Struct_2(global0.a);
            }
            loop {
                if (LOOP_COUNTERS[29u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[29u] = LOOP_COUNTERS[29u] + 1u;
                var var_0 = vec4<i32>(global1[_wgslsmith_index_u32(_wgslsmith_div_u32(func_2(Struct_1(_wgslsmith_f_op_vec4_f32(vec4<f32>(global0.a.a.x, -932f, -361f, 766f) * global0.a.a), global0.a.b, u_input.a.x ^ 37311u, vec3<bool>(global0.a.d.x, true, false)), Struct_1(vec4<f32>(791f, -1916f, global0.a.a.x, -806f), max(vec4<u32>(global0.a.c, global0.a.c, 103821u, global0.a.c), global0.a.b), global0.a.c, !global0.a.d)).c, 1u), 3u)], ~11895i, global1[_wgslsmith_index_u32(_wgslsmith_add_u32(~select(4294967295u, 87453u, global0.a.d.x) << ((54072u ^ u_input.a.x) % 32u), min(u_input.a.x, 0u)), 3u)], reverseBits(global1[_wgslsmith_index_u32(global0.a.c, 3u)]));
                continue;
            }
            var var_0 = global0.a.d;
        }
        case 13961i: {
            global1 = array<i32, 3>();
            switch (global1[_wgslsmith_index_u32(2008u ^ min(~_wgslsmith_dot_vec3_u32(vec3<u32>(19286u, global0.a.b.x, 1u), vec3<u32>(global0.a.b.x, u_input.a.x, 26483u)), global0.a.c >> (51550u % 32u)), 3u)]) {
                case i32(-2147483648): {
                    let var_0 = func_7(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(global0.a.a * vec4<f32>(_wgslsmith_f_op_f32(floor(-2044f)), _wgslsmith_f_op_f32(-global0.a.a.x), _wgslsmith_f_op_f32(-1066f), _wgslsmith_f_op_f32(sign(global0.a.a.x))))), func_7(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(1022f, -1194f, global0.a.a.x, -1209f) * global0.a.a) - global0.a.a), func_7(global0.a.a, Struct_2(global0.a), _wgslsmith_f_op_vec3_f32(-vec3<f32>(global0.a.a.x, -581f, global0.a.a.x))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(round(vec3<f32>(global0.a.a.x, -2397f, global0.a.a.x))))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-182f, -814f, global0.a.a.x))))));
                }
                case -42483i: {
                    var var_0 = func_7(vec4<f32>(_wgslsmith_f_op_f32(step(func_7(_wgslsmith_f_op_vec4_f32(global0.a.a - vec4<f32>(global0.a.a.x, 263f, -366f, -221f)), Struct_2(global0.a), vec3<f32>(-311f, -151f, -3053f)).a.a.x, -1889f)), _wgslsmith_f_op_f32(-func_7(vec4<f32>(global0.a.a.x, -1416f, global0.a.a.x, 1000f), func_9(Struct_2(Struct_1(global0.a.a, vec4<u32>(94597u, 48489u, 32710u, 0u), global0.a.c, vec3<bool>(false, global0.a.d.x, true))), Struct_2(global0.a)), global0.a.a.xxx).a.a.x), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-563f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(817f - -417f), _wgslsmith_f_op_f32(-1008f * 1602f), all(global0.a.d))))), func_7(global0.a.a, Struct_2(global0.a), _wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(583f, global0.a.a.x, 2108f) - vec3<f32>(global0.a.a.x, 188f, global0.a.a.x)))))), _wgslsmith_f_op_vec3_f32(global0.a.a.wzx * _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(global0.a.a.x, global0.a.a.x, global0.a.a.x)) + _wgslsmith_f_op_vec3_f32(round(vec3<f32>(137f, -1240f, -177f)))))));
                    var var_1 = u_input.a;
                    let var_2 = Struct_2(var_0.a);
                    let var_3 = ~_wgslsmith_add_i32(-(func_4(true) | 0i), ~_wgslsmith_div_i32(global1[_wgslsmith_index_u32(1u, 3u)], global1[_wgslsmith_index_u32(global0.a.c, 3u)]) & 43309i);
                    var_0 = func_7(var_0.a.a, func_7(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(vec4<f32>(global0.a.a.x, -1000f, var_0.a.a.x, var_2.a.a.x), vec4<f32>(global0.a.a.x, -666f, var_2.a.a.x, -677f)) + func_2(global0.a, Struct_1(vec4<f32>(var_0.a.a.x, var_0.a.a.x, 759f, global0.a.a.x), vec4<u32>(global0.a.c, var_1.x, global0.a.c, 121665u), var_2.a.c, global0.a.d)).a), func_7(_wgslsmith_f_op_vec4_f32(exp2(global0.a.a)), func_9(var_2, Struct_2(var_2.a)), vec3<f32>(global0.a.a.x, var_0.a.a.x, -1543f)).a.a, select(vec4<bool>(global0.a.d.x, false, global0.a.d.x, false), !vec4<bool>(false, true, false, global0.a.d.x), false))), Struct_2(func_9(var_2, Struct_2(var_0.a)).a), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(-global0.a.a.yyy), var_2.a.a.zxz)))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(-297f, var_0.a.a.x, var_2.a.a.x) - vec3<f32>(-198f, var_2.a.a.x, -1000f))), _wgslsmith_f_op_vec3_f32(-vec3<f32>(-1462f, global0.a.a.x, var_2.a.a.x)))) - vec3<f32>(func_9(func_7(vec4<f32>(var_0.a.a.x, 1151f, var_2.a.a.x, var_2.a.a.x), var_2, var_2.a.a.yyx), var_2).a.a.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(global0.a.a.x)) * _wgslsmith_f_op_f32(var_0.a.a.x * var_0.a.a.x)), _wgslsmith_f_op_f32(select(var_2.a.a.x, _wgslsmith_f_op_f32(1427f * var_0.a.a.x), true)))));
                }
                default: {
                }
            }
        }
        case -1i: {
            switch (-1i) {
                default: {
                }
            }
            global0 = func_9(Struct_2(Struct_1(vec4<f32>(global0.a.a.x, _wgslsmith_f_op_f32(1000f * global0.a.a.x), global0.a.a.x, func_7(global0.a.a, Struct_2(Struct_1(global0.a.a, u_input.a, global0.a.c, vec3<bool>(false, global0.a.d.x, false))), vec3<f32>(1000f, global0.a.a.x, global0.a.a.x)).a.a.x), _wgslsmith_mult_vec4_u32(firstLeadingBit(vec4<u32>(0u, u_input.a.x, global0.a.c, global0.a.b.x)), u_input.a), ~17566u, !func_7(vec4<f32>(-525f, 622f, global0.a.a.x, global0.a.a.x), Struct_2(Struct_1(global0.a.a, vec4<u32>(4294967295u, 121012u, 5078u, 21338u), 4294967295u, global0.a.d)), vec3<f32>(global0.a.a.x, 1000f, global0.a.a.x)).a.d)), func_7(vec4<f32>(1113f, func_9(func_9(Struct_2(global0.a), Struct_2(Struct_1(global0.a.a, u_input.a, u_input.a.x, vec3<bool>(false, false, true)))), func_7(vec4<f32>(-266f, global0.a.a.x, -1030f, -298f), Struct_2(Struct_1(vec4<f32>(global0.a.a.x, 681f, 876f, 358f), global0.a.b, u_input.a.x, vec3<bool>(global0.a.d.x, true, global0.a.d.x))), global0.a.a.yxz)).a.a.x, _wgslsmith_f_op_f32(-_wgslsmith_div_f32(global0.a.a.x, global0.a.a.x)), global0.a.a.x), func_9(Struct_2(global0.a), func_7(_wgslsmith_f_op_vec4_f32(global0.a.a * global0.a.a), Struct_2(Struct_1(global0.a.a, u_input.a, global0.a.c, vec3<bool>(true, global0.a.d.x, true))), _wgslsmith_f_op_vec4_f32(func_8(vec4<bool>(true, global0.a.d.x, true, true), Struct_2(global0.a))).zzw)), _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(global0.a.a.x, -1679f, -889f)) + _wgslsmith_f_op_vec3_f32(vec3<f32>(global0.a.a.x, -610f, -1000f) * vec3<f32>(-1119f, 958f, 1272f))), _wgslsmith_f_op_vec3_f32(global0.a.a.yxy - _wgslsmith_f_op_vec3_f32(vec3<f32>(1851f, global0.a.a.x, 1000f) * global0.a.a.xwz)))));
            let var_0 = Struct_1(vec4<f32>(global0.a.a.x, _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global0.a.a.x) - _wgslsmith_f_op_vec3_f32(func_5(global0.a.a.x, global0.a.a, vec3<bool>(global0.a.d.x, false, true), Struct_1(vec4<f32>(-1431f, global0.a.a.x, global0.a.a.x, 350f), vec4<u32>(4294967295u, u_input.a.x, 10068u, global0.a.b.x), u_input.a.x, global0.a.d))).x))), _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global0.a.a.x)))), global0.a.a.x), u_input.a, _wgslsmith_sub_u32(_wgslsmith_mult_u32(_wgslsmith_add_u32(_wgslsmith_dot_vec2_u32(vec2<u32>(0u, u_input.a.x), global0.a.b.wx), 1u), countOneBits(~49784u)), ~_wgslsmith_dot_vec4_u32(~vec4<u32>(u_input.a.x, u_input.a.x, 104235u, 10131u), select(u_input.a, global0.a.b, true))), !(!(!select(vec3<bool>(global0.a.d.x, true, global0.a.d.x), vec3<bool>(global0.a.d.x, true, global0.a.d.x), vec3<bool>(global0.a.d.x, false, false)))));
        }
        default: {
            if (!any(global0.a.d.xy)) {
                global0 = func_9(func_7(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-global0.a.a)), Struct_2(Struct_1(vec4<f32>(global0.a.a.x, global0.a.a.x, -989f, -681f), countOneBits(vec4<u32>(0u, 25259u, 4294967295u, u_input.a.x)), u_input.a.x, func_9(Struct_2(Struct_1(vec4<f32>(-1000f, -393f, global0.a.a.x, 1460f), vec4<u32>(4294967295u, global0.a.b.x, global0.a.b.x, u_input.a.x), 0u, vec3<bool>(false, global0.a.d.x, global0.a.d.x))), Struct_2(Struct_1(global0.a.a, global0.a.b, global0.a.b.x, global0.a.d))).a.d)), global0.a.a.yzw), func_9(Struct_2(Struct_1(_wgslsmith_f_op_vec4_f32(-vec4<f32>(1035f, 852f, global0.a.a.x, -1230f)), reverseBits(vec4<u32>(0u, u_input.a.x, 1u, u_input.a.x)), 0u, vec3<bool>(true, global0.a.d.x, false))), Struct_2(Struct_1(_wgslsmith_f_op_vec4_f32(floor(vec4<f32>(global0.a.a.x, global0.a.a.x, global0.a.a.x, global0.a.a.x))), vec4<u32>(u_input.a.x, u_input.a.x, u_input.a.x, u_input.a.x), 36342u, select(global0.a.d, global0.a.d, false)))));
                let var_0 = global0.a;
            }
            loop {
                if (LOOP_COUNTERS[30u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[30u] = LOOP_COUNTERS[30u] + 1u;
                var var_0 = func_7(global0.a.a, func_9(func_7(_wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(vec4<f32>(global0.a.a.x, -1000f, -101f, -390f), global0.a.a)), func_9(Struct_2(Struct_1(global0.a.a, u_input.a, 5044u, vec3<bool>(global0.a.d.x, false, global0.a.d.x))), Struct_2(global0.a)), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-global0.a.a.zxz) * func_9(Struct_2(global0.a), Struct_2(global0.a)).a.a.wzx)), Struct_2(Struct_1(_wgslsmith_f_op_vec4_f32(-global0.a.a), vec4<u32>(global0.a.b.x, global0.a.c, u_input.a.x, 6228u), 1u, !global0.a.d))), vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(global0.a.a.x)) + global0.a.a.x), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1000f)), _wgslsmith_f_op_f32(-219f))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global0.a.a.x) - -168f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(-1229f, global0.a.a.x, false))))));
                let var_1 = func_9(func_7(func_9(Struct_2(func_2(Struct_1(var_0.a.a, vec4<u32>(global0.a.b.x, 4294967295u, var_0.a.b.x, global0.a.b.x), 46099u, global0.a.d), Struct_1(var_0.a.a, var_0.a.b, u_input.a.x, vec3<bool>(var_0.a.d.x, false, false)))), Struct_2(Struct_1(vec4<f32>(var_0.a.a.x, global0.a.a.x, 1261f, global0.a.a.x), var_0.a.b, 4294967295u, vec3<bool>(var_0.a.d.x, false, var_0.a.d.x)))).a.a, Struct_2(Struct_1(_wgslsmith_f_op_vec4_f32(global0.a.a + global0.a.a), u_input.a, 26652u, global0.a.d)), _wgslsmith_f_op_vec3_f32(ceil(vec3<f32>(_wgslsmith_f_op_f32(-2259f), _wgslsmith_f_op_f32(global0.a.a.x * var_0.a.a.x), var_0.a.a.x)))), func_7(_wgslsmith_f_op_vec4_f32(-vec4<f32>(global0.a.a.x, global0.a.a.x, _wgslsmith_f_op_f32(-var_0.a.a.x), global0.a.a.x)), func_7(vec4<f32>(_wgslsmith_f_op_f32(abs(var_0.a.a.x)), var_0.a.a.x, _wgslsmith_f_op_f32(abs(var_0.a.a.x)), -1917f), Struct_2(var_0.a), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-global0.a.a.wzx))), var_0.a.a.wxx));
                global0 = Struct_2(var_1.a);
            }
            if (global0.a.d.x & select(select(func_6(_wgslsmith_f_op_f32(global0.a.a.x - global0.a.a.x), vec2<i32>(global1[_wgslsmith_index_u32(u_input.a.x, 3u)], global1[_wgslsmith_index_u32(4294967295u, 3u)]), true, ~global0.a.c).x, all(!vec3<bool>(global0.a.d.x, global0.a.d.x, false)), !func_9(Struct_2(global0.a), Struct_2(global0.a)).a.d.x), func_9(func_7(_wgslsmith_f_op_vec4_f32(-global0.a.a), func_9(Struct_2(global0.a), Struct_2(global0.a)), _wgslsmith_f_op_vec3_f32(-global0.a.a.wxw)), Struct_2(Struct_1(global0.a.a, vec4<u32>(1u, u_input.a.x, global0.a.b.x, 8193u), global0.a.c, vec3<bool>(global0.a.d.x, global0.a.d.x, global0.a.d.x)))).a.d.x, func_9(func_7(_wgslsmith_f_op_vec4_f32(sign(vec4<f32>(-195f, global0.a.a.x, -1342f, 1066f))), func_9(Struct_2(global0.a), Struct_2(Struct_1(global0.a.a, u_input.a, global0.a.b.x, vec3<bool>(false, false, global0.a.d.x)))), vec3<f32>(global0.a.a.x, global0.a.a.x, global0.a.a.x)), Struct_2(func_7(vec4<f32>(global0.a.a.x, -943f, global0.a.a.x, -1249f), Struct_2(global0.a), global0.a.a.yyy).a)).a.d.x)) {
                global0 = Struct_2(global0.a);
            }
            var var_0 = min(_wgslsmith_sub_u32(61545u, 1u) | _wgslsmith_sub_u32(~(u_input.a.x >> (global0.a.b.x % 32u)), ~4294967295u), _wgslsmith_dot_vec3_u32(countOneBits(vec3<u32>(~global0.a.c, ~u_input.a.x, _wgslsmith_dot_vec2_u32(global0.a.b.xx, global0.a.b.zy))), firstLeadingBit(countOneBits(abs(vec3<u32>(12623u, u_input.a.x, 1u))))));
        }
    }
    loop {
        if (LOOP_COUNTERS[31u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[31u] = LOOP_COUNTERS[31u] + 1u;
    }
    var var_0 = _wgslsmith_div_f32(global0.a.a.x, func_9(func_9(func_7(_wgslsmith_f_op_vec4_f32(vec4<f32>(1000f, -971f, -2012f, -883f) * vec4<f32>(-1390f, -1412f, global0.a.a.x, 224f)), Struct_2(Struct_1(vec4<f32>(116f, global0.a.a.x, global0.a.a.x, -811f), vec4<u32>(u_input.a.x, 16598u, u_input.a.x, u_input.a.x), global0.a.b.x, global0.a.d)), global0.a.a.xzw), func_7(_wgslsmith_f_op_vec4_f32(-vec4<f32>(global0.a.a.x, 790f, 820f, global0.a.a.x)), func_9(Struct_2(global0.a), Struct_2(Struct_1(global0.a.a, global0.a.b, 0u, vec3<bool>(global0.a.d.x, false, false)))), vec3<f32>(global0.a.a.x, global0.a.a.x, global0.a.a.x))), func_7(func_2(func_9(Struct_2(global0.a), Struct_2(Struct_1(global0.a.a, vec4<u32>(u_input.a.x, 4294967295u, u_input.a.x, global0.a.b.x), 1u, global0.a.d))).a, Struct_1(global0.a.a, vec4<u32>(58979u, u_input.a.x, u_input.a.x, 21083u), 52705u, global0.a.d)).a, func_9(Struct_2(global0.a), func_7(global0.a.a, Struct_2(global0.a), global0.a.a.zxx)), vec3<f32>(_wgslsmith_f_op_f32(global0.a.a.x - global0.a.a.x), -1481f, _wgslsmith_f_op_f32(-638f * global0.a.a.x)))).a.a.x);
    return true;
}

@compute
@workgroup_size(1)
fn main() {
    for (var var_0 = 21578i; ; var_0 -= 1i) {
        if (LOOP_COUNTERS[32u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[32u] = LOOP_COUNTERS[32u] + 1u;
        continue;
    }
    for (var var_0 = -14007i; func_1(); var_0 += 1i) {
        if (LOOP_COUNTERS[33u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[33u] = LOOP_COUNTERS[33u] + 1u;
        break;
    }
    switch (0i | reverseBits(-global1[_wgslsmith_index_u32(firstLeadingBit(0u), 3u)])) {
        case -38007i: {
            let var_0 = u_input.a.x;
            global0 = Struct_2(func_7(_wgslsmith_f_op_vec4_f32(-global0.a.a), func_9(func_7(_wgslsmith_f_op_vec4_f32(vec4<f32>(global0.a.a.x, -523f, global0.a.a.x, global0.a.a.x) * global0.a.a), func_9(Struct_2(Struct_1(vec4<f32>(-471f, global0.a.a.x, global0.a.a.x, 2015f), global0.a.b, var_0, global0.a.d)), Struct_2(global0.a)), _wgslsmith_f_op_vec3_f32(vec3<f32>(global0.a.a.x, 1425f, global0.a.a.x) + vec3<f32>(-1251f, global0.a.a.x, 1399f))), Struct_2(global0.a)), vec3<f32>(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(global0.a.a.x + 1046f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-340f * global0.a.a.x)), -976f)).a);
            let var_1 = ~1u;
            let var_2 = func_7(vec4<f32>(_wgslsmith_f_op_f32(-global0.a.a.x), _wgslsmith_f_op_f32(-func_9(Struct_2(global0.a), func_9(Struct_2(global0.a), Struct_2(Struct_1(vec4<f32>(global0.a.a.x, global0.a.a.x, 1216f, 1000f), global0.a.b, 0u, global0.a.d)))).a.a.x), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-248f + -864f))), 199f), Struct_2(func_7(vec4<f32>(_wgslsmith_f_op_f32(global0.a.a.x * global0.a.a.x), 534f, _wgslsmith_div_f32(global0.a.a.x, -320f), _wgslsmith_f_op_f32(-global0.a.a.x)), Struct_2(Struct_1(global0.a.a, vec4<u32>(1u, 1u, u_input.a.x, 4294967295u), 4294967295u, global0.a.d)), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(global0.a.a.xyx - vec3<f32>(341f, global0.a.a.x, 217f)))).a), global0.a.a.zxy);
        }
        case 2294i: {
            var var_0 = Struct_1(_wgslsmith_f_op_vec4_f32(abs(_wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(-789f, 1000f, global0.a.a.x, -155f) * vec4<f32>(-1116f, global0.a.a.x, 312f, 386f))))))), global0.a.b, ~(~func_2(func_7(vec4<f32>(global0.a.a.x, -1071f, -225f, global0.a.a.x), Struct_2(Struct_1(global0.a.a, vec4<u32>(42374u, global0.a.c, 45208u, 52055u), global0.a.b.x, vec3<bool>(false, global0.a.d.x, global0.a.d.x))), global0.a.a.xyx).a, global0.a).b.x), global0.a.d);
            var var_1 = global0.a;
            var var_2 = Struct_2(Struct_1(_wgslsmith_f_op_vec4_f32(-var_0.a), u_input.a, ~4294967295u, var_0.d));
            let var_3 = false | (global1[_wgslsmith_index_u32(1u, 3u)] >= global1[_wgslsmith_index_u32(_wgslsmith_sub_u32(abs(firstLeadingBit(var_0.b.x)), var_2.a.c), 3u)]);
            for (var var_4: i32; var_4 >= 64292i; global1 = array<i32, 3>()) {
                if (LOOP_COUNTERS[34u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[34u] = LOOP_COUNTERS[34u] + 1u;
                var var_5 = var_2.a;
            }
        }
        default: {
            return;
        }
    }
    if (false) {
        global1 = array<i32, 3>();
        var var_0 = i32(-1i) * -7244i;
        loop {
            if (LOOP_COUNTERS[35u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[35u] = LOOP_COUNTERS[35u] + 1u;
        }
        global0 = func_9(Struct_2(Struct_1(_wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(-vec4<f32>(global0.a.a.x, global0.a.a.x, global0.a.a.x, global0.a.a.x)))), u_input.a, ~1u, !global0.a.d)), func_9(func_7(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(select(vec4<f32>(global0.a.a.x, -1000f, 1150f, 939f), vec4<f32>(726f, global0.a.a.x, global0.a.a.x, -775f), vec4<bool>(false, global0.a.d.x, global0.a.d.x, true))) - _wgslsmith_f_op_vec4_f32(global0.a.a - global0.a.a)), func_7(_wgslsmith_f_op_vec4_f32(global0.a.a - global0.a.a), func_9(Struct_2(Struct_1(global0.a.a, global0.a.b, global0.a.b.x, vec3<bool>(global0.a.d.x, global0.a.d.x, true))), Struct_2(global0.a)), _wgslsmith_f_op_vec3_f32(func_5(global0.a.a.x, vec4<f32>(553f, -744f, 1303f, global0.a.a.x), global0.a.d, Struct_1(vec4<f32>(global0.a.a.x, -338f, -163f, -264f), vec4<u32>(global0.a.c, 1u, u_input.a.x, 44791u), u_input.a.x, global0.a.d)))), _wgslsmith_f_op_vec3_f32(-vec3<f32>(702f, global0.a.a.x, global0.a.a.x))), Struct_2(global0.a)));
    }
    switch (-global1[_wgslsmith_index_u32(global0.a.b.x, 3u)]) {
        case i32(-2147483648): {
            loop {
                if (LOOP_COUNTERS[36u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[36u] = LOOP_COUNTERS[36u] + 1u;
                continue;
            }
            let var_0 = Struct_2(global0.a);
            var var_1 = 1852i;
        }
        case 57428i: {
            var var_0 = global0.a.d.x;
            loop {
                if (LOOP_COUNTERS[37u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[37u] = LOOP_COUNTERS[37u] + 1u;
                var var_1 = select(all(vec2<bool>(true, true)), any(func_2(Struct_1(global0.a.a, vec4<u32>(u_input.a.x, global0.a.b.x, 58678u, 18310u), 0u, vec3<bool>(false, global0.a.d.x, true)), Struct_1(global0.a.a, vec4<u32>(global0.a.c, 3435u, 0u, 4294967295u), 19392u, vec3<bool>(true, global0.a.d.x, false))).d.yy), !func_6(global0.a.a.x, abs(vec2<i32>(34293i, global1[_wgslsmith_index_u32(u_input.a.x, 3u)])), func_7(vec4<f32>(global0.a.a.x, 122f, 308f, 2255f), Struct_2(Struct_1(global0.a.a, u_input.a, 53570u, global0.a.d)), vec3<f32>(global0.a.a.x, global0.a.a.x, global0.a.a.x)).a.d.x, 1u | global0.a.b.x).x) | true;
                let var_2 = Struct_2(global0.a);
            }
            global1 = array<i32, 3>();
        }
        case 3162i: {
        }
        case -1i: {
        }
        default: {
            global0 = Struct_2(func_2(func_9(Struct_2(Struct_1(global0.a.a, vec4<u32>(u_input.a.x, 4294967295u, 26312u, 131099u), 1u, global0.a.d)), Struct_2(global0.a)).a, global0.a));
            global0 = func_7(_wgslsmith_f_op_vec4_f32(-global0.a.a), func_7(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(vec4<f32>(global0.a.a.x, -966f, 1343f, global0.a.a.x) * vec4<f32>(global0.a.a.x, -2222f, 861f, -1227f))))), Struct_2(Struct_1(_wgslsmith_f_op_vec4_f32(sign(vec4<f32>(-731f, global0.a.a.x, global0.a.a.x, -1084f))), vec4<u32>(u_input.a.x, u_input.a.x, 1u, 6098u), ~u_input.a.x, vec3<bool>(global0.a.d.x, true, false))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(exp2(_wgslsmith_f_op_vec3_f32(-global0.a.a.zwz))))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(exp2(vec3<f32>(_wgslsmith_f_op_f32(round(global0.a.a.x)), _wgslsmith_f_op_f32(-2062f), _wgslsmith_f_op_f32(f32(-1f) * -301f))))));
            var var_0 = global0.a.b.wzz;
            var var_1 = Struct_2(Struct_1(vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(global0.a.a.x - global0.a.a.x) - _wgslsmith_f_op_f32(exp2(global0.a.a.x))), _wgslsmith_f_op_vec4_f32(func_8(select(vec4<bool>(false, global0.a.d.x, global0.a.d.x, global0.a.d.x), vec4<bool>(global0.a.d.x, true, global0.a.d.x, global0.a.d.x), false), func_7(global0.a.a, Struct_2(global0.a), global0.a.a.yww))).x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(global0.a.a.x))), 1000f), vec4<u32>(~(u_input.a.x >> (global0.a.c % 32u)), 0u, max(0u, var_0.x) | _wgslsmith_div_u32(var_0.x, var_0.x), _wgslsmith_clamp_u32(firstTrailingBit(4294967295u), _wgslsmith_add_u32(var_0.x, global0.a.b.x), 27292u)), u_input.a.x, global0.a.d));
        }
    }
    loop {
        if (LOOP_COUNTERS[38u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[38u] = LOOP_COUNTERS[38u] + 1u;
        break;
    }
    switch (-(global1[_wgslsmith_index_u32(u_input.a.x, 3u)] >> (~global0.a.b.x % 32u))) {
        case i32(-2147483648): {
            var var_0 = !(_wgslsmith_mult_u32(~u_input.a.x, _wgslsmith_mult_u32(1u, global0.a.c ^ 73800u)) < _wgslsmith_dot_vec3_u32(func_2(global0.a, func_7(vec4<f32>(414f, global0.a.a.x, global0.a.a.x, global0.a.a.x), Struct_2(Struct_1(vec4<f32>(-1000f, -1749f, global0.a.a.x, global0.a.a.x), vec4<u32>(0u, 1u, u_input.a.x, 0u), 1u, vec3<bool>(global0.a.d.x, global0.a.d.x, false))), vec3<f32>(global0.a.a.x, global0.a.a.x, global0.a.a.x)).a).b.yxy, u_input.a.zyz));
            var_0 = true;
        }
        case 0i: {
            global0 = func_7(_wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(ceil(global0.a.a)), _wgslsmith_f_op_vec4_f32(sign(vec4<f32>(global0.a.a.x, 395f, -136f, global0.a.a.x)))) + global0.a.a), func_9(Struct_2(global0.a), func_9(func_7(_wgslsmith_f_op_vec4_f32(sign(vec4<f32>(-625f, global0.a.a.x, global0.a.a.x, global0.a.a.x))), Struct_2(Struct_1(global0.a.a, u_input.a, 1u, global0.a.d)), _wgslsmith_f_op_vec3_f32(-global0.a.a.yyx)), Struct_2(Struct_1(vec4<f32>(-1067f, 651f, -1214f, -1559f), vec4<u32>(global0.a.c, u_input.a.x, global0.a.b.x, global0.a.c), global0.a.b.x, global0.a.d)))), _wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(floor(-492f)), 314f, _wgslsmith_f_op_f32(-global0.a.a.x)) - _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(global0.a.a.x, -614f, global0.a.a.x)) * _wgslsmith_f_op_vec3_f32(-vec3<f32>(1213f, global0.a.a.x, -105f))))));
            var var_0 = vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global0.a.a.x) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(1000f * global0.a.a.x) * global0.a.a.x))), _wgslsmith_f_op_f32(global0.a.a.x - _wgslsmith_f_op_f32(max(1f, _wgslsmith_f_op_vec4_f32(func_8(select(vec4<bool>(true, false, global0.a.d.x, false), vec4<bool>(global0.a.d.x, false, false, global0.a.d.x), true), Struct_2(global0.a))).x))), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-_wgslsmith_f_op_vec4_f32(func_8(!vec4<bool>(true, global0.a.d.x, global0.a.d.x, false), Struct_2(global0.a))).x))));
            let var_1 = func_9(Struct_2(func_2(Struct_1(_wgslsmith_f_op_vec4_f32(-global0.a.a), ~vec4<u32>(u_input.a.x, global0.a.b.x, global0.a.c, u_input.a.x), abs(1u), vec3<bool>(global0.a.d.x, true, global0.a.d.x)), Struct_1(vec4<f32>(global0.a.a.x, var_0.x, 1827f, -835f), global0.a.b, func_9(Struct_2(Struct_1(global0.a.a, global0.a.b, 9318u, global0.a.d)), Struct_2(Struct_1(vec4<f32>(-1000f, global0.a.a.x, -474f, 135f), vec4<u32>(21097u, 4294967295u, global0.a.b.x, 92744u), 1u, vec3<bool>(false, false, false)))).a.c, global0.a.d))), func_7(vec4<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -131f), 447f), _wgslsmith_f_op_f32(var_0.x - _wgslsmith_f_op_f32(-219f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(var_0.x, global0.a.a.x))), _wgslsmith_f_op_f32(var_0.x + -888f)), func_9(Struct_2(func_9(Struct_2(global0.a), Struct_2(Struct_1(global0.a.a, u_input.a, 28326u, vec3<bool>(false, false, false)))).a), func_9(Struct_2(Struct_1(vec4<f32>(global0.a.a.x, 738f, global0.a.a.x, -130f), vec4<u32>(u_input.a.x, 26322u, u_input.a.x, global0.a.b.x), 5062u, vec3<bool>(global0.a.d.x, true, true))), func_9(Struct_2(Struct_1(global0.a.a, vec4<u32>(u_input.a.x, 1u, 1u, 5874u), u_input.a.x, vec3<bool>(false, false, false))), Struct_2(global0.a)))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(var_0.x, 706f, -1180f) + vec3<f32>(-863f, var_0.x, global0.a.a.x))))));
            var_0 = vec3<f32>(_wgslsmith_f_op_f32(max(global0.a.a.x, _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_0.x)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(var_1.a.a.x)))))), var_1.a.a.x, _wgslsmith_div_f32(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(global0.a.a.x + var_1.a.a.x)), func_7(_wgslsmith_f_op_vec4_f32(select(global0.a.a, vec4<f32>(var_1.a.a.x, -615f, var_0.x, 889f), global0.a.d.x)), Struct_2(global0.a), var_1.a.a.yzw).a.a.x, (var_1.a.c != 0u) && var_1.a.d.x)), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(-635f, _wgslsmith_f_op_f32(max(global0.a.a.x, var_1.a.a.x))))));
            loop {
                if (LOOP_COUNTERS[39u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[39u] = LOOP_COUNTERS[39u] + 1u;
                let var_2 = firstLeadingBit(vec2<u32>(0u, abs(_wgslsmith_mult_u32(u_input.a.x, ~u_input.a.x))));
                var var_3 = global0.a.d;
                break;
            }
        }
        case -19200i: {
        }
        case 2147483647i: {
            global1 = array<i32, 3>();
        }
        default: {
            var var_0 = vec3<u32>(_wgslsmith_add_u32(u_input.a.x, u_input.a.x), max(global0.a.b.x | ~1u, _wgslsmith_dot_vec2_u32(vec2<u32>(firstTrailingBit(global0.a.b.x), _wgslsmith_mod_u32(global0.a.b.x, global0.a.b.x)), abs(vec2<u32>(0u, global0.a.b.x)))), ~_wgslsmith_sub_u32(0u, u_input.a.x) & 0u);
        }
    }
    global0 = func_9(Struct_2(Struct_1(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(531f, -1197f, global0.a.a.x, global0.a.a.x)), _wgslsmith_f_op_vec4_f32(floor(global0.a.a))), vec4<u32>(1u, 4294967295u, abs(global0.a.b.x), ~u_input.a.x), ~u_input.a.x, vec3<bool>(any(vec4<bool>(true, false, global0.a.d.x, global0.a.d.x)), global0.a.a.x != global0.a.a.x, true))), func_9(Struct_2(global0.a), func_7(global0.a.a, Struct_2(global0.a), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(func_5(global0.a.a.x, global0.a.a, global0.a.d, global0.a))))));
    let x = u_input.a;
    s_output = StorageBuffer(global1[_wgslsmith_index_u32(~_wgslsmith_add_u32(u_input.a.x, _wgslsmith_mod_u32(~u_input.a.x, 1u)), 3u)], _wgslsmith_div_vec4_u32(u_input.a, u_input.a), vec2<f32>(global0.a.a.x, -157f));
}

`;