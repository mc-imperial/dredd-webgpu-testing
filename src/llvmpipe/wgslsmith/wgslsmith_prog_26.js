export const input = [153,249,206,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [153,249,206,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[153,249,206,14]}
// Seed: 8150838222630200534

struct Struct_1 {
    a: f32,
}

struct Struct_2 {
    a: vec4<f32>,
    b: Struct_1,
    c: vec3<u32>,
    d: Struct_1,
    e: i32,
}

struct Struct_3 {
    a: f32,
    b: i32,
    c: f32,
}

struct Struct_4 {
    a: u32,
}

struct Struct_5 {
    a: vec3<f32>,
    b: u32,
    c: Struct_4,
    d: Struct_3,
}

struct UniformBuffer {
    a: i32,
}

struct StorageBuffer {
    a: u32,
    b: vec4<i32>,
    c: f32,
    d: f32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<Struct_4, 29> = array<Struct_4, 29>(Struct_4(74307u), Struct_4(17976u), Struct_4(4294967295u), Struct_4(16900u), Struct_4(43354u), Struct_4(55560u), Struct_4(4294967295u), Struct_4(4294967295u), Struct_4(4294967295u), Struct_4(4294967295u), Struct_4(4294967295u), Struct_4(1u), Struct_4(48038u), Struct_4(72455u), Struct_4(5229u), Struct_4(4294967295u), Struct_4(4294967295u), Struct_4(4788u), Struct_4(4294967295u), Struct_4(0u), Struct_4(0u), Struct_4(34832u), Struct_4(0u), Struct_4(15011u), Struct_4(4294967295u), Struct_4(44262u), Struct_4(20980u), Struct_4(4294967295u), Struct_4(114054u));

var<private> global1: array<vec3<u32>, 30> = array<vec3<u32>, 30>(vec3<u32>(4294967295u, 1u, 30891u), vec3<u32>(55189u, 4294967295u, 132266u), vec3<u32>(8427u, 109592u, 0u), vec3<u32>(7789u, 25759u, 0u), vec3<u32>(72942u, 52528u, 4294967295u), vec3<u32>(12064u, 0u, 704u), vec3<u32>(4294967295u, 1u, 4294967295u), vec3<u32>(4294967295u, 151511u, 49582u), vec3<u32>(7720u, 6802u, 4294967295u), vec3<u32>(9787u, 48617u, 63535u), vec3<u32>(60377u, 4294967295u, 0u), vec3<u32>(4294967295u, 1u, 41773u), vec3<u32>(0u, 54736u, 1u), vec3<u32>(62593u, 85085u, 34093u), vec3<u32>(21788u, 26011u, 43217u), vec3<u32>(47771u, 34107u, 4294967295u), vec3<u32>(53384u, 4294967295u, 23286u), vec3<u32>(28002u, 4294967295u, 0u), vec3<u32>(4294967295u, 0u, 5170u), vec3<u32>(0u, 0u, 48085u), vec3<u32>(18128u, 9392u, 32344u), vec3<u32>(11495u, 5719u, 0u), vec3<u32>(49042u, 866u, 40276u), vec3<u32>(0u, 4294967295u, 4294967295u), vec3<u32>(24270u, 1u, 6400u), vec3<u32>(36914u, 1u, 1u), vec3<u32>(10609u, 79827u, 1u), vec3<u32>(26168u, 17197u, 11431u), vec3<u32>(37739u, 51650u, 9962u), vec3<u32>(4294967295u, 4294967295u, 12236u));

var<private> global2: bool = false;

var<private> LOOP_COUNTERS: array<u32, 16>;

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn func_6(arg_0: vec2<bool>, arg_1: vec3<i32>) -> u32 {
    global1 = array<vec3<u32>, 30>();
    let var_0 = Struct_1(_wgslsmith_f_op_f32(-1000f + -668f));
    let var_1 = vec4<i32>(~(~16643i), -1106i, u_input.a, arg_1.x) ^ firstTrailingBit(select(-(~vec4<i32>(2147483647i, u_input.a, -9395i, i32(-2147483648))), _wgslsmith_div_vec4_i32(vec4<i32>(2147483647i, arg_1.x, u_input.a, u_input.a) & vec4<i32>(u_input.a, i32(-2147483648), u_input.a, 28124i), -vec4<i32>(u_input.a, i32(-2147483648), 1i, 0i)), true));
    let var_2 = global0[_wgslsmith_index_u32(countOneBits(_wgslsmith_div_u32(1u, reverseBits(1u))), 29u)];
    global1 = array<vec3<u32>, 30>();
    return ~var_2.a;
}

fn func_5() -> i32 {
    let var_0 = ~(~max(_wgslsmith_mult_u32(1u, 33791u), func_6(vec2<bool>(true, true), vec3<i32>(1i, -1i, u_input.a))));
    var var_1 = _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(1423f, 1107f, -431f))) + _wgslsmith_f_op_vec3_f32(vec3<f32>(-593f, 1085f, 469f) + vec3<f32>(-657f, 128f, -438f)))) + _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(floor(vec3<f32>(195f, 1156f, -672f))) + _wgslsmith_f_op_vec3_f32(max(vec3<f32>(-1449f, -535f, 282f), _wgslsmith_f_op_vec3_f32(vec3<f32>(-1000f, 212f, -555f) + vec3<f32>(1215f, 966f, 1146f)))))), _wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_div_f32(184f, -709f) - 1374f), _wgslsmith_f_op_f32(-1000f), -686f)));
    global0 = array<Struct_4, 29>();
    switch (abs(u_input.a)) {
        case -1i: {
            global0 = array<Struct_4, 29>();
        }
        case 671i: {
            var var_2 = Struct_3(_wgslsmith_div_f32(_wgslsmith_f_op_f32(ceil(_wgslsmith_div_f32(_wgslsmith_f_op_f32(floor(var_1.x)), 981f))), var_1.x), min(-u_input.a, u_input.a), -152f);
            switch (0i) {
                case 0i: {
                    let var_3 = Struct_2(vec4<f32>(_wgslsmith_f_op_f32(-1099f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_2.a))), _wgslsmith_f_op_f32(f32(-1f) * -640f), _wgslsmith_div_f32(var_1.x, _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(round(var_2.c)), var_1.x)))), Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-678f))), global1[_wgslsmith_index_u32((~(~11767u) | (~var_0 ^ _wgslsmith_mod_u32(1u, 51400u))) ^ ~abs(1u), 30u)], Struct_1(var_2.a), 0i);
                }
                default: {
                    var var_3 = Struct_5(_wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(var_2.c * var_1.x), -1840f, var_1.x)), var_0, global0[_wgslsmith_index_u32(var_0, 29u)], Struct_3(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-516f)))), i32(-1i) * -u_input.a, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(var_1.x)) - -834f))));
                    var var_4 = var_3.d;
                    var_3 = Struct_5(_wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(var_1.x * var_1.x), var_4.c, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(var_2.c, var_3.d.a, true))))), 26972u, Struct_4(var_0), var_3.d);
                    var_3 = Struct_5(_wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(ceil(vec3<f32>(var_1.x, var_4.a, 938f))) + _wgslsmith_f_op_vec3_f32(round(vec3<f32>(var_1.x, -1975f, var_3.a.x)))) - vec3<f32>(_wgslsmith_f_op_f32(-1688f - -966f), _wgslsmith_f_op_f32(min(399f, var_3.a.x)), var_4.a)))), _wgslsmith_add_u32(var_3.b, 1u), var_3.c, Struct_3(_wgslsmith_f_op_f32(f32(-1f) * -231f), ~(-31366i), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(var_3.a.x, _wgslsmith_div_f32(-747f, -862f))))));
                }
            }
            let var_3 = Struct_5(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(var_1.x, var_1.x, -487f) * vec3<f32>(var_2.c, 313f, var_2.a))) - _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(1399f, -1049f, 757f) * vec3<f32>(var_1.x, -1130f, -1354f))))), max(var_0, var_0), Struct_4(var_0), Struct_3(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1773f - var_1.x)) - _wgslsmith_f_op_f32(var_1.x * _wgslsmith_f_op_f32(abs(-518f)))), firstTrailingBit(u_input.a) | -3117i, _wgslsmith_div_f32(var_1.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(-1000f))))));
            let var_4 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(select(var_3.a.xy, _wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(-vec2<f32>(var_1.x, -690f)))), _wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(select(var_3.a.xz, vec2<f32>(var_1.x, var_1.x), vec2<bool>(false, false))))), vec2<bool>(any(vec4<bool>(true, true, true, false)), true))), select(vec2<bool>(all(vec4<bool>(false, true, true, true)), false), !select(vec2<bool>(true, false), vec2<bool>(true, false), vec2<bool>(false, false)), vec2<bool>(all(vec3<bool>(false, true, false)), any(vec3<bool>(true, true, true)))))));
        }
        case 1i: {
            var_1 = _wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(-805f, -1805f, var_1.x) + vec3<f32>(var_1.x, -830f, var_1.x)) - _wgslsmith_f_op_vec3_f32(step(vec3<f32>(419f, -1244f, -1229f), vec3<f32>(var_1.x, var_1.x, 128f)))) * _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(ceil(vec3<f32>(var_1.x, 360f, 123f))) * _wgslsmith_f_op_vec3_f32(-vec3<f32>(var_1.x, var_1.x, -606f))))))));
        }
        case 2147483647i: {
            switch (~(~u_input.a)) {
                default: {
                    let var_2 = -581f;
                    let var_3 = Struct_2(vec4<f32>(var_1.x, var_2, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-604f + var_1.x)), var_1.x), Struct_1(_wgslsmith_f_op_f32(-var_1.x)), vec3<u32>(_wgslsmith_dot_vec3_u32(~reverseBits(vec3<u32>(50951u, var_0, 1u)), _wgslsmith_mod_vec3_u32(global1[_wgslsmith_index_u32(~var_0, 30u)], ~vec3<u32>(var_0, 25032u, var_0))), var_0 & (_wgslsmith_mod_u32(13920u, 41346u) >> (1u % 32u)), ~_wgslsmith_div_u32(36101u, 4294967295u)), Struct_1(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(max(1687f, var_2)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(var_2)) - var_2)))), u_input.a);
                    var_1 = vec3<f32>(_wgslsmith_f_op_f32(min(-1540f, var_3.d.a)), -1377f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(146f + _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(max(876f, 1239f)))))));
                    let var_4 = abs(4294967295u);
                }
            }
            let var_2 = ~vec4<i32>(abs(u_input.a), -min(u_input.a, 0i), -1i, u_input.a) & reverseBits(~_wgslsmith_clamp_vec4_i32(vec4<i32>(u_input.a, u_input.a, -1i, u_input.a), vec4<i32>(-11644i, u_input.a, -18522i, u_input.a), vec4<i32>(u_input.a, -7903i, i32(-2147483648), u_input.a)) << (~(~vec4<u32>(var_0, var_0, 1u, var_0)) % vec4<u32>(32u)));
            let var_3 = ~(~min(~vec3<u32>(30973u, var_0, 34435u), reverseBits(vec3<u32>(19275u, 1u, var_0))));
            for (; ; ) {
                if (LOOP_COUNTERS[0u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
                global2 = !select(true, select(true, var_1.x <= -455f, select(false, false, false)), all(select(vec4<bool>(true, true, true, false), vec4<bool>(true, false, true, false), vec4<bool>(true, false, false, false)))) & true;
                var var_4 = vec4<f32>(var_1.x, -876f, _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-1000f + var_1.x), _wgslsmith_f_op_f32(-1690f + var_1.x))))))), var_1.x);
                var var_5 = Struct_2(vec4<f32>(_wgslsmith_div_f32(_wgslsmith_div_f32(var_4.x, _wgslsmith_f_op_f32(round(var_4.x))), _wgslsmith_f_op_f32(-var_1.x)), -242f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-904f - var_4.x))) * 566f), -1000f), Struct_1(_wgslsmith_f_op_f32(var_4.x + _wgslsmith_f_op_f32(f32(-1f) * -2042f))), ~global1[_wgslsmith_index_u32(11589u, 30u)], Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-var_1.x), _wgslsmith_div_f32(-704f, -418f), var_4.x < 302f)))), 2147483647i);
                var var_6 = !vec4<bool>(true, all(select(vec2<bool>(true, true), vec2<bool>(false, true), true)), true, (_wgslsmith_div_i32(var_5.e, u_input.a) << ((var_3.x | var_5.c.x) % 32u)) >= _wgslsmith_sub_i32(-u_input.a, 0i));
                var_1 = _wgslsmith_f_op_vec3_f32(-var_5.a.xzz);
            }
            global2 = true;
        }
        default: {
            switch (~1i) {
                default: {
                }
            }
            loop {
                if (LOOP_COUNTERS[1u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
                var var_2 = 1u;
                break;
            }
            var_1 = _wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(step(vec3<f32>(var_1.x, var_1.x, -1865f), vec3<f32>(-775f, var_1.x, 783f))))) + _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(exp2(vec3<f32>(var_1.x, -1083f, var_1.x))), vec3<f32>(_wgslsmith_f_op_f32(-260f - -1013f), -1276f, -1008f)))));
            switch (0i) {
                case 2147483647i: {
                    global0 = array<Struct_4, 29>();
                    var var_2 = var_1.xy;
                    var var_3 = var_2.x;
                    let var_4 = -vec3<i32>(u_input.a ^ u_input.a, -49i, countOneBits(u_input.a));
                    var_3 = -1236f;
                }
                case 2999i: {
                    let var_2 = Struct_4(_wgslsmith_sub_u32(~func_6(vec2<bool>(false, true), _wgslsmith_div_vec3_i32(vec3<i32>(i32(-2147483648), -17744i, i32(-2147483648)), vec3<i32>(u_input.a, u_input.a, u_input.a))), func_6(select(vec2<bool>(true, false), vec2<bool>(true, true), false), vec3<i32>(1i, _wgslsmith_div_i32(u_input.a, u_input.a), _wgslsmith_mod_i32(u_input.a, u_input.a)))));
                }
                case -1i: {
                    var var_2 = Struct_2(_wgslsmith_f_op_vec4_f32(exp2(vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(2086f, 820f, false))), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(trunc(var_1.x)), _wgslsmith_f_op_f32(-1881f * var_1.x))), var_1.x, _wgslsmith_f_op_f32(var_1.x * _wgslsmith_div_f32(-971f, 831f))))), Struct_1(-886f), ~vec3<u32>(21303u, var_0, _wgslsmith_add_u32(var_0, 0u)) & global1[_wgslsmith_index_u32(~var_0, 30u)], Struct_1(var_1.x), -26574i);
                    var var_3 = !select(vec2<bool>(true, true), vec2<bool>(true, false), false);
                    var var_4 = vec4<bool>(var_3.x, all(select(select(select(vec3<bool>(var_3.x, true, false), vec3<bool>(true, var_3.x, false), vec3<bool>(var_3.x, true, var_3.x)), select(vec3<bool>(false, true, var_3.x), vec3<bool>(true, var_3.x, true), var_3.x), !var_3.x), !(!vec3<bool>(false, true, var_3.x)), var_3.x)), var_3.x, any(vec3<bool>(false, any(select(vec4<bool>(false, var_3.x, true, true), vec4<bool>(var_3.x, var_3.x, false, var_3.x), false)), ~1338i != var_2.e)));
                    var var_5 = ~(~var_2.c.x);
                }
                default: {
                    global2 = false;
                    let var_2 = Struct_2(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(1194f, var_1.x, _wgslsmith_f_op_f32(ceil(var_1.x)), _wgslsmith_f_op_f32(-var_1.x)) + _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(min(vec4<f32>(var_1.x, var_1.x, -978f, var_1.x), vec4<f32>(var_1.x, -256f, var_1.x, 476f)))))), Struct_1(var_1.x), ~(~global1[_wgslsmith_index_u32(_wgslsmith_add_u32(~var_0, ~var_0), 30u)]), Struct_1(925f), _wgslsmith_div_i32(_wgslsmith_add_i32(u_input.a, ~_wgslsmith_div_i32(u_input.a, u_input.a)), u_input.a));
                    global0 = array<Struct_4, 29>();
                }
            }
        }
    }
    let var_2 = max((_wgslsmith_sub_i32(u_input.a, u_input.a) >> (_wgslsmith_mult_u32(var_0, 39727u) % 32u)) | -u_input.a, _wgslsmith_dot_vec2_i32(~(~vec2<i32>(u_input.a, u_input.a)), _wgslsmith_sub_vec2_i32(vec2<i32>(u_input.a, -30301i) >> (vec2<u32>(var_0, 0u) % vec2<u32>(32u)), vec2<i32>(u_input.a, u_input.a) ^ vec2<i32>(u_input.a, i32(-2147483648)))) >> (var_0 % 32u));
    return ~1i;
}

fn func_7(arg_0: i32, arg_1: f32, arg_2: vec4<bool>, arg_3: vec4<i32>) -> bool {
    var var_0 = _wgslsmith_div_i32(arg_0, max(arg_0 ^ (_wgslsmith_add_i32(-28956i, u_input.a) ^ _wgslsmith_dot_vec3_i32(arg_3.yzz, vec3<i32>(u_input.a, i32(-2147483648), arg_3.x))), 1i));
    var var_1 = Struct_5(_wgslsmith_f_op_vec3_f32(abs(vec3<f32>(289f, 189f, arg_1))), 0u, global0[_wgslsmith_index_u32(abs(0u), 29u)], Struct_3(_wgslsmith_f_op_f32(round(864f)), -u_input.a, _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(min(arg_1, 1000f)), -766f))))));
    let var_2 = ~48557u;
    if (any(arg_2.xwy)) {
        let var_3 = Struct_5(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(sign(vec3<f32>(arg_1, -1707f, var_1.a.x))))), var_2, global0[_wgslsmith_index_u32(17685u, 29u)], var_1.d);
        let var_4 = vec4<f32>(220f, _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_1)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_1)) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(499f)))))), _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(var_1.d.c + var_3.d.a))), var_3.d.a);
        global2 = var_2 == (7220u & countOneBits(var_3.c.a));
        let var_5 = var_3.a;
    }
    global2 = all(select(arg_2.zzz, arg_2.xyw, !select(arg_2.x, false, arg_1 > arg_1)));
    return any(!vec2<bool>(all(!arg_2.wzx), true));
}

fn func_4() -> vec4<f32> {
    var var_0 = true;
    for (; func_7(func_5(), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(-365f - _wgslsmith_f_op_f32(731f * 487f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(246f, -1178f))))), select(vec4<bool>(any(select(vec2<bool>(true, false), vec2<bool>(false, true), false)), !(0i < u_input.a), true, all(vec2<bool>(true, true)) && true), vec4<bool>(true, false, _wgslsmith_f_op_f32(sign(-962f)) != _wgslsmith_f_op_f32(sign(542f)), select(true, true, false)), select(select(vec4<bool>(true, true, true, true), vec4<bool>(false, true, true, false), true), !select(vec4<bool>(false, true, false, false), vec4<bool>(false, false, true, true), vec4<bool>(true, false, false, true)), vec4<bool>(true, all(vec4<bool>(true, true, true, true)), true, all(vec3<bool>(true, true, false))))), vec4<i32>(~(-u_input.a | ~u_input.a), _wgslsmith_add_i32(_wgslsmith_dot_vec2_i32(~vec2<i32>(-27860i, u_input.a), countOneBits(vec2<i32>(-1i, u_input.a))), 2147483647i), 5838i, i32(-1i) * -51678i)); ) {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        var var_1 = Struct_2(vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(1f, 254f, all(vec3<bool>(true, false, true)))) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-321f))), _wgslsmith_f_op_f32(-1298f), _wgslsmith_f_op_f32(-1000f), -1123f), Struct_1(970f), vec3<u32>(12787u, 4294967295u, countOneBits(~0u)), Struct_1(-989f), -62539i);
    }
    global2 = select(!all(vec2<bool>(true, true)), !(!(2728i > u_input.a) & true), any(!select(select(vec2<bool>(true, false), vec2<bool>(true, true), true), vec2<bool>(false, false), vec2<bool>(true, true))));
    switch (~(i32(-1i) * -u_input.a)) {
        default: {
            switch (~abs(~_wgslsmith_clamp_i32(func_5(), _wgslsmith_sub_i32(u_input.a, 55532i), u_input.a))) {
                default: {
                    var var_1 = vec4<i32>(u_input.a, u_input.a, reverseBits(~1i), ~(-(_wgslsmith_add_i32(u_input.a, -25987i) & u_input.a)));
                    var var_2 = Struct_5(_wgslsmith_f_op_vec3_f32(exp2(vec3<f32>(1f, 333f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(-517f)))))), 8230u, global0[_wgslsmith_index_u32(~4457u, 29u)], Struct_3(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(646f * _wgslsmith_f_op_f32(-1750f - -531f))), ~func_5(), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(2010f, 398f, true))) - 1302f)));
                    var var_3 = Struct_2(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(vec4<f32>(1609f, -637f, 429f, -1000f) + vec4<f32>(1270f, var_2.d.c, var_2.a.x, var_2.d.c)), _wgslsmith_div_vec4_f32(vec4<f32>(-585f, -809f, -1157f, var_2.a.x), vec4<f32>(-1000f, var_2.a.x, -1012f, var_2.d.c)), select(vec4<bool>(true, false, false, true), vec4<bool>(true, true, false, true), false))) - _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-1029f, 1766f, var_2.a.x, -445f)) - _wgslsmith_f_op_vec4_f32(-vec4<f32>(var_2.a.x, var_2.a.x, -197f, var_2.a.x)))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(var_2.a.x, var_2.a.x, -551f, 243f)))), select(vec4<bool>(true, true, true, true), vec4<bool>(all(vec2<bool>(false, true)), all(vec4<bool>(true, true, false, false)), true, var_2.d.a >= var_2.a.x), any(select(vec4<bool>(true, false, true, false), vec4<bool>(true, false, false, false), true))))), Struct_1(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(var_2.a.x)) - _wgslsmith_f_op_f32(trunc(1457f)))), select(vec3<u32>(59149u, 1u, var_2.b), countOneBits(global1[_wgslsmith_index_u32(_wgslsmith_mod_u32(~14242u, 13822u), 30u)]), var_2.a.x > _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(1048f)))), Struct_1(var_2.d.c), firstLeadingBit(abs(~var_2.d.b | 0i)));
                    var var_4 = var_2.a;
                }
            }
        }
    }
    if (true) {
        var var_1 = vec4<bool>(~1u != _wgslsmith_clamp_u32(func_6(vec2<bool>(true, true), _wgslsmith_add_vec3_i32(vec3<i32>(i32(-2147483648), 1i, -9238i), vec3<i32>(u_input.a, u_input.a, u_input.a))), ~45578u >> (1u % 32u), 4294967295u), true || select(true, false, true), !(~_wgslsmith_add_u32(74857u, 8807u) == select(countOneBits(1u), 1u, any(vec3<bool>(false, true, false)))), !any(vec2<bool>(false, true)));
    }
    return _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(-735f, -379f, 1581f, -1632f) + _wgslsmith_f_op_vec4_f32(vec4<f32>(-580f, 2055f, 225f, 308f) - vec4<f32>(474f, 1000f, 290f, -1000f))) - _wgslsmith_f_op_vec4_f32(select(vec4<f32>(274f, 352f, 1084f, -462f), vec4<f32>(-1800f, 876f, 780f, 832f), true)))) + _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(max(vec4<f32>(-111f, 113f, 385f, -364f), vec4<f32>(1540f, 1606f, 327f, 1325f))), vec4<f32>(-791f, -1711f, 1600f, -240f))) + _wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(max(255f, -1385f)), _wgslsmith_f_op_f32(1926f + 834f), _wgslsmith_f_op_f32(round(-2210f)), _wgslsmith_div_f32(-539f, -2602f)) * vec4<f32>(_wgslsmith_f_op_f32(-514f), _wgslsmith_f_op_f32(trunc(1612f)), _wgslsmith_f_op_f32(select(-2257f, -561f, true)), _wgslsmith_f_op_f32(-814f)))));
}

fn func_3(arg_0: u32) -> vec3<i32> {
    let var_0 = vec2<u32>(4294967295u, _wgslsmith_mod_u32(_wgslsmith_add_u32(1u, 1u), 1u));
    loop {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        let var_1 = Struct_3(1756f, ~u_input.a, 1841f);
        global2 = false;
        let var_2 = 1088f;
        var var_3 = 23887i;
        var var_4 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(round(vec2<f32>(var_1.c, 1473f))));
    }
    if (true) {
        global1 = array<vec3<u32>, 30>();
    }
    switch (u_input.a) {
        case -1i: {
            loop {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                continue;
            }
        }
        case 1i: {
            let var_1 = !(!any(vec4<bool>(true, true, true, true)));
            var var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(1911f + _wgslsmith_f_op_f32(-215f))))));
            let var_3 = Struct_2(_wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(func_4()), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(-vec4<f32>(268f, -919f, -634f, -377f))))))), Struct_1(-119f), abs(firstTrailingBit(vec3<u32>(var_0.x, 1u, 35497u))) >> ((global1[_wgslsmith_index_u32(var_0.x, 30u)] ^ abs(vec3<u32>(36948u, 151397u, 1u))) % vec3<u32>(32u)), Struct_1(-770f), ~(-u_input.a));
            for (var var_4 = -40530i; !var_1; var_4 += 1i) {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                let var_5 = select(select(vec3<bool>(false, all(vec4<bool>(false, var_1, var_1, var_1)), false | select(false, var_1, var_1)), !select(vec3<bool>(true, true, false), !vec3<bool>(var_1, true, true), false), select(!vec3<bool>(var_1, var_1, true), !(!vec3<bool>(false, var_1, var_1)), select(vec3<bool>(var_1, true, false), vec3<bool>(var_1, var_1, true), !vec3<bool>(false, true, var_1)))), vec3<bool>(var_1, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(var_3.d.a))) < var_3.a.x, var_3.c.x >= arg_0), true);
                continue;
            }
        }
        case -4536i: {
            var var_1 = ~abs(global1[_wgslsmith_index_u32(select(abs(arg_0), min(arg_0, arg_0), true), 30u)]) << (global1[_wgslsmith_index_u32(~_wgslsmith_sub_u32(firstLeadingBit(~arg_0), 80912u), 30u)] % vec3<u32>(32u));
            global2 = true;
            let var_2 = !(!select(select(vec2<bool>(false, false), select(vec2<bool>(true, true), vec2<bool>(false, false), false), false), select(vec2<bool>(true, true), vec2<bool>(false, true), vec2<bool>(true, false)), false));
        }
        default: {
            let var_1 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec4_f32(func_4()).wyy - _wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-1000f), _wgslsmith_f_op_f32(f32(-1f) * -1036f))), _wgslsmith_f_op_f32(trunc(1000f)), _wgslsmith_f_op_f32(-460f + 1000f))));
            global1 = array<vec3<u32>, 30>();
            var var_2 = Struct_1(_wgslsmith_f_op_f32(floor(_wgslsmith_div_f32(1460f, _wgslsmith_f_op_f32(min(-411f, 590f))))));
            loop {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                var var_3 = _wgslsmith_div_vec4_u32(vec4<u32>(max(_wgslsmith_add_u32(17738u >> (var_0.x % 32u), 1u), func_6(vec2<bool>(true, true), _wgslsmith_sub_vec3_i32(vec3<i32>(u_input.a, -1i, 17275i), vec3<i32>(u_input.a, -1i, -15783i)))), arg_0, 0u, 1u), vec4<u32>(~(~arg_0), ~_wgslsmith_clamp_u32(_wgslsmith_dot_vec3_u32(vec3<u32>(var_0.x, 4294967295u, 1u), global1[_wgslsmith_index_u32(var_0.x, 30u)]), 4294967295u, abs(arg_0)), 1u, 27975u));
                let var_4 = ~(_wgslsmith_mod_vec4_i32(_wgslsmith_div_vec4_i32(reverseBits(vec4<i32>(-8343i, 2147483647i, i32(-2147483648), 16603i)), _wgslsmith_mod_vec4_i32(vec4<i32>(6432i, -16056i, 1i, 1i), vec4<i32>(u_input.a, 0i, u_input.a, i32(-2147483648)))), vec4<i32>(_wgslsmith_clamp_i32(-31829i, 27762i, 44793i), u_input.a & -20518i, func_5(), i32(-2147483648))) << (~(vec4<u32>(9769u, arg_0, 4595u, arg_0) & ~vec4<u32>(var_3.x, 23980u, 4294967295u, var_0.x)) % vec4<u32>(32u)));
                break;
            }
            let var_3 = global0[_wgslsmith_index_u32(~24071u, 29u)];
        }
    }
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
    }
    return ~_wgslsmith_mod_vec3_i32(_wgslsmith_clamp_vec3_i32(vec3<i32>(0i, 2147483647i, i32(-2147483648)), vec3<i32>(u_input.a, u_input.a, -40133i), vec3<i32>(2147483647i, u_input.a, u_input.a)) | max(vec3<i32>(-1i, 1i, 0i), vec3<i32>(i32(-2147483648), i32(-2147483648), u_input.a)), _wgslsmith_div_vec3_i32(-vec3<i32>(-30003i, -16226i, u_input.a), vec3<i32>(2147483647i, u_input.a, 0i) | vec3<i32>(2147483647i, i32(-2147483648), -3402i))) >> (global1[_wgslsmith_index_u32(_wgslsmith_mult_u32(~(_wgslsmith_clamp_u32(var_0.x, 16898u, arg_0) ^ _wgslsmith_add_u32(var_0.x, 0u)), arg_0), 30u)] % vec3<u32>(32u));
}

fn func_8(arg_0: vec3<i32>, arg_1: i32, arg_2: f32, arg_3: vec4<f32>) -> f32 {
    global2 = !all(select(vec2<bool>(true, true), select(vec2<bool>(true, true), vec2<bool>(true, true), u_input.a != u_input.a), false));
    let var_0 = i32(-2147483648);
    for (var var_1 = 1i; any(select(select(vec3<bool>(false, true, true), vec3<bool>(true, true, all(vec2<bool>(true, false))), select(vec3<bool>(true, true, true), vec3<bool>(false, true, false), all(vec3<bool>(false, true, false)))), vec3<bool>(!(-20422i > arg_1), (arg_1 == -34618i) || any(vec3<bool>(true, false, true)), all(select(vec3<bool>(true, true, false), vec3<bool>(false, true, false), false))), true)); var_1 += 1i) {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        var var_2 = _wgslsmith_div_vec3_u32(~vec3<u32>(54101u, 1u, abs(firstLeadingBit(1u))), vec3<u32>(~(~39090u), abs(_wgslsmith_mult_u32(13457u, 1u)) ^ _wgslsmith_mod_u32(firstTrailingBit(1u), ~15695u), 37573u));
        loop {
            if (LOOP_COUNTERS[9u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
            var var_3 = arg_1;
            continue;
        }
        var var_3 = Struct_5(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(arg_3.x, arg_3.x, _wgslsmith_f_op_f32(exp2(arg_3.x))))), var_2.x, Struct_4(abs(var_2.x << ((var_2.x ^ 0u) % 32u))), Struct_3(_wgslsmith_f_op_f32(sign(arg_2)), arg_0.x, _wgslsmith_f_op_f32(1000f + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(arg_3.x))))));
    }
    var var_1 = countOneBits(vec2<u32>(func_6(select(vec2<bool>(false, false), select(vec2<bool>(false, false), vec2<bool>(false, true), vec2<bool>(false, false)), vec2<bool>(true, true)), max(arg_0 >> (vec3<u32>(10560u, 24756u, 1u) % vec3<u32>(32u)), ~vec3<i32>(arg_1, var_0, 2147483647i))), 4294967295u));
    switch (~_wgslsmith_add_i32(-1i, _wgslsmith_div_i32(u_input.a, ~firstTrailingBit(-10428i)))) {
        default: {
            let var_2 = arg_0.xz;
            return _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(1461f)));
        }
    }
    return arg_2;
}

fn func_2() -> i32 {
    var var_0 = _wgslsmith_f_op_f32(func_8(-(~func_3(4294967295u)), i32(-2147483648), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_vec4_f32(func_4()).x + _wgslsmith_f_op_f32(-1961f)))), _wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(1553f, 1688f, -852f, -370f))))))));
    let var_1 = Struct_5(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(vec3<f32>(356f, 1488f, 1097f), vec3<f32>(858f, 807f, 1845f))), _wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(vec3<f32>(1055f, -630f, -1042f) + vec3<f32>(1000f, 299f, -1000f)))), true)) + _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(abs(vec3<f32>(139f, 355f, -458f))) + _wgslsmith_f_op_vec3_f32(-vec3<f32>(1000f, 444f, 331f))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(floor(vec3<f32>(-1000f, -646f, -1111f)))), vec3<bool>(true, true, true)))), 45167u, Struct_4(0u), Struct_3(1520f, 1i, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(-459f)) + _wgslsmith_f_op_f32(f32(-1f) * -1000f)) * _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(ceil(-1225f)), 1528f)))));
    var var_2 = _wgslsmith_f_op_f32(func_8(abs(firstTrailingBit(-vec3<i32>(var_1.d.b, var_1.d.b, i32(-2147483648)))), func_5(), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(floor(2555f)), _wgslsmith_f_op_f32(abs(var_1.a.x)))) * _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(var_1.d.c, var_1.d.c, false)) + var_1.d.c)))), _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(var_1.d.c, -195f, var_1.a.x, 1000f))) * _wgslsmith_f_op_vec4_f32(max(vec4<f32>(882f, -1364f, var_1.d.a, var_1.d.c), vec4<f32>(var_1.a.x, var_1.a.x, -630f, 1175f)))), _wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(-vec4<f32>(112f, -323f, var_1.d.c, var_1.d.a)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(var_1.a.x, 1730f, -200f, var_1.a.x)))), !(1898i != u_input.a))), vec4<f32>(var_1.a.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-733f * 238f) - 142f), var_1.a.x, var_1.d.a), select(!select(vec4<bool>(false, false, false, false), vec4<bool>(true, true, false, true), false), !select(vec4<bool>(true, true, false, false), vec4<bool>(true, false, false, false), true), vec4<bool>(true, true, true, true))))));
    global2 = any(select(select(!select(vec3<bool>(true, false, false), vec3<bool>(true, true, false), true), select(vec3<bool>(false, true, false), vec3<bool>(true, true, false), vec3<bool>(true, true, true)), true), vec3<bool>(false, any(vec3<bool>(true, true, true)), all(vec3<bool>(true, false, true))), 4294967295u < var_1.b));
    loop {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        if (true) {
            let var_3 = Struct_5(vec3<f32>(_wgslsmith_f_op_f32(-550f - 1000f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(var_1.d.c * -349f))), var_1.a.x), reverseBits(0u), Struct_4(var_1.c.a), var_1.d);
            var var_4 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -740f)));
            var var_5 = false;
            var var_6 = _wgslsmith_dot_vec3_u32(~select(vec3<u32>(4294967295u, 37822u, 0u) | vec3<u32>(var_3.b, 4294967295u, var_1.c.a), min(countOneBits(global1[_wgslsmith_index_u32(13881u, 30u)]), global1[_wgslsmith_index_u32(112786u, 30u)]), _wgslsmith_f_op_f32(-var_1.d.c) < _wgslsmith_f_op_f32(ceil(-345f))), global1[_wgslsmith_index_u32(20746u, 30u)]);
            let var_7 = Struct_5(_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(var_3.a + _wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(-var_1.a), vec3<f32>(383f, 1063f, var_3.d.a)))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec4_f32(func_4()).zyz), select(select(select(vec3<bool>(false, false, false), vec3<bool>(false, false, false), vec3<bool>(true, true, false)), select(vec3<bool>(true, true, true), vec3<bool>(true, false, true), true), vec3<bool>(true, false, true)), vec3<bool>(true, all(vec4<bool>(true, false, false, false)), all(vec2<bool>(true, true))), true))), _wgslsmith_sub_u32(~(_wgslsmith_dot_vec4_u32(vec4<u32>(1u, var_1.b, var_3.b, var_3.b), vec4<u32>(16215u, var_1.c.a, var_1.c.a, 1u)) ^ reverseBits(var_3.b)), ~(~1u)), var_1.c, Struct_3(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_1.a.x) * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_1.d.c))), firstTrailingBit(u_input.a), 1f));
        }
    }
    return _wgslsmith_mod_i32(min(-45158i, 64902i), -1i);
}

fn func_1() -> Struct_2 {
    global1 = array<vec3<u32>, 30>();
    var var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -693f));
    switch (-u_input.a) {
        case 40992i: {
            if (firstTrailingBit(_wgslsmith_clamp_i32(_wgslsmith_add_i32(_wgslsmith_clamp_i32(0i, 2626i, i32(-2147483648)), u_input.a), 3428i, _wgslsmith_clamp_i32(func_2(), ~0i, u_input.a))) == ((-_wgslsmith_add_i32(u_input.a, 21410i) >> (_wgslsmith_dot_vec4_u32(vec4<u32>(1u, 1u, 1u, 1u), _wgslsmith_clamp_vec4_u32(vec4<u32>(0u, 1u, 50457u, 4294967295u), vec4<u32>(55844u, 107967u, 4294967295u, 80700u), vec4<u32>(0u, 24502u, 0u, 8238u))) % 32u)) << (33993u % 32u))) {
                global1 = array<vec3<u32>, 30>();
                var var_1 = _wgslsmith_f_op_f32(-1000f);
                global0 = array<Struct_4, 29>();
                var var_2 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-349f)) + _wgslsmith_f_op_f32(283f + _wgslsmith_f_op_f32(-837f)));
                let var_3 = global1[_wgslsmith_index_u32(max(1u, 2075u), 30u)];
            }
            return Struct_2(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(1000f, 968f, -244f, 2148f)) - _wgslsmith_f_op_vec4_f32(max(vec4<f32>(270f, -735f, 393f, 452f), vec4<f32>(197f, -758f, 112f, -2065f))))) + vec4<f32>(1519f, -1000f, -785f, _wgslsmith_f_op_f32(select(_wgslsmith_div_f32(806f, 577f), 1051f, false)))), Struct_1(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(min(-1000f, -509f)))) * _wgslsmith_f_op_f32(1118f * _wgslsmith_f_op_f32(abs(-159f))))), vec3<u32>(~reverseBits(1u), ~(~(~1u)), _wgslsmith_div_u32(70052u, _wgslsmith_dot_vec4_u32(vec4<u32>(1u, 1u, 1u, 1u), vec4<u32>(52554u, 39946u, 0u, 1u)))), Struct_1(704f), u_input.a);
        }
        case i32(-2147483648): {
        }
        case 17289i: {
            var var_1 = Struct_3(_wgslsmith_f_op_f32(-1836f - -1000f), u_input.a, _wgslsmith_f_op_f32(-1f));
            var_1 = Struct_3(_wgslsmith_f_op_f32(trunc(245f)), _wgslsmith_dot_vec4_i32(-firstLeadingBit(vec4<i32>(2147483647i, 2147483647i, u_input.a, u_input.a)), abs((vec4<i32>(u_input.a, -1i, u_input.a, var_1.b) >> (vec4<u32>(1u, 1u, 33727u, 1u) % vec4<u32>(32u))) & select(vec4<i32>(var_1.b, 0i, 1i, 2147483647i), vec4<i32>(-25015i, var_1.b, u_input.a, var_1.b), false))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -315f) - 1f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-var_1.a))) * _wgslsmith_f_op_f32(470f * 1126f))));
            return Struct_2(vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_1.c)), _wgslsmith_f_op_f32(542f + var_1.c), _wgslsmith_f_op_f32(trunc(var_1.a)), var_1.c), Struct_1(_wgslsmith_div_f32(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(var_1.a - -683f))), 817f)), vec3<u32>(select(_wgslsmith_dot_vec3_u32(_wgslsmith_div_vec3_u32(vec3<u32>(4294967295u, 0u, 22060u), global1[_wgslsmith_index_u32(4294967295u, 30u)]), vec3<u32>(0u, 4294967295u, 4294967295u)), firstLeadingBit(_wgslsmith_dot_vec3_u32(vec3<u32>(4294967295u, 1u, 4294967295u), vec3<u32>(19041u, 29337u, 4294967295u))), false), ~_wgslsmith_clamp_u32(~0u, 1u, ~61201u), _wgslsmith_add_u32(49288u, 0u)), Struct_1(var_1.c), _wgslsmith_mult_i32(-22626i, select(0i, 22310i, true)));
        }
        case 37481i: {
            switch (996i) {
                case 47696i: {
                }
                default: {
                }
            }
            for (var var_1 = 21085i; any(vec2<bool>(true, true)); ) {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                var var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(400f + -2167f))))) + _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(1f - _wgslsmith_f_op_f32(select(1084f, 532f, true)))))));
                break;
            }
        }
        default: {
            if (true) {
            }
        }
    }
    if (func_7(u_input.a, _wgslsmith_f_op_f32(f32(-1f) * -1000f), select(vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true), select(vec4<bool>(false, true, false, true), select(vec4<bool>(false, false, false, true), vec4<bool>(false, false, false, true), false), vec4<bool>(false, false, true, false))), vec4<i32>(_wgslsmith_dot_vec4_i32(select(vec4<i32>(u_input.a, 1i, u_input.a, u_input.a), vec4<i32>(u_input.a, u_input.a, 0i, 2147483647i), false), vec4<i32>(u_input.a, -52836i, u_input.a, -60797i) ^ vec4<i32>(u_input.a, u_input.a, -21822i, 2147483647i)), u_input.a, u_input.a, i32(-2147483648))) & true) {
        var var_1 = abs(vec3<i32>(u_input.a, u_input.a >> (_wgslsmith_dot_vec3_u32(_wgslsmith_mult_vec3_u32(global1[_wgslsmith_index_u32(22591u, 30u)], global1[_wgslsmith_index_u32(0u, 30u)]), global1[_wgslsmith_index_u32(~12675u, 30u)]) % 32u), _wgslsmith_sub_i32(0i, func_2())));
        var var_2 = vec4<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1000f) + _wgslsmith_f_op_f32(f32(-1f) * -165f))), _wgslsmith_f_op_f32(ceil(-938f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_8(func_3(~66009u), u_input.a, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(-541f))), _wgslsmith_f_op_vec4_f32(-vec4<f32>(661f, 1826f, 1205f, 2003f))))), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(f32(-1f) * -160f), -1000f)))), _wgslsmith_f_op_f32(-1245f * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(-919f)))), any(select(select(vec4<bool>(true, false, true, true), vec4<bool>(true, false, true, true), vec4<bool>(false, true, true, false)), vec4<bool>(true, true, true, true), select(vec4<bool>(true, true, true, false), vec4<bool>(false, true, false, true), vec4<bool>(false, false, false, false)))))), -759f);
        switch (~(-1i) | func_3(0u).x) {
            case 30120i: {
                var var_3 = _wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(func_4()) + _wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(-var_2.x), _wgslsmith_f_op_f32(var_2.x - var_2.x), -1000f, _wgslsmith_f_op_f32(sign(var_2.x))) + _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(var_2.x, -701f, var_2.x, 1084f)) - _wgslsmith_f_op_vec4_f32(-vec4<f32>(var_2.x, var_2.x, 238f, var_2.x)))))));
                var var_4 = _wgslsmith_div_vec3_i32(_wgslsmith_mod_vec3_i32(~vec3<i32>(~var_1.x, ~(-8636i), u_input.a), vec3<i32>(~func_3(52750u).x, var_1.x, var_1.x)), -(~max(vec3<i32>(59024i, u_input.a, 0i), _wgslsmith_sub_vec3_i32(vec3<i32>(var_1.x, 15308i, 1i), vec3<i32>(i32(-2147483648), u_input.a, 34074i)))));
                let var_5 = vec4<bool>(_wgslsmith_add_i32(~(1i >> (0u % 32u)), var_1.x) == _wgslsmith_dot_vec3_i32(-_wgslsmith_mod_vec3_i32(vec3<i32>(-16939i, i32(-2147483648), 2147483647i), vec3<i32>(var_4.x, var_1.x, var_4.x)), ~_wgslsmith_sub_vec3_i32(vec3<i32>(2147483647i, u_input.a, 44318i), vec3<i32>(var_4.x, 1i, u_input.a))), !(!all(vec4<bool>(true, true, true, true))), true, !all(select(vec2<bool>(true, true), vec2<bool>(false, false), vec2<bool>(true, true))));
                global2 = false;
            }
            default: {
            }
        }
        global1 = array<vec3<u32>, 30>();
        let var_3 = vec2<bool>(func_7(var_1.x, _wgslsmith_f_op_f32(var_2.x - _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(var_2.x * -1000f)))), select(vec4<bool>(true, true, true, true), !select(vec4<bool>(false, false, false, false), vec4<bool>(false, false, false, false), true), select(vec4<bool>(true, true, false, false), vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true))), _wgslsmith_add_vec4_i32(~vec4<i32>(var_1.x, 1i, 2147483647i, 41369i), ~(vec4<i32>(var_1.x, 40268i, i32(-2147483648), 50828i) & vec4<i32>(u_input.a, var_1.x, 40070i, u_input.a)))), !all(!select(vec4<bool>(true, false, false, true), vec4<bool>(false, true, true, true), true)));
    }
    let var_1 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(round(vec3<f32>(-1428f, -1000f, _wgslsmith_f_op_f32(abs(-1000f))))) - _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(select(vec3<f32>(-805f, -1000f, 138f), vec3<f32>(1686f, 1503f, -1365f), vec3<bool>(true, true, false)))), _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-857f, 578f, 520f)), _wgslsmith_f_op_vec3_f32(select(vec3<f32>(1426f, 984f, -394f), vec3<f32>(1340f, 1478f, 297f), vec3<bool>(false, true, false))), true))))));
    return Struct_2(vec4<f32>(_wgslsmith_f_op_f32(var_1.x + var_1.x), var_1.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(114f))) + _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(f32(-1f) * -816f)))), _wgslsmith_f_op_f32(-953f + _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(f32(-1f) * -718f))))), Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_1.x))), _wgslsmith_sub_vec3_u32(~_wgslsmith_clamp_vec3_u32(~global1[_wgslsmith_index_u32(17477u, 30u)], global1[_wgslsmith_index_u32(max(15958u, 4294967295u), 30u)], reverseBits(vec3<u32>(0u, 32514u, 17614u))), ~global1[_wgslsmith_index_u32(_wgslsmith_add_u32(29098u, 0u), 30u)] >> (global1[_wgslsmith_index_u32(1u, 30u)] % vec3<u32>(32u))), Struct_1(var_1.x), u_input.a);
}

fn func_9(arg_0: vec4<i32>, arg_1: Struct_2, arg_2: i32, arg_3: vec2<u32>) -> Struct_1 {
    var var_0 = Struct_1(_wgslsmith_f_op_f32(-arg_1.d.a));
    var var_1 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(ceil(arg_1.a)) * vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(func_8(vec3<i32>(-23939i, 2147483647i, u_input.a), arg_1.e, var_0.a, vec4<f32>(arg_1.b.a, var_0.a, arg_1.a.x, -166f))) * _wgslsmith_f_op_f32(-arg_1.d.a)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-844f)), -1000f, 1f)));
    switch (27798i) {
        case -64045i: {
            let var_2 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -186f))) + var_1.x) - _wgslsmith_f_op_f32(abs(-725f)));
            for (var var_3 = ~select(-6811i, abs(64414i ^ (2147483647i ^ arg_2)), !all(select(vec3<bool>(false, true, false), vec3<bool>(true, false, false), false))); all(select(vec3<bool>(all(vec2<bool>(true, true)), func_7(1i, var_2, vec4<bool>(true, true, true, true), vec4<i32>(arg_1.e, 6232i, 0i, -1i)), any(select(vec3<bool>(true, false, true), vec3<bool>(true, false, true), vec3<bool>(false, false, true)))), vec3<bool>(select(true, false, true) && any(vec3<bool>(false, true, false)), any(vec3<bool>(false, true, false)), select(true, true, true)), true)); var_3 += 1i) {
                if (LOOP_COUNTERS[12u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
                let var_4 = !select(!func_7(~(-1i), var_0.a, vec4<bool>(true, true, true, true), ~arg_0), _wgslsmith_f_op_f32(exp2(arg_1.a.x)) >= _wgslsmith_f_op_f32(abs(-1655f)), false);
                global2 = true;
                var var_5 = Struct_3(1592f, _wgslsmith_dot_vec4_i32(max((arg_0 << (vec4<u32>(0u, 55811u, arg_3.x, arg_3.x) % vec4<u32>(32u))) ^ _wgslsmith_mult_vec4_i32(vec4<i32>(-1i, 4758i, 1i, arg_1.e), vec4<i32>(i32(-2147483648), arg_1.e, 2147483647i, 21453i)), arg_0), arg_0), _wgslsmith_f_op_f32(trunc(var_0.a)));
                return arg_1.d;
            }
            global0 = array<Struct_4, 29>();
        }
        default: {
            if (any(vec4<bool>(true, true, true, true))) {
                global0 = array<Struct_4, 29>();
                var_0 = Struct_1(_wgslsmith_f_op_f32(select(func_1().b.a, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(max(var_1.x, var_1.x)), -1000f))), _wgslsmith_sub_u32(arg_1.c.x, arg_3.x) < 2830u)));
                var_1 = vec4<f32>(arg_1.d.a, var_0.a, -559f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(var_1.x + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_8(arg_0.yzy, arg_1.e, arg_1.a.x, arg_1.a))))));
                let var_2 = arg_1.a.xyz;
                let var_3 = arg_3.x;
            }
            global0 = array<Struct_4, 29>();
        }
    }
    var var_2 = max(arg_1.e, -_wgslsmith_dot_vec3_i32(reverseBits(_wgslsmith_sub_vec3_i32(vec3<i32>(-43259i, 2147483647i, 26585i), arg_0.zxx)), vec3<i32>(min(arg_2, 0i), ~(-28079i), i32(-1i) * -47281i)));
    switch (u_input.a) {
        default: {
            loop {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                let var_3 = Struct_5(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(exp2(arg_1.d.a)), 1091f, _wgslsmith_f_op_f32(-1000f * var_1.x)))), arg_3.x, Struct_4(71233u), Struct_3(_wgslsmith_f_op_f32(-247f - _wgslsmith_f_op_f32(-var_0.a)), 992i, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_0.a)))));
            }
            global1 = array<vec3<u32>, 30>();
            let var_3 = func_1();
        }
    }
    return arg_1.d;
}

@compute
@workgroup_size(1)
fn main() {
    global1 = array<vec3<u32>, 30>();
    if (select(false, true, true)) {
        var var_0 = ~(~27200i);
    }
    if (true) {
        var var_0 = Struct_2(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(abs(_wgslsmith_f_op_vec4_f32(vec4<f32>(154f, -508f, 868f, 1057f) * _wgslsmith_f_op_vec4_f32(-vec4<f32>(-732f, -664f, -341f, 543f))))) + vec4<f32>(1f, 1f, 1f, 1f)), func_9(vec4<i32>(~(~u_input.a), 1i, u_input.a, 1i), func_1(), 1i, select(abs(vec2<u32>(0u, 50144u)), ~reverseBits(vec2<u32>(1u, 0u)), _wgslsmith_div_i32(7488i, -1i) > func_5())), vec3<u32>(func_1().c.x, ~(~abs(4294967295u)), _wgslsmith_dot_vec3_u32(global1[_wgslsmith_index_u32(_wgslsmith_mod_u32(10321u, 9484u), 30u)], _wgslsmith_div_vec3_u32(vec3<u32>(4294967295u, 4294967295u, 27677u), global1[_wgslsmith_index_u32(18665u, 30u)])) | 0u), func_9(-abs(vec4<i32>(1696i, 405i, u_input.a, 61129i)), func_1(), u_input.a, vec2<u32>(1u, 1u) << (_wgslsmith_mult_vec2_u32(vec2<u32>(35814u, 4294967295u), select(vec2<u32>(5314u, 4294967295u), vec2<u32>(6258u, 1u), false)) % vec2<u32>(32u))), u_input.a);
        var var_1 = Struct_3(_wgslsmith_f_op_f32(var_0.b.a - func_1().d.a), func_1().e << (select(~_wgslsmith_div_u32(25253u, var_0.c.x), ~_wgslsmith_mult_u32(var_0.c.x, var_0.c.x), true) % 32u), var_0.b.a);
        switch (~1i) {
            case 1i: {
                var var_2 = _wgslsmith_f_op_f32(1185f * _wgslsmith_f_op_f32(func_8(_wgslsmith_div_vec3_i32(select(vec3<i32>(7463i, i32(-2147483648), var_1.b), _wgslsmith_mod_vec3_i32(vec3<i32>(0i, var_1.b, i32(-2147483648)), vec3<i32>(0i, 65458i, 0i)), all(vec4<bool>(false, true, true, false))), vec3<i32>(var_1.b << (4294967295u % 32u), ~var_1.b, var_1.b >> (4294967295u % 32u))), func_2(), _wgslsmith_f_op_f32(func_8(vec3<i32>(-1i) * -vec3<i32>(29717i, var_0.e, var_0.e), ~u_input.a, func_1().b.a, vec4<f32>(_wgslsmith_f_op_f32(round(var_1.c)), 130f, func_9(vec4<i32>(-72203i, u_input.a, var_0.e, var_1.b), Struct_2(var_0.a, var_0.b, vec3<u32>(var_0.c.x, var_0.c.x, 1u), var_0.b, var_0.e), -1i, var_0.c.zz).a, 1574f))), _wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(var_1.a, var_0.d.a, -962f, var_1.a)), _wgslsmith_f_op_vec4_f32(-var_0.a)) + var_0.a))));
            }
            case -31206i: {
                global2 = any(!select(vec2<bool>(all(vec4<bool>(true, false, true, true)), var_0.d.a >= var_0.b.a), vec2<bool>(true, true), false));
                let var_2 = Struct_1(295f);
                return;
            }
            default: {
            }
        }
        if (true) {
            global0 = array<Struct_4, 29>();
            let var_2 = true;
            global1 = array<vec3<u32>, 30>();
            global1 = array<vec3<u32>, 30>();
            var var_3 = func_1();
        }
    }
    switch (((-17755i | u_input.a) | ~(u_input.a | (u_input.a >> (16210u % 32u)))) ^ abs(~((1i & u_input.a) << (1u % 32u)))) {
        case 0i: {
            loop {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                var var_0 = -818f;
                var_0 = _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(func_8(func_3(~1u), 0i, -1000f, vec4<f32>(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(303f * 479f))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(round(829f)), _wgslsmith_f_op_f32(floor(380f))), 1f, 2074f)))));
                global1 = array<vec3<u32>, 30>();
                global2 = true;
                let var_1 = false;
            }
            for (; ; ) {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            }
            if (all(vec2<bool>((any(vec3<bool>(false, false, true)) != false) & true, true))) {
                var var_0 = _wgslsmith_add_vec2_i32(~(~reverseBits(~vec2<i32>(u_input.a, u_input.a))), vec2<i32>(u_input.a, func_5()) ^ vec2<i32>(~(-75494i), -27715i));
                var var_1 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(step(vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(907f, 1366f))), _wgslsmith_f_op_f32(max(1652f, _wgslsmith_div_f32(210f, 289f)))), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(select(vec2<f32>(-878f, -736f), _wgslsmith_div_vec2_f32(vec2<f32>(-1315f, -456f), vec2<f32>(500f, -139f)), vec2<bool>(false, false))) - _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-479f, -360f)) - _wgslsmith_div_vec2_f32(vec2<f32>(-608f, -279f), vec2<f32>(-337f, 1000f)))))));
                var var_2 = global0[_wgslsmith_index_u32(78382u, 29u)];
                var var_3 = select(select(select(vec3<bool>(true, true, true), select(select(vec3<bool>(false, false, true), vec3<bool>(true, false, false), vec3<bool>(true, true, false)), vec3<bool>(true, false, false), vec3<bool>(false, true, true)), any(vec2<bool>(false, false))), select(vec3<bool>(true, true, true), select(vec3<bool>(false, false, false), vec3<bool>(true, false, false), all(vec4<bool>(false, false, true, false))), !select(vec3<bool>(true, false, false), vec3<bool>(true, true, true), true)), vec3<bool>(true, true, true)), select(!(!select(vec3<bool>(false, true, true), vec3<bool>(false, false, true), vec3<bool>(false, true, false))), !vec3<bool>(var_2.a < var_2.a, true, true), true), !(!(var_0.x != var_0.x) | any(vec3<bool>(true, true, true))));
            }
        }
        default: {
            let var_0 = countOneBits(-_wgslsmith_mult_vec3_i32(vec3<i32>(1i, 4562i, u_input.a) & (vec3<i32>(1i, u_input.a, u_input.a) | vec3<i32>(u_input.a, -1i, u_input.a)), vec3<i32>(u_input.a, abs(u_input.a), _wgslsmith_sub_i32(0i, u_input.a))));
            var var_1 = func_1();
        }
    }
    global0 = array<Struct_4, 29>();
    var var_0 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-736f, 1000f, 838f, 426f)))) * _wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(min(vec4<f32>(-1283f, 1000f, 1000f, -2113f), vec4<f32>(350f, -342f, -1000f, 1598f))), _wgslsmith_f_op_vec4_f32(-vec4<f32>(-1073f, -284f, -467f, -369f)))))));
    let var_1 = false;
    var var_2 = -20868i;
    global1 = array<vec3<u32>, 30>();
    let x = u_input.a;
    s_output = StorageBuffer(0u, vec4<i32>(_wgslsmith_mult_i32(func_5(), ~u_input.a), _wgslsmith_add_i32(-8294i >> (~4294967295u % 32u), _wgslsmith_div_i32(-1i, ~(-15710i))), i32(-2147483648) | func_2(), 0i), var_0.x, _wgslsmith_div_f32(var_0.x, -1000f));
}

`;