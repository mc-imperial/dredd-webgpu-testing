export const input = [197,181,145,180,212,197,76,45,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [197,181,145,180,212,197,76,45,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[197,181,145,180,212,197,76,45]}
// Seed: 13523825388964844533

struct Struct_1 {
    a: vec4<u32>,
    b: vec4<u32>,
    c: vec2<i32>,
    d: u32,
    e: vec3<u32>,
}

struct Struct_2 {
    a: vec2<bool>,
    b: vec2<f32>,
    c: i32,
}

struct Struct_3 {
    a: vec3<f32>,
    b: bool,
    c: Struct_2,
}

struct Struct_4 {
    a: vec4<bool>,
    b: vec4<bool>,
    c: i32,
    d: vec2<i32>,
    e: Struct_3,
}

struct Struct_5 {
    a: i32,
    b: Struct_4,
    c: vec2<u32>,
}

struct UniformBuffer {
    a: vec2<i32>,
}

struct StorageBuffer {
    a: vec4<u32>,
    b: vec3<u32>,
    c: vec4<i32>,
    d: i32,
    e: vec2<u32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<Struct_4, 9>;

var<private> global1: Struct_4;

var<private> LOOP_COUNTERS: array<u32, 22>;

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn func_6() -> u32 {
    if (true) {
    }
    return reverseBits(min(~_wgslsmith_div_u32(0u, ~56920u), _wgslsmith_add_u32(_wgslsmith_div_u32(_wgslsmith_dot_vec4_u32(vec4<u32>(1796u, 0u, 21360u, 25729u), vec4<u32>(6347u, 0u, 1u, 79299u)), ~68038u), _wgslsmith_dot_vec2_u32(vec2<u32>(36026u, 4294967295u), _wgslsmith_clamp_vec2_u32(vec2<u32>(1u, 24777u), vec2<u32>(61279u, 4294967295u), vec2<u32>(4294967295u, 1u))))));
}

fn func_5(arg_0: i32, arg_1: vec2<i32>, arg_2: Struct_4) -> u32 {
    let var_0 = Struct_5(17473i, Struct_4(vec4<bool>(true, true, true, global1.a.x), arg_2.b, 45748i, _wgslsmith_div_vec2_i32(countOneBits(_wgslsmith_div_vec2_i32(vec2<i32>(global1.c, arg_1.x), vec2<i32>(arg_0, i32(-2147483648)))), vec2<i32>(arg_0, countOneBits(1i))), global1.e), _wgslsmith_mod_vec2_u32(~vec2<u32>(1u, 1u), vec2<u32>(abs(36413u), 74519u) >> (vec2<u32>(1u, 0u) % vec2<u32>(32u))));
    switch (~_wgslsmith_mult_i32(0i, arg_1.x)) {
        case 3010i: {
            global1 = arg_2;
            let var_1 = Struct_1(~vec4<u32>(abs(_wgslsmith_div_u32(var_0.c.x, var_0.c.x)), firstLeadingBit(1u >> (var_0.c.x % 32u)), func_6(), ~4294967295u), ~(_wgslsmith_add_vec4_u32(vec4<u32>(56801u, var_0.c.x, var_0.c.x, var_0.c.x), min(vec4<u32>(16077u, 1u, 1u, var_0.c.x), vec4<u32>(0u, var_0.c.x, 1u, var_0.c.x))) << (~(~vec4<u32>(47604u, 0u, var_0.c.x, var_0.c.x)) % vec4<u32>(32u))), vec2<i32>(_wgslsmith_mult_i32(_wgslsmith_dot_vec2_i32(vec2<i32>(i32(-2147483648), var_0.b.d.x), ~vec2<i32>(global1.e.c.c, arg_1.x)), 1i), i32(-2147483648)), _wgslsmith_dot_vec3_u32(~_wgslsmith_mod_vec3_u32(~vec3<u32>(0u, var_0.c.x, 37148u), vec3<u32>(var_0.c.x, 0u, var_0.c.x) ^ vec3<u32>(var_0.c.x, 0u, var_0.c.x)), ~vec3<u32>(~var_0.c.x, var_0.c.x, 0u)), reverseBits(abs(vec3<u32>(49012u, _wgslsmith_dot_vec3_u32(vec3<u32>(0u, var_0.c.x, 0u), vec3<u32>(0u, var_0.c.x, 1u)), var_0.c.x | 1u))));
            global1 = arg_2;
            let var_2 = select(vec4<bool>(!all(var_0.b.b.ww), any(!select(vec2<bool>(global1.e.b, true), global1.e.c.a, global1.e.c.a)), all(select(arg_2.b.yyy, !vec3<bool>(global1.e.c.a.x, var_0.b.e.c.a.x, global1.a.x), true)), var_0.b.e.c.a.x), var_0.b.b, var_0.b.e.b);
            global0 = array<Struct_4, 9>();
        }
        case 1i: {
            global1 = global0[_wgslsmith_index_u32(_wgslsmith_sub_u32(91524u, 1u), 9u)];
            if (global1.a.x) {
                var var_1 = ~vec2<u32>(0u, var_0.c.x);
                let var_2 = _wgslsmith_clamp_vec2_u32(vec2<u32>(abs(func_6()), _wgslsmith_div_u32(~var_0.c.x, abs(var_1.x)) >> (select(firstLeadingBit(17787u), var_1.x, arg_2.b.x) % 32u)), vec2<u32>(_wgslsmith_mod_u32(countOneBits(_wgslsmith_dot_vec2_u32(var_0.c, var_0.c)), var_1.x), 4294967295u), vec2<u32>(func_6(), firstLeadingBit(4294967295u)));
                let var_3 = ~(vec4<i32>(2147483647i, -21373i, 0i, _wgslsmith_sub_i32(-1i, global1.d.x)) << (vec4<u32>(firstTrailingBit(var_0.c.x), _wgslsmith_dot_vec2_u32(abs(var_0.c), max(vec2<u32>(var_2.x, var_1.x), var_0.c)), 4294967295u, ~(~var_1.x)) % vec4<u32>(32u)));
                var var_4 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(select(vec4<f32>(-159f, -823f, arg_2.e.c.b.x, global1.e.c.b.x), vec4<f32>(-504f, var_0.b.e.a.x, arg_2.e.c.b.x, 1000f), true)))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(arg_2.e.c.b.x, arg_2.e.c.b.x, 1881f, global1.e.c.b.x) * vec4<f32>(global1.e.c.b.x, var_0.b.e.c.b.x, arg_2.e.c.b.x, var_0.b.e.c.b.x))) * _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(1131f, arg_2.e.a.x, -1000f, arg_2.e.c.b.x) - vec4<f32>(global1.e.c.b.x, -422f, -1000f, 948f))))));
                var var_5 = select(global1.b.xyy, select(select(vec3<bool>(arg_0 < -1i, arg_2.e.b || var_0.b.e.c.a.x, var_0.b.b.x), vec3<bool>(var_2.x >= 0u, true, !var_0.b.e.c.a.x), false), select(vec3<bool>(arg_2.c >= 45924i, all(global1.e.c.a), false), arg_2.b.yyx, global1.b.wxw), !(!any(var_0.b.a.zyz))), !var_0.b.e.c.a.x);
            }
            let var_1 = select(var_0.b.b.wzz, select(var_0.b.b.zxz, select(vec3<bool>(all(vec3<bool>(var_0.b.b.x, false, global1.a.x)), false, true), global1.b.zzy, !(!global1.a.www)), select(vec3<bool>(any(vec3<bool>(global1.e.c.a.x, true, true)), true, true == var_0.b.e.b), arg_2.a.xzx, !(!var_0.b.b.x))), !vec3<bool>(!global1.e.b, true, false));
        }
        case 2147483647i: {
            let var_1 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(-var_0.b.e.a)))) - _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(select(var_0.b.e.a, vec3<f32>(689f, 497f, -514f), false)))));
            switch (2147483647i & min(min(arg_0, 1i), ~_wgslsmith_add_i32(-15374i, _wgslsmith_div_i32(i32(-2147483648), arg_1.x)))) {
                default: {
                    var var_2 = !arg_2.a;
                    var_2 = select(select(arg_2.a, var_0.b.a, var_2.x), select(!vec4<bool>(true, true, !arg_2.a.x, all(var_2.xz)), !(!(!vec4<bool>(true, var_0.b.a.x, var_2.x, arg_2.e.c.a.x))), !global1.b), arg_2.a);
                }
            }
            let var_2 = _wgslsmith_clamp_i32(min(26217i | ~_wgslsmith_add_i32(arg_2.e.c.c, 1i), global1.e.c.c), -(~_wgslsmith_sub_i32(15362i, global1.c ^ global1.d.x)), i32(-1i) * -81367i);
            switch (max(-_wgslsmith_mod_i32(-32204i, firstTrailingBit(-1i)), i32(-2147483648)) | -((~2147483647i ^ reverseBits(var_0.b.c)) << (~(~var_0.c.x) % 32u))) {
                case 0i: {
                }
                case i32(-2147483648): {
                    var var_3 = Struct_2(vec2<bool>(var_0.b.a.x, !all(arg_2.b.xwy)), vec2<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-1457f * _wgslsmith_f_op_f32(-var_0.b.e.c.b.x)))), _wgslsmith_f_op_f32(-arg_2.e.a.x)), 1i);
                    global0 = array<Struct_4, 9>();
                    var var_4 = _wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-var_1)), vec3<f32>(_wgslsmith_f_op_f32(var_3.b.x + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1466f + var_0.b.e.c.b.x))), var_1.x, arg_2.e.a.x)));
                    var var_5 = all(select(select(select(vec4<bool>(var_3.a.x, true, var_0.b.a.x, true), !global1.a, global1.e.c.a.x), select(global1.b, select(var_0.b.b, var_0.b.a, global1.b.x), select(global1.a, var_0.b.b, false)), vec4<bool>(select(true, arg_2.a.x, true), any(var_0.b.b), true, arg_2.b.x)), select(arg_2.a, select(select(arg_2.a, var_0.b.a, var_0.b.e.b), vec4<bool>(true, false, true, arg_2.b.x), vec4<bool>(arg_2.a.x, false, arg_2.b.x, global1.b.x)), all(global1.b)), false));
                    let var_6 = var_0.b.e;
                }
                case -1i: {
                }
                case -10971i: {
                    let var_3 = Struct_3(_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(exp2(global1.e.a)), _wgslsmith_f_op_vec3_f32(step(vec3<f32>(var_1.x, 750f, _wgslsmith_f_op_f32(min(766f, var_1.x))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(501f, -270f, var_1.x))))), select(global1.b.xzz, select(select(arg_2.b.ywz, var_0.b.b.yzy, global1.b.x), global1.b.xyx, select(vec3<bool>(true, true, arg_2.a.x), var_0.b.a.xwz, var_0.b.a.x)), !(arg_2.b.x & true)))), !all(!vec3<bool>(true, global1.a.x, var_0.b.e.b)), arg_2.e.c);
                    global0 = array<Struct_4, 9>();
                }
                default: {
                    global1 = var_0.b;
                    global0 = array<Struct_4, 9>();
                }
            }
            var var_3 = Struct_1(countOneBits(~(~_wgslsmith_mod_vec4_u32(vec4<u32>(0u, var_0.c.x, var_0.c.x, 4294967295u), vec4<u32>(var_0.c.x, 1u, 0u, var_0.c.x)))), select(vec4<u32>(_wgslsmith_div_u32(1u, 4294967295u), 1u, 44605u, 0u), ~vec4<u32>(4294967295u, var_0.c.x, 100125u, 41624u), any(!vec2<bool>(var_0.b.e.c.a.x, true))) | _wgslsmith_add_vec4_u32(vec4<u32>(var_0.c.x, var_0.c.x, var_0.c.x, var_0.c.x) & _wgslsmith_div_vec4_u32(vec4<u32>(69963u, 0u, var_0.c.x, 1u), vec4<u32>(19734u, var_0.c.x, var_0.c.x, 0u)), max(vec4<u32>(var_0.c.x, var_0.c.x, 11204u, var_0.c.x), ~vec4<u32>(36757u, var_0.c.x, 94742u, 1u))), abs(arg_2.d), var_0.c.x, reverseBits((vec3<u32>(var_0.c.x, 2345u, var_0.c.x) << (vec3<u32>(var_0.c.x, 4294967295u, 4294967295u) % vec3<u32>(32u))) << (_wgslsmith_clamp_vec3_u32(vec3<u32>(var_0.c.x, 0u, var_0.c.x), _wgslsmith_div_vec3_u32(vec3<u32>(1u, 1u, var_0.c.x), vec3<u32>(var_0.c.x, var_0.c.x, 58383u)), abs(vec3<u32>(50158u, var_0.c.x, var_0.c.x))) % vec3<u32>(32u))));
        }
        case 69480i: {
        }
        default: {
            var var_1 = 1i;
            for (var var_2 = 1i; var_2 <= -498i; ) {
                if (LOOP_COUNTERS[0u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
                var var_3 = !(!global1.a.yzw);
            }
            for (; true; ) {
                if (LOOP_COUNTERS[1u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
                var var_2 = var_0.b.e.c;
            }
            global1 = global0[_wgslsmith_index_u32(~max(~_wgslsmith_div_u32(~9520u, var_0.c.x), 4294967295u), 9u)];
            loop {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
                let var_2 = _wgslsmith_clamp_i32(_wgslsmith_clamp_i32(arg_2.e.c.c, global1.c, var_0.b.e.c.c), -1i >> (~(24879u & var_0.c.x) % 32u), arg_2.d.x);
                var var_3 = true;
            }
        }
    }
    switch (_wgslsmith_dot_vec2_i32((_wgslsmith_div_vec2_i32(vec2<i32>(var_0.b.d.x, 0i) >> (vec2<u32>(var_0.c.x, var_0.c.x) % vec2<u32>(32u)), _wgslsmith_add_vec2_i32(vec2<i32>(arg_1.x, var_0.a), vec2<i32>(-3160i, arg_1.x))) & var_0.b.d) << (abs(~vec2<u32>(44929u, var_0.c.x)) % vec2<u32>(32u)), ~arg_2.d)) {
        case -35407i: {
            if (global1.e.b) {
                let var_1 = arg_0 >> (var_0.c.x % 32u);
                global1 = Struct_4(vec4<bool>(!((arg_2.a.x || false) & any(var_0.b.b)), all(!select(vec2<bool>(global1.e.c.a.x, false), vec2<bool>(true, false), arg_2.b.x)), var_0.b.b.x, !(_wgslsmith_f_op_f32(-852f) > _wgslsmith_f_op_f32(-global1.e.a.x))), !arg_2.a, ~(-_wgslsmith_dot_vec2_i32(-vec2<i32>(global1.d.x, -26022i), _wgslsmith_mod_vec2_i32(vec2<i32>(global1.e.c.c, 11229i), vec2<i32>(var_1, -1i)))), _wgslsmith_mult_vec2_i32(-abs(~var_0.b.d), select(vec2<i32>(arg_2.e.c.c, firstTrailingBit(0i)), arg_1, false)), Struct_3(_wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(var_0.b.e.c.b.x, 716f, -627f))))), _wgslsmith_dot_vec2_i32(_wgslsmith_mod_vec2_i32(vec2<i32>(arg_0, 28865i), arg_2.d), vec2<i32>(arg_1.x, 2147483647i)) == (max(i32(-2147483648), -22336i) | arg_1.x), Struct_2(global1.b.ww, _wgslsmith_f_op_vec2_f32(global1.e.a.zx - _wgslsmith_f_op_vec2_f32(select(var_0.b.e.a.xy, vec2<f32>(arg_2.e.c.b.x, arg_2.e.a.x), vec2<bool>(var_0.b.b.x, var_0.b.b.x)))), global1.d.x)));
            }
            switch (global1.e.c.c) {
                default: {
                    global0 = array<Struct_4, 9>();
                }
            }
            for (var var_1 = i32(-2147483648); ~(~var_0.c.x) >= _wgslsmith_dot_vec2_u32(select(~(var_0.c & vec2<u32>(74413u, var_0.c.x)), var_0.c, var_0.b.e.b), var_0.c | var_0.c); var_1 -= 1i) {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            }
            for (var var_1 = i32(-2147483648); ; var_1 += 1i) {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                var_1 = i32(-1i) * -52214i;
                var var_2 = Struct_1(vec4<u32>(_wgslsmith_dot_vec3_u32(vec3<u32>(var_0.c.x, var_0.c.x, 66386u) & _wgslsmith_add_vec3_u32(vec3<u32>(10509u, 19276u, var_0.c.x), vec3<u32>(1u, var_0.c.x, 1u)), ~countOneBits(vec3<u32>(0u, var_0.c.x, var_0.c.x))), select(_wgslsmith_sub_u32(var_0.c.x, _wgslsmith_mod_u32(33979u, var_0.c.x)), _wgslsmith_dot_vec4_u32(_wgslsmith_clamp_vec4_u32(vec4<u32>(var_0.c.x, 88629u, var_0.c.x, 5627u), vec4<u32>(var_0.c.x, 1u, var_0.c.x, 15548u), vec4<u32>(var_0.c.x, var_0.c.x, var_0.c.x, var_0.c.x)), vec4<u32>(var_0.c.x, 0u, 50758u, var_0.c.x)), true), _wgslsmith_div_u32(var_0.c.x, _wgslsmith_sub_u32(~var_0.c.x, var_0.c.x << (var_0.c.x % 32u))), 1u), vec4<u32>(~select(~0u, 37594u, var_0.b.e.c.c < i32(-2147483648)), abs(var_0.c.x ^ var_0.c.x), 0u, 63782u), ~(-arg_2.d), func_6(), _wgslsmith_div_vec3_u32(min(~vec3<u32>(var_0.c.x, var_0.c.x, 34173u), vec3<u32>(firstTrailingBit(1u), 42141u, var_0.c.x)), ~select(vec3<u32>(var_0.c.x, 96433u, var_0.c.x) ^ vec3<u32>(1u, 49166u, 69682u), vec3<u32>(38892u, 4294967295u, var_0.c.x), true)));
                var_1 = 1i;
                global1 = var_0.b;
            }
            loop {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
            }
        }
        default: {
            let var_1 = reverseBits(vec3<i32>(firstTrailingBit(~arg_1.x), -11830i, ~arg_2.d.x)) << (max(vec3<u32>(firstLeadingBit(min(var_0.c.x, var_0.c.x)), var_0.c.x, ~(~var_0.c.x)), vec3<u32>(20009u, var_0.c.x, _wgslsmith_add_u32(49419u ^ var_0.c.x, 1u))) % vec3<u32>(32u));
            switch (20753i) {
                default: {
                    global0 = array<Struct_4, 9>();
                }
            }
            global1 = Struct_4(vec4<bool>(var_0.b.b.x, var_0.b.b.x, (true != (var_0.b.e.c.b.x > global1.e.c.b.x)) || arg_2.e.c.a.x, any(arg_2.b.xyx)), select(!(!(!vec4<bool>(arg_2.e.b, var_0.b.e.c.a.x, true, false))), vec4<bool>(true, true, var_0.b.e.b, true), all(vec2<bool>(global1.e.b | false, select(global1.a.x, arg_2.e.b, global1.a.x)))), -_wgslsmith_dot_vec4_i32(countOneBits(~vec4<i32>(u_input.a.x, -1i, 2147483647i, 0i)), -vec4<i32>(-136i, arg_2.c, -1i, -1i) & (vec4<i32>(0i, global1.d.x, u_input.a.x, var_1.x) >> (vec4<u32>(12568u, 55464u, var_0.c.x, 4294967295u) % vec4<u32>(32u)))), _wgslsmith_div_vec2_i32(arg_2.d >> (~(~vec2<u32>(var_0.c.x, 0u)) % vec2<u32>(32u)), vec2<i32>(var_0.a, 1i)), global1.e);
            global1 = var_0.b;
        }
    }
    if (!arg_2.a.x) {
    }
    var var_1 = -_wgslsmith_div_vec3_i32(select(vec3<i32>(arg_2.c, var_0.a, arg_1.x) ^ vec3<i32>(var_0.b.c, i32(-2147483648), arg_2.c), vec3<i32>(32058i, -25900i, 1i), all(var_0.b.b)), abs(_wgslsmith_mult_vec3_i32(vec3<i32>(u_input.a.x, 22958i, arg_2.e.c.c), vec3<i32>(global1.e.c.c, var_0.b.c, 27853i)))) << ((_wgslsmith_clamp_vec3_u32(max(vec3<u32>(var_0.c.x, 68986u, var_0.c.x), vec3<u32>(1u, var_0.c.x, var_0.c.x)), firstTrailingBit(_wgslsmith_div_vec3_u32(vec3<u32>(var_0.c.x, var_0.c.x, var_0.c.x), vec3<u32>(15401u, 1u, 16804u))), _wgslsmith_mult_vec3_u32(vec3<u32>(var_0.c.x, 23663u, 4066u) ^ vec3<u32>(var_0.c.x, var_0.c.x, var_0.c.x), firstTrailingBit(vec3<u32>(var_0.c.x, var_0.c.x, 13333u)))) & _wgslsmith_mod_vec3_u32(countOneBits(vec3<u32>(8449u, 4294967295u, 0u) | vec3<u32>(1u, var_0.c.x, 4294967295u)), vec3<u32>(1u, 40094u, 6327u))) % vec3<u32>(32u));
    return 1841u;
}

fn func_4(arg_0: Struct_2) -> u32 {
    var var_0 = global1.e;
    if (var_0.c.a.x) {
        var var_1 = Struct_5(abs(1i), global0[_wgslsmith_index_u32(_wgslsmith_mult_u32(~func_5(40589i, global1.d, Struct_4(vec4<bool>(true, false, arg_0.a.x, arg_0.a.x), vec4<bool>(true, true, var_0.b, false), global1.e.c.c, vec2<i32>(2147483647i, u_input.a.x), Struct_3(var_0.a, false, Struct_2(vec2<bool>(var_0.c.a.x, var_0.c.a.x), var_0.a.yz, 2147483647i)))) >> (~(~0u) % 32u), _wgslsmith_mult_u32(_wgslsmith_dot_vec2_u32(firstTrailingBit(vec2<u32>(53065u, 1u)), select(vec2<u32>(0u, 53350u), vec2<u32>(27955u, 0u), arg_0.a)), abs(countOneBits(4294967295u)))), 9u)], abs(vec2<u32>(4294967295u, _wgslsmith_add_u32(min(4294967295u, 11040u), 0u))));
        let var_2 = Struct_1(~abs(firstLeadingBit(~vec4<u32>(1u, 0u, 82842u, 1u))), vec4<u32>(11560u, 1u, 15773u, var_1.c.x), _wgslsmith_add_vec2_i32(var_1.b.d, vec2<i32>(~_wgslsmith_mod_i32(var_1.a, global1.d.x), _wgslsmith_mult_i32(select(global1.c, var_0.c.c, arg_0.a.x), -33298i))), var_1.c.x, ~(~vec3<u32>(var_1.c.x, ~0u, 7123u)));
    }
    var_0 = Struct_3(vec3<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(select(_wgslsmith_div_f32(239f, -393f), _wgslsmith_f_op_f32(exp2(var_0.a.x)), true)))), arg_0.b.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0.b.x)))), global1.b.x, arg_0);
    loop {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        var var_1 = Struct_2(!select(!vec2<bool>(true, global1.a.x), !var_0.c.a, select(vec2<bool>(var_0.b, true), !vec2<bool>(var_0.c.a.x, false), select(vec2<bool>(false, arg_0.a.x), vec2<bool>(true, arg_0.a.x), true))), _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_f_op_vec2_f32(max(vec2<f32>(-1261f, global1.e.c.b.x), var_0.c.b))))), global1.e.a.yy), i32(-2147483648));
        for (var var_2 = 9184i; var_2 != i32(-2147483648); var_2 -= 1i) {
            if (LOOP_COUNTERS[7u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        }
        continue;
    }
    if (~countOneBits(_wgslsmith_clamp_u32(~30085u, ~1486u, ~4294967295u)) > _wgslsmith_dot_vec4_u32(_wgslsmith_mult_vec4_u32(~(~vec4<u32>(8644u, 76245u, 4294967295u, 4294967295u)), vec4<u32>(1u, 1u, 1u, 1u)), ~vec4<u32>(~19597u, ~4294967295u, reverseBits(65324u), abs(1u)))) {
        let var_1 = Struct_3(vec3<f32>(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(exp2(arg_0.b.x)) - _wgslsmith_f_op_f32(f32(-1f) * -854f)))), 1f, _wgslsmith_f_op_f32(-arg_0.b.x)), true, Struct_2(select(select(!vec2<bool>(true, var_0.b), global1.b.xx, !vec2<bool>(arg_0.a.x, arg_0.a.x)), select(vec2<bool>(true, var_0.b), !var_0.c.a, !vec2<bool>(var_0.c.a.x, global1.b.x)), select(var_0.c.a, !vec2<bool>(true, global1.a.x), !vec2<bool>(var_0.c.a.x, global1.e.b))), global1.e.a.zx, 0i | _wgslsmith_clamp_i32(_wgslsmith_mod_i32(-107776i, -1i), -arg_0.c, -1i)));
        let var_2 = _wgslsmith_mod_vec4_u32(_wgslsmith_clamp_vec4_u32(reverseBits(~vec4<u32>(0u, 11515u, 82791u, 21906u)), vec4<u32>(1u, 1u, 1u, 1u), select(~vec4<u32>(24159u, 127887u, 10907u, 5181u), firstTrailingBit(vec4<u32>(5573u, 4079u, 4294967295u, 0u)), global1.b)) << (firstLeadingBit(_wgslsmith_div_vec4_u32(~vec4<u32>(4466u, 4294967295u, 47161u, 29437u), vec4<u32>(1u, 1u, 1u, 1u))) % vec4<u32>(32u)), vec4<u32>(select(_wgslsmith_div_u32(16623u, firstTrailingBit(4294967295u)), 1u, !global1.a.x), 62567u, _wgslsmith_mult_u32(15251u, ~(~11920u)), 1u));
        global0 = array<Struct_4, 9>();
        var var_3 = min(-_wgslsmith_div_vec2_i32(reverseBits(~global1.d), vec2<i32>(-1i, var_1.c.c) ^ (global1.d | u_input.a)), _wgslsmith_mod_vec2_i32(abs(vec2<i32>(var_0.c.c, -42344i)), ~(~u_input.a)) >> (var_2.xx % vec2<u32>(32u)));
        var_3 = global1.d;
    }
    return 15859u;
}

fn func_3() -> Struct_4 {
    var var_0 = _wgslsmith_div_u32(~1u, _wgslsmith_add_u32(func_4(global1.e.c), 19881u)) & ~_wgslsmith_dot_vec2_u32(~abs(vec2<u32>(1u, 0u)), vec2<u32>(_wgslsmith_add_u32(11112u, 10215u), 1u));
    if (all(!select(global1.a.xzz, !select(vec3<bool>(global1.a.x, true, false), vec3<bool>(true, global1.e.c.a.x, false), false), select(global1.a.xwz, select(global1.a.yyx, global1.b.yxx, true), true)))) {
        loop {
            if (LOOP_COUNTERS[8u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
            var var_1 = false;
            let var_2 = Struct_1(~vec4<u32>(1u, func_6(), ~func_4(Struct_2(global1.e.c.a, vec2<f32>(-379f, global1.e.c.b.x), u_input.a.x)), reverseBits(4294967295u) << (_wgslsmith_mod_u32(10086u, 1u) % 32u)), vec4<u32>(func_4(global1.e.c) >> (1u % 32u), ~1u, 0u, 1u), u_input.a, ~(1u | _wgslsmith_mult_u32(firstTrailingBit(29849u), 1u)), abs(_wgslsmith_clamp_vec3_u32(vec3<u32>(abs(94367u), ~1u, 112388u), _wgslsmith_clamp_vec3_u32(vec3<u32>(1u, 1u, 1u), vec3<u32>(43601u, 9871u, 129951u), vec3<u32>(52932u, 0u, 46667u)), firstTrailingBit(vec3<u32>(26604u, 56428u, 7075u)))));
            var var_3 = select(vec2<bool>(global1.e.b, global1.e.b), global1.b.yw, true);
        }
        return global0[_wgslsmith_index_u32(1u, 9u)];
    }
    loop {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
    }
    var var_1 = global1.e.c;
    for (var var_2 = 32256i; var_2 >= -4946i; ) {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        var var_3 = 1u;
        var var_4 = vec2<u32>(1u, 1u) << (_wgslsmith_div_vec2_u32(vec2<u32>(1u, 1u), _wgslsmith_mult_vec2_u32(min(vec2<u32>(1u, 1u), ~vec2<u32>(0u, 1u)), ~_wgslsmith_clamp_vec2_u32(vec2<u32>(7150u, 0u), vec2<u32>(41386u, 7777u), vec2<u32>(27279u, 11282u)))) % vec2<u32>(32u));
        var var_5 = (abs(vec4<i32>(i32(-1i) * -1i, reverseBits(u_input.a.x), max(global1.c, -1i), i32(-2147483648))) | vec4<i32>(var_1.c >> (~1u % 32u), -1i, min(global1.d.x ^ -22789i, abs(0i)), select(-30902i, u_input.a.x << (var_4.x % 32u), all(var_1.a)))) >> (vec4<u32>(_wgslsmith_div_u32(~abs(var_4.x), max(~var_4.x, 47598u)), ~abs(4294967295u), func_5(u_input.a.x & global1.c, select(firstLeadingBit(u_input.a), ~vec2<i32>(-22640i, global1.e.c.c), vec2<bool>(var_1.a.x, global1.e.c.a.x)), Struct_4(global1.b, !global1.b, _wgslsmith_sub_i32(u_input.a.x, 1i), firstLeadingBit(vec2<i32>(32119i, 15362i)), global1.e)), var_4.x) % vec4<u32>(32u));
    }
    return Struct_4(!global1.a, !global1.b, u_input.a.x, ~vec2<i32>(u_input.a.x, i32(-1i) * 0i), global1.e);
}

fn func_2(arg_0: f32) -> Struct_4 {
    global0 = array<Struct_4, 9>();
    global0 = array<Struct_4, 9>();
    global1 = func_3();
    if (true) {
        for (; ; ) {
            if (LOOP_COUNTERS[11u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
            break;
        }
        return func_3();
    }
    let var_0 = u_input.a.x;
    return Struct_4(select(select(global1.a, global1.a, global1.e.c.a.x), select(vec4<bool>(global1.a.x, any(vec2<bool>(true, false)), arg_0 != global1.e.c.b.x, global1.a.x), !global1.b, func_3().a), vec4<bool>(any(global1.a), true == all(global1.e.c.a), !global1.a.x, global1.b.x)), vec4<bool>(true & global1.a.x, func_3().a.x && true, global1.a.x, _wgslsmith_f_op_f32(min(global1.e.c.b.x, _wgslsmith_f_op_f32(-937f))) < arg_0), var_0, -u_input.a, global1.e);
}

fn func_7(arg_0: Struct_5, arg_1: vec4<f32>) -> u32 {
    let var_0 = arg_0.b.e.a.x;
    var var_1 = arg_0.b.b.x;
    for (var var_2: i32; ; var_2 -= 1i) {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        var_1 = ~firstTrailingBit(4294967295u) > _wgslsmith_mod_u32(max(~(~1u), ~arg_0.c.x), 19129u);
        let var_3 = arg_0.c.x & _wgslsmith_dot_vec3_u32(~_wgslsmith_sub_vec3_u32(_wgslsmith_sub_vec3_u32(vec3<u32>(arg_0.c.x, 1u, 15551u), vec3<u32>(arg_0.c.x, 4294967295u, 15062u)), ~vec3<u32>(19297u, 91403u, 1u)), _wgslsmith_add_vec3_u32(vec3<u32>(51328u, reverseBits(1u), _wgslsmith_mod_u32(arg_0.c.x, 4294967295u)), ~vec3<u32>(arg_0.c.x, 4294967295u, 1u)));
    }
    if (true) {
        var var_2 = vec3<bool>(46233i == -_wgslsmith_dot_vec3_i32(vec3<i32>(i32(-2147483648), global1.e.c.c, u_input.a.x), vec3<i32>(arg_0.b.c, -1i, 18159i)), !(1i > u_input.a.x), true);
    }
    if (all(!global1.a)) {
        if (true) {
            var var_2 = vec3<f32>(_wgslsmith_f_op_f32(-arg_1.x), 1381f, -1550f);
            let var_3 = global1.d.x;
            global1 = arg_0.b;
            let var_4 = Struct_5(~u_input.a.x, func_3(), ~(~(~vec2<u32>(0u, 1u)) >> (_wgslsmith_div_vec2_u32(arg_0.c << (arg_0.c % vec2<u32>(32u)), select(arg_0.c, vec2<u32>(arg_0.c.x, 15735u), arg_0.b.e.c.a)) % vec2<u32>(32u))));
        }
        return 46789u;
    }
    return 1u;
}

fn func_1() -> f32 {
    if (any(!select(select(global1.a, !vec4<bool>(global1.b.x, true, global1.e.c.a.x, global1.b.x), !global1.a), global1.a, vec4<bool>(global1.b.x, true, global1.a.x, true)))) {
        for (var var_0 = -35827i; var_0 > 0i; global0 = array<Struct_4, 9>()) {
            if (LOOP_COUNTERS[13u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
            let var_1 = vec4<u32>(1u, countOneBits(22858u), func_7(Struct_5(18657i, func_2(_wgslsmith_f_op_f32(max(global1.e.a.x, 103f))), vec2<u32>(1u, 1u)), vec4<f32>(_wgslsmith_f_op_f32(-1342f), _wgslsmith_f_op_f32(f32(-1f) * -539f), global1.e.c.b.x, _wgslsmith_f_op_f32(f32(-1f) * -1000f))), ~(_wgslsmith_dot_vec2_u32(_wgslsmith_mod_vec2_u32(vec2<u32>(19664u, 35127u), vec2<u32>(4294967295u, 44726u)), vec2<u32>(1u, 1u)) & (_wgslsmith_mult_u32(0u, 4294967295u) << (0u % 32u))));
            var_0 = firstTrailingBit(-4932i);
            continue;
        }
        var var_0 = Struct_5(-(global1.c << (1u % 32u)), global0[_wgslsmith_index_u32(1u, 9u)], select(vec2<u32>(1u, 1u), countOneBits(~select(vec2<u32>(1u, 6682u), vec2<u32>(4294967295u, 67292u), global1.b.wz)), func_2(global1.e.c.b.x).e.c.a));
        var var_1 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_div_vec2_f32(global1.e.a.xz, _wgslsmith_div_vec2_f32(vec2<f32>(var_0.b.e.c.b.x, var_0.b.e.c.b.x), _wgslsmith_f_op_vec2_f32(var_0.b.e.a.yx - vec2<f32>(1170f, 204f))))));
        switch (func_3().d.x) {
            case -1i: {
            }
            case 0i: {
            }
            default: {
                let var_2 = -1000f;
                var_1 = vec2<f32>(-417f, func_2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(144f - _wgslsmith_f_op_f32(-511f * var_1.x)))).e.a.x);
            }
        }
        let var_2 = Struct_4(vec4<bool>(!all(select(vec3<bool>(false, false, false), var_0.b.a.wwy, global1.b.x)), !(!(!var_0.b.a.x)), !(!(false && global1.b.x)), var_0.b.b.x), !var_0.b.b, 1i >> ((var_0.c.x << (_wgslsmith_mod_u32(var_0.c.x, 4294967295u) % 32u)) % 32u), ~(~((vec2<i32>(u_input.a.x, i32(-2147483648)) & global1.d) >> (_wgslsmith_mod_vec2_u32(vec2<u32>(var_0.c.x, var_0.c.x), var_0.c) % vec2<u32>(32u)))), Struct_3(vec3<f32>(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(max(-1279f, 314f)))), -741f, _wgslsmith_f_op_f32(-386f)), var_1.x < _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-global1.e.c.b.x))), var_0.b.e.c));
    }
    global1 = Struct_4(select(vec4<bool>(!global1.e.c.a.x, any(vec2<bool>(true, true)), true, true), global1.b, all(global1.a.wzw) && global1.e.c.a.x), !global1.b, u_input.a.x, -countOneBits((global1.d << (vec2<u32>(48985u, 1u) % vec2<u32>(32u))) >> (vec2<u32>(1u, 11546u) % vec2<u32>(32u))), global1.e);
    var var_0 = global0[_wgslsmith_index_u32(4294967295u, 9u)];
    for (var var_1 = i32(-2147483648); var_1 > 0i; var_1 -= 1i) {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
    }
    let var_1 = -func_2(var_0.e.a.x).d;
    return _wgslsmith_div_f32(_wgslsmith_f_op_f32(838f * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global1.e.c.b.x) + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(exp2(var_0.e.a.x)) + -704f))), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(-1769f))))));
}

fn func_8(arg_0: vec3<u32>, arg_1: Struct_1, arg_2: f32, arg_3: vec2<f32>) -> Struct_4 {
    loop {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
    }
    var var_0 = vec4<u32>(4294967295u ^ ~func_5(global1.c, ~global1.d, global0[_wgslsmith_index_u32(~arg_1.b.x, 9u)]), ~(~arg_0.x), ~(~4294967295u), arg_0.x);
    global1 = global0[_wgslsmith_index_u32(_wgslsmith_div_u32(_wgslsmith_sub_u32(var_0.x, ~4294967295u), 4294967295u), 9u)];
    loop {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        for (var var_1 = 47997i; ; global1 = Struct_4(vec4<bool>((true != global1.e.c.a.x) & func_2(_wgslsmith_f_op_f32(ceil(arg_2))).b.x, global1.e.b, !func_3().e.c.a.x | true, any(vec2<bool>(true, !global1.b.x))), global1.a, firstLeadingBit(abs(1i)), firstLeadingBit(vec2<i32>(u_input.a.x, u_input.a.x)), func_3().e)) {
            if (LOOP_COUNTERS[17u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
            break;
        }
        let var_1 = func_3().e.c;
        break;
    }
    switch (reverseBits(arg_1.c.x)) {
        case 2147483647i: {
            global0 = array<Struct_4, 9>();
            if (_wgslsmith_f_op_f32(global1.e.c.b.x * _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-global1.e.a.x), -1916f))))) > arg_2) {
                let var_1 = ~arg_1.b;
            }
            loop {
                if (LOOP_COUNTERS[18u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
                global0 = array<Struct_4, 9>();
                var var_1 = func_3().e.c.b.x;
                break;
            }
            for (var var_1 = -16529i; ~_wgslsmith_div_i32(abs(abs(-8432i)), u_input.a.x) <= -u_input.a.x; global0 = array<Struct_4, 9>()) {
                if (LOOP_COUNTERS[19u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
                var var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1000f));
                var_2 = 117f;
                global1 = func_3();
                global0 = array<Struct_4, 9>();
                var var_3 = arg_2;
            }
        }
        case i32(-2147483648): {
            global0 = array<Struct_4, 9>();
            let var_1 = arg_1;
            var_0 = _wgslsmith_sub_vec4_u32(vec4<u32>(34231u, 4294967295u, arg_0.x, 4294967295u), ~(_wgslsmith_clamp_vec4_u32(~var_1.a, ~vec4<u32>(4294967295u, 0u, 747u, var_1.d), countOneBits(vec4<u32>(13802u, var_1.a.x, 47640u, arg_1.a.x))) >> (~(arg_1.b & arg_1.b) % vec4<u32>(32u))));
            for (; all(!(!(!(!vec3<bool>(global1.e.c.a.x, global1.b.x, global1.b.x))))); ) {
                if (LOOP_COUNTERS[20u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
                var var_2 = _wgslsmith_add_vec2_u32(min(_wgslsmith_mod_vec2_u32(~arg_0.zz, firstLeadingBit(var_0.yx)), ~(arg_1.b.zy >> (vec2<u32>(var_1.e.x, var_0.x) % vec2<u32>(32u)))) << (vec2<u32>(_wgslsmith_mult_u32(_wgslsmith_sub_u32(arg_0.x, var_0.x), arg_1.e.x), arg_1.b.x) % vec2<u32>(32u)), reverseBits(vec2<u32>(1u, _wgslsmith_dot_vec4_u32(arg_1.a, var_1.b)) ^ _wgslsmith_mod_vec2_u32(arg_1.a.xw, ~var_0.xx)));
                var var_3 = !(!func_2(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(700f)) * _wgslsmith_f_op_f32(arg_3.x - 2139f))).b.xzx);
                var_0 = vec4<u32>(1851u, var_0.x, 0u | var_2.x, var_2.x);
            }
        }
        case 46855i: {
            global0 = array<Struct_4, 9>();
            switch (12250i) {
                default: {
                    var var_1 = global1.a;
                    var var_2 = _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(arg_2 - -697f), _wgslsmith_f_op_f32(sign(-611f)))) + vec2<f32>(_wgslsmith_f_op_f32(-func_2(arg_3.x).e.c.b.x), 2352f)) - _wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(select(_wgslsmith_div_f32(global1.e.a.x, -1141f), _wgslsmith_f_op_f32(-1274f - 314f), true)), global1.e.a.x)));
                    var var_3 = -379f;
                    var var_4 = Struct_1(vec4<u32>(func_6(), ~9994u & (4294967295u << (_wgslsmith_div_u32(arg_1.d, arg_1.e.x) % 32u)), abs(0u), _wgslsmith_dot_vec2_u32(~_wgslsmith_mod_vec2_u32(var_0.xw, var_0.ww), arg_1.e.zx)), arg_1.a, min(reverseBits(~_wgslsmith_mult_vec2_i32(u_input.a, vec2<i32>(426i, 43732i))), ~(-u_input.a << (_wgslsmith_clamp_vec2_u32(vec2<u32>(2372u, 0u), arg_0.yx, vec2<u32>(arg_0.x, 52116u)) % vec2<u32>(32u)))), ~(~min(1u, 1u)), min(_wgslsmith_mod_vec3_u32(vec3<u32>(27795u, ~arg_1.a.x, 1u), _wgslsmith_mod_vec3_u32(~vec3<u32>(arg_1.e.x, arg_0.x, 4814u), arg_0)), _wgslsmith_mult_vec3_u32(vec3<u32>(~4294967295u, min(4294967295u, var_0.x), 1u), min(vec3<u32>(10334u, arg_0.x, 58243u), vec3<u32>(1u, 34856u, arg_0.x)))));
                }
            }
            if (global1.b.x) {
                var var_1 = ~max(-_wgslsmith_add_vec4_i32(-vec4<i32>(2147483647i, arg_1.c.x, global1.d.x, global1.e.c.c), _wgslsmith_clamp_vec4_i32(vec4<i32>(global1.d.x, arg_1.c.x, arg_1.c.x, global1.d.x), vec4<i32>(u_input.a.x, u_input.a.x, global1.c, global1.e.c.c), vec4<i32>(0i, 38470i, u_input.a.x, arg_1.c.x))), vec4<i32>(_wgslsmith_div_i32(arg_1.c.x, abs(i32(-2147483648))), 8180i, abs(_wgslsmith_div_i32(global1.d.x, -43908i)), global1.e.c.c & _wgslsmith_div_i32(-1i, 8481i)));
            }
        }
        default: {
            if (!global1.a.x & true) {
                let var_1 = ~(-(~firstLeadingBit(vec3<i32>(-2919i, u_input.a.x, global1.c))) >> (_wgslsmith_clamp_vec3_u32(~vec3<u32>(arg_1.b.x, var_0.x, 84768u), var_0.wzx, var_0.wxy ^ ~vec3<u32>(var_0.x, 0u, arg_1.e.x)) % vec3<u32>(32u)));
            }
            var var_1 = arg_1;
            return Struct_4(select(global1.a, global1.b, global1.e.c.a.x), global1.a, -(~arg_1.c.x ^ u_input.a.x), vec2<i32>(-u_input.a.x, arg_1.c.x), Struct_3(vec3<f32>(_wgslsmith_f_op_f32(arg_2 * _wgslsmith_f_op_f32(-global1.e.c.b.x)), _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-arg_3.x))), 873f), true, global1.e.c));
        }
    }
    return Struct_4(!select(global1.b, vec4<bool>(true, select(global1.b.x, true, false), arg_3.x <= -159f, all(vec2<bool>(false, global1.b.x))), !func_3().a), global1.a, ~(1i | _wgslsmith_mod_i32(arg_1.c.x, global1.e.c.c)) << (arg_1.b.x % 32u), vec2<i32>(-1i) * -vec2<i32>(arg_1.c.x, -27432i << (var_0.x % 32u)), Struct_3(vec3<f32>(global1.e.a.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(-379f))), 836f), arg_0.x > ~0u, func_2(arg_3.x).e.c));
}

@compute
@workgroup_size(1)
fn main() {
    global0 = array<Struct_4, 9>();
    let var_0 = func_8(abs(select(vec3<u32>(firstTrailingBit(4294967295u), ~1u, 11420u), vec3<u32>(80794u, 4294967295u, ~44524u), global1.a.x & true)), Struct_1(vec4<u32>(~reverseBits(4577u), 1u, min(firstTrailingBit(4294967295u), 1u), 56487u), select(vec4<u32>(~102707u, 1u, 15476u, 1u), vec4<u32>(1u, 1u, 1u, 1u), !(global1.c != i32(-2147483648))), global1.d, _wgslsmith_dot_vec3_u32(vec3<u32>(1u, 1u, 1u), vec3<u32>(firstLeadingBit(26387u), 21582u, 1u)), countOneBits(vec3<u32>(51457u, ~11297u, 1u))), _wgslsmith_f_op_f32(func_1()), global1.e.a.yz);
    var var_1 = select(abs(vec3<i32>(-2147483647i, global1.c, _wgslsmith_mod_i32(-1i, -9341i))) | vec3<i32>(u_input.a.x, abs(32207i), ~(-1i)), abs(reverseBits((vec3<i32>(10647i, var_0.d.x, -2692i) << (vec3<u32>(6753u, 0u, 1u) % vec3<u32>(32u))) ^ ~vec3<i32>(2147483647i, var_0.c, 91328i))), vec3<bool>(true, any(!vec4<bool>(false, true, var_0.b.x, false)) & true, global1.a.x));
    var var_2 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(func_1()) * _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(step(-431f, -292f))))))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(_wgslsmith_div_f32(_wgslsmith_f_op_f32(trunc(-1021f)), var_0.e.a.x))) * _wgslsmith_f_op_f32(global1.e.a.x + global1.e.c.b.x)));
    var var_3 = func_2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1449f + var_0.e.a.x)));
    loop {
        if (LOOP_COUNTERS[21u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
    }
    let x = u_input.a;
    s_output = StorageBuffer(~min(vec4<u32>(1u, 1u, 1u, 1u), ~(~vec4<u32>(51498u, 1u, 42360u, 4294967295u))), abs(~select(~vec3<u32>(3234u, 34588u, 0u), _wgslsmith_clamp_vec3_u32(vec3<u32>(62069u, 12781u, 1521u), vec3<u32>(0u, 50440u, 0u), vec3<u32>(0u, 2379u, 4294967295u)), !var_0.a.zwz)), min(_wgslsmith_sub_vec4_i32(vec4<i32>(var_3.d.x, 1i, var_0.c, u_input.a.x), vec4<i32>(3359i, var_3.e.c.c, -91294i, -1i)) ^ (vec4<i32>(22492i, -88024i, global1.c, var_3.d.x) ^ vec4<i32>(1i, var_1.x, -65656i, var_0.e.c.c)), vec4<i32>(1i, _wgslsmith_add_i32(58355i, var_3.d.x), 2147483647i, abs(var_3.d.x))) & ((vec4<i32>(-1i) * -vec4<i32>(-3284i, var_1.x, var_0.e.c.c, i32(-2147483648))) ^ reverseBits(vec4<i32>(var_0.c, 71089i, 1i, 51010i))), ~reverseBits(global1.c), ~_wgslsmith_div_vec2_u32(vec2<u32>(1u, 1u), vec2<u32>(1u, _wgslsmith_add_u32(0u, 29997u))));
}

`;