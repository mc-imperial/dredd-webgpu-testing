export const input = [35,27,9,208,232,204,69,42,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [35,27,9,208,232,204,69,42,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[35,27,9,208,232,204,69,42]}
// Seed: 14659142816962628008

struct Struct_1 {
    a: vec4<u32>,
    b: vec2<i32>,
    c: vec4<i32>,
    d: vec2<u32>,
}

struct Struct_2 {
    a: vec4<f32>,
    b: u32,
    c: Struct_1,
}

struct UniformBuffer {
    a: vec2<i32>,
}

struct StorageBuffer {
    a: vec4<i32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: vec3<bool>;

var<private> LOOP_COUNTERS: array<u32, 19>;

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn func_6(arg_0: vec2<u32>, arg_1: f32, arg_2: Struct_2, arg_3: Struct_1) -> vec4<u32> {
    var var_0 = arg_2;
    let var_1 = Struct_2(var_0.a, select(arg_3.a.x, ~arg_3.d.x, true), var_0.c);
    let var_2 = arg_2.b;
    if (all(select(vec2<bool>(any(vec3<bool>(true, false, true)), all(select(vec2<bool>(false, true), global0.zy, vec2<bool>(false, false)))), !global0.xy, global0.yx))) {
        global0 = !vec3<bool>(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(trunc(-141f)))) >= _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-var_1.a.x))), false, true & select(false, all(global0.yz), !global0.x));
    }
    if (global0.x) {
        global0 = !(!select(!vec3<bool>(global0.x, true, false), vec3<bool>(true, true, true), false));
        global0 = !(!(!(!vec3<bool>(false, global0.x, global0.x))));
    }
    return ~var_0.c.a;
}

fn func_5(arg_0: vec2<i32>) -> f32 {
    var var_0 = Struct_1(_wgslsmith_sub_vec4_u32(~vec4<u32>(1u, 1u, 1u, 1u), _wgslsmith_mult_vec4_u32(func_6(vec2<u32>(1u, 1u), -1000f, Struct_2(vec4<f32>(1363f, -208f, 1000f, 381f), 4294967295u, Struct_1(vec4<u32>(30364u, 4294967295u, 7644u, 4294967295u), vec2<i32>(-10788i, i32(-2147483648)), vec4<i32>(2147483647i, i32(-2147483648), 60711i, -27002i), vec2<u32>(0u, 1u))), Struct_1(vec4<u32>(1u, 132u, 1u, 53677u), arg_0, vec4<i32>(u_input.a.x, u_input.a.x, 14730i, arg_0.x), vec2<u32>(1u, 4294967295u))), vec4<u32>(1u, 1u, 1u, 1u))), vec2<i32>(_wgslsmith_add_i32(abs(~0i), 41508i), _wgslsmith_sub_i32(-abs(70594i), -u_input.a.x & ~u_input.a.x)), _wgslsmith_clamp_vec4_i32(vec4<i32>(arg_0.x, -max(arg_0.x, arg_0.x), u_input.a.x, -1i), ~(~vec4<i32>(56835i, 17073i, arg_0.x, 1i)), vec4<i32>(abs(u_input.a.x), min(u_input.a.x, _wgslsmith_div_i32(-10105i, arg_0.x)), 1i, _wgslsmith_sub_i32(reverseBits(34318i), -arg_0.x))), _wgslsmith_add_vec2_u32(func_6(_wgslsmith_clamp_vec2_u32(vec2<u32>(1u, 1u), vec2<u32>(1u, 1u), func_6(vec2<u32>(1u, 4294967295u), -675f, Struct_2(vec4<f32>(-2418f, 1256f, -1520f, 772f), 49343u, Struct_1(vec4<u32>(0u, 0u, 100056u, 0u), vec2<i32>(arg_0.x, -19851i), vec4<i32>(arg_0.x, -33469i, -47032i, u_input.a.x), vec2<u32>(0u, 4294967295u))), Struct_1(vec4<u32>(24640u, 87972u, 95797u, 4294967295u), vec2<i32>(arg_0.x, 9404i), vec4<i32>(arg_0.x, u_input.a.x, u_input.a.x, i32(-2147483648)), vec2<u32>(35564u, 1u))).wy), _wgslsmith_f_op_f32(-230f + _wgslsmith_f_op_f32(-1867f)), Struct_2(_wgslsmith_div_vec4_f32(vec4<f32>(-492f, 508f, 169f, 141f), vec4<f32>(489f, 1079f, -1000f, -145f)), 0u, Struct_1(vec4<u32>(0u, 11524u, 19279u, 1u), vec2<i32>(u_input.a.x, u_input.a.x), vec4<i32>(arg_0.x, -55565i, u_input.a.x, arg_0.x), vec2<u32>(10230u, 4294967295u))), Struct_1(vec4<u32>(1u, 1u, 1u, 1u), arg_0, vec4<i32>(1i, u_input.a.x, arg_0.x, -27448i) ^ vec4<i32>(-36170i, -1i, 2147483647i, arg_0.x), ~vec2<u32>(57644u, 1u))).zy, vec2<u32>(0u, 1u)));
    let var_1 = !global0.x;
    let var_2 = !global0.xz;
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        loop {
            if (LOOP_COUNTERS[1u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
            break;
        }
        global0 = !vec3<bool>(select(var_2.x, var_1, var_2.x), all(select(vec2<bool>(false, var_1), vec2<bool>(var_1, global0.x), vec2<bool>(var_2.x, global0.x))) | false, all(select(select(vec4<bool>(false, true, global0.x, global0.x), vec4<bool>(var_1, var_1, global0.x, true), vec4<bool>(var_1, global0.x, global0.x, var_1)), !vec4<bool>(var_2.x, false, false, var_1), vec4<bool>(true, var_2.x, false, false))));
        var_0 = Struct_1(func_6(reverseBits(_wgslsmith_clamp_vec2_u32(var_0.a.yz, ~var_0.a.xw, ~var_0.a.zx)), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -168f) * _wgslsmith_f_op_f32(-1214f - 201f)), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(min(-1417f, 1950f)), _wgslsmith_f_op_f32(f32(-1f) * -686f))))), Struct_2(_wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(vec4<f32>(-479f, 842f, -1398f, -456f), vec4<f32>(-763f, -1000f, 105f, -1234f)) * _wgslsmith_f_op_vec4_f32(abs(vec4<f32>(353f, 2059f, -1288f, -757f)))), var_0.a.x, Struct_1(var_0.a, vec2<i32>(var_0.b.x, u_input.a.x), vec4<i32>(-1i, 19967i, var_0.c.x, var_0.b.x), _wgslsmith_div_vec2_u32(var_0.a.wy, vec2<u32>(8257u, var_0.d.x)))), Struct_1(var_0.a, u_input.a, firstTrailingBit(vec4<i32>(var_0.b.x, -1i, var_0.b.x, 2147483647i) >> (var_0.a % vec4<u32>(32u))), ~vec2<u32>(var_0.a.x, 4294967295u))), ~abs(vec2<i32>(1i, 1i) << ((vec2<u32>(var_0.d.x, 4294967295u) >> (var_0.a.zy % vec2<u32>(32u))) % vec2<u32>(32u))), vec4<i32>(_wgslsmith_dot_vec3_i32(~vec3<i32>(var_0.b.x, 0i, var_0.b.x), _wgslsmith_clamp_vec3_i32(vec3<i32>(2147483647i, 5681i, 2147483647i), firstLeadingBit(vec3<i32>(var_0.c.x, i32(-2147483648), -1i)), -vec3<i32>(arg_0.x, -2570i, 36796i))), max(-27451i, 2147483647i), arg_0.x, arg_0.x), _wgslsmith_div_vec2_u32(vec2<u32>(var_0.d.x, 0u), _wgslsmith_mult_vec2_u32(vec2<u32>(min(var_0.a.x, 0u), 4294967295u | var_0.a.x), firstTrailingBit(_wgslsmith_div_vec2_u32(var_0.d, vec2<u32>(var_0.d.x, var_0.d.x))))));
        global0 = select(select(!vec3<bool>(!var_1, !global0.x, true), !select(select(vec3<bool>(var_2.x, var_2.x, true), vec3<bool>(var_2.x, false, false), true), select(vec3<bool>(true, false, var_2.x), vec3<bool>(global0.x, global0.x, true), true), select(vec3<bool>(true, false, var_1), vec3<bool>(var_2.x, false, false), false)), !vec3<bool>(any(vec3<bool>(true, global0.x, true)), any(vec3<bool>(var_2.x, true, true)), false)), !select(!(!vec3<bool>(var_1, global0.x, global0.x)), !vec3<bool>(global0.x, true, global0.x), true), !select(select(!vec3<bool>(global0.x, global0.x, global0.x), !vec3<bool>(var_2.x, true, false), vec3<bool>(global0.x, false, true)), !(!vec3<bool>(global0.x, true, true)), true));
        if (global0.x) {
            let var_3 = !select(select(select(select(vec3<bool>(false, var_2.x, false), vec3<bool>(var_2.x, false, var_2.x), var_1), select(vec3<bool>(true, var_1, global0.x), vec3<bool>(true, false, var_2.x), vec3<bool>(var_1, global0.x, var_2.x)), !global0.x), !(!vec3<bool>(true, false, var_2.x)), var_1), select(select(!vec3<bool>(global0.x, global0.x, var_2.x), vec3<bool>(var_1, false, var_2.x), !global0.x), select(vec3<bool>(var_2.x, var_2.x, var_1), !vec3<bool>(global0.x, var_1, global0.x), var_1), true), true);
            let var_4 = _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(-1938f, -782f, -537f) * vec3<f32>(-1000f, 494f, -377f))) - _wgslsmith_f_op_vec3_f32(min(vec3<f32>(317f, -1245f, -874f), _wgslsmith_f_op_vec3_f32(floor(vec3<f32>(-576f, -848f, -849f)))))) * _wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(-937f, 632f, 824f) + vec3<f32>(1475f, -913f, -1587f))), _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(vec3<f32>(1000f, -896f, -247f) - vec3<f32>(787f, -542f, 2943f)), _wgslsmith_f_op_vec3_f32(select(vec3<f32>(-1348f, 118f, -1127f), vec3<f32>(-878f, 1947f, -685f), var_2.x)), false))))), _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1139f, -1000f, 839f)))))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(vec3<f32>(-794f, 224f, 1026f), _wgslsmith_f_op_vec3_f32(-vec3<f32>(-748f, 1107f, 187f)))))));
            let var_5 = Struct_2(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(floor(vec4<f32>(_wgslsmith_f_op_f32(-1021f + 977f), 201f, _wgslsmith_div_f32(-1512f, 1337f), _wgslsmith_f_op_f32(-var_4.x)))) * vec4<f32>(-351f, 831f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_4.x)), -895f)), 0u >> (_wgslsmith_add_u32(_wgslsmith_mod_u32(_wgslsmith_sub_u32(var_0.a.x, var_0.d.x), var_0.d.x), var_0.d.x) % 32u), Struct_1(_wgslsmith_sub_vec4_u32(vec4<u32>(_wgslsmith_dot_vec2_u32(var_0.a.zy, vec2<u32>(var_0.a.x, 53920u)), ~0u, ~97464u, _wgslsmith_div_u32(34122u, 1u)), abs(var_0.a)), _wgslsmith_div_vec2_i32(reverseBits(var_0.b), reverseBits(vec2<i32>(arg_0.x, 36588i))), var_0.c, ~vec2<u32>(~4294967295u, _wgslsmith_mod_u32(15015u, 4294967295u))));
            let var_6 = _wgslsmith_div_vec3_u32(~var_0.a.zzx, _wgslsmith_sub_vec3_u32(min(firstTrailingBit(vec3<u32>(1u, 1u, var_0.d.x)), var_0.a.yxw ^ vec3<u32>(19106u, var_5.c.d.x, 19475u)), vec3<u32>(~0u, 0u, ~4294967295u))) >> (firstTrailingBit(~var_0.a.zyx) % vec3<u32>(32u));
        }
    }
    loop {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
    }
    return _wgslsmith_f_op_f32(1219f + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(f32(-1f) * -102f), _wgslsmith_f_op_f32(f32(-1f) * -1319f))), 1656f, var_1)) + _wgslsmith_f_op_f32(step(-805f, _wgslsmith_f_op_f32(max(1f, _wgslsmith_f_op_f32(-157f * 197f)))))));
}

fn func_4(arg_0: u32, arg_1: Struct_2) -> Struct_2 {
    loop {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        let var_0 = global0.x;
        var var_1 = _wgslsmith_f_op_vec2_f32(vec2<f32>(103f, _wgslsmith_div_f32(_wgslsmith_f_op_f32(1444f - 744f), arg_1.a.x)) - vec2<f32>(_wgslsmith_f_op_f32(138f + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-571f - 1156f))), _wgslsmith_div_f32(-900f, _wgslsmith_f_op_f32(max(2290f, _wgslsmith_f_op_f32(-159f))))));
    }
    let var_0 = _wgslsmith_f_op_f32(-arg_1.a.x);
    var var_1 = !any(vec2<bool>(false, any(vec4<bool>(true, false, false, global0.x)) != all(vec3<bool>(true, global0.x, global0.x))));
    switch (arg_1.c.b.x) {
        case -6741i: {
        }
        case -1i: {
            let var_2 = Struct_2(_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -410f) + _wgslsmith_f_op_f32(func_5(vec2<i32>(2147483647i, arg_1.c.c.x)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(arg_1.a.x, 559f, false)) - -992f), -1000f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(1310f))))), (arg_1.c.a.x << (4294967295u % 32u)) ^ arg_0, arg_1.c);
            var_1 = !global0.x || (global0.x | global0.x);
        }
        case 7143i: {
            if (false) {
                let var_2 = 1u;
                var var_3 = _wgslsmith_f_op_f32(-var_0);
                let var_4 = vec2<bool>(true, (firstLeadingBit(2147483647i) > -u_input.a.x) || global0.x);
                let var_5 = 1u & ~var_2;
            }
            switch (firstLeadingBit(_wgslsmith_div_i32(0i, 2147483647i & u_input.a.x))) {
                case 68236i: {
                    var var_2 = arg_1.c;
                    var var_3 = !vec4<bool>(any(!(!vec3<bool>(global0.x, global0.x, false))), !any(vec2<bool>(false, global0.x)), false, global0.x);
                }
                case i32(-2147483648): {
                    global0 = select(select(!select(vec3<bool>(global0.x, global0.x, global0.x), select(vec3<bool>(global0.x, global0.x, true), vec3<bool>(global0.x, global0.x, global0.x), false), vec3<bool>(true, true, true)), !vec3<bool>(global0.x, true, u_input.a.x == arg_1.c.c.x), !(!select(vec3<bool>(global0.x, true, global0.x), vec3<bool>(global0.x, true, true), global0.x))), !(!(!select(vec3<bool>(true, false, global0.x), vec3<bool>(true, true, false), vec3<bool>(global0.x, true, global0.x)))), -133f == _wgslsmith_f_op_f32(-arg_1.a.x));
                    global0 = vec3<bool>(all(select(select(!global0.xz, global0.yx, select(vec2<bool>(true, global0.x), global0.yz, global0.yx)), select(select(vec2<bool>(false, global0.x), vec2<bool>(true, true), global0.x), select(global0.yx, global0.xx, global0.x), global0.x), false)), false, all(!vec3<bool>(global0.x, arg_1.a.x <= var_0, !global0.x)));
                    var var_2 = var_0;
                    let var_3 = true;
                    var_1 = var_3;
                }
                case 2147483647i: {
                    var var_2 = _wgslsmith_add_u32(~_wgslsmith_dot_vec3_u32(arg_1.c.a.yzx, arg_1.c.a.zyw), ~(41369u ^ ~_wgslsmith_add_u32(arg_0, arg_0)));
                }
                default: {
                    global0 = !vec3<bool>(!(_wgslsmith_dot_vec2_i32(vec2<i32>(-1i, -22990i), u_input.a) == arg_1.c.b.x), all(select(!vec3<bool>(true, global0.x, global0.x), vec3<bool>(global0.x, global0.x, global0.x), !global0.x)), global0.x);
                    let var_2 = select(select(vec4<bool>(all(global0.yx), false, true, global0.x), vec4<bool>(global0.x, (arg_1.c.d.x < 34178u) || global0.x, abs(arg_1.c.c.x) > ~u_input.a.x, true), vec4<bool>(any(select(vec4<bool>(global0.x, global0.x, true, global0.x), vec4<bool>(false, false, false, global0.x), vec4<bool>(true, global0.x, global0.x, true))), true, true, global0.x)), select(vec4<bool>(!any(vec4<bool>(global0.x, global0.x, true, global0.x)), false, !(global0.x | true), true), vec4<bool>(false, true, min(5723u, arg_0) > ~2845u, all(select(vec4<bool>(false, global0.x, true, global0.x), vec4<bool>(global0.x, global0.x, global0.x, true), global0.x))), vec4<bool>(any(select(vec4<bool>(global0.x, global0.x, true, global0.x), vec4<bool>(false, false, true, global0.x), vec4<bool>(global0.x, global0.x, global0.x, global0.x))), any(select(global0.yy, vec2<bool>(global0.x, global0.x), vec2<bool>(global0.x, global0.x))), _wgslsmith_f_op_f32(step(-600f, -414f)) >= var_0, all(global0.xz))), select(!(!(!vec4<bool>(true, global0.x, global0.x, false))), vec4<bool>(true, _wgslsmith_f_op_f32(ceil(-933f)) == var_0, all(vec2<bool>(false, global0.x)) && (false && global0.x), any(select(vec3<bool>(false, global0.x, global0.x), vec3<bool>(global0.x, global0.x, global0.x), true))), vec4<bool>(true, global0.x, all(!vec4<bool>(false, global0.x, global0.x, false)), global0.x)));
                    let var_3 = vec3<bool>(false, global0.x | (~(~arg_1.c.a.x) >= 0u), abs(arg_1.c.b.x) <= (arg_1.c.c.x >> ((29380u >> (firstTrailingBit(arg_0) % 32u)) % 32u)));
                    var var_4 = arg_1.c;
                    var var_5 = vec4<f32>(_wgslsmith_f_op_f32(func_5(_wgslsmith_sub_vec2_i32(u_input.a, arg_1.c.b))), _wgslsmith_f_op_f32(-var_0), var_0, arg_1.a.x);
                }
            }
            var_1 = global0.x;
        }
        default: {
            switch (-1i) {
                case -46507i: {
                    var var_2 = var_0;
                    var var_3 = arg_1.c;
                    var_1 = false;
                    let var_4 = !select(select(!vec4<bool>(true, global0.x, global0.x, true), select(vec4<bool>(true, global0.x, false, global0.x), vec4<bool>(global0.x, true, global0.x, global0.x), select(vec4<bool>(false, global0.x, global0.x, global0.x), vec4<bool>(global0.x, global0.x, global0.x, global0.x), vec4<bool>(global0.x, global0.x, true, global0.x))), !any(vec3<bool>(false, true, true))), !select(!vec4<bool>(global0.x, global0.x, false, global0.x), vec4<bool>(true, false, global0.x, global0.x), !vec4<bool>(true, global0.x, false, global0.x)), (global0.x && true) && all(vec2<bool>(false, false)));
                }
                default: {
                }
            }
            if (false) {
                var_1 = _wgslsmith_f_op_f32(func_5(arg_1.c.c.wy)) == arg_1.a.x;
            }
            let var_2 = arg_1.a.zyz;
            global0 = vec3<bool>(global0.x, all(vec4<bool>(false, arg_1.a.x <= var_2.x, all(select(vec3<bool>(true, global0.x, global0.x), vec3<bool>(true, true, false), global0.x)), any(select(vec2<bool>(global0.x, global0.x), global0.zz, vec2<bool>(global0.x, false))))), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(min(2206f, _wgslsmith_f_op_f32(f32(-1f) * -570f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1243f - -328f)))) == _wgslsmith_f_op_f32(ceil(var_0)));
        }
    }
    loop {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        let var_2 = _wgslsmith_dot_vec2_u32(vec2<u32>(1u, 0u), vec2<u32>(_wgslsmith_mod_u32(~1u, ~2785u), 0u << (arg_0 % 32u))) >= arg_1.c.a.x;
        switch (~(i32(-2147483648))) {
            default: {
                global0 = !(!vec3<bool>(_wgslsmith_dot_vec3_i32(arg_1.c.c.ywx, vec3<i32>(61577i, u_input.a.x, 2147483647i)) <= max(u_input.a.x, arg_1.c.c.x), true, !(false || var_2)));
                global0 = !(!(!select(!vec3<bool>(var_2, false, var_2), !vec3<bool>(false, true, global0.x), any(vec4<bool>(true, false, global0.x, var_2)))));
                let var_3 = countOneBits(u_input.a.x);
                var_1 = any(select(!(!select(vec3<bool>(global0.x, true, global0.x), vec3<bool>(global0.x, global0.x, global0.x), vec3<bool>(true, global0.x, global0.x))), vec3<bool>(false, var_0 < _wgslsmith_f_op_f32(arg_1.a.x + arg_1.a.x), !(!global0.x)), select(select(!vec3<bool>(false, var_2, true), vec3<bool>(true, true, true), !global0.x), select(select(vec3<bool>(false, var_2, true), vec3<bool>(false, true, true), global0.x), vec3<bool>(var_2, true, var_2), !vec3<bool>(false, true, var_2)), !vec3<bool>(true, var_2, true))));
                let var_4 = _wgslsmith_clamp_u32(29845u & arg_0, _wgslsmith_clamp_u32(~_wgslsmith_mod_u32(reverseBits(arg_0), firstLeadingBit(4294967295u)), 50698u, countOneBits(_wgslsmith_dot_vec4_u32(vec4<u32>(arg_0, 19353u, arg_1.c.a.x, arg_0) ^ vec4<u32>(arg_1.b, 4294967295u, 1u, 16926u), arg_1.c.a))), firstLeadingBit(2740u));
            }
        }
        continue;
    }
    return Struct_2(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(abs(_wgslsmith_f_op_vec4_f32(-vec4<f32>(var_0, arg_1.a.x, var_0, -2023f))))), firstLeadingBit(~arg_0), arg_1.c);
}

fn func_7(arg_0: Struct_2) -> vec3<bool> {
    let var_0 = vec2<bool>(arg_0.c.d.x < arg_0.c.d.x, global0.x);
    let var_1 = _wgslsmith_add_i32(func_4(arg_0.b ^ _wgslsmith_dot_vec2_u32(_wgslsmith_clamp_vec2_u32(arg_0.c.d, vec2<u32>(4294967295u, arg_0.b), vec2<u32>(1u, 4294967295u)), vec2<u32>(arg_0.c.a.x, arg_0.c.d.x)), Struct_2(vec4<f32>(_wgslsmith_f_op_f32(-arg_0.a.x), func_4(arg_0.b, arg_0).a.x, _wgslsmith_f_op_f32(ceil(arg_0.a.x)), 1616f), _wgslsmith_div_u32(~arg_0.c.d.x, ~arg_0.c.a.x), Struct_1(select(arg_0.c.a, vec4<u32>(0u, 4294967295u, 0u, arg_0.b), vec4<bool>(false, var_0.x, true, true)), reverseBits(u_input.a), arg_0.c.c, ~vec2<u32>(arg_0.b, 4294967295u)))).c.c.x, u_input.a.x ^ ~(-2147483647i));
    switch ((-u_input.a.x >> (reverseBits(min(_wgslsmith_add_u32(arg_0.b, arg_0.c.d.x), 59041u << (arg_0.b % 32u))) % 32u)) >> (~(~_wgslsmith_mult_u32(12982u, 7817u)) % 32u)) {
        case 2147483647i: {
            var var_2 = _wgslsmith_div_i32(firstLeadingBit(_wgslsmith_clamp_i32(_wgslsmith_div_i32(firstLeadingBit(var_1), -1i >> (0u % 32u)), 2147483647i, -411i)), ~1402i);
            switch (var_1) {
                default: {
                }
            }
        }
        default: {
        }
    }
    global0 = !select(vec3<bool>(global0.x, true, all(select(vec4<bool>(global0.x, var_0.x, true, true), vec4<bool>(false, global0.x, true, global0.x), var_0.x))), !vec3<bool>(all(vec2<bool>(true, false)), any(vec2<bool>(global0.x, true)), true), select(vec3<bool>(false, true, all(var_0)), select(select(vec3<bool>(true, var_0.x, var_0.x), vec3<bool>(false, global0.x, false), vec3<bool>(var_0.x, var_0.x, var_0.x)), select(vec3<bool>(global0.x, var_0.x, true), vec3<bool>(global0.x, true, global0.x), vec3<bool>(true, var_0.x, true)), var_0.x), vec3<bool>(var_0.x, true, all(vec4<bool>(false, false, false, false)))));
    var var_2 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-845f) * arg_0.a.x);
    return vec3<bool>(all(global0.xy), ~(~(~arg_0.b)) == _wgslsmith_clamp_u32(func_4(arg_0.c.d.x, Struct_2(vec4<f32>(437f, 1398f, arg_0.a.x, -564f), arg_0.b, Struct_1(vec4<u32>(arg_0.b, arg_0.c.a.x, arg_0.c.a.x, arg_0.b), vec2<i32>(0i, -1i), vec4<i32>(26217i, -4532i, 974i, var_1), vec2<u32>(34683u, arg_0.b)))).b, firstTrailingBit(1u), ~abs(arg_0.b)), any(select(!vec4<bool>(false, true, global0.x, false), !vec4<bool>(false, false, global0.x, var_0.x), !select(vec4<bool>(true, false, var_0.x, false), vec4<bool>(var_0.x, false, var_0.x, false), vec4<bool>(var_0.x, true, var_0.x, var_0.x)))));
}

fn func_3(arg_0: Struct_1, arg_1: Struct_2, arg_2: bool) -> Struct_2 {
    var var_0 = 1u;
    var var_1 = arg_1.a.xz;
    let var_2 = arg_1;
    var var_3 = Struct_2(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(step(vec4<f32>(-1150f, 746f, var_1.x, var_1.x), vec4<f32>(333f, -533f, var_1.x, 2180f))), arg_1.a))), arg_1.c.a.x, var_2.c);
    loop {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        global0 = !func_7(func_4(var_2.c.a.x, arg_1));
        let var_4 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(var_3.a - _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(max(vec4<f32>(var_3.a.x, 166f, 376f, -1400f), vec4<f32>(var_3.a.x, var_2.a.x, -646f, 488f))) * _wgslsmith_f_op_vec4_f32(-arg_1.a))) - _wgslsmith_f_op_vec4_f32(arg_1.a - vec4<f32>(_wgslsmith_f_op_f32(748f + var_1.x), _wgslsmith_f_op_f32(trunc(1311f)), var_2.a.x, var_2.a.x))));
        var var_5 = arg_2;
        var_1 = arg_1.a.yx;
        let var_6 = var_2.c.a.x;
    }
    return arg_1;
}

fn func_8(arg_0: vec4<f32>, arg_1: Struct_2, arg_2: Struct_1) -> u32 {
    for (var var_0 = -8943i; false; var_0 = _wgslsmith_div_i32(19468i, countOneBits(_wgslsmith_div_i32(u_input.a.x, arg_2.b.x ^ (i32(-1i) * -53765i))))) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        switch (_wgslsmith_add_i32(select(u_input.a.x << (func_6(arg_2.d, 703f, Struct_2(vec4<f32>(arg_1.a.x, arg_0.x, 507f, -515f), 16411u, arg_1.c), Struct_1(vec4<u32>(1u, 0u, 0u, 0u), u_input.a, vec4<i32>(u_input.a.x, 27356i, 37854i, 1i), vec2<u32>(arg_1.c.a.x, arg_1.b))).x % 32u), -1i, (true || global0.x) == global0.x), ~(-8551i)) >> (4294967295u % 32u)) {
            case -35205i: {
                var var_1 = Struct_1(_wgslsmith_div_vec4_u32(arg_1.c.a, ~(func_3(Struct_1(vec4<u32>(arg_1.b, arg_2.d.x, 4294967295u, 1u), vec2<i32>(0i, arg_2.b.x), arg_2.c, arg_1.c.a.yw), arg_1, false).c.a ^ arg_1.c.a)), min(vec2<i32>(_wgslsmith_div_i32(-1i, _wgslsmith_dot_vec2_i32(arg_2.c.xy, arg_2.c.zy)), i32(-2147483648)), vec2<i32>(max(1i, arg_2.c.x), u_input.a.x)), vec4<i32>(arg_1.c.c.x, ~(-arg_2.c.x >> (1u % 32u)), -35174i, ~u_input.a.x), ~(~arg_2.d));
                var_1 = Struct_1(abs(~arg_1.c.a), _wgslsmith_div_vec2_i32(reverseBits(_wgslsmith_div_vec2_i32(~u_input.a, _wgslsmith_clamp_vec2_i32(u_input.a, u_input.a, u_input.a))), countOneBits(_wgslsmith_mod_vec2_i32(u_input.a, -arg_1.c.c.xx))), vec4<i32>(_wgslsmith_add_i32(abs(u_input.a.x), -var_1.b.x) & countOneBits(-1i), -93046i, -1i, var_1.c.x >> (~(arg_2.a.x & 1u) % 32u)), ~_wgslsmith_mult_vec2_u32(firstTrailingBit(arg_2.a.wy) << (vec2<u32>(4294967295u, 1u) % vec2<u32>(32u)), var_1.d));
                break;
            }
            case 2147483647i: {
                continue;
            }
            default: {
                global0 = select(vec3<bool>((u_input.a.x & ~14863i) >= 0i, !(~arg_1.b > select(65599u, arg_2.a.x, false)), true), vec3<bool>(global0.x || !all(vec3<bool>(false, true, true)), select(arg_2.d.x, reverseBits(4294967295u), arg_0.x >= arg_1.a.x) >= 67640u, false), select(vec3<bool>(all(!vec3<bool>(global0.x, true, global0.x)), abs(arg_1.c.d.x) <= _wgslsmith_dot_vec3_u32(arg_2.a.yxz, arg_2.a.xxw), !global0.x), vec3<bool>(true, global0.x, !any(vec3<bool>(global0.x, global0.x, global0.x))), global0.x));
                var_0 = u_input.a.x;
                var var_1 = _wgslsmith_sub_u32(arg_2.d.x, _wgslsmith_add_u32(~4294967295u, ~(_wgslsmith_dot_vec3_u32(vec3<u32>(arg_2.a.x, arg_2.a.x, 1u), vec3<u32>(57401u, 4294967295u, 0u)) ^ firstTrailingBit(0u))));
                var var_2 = ~arg_2.a.x;
            }
        }
    }
    let var_0 = Struct_2(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(arg_0 + _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(vec4<f32>(-347f, arg_0.x, 622f, arg_0.x) * arg_0), _wgslsmith_f_op_vec4_f32(arg_0 + arg_0), 4294967295u < arg_2.a.x)))), 0u, arg_2);
    global0 = vec3<bool>(true && ((-arg_1.c.c.x & 2147483647i) <= 1i), global0.x, global0.x && global0.x);
    for (var var_1 = -29231i; !(arg_2.d.x > ~4294967295u); var_1 += 1i) {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        var var_2 = vec3<f32>(_wgslsmith_f_op_f32(-arg_0.x), -1103f, -161f);
        break;
    }
    var var_1 = arg_1.c.b.x | _wgslsmith_dot_vec2_i32(~arg_1.c.b, vec2<i32>(_wgslsmith_dot_vec4_i32(func_3(Struct_1(arg_1.c.a, vec2<i32>(-36754i, -21199i), arg_1.c.c, var_0.c.d), arg_1, false).c.c, max(vec4<i32>(arg_2.b.x, 2147483647i, arg_1.c.c.x, u_input.a.x), vec4<i32>(-1i, 2147483647i, var_0.c.b.x, arg_2.b.x))), 0i));
    return _wgslsmith_sub_u32(abs(_wgslsmith_dot_vec3_u32(vec3<u32>(22091u, arg_1.c.d.x, var_0.c.a.x), arg_2.a.ywx)), arg_1.b);
}

fn func_2() -> Struct_1 {
    global0 = vec3<bool>(true, global0.x, !global0.x);
    switch (-1i) {
        case -30511i: {
            var var_0 = ~(~(func_8(vec4<f32>(370f, 215f, -1960f, -116f), func_3(Struct_1(vec4<u32>(4294967295u, 4294967295u, 1u, 52427u), u_input.a, vec4<i32>(1916i, u_input.a.x, u_input.a.x, u_input.a.x), vec2<u32>(0u, 11486u)), Struct_2(vec4<f32>(758f, -1704f, -892f, -209f), 68677u, Struct_1(vec4<u32>(0u, 1u, 0u, 34413u), vec2<i32>(2147483647i, 25396i), vec4<i32>(u_input.a.x, u_input.a.x, 2147483647i, 5985i), vec2<u32>(4294967295u, 1u))), false), func_3(Struct_1(vec4<u32>(1u, 72463u, 4294967295u, 4294967295u), vec2<i32>(u_input.a.x, u_input.a.x), vec4<i32>(1i, -1i, 0i, u_input.a.x), vec2<u32>(19199u, 1u)), Struct_2(vec4<f32>(-1721f, -2456f, 1000f, -564f), 0u, Struct_1(vec4<u32>(25285u, 36831u, 1u, 1u), u_input.a, vec4<i32>(0i, u_input.a.x, u_input.a.x, u_input.a.x), vec2<u32>(4629u, 99133u))), true).c) << (19200u % 32u)));
            if (all(vec3<bool>(!(global0.x || false) | !global0.x, -161f != _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(539f - -2007f))), global0.x))) {
                let var_1 = (vec3<u32>(~1u, reverseBits(~1u), ~(~30595u)) | func_4(18190u, func_4(0u, func_4(4294967295u, Struct_2(vec4<f32>(1000f, 417f, 164f, 239f), 0u, Struct_1(vec4<u32>(19534u, 28097u, 143881u, 79111u), vec2<i32>(1i, u_input.a.x), vec4<i32>(u_input.a.x, 0i, -23907i, u_input.a.x), vec2<u32>(1u, 20361u)))))).c.a.zxw) ^ ~firstTrailingBit(func_6(vec2<u32>(1u, 1u), 1000f, Struct_2(vec4<f32>(-2821f, 129f, 1387f, 711f), 0u, Struct_1(vec4<u32>(41201u, 4294967295u, 18020u, 1u), vec2<i32>(u_input.a.x, i32(-2147483648)), vec4<i32>(u_input.a.x, -1i, 18572i, u_input.a.x), vec2<u32>(65166u, 4294967295u))), func_4(3976u, Struct_2(vec4<f32>(2461f, 1046f, -304f, 1866f), 0u, Struct_1(vec4<u32>(0u, 4294967295u, 58073u, 61754u), u_input.a, vec4<i32>(5452i, 18349i, u_input.a.x, -1i), vec2<u32>(1u, 54876u)))).c).zyy);
                let var_2 = -1000f;
                var_0 = func_3(func_3(func_3(Struct_1(vec4<u32>(4294967295u, 51606u, 29030u, 4294967295u), vec2<i32>(-43072i, 1i), vec4<i32>(23324i, u_input.a.x, u_input.a.x, 0i), var_1.zz), Struct_2(vec4<f32>(var_2, 462f, -123f, 993f), 129586u, Struct_1(vec4<u32>(var_1.x, var_1.x, 4294967295u, 4294967295u), u_input.a, vec4<i32>(u_input.a.x, u_input.a.x, u_input.a.x, 0i), vec2<u32>(19861u, 0u))), any(vec4<bool>(false, false, global0.x, true))).c, func_4(4294967295u, Struct_2(vec4<f32>(var_2, -210f, var_2, -326f), 0u, Struct_1(vec4<u32>(6126u, var_1.x, 0u, 59899u), vec2<i32>(1i, -4585i), vec4<i32>(u_input.a.x, u_input.a.x, u_input.a.x, -45372i), vec2<u32>(24500u, 16808u)))), global0.x).c, func_4(var_1.x, func_3(func_3(Struct_1(vec4<u32>(4294967295u, var_1.x, var_1.x, 1u), u_input.a, vec4<i32>(28554i, u_input.a.x, u_input.a.x, -20151i), var_1.yz), Struct_2(vec4<f32>(var_2, var_2, 1117f, -1159f), var_1.x, Struct_1(vec4<u32>(var_1.x, var_1.x, var_1.x, var_1.x), u_input.a, vec4<i32>(i32(-2147483648), u_input.a.x, u_input.a.x, u_input.a.x), var_1.xx)), true).c, func_4(var_1.x, Struct_2(vec4<f32>(var_2, -748f, 745f, 1021f), var_1.x, Struct_1(vec4<u32>(var_1.x, 37639u, var_1.x, var_1.x), u_input.a, vec4<i32>(u_input.a.x, -17739i, u_input.a.x, 1i), vec2<u32>(4752u, 6185u)))), !global0.x)), !(_wgslsmith_f_op_f32(func_5(u_input.a)) >= _wgslsmith_f_op_f32(839f + var_2))).c.d.x ^ max(0u, var_1.x >> (~(~var_1.x) % 32u));
                return Struct_1(~(~(~func_3(Struct_1(vec4<u32>(11206u, 23438u, var_1.x, 10131u), u_input.a, vec4<i32>(u_input.a.x, u_input.a.x, i32(-2147483648), u_input.a.x), var_1.yy), Struct_2(vec4<f32>(var_2, 1000f, var_2, -319f), 1u, Struct_1(vec4<u32>(0u, 17659u, var_1.x, var_1.x), u_input.a, vec4<i32>(-1i, -49218i, u_input.a.x, i32(-2147483648)), vec2<u32>(51230u, 1u))), global0.x).c.a)), _wgslsmith_mult_vec2_i32((_wgslsmith_add_vec2_i32(vec2<i32>(u_input.a.x, u_input.a.x), vec2<i32>(u_input.a.x, u_input.a.x)) & -u_input.a) | u_input.a, vec2<i32>(_wgslsmith_div_i32(u_input.a.x, _wgslsmith_add_i32(u_input.a.x, u_input.a.x)), _wgslsmith_clamp_i32(u_input.a.x, u_input.a.x, u_input.a.x) << (_wgslsmith_mult_u32(1u, 42521u) % 32u))), vec4<i32>(-1i) * -vec4<i32>(-65430i, -u_input.a.x, -43283i, abs(0i)), var_1.yz);
            }
        }
        default: {
            for (; any(select(vec4<bool>(global0.x, all(global0.zz), all(vec4<bool>(global0.x, true, false, global0.x)), all(select(vec4<bool>(global0.x, false, global0.x, global0.x), vec4<bool>(true, false, global0.x, false), global0.x))), select(vec4<bool>(any(global0.yx), true, true, any(vec3<bool>(true, false, global0.x))), select(vec4<bool>(true, global0.x, false, global0.x), !vec4<bool>(true, false, global0.x, false), !global0.x), true), !select(!vec4<bool>(global0.x, global0.x, global0.x, true), vec4<bool>(global0.x, false, false, global0.x), global0.x))); ) {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                global0 = vec3<bool>(true, false, false);
                global0 = vec3<bool>(global0.x, true, true);
                let var_0 = select(vec3<bool>((false & global0.x) & global0.x, !(!global0.x), true), vec3<bool>(global0.x, true && (any(vec3<bool>(global0.x, global0.x, true)) || false), any(!(!vec3<bool>(global0.x, global0.x, global0.x)))), true);
                var var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-363f));
                global0 = vec3<bool>(true, true, (var_0.x & true) | func_7(func_3(func_3(Struct_1(vec4<u32>(1u, 0u, 4294967295u, 45946u), vec2<i32>(u_input.a.x, -8800i), vec4<i32>(0i, 2012i, 1i, u_input.a.x), vec2<u32>(1u, 69784u)), Struct_2(vec4<f32>(969f, -1024f, -569f, 1000f), 64444u, Struct_1(vec4<u32>(9948u, 21753u, 15134u, 1u), vec2<i32>(i32(-2147483648), -92065i), vec4<i32>(2147483647i, i32(-2147483648), -50844i, u_input.a.x), vec2<u32>(4294967295u, 0u))), var_0.x).c, Struct_2(vec4<f32>(695f, -1664f, 305f, -160f), 22285u, Struct_1(vec4<u32>(4294967295u, 45580u, 0u, 4294967295u), u_input.a, vec4<i32>(u_input.a.x, 0i, u_input.a.x, u_input.a.x), vec2<u32>(8021u, 29688u))), var_0.x & false)).x);
            }
            var var_0 = 11551u;
            let var_1 = ~1u ^ firstTrailingBit(13626u);
            let var_2 = _wgslsmith_clamp_vec3_u32(vec3<u32>(max(~(~113383u), ~(0u << (1u % 32u))), _wgslsmith_clamp_u32(0u, reverseBits(var_1 << (8146u % 32u)), ~1u), 10840u), ~(~(~(~vec3<u32>(35592u, var_1, 22533u)))), vec3<u32>(min(firstTrailingBit(41214u), var_1), abs(1u), ~_wgslsmith_mult_u32(74006u, var_1)) >> (~_wgslsmith_add_vec3_u32(countOneBits(vec3<u32>(var_1, 55209u, var_1)), _wgslsmith_sub_vec3_u32(vec3<u32>(0u, 20973u, 10875u), vec3<u32>(var_1, var_1, 56597u))) % vec3<u32>(32u)));
            var_0 = ~_wgslsmith_mult_u32(var_1, abs((var_2.x << (24440u % 32u)) | _wgslsmith_mod_u32(4294967295u, 3490u)));
        }
    }
    let var_0 = vec4<f32>(_wgslsmith_f_op_f32(-1f), _wgslsmith_f_op_f32(round(-859f)), _wgslsmith_div_f32(_wgslsmith_f_op_f32(func_5(u_input.a)), _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1000f + 479f))))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-1933f * _wgslsmith_f_op_f32(exp2(func_4(0u, Struct_2(vec4<f32>(-1413f, -295f, 1227f, 2546f), 31667u, Struct_1(vec4<u32>(4294967295u, 27820u, 0u, 7128u), u_input.a, vec4<i32>(u_input.a.x, -5627i, u_input.a.x, u_input.a.x), vec2<u32>(0u, 21600u)))).a.x))), 1802f));
    let var_1 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(-var_0.zxx))));
    var var_2 = Struct_1(_wgslsmith_mult_vec4_u32(vec4<u32>(1u, 1u, 1u, 1u), vec4<u32>(func_6(countOneBits(vec2<u32>(1u, 0u)), 1000f, func_4(34362u, Struct_2(vec4<f32>(var_0.x, 453f, var_0.x, var_1.x), 30521u, Struct_1(vec4<u32>(96816u, 2875u, 57037u, 38417u), vec2<i32>(0i, u_input.a.x), vec4<i32>(0i, i32(-2147483648), u_input.a.x, -33819i), vec2<u32>(1u, 4294967295u)))), Struct_1(vec4<u32>(4294967295u, 4294967295u, 0u, 100831u), u_input.a, vec4<i32>(0i, 0i, u_input.a.x, 20912i), vec2<u32>(70942u, 20774u))).x, 0u, ~0u, select(25198u, ~1u, true))), u_input.a, _wgslsmith_mod_vec4_i32(min(func_3(Struct_1(vec4<u32>(1376u, 58035u, 51845u, 1u), u_input.a, vec4<i32>(u_input.a.x, 3584i, -28760i, u_input.a.x), vec2<u32>(93119u, 69423u)), func_4(39346u, Struct_2(var_0, 83271u, Struct_1(vec4<u32>(4294967295u, 41271u, 75142u, 24254u), u_input.a, vec4<i32>(u_input.a.x, -27023i, u_input.a.x, 20753i), vec2<u32>(0u, 4294967295u)))), false).c.c, ~abs(vec4<i32>(u_input.a.x, u_input.a.x, u_input.a.x, u_input.a.x))), vec4<i32>(u_input.a.x, ~firstTrailingBit(u_input.a.x), -_wgslsmith_dot_vec3_i32(vec3<i32>(u_input.a.x, u_input.a.x, i32(-2147483648)), vec3<i32>(0i, u_input.a.x, 0i)), _wgslsmith_sub_i32(~u_input.a.x, u_input.a.x ^ -1i))), ~vec2<u32>(1u, 1u));
    return Struct_1(vec4<u32>(1u, firstLeadingBit(var_2.d.x >> (36865u % 32u)), 4294967295u, _wgslsmith_add_u32(var_2.d.x, var_2.a.x)), ~vec2<i32>(~_wgslsmith_div_i32(25217i, u_input.a.x), 2147483647i), firstLeadingBit(~_wgslsmith_clamp_vec4_i32(max(vec4<i32>(var_2.c.x, u_input.a.x, 38850i, 3540i), vec4<i32>(-1i, var_2.c.x, u_input.a.x, -38229i)), firstLeadingBit(vec4<i32>(-44181i, u_input.a.x, var_2.c.x, -1i)), _wgslsmith_sub_vec4_i32(var_2.c, var_2.c))), vec2<u32>(7817u, func_6(_wgslsmith_add_vec2_u32(~vec2<u32>(var_2.a.x, 86815u), var_2.d), _wgslsmith_f_op_f32(ceil(var_0.x)), Struct_2(vec4<f32>(-250f, var_0.x, 1079f, 1000f), 22301u, func_3(Struct_1(vec4<u32>(var_2.d.x, 4294967295u, 0u, var_2.d.x), u_input.a, vec4<i32>(1i, var_2.c.x, var_2.c.x, var_2.c.x), vec2<u32>(4294967295u, 1u)), Struct_2(vec4<f32>(var_1.x, var_1.x, 927f, var_0.x), 4294967295u, Struct_1(vec4<u32>(1u, 69230u, 28829u, var_2.a.x), vec2<i32>(34590i, 0i), var_2.c, vec2<u32>(var_2.d.x, var_2.a.x))), false).c), func_4(var_2.a.x >> (9612u % 32u), func_4(var_2.a.x, Struct_2(var_0, 14327u, Struct_1(vec4<u32>(44780u, var_2.a.x, 72794u, var_2.a.x), var_2.b, vec4<i32>(var_2.c.x, u_input.a.x, u_input.a.x, i32(-2147483648)), vec2<u32>(64626u, var_2.a.x))))).c).x));
}

fn func_9(arg_0: Struct_1, arg_1: u32) -> bool {
    if (any(vec3<bool>(u_input.a.x > ~(arg_0.b.x | arg_0.c.x), arg_0.c.x > firstLeadingBit(-15392i), global0.x))) {
        let var_0 = firstLeadingBit(u_input.a.x);
        var var_1 = func_3(arg_0, Struct_2(_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(f32(-1f) * -831f), _wgslsmith_f_op_f32(f32(-1f) * -291f), _wgslsmith_f_op_f32(-1571f), _wgslsmith_f_op_f32(-665f))), abs(_wgslsmith_mult_u32(arg_0.d.x, ~45341u)), arg_0), func_7(Struct_2(vec4<f32>(_wgslsmith_f_op_f32(406f - -900f), _wgslsmith_f_op_f32(-1144f), _wgslsmith_f_op_f32(step(2887f, 1729f)), _wgslsmith_f_op_f32(-1514f)), _wgslsmith_clamp_u32(arg_0.d.x, arg_0.d.x, 4294967295u), func_4(_wgslsmith_mod_u32(arg_1, 1u), func_3(arg_0, Struct_2(vec4<f32>(1000f, 1291f, -253f, 506f), arg_0.a.x, arg_0), global0.x)).c)).x);
        loop {
            if (LOOP_COUNTERS[9u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
            var var_2 = var_0;
            let var_3 = Struct_2(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(var_1.a - vec4<f32>(303f, -439f, -668f, var_1.a.x)) - _wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(vec4<f32>(-557f, var_1.a.x, var_1.a.x, -437f) * vec4<f32>(var_1.a.x, var_1.a.x, 1482f, -1000f)))))), arg_1, arg_0);
            return global0.x || true;
        }
        global0 = func_7(func_4(~arg_1, Struct_2(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(var_1.a - vec4<f32>(var_1.a.x, -410f, var_1.a.x, -766f)) + var_1.a), _wgslsmith_clamp_u32(~var_1.b, ~1u, _wgslsmith_add_u32(35408u, 26810u)), func_3(Struct_1(vec4<u32>(0u, arg_0.a.x, arg_1, 69148u), vec2<i32>(var_1.c.b.x, var_0), vec4<i32>(-41269i, 13898i, -10092i, arg_0.c.x), arg_0.a.zw), func_3(Struct_1(var_1.c.a, arg_0.b, arg_0.c, var_1.c.a.wz), Struct_2(var_1.a, 23057u, Struct_1(vec4<u32>(var_1.c.a.x, arg_0.d.x, 4294967295u, var_1.c.a.x), arg_0.c.wy, arg_0.c, var_1.c.d)), false), false).c)));
        loop {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
            global0 = !vec3<bool>(global0.x, global0.x || any(vec4<bool>(global0.x, global0.x, global0.x, false)), !all(select(global0.xz, vec2<bool>(global0.x, global0.x), true)));
            global0 = !select(vec3<bool>(global0.x, i32(-2147483648) <= var_0, !(arg_1 != 0u)), !(!vec3<bool>(global0.x, false, true)), !(!vec3<bool>(false, global0.x, global0.x)));
            break;
        }
    }
    let var_0 = 15374u;
    switch (i32(-1i) * -18231i) {
        case -51572i: {
        }
        default: {
        }
    }
    loop {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        switch (_wgslsmith_div_i32(func_2().c.x, countOneBits(_wgslsmith_clamp_i32(reverseBits(countOneBits(u_input.a.x)), -1i, _wgslsmith_mod_i32(_wgslsmith_dot_vec2_i32(u_input.a, vec2<i32>(arg_0.c.x, -34728i)), -8475i))))) {
            case -5570i: {
                break;
            }
            case 26639i: {
                return (~arg_1 >> (func_4(_wgslsmith_mult_u32(29544u ^ var_0, _wgslsmith_dot_vec4_u32(arg_0.a, vec4<u32>(var_0, arg_1, var_0, 0u))), func_4(~0u, Struct_2(vec4<f32>(-826f, -126f, 1000f, -311f), 54219u, arg_0))).c.a.x % 32u)) != func_3(Struct_1(arg_0.a << (arg_0.a % vec4<u32>(32u)), arg_0.c.yy, select(vec4<i32>(u_input.a.x, -6353i, 15495i, 1i), _wgslsmith_div_vec4_i32(arg_0.c, vec4<i32>(10675i, 1i, arg_0.c.x, -54996i)), !vec4<bool>(global0.x, global0.x, true, global0.x)), _wgslsmith_mod_vec2_u32(arg_0.a.zz, _wgslsmith_clamp_vec2_u32(arg_0.a.yy, arg_0.a.zx, arg_0.a.ww))), Struct_2(vec4<f32>(_wgslsmith_f_op_f32(1000f + -1111f), 256f, _wgslsmith_f_op_f32(f32(-1f) * -730f), _wgslsmith_f_op_f32(-1041f)), arg_0.a.x & countOneBits(1u), Struct_1(func_2().a, select(arg_0.b, u_input.a, global0.x), vec4<i32>(u_input.a.x, -30387i, -16988i, u_input.a.x), vec2<u32>(var_0, arg_1))), func_7(Struct_2(vec4<f32>(-763f, 1366f, -1700f, -820f), arg_0.d.x, Struct_1(arg_0.a, u_input.a, vec4<i32>(u_input.a.x, u_input.a.x, arg_0.b.x, u_input.a.x), arg_0.a.wy))).x).c.d.x;
            }
            default: {
                global0 = !vec3<bool>(true, global0.x, global0.x);
                global0 = select(!vec3<bool>(_wgslsmith_f_op_f32(select(-768f, 1209f, false)) != _wgslsmith_f_op_f32(floor(1753f)), any(func_7(Struct_2(vec4<f32>(1043f, -348f, -1086f, -1000f), arg_0.a.x, arg_0))), all(select(vec3<bool>(global0.x, global0.x, true), vec3<bool>(true, global0.x, true), vec3<bool>(false, global0.x, global0.x)))), vec3<bool>(global0.x, select(false, any(!vec4<bool>(true, global0.x, false, global0.x)), !global0.x), any(select(vec3<bool>(true, false, false), vec3<bool>(false, global0.x, global0.x), any(vec4<bool>(false, global0.x, global0.x, true))))), select(vec3<bool>(false, !all(vec4<bool>(false, true, global0.x, true)), global0.x), vec3<bool>(_wgslsmith_dot_vec3_u32(arg_0.a.yzw, arg_0.a.zzy) == _wgslsmith_mod_u32(1u, var_0), false, !global0.x), all(vec2<bool>(global0.x, 0u == var_0))));
            }
        }
        switch (-24692i) {
            case -16335i: {
                continue;
            }
            default: {
            }
        }
        loop {
            if (LOOP_COUNTERS[12u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
            var var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(-155f))));
        }
    }
    global0 = !vec3<bool>(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(floor(-542f)))) == 1273f, true, true);
    return global0.x;
}

fn func_1() -> bool {
    loop {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        for (var var_0 = -1733i; func_9(func_2(), ~_wgslsmith_div_u32(_wgslsmith_dot_vec3_u32(vec3<u32>(0u, 0u, 106572u), vec3<u32>(0u, 4294967295u, 12611u)), ~_wgslsmith_clamp_u32(28047u, 4294967295u, 1u))); var_0 += 1i) {
            if (LOOP_COUNTERS[14u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
            var var_1 = func_8(_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(-func_3(Struct_1(vec4<u32>(0u, 1u, 44225u, 4294967295u), vec2<i32>(i32(-2147483648), u_input.a.x), vec4<i32>(u_input.a.x, u_input.a.x, 0i, u_input.a.x), vec2<u32>(18776u, 0u)), Struct_2(vec4<f32>(-120f, 368f, 1147f, 1000f), 34808u, Struct_1(vec4<u32>(1u, 0u, 4294967295u, 4294967295u), vec2<i32>(u_input.a.x, -1i), vec4<i32>(-24811i, 2147483647i, 2147483647i, u_input.a.x), vec2<u32>(10616u, 8502u))), false).a.x), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(1000f * -586f) + _wgslsmith_f_op_f32(-229f)), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(1000f * -2108f))), _wgslsmith_f_op_f32(-1f))), func_4(5814u, func_4(1u, func_3(func_3(Struct_1(vec4<u32>(39763u, 16715u, 11617u, 13792u), u_input.a, vec4<i32>(29833i, -49815i, u_input.a.x, u_input.a.x), vec2<u32>(62553u, 18357u)), Struct_2(vec4<f32>(201f, -283f, -1000f, 1148f), 1u, Struct_1(vec4<u32>(15843u, 1u, 4294967295u, 1u), u_input.a, vec4<i32>(u_input.a.x, -34059i, i32(-2147483648), 56484i), vec2<u32>(0u, 100497u))), global0.x).c, Struct_2(vec4<f32>(1011f, -269f, 889f, -1000f), 94084u, Struct_1(vec4<u32>(4294967295u, 0u, 11734u, 15723u), vec2<i32>(u_input.a.x, 0i), vec4<i32>(u_input.a.x, 1i, u_input.a.x, u_input.a.x), vec2<u32>(15923u, 59321u))), true))), Struct_1(~(~_wgslsmith_mod_vec4_u32(vec4<u32>(0u, 16047u, 4294967295u, 34222u), vec4<u32>(68663u, 4294967295u, 4294967295u, 1u))), _wgslsmith_div_vec2_i32(u_input.a, countOneBits(vec2<i32>(u_input.a.x, -10910i))), _wgslsmith_clamp_vec4_i32(vec4<i32>(6582i, u_input.a.x, u_input.a.x, i32(-2147483648)) ^ -vec4<i32>(i32(-2147483648), 0i, -5311i, u_input.a.x), _wgslsmith_add_vec4_i32(firstTrailingBit(vec4<i32>(u_input.a.x, 2147483647i, u_input.a.x, 30634i)), -vec4<i32>(16325i, u_input.a.x, 0i, 30225i)), func_2().c), ~vec2<u32>(77610u, ~14103u)));
            let var_2 = max(func_4(90711u, func_3(func_2(), Struct_2(_wgslsmith_f_op_vec4_f32(floor(vec4<f32>(-2485f, 1745f, -1002f, 1846f))), 1u, Struct_1(vec4<u32>(0u, 32985u, 0u, 2986u), u_input.a, vec4<i32>(u_input.a.x, 43575i, u_input.a.x, -1i), vec2<u32>(13630u, 4628u))), !(global0.x && global0.x))).c.d.x, 4294967295u & (4294967295u & func_4(max(19077u, 4294967295u), func_3(Struct_1(vec4<u32>(0u, 4294967295u, 4294967295u, 0u), u_input.a, vec4<i32>(1i, 36415i, -1i, u_input.a.x), vec2<u32>(13747u, 1445u)), Struct_2(vec4<f32>(1764f, -640f, 248f, -1000f), 37002u, Struct_1(vec4<u32>(36226u, 0u, 28175u, 31480u), vec2<i32>(u_input.a.x, u_input.a.x), vec4<i32>(u_input.a.x, u_input.a.x, 14544i, u_input.a.x), vec2<u32>(13312u, 0u))), global0.x)).c.d.x));
            let var_3 = ~(~(~(~(~vec2<u32>(56147u, 4294967295u)))));
        }
        var var_0 = 2147483647i;
    }
    loop {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
        for (var var_0 = 6982i; true && !global0.x; var_0 = -1i) {
            if (LOOP_COUNTERS[16u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
            var var_1 = 0u;
        }
    }
    var var_0 = func_3(Struct_1(func_4(min(~110492u, 1u), Struct_2(_wgslsmith_f_op_vec4_f32(select(vec4<f32>(488f, 2021f, -504f, 637f), vec4<f32>(595f, 882f, -1535f, -183f), global0.x)), 1u, Struct_1(vec4<u32>(61742u, 13546u, 6280u, 24306u), u_input.a, vec4<i32>(5624i, 8675i, 19311i, u_input.a.x), vec2<u32>(0u, 0u)))).c.a, vec2<i32>(2147483647i, _wgslsmith_add_i32(-1i, u_input.a.x)), vec4<i32>(firstTrailingBit(-1i), -_wgslsmith_mod_i32(u_input.a.x, -1i), u_input.a.x, 2147483647i), vec2<u32>(5752u, ~35792u)), func_4(0u, func_3(func_2(), func_4(firstTrailingBit(12569u), func_4(28863u, Struct_2(vec4<f32>(2169f, 760f, -1434f, 1039f), 4294967295u, Struct_1(vec4<u32>(4294967295u, 1u, 4294967295u, 0u), u_input.a, vec4<i32>(-1i, -19093i, u_input.a.x, 27173i), vec2<u32>(35386u, 1u))))), any(vec3<bool>(false, global0.x, true)))), !(-u_input.a.x >= max(-38171i ^ u_input.a.x, u_input.a.x)));
    switch (select(min(2147483647i, _wgslsmith_dot_vec2_i32(~(-vec2<i32>(u_input.a.x, var_0.c.c.x)), -_wgslsmith_sub_vec2_i32(vec2<i32>(u_input.a.x, u_input.a.x), u_input.a))), i32(-1i) * -u_input.a.x, var_0.c.a.x <= var_0.c.d.x)) {
        case i32(-2147483648): {
        }
        case -44274i: {
        }
        case -17633i: {
            var var_1 = Struct_1(vec4<u32>(_wgslsmith_mod_u32(func_2().d.x | 1u, var_0.c.d.x), 73220u, ~var_0.b, ~var_0.c.a.x), -var_0.c.b, var_0.c.c, reverseBits(_wgslsmith_mod_vec2_u32(~func_2().d, ~(~vec2<u32>(0u, var_0.c.a.x)))));
            var_1 = var_0.c;
            var var_2 = func_4(var_1.d.x, func_3(Struct_1(~vec4<u32>(var_0.c.d.x, var_1.d.x, 36329u, 1u) & (vec4<u32>(15485u, 7844u, var_1.d.x, var_1.d.x) ^ vec4<u32>(var_1.d.x, 0u, var_0.c.a.x, var_1.a.x)), vec2<i32>(u_input.a.x, _wgslsmith_sub_i32(57064i, u_input.a.x)), ~(-var_1.c), _wgslsmith_mult_vec2_u32(vec2<u32>(var_0.c.a.x, 0u) | var_1.a.xy, ~var_0.c.a.yw)), Struct_2(_wgslsmith_f_op_vec4_f32(exp2(vec4<f32>(var_0.a.x, -180f, var_0.a.x, 667f))), ~(var_1.d.x | var_0.c.d.x), var_0.c), any(!vec3<bool>(true, global0.x, true)))).c;
        }
        default: {
            loop {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                let var_1 = var_0.c.a.ywy;
                var_0 = Struct_2(vec4<f32>(_wgslsmith_f_op_f32(trunc(-1026f)), -1000f, _wgslsmith_f_op_f32(func_5(vec2<i32>(~37058i, firstLeadingBit(-32968i)))), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -836f) + -1619f)))), ~func_2().a.x, var_0.c);
                let var_2 = firstLeadingBit(abs(u_input.a.x));
                var_0 = func_3(var_0.c, func_3(func_2(), Struct_2(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(select(vec4<f32>(-406f, -267f, -1874f, -254f), vec4<f32>(-684f, var_0.a.x, var_0.a.x, var_0.a.x), vec4<bool>(global0.x, global0.x, true, global0.x))) * _wgslsmith_f_op_vec4_f32(vec4<f32>(-1780f, 514f, 429f, var_0.a.x) - vec4<f32>(745f, var_0.a.x, -295f, var_0.a.x))), ~5743u, func_4(_wgslsmith_mult_u32(0u, var_0.b), Struct_2(var_0.a, 22542u, var_0.c)).c), global0.x), !global0.x);
            }
            switch (firstTrailingBit(-1i) << (~0u % 32u)) {
                case 0i: {
                    var var_1 = global0.x;
                    var var_2 = all(select(select(!vec3<bool>(global0.x, global0.x, true), !select(vec3<bool>(true, false, global0.x), vec3<bool>(false, global0.x, false), global0.x), global0.x), !select(vec3<bool>(global0.x, false, global0.x), vec3<bool>(false, false, true), global0.x), vec3<bool>(true, true, true)));
                    var var_3 = Struct_1(var_0.c.a, var_0.c.b, var_0.c.c, ~vec2<u32>(7522u ^ var_0.b, 1u));
                    var_2 = global0.x;
                    let var_4 = var_0.c;
                }
                default: {
                }
            }
            let var_1 = true;
            if (select(true, true, func_9(Struct_1(~(~var_0.c.a), -_wgslsmith_mult_vec2_i32(u_input.a, u_input.a), ~vec4<i32>(1i, var_0.c.b.x, u_input.a.x, u_input.a.x), select(vec2<u32>(var_0.b, var_0.c.a.x), var_0.c.d, global0.x) ^ abs(vec2<u32>(39297u, var_0.b))), ~var_0.c.d.x))) {
                return false;
            }
            var var_2 = Struct_2(var_0.a, 97691u, Struct_1(~(vec4<u32>(var_0.c.a.x, var_0.b, var_0.b, var_0.b) | ~vec4<u32>(var_0.c.d.x, 0u, 109731u, 45584u)), firstTrailingBit(firstLeadingBit(select(u_input.a, vec2<i32>(u_input.a.x, -1i), var_1))), var_0.c.c, ~(~var_0.c.d & _wgslsmith_clamp_vec2_u32(vec2<u32>(var_0.c.a.x, var_0.c.a.x), var_0.c.d, var_0.c.d))));
        }
    }
    var var_1 = max(_wgslsmith_mod_vec2_u32(var_0.c.d, var_0.c.d), ~(~abs(var_0.c.a.wy >> (vec2<u32>(var_0.c.d.x, var_0.c.a.x) % vec2<u32>(32u)))));
    return all(!func_7(Struct_2(var_0.a, var_1.x, Struct_1(vec4<u32>(48609u, 1u, var_1.x, var_0.c.a.x), vec2<i32>(-31576i, 1i), vec4<i32>(2990i, var_0.c.c.x, u_input.a.x, 0i), var_0.c.a.zx))));
}

@compute
@workgroup_size(1)
fn main() {
    if (!func_1()) {
        var var_0 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(ceil(490f)), 663f, _wgslsmith_f_op_f32(f32(-1f) * -689f))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(108f, 457f, -1000f)) - _wgslsmith_f_op_vec3_f32(-vec3<f32>(-227f, 1422f, 984f)))), true)) + _wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(-540f, -103f, -912f) * vec3<f32>(-230f, 748f, 1194f))), _wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(-vec3<f32>(1246f, -303f, -713f)))))));
        var var_1 = func_4(~countOneBits(select(~4294967295u, _wgslsmith_add_u32(4294967295u, 0u), global0.x)), func_3(func_2(), Struct_2(_wgslsmith_f_op_vec4_f32(-vec4<f32>(var_0.x, var_0.x, var_0.x, var_0.x)), 96216u, func_4(0u, func_4(58428u, Struct_2(vec4<f32>(1362f, var_0.x, 2074f, 394f), 2065u, Struct_1(vec4<u32>(52655u, 32368u, 0u, 1u), vec2<i32>(u_input.a.x, u_input.a.x), vec4<i32>(11153i, u_input.a.x, -14732i, 8322i), vec2<u32>(0u, 25889u))))).c), func_7(func_3(func_2(), Struct_2(vec4<f32>(702f, -1118f, var_0.x, var_0.x), 21250u, Struct_1(vec4<u32>(9851u, 30478u, 25404u, 10608u), vec2<i32>(2147483647i, u_input.a.x), vec4<i32>(u_input.a.x, u_input.a.x, 0i, u_input.a.x), vec2<u32>(0u, 39520u))), false)).x)).c;
        switch (~_wgslsmith_dot_vec4_i32(vec4<i32>(i32(-1i) * -18978i, u_input.a.x, _wgslsmith_dot_vec4_i32(vec4<i32>(var_1.c.x, 0i, -1i, -1i), vec4<i32>(-38530i, var_1.b.x, -26631i, -20140i)), 2147483647i) | _wgslsmith_clamp_vec4_i32(vec4<i32>(8558i, i32(-2147483648), u_input.a.x, 13871i) | vec4<i32>(var_1.b.x, -15552i, 5054i, 1i), var_1.c, vec4<i32>(6613i, -980i, u_input.a.x, 0i)), var_1.c)) {
            case 7603i: {
                var var_2 = var_1.b.x >= -63422i;
                let var_3 = func_2();
                var var_4 = func_3(func_4(countOneBits(firstLeadingBit(var_1.a.x)), Struct_2(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(select(vec4<f32>(var_0.x, 739f, -483f, var_0.x), vec4<f32>(var_0.x, var_0.x, -496f, var_0.x), vec4<bool>(false, global0.x, false, false)))), ~(~85042u), var_3)).c, func_4(~min(0u, var_3.a.x), func_4(93039u, func_4(var_3.a.x ^ var_3.a.x, func_4(var_3.a.x, Struct_2(vec4<f32>(var_0.x, 1158f, -1017f, -130f), 0u, Struct_1(vec4<u32>(73515u, 73990u, var_1.d.x, var_1.a.x), u_input.a, vec4<i32>(19448i, 22822i, u_input.a.x, u_input.a.x), var_3.a.zz)))))), true);
            }
            default: {
                var_0 = _wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(select(vec3<f32>(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(f32(-1f) * -887f), var_0.x)), _wgslsmith_f_op_f32(1453f * var_0.x), _wgslsmith_f_op_f32(var_0.x - _wgslsmith_div_f32(-849f, var_0.x))), _wgslsmith_f_op_vec3_f32(floor(vec3<f32>(_wgslsmith_f_op_f32(trunc(var_0.x)), _wgslsmith_f_op_f32(-527f + var_0.x), var_0.x))), !vec3<bool>(false & global0.x, global0.x && false, select(global0.x, global0.x, true)))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(var_0.x, var_0.x, -1000f) + _wgslsmith_f_op_vec3_f32(abs(vec3<f32>(var_0.x, 462f, -1187f)))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(1053f, var_0.x, -1068f)) - vec3<f32>(var_0.x, 338f, var_0.x))))));
                var_1 = Struct_1(vec4<u32>(var_1.a.x << (_wgslsmith_dot_vec2_u32(vec2<u32>(1u, var_1.a.x) >> (vec2<u32>(65606u, 47153u) % vec2<u32>(32u)), vec2<u32>(1u, var_1.a.x)) % 32u), 27267u, func_6(var_1.d, _wgslsmith_f_op_f32(min(var_0.x, _wgslsmith_f_op_f32(f32(-1f) * -1000f))), Struct_2(_wgslsmith_div_vec4_f32(vec4<f32>(var_0.x, -576f, var_0.x, 1253f), vec4<f32>(1687f, 213f, var_0.x, -1576f)), ~47824u, func_4(4294967295u, Struct_2(vec4<f32>(-931f, var_0.x, -2062f, var_0.x), 31314u, Struct_1(vec4<u32>(4294967295u, 1u, 0u, var_1.d.x), vec2<i32>(var_1.c.x, var_1.b.x), var_1.c, var_1.d))).c), func_2()).x, ~(~var_1.d.x)), ~vec2<i32>(-countOneBits(-31140i), abs(var_1.c.x)), abs(_wgslsmith_sub_vec4_i32(var_1.c, vec4<i32>(max(-26142i, 1460i), 23164i, u_input.a.x, i32(-1i) * -1i))), ~var_1.a.ww);
                global0 = vec3<bool>(false, !func_1(), !global0.x);
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        var var_0 = Struct_2(_wgslsmith_f_op_vec4_f32(-func_3(func_2(), func_3(func_4(1u, Struct_2(vec4<f32>(-1197f, 1421f, -1869f, -738f), 4294967295u, Struct_1(vec4<u32>(4294967295u, 4294967295u, 0u, 4294967295u), u_input.a, vec4<i32>(i32(-2147483648), 30970i, u_input.a.x, -89i), vec2<u32>(0u, 74095u)))).c, func_4(1099u, Struct_2(vec4<f32>(-238f, -1399f, -534f, 379f), 36509u, Struct_1(vec4<u32>(4294967295u, 31521u, 7105u, 61441u), u_input.a, vec4<i32>(-30140i, u_input.a.x, u_input.a.x, 10547i), vec2<u32>(1u, 4294967295u)))), !global0.x), false).a), 34008u, func_4(_wgslsmith_clamp_u32(firstLeadingBit(_wgslsmith_mod_u32(28979u, 73251u)), _wgslsmith_add_u32(1u, reverseBits(1u)), 60871u), Struct_2(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(abs(vec4<f32>(114f, 312f, 1000f, 936f)))), select(~0u, 1u, false), Struct_1(vec4<u32>(0u, 36127u, 3944u, 24580u), u_input.a, firstLeadingBit(vec4<i32>(26674i, 0i, u_input.a.x, u_input.a.x)), ~vec2<u32>(1u, 18877u)))).c);
    }
    var var_0 = !vec4<bool>(any(vec3<bool>(any(vec3<bool>(true, false, false)), true, !global0.x)), global0.x, select(global0.x, max(2495i, u_input.a.x) >= ~(-19101i), global0.x), func_7(Struct_2(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-349f, -364f, -1213f, -1000f)), 33244u, Struct_1(vec4<u32>(4294967295u, 61158u, 33945u, 24840u), u_input.a, vec4<i32>(44430i, u_input.a.x, u_input.a.x, u_input.a.x), vec2<u32>(1u, 1199u)))).x);
    switch (i32(-2147483648)) {
        case 2147483647i: {
            let var_1 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-vec3<f32>(371f, 527f, -197f)), _wgslsmith_f_op_vec3_f32(vec3<f32>(-469f, -703f, 1460f) - vec3<f32>(218f, -2034f, -970f)), !var_0.zyy))))));
            var var_2 = 4294967295u | ~_wgslsmith_div_u32(~1u, _wgslsmith_div_u32(~1u, func_6(vec2<u32>(37540u, 3265u), var_1.x, Struct_2(vec4<f32>(841f, var_1.x, var_1.x, var_1.x), 31281u, Struct_1(vec4<u32>(4294967295u, 1u, 24270u, 13280u), u_input.a, vec4<i32>(u_input.a.x, u_input.a.x, 0i, u_input.a.x), vec2<u32>(4294967295u, 15918u))), Struct_1(vec4<u32>(9220u, 1u, 133771u, 0u), u_input.a, vec4<i32>(u_input.a.x, 0i, 1i, u_input.a.x), vec2<u32>(20157u, 62759u))).x));
            let var_3 = 53i;
            if (var_0.x) {
                global0 = vec3<bool>(true, func_1(), !any(!(!vec4<bool>(true, var_0.x, true, var_0.x))));
                var_0 = select(select(vec4<bool>(true, global0.x, global0.x, false), vec4<bool>(true, all(var_0.zyx) & global0.x, var_0.x, all(func_7(Struct_2(vec4<f32>(var_1.x, var_1.x, 1788f, 1586f), 16459u, Struct_1(vec4<u32>(7606u, 11997u, 12125u, 9198u), vec2<i32>(u_input.a.x, 2147483647i), vec4<i32>(u_input.a.x, 1i, u_input.a.x, 0i), vec2<u32>(56405u, 0u)))).xz)), !vec4<bool>(any(vec3<bool>(global0.x, var_0.x, global0.x)), true, true, true)), !(!(!select(vec4<bool>(global0.x, true, var_0.x, var_0.x), vec4<bool>(global0.x, false, global0.x, true), global0.x))), var_0.x);
                let var_4 = -u_input.a.x;
            }
        }
        default: {
            let var_1 = firstLeadingBit(_wgslsmith_add_vec4_u32(_wgslsmith_add_vec4_u32(vec4<u32>(1u, 0u, 0u, 46317u), vec4<u32>(0u, 10691u, 70034u, 0u)) << (select(vec4<u32>(1u, 53349u, 1u, 56501u), vec4<u32>(1u, 64539u, 0u, 1028u), true) % vec4<u32>(32u)), func_3(Struct_1(vec4<u32>(0u, 6806u, 19978u, 1u), u_input.a, vec4<i32>(u_input.a.x, u_input.a.x, u_input.a.x, -1i), vec2<u32>(1u, 1u)), Struct_2(vec4<f32>(-2030f, 1000f, 189f, -1913f), 4294967295u, Struct_1(vec4<u32>(109756u, 4294967295u, 4294967295u, 0u), u_input.a, vec4<i32>(u_input.a.x, i32(-2147483648), 7192i, u_input.a.x), vec2<u32>(15780u, 1u))), var_0.x).c.a << (vec4<u32>(0u, 4294967295u, 0u, 1u) % vec4<u32>(32u)))) << (vec4<u32>(~_wgslsmith_dot_vec2_u32(~vec2<u32>(0u, 405u), _wgslsmith_div_vec2_u32(vec2<u32>(0u, 1u), vec2<u32>(547u, 52412u))), max(~(~8195u), 2707u), 1u, ~0u << (0u % 32u)) % vec4<u32>(32u));
        }
    }
    var var_1 = vec4<f32>(-146f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-func_4(~37954u, func_3(Struct_1(vec4<u32>(4294967295u, 47395u, 90365u, 4294967295u), vec2<i32>(u_input.a.x, i32(-2147483648)), vec4<i32>(i32(-2147483648), -26507i, u_input.a.x, u_input.a.x), vec2<u32>(41702u, 0u)), Struct_2(vec4<f32>(-670f, -188f, -105f, 504f), 26777u, Struct_1(vec4<u32>(4294967295u, 4294967295u, 0u, 0u), vec2<i32>(16881i, u_input.a.x), vec4<i32>(2147483647i, u_input.a.x, 9402i, u_input.a.x), vec2<u32>(0u, 1u))), global0.x)).a.x)), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(max(1f, _wgslsmith_f_op_f32(-1067f * -1231f))))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -366f))))));
    var var_2 = !global0.x;
    var var_3 = false;
    let x = u_input.a;
    s_output = StorageBuffer(vec4<i32>(countOneBits(_wgslsmith_sub_i32(u_input.a.x, countOneBits(2147483647i))), 2147483647i, u_input.a.x, u_input.a.x));
}

`;