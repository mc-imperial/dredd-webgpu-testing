export const input = [241,226,213,12,250,104,208,94,163,28,36,223,86,161,200,172,31,161,225,226,13,173,3,59,239,97,241,55,90,138,161,82,193,51,132,218,102,207,75,170,251,172,179,139,81,109,35,245,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [241,226,213,12,250,104,208,94,163,28,36,223,86,161,200,172,31,161,225,226,13,173,3,59,239,97,241,55,90,138,161,82,193,51,132,218,102,207,75,170,251,172,179,139,81,109,35,245,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[241,226,213,12,250,104,208,94,163,28,36,223,86,161,200,172,31,161,225,226,13,173,3,59,239,97,241,55,90,138,161,82,193,51,132,218,102,207,75,170,251,172,179,139,81,109,35,245]}
// Seed: 10003023663353845008

struct Struct_1 {
    a: vec3<u32>,
    b: vec2<u32>,
    c: u32,
}

struct Struct_2 {
    a: Struct_1,
}

struct Struct_3 {
    a: u32,
    b: Struct_2,
}

struct Struct_4 {
    a: f32,
    b: Struct_2,
    c: Struct_2,
    d: Struct_1,
    e: vec4<bool>,
}

struct UniformBuffer {
    a: vec4<u32>,
    b: u32,
    c: vec2<i32>,
    d: i32,
    e: u32,
}

struct StorageBuffer {
    a: f32,
    b: u32,
    c: vec3<u32>,
    d: vec4<i32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> LOOP_COUNTERS: array<u32, 33>;

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn func_6(arg_0: Struct_1, arg_1: i32) -> u32 {
    switch (abs(arg_1)) {
        case i32(-2147483648): {
            var var_0 = max(vec4<i32>(max(arg_1, u_input.c.x), ~arg_1, ~u_input.c.x, -1i >> (u_input.a.x % 32u)) >> ((vec4<u32>(u_input.a.x, 3225u, 0u, 51555u) << (vec4<u32>(arg_0.b.x, arg_0.c, arg_0.b.x, arg_0.a.x) % vec4<u32>(32u))) % vec4<u32>(32u)), select(firstTrailingBit(vec4<i32>(-8379i, arg_1, u_input.d, arg_1) << (u_input.a % vec4<u32>(32u))), ~vec4<i32>(arg_1, arg_1, arg_1, u_input.c.x), true)) | select(_wgslsmith_div_vec4_i32(vec4<i32>(abs(1i), 0i, ~73568i, 17054i), _wgslsmith_sub_vec4_i32(vec4<i32>(u_input.c.x, u_input.c.x, 1i, 63642i), vec4<i32>(u_input.d, arg_1, -20494i, -74816i)) | _wgslsmith_mult_vec4_i32(vec4<i32>(arg_1, arg_1, arg_1, u_input.d), vec4<i32>(-19640i, u_input.d, u_input.d, 0i))), _wgslsmith_clamp_vec4_i32(~vec4<i32>(8940i, arg_1, -23603i, -31657i) << (countOneBits(u_input.a) % vec4<u32>(32u)), (vec4<i32>(u_input.d, u_input.d, -29380i, 0i) & vec4<i32>(20707i, u_input.d, 35159i, -38330i)) ^ ~vec4<i32>(1913i, arg_1, u_input.d, arg_1), -(vec4<i32>(21209i, 1i, arg_1, -36507i) >> (vec4<u32>(arg_0.b.x, 0u, u_input.a.x, 4294967295u) % vec4<u32>(32u)))), true);
        }
        case 0i: {
            for (var var_0 = 2147483647i; _wgslsmith_f_op_f32(f32(-1f) * -504f) > _wgslsmith_f_op_f32(sign(-1818f)); var_0 = _wgslsmith_add_i32(u_input.d | abs(~_wgslsmith_dot_vec4_i32(vec4<i32>(u_input.d, 2147483647i, arg_1, u_input.d), vec4<i32>(u_input.c.x, -1i, 0i, -19009i))), 1i)) {
                if (LOOP_COUNTERS[0u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
                let var_1 = !(!select(select(vec3<bool>(false, true, false), vec3<bool>(true, true, true), true), vec3<bool>(all(vec2<bool>(true, false)), true, true), any(select(vec4<bool>(true, false, false, false), vec4<bool>(false, false, true, true), false))));
            }
            let var_0 = Struct_3(1u, Struct_2(Struct_1(max(~u_input.a.yzz, ~u_input.a.xwz), reverseBits(firstLeadingBit(arg_0.a.xz)), 21820u)));
        }
        case 1i: {
        }
        default: {
            let var_0 = ~select(_wgslsmith_mult_i32(countOneBits(u_input.c.x), _wgslsmith_dot_vec3_i32(-vec3<i32>(arg_1, i32(-2147483648), 1i), _wgslsmith_div_vec3_i32(vec3<i32>(u_input.c.x, u_input.c.x, -9121i), vec3<i32>(21932i, u_input.d, 9772i)))), 37640i, false);
            switch (2147483647i) {
                case -52836i: {
                }
                default: {
                    let var_1 = arg_0;
                }
            }
        }
    }
    switch (_wgslsmith_mult_i32(_wgslsmith_dot_vec2_i32(u_input.c, u_input.c), arg_1)) {
        case 2147483647i: {
            switch (~(i32(-1i) * i32(-2147483648))) {
                case 28056i: {
                    var var_0 = Struct_4(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_div_f32(1000f, -428f) * _wgslsmith_f_op_f32(floor(-1075f))), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-1152f), -325f)))), Struct_2(arg_0), Struct_2(arg_0), Struct_1(countOneBits(vec3<u32>(arg_0.a.x, 1u, 74555u)), u_input.a.zw, ~u_input.a.x & ~firstLeadingBit(arg_0.b.x)), select(vec4<bool>(true, all(select(vec2<bool>(false, true), vec2<bool>(true, true), vec2<bool>(false, false))), false, true), !vec4<bool>(all(vec3<bool>(false, false, false)), all(vec2<bool>(true, true)), any(vec4<bool>(true, false, false, false)), true), true));
                }
                case -1i: {
                    var var_0 = true;
                    var var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-403f - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-571f) - _wgslsmith_div_f32(501f, -456f)))));
                }
                case -28654i: {
                    let var_0 = vec4<u32>(min(22052u, ~(~min(1u, u_input.e))), _wgslsmith_dot_vec3_u32(vec3<u32>(u_input.b, arg_0.c, 87313u) << (_wgslsmith_add_vec3_u32(u_input.a.xzw, u_input.a.xyx) % vec3<u32>(32u)), reverseBits(_wgslsmith_mult_vec3_u32(vec3<u32>(arg_0.c, 78447u, 0u), vec3<u32>(1u, 38057u, 4294967295u)))) | 1u, _wgslsmith_clamp_u32(u_input.b, 4294967295u, ~_wgslsmith_clamp_u32(63100u, u_input.a.x, 0u)) << (min(_wgslsmith_dot_vec2_u32(u_input.a.xz, u_input.a.yz), _wgslsmith_add_u32(63910u << (arg_0.a.x % 32u), abs(0u))) % 32u), ~9099u);
                    var var_1 = Struct_3(abs(var_0.x), Struct_2(arg_0));
                    let var_2 = ~select(u_input.c, u_input.c, select(vec2<bool>(true, true), vec2<bool>(u_input.d > u_input.d, true), vec2<bool>(true, true)));
                }
                default: {
                }
            }
            var var_0 = !(!select(!select(vec3<bool>(true, false, false), vec3<bool>(true, true, true), vec3<bool>(false, true, true)), select(select(vec3<bool>(false, true, true), vec3<bool>(false, true, false), vec3<bool>(true, true, true)), select(vec3<bool>(true, false, true), vec3<bool>(true, false, false), vec3<bool>(false, false, true)), select(vec3<bool>(false, false, true), vec3<bool>(false, false, true), vec3<bool>(true, true, true))), vec3<bool>(true, true, true)));
            if (false) {
                let var_1 = Struct_4(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(1000f))), _wgslsmith_f_op_f32(-1044f - _wgslsmith_f_op_f32(select(-1245f, _wgslsmith_f_op_f32(f32(-1f) * -1199f), true))))), Struct_2(arg_0), Struct_2(Struct_1(select(u_input.a.wzw & vec3<u32>(886u, arg_0.a.x, 4294967295u), u_input.a.yzx, true), u_input.a.xy, ~(~45431u))), Struct_1(_wgslsmith_sub_vec3_u32(select(~vec3<u32>(1u, 1185u, arg_0.b.x), firstLeadingBit(u_input.a.xzy), var_0.x), _wgslsmith_div_vec3_u32(~vec3<u32>(1u, 1u, 3969u), ~arg_0.a)), firstLeadingBit(~u_input.a.yy), 131304u), !select(!vec4<bool>(var_0.x, false, var_0.x, var_0.x), select(vec4<bool>(var_0.x, false, true, false), select(vec4<bool>(var_0.x, var_0.x, false, var_0.x), vec4<bool>(false, var_0.x, false, var_0.x), vec4<bool>(true, false, false, var_0.x)), !vec4<bool>(var_0.x, false, false, false)), vec4<bool>(var_0.x || false, u_input.c.x != -3870i, !var_0.x, true)));
                var var_2 = u_input.c;
                let var_3 = Struct_1(arg_0.a, vec2<u32>(~(~_wgslsmith_mod_u32(30404u, 69629u)), (arg_0.c & 64270u) & 50003u), arg_0.b.x);
                let var_4 = var_1.b;
            }
            let var_1 = vec2<u32>(78835u, ~(~arg_0.c));
            loop {
                if (LOOP_COUNTERS[1u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
                continue;
            }
        }
        case -1i: {
            if (true) {
                let var_0 = Struct_1(firstLeadingBit(_wgslsmith_div_vec3_u32(u_input.a.zxx, _wgslsmith_mod_vec3_u32(arg_0.a, arg_0.a) << (~vec3<u32>(arg_0.b.x, 33147u, arg_0.c) % vec3<u32>(32u)))), vec2<u32>(_wgslsmith_dot_vec4_u32(~u_input.a, u_input.a), 8440u), arg_0.b.x);
                var var_1 = arg_0;
                let var_2 = _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(step(vec2<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(round(-1000f)))), _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(trunc(-878f))))), _wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_div_f32(1618f, 1000f), _wgslsmith_f_op_f32(-844f))))), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(min(vec2<f32>(287f, -2911f), vec2<f32>(1100f, 1657f))))) + _wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(vec2<f32>(-1088f, 559f) * vec2<f32>(-400f, -1000f)), _wgslsmith_f_op_vec2_f32(vec2<f32>(576f, 948f) * vec2<f32>(1690f, 647f)), select(vec2<bool>(true, true), vec2<bool>(false, false), true)))) * vec2<f32>(_wgslsmith_f_op_f32(ceil(1431f)), _wgslsmith_f_op_f32(162f + _wgslsmith_f_op_f32(274f + -1000f)))));
            }
        }
        default: {
            let var_0 = _wgslsmith_f_op_vec4_f32(vec4<f32>(171f, _wgslsmith_f_op_f32(-1183f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(2053f - _wgslsmith_f_op_f32(step(662f, 2811f)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-1026f), _wgslsmith_f_op_f32(f32(-1f) * -1292f), true)))) + vec4<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -106f), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(f32(-1f) * -566f), _wgslsmith_f_op_f32(f32(-1f) * -697f), any(vec2<bool>(false, false))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(1101f)))), 1164f, _wgslsmith_f_op_f32(sign(-612f))));
            var var_1 = select(!vec4<bool>(any(vec4<bool>(true, false, true, false)) && any(vec3<bool>(true, false, true)), false, false, (u_input.e <= 21683u) | true), vec4<bool>(true, true, true, true), ~arg_0.b.x < u_input.a.x);
        }
    }
    let var_0 = Struct_3(1u, Struct_2(arg_0));
    if (select(~((arg_0.a.x >> (var_0.b.a.a.x % 32u)) & arg_0.c) > _wgslsmith_dot_vec4_u32(~_wgslsmith_sub_vec4_u32(vec4<u32>(u_input.a.x, 74906u, arg_0.b.x, 0u), u_input.a), u_input.a ^ _wgslsmith_clamp_vec4_u32(u_input.a, u_input.a, vec4<u32>(u_input.a.x, var_0.a, 54058u, 11566u))), !(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(-1036f))) < _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -317f) + -1000f)), true)) {
        var var_1 = ~(~u_input.a);
        var_1 = u_input.a | ~(~reverseBits(~vec4<u32>(var_0.b.a.a.x, arg_0.b.x, 1377u, 0u)));
    }
    let var_1 = var_0.a;
    return 1u;
}

fn func_5(arg_0: bool) -> bool {
    loop {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        var var_0 = _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(1934f * -409f), 1074f)))))));
        let var_1 = Struct_2(Struct_1(vec3<u32>(u_input.b, u_input.e, u_input.a.x), vec2<u32>(firstLeadingBit(37608u), max(_wgslsmith_mult_u32(3425u, 54876u), ~u_input.e)), u_input.e));
        for (var var_2: i32; ; var_2 -= 1i) {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            let var_3 = vec3<bool>(!arg_0, func_6(var_1.a, 1i) <= ~107546u, true);
        }
        var var_2 = u_input.a;
    }
    var var_0 = Struct_2(Struct_1(vec3<u32>((73696u ^ u_input.b) ^ _wgslsmith_div_u32(u_input.b, u_input.a.x), ~u_input.e, ~u_input.a.x), _wgslsmith_div_vec2_u32(u_input.a.wx, min(select(u_input.a.zx, vec2<u32>(u_input.b, 1u), arg_0), u_input.a.xy & vec2<u32>(u_input.b, u_input.b))), firstTrailingBit(abs(_wgslsmith_clamp_u32(7279u, u_input.a.x, u_input.e)))));
    var_0 = Struct_2(Struct_1(u_input.a.xzw, vec2<u32>(_wgslsmith_sub_u32(var_0.a.b.x, _wgslsmith_sub_u32(var_0.a.a.x, 1u)), ~(~4294967295u)), max(0u, ~u_input.b >> (max(u_input.b, 19450u) % 32u))));
    switch (-22048i) {
        case 10609i: {
            let var_1 = arg_0;
            var var_2 = Struct_4(1000f, Struct_2(Struct_1(var_0.a.a, _wgslsmith_clamp_vec2_u32(u_input.a.wz << (vec2<u32>(25284u, var_0.a.c) % vec2<u32>(32u)), u_input.a.zz, _wgslsmith_mult_vec2_u32(u_input.a.wz, vec2<u32>(u_input.b, 53010u))), var_0.a.b.x)), Struct_2(var_0.a), Struct_1(u_input.a.yxx, ~(~vec2<u32>(0u, 39397u)), ~_wgslsmith_clamp_u32(firstTrailingBit(var_0.a.a.x), u_input.b, reverseBits(42750u))), !vec4<bool>(false, arg_0, all(vec3<bool>(arg_0, var_1, false)), false));
            var var_3 = firstTrailingBit(vec4<i32>(i32(-1i) * -_wgslsmith_mod_i32(u_input.d, -39145i), -1i, u_input.c.x | 1i, i32(-2147483648)));
            let var_4 = _wgslsmith_clamp_i32(select(var_3.x, -(i32(-1i) * -1i), true), -u_input.c.x, i32(-2147483648)) >> (var_0.a.b.x % 32u);
        }
        default: {
            var var_1 = -(_wgslsmith_mod_vec4_i32(-select(vec4<i32>(-1i, u_input.d, u_input.c.x, u_input.c.x), vec4<i32>(18773i, u_input.d, 0i, 13928i), arg_0), _wgslsmith_clamp_vec4_i32(~vec4<i32>(u_input.c.x, i32(-2147483648), 2818i, i32(-2147483648)), min(vec4<i32>(-8222i, 3101i, u_input.d, u_input.d), vec4<i32>(u_input.c.x, u_input.c.x, u_input.d, -1i)), -vec4<i32>(2147483647i, 0i, i32(-2147483648), -73324i))) | reverseBits(vec4<i32>(u_input.d, u_input.d, -u_input.d, u_input.d)));
        }
    }
    switch (-(~countOneBits(1i))) {
        case -22313i: {
            switch (abs(~abs(i32(-2147483648) << (~var_0.a.b.x % 32u)))) {
                case 0i: {
                    var var_1 = _wgslsmith_sub_vec2_u32(vec2<u32>(var_0.a.c, _wgslsmith_dot_vec2_u32(u_input.a.wx, _wgslsmith_add_vec2_u32(var_0.a.b, u_input.a.wx) ^ ~u_input.a.zy)), vec2<u32>(_wgslsmith_sub_u32(4294967295u, abs(~31393u)), min(~_wgslsmith_sub_u32(u_input.a.x, var_0.a.a.x), 39182u)));
                    var var_2 = ~u_input.a.x;
                    var var_3 = vec4<i32>(i32(-2147483648), u_input.c.x, 1i, 1i);
                    var var_4 = var_0.a;
                    var_2 = 1u;
                }
                default: {
                }
            }
            if (false) {
                let var_1 = abs(_wgslsmith_sub_vec2_i32(firstTrailingBit(-u_input.c), abs(_wgslsmith_mult_vec2_i32(u_input.c, vec2<i32>(u_input.d, u_input.d))))) & firstTrailingBit(~select(u_input.c, vec2<i32>(2147483647i, 1i) << (var_0.a.a.xy % vec2<u32>(32u)), !vec2<bool>(arg_0, arg_0)));
                let var_2 = Struct_2(Struct_1(var_0.a.a, ~(~(~var_0.a.a.xx)), u_input.a.x));
                return true;
            }
            loop {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                continue;
            }
            loop {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
            }
            var var_1 = -854f;
        }
        default: {
            if (u_input.d > abs(_wgslsmith_mult_i32(_wgslsmith_mod_i32(-37047i, 1i), _wgslsmith_dot_vec4_i32(vec4<i32>(u_input.c.x, u_input.c.x, 1i, u_input.d), reverseBits(vec4<i32>(u_input.d, u_input.c.x, -6936i, i32(-2147483648))))))) {
                var_0 = Struct_2(Struct_1(vec3<u32>(var_0.a.c, u_input.b, 39700u), reverseBits(max(vec2<u32>(var_0.a.a.x, u_input.b), firstTrailingBit(vec2<u32>(u_input.b, 8159u)))), ~var_0.a.b.x));
            }
            loop {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                continue;
            }
            let var_1 = Struct_4(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1430f - -1000f)))), _wgslsmith_f_op_f32(-952f))), Struct_2(Struct_1(~var_0.a.a, firstTrailingBit(u_input.a.xz), 4294967295u << (0u % 32u))), Struct_2(Struct_1(~_wgslsmith_add_vec3_u32(u_input.a.wzx, var_0.a.a), ~abs(var_0.a.a.yy), _wgslsmith_mult_u32(~u_input.a.x, u_input.b & u_input.b))), var_0.a, vec4<bool>(all(select(select(vec4<bool>(true, arg_0, true, false), vec4<bool>(arg_0, arg_0, arg_0, arg_0), false), select(vec4<bool>(true, false, arg_0, true), vec4<bool>(arg_0, false, arg_0, arg_0), vec4<bool>(true, false, arg_0, false)), !vec4<bool>(false, arg_0, true, arg_0))), true, !arg_0, all(select(select(vec4<bool>(false, arg_0, arg_0, false), vec4<bool>(arg_0, arg_0, true, arg_0), vec4<bool>(false, arg_0, true, false)), select(vec4<bool>(false, true, true, true), vec4<bool>(arg_0, true, arg_0, true), vec4<bool>(arg_0, true, true, true)), select(vec4<bool>(arg_0, arg_0, false, false), vec4<bool>(arg_0, arg_0, arg_0, false), vec4<bool>(arg_0, arg_0, arg_0, arg_0))))));
            loop {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                let var_2 = _wgslsmith_f_op_vec2_f32(round(_wgslsmith_f_op_vec2_f32(sign(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(var_1.a, 1026f))) - vec2<f32>(var_1.a, _wgslsmith_f_op_f32(var_1.a + var_1.a)))))));
                break;
            }
            let var_2 = u_input.a.wy;
        }
    }
    return true;
}

fn func_4(arg_0: i32) -> vec2<u32> {
    switch (i32(-1i) * -41155i) {
        case i32(-2147483648): {
            let var_0 = !any(!vec3<bool>(true, func_5(false), true));
            var var_1 = _wgslsmith_f_op_vec2_f32(trunc(_wgslsmith_f_op_vec2_f32(_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(1384f, -1374f))), vec2<f32>(_wgslsmith_f_op_f32(round(-275f)), _wgslsmith_div_f32(1588f, 1371f))) * vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-223f - -3259f)), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-1625f)))))));
        }
        case 3243i: {
            return vec2<u32>(max(_wgslsmith_sub_u32(76484u, u_input.e), firstTrailingBit(u_input.b)), ~1u | ~_wgslsmith_add_u32(u_input.a.x, u_input.e));
        }
        case 13041i: {
            if (true) {
                let var_0 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(-1000f, -368f, 376f) - vec3<f32>(3192f, -594f, -416f)), _wgslsmith_f_op_vec3_f32(-vec3<f32>(-182f, 1000f, 1000f))) * _wgslsmith_f_op_vec3_f32(select(vec3<f32>(-1048f, -470f, -1289f), _wgslsmith_f_op_vec3_f32(vec3<f32>(-1000f, 119f, 237f) - vec3<f32>(1587f, 488f, 1301f)), true)))) + _wgslsmith_f_op_vec3_f32(max(vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -1459f) - _wgslsmith_f_op_f32(-1038f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-354f)), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(f32(-1f) * -335f)))), vec3<f32>(1f, 1f, 1f))));
            }
            loop {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                continue;
            }
            if (any(vec2<bool>(func_5(true), true))) {
                return vec2<u32>(u_input.e, 4294967295u & _wgslsmith_add_u32(1u, u_input.a.x));
            }
        }
        default: {
            let var_0 = Struct_4(_wgslsmith_f_op_f32(f32(-1f) * -922f), Struct_2(Struct_1(u_input.a.zww & u_input.a.xwx, vec2<u32>(1u, u_input.b), u_input.a.x)), Struct_2(Struct_1(u_input.a.xzw | _wgslsmith_mod_vec3_u32(u_input.a.yyx, u_input.a.wzw), u_input.a.wx, _wgslsmith_mod_u32(1u, u_input.b))), Struct_1(_wgslsmith_mod_vec3_u32(countOneBits(u_input.a.xxx >> (u_input.a.yzy % vec3<u32>(32u))), u_input.a.ywx), ~u_input.a.wx, ~(~select(14163u, 4294967295u, false))), select(select(!select(vec4<bool>(false, true, true, true), vec4<bool>(true, true, false, false), vec4<bool>(true, true, true, true)), vec4<bool>(true, true, true, true), select(vec4<bool>(true, false, false, false), select(vec4<bool>(true, false, false, true), vec4<bool>(true, true, true, true), true), vec4<bool>(true, false, false, false))), !select(select(vec4<bool>(true, true, true, true), vec4<bool>(true, false, true, false), true), vec4<bool>(true, true, true, true), select(vec4<bool>(false, true, false, false), vec4<bool>(true, true, false, true), false)), true));
            if (any(vec3<bool>(!var_0.e.x, all(select(vec3<bool>(true, var_0.e.x, false), select(var_0.e.yyy, vec3<bool>(true, var_0.e.x, false), vec3<bool>(var_0.e.x, var_0.e.x, var_0.e.x)), select(var_0.e.zww, var_0.e.yzx, vec3<bool>(var_0.e.x, var_0.e.x, false)))), any(var_0.e.wy)))) {
                let var_1 = var_0.e.x;
                let var_2 = vec2<u32>(u_input.e, ~var_0.d.c);
                let var_3 = arg_0;
            }
            var var_1 = var_0.e;
            return vec2<u32>(~(~u_input.a.x ^ (u_input.b << (_wgslsmith_mod_u32(43114u, u_input.b) % 32u))), var_0.c.a.b.x);
        }
    }
    for (var var_0: i32; var_0 == 0i; var_0 += 1i) {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
    }
    let var_0 = Struct_1(~u_input.a.zyx, abs(vec2<u32>(_wgslsmith_sub_u32(~u_input.e, abs(69144u)), u_input.e)), _wgslsmith_add_u32(u_input.b, reverseBits(u_input.b)));
    let var_1 = 4294967295u;
    return u_input.a.zz;
}

fn func_7(arg_0: vec3<bool>, arg_1: vec2<u32>) -> bool {
    for (var var_0 = i32(-2147483648); ; ) {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        var var_1 = _wgslsmith_dot_vec2_i32(_wgslsmith_add_vec2_i32(u_input.c, ~vec2<i32>(-36864i, u_input.d)), _wgslsmith_div_vec2_i32(u_input.c, vec2<i32>(reverseBits(-53087i), -u_input.c.x))) <= _wgslsmith_div_i32(u_input.d, reverseBits(-1i));
    }
    var var_0 = -1i;
    loop {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        let var_1 = ~select(_wgslsmith_mult_vec2_u32(countOneBits(_wgslsmith_mult_vec2_u32(u_input.a.ww, vec2<u32>(arg_1.x, 1u))), arg_1), u_input.a.zw, arg_0.yx);
        break;
    }
    for (var var_1: i32; ; var_1 += 1i) {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
    }
    switch (countOneBits(i32(-2147483648))) {
        case i32(-2147483648): {
            var var_1 = vec2<f32>(_wgslsmith_f_op_f32(f32(-1f) * -1408f), _wgslsmith_f_op_f32(exp2(_wgslsmith_div_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -822f), _wgslsmith_f_op_f32(sign(-287f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -697f))))));
            switch (_wgslsmith_sub_i32(_wgslsmith_dot_vec2_i32(firstTrailingBit(-(vec2<i32>(u_input.c.x, -1i) ^ u_input.c)), ~_wgslsmith_clamp_vec2_i32(_wgslsmith_div_vec2_i32(vec2<i32>(u_input.c.x, u_input.d), vec2<i32>(25912i, -28020i)), ~vec2<i32>(0i, u_input.d), vec2<i32>(-3330i, 1i) ^ u_input.c)), _wgslsmith_sub_i32(u_input.c.x << (21586u % 32u), u_input.d))) {
                case i32(-2147483648): {
                    let var_2 = Struct_4(_wgslsmith_f_op_f32(968f - _wgslsmith_f_op_f32(-var_1.x)), Struct_2(Struct_1(~u_input.a.yzz << (u_input.a.xxy % vec3<u32>(32u)), ~vec2<u32>(82695u, 15250u), abs(u_input.e))), Struct_2(Struct_1(vec3<u32>(arg_1.x | 0u, _wgslsmith_clamp_u32(1u, 23838u, 0u), 68319u), ~(~u_input.a.zx), u_input.a.x)), Struct_1(vec3<u32>(~74181u, arg_1.x, reverseBits(arg_1.x)), ~u_input.a.wz, arg_1.x), vec4<bool>(arg_0.x, !(all(vec4<bool>(arg_0.x, true, false, arg_0.x)) || arg_0.x), true, true));
                    var_1 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(exp2(_wgslsmith_f_op_vec2_f32(exp2(_wgslsmith_div_vec2_f32(vec2<f32>(-1336f, var_2.a), _wgslsmith_f_op_vec2_f32(-vec2<f32>(131f, 998f))))))));
                    return select(arg_0.x || all(select(select(vec3<bool>(var_2.e.x, true, var_2.e.x), var_2.e.yxz, arg_0), !vec3<bool>(false, false, var_2.e.x), any(vec3<bool>(true, true, arg_0.x)))), any(!var_2.e.yz) && (_wgslsmith_f_op_f32(trunc(var_1.x)) < _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-var_2.a)))), !all(select(select(vec3<bool>(var_2.e.x, false, arg_0.x), var_2.e.zzz, vec3<bool>(var_2.e.x, false, var_2.e.x)), !vec3<bool>(var_2.e.x, true, true), vec3<bool>(arg_0.x, true, arg_0.x))));
                }
                case 0i: {
                    var var_2 = Struct_4(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1290f) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1322f))), Struct_2(Struct_1(vec3<u32>(~118683u, arg_1.x | 4279u, u_input.a.x), ~vec2<u32>(u_input.e, u_input.b), arg_1.x)), Struct_2(Struct_1(vec3<u32>(reverseBits(u_input.b), arg_1.x, countOneBits(1u)), _wgslsmith_div_vec2_u32(firstLeadingBit(vec2<u32>(4294967295u, 6442u)), max(arg_1, arg_1)), u_input.e)), Struct_1(countOneBits(_wgslsmith_add_vec3_u32(~u_input.a.xwy, vec3<u32>(u_input.a.x, 27912u, u_input.b))), vec2<u32>(u_input.e, func_4(u_input.d).x), 12583u), vec4<bool>(!(firstTrailingBit(arg_1.x) <= u_input.e), min(~u_input.b, ~19198u) >= 32278u, all(!arg_0), !arg_0.x));
                    return _wgslsmith_f_op_f32(round(782f)) > 1162f;
                }
                case -1i: {
                    var_1 = _wgslsmith_f_op_vec2_f32(exp2(vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_div_f32(1000f, var_1.x))), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-var_1.x))))));
                }
                case 56264i: {
                    var var_2 = ~vec4<i32>(~(-(~(i32(-2147483648)))), i32(-2147483648) | (firstLeadingBit(u_input.c.x) >> (func_4(u_input.c.x).x % 32u)), -1i, _wgslsmith_mod_i32(u_input.c.x, u_input.c.x));
                    let var_3 = vec4<i32>(u_input.c.x, _wgslsmith_mod_i32(-18784i, abs(~_wgslsmith_mod_i32(-56879i, u_input.c.x))), u_input.c.x, min(~(-1i), ~1i));
                    var var_4 = Struct_2(Struct_1(vec3<u32>(50292u, countOneBits(arg_1.x << (arg_1.x % 32u)), ~486u), vec2<u32>(func_4(var_2.x).x, func_4(u_input.d).x) & _wgslsmith_div_vec2_u32(_wgslsmith_mod_vec2_u32(vec2<u32>(arg_1.x, 6253u), vec2<u32>(32438u, 16137u)), _wgslsmith_mult_vec2_u32(u_input.a.wz, vec2<u32>(u_input.b, 69119u))), min(select(arg_1.x & 4294967295u, ~arg_1.x, !arg_0.x), 24826u)));
                    let var_5 = arg_0.zx;
                }
                default: {
                    var var_2 = ~(~u_input.e);
                    var var_3 = !arg_0.x | arg_0.x;
                    return arg_0.x;
                }
            }
            if (false) {
                let var_2 = -19500i;
                var_0 = ~_wgslsmith_mod_i32(_wgslsmith_sub_i32(select(u_input.c.x, var_2, false), u_input.c.x) ^ u_input.c.x, var_2);
                var_1 = _wgslsmith_f_op_vec2_f32(max(_wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(-_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(var_1.x, 296f) - vec2<f32>(var_1.x, -1379f)), _wgslsmith_f_op_vec2_f32(min(vec2<f32>(-594f, 182f), vec2<f32>(var_1.x, -1852f))))))), _wgslsmith_f_op_vec2_f32(abs(vec2<f32>(_wgslsmith_f_op_f32(select(409f, 680f, false)), 1f)))));
                var var_3 = u_input.a.yzx;
                var var_4 = select(!select(!(!vec4<bool>(true, false, arg_0.x, arg_0.x)), !vec4<bool>(false, true, arg_0.x, true), vec4<bool>(true, true, -145f > var_1.x, any(arg_0.zy))), select(vec4<bool>(false, i32(-2147483648) >= select(38058i, -1i, true), true, 14933u <= min(var_3.x, u_input.a.x)), !vec4<bool>(arg_0.x, !arg_0.x, arg_0.x, u_input.c.x == var_2), vec4<bool>(var_3.x > 6986u, any(vec2<bool>(arg_0.x, arg_0.x)), any(select(vec4<bool>(false, arg_0.x, false, arg_0.x), vec4<bool>(true, arg_0.x, false, arg_0.x), vec4<bool>(arg_0.x, arg_0.x, arg_0.x, true))), !(arg_0.x | arg_0.x))), select(vec4<bool>(arg_0.x, true, any(!vec3<bool>(arg_0.x, arg_0.x, arg_0.x)), true), select(!vec4<bool>(arg_0.x, false, arg_0.x, true), !select(vec4<bool>(true, arg_0.x, arg_0.x, false), vec4<bool>(true, true, true, arg_0.x), vec4<bool>(true, arg_0.x, arg_0.x, arg_0.x)), !vec4<bool>(arg_0.x, arg_0.x, true, arg_0.x)), !((arg_0.x != arg_0.x) & any(arg_0))));
            }
            for (var var_2 = ~(~(-(~30475i))); ; var_2 -= 1i) {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                let var_3 = Struct_1(u_input.a.xxx, arg_1, ~_wgslsmith_add_u32(_wgslsmith_mult_u32(arg_1.x, arg_1.x), firstTrailingBit(arg_1.x)) << (countOneBits(arg_1.x) % 32u));
                var_2 = u_input.d;
                break;
            }
        }
        default: {
            var var_1 = _wgslsmith_f_op_vec3_f32(min(vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(-859f)))), _wgslsmith_f_op_f32(f32(-1f) * -622f), _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(1f - 504f)))), _wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(abs(vec3<f32>(-880f, -1039f, 2081f)))))), _wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(ceil(-2147f)), _wgslsmith_f_op_f32(347f + 262f), _wgslsmith_f_op_f32(-702f)))))));
        }
    }
    return all(vec4<bool>(!arg_0.x, !(!(!arg_0.x)), false, arg_0.x));
}

fn func_3() -> bool {
    var var_0 = func_7(vec3<bool>(true, true, true), ~_wgslsmith_sub_vec2_u32(func_4(u_input.c.x), select(~vec2<u32>(u_input.a.x, u_input.a.x), u_input.a.wz, vec2<bool>(false, false))));
    switch (countOneBits(~1i)) {
        case -1i: {
        }
        case 1i: {
            let var_1 = Struct_4(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(135f)) + _wgslsmith_f_op_f32(abs(-1124f))))) - _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -388f) - _wgslsmith_f_op_f32(ceil(1868f)))))), Struct_2(Struct_1(_wgslsmith_add_vec3_u32(u_input.a.yzw, select(u_input.a.www, vec3<u32>(1u, 4294967295u, u_input.b), false)), min(u_input.a.zx, vec2<u32>(u_input.b, u_input.b)) ^ vec2<u32>(1u, u_input.a.x), u_input.b)), Struct_2(Struct_1(vec3<u32>(~4294967295u, 0u, 57226u), u_input.a.wx, ~countOneBits(u_input.b))), Struct_1(u_input.a.zyw, u_input.a.wy, u_input.b << (~_wgslsmith_dot_vec4_u32(u_input.a, u_input.a) % 32u)), !select(select(select(vec4<bool>(false, true, true, true), vec4<bool>(false, false, true, false), vec4<bool>(false, false, false, true)), vec4<bool>(false, true, false, false), select(vec4<bool>(false, true, false, true), vec4<bool>(false, false, false, true), false)), select(vec4<bool>(true, true, true, true), select(vec4<bool>(false, true, false, true), vec4<bool>(false, false, false, false), vec4<bool>(true, true, false, false)), true), select(vec4<bool>(true, false, false, true), select(vec4<bool>(true, false, false, false), vec4<bool>(false, true, true, true), false), all(vec2<bool>(true, true)))));
            loop {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                var var_2 = false;
                var_0 = true;
            }
            let var_2 = Struct_1(~_wgslsmith_add_vec3_u32(u_input.a.wwz & abs(u_input.a.xyz), vec3<u32>(~0u, 47439u, _wgslsmith_add_u32(u_input.b, 0u))), ~u_input.a.zx, (firstLeadingBit(countOneBits(6257u)) << (var_1.b.a.c % 32u)) | ~1u);
            loop {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            }
            for (; ; ) {
                if (LOOP_COUNTERS[16u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
                var var_3 = u_input.c.x;
            }
        }
        case 2147483647i: {
            loop {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                continue;
            }
            var_0 = false;
            var var_1 = _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-600f, 768f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1657f + 285f)))), _wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(sign(423f)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1000f)), 244f) * _wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(sign(vec3<f32>(-123f, -1219f, -249f)))))))));
            var var_2 = any(!select(vec4<bool>(true, true, true, true), select(vec4<bool>(true, true, true, true), select(vec4<bool>(false, true, false, false), vec4<bool>(false, false, false, false), vec4<bool>(false, false, false, false)), true), any(vec2<bool>(false, true)) != true));
        }
        default: {
            var var_1 = 1000f;
            switch (countOneBits(_wgslsmith_div_i32(u_input.d >> (_wgslsmith_sub_u32(u_input.a.x, u_input.b) % 32u), 17602i)) << (0u % 32u)) {
                case 0i: {
                    let var_2 = Struct_3(u_input.b, Struct_2(Struct_1(~_wgslsmith_mult_vec3_u32(u_input.a.ywy, vec3<u32>(15028u, 37589u, 4294967295u)), ~abs(vec2<u32>(35216u, 0u)), 1u)));
                }
                case -1i: {
                    return false;
                }
                case 44063i: {
                    var_1 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(-1011f)) - _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-150f), _wgslsmith_f_op_f32(-552f), all(select(vec2<bool>(true, true), select(vec2<bool>(false, true), vec2<bool>(true, true), vec2<bool>(true, false)), func_7(vec3<bool>(false, false, true), u_input.a.yy))))));
                }
                case -69579i: {
                }
                default: {
                    let var_2 = -vec4<i32>(u_input.d, -19441i, u_input.c.x, u_input.d) ^ _wgslsmith_clamp_vec4_i32(min(-vec4<i32>(u_input.d, -43073i, u_input.c.x, u_input.c.x) << (abs(u_input.a) % vec4<u32>(32u)), -vec4<i32>(1i, -15843i, 8738i, -67361i)), -vec4<i32>(u_input.d, 39616i, u_input.c.x, -14080i) | ~(vec4<i32>(u_input.d, u_input.c.x, 1i, u_input.d) >> (vec4<u32>(1u, u_input.b, u_input.a.x, u_input.a.x) % vec4<u32>(32u))), select(~(~vec4<i32>(0i, u_input.d, u_input.c.x, 2147483647i)), vec4<i32>(_wgslsmith_clamp_i32(u_input.c.x, u_input.c.x, u_input.c.x), u_input.d, -9780i, -19743i), !select(vec4<bool>(true, false, true, true), vec4<bool>(true, false, true, false), false)));
                    var var_3 = 1073f;
                }
            }
            var var_2 = -1000f;
            var var_3 = ~u_input.c;
        }
    }
    var var_1 = ~(~_wgslsmith_dot_vec3_u32((u_input.a.wzw >> (vec3<u32>(u_input.b, 87788u, 1u) % vec3<u32>(32u))) >> (u_input.a.xwx % vec3<u32>(32u)), ~_wgslsmith_mod_vec3_u32(u_input.a.zwy, vec3<u32>(u_input.b, u_input.a.x, u_input.b))));
    let var_2 = ~countOneBits(vec4<u32>(7242u, _wgslsmith_div_u32(u_input.e, countOneBits(33372u)), ~_wgslsmith_dot_vec3_u32(vec3<u32>(u_input.e, u_input.e, u_input.e), u_input.a.xzx), 28096u));
    var_1 = u_input.e;
    return true;
}

fn func_2(arg_0: u32, arg_1: Struct_1, arg_2: Struct_3, arg_3: Struct_1) -> f32 {
    if (true != !select((arg_3.b.x < arg_3.a.x) | true, true, (0u > arg_2.a) || func_3())) {
    }
    let var_0 = _wgslsmith_mult_u32(60455u, _wgslsmith_add_u32(u_input.b ^ 70663u, select(~_wgslsmith_dot_vec4_u32(vec4<u32>(4294967295u, 81921u, 102492u, 22073u), u_input.a), ~(~0u), (13249u <= arg_3.a.x) & any(vec2<bool>(true, true)))));
    switch (_wgslsmith_mult_i32(_wgslsmith_dot_vec3_i32(vec3<i32>(1i, 2147483647i, _wgslsmith_clamp_i32(u_input.d, -38010i, i32(-2147483648))), ~vec3<i32>(u_input.c.x, 38i, u_input.c.x)) & firstTrailingBit(u_input.d), ~(-2778i | _wgslsmith_dot_vec3_i32(~vec3<i32>(u_input.d, u_input.c.x, u_input.d), vec3<i32>(-1i, -32429i, 1i))))) {
        case 0i: {
            if (true && select(true, func_5(false), any(vec3<bool>(true, true, true)))) {
                var var_1 = Struct_2(Struct_1(vec3<u32>(~30080u, firstTrailingBit(arg_0), 0u) ^ ~vec3<u32>(19109u, 4294967295u, 3717u), vec2<u32>(1u, 1u), 4294967295u));
            }
            var var_1 = Struct_3(arg_0, arg_2.b);
            return _wgslsmith_f_op_f32(-_wgslsmith_div_f32(609f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(-402f)))));
        }
        case -1i: {
            if (any(select(vec3<bool>(true, true, true), vec3<bool>(false, true, any(vec4<bool>(true, true, true, true))), !vec3<bool>(false, true, -1i < u_input.c.x)))) {
                let var_1 = arg_2;
                var var_2 = !func_3();
                let var_3 = -(-_wgslsmith_dot_vec4_i32(-vec4<i32>(u_input.d, u_input.c.x, u_input.c.x, -66420i), abs(vec4<i32>(u_input.c.x, 0i, -470i, 0i))) ^ 1i);
            }
            var var_1 = arg_3.a.xy;
            if (false) {
                var_1 = u_input.a.xw;
                var var_2 = select(!vec3<bool>(false, true, true & (0u < arg_2.b.a.b.x)), vec3<bool>(!all(select(vec2<bool>(true, false), vec2<bool>(false, true), true)), true, ~(u_input.c.x & 2147483647i) <= -53198i), vec3<bool>(true, true, true));
                var_2 = vec3<bool>(true, false, 43272u <= _wgslsmith_dot_vec4_u32(select(select(u_input.a, u_input.a, true), u_input.a, false), firstLeadingBit(u_input.a) | ~vec4<u32>(arg_0, 0u, arg_3.a.x, 0u)));
                var_2 = !vec3<bool>(var_2.x || any(select(vec3<bool>(true, var_2.x, var_2.x), vec3<bool>(var_2.x, false, false), vec3<bool>(true, var_2.x, var_2.x))), var_2.x, true);
                var_1 = vec2<u32>(_wgslsmith_sub_u32(arg_3.b.x, 0u), 0u);
            }
            var_1 = arg_3.a.zx << (u_input.a.wx % vec2<u32>(32u));
            let var_2 = -abs(vec3<i32>(1i, -1i, _wgslsmith_mult_i32(26296i, u_input.c.x))) >> (countOneBits((vec3<u32>(78870u, var_1.x, var_1.x) & vec3<u32>(41751u, 4294967295u, 0u)) ^ firstTrailingBit(arg_1.a)) % vec3<u32>(32u));
        }
        case i32(-2147483648): {
            loop {
                if (LOOP_COUNTERS[18u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
                continue;
            }
            switch (_wgslsmith_dot_vec3_i32(vec3<i32>(firstLeadingBit(u_input.c.x), -1i, ~u_input.d | ~_wgslsmith_dot_vec3_i32(vec3<i32>(u_input.d, i32(-2147483648), u_input.d), vec3<i32>(i32(-2147483648), 1i, -29472i))), vec3<i32>(u_input.c.x, ~u_input.d, ~(2147483647i & u_input.d)))) {
                case 1i: {
                }
                case i32(-2147483648): {
                }
                case 2147483647i: {
                    let var_1 = Struct_1(_wgslsmith_mod_vec3_u32(_wgslsmith_clamp_vec3_u32(arg_2.b.a.a, ~u_input.a.wyz, vec3<u32>(var_0, ~25094u, arg_0)), ~vec3<u32>(arg_2.b.a.c, 33034u, 31987u) >> ((vec3<u32>(46286u, arg_1.c, arg_1.a.x) >> (~arg_1.a % vec3<u32>(32u))) % vec3<u32>(32u))), ~(~reverseBits(abs(arg_1.b))), arg_1.c);
                    var var_2 = true;
                    var var_3 = var_1;
                }
                case 8564i: {
                    let var_1 = u_input.a.yw;
                    let var_2 = abs(~(_wgslsmith_mult_u32(var_1.x, 27449u) ^ abs(1u))) ^ max(84969u, 34260u);
                    let var_3 = _wgslsmith_sub_vec4_i32(vec4<i32>(reverseBits(u_input.c.x), 20647i, u_input.c.x, u_input.c.x) >> (vec4<u32>(~(~arg_1.c), ~countOneBits(1u), 9743u, _wgslsmith_add_u32(_wgslsmith_dot_vec4_u32(u_input.a, u_input.a), ~u_input.b)) % vec4<u32>(32u)), max(vec4<i32>(i32(-2147483648), -_wgslsmith_mod_i32(2147483647i, i32(-2147483648)), 1i, u_input.d), -vec4<i32>(-3097i, u_input.c.x, -4377i, 15398i) & firstTrailingBit(reverseBits(vec4<i32>(u_input.d, 36053i, u_input.c.x, u_input.c.x)))));
                    var var_4 = abs(-15026i);
                    var var_5 = _wgslsmith_div_u32(~(~(~u_input.a.x)), ~(~arg_3.a.x | 0u)) >> (_wgslsmith_mult_u32(59653u, _wgslsmith_dot_vec2_u32(arg_3.b & (vec2<u32>(22684u, 66316u) ^ vec2<u32>(4294967295u, arg_2.b.a.c)), _wgslsmith_mod_vec2_u32(select(vec2<u32>(u_input.a.x, arg_3.b.x), arg_3.a.zz, false), abs(arg_1.b)))) % 32u);
                }
                default: {
                    var var_1 = _wgslsmith_mod_u32(max(~37762u, 1u), ~_wgslsmith_div_u32(4294967295u, ~arg_0 << (_wgslsmith_mod_u32(17755u, var_0) % 32u)));
                    var_1 = _wgslsmith_mod_u32(_wgslsmith_div_u32(_wgslsmith_mult_u32(4294967295u, _wgslsmith_dot_vec2_u32(arg_2.b.a.b, arg_1.a.xx)), ~31396u) | arg_0, ~reverseBits(683u));
                    let var_2 = Struct_2(arg_2.b.a);
                    let var_3 = !select(vec2<bool>(select(func_3(), true, any(vec2<bool>(false, true))), true), !select(vec2<bool>(true, true), vec2<bool>(true, true), select(vec2<bool>(false, false), vec2<bool>(true, false), true)), !all(vec2<bool>(false, true)));
                }
            }
            if (true) {
                var var_1 = _wgslsmith_clamp_vec2_u32(_wgslsmith_mult_vec2_u32(vec2<u32>(min(133554u, var_0 & 76841u), min(0u, ~4294967295u)), _wgslsmith_sub_vec2_u32(vec2<u32>(76026u, abs(arg_1.b.x)), _wgslsmith_mult_vec2_u32(u_input.a.zz, vec2<u32>(arg_3.a.x, u_input.a.x)) & vec2<u32>(var_0, 55872u))), vec2<u32>(_wgslsmith_dot_vec3_u32(select(~vec3<u32>(54296u, 4294967295u, 17885u), vec3<u32>(u_input.b, arg_1.a.x, 4294967295u), vec3<bool>(true, true, false)), ~arg_1.a >> (~vec3<u32>(47799u, 9868u, 0u) % vec3<u32>(32u))), arg_0), arg_3.a.yy);
                var var_2 = Struct_1(vec3<u32>(1u, arg_0, arg_3.a.x), firstLeadingBit(select(vec2<u32>(u_input.e, 4294967295u), arg_2.b.a.b << (u_input.a.yx % vec2<u32>(32u)), select(vec2<bool>(false, true), vec2<bool>(false, false), true)) << (_wgslsmith_mult_vec2_u32(arg_2.b.a.b >> (vec2<u32>(var_0, arg_3.b.x) % vec2<u32>(32u)), ~arg_2.b.a.b) % vec2<u32>(32u))), ~var_0);
                var var_3 = false;
            }
            let var_1 = countOneBits(max(_wgslsmith_sub_vec3_i32(-(vec3<i32>(16338i, u_input.d, u_input.d) << (vec3<u32>(1u, var_0, arg_0) % vec3<u32>(32u))), ~(~vec3<i32>(-1i, u_input.c.x, 79607i))), vec3<i32>(u_input.c.x, ~(i32(-1i) * -17349i), countOneBits(-u_input.c.x))));
            let var_2 = vec4<bool>(false, false, (37197u & ~arg_3.b.x) > _wgslsmith_dot_vec3_u32(firstTrailingBit(vec3<u32>(0u, var_0, arg_2.a)), ~abs(arg_3.a)), 134975u <= arg_3.c);
        }
        case -7398i: {
            for (var var_1: i32; all(!vec2<bool>(false, arg_3.a.x <= 1u)); var_1 += 1i) {
                if (LOOP_COUNTERS[19u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
                continue;
            }
            switch (_wgslsmith_add_i32(u_input.c.x, 0i)) {
                case -1i: {
                }
                default: {
                    let var_1 = -firstTrailingBit(_wgslsmith_mod_i32(u_input.d, 2147483647i));
                    var var_2 = _wgslsmith_mod_vec4_i32(~_wgslsmith_mod_vec4_i32(vec4<i32>(1i, ~u_input.c.x, countOneBits(var_1), 1i), ~vec4<i32>(var_1, var_1, var_1, u_input.d)), ~_wgslsmith_add_vec4_i32(vec4<i32>(var_1, var_1, u_input.c.x, u_input.d), -vec4<i32>(0i, -1311i, 0i, u_input.d)));
                    var_2 = _wgslsmith_add_vec4_i32(-firstLeadingBit(-countOneBits(vec4<i32>(-51051i, -881i, 2147483647i, 2147483647i))), -(~_wgslsmith_div_vec4_i32(-vec4<i32>(var_2.x, var_1, 1i, -31984i), -vec4<i32>(-4993i, 33575i, var_1, -26020i))));
                }
            }
            loop {
                if (LOOP_COUNTERS[20u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
                let var_1 = vec4<bool>(true, false && !func_3(), false, any(vec2<bool>(false, -1000f < _wgslsmith_f_op_f32(trunc(1310f)))));
                break;
            }
            if (true) {
                let var_1 = _wgslsmith_mult_i32(u_input.c.x, _wgslsmith_mod_i32(u_input.c.x, u_input.d)) >> (arg_0 % 32u);
                let var_2 = vec2<bool>(select(!(!all(vec2<bool>(true, false))), !(_wgslsmith_f_op_f32(f32(-1f) * -1814f) < _wgslsmith_f_op_f32(round(1000f))), !all(vec2<bool>(true, false))), func_3());
            }
            loop {
                if (LOOP_COUNTERS[21u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
                return 1f;
            }
        }
        default: {
            for (var var_1: i32; ; ) {
                if (LOOP_COUNTERS[22u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
            }
            for (var var_1: i32; func_5(true & !(_wgslsmith_mult_u32(62694u, var_0) <= _wgslsmith_dot_vec3_u32(u_input.a.yxy, vec3<u32>(24986u, 46927u, 53251u)))); var_1 += 1i) {
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
                let var_1 = firstTrailingBit(reverseBits((vec2<i32>(2147483647i, u_input.c.x) >> (u_input.a.zy % vec2<u32>(32u))) << (~_wgslsmith_sub_vec2_u32(vec2<u32>(arg_0, 812u), vec2<u32>(50881u, arg_3.c)) % vec2<u32>(32u))));
                var var_2 = Struct_1(~_wgslsmith_add_vec3_u32(vec3<u32>(abs(4294967295u), ~arg_3.b.x, arg_2.b.a.a.x ^ 4294967295u), ~firstLeadingBit(arg_1.a)), arg_3.a.yx, _wgslsmith_mult_u32(~14959u >> (~u_input.a.x % 32u), ~(~1u)));
                var_2 = Struct_1(var_2.a, max(_wgslsmith_sub_vec2_u32(arg_3.b, vec2<u32>(_wgslsmith_dot_vec3_u32(u_input.a.yxw, vec3<u32>(86087u, 1u, 15779u)), arg_3.b.x)), min(arg_1.b << (~vec2<u32>(var_0, arg_1.a.x) % vec2<u32>(32u)), min(firstTrailingBit(vec2<u32>(var_2.c, arg_2.b.a.b.x)), vec2<u32>(13358u, arg_1.a.x)))), 77645u);
                continue;
            }
            var var_1 = ~arg_3.b;
            var var_2 = -(~vec3<i32>(22935i, 2147483647i, firstLeadingBit(_wgslsmith_dot_vec3_i32(vec3<i32>(6180i, i32(-2147483648), 2147483647i), vec3<i32>(u_input.d, u_input.d, u_input.d)))));
        }
    }
    for (; ; ) {
        if (LOOP_COUNTERS[25u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
        switch (u_input.c.x) {
            case -56404i: {
                let var_1 = reverseBits(max(_wgslsmith_div_vec3_i32(-vec3<i32>(-67477i, 52964i, 0i), abs(vec3<i32>(u_input.c.x, u_input.d, 6889i))), vec3<i32>(u_input.d, -1i, ~(-1i)))) >> (vec3<u32>(_wgslsmith_add_u32(_wgslsmith_dot_vec4_u32(~u_input.a, select(u_input.a, vec4<u32>(0u, 4294967295u, 40831u, 38777u), true)), _wgslsmith_add_u32(0u, 1u)), var_0, ~(~0u)) % vec3<u32>(32u));
            }
            default: {
                var var_1 = Struct_4(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(select(262f, -2424f, true)), 1970f)) * _wgslsmith_f_op_f32(min(1460f, -1259f)))), Struct_2(arg_3), arg_2.b, Struct_1(arg_1.a, (firstLeadingBit(u_input.a.wy) & arg_2.b.a.b) & (abs(vec2<u32>(82345u, arg_1.c)) & reverseBits(vec2<u32>(u_input.a.x, 0u))), 4294967295u), vec4<bool>(false, true, false, true));
                var_1 = Struct_4(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-687f * var_1.a)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(var_1.a, var_1.a))), var_1.e.x)))), Struct_2(arg_3), Struct_2(arg_3), Struct_1(~(firstTrailingBit(arg_2.b.a.a) ^ _wgslsmith_sub_vec3_u32(vec3<u32>(var_1.b.a.b.x, arg_0, 4294967295u), vec3<u32>(arg_0, 1u, 52837u))), vec2<u32>(arg_0, ~16065u), arg_2.b.a.c), var_1.e);
                var_1 = Struct_4(var_1.a, arg_2.b, var_1.c, Struct_1(max(max(min(arg_1.a, vec3<u32>(var_0, 11029u, arg_3.a.x)), vec3<u32>(arg_1.a.x, arg_3.c, 0u)), ~(var_1.c.a.a ^ vec3<u32>(1u, var_0, 4294967295u))), arg_1.b, arg_3.b.x), select(vec4<bool>(false, false || (1306f == var_1.a), true, var_1.e.x), !var_1.e, any(vec2<bool>(!var_1.e.x, true))));
                var_1 = Struct_4(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(-584f, _wgslsmith_f_op_f32(var_1.a + 1199f)))), arg_2.b, var_1.c, Struct_1(u_input.a.ywy, vec2<u32>(arg_3.a.x, min(arg_2.a, 112425u)), 9382u), vec4<bool>(true, !(!(!var_1.e.x)), !var_1.e.x, !any(select(vec3<bool>(false, true, var_1.e.x), var_1.e.xyw, vec3<bool>(var_1.e.x, false, var_1.e.x)))));
                return _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(341f * _wgslsmith_f_op_f32(select(715f, -616f, var_1.e.x))), 981f))));
            }
        }
        continue;
    }
    if (!any(vec4<bool>(all(vec4<bool>(true, false, false, true)) || false, !select(false, false, false), all(vec2<bool>(true, false)), false))) {
        loop {
            if (LOOP_COUNTERS[26u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
            var var_1 = select(select(vec4<bool>(true, false, func_7(vec3<bool>(true, true, true), u_input.a.ww ^ arg_1.b), true), select(select(vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true), false), vec4<bool>(true, true, true, true), vec4<bool>(true, 16676u < arg_3.b.x, false, true)), select(vec4<bool>(true, true, func_7(vec3<bool>(false, false, true), arg_1.b), true), vec4<bool>(true, true, true, true), !select(vec4<bool>(false, false, false, true), vec4<bool>(true, true, true, false), false))), select(!select(select(vec4<bool>(false, true, true, true), vec4<bool>(false, true, false, false), true), vec4<bool>(true, true, true, true), all(vec2<bool>(false, false))), select(select(vec4<bool>(true, false, false, false), vec4<bool>(false, false, true, false), vec4<bool>(true, true, true, true)), !select(vec4<bool>(false, false, true, true), vec4<bool>(false, false, false, false), vec4<bool>(false, true, false, false)), select(select(vec4<bool>(false, true, true, false), vec4<bool>(false, false, true, true), true), vec4<bool>(true, true, true, true), false)), vec4<bool>(func_3() | select(true, true, true), true, true, true)), vec4<bool>(true, true, true, true));
            break;
        }
    }
    return -1000f;
}

fn func_8(arg_0: f32, arg_1: Struct_4, arg_2: Struct_1) -> bool {
    var var_0 = 1u;
    for (var var_1 = 0i; select(false, !arg_1.e.x, true); var_0 = ~arg_1.c.a.b.x) {
        if (LOOP_COUNTERS[27u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[27u] = LOOP_COUNTERS[27u] + 1u;
        var var_2 = firstTrailingBit(_wgslsmith_sub_vec4_i32(reverseBits(-(~vec4<i32>(u_input.c.x, -12083i, u_input.c.x, 23060i))), _wgslsmith_mod_vec4_i32(reverseBits(vec4<i32>(1i, 43833i, -60713i, u_input.c.x)), ~max(vec4<i32>(1i, u_input.c.x, u_input.c.x, -1i), vec4<i32>(u_input.d, -48778i, u_input.d, u_input.c.x)))));
        switch (~(i32(-2147483648))) {
            case 7170i: {
            }
            default: {
            }
        }
        let var_3 = ~1u;
    }
    var var_1 = Struct_3(arg_1.d.c, Struct_2(arg_1.c.a));
    let var_2 = 1i;
    loop {
        if (LOOP_COUNTERS[28u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[28u] = LOOP_COUNTERS[28u] + 1u;
        var var_3 = var_1.b;
        let var_4 = Struct_3(select(~(~func_6(var_3.a, var_2)), 1u, arg_1.e.x), var_1.b);
        let var_5 = 283f;
        break;
    }
    return arg_1.e.x;
}

fn func_1(arg_0: Struct_2, arg_1: Struct_2, arg_2: vec2<u32>) -> Struct_1 {
    if (func_8(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(f32(-1f) * -307f))))) + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-171f)) + _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(func_2(11051u, Struct_1(vec3<u32>(0u, u_input.e, 4294967295u), arg_2, u_input.b), Struct_3(arg_1.a.b.x, Struct_2(arg_0.a)), arg_1.a)))))), Struct_4(-600f, arg_0, Struct_2(Struct_1(~arg_0.a.a, arg_0.a.b & arg_1.a.a.zy, arg_1.a.b.x | arg_0.a.a.x)), arg_1.a, vec4<bool>(false, any(vec2<bool>(false, true)), true, true)), Struct_1(arg_0.a.a, abs(~vec2<u32>(arg_0.a.a.x, arg_1.a.a.x)), ~24957u))) {
        var var_0 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1000f, 242f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -429f) * 2906f))) - vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(168f * 364f), -1338f))), _wgslsmith_f_op_f32(f32(-1f) * -1240f), 710f));
    }
    var var_0 = vec2<bool>(true, true);
    var var_1 = max(u_input.b, 0u);
    var_0 = select(vec2<bool>(!func_8(_wgslsmith_f_op_f32(-235f + 124f), Struct_4(2873f, Struct_2(arg_1.a), Struct_2(arg_1.a), Struct_1(vec3<u32>(1u, u_input.e, 19241u), vec2<u32>(603u, arg_0.a.c), 61988u), vec4<bool>(true, var_0.x, true, var_0.x)), Struct_1(vec3<u32>(25483u, arg_0.a.c, arg_2.x), u_input.a.wz, 55140u)), var_0.x), !(!select(vec2<bool>(true, true), vec2<bool>(false, true), !var_0.x)), select(select(select(select(vec2<bool>(var_0.x, var_0.x), vec2<bool>(var_0.x, var_0.x), vec2<bool>(false, var_0.x)), vec2<bool>(false, false), select(vec2<bool>(var_0.x, false), vec2<bool>(var_0.x, var_0.x), var_0.x)), !(!vec2<bool>(var_0.x, true)), !select(vec2<bool>(var_0.x, true), vec2<bool>(var_0.x, var_0.x), var_0.x)), vec2<bool>(true, var_0.x), var_0.x));
    loop {
        if (LOOP_COUNTERS[29u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[29u] = LOOP_COUNTERS[29u] + 1u;
        var var_2 = false;
        continue;
    }
    return arg_1.a;
}

fn func_9(arg_0: Struct_1) -> Struct_1 {
    let var_0 = Struct_2(Struct_1(countOneBits(arg_0.a), arg_0.b, 0u));
    switch (u_input.c.x) {
        case 39984i: {
            var var_1 = abs(vec3<i32>(reverseBits(_wgslsmith_mult_i32(abs(u_input.c.x), ~9642i)), -35730i, u_input.d));
            var var_2 = vec3<f32>(_wgslsmith_f_op_f32(max(-274f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-2359f - 1783f) * _wgslsmith_f_op_f32(select(1484f, -1000f, true)))))), _wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-691f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(2200f, -1106f)))) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(2134f, _wgslsmith_div_f32(620f, 598f))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(1000f * -978f), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(step(1000f, -733f))))))));
            var var_3 = var_0;
            var_1 = -firstTrailingBit(vec3<i32>(max(u_input.d, i32(-1i) * i32(-2147483648)), ~_wgslsmith_mod_i32(0i, -13738i), var_1.x));
        }
        case 10108i: {
        }
        case -19485i: {
        }
        default: {
        }
    }
    switch (~1i) {
        case 19888i: {
            var var_1 = vec2<i32>(u_input.c.x, countOneBits(1i));
            if (true) {
            }
        }
        case 2147483647i: {
        }
        default: {
            switch (~_wgslsmith_sub_i32(14099i, 12983i)) {
                case 34784i: {
                    let var_1 = vec2<bool>(func_5(true && (all(vec3<bool>(false, true, false)) && true)), all(vec3<bool>(any(select(vec3<bool>(false, false, true), vec3<bool>(true, false, false), vec3<bool>(true, true, true))), _wgslsmith_f_op_f32(-256f * -567f) > _wgslsmith_f_op_f32(step(-961f, 351f)), all(select(vec3<bool>(false, true, false), vec3<bool>(false, true, false), vec3<bool>(true, false, false))))));
                    var var_2 = Struct_3(1u, Struct_2(Struct_1(firstLeadingBit(vec3<u32>(var_0.a.c, 79507u, 8860u)), arg_0.b, arg_0.a.x)));
                }
                case -1i: {
                    let var_1 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(min(vec4<f32>(240f, -950f, 1000f, 710f), vec4<f32>(634f, 483f, 199f, -1665f))) + vec4<f32>(-566f, -1254f, 1000f, 142f)) - _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(round(vec4<f32>(-163f, -1463f, 468f, 961f))))) * _wgslsmith_f_op_vec4_f32(min(vec4<f32>(_wgslsmith_div_f32(-1339f, 610f), _wgslsmith_f_op_f32(sign(778f)), _wgslsmith_f_op_f32(func_2(0u, arg_0, Struct_3(12064u, var_0), Struct_1(vec3<u32>(var_0.a.a.x, u_input.b, 24464u), u_input.a.yy, var_0.a.a.x))), _wgslsmith_f_op_f32(f32(-1f) * -713f)), _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(458f, 704f, 596f, 498f) * vec4<f32>(294f, 423f, -1047f, -585f)), _wgslsmith_f_op_vec4_f32(step(vec4<f32>(-651f, 242f, 1000f, 613f), vec4<f32>(-831f, -1026f, 457f, 2115f))))))) + _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_div_f32(-1095f, 250f), _wgslsmith_f_op_f32(-372f - -1550f), _wgslsmith_f_op_f32(f32(-1f) * -240f), _wgslsmith_f_op_f32(f32(-1f) * -179f)) - _wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(vec4<f32>(1002f, 534f, 2377f, 2219f), vec4<f32>(1569f, 1125f, 537f, -1687f)) + _wgslsmith_f_op_vec4_f32(-vec4<f32>(590f, 828f, 356f, 721f)))) - vec4<f32>(-769f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -607f)), _wgslsmith_f_op_f32(-2061f * _wgslsmith_f_op_f32(max(-950f, 289f))), _wgslsmith_f_op_f32(abs(-182f)))));
                    var var_2 = Struct_3(~arg_0.c, Struct_2(var_0.a));
                    let var_3 = any(vec2<bool>(any(vec3<bool>(true, true, true)), true));
                    var var_4 = var_3;
                }
                default: {
                    let var_1 = ~vec3<u32>(~firstTrailingBit(~arg_0.c), ~1u, _wgslsmith_sub_u32(_wgslsmith_dot_vec2_u32(u_input.a.wy, firstLeadingBit(u_input.a.wz)), var_0.a.c));
                    var var_2 = firstLeadingBit(1i) < -(-64500i | countOneBits(u_input.c.x));
                    let var_3 = abs(_wgslsmith_sub_vec3_u32(countOneBits(u_input.a.xww), u_input.a.yzw ^ select(vec3<u32>(47974u, 0u, var_1.x), _wgslsmith_add_vec3_u32(arg_0.a, vec3<u32>(arg_0.b.x, var_0.a.c, u_input.a.x)), vec3<bool>(true, true, true))));
                    var_2 = true;
                }
            }
            let var_1 = var_0.a;
            for (var var_2 = _wgslsmith_dot_vec4_i32(abs(_wgslsmith_clamp_vec4_i32(abs(vec4<i32>(-10116i, u_input.c.x, u_input.d, -64356i)) | countOneBits(vec4<i32>(u_input.c.x, u_input.c.x, u_input.d, -1i)), ~_wgslsmith_mult_vec4_i32(vec4<i32>(u_input.d, u_input.c.x, u_input.c.x, 2147483647i), vec4<i32>(-1i, 2147483647i, 1i, u_input.c.x)), vec4<i32>(-1i) * -vec4<i32>(u_input.d, u_input.c.x, u_input.d, 60851i))), min(-select(vec4<i32>(34205i, -43366i, u_input.d, -82912i) >> (vec4<u32>(u_input.a.x, arg_0.b.x, 1u, arg_0.c) % vec4<u32>(32u)), -vec4<i32>(u_input.c.x, u_input.c.x, u_input.d, u_input.c.x), vec4<bool>(false, false, true, true)), _wgslsmith_sub_vec4_i32(vec4<i32>(u_input.d, _wgslsmith_mult_i32(u_input.d, u_input.c.x), i32(-1i) * -19770i, ~u_input.c.x), firstLeadingBit(_wgslsmith_clamp_vec4_i32(vec4<i32>(u_input.c.x, i32(-2147483648), u_input.d, u_input.c.x), vec4<i32>(u_input.c.x, u_input.d, u_input.d, u_input.d), vec4<i32>(-1i, 11399i, u_input.c.x, 0i)))))); var_2 == -63305i; var_2 += 1i) {
                if (LOOP_COUNTERS[30u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[30u] = LOOP_COUNTERS[30u] + 1u;
                let var_3 = 7635u;
                var var_4 = Struct_2(arg_0);
            }
            switch (-16983i) {
                case 1i: {
                }
                case 0i: {
                    let var_2 = _wgslsmith_f_op_vec2_f32(step(vec2<f32>(1f, 1f), _wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(abs(vec2<f32>(-2859f, 1625f))) - _wgslsmith_div_vec2_f32(vec2<f32>(1091f, -282f), vec2<f32>(-548f, -115f))) * vec2<f32>(1f, 1f)), _wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(round(_wgslsmith_div_vec2_f32(vec2<f32>(-201f, -1973f), vec2<f32>(114f, -533f)))), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(1000f, -254f)) - _wgslsmith_f_op_vec2_f32(vec2<f32>(-1568f, -434f) * vec2<f32>(408f, -1231f))), select(vec2<bool>(true, false), vec2<bool>(true, true), true))), !select(vec2<bool>(true, true), vec2<bool>(true, true), vec2<bool>(true, true))))));
                    let var_3 = var_0;
                    let var_4 = -31138i;
                }
                case 51169i: {
                    var var_2 = Struct_1(vec3<u32>(_wgslsmith_dot_vec2_u32(vec2<u32>(arg_0.b.x, 31953u), ~vec2<u32>(var_1.b.x, 0u)), firstLeadingBit(var_0.a.b.x), 0u) ^ (u_input.a.zzw | _wgslsmith_mod_vec3_u32(vec3<u32>(4294967295u, var_0.a.b.x, var_0.a.c) | vec3<u32>(u_input.a.x, var_0.a.a.x, var_1.b.x), _wgslsmith_clamp_vec3_u32(u_input.a.yxx, var_1.a, vec3<u32>(0u, 31434u, 0u)))), vec2<u32>(select(u_input.b, 0u, true) | 45773u, firstLeadingBit(~var_0.a.c ^ func_6(Struct_1(vec3<u32>(0u, 1u, arg_0.c), vec2<u32>(var_1.c, 4294967295u), 17508u), 1i))), max(4294967295u, firstLeadingBit(~1u) ^ arg_0.a.x));
                    let var_3 = ~select(_wgslsmith_add_vec4_u32(vec4<u32>(47158u, abs(arg_0.c), u_input.b & var_0.a.a.x, u_input.a.x), u_input.a), ~(vec4<u32>(0u, 4294967295u, var_0.a.b.x, 4294967295u) | vec4<u32>(1u, 4294967295u, 1u, var_2.b.x)), vec4<bool>(!all(vec2<bool>(false, true)), select(true, true, true), any(vec3<bool>(true, true, true)), all(select(vec4<bool>(false, true, true, false), vec4<bool>(false, false, false, false), vec4<bool>(true, true, true, false)))));
                    var var_4 = -_wgslsmith_add_vec3_i32(-vec3<i32>(2147483647i, _wgslsmith_mult_i32(56859i, u_input.d), 93988i << (var_3.x % 32u)), select(select(~vec3<i32>(u_input.c.x, u_input.d, -1i), _wgslsmith_add_vec3_i32(vec3<i32>(u_input.c.x, -2903i, u_input.c.x), vec3<i32>(u_input.c.x, 0i, u_input.c.x)), true), firstTrailingBit(_wgslsmith_add_vec3_i32(vec3<i32>(u_input.c.x, 16491i, u_input.d), vec3<i32>(u_input.d, 48749i, u_input.c.x))), vec3<bool>(true, any(vec4<bool>(true, false, true, true)), false)));
                    let var_5 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(560f, -435f, _wgslsmith_f_op_f32(-388f))) + _wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(-1754f, -509f, -1000f)))))));
                }
                default: {
                }
            }
            var var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-920f - _wgslsmith_f_op_f32(f32(-1f) * -177f)), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(f32(-1f) * -897f))), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(func_2(73885u, arg_0, Struct_3(var_1.c, Struct_2(Struct_1(vec3<u32>(arg_0.c, var_1.c, var_0.a.a.x), u_input.a.xy, 0u))), arg_0)), _wgslsmith_f_op_f32(select(287f, -1560f, true)))))))));
        }
    }
    for (var var_1: i32; true; var_1 += 1i) {
        if (LOOP_COUNTERS[31u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[31u] = LOOP_COUNTERS[31u] + 1u;
        let var_2 = countOneBits(_wgslsmith_clamp_u32(u_input.a.x, ~max(arg_0.b.x, 0u) & _wgslsmith_div_u32(0u, 5878u), _wgslsmith_sub_u32(1u, ~func_6(arg_0, -1i))));
    }
    let var_1 = -(_wgslsmith_sub_vec4_i32(_wgslsmith_mod_vec4_i32(vec4<i32>(i32(-2147483648), i32(-2147483648), u_input.c.x, 2147483647i), ~vec4<i32>(-1i, -1i, -1i, -22544i)), _wgslsmith_sub_vec4_i32(vec4<i32>(-33106i, i32(-2147483648), u_input.c.x, 19621i), vec4<i32>(0i, -41138i, 1i, u_input.d))) ^ select(min(vec4<i32>(-1i, u_input.c.x, -23331i, u_input.d), ~vec4<i32>(0i, 35591i, i32(-2147483648), u_input.d)), _wgslsmith_clamp_vec4_i32(countOneBits(vec4<i32>(i32(-2147483648), 2147483647i, 72894i, u_input.d)), vec4<i32>(1i, u_input.c.x, u_input.d, -6921i), -vec4<i32>(u_input.c.x, -36174i, 2147483647i, 0i)), false));
    return Struct_1(~var_0.a.a ^ countOneBits(countOneBits(~vec3<u32>(arg_0.b.x, u_input.a.x, arg_0.c))), vec2<u32>(104781u, 26586u) ^ var_0.a.b, ~_wgslsmith_div_u32(14109u, ~1u));
}

@compute
@workgroup_size(1)
fn main() {
    var var_0 = ~firstLeadingBit(_wgslsmith_dot_vec4_u32(_wgslsmith_mod_vec4_u32(vec4<u32>(u_input.b, 8755u, 28521u, 35142u), abs(u_input.a)), u_input.a));
    switch (_wgslsmith_div_i32(69344i, 2147483647i)) {
        default: {
            return;
        }
    }
    var var_1 = Struct_3(~_wgslsmith_mult_u32(u_input.e, 11585u & (u_input.a.x & u_input.b)), Struct_2(func_9(func_1(Struct_2(Struct_1(u_input.a.xxy, vec2<u32>(u_input.b, 32739u), 50808u)), Struct_2(Struct_1(u_input.a.wyz, vec2<u32>(u_input.e, u_input.a.x), u_input.e)), vec2<u32>(u_input.b, 4294967295u)))));
    for (var var_2 = i32(-2147483648); true; var_0 = var_1.b.a.b.x) {
        if (LOOP_COUNTERS[32u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[32u] = LOOP_COUNTERS[32u] + 1u;
        continue;
    }
    var var_2 = Struct_4(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(1536f)) - _wgslsmith_f_op_f32(step(910f, _wgslsmith_f_op_f32(486f * _wgslsmith_div_f32(1433f, -100f))))), var_1.b, var_1.b, var_1.b.a, !vec4<bool>(true, all(select(vec4<bool>(true, true, false, true), vec4<bool>(true, true, false, true), false)), all(vec4<bool>(true, true, true, true)), true));
    let var_3 = _wgslsmith_add_vec2_u32(vec2<u32>(~_wgslsmith_add_u32(var_1.b.a.b.x, 82707u), u_input.e << (func_1(Struct_2(Struct_1(u_input.a.xzz, var_2.b.a.b, 37627u)), Struct_2(var_1.b.a), var_1.b.a.a.yx).c % 32u)), vec2<u32>(u_input.e, ~61025u)) | firstTrailingBit(~(~u_input.a.wy));
    var_0 = ~(_wgslsmith_sub_u32(var_1.b.a.a.x, u_input.b) >> (abs(~(~1u)) % 32u));
    var_0 = var_3.x;
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_2.a) - _wgslsmith_f_op_f32(var_2.a - -477f))) * 1669f), u_input.a.x << (~firstTrailingBit(max(u_input.e, 3560u)) % 32u), vec3<u32>(~(~var_3.x), func_9(Struct_1(~u_input.a.www, select(vec2<u32>(u_input.b, var_2.d.b.x), vec2<u32>(var_1.b.a.b.x, var_2.b.a.c), var_2.e.x), var_1.a | var_1.a)).c, var_2.d.b.x), firstTrailingBit(-min(vec4<i32>(-13294i, u_input.c.x, -14812i, 2147483647i), -vec4<i32>(u_input.c.x, 2147483647i, 0i, 65535i))));
}

`;