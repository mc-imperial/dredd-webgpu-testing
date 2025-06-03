export const input = [138,183,119,165,195,167,79,178,222,192,236,57,169,39,170,47,165,122,56,103,239,124,188,219,154,219,149,96,240,192,211,171,19,180,204,234,240,210,193,253,89,180,61,45,85,113,117,34,169,195,115,30,164,243,239,58,81,125,239,188,92,131,47,84];
export const expected = [138,183,119,165,195,167,79,178,222,192,236,57,169,39,170,47,165,122,56,103,239,124,188,219,154,219,149,96,240,192,211,171,19,180,204,234,240,210,193,253,89,180,61,45,85,113,117,34,169,195,115,30,164,243,239,58,81,125,239,188,92,131,47,84];
export const shaderCode = ` 
 // {"0:0":[138,183,119,165,195,167,79,178,222,192,236,57,169,39,170,47,165,122,56,103,239,124,188,219,154,219,149,96,240,192,211,171,19,180,204,234,240,210,193,253,89,180,61,45,85,113,117,34,169,195,115,30,164,243,239,58,81,125,239,188,92,131,47,84]}
// Seed: 1238580091781768856

struct Struct_1 {
    a: vec4<i32>,
    b: f32,
    c: vec3<f32>,
    d: i32,
}

struct Struct_2 {
    a: vec2<bool>,
    b: u32,
    c: vec2<i32>,
    d: u32,
    e: bool,
}

struct Struct_3 {
    a: vec3<i32>,
    b: i32,
    c: Struct_1,
    d: i32,
    e: Struct_1,
}

struct Struct_4 {
    a: Struct_1,
    b: f32,
    c: i32,
    d: u32,
    e: Struct_2,
}

struct UniformBuffer {
    a: vec4<i32>,
    b: vec2<i32>,
    c: vec4<i32>,
    d: i32,
    e: u32,
}

struct StorageBuffer {
    a: vec2<u32>,
    b: u32,
    c: vec4<u32>,
    d: i32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: f32;

var<private> global1: Struct_4;

var<private> global2: array<bool, 17> = array<bool, 17>(false, false, false, true, true, false, false, false, false, true, false, false, true, false, true, false, true);

var<private> LOOP_COUNTERS: array<u32, 18>;

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn func_3(arg_0: vec2<bool>, arg_1: i32, arg_2: u32, arg_3: u32) -> Struct_1 {
    global2 = array<bool, 17>();
    let var_0 = global1.a.a;
    var var_1 = min(global1.a.a, _wgslsmith_div_vec4_i32(_wgslsmith_mod_vec4_i32(abs(-global1.a.a), vec4<i32>(-global1.c, _wgslsmith_dot_vec2_i32(vec2<i32>(-10144i, u_input.c.x), vec2<i32>(arg_1, u_input.c.x)), _wgslsmith_div_i32(global1.e.c.x, arg_1), -var_0.x)), u_input.a));
    global2 = array<bool, 17>();
    return global1.a;
}

fn func_6() -> i32 {
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
    }
    var var_0 = global2[_wgslsmith_index_u32(_wgslsmith_add_u32(global1.d, 21373u), 17u)];
    global0 = func_3(vec2<bool>(global1.e.a.x, select(all(select(vec3<bool>(global1.e.a.x, false, false), vec3<bool>(global2[_wgslsmith_index_u32(global1.e.d, 17u)], global2[_wgslsmith_index_u32(4294967295u, 17u)], global1.e.e), vec3<bool>(false, true, global1.e.a.x))), 60189i >= firstTrailingBit(0i), any(select(vec4<bool>(false, true, global1.e.a.x, global2[_wgslsmith_index_u32(u_input.e, 17u)]), vec4<bool>(true, false, true, true), vec4<bool>(true, false, global2[_wgslsmith_index_u32(global1.e.b, 17u)], false))))), u_input.d, 6287u, 43939u ^ firstLeadingBit(abs(~u_input.e))).b;
    global0 = -1901f;
    var var_1 = !select(select(global1.e.a, !vec2<bool>(global1.e.e, true), select(2147483647i > global1.c, true, false | global2[_wgslsmith_index_u32(global1.d, 17u)])), vec2<bool>(_wgslsmith_div_f32(global1.b, 637f) >= -1949f, false), global1.e.a);
    return ~(~u_input.b.x);
}

fn func_5(arg_0: f32, arg_1: bool, arg_2: bool) -> u32 {
    for (var var_0 = abs(0i); ; var_0 -= 1i) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        for (var var_1 = 2147483647i; ; var_1 -= 1i) {
            if (LOOP_COUNTERS[2u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            var var_2 = _wgslsmith_mult_u32(20919u, u_input.e);
            global2 = array<bool, 17>();
            var var_3 = ~(~vec3<i32>(~0i, u_input.d & u_input.b.x, func_6())) << (vec3<u32>(_wgslsmith_sub_u32(4294967295u, min(0u, u_input.e)) << (global1.e.d % 32u), _wgslsmith_sub_u32(0u, ~(u_input.e ^ u_input.e)), ~(~1u)) % vec3<u32>(32u));
        }
        var var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(-374f, 2886f)) + 598f)));
        loop {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        }
        loop {
            if (LOOP_COUNTERS[4u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
            let var_2 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(sign(vec4<f32>(arg_0, 639f, 245f, global1.b))) * _wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(global1.a.b, arg_0, arg_0, 683f)))) + _wgslsmith_f_op_vec4_f32(select(vec4<f32>(2033f, 1311f, 1028f, global1.b), _wgslsmith_f_op_vec4_f32(-vec4<f32>(global1.a.c.x, global1.a.c.x, 1280f, global1.b)), vec4<bool>(true, arg_1, true, arg_2)))) * _wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(abs(vec4<f32>(-1868f, 817f, arg_0, global1.a.c.x)))))));
            let var_3 = global1.a;
        }
        switch (-global1.c) {
            case 2147483647i: {
                global1 = Struct_4(func_3(vec2<bool>(arg_1, _wgslsmith_f_op_f32(f32(-1f) * -1028f) <= _wgslsmith_f_op_f32(exp2(global1.b))), -_wgslsmith_div_i32(global1.e.c.x, func_3(vec2<bool>(false, global1.e.a.x), 48935i, 4294967295u, u_input.e).a.x), u_input.e, 1u), _wgslsmith_f_op_f32(min(-1851f, _wgslsmith_f_op_f32(ceil(arg_0)))), firstTrailingBit(_wgslsmith_dot_vec4_i32(abs(vec4<i32>(-1i, u_input.a.x, -1i, 2147483647i)), vec4<i32>(-64383i, u_input.a.x, global1.e.c.x, -1i) << (vec4<u32>(51769u, u_input.e, 1u, 0u) % vec4<u32>(32u)))) | global1.e.c.x, countOneBits(global1.e.d), global1.e);
            }
            case -2467i: {
                global1 = Struct_4(global1.a, global1.a.c.x, global1.e.c.x, select(~_wgslsmith_sub_u32(u_input.e, 0u), reverseBits(1u), !global1.e.e), global1.e);
                continue;
            }
            default: {
                continue;
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        switch (1i) {
            case -21352i: {
                global0 = _wgslsmith_f_op_f32(f32(-1f) * -1673f);
                continue;
            }
            case 1i: {
            }
            default: {
            }
        }
        if (true) {
            let var_0 = _wgslsmith_dot_vec3_i32(abs(~_wgslsmith_add_vec3_i32(select(vec3<i32>(u_input.c.x, 21038i, 2147483647i), vec3<i32>(1i, global1.a.a.x, 2147483647i), vec3<bool>(arg_2, arg_2, false)), firstTrailingBit(vec3<i32>(u_input.a.x, -32614i, 1000i)))), -_wgslsmith_div_vec3_i32(-u_input.a.wyy, _wgslsmith_clamp_vec3_i32(vec3<i32>(2147483647i, i32(-2147483648), -19049i), vec3<i32>(i32(-2147483648), u_input.d, -63801i), vec3<i32>(i32(-2147483648), u_input.c.x, u_input.c.x))));
            continue;
        }
        if (_wgslsmith_f_op_f32(-arg_0) >= arg_0) {
        }
    }
    let var_0 = min(u_input.a.yxw, vec3<i32>(1i, ~u_input.b.x, 1i)) & ~select(min(func_3(global1.e.a, -24420i, 0u, u_input.e).a.zzy, ~u_input.a.xyz), vec3<i32>(_wgslsmith_mult_i32(u_input.c.x, -3027i), select(-8519i, i32(-2147483648), global2[_wgslsmith_index_u32(global1.e.b, 17u)]), 35827i), vec3<bool>(false, any(vec3<bool>(arg_2, false, true)), !global2[_wgslsmith_index_u32(1u, 17u)]));
    for (var var_1 = 27047i; var_1 >= -26269i; var_1 = -10681i) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        return ~global1.d;
    }
    for (var var_1 = -1i; true; ) {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        if (u_input.e != _wgslsmith_clamp_u32(u_input.e, _wgslsmith_div_u32(~14523u, global1.d), u_input.e)) {
            let var_2 = _wgslsmith_div_u32(17392u, global1.d);
            return 10548u << (firstTrailingBit(0u) % 32u);
        }
        for (var var_2 = 11082i; var_2 >= i32(-2147483648); ) {
            if (LOOP_COUNTERS[8u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        }
    }
    return u_input.e;
}

fn func_4(arg_0: vec3<u32>, arg_1: i32, arg_2: f32) -> f32 {
    let var_0 = false;
    switch (-_wgslsmith_dot_vec3_i32(vec3<i32>(~u_input.d, reverseBits(i32(-2147483648)), ~min(arg_1, i32(-2147483648))), func_3(vec2<bool>(true, !var_0), ~global1.c ^ firstTrailingBit(arg_1), arg_0.x, func_5(-1294f, true, !var_0)).a.yzw)) {
        case 34132i: {
            for (var var_1 = -40730i; true; ) {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                var var_2 = vec2<i32>(5125i, _wgslsmith_mod_i32(_wgslsmith_sub_i32(1i, -1i), 42920i));
                var var_3 = vec4<u32>(_wgslsmith_div_u32(_wgslsmith_dot_vec2_u32(vec2<u32>(global1.e.b, _wgslsmith_dot_vec2_u32(arg_0.xz, arg_0.xz)), ~(arg_0.yx << (arg_0.zy % vec2<u32>(32u)))), abs(_wgslsmith_dot_vec2_u32(max(vec2<u32>(u_input.e, 0u), vec2<u32>(6752u, global1.d)), _wgslsmith_sub_vec2_u32(arg_0.zy, arg_0.yz)))), _wgslsmith_div_u32(_wgslsmith_dot_vec2_u32(~(~arg_0.zy), abs(arg_0.xz)), ~reverseBits(func_5(755f, true, true))), arg_0.x, 0u);
                global1 = Struct_4(global1.a, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_2 + 442f)) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(846f)))), ~reverseBits(-var_2.x), u_input.e, global1.e);
                continue;
            }
            let var_1 = vec4<i32>(abs(_wgslsmith_dot_vec3_i32(_wgslsmith_add_vec3_i32(u_input.a.xyy, u_input.c.zzw) << (~vec3<u32>(3688u, u_input.e, arg_0.x) % vec3<u32>(32u)), ~vec3<i32>(u_input.d, global1.e.c.x, u_input.b.x) << (~arg_0 % vec3<u32>(32u)))), u_input.c.x, 1i, global1.a.d);
            global2 = array<bool, 17>();
        }
        case 9041i: {
            for (var var_1: i32; var_1 <= -7679i; var_1 -= 1i) {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
            }
            if (true) {
                let var_1 = func_3(global1.e.a, min(countOneBits(global1.e.c.x), _wgslsmith_mult_i32(-25373i, -1i)), ~firstTrailingBit(~min(0u, 1u)), abs(_wgslsmith_mod_u32(global1.e.d, 1u) & ~(~global1.d)));
                global1 = Struct_4(var_1, -442f, 22273i, ~1u, global1.e);
                var var_2 = _wgslsmith_f_op_vec3_f32(-var_1.c);
            }
            let var_1 = func_3(vec2<bool>(_wgslsmith_f_op_f32(global1.b * _wgslsmith_f_op_f32(-arg_2)) <= _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(global1.a.c.x * -1000f), _wgslsmith_f_op_f32(f32(-1f) * -120f))), select(true, any(select(global1.e.a, global1.e.a, false)), !(!global1.e.a.x))), -((-global1.c & ~0i) & global1.c), _wgslsmith_sub_u32(global1.e.b, 26812u), 57690u & _wgslsmith_sub_u32(u_input.e, ~arg_0.x));
            let var_2 = Struct_2(global1.e.a, 10221u, min(reverseBits(-(vec2<i32>(1i, arg_1) << (arg_0.yz % vec2<u32>(32u)))), -_wgslsmith_mod_vec2_i32(~vec2<i32>(0i, -45868i), u_input.c.yx >> (arg_0.zx % vec2<u32>(32u)))), ~global1.e.d, false);
        }
        case 1i: {
        }
        default: {
            var var_1 = !vec2<bool>(global2[_wgslsmith_index_u32(1u, 17u)], true);
            var var_2 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(ceil(arg_2)), _wgslsmith_f_op_f32(-996f), -304f, _wgslsmith_f_op_f32(-global1.b)) + vec4<f32>(_wgslsmith_f_op_f32(-1699f + global1.b), _wgslsmith_f_op_f32(-arg_2), _wgslsmith_f_op_f32(f32(-1f) * -2124f), _wgslsmith_f_op_f32(max(global1.a.c.x, 1255f))))) * _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(1314f, -1241f, 1005f, arg_2) * vec4<f32>(arg_2, global1.a.b, 278f, arg_2))))) - _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_2, -542f, 1316f, global1.b)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(1000f, global1.a.c.x, 1084f, global1.a.c.x)))) + _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(min(vec4<f32>(-865f, 1130f, global1.b, 558f), vec4<f32>(-1316f, 146f, -405f, -1316f))), _wgslsmith_f_op_vec4_f32(vec4<f32>(-1504f, 991f, -1239f, 155f) + vec4<f32>(910f, -411f, arg_2, global1.b)), false)))));
        }
    }
    global1 = Struct_4(global1.a, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(max(-699f, -2365f)), _wgslsmith_f_op_f32(-global1.a.c.x)))) * 1610f), u_input.a.x, 0u, Struct_2(global1.e.a, 0u, global1.e.c, ~arg_0.x, global1.e.e));
    let var_1 = ~arg_1 | _wgslsmith_mult_i32(max(select(u_input.a.x, arg_1, var_0) & u_input.d, ~global1.a.d), -_wgslsmith_dot_vec2_i32(vec2<i32>(u_input.c.x, 6386i), vec2<i32>(-22447i, i32(-2147483648))));
    global1 = Struct_4(global1.a, global1.a.b, -50055i, 62282u, global1.e);
    return _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_2 + _wgslsmith_f_op_f32(-383f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-173f * arg_2))))));
}

fn func_7(arg_0: Struct_1, arg_1: f32, arg_2: Struct_2, arg_3: f32) -> Struct_4 {
    global2 = array<bool, 17>();
    if (_wgslsmith_div_f32(arg_0.c.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1000f + _wgslsmith_f_op_f32(ceil(-1386f))))) == -597f) {
        for (var var_0 = i32(-2147483648); var_0 >= 1i; global0 = 1385f) {
            if (LOOP_COUNTERS[11u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
            let var_1 = Struct_4(func_3(select(vec2<bool>(true, !global1.e.e), global1.e.a, !vec2<bool>(true, global2[_wgslsmith_index_u32(0u, 17u)])), i32(-1i) * -_wgslsmith_dot_vec3_i32(arg_0.a.xyy, vec3<i32>(arg_2.c.x, i32(-2147483648), global1.c)), _wgslsmith_sub_u32(_wgslsmith_clamp_u32(1u, global1.e.d, arg_2.d), 4294967295u), ~19863u), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1315f))), _wgslsmith_dot_vec4_i32(-max(global1.a.a, vec4<i32>(2147483647i, arg_0.d, 1i, -40764i)), vec4<i32>(~2147483647i, _wgslsmith_dot_vec4_i32(vec4<i32>(4667i, u_input.c.x, arg_0.a.x, -53158i), vec4<i32>(0i, u_input.d, arg_0.d, 2147483647i)), i32(-1i) * i32(-2147483648), arg_0.d)) >> (4294967295u % 32u), (arg_2.d & ~global1.e.d) << (global1.d % 32u), arg_2);
            var var_2 = -(~(max(arg_0.a.x, 1i) & arg_0.d));
            var var_3 = ~_wgslsmith_mod_i32((_wgslsmith_clamp_i32(1i, u_input.c.x, -10548i) << ((global1.e.b & 46210u) % 32u)) | -(var_1.c ^ u_input.a.x), 2147483647i);
            let var_4 = var_1;
        }
        switch (global1.e.c.x) {
            case 0i: {
                global2 = array<bool, 17>();
                global0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0.c.x));
                global2 = array<bool, 17>();
                let var_0 = 1000f;
                var var_1 = Struct_3(~_wgslsmith_sub_vec3_i32(~countOneBits(vec3<i32>(global1.e.c.x, global1.c, -1i)), vec3<i32>(~arg_0.a.x, ~global1.e.c.x, arg_2.c.x << (56908u % 32u))), _wgslsmith_add_i32(0i, -arg_0.a.x), arg_0, arg_2.c.x, Struct_1(-u_input.c, _wgslsmith_f_op_f32(var_0 * -862f), _wgslsmith_f_op_vec3_f32(arg_0.c + _wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(vec3<f32>(605f, var_0, var_0) * vec3<f32>(global1.b, 638f, -252f))))), _wgslsmith_dot_vec3_i32(vec3<i32>(arg_0.d, -1499i, i32(-1i) * -28960i), vec3<i32>(1i, 0i & u_input.b.x, arg_2.c.x))));
            }
            case -16577i: {
                var var_0 = vec3<bool>(!global1.e.a.x, arg_2.e, arg_1 > -1593f);
                let var_1 = (_wgslsmith_dot_vec3_u32(~countOneBits(vec3<u32>(10550u, 0u, arg_2.b)), ~max(vec3<u32>(u_input.e, 0u, 50947u), vec3<u32>(4294967295u, 4294967295u, global1.d))) & 4294967295u) & ~_wgslsmith_dot_vec3_u32(vec3<u32>(~global1.e.b, u_input.e, 4294967295u), ~vec3<u32>(17387u, 54236u, global1.d));
                global2 = array<bool, 17>();
                let var_2 = Struct_2(vec2<bool>(true, true), 22160u, ~global1.a.a.yz, ~(~_wgslsmith_dot_vec4_u32(~vec4<u32>(global1.d, global1.d, 1u, 4294967295u), ~vec4<u32>(u_input.e, 4294967295u, 13198u, u_input.e))), global2[_wgslsmith_index_u32(var_1, 17u)]);
                global1 = Struct_4(Struct_1(countOneBits(-vec4<i32>(u_input.c.x, arg_0.d, var_2.c.x, 0i)), arg_3, _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(arg_0.c + vec3<f32>(577f, arg_1, 665f))), ~0i), -251f, arg_2.c.x, ~(~75701u), Struct_2(vec2<bool>(!global1.e.e, !(!global2[_wgslsmith_index_u32(var_1, 17u)])), var_1, func_3(vec2<bool>(var_0.x, false), arg_0.d, func_5(global1.b, global2[_wgslsmith_index_u32(104225u, 17u)], false), _wgslsmith_clamp_u32(4294967295u, var_2.b, u_input.e)).a.yz & vec2<i32>(-24631i, -1i), _wgslsmith_dot_vec2_u32(reverseBits(~vec2<u32>(59296u, global1.d)), ~_wgslsmith_add_vec2_u32(vec2<u32>(0u, global1.e.d), vec2<u32>(1u, var_2.d))), global2[_wgslsmith_index_u32(var_1, 17u)]));
            }
            case 34515i: {
                global1 = Struct_4(Struct_1(u_input.c, _wgslsmith_f_op_f32(-global1.b), arg_0.c, _wgslsmith_mod_i32(i32(-1i) * -41954i, _wgslsmith_sub_i32(-u_input.c.x, _wgslsmith_dot_vec3_i32(vec3<i32>(global1.c, u_input.d, arg_2.c.x), u_input.a.zxx)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(arg_3))), arg_2.c.x << (u_input.e % 32u), _wgslsmith_dot_vec4_u32(min(countOneBits(vec4<u32>(34198u, arg_2.b, 0u, u_input.e)), ~_wgslsmith_mod_vec4_u32(vec4<u32>(u_input.e, 0u, 4294967295u, 0u), vec4<u32>(2417u, u_input.e, global1.d, 0u))), abs(~vec4<u32>(1u, 1u, 4441u, global1.d) | ~vec4<u32>(global1.e.b, u_input.e, 4294967295u, global1.e.d))), arg_2);
                let var_0 = Struct_4(Struct_1(firstLeadingBit(global1.a.a), arg_3, _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(-global1.a.c), _wgslsmith_f_op_vec3_f32(global1.a.c * vec3<f32>(arg_0.b, arg_0.b, -566f)))) * arg_0.c), 2147483647i), _wgslsmith_f_op_f32(select(func_3(!(!vec2<bool>(false, global1.e.a.x)), -45845i, global1.e.d, _wgslsmith_dot_vec3_u32(vec3<u32>(global1.e.d, global1.e.b, 1u), _wgslsmith_div_vec3_u32(vec3<u32>(u_input.e, global1.d, global1.e.d), vec3<u32>(36781u, 1u, u_input.e)))).c.x, _wgslsmith_f_op_f32(-arg_0.c.x), any(!select(vec3<bool>(false, true, false), vec3<bool>(true, false, true), global1.e.a.x)))), min(4120i, ~(firstTrailingBit(60016i) ^ firstLeadingBit(arg_0.d))), 56185u, Struct_2(!vec2<bool>(0i == u_input.a.x, u_input.e > 4294967295u), ~(4294967295u >> (~arg_2.b % 32u)), ~vec2<i32>(global1.c, arg_2.c.x) & reverseBits(~vec2<i32>(7182i, global1.a.a.x)), ~(~(41082u ^ arg_2.b)), true));
                var var_1 = arg_0.a;
            }
            case 22169i: {
                let var_0 = true;
                let var_1 = Struct_2(vec2<bool>(arg_2.a.x, var_0), _wgslsmith_sub_u32(10533u, _wgslsmith_dot_vec3_u32((vec3<u32>(4294967295u, 26171u, u_input.e) << (vec3<u32>(0u, u_input.e, u_input.e) % vec3<u32>(32u))) ^ vec3<u32>(u_input.e, 27307u, arg_2.b), vec3<u32>(~0u, ~34358u, ~u_input.e))), global1.e.c, global1.d, true);
            }
            default: {
                global0 = arg_1;
            }
        }
    }
    global1 = Struct_4(global1.a, arg_1, _wgslsmith_mod_i32(arg_2.c.x, -29028i), u_input.e >> (10104u % 32u), Struct_2(vec2<bool>(all(select(vec4<bool>(true, true, false, global2[_wgslsmith_index_u32(68803u, 17u)]), vec4<bool>(global2[_wgslsmith_index_u32(4294967295u, 17u)], true, true, true), global2[_wgslsmith_index_u32(15864u, 17u)])), (i32(-1i) * -21776i) >= global1.e.c.x), 0u, -global1.e.c, u_input.e, false));
    if (false) {
        let var_0 = Struct_4(func_3(!vec2<bool>(!arg_2.e, true), -62030i, select(reverseBits(u_input.e), ~_wgslsmith_clamp_u32(global1.e.d, 35240u, global1.e.b), arg_2.a.x), global1.e.b), _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-arg_1))), func_6(), u_input.e, Struct_2(vec2<bool>(all(vec3<bool>(global1.e.e, global1.e.e, arg_2.a.x)), 4294967295u > arg_2.d), max(_wgslsmith_sub_u32(13667u, ~arg_2.d), _wgslsmith_div_u32(25157u >> (u_input.e % 32u), _wgslsmith_dot_vec2_u32(vec2<u32>(68055u, 4294967295u), vec2<u32>(4294967295u, global1.e.b)))), arg_2.c, global1.e.b, global2[_wgslsmith_index_u32(_wgslsmith_div_u32(global1.d, global1.e.d), 17u)] && all(!vec4<bool>(global2[_wgslsmith_index_u32(u_input.e, 17u)], true, arg_2.e, arg_2.a.x))));
        loop {
            if (LOOP_COUNTERS[12u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
            var var_1 = var_0.a.c.zz;
        }
        let var_1 = Struct_4(Struct_1(~_wgslsmith_clamp_vec4_i32(_wgslsmith_add_vec4_i32(vec4<i32>(26740i, var_0.c, -32867i, arg_0.d), vec4<i32>(global1.e.c.x, 0i, 43071i, arg_0.a.x)), _wgslsmith_sub_vec4_i32(var_0.a.a, vec4<i32>(0i, global1.c, i32(-2147483648), arg_0.d)), vec4<i32>(-3968i, 63032i, u_input.d, -1i)), func_3(!var_0.e.a, u_input.d, ~6736u, 1u ^ reverseBits(arg_2.d)).b, _wgslsmith_f_op_vec3_f32(-vec3<f32>(243f, _wgslsmith_f_op_f32(-global1.a.c.x), func_3(vec2<bool>(global1.e.e, false), arg_0.a.x, global1.e.b, 0u).b)), firstTrailingBit(~_wgslsmith_div_i32(u_input.a.x, u_input.d))), func_3(vec2<bool>(select(true, global1.e.a.x, global2[_wgslsmith_index_u32(1073u, 17u)]) == any(vec4<bool>(false, false, global2[_wgslsmith_index_u32(global1.e.d, 17u)], var_0.e.a.x)), 4294967295u >= var_0.d), -(i32(-1i) * -arg_2.c.x), _wgslsmith_sub_u32(~arg_2.b, ~(~44185u)), ~0u).c.x, ~(-(~(~arg_2.c.x))), 1u, arg_2);
    }
    var var_0 = reverseBits(~vec3<u32>(arg_2.b, func_5(global1.a.b, any(vec2<bool>(true, global2[_wgslsmith_index_u32(1u, 17u)])), global1.e.a.x), 1u));
    return Struct_4(global1.a, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(arg_1))))), ~0i, _wgslsmith_clamp_u32(_wgslsmith_clamp_u32(_wgslsmith_add_u32(firstLeadingBit(arg_2.b), arg_2.b), abs(1u), _wgslsmith_mult_u32(1u, 1u)), 1u, arg_2.d), arg_2);
}

fn func_2(arg_0: Struct_4, arg_1: u32) -> Struct_2 {
    global1 = Struct_4(Struct_1(u_input.c ^ vec4<i32>(~0i, arg_0.c, -25120i, abs(55438i)), global1.a.c.x, _wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_div_f32(1046f, global1.b), _wgslsmith_f_op_f32(-173f * arg_0.b), _wgslsmith_f_op_f32(arg_0.a.b + 473f)) * vec3<f32>(_wgslsmith_div_f32(240f, arg_0.b), _wgslsmith_f_op_f32(arg_0.a.c.x - -2175f), _wgslsmith_f_op_f32(-1357f - 1872f))), arg_0.e.c.x), 139f, u_input.d, 21437u, arg_0.e);
    switch (_wgslsmith_add_i32(u_input.b.x, -22154i)) {
        case -1i: {
            global1 = func_7(func_3(!global1.e.a, arg_0.e.c.x, max(~arg_0.e.b, countOneBits(abs(arg_1))), arg_0.d), arg_0.b, global1.e, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(func_4(~vec3<u32>(arg_1, 16852u, 1u) & firstTrailingBit(vec3<u32>(4294967295u, u_input.e, arg_1)), -global1.c, global1.b)) + -490f));
        }
        case 0i: {
            for (var var_0 = 1i; true; ) {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                var var_1 = select(~vec3<u32>(arg_1, ~(~1u), _wgslsmith_dot_vec4_u32(~vec4<u32>(u_input.e, arg_1, u_input.e, 4294967295u), vec4<u32>(0u, u_input.e, 60062u, 0u))), vec3<u32>(_wgslsmith_sub_u32(u_input.e, u_input.e), arg_1, ~u_input.e) >> (_wgslsmith_sub_vec3_u32(max(vec3<u32>(arg_1, global1.d, 7949u), vec3<u32>(0u, 4294967295u, global1.d)), vec3<u32>(u_input.e, ~global1.d, firstTrailingBit(u_input.e))) % vec3<u32>(32u)), vec3<bool>(false, func_7(Struct_1(_wgslsmith_clamp_vec4_i32(vec4<i32>(u_input.a.x, arg_0.a.d, -1i, 0i), vec4<i32>(0i, u_input.d, 38675i, global1.a.d), global1.a.a), arg_0.a.c.x, _wgslsmith_f_op_vec3_f32(arg_0.a.c - arg_0.a.c), arg_0.e.c.x), -126f, global1.e, global1.b).e.a.x, true));
                break;
            }
        }
        case 39790i: {
        }
        case -30980i: {
            var var_0 = func_7(arg_0.a, arg_0.b, Struct_2(global1.e.a, 82916u, arg_0.a.a.xz, u_input.e >> (firstTrailingBit(arg_1 | 71767u) % 32u), false | (any(vec3<bool>(false, global1.e.e, global1.e.e)) || true)), -1135f);
            global1 = arg_0;
        }
        default: {
            switch (u_input.b.x) {
                default: {
                    var var_0 = Struct_3(arg_0.a.a.ywz, _wgslsmith_mod_i32(20305i, arg_0.e.c.x), func_3(arg_0.e.a, 13136i, ~(~_wgslsmith_mult_u32(11604u, 1u)), _wgslsmith_sub_u32(~arg_0.e.d, ~(~arg_1))), u_input.b.x, func_3(global1.e.a, global1.c, ~(~arg_0.d), _wgslsmith_dot_vec2_u32(_wgslsmith_mod_vec2_u32(~vec2<u32>(arg_1, 5461u), vec2<u32>(4294967295u, 21169u)), vec2<u32>(u_input.e, arg_0.d) >> (vec2<u32>(4294967295u, u_input.e) % vec2<u32>(32u)))));
                }
            }
            switch (arg_0.a.a.x | (global1.c | _wgslsmith_sub_i32((-4131i | u_input.d) & reverseBits(u_input.c.x), _wgslsmith_clamp_i32(-1i, select(16480i, arg_0.e.c.x, false), 1i)))) {
                case 13626i: {
                }
                case -27155i: {
                    var var_0 = vec2<u32>(_wgslsmith_dot_vec4_u32((countOneBits(vec4<u32>(u_input.e, u_input.e, global1.e.d, arg_1)) & _wgslsmith_div_vec4_u32(vec4<u32>(1u, 0u, global1.e.b, arg_0.e.d), vec4<u32>(61275u, u_input.e, 0u, 8561u))) | firstLeadingBit(vec4<u32>(1u, 1u, u_input.e, 1u) >> (vec4<u32>(0u, 4294967295u, global1.d, 1u) % vec4<u32>(32u))), countOneBits(firstLeadingBit(vec4<u32>(u_input.e, global1.d, 4294967295u, arg_1)))), func_5(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(round(-1060f)))), arg_0.e.a.x & true, false));
                }
                case -12959i: {
                    let var_0 = Struct_3(~(~func_3(arg_0.e.a, 2147483647i, 0u, countOneBits(global1.d)).a.xxw), ~u_input.d, arg_0.a, i32(-1i) * -42670i, arg_0.a);
                    global0 = arg_0.b;
                    global1 = Struct_4(var_0.e, _wgslsmith_f_op_f32(-var_0.c.c.x), -_wgslsmith_add_i32(~arg_0.e.c.x, func_3(arg_0.e.a, arg_0.c, u_input.e, 4294967295u).d) | 1i, 1315u, func_7(arg_0.a, _wgslsmith_f_op_f32(max(321f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global1.b)))), Struct_2(select(func_7(Struct_1(u_input.a, 1000f, var_0.c.c, -7296i), arg_0.b, global1.e, 1077f).e.a, arg_0.e.a, global2[_wgslsmith_index_u32(~u_input.e, 17u)]), ~_wgslsmith_mod_u32(arg_1, 0u), arg_0.a.a.zz & vec2<i32>(var_0.e.d, global1.c), 1u, !all(vec3<bool>(false, global1.e.a.x, false))), var_0.e.c.x).e);
                    var var_1 = true;
                    global2 = array<bool, 17>();
                }
                default: {
                    let var_0 = vec3<i32>(global1.a.a.x, -arg_0.c, -14086i);
                    var var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(global1.a.c.x, global1.b)));
                }
            }
        }
    }
    var var_0 = func_7(func_3(global1.e.a, _wgslsmith_mod_i32(0i, _wgslsmith_mod_i32(1i, i32(-1i) * -23849i)), reverseBits(~(~arg_0.e.d)), ~0u), _wgslsmith_f_op_f32(-arg_0.b), func_7(func_3(vec2<bool>(true & global1.e.a.x, func_7(Struct_1(vec4<i32>(2147483647i, -14826i, arg_0.c, global1.a.d), arg_0.b, global1.a.c, arg_0.e.c.x), arg_0.a.b, global1.e, -676f).e.a.x), arg_0.c, ~(~4294967295u), _wgslsmith_dot_vec4_u32(vec4<u32>(arg_1, 30769u, 52645u, 4294967295u), vec4<u32>(1u, u_input.e, arg_1, arg_0.e.b) ^ vec4<u32>(4294967295u, 0u, global1.d, arg_0.d))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_4(vec3<u32>(arg_0.d, u_input.e, arg_0.e.b), -47462i, -137f)))), func_7(arg_0.a, -294f, arg_0.e, -1285f).e, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_0.a.b) - _wgslsmith_f_op_f32(-1000f))).e, func_7(func_7(arg_0.a, 1062f, arg_0.e, _wgslsmith_f_op_f32(-576f - arg_0.a.b)).a, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_0.b) + 1281f), Struct_2(vec2<bool>(false, true), _wgslsmith_add_u32(firstTrailingBit(arg_0.e.d), ~72419u), global1.a.a.zy, _wgslsmith_dot_vec4_u32(~vec4<u32>(arg_0.d, 59147u, 4294967295u, global1.e.b), vec4<u32>(u_input.e, u_input.e, arg_1, 6061u)), func_7(Struct_1(vec4<i32>(1i, 1i, -43380i, 1i), -397f, global1.a.c, global1.e.c.x), global1.a.c.x, Struct_2(vec2<bool>(global2[_wgslsmith_index_u32(68681u, 17u)], arg_0.e.a.x), u_input.e, u_input.c.xw, 5128u, true), arg_0.b).e.e), global1.a.b).a.b).e.a;
    global0 = _wgslsmith_f_op_f32(-arg_0.b);
    global2 = array<bool, 17>();
    return arg_0.e;
}

fn func_8(arg_0: Struct_2) -> bool {
    if (!any(!select(vec4<bool>(global1.e.a.x, arg_0.a.x, true, true), vec4<bool>(global1.e.a.x, global2[_wgslsmith_index_u32(9396u, 17u)], arg_0.e, global2[_wgslsmith_index_u32(global1.d, 17u)]), vec4<bool>(false, false, false, true)))) {
        let var_0 = vec3<i32>(-1i, -(~_wgslsmith_dot_vec4_i32(vec4<i32>(global1.a.a.x, u_input.a.x, 2176i, u_input.b.x), u_input.a)), _wgslsmith_dot_vec2_i32(~(~reverseBits(u_input.a.zy)), abs(vec2<i32>(_wgslsmith_add_i32(-36083i, arg_0.c.x), arg_0.c.x))));
        return ~(~u_input.b.x) <= i32(-2147483648);
    }
    if (arg_0.a.x) {
        if (u_input.e > u_input.e) {
            let var_0 = Struct_3(vec3<i32>(0i, _wgslsmith_mult_i32(-8915i, -1i) & min(arg_0.c.x, 1i), 1i), -2777i, Struct_1(_wgslsmith_sub_vec4_i32(min(vec4<i32>(-1i, 9807i, 100140i, arg_0.c.x), ~vec4<i32>(arg_0.c.x, -44342i, u_input.a.x, arg_0.c.x)), global1.a.a), global1.a.b, vec3<f32>(global1.b, _wgslsmith_div_f32(global1.a.c.x, -897f), 1f), func_3(!(!vec2<bool>(false, global1.e.a.x)), arg_0.c.x, u_input.e, select(u_input.e, ~1u, false)).d), global1.c & i32(-2147483648), global1.a);
        }
    }
    loop {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        var var_0 = Struct_4(func_7(Struct_1(_wgslsmith_div_vec4_i32(vec4<i32>(arg_0.c.x, global1.e.c.x, arg_0.c.x, u_input.a.x), -vec4<i32>(u_input.b.x, 12753i, arg_0.c.x, global1.a.a.x)), 262f, _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(global1.a.c * global1.a.c)), 2147483647i), _wgslsmith_f_op_f32(-global1.b), func_2(func_7(global1.a, _wgslsmith_f_op_f32(-1729f + -460f), func_7(global1.a, global1.b, arg_0, 547f).e, _wgslsmith_f_op_f32(-1528f)), max(global1.e.b | 4294967295u, reverseBits(global1.d))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(-1493f)))).a, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-638f * _wgslsmith_f_op_f32(ceil(_wgslsmith_div_f32(global1.b, global1.b))))), 2147483647i << (~_wgslsmith_mod_u32(~arg_0.d, 1u) % 32u), arg_0.b, func_7(Struct_1(vec4<i32>(-55192i, _wgslsmith_div_i32(25460i, -30724i), firstTrailingBit(1i), 93241i), _wgslsmith_f_op_f32(global1.a.c.x * _wgslsmith_f_op_f32(-425f)), _wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(-global1.a.c))), -32644i), global1.b, func_2(func_7(func_7(Struct_1(vec4<i32>(2147483647i, -23317i, i32(-2147483648), -1i), global1.b, vec3<f32>(global1.a.b, 1994f, -634f), 0i), 1105f, Struct_2(arg_0.a, u_input.e, vec2<i32>(-11105i, arg_0.c.x), 4294967295u, true), global1.a.c.x).a, global1.b, func_2(Struct_4(Struct_1(vec4<i32>(i32(-2147483648), -15244i, 2147483647i, global1.e.c.x), 1111f, global1.a.c, 36160i), global1.b, global1.e.c.x, u_input.e, global1.e), 4294967295u), _wgslsmith_f_op_f32(ceil(global1.b))), 1u), func_3(global1.e.a, select(-1i, ~u_input.c.x, true), abs(3832u), arg_0.d).c.x).e);
        continue;
    }
    global2 = array<bool, 17>();
    for (var var_0 = -30406i; arg_0.a.x; global0 = _wgslsmith_f_op_f32(-global1.b)) {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
        let var_1 = vec3<bool>(func_7(func_7(global1.a, 1402f, func_2(func_7(global1.a, 245f, Struct_2(vec2<bool>(true, arg_0.a.x), 13037u, vec2<i32>(u_input.a.x, u_input.a.x), global1.e.d, global1.e.a.x), -141f), _wgslsmith_div_u32(u_input.e, 13727u)), func_7(global1.a, _wgslsmith_f_op_f32(global1.a.c.x - global1.b), global1.e, _wgslsmith_f_op_f32(-global1.a.c.x)).a.c.x).a, -1435f, Struct_2(vec2<bool>(false, false), min(global1.e.b, global1.e.d), abs(u_input.b), 4294967295u, func_7(func_7(Struct_1(vec4<i32>(u_input.c.x, u_input.d, 30644i, u_input.b.x), global1.b, global1.a.c, arg_0.c.x), 1004f, Struct_2(vec2<bool>(false, arg_0.e), arg_0.d, global1.e.c, global1.d, false), global1.b).a, _wgslsmith_div_f32(-1583f, global1.a.c.x), Struct_2(arg_0.a, 1u, vec2<i32>(16403i, arg_0.c.x), 0u, global2[_wgslsmith_index_u32(4294967295u, 17u)]), global1.b).e.a.x), 2163f).e.a.x, true, true);
        var var_2 = vec3<f32>(global1.b, _wgslsmith_f_op_f32(233f - _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-global1.b)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-219f) - global1.b) * func_3(!select(var_1.xz, vec2<bool>(global1.e.e, var_1.x), global1.e.a), _wgslsmith_dot_vec4_i32(vec4<i32>(arg_0.c.x, -78301i, 42077i, u_input.a.x), ~vec4<i32>(-56033i, 1743i, arg_0.c.x, global1.c)), u_input.e, _wgslsmith_add_u32(_wgslsmith_div_u32(u_input.e, 4294967295u), ~arg_0.b)).b));
        var var_3 = Struct_2(arg_0.a, 25226u, _wgslsmith_mult_vec2_i32(_wgslsmith_sub_vec2_i32(vec2<i32>(-23063i >> (arg_0.d % 32u), -arg_0.c.x), _wgslsmith_add_vec2_i32(vec2<i32>(-7168i, 2147483647i) & u_input.a.yz, select(vec2<i32>(4235i, 28665i), vec2<i32>(u_input.b.x, global1.e.c.x), vec2<bool>(global2[_wgslsmith_index_u32(arg_0.b, 17u)], false)))), abs(reverseBits(-vec2<i32>(1i, u_input.c.x)))), 4294967295u, global2[_wgslsmith_index_u32(abs(20697u), 17u)]);
    }
    return true;
}

fn func_1() -> vec3<u32> {
    let var_0 = select(!vec4<bool>(all(vec4<bool>(false, true, true, false)), global1.e.a.x, !(global1.e.c.x > -45690i), true), select(vec4<bool>((global1.a.c.x < 280f) | all(vec4<bool>(global1.e.a.x, true, true, global2[_wgslsmith_index_u32(global1.d, 17u)])), !global2[_wgslsmith_index_u32(44152u ^ global1.d, 17u)], all(vec3<bool>(global2[_wgslsmith_index_u32(u_input.e, 17u)], true, true)), 17963u <= global1.d), vec4<bool>(all(!vec2<bool>(global2[_wgslsmith_index_u32(u_input.e, 17u)], global2[_wgslsmith_index_u32(global1.e.b, 17u)])), -496f >= _wgslsmith_f_op_f32(-global1.b), global1.e.a.x, global2[_wgslsmith_index_u32(_wgslsmith_add_u32(u_input.e ^ global1.d, countOneBits(global1.e.b)), 17u)]), vec4<bool>(false, any(!vec3<bool>(true, global2[_wgslsmith_index_u32(global1.d, 17u)], global1.e.a.x)), func_8(func_2(Struct_4(Struct_1(vec4<i32>(19080i, global1.e.c.x, -37913i, 0i), global1.a.b, global1.a.c, 14964i), -1509f, global1.a.a.x, u_input.e, Struct_2(vec2<bool>(global1.e.a.x, true), 46834u, vec2<i32>(global1.a.a.x, global1.e.c.x), 41808u, false)), 22007u)), global2[_wgslsmith_index_u32(global1.e.d & min(global1.d, u_input.e), 17u)])), global2[_wgslsmith_index_u32(62199u, 17u)] | true);
    loop {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        break;
    }
    for (var var_1 = i32(-2147483648); ; var_1 -= 1i) {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
    }
    var var_1 = global1.e;
    var var_2 = func_7(func_7(Struct_1(-(~vec4<i32>(global1.e.c.x, var_1.c.x, u_input.a.x, i32(-2147483648))), _wgslsmith_f_op_f32(global1.a.b * global1.a.c.x), global1.a.c, 2147483647i & _wgslsmith_dot_vec2_i32(vec2<i32>(-15333i, -39624i), vec2<i32>(u_input.c.x, global1.c))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-898f) * _wgslsmith_f_op_f32(f32(-1f) * -3816f)), 1459f), Struct_2(func_7(global1.a, _wgslsmith_f_op_f32(-1025f), global1.e, _wgslsmith_f_op_f32(239f * global1.a.c.x)).e.a, var_1.d | select(4294967295u, global1.d, global2[_wgslsmith_index_u32(1u, 17u)]), global1.e.c, var_1.d, true), global1.b).a, -1855f, Struct_2(!(!var_0.xy), ~u_input.e | _wgslsmith_mult_u32(0u, 126u), func_2(func_7(Struct_1(vec4<i32>(var_1.c.x, var_1.c.x, u_input.d, -13796i), global1.a.b, vec3<f32>(658f, global1.b, -565f), 12907i), _wgslsmith_f_op_f32(-global1.b), func_7(global1.a, global1.b, global1.e, global1.a.b).e, _wgslsmith_f_op_f32(-global1.b)), ~_wgslsmith_div_u32(1u, 32465u)).c, _wgslsmith_mod_u32(1u, _wgslsmith_add_u32(~59221u, 0u)), 22526i <= var_1.c.x), _wgslsmith_f_op_f32(-global1.a.b));
    return vec3<u32>(~1u, 0u, _wgslsmith_dot_vec2_u32(vec2<u32>(abs(_wgslsmith_div_u32(global1.e.b, 1u)), firstTrailingBit(7564u)), ~(~vec2<u32>(global1.e.b, 338u))));
}

@compute
@workgroup_size(1)
fn main() {
    if (global2[_wgslsmith_index_u32(global1.e.d, 17u)]) {
        var var_0 = Struct_2(select(global1.e.a, !select(select(global1.e.a, vec2<bool>(true, false), vec2<bool>(true, false)), vec2<bool>(global1.e.a.x, global2[_wgslsmith_index_u32(u_input.e, 17u)]), global1.e.a), all(global1.e.a)), firstLeadingBit(_wgslsmith_dot_vec3_u32(~(vec3<u32>(57628u, 0u, 29983u) >> (vec3<u32>(1u, global1.e.b, global1.e.b) % vec3<u32>(32u))), abs(vec3<u32>(6260u, global1.e.b, u_input.e)) << (~vec3<u32>(57186u, 4294967295u, 4294967295u) % vec3<u32>(32u)))), ~u_input.a.yy, firstTrailingBit(max(global1.d, firstTrailingBit(u_input.e))), true);
    }
    global0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(1435f)));
    global2 = array<bool, 17>();
    var var_0 = _wgslsmith_dot_vec3_u32(reverseBits(vec3<u32>(global1.d, 3008u, u_input.e)) ^ func_1(), ~(~func_1())) == 73783u;
    var_0 = global2[_wgslsmith_index_u32(49670u | u_input.e, 17u)];
    let var_1 = ~_wgslsmith_clamp_vec2_u32(_wgslsmith_clamp_vec2_u32(~_wgslsmith_clamp_vec2_u32(vec2<u32>(global1.e.b, u_input.e), vec2<u32>(4294967295u, 19344u), vec2<u32>(u_input.e, 1u)), ~vec2<u32>(global1.e.b, global1.d) << (~vec2<u32>(global1.e.b, 0u) % vec2<u32>(32u)), reverseBits(vec2<u32>(7812u, global1.e.d) ^ vec2<u32>(global1.d, 37188u))), abs(vec2<u32>(u_input.e, 16686u)), countOneBits(_wgslsmith_sub_vec2_u32(~vec2<u32>(0u, u_input.e), ~vec2<u32>(0u, global1.e.b))));
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_sub_vec2_u32(var_1, vec2<u32>(12292u, reverseBits(~8050u))), 1u, ~(vec4<u32>(41660u, 0u, 1u, countOneBits(u_input.e)) >> (((vec4<u32>(global1.d, 1u, 44349u, 40904u) & vec4<u32>(var_1.x, 12246u, global1.e.b, u_input.e)) & ~vec4<u32>(var_1.x, 4294967295u, global1.e.d, 4294967295u)) % vec4<u32>(32u))), 5323i);
}

`;