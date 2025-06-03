export const input = [126,26,229,122,67,190,25,42,202,147,67,78,117,106,201,243,99,201,97,3,232,3,8,147,225,213,194,198,76,81,248,171,122,137,249,240,85,221,98,191,134,124,101,211,231,1,90,52,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [126,26,229,122,67,190,25,42,202,147,67,78,117,106,201,243,99,201,97,3,232,3,8,147,225,213,194,198,76,81,248,171,122,137,249,240,85,221,98,191,134,124,101,211,231,1,90,52,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[126,26,229,122,67,190,25,42,202,147,67,78,117,106,201,243,99,201,97,3,232,3,8,147,225,213,194,198,76,81,248,171,122,137,249,240,85,221,98,191,134,124,101,211,231,1,90,52]}
// Seed: 17371239645492842300

struct Struct_1 {
    a: f32,
    b: vec2<f32>,
    c: vec4<u32>,
}

struct Struct_2 {
    a: vec2<f32>,
}

struct Struct_3 {
    a: Struct_1,
}

struct Struct_4 {
    a: vec3<f32>,
    b: Struct_2,
    c: bool,
    d: vec2<f32>,
    e: vec3<bool>,
}

struct Struct_5 {
    a: vec2<u32>,
    b: Struct_1,
    c: i32,
}

struct UniformBuffer {
    a: vec3<i32>,
    b: vec4<i32>,
    c: vec2<u32>,
    d: u32,
}

struct StorageBuffer {
    a: vec2<u32>,
    b: vec2<i32>,
    c: f32,
    d: f32,
    e: vec4<f32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: Struct_3;

var<private> global1: i32;

var<private> global2: array<vec2<f32>, 18>;

var<private> LOOP_COUNTERS: array<u32, 29>;

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn func_6(arg_0: Struct_3) -> bool {
    for (var var_0 = -32473i; (arg_0.a.c.x | firstTrailingBit(arg_0.a.c.x & u_input.d)) <= (select(global0.a.c.x, 1u, true) | arg_0.a.c.x); global2 = array<vec2<f32>, 18>()) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        loop {
            if (LOOP_COUNTERS[1u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
            var_0 = -10509i;
            return _wgslsmith_f_op_f32(-211f) <= _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(-1026f, arg_0.a.b.x)) - global0.a.a) - global0.a.a)));
        }
        continue;
    }
    switch (min(-1i, ~(-u_input.a.x))) {
        case 2147483647i: {
        }
        default: {
            var var_0 = Struct_4(vec3<f32>(-340f, _wgslsmith_div_f32(_wgslsmith_f_op_f32(-708f - _wgslsmith_f_op_f32(-1133f)), 700f), 1000f), Struct_2(vec2<f32>(arg_0.a.a, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_0.a.a) * _wgslsmith_f_op_f32(-770f)))), all(vec3<bool>(all(select(vec4<bool>(false, true, false, true), vec4<bool>(false, false, true, true), vec4<bool>(false, false, false, true))), abs(u_input.d) < 1u, _wgslsmith_f_op_f32(global0.a.a - arg_0.a.b.x) < _wgslsmith_f_op_f32(exp2(arg_0.a.a)))), global2[_wgslsmith_index_u32(max(_wgslsmith_add_u32(~_wgslsmith_dot_vec4_u32(arg_0.a.c, global0.a.c), global0.a.c.x), arg_0.a.c.x), 18u)], !select(vec3<bool>(true, false, any(vec2<bool>(false, false))), vec3<bool>(true, true, true), vec3<bool>(true, true, true)));
            let var_1 = arg_0.a.c.yw;
            let var_2 = Struct_5(countOneBits(~var_1), global0.a, _wgslsmith_dot_vec4_i32(u_input.b, vec4<i32>(-abs(-1i), 26253i, ~u_input.b.x >> (~arg_0.a.c.x % 32u), ~reverseBits(1i))));
            let var_3 = -_wgslsmith_mult_vec2_i32(u_input.b.zx & u_input.a.yz, ~reverseBits(vec2<i32>(u_input.b.x, -1i)));
        }
    }
    let var_0 = arg_0;
    for (var var_1 = _wgslsmith_mult_i32(-39651i, ~_wgslsmith_mod_i32(abs(_wgslsmith_sub_i32(1i, 17647i)), i32(-1i) * -8941i)); true | (any(vec2<bool>(true, true)) & all(vec3<bool>(true, true, true))); var_1 = _wgslsmith_add_i32(u_input.a.x >> ((~(~1u) | u_input.c.x) % 32u), u_input.b.x)) {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        loop {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            var var_2 = !select(vec3<bool>(true, false, false | any(vec2<bool>(true, true))), select(vec3<bool>(true, true, true), vec3<bool>(true, true, true), all(vec4<bool>(true, true, true, true))), !(!select(vec3<bool>(true, false, false), vec3<bool>(true, true, true), vec3<bool>(false, false, true))));
        }
        let var_2 = global0.a.b.x;
        global2 = array<vec2<f32>, 18>();
        let var_3 = arg_0.a.a;
        var var_4 = !all(!select(select(vec4<bool>(true, false, false, false), vec4<bool>(false, false, true, false), false), select(vec4<bool>(false, false, false, true), vec4<bool>(false, true, false, false), false), false));
    }
    global1 = 29930i;
    return all(!(!(!select(vec2<bool>(false, true), vec2<bool>(false, false), true))));
}

fn func_5(arg_0: u32) -> Struct_3 {
    global0 = Struct_3(Struct_1(_wgslsmith_f_op_f32(select(1575f, 332f, !func_6(Struct_3(Struct_1(1410f, global0.a.b, global0.a.c))))), _wgslsmith_f_op_vec2_f32(global0.a.b * vec2<f32>(1110f, _wgslsmith_div_f32(global0.a.a, global0.a.b.x))), ~vec4<u32>(_wgslsmith_sub_u32(11235u, global0.a.c.x), 62831u, ~u_input.d, 1u)));
    let var_0 = Struct_2(global0.a.b);
    global0 = Struct_3(Struct_1(_wgslsmith_f_op_f32(abs(-1226f)), var_0.a, global0.a.c));
    loop {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        for (var var_1 = 2147483647i; ; global0 = Struct_3(Struct_1(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(global0.a.a, -112f)))), _wgslsmith_f_op_vec2_f32(round(vec2<f32>(global0.a.b.x, _wgslsmith_f_op_f32(1368f + global0.a.a)))), ~(~(~vec4<u32>(u_input.d, arg_0, u_input.d, global0.a.c.x)))))) {
            if (LOOP_COUNTERS[5u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
            continue;
        }
    }
    global2 = array<vec2<f32>, 18>();
    return Struct_3(Struct_1(global0.a.b.x, vec2<f32>(var_0.a.x, _wgslsmith_f_op_f32(f32(-1f) * -1844f)), max(global0.a.c, vec4<u32>(~u_input.d, 16764u, 1u, _wgslsmith_mult_u32(4294967295u, global0.a.c.x)))));
}

fn func_4(arg_0: u32) -> i32 {
    loop {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        global0 = func_5(global0.a.c.x);
    }
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        global0 = func_5(1u);
    }
    switch (u_input.a.x) {
        case 0i: {
            global0 = Struct_3(Struct_1(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(global0.a.b.x - _wgslsmith_f_op_f32(min(932f, global0.a.a))), 1293f)), vec2<f32>(global0.a.a, _wgslsmith_div_f32(global0.a.b.x, _wgslsmith_f_op_f32(-855f))), vec4<u32>(_wgslsmith_add_u32(~global0.a.c.x, ~9949u), 50578u, 1u, 31432u)));
            switch (i32(-2147483648)) {
                case 3191i: {
                    global2 = array<vec2<f32>, 18>();
                    global2 = array<vec2<f32>, 18>();
                    global2 = array<vec2<f32>, 18>();
                    global0 = Struct_3(func_5(_wgslsmith_mult_u32(130515u, _wgslsmith_mod_u32(_wgslsmith_clamp_u32(16271u, 2400u, u_input.c.x), select(global0.a.c.x, global0.a.c.x, false)))).a);
                }
                case -43811i: {
                    let var_0 = _wgslsmith_f_op_vec3_f32(sign(vec3<f32>(global0.a.a, _wgslsmith_f_op_f32(-global0.a.b.x), global0.a.b.x)));
                    global1 = u_input.a.x;
                    let var_1 = true;
                    let var_2 = vec2<i32>(-1i) * -_wgslsmith_div_vec2_i32(vec2<i32>(38636i, -u_input.b.x), u_input.a.zz);
                    global2 = array<vec2<f32>, 18>();
                }
                case i32(-2147483648): {
                    let var_0 = vec3<bool>(!select(!all(vec3<bool>(true, false, true)), any(vec2<bool>(false, false)), false), any(select(vec2<bool>(true, true), vec2<bool>(func_6(Struct_3(global0.a)), true), vec2<bool>(true, true))), any(!vec3<bool>(true, select(false, false, false), false)));
                    var var_1 = _wgslsmith_mult_i32(firstTrailingBit(~(u_input.b.x << (global0.a.c.x % 32u))), abs(~(~(-1i)))) >> (~4294967295u % 32u);
                    var_1 = u_input.b.x;
                }
                case -25301i: {
                    var var_0 = vec3<bool>(!any(select(vec2<bool>(true, true), vec2<bool>(true, true), global0.a.b.x < 129f)), true, !any(vec2<bool>(true, true)));
                    global2 = array<vec2<f32>, 18>();
                    var var_1 = -abs(_wgslsmith_div_vec4_i32(abs(vec4<i32>(u_input.b.x, 35301i, u_input.a.x, 0i)), ~u_input.b));
                }
                default: {
                    var var_0 = u_input.b.yz;
                }
            }
            let var_0 = false || any(!vec3<bool>(true, all(vec4<bool>(false, true, true, false)), true));
            let var_1 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(max(vec4<f32>(global0.a.a, global0.a.a, global0.a.a, _wgslsmith_f_op_f32(max(global0.a.b.x, -768f))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(abs(vec4<f32>(-1000f, 942f, -1427f, global0.a.b.x))) - _wgslsmith_f_op_vec4_f32(vec4<f32>(-454f, 1276f, global0.a.a, -660f) - vec4<f32>(global0.a.b.x, global0.a.b.x, global0.a.b.x, -1874f))))) - _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(-654f, -110f, 659f, global0.a.a))), _wgslsmith_f_op_vec4_f32(exp2(vec4<f32>(947f, global0.a.a, global0.a.a, global0.a.b.x))))))) + _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(vec4<f32>(-121f, global0.a.b.x, global0.a.b.x, global0.a.b.x) + vec4<f32>(global0.a.a, -509f, global0.a.a, 575f)))) + _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(global0.a.a, -385f, global0.a.b.x, global0.a.b.x)) - _wgslsmith_f_op_vec4_f32(select(vec4<f32>(global0.a.b.x, global0.a.a, global0.a.a, 2260f), vec4<f32>(global0.a.a, global0.a.a, global0.a.a, -385f), vec4<bool>(true, var_0, true, true)))))));
            var var_2 = _wgslsmith_f_op_vec3_f32(-var_1.xzw);
        }
        case 36948i: {
            global1 = min(countOneBits(u_input.a.x), u_input.a.x & _wgslsmith_div_i32(-firstLeadingBit(2147483647i), u_input.a.x));
        }
        case -13704i: {
            let var_0 = Struct_2(vec2<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-766f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -342f) * _wgslsmith_f_op_f32(max(943f, global0.a.a)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(global0.a.b.x - global0.a.b.x)))));
            loop {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                let var_1 = var_0;
                var var_2 = select(select(vec3<bool>(!all(vec4<bool>(true, false, true, true)), false, any(select(vec2<bool>(true, false), vec2<bool>(false, false), vec2<bool>(true, false)))), vec3<bool>(_wgslsmith_f_op_f32(-1276f - -348f) > var_0.a.x, false, false), select(select(select(vec3<bool>(true, false, true), vec3<bool>(false, false, true), vec3<bool>(false, false, true)), vec3<bool>(true, true, true), false), select(select(vec3<bool>(true, true, false), vec3<bool>(false, false, true), vec3<bool>(false, false, false)), select(vec3<bool>(true, true, true), vec3<bool>(true, false, true), vec3<bool>(false, false, false)), vec3<bool>(false, true, true)), true)), vec3<bool>(true, !(u_input.b.x == 54097i), func_6(Struct_3(func_5(3092u).a))), vec3<bool>(true, true, true));
                continue;
            }
            var var_1 = any(vec2<bool>(true, true));
            var var_2 = u_input.b.x;
            let var_3 = _wgslsmith_mult_vec4_u32(_wgslsmith_mod_vec4_u32(~(vec4<u32>(45397u, arg_0, 0u, global0.a.c.x) | vec4<u32>(arg_0, 4294967295u, 4294967295u, 1u)), vec4<u32>(_wgslsmith_add_u32(~0u, ~global0.a.c.x), ~arg_0 | _wgslsmith_add_u32(4173u, global0.a.c.x), _wgslsmith_sub_u32(_wgslsmith_mod_u32(4294967295u, arg_0), ~87112u), _wgslsmith_mult_u32(8752u, u_input.d))), (abs(vec4<u32>(8091u, arg_0, 1u, global0.a.c.x)) | ~global0.a.c) ^ global0.a.c);
        }
        default: {
            if (true) {
                global2 = array<vec2<f32>, 18>();
                global2 = array<vec2<f32>, 18>();
                let var_0 = 1u;
                global2 = array<vec2<f32>, 18>();
            }
        }
    }
    global2 = array<vec2<f32>, 18>();
    var var_0 = Struct_3(func_5(~(408u << (~global0.a.c.x % 32u))).a);
    return ~(~u_input.a.x);
}

fn func_3(arg_0: Struct_4, arg_1: Struct_2) -> vec3<f32> {
    for (var var_0 = 35576i; var_0 > 52393i; var_0 -= 1i) {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        for (var var_1 = 11536i; ; var_1 -= 1i) {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
            var var_2 = _wgslsmith_mult_i32(u_input.b.x, _wgslsmith_mult_i32(~(~(-17431i)), _wgslsmith_sub_i32(~0i, u_input.b.x)));
            global1 = firstLeadingBit(26795i ^ select(_wgslsmith_mod_i32(~(-4736i), 13013i), _wgslsmith_mult_i32(func_4(79031u), countOneBits(-1i)), all(vec2<bool>(true, true))));
            let var_3 = ~u_input.c.x;
            var var_4 = vec2<u32>(1u, min(u_input.d, _wgslsmith_sub_u32(abs(~11299u), _wgslsmith_dot_vec3_u32(global0.a.c.wwy | vec3<u32>(var_3, 0u, var_3), _wgslsmith_div_vec3_u32(global0.a.c.zyz, vec3<u32>(var_3, 1u, 4294967295u))))));
            var var_5 = vec4<u32>(_wgslsmith_mult_u32(26674u, _wgslsmith_dot_vec3_u32(~(global0.a.c.xwy >> (vec3<u32>(var_4.x, u_input.c.x, var_3) % vec3<u32>(32u))), func_5(~4294967295u).a.c.zwx)), 10106u ^ global0.a.c.x, ~(~firstTrailingBit(u_input.c.x)), global0.a.c.x);
        }
        if (_wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-236f - arg_1.a.x))), arg_0.d.x)) > _wgslsmith_f_op_f32(ceil(_wgslsmith_div_f32(arg_1.a.x, 304f)))) {
            global0 = Struct_3(func_5(~global0.a.c.x).a);
            break;
        }
    }
    switch (31703i) {
        case 1i: {
            let var_0 = _wgslsmith_f_op_vec3_f32(-vec3<f32>(-1133f, global0.a.b.x, -1071f));
            if (arg_0.e.x) {
                let var_1 = vec2<i32>(_wgslsmith_mult_i32(reverseBits(u_input.b.x) ^ u_input.b.x, 30166i), 14932i);
                let var_2 = vec4<u32>(~56639u, ~18812u, _wgslsmith_dot_vec4_u32(~max(countOneBits(global0.a.c), ~vec4<u32>(u_input.c.x, 4294967295u, u_input.d, u_input.d)), countOneBits(_wgslsmith_add_vec4_u32(vec4<u32>(global0.a.c.x, u_input.d, global0.a.c.x, u_input.c.x), select(vec4<u32>(u_input.c.x, global0.a.c.x, 4294967295u, 14032u), vec4<u32>(u_input.d, 3164u, global0.a.c.x, 1u), false)))), ~u_input.d);
                let var_3 = _wgslsmith_f_op_vec3_f32(arg_0.a * _wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(exp2(_wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(exp2(arg_0.a)), _wgslsmith_f_op_vec3_f32(-var_0))))))));
            }
            if (all(arg_0.e.yx)) {
                var var_1 = 83453i;
                var_1 = _wgslsmith_dot_vec4_i32(-(~u_input.b), ~u_input.b);
                global2 = array<vec2<f32>, 18>();
                var var_2 = i32(-1i) * -(_wgslsmith_div_i32(~(-1i), u_input.a.x) & ~u_input.a.x);
            }
        }
        case i32(-2147483648): {
            for (var var_0 = 2147483647i; ; ) {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                continue;
            }
            for (var var_0 = 0i; var_0 > -23041i; var_0 -= 1i) {
                if (LOOP_COUNTERS[12u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
                var var_1 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-471f)))))) + global0.a.b.x);
            }
            switch (abs(_wgslsmith_dot_vec3_i32(u_input.a >> (global0.a.c.zxz % vec3<u32>(32u)), _wgslsmith_div_vec3_i32(vec3<i32>(u_input.a.x, reverseBits(-42304i), u_input.a.x), vec3<i32>(u_input.b.x, u_input.b.x, u_input.b.x) ^ _wgslsmith_add_vec3_i32(u_input.b.zxy, u_input.b.xzz))))) {
                default: {
                    return _wgslsmith_f_op_vec3_f32(arg_0.a * _wgslsmith_f_op_vec3_f32(-arg_0.a));
                }
            }
            loop {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                var var_0 = Struct_5(vec2<u32>(_wgslsmith_add_u32(max(u_input.d, 49045u), 1u), _wgslsmith_mult_u32(global0.a.c.x, 1u)), Struct_1(680f, arg_1.a, _wgslsmith_mod_vec4_u32(~global0.a.c, global0.a.c)), ~abs(u_input.a.x));
                let var_1 = vec3<bool>(all(select(select(select(vec3<bool>(false, arg_0.e.x, arg_0.e.x), vec3<bool>(arg_0.c, arg_0.e.x, arg_0.e.x), arg_0.e), select(arg_0.e, arg_0.e, true), !vec3<bool>(true, arg_0.e.x, arg_0.c)), !select(arg_0.e, vec3<bool>(false, true, arg_0.e.x), false), true)), arg_0.e.x, !all(arg_0.e.yx));
                let var_2 = vec3<bool>(~_wgslsmith_sub_i32(u_input.a.x, _wgslsmith_dot_vec4_i32(vec4<i32>(var_0.c, u_input.b.x, u_input.a.x, u_input.b.x), vec4<i32>(var_0.c, var_0.c, var_0.c, 0i))) > (i32(-2147483648) & countOneBits(u_input.a.x | 48366i)), true, !all(var_1));
                let var_3 = Struct_4(_wgslsmith_f_op_vec3_f32(-arg_0.a), arg_1, false, _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(arg_0.b.a - vec2<f32>(var_0.b.b.x, var_0.b.a)) + _wgslsmith_f_op_vec2_f32(-vec2<f32>(-564f, arg_0.a.x))))), select(vec3<bool>(var_1.x, true, true), !var_1, global0.a.c.x <= ~_wgslsmith_clamp_u32(4294967295u, global0.a.c.x, u_input.d)));
                let var_4 = arg_0;
            }
            global1 = i32(-2147483648);
        }
        default: {
            loop {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                let var_0 = _wgslsmith_clamp_vec2_i32(u_input.b.xx, min(u_input.a.zy, _wgslsmith_mod_vec2_i32(u_input.a.yx, vec2<i32>(_wgslsmith_div_i32(1888i, u_input.b.x), _wgslsmith_div_i32(2147483647i, u_input.a.x)))), max(vec2<i32>(-u_input.a.x, u_input.a.x), u_input.b.xy | u_input.b.xw));
            }
            for (var var_0 = -1i; false; ) {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
                let var_1 = _wgslsmith_f_op_f32(f32(-1f) * -913f);
                break;
            }
        }
    }
    var var_0 = Struct_5(abs(vec2<u32>(~35752u, global0.a.c.x) << (~(~vec2<u32>(global0.a.c.x, 4294967295u)) % vec2<u32>(32u))), func_5(min(4294967295u | max(u_input.d, 0u), _wgslsmith_sub_u32(~global0.a.c.x, min(u_input.c.x, 47228u)))).a, -u_input.a.x);
    switch (~max(-(~(i32(-2147483648) ^ u_input.b.x)), select(_wgslsmith_mod_i32(0i, i32(-2147483648)) | u_input.b.x, -(u_input.a.x & u_input.b.x), all(vec4<bool>(arg_0.e.x, arg_0.e.x, true, arg_0.e.x))))) {
        case 12267i: {
            var var_1 = _wgslsmith_f_op_vec2_f32(-global0.a.b);
            if (arg_0.e.x) {
                let var_2 = Struct_2(_wgslsmith_f_op_vec2_f32(min(vec2<f32>(1f, _wgslsmith_div_f32(_wgslsmith_f_op_f32(374f - var_0.b.a), global0.a.b.x)), _wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(vec2<f32>(var_0.b.b.x, var_0.b.b.x) + _wgslsmith_f_op_vec2_f32(-vec2<f32>(-1692f, -822f))), _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(abs(global2[_wgslsmith_index_u32(var_0.b.c.x, 18u)])), global0.a.b))))));
                var_1 = var_2.a;
                global1 = (u_input.b.x ^ min(-u_input.b.x, var_0.c)) >> (~var_0.b.c.x % 32u);
            }
            for (var var_2 = -28i; var_2 > 531i; var_2 += 1i) {
                if (LOOP_COUNTERS[16u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
                continue;
            }
        }
        default: {
            var var_1 = 1u;
            switch (_wgslsmith_dot_vec4_i32(u_input.b, countOneBits(vec4<i32>(-_wgslsmith_clamp_i32(var_0.c, var_0.c, u_input.b.x), select(-3131i, 0i, var_0.c > -42189i), _wgslsmith_sub_i32(func_4(32209u), -var_0.c), _wgslsmith_mod_i32(abs(u_input.a.x), u_input.b.x ^ u_input.a.x))))) {
                case -29688i: {
                    global2 = array<vec2<f32>, 18>();
                }
                case -1i: {
                    return _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(select(arg_0.a, arg_0.a, !any(arg_0.e.yx))) + _wgslsmith_div_vec3_f32(vec3<f32>(arg_1.a.x, -1043f, global0.a.b.x), _wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(-520f, var_0.b.b.x, -214f))), _wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(3373f, -427f, 187f)))))))));
                }
                case 2039i: {
                }
                default: {
                    global0 = func_5(17771u);
                    global2 = array<vec2<f32>, 18>();
                    var var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(arg_0.b.a.x))) - -808f))));
                }
            }
        }
    }
    switch (countOneBits(i32(-2147483648))) {
        case -8315i: {
            loop {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                break;
            }
            global0 = func_5(reverseBits(51093u));
            for (var var_1: i32; var_1 <= 1i; global2 = array<vec2<f32>, 18>()) {
                if (LOOP_COUNTERS[18u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
                var var_2 = any(vec4<bool>(true, all(!(!arg_0.e)), func_6(func_5(_wgslsmith_dot_vec4_u32(vec4<u32>(0u, 37398u, global0.a.c.x, var_0.a.x), vec4<u32>(0u, 18752u, 4294967295u, 517u)))), !(!(u_input.d > global0.a.c.x))));
                break;
            }
        }
        case 1i: {
            let var_1 = arg_1.a.x;
            global0 = func_5(var_0.b.c.x);
            loop {
                if (LOOP_COUNTERS[19u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
                global2 = array<vec2<f32>, 18>();
            }
        }
        case -1i: {
        }
        case 7837i: {
            return _wgslsmith_f_op_vec3_f32(-vec3<f32>(arg_1.a.x, _wgslsmith_f_op_f32(-var_0.b.a), _wgslsmith_f_op_f32(sign(arg_1.a.x))));
        }
        default: {
            global0 = Struct_3(func_5(_wgslsmith_add_u32(global0.a.c.x, _wgslsmith_dot_vec4_u32(vec4<u32>(22111u, u_input.d, var_0.b.c.x, var_0.a.x), vec4<u32>(0u, global0.a.c.x, var_0.a.x, u_input.c.x) << (vec4<u32>(var_0.b.c.x, 32137u, var_0.b.c.x, global0.a.c.x) % vec4<u32>(32u))))).a);
        }
    }
    return vec3<f32>(-1216f, -1551f, -1462f);
}

fn func_7(arg_0: vec3<f32>, arg_1: vec2<i32>, arg_2: Struct_2) -> i32 {
    global1 = -(-1i ^ arg_1.x);
    switch (-_wgslsmith_mod_i32(~arg_1.x, ~(u_input.a.x ^ arg_1.x)) << (_wgslsmith_dot_vec3_u32(vec3<u32>(_wgslsmith_dot_vec3_u32(_wgslsmith_clamp_vec3_u32(vec3<u32>(global0.a.c.x, global0.a.c.x, u_input.c.x), global0.a.c.zzw, vec3<u32>(41872u, global0.a.c.x, global0.a.c.x)), vec3<u32>(4294967295u, 25423u, u_input.c.x)), 14791u, abs(global0.a.c.x) ^ (u_input.c.x << (0u % 32u))), global0.a.c.xwx) % 32u)) {
        case 32300i: {
            switch (-2685i) {
                case -55411i: {
                }
                default: {
                    var var_0 = _wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(vec4<f32>(722f, _wgslsmith_f_op_f32(-1699f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-124f)), 261f) * vec4<f32>(_wgslsmith_div_f32(global0.a.a, _wgslsmith_f_op_f32(-316f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_0.x) * arg_0.x), arg_2.a.x, global0.a.b.x)), vec4<f32>(arg_2.a.x, _wgslsmith_f_op_f32(round(-1359f)), _wgslsmith_f_op_f32(sign(-375f)), func_5(_wgslsmith_sub_u32(39822u, 32209u)).a.a)));
                    return -_wgslsmith_dot_vec2_i32(abs(vec2<i32>(-arg_1.x, u_input.b.x)), u_input.b.xw << (global0.a.c.zz % vec2<u32>(32u)));
                }
            }
            global2 = array<vec2<f32>, 18>();
            var var_0 = vec4<u32>(_wgslsmith_clamp_u32(4294967295u, 68296u, abs(~_wgslsmith_dot_vec3_u32(global0.a.c.wxz, global0.a.c.zxy))), 622u, _wgslsmith_add_u32(66130u, ~4294967295u), ~_wgslsmith_add_u32(_wgslsmith_dot_vec3_u32(global0.a.c.yxx, ~vec3<u32>(u_input.d, global0.a.c.x, global0.a.c.x)), 0u));
            for (; false; ) {
                if (LOOP_COUNTERS[20u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
                let var_1 = _wgslsmith_dot_vec3_u32(_wgslsmith_mod_vec3_u32(~(vec3<u32>(1u, global0.a.c.x, 1u) >> (global0.a.c.zzz % vec3<u32>(32u))), vec3<u32>(_wgslsmith_sub_u32(115823u, 2916u), _wgslsmith_clamp_u32(0u, 0u, 23707u), global0.a.c.x)), global0.a.c.yxy) | ~(1u & _wgslsmith_add_u32(~global0.a.c.x, _wgslsmith_div_u32(u_input.c.x, 0u)));
                continue;
            }
            for (var var_1 = i32(-2147483648); var_1 == 1i; global0 = func_5(select(var_0.x, _wgslsmith_mod_u32(41464u, _wgslsmith_dot_vec3_u32(max(vec3<u32>(25783u, 4294967295u, 1u), global0.a.c.zxz), vec3<u32>(4294967295u, global0.a.c.x, u_input.d) << (vec3<u32>(35190u, u_input.c.x, 37567u) % vec3<u32>(32u)))), true))) {
                if (LOOP_COUNTERS[21u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
                return -u_input.b.x;
            }
        }
        default: {
            switch (7608i) {
                case 16665i: {
                    global0 = Struct_3(global0.a);
                    let var_0 = Struct_1(_wgslsmith_f_op_f32(-1425f * _wgslsmith_f_op_f32(select(arg_0.x, _wgslsmith_f_op_f32(f32(-1f) * -257f), true))), vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global0.a.a) * 480f)), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(214f - 1936f)), 293f)), ~select(global0.a.c, _wgslsmith_div_vec4_u32(global0.a.c, global0.a.c & global0.a.c), vec4<bool>(false, all(vec2<bool>(true, true)), false, false)));
                }
                case 24680i: {
                    let var_0 = _wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec3_f32(func_3(Struct_4(_wgslsmith_f_op_vec3_f32(min(arg_0, vec3<f32>(287f, -518f, arg_0.x))), Struct_2(arg_0.yy), true, global0.a.b, vec3<bool>(true, true, true)), arg_2)).yy * global2[_wgslsmith_index_u32(~global0.a.c.x, 18u)]), _wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(exp2(vec2<f32>(_wgslsmith_f_op_f32(-global0.a.a), _wgslsmith_f_op_f32(-509f + arg_2.a.x)))), arg_2.a, select(vec2<bool>(true, false), select(vec2<bool>(false, true), select(vec2<bool>(true, false), vec2<bool>(false, true), vec2<bool>(true, false)), vec2<bool>(false, false)), select(any(vec4<bool>(false, false, true, false)), true, true)))), false));
                }
                case -25013i: {
                    global2 = array<vec2<f32>, 18>();
                    let var_0 = true;
                }
                default: {
                    let var_0 = Struct_3(Struct_1(arg_0.x, vec2<f32>(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(global0.a.b.x * 102f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0.x))), vec4<u32>(~0u >> ((u_input.c.x << (1u % 32u)) % 32u), _wgslsmith_dot_vec4_u32(_wgslsmith_mod_vec4_u32(vec4<u32>(global0.a.c.x, 24924u, global0.a.c.x, 33679u), vec4<u32>(46506u, 4294967295u, global0.a.c.x, 11559u)), ~global0.a.c), (13749u >> (global0.a.c.x % 32u)) & u_input.d, ~reverseBits(4294967295u))));
                    var var_1 = Struct_5(vec2<u32>(_wgslsmith_div_u32(~(global0.a.c.x & u_input.c.x), 20964u), ~u_input.c.x), func_5(61224u).a, _wgslsmith_dot_vec2_i32(~(~vec2<i32>(arg_1.x, arg_1.x) & ~arg_1), vec2<i32>(_wgslsmith_mult_i32(u_input.a.x, ~arg_1.x), _wgslsmith_dot_vec2_i32(~u_input.a.yx, vec2<i32>(18272i, arg_1.x) << (var_0.a.c.wx % vec2<u32>(32u))))));
                    global0 = Struct_3(func_5(_wgslsmith_sub_u32(~var_0.a.c.x, ~firstTrailingBit(4294967295u))).a);
                    var var_2 = vec4<u32>(u_input.d >> (~(~(u_input.c.x & 4294967295u)) % 32u), var_1.a.x, max(~(~var_1.b.c.x), 1u), ~var_1.a.x >> (~(~(~52988u)) % 32u));
                    var var_3 = Struct_5(vec2<u32>(38591u, abs(min(u_input.d, 1u))), func_5(~reverseBits(4294967295u)).a, arg_1.x);
                }
            }
            global1 = firstLeadingBit(2147483647i);
            return _wgslsmith_clamp_i32(~_wgslsmith_mult_i32(0i, arg_1.x), -1i, _wgslsmith_dot_vec4_i32(vec4<i32>(reverseBits(arg_1.x), -30669i, firstTrailingBit(1i), 2147483647i) | max(vec4<i32>(arg_1.x, u_input.b.x, u_input.a.x, u_input.a.x) ^ u_input.b, abs(vec4<i32>(-22398i, u_input.a.x, 43539i, arg_1.x))), -vec4<i32>(_wgslsmith_div_i32(u_input.a.x, arg_1.x), _wgslsmith_div_i32(1i, -46277i), u_input.a.x, 1i)));
        }
    }
    if (true) {
        let var_0 = Struct_5(~global0.a.c.zz, global0.a, arg_1.x);
        loop {
            if (LOOP_COUNTERS[22u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
            var var_1 = vec3<bool>(true, !(!any(vec4<bool>(false, true, false, true)) | false), any(vec2<bool>(true, true)));
            let var_2 = true;
            let var_3 = i32(-2147483648);
            var var_4 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(vec4<f32>(var_0.b.b.x, 760f, arg_2.a.x, arg_2.a.x) * vec4<f32>(arg_0.x, global0.a.a, 1324f, -731f)))))));
        }
    }
    for (var var_0: i32; var_0 == 0i; var_0 += 1i) {
        if (LOOP_COUNTERS[23u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
        let var_1 = arg_2;
        var var_2 = _wgslsmith_mult_vec3_i32(vec3<i32>(~(-arg_1.x), -23863i, ~u_input.a.x), (abs(firstLeadingBit(vec3<i32>(u_input.a.x, u_input.b.x, 2147483647i))) | -vec3<i32>(u_input.a.x, -1i, 0i)) >> (select(global0.a.c.wzz, ~firstTrailingBit(vec3<u32>(u_input.c.x, u_input.c.x, global0.a.c.x)), vec3<bool>(true, true, true)) % vec3<u32>(32u)));
        var var_3 = var_1;
        var_2 = u_input.b.xxx;
    }
    for (var var_0 = 2147483647i; true; ) {
        if (LOOP_COUNTERS[24u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
        var var_1 = -245f;
        if (true) {
        }
        var var_2 = func_5(0u).a;
    }
    return 1i;
}

fn func_2(arg_0: u32, arg_1: Struct_1, arg_2: f32) -> u32 {
    let var_0 = ~62408u;
    global2 = array<vec2<f32>, 18>();
    global2 = array<vec2<f32>, 18>();
    switch (~0i) {
        case i32(-2147483648): {
            global1 = u_input.b.x;
            for (var var_1: i32; !(!(true && (_wgslsmith_f_op_f32(-arg_2) != _wgslsmith_f_op_f32(-global0.a.b.x)))); global2 = array<vec2<f32>, 18>()) {
                if (LOOP_COUNTERS[25u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
                continue;
            }
        }
        case 14007i: {
            let var_1 = u_input.b.x;
            for (var var_2 = 2147483647i; var_2 == 49768i; var_2 += 1i) {
                if (LOOP_COUNTERS[26u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
                global1 = _wgslsmith_mod_i32(_wgslsmith_div_i32(func_7(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(func_3(Struct_4(vec3<f32>(425f, arg_1.a, arg_1.b.x), Struct_2(global2[_wgslsmith_index_u32(u_input.d, 18u)]), false, vec2<f32>(1266f, global0.a.b.x), vec3<bool>(false, true, false)), Struct_2(global0.a.b)))), u_input.b.zx, Struct_2(_wgslsmith_f_op_vec2_f32(arg_1.b - global0.a.b))), ~u_input.b.x), ~var_1);
                break;
            }
        }
        case 8998i: {
        }
        default: {
        }
    }
    if (true) {
        var var_1 = Struct_1(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(arg_1.b.x))) - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(global0.a.b.x * _wgslsmith_f_op_f32(max(arg_1.b.x, -797f))) - 1f)), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(-542f, _wgslsmith_f_op_f32(global0.a.a + global0.a.a)) - global2[_wgslsmith_index_u32(16232u, 18u)]) + _wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_f_op_vec2_f32(abs(_wgslsmith_f_op_vec2_f32(-vec2<f32>(arg_2, 1013f))))))), global0.a.c);
        var_1 = Struct_1(arg_2, _wgslsmith_f_op_vec2_f32(abs(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-global0.a.b)))), select(arg_1.c, ~abs(vec4<u32>(80487u, global0.a.c.x, 4294967295u, var_0)), vec4<bool>(true, true, true, true)) ^ vec4<u32>(2766u, ~(~var_0), var_1.c.x, max(4294967295u, _wgslsmith_mult_u32(u_input.c.x, var_0))));
    }
    return _wgslsmith_mod_u32(_wgslsmith_dot_vec4_u32(_wgslsmith_mod_vec4_u32(_wgslsmith_div_vec4_u32(~vec4<u32>(u_input.c.x, var_0, 1u, global0.a.c.x), vec4<u32>(u_input.c.x, 40864u, var_0, 1u)), reverseBits(_wgslsmith_div_vec4_u32(global0.a.c, arg_1.c))), _wgslsmith_mod_vec4_u32(~arg_1.c, ~vec4<u32>(15498u, arg_1.c.x, 75704u, u_input.d))), reverseBits(1u));
}

fn func_1(arg_0: vec2<f32>) -> vec2<bool> {
    let var_0 = _wgslsmith_mult_i32(min(5277i, i32(-1i) * -u_input.b.x), u_input.a.x);
    global1 = ~var_0;
    let var_1 = vec3<bool>(true, _wgslsmith_sub_u32(global0.a.c.x, ~4294967295u) < 1u, _wgslsmith_sub_u32(u_input.c.x, max(_wgslsmith_mod_u32(global0.a.c.x, 0u), func_2(1u, global0.a, -1278f))) < 62350u);
    global2 = array<vec2<f32>, 18>();
    loop {
        if (LOOP_COUNTERS[27u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[27u] = LOOP_COUNTERS[27u] + 1u;
        break;
    }
    return vec2<bool>(var_1.x, _wgslsmith_dot_vec3_u32(global0.a.c.wzz, ~vec3<u32>(global0.a.c.x, u_input.c.x, 16560u)) != 10011u);
}

fn func_8(arg_0: bool, arg_1: vec2<bool>, arg_2: vec3<f32>) -> Struct_3 {
    switch (u_input.a.x) {
        case i32(-2147483648): {
        }
        default: {
            if (-1152f >= _wgslsmith_f_op_f32(global0.a.a + _wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(1000f * arg_2.x) + _wgslsmith_f_op_f32(arg_2.x - -780f)), _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(1318f * global0.a.b.x)))))) {
                var var_0 = Struct_4(vec3<f32>(461f, 1243f, _wgslsmith_f_op_f32(arg_2.x + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(-993f)) * _wgslsmith_f_op_f32(arg_2.x * arg_2.x)))), Struct_2(vec2<f32>(global0.a.b.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-494f) + _wgslsmith_f_op_f32(f32(-1f) * -903f)))), true, _wgslsmith_f_op_vec2_f32(exp2(_wgslsmith_f_op_vec2_f32(trunc(global2[_wgslsmith_index_u32(~(u_input.d & global0.a.c.x), 18u)])))), !(!(!vec3<bool>(arg_0, false, arg_0))));
            }
            let var_0 = ~(abs(vec2<i32>(u_input.b.x, -u_input.a.x)) | vec2<i32>(-2147483647i, u_input.b.x | (u_input.a.x << (global0.a.c.x % 32u))));
            global0 = Struct_3(global0.a);
            var var_1 = vec4<u32>(u_input.d, func_2(_wgslsmith_sub_u32(global0.a.c.x >> (~0u % 32u), ~83628u), Struct_1(220f, _wgslsmith_f_op_vec2_f32(vec2<f32>(-627f, -408f) + _wgslsmith_f_op_vec2_f32(-arg_2.zx)), firstTrailingBit(_wgslsmith_add_vec4_u32(global0.a.c, vec4<u32>(global0.a.c.x, global0.a.c.x, 1u, 4294967295u)))), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-1534f))), global0.a.b.x, !arg_1.x))), 15680u, 46971u);
        }
    }
    let var_0 = true;
    if (true) {
        global1 = u_input.b.x;
        let var_1 = 42659u;
        let var_2 = ~_wgslsmith_add_u32(4294967295u, _wgslsmith_div_u32(global0.a.c.x, global0.a.c.x));
        global2 = array<vec2<f32>, 18>();
        var var_3 = select(!select(select(!vec3<bool>(arg_0, false, false), !vec3<bool>(var_0, false, false), !var_0), !vec3<bool>(arg_0, var_0, true), select(vec3<bool>(var_0, true, var_0), !vec3<bool>(true, false, arg_0), arg_0 == true)), vec3<bool>(all(vec2<bool>(var_0 & var_0, true)), func_1(_wgslsmith_f_op_vec2_f32(-vec2<f32>(arg_2.x, global0.a.b.x))).x, false), !(!select(!vec3<bool>(false, var_0, false), !vec3<bool>(true, var_0, arg_1.x), !vec3<bool>(arg_1.x, arg_0, true))));
    }
    let var_1 = Struct_3(func_5(~(~u_input.c.x << (abs(4294967295u) % 32u))).a);
    let var_2 = Struct_5(vec2<u32>(var_1.a.c.x | min(u_input.d, 1u), _wgslsmith_mod_u32(_wgslsmith_mult_u32(1u, u_input.c.x), select(4294967295u, global0.a.c.x, false)) | ~(~28990u)), var_1.a, -(1535i ^ ~(-u_input.a.x)));
    return var_1;
}

@compute
@workgroup_size(1)
fn main() {
    let var_0 = min(max(_wgslsmith_mod_u32(u_input.c.x, firstLeadingBit(u_input.c.x)), _wgslsmith_sub_u32(~_wgslsmith_div_u32(4294967295u, 10559u), ~u_input.c.x)), ~firstLeadingBit(26200u));
    loop {
        if (LOOP_COUNTERS[28u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[28u] = LOOP_COUNTERS[28u] + 1u;
        continue;
    }
    global0 = Struct_3(Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global0.a.a) * global0.a.b.x)), _wgslsmith_f_op_vec2_f32(step(global0.a.b, _wgslsmith_f_op_vec2_f32(round(global2[_wgslsmith_index_u32(abs(6104u), 18u)])))), _wgslsmith_div_vec4_u32(~vec4<u32>(88664u, 52506u, var_0, var_0), global0.a.c)));
    var var_1 = func_8(!all(!select(vec2<bool>(false, false), vec2<bool>(false, false), vec2<bool>(true, false))), select(vec2<bool>(true, true), func_1(vec2<f32>(_wgslsmith_f_op_f32(select(global0.a.b.x, global0.a.b.x, false)), _wgslsmith_f_op_f32(1349f * 1067f))), all(func_1(global2[_wgslsmith_index_u32(u_input.c.x, 18u)])) || (_wgslsmith_f_op_f32(-global0.a.b.x) <= _wgslsmith_f_op_f32(step(global0.a.b.x, global0.a.b.x)))), _wgslsmith_f_op_vec3_f32(vec3<f32>(global0.a.b.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -418f) * _wgslsmith_div_f32(-1837f, global0.a.b.x)), _wgslsmith_f_op_vec3_f32(func_3(Struct_4(vec3<f32>(-1000f, global0.a.b.x, global0.a.b.x), Struct_2(vec2<f32>(1397f, global0.a.b.x)), false, vec2<f32>(-1166f, global0.a.b.x), vec3<bool>(false, true, false)), Struct_2(global0.a.b))).x) - _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(round(vec3<f32>(425f, -955f, 444f))) + _wgslsmith_f_op_vec3_f32(-vec3<f32>(global0.a.b.x, 630f, global0.a.b.x))))));
    global2 = array<vec2<f32>, 18>();
    let var_2 = select(vec3<bool>(true, true, true), select(vec3<bool>(false, func_2(var_0, Struct_1(-1673f, global2[_wgslsmith_index_u32(4294967295u, 18u)], vec4<u32>(u_input.c.x, 4294967295u, 32469u, var_1.a.c.x)), -633f) == ~var_1.a.c.x, true), select(vec3<bool>(any(vec2<bool>(false, false)), true, var_1.a.b.x >= var_1.a.b.x), vec3<bool>(true, true, true), vec3<bool>(true, true, true)), ((var_1.a.a == -258f) & true) != true), !select(vec3<bool>(true, true, true), select(vec3<bool>(true, true, true), vec3<bool>(true, false, true), var_1.a.c.x > u_input.d), all(vec2<bool>(true, true))));
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_mult_vec2_u32(abs(select(abs(vec2<u32>(11661u, var_0)), vec2<u32>(4294967295u, var_1.a.c.x) >> (vec2<u32>(4294967295u, var_0) % vec2<u32>(32u)), !var_2.zy)), ~global0.a.c.yy), u_input.b.xy, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-func_5(var_0 & 43530u).a.a)), _wgslsmith_div_f32(_wgslsmith_f_op_f32(699f - func_5(_wgslsmith_sub_u32(var_0, global0.a.c.x)).a.a), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(floor(global0.a.a)), _wgslsmith_f_op_f32(972f + -905f)))))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-335f, global0.a.a, var_1.a.a, global0.a.a)) - vec4<f32>(var_1.a.a, _wgslsmith_f_op_f32(-var_1.a.a), func_5(0u).a.b.x, var_1.a.b.x)) + _wgslsmith_f_op_vec4_f32(sign(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(select(vec4<f32>(1443f, global0.a.a, var_1.a.a, -507f), vec4<f32>(var_1.a.b.x, var_1.a.a, 1042f, global0.a.b.x), var_2.x)), _wgslsmith_f_op_vec4_f32(step(vec4<f32>(-481f, global0.a.a, global0.a.b.x, var_1.a.b.x), vec4<f32>(var_1.a.a, 1000f, 1000f, var_1.a.b.x))))))));
}

`;