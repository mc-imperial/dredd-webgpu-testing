export const input = [127,166,12,16,178,120,116,37,172,241,219,229,71,122,248,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [127,166,12,16,178,120,116,37,172,241,219,229,71,122,248,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[127,166,12,16,178,120,116,37,172,241,219,229,71,122,248,201]}
// Seed: 4941635343095884410

struct Struct_1 {
    a: vec2<i32>,
    b: vec4<u32>,
    c: vec4<u32>,
    d: vec4<i32>,
}

struct Struct_2 {
    a: Struct_1,
    b: Struct_1,
    c: bool,
}

struct Struct_3 {
    a: Struct_2,
    b: vec4<f32>,
    c: vec4<f32>,
}

struct Struct_4 {
    a: Struct_2,
}

struct Struct_5 {
    a: vec3<bool>,
    b: i32,
    c: u32,
    d: bool,
    e: vec2<i32>,
}

struct UniformBuffer {
    a: u32,
    b: u32,
    c: vec2<i32>,
}

struct StorageBuffer {
    a: f32,
    b: vec3<u32>,
    c: u32,
    d: vec3<f32>,
    e: u32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: f32;

var<private> LOOP_COUNTERS: array<u32, 16>;

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn func_5(arg_0: vec2<i32>) -> Struct_1 {
    global0 = 656f;
    let var_0 = Struct_5(!vec3<bool>(u_input.b > (1u << (u_input.a % 32u)), !select(false, true, true), true), arg_0.x, 1u, true, ~vec2<i32>(u_input.c.x, -38782i));
    global0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(1000f + _wgslsmith_f_op_f32(-997f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(-1000f, 303f, var_0.d))))));
    global0 = _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1000f) * _wgslsmith_f_op_f32(-2118f)) - _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(round(906f)), _wgslsmith_f_op_f32(f32(-1f) * -2770f))))))));
    global0 = -387f;
    return Struct_1(_wgslsmith_add_vec2_i32(u_input.c, select(var_0.e, arg_0, var_0.a.yy)), vec4<u32>(_wgslsmith_dot_vec3_u32(~select(vec3<u32>(30714u, 1u, 0u), vec3<u32>(47324u, var_0.c, 71093u), vec3<bool>(false, false, false)), ~vec3<u32>(var_0.c, var_0.c, u_input.b) >> (firstTrailingBit(vec3<u32>(0u, u_input.b, u_input.b)) % vec3<u32>(32u))), min(var_0.c, firstLeadingBit(u_input.b)) >> (abs(u_input.a) % 32u), u_input.a, firstLeadingBit(u_input.b)), ~vec4<u32>(abs(u_input.a), _wgslsmith_dot_vec3_u32(vec3<u32>(0u, 32631u, u_input.a), vec3<u32>(10652u, 53752u, 45569u)) >> (71157u % 32u), 4294967295u, var_0.c), ~vec4<i32>(-1i, _wgslsmith_clamp_i32(var_0.b, arg_0.x, _wgslsmith_mult_i32(u_input.c.x, 1i)), u_input.c.x, _wgslsmith_dot_vec3_i32(vec3<i32>(u_input.c.x, -1i, var_0.e.x), -vec3<i32>(2147483647i, u_input.c.x, -13101i))));
}

fn func_4(arg_0: f32, arg_1: Struct_4, arg_2: Struct_5, arg_3: Struct_4) -> vec3<bool> {
    var var_0 = arg_1;
    var_0 = Struct_4(Struct_2(func_5(vec2<i32>(~47151i, i32(-1i) * -1i)), Struct_1(firstTrailingBit(vec2<i32>(1i, -1i)), abs(_wgslsmith_mod_vec4_u32(vec4<u32>(40004u, 24894u, arg_2.c, 42027u), vec4<u32>(0u, arg_1.a.a.c.x, 8248u, arg_2.c))), arg_1.a.b.b, _wgslsmith_sub_vec4_i32(arg_3.a.a.d ^ arg_1.a.a.d, func_5(arg_2.e).d)), arg_1.a.c));
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        continue;
    }
    if (arg_3.a.c) {
        var var_1 = arg_1.a;
    }
    global0 = -543f;
    return !vec3<bool>(arg_2.d, all(select(vec3<bool>(arg_2.a.x, arg_2.a.x, false), !vec3<bool>(true, arg_3.a.c, true), !arg_2.a.x)), arg_3.a.c);
}

fn func_6(arg_0: vec2<i32>) -> bool {
    let var_0 = Struct_4(Struct_2(func_5(vec2<i32>(1i, 1i) & u_input.c), Struct_1(min(max(arg_0, arg_0), -u_input.c), (vec4<u32>(u_input.a, u_input.b, 4294967295u, 18203u) << (vec4<u32>(43011u, u_input.b, u_input.a, 0u) % vec4<u32>(32u))) | max(vec4<u32>(12225u, 4294967295u, 4294967295u, u_input.b), vec4<u32>(4294967295u, u_input.a, 6461u, u_input.a)), vec4<u32>(3137u & u_input.a, firstLeadingBit(u_input.a), u_input.a, u_input.a), max(-vec4<i32>(-52368i, -7635i, 46781i, u_input.c.x), _wgslsmith_sub_vec4_i32(vec4<i32>(arg_0.x, -42525i, -24130i, arg_0.x), vec4<i32>(arg_0.x, -22107i, 1i, -1i)))), all(select(vec2<bool>(true, false), vec2<bool>(false, false), select(vec2<bool>(false, false), vec2<bool>(true, true), vec2<bool>(false, false))))));
    global0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-658f));
    switch (abs(reverseBits(1i))) {
        default: {
            var var_1 = var_0.a;
            let var_2 = ~_wgslsmith_mult_vec4_u32(max(~var_0.a.b.b, var_0.a.b.b) << (~(~var_0.a.a.c) % vec4<u32>(32u)), var_0.a.b.c);
            global0 = -3592f;
            let var_3 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-166f - _wgslsmith_f_op_f32(-1000f)));
        }
    }
    var var_1 = 287f;
    switch (arg_0.x) {
        case 6790i: {
        }
        case -1i: {
            let var_2 = Struct_2(Struct_1(-vec2<i32>(_wgslsmith_dot_vec4_i32(var_0.a.a.d, var_0.a.a.d), -18480i), vec4<u32>(_wgslsmith_mult_u32(u_input.b, ~var_0.a.a.c.x), var_0.a.b.b.x << (_wgslsmith_mult_u32(25942u, 0u) % 32u), _wgslsmith_dot_vec2_u32(var_0.a.a.b.xw | var_0.a.a.c.zx, ~vec2<u32>(var_0.a.b.c.x, var_0.a.a.b.x)), ~u_input.b), vec4<u32>(~(var_0.a.a.c.x ^ 65670u), 16003u, var_0.a.a.c.x, _wgslsmith_div_u32(~var_0.a.a.b.x, 96733u >> (u_input.b % 32u))), vec4<i32>(_wgslsmith_dot_vec2_i32(-vec2<i32>(var_0.a.b.d.x, -1i), vec2<i32>(u_input.c.x, arg_0.x)), -reverseBits(var_0.a.b.d.x), i32(-2147483648), arg_0.x)), var_0.a.b, var_0.a.c);
            if (var_2.c) {
                let var_3 = var_0;
                var var_4 = countOneBits(min(var_2.b.c.x, 101003u));
            }
        }
        case i32(-2147483648): {
        }
        default: {
            if (false) {
                var var_2 = countOneBits(select(var_0.a.a.a, vec2<i32>(u_input.c.x, u_input.c.x), false) ^ vec2<i32>(-17036i & u_input.c.x, max(u_input.c.x, 0i) | _wgslsmith_mod_i32(19235i, u_input.c.x)));
            }
            switch (_wgslsmith_mod_i32(_wgslsmith_mult_i32(~firstTrailingBit(3395i), -arg_0.x), _wgslsmith_dot_vec3_i32(-abs(~var_0.a.a.d.wxw), _wgslsmith_clamp_vec3_i32(min(~vec3<i32>(arg_0.x, u_input.c.x, -11764i), select(var_0.a.a.d.wxw, var_0.a.a.d.wyw, true)), ~min(vec3<i32>(60321i, 0i, 30717i), vec3<i32>(arg_0.x, u_input.c.x, -16591i)), ~vec3<i32>(14623i, var_0.a.a.a.x, 2147483647i))))) {
                default: {
                    var var_2 = _wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(198f, -935f)) - _wgslsmith_f_op_f32(-378f - 1194f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-702f + 1521f)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1f) + _wgslsmith_f_op_f32(-566f))));
                    var var_3 = Struct_3(Struct_2(func_5(vec2<i32>(0i, _wgslsmith_dot_vec3_i32(var_0.a.b.d.wxz, vec3<i32>(1i, u_input.c.x, 0i)))), Struct_1(_wgslsmith_mult_vec2_i32(_wgslsmith_sub_vec2_i32(vec2<i32>(7198i, u_input.c.x), var_0.a.a.a), countOneBits(var_0.a.a.d.xy)), (var_0.a.b.b & vec4<u32>(u_input.b, 5415u, u_input.a, var_0.a.b.b.x)) >> (vec4<u32>(4294967295u, var_0.a.b.c.x, var_0.a.b.b.x, var_0.a.b.c.x) % vec4<u32>(32u)), max(abs(vec4<u32>(28759u, u_input.b, u_input.b, u_input.b)), var_0.a.b.b), select(_wgslsmith_mult_vec4_i32(vec4<i32>(var_0.a.b.a.x, 2147483647i, 20572i, -17140i), var_0.a.a.d), vec4<i32>(0i, arg_0.x, 2147483647i, u_input.c.x) ^ vec4<i32>(u_input.c.x, u_input.c.x, u_input.c.x, -31066i), true)), func_4(_wgslsmith_f_op_f32(-var_2.x), Struct_4(var_0.a), Struct_5(!vec3<bool>(var_0.a.c, false, false), abs(-69253i), reverseBits(var_0.a.b.b.x), true, _wgslsmith_mult_vec2_i32(vec2<i32>(u_input.c.x, -16704i), var_0.a.b.d.yz)), Struct_4(Struct_2(var_0.a.b, Struct_1(arg_0, vec4<u32>(u_input.b, var_0.a.b.c.x, u_input.b, u_input.a), var_0.a.b.b, var_0.a.a.d), var_0.a.c))).x), vec4<f32>(419f, 1168f, var_2.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(f32(-1f) * -1000f))) + _wgslsmith_f_op_f32(round(var_2.x)))), vec4<f32>(2380f, _wgslsmith_f_op_f32(var_2.x - var_2.x), var_2.x, var_2.x));
                    var_1 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(-2825f, _wgslsmith_f_op_f32(f32(-1f) * -1101f))) + _wgslsmith_div_f32(-186f, 673f)) + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_3.b.x)) - _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(f32(-1f) * -1000f))))) - var_2.x);
                    var_2 = vec3<f32>(-593f, _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-1000f * 976f), _wgslsmith_f_op_f32(round(var_3.b.x))))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(var_2.x * var_3.c.x)));
                    var_3 = Struct_3(var_0.a, _wgslsmith_div_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(-var_3.b.x), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_2.x) * var_3.b.x), var_3.b.x, _wgslsmith_f_op_f32(-var_2.x)), _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(1877f, var_2.x, -1000f, -1109f))), _wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(-var_3.c))), select(vec4<bool>(var_3.a.c, false, true, var_3.a.c), select(vec4<bool>(true, true, false, var_0.a.c), vec4<bool>(false, var_3.a.c, false, true), vec4<bool>(false, true, false, false)), !vec4<bool>(false, var_3.a.c, true, true))))), _wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(var_3.b - _wgslsmith_f_op_vec4_f32(exp2(var_3.c))) - vec4<f32>(-247f, _wgslsmith_f_op_f32(-1000f), _wgslsmith_f_op_f32(-475f), 1f)))));
                }
            }
            let var_2 = -_wgslsmith_mod_i32(~max(_wgslsmith_mod_i32(i32(-2147483648), u_input.c.x), arg_0.x), countOneBits(arg_0.x));
            for (var var_3 = i32(-2147483648); var_3 > i32(-2147483648); var_3 += 1i) {
                if (LOOP_COUNTERS[1u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
            }
        }
    }
    return true;
}

fn func_3(arg_0: Struct_4, arg_1: i32, arg_2: u32) -> Struct_4 {
    if (any(!(!(!func_4(139f, Struct_4(arg_0.a), Struct_5(vec3<bool>(true, true, true), 90957i, 4294967295u, arg_0.a.c, vec2<i32>(u_input.c.x, -2199i)), arg_0))))) {
        for (var var_0 = 1i; var_0 != 0i; var_0 += 1i) {
            if (LOOP_COUNTERS[2u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            var var_1 = _wgslsmith_dot_vec2_u32(countOneBits(vec2<u32>(4294967295u, abs(firstLeadingBit(36250u)))), arg_0.a.b.b.zx);
            var var_2 = vec4<bool>(func_6(vec2<i32>(arg_1, -firstTrailingBit(30462i))), !(!(!arg_0.a.c)), !arg_0.a.c, all(!vec3<bool>(arg_0.a.c, arg_0.a.c, arg_0.a.c)));
            var var_3 = ~(-arg_0.a.a.a.x);
            var_1 = 66841u;
        }
        loop {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            let var_0 = _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(max(726f, _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-1811f * _wgslsmith_f_op_f32(min(-1838f, 785f))), _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-688f * 410f))))))), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(305f * _wgslsmith_div_f32(-926f, -710f))), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-349f))), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(sign(-439f))))))))));
            continue;
        }
    }
    global0 = _wgslsmith_f_op_f32(-1492f);
    if (true) {
        global0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_div_f32(166f, -136f) - 640f), _wgslsmith_f_op_f32(round(_wgslsmith_div_f32(223f, 307f))))));
    }
    let var_0 = arg_0.a;
    var var_1 = Struct_5(vec3<bool>(true, arg_1 <= _wgslsmith_div_i32(1i, _wgslsmith_add_i32(1i, u_input.c.x)), func_6(_wgslsmith_mult_vec2_i32(_wgslsmith_sub_vec2_i32(arg_0.a.b.a, vec2<i32>(i32(-2147483648), -1i)), var_0.a.a))), var_0.a.d.x, _wgslsmith_dot_vec3_u32(_wgslsmith_add_vec3_u32(arg_0.a.a.c.xxz, abs(vec3<u32>(25410u, 5580u, arg_0.a.a.c.x) ^ arg_0.a.b.c.xyz)), vec3<u32>(arg_2, 66104u, var_0.b.c.x)), false, _wgslsmith_mod_vec2_i32(_wgslsmith_clamp_vec2_i32(-u_input.c, _wgslsmith_add_vec2_i32(vec2<i32>(2147483647i, var_0.b.d.x), vec2<i32>(0i, 2949i) << (vec2<u32>(u_input.a, 1u) % vec2<u32>(32u))), ~u_input.c), u_input.c));
    return arg_0;
}

fn func_7(arg_0: vec2<u32>, arg_1: vec2<bool>, arg_2: Struct_4) -> f32 {
    switch (_wgslsmith_clamp_i32(arg_2.a.a.a.x, ~func_5((u_input.c ^ vec2<i32>(13436i, 8245i)) << (arg_0 % vec2<u32>(32u))).d.x, min(countOneBits(reverseBits(func_5(vec2<i32>(8106i, arg_2.a.b.a.x)).a.x)), u_input.c.x))) {
        case 7964i: {
            if (all(vec3<bool>(func_6(vec2<i32>(u_input.c.x, _wgslsmith_mult_i32(u_input.c.x, -38980i))), !(!func_6(vec2<i32>(0i, 990i))), all(!(!vec2<bool>(false, arg_1.x)))))) {
            }
        }
        case 19360i: {
            var var_0 = select(func_4(1000f, Struct_4(Struct_2(arg_2.a.a, func_5(vec2<i32>(arg_2.a.a.d.x, 1i)), true)), Struct_5(!select(vec3<bool>(arg_1.x, arg_2.a.c, arg_2.a.c), vec3<bool>(arg_1.x, arg_2.a.c, arg_2.a.c), true), ~abs(arg_2.a.b.d.x), min(~arg_2.a.a.b.x, arg_2.a.b.b.x), arg_1.x || (arg_2.a.c || arg_1.x), firstLeadingBit(func_3(arg_2, u_input.c.x, u_input.b).a.b.a)), Struct_4(Struct_2(Struct_1(arg_2.a.a.a, arg_2.a.b.c, arg_2.a.a.b, vec4<i32>(0i, arg_2.a.b.a.x, 1i, -15890i)), func_5(vec2<i32>(arg_2.a.b.a.x, 0i)), func_6(u_input.c)))), vec3<bool>(true, !func_3(Struct_4(arg_2.a), arg_2.a.a.d.x, 4294967295u).a.c, arg_2.a.c & false), true);
            var var_1 = _wgslsmith_div_u32(u_input.b, arg_0.x);
            loop {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                global0 = _wgslsmith_f_op_f32(-1481f + _wgslsmith_f_op_f32(-1000f));
                var var_2 = abs(arg_2.a.a.d.x);
                let var_3 = Struct_5(select(vec3<bool>(false, arg_2.a.c, all(vec3<bool>(false, true, true)) != !var_0.x), func_4(_wgslsmith_f_op_f32(-149f), func_3(arg_2, 1i, 582u), Struct_5(vec3<bool>(arg_1.x, arg_2.a.c, false), ~7150i, 56083u, true, firstTrailingBit(vec2<i32>(-1i, 52283i))), func_3(func_3(arg_2, -1i, u_input.b), u_input.c.x | u_input.c.x, _wgslsmith_clamp_u32(u_input.a, 4294967295u, u_input.a))), i32(-2147483648) != -min(5393i, arg_2.a.b.d.x)), -reverseBits(-3765i), ~_wgslsmith_sub_u32(4294967295u, ~arg_0.x), 0u > u_input.b, max(u_input.c, reverseBits(-arg_2.a.b.a) ^ countOneBits(vec2<i32>(1i, 2887i))));
            }
            var_1 = 0u;
        }
        case 2147483647i: {
            switch (abs(-_wgslsmith_sub_i32(1i, _wgslsmith_div_i32(arg_2.a.a.d.x | 2397i, i32(-1i) * i32(-2147483648))))) {
                case i32(-2147483648): {
                }
                case -5037i: {
                    var var_0 = -1244f;
                    var_0 = 329f;
                    let var_1 = arg_1;
                }
                case 61329i: {
                    let var_0 = _wgslsmith_f_op_f32(-1000f);
                    return _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(524f - -203f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(select(230f, -577f, arg_2.a.c)))) + _wgslsmith_div_f32(_wgslsmith_f_op_f32(select(var_0, var_0, true)), var_0)))) * var_0);
                }
                case 1i: {
                    return -808f;
                }
                default: {
                    return -615f;
                }
            }
            global0 = _wgslsmith_f_op_f32(-826f);
            global0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(-127f)))))));
            loop {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                break;
            }
            if (true) {
                global0 = 974f;
                var var_0 = Struct_4(Struct_2(func_3(func_3(func_3(arg_2, 2147483647i, 14335u), -1i, ~u_input.a), -max(u_input.c.x, arg_2.a.b.a.x), func_3(arg_2, 2147483647i, max(arg_0.x, arg_0.x)).a.a.c.x).a.a, Struct_1(-vec2<i32>(22321i, 26532i), ~vec4<u32>(4294967295u, 69336u, arg_2.a.a.c.x, arg_2.a.a.b.x), arg_2.a.a.b, ~(vec4<i32>(0i, 12632i, arg_2.a.b.d.x, arg_2.a.a.d.x) ^ vec4<i32>(2147483647i, u_input.c.x, 2147483647i, arg_2.a.a.a.x))), arg_2.a.c));
                let var_1 = vec4<f32>(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-203f + -352f))))), _wgslsmith_f_op_f32(-1000f - 406f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(_wgslsmith_div_f32(-801f, _wgslsmith_f_op_f32(ceil(-802f))), _wgslsmith_f_op_f32(step(_wgslsmith_div_f32(-1938f, 1064f), _wgslsmith_f_op_f32(f32(-1f) * -2100f)))))), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(560f * _wgslsmith_f_op_f32(-346f - 220f))), _wgslsmith_div_f32(-973f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1329f))))));
                let var_2 = var_0.a.c;
                global0 = var_1.x;
            }
        }
        case -4799i: {
            var var_0 = false;
            var_0 = true;
            switch (i32(-2147483648)) {
                case 39541i: {
                    let var_1 = _wgslsmith_clamp_u32(_wgslsmith_dot_vec4_u32(func_5(vec2<i32>(1i, u_input.c.x)).b, arg_2.a.b.c), abs(arg_2.a.b.c.x), 1u);
                }
                default: {
                    var var_1 = u_input.c.x;
                }
            }
            global0 = _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(f32(-1f) * -570f), _wgslsmith_f_op_f32(floor(200f))))))));
            if (arg_2.a.c) {
            }
        }
        default: {
            for (var var_0 = -1i; ; var_0 += 1i) {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
            }
            let var_0 = arg_2.a;
            return _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(-915f))))));
        }
    }
    for (var var_0 = 4580i; true; var_0 -= 1i) {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        var var_1 = vec4<u32>(33322u, firstTrailingBit(arg_2.a.a.b.x), func_5((vec2<i32>(i32(-2147483648), arg_2.a.a.d.x) >> (vec2<u32>(arg_2.a.b.b.x, 0u) % vec2<u32>(32u))) << (select(arg_0, arg_0, vec2<bool>(true, arg_1.x)) % vec2<u32>(32u))).b.x | 44817u, countOneBits(1u));
    }
    for (var var_0 = 43638i; true; var_0 -= 1i) {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
    }
    var var_0 = arg_1;
    return _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-746f));
}

fn func_8(arg_0: i32, arg_1: vec3<f32>) -> Struct_5 {
    var var_0 = Struct_2(Struct_1(vec2<i32>(~u_input.c.x, 1i), abs(~(vec4<u32>(u_input.a, 4294967295u, 0u, 1u) ^ vec4<u32>(1u, u_input.a, 1494u, u_input.a))), ~(~_wgslsmith_mult_vec4_u32(vec4<u32>(0u, u_input.a, u_input.b, 37238u), vec4<u32>(u_input.a, u_input.a, u_input.b, u_input.b))), ~abs(func_5(vec2<i32>(arg_0, u_input.c.x)).d)), Struct_1(-abs(vec2<i32>(u_input.c.x, i32(-2147483648))), vec4<u32>(min(_wgslsmith_div_u32(59536u, u_input.b), ~u_input.a), (u_input.b >> (u_input.b % 32u)) >> (u_input.a % 32u), _wgslsmith_mult_u32(~u_input.b, u_input.a), ~1u), vec4<u32>(~_wgslsmith_dot_vec4_u32(vec4<u32>(u_input.b, 34201u, u_input.b, u_input.b), vec4<u32>(4294967295u, u_input.a, 1u, u_input.b)), ~u_input.a, (7177u & u_input.a) & u_input.a, 0u), ~vec4<i32>(-arg_0, 1i, arg_0, u_input.c.x)), true);
    var_0 = func_3(func_3(Struct_4(func_3(Struct_4(Struct_2(var_0.b, Struct_1(var_0.b.d.zz, vec4<u32>(1u, 47078u, 4294967295u, 4294967295u), var_0.a.c, var_0.a.d), false)), -103946i, u_input.b).a), 19689i, min(var_0.b.b.x, _wgslsmith_dot_vec2_u32(~var_0.a.c.yw, vec2<u32>(var_0.b.c.x, var_0.b.c.x)))), firstTrailingBit(2969i), 29377u).a;
    switch (26009i ^ min(firstTrailingBit(var_0.a.a.x << (~var_0.a.b.x % 32u)), u_input.c.x)) {
        case 53806i: {
            return Struct_5(select(!vec3<bool>(!var_0.c, any(vec4<bool>(true, false, true, var_0.c)), true), select(func_4(_wgslsmith_f_op_f32(func_7(vec2<u32>(0u, var_0.b.b.x), vec2<bool>(var_0.c, false), Struct_4(Struct_2(Struct_1(vec2<i32>(arg_0, 2147483647i), var_0.a.b, vec4<u32>(1u, 1u, 1u, u_input.a), vec4<i32>(arg_0, u_input.c.x, 78968i, var_0.a.d.x)), Struct_1(vec2<i32>(1i, u_input.c.x), var_0.a.b, var_0.b.c, var_0.b.d), var_0.c)))), Struct_4(Struct_2(Struct_1(var_0.a.d.zz, var_0.b.b, var_0.a.c, var_0.b.d), var_0.a, true)), Struct_5(vec3<bool>(var_0.c, var_0.c, var_0.c), arg_0, var_0.b.c.x, true, u_input.c), Struct_4(Struct_2(var_0.a, Struct_1(vec2<i32>(-1i, 54449i), vec4<u32>(u_input.b, 1u, 79396u, 13778u), var_0.a.c, vec4<i32>(u_input.c.x, 34042i, -41401i, u_input.c.x)), var_0.c))), func_4(1000f, Struct_4(Struct_2(Struct_1(u_input.c, var_0.b.c, vec4<u32>(1u, var_0.b.b.x, u_input.b, 61350u), var_0.b.d), var_0.a, true)), Struct_5(vec3<bool>(false, var_0.c, var_0.c), i32(-2147483648), u_input.b, false, var_0.b.a), Struct_4(Struct_2(Struct_1(var_0.a.a, var_0.a.c, var_0.b.c, vec4<i32>(i32(-2147483648), u_input.c.x, u_input.c.x, var_0.b.d.x)), Struct_1(vec2<i32>(var_0.b.a.x, 1i), vec4<u32>(var_0.b.b.x, u_input.a, u_input.a, var_0.a.b.x), var_0.a.c, vec4<i32>(u_input.c.x, arg_0, var_0.a.d.x, arg_0)), true))), var_0.c), !(!vec3<bool>(true, false, var_0.c))), abs(var_0.b.d.x), firstLeadingBit(u_input.b & ~u_input.a), false != var_0.c, select(vec2<i32>(_wgslsmith_dot_vec4_i32(var_0.a.d, var_0.b.d), -reverseBits(u_input.c.x)), vec2<i32>(-1i, func_3(func_3(Struct_4(Struct_2(Struct_1(vec2<i32>(var_0.b.a.x, arg_0), var_0.b.b, var_0.a.b, var_0.a.d), Struct_1(var_0.b.a, var_0.b.b, vec4<u32>(u_input.a, 27624u, var_0.a.c.x, 40061u), var_0.a.d), var_0.c)), 25898i, u_input.b), 33854i, u_input.a ^ 42972u).a.a.d.x), var_0.c | (arg_0 != -var_0.b.d.x)));
        }
        case 1i: {
            var var_1 = var_0.a;
            var_0 = func_3(func_3(Struct_4(func_3(Struct_4(Struct_2(var_0.a, var_0.a, true)), var_0.a.a.x, ~58823u).a), var_0.a.d.x, var_1.c.x), var_0.b.d.x, countOneBits(~34667u)).a;
            var_0 = Struct_2(func_3(Struct_4(func_3(Struct_4(Struct_2(Struct_1(vec2<i32>(i32(-2147483648), -1i), vec4<u32>(var_1.c.x, 4294967295u, 4294967295u, 4294967295u), vec4<u32>(27879u, u_input.a, 4294967295u, 0u), var_1.d), var_0.b, var_0.c)), ~u_input.c.x, ~var_0.b.c.x).a), abs(~(-16946i) << (u_input.b % 32u)), var_0.a.b.x).a.a, Struct_1(~vec2<i32>(max(var_0.b.a.x, 35022i), arg_0 | -25175i), var_0.a.b, func_5(-vec2<i32>(12846i, var_0.a.a.x)).c, var_1.d), var_0.c);
            switch (2147483647i) {
                case -1i: {
                }
                case -8433i: {
                    var var_2 = firstTrailingBit(~_wgslsmith_sub_vec4_u32(vec4<u32>(13703u, var_1.b.x, u_input.b, 1u), vec4<u32>(var_0.a.c.x, u_input.b, 1u, var_0.a.c.x) >> (vec4<u32>(var_0.b.b.x, 57052u, var_1.c.x, u_input.b) % vec4<u32>(32u)))) | _wgslsmith_sub_vec4_u32(~(var_0.b.c | var_1.b), countOneBits(min(vec4<u32>(var_1.b.x, u_input.a, 1u, 0u), var_0.b.b) & ~vec4<u32>(50115u, var_1.b.x, u_input.a, u_input.a)));
                    return Struct_5(vec3<bool>(any(!(!vec3<bool>(var_0.c, true, var_0.c))), any(vec2<bool>(var_0.c, false)), true), _wgslsmith_mult_i32(1i, _wgslsmith_dot_vec2_i32(select(var_1.a, vec2<i32>(arg_0, i32(-2147483648)), select(vec2<bool>(var_0.c, var_0.c), vec2<bool>(true, var_0.c), true)), vec2<i32>(-36280i, 0i))), ~countOneBits(var_1.c.x), false, ~func_5(vec2<i32>(-1i, var_0.a.d.x)).d.wx);
                }
                default: {
                    global0 = arg_1.x;
                    let var_2 = 4294967295u;
                }
            }
            for (var var_2 = arg_0; true; var_2 += 1i) {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                let var_3 = var_0.b.d.zzz;
            }
        }
        default: {
            var var_1 = _wgslsmith_sub_i32(i32(-2147483648), _wgslsmith_dot_vec4_i32(~(-vec4<i32>(i32(-2147483648), 11420i, -1i, arg_0)), -countOneBits(vec4<i32>(38524i, 1i, var_0.b.d.x, arg_0))));
            var var_2 = func_3(func_3(Struct_4(Struct_2(func_5(vec2<i32>(1i, 35050i)), Struct_1(vec2<i32>(35468i, u_input.c.x), var_0.a.b, vec4<u32>(var_0.b.b.x, u_input.b, u_input.b, 15799u), var_0.a.d), all(vec3<bool>(var_0.c, var_0.c, var_0.c)))), -2957i, 0u), ~50649i, func_5(vec2<i32>(_wgslsmith_add_i32(u_input.c.x, min(1i, var_0.b.a.x)), u_input.c.x)).c.x).a;
        }
    }
    switch (reverseBits(-(~reverseBits(_wgslsmith_dot_vec4_i32(var_0.a.d, var_0.a.d))))) {
        default: {
            var var_1 = vec3<bool>(!(var_0.c & (_wgslsmith_mult_u32(7370u, 0u) >= u_input.a)), true, true);
            for (var var_2 = i32(-2147483648); any(!(!var_1.zy)) && false; var_2 += 1i) {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                var var_3 = Struct_3(func_3(Struct_4(Struct_2(func_5(var_0.b.a), func_3(Struct_4(Struct_2(Struct_1(var_0.b.d.xw, vec4<u32>(u_input.a, u_input.a, 16575u, 12091u), vec4<u32>(var_0.a.b.x, u_input.a, u_input.b, var_0.b.c.x), vec4<i32>(-12796i, -31989i, arg_0, i32(-2147483648))), var_0.b, true)), -33508i, var_0.b.c.x).a.b, var_0.c)), arg_0, ~0u).a, _wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(vec4<f32>(arg_1.x, _wgslsmith_f_op_f32(-354f), arg_1.x, _wgslsmith_f_op_f32(-arg_1.x)) - _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_1.x, 872f, -249f, 666f)))))), vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_1.x))), _wgslsmith_f_op_f32(abs(arg_1.x)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_1.x + arg_1.x)) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -706f))), _wgslsmith_f_op_f32(arg_1.x + arg_1.x)));
                continue;
            }
            for (var var_2 = 1i; var_2 != -1i; var_0 = func_3(func_3(func_3(func_3(Struct_4(Struct_2(Struct_1(vec2<i32>(arg_0, u_input.c.x), vec4<u32>(4294967295u, 4294967295u, u_input.b, 4294967295u), var_0.b.c, var_0.b.d), var_0.b, false)), arg_0, _wgslsmith_mult_u32(15085u, u_input.b)), 15916i, ~4294967295u), -(~(~var_0.a.a.x)), _wgslsmith_add_u32(0u, abs(var_0.b.b.x))), _wgslsmith_dot_vec3_i32(var_0.b.d.zyz, vec3<i32>(_wgslsmith_dot_vec3_i32(_wgslsmith_sub_vec3_i32(var_0.a.d.xxy, var_0.a.d.xyz), _wgslsmith_mod_vec3_i32(vec3<i32>(arg_0, arg_0, 17156i), var_0.b.d.zww)), func_5(-vec2<i32>(u_input.c.x, var_0.a.d.x)).d.x, 0i << (var_0.b.b.x % 32u))), u_input.a).a) {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                var_2 = 20356i;
                var var_3 = u_input.c;
                continue;
            }
            if (!var_0.c) {
                global0 = _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(1000f * arg_1.x), _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_1.x * _wgslsmith_div_f32(1000f, arg_1.x)))))));
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        global0 = _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-arg_1.x))))));
        for (var var_1 = -2618i; var_1 >= -7400i; var_1 += 1i) {
            if (LOOP_COUNTERS[13u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
            let var_2 = func_3(func_3(func_3(func_3(func_3(Struct_4(Struct_2(Struct_1(vec2<i32>(var_0.b.d.x, arg_0), vec4<u32>(var_0.a.c.x, u_input.a, 17594u, 1u), vec4<u32>(36649u, 1u, var_0.b.b.x, 12082u), vec4<i32>(i32(-2147483648), var_0.b.d.x, -22732i, u_input.c.x)), Struct_1(var_0.a.d.wz, var_0.a.b, vec4<u32>(51128u, u_input.a, var_0.a.b.x, 35969u), vec4<i32>(25958i, 1i, -17952i, var_0.b.d.x)), false)), var_0.b.a.x, u_input.a), arg_0, u_input.b), ~reverseBits(4895i), _wgslsmith_mod_u32(4294967295u, ~u_input.b)), _wgslsmith_mult_i32(u_input.c.x, -13871i), 0u), i32(-2147483648), u_input.a);
            var var_3 = firstTrailingBit(abs(func_3(func_3(var_2, 11381i, 1u), _wgslsmith_sub_i32(-82057i, var_0.a.a.x), 1007u).a.a.c.wyw)) << (countOneBits((var_2.a.a.c.xyz ^ var_0.b.c.yzw) ^ (_wgslsmith_add_vec3_u32(var_2.a.a.b.yzw, vec3<u32>(u_input.b, 64488u, 10800u)) >> ((vec3<u32>(u_input.b, var_0.a.c.x, var_0.a.b.x) << (vec3<u32>(1u, u_input.b, 1u) % vec3<u32>(32u))) % vec3<u32>(32u)))) % vec3<u32>(32u));
            let var_4 = _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_1.x) - arg_1.x), arg_1.x)) + _wgslsmith_div_vec2_f32(arg_1.xy, _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(abs(vec2<f32>(arg_1.x, 108f))), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(arg_1.x, arg_1.x)) - _wgslsmith_f_op_vec2_f32(-vec2<f32>(1054f, -659f))))));
        }
        let var_1 = var_0.b.d.zyy;
        var_0 = Struct_2(var_0.a, Struct_1(abs(var_1.yx), vec4<u32>(62858u, var_0.a.c.x, u_input.a, firstTrailingBit(firstTrailingBit(4294967295u))), ~vec4<u32>(var_0.a.b.x, _wgslsmith_dot_vec3_u32(vec3<u32>(33516u, 1u, u_input.a), var_0.b.c.yzz), 15829u, var_0.b.b.x), abs(var_0.a.d)), false & var_0.c);
        let var_2 = Struct_3(func_3(func_3(func_3(func_3(Struct_4(Struct_2(var_0.a, var_0.b, var_0.c)), 44143i, 4294967295u), firstLeadingBit(-7329i), countOneBits(4294967295u)), arg_0, _wgslsmith_div_u32(1u, var_0.a.b.x)), ~var_0.a.d.x, _wgslsmith_div_u32(u_input.b, _wgslsmith_dot_vec2_u32(vec2<u32>(var_0.a.b.x, u_input.a), vec2<u32>(u_input.b, u_input.a)))).a, _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(max(vec4<f32>(arg_1.x, arg_1.x, arg_1.x, arg_1.x), vec4<f32>(arg_1.x, arg_1.x, arg_1.x, arg_1.x))) - _wgslsmith_f_op_vec4_f32(max(vec4<f32>(arg_1.x, -1000f, arg_1.x, -1000f), vec4<f32>(2005f, arg_1.x, arg_1.x, arg_1.x)))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(exp2(vec4<f32>(arg_1.x, 615f, -1023f, arg_1.x)))))) * vec4<f32>(-456f, arg_1.x, -697f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_1.x)))), _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(vec4<f32>(280f, -575f, 836f, arg_1.x), vec4<f32>(arg_1.x, arg_1.x, arg_1.x, arg_1.x))), _wgslsmith_f_op_vec4_f32(max(vec4<f32>(100f, 1803f, arg_1.x, arg_1.x), _wgslsmith_f_op_vec4_f32(-vec4<f32>(-269f, -646f, arg_1.x, arg_1.x)))), select(vec4<bool>(var_0.c, false, var_0.c, var_0.c), !vec4<bool>(true, false, var_0.c, var_0.c), true))), _wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(vec4<f32>(arg_1.x, arg_1.x, arg_1.x, -1000f) + vec4<f32>(281f, 652f, arg_1.x, arg_1.x))))))));
    }
    return Struct_5(vec3<bool>(true, !var_0.c, all(!select(vec4<bool>(var_0.c, false, var_0.c, true), vec4<bool>(var_0.c, var_0.c, var_0.c, var_0.c), var_0.c))), -1i, 4294967295u, ~u_input.b < 1u, vec2<i32>(0i, 1i));
}

fn func_2() -> Struct_3 {
    loop {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        var var_0 = func_8(-41883i, _wgslsmith_div_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(func_7(vec2<u32>(u_input.a, u_input.a) >> (vec2<u32>(u_input.a, u_input.a) % vec2<u32>(32u)), select(vec2<bool>(true, false), vec2<bool>(true, true), true), func_3(Struct_4(Struct_2(Struct_1(vec2<i32>(u_input.c.x, 1i), vec4<u32>(8574u, 16193u, 0u, 4294967295u), vec4<u32>(u_input.a, 19376u, u_input.a, 0u), vec4<i32>(-42860i, 0i, 1i, 1i)), Struct_1(vec2<i32>(u_input.c.x, u_input.c.x), vec4<u32>(14666u, 0u, 9324u, 40395u), vec4<u32>(90804u, 71544u, u_input.b, 68203u), vec4<i32>(-1i, 1i, -39388i, u_input.c.x)), true)), -31353i, u_input.b))), 1256f, _wgslsmith_f_op_f32(func_7(~vec2<u32>(4294967295u, u_input.a), select(vec2<bool>(true, true), vec2<bool>(true, true), false), Struct_4(Struct_2(Struct_1(u_input.c, vec4<u32>(u_input.a, 17177u, 488u, u_input.b), vec4<u32>(771u, u_input.a, 78770u, u_input.b), vec4<i32>(u_input.c.x, u_input.c.x, u_input.c.x, 1i)), Struct_1(u_input.c, vec4<u32>(u_input.b, u_input.a, u_input.b, 1u), vec4<u32>(u_input.b, 49835u, 32108u, u_input.b), vec4<i32>(-47180i, 4026i, u_input.c.x, 2666i)), true))))), _wgslsmith_f_op_vec3_f32(-vec3<f32>(1f, 1f, 1f))));
        global0 = _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(min(-826f, _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-397f), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(min(821f, 1325f)), _wgslsmith_f_op_f32(-1727f)))))))));
        let var_1 = ~1i;
    }
    global0 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1000f) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(579f + 175f))) - _wgslsmith_f_op_f32(func_7(~(~vec2<u32>(u_input.b, 1u)), select(func_4(-816f, Struct_4(Struct_2(Struct_1(u_input.c, vec4<u32>(u_input.b, u_input.b, 4294967295u, 1u), vec4<u32>(17114u, u_input.a, u_input.a, 3591u), vec4<i32>(u_input.c.x, u_input.c.x, 0i, u_input.c.x)), Struct_1(u_input.c, vec4<u32>(0u, u_input.b, u_input.b, u_input.b), vec4<u32>(u_input.b, 0u, u_input.a, u_input.a), vec4<i32>(-33807i, u_input.c.x, 33239i, -16781i)), false)), Struct_5(vec3<bool>(true, false, true), 15953i, 1u, true, u_input.c), Struct_4(Struct_2(Struct_1(u_input.c, vec4<u32>(u_input.b, 80198u, 58055u, 4294967295u), vec4<u32>(33417u, u_input.b, u_input.a, 0u), vec4<i32>(u_input.c.x, u_input.c.x, u_input.c.x, u_input.c.x)), Struct_1(vec2<i32>(u_input.c.x, u_input.c.x), vec4<u32>(16744u, u_input.a, 0u, u_input.a), vec4<u32>(u_input.a, 4294967295u, u_input.b, 4294967295u), vec4<i32>(i32(-2147483648), 20339i, 47825i, -1i)), true))).xx, select(vec2<bool>(false, false), vec2<bool>(false, false), true), vec2<bool>(true, true)), Struct_4(Struct_2(Struct_1(vec2<i32>(i32(-2147483648), -1i), vec4<u32>(u_input.b, u_input.b, u_input.a, 32396u), vec4<u32>(1u, 4294967295u, 85725u, 19127u), vec4<i32>(u_input.c.x, u_input.c.x, u_input.c.x, i32(-2147483648))), Struct_1(vec2<i32>(-37409i, u_input.c.x), vec4<u32>(u_input.b, u_input.b, u_input.b, 4294967295u), vec4<u32>(4294967295u, u_input.b, 4294967295u, 107807u), vec4<i32>(i32(-2147483648), u_input.c.x, u_input.c.x, 2147483647i)), true))))) - 1582f);
    switch (i32(-2147483648)) {
        case 1i: {
            switch (u_input.c.x) {
                case -4234i: {
                    let var_0 = func_8(_wgslsmith_dot_vec4_i32(select(vec4<i32>(3068i, ~(-1i), 10121i, ~u_input.c.x), select(-vec4<i32>(2147483647i, 2147483647i, 12320i, u_input.c.x), vec4<i32>(u_input.c.x, u_input.c.x, u_input.c.x, u_input.c.x), select(vec4<bool>(false, true, false, true), vec4<bool>(true, false, true, false), true)), -u_input.c.x >= u_input.c.x), ~vec4<i32>(func_5(u_input.c).a.x, firstTrailingBit(-71663i), firstLeadingBit(1i), u_input.c.x)), vec3<f32>(1f, 1f, 1f));
                }
                default: {
                    global0 = _wgslsmith_div_f32(194f, 633f);
                }
            }
        }
        default: {
            var var_0 = Struct_3(Struct_2(Struct_1(vec2<i32>(35090i, u_input.c.x) >> (~vec2<u32>(34411u, 0u) % vec2<u32>(32u)), _wgslsmith_add_vec4_u32(vec4<u32>(1u, 1u, 49478u, 20264u), vec4<u32>(0u, u_input.b, u_input.a, u_input.b) << (vec4<u32>(u_input.b, u_input.b, u_input.a, 1u) % vec4<u32>(32u))), _wgslsmith_mod_vec4_u32(func_5(u_input.c).b, min(vec4<u32>(22786u, u_input.b, u_input.b, u_input.b), vec4<u32>(4294967295u, 25569u, u_input.b, 1u))), vec4<i32>(-u_input.c.x, u_input.c.x, ~u_input.c.x, u_input.c.x)), func_3(Struct_4(Struct_2(Struct_1(u_input.c, vec4<u32>(u_input.a, 4294967295u, 7310u, u_input.b), vec4<u32>(u_input.a, 1u, u_input.a, 1u), vec4<i32>(u_input.c.x, u_input.c.x, u_input.c.x, u_input.c.x)), Struct_1(u_input.c, vec4<u32>(4319u, 3411u, 23306u, u_input.a), vec4<u32>(0u, 47044u, u_input.b, 97208u), vec4<i32>(u_input.c.x, u_input.c.x, u_input.c.x, u_input.c.x)), true)), 1i, ~abs(25222u)).a.b, false), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(1000f, 599f, -187f, 869f)))) - _wgslsmith_f_op_vec4_f32(vec4<f32>(-328f, _wgslsmith_f_op_f32(ceil(661f)), -1558f, _wgslsmith_f_op_f32(f32(-1f) * -169f)) - vec4<f32>(1f, 1f, 1f, 1f))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(f32(-1f) * -430f), _wgslsmith_f_op_f32(sign(807f)), _wgslsmith_f_op_f32(step(744f, -304f)), _wgslsmith_f_op_f32(func_7(vec2<u32>(24184u, 4294967295u), vec2<bool>(false, false), Struct_4(Struct_2(Struct_1(u_input.c, vec4<u32>(u_input.b, 0u, u_input.a, u_input.b), vec4<u32>(1u, 28664u, 37254u, 1u), vec4<i32>(u_input.c.x, u_input.c.x, u_input.c.x, u_input.c.x)), Struct_1(u_input.c, vec4<u32>(1u, u_input.b, 1u, u_input.b), vec4<u32>(u_input.a, u_input.b, 4294967295u, u_input.b), vec4<i32>(0i, u_input.c.x, 1i, 2147483647i)), false))))) + _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(-722f, -542f, 716f, 931f) + vec4<f32>(1000f, -1000f, 327f, 381f)))) * vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -197f)), -181f, _wgslsmith_f_op_f32(round(1405f)), 975f)));
            let var_1 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-var_0.c) * var_0.c))))));
            if (var_0.a.c) {
                let var_2 = _wgslsmith_mult_u32(38206u, ~8440u >> (_wgslsmith_div_u32(~abs(var_0.a.a.b.x), _wgslsmith_clamp_u32(~var_0.a.a.b.x, countOneBits(var_0.a.a.c.x), var_0.a.a.c.x)) % 32u));
                let var_3 = vec3<i32>(~(-_wgslsmith_mult_i32(2147483647i, ~0i)), _wgslsmith_div_i32(~(-1i), max(var_0.a.b.a.x, abs(~141253i))), var_0.a.b.d.x);
                var var_4 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(1169f, _wgslsmith_f_op_f32(-1677f + 1363f), 449f, _wgslsmith_f_op_f32(var_0.c.x * -1000f))) * _wgslsmith_f_op_vec4_f32(select(vec4<f32>(553f, _wgslsmith_f_op_f32(f32(-1f) * -642f), _wgslsmith_f_op_f32(var_0.b.x - 717f), _wgslsmith_f_op_f32(max(var_1.x, var_0.c.x))), vec4<f32>(_wgslsmith_f_op_f32(431f - var_0.c.x), _wgslsmith_f_op_f32(select(var_1.x, -1266f, true)), var_0.c.x, var_0.b.x), select(select(vec4<bool>(false, true, true, true), vec4<bool>(var_0.a.c, var_0.a.c, false, var_0.a.c), vec4<bool>(false, false, var_0.a.c, true)), !vec4<bool>(var_0.a.c, var_0.a.c, false, false), var_1.x > 1457f)))));
            }
            let var_2 = var_0.a;
            let var_3 = func_3(Struct_4(func_3(Struct_4(var_0.a), i32(-1i) * i32(-2147483648), ~_wgslsmith_dot_vec4_u32(var_0.a.a.c, vec4<u32>(1498u, var_2.b.b.x, 1u, u_input.a))).a), 1i, 36074u);
        }
    }
    global0 = _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(round(-554f)))))), 992f));
    if (true) {
        switch (_wgslsmith_dot_vec4_i32(vec4<i32>(_wgslsmith_sub_i32(abs(0i << (0u % 32u)), -15328i), min(u_input.c.x, -1i) ^ (func_3(Struct_4(Struct_2(Struct_1(vec2<i32>(30210i, u_input.c.x), vec4<u32>(1u, 38688u, 0u, 0u), vec4<u32>(u_input.b, u_input.b, 15224u, u_input.a), vec4<i32>(u_input.c.x, 54197i, u_input.c.x, u_input.c.x)), Struct_1(vec2<i32>(6442i, 8603i), vec4<u32>(u_input.a, 6995u, 0u, 24245u), vec4<u32>(1u, u_input.b, 0u, u_input.b), vec4<i32>(u_input.c.x, 0i, u_input.c.x, -23330i)), false)), u_input.c.x, 1u).a.b.a.x | reverseBits(0i)), func_5(func_3(func_3(Struct_4(Struct_2(Struct_1(vec2<i32>(1683i, 1i), vec4<u32>(47711u, 21705u, 0u, 37156u), vec4<u32>(8395u, 4294967295u, u_input.b, u_input.b), vec4<i32>(u_input.c.x, u_input.c.x, u_input.c.x, u_input.c.x)), Struct_1(u_input.c, vec4<u32>(u_input.a, 21584u, 1u, u_input.b), vec4<u32>(u_input.b, u_input.a, 39154u, u_input.b), vec4<i32>(u_input.c.x, u_input.c.x, u_input.c.x, u_input.c.x)), false)), u_input.c.x, u_input.b), max(-19937i, 14724i), u_input.a).a.a.d.ww).a.x, ~func_8(_wgslsmith_dot_vec3_i32(vec3<i32>(u_input.c.x, i32(-2147483648), u_input.c.x), vec3<i32>(4445i, i32(-2147483648), i32(-2147483648))), vec3<f32>(118f, 1047f, 319f)).b), max(_wgslsmith_div_vec4_i32(abs(vec4<i32>(u_input.c.x, 41392i, u_input.c.x, i32(-2147483648))), vec4<i32>(-39077i, 1i, 1i, u_input.c.x)), _wgslsmith_add_vec4_i32(vec4<i32>(u_input.c.x, u_input.c.x, abs(-1i), u_input.c.x << (u_input.b % 32u)), max(~vec4<i32>(-38018i, -33589i, -13355i, 70631i), _wgslsmith_div_vec4_i32(vec4<i32>(9499i, u_input.c.x, 1i, 0i), vec4<i32>(u_input.c.x, 2147483647i, 1i, 10797i))))))) {
            case 0i: {
                let var_0 = func_3(Struct_4(Struct_2(Struct_1(min(u_input.c, vec2<i32>(u_input.c.x, u_input.c.x)), vec4<u32>(1u, u_input.a, 1u, 1u), ~vec4<u32>(u_input.b, u_input.a, u_input.b, 3425u), vec4<i32>(16321i, -19714i, u_input.c.x, u_input.c.x)), Struct_1(firstLeadingBit(vec2<i32>(u_input.c.x, -1i)), vec4<u32>(u_input.b, u_input.b, 0u, u_input.a), vec4<u32>(u_input.a, 1u, 0u, u_input.a) >> (vec4<u32>(21589u, u_input.b, u_input.b, u_input.b) % vec4<u32>(32u)), vec4<i32>(-40490i, u_input.c.x, u_input.c.x, u_input.c.x)), true)), u_input.c.x, func_8(func_3(Struct_4(func_3(Struct_4(Struct_2(Struct_1(vec2<i32>(u_input.c.x, u_input.c.x), vec4<u32>(42403u, 1u, u_input.b, u_input.a), vec4<u32>(39113u, 4294967295u, u_input.b, u_input.a), vec4<i32>(24029i, u_input.c.x, 2147483647i, 22799i)), Struct_1(vec2<i32>(36712i, 14167i), vec4<u32>(u_input.b, 33877u, u_input.b, 4294967295u), vec4<u32>(u_input.a, u_input.b, 84184u, u_input.a), vec4<i32>(u_input.c.x, u_input.c.x, u_input.c.x, u_input.c.x)), false)), u_input.c.x, u_input.a).a), ~u_input.c.x, countOneBits(4294967295u)).a.b.a.x, _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(vec3<f32>(1000f, 996f, -270f) + vec3<f32>(1484f, 233f, -1514f)))))).c).a;
                return Struct_3(Struct_2(var_0.a, var_0.a, false), _wgslsmith_f_op_vec4_f32(floor(vec4<f32>(_wgslsmith_f_op_f32(-547f * _wgslsmith_f_op_f32(sign(742f))), _wgslsmith_f_op_f32(func_7(~var_0.b.b.zw, vec2<bool>(false, var_0.c), func_3(Struct_4(var_0), -23794i, 4294967295u))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(2142f))), _wgslsmith_f_op_f32(_wgslsmith_div_f32(-1000f, 262f) + _wgslsmith_f_op_f32(max(-1681f, 353f)))))), _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(-168f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(-2779f))), _wgslsmith_f_op_f32(func_7(vec2<u32>(36047u, var_0.b.b.x), vec2<bool>(false, var_0.c), func_3(Struct_4(Struct_2(var_0.a, var_0.a, var_0.c)), var_0.b.d.x, var_0.a.c.x))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(559f, 1146f))))));
            }
            default: {
                var var_0 = max(u_input.c.x, abs(u_input.c.x) >> (1u % 32u));
                let var_1 = true;
            }
        }
        global0 = 1006f;
    }
    return Struct_3(func_3(func_3(func_3(Struct_4(Struct_2(Struct_1(vec2<i32>(u_input.c.x, u_input.c.x), vec4<u32>(1u, u_input.a, u_input.b, 9292u), vec4<u32>(u_input.b, 1u, u_input.a, 28894u), vec4<i32>(u_input.c.x, u_input.c.x, 2147483647i, u_input.c.x)), Struct_1(u_input.c, vec4<u32>(u_input.a, 12118u, u_input.b, u_input.b), vec4<u32>(0u, u_input.a, 134694u, 415u), vec4<i32>(-22761i, u_input.c.x, 42754i, i32(-2147483648))), true)), _wgslsmith_add_i32(2147483647i, -1i), _wgslsmith_add_u32(u_input.b, 67494u)), -61018i, u_input.a >> (1u % 32u)), -38993i, ~(u_input.b << (func_3(Struct_4(Struct_2(Struct_1(vec2<i32>(u_input.c.x, u_input.c.x), vec4<u32>(u_input.b, 0u, 30864u, u_input.a), vec4<u32>(75673u, 4294967295u, 1u, 68220u), vec4<i32>(u_input.c.x, u_input.c.x, -47569i, 2147483647i)), Struct_1(vec2<i32>(-22846i, 63592i), vec4<u32>(u_input.b, u_input.b, u_input.a, u_input.a), vec4<u32>(32280u, u_input.b, u_input.a, u_input.b), vec4<i32>(u_input.c.x, u_input.c.x, -24954i, -31175i)), true)), u_input.c.x, 115426u).a.a.b.x % 32u))).a, _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-228f, 1369f, -684f, 1160f)) + vec4<f32>(_wgslsmith_f_op_f32(max(-177f, 287f)), _wgslsmith_f_op_f32(-368f), _wgslsmith_f_op_f32(-1000f + 1993f), _wgslsmith_f_op_f32(-1291f))) - _wgslsmith_f_op_vec4_f32(-vec4<f32>(1f, 1f, 1f, 1f))), vec4<f32>(_wgslsmith_f_op_f32(step(1140f, _wgslsmith_f_op_f32(-449f * 1186f))), _wgslsmith_f_op_f32(floor(_wgslsmith_div_f32(100f, _wgslsmith_f_op_f32(sign(933f))))), 1f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(159f, _wgslsmith_f_op_f32(-260f))) + _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(min(1009f, 1056f)))))));
}

fn func_1() -> vec3<bool> {
    let var_0 = vec2<u32>(u_input.a, ~_wgslsmith_dot_vec2_u32(vec2<u32>(~0u, ~29746u), firstTrailingBit(vec2<u32>(10429u, 4294967295u) >> (vec2<u32>(u_input.b, 0u) % vec2<u32>(32u)))));
    let var_1 = func_2();
    var var_2 = Struct_3(var_1.a, vec4<f32>(func_2().c.x, _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(var_1.b.x + 295f))))), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-525f + _wgslsmith_f_op_f32(-1200f + var_1.c.x)))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(ceil(_wgslsmith_div_f32(428f, 205f))), -1261f)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-713f))), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(var_1.b.x + -1000f), _wgslsmith_f_op_f32(min(var_1.b.x, var_1.c.x)), true)), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-388f), -281f), var_1.b.x)));
    loop {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
        var var_3 = var_2.a;
        var_3 = func_3(func_3(Struct_4(var_1.a), _wgslsmith_sub_i32(~(-20387i), countOneBits(firstLeadingBit(var_3.b.a.x))), 21777u), var_1.a.b.a.x, ~_wgslsmith_sub_u32(_wgslsmith_clamp_u32(var_3.b.c.x | var_2.a.b.c.x, ~u_input.b, ~1u), countOneBits(0u))).a;
    }
    var var_3 = _wgslsmith_f_op_f32(-829f);
    return select(vec3<bool>(!var_1.a.c, func_6(firstTrailingBit(var_1.a.a.a)), (_wgslsmith_f_op_f32(var_1.b.x - var_2.c.x) != _wgslsmith_div_f32(var_1.b.x, 685f)) || true), !(!select(!vec3<bool>(var_1.a.c, false, false), vec3<bool>(false, false, var_2.a.c), func_6(vec2<i32>(6613i, 3748i)))), false);
}

fn func_9(arg_0: f32, arg_1: vec3<bool>) -> i32 {
    var var_0 = Struct_2(Struct_1(u_input.c, vec4<u32>(u_input.a, max(_wgslsmith_mult_u32(u_input.a, u_input.b), 29673u), 1u, u_input.b | 18792u), ~vec4<u32>(u_input.a, _wgslsmith_div_u32(u_input.a, 1u), u_input.a, u_input.a), vec4<i32>(~_wgslsmith_mod_i32(-13614i, u_input.c.x), -(u_input.c.x & u_input.c.x), -func_8(u_input.c.x, vec3<f32>(-143f, arg_0, arg_0)).e.x, reverseBits(_wgslsmith_dot_vec3_i32(vec3<i32>(u_input.c.x, u_input.c.x, u_input.c.x), vec3<i32>(u_input.c.x, 53252i, u_input.c.x))))), func_5(-_wgslsmith_mult_vec2_i32(~vec2<i32>(u_input.c.x, 2147483647i), u_input.c & vec2<i32>(u_input.c.x, u_input.c.x))), !all(!(!vec3<bool>(arg_1.x, arg_1.x, arg_1.x))));
    var_0 = Struct_2(Struct_1(var_0.a.a, reverseBits(var_0.a.b), _wgslsmith_mod_vec4_u32(vec4<u32>(23026u, 1u, u_input.b, 70157u) & abs(var_0.b.c), _wgslsmith_mod_vec4_u32(vec4<u32>(1u, 34222u, u_input.a, 5751u), ~var_0.b.c)), -min(var_0.b.d, var_0.a.d) >> (var_0.a.c % vec4<u32>(32u))), Struct_1(vec2<i32>(-abs(var_0.a.a.x), u_input.c.x), ~vec4<u32>(_wgslsmith_mult_u32(41979u, 51985u), firstLeadingBit(4294967295u), _wgslsmith_dot_vec2_u32(vec2<u32>(1u, 17569u), vec2<u32>(24761u, 4294967295u)), 1u), ~var_0.b.c << (_wgslsmith_mod_vec4_u32(~var_0.a.b, _wgslsmith_clamp_vec4_u32(var_0.a.b, var_0.b.b, var_0.b.b)) % vec4<u32>(32u)), vec4<i32>(_wgslsmith_add_i32(~(-21156i), i32(-1i) * -1i), u_input.c.x, -1i, func_8(-34020i, vec3<f32>(878f, 978f, arg_0)).b)), false);
    if (true) {
    }
    var var_1 = Struct_5(vec3<bool>(arg_0 == _wgslsmith_f_op_f32(arg_0 * 103f), func_6(reverseBits(u_input.c)), !all(vec4<bool>(true, var_0.c, true, var_0.c))), (u_input.c.x << (~1u % 32u)) ^ u_input.c.x, abs(u_input.a), select(!func_8(u_input.c.x, _wgslsmith_f_op_vec3_f32(exp2(vec3<f32>(arg_0, arg_0, 1304f)))).d, true, 1u != var_0.b.c.x), u_input.c);
    let var_2 = func_8(firstLeadingBit(_wgslsmith_clamp_i32(u_input.c.x, u_input.c.x, min(reverseBits(var_1.b), var_1.e.x))), _wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(min(-546f, _wgslsmith_f_op_f32(-arg_0))), 1000f, -266f) * _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(1408f, arg_0, arg_0)))));
    return u_input.c.x;
}

@compute
@workgroup_size(1)
fn main() {
    if (true) {
    }
    var var_0 = min(~firstLeadingBit(u_input.c.x), ~16856i);
    var_0 = countOneBits(17673i);
    var var_1 = Struct_1(u_input.c, _wgslsmith_add_vec4_u32(select(countOneBits(vec4<u32>(0u, 0u, 61961u, 62042u)), countOneBits(vec4<u32>(10870u, u_input.b, u_input.a, u_input.b)), 0i <= u_input.c.x), vec4<u32>(1982u, 1u, u_input.a, u_input.a) | firstLeadingBit(vec4<u32>(10952u, u_input.b, 4294967295u, u_input.b))) & vec4<u32>(~_wgslsmith_div_u32(15362u, 1u), u_input.b, ~u_input.b ^ _wgslsmith_add_u32(u_input.a, 1u), u_input.a), _wgslsmith_mult_vec4_u32(~(~vec4<u32>(u_input.a, 66714u, 1u, u_input.b)), _wgslsmith_div_vec4_u32(countOneBits(vec4<u32>(u_input.a, 13910u, u_input.b, u_input.a)), ~countOneBits(vec4<u32>(u_input.b, u_input.b, 4294967295u, u_input.a)))), select(vec4<i32>(-1i) * -vec4<i32>(u_input.c.x, -15338i, u_input.c.x, u_input.c.x), ~min(min(vec4<i32>(735i, 40533i, -69335i, u_input.c.x), vec4<i32>(u_input.c.x, -41768i, -34650i, u_input.c.x)), _wgslsmith_mod_vec4_i32(vec4<i32>(u_input.c.x, 12940i, u_input.c.x, 2147483647i), vec4<i32>(1i, 2147483647i, u_input.c.x, u_input.c.x))), vec4<bool>(any(vec4<bool>(false, false, false, false)) | select(false, true, false), true, !all(vec4<bool>(false, true, true, true)), false)));
    let var_2 = _wgslsmith_clamp_vec4_i32(var_1.d & ~_wgslsmith_add_vec4_i32(-var_1.d, var_1.d), ~var_1.d, vec4<i32>(~u_input.c.x, countOneBits(0i), ~func_9(_wgslsmith_f_op_f32(-1204f), func_1()), -36626i));
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_f_op_f32(-func_2().c.x), vec3<u32>(u_input.b, ~14639u, ~min(74751u, 0u)) & vec3<u32>(0u, 1u, ~(~5701u)), 21020u, _wgslsmith_div_vec3_f32(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(-1366f, 1281f, 452f) - _wgslsmith_f_op_vec3_f32(vec3<f32>(683f, -1740f, 1296f) - vec3<f32>(-172f, -1314f, 258f))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(vec3<f32>(-1866f, 1208f, -365f), vec3<f32>(-1057f, -1521f, -380f)))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(min(vec3<f32>(-364f, -1692f, 434f), vec3<f32>(164f, 1000f, -581f)))))), u_input.b);
}

`;