export const input = [39,12,111,228,105,230,252,94,146,198,2,141,97,59,227,172,36,201,163,183,78,195,32,243,143,123,117,56,124,118,159,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [39,12,111,228,105,230,252,94,146,198,2,141,97,59,227,172,36,201,163,183,78,195,32,243,143,123,117,56,124,118,159,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[39,12,111,228,105,230,252,94,146,198,2,141,97,59,227,172,36,201,163,183,78,195,32,243,143,123,117,56,124,118,159,100]}
// Seed: 4756925588260420741

struct Struct_1 {
    a: vec3<f32>,
    b: vec4<u32>,
}

struct Struct_2 {
    a: Struct_1,
    b: vec3<bool>,
}

struct Struct_3 {
    a: u32,
    b: f32,
    c: Struct_2,
}

struct Struct_4 {
    a: vec3<f32>,
    b: Struct_1,
    c: Struct_3,
}

struct UniformBuffer {
    a: vec4<i32>,
    b: u32,
    c: u32,
}

struct StorageBuffer {
    a: vec3<i32>,
    b: vec4<f32>,
    c: vec2<f32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> LOOP_COUNTERS: array<u32, 15>;

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn func_6(arg_0: f32) -> i32 {
    var var_0 = -(vec3<i32>(u_input.a.x, min(u_input.a.x, u_input.a.x), -select(u_input.a.x, u_input.a.x, true)) | firstLeadingBit(vec3<i32>(-2857i, 2147483647i << (u_input.c % 32u), abs(14447i))));
    var var_1 = select(select(select(vec2<bool>(true, true), select(vec2<bool>(true, false), select(vec2<bool>(false, true), vec2<bool>(false, true), vec2<bool>(false, false)), false), select(vec2<bool>(true, true), select(vec2<bool>(true, false), vec2<bool>(false, false), vec2<bool>(false, true)), vec2<bool>(true, false))), vec2<bool>(any(select(vec3<bool>(false, false, false), vec3<bool>(false, true, false), vec3<bool>(true, false, false))), true), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-arg_0), _wgslsmith_f_op_f32(exp2(arg_0)))) < 1071f), vec2<bool>(false, true), false);
    var var_2 = all(vec2<bool>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_0 + arg_0) + 340f) != 545f, any(!select(vec3<bool>(false, var_1.x, true), vec3<bool>(var_1.x, false, false), vec3<bool>(true, false, var_1.x)))));
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        var_1 = vec2<bool>(!any(select(!vec2<bool>(false, var_1.x), select(vec2<bool>(var_1.x, false), vec2<bool>(var_1.x, false), var_1.x), false & var_1.x)), all(vec2<bool>(true, true)));
        let var_3 = Struct_3(~1u, _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(474f, 1243f)) + _wgslsmith_div_f32(arg_0, arg_0))))), Struct_2(Struct_1(_wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(-vec3<f32>(arg_0, arg_0, 1382f)))), _wgslsmith_add_vec4_u32(~vec4<u32>(u_input.c, u_input.b, 0u, u_input.b), _wgslsmith_sub_vec4_u32(vec4<u32>(40056u, u_input.b, 15325u, u_input.b), vec4<u32>(4294967295u, u_input.c, u_input.b, u_input.b)))), vec3<bool>(true, true, true)));
        break;
    }
    loop {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
    }
    return 8558i;
}

fn func_5(arg_0: Struct_2, arg_1: vec4<i32>, arg_2: i32) -> i32 {
    var var_0 = arg_0;
    loop {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        let var_1 = Struct_4(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(sign(var_0.a.a)))))), arg_0.a, Struct_3(arg_0.a.b.x, _wgslsmith_f_op_f32(-var_0.a.a.x), arg_0));
    }
    var_0 = Struct_2(arg_0.a, !vec3<bool>(any(vec2<bool>(false, var_0.b.x)), _wgslsmith_mult_i32(u_input.a.x, -1i) != ~arg_1.x, !any(arg_0.b.zy)));
    var var_1 = -func_6(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(var_0.a.a.x, 2248f)))));
    var_0 = arg_0;
    return -17244i;
}

fn func_7(arg_0: f32, arg_1: vec2<i32>) -> Struct_2 {
    for (var var_0 = -2955i; var_0 < -11584i; var_0 -= 1i) {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        continue;
    }
    var var_0 = ~(~countOneBits(abs(arg_1)));
    if (true) {
        var var_1 = _wgslsmith_clamp_u32(1u, u_input.c, u_input.c);
        for (var var_2 = -_wgslsmith_clamp_i32(_wgslsmith_mult_i32(arg_1.x, -1i), ((-50676i << (u_input.c % 32u)) << (1u % 32u)) & (~arg_1.x >> (u_input.b % 32u)), var_0.x); var_2 != -52304i; var_2 += 1i) {
            if (LOOP_COUNTERS[4u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        }
        var var_2 = ~(~(~vec4<u32>(1u, u_input.b & u_input.c, u_input.c, reverseBits(u_input.c))));
    }
    var_0 = vec2<i32>(func_5(Struct_2(Struct_1(_wgslsmith_f_op_vec3_f32(-vec3<f32>(arg_0, -738f, arg_0)), min(vec4<u32>(u_input.c, u_input.c, u_input.c, u_input.c), vec4<u32>(u_input.b, u_input.b, u_input.c, 1u))), select(vec3<bool>(false, false, false), select(vec3<bool>(false, false, true), vec3<bool>(false, true, false), vec3<bool>(true, true, false)), vec3<bool>(true, true, true))), u_input.a, _wgslsmith_dot_vec3_i32(vec3<i32>(min(var_0.x, 1i), ~var_0.x, _wgslsmith_mult_i32(19509i, arg_1.x)), _wgslsmith_add_vec3_i32(-vec3<i32>(i32(-2147483648), 20144i, u_input.a.x), vec3<i32>(arg_1.x, arg_1.x, var_0.x)))), 1i);
    var_0 = arg_1;
    return Struct_2(Struct_1(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(max(vec3<f32>(1736f, -251f, arg_0), vec3<f32>(arg_0, arg_0, 368f))) + vec3<f32>(-608f, -1216f, 168f))), select(~(vec4<u32>(u_input.b, u_input.b, 1u, 0u) << (vec4<u32>(u_input.c, u_input.c, u_input.c, u_input.b) % vec4<u32>(32u))), vec4<u32>(34200u, 1u, u_input.c >> (u_input.b % 32u), 75905u), true)), !vec3<bool>(true, true, select(true, true, any(vec4<bool>(false, false, true, false)))));
}

fn func_4(arg_0: u32, arg_1: Struct_3, arg_2: vec2<f32>) -> vec3<f32> {
    if (true) {
        let var_0 = Struct_3(firstTrailingBit(u_input.b) | ~(~(~arg_0)), 428f, func_7(arg_2.x, vec2<i32>(i32(-2147483648), _wgslsmith_clamp_i32(u_input.a.x, func_5(arg_1.c, u_input.a, u_input.a.x), u_input.a.x))));
        switch (_wgslsmith_dot_vec3_i32(u_input.a.wzw | ((u_input.a.zzx >> ((vec3<u32>(4294967295u, 4294967295u, var_0.c.a.b.x) | vec3<u32>(u_input.c, arg_1.c.a.b.x, arg_1.c.a.b.x)) % vec3<u32>(32u))) >> (vec3<u32>(1u, arg_1.a, ~10393u) % vec3<u32>(32u))), -_wgslsmith_add_vec3_i32(vec3<i32>(-1i) * -u_input.a.zwy, -vec3<i32>(1i, u_input.a.x, u_input.a.x)))) {
            case 2147483647i: {
                let var_1 = Struct_4(vec3<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(min(arg_2.x, _wgslsmith_f_op_f32(select(1000f, 669f, arg_1.c.b.x)))))), -952f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(326f)) + _wgslsmith_f_op_f32(-_wgslsmith_div_f32(var_0.b, arg_1.b)))), func_7(_wgslsmith_div_f32(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(var_0.c.a.a.x + arg_1.b))), _wgslsmith_f_op_f32(-var_0.c.a.a.x)), u_input.a.zw).a, Struct_3(var_0.c.a.b.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_1.b)), func_7(arg_2.x, min(u_input.a.xx, -u_input.a.ww))));
                let var_2 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(floor(_wgslsmith_div_f32(1000f, arg_2.x))), 527f, -795f) - _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(var_0.c.a.a * var_0.c.a.a), _wgslsmith_f_op_vec3_f32(vec3<f32>(var_0.c.a.a.x, var_0.b, -1000f) + var_1.a))))));
                var var_3 = func_7(_wgslsmith_div_f32(arg_2.x, _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1281f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(272f * -769f) + _wgslsmith_f_op_f32(-var_1.a.x)))), u_input.a.xx).a;
                let var_4 = (~(~_wgslsmith_dot_vec2_u32(var_0.c.a.b.zx, var_3.b.xz)) == (0u ^ ~_wgslsmith_dot_vec3_u32(vec3<u32>(15080u, 4294967295u, 4294967295u), vec3<u32>(var_1.c.c.a.b.x, var_3.b.x, arg_1.c.a.b.x)))) & any(vec3<bool>(true, false, arg_1.c.b.x && (var_0.c.b.x & true)));
                var var_5 = true;
            }
            case 2037i: {
            }
            case -50755i: {
                var var_1 = arg_2;
            }
            case 0i: {
                let var_1 = !(!(!any(var_0.c.b.zx)));
                var var_2 = vec3<bool>(!any(select(!vec4<bool>(false, var_1, var_0.c.b.x, false), vec4<bool>(var_1, true, true, var_0.c.b.x), !vec4<bool>(var_1, var_1, true, true))), true, u_input.a.x > u_input.a.x);
                var_2 = arg_1.c.b;
                var var_3 = 4499u == (u_input.b & ~min(func_7(-861f, u_input.a.xy).a.b.x, 0u));
            }
            default: {
                let var_1 = Struct_1(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(vec3<f32>(-587f, arg_1.c.a.a.x, 1069f) * vec3<f32>(-218f, var_0.b, 478f)))) * _wgslsmith_f_op_vec3_f32(-vec3<f32>(489f, _wgslsmith_f_op_f32(arg_2.x - arg_2.x), var_0.c.a.a.x))), vec4<u32>(_wgslsmith_sub_u32(_wgslsmith_dot_vec3_u32(var_0.c.a.b.xxy, vec3<u32>(10349u, 1u, 1u)), ~firstTrailingBit(u_input.c)), 1u, max(0u, u_input.c), ~_wgslsmith_sub_u32(~u_input.c, 1u)));
            }
        }
        let var_1 = ((~abs(vec4<u32>(1u, arg_0, 4294967295u, u_input.c)) << (max(_wgslsmith_mult_vec4_u32(vec4<u32>(40730u, 16392u, 0u, 1u), arg_1.c.a.b), var_0.c.a.b) % vec4<u32>(32u))) & _wgslsmith_clamp_vec4_u32(select(vec4<u32>(arg_0, arg_0, 21940u, arg_1.c.a.b.x), reverseBits(var_0.c.a.b), select(vec4<bool>(true, arg_1.c.b.x, arg_1.c.b.x, false), vec4<bool>(false, false, true, false), var_0.c.b.x)), ~_wgslsmith_clamp_vec4_u32(var_0.c.a.b, vec4<u32>(u_input.b, 1u, 0u, 4294967295u), vec4<u32>(49569u, var_0.a, 22790u, var_0.a)), _wgslsmith_div_vec4_u32(vec4<u32>(94149u, 1u, arg_0, var_0.c.a.b.x), ~vec4<u32>(var_0.c.a.b.x, arg_1.a, 9787u, u_input.c)))) ^ vec4<u32>(~_wgslsmith_div_u32(_wgslsmith_mod_u32(1u, var_0.a), 86061u), _wgslsmith_div_u32(abs(arg_1.c.a.b.x & 4294967295u), 22517u), _wgslsmith_dot_vec2_u32(var_0.c.a.b.ww, _wgslsmith_mod_vec2_u32(select(vec2<u32>(0u, u_input.c), var_0.c.a.b.zx, var_0.c.b.x), arg_1.c.a.b.yw)), 4294967295u);
    }
    let var_0 = 18165i;
    var var_1 = Struct_2(func_7(_wgslsmith_f_op_f32(arg_2.x - _wgslsmith_f_op_f32(-arg_2.x)), ~reverseBits(vec2<i32>(u_input.a.x, i32(-2147483648)))).a, vec3<bool>(any(!vec3<bool>(arg_1.c.b.x, arg_1.c.b.x, false)), arg_1.c.b.x, any(func_7(-465f, vec2<i32>(6990i, u_input.a.x)).b)));
    if (true) {
        if (all(vec4<bool>(true, !select(false, arg_1.c.b.x, true), false, true))) {
            var var_2 = var_1.a.b;
            var var_3 = func_7(_wgslsmith_f_op_f32(step(-1000f, -423f)), ~vec2<i32>(-(var_0 | i32(-2147483648)), 2147483647i));
            let var_4 = func_7(arg_2.x, -vec2<i32>(2147483647i, select(var_0, 0i, false)));
            var_1 = Struct_2(func_7(-1829f, abs(_wgslsmith_mod_vec2_i32(vec2<i32>(i32(-2147483648), i32(-2147483648)) & u_input.a.xz, _wgslsmith_mult_vec2_i32(vec2<i32>(var_0, u_input.a.x), u_input.a.xz)))).a, vec3<bool>(any(vec4<bool>(true, true, !var_1.b.x, true)), var_1.b.x, !(!var_1.b.x)));
        }
    }
    for (var var_2: i32; ; var_2 = 0i) {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        for (; ; ) {
            if (LOOP_COUNTERS[6u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        }
        continue;
    }
    return _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(var_1.a.a + _wgslsmith_f_op_vec3_f32(-vec3<f32>(arg_1.b, -137f, arg_1.c.a.a.x)))));
}

fn func_3() -> vec4<f32> {
    var var_0 = Struct_4(_wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(-218f, 303f, 1185f)))))), Struct_1(_wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(min(vec3<f32>(159f, -1466f, -358f), vec3<f32>(-527f, 907f, 453f))), _wgslsmith_f_op_vec3_f32(func_4(u_input.c, Struct_3(4294967295u, -666f, Struct_2(Struct_1(vec3<f32>(713f, -797f, 1226f), vec4<u32>(u_input.c, 54582u, u_input.b, 88937u)), vec3<bool>(false, true, true))), vec2<f32>(-283f, -1130f))))), _wgslsmith_mult_vec4_u32(vec4<u32>(49414u, _wgslsmith_mod_u32(u_input.c, 1u), _wgslsmith_add_u32(u_input.c, u_input.c), _wgslsmith_mod_u32(u_input.b, 42469u)), select(max(vec4<u32>(u_input.b, 0u, u_input.c, 4294967295u), vec4<u32>(u_input.c, u_input.b, 1u, 23110u)), countOneBits(vec4<u32>(38754u, u_input.c, 4294967295u, 1u)), true))), Struct_3(0u, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-1000f))) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -380f))), Struct_2(Struct_1(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-303f, -985f, -229f)), vec4<u32>(0u, 0u, u_input.c, 11630u)), select(vec3<bool>(true, true, true), vec3<bool>(true, true, true), true))));
    var_0 = Struct_4(vec3<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1000f + var_0.b.a.x)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(var_0.c.c.a.a.x)) * _wgslsmith_f_op_f32(-1000f))), 592f, 696f), var_0.c.c.a, Struct_3(1u, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_0.c.c.a.a.x))), func_7(459f, _wgslsmith_div_vec2_i32(vec2<i32>(u_input.a.x, u_input.a.x), _wgslsmith_mult_vec2_i32(u_input.a.yw, u_input.a.zz)))));
    let var_1 = 482f == _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(var_0.b.a.x + var_0.a.x)), var_0.b.a.x)) - var_0.c.b);
    let var_2 = u_input.a.x;
    let var_3 = _wgslsmith_div_f32(-2097f, _wgslsmith_f_op_f32(floor(-1318f)));
    return _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(var_3, _wgslsmith_f_op_f32(var_3 + _wgslsmith_f_op_f32(-682f + var_0.b.a.x)), var_0.a.x, 972f)), _wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(1000f))), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-var_0.a.x), _wgslsmith_f_op_f32(-var_3))), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(max(1000f, 192f)))), -424f) * _wgslsmith_f_op_vec4_f32(abs(_wgslsmith_f_op_vec4_f32(abs(_wgslsmith_f_op_vec4_f32(floor(vec4<f32>(var_0.c.b, 983f, 1182f, 695f)))))))));
}

fn func_2(arg_0: vec3<bool>) -> bool {
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        let var_0 = _wgslsmith_f_op_vec4_f32(func_3());
    }
    loop {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        loop {
            if (LOOP_COUNTERS[9u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
            var var_0 = ~(-41147i);
            break;
        }
        let var_0 = _wgslsmith_mod_i32(u_input.a.x, -2147483647i);
    }
    let var_0 = 4294967295u;
    if (func_7(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1000f)), u_input.a.xz >> (~(~vec2<u32>(0u, 73295u)) % vec2<u32>(32u))).b.x) {
        switch (min(u_input.a.x, select(u_input.a.x, _wgslsmith_add_i32(u_input.a.x, func_6(_wgslsmith_f_op_f32(step(-1367f, 2154f)))), arg_0.x))) {
            case 31121i: {
                var var_1 = ~16677u;
                var_1 = u_input.b;
                var_1 = 5220u | u_input.c;
            }
            default: {
                let var_1 = Struct_2(func_7(1419f, select(vec2<i32>(abs(34589i), 17627i), -vec2<i32>(u_input.a.x, u_input.a.x), any(select(arg_0.yx, vec2<bool>(false, arg_0.x), vec2<bool>(false, false))))).a, select(arg_0, !vec3<bool>(arg_0.x, true, !arg_0.x), !arg_0.x));
                let var_2 = select(_wgslsmith_div_i32(min(u_input.a.x, u_input.a.x ^ -21052i), u_input.a.x), 0i, any(!vec4<bool>(true, var_1.b.x, var_1.b.x, false)) || false) << (~_wgslsmith_dot_vec3_u32(func_7(var_1.a.a.x, select(u_input.a.zy, u_input.a.yy, arg_0.x)).a.b.yyy, vec3<u32>(abs(var_1.a.b.x), 18603u, 1u)) % 32u);
                var var_3 = !var_1.b.xx;
                let var_4 = Struct_4(var_1.a.a, Struct_1(_wgslsmith_f_op_vec3_f32(func_4(_wgslsmith_dot_vec3_u32(vec3<u32>(6639u, var_1.a.b.x, u_input.b), vec3<u32>(var_0, 1u, 4294967295u)), Struct_3(var_0, func_7(var_1.a.a.x, vec2<i32>(i32(-2147483648), 4370i)).a.a.x, Struct_2(var_1.a, var_1.b)), _wgslsmith_f_op_vec2_f32(-var_1.a.a.zx))), var_1.a.b), Struct_3(~_wgslsmith_dot_vec2_u32(var_1.a.b.xz, vec2<u32>(u_input.b, 11168u)) & (_wgslsmith_mod_u32(var_1.a.b.x, 0u) >> ((var_0 << (u_input.c % 32u)) % 32u)), _wgslsmith_f_op_vec3_f32(func_4(~_wgslsmith_clamp_u32(1179u, u_input.c, var_1.a.b.x), Struct_3(_wgslsmith_dot_vec3_u32(vec3<u32>(u_input.c, 0u, 20798u), vec3<u32>(u_input.c, var_0, 1u)), _wgslsmith_f_op_f32(-var_1.a.a.x), Struct_2(var_1.a, vec3<bool>(var_1.b.x, var_3.x, var_1.b.x))), _wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-227f, var_1.a.a.x)), var_1.a.a.zx)))).x, Struct_2(var_1.a, !var_1.b)));
                let var_5 = ~(~(~(~vec2<u32>(25756u, 26238u))));
            }
        }
        var var_1 = select(!select(vec4<bool>(true, true, true, true), !select(vec4<bool>(arg_0.x, false, false, true), vec4<bool>(true, arg_0.x, arg_0.x, false), false), arg_0.x), vec4<bool>(true, all(!(!arg_0)), select(true, !arg_0.x, _wgslsmith_sub_u32(var_0, var_0) < reverseBits(22937u)), all(arg_0.zy)), select(select(vec4<bool>(arg_0.x, arg_0.x && arg_0.x, true, u_input.a.x == -35118i), select(select(vec4<bool>(arg_0.x, arg_0.x, arg_0.x, true), vec4<bool>(arg_0.x, false, arg_0.x, true), vec4<bool>(arg_0.x, true, true, arg_0.x)), vec4<bool>(arg_0.x, arg_0.x, true, false), true), true), vec4<bool>(arg_0.x, arg_0.x, any(select(vec2<bool>(arg_0.x, arg_0.x), vec2<bool>(false, false), arg_0.xy)), u_input.a.x < ~0i), -(~u_input.a.x) < _wgslsmith_clamp_i32(u_input.a.x, u_input.a.x, 1i)));
        for (var var_2 = _wgslsmith_sub_i32(i32(-2147483648), _wgslsmith_div_i32(select(firstTrailingBit(1i), func_5(func_7(-787f, vec2<i32>(u_input.a.x, u_input.a.x)), _wgslsmith_add_vec4_i32(u_input.a, u_input.a), u_input.a.x), var_1.x), ~((u_input.a.x | u_input.a.x) >> (~47221u % 32u)))); arg_0.x; var_2 += 1i) {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        }
        loop {
            if (LOOP_COUNTERS[11u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
            break;
        }
        var var_2 = _wgslsmith_div_vec2_i32(firstTrailingBit(_wgslsmith_mod_vec2_i32(firstLeadingBit(vec2<i32>(0i, u_input.a.x)), -vec2<i32>(u_input.a.x, u_input.a.x)) | vec2<i32>(~u_input.a.x, u_input.a.x)), vec2<i32>(_wgslsmith_mult_i32(u_input.a.x, abs(~u_input.a.x)), 2147483647i));
    }
    if (!(!select(false, false, true))) {
        var var_1 = reverseBits(max(-u_input.a.x, _wgslsmith_dot_vec2_i32(vec2<i32>(u_input.a.x, u_input.a.x) << ((vec2<u32>(0u, 1u) | vec2<u32>(0u, var_0)) % vec2<u32>(32u)), -select(vec2<i32>(u_input.a.x, 2147483647i), vec2<i32>(-1i, u_input.a.x), arg_0.zz))));
        let var_2 = Struct_1(vec3<f32>(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(min(-793f, 1465f)))))), _wgslsmith_f_op_f32(select(645f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(-206f)) + _wgslsmith_f_op_f32(-225f - -1000f)), !arg_0.x)), _wgslsmith_f_op_f32(trunc(821f))), ~func_7(_wgslsmith_f_op_f32(f32(-1f) * -2095f), u_input.a.wy).a.b);
    }
    return false;
}

fn func_8(arg_0: vec4<bool>, arg_1: Struct_2, arg_2: vec2<bool>, arg_3: vec2<u32>) -> Struct_3 {
    var var_0 = ~countOneBits(~(~arg_3.x)) >> (~abs(abs(u_input.c)) % 32u);
    return Struct_3(_wgslsmith_mod_u32(~firstTrailingBit(arg_3.x), ~(~9723u)), 636f, Struct_2(Struct_1(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-arg_1.a.a)), ~vec4<u32>(arg_1.a.b.x, arg_3.x, 0u, 0u)), vec3<bool>(all(arg_0), false, !any(vec3<bool>(arg_1.b.x, arg_1.b.x, true)))));
}

fn func_1(arg_0: vec4<bool>, arg_1: f32, arg_2: f32, arg_3: Struct_4) -> Struct_1 {
    var var_0 = func_8(select(vec4<bool>(true, !arg_0.x, !select(arg_0.x, arg_0.x, arg_0.x), true), vec4<bool>((arg_3.c.c.b.x & arg_3.c.c.b.x) && func_2(arg_3.c.c.b), arg_0.x, arg_3.c.c.a.b.x != _wgslsmith_mult_u32(0u, arg_3.b.b.x), arg_0.x), false), Struct_2(arg_3.b, vec3<bool>(_wgslsmith_dot_vec2_u32(arg_3.c.c.a.b.yy, vec2<u32>(13866u, 53514u)) != ~u_input.b, false, true)), arg_0.wy, countOneBits(_wgslsmith_mod_vec2_u32(abs(arg_3.c.c.a.b.wz), firstTrailingBit(vec2<u32>(arg_3.b.b.x, u_input.c)))));
    var_0 = arg_3.c;
    for (; true; ) {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        var_0 = func_8(!vec4<bool>(arg_0.x, arg_0.x, false, var_0.c.b.x), func_8(vec4<bool>(!var_0.c.b.x, select(false, true, arg_3.c.c.b.x) | arg_3.c.c.b.x, all(vec2<bool>(true, true)), all(select(arg_0.zz, arg_0.yw, vec2<bool>(arg_3.c.c.b.x, var_0.c.b.x)))), func_7(arg_3.b.a.x, ~vec2<i32>(i32(-2147483648), u_input.a.x) ^ abs(vec2<i32>(u_input.a.x, -1i))), func_7(938f, _wgslsmith_sub_vec2_i32(~u_input.a.zx, max(vec2<i32>(u_input.a.x, 63497i), u_input.a.xx))).b.xz, vec2<u32>(~4007u, arg_3.c.a) | vec2<u32>(arg_3.b.b.x, var_0.c.a.b.x >> (arg_3.c.a % 32u))).c, var_0.c.b.xx, _wgslsmith_div_vec2_u32(reverseBits(_wgslsmith_mod_vec2_u32(vec2<u32>(u_input.c, 4294967295u), vec2<u32>(var_0.a, 0u))) ^ firstLeadingBit(select(var_0.c.a.b.xw, var_0.c.a.b.zz, arg_0.x)), abs(var_0.c.a.b.wx)));
        var_0 = func_8(select(!(!(!arg_0)), select(select(vec4<bool>(arg_0.x, false, var_0.c.b.x, false), !arg_0, true), vec4<bool>(false, !arg_0.x, arg_3.c.c.b.x || arg_0.x, any(arg_0)), vec4<bool>(arg_3.c.c.b.x, arg_3.c.c.b.x, false, var_0.c.b.x || true)), arg_0), var_0.c, !arg_0.wy, vec2<u32>(60306u, ~(~(u_input.b & 4294967295u))));
        var_0 = func_8(vec4<bool>(func_8(arg_0, Struct_2(func_8(arg_0, arg_3.c.c, vec2<bool>(arg_3.c.c.b.x, false), vec2<u32>(1u, 27102u)).c.a, select(vec3<bool>(arg_0.x, arg_3.c.c.b.x, false), arg_3.c.c.b, vec3<bool>(var_0.c.b.x, arg_0.x, arg_0.x))), vec2<bool>(arg_2 < arg_1, true), ~countOneBits(vec2<u32>(arg_3.b.b.x, 0u))).c.b.x, any(!(!arg_3.c.c.b.yy)), func_2(!(!var_0.c.b)), arg_0.x), Struct_2(arg_3.b, func_8(!arg_0, var_0.c, !vec2<bool>(arg_0.x, var_0.c.b.x), vec2<u32>(min(u_input.b, var_0.c.a.b.x), 99560u)).c.b), select(!(!vec2<bool>(arg_0.x, var_0.c.b.x)), vec2<bool>(func_7(_wgslsmith_div_f32(arg_1, var_0.c.a.a.x), vec2<i32>(u_input.a.x, 7992i) & u_input.a.yx).b.x, all(select(vec2<bool>(false, false), arg_3.c.c.b.zz, arg_0.x))), select(arg_0.zx, !(!arg_0.xz), vec2<bool>(func_2(var_0.c.b), arg_2 < -397f))), vec2<u32>(~1u, ~_wgslsmith_mult_u32(_wgslsmith_dot_vec2_u32(vec2<u32>(90371u, 4294967295u), arg_3.c.c.a.b.zw), u_input.c << (arg_3.b.b.x % 32u))));
    }
    var_0 = Struct_3(arg_3.b.b.x, arg_1, arg_3.c.c);
    var var_1 = func_7(arg_2, vec2<i32>(u_input.a.x, u_input.a.x)).a;
    return arg_3.c.c.a;
}

fn func_9(arg_0: vec4<u32>, arg_1: Struct_3) -> Struct_2 {
    let var_0 = 1u | _wgslsmith_dot_vec3_u32(_wgslsmith_clamp_vec3_u32(~max(arg_1.c.a.b.wxz, vec3<u32>(29970u, 20032u, 38579u)), ~(~vec3<u32>(45444u, 10831u, arg_1.a)), ~select(vec3<u32>(96395u, 1u, 46880u), arg_1.c.a.b.xwy, arg_1.c.b)), func_8(select(select(vec4<bool>(false, true, false, false), vec4<bool>(false, arg_1.c.b.x, true, arg_1.c.b.x), vec4<bool>(false, arg_1.c.b.x, true, false)), select(vec4<bool>(true, true, true, arg_1.c.b.x), vec4<bool>(arg_1.c.b.x, true, true, arg_1.c.b.x), vec4<bool>(arg_1.c.b.x, arg_1.c.b.x, arg_1.c.b.x, arg_1.c.b.x)), vec4<bool>(false, true, arg_1.c.b.x, true)), arg_1.c, arg_1.c.b.zz, arg_1.c.a.b.ww).c.a.b.xwz);
    var var_1 = vec2<f32>(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-285f))), arg_1.b);
    let var_2 = -9170i;
    var_1 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(-vec2<f32>(744f, -521f)), arg_1.c.a.a.zy, vec2<bool>(false, arg_1.c.b.x))), func_8(!(!vec4<bool>(true, true, arg_1.c.b.x, arg_1.c.b.x)), arg_1.c, select(func_7(var_1.x, vec2<i32>(24694i, 2147483647i)).b.zy, vec2<bool>(arg_1.c.b.x, true), select(vec2<bool>(arg_1.c.b.x, true), arg_1.c.b.yz, arg_1.c.b.x)), ~_wgslsmith_sub_vec2_u32(arg_0.yw, arg_0.yx)).c.a.a.zy)));
    var var_3 = func_7(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(1000f * _wgslsmith_div_f32(var_1.x, _wgslsmith_f_op_f32(-arg_1.b))))), _wgslsmith_sub_vec2_i32(-vec2<i32>(35699i | var_2, -15942i), u_input.a.wz)).a;
    return Struct_2(Struct_1(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(vec3<f32>(arg_1.c.a.a.x, var_3.a.x, -768f) - arg_1.c.a.a), vec3<f32>(arg_1.b, var_3.a.x, 880f))) * _wgslsmith_f_op_vec3_f32(func_4(firstTrailingBit(4294967295u), func_8(vec4<bool>(arg_1.c.b.x, arg_1.c.b.x, false, arg_1.c.b.x), arg_1.c, vec2<bool>(arg_1.c.b.x, false), arg_1.c.a.b.yw), vec2<f32>(389f, arg_1.b)))), func_7(1f, _wgslsmith_sub_vec2_i32(u_input.a.wz, vec2<i32>(u_input.a.x, -1i))).a.b | vec4<u32>(arg_0.x | 0u, ~70117u, var_0, ~var_3.b.x)), func_7(var_1.x, u_input.a.ww).b);
}

@compute
@workgroup_size(1)
fn main() {
    var var_0 = Struct_3(~abs(min(~33505u, 25569u)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1493f)))), func_9(~countOneBits(~vec4<u32>(u_input.c, u_input.c, 0u, 0u)), Struct_3(28527u, -399f, Struct_2(func_1(vec4<bool>(false, false, false, true), 513f, -716f, Struct_4(vec3<f32>(1088f, 1432f, -722f), Struct_1(vec3<f32>(-1370f, 1018f, -721f), vec4<u32>(4294967295u, u_input.c, 50742u, u_input.b)), Struct_3(0u, 1604f, Struct_2(Struct_1(vec3<f32>(-976f, -1000f, 848f), vec4<u32>(u_input.b, 43783u, 951u, u_input.c)), vec3<bool>(true, false, true))))), vec3<bool>(true, true, true)))));
    var var_1 = Struct_3(19933u >> (_wgslsmith_dot_vec2_u32(~var_0.c.a.b.wx, ~var_0.c.a.b.wz) % 32u), var_0.b, func_9(reverseBits(~vec4<u32>(u_input.b, 1u, 0u, 2300u)), Struct_3(~u_input.c, var_0.c.a.a.x, func_9(~var_0.c.a.b, Struct_3(var_0.a, 648f, var_0.c)))));
    var var_2 = true;
    var var_3 = func_7(_wgslsmith_f_op_f32(-_wgslsmith_f_op_vec3_f32(func_4(~(u_input.c >> (1u % 32u)), func_8(!vec4<bool>(var_0.c.b.x, false, true, true), Struct_2(var_1.c.a, var_0.c.b), !vec2<bool>(var_0.c.b.x, var_0.c.b.x), ~vec2<u32>(1u, 4294967295u)), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(var_1.c.a.a.zx - var_0.c.a.a.zx) - _wgslsmith_f_op_vec2_f32(-vec2<f32>(-1506f, var_1.b))))).x), vec2<i32>(_wgslsmith_dot_vec3_i32(vec3<i32>(u_input.a.x, ~u_input.a.x, _wgslsmith_mod_i32(47915i, u_input.a.x)), u_input.a.yxw), i32(-2147483648)));
    let var_4 = u_input.a.zw;
    var_3 = Struct_2(Struct_1(_wgslsmith_f_op_vec3_f32(var_3.a.a - vec3<f32>(_wgslsmith_f_op_f32(var_3.a.a.x + var_1.b), _wgslsmith_f_op_vec4_f32(func_3()).x, _wgslsmith_f_op_f32(sign(1861f)))), vec4<u32>(~(4294967295u >> (u_input.c % 32u)), ~_wgslsmith_add_u32(67343u, 1u), 1u, 22343u)), func_7(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(var_3.a.a.x - 127f)), func_7(_wgslsmith_f_op_f32(floor(var_3.a.a.x)), _wgslsmith_add_vec2_i32(var_4, var_4)).a.a.x)), vec2<i32>(u_input.a.x >> (1u % 32u), _wgslsmith_div_i32(_wgslsmith_dot_vec3_i32(vec3<i32>(-1i, 1i, u_input.a.x), vec3<i32>(-58193i, u_input.a.x, 1i)), -6510i))).b);
    for (; !var_0.c.b.x; ) {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
    }
    let var_5 = Struct_2(func_1(!vec4<bool>(var_3.b.x, true || var_0.c.b.x, true, func_7(1000f, vec2<i32>(u_input.a.x, var_4.x)).b.x), -1169f, _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_3.a.a.x)))), Struct_4(_wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(-vec3<f32>(288f, var_1.c.a.a.x, var_1.c.a.a.x)), var_1.c.a.a)), func_7(_wgslsmith_f_op_f32(step(-1008f, -1169f)), reverseBits(vec2<i32>(-2958i, var_4.x))).a, func_8(!vec4<bool>(var_1.c.b.x, var_0.c.b.x, var_3.b.x, true), var_0.c, vec2<bool>(false, var_0.c.b.x), func_1(vec4<bool>(var_1.c.b.x, var_3.b.x, true, true), 248f, var_1.b, Struct_4(var_1.c.a.a, Struct_1(var_0.c.a.a, vec4<u32>(23339u, 38214u, 4294967295u, var_3.a.b.x)), Struct_3(1u, 1506f, Struct_2(var_1.c.a, vec3<bool>(var_1.c.b.x, false, var_0.c.b.x))))).b.yx))), select(func_7(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(1710f, -186f)), ~countOneBits(var_4)).b, func_8(!vec4<bool>(var_0.c.b.x, true, var_3.b.x, false), func_7(-2987f, vec2<i32>(8246i, u_input.a.x) & var_4), vec2<bool>(select(var_3.b.x, var_3.b.x, var_3.b.x), true), vec2<u32>(var_0.a, ~4294967295u)).c.b, func_9(~var_0.c.a.b, func_8(vec4<bool>(var_3.b.x, var_3.b.x, false, true), var_1.c, !vec2<bool>(true, var_3.b.x), func_9(var_3.a.b, Struct_3(0u, 1264f, var_1.c)).a.b.xw)).b));
    for (var var_6 = -34810i; ; ) {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        var_3 = Struct_2(var_0.c.a, var_3.b);
        let var_7 = _wgslsmith_add_vec3_u32(_wgslsmith_mod_vec3_u32(~_wgslsmith_clamp_vec3_u32(~var_3.a.b.xyx, var_3.a.b.zwy, var_5.a.b.wyz), ~(~(vec3<u32>(var_1.c.a.b.x, 1u, var_5.a.b.x) >> (vec3<u32>(0u, var_0.a, var_5.a.b.x) % vec3<u32>(32u))))), select(firstTrailingBit(vec3<u32>(u_input.b, ~1u, 5943u)), func_1(select(!vec4<bool>(false, false, var_3.b.x, var_3.b.x), vec4<bool>(var_5.b.x, true, true, var_5.b.x), vec4<bool>(false, true, true, false)), -1866f, var_5.a.a.x, Struct_4(var_5.a.a, Struct_1(vec3<f32>(var_3.a.a.x, var_3.a.a.x, var_1.c.a.a.x), var_5.a.b), func_8(vec4<bool>(var_5.b.x, var_3.b.x, true, true), var_0.c, vec2<bool>(true, var_0.c.b.x), var_1.c.a.b.xz))).b.xxw, true));
        var var_8 = var_1.c.a.a;
    }
    let x = u_input.a;
    s_output = StorageBuffer(~reverseBits(abs(u_input.a.xyy)) & select(vec3<i32>(~(-1i), u_input.a.x, u_input.a.x), vec3<i32>(-1i) * -vec3<i32>(u_input.a.x, var_4.x, 75876i), (false && var_5.b.x) && (u_input.c <= var_1.a)), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(step(vec4<f32>(var_5.a.a.x, var_1.b, var_5.a.a.x, 390f), vec4<f32>(var_1.c.a.a.x, var_5.a.a.x, var_5.a.a.x, var_1.c.a.a.x))) * _wgslsmith_f_op_vec4_f32(-vec4<f32>(-285f, var_3.a.a.x, -867f, -1547f))) - _wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-1661f, var_3.a.a.x, var_5.a.a.x, var_0.b)))))), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(var_5.a.a.x, var_0.b))));
}

`;