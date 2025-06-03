export const input = [47,50,247,144,254,3,135,34,141,123,214,242,136,141,71,147,39,177,181,28,193,3,203,158,13,49,112,14,109,116,194,218,170,50,94,66,121,69,115,0,79,150,237,37,218,55,73,104,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [47,50,247,144,254,3,135,34,141,123,214,242,136,141,71,147,39,177,181,28,193,3,203,158,13,49,112,14,109,116,194,218,170,50,94,66,121,69,115,0,79,150,237,37,218,55,73,104,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[47,50,247,144,254,3,135,34,141,123,214,242,136,141,71,147,39,177,181,28,193,3,203,158,13,49,112,14,109,116,194,218,170,50,94,66,121,69,115,0,79,150,237,37,218,55,73,104]}
// Seed: 5583785066379443878

struct Struct_1 {
    a: f32,
    b: bool,
    c: vec4<u32>,
    d: vec4<f32>,
    e: vec3<i32>,
}

struct Struct_2 {
    a: bool,
    b: Struct_1,
    c: f32,
    d: Struct_1,
}

struct Struct_3 {
    a: Struct_2,
    b: u32,
    c: bool,
    d: bool,
    e: i32,
}

struct Struct_4 {
    a: vec2<bool>,
    b: Struct_3,
    c: vec2<i32>,
}

struct UniformBuffer {
    a: u32,
    b: u32,
    c: vec2<u32>,
    d: vec3<i32>,
    e: vec4<u32>,
}

struct StorageBuffer {
    a: vec2<i32>,
    b: i32,
    c: u32,
    d: i32,
    e: vec3<f32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<u32, 14> = array<u32, 14>(0u, 35209u, 4294967295u, 1u, 4294967295u, 3087u, 1488u, 1u, 4294967295u, 10u, 134279u, 0u, 4294967295u, 0u);

var<private> global1: array<bool, 19> = array<bool, 19>(false, false, false, false, true, true, false, false, true, false, false, false, true, false, true, true, false, false, true);

var<private> LOOP_COUNTERS: array<u32, 21>;

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn func_6(arg_0: Struct_4) -> bool {
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        break;
    }
    if (!any(vec2<bool>(global1[_wgslsmith_index_u32(0u, 19u)], any(arg_0.a)))) {
        loop {
            if (LOOP_COUNTERS[1u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
            global1 = array<bool, 19>();
        }
        let var_0 = u_input.d.x;
        var var_1 = ~(arg_0.b.a.b.e ^ abs(-_wgslsmith_mod_vec3_i32(vec3<i32>(u_input.d.x, 9192i, var_0), vec3<i32>(arg_0.b.a.d.e.x, 7502i, -1908i))));
        let var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0.b.a.d.d.x));
        if (false) {
            let var_3 = select(select(!vec4<bool>(true, any(vec3<bool>(global1[_wgslsmith_index_u32(0u, 19u)], global1[_wgslsmith_index_u32(1u, 19u)], false)), -30073i == var_1.x, !global1[_wgslsmith_index_u32(61517u, 19u)]), vec4<bool>(2147483647i < (-11543i << (arg_0.b.b % 32u)), false, arg_0.a.x, (i32(-1i) * -39813i) == _wgslsmith_dot_vec2_i32(var_1.yy, vec2<i32>(-26327i, u_input.d.x))), !(!global1[_wgslsmith_index_u32(85010u, 19u)])), !vec4<bool>(any(vec2<bool>(global1[_wgslsmith_index_u32(1u, 19u)], false)), !arg_0.a.x, any(vec4<bool>(arg_0.a.x, global1[_wgslsmith_index_u32(38102u, 19u)], false, global1[_wgslsmith_index_u32(12161u, 19u)])), true), true);
            var_1 = u_input.d;
            let var_4 = var_2;
            var_1 = vec3<i32>(0i, u_input.d.x, _wgslsmith_sub_i32(u_input.d.x | max(_wgslsmith_clamp_i32(var_1.x, arg_0.b.e, u_input.d.x), _wgslsmith_add_i32(50085i, u_input.d.x)), i32(-1i) * -1i));
        }
    }
    let var_0 = -(u_input.d.x << (86597u % 32u));
    let var_1 = _wgslsmith_f_op_vec3_f32(exp2(_wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(-arg_0.b.a.b.a), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0.b.a.c)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(1427f, -998f, true)))) - _wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(-arg_0.b.a.b.d.xxy))))));
    var var_2 = _wgslsmith_f_op_f32(ceil(-486f)) == _wgslsmith_f_op_f32(arg_0.b.a.b.a + _wgslsmith_f_op_f32(-190f + _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-arg_0.b.a.d.a), _wgslsmith_f_op_f32(round(-303f))))));
    return false;
}

fn func_5(arg_0: Struct_4, arg_1: Struct_4) -> u32 {
    let var_0 = arg_0.b.a;
    let var_1 = Struct_3(Struct_2(true, Struct_1(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(arg_0.b.a.b.a + 413f), 618f)), true, u_input.e, var_0.d.d, arg_1.b.a.b.e), arg_1.b.a.d.d.x, arg_1.b.a.b), _wgslsmith_mod_u32(_wgslsmith_div_u32(max(select(0u, 26578u, false), 0u), 13898u), ~(~_wgslsmith_mod_u32(44821u, 4294967295u))), func_6(Struct_4(arg_0.a, arg_1.b, ~vec2<i32>(arg_0.c.x, var_0.b.e.x) | (vec2<i32>(var_0.b.e.x, 26282i) ^ vec2<i32>(var_0.d.e.x, u_input.d.x)))), global1[_wgslsmith_index_u32(firstLeadingBit(global0[_wgslsmith_index_u32(firstTrailingBit(var_0.d.c.x) | var_0.d.c.x, 14u)]), 19u)], -49526i);
    var var_2 = arg_1.b.a.d;
    if (true) {
        global0 = array<u32, 14>();
        for (var var_3 = 8236i; var_3 > -1i; var_3 -= 1i) {
            if (LOOP_COUNTERS[2u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            var var_4 = _wgslsmith_clamp_vec2_i32(vec2<i32>(arg_1.c.x & 4928i, _wgslsmith_add_i32(~(-10260i), abs(arg_1.c.x))), vec2<i32>(var_1.a.d.e.x, 33670i), max(max(vec2<i32>(var_2.e.x, reverseBits(22692i)), -var_0.d.e.yz), _wgslsmith_div_vec2_i32(vec2<i32>(i32(-2147483648), -46566i), vec2<i32>(_wgslsmith_div_i32(i32(-2147483648), arg_0.c.x), arg_1.b.a.b.e.x))));
            continue;
        }
    }
    if (~_wgslsmith_add_u32(~54396u, u_input.e.x) > 0u) {
        let var_3 = max(arg_1.c, vec2<i32>(~arg_1.c.x, -42991i));
        global0 = array<u32, 14>();
        var_2 = Struct_1(742f, true, ~(~vec4<u32>(var_1.b, var_2.c.x, 24196u, arg_1.b.a.b.c.x)) & ~select(u_input.e & var_1.a.d.c, var_0.d.c, select(vec4<bool>(false, true, var_1.a.b.b, true), vec4<bool>(true, global1[_wgslsmith_index_u32(arg_0.b.b, 19u)], true, global1[_wgslsmith_index_u32(arg_1.b.a.b.c.x, 19u)]), arg_0.b.d)), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-var_0.d.d) - vec4<f32>(_wgslsmith_f_op_f32(-arg_0.b.a.b.a), _wgslsmith_f_op_f32(-arg_1.b.a.c), _wgslsmith_div_f32(-1300f, arg_0.b.a.d.a), -784f)) * var_1.a.d.d), abs(var_1.a.b.e) >> ((var_1.a.d.c.xzw & countOneBits(var_1.a.b.c.wyy)) % vec3<u32>(32u)));
        switch (i32(-1i) * -_wgslsmith_dot_vec3_i32(reverseBits(var_2.e >> (var_1.a.b.c.xxx % vec3<u32>(32u))), ~u_input.d)) {
            case -532i: {
                var var_4 = arg_0.b;
                var var_5 = -arg_1.c.x;
                var_2 = Struct_1(_wgslsmith_f_op_f32(abs(var_2.d.x)), !var_0.b.b, ~(~countOneBits(~vec4<u32>(1u, var_0.b.c.x, 1u, 29737u))), vec4<f32>(var_0.d.d.x, _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(abs(-420f)), var_2.d.x, !(var_1.a.b.e.x == 22623i))), _wgslsmith_f_op_f32(abs(-821f)), _wgslsmith_div_f32(arg_1.b.a.d.a, var_2.a)), _wgslsmith_sub_vec3_i32(_wgslsmith_clamp_vec3_i32(vec3<i32>(var_3.x, arg_0.c.x, var_2.e.x >> (var_4.a.d.c.x % 32u)), vec3<i32>(-1i) * -arg_1.b.a.b.e, var_4.a.b.e), min(_wgslsmith_add_vec3_i32(select(var_2.e, arg_1.b.a.d.e, vec3<bool>(true, global1[_wgslsmith_index_u32(var_4.b, 19u)], true)), ~vec3<i32>(6178i, 2147483647i, -1i)), arg_0.b.a.b.e ^ -vec3<i32>(-1i, -4781i, var_0.d.e.x))));
                global0 = array<u32, 14>();
                let var_6 = all(!select(!(!vec3<bool>(var_1.c, var_0.b.b, false)), vec3<bool>(all(vec4<bool>(var_2.b, var_0.b.b, true, true)), -1i >= arg_1.c.x, true), var_0.d.b));
            }
            default: {
                let var_4 = arg_0.b.a;
                var var_5 = ~(~4294967295u);
                let var_6 = _wgslsmith_add_u32(_wgslsmith_sub_u32(_wgslsmith_dot_vec3_u32(u_input.e.zyx, vec3<u32>(4294967295u, ~var_2.c.x, firstLeadingBit(var_4.d.c.x))), ~(1u << (reverseBits(var_0.b.c.x) % 32u))), 1u);
                var var_7 = arg_1;
            }
        }
    }
    return reverseBits(abs(var_1.b));
}

fn func_4(arg_0: vec3<u32>, arg_1: u32, arg_2: vec4<u32>, arg_3: i32) -> Struct_4 {
    global1 = array<bool, 19>();
    for (var var_0 = 8474i; var_0 < i32(-2147483648); global1 = array<bool, 19>()) {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        for (; ; ) {
            if (LOOP_COUNTERS[4u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
            var var_1 = vec4<i32>(_wgslsmith_add_i32(_wgslsmith_add_i32(arg_3, _wgslsmith_dot_vec4_i32(vec4<i32>(u_input.d.x, arg_3, 1i, arg_3), vec4<i32>(arg_3, arg_3, arg_3, arg_3))), 18540i) & _wgslsmith_sub_i32(reverseBits(0i), ~(u_input.d.x & -57070i)), i32(-1i) * -23753i, 2147483647i, 1i | arg_3);
        }
        continue;
    }
    if (!(!select(global1[_wgslsmith_index_u32(_wgslsmith_div_u32(func_5(Struct_4(vec2<bool>(global1[_wgslsmith_index_u32(24026u, 19u)], global1[_wgslsmith_index_u32(arg_0.x, 19u)]), Struct_3(Struct_2(true, Struct_1(-246f, global1[_wgslsmith_index_u32(arg_0.x, 19u)], vec4<u32>(0u, 37914u, 0u, 61095u), vec4<f32>(-1383f, 1359f, 730f, 238f), u_input.d), 1126f, Struct_1(690f, global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(27711u, 14u)], 19u)], vec4<u32>(0u, global0[_wgslsmith_index_u32(arg_1, 14u)], 1u, arg_1), vec4<f32>(396f, -171f, -204f, 482f), vec3<i32>(-85148i, 37862i, -60783i))), 108157u, global1[_wgslsmith_index_u32(4294967295u, 19u)], false, -8155i), vec2<i32>(u_input.d.x, 0i)), Struct_4(vec2<bool>(global1[_wgslsmith_index_u32(arg_1, 19u)], global1[_wgslsmith_index_u32(arg_0.x, 19u)]), Struct_3(Struct_2(global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a, 14u)], 19u)], Struct_1(-182f, false, vec4<u32>(arg_0.x, 22516u, 1u, u_input.c.x), vec4<f32>(1000f, -534f, 1121f, 725f), vec3<i32>(-1i, -47379i, -39596i)), 1006f, Struct_1(2219f, global1[_wgslsmith_index_u32(8372u, 19u)], u_input.e, vec4<f32>(1417f, 879f, 185f, 1000f), vec3<i32>(2147483647i, -12605i, -24595i))), 1u, true, global1[_wgslsmith_index_u32(66041u, 19u)], u_input.d.x), vec2<i32>(arg_3, -63956i))), ~0u), 19u)], true, !global1[_wgslsmith_index_u32(_wgslsmith_mult_u32(0u, arg_0.x), 19u)]))) {
        switch (_wgslsmith_dot_vec2_i32(u_input.d.xz, vec2<i32>(2147483647i, u_input.d.x))) {
            case -1i: {
                let var_0 = ~vec4<i32>(27802i, 2147483647i, i32(-2147483648), _wgslsmith_dot_vec2_i32(u_input.d.xy, vec2<i32>(u_input.d.x, firstTrailingBit(arg_3))));
                let var_1 = Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-834f)), global1[_wgslsmith_index_u32(reverseBits(arg_0.x) >> (arg_0.x % 32u), 19u)], ~max(u_input.e, select(~u_input.e, _wgslsmith_add_vec4_u32(vec4<u32>(1u, u_input.b, u_input.a, arg_2.x), u_input.e), true)), _wgslsmith_f_op_vec4_f32(vec4<f32>(1f, 1f, 1f, 1f) * _wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(991f, -386f, 565f, 1036f)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(-1147f, -214f, 171f, 669f))))), select(vec3<i32>(arg_3, var_0.x, _wgslsmith_div_i32(38927i, u_input.d.x)) >> (select(_wgslsmith_mult_vec3_u32(arg_2.wzy, vec3<u32>(arg_1, arg_0.x, 2210u)), vec3<u32>(3425u, global0[_wgslsmith_index_u32(arg_0.x, 14u)], arg_0.x), select(vec3<bool>(global1[_wgslsmith_index_u32(1u, 19u)], false, false), vec3<bool>(global1[_wgslsmith_index_u32(0u, 19u)], false, false), true)) % vec3<u32>(32u)), ~vec3<i32>(-74988i, _wgslsmith_dot_vec4_i32(var_0, var_0), ~var_0.x), global1[_wgslsmith_index_u32(~firstTrailingBit(_wgslsmith_div_u32(4294967295u, global0[_wgslsmith_index_u32(58133u, 14u)])), 19u)]));
            }
            case -57743i: {
                let var_0 = abs(1i);
                var var_1 = (u_input.e.ywy >> (arg_2.wwz % vec3<u32>(32u))) & _wgslsmith_sub_vec3_u32(arg_2.yyx, select(_wgslsmith_clamp_vec3_u32(vec3<u32>(118640u, arg_0.x, global0[_wgslsmith_index_u32(40628u, 14u)]), ~arg_0, vec3<u32>(79649u, arg_0.x, u_input.c.x)), ~max(arg_2.yzx, vec3<u32>(arg_0.x, 0u, u_input.e.x)), !(!vec3<bool>(global1[_wgslsmith_index_u32(61943u, 19u)], false, global1[_wgslsmith_index_u32(arg_0.x, 19u)]))));
                var var_2 = ~u_input.d ^ ~(~abs(u_input.d));
                global0 = array<u32, 14>();
                var_2 = ~(~_wgslsmith_clamp_vec3_i32(u_input.d, ~vec3<i32>(var_2.x, var_2.x, u_input.d.x), select(u_input.d, ~u_input.d, !vec3<bool>(false, global1[_wgslsmith_index_u32(36724u, 19u)], true))));
            }
            case 39809i: {
                var var_0 = select(!(!select(select(vec2<bool>(true, false), vec2<bool>(global1[_wgslsmith_index_u32(arg_1, 19u)], false), vec2<bool>(false, global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(10705u, 14u)], 19u)])), !vec2<bool>(global1[_wgslsmith_index_u32(67439u, 19u)], true), global1[_wgslsmith_index_u32(min(26079u, u_input.c.x), 19u)])), select(select(vec2<bool>(true, true), !vec2<bool>(global1[_wgslsmith_index_u32(arg_1, 19u)], global1[_wgslsmith_index_u32(arg_0.x, 19u)]), vec2<bool>(any(vec3<bool>(false, global1[_wgslsmith_index_u32(4294967295u, 19u)], true)), false)), !vec2<bool>(global1[_wgslsmith_index_u32(4294967295u, 19u)], true), select(select(vec2<bool>(true, true), select(vec2<bool>(global1[_wgslsmith_index_u32(1u, 19u)], global1[_wgslsmith_index_u32(0u, 19u)]), vec2<bool>(global1[_wgslsmith_index_u32(arg_1, 19u)], global1[_wgslsmith_index_u32(arg_1, 19u)]), global1[_wgslsmith_index_u32(4294967295u, 19u)]), vec2<bool>(false, global1[_wgslsmith_index_u32(98620u, 19u)])), vec2<bool>(true, true), !vec2<bool>(global1[_wgslsmith_index_u32(17827u, 19u)], global1[_wgslsmith_index_u32(42507u, 19u)]))), false);
                let var_1 = u_input.d;
            }
            case 0i: {
            }
            default: {
            }
        }
        let var_0 = _wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(sign(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-2082f, -2034f)))) + vec2<f32>(587f, 1621f))), vec2<f32>(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-443f - 1111f))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-309f))), true));
    }
    loop {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        var var_0 = select(!(!select(vec4<bool>(false, true, true, false), !vec4<bool>(true, false, global1[_wgslsmith_index_u32(arg_2.x, 19u)], global1[_wgslsmith_index_u32(u_input.c.x, 19u)]), !global1[_wgslsmith_index_u32(arg_0.x, 19u)])), vec4<bool>(global1[_wgslsmith_index_u32(0u, 19u)], global1[_wgslsmith_index_u32(reverseBits(~reverseBits(4294967295u)), 19u)], false, false), select(vec4<bool>(all(select(vec4<bool>(global1[_wgslsmith_index_u32(arg_1, 19u)], global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(arg_1, 14u)], 19u)], true, global1[_wgslsmith_index_u32(4294967295u, 19u)]), vec4<bool>(false, true, true, false), vec4<bool>(global1[_wgslsmith_index_u32(0u, 19u)], global1[_wgslsmith_index_u32(0u, 19u)], false, global1[_wgslsmith_index_u32(47650u, 19u)]))), true, global1[_wgslsmith_index_u32(~min(1u, 15081u), 19u)], !global1[_wgslsmith_index_u32(reverseBits(global0[_wgslsmith_index_u32(u_input.c.x, 14u)]), 19u)]), vec4<bool>(select(true, any(vec2<bool>(true, global1[_wgslsmith_index_u32(arg_2.x, 19u)])), select(global1[_wgslsmith_index_u32(u_input.c.x, 19u)], global1[_wgslsmith_index_u32(0u, 19u)], global1[_wgslsmith_index_u32(4294967295u, 19u)])), global1[_wgslsmith_index_u32(14509u, 19u)], global1[_wgslsmith_index_u32(arg_0.x, 19u)], global1[_wgslsmith_index_u32(~arg_0.x, 19u)]), vec4<bool>(!global1[_wgslsmith_index_u32(_wgslsmith_mult_u32(u_input.a, 83717u), 19u)], true, true, false)));
    }
    for (var var_0 = select(arg_3, 0i, any(vec4<bool>(true, true, any(!vec3<bool>(true, global1[_wgslsmith_index_u32(61066u, 19u)], true)), global1[_wgslsmith_index_u32(~0u, 19u)]))); global1[_wgslsmith_index_u32(25895u, 19u)]; var_0 += 1i) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        loop {
            if (LOOP_COUNTERS[7u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        }
    }
    return Struct_4(select(select(vec2<bool>(global1[_wgslsmith_index_u32(62814u, 19u)], all(vec3<bool>(false, true, global1[_wgslsmith_index_u32(52392u, 19u)]))), !(!vec2<bool>(global1[_wgslsmith_index_u32(u_input.e.x, 19u)], true)), vec2<bool>(true, true)), select(select(!vec2<bool>(global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(arg_2.x, 14u)], 14u)], 19u)], global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(arg_2.x, 14u)], 19u)]), select(vec2<bool>(global1[_wgslsmith_index_u32(156065u, 19u)], true), vec2<bool>(true, true), true), false), !(!vec2<bool>(false, global1[_wgslsmith_index_u32(arg_2.x, 19u)])), !global1[_wgslsmith_index_u32(~arg_1, 19u)]), !select(vec2<bool>(false, true), vec2<bool>(global1[_wgslsmith_index_u32(4294967295u, 19u)], global1[_wgslsmith_index_u32(arg_0.x, 19u)]), global1[_wgslsmith_index_u32(min(arg_2.x, arg_0.x), 19u)])), Struct_3(Struct_2(func_6(Struct_4(vec2<bool>(global1[_wgslsmith_index_u32(66386u, 19u)], false), Struct_3(Struct_2(true, Struct_1(-1132f, true, u_input.e, vec4<f32>(-1524f, -1540f, -780f, -965f), u_input.d), 985f, Struct_1(1407f, false, vec4<u32>(arg_0.x, arg_1, 49982u, arg_1), vec4<f32>(369f, -994f, -1061f, -253f), vec3<i32>(67098i, 1462i, arg_3))), arg_0.x, false, global1[_wgslsmith_index_u32(4294967295u, 19u)], 55183i), u_input.d.xx)), Struct_1(_wgslsmith_f_op_f32(-2466f * -950f), -1i > u_input.d.x, firstTrailingBit(u_input.e), _wgslsmith_f_op_vec4_f32(max(vec4<f32>(1340f, -266f, -402f, -613f), vec4<f32>(-1593f, -1549f, -657f, 750f))), _wgslsmith_mod_vec3_i32(u_input.d, vec3<i32>(18336i, -30855i, u_input.d.x))), -2009f, Struct_1(1f, func_6(Struct_4(vec2<bool>(global1[_wgslsmith_index_u32(arg_2.x, 19u)], true), Struct_3(Struct_2(global1[_wgslsmith_index_u32(19186u, 19u)], Struct_1(-250f, global1[_wgslsmith_index_u32(0u, 19u)], vec4<u32>(1u, 54504u, 54984u, arg_1), vec4<f32>(244f, 1000f, -296f, 174f), u_input.d), 757f, Struct_1(-343f, global1[_wgslsmith_index_u32(52048u, 19u)], vec4<u32>(96982u, 32440u, 61663u, u_input.e.x), vec4<f32>(298f, -291f, -1311f, 1088f), u_input.d)), 43068u, global1[_wgslsmith_index_u32(u_input.a, 19u)], false, -25150i), vec2<i32>(u_input.d.x, 30165i))), vec4<u32>(arg_2.x, arg_0.x, 3497u, arg_2.x), _wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(-740f, -1162f, 697f, -1037f))), select(u_input.d, vec3<i32>(arg_3, i32(-2147483648), -14758i), false))), ~1u, !global1[_wgslsmith_index_u32(abs(0u), 19u)], all(select(vec2<bool>(false, true), vec2<bool>(true, true), !vec2<bool>(global1[_wgslsmith_index_u32(u_input.a, 19u)], global1[_wgslsmith_index_u32(90672u, 19u)]))), -(~u_input.d.x)), firstLeadingBit(vec2<i32>(-firstLeadingBit(u_input.d.x), firstLeadingBit(~(-38143i)))));
}

fn func_3(arg_0: u32, arg_1: bool, arg_2: u32, arg_3: Struct_4) -> u32 {
    let var_0 = func_4(reverseBits(_wgslsmith_mod_vec3_u32(_wgslsmith_add_vec3_u32(vec3<u32>(35907u, global0[_wgslsmith_index_u32(arg_3.b.a.d.c.x, 14u)], 14679u), arg_3.b.a.b.c.zwz) << (abs(vec3<u32>(u_input.b, 21624u, global0[_wgslsmith_index_u32(arg_0, 14u)])) % vec3<u32>(32u)), u_input.e.xxz)), _wgslsmith_mult_u32(~arg_0, arg_0), select(vec4<u32>(arg_2, 6822u, ~arg_3.b.b, arg_3.b.b) ^ min(vec4<u32>(u_input.e.x, arg_3.b.a.d.c.x, 47127u, 1u), vec4<u32>(13418u, u_input.b, global0[_wgslsmith_index_u32(1u, 14u)], 0u)), ~(~vec4<u32>(8177u, 42583u, 75267u, 61584u)), vec4<bool>(false, true, all(vec2<bool>(arg_1, false)), true)), abs(arg_3.b.a.b.e.x));
    global1 = array<bool, 19>();
    var var_1 = Struct_1(arg_3.b.a.b.d.x, !global1[_wgslsmith_index_u32(4294967295u, 19u)] & all(var_0.a), vec4<u32>(4294967295u, _wgslsmith_dot_vec4_u32(~var_0.b.a.d.c, abs(abs(vec4<u32>(arg_2, 77080u, 4294967295u, 1u)))), countOneBits(_wgslsmith_mult_u32(firstLeadingBit(50405u), arg_3.b.b)), ~27039u), vec4<f32>(230f, func_4(vec3<u32>(u_input.b, 71351u, _wgslsmith_clamp_u32(global0[_wgslsmith_index_u32(0u, 14u)], 0u, var_0.b.b)), ~(1u << (0u % 32u)), func_4(_wgslsmith_sub_vec3_u32(arg_3.b.a.b.c.wyz, vec3<u32>(var_0.b.b, 54222u, 18018u)), 0u, ~var_0.b.a.b.c, select(1i, 2147483647i, var_0.a.x)).b.a.d.c, ~0i).b.a.d.a, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(var_0.b.a.c + _wgslsmith_f_op_f32(f32(-1f) * -399f))), _wgslsmith_f_op_f32(arg_3.b.a.d.d.x - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_3.b.a.d.d.x) - -917f))), vec3<i32>(-6313i, _wgslsmith_sub_i32(1i, arg_3.b.e), arg_3.b.e));
    var_1 = Struct_1(var_0.b.a.d.d.x, select(var_1.b, global1[_wgslsmith_index_u32(4294967295u, 19u)] || !arg_1, all(vec3<bool>(var_0.b.c, false, arg_3.a.x))) | func_6(func_4(countOneBits(var_0.b.a.b.c.yww), ~arg_0, vec4<u32>(1u, global0[_wgslsmith_index_u32(41683u, 14u)], 57717u, arg_0), _wgslsmith_clamp_i32(-1i, arg_3.c.x, 32744i))), func_4(vec3<u32>(arg_0, 1u, 8038u), 4294967295u, firstTrailingBit(countOneBits(firstLeadingBit(arg_3.b.a.b.c))), 43051i).b.a.b.c, _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(vec4<f32>(-1000f, var_0.b.a.b.a, var_1.d.x, -395f) * var_1.d))) * vec4<f32>(_wgslsmith_div_f32(684f, 1918f), 902f, arg_3.b.a.b.a, _wgslsmith_f_op_f32(-var_1.a))) + func_4(~(~var_0.b.a.b.c.wyz), ~1u, ~firstTrailingBit(vec4<u32>(5319u, 1u, 0u, var_1.c.x)), func_4(vec3<u32>(arg_0, 1u, 33745u), 13135u << (u_input.e.x % 32u), countOneBits(vec4<u32>(4294967295u, 1u, arg_3.b.b, arg_3.b.a.d.c.x)), arg_3.b.a.d.e.x).b.a.b.e.x).b.a.b.d), ~vec3<i32>(_wgslsmith_clamp_i32(select(var_0.b.e, 1i, arg_1), ~arg_3.b.a.b.e.x, i32(-2147483648)), 1i, max(-1i, ~var_1.e.x)));
    let var_2 = func_4(~(_wgslsmith_mod_vec3_u32(_wgslsmith_mult_vec3_u32(vec3<u32>(1u, 4294967295u, arg_3.b.a.d.c.x), vec3<u32>(0u, arg_0, arg_2)), vec3<u32>(arg_2, var_0.b.b, 0u)) << (~(~u_input.e.yxy) % vec3<u32>(32u))), arg_0, u_input.e, 53030i).b.a.b;
    return max(arg_0, arg_0);
}

fn func_7(arg_0: f32, arg_1: u32, arg_2: Struct_4) -> Struct_2 {
    global1 = array<bool, 19>();
    if (global1[_wgslsmith_index_u32(_wgslsmith_add_u32(~(~_wgslsmith_mult_u32(~arg_2.b.b, u_input.b)), ~47432u), 19u)]) {
    }
    global0 = array<u32, 14>();
    for (var var_0 = -43742i; var_0 < -1i; var_0 += 1i) {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        switch (arg_2.b.e) {
            case 6107i: {
                return arg_2.b.a;
            }
            case 8026i: {
                let var_1 = _wgslsmith_f_op_vec2_f32(exp2(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(arg_2.b.a.b.d.yx - vec2<f32>(283f, arg_0))))))));
                let var_2 = ~_wgslsmith_clamp_vec3_u32(u_input.e.wzw ^ _wgslsmith_clamp_vec3_u32(u_input.e.yyz, ~vec3<u32>(arg_1, 25950u, 8429u), vec3<u32>(61951u, u_input.c.x, 0u)), u_input.e.zyx, u_input.e.zzw);
                global0 = array<u32, 14>();
                let var_3 = 1i;
            }
            default: {
                let var_1 = arg_2.b.b;
                global1 = array<bool, 19>();
                continue;
            }
        }
        return Struct_2(any(vec2<bool>(true, global1[_wgslsmith_index_u32(_wgslsmith_dot_vec3_u32(vec3<u32>(87433u, arg_2.b.a.b.c.x, 0u), u_input.e.xzw) >> (~0u % 32u), 19u)])), Struct_1(_wgslsmith_f_op_f32(-202f + -535f), !any(vec4<bool>(false, true, global1[_wgslsmith_index_u32(u_input.b, 19u)], false)), vec4<u32>(global0[_wgslsmith_index_u32(~arg_1 | 1u, 14u)], 49641u, ~(~global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(9163u, 14u)], 14u)]), ~arg_2.b.a.d.c.x >> (_wgslsmith_div_u32(global0[_wgslsmith_index_u32(29278u, 14u)], 52691u) % 32u)), vec4<f32>(-798f, arg_0, _wgslsmith_f_op_f32(1391f - _wgslsmith_f_op_f32(f32(-1f) * -169f)), 1000f), _wgslsmith_sub_vec3_i32(u_input.d, min(vec3<i32>(arg_2.b.a.b.e.x, 7536i, -1i) >> (u_input.e.xyx % vec3<u32>(32u)), select(u_input.d, u_input.d, vec3<bool>(false, arg_2.b.a.b.b, global1[_wgslsmith_index_u32(2544u, 19u)]))))), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(f32(-1f) * -193f))), arg_2.b.a.b);
    }
    for (var var_0 = i32(-2147483648); -527f >= _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(abs(arg_2.b.a.d.a)))) + 1724f), arg_2.b.a.b.d.x)); global1 = array<bool, 19>()) {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        continue;
    }
    return Struct_2(!((_wgslsmith_f_op_f32(-arg_0) < _wgslsmith_f_op_f32(-1026f)) && any(select(vec4<bool>(true, global1[_wgslsmith_index_u32(arg_1, 19u)], false, true), vec4<bool>(true, true, true, false), vec4<bool>(arg_2.a.x, arg_2.a.x, arg_2.a.x, arg_2.a.x)))), Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(abs(1362f)), _wgslsmith_f_op_f32(-1247f - -1000f)))), any(select(arg_2.a, select(vec2<bool>(true, global1[_wgslsmith_index_u32(arg_1, 19u)]), vec2<bool>(false, false), false), global1[_wgslsmith_index_u32(_wgslsmith_mod_u32(global0[_wgslsmith_index_u32(19791u, 14u)], u_input.e.x), 19u)])), select(arg_2.b.a.d.c, arg_2.b.a.b.c, !global1[_wgslsmith_index_u32(func_4(vec3<u32>(13526u, 4294967295u, arg_2.b.b), 4294967295u, vec4<u32>(arg_1, u_input.b, arg_2.b.a.b.c.x, u_input.c.x), u_input.d.x).b.b, 19u)]), vec4<f32>(arg_2.b.a.c, arg_2.b.a.d.a, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1048f)), arg_2.b.a.d.d.x), firstLeadingBit(vec3<i32>(_wgslsmith_mod_i32(-17657i, -8434i), 40770i, 2147483647i))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(143f + arg_0), _wgslsmith_f_op_f32(abs(arg_2.b.a.c)))) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_2.b.a.c))) - _wgslsmith_div_f32(_wgslsmith_f_op_f32(max(arg_2.b.a.c, _wgslsmith_f_op_f32(step(110f, 1121f)))), arg_0)), func_4(abs(u_input.e.zxy), countOneBits(arg_2.b.b), _wgslsmith_mult_vec4_u32(~_wgslsmith_div_vec4_u32(vec4<u32>(76295u, u_input.a, 3138u, arg_1), u_input.e), vec4<u32>(_wgslsmith_clamp_u32(15357u, arg_2.b.a.b.c.x, arg_1), max(global0[_wgslsmith_index_u32(u_input.c.x, 14u)], arg_1), global0[_wgslsmith_index_u32(_wgslsmith_dot_vec2_u32(arg_2.b.a.d.c.yx, arg_2.b.a.b.c.wx), 14u)], _wgslsmith_clamp_u32(1u, 0u, 0u))), abs(20913i)).b.a.b);
}

fn func_8(arg_0: f32, arg_1: Struct_2) -> Struct_3 {
    loop {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        global1 = array<bool, 19>();
        var var_0 = select(vec3<bool>(arg_1.d.b, global1[_wgslsmith_index_u32(func_3(_wgslsmith_mod_u32(u_input.a, 31235u), func_4(arg_1.d.c.xyw, 4294967295u, vec4<u32>(arg_1.d.c.x, u_input.e.x, 8405u, 0u), -4034i).a.x, global0[_wgslsmith_index_u32(0u, 14u)], Struct_4(vec2<bool>(true, arg_1.d.b), Struct_3(Struct_2(global1[_wgslsmith_index_u32(arg_1.b.c.x, 19u)], arg_1.b, arg_1.c, arg_1.b), 13437u, arg_1.a, global1[_wgslsmith_index_u32(arg_1.b.c.x, 19u)], u_input.d.x), vec2<i32>(-2572i, 37099i))) << ((global0[_wgslsmith_index_u32(min(3063u, global0[_wgslsmith_index_u32(1u, 14u)]), 14u)] >> (arg_1.b.c.x % 32u)) % 32u), 19u)], any(!select(vec3<bool>(global1[_wgslsmith_index_u32(97411u, 19u)], arg_1.b.b, false), vec3<bool>(global1[_wgslsmith_index_u32(arg_1.d.c.x, 19u)], arg_1.b.b, true), vec3<bool>(false, false, true)))), vec3<bool>(false, arg_1.b.b, arg_1.b.b), true | !(_wgslsmith_add_i32(u_input.d.x, arg_1.b.e.x) >= arg_1.d.e.x));
        loop {
            if (LOOP_COUNTERS[11u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
            global0 = array<u32, 14>();
            var var_1 = func_4(_wgslsmith_mult_vec3_u32(~countOneBits(_wgslsmith_div_vec3_u32(u_input.e.wzz, arg_1.d.c.xww)), vec3<u32>(u_input.a, 4294967295u >> (~global0[_wgslsmith_index_u32(13713u, 14u)] % 32u), ~_wgslsmith_add_u32(u_input.e.x, 1u))), global0[_wgslsmith_index_u32(61965u, 14u)], ~vec4<u32>(_wgslsmith_add_u32(_wgslsmith_dot_vec2_u32(vec2<u32>(u_input.e.x, arg_1.d.c.x), arg_1.d.c.wz), 18262u), 1u, ~_wgslsmith_sub_u32(4790u, u_input.b), _wgslsmith_mod_u32(func_4(arg_1.b.c.yxx, u_input.b, arg_1.b.c, -59591i).b.b, arg_1.d.c.x)), -(i32(-1i) * -abs(u_input.d.x))).b;
            let var_2 = func_4(vec3<u32>(firstTrailingBit(u_input.c.x), global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.e.x, 14u)], 14u)], 0u), reverseBits(_wgslsmith_mult_u32(~61888u, _wgslsmith_mult_u32(arg_1.d.c.x, _wgslsmith_add_u32(arg_1.d.c.x, 4294967295u)))), ~(~(~vec4<u32>(var_1.b, var_1.a.d.c.x, 39188u, arg_1.d.c.x))) & u_input.e, -36235i);
        }
        break;
    }
    global1 = array<bool, 19>();
    switch (u_input.d.x) {
        case -1i: {
            loop {
                if (LOOP_COUNTERS[12u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
                global1 = array<bool, 19>();
                continue;
            }
            global1 = array<bool, 19>();
        }
        case -30750i: {
            loop {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                continue;
            }
            loop {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                let var_0 = global1[_wgslsmith_index_u32(61698u << (_wgslsmith_mod_u32(_wgslsmith_dot_vec2_u32(func_7(_wgslsmith_f_op_f32(ceil(arg_1.b.a)), global0[_wgslsmith_index_u32(_wgslsmith_dot_vec3_u32(u_input.e.wxw, vec3<u32>(u_input.c.x, 0u, arg_1.b.c.x)), 14u)], func_4(vec3<u32>(arg_1.b.c.x, 54240u, arg_1.b.c.x), 75049u, vec4<u32>(u_input.a, 39698u, 0u, global0[_wgslsmith_index_u32(arg_1.d.c.x, 14u)]), -25969i)).b.c.xz, arg_1.b.c.zy), 0u) % 32u), 19u)];
            }
        }
        case -13324i: {
            for (var var_0 = 18815i; all(vec2<bool>(func_7(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1094f - 495f)), u_input.c.x, Struct_4(vec2<bool>(arg_1.a, true), Struct_3(Struct_2(global1[_wgslsmith_index_u32(u_input.b, 19u)], Struct_1(arg_1.d.a, global1[_wgslsmith_index_u32(4294967295u, 19u)], vec4<u32>(arg_1.b.c.x, 4294967295u, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(4294967295u, 14u)], 14u)], 14u)], arg_1.d.c.x), arg_1.d.d, u_input.d), 1622f, arg_1.d), 1u, true, global1[_wgslsmith_index_u32(u_input.e.x, 19u)], 2147483647i), _wgslsmith_div_vec2_i32(vec2<i32>(u_input.d.x, 0i), arg_1.b.e.zz))).d.b, any(!select(vec4<bool>(arg_1.a, true, global1[_wgslsmith_index_u32(arg_1.b.c.x, 19u)], false), vec4<bool>(false, true, false, arg_1.b.b), vec4<bool>(global1[_wgslsmith_index_u32(21938u, 19u)], global1[_wgslsmith_index_u32(4294967295u, 19u)], true, arg_1.d.b))))); ) {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
                break;
            }
        }
        case 1i: {
            global1 = array<bool, 19>();
            if (false) {
            }
            for (var var_0 = -23490i; ; var_0 += 1i) {
                if (LOOP_COUNTERS[16u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
            }
        }
        default: {
            for (var var_0 = _wgslsmith_sub_i32(82304i << (global0[_wgslsmith_index_u32(_wgslsmith_clamp_u32(~84853u, global0[_wgslsmith_index_u32(_wgslsmith_mod_u32(global0[_wgslsmith_index_u32(1u, 14u)], ~global0[_wgslsmith_index_u32(u_input.b, 14u)]), 14u)], abs(~22600u)), 14u)] % 32u), u_input.d.x); any(!select(vec3<bool>(true, arg_1.d.b, arg_1.b.b | arg_1.a), select(!vec3<bool>(arg_1.a, true, global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(1u, 14u)], 19u)]), select(vec3<bool>(global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.b, 14u)], 19u)], arg_1.a, false), vec3<bool>(true, false, arg_1.d.b), vec3<bool>(true, global1[_wgslsmith_index_u32(u_input.a, 19u)], arg_1.b.b)), !vec3<bool>(global1[_wgslsmith_index_u32(31729u, 19u)], false, false)), true)); var_0 += 1i) {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                continue;
            }
            let var_0 = Struct_1(_wgslsmith_f_op_f32(arg_0 + _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-1549f)))), arg_1.b.b, vec4<u32>(abs(36976u), _wgslsmith_mult_u32(countOneBits(9226u), _wgslsmith_mult_u32(_wgslsmith_div_u32(4294967295u, 4294967295u), func_3(13579u, true, arg_1.d.c.x, Struct_4(vec2<bool>(false, arg_1.b.b), Struct_3(arg_1, 32501u, global1[_wgslsmith_index_u32(0u, 19u)], false, arg_1.d.e.x), arg_1.d.e.xx)))), ~54708u, 0u), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(arg_1.d.d + vec4<f32>(arg_1.b.d.x, arg_0, arg_0, -1901f)) * _wgslsmith_div_vec4_f32(arg_1.b.d, vec4<f32>(arg_1.c, arg_1.d.a, arg_0, -1000f))) * vec4<f32>(arg_1.d.d.x, _wgslsmith_f_op_f32(sign(-1922f)), _wgslsmith_f_op_f32(-arg_1.c), _wgslsmith_f_op_f32(arg_0 - arg_0))) + vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0)), _wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -1631f), arg_1.b.d.x), arg_0, arg_1.b.a)), func_7(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(-arg_0), _wgslsmith_f_op_f32(exp2(arg_0)))), ~_wgslsmith_sub_u32(_wgslsmith_mult_u32(28220u, arg_1.d.c.x), 74154u), func_4(func_7(_wgslsmith_f_op_f32(-2219f), 4294967295u, func_4(arg_1.b.c.wzy, 4294967295u, vec4<u32>(0u, 33531u, 0u, arg_1.d.c.x), 2147483647i)).d.c.xzz, u_input.b, vec4<u32>(arg_1.b.c.x | 18466u, arg_1.d.c.x, ~u_input.a, func_3(arg_1.d.c.x, global1[_wgslsmith_index_u32(u_input.a, 19u)], arg_1.d.c.x, Struct_4(vec2<bool>(false, true), Struct_3(arg_1, arg_1.b.c.x, global1[_wgslsmith_index_u32(u_input.e.x, 19u)], true, -1i), vec2<i32>(u_input.d.x, u_input.d.x)))), u_input.d.x)).d.e);
            let var_1 = arg_1.b.c.x;
            if (_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(select(arg_0, _wgslsmith_f_op_f32(max(arg_1.b.d.x, 667f)), any(vec2<bool>(false, true))))))) <= _wgslsmith_f_op_f32(_wgslsmith_div_f32(1772f, -109f) - _wgslsmith_f_op_f32(-327f))) {
                var var_2 = Struct_4(select(vec2<bool>(var_0.b, true), !vec2<bool>(true, arg_1.a), select(!func_4(vec3<u32>(4294967295u, 1u, var_1), 1669u, vec4<u32>(var_0.c.x, 17101u, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(var_1, 14u)], 14u)], var_0.c.x), var_0.e.x).a, select(vec2<bool>(arg_1.a, true), vec2<bool>(true, false), vec2<bool>(false, false)), false)), func_4(arg_1.b.c.yyx & (_wgslsmith_add_vec3_u32(u_input.e.zzx, vec3<u32>(global0[_wgslsmith_index_u32(1u, 14u)], global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(0u, 14u)], 14u)], u_input.c.x)) ^ ~vec3<u32>(0u, 4294967295u, arg_1.b.c.x)), var_0.c.x, ~u_input.e, -1i).b, ~vec2<i32>(arg_1.d.e.x, _wgslsmith_dot_vec4_i32(vec4<i32>(2483i, -27974i, u_input.d.x, 15273i) ^ vec4<i32>(u_input.d.x, -21717i, 1i, -1i), vec4<i32>(arg_1.b.e.x, u_input.d.x, -21020i, 20812i))));
                var_2 = func_4(select(~(~vec3<u32>(0u, 0u, global0[_wgslsmith_index_u32(var_1, 14u)])), var_0.c.xzy, !all(vec4<bool>(false, true, false, true))) >> (((vec3<u32>(4294967295u, 4564u, 79926u) ^ _wgslsmith_add_vec3_u32(var_2.b.a.d.c.xwz, arg_1.d.c.wzz)) & (vec3<u32>(0u, arg_1.d.c.x, 17050u) & vec3<u32>(global0[_wgslsmith_index_u32(34525u, 14u)], var_0.c.x, var_0.c.x))) % vec3<u32>(32u)), _wgslsmith_clamp_u32(~(~var_0.c.x), ~1u, var_0.c.x) | ~firstLeadingBit(u_input.c.x), countOneBits(firstLeadingBit(vec4<u32>(global0[_wgslsmith_index_u32(arg_1.d.c.x, 14u)], max(u_input.c.x, u_input.c.x), _wgslsmith_dot_vec3_u32(u_input.e.xwz, u_input.e.ywx), arg_1.b.c.x))), arg_1.d.e.x);
                var var_3 = ~var_0.e.x << (~(~(~var_0.c.x)) % 32u);
                let var_4 = 1954f;
            }
            if (func_7(672f, ~46145u >> (func_4(u_input.e.yyz, max(_wgslsmith_dot_vec3_u32(u_input.e.xyy, var_0.c.xyy), _wgslsmith_mod_u32(1496u, 21935u)), vec4<u32>(_wgslsmith_add_u32(global0[_wgslsmith_index_u32(78258u, 14u)], global0[_wgslsmith_index_u32(arg_1.d.c.x, 14u)]), var_1, global0[_wgslsmith_index_u32(4294967295u, 14u)], min(var_1, 53480u)), u_input.d.x).b.a.b.c.x % 32u), Struct_4(!func_4(vec3<u32>(1u, var_1, 0u), global0[_wgslsmith_index_u32(var_0.c.x, 14u)], arg_1.b.c, max(u_input.d.x, -35i)).a, Struct_3(func_7(arg_0, ~var_0.c.x, func_4(var_0.c.wyw, var_1, arg_1.d.c, var_0.e.x)), u_input.c.x, all(select(vec2<bool>(true, false), vec2<bool>(global1[_wgslsmith_index_u32(953u, 19u)], false), global1[_wgslsmith_index_u32(1u, 19u)])), !func_7(arg_0, 62015u, Struct_4(vec2<bool>(var_0.b, global1[_wgslsmith_index_u32(4294967295u, 19u)]), Struct_3(Struct_2(arg_1.a, arg_1.b, -1200f, Struct_1(1372f, global1[_wgslsmith_index_u32(var_0.c.x, 19u)], vec4<u32>(u_input.e.x, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(arg_1.b.c.x, 14u)], 14u)], var_0.c.x, var_0.c.x), var_0.d, vec3<i32>(-4288i, var_0.e.x, 15552i))), var_0.c.x, global1[_wgslsmith_index_u32(arg_1.b.c.x, 19u)], false, 0i), u_input.d.zz)).b.b, u_input.d.x), _wgslsmith_sub_vec2_i32(-arg_1.d.e.yz, reverseBits(arg_1.d.e.xy)) >> (~arg_1.d.c.xw % vec2<u32>(32u)))).d.b) {
                var var_2 = func_4(select(var_0.c.wwz, vec3<u32>(~arg_1.b.c.x, _wgslsmith_mult_u32(var_1, 4294967295u), _wgslsmith_mult_u32(max(global0[_wgslsmith_index_u32(var_1, 14u)], 41027u), var_1 >> (1u % 32u))), select(!select(vec3<bool>(true, false, false), vec3<bool>(true, true, false), arg_1.d.b), vec3<bool>(true, false, true), vec3<bool>(!var_0.b, all(vec4<bool>(true, false, false, arg_1.a)), var_0.b))), u_input.e.x, var_0.c, -_wgslsmith_div_i32(-49504i, _wgslsmith_mult_i32(_wgslsmith_mult_i32(u_input.d.x, arg_1.b.e.x), u_input.d.x))).b.a.d.e.xy;
                var var_3 = Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_0.a)), global1[_wgslsmith_index_u32(~abs(~4294967295u), 19u)], _wgslsmith_clamp_vec4_u32(var_0.c, func_7(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(f32(-1f) * -286f))), 1u, Struct_4(vec2<bool>(true, true), func_4(var_0.c.xzx, var_0.c.x, vec4<u32>(global0[_wgslsmith_index_u32(var_0.c.x, 14u)], 4294967295u, 7603u, 16321u), -49573i).b, var_0.e.xy)).d.c, abs(select(var_0.c, vec4<u32>(var_1, u_input.c.x, 23369u, arg_1.b.c.x), var_0.b))), _wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(-1671f, var_0.d.x, -433f, 1000f)))))))), _wgslsmith_mod_vec3_i32(-(~select(vec3<i32>(var_2.x, 2147483647i, var_0.e.x), arg_1.d.e, vec3<bool>(false, global1[_wgslsmith_index_u32(22953u, 19u)], false))), vec3<i32>(-_wgslsmith_dot_vec3_i32(u_input.d, vec3<i32>(16762i, arg_1.d.e.x, var_2.x)), var_0.e.x, ~(-u_input.d.x))));
                var var_4 = func_4(vec3<u32>(0u, var_0.c.x, countOneBits(_wgslsmith_mod_u32(var_3.c.x, ~4294967295u))), _wgslsmith_add_u32(var_3.c.x, _wgslsmith_add_u32(global0[_wgslsmith_index_u32(_wgslsmith_dot_vec2_u32(~arg_1.b.c.zx, arg_1.d.c.zx), 14u)], min(~5816u, 74839u))), var_0.c, -49765i).b;
                var var_5 = !(!(!func_4(var_3.c.xzy, 1u, ~vec4<u32>(65402u, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(0u, 14u)], 14u)], 0u, var_4.b), _wgslsmith_dot_vec4_i32(vec4<i32>(arg_1.b.e.x, var_2.x, var_4.e, var_2.x), vec4<i32>(var_2.x, var_3.e.x, var_2.x, u_input.d.x))).a));
                return Struct_3(var_4.a, 1u, any(func_4(var_0.c.yzy | vec3<u32>(u_input.b, 68324u, 1u), 0u, select(vec4<u32>(0u, 4294967295u, global0[_wgslsmith_index_u32(58532u, 14u)], 0u), vec4<u32>(0u, var_3.c.x, var_4.a.b.c.x, 64390u), vec4<bool>(true, var_3.b, true, true)), _wgslsmith_mod_i32(var_0.e.x, arg_1.b.e.x)).a) || var_0.b, true, select(-50330i << (_wgslsmith_div_u32(~1u, 4294967295u) % 32u), -38595i, (-129f >= _wgslsmith_f_op_f32(step(1625f, var_4.a.c))) != var_5.x));
            }
        }
    }
    if (func_4(vec3<u32>(1u, func_3(_wgslsmith_add_u32(global0[_wgslsmith_index_u32(1u, 14u)], 65678u), func_4(reverseBits(vec3<u32>(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(arg_1.b.c.x, 14u)], 14u)], u_input.a, global0[_wgslsmith_index_u32(86193u, 14u)])), reverseBits(21375u), func_4(vec3<u32>(u_input.e.x, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.b, 14u)], 14u)], global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(1u, 14u)], 14u)], 14u)]), 0u, vec4<u32>(0u, global0[_wgslsmith_index_u32(10012u, 14u)], global0[_wgslsmith_index_u32(arg_1.d.c.x, 14u)], global0[_wgslsmith_index_u32(4294967295u, 14u)]), u_input.d.x).b.a.b.c, abs(u_input.d.x)).a.x, 0u, Struct_4(select(vec2<bool>(false, global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(0u, 14u)], 19u)]), vec2<bool>(false, arg_1.d.b), vec2<bool>(arg_1.b.b, global1[_wgslsmith_index_u32(u_input.e.x, 19u)])), func_4(vec3<u32>(7383u, 82972u, 0u), global0[_wgslsmith_index_u32(4294967295u, 14u)], vec4<u32>(11426u, 26606u, arg_1.b.c.x, 4294967295u), arg_1.b.e.x).b, func_4(arg_1.d.c.xww, arg_1.b.c.x, vec4<u32>(global0[_wgslsmith_index_u32(1u, 14u)], global0[_wgslsmith_index_u32(29820u, 14u)], 17750u, arg_1.d.c.x), arg_1.d.e.x).b.a.d.e.zx)), ~4294967295u), _wgslsmith_div_u32(func_3(~1347u, all(vec4<bool>(true, true, true, true)), _wgslsmith_add_u32(reverseBits(arg_1.b.c.x), 0u), Struct_4(select(vec2<bool>(false, true), vec2<bool>(true, true), global1[_wgslsmith_index_u32(u_input.a, 19u)]), func_4(u_input.e.yww, global0[_wgslsmith_index_u32(22126u, 14u)], u_input.e, u_input.d.x).b, _wgslsmith_mult_vec2_i32(vec2<i32>(arg_1.d.e.x, arg_1.b.e.x), u_input.d.yx))), 24415u), vec4<u32>(global0[_wgslsmith_index_u32(_wgslsmith_sub_u32(_wgslsmith_dot_vec2_u32(vec2<u32>(4294967295u, arg_1.b.c.x), vec2<u32>(global0[_wgslsmith_index_u32(arg_1.b.c.x, 14u)], 38985u)) | arg_1.b.c.x, 0u), 14u)], 52891u, _wgslsmith_add_u32(1u & _wgslsmith_div_u32(17551u, u_input.c.x), ~func_4(arg_1.d.c.zzw, arg_1.b.c.x, vec4<u32>(1u, 35180u, arg_1.d.c.x, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a, 14u)], 14u)]), 0i).b.a.b.c.x), ~(~1u)), -47909i >> (_wgslsmith_mult_u32(countOneBits(53233u), countOneBits(min(4294967295u, arg_1.b.c.x))) % 32u)).a.x) {
    }
    var var_0 = _wgslsmith_clamp_i32(abs(-9878i), 2147483647i, u_input.d.x);
    return Struct_3(func_4(select(_wgslsmith_mult_vec3_u32(u_input.e.yyz, u_input.e.zzw), firstTrailingBit(_wgslsmith_add_vec3_u32(vec3<u32>(global0[_wgslsmith_index_u32(4294967295u, 14u)], 0u, 0u), vec3<u32>(global0[_wgslsmith_index_u32(4294967295u, 14u)], global0[_wgslsmith_index_u32(u_input.a, 14u)], 0u))), !(false & arg_1.a)), global0[_wgslsmith_index_u32(4294967295u, 14u)], vec4<u32>(~(~global0[_wgslsmith_index_u32(11057u, 14u)]), global0[_wgslsmith_index_u32(_wgslsmith_div_u32(28605u, func_7(arg_1.c, 0u, Struct_4(vec2<bool>(false, true), Struct_3(arg_1, 4294967295u, false, global1[_wgslsmith_index_u32(0u, 19u)], u_input.d.x), arg_1.d.e.xx)).b.c.x), 14u)], func_5(func_4(u_input.e.wyy, u_input.b, vec4<u32>(1u, 90338u, global0[_wgslsmith_index_u32(30835u, 14u)], 9490u), 1i), Struct_4(vec2<bool>(false, global1[_wgslsmith_index_u32(arg_1.b.c.x, 19u)]), Struct_3(arg_1, u_input.c.x, false, false, u_input.d.x), vec2<i32>(i32(-2147483648), 2147483647i))), 18241u), -(~(-2147483647i))).b.a, ~44957u, any(vec4<bool>(any(select(vec3<bool>(false, global1[_wgslsmith_index_u32(0u, 19u)], true), vec3<bool>(global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a, 14u)], 19u)], global1[_wgslsmith_index_u32(arg_1.b.c.x, 19u)], false), false)), true, arg_1.d.b, arg_1.a)), any(vec4<bool>(global1[_wgslsmith_index_u32(arg_1.b.c.x, 19u)], true, arg_1.a, _wgslsmith_f_op_f32(arg_0 - 745f) <= _wgslsmith_f_op_f32(1158f * arg_1.d.a))), -1i);
}

fn func_2(arg_0: vec2<bool>) -> vec4<u32> {
    let var_0 = 40662i;
    let var_1 = Struct_4(vec2<bool>(arg_0.x, true), func_8(295f, func_7(1f, ~func_3(109963u, false, 44820u, Struct_4(vec2<bool>(false, false), Struct_3(Struct_2(arg_0.x, Struct_1(-1227f, false, u_input.e, vec4<f32>(2277f, -553f, -1054f, -1284f), u_input.d), 861f, Struct_1(-1265f, global1[_wgslsmith_index_u32(19684u, 19u)], vec4<u32>(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(15494u, 14u)], 14u)], 1267u, global0[_wgslsmith_index_u32(92972u, 14u)], 0u), vec4<f32>(1088f, -868f, 205f, -815f), u_input.d)), u_input.a, global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(0u, 14u)], 19u)], arg_0.x, 2147483647i), vec2<i32>(1i, var_0))), func_4(u_input.e.zzy, abs(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(63995u, 14u)], 14u)]), u_input.e, ~u_input.d.x))), (_wgslsmith_div_vec2_i32(vec2<i32>(u_input.d.x, var_0), ~vec2<i32>(2147483647i, u_input.d.x)) << (_wgslsmith_sub_vec2_u32(_wgslsmith_mod_vec2_u32(vec2<u32>(0u, u_input.e.x), vec2<u32>(5477u, 1u)), u_input.c) % vec2<u32>(32u))) & (u_input.d.xz & _wgslsmith_mod_vec2_i32(u_input.d.yy, ~u_input.d.yz)));
    if (all(vec3<bool>(any(vec4<bool>(true, false, arg_0.x, arg_0.x)), !var_1.a.x, true))) {
        global0 = array<u32, 14>();
    }
    let var_2 = select(vec3<bool>(all(!(!vec4<bool>(arg_0.x, true, false, true))), func_5(func_4(var_1.b.a.d.c.wzz, 4294967295u, u_input.e, u_input.d.x), func_4(vec3<u32>(0u, 1u, 4294967295u), 10936u, vec4<u32>(0u, global0[_wgslsmith_index_u32(var_1.b.b, 14u)], var_1.b.a.b.c.x, 0u), var_1.c.x)) < (func_8(505f, var_1.b.a).b << (var_1.b.a.d.c.x % 32u)), func_6(Struct_4(vec2<bool>(arg_0.x, false), var_1.b, var_1.b.a.b.e.yx)) & func_4(u_input.e.wyw, ~var_1.b.b, u_input.e, var_1.c.x).a.x), select(select(!(!vec3<bool>(arg_0.x, true, false)), select(select(vec3<bool>(true, var_1.b.a.a, true), vec3<bool>(true, false, true), vec3<bool>(var_1.a.x, global1[_wgslsmith_index_u32(4294967295u, 19u)], true)), vec3<bool>(var_1.a.x, arg_0.x, var_1.a.x), select(vec3<bool>(true, global1[_wgslsmith_index_u32(4294967295u, 19u)], true), vec3<bool>(true, var_1.b.c, false), vec3<bool>(arg_0.x, false, arg_0.x))), select(select(vec3<bool>(true, arg_0.x, global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.e.x, 14u)], 19u)]), vec3<bool>(false, arg_0.x, global1[_wgslsmith_index_u32(var_1.b.b, 19u)]), vec3<bool>(true, true, global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(43626u, 14u)], 19u)])), select(vec3<bool>(false, var_1.a.x, arg_0.x), vec3<bool>(global1[_wgslsmith_index_u32(u_input.a, 19u)], false, false), vec3<bool>(false, var_1.a.x, var_1.b.d)), vec3<bool>(global1[_wgslsmith_index_u32(4294967295u, 19u)], var_1.b.a.d.b, true))), !(!(!vec3<bool>(var_1.a.x, false, true))), vec3<bool>(!global1[_wgslsmith_index_u32(_wgslsmith_div_u32(var_1.b.a.b.c.x, 1u), 19u)], global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.b ^ 4294967295u, 14u)] & select(u_input.b, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(32093u, 14u)], 14u)], false), 19u)], false)), vec3<bool>(true, _wgslsmith_add_u32(firstTrailingBit(global0[_wgslsmith_index_u32(0u, 14u)]), _wgslsmith_dot_vec3_u32(var_1.b.a.d.c.xzx, vec3<u32>(62036u, var_1.b.a.b.c.x, u_input.e.x))) >= firstTrailingBit(var_1.b.b), func_6(func_4(u_input.e.zzz, var_1.b.a.b.c.x, _wgslsmith_sub_vec4_u32(vec4<u32>(95487u, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(var_1.b.b, 14u)], 14u)], u_input.a, u_input.b), vec4<u32>(0u, 13864u, var_1.b.b, 0u)), u_input.d.x))));
    let var_3 = Struct_4(vec2<bool>(any(select(!vec4<bool>(var_2.x, arg_0.x, var_1.b.c, var_2.x), vec4<bool>(var_2.x, true, false, var_1.a.x), -182f >= var_1.b.a.b.a)), any(var_2)), var_1.b, u_input.d.xy);
    return _wgslsmith_div_vec4_u32(~vec4<u32>(func_3(17417u, false, 4294967295u, func_4(var_3.b.a.b.c.xyz, 20931u, var_1.b.a.b.c, var_0)), func_7(-598f, 1u, Struct_4(vec2<bool>(global1[_wgslsmith_index_u32(14843u, 19u)], var_1.a.x), Struct_3(Struct_2(true, var_3.b.a.b, var_1.b.a.d.a, Struct_1(var_3.b.a.b.a, true, u_input.e, vec4<f32>(var_1.b.a.c, 1820f, var_3.b.a.c, var_1.b.a.c), var_3.b.a.d.e)), global0[_wgslsmith_index_u32(4294967295u, 14u)], var_1.a.x, var_2.x, var_3.c.x), vec2<i32>(var_1.b.a.b.e.x, var_3.c.x))).d.c.x, 4294967295u, ~(~global0[_wgslsmith_index_u32(18995u, 14u)])), vec4<u32>(1u, ~32710u, ~var_1.b.b, u_input.a));
}

fn func_1() -> vec3<u32> {
    var var_0 = Struct_3(Struct_2(false, Struct_1(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(1379f - 402f))), !global1[_wgslsmith_index_u32(~23475u, 19u)], func_2(select(vec2<bool>(true, false), vec2<bool>(global1[_wgslsmith_index_u32(u_input.a, 19u)], true), global1[_wgslsmith_index_u32(u_input.e.x, 19u)])), vec4<f32>(-1085f, _wgslsmith_f_op_f32(-421f), _wgslsmith_f_op_f32(-272f + -157f), 1361f), func_8(-417f, Struct_2(global1[_wgslsmith_index_u32(61892u, 19u)], Struct_1(-307f, global1[_wgslsmith_index_u32(0u, 19u)], u_input.e, vec4<f32>(2420f, 1576f, 1199f, -1000f), vec3<i32>(5960i, u_input.d.x, u_input.d.x)), 771f, Struct_1(668f, global1[_wgslsmith_index_u32(78388u, 19u)], u_input.e, vec4<f32>(1030f, 1124f, 355f, 437f), vec3<i32>(u_input.d.x, u_input.d.x, 2147483647i)))).a.b.e | u_input.d), _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(1000f - func_8(614f, Struct_2(false, Struct_1(1000f, global1[_wgslsmith_index_u32(12726u, 19u)], u_input.e, vec4<f32>(-219f, -520f, 783f, -835f), u_input.d), 1249f, Struct_1(548f, global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.e.x, 14u)], 14u)], 19u)], u_input.e, vec4<f32>(-1594f, 958f, 1000f, -579f), u_input.d))).a.c))), func_4(_wgslsmith_mult_vec3_u32(u_input.e.yyy, u_input.e.zyy) >> ((u_input.e.wxy & u_input.e.zxx) % vec3<u32>(32u)), global0[_wgslsmith_index_u32(min(~global0[_wgslsmith_index_u32(u_input.e.x, 14u)], reverseBits(global0[_wgslsmith_index_u32(u_input.a, 14u)])), 14u)], u_input.e, -36096i).b.a.d), ~countOneBits(1u), func_7(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(311f)) - _wgslsmith_f_op_f32(-1504f))), _wgslsmith_mult_u32(~u_input.c.x, 12194u) >> (~u_input.b % 32u), Struct_4(select(vec2<bool>(true, global1[_wgslsmith_index_u32(u_input.a, 19u)]), !vec2<bool>(true, global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(0u, 14u)], 19u)]), global1[_wgslsmith_index_u32(u_input.a, 19u)]), Struct_3(Struct_2(global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a, 14u)], 19u)], Struct_1(867f, global1[_wgslsmith_index_u32(9907u, 19u)], vec4<u32>(global0[_wgslsmith_index_u32(52873u, 14u)], global0[_wgslsmith_index_u32(4294967295u, 14u)], global0[_wgslsmith_index_u32(36382u, 14u)], u_input.b), vec4<f32>(2116f, 1911f, -680f, -1000f), vec3<i32>(u_input.d.x, u_input.d.x, u_input.d.x)), 1358f, Struct_1(-1824f, false, u_input.e, vec4<f32>(-320f, 635f, -1058f, 1444f), vec3<i32>(50405i, u_input.d.x, 1i))), 1u, true, global1[_wgslsmith_index_u32(~u_input.e.x, 19u)], _wgslsmith_sub_i32(u_input.d.x, u_input.d.x)), _wgslsmith_clamp_vec2_i32(-vec2<i32>(-31327i, -22188i), func_4(u_input.e.wyw, u_input.c.x, vec4<u32>(u_input.c.x, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(5856u, 14u)], 14u)], u_input.c.x, 1u), 9214i).c, func_7(392f, u_input.c.x, Struct_4(vec2<bool>(global1[_wgslsmith_index_u32(u_input.b, 19u)], global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(4294967295u, 14u)], 19u)]), Struct_3(Struct_2(global1[_wgslsmith_index_u32(u_input.b, 19u)], Struct_1(-1188f, true, vec4<u32>(1u, 22215u, global0[_wgslsmith_index_u32(38011u, 14u)], u_input.b), vec4<f32>(-1107f, 705f, -306f, 433f), u_input.d), -1000f, Struct_1(1099f, true, u_input.e, vec4<f32>(-677f, 525f, 754f, 425f), vec3<i32>(-16057i, -6540i, u_input.d.x))), u_input.e.x, false, false, u_input.d.x), u_input.d.xy)).d.e.zx))).b.b, 2147483647i > select(~(~u_input.d.x), 3557i, false == global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(1u, 14u)], 19u)]), countOneBits(firstTrailingBit(u_input.d.x)));
    loop {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        if (true) {
        }
        global0 = array<u32, 14>();
        continue;
    }
    var var_1 = vec2<bool>(var_0.e <= u_input.d.x, func_4(vec3<u32>(72941u, ~(~global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.c.x, 14u)], 14u)], 14u)]), ~global0[_wgslsmith_index_u32(0u, 14u)]), 18855u, select(u_input.e, u_input.e, var_0.c), _wgslsmith_clamp_i32(_wgslsmith_sub_i32(-1i ^ var_0.a.d.e.x, _wgslsmith_add_i32(var_0.e, u_input.d.x)), _wgslsmith_add_i32(u_input.d.x, -u_input.d.x), _wgslsmith_mod_i32(var_0.e, -1i))).a.x);
    var var_2 = true;
    let var_3 = Struct_4(vec2<bool>(true, func_8(var_0.a.c, var_0.a).e > min(u_input.d.x, var_0.e)), func_8(1307f, var_0.a), abs(u_input.d.zz));
    return vec3<u32>(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(~0u, 14u)], 14u)], ~(~_wgslsmith_div_u32(global0[_wgslsmith_index_u32(4294967295u, 14u)] >> (u_input.c.x % 32u), 1u)), 37169u);
}

@compute
@workgroup_size(1)
fn main() {
    global0 = array<u32, 14>();
    var var_0 = func_1();
    var var_1 = Struct_1(-853f, global1[_wgslsmith_index_u32(30468u, 19u)], func_4(select(~vec3<u32>(var_0.x, u_input.e.x, u_input.c.x), u_input.e.wwz, true) ^ select(_wgslsmith_add_vec3_u32(vec3<u32>(1u, 1u, 4294967295u), vec3<u32>(u_input.c.x, var_0.x, var_0.x)), ~vec3<u32>(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(99224u, 14u)], 14u)], var_0.x, 1u), select(vec3<bool>(true, false, true), vec3<bool>(false, true, true), global1[_wgslsmith_index_u32(u_input.c.x, 19u)])), firstTrailingBit(59227u), func_8(_wgslsmith_f_op_f32(1118f * _wgslsmith_f_op_f32(floor(-139f))), func_7(_wgslsmith_f_op_f32(f32(-1f) * -295f), 0u, func_4(vec3<u32>(125669u, u_input.a, global0[_wgslsmith_index_u32(u_input.c.x, 14u)]), global0[_wgslsmith_index_u32(4294967295u, 14u)], u_input.e, -40932i))).a.b.c, u_input.d.x).b.a.d.c, vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1407f * -1211f)), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(sign(1000f)), _wgslsmith_f_op_f32(-475f + -424f))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(518f, -446f)), _wgslsmith_f_op_f32(-func_4(u_input.e.zxx, u_input.c.x, u_input.e, u_input.d.x).b.a.d.a)), _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(1125f)))))), _wgslsmith_mult_vec3_i32(u_input.d, max(_wgslsmith_div_vec3_i32(countOneBits(vec3<i32>(1i, -1i, u_input.d.x)), _wgslsmith_add_vec3_i32(vec3<i32>(u_input.d.x, 0i, u_input.d.x), vec3<i32>(-19357i, u_input.d.x, u_input.d.x))), ~_wgslsmith_mult_vec3_i32(vec3<i32>(u_input.d.x, u_input.d.x, i32(-2147483648)), vec3<i32>(-14542i, 0i, u_input.d.x)))));
    if (global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(_wgslsmith_mult_u32(_wgslsmith_mod_u32(~((13675u << (global0[_wgslsmith_index_u32(1u, 14u)] % 32u)) >> (select(1u, 24738u, true) % 32u)), ~(~_wgslsmith_clamp_u32(23425u, 14124u, 42564u))), ~firstLeadingBit(_wgslsmith_clamp_u32(u_input.b, var_0.x, func_2(vec2<bool>(global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.b, 14u)], 19u)], var_1.b)).x))), 14u)], 19u)]) {
        switch (~max(func_7(_wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -743f), _wgslsmith_f_op_f32(-var_1.a)), func_1().x, Struct_4(select(vec2<bool>(false, global1[_wgslsmith_index_u32(var_0.x, 19u)]), vec2<bool>(true, false), vec2<bool>(false, var_1.b)), Struct_3(Struct_2(true, Struct_1(var_1.a, true, vec4<u32>(86132u, u_input.e.x, 4294967295u, var_1.c.x), var_1.d, vec3<i32>(2147483647i, -13042i, var_1.e.x)), var_1.d.x, Struct_1(var_1.d.x, var_1.b, vec4<u32>(49603u, 4294967295u, u_input.a, 4294967295u), vec4<f32>(874f, var_1.a, var_1.d.x, 1505f), var_1.e)), global0[_wgslsmith_index_u32(var_1.c.x, 14u)], global1[_wgslsmith_index_u32(var_0.x, 19u)], true, 43292i), u_input.d.xx)).b.e.x, _wgslsmith_clamp_i32(-u_input.d.x, 2147483647i, var_1.e.x))) {
            default: {
                let var_2 = select(!select(vec4<bool>(true, true, i32(-2147483648) < var_1.e.x, !global1[_wgslsmith_index_u32(var_1.c.x, 19u)]), vec4<bool>(!var_1.b, any(vec2<bool>(var_1.b, var_1.b)), true, var_1.b), !var_1.b || true), select(!vec4<bool>(any(vec3<bool>(global1[_wgslsmith_index_u32(0u, 19u)], global1[_wgslsmith_index_u32(var_0.x, 19u)], true)), !global1[_wgslsmith_index_u32(0u, 19u)], false, !var_1.b), vec4<bool>(false, any(vec4<bool>(var_1.b, true, false, var_1.b)) | true, !all(vec3<bool>(true, true, var_1.b)), !var_1.b), !select(vec4<bool>(false, global1[_wgslsmith_index_u32(u_input.b, 19u)], global1[_wgslsmith_index_u32(var_1.c.x, 19u)], false), vec4<bool>(var_1.b, true, false, true), true)), all(select(vec3<bool>(func_6(Struct_4(vec2<bool>(true, global1[_wgslsmith_index_u32(u_input.b, 19u)]), Struct_3(Struct_2(false, Struct_1(982f, global1[_wgslsmith_index_u32(11476u, 19u)], var_1.c, vec4<f32>(987f, -405f, 1457f, -321f), vec3<i32>(u_input.d.x, var_1.e.x, var_1.e.x)), 913f, Struct_1(-398f, false, var_1.c, vec4<f32>(1217f, -1799f, 1420f, -1395f), var_1.e)), u_input.e.x, false, true, 48068i), u_input.d.zz)), false, global1[_wgslsmith_index_u32(4294967295u, 19u)]), select(!vec3<bool>(true, var_1.b, true), vec3<bool>(var_1.b, global1[_wgslsmith_index_u32(var_0.x, 19u)], false), vec3<bool>(true, true, true)), vec3<bool>(true, true, true))));
                var_0 = abs(_wgslsmith_add_vec3_u32(_wgslsmith_add_vec3_u32(firstLeadingBit(u_input.e.ywx) << (var_1.c.yxw % vec3<u32>(32u)), u_input.e.zzz), u_input.e.xwx >> ((var_1.c.zzy >> (max(var_1.c.wzx, u_input.e.xwy) % vec3<u32>(32u))) % vec3<u32>(32u))));
                var var_3 = var_2.x != ((firstTrailingBit(firstTrailingBit(u_input.d.x)) >= var_1.e.x) || all(var_2.xxx));
            }
        }
    }
    var var_2 = u_input.e.zxw;
    for (var var_3 = var_1.e.x; var_3 > 2147483647i; ) {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
    }
    loop {
        if (LOOP_COUNTERS[20u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
        var var_3 = any(select(!vec4<bool>(true, func_6(Struct_4(vec2<bool>(true, true), Struct_3(Struct_2(global1[_wgslsmith_index_u32(70033u, 19u)], Struct_1(589f, true, vec4<u32>(u_input.b, global0[_wgslsmith_index_u32(0u, 14u)], global0[_wgslsmith_index_u32(var_1.c.x, 14u)], global0[_wgslsmith_index_u32(0u, 14u)]), vec4<f32>(-142f, -1140f, var_1.a, 1808f), var_1.e), 2296f, Struct_1(1000f, global1[_wgslsmith_index_u32(u_input.b, 19u)], u_input.e, vec4<f32>(992f, var_1.d.x, -1012f, 443f), u_input.d)), 26590u, global1[_wgslsmith_index_u32(4294967295u, 19u)], true, u_input.d.x), vec2<i32>(var_1.e.x, -36081i))), 400f >= var_1.a, true), !(!select(vec4<bool>(false, global1[_wgslsmith_index_u32(3921u, 19u)], false, var_1.b), vec4<bool>(global1[_wgslsmith_index_u32(var_2.x, 19u)], true, true, true), false)), true));
        let var_4 = any(vec3<bool>(global1[_wgslsmith_index_u32(~_wgslsmith_div_u32(_wgslsmith_mult_u32(1u, 15557u), ~u_input.a), 19u)], any(vec4<bool>(func_6(Struct_4(vec2<bool>(true, global1[_wgslsmith_index_u32(1u, 19u)]), Struct_3(Struct_2(true, Struct_1(var_1.a, false, u_input.e, vec4<f32>(var_1.d.x, 1855f, var_1.d.x, var_1.d.x), var_1.e), 858f, Struct_1(-408f, global1[_wgslsmith_index_u32(u_input.c.x, 19u)], vec4<u32>(var_0.x, global0[_wgslsmith_index_u32(4294967295u, 14u)], 4294967295u, 4065u), vec4<f32>(var_1.a, var_1.a, -2127f, var_1.a), vec3<i32>(-63777i, u_input.d.x, -3061i))), u_input.b, global1[_wgslsmith_index_u32(13788u, 19u)], true, var_1.e.x), vec2<i32>(var_1.e.x, 2147483647i))), global1[_wgslsmith_index_u32(0u, 19u)], global1[_wgslsmith_index_u32(var_0.x, 19u)], global1[_wgslsmith_index_u32(12610u, 19u)])), false));
        switch (reverseBits(31962i)) {
            case -1i: {
                break;
            }
            case -63539i: {
                var_2 = u_input.e.xxx;
                global1 = array<bool, 19>();
                var var_5 = var_1.e.x >> (1u % 32u);
            }
            case 1i: {
                global0 = array<u32, 14>();
                var_0 = min(~var_1.c.zzz ^ firstLeadingBit(_wgslsmith_mult_vec3_u32(u_input.e.wyy, vec3<u32>(0u, 4294967295u, global0[_wgslsmith_index_u32(0u, 14u)]))), _wgslsmith_mult_vec3_u32(u_input.e.xxx, _wgslsmith_mult_vec3_u32(reverseBits(vec3<u32>(var_1.c.x, var_0.x, var_2.x) | u_input.e.wxw), vec3<u32>(~0u, 1u, 4294967295u))));
                continue;
            }
            default: {
                let var_5 = func_8(_wgslsmith_div_f32(var_1.a, _wgslsmith_f_op_f32(-var_1.d.x)), func_7(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(f32(-1f) * -145f))) * var_1.a), 4508u, Struct_4(!func_4(u_input.e.ywz, 33132u, u_input.e, var_1.e.x).a, Struct_3(func_8(var_1.d.x, Struct_2(false, Struct_1(var_1.d.x, global1[_wgslsmith_index_u32(u_input.a, 19u)], vec4<u32>(var_1.c.x, var_1.c.x, 15544u, 1u), var_1.d, u_input.d), 1006f, Struct_1(796f, global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(1291u, 14u)], 14u)], 19u)], vec4<u32>(1u, var_2.x, 88092u, u_input.c.x), vec4<f32>(-580f, -364f, var_1.d.x, 293f), vec3<i32>(-17983i, 0i, 1i)))).a, firstLeadingBit(4294967295u), var_4, func_6(Struct_4(vec2<bool>(false, var_1.b), Struct_3(Struct_2(var_4, Struct_1(var_1.a, var_1.b, vec4<u32>(1u, var_2.x, 0u, 4294967295u), var_1.d, vec3<i32>(-4792i, var_1.e.x, i32(-2147483648))), 784f, Struct_1(var_1.d.x, false, u_input.e, var_1.d, u_input.d)), 1u, false, var_4, u_input.d.x), var_1.e.yz)), 30076i), vec2<i32>(-1i) * -u_input.d.yy))).a.b;
                let var_6 = vec3<bool>(global1[_wgslsmith_index_u32(13886u, 19u)], !select(true, select(var_5.b, func_7(var_1.a, 4294967295u, Struct_4(vec2<bool>(var_1.b, true), Struct_3(Struct_2(var_4, Struct_1(-490f, false, var_1.c, var_5.d, vec3<i32>(-15535i, u_input.d.x, 0i)), -732f, Struct_1(var_1.a, var_4, var_1.c, vec4<f32>(var_5.d.x, 735f, var_5.a, 646f), vec3<i32>(-31362i, 1i, u_input.d.x))), u_input.b, false, true, 6844i), vec2<i32>(var_5.e.x, 13102i))).d.b, var_5.b), true), !((abs(var_0.x) ^ ~var_0.x) > _wgslsmith_dot_vec2_u32(vec2<u32>(4294967295u, var_5.c.x), ~vec2<u32>(u_input.b, var_1.c.x))));
                let var_7 = max(var_5.e, _wgslsmith_mod_vec3_i32(_wgslsmith_add_vec3_i32(var_1.e, -vec3<i32>(0i, 1i, var_5.e.x)), var_1.e));
            }
        }
    }
    let x = u_input.a;
    s_output = StorageBuffer(countOneBits(abs(vec2<i32>(-40277i, 12674i))) << (var_2.zz % vec2<u32>(32u)), func_8(_wgslsmith_f_op_f32(min(-387f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(var_1.d.x, -491f, global1[_wgslsmith_index_u32(0u, 19u)])) + _wgslsmith_div_f32(var_1.d.x, -1000f)))), func_8(var_1.d.x, func_4(vec3<u32>(85125u, 1860u, u_input.a), var_1.c.x << (var_1.c.x % 32u), abs(vec4<u32>(var_2.x, u_input.e.x, var_1.c.x, global0[_wgslsmith_index_u32(71926u, 14u)])), 17165i).b.a).a).e, _wgslsmith_div_u32(var_0.x, (var_1.c.x << (global0[_wgslsmith_index_u32(var_2.x, 14u)] % 32u)) << (_wgslsmith_sub_u32(94585u, global0[_wgslsmith_index_u32(4294967295u, 14u)]) % 32u)) >> (13676u % 32u), _wgslsmith_mult_i32(~abs(_wgslsmith_mod_i32(var_1.e.x, var_1.e.x)), min(~(i32(-1i) * i32(-2147483648)), (-1i | u_input.d.x) << (1u % 32u))), vec3<f32>(_wgslsmith_div_f32(209f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(var_1.a)) * _wgslsmith_f_op_f32(-var_1.a))), _wgslsmith_div_f32(func_7(_wgslsmith_f_op_f32(559f + -638f), 81638u, func_4(vec3<u32>(var_1.c.x, 0u, 16649u), var_2.x, vec4<u32>(var_2.x, 11781u, 17925u, 9576u), -11140i)).d.d.x, _wgslsmith_div_f32(func_4(vec3<u32>(4294967295u, u_input.c.x, var_1.c.x), var_0.x, u_input.e, 2147483647i).b.a.b.d.x, _wgslsmith_f_op_f32(var_1.d.x * var_1.d.x))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(-117f)) + var_1.d.x)));
}

`;