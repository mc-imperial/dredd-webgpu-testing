export const input = [59,234,49,92,220,165,114,139,133,71,239,230,37,84,16,127,174,239,154,20,59,157,8,115,252,18,206,233,97,221,50,103,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [59,234,49,92,220,165,114,139,133,71,239,230,37,84,16,127,174,239,154,20,59,157,8,115,252,18,206,233,97,221,50,103,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[59,234,49,92,220,165,114,139,133,71,239,230,37,84,16,127,174,239,154,20,59,157,8,115,252,18,206,233,97,221,50,103]}
// Seed: 7350570545330399536

struct Struct_1 {
    a: f32,
}

struct Struct_2 {
    a: vec3<u32>,
    b: f32,
    c: i32,
    d: vec2<i32>,
    e: vec4<bool>,
}

struct Struct_3 {
    a: vec3<u32>,
    b: f32,
}

struct Struct_4 {
    a: f32,
    b: Struct_2,
    c: i32,
    d: vec4<u32>,
    e: Struct_1,
}

struct Struct_5 {
    a: vec2<f32>,
    b: f32,
    c: f32,
}

struct UniformBuffer {
    a: i32,
    b: vec2<u32>,
    c: i32,
    d: u32,
    e: vec2<i32>,
}

struct StorageBuffer {
    a: u32,
    b: u32,
    c: i32,
    d: vec2<f32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: Struct_2 = Struct_2(vec3<u32>(12485u, 57470u, 1u), 430f, i32(-2147483648), vec2<i32>(i32(-2147483648), i32(-2147483648)), vec4<bool>(false, true, false, false));

var<private> global1: f32 = -285f;

var<private> LOOP_COUNTERS: array<u32, 36>;

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn func_6(arg_0: Struct_5, arg_1: Struct_4) -> bool {
    let var_0 = _wgslsmith_sub_vec4_i32(_wgslsmith_clamp_vec4_i32(~vec4<i32>(global0.c, arg_1.b.c, _wgslsmith_clamp_i32(global0.d.x, -21999i, u_input.e.x), u_input.e.x), _wgslsmith_clamp_vec4_i32(_wgslsmith_mod_vec4_i32(reverseBits(vec4<i32>(arg_1.b.c, u_input.a, arg_1.b.c, global0.c)), _wgslsmith_add_vec4_i32(vec4<i32>(arg_1.c, -1i, global0.d.x, u_input.c), vec4<i32>(global0.d.x, 2147483647i, -31710i, global0.d.x))), vec4<i32>(u_input.e.x, global0.d.x, u_input.a, global0.c), -vec4<i32>(-21760i, -29790i, 2147483647i, u_input.c)), _wgslsmith_mult_vec4_i32(select(_wgslsmith_clamp_vec4_i32(vec4<i32>(arg_1.c, arg_1.b.c, arg_1.c, 2147483647i), vec4<i32>(2147483647i, 1i, u_input.a, -1i), vec4<i32>(global0.c, 2147483647i, global0.c, 9768i)), vec4<i32>(global0.c, 0i, global0.d.x, arg_1.b.c), arg_1.b.e), -vec4<i32>(arg_1.b.d.x, -9330i, u_input.c, -71391i) << ((vec4<u32>(arg_1.d.x, 1u, 22078u, 0u) ^ arg_1.d) % vec4<u32>(32u)))), _wgslsmith_div_vec4_i32(-vec4<i32>(_wgslsmith_sub_i32(45985i, 21093i), abs(-1i), global0.c, _wgslsmith_dot_vec3_i32(vec3<i32>(-1668i, -41867i, -32557i), vec3<i32>(u_input.e.x, arg_1.c, -30775i))), max(vec4<i32>(arg_1.b.c, arg_1.b.c >> (1u % 32u), arg_1.c, global0.c & -58303i), firstLeadingBit(_wgslsmith_mult_vec4_i32(vec4<i32>(u_input.e.x, global0.d.x, arg_1.c, u_input.a), vec4<i32>(u_input.a, 30794i, 1i, 6539i))))));
    if (true) {
        switch (0i) {
            case -1i: {
                let var_1 = _wgslsmith_sub_vec4_u32(_wgslsmith_add_vec4_u32(select((vec4<u32>(1u, 0u, 4294967295u, arg_1.d.x) << (vec4<u32>(59837u, 0u, 56000u, arg_1.b.a.x) % vec4<u32>(32u))) & min(vec4<u32>(16531u, u_input.d, 4294967295u, u_input.d), arg_1.d), vec4<u32>(u_input.b.x, reverseBits(arg_1.b.a.x), ~global0.a.x, _wgslsmith_mod_u32(global0.a.x, global0.a.x)), vec4<bool>(any(arg_1.b.e.zz), true, false | global0.e.x, !global0.e.x)), _wgslsmith_clamp_vec4_u32(select(vec4<u32>(4294967295u, 4294967295u, 4294967295u, 72578u), vec4<u32>(arg_1.b.a.x, 12296u, arg_1.d.x, global0.a.x), false), ~arg_1.d, min(_wgslsmith_sub_vec4_u32(vec4<u32>(11392u, u_input.b.x, global0.a.x, 9817u), arg_1.d), _wgslsmith_mult_vec4_u32(vec4<u32>(global0.a.x, 88820u, 1u, 0u), arg_1.d)))), ~vec4<u32>(1u, _wgslsmith_div_u32(_wgslsmith_add_u32(4511u, global0.a.x), 15717u & global0.a.x), ~select(arg_1.b.a.x, 11327u, false), 7013u));
                let var_2 = 404f;
            }
            case 39073i: {
                global0 = arg_1.b;
                global0 = Struct_2(_wgslsmith_sub_vec3_u32(~(~select(arg_1.b.a, vec3<u32>(1u, arg_1.d.x, u_input.b.x), global0.e.x)), global0.a ^ arg_1.d.yww), _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-arg_0.a.x))), global0.d.x, min(-countOneBits(vec2<i32>(u_input.c, -61840i)), var_0.zx), vec4<bool>(select(!any(vec2<bool>(true, false)), any(select(global0.e, arg_1.b.e, vec4<bool>(true, false, global0.e.x, arg_1.b.e.x))), global0.e.x), any(!global0.e), true, any(select(!global0.e.yw, select(vec2<bool>(false, false), vec2<bool>(false, arg_1.b.e.x), arg_1.b.e.zx), all(vec3<bool>(arg_1.b.e.x, true, false))))));
                let var_1 = select(0u, u_input.b.x >> (~firstTrailingBit(u_input.d | 25262u) % 32u), -7839i == firstTrailingBit(var_0.x));
                let var_2 = all(!select(vec3<bool>(global0.e.x, arg_1.b.e.x, all(vec2<bool>(false, global0.e.x))), arg_1.b.e.zzz, global0.e.ywx));
                let var_3 = ~vec2<u32>(~(global0.a.x & (var_1 & 4294967295u)), _wgslsmith_clamp_u32(var_1, _wgslsmith_dot_vec4_u32(vec4<u32>(64636u, 19467u, var_1, u_input.d), _wgslsmith_clamp_vec4_u32(vec4<u32>(62014u, 4294967295u, 34929u, arg_1.b.a.x), arg_1.d, arg_1.d)), max(var_1, 18797u)));
            }
            default: {
                var var_1 = arg_1.d.xx;
                let var_2 = Struct_5(arg_0.a, _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(arg_1.e.a))) * _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(exp2(arg_1.b.b)), _wgslsmith_f_op_f32(trunc(-434f))))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_div_f32(-1000f, -273f), arg_1.a) - -1683f)));
                var var_3 = min(i32(-2147483648) | u_input.e.x, global0.d.x);
            }
        }
        let var_1 = 71651u;
        loop {
            if (LOOP_COUNTERS[0u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
            var var_2 = _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-666f), arg_1.a) + 367f), 614f, all(arg_1.b.e)));
        }
        for (var var_2: i32; global0.e.x; var_2 = 2147483647i) {
            if (LOOP_COUNTERS[1u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
            let var_3 = arg_1;
        }
    }
    global0 = Struct_2(~reverseBits(_wgslsmith_sub_vec3_u32(global0.a, vec3<u32>(1u, u_input.b.x, u_input.d))) >> (min(~vec3<u32>(arg_1.b.a.x, 1u, 1u), arg_1.d.yyz) % vec3<u32>(32u)), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0.c))))), abs(~(-min(1i, u_input.c))), _wgslsmith_mult_vec2_i32(global0.d, arg_1.b.d), vec4<bool>(true, !arg_1.b.e.x, all(global0.e.wwx), global0.e.x));
    for (var var_1 = -1627i; var_1 < -13617i; var_1 += 1i) {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
    }
    var var_1 = Struct_4(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(f32(-1f) * -130f))), Struct_2(global0.a >> (global0.a % vec3<u32>(32u)), global0.b, i32(-1i) * i32(-2147483648), var_0.zy, select(arg_1.b.e, !vec4<bool>(global0.e.x, false, global0.e.x, global0.e.x), false)), arg_1.b.d.x & var_0.x, vec4<u32>(~_wgslsmith_dot_vec2_u32(~arg_1.b.a.yx, ~arg_1.d.ww), 0u, _wgslsmith_clamp_u32(20856u, 0u, u_input.d), 4294967295u), arg_1.e);
    return true;
}

fn func_5() -> Struct_1 {
    let var_0 = ~(-(~(vec4<i32>(i32(-2147483648), 0i, u_input.e.x, 1i) << (vec4<u32>(34732u, u_input.b.x, u_input.d, 21530u) % vec4<u32>(32u))) << (select(vec4<u32>(23075u, u_input.d, 4294967295u, 1u), min(vec4<u32>(13594u, u_input.d, global0.a.x, 23169u), vec4<u32>(global0.a.x, u_input.b.x, 4294967295u, 31168u)), global0.e.x) % vec4<u32>(32u))));
    loop {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        switch ((-(_wgslsmith_mult_i32(-44254i, u_input.e.x) | u_input.a) & (_wgslsmith_add_i32(var_0.x, _wgslsmith_div_i32(global0.d.x, var_0.x)) >> (4294967295u % 32u))) >> (global0.a.x % 32u)) {
            case -23010i: {
                break;
            }
            default: {
                break;
            }
        }
    }
    global0 = Struct_2(vec3<u32>((max(u_input.b.x, 0u) << (1u % 32u)) >> (19693u % 32u), global0.a.x, 43059u), _wgslsmith_f_op_f32(f32(-1f) * -2220f), _wgslsmith_sub_i32(var_0.x, 1i), u_input.e, select(!vec4<bool>(true, func_6(Struct_5(vec2<f32>(1357f, -559f), -706f, 1157f), Struct_4(-1126f, Struct_2(global0.a, 1061f, var_0.x, global0.d, global0.e), -1i, vec4<u32>(global0.a.x, u_input.b.x, u_input.d, 1u), Struct_1(global0.b))), true, any(vec3<bool>(global0.e.x, global0.e.x, true))), vec4<bool>(true, any(vec3<bool>(global0.e.x, global0.e.x, global0.e.x)), true, global0.e.x), global0.e));
    let var_1 = global0.e.wy;
    if (!any(global0.e.wx)) {
        global1 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(284f + global0.b)) + _wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -1214f), _wgslsmith_div_f32(972f, 1173f))), 280f)) * _wgslsmith_f_op_f32(sign(679f)));
        var var_2 = abs(_wgslsmith_add_u32((93258u << (select(1u, u_input.d, var_1.x) % 32u)) & _wgslsmith_add_u32(47999u, 64132u), _wgslsmith_mult_u32(global0.a.x, _wgslsmith_div_u32(u_input.b.x, 18144u)) ^ u_input.d));
        let var_3 = _wgslsmith_mod_vec2_u32(~(~select(global0.a.yx, vec2<u32>(4294967295u, global0.a.x), vec2<bool>(true, true))), ~vec2<u32>(4294967295u, u_input.b.x) | vec2<u32>(reverseBits(u_input.d), 1u)) << (global0.a.yz % vec2<u32>(32u));
        switch (-6369i) {
            case 2147483647i: {
                global1 = global0.b;
                var var_4 = global0.e.wzw;
                let var_5 = 0u;
            }
            case i32(-2147483648): {
                let var_4 = !var_1.x;
                global0 = Struct_2(vec3<u32>(41378u, ~(~global0.a.x), var_3.x), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(1000f + 1225f), 924f)) * global0.b) - _wgslsmith_f_op_f32(min(global0.b, global0.b))), _wgslsmith_clamp_i32(firstLeadingBit(_wgslsmith_dot_vec3_i32(-vec3<i32>(i32(-2147483648), -16024i, 2117i), -var_0.yyy)), select(_wgslsmith_sub_i32(0i, abs(u_input.a)), -2147483647i >> (reverseBits(global0.a.x) % 32u), true), i32(-1i) * -_wgslsmith_clamp_i32(2147483647i, var_0.x, u_input.e.x)), vec2<i32>(u_input.c, u_input.e.x), select(vec4<bool>(true, global0.e.x, true && !global0.e.x, var_1.x), !(!vec4<bool>(var_4, false, false, false)), var_4));
            }
            case -16310i: {
                let var_4 = Struct_1(_wgslsmith_f_op_f32(2596f - _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(floor(320f)))), _wgslsmith_f_op_f32(f32(-1f) * -291f)))));
                var var_5 = _wgslsmith_f_op_f32(-1000f);
            }
            default: {
                let var_4 = Struct_3(~firstTrailingBit(global0.a), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-global0.b), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-global0.b), 393f)))), var_1.x)));
                global0 = Struct_2(select(vec3<u32>(global0.a.x & u_input.b.x, global0.a.x, countOneBits(33867u) >> (_wgslsmith_dot_vec4_u32(vec4<u32>(var_3.x, u_input.d, 4294967295u, 0u), vec4<u32>(1u, 4294967295u, 21043u, u_input.d)) % 32u)), var_4.a, select(!global0.e.wwy, vec3<bool>(any(vec3<bool>(var_1.x, true, true)), var_1.x, !global0.e.x), global0.e.x)), -1835f, _wgslsmith_clamp_i32(abs(u_input.e.x), (1i << (_wgslsmith_div_u32(0u, u_input.d) % 32u)) | -(~global0.c), u_input.a), countOneBits(firstLeadingBit(-vec2<i32>(583i, u_input.a))) >> (vec2<u32>(_wgslsmith_dot_vec4_u32(select(vec4<u32>(4294967295u, u_input.b.x, 0u, u_input.d), vec4<u32>(global0.a.x, global0.a.x, 45568u, 41751u), var_1.x), vec4<u32>(22055u, 1u, 1u, 0u) ^ vec4<u32>(var_4.a.x, 17879u, 4294967295u, 1585u)), _wgslsmith_mult_u32(max(4294967295u, u_input.d), firstTrailingBit(var_3.x))) % vec2<u32>(32u)), vec4<bool>(734f >= _wgslsmith_f_op_f32(global0.b - -605f), false, !all(vec2<bool>(global0.e.x, var_1.x)), func_6(Struct_5(_wgslsmith_f_op_vec2_f32(-vec2<f32>(692f, -1061f)), 1601f, global0.b), Struct_4(var_4.b, Struct_2(global0.a, var_4.b, -39144i, vec2<i32>(-24710i, global0.c), global0.e), 1i, ~vec4<u32>(36661u, 28586u, 1u, 44801u), Struct_1(global0.b)))));
                var_2 = var_3.x;
            }
        }
        var_2 = 1u;
    }
    return Struct_1(-481f);
}

fn func_7(arg_0: Struct_1, arg_1: u32, arg_2: Struct_5) -> bool {
    switch (global0.d.x) {
        case 0i: {
            global0 = Struct_2(vec3<u32>(48174u, min(15691u, ~(u_input.b.x >> (0u % 32u))), max(~global0.a.x, ~_wgslsmith_div_u32(global0.a.x, 4435u))), _wgslsmith_f_op_f32(arg_0.a - global0.b), global0.c, global0.d, global0.e);
            let var_0 = firstTrailingBit(abs(1u));
        }
        case -48155i: {
            global0 = Struct_2(vec3<u32>(_wgslsmith_dot_vec2_u32(vec2<u32>(u_input.b.x, arg_1), ~vec2<u32>(4294967295u, 1u)) | 72204u, 1u, 65531u), -833f, 2147483647i, u_input.e, vec4<bool>(true, (u_input.d < 47162u) & (~global0.d.x <= abs(i32(-2147483648))), !(!global0.e.x), true));
            for (var var_0 = max(-19119i, firstTrailingBit(u_input.a)); ; global1 = global0.b) {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                continue;
            }
            global0 = Struct_2(max(global0.a, vec3<u32>(40362u, u_input.d, _wgslsmith_mult_u32(firstLeadingBit(21283u), global0.a.x))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(-1273f, -1718f, true)) + arg_0.a)), abs(~(19097i | -global0.c)), abs(_wgslsmith_mod_vec2_i32(reverseBits(global0.d), _wgslsmith_div_vec2_i32(~u_input.e, _wgslsmith_div_vec2_i32(global0.d, vec2<i32>(-11757i, global0.d.x))))), !(!global0.e));
        }
        case 58106i: {
            global0 = Struct_2(select(vec3<u32>(max(0u, arg_1), u_input.d, 39198u), firstLeadingBit(~global0.a ^ ~global0.a), true), _wgslsmith_div_f32(arg_0.a, global0.b), u_input.e.x, max(vec2<i32>(firstTrailingBit(global0.c), ~0i), u_input.e) >> (firstLeadingBit(global0.a.yy) % vec2<u32>(32u)), global0.e);
            if (global0.b <= func_5().a) {
                let var_0 = arg_1 ^ 4294967295u;
                var var_1 = Struct_4(1000f, Struct_2(global0.a, 1000f, ~u_input.a, abs(global0.d), select(global0.e, vec4<bool>(global0.e.x, global0.e.x, global0.e.x & global0.e.x, true), vec4<bool>(true, true, false, false))), 2147483647i, countOneBits(_wgslsmith_add_vec4_u32(select(~vec4<u32>(arg_1, 1u, 7705u, u_input.b.x), vec4<u32>(global0.a.x, 4294967295u, var_0, u_input.b.x), false), vec4<u32>(min(112168u, arg_1), ~var_0, 1u, arg_1))), arg_0);
                global1 = -968f;
                let var_2 = vec4<i32>(-_wgslsmith_sub_i32(global0.c, -global0.c), -(~(u_input.a >> (67639u % 32u)) >> (1u % 32u)), firstLeadingBit(-(~1i)), ~firstLeadingBit(min(i32(-2147483648), ~global0.d.x)));
                global0 = Struct_2(~(~_wgslsmith_sub_vec3_u32(~vec3<u32>(var_0, global0.a.x, u_input.b.x), global0.a)), func_5().a, ~var_1.c, vec2<i32>(-abs(-31190i), ~global0.d.x), !vec4<bool>(true, global0.e.x, !select(true, var_1.b.e.x, var_1.b.e.x), true));
            }
            global1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(_wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(192f, 311f)) * _wgslsmith_f_op_f32(-arg_2.c)), -1308f), _wgslsmith_f_op_f32(f32(-1f) * -1000f))));
            let var_0 = vec3<u32>(0u, arg_1, u_input.b.x);
            var var_1 = firstTrailingBit(_wgslsmith_mod_vec3_u32(abs(vec3<u32>(u_input.b.x, _wgslsmith_div_u32(17159u, var_0.x), 0u | var_0.x)), ~_wgslsmith_sub_vec3_u32(countOneBits(vec3<u32>(arg_1, global0.a.x, 4294967295u)), global0.a & global0.a)));
        }
        case 2147483647i: {
            global0 = Struct_2(vec3<u32>(u_input.d ^ ~arg_1, ~arg_1, _wgslsmith_clamp_u32(1u, select(1330u, 0u, true), 1u) | ~(68286u | global0.a.x)), arg_0.a, u_input.e.x & 0i, global0.d, vec4<bool>(!global0.e.x, global0.e.x, true, !any(global0.e) != true));
            global1 = arg_2.b;
            loop {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                var var_0 = Struct_3(abs(max(global0.a, vec3<u32>(min(1u, global0.a.x), global0.a.x, 0u))), _wgslsmith_f_op_f32(348f + 1000f));
            }
        }
        default: {
            global1 = _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0.a)), -292f));
            let var_0 = Struct_5(vec2<f32>(arg_0.a, func_5().a), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(global0.b, 557f)), arg_2.a.x);
            let var_1 = Struct_5(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(sign(_wgslsmith_div_vec2_f32(arg_2.a, _wgslsmith_f_op_vec2_f32(-vec2<f32>(1274f, var_0.a.x))))) - _wgslsmith_f_op_vec2_f32(-arg_2.a)), _wgslsmith_f_op_f32(-global0.b), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(829f))));
            loop {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
            }
            return global0.e.x;
        }
    }
    global0 = Struct_2(global0.a << (~(vec3<u32>(66334u, 4294967295u, 0u) & vec3<u32>(35361u, u_input.d, 1u)) % vec3<u32>(32u)), func_5().a, abs(-20973i), _wgslsmith_sub_vec2_i32(_wgslsmith_mult_vec2_i32(vec2<i32>(32339i, 1i), -(vec2<i32>(u_input.c, u_input.a) << (u_input.b % vec2<u32>(32u)))), select(min(_wgslsmith_mod_vec2_i32(global0.d, vec2<i32>(-1i, i32(-2147483648))), u_input.e), abs(vec2<i32>(70551i, 62075i) >> (vec2<u32>(arg_1, arg_1) % vec2<u32>(32u))), any(!global0.e.yx))), select(!global0.e, global0.e, global0.e.x));
    for (; true; ) {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        break;
    }
    global1 = _wgslsmith_f_op_f32(min(func_5().a, _wgslsmith_f_op_f32(select(arg_2.b, arg_2.a.x, global0.e.x))));
    for (var var_0: i32; var_0 == -875i; var_0 -= 1i) {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        var var_1 = global0.d.x;
        break;
    }
    return !(all(!global0.e.wwz) | false) | true;
}

fn func_8(arg_0: vec3<i32>, arg_1: vec3<u32>, arg_2: vec3<bool>, arg_3: vec2<bool>) -> vec4<u32> {
    for (var var_0 = 21117i; var_0 != 22738i; var_0 += 1i) {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        let var_1 = -(-select(~arg_0.x, global0.d.x, all(vec3<bool>(true, false, arg_2.x))) ^ abs(u_input.e.x));
        loop {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        }
        switch (arg_0.x) {
            case 2147483647i: {
                let var_2 = vec3<i32>(arg_0.x, reverseBits(arg_0.x & _wgslsmith_sub_i32(i32(-1i) * i32(-2147483648), var_1)), _wgslsmith_dot_vec2_i32(~_wgslsmith_clamp_vec2_i32(vec2<i32>(2147483647i, global0.d.x), abs(vec2<i32>(1i, 43581i)), select(vec2<i32>(arg_0.x, u_input.a), arg_0.zz, arg_2.x)), _wgslsmith_div_vec2_i32(-(~vec2<i32>(u_input.a, 0i)), vec2<i32>(-1i) * -vec2<i32>(0i, 21165i))));
                break;
            }
            case -26437i: {
                break;
            }
            default: {
                global0 = Struct_2(~countOneBits(~_wgslsmith_div_vec3_u32(arg_1, global0.a)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(global0.b)) + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(select(-636f, global0.b, arg_2.x)), _wgslsmith_div_f32(-1122f, global0.b), true)) - _wgslsmith_f_op_f32(-global0.b))), 48667i, ~_wgslsmith_mult_vec2_i32(vec2<i32>(u_input.c, u_input.c), arg_0.yy), vec4<bool>(true, arg_2.x, global0.e.x, any(global0.e.xxx) | !global0.e.x));
            }
        }
        global1 = _wgslsmith_f_op_f32(max(global0.b, _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(2237f + -640f), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global0.b)), -1000f))))));
    }
    switch (~select(i32(-1i) * -global0.d.x, _wgslsmith_mod_i32(arg_0.x, 1i), !arg_2.x)) {
        default: {
            var var_0 = vec4<bool>(arg_2.x, any(select(select(global0.e.www, select(vec3<bool>(global0.e.x, true, true), arg_2, false), global0.e.xzw), select(!global0.e.yzx, vec3<bool>(false, global0.e.x, arg_3.x), i32(-2147483648) != global0.d.x), true)), false, false != (true && !(!arg_3.x)));
            switch (1i << (0u % 32u)) {
                case 1i: {
                    let var_1 = -44504i;
                    let var_2 = Struct_5(_wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(2386f, global0.b) - vec2<f32>(656f, global0.b)) * vec2<f32>(global0.b, -1162f))))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-global0.b), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(global0.b + global0.b)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global0.b)))), global0.b);
                    let var_3 = 90413u;
                    var var_4 = 52634u;
                    let var_5 = Struct_3(arg_1, _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-var_2.b))))));
                }
                case i32(-2147483648): {
                    var var_1 = vec4<i32>(-1i) * -max(firstLeadingBit(vec4<i32>(u_input.e.x, global0.d.x, arg_0.x, u_input.e.x) << (vec4<u32>(8464u, arg_1.x, 0u, u_input.d) % vec4<u32>(32u))), -_wgslsmith_mod_vec4_i32(vec4<i32>(-31977i, global0.d.x, global0.c, -35224i), vec4<i32>(2147483647i, u_input.e.x, 6864i, i32(-2147483648))));
                    global1 = _wgslsmith_f_op_f32(global0.b - _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(global0.b * global0.b))));
                    var var_2 = !var_0.x;
                    global0 = Struct_2(~(~vec3<u32>(arg_1.x, abs(4294967295u), ~15326u)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global0.b) * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-613f))) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(-1000f))))), _wgslsmith_dot_vec4_i32(~(vec4<i32>(-5964i, var_1.x, -62402i, 1i) ^ _wgslsmith_sub_vec4_i32(vec4<i32>(u_input.a, u_input.e.x, u_input.e.x, 1i), vec4<i32>(-30578i, -42330i, var_1.x, 2147483647i))), _wgslsmith_add_vec4_i32(vec4<i32>(-22434i, 0i, 1i, 2147483647i), vec4<i32>(var_1.x, var_1.x, -7004i, 1406i)) >> (select(~vec4<u32>(1u, arg_1.x, 0u, u_input.d), ~vec4<u32>(45194u, 1314u, 4294967295u, arg_1.x), false) % vec4<u32>(32u))), -u_input.e, select(select(!global0.e, vec4<bool>(any(vec4<bool>(arg_2.x, true, arg_2.x, true)), 20632u > arg_1.x, false, false), vec4<bool>(true, global0.e.x, all(global0.e.wy), var_0.x)), global0.e, false));
                    global1 = _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(trunc(_wgslsmith_div_f32(_wgslsmith_f_op_f32(select(477f, _wgslsmith_f_op_f32(-global0.b), arg_2.x)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global0.b) + -1000f))))));
                }
                default: {
                    var var_1 = Struct_2(select(arg_1, ~vec3<u32>(~86221u, 1u, global0.a.x), select(select(vec3<bool>(global0.e.x, false, false), select(arg_2, var_0.yxx, vec3<bool>(var_0.x, true, false)), select(global0.e.zyw, var_0.yyw, false)), vec3<bool>(var_0.x, !arg_3.x, true), var_0.x)), _wgslsmith_f_op_f32(-global0.b), i32(-1i) * -44130i, _wgslsmith_mult_vec2_i32(vec2<i32>(select(0i, 0i, arg_2.x) & global0.c, _wgslsmith_dot_vec4_i32(max(vec4<i32>(1i, -31683i, arg_0.x, 1i), vec4<i32>(arg_0.x, 0i, i32(-2147483648), -48815i)), -vec4<i32>(0i, -21949i, 4257i, arg_0.x))), _wgslsmith_mult_vec2_i32(_wgslsmith_mod_vec2_i32(vec2<i32>(arg_0.x, arg_0.x), vec2<i32>(arg_0.x, u_input.c)), u_input.e)), global0.e);
                    global0 = Struct_2(_wgslsmith_sub_vec3_u32(arg_1, _wgslsmith_div_vec3_u32(arg_1, ~global0.a)), var_1.b, arg_0.x, vec2<i32>(3535i, _wgslsmith_clamp_i32(0i >> (1u % 32u), -15131i, -u_input.c) | countOneBits(_wgslsmith_dot_vec2_i32(vec2<i32>(global0.d.x, 1i), var_1.d))), vec4<bool>((~global0.d.x | firstTrailingBit(arg_0.x)) != arg_0.x, var_0.x, !global0.e.x, firstTrailingBit(_wgslsmith_add_u32(global0.a.x, global0.a.x)) >= _wgslsmith_mult_u32(countOneBits(var_1.a.x), 0u)));
                    global1 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(var_1.b - var_1.b)) + -279f);
                }
            }
            let var_1 = Struct_3(vec3<u32>(arg_1.x, firstLeadingBit(0u) & _wgslsmith_add_u32(0u, ~global0.a.x), ~(~4294967295u)), -492f);
            loop {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                global0 = Struct_2(vec3<u32>((18975u ^ (u_input.d & 110457u)) ^ firstLeadingBit(168u), ~((arg_1.x & global0.a.x) >> (firstLeadingBit(global0.a.x) % 32u)), ~23655u), -660f, arg_0.x, arg_0.yz, vec4<bool>(all(select(!var_0.xx, !var_0.xx, vec2<bool>(var_0.x, true))), func_6(Struct_5(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-1296f, 901f)), _wgslsmith_f_op_f32(step(global0.b, 276f)), 1267f), Struct_4(_wgslsmith_f_op_f32(select(1000f, var_1.b, true)), Struct_2(vec3<u32>(48242u, 4294967295u, arg_1.x), global0.b, -24572i, vec2<i32>(arg_0.x, u_input.c), global0.e), arg_0.x, ~vec4<u32>(0u, 0u, u_input.d, var_1.a.x), func_5())), false || !(!arg_2.x), arg_2.x));
                var var_2 = _wgslsmith_sub_i32(arg_0.x, 48360i);
            }
            var var_2 = _wgslsmith_mult_i32(_wgslsmith_dot_vec3_i32(vec3<i32>(_wgslsmith_mod_i32(_wgslsmith_sub_i32(i32(-2147483648), i32(-2147483648)), 5949i), -42368i, -82180i), vec3<i32>(~49199i, u_input.a, global0.c)), arg_0.x);
        }
    }
    var var_0 = 1000f;
    for (var var_1 = 2147483647i; var_1 >= 2147483647i; var_0 = _wgslsmith_f_op_f32(-530f)) {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        var_1 = ~reverseBits(global0.d.x << (1u % 32u));
    }
    var var_1 = global0.b;
    return select(countOneBits(firstLeadingBit(_wgslsmith_sub_vec4_u32(vec4<u32>(0u, global0.a.x, 16835u, 4294967295u), max(vec4<u32>(1u, 61790u, 14213u, 44887u), vec4<u32>(arg_1.x, u_input.b.x, global0.a.x, arg_1.x))))), _wgslsmith_mult_vec4_u32(firstLeadingBit(vec4<u32>(_wgslsmith_dot_vec3_u32(global0.a, vec3<u32>(u_input.d, 67404u, 38334u)), ~4294967295u, _wgslsmith_dot_vec2_u32(u_input.b, vec2<u32>(u_input.b.x, u_input.d)), ~30364u)), abs(_wgslsmith_sub_vec4_u32(vec4<u32>(0u, arg_1.x, u_input.d, arg_1.x), vec4<u32>(1u, global0.a.x, u_input.d, 0u)) << ((vec4<u32>(1u, 0u, u_input.b.x, u_input.b.x) | vec4<u32>(u_input.b.x, 0u, u_input.b.x, 9153u)) % vec4<u32>(32u)))), true);
}

fn func_9(arg_0: vec4<u32>, arg_1: Struct_2) -> Struct_2 {
    global0 = Struct_2(~vec3<u32>(select(4294967295u, _wgslsmith_add_u32(26217u, arg_0.x), global0.e.x), ~4294967295u, 30128u), -1163f, 1i, arg_1.d, select(arg_1.e, vec4<bool>(false, global0.e.x, true, any(vec4<bool>(arg_1.e.x, arg_1.e.x, global0.e.x, global0.e.x))), select(!select(arg_1.e, vec4<bool>(false, true, true, global0.e.x), arg_1.e), !(!vec4<bool>(arg_1.e.x, arg_1.e.x, false, arg_1.e.x)), false)));
    if (any(select(select(global0.e.xz, vec2<bool>(false, false), select(global0.e.zx, vec2<bool>(true, global0.e.x), global0.e.x)), vec2<bool>(true, arg_1.e.x), select(arg_1.e.x, true, global0.e.x))) && all(select(arg_1.e.xw, global0.e.xz, any(!vec4<bool>(false, global0.e.x, false, false))))) {
        var var_0 = vec3<i32>(firstTrailingBit(arg_1.d.x), u_input.e.x, u_input.c);
        switch (2147483647i) {
            case 0i: {
                let var_1 = Struct_4(_wgslsmith_div_f32(arg_1.b, arg_1.b), arg_1, 0i, ~vec4<u32>(max(1u, 4294967295u), (arg_1.a.x | arg_0.x) ^ ~4294967295u, ~4294967295u >> (abs(0u) % 32u), _wgslsmith_sub_u32(_wgslsmith_add_u32(1u, arg_0.x), ~15331u)), Struct_1(_wgslsmith_f_op_f32(round(arg_1.b))));
                var var_2 = var_1.c;
                var var_3 = reverseBits(arg_1.a.x);
            }
            case -1i: {
                var var_1 = ~vec3<u32>((arg_1.a.x | arg_0.x) & ~4294967295u, arg_0.x, firstLeadingBit(~global0.a.x) >> (_wgslsmith_add_u32(~4294967295u, 4294967295u) % 32u));
                let var_2 = 29998u;
            }
            case 2147483647i: {
                var var_1 = global0.e.x;
                var var_2 = 23288u;
            }
            default: {
                return Struct_2(~arg_0.yxw, _wgslsmith_f_op_f32(-global0.b), _wgslsmith_dot_vec2_i32(arg_1.d, var_0.xz) ^ 7323i, vec2<i32>(select(0i, reverseBits(arg_1.d.x), arg_1.e.x), abs(max(arg_1.d.x, -1i)) << (~func_8(vec3<i32>(i32(-2147483648), arg_1.c, u_input.a), vec3<u32>(65745u, global0.a.x, arg_1.a.x), vec3<bool>(true, false, true), vec2<bool>(true, arg_1.e.x)).x % 32u)), !global0.e);
            }
        }
        loop {
            if (LOOP_COUNTERS[13u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
            var var_1 = Struct_2(global0.a | ~_wgslsmith_mod_vec3_u32(vec3<u32>(global0.a.x, 1u, 98519u), vec3<u32>(arg_1.a.x, 2267u, arg_1.a.x) & vec3<u32>(arg_0.x, u_input.b.x, arg_1.a.x)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-675f * 553f)) - -543f) + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(select(arg_1.b, 503f, arg_1.e.x)))) - arg_1.b)), 11158i, vec2<i32>(2147483647i, 2147483647i), !arg_1.e);
            break;
        }
        if (1i >= var_0.x) {
        }
        for (var var_1 = _wgslsmith_dot_vec3_i32(_wgslsmith_add_vec3_i32(_wgslsmith_mod_vec3_i32(abs(vec3<i32>(global0.c, 5696i, global0.c)), ~vec3<i32>(global0.c, 24699i, i32(-2147483648))), vec3<i32>(var_0.x, global0.d.x, 1i)), vec3<i32>(~_wgslsmith_clamp_i32(var_0.x, -8256i, 2147483647i), 0i, max(arg_1.c, -40537i) ^ _wgslsmith_div_i32(arg_1.d.x, 16032i))) & u_input.e.x; false; var_0 = vec3<i32>(1i, -26051i, ~(-6968i))) {
            if (LOOP_COUNTERS[14u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
            var var_2 = _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(arg_1.b * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(522f, -1098f)) * -1024f)), arg_1.b));
        }
    }
    let var_0 = true;
    var var_1 = Struct_4(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-536f * arg_1.b)), arg_1, _wgslsmith_sub_i32(reverseBits(u_input.a), u_input.c), firstTrailingBit(firstLeadingBit(firstTrailingBit(arg_0))), Struct_1(arg_1.b));
    switch (_wgslsmith_dot_vec2_i32(vec2<i32>(~1i, 1i) & _wgslsmith_mod_vec2_i32(-min(vec2<i32>(global0.d.x, 2147483647i), arg_1.d), firstLeadingBit(vec2<i32>(36721i, i32(-2147483648)))), var_1.b.d)) {
        default: {
            if (global0.e.x) {
            }
            var var_2 = 114f;
            var_2 = _wgslsmith_f_op_f32(f32(-1f) * -566f);
            if (false) {
                global0 = Struct_2(~abs(arg_0.wwz) ^ (~vec3<u32>(48895u, 43360u, u_input.d) >> (~max(global0.a, arg_1.a) % vec3<u32>(32u))), -2064f, min(_wgslsmith_clamp_i32(reverseBits(-7796i), global0.d.x, min(firstTrailingBit(-3587i), abs(9845i))), reverseBits(abs(arg_1.c))), ~(~(~min(vec2<i32>(arg_1.d.x, -1i), vec2<i32>(arg_1.d.x, 1i)))), var_1.b.e);
            }
        }
    }
    return var_1.b;
}

fn func_4() -> vec2<f32> {
    global0 = Struct_2(~countOneBits(abs(global0.a)), _wgslsmith_f_op_f32(-1448f - -1000f), 1i, vec2<i32>(global0.c, global0.d.x), select(vec4<bool>(true, true, !any(vec2<bool>(global0.e.x, global0.e.x)), true), !global0.e, true));
    switch (~(-global0.d.x)) {
        case 44182i: {
            var var_0 = global0.e.x;
            if (true) {
            }
            for (var var_1 = 23675i; var_1 >= -1i; global0 = func_9(func_8(abs(_wgslsmith_mod_vec3_i32(vec3<i32>(u_input.c, global0.c, 0i) ^ vec3<i32>(0i, global0.c, i32(-2147483648)), countOneBits(vec3<i32>(2147483647i, global0.c, global0.c)))), max(~(vec3<u32>(global0.a.x, u_input.b.x, 1u) << (global0.a % vec3<u32>(32u))), abs(global0.a) >> (vec3<u32>(u_input.d, u_input.b.x, 125528u) % vec3<u32>(32u))), !global0.e.wwz, vec2<bool>(true, func_7(func_5(), _wgslsmith_mult_u32(u_input.d, u_input.d), Struct_5(vec2<f32>(global0.b, global0.b), 1482f, 1575f)))), Struct_2(vec3<u32>(u_input.b.x, ~(~u_input.b.x), 71669u), _wgslsmith_f_op_f32(floor(-439f)), 1i, -vec2<i32>(27328i, global0.d.x) >> ((countOneBits(vec2<u32>(u_input.d, u_input.d)) ^ vec2<u32>(u_input.d, global0.a.x)) % vec2<u32>(32u)), global0.e))) {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
                continue;
            }
        }
        case 0i: {
            var var_0 = vec2<bool>(select(func_9(vec4<u32>(func_8(vec3<i32>(u_input.a, 2147483647i, 57437i), vec3<u32>(76818u, 19783u, u_input.b.x), global0.e.xyx, global0.e.xw).x, func_9(vec4<u32>(u_input.b.x, global0.a.x, 1u, global0.a.x), Struct_2(global0.a, 1061f, u_input.a, vec2<i32>(global0.c, 2147483647i), global0.e)).a.x, _wgslsmith_add_u32(u_input.b.x, 4294967295u), func_9(vec4<u32>(2097u, 4294967295u, 4294967295u, 11745u), Struct_2(vec3<u32>(1u, global0.a.x, 52383u), global0.b, u_input.c, u_input.e, global0.e)).a.x), Struct_2(vec3<u32>(1u, u_input.d, u_input.d), _wgslsmith_div_f32(-705f, -106f), _wgslsmith_sub_i32(u_input.c, 2147483647i), u_input.e, func_9(vec4<u32>(u_input.b.x, u_input.d, 49069u, 29094u), Struct_2(vec3<u32>(global0.a.x, 1u, 1u), global0.b, 51022i, global0.d, global0.e)).e)).e.x, select(global0.e.x, func_7(func_5(), max(1u, global0.a.x), Struct_5(vec2<f32>(200f, 1148f), global0.b, 1840f)), true), countOneBits(global0.d.x) < u_input.e.x), all(vec3<bool>(false, _wgslsmith_f_op_f32(-384f) == _wgslsmith_f_op_f32(round(global0.b)), global0.e.x)));
            loop {
                if (LOOP_COUNTERS[16u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
                var var_1 = -(~_wgslsmith_add_i32(global0.d.x, global0.d.x));
                var_0 = !func_9(_wgslsmith_mod_vec4_u32(vec4<u32>(1u, max(1u, 71199u), global0.a.x, 83791u >> (global0.a.x % 32u)), ~reverseBits(vec4<u32>(u_input.d, 7810u, u_input.b.x, 28496u))), Struct_2(vec3<u32>(u_input.d, 0u, global0.a.x ^ global0.a.x), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(1467f)) * _wgslsmith_f_op_f32(-global0.b)), _wgslsmith_dot_vec4_i32(vec4<i32>(u_input.e.x, 0i, i32(-2147483648), global0.c) | vec4<i32>(2147483647i, u_input.a, global0.d.x, 370i), -vec4<i32>(30266i, global0.c, u_input.e.x, 4056i)), u_input.e, global0.e)).e.zz;
            }
            global0 = func_9((_wgslsmith_div_vec4_u32(reverseBits(vec4<u32>(u_input.b.x, u_input.b.x, 1u, global0.a.x)), ~vec4<u32>(14921u, 3766u, global0.a.x, 24647u)) ^ reverseBits(~vec4<u32>(4294967295u, u_input.d, 17423u, 1u))) ^ vec4<u32>(24377u, _wgslsmith_mod_u32(reverseBits(u_input.d), 0u), 60228u, 68193u), func_9(firstTrailingBit(abs(abs(vec4<u32>(0u, u_input.b.x, global0.a.x, global0.a.x)))), func_9(_wgslsmith_mult_vec4_u32(vec4<u32>(0u, u_input.b.x, 1u, 68759u) ^ vec4<u32>(56476u, u_input.b.x, 0u, 34606u), vec4<u32>(u_input.b.x, 15580u, 1u, global0.a.x)), Struct_2(~vec3<u32>(global0.a.x, global0.a.x, 0u), _wgslsmith_f_op_f32(sign(global0.b)), abs(global0.c), vec2<i32>(global0.d.x, u_input.c), global0.e))));
            let var_1 = global0.d;
            var_0 = select(vec2<bool>(var_0.x, func_9(_wgslsmith_clamp_vec4_u32(~vec4<u32>(10834u, u_input.d, u_input.d, global0.a.x), vec4<u32>(global0.a.x, 29864u, global0.a.x, u_input.b.x) ^ vec4<u32>(0u, 4294967295u, 69384u, global0.a.x), ~vec4<u32>(u_input.b.x, u_input.d, u_input.d, u_input.b.x)), func_9(reverseBits(vec4<u32>(u_input.b.x, u_input.d, u_input.d, global0.a.x)), func_9(vec4<u32>(4294967295u, global0.a.x, 0u, 47758u), Struct_2(global0.a, global0.b, global0.d.x, u_input.e, vec4<bool>(var_0.x, false, true, var_0.x))))).e.x), global0.e.yz, global0.e.x);
        }
        case -21954i: {
        }
        case -1i: {
        }
        default: {
            switch (u_input.e.x) {
                default: {
                    global0 = Struct_2(global0.a, _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(select(global0.b, 302f, global0.e.x)), -1402f))))), global0.d.x, u_input.e, select(!global0.e, !select(select(global0.e, vec4<bool>(false, global0.e.x, global0.e.x, global0.e.x), true), !vec4<bool>(true, false, global0.e.x, global0.e.x), vec4<bool>(false, global0.e.x, false, true)), !global0.e));
                    global0 = func_9(abs(_wgslsmith_sub_vec4_u32(_wgslsmith_div_vec4_u32(_wgslsmith_sub_vec4_u32(vec4<u32>(u_input.d, 24834u, u_input.d, 17371u), vec4<u32>(35818u, global0.a.x, 36915u, 50093u)), ~vec4<u32>(u_input.b.x, 68151u, global0.a.x, 1u)), select(_wgslsmith_div_vec4_u32(vec4<u32>(97977u, 4294967295u, u_input.d, global0.a.x), vec4<u32>(30202u, 4294967295u, 4294967295u, global0.a.x)), _wgslsmith_div_vec4_u32(vec4<u32>(global0.a.x, 0u, global0.a.x, 15986u), vec4<u32>(43826u, 4294967295u, 36196u, u_input.b.x)), vec4<bool>(true, true, true, true)))), func_9(vec4<u32>(global0.a.x, global0.a.x, 0u, 51939u), func_9(vec4<u32>(global0.a.x, global0.a.x, ~global0.a.x, ~global0.a.x), Struct_2(vec3<u32>(global0.a.x, global0.a.x, u_input.b.x), _wgslsmith_f_op_f32(min(1154f, 459f)), global0.c, ~vec2<i32>(2147483647i, global0.c), global0.e))));
                    global1 = _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(max(global0.b, 711f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(-246f, _wgslsmith_f_op_f32(-1622f + _wgslsmith_div_f32(1055f, 1000f))))), !(!(true != (u_input.b.x > global0.a.x)))));
                    var var_0 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(select(vec2<f32>(885f, _wgslsmith_f_op_f32(max(1f, global0.b))), vec2<f32>(_wgslsmith_f_op_f32(global0.b * 864f), global0.b), global0.e.x)));
                }
            }
            var var_0 = func_5();
            var var_1 = Struct_4(451f, Struct_2(vec3<u32>(_wgslsmith_dot_vec2_u32(vec2<u32>(4294967295u, 99560u), u_input.b), 21840u, ~_wgslsmith_sub_u32(21473u, global0.a.x)), _wgslsmith_f_op_f32(-1015f), 2147483647i, vec2<i32>(u_input.c, func_9(_wgslsmith_add_vec4_u32(vec4<u32>(0u, global0.a.x, u_input.d, u_input.b.x), vec4<u32>(global0.a.x, 77033u, global0.a.x, u_input.d)), func_9(vec4<u32>(global0.a.x, 6266u, global0.a.x, global0.a.x), Struct_2(vec3<u32>(u_input.d, 1u, u_input.d), 358f, 1i, vec2<i32>(i32(-2147483648), global0.c), global0.e))).c), vec4<bool>(false, !all(global0.e), true, global0.e.x)), ~_wgslsmith_add_i32(-reverseBits(global0.d.x), 2147483647i), func_8(firstLeadingBit(min(vec3<i32>(global0.d.x, 65718i, -1i), reverseBits(vec3<i32>(u_input.a, 0i, u_input.e.x)))), vec3<u32>(0u, (4294967295u << (u_input.b.x % 32u)) & _wgslsmith_dot_vec2_u32(global0.a.zy, global0.a.xx), global0.a.x), select(vec3<bool>(!global0.e.x, global0.e.x || global0.e.x, global0.e.x), select(select(vec3<bool>(global0.e.x, global0.e.x, global0.e.x), vec3<bool>(global0.e.x, false, false), vec3<bool>(global0.e.x, false, false)), func_9(vec4<u32>(0u, 4294967295u, u_input.d, global0.a.x), Struct_2(global0.a, 114f, i32(-2147483648), u_input.e, global0.e)).e.zwy, true), select(global0.e.wyx, !global0.e.ywy, !global0.e.yxw)), global0.e.ww), func_5());
        }
    }
    let var_0 = true;
    var var_1 = _wgslsmith_f_op_f32(max(global0.b, _wgslsmith_f_op_f32(f32(-1f) * -380f)));
    var var_2 = 2323f;
    return _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(round(_wgslsmith_f_op_vec2_f32(round(vec2<f32>(global0.b, 176f))))))) - vec2<f32>(1666f, _wgslsmith_f_op_f32(step(791f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global0.b) + _wgslsmith_f_op_f32(-global0.b))))));
}

fn func_10(arg_0: Struct_5, arg_1: vec4<u32>, arg_2: i32, arg_3: vec2<bool>) -> vec3<bool> {
    var var_0 = Struct_4(arg_0.a.x, func_9(~(~(~arg_1)), func_9(arg_1, Struct_2(vec3<u32>(21564u, arg_1.x, arg_1.x), _wgslsmith_f_op_f32(exp2(arg_0.a.x)), global0.c, u_input.e | global0.d, !vec4<bool>(arg_3.x, true, false, false)))), u_input.a, arg_1, Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(495f + arg_0.b), func_9(arg_1, Struct_2(arg_1.xyx, 1055f, -6067i, vec2<i32>(u_input.e.x, global0.c), global0.e)).b)))));
    let var_1 = arg_0;
    let var_2 = _wgslsmith_div_f32(565f, _wgslsmith_f_op_vec2_f32(func_4()).x);
    global0 = func_9(arg_1, func_9(min(vec4<u32>(~1u, ~arg_1.x, ~4882u, var_0.d.x), ~(~vec4<u32>(32472u, 1u, global0.a.x, global0.a.x))), Struct_2(vec3<u32>(max(arg_1.x, 28958u), _wgslsmith_mult_u32(34751u, 34348u), _wgslsmith_dot_vec4_u32(vec4<u32>(41752u, var_0.d.x, var_0.b.a.x, global0.a.x), var_0.d)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-323f)), countOneBits(select(-1347i, arg_2, false)), var_0.b.d, global0.e)));
    let var_3 = func_5();
    return global0.e.xyw;
}

fn func_3() -> i32 {
    let var_0 = !func_10(Struct_5(_wgslsmith_f_op_vec2_f32(func_4()), _wgslsmith_f_op_f32(-638f + _wgslsmith_f_op_f32(global0.b * -1000f)), _wgslsmith_f_op_f32(global0.b + _wgslsmith_f_op_f32(round(global0.b)))), ~(~countOneBits(vec4<u32>(1u, 4294967295u, u_input.b.x, 34361u))), u_input.a, vec2<bool>(global0.e.x, true));
    switch (global0.d.x) {
        default: {
            if (~1u == _wgslsmith_clamp_u32(u_input.d, u_input.b.x, 25210u)) {
            }
            loop {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                let var_1 = 18319i;
                let var_2 = Struct_5(vec2<f32>(_wgslsmith_f_op_f32(global0.b - global0.b), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global0.b)), global0.b))), func_9(~_wgslsmith_add_vec4_u32(~vec4<u32>(global0.a.x, u_input.b.x, global0.a.x, global0.a.x), countOneBits(vec4<u32>(0u, 1u, global0.a.x, 126778u))), Struct_2(firstLeadingBit(countOneBits(vec3<u32>(global0.a.x, global0.a.x, u_input.d))), global0.b, ~u_input.a << (1u % 32u), vec2<i32>(60067i, 40755i | var_1), vec4<bool>(false || var_0.x, -2941i != var_1, false, all(vec4<bool>(var_0.x, var_0.x, false, true))))).b, _wgslsmith_f_op_f32(1f + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1107f - global0.b)) * _wgslsmith_f_op_f32(global0.b + -2102f))));
                var var_3 = vec4<bool>(var_0.x, true, var_0.x, any(!(!global0.e)));
                continue;
            }
        }
    }
    let var_1 = global0.b;
    var var_2 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-293f), -1000f, var_0.x)), _wgslsmith_f_op_f32(-global0.b), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-2070f) + _wgslsmith_f_op_f32(round(global0.b)))) - _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(vec3<f32>(global0.b, -1207f, global0.b) * vec3<f32>(-1884f, -1230f, global0.b)))))));
    let var_3 = vec2<u32>(global0.a.x, _wgslsmith_add_u32(~_wgslsmith_dot_vec2_u32(u_input.b, vec2<u32>(global0.a.x, 4294967295u)) | ~_wgslsmith_dot_vec3_u32(global0.a, global0.a), ~0u));
    return reverseBits(u_input.c);
}

fn func_2(arg_0: u32, arg_1: i32, arg_2: u32) -> bool {
    switch (countOneBits(func_3())) {
        default: {
            let var_0 = 2147483647i;
            global1 = _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_vec2_f32(func_4()).x), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(global0.b, global0.b))) - -392f), _wgslsmith_div_f32(_wgslsmith_f_op_f32(552f + global0.b), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(global0.b)) + _wgslsmith_f_op_f32(floor(473f))))))));
        }
    }
    loop {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
    }
    global1 = global0.b;
    switch (-6876i) {
        case -50340i: {
            global0 = Struct_2(~reverseBits(~(~global0.a)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global0.b) + -1034f))) + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(global0.b * _wgslsmith_f_op_f32(global0.b + global0.b)) - 1321f)), global0.d.x, -_wgslsmith_clamp_vec2_i32(firstTrailingBit(vec2<i32>(u_input.e.x, global0.c)), abs(vec2<i32>(u_input.e.x, u_input.a)), u_input.e) << ((_wgslsmith_mod_vec2_u32(~vec2<u32>(69973u, 4294967295u), select(u_input.b, global0.a.zy, global0.e.xz)) << (u_input.b % vec2<u32>(32u))) % vec2<u32>(32u)), vec4<bool>(all(!func_9(vec4<u32>(u_input.d, 4294967295u, 4294967295u, arg_0), Struct_2(vec3<u32>(35161u, 4294967295u, 1u), 544f, u_input.a, global0.d, global0.e)).e.zwz), true, any(vec3<bool>(func_9(vec4<u32>(arg_0, 4294967295u, 4294967295u, arg_0), Struct_2(global0.a, global0.b, 30236i, u_input.e, global0.e)).e.x, all(vec2<bool>(true, global0.e.x)), true || global0.e.x)), (all(vec2<bool>(global0.e.x, true)) || (true & global0.e.x)) && func_9(~vec4<u32>(arg_0, arg_0, arg_0, u_input.d), func_9(vec4<u32>(0u, global0.a.x, 4294967295u, 19389u), Struct_2(vec3<u32>(4294967295u, u_input.b.x, 1u), global0.b, 1i, global0.d, vec4<bool>(global0.e.x, false, true, global0.e.x)))).e.x));
            global0 = func_9(countOneBits(vec4<u32>(4294967295u >> (_wgslsmith_add_u32(0u, 1u) % 32u), firstTrailingBit(countOneBits(global0.a.x)), _wgslsmith_add_u32(~arg_2, arg_0), countOneBits(4294967295u >> (global0.a.x % 32u)))), func_9(min(_wgslsmith_mult_vec4_u32(vec4<u32>(global0.a.x, 4294967295u, arg_0, 107732u), vec4<u32>(arg_2, u_input.d, 0u, 1u)), ~(~vec4<u32>(16672u, 23246u, arg_2, global0.a.x))), func_9(firstLeadingBit(_wgslsmith_mult_vec4_u32(vec4<u32>(4294967295u, 1u, global0.a.x, u_input.b.x), vec4<u32>(arg_0, 1u, arg_2, arg_2))), func_9(countOneBits(vec4<u32>(arg_0, arg_2, arg_2, 12793u)), func_9(vec4<u32>(1u, u_input.d, global0.a.x, arg_2), Struct_2(vec3<u32>(48575u, 0u, u_input.d), global0.b, 1i, vec2<i32>(global0.d.x, i32(-2147483648)), vec4<bool>(true, false, global0.e.x, false)))))));
        }
        default: {
            let var_0 = Struct_4(global0.b, func_9(countOneBits(vec4<u32>(max(58515u, 4294967295u), global0.a.x, abs(arg_2), ~arg_2)), func_9(vec4<u32>(global0.a.x ^ 1u, arg_0, _wgslsmith_dot_vec3_u32(global0.a, vec3<u32>(arg_0, 7023u, global0.a.x)), arg_2), func_9(vec4<u32>(global0.a.x, 0u, 18988u, u_input.d), func_9(vec4<u32>(arg_0, arg_0, arg_0, 0u), Struct_2(global0.a, 1049f, 2147483647i, vec2<i32>(global0.d.x, u_input.e.x), vec4<bool>(false, true, global0.e.x, global0.e.x)))))), _wgslsmith_add_i32(u_input.a | -1i, ~global0.d.x), ~abs(vec4<u32>(u_input.b.x >> (40433u % 32u), global0.a.x, u_input.d & 30433u, ~arg_0)), Struct_1(global0.b));
        }
    }
    if (!global0.e.x) {
    }
    return _wgslsmith_mod_i32(43994i, u_input.c) == i32(-2147483648);
}

fn func_11(arg_0: vec4<bool>, arg_1: vec3<bool>, arg_2: f32) -> bool {
    global0 = Struct_2(min(vec3<u32>(~u_input.b.x, 63451u, global0.a.x) & func_8(_wgslsmith_clamp_vec3_i32(vec3<i32>(0i, 610i, 2147483647i), vec3<i32>(2750i, 1i, -381i), vec3<i32>(28731i, 0i, global0.d.x)), ~vec3<u32>(14432u, 8415u, 0u), !arg_1, !vec2<bool>(arg_0.x, false)).zxz, countOneBits(global0.a)), arg_2, -28825i, vec2<i32>(~global0.c, firstTrailingBit(func_3())), !vec4<bool>(false, arg_1.x, true, true));
    let var_0 = min(~firstTrailingBit(_wgslsmith_sub_i32(u_input.a, global0.d.x)), 1i);
    let var_1 = Struct_5(_wgslsmith_f_op_vec2_f32(select(vec2<f32>(arg_2, global0.b), vec2<f32>(global0.b, arg_2), arg_1.yz)), -131f, 403f);
    global0 = Struct_2(reverseBits(global0.a), arg_2, u_input.c, -u_input.e, global0.e);
    let var_2 = func_3() & i32(-2147483648);
    return false;
}

fn func_1(arg_0: f32) -> bool {
    switch (2147483647i) {
        default: {
            loop {
                if (LOOP_COUNTERS[19u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
                continue;
            }
            if (global0.e.x & any(select(!select(global0.e.wx, global0.e.zx, global0.e.x), !select(global0.e.zz, global0.e.xw, global0.e.zx), all(vec2<bool>(global0.e.x, false))))) {
            }
            if (func_11(global0.e, vec3<bool>(!(!func_2(global0.a.x, global0.c, 86257u)), !(!(13658u >= global0.a.x)), global0.e.x), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(1099f, _wgslsmith_div_f32(global0.b, _wgslsmith_f_op_f32(-arg_0))))))) {
                var var_0 = Struct_3(min(_wgslsmith_clamp_vec3_u32(_wgslsmith_mod_vec3_u32(~global0.a, ~vec3<u32>(1u, global0.a.x, u_input.b.x)), select(select(global0.a, vec3<u32>(4294967295u, global0.a.x, global0.a.x), global0.e.yxy), ~global0.a, !vec3<bool>(true, global0.e.x, false)), ~(~vec3<u32>(u_input.d, 4294967295u, 57414u))), select(_wgslsmith_clamp_vec3_u32(vec3<u32>(5640u, global0.a.x, global0.a.x), global0.a, abs(global0.a)), global0.a, _wgslsmith_f_op_f32(-global0.b) <= arg_0)), -746f);
            }
        }
    }
    for (var var_0 = i32(-2147483648); global0.e.x | (-(~u_input.a & u_input.e.x) > ~u_input.c); var_0 += 1i) {
        if (LOOP_COUNTERS[20u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
        break;
    }
    switch (global0.d.x) {
        case -36082i: {
            loop {
                if (LOOP_COUNTERS[21u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
                var var_0 = Struct_2(~(~firstLeadingBit(global0.a)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1439f))) + _wgslsmith_f_op_f32(sign(global0.b))), -(i32(-1i) * -global0.c) >> (u_input.d % 32u), select(u_input.e, vec2<i32>(i32(-1i) * -u_input.e.x, countOneBits(u_input.e.x)), global0.e.xx), vec4<bool>(any(vec2<bool>(true, true)), global0.e.x, !(-273f > _wgslsmith_f_op_f32(abs(global0.b))), true));
                var_0 = Struct_2(~vec3<u32>(u_input.b.x, abs(~u_input.d), global0.a.x), func_5().a, firstTrailingBit(17168i), _wgslsmith_mult_vec2_i32(_wgslsmith_sub_vec2_i32(vec2<i32>(-1i, 2147483647i), _wgslsmith_sub_vec2_i32(var_0.d, _wgslsmith_mod_vec2_i32(u_input.e, vec2<i32>(global0.c, 0i)))), vec2<i32>(reverseBits(2986i) >> (~global0.a.x % 32u), firstLeadingBit(global0.c))), var_0.e);
                continue;
            }
            let var_0 = -reverseBits(_wgslsmith_dot_vec3_i32(firstTrailingBit(vec3<i32>(-22816i, u_input.a, global0.d.x)), abs(vec3<i32>(47380i, global0.d.x, global0.d.x)) & vec3<i32>(u_input.c, u_input.c, global0.d.x)));
        }
        default: {
            for (var var_0 = -55053i; ; var_0 -= 1i) {
                if (LOOP_COUNTERS[22u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
                continue;
            }
            global1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(global0.b)));
        }
    }
    for (var var_0 = 58924i; (_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1491f * -1000f) + arg_0)) < _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -2768f)))) & true; var_0 += 1i) {
        if (LOOP_COUNTERS[23u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
        break;
    }
    loop {
        if (LOOP_COUNTERS[24u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
    }
    return !global0.e.x;
}

fn func_12(arg_0: vec2<bool>, arg_1: Struct_2, arg_2: Struct_1, arg_3: Struct_5) -> Struct_2 {
    loop {
        if (LOOP_COUNTERS[25u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
        global0 = arg_1;
    }
    let var_0 = Struct_4(_wgslsmith_f_op_f32(min(776f, _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(abs(1504f)))))), Struct_2(~_wgslsmith_sub_vec3_u32(abs(arg_1.a), _wgslsmith_mult_vec3_u32(vec3<u32>(0u, global0.a.x, u_input.d), vec3<u32>(1u, 4294967295u, u_input.d))), arg_3.c, 1i, u_input.e, func_9(~(vec4<u32>(u_input.d, 83805u, 4294967295u, 0u) & vec4<u32>(40543u, 4294967295u, 11876u, u_input.b.x)), Struct_2(arg_1.a, _wgslsmith_f_op_f32(select(arg_1.b, arg_1.b, false)), ~1i, u_input.e, !arg_1.e)).e), abs(53293i), vec4<u32>(~arg_1.a.x, reverseBits(_wgslsmith_mult_u32(~global0.a.x, global0.a.x)), 0u, ~_wgslsmith_div_u32(~0u, ~u_input.b.x)), Struct_1(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_vec2_f32(func_4()).x))));
    loop {
        if (LOOP_COUNTERS[26u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
        if ((i32(-2147483648) & _wgslsmith_dot_vec2_i32(_wgslsmith_add_vec2_i32(abs(vec2<i32>(global0.c, var_0.c)), func_9(vec4<u32>(u_input.b.x, 0u, arg_1.a.x, 1u), var_0.b).d), ~(~global0.d))) >= -(~_wgslsmith_sub_i32(_wgslsmith_div_i32(var_0.b.d.x, var_0.c), -1i))) {
            global1 = _wgslsmith_f_op_f32(f32(-1f) * -169f);
            var var_1 = Struct_4(arg_3.c, Struct_2(min(_wgslsmith_clamp_vec3_u32(~vec3<u32>(75694u, 1u, 4294967295u), vec3<u32>(1u, global0.a.x, arg_1.a.x) >> (arg_1.a % vec3<u32>(32u)), ~global0.a), ~(arg_1.a << (vec3<u32>(var_0.d.x, 5807u, 7666u) % vec3<u32>(32u)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global0.b) * _wgslsmith_f_op_f32(abs(-2184f)))), ~0i, _wgslsmith_mod_vec2_i32(max(u_input.e, vec2<i32>(2147483647i, var_0.c)), -arg_1.d) | u_input.e, arg_1.e), i32(-2147483648), max(var_0.d, ~_wgslsmith_mod_vec4_u32(var_0.d, var_0.d)), func_5());
            continue;
        }
        loop {
            if (LOOP_COUNTERS[27u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[27u] = LOOP_COUNTERS[27u] + 1u;
            break;
        }
    }
    for (var var_1: i32; !(arg_1.d.x == global0.c); ) {
        if (LOOP_COUNTERS[28u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[28u] = LOOP_COUNTERS[28u] + 1u;
        let var_2 = !(!arg_1.e);
    }
    switch (19451i) {
        case 0i: {
        }
        case -1i: {
            loop {
                if (LOOP_COUNTERS[29u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[29u] = LOOP_COUNTERS[29u] + 1u;
                var var_1 = arg_1;
                continue;
            }
            switch (u_input.a) {
                case 3134i: {
                }
                case -23585i: {
                    let var_1 = arg_2;
                }
                case 2147483647i: {
                    global1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-1187f), -1735f)), _wgslsmith_f_op_f32(-arg_1.b))));
                    var var_1 = _wgslsmith_mult_vec4_i32(min(vec4<i32>(2147483647i, _wgslsmith_mult_i32(1i, 1i), -23430i, -u_input.c), firstLeadingBit(reverseBits(vec4<i32>(u_input.c, var_0.b.c, var_0.b.d.x, 1i)))), -vec4<i32>(global0.c, 25396i, i32(-2147483648), u_input.c ^ var_0.b.d.x)) ^ ~vec4<i32>(arg_1.d.x, abs(_wgslsmith_div_i32(u_input.a, -68515i)), _wgslsmith_sub_i32(16943i, arg_1.c) & var_0.c, reverseBits(-30149i));
                    let var_2 = Struct_2(~vec3<u32>(3071u, ~0u, u_input.b.x), _wgslsmith_f_op_f32(-717f), -28554i, vec2<i32>(_wgslsmith_clamp_i32(~func_3(), reverseBits(-15844i), firstLeadingBit(_wgslsmith_dot_vec3_i32(var_1.xxz, var_1.wwx))), _wgslsmith_mod_i32(u_input.c, _wgslsmith_dot_vec4_i32(vec4<i32>(u_input.a, -59766i, u_input.c, 61725i), vec4<i32>(-17841i, 2147483647i, var_0.b.d.x, var_0.b.c))) | _wgslsmith_dot_vec2_i32(u_input.e, vec2<i32>(0i, 1i))), !select(select(arg_1.e, select(global0.e, vec4<bool>(false, arg_1.e.x, false, false), var_0.b.e), func_9(var_0.d, var_0.b).e), global0.e, func_9(abs(vec4<u32>(24800u, u_input.d, 1u, var_0.b.a.x)), arg_1).e));
                    var var_3 = _wgslsmith_div_vec3_u32(~(~vec3<u32>(var_0.b.a.x, 18155u, u_input.b.x)), vec3<u32>(~15693u, ~var_2.a.x, arg_1.a.x)) | vec3<u32>(_wgslsmith_dot_vec3_u32(vec3<u32>(var_2.a.x, u_input.d, ~29954u), func_9(vec4<u32>(115460u, 28094u, global0.a.x, 1u), Struct_2(vec3<u32>(20560u, var_0.b.a.x, u_input.b.x), var_0.b.b, arg_1.c, global0.d, var_2.e)).a >> (vec3<u32>(56723u, var_0.d.x, u_input.d) % vec3<u32>(32u))), 1u, u_input.d | 4587u);
                }
                default: {
                    let var_1 = firstLeadingBit(firstTrailingBit(max(select(vec3<i32>(2147483647i, arg_1.d.x, 1589i), vec3<i32>(i32(-2147483648), arg_1.d.x, 76286i), var_0.b.e.xwx), _wgslsmith_div_vec3_i32(vec3<i32>(var_0.c, u_input.c, i32(-2147483648)), vec3<i32>(global0.d.x, 1i, -18332i)))) | _wgslsmith_add_vec3_i32(-vec3<i32>(28638i, 51862i, var_0.b.d.x), vec3<i32>(-1i) * -vec3<i32>(0i, global0.c, arg_1.d.x)));
                    global1 = 457f;
                    global1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_2.a - _wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_0.b.b) + -799f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-504f)))));
                    return arg_1;
                }
            }
        }
        case 2147483647i: {
            let var_1 = 1i;
            global1 = _wgslsmith_f_op_f32(sign(-647f));
            for (var var_2 = -28224i; !((u_input.b.x ^ (_wgslsmith_dot_vec4_u32(var_0.d, vec4<u32>(0u, global0.a.x, var_0.b.a.x, global0.a.x)) << (~3360u % 32u))) >= 0u); var_2 += 1i) {
                if (LOOP_COUNTERS[30u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[30u] = LOOP_COUNTERS[30u] + 1u;
            }
            global0 = var_0.b;
        }
        default: {
            var var_1 = Struct_4(-365f, func_9(~(max(vec4<u32>(0u, 2909u, 1u, 51416u), var_0.d) ^ var_0.d), var_0.b), 1i, var_0.d, var_0.e);
            var_1 = var_0;
            switch (countOneBits(45178i)) {
                case 6041i: {
                    let var_2 = Struct_4(-302f, Struct_2(~(~_wgslsmith_add_vec3_u32(arg_1.a, vec3<u32>(0u, 46136u, 1u))), _wgslsmith_f_op_f32(_wgslsmith_div_f32(arg_1.b, _wgslsmith_f_op_f32(-global0.b)) * _wgslsmith_f_op_f32(-1278f)), max(global0.c, -2147483647i), -var_0.b.d, !(!(!vec4<bool>(true, arg_1.e.x, true, false)))), ~u_input.a, var_0.d, Struct_1(arg_3.b));
                    let var_3 = vec3<f32>(func_5().a, -2289f, 419f);
                }
                case 57220i: {
                    global1 = _wgslsmith_f_op_f32(-202f);
                    let var_2 = func_9(vec4<u32>(~(~var_0.d.x) & 42667u, arg_1.a.x, _wgslsmith_add_u32(_wgslsmith_mult_u32(_wgslsmith_div_u32(4294967295u, u_input.d), arg_1.a.x ^ var_0.b.a.x), abs(_wgslsmith_clamp_u32(14644u, 4294967295u, arg_1.a.x))), abs(_wgslsmith_dot_vec3_u32(~vec3<u32>(var_0.b.a.x, var_0.b.a.x, 4294967295u), reverseBits(arg_1.a)))), func_9(_wgslsmith_sub_vec4_u32(~vec4<u32>(var_1.d.x, 20013u, 19397u, 108437u), vec4<u32>(arg_1.a.x, var_0.d.x, var_0.b.a.x, var_1.d.x) << (_wgslsmith_mod_vec4_u32(vec4<u32>(var_1.d.x, 1u, var_0.b.a.x, u_input.d), var_1.d) % vec4<u32>(32u))), Struct_2(countOneBits(vec3<u32>(4294967295u, 18663u, 0u)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_1.e.a) + -319f), countOneBits(min(u_input.c, arg_1.d.x)), -(~var_1.b.d), func_9(_wgslsmith_clamp_vec4_u32(vec4<u32>(var_1.d.x, 56681u, 22542u, 6281u), vec4<u32>(var_1.d.x, 5284u, global0.a.x, 0u), var_1.d), func_9(vec4<u32>(var_1.b.a.x, 33468u, 4294967295u, global0.a.x), var_0.b)).e)));
                    let var_3 = var_2.e.yyx;
                    var var_4 = -20248i;
                }
                case 38077i: {
                    var var_2 = Struct_5(_wgslsmith_div_vec2_f32(vec2<f32>(-869f, _wgslsmith_f_op_f32(-arg_3.a.x)), _wgslsmith_f_op_vec2_f32(abs(arg_3.a))), _wgslsmith_f_op_f32(-352f + arg_3.c), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-1048f), 1280f)));
                    var var_3 = -170f;
                    return var_1.b;
                }
                default: {
                    let var_2 = ~vec3<u32>(~firstLeadingBit(arg_1.a.x) & 4294967295u, arg_1.a.x, arg_1.a.x);
                    global0 = Struct_2(var_2, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(arg_1.b)) + -258f), -arg_1.d.x, vec2<i32>(~(-abs(arg_1.c)), ~abs(func_9(vec4<u32>(var_1.d.x, 25640u, 1u, var_1.b.a.x), var_1.b).d.x)), !global0.e);
                    var var_3 = 209f;
                    var_3 = _wgslsmith_f_op_f32(global0.b * _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(f32(-1f) * -424f)))))));
                    var var_4 = select(!vec2<bool>(var_0.b.e.x != (0u <= var_1.b.a.x), select(true, var_1.b.e.x, false)), arg_0, !(!vec2<bool>(!var_1.b.e.x, 279f >= var_1.b.b)));
                }
            }
            var var_2 = _wgslsmith_mult_u32(_wgslsmith_mod_u32(~func_9(_wgslsmith_add_vec4_u32(vec4<u32>(1u, u_input.b.x, u_input.b.x, 1u), vec4<u32>(0u, 0u, var_0.b.a.x, 1u)), func_9(vec4<u32>(u_input.b.x, 24542u, 59427u, u_input.d), var_1.b)).a.x, var_0.b.a.x ^ reverseBits(~4294967295u)), _wgslsmith_clamp_u32(~68529u, max(_wgslsmith_dot_vec3_u32(global0.a & var_1.b.a, abs(var_1.b.a)), 8824u), min(~6425u, abs(12685u))));
            loop {
                if (LOOP_COUNTERS[31u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[31u] = LOOP_COUNTERS[31u] + 1u;
                continue;
            }
        }
    }
    return Struct_2(reverseBits(vec3<u32>(abs(func_8(vec3<i32>(global0.d.x, global0.c, 2147483647i), vec3<u32>(global0.a.x, 32021u, var_0.b.a.x), global0.e.zyz, vec2<bool>(arg_1.e.x, arg_1.e.x)).x), var_0.d.x, _wgslsmith_mod_u32(_wgslsmith_dot_vec3_u32(global0.a, vec3<u32>(u_input.b.x, arg_1.a.x, arg_1.a.x)), _wgslsmith_dot_vec4_u32(vec4<u32>(u_input.b.x, 1u, 4294967295u, 35606u), vec4<u32>(global0.a.x, 19460u, global0.a.x, arg_1.a.x))))), _wgslsmith_f_op_f32(step(_wgslsmith_div_f32(-1637f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(global0.b + arg_3.b))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(var_0.a + _wgslsmith_f_op_f32(max(-400f, arg_1.b))) * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -976f))))), reverseBits(-32504i), u_input.e, vec4<bool>(all(!(!arg_1.e.wxw)), true, var_0.e.a < _wgslsmith_f_op_f32(min(-161f, 1674f)), !(-1000f == _wgslsmith_f_op_f32(-arg_2.a))));
}

@compute
@workgroup_size(1)
fn main() {
    for (var var_0: i32; var_0 < 32639i; global0 = func_12(vec2<bool>(true, func_1(_wgslsmith_f_op_f32(-1214f - _wgslsmith_f_op_f32(global0.b + global0.b)))), func_9(_wgslsmith_div_vec4_u32(~_wgslsmith_sub_vec4_u32(vec4<u32>(u_input.b.x, u_input.d, global0.a.x, 52788u), vec4<u32>(global0.a.x, u_input.d, 31318u, u_input.d)), select(vec4<u32>(0u, u_input.b.x, 4294967295u, 86635u), vec4<u32>(0u, 22057u, 1u, 42087u), !global0.e)), func_9(~vec4<u32>(global0.a.x, u_input.d, u_input.b.x, 4294967295u) >> (max(vec4<u32>(global0.a.x, global0.a.x, 52989u, global0.a.x), vec4<u32>(25221u, u_input.b.x, u_input.d, u_input.d)) % vec4<u32>(32u)), func_9(~vec4<u32>(31243u, 0u, u_input.d, global0.a.x), func_9(vec4<u32>(5404u, global0.a.x, u_input.b.x, u_input.b.x), Struct_2(vec3<u32>(785u, global0.a.x, 1u), 1862f, u_input.c, global0.d, vec4<bool>(true, global0.e.x, false, global0.e.x)))))), Struct_1(_wgslsmith_f_op_f32(_wgslsmith_div_f32(928f, _wgslsmith_f_op_f32(round(263f))) - global0.b)), Struct_5(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-191f, 1496f)) * _wgslsmith_f_op_vec2_f32(-vec2<f32>(814f, 241f)))), global0.b, _wgslsmith_f_op_f32(2083f + 1441f)))) {
        if (LOOP_COUNTERS[32u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[32u] = LOOP_COUNTERS[32u] + 1u;
    }
    loop {
        if (LOOP_COUNTERS[33u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[33u] = LOOP_COUNTERS[33u] + 1u;
        continue;
    }
    let var_0 = select(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(global0.b + 592f) - global0.b)) >= global0.b, func_10(Struct_5(_wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(-1048f, 381f))), -1354f, 519f), _wgslsmith_mod_vec4_u32(~vec4<u32>(10937u, u_input.d, 1u, 1u), _wgslsmith_sub_vec4_u32(vec4<u32>(u_input.d, 71513u, 0u, 0u) | vec4<u32>(0u, 18302u, 33559u, 25614u), select(vec4<u32>(1u, global0.a.x, 1u, 18126u), vec4<u32>(u_input.b.x, u_input.d, 9379u, global0.a.x), false))), select(-68326i >> (u_input.d % 32u), ~(i32(-2147483648)), true) | _wgslsmith_div_i32(~2147483647i, abs(u_input.a)), global0.e.zy).x, true);
    loop {
        if (LOOP_COUNTERS[34u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[34u] = LOOP_COUNTERS[34u] + 1u;
        let var_1 = Struct_5(_wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(global0.b * global0.b), func_9(vec4<u32>(47115u, global0.a.x, u_input.d, u_input.b.x), Struct_2(vec3<u32>(global0.a.x, 4294967295u, 4294967295u), global0.b, u_input.a, vec2<i32>(2147483647i, -1i), vec4<bool>(var_0, true, var_0, false))).b)))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1097f))), 1449f), global0.b);
        global1 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(f32(-1f) * -1537f))), 796f)) * -182f);
        loop {
            if (LOOP_COUNTERS[35u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[35u] = LOOP_COUNTERS[35u] + 1u;
        }
    }
    global0 = func_9(vec4<u32>(~_wgslsmith_div_u32(1u, ~67426u), global0.a.x, firstTrailingBit(1u), u_input.b.x), func_9(~vec4<u32>(~0u, 0u, global0.a.x, 0u), func_9(~(~vec4<u32>(4294967295u, global0.a.x, 8530u, u_input.b.x)), func_12(global0.e.yx, Struct_2(global0.a, 603f, global0.d.x, vec2<i32>(u_input.a, -24137i), vec4<bool>(false, false, global0.e.x, true)), func_5(), Struct_5(vec2<f32>(835f, -273f), global0.b, -133f)))));
    let x = u_input.a;
    s_output = StorageBuffer(abs(0u), func_9(max(select(vec4<u32>(global0.a.x, global0.a.x, global0.a.x, 4294967295u), vec4<u32>(u_input.b.x, global0.a.x, global0.a.x, global0.a.x), global0.e.x), vec4<u32>(global0.a.x, 36399u, 5415u, u_input.b.x) ^ vec4<u32>(44742u, u_input.d, 32527u, global0.a.x)) << (~(~vec4<u32>(global0.a.x, global0.a.x, 0u, 4294967295u)) % vec4<u32>(32u)), func_12(vec2<bool>(!global0.e.x, true), Struct_2(vec3<u32>(12454u, global0.a.x, global0.a.x), global0.b, -10883i, vec2<i32>(-32213i, global0.d.x), global0.e), Struct_1(_wgslsmith_f_op_f32(1327f - -1328f)), Struct_5(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-469f, global0.b)), global0.b, 750f))).a.x, global0.d.x, _wgslsmith_f_op_vec2_f32(select(vec2<f32>(315f, -1357f), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(max(vec2<f32>(538f, global0.b), vec2<f32>(global0.b, 175f)))) * vec2<f32>(_wgslsmith_f_op_f32(ceil(global0.b)), _wgslsmith_f_op_f32(-global0.b))), global0.e.x)));
}

`;