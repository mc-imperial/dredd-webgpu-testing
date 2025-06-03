export const input = [65,62,227,72,57,224,155,134,117,121,148,41,116,185,251,168,27,107,136,2,114,120,3,244,88,250,116,183,237,144,226,124,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [65,62,227,72,57,224,155,134,117,121,148,41,116,185,251,168,27,107,136,2,114,120,3,244,88,250,116,183,237,144,226,124,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[65,62,227,72,57,224,155,134,117,121,148,41,116,185,251,168,27,107,136,2,114,120,3,244,88,250,116,183,237,144,226,124]}
// Seed: 12143618781082482249

struct Struct_1 {
    a: bool,
    b: u32,
    c: vec2<u32>,
    d: vec3<bool>,
    e: vec3<f32>,
}

struct Struct_2 {
    a: vec2<f32>,
    b: Struct_1,
}

struct Struct_3 {
    a: Struct_1,
    b: vec3<i32>,
    c: vec4<i32>,
    d: vec4<u32>,
    e: Struct_2,
}

struct UniformBuffer {
    a: u32,
    b: vec3<i32>,
}

struct StorageBuffer {
    a: vec3<f32>,
    b: u32,
    c: i32,
    d: f32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> LOOP_COUNTERS: array<u32, 44>;

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn func_6(arg_0: Struct_3, arg_1: u32, arg_2: vec4<bool>, arg_3: vec4<u32>) -> vec3<bool> {
    var var_0 = countOneBits(_wgslsmith_mod_vec2_i32(vec2<i32>(arg_0.c.x, 0i), arg_0.b.xz));
    var var_1 = true;
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
    }
    var_1 = all(arg_0.a.d);
    for (var var_2 = i32(-2147483648); var_2 > 65962i; var_0 = u_input.b.zx) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        let var_3 = Struct_1(true, ~u_input.a, arg_3.wx, !(!select(arg_0.a.d, arg_2.yxz, vec3<bool>(arg_0.e.b.d.x, false, arg_2.x))), _wgslsmith_f_op_vec3_f32(abs(arg_0.a.e)));
        var_2 = 6308i;
    }
    return select(!arg_2.wyz, arg_2.yzy, true);
}

fn func_7(arg_0: vec4<f32>, arg_1: Struct_1, arg_2: Struct_3, arg_3: vec3<bool>) -> bool {
    for (var var_0 = i32(-2147483648); _wgslsmith_f_op_f32(-arg_1.e.x) >= -924f; var_0 = -_wgslsmith_mod_i32(_wgslsmith_mult_i32(~u_input.b.x, u_input.b.x), _wgslsmith_mod_i32(countOneBits(-1i), abs(-9696i)))) {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        switch (arg_2.b.x) {
            case 0i: {
            }
            case -40663i: {
                let var_1 = 2694f;
                var_0 = 35840i;
                break;
            }
            case 2147483647i: {
                let var_1 = _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_2.a.e.x + 2219f) - arg_2.e.b.e.x))))));
                var var_2 = arg_1;
                var_2 = arg_1;
                var_0 = u_input.b.x;
                break;
            }
            case 56360i: {
                var_0 = countOneBits(_wgslsmith_add_i32(u_input.b.x, i32(-1i) * -1i));
                var var_1 = u_input.b;
                continue;
            }
            default: {
                var_0 = ~0i;
                var var_1 = Struct_2(_wgslsmith_f_op_vec2_f32(abs(_wgslsmith_f_op_vec2_f32(-arg_0.yx))), Struct_1(arg_2.e.b.a, _wgslsmith_dot_vec2_u32(~(~vec2<u32>(4294967295u, 82764u)), vec2<u32>(_wgslsmith_mult_u32(1u, 87912u), u_input.a | arg_1.b)), reverseBits(~_wgslsmith_div_vec2_u32(arg_2.d.ww, arg_2.a.c)), !func_6(arg_2, 44987u, select(vec4<bool>(arg_2.a.a, true, false, arg_1.d.x), vec4<bool>(arg_3.x, false, arg_1.d.x, false), arg_2.a.a), arg_2.d), vec3<f32>(arg_2.e.a.x, arg_2.e.a.x, -1854f)));
                let var_2 = reverseBits(_wgslsmith_dot_vec2_u32(arg_1.c ^ max(~vec2<u32>(var_1.b.b, 71602u), ~arg_1.c), vec2<u32>(firstLeadingBit(var_1.b.b), ~6074u)));
                let var_3 = Struct_3(var_1.b, ~_wgslsmith_add_vec3_i32(vec3<i32>(30455i, arg_2.c.x, i32(-2147483648)), -(~vec3<i32>(arg_2.b.x, 1i, 2147483647i))), _wgslsmith_mod_vec4_i32((max(arg_2.c, arg_2.c) ^ firstLeadingBit(vec4<i32>(u_input.b.x, arg_2.b.x, u_input.b.x, 19085i))) >> ((max(vec4<u32>(var_1.b.c.x, arg_1.b, var_1.b.c.x, 28755u), vec4<u32>(0u, var_2, 0u, 1u)) & vec4<u32>(4294967295u, arg_2.e.b.c.x, arg_2.d.x, arg_2.e.b.c.x)) % vec4<u32>(32u)), vec4<i32>(i32(-2147483648), abs(~1i), reverseBits(i32(-1i) * -15529i), ~abs(arg_2.c.x))), arg_2.d, Struct_2(arg_1.e.zz, Struct_1(true, _wgslsmith_mult_u32(1u, var_1.b.b), vec2<u32>(_wgslsmith_mult_u32(arg_1.c.x, 4294967295u), 28105u), select(vec3<bool>(arg_1.a, arg_3.x, false), arg_3, func_6(arg_2, 0u, vec4<bool>(var_1.b.d.x, false, false, false), arg_2.d)), var_1.b.e)));
            }
        }
        var var_1 = countOneBits(arg_1.b);
        let var_2 = arg_2.d.zwy;
    }
    for (var var_0 = arg_2.b.x; false; ) {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        switch (_wgslsmith_clamp_i32(~_wgslsmith_dot_vec2_i32(arg_2.b.yz, countOneBits(vec2<i32>(u_input.b.x, arg_2.c.x))) ^ arg_2.b.x, 2147483647i, arg_2.c.x)) {
            case 22772i: {
                continue;
            }
            case 41470i: {
                let var_1 = _wgslsmith_mult_vec2_u32(arg_2.d.yz, _wgslsmith_mult_vec2_u32(vec2<u32>(min(~arg_1.b, 50638u), _wgslsmith_mod_u32(~arg_2.d.x, 4294967295u)), arg_1.c));
                break;
            }
            default: {
                let var_1 = Struct_2(arg_2.a.e.xz, Struct_1(any(arg_1.d), ~u_input.a, arg_2.d.yx, vec3<bool>(true, arg_2.a.a, arg_2.e.b.a), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(arg_1.e + arg_1.e), _wgslsmith_f_op_vec3_f32(min(vec3<f32>(arg_2.a.e.x, -1474f, -658f), vec3<f32>(687f, arg_2.a.e.x, arg_2.e.b.e.x))))) - arg_0.wwx)));
                break;
            }
        }
        let var_1 = arg_2.c.zz;
        if (arg_1.d.x && true) {
            let var_2 = _wgslsmith_f_op_f32(min(arg_0.x, -340f));
            continue;
        }
        var var_2 = arg_2.e;
        var var_3 = Struct_1(!(arg_1.b <= arg_1.c.x) & (_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1462f * -747f) - _wgslsmith_f_op_f32(trunc(arg_0.x))) <= _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(-1185f, 322f)) - var_2.b.e.x)), u_input.a, ~vec2<u32>(abs(arg_1.c.x) & u_input.a, var_2.b.b), vec3<bool>(true, all(select(vec3<bool>(arg_3.x, arg_3.x, false), var_2.b.d, vec3<bool>(arg_2.e.b.a, arg_2.a.d.x, false))), !func_6(arg_2, ~arg_1.b, vec4<bool>(true, true, true, true), vec4<u32>(18493u, 4294967295u, var_2.b.b, var_2.b.b) | arg_2.d).x), vec3<f32>(var_2.b.e.x, _wgslsmith_f_op_f32(-arg_2.a.e.x), _wgslsmith_f_op_f32(-arg_1.e.x)));
    }
    let var_0 = select(arg_2.a.d, !(!vec3<bool>(arg_2.e.b.e.x < 540f, false, arg_1.d.x)), arg_1.d);
    switch (_wgslsmith_div_i32(~_wgslsmith_sub_i32(abs(select(-16387i, arg_2.c.x, false)), ~u_input.b.x << (u_input.a % 32u)), -abs(max(_wgslsmith_dot_vec2_i32(vec2<i32>(arg_2.c.x, -1i), arg_2.c.yx), u_input.b.x)))) {
        case 1i: {
            loop {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                let var_1 = arg_2.a;
            }
            if (!(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-2027f))) < _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_2.e.b.e.x)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-938f - 419f)), true)))) {
                var var_1 = !select(select(!(!vec4<bool>(arg_2.e.b.a, false, arg_2.a.d.x, arg_3.x)), vec4<bool>(true, true, true, -953f < arg_1.e.x), !arg_1.a), !(!(!vec4<bool>(arg_2.e.b.a, true, arg_2.e.b.a, arg_2.e.b.a))), false);
                var var_2 = -(abs(firstLeadingBit(countOneBits(arg_2.c.xz))) | arg_2.b.xx);
            }
            var var_1 = abs(_wgslsmith_div_vec3_i32(u_input.b, ~vec3<i32>(select(arg_2.c.x, arg_2.b.x, true), _wgslsmith_add_i32(arg_2.b.x, -27263i), firstTrailingBit(-4921i))));
            let var_2 = Struct_2(vec2<f32>(1000f, 639f), Struct_1(all(!vec3<bool>(true, arg_2.e.b.a, false)), ~arg_2.a.b, vec2<u32>(arg_2.a.b, arg_2.d.x) >> (~arg_2.e.b.c % vec2<u32>(32u)), vec3<bool>(all(!vec4<bool>(arg_2.e.b.d.x, arg_3.x, false, false)), _wgslsmith_add_i32(var_1.x, 2147483647i) > -60887i, !arg_2.a.d.x), arg_0.wwx));
        }
        default: {
        }
    }
    switch (2147483647i) {
        case 1i: {
        }
        case 32573i: {
            let var_1 = _wgslsmith_div_f32(-449f, _wgslsmith_f_op_f32(-1677f - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(f32(-1f) * -1000f), 1f)))));
            for (var var_2 = -1i; var_2 < 26523i; var_2 += 1i) {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                let var_3 = abs(max(282u, arg_2.d.x));
            }
        }
        case -1466i: {
            loop {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
            }
            let var_1 = arg_2.d.wxy;
            for (var var_2 = 2147483647i; var_2 <= i32(-2147483648); var_2 += 1i) {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                var_2 = 2147483647i;
                continue;
            }
            let var_2 = func_6(arg_2, ~(~(~u_input.a)) ^ countOneBits(18147u), !vec4<bool>(false, any(select(arg_3.zy, vec2<bool>(arg_1.d.x, false), false)), arg_3.x, arg_3.x), _wgslsmith_mult_vec4_u32(~vec4<u32>(_wgslsmith_sub_u32(arg_1.b, 36619u), arg_1.b, ~4556u, 19145u), arg_2.d >> (~(vec4<u32>(u_input.a, u_input.a, 25433u, arg_2.d.x) ^ vec4<u32>(2214u, 4294967295u, 1u, arg_1.b)) % vec4<u32>(32u)))).zz;
            loop {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                var var_3 = arg_2;
            }
        }
        case 36429i: {
            let var_1 = countOneBits(0u);
            if (!var_0.x) {
                let var_2 = arg_2.c.x;
                let var_3 = arg_2;
            }
        }
        default: {
            switch (-_wgslsmith_add_i32(_wgslsmith_dot_vec2_i32(~arg_2.b.yz, arg_2.c.zw), ~abs(min(-24942i, arg_2.b.x)))) {
                case -53868i: {
                    var var_1 = vec4<bool>(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(exp2(arg_1.e.x)))) != _wgslsmith_f_op_f32(select(-334f, -281f, ~arg_1.b >= 0u)), arg_3.x, !arg_2.a.a, true);
                    var var_2 = vec3<i32>(_wgslsmith_add_i32(~23406i << (arg_2.d.x % 32u), u_input.b.x), 0i | u_input.b.x, _wgslsmith_clamp_i32(_wgslsmith_sub_i32(-1i, 2147483647i), 2533i, _wgslsmith_clamp_i32(~(0i), 0i, arg_2.b.x)));
                    var var_3 = arg_1.e.yy;
                }
                case 35609i: {
                    return arg_2.e.b.d.x;
                }
                default: {
                }
            }
            for (var var_1 = -17944i; var_1 != 1i; var_1 += 1i) {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                var_1 = _wgslsmith_clamp_i32(_wgslsmith_sub_i32(_wgslsmith_clamp_i32(~firstTrailingBit(arg_2.c.x), u_input.b.x, 2147483647i), abs(62820i)), -arg_2.b.x, select(i32(-2147483648), 20397i, any(func_6(Struct_3(arg_2.e.b, vec3<i32>(u_input.b.x, 7292i, 0i), vec4<i32>(arg_2.c.x, -12029i, arg_2.c.x, 23982i), vec4<u32>(arg_1.c.x, arg_2.a.c.x, 0u, arg_2.d.x), Struct_2(arg_1.e.xy, Struct_1(true, 17176u, vec2<u32>(arg_1.c.x, 44914u), vec3<bool>(true, false, true), vec3<f32>(2102f, 110f, -132f)))), select(0u, 1u, true), vec4<bool>(var_0.x, false, false, true), _wgslsmith_mult_vec4_u32(vec4<u32>(arg_2.e.b.b, u_input.a, 4294967295u, arg_2.e.b.b), arg_2.d)))));
                var_1 = _wgslsmith_mod_i32(i32(-1i) * -1i, u_input.b.x);
                var_1 = -u_input.b.x;
            }
        }
    }
    return any(select(vec2<bool>(select(false, false, false), true), !select(vec2<bool>(arg_3.x, false), arg_1.d.zx, arg_1.d.zx), select(arg_1.d.xz, arg_3.xz, select(vec2<bool>(true, true), vec2<bool>(arg_3.x, false), false)))) | !all(vec3<bool>(22525u < arg_1.c.x, arg_1.d.x, select(false, true, true)));
}

fn func_5() -> Struct_1 {
    loop {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        if (func_7(_wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(-1636f, 1000f, -152f, 1047f) * vec4<f32>(-506f, 872f, -650f, 1678f)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(1119f, 832f, -1000f, -523f)))))), Struct_1(false, firstLeadingBit(u_input.a), _wgslsmith_mult_vec2_u32(vec2<u32>(1u, abs(4294967295u)), ~(~vec2<u32>(u_input.a, u_input.a))), vec3<bool>(any(vec3<bool>(true, true, true)), any(vec4<bool>(true, true, true, true)), true), _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(vec3<f32>(-2295f, -1209f, 403f) + vec3<f32>(-494f, -484f, -302f)))), _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-vec3<f32>(1000f, 923f, 1000f)), vec3<f32>(441f, -878f, 738f), any(vec2<bool>(true, true)))), select(func_6(Struct_3(Struct_1(true, u_input.a, vec2<u32>(0u, 1u), vec3<bool>(true, true, false), vec3<f32>(468f, 1000f, -1000f)), u_input.b, vec4<i32>(0i, u_input.b.x, 1i, 0i), vec4<u32>(u_input.a, 16688u, u_input.a, u_input.a), Struct_2(vec2<f32>(173f, -218f), Struct_1(false, u_input.a, vec2<u32>(u_input.a, 4294967295u), vec3<bool>(true, true, true), vec3<f32>(-1012f, 507f, -528f)))), 14884u, vec4<bool>(true, false, true, false), vec4<u32>(u_input.a, 1u, u_input.a, u_input.a)), vec3<bool>(true, true, true), func_6(Struct_3(Struct_1(true, u_input.a, vec2<u32>(u_input.a, 1u), vec3<bool>(false, false, true), vec3<f32>(-342f, -1666f, 144f)), u_input.b, vec4<i32>(u_input.b.x, u_input.b.x, 0i, 18799i), vec4<u32>(u_input.a, u_input.a, u_input.a, 22632u), Struct_2(vec2<f32>(275f, -516f), Struct_1(false, u_input.a, vec2<u32>(u_input.a, u_input.a), vec3<bool>(false, true, true), vec3<f32>(-1360f, 1945f, 632f)))), u_input.a, vec4<bool>(false, true, false, true), vec4<u32>(u_input.a, 15861u, u_input.a, u_input.a)))))), Struct_3(Struct_1(!all(vec4<bool>(true, false, true, false)), ~13406u, vec2<u32>(max(u_input.a, u_input.a), _wgslsmith_mod_u32(u_input.a, u_input.a)), !select(vec3<bool>(false, false, true), vec3<bool>(false, true, false), false), _wgslsmith_f_op_vec3_f32(max(vec3<f32>(840f, 132f, 1219f), _wgslsmith_f_op_vec3_f32(max(vec3<f32>(367f, 909f, 842f), vec3<f32>(-115f, 497f, -357f)))))), vec3<i32>(-950i, -(~u_input.b.x), -2147483647i), vec4<i32>(firstTrailingBit(_wgslsmith_mod_i32(u_input.b.x, 2147483647i)), _wgslsmith_mult_i32(abs(u_input.b.x), -23298i), ~_wgslsmith_dot_vec4_i32(vec4<i32>(2147483647i, u_input.b.x, -6769i, 2147483647i), vec4<i32>(u_input.b.x, -1i, 0i, 11814i)), _wgslsmith_clamp_i32(~34204i, -9620i, u_input.b.x)), vec4<u32>(_wgslsmith_mod_u32(_wgslsmith_mult_u32(u_input.a, u_input.a), u_input.a << (u_input.a % 32u)), 1u, _wgslsmith_mult_u32(~764u, u_input.a), _wgslsmith_add_u32(u_input.a | u_input.a, firstLeadingBit(u_input.a))), Struct_2(vec2<f32>(-500f, 1404f), Struct_1(true, u_input.a, abs(vec2<u32>(61066u, 0u)), select(vec3<bool>(false, true, false), vec3<bool>(false, false, true), false), _wgslsmith_f_op_vec3_f32(abs(vec3<f32>(678f, 2336f, 269f)))))), select(vec3<bool>(true, true, true), vec3<bool>(!all(vec2<bool>(false, false)), true, true), false))) {
            let var_0 = _wgslsmith_dot_vec3_u32(~vec3<u32>(_wgslsmith_dot_vec3_u32(vec3<u32>(u_input.a, u_input.a, u_input.a), vec3<u32>(44017u, 14668u, u_input.a)), u_input.a, firstTrailingBit(55112u) & firstLeadingBit(u_input.a)), vec3<u32>(~(~27259u), max(1u, 0u), 18864u));
        }
        loop {
            if (LOOP_COUNTERS[11u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
            var var_0 = Struct_3(Struct_1(all(!select(vec2<bool>(true, true), vec2<bool>(true, true), false)), _wgslsmith_dot_vec2_u32(vec2<u32>(0u, u_input.a) >> (vec2<u32>(u_input.a, 1u) % vec2<u32>(32u)), vec2<u32>(0u, 1654u) << (vec2<u32>(142682u, u_input.a) % vec2<u32>(32u))) ^ ~1u, ~(~vec2<u32>(u_input.a, u_input.a)) << (select(_wgslsmith_div_vec2_u32(vec2<u32>(u_input.a, u_input.a), vec2<u32>(33418u, u_input.a)), vec2<u32>(u_input.a, u_input.a), vec2<bool>(true, true)) % vec2<u32>(32u)), vec3<bool>(true, true, true), _wgslsmith_f_op_vec3_f32(abs(vec3<f32>(1f, 1f, 1f)))), u_input.b, select(vec4<i32>(-1i) * -vec4<i32>(u_input.b.x, 2871i, 1i, 14573i), _wgslsmith_div_vec4_i32(reverseBits(vec4<i32>(u_input.b.x, u_input.b.x, i32(-2147483648), 1i) & vec4<i32>(-20655i, u_input.b.x, 24206i, u_input.b.x)), vec4<i32>(u_input.b.x, ~(-13656i), u_input.b.x, -42666i)), all(!select(vec4<bool>(true, true, false, true), vec4<bool>(false, false, false, true), vec4<bool>(true, true, false, false)))), reverseBits(~(vec4<u32>(u_input.a, 1u, 20929u, u_input.a) | ~vec4<u32>(4294967295u, 1u, 40145u, 4294967295u))), Struct_2(vec2<f32>(1190f, _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-1940f), 184f, any(vec2<bool>(false, false))))), Struct_1(true, ~u_input.a & _wgslsmith_mod_u32(0u, 7197u), _wgslsmith_sub_vec2_u32(vec2<u32>(u_input.a, u_input.a), firstTrailingBit(vec2<u32>(u_input.a, 37259u))), vec3<bool>(true, true, true), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(round(vec3<f32>(2695f, 1184f, 1000f)))))));
            var_0 = Struct_3(Struct_1(145f < _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(floor(var_0.e.b.e.x)), _wgslsmith_f_op_f32(f32(-1f) * -522f))), ~6449u, vec2<u32>(~42701u, _wgslsmith_sub_u32(1u, _wgslsmith_div_u32(var_0.d.x, 11529u))), vec3<bool>(any(var_0.a.d), var_0.e.b.a, false), vec3<f32>(_wgslsmith_f_op_f32(208f + -1000f), _wgslsmith_f_op_f32(min(var_0.a.e.x, _wgslsmith_f_op_f32(-167f))), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(var_0.a.e.x + 208f), _wgslsmith_f_op_f32(-638f + 1234f), var_0.a.a | var_0.e.b.d.x)))), vec3<i32>(-94561i, i32(-1i) * -var_0.b.x, 22774i) << (select(~abs(vec3<u32>(var_0.e.b.b, 1u, u_input.a)), vec3<u32>(_wgslsmith_dot_vec3_u32(vec3<u32>(0u, 1u, 0u), vec3<u32>(var_0.e.b.b, var_0.a.c.x, var_0.d.x)), u_input.a, ~u_input.a), var_0.a.d.x) % vec3<u32>(32u)), vec4<i32>(u_input.b.x, var_0.b.x, ~firstLeadingBit(var_0.b.x >> (var_0.a.b % 32u)), _wgslsmith_sub_i32(max(var_0.c.x, u_input.b.x), abs(select(u_input.b.x, u_input.b.x, false)))), var_0.d, var_0.e);
            break;
        }
        continue;
    }
    loop {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        break;
    }
    let var_0 = vec4<bool>(true, any(!func_6(Struct_3(Struct_1(false, 68639u, vec2<u32>(u_input.a, u_input.a), vec3<bool>(false, false, false), vec3<f32>(350f, -1000f, -1872f)), u_input.b, vec4<i32>(u_input.b.x, u_input.b.x, 24440i, u_input.b.x), vec4<u32>(u_input.a, 70054u, 1u, u_input.a), Struct_2(vec2<f32>(1579f, -464f), Struct_1(false, u_input.a, vec2<u32>(39093u, u_input.a), vec3<bool>(true, false, true), vec3<f32>(-1000f, -396f, 898f)))), 60256u, vec4<bool>(false, false, true, false), vec4<u32>(4294967295u, u_input.a, 1u, u_input.a)).yz) || (!select(true, false, true) & true), !(!(abs(u_input.b.x) < 1i)), true);
    var var_1 = _wgslsmith_dot_vec2_u32(vec2<u32>(~19060u, u_input.a), ~vec2<u32>(_wgslsmith_mod_u32(firstLeadingBit(u_input.a), 44569u), _wgslsmith_dot_vec2_u32(vec2<u32>(u_input.a, 11309u), vec2<u32>(27621u, 60025u)) >> (u_input.a % 32u)));
    switch (_wgslsmith_mod_i32(u_input.b.x << (u_input.a % 32u), ~(i32(-2147483648)))) {
        case 25899i: {
            var var_2 = 4294967295u;
            if (false) {
                var var_3 = ~select(_wgslsmith_sub_vec3_u32(select(~vec3<u32>(u_input.a, 0u, u_input.a), _wgslsmith_clamp_vec3_u32(vec3<u32>(u_input.a, u_input.a, 4294967295u), vec3<u32>(u_input.a, 57200u, u_input.a), vec3<u32>(u_input.a, u_input.a, 18559u)), select(vec3<bool>(false, var_0.x, false), var_0.ywy, vec3<bool>(false, var_0.x, var_0.x))), min(vec3<u32>(u_input.a, u_input.a, 48932u), vec3<u32>(u_input.a, u_input.a, u_input.a)) | ~vec3<u32>(u_input.a, 4294967295u, 43197u)), reverseBits(_wgslsmith_div_vec3_u32(_wgslsmith_sub_vec3_u32(vec3<u32>(u_input.a, 15386u, 4294967295u), vec3<u32>(4294967295u, u_input.a, u_input.a)), ~vec3<u32>(u_input.a, u_input.a, 14086u))), var_0.xzy);
                var_1 = var_3.x;
            }
            return Struct_1(all(!vec3<bool>(!var_0.x, var_0.x, var_0.x)), u_input.a, ~reverseBits(reverseBits(vec2<u32>(u_input.a, u_input.a) | vec2<u32>(84492u, u_input.a))), var_0.yyx, vec3<f32>(_wgslsmith_f_op_f32(trunc(-499f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-672f * 1000f) - _wgslsmith_f_op_f32(-1000f))), _wgslsmith_f_op_f32(-723f * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(-452f)) + _wgslsmith_f_op_f32(-552f)))));
        }
        case 2147483647i: {
            let var_2 = Struct_1(var_0.x, u_input.a, vec2<u32>(u_input.a, _wgslsmith_mult_u32(4294967295u << (u_input.a % 32u), ~0u)) ^ select(vec2<u32>(15060u, _wgslsmith_mod_u32(40013u, 56602u)), ~max(vec2<u32>(u_input.a, 1u), vec2<u32>(0u, u_input.a)), true), var_0.zzy, _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(461f, 656f, 374f) * _wgslsmith_f_op_vec3_f32(-vec3<f32>(632f, -1249f, -1629f)))), _wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(660f, -171f, 608f) - vec3<f32>(-455f, -503f, 452f))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(select(vec3<f32>(-1234f, 387f, -928f), vec3<f32>(1458f, 1317f, -1175f), var_0.yzz)) + _wgslsmith_f_op_vec3_f32(-vec3<f32>(1684f, -1000f, 217f))))), true)));
            switch (-18048i) {
                case -397i: {
                    var_1 = select(~(_wgslsmith_clamp_u32(var_2.c.x, u_input.a << (var_2.c.x % 32u), _wgslsmith_add_u32(1u, u_input.a)) & ~countOneBits(u_input.a)), ~(~1u), 1u <= _wgslsmith_add_u32(_wgslsmith_dot_vec3_u32(~vec3<u32>(var_2.b, u_input.a, 1u), ~vec3<u32>(u_input.a, 40194u, u_input.a)), countOneBits(var_2.b)));
                    var_1 = 0u;
                    var_1 = _wgslsmith_clamp_u32(67862u, 39468u, 1u);
                    var_1 = _wgslsmith_add_u32(u_input.a, u_input.a);
                }
                default: {
                    var var_3 = _wgslsmith_f_op_vec4_f32(select(vec4<f32>(294f, _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(var_2.e.x, var_2.e.x)))), _wgslsmith_f_op_f32(-165f - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1319f * var_2.e.x))), _wgslsmith_f_op_f32(select(var_2.e.x, _wgslsmith_f_op_f32(f32(-1f) * -1421f), var_0.x))), vec4<f32>(_wgslsmith_f_op_f32(abs(var_2.e.x)), var_2.e.x, _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(floor(var_2.e.x)))))), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-var_2.e.x)))), vec4<bool>(all(vec4<bool>(false, true, var_2.a || var_2.d.x, func_7(vec4<f32>(var_2.e.x, var_2.e.x, 561f, var_2.e.x), Struct_1(var_2.d.x, u_input.a, vec2<u32>(7184u, 0u), vec3<bool>(true, var_0.x, var_0.x), var_2.e), Struct_3(Struct_1(false, u_input.a, vec2<u32>(u_input.a, u_input.a), var_2.d, var_2.e), u_input.b, vec4<i32>(u_input.b.x, u_input.b.x, u_input.b.x, 1296i), vec4<u32>(u_input.a, 3140u, u_input.a, 49558u), Struct_2(vec2<f32>(var_2.e.x, -1327f), Struct_1(var_0.x, var_2.b, vec2<u32>(u_input.a, u_input.a), var_2.d, vec3<f32>(-405f, -942f, var_2.e.x)))), vec3<bool>(false, false, false)))), var_0.x, func_6(Struct_3(var_2, abs(u_input.b), -vec4<i32>(i32(-2147483648), 3399i, -11598i, u_input.b.x), ~vec4<u32>(1u, var_2.c.x, u_input.a, 0u), Struct_2(var_2.e.xz, Struct_1(var_0.x, u_input.a, var_2.c, vec3<bool>(false, var_0.x, false), vec3<f32>(-170f, -624f, var_2.e.x)))), var_2.b, !(!var_0), ~(vec4<u32>(0u, var_2.b, u_input.a, 40996u) & vec4<u32>(1u, 15900u, u_input.a, 58072u))).x, var_2.d.x && any(!vec3<bool>(var_0.x, var_2.d.x, false)))));
                    var_1 = ~select(var_2.b, 17952u, true);
                    var var_4 = _wgslsmith_div_u32(countOneBits(min(firstTrailingBit(~31858u), var_2.c.x)), 4294967295u);
                    var var_5 = _wgslsmith_clamp_vec2_i32(u_input.b.xx, u_input.b.xx, -abs(_wgslsmith_sub_vec2_i32(vec2<i32>(u_input.b.x, 4308i), u_input.b.yx) ^ (u_input.b.yx << (vec2<u32>(u_input.a, 31927u) % vec2<u32>(32u)))));
                    var var_6 = vec3<u32>(1u, var_2.b, ~u_input.a);
                }
            }
            let var_3 = firstTrailingBit(_wgslsmith_add_vec4_u32(_wgslsmith_mod_vec4_u32(~vec4<u32>(u_input.a, 4294967295u, u_input.a, var_2.b) & vec4<u32>(4294967295u, var_2.b, 10522u, u_input.a), ~(vec4<u32>(0u, 4294967295u, 54673u, u_input.a) << (vec4<u32>(4294967295u, var_2.c.x, var_2.c.x, 1u) % vec4<u32>(32u)))), ~_wgslsmith_sub_vec4_u32(firstLeadingBit(vec4<u32>(u_input.a, 17238u, 4294967295u, 0u)), vec4<u32>(0u, u_input.a, 5200u, u_input.a) & vec4<u32>(0u, 0u, var_2.b, u_input.a))));
        }
        case -60781i: {
        }
        case 52742i: {
            switch (~(-58945i)) {
                case -97549i: {
                    let var_2 = Struct_1(all(vec3<bool>(var_0.x, var_0.x, select(true, false, true && var_0.x))), ~(~(_wgslsmith_dot_vec2_u32(vec2<u32>(7072u, u_input.a), vec2<u32>(u_input.a, u_input.a)) & _wgslsmith_clamp_u32(8130u, u_input.a, u_input.a))), vec2<u32>(_wgslsmith_mult_u32(u_input.a, 36103u), ~(~2247u)) & ~vec2<u32>(71896u, 4294967295u | u_input.a), var_0.zzx, _wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -378f), 1387f, -742f)));
                }
                case i32(-2147483648): {
                }
                default: {
                    var_1 = _wgslsmith_dot_vec4_u32(vec4<u32>(~(~4294967295u) << ((u_input.a << (_wgslsmith_mult_u32(0u, u_input.a) % 32u)) % 32u), _wgslsmith_clamp_u32(0u, 73206u, u_input.a) ^ _wgslsmith_dot_vec4_u32(_wgslsmith_sub_vec4_u32(vec4<u32>(4294967295u, u_input.a, 0u, u_input.a), vec4<u32>(u_input.a, u_input.a, 0u, 279u)), max(vec4<u32>(u_input.a, 1u, 12927u, 0u), vec4<u32>(u_input.a, u_input.a, 508u, 0u))), 1u, 79233u), vec4<u32>(_wgslsmith_dot_vec2_u32(vec2<u32>(reverseBits(4294967295u), ~u_input.a), _wgslsmith_mult_vec2_u32(vec2<u32>(u_input.a, u_input.a) ^ vec2<u32>(u_input.a, u_input.a), vec2<u32>(1u, 1u))), 1u, ~(~u_input.a) >> (u_input.a % 32u), 4294967295u));
                    var_1 = min(38766u, 49366u);
                    var var_2 = Struct_3(Struct_1(var_0.x, 4294967295u, vec2<u32>(~(~30803u), ~(~u_input.a)), !vec3<bool>(var_0.x, select(var_0.x, var_0.x, false), false), _wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(-390f, -1000f, -1611f) - vec3<f32>(-814f, 1392f, -764f)), _wgslsmith_f_op_vec3_f32(-vec3<f32>(-1493f, 1411f, 699f))) * vec3<f32>(_wgslsmith_f_op_f32(-836f), -183f, _wgslsmith_div_f32(-339f, 170f)))), ~vec3<i32>(u_input.b.x, u_input.b.x, -(i32(-1i) * i32(-2147483648))), -countOneBits(vec4<i32>(_wgslsmith_dot_vec4_i32(vec4<i32>(u_input.b.x, -1i, 1i, u_input.b.x), vec4<i32>(u_input.b.x, u_input.b.x, 1i, u_input.b.x)), ~u_input.b.x, 22017i, u_input.b.x >> (u_input.a % 32u))), min(vec4<u32>(select(_wgslsmith_div_u32(4819u, u_input.a), ~u_input.a, !var_0.x), _wgslsmith_dot_vec2_u32(~vec2<u32>(u_input.a, 16879u), abs(vec2<u32>(6035u, u_input.a))), u_input.a, _wgslsmith_dot_vec4_u32(~vec4<u32>(u_input.a, u_input.a, u_input.a, 1u), vec4<u32>(12556u, 1u, u_input.a, 4294967295u))), vec4<u32>(u_input.a, u_input.a, _wgslsmith_div_u32(u_input.a, u_input.a) | u_input.a, max(~0u, ~u_input.a))), Struct_2(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-237f, 1056f)) - _wgslsmith_f_op_vec2_f32(vec2<f32>(665f, 458f) - _wgslsmith_f_op_vec2_f32(-vec2<f32>(1000f, -1111f)))), Struct_1(func_6(Struct_3(Struct_1(var_0.x, u_input.a, vec2<u32>(12722u, 0u), vec3<bool>(var_0.x, false, true), vec3<f32>(-978f, 415f, -1919f)), vec3<i32>(u_input.b.x, u_input.b.x, u_input.b.x), vec4<i32>(i32(-2147483648), 0i, i32(-2147483648), i32(-2147483648)), vec4<u32>(u_input.a, u_input.a, u_input.a, u_input.a), Struct_2(vec2<f32>(-1139f, 498f), Struct_1(var_0.x, u_input.a, vec2<u32>(4294967295u, 5918u), vec3<bool>(var_0.x, var_0.x, var_0.x), vec3<f32>(1350f, 1000f, -1468f)))), u_input.a, !var_0, vec4<u32>(56502u, u_input.a, u_input.a, u_input.a) >> (vec4<u32>(u_input.a, 27872u, u_input.a, 2361u) % vec4<u32>(32u))).x, 24800u, abs(~vec2<u32>(u_input.a, u_input.a)), vec3<bool>(true, true, false), _wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(-vec3<f32>(1053f, 1000f, 1045f)))))));
                }
            }
            var_1 = _wgslsmith_dot_vec3_u32(~select(vec3<u32>(1u, 0u, u_input.a), ~vec3<u32>(1u, 39291u, u_input.a), (18781u & u_input.a) != abs(u_input.a)), firstTrailingBit(_wgslsmith_mult_vec3_u32(vec3<u32>(1u, 1u, 1u), max(vec3<u32>(u_input.a, u_input.a, u_input.a), vec3<u32>(48471u, 69985u, 50070u)))));
            var var_2 = all(!select(var_0, var_0, var_0));
            let var_3 = Struct_1(true, _wgslsmith_mult_u32(countOneBits(1u) >> ((~u_input.a >> (~1u % 32u)) % 32u), abs(40931u) | (u_input.a >> (~4294967295u % 32u))), abs(_wgslsmith_mod_vec2_u32(vec2<u32>(u_input.a, 4294967295u), vec2<u32>(u_input.a, 21153u)) | ~min(vec2<u32>(u_input.a, 4294967295u), vec2<u32>(59261u, u_input.a))), select(!var_0.wyz, var_0.xzz, true), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(max(-338f, -1070f)), _wgslsmith_f_op_f32(-1751f), -402f)) + _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(vec3<f32>(648f, -1447f, 1480f) + vec3<f32>(-848f, 1526f, -392f)), _wgslsmith_f_op_vec3_f32(-vec3<f32>(261f, -719f, -277f)), var_0.zxz)))));
        }
        default: {
            return Struct_1(true, 0u, ~(~vec2<u32>(u_input.a, 7131u) >> (~vec2<u32>(1u, u_input.a) % vec2<u32>(32u))), !func_6(Struct_3(Struct_1(var_0.x, u_input.a, vec2<u32>(u_input.a, 1u), vec3<bool>(false, var_0.x, var_0.x), vec3<f32>(1000f, -1439f, 159f)), u_input.b, ~vec4<i32>(u_input.b.x, u_input.b.x, -1i, 1i), _wgslsmith_add_vec4_u32(vec4<u32>(70856u, u_input.a, u_input.a, 4708u), vec4<u32>(u_input.a, 32271u, 4294967295u, 175309u)), Struct_2(vec2<f32>(787f, 437f), Struct_1(false, u_input.a, vec2<u32>(u_input.a, 0u), vec3<bool>(var_0.x, var_0.x, true), vec3<f32>(-1000f, 1124f, 467f)))), 2347u, select(select(vec4<bool>(var_0.x, false, false, var_0.x), var_0, var_0), vec4<bool>(var_0.x, var_0.x, var_0.x, var_0.x), true), (vec4<u32>(u_input.a, u_input.a, u_input.a, 1747u) << (vec4<u32>(0u, u_input.a, u_input.a, u_input.a) % vec4<u32>(32u))) & _wgslsmith_mod_vec4_u32(vec4<u32>(u_input.a, 19719u, 4294967295u, 54450u), vec4<u32>(u_input.a, u_input.a, 9055u, 4294967295u))), _wgslsmith_f_op_vec3_f32(-vec3<f32>(425f, _wgslsmith_f_op_f32(-997f - _wgslsmith_f_op_f32(-1117f)), 1347f)));
        }
    }
    return Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-792f)))) != _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(-223f, -373f))), u_input.a, vec2<u32>(firstLeadingBit(u_input.a), 1u), vec3<bool>(true, false, _wgslsmith_sub_i32(_wgslsmith_add_i32(u_input.b.x, u_input.b.x), _wgslsmith_dot_vec4_i32(vec4<i32>(u_input.b.x, -1i, u_input.b.x, 0i), vec4<i32>(u_input.b.x, 30771i, u_input.b.x, 10102i))) > _wgslsmith_mult_i32(min(u_input.b.x, u_input.b.x), _wgslsmith_mod_i32(1i, u_input.b.x))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(select(vec3<f32>(1034f, 560f, -1350f), vec3<f32>(-210f, -122f, -1176f), vec3<bool>(false, var_0.x, false)))), _wgslsmith_f_op_vec3_f32(vec3<f32>(1000f, 552f, -471f) + vec3<f32>(1748f, -365f, -1303f)))));
}

fn func_8(arg_0: Struct_1, arg_1: i32, arg_2: vec4<u32>, arg_3: f32) -> f32 {
    for (; arg_0.a; ) {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
    }
    let var_0 = Struct_1(arg_0.d.x, ~_wgslsmith_mod_u32(~(~u_input.a), abs(min(4294967295u, u_input.a))), countOneBits(vec2<u32>(abs(11156u), select(1u, 1u, arg_0.a))), func_6(Struct_3(Struct_1(false, ~62144u, arg_2.wy, arg_0.d, _wgslsmith_f_op_vec3_f32(exp2(arg_0.e))), -reverseBits(u_input.b), _wgslsmith_clamp_vec4_i32(_wgslsmith_sub_vec4_i32(vec4<i32>(1i, -40003i, 8036i, -1i), vec4<i32>(9755i, -45611i, 9510i, -11694i)), vec4<i32>(i32(-2147483648), 2147483647i, 2147483647i, arg_1), ~vec4<i32>(u_input.b.x, -1i, 1i, i32(-2147483648))), vec4<u32>(~arg_2.x, 1107u, firstTrailingBit(arg_2.x), ~arg_0.b), Struct_2(vec2<f32>(arg_3, arg_0.e.x), arg_0)), u_input.a, select(select(select(vec4<bool>(arg_0.a, arg_0.a, arg_0.d.x, arg_0.a), vec4<bool>(true, arg_0.d.x, false, true), false), !vec4<bool>(true, true, false, arg_0.d.x), vec4<bool>(true, true, arg_0.a, arg_0.a)), !(!vec4<bool>(false, arg_0.a, arg_0.d.x, false)), !vec4<bool>(arg_0.d.x, false, arg_0.d.x, false)), vec4<u32>(_wgslsmith_dot_vec4_u32(_wgslsmith_clamp_vec4_u32(vec4<u32>(1u, arg_0.c.x, 54243u, arg_0.b), arg_2, vec4<u32>(arg_0.b, u_input.a, 0u, 41005u)), arg_2 ^ arg_2), abs(firstTrailingBit(arg_2.x)), ~(~12231u), _wgslsmith_sub_u32(abs(arg_2.x), 4294967295u))), _wgslsmith_f_op_vec3_f32(floor(vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_3 + arg_0.e.x) + arg_0.e.x), _wgslsmith_f_op_f32(-arg_0.e.x), _wgslsmith_f_op_f32(-1239f)))));
    if (true) {
    }
    var var_1 = Struct_3(func_5(), ~u_input.b, _wgslsmith_sub_vec4_i32(-(vec4<i32>(u_input.b.x, 12958i, 2147483647i, 9920i) & vec4<i32>(-1i, arg_1, 0i, arg_1)), _wgslsmith_sub_vec4_i32(~vec4<i32>(-1i, arg_1, 47782i, arg_1), select(vec4<i32>(0i, u_input.b.x, 1i, u_input.b.x), vec4<i32>(i32(-2147483648), u_input.b.x, 35857i, u_input.b.x), true))) & max(~(vec4<i32>(-20949i, 45921i, 3035i, -23472i) | vec4<i32>(u_input.b.x, u_input.b.x, 38730i, 2147483647i)), vec4<i32>(firstTrailingBit(u_input.b.x), i32(-1i) * -1i, arg_1 | 75937i, arg_1)), ~vec4<u32>(1u, ~var_0.c.x << (25166u % 32u), max(~arg_0.b, ~11431u), 59361u), Struct_2(arg_0.e.zz, func_5()));
    var_1 = Struct_3(func_5(), var_1.b, _wgslsmith_mod_vec4_i32(select(vec4<i32>(arg_1, reverseBits(-387i), ~arg_1, arg_1), _wgslsmith_add_vec4_i32(~vec4<i32>(2384i, 27023i, -1584i, 2147483647i), vec4<i32>(47495i, var_1.c.x, arg_1, -16744i) ^ vec4<i32>(var_1.b.x, -46447i, var_1.c.x, -3576i)), select(select(vec4<bool>(false, arg_0.d.x, false, false), vec4<bool>(false, var_0.d.x, var_1.e.b.a, true), var_1.a.a), vec4<bool>(false, true, true, var_0.a), vec4<bool>(var_0.d.x, var_1.e.b.a, arg_0.d.x, var_1.e.b.d.x))), _wgslsmith_mod_vec4_i32(max(var_1.c | var_1.c, _wgslsmith_mult_vec4_i32(var_1.c, var_1.c)), vec4<i32>(var_1.c.x, ~(-51458i), countOneBits(u_input.b.x), arg_1))), vec4<u32>(_wgslsmith_div_u32(92885u, _wgslsmith_mod_u32(4294967295u, arg_2.x)), 60092u, ~4294967295u, 4294967295u), var_1.e);
    return _wgslsmith_f_op_f32(func_5().e.x * var_1.e.a.x);
}

fn func_4(arg_0: f32, arg_1: vec4<bool>, arg_2: i32, arg_3: Struct_1) -> Struct_3 {
    let var_0 = Struct_2(vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(1099f * -424f) + arg_0)), _wgslsmith_f_op_f32(func_8(func_5(), -_wgslsmith_mod_i32(i32(-2147483648), -53724i), ~vec4<u32>(u_input.a, u_input.a, u_input.a, 29814u), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(arg_3.e.x, arg_3.e.x))))), func_5());
    switch (i32(-2147483648)) {
        default: {
            for (var var_1: i32; ; ) {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                var_1 = u_input.b.x;
                let var_2 = vec2<f32>(453f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(601f * 3586f), arg_0)))) - -234f));
                var_1 = 28571i;
                var var_3 = Struct_3(Struct_1(var_0.b.a, 19484u, ~vec2<u32>(u_input.a, 0u) ^ firstTrailingBit(~vec2<u32>(u_input.a, 41375u)), arg_3.d, _wgslsmith_f_op_vec3_f32(exp2(var_0.b.e))), firstTrailingBit(-_wgslsmith_sub_vec3_i32(vec3<i32>(u_input.b.x, -41154i, arg_2), u_input.b) | countOneBits(vec3<i32>(u_input.b.x, u_input.b.x, i32(-2147483648)))), ~_wgslsmith_add_vec4_i32(vec4<i32>(1i, ~2147483647i, max(7905i, u_input.b.x), countOneBits(u_input.b.x)), _wgslsmith_mod_vec4_i32(vec4<i32>(1i, -18795i, arg_2, -52852i), vec4<i32>(arg_2, arg_2, arg_2, arg_2)) | _wgslsmith_clamp_vec4_i32(vec4<i32>(arg_2, arg_2, u_input.b.x, 0i), vec4<i32>(-3754i, arg_2, -1i, u_input.b.x), vec4<i32>(u_input.b.x, 17648i, 1i, u_input.b.x))), ~countOneBits(_wgslsmith_mult_vec4_u32(select(vec4<u32>(u_input.a, 4294967295u, var_0.b.b, 1u), vec4<u32>(6754u, 1u, 1u, 4294967295u), arg_1), select(vec4<u32>(u_input.a, 13391u, 0u, 16991u), vec4<u32>(u_input.a, var_0.b.c.x, 1u, 36000u), arg_1.x))), Struct_2(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(arg_3.e.yy - vec2<f32>(arg_0, -2291f)))), arg_3));
                continue;
            }
            var var_1 = any(!select(!select(vec3<bool>(var_0.b.d.x, false, false), vec3<bool>(arg_1.x, true, true), false), !(!var_0.b.d), func_5().d));
        }
    }
    var var_1 = Struct_3(func_5(), min(vec3<i32>(u_input.b.x | (i32(-1i) * -44388i), reverseBits(firstTrailingBit(0i)), (u_input.b.x & -1i) | reverseBits(-1i)), select(-vec3<i32>(-17821i, u_input.b.x, 1i), min(~u_input.b, -u_input.b), func_5().d.x)), vec4<i32>(_wgslsmith_add_i32(u_input.b.x, 1i), _wgslsmith_dot_vec3_i32(~vec3<i32>(u_input.b.x, u_input.b.x, 7555i), (u_input.b << (vec3<u32>(var_0.b.b, u_input.a, 4294967295u) % vec3<u32>(32u))) | u_input.b), -13021i, firstTrailingBit(arg_2)), firstTrailingBit(max(vec4<u32>(_wgslsmith_clamp_u32(1u, 34190u, 43513u), var_0.b.b, ~49464u, firstLeadingBit(u_input.a)), select(~vec4<u32>(49347u, 26205u, 45783u, 1u), vec4<u32>(34088u, arg_3.c.x, u_input.a, 15965u), vec4<bool>(arg_3.a, arg_1.x, true, arg_1.x)))), var_0);
    var var_2 = Struct_2(arg_3.e.zx, Struct_1(arg_3.d.x, var_0.b.c.x, _wgslsmith_add_vec2_u32(func_5().c, ~vec2<u32>(var_0.b.c.x, 0u)), vec3<bool>(_wgslsmith_f_op_f32(round(-811f)) == arg_0, (50462u | var_0.b.b) > 37859u, false), _wgslsmith_f_op_vec3_f32(-var_0.b.e)));
    for (var var_3 = countOneBits(abs(~(~(-34249i)))) >> (var_1.a.b % 32u); var_1.e.b.a; var_2 = Struct_2(var_1.e.b.e.yz, func_5())) {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
        var var_4 = arg_1.yww;
        var_2 = Struct_2(vec2<f32>(_wgslsmith_f_op_f32(max(var_2.b.e.x, _wgslsmith_f_op_f32(-arg_3.e.x))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(sign(arg_0)))) + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_1.a.e.x) - _wgslsmith_f_op_f32(abs(arg_3.e.x))))), Struct_1(func_7(vec4<f32>(_wgslsmith_f_op_f32(-910f), _wgslsmith_f_op_f32(func_8(Struct_1(false, arg_3.c.x, vec2<u32>(25128u, var_2.b.b), vec3<bool>(false, var_4.x, arg_3.d.x), var_1.a.e), i32(-2147483648), var_1.d, var_1.a.e.x)), 199f, var_1.e.a.x), var_1.e.b, Struct_3(var_0.b, vec3<i32>(u_input.b.x, arg_2, -1i), firstLeadingBit(vec4<i32>(2147483647i, var_1.b.x, var_1.c.x, -37885i)), _wgslsmith_add_vec4_u32(var_1.d, var_1.d), Struct_2(var_2.b.e.yz, var_0.b)), arg_1.xxw), _wgslsmith_div_u32(10019u, _wgslsmith_div_u32(firstLeadingBit(1u), select(26795u, u_input.a, true))), min(~min(var_2.b.c, arg_3.c), ~vec2<u32>(var_2.b.c.x, 50566u) >> (~arg_3.c % vec2<u32>(32u))), !func_6(Struct_3(var_2.b, vec3<i32>(u_input.b.x, arg_2, u_input.b.x), var_1.c, vec4<u32>(arg_3.b, var_0.b.c.x, var_0.b.c.x, arg_3.b), var_0), var_2.b.b, select(arg_1, vec4<bool>(var_4.x, var_4.x, var_2.b.a, var_2.b.d.x), arg_1), vec4<u32>(var_1.d.x, var_1.a.b, 1u, u_input.a)), vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(var_2.b.e.x + var_2.a.x)), _wgslsmith_f_op_f32(trunc(570f)), var_0.a.x)));
        var var_5 = (firstTrailingBit(_wgslsmith_mod_vec4_i32(countOneBits(var_1.c), var_1.c)) ^ var_1.c) | (~var_1.c | firstTrailingBit(var_1.c));
        return Struct_3(Struct_1(true, _wgslsmith_dot_vec2_u32(firstTrailingBit(vec2<u32>(var_0.b.b, 34679u)), vec2<u32>(~1u, func_5().c.x)), _wgslsmith_mod_vec2_u32(_wgslsmith_div_vec2_u32(_wgslsmith_mult_vec2_u32(vec2<u32>(4294967295u, 1u), var_1.e.b.c), abs(var_1.a.c)), vec2<u32>(_wgslsmith_div_u32(920u, 26938u), var_2.b.b)), func_6(Struct_3(func_5(), var_5.wxy, -vec4<i32>(var_1.b.x, var_1.c.x, var_1.b.x, arg_2), vec4<u32>(0u, var_1.d.x, var_0.b.b, 4294967295u) >> (var_1.d % vec4<u32>(32u)), var_0), max(4294967295u, 4294967295u) | (39943u ^ arg_3.b), vec4<bool>(func_7(vec4<f32>(377f, arg_0, arg_0, 523f), arg_3, Struct_3(var_1.a, vec3<i32>(var_5.x, 26742i, arg_2), var_1.c, vec4<u32>(arg_3.b, var_1.d.x, 14093u, arg_3.c.x), var_0), vec3<bool>(var_1.e.b.a, arg_1.x, true)), arg_3.c.x >= 6114u, arg_1.x, false), _wgslsmith_clamp_vec4_u32(firstTrailingBit(var_1.d), ~var_1.d, ~vec4<u32>(u_input.a, 74657u, 0u, var_1.d.x))), var_0.b.e), u_input.b, _wgslsmith_div_vec4_i32(~(vec4<i32>(-1i) * -vec4<i32>(var_5.x, -31496i, -1i, -1i)), var_1.c), var_1.d, var_1.e);
    }
    return Struct_3(Struct_1(true, countOneBits(firstLeadingBit(0u)) | _wgslsmith_div_u32(arg_3.c.x, _wgslsmith_dot_vec4_u32(vec4<u32>(0u, var_2.b.b, 44105u, 1u), vec4<u32>(1u, 4294967295u, 22889u, var_0.b.b))), vec2<u32>(arg_3.c.x | _wgslsmith_add_u32(var_0.b.c.x, 49969u), var_1.e.b.c.x << (_wgslsmith_dot_vec2_u32(vec2<u32>(var_2.b.b, var_0.b.c.x), vec2<u32>(4863u, u_input.a)) % 32u)), arg_1.wxz, _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-arg_3.e) - _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(step(var_0.b.e, var_0.b.e))))), _wgslsmith_mult_vec3_i32(~_wgslsmith_mult_vec3_i32(-u_input.b, var_1.c.wyz), vec3<i32>(arg_2, arg_2, var_1.c.x)), vec4<i32>(i32(-2147483648), 0i, -_wgslsmith_dot_vec4_i32(-vec4<i32>(1i, arg_2, 2147483647i, 0i), _wgslsmith_div_vec4_i32(vec4<i32>(arg_2, u_input.b.x, -36379i, -15313i), vec4<i32>(u_input.b.x, arg_2, 1556i, 33308i))), ~(i32(-1i) * i32(-2147483648))), select(var_1.d, ~var_1.d << (var_1.d % vec4<u32>(32u)), var_1.b.x < (firstLeadingBit(arg_2) | _wgslsmith_sub_i32(-1i, arg_2))), Struct_2(vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(var_0.a.x))), _wgslsmith_f_op_f32(-var_1.a.e.x)), func_5()));
}

fn func_9(arg_0: Struct_2, arg_1: Struct_3, arg_2: vec4<u32>) -> vec3<bool> {
    switch (u_input.b.x) {
        case 80127i: {
        }
        case 19826i: {
            switch (arg_1.c.x) {
                default: {
                    var var_0 = 0i;
                    let var_1 = func_4(_wgslsmith_f_op_f32(abs(arg_1.a.e.x)), vec4<bool>(func_4(_wgslsmith_div_f32(787f, _wgslsmith_f_op_f32(1115f - 641f)), select(select(vec4<bool>(false, true, arg_0.b.d.x, arg_1.e.b.d.x), vec4<bool>(arg_1.a.a, arg_0.b.a, arg_0.b.a, arg_1.a.a), true), vec4<bool>(false, false, true, false), true), _wgslsmith_div_i32(u_input.b.x, i32(-2147483648)) << (arg_1.d.x % 32u), arg_0.b).a.a, ~_wgslsmith_clamp_i32(arg_1.b.x, 1i, 2147483647i) >= ((i32(-2147483648) << (u_input.a % 32u)) & u_input.b.x), true, !(!arg_1.e.b.d.x == true)), _wgslsmith_dot_vec3_i32(-vec3<i32>(arg_1.b.x, 1i, arg_1.b.x), _wgslsmith_add_vec3_i32(vec3<i32>(max(u_input.b.x, u_input.b.x), _wgslsmith_div_i32(11169i, -2406i), _wgslsmith_mod_i32(u_input.b.x, arg_1.b.x)), vec3<i32>(abs(6463i), u_input.b.x, 2147483647i))), Struct_1(all(select(!arg_1.e.b.d.yy, !arg_1.a.d.yx, true)), ~(arg_1.e.b.c.x | arg_1.a.c.x), arg_1.d.wx, vec3<bool>(!func_7(vec4<f32>(1000f, 2022f, -1678f, 1900f), arg_0.b, arg_1, vec3<bool>(arg_0.b.a, arg_0.b.a, true)), arg_0.b.d.x, !arg_0.b.d.x), arg_1.a.e)).e;
                }
            }
        }
        default: {
            if (arg_0.b.d.x) {
                var var_0 = u_input.b.x;
                let var_1 = vec3<bool>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(arg_0.a.x, 738f)))) < _wgslsmith_f_op_f32(sign(arg_0.b.e.x)), !(false || all(arg_1.e.b.d)), func_5().d.x);
            }
            let var_0 = Struct_1(all(select(func_4(_wgslsmith_div_f32(-759f, 415f), !vec4<bool>(arg_1.e.b.d.x, arg_1.a.a, arg_1.a.a, false), _wgslsmith_sub_i32(-1i, -23099i), arg_0.b).e.b.d.zx, !(!vec2<bool>(arg_0.b.d.x, arg_1.a.d.x)), false)), select(reverseBits(func_5().b) ^ arg_2.x, min(1u, abs(~44863u)), true), arg_2.yy, func_4(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(905f - arg_1.e.b.e.x)))), !select(!vec4<bool>(false, arg_0.b.d.x, arg_0.b.d.x, arg_1.a.a), vec4<bool>(arg_1.e.b.a, true, false, arg_0.b.a), select(vec4<bool>(arg_1.e.b.a, arg_0.b.d.x, arg_1.a.a, true), vec4<bool>(arg_0.b.d.x, true, false, true), vec4<bool>(arg_0.b.a, arg_1.e.b.a, true, arg_1.a.d.x))), _wgslsmith_dot_vec4_i32(countOneBits(firstTrailingBit(arg_1.c)), _wgslsmith_clamp_vec4_i32(vec4<i32>(2147483647i, arg_1.c.x, u_input.b.x, 1i), _wgslsmith_sub_vec4_i32(arg_1.c, vec4<i32>(i32(-2147483648), 22280i, u_input.b.x, -7906i)), arg_1.c)), arg_0.b).a.d, _wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(arg_0.a.x * -165f))), 1000f, func_5().e.x) - func_5().e));
            var var_1 = arg_1.e;
            if (false) {
                var var_2 = func_5();
            }
        }
    }
    switch (~arg_1.b.x) {
        case 1i: {
        }
        case 75867i: {
            var var_0 = arg_1.a.d.yz;
            var_0 = arg_0.b.d.xz;
            var var_1 = arg_1.c;
            loop {
                if (LOOP_COUNTERS[16u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
                var_1 = firstTrailingBit(min(_wgslsmith_clamp_vec4_i32(~_wgslsmith_mod_vec4_i32(arg_1.c, arg_1.c), arg_1.c, firstTrailingBit(vec4<i32>(-34067i, u_input.b.x, 4853i, i32(-2147483648)) << (arg_1.d % vec4<u32>(32u)))), vec4<i32>(_wgslsmith_mult_i32(-u_input.b.x, select(-56227i, arg_1.b.x, true)), _wgslsmith_mod_i32(0i, ~var_1.x), 50219i, i32(-1i) * -arg_1.b.x)));
            }
            var var_2 = 1000f;
        }
        case 56820i: {
            if ((func_5().b == _wgslsmith_div_u32(~abs(arg_0.b.b), abs(min(u_input.a, 78869u)))) || arg_1.a.a) {
                let var_0 = Struct_3(Struct_1(!any(arg_0.b.d.zz) && arg_0.b.a, 0u, _wgslsmith_add_vec2_u32(func_5().c, ~_wgslsmith_mult_vec2_u32(arg_0.b.c, vec2<u32>(12064u, arg_0.b.b))), arg_0.b.d, _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(arg_0.b.e * arg_0.b.e))), abs(vec3<i32>(-_wgslsmith_mod_i32(1i, u_input.b.x), min(arg_1.c.x, -55580i), 1i ^ u_input.b.x)), _wgslsmith_clamp_vec4_i32(abs(-_wgslsmith_mult_vec4_i32(arg_1.c, arg_1.c)), _wgslsmith_add_vec4_i32(abs(arg_1.c), arg_1.c >> (abs(arg_1.d) % vec4<u32>(32u))), arg_1.c), ~func_4(-913f, select(select(vec4<bool>(true, false, true, false), vec4<bool>(arg_0.b.a, true, arg_0.b.a, arg_1.a.a), arg_1.a.d.x), vec4<bool>(arg_0.b.d.x, false, false, true), !vec4<bool>(true, arg_0.b.d.x, arg_1.e.b.a, arg_1.e.b.a)), -(arg_1.b.x << (38385u % 32u)), func_5()).d, Struct_2(_wgslsmith_f_op_vec2_f32(arg_1.a.e.xz + _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-225f, arg_0.a.x)) - _wgslsmith_f_op_vec2_f32(ceil(arg_0.a)))), func_4(662f, select(vec4<bool>(true, arg_0.b.a, arg_1.e.b.d.x, false), vec4<bool>(arg_0.b.d.x, false, arg_0.b.a, arg_0.b.a), func_7(vec4<f32>(arg_0.b.e.x, arg_0.b.e.x, arg_0.a.x, 475f), arg_1.e.b, Struct_3(arg_0.b, vec3<i32>(arg_1.c.x, u_input.b.x, 21258i), vec4<i32>(2147483647i, u_input.b.x, arg_1.c.x, 2147483647i), arg_2, Struct_2(vec2<f32>(929f, 600f), arg_0.b)), vec3<bool>(false, false, arg_0.b.a))), reverseBits(1i ^ arg_1.c.x), Struct_1(!arg_0.b.a, arg_0.b.c.x, arg_1.d.ww, arg_0.b.d, _wgslsmith_f_op_vec3_f32(-arg_0.b.e))).a));
            }
            var var_0 = false;
        }
        case 24967i: {
            loop {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                var var_0 = func_4(arg_1.e.b.e.x, !select(select(vec4<bool>(false, true, true, false), !vec4<bool>(true, arg_0.b.a, true, arg_0.b.a), !vec4<bool>(true, arg_1.a.a, false, arg_0.b.a)), vec4<bool>(!arg_0.b.d.x, func_6(Struct_3(arg_0.b, arg_1.c.xzx, vec4<i32>(u_input.b.x, u_input.b.x, 0i, u_input.b.x), vec4<u32>(0u, 4294967295u, 40029u, arg_2.x), arg_0), 1u, vec4<bool>(false, true, true, false), arg_2).x, any(arg_0.b.d.yy), arg_0.b.d.x), !vec4<bool>(arg_0.b.a, arg_0.b.d.x, true, false)), _wgslsmith_add_i32(1i << (func_5().c.x % 32u), u_input.b.x), func_5()).e;
            }
            var var_0 = i32(-2147483648);
            var var_1 = select(vec4<bool>(_wgslsmith_f_op_f32(floor(arg_1.e.b.e.x)) > arg_1.e.b.e.x, !(-1000f <= arg_0.b.e.x), arg_1.e.b.a, all(select(vec2<bool>(true, arg_0.b.a), arg_1.e.b.d.zy, false))), !(!select(select(vec4<bool>(arg_1.a.a, arg_1.e.b.a, true, true), vec4<bool>(arg_1.a.d.x, arg_1.a.a, arg_0.b.d.x, false), vec4<bool>(arg_1.e.b.d.x, arg_0.b.d.x, arg_0.b.d.x, false)), vec4<bool>(arg_0.b.a, true, false, true), vec4<bool>(true, arg_1.e.b.d.x, arg_1.e.b.d.x, false))), !vec4<bool>(true, !any(vec4<bool>(true, arg_0.b.d.x, false, true)), arg_1.a.d.x, true));
            var_1 = select(vec4<bool>(true, true, true, true), select(vec4<bool>(~arg_2.x != abs(arg_1.a.c.x), !all(vec4<bool>(false, arg_1.e.b.a, arg_1.e.b.a, arg_0.b.a)), !arg_0.b.d.x, var_1.x), vec4<bool>(true, 9539i > -arg_1.b.x, var_1.x, ~22772i > select(-26732i, 2147483647i, true)), true), func_5().a);
            var var_2 = func_4(arg_1.a.e.x, !(!vec4<bool>(true, func_7(vec4<f32>(arg_1.e.b.e.x, arg_1.e.a.x, -1198f, 415f), arg_0.b, Struct_3(arg_1.a, arg_1.b, arg_1.c, vec4<u32>(8403u, u_input.a, arg_1.e.b.b, 15949u), Struct_2(vec2<f32>(-364f, arg_0.b.e.x), Struct_1(false, arg_1.e.b.b, arg_2.zw, var_1.wyy, vec3<f32>(arg_1.e.b.e.x, 991f, arg_0.a.x)))), arg_0.b.d), true, any(vec4<bool>(arg_0.b.d.x, var_1.x, arg_1.a.a, false)))), min(0i, -13263i), func_5());
        }
        default: {
            var var_0 = _wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-1000f, arg_0.b.e.x, -1339f, 684f)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_0.a.x, -1124f, arg_0.a.x, arg_1.a.e.x)))) + _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(step(vec4<f32>(378f, arg_1.a.e.x, arg_0.b.e.x, 1460f), _wgslsmith_f_op_vec4_f32(-vec4<f32>(1000f, arg_0.a.x, 224f, arg_0.a.x)))) - _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-744f, arg_1.e.b.e.x, 357f, 1009f)) - _wgslsmith_div_vec4_f32(vec4<f32>(arg_0.b.e.x, -1596f, -218f, arg_0.b.e.x), vec4<f32>(arg_1.e.b.e.x, -844f, -953f, 1341f))))), _wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(arg_1.e.a.x, -2777f, -184f, 1109f) * vec4<f32>(arg_1.a.e.x, arg_0.a.x, -813f, 267f)), _wgslsmith_div_vec4_f32(vec4<f32>(691f, arg_0.a.x, arg_1.a.e.x, 1409f), vec4<f32>(arg_1.e.b.e.x, arg_0.b.e.x, 300f, arg_1.e.b.e.x))) + _wgslsmith_f_op_vec4_f32(vec4<f32>(arg_0.b.e.x, arg_0.a.x, arg_1.e.b.e.x, arg_1.a.e.x) * _wgslsmith_div_vec4_f32(vec4<f32>(-1920f, arg_1.a.e.x, arg_1.e.b.e.x, 1498f), vec4<f32>(arg_1.e.b.e.x, -2086f, arg_1.e.b.e.x, -2002f)))), _wgslsmith_div_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(-arg_1.e.b.e.x), 2505f, arg_0.a.x, _wgslsmith_f_op_f32(select(-223f, arg_1.a.e.x, true))), _wgslsmith_f_op_vec4_f32(-vec4<f32>(450f, arg_1.a.e.x, arg_1.e.b.e.x, arg_0.b.e.x)))))));
            for (var var_1: i32; arg_0.b.d.x; var_1 += 1i) {
                if (LOOP_COUNTERS[18u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
                var var_2 = _wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_f_op_vec2_f32(arg_1.a.e.zx - _wgslsmith_f_op_vec2_f32(min(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(arg_0.a.x, var_0.x) * arg_1.a.e.xz) - vec2<f32>(928f, -174f)), vec2<f32>(_wgslsmith_f_op_f32(floor(var_0.x)), _wgslsmith_f_op_f32(func_8(Struct_1(arg_1.a.d.x, u_input.a, vec2<u32>(u_input.a, arg_1.d.x), arg_0.b.d, vec3<f32>(arg_0.a.x, arg_1.e.a.x, arg_0.a.x)), arg_1.b.x, vec4<u32>(4294967295u, arg_1.a.b, 33065u, 40133u), 1014f))))))));
                let var_3 = arg_1.b.x < max(~43969i | arg_1.c.x, -1i);
                break;
            }
            return vec3<bool>(true, arg_1.a.d.x, arg_0.b.d.x);
        }
    }
    let var_0 = Struct_3(arg_0.b, -func_4(arg_1.e.a.x, select(!vec4<bool>(true, false, arg_1.a.d.x, arg_1.a.d.x), select(vec4<bool>(arg_0.b.a, true, arg_1.a.d.x, false), vec4<bool>(arg_0.b.a, true, false, false), vec4<bool>(false, false, false, arg_0.b.d.x)), !vec4<bool>(false, arg_0.b.d.x, true, true)), 19177i, Struct_1(true, u_input.a & 1u, arg_1.a.c, vec3<bool>(arg_1.a.a, true, true), arg_0.b.e)).b, arg_1.c, _wgslsmith_mult_vec4_u32(~(~reverseBits(arg_1.d)), arg_2), func_4(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(arg_1.e.a.x * _wgslsmith_div_f32(-1000f, arg_1.e.a.x)))), select(select(!vec4<bool>(arg_0.b.a, false, arg_1.a.a, arg_0.b.d.x), vec4<bool>(true, false, true, arg_1.a.a), true), vec4<bool>(true, false, false, arg_1.e.b.a), true), _wgslsmith_sub_i32(i32(-2147483648), -1i), arg_1.a).e);
    var var_1 = func_5();
    let var_2 = vec4<u32>(reverseBits(var_0.e.b.c.x), arg_1.d.x, var_0.a.b, _wgslsmith_dot_vec4_u32(arg_1.d, arg_2)) >> (~vec4<u32>(4294967295u, 2648u, min(var_0.a.b, arg_1.a.b & u_input.a), ~0u ^ _wgslsmith_dot_vec3_u32(arg_1.d.xwz, vec3<u32>(4294967295u, 0u, var_1.b))) % vec4<u32>(32u));
    return vec3<bool>(!var_1.d.x, !arg_0.b.d.x & true, true);
}

fn func_3(arg_0: Struct_3, arg_1: Struct_1, arg_2: vec3<i32>, arg_3: vec4<u32>) -> bool {
    for (var var_0 = 1i; any(!(!func_9(arg_0.e, func_4(arg_0.e.a.x, vec4<bool>(arg_1.a, arg_0.e.b.a, arg_0.a.d.x, false), arg_2.x, arg_1), arg_0.d))); var_0 += 1i) {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
        loop {
            if (LOOP_COUNTERS[20u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
            continue;
        }
        for (var var_1 = -1i; ; var_1 = func_4(_wgslsmith_f_op_f32(abs(arg_0.a.e.x)), !select(!vec4<bool>(arg_1.d.x, arg_1.d.x, arg_0.a.a, true), vec4<bool>(func_7(vec4<f32>(1000f, arg_1.e.x, arg_0.a.e.x, -1000f), arg_1, Struct_3(Struct_1(arg_0.e.b.d.x, arg_0.a.b, arg_3.yy, vec3<bool>(true, false, arg_1.a), arg_0.a.e), vec3<i32>(2147483647i, arg_2.x, 0i), arg_0.c, arg_0.d, Struct_2(vec2<f32>(402f, 475f), arg_0.a)), vec3<bool>(true, arg_1.a, arg_1.d.x)), all(vec2<bool>(true, true)), true, func_7(vec4<f32>(arg_1.e.x, arg_0.e.a.x, arg_0.a.e.x, arg_1.e.x), Struct_1(arg_0.e.b.a, 30758u, arg_0.a.c, vec3<bool>(arg_0.e.b.a, arg_0.e.b.d.x, true), arg_1.e), arg_0, arg_1.d)), vec4<bool>(func_9(arg_0.e, arg_0, vec4<u32>(u_input.a, 62244u, arg_0.a.c.x, arg_0.e.b.b)).x, true, select(false, arg_0.a.a, arg_1.a), arg_1.d.x)), i32(-2147483648), arg_1).b.x) {
            if (LOOP_COUNTERS[21u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
            var_0 = ~abs(_wgslsmith_mod_i32(50546i, _wgslsmith_dot_vec3_i32(arg_0.c.xwz, firstTrailingBit(arg_2))));
            var_0 = ~_wgslsmith_sub_i32(arg_2.x, ~abs(min(-1i, 34132i)));
            var var_2 = -arg_2.zx;
            break;
        }
        var var_1 = -(i32(-1i) * -2147483647i) ^ arg_0.c.x;
        for (var var_2 = -4915i; false; var_2 += 1i) {
            if (LOOP_COUNTERS[22u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
            let var_3 = Struct_2(vec2<f32>(_wgslsmith_div_f32(arg_1.e.x, _wgslsmith_f_op_f32(-arg_0.a.e.x)), _wgslsmith_f_op_f32(-arg_1.e.x)), func_4(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(arg_1.e.x * 1992f), arg_1.e.x)), select(vec4<bool>(arg_0.e.b.a, func_4(arg_0.e.b.e.x, vec4<bool>(false, true, true, arg_0.e.b.a), arg_2.x, arg_1).a.a, all(vec4<bool>(arg_0.e.b.d.x, arg_1.a, false, false)), func_7(vec4<f32>(276f, arg_1.e.x, arg_0.a.e.x, arg_1.e.x), arg_1, Struct_3(Struct_1(false, arg_0.e.b.c.x, arg_3.yx, arg_1.d, arg_0.e.b.e), vec3<i32>(-1i, arg_2.x, 2147483647i), arg_0.c, vec4<u32>(81069u, arg_0.e.b.c.x, 8221u, 1u), Struct_2(arg_0.a.e.yx, arg_1)), arg_1.d)), select(vec4<bool>(true, arg_1.d.x, true, true), !vec4<bool>(arg_1.a, arg_1.a, true, true), select(vec4<bool>(false, arg_1.a, arg_0.e.b.a, true), vec4<bool>(false, false, arg_1.a, arg_0.a.a), vec4<bool>(arg_0.e.b.d.x, arg_1.a, arg_1.d.x, false))), select(select(vec4<bool>(arg_0.a.d.x, false, false, arg_0.e.b.d.x), vec4<bool>(arg_1.a, true, arg_1.a, false), vec4<bool>(false, arg_0.a.a, arg_0.a.d.x, false)), select(vec4<bool>(arg_1.a, true, arg_0.a.d.x, arg_1.a), vec4<bool>(false, false, true, true), arg_0.a.d.x), func_6(Struct_3(arg_1, vec3<i32>(u_input.b.x, -1i, u_input.b.x), arg_0.c, vec4<u32>(arg_0.d.x, arg_0.a.b, u_input.a, 46581u), arg_0.e), arg_0.e.b.b, vec4<bool>(false, arg_0.a.d.x, arg_0.e.b.a, true), vec4<u32>(0u, 0u, u_input.a, 12840u)).x)), 28325i, arg_1).a);
            var_2 = 0i;
            break;
        }
    }
    var var_0 = func_4(_wgslsmith_f_op_f32(725f - 977f), vec4<bool>(!select(false, any(arg_1.d), all(vec3<bool>(true, false, arg_1.d.x))), true, (arg_0.b.x | max(-1i, -16115i)) == -(38558i >> (27u % 32u)), arg_1.a & arg_0.a.d.x), arg_0.b.x, func_4(arg_1.e.x, vec4<bool>(arg_0.a.d.x, !(!arg_0.e.b.a), true, arg_0.e.b.d.x), -arg_0.c.x, func_4(arg_1.e.x, vec4<bool>(true, true, true, true), 24033i ^ arg_0.c.x, func_5()).e.b).e.b).e;
    let var_1 = _wgslsmith_clamp_u32(~72616u << ((u_input.a << (1u % 32u)) % 32u), _wgslsmith_dot_vec2_u32(~vec2<u32>(var_0.b.b, 4294967295u) & var_0.b.c, vec2<u32>(~25946u, var_0.b.b)) << (_wgslsmith_clamp_u32(4294967295u, 1u, ~arg_1.c.x) % 32u), _wgslsmith_dot_vec2_u32(arg_1.c, ~min(var_0.b.c, arg_1.c << (vec2<u32>(1u, 0u) % vec2<u32>(32u)))));
    let var_2 = func_4(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(arg_1.e.x)) - _wgslsmith_f_op_f32(arg_1.e.x * _wgslsmith_f_op_f32(-178f - arg_1.e.x)))), select(select(vec4<bool>(false, arg_1.d.x, arg_0.e.b.d.x & var_0.b.a, func_5().a), vec4<bool>(true, true, !arg_0.e.b.a, true), !arg_1.d.x), vec4<bool>(true, var_0.b.a, true, func_9(arg_0.e, Struct_3(var_0.b, vec3<i32>(-1i, -33187i, arg_2.x), arg_0.c, vec4<u32>(5642u, arg_1.b, u_input.a, 40578u), Struct_2(vec2<f32>(695f, 709f), var_0.b)), _wgslsmith_mod_vec4_u32(arg_3, vec4<u32>(6659u, arg_0.d.x, u_input.a, var_1))).x), arg_0.e.b.a), _wgslsmith_mod_i32(_wgslsmith_dot_vec4_i32(vec4<i32>(-32247i, arg_2.x, arg_2.x, i32(-2147483648)), -vec4<i32>(i32(-2147483648), u_input.b.x, arg_0.b.x, u_input.b.x)) << (81884u % 32u), (-1i >> (1u % 32u)) >> ((arg_0.d.x ^ ~var_0.b.b) % 32u)), func_5()).e;
    var var_3 = arg_3;
    return !(max(_wgslsmith_sub_i32(arg_2.x, -27058i), i32(-2147483648)) > -select(-38981i, _wgslsmith_div_i32(arg_0.c.x, 12533i), select(false, var_0.b.a, true)));
}

fn func_10(arg_0: Struct_1, arg_1: bool, arg_2: vec3<bool>) -> Struct_1 {
    var var_0 = true;
    var_0 = arg_1;
    for (var var_1 = -21740i; var_1 < -1i; ) {
        if (LOOP_COUNTERS[23u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
        for (var var_2 = 7437i; !func_5().a; var_1 = -countOneBits(-(~_wgslsmith_add_i32(0i, u_input.b.x)))) {
            if (LOOP_COUNTERS[24u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
            let var_3 = vec3<u32>(45059u, ~17228u >> (_wgslsmith_dot_vec3_u32(vec3<u32>(~0u, firstTrailingBit(0u), arg_0.b), vec3<u32>(~22154u, 14259u, 1u)) % 32u), 4551u);
            let var_4 = _wgslsmith_div_vec3_f32(vec3<f32>(-120f, _wgslsmith_div_f32(arg_0.e.x, _wgslsmith_f_op_f32(-arg_0.e.x)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_0.e.x + _wgslsmith_f_op_f32(598f + arg_0.e.x)))), _wgslsmith_f_op_vec3_f32(ceil(arg_0.e)));
            var var_5 = Struct_3(Struct_1(true, ~arg_0.b, abs(max(vec2<u32>(u_input.a, arg_0.c.x), var_3.zy) >> (firstLeadingBit(var_3.yx) % vec2<u32>(32u))), vec3<bool>(arg_0.a, arg_1, true & !arg_2.x), _wgslsmith_f_op_vec3_f32(select(vec3<f32>(arg_0.e.x, _wgslsmith_f_op_f32(f32(-1f) * -509f), _wgslsmith_f_op_f32(arg_0.e.x + -1656f)), _wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(vec3<f32>(-236f, 612f, -1199f), var_4)), any(!arg_0.d.xx)))), u_input.b, ~(vec4<i32>(~(i32(-2147483648)), -2482i & u_input.b.x, 8260i, i32(-2147483648)) >> (_wgslsmith_mult_vec4_u32(abs(vec4<u32>(0u, 1u, 2113u, 74875u)), vec4<u32>(0u, 99049u, 34719u, arg_0.b)) % vec4<u32>(32u))), _wgslsmith_add_vec4_u32(countOneBits(firstTrailingBit(~vec4<u32>(var_3.x, 2591u, var_3.x, 3331u))), ~vec4<u32>(~arg_0.c.x, 4294967295u << (u_input.a % 32u), arg_0.b << (u_input.a % 32u), u_input.a)), Struct_2(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(-var_4.xx))) + _wgslsmith_f_op_vec2_f32(vec2<f32>(var_4.x, -304f) * _wgslsmith_f_op_vec2_f32(vec2<f32>(arg_0.e.x, arg_0.e.x) + vec2<f32>(-1175f, var_4.x)))), func_5()));
            let var_6 = Struct_1(arg_2.x, _wgslsmith_dot_vec4_u32(var_5.d | _wgslsmith_sub_vec4_u32(_wgslsmith_div_vec4_u32(vec4<u32>(37031u, u_input.a, arg_0.b, var_5.d.x), var_5.d), var_5.d & var_5.d), max(_wgslsmith_add_vec4_u32(~vec4<u32>(u_input.a, u_input.a, 2609u, 63260u), vec4<u32>(arg_0.b, 24995u, 1265u, 37447u)), vec4<u32>(select(4294967295u, u_input.a, true), func_4(var_5.a.e.x, vec4<bool>(arg_1, true, arg_2.x, false), 1i, arg_0).d.x, ~87492u, abs(u_input.a)))), var_5.e.b.c, !arg_0.d, var_5.a.e);
            let var_7 = vec4<u32>(_wgslsmith_mult_u32(var_6.c.x, _wgslsmith_add_u32(1u, 1u)) << (_wgslsmith_sub_u32((1u ^ var_3.x) & _wgslsmith_mult_u32(56964u, 32560u), u_input.a) % 32u), ~u_input.a, _wgslsmith_sub_u32(_wgslsmith_sub_u32(func_5().c.x, ~u_input.a | var_6.b), ~(~_wgslsmith_dot_vec4_u32(var_5.d, var_5.d))), ~(~3058u));
        }
        switch (u_input.b.x ^ u_input.b.x) {
            case -1i: {
            }
            case 2834i: {
                let var_2 = select(2147483647i, firstTrailingBit(u_input.b.x << (1u % 32u)), false) ^ -28811i;
                continue;
            }
            case 15701i: {
            }
            default: {
                let var_2 = !vec2<bool>(false, arg_1);
                break;
            }
        }
        switch (u_input.b.x) {
            case 1i: {
                var var_2 = arg_0.b;
                var var_3 = vec3<u32>(u_input.a, 44670u, ~0u);
                var_0 = !func_6(func_4(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(arg_0.e.x + arg_0.e.x))), vec4<bool>(arg_0.a, all(vec2<bool>(true, false)), arg_2.x, i32(-2147483648) <= u_input.b.x), _wgslsmith_sub_i32(_wgslsmith_dot_vec2_i32(vec2<i32>(-6068i, u_input.b.x), u_input.b.xy), _wgslsmith_dot_vec2_i32(vec2<i32>(-53028i, -9345i), u_input.b.zz)), Struct_1(arg_2.x, _wgslsmith_div_u32(u_input.a, var_3.x), vec2<u32>(var_3.x, u_input.a), vec3<bool>(false, true, false), _wgslsmith_f_op_vec3_f32(ceil(arg_0.e)))), _wgslsmith_dot_vec3_u32(vec3<u32>(1u, arg_0.b, 4294967295u), vec3<u32>(4294967295u, 21331u, 51625u)) >> (var_3.x % 32u), !(!vec4<bool>(false, true, arg_2.x, true)), _wgslsmith_mult_vec4_u32(vec4<u32>(~var_3.x, ~0u, ~var_3.x, var_3.x), ~(vec4<u32>(63919u, arg_0.c.x, arg_0.c.x, 44290u) >> (vec4<u32>(1u, arg_0.c.x, 4294967295u, var_3.x) % vec4<u32>(32u))))).x;
                break;
            }
            case 0i: {
                var_1 = min(abs(i32(-1i) * -15143i), min(i32(-1i) * -1i, u_input.b.x)) | _wgslsmith_dot_vec2_i32(vec2<i32>(-1i, -firstLeadingBit(i32(-2147483648))), max(_wgslsmith_mult_vec2_i32(vec2<i32>(u_input.b.x, 1i), abs(u_input.b.zx)), -vec2<i32>(53755i, u_input.b.x)));
            }
            case -18435i: {
                var_0 = true;
                var_0 = func_6(func_4(_wgslsmith_div_f32(arg_0.e.x, _wgslsmith_f_op_f32(793f - 1000f)), vec4<bool>((6732u > arg_0.c.x) || func_9(Struct_2(vec2<f32>(-1967f, arg_0.e.x), Struct_1(arg_2.x, 4294967295u, vec2<u32>(u_input.a, u_input.a), arg_2, arg_0.e)), Struct_3(arg_0, u_input.b, vec4<i32>(u_input.b.x, i32(-2147483648), u_input.b.x, u_input.b.x), vec4<u32>(u_input.a, 48657u, u_input.a, u_input.a), Struct_2(vec2<f32>(arg_0.e.x, arg_0.e.x), Struct_1(true, 0u, vec2<u32>(1u, 4294967295u), arg_0.d, vec3<f32>(arg_0.e.x, -1293f, -1139f)))), vec4<u32>(53428u, 31586u, 17395u, 4294967295u)).x, true, _wgslsmith_f_op_f32(f32(-1f) * -1133f) >= _wgslsmith_f_op_f32(1270f * arg_0.e.x), arg_1), -20004i, func_5()), select(~(2881u & u_input.a) & ~_wgslsmith_dot_vec4_u32(vec4<u32>(142860u, 35699u, 0u, 4294967295u), vec4<u32>(u_input.a, 27583u, arg_0.c.x, arg_0.c.x)), ~58997u, true), vec4<bool>(arg_0.d.x, arg_0.d.x, !(1u == func_4(1000f, vec4<bool>(arg_2.x, false, arg_2.x, arg_2.x), u_input.b.x, Struct_1(arg_2.x, 0u, arg_0.c, vec3<bool>(arg_2.x, arg_0.a, true), arg_0.e)).a.b), true), vec4<u32>(~35610u, 66615u, u_input.a, arg_0.c.x)).x;
                var var_2 = ~1u;
                break;
            }
            case -32397i: {
                let var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -1928f) + _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(arg_0.e.x + 173f))))));
                var_1 = ~u_input.b.x;
                var var_3 = vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-616f) + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_div_f32(734f, var_2) * _wgslsmith_f_op_f32(f32(-1f) * -1602f)) * 849f)), func_4(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(var_2 - _wgslsmith_div_f32(var_2, 341f))), select(vec4<bool>(arg_1 & false, false, arg_2.x || arg_2.x, select(false, arg_2.x, true)), !(!vec4<bool>(arg_2.x, false, arg_0.d.x, arg_2.x)), false), (~u_input.b.x & 21472i) & 15115i, Struct_1(_wgslsmith_dot_vec2_i32(vec2<i32>(2147483647i, 7514i), vec2<i32>(2147483647i, u_input.b.x)) < 15125i, ~1u, arg_0.c, select(func_5().d, func_5().d, func_5().d.x), vec3<f32>(833f, _wgslsmith_f_op_f32(max(-857f, 219f)), -157f))).a.e.x, _wgslsmith_f_op_f32(-121f), _wgslsmith_f_op_f32(arg_0.e.x - var_2));
                var var_4 = firstLeadingBit(~(~vec3<u32>(_wgslsmith_mod_u32(arg_0.b, 9160u), _wgslsmith_add_u32(0u, arg_0.b), ~4294967295u)));
                break;
            }
            default: {
                var_0 = arg_1;
            }
        }
    }
    for (var var_1: i32; true; var_1 = u_input.b.x | (~_wgslsmith_sub_i32(-u_input.b.x, _wgslsmith_add_i32(-1i, u_input.b.x)) & 0i)) {
        if (LOOP_COUNTERS[25u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
        switch (u_input.b.x) {
            case 1i: {
                var_0 = ~0u < _wgslsmith_dot_vec2_u32(_wgslsmith_div_vec2_u32(~abs(arg_0.c), _wgslsmith_mod_vec2_u32(arg_0.c, _wgslsmith_mult_vec2_u32(arg_0.c, vec2<u32>(arg_0.c.x, 0u)))), vec2<u32>(4294967295u, ~reverseBits(u_input.a)));
            }
            default: {
                continue;
            }
        }
        for (var var_2: i32; ; ) {
            if (LOOP_COUNTERS[26u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
            var_2 = abs(_wgslsmith_mult_i32((_wgslsmith_mult_i32(u_input.b.x, u_input.b.x) ^ _wgslsmith_div_i32(-53844i, 1i)) ^ (i32(-1i) * i32(-2147483648)), -_wgslsmith_sub_i32(i32(-1i) * -24797i, max(54378i, i32(-2147483648)))));
            var var_3 = u_input.b.x;
        }
        if (false) {
        }
    }
    var_0 = false;
    return arg_0;
}

fn func_11(arg_0: vec3<u32>, arg_1: Struct_2, arg_2: Struct_1) -> Struct_3 {
    let var_0 = _wgslsmith_div_f32(func_4(-193f, select(select(vec4<bool>(arg_1.b.a, arg_2.d.x, arg_1.b.a, arg_2.a), !vec4<bool>(arg_2.d.x, arg_1.b.a, true, arg_2.a), true), select(select(vec4<bool>(arg_1.b.a, arg_2.a, false, arg_2.d.x), vec4<bool>(arg_2.d.x, arg_2.a, arg_1.b.d.x, true), arg_1.b.d.x), vec4<bool>(true, true, arg_2.d.x, true), select(vec4<bool>(arg_1.b.a, arg_1.b.d.x, false, true), vec4<bool>(false, true, arg_1.b.a, arg_1.b.d.x), arg_2.d.x)), select(!vec4<bool>(arg_1.b.a, false, arg_2.d.x, true), select(vec4<bool>(arg_1.b.a, arg_1.b.d.x, arg_1.b.d.x, arg_1.b.d.x), vec4<bool>(true, arg_1.b.a, arg_2.a, true), vec4<bool>(arg_2.d.x, arg_1.b.a, true, arg_2.d.x)), true)), ~abs(-1i) >> (arg_0.x % 32u), func_5()).a.e.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_2.e.x) * arg_2.e.x))));
    var var_1 = arg_1;
    var var_2 = max(vec3<u32>(3972u, 35941u, 0u), vec3<u32>(~(~arg_0.x), ~(~arg_1.b.c.x), _wgslsmith_dot_vec3_u32(~vec3<u32>(arg_0.x, arg_0.x, 4925u), ~arg_0) << ((0u | ~arg_0.x) % 32u)));
    var_1 = Struct_2(vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(_wgslsmith_div_f32(arg_2.e.x, 1061f), _wgslsmith_f_op_f32(func_8(arg_1.b, 29414i, vec4<u32>(1u, var_2.x, 4294967295u, 52587u), 1856f))))), 343f), arg_2);
    let var_3 = 38200i;
    return Struct_3(arg_2, ~u_input.b, (_wgslsmith_clamp_vec4_i32(_wgslsmith_mult_vec4_i32(vec4<i32>(i32(-2147483648), 9104i, -51366i, 0i), vec4<i32>(u_input.b.x, 2147483647i, -43209i, -54273i)), firstTrailingBit(vec4<i32>(u_input.b.x, var_3, u_input.b.x, -1883i)), select(vec4<i32>(var_3, var_3, 14349i, var_3), vec4<i32>(u_input.b.x, var_3, u_input.b.x, i32(-2147483648)), var_1.b.a)) ^ countOneBits(min(vec4<i32>(var_3, 82i, u_input.b.x, u_input.b.x), vec4<i32>(0i, 58140i, var_3, var_3)))) ^ vec4<i32>(-26776i, 0i, -1i, ~(-32822i)), countOneBits((func_4(var_1.a.x, vec4<bool>(false, arg_1.b.a, true, var_1.b.d.x), i32(-2147483648), arg_1.b).d ^ vec4<u32>(1u, u_input.a, 0u, 1u)) & ~(~vec4<u32>(97455u, 41019u, 5419u, 1u))), func_4(var_0, vec4<bool>(!all(vec2<bool>(var_1.b.a, arg_1.b.a)), false, true, select(func_3(Struct_3(arg_1.b, vec3<i32>(0i, -3225i, 5678i), vec4<i32>(var_3, u_input.b.x, 0i, u_input.b.x), vec4<u32>(0u, 28645u, var_2.x, 91427u), arg_1), arg_2, u_input.b, vec4<u32>(arg_1.b.c.x, var_2.x, arg_1.b.b, 81118u)), u_input.a < 14949u, false)), -26642i, arg_2).e);
}

fn func_12(arg_0: f32, arg_1: Struct_3, arg_2: vec4<bool>, arg_3: u32) -> Struct_1 {
    let var_0 = arg_1.e.a.x;
    loop {
        if (LOOP_COUNTERS[27u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[27u] = LOOP_COUNTERS[27u] + 1u;
        var var_1 = Struct_1(arg_1.e.b.a, arg_3, arg_1.d.zx, !arg_1.a.d, _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(step(vec3<f32>(981f, var_0, arg_1.a.e.x), vec3<f32>(773f, -251f, 1000f))))), vec3<f32>(arg_0, _wgslsmith_f_op_f32(var_0 - arg_1.a.e.x), 970f)));
        loop {
            if (LOOP_COUNTERS[28u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[28u] = LOOP_COUNTERS[28u] + 1u;
            var var_2 = select(vec3<bool>(false, func_7(_wgslsmith_div_vec4_f32(vec4<f32>(var_0, arg_1.e.b.e.x, var_1.e.x, var_1.e.x), vec4<f32>(-379f, 1542f, arg_1.a.e.x, -312f)), Struct_1(false, max(5856u, 30527u), vec2<u32>(u_input.a, 108195u), vec3<bool>(arg_2.x, true, false), _wgslsmith_f_op_vec3_f32(vec3<f32>(var_1.e.x, arg_0, var_1.e.x) * vec3<f32>(-555f, var_0, 666f))), arg_1, func_5().d), func_10(arg_1.a, false, var_1.d).d.x || true), func_10(arg_1.a, false, !arg_2.zwy).d, var_1.d);
        }
        switch (_wgslsmith_mod_i32(2147483647i, 1i)) {
            case i32(-2147483648): {
            }
            default: {
                var_1 = Struct_1(arg_2.x, ~(~((u_input.a | 96219u) ^ ~arg_3)), abs(~vec2<u32>(57251u, select(4294967295u, 4294967295u, false))), vec3<bool>(arg_2.x, arg_1.a.d.x, var_1.d.x), _wgslsmith_f_op_vec3_f32(var_1.e - _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(arg_0, 1227f, arg_0)) - vec3<f32>(_wgslsmith_f_op_f32(arg_1.e.b.e.x - 588f), var_1.e.x, 1f))));
                var var_2 = var_1.e.x;
                break;
            }
        }
        break;
    }
    for (; ; ) {
        if (LOOP_COUNTERS[29u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[29u] = LOOP_COUNTERS[29u] + 1u;
        var var_1 = countOneBits(arg_1.b.x);
        var var_2 = arg_1.e;
    }
    let var_1 = func_11(_wgslsmith_mult_vec3_u32(func_11(~arg_1.d.xxx, arg_1.e, Struct_1(true, firstLeadingBit(1u), arg_1.a.c, !arg_2.wyz, _wgslsmith_f_op_vec3_f32(-vec3<f32>(var_0, -605f, arg_0)))).d.yyw, arg_1.d.wwz), func_4(arg_0, vec4<bool>(select(arg_2.x, func_9(arg_1.e, arg_1, arg_1.d).x, false), true && arg_1.e.b.d.x, arg_2.x, !(4294967295u > u_input.a)), 2147483647i, arg_1.e.b).e, Struct_1(!((2147483647i <= arg_1.c.x) != true), u_input.a, arg_1.d.xz, arg_1.a.d, arg_1.e.b.e)).e;
    loop {
        if (LOOP_COUNTERS[30u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[30u] = LOOP_COUNTERS[30u] + 1u;
        if (all(arg_2)) {
            let var_2 = vec3<bool>(true, var_1.b.d.x, any(!arg_2.yxw));
            let var_3 = func_4(_wgslsmith_f_op_f32(_wgslsmith_div_f32(var_1.b.e.x, _wgslsmith_f_op_f32(round(956f))) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(var_0 + arg_0))))), arg_2, _wgslsmith_mod_i32(~min(-1i, arg_1.c.x), ~(~(-2650i))) >> (_wgslsmith_dot_vec3_u32(arg_1.d.zyw | _wgslsmith_sub_vec3_u32(arg_1.d.zwx, vec3<u32>(var_1.b.b, u_input.a, arg_1.e.b.c.x)), reverseBits(vec3<u32>(arg_1.d.x, 55770u, arg_1.e.b.b)) << (_wgslsmith_mult_vec3_u32(vec3<u32>(22238u, 1u, 12156u), vec3<u32>(arg_1.e.b.c.x, u_input.a, arg_3)) % vec3<u32>(32u))) % 32u), Struct_1(arg_2.x, ~_wgslsmith_mult_u32(~4525u, _wgslsmith_dot_vec2_u32(vec2<u32>(1u, var_1.b.c.x), vec2<u32>(arg_3, 39976u))), ~var_1.b.c, !select(!var_2, select(vec3<bool>(false, true, arg_1.e.b.d.x), vec3<bool>(var_1.b.d.x, var_1.b.d.x, var_1.b.a), true), var_2.x), var_1.b.e)).e;
        }
        let var_2 = _wgslsmith_dot_vec4_i32(-vec4<i32>(func_4(var_1.b.e.x, vec4<bool>(false, var_1.b.d.x, false, arg_1.a.a), u_input.b.x, arg_1.a).c.x, u_input.b.x, _wgslsmith_div_i32(u_input.b.x, 0i), 10073i) >> (func_4(_wgslsmith_f_op_f32(-arg_1.a.e.x), !select(arg_2, vec4<bool>(true, arg_1.e.b.d.x, false, true), arg_2.x), -arg_1.b.x, Struct_1(arg_1.e.b.a, _wgslsmith_div_u32(arg_3, arg_1.d.x), reverseBits(arg_1.a.c), func_10(Struct_1(arg_1.a.a, 56587u, vec2<u32>(59110u, arg_3), vec3<bool>(true, arg_2.x, arg_2.x), arg_1.a.e), false, vec3<bool>(false, false, arg_1.e.b.a)).d, vec3<f32>(arg_0, 170f, -1960f))).d % vec4<u32>(32u)), vec4<i32>(-1i) * -(vec4<i32>(-1i) * -vec4<i32>(-1i, -1i, u_input.b.x, arg_1.b.x)));
        for (var var_3 = -8932i; arg_1.a.a; ) {
            if (LOOP_COUNTERS[31u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[31u] = LOOP_COUNTERS[31u] + 1u;
            var var_4 = firstLeadingBit(-21354i) ^ arg_1.b.x;
            var_3 = firstTrailingBit(_wgslsmith_dot_vec4_i32(vec4<i32>(_wgslsmith_mod_i32(_wgslsmith_mult_i32(8431i, 0i), firstLeadingBit(arg_1.c.x)), -21868i, -1i ^ u_input.b.x, func_4(_wgslsmith_f_op_f32(arg_1.e.a.x * -725f), select(vec4<bool>(var_1.b.a, arg_1.e.b.a, arg_1.a.a, arg_2.x), vec4<bool>(false, true, arg_2.x, var_1.b.d.x), true), -var_2, var_1.b).b.x), vec4<i32>(min(-1i, _wgslsmith_clamp_i32(21908i, u_input.b.x, u_input.b.x)), min(u_input.b.x, _wgslsmith_clamp_i32(1i, var_2, 2147483647i)), 1i, var_2)));
            var_3 = 8308i;
            continue;
        }
        loop {
            if (LOOP_COUNTERS[32u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[32u] = LOOP_COUNTERS[32u] + 1u;
            let var_3 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(abs(_wgslsmith_f_op_vec2_f32(step(vec2<f32>(-787f, _wgslsmith_div_f32(arg_0, -556f)), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(var_1.b.e.yy * var_1.b.e.yy)))))));
            continue;
        }
        return Struct_1(_wgslsmith_mod_i32(var_2, ~19145i) < 32014i, ~38249u, var_1.b.c & _wgslsmith_div_vec2_u32(arg_1.d.zx, ~var_1.b.c), arg_2.xyw, _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(var_1.b.e + vec3<f32>(_wgslsmith_f_op_f32(-928f), _wgslsmith_f_op_f32(f32(-1f) * -474f), -1624f))));
    }
    return var_1.b;
}

fn func_2(arg_0: Struct_1) -> vec4<bool> {
    if (arg_0.d.x) {
        switch (u_input.b.x) {
            case 1i: {
                var var_0 = reverseBits(u_input.a);
                var_0 = u_input.a;
            }
            case 2173i: {
                var var_0 = func_12(_wgslsmith_f_op_f32(326f * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_0.e.x * arg_0.e.x)))), func_11(~(~vec3<u32>(u_input.a, 0u, arg_0.b)) >> (vec3<u32>(u_input.a, ~4294967295u, ~u_input.a) % vec3<u32>(32u)), Struct_2(_wgslsmith_f_op_vec2_f32(arg_0.e.yx - _wgslsmith_f_op_vec2_f32(-arg_0.e.yx)), func_10(arg_0, func_3(Struct_3(arg_0, u_input.b, vec4<i32>(60558i, u_input.b.x, u_input.b.x, u_input.b.x), vec4<u32>(0u, u_input.a, 65786u, 34507u), Struct_2(arg_0.e.yx, arg_0)), arg_0, u_input.b, vec4<u32>(4849u, 0u, arg_0.b, 4294967295u)), !arg_0.d)), func_10(arg_0, func_7(_wgslsmith_f_op_vec4_f32(select(vec4<f32>(1002f, arg_0.e.x, arg_0.e.x, arg_0.e.x), vec4<f32>(arg_0.e.x, arg_0.e.x, -1321f, arg_0.e.x), arg_0.a)), arg_0, Struct_3(Struct_1(arg_0.a, 0u, arg_0.c, arg_0.d, vec3<f32>(1177f, arg_0.e.x, arg_0.e.x)), vec3<i32>(0i, -23054i, u_input.b.x), vec4<i32>(i32(-2147483648), u_input.b.x, u_input.b.x, u_input.b.x), vec4<u32>(arg_0.c.x, arg_0.c.x, arg_0.c.x, arg_0.c.x), Struct_2(arg_0.e.yy, Struct_1(false, 4294967295u, arg_0.c, arg_0.d, arg_0.e))), vec3<bool>(true, arg_0.d.x, true)), !arg_0.d)), select(select(!select(vec4<bool>(true, true, true, arg_0.a), vec4<bool>(true, true, true, true), vec4<bool>(true, false, true, false)), select(!vec4<bool>(arg_0.d.x, false, true, false), vec4<bool>(arg_0.d.x, arg_0.d.x, arg_0.a, arg_0.d.x), true), !arg_0.d.x), select(!select(vec4<bool>(true, true, true, arg_0.d.x), vec4<bool>(arg_0.d.x, arg_0.a, false, false), arg_0.d.x), !select(vec4<bool>(true, arg_0.d.x, arg_0.d.x, false), vec4<bool>(false, true, true, arg_0.a), arg_0.d.x), select(all(vec2<bool>(arg_0.a, arg_0.a)), false, func_9(Struct_2(arg_0.e.xx, arg_0), Struct_3(arg_0, u_input.b, vec4<i32>(47987i, -39005i, u_input.b.x, u_input.b.x), vec4<u32>(6880u, u_input.a, arg_0.c.x, arg_0.c.x), Struct_2(arg_0.e.xz, Struct_1(true, arg_0.c.x, arg_0.c, arg_0.d, vec3<f32>(767f, arg_0.e.x, arg_0.e.x)))), vec4<u32>(arg_0.c.x, u_input.a, 83571u, u_input.a)).x)), func_7(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(sign(vec4<f32>(arg_0.e.x, 161f, arg_0.e.x, arg_0.e.x)))), arg_0, func_11(vec3<u32>(1u, u_input.a, 27279u) << (vec3<u32>(4294967295u, 0u, 9804u) % vec3<u32>(32u)), func_4(-397f, vec4<bool>(true, arg_0.a, false, false), -14271i, Struct_1(arg_0.d.x, 55030u, vec2<u32>(u_input.a, arg_0.c.x), vec3<bool>(arg_0.a, false, true), vec3<f32>(arg_0.e.x, -1000f, arg_0.e.x))).e, arg_0), !arg_0.d)), 27981u);
                let var_1 = func_4(arg_0.e.x, !select(vec4<bool>(arg_0.d.x, true, true, func_5().d.x), vec4<bool>(true, true, var_0.e.x < arg_0.e.x, var_0.d.x), true), ~_wgslsmith_mod_i32(countOneBits(~2147483647i), u_input.b.x), Struct_1(false, var_0.c.x, arg_0.c, var_0.d, _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(-arg_0.e))), _wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(-vec3<f32>(var_0.e.x, var_0.e.x, 960f)), _wgslsmith_f_op_vec3_f32(-vec3<f32>(var_0.e.x, -889f, -1841f)))), !vec3<bool>(true, var_0.d.x, arg_0.d.x))))).e;
                var_0 = var_1.b;
            }
            case 28937i: {
            }
            case -52402i: {
                var var_0 = abs(vec4<i32>(_wgslsmith_div_i32(~2757i, -u_input.b.x), u_input.b.x ^ u_input.b.x, reverseBits(_wgslsmith_dot_vec4_i32(max(vec4<i32>(u_input.b.x, u_input.b.x, 2147483647i, u_input.b.x), vec4<i32>(u_input.b.x, i32(-2147483648), 0i, u_input.b.x)), select(vec4<i32>(u_input.b.x, u_input.b.x, -4500i, u_input.b.x), vec4<i32>(u_input.b.x, i32(-2147483648), u_input.b.x, -31260i), vec4<bool>(arg_0.a, arg_0.d.x, arg_0.d.x, true)))), 2147483647i));
                var var_1 = func_4(arg_0.e.x, !(!(!select(vec4<bool>(arg_0.d.x, true, true, arg_0.d.x), vec4<bool>(false, arg_0.a, arg_0.a, false), false))), var_0.x, arg_0).e;
                let var_2 = vec4<f32>(1503f, _wgslsmith_f_op_f32(-var_1.a.x), _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-1f))), var_1.b.e.x);
            }
            default: {
            }
        }
        loop {
            if (LOOP_COUNTERS[33u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[33u] = LOOP_COUNTERS[33u] + 1u;
            break;
        }
        loop {
            if (LOOP_COUNTERS[34u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[34u] = LOOP_COUNTERS[34u] + 1u;
            let var_0 = _wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(exp2(_wgslsmith_div_f32(arg_0.e.x, arg_0.e.x))), -2520f)), arg_0.e.x, _wgslsmith_div_f32(1164f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(arg_0.e.x))))));
            var var_1 = func_4(_wgslsmith_div_f32(arg_0.e.x, _wgslsmith_f_op_f32(max(814f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0.e.x))))), !vec4<bool>(!(arg_0.a && false), true, arg_0.a, func_4(var_0.x, select(vec4<bool>(arg_0.d.x, false, true, false), vec4<bool>(false, true, arg_0.d.x, arg_0.a), true), u_input.b.x ^ i32(-2147483648), Struct_1(false, u_input.a, arg_0.c, vec3<bool>(true, false, true), vec3<f32>(var_0.x, 1764f, -593f))).e.b.d.x), u_input.b.x, arg_0).e;
            let var_2 = firstTrailingBit(~vec3<u32>(~arg_0.b, ~var_1.b.c.x, var_1.b.b));
            break;
        }
        let var_0 = arg_0.d.x;
        let var_1 = true;
    }
    for (; false; ) {
        if (LOOP_COUNTERS[35u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[35u] = LOOP_COUNTERS[35u] + 1u;
        var var_0 = !vec2<bool>(false, !arg_0.d.x);
        break;
    }
    for (var var_0 = 0i; var_0 < 2147483647i; var_0 += 1i) {
        if (LOOP_COUNTERS[36u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[36u] = LOOP_COUNTERS[36u] + 1u;
        switch (-20910i) {
            case 25983i: {
                let var_1 = Struct_1(arg_0.a, _wgslsmith_mult_u32(_wgslsmith_dot_vec4_u32(~reverseBits(vec4<u32>(47760u, 15651u, 19065u, arg_0.b)), countOneBits(select(vec4<u32>(u_input.a, 1u, arg_0.b, 1u), vec4<u32>(arg_0.b, 21205u, u_input.a, arg_0.b), vec4<bool>(arg_0.a, arg_0.d.x, arg_0.d.x, arg_0.a)))), 13509u), arg_0.c, arg_0.d, vec3<f32>(-1181f, arg_0.e.x, _wgslsmith_f_op_f32(f32(-1f) * -367f)));
            }
            default: {
                var_0 = 12034i << (u_input.a % 32u);
                var var_1 = func_4(arg_0.e.x, !(!vec4<bool>(true, arg_0.d.x, true, true)), -_wgslsmith_add_i32(i32(-1i) * i32(-2147483648), -(~16215i)), arg_0).e.b.d;
                var var_2 = func_11(select(min(countOneBits(vec3<u32>(4294967295u, 4294967295u, u_input.a)), _wgslsmith_mult_vec3_u32(vec3<u32>(28173u, 81049u, arg_0.b), vec3<u32>(arg_0.c.x, 0u, 1u))) ^ _wgslsmith_sub_vec3_u32(_wgslsmith_mod_vec3_u32(vec3<u32>(arg_0.c.x, 34486u, 36382u), vec3<u32>(arg_0.b, 1u, arg_0.b)), _wgslsmith_sub_vec3_u32(vec3<u32>(arg_0.c.x, u_input.a, arg_0.c.x), vec3<u32>(arg_0.c.x, u_input.a, u_input.a))), vec3<u32>(_wgslsmith_mult_u32(firstTrailingBit(arg_0.b), countOneBits(arg_0.b)), abs(_wgslsmith_div_u32(arg_0.c.x, 34205u)), _wgslsmith_sub_u32(104572u | arg_0.c.x, arg_0.b)), vec3<bool>(true, func_3(func_11(vec3<u32>(u_input.a, 1u, arg_0.c.x), Struct_2(vec2<f32>(arg_0.e.x, 1422f), arg_0), Struct_1(var_1.x, arg_0.c.x, vec2<u32>(4294967295u, 4294967295u), vec3<bool>(var_1.x, arg_0.d.x, false), vec3<f32>(arg_0.e.x, -1163f, arg_0.e.x))), arg_0, vec3<i32>(u_input.b.x, u_input.b.x, u_input.b.x), ~vec4<u32>(71906u, 24849u, 5835u, u_input.a)), func_6(Struct_3(arg_0, vec3<i32>(u_input.b.x, -56986i, u_input.b.x), vec4<i32>(u_input.b.x, 0i, u_input.b.x, 30837i), vec4<u32>(arg_0.b, u_input.a, arg_0.b, u_input.a), Struct_2(arg_0.e.xy, arg_0)), ~u_input.a, vec4<bool>(false, false, var_1.x, false), max(vec4<u32>(4294967295u, arg_0.b, arg_0.b, 4294967295u), vec4<u32>(49429u, 45878u, u_input.a, 7562u))).x)), Struct_2(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(arg_0.e.x, 461f) - vec2<f32>(-1168f, -628f)) + func_12(119f, Struct_3(Struct_1(arg_0.a, arg_0.b, vec2<u32>(arg_0.b, 4294967295u), arg_0.d, vec3<f32>(1283f, 238f, -2399f)), vec3<i32>(2147483647i, u_input.b.x, u_input.b.x), vec4<i32>(2147483647i, i32(-2147483648), u_input.b.x, u_input.b.x), vec4<u32>(108530u, arg_0.c.x, arg_0.c.x, arg_0.c.x), Struct_2(arg_0.e.yx, Struct_1(false, 0u, arg_0.c, arg_0.d, arg_0.e))), vec4<bool>(false, arg_0.a, var_1.x, false), 5110u).e.xz) + _wgslsmith_f_op_vec2_f32(select(func_11(vec3<u32>(25384u, arg_0.b, arg_0.c.x), Struct_2(vec2<f32>(arg_0.e.x, arg_0.e.x), arg_0), arg_0).e.a, _wgslsmith_div_vec2_f32(arg_0.e.zz, arg_0.e.xz), !vec2<bool>(arg_0.a, var_1.x)))), Struct_1(true, countOneBits(4294967295u) ^ (arg_0.b >> (arg_0.c.x % 32u)), ~vec2<u32>(u_input.a, 60448u), !func_5().d, arg_0.e)), Struct_1(arg_0.e.x == _wgslsmith_f_op_f32(func_8(Struct_1(true, 2453u, vec2<u32>(4294967295u, arg_0.c.x), vec3<bool>(arg_0.d.x, arg_0.d.x, arg_0.a), vec3<f32>(2620f, 297f, arg_0.e.x)), -u_input.b.x, ~vec4<u32>(0u, 22433u, 1u, 0u), -815f)), func_4(arg_0.e.x, !(!vec4<bool>(false, arg_0.a, var_1.x, arg_0.d.x)), i32(-1i) * i32(-2147483648), Struct_1(u_input.a != u_input.a, _wgslsmith_clamp_u32(19050u, u_input.a, 47947u), min(arg_0.c, vec2<u32>(arg_0.c.x, 37172u)), arg_0.d, vec3<f32>(-482f, arg_0.e.x, arg_0.e.x))).a.b, vec2<u32>(~(~4294967295u), 4294967295u), !func_4(_wgslsmith_f_op_f32(-arg_0.e.x), select(vec4<bool>(false, arg_0.d.x, var_1.x, true), vec4<bool>(var_1.x, true, var_1.x, var_1.x), true), _wgslsmith_clamp_i32(u_input.b.x, u_input.b.x, u_input.b.x), arg_0).e.b.d, _wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(exp2(vec3<f32>(arg_0.e.x, arg_0.e.x, arg_0.e.x))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(arg_0.e.x, arg_0.e.x, arg_0.e.x)) - vec3<f32>(1603f, arg_0.e.x, -517f)))))).b.x;
                var_2 = _wgslsmith_dot_vec3_i32(-countOneBits(vec3<i32>(-37620i, -1i, u_input.b.x) >> (~vec3<u32>(19328u, u_input.a, u_input.a) % vec3<u32>(32u))), vec3<i32>(-1i, _wgslsmith_add_i32(_wgslsmith_dot_vec2_i32(u_input.b.xx, u_input.b.yz), u_input.b.x), i32(-1i) * -17103i));
                var_0 = ~u_input.b.x;
            }
        }
        switch (-select(-62750i, -9432i, arg_0.d.x)) {
            default: {
                var_0 = u_input.b.x;
                let var_1 = func_4(_wgslsmith_f_op_f32(-874f), !vec4<bool>(arg_0.d.x, (false && arg_0.d.x) | true, arg_0.d.x, arg_0.d.x), -1i, Struct_1(arg_0.d.x, 1u << (u_input.a % 32u), ~abs(vec2<u32>(arg_0.c.x, u_input.a)), arg_0.d, vec3<f32>(_wgslsmith_f_op_f32(-arg_0.e.x), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0.e.x)), _wgslsmith_f_op_f32(arg_0.e.x - 1000f)))).e;
                var_0 = u_input.b.x;
                var var_2 = arg_0.e;
            }
        }
        if (false) {
            var var_1 = func_11(~_wgslsmith_mod_vec3_u32(~(~vec3<u32>(arg_0.c.x, 1135u, 1u)), vec3<u32>(4294967295u, ~0u, arg_0.c.x)), Struct_2(_wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(-1322f), _wgslsmith_f_op_f32(-1860f))), Struct_1(all(vec2<bool>(true, true)), abs(_wgslsmith_mult_u32(3736u, u_input.a)), arg_0.c, vec3<bool>(i32(-2147483648) <= u_input.b.x, func_7(vec4<f32>(arg_0.e.x, arg_0.e.x, -217f, arg_0.e.x), arg_0, Struct_3(arg_0, vec3<i32>(i32(-2147483648), -38349i, 68531i), vec4<i32>(i32(-2147483648), 2147483647i, u_input.b.x, 51025i), vec4<u32>(u_input.a, arg_0.b, 1u, 0u), Struct_2(vec2<f32>(arg_0.e.x, arg_0.e.x), arg_0)), arg_0.d), arg_0.a), func_12(_wgslsmith_f_op_f32(arg_0.e.x * arg_0.e.x), func_11(vec3<u32>(1u, 28108u, 4294967295u), Struct_2(arg_0.e.yx, Struct_1(arg_0.d.x, arg_0.c.x, vec2<u32>(arg_0.c.x, 11170u), vec3<bool>(false, arg_0.d.x, false), vec3<f32>(439f, -1075f, -1000f))), arg_0), select(vec4<bool>(false, arg_0.a, arg_0.a, arg_0.a), vec4<bool>(arg_0.d.x, arg_0.d.x, arg_0.a, false), true), ~arg_0.c.x).e)), arg_0).e;
            var var_2 = u_input.b.yy;
            var_2 = _wgslsmith_add_vec2_i32(~u_input.b.yz, firstLeadingBit(reverseBits(u_input.b.yx)));
            continue;
        }
    }
    loop {
        if (LOOP_COUNTERS[37u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[37u] = LOOP_COUNTERS[37u] + 1u;
        break;
    }
    let var_0 = !arg_0.d.xx;
    return select(select(vec4<bool>(!var_0.x, false, true, func_4(_wgslsmith_f_op_f32(-275f), !vec4<bool>(var_0.x, arg_0.d.x, arg_0.d.x, arg_0.d.x), u_input.b.x & 43203i, Struct_1(var_0.x, arg_0.b, vec2<u32>(1u, 93842u), arg_0.d, arg_0.e)).a.a), select(select(vec4<bool>(arg_0.a, var_0.x, true, false), !vec4<bool>(true, arg_0.a, false, arg_0.d.x), vec4<bool>(false, var_0.x, arg_0.a, var_0.x)), select(!vec4<bool>(var_0.x, arg_0.d.x, var_0.x, false), !vec4<bool>(var_0.x, arg_0.d.x, var_0.x, true), false), select(select(vec4<bool>(arg_0.d.x, true, var_0.x, arg_0.d.x), vec4<bool>(false, var_0.x, arg_0.a, true), true), !vec4<bool>(true, var_0.x, var_0.x, false), arg_0.a & true)), func_10(arg_0, !(!var_0.x), vec3<bool>(any(vec3<bool>(false, false, arg_0.a)), arg_0.b > arg_0.c.x, u_input.b.x <= -1i)).a), !vec4<bool>(false, true || !var_0.x, false, !(45436u <= arg_0.c.x)), any(func_4(arg_0.e.x, vec4<bool>(!arg_0.a, !arg_0.d.x, arg_0.d.x, any(vec4<bool>(arg_0.a, arg_0.a, true, true))), abs(_wgslsmith_dot_vec3_i32(vec3<i32>(u_input.b.x, i32(-2147483648), 28563i), u_input.b)), arg_0).e.b.d));
}

fn func_13(arg_0: bool, arg_1: vec2<bool>, arg_2: f32) -> vec4<u32> {
    if (true) {
        var var_0 = min(u_input.a, u_input.a);
        let var_1 = vec3<bool>(!func_7(_wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_2, arg_2, arg_2, arg_2)), Struct_1(true, ~10214u, vec2<u32>(u_input.a, 1u), select(vec3<bool>(false, arg_1.x, arg_0), vec3<bool>(arg_1.x, arg_0, arg_1.x), vec3<bool>(arg_1.x, true, false)), _wgslsmith_f_op_vec3_f32(vec3<f32>(arg_2, arg_2, -428f) * vec3<f32>(arg_2, -548f, arg_2))), Struct_3(Struct_1(arg_0, 2556u, vec2<u32>(37541u, 1u), vec3<bool>(true, true, arg_1.x), vec3<f32>(542f, 302f, arg_2)), u_input.b, _wgslsmith_mult_vec4_i32(vec4<i32>(u_input.b.x, 64621i, u_input.b.x, u_input.b.x), vec4<i32>(u_input.b.x, i32(-2147483648), -6879i, u_input.b.x)), firstLeadingBit(vec4<u32>(1017u, u_input.a, u_input.a, 1u)), Struct_2(vec2<f32>(arg_2, 337f), Struct_1(false, u_input.a, vec2<u32>(1u, 60765u), vec3<bool>(arg_1.x, true, false), vec3<f32>(-1000f, 473f, -590f)))), !select(vec3<bool>(arg_1.x, false, arg_0), vec3<bool>(false, false, false), vec3<bool>(arg_1.x, arg_0, true))), (((u_input.a | u_input.a) > u_input.a) && true) && all(func_12(_wgslsmith_f_op_f32(trunc(arg_2)), Struct_3(Struct_1(false, 60430u, vec2<u32>(u_input.a, u_input.a), vec3<bool>(false, arg_0, false), vec3<f32>(arg_2, arg_2, arg_2)), u_input.b, vec4<i32>(i32(-2147483648), u_input.b.x, 52072i, -17654i), vec4<u32>(29378u, u_input.a, 21437u, 0u), Struct_2(vec2<f32>(arg_2, -155f), Struct_1(arg_0, u_input.a, vec2<u32>(u_input.a, 0u), vec3<bool>(arg_1.x, arg_1.x, arg_1.x), vec3<f32>(arg_2, arg_2, arg_2)))), vec4<bool>(true, arg_0, arg_0, false), u_input.a << (38062u % 32u)).d.zy), arg_1.x);
        var var_2 = Struct_3(func_12(arg_2, func_4(arg_2, !vec4<bool>(arg_1.x, true, true, false), _wgslsmith_dot_vec2_i32(vec2<i32>(u_input.b.x, u_input.b.x), u_input.b.xy) << (u_input.a % 32u), Struct_1(false, _wgslsmith_clamp_u32(u_input.a, u_input.a, 109731u), vec2<u32>(68086u, 1u), vec3<bool>(arg_1.x, arg_0, false), _wgslsmith_f_op_vec3_f32(-vec3<f32>(365f, arg_2, arg_2)))), vec4<bool>(!(!arg_1.x), 0i > u_input.b.x, true, arg_1.x), 52487u), abs(reverseBits(abs(vec3<i32>(-23480i, 0i, 1i)))), vec4<i32>(1i | u_input.b.x, 16014i, u_input.b.x, 49141i), _wgslsmith_sub_vec4_u32(~(vec4<u32>(u_input.a, u_input.a, u_input.a, u_input.a) | vec4<u32>(u_input.a, 24092u, 1u, u_input.a)), (vec4<u32>(4294967295u, 17825u, 5662u, 92803u) ^ vec4<u32>(u_input.a, 30372u, u_input.a, u_input.a)) ^ ~vec4<u32>(u_input.a, u_input.a, u_input.a, u_input.a)) ^ vec4<u32>((76952u << (u_input.a % 32u)) >> (4294967295u % 32u), 1u << (0u % 32u), min(func_4(arg_2, vec4<bool>(false, arg_0, true, true), u_input.b.x, Struct_1(arg_0, 7094u, vec2<u32>(u_input.a, u_input.a), var_1, vec3<f32>(-133f, 1374f, arg_2))).a.c.x, 9836u), ~_wgslsmith_dot_vec4_u32(vec4<u32>(21367u, u_input.a, 30780u, u_input.a), vec4<u32>(4294967295u, u_input.a, u_input.a, u_input.a))), func_4(arg_2, select(func_2(Struct_1(arg_0, 1u, vec2<u32>(u_input.a, u_input.a), vec3<bool>(false, arg_0, arg_1.x), vec3<f32>(795f, 557f, 1153f))), !func_2(Struct_1(arg_0, u_input.a, vec2<u32>(u_input.a, u_input.a), var_1, vec3<f32>(arg_2, 484f, -309f))), func_2(Struct_1(true, u_input.a, vec2<u32>(u_input.a, 1u), var_1, vec3<f32>(arg_2, arg_2, arg_2)))), max(abs(-2147483647i), 2481i), Struct_1(!(false & arg_1.x), firstLeadingBit(_wgslsmith_add_u32(u_input.a, 1u)), ~(~vec2<u32>(u_input.a, u_input.a)), var_1, _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(-393f, 199f, 1054f) + vec3<f32>(arg_2, arg_2, 1000f))))).e);
    }
    loop {
        if (LOOP_COUNTERS[38u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[38u] = LOOP_COUNTERS[38u] + 1u;
        let var_0 = u_input.a;
        switch (0i) {
            case -16661i: {
            }
            case 26812i: {
                let var_1 = vec4<bool>(arg_0, !all(vec3<bool>(select(true, arg_0, true), true, -1000f > arg_2)), false, abs(u_input.b.x) < 74524i);
                var var_2 = Struct_2(vec2<f32>(_wgslsmith_f_op_f32(-522f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-468f * _wgslsmith_f_op_f32(-arg_2)))), Struct_1(all(arg_1), 27567u, ~(~vec2<u32>(1u, 16625u) ^ ~vec2<u32>(97439u, u_input.a)), vec3<bool>(false, !func_11(vec3<u32>(var_0, 95154u, var_0), Struct_2(vec2<f32>(arg_2, arg_2), Struct_1(arg_1.x, 3318u, vec2<u32>(u_input.a, var_0), var_1.xww, vec3<f32>(506f, arg_2, 100f))), Struct_1(var_1.x, var_0, vec2<u32>(4294967295u, 1u), var_1.yww, vec3<f32>(-320f, arg_2, arg_2))).a.a, !func_6(Struct_3(Struct_1(false, 4294967295u, vec2<u32>(var_0, u_input.a), var_1.xwz, vec3<f32>(arg_2, -273f, arg_2)), vec3<i32>(u_input.b.x, -23299i, 26868i), vec4<i32>(17398i, u_input.b.x, 0i, u_input.b.x), vec4<u32>(u_input.a, 50526u, 4294967295u, var_0), Struct_2(vec2<f32>(arg_2, 358f), Struct_1(arg_0, u_input.a, vec2<u32>(u_input.a, var_0), var_1.xyw, vec3<f32>(821f, -139f, arg_2)))), 0u, vec4<bool>(arg_0, arg_1.x, true, arg_1.x), vec4<u32>(33911u, 78845u, var_0, 54685u)).x), vec3<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-445f), arg_2), 2159f, 765f)));
                var_2 = Struct_2(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(var_2.a + _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(-2207f, -1000f)))) * var_2.b.e.xx), var_2.b);
            }
            default: {
                continue;
            }
        }
        break;
    }
    return firstLeadingBit(select(firstTrailingBit(vec4<u32>(u_input.a, u_input.a, u_input.a, u_input.a)), vec4<u32>(1u, u_input.a, _wgslsmith_dot_vec3_u32(vec3<u32>(u_input.a, 39677u, u_input.a), vec3<u32>(1u, 1u, 1u)), func_11(vec3<u32>(4294967295u, u_input.a, 44282u), Struct_2(vec2<f32>(arg_2, arg_2), Struct_1(arg_1.x, 1u, vec2<u32>(1u, 4808u), vec3<bool>(false, false, false), vec3<f32>(arg_2, 153f, arg_2))), Struct_1(false, 31376u, vec2<u32>(0u, 0u), vec3<bool>(true, arg_1.x, arg_1.x), vec3<f32>(arg_2, 853f, arg_2))).e.b.b), all(vec3<bool>(false, arg_1.x, false)))) << (min(~(~vec4<u32>(u_input.a, u_input.a, 4294967295u, u_input.a) >> (vec4<u32>(u_input.a, u_input.a, u_input.a, 0u) % vec4<u32>(32u))), vec4<u32>(_wgslsmith_clamp_u32(~1u, 1u >> (1u % 32u), ~u_input.a), _wgslsmith_dot_vec2_u32(~vec2<u32>(87257u, u_input.a), firstTrailingBit(vec2<u32>(u_input.a, 0u))), u_input.a, 0u & ~u_input.a)) % vec4<u32>(32u));
}

fn func_1(arg_0: vec2<bool>) -> StorageBuffer {
    loop {
        if (LOOP_COUNTERS[39u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[39u] = LOOP_COUNTERS[39u] + 1u;
        var var_0 = func_13(arg_0.x, vec2<bool>(any(func_2(Struct_1(false, 56601u, vec2<u32>(20744u, u_input.a), vec3<bool>(false, arg_0.x, arg_0.x), vec3<f32>(-402f, 1380f, 576f)))), u_input.a > ~31551u), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-func_10(Struct_1(false, u_input.a, vec2<u32>(u_input.a, u_input.a), vec3<bool>(arg_0.x, false, false), vec3<f32>(-1264f, -135f, 1113f)), false, vec3<bool>(false, false, false)).e.x))));
    }
    loop {
        if (LOOP_COUNTERS[40u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[40u] = LOOP_COUNTERS[40u] + 1u;
        var var_0 = Struct_2(vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1f * _wgslsmith_f_op_f32(ceil(-943f)))), 1690f), Struct_1(!(arg_0.x || true), u_input.a, vec2<u32>(u_input.a, abs(55886u)) | ~vec2<u32>(4294967295u, u_input.a), func_5().d, func_4(_wgslsmith_f_op_f32(1000f * 521f), vec4<bool>(!arg_0.x, arg_0.x, arg_0.x, select(arg_0.x, false, true)), u_input.b.x, Struct_1(!arg_0.x, abs(u_input.a), vec2<u32>(u_input.a, u_input.a), !vec3<bool>(arg_0.x, arg_0.x, true), vec3<f32>(-773f, -534f, 2726f))).e.b.e));
        var var_1 = u_input.a;
        var var_2 = ~(~firstLeadingBit(~vec4<u32>(30269u, u_input.a, u_input.a, u_input.a)));
    }
    loop {
        if (LOOP_COUNTERS[41u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[41u] = LOOP_COUNTERS[41u] + 1u;
        if (true) {
            var var_0 = vec3<i32>(~u_input.b.x, countOneBits(reverseBits(i32(-2147483648))), countOneBits(firstLeadingBit(_wgslsmith_mult_i32(u_input.b.x, u_input.b.x)) | 78029i));
            continue;
        }
        break;
    }
    switch (28752i) {
        case -29977i: {
            var var_0 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-533f, 222f, 1165f, -584f)) - _wgslsmith_f_op_vec4_f32(step(vec4<f32>(-262f, 1235f, 876f, 1019f), vec4<f32>(-419f, 375f, 542f, 889f)))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(-359f, 1317f, -290f, -286f)))))) - _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(-1275f, _wgslsmith_f_op_f32(-1096f), _wgslsmith_f_op_f32(413f - -294f), _wgslsmith_f_op_f32(f32(-1f) * -617f)) - _wgslsmith_f_op_vec4_f32(floor(vec4<f32>(315f, 546f, 1745f, -1122f)))), vec4<f32>(1f, 1f, 1f, 1f)));
        }
        case 23441i: {
            loop {
                if (LOOP_COUNTERS[42u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[42u] = LOOP_COUNTERS[42u] + 1u;
                continue;
            }
            var var_0 = 0u | u_input.a;
            var var_1 = 4294967295u;
            switch (firstTrailingBit(~(-u_input.b.x))) {
                case 1i: {
                    var var_2 = vec2<i32>(-1i << (_wgslsmith_add_u32(53360u, func_4(_wgslsmith_f_op_f32(f32(-1f) * -1269f), vec4<bool>(arg_0.x, arg_0.x, false, true), _wgslsmith_div_i32(-1i, -15051i), func_4(664f, vec4<bool>(arg_0.x, arg_0.x, true, arg_0.x), u_input.b.x, Struct_1(false, 0u, vec2<u32>(27408u, 3260u), vec3<bool>(true, false, true), vec3<f32>(-394f, 2718f, 1482f))).a).e.b.b) % 32u), _wgslsmith_div_i32(min(firstTrailingBit(i32(-2147483648)), u_input.b.x), u_input.b.x) << (func_11(_wgslsmith_sub_vec3_u32(vec3<u32>(u_input.a, 1u, 49680u), _wgslsmith_div_vec3_u32(vec3<u32>(24967u, u_input.a, 4294967295u), vec3<u32>(u_input.a, u_input.a, u_input.a))), Struct_2(_wgslsmith_f_op_vec2_f32(abs(vec2<f32>(1049f, 246f))), func_11(vec3<u32>(1u, 33613u, u_input.a), Struct_2(vec2<f32>(-249f, 1188f), Struct_1(false, 4294967295u, vec2<u32>(80190u, 41755u), vec3<bool>(false, false, false), vec3<f32>(-307f, -168f, 843f))), Struct_1(false, u_input.a, vec2<u32>(29069u, 37165u), vec3<bool>(false, arg_0.x, false), vec3<f32>(-376f, -1995f, 616f))).a), func_12(_wgslsmith_div_f32(-633f, -405f), func_11(vec3<u32>(0u, u_input.a, u_input.a), Struct_2(vec2<f32>(-214f, -579f), Struct_1(arg_0.x, 18757u, vec2<u32>(u_input.a, 1u), vec3<bool>(false, true, true), vec3<f32>(1987f, 154f, -255f))), Struct_1(arg_0.x, u_input.a, vec2<u32>(56456u, u_input.a), vec3<bool>(false, arg_0.x, true), vec3<f32>(375f, 1000f, -789f))), select(vec4<bool>(arg_0.x, false, true, true), vec4<bool>(arg_0.x, false, false, true), arg_0.x), ~u_input.a)).e.b.c.x % 32u));
                    var_2 = ~(u_input.b.xx << (select(_wgslsmith_mult_vec2_u32(func_13(false, vec2<bool>(arg_0.x, false), -1622f).yy, vec2<u32>(u_input.a, u_input.a)), select(vec2<u32>(17653u, u_input.a), vec2<u32>(u_input.a, u_input.a), vec2<bool>(arg_0.x, arg_0.x)) | _wgslsmith_sub_vec2_u32(vec2<u32>(10753u, 750u), vec2<u32>(u_input.a, 29344u)), true) % vec2<u32>(32u)));
                }
                case 50001i: {
                    var_1 = 15189u;
                }
                default: {
                    let var_2 = vec3<i32>(firstLeadingBit(u_input.b.x), firstLeadingBit(0i), 1i);
                    let var_3 = func_4(_wgslsmith_f_op_f32(575f - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -194f)) * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -801f) - 1f))), select(!vec4<bool>(true, true, true, false || arg_0.x), vec4<bool>(true, func_6(func_11(vec3<u32>(46217u, 21890u, u_input.a), Struct_2(vec2<f32>(1000f, 229f), Struct_1(arg_0.x, u_input.a, vec2<u32>(u_input.a, 3305u), vec3<bool>(arg_0.x, arg_0.x, arg_0.x), vec3<f32>(1097f, 838f, -1360f))), Struct_1(arg_0.x, 0u, vec2<u32>(36939u, 37150u), vec3<bool>(arg_0.x, true, true), vec3<f32>(917f, -1000f, -1000f))), 0u, vec4<bool>(false, arg_0.x, true, arg_0.x), _wgslsmith_mod_vec4_u32(vec4<u32>(u_input.a, 40539u, 1u, 4974u), vec4<u32>(1u, 1u, u_input.a, u_input.a))).x, _wgslsmith_f_op_f32(func_8(Struct_1(false, 0u, vec2<u32>(65976u, u_input.a), vec3<bool>(true, arg_0.x, true), vec3<f32>(-1690f, 266f, -285f)), u_input.b.x, vec4<u32>(65176u, u_input.a, 6278u, u_input.a), 634f)) <= _wgslsmith_f_op_f32(f32(-1f) * -348f), true), true), firstLeadingBit(~_wgslsmith_clamp_i32(-1i, var_2.x, u_input.b.x) << (4294967295u % 32u)), Struct_1(arg_0.x, u_input.a, func_10(Struct_1(arg_0.x, u_input.a, ~vec2<u32>(u_input.a, u_input.a), !vec3<bool>(arg_0.x, false, arg_0.x), vec3<f32>(955f, 1206f, -1893f)), all(select(vec4<bool>(true, true, arg_0.x, true), vec4<bool>(arg_0.x, arg_0.x, false, arg_0.x), arg_0.x)), vec3<bool>(true, true, true)).c, vec3<bool>((u_input.a >= u_input.a) & arg_0.x, !all(vec2<bool>(arg_0.x, true)), _wgslsmith_mult_i32(-42654i, var_2.x) >= -var_2.x), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1672f, -482f, -776f)))))).e;
                    let var_4 = 1i;
                }
            }
        }
        case 1i: {
            if (_wgslsmith_f_op_f32(func_12(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-1548f), _wgslsmith_f_op_f32(select(-2761f, 1755f, true))), func_4(_wgslsmith_f_op_f32(-1000f), !vec4<bool>(true, arg_0.x, arg_0.x, arg_0.x), 1i, Struct_1(arg_0.x, 1u, vec2<u32>(u_input.a, u_input.a), vec3<bool>(arg_0.x, arg_0.x, false), vec3<f32>(1377f, -1080f, 294f))), vec4<bool>(true, true, true, !arg_0.x), u_input.a).e.x - _wgslsmith_f_op_f32(1611f * _wgslsmith_f_op_f32(select(-2049f, _wgslsmith_f_op_f32(sign(-1237f)), true)))) != 914f) {
                var var_0 = vec4<i32>(abs(func_11(vec3<u32>(u_input.a, u_input.a, 0u) << (vec3<u32>(u_input.a, u_input.a, 4294967295u) % vec3<u32>(32u)), Struct_2(vec2<f32>(-1813f, 1742f), Struct_1(true, u_input.a, vec2<u32>(u_input.a, u_input.a), vec3<bool>(arg_0.x, arg_0.x, arg_0.x), vec3<f32>(305f, -1658f, 100f))), Struct_1(true, u_input.a, vec2<u32>(u_input.a, u_input.a), vec3<bool>(arg_0.x, arg_0.x, true), vec3<f32>(1337f, 1406f, 886f))).c.x & u_input.b.x), ~_wgslsmith_mult_i32(1i, u_input.b.x), u_input.b.x, -(~(~(-u_input.b.x))));
                let var_1 = ~func_4(-807f, vec4<bool>(false, false, arg_0.x, !func_2(Struct_1(false, 4294967295u, vec2<u32>(1u, u_input.a), vec3<bool>(true, false, arg_0.x), vec3<f32>(-533f, -542f, 1298f))).x), -(_wgslsmith_add_i32(1i, 0i) & _wgslsmith_mod_i32(var_0.x, u_input.b.x)), func_11(_wgslsmith_mult_vec3_u32(vec3<u32>(u_input.a, u_input.a, u_input.a), vec3<u32>(53273u, 1u, u_input.a)) | ~vec3<u32>(u_input.a, 1u, 0u), Struct_2(func_5().e.yx, func_11(vec3<u32>(u_input.a, 0u, u_input.a), Struct_2(vec2<f32>(1138f, -226f), Struct_1(arg_0.x, u_input.a, vec2<u32>(u_input.a, 99146u), vec3<bool>(arg_0.x, arg_0.x, false), vec3<f32>(795f, -838f, -1000f))), Struct_1(false, u_input.a, vec2<u32>(u_input.a, 35565u), vec3<bool>(arg_0.x, false, true), vec3<f32>(-1196f, -1804f, -743f))).a), Struct_1(func_12(547f, Struct_3(Struct_1(false, 59639u, vec2<u32>(4294967295u, u_input.a), vec3<bool>(arg_0.x, arg_0.x, arg_0.x), vec3<f32>(-729f, -1000f, 694f)), var_0.xzy, vec4<i32>(var_0.x, u_input.b.x, var_0.x, 9020i), vec4<u32>(4294967295u, u_input.a, 18892u, u_input.a), Struct_2(vec2<f32>(-516f, -1000f), Struct_1(arg_0.x, u_input.a, vec2<u32>(4294967295u, u_input.a), vec3<bool>(arg_0.x, false, false), vec3<f32>(-766f, -1713f, -420f)))), vec4<bool>(arg_0.x, true, arg_0.x, arg_0.x), 4294967295u).d.x, u_input.a & u_input.a, ~vec2<u32>(1u, u_input.a), !vec3<bool>(arg_0.x, arg_0.x, false), _wgslsmith_f_op_vec3_f32(vec3<f32>(-542f, 875f, -412f) - vec3<f32>(-670f, 1227f, 680f)))).e.b).d.xxz;
                var_0 = -(_wgslsmith_div_vec4_i32(min(select(vec4<i32>(u_input.b.x, var_0.x, u_input.b.x, -57753i), vec4<i32>(i32(-2147483648), 21025i, -2309i, 44310i), vec4<bool>(arg_0.x, true, arg_0.x, arg_0.x)), vec4<i32>(u_input.b.x, u_input.b.x, u_input.b.x, var_0.x)), ~func_11(vec3<u32>(var_1.x, 2689u, var_1.x), Struct_2(vec2<f32>(-198f, 535f), Struct_1(true, var_1.x, var_1.yx, vec3<bool>(arg_0.x, arg_0.x, true), vec3<f32>(1179f, 1554f, -2824f))), Struct_1(false, 6445u, var_1.xy, vec3<bool>(arg_0.x, true, false), vec3<f32>(-842f, -1065f, -890f))).c) & -firstLeadingBit(vec4<i32>(var_0.x, 21200i, u_input.b.x, u_input.b.x)));
                let var_2 = func_5();
            }
            for (var var_0 = -48769i; var_0 != -142i; var_0 = max(_wgslsmith_mult_i32(1554i, _wgslsmith_mod_i32(~u_input.b.x, u_input.b.x) >> (0u % 32u)), 2147483647i)) {
                if (LOOP_COUNTERS[43u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[43u] = LOOP_COUNTERS[43u] + 1u;
                var var_1 = Struct_3(func_11(~(~(vec3<u32>(49365u, u_input.a, u_input.a) ^ vec3<u32>(93048u, u_input.a, u_input.a))), Struct_2(vec2<f32>(1f, _wgslsmith_f_op_f32(f32(-1f) * -1409f)), Struct_1(arg_0.x, min(u_input.a, 0u), ~vec2<u32>(u_input.a, u_input.a), vec3<bool>(arg_0.x, false, arg_0.x), vec3<f32>(-514f, -1551f, 2531f))), func_12(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -1461f) * _wgslsmith_f_op_f32(min(-1000f, -1702f))), func_4(_wgslsmith_div_f32(1960f, 406f), !vec4<bool>(false, arg_0.x, arg_0.x, true), -1i, Struct_1(arg_0.x, 4294967295u, vec2<u32>(u_input.a, u_input.a), vec3<bool>(true, false, false), vec3<f32>(-1058f, -1759f, -347f))), !func_2(Struct_1(arg_0.x, u_input.a, vec2<u32>(80648u, 1u), vec3<bool>(arg_0.x, true, arg_0.x), vec3<f32>(-946f, 2048f, -330f))), (4294967295u & u_input.a) | (u_input.a & 81241u))).e.b, vec3<i32>(firstLeadingBit(~_wgslsmith_div_i32(2147483647i, u_input.b.x)), -1i, _wgslsmith_dot_vec2_i32(-abs(vec2<i32>(u_input.b.x, 0i)), func_11(countOneBits(vec3<u32>(u_input.a, 0u, u_input.a)), func_11(vec3<u32>(23417u, 15034u, u_input.a), Struct_2(vec2<f32>(-1179f, 1915f), Struct_1(arg_0.x, 0u, vec2<u32>(16988u, 26871u), vec3<bool>(true, arg_0.x, true), vec3<f32>(-1712f, -743f, -206f))), Struct_1(arg_0.x, u_input.a, vec2<u32>(51784u, u_input.a), vec3<bool>(false, true, true), vec3<f32>(-392f, 442f, 555f))).e, func_10(Struct_1(false, u_input.a, vec2<u32>(76742u, u_input.a), vec3<bool>(false, arg_0.x, false), vec3<f32>(-214f, -1586f, 879f)), arg_0.x, vec3<bool>(arg_0.x, false, false))).c.xz)), reverseBits(countOneBits(vec4<i32>(_wgslsmith_dot_vec4_i32(vec4<i32>(u_input.b.x, u_input.b.x, u_input.b.x, u_input.b.x), vec4<i32>(2147483647i, u_input.b.x, u_input.b.x, u_input.b.x)), 2147483647i, ~u_input.b.x, u_input.b.x & -24392i))), ~vec4<u32>(~min(u_input.a, u_input.a), u_input.a, 1u >> (u_input.a % 32u), _wgslsmith_dot_vec3_u32(reverseBits(vec3<u32>(59857u, u_input.a, 43094u)), func_13(arg_0.x, vec2<bool>(true, arg_0.x), 1003f).yxz)), Struct_2(vec2<f32>(-1000f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -542f))), func_4(_wgslsmith_f_op_f32(-860f), select(!vec4<bool>(arg_0.x, arg_0.x, arg_0.x, arg_0.x), func_2(Struct_1(true, u_input.a, vec2<u32>(u_input.a, u_input.a), vec3<bool>(arg_0.x, false, false), vec3<f32>(1000f, -632f, 1923f))), all(vec2<bool>(false, arg_0.x))), u_input.b.x, func_4(_wgslsmith_f_op_f32(-1328f), func_2(Struct_1(false, u_input.a, vec2<u32>(u_input.a, 4294967295u), vec3<bool>(false, false, false), vec3<f32>(-1014f, 1335f, 572f))), -29578i, Struct_1(true, 0u, vec2<u32>(38771u, u_input.a), vec3<bool>(true, true, true), vec3<f32>(-1064f, -289f, 1092f))).a).e.b));
            }
            var var_0 = func_2(func_4(-284f, vec4<bool>(func_11(~vec3<u32>(86788u, 22078u, 0u), Struct_2(vec2<f32>(-1000f, 1673f), Struct_1(arg_0.x, 8002u, vec2<u32>(6882u, 35120u), vec3<bool>(true, false, arg_0.x), vec3<f32>(528f, 630f, -126f))), Struct_1(arg_0.x, 22052u, vec2<u32>(u_input.a, u_input.a), vec3<bool>(arg_0.x, true, true), vec3<f32>(-1652f, 1035f, 1054f))).e.b.d.x, arg_0.x, max(26394i, u_input.b.x) == ~0i, true), 1i, Struct_1(arg_0.x, ~1u, vec2<u32>(u_input.a, 24645u), !select(vec3<bool>(arg_0.x, arg_0.x, true), vec3<bool>(arg_0.x, arg_0.x, true), arg_0.x), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(min(vec3<f32>(1147f, -1033f, 1276f), vec3<f32>(1179f, 588f, -336f)))))).e.b).x;
        }
        case 2147483647i: {
            if (arg_0.x) {
                return StorageBuffer(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(1000f + 959f), _wgslsmith_f_op_f32(-1729f), _wgslsmith_div_f32(-1237f, -1079f)))), func_4(func_5().e.x, select(select(vec4<bool>(arg_0.x, true, true, true), select(vec4<bool>(true, arg_0.x, arg_0.x, false), vec4<bool>(true, arg_0.x, true, arg_0.x), vec4<bool>(arg_0.x, false, arg_0.x, true)), !arg_0.x), func_2(Struct_1(true, u_input.a, vec2<u32>(4294967295u, 20545u), vec3<bool>(false, arg_0.x, false), vec3<f32>(-499f, -528f, 127f))), func_2(func_10(Struct_1(false, u_input.a, vec2<u32>(u_input.a, 90271u), vec3<bool>(arg_0.x, arg_0.x, arg_0.x), vec3<f32>(-1245f, 110f, 517f)), false, vec3<bool>(arg_0.x, arg_0.x, arg_0.x)))), reverseBits(abs(u_input.b.x)), Struct_1(!(!arg_0.x), 61428u, ~(~vec2<u32>(117785u, 4294967295u)), vec3<bool>(!arg_0.x, true, arg_0.x), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(878f, 2039f, 218f)) + func_10(Struct_1(arg_0.x, 4294967295u, vec2<u32>(u_input.a, u_input.a), vec3<bool>(true, true, arg_0.x), vec3<f32>(-142f, 823f, 326f)), false, vec3<bool>(true, arg_0.x, arg_0.x)).e))).d.x, func_11(_wgslsmith_div_vec3_u32(vec3<u32>(u_input.a, _wgslsmith_dot_vec4_u32(vec4<u32>(106851u, u_input.a, u_input.a, u_input.a), vec4<u32>(40245u, u_input.a, 0u, u_input.a)), _wgslsmith_add_u32(u_input.a, u_input.a)), vec3<u32>(u_input.a, ~0u, ~u_input.a)), func_4(_wgslsmith_div_f32(-205f, _wgslsmith_f_op_f32(ceil(326f))), vec4<bool>(all(vec4<bool>(false, arg_0.x, arg_0.x, arg_0.x)), arg_0.x, true, true), max(~u_input.b.x, u_input.b.x), Struct_1(false, countOneBits(u_input.a), vec2<u32>(414u, 83026u), vec3<bool>(true, true, true), _wgslsmith_f_op_vec3_f32(vec3<f32>(817f, -1667f, -809f) + vec3<f32>(-381f, -218f, 2145f)))).e, func_10(Struct_1(arg_0.x, u_input.a, vec2<u32>(u_input.a, 1u) & vec2<u32>(52253u, 1u), vec3<bool>(true, arg_0.x, arg_0.x), _wgslsmith_f_op_vec3_f32(floor(vec3<f32>(1104f, -413f, 631f)))), func_5().d.x, !vec3<bool>(arg_0.x, true, arg_0.x))).b.x, _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-916f)), 1f)));
            }
        }
        default: {
            switch (min(firstLeadingBit(-u_input.b.x), ~u_input.b.x)) {
                case -15291i: {
                }
                case i32(-2147483648): {
                    let var_0 = 1423f;
                    let var_1 = select(func_10(Struct_1(func_4(_wgslsmith_f_op_f32(step(var_0, var_0)), vec4<bool>(true, false, arg_0.x, arg_0.x), _wgslsmith_dot_vec2_i32(u_input.b.zy, u_input.b.yx), func_12(927f, Struct_3(Struct_1(arg_0.x, u_input.a, vec2<u32>(96638u, 1u), vec3<bool>(arg_0.x, arg_0.x, arg_0.x), vec3<f32>(var_0, var_0, -604f)), u_input.b, vec4<i32>(u_input.b.x, -32618i, 1i, 0i), vec4<u32>(1u, u_input.a, 4294967295u, 1u), Struct_2(vec2<f32>(var_0, 1036f), Struct_1(arg_0.x, u_input.a, vec2<u32>(29134u, u_input.a), vec3<bool>(arg_0.x, false, true), vec3<f32>(-1000f, 105f, 1083f)))), vec4<bool>(arg_0.x, true, arg_0.x, arg_0.x), u_input.a)).e.b.d.x, 0u, vec2<u32>(u_input.a & 4294967295u, ~u_input.a), !(!vec3<bool>(true, arg_0.x, true)), vec3<f32>(_wgslsmith_f_op_f32(var_0 * -1702f), _wgslsmith_f_op_f32(var_0 * var_0), _wgslsmith_f_op_f32(-447f - -466f))), arg_0.x, !select(vec3<bool>(true, false, arg_0.x), !vec3<bool>(true, arg_0.x, arg_0.x), arg_0.x)).d.zz, func_11(~vec3<u32>(~u_input.a, u_input.a, ~u_input.a), Struct_2(_wgslsmith_f_op_vec2_f32(-vec2<f32>(252f, -627f)), Struct_1(func_6(Struct_3(Struct_1(true, 55231u, vec2<u32>(4294967295u, u_input.a), vec3<bool>(false, arg_0.x, false), vec3<f32>(1000f, var_0, 435f)), u_input.b, vec4<i32>(9364i, u_input.b.x, 1i, 250i), vec4<u32>(u_input.a, 0u, 101u, u_input.a), Struct_2(vec2<f32>(var_0, -658f), Struct_1(false, 54998u, vec2<u32>(4294967295u, 34380u), vec3<bool>(true, true, arg_0.x), vec3<f32>(-1025f, var_0, -1512f)))), u_input.a, vec4<bool>(arg_0.x, arg_0.x, arg_0.x, true), vec4<u32>(136550u, u_input.a, 6462u, u_input.a)).x, ~u_input.a, vec2<u32>(1u, u_input.a), vec3<bool>(true, true, true), _wgslsmith_f_op_vec3_f32(-vec3<f32>(var_0, var_0, var_0)))), Struct_1(arg_0.x, 4294967295u, vec2<u32>(~0u, ~0u), !func_6(Struct_3(Struct_1(false, 0u, vec2<u32>(41983u, 0u), vec3<bool>(arg_0.x, arg_0.x, true), vec3<f32>(216f, 1593f, var_0)), vec3<i32>(u_input.b.x, -30353i, 20950i), vec4<i32>(u_input.b.x, u_input.b.x, u_input.b.x, -1i), vec4<u32>(u_input.a, u_input.a, 11342u, 1u), Struct_2(vec2<f32>(var_0, -190f), Struct_1(false, u_input.a, vec2<u32>(u_input.a, 8687u), vec3<bool>(arg_0.x, arg_0.x, true), vec3<f32>(-939f, var_0, -194f)))), u_input.a, vec4<bool>(arg_0.x, false, false, false), vec4<u32>(46161u, u_input.a, u_input.a, u_input.a)), func_11(vec3<u32>(u_input.a, 4294967295u, u_input.a) & vec3<u32>(u_input.a, 32338u, 45111u), Struct_2(vec2<f32>(550f, -1000f), Struct_1(false, 0u, vec2<u32>(u_input.a, 41791u), vec3<bool>(true, true, arg_0.x), vec3<f32>(-270f, 567f, var_0))), func_4(525f, vec4<bool>(true, true, arg_0.x, false), -1i, Struct_1(false, 4294967295u, vec2<u32>(u_input.a, u_input.a), vec3<bool>(false, false, arg_0.x), vec3<f32>(447f, 477f, -641f))).a).a.e)).a.d.yx, arg_0.x);
                    var var_2 = var_1;
                }
                default: {
                    let var_0 = func_11(_wgslsmith_mult_vec3_u32(_wgslsmith_mult_vec3_u32(countOneBits(vec3<u32>(u_input.a, 61553u, u_input.a)), vec3<u32>(38180u, u_input.a, 25122u) >> (vec3<u32>(1u, u_input.a, u_input.a) % vec3<u32>(32u))), func_13(true, vec2<bool>(false, arg_0.x), _wgslsmith_f_op_f32(-344f)).zzx) ^ abs(abs(countOneBits(vec3<u32>(u_input.a, u_input.a, 4294967295u)))), func_11(_wgslsmith_mod_vec3_u32(~vec3<u32>(1u, 25263u, u_input.a) ^ ~vec3<u32>(69199u, 76902u, u_input.a), max(~vec3<u32>(u_input.a, u_input.a, u_input.a), vec3<u32>(56231u, u_input.a, u_input.a))), Struct_2(vec2<f32>(_wgslsmith_f_op_f32(-771f), _wgslsmith_f_op_f32(f32(-1f) * -1222f)), Struct_1(true, u_input.a, vec2<u32>(u_input.a, 0u), !vec3<bool>(arg_0.x, false, false), _wgslsmith_f_op_vec3_f32(-vec3<f32>(1227f, 1968f, 782f)))), func_4(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -337f) + _wgslsmith_f_op_f32(-1168f)), select(vec4<bool>(true, arg_0.x, arg_0.x, false), select(vec4<bool>(false, arg_0.x, arg_0.x, false), vec4<bool>(arg_0.x, arg_0.x, false, false), vec4<bool>(arg_0.x, arg_0.x, arg_0.x, false)), vec4<bool>(arg_0.x, true, false, arg_0.x)), ~u_input.b.x, func_5()).a).e, Struct_1(_wgslsmith_f_op_f32(-292f * _wgslsmith_f_op_f32(f32(-1f) * -1146f)) > func_4(_wgslsmith_f_op_f32(772f + -982f), select(vec4<bool>(false, arg_0.x, false, false), vec4<bool>(false, arg_0.x, arg_0.x, arg_0.x), true), u_input.b.x, Struct_1(arg_0.x, u_input.a, vec2<u32>(0u, u_input.a), vec3<bool>(false, true, arg_0.x), vec3<f32>(354f, -307f, 1247f))).a.e.x, func_13(true, arg_0, _wgslsmith_f_op_f32(-1016f)).x ^ min(u_input.a & 26447u, ~u_input.a), firstTrailingBit(vec2<u32>(u_input.a << (32952u % 32u), ~0u)), vec3<bool>(true, !arg_0.x, all(!vec4<bool>(true, arg_0.x, false, arg_0.x))), _wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(979f * 1393f), _wgslsmith_f_op_f32(select(108f, -1323f, arg_0.x)), _wgslsmith_f_op_f32(-454f)) * _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(375f, 267f, -2010f)))))));
                    var var_1 = vec3<u32>(u_input.a, ~func_11(abs(var_0.d.wxx), var_0.e, func_11(vec3<u32>(u_input.a, 38401u, u_input.a) << (vec3<u32>(4294967295u, 1568u, u_input.a) % vec3<u32>(32u)), var_0.e, func_11(vec3<u32>(var_0.a.c.x, 1u, 0u), var_0.e, Struct_1(false, u_input.a, vec2<u32>(31241u, u_input.a), var_0.e.b.d, var_0.a.e)).e.b).a).e.b.c.x, abs(4294967295u));
                    var_1 = select(~var_0.d.yzy, ~max(vec3<u32>(min(u_input.a, 73483u), _wgslsmith_sub_u32(96206u, 5164u), _wgslsmith_mod_u32(u_input.a, 54494u)), ~(var_0.d.zwz ^ var_0.d.wzx)), !any(func_9(func_11(var_0.d.yxx, Struct_2(vec2<f32>(var_0.e.a.x, -1000f), var_0.e.b), var_0.e.b).e, var_0, _wgslsmith_mult_vec4_u32(vec4<u32>(u_input.a, 0u, 19242u, 4294967295u), vec4<u32>(u_input.a, 4748u, 76223u, u_input.a))).zy));
                }
            }
            var var_0 = Struct_1(((u_input.b.x << (1595u % 32u)) ^ ~_wgslsmith_clamp_i32(25376i, -1i, -16465i)) > ~_wgslsmith_dot_vec2_i32(vec2<i32>(0i, 1i), u_input.b.yy), abs(_wgslsmith_clamp_u32(func_13(true, vec2<bool>(true, false), 354f).x ^ ~u_input.a, func_11(vec3<u32>(28411u, u_input.a, 26360u), func_11(vec3<u32>(4294967295u, 0u, 4294967295u), Struct_2(vec2<f32>(444f, -1000f), Struct_1(true, 4294967295u, vec2<u32>(u_input.a, u_input.a), vec3<bool>(false, arg_0.x, false), vec3<f32>(-901f, -933f, -1329f))), Struct_1(true, u_input.a, vec2<u32>(0u, 1u), vec3<bool>(false, arg_0.x, false), vec3<f32>(-2661f, -576f, -598f))).e, Struct_1(arg_0.x, 44666u, vec2<u32>(u_input.a, u_input.a), vec3<bool>(false, arg_0.x, arg_0.x), vec3<f32>(-918f, -486f, -683f))).e.b.b, 1u)), ~(~(~min(vec2<u32>(u_input.a, 15014u), vec2<u32>(0u, 31565u)))), vec3<bool>(~_wgslsmith_dot_vec2_u32(vec2<u32>(u_input.a, u_input.a), vec2<u32>(19126u, 24793u)) != select(u_input.a, u_input.a, arg_0.x), true, arg_0.x), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(vec3<f32>(395f, 1272f, 101f), vec3<f32>(-860f, 720f, -130f))) - vec3<f32>(1f, 1f, 1f)) + _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(1026f, -3415f, -411f)))));
        }
    }
    var var_0 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(1021f * 310f), _wgslsmith_f_op_f32(-256f))), _wgslsmith_f_op_f32(248f * 1235f))) + _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-1000f + _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-157f + -1052f)))))));
    return StorageBuffer(vec3<f32>(func_5().e.x, _wgslsmith_f_op_f32(min(-1540f, _wgslsmith_f_op_f32(max(1f, 1211f)))), 371f), u_input.a, ~(-(~u_input.b.x)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-649f + 715f) * -415f)))));
}

@compute
@workgroup_size(1)
fn main() {
    let x = u_input.a;
    s_output = func_1(vec2<bool>(_wgslsmith_sub_i32(min(i32(-2147483648), -1i), -45352i >> (u_input.a % 32u)) < (-u_input.b.x >> (1u % 32u)), true));
}

`;