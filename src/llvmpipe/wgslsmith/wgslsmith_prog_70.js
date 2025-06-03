export const input = [67,94,58,93,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [67,94,58,93,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[67,94,58,93]}
// Seed: 9008759196818408244

struct Struct_1 {
    a: i32,
    b: i32,
    c: f32,
    d: vec3<bool>,
}

struct UniformBuffer {
    a: i32,
}

struct StorageBuffer {
    a: i32,
    b: f32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<Struct_1, 15> = array<Struct_1, 15>(Struct_1(0i, 21652i, -3218f, vec3<bool>(false, false, true)), Struct_1(2147483647i, 1i, 115f, vec3<bool>(true, true, false)), Struct_1(50867i, -36686i, -2791f, vec3<bool>(true, true, true)), Struct_1(1i, 768i, 1571f, vec3<bool>(false, true, true)), Struct_1(-54256i, -26851i, -2599f, vec3<bool>(false, false, true)), Struct_1(2147483647i, 29415i, 1234f, vec3<bool>(false, false, false)), Struct_1(1i, i32(-2147483648), -893f, vec3<bool>(false, true, false)), Struct_1(-35120i, 0i, -844f, vec3<bool>(true, true, false)), Struct_1(i32(-2147483648), 9905i, 454f, vec3<bool>(false, true, true)), Struct_1(-1i, -11909i, -1293f, vec3<bool>(true, true, true)), Struct_1(-1i, i32(-2147483648), 903f, vec3<bool>(false, false, true)), Struct_1(1i, 2147483647i, -204f, vec3<bool>(true, true, true)), Struct_1(-1i, -28778i, -401f, vec3<bool>(false, false, false)), Struct_1(47347i, 1i, -1000f, vec3<bool>(true, false, false)), Struct_1(-52549i, -1i, -1239f, vec3<bool>(false, true, false)));

var<private> global1: Struct_1;

var<private> global2: Struct_1;

var<private> global3: f32 = 418f;

var<private> global4: u32;

var<private> LOOP_COUNTERS: array<u32, 22>;

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn func_6(arg_0: Struct_1, arg_1: f32, arg_2: Struct_1) -> i32 {
    var var_0 = !(!select(arg_0.d.yy, select(global2.d.yx, vec2<bool>(true, true), global1.d.x), true));
    if (true) {
        var var_1 = 0i & u_input.a;
        var var_2 = arg_2;
        loop {
            if (LOOP_COUNTERS[0u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
            global4 = _wgslsmith_dot_vec4_u32(vec4<u32>(0u, ~29993u & firstTrailingBit(43988u), _wgslsmith_add_u32(~1u, countOneBits(min(0u, 1u))), _wgslsmith_mod_u32(min(~22837u, ~29977u), 1u)), vec4<u32>(1u, 1u, 1u, 1u) | ~vec4<u32>(22560u, 48544u, _wgslsmith_dot_vec3_u32(vec3<u32>(104488u, 4294967295u, 0u), vec3<u32>(2046u, 4294967295u, 3664u)), abs(14546u)));
            break;
        }
        if (!(!any(select(select(vec3<bool>(global1.d.x, global1.d.x, true), vec3<bool>(true, arg_2.d.x, var_0.x), true), !var_2.d, false)))) {
            var var_3 = arg_2.d.zz;
            let var_4 = Struct_1(global1.a, u_input.a, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_2.c) - _wgslsmith_f_op_f32(floor(global2.c))), select(select(select(!vec3<bool>(global2.d.x, true, var_3.x), !arg_2.d, arg_2.d), vec3<bool>(global1.d.x, true, -333f < arg_0.c), select(select(vec3<bool>(true, var_3.x, false), arg_0.d, true), select(vec3<bool>(true, var_2.d.x, global1.d.x), vec3<bool>(false, true, arg_2.d.x), vec3<bool>(true, arg_0.d.x, var_3.x)), arg_2.d)), vec3<bool>(var_3.x, true, true), global2.d));
            let var_5 = arg_0.d;
            var var_6 = arg_2.d.x;
            global1 = Struct_1(-1i, 0i, -1000f, !(!select(vec3<bool>(false, false, var_3.x), !arg_2.d, vec3<bool>(global2.d.x, true, false))));
        }
    }
    global1 = arg_0;
    global1 = Struct_1(_wgslsmith_dot_vec2_i32(min(vec2<i32>(~global1.b, global2.b ^ global2.b), max(vec2<i32>(arg_2.b, arg_2.a), vec2<i32>(u_input.a, 37798i)) & vec2<i32>(global1.a, -1i)), firstTrailingBit(vec2<i32>(arg_2.b, i32(-2147483648))) ^ countOneBits(firstLeadingBit(vec2<i32>(arg_0.b, i32(-2147483648))))), abs(2147483647i), 124f, select(!(!vec3<bool>(true, false, arg_0.d.x)), vec3<bool>(false, global1.d.x, !(!arg_0.d.x)), select(select(select(arg_2.d, arg_2.d, arg_0.d), select(arg_2.d, global2.d, global1.d), vec3<bool>(true, global2.d.x, true)), select(vec3<bool>(true, true, true), select(arg_0.d, vec3<bool>(global1.d.x, var_0.x, true), true), true), true)));
    switch (~global2.b) {
        case 2147483647i: {
            if (all(select(global1.d, !vec3<bool>(all(global1.d.zx), arg_2.d.x, false), select(arg_2.d, vec3<bool>(global2.d.x, any(vec4<bool>(arg_2.d.x, true, arg_2.d.x, false)), var_0.x), global1.d)))) {
                var_0 = arg_0.d.xz;
                var var_1 = vec4<i32>(~(~(~(~(i32(-2147483648))))), _wgslsmith_clamp_i32(arg_2.b, firstLeadingBit(arg_0.a), i32(-2147483648)), i32(-2147483648), 6849i);
                let var_2 = Struct_1(~global2.a, 1i, _wgslsmith_f_op_f32(-192f + _wgslsmith_f_op_f32(sign(arg_2.c))), vec3<bool>(all(!(!vec3<bool>(true, arg_0.d.x, global2.d.x))), abs(~global1.b) <= (u_input.a & 1i), var_0.x));
                var var_3 = arg_2;
            }
            switch (7744i) {
                case -1i: {
                    var var_1 = _wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(f32(-1f) * -562f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global2.c))) * _wgslsmith_f_op_vec2_f32(-vec2<f32>(956f, arg_1)));
                    let var_2 = ~(vec3<i32>(u_input.a, global1.a, reverseBits(global2.a)) & (_wgslsmith_add_vec3_i32(vec3<i32>(global1.a, 1i, arg_0.a), vec3<i32>(45i, arg_2.b, -8344i)) << (vec3<u32>(1u, 1u, 1u) % vec3<u32>(32u)))) ^ vec3<i32>(_wgslsmith_dot_vec3_i32(vec3<i32>(firstTrailingBit(u_input.a), i32(-1i) * -48769i, 2147483647i), -vec3<i32>(arg_0.a, arg_0.b, u_input.a)), firstLeadingBit(global2.a), ~arg_2.a);
                    var var_3 = Struct_1(arg_2.a, _wgslsmith_dot_vec4_i32(vec4<i32>(_wgslsmith_add_i32(-1i, arg_0.a), ~(~(-1i)), ~u_input.a, 19159i), countOneBits(vec4<i32>(firstLeadingBit(global1.b), arg_0.a, reverseBits(46107i), _wgslsmith_div_i32(-1i, arg_2.b)))), _wgslsmith_f_op_f32(floor(-515f)), !global1.d);
                }
                case i32(-2147483648): {
                    var var_1 = Struct_1(arg_2.b, -firstTrailingBit(-_wgslsmith_clamp_i32(arg_0.b, 20805i, -1i)), _wgslsmith_f_op_f32(global1.c * arg_1), !global1.d);
                    global0 = array<Struct_1, 15>();
                    let var_2 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(443f, var_1.c))) + global2.c);
                    var var_3 = Struct_1(select(8868i, abs(-global1.a >> (abs(9u) % 32u)), var_0.x), arg_0.b, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(global1.c)))) * arg_2.c), !global1.d);
                }
                case 0i: {
                    var var_1 = -select(vec3<i32>(-(~global2.a), firstTrailingBit(u_input.a), 1i), vec3<i32>(global1.b ^ arg_0.a, -arg_2.a, _wgslsmith_mod_i32(-42684i, global2.a)) << (~abs(vec3<u32>(0u, 4294967295u, 1u)) % vec3<u32>(32u)), global1.d.x);
                    let var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_2.c));
                    let var_3 = global2.d;
                }
                case 15884i: {
                    let var_1 = Struct_1(arg_0.b, arg_0.b, global2.c, vec3<bool>(_wgslsmith_dot_vec4_u32(vec4<u32>(1u, 4294967295u, 4294967295u, 1u), vec4<u32>(52439u, 1u, 12769u, 66406u)) > _wgslsmith_sub_u32(~60716u, firstTrailingBit(4294967295u)), false, true));
                    global2 = Struct_1(2147483647i, -min(_wgslsmith_div_i32(arg_2.b, u_input.a & global2.a), i32(-2147483648)), -176f, select(var_1.d, !arg_0.d, true));
                    var var_2 = ~vec2<u32>(_wgslsmith_div_u32(reverseBits(~88259u), _wgslsmith_clamp_u32(~4294967295u, abs(18299u), _wgslsmith_dot_vec4_u32(vec4<u32>(4294967295u, 0u, 52561u, 83672u), vec4<u32>(1191u, 36198u, 59132u, 0u)))), 4294967295u);
                    let var_3 = select(vec2<bool>(((var_2.x >> (101636u % 32u)) << (_wgslsmith_dot_vec3_u32(vec3<u32>(1u, 1u, 4294967295u), vec3<u32>(4294967295u, var_2.x, 0u)) % 32u)) >= firstTrailingBit(1u & var_2.x), true), !(!arg_2.d.yy), select(vec2<bool>(var_1.d.x, arg_0.d.x), vec2<bool>(true, true), !vec2<bool>(any(vec4<bool>(true, global1.d.x, var_1.d.x, false)), var_0.x | global2.d.x)));
                    global4 = var_2.x | (_wgslsmith_mod_u32(_wgslsmith_mod_u32(min(41469u, var_2.x), firstTrailingBit(var_2.x)), 1u) ^ (min(1u, max(var_2.x, 107022u)) & 1u));
                }
                default: {
                    global4 = _wgslsmith_mult_u32(_wgslsmith_mult_u32((firstLeadingBit(1u) << (_wgslsmith_dot_vec4_u32(vec4<u32>(0u, 11374u, 1u, 1u), vec4<u32>(0u, 0u, 4133u, 4294967295u)) % 32u)) | 0u, ~39403u), firstTrailingBit(reverseBits(0u)));
                    let var_1 = _wgslsmith_clamp_vec4_u32(vec4<u32>(4294967295u, ~(~abs(123307u)), ~firstLeadingBit(_wgslsmith_sub_u32(65135u, 39671u)), 1u), ~(~(~abs(vec4<u32>(12018u, 3454u, 0u, 0u)))), abs(~(~vec4<u32>(1u, 1u, 1u, 1u))));
                    var var_2 = !select(global1.d.yy, arg_0.d.xy, select(vec2<bool>(!arg_0.d.x, any(arg_2.d)), vec2<bool>(true, select(arg_2.d.x, global2.d.x, global2.d.x)), select(vec2<bool>(false, true), !vec2<bool>(true, var_0.x), vec2<bool>(global2.d.x, false))));
                    global2 = Struct_1(-abs(u_input.a), firstLeadingBit(global2.a), 340f, !select(global1.d, arg_0.d, !(!arg_2.d.x)));
                    var var_3 = global0[_wgslsmith_index_u32(~51711u, 15u)];
                }
            }
            var var_1 = !vec3<bool>(false, any(select(vec4<bool>(arg_0.d.x, true, global1.d.x, false), vec4<bool>(false, true, true, var_0.x), vec4<bool>(true, arg_2.d.x, global1.d.x, false))), ((false & var_0.x) | true) & !all(vec4<bool>(true, var_0.x, false, arg_0.d.x)));
            if (true) {
                let var_2 = Struct_1(2147483647i, 55838i, arg_1, select(arg_0.d, !vec3<bool>(true, all(vec3<bool>(false, true, global2.d.x)), all(global1.d)), vec3<bool>((global1.b > global2.a) | var_0.x, (1002f <= global1.c) & false, all(arg_0.d.yy))));
                let var_3 = -14554i;
                var var_4 = var_2;
            }
        }
        case 24508i: {
            var_0 = select(select(arg_0.d.yz, !select(arg_2.d.yz, !arg_0.d.zx, global1.c <= 544f), select(!select(arg_0.d.xx, global1.d.xz, vec2<bool>(false, global2.d.x)), vec2<bool>(global1.d.x | global1.d.x, true), select(vec2<bool>(false, global1.d.x), arg_0.d.xz, all(vec4<bool>(true, arg_0.d.x, true, arg_2.d.x))))), select(select(!global1.d.zz, !arg_2.d.yy, vec2<bool>(arg_2.d.x, true)), !select(!vec2<bool>(arg_0.d.x, true), select(arg_0.d.xx, global2.d.yz, vec2<bool>(true, arg_2.d.x)), global1.d.x), !vec2<bool>(arg_0.d.x, any(vec2<bool>(true, true)))), global1.d.zz);
        }
        case 1i: {
            var var_1 = Struct_1(60355i, global1.b, _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(min(global2.c, 553f))))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1156f) + _wgslsmith_f_op_f32(floor(arg_1)))), !global2.d);
            switch (~(~(_wgslsmith_dot_vec4_i32(vec4<i32>(-1161i, 26165i, global2.a, 1i), firstLeadingBit(vec4<i32>(var_1.b, arg_0.a, 0i, u_input.a))) ^ reverseBits(-4007i)))) {
                case 38227i: {
                    var var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(1020f)));
                    var var_3 = global0[_wgslsmith_index_u32(~4294967295u, 15u)];
                    var_0 = select(vec2<bool>(all(select(!vec4<bool>(false, false, arg_2.d.x, arg_0.d.x), select(vec4<bool>(global2.d.x, var_1.d.x, false, true), vec4<bool>(true, true, false, false), vec4<bool>(false, arg_0.d.x, global1.d.x, arg_2.d.x)), select(vec4<bool>(false, global1.d.x, var_1.d.x, false), vec4<bool>(false, var_1.d.x, global2.d.x, var_1.d.x), vec4<bool>(global2.d.x, global2.d.x, true, global1.d.x)))), false), !select(!global2.d.xy, !(!vec2<bool>(var_0.x, true)), var_1.d.yz), !arg_0.d.x);
                    let var_4 = !vec3<bool>(true, all(!global1.d.xz), global2.d.x);
                    var_2 = _wgslsmith_f_op_f32(451f + _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_2.c) + _wgslsmith_f_op_f32(571f * -172f)) * _wgslsmith_f_op_f32(_wgslsmith_div_f32(arg_0.c, 845f) * _wgslsmith_f_op_f32(max(160f, 250f)))), _wgslsmith_f_op_f32(-arg_0.c), true)));
                }
                case 2147483647i: {
                    global0 = array<Struct_1, 15>();
                    var var_2 = ~vec4<u32>(1u, 1u, 1u, 1u);
                    var var_3 = 1009f;
                    let var_4 = select(i32(-2147483648), reverseBits(u_input.a), arg_2.d.x);
                }
                default: {
                }
            }
            if (!(!(global1.b >= ~(-27755i)) != global2.d.x)) {
                global4 = 1u;
            }
            switch (-_wgslsmith_dot_vec3_i32(vec3<i32>(~(arg_0.a & u_input.a), ~1i, -u_input.a), -max(-vec3<i32>(arg_0.b, var_1.b, 67853i), _wgslsmith_div_vec3_i32(vec3<i32>(-1i, 11038i, var_1.a), vec3<i32>(global2.a, var_1.a, 43645i))))) {
                case -19129i: {
                    let var_2 = !(!(!select(vec2<bool>(true, global1.d.x), vec2<bool>(arg_0.d.x, var_1.d.x), var_0.x)));
                    var var_3 = firstLeadingBit(reverseBits(_wgslsmith_mod_vec2_i32(abs(-vec2<i32>(8712i, global1.b)), _wgslsmith_mod_vec2_i32(countOneBits(vec2<i32>(2147483647i, 0i)), select(vec2<i32>(u_input.a, 1i), vec2<i32>(0i, var_1.a), true)))));
                }
                default: {
                }
            }
        }
        case 34352i: {
            let var_1 = ~reverseBits(vec2<u32>(_wgslsmith_mult_u32(_wgslsmith_dot_vec3_u32(vec3<u32>(24647u, 39249u, 66663u), vec3<u32>(1u, 32189u, 0u)), _wgslsmith_clamp_u32(0u, 0u, 58303u)), firstLeadingBit(1u) >> (_wgslsmith_dot_vec2_u32(vec2<u32>(38418u, 0u), vec2<u32>(17195u, 12691u)) % 32u)));
            var var_2 = _wgslsmith_dot_vec3_u32(_wgslsmith_mult_vec3_u32(~firstLeadingBit(firstTrailingBit(vec3<u32>(var_1.x, 0u, 4294967295u))), ~abs(vec3<u32>(var_1.x, 0u, var_1.x))), vec3<u32>(abs(18814u), firstTrailingBit(1664u), 19276u));
        }
        default: {
            let var_1 = arg_0.d;
            global0 = array<Struct_1, 15>();
            let var_2 = arg_0;
            switch (firstLeadingBit(i32(-2147483648))) {
                default: {
                    var var_3 = true;
                }
            }
        }
    }
    return u_input.a;
}

fn func_5(arg_0: Struct_1, arg_1: Struct_1, arg_2: bool, arg_3: vec4<f32>) -> u32 {
    loop {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        let var_0 = arg_0;
        let var_1 = Struct_1(func_6(arg_1, _wgslsmith_f_op_f32(-164f - 577f), global0[_wgslsmith_index_u32(firstLeadingBit(1u), 15u)]), -8447i, _wgslsmith_div_f32(var_0.c, global2.c), global2.d);
        global0 = array<Struct_1, 15>();
        break;
    }
    for (var var_0 = i32(-2147483648); ; ) {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        for (var var_1 = 2147483647i; !(!(!(!all(vec4<bool>(false, false, false, false))))); var_1 += 1i) {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            let var_2 = arg_0;
            continue;
        }
        let var_1 = _wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-arg_3))));
        var var_2 = true;
    }
    global1 = arg_0;
    let var_0 = _wgslsmith_sub_vec2_u32(vec2<u32>(1u, 1u), _wgslsmith_div_vec2_u32(_wgslsmith_mult_vec2_u32(vec2<u32>(0u, 1u), vec2<u32>(63552u, 45651u)), select(min(vec2<u32>(4294967295u, 0u), vec2<u32>(54749u, 36095u)), vec2<u32>(1u, 1u), global2.d.x || global2.d.x)) >> (~vec2<u32>(0u, _wgslsmith_mult_u32(1u, 1u)) % vec2<u32>(32u)));
    switch (32665i) {
        case -1i: {
            global3 = _wgslsmith_f_op_f32(abs(1470f));
            if (arg_2) {
            }
            let var_1 = Struct_1(abs(u_input.a), max(u_input.a, select(arg_1.a, i32(-1i) * i32(-2147483648), any(select(arg_0.d.yz, global2.d.xz, false)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(arg_0.c)) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_3.x - 391f))) * _wgslsmith_f_op_f32(round(-1000f))), !arg_0.d);
            global2 = Struct_1(_wgslsmith_add_i32(u_input.a, _wgslsmith_dot_vec2_i32(countOneBits(_wgslsmith_sub_vec2_i32(vec2<i32>(global2.b, u_input.a), vec2<i32>(-10173i, var_1.a))), _wgslsmith_div_vec2_i32(vec2<i32>(1i, var_1.a), vec2<i32>(-51180i, arg_0.b)) >> (~var_0 % vec2<u32>(32u)))), 1i, _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(var_1.c + arg_3.x))), global1.d);
            var var_2 = global2.a;
        }
        case 15756i: {
            return var_0.x;
        }
        case 2422i: {
            for (var var_1 = 13146i; var_1 > -1i; var_1 -= 1i) {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                let var_2 = arg_0;
                global1 = arg_0;
            }
            let var_1 = Struct_1(countOneBits(0i), arg_1.a, arg_3.x, vec3<bool>(arg_0.d.x, false, !all(!vec4<bool>(false, global2.d.x, arg_1.d.x, arg_2))));
            loop {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                global3 = _wgslsmith_f_op_f32(step(var_1.c, -284f));
                let var_2 = 4294967295u;
                global3 = _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-arg_0.c)))));
                break;
            }
            global2 = Struct_1(-(~u_input.a), ~(-1i), _wgslsmith_div_f32(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(exp2(arg_1.c)), global1.c)), _wgslsmith_div_f32(1234f, var_1.c)), vec3<bool>(false, false, !global1.d.x));
        }
        default: {
            if (!(!(!any(global1.d.yz))) & arg_1.d.x) {
                let var_1 = vec3<u32>(min(max(var_0.x, _wgslsmith_mult_u32(var_0.x, 543u & var_0.x)), var_0.x >> (_wgslsmith_dot_vec2_u32(vec2<u32>(62621u, var_0.x), ~vec2<u32>(0u, var_0.x)) % 32u)), var_0.x, ~var_0.x);
                var var_2 = arg_1;
                let var_3 = 31301i;
            }
            let var_1 = abs(~var_0);
        }
    }
    return ~(countOneBits((var_0.x | var_0.x) | var_0.x) << (39239u % 32u));
}

fn func_7(arg_0: vec3<u32>, arg_1: Struct_1) -> u32 {
    loop {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        var var_0 = _wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(vec3<f32>(473f, _wgslsmith_f_op_f32(round(global2.c)), _wgslsmith_f_op_f32(_wgslsmith_div_f32(-1404f, arg_1.c) * -1344f)), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(abs(vec3<f32>(arg_1.c, -1693f, -2046f))))))) + vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-2671f) + _wgslsmith_f_op_f32(step(arg_1.c, global1.c)))), 1f, 1114f));
    }
    var var_0 = select(arg_1.d.zy, vec2<bool>(any(!(!vec4<bool>(true, false, false, global2.d.x))), arg_0.x == abs(firstLeadingBit(60599u))), true);
    if (!(min(firstTrailingBit(arg_1.a) ^ (i32(-1i) * -37707i), -abs(1i)) != firstTrailingBit(-1i))) {
        loop {
            if (LOOP_COUNTERS[7u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
            continue;
        }
    }
    var var_1 = -vec2<i32>(global1.b, -5160i);
    let var_2 = any(global2.d);
    return countOneBits(min(_wgslsmith_mult_u32(4294967295u, _wgslsmith_clamp_u32(~70286u, 1u, arg_0.x)), 27943u));
}

fn func_4() -> Struct_1 {
    global2 = global0[_wgslsmith_index_u32(func_7(vec3<u32>(_wgslsmith_clamp_u32(firstLeadingBit(~31179u), 15000u, _wgslsmith_dot_vec2_u32(~vec2<u32>(60974u, 2683u), vec2<u32>(10767u, 29180u))), abs(_wgslsmith_add_u32(1u, 1u)), func_5(Struct_1(u_input.a, global2.b, -1000f, global1.d), global0[_wgslsmith_index_u32(38928u, 15u)], global2.d.x, _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(floor(vec4<f32>(global1.c, 462f, global2.c, 158f))) - _wgslsmith_div_vec4_f32(vec4<f32>(global1.c, -651f, global2.c, 1000f), vec4<f32>(672f, global2.c, 378f, 423f))))), Struct_1(_wgslsmith_mult_i32(u_input.a, u_input.a), _wgslsmith_mult_i32(~(-u_input.a), 1i & global1.a), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global2.c) * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(global2.c, 1975f)) - _wgslsmith_f_op_f32(-global2.c))), global1.d)), 15u)];
    for (var var_0 = 2147483647i; !((false & (global2.d.x || false)) == !(!global2.d.x)); var_0 -= 1i) {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        let var_1 = abs(24150u);
    }
    let var_0 = _wgslsmith_mod_u32(reverseBits(~4516u), ~(~(~39877u)) & (_wgslsmith_dot_vec2_u32(abs(vec2<u32>(30371u, 4294967295u)), vec2<u32>(1u, 1u)) << (select(_wgslsmith_div_u32(5769u, 37859u), 4294967295u, any(vec4<bool>(global2.d.x, true, false, global1.d.x))) % 32u)));
    var var_1 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(global2.c, global2.c) * vec2<f32>(global1.c, global2.c)) + _wgslsmith_div_vec2_f32(vec2<f32>(global1.c, 1668f), vec2<f32>(267f, global2.c))) * vec2<f32>(_wgslsmith_f_op_f32(f32(-1f) * -423f), _wgslsmith_f_op_f32(-global2.c))), _wgslsmith_f_op_vec2_f32(sign(_wgslsmith_f_op_vec2_f32(vec2<f32>(373f, 1047f) - vec2<f32>(826f, 2840f))))));
    for (; ; ) {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
    }
    return global0[_wgslsmith_index_u32(firstTrailingBit(select(~_wgslsmith_mult_u32(min(var_0, var_0), 1u), func_5(global0[_wgslsmith_index_u32(select(_wgslsmith_dot_vec2_u32(vec2<u32>(0u, var_0), vec2<u32>(15106u, var_0)), _wgslsmith_dot_vec4_u32(vec4<u32>(var_0, 1u, 19033u, 0u), vec4<u32>(0u, var_0, 0u, var_0)), true), 15u)], Struct_1(_wgslsmith_div_i32(9329i, global1.a), u_input.a, var_1.x, global2.d), false, _wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(floor(vec4<f32>(394f, var_1.x, -795f, -1043f)))))), !global1.d.x)), 15u)];
}

fn func_8(arg_0: Struct_1, arg_1: vec3<bool>, arg_2: vec4<i32>, arg_3: Struct_1) -> Struct_1 {
    var var_0 = ~global1.a;
    if (arg_1.x) {
    }
    var var_1 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(342f)))))) + _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(f32(-1f) * -664f))));
    loop {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        var_0 = _wgslsmith_sub_i32(min(abs(global2.b) >> (1u % 32u), (i32(-1i) * -u_input.a) << (~0u % 32u)), -56247i << (_wgslsmith_mult_u32(~_wgslsmith_dot_vec2_u32(vec2<u32>(4294967295u, 1u), vec2<u32>(0u, 0u)), ~_wgslsmith_sub_u32(45227u, 26983u)) % 32u));
        let var_2 = -vec2<i32>(_wgslsmith_add_i32(arg_2.x, _wgslsmith_mod_i32(u_input.a, -27732i)), -26077i);
        switch (-((global2.a & (arg_3.b >> (abs(8141u) % 32u))) | arg_3.a)) {
            case 8564i: {
            }
            case -34263i: {
                var_0 = i32(-2147483648);
                let var_3 = Struct_1(arg_0.b, arg_3.b, _wgslsmith_f_op_f32(arg_0.c - _wgslsmith_f_op_f32(-global1.c)), vec3<bool>(false, func_4().d.x, global2.a < ~(arg_0.a >> (42486u % 32u))));
                let var_4 = func_4().c;
            }
            case -34916i: {
                let var_3 = vec2<u32>(_wgslsmith_mult_u32(29536u >> (_wgslsmith_dot_vec4_u32(~vec4<u32>(4294967295u, 6298u, 4294967295u, 55735u), abs(vec4<u32>(1u, 4294967295u, 0u, 0u))) % 32u), ~1u), abs(~select(33896u, ~85374u, true)));
                return func_4();
            }
            case 0i: {
                var var_3 = _wgslsmith_sub_u32(4294967295u, ~(~1u)) >> ((~_wgslsmith_div_u32(func_5(Struct_1(0i, var_2.x, global1.c, vec3<bool>(false, global2.d.x, arg_1.x)), Struct_1(arg_3.b, u_input.a, global1.c, vec3<bool>(true, false, global2.d.x)), global1.d.x, vec4<f32>(313f, arg_3.c, 265f, 1000f)), select(1u, 1786u, true)) | 25784u) % 32u);
                let var_4 = select(vec4<bool>(true, false, true, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global1.c)) == 525f), select(select(select(vec4<bool>(arg_3.d.x, global2.d.x, true, arg_1.x), !vec4<bool>(false, true, global2.d.x, global1.d.x), arg_3.d.x), vec4<bool>(any(global1.d.xy), !arg_3.d.x, arg_3.d.x, true), vec4<bool>(false, global1.d.x, true, arg_0.d.x)), !(!vec4<bool>(arg_3.d.x, true, true, arg_1.x)), select(vec4<bool>(!arg_3.d.x, true, true, all(vec2<bool>(false, false))), select(select(vec4<bool>(true, true, global2.d.x, false), vec4<bool>(arg_3.d.x, arg_3.d.x, false, global1.d.x), global2.d.x), !vec4<bool>(arg_0.d.x, false, arg_0.d.x, true), global1.c <= arg_0.c), global1.d.x)), func_4().d.x);
            }
            default: {
                var var_3 = Struct_1(arg_0.b, firstTrailingBit(~max(countOneBits(u_input.a), arg_0.b)), _wgslsmith_f_op_f32(global1.c + -1083f), select(select(func_4().d, select(global1.d, !vec3<bool>(arg_3.d.x, false, false), true), any(select(vec2<bool>(true, false), arg_0.d.yy, vec2<bool>(true, global2.d.x)))), select(global1.d, global1.d, false), !all(!vec3<bool>(false, global2.d.x, arg_0.d.x))));
            }
        }
        break;
    }
    for (var var_2 = 1i; ; var_0 = 1i) {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        let var_3 = func_4().d.xz;
        var var_4 = Struct_1(_wgslsmith_add_i32(~12321i, ~global2.b), -1i, global2.c, arg_3.d);
        let var_5 = firstLeadingBit(~vec2<i32>(select(~2147483647i, firstTrailingBit(global1.a), var_3.x), u_input.a));
        var var_6 = true;
    }
    return Struct_1(-14763i, global1.a, _wgslsmith_f_op_f32(round(_wgslsmith_div_f32(_wgslsmith_f_op_f32(sign(func_4().c)), _wgslsmith_f_op_f32(select(arg_3.c, arg_3.c, arg_3.d.x))))), !(!arg_3.d));
}

fn func_9(arg_0: Struct_1, arg_1: i32, arg_2: Struct_1, arg_3: f32) -> Struct_1 {
    var var_0 = _wgslsmith_clamp_vec3_i32(vec3<i32>(arg_2.b, _wgslsmith_mult_i32(func_4().b, -10638i) << (_wgslsmith_mod_u32(81845u, 7890u) % 32u), _wgslsmith_mult_i32(global2.b, i32(-2147483648))), vec3<i32>(~reverseBits(i32(-1i) * i32(-2147483648)), global2.b, ~((i32(-1i) * -1i) << (~4294967295u % 32u))), _wgslsmith_mult_vec3_i32(abs(vec3<i32>(0i, u_input.a, 18089i)), _wgslsmith_add_vec3_i32(_wgslsmith_sub_vec3_i32(vec3<i32>(arg_1, arg_0.a, arg_1), vec3<i32>(global1.a, u_input.a, arg_1)), vec3<i32>(-8121i, -1i, global2.b))) << (min(~select(vec3<u32>(0u, 0u, 1u), vec3<u32>(4294967295u, 1911u, 51413u), global2.d), vec3<u32>(1u, 1u, 1u)) % vec3<u32>(32u)));
    var var_1 = ~(~1u) < _wgslsmith_sub_u32(_wgslsmith_sub_u32(_wgslsmith_add_u32(_wgslsmith_dot_vec3_u32(vec3<u32>(4294967295u, 40978u, 38327u), vec3<u32>(0u, 4294967295u, 1u)), _wgslsmith_clamp_u32(1u, 13072u, 17914u)), 1u), abs(30366u));
    global3 = -1024f;
    let var_2 = _wgslsmith_sub_vec3_u32(vec3<u32>(abs(func_5(arg_0, global0[_wgslsmith_index_u32(1u, 15u)], arg_0.d.x, vec4<f32>(-336f, 604f, arg_3, global1.c))) | 24597u, 30805u, ~1u), vec3<u32>(~(~_wgslsmith_dot_vec4_u32(vec4<u32>(18153u, 75922u, 94918u, 1u), vec4<u32>(7925u, 22762u, 4294967295u, 1u))), 6627u, 1u));
    switch (0i) {
        case -1i: {
            var_1 = arg_0.d.x;
            global3 = global1.c;
        }
        case 25658i: {
            let var_3 = func_4();
        }
        case 2147483647i: {
            global4 = 1u;
            switch (max(_wgslsmith_sub_i32(_wgslsmith_div_i32(_wgslsmith_add_i32(-arg_2.a, 1i), _wgslsmith_div_i32(-43442i, -1i)), i32(-1i) * -(var_0.x << (1u % 32u))), var_0.x >> (firstLeadingBit(~(~1u)) % 32u))) {
                case -28442i: {
                    let var_3 = global0[_wgslsmith_index_u32(~(~_wgslsmith_mod_u32(32078u, var_2.x)), 15u)];
                    var var_4 = ~(((abs(var_2.x) << (~var_2.x % 32u)) >> ((4294967295u & var_2.x) % 32u)) & var_2.x);
                }
                case 2147483647i: {
                }
                case 1i: {
                    global2 = global0[_wgslsmith_index_u32(firstTrailingBit(var_2.x), 15u)];
                }
                default: {
                }
            }
            switch ((_wgslsmith_mult_i32(_wgslsmith_div_i32(i32(-2147483648), arg_1), firstLeadingBit(~var_0.x)) & (arg_0.a << (~var_2.x % 32u))) & abs(6849i)) {
                default: {
                    var var_3 = ~vec4<u32>(var_2.x, 25804u, abs(var_2.x), ~var_2.x);
                }
            }
        }
        case i32(-2147483648): {
            var var_3 = _wgslsmith_f_op_vec4_f32(-vec4<f32>(1207f, _wgslsmith_f_op_f32(-1000f), arg_2.c, _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(arg_0.c + _wgslsmith_f_op_f32(-805f + -533f))))));
            return global0[_wgslsmith_index_u32(_wgslsmith_add_u32(reverseBits(var_2.x ^ _wgslsmith_mod_u32(7298u, var_2.x << (var_2.x % 32u))), func_7(~_wgslsmith_mult_vec3_u32(vec3<u32>(var_2.x, 1u, 16360u), vec3<u32>(54990u, 67968u, 4294967295u)) | var_2, Struct_1(arg_2.b, _wgslsmith_add_i32(_wgslsmith_mod_i32(i32(-2147483648), arg_2.a), _wgslsmith_dot_vec4_i32(vec4<i32>(global2.a, i32(-2147483648), global2.a, 0i), vec4<i32>(arg_1, global1.b, arg_1, arg_0.a))), 1000f, select(global1.d, select(vec3<bool>(false, global1.d.x, false), global2.d, global1.d.x), false)))), 15u)];
        }
        default: {
        }
    }
    return Struct_1(~77267i, _wgslsmith_add_i32(-1i, -_wgslsmith_mod_i32(20326i, abs(global2.b))), 1172f, vec3<bool>(global2.d.x, false, true));
}

fn func_3() -> vec4<f32> {
    switch (-44719i) {
        default: {
            for (; ; ) {
                if (LOOP_COUNTERS[12u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
                let var_0 = global1.d.x;
                let var_1 = global1.c;
                global1 = func_9(func_8(Struct_1(-global2.a, _wgslsmith_add_i32(global2.a, -1i), 731f, !select(vec3<bool>(global1.d.x, global2.d.x, true), global1.d, global1.d.x)), global1.d, firstTrailingBit(abs(~vec4<i32>(1i, u_input.a, 2147483647i, u_input.a))), func_4()), firstTrailingBit(~_wgslsmith_div_i32(1376i, 20485i)) & 1i, Struct_1(~global1.b, global1.a, _wgslsmith_f_op_f32(-599f - _wgslsmith_f_op_f32(step(-715f, _wgslsmith_f_op_f32(trunc(-363f))))), global2.d), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(round(-1225f)))))));
                var var_2 = global0[_wgslsmith_index_u32(firstTrailingBit(~1u), 15u)];
            }
            var var_0 = Struct_1(0i, i32(-2147483648) | -func_4().a, -196f, func_9(global0[_wgslsmith_index_u32(1u, 15u)], abs(func_6(Struct_1(63772i, global2.b, -1293f, vec3<bool>(global2.d.x, global1.d.x, true)), _wgslsmith_f_op_f32(select(global1.c, global2.c, global2.d.x)), Struct_1(u_input.a, 54826i, global1.c, global1.d))), func_9(Struct_1(~u_input.a, ~1i, global2.c, vec3<bool>(global1.d.x, global2.d.x, false)), global2.a, func_9(func_4(), global1.a ^ u_input.a, func_8(Struct_1(global2.b, -7277i, global1.c, vec3<bool>(global1.d.x, global1.d.x, global2.d.x)), global1.d, vec4<i32>(u_input.a, 0i, global2.b, global2.b), global0[_wgslsmith_index_u32(0u, 15u)]), global2.c), 263f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(func_4().c + _wgslsmith_f_op_f32(select(-161f, global1.c, false))) * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-417f * -1199f) - _wgslsmith_div_f32(global1.c, 1069f)))).d);
            loop {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                let var_1 = Struct_1(~(-(i32(-1i) * -24926i)), _wgslsmith_add_i32(func_4().b, ~(~global2.b)), 897f, global2.d);
                let var_2 = global1.d.zz;
                var var_3 = ~(~vec3<u32>(countOneBits(~0u), firstLeadingBit(1u) << (~4294967295u % 32u), ~1u));
                continue;
            }
            switch (_wgslsmith_sub_i32(_wgslsmith_add_i32(2866i, _wgslsmith_dot_vec4_i32(select(vec4<i32>(0i, 2147483647i, global2.b, 0i), vec4<i32>(global1.a, global1.a, var_0.a, -1i), vec4<bool>(var_0.d.x, true, false, var_0.d.x)) | -vec4<i32>(global2.a, u_input.a, 2147483647i, 4792i), (vec4<i32>(global2.b, 1i, -30101i, 22915i) & vec4<i32>(2147483647i, global2.a, -4185i, global2.a)) ^ vec4<i32>(14806i, global2.a, global2.a, i32(-2147483648)))), 1i)) {
                default: {
                    var_0 = global0[_wgslsmith_index_u32(0u, 15u)];
                    let var_1 = _wgslsmith_dot_vec2_i32(abs(vec2<i32>(func_9(func_8(Struct_1(0i, var_0.a, -1000f, global2.d), var_0.d, vec4<i32>(global1.b, u_input.a, var_0.a, var_0.a), global0[_wgslsmith_index_u32(32534u, 15u)]), -var_0.a, global0[_wgslsmith_index_u32(~0u, 15u)], var_0.c).b, i32(-1i) * -27426i)), ~(-max(vec2<i32>(i32(-2147483648), var_0.a), vec2<i32>(2147483647i, global2.a))) << (vec2<u32>(0u, ~1u) % vec2<u32>(32u)));
                    let var_2 = -(~(vec3<i32>(-42225i, 2147483647i, var_1) ^ _wgslsmith_div_vec3_i32(vec3<i32>(u_input.a, var_0.b, -19368i), vec3<i32>(var_0.b, u_input.a, u_input.a)))) << (~vec3<u32>(1u, 1u, 1u) % vec3<u32>(32u));
                    global3 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(sign(-864f)), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(var_0.c + _wgslsmith_f_op_f32(-var_0.c)))));
                    global1 = Struct_1(43712i, i32(-2147483648), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -639f)) - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(global2.c * 132f) - -1775f)) * func_9(func_4(), abs(-1i << (1u % 32u)), global0[_wgslsmith_index_u32(select(_wgslsmith_dot_vec4_u32(vec4<u32>(77743u, 20138u, 1u, 6565u), vec4<u32>(1u, 22057u, 1u, 26478u)), ~28185u, any(vec2<bool>(true, var_0.d.x))), 15u)], _wgslsmith_f_op_f32(f32(-1f) * -343f)).c), global1.d);
                }
            }
        }
    }
    var var_0 = ~39035u;
    switch (u_input.a) {
        case 2147483647i: {
            if (global1.d.x) {
                let var_1 = select(countOneBits(~(-vec2<i32>(-1i, global1.a))), vec2<i32>(-16495i, u_input.a | _wgslsmith_add_i32(1i, min(global1.b, u_input.a))), !(!all(select(vec4<bool>(true, global1.d.x, false, global1.d.x), vec4<bool>(false, global2.d.x, false, true), vec4<bool>(false, global2.d.x, false, true)))));
            }
        }
        case 0i: {
            switch (-u_input.a) {
                case -4944i: {
                    let var_1 = vec3<f32>(-761f, global2.c, 389f);
                    var var_2 = Struct_1(u_input.a, _wgslsmith_div_i32(abs(~(-global1.a)), ~(-u_input.a)), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(round(global1.c)), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(global2.c))), var_1.x, global2.d.x)), func_8(func_9(global0[_wgslsmith_index_u32(1u, 15u)], _wgslsmith_add_i32(u_input.a, u_input.a), func_9(global0[_wgslsmith_index_u32(74370u, 15u)], 3964i, Struct_1(-27543i, global1.b, global2.c, vec3<bool>(false, false, global2.d.x)), -1539f), _wgslsmith_f_op_f32(-global1.c)), vec3<bool>(!global1.d.x, true, global2.d.x != true), firstTrailingBit(reverseBits(vec4<i32>(global2.b, 37016i, 1i, u_input.a))), func_8(global0[_wgslsmith_index_u32(1u, 15u)], !vec3<bool>(true, false, global2.d.x), vec4<i32>(1i, u_input.a, 2147483647i, -23643i) ^ vec4<i32>(global1.b, i32(-2147483648), 21989i, global2.b), func_4())).d.x)), global2.d);
                    var var_3 = Struct_1(-17472i, _wgslsmith_div_i32(-func_8(Struct_1(i32(-2147483648), global2.b, global1.c, global1.d), global2.d, ~vec4<i32>(u_input.a, -1i, -1i, 1171i), global0[_wgslsmith_index_u32(select(90051u, 27007u, true), 15u)]).b, var_2.b), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(var_2.c))))), var_2.d);
                    let var_4 = -vec4<i32>(reverseBits(func_6(func_9(global0[_wgslsmith_index_u32(44637u, 15u)], global1.a, global0[_wgslsmith_index_u32(67938u, 15u)], 1782f), func_8(global0[_wgslsmith_index_u32(34183u, 15u)], vec3<bool>(true, var_2.d.x, true), vec4<i32>(i32(-2147483648), var_2.a, 2147483647i, var_2.b), global0[_wgslsmith_index_u32(1u, 15u)]).c, func_9(Struct_1(-22208i, 0i, -1000f, vec3<bool>(global2.d.x, true, true)), u_input.a, Struct_1(1i, var_2.a, -669f, vec3<bool>(false, global2.d.x, false)), var_1.x))), var_2.a, (global1.a << (1u % 32u)) & 9392i, ~(-var_3.b << (_wgslsmith_dot_vec3_u32(vec3<u32>(0u, 1u, 4294967295u), vec3<u32>(23140u, 42083u, 95777u)) % 32u)));
                }
                case 2147483647i: {
                }
                case -74889i: {
                    global1 = global0[_wgslsmith_index_u32(20406u, 15u)];
                }
                default: {
                    var var_1 = global0[_wgslsmith_index_u32(~_wgslsmith_mult_u32(1u, _wgslsmith_dot_vec3_u32(vec3<u32>(4294967295u, 86403u, 24884u), vec3<u32>(9897u, 19163u, 51221u)) & 1u) ^ _wgslsmith_dot_vec2_u32(~vec2<u32>(select(56060u, 93205u, global1.d.x), 83406u), reverseBits(vec2<u32>(1u, ~1u))), 15u)];
                    let var_2 = Struct_1(_wgslsmith_mod_i32(-1i, 15324i), global1.b, 1000f, func_9(func_8(func_9(Struct_1(global1.a, -40541i, -141f, global1.d), var_1.a, func_9(Struct_1(i32(-2147483648), i32(-2147483648), var_1.c, vec3<bool>(var_1.d.x, global2.d.x, global1.d.x)), 1i, global0[_wgslsmith_index_u32(0u, 15u)], global1.c), _wgslsmith_f_op_f32(select(-1073f, global2.c, false))), var_1.d, _wgslsmith_mult_vec4_i32(vec4<i32>(global1.a, u_input.a, global1.b, global1.b), _wgslsmith_mult_vec4_i32(vec4<i32>(-20920i, 1i, 1i, -49528i), vec4<i32>(var_1.b, -65277i, 2147483647i, 43150i))), Struct_1(_wgslsmith_dot_vec2_i32(vec2<i32>(var_1.a, 1i), vec2<i32>(8192i, u_input.a)), u_input.a, _wgslsmith_f_op_f32(floor(-882f)), select(global1.d, global1.d, vec3<bool>(false, true, true)))), ~(~(~global1.b)), Struct_1(-1i, ~min(1i, 2147483647i), 354f, global2.d), func_4().c).d);
                }
            }
            switch (~func_6(global0[_wgslsmith_index_u32(func_7(abs(~vec3<u32>(19992u, 4294967295u, 1u)), Struct_1(0i, 2147483647i, global1.c, !vec3<bool>(global2.d.x, false, false))), 15u)], func_4().c, Struct_1(1i, func_9(func_4(), -2147483647i, func_9(Struct_1(1i, -58177i, -439f, global1.d), -5972i, global0[_wgslsmith_index_u32(0u, 15u)], 1535f), _wgslsmith_f_op_f32(floor(-1061f))).a, _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(f32(-1f) * -1856f), -469f)), select(!vec3<bool>(true, global1.d.x, true), vec3<bool>(global1.d.x, false, false), false)))) {
                default: {
                    var var_1 = u_input.a;
                    var var_2 = !select(vec4<bool>(false, true, func_4().d.x, (u_input.a <= u_input.a) || global2.d.x), !vec4<bool>(any(vec4<bool>(global2.d.x, true, global2.d.x, false)), false, false, true), firstTrailingBit(min(global2.b, -802i)) <= _wgslsmith_mod_i32(max(global2.a, u_input.a), 1i));
                    let var_3 = _wgslsmith_mod_vec4_i32(~(-vec4<i32>(i32(-2147483648), _wgslsmith_sub_i32(global1.b, 0i), reverseBits(i32(-2147483648)), 2967i << (1u % 32u))), vec4<i32>(select(~u_input.a >> (1u % 32u), 0i, func_4().d.x), -1i, u_input.a, ~global1.a & -_wgslsmith_mod_i32(0i, -14999i)));
                    let var_4 = vec3<i32>(-1i) * -abs(_wgslsmith_add_vec3_i32(var_3.wxx, vec3<i32>(global1.b, 1i, 0i)));
                    global0 = array<Struct_1, 15>();
                }
            }
        }
        case 1i: {
            switch (_wgslsmith_sub_i32(_wgslsmith_dot_vec3_i32(firstLeadingBit(vec3<i32>(_wgslsmith_dot_vec4_i32(vec4<i32>(1022i, global2.a, global2.b, global1.a), vec4<i32>(3465i, -34853i, -1i, 21320i)), global2.a, select(-20471i, global1.a, false))), vec3<i32>(0i, u_input.a, abs(-40112i))), _wgslsmith_sub_i32(countOneBits(select(u_input.a, global1.b << (18853u % 32u), !global2.d.x)), 2147483647i))) {
                case -5692i: {
                    global1 = func_8(func_8(Struct_1(-global1.a, -global1.b & _wgslsmith_dot_vec2_i32(vec2<i32>(global1.a, u_input.a), vec2<i32>(u_input.a, 12572i)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -303f) * _wgslsmith_f_op_f32(285f - global1.c)), global1.d), vec3<bool>(true, global1.d.x, 2147483647i < ~global2.a), vec4<i32>(firstLeadingBit(-17869i & u_input.a), min(_wgslsmith_dot_vec2_i32(vec2<i32>(i32(-2147483648), 0i), vec2<i32>(global2.b, 2147483647i)), _wgslsmith_mult_i32(30372i, -68129i)), min(-32314i, i32(-1i) * -1i), u_input.a), global0[_wgslsmith_index_u32(1u, 15u)]), global2.d, -vec4<i32>(1i, u_input.a, 42576i, func_4().a), global0[_wgslsmith_index_u32(~(func_7(select(vec3<u32>(40599u, 0u, 4294967295u), vec3<u32>(1u, 1u, 1u), global1.d), func_9(Struct_1(global2.b, global1.a, global2.c, vec3<bool>(global1.d.x, true, true)), u_input.a, global0[_wgslsmith_index_u32(0u, 15u)], -957f)) ^ ~abs(41164u)), 15u)]);
                    var var_1 = _wgslsmith_f_op_f32(ceil(global2.c));
                    var var_2 = max(~(~vec3<u32>(1u, 1u, 1u)), select(reverseBits(vec3<u32>(7432u, max(4294967295u, 1u), 0u)), firstTrailingBit(select(vec3<u32>(1u, 0u, 1u), vec3<u32>(1u, 46818u, 1u), global1.d)) << (_wgslsmith_mult_vec3_u32(vec3<u32>(1u, 0u, 4294967295u), vec3<u32>(1u, 1u, 1u)) % vec3<u32>(32u)), global2.d.x));
                    global4 = max(12793u, ~(_wgslsmith_add_u32(var_2.x, 47491u) | _wgslsmith_div_u32(var_2.x, 10671u))) & func_7(abs(reverseBits(countOneBits(vec3<u32>(var_2.x, var_2.x, 25845u)))), Struct_1(~0i, ~_wgslsmith_add_i32(global1.a, 48276i), 195f, vec3<bool>(true, false, true)));
                }
                case 2147483647i: {
                    let var_1 = false | (_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(665f, 633f, true)))) < global2.c);
                    global0 = array<Struct_1, 15>();
                }
                case -1648i: {
                    global0 = array<Struct_1, 15>();
                    var var_1 = global1.d;
                }
                default: {
                    var var_1 = true;
                    let var_2 = global1.c;
                    let var_3 = true;
                    var var_4 = Struct_1(-23985i, global2.a, global1.c, global2.d);
                    global2 = Struct_1(global2.a ^ global2.a, func_6(func_9(Struct_1(1i, _wgslsmith_dot_vec3_i32(vec3<i32>(global1.a, global2.b, var_4.b), vec3<i32>(-1i, u_input.a, -1619i)), _wgslsmith_f_op_f32(-1292f), vec3<bool>(var_3, global1.d.x, var_4.d.x)), select(-2147483647i, _wgslsmith_clamp_i32(-32217i, 2147483647i, -28490i), var_4.d.x), global0[_wgslsmith_index_u32(~_wgslsmith_mult_u32(0u, 24785u), 15u)], _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(abs(103f))))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_div_f32(386f, -2313f) - _wgslsmith_f_op_f32(-599f * -358f)) * global2.c), Struct_1(-1i, global2.a, var_4.c, !vec3<bool>(var_4.d.x, global2.d.x, var_4.d.x))), _wgslsmith_f_op_f32(-func_4().c), global1.d);
                }
            }
            switch (-_wgslsmith_dot_vec4_i32(min(~vec4<i32>(u_input.a, 17132i, 0i, global1.b), -vec4<i32>(0i, global2.a, 1i, 14403i)) & select(select(vec4<i32>(9554i, 0i, global1.a, global1.b), vec4<i32>(17111i, global2.b, global2.a, global1.b), vec4<bool>(global1.d.x, false, false, global2.d.x)), vec4<i32>(u_input.a, global1.b, u_input.a, u_input.a), !vec4<bool>(false, global2.d.x, false, global2.d.x)), _wgslsmith_clamp_vec4_i32(countOneBits(vec4<i32>(global1.a, 0i, 42151i, 2147483647i)), vec4<i32>(-14244i, global2.b, u_input.a, 19812i), ~vec4<i32>(2147483647i, global1.b, global2.b, 21859i)) & ~min(vec4<i32>(u_input.a, 45338i, 55547i, 2147483647i), vec4<i32>(-17892i, 406i, 0i, 0i)))) {
                case 17318i: {
                    let var_1 = ~_wgslsmith_mult_u32(func_7(countOneBits(_wgslsmith_div_vec3_u32(vec3<u32>(0u, 54974u, 20807u), vec3<u32>(4294967295u, 58260u, 1u))), global0[_wgslsmith_index_u32(0u, 15u)]), _wgslsmith_mod_u32(_wgslsmith_mod_u32(reverseBits(4294967295u), ~0u), ~1u));
                    global4 = ~var_1;
                }
                default: {
                }
            }
        }
        default: {
            switch (156i) {
                case -21287i: {
                    global2 = global0[_wgslsmith_index_u32(~((_wgslsmith_dot_vec4_u32(vec4<u32>(0u, 1u, 1u, 42995u), vec4<u32>(7032u, 0u, 1u, 4294967295u)) << (min(0u, 51667u) % 32u)) << (countOneBits(1u) % 32u)) | ~1u, 15u)];
                    global0 = array<Struct_1, 15>();
                    var var_1 = Struct_1(func_4().b, global2.b, _wgslsmith_f_op_f32(ceil(global1.c)), global2.d);
                    let var_2 = global0[_wgslsmith_index_u32(reverseBits(_wgslsmith_mod_u32(~(~1u), ~firstTrailingBit(_wgslsmith_dot_vec2_u32(vec2<u32>(1u, 1u), vec2<u32>(44125u, 0u))))), 15u)];
                    global4 = _wgslsmith_mult_u32(~1u, _wgslsmith_add_u32(_wgslsmith_dot_vec4_u32(vec4<u32>(~75666u, 0u, 1u, _wgslsmith_mod_u32(4294967295u, 6503u)), vec4<u32>(1u, 1u, 1u, 1u)), 47719u));
                }
                case 2147483647i: {
                    var var_1 = vec4<f32>(_wgslsmith_f_op_f32(sign(global2.c)), global2.c, global1.c, _wgslsmith_f_op_f32(max(-2166f, _wgslsmith_div_f32(_wgslsmith_f_op_f32(select(global1.c, global2.c, 22957i > global1.b)), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(161f - -277f), _wgslsmith_f_op_f32(global2.c * global2.c), false & global2.d.x))))));
                }
                case 5263i: {
                    global3 = _wgslsmith_f_op_f32(min(1f, -641f));
                    var var_1 = func_9(Struct_1(global2.a, 1i, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1952f)) + global1.c), vec3<bool>(false, u_input.a < func_8(global0[_wgslsmith_index_u32(0u, 15u)], vec3<bool>(global2.d.x, false, global2.d.x), vec4<i32>(-65881i, global1.a, global1.b, global2.a), global0[_wgslsmith_index_u32(91759u, 15u)]).a, global2.d.x)), func_9(Struct_1(_wgslsmith_clamp_i32(_wgslsmith_mod_i32(-1i, u_input.a), 1i, i32(-1i) * -19212i), _wgslsmith_add_i32(-global2.b, global2.b), _wgslsmith_div_f32(-987f, _wgslsmith_f_op_f32(-676f)), vec3<bool>(all(vec4<bool>(global1.d.x, global1.d.x, true, global1.d.x)), global1.d.x, true)), u_input.a, func_4(), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1000f)), 1834f))).a, global0[_wgslsmith_index_u32(1u, 15u)], 507f);
                }
                default: {
                    var var_1 = ~(4294967295u | func_7(_wgslsmith_div_vec3_u32(vec3<u32>(4294967295u, 1u, 4294967295u), firstLeadingBit(vec3<u32>(35177u, 4337u, 58339u))), Struct_1(u_input.a, ~global2.b, -998f, select(vec3<bool>(true, global1.d.x, false), vec3<bool>(global2.d.x, global1.d.x, false), global2.d.x))));
                }
            }
            let var_1 = _wgslsmith_f_op_vec2_f32(trunc(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(global2.c, global1.c)) * _wgslsmith_f_op_vec2_f32(-vec2<f32>(-2200f, 439f))) - vec2<f32>(global2.c, _wgslsmith_f_op_f32(-global1.c))))));
            if (~0u == _wgslsmith_dot_vec2_u32(~(~vec2<u32>(0u, 1u)), select(vec2<u32>(1u, 1u), vec2<u32>(1u, 0u), !vec2<bool>(global2.d.x, false)))) {
                global2 = Struct_1(global2.b, u_input.a, 1306f, global2.d);
                var var_2 = global0[_wgslsmith_index_u32(~0u, 15u)];
                let var_3 = global0[_wgslsmith_index_u32(~((reverseBits(5358u) << (_wgslsmith_mult_u32(0u, 0u) % 32u)) << (~_wgslsmith_clamp_u32(4294967295u, 0u, 4294967295u) % 32u)) | abs(0u), 15u)];
            }
        }
    }
    for (var var_1 = 1i; false; var_1 += 1i) {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        var var_2 = func_9(func_4(), global2.b, func_8(global0[_wgslsmith_index_u32(~(~min(5183u, 11627u)), 15u)], select(global2.d, func_8(Struct_1(-1i, -7639i, global2.c, global2.d), !vec3<bool>(global2.d.x, global2.d.x, false), min(vec4<i32>(global1.a, 1i, i32(-2147483648), global2.a), vec4<i32>(44191i, global1.a, 1i, u_input.a)), Struct_1(7708i, 2726i, -126f, vec3<bool>(true, false, global2.d.x))).d, func_9(global0[_wgslsmith_index_u32(1644u, 15u)], global2.b, Struct_1(global2.b, global2.b, 540f, global1.d), global1.c).d.x & !global2.d.x), _wgslsmith_div_vec4_i32(_wgslsmith_div_vec4_i32(-vec4<i32>(2147483647i, -4786i, i32(-2147483648), global2.a), select(vec4<i32>(global1.b, -27140i, 2147483647i, 2147483647i), vec4<i32>(u_input.a, global1.a, i32(-2147483648), u_input.a), vec4<bool>(global2.d.x, global2.d.x, global1.d.x, global1.d.x))), firstLeadingBit(vec4<i32>(-66510i, -28441i, global2.a, 32416i))), func_9(global0[_wgslsmith_index_u32(_wgslsmith_clamp_u32(_wgslsmith_mult_u32(8728u, 0u), min(57465u, 31539u), 1u), 15u)], ~max(u_input.a, 15517i), global0[_wgslsmith_index_u32(~(~0u), 15u)], _wgslsmith_f_op_f32(abs(-290f)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(f32(-1f) * -902f))), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(min(global2.c, -1643f)), _wgslsmith_f_op_f32(round(global1.c)), func_8(Struct_1(global1.a, u_input.a, 1006f, vec3<bool>(global1.d.x, global2.d.x, true)), global1.d, vec4<i32>(-1i, -4187i, global1.b, 5367i), global0[_wgslsmith_index_u32(53390u, 15u)]).d.x))))));
        for (; func_9(global0[_wgslsmith_index_u32(1u, 15u)], i32(-2147483648), func_9(func_9(func_4(), ~1i, Struct_1(~global2.a, ~(i32(-2147483648)), _wgslsmith_f_op_f32(floor(-1839f)), select(global1.d, vec3<bool>(var_2.d.x, true, true), vec3<bool>(true, global1.d.x, var_2.d.x))), func_9(Struct_1(global2.b, 0i, -316f, global1.d), -global2.a, func_9(Struct_1(var_2.a, var_2.a, 884f, vec3<bool>(global2.d.x, false, false)), global2.a, Struct_1(-1i, -8365i, global2.c, var_2.d), 512f), -180f).c), ~_wgslsmith_div_i32(_wgslsmith_mod_i32(-4017i, -30278i), firstLeadingBit(23203i)), global0[_wgslsmith_index_u32(~_wgslsmith_div_u32(4294967295u, ~37217u), 15u)], _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(f32(-1f) * -415f), var_2.c))), global2.c).d.x; ) {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            var var_3 = global0[_wgslsmith_index_u32(1u, 15u)];
            var_0 = ~func_5(func_8(func_4(), var_2.d, ~reverseBits(vec4<i32>(0i, var_2.a, -1i, u_input.a)), func_8(global0[_wgslsmith_index_u32(0u, 15u)], vec3<bool>(global1.d.x, global2.d.x, var_3.d.x), vec4<i32>(-8018i, var_2.a, global1.b, u_input.a), func_4())), Struct_1(2147483647i, 6048i, _wgslsmith_f_op_f32(-var_2.c), vec3<bool>(false && global2.d.x, !var_2.d.x, all(var_2.d))), false, _wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(global1.c, var_2.c, 313f, -301f)) - _wgslsmith_f_op_vec4_f32(vec4<f32>(101f, -802f, global1.c, 151f) - vec4<f32>(-102f, global1.c, global2.c, var_3.c))), _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(max(vec4<f32>(-692f, global1.c, global1.c, global1.c), vec4<f32>(-330f, var_3.c, -261f, -704f))), _wgslsmith_f_op_vec4_f32(vec4<f32>(global1.c, global2.c, -644f, var_2.c) * vec4<f32>(-1000f, var_2.c, global1.c, 153f))))));
            break;
        }
        for (var var_3 = 9876i; global1.d.x && !(select(global2.d.x, global2.d.x, true) == all(global1.d)); ) {
            if (LOOP_COUNTERS[16u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
            let var_4 = i32(-1i) * i32(-2147483648);
            let var_5 = 4294967295u;
            break;
        }
        for (; ; ) {
            if (LOOP_COUNTERS[17u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
            continue;
        }
        let var_3 = !(!global2.d);
    }
    var_0 = _wgslsmith_dot_vec3_u32(countOneBits(vec3<u32>(83592u, func_5(global0[_wgslsmith_index_u32(0u, 15u)], Struct_1(global2.b, u_input.a, -695f, vec3<bool>(global2.d.x, true, global2.d.x)), global1.d.x, vec4<f32>(global1.c, global1.c, -825f, global1.c)), reverseBits(8859u))), vec3<u32>(1u, _wgslsmith_dot_vec2_u32(_wgslsmith_div_vec2_u32(vec2<u32>(2893u, 0u), vec2<u32>(19504u, 87721u)), select(vec2<u32>(0u, 4294967295u), vec2<u32>(25641u, 59421u), vec2<bool>(global1.d.x, false))), ~1u)) & 1u;
    return _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(519f, global2.c, 858f, 745f))))) * _wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(floor(vec4<f32>(global2.c, -1030f, global2.c, global1.c)))))));
}

fn func_2(arg_0: i32, arg_1: f32, arg_2: Struct_1, arg_3: i32) -> vec4<u32> {
    global3 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(arg_1 * -1016f)))) * global1.c) - _wgslsmith_div_f32(arg_2.c, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_1) * _wgslsmith_f_op_f32(_wgslsmith_div_f32(global2.c, arg_2.c) - _wgslsmith_div_f32(arg_1, 920f)))));
    for (var var_0 = -global2.b; var_0 < -91362i; global3 = arg_1) {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        let var_1 = arg_2.d;
    }
    let var_0 = arg_2.d;
    var var_1 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(func_3())));
    let var_2 = vec3<bool>(select(func_4().d.x, true, !(!var_0.x)), var_0.x, global2.d.x);
    return ~select(vec4<u32>(45367u, ~4294967295u, 4294967295u, 0u), ~firstLeadingBit(vec4<u32>(0u, 89861u, 23016u, 67437u)), select(select(vec4<bool>(var_0.x, arg_2.d.x, false, var_2.x), vec4<bool>(global2.d.x, global1.d.x, false, false), arg_2.d.x), !vec4<bool>(var_2.x, false, true, false), select(vec4<bool>(true, false, var_2.x, false), vec4<bool>(true, global1.d.x, true, var_0.x), true))) ^ ~vec4<u32>(1u, 1u, 1u, 1u);
}

fn func_1() -> vec4<u32> {
    if (global1.d.x) {
        return firstTrailingBit(~firstLeadingBit(vec4<u32>(16550u, _wgslsmith_mult_u32(0u, 0u), firstTrailingBit(74528u), 108292u)));
    }
    var var_0 = all(global1.d);
    if (true) {
        var var_1 = _wgslsmith_mult_u32(_wgslsmith_dot_vec2_u32(vec2<u32>(1u, 1u), vec2<u32>(1u, _wgslsmith_mult_u32(8468u, 1u << (1u % 32u)))), 1u);
        return _wgslsmith_sub_vec4_u32(func_2(_wgslsmith_mod_i32(-u_input.a, ~min(53044i, u_input.a)), 219f, global0[_wgslsmith_index_u32(44751u, 15u)], global2.a), vec4<u32>(~(~(~75095u)), _wgslsmith_dot_vec3_u32(vec3<u32>(57190u, 4294967295u, 0u), vec3<u32>(1u, 1u, 1u)) ^ 4621u, ~0u, _wgslsmith_dot_vec3_u32(reverseBits(vec3<u32>(0u, 50616u, 24406u)), ~(~vec3<u32>(0u, 1u, 18176u)))));
    }
    if (any(vec2<bool>(!(abs(0u) >= _wgslsmith_dot_vec4_u32(vec4<u32>(54682u, 0u, 0u, 4294967295u), vec4<u32>(48389u, 36055u, 0u, 0u))), true))) {
        loop {
            if (LOOP_COUNTERS[19u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
            let var_1 = func_8(Struct_1(func_6(Struct_1(1i, global2.a, global1.c, vec3<bool>(global1.d.x, global1.d.x, false)), _wgslsmith_f_op_f32(exp2(global2.c)), global0[_wgslsmith_index_u32(~67685u, 15u)]) >> (~1u % 32u), global2.a, _wgslsmith_div_f32(_wgslsmith_f_op_vec4_f32(func_3()).x, _wgslsmith_div_f32(_wgslsmith_f_op_f32(-global2.c), -1678f)), !func_8(Struct_1(9166i, 9247i, -295f, vec3<bool>(global1.d.x, true, true)), vec3<bool>(global2.d.x, global1.d.x, global2.d.x), vec4<i32>(global2.b, 26196i, 52576i, global1.a) | vec4<i32>(global2.b, global1.b, 10397i, 44869i), func_8(Struct_1(1i, 14507i, -1000f, vec3<bool>(false, global2.d.x, false)), global2.d, vec4<i32>(u_input.a, global2.b, 5097i, global1.a), Struct_1(global2.b, global2.a, -1222f, global1.d))).d), global1.d, ~vec4<i32>(i32(-1i) * -1i, _wgslsmith_add_i32(global1.b, ~(-55327i)), u_input.a, (i32(-2147483648) ^ global1.a) >> (~57949u % 32u)), func_8(global0[_wgslsmith_index_u32(76924u, 15u)], !vec3<bool>(true, !global1.d.x, -1448f < global1.c), vec4<i32>(u_input.a, 85819i, reverseBits(~(-35310i)), 0i), global0[_wgslsmith_index_u32(~(func_7(vec3<u32>(38481u, 70447u, 21364u), global0[_wgslsmith_index_u32(24360u, 15u)]) >> (func_5(global0[_wgslsmith_index_u32(0u, 15u)], global0[_wgslsmith_index_u32(70170u, 15u)], global2.d.x, vec4<f32>(global2.c, 1479f, global2.c, -321f)) % 32u)), 15u)]));
            global0 = array<Struct_1, 15>();
        }
        var var_1 = firstTrailingBit(_wgslsmith_mod_vec2_i32(max(_wgslsmith_sub_vec2_i32(vec2<i32>(-31960i, global2.b), vec2<i32>(2147483647i, global2.a)), vec2<i32>(1i, u_input.a)) | _wgslsmith_mult_vec2_i32(firstTrailingBit(vec2<i32>(-1i, global1.a)), vec2<i32>(global2.a, -1i)), vec2<i32>(1i, abs(_wgslsmith_div_i32(global2.b, u_input.a)))));
        for (var var_2: i32; ; var_2 -= 1i) {
            if (LOOP_COUNTERS[20u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
        }
    }
    let var_1 = vec2<i32>(-(~1i), -(~(-1i)));
    return ~select(firstLeadingBit(countOneBits(vec4<u32>(4294967295u, 69382u, 23147u, 663u))), abs(max(vec4<u32>(1u, 1u, 1u, 1u), ~vec4<u32>(19994u, 0u, 4537u, 12357u))), vec4<bool>(all(select(vec4<bool>(true, global2.d.x, false, global2.d.x), vec4<bool>(global2.d.x, global1.d.x, true, global1.d.x), global1.d.x)), (global1.d.x || true) || true, global2.d.x, true));
}

@compute
@workgroup_size(1)
fn main() {
    let var_0 = true;
    global2 = global0[_wgslsmith_index_u32(_wgslsmith_div_u32(_wgslsmith_add_u32(45358u, _wgslsmith_dot_vec4_u32(func_1(), ~func_1())), 16400u), 15u)];
    let var_1 = func_4();
    switch (global1.a) {
        default: {
            let var_2 = var_0;
            let var_3 = _wgslsmith_f_op_vec3_f32(round(vec3<f32>(-1553f, global2.c, _wgslsmith_f_op_f32(f32(-1f) * -1408f))));
        }
    }
    for (var var_2 = func_8(func_8(func_9(func_4(), 86674i, var_1, 1000f), !global2.d, -reverseBits(_wgslsmith_mult_vec4_i32(vec4<i32>(global1.a, i32(-2147483648), 30248i, -13819i), vec4<i32>(global1.b, u_input.a, u_input.a, global2.a))), func_9(Struct_1(-46091i, i32(-1i) * -9325i, _wgslsmith_f_op_f32(sign(global1.c)), var_1.d), 1i, var_1, 1014f)), !(!(!vec3<bool>(global1.d.x, global2.d.x, global2.d.x))), select(_wgslsmith_mod_vec4_i32(firstTrailingBit(-vec4<i32>(var_1.b, 33274i, u_input.a, global2.b)), ~(~vec4<i32>(global2.b, 0i, -28764i, 5655i))), _wgslsmith_clamp_vec4_i32(abs(vec4<i32>(1i, global1.a, 18951i, global1.b) & vec4<i32>(global1.a, -20028i, -1i, var_1.b)), _wgslsmith_mod_vec4_i32(~vec4<i32>(global1.b, -1i, global1.b, var_1.a), abs(vec4<i32>(u_input.a, 2147483647i, global2.b, global1.b))), vec4<i32>(1i, u_input.a, -1i, ~global1.a)), !func_8(func_4(), var_1.d, ~vec4<i32>(-1i, 73812i, -19292i, global1.b), global0[_wgslsmith_index_u32(_wgslsmith_mod_u32(4294967295u, 4637u), 15u)]).d.x), Struct_1(1i, -(~global1.b), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global1.c)), global1.d)).a; var_2 < 82281i; ) {
        if (LOOP_COUNTERS[21u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
    }
    global4 = 28459u;
    let var_2 = true;
    let x = u_input.a;
    s_output = StorageBuffer(func_8(global0[_wgslsmith_index_u32(24096u, 15u)], !var_1.d, _wgslsmith_mod_vec4_i32(reverseBits(vec4<i32>(var_1.a, var_1.b, global1.a, -1i)), _wgslsmith_div_vec4_i32(-vec4<i32>(var_1.a, -1i, 2147483647i, -3896i), _wgslsmith_mod_vec4_i32(vec4<i32>(2147483647i, u_input.a, global2.a, -6289i), vec4<i32>(global1.b, 0i, 1i, -24311i)))), func_9(func_8(global0[_wgslsmith_index_u32(31138u, 15u)], !global2.d, vec4<i32>(-48294i, var_1.a, var_1.b, 19181i), var_1), 14682i, global0[_wgslsmith_index_u32(~_wgslsmith_dot_vec4_u32(vec4<u32>(1u, 14101u, 55011u, 0u), vec4<u32>(1u, 4294967295u, 0u, 19927u)), 15u)], _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(var_1.c + var_1.c))))).a, _wgslsmith_f_op_f32(-1294f));
}

`;