export const input = [198,55,227,199,142,117,136,118,86,155,250,190,60,54,30,1,215,46,179,19,42,225,61,2,48,205,232,64,101,191,133,97,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [198,55,227,199,142,117,136,118,86,155,250,190,60,54,30,1,215,46,179,19,42,225,61,2,48,205,232,64,101,191,133,97,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[198,55,227,199,142,117,136,118,86,155,250,190,60,54,30,1,215,46,179,19,42,225,61,2,48,205,232,64,101,191,133,97]}
// Seed: 7589451255675162141

struct Struct_1 {
    a: i32,
    b: vec2<bool>,
    c: i32,
    d: vec4<i32>,
}

struct UniformBuffer {
    a: vec3<i32>,
    b: u32,
    c: u32,
    d: u32,
}

struct StorageBuffer {
    a: vec3<u32>,
    b: u32,
    c: vec4<u32>,
    d: vec2<u32>,
    e: vec4<u32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> LOOP_COUNTERS: array<u32, 39>;

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn func_6(arg_0: vec2<f32>, arg_1: bool) -> vec2<bool> {
    var var_0 = vec3<bool>(true | !arg_1, arg_1, arg_1);
    for (var var_1 = i32(-2147483648); var_1 != 1i; var_1 = -505i) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        for (var var_2 = i32(-2147483648); var_2 <= i32(-2147483648); var_2 = ~reverseBits(_wgslsmith_clamp_i32(-1i, -(~6921i), ~2147483647i))) {
            if (LOOP_COUNTERS[1u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
            var var_3 = abs(select(countOneBits(~vec4<i32>(42527i, u_input.a.x, u_input.a.x, 605i)), -vec4<i32>(-9909i, u_input.a.x, 18583i, 0i), var_0.x)) << (vec4<u32>(u_input.d, firstTrailingBit(29555u), countOneBits(u_input.c), _wgslsmith_dot_vec2_u32(_wgslsmith_sub_vec2_u32(_wgslsmith_mult_vec2_u32(vec2<u32>(u_input.c, u_input.c), vec2<u32>(0u, 4294967295u)), abs(vec2<u32>(1u, u_input.b))), _wgslsmith_clamp_vec2_u32(min(vec2<u32>(u_input.b, 22700u), vec2<u32>(u_input.c, u_input.d)), _wgslsmith_clamp_vec2_u32(vec2<u32>(4294967295u, u_input.c), vec2<u32>(1u, u_input.c), vec2<u32>(u_input.d, u_input.b)), ~vec2<u32>(u_input.b, 4294967295u)))) % vec4<u32>(32u));
        }
        var var_2 = Struct_1(22164i, vec2<bool>(any(!select(vec4<bool>(var_0.x, arg_1, false, var_0.x), vec4<bool>(true, true, true, true), var_0.x)), false), u_input.a.x, _wgslsmith_sub_vec4_i32(max(vec4<i32>(-1i) * -vec4<i32>(u_input.a.x, -24001i, i32(-2147483648), u_input.a.x), -vec4<i32>(30145i, u_input.a.x, u_input.a.x, u_input.a.x)), firstTrailingBit(_wgslsmith_mod_vec4_i32(vec4<i32>(u_input.a.x, u_input.a.x, 10482i, u_input.a.x), vec4<i32>(3555i, u_input.a.x, -48118i, i32(-2147483648))) >> (~vec4<u32>(12155u, u_input.c, 0u, 52007u) % vec4<u32>(32u)))));
    }
    switch (u_input.a.x) {
        case 1i: {
            let var_1 = _wgslsmith_f_op_vec3_f32(select(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-646f, 228f, arg_0.x)), _wgslsmith_f_op_vec3_f32(select(vec3<f32>(776f, arg_0.x, 615f), vec3<f32>(760f, arg_0.x, arg_0.x), arg_1))) * _wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(vec3<f32>(-480f, -571f, -1593f), vec3<f32>(824f, -3195f, arg_0.x)) * vec3<f32>(-944f, -1220f, -683f))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(vec3<f32>(-2327f, -1391f, arg_0.x), vec3<f32>(arg_0.x, arg_0.x, arg_0.x))))), vec3<f32>(arg_0.x, arg_0.x, arg_0.x), any(vec2<bool>(true, arg_1))));
            if (all(vec4<bool>(var_0.x, true || select(any(var_0.yz), !var_0.x, arg_1), arg_1, true))) {
                var var_2 = vec3<bool>(true, all(select(vec3<bool>(arg_1, false, false), !vec3<bool>(arg_1, var_0.x, var_0.x), select(vec3<bool>(false, arg_1, var_0.x), vec3<bool>(true, true, var_0.x), vec3<bool>(true, true, arg_1)))) || var_0.x, !(!var_0.x));
                var_2 = vec3<bool>(false, arg_1, arg_1);
                var_2 = !select(!select(vec3<bool>(true, var_2.x, arg_1), select(vec3<bool>(var_0.x, false, var_2.x), vec3<bool>(true, var_2.x, var_2.x), vec3<bool>(var_0.x, var_0.x, arg_1)), vec3<bool>(false, true, true)), vec3<bool>(all(vec2<bool>(true, false)), true, any(vec4<bool>(true, var_2.x, true, false))), vec3<bool>(false, !any(vec3<bool>(false, var_2.x, arg_1)), select(true, true, all(vec3<bool>(var_0.x, false, var_0.x)))));
                let var_3 = _wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-var_1))));
            }
            var_0 = select(vec3<bool>(1887f > _wgslsmith_div_f32(-1000f, arg_0.x), any(vec3<bool>(!arg_1, arg_1 | var_0.x, !var_0.x)), arg_1), !vec3<bool>(any(select(vec3<bool>(var_0.x, arg_1, var_0.x), vec3<bool>(arg_1, arg_1, var_0.x), vec3<bool>(false, true, var_0.x))), true | arg_1, _wgslsmith_mod_i32(u_input.a.x, 0i) > u_input.a.x), !vec3<bool>(any(select(vec3<bool>(arg_1, arg_1, var_0.x), vec3<bool>(arg_1, true, var_0.x), vec3<bool>(var_0.x, arg_1, true))), var_0.x, false));
        }
        case -17213i: {
            var_0 = select(vec3<bool>((_wgslsmith_f_op_f32(ceil(arg_0.x)) <= arg_0.x) | false, !(2147483647i < -u_input.a.x), arg_1), select(vec3<bool>(var_0.x, (false || arg_1) != (true != arg_1), false), select(vec3<bool>(true, true, true), !select(vec3<bool>(var_0.x, false, arg_1), vec3<bool>(false, true, true), vec3<bool>(false, arg_1, true)), select(vec3<bool>(false, true, true), !vec3<bool>(true, arg_1, true), select(vec3<bool>(var_0.x, var_0.x, var_0.x), vec3<bool>(var_0.x, var_0.x, var_0.x), arg_1))), !vec3<bool>(false, var_0.x | false, u_input.a.x <= u_input.a.x)), vec3<bool>(true, !(arg_1 && true) && var_0.x, arg_1 && var_0.x));
            for (var var_1 = -2440i; var_1 > -40037i; ) {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
                var_0 = select(select(!(!select(vec3<bool>(arg_1, false, false), vec3<bool>(false, true, true), false)), !vec3<bool>(var_0.x, true, true), vec3<bool>(all(var_0.yx) & false, false, (arg_1 & arg_1) & true)), !(!(!vec3<bool>(false, true, arg_1))), false);
                let var_2 = Struct_1(-countOneBits(~u_input.a.x), !var_0.yx, 0i, max(_wgslsmith_add_vec4_i32(reverseBits(countOneBits(vec4<i32>(-1i, 6220i, u_input.a.x, u_input.a.x))), vec4<i32>(_wgslsmith_dot_vec3_i32(u_input.a, u_input.a), 1i, abs(u_input.a.x), ~u_input.a.x)), ~(vec4<i32>(-1i) * -vec4<i32>(36198i, u_input.a.x, u_input.a.x, 2879i))));
            }
            switch (u_input.a.x) {
                case 45263i: {
                    var_0 = select(select(!select(select(vec3<bool>(arg_1, arg_1, var_0.x), vec3<bool>(var_0.x, var_0.x, true), vec3<bool>(false, true, arg_1)), vec3<bool>(arg_1, arg_1, var_0.x), !vec3<bool>(var_0.x, false, true)), !select(select(vec3<bool>(false, var_0.x, var_0.x), vec3<bool>(var_0.x, true, false), vec3<bool>(false, arg_1, true)), vec3<bool>(arg_1, var_0.x, var_0.x), arg_0.x > 910f), select(vec3<bool>(u_input.a.x == -46194i, true, false), vec3<bool>(any(vec3<bool>(var_0.x, false, arg_1)), all(vec2<bool>(false, arg_1)), arg_1), true)), !select(select(select(vec3<bool>(false, true, false), vec3<bool>(false, arg_1, var_0.x), vec3<bool>(var_0.x, arg_1, var_0.x)), select(vec3<bool>(true, false, false), vec3<bool>(var_0.x, false, true), false), !vec3<bool>(false, arg_1, arg_1)), vec3<bool>(true, all(var_0.xx), false), all(select(vec4<bool>(var_0.x, arg_1, arg_1, true), vec4<bool>(true, arg_1, arg_1, var_0.x), vec4<bool>(false, var_0.x, false, true)))), !(!select(!vec3<bool>(arg_1, false, var_0.x), !vec3<bool>(true, var_0.x, arg_1), vec3<bool>(true, var_0.x, var_0.x))));
                    var_0 = select(!vec3<bool>(any(select(vec3<bool>(false, arg_1, true), vec3<bool>(false, var_0.x, true), true)), any(vec3<bool>(arg_1, var_0.x, arg_1)), true), vec3<bool>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(arg_0.x))) <= -1349f, any(vec3<bool>(true, false, all(vec4<bool>(var_0.x, arg_1, true, true)))), arg_1 != !(var_0.x | var_0.x)), vec3<bool>(all(vec2<bool>(true, true)), true, all(vec4<bool>(true, 4294967295u == u_input.c, true, any(vec3<bool>(arg_1, arg_1, var_0.x))))));
                    let var_1 = var_0.xy;
                    var var_2 = -106f;
                }
                default: {
                }
            }
            loop {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
                continue;
            }
            let var_1 = _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-1052f)))));
        }
        default: {
        }
    }
    switch (-16121i ^ u_input.a.x) {
        case 33853i: {
            switch (_wgslsmith_add_i32(u_input.a.x, ~(-38410i))) {
                case 32243i: {
                    let var_1 = Struct_1(-12228i, vec2<bool>(var_0.x, any(vec3<bool>(true, all(vec2<bool>(var_0.x, arg_1)), true))), abs(u_input.a.x << (countOneBits(firstLeadingBit(u_input.b)) % 32u)), _wgslsmith_add_vec4_i32(_wgslsmith_clamp_vec4_i32(reverseBits(vec4<i32>(u_input.a.x, -1i, 26893i, u_input.a.x) << (vec4<u32>(46869u, 4294967295u, 4294967295u, u_input.d) % vec4<u32>(32u))), _wgslsmith_clamp_vec4_i32(vec4<i32>(u_input.a.x, -1i, 1i, 38490i), vec4<i32>(28812i, i32(-2147483648), u_input.a.x, u_input.a.x), vec4<i32>(i32(-2147483648), u_input.a.x, 1i, u_input.a.x)) << (_wgslsmith_mult_vec4_u32(vec4<u32>(1u, 30734u, 4294967295u, 16314u), vec4<u32>(24762u, u_input.b, u_input.c, 4294967295u)) % vec4<u32>(32u)), vec4<i32>(u_input.a.x, -11628i, 31296i & u_input.a.x, select(u_input.a.x, -91838i, false))), vec4<i32>(_wgslsmith_dot_vec3_i32(vec3<i32>(-94905i, 1i, i32(-2147483648)), ~vec3<i32>(u_input.a.x, u_input.a.x, u_input.a.x)), _wgslsmith_mult_i32(_wgslsmith_dot_vec2_i32(u_input.a.yz, u_input.a.yx), _wgslsmith_sub_i32(u_input.a.x, u_input.a.x)), 1i, firstLeadingBit(u_input.a.x) ^ -2147483647i)));
                }
                case i32(-2147483648): {
                    var var_1 = ~(0u >> (countOneBits(0u) % 32u));
                    return vec2<bool>(any(!(!select(vec4<bool>(var_0.x, false, var_0.x, arg_1), vec4<bool>(arg_1, arg_1, true, arg_1), true))), true);
                }
                case 2147483647i: {
                    let var_1 = Struct_1(select(79442i, _wgslsmith_dot_vec3_i32(u_input.a, ~vec3<i32>(u_input.a.x, u_input.a.x, u_input.a.x)), arg_1), select(!vec2<bool>(0i <= u_input.a.x, true), vec2<bool>(all(select(vec4<bool>(arg_1, false, false, arg_1), vec4<bool>(true, var_0.x, true, true), vec4<bool>(var_0.x, arg_1, true, true))), true), u_input.a.x >= 41461i), u_input.a.x, _wgslsmith_div_vec4_i32(reverseBits(select(countOneBits(vec4<i32>(u_input.a.x, u_input.a.x, 0i, u_input.a.x)), abs(vec4<i32>(u_input.a.x, 0i, u_input.a.x, u_input.a.x)), var_0.x && arg_1)), min(vec4<i32>(~u_input.a.x, ~55316i, u_input.a.x, u_input.a.x), _wgslsmith_add_vec4_i32(vec4<i32>(0i, 0i, 1i, -57146i), vec4<i32>(-889i, u_input.a.x, -16443i, u_input.a.x)) ^ vec4<i32>(26504i, -3644i, -64183i, u_input.a.x))));
                    var var_2 = 0u;
                }
                case -57295i: {
                    let var_1 = u_input.b;
                }
                default: {
                    var_0 = !vec3<bool>(u_input.b > (1u >> (u_input.b % 32u)), all(var_0.xx), false);
                    var_0 = select(!select(select(select(vec3<bool>(false, arg_1, var_0.x), vec3<bool>(true, var_0.x, arg_1), arg_1), vec3<bool>(true, arg_1, true), arg_0.x < arg_0.x), select(!vec3<bool>(var_0.x, true, var_0.x), select(vec3<bool>(false, var_0.x, false), vec3<bool>(arg_1, arg_1, true), true), false), arg_1), !(!(!(!vec3<bool>(arg_1, var_0.x, var_0.x)))), !arg_1);
                    var_0 = select(!(!vec3<bool>(true, false, arg_1)), vec3<bool>(var_0.x, (false || (17037u < u_input.d)) || !var_0.x, false), !(!vec3<bool>(any(vec3<bool>(false, arg_1, false)), all(vec4<bool>(true, false, false, false)), !arg_1)));
                    let var_1 = -_wgslsmith_mod_i32(~44560i & u_input.a.x, u_input.a.x);
                }
            }
            if (all(select(vec4<bool>(var_0.x, !var_0.x, any(var_0.xx), any(!vec3<bool>(true, false, arg_1))), select(vec4<bool>(true, any(vec4<bool>(true, var_0.x, var_0.x, false)), all(vec3<bool>(arg_1, false, var_0.x)), arg_1), vec4<bool>(!var_0.x, arg_1, false, u_input.d < u_input.d), true), select(select(!vec4<bool>(false, true, arg_1, arg_1), select(vec4<bool>(var_0.x, var_0.x, true, arg_1), vec4<bool>(var_0.x, false, false, false), vec4<bool>(arg_1, true, false, false)), false), !select(vec4<bool>(arg_1, true, var_0.x, false), vec4<bool>(false, arg_1, false, arg_1), false), !vec4<bool>(arg_1, arg_1, arg_1, arg_1))))) {
                var_0 = !(!select(!select(vec3<bool>(arg_1, true, arg_1), vec3<bool>(var_0.x, true, true), vec3<bool>(var_0.x, arg_1, false)), select(!vec3<bool>(true, arg_1, arg_1), !vec3<bool>(true, arg_1, true), !vec3<bool>(true, true, var_0.x)), arg_1));
                var_0 = vec3<bool>(arg_1, !all(!var_0.zx), arg_1 && arg_1);
                var_0 = !vec3<bool>(!var_0.x, select(false, all(!vec2<bool>(var_0.x, false)), var_0.x), arg_1 && !var_0.x);
                var var_1 = u_input.c;
                var var_2 = !select(vec3<bool>(true, false, false), !select(vec3<bool>(true, false, false), !vec3<bool>(arg_1, var_0.x, true), select(vec3<bool>(var_0.x, arg_1, true), vec3<bool>(true, true, var_0.x), true)), vec3<bool>(true, any(vec3<bool>(true, true, true)), false));
            }
            if (true) {
                return vec2<bool>(!var_0.x, !(_wgslsmith_f_op_f32(trunc(_wgslsmith_div_f32(509f, arg_0.x))) >= _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(180f - arg_0.x) - _wgslsmith_div_f32(arg_0.x, arg_0.x))));
            }
            loop {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                var_0 = select(!select(select(!vec3<bool>(var_0.x, true, arg_1), vec3<bool>(var_0.x, arg_1, false), !vec3<bool>(var_0.x, false, true)), select(vec3<bool>(var_0.x, arg_1, true), !vec3<bool>(var_0.x, false, arg_1), true), vec3<bool>(true, true, any(vec4<bool>(true, arg_1, true, arg_1)))), select(!select(!vec3<bool>(var_0.x, true, arg_1), select(vec3<bool>(false, var_0.x, arg_1), vec3<bool>(arg_1, true, var_0.x), vec3<bool>(var_0.x, true, var_0.x)), var_0.x), !select(!vec3<bool>(arg_1, true, var_0.x), vec3<bool>(true, true, false), select(vec3<bool>(arg_1, var_0.x, true), vec3<bool>(false, arg_1, true), vec3<bool>(arg_1, arg_1, var_0.x))), select(!vec3<bool>(var_0.x, true, var_0.x), vec3<bool>(false, false, !var_0.x), vec3<bool>(var_0.x, true, arg_1))), u_input.a.x < _wgslsmith_dot_vec2_i32(~vec2<i32>(i32(-2147483648), u_input.a.x), vec2<i32>(u_input.a.x >> (1u % 32u), 1i)));
            }
            var var_1 = ~_wgslsmith_dot_vec4_u32(~firstLeadingBit(~vec4<u32>(u_input.d, u_input.c, u_input.d, 4294967295u)), max(min(abs(vec4<u32>(u_input.d, 4294967295u, 7747u, 53115u)), vec4<u32>(u_input.b, 37686u, u_input.d, 43910u) >> (vec4<u32>(u_input.b, u_input.c, u_input.d, u_input.d) % vec4<u32>(32u))), ~(~vec4<u32>(u_input.c, 4294967295u, u_input.b, 26319u))));
        }
        default: {
            if (var_0.x) {
                var var_1 = vec2<f32>(_wgslsmith_f_op_f32(ceil(arg_0.x)), arg_0.x);
                var_0 = select(!vec3<bool>(arg_1, arg_1, !arg_1 & true), !vec3<bool>(true, !any(vec2<bool>(true, var_0.x)), var_0.x), arg_1);
            }
            var var_1 = _wgslsmith_sub_i32(~u_input.a.x, -59581i);
            for (var var_2 = -36584i; false; var_1 = u_input.a.x) {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                var_2 = ~30404i;
                break;
            }
            for (; ; ) {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                var_1 = 0i;
                var_1 = ~(-1i);
                let var_2 = Struct_1(i32(-2147483648), !vec2<bool>(any(vec4<bool>(true, true, true, true)), true), _wgslsmith_sub_i32(firstLeadingBit(~2147483647i), firstTrailingBit(~u_input.a.x)) ^ ~_wgslsmith_mult_i32(_wgslsmith_add_i32(0i, u_input.a.x), -u_input.a.x), -abs(select(select(vec4<i32>(0i, 31028i, u_input.a.x, u_input.a.x), vec4<i32>(u_input.a.x, u_input.a.x, -9959i, -38780i), vec4<bool>(var_0.x, arg_1, arg_1, arg_1)), reverseBits(vec4<i32>(2147483647i, -1i, u_input.a.x, u_input.a.x)), all(vec3<bool>(false, true, arg_1)))));
            }
            switch (1i) {
                default: {
                    let var_2 = u_input.d << ((abs(~(~72243u)) & ((_wgslsmith_dot_vec4_u32(vec4<u32>(u_input.b, 27291u, 0u, 4294967295u), vec4<u32>(u_input.d, 57263u, 4294967295u, u_input.b)) >> (4294967295u % 32u)) >> (~countOneBits(u_input.c) % 32u))) % 32u);
                    return vec2<bool>(true, -(abs(u_input.a.x) << (~u_input.d % 32u)) >= 2217i);
                }
            }
        }
    }
    var_0 = select(vec3<bool>(!select(true, !arg_1, var_0.x), var_0.x, _wgslsmith_dot_vec3_u32(~vec3<u32>(112794u, 0u, u_input.b), ~vec3<u32>(u_input.b, 1u, 0u)) == ~select(17462u, 32309u, var_0.x)), !(!vec3<bool>(true, any(var_0.yx), all(var_0.yx))), !select(select(vec3<bool>(arg_1, true, true), select(vec3<bool>(arg_1, true, arg_1), vec3<bool>(arg_1, false, true), vec3<bool>(false, true, var_0.x)), var_0.x), vec3<bool>(select(false, var_0.x, var_0.x), false, arg_1), arg_1));
    return var_0.yz;
}

fn func_7(arg_0: Struct_1, arg_1: vec2<f32>) -> bool {
    switch (61179i) {
        case 42545i: {
            if (arg_0.b.x) {
                var var_0 = 1395f;
            }
            switch (2147483647i) {
                case 14725i: {
                    var var_0 = Struct_1(i32(-1i) * -32866i, !func_6(arg_1, true), _wgslsmith_sub_i32(i32(-1i) * i32(-2147483648), _wgslsmith_mod_i32(_wgslsmith_dot_vec3_i32(u_input.a, _wgslsmith_mult_vec3_i32(u_input.a, arg_0.d.wzy)), -74036i)), vec4<i32>(-_wgslsmith_mod_i32(-7823i, -6356i ^ u_input.a.x), ~(-firstLeadingBit(arg_0.c)), firstTrailingBit(u_input.a.x), 31903i));
                    var_0 = Struct_1(reverseBits(~var_0.a << (12115u % 32u)), vec2<bool>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_1.x) + _wgslsmith_div_f32(-636f, -1291f)) <= _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-918f))), false || !select(false, var_0.b.x, arg_0.b.x)), _wgslsmith_add_i32(_wgslsmith_dot_vec4_i32(~(~vec4<i32>(u_input.a.x, -1i, 2147483647i, 27404i)), vec4<i32>(u_input.a.x, arg_0.a << (u_input.b % 32u), 2147483647i >> (u_input.c % 32u), var_0.a)), ~_wgslsmith_mult_i32(_wgslsmith_sub_i32(25197i, var_0.d.x), -15545i)), arg_0.d << (~firstTrailingBit(_wgslsmith_add_vec4_u32(vec4<u32>(33149u, u_input.d, u_input.b, 0u), vec4<u32>(4294967295u, 1u, 4294967295u, 13595u))) % vec4<u32>(32u)));
                    let var_1 = arg_0;
                    var var_2 = var_1.b.x;
                    var var_3 = _wgslsmith_div_f32(arg_1.x, _wgslsmith_f_op_f32(arg_1.x + 1387f));
                }
                case -1i: {
                    let var_0 = arg_0.d.yzz;
                }
                default: {
                    var var_0 = Struct_1(2147483647i, func_6(_wgslsmith_f_op_vec2_f32(sign(arg_1)), arg_0.b.x), -52151i, ~_wgslsmith_sub_vec4_i32(vec4<i32>(arg_0.c, 27019i, 0i, arg_0.d.x) << (vec4<u32>(u_input.b, u_input.c, u_input.d, u_input.c) % vec4<u32>(32u)), _wgslsmith_div_vec4_i32(arg_0.d, vec4<i32>(44684i, u_input.a.x, arg_0.d.x, -1i))) << (~_wgslsmith_add_vec4_u32(vec4<u32>(25847u, 22477u, 4294967295u, 39384u), _wgslsmith_div_vec4_u32(vec4<u32>(75885u, 15581u, u_input.b, u_input.b), vec4<u32>(u_input.d, 0u, 1u, u_input.b))) % vec4<u32>(32u)));
                    var_0 = arg_0;
                    let var_1 = Struct_1(2147483647i, select(vec2<bool>(1f > _wgslsmith_f_op_f32(exp2(arg_1.x)), true), !vec2<bool>(true, arg_0.b.x), var_0.b), firstLeadingBit(arg_0.c), abs(-vec4<i32>(i32(-2147483648), var_0.c, -12584i, -1i) & var_0.d));
                    let var_2 = arg_1.x;
                }
            }
            loop {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                let var_0 = Struct_1(arg_0.c, func_6(_wgslsmith_f_op_vec2_f32(sign(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(-1048f, 508f))))), (!arg_0.b.x & !arg_0.b.x) | true), arg_0.d.x, ~arg_0.d);
                let var_1 = _wgslsmith_f_op_f32(-arg_1.x);
                continue;
            }
            for (var var_0 = 1i; arg_0.b.x; var_0 += 1i) {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                var_0 = 1i;
                var var_1 = !select(select(select(vec3<bool>(arg_0.b.x, arg_0.b.x, arg_0.b.x), vec3<bool>(true, arg_0.b.x, arg_0.b.x), arg_0.b.x), select(select(vec3<bool>(arg_0.b.x, false, arg_0.b.x), vec3<bool>(true, true, arg_0.b.x), vec3<bool>(arg_0.b.x, arg_0.b.x, arg_0.b.x)), vec3<bool>(true, true, false), vec3<bool>(arg_0.b.x, false, arg_0.b.x)), vec3<bool>(arg_0.b.x, func_6(arg_1, true).x, all(vec4<bool>(true, false, false, arg_0.b.x)))), select(!vec3<bool>(arg_0.b.x, false, arg_0.b.x), select(vec3<bool>(arg_0.b.x, arg_0.b.x, arg_0.b.x), vec3<bool>(true, true, false), vec3<bool>(arg_0.b.x, arg_0.b.x, arg_0.b.x)), !vec3<bool>(arg_0.b.x, arg_0.b.x, arg_0.b.x)), vec3<bool>(arg_0.b.x, arg_0.b.x, arg_0.b.x));
                var_1 = !(!select(vec3<bool>(u_input.b != 1u, !arg_0.b.x, all(var_1.zz)), vec3<bool>(var_1.x, all(vec3<bool>(false, arg_0.b.x, arg_0.b.x)), arg_0.b.x), !(!vec3<bool>(true, var_1.x, false))));
                break;
            }
            var var_0 = arg_0.d;
        }
        case 0i: {
        }
        default: {
        }
    }
    if (func_6(_wgslsmith_f_op_vec2_f32(-arg_1), all(select(vec4<bool>(arg_0.b.x, false, arg_0.b.x, false), vec4<bool>(true, true, arg_0.b.x, false), false))).x | all(arg_0.b)) {
        loop {
            if (LOOP_COUNTERS[9u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
            let var_0 = Struct_1(arg_0.a, !vec2<bool>(!(!arg_0.b.x), arg_0.b.x || true), 1i, arg_0.d >> (~firstTrailingBit(min(vec4<u32>(4294967295u, u_input.d, 62938u, 4294967295u), vec4<u32>(u_input.b, u_input.b, u_input.b, 1u))) % vec4<u32>(32u)));
            continue;
        }
        for (; arg_1.x == arg_1.x; ) {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
            return false;
        }
        var var_0 = -arg_0.d;
    }
    switch (u_input.a.x) {
        case -1317i: {
        }
        case -12972i: {
        }
        case -35145i: {
            let var_0 = arg_0;
            var var_1 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_1.x, arg_1.x, -1298f, arg_1.x))))), _wgslsmith_div_vec4_f32(vec4<f32>(arg_1.x, arg_1.x, _wgslsmith_f_op_f32(round(arg_1.x)), arg_1.x), _wgslsmith_div_vec4_f32(_wgslsmith_div_vec4_f32(vec4<f32>(arg_1.x, arg_1.x, arg_1.x, arg_1.x), vec4<f32>(-1485f, arg_1.x, -1086f, arg_1.x)), vec4<f32>(889f, arg_1.x, 555f, arg_1.x))), true)) + _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_1.x, arg_1.x, arg_1.x, arg_1.x)) - _wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_1.x, arg_1.x, arg_1.x, arg_1.x)))));
        }
        default: {
            var var_0 = ~_wgslsmith_sub_vec3_i32(_wgslsmith_div_vec3_i32(abs(vec3<i32>(8190i, 31078i, 0i)), _wgslsmith_add_vec3_i32(~vec3<i32>(1i, 1i, arg_0.d.x), vec3<i32>(arg_0.d.x, 24249i, 0i))), arg_0.d.yyx);
            if (arg_0.b.x) {
            }
            let var_1 = vec2<i32>(arg_0.c, 5603i);
            var_0 = countOneBits(~u_input.a);
        }
    }
    switch (arg_0.d.x) {
        case 40047i: {
            if (any(select(select(!vec4<bool>(true, arg_0.b.x, arg_0.b.x, arg_0.b.x), select(!vec4<bool>(true, arg_0.b.x, arg_0.b.x, arg_0.b.x), vec4<bool>(arg_0.b.x, true, arg_0.b.x, arg_0.b.x), vec4<bool>(true, true, true, true)), vec4<bool>(!arg_0.b.x, !arg_0.b.x, u_input.d < 15597u, false)), select(!vec4<bool>(false, false, arg_0.b.x, arg_0.b.x), vec4<bool>(all(vec3<bool>(false, false, arg_0.b.x)), arg_0.b.x, false, false), true), !(!select(vec4<bool>(false, arg_0.b.x, arg_0.b.x, false), vec4<bool>(arg_0.b.x, false, false, arg_0.b.x), arg_0.b.x))))) {
                let var_0 = Struct_1(-max(arg_0.c, countOneBits(-arg_0.d.x)), func_6(arg_1, select(41534i < arg_0.c, arg_0.b.x, any(vec2<bool>(arg_0.b.x, true))) | arg_0.b.x), -1i, arg_0.d);
                let var_1 = vec4<u32>(select(21149u >> (u_input.b % 32u), _wgslsmith_dot_vec2_u32(~(~vec2<u32>(0u, 4095u)), vec2<u32>(58836u, _wgslsmith_div_u32(56587u, 1u))), true), _wgslsmith_mult_u32(u_input.b, min(1u, ~(~4294967295u))), 4294967295u, select(_wgslsmith_dot_vec4_u32(vec4<u32>(u_input.c, u_input.d, u_input.d, 4294967295u), vec4<u32>(u_input.b, u_input.d, 0u, u_input.b)) | u_input.c, abs(select(63863u, u_input.c, true)), all(!vec4<bool>(var_0.b.x, false, var_0.b.x, true))) << (u_input.d % 32u));
                let var_2 = _wgslsmith_f_op_f32(arg_1.x + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_div_f32(-800f, _wgslsmith_f_op_f32(arg_1.x - -1168f)))));
            }
            return any(!vec4<bool>(true, false, !any(arg_0.b), false));
        }
        case 0i: {
        }
        case -1i: {
            if (arg_0.b.x) {
                let var_0 = reverseBits(_wgslsmith_mult_i32(~u_input.a.x, -firstLeadingBit(u_input.a.x)));
                var var_1 = arg_1;
            }
            loop {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                let var_0 = abs(vec4<u32>(0u, _wgslsmith_dot_vec2_u32(select(firstTrailingBit(vec2<u32>(u_input.d, u_input.d)), abs(vec2<u32>(12347u, 23763u)), arg_0.b), vec2<u32>(4294967295u, _wgslsmith_dot_vec3_u32(vec3<u32>(u_input.c, 107171u, u_input.d), vec3<u32>(u_input.d, u_input.c, u_input.d)))), select(select(_wgslsmith_sub_u32(63225u, u_input.c), 47558u, arg_0.b.x), 13469u, !select(true, arg_0.b.x, arg_0.b.x)), u_input.c));
                return arg_0.b.x;
            }
            let var_0 = ~vec4<u32>(abs(u_input.c), u_input.b, 4294967295u, u_input.b);
            switch (_wgslsmith_dot_vec2_i32(abs(vec2<i32>(-u_input.a.x, firstTrailingBit(34518i))), _wgslsmith_mod_vec2_i32(firstTrailingBit(~select(arg_0.d.yx, vec2<i32>(0i, arg_0.d.x), true)), vec2<i32>(_wgslsmith_dot_vec4_i32(-vec4<i32>(arg_0.d.x, arg_0.a, 10934i, -1i), abs(vec4<i32>(i32(-2147483648), 2147483647i, arg_0.a, u_input.a.x))), 6415i)))) {
                case -74827i: {
                    let var_1 = -(min(select(u_input.a.xx, u_input.a.xx, true) << (~vec2<u32>(var_0.x, u_input.d) % vec2<u32>(32u)), abs(vec2<i32>(u_input.a.x, u_input.a.x))) | _wgslsmith_sub_vec2_i32(vec2<i32>(u_input.a.x, _wgslsmith_mult_i32(arg_0.d.x, -8662i)), arg_0.d.zy));
                    let var_2 = arg_0.c < arg_0.a;
                }
                case 21673i: {
                }
                default: {
                    let var_1 = arg_0;
                    var var_2 = Struct_1(u_input.a.x, select(var_1.b, !vec2<bool>(select(true, var_1.b.x, arg_0.b.x), arg_0.b.x), select(!select(vec2<bool>(true, var_1.b.x), vec2<bool>(arg_0.b.x, true), var_1.b.x), vec2<bool>(arg_0.b.x, -1i != u_input.a.x), false)), -49332i ^ ~reverseBits(arg_0.a), var_1.d);
                    var var_3 = vec4<bool>(_wgslsmith_f_op_f32(-arg_1.x) != -1332f, 0u <= _wgslsmith_add_u32(_wgslsmith_add_u32(1u, 5316u) ^ u_input.d, _wgslsmith_div_u32(var_0.x, 25672u << (var_0.x % 32u))), false, !var_2.b.x);
                    let var_4 = var_0.zyy;
                    var var_5 = !arg_0.b.x || select(!var_2.b.x, !all(var_1.b), var_1.b.x);
                }
            }
            loop {
                if (LOOP_COUNTERS[12u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
                let var_1 = arg_1.x;
                var var_2 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(step(vec3<f32>(-523f, 309f, arg_1.x), _wgslsmith_f_op_vec3_f32(-vec3<f32>(var_1, -130f, 1000f)))) * _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(arg_1.x, -194f, arg_1.x)))))));
                continue;
            }
        }
        default: {
            let var_0 = max(~_wgslsmith_div_i32(8132i, ~u_input.a.x << (10691u % 32u)), _wgslsmith_dot_vec4_i32(countOneBits(vec4<i32>(u_input.a.x, arg_0.a, u_input.a.x, u_input.a.x)) & (vec4<i32>(-1i, 2147483647i, arg_0.d.x, i32(-2147483648)) << (~vec4<u32>(u_input.d, 0u, 0u, u_input.b) % vec4<u32>(32u))), select(abs(vec4<i32>(u_input.a.x, 20054i, 2147483647i, 2147483647i)), firstLeadingBit(-vec4<i32>(-10078i, arg_0.a, -25102i, arg_0.d.x)), vec4<bool>(!arg_0.b.x, u_input.c >= u_input.b, arg_0.b.x, arg_1.x <= arg_1.x))));
            var var_1 = Struct_1(_wgslsmith_clamp_i32(u_input.a.x ^ abs(1i), u_input.a.x, 0i ^ abs(arg_0.a ^ var_0)), arg_0.b, firstTrailingBit(u_input.a.x) ^ (u_input.a.x ^ 1i), abs(arg_0.d));
        }
    }
    for (var var_0 = 2147483647i; false; var_0 -= 1i) {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        var var_1 = min(-1i, -35068i);
        continue;
    }
    return arg_0.b.x;
}

fn func_5(arg_0: i32, arg_1: u32) -> vec2<bool> {
    switch (-45397i) {
        case 5114i: {
            let var_0 = arg_0;
            if (!func_7(Struct_1(var_0, func_6(vec2<f32>(-1000f, -906f), true), _wgslsmith_div_i32(var_0, 36576i), reverseBits(min(vec4<i32>(8876i, 1i, i32(-2147483648), var_0), vec4<i32>(var_0, 47580i, u_input.a.x, u_input.a.x)))), vec2<f32>(_wgslsmith_f_op_f32(step(_wgslsmith_div_f32(1152f, 1194f), _wgslsmith_f_op_f32(select(-1295f, -335f, true)))), _wgslsmith_f_op_f32(1362f + -575f)))) {
                let var_1 = Struct_1(abs(arg_0), select(func_6(vec2<f32>(1f, 1f), any(func_6(vec2<f32>(-875f, 2626f), false))), vec2<bool>(!all(vec4<bool>(false, false, true, true)), false), true), (i32(-1i) * -14558i) & (0i | reverseBits(~u_input.a.x)), vec4<i32>(~1i, _wgslsmith_dot_vec4_i32(firstTrailingBit(-vec4<i32>(arg_0, u_input.a.x, 33713i, var_0)), countOneBits(vec4<i32>(var_0, arg_0, -54757i, u_input.a.x)) << (~vec4<u32>(14198u, u_input.d, 4294967295u, u_input.d) % vec4<u32>(32u))), ~(-22456i) >> (select(firstLeadingBit(50017u), ~u_input.d, true) % 32u), _wgslsmith_clamp_i32(var_0, 1i, 49847i)));
                var var_2 = var_0;
            }
            for (var var_1 = 54829i; ; var_1 -= 1i) {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                var_1 = arg_0;
            }
        }
        default: {
            let var_0 = vec2<u32>(min(_wgslsmith_div_u32(abs(1u), 56136u), u_input.c) | arg_1, _wgslsmith_dot_vec3_u32(reverseBits(firstLeadingBit(abs(vec3<u32>(arg_1, 1487u, u_input.d)))), vec3<u32>(u_input.c, ~0u, 900u) & _wgslsmith_sub_vec3_u32(countOneBits(vec3<u32>(1u, u_input.c, arg_1)), vec3<u32>(0u, 1u, 1u))));
        }
    }
    switch (0i) {
        case -22477i: {
            for (var var_0: i32; var_0 >= 39501i; ) {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
                let var_1 = vec4<i32>(arg_0, u_input.a.x, 1i & arg_0, -11368i) >> (vec4<u32>(4294967295u, (u_input.c & _wgslsmith_div_u32(19480u, u_input.b)) << (78907u % 32u), ~(~arg_1), _wgslsmith_dot_vec2_u32(firstTrailingBit(~vec2<u32>(arg_1, arg_1)), select(select(vec2<u32>(20038u, u_input.b), vec2<u32>(arg_1, u_input.c), false), _wgslsmith_div_vec2_u32(vec2<u32>(arg_1, 4294967295u), vec2<u32>(u_input.b, 4294967295u)), select(true, false, true)))) % vec4<u32>(32u));
                var var_2 = true;
                var_0 = u_input.a.x << (u_input.d % 32u);
            }
            var var_0 = ~vec3<u32>(~arg_1, u_input.c, ~(~(~u_input.d)));
            if (!(~_wgslsmith_div_i32(-20630i, countOneBits(-36497i)) > ~(select(-3523i, arg_0, true) << (~19306u % 32u)))) {
                var_0 = (_wgslsmith_add_vec3_u32(select(vec3<u32>(u_input.c, 1u, var_0.x) | vec3<u32>(1u, u_input.b, u_input.b), select(vec3<u32>(arg_1, arg_1, 4294967295u), vec3<u32>(0u, 1u, 87280u), false), true), ~_wgslsmith_mod_vec3_u32(vec3<u32>(2919u, u_input.c, var_0.x), vec3<u32>(var_0.x, 4294967295u, var_0.x))) << (vec3<u32>(_wgslsmith_div_u32(~var_0.x, 4294967295u), var_0.x, 1u) % vec3<u32>(32u))) & select(~(~vec3<u32>(4294967295u, arg_1, 35610u)), _wgslsmith_add_vec3_u32(vec3<u32>(u_input.d, var_0.x, 4294967295u), _wgslsmith_div_vec3_u32(vec3<u32>(1u, u_input.c, 50596u), vec3<u32>(var_0.x, u_input.b, arg_1))) >> (~(vec3<u32>(u_input.b, 1u, 110792u) >> (vec3<u32>(4294967295u, 0u, var_0.x) % vec3<u32>(32u))) % vec3<u32>(32u)), true);
                var var_1 = 2147483647i;
            }
            if (_wgslsmith_f_op_f32(ceil(1176f)) <= -300f) {
            }
        }
        case 13873i: {
            if (any(vec2<bool>(true, true)) | false) {
                var var_0 = _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -306f) + _wgslsmith_f_op_f32(-360f + 1005f)), _wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -436f), _wgslsmith_f_op_f32(select(1510f, 923f, false))))) + vec2<f32>(1f, 1f));
            }
        }
        default: {
            if (!func_6(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(round(_wgslsmith_f_op_vec2_f32(abs(vec2<f32>(536f, 913f))))) * _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(1824f, -592f) + vec2<f32>(-666f, 642f)))), any(vec4<bool>(true, true, true, true))).x) {
                var var_0 = ~vec3<i32>(u_input.a.x, u_input.a.x, ~_wgslsmith_dot_vec3_i32(u_input.a, _wgslsmith_sub_vec3_i32(vec3<i32>(51732i, -18317i, arg_0), vec3<i32>(-19584i, u_input.a.x, 1i))));
                var var_1 = Struct_1(-1i, vec2<bool>(!select(arg_1 > arg_1, false, all(vec2<bool>(true, true))), ~_wgslsmith_div_u32(1u, 34968u) > ~_wgslsmith_dot_vec4_u32(vec4<u32>(3449u, 16763u, 4294967295u, 119530u), vec4<u32>(u_input.d, 29549u, arg_1, 4294967295u))), ~_wgslsmith_sub_i32(-u_input.a.x, 65233i), firstTrailingBit(_wgslsmith_mod_vec4_i32(~vec4<i32>(u_input.a.x, arg_0, var_0.x, 0i), vec4<i32>(var_0.x, u_input.a.x, 49440i, -1i) ^ firstTrailingBit(vec4<i32>(arg_0, 2147483647i, u_input.a.x, 1i)))));
                let var_2 = 1u;
                var_1 = Struct_1(i32(-2147483648), !var_1.b, -abs(-42197i), ~vec4<i32>(min(1i, countOneBits(var_1.c)), _wgslsmith_add_i32(_wgslsmith_clamp_i32(59552i, 3368i, u_input.a.x), ~arg_0), 1i, u_input.a.x));
            }
            switch (_wgslsmith_add_i32(min(abs(_wgslsmith_dot_vec3_i32(vec3<i32>(i32(-2147483648), 2147483647i, arg_0), vec3<i32>(-1i, 1i, 0i))), 28083i), arg_0)) {
                case -4325i: {
                    let var_0 = Struct_1(_wgslsmith_mod_i32(_wgslsmith_sub_i32(arg_0, 1i), u_input.a.x), select(!vec2<bool>(true, select(true, true, true)), vec2<bool>(true, false), true | all(vec3<bool>(true, true, true))), select(-1i, u_input.a.x, false), ~(~reverseBits(vec4<i32>(-20805i, u_input.a.x, arg_0, u_input.a.x))));
                    let var_1 = var_0;
                    var var_2 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(abs(_wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(-1016f, 1026f))))))));
                    var_2 = _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(floor(vec2<f32>(-1232f, 172f)))) * _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(-351f, var_2.x) - vec2<f32>(226f, 1565f)) + _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(-301f, var_2.x))))));
                }
                case 0i: {
                }
                case -57359i: {
                    let var_0 = 0u;
                    let var_1 = _wgslsmith_div_vec4_i32(firstTrailingBit(_wgslsmith_div_vec4_i32(~countOneBits(vec4<i32>(-1i, -1i, i32(-2147483648), -18727i)), ~reverseBits(vec4<i32>(arg_0, i32(-2147483648), u_input.a.x, u_input.a.x)))), _wgslsmith_sub_vec4_i32(vec4<i32>(_wgslsmith_mult_i32(0i, _wgslsmith_dot_vec4_i32(vec4<i32>(-16114i, 57974i, -1i, arg_0), vec4<i32>(1i, 1i, -14021i, 2147483647i))), arg_0, arg_0, i32(-1i) * -1i), vec4<i32>(i32(-2147483648), u_input.a.x >> (u_input.d % 32u), _wgslsmith_add_i32(_wgslsmith_mult_i32(u_input.a.x, arg_0), -arg_0), firstTrailingBit(_wgslsmith_dot_vec2_i32(vec2<i32>(u_input.a.x, u_input.a.x), u_input.a.zx)))));
                    let var_2 = reverseBits(abs(u_input.b));
                    var var_3 = Struct_1(0i, !func_6(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(1026f, -206f))), true), 2147483647i, abs(var_1) & select(~(-vec4<i32>(-63475i, -1480i, arg_0, var_1.x)), vec4<i32>(countOneBits(-48412i), _wgslsmith_mult_i32(9549i, u_input.a.x), u_input.a.x, ~u_input.a.x), true));
                    let var_4 = (i32(-1i) * -_wgslsmith_mod_i32(1i, i32(-1i) * -1i)) & var_3.a;
                }
                default: {
                    var var_0 = select(!(!vec2<bool>(any(vec2<bool>(true, true)), any(vec2<bool>(false, true)))), vec2<bool>(all(select(vec3<bool>(true, true, true), vec3<bool>(false, true, false), false)), true), func_6(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(241f, -546f)) * vec2<f32>(-212f, -510f))), func_6(_wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(1489f, -614f))), any(select(vec4<bool>(false, false, true, false), vec4<bool>(true, false, false, true), true))).x));
                    var var_1 = true || !(!var_0.x);
                }
            }
            for (var var_0 = _wgslsmith_add_i32(_wgslsmith_clamp_i32(39015i, countOneBits(~arg_0), i32(-2147483648)), max(~1i, reverseBits(arg_0) ^ ~arg_0)); all(vec2<bool>(true, true)); var_0 += 1i) {
                if (LOOP_COUNTERS[16u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
            }
        }
    }
    var var_0 = false;
    var var_1 = Struct_1(u_input.a.x, vec2<bool>(true, _wgslsmith_f_op_f32(ceil(853f)) >= _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(trunc(1166f)), _wgslsmith_div_f32(338f, 524f)))), 2147483647i, -(~vec4<i32>(arg_0, u_input.a.x, 9436i, 0i) | _wgslsmith_add_vec4_i32(vec4<i32>(-5204i, 0i, arg_0, -40942i), vec4<i32>(0i, arg_0, u_input.a.x, 2147483647i))) ^ abs(-vec4<i32>(arg_0, 1i, arg_0, arg_0)));
    if (all(!(!(!vec4<bool>(var_1.b.x, false, true, var_1.b.x))))) {
        loop {
            if (LOOP_COUNTERS[17u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
            var var_2 = u_input.a.x;
            var var_3 = Struct_1(_wgslsmith_dot_vec4_i32(vec4<i32>(~u_input.a.x ^ 0i, var_1.d.x | max(-101994i, var_1.d.x), countOneBits(24468i), _wgslsmith_clamp_i32(-var_1.c, 0i, abs(i32(-2147483648)))), _wgslsmith_add_vec4_i32((vec4<i32>(arg_0, -1i, arg_0, var_1.a) ^ vec4<i32>(18365i, 0i, var_1.a, u_input.a.x)) << ((vec4<u32>(0u, 18419u, 16927u, u_input.c) ^ vec4<u32>(40214u, 1u, arg_1, arg_1)) % vec4<u32>(32u)), select(abs(vec4<i32>(2147483647i, u_input.a.x, -29620i, 29539i)), var_1.d, select(vec4<bool>(false, true, var_1.b.x, var_1.b.x), vec4<bool>(false, var_1.b.x, var_1.b.x, false), var_1.b.x)))), var_1.b, abs(var_1.a & (_wgslsmith_clamp_i32(2147483647i, 2147483647i, u_input.a.x) | ~var_1.a)), var_1.d << (~(~vec4<u32>(arg_1, 4294967295u, arg_1, arg_1)) % vec4<u32>(32u)));
            var var_4 = Struct_1(~_wgslsmith_div_i32(abs(-1i), -max(28799i, var_1.d.x)), func_6(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(954f, -412f)) - vec2<f32>(_wgslsmith_f_op_f32(abs(1300f)), _wgslsmith_f_op_f32(select(-494f, 485f, false)))), true), ~2147483647i | u_input.a.x, vec4<i32>(arg_0 >> (max(_wgslsmith_add_u32(1u, arg_1), ~1u) % 32u), min(-reverseBits(-6625i), var_1.c), 5793i, -(~(0i))));
            let var_5 = Struct_1(_wgslsmith_dot_vec2_i32(-vec2<i32>(16639i, var_4.c), var_1.d.xz), !vec2<bool>(all(!var_3.b), !all(vec3<bool>(false, var_3.b.x, var_4.b.x))), u_input.a.x, vec4<i32>(u_input.a.x, 58148i, var_4.d.x, ~firstTrailingBit(arg_0 | 2147483647i)));
        }
        for (var var_2: i32; var_2 <= 1i; var_1 = Struct_1(_wgslsmith_div_i32(_wgslsmith_div_i32(~var_1.d.x, ~arg_0), -1i) >> (0u % 32u), vec2<bool>(false, select(true && all(var_1.b), var_1.b.x, false)), arg_0, var_1.d)) {
            if (LOOP_COUNTERS[18u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
            var var_3 = ~arg_1;
            break;
        }
        if (var_1.b.x) {
        }
        var_1 = Struct_1(var_1.a, !(!func_6(_wgslsmith_f_op_vec2_f32(-vec2<f32>(1494f, 797f)), !var_1.b.x)), abs(2147483647i), countOneBits(~var_1.d) << (~firstTrailingBit(vec4<u32>(u_input.b, 4294967295u, u_input.b, arg_1) | vec4<u32>(1u, 48254u, arg_1, arg_1)) % vec4<u32>(32u)));
    }
    return !func_6(_wgslsmith_f_op_vec2_f32(abs(vec2<f32>(_wgslsmith_f_op_f32(-1479f), _wgslsmith_f_op_f32(step(-222f, -634f))))), !(_wgslsmith_f_op_f32(step(-543f, -554f)) > _wgslsmith_f_op_f32(step(-205f, -855f))));
}

fn func_4() -> Struct_1 {
    var var_0 = true;
    loop {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
        if (!(!any(select(vec3<bool>(true, true, true), vec3<bool>(true, false, false), true)))) {
            let var_1 = Struct_1(u_input.a.x, select(!select(func_5(-1i, u_input.b), func_6(vec2<f32>(-893f, -560f), false), false), !(!select(vec2<bool>(true, false), vec2<bool>(true, true), false)), all(select(vec4<bool>(true, false, false, false), select(vec4<bool>(false, false, true, true), vec4<bool>(false, true, true, true), vec4<bool>(true, false, false, true)), func_6(vec2<f32>(-1000f, -411f), false).x))), _wgslsmith_add_i32(-min(_wgslsmith_dot_vec2_i32(vec2<i32>(-1i, u_input.a.x), vec2<i32>(2147483647i, 39191i)), u_input.a.x), u_input.a.x), ~vec4<i32>(u_input.a.x, ~(-1i), u_input.a.x, 23090i));
            var var_2 = var_1;
            var_0 = var_2.b.x;
            break;
        }
        var_0 = !(~(~4294967295u) < u_input.d);
        var_0 = func_5(~_wgslsmith_div_i32(_wgslsmith_clamp_i32(countOneBits(u_input.a.x), _wgslsmith_add_i32(u_input.a.x, 0i), ~(-2058i)), u_input.a.x), u_input.b | ~_wgslsmith_sub_u32(0u, _wgslsmith_dot_vec2_u32(vec2<u32>(53063u, 1u), vec2<u32>(u_input.d, u_input.b)))).x;
        for (var var_1 = 2147483647i; var_1 <= 0i; ) {
            if (LOOP_COUNTERS[20u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
            var var_2 = _wgslsmith_add_vec2_i32(firstLeadingBit(_wgslsmith_div_vec2_i32(firstLeadingBit(vec2<i32>(0i, 2147483647i)), u_input.a.zy)) | reverseBits(vec2<i32>(u_input.a.x, 20480i)), u_input.a.zy);
            var var_3 = _wgslsmith_dot_vec4_i32(-vec4<i32>(508i, 7599i, select(1i, -18991i, false), -(~u_input.a.x)), vec4<i32>(u_input.a.x, var_2.x, 0i, var_2.x));
            var_2 = u_input.a.zx;
            var_1 = -(~abs(0i));
        }
        break;
    }
    let var_1 = ~4294967295u;
    for (var var_2 = 24497i; true; var_2 -= 1i) {
        if (LOOP_COUNTERS[21u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
    }
    var var_2 = 4294967295u;
    return Struct_1(u_input.a.x, vec2<bool>(true, true), _wgslsmith_clamp_i32(-(~(-3364i)), min(select(-29858i, 33929i, false), 75581i), u_input.a.x | _wgslsmith_dot_vec2_i32(vec2<i32>(u_input.a.x, i32(-2147483648)), vec2<i32>(2147483647i, i32(-2147483648)))) | ~(-1683i), max(vec4<i32>(select(u_input.a.x, 1i, false), ~u_input.a.x, u_input.a.x, u_input.a.x >> (_wgslsmith_mod_u32(32639u, u_input.b) % 32u)), -vec4<i32>(countOneBits(0i), 16757i, i32(-1i) * -9292i, u_input.a.x)));
}

fn func_8(arg_0: Struct_1) -> Struct_1 {
    var var_0 = abs(3103u);
    let var_1 = vec4<bool>(true, arg_0.b.x, !all(vec3<bool>(arg_0.b.x, true, all(vec4<bool>(false, arg_0.b.x, arg_0.b.x, arg_0.b.x)))), false);
    loop {
        if (LOOP_COUNTERS[22u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
        let var_2 = !(!(!select(vec3<bool>(arg_0.b.x, false, var_1.x), vec3<bool>(false, arg_0.b.x, arg_0.b.x), !vec3<bool>(false, var_1.x, var_1.x))));
        let var_3 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(-894f)));
        break;
    }
    let var_2 = _wgslsmith_div_f32(-1451f, _wgslsmith_f_op_f32(round(-1294f)));
    var var_3 = vec4<f32>(-569f, -880f, _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(max(var_2, _wgslsmith_f_op_f32(-1000f))), 711f)))), -1257f);
    return arg_0;
}

fn func_3() -> f32 {
    var var_0 = func_8(func_4());
    var var_1 = u_input.a.zx;
    let var_2 = _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1436f)))) - _wgslsmith_f_op_f32(f32(-1f) * -969f))));
    for (; ((var_0.c >= ~u_input.a.x) || !var_0.b.x) && false; ) {
        if (LOOP_COUNTERS[23u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
    }
    for (var var_3 = i32(-2147483648); var_3 == 1i; var_3 -= 1i) {
        if (LOOP_COUNTERS[24u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
        if (func_5(-(i32(-1i) * i32(-2147483648)), 135410u).x) {
            return var_2;
        }
        if (true) {
            break;
        }
        for (var var_4: i32; var_0.b.x; var_4 = firstLeadingBit(_wgslsmith_dot_vec2_i32(_wgslsmith_clamp_vec2_i32(_wgslsmith_add_vec2_i32(~var_0.d.yw, abs(var_0.d.wz)), u_input.a.yx, -var_0.d.yz), var_0.d.yw))) {
            if (LOOP_COUNTERS[25u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
            let var_5 = ~_wgslsmith_mult_vec2_u32(vec2<u32>(2308u, reverseBits(countOneBits(u_input.c))), vec2<u32>(~(~66919u), ~(~0u)));
            var var_6 = func_4();
        }
        var var_4 = _wgslsmith_mult_vec3_i32(-var_0.d.yxw, vec3<i32>(-22952i, u_input.a.x, var_1.x));
        var_0 = Struct_1(~(~(-23699i) | (~var_1.x << (_wgslsmith_mod_u32(u_input.b, u_input.d) % 32u))), func_6(_wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(round(197f)), _wgslsmith_div_f32(var_2, -894f)) * vec2<f32>(var_2, 881f)), !(var_1.x >= (14419i & var_4.x))), 1i, _wgslsmith_mult_vec4_i32(_wgslsmith_clamp_vec4_i32(var_0.d, var_0.d & ~var_0.d, var_0.d), var_0.d & vec4<i32>(var_1.x, u_input.a.x, 1i, var_0.d.x >> (0u % 32u))));
    }
    return _wgslsmith_f_op_f32(var_2 - var_2);
}

fn func_2() -> vec4<i32> {
    loop {
        if (LOOP_COUNTERS[26u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
        let var_0 = _wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-1546f - 1318f))) + _wgslsmith_f_op_f32(-1597f - _wgslsmith_div_f32(-647f, 267f))), _wgslsmith_f_op_f32(step(-700f, _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(func_3()), _wgslsmith_f_op_f32(468f * 1229f)))))) * _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(max(-1088f, -716f)), _wgslsmith_f_op_f32(trunc(1042f))) - vec2<f32>(_wgslsmith_div_f32(-406f, 885f), _wgslsmith_f_op_f32(-1000f + 1422f)))));
        for (var var_1 = -31836i; !(196f >= var_0.x); var_1 -= 1i) {
            if (LOOP_COUNTERS[27u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[27u] = LOOP_COUNTERS[27u] + 1u;
            break;
        }
        switch (u_input.a.x) {
            default: {
            }
        }
        return -(~func_4().d);
    }
    switch (_wgslsmith_mod_i32(-25906i, -19676i)) {
        case 1i: {
            if (!(((_wgslsmith_dot_vec4_i32(vec4<i32>(u_input.a.x, 46765i, u_input.a.x, u_input.a.x), vec4<i32>(i32(-2147483648), -23327i, -7760i, u_input.a.x)) >> (~0u % 32u)) >= u_input.a.x) | !(func_6(vec2<f32>(-1000f, -1166f), false).x & all(vec3<bool>(true, true, true))))) {
                var var_0 = 37255i;
                var_0 = _wgslsmith_mult_i32(_wgslsmith_dot_vec3_i32(~abs(countOneBits(vec3<i32>(1i, u_input.a.x, u_input.a.x))), ~vec3<i32>(u_input.a.x, u_input.a.x, u_input.a.x | 21696i)), i32(-2147483648));
                return func_4().d;
            }
        }
        default: {
        }
    }
    for (var var_0 = -1i; var_0 == -36473i; ) {
        if (LOOP_COUNTERS[28u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[28u] = LOOP_COUNTERS[28u] + 1u;
    }
    switch (firstLeadingBit(_wgslsmith_div_i32(~39179i, -firstLeadingBit(abs(u_input.a.x))))) {
        default: {
            for (var var_0: i32; var_0 != 78416i; ) {
                if (LOOP_COUNTERS[29u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[29u] = LOOP_COUNTERS[29u] + 1u;
            }
            var var_0 = !(u_input.c >= u_input.b);
            if (select(false, true, true)) {
                return ~func_8(func_4()).d;
            }
            var var_1 = ~(select(u_input.d, firstTrailingBit(firstLeadingBit(u_input.c)), true) << (~u_input.d % 32u));
            if ((max(firstLeadingBit(min(0i, u_input.a.x)), _wgslsmith_mod_i32(1i, _wgslsmith_dot_vec4_i32(vec4<i32>(-5972i, u_input.a.x, -15312i, -13313i), vec4<i32>(u_input.a.x, 2147483647i, 0i, i32(-2147483648))))) > firstTrailingBit(u_input.a.x << (min(150700u, u_input.b) % 32u))) != !(!any(vec3<bool>(true, true, false)))) {
                var_0 = false;
                let var_2 = _wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(floor(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(select(vec3<f32>(-1352f, 1272f, 1368f), vec3<f32>(2119f, 1000f, -175f), vec3<bool>(true, false, true))), _wgslsmith_f_op_vec3_f32(-vec3<f32>(-1607f, 465f, 1000f))))))));
                let var_3 = vec2<f32>(-1000f, var_2.x);
                var var_4 = func_8(func_4());
            }
        }
    }
    var var_0 = !vec4<bool>(true, false, all(select(vec3<bool>(false, true, true), vec3<bool>(true, true, true), false)), false);
    return abs(vec4<i32>(-33283i, u_input.a.x, _wgslsmith_sub_i32(0i & _wgslsmith_dot_vec2_i32(vec2<i32>(u_input.a.x, -7194i), u_input.a.xz), countOneBits(u_input.a.x)), abs((-1i << (u_input.b % 32u)) | u_input.a.x)));
}

fn func_9(arg_0: Struct_1, arg_1: Struct_1, arg_2: u32) -> Struct_1 {
    switch (_wgslsmith_sub_i32(arg_0.c, (u_input.a.x & -1i) << (1u % 32u))) {
        case 0i: {
            if (func_8(arg_1).b.x & true) {
                var var_0 = vec3<f32>(_wgslsmith_f_op_f32(-1f), _wgslsmith_f_op_f32(floor(-122f)), _wgslsmith_f_op_f32(ceil(-1123f)));
            }
        }
        case -49292i: {
            let var_0 = func_8(Struct_1(arg_0.a, func_8(Struct_1(-44943i, vec2<bool>(arg_0.b.x, false), arg_0.c, -vec4<i32>(70558i, arg_1.d.x, u_input.a.x, u_input.a.x))).b, -arg_0.a, vec4<i32>(arg_0.d.x, ~u_input.a.x, _wgslsmith_div_i32(-11088i, arg_1.c), 1i) & -arg_1.d));
            var var_1 = Struct_1(_wgslsmith_mult_i32(-1i, func_4().c), arg_0.b, i32(-2147483648) >> (~u_input.b % 32u), -arg_0.d);
            let var_2 = vec4<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-1031f - -2660f), _wgslsmith_f_op_f32(ceil(_wgslsmith_div_f32(_wgslsmith_f_op_f32(select(536f, 1572f, arg_1.b.x)), _wgslsmith_f_op_f32(-1000f + 209f))))), _wgslsmith_f_op_f32(round(1f)), 342f, -770f);
            if (var_1.b.x) {
                var var_3 = func_8(Struct_1(~(_wgslsmith_sub_i32(var_0.c, 40491i) << (4294967295u % 32u)), func_4().b, 1i, min(func_8(Struct_1(i32(-2147483648), var_1.b, -23268i, vec4<i32>(var_0.c, var_0.c, 19834i, arg_0.d.x))).d, _wgslsmith_mod_vec4_i32(vec4<i32>(-1i, arg_0.a, 1i, 8168i), _wgslsmith_div_vec4_i32(var_0.d, vec4<i32>(9487i, -33963i, 53042i, 1i))))));
            }
            let var_3 = var_2.x;
        }
        case i32(-2147483648): {
            if (arg_0.b.x) {
                var var_0 = _wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(-324f, -201f, 1126f) * vec3<f32>(1000f, -379f, 184f)) - _wgslsmith_div_vec3_f32(vec3<f32>(-516f, 357f, 315f), vec3<f32>(1034f, 171f, -902f))), vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -160f), _wgslsmith_f_op_f32(select(-1000f, 912f, arg_1.b.x)), 750f)))));
                var_0 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(-vec3<f32>(118f, var_0.x, -232f)), _wgslsmith_f_op_vec3_f32(floor(vec3<f32>(var_0.x, var_0.x, -1000f))))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(111f, -301f, -882f)) * _wgslsmith_f_op_vec3_f32(-vec3<f32>(var_0.x, var_0.x, var_0.x))))) * _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(select(vec3<f32>(1000f, -1225f, -1967f), _wgslsmith_f_op_vec3_f32(exp2(vec3<f32>(-1508f, 1347f, var_0.x))), !vec3<bool>(arg_0.b.x, arg_1.b.x, true)))))));
            }
            let var_0 = arg_1.b.x;
            loop {
                if (LOOP_COUNTERS[30u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[30u] = LOOP_COUNTERS[30u] + 1u;
            }
            var var_1 = 2147483647i;
        }
        default: {
            switch (-_wgslsmith_dot_vec2_i32(u_input.a.yz, _wgslsmith_mult_vec2_i32(-_wgslsmith_sub_vec2_i32(arg_0.d.yz, arg_0.d.wx), -_wgslsmith_mod_vec2_i32(vec2<i32>(21655i, arg_0.c), arg_0.d.zw)))) {
                case i32(-2147483648): {
                }
                case 33506i: {
                    var var_0 = 162f;
                    var_0 = _wgslsmith_f_op_f32(1254f * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(trunc(-1205f)), _wgslsmith_div_f32(759f, 526f)) * 292f) * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-386f)) * _wgslsmith_f_op_f32(-694f + -1000f))));
                    let var_1 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-1f), _wgslsmith_f_op_f32(func_3()))), _wgslsmith_f_op_f32(1017f - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1165f * -2065f)) - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(715f)) - _wgslsmith_f_op_f32(step(1273f, -106f))))));
                    let var_2 = arg_1;
                }
                case 3789i: {
                    var var_0 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(f32(-1f) * -1157f), _wgslsmith_f_op_f32(-109f)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-267f - 2353f)) * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(265f)) + _wgslsmith_f_op_f32(f32(-1f) * -156f))))) * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(select(_wgslsmith_div_f32(1816f, 1000f), _wgslsmith_f_op_f32(-2149f + -1350f), true))))));
                    let var_1 = !(!vec4<bool>(false, true, func_5(1i, u_input.d).x, arg_1.c <= -u_input.a.x));
                    let var_2 = u_input.d;
                }
                default: {
                    let var_0 = !vec4<bool>(false, true, any(vec2<bool>(func_6(vec2<f32>(-574f, -514f), arg_1.b.x).x, true)), arg_0.b.x);
                    var var_1 = func_4();
                    var_1 = Struct_1(0i, func_5(-select(10870i, 38358i, var_0.x) >> (arg_2 % 32u), ~631u), ~arg_0.d.x, _wgslsmith_sub_vec4_i32(vec4<i32>(-1i, 2147483647i, _wgslsmith_add_i32(_wgslsmith_clamp_i32(0i, arg_0.c, arg_1.a), 1i), arg_0.c), arg_1.d));
                    var_1 = arg_1;
                }
            }
            var var_0 = 14476u;
            for (var var_1 = i32(-2147483648); var_1 > 2147483647i; ) {
                if (LOOP_COUNTERS[31u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[31u] = LOOP_COUNTERS[31u] + 1u;
                break;
            }
            for (var var_1: i32; var_1 < i32(-2147483648); var_1 += 1i) {
                if (LOOP_COUNTERS[32u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[32u] = LOOP_COUNTERS[32u] + 1u;
                var_1 = ~arg_0.c;
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[33u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[33u] = LOOP_COUNTERS[33u] + 1u;
        continue;
    }
    var var_0 = Struct_1(firstLeadingBit(u_input.a.x) >> (~arg_2 % 32u), func_4().b, _wgslsmith_dot_vec2_i32(vec2<i32>(func_8(arg_1).c, 1i), vec2<i32>(i32(-1i) * i32(-2147483648), arg_0.d.x)), vec4<i32>(u_input.a.x, _wgslsmith_clamp_i32(_wgslsmith_mod_i32(u_input.a.x, arg_0.a), reverseBits(u_input.a.x), ~1721i), max(arg_1.c, countOneBits(u_input.a.x)), 1i));
    var var_1 = func_4();
    for (var var_2 = 11943i; var_2 >= -8297i; var_2 += 1i) {
        if (LOOP_COUNTERS[34u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[34u] = LOOP_COUNTERS[34u] + 1u;
        continue;
    }
    return Struct_1(-19270i, !arg_0.b, 19730i, vec4<i32>(var_0.d.x, _wgslsmith_div_i32(2147483647i, _wgslsmith_mod_i32(min(arg_1.d.x, var_1.c), u_input.a.x)), ~18513i >> (arg_2 % 32u), _wgslsmith_mod_i32(_wgslsmith_mult_i32(-var_1.a, 1i), firstTrailingBit(24213i | var_0.d.x))));
}

fn func_1(arg_0: u32, arg_1: bool, arg_2: vec2<i32>, arg_3: Struct_1) -> Struct_1 {
    let var_0 = func_9(Struct_1(arg_2.x, select(select(select(vec2<bool>(true, arg_1), arg_3.b, arg_3.b), vec2<bool>(arg_3.b.x, false), true), select(!vec2<bool>(arg_1, true), select(arg_3.b, arg_3.b, vec2<bool>(true, arg_3.b.x)), arg_3.b), !arg_3.b), arg_2.x, ~func_2()), Struct_1(31373i, func_5(arg_3.d.x, _wgslsmith_dot_vec3_u32(vec3<u32>(u_input.b, u_input.b, arg_0) >> (vec3<u32>(arg_0, 47461u, 4294967295u) % vec3<u32>(32u)), vec3<u32>(u_input.c, u_input.b, 0u) & vec3<u32>(1u, u_input.b, arg_0))), func_4().d.x, vec4<i32>(~(-3662i), 0i, arg_3.d.x, _wgslsmith_dot_vec3_i32(-vec3<i32>(arg_3.d.x, u_input.a.x, u_input.a.x), countOneBits(vec3<i32>(-60220i, arg_3.a, -16181i))))), u_input.d);
    if (func_7(Struct_1(_wgslsmith_sub_i32(-(arg_2.x | i32(-2147483648)), 1i), vec2<bool>(any(vec3<bool>(false, false, var_0.b.x)), true), func_2().x, vec4<i32>(firstTrailingBit(30013i), _wgslsmith_mod_i32(-30791i, i32(-2147483648)) & reverseBits(u_input.a.x), arg_3.a, 939i)), vec2<f32>(1f, 1f))) {
        var var_1 = Struct_1(func_8(arg_3).c, arg_3.b, u_input.a.x, firstTrailingBit(vec4<i32>(countOneBits(0i), u_input.a.x, firstLeadingBit(-u_input.a.x), 0i)));
        if (!(i32(-2147483648) <= _wgslsmith_clamp_i32(1i & u_input.a.x, -1i, func_4().a))) {
            var_1 = func_8(func_4());
            var var_2 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(select(vec4<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(f32(-1f) * -1446f))), _wgslsmith_f_op_f32(-2932f * 1623f), _wgslsmith_f_op_f32(-1000f * _wgslsmith_f_op_f32(min(-1000f, 1029f))), 1f), _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(select(1655f, 353f, true)), _wgslsmith_f_op_f32(f32(-1f) * -607f), -726f, _wgslsmith_f_op_f32(f32(-1f) * -585f))), vec4<bool>(var_0.b.x & true, func_9(func_9(var_0, arg_3, u_input.b), arg_3, u_input.d).b.x, func_4().b.x & select(true, true, var_1.b.x), var_0.b.x & func_9(Struct_1(arg_3.d.x, var_1.b, u_input.a.x, var_0.d), arg_3, u_input.c).b.x))));
            var_2 = vec4<f32>(590f, _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-372f * var_2.x) * var_2.x) * 982f), 189f, true)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_3()))))), _wgslsmith_f_op_f32(ceil(var_2.x)));
            var_2 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(699f + var_2.x))), var_2.x, 1f, var_2.x)));
        }
        for (var var_2 = -1i; var_2 == 1502i; var_2 += 1i) {
            if (LOOP_COUNTERS[35u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[35u] = LOOP_COUNTERS[35u] + 1u;
            let var_3 = true;
            let var_4 = arg_3;
            continue;
        }
    }
    switch (i32(-1i) * -_wgslsmith_clamp_i32(0i, arg_2.x, ~(~(-1i)))) {
        case -1i: {
        }
        default: {
            let var_1 = ~_wgslsmith_div_vec2_i32(func_8(var_0).d.xy, select(arg_2, var_0.d.zw, _wgslsmith_dot_vec3_i32(var_0.d.xww, u_input.a) >= 1i));
            var var_2 = firstLeadingBit(4950u);
            let var_3 = func_4().d.x;
            var var_4 = func_4();
            var var_5 = var_0;
        }
    }
    let var_1 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(max(_wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(round(vec2<f32>(-1172f, 1000f))))), _wgslsmith_f_op_vec2_f32(-vec2<f32>(-783f, 1195f)))), _wgslsmith_f_op_vec2_f32(ceil(vec2<f32>(_wgslsmith_f_op_f32(-283f * 250f), _wgslsmith_f_op_f32(trunc(-1051f)))))));
    let var_2 = -42289i >> ((~(_wgslsmith_mult_u32(5795u, u_input.d) | (u_input.d | 25000u)) << (_wgslsmith_mult_u32(_wgslsmith_mod_u32(44769u, arg_0) << ((u_input.d | arg_0) % 32u), ~u_input.c) % 32u)) % 32u);
    return var_0;
}

@compute
@workgroup_size(1)
fn main() {
    let var_0 = func_1(u_input.d, 6617i != ~_wgslsmith_sub_i32(~u_input.a.x, firstTrailingBit(u_input.a.x)), abs(vec2<i32>(~u_input.a.x << (18348u % 32u), 0i)), Struct_1(_wgslsmith_clamp_i32(countOneBits(-27567i), 1i, i32(-2147483648)), vec2<bool>(true, true), ~u_input.a.x, ~firstLeadingBit(vec4<i32>(-13735i, 51332i, u_input.a.x, u_input.a.x))));
    let var_1 = func_9(Struct_1(select(u_input.a.x, ~_wgslsmith_sub_i32(0i, 35522i), select(var_0.b.x & false, all(vec4<bool>(var_0.b.x, var_0.b.x, var_0.b.x, var_0.b.x)), true)), func_1(abs(u_input.c) | (u_input.c | u_input.d), !all(vec4<bool>(var_0.b.x, false, var_0.b.x, var_0.b.x)), _wgslsmith_mod_vec2_i32(var_0.d.xz ^ vec2<i32>(55555i, u_input.a.x), select(u_input.a.zx, var_0.d.zw, var_0.b)), Struct_1(_wgslsmith_mod_i32(2147483647i, u_input.a.x), select(var_0.b, var_0.b, var_0.b.x), var_0.c, var_0.d << (vec4<u32>(u_input.c, 0u, 0u, u_input.c) % vec4<u32>(32u)))).b, ~(~_wgslsmith_mult_i32(2147483647i, -1i)), _wgslsmith_mod_vec4_i32(vec4<i32>(firstLeadingBit(u_input.a.x), ~(i32(-2147483648)), -u_input.a.x, func_9(var_0, Struct_1(var_0.c, var_0.b, -1i, vec4<i32>(-46426i, 1i, u_input.a.x, u_input.a.x)), 4294967295u).a), _wgslsmith_add_vec4_i32(_wgslsmith_clamp_vec4_i32(var_0.d, var_0.d, vec4<i32>(u_input.a.x, 15221i, 2147483647i, u_input.a.x)), var_0.d))), var_0, abs(u_input.b | 10222u));
    var var_2 = func_1((u_input.c ^ _wgslsmith_dot_vec3_u32(countOneBits(vec3<u32>(4294967295u, u_input.b, 4294967295u)), firstLeadingBit(vec3<u32>(u_input.d, u_input.d, 0u)))) >> (u_input.c % 32u), false, abs(func_4().d.zy), var_1);
    var_2 = var_1;
    for (var var_3 = var_0.c | 1i; ; var_3 += 1i) {
        if (LOOP_COUNTERS[36u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[36u] = LOOP_COUNTERS[36u] + 1u;
        for (; true && func_8(var_0).b.x; ) {
            if (LOOP_COUNTERS[37u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[37u] = LOOP_COUNTERS[37u] + 1u;
            let var_4 = vec3<i32>(firstLeadingBit(-(~u_input.a.x)) & var_2.a, var_0.c, u_input.a.x);
            break;
        }
        if (var_2.b.x) {
        }
    }
    let var_3 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(-vec4<f32>(1000f, _wgslsmith_f_op_f32(min(-607f, 1118f)), _wgslsmith_f_op_f32(-621f), _wgslsmith_f_op_f32(1326f * -768f))), _wgslsmith_f_op_vec4_f32(floor(vec4<f32>(_wgslsmith_f_op_f32(-1000f + 124f), _wgslsmith_f_op_f32(floor(-1409f)), 665f, _wgslsmith_f_op_f32(-2026f - 462f)))), var_1.b.x)));
    for (var var_4 = -43276i; any(vec4<bool>(func_9(func_8(func_4()), Struct_1(2147483647i, var_1.b, var_1.c & 2147483647i, vec4<i32>(1i, u_input.a.x, -42075i, var_2.a)), 1u).b.x, var_1.b.x, !(any(vec3<bool>(var_1.b.x, false, var_0.b.x)) & var_0.b.x), !(~var_0.d.x < ~var_2.a))); var_4 -= 1i) {
        if (LOOP_COUNTERS[38u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[38u] = LOOP_COUNTERS[38u] + 1u;
        continue;
    }
    var var_4 = _wgslsmith_dot_vec4_u32(_wgslsmith_clamp_vec4_u32(vec4<u32>(0u, u_input.b, ~0u, 74804u), ~_wgslsmith_mult_vec4_u32(vec4<u32>(u_input.d, 45430u, 4294967295u, 5029u), vec4<u32>(u_input.d, 30974u, 14587u, 4294967295u)), ~vec4<u32>(48928u, 33769u, u_input.d, 4294967295u) << (max(vec4<u32>(5838u, 0u, u_input.b, 4294967295u), vec4<u32>(u_input.d, 0u, 12178u, 55259u)) % vec4<u32>(32u))), ~(~vec4<u32>(u_input.d, 1u, u_input.d, u_input.d)) & ~max(vec4<u32>(57595u, 11516u, 76453u, 1463u), vec4<u32>(u_input.b, 4294967295u, u_input.c, u_input.c))) | u_input.b;
    let x = u_input.a;
    s_output = StorageBuffer(~_wgslsmith_mult_vec3_u32(~(vec3<u32>(4294967295u, u_input.b, 2944u) & vec3<u32>(u_input.d, u_input.b, u_input.d)), select(~vec3<u32>(20644u, u_input.d, u_input.d), firstTrailingBit(vec3<u32>(u_input.d, u_input.c, u_input.d)), !var_1.b.x)), _wgslsmith_sub_u32(1u, _wgslsmith_dot_vec2_u32(vec2<u32>(47525u, u_input.d), vec2<u32>(~1u, 1u))), vec4<u32>(_wgslsmith_div_u32(~u_input.c, firstTrailingBit(u_input.c) | ~u_input.b), ~_wgslsmith_mod_u32(4294967295u, ~u_input.c), ~1u, select(u_input.d, select(~u_input.b, max(u_input.b, 8138u), true && var_1.b.x), true)), abs(~(vec2<u32>(u_input.d, u_input.b) >> (vec2<u32>(u_input.c, u_input.c) % vec2<u32>(32u)))), vec4<u32>(~(~_wgslsmith_dot_vec3_u32(vec3<u32>(75000u, 12586u, u_input.d), vec3<u32>(u_input.d, u_input.b, u_input.d))), ~u_input.c, _wgslsmith_sub_u32(u_input.b, _wgslsmith_dot_vec3_u32(vec3<u32>(u_input.c, u_input.b, 73960u), ~vec3<u32>(u_input.c, 0u, u_input.d))), _wgslsmith_add_u32(_wgslsmith_dot_vec4_u32(_wgslsmith_add_vec4_u32(vec4<u32>(16945u, 4294967295u, u_input.c, u_input.b), vec4<u32>(u_input.d, 8620u, u_input.b, 0u)), _wgslsmith_div_vec4_u32(vec4<u32>(91843u, 55202u, u_input.c, u_input.c), vec4<u32>(52077u, u_input.c, u_input.b, u_input.d))), u_input.c)));
}

`;