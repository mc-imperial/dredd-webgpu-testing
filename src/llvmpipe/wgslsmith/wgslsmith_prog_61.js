export const input = [206,67,136,5,42,141,30,7,79,43,68,12,38,94,239,18,211,40,93,120,229,44,56,254,177,92,102,247,149,2,162,181,88,29,22,178,233,85,203,144,192,201,154,161,136,142,165,47,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [206,67,136,5,42,141,30,7,79,43,68,12,38,94,239,18,211,40,93,120,229,44,56,254,177,92,102,247,149,2,162,181,88,29,22,178,233,85,203,144,192,201,154,161,136,142,165,47,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[206,67,136,5,42,141,30,7,79,43,68,12,38,94,239,18,211,40,93,120,229,44,56,254,177,92,102,247,149,2,162,181,88,29,22,178,233,85,203,144,192,201,154,161,136,142,165,47]}
// Seed: 7579681017232842380

struct Struct_1 {
    a: vec3<bool>,
    b: u32,
    c: i32,
    d: vec3<i32>,
    e: i32,
}

struct Struct_2 {
    a: Struct_1,
}

struct Struct_3 {
    a: vec2<f32>,
    b: bool,
    c: u32,
    d: vec2<i32>,
}

struct Struct_4 {
    a: Struct_1,
    b: f32,
    c: Struct_2,
}

struct Struct_5 {
    a: vec3<f32>,
}

struct UniformBuffer {
    a: i32,
    b: i32,
    c: vec4<u32>,
    d: i32,
}

struct StorageBuffer {
    a: vec3<u32>,
    b: i32,
    c: f32,
    d: i32,
    e: vec4<u32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<vec2<u32>, 15>;

var<private> global1: array<vec2<bool>, 28>;

var<private> LOOP_COUNTERS: array<u32, 16>;

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn func_6(arg_0: u32, arg_1: i32) -> i32 {
    let var_0 = _wgslsmith_sub_vec2_u32(min(_wgslsmith_mod_vec2_u32(~abs(global0[_wgslsmith_index_u32(u_input.c.x, 15u)]), global0[_wgslsmith_index_u32(~(~u_input.c.x), 15u)]), _wgslsmith_mod_vec2_u32(~_wgslsmith_add_vec2_u32(vec2<u32>(u_input.c.x, arg_0), vec2<u32>(arg_0, u_input.c.x)), vec2<u32>(min(arg_0, 71685u), _wgslsmith_sub_u32(38541u, 17690u)))), vec2<u32>(max(~arg_0, ~(~u_input.c.x)), 0u));
    if (true) {
        switch (u_input.a) {
            case -28456i: {
                global1 = array<vec2<bool>, 28>();
                var var_1 = _wgslsmith_f_op_vec2_f32(min(_wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(-vec2<f32>(1779f, -101f)), _wgslsmith_f_op_vec2_f32(step(vec2<f32>(-1418f, 554f), vec2<f32>(1829f, 299f)))))), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(min(vec2<f32>(553f, -648f), vec2<f32>(-1074f, -217f))), _wgslsmith_f_op_vec2_f32(-vec2<f32>(257f, 1810f)), false)) - vec2<f32>(_wgslsmith_f_op_f32(abs(261f)), 1000f)), !vec2<bool>(true, any(vec3<bool>(true, true, false))))), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(max(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(round(vec2<f32>(1072f, -624f)))), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(-506f, -1521f))))))));
                let var_2 = _wgslsmith_f_op_f32(-var_1.x);
            }
            default: {
            }
        }
        global1 = array<vec2<bool>, 28>();
        return -1i;
    }
    let var_1 = abs(_wgslsmith_dot_vec2_i32(countOneBits(vec2<i32>(u_input.a, _wgslsmith_div_i32(0i, u_input.d))), vec2<i32>(-u_input.a, 1i)));
    let var_2 = _wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(abs(vec3<f32>(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(1693f * 296f))), 571f, _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(select(1462f, 1829f, false)))))))));
    var var_3 = Struct_1(select(select(vec3<bool>(true, true, true), vec3<bool>(true, any(vec2<bool>(true, true)), true), all(select(vec3<bool>(true, false, true), vec3<bool>(false, false, false), vec3<bool>(false, false, true)))), select(vec3<bool>(select(false, true, false), true, any(vec3<bool>(true, true, false))), !select(vec3<bool>(false, true, true), vec3<bool>(false, false, false), vec3<bool>(false, true, true)), all(select(vec3<bool>(false, true, true), vec3<bool>(false, false, false), true))), 25363i <= var_1), _wgslsmith_dot_vec4_u32(~u_input.c, vec4<u32>(~(~arg_0), ~u_input.c.x, 2506u, ~23682u)), select(countOneBits(u_input.b), u_input.b, any(vec2<bool>(true, 0u == var_0.x))), (-select(vec3<i32>(25797i, u_input.b, var_1), vec3<i32>(u_input.b, var_1, -25160i), true) & vec3<i32>(var_1, 0i, countOneBits(5025i))) | _wgslsmith_add_vec3_i32(vec3<i32>(2147483647i, var_1, var_1 << (4294967295u % 32u)), vec3<i32>(~arg_1, u_input.d, firstTrailingBit(-1i))), 2147483647i);
    return arg_1;
}

fn func_5(arg_0: vec3<u32>, arg_1: vec4<bool>, arg_2: Struct_2, arg_3: bool) -> vec4<i32> {
    let var_0 = Struct_3(_wgslsmith_f_op_vec2_f32(sign(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(select(vec2<f32>(-589f, -1903f), vec2<f32>(1000f, -335f), arg_2.a.a.x))) - _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(1596f, -1595f)) * _wgslsmith_f_op_vec2_f32(-vec2<f32>(-1597f, 191f)))))), !(!(arg_3 | false)), firstTrailingBit(~reverseBits(0u)), vec2<i32>(u_input.b, countOneBits(u_input.a)));
    var var_1 = arg_2.a;
    var var_2 = arg_2;
    switch (_wgslsmith_add_i32(_wgslsmith_dot_vec2_i32(vec2<i32>(_wgslsmith_div_i32(arg_2.a.c, var_1.d.x) << (4294967295u % 32u), -20350i), min(reverseBits(arg_2.a.d.xz), arg_2.a.d.yy)), 3700i)) {
        case -46951i: {
            var_2 = Struct_2(arg_2.a);
            let var_3 = Struct_1(select(select(vec3<bool>(true, all(vec4<bool>(true, false, false, var_1.a.x)), var_2.a.b >= arg_0.x), vec3<bool>(all(vec2<bool>(false, true)), true, true), var_0.b), select(arg_2.a.a, vec3<bool>(any(arg_1), !arg_3, !arg_3), true), false), _wgslsmith_mod_u32(~(arg_0.x >> (arg_2.a.b % 32u)) >> (4294967295u % 32u), var_2.a.b), arg_2.a.e, vec3<i32>(u_input.d, ~(-1i), var_2.a.e) >> (vec3<u32>(21760u, ~(u_input.c.x << (1u % 32u)), abs(1u)) % vec3<u32>(32u)), arg_2.a.e);
            var var_4 = var_0.a.x;
            var_1 = Struct_1(arg_1.wzw, arg_0.x, ~var_2.a.e, abs(-vec3<i32>(var_3.c, 27343i, u_input.d)), _wgslsmith_div_i32(~((var_0.d.x ^ -17743i) ^ (2147483647i ^ u_input.a)), -(~2147483647i)));
        }
        default: {
            switch (_wgslsmith_sub_i32(-(~(~20196i)), var_1.c) & (u_input.d << (_wgslsmith_dot_vec2_u32(vec2<u32>(u_input.c.x, 0u), ~(~u_input.c.yz)) % 32u))) {
                case 0i: {
                    global0 = array<vec2<u32>, 15>();
                    var_2 = Struct_2(Struct_1(select(var_2.a.a, vec3<bool>(!var_2.a.a.x, 962f <= var_0.a.x, true), arg_2.a.a), var_2.a.b, var_2.a.e >> (~1u % 32u), -vec3<i32>(13878i, 0i, firstLeadingBit(-67361i)), func_6(~3u, -1i)));
                }
                case -1i: {
                    let var_3 = true;
                    global1 = array<vec2<bool>, 28>();
                    global1 = array<vec2<bool>, 28>();
                }
                case -30840i: {
                    let var_3 = Struct_3(var_0.a, -119f >= var_0.a.x, u_input.c.x, var_2.a.d.zz);
                }
                default: {
                    global1 = array<vec2<bool>, 28>();
                }
            }
        }
    }
    var var_3 = ~vec2<i32>(-2147483647i, -(~var_1.d.x));
    return countOneBits(select(vec4<i32>(1i, select(var_0.d.x, -29095i, true), -var_0.d.x, _wgslsmith_sub_i32(arg_2.a.d.x, var_3.x)), firstTrailingBit(_wgslsmith_clamp_vec4_i32(vec4<i32>(var_2.a.d.x, 2825i, -1i, 20149i), vec4<i32>(-67746i, var_1.d.x, 0i, 2147483647i), vec4<i32>(-1i, var_1.d.x, var_1.c, var_0.d.x))), ~var_3.x <= -31481i)) << (~(~firstLeadingBit(_wgslsmith_mod_vec4_u32(u_input.c, vec4<u32>(0u, var_2.a.b, 4294967295u, var_0.c)))) % vec4<u32>(32u));
}

fn func_4() -> Struct_4 {
    let var_0 = ~(-max(-(vec4<i32>(1783i, 4739i, 2147483647i, -1i) << (u_input.c % vec4<u32>(32u))), ~func_5(u_input.c.yxz, vec4<bool>(false, false, false, false), Struct_2(Struct_1(vec3<bool>(true, true, true), u_input.c.x, u_input.a, vec3<i32>(-33034i, -42256i, 21194i), u_input.b)), true)));
    global1 = array<vec2<bool>, 28>();
    let var_1 = Struct_4(Struct_1(vec3<bool>(any(vec3<bool>(true, false, true)) | true, false, true), ~(~_wgslsmith_dot_vec2_u32(global0[_wgslsmith_index_u32(u_input.c.x, 15u)], vec2<u32>(u_input.c.x, u_input.c.x))), -firstTrailingBit(-16652i), min(~var_0.xzy & func_5(u_input.c.www, vec4<bool>(false, true, false, true), Struct_2(Struct_1(vec3<bool>(false, false, false), 32885u, -46224i, vec3<i32>(var_0.x, var_0.x, u_input.b), -51245i)), true).zzz, var_0.zwy), reverseBits(_wgslsmith_div_i32(var_0.x | var_0.x, var_0.x))), 711f, Struct_2(Struct_1(!select(vec3<bool>(true, true, false), vec3<bool>(false, false, true), false), u_input.c.x, 1i, vec3<i32>(7348i, _wgslsmith_div_i32(u_input.b, u_input.a), min(var_0.x, i32(-2147483648))), ~(~(-19721i)))));
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        var var_2 = var_1.b;
        var_2 = _wgslsmith_f_op_f32(f32(-1f) * -2320f);
        var var_3 = var_1.b;
        var var_4 = var_1.c;
        break;
    }
    global0 = array<vec2<u32>, 15>();
    return Struct_4(Struct_1(!(!(!var_1.c.a.a)), min(4294967295u, _wgslsmith_clamp_u32(_wgslsmith_dot_vec3_u32(u_input.c.zxw, vec3<u32>(var_1.c.a.b, u_input.c.x, 0u)), 27253u, _wgslsmith_dot_vec2_u32(global0[_wgslsmith_index_u32(u_input.c.x, 15u)], global0[_wgslsmith_index_u32(21545u, 15u)]))), abs(var_0.x), var_1.c.a.d, firstTrailingBit(_wgslsmith_mod_i32(-1i, firstTrailingBit(-2229i)))), -657f, var_1.c);
}

fn func_7(arg_0: i32, arg_1: Struct_4) -> Struct_5 {
    if (arg_1.c.a.a.x) {
        for (var var_0 = 1i; arg_1.c.a.a.x; var_0 = -_wgslsmith_dot_vec3_i32(reverseBits((vec3<i32>(u_input.d, 4832i, -1i) ^ arg_1.c.a.d) ^ reverseBits(vec3<i32>(u_input.b, u_input.d, arg_0))), vec3<i32>(-1i) * -vec3<i32>(u_input.a, arg_1.a.d.x, arg_0))) {
            if (LOOP_COUNTERS[1u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
            break;
        }
        let var_0 = firstTrailingBit(select(vec3<i32>(-8675i, reverseBits(-1i), i32(-1i) * -arg_0), (arg_1.a.d << (u_input.c.zwy % vec3<u32>(32u))) & countOneBits(vec3<i32>(-1i, -15140i, arg_1.c.a.c)), arg_1.a.a));
    }
    var var_0 = vec2<f32>(arg_1.b, arg_1.b);
    switch (u_input.d) {
        case i32(-2147483648): {
            let var_1 = 4294967295u;
            let var_2 = Struct_5(vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(ceil(1070f))))), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(arg_1.b))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -394f)), arg_1.c.a.a.x)), _wgslsmith_f_op_f32(-183f)));
            switch (_wgslsmith_mod_i32(-1624i, func_5(~vec3<u32>(~u_input.c.x, 25741u | arg_1.a.b, select(arg_1.c.a.b, arg_1.c.a.b, arg_1.c.a.a.x)), !select(!vec4<bool>(arg_1.c.a.a.x, arg_1.a.a.x, true, false), select(vec4<bool>(false, true, arg_1.c.a.a.x, arg_1.a.a.x), vec4<bool>(arg_1.a.a.x, true, arg_1.a.a.x, false), arg_1.a.a.x), arg_1.a.a.x | arg_1.a.a.x), Struct_2(func_4().a), arg_1.a.a.x).x)) {
                case i32(-2147483648): {
                    var var_3 = Struct_5(_wgslsmith_f_op_vec3_f32(round(var_2.a)));
                }
                case -20438i: {
                    let var_3 = Struct_3(var_2.a.zy, arg_1.a.a.x, u_input.c.x, arg_1.c.a.d.xy);
                    let var_4 = _wgslsmith_mod_vec4_u32(u_input.c << (vec4<u32>(~u_input.c.x, ~(~1u), _wgslsmith_add_u32(9616u, _wgslsmith_mod_u32(1u, arg_1.c.a.b)), 95749u) % vec4<u32>(32u)), firstTrailingBit(~(u_input.c & u_input.c)) >> (vec4<u32>(u_input.c.x, u_input.c.x, 84781u, 6302u) % vec4<u32>(32u)));
                }
                case 1i: {
                    let var_3 = Struct_5(_wgslsmith_f_op_vec3_f32(var_2.a * vec3<f32>(_wgslsmith_div_f32(-856f, var_0.x), var_2.a.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(-1034f))))));
                }
                case 19299i: {
                    var var_3 = vec3<f32>(-923f, _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(721f + var_0.x) * -1380f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(1000f))));
                    var var_4 = func_4();
                    var_0 = _wgslsmith_div_vec2_f32(var_3.xz, _wgslsmith_f_op_vec2_f32(max(_wgslsmith_f_op_vec2_f32(select(vec2<f32>(arg_1.b, 1559f), var_3.zz, vec2<bool>(var_4.c.a.a.x, false))), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(sign(_wgslsmith_f_op_vec2_f32(-var_3.xx)))))));
                    let var_5 = func_4().c;
                }
                default: {
                    var var_3 = 0i;
                    global0 = array<vec2<u32>, 15>();
                    let var_4 = arg_1.a;
                    var_3 = _wgslsmith_dot_vec4_i32(_wgslsmith_div_vec4_i32(_wgslsmith_add_vec4_i32(-vec4<i32>(u_input.b, var_4.d.x, var_4.d.x, u_input.b) ^ vec4<i32>(arg_1.c.a.e, -11128i, var_4.c, arg_1.c.a.c), _wgslsmith_mult_vec4_i32(select(vec4<i32>(var_4.d.x, u_input.d, arg_0, i32(-2147483648)), vec4<i32>(arg_0, u_input.a, 34806i, arg_1.a.e), vec4<bool>(arg_1.a.a.x, arg_1.c.a.a.x, arg_1.c.a.a.x, var_4.a.x)), vec4<i32>(0i, u_input.d, 25517i, -20775i) ^ vec4<i32>(var_4.e, var_4.d.x, u_input.b, i32(-2147483648)))), vec4<i32>(-arg_0, 252i, arg_1.c.a.e, -max(63144i, 16478i))), reverseBits(vec4<i32>(arg_0, -_wgslsmith_mult_i32(u_input.b, 3247i), _wgslsmith_mod_i32(select(arg_0, arg_1.a.c, arg_1.c.a.a.x), _wgslsmith_mod_i32(22811i, u_input.d)), 42301i)));
                    let var_5 = _wgslsmith_f_op_f32(abs(var_0.x));
                }
            }
        }
        case 34288i: {
            loop {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
                let var_1 = _wgslsmith_mod_u32(~(~arg_1.c.a.b), abs(arg_1.a.b));
                continue;
            }
            var_0 = vec2<f32>(_wgslsmith_f_op_f32(step(-1851f, -460f)), arg_1.b);
            global1 = array<vec2<bool>, 28>();
            let var_1 = arg_1.a.b;
        }
        case 5764i: {
            var_0 = _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_f_op_vec2_f32(vec2<f32>(var_0.x, var_0.x) + vec2<f32>(1011f, -615f)))), vec2<f32>(_wgslsmith_f_op_f32(ceil(846f)), var_0.x))) - _wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(-vec2<f32>(636f, arg_1.b)), vec2<f32>(var_0.x, 522f), arg_1.a.a.xx))))));
            if (arg_1.c.a.a.x) {
            }
            global1 = array<vec2<bool>, 28>();
            if (arg_1.c.a.a.x || false) {
                let var_1 = arg_1.a.b;
                let var_2 = !arg_1.c.a.a;
                let var_3 = _wgslsmith_sub_vec4_u32(max(vec4<u32>(u_input.c.x | min(u_input.c.x, arg_1.c.a.b), countOneBits(~1u), reverseBits(~45066u), u_input.c.x), countOneBits(vec4<u32>(0u, 0u | arg_1.a.b, _wgslsmith_add_u32(var_1, 15676u), var_1))), u_input.c);
                var var_4 = firstLeadingBit(max(-arg_0, ~_wgslsmith_sub_i32(_wgslsmith_mod_i32(arg_0, u_input.d), abs(0i))));
                global0 = array<vec2<u32>, 15>();
            }
            global1 = array<vec2<bool>, 28>();
        }
        default: {
            global1 = array<vec2<bool>, 28>();
            var var_1 = vec2<f32>(_wgslsmith_f_op_f32(trunc(_wgslsmith_div_f32(-752f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(612f)) - 206f)))), _wgslsmith_f_op_f32(-arg_1.b));
            switch (_wgslsmith_sub_i32(_wgslsmith_clamp_i32(arg_1.c.a.d.x, min(arg_0 | (i32(-1i) * -1i), (u_input.a >> (arg_1.a.b % 32u)) & firstLeadingBit(-4050i)), 34869i), _wgslsmith_mod_i32(0i, max(select(-10106i, _wgslsmith_add_i32(arg_1.c.a.e, -41487i), !arg_1.a.a.x), -9637i)))) {
                case -2527i: {
                    var var_2 = arg_1.c;
                    let var_3 = select(vec4<bool>(all(vec2<bool>(all(var_2.a.a.yy), var_2.a.a.x && true)), false, var_2.a.a.x == (u_input.c.x >= ~1u), arg_1.c.a.a.x), select(!vec4<bool>(true, true, arg_1.c.a.a.x, var_2.a.a.x), vec4<bool>(any(arg_1.c.a.a), !var_2.a.a.x || (var_2.a.a.x || var_2.a.a.x), true, var_2.a.a.x), !vec4<bool>(arg_1.a.a.x, true, select(var_2.a.a.x, false, true), true)), func_4().a.a.x);
                    let var_4 = select(min(abs(vec4<i32>(func_4().a.e, _wgslsmith_mod_i32(0i, u_input.a), ~u_input.a, abs(38789i))), ~(~firstLeadingBit(vec4<i32>(var_2.a.e, -6686i, var_2.a.e, 1i)))), vec4<i32>(_wgslsmith_dot_vec2_i32(vec2<i32>(arg_1.a.c, -var_2.a.c), firstLeadingBit(vec2<i32>(var_2.a.c, -5919i)) >> (select(global0[_wgslsmith_index_u32(0u, 15u)], vec2<u32>(0u, var_2.a.b), var_2.a.a.zz) % vec2<u32>(32u))), -1i, _wgslsmith_dot_vec4_i32(abs(vec4<i32>(20827i, u_input.d, 2147483647i, -21648i) & vec4<i32>(u_input.a, arg_1.a.e, -41116i, u_input.a)), vec4<i32>(_wgslsmith_div_i32(0i, -18343i), u_input.a, u_input.d, _wgslsmith_mult_i32(var_2.a.c, arg_0))), -(~(-var_2.a.e))), !select(!select(vec4<bool>(false, var_3.x, arg_1.c.a.a.x, false), var_3, var_3.x), !(!vec4<bool>(var_3.x, var_3.x, true, var_2.a.a.x)), all(!global1[_wgslsmith_index_u32(5262u, 28u)])));
                }
                case 2147483647i: {
                    return Struct_5(_wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(exp2(_wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(-vec3<f32>(226f, -407f, var_1.x)))))))));
                }
                default: {
                    global1 = array<vec2<bool>, 28>();
                }
            }
        }
    }
    var var_1 = -max(reverseBits(~(~vec4<i32>(0i, -11777i, arg_1.c.a.d.x, 45912i))), -(~firstTrailingBit(vec4<i32>(1i, -1i, u_input.d, arg_0))));
    return Struct_5(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(vec3<f32>(arg_1.b, -145f, var_0.x) + vec3<f32>(var_0.x, -720f, 486f))))) * _wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1202f, -1244f, arg_1.b)) - vec3<f32>(var_0.x, arg_1.b, -100f))))));
}

fn func_3() -> f32 {
    global0 = array<vec2<u32>, 15>();
    for (var var_0 = 1i; !select(any(vec3<bool>(true, true, true)) != false, true, select(!all(vec2<bool>(false, true)), true, any(!global1[_wgslsmith_index_u32(u_input.c.x, 28u)]))); var_0 -= 1i) {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        switch (_wgslsmith_mod_i32(u_input.a, -abs(u_input.d)) | _wgslsmith_mult_i32(-1i, ~min(u_input.a, 17653i) & ~(0i | u_input.d))) {
            case -18218i: {
                var var_1 = func_7(i32(-2147483648), func_4());
            }
            case -28199i: {
                break;
            }
            case 24734i: {
                var var_1 = vec3<u32>(func_4().c.a.b, 23518u, u_input.c.x << (u_input.c.x % 32u));
                break;
            }
            default: {
                global1 = array<vec2<bool>, 28>();
                let var_1 = func_4().a;
                global0 = array<vec2<u32>, 15>();
                continue;
            }
        }
        let var_1 = all(select(vec3<bool>(false, any(func_4().c.a.a.zy), true), select(!func_4().a.a, vec3<bool>(func_4().a.a.x, u_input.c.x == u_input.c.x, any(vec3<bool>(false, false, false))), false), !any(vec3<bool>(false, false, true))));
        var var_2 = vec4<bool>(!var_1, true, true, var_1);
        let var_3 = vec4<bool>(true, true, -1i > ~u_input.d, var_1);
    }
    loop {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
    }
    loop {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        loop {
            if (LOOP_COUNTERS[6u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
            global0 = array<vec2<u32>, 15>();
            var var_0 = Struct_5(_wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(vec3<f32>(-828f, 769f, 884f), vec3<f32>(-1145f, -722f, -1000f)) * _wgslsmith_f_op_vec3_f32(-vec3<f32>(1072f, -1000f, 1000f)))), _wgslsmith_f_op_vec3_f32(round(vec3<f32>(_wgslsmith_div_f32(1463f, 810f), _wgslsmith_f_op_f32(trunc(236f)), _wgslsmith_f_op_f32(f32(-1f) * -389f)))))));
            global1 = array<vec2<bool>, 28>();
        }
    }
    global1 = array<vec2<bool>, 28>();
    return func_4().b;
}

fn func_2() -> u32 {
    var var_0 = Struct_5(_wgslsmith_f_op_vec3_f32(-vec3<f32>(1044f, _wgslsmith_f_op_f32(func_3()), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-757f), -1937f)))));
    var var_1 = func_4().a;
    let var_2 = _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(var_0.a.x)) + func_4().b))))));
    var var_3 = func_4().c;
    var var_4 = any(var_1.a);
    return _wgslsmith_clamp_u32(4294967295u, 77657u, _wgslsmith_mod_u32(firstLeadingBit(firstTrailingBit(0u)), max(abs(0u), var_3.a.b)) | ~5826u);
}

fn func_1(arg_0: bool, arg_1: vec2<i32>, arg_2: i32, arg_3: i32) -> f32 {
    global0 = array<vec2<u32>, 15>();
    let var_0 = _wgslsmith_mult_i32(_wgslsmith_dot_vec4_i32(firstLeadingBit(vec4<i32>(_wgslsmith_add_i32(arg_2, arg_1.x), ~(-45895i), -27133i, u_input.a)), _wgslsmith_div_vec4_i32(_wgslsmith_sub_vec4_i32(vec4<i32>(arg_1.x, arg_2, i32(-2147483648), -9606i) | vec4<i32>(arg_3, arg_3, arg_2, arg_1.x), _wgslsmith_sub_vec4_i32(vec4<i32>(i32(-2147483648), u_input.b, 52537i, arg_1.x), vec4<i32>(arg_2, 27300i, 23327i, 33423i))), ~select(vec4<i32>(arg_3, -1i, arg_1.x, arg_2), vec4<i32>(-2509i, arg_1.x, i32(-2147483648), -29053i), vec4<bool>(arg_0, true, arg_0, true)))), arg_1.x);
    global0 = array<vec2<u32>, 15>();
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
    }
    switch (var_0) {
        case i32(-2147483648): {
            var var_1 = Struct_3(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(abs(-874f)), _wgslsmith_f_op_f32(select(272f, -454f, true))))), !arg_0, func_2(), max(_wgslsmith_add_vec2_i32(_wgslsmith_div_vec2_i32(reverseBits(vec2<i32>(i32(-2147483648), -56209i)), abs(arg_1)), ~_wgslsmith_mod_vec2_i32(arg_1, arg_1)), arg_1));
        }
        case 2216i: {
        }
        case -10383i: {
            for (var var_1 = -1i; arg_0; var_1 = -4574i) {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                var_1 = _wgslsmith_clamp_i32(0i, ~3656i, firstLeadingBit((i32(-1i) * -1i) ^ arg_1.x));
                let var_2 = all(!select(select(!vec4<bool>(false, arg_0, arg_0, false), select(vec4<bool>(false, arg_0, false, false), vec4<bool>(arg_0, arg_0, arg_0, arg_0), vec4<bool>(arg_0, true, arg_0, arg_0)), arg_0), select(!vec4<bool>(false, arg_0, true, arg_0), !vec4<bool>(true, arg_0, arg_0, true), false), !arg_0));
            }
            let var_1 = func_4().c;
            var var_2 = func_4();
            for (var var_3 = 0i; !select(true, true, var_2.c.a.a.x); var_3 += 1i) {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                continue;
            }
            loop {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                let var_3 = _wgslsmith_mult_vec2_i32(vec2<i32>(var_0, -((i32(-1i) * -30383i) >> (1u % 32u))), ~vec2<i32>(i32(-1i) * -var_0, var_1.a.c));
                var_2 = Struct_4(func_4().a, -983f, var_2.c);
                continue;
            }
        }
        case -1i: {
            let var_1 = _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(1833f, _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-631f), 881f)), func_4().b, _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(sign(-1867f))))) - _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(floor(860f)), 1042f, _wgslsmith_f_op_f32(138f - 733f), _wgslsmith_f_op_f32(-764f)))), _wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(abs(vec4<f32>(1000f, -1816f, 2268f, -404f)))) * vec4<f32>(1f, 1f, 1f, 1f)))));
            switch (u_input.a) {
                case 0i: {
                    global0 = array<vec2<u32>, 15>();
                    global0 = array<vec2<u32>, 15>();
                    global0 = array<vec2<u32>, 15>();
                    let var_2 = Struct_3(vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1637f * _wgslsmith_f_op_f32(var_1.x + var_1.x))), _wgslsmith_f_op_f32(-1f)), any(global1[_wgslsmith_index_u32(firstLeadingBit(0u), 28u)]), 0u, arg_1);
                }
                case -58873i: {
                    let var_2 = vec4<u32>(~(~u_input.c.x) << (18335u % 32u), ~(~max(~u_input.c.x, ~4294967295u)), ~firstLeadingBit(u_input.c.x), ~u_input.c.x | u_input.c.x);
                    global1 = array<vec2<bool>, 28>();
                    global0 = array<vec2<u32>, 15>();
                    var var_3 = ~firstTrailingBit(max(var_2, ~vec4<u32>(u_input.c.x, var_2.x, 4294967295u, 12696u)) << (_wgslsmith_div_vec4_u32(_wgslsmith_mod_vec4_u32(u_input.c, u_input.c), ~u_input.c) % vec4<u32>(32u)));
                    var var_4 = (max(vec3<u32>(~u_input.c.x, _wgslsmith_mult_u32(1u, 60353u), var_2.x), _wgslsmith_mod_vec3_u32(_wgslsmith_clamp_vec3_u32(var_3.wyw, vec3<u32>(1u, var_2.x, 0u), var_2.www), vec3<u32>(u_input.c.x, 4294967295u, u_input.c.x))) | var_3.zwx) & select(var_3.yxw, vec3<u32>(~var_3.x, ~1u, _wgslsmith_dot_vec4_u32(u_input.c, vec4<u32>(u_input.c.x, var_3.x, 33743u, var_2.x))) ^ ~(~var_3.yyx), arg_0);
                }
                case 2877i: {
                    var var_2 = ~(~vec3<u32>(firstTrailingBit(~24922u), ~_wgslsmith_mult_u32(1u, 1u), _wgslsmith_dot_vec2_u32(countOneBits(vec2<u32>(4294967295u, 4294967295u)), max(global0[_wgslsmith_index_u32(1u, 15u)], u_input.c.wz))));
                }
                case -25256i: {
                    global1 = array<vec2<bool>, 28>();
                    var var_2 = func_4();
                    var var_3 = func_4();
                    let var_4 = select(vec2<bool>(all(select(select(vec2<bool>(var_3.a.a.x, var_2.c.a.a.x), vec2<bool>(true, var_2.c.a.a.x), vec2<bool>(false, arg_0)), !var_3.a.a.xz, any(vec4<bool>(true, arg_0, false, false)))), false), !vec2<bool>(true, !all(vec3<bool>(false, var_2.a.a.x, true))), -arg_2 == -678i);
                }
                default: {
                    let var_2 = u_input.d;
                    var var_3 = func_4();
                    var var_4 = Struct_1(select(var_3.a.a, !select(func_4().a.a, !var_3.c.a.a, !vec3<bool>(false, true, var_3.a.a.x)), var_3.c.a.a), u_input.c.x, _wgslsmith_sub_i32(~arg_3, ~6724i) << ((_wgslsmith_mult_u32(u_input.c.x, ~var_3.c.a.b) | ~(~var_3.c.a.b)) % 32u), ~(-(~var_3.c.a.d)), arg_2);
                    var_3 = Struct_4(Struct_1(!(!select(var_3.a.a, var_4.a, var_3.c.a.a)), var_3.c.a.b, ~(-var_4.c), _wgslsmith_clamp_vec3_i32(var_3.c.a.d & vec3<i32>(-32641i, i32(-2147483648), -1i), vec3<i32>(_wgslsmith_dot_vec2_i32(vec2<i32>(var_4.d.x, var_4.c), vec2<i32>(var_0, u_input.b)), var_0, -1i | var_0), var_4.d), -(~(-arg_2))), -308f, func_4().c);
                    let var_5 = -_wgslsmith_clamp_vec2_i32(~func_4().a.d.xx, vec2<i32>(countOneBits(arg_2) & arg_3, arg_3), -(-var_4.d.yx | var_3.c.a.d.yx));
                }
            }
            let var_2 = vec3<f32>(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-189f), _wgslsmith_f_op_f32(-1221f - -118f))), _wgslsmith_f_op_f32(-871f), _wgslsmith_f_op_f32(-1066f));
            global0 = array<vec2<u32>, 15>();
            let var_3 = func_7(arg_1.x & ~(-25043i), Struct_4(func_4().c.a, -1057f, func_4().c));
        }
        default: {
            global0 = array<vec2<u32>, 15>();
        }
    }
    return _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-682f + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -2139f))), _wgslsmith_f_op_f32(385f + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -201f))))));
}

@compute
@workgroup_size(1)
fn main() {
    switch (abs(-50575i)) {
        case 115539i: {
            loop {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                continue;
            }
            var var_0 = any(select(vec4<bool>(true, true, true, true), select(vec4<bool>(true, false, true, true), vec4<bool>(false, all(global1[_wgslsmith_index_u32(8435u, 28u)]), true, u_input.c.x <= u_input.c.x), vec4<bool>(true, true, false, all(vec2<bool>(false, false)))), any(vec4<bool>(true, true, true, true))));
            let var_1 = Struct_4(Struct_1(vec3<bool>(all(vec3<bool>(true, true, true)), true, _wgslsmith_div_i32(12469i, u_input.b) >= u_input.d), firstLeadingBit(1u), ~49573i, vec3<i32>(i32(-1i) * -1i, 2147483647i, _wgslsmith_dot_vec2_i32(vec2<i32>(8396i, u_input.b), vec2<i32>(u_input.d, -16618i)) | _wgslsmith_clamp_i32(u_input.a, -16435i, 4897i)), ~(~u_input.b)), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(func_1(~0u == max(u_input.c.x, 4294967295u), -(~vec2<i32>(0i, -2826i)), -(i32(-1i) * -1i), u_input.b)), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-193f), _wgslsmith_f_op_f32(-421f * -324f))), _wgslsmith_f_op_f32(max(546f, _wgslsmith_div_f32(-577f, -100f))))))), func_4().c);
            loop {
                if (LOOP_COUNTERS[12u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
                var_0 = any(var_1.a.a.yz);
                global1 = array<vec2<bool>, 28>();
            }
            let var_2 = ~firstTrailingBit(~vec4<u32>(1u, u_input.c.x | u_input.c.x, 4294967295u, u_input.c.x));
        }
        default: {
            let var_0 = Struct_1(func_4().a.a, ~_wgslsmith_mod_u32(~_wgslsmith_sub_u32(u_input.c.x, 0u), ~(u_input.c.x | u_input.c.x)), -(~countOneBits(~(-1i))), vec3<i32>(func_6(_wgslsmith_mult_u32(u_input.c.x, u_input.c.x), 2147483647i), -5149i, i32(-1i) * -28814i), ~(~_wgslsmith_div_i32(abs(u_input.d), u_input.d)));
            if (false) {
                global1 = array<vec2<bool>, 28>();
                var var_1 = ~u_input.c.x;
                var_1 = _wgslsmith_add_u32(~26360u, u_input.c.x) ^ ~61997u;
                var var_2 = !select(vec2<bool>(_wgslsmith_f_op_f32(-498f * -3735f) > func_4().b, var_0.a.x), global1[_wgslsmith_index_u32(53237u, 28u)], vec2<bool>(false, true));
            }
            for (var var_1 = 1i; false; global0 = array<vec2<u32>, 15>()) {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                let var_2 = ~(~(~u_input.c.ywy) ^ firstLeadingBit(abs(u_input.c.yyw)));
                break;
            }
            var var_1 = u_input.c.zyz;
        }
    }
    let var_0 = 0u;
    loop {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        if (any(!(!vec4<bool>(true, u_input.c.x <= var_0, var_0 > var_0, false)))) {
            global0 = array<vec2<u32>, 15>();
            break;
        }
        continue;
    }
    if (_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_1(all(vec4<bool>(false, false, true, true)), reverseBits(vec2<i32>(24279i, 0i)), u_input.b << (0u % 32u), -1i))))) != -423f) {
        switch (~(reverseBits(max(abs(u_input.a), ~u_input.a)) | 2147483647i)) {
            default: {
                global0 = array<vec2<u32>, 15>();
                let var_1 = vec4<bool>(true, true, true, true);
                global1 = array<vec2<bool>, 28>();
                var var_2 = Struct_2(Struct_1(var_1.yxw, reverseBits(0u), i32(-2147483648), select(_wgslsmith_div_vec3_i32(func_5(u_input.c.zxz, vec4<bool>(false, true, var_1.x, var_1.x), Struct_2(Struct_1(vec3<bool>(false, var_1.x, false), 115807u, u_input.b, vec3<i32>(u_input.a, 2147483647i, 2147483647i), u_input.b)), false).yyw, firstLeadingBit(vec3<i32>(0i, i32(-2147483648), u_input.a))), vec3<i32>(u_input.a, 2147483647i ^ u_input.b, -25082i), var_1.x), -1i));
                var var_3 = var_2.a.d.yz;
            }
        }
        global1 = array<vec2<bool>, 28>();
        switch (u_input.d) {
            case -7611i: {
                let var_1 = max(countOneBits(_wgslsmith_div_vec3_i32(-vec3<i32>(-7264i, u_input.b, -1i) >> (firstTrailingBit(vec3<u32>(4294967295u, 4294967295u, var_0)) % vec3<u32>(32u)), func_4().c.a.d)), _wgslsmith_mult_vec3_i32(_wgslsmith_sub_vec3_i32(func_5(~u_input.c.xxy, select(vec4<bool>(true, false, false, true), vec4<bool>(false, true, true, false), false), func_4().c, false).yzy, vec3<i32>(u_input.b | 13784i, u_input.a, 2147483647i | u_input.a)), -(~_wgslsmith_div_vec3_i32(vec3<i32>(u_input.d, u_input.a, u_input.a), vec3<i32>(u_input.d, -37953i, 18770i)))));
                var var_2 = var_0;
                var_2 = _wgslsmith_dot_vec3_u32(u_input.c.yyw, ~vec3<u32>(_wgslsmith_clamp_u32(_wgslsmith_dot_vec3_u32(vec3<u32>(u_input.c.x, 15569u, 4294967295u), u_input.c.xyy), 1u, var_0), ~countOneBits(9652u), 4294967295u));
                let var_3 = func_4().c;
                return;
            }
            case -14729i: {
                var var_1 = _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -1810f), _wgslsmith_f_op_f32(-1f)));
                var var_2 = Struct_3(_wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(-1022f, 798f) - vec2<f32>(-958f, -1000f)) + _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(round(vec2<f32>(1032f, -568f))))), vec2<f32>(_wgslsmith_f_op_f32(-718f), _wgslsmith_f_op_f32(abs(-456f))), vec2<bool>(true, true))), !(u_input.b >= 7917i), ~_wgslsmith_sub_u32(abs(u_input.c.x & u_input.c.x), _wgslsmith_add_u32(_wgslsmith_mult_u32(u_input.c.x, var_0), u_input.c.x)), ~(-vec2<i32>(u_input.a, u_input.a)) >> (reverseBits(firstLeadingBit(_wgslsmith_mod_vec2_u32(vec2<u32>(u_input.c.x, 4294967295u), global0[_wgslsmith_index_u32(49806u, 15u)]))) % vec2<u32>(32u)));
                global1 = array<vec2<bool>, 28>();
            }
            default: {
                let var_1 = func_4().c;
            }
        }
        switch (~u_input.d) {
            default: {
                global0 = array<vec2<u32>, 15>();
                return;
            }
        }
        global0 = array<vec2<u32>, 15>();
    }
    if (true) {
        var var_1 = Struct_2(func_4().a);
        switch (_wgslsmith_mod_i32(i32(-2147483648) << (~(~(~u_input.c.x)) % 32u), firstTrailingBit(~var_1.a.e))) {
            case i32(-2147483648): {
                let var_2 = false;
                var_1 = Struct_2(Struct_1(!(!var_1.a.a), 0u, -u_input.d ^ -52885i, abs(vec3<i32>(u_input.d, _wgslsmith_mult_i32(0i, var_1.a.d.x), 0i)), u_input.d));
            }
            default: {
            }
        }
        if (_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-562f - -337f) * _wgslsmith_f_op_f32(floor(-212f)))) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(303f))))) <= _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-440f - 1469f)) - _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(f32(-1f) * -559f), _wgslsmith_f_op_f32(f32(-1f) * -1315f))))))) {
            var var_2 = true;
            let var_3 = Struct_3(_wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(100f, -270f))), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_div_vec2_f32(vec2<f32>(-1059f, 184f), vec2<f32>(374f, 962f)))) + vec2<f32>(_wgslsmith_f_op_f32(2517f + 1610f), _wgslsmith_f_op_f32(-1099f))))), var_1.a.a.x, _wgslsmith_dot_vec2_u32(vec2<u32>(reverseBits(var_1.a.b), _wgslsmith_dot_vec3_u32(vec3<u32>(var_0, var_0, 4294967295u), _wgslsmith_mult_vec3_u32(vec3<u32>(var_1.a.b, 27713u, var_0), vec3<u32>(u_input.c.x, 33543u, var_0)))), ~u_input.c.yy), var_1.a.d.xz);
            let var_4 = _wgslsmith_clamp_i32(var_3.d.x, _wgslsmith_mod_i32(func_4().a.e, -countOneBits(_wgslsmith_sub_i32(-9433i, -20496i))), -1i);
            var var_5 = var_1.a;
        }
        switch (reverseBits(func_5(select(vec3<u32>(_wgslsmith_div_u32(u_input.c.x, 15728u), 48393u << (u_input.c.x % 32u), 38853u), u_input.c.wyx, 6724u == ~u_input.c.x), select(vec4<bool>(var_1.a.a.x | true, true, any(var_1.a.a), true), select(select(vec4<bool>(var_1.a.a.x, false, var_1.a.a.x, var_1.a.a.x), vec4<bool>(var_1.a.a.x, true, var_1.a.a.x, var_1.a.a.x), true), select(vec4<bool>(true, var_1.a.a.x, false, var_1.a.a.x), vec4<bool>(var_1.a.a.x, var_1.a.a.x, var_1.a.a.x, false), true), true), all(!var_1.a.a)), Struct_2(var_1.a), false).x)) {
            case 0i: {
                var_1 = Struct_2(func_4().a);
            }
            case 13527i: {
                var var_2 = ~(~(~u_input.c.x));
            }
            case -3023i: {
                var var_2 = _wgslsmith_f_op_f32(f32(-1f) * -1097f);
                var_2 = -514f;
                let var_3 = var_1.a.d.xx;
                let var_4 = _wgslsmith_f_op_f32(1084f - 522f);
            }
            case 1i: {
                let var_2 = func_4().a;
                global1 = array<vec2<bool>, 28>();
            }
            default: {
                var var_2 = !(var_0 == ~var_0);
                let var_3 = Struct_2(func_4().a);
                var var_4 = Struct_3(_wgslsmith_f_op_vec2_f32(sign(vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -207f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(-1128f)))))), !func_4().c.a.a.x, ~_wgslsmith_div_u32(_wgslsmith_dot_vec3_u32(firstLeadingBit(vec3<u32>(u_input.c.x, 1u, 4294967295u)), vec3<u32>(var_3.a.b, var_1.a.b, u_input.c.x)), min(u_input.c.x, ~0u)), -vec2<i32>(var_1.a.e & func_4().c.a.c, 1i));
                return;
            }
        }
    }
    for (var var_1 = 0i; var_1 < 83848i; var_1 += 1i) {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
        switch (select(_wgslsmith_clamp_i32(0i, _wgslsmith_clamp_i32(countOneBits(26203i), 2147483647i, _wgslsmith_sub_i32(44142i, -1i)), abs(u_input.b)) | -33802i, ~(-15158i), !(_wgslsmith_div_u32(1u, 11991u) <= (~12368u ^ var_0)))) {
            default: {
                var var_2 = _wgslsmith_clamp_vec2_i32(-(~vec2<i32>(i32(-2147483648), 0i)) & select(vec2<i32>(u_input.d, u_input.b), firstLeadingBit(vec2<i32>(-17988i, 0i)), true), select(vec2<i32>(u_input.d, i32(-2147483648)) ^ vec2<i32>(-23031i, u_input.d), firstLeadingBit(vec2<i32>(27688i, u_input.a)), true) >> (max(vec2<u32>(1u, var_0), ~u_input.c.xz) % vec2<u32>(32u)), vec2<i32>(-42547i, _wgslsmith_mult_i32(~u_input.d, -7299i))) >> (global0[_wgslsmith_index_u32(select(~var_0, 1361u, !(!all(vec3<bool>(false, true, false)))), 15u)] % vec2<u32>(32u));
                let var_3 = Struct_5(_wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(1f, 1f, 1f))))));
                var var_4 = _wgslsmith_f_op_f32(round(var_3.a.x));
                let var_5 = func_4().c;
                var var_6 = var_3.a.x;
            }
        }
        break;
    }
    if (true) {
        var var_1 = ~_wgslsmith_mod_vec2_u32(vec2<u32>(select(_wgslsmith_dot_vec2_u32(global0[_wgslsmith_index_u32(0u, 15u)], vec2<u32>(var_0, var_0)), _wgslsmith_sub_u32(1u, u_input.c.x), true), ~var_0), u_input.c.yz);
        let var_2 = func_7(select(u_input.d, i32(-1i) * -26233i, func_4().c.a.a.x), Struct_4(func_4().a, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(func_4().b)) + _wgslsmith_f_op_f32(func_1(any(global1[_wgslsmith_index_u32(u_input.c.x, 28u)]), vec2<i32>(u_input.d, u_input.d) | vec2<i32>(u_input.b, -26720i), i32(-2147483648) >> (var_1.x % 32u), 0i))), func_4().c));
        let var_3 = vec3<bool>(-1i == _wgslsmith_dot_vec2_i32(vec2<i32>(_wgslsmith_add_i32(u_input.a, u_input.a), u_input.a), vec2<i32>(u_input.a, u_input.d) << (~global0[_wgslsmith_index_u32(var_1.x, 15u)] % vec2<u32>(32u))), true, all(!func_4().a.a));
        global1 = array<vec2<bool>, 28>();
        var_1 = ~(~u_input.c.zw);
    }
    let var_1 = func_7(u_input.b, Struct_4(Struct_1(vec3<bool>(u_input.a <= -1286i, true, true), _wgslsmith_sub_u32(select(var_0, 57856u, true), firstLeadingBit(u_input.c.x)), _wgslsmith_add_i32(u_input.a, u_input.b), vec3<i32>(u_input.b ^ 12840i, ~u_input.d, select(13746i, i32(-2147483648), true)), u_input.d | _wgslsmith_dot_vec2_i32(vec2<i32>(u_input.d, -73920i), vec2<i32>(u_input.d, u_input.a))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(267f, -272f)), _wgslsmith_f_op_f32(trunc(_wgslsmith_div_f32(-2445f, 639f)))), Struct_2(func_4().c.a)));
    let x = u_input.a;
    s_output = StorageBuffer(~u_input.c.wxy >> (~vec3<u32>(~var_0, ~u_input.c.x, _wgslsmith_mult_u32(29190u, 0u)) % vec3<u32>(32u)), u_input.b, _wgslsmith_f_op_f32(-_wgslsmith_div_f32(-1000f, func_7(countOneBits(u_input.a), func_4()).a.x)), u_input.d, ~_wgslsmith_clamp_vec4_u32(u_input.c, vec4<u32>(~var_0, 46092u, ~4294967295u, _wgslsmith_sub_u32(var_0, var_0)), _wgslsmith_mod_vec4_u32(reverseBits(vec4<u32>(u_input.c.x, 25235u, var_0, var_0)), _wgslsmith_mod_vec4_u32(vec4<u32>(4294967295u, 718u, var_0, var_0), vec4<u32>(1u, u_input.c.x, u_input.c.x, 4294967295u)))));
}

`;