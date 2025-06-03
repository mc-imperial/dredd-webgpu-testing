export const input = [209,30,63,104,97,180,110,236,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [209,30,63,104,97,180,110,236,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[209,30,63,104,97,180,110,236]}
// Seed: 3015125997187286618

struct Struct_1 {
    a: u32,
    b: u32,
}

struct Struct_2 {
    a: vec3<f32>,
}

struct Struct_3 {
    a: vec4<u32>,
    b: Struct_2,
    c: f32,
    d: Struct_2,
}

struct UniformBuffer {
    a: u32,
    b: i32,
}

struct StorageBuffer {
    a: vec3<i32>,
    b: vec4<u32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<u32, 9> = array<u32, 9>(19652u, 24119u, 26367u, 0u, 51322u, 25010u, 50818u, 0u, 19711u);

var<private> global1: array<bool, 7>;

var<private> global2: array<f32, 12>;

var<private> global3: array<vec4<i32>, 27>;

var<private> LOOP_COUNTERS: array<u32, 12>;

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn func_6() -> vec2<u32> {
    var var_0 = _wgslsmith_add_u32(0u, _wgslsmith_dot_vec4_u32(_wgslsmith_sub_vec4_u32(~vec4<u32>(13144u, global0[_wgslsmith_index_u32(u_input.a, 9u)], 1u, u_input.a), vec4<u32>(global0[_wgslsmith_index_u32(u_input.a, 9u)] & u_input.a, 41041u, _wgslsmith_mod_u32(87650u, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(67893u, 9u)], 9u)]), ~global0[_wgslsmith_index_u32(13103u, 9u)])), firstLeadingBit(_wgslsmith_mult_vec4_u32(firstLeadingBit(vec4<u32>(1u, 1u, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(1u, 9u)], 9u)], 36875u)), vec4<u32>(48552u, 0u, 26961u, 4294967295u) << (vec4<u32>(51236u, u_input.a, 64520u, u_input.a) % vec4<u32>(32u))))));
    var var_1 = any(vec4<bool>(false, !all(vec3<bool>(true, true, true)), all(vec3<bool>(true, false, global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a, 9u)], 7u)])) != true, all(!select(vec3<bool>(global1[_wgslsmith_index_u32(74874u, 7u)], true, true), vec3<bool>(true, false, global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a, 9u)], 9u)], 7u)]), vec3<bool>(global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(4294967295u, 9u)], 7u)], global1[_wgslsmith_index_u32(1u, 7u)], false)))));
    var_0 = _wgslsmith_dot_vec4_u32(_wgslsmith_clamp_vec4_u32(vec4<u32>(firstLeadingBit(_wgslsmith_mult_u32(global0[_wgslsmith_index_u32(u_input.a, 9u)], u_input.a)), _wgslsmith_mult_u32(58657u, ~global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(23947u, 9u)], 9u)]), u_input.a, global0[_wgslsmith_index_u32(abs(~4294967295u), 9u)]), ~firstLeadingBit(vec4<u32>(1u, 1u, 4294967295u, u_input.a)), ~vec4<u32>(u_input.a, global0[_wgslsmith_index_u32(4294967295u, 9u)], global0[_wgslsmith_index_u32(19679u, 9u)], global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a, 9u)], 9u)]) ^ _wgslsmith_div_vec4_u32(~vec4<u32>(1u, 31234u, 4294967295u, global0[_wgslsmith_index_u32(1u, 9u)]), select(vec4<u32>(global0[_wgslsmith_index_u32(1u, 9u)], 34543u, u_input.a, u_input.a), vec4<u32>(0u, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a, 9u)], 9u)], 15327u, 4583u), vec4<bool>(true, global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(78882u, 9u)], 7u)], global1[_wgslsmith_index_u32(0u, 7u)], global1[_wgslsmith_index_u32(4294967295u, 7u)])))), reverseBits(~(~vec4<u32>(u_input.a, 7202u, 10312u, 0u))));
    global1 = array<bool, 7>();
    var var_2 = any(!(!select(vec2<bool>(true, true), vec2<bool>(false, global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(60436u, 9u)], 7u)]), !vec2<bool>(global1[_wgslsmith_index_u32(u_input.a, 7u)], global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a, 9u)], 7u)]))));
    return vec2<u32>(~_wgslsmith_mult_u32(0u, _wgslsmith_sub_u32(74159u, 11659u)), ~min(_wgslsmith_dot_vec2_u32(vec2<u32>(58185u, 1u), vec2<u32>(u_input.a, 0u)) & u_input.a, 4294967295u));
}

fn func_7(arg_0: vec3<bool>, arg_1: vec2<u32>) -> u32 {
    let var_0 = Struct_3(vec4<u32>(select(~u_input.a, _wgslsmith_dot_vec4_u32(vec4<u32>(global0[_wgslsmith_index_u32(28684u, 9u)], u_input.a, 59874u, arg_1.x), vec4<u32>(global0[_wgslsmith_index_u32(4294967295u, 9u)], u_input.a, arg_1.x, global0[_wgslsmith_index_u32(1458u, 9u)])) ^ ~53383u, false), _wgslsmith_add_u32(40868u, ~u_input.a), 115513u, _wgslsmith_dot_vec4_u32(~(vec4<u32>(global0[_wgslsmith_index_u32(arg_1.x, 9u)], global0[_wgslsmith_index_u32(u_input.a, 9u)], 67550u, u_input.a) >> (vec4<u32>(1u, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(99018u, 9u)], 9u)], arg_1.x, 8488u) % vec4<u32>(32u))), max(vec4<u32>(u_input.a, 65244u, 35078u, 50269u), vec4<u32>(0u, arg_1.x, 57382u, u_input.a)) << (_wgslsmith_sub_vec4_u32(vec4<u32>(global0[_wgslsmith_index_u32(31060u, 9u)], u_input.a, 4494u, 0u), vec4<u32>(1u, u_input.a, global0[_wgslsmith_index_u32(u_input.a, 9u)], 0u)) % vec4<u32>(32u)))), Struct_2(_wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(global2[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(1u, 9u)], 12u)], global2[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a, 9u)], 12u)], global2[_wgslsmith_index_u32(28983u, 12u)]) * vec3<f32>(global2[_wgslsmith_index_u32(arg_1.x, 12u)], -813f, global2[_wgslsmith_index_u32(1774u, 12u)])), vec3<f32>(global2[_wgslsmith_index_u32(38004u, 12u)], global2[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a, 9u)], 12u)], global2[_wgslsmith_index_u32(u_input.a, 12u)])) - _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-692f, 769f, global2[_wgslsmith_index_u32(u_input.a, 12u)])) + _wgslsmith_f_op_vec3_f32(vec3<f32>(global2[_wgslsmith_index_u32(13132u, 12u)], global2[_wgslsmith_index_u32(14021u, 12u)], 625f) * vec3<f32>(1050f, 179f, -1136f))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(-1533f, _wgslsmith_div_f32(_wgslsmith_f_op_f32(sign(-1875f)), _wgslsmith_f_op_f32(global2[_wgslsmith_index_u32(u_input.a, 12u)] - -513f))))), Struct_2(_wgslsmith_f_op_vec3_f32(-vec3<f32>(global2[_wgslsmith_index_u32(~global0[_wgslsmith_index_u32(1u, 9u)], 12u)], -1624f, _wgslsmith_f_op_f32(-global2[_wgslsmith_index_u32(1u, 12u)])))));
    global3 = array<vec4<i32>, 27>();
    let var_1 = select(arg_0, vec3<bool>(arg_0.x, true, arg_0.x), ~(select(42517i, -8342i, true) | u_input.b) >= (i32(-2147483648) >> (_wgslsmith_add_u32(select(u_input.a, global0[_wgslsmith_index_u32(0u, 9u)], false), 1u) % 32u)));
    let var_2 = -7358i;
    let var_3 = _wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(-var_0.b.a.zy)));
    return var_0.a.x;
}

fn func_5(arg_0: vec4<u32>, arg_1: Struct_1, arg_2: bool) -> i32 {
    global0 = array<u32, 9>();
    let var_0 = !((all(vec2<bool>(false, false)) | false) || true) != (any(vec2<bool>(all(vec4<bool>(global1[_wgslsmith_index_u32(11539u, 7u)], arg_2, arg_2, false)), arg_2 || arg_2)) == arg_2);
    global2 = array<f32, 12>();
    global3 = array<vec4<i32>, 27>();
    var var_1 = _wgslsmith_f_op_f32(global2[_wgslsmith_index_u32(~(~func_7(!vec3<bool>(true, var_0, true), func_6())), 12u)] + global2[_wgslsmith_index_u32(_wgslsmith_sub_u32(arg_1.a, 0u | (~u_input.a << ((71946u >> (0u % 32u)) % 32u))), 12u)]);
    return -(i32(-1i) * -1i);
}

fn func_4() -> Struct_2 {
    var var_0 = _wgslsmith_mod_i32(1i, 22347i);
    switch (countOneBits(u_input.b)) {
        case 1i: {
            global3 = array<vec4<i32>, 27>();
        }
        default: {
            let var_1 = _wgslsmith_dot_vec4_u32(vec4<u32>(_wgslsmith_sub_u32(~45021u << (_wgslsmith_mult_u32(4294967295u, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a, 9u)], 9u)], 9u)]) % 32u), global0[_wgslsmith_index_u32(abs(global0[_wgslsmith_index_u32(~0u, 9u)]), 9u)]), abs(_wgslsmith_div_u32(abs(81849u), 1u)), 21921u, (global0[_wgslsmith_index_u32(4294967295u & global0[_wgslsmith_index_u32(72542u, 9u)], 9u)] | _wgslsmith_mult_u32(global0[_wgslsmith_index_u32(38678u, 9u)], 4294967295u)) & _wgslsmith_div_u32(select(4294967295u, 1u, false), min(4294967295u, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(5785u, 9u)], 9u)]))), vec4<u32>(u_input.a, 0u, 1u, ~(~countOneBits(u_input.a))));
            if (false) {
                global3 = array<vec4<i32>, 27>();
            }
            global3 = array<vec4<i32>, 27>();
            var var_2 = _wgslsmith_div_vec4_i32(~vec4<i32>(firstLeadingBit(func_5(vec4<u32>(var_1, 27271u, 34352u, u_input.a), Struct_1(43657u, global0[_wgslsmith_index_u32(4294967295u, 9u)]), global1[_wgslsmith_index_u32(u_input.a, 7u)])), 0i, 1472i, i32(-1i) * -1i), -vec4<i32>(u_input.b, _wgslsmith_dot_vec3_i32(max(vec3<i32>(u_input.b, u_input.b, u_input.b), vec3<i32>(u_input.b, u_input.b, 0i)), _wgslsmith_mult_vec3_i32(vec3<i32>(13994i, u_input.b, u_input.b), vec3<i32>(-23122i, u_input.b, u_input.b))), _wgslsmith_clamp_i32(u_input.b, -u_input.b, i32(-1i) * -1i), -99468i & min(u_input.b, -79552i)));
            loop {
                if (LOOP_COUNTERS[0u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
                var var_3 = global2[_wgslsmith_index_u32(abs(63076u) | _wgslsmith_mod_u32(min(u_input.a, 18943u ^ u_input.a) & 0u, var_1), 12u)];
                let var_4 = _wgslsmith_div_vec4_i32(-global3[_wgslsmith_index_u32(_wgslsmith_dot_vec4_u32(min(select(vec4<u32>(global0[_wgslsmith_index_u32(var_1, 9u)], 2930u, 1u, u_input.a), vec4<u32>(0u, 0u, u_input.a, var_1), false), vec4<u32>(var_1, u_input.a, 1u, 34104u)), countOneBits(vec4<u32>(u_input.a, u_input.a, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(4294967295u, 9u)], 9u)], 26112u))), 27u)], min(_wgslsmith_sub_vec4_i32(vec4<i32>(i32(-1i) * -1355i, 47004i, -45197i, var_2.x), ~_wgslsmith_sub_vec4_i32(global3[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a, 9u)], 27u)], global3[_wgslsmith_index_u32(4294967295u, 27u)])), global3[_wgslsmith_index_u32(func_7(vec3<bool>(true, global1[_wgslsmith_index_u32(_wgslsmith_mod_u32(global0[_wgslsmith_index_u32(u_input.a, 9u)], u_input.a), 7u)], false), vec2<u32>(~0u, u_input.a)), 27u)]));
                var_0 = 41325i;
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        let var_1 = 76050u;
        var var_2 = select(vec2<bool>(any(!(!vec3<bool>(global1[_wgslsmith_index_u32(1u, 7u)], false, global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(4249u, 9u)], 7u)]))), false), !(!(!select(vec2<bool>(true, true), vec2<bool>(global1[_wgslsmith_index_u32(1u, 7u)], true), true))), !select(!vec2<bool>(global1[_wgslsmith_index_u32(4294967295u, 7u)], false), vec2<bool>(true, true), any(select(vec3<bool>(global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(0u, 9u)], 7u)], global1[_wgslsmith_index_u32(1701u, 7u)], global1[_wgslsmith_index_u32(43677u, 7u)]), vec3<bool>(global1[_wgslsmith_index_u32(var_1, 7u)], global1[_wgslsmith_index_u32(4294967295u, 7u)], global1[_wgslsmith_index_u32(u_input.a, 7u)]), false))));
        loop {
            if (LOOP_COUNTERS[2u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            let var_3 = u_input.a;
            var var_4 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-global2[_wgslsmith_index_u32(u_input.a, 12u)]), global2[_wgslsmith_index_u32(var_3, 12u)]))), -791f)) + global2[_wgslsmith_index_u32(3871u & func_7(vec3<bool>(true, true && global1[_wgslsmith_index_u32(u_input.a, 7u)], var_2.x), (vec2<u32>(15405u, 0u) << (vec2<u32>(0u, global0[_wgslsmith_index_u32(34335u, 9u)]) % vec2<u32>(32u))) ^ vec2<u32>(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(1u, 9u)], 9u)], var_1)), 12u)]);
        }
    }
    if (global1[_wgslsmith_index_u32(~(~37104u), 7u)]) {
        var var_1 = _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(global2[_wgslsmith_index_u32(countOneBits(u_input.a), 12u)], _wgslsmith_f_op_f32(global2[_wgslsmith_index_u32(1u, 12u)] - 1246f))) + _wgslsmith_div_f32(247f, _wgslsmith_f_op_f32(trunc(456f)))))));
        var_0 = -30236i << (countOneBits(global0[_wgslsmith_index_u32(~(~69207u), 9u)]) % 32u);
        var var_2 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(-124f, global2[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(0u, 9u)], 12u)], global2[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a, 9u)], 9u)], 12u)], -634f)))))) - _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(910f - 673f), global2[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a | u_input.a, 9u)], 12u)], -1722f, global2[_wgslsmith_index_u32(~1u, 12u)]))));
    }
    let var_1 = !(!vec3<bool>(false, all(!vec3<bool>(global1[_wgslsmith_index_u32(43519u, 7u)], true, global1[_wgslsmith_index_u32(1u, 7u)])), true));
    return Struct_2(vec3<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(max(141f, 146f)))), _wgslsmith_f_op_f32(trunc(global2[_wgslsmith_index_u32(~16164u | _wgslsmith_mod_u32(global0[_wgslsmith_index_u32(4294967295u, 9u)], global0[_wgslsmith_index_u32(93636u, 9u)]), 12u)])), -584f));
}

fn func_8(arg_0: bool, arg_1: vec2<f32>, arg_2: Struct_2, arg_3: Struct_1) -> vec3<u32> {
    let var_0 = Struct_3(firstTrailingBit(vec4<u32>(~global0[_wgslsmith_index_u32(_wgslsmith_dot_vec2_u32(vec2<u32>(1u, u_input.a), vec2<u32>(0u, 15280u)), 9u)], global0[_wgslsmith_index_u32(25195u, 9u)], 4294967295u, ~66058u)), func_4(), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global2[_wgslsmith_index_u32(arg_3.b, 12u)]) * _wgslsmith_f_op_f32(-1063f + -543f)))) - _wgslsmith_div_f32(func_4().a.x, 1305f)), func_4());
    let var_1 = Struct_2(vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(arg_1.x))) * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(1708f, var_0.c)) + 625f)), 1238f, arg_2.a.x));
    if (false) {
    }
    let var_2 = -u_input.b;
    let var_3 = ~_wgslsmith_div_vec2_i32(_wgslsmith_add_vec2_i32(vec2<i32>(i32(-2147483648), -17917i), ~vec2<i32>(u_input.b, -10437i)), vec2<i32>(-24904i, -1961i)) >> (vec2<u32>(~(max(20018u, var_0.a.x) >> (~var_0.a.x % 32u)), global0[_wgslsmith_index_u32(countOneBits(func_7(vec3<bool>(global1[_wgslsmith_index_u32(1u, 7u)], arg_0, true), var_0.a.ww)), 9u)] & (~4294967295u << (_wgslsmith_clamp_u32(15768u, var_0.a.x, var_0.a.x) % 32u))) % vec2<u32>(32u));
    return vec3<u32>(~_wgslsmith_mult_u32(u_input.a | 1u, ~var_0.a.x), (_wgslsmith_add_u32(global0[_wgslsmith_index_u32(var_0.a.x, 9u)], 35255u) << (1u % 32u)) & (1u << (~u_input.a % 32u)), 59027u) >> (~var_0.a.yxx % vec3<u32>(32u));
}

fn func_3(arg_0: u32, arg_1: f32) -> Struct_2 {
    var var_0 = _wgslsmith_div_vec3_u32(_wgslsmith_sub_vec3_u32(vec3<u32>(_wgslsmith_div_u32(22278u, _wgslsmith_div_u32(5072u, global0[_wgslsmith_index_u32(1419u, 9u)])), ~abs(global0[_wgslsmith_index_u32(1u, 9u)]), arg_0), ~func_8(global1[_wgslsmith_index_u32(u_input.a, 7u)] | global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(2160u, 9u)], 7u)], _wgslsmith_f_op_vec2_f32(-vec2<f32>(arg_1, arg_1)), func_4(), Struct_1(u_input.a, global0[_wgslsmith_index_u32(arg_0, 9u)]))), abs(~((vec3<u32>(4294967295u, u_input.a, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(arg_0, 9u)], 9u)]) << (vec3<u32>(u_input.a, u_input.a, u_input.a) % vec3<u32>(32u))) << (firstLeadingBit(vec3<u32>(1u, arg_0, 4294967295u)) % vec3<u32>(32u)))));
    if (true) {
        for (var var_1 = 43551i; !global1[_wgslsmith_index_u32(u_input.a, 7u)]; global3 = array<vec4<i32>, 27>()) {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            var var_2 = any(vec2<bool>(true, true));
        }
        global0 = array<u32, 9>();
    }
    for (var var_1 = -reverseBits(-16096i >> (~_wgslsmith_mult_u32(u_input.a, 0u) % 32u)); var_1 > i32(-2147483648); var_1 += 1i) {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        if (!(!global1[_wgslsmith_index_u32(~65602u, 7u)])) {
            break;
        }
        var var_2 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-1000f))) + 695f);
        var var_3 = _wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(global2[_wgslsmith_index_u32(var_0.x, 12u)], -1248f, 623f, global2[_wgslsmith_index_u32(4294967295u, 12u)])))) + _wgslsmith_div_vec4_f32(vec4<f32>(arg_1, -151f, _wgslsmith_f_op_f32(sign(1421f)), arg_1), _wgslsmith_f_op_vec4_f32(step(_wgslsmith_div_vec4_f32(vec4<f32>(global2[_wgslsmith_index_u32(u_input.a, 12u)], 1000f, -781f, global2[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(arg_0, 9u)], 12u)]), vec4<f32>(266f, 786f, arg_1, 1096f)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(global2[_wgslsmith_index_u32(arg_0, 12u)], -322f, 192f, arg_1))))))));
        var var_4 = Struct_2(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(abs(_wgslsmith_div_vec3_f32(var_3.yzy, _wgslsmith_f_op_vec3_f32(-var_3.zyw))))));
        global0 = array<u32, 9>();
    }
    for (var var_1: i32; var_1 > -40645i; var_1 += 1i) {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        break;
    }
    switch (u_input.b << (firstLeadingBit(_wgslsmith_dot_vec4_u32(vec4<u32>(arg_0 & var_0.x, 1u, 47829u, abs(28275u)), vec4<u32>(arg_0, 0u, var_0.x, arg_0) >> (vec4<u32>(var_0.x, var_0.x, arg_0, 0u) % vec4<u32>(32u)))) % 32u)) {
        case 80292i: {
        }
        default: {
            let var_1 = Struct_1(0u, ~1u);
            global2 = array<f32, 12>();
            var var_2 = abs(_wgslsmith_sub_vec4_u32(vec4<u32>((4294967295u | var_1.a) ^ var_0.x, reverseBits(global0[_wgslsmith_index_u32(firstLeadingBit(u_input.a), 9u)]), global0[_wgslsmith_index_u32(_wgslsmith_add_u32(max(4294967295u, var_1.b), var_1.b | arg_0), 9u)], 4294967295u), ~(~countOneBits(vec4<u32>(arg_0, 2565u, 0u, 4294967295u)))));
        }
    }
    return func_4();
}

fn func_2(arg_0: Struct_1) -> vec3<bool> {
    let var_0 = u_input.b;
    switch (_wgslsmith_add_i32(-var_0, u_input.b)) {
        case -1i: {
        }
        case -1527i: {
            let var_1 = u_input.b;
            var var_2 = func_3(_wgslsmith_dot_vec3_u32(vec3<u32>(59385u, 23721u, 54931u), vec3<u32>(~u_input.a, arg_0.b, 66287u) << (vec3<u32>(arg_0.b, _wgslsmith_dot_vec2_u32(vec2<u32>(u_input.a, 0u), vec2<u32>(0u, arg_0.b)), ~arg_0.b) % vec3<u32>(32u))), -1670f);
            var var_3 = Struct_2(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(var_2.a, vec3<f32>(global2[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(15104u, 9u)], 12u)], -691f, global2[_wgslsmith_index_u32(29606u, 12u)])))));
            let var_4 = _wgslsmith_f_op_f32(-918f);
        }
        case i32(-2147483648): {
            global3 = array<vec4<i32>, 27>();
        }
        default: {
            var var_1 = u_input.b;
            switch (~(~var_0)) {
                default: {
                }
            }
            if (u_input.b != -19123i) {
                global0 = array<u32, 9>();
            }
            global0 = array<u32, 9>();
        }
    }
    var var_1 = vec3<bool>(global1[_wgslsmith_index_u32(~global0[_wgslsmith_index_u32(_wgslsmith_dot_vec2_u32(_wgslsmith_mod_vec2_u32(vec2<u32>(1u, u_input.a), vec2<u32>(arg_0.a, 1u)), ~vec2<u32>(u_input.a, 0u)) & u_input.a, 9u)], 7u)], all(vec2<bool>(true, true)), true);
    global2 = array<f32, 12>();
    let var_2 = Struct_2(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(global2[_wgslsmith_index_u32(0u & u_input.a, 12u)], 692f, _wgslsmith_f_op_f32(564f + global2[_wgslsmith_index_u32(37730u, 12u)]))) * vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(global2[_wgslsmith_index_u32(0u, 12u)])) - _wgslsmith_f_op_f32(-308f)), -185f, -525f)));
    return !(!vec3<bool>(var_1.x, true, var_1.x));
}

fn func_1(arg_0: Struct_2) -> vec3<u32> {
    if (true) {
        var var_0 = !select(!select(vec3<bool>(false, false, global1[_wgslsmith_index_u32(u_input.a, 7u)]), func_2(Struct_1(global0[_wgslsmith_index_u32(1u, 9u)], global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a, 9u)], 9u)], 9u)])), select(vec3<bool>(global1[_wgslsmith_index_u32(62437u, 7u)], true, false), vec3<bool>(true, true, global1[_wgslsmith_index_u32(u_input.a, 7u)]), vec3<bool>(global1[_wgslsmith_index_u32(4294967295u, 7u)], global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(119u, 9u)], 9u)], 7u)], false))), vec3<bool>(!(!global1[_wgslsmith_index_u32(1u, 7u)]), false, global1[_wgslsmith_index_u32(func_8(!global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a, 9u)], 7u)], _wgslsmith_f_op_vec2_f32(-arg_0.a.yz), Struct_2(vec3<f32>(arg_0.a.x, 909f, 1000f)), Struct_1(0u, global0[_wgslsmith_index_u32(154632u, 9u)])).x, 7u)]), all(!(!vec4<bool>(global1[_wgslsmith_index_u32(4294967295u, 7u)], global1[_wgslsmith_index_u32(0u, 7u)], true, global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(1u, 9u)], 7u)]))));
        let var_1 = ~1u;
        for (var var_2 = ~(-u_input.b); var_2 <= 2147483647i; var_2 += 1i) {
            if (LOOP_COUNTERS[6u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
            global1 = array<bool, 7>();
        }
        let var_2 = vec3<bool>(global1[_wgslsmith_index_u32(abs(~_wgslsmith_sub_u32(firstLeadingBit(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(14495u, 9u)], 9u)]), min(0u, 19231u))), 7u)], global1[_wgslsmith_index_u32(~reverseBits(_wgslsmith_div_u32(_wgslsmith_mult_u32(var_1, var_1), var_1 >> (var_1 % 32u))), 7u)], false);
    }
    for (var var_0 = firstLeadingBit(6942i); select(global1[_wgslsmith_index_u32(~global0[_wgslsmith_index_u32(~u_input.a, 9u)] >> (global0[_wgslsmith_index_u32(max(1u, func_8(false, vec2<f32>(-2029f, arg_0.a.x), Struct_2(vec3<f32>(154f, -1527f, -229f)), Struct_1(u_input.a, global0[_wgslsmith_index_u32(40841u, 9u)])).x), 9u)] % 32u), 7u)], all(select(!vec4<bool>(global1[_wgslsmith_index_u32(26248u, 7u)], false, false, false), !(!vec4<bool>(global1[_wgslsmith_index_u32(12456u, 7u)], false, true, global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(4294967295u, 9u)], 7u)])), (u_input.b == u_input.b) && (global2[_wgslsmith_index_u32(1u, 12u)] < global2[_wgslsmith_index_u32(0u, 12u)]))), all(select(select(!vec4<bool>(global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(32938u, 9u)], 9u)], 7u)], global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(1u, 9u)], 7u)], false, global1[_wgslsmith_index_u32(u_input.a, 7u)]), vec4<bool>(true, true, false, global1[_wgslsmith_index_u32(u_input.a, 7u)]), !vec4<bool>(false, true, global1[_wgslsmith_index_u32(1u, 7u)], true)), vec4<bool>(true, any(vec2<bool>(true, global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(37273u, 9u)], 7u)])), !global1[_wgslsmith_index_u32(0u, 7u)], 14230u == u_input.a), true))); var_0 += 1i) {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        break;
    }
    for (var var_0 = i32(-2147483648); _wgslsmith_f_op_f32(sign(977f)) > _wgslsmith_f_op_f32(func_3(abs(u_input.a), arg_0.a.x).a.x - _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(857f * arg_0.a.x)), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(-483f, global2[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(1u, 9u)], 12u)])))); var_0 -= 1i) {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        let var_1 = Struct_2(_wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(-arg_0.a)))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(abs(arg_0.a)) - _wgslsmith_f_op_vec3_f32(-arg_0.a)))));
        continue;
    }
    var var_0 = Struct_1(4294967295u, func_8(global1[_wgslsmith_index_u32(_wgslsmith_sub_u32(~(~93856u), u_input.a), 7u)], arg_0.a.zy, Struct_2(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(min(vec3<f32>(global2[_wgslsmith_index_u32(921u, 12u)], 1845f, global2[_wgslsmith_index_u32(u_input.a, 12u)]), arg_0.a)))), Struct_1(~(~u_input.a), ~_wgslsmith_mod_u32(0u, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(4294967295u, 9u)], 9u)]))).x);
    switch (_wgslsmith_dot_vec4_i32(vec4<i32>(-(2147483647i ^ _wgslsmith_mult_i32(-4207i, u_input.b)), u_input.b, func_5(vec4<u32>(1u ^ u_input.a, 1u, ~60529u, ~20247u), Struct_1(var_0.b, var_0.a), !any(vec2<bool>(true, global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(37964u, 9u)], 7u)]))), ~_wgslsmith_add_i32(~u_input.b, min(u_input.b, u_input.b))), global3[_wgslsmith_index_u32(abs(~func_6().x), 27u)] >> (max(min(_wgslsmith_clamp_vec4_u32(vec4<u32>(44044u, global0[_wgslsmith_index_u32(1u, 9u)], 1u, 5597u), vec4<u32>(global0[_wgslsmith_index_u32(4628u, 9u)], 0u, 59763u, var_0.b), vec4<u32>(1u, global0[_wgslsmith_index_u32(0u, 9u)], 1u, u_input.a)), vec4<u32>(47101u, 37064u, 10211u, u_input.a) | vec4<u32>(1u, 46246u, 4294967295u, global0[_wgslsmith_index_u32(u_input.a, 9u)])), min(_wgslsmith_add_vec4_u32(vec4<u32>(9905u, u_input.a, global0[_wgslsmith_index_u32(4294967295u, 9u)], u_input.a), vec4<u32>(global0[_wgslsmith_index_u32(0u, 9u)], global0[_wgslsmith_index_u32(var_0.a, 9u)], var_0.a, 4294967295u)), firstLeadingBit(vec4<u32>(4294967295u, 1u, var_0.a, 82241u)))) % vec4<u32>(32u)))) {
        case -11685i: {
            var var_1 = vec4<bool>(all(vec4<bool>(any(vec4<bool>(global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(4294967295u, 9u)], 7u)], global1[_wgslsmith_index_u32(var_0.a, 7u)], true, global1[_wgslsmith_index_u32(4294967295u, 7u)])), global1[_wgslsmith_index_u32(~(~var_0.b), 7u)], all(vec3<bool>(global1[_wgslsmith_index_u32(u_input.a, 7u)], true, global1[_wgslsmith_index_u32(1u, 7u)])), any(vec2<bool>(true, true)))), all(!vec3<bool>(109f > arg_0.a.x, true, any(vec4<bool>(global1[_wgslsmith_index_u32(27649u, 7u)], true, global1[_wgslsmith_index_u32(var_0.b, 7u)], false)))), false, !any(!vec3<bool>(global1[_wgslsmith_index_u32(54537u, 7u)], true, false)) | true);
            switch (~firstTrailingBit(~(i32(-1i) * -22335i))) {
                case 1i: {
                }
                default: {
                    let var_2 = max(1u, var_0.a);
                    let var_3 = _wgslsmith_sub_i32(u_input.b >> (u_input.a % 32u), _wgslsmith_div_i32(u_input.b, u_input.b));
                }
            }
            return vec3<u32>(max(global0[_wgslsmith_index_u32(84815u, 9u)], global0[_wgslsmith_index_u32(_wgslsmith_clamp_u32(1u, 30129u, 41115u) ^ ~(~1u), 9u)]), ~u_input.a, ~(_wgslsmith_clamp_u32(var_0.a, u_input.a << (u_input.a % 32u), 0u) >> (1u % 32u)));
        }
        case -60637i: {
            let var_1 = Struct_2(arg_0.a);
        }
        case 0i: {
        }
        case 7651i: {
            loop {
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
                let var_1 = vec4<f32>(-1252f, _wgslsmith_div_f32(arg_0.a.x, -537f), arg_0.a.x, arg_0.a.x);
                let var_2 = -434f >= global2[_wgslsmith_index_u32(15512u, 12u)];
                global3 = array<vec4<i32>, 27>();
                let var_3 = global1[_wgslsmith_index_u32(_wgslsmith_sub_u32(global0[_wgslsmith_index_u32(_wgslsmith_div_u32(~0u, ~func_6().x), 9u)], u_input.a), 7u)];
                break;
            }
        }
        default: {
            var var_1 = func_3(u_input.a, _wgslsmith_f_op_f32(-global2[_wgslsmith_index_u32(u_input.a, 12u)]));
            let var_2 = Struct_1(u_input.a, ~(~4294967295u));
            let var_3 = Struct_1(func_6().x, ~(~53136u));
            var_1 = func_4();
        }
    }
    return vec3<u32>(func_7(func_2(Struct_1(_wgslsmith_sub_u32(1u, 1u), _wgslsmith_dot_vec3_u32(vec3<u32>(72364u, 52540u, global0[_wgslsmith_index_u32(1u, 9u)]), vec3<u32>(var_0.b, 16905u, var_0.b)))), ~min(_wgslsmith_sub_vec2_u32(vec2<u32>(u_input.a, var_0.b), vec2<u32>(23285u, var_0.b)), vec2<u32>(global0[_wgslsmith_index_u32(0u, 9u)], var_0.b))), min(1u, abs(33078u)), u_input.a);
}

@compute
@workgroup_size(1)
fn main() {
    loop {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        continue;
    }
    let var_0 = global2[_wgslsmith_index_u32(~44263u, 12u)];
    let var_1 = _wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(global2[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(32997u, 9u)], 9u)], 9u)], 9u)], 12u)], 539f, global2[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(1u, 9u)], 12u)], global2[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a, 9u)], 9u)], 12u)]))), _wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(-vec4<f32>(2255f, 346f, -221f, global2[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(29944u, 9u)], 12u)])))))))));
    let var_2 = ~u_input.b;
    var var_3 = func_1(Struct_2(var_1.xyy));
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_mult_vec3_i32(_wgslsmith_add_vec3_i32(vec3<i32>(-50361i, var_2, u_input.b), select(vec3<i32>(13785i, 1i, var_2), vec3<i32>(u_input.b, -21254i, -1i), false)) & (vec3<i32>(-50730i, var_2, u_input.b) >> (min(vec3<u32>(u_input.a, 83470u, u_input.a), vec3<u32>(global0[_wgslsmith_index_u32(u_input.a, 9u)], 18350u, global0[_wgslsmith_index_u32(var_3.x, 9u)])) % vec3<u32>(32u))), ~(~select(vec3<i32>(1i, 74851i, var_2), vec3<i32>(u_input.b, 35574i, -10067i), vec3<bool>(global1[_wgslsmith_index_u32(0u, 7u)], false, global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a, 9u)], 7u)])))), abs(~vec4<u32>(global0[_wgslsmith_index_u32(26135u, 9u)], u_input.a, 0u, u_input.a)) << (~firstTrailingBit(~vec4<u32>(var_3.x, var_3.x, u_input.a, var_3.x)) % vec4<u32>(32u)));
}

`;