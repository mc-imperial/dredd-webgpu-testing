export const input = [201,205,133,194,84,172,246,68,251,191,163,94,50,125,247,158,189,241,10,116,195,146,47,205,138,151,208,96,112,123,120,139,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [201,205,133,194,84,172,246,68,251,191,163,94,50,125,247,158,189,241,10,116,195,146,47,205,138,151,208,96,112,123,120,139,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[201,205,133,194,84,172,246,68,251,191,163,94,50,125,247,158,189,241,10,116,195,146,47,205,138,151,208,96,112,123,120,139]}
// Seed: 3156324336136900499

struct Struct_1 {
    a: i32,
}

struct Struct_2 {
    a: Struct_1,
    b: vec3<u32>,
    c: Struct_1,
    d: i32,
}

struct Struct_3 {
    a: vec4<i32>,
    b: bool,
    c: Struct_2,
}

struct UniformBuffer {
    a: i32,
    b: vec3<i32>,
}

struct StorageBuffer {
    a: u32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<Struct_3, 12> = array<Struct_3, 12>(Struct_3(vec4<i32>(i32(-2147483648), 57258i, -1i, i32(-2147483648)), true, Struct_2(Struct_1(1i), vec3<u32>(14607u, 12390u, 30133u), Struct_1(-18368i), -24979i)), Struct_3(vec4<i32>(-1i, 1i, -3613i, -1i), false, Struct_2(Struct_1(73735i), vec3<u32>(70222u, 60081u, 32424u), Struct_1(2147483647i), 1i)), Struct_3(vec4<i32>(i32(-2147483648), i32(-2147483648), i32(-2147483648), 20921i), true, Struct_2(Struct_1(-40949i), vec3<u32>(0u, 37507u, 80835u), Struct_1(i32(-2147483648)), 0i)), Struct_3(vec4<i32>(i32(-2147483648), 41712i, 71580i, 1i), false, Struct_2(Struct_1(-1i), vec3<u32>(60599u, 4294967295u, 2615u), Struct_1(26198i), 9216i)), Struct_3(vec4<i32>(-1i, 6480i, -5610i, 0i), false, Struct_2(Struct_1(2147483647i), vec3<u32>(1u, 39949u, 77839u), Struct_1(0i), 0i)), Struct_3(vec4<i32>(1i, -1i, 0i, i32(-2147483648)), false, Struct_2(Struct_1(-10300i), vec3<u32>(51449u, 1u, 44794u), Struct_1(8520i), -24592i)), Struct_3(vec4<i32>(9408i, 0i, -1i, -16324i), false, Struct_2(Struct_1(-1i), vec3<u32>(4000u, 0u, 0u), Struct_1(i32(-2147483648)), i32(-2147483648))), Struct_3(vec4<i32>(0i, -1i, -18526i, -29719i), true, Struct_2(Struct_1(1i), vec3<u32>(1u, 8340u, 1u), Struct_1(42149i), 0i)), Struct_3(vec4<i32>(i32(-2147483648), -9672i, 0i, 5908i), false, Struct_2(Struct_1(26180i), vec3<u32>(31845u, 1u, 0u), Struct_1(77560i), 2147483647i)), Struct_3(vec4<i32>(0i, -1i, -35221i, -94256i), true, Struct_2(Struct_1(-53584i), vec3<u32>(64421u, 4294967295u, 4294967295u), Struct_1(-2678i), 14147i)), Struct_3(vec4<i32>(-1i, 7366i, 1i, 1i), true, Struct_2(Struct_1(-39464i), vec3<u32>(15584u, 1u, 4294967295u), Struct_1(46857i), i32(-2147483648))), Struct_3(vec4<i32>(27956i, -28271i, 2147483647i, -1i), false, Struct_2(Struct_1(i32(-2147483648)), vec3<u32>(75009u, 1u, 0u), Struct_1(-5126i), -5983i)));

var<private> global1: Struct_3;

var<private> global2: array<Struct_1, 21>;

var<private> LOOP_COUNTERS: array<u32, 21>;

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn func_6(arg_0: Struct_1) -> u32 {
    var var_0 = _wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1203f) * _wgslsmith_f_op_f32(-112f))), -179f) - _wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(1326f * 212f) - 1f), _wgslsmith_f_op_f32(-882f)) - vec2<f32>(_wgslsmith_f_op_f32(-1312f * -781f), 1000f)));
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        switch (~(-arg_0.a)) {
            case -28560i: {
                break;
            }
            default: {
                var var_1 = Struct_1(u_input.b.x | -21535i);
                var var_2 = Struct_3(global1.a, !(global1.b && global1.b), Struct_2(global1.c.a, _wgslsmith_sub_vec3_u32(firstTrailingBit(~global1.c.b), vec3<u32>(~global1.c.b.x, _wgslsmith_sub_u32(73637u, global1.c.b.x), ~global1.c.b.x)), Struct_1(firstTrailingBit(-27675i)), firstLeadingBit(global1.c.c.a)));
                global0 = array<Struct_3, 12>();
                var_2 = global0[_wgslsmith_index_u32(var_2.c.b.x, 12u)];
                var var_3 = global1.b;
            }
        }
        let var_1 = Struct_3(_wgslsmith_sub_vec4_i32(global1.a, countOneBits(vec4<i32>(global1.a.x, select(-5741i, 2147483647i, global1.b), arg_0.a, arg_0.a))), global1.b || all(select(select(vec3<bool>(false, true, global1.b), vec3<bool>(true, true, true), vec3<bool>(global1.b, true, global1.b)), vec3<bool>(global1.b, global1.b, false), select(vec3<bool>(global1.b, global1.b, false), vec3<bool>(false, global1.b, global1.b), vec3<bool>(global1.b, true, global1.b)))), Struct_2(Struct_1(-1i), ~(~global1.c.b), global1.c.c, reverseBits(~countOneBits(2147483647i))));
        let var_2 = var_0.x >= _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_0.x) - var_0.x));
        break;
    }
    loop {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
    }
    for (; ; ) {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        if (all(vec2<bool>(any(vec2<bool>(any(vec2<bool>(true, true)), false)), select(true, global1.b, any(select(vec4<bool>(false, false, false, false), vec4<bool>(global1.b, global1.b, global1.b, false), global1.b)))))) {
            let var_1 = all(select(select(!(!vec4<bool>(true, global1.b, false, global1.b)), select(vec4<bool>(false, false, global1.b, global1.b), select(vec4<bool>(false, global1.b, true, true), vec4<bool>(true, global1.b, true, false), vec4<bool>(false, global1.b, global1.b, true)), -22768i == u_input.b.x), vec4<bool>(false & global1.b, true, all(vec4<bool>(global1.b, true, false, global1.b)), all(vec3<bool>(false, true, true)))), vec4<bool>(all(vec3<bool>(true, true, true)), global1.b, true, !select(true, true, global1.b)), vec4<bool>(true, any(select(vec3<bool>(false, true, true), vec3<bool>(false, global1.b, false), vec3<bool>(global1.b, global1.b, global1.b))), _wgslsmith_dot_vec4_u32(vec4<u32>(global1.c.b.x, 8308u, global1.c.b.x, 38014u), vec4<u32>(19422u, global1.c.b.x, 23136u, 11307u)) >= _wgslsmith_sub_u32(global1.c.b.x, global1.c.b.x), -879f >= _wgslsmith_f_op_f32(var_0.x * var_0.x))));
            let var_2 = Struct_2(global1.c.a, global1.c.b, Struct_1(-25114i), ~(~arg_0.a) >> (global1.c.b.x % 32u));
            let var_3 = var_1;
        }
    }
    global2 = array<Struct_1, 21>();
    return global1.c.b.x;
}

fn func_5() -> u32 {
    switch (_wgslsmith_sub_i32(1i, (2147483647i >> (firstTrailingBit(global1.c.b.x) % 32u)) ^ 0i)) {
        case -49343i: {
            global0 = array<Struct_3, 12>();
        }
        default: {
            let var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1121f));
        }
    }
    if (true) {
        var var_0 = func_6(Struct_1(u_input.b.x)) < global1.c.b.x;
        let var_1 = 1095f;
    }
    var var_0 = Struct_3(~min(global1.a, global1.a), !global1.b, Struct_2(Struct_1(-47546i), global1.c.b, global1.c.a, 25932i));
    for (var var_1 = i32(-2147483648); var_1 >= 48894i; var_1 -= 1i) {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        break;
    }
    loop {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        var var_1 = global1.c.b;
        if (true && !(!any(vec2<bool>(true, true)))) {
            global2 = array<Struct_1, 21>();
            var var_2 = global0[_wgslsmith_index_u32(abs(var_1.x), 12u)];
            var var_3 = var_2.a;
            global1 = global0[_wgslsmith_index_u32(var_0.c.b.x, 12u)];
            break;
        }
        if (false) {
        }
        if (true | global1.b) {
            let var_2 = var_0.c.c;
            continue;
        }
    }
    return 504u;
}

fn func_4(arg_0: Struct_2, arg_1: vec2<bool>) -> vec2<f32> {
    var var_0 = ~(~firstLeadingBit(~arg_0.b.x));
    for (var var_1 = 37208i; arg_1.x; global1 = global0[_wgslsmith_index_u32(1u, 12u)]) {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        for (var var_2 = min(-53644i, u_input.b.x >> (~_wgslsmith_mod_u32(arg_0.b.x, global1.c.b.x) % 32u)) << (~6092u % 32u); arg_1.x; var_1 = u_input.b.x) {
            if (LOOP_COUNTERS[6u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        }
        let var_2 = _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(round(-1578f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(1976f, 1123f, false))))), all(select(select(!arg_1, vec2<bool>(global1.b, arg_1.x), arg_1), !select(arg_1, arg_1, vec2<bool>(arg_1.x, arg_1.x)), !arg_1))));
        if (false) {
        }
        loop {
            if (LOOP_COUNTERS[7u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
            var_0 = func_5();
            continue;
        }
    }
    var var_1 = _wgslsmith_add_vec3_u32(vec3<u32>(~arg_0.b.x, 34687u, ~func_6(Struct_1(19648i))), ~vec3<u32>((43470u | global1.c.b.x) | 0u, arg_0.b.x, reverseBits(_wgslsmith_clamp_u32(1u, 4294967295u, arg_0.b.x))));
    switch (global1.a.x) {
        default: {
        }
    }
    switch (-global1.c.d) {
        case -23284i: {
            global2 = array<Struct_1, 21>();
            var var_2 = Struct_3(vec4<i32>(_wgslsmith_sub_i32(abs(reverseBits(u_input.a)), (16313i & global1.a.x) | (arg_0.d ^ 16546i)), min(_wgslsmith_dot_vec2_i32(~vec2<i32>(i32(-2147483648), arg_0.c.a), vec2<i32>(-30247i, u_input.a)), -33279i), u_input.b.x, global1.a.x), global1.b, Struct_2(arg_0.c, ~(~_wgslsmith_div_vec3_u32(vec3<u32>(3426u, 1u, global1.c.b.x), global1.c.b)), Struct_1(abs(i32(-2147483648))), firstLeadingBit(~(-29183i))));
            return _wgslsmith_div_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(1f * 2767f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -981f) - 570f))), _wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(-448f, -378f))) * _wgslsmith_f_op_vec2_f32(max(_wgslsmith_f_op_vec2_f32(vec2<f32>(589f, -162f) - vec2<f32>(162f, -1785f)), _wgslsmith_f_op_vec2_f32(vec2<f32>(590f, -1099f) * vec2<f32>(-122f, 165f))))), vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1067f)), 370f))));
        }
        case -1i: {
            var var_2 = select(_wgslsmith_mult_vec2_i32(global1.a.wy, _wgslsmith_div_vec2_i32(select(global1.a.zw, vec2<i32>(-5882i, u_input.a), !global1.b), firstTrailingBit(abs(vec2<i32>(-44270i, -52087i))))), select(~(~vec2<i32>(-23469i, u_input.b.x)), u_input.b.yx, vec2<bool>(true, true)), global1.b & any(select(select(vec4<bool>(arg_1.x, true, arg_1.x, false), vec4<bool>(false, global1.b, global1.b, true), vec4<bool>(false, arg_1.x, true, global1.b)), vec4<bool>(global1.b, global1.b, global1.b, global1.b), select(vec4<bool>(arg_1.x, true, true, true), vec4<bool>(true, global1.b, global1.b, true), vec4<bool>(arg_1.x, arg_1.x, false, arg_1.x)))));
            let var_3 = global0[_wgslsmith_index_u32(var_1.x, 12u)];
            let var_4 = arg_1;
            let var_5 = -336f;
        }
        case 29577i: {
            loop {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                var_0 = 19019u;
                var var_2 = firstLeadingBit(abs(_wgslsmith_add_vec4_u32(abs(_wgslsmith_mult_vec4_u32(vec4<u32>(8421u, var_1.x, arg_0.b.x, arg_0.b.x), vec4<u32>(4294967295u, global1.c.b.x, 2655u, arg_0.b.x))), ~vec4<u32>(global1.c.b.x, 38539u, global1.c.b.x, 0u))));
                var var_3 = 7104i;
            }
            var var_2 = vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(_wgslsmith_div_f32(_wgslsmith_f_op_f32(round(875f)), _wgslsmith_f_op_f32(ceil(486f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(1422f)) - -812f)))), _wgslsmith_f_op_f32(2336f + _wgslsmith_f_op_f32(-455f)), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(-218f, 340f)) + _wgslsmith_f_op_f32(-1832f)))))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(-276f)) - 1f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(159f)) + 1395f) + _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(max(-1100f, -1000f)))))));
            for (; false; ) {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                var var_3 = abs(_wgslsmith_mod_vec3_i32(vec3<i32>(~u_input.b.x, -2147483647i, -(arg_0.c.a | i32(-2147483648))), vec3<i32>(u_input.b.x, u_input.b.x, global1.a.x)));
                break;
            }
            let var_3 = arg_0;
        }
        case 23909i: {
            let var_2 = _wgslsmith_dot_vec4_i32(~_wgslsmith_mult_vec4_i32(vec4<i32>(min(i32(-2147483648), arg_0.c.a), -arg_0.d, 20581i, ~0i), global1.a), vec4<i32>(_wgslsmith_dot_vec3_i32(~u_input.b, ~_wgslsmith_clamp_vec3_i32(u_input.b, global1.a.xzx, global1.a.wwz)), 44196i, -27098i, 1i));
            loop {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                var_1 = max((firstTrailingBit(countOneBits(global1.c.b)) ^ ~vec3<u32>(arg_0.b.x, 1u, 66721u)) ^ ~vec3<u32>(26271u, var_1.x, _wgslsmith_dot_vec3_u32(vec3<u32>(arg_0.b.x, arg_0.b.x, arg_0.b.x), vec3<u32>(1826u, 30078u, var_1.x))), vec3<u32>(_wgslsmith_div_u32(max(_wgslsmith_clamp_u32(18911u, 65674u, var_1.x), var_1.x), _wgslsmith_add_u32(global1.c.b.x, 80563u)), arg_0.b.x >> (_wgslsmith_dot_vec4_u32(select(vec4<u32>(11231u, var_1.x, var_1.x, var_1.x), vec4<u32>(var_1.x, 66102u, var_1.x, global1.c.b.x), vec4<bool>(arg_1.x, global1.b, arg_1.x, false)), ~vec4<u32>(arg_0.b.x, arg_0.b.x, 15227u, 13189u)) % 32u), ~func_6(global2[_wgslsmith_index_u32(var_1.x, 21u)])));
            }
            var var_3 = -290f;
            var var_4 = vec3<u32>(_wgslsmith_add_u32(var_1.x, _wgslsmith_mult_u32(global1.c.b.x, var_1.x)), ~5249u, var_1.x);
            let var_5 = i32(-2147483648);
        }
        default: {
            var var_2 = -1113f;
            var_0 = 16119u;
        }
    }
    return _wgslsmith_f_op_vec2_f32(trunc(_wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1468f) * _wgslsmith_f_op_f32(1000f + 2639f)), 315f) - _wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_div_f32(583f, 1842f), 1f)))));
}

fn func_3(arg_0: u32, arg_1: vec4<i32>, arg_2: vec3<i32>, arg_3: Struct_2) -> vec3<bool> {
    global1 = global0[_wgslsmith_index_u32(firstLeadingBit(firstTrailingBit(arg_0)), 12u)];
    var var_0 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(floor(1f)), _wgslsmith_div_f32(1000f, _wgslsmith_f_op_f32(-596f))) + _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(-1242f, -214f) + vec2<f32>(298f, 1247f)) * _wgslsmith_f_op_vec2_f32(func_4(Struct_2(Struct_1(16522i), vec3<u32>(1u, global1.c.b.x, arg_0), Struct_1(1i), -34327i), vec2<bool>(true, global1.b)))))));
    let var_1 = ~countOneBits(abs(~global1.c.b));
    let var_2 = vec4<i32>(_wgslsmith_sub_i32(~(~(arg_2.x & -28631i)), _wgslsmith_dot_vec4_i32(-global1.a, countOneBits(vec4<i32>(-52303i, arg_1.x, 2147483647i, -24067i)) >> (vec4<u32>(0u, arg_0, arg_3.b.x, 0u) % vec4<u32>(32u)))), 0i, 2147483647i, -firstLeadingBit(2147483647i));
    switch (_wgslsmith_clamp_i32(-arg_2.x, _wgslsmith_mod_i32(abs(~select(arg_2.x, 1i, global1.b)), -5417i), max(-global1.c.c.a, arg_2.x))) {
        case -35197i: {
            global0 = array<Struct_3, 12>();
            loop {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                global2 = array<Struct_1, 21>();
                global2 = array<Struct_1, 21>();
                var var_3 = reverseBits(_wgslsmith_dot_vec4_u32(vec4<u32>(~global1.c.b.x, global1.c.b.x, 61117u, ~reverseBits(49697u)), _wgslsmith_clamp_vec4_u32(select(vec4<u32>(0u, arg_0, arg_3.b.x, 32208u), vec4<u32>(9038u, 34296u, arg_3.b.x, arg_3.b.x) | vec4<u32>(5957u, 4294967295u, var_1.x, var_1.x), select(vec4<bool>(false, global1.b, global1.b, true), vec4<bool>(true, global1.b, false, global1.b), vec4<bool>(true, true, true, true))), _wgslsmith_mod_vec4_u32(vec4<u32>(4294967295u, var_1.x, 60454u, 60111u) | vec4<u32>(arg_0, var_1.x, var_1.x, 0u), countOneBits(vec4<u32>(var_1.x, global1.c.b.x, var_1.x, var_1.x))), max(vec4<u32>(arg_3.b.x, arg_3.b.x, arg_3.b.x, 64231u), vec4<u32>(arg_3.b.x, 27140u, arg_0, 4294967295u)))));
                global2 = array<Struct_1, 21>();
                var var_4 = ~(-(vec3<i32>(-1i) * -vec3<i32>(25074i, 0i, -1i)));
            }
            let var_3 = Struct_2(Struct_1(firstTrailingBit(countOneBits(1i))), ~(~max(global1.c.b, min(var_1, global1.c.b))), Struct_1(_wgslsmith_mod_i32(global1.a.x, 1i)), _wgslsmith_add_i32(_wgslsmith_clamp_i32(arg_3.a.a, _wgslsmith_sub_i32(_wgslsmith_add_i32(arg_1.x, 35134i), -arg_3.d), 20978i), ~(_wgslsmith_sub_i32(-1838i, 13606i) >> (_wgslsmith_clamp_u32(9465u, 4294967295u, arg_3.b.x) % 32u))));
            if (!global1.b | any(select(select(vec4<bool>(false, global1.b, global1.b, false), select(vec4<bool>(true, true, true, true), vec4<bool>(global1.b, global1.b, global1.b, global1.b), global1.b), select(vec4<bool>(global1.b, true, global1.b, false), vec4<bool>(global1.b, true, false, true), vec4<bool>(false, global1.b, global1.b, global1.b))), select(!vec4<bool>(global1.b, false, false, false), vec4<bool>(true, true, true, true), global1.b), select(!vec4<bool>(global1.b, false, global1.b, global1.b), select(vec4<bool>(global1.b, global1.b, true, true), vec4<bool>(false, global1.b, true, true), true), true)))) {
                var_0 = vec2<f32>(1043f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_0.x)));
                global1 = global0[_wgslsmith_index_u32(global1.c.b.x, 12u)];
                global2 = array<Struct_1, 21>();
                global0 = array<Struct_3, 12>();
            }
            switch (min(_wgslsmith_dot_vec3_i32(vec3<i32>(2147483647i, -var_2.x, _wgslsmith_add_i32(0i, arg_3.a.a)), _wgslsmith_div_vec3_i32(vec3<i32>(var_3.a.a, 2147483647i, var_3.a.a), vec3<i32>(2147483647i, arg_2.x, u_input.a) & vec3<i32>(var_2.x, u_input.b.x, var_3.a.a))), _wgslsmith_sub_i32(abs(var_2.x), firstTrailingBit(_wgslsmith_add_i32(53263i, arg_3.d)))) & firstTrailingBit(_wgslsmith_dot_vec4_i32(select(vec4<i32>(2147483647i, -1i, var_3.c.a, global1.a.x), ~vec4<i32>(arg_3.c.a, -1i, i32(-2147483648), var_2.x), select(vec4<bool>(global1.b, false, false, false), vec4<bool>(global1.b, global1.b, global1.b, global1.b), vec4<bool>(global1.b, global1.b, true, true))), vec4<i32>(~u_input.b.x, ~23778i, max(var_2.x, -1i), ~35768i)))) {
                case 2147483647i: {
                    global1 = Struct_3(vec4<i32>(-16758i, reverseBits(6260i), _wgslsmith_add_i32(i32(-1i) * -arg_3.d, ~(i32(-2147483648))), min(arg_1.x ^ global1.c.c.a, _wgslsmith_dot_vec3_i32(vec3<i32>(-1i, global1.c.c.a, var_3.a.a), vec3<i32>(arg_2.x, 19207i, i32(-2147483648))) | global1.c.d)), !select(false, any(vec3<bool>(global1.b, true, false)), true), var_3);
                    let var_4 = global1.b;
                    let var_5 = global2[_wgslsmith_index_u32(1u, 21u)];
                }
                case i32(-2147483648): {
                    global1 = global0[_wgslsmith_index_u32(firstTrailingBit(abs(~79859u)), 12u)];
                    let var_4 = vec2<i32>(~u_input.b.x, ~(~(-25365i) << (countOneBits(1u) % 32u)));
                }
                case -1778i: {
                    var_0 = _wgslsmith_div_vec2_f32(_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(sign(vec2<f32>(312f, var_0.x))), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(-1432f, var_0.x) * vec2<f32>(-911f, 1000f))))), _wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_f_op_vec2_f32(max(_wgslsmith_f_op_vec2_f32(abs(_wgslsmith_f_op_vec2_f32(-vec2<f32>(var_0.x, var_0.x)))), _wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(vec2<f32>(276f, var_0.x) + vec2<f32>(-798f, 1479f)), _wgslsmith_f_op_vec2_f32(vec2<f32>(328f, -309f) * vec2<f32>(807f, -1000f)))))))));
                    let var_4 = select(select(!select(select(vec2<bool>(global1.b, global1.b), vec2<bool>(global1.b, true), global1.b), select(vec2<bool>(true, global1.b), vec2<bool>(global1.b, global1.b), global1.b), false), select(select(vec2<bool>(global1.b, true), !vec2<bool>(global1.b, global1.b), !vec2<bool>(true, global1.b)), !vec2<bool>(global1.b, false), true), !global1.b), !vec2<bool>(all(vec2<bool>(global1.b, global1.b)), select(true, all(vec3<bool>(global1.b, global1.b, global1.b)), all(vec2<bool>(global1.b, false)))), all(vec3<bool>(false, true, global1.a.x < ~45343i)));
                }
                default: {
                    var_0 = _wgslsmith_f_op_vec2_f32(trunc(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(-1000f, _wgslsmith_f_op_f32(-var_0.x)) + _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(func_4(global1.c, vec2<bool>(true, true))), _wgslsmith_f_op_vec2_f32(step(vec2<f32>(var_0.x, 137f), vec2<f32>(var_0.x, 1308f))))))));
                    let var_4 = vec4<u32>(~35315u, firstLeadingBit(var_1.x) ^ 4294967295u, ~firstLeadingBit(~var_3.b.x), _wgslsmith_mod_u32(arg_0, func_6(var_3.a)));
                    let var_5 = 23301u;
                    var_0 = vec2<f32>(-395f, _wgslsmith_f_op_f32(-var_0.x));
                }
            }
        }
        default: {
            let var_3 = Struct_1(firstTrailingBit(31783i));
        }
    }
    return select(!select(!vec3<bool>(global1.b, global1.b, true), select(!vec3<bool>(false, global1.b, true), !vec3<bool>(true, true, global1.b), global1.b), !(!vec3<bool>(true, global1.b, false))), select(!vec3<bool>(global1.b, false, true), vec3<bool>(!global1.b, global1.b, global1.b), vec3<bool>(!global1.b == false, true, any(select(vec2<bool>(global1.b, global1.b), vec2<bool>(global1.b, true), true)))), vec3<bool>(!global1.b, select(!global1.b, 69444u < abs(var_1.x), false), false));
}

fn func_2(arg_0: Struct_2, arg_1: Struct_3, arg_2: Struct_2, arg_3: Struct_1) -> Struct_2 {
    var var_0 = global1.c.b.x;
    if (all(select(!select(select(vec3<bool>(false, arg_1.b, arg_1.b), vec3<bool>(true, arg_1.b, false), arg_1.b), !vec3<bool>(global1.b, global1.b, true), vec3<bool>(true, global1.b, global1.b)), !vec3<bool>(false || arg_1.b, true, false), func_3(1u, global1.a, -global1.a.yyz >> ((vec3<u32>(arg_2.b.x, arg_0.b.x, 0u) >> (global1.c.b % vec3<u32>(32u))) % vec3<u32>(32u)), Struct_2(Struct_1(-13907i), ~global1.c.b, Struct_1(-35099i), _wgslsmith_div_i32(1i, 2147483647i)))))) {
        switch (arg_0.c.a) {
            case 0i: {
                global1 = arg_1;
                let var_1 = Struct_3(abs(vec4<i32>(-1i, _wgslsmith_add_i32(arg_3.a, arg_3.a) | (arg_1.a.x | -1i), global1.a.x, -(arg_3.a & 1704i))), arg_1.b, Struct_2(global2[_wgslsmith_index_u32(arg_0.b.x, 21u)], firstTrailingBit(arg_1.c.b), Struct_1(0i >> (func_5() % 32u)), -_wgslsmith_add_i32(arg_2.c.a, 1i)));
                var var_2 = Struct_3(global1.a, !(!var_1.b), var_1.c);
                let var_3 = Struct_1(countOneBits(countOneBits(_wgslsmith_dot_vec4_i32(-var_1.a, max(global1.a, global1.a)))));
                let var_4 = _wgslsmith_add_u32(var_1.c.b.x, arg_0.b.x);
            }
            case -1i: {
            }
            case 2147483647i: {
                global0 = array<Struct_3, 12>();
                global2 = array<Struct_1, 21>();
                return Struct_2(Struct_1(max(~(-12531i), i32(-1i) * -arg_3.a)), ~vec3<u32>(_wgslsmith_sub_u32(_wgslsmith_dot_vec2_u32(global1.c.b.xx, vec2<u32>(arg_1.c.b.x, 4294967295u)), ~4294967295u), global1.c.b.x, countOneBits(global1.c.b.x)), arg_0.a, ~_wgslsmith_div_i32(global1.a.x, -11322i >> (arg_2.b.x % 32u)) >> ((min(arg_1.c.b.x, 71260u) >> (arg_0.b.x % 32u)) % 32u));
            }
            default: {
            }
        }
        for (; arg_1.b; ) {
            if (LOOP_COUNTERS[12u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
            let var_1 = Struct_2(Struct_1(arg_0.d), vec3<u32>(~_wgslsmith_div_u32(reverseBits(1u), arg_1.c.b.x ^ 19266u), ~(~4294967295u), ~countOneBits(~1u)), arg_0.c, ~(-10742i & -_wgslsmith_mult_i32(arg_2.c.a, -30331i)));
            var var_2 = arg_1.b;
            let var_3 = _wgslsmith_clamp_u32(~1u, 4294967295u, countOneBits(_wgslsmith_mult_u32(30752u | var_1.b.x, 20825u)));
            global2 = array<Struct_1, 21>();
        }
        let var_1 = global1.b;
        switch (~abs(min(-(i32(-2147483648) | arg_2.c.a), -max(12300i, arg_0.a.a)))) {
            default: {
                var var_2 = Struct_3(select(firstLeadingBit(firstLeadingBit(abs(vec4<i32>(-579i, arg_0.d, arg_2.d, u_input.a)))), -reverseBits(vec4<i32>(-18295i, global1.a.x, 2147483647i, arg_1.a.x) << (vec4<u32>(global1.c.b.x, arg_1.c.b.x, 0u, 63471u) % vec4<u32>(32u))), !select(vec4<bool>(true, global1.b, false, false), !vec4<bool>(true, true, true, global1.b), true)), any(!vec2<bool>(global1.b && true, arg_1.b)), arg_0);
                let var_3 = Struct_3(_wgslsmith_clamp_vec4_i32(-vec4<i32>(_wgslsmith_mult_i32(arg_3.a, arg_3.a), -33715i, -534i, i32(-1i) * -46636i), var_2.a, select(-(arg_1.a | arg_1.a), vec4<i32>(arg_3.a, i32(-2147483648), reverseBits(u_input.a), _wgslsmith_clamp_i32(u_input.a, arg_0.c.a, -11292i)), vec4<bool>(false, all(vec3<bool>(global1.b, false, false)), func_3(arg_2.b.x, vec4<i32>(arg_3.a, global1.c.d, arg_0.c.a, arg_1.a.x), vec3<i32>(19101i, u_input.b.x, 1i), Struct_2(Struct_1(2147483647i), vec3<u32>(0u, 0u, arg_1.c.b.x), global2[_wgslsmith_index_u32(4294967295u, 21u)], -39751i)).x, var_2.b))), !all(vec3<bool>(all(vec4<bool>(arg_1.b, false, true, false)), true, global1.b)), var_2.c);
                global1 = Struct_3(_wgslsmith_mult_vec4_i32(vec4<i32>(_wgslsmith_mod_i32(17366i, arg_0.c.a), 1i, arg_1.c.d, firstLeadingBit(9551i)), arg_1.a >> (vec4<u32>(func_6(Struct_1(global1.a.x)), 19962u, 4294967295u, ~arg_1.c.b.x) % vec4<u32>(32u))), all(vec2<bool>(false, global1.b)), Struct_2(var_2.c.a, _wgslsmith_mod_vec3_u32(firstTrailingBit(vec3<u32>(4294967295u, arg_1.c.b.x, 9389u)), global1.c.b), var_3.c.a, _wgslsmith_mult_i32(-(arg_0.a.a & i32(-2147483648)), _wgslsmith_div_i32(arg_3.a, u_input.a) & -var_3.c.a.a)));
                let var_4 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(1302f, _wgslsmith_f_op_f32(805f - 843f), !var_3.b)) * _wgslsmith_f_op_f32(sign(-409f)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(trunc(538f)))) * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-439f - 841f) - _wgslsmith_f_op_f32(-1000f))) - _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(1000f, -1331f)), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(885f, -1621f)))));
            }
        }
    }
    if (all(select(!select(func_3(4294967295u, global1.a, vec3<i32>(arg_3.a, arg_2.c.a, arg_0.d), arg_1.c).yz, !vec2<bool>(global1.b, global1.b), all(vec2<bool>(arg_1.b, true))), select(!func_3(0u, vec4<i32>(u_input.a, arg_0.a.a, arg_3.a, arg_2.a.a), arg_1.a.wxy, Struct_2(global1.c.c, arg_2.b, Struct_1(global1.c.a.a), arg_1.c.d)).zz, select(vec2<bool>(true, global1.b), func_3(arg_0.b.x, arg_1.a, u_input.b, arg_1.c).xz, vec2<bool>(true, false)), all(vec4<bool>(global1.b, global1.b, global1.b, true))), select(!select(vec2<bool>(false, true), vec2<bool>(arg_1.b, true), vec2<bool>(true, global1.b)), vec2<bool>(true, all(vec4<bool>(global1.b, false, true, arg_1.b))), func_3(1u, min(vec4<i32>(1i, 2147483647i, -1i, arg_2.d), vec4<i32>(arg_3.a, -1i, -11058i, 1i)), _wgslsmith_add_vec3_i32(vec3<i32>(45841i, -65795i, arg_3.a), vec3<i32>(-1i, -130282i, arg_2.a.a)), Struct_2(Struct_1(arg_3.a), vec3<u32>(1u, arg_0.b.x, 36944u), Struct_1(59263i), arg_1.a.x)).yy)))) {
        var var_1 = arg_1;
        let var_2 = global0[_wgslsmith_index_u32(arg_2.b.x | ~_wgslsmith_dot_vec4_u32(_wgslsmith_mod_vec4_u32(countOneBits(vec4<u32>(0u, 4294967295u, 4294967295u, 54469u)), vec4<u32>(20265u, 4294967295u, 1u, global1.c.b.x) ^ vec4<u32>(var_1.c.b.x, 41423u, 17277u, var_1.c.b.x)), abs(select(vec4<u32>(56385u, arg_1.c.b.x, arg_0.b.x, global1.c.b.x), vec4<u32>(1u, arg_1.c.b.x, arg_0.b.x, 47136u), true))), 12u)];
        let var_3 = vec3<bool>(true, false, global1.b);
        var_0 = global1.c.b.x;
        global2 = array<Struct_1, 21>();
    }
    var var_1 = vec4<bool>(any(select(!select(vec3<bool>(global1.b, global1.b, global1.b), vec3<bool>(global1.b, false, false), vec3<bool>(false, global1.b, false)), vec3<bool>(true, true, global1.b), global1.b)), !func_3(64849u >> (0u % 32u), vec4<i32>(arg_1.c.c.a, 1i, 0i, 272i), -vec3<i32>(44173i, 1125i, arg_0.c.a), Struct_2(global1.c.c, vec3<u32>(global1.c.b.x, global1.c.b.x, arg_1.c.b.x), Struct_1(1i), -45045i)).x || !(arg_1.b | all(vec3<bool>(global1.b, true, arg_1.b))), func_3(~firstTrailingBit(abs(arg_0.b.x)), reverseBits(-(~vec4<i32>(arg_1.c.c.a, global1.c.d, 15336i, arg_0.a.a))), vec3<i32>(_wgslsmith_div_i32(~(-50967i), -1i), 0i, ~arg_1.c.d << (arg_1.c.b.x % 32u)), Struct_2(arg_0.a, arg_0.b, Struct_1(~arg_2.a.a), firstLeadingBit(-1i))).x, !any(func_3(_wgslsmith_div_u32(arg_0.b.x, 19036u), -vec4<i32>(arg_3.a, 2147483647i, -62896i, arg_1.c.a.a), ~u_input.b, Struct_2(global2[_wgslsmith_index_u32(global1.c.b.x, 21u)], vec3<u32>(4294967295u, 4294967295u, 4294967295u), arg_0.a, 2147483647i)).zx));
    loop {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        break;
    }
    return arg_1.c;
}

fn func_7(arg_0: Struct_2, arg_1: vec3<bool>, arg_2: Struct_1) -> vec2<bool> {
    let var_0 = u_input.b.yx;
    switch (-2323i) {
        default: {
            global0 = array<Struct_3, 12>();
            for (var var_1 = i32(-2147483648); ; global1 = global0[_wgslsmith_index_u32(_wgslsmith_sub_u32(global1.c.b.x, func_6(global2[_wgslsmith_index_u32(~_wgslsmith_div_u32(max(arg_0.b.x, 4294967295u), 0u), 21u)])), 12u)]) {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                break;
            }
            global0 = array<Struct_3, 12>();
        }
    }
    var var_1 = global1.c.b.x;
    for (var var_2 = -11152i; global1.b; var_2 += 1i) {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
        break;
    }
    var var_2 = func_2(global1.c, Struct_3(firstLeadingBit(~global1.a) & ~(-global1.a), true, func_2(func_2(arg_0, global0[_wgslsmith_index_u32(~4294967295u, 12u)], func_2(arg_0, Struct_3(global1.a, true, global1.c), global1.c, global2[_wgslsmith_index_u32(0u, 21u)]), func_2(arg_0, global0[_wgslsmith_index_u32(arg_0.b.x, 12u)], global1.c, global1.c.c).c), global0[_wgslsmith_index_u32(global1.c.b.x, 12u)], Struct_2(arg_2, vec3<u32>(global1.c.b.x, global1.c.b.x, global1.c.b.x) ^ vec3<u32>(4294967295u, 4294967295u, arg_0.b.x), Struct_1(-1i), 20009i), global1.c.a)), Struct_2(func_2(Struct_2(arg_0.a, ~arg_0.b, global2[_wgslsmith_index_u32(global1.c.b.x, 21u)], global1.a.x), Struct_3(-vec4<i32>(u_input.a, u_input.b.x, 1i, arg_0.d), true | global1.b, Struct_2(Struct_1(1i), global1.c.b, arg_2, arg_0.c.a)), arg_0, global1.c.c).c, abs(vec3<u32>(0u, global1.c.b.x, 0u) | global1.c.b), arg_2, var_0.x), func_2(arg_0, global0[_wgslsmith_index_u32(arg_0.b.x, 12u)], func_2(Struct_2(arg_2, reverseBits(arg_0.b), Struct_1(var_0.x), reverseBits(global1.a.x)), global0[_wgslsmith_index_u32(~(global1.c.b.x << (arg_0.b.x % 32u)), 12u)], Struct_2(Struct_1(38728i), _wgslsmith_div_vec3_u32(vec3<u32>(arg_0.b.x, global1.c.b.x, 47582u), global1.c.b), arg_0.c, abs(global1.c.a.a)), func_2(arg_0, Struct_3(vec4<i32>(var_0.x, u_input.b.x, 17994i, arg_0.d), false, Struct_2(Struct_1(-58776i), global1.c.b, Struct_1(-43306i), i32(-2147483648))), func_2(Struct_2(Struct_1(338i), vec3<u32>(global1.c.b.x, 86808u, global1.c.b.x), global2[_wgslsmith_index_u32(5376u, 21u)], 0i), global0[_wgslsmith_index_u32(79523u, 12u)], Struct_2(global2[_wgslsmith_index_u32(1u, 21u)], global1.c.b, Struct_1(1i), var_0.x), Struct_1(arg_0.c.a)), global2[_wgslsmith_index_u32(abs(1015u), 21u)]).a), global2[_wgslsmith_index_u32(func_5(), 21u)]).a);
    return arg_1.zx;
}

fn func_1(arg_0: vec2<i32>) -> Struct_2 {
    global2 = array<Struct_1, 21>();
    global2 = array<Struct_1, 21>();
    let var_0 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(abs(_wgslsmith_f_op_vec4_f32(vec4<f32>(-819f, -1000f, -820f, 624f) - vec4<f32>(-359f, -834f, -184f, -1691f)))))) - _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(-vec4<f32>(552f, 292f, 203f, 1176f))))));
    if (true & all(!func_7(func_2(global1.c, global0[_wgslsmith_index_u32(global1.c.b.x, 12u)], global1.c, Struct_1(0i)), select(vec3<bool>(true, global1.b, true), vec3<bool>(false, global1.b, false), false), global1.c.a))) {
        for (var var_1 = 1i; ; var_1 -= 1i) {
            if (LOOP_COUNTERS[16u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
            continue;
        }
        var var_1 = vec4<u32>(~4294967295u, 63018u, select(_wgslsmith_clamp_u32(~(29433u | global1.c.b.x), global1.c.b.x, global1.c.b.x), global1.c.b.x, any(vec2<bool>(true, true))), ~global1.c.b.x << (4294967295u % 32u));
        let var_2 = select(vec4<bool>(true, global1.b, false, true), select(select(vec4<bool>(true, true, true, true), vec4<bool>(true, any(vec2<bool>(false, global1.b)), var_0.x <= -2085f, true), select(vec4<bool>(true, global1.b, false, global1.b), vec4<bool>(false, true, false, false), !vec4<bool>(global1.b, global1.b, true, false))), select(!vec4<bool>(global1.b, true, global1.b, global1.b), select(vec4<bool>(true, global1.b, global1.b, false), select(vec4<bool>(false, false, global1.b, true), vec4<bool>(global1.b, global1.b, global1.b, false), global1.b), global1.b && global1.b), !(!vec4<bool>(global1.b, true, true, false))), any(!vec4<bool>(global1.b, global1.b, global1.b, global1.b))), select(select(select(!vec4<bool>(true, global1.b, false, global1.b), !vec4<bool>(false, global1.b, false, global1.b), !global1.b), select(vec4<bool>(false, false, false, global1.b), vec4<bool>(false, false, global1.b, false), !vec4<bool>(false, global1.b, false, false)), false), !vec4<bool>(global1.b, all(vec2<bool>(global1.b, false)), true == global1.b, var_0.x <= var_0.x), !(!(!vec4<bool>(global1.b, global1.b, global1.b, global1.b)))));
    }
    switch (-5135i) {
        case -1i: {
            if (true && !func_3(global1.c.b.x, _wgslsmith_add_vec4_i32(-vec4<i32>(5649i, u_input.b.x, u_input.a, -51475i), global1.a >> (vec4<u32>(4294967295u, global1.c.b.x, global1.c.b.x, global1.c.b.x) % vec4<u32>(32u))), min(_wgslsmith_div_vec3_i32(vec3<i32>(global1.c.d, arg_0.x, 0i), vec3<i32>(global1.c.a.a, global1.a.x, -31748i)), abs(vec3<i32>(15829i, u_input.b.x, 19325i))), func_2(global1.c, Struct_3(global1.a, global1.b, global1.c), Struct_2(Struct_1(0i), global1.c.b, global2[_wgslsmith_index_u32(92187u, 21u)], 1i), global1.c.a)).x) {
                let var_1 = vec4<f32>(var_0.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(var_0.x, 1356f, false))) * var_0.x) + var_0.x), -1019f, _wgslsmith_f_op_vec2_f32(func_4(global1.c, vec2<bool>(global1.b, var_0.x != _wgslsmith_f_op_f32(-693f)))).x);
            }
            switch (min(-19158i, 0i)) {
                case 33071i: {
                    var var_1 = i32(-2147483648);
                    var_1 = arg_0.x;
                    global1 = global0[_wgslsmith_index_u32((~(~global1.c.b.x) | 1u) ^ _wgslsmith_sub_u32(max(_wgslsmith_sub_u32(125120u, global1.c.b.x), ~58285u) << (4294967295u % 32u), global1.c.b.x), 12u)];
                    global2 = array<Struct_1, 21>();
                    let var_2 = global1.c;
                }
                case 34273i: {
                    let var_1 = (~_wgslsmith_mult_vec3_u32(_wgslsmith_mult_vec3_u32(global1.c.b, vec3<u32>(4294967295u, 6858u, 1u)), vec3<u32>(4294967295u, global1.c.b.x, global1.c.b.x)) ^ vec3<u32>(~firstTrailingBit(0u), ~global1.c.b.x, ~global1.c.b.x)) ^ vec3<u32>(17199u, ~(global1.c.b.x >> (~12652u % 32u)), max(_wgslsmith_clamp_u32(global1.c.b.x, firstLeadingBit(21413u), func_5()), ~select(1u, 4294967295u, false)));
                    var var_2 = abs(_wgslsmith_dot_vec4_i32(firstTrailingBit(vec4<i32>(u_input.a, global1.a.x, max(u_input.b.x, -1i), 27520i)), select(~(~global1.a), _wgslsmith_mult_vec4_i32(global1.a & global1.a, _wgslsmith_mod_vec4_i32(global1.a, vec4<i32>(1i, arg_0.x, 0i, global1.a.x))), !select(vec4<bool>(global1.b, true, global1.b, false), vec4<bool>(global1.b, global1.b, true, global1.b), global1.b))));
                    global1 = global0[_wgslsmith_index_u32(_wgslsmith_sub_u32(~var_1.x, 66595u), 12u)];
                    var var_3 = _wgslsmith_mult_i32(_wgslsmith_dot_vec4_i32(global1.a, ~(-global1.a)), _wgslsmith_mod_i32(_wgslsmith_dot_vec2_i32(arg_0, global1.a.zz), u_input.b.x));
                    let var_4 = !global1.b;
                }
                case 1i: {
                    var var_1 = _wgslsmith_f_op_f32(var_0.x * var_0.x);
                    let var_2 = reverseBits(vec4<u32>(42436u << (countOneBits(select(global1.c.b.x, 79861u, false)) % 32u), _wgslsmith_mod_u32(1u, 28656u), global1.c.b.x, ~(global1.c.b.x & 1u)));
                    var var_3 = Struct_2(func_2(global1.c, global0[_wgslsmith_index_u32(~(firstTrailingBit(var_2.x) ^ ~90250u), 12u)], global1.c, func_2(global1.c, Struct_3(_wgslsmith_sub_vec4_i32(vec4<i32>(-3137i, 29481i, 2147483647i, -2574i), vec4<i32>(0i, 1i, arg_0.x, -37694i)), global1.b & global1.b, Struct_2(Struct_1(u_input.b.x), vec3<u32>(17575u, 38205u, var_2.x), Struct_1(global1.a.x), global1.c.a.a)), Struct_2(global1.c.c, global1.c.b | global1.c.b, global1.c.c, _wgslsmith_mult_i32(1i, arg_0.x)), global1.c.a).c).c, global1.c.b, Struct_1(_wgslsmith_div_i32(i32(-1i) * -1i, arg_0.x)), 60496i);
                    global0 = array<Struct_3, 12>();
                    let var_4 = vec3<i32>(-38671i, max(-(~arg_0.x), ~max(global1.c.c.a, var_3.a.a)), 1i) & -u_input.b;
                }
                case -1i: {
                    var var_1 = Struct_2(func_2(Struct_2(Struct_1(arg_0.x), global1.c.b, func_2(func_2(global1.c, global0[_wgslsmith_index_u32(1u, 12u)], global1.c, global2[_wgslsmith_index_u32(1u, 21u)]), global0[_wgslsmith_index_u32(18311u, 12u)], func_2(Struct_2(global2[_wgslsmith_index_u32(global1.c.b.x, 21u)], vec3<u32>(1u, 4945u, 0u), Struct_1(1408i), 16252i), global0[_wgslsmith_index_u32(4294967295u, 12u)], Struct_2(Struct_1(2147483647i), vec3<u32>(1u, global1.c.b.x, global1.c.b.x), Struct_1(2147483647i), global1.a.x), Struct_1(u_input.a)), global1.c.c).a, func_2(global1.c, global0[_wgslsmith_index_u32(~global1.c.b.x, 12u)], Struct_2(Struct_1(arg_0.x), global1.c.b, global2[_wgslsmith_index_u32(3539u, 21u)], global1.c.c.a), func_2(Struct_2(global2[_wgslsmith_index_u32(65734u, 21u)], vec3<u32>(0u, global1.c.b.x, 26632u), Struct_1(88135i), -29496i), global0[_wgslsmith_index_u32(global1.c.b.x, 12u)], Struct_2(global1.c.a, vec3<u32>(35773u, global1.c.b.x, global1.c.b.x), Struct_1(u_input.a), global1.a.x), global2[_wgslsmith_index_u32(1u, 21u)]).a).d), Struct_3(_wgslsmith_add_vec4_i32(vec4<i32>(u_input.a, -13905i, 10462i, 2147483647i), _wgslsmith_add_vec4_i32(global1.a, vec4<i32>(global1.c.c.a, -11823i, arg_0.x, global1.a.x))), global1.b, global1.c), Struct_2(global1.c.c, ~(~global1.c.b), Struct_1(-13580i), _wgslsmith_mod_i32(func_2(global1.c, Struct_3(global1.a, true, Struct_2(global2[_wgslsmith_index_u32(global1.c.b.x, 21u)], vec3<u32>(global1.c.b.x, global1.c.b.x, 67802u), Struct_1(-50267i), -1i)), Struct_2(global1.c.a, vec3<u32>(global1.c.b.x, 0u, global1.c.b.x), global1.c.a, global1.a.x), global1.c.a).a.a, 0i)), func_2(global1.c, global0[_wgslsmith_index_u32(1u, 12u)], func_2(func_2(global1.c, Struct_3(global1.a, global1.b, Struct_2(Struct_1(u_input.b.x), vec3<u32>(4294967295u, global1.c.b.x, global1.c.b.x), global2[_wgslsmith_index_u32(1588u, 21u)], u_input.a)), global1.c, Struct_1(u_input.b.x)), global0[_wgslsmith_index_u32(31423u, 12u)], Struct_2(Struct_1(1i), vec3<u32>(global1.c.b.x, 48812u, global1.c.b.x), global2[_wgslsmith_index_u32(global1.c.b.x, 21u)], -10450i), global2[_wgslsmith_index_u32(func_6(Struct_1(global1.a.x)), 21u)]), global1.c.c).c).a, global1.c.b, func_2(Struct_2(Struct_1(arg_0.x), global1.c.b, global2[_wgslsmith_index_u32(global1.c.b.x, 21u)], _wgslsmith_add_i32(51618i, _wgslsmith_add_i32(36394i, 0i))), global0[_wgslsmith_index_u32(global1.c.b.x, 12u)], Struct_2(Struct_1(2147483647i), _wgslsmith_mult_vec3_u32(min(vec3<u32>(global1.c.b.x, 0u, 5016u), vec3<u32>(0u, 18406u, 4294967295u)), global1.c.b << (vec3<u32>(4294967295u, global1.c.b.x, 1u) % vec3<u32>(32u))), global2[_wgslsmith_index_u32(_wgslsmith_mod_u32(260u, _wgslsmith_add_u32(global1.c.b.x, 1u)), 21u)], -32215i), func_2(Struct_2(global2[_wgslsmith_index_u32(_wgslsmith_mod_u32(global1.c.b.x, 4294967295u), 21u)], global1.c.b, func_2(Struct_2(global1.c.a, vec3<u32>(global1.c.b.x, 4294967295u, global1.c.b.x), Struct_1(global1.c.d), 1i), Struct_3(vec4<i32>(-1i, arg_0.x, 0i, u_input.a), false, global1.c), Struct_2(global1.c.a, vec3<u32>(37073u, global1.c.b.x, 1u), Struct_1(-81879i), u_input.a), global2[_wgslsmith_index_u32(1u, 21u)]).a, -12896i), Struct_3(vec4<i32>(arg_0.x, global1.c.c.a, u_input.a, -3374i), global1.b, func_2(Struct_2(global2[_wgslsmith_index_u32(global1.c.b.x, 21u)], vec3<u32>(49701u, global1.c.b.x, 4294967295u), Struct_1(36523i), -1i), Struct_3(global1.a, global1.b, Struct_2(Struct_1(52061i), global1.c.b, global1.c.c, -7400i)), Struct_2(global2[_wgslsmith_index_u32(global1.c.b.x, 21u)], global1.c.b, global2[_wgslsmith_index_u32(1u, 21u)], 27834i), global1.c.c)), Struct_2(global2[_wgslsmith_index_u32(~15249u, 21u)], global1.c.b, func_2(global1.c, Struct_3(vec4<i32>(arg_0.x, arg_0.x, -15531i, arg_0.x), false, global1.c), global1.c, Struct_1(7464i)).c, 9976i), func_2(Struct_2(Struct_1(i32(-2147483648)), vec3<u32>(47040u, global1.c.b.x, 62542u), Struct_1(u_input.a), u_input.a), global0[_wgslsmith_index_u32(21603u, 12u)], func_2(Struct_2(global1.c.c, global1.c.b, global1.c.c, 2147483647i), global0[_wgslsmith_index_u32(0u, 12u)], Struct_2(global1.c.a, global1.c.b, global2[_wgslsmith_index_u32(global1.c.b.x, 21u)], u_input.a), global1.c.a), func_2(Struct_2(Struct_1(arg_0.x), global1.c.b, global1.c.a, 0i), Struct_3(global1.a, true, Struct_2(Struct_1(global1.a.x), vec3<u32>(859u, global1.c.b.x, global1.c.b.x), global1.c.c, 0i)), global1.c, global1.c.a).c).c).a).a, reverseBits(firstLeadingBit(~(arg_0.x ^ 0i))));
                    var var_2 = _wgslsmith_dot_vec2_u32(~firstLeadingBit(global1.c.b.zx), ~_wgslsmith_clamp_vec2_u32(var_1.b.yz, var_1.b.xy, func_2(Struct_2(Struct_1(-1i), global1.c.b, global1.c.c, global1.a.x), global0[_wgslsmith_index_u32(22647u, 12u)], Struct_2(Struct_1(-27035i), global1.c.b, global1.c.c, var_1.d), Struct_1(var_1.a.a)).b.yx) >> (abs(~(~vec2<u32>(var_1.b.x, 0u))) % vec2<u32>(32u)));
                }
                default: {
                    global1 = Struct_3(select(_wgslsmith_add_vec4_i32(-countOneBits(global1.a), global1.a), ~_wgslsmith_mult_vec4_i32(vec4<i32>(u_input.a, -1i, i32(-2147483648), 2147483647i) | vec4<i32>(global1.a.x, u_input.b.x, u_input.a, -13371i), global1.a), !vec4<bool>(all(vec4<bool>(global1.b, global1.b, global1.b, global1.b)), false, global1.b, select(false, global1.b, global1.b))), false, global1.c);
                    let var_1 = vec4<i32>(-1i) * -global1.a;
                    var var_2 = !(!select(vec4<bool>(func_7(Struct_2(global1.c.c, vec3<u32>(4294967295u, global1.c.b.x, 1u), global1.c.c, u_input.b.x), vec3<bool>(global1.b, global1.b, false), Struct_1(2147483647i)).x, global1.b, global1.b, global1.b), !vec4<bool>(global1.b, global1.b, true, true), select(select(vec4<bool>(global1.b, global1.b, global1.b, global1.b), vec4<bool>(global1.b, global1.b, global1.b, global1.b), global1.b), vec4<bool>(global1.b, global1.b, global1.b, false), !global1.b)));
                    var var_3 = func_2(func_2(Struct_2(func_2(func_2(global1.c, global0[_wgslsmith_index_u32(0u, 12u)], Struct_2(Struct_1(23260i), global1.c.b, Struct_1(1i), u_input.a), Struct_1(-1i)), Struct_3(vec4<i32>(global1.c.c.a, -1363i, arg_0.x, 48131i), var_2.x, global1.c), Struct_2(Struct_1(arg_0.x), global1.c.b, global2[_wgslsmith_index_u32(global1.c.b.x, 21u)], global1.a.x), Struct_1(var_1.x)).c, ~vec3<u32>(5067u, 1u, 54999u), Struct_1(i32(-2147483648) & arg_0.x), arg_0.x), global0[_wgslsmith_index_u32(select(~func_5(), global1.c.b.x, global1.b), 12u)], global1.c, Struct_1(~(i32(-1i) * -32269i))), global0[_wgslsmith_index_u32(_wgslsmith_div_u32(1u, global1.c.b.x), 12u)], global1.c, global2[_wgslsmith_index_u32(60460u & _wgslsmith_dot_vec3_u32(vec3<u32>(22212u, global1.c.b.x, global1.c.b.x), vec3<u32>(_wgslsmith_div_u32(4294967295u, global1.c.b.x), global1.c.b.x, 54304u)), 21u)]).a;
                }
            }
            var var_1 = u_input.a ^ func_2(global1.c, Struct_3(_wgslsmith_add_vec4_i32(vec4<i32>(-4722i, global1.c.c.a, -5572i, -1i), global1.a), global1.b, global1.c), global1.c, global2[_wgslsmith_index_u32(global1.c.b.x, 21u)]).c.a;
            var var_2 = Struct_1(_wgslsmith_div_i32(0i & _wgslsmith_dot_vec2_i32(_wgslsmith_sub_vec2_i32(vec2<i32>(global1.c.a.a, u_input.b.x), vec2<i32>(35931i, 1i)), ~vec2<i32>(global1.c.a.a, 49113i)), countOneBits(arg_0.x) << (46769u % 32u)));
            loop {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                global0 = array<Struct_3, 12>();
                var var_3 = global2[_wgslsmith_index_u32(abs(~(~(firstTrailingBit(global1.c.b.x) >> (func_2(global1.c, global0[_wgslsmith_index_u32(4294967295u, 12u)], Struct_2(Struct_1(var_2.a), vec3<u32>(global1.c.b.x, 29963u, 1u), Struct_1(2147483647i), i32(-2147483648)), global2[_wgslsmith_index_u32(1u, 21u)]).b.x % 32u)))), 21u)];
                let var_4 = vec4<i32>(select(-44999i, 0i, !all(!vec4<bool>(false, true, global1.b, false))), -select(~arg_0.x & 2147483647i, _wgslsmith_mod_i32(i32(-1i) * -8646i, 4263i ^ arg_0.x), global1.b), var_2.a, 0i);
                var var_5 = global1.c;
            }
        }
        case i32(-2147483648): {
            global1 = Struct_3(~firstTrailingBit(vec4<i32>(1i, u_input.b.x, _wgslsmith_dot_vec2_i32(u_input.b.yy, global1.a.yy), 42703i)), true, Struct_2(global2[_wgslsmith_index_u32(41842u, 21u)], _wgslsmith_sub_vec3_u32(vec3<u32>(1u, global1.c.b.x | global1.c.b.x, reverseBits(global1.c.b.x)), func_2(func_2(global1.c, Struct_3(vec4<i32>(global1.c.c.a, -4237i, global1.c.a.a, 51961i), global1.b, global1.c), Struct_2(Struct_1(i32(-2147483648)), global1.c.b, global1.c.c, global1.a.x), Struct_1(arg_0.x)), Struct_3(vec4<i32>(u_input.b.x, global1.a.x, 22751i, 15922i), true, Struct_2(Struct_1(u_input.b.x), global1.c.b, global1.c.a, u_input.a)), global1.c, Struct_1(-473i)).b), func_2(global1.c, global0[_wgslsmith_index_u32(_wgslsmith_mult_u32(global1.c.b.x, global1.c.b.x) | global1.c.b.x, 12u)], Struct_2(func_2(Struct_2(Struct_1(arg_0.x), global1.c.b, global1.c.c, global1.a.x), global0[_wgslsmith_index_u32(4294967295u, 12u)], global1.c, global1.c.c).a, global1.c.b >> (vec3<u32>(global1.c.b.x, 0u, global1.c.b.x) % vec3<u32>(32u)), func_2(global1.c, global0[_wgslsmith_index_u32(global1.c.b.x, 12u)], Struct_2(Struct_1(global1.a.x), vec3<u32>(0u, global1.c.b.x, global1.c.b.x), Struct_1(global1.a.x), i32(-2147483648)), global2[_wgslsmith_index_u32(global1.c.b.x, 21u)]).c, -36512i), global2[_wgslsmith_index_u32(~0u, 21u)]).c, ~(abs(u_input.b.x) & 30239i)));
            var var_1 = _wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_f_op_vec2_f32(var_0.yx + _wgslsmith_f_op_vec2_f32(func_4(func_2(global1.c, Struct_3(global1.a, global1.b, Struct_2(global2[_wgslsmith_index_u32(global1.c.b.x, 21u)], vec3<u32>(0u, global1.c.b.x, 4294967295u), Struct_1(2147483647i), u_input.b.x)), global1.c, Struct_1(arg_0.x)), !vec2<bool>(global1.b, false)))))), var_0.xz, select(vec2<bool>(false, all(vec3<bool>(global1.b, false, global1.b))), vec2<bool>(global1.b, false != any(vec2<bool>(global1.b, global1.b))), func_3(80585u, global1.a, u_input.b << (global1.c.b % vec3<u32>(32u)), Struct_2(Struct_1(u_input.b.x), _wgslsmith_add_vec3_u32(vec3<u32>(global1.c.b.x, global1.c.b.x, global1.c.b.x), global1.c.b), func_2(global1.c, global0[_wgslsmith_index_u32(global1.c.b.x, 12u)], Struct_2(global1.c.c, global1.c.b, global2[_wgslsmith_index_u32(global1.c.b.x, 21u)], u_input.a), global2[_wgslsmith_index_u32(32990u, 21u)]).a, abs(u_input.b.x))).yy)));
            var_1 = vec2<f32>(_wgslsmith_f_op_f32(abs(var_1.x)), _wgslsmith_f_op_f32(-583f));
        }
        default: {
            var var_1 = global0[_wgslsmith_index_u32(~select(firstLeadingBit(abs(global1.c.b.x)), global1.c.b.x, true), 12u)];
        }
    }
    return global1.c;
}

@compute
@workgroup_size(1)
fn main() {
    loop {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        break;
    }
    var var_0 = global1.c;
    for (var var_1 = var_0.d << (1u % 32u); ; var_0 = func_1(vec2<i32>(u_input.b.x, _wgslsmith_mod_i32(u_input.a, u_input.a)))) {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
        return;
    }
    for (var var_1 = -57338i; true; var_1 += 1i) {
        if (LOOP_COUNTERS[20u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
        let var_2 = vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(2925f * 1241f))) + 328f) - 723f), _wgslsmith_f_op_f32(-156f + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(min(139f, 166f)), _wgslsmith_f_op_f32(step(198f, 628f)))) - 1049f)), 843f);
    }
    let var_1 = global1.c.c;
    let var_2 = Struct_2(func_2(func_1(select(vec2<i32>(2147483647i, var_1.a), u_input.b.zy, global1.b)), global0[_wgslsmith_index_u32(var_0.b.x ^ _wgslsmith_div_u32(firstLeadingBit(var_0.b.x), global1.c.b.x | 4294967295u), 12u)], global1.c, Struct_1(u_input.b.x)).a, min(_wgslsmith_clamp_vec3_u32(~_wgslsmith_mod_vec3_u32(vec3<u32>(global1.c.b.x, var_0.b.x, var_0.b.x), vec3<u32>(1u, global1.c.b.x, 10337u)), ~firstLeadingBit(var_0.b), select(var_0.b, global1.c.b, !vec3<bool>(true, global1.b, true))), ~(~(var_0.b | vec3<u32>(23058u, 0u, global1.c.b.x)))), Struct_1(~((global1.c.d >> (global1.c.b.x % 32u)) ^ ~u_input.a)), 23901i);
    let var_3 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(710f, -156f, -1000f, 291f) + vec4<f32>(667f, -2326f, 323f, 1113f)) * vec4<f32>(-571f, -444f, -914f, -132f)) + vec4<f32>(_wgslsmith_f_op_f32(round(-2605f)), _wgslsmith_f_op_f32(-478f), _wgslsmith_f_op_f32(f32(-1f) * -1637f), _wgslsmith_f_op_f32(-1463f))) + _wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(vec4<f32>(-160f, -1355f, 1221f, -577f) - _wgslsmith_f_op_vec4_f32(-vec4<f32>(517f, 1606f, 1012f, 786f))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(509f, 1065f, -189f, 173f)) * _wgslsmith_f_op_vec4_f32(select(vec4<f32>(501f, 554f, 743f, 571f), vec4<f32>(-1000f, 1532f, 822f, 1857f), false)))))));
    var_0 = func_1(vec2<i32>(-(0i ^ (global1.a.x & i32(-2147483648))), var_0.a.a << (var_0.b.x % 32u)));
    var var_4 = _wgslsmith_mult_i32(_wgslsmith_div_i32(-var_1.a, global1.a.x), -1i);
    let x = u_input.a;
    s_output = StorageBuffer(var_0.b.x);
}

`;