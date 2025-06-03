export const input = [11,82,149,70,0,85,5,113,209,21,188,53,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [11,82,149,70,0,85,5,113,209,21,188,53,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[11,82,149,70,0,85,5,113,209,21,188,53]}
// Seed: 17714700009931403096

struct Struct_1 {
    a: vec3<i32>,
    b: u32,
    c: vec2<u32>,
    d: vec3<f32>,
    e: vec4<u32>,
}

struct Struct_2 {
    a: f32,
}

struct Struct_3 {
    a: Struct_1,
    b: f32,
}

struct Struct_4 {
    a: Struct_2,
    b: Struct_2,
    c: Struct_2,
    d: vec4<f32>,
}

struct Struct_5 {
    a: bool,
    b: vec2<bool>,
    c: Struct_1,
}

struct UniformBuffer {
    a: i32,
    b: i32,
    c: i32,
}

struct StorageBuffer {
    a: i32,
    b: f32,
    c: vec2<f32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: Struct_1;

var<private> global1: Struct_1 = Struct_1(vec3<i32>(1i, 46766i, 12579i), 21982u, vec2<u32>(1u, 0u), vec3<f32>(1057f, 1014f, 1216f), vec4<u32>(4294967295u, 0u, 0u, 8639u));

var<private> global2: Struct_3;

var<private> global3: f32 = 166f;

var<private> LOOP_COUNTERS: array<u32, 24>;

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn func_6(arg_0: u32, arg_1: bool) -> vec2<i32> {
    let var_0 = firstTrailingBit(global2.a.a.zx);
    switch (~_wgslsmith_sub_i32(-(~2147483647i), global0.a.x)) {
        case 0i: {
            let var_1 = _wgslsmith_div_u32(abs(56168u), global2.a.b);
            var var_2 = abs(vec2<u32>(~global0.c.x, arg_0));
            global0 = global2.a;
            loop {
                if (LOOP_COUNTERS[0u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
                var var_3 = _wgslsmith_f_op_vec4_f32(vec4<f32>(2357f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(global0.d.x + -1000f)), _wgslsmith_f_op_f32(108f * _wgslsmith_f_op_f32(-_wgslsmith_div_f32(global2.a.d.x, -461f))), global2.a.d.x) + _wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(max(vec4<f32>(global1.d.x, -553f, 1299f, global1.d.x), vec4<f32>(885f, global1.d.x, 1228f, -667f))), vec4<f32>(global1.d.x, -322f, -1609f, global1.d.x), select(vec4<bool>(false, arg_1, false, true), vec4<bool>(arg_1, arg_1, false, false), true)))))));
                global2 = Struct_3(global2.a, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(global2.a.d.x, global2.b)) * _wgslsmith_f_op_f32(step(_wgslsmith_div_f32(-381f, 483f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(global2.a.d.x - global2.a.d.x) - _wgslsmith_div_f32(-559f, var_3.x))))));
                var var_4 = _wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(exp2(_wgslsmith_div_vec3_f32(global2.a.d, global0.d)))), _wgslsmith_f_op_vec3_f32(-vec3<f32>(global2.a.d.x, _wgslsmith_f_op_f32(-global0.d.x), global2.b))) * _wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(-global0.d.x), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(global2.b - 327f), _wgslsmith_f_op_f32(round(var_3.x)), select(true, true, false))), 1087f)));
                let var_5 = !vec4<bool>(arg_1, !(-2147483647i == -global0.a.x), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(var_3.x, global2.a.d.x)) != _wgslsmith_f_op_f32(sign(var_3.x)), !arg_1);
            }
        }
        case 2147483647i: {
            for (var var_1 = 2147483647i; arg_1; global3 = global1.d.x) {
                if (LOOP_COUNTERS[1u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
                let var_2 = Struct_5(all(!(!select(vec2<bool>(false, arg_1), vec2<bool>(false, arg_1), arg_1))), vec2<bool>(true, any(select(!vec4<bool>(true, true, arg_1, arg_1), vec4<bool>(arg_1, arg_1, arg_1, false), select(vec4<bool>(arg_1, arg_1, arg_1, arg_1), vec4<bool>(false, false, arg_1, arg_1), vec4<bool>(arg_1, arg_1, arg_1, arg_1))))), global2.a);
                let var_3 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_div_f32(-1284f, -816f))));
            }
            global2 = Struct_3(global2.a, -867f);
        }
        default: {
            for (; any(!select(!vec2<bool>(arg_1, true), select(vec2<bool>(true, arg_1), vec2<bool>(arg_1, arg_1), vec2<bool>(arg_1, arg_1)), select(vec2<bool>(false, arg_1), vec2<bool>(arg_1, false), vec2<bool>(true, true)))) & !select(any(select(vec2<bool>(arg_1, false), vec2<bool>(false, arg_1), vec2<bool>(true, false))), any(!vec3<bool>(false, true, arg_1)), global1.c.x != 1351u); ) {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
                let var_1 = global0.a.x;
                break;
            }
            global2 = Struct_3(global2.a, _wgslsmith_f_op_f32(exp2(_wgslsmith_div_f32(_wgslsmith_f_op_f32(round(global0.d.x)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -933f))))));
        }
    }
    var var_1 = global2.a.a.x | _wgslsmith_dot_vec4_i32(_wgslsmith_mod_vec4_i32(_wgslsmith_clamp_vec4_i32(abs(vec4<i32>(-54789i, 47972i, global2.a.a.x, u_input.a)), ~vec4<i32>(-1i, 235i, global1.a.x, u_input.b), vec4<i32>(i32(-2147483648), global2.a.a.x, -34807i, var_0.x)), abs(vec4<i32>(1i, var_0.x, global1.a.x, global1.a.x))), vec4<i32>(-3131i, u_input.a, -5773i, _wgslsmith_div_i32(_wgslsmith_dot_vec4_i32(vec4<i32>(25554i, i32(-2147483648), 1i, global0.a.x), vec4<i32>(7586i, 24021i, var_0.x, global1.a.x)), global0.a.x)));
    let var_2 = _wgslsmith_clamp_u32(max(reverseBits(0u | global2.a.e.x), global2.a.e.x) & _wgslsmith_dot_vec4_u32(vec4<u32>(_wgslsmith_mult_u32(53385u, 30329u), 49721u, 1u ^ global0.b, 20261u << (global0.b % 32u)), _wgslsmith_sub_vec4_u32(vec4<u32>(4294967295u, arg_0, global2.a.b, 4294967295u), vec4<u32>(40462u, arg_0, global0.c.x, global2.a.b))), ~global0.c.x, arg_0);
    global1 = Struct_1(vec3<i32>(global1.a.x, reverseBits(-27371i) & abs(global1.a.x), _wgslsmith_dot_vec4_i32(vec4<i32>(-1i, -2147483647i, var_0.x, var_0.x), abs(vec4<i32>(2147483647i, i32(-2147483648), var_0.x, u_input.a)))), 43723u, countOneBits((global0.c | max(global1.e.yy, vec2<u32>(var_2, var_2))) << (global0.c % vec2<u32>(32u))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(select(vec3<f32>(global1.d.x, global1.d.x, global0.d.x), _wgslsmith_f_op_vec3_f32(-vec3<f32>(global0.d.x, global0.d.x, global1.d.x)), vec3<bool>(false, false, arg_1))))), min(global1.e, ~global2.a.e));
    return select(~min(firstTrailingBit(var_0 ^ var_0), abs(_wgslsmith_mod_vec2_i32(vec2<i32>(0i, 19908i), var_0))), vec2<i32>(select(i32(-1i) * -global1.a.x, ~reverseBits(global0.a.x), arg_1), 2147483647i), any(!(!vec2<bool>(arg_1, arg_1))));
}

fn func_5() -> Struct_5 {
    var var_0 = select(_wgslsmith_clamp_vec2_i32(global1.a.yy, _wgslsmith_clamp_vec2_i32((global1.a.zy | vec2<i32>(1i, -1i)) | global2.a.a.xy, global0.a.yz, func_6(global1.e.x, true)), abs(min(vec2<i32>(-32525i, 13278i), vec2<i32>(u_input.c, 0i))) >> (~global2.a.e.wy % vec2<u32>(32u))), vec2<i32>(1i, _wgslsmith_add_i32(~(global0.a.x | u_input.a), 0i)), true);
    let var_1 = _wgslsmith_div_vec3_u32(vec3<u32>(0u, _wgslsmith_clamp_u32(firstTrailingBit(global0.c.x), _wgslsmith_dot_vec3_u32(global1.e.yyy, global2.a.e.wyy), _wgslsmith_dot_vec2_u32(global2.a.e.zy, vec2<u32>(global1.b, global1.b))), reverseBits(~global1.c.x)) << (~vec3<u32>(4294967295u, ~global2.a.b, 4294967295u >> (global1.e.x % 32u)) % vec3<u32>(32u)), _wgslsmith_mod_vec3_u32(~global1.e.yyw, vec3<u32>(23975u, 0u, reverseBits(min(4294967295u, 6848u)))));
    let var_2 = vec3<i32>(_wgslsmith_dot_vec4_i32(firstLeadingBit(vec4<i32>(1i, -8589i, global0.a.x, _wgslsmith_div_i32(0i, u_input.c))), ~(vec4<i32>(35812i, 2147483647i, global0.a.x, global1.a.x) ^ vec4<i32>(2485i, global1.a.x, 22612i, u_input.c))), global1.a.x, global1.a.x);
    global3 = _wgslsmith_f_op_f32(-103f);
    var var_3 = ~vec2<i32>(global0.a.x, _wgslsmith_add_i32(0i, 2147483647i));
    return Struct_5(false, select(select(select(select(vec2<bool>(true, true), vec2<bool>(false, true), false), select(vec2<bool>(true, true), vec2<bool>(false, false), vec2<bool>(true, false)), vec2<bool>(true, true)), vec2<bool>(true, true), !select(vec2<bool>(false, true), vec2<bool>(false, false), true)), vec2<bool>(true, true), select(any(select(vec2<bool>(true, false), vec2<bool>(true, true), false)), !all(vec3<bool>(true, false, true)), false)), Struct_1(vec3<i32>(global0.a.x, -func_6(global1.e.x, false).x, -1i), ~_wgslsmith_mult_u32(global2.a.e.x >> (20604u % 32u), min(0u, 1u)), select(global1.e.ww, _wgslsmith_mult_vec2_u32(select(global2.a.e.ww, vec2<u32>(global0.e.x, global1.b), vec2<bool>(true, false)), _wgslsmith_add_vec2_u32(vec2<u32>(global1.e.x, global2.a.e.x), global2.a.e.xw)), all(vec3<bool>(false, false, false))), _wgslsmith_f_op_vec3_f32(global1.d - _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-global1.d) + _wgslsmith_f_op_vec3_f32(-vec3<f32>(global1.d.x, -556f, -104f)))), reverseBits(global1.e)));
}

fn func_4() -> Struct_1 {
    var var_0 = global2.b;
    global3 = _wgslsmith_f_op_f32(2430f + global0.d.x);
    if (true) {
        let var_1 = func_5();
        var var_2 = select(!select(select(vec4<bool>(var_1.b.x, false, var_1.a, var_1.a), !vec4<bool>(var_1.a, false, true, false), global0.d.x != 1140f), !select(vec4<bool>(var_1.a, true, var_1.a, var_1.a), vec4<bool>(true, true, true, false), vec4<bool>(false, var_1.b.x, var_1.b.x, var_1.a)), vec4<bool>(false, true, true, var_1.b.x)), select(vec4<bool>(true, _wgslsmith_f_op_f32(abs(492f)) > _wgslsmith_f_op_f32(min(global0.d.x, -1389f)), false, (i32(-1i) * i32(-2147483648)) <= ~u_input.c), vec4<bool>(true, !(1526f == global1.d.x), !any(var_1.b), 10088i >= (global2.a.a.x << (30049u % 32u))), !(!vec4<bool>(var_1.b.x, false, var_1.a, false))), select(!vec4<bool>(var_1.a && var_1.b.x, false, true, true), vec4<bool>(!(var_1.b.x == false), any(select(var_1.b, var_1.b, vec2<bool>(var_1.a, var_1.b.x))), _wgslsmith_f_op_f32(select(global1.d.x, 547f, true)) >= _wgslsmith_f_op_f32(-295f - -1028f), true), select(vec4<bool>(!var_1.b.x, true, all(vec4<bool>(var_1.b.x, false, true, true)), true), select(select(vec4<bool>(true, var_1.a, var_1.b.x, var_1.b.x), vec4<bool>(var_1.b.x, var_1.b.x, false, var_1.a), true), !vec4<bool>(true, false, var_1.a, true), !vec4<bool>(true, true, var_1.b.x, var_1.a)), all(vec3<bool>(true, true, true)))));
        global2 = Struct_3(global2.a, _wgslsmith_f_op_f32(sign(global2.a.d.x)));
    }
    global2 = Struct_3(Struct_1(vec3<i32>(firstTrailingBit(_wgslsmith_mult_i32(-6689i, -40934i)), global2.a.a.x, _wgslsmith_mod_i32(~2054i, u_input.c)), ~_wgslsmith_mod_u32(abs(global0.b), 4294967295u), vec2<u32>(global2.a.c.x, 0u), _wgslsmith_f_op_vec3_f32(global0.d - _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1096f, global2.b, global2.a.d.x)), _wgslsmith_f_op_vec3_f32(ceil(vec3<f32>(global2.b, global2.a.d.x, 893f))), select(vec3<bool>(false, true, true), vec3<bool>(false, true, true), false)))), ~(~vec4<u32>(global2.a.c.x, global1.b, 8741u, global1.e.x)) ^ firstTrailingBit(_wgslsmith_sub_vec4_u32(global1.e, vec4<u32>(57264u, global2.a.c.x, 37702u, global0.c.x)))), _wgslsmith_f_op_f32(global1.d.x * global2.b));
    for (var var_1 = -2145i; !(false || (!(1u < global0.e.x) == any(vec4<bool>(true, false, true, true)))); var_1 -= 1i) {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        loop {
            if (LOOP_COUNTERS[4u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
            let var_2 = Struct_5(!any(select(vec4<bool>(false, false, true, false), select(vec4<bool>(false, true, false, false), vec4<bool>(true, false, false, true), vec4<bool>(true, false, true, true)), select(vec4<bool>(true, false, true, true), vec4<bool>(true, true, false, false), vec4<bool>(false, false, true, false)))), vec2<bool>(any(vec2<bool>(true, true)), true), global2.a);
            var var_3 = select(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_2.c.d.x) - -122f))) <= _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(round(global1.d.x)))), !(func_5().c.a.x <= -1i), all(vec4<bool>(var_2.a, any(select(vec4<bool>(var_2.a, false, true, var_2.b.x), vec4<bool>(var_2.b.x, false, true, true), false)), false, var_2.b.x)));
        }
        break;
    }
    return Struct_1(global1.a, 4294967295u, ~(~(~vec2<u32>(1u, 4294967295u))), global2.a.d, _wgslsmith_mult_vec4_u32(~_wgslsmith_div_vec4_u32(~global0.e, ~vec4<u32>(20758u, 0u, global1.e.x, 34683u)), select(min(vec4<u32>(global1.c.x, 60334u, 11817u, 1u), vec4<u32>(1u, 96069u, 41777u, global2.a.e.x)), ~_wgslsmith_div_vec4_u32(vec4<u32>(global1.e.x, global0.c.x, 1u, 7091u), global0.e), select(select(vec4<bool>(false, false, false, true), vec4<bool>(false, true, true, false), true), vec4<bool>(true, true, true, true), vec4<bool>(true, true, false, false)))));
}

fn func_7(arg_0: Struct_1, arg_1: Struct_4, arg_2: Struct_4, arg_3: Struct_5) -> Struct_3 {
    let var_0 = arg_0;
    for (var var_1 = 1i; var_1 < 2147483647i; var_1 = u_input.a) {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        var var_2 = func_5().b;
        loop {
            if (LOOP_COUNTERS[6u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
            var_2 = !vec2<bool>(false, !any(vec4<bool>(true, true, var_2.x, false)));
        }
        var var_3 = _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(sign(arg_3.c.d.x))));
        let var_4 = abs(global0.c.x);
    }
    for (var var_1 = 2147483647i; false; var_1 -= 1i) {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        global1 = arg_3.c;
        continue;
    }
    global0 = Struct_1(-_wgslsmith_div_vec3_i32(~(-var_0.a), abs(arg_0.a)), arg_3.c.e.x, func_4().e.zx & countOneBits(~vec2<u32>(global1.b, global1.c.x)), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(ceil(global0.d))), global0.e);
    var var_1 = Struct_2(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -191f)) - 1572f));
    return Struct_3(global2.a, _wgslsmith_f_op_f32(floor(300f)));
}

fn func_3(arg_0: vec4<i32>, arg_1: vec2<i32>) -> vec2<i32> {
    global3 = global2.a.d.x;
    global0 = global2.a;
    for (; true; ) {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
    }
    loop {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        loop {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        }
        continue;
    }
    if (true) {
        for (; ; ) {
            if (LOOP_COUNTERS[11u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
            global2 = func_7(func_4(), Struct_4(Struct_2(global0.d.x), Struct_2(global0.d.x), Struct_2(global2.b), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(832f, global0.d.x, global2.a.d.x, global2.b)) - _wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(-vec4<f32>(769f, global2.b, 1000f, 1022f)))))), Struct_4(Struct_2(_wgslsmith_f_op_f32(-global1.d.x)), Struct_2(_wgslsmith_f_op_f32(select(global2.a.d.x, _wgslsmith_div_f32(1835f, -168f), any(vec2<bool>(true, true))))), Struct_2(1549f), vec4<f32>(global1.d.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global0.d.x) * _wgslsmith_f_op_f32(floor(global2.a.d.x))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(global0.d.x, global2.a.d.x)) - -1184f), -134f)), func_5());
        }
        switch (~global0.a.x) {
            case 2147483647i: {
            }
            case 40269i: {
                let var_0 = global2.a;
                var var_1 = func_4().c;
            }
            default: {
            }
        }
        global2 = func_7(func_4(), Struct_4(Struct_2(_wgslsmith_div_f32(_wgslsmith_f_op_f32(trunc(global0.d.x)), _wgslsmith_f_op_f32(-global2.a.d.x))), Struct_2(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-436f - global2.a.d.x) - _wgslsmith_f_op_f32(global1.d.x + global0.d.x))), Struct_2(_wgslsmith_div_f32(global2.a.d.x, _wgslsmith_div_f32(487f, 786f))), vec4<f32>(_wgslsmith_f_op_f32(f32(-1f) * -466f), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(select(1000f, global2.b, true)))), func_4().d.x, _wgslsmith_f_op_f32(108f - _wgslsmith_f_op_f32(f32(-1f) * -745f)))), Struct_4(Struct_2(-1550f), Struct_2(_wgslsmith_f_op_f32(global0.d.x + -889f)), Struct_2(-152f), _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(vec4<f32>(1335f, -1180f, global1.d.x, global2.b), vec4<f32>(global2.b, -389f, -1249f, -725f))), vec4<f32>(760f, _wgslsmith_f_op_f32(747f * global1.d.x), -205f, _wgslsmith_div_f32(global1.d.x, global1.d.x)))), Struct_5(func_5().a, !func_5().b, func_5().c));
        switch (_wgslsmith_sub_i32(func_5().c.a.x, 0i)) {
            default: {
                global3 = -391f;
            }
        }
        var var_0 = u_input.b;
    }
    return arg_1;
}

fn func_2(arg_0: i32, arg_1: Struct_2, arg_2: i32) -> Struct_4 {
    var var_0 = ~45602u;
    for (var var_1 = -11337i; ; var_1 -= 1i) {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
    }
    global1 = global2.a;
    var var_1 = vec3<u32>(global2.a.e.x, 92090u, _wgslsmith_clamp_u32(global0.c.x, 1102u, 45265u));
    switch (_wgslsmith_dot_vec2_i32(_wgslsmith_sub_vec2_i32(global1.a.yz << (~_wgslsmith_div_vec2_u32(vec2<u32>(global1.c.x, global0.c.x), vec2<u32>(global2.a.b, global1.c.x)) % vec2<u32>(32u)), select(_wgslsmith_mult_vec2_i32(max(global1.a.zz, global0.a.yx), vec2<i32>(-43722i, -1i)), _wgslsmith_add_vec2_i32(_wgslsmith_mult_vec2_i32(global1.a.yy, vec2<i32>(-1i, -1i)), func_3(vec4<i32>(-1i, 2147483647i, i32(-2147483648), 0i), vec2<i32>(0i, global2.a.a.x))), vec2<bool>(true, true))), global1.a.xy)) {
        case 25480i: {
            global3 = global1.d.x;
            global3 = _wgslsmith_f_op_f32(-arg_1.a);
            var var_2 = _wgslsmith_clamp_vec2_u32(_wgslsmith_sub_vec2_u32(~(~vec2<u32>(global2.a.b, global1.e.x)), abs(vec2<u32>(global0.c.x, 4294967295u))), _wgslsmith_clamp_vec2_u32(_wgslsmith_sub_vec2_u32(func_5().c.c, func_4().e.zz), _wgslsmith_add_vec2_u32(~global1.c, ~vec2<u32>(36380u, global2.a.c.x)), _wgslsmith_mod_vec2_u32(select(vec2<u32>(1u, global1.e.x), global0.c, vec2<bool>(false, false)), var_1.xx)) | select(~global0.e.xy, global0.e.zz, u_input.b < (i32(-1i) * -18141i)), global1.c);
            let var_3 = u_input.c;
        }
        case -59251i: {
            if (_wgslsmith_f_op_f32(select(-961f, _wgslsmith_f_op_f32(-233f), any(select(vec2<bool>(true, true), vec2<bool>(true, true), true)))) > 465f) {
                var var_2 = Struct_5(!any(!select(vec3<bool>(false, false, false), vec3<bool>(false, true, true), vec3<bool>(true, true, true))), !func_5().b, func_5().c);
                var var_3 = _wgslsmith_add_u32(_wgslsmith_dot_vec4_u32(_wgslsmith_sub_vec4_u32(min(~var_2.c.e, _wgslsmith_sub_vec4_u32(vec4<u32>(15572u, 4294967295u, 0u, 1u), vec4<u32>(global1.c.x, var_2.c.b, 0u, global1.c.x))), (vec4<u32>(11923u, global1.e.x, global1.c.x, 45623u) >> (vec4<u32>(global0.e.x, 0u, global2.a.c.x, 1u) % vec4<u32>(32u))) & firstLeadingBit(global1.e)), vec4<u32>(global1.b, ~global2.a.c.x, ~39816u, 10746u)), ~(~func_4().b));
                var var_4 = var_2.c.a.x;
                global1 = Struct_1(~abs(_wgslsmith_div_vec3_i32(global2.a.a ^ global2.a.a, firstLeadingBit(global0.a))), global2.a.c.x, vec2<u32>(var_1.x, _wgslsmith_mod_u32(~0u, _wgslsmith_dot_vec4_u32(vec4<u32>(22051u, global2.a.e.x, global1.c.x, 1u), vec4<u32>(4294967295u, 53862u, global2.a.b, 4294967295u))) | ~_wgslsmith_add_u32(var_2.c.b, 1u)), vec3<f32>(func_5().c.d.x, var_2.c.d.x, _wgslsmith_f_op_f32(f32(-1f) * -791f)), _wgslsmith_div_vec4_u32(vec4<u32>(0u, _wgslsmith_clamp_u32(global0.e.x & 0u, func_5().c.b, var_1.x | global0.e.x), var_1.x, global0.e.x), vec4<u32>(~(~global0.b), func_7(var_2.c, Struct_4(arg_1, Struct_2(var_2.c.d.x), Struct_2(global0.d.x), vec4<f32>(global1.d.x, 314f, global0.d.x, global2.a.d.x)), Struct_4(arg_1, Struct_2(554f), Struct_2(global2.b), vec4<f32>(861f, -357f, 1328f, global2.a.d.x)), Struct_5(false, var_2.b, Struct_1(var_2.c.a, 1u, vec2<u32>(global2.a.c.x, 4294967295u), global2.a.d, global1.e))).a.e.x, 93159u, ~global0.e.x & (var_1.x & 0u))));
            }
            for (var var_2: i32; var_2 != 2147483647i; var_2 -= 1i) {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                var var_3 = true;
                let var_4 = Struct_2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(global2.a.d.x))));
                let var_5 = -502f;
            }
            let var_2 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(f32(-1f) * -591f), -1060f, _wgslsmith_f_op_f32(-global2.a.d.x), arg_1.a)) + _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(sign(vec4<f32>(global2.a.d.x, global1.d.x, arg_1.a, arg_1.a))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(110f, arg_1.a, -1000f, -2161f) * vec4<f32>(global2.a.d.x, 1000f, 707f, 1893f))), true))) * _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_1.a, global0.d.x, arg_1.a, -1181f))), _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(round(vec4<f32>(arg_1.a, arg_1.a, arg_1.a, global1.d.x))), vec4<f32>(-314f, -212f, global2.b, -444f), true)), any(vec4<bool>(true, true, true, true)))), _wgslsmith_div_vec4_f32(vec4<f32>(-663f, _wgslsmith_f_op_f32(global2.a.d.x - global0.d.x), _wgslsmith_f_op_f32(global1.d.x * arg_1.a), global2.a.d.x), vec4<f32>(_wgslsmith_f_op_f32(arg_1.a - global1.d.x), _wgslsmith_div_f32(-2343f, global0.d.x), _wgslsmith_div_f32(-413f, global0.d.x), arg_1.a))));
        }
        case 0i: {
            switch (~(-global2.a.a.x)) {
                case -20236i: {
                    let var_2 = _wgslsmith_mod_u32(global2.a.e.x, (~global0.b << (~94783u % 32u)) & (firstLeadingBit(var_1.x) & (var_1.x & global0.c.x))) > global2.a.b;
                    var_1 = global2.a.e.wwz;
                    var_0 = global1.e.x;
                }
                case 3511i: {
                }
                case 1i: {
                    var var_2 = firstLeadingBit(func_4().a.x ^ func_5().c.a.x) >> (var_1.x % 32u);
                    var var_3 = -_wgslsmith_sub_vec2_i32(select(vec2<i32>(1i, 1i), _wgslsmith_div_vec2_i32(_wgslsmith_mod_vec2_i32(global2.a.a.xz, vec2<i32>(1i, global1.a.x)), -global2.a.a.xy), vec2<bool>(true, select(false, false, true))), func_3(-vec4<i32>(-3176i, 0i, 2147483647i, -1i), ~vec2<i32>(18144i, arg_0) << (global2.a.c % vec2<u32>(32u))));
                    let var_4 = reverseBits(countOneBits(firstTrailingBit(countOneBits(~u_input.a))));
                }
                case -35331i: {
                    let var_2 = -1i;
                    var var_3 = func_4().c;
                    let var_4 = ~vec3<u32>(51939u, _wgslsmith_mod_u32(24571u, func_7(global2.a, Struct_4(arg_1, arg_1, Struct_2(global2.b), vec4<f32>(651f, 429f, -947f, 1592f)), Struct_4(arg_1, arg_1, arg_1, vec4<f32>(global2.b, arg_1.a, global2.b, 617f)), func_5()).a.b), countOneBits(var_1.x));
                }
                default: {
                    var var_2 = func_7(global2.a, Struct_4(Struct_2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global2.b))), arg_1, arg_1, _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(vec4<f32>(-596f, global1.d.x, arg_1.a, 622f), vec4<f32>(179f, global1.d.x, 153f, 454f))))), Struct_4(Struct_2(_wgslsmith_f_op_f32(f32(-1f) * -361f)), arg_1, Struct_2(_wgslsmith_f_op_f32(select(global1.d.x, global0.d.x, false))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(min(vec4<f32>(global0.d.x, arg_1.a, -358f, 1030f), vec4<f32>(1293f, arg_1.a, global1.d.x, global2.b))))) * _wgslsmith_f_op_vec4_f32(vec4<f32>(arg_1.a, arg_1.a, global1.d.x, global0.d.x) + _wgslsmith_f_op_vec4_f32(vec4<f32>(global1.d.x, global0.d.x, global0.d.x, arg_1.a) - vec4<f32>(-936f, global0.d.x, global2.a.d.x, -2204f))))), Struct_5(true, !select(vec2<bool>(false, true), vec2<bool>(true, true), true), func_4())).a;
                    var var_3 = func_5();
                    var var_4 = func_7(func_7(var_3.c, Struct_4(Struct_2(_wgslsmith_f_op_f32(var_3.c.d.x + var_3.c.d.x)), arg_1, Struct_2(-772f), vec4<f32>(-1091f, var_3.c.d.x, _wgslsmith_f_op_f32(min(global2.b, global1.d.x)), 2155f)), Struct_4(arg_1, Struct_2(_wgslsmith_div_f32(arg_1.a, global0.d.x)), Struct_2(_wgslsmith_f_op_f32(-1127f)), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(step(vec4<f32>(global0.d.x, arg_1.a, global1.d.x, -210f), vec4<f32>(-1000f, global1.d.x, global0.d.x, var_3.c.d.x))) * _wgslsmith_f_op_vec4_f32(-vec4<f32>(-1168f, -520f, 1143f, var_2.d.x)))), func_5()).a, Struct_4(Struct_2(_wgslsmith_f_op_f32(round(_wgslsmith_div_f32(-1575f, global1.d.x)))), Struct_2(-892f), arg_1, _wgslsmith_f_op_vec4_f32(select(vec4<f32>(_wgslsmith_f_op_f32(-1939f - 604f), -1000f, func_7(Struct_1(global1.a, 4294967295u, vec2<u32>(global1.c.x, 42960u), vec3<f32>(702f, 1078f, 1000f), vec4<u32>(var_3.c.e.x, var_3.c.e.x, 1u, global1.e.x)), Struct_4(Struct_2(var_2.d.x), Struct_2(var_2.d.x), Struct_2(-629f), vec4<f32>(829f, 696f, var_3.c.d.x, -1333f)), Struct_4(arg_1, Struct_2(-317f), arg_1, vec4<f32>(500f, -624f, global2.b, 965f)), Struct_5(var_3.a, var_3.b, Struct_1(vec3<i32>(-51120i, 16914i, -1i), var_3.c.e.x, global2.a.c, vec3<f32>(global1.d.x, 513f, var_2.d.x), vec4<u32>(global0.c.x, 57336u, var_3.c.b, 1u)))).a.d.x, _wgslsmith_f_op_f32(f32(-1f) * -1000f)), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(global2.a.d.x, 1203f, arg_1.a, -990f)) - _wgslsmith_f_op_vec4_f32(vec4<f32>(112f, global0.d.x, -1194f, var_3.c.d.x) + vec4<f32>(arg_1.a, global1.d.x, -1214f, global0.d.x))), !select(vec4<bool>(var_3.a, var_3.b.x, true, true), vec4<bool>(var_3.b.x, true, false, false), var_3.b.x)))), Struct_4(Struct_2(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-2864f), var_2.d.x)), Struct_2(1273f), Struct_2(_wgslsmith_div_f32(_wgslsmith_f_op_f32(var_3.c.d.x - 607f), var_2.d.x)), _wgslsmith_f_op_vec4_f32(vec4<f32>(global1.d.x, -580f, _wgslsmith_f_op_f32(ceil(927f)), var_2.d.x) * vec4<f32>(var_2.d.x, _wgslsmith_f_op_f32(-arg_1.a), _wgslsmith_f_op_f32(-arg_1.a), var_3.c.d.x))), Struct_5(any(vec3<bool>(any(var_3.b), true, true && var_3.a)), select(func_5().b, !var_3.b, var_3.b.x), var_3.c)).a;
                    let var_5 = countOneBits(~_wgslsmith_div_vec4_i32(vec4<i32>(min(var_2.a.x, global0.a.x), -1i, 16340i, 1i), ~_wgslsmith_add_vec4_i32(vec4<i32>(0i, global0.a.x, -1i, -1284i), vec4<i32>(arg_2, global2.a.a.x, global1.a.x, var_3.c.a.x))));
                    let var_6 = Struct_4(Struct_2(-298f), Struct_2(_wgslsmith_f_op_f32(func_4().d.x * var_3.c.d.x)), Struct_2(183f), _wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(209f, -1086f, -1547f, 1000f)) - _wgslsmith_f_op_vec4_f32(select(vec4<f32>(2694f, -1289f, var_3.c.d.x, var_2.d.x), vec4<f32>(arg_1.a, -1114f, global2.a.d.x, 111f), vec4<bool>(var_3.a, var_3.a, var_3.b.x, false)))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(639f, global1.d.x, -537f, var_3.c.d.x))), !(arg_0 >= arg_0))))));
                }
            }
        }
        case -1i: {
            for (var var_2 = 21508i; true; var_1 = vec3<u32>(_wgslsmith_clamp_u32(~(~(0u << (global2.a.b % 32u))), 25396u, ~min(4294967295u, 4294967295u)), abs(4294967295u), 45371u)) {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                break;
            }
            let var_2 = func_5();
            switch (max(min(global2.a.a.x, firstLeadingBit(_wgslsmith_dot_vec4_i32(vec4<i32>(global1.a.x, global1.a.x, 4369i, var_2.c.a.x), vec4<i32>(global1.a.x, global2.a.a.x, -16481i, var_2.c.a.x)))) & -1i, ~62398i)) {
                case -39208i: {
                    let var_3 = !(!(global1.d.x != _wgslsmith_div_f32(var_2.c.d.x, _wgslsmith_f_op_f32(max(2874f, 287f)))));
                }
                case -1i: {
                    let var_3 = Struct_5(false, var_2.b, var_2.c);
                }
                default: {
                    let var_3 = ~0u;
                    var var_4 = 584f;
                    let var_5 = func_4();
                }
            }
            global2 = Struct_3(var_2.c, global0.d.x);
        }
        default: {
            let var_2 = _wgslsmith_mult_i32(_wgslsmith_dot_vec4_i32(vec4<i32>(-1i) * -(~vec4<i32>(arg_2, 25687i, global1.a.x, global0.a.x)), select(min(vec4<i32>(-25304i, 1i, global1.a.x, global2.a.a.x), abs(vec4<i32>(global0.a.x, arg_2, 5750i, -12136i))), abs(vec4<i32>(2147483647i, arg_2, -40876i, arg_2)), global1.d.x == _wgslsmith_f_op_f32(global2.a.d.x - global2.a.d.x))), _wgslsmith_dot_vec4_i32(select(_wgslsmith_mod_vec4_i32(vec4<i32>(u_input.b, i32(-2147483648), arg_0, 44541i), countOneBits(vec4<i32>(global1.a.x, u_input.b, arg_0, global1.a.x))), vec4<i32>(_wgslsmith_sub_i32(-39197i, 54807i), reverseBits(10503i), global1.a.x, 1173i), vec4<bool>(true, true, true, true)), _wgslsmith_mod_vec4_i32(-vec4<i32>(-49614i, global2.a.a.x, 11075i, arg_0) & vec4<i32>(arg_0, -11817i, -1i, arg_0), ~reverseBits(vec4<i32>(arg_2, -18168i, 1i, 1i)))));
        }
    }
    return Struct_4(Struct_2(func_5().c.d.x), Struct_2(arg_1.a), arg_1, _wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(vec4<f32>(742f, 203f, global1.d.x, arg_1.a) - _wgslsmith_f_op_vec4_f32(sign(vec4<f32>(global1.d.x, arg_1.a, -533f, -1102f)))))))));
}

fn func_8(arg_0: bool, arg_1: Struct_4, arg_2: Struct_5) -> Struct_2 {
    if (true && all(func_5().b)) {
        global2 = func_7(global2.a, func_2(-_wgslsmith_mult_i32(_wgslsmith_dot_vec2_i32(vec2<i32>(0i, 1i), global1.a.xx), _wgslsmith_clamp_i32(global2.a.a.x, -26608i, 0i)), func_2(global0.a.x, func_2(func_7(Struct_1(global2.a.a, 43138u, arg_2.c.c, vec3<f32>(arg_1.a.a, arg_2.c.d.x, -559f), arg_2.c.e), Struct_4(arg_1.a, arg_1.c, Struct_2(543f), vec4<f32>(316f, -463f, 2087f, global0.d.x)), Struct_4(arg_1.b, Struct_2(global2.b), arg_1.a, arg_1.d), arg_2).a.a.x, arg_1.c, global1.a.x).a, arg_2.c.a.x).a, firstLeadingBit(global0.a.x)), arg_1, arg_2);
        var var_0 = 78082u;
        let var_1 = global1.a.x;
    }
    var var_0 = _wgslsmith_sub_i32(func_7(global2.a, func_2(_wgslsmith_add_i32(global1.a.x, func_3(vec4<i32>(1i, global1.a.x, 1i, global2.a.a.x), vec2<i32>(u_input.c, u_input.c)).x), Struct_2(1000f), ~global0.a.x), func_2(arg_2.c.a.x, func_2(~29512i, arg_1.c, global1.a.x).c, i32(-2147483648)), arg_2).a.a.x, 1959i);
    var var_1 = global2.a.a.x >> ((arg_2.c.b & firstTrailingBit(~34518u)) % 32u);
    for (var var_2 = -31210i; select(false, arg_2.a, arg_0); var_2 += 1i) {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
        let var_3 = global0.b;
    }
    global0 = Struct_1(vec3<i32>(_wgslsmith_mult_i32(abs(i32(-1i) * i32(-2147483648)), -1i ^ _wgslsmith_mod_i32(1i, u_input.b)), 1i, ~(-5000i)), _wgslsmith_mod_u32(61945u, 4294967295u), arg_2.c.c, vec3<f32>(_wgslsmith_f_op_f32(max(1329f, _wgslsmith_f_op_f32(sign(-707f)))), global2.a.d.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1218f) * 1005f)), func_7(Struct_1(firstTrailingBit(global1.a), _wgslsmith_mod_u32(1u, 78884u), global0.e.xz, _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(1096f, -1862f, global0.d.x)) + _wgslsmith_f_op_vec3_f32(abs(vec3<f32>(global0.d.x, 156f, arg_2.c.d.x)))), min(_wgslsmith_clamp_vec4_u32(vec4<u32>(global0.b, 1u, 17036u, global1.c.x), global1.e, vec4<u32>(global2.a.e.x, 8538u, 0u, global2.a.c.x)), _wgslsmith_add_vec4_u32(vec4<u32>(57433u, global2.a.e.x, global2.a.c.x, arg_2.c.b), vec4<u32>(global2.a.b, 1u, global0.c.x, 1u)))), func_2(global0.a.x, arg_1.b, firstTrailingBit(51450i)), arg_1, arg_2).a.e);
    return Struct_2(arg_2.c.d.x);
}

fn func_9(arg_0: Struct_2, arg_1: f32, arg_2: u32, arg_3: Struct_3) -> Struct_3 {
    global0 = func_5().c;
    let var_0 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(sign(vec4<f32>(-153f, global2.a.d.x, arg_1, global2.a.d.x))), vec4<f32>(_wgslsmith_f_op_f32(global2.a.d.x + -1118f), _wgslsmith_f_op_f32(1000f - -1265f), _wgslsmith_f_op_f32(arg_3.b * global2.a.d.x), arg_1))))));
    let var_1 = _wgslsmith_f_op_f32(-func_5().c.d.x);
    switch (global0.a.x) {
        case 0i: {
            let var_2 = select(!select(vec4<bool>(true, true, true, true), select(select(vec4<bool>(false, true, true, true), vec4<bool>(false, false, true, false), true), vec4<bool>(false, true, true, true), vec4<bool>(true, true, true, true)), select(vec4<bool>(true, true, true, true), select(vec4<bool>(false, true, false, true), vec4<bool>(true, false, false, true), vec4<bool>(true, true, false, true)), vec4<bool>(false, true, true, false))), !vec4<bool>(true, any(vec3<bool>(false, true, true)), false, true), select(vec4<bool>(false, true, (64177u >> (global2.a.c.x % 32u)) >= global2.a.b, any(vec3<bool>(true, false, true))), vec4<bool>(true, true, true, true), vec4<bool>(any(vec4<bool>(true, true, true, true)), true, true, any(select(vec2<bool>(false, true), vec2<bool>(false, false), vec2<bool>(false, true))))));
            global2 = arg_3;
            for (var var_3 = 2147483647i; select(any(vec2<bool>(false, true)), var_2.x, var_2.x); var_3 += 1i) {
                if (LOOP_COUNTERS[16u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
            }
        }
        case -17930i: {
            var var_2 = Struct_5(-585f >= _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(arg_3.a.d.x)) - _wgslsmith_div_f32(global1.d.x, _wgslsmith_f_op_f32(global1.d.x + arg_1))), func_5().b, func_5().c);
        }
        case -4766i: {
            for (var var_2 = -1i; ; ) {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                var_2 = ~global0.a.x;
                let var_3 = true;
                let var_4 = arg_1;
                global0 = func_4();
            }
        }
        case -1i: {
            switch (_wgslsmith_div_i32(reverseBits(0i | ~global1.a.x) << (0u % 32u), -select(func_4().a.x, countOneBits(1i), true))) {
                default: {
                    global3 = -721f;
                    global3 = _wgslsmith_f_op_f32(-561f - func_2(_wgslsmith_mult_i32(arg_3.a.a.x, -min(2147483647i, u_input.a)), Struct_2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(var_1, global1.d.x, false)))), 1i << (~(~arg_3.a.c.x) % 32u)).c.a);
                    let var_2 = _wgslsmith_f_op_vec4_f32(exp2(var_0));
                    var var_3 = ~4603i;
                }
            }
            loop {
                if (LOOP_COUNTERS[18u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
                let var_2 = func_2(global0.a.x >> (_wgslsmith_mult_u32(0u, min(_wgslsmith_add_u32(110113u, arg_2), abs(4294967295u))) % 32u), Struct_2(func_7(arg_3.a, Struct_4(Struct_2(arg_3.a.d.x), Struct_2(var_0.x), arg_0, var_0), func_2(global1.a.x, arg_0, -59587i), func_5()).b), 1i);
            }
            let var_2 = -66853i;
        }
        default: {
            let var_2 = _wgslsmith_dot_vec4_i32(~vec4<i32>(1i, global1.a.x, 0i, _wgslsmith_dot_vec3_i32(~global0.a, func_5().c.a)), ~(-abs(vec4<i32>(global1.a.x, global2.a.a.x, 1553i, -34966i))));
            global1 = arg_3.a;
            var var_3 = vec2<u32>(0u, max(global1.c.x, countOneBits(~arg_3.a.b)));
        }
    }
    global3 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -117f) + var_0.x), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-691f)))) + _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-arg_0.a), _wgslsmith_div_f32(var_1, _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(890f * -1887f), _wgslsmith_f_op_f32(-var_0.x)))))));
    return arg_3;
}

fn func_1() -> Struct_3 {
    var var_0 = !(!(!(!select(vec4<bool>(true, true, false, false), vec4<bool>(false, false, false, false), vec4<bool>(true, false, true, true)))));
    if (any(var_0.www)) {
        for (; ; ) {
            if (LOOP_COUNTERS[19u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
            return func_9(func_8(var_0.x, func_2(_wgslsmith_dot_vec4_i32(vec4<i32>(global2.a.a.x, u_input.a, -23849i, global1.a.x) << (global0.e % vec4<u32>(32u)), vec4<i32>(2147483647i, 11057i, global1.a.x, global2.a.a.x) >> (vec4<u32>(global2.a.e.x, 1u, global0.c.x, global2.a.e.x) % vec4<u32>(32u))), Struct_2(global2.a.d.x), 5799i), func_5()), global2.b, 94716u, func_7(global2.a, func_2(~(i32(-1i) * -3110i), Struct_2(_wgslsmith_f_op_f32(global1.d.x - -340f)), global2.a.a.x), Struct_4(func_8(true, func_2(global1.a.x, Struct_2(127f), u_input.a), func_5()), func_2(firstTrailingBit(global1.a.x), func_2(2147483647i, Struct_2(1310f), global2.a.a.x).c, ~(-10309i)).c, func_2(u_input.b, Struct_2(-819f), global2.a.a.x).a, _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(167f, -324f, 1448f, -999f)), vec4<f32>(116f, -419f, global0.d.x, 1367f))), func_5()));
        }
        for (var var_1 = 0i; !all(!var_0.wzw); var_1 += 1i) {
            if (LOOP_COUNTERS[20u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
            let var_2 = _wgslsmith_f_op_f32(step(global2.a.d.x, global2.b));
            continue;
        }
    }
    var var_1 = vec4<bool>(select(var_0.x, 29504u >= ~global2.a.c.x, !all(vec2<bool>(var_0.x, true))), all(vec2<bool>(-2067f != func_5().c.d.x, global2.a.b >= 1u)), var_0.x, !(countOneBits(global2.a.a.x) <= -1i));
    let var_2 = Struct_3(func_5().c, global0.d.x);
    var var_3 = _wgslsmith_mult_u32(func_4().c.x, ~_wgslsmith_sub_u32(43798u, global2.a.b));
    return func_9(func_2(u_input.a, func_8(false, func_2(32579i, func_8(var_1.x, Struct_4(Struct_2(-278f), Struct_2(global2.b), Struct_2(-1000f), vec4<f32>(global1.d.x, 1000f, 155f, 1744f)), Struct_5(var_0.x, var_1.ww, Struct_1(vec3<i32>(var_2.a.a.x, 1i, global2.a.a.x), 62131u, global2.a.c, vec3<f32>(-2426f, global1.d.x, global1.d.x), vec4<u32>(58056u, var_2.a.c.x, 57125u, global2.a.c.x)))), -global1.a.x), func_5()), func_5().c.a.x).c, global1.d.x, ~46410u, func_7(Struct_1(vec3<i32>(26421i | u_input.b, u_input.c, -global2.a.a.x), 4294967295u, global1.e.ww, global2.a.d, ~(~var_2.a.e)), Struct_4(Struct_2(_wgslsmith_f_op_f32(step(-128f, global1.d.x))), func_2(firstLeadingBit(u_input.c), func_8(var_0.x, Struct_4(Struct_2(var_2.b), Struct_2(-496f), Struct_2(global0.d.x), vec4<f32>(294f, global2.a.d.x, var_2.a.d.x, 1051f)), Struct_5(true, vec2<bool>(var_1.x, true), Struct_1(global0.a, global2.a.e.x, global2.a.e.zw, global1.d, vec4<u32>(1u, global0.c.x, 0u, global2.a.c.x)))), global1.a.x).b, Struct_2(-1000f), _wgslsmith_f_op_vec4_f32(select(_wgslsmith_div_vec4_f32(vec4<f32>(1218f, global0.d.x, -490f, -1490f), vec4<f32>(global1.d.x, global2.b, -593f, global0.d.x)), _wgslsmith_f_op_vec4_f32(abs(vec4<f32>(global2.a.d.x, global2.b, var_2.a.d.x, 570f))), select(vec4<bool>(var_1.x, var_1.x, var_0.x, false), vec4<bool>(var_0.x, var_0.x, false, true), vec4<bool>(var_1.x, true, false, false))))), Struct_4(Struct_2(_wgslsmith_f_op_f32(sign(-1000f))), func_2(35085i, Struct_2(-364f), _wgslsmith_mod_i32(-40182i, u_input.c)).b, func_2(func_9(Struct_2(2490f), global1.d.x, 15337u, var_2).a.a.x, func_8(false, Struct_4(Struct_2(global1.d.x), Struct_2(-295f), Struct_2(-335f), vec4<f32>(global1.d.x, -470f, global2.a.d.x, 974f)), Struct_5(var_0.x, vec2<bool>(var_0.x, var_1.x), Struct_1(vec3<i32>(global0.a.x, -17681i, var_2.a.a.x), 26919u, global2.a.e.yw, vec3<f32>(global2.a.d.x, -935f, global1.d.x), global0.e))), 1i).a, _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(sign(vec4<f32>(964f, -998f, -1046f, 378f))) * _wgslsmith_f_op_vec4_f32(-vec4<f32>(global2.b, var_2.a.d.x, global1.d.x, 1499f)))), Struct_5(false, select(var_1.xx, vec2<bool>(var_1.x, false), vec2<bool>(var_0.x, false)), func_9(func_8(var_1.x, Struct_4(Struct_2(var_2.a.d.x), Struct_2(389f), Struct_2(global0.d.x), vec4<f32>(var_2.b, global2.a.d.x, -148f, global0.d.x)), Struct_5(var_0.x, var_0.yw, Struct_1(global1.a, var_2.a.c.x, global2.a.c, global2.a.d, var_2.a.e))), _wgslsmith_f_op_f32(sign(175f)), 1u, func_7(Struct_1(global2.a.a, global2.a.b, global2.a.e.xx, vec3<f32>(-1941f, -546f, -175f), vec4<u32>(global1.c.x, global1.c.x, 4677u, 0u)), Struct_4(Struct_2(global2.a.d.x), Struct_2(488f), Struct_2(global2.b), vec4<f32>(-1000f, var_2.b, -1000f, -1867f)), Struct_4(Struct_2(292f), Struct_2(global0.d.x), Struct_2(global1.d.x), vec4<f32>(global1.d.x, global2.a.d.x, global1.d.x, global0.d.x)), Struct_5(var_1.x, var_0.yy, global2.a))).a)));
}

@compute
@workgroup_size(1)
fn main() {
    global2 = func_1();
    switch (global1.a.x) {
        default: {
            switch (-(((_wgslsmith_clamp_i32(2191i, 674i, global1.a.x) ^ (i32(-1i) * -1i)) ^ 0i) & -_wgslsmith_mult_i32(i32(-2147483648), firstTrailingBit(global1.a.x)))) {
                case -524i: {
                    global2 = Struct_3(Struct_1(global1.a, abs(_wgslsmith_add_u32(1u, 41886u)) & (firstLeadingBit(0u) >> (global0.c.x % 32u)), ~vec2<u32>(~global1.c.x, ~global1.c.x), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(max(global2.a.d, _wgslsmith_f_op_vec3_f32(-vec3<f32>(116f, -856f, 902f))))), func_9(func_2(global1.a.x & 45849i, func_2(-6660i, Struct_2(global0.d.x), global0.a.x).c, -1i >> (global2.a.b % 32u)).c, -783f, _wgslsmith_mult_u32(global0.b, global2.a.e.x), Struct_3(Struct_1(global2.a.a, 0u, global0.e.zx, global0.d, global1.e), global2.a.d.x)).a.e), 1324f);
                    let var_0 = global1.e.wwx;
                    global3 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -1446f) * _wgslsmith_f_op_f32(-global1.d.x)))) - _wgslsmith_f_op_f32(global1.d.x - func_2(~u_input.a ^ -68286i, func_2(~0i, func_2(u_input.c, Struct_2(1000f), u_input.b).a, 1i).c, i32(-2147483648)).c.a));
                    var var_1 = (countOneBits(abs(_wgslsmith_mult_vec3_u32(vec3<u32>(global0.c.x, 29316u, 0u), vec3<u32>(28258u, 1u, 14471u)))) & func_4().e.wzy) ^ ~(~(func_1().a.e.xzz | _wgslsmith_sub_vec3_u32(vec3<u32>(global0.c.x, 0u, global0.e.x), global0.e.wzy)));
                }
                case 2147483647i: {
                    return;
                }
                default: {
                    let var_0 = vec2<u32>(_wgslsmith_mult_u32(global2.a.b, 13963u), global2.a.b) & vec2<u32>(1u, ~countOneBits(~global0.b));
                    global2 = Struct_3(global2.a, 212f);
                    var var_1 = vec2<bool>(true, true || func_5().a);
                    let var_2 = Struct_5(true, select(!func_5().b, !(!select(vec2<bool>(var_1.x, var_1.x), vec2<bool>(false, var_1.x), var_1.x)), !vec2<bool>(all(vec4<bool>(var_1.x, true, var_1.x, var_1.x)), select(var_1.x, false, var_1.x))), Struct_1(_wgslsmith_add_vec3_i32(global2.a.a, _wgslsmith_mult_vec3_i32(global2.a.a, global0.a) ^ reverseBits(global2.a.a)), ~(~firstTrailingBit(74638u)), vec2<u32>(82499u, _wgslsmith_add_u32(24841u, global1.e.x)) & vec2<u32>(~1u, _wgslsmith_sub_u32(4294967295u, 1u)), global1.d, select(_wgslsmith_sub_vec4_u32(func_9(Struct_2(1032f), 678f, 1u, Struct_3(global2.a, global1.d.x)).a.e, vec4<u32>(global2.a.b, global2.a.c.x, var_0.x, 0u)), vec4<u32>(var_0.x, ~global1.e.x, _wgslsmith_add_u32(global0.b, global0.b), ~55288u), var_1.x)));
                }
            }
        }
    }
    switch (global0.a.x) {
        case -19i: {
            let var_0 = firstTrailingBit(firstTrailingBit(global2.a.a) >> (_wgslsmith_add_vec3_u32(global1.e.wyw, global0.e.xwx) % vec3<u32>(32u))) ^ global2.a.a;
            for (; ; ) {
                if (LOOP_COUNTERS[21u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
                break;
            }
            let var_1 = 13136u | firstTrailingBit(func_1().a.b & 20478u);
            global2 = Struct_3(Struct_1(_wgslsmith_mult_vec3_i32(vec3<i32>(global2.a.a.x, 74394i, 1i) | _wgslsmith_add_vec3_i32(vec3<i32>(26069i, 0i, var_0.x), global2.a.a), abs(vec3<i32>(1i, -1i, -1072i))), global1.c.x, vec2<u32>(~_wgslsmith_sub_u32(var_1, 21054u), global2.a.e.x), vec3<f32>(global0.d.x, 1526f, _wgslsmith_f_op_f32(-131f)), _wgslsmith_add_vec4_u32(~(~vec4<u32>(global0.b, global0.e.x, global2.a.e.x, var_1)), ~(~vec4<u32>(global0.b, var_1, var_1, var_1)))), global0.d.x);
            global2 = Struct_3(func_1().a, _wgslsmith_f_op_f32(-func_7(func_5().c, func_2(~(-51564i), func_2(-11963i, Struct_2(global1.d.x), u_input.b).b, 0i), Struct_4(Struct_2(global2.a.d.x), Struct_2(global0.d.x), func_8(true, Struct_4(Struct_2(402f), Struct_2(781f), Struct_2(-820f), vec4<f32>(875f, 602f, global2.b, global1.d.x)), Struct_5(true, vec2<bool>(false, false), global2.a)), vec4<f32>(1f, 1f, 1f, 1f)), func_5()).a.d.x));
        }
        case 1i: {
            for (; any(select(select(vec2<bool>(true, true), vec2<bool>(true, true), vec2<bool>(true, true)), vec2<bool>(true, func_7(Struct_1(vec3<i32>(45555i, -11878i, 11903i), 1u, global2.a.c, global2.a.d, global0.e), Struct_4(Struct_2(global0.d.x), Struct_2(global1.d.x), Struct_2(global1.d.x), vec4<f32>(global2.a.d.x, -213f, 1141f, 133f)), Struct_4(Struct_2(-971f), Struct_2(-709f), Struct_2(global2.a.d.x), vec4<f32>(global0.d.x, global0.d.x, global2.b, -977f)), Struct_5(false, vec2<bool>(false, true), global2.a)).a.e.x <= 50401u), !vec2<bool>(any(vec3<bool>(false, true, false)), true))); ) {
                if (LOOP_COUNTERS[22u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
                break;
            }
            let var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global2.a.d.x) * global0.d.x)))));
        }
        default: {
            var var_0 = func_2(firstTrailingBit(max(global0.a.x, global0.a.x)), func_2(global0.a.x, Struct_2(-541f), 12308i).b, _wgslsmith_add_i32(_wgslsmith_clamp_i32(_wgslsmith_div_i32(~global1.a.x, -28789i), global1.a.x, ~(global1.a.x >> (global2.a.c.x % 32u))), -firstTrailingBit(~(-33239i))));
            if (any(!(!select(vec2<bool>(false, false), select(vec2<bool>(true, true), vec2<bool>(false, false), vec2<bool>(true, true)), select(vec2<bool>(false, true), vec2<bool>(true, false), vec2<bool>(false, true)))))) {
                let var_1 = func_2(global1.a.x >> ((~global1.c.x << ((~global1.e.x & func_9(Struct_2(-185f), global2.b, 0u, Struct_3(Struct_1(global0.a, 58543u, global2.a.c, vec3<f32>(global1.d.x, 511f, global2.a.d.x), global0.e), global2.b)).a.b) % 32u)) % 32u), func_2(u_input.a, Struct_2(-1000f), ~u_input.b).b, i32(-1i) * -u_input.c);
                var var_2 = countOneBits(global2.a.e.wxy);
                let var_3 = vec3<i32>(48768i, -1i, ~global2.a.a.x);
            }
            for (var var_1 = 2147483647i; !select(all(select(vec2<bool>(true, true), vec2<bool>(false, false), vec2<bool>(true, false))), true, true); var_1 = global2.a.a.x) {
                if (LOOP_COUNTERS[23u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
            }
            let var_1 = global1.b;
            global1 = global2.a;
        }
    }
    global2 = func_9(func_2(firstTrailingBit(~(7074i | global0.a.x)), func_2(global2.a.a.x, func_2(abs(u_input.c), Struct_2(2238f), func_5().c.a.x).c, _wgslsmith_sub_i32(~global0.a.x, ~2147483647i)).c, ~global0.a.x).c, global0.d.x, 6758u, Struct_3(global2.a, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(global0.d.x)))));
    let var_0 = select(func_5().b, vec2<bool>(true || (select(1i, 33632i, false) < (41371i << (global1.e.x % 32u))), ~func_9(Struct_2(global2.a.d.x), global2.a.d.x, global1.b, Struct_3(global2.a, 1201f)).a.e.x >= (_wgslsmith_div_u32(32677u, global2.a.e.x) >> (0u % 32u))), any(select(vec2<bool>(true, true), !func_5().b, true)));
    let var_1 = func_7(func_5().c, Struct_4(Struct_2(_wgslsmith_f_op_f32(-func_7(Struct_1(global0.a, 1u, global2.a.c, vec3<f32>(global1.d.x, global1.d.x, 1522f), global2.a.e), Struct_4(Struct_2(-486f), Struct_2(-623f), Struct_2(-1000f), vec4<f32>(global1.d.x, global2.b, -228f, global0.d.x)), Struct_4(Struct_2(global2.b), Struct_2(global2.a.d.x), Struct_2(-277f), vec4<f32>(global2.b, 1156f, -1421f, global0.d.x)), Struct_5(var_0.x, vec2<bool>(false, var_0.x), Struct_1(global2.a.a, global2.a.c.x, vec2<u32>(44067u, 0u), vec3<f32>(global2.b, global1.d.x, global2.a.d.x), global2.a.e))).a.d.x)), func_8(!(false | var_0.x), Struct_4(func_8(true, Struct_4(Struct_2(global0.d.x), Struct_2(962f), Struct_2(global1.d.x), vec4<f32>(-414f, global0.d.x, 849f, global1.d.x)), Struct_5(true, vec2<bool>(var_0.x, var_0.x), Struct_1(global0.a, global1.b, vec2<u32>(global1.c.x, global2.a.c.x), global2.a.d, global2.a.e))), Struct_2(-210f), func_2(-6410i, Struct_2(global0.d.x), 2147483647i).a, _wgslsmith_f_op_vec4_f32(vec4<f32>(103f, global2.a.d.x, global0.d.x, global2.a.d.x) + vec4<f32>(global0.d.x, global1.d.x, global1.d.x, -929f))), Struct_5(any(vec3<bool>(var_0.x, var_0.x, var_0.x)), func_5().b, Struct_1(vec3<i32>(i32(-2147483648), global0.a.x, -1i), global0.b, vec2<u32>(0u, 4294967295u), vec3<f32>(global1.d.x, 849f, 1000f), global0.e))), func_2(_wgslsmith_dot_vec3_i32(vec3<i32>(global2.a.a.x, global2.a.a.x, 4676i), _wgslsmith_clamp_vec3_i32(global1.a, global1.a, global0.a)), func_8(true, Struct_4(Struct_2(global0.d.x), Struct_2(global0.d.x), Struct_2(global0.d.x), vec4<f32>(1136f, -110f, -573f, global2.a.d.x)), Struct_5(true, vec2<bool>(var_0.x, var_0.x), global2.a)), firstLeadingBit(i32(-2147483648))).c, _wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(-global0.d.x), _wgslsmith_f_op_f32(119f * -445f), global2.b, func_5().c.d.x) * _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(-183f, global1.d.x, global2.b, 556f) + vec4<f32>(1777f, global0.d.x, 265f, 497f)) + _wgslsmith_f_op_vec4_f32(-vec4<f32>(113f, global1.d.x, 1000f, global1.d.x))))), func_2(func_3(vec4<i32>(-7638i | u_input.a, -global2.a.a.x, _wgslsmith_div_i32(-1i, global1.a.x), -u_input.a), func_4().a.xx).x, Struct_2(876f), u_input.b), func_5());
    let var_2 = firstTrailingBit((~global2.a.a.x ^ 0i) ^ i32(-2147483648));
    if (false) {
        switch (reverseBits(var_2) | var_2) {
            case 1i: {
                let var_3 = 1045f;
                let var_4 = vec3<u32>(~1u, 0u, global2.a.b);
                var var_5 = global0.d;
                var var_6 = Struct_4(Struct_2(-1758f), func_8(!any(!var_0), func_2(-37595i, Struct_2(-348f), i32(-2147483648)), Struct_5(!var_0.x | true, vec2<bool>(var_0.x, true), Struct_1(func_5().c.a, 0u, var_4.xx, global2.a.d, func_9(Struct_2(122f), 366f, 31665u, Struct_3(global2.a, -170f)).a.e))), Struct_2(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(-306f))) - _wgslsmith_f_op_f32(_wgslsmith_div_f32(-2540f, global0.d.x) * _wgslsmith_f_op_f32(var_1.a.d.x * var_3)))), vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(var_5.x))), 154f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(515f - global0.d.x) * _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(sign(global0.d.x)), _wgslsmith_f_op_f32(var_3 + global2.b), any(var_0)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(global0.d.x, 738f)))));
            }
            case 15705i: {
                global3 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(func_2(var_2, func_8(var_1.a.a.x <= var_1.a.a.x, func_2(1i, Struct_2(946f), 0i), func_5()), _wgslsmith_mult_i32(_wgslsmith_sub_i32(42601i, 1346i), var_1.a.a.x)).d.x)));
                global0 = global2.a;
                let var_3 = func_3(vec4<i32>(1i, ~(-u_input.b), -40421i, abs(_wgslsmith_dot_vec4_i32(_wgslsmith_mod_vec4_i32(vec4<i32>(var_1.a.a.x, 2147483647i, global0.a.x, 2147483647i), vec4<i32>(i32(-2147483648), i32(-2147483648), -33i, -1i)), abs(vec4<i32>(var_1.a.a.x, global2.a.a.x, global1.a.x, -1i))))), -select(global2.a.a.xy, func_7(func_1().a, func_2(var_1.a.a.x, Struct_2(global2.b), -28037i), Struct_4(Struct_2(536f), Struct_2(2517f), Struct_2(-1000f), vec4<f32>(var_1.b, global0.d.x, 236f, 1496f)), Struct_5(var_0.x, vec2<bool>(var_0.x, false), var_1.a)).a.a.xx, var_0.x)).x;
            }
            default: {
            }
        }
    }
    let var_3 = Struct_5(all(select(vec3<bool>(false, all(vec3<bool>(var_0.x, false, var_0.x)), true), vec3<bool>(true, any(vec4<bool>(false, var_0.x, var_0.x, var_0.x)), var_0.x && true), !var_0.x)), var_0, var_1.a);
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_mod_i32(1i, _wgslsmith_dot_vec3_i32(~abs(vec3<i32>(-1i, -23725i, i32(-2147483648))), -var_1.a.a)), global0.d.x, _wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(var_1.a.d.zy + vec2<f32>(var_3.c.d.x, 1009f))))));
}

`;