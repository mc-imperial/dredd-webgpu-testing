export const input = [79,95,243,124,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [79,95,243,124,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[79,95,243,124]}
// Seed: 17966213498996004150

struct Struct_1 {
    a: bool,
    b: vec3<f32>,
}

struct Struct_2 {
    a: vec3<f32>,
    b: Struct_1,
    c: u32,
}

struct UniformBuffer {
    a: i32,
}

struct StorageBuffer {
    a: u32,
    b: u32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<Struct_1, 30> = array<Struct_1, 30>(Struct_1(true, vec3<f32>(1752f, 1093f, -951f)), Struct_1(false, vec3<f32>(-1247f, 680f, 340f)), Struct_1(true, vec3<f32>(239f, 774f, -358f)), Struct_1(false, vec3<f32>(-1167f, 1000f, -588f)), Struct_1(true, vec3<f32>(-635f, 1459f, 1178f)), Struct_1(false, vec3<f32>(193f, -360f, -105f)), Struct_1(false, vec3<f32>(1000f, 969f, 1000f)), Struct_1(false, vec3<f32>(-1000f, -1847f, 851f)), Struct_1(false, vec3<f32>(-1883f, -1035f, 1149f)), Struct_1(true, vec3<f32>(2136f, -1544f, 431f)), Struct_1(false, vec3<f32>(588f, 1002f, 869f)), Struct_1(false, vec3<f32>(727f, 2053f, 941f)), Struct_1(false, vec3<f32>(1111f, 240f, -347f)), Struct_1(true, vec3<f32>(664f, 256f, -1000f)), Struct_1(false, vec3<f32>(974f, 638f, 2268f)), Struct_1(false, vec3<f32>(477f, 696f, 1410f)), Struct_1(true, vec3<f32>(102f, -206f, 1439f)), Struct_1(false, vec3<f32>(128f, 1498f, 1147f)), Struct_1(false, vec3<f32>(2282f, 475f, -449f)), Struct_1(true, vec3<f32>(-676f, -1297f, 757f)), Struct_1(true, vec3<f32>(-1559f, 567f, 1277f)), Struct_1(false, vec3<f32>(-1779f, -1649f, 492f)), Struct_1(true, vec3<f32>(1550f, -1218f, 1392f)), Struct_1(true, vec3<f32>(-1395f, -362f, -1341f)), Struct_1(true, vec3<f32>(751f, -1000f, 137f)), Struct_1(false, vec3<f32>(-1198f, -204f, -509f)), Struct_1(true, vec3<f32>(176f, -379f, -1000f)), Struct_1(false, vec3<f32>(398f, 1339f, -681f)), Struct_1(true, vec3<f32>(991f, -328f, -1812f)), Struct_1(false, vec3<f32>(1778f, 175f, 351f)));

var<private> global1: Struct_2 = Struct_2(vec3<f32>(262f, 1915f, 2929f), Struct_1(false, vec3<f32>(-251f, -306f, 1310f)), 1100u);

var<private> global2: Struct_1;

var<private> global3: array<vec2<u32>, 26>;

var<private> LOOP_COUNTERS: array<u32, 23>;

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn func_6(arg_0: Struct_2, arg_1: vec4<u32>) -> f32 {
    let var_0 = vec4<i32>(_wgslsmith_mod_i32(abs(_wgslsmith_sub_i32(u_input.a, abs(u_input.a))), _wgslsmith_dot_vec2_i32(_wgslsmith_mod_vec2_i32(vec2<i32>(1457i, u_input.a), vec2<i32>(u_input.a, -1i)), select(vec2<i32>(0i, 10705i), vec2<i32>(u_input.a, 1i), arg_0.b.a)) & ~(u_input.a | -21661i)), 2147483647i, _wgslsmith_dot_vec4_i32(vec4<i32>(countOneBits(~(i32(-2147483648))), -u_input.a, u_input.a, u_input.a), vec4<i32>(_wgslsmith_mult_i32(_wgslsmith_dot_vec4_i32(vec4<i32>(u_input.a, -19459i, u_input.a, u_input.a), vec4<i32>(i32(-2147483648), u_input.a, 2147483647i, u_input.a)), u_input.a ^ u_input.a), select(u_input.a, _wgslsmith_dot_vec4_i32(vec4<i32>(-15233i, u_input.a, 45467i, -11781i), vec4<i32>(u_input.a, -1i, -1i, 1i)), arg_0.b.a), 0i, -1i)), u_input.a | u_input.a);
    let var_1 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(min(vec4<f32>(-108f, global1.b.b.x, -1000f, global2.b.x), vec4<f32>(1000f, arg_0.b.b.x, -761f, global1.a.x)))))) - _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(max(vec4<f32>(global2.b.x, 1258f, 893f, global2.b.x), vec4<f32>(arg_0.b.b.x, global2.b.x, -1000f, -955f)))))));
    switch (-_wgslsmith_add_i32(0i, 31485i)) {
        default: {
            if (arg_0.b.a) {
                global3 = array<vec2<u32>, 26>();
            }
            var var_2 = arg_0;
            let var_3 = _wgslsmith_f_op_f32(max(arg_0.b.b.x, _wgslsmith_f_op_f32(round(602f))));
            global2 = Struct_1(all(vec3<bool>(true, true, true)), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(_wgslsmith_f_op_f32(-var_2.b.b.x), 1446f, 846f))) * vec3<f32>(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(min(1000f, global2.b.x)))), -1798f, global1.a.x)));
        }
    }
    for (var var_2 = 23876i; var_2 > 0i; var_2 -= 1i) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        var var_3 = vec3<i32>(var_0.x, u_input.a << (4294967295u % 32u), 1i);
        continue;
    }
    global2 = Struct_1(any(select(vec4<bool>(any(vec4<bool>(arg_0.b.a, global1.b.a, false, global1.b.a)), true, true, -7722i <= var_0.x), !select(vec4<bool>(true, false, true, global1.b.a), vec4<bool>(global2.a, arg_0.b.a, true, global2.a), false), global2.a & any(vec4<bool>(global2.a, true, true, global1.b.a)))), _wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(abs(vec3<f32>(_wgslsmith_f_op_f32(global2.b.x + global2.b.x), 977f, _wgslsmith_f_op_f32(sign(arg_0.a.x))))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(376f, -279f, 143f))))));
    return -444f;
}

fn func_5(arg_0: vec3<f32>) -> bool {
    let var_0 = 1u;
    global1 = Struct_2(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(global1.b.b.x, _wgslsmith_f_op_f32(-arg_0.x), _wgslsmith_f_op_f32(func_6(Struct_2(global2.b, global0[_wgslsmith_index_u32(4294967295u, 30u)], global1.c), vec4<u32>(1u, global1.c, global1.c, global1.c)))) - _wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(-vec3<f32>(1091f, -1309f, 440f)), _wgslsmith_f_op_vec3_f32(select(vec3<f32>(global2.b.x, arg_0.x, arg_0.x), vec3<f32>(arg_0.x, 827f, global1.a.x), false)))))), global0[_wgslsmith_index_u32(~(~global1.c), 30u)], abs(max(0u, 63439u)));
    return global1.b.a;
}

fn func_4(arg_0: bool) -> vec3<u32> {
    switch (0i) {
        case -1i: {
            global1 = Struct_2(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(vec3<f32>(-812f, global1.b.b.x, -1000f) - global1.b.b)))) + _wgslsmith_f_op_vec3_f32(global1.a + _wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(-vec3<f32>(global1.a.x, global1.a.x, -1568f)))))), Struct_1(any(select(vec2<bool>(global2.a, false), vec2<bool>(true, arg_0), vec2<bool>(false, true))) & ((global1.a.x <= -338f) != true), global2.b), min(~(5800u & (global1.c ^ 0u)), _wgslsmith_sub_u32(global1.c, global1.c)));
            var var_0 = !vec4<bool>(arg_0 != true, arg_0, false, func_5(_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(vec3<f32>(-798f, -1385f, global1.a.x) * vec3<f32>(global2.b.x, global2.b.x, global1.b.b.x)), vec3<f32>(-1716f, 522f, global1.a.x), global1.c != global1.c))));
            var var_1 = abs(vec3<u32>(~(global1.c << (global1.c % 32u)), 4294967295u, global1.c)) | firstLeadingBit((vec3<u32>(global1.c, 1u, 35969u) | firstTrailingBit(vec3<u32>(4294967295u, 51557u, 27894u))) & abs(vec3<u32>(global1.c, global1.c, global1.c)));
        }
        case 1i: {
            loop {
                if (LOOP_COUNTERS[1u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
            }
        }
        default: {
            for (var var_0 = u_input.a; ; var_0 -= 1i) {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
                global2 = Struct_1(false, global2.b);
                let var_1 = countOneBits(reverseBits(-select(-vec4<i32>(i32(-2147483648), 12298i, u_input.a, u_input.a), _wgslsmith_mod_vec4_i32(vec4<i32>(u_input.a, -42501i, 41813i, i32(-2147483648)), vec4<i32>(i32(-2147483648), u_input.a, u_input.a, u_input.a)), global1.b.a || arg_0)));
                let var_2 = vec4<u32>(~global1.c, global1.c, ~(4294967295u | (76169u & (global1.c << (global1.c % 32u)))), global1.c);
                let var_3 = -66527i;
                let var_4 = min(_wgslsmith_mult_vec4_i32(vec4<i32>(_wgslsmith_clamp_i32(27067i, 0i, var_1.x), 1i, var_1.x | var_3, _wgslsmith_div_i32(-18759i, -1i)) ^ ((vec4<i32>(17379i, -1i, -71143i, var_3) >> (vec4<u32>(70090u, global1.c, 10546u, 1u) % vec4<u32>(32u))) & -var_1), vec4<i32>(-26684i, select(reverseBits(var_3), u_input.a, true), var_3, _wgslsmith_dot_vec2_i32(_wgslsmith_mod_vec2_i32(var_1.yy, var_1.zy), max(var_1.yy, vec2<i32>(2147483647i, 81507i))))), -reverseBits(var_1));
            }
            if (global2.a) {
                var var_0 = true;
                let var_1 = _wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-323f))) * global1.b.b.x), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-global1.b.b.x))), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-global2.b.x))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(trunc(global2.b.x)))) - _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(sign(-1239f)), _wgslsmith_f_op_f32(f32(-1f) * -318f)))))));
                let var_2 = -1794f;
                let var_3 = Struct_2(_wgslsmith_f_op_vec3_f32(ceil(global2.b)), Struct_1(true, vec3<f32>(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(min(-1173f, global2.b.x)))), _wgslsmith_f_op_f32(global1.b.b.x + _wgslsmith_f_op_f32(-440f - global1.b.b.x)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(605f, global2.b.x)) * _wgslsmith_f_op_f32(-744f + 1196f)))), ~(~_wgslsmith_clamp_u32(global1.c, global1.c, 0u) & select(abs(global1.c), global1.c, var_2 == 325f)));
            }
            var var_0 = -1594f;
        }
    }
    global2 = global1.b;
    if (_wgslsmith_mod_u32(21549u, global1.c) >= max(_wgslsmith_div_u32(global1.c, _wgslsmith_dot_vec2_u32(~global3[_wgslsmith_index_u32(global1.c, 26u)], ~global3[_wgslsmith_index_u32(0u, 26u)])), _wgslsmith_div_u32(~abs(global1.c), 51415u))) {
        if ((true | (!(global1.c > 1u) | !arg_0)) | !all(!(!vec3<bool>(false, global1.b.a, true)))) {
            global3 = array<vec2<u32>, 26>();
            let var_0 = Struct_2(_wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(global1.a * _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1705f, 305f, global2.b.x)))))), global0[_wgslsmith_index_u32(~reverseBits(global1.c), 30u)], global1.c);
            var var_1 = _wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-var_0.b.b)))))));
            var var_2 = vec4<f32>(var_1.x, 819f, 1006f, global1.a.x);
            var var_3 = !vec4<bool>(true, true, all(select(vec3<bool>(false, var_0.b.a, arg_0), vec3<bool>(global2.a, global2.a, true), vec3<bool>(global2.a, true, false))), !(!any(vec4<bool>(false, false, global2.a, var_0.b.a))));
        }
        for (var var_0 = 2147483647i; ; var_0 += 1i) {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            let var_1 = vec4<i32>(_wgslsmith_mult_i32(_wgslsmith_sub_i32(u_input.a, ~u_input.a >> (_wgslsmith_div_u32(global1.c, 61951u) % 32u)), firstLeadingBit(-u_input.a)), u_input.a, u_input.a, u_input.a);
            let var_2 = 1u ^ (global1.c | global1.c);
            break;
        }
        if (true) {
            let var_0 = _wgslsmith_clamp_vec4_i32(vec4<i32>(-47876i, _wgslsmith_add_i32(-49647i, _wgslsmith_mult_i32(u_input.a, _wgslsmith_dot_vec3_i32(vec3<i32>(u_input.a, -50966i, 1i), vec3<i32>(-1i, u_input.a, -1i)))), -46950i, _wgslsmith_add_i32(~u_input.a ^ (u_input.a << (0u % 32u)), 2147483647i)), vec4<i32>(~u_input.a << (global1.c % 32u), i32(-1i) * -min(2147483647i, 50473i), 1i, u_input.a), ~(_wgslsmith_div_vec4_i32(~vec4<i32>(4846i, -27034i, u_input.a, u_input.a), vec4<i32>(u_input.a, i32(-2147483648), 2147483647i, -1320i) | vec4<i32>(-1i, u_input.a, -21219i, u_input.a)) << (_wgslsmith_mult_vec4_u32(vec4<u32>(41073u, global1.c, 4482u, global1.c), vec4<u32>(global1.c, global1.c, global1.c, global1.c)) % vec4<u32>(32u))));
            var var_1 = _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-global2.b.x)));
            var var_2 = reverseBits(vec3<i32>(-var_0.x, abs(_wgslsmith_dot_vec2_i32(vec2<i32>(-1i, var_0.x), var_0.zx)) >> (4294967295u % 32u), -1i));
        }
    }
    global3 = array<vec2<u32>, 26>();
    var var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(177f - 353f));
    return vec3<u32>(global1.c, ~global1.c, ~global1.c);
}

fn func_3(arg_0: vec3<f32>, arg_1: Struct_2) -> Struct_1 {
    loop {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        loop {
            if (LOOP_COUNTERS[5u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
            var var_0 = func_4(true);
            continue;
        }
    }
    let var_0 = ~vec3<u32>(~21771u, _wgslsmith_div_u32(~arg_1.c, 28773u), ~arg_1.c);
    loop {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        for (var var_1 = -1i; func_5(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(vec3<f32>(arg_1.b.b.x, -1000f, -1644f) + vec3<f32>(arg_0.x, global1.b.b.x, -1635f)), vec3<f32>(global1.a.x, arg_1.a.x, arg_1.a.x), vec3<bool>(false, true, arg_1.b.a))) * _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(min(arg_0, vec3<f32>(413f, arg_0.x, -405f))), _wgslsmith_f_op_vec3_f32(select(global2.b, arg_0, arg_1.b.a)))))); var_1 -= 1i) {
            if (LOOP_COUNTERS[7u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
            break;
        }
        var var_1 = !global1.b.a || global2.a;
    }
    var var_1 = any(vec2<bool>(abs(arg_1.c) < (var_0.x & 64434u), arg_1.b.a));
    var var_2 = 91712u;
    return Struct_1(all(select(select(vec3<bool>(arg_1.b.a, true, false), vec3<bool>(global1.b.a, true, global2.a), arg_1.b.a), vec3<bool>(false, any(vec3<bool>(true, global1.b.a, false)), global1.b.a), select(select(vec3<bool>(arg_1.b.a, false, global1.b.a), vec3<bool>(true, arg_1.b.a, true), arg_1.b.a), select(vec3<bool>(true, true, global1.b.a), vec3<bool>(false, global1.b.a, arg_1.b.a), vec3<bool>(arg_1.b.a, arg_1.b.a, arg_1.b.a)), !vec3<bool>(global2.a, false, true)))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(select(arg_1.b.b, _wgslsmith_f_op_vec3_f32(-arg_1.b.b), global1.b.a))));
}

fn func_7(arg_0: Struct_1, arg_1: vec4<i32>, arg_2: vec3<u32>, arg_3: vec2<f32>) -> vec4<bool> {
    global2 = func_3(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(global1.b.b.x, -2256f, arg_0.b.x) - vec3<f32>(arg_0.b.x, arg_3.x, -1000f)), arg_0.b))), arg_0.b), Struct_2(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-global1.b.b) - _wgslsmith_f_op_vec3_f32(vec3<f32>(global1.a.x, arg_3.x, global1.b.b.x) - global2.b)) - vec3<f32>(_wgslsmith_f_op_f32(max(-618f, global2.b.x)), _wgslsmith_f_op_f32(arg_0.b.x + 751f), arg_0.b.x)), Struct_1(global2.a, vec3<f32>(arg_3.x, _wgslsmith_f_op_f32(f32(-1f) * -969f), arg_0.b.x)), 4294967295u));
    var var_0 = ~4294967295u;
    loop {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        let var_1 = vec3<i32>(~(33868i | ~(u_input.a >> (4294967295u % 32u))), u_input.a, u_input.a);
        continue;
    }
    loop {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
    }
    var var_1 = _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_6(Struct_2(global2.b, global1.b, 1u), vec4<u32>(arg_2.x, 1u, 56200u, 31423u)))))), arg_3.x, global2.b.x, -1810f));
    return select(select(!vec4<bool>(all(vec4<bool>(true, arg_0.a, global2.a, global2.a)), false, all(vec2<bool>(false, true)), global2.a), vec4<bool>(false, var_1.x <= _wgslsmith_f_op_f32(arg_0.b.x * -106f), !(true != global2.a), global1.b.a), !select(vec4<bool>(arg_0.a, arg_0.a, false, false), vec4<bool>(false, false, arg_0.a, global2.a), !vec4<bool>(global1.b.a, global2.a, global1.b.a, true))), select(vec4<bool>((global1.c >> (4294967295u % 32u)) >= ~global1.c, _wgslsmith_dot_vec3_i32(arg_1.yxy, arg_1.wzz) < _wgslsmith_add_i32(1i, 58088i), select(true && global2.a, all(vec3<bool>(true, false, global2.a)), global1.b.a), select(false, false, global1.b.a) || true), select(vec4<bool>(arg_0.a, global1.c != global1.c, false, func_5(global1.a)), !vec4<bool>(false, true, global2.a, arg_0.a), vec4<bool>(true, true, true, true)), vec4<bool>(true, global1.b.a, arg_1.x <= (arg_1.x ^ -19883i), false)), vec4<bool>(true, !(49387u == global1.c), global2.a, !(!(!arg_0.a))));
}

fn func_2(arg_0: vec4<i32>) -> vec4<u32> {
    var var_0 = !(!select(select(vec4<bool>(global2.a, global1.b.a, false, global2.a), vec4<bool>(global1.b.a, global2.a, true, global2.a), !vec4<bool>(false, false, global2.a, true)), func_7(func_3(vec3<f32>(global2.b.x, global2.b.x, -766f), Struct_2(vec3<f32>(402f, global2.b.x, -1052f), Struct_1(global2.a, global2.b), global1.c)), arg_0, ~vec3<u32>(17900u, 30472u, global1.c), global2.b.zz), (global1.b.a && true) && !global1.b.a));
    switch (_wgslsmith_clamp_i32((-(~(-30908i)) << (global1.c % 32u)) & firstTrailingBit(u_input.a), u_input.a, _wgslsmith_add_i32(~u_input.a, arg_0.x))) {
        case -45999i: {
            let var_1 = ~(i32(-1i) * -arg_0.x) | arg_0.x;
        }
        case 38904i: {
            return vec4<u32>(global1.c, ~_wgslsmith_dot_vec2_u32(vec2<u32>(global1.c, global1.c), ~(~vec2<u32>(global1.c, global1.c))), ~min(func_4(global1.c >= global1.c).x, global1.c), 0u);
        }
        case i32(-2147483648): {
            if (abs(u_input.a) < -_wgslsmith_sub_i32(45394i, arg_0.x)) {
                global3 = array<vec2<u32>, 26>();
                var var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_6(Struct_2(global1.b.b, Struct_1(global1.b.a, _wgslsmith_f_op_vec3_f32(vec3<f32>(global2.b.x, 659f, global2.b.x) * vec3<f32>(1980f, global1.a.x, -250f))), 1u), vec4<u32>(31992u, global1.c, reverseBits(firstLeadingBit(global1.c)), global1.c))));
            }
            switch (_wgslsmith_clamp_i32(2256i, 56250i, -25746i)) {
                case -28222i: {
                    global3 = array<vec2<u32>, 26>();
                    let var_1 = func_3(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(abs(vec3<f32>(192f, _wgslsmith_f_op_f32(global2.b.x - global2.b.x), _wgslsmith_f_op_f32(global1.a.x * 317f)))), global2.b), Struct_2(global1.b.b, Struct_1(global2.a, _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(global1.b.b.x, -1265f, -205f)))), ~(max(0u, global1.c) << ((global1.c & global1.c) % 32u))));
                    global0 = array<Struct_1, 30>();
                    global0 = array<Struct_1, 30>();
                    let var_2 = global3[_wgslsmith_index_u32(~firstTrailingBit(firstLeadingBit(1u)), 26u)];
                }
                case 2147483647i: {
                    var_0 = func_7(Struct_1(true, _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-func_3(global1.a, Struct_2(global2.b, global1.b, 43494u)).b))), ~vec4<i32>(_wgslsmith_div_i32(0i, arg_0.x), ~arg_0.x, _wgslsmith_dot_vec2_i32(arg_0.xw, arg_0.yw), -4141i) & arg_0, vec3<u32>(_wgslsmith_div_u32(global1.c, 1u), ~firstTrailingBit(_wgslsmith_mod_u32(1u, 4294967295u)), _wgslsmith_mod_u32(func_4(true).x, global1.c)), global2.b.zx);
                }
                case 35671i: {
                    let var_1 = Struct_2(global2.b, global0[_wgslsmith_index_u32(abs(_wgslsmith_add_u32(~global1.c, 39002u)), 30u)], abs(1u));
                    let var_2 = Struct_2(_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-vec3<f32>(global1.b.b.x, _wgslsmith_f_op_f32(-694f), _wgslsmith_f_op_f32(-1000f))), _wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(vec3<f32>(global1.b.b.x, global2.b.x, global2.b.x) * var_1.a), _wgslsmith_f_op_vec3_f32(select(global1.a, var_1.b.b, global1.b.a)))))), !func_7(Struct_1(global2.a, global2.b), _wgslsmith_div_vec4_i32(arg_0, vec4<i32>(u_input.a, u_input.a, 709i, u_input.a)), vec3<u32>(var_1.c, var_1.c, 49517u), _wgslsmith_f_op_vec2_f32(vec2<f32>(201f, 1901f) + global2.b.xz)).ywy)), global0[_wgslsmith_index_u32(~43531u, 30u)], func_4(var_0.x).x);
                    global0 = array<Struct_1, 30>();
                }
                case 1i: {
                    var var_1 = Struct_2(vec3<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-474f)))), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1261f)))), -370f), func_3(_wgslsmith_f_op_vec3_f32(-vec3<f32>(453f, _wgslsmith_f_op_f32(floor(global1.b.b.x)), _wgslsmith_div_f32(632f, global2.b.x))), Struct_2(vec3<f32>(_wgslsmith_f_op_f32(-407f * 1221f), _wgslsmith_div_f32(1000f, 1085f), 1184f), Struct_1(true, _wgslsmith_f_op_vec3_f32(global1.b.b * global2.b)), ~global1.c)), global1.c);
                    var var_2 = ~(_wgslsmith_div_vec2_i32(abs(arg_0.wz) ^ min(vec2<i32>(u_input.a, u_input.a), vec2<i32>(arg_0.x, 2147483647i)), ~arg_0.yy) ^ arg_0.yx);
                    return abs(_wgslsmith_mult_vec4_u32(firstTrailingBit(reverseBits(vec4<u32>(4294967295u, var_1.c, var_1.c, global1.c))), ~vec4<u32>(24063u, var_1.c, 4294967295u, 54857u))) << ((max(~select(vec4<u32>(53526u, 1u, 1u, 52729u), vec4<u32>(var_1.c, 36726u, 25297u, var_1.c), vec4<bool>(false, true, global1.b.a, var_0.x)), _wgslsmith_mod_vec4_u32(~vec4<u32>(1810u, global1.c, 54648u, 26082u), vec4<u32>(var_1.c, var_1.c, global1.c, 1u))) << (vec4<u32>(func_4(func_5(global2.b)).x, ~22041u, 4294967295u, var_1.c ^ ~1759u) % vec4<u32>(32u))) % vec4<u32>(32u));
                }
                default: {
                }
            }
            let var_1 = Struct_2(_wgslsmith_f_op_vec3_f32(exp2(_wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(ceil(vec3<f32>(1953f, -1996f, global1.a.x))))), _wgslsmith_f_op_vec3_f32(max(vec3<f32>(646f, global2.b.x, global2.b.x), _wgslsmith_f_op_vec3_f32(max(global1.a, global1.a)))))))), func_3(_wgslsmith_f_op_vec3_f32(-global2.b), Struct_2(global1.b.b, Struct_1(false & global1.b.a, vec3<f32>(1671f, global1.b.b.x, -568f)), 1u)), 4294967295u);
        }
        case 0i: {
            let var_1 = _wgslsmith_mult_vec3_u32(~(~vec3<u32>(global1.c, 4294967295u, global1.c) | (vec3<u32>(13780u, 1u, 4294967295u) | vec3<u32>(global1.c, 16209u, global1.c))), ~min(~vec3<u32>(28439u, global1.c, 22973u), min(vec3<u32>(global1.c, 4294967295u, 54122u), vec3<u32>(64019u, 4294967295u, global1.c)))) >> (min(~(vec3<u32>(4294967295u, global1.c, 42017u) >> (firstTrailingBit(vec3<u32>(35858u, 1u, 6800u)) % vec3<u32>(32u))), select(countOneBits(vec3<u32>(1u, global1.c, global1.c)), reverseBits(vec3<u32>(global1.c, 35306u, global1.c)), true || var_0.x) << (min(vec3<u32>(global1.c, 0u, 4294967295u), _wgslsmith_div_vec3_u32(vec3<u32>(1u, 1u, global1.c), vec3<u32>(1u, global1.c, global1.c))) % vec3<u32>(32u))) % vec3<u32>(32u));
            let var_2 = !func_3(_wgslsmith_f_op_vec3_f32(-global2.b), Struct_2(_wgslsmith_f_op_vec3_f32(floor(vec3<f32>(global2.b.x, global1.a.x, 704f))), global1.b, _wgslsmith_dot_vec3_u32(reverseBits(var_1), ~vec3<u32>(4294967295u, global1.c, 47406u)))).a;
            switch (~_wgslsmith_sub_i32(arg_0.x, _wgslsmith_div_i32(-_wgslsmith_dot_vec4_i32(arg_0, vec4<i32>(i32(-2147483648), arg_0.x, arg_0.x, u_input.a)), u_input.a))) {
                case -49356i: {
                    let var_3 = func_3(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(vec3<f32>(-1000f, global1.b.b.x, -1400f), global2.b)) * vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -1000f), _wgslsmith_f_op_f32(-986f), _wgslsmith_f_op_f32(global2.b.x - global2.b.x))) + func_3(vec3<f32>(_wgslsmith_f_op_f32(round(-271f)), 733f, global1.a.x), Struct_2(_wgslsmith_f_op_vec3_f32(-vec3<f32>(global2.b.x, -1299f, -1496f)), func_3(global2.b, Struct_2(vec3<f32>(global1.a.x, global1.b.b.x, global1.a.x), global0[_wgslsmith_index_u32(global1.c, 30u)], 31710u)), 1u)).b), Struct_2(vec3<f32>(1f, global2.b.x, global1.b.b.x), Struct_1(true & !global2.a, _wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(abs(vec3<f32>(global1.a.x, global1.a.x, 1000f)))))), var_1.x));
                    let var_4 = abs(arg_0.x);
                }
                default: {
                    global0 = array<Struct_1, 30>();
                    var var_3 = global2.b.x;
                    let var_4 = var_1.zx;
                    global3 = array<vec2<u32>, 26>();
                    global0 = array<Struct_1, 30>();
                }
            }
        }
        default: {
        }
    }
    for (var var_1: i32; var_1 != 2147483647i; var_1 += 1i) {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        global2 = func_3(global1.b.b, Struct_2(global1.a, func_3(global1.a, Struct_2(_wgslsmith_f_op_vec3_f32(-global2.b), func_3(vec3<f32>(global1.b.b.x, global1.a.x, global1.a.x), Struct_2(vec3<f32>(global2.b.x, global1.a.x, 1165f), Struct_1(true, vec3<f32>(global1.a.x, 262f, -193f)), 23344u)), ~global1.c)), _wgslsmith_add_u32(_wgslsmith_clamp_u32(~global1.c, ~global1.c, 17079u), _wgslsmith_mod_u32(87717u, ~39595u))));
        let var_2 = vec4<f32>(global2.b.x, 918f, global2.b.x, _wgslsmith_f_op_f32(max(global2.b.x, 827f)));
        return vec4<u32>(reverseBits(_wgslsmith_mult_u32(_wgslsmith_dot_vec4_u32(~vec4<u32>(global1.c, global1.c, 1u, 92074u), ~vec4<u32>(global1.c, global1.c, global1.c, global1.c)), global1.c)), countOneBits(75651u), 1u, ~1u);
    }
    var var_1 = _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(421f * global2.b.x), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(-945f))) + -996f)))));
    let var_2 = vec4<bool>(all(var_0.wyx), !var_0.x, true, !global1.b.a);
    return ~vec4<u32>(global1.c, 39309u, _wgslsmith_clamp_u32(global1.c, ~_wgslsmith_sub_u32(global1.c, 19458u), ~58771u), global1.c);
}

fn func_8(arg_0: u32, arg_1: u32, arg_2: Struct_2, arg_3: bool) -> Struct_1 {
    let var_0 = vec2<u32>(global1.c, max(~23658u, ~arg_0));
    switch (-1i) {
        case 30829i: {
            loop {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                let var_1 = ~vec3<u32>(~(~(~4294967295u)), ~arg_0, arg_1);
            }
            if (global2.a) {
                global0 = array<Struct_1, 30>();
            }
        }
        case -1i: {
            if (!(u_input.a == u_input.a)) {
                global3 = array<vec2<u32>, 26>();
                let var_1 = func_2(_wgslsmith_mult_vec4_i32(~select(_wgslsmith_add_vec4_i32(vec4<i32>(u_input.a, 2147483647i, u_input.a, u_input.a), vec4<i32>(u_input.a, 0i, -12773i, 2147483647i)), abs(vec4<i32>(-10698i, u_input.a, i32(-2147483648), u_input.a)), !vec4<bool>(arg_3, global1.b.a, false, true)), vec4<i32>(-(u_input.a | -4037i), u_input.a, u_input.a, -u_input.a))).x;
                let var_2 = global1.b.a;
                global2 = global0[_wgslsmith_index_u32(~126467u, 30u)];
                var var_3 = arg_2;
            }
            var var_1 = arg_2;
            switch (-(-u_input.a ^ firstTrailingBit(u_input.a))) {
                case 7751i: {
                    var var_2 = var_1.b;
                    global1 = arg_2;
                    global3 = array<vec2<u32>, 26>();
                }
                default: {
                    let var_2 = _wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global1.b.b.x))), global2.b.x, _wgslsmith_div_f32(_wgslsmith_div_f32(global2.b.x, _wgslsmith_f_op_f32(-global2.b.x)), _wgslsmith_div_f32(func_3(global1.b.b, arg_2).b.x, _wgslsmith_f_op_f32(abs(881f)))), -1461f) * _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(vec4<f32>(-1358f, 1593f, global2.b.x, 1385f) * _wgslsmith_f_op_vec4_f32(vec4<f32>(-316f, global1.b.b.x, global2.b.x, -926f) - vec4<f32>(arg_2.b.b.x, -1687f, 582f, -494f))))) + _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(vec4<f32>(global1.a.x, global1.a.x, 564f, 346f), vec4<f32>(global2.b.x, arg_2.a.x, -687f, 418f))))));
                    let var_3 = Struct_2(_wgslsmith_f_op_vec3_f32(sign(global1.b.b)), global1.b, arg_1);
                }
            }
            global2 = func_3(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(global2.b + _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(floor(arg_2.a)))) - _wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(select(global2.b.x, global2.b.x, true)), _wgslsmith_f_op_f32(1874f + arg_2.a.x), _wgslsmith_f_op_f32(-arg_2.b.b.x)))), arg_2);
        }
        case i32(-2147483648): {
            let var_1 = _wgslsmith_f_op_vec2_f32(-arg_2.b.b.xy);
            for (var var_2: i32; global2.a; global2 = Struct_1(false, _wgslsmith_div_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_2.a.x + arg_2.b.b.x)), _wgslsmith_f_op_f32(func_6(Struct_2(vec3<f32>(887f, 1472f, -1000f), arg_2.b, arg_0), countOneBits(vec4<u32>(12536u, 4294967295u, 21437u, 0u)))), func_3(global1.b.b, arg_2).b.x), _wgslsmith_f_op_vec3_f32(-global2.b)))) {
                if (LOOP_COUNTERS[12u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
                let var_3 = select(!vec4<bool>(all(vec4<bool>(global2.a, arg_3, true, arg_2.b.a)), func_5(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1033f, 1526f, global1.a.x))), 4294967295u > ~arg_2.c, any(vec2<bool>(true, true))), !func_7(Struct_1(arg_3, arg_2.b.b), abs(vec4<i32>(-36406i, -32317i, 2147483647i, -54081i)), vec3<u32>(_wgslsmith_mult_u32(4294967295u, 1u), ~89148u, var_0.x ^ arg_2.c), global2.b.yx), !select(select(select(vec4<bool>(arg_2.b.a, arg_2.b.a, global2.a, true), vec4<bool>(arg_2.b.a, global1.b.a, global1.b.a, arg_3), vec4<bool>(false, true, true, global1.b.a)), func_7(arg_2.b, vec4<i32>(2147483647i, u_input.a, u_input.a, u_input.a), vec3<u32>(global1.c, arg_1, 55684u), vec2<f32>(global1.b.b.x, var_1.x)), vec4<bool>(true, global2.a, arg_2.b.a, arg_2.b.a)), !select(vec4<bool>(global1.b.a, global1.b.a, false, arg_2.b.a), vec4<bool>(arg_3, false, true, arg_3), vec4<bool>(arg_3, arg_2.b.a, arg_2.b.a, true)), !(!vec4<bool>(global2.a, arg_3, false, global2.a))));
                let var_4 = func_3(_wgslsmith_f_op_vec3_f32(floor(global1.b.b)), arg_2);
                continue;
            }
            if (true) {
            }
            for (var var_2 = 0i; var_2 > -1i; ) {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                var var_3 = Struct_2(_wgslsmith_f_op_vec3_f32(ceil(global2.b)), global0[_wgslsmith_index_u32(var_0.x, 30u)], _wgslsmith_dot_vec4_u32(select(abs(vec4<u32>(1u, 19886u, var_0.x, 0u)), _wgslsmith_sub_vec4_u32(vec4<u32>(0u, arg_1, global1.c, arg_2.c), vec4<u32>(1u, 23606u, 0u, arg_0)), vec4<bool>(false, global2.a, false, true)), vec4<u32>(arg_2.c, ~arg_2.c, ~0u, _wgslsmith_mod_u32(4294967295u, 45639u))) ^ 132551u);
                let var_4 = _wgslsmith_f_op_f32(ceil(var_3.a.x));
            }
        }
        case 6201i: {
            for (; ; ) {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                continue;
            }
            global0 = array<Struct_1, 30>();
            var var_1 = 1000f;
            global2 = func_3(global1.a, arg_2);
            global1 = arg_2;
        }
        default: {
            loop {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
                global0 = array<Struct_1, 30>();
                continue;
            }
            global3 = array<vec2<u32>, 26>();
            global2 = global0[_wgslsmith_index_u32(65823u, 30u)];
            let var_1 = global1.b;
            for (var var_2: i32; ; var_2 += 1i) {
                if (LOOP_COUNTERS[16u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
                break;
            }
        }
    }
    global2 = Struct_1(true, _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(arg_2.a.x, global1.b.b.x, 427f)))));
    let var_1 = _wgslsmith_sub_u32(~(~(~_wgslsmith_dot_vec3_u32(vec3<u32>(var_0.x, arg_1, 100290u), vec3<u32>(71020u, 1u, arg_2.c)))), 1u);
    let var_2 = Struct_2(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(vec3<f32>(arg_2.a.x, arg_2.a.x, 834f), global1.a) * _wgslsmith_f_op_vec3_f32(-vec3<f32>(-355f, global1.a.x, global1.a.x))) - _wgslsmith_f_op_vec3_f32(exp2(_wgslsmith_f_op_vec3_f32(arg_2.b.b - vec3<f32>(global2.b.x, 1393f, -1523f))))) - _wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(vec3<f32>(arg_2.b.b.x, -1799f, 370f), arg_2.b.b) * global1.a), arg_2.a))), global0[_wgslsmith_index_u32(global1.c, 30u)], _wgslsmith_mod_u32(arg_1, 1u));
    return Struct_1(all(select(!vec3<bool>(global2.a, true, false), select(func_7(Struct_1(global2.a, vec3<f32>(-629f, var_2.b.b.x, 575f)), vec4<i32>(u_input.a, u_input.a, u_input.a, u_input.a), vec3<u32>(arg_2.c, arg_0, arg_1), vec2<f32>(arg_2.b.b.x, -407f)).zwz, select(vec3<bool>(true, false, arg_2.b.a), vec3<bool>(false, true, false), vec3<bool>(global1.b.a, var_2.b.a, false)), vec3<bool>(arg_3, global2.a, global2.a)), arg_1 >= ~var_1)), _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(func_3(global2.b, arg_2).b - arg_2.b.b), _wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(max(vec3<f32>(global2.b.x, global1.b.b.x, global1.b.b.x), arg_2.b.b)))))), func_7(Struct_1(global1.b.a, _wgslsmith_f_op_vec3_f32(-vec3<f32>(var_2.a.x, 292f, global2.b.x))), vec4<i32>(u_input.a, u_input.a, u_input.a, _wgslsmith_add_i32(u_input.a, u_input.a)), _wgslsmith_div_vec3_u32(~vec3<u32>(var_2.c, 67817u, var_1), vec3<u32>(arg_0, 50805u, 1u) | vec3<u32>(var_2.c, arg_0, 22563u)), _wgslsmith_f_op_vec2_f32(step(_wgslsmith_div_vec2_f32(vec2<f32>(global2.b.x, 350f), global1.b.b.zz), _wgslsmith_f_op_vec2_f32(-vec2<f32>(var_2.b.b.x, -925f))))).x)));
}

fn func_1() -> f32 {
    loop {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
        global2 = func_8(~4294967295u, ~4294967295u, Struct_2(global1.b.b, Struct_1(true, global2.b), _wgslsmith_dot_vec4_u32(~(~vec4<u32>(0u, global1.c, 64363u, 7379u)), ~func_2(vec4<i32>(u_input.a, 20437i, u_input.a, 1i)))), (i32(-2147483648) | ~(179i ^ u_input.a)) <= select(reverseBits(~2147483647i), -u_input.a, false));
        var var_0 = vec3<bool>(!(!global2.a), global1.b.a && global1.b.a, true);
    }
    switch (-9653i) {
        default: {
            var var_0 = Struct_2(global1.b.b, Struct_1(!any(select(vec3<bool>(global2.a, true, global2.a), vec3<bool>(false, global1.b.a, global1.b.a), vec3<bool>(global1.b.a, false, true))), global1.a), ~36868u);
        }
    }
    let var_0 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(func_6(Struct_2(vec3<f32>(_wgslsmith_div_f32(-1193f, -1796f), _wgslsmith_f_op_f32(global1.b.b.x - -717f), -264f), global0[_wgslsmith_index_u32(func_2(vec4<i32>(u_input.a, u_input.a, u_input.a, -1i) ^ vec4<i32>(u_input.a, 1154i, 1i, -1i)).x, 30u)], 1u), select(func_2(vec4<i32>(-4079i, -22609i, u_input.a, u_input.a)), vec4<u32>(global1.c, global1.c, global1.c, 0u) & vec4<u32>(global1.c, global1.c, global1.c, 4294967295u), !global2.a) >> (vec4<u32>(41599u, global1.c, global1.c, max(global1.c, 59057u)) % vec4<u32>(32u)))) + _wgslsmith_f_op_f32(-1156f + _wgslsmith_f_op_f32(-669f - global1.b.b.x)));
    let var_1 = vec3<bool>(false && global2.a, all(vec4<bool>(global1.b.a, !global1.b.a, !global2.a, any(!vec4<bool>(global2.a, false, true, true)))), global2.a);
    let var_2 = vec4<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -973f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-func_3(global2.b, Struct_2(global1.b.b, global0[_wgslsmith_index_u32(4294967295u, 30u)], global1.c)).b.x) * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-962f)))), global1.b.b.x, _wgslsmith_f_op_f32(-var_0), global2.b.x);
    return _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-var_2.x), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(416f - global2.b.x))), ~(~global1.c) < (reverseBits(global1.c) & firstTrailingBit(global1.c))))));
}

@compute
@workgroup_size(1)
fn main() {
    if (true) {
        loop {
            if (LOOP_COUNTERS[18u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
            global2 = global0[_wgslsmith_index_u32(global1.c, 30u)];
            global1 = Struct_2(vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global1.b.b.x)), -178f, _wgslsmith_f_op_f32(func_1())), func_3(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(global1.a * vec3<f32>(797f, -1346f, global2.b.x)), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(min(vec3<f32>(-745f, global1.b.b.x, 1292f), global1.b.b)))), Struct_2(global1.b.b, global1.b, ~(global1.c & global1.c))), ~52677u);
            continue;
        }
        if (func_8(_wgslsmith_clamp_u32(~89778u, global1.c, (_wgslsmith_sub_u32(global1.c, 19016u) | ~global1.c) ^ min(22501u, global1.c)), firstTrailingBit(global1.c), Struct_2(_wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(global1.b.b + vec3<f32>(1000f, -535f, global2.b.x)) - _wgslsmith_f_op_vec3_f32(-vec3<f32>(-598f, -489f, global1.a.x))), _wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(global2.b - vec3<f32>(-632f, global2.b.x, global1.a.x)))))), func_8(min(min(1u, 107374u), firstLeadingBit(global1.c)), global1.c, Struct_2(global2.b, func_3(global1.a, Struct_2(global1.b.b, Struct_1(true, vec3<f32>(-2404f, -711f, -1000f)), 4294967295u)), 1u), select(true, false, false)), ~(~global1.c)), true).a) {
            let var_0 = global0[_wgslsmith_index_u32(global1.c, 30u)];
            let var_1 = global1.b;
            var var_2 = func_3(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(sign(var_0.b)) + _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(vec3<f32>(global2.b.x, -750f, -886f) - vec3<f32>(global2.b.x, -676f, 1066f)), var_1.b, func_8(global1.c, 0u, Struct_2(vec3<f32>(1194f, 556f, global2.b.x), global0[_wgslsmith_index_u32(1u, 30u)], 41008u), true).a)))), Struct_2(vec3<f32>(var_0.b.x, _wgslsmith_f_op_f32(-global1.b.b.x), var_1.b.x), Struct_1(global2.a, _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(select(vec3<f32>(-286f, global1.b.b.x, -711f), vec3<f32>(var_0.b.x, var_1.b.x, global2.b.x), false)))), 0u));
        }
        let var_0 = vec2<f32>(_wgslsmith_f_op_f32(-global1.a.x), global2.b.x);
        loop {
            if (LOOP_COUNTERS[19u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
            let var_1 = _wgslsmith_sub_i32(i32(-1i) * -u_input.a, ~(-1i));
            global3 = array<vec2<u32>, 26>();
            global3 = array<vec2<u32>, 26>();
            return;
        }
        switch (16206i & u_input.a) {
            case -11492i: {
                global1 = Struct_2(global2.b, func_3(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(global1.b.b.x, -1414f, -1095f))), Struct_2(vec3<f32>(_wgslsmith_f_op_f32(var_0.x * var_0.x), _wgslsmith_f_op_f32(f32(-1f) * -709f), _wgslsmith_f_op_f32(abs(-1000f))), global1.b, 29733u >> (global1.c % 32u))), 6948u);
            }
            case 1i: {
                var var_1 = Struct_2(_wgslsmith_f_op_vec3_f32(abs(vec3<f32>(_wgslsmith_f_op_f32(-var_0.x), 1150f, _wgslsmith_div_f32(global1.a.x, -1115f)))), Struct_1(global2.a, _wgslsmith_f_op_vec3_f32(-global2.b)), ~global1.c | _wgslsmith_mod_u32(reverseBits(reverseBits(72173u)), abs(18422u)));
                let var_2 = select(_wgslsmith_add_vec4_u32(vec4<u32>(_wgslsmith_add_u32(27127u, global1.c), 1u, _wgslsmith_div_u32(20141u, global1.c), global1.c) & vec4<u32>(~var_1.c, 4294967295u, global1.c, var_1.c << (12958u % 32u)), (_wgslsmith_add_vec4_u32(vec4<u32>(global1.c, 51553u, var_1.c, 44124u), vec4<u32>(global1.c, 35649u, var_1.c, 0u)) << (_wgslsmith_sub_vec4_u32(vec4<u32>(global1.c, global1.c, global1.c, 4294967295u), vec4<u32>(global1.c, global1.c, 1u, 21890u)) % vec4<u32>(32u))) & reverseBits(abs(vec4<u32>(0u, 4294967295u, 4294967295u, global1.c)))), firstTrailingBit(reverseBits(~(~vec4<u32>(global1.c, 4294967295u, 0u, 76642u)))), global1.b.a);
                global2 = func_8(_wgslsmith_sub_u32(var_2.x, ~(~abs(var_1.c))), 0u, Struct_2(_wgslsmith_f_op_vec3_f32(select(vec3<f32>(_wgslsmith_f_op_f32(step(var_0.x, var_0.x)), global2.b.x, _wgslsmith_f_op_f32(select(-221f, global1.b.b.x, true))), vec3<f32>(_wgslsmith_f_op_f32(-818f), global2.b.x, _wgslsmith_f_op_f32(var_1.a.x - 129f)), select(!vec3<bool>(global2.a, false, false), select(vec3<bool>(true, global2.a, false), vec3<bool>(false, true, global1.b.a), vec3<bool>(global1.b.a, false, true)), true))), Struct_1(!(global2.a || true), _wgslsmith_f_op_vec3_f32(vec3<f32>(var_1.b.b.x, global2.b.x, var_1.a.x) - _wgslsmith_f_op_vec3_f32(-var_1.b.b))), ~0u), var_1.b.a);
                global1 = Struct_2(_wgslsmith_f_op_vec3_f32(exp2(global1.a)), Struct_1(!(!(1221f >= global2.b.x)), func_8(abs(32107u), 1u, Struct_2(_wgslsmith_f_op_vec3_f32(-vec3<f32>(var_0.x, var_1.a.x, var_0.x)), Struct_1(global1.b.a, global2.b), ~global1.c), global1.b.a).b), firstTrailingBit(_wgslsmith_sub_u32(var_1.c, _wgslsmith_div_u32(24468u, 4294967295u) & global1.c)));
            }
            default: {
                global1 = Struct_2(_wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(step(vec3<f32>(global1.b.b.x, -995f, -841f), vec3<f32>(global2.b.x, global2.b.x, var_0.x)))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(var_0.x, var_0.x, global2.b.x))))), Struct_1(!all(vec3<bool>(false, global1.b.a, global1.b.a)), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(vec3<f32>(351f, global2.b.x, global2.b.x) * global2.b))))), 1u);
                let var_1 = ~10935u;
                var var_2 = Struct_2(_wgslsmith_f_op_vec3_f32(step(vec3<f32>(_wgslsmith_f_op_f32(sign(-316f)), global2.b.x, 1f), _wgslsmith_f_op_vec3_f32(round(vec3<f32>(-304f, -1333f, _wgslsmith_f_op_f32(var_0.x - 106f)))))), global0[_wgslsmith_index_u32(~global1.c, 30u)], abs(_wgslsmith_dot_vec4_u32(countOneBits(vec4<u32>(var_1, 16111u, 43246u, 4294967295u)) << (vec4<u32>(1u, 13309u, var_1, 4294967295u) % vec4<u32>(32u)), ~(~vec4<u32>(var_1, 1u, 0u, var_1)))));
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[20u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
        for (var var_0 = 2147483647i; ((i32(-1i) * -select(-7803i, u_input.a, global2.a)) >> (1u % 32u)) <= -u_input.a; ) {
            if (LOOP_COUNTERS[21u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
            global0 = array<Struct_1, 30>();
            global3 = array<vec2<u32>, 26>();
            global1 = Struct_2(_wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(-vec3<f32>(2460f, _wgslsmith_f_op_f32(-global1.b.b.x), _wgslsmith_f_op_f32(global1.a.x - 552f))))), global1.b, 22798u);
            let var_1 = Struct_2(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1769f, global1.a.x, 2279f)) - vec3<f32>(global1.a.x, -877f, global1.b.b.x)), _wgslsmith_f_op_vec3_f32(exp2(_wgslsmith_f_op_vec3_f32(global1.b.b - vec3<f32>(global2.b.x, global1.b.b.x, global1.b.b.x))))))), func_8(global1.c, abs(0u), Struct_2(_wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(global2.b * global2.b))), func_8(abs(global1.c), ~global1.c, Struct_2(vec3<f32>(global1.b.b.x, -1665f, 1525f), Struct_1(global2.a, global2.b), global1.c), !global1.b.a), firstLeadingBit(7168u)), false), ~global1.c);
        }
        switch (min(-select(0i, ~u_input.a, global2.a), -u_input.a) & u_input.a) {
            case 32088i: {
                var var_0 = func_3(vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-492f) + _wgslsmith_f_op_f32(global2.b.x - -1863f)) * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global2.b.x) * _wgslsmith_f_op_f32(-global2.b.x))), 776f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(f32(-1f) * -1376f), 286f)) + global1.a.x)), Struct_2(global1.b.b, Struct_1(global1.b.a, _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(global1.a - vec3<f32>(-1413f, global1.a.x, global2.b.x)), _wgslsmith_div_vec3_f32(vec3<f32>(global2.b.x, global1.b.b.x, -1908f), vec3<f32>(-827f, -956f, global1.b.b.x)), true))), 0u)).b;
                global3 = array<vec2<u32>, 26>();
                let var_1 = firstLeadingBit(_wgslsmith_dot_vec4_i32(max(max(~vec4<i32>(-68936i, 8202i, u_input.a, u_input.a), _wgslsmith_clamp_vec4_i32(vec4<i32>(-17329i, -28117i, -1i, u_input.a), vec4<i32>(u_input.a, 0i, u_input.a, 1i), vec4<i32>(u_input.a, 0i, -1i, 1i))), select(_wgslsmith_mod_vec4_i32(vec4<i32>(u_input.a, u_input.a, u_input.a, u_input.a), vec4<i32>(2147483647i, u_input.a, -1i, 0i)), _wgslsmith_mod_vec4_i32(vec4<i32>(-20557i, u_input.a, u_input.a, 6590i), vec4<i32>(18996i, 0i, u_input.a, 4368i)), select(vec4<bool>(false, global2.a, true, global1.b.a), vec4<bool>(false, true, global1.b.a, global1.b.a), global1.b.a))), vec4<i32>(reverseBits(_wgslsmith_dot_vec2_i32(vec2<i32>(-1i, u_input.a), vec2<i32>(u_input.a, 18477i))), abs(~0i), 21223i, u_input.a)));
                let var_2 = Struct_2(_wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(ceil(global1.a))))), func_3(_wgslsmith_f_op_vec3_f32(max(global1.b.b, func_8(21525u >> (1u % 32u), reverseBits(global1.c), Struct_2(global1.b.b, global1.b, 41114u), !global1.b.a).b)), Struct_2(vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -1000f), _wgslsmith_f_op_f32(-global2.b.x), 707f), global1.b, ~firstLeadingBit(23498u))), global1.c);
            }
            case -1i: {
                global0 = array<Struct_1, 30>();
                continue;
            }
            default: {
                let var_0 = vec3<i32>(13407i, _wgslsmith_div_i32(_wgslsmith_mult_i32(-8231i, -37152i), -1i) & ~_wgslsmith_sub_i32(u_input.a, u_input.a), i32(-2147483648)) << (~vec3<u32>(~_wgslsmith_sub_u32(0u, global1.c), global1.c, reverseBits(func_4(true).x)) % vec3<u32>(32u));
                global2 = global0[_wgslsmith_index_u32(_wgslsmith_mult_u32(_wgslsmith_mult_u32(~(~global1.c), _wgslsmith_div_u32(global1.c, 0u | ~global1.c)), _wgslsmith_mod_u32(global1.c, global1.c)), 30u)];
                continue;
            }
        }
    }
    var var_0 = _wgslsmith_f_op_f32(ceil(func_3(_wgslsmith_f_op_vec3_f32(ceil(global1.a)), Struct_2(_wgslsmith_f_op_vec3_f32(-global2.b), global1.b, global1.c)).b.x)) < _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(max(func_8(49491u << (global1.c % 32u), global1.c, Struct_2(global2.b, Struct_1(false, vec3<f32>(global1.b.b.x, global1.a.x, global1.b.b.x)), global1.c), global2.a).b.x, func_8(28870u, global1.c, Struct_2(vec3<f32>(global1.b.b.x, global1.a.x, global1.b.b.x), Struct_1(global1.b.a, vec3<f32>(-433f, -647f, 814f)), 11861u), select(false, true, global2.a)).b.x))));
    var var_1 = Struct_2(global2.b, global1.b, _wgslsmith_mod_u32(~(~(~23039u)), ~(_wgslsmith_dot_vec3_u32(vec3<u32>(global1.c, global1.c, global1.c), vec3<u32>(0u, global1.c, 32751u)) << (4294967295u % 32u))));
    var var_2 = Struct_2(_wgslsmith_div_vec3_f32(global1.b.b, vec3<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(max(var_1.a.x, 1000f)))), _wgslsmith_f_op_f32(-var_1.b.b.x), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(958f, var_1.b.b.x, true)) * 408f))), global0[_wgslsmith_index_u32(~(~(~1u)), 30u)], _wgslsmith_sub_u32(4294967295u, _wgslsmith_add_u32(~_wgslsmith_div_u32(var_1.c, 45990u), _wgslsmith_dot_vec3_u32(vec3<u32>(22566u, var_1.c, 49254u) << (vec3<u32>(12935u, 0u, 4294967295u) % vec3<u32>(32u)), _wgslsmith_sub_vec3_u32(vec3<u32>(50860u, 1u, 17525u), vec3<u32>(24569u, global1.c, 4294967295u))))));
    global0 = array<Struct_1, 30>();
    if (!var_1.b.a) {
        if (global1.b.a) {
            let var_3 = _wgslsmith_clamp_u32(~(31650u | global1.c), var_1.c, global1.c);
            var var_4 = Struct_2(global1.a, Struct_1(true, _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(sign(vec3<f32>(-271f, var_1.b.b.x, 781f))), vec3<f32>(-430f, _wgslsmith_f_op_f32(var_2.a.x * 540f), 497f), !global2.a))), _wgslsmith_add_u32(_wgslsmith_div_u32(_wgslsmith_add_u32(global1.c ^ var_2.c, _wgslsmith_dot_vec4_u32(vec4<u32>(48672u, var_2.c, var_2.c, 4294967295u), vec4<u32>(4294967295u, var_1.c, var_2.c, 44646u))), 34380u), _wgslsmith_sub_u32(907u, _wgslsmith_sub_u32(~58160u, 4294967295u ^ var_2.c))));
            var var_5 = 601f;
            return;
        }
        var var_3 = Struct_2(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(round(func_3(vec3<f32>(var_1.a.x, -1261f, global2.b.x), Struct_2(vec3<f32>(global1.a.x, var_1.a.x, global2.b.x), var_2.b, 1u)).b))), Struct_1(false, vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -592f), -352f, -637f)), firstLeadingBit(4294967295u));
        var var_4 = Struct_2(_wgslsmith_f_op_vec3_f32(vec3<f32>(-2731f, _wgslsmith_f_op_f32(global2.b.x - global1.b.b.x), 985f) - var_3.b.b), var_2.b, var_2.c);
    }
    for (var var_3 = ~(~1i); ; var_3 += 1i) {
        if (LOOP_COUNTERS[22u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
    }
    let var_3 = Struct_2(_wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(_wgslsmith_f_op_f32(func_6(Struct_2(vec3<f32>(global1.a.x, var_1.a.x, 848f), global0[_wgslsmith_index_u32(global1.c, 30u)], var_1.c), ~vec4<u32>(var_2.c, 4294967295u, 4294967295u, 1u))), -777f, _wgslsmith_f_op_f32(-1000f)))), Struct_1(true, global1.b.b), abs(_wgslsmith_dot_vec4_u32(max(_wgslsmith_mult_vec4_u32(vec4<u32>(4267u, 1813u, var_1.c, var_2.c), vec4<u32>(0u, 61589u, 15067u, var_2.c)), _wgslsmith_mult_vec4_u32(vec4<u32>(57484u, 1u, 22527u, var_1.c), vec4<u32>(var_2.c, 1u, global1.c, global1.c))), firstLeadingBit(func_2(vec4<i32>(-24069i, u_input.a, 0i, u_input.a))))));
    let x = u_input.a;
    s_output = StorageBuffer(26397u, var_2.c);
}

`;