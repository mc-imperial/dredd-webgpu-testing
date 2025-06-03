export const input = [18,41,105,55,245,253,142,199,210,184,91,111,241,111,108,70,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [18,41,105,55,245,253,142,199,210,184,91,111,241,111,108,70,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[18,41,105,55,245,253,142,199,210,184,91,111,241,111,108,70]}
// Seed: 16196013768119954214

struct Struct_1 {
    a: vec4<u32>,
    b: vec2<f32>,
}

struct Struct_2 {
    a: i32,
}

struct Struct_3 {
    a: Struct_2,
    b: i32,
    c: i32,
    d: vec3<bool>,
    e: i32,
}

struct Struct_4 {
    a: Struct_3,
    b: vec3<f32>,
}

struct UniformBuffer {
    a: u32,
    b: u32,
    c: u32,
    d: u32,
}

struct StorageBuffer {
    a: f32,
    b: f32,
    c: vec4<u32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<f32, 22>;

var<private> global1: array<Struct_1, 10>;

var<private> LOOP_COUNTERS: array<u32, 27>;

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn func_6(arg_0: vec2<u32>) -> vec3<bool> {
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        break;
    }
    global0 = array<f32, 22>();
    loop {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        global0 = array<f32, 22>();
        var var_0 = select(select(!(!select(vec4<bool>(true, true, true, true), vec4<bool>(false, true, true, false), true)), vec4<bool>(false, false, !all(vec2<bool>(false, true)), any(vec4<bool>(false, true, true, false)) && true), vec4<bool>(!all(vec3<bool>(true, true, true)), true, false, select(true, select(true, true, true), true))), vec4<bool>(false, (true && any(vec2<bool>(true, true))) & all(vec3<bool>(true, false, false)), true, all(vec3<bool>(true, true, true))), vec4<bool>(!any(select(vec2<bool>(false, true), vec2<bool>(true, false), true)), true, true, _wgslsmith_dot_vec4_u32(~vec4<u32>(arg_0.x, arg_0.x, u_input.a, u_input.d), vec4<u32>(u_input.d, 0u, u_input.d, 14920u)) != _wgslsmith_clamp_u32(7365u, _wgslsmith_mult_u32(arg_0.x, u_input.a), arg_0.x)));
    }
    var var_0 = _wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(_wgslsmith_dot_vec2_u32(~vec2<u32>(~1u, ~u_input.d), ~(~vec2<u32>(arg_0.x, arg_0.x))), 22u)] + _wgslsmith_f_op_f32(abs(2569f)));
    let var_1 = Struct_4(Struct_3(Struct_2(reverseBits(2147483647i)), 1i, firstLeadingBit(abs(~1051i)), !select(vec3<bool>(true, true, true), vec3<bool>(false, true, false), vec3<bool>(true, false, false)), -(~1735i >> (firstLeadingBit(36634u) % 32u))), vec3<f32>(global0[_wgslsmith_index_u32(max(_wgslsmith_add_u32(4294967295u, 0u), 18510u), 22u)], global0[_wgslsmith_index_u32(u_input.a, 22u)], _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -2355f))));
    return select(var_1.a.d, var_1.a.d, select(vec3<bool>(var_1.a.d.x, var_1.a.d.x, !(!var_1.a.d.x)), select(var_1.a.d, !select(var_1.a.d, vec3<bool>(true, var_1.a.d.x, var_1.a.d.x), true), select(var_1.a.d, vec3<bool>(true, false, false), true)), !vec3<bool>(true, var_1.a.c <= -1i, all(vec3<bool>(var_1.a.d.x, true, true)))));
}

fn func_5(arg_0: vec2<i32>, arg_1: Struct_2, arg_2: vec4<bool>, arg_3: bool) -> Struct_1 {
    global1 = array<Struct_1, 10>();
    if (!all(!vec4<bool>(arg_2.x, arg_2.x, true, arg_3))) {
        loop {
            if (LOOP_COUNTERS[2u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            continue;
        }
        global1 = array<Struct_1, 10>();
    }
    let var_0 = Struct_4(Struct_3(Struct_2(arg_1.a), -16073i, ~arg_1.a ^ arg_1.a, func_6(~vec2<u32>(33027u, u_input.d)), _wgslsmith_mult_i32(i32(-1i) * -1i, _wgslsmith_dot_vec2_i32(vec2<i32>(28045i, -1i), arg_0))), _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(global0[_wgslsmith_index_u32(u_input.a, 22u)], global0[_wgslsmith_index_u32(u_input.d, 22u)], 592f)) * _wgslsmith_f_op_vec3_f32(vec3<f32>(global0[_wgslsmith_index_u32(36141u, 22u)], global0[_wgslsmith_index_u32(u_input.b, 22u)], global0[_wgslsmith_index_u32(u_input.d, 22u)]) - vec3<f32>(global0[_wgslsmith_index_u32(u_input.d, 22u)], global0[_wgslsmith_index_u32(27995u, 22u)], global0[_wgslsmith_index_u32(4371u, 22u)]))) - _wgslsmith_f_op_vec3_f32(vec3<f32>(-512f, -253f, global0[_wgslsmith_index_u32(0u, 22u)]) - vec3<f32>(641f, -1172f, 1000f))), vec3<f32>(-618f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-266f * 644f) - global0[_wgslsmith_index_u32(~u_input.b, 22u)]), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(u_input.d, 22u)]))), !arg_2.x)));
    loop {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        if (true) {
            continue;
        }
        global0 = array<f32, 22>();
    }
    switch (~(arg_1.a << (1u % 32u))) {
        case 1i: {
            let var_1 = _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_div_vec2_f32(var_0.b.zy, _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(-463f, 1984f))))) * _wgslsmith_div_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1000f) + _wgslsmith_f_op_f32(f32(-1f) * -1088f)), -750f), _wgslsmith_f_op_vec2_f32(exp2(vec2<f32>(_wgslsmith_f_op_f32(-1204f), _wgslsmith_f_op_f32(select(-477f, global0[_wgslsmith_index_u32(1u, 22u)], arg_3)))))));
        }
        case -1i: {
            return Struct_1(_wgslsmith_add_vec4_u32(~(vec4<u32>(4192u, 4294967295u, 4294967295u, 33882u) | ~vec4<u32>(0u, 1u, u_input.b, u_input.a)), vec4<u32>(u_input.d, _wgslsmith_dot_vec3_u32(~vec3<u32>(1u, 61381u, u_input.c), vec3<u32>(u_input.c, 4294967295u, u_input.b)), _wgslsmith_dot_vec4_u32(countOneBits(vec4<u32>(u_input.d, u_input.d, u_input.d, 76800u)), _wgslsmith_add_vec4_u32(vec4<u32>(1u, u_input.c, u_input.a, 28568u), vec4<u32>(4294967295u, u_input.a, 52490u, u_input.c))), _wgslsmith_dot_vec2_u32(vec2<u32>(0u, 69182u), vec2<u32>(u_input.d, 15349u) >> (vec2<u32>(u_input.b, 0u) % vec2<u32>(32u))))), vec2<f32>(_wgslsmith_f_op_f32(min(-1957f, _wgslsmith_f_op_f32(-139f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(466f)))));
        }
        case 2147483647i: {
        }
        case -32845i: {
            let var_1 = Struct_4(Struct_3(arg_1, var_0.a.c, ~0i, var_0.a.d, reverseBits(_wgslsmith_add_i32(-1i, ~var_0.a.e))), vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(840f)) - 916f), _wgslsmith_f_op_f32(-636f), 1452f));
            loop {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                global1 = array<Struct_1, 10>();
                var var_2 = arg_1;
                break;
            }
            let var_2 = var_1.a.a;
            switch (_wgslsmith_mod_i32(-var_2.a, -1i)) {
                default: {
                    var var_3 = Struct_1(vec4<u32>(min(0u << (_wgslsmith_add_u32(u_input.a, 12417u) % 32u), u_input.b), ~(~u_input.a), _wgslsmith_dot_vec2_u32(_wgslsmith_clamp_vec2_u32(vec2<u32>(0u, u_input.b), vec2<u32>(1316u, 9077u), _wgslsmith_mod_vec2_u32(vec2<u32>(4294967295u, u_input.c), vec2<u32>(0u, u_input.d))), vec2<u32>(max(u_input.c, u_input.c), firstTrailingBit(34359u))), u_input.a), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(var_1.b.x - var_1.b.x), _wgslsmith_f_op_f32(max(var_0.b.x, 812f))))));
                }
            }
        }
        default: {
            loop {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                global1 = array<Struct_1, 10>();
                global1 = array<Struct_1, 10>();
                global1 = array<Struct_1, 10>();
            }
            for (var var_1 = -26368i; var_1 <= -1i; var_1 = _wgslsmith_mult_i32(_wgslsmith_mult_i32(-1i, var_0.a.c), var_0.a.a.a)) {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
            }
            var var_1 = Struct_2(_wgslsmith_div_i32(-647i, _wgslsmith_clamp_i32(-var_0.a.e, _wgslsmith_dot_vec4_i32(vec4<i32>(var_0.a.e, -6709i, -5449i, arg_1.a), vec4<i32>(arg_1.a, i32(-2147483648), i32(-2147483648), var_0.a.e)), 0i) & (firstTrailingBit(0i) << (~u_input.c % 32u))));
            let var_2 = Struct_4(Struct_3(Struct_2(select(select(var_1.a, -33324i, arg_3), _wgslsmith_add_i32(-1i, -27756i), true)), ~var_1.a, arg_1.a, !(!arg_2.yzy), -_wgslsmith_add_i32(~arg_1.a, var_0.a.b & -1901i)), _wgslsmith_f_op_vec3_f32(max(vec3<f32>(_wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(u_input.b, 22u)]), 624f, -1341f), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-vec3<f32>(var_0.b.x, var_0.b.x, var_0.b.x)), vec3<f32>(global0[_wgslsmith_index_u32(u_input.d, 22u)], var_0.b.x, global0[_wgslsmith_index_u32(u_input.d, 22u)]), arg_3)) - _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-var_0.b), var_0.b)))));
        }
    }
    return global1[_wgslsmith_index_u32(u_input.b, 10u)];
}

fn func_7(arg_0: f32, arg_1: vec3<i32>, arg_2: Struct_1, arg_3: i32) -> u32 {
    for (var var_0 = _wgslsmith_clamp_i32(arg_3, arg_3, _wgslsmith_dot_vec2_i32(vec2<i32>(firstTrailingBit(_wgslsmith_div_i32(arg_1.x, arg_3)), 6595i), arg_1.zz)); var_0 == -1i; global0 = array<f32, 22>()) {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        var var_1 = min(~4294967295u, abs(_wgslsmith_dot_vec3_u32(arg_2.a.yww, select(vec3<u32>(16178u, 0u, u_input.c), arg_2.a.xxw, vec3<bool>(false, false, false)) << ((arg_2.a.xwy << (vec3<u32>(0u, u_input.d, arg_2.a.x) % vec3<u32>(32u))) % vec3<u32>(32u)))));
    }
    if (select(arg_1.x < ~_wgslsmith_add_i32(abs(18927i), firstTrailingBit(arg_3)), true, any(!select(vec3<bool>(true, true, true), vec3<bool>(true, false, true), false)))) {
        for (var var_0 = 2147483647i; ; var_0 -= 1i) {
            if (LOOP_COUNTERS[8u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        }
        for (; ; ) {
            if (LOOP_COUNTERS[9u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        }
        loop {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
            var var_0 = _wgslsmith_mod_vec4_i32(vec4<i32>(~arg_1.x, -_wgslsmith_clamp_i32(arg_1.x, -49794i, i32(-2147483648)), ~2147483647i, 2462i >> (countOneBits(arg_2.a.x) % 32u)) >> (vec4<u32>(u_input.b, ~arg_2.a.x ^ ~arg_2.a.x, 15648u, 0u) % vec4<u32>(32u)), ~(-vec4<i32>(arg_3, arg_3, 0i, -41061i)));
            var var_1 = any(vec2<bool>(!all(vec3<bool>(false, true, true)), true));
        }
    }
    if (all(select(!(!select(vec4<bool>(true, false, true, true), vec4<bool>(false, true, true, true), true)), !select(vec4<bool>(true, true, true, true), select(vec4<bool>(false, true, false, false), vec4<bool>(true, false, true, false), vec4<bool>(true, true, true, false)), func_6(arg_2.a.zz).x), select(select(vec4<bool>(true, true, true, true), vec4<bool>(false, false, true, true), vec4<bool>(true, true, true, true)), vec4<bool>(true, true, true, true), vec4<bool>(12195i > arg_1.x, any(vec3<bool>(true, true, true)), true, all(vec3<bool>(true, true, false))))))) {
        switch (1i) {
            case 1i: {
                global0 = array<f32, 22>();
                var var_0 = func_5(-_wgslsmith_div_vec2_i32(abs(~arg_1.xx), vec2<i32>(_wgslsmith_dot_vec4_i32(vec4<i32>(1599i, arg_3, -41562i, arg_3), vec4<i32>(1i, arg_3, arg_3, 2147483647i)), arg_1.x)), Struct_2(0i), !(!vec4<bool>(select(true, true, true), true, false, true)), (~(0u & arg_2.a.x) | arg_2.a.x) != arg_2.a.x).b.x;
                var var_1 = all(select(select(vec3<bool>(true, true, true), vec3<bool>(true, true, true), vec3<bool>(true, true, false)), vec3<bool>(true, select(false, false, true), any(vec2<bool>(false, false))), true)) | (any(select(vec2<bool>(true, true), vec2<bool>(true, true), func_6(arg_2.a.zx).yz)) == any(vec3<bool>(all(vec4<bool>(false, false, true, true)), true, true)));
                var var_2 = firstTrailingBit(reverseBits(-(~arg_1.x))) > _wgslsmith_clamp_i32(-1i, ((0i | arg_3) ^ 1i) << (u_input.a % 32u), _wgslsmith_clamp_i32(4224i, 42451i | arg_1.x, ~arg_1.x));
            }
            case 18254i: {
                return 1u;
            }
            default: {
                global1 = array<Struct_1, 10>();
                let var_0 = !vec2<bool>(all(vec3<bool>(true, true, false)) && false, false);
                global1 = array<Struct_1, 10>();
                let var_1 = vec3<u32>(u_input.c, select(~firstTrailingBit(arg_2.a.x), 4294967295u, true) ^ arg_2.a.x, reverseBits(39979u));
                let var_2 = _wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -1000f), 1f, func_5(arg_1.xz, Struct_2(-arg_1.x), !select(vec4<bool>(var_0.x, var_0.x, false, var_0.x), vec4<bool>(var_0.x, var_0.x, false, var_0.x), vec4<bool>(var_0.x, true, true, true)), -327f < arg_0).b.x));
            }
        }
        loop {
            if (LOOP_COUNTERS[11u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
            let var_0 = u_input.d <= func_5(arg_1.yz, Struct_2(arg_3 | firstLeadingBit(arg_1.x)), !select(select(vec4<bool>(true, false, false, true), vec4<bool>(false, false, false, true), false), vec4<bool>(false, true, false, true), any(vec3<bool>(true, false, true))), true).a.x;
            var var_1 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(step(vec4<f32>(-889f, global0[_wgslsmith_index_u32(u_input.c, 22u)], arg_2.b.x, -2184f), vec4<f32>(global0[_wgslsmith_index_u32(arg_2.a.x, 22u)], -1161f, 1114f, -625f))) + _wgslsmith_f_op_vec4_f32(vec4<f32>(-1528f, 936f, arg_2.b.x, 809f) * vec4<f32>(global0[_wgslsmith_index_u32(59873u, 22u)], 1161f, 1766f, arg_2.b.x)))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(exp2(vec4<f32>(arg_0, arg_2.b.x, -241f, arg_2.b.x))) + vec4<f32>(-366f, arg_2.b.x, 546f, 645f)) - _wgslsmith_f_op_vec4_f32(sign(vec4<f32>(1543f, -1138f, arg_0, arg_2.b.x)))))));
            global0 = array<f32, 22>();
        }
        global0 = array<f32, 22>();
    }
    if (true) {
        global0 = array<f32, 22>();
        if (false) {
            var var_0 = 4294967295u;
            var_0 = _wgslsmith_dot_vec3_u32((arg_2.a.wzw >> (abs(arg_2.a.zwz) % vec3<u32>(32u))) & vec3<u32>(20875u, ~69428u, _wgslsmith_mult_u32(31827u, max(u_input.b, 50621u))), countOneBits(select(~vec3<u32>(u_input.d, u_input.a, 10715u) >> (vec3<u32>(20206u, 0u, 4294967295u) % vec3<u32>(32u)), firstTrailingBit(vec3<u32>(arg_2.a.x, arg_2.a.x, u_input.c)), select(true, false, true) & select(true, false, false))));
            var_0 = 57751u;
            let var_1 = 0i;
        }
    }
    loop {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        var var_0 = _wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(-arg_2.b), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(abs(vec2<f32>(1446f, 1195f))) - _wgslsmith_f_op_vec2_f32(-arg_2.b)), _wgslsmith_f_op_vec2_f32(exp2(arg_2.b)), false)) + _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(step(arg_2.b, arg_2.b))))), func_6(~func_5(arg_1.xz, Struct_2(arg_3), vec4<bool>(true, true, true, true), true).a.xy).yx));
        var var_1 = Struct_3(Struct_2(_wgslsmith_dot_vec4_i32(select(abs(vec4<i32>(arg_1.x, arg_1.x, arg_3, -25798i)), ~vec4<i32>(40027i, 2147483647i, 2147483647i, arg_1.x), true), vec4<i32>(arg_3, -1i, 46303i, abs(62469i)))), 44918i, firstLeadingBit(0i), select(vec3<bool>(true, true, true), func_6(firstTrailingBit(vec2<u32>(30993u, 0u) & arg_2.a.zx)), !func_6(firstTrailingBit(arg_2.a.zw))), i32(-2147483648));
        let var_2 = func_6(select(min(_wgslsmith_sub_vec2_u32(vec2<u32>(u_input.a, 59953u), arg_2.a.yz), ~select(vec2<u32>(36876u, u_input.d), arg_2.a.zy, true)), arg_2.a.xz, var_1.d.zy)).x;
    }
    return 1u;
}

fn func_8(arg_0: i32, arg_1: vec2<u32>) -> Struct_1 {
    let var_0 = _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(select(-156f, global0[_wgslsmith_index_u32(85612u & ~_wgslsmith_sub_u32(18578u, arg_1.x), 22u)], global0[_wgslsmith_index_u32(_wgslsmith_mult_u32(u_input.d, _wgslsmith_mod_u32(12595u, arg_1.x)), 22u)] == _wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(103493u, 22u)])))));
    let var_1 = Struct_3(Struct_2(1i), 8634i, 1i, vec3<bool>(true, true, true), min(17101i, 0i));
    var var_2 = vec4<i32>(arg_0, var_1.b, i32(-1i) * -19081i, -var_1.a.a);
    loop {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        if (_wgslsmith_f_op_f32(1330f + -982f) < var_0) {
        }
        switch (arg_0) {
            default: {
                var var_3 = u_input.c;
                var_3 = u_input.a;
            }
        }
        continue;
    }
    let var_3 = _wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(vec4<f32>(global0[_wgslsmith_index_u32(u_input.a, 22u)], -900f, -1000f, var_0) - vec4<f32>(-296f, global0[_wgslsmith_index_u32(arg_1.x, 22u)], global0[_wgslsmith_index_u32(24519u, 22u)], 1148f)))) + vec4<f32>(global0[_wgslsmith_index_u32(_wgslsmith_sub_u32(1u, u_input.d), 22u)], _wgslsmith_f_op_f32(1706f + -452f), _wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(arg_1.x, 22u)]), 730f)), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(-vec4<f32>(var_0, var_0, 158f, 790f)))) + vec4<f32>(_wgslsmith_f_op_f32(-var_0), -1000f, _wgslsmith_f_op_f32(-1319f * -930f), _wgslsmith_f_op_f32(trunc(696f))))) + _wgslsmith_f_op_vec4_f32(vec4<f32>(func_5(var_2.xx, Struct_2(var_1.b), select(vec4<bool>(true, var_1.d.x, false, var_1.d.x), vec4<bool>(var_1.d.x, false, true, true), var_1.d.x), any(var_1.d.yz)).b.x, _wgslsmith_div_f32(_wgslsmith_f_op_f32(-var_0), _wgslsmith_f_op_f32(var_0 - -183f)), _wgslsmith_f_op_f32(-var_0), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(sign(global0[_wgslsmith_index_u32(1u, 22u)])), _wgslsmith_f_op_f32(-1432f * 499f)))) + _wgslsmith_f_op_vec4_f32(min(vec4<f32>(var_0, _wgslsmith_f_op_f32(sign(-2195f)), var_0, var_0), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(var_0, 218f, 228f, 2308f) + vec4<f32>(-463f, var_0, var_0, global0[_wgslsmith_index_u32(u_input.b, 22u)])) * _wgslsmith_f_op_vec4_f32(vec4<f32>(global0[_wgslsmith_index_u32(4294967295u, 22u)], 1000f, global0[_wgslsmith_index_u32(u_input.d, 22u)], 1151f) - vec4<f32>(global0[_wgslsmith_index_u32(45991u, 22u)], -947f, 530f, var_0)))))));
    return global1[_wgslsmith_index_u32(func_5(var_2.zz & var_2.yz, Struct_2(-arg_0), !(!(!vec4<bool>(var_1.d.x, false, true, var_1.d.x))), false).a.x, 10u)];
}

fn func_4(arg_0: i32) -> Struct_4 {
    global1 = array<Struct_1, 10>();
    global0 = array<f32, 22>();
    for (var var_0 = 0i; select(!(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(max(-460f, global0[_wgslsmith_index_u32(23541u, 22u)])))) >= _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(global0[_wgslsmith_index_u32(30580u, 22u)], 1173f)))), true, !(_wgslsmith_dot_vec3_i32(vec3<i32>(arg_0, arg_0, i32(-2147483648)), vec3<i32>(arg_0, -1i, 32533i)) >= -arg_0)); global0 = array<f32, 22>()) {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        if (all(select(select(vec3<bool>(true, true, true), vec3<bool>(true, true, true), true), !vec3<bool>(all(vec3<bool>(true, false, true)), true, 5123i < arg_0), !select(vec3<bool>(false, true, true), vec3<bool>(true, false, true), vec3<bool>(false, true, false))))) {
            let var_1 = _wgslsmith_div_f32(-1058f, global0[_wgslsmith_index_u32(countOneBits(min(u_input.d, abs(43356u) << (u_input.d % 32u))), 22u)]);
            var var_2 = _wgslsmith_add_vec4_i32(vec4<i32>(reverseBits(1i), -(-50744i >> (_wgslsmith_div_u32(u_input.a, u_input.c) % 32u)), i32(-2147483648), min(arg_0, 71i)), -vec4<i32>(~_wgslsmith_mod_i32(11564i, 1i), 1i, 2147483647i, -min(arg_0, arg_0)));
        }
        let var_1 = all(vec3<bool>(true, true, true));
        let var_2 = _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(f32(-1f) * -436f), -1271f)) != _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(global0[_wgslsmith_index_u32(~14620u, 22u)], _wgslsmith_f_op_f32(floor(global0[_wgslsmith_index_u32(u_input.b, 22u)]))))));
        loop {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            var var_3 = 1431f;
        }
        var_0 = -1i;
    }
    global1 = array<Struct_1, 10>();
    switch (-(_wgslsmith_mult_i32(5296i, 1i) | arg_0)) {
        case 0i: {
            let var_0 = func_8(-5341i, vec2<u32>(func_7(-779f, ~(~vec3<i32>(38701i, -20102i, 0i)), func_5(max(vec2<i32>(0i, arg_0), vec2<i32>(11283i, arg_0)), Struct_2(arg_0), vec4<bool>(false, true, false, true), true), _wgslsmith_div_i32(reverseBits(arg_0), arg_0 >> (u_input.a % 32u))), ~_wgslsmith_div_u32(1u, select(1u, u_input.b, true))));
            if (true) {
                let var_1 = 1u;
                let var_2 = vec3<bool>(true && func_6(var_0.a.zx).x, true, true & (arg_0 > -select(arg_0, arg_0, true)));
                return Struct_4(Struct_3(Struct_2(countOneBits(i32(-1i) * i32(-2147483648))), _wgslsmith_mod_i32(0i, _wgslsmith_mult_i32(~arg_0, arg_0)), _wgslsmith_clamp_i32(~(-arg_0), -(arg_0 ^ 1i), -firstTrailingBit(-1i)), select(!var_2, var_2, var_2), 2147483647i), _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(-969f, -621f, global0[_wgslsmith_index_u32(var_0.a.x, 22u)])))), vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_div_f32(-1648f, global0[_wgslsmith_index_u32(29891u, 22u)]) - _wgslsmith_f_op_f32(floor(-704f))), global0[_wgslsmith_index_u32(var_1, 22u)], 759f)));
            }
            let var_1 = 0u;
            var var_2 = Struct_3(Struct_2(_wgslsmith_div_i32(30910i, firstLeadingBit(arg_0))), arg_0, arg_0, select(func_6(min(var_0.a.yy, vec2<u32>(0u, 1u))), !select(vec3<bool>(true, false, true), vec3<bool>(true, true, true), false), vec3<bool>(true, true, false)), arg_0);
            loop {
                if (LOOP_COUNTERS[16u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
            }
        }
        case 1i: {
            var var_0 = arg_0;
            let var_1 = select(select(!func_6(_wgslsmith_clamp_vec2_u32(vec2<u32>(u_input.c, u_input.b), vec2<u32>(4294967295u, u_input.a), vec2<u32>(0u, 4294967295u))).xx, vec2<bool>(!(arg_0 > -23519i), true), false), select(select(!select(vec2<bool>(true, false), vec2<bool>(true, true), vec2<bool>(true, true)), select(vec2<bool>(true, true), vec2<bool>(true, true), vec2<bool>(true, true)), vec2<bool>(true, true)), !select(vec2<bool>(true, false), select(vec2<bool>(false, true), vec2<bool>(true, false), true), func_6(vec2<u32>(u_input.d, u_input.d)).x), false), select(true, ~arg_0 <= _wgslsmith_div_i32(arg_0, arg_0), true));
            let var_2 = func_5(~(~abs(_wgslsmith_sub_vec2_i32(vec2<i32>(0i, -1i), vec2<i32>(i32(-2147483648), arg_0)))), Struct_2(arg_0), select(!(!select(vec4<bool>(var_1.x, var_1.x, var_1.x, var_1.x), vec4<bool>(var_1.x, var_1.x, var_1.x, true), var_1.x)), !vec4<bool>(true, true, any(vec4<bool>(false, var_1.x, true, var_1.x)), true), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(-965f)) * _wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(u_input.d, 22u)] + -1441f)) != _wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(~u_input.c, 22u)])), false);
        }
        case -53420i: {
        }
        case -847i: {
            global0 = array<f32, 22>();
            global1 = array<Struct_1, 10>();
            switch (_wgslsmith_dot_vec2_i32(-countOneBits(~firstTrailingBit(vec2<i32>(arg_0, arg_0))), min(~select(~vec2<i32>(arg_0, arg_0), _wgslsmith_clamp_vec2_i32(vec2<i32>(1i, 2147483647i), vec2<i32>(-6427i, arg_0), vec2<i32>(0i, 42236i)), vec2<bool>(false, false)), vec2<i32>(abs(42377i), _wgslsmith_add_i32(arg_0 >> (0u % 32u), -19438i))))) {
                case 1i: {
                    let var_0 = _wgslsmith_f_op_vec4_f32(-vec4<f32>(func_8(-1i, abs(_wgslsmith_add_vec2_u32(vec2<u32>(u_input.d, u_input.b), vec2<u32>(13565u, 4294967295u)))).b.x, -871f, _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(step(global0[_wgslsmith_index_u32(firstLeadingBit(0u), 22u)], 1000f)))), _wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(firstTrailingBit(~1u), 22u)])));
                    let var_1 = vec4<f32>(936f, var_0.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(floor(global0[_wgslsmith_index_u32(abs(67199u), 22u)]))))), var_0.x);
                    global0 = array<f32, 22>();
                    let var_2 = _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(step(_wgslsmith_div_vec2_f32(_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(var_0.yw * vec2<f32>(1073f, var_0.x)), vec2<f32>(global0[_wgslsmith_index_u32(u_input.a, 22u)], 893f)), _wgslsmith_f_op_vec2_f32(-var_1.wz)), vec2<f32>(-2079f, global0[_wgslsmith_index_u32(_wgslsmith_dot_vec2_u32(_wgslsmith_div_vec2_u32(vec2<u32>(u_input.a, 43328u), vec2<u32>(11605u, u_input.c)), ~vec2<u32>(u_input.c, u_input.b)), 22u)]))) - vec2<f32>(global0[_wgslsmith_index_u32(u_input.d, 22u)], _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(var_1.x * _wgslsmith_f_op_f32(min(var_0.x, var_1.x))) * _wgslsmith_f_op_f32(max(-1131f, _wgslsmith_f_op_f32(min(var_1.x, global0[_wgslsmith_index_u32(53981u, 22u)])))))));
                    global1 = array<Struct_1, 10>();
                }
                case -2074i: {
                    var var_0 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(1u, 22u)] + 1635f))) + -417f);
                    let var_1 = Struct_3(Struct_2(~(i32(-1i) * -arg_0)), arg_0 >> (~_wgslsmith_mult_u32(u_input.b, u_input.a) % 32u), -(-38387i & (arg_0 << (~4294967295u % 32u))), vec3<bool>(true, true, true), -arg_0);
                }
                default: {
                    global0 = array<f32, 22>();
                }
            }
            let var_0 = any(func_6(_wgslsmith_div_vec2_u32(vec2<u32>(1u, _wgslsmith_div_u32(82977u, 8085u)), abs(_wgslsmith_sub_vec2_u32(vec2<u32>(4294967295u, u_input.c), vec2<u32>(7037u, u_input.d))))));
        }
        default: {
            switch (-_wgslsmith_clamp_i32(-max(_wgslsmith_mult_i32(2147483647i, arg_0), _wgslsmith_add_i32(arg_0, -61079i)), _wgslsmith_dot_vec2_i32(firstLeadingBit(vec2<i32>(i32(-2147483648), 33831i) >> (vec2<u32>(u_input.a, u_input.a) % vec2<u32>(32u))), vec2<i32>(37083i, ~arg_0)), _wgslsmith_dot_vec4_i32(~vec4<i32>(21512i, 0i, 39654i, arg_0), select(vec4<i32>(arg_0, arg_0, arg_0, -21089i), vec4<i32>(-53745i, arg_0, arg_0, arg_0), true)) << (54354u % 32u))) {
                case -1i: {
                    global1 = array<Struct_1, 10>();
                }
                case -55563i: {
                    let var_0 = -firstLeadingBit(reverseBits(vec2<i32>(-arg_0, arg_0 | arg_0)));
                    global0 = array<f32, 22>();
                    let var_1 = -270f;
                }
                default: {
                }
            }
            let var_0 = vec3<bool>(!all(select(vec4<bool>(false, true, true, false), vec4<bool>(true, false, false, false), vec4<bool>(true, false, false, false))) || all(vec3<bool>(all(vec3<bool>(false, true, true)), true, 132f >= global0[_wgslsmith_index_u32(u_input.b, 22u)])), true || any(select(vec4<bool>(true, true, true, true), vec4<bool>(true, false, false, false), vec4<bool>(false, true, true, true))), !((1i < arg_0) || true));
        }
    }
    return Struct_4(Struct_3(Struct_2(i32(-1i) * -arg_0), 2147483647i, ~20020i, select(func_6(select(vec2<u32>(4294967295u, u_input.b), vec2<u32>(u_input.a, 11302u), vec2<bool>(false, false))), vec3<bool>(true, true, true), vec3<bool>(false, arg_0 == 39301i, select(true, false, false))), i32(-1i) * -6427i), _wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(func_5(_wgslsmith_div_vec2_i32(vec2<i32>(-1i, arg_0), vec2<i32>(arg_0, 1i)), Struct_2(i32(-2147483648)), vec4<bool>(true, true, true, true), any(vec4<bool>(false, false, false, true))).b.x, global0[_wgslsmith_index_u32(_wgslsmith_add_u32(~u_input.b, max(u_input.d, 1u)), 22u)], _wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(u_input.b, 22u)])))));
}

fn func_3(arg_0: vec2<u32>, arg_1: i32) -> i32 {
    global0 = array<f32, 22>();
    var var_0 = func_4(-5583i);
    var_0 = Struct_4(Struct_3(func_4(-firstLeadingBit(var_0.a.b)).a.a, arg_1 << (_wgslsmith_mult_u32(~u_input.c, 67471u) % 32u), i32(-1i) * -arg_1, var_0.a.d, var_0.a.a.a), var_0.b);
    switch (abs(var_0.a.e)) {
        case 14618i: {
            for (; false; ) {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                continue;
            }
            let var_1 = 4345i;
            for (var var_2 = -44817i; var_2 < -12160i; var_2 -= 1i) {
                if (LOOP_COUNTERS[18u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
            }
        }
        case i32(-2147483648): {
            if ((1i ^ var_0.a.a.a) < (i32(-1i) * -1i)) {
                let var_1 = var_0.a.d.x;
                let var_2 = vec2<f32>(_wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(0u, 22u)] - _wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(1781u, 22u)])), -1268f);
            }
            for (var var_1 = -510i; !(!all(func_6(arg_0))); var_1 -= 1i) {
                if (LOOP_COUNTERS[19u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
                let var_2 = Struct_1(_wgslsmith_mod_vec4_u32(vec4<u32>(~u_input.d, max(u_input.a, 1u), 91756u, ~arg_0.x), (vec4<u32>(u_input.c, 10308u, u_input.c, 30694u) << (vec4<u32>(0u, 45894u, 46166u, u_input.d) % vec4<u32>(32u))) ^ (vec4<u32>(1u, arg_0.x, u_input.c, 0u) | vec4<u32>(30062u, u_input.d, arg_0.x, arg_0.x))) << (~abs(_wgslsmith_clamp_vec4_u32(vec4<u32>(15958u, 1u, 47267u, 0u), vec4<u32>(u_input.d, u_input.c, 1u, 1u), vec4<u32>(u_input.d, u_input.d, arg_0.x, 85421u))) % vec4<u32>(32u)), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-var_0.b.zx) + func_8(0i, ~arg_0).b));
                global0 = array<f32, 22>();
                var var_3 = Struct_3(func_4(var_0.a.b).a.a, (2616i | arg_1) >> (~(~abs(var_2.a.x)) % 32u), 0i, func_4(~_wgslsmith_div_i32(var_0.a.c, min(-30604i, var_0.a.c))).a.d, reverseBits(_wgslsmith_dot_vec4_i32(countOneBits(-vec4<i32>(77553i, 2147483647i, -12844i, -73198i)), -vec4<i32>(1i, arg_1, 0i, arg_1))));
                var var_4 = global1[_wgslsmith_index_u32(_wgslsmith_div_u32(0u, ~(14884u | ~arg_0.x)), 10u)];
            }
            var var_1 = vec3<bool>(true, var_0.a.d.x, false);
        }
        case 24050i: {
            switch (~2147483647i) {
                case -1i: {
                    let var_1 = global1[_wgslsmith_index_u32(~func_8(_wgslsmith_dot_vec3_i32(~(-vec3<i32>(-34622i, -19191i, 2147483647i)), -firstLeadingBit(vec3<i32>(var_0.a.c, 2147483647i, var_0.a.b))), ~vec2<u32>(~0u, 1u)).a.x, 10u)];
                }
                case 19396i: {
                    let var_1 = 23380u;
                    global0 = array<f32, 22>();
                    var var_2 = Struct_1(~abs(firstLeadingBit(~vec4<u32>(arg_0.x, 4294967295u, 56943u, var_1))), vec2<f32>(_wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(~arg_0.x, 22u)] - _wgslsmith_f_op_f32(step(global0[_wgslsmith_index_u32(32207u, 22u)], -427f))), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(sign(1000f)), 897f, any(select(vec3<bool>(true, true, false), vec3<bool>(false, false, var_0.a.d.x), var_0.a.d.x))))));
                    var var_3 = ~_wgslsmith_mod_u32(_wgslsmith_mult_u32(~(~1u), firstLeadingBit(select(1u, 4368u, var_0.a.d.x))), var_1);
                }
                case -15266i: {
                    var var_1 = vec3<u32>(~4294967295u, 27881u, countOneBits(_wgslsmith_dot_vec4_u32(~vec4<u32>(29089u, u_input.b, arg_0.x, 122918u), vec4<u32>(4294967295u, 38867u, 6575u, 1u)))) | ~select(_wgslsmith_div_vec3_u32(~vec3<u32>(u_input.c, 14161u, u_input.c), vec3<u32>(u_input.b, 5321u, u_input.c) ^ vec3<u32>(u_input.d, arg_0.x, 1u)), _wgslsmith_sub_vec3_u32(~vec3<u32>(1u, u_input.c, 0u), ~vec3<u32>(u_input.b, 14240u, 1u)), var_0.a.d);
                    var var_2 = func_4(firstTrailingBit(i32(-1i) * i32(-2147483648))).a;
                }
                case i32(-2147483648): {
                    let var_1 = func_4(i32(-2147483648)).a;
                    return ~(-(~arg_1)) ^ var_0.a.b;
                }
                default: {
                    var var_1 = 1i;
                    let var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -1611f) * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(1842f)) + _wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(arg_0.x, 22u)]))), -1295f)));
                    var_0 = func_4(func_4(-1i).a.a.a);
                }
            }
            var var_1 = func_4(-1i).a.a;
            for (; var_0.a.d.x; ) {
                if (LOOP_COUNTERS[20u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
                var_0 = func_4(-1i);
                var var_2 = func_4(44092i).a.a;
                continue;
            }
            for (var var_2: i32; _wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(countOneBits(~2193u), 22u)]) < _wgslsmith_f_op_f32(floor(var_0.b.x)); var_2 -= 1i) {
                if (LOOP_COUNTERS[21u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
                var_1 = func_4(-firstLeadingBit(-firstTrailingBit(var_1.a))).a.a;
                global0 = array<f32, 22>();
            }
            if (!(all(var_0.a.d) || all(vec3<bool>(false, var_0.a.d.x || var_0.a.d.x, all(vec4<bool>(true, false, true, false)))))) {
                global0 = array<f32, 22>();
                global0 = array<f32, 22>();
            }
        }
        case -15105i: {
            return _wgslsmith_mod_i32(var_0.a.a.a, 13570i);
        }
        default: {
        }
    }
    for (var var_1 = -1i; var_1 == 1i; var_1 += 1i) {
        if (LOOP_COUNTERS[22u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
        var_1 = -6775i;
    }
    return _wgslsmith_sub_i32(var_0.a.a.a, _wgslsmith_add_i32(select(var_0.a.b, _wgslsmith_sub_i32(var_0.a.a.a, arg_1), true), ~(-104457i)) << (~(~46274u) % 32u));
}

fn func_2(arg_0: Struct_1, arg_1: vec4<f32>, arg_2: vec3<bool>) -> vec4<u32> {
    if (false) {
        loop {
            if (LOOP_COUNTERS[23u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
            break;
        }
    }
    global1 = array<Struct_1, 10>();
    global0 = array<f32, 22>();
    switch (func_3(countOneBits(~arg_0.a.wx), 1i)) {
        case 1i: {
            global1 = array<Struct_1, 10>();
            global0 = array<f32, 22>();
            switch (-_wgslsmith_mult_i32(_wgslsmith_mod_i32(2147483647i, -2147483647i), ~countOneBits(i32(-1i) * -2451i))) {
                case -11752i: {
                    global1 = array<Struct_1, 10>();
                    var var_0 = func_8(reverseBits(0i >> (arg_0.a.x % 32u)), ~(~_wgslsmith_add_vec2_u32(~arg_0.a.xw, vec2<u32>(0u, arg_0.a.x))));
                }
                case -25558i: {
                    var var_0 = firstLeadingBit(arg_0.a.x);
                    let var_1 = _wgslsmith_clamp_u32(~27468u, _wgslsmith_add_u32(~0u, arg_0.a.x), abs(arg_0.a.x | u_input.c));
                    var_0 = 1u;
                    var var_2 = _wgslsmith_f_op_vec2_f32(arg_0.b - vec2<f32>(func_8(~_wgslsmith_mult_i32(-1i, 21021i), ~firstTrailingBit(arg_0.a.xw)).b.x, 535f));
                    global1 = array<Struct_1, 10>();
                }
                case -1i: {
                    var var_0 = _wgslsmith_f_op_vec2_f32(arg_1.zx - _wgslsmith_f_op_vec2_f32(arg_1.zz - vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(global0[_wgslsmith_index_u32(37085u, 22u)]))), -3068f)));
                    var var_1 = select(firstLeadingBit(~(~vec2<u32>(14082u, arg_0.a.x))), arg_0.a.wx, !(arg_2.x && true) || true) >> (~(~abs(arg_0.a.xx)) % vec2<u32>(32u));
                    var_0 = _wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_f_op_vec2_f32(-func_8(1i, _wgslsmith_sub_vec2_u32(abs(vec2<u32>(u_input.c, 1u)), vec2<u32>(arg_0.a.x, var_1.x))).b)));
                    var var_2 = func_4(_wgslsmith_mult_i32(-1i >> (min(u_input.a & 16713u, select(1u, arg_0.a.x, arg_2.x)) % 32u), firstTrailingBit(1i ^ (0i << (u_input.c % 32u)))));
                    var var_3 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(arg_0.b.x + arg_1.x))), _wgslsmith_f_op_f32(trunc(arg_1.x)))), -178f)));
                }
                case 6439i: {
                    let var_0 = select(_wgslsmith_div_vec4_u32(~_wgslsmith_mod_vec4_u32(firstLeadingBit(arg_0.a), ~vec4<u32>(u_input.b, 107924u, arg_0.a.x, 10834u)), ~arg_0.a), arg_0.a, arg_2.x);
                    let var_1 = arg_2.zz;
                    global1 = array<Struct_1, 10>();
                }
                default: {
                    global0 = array<f32, 22>();
                    var var_0 = select(-1i, reverseBits(~(-1i)), arg_2.x);
                }
            }
            global1 = array<Struct_1, 10>();
        }
        case i32(-2147483648): {
            var var_0 = Struct_2(_wgslsmith_clamp_i32((2928i >> (arg_0.a.x % 32u)) | 1i, _wgslsmith_div_i32(1i, _wgslsmith_add_i32(1i, 4788i)), 29684i) ^ min(-1i, -(~14382i)));
        }
        case 0i: {
            loop {
                if (LOOP_COUNTERS[24u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
                continue;
            }
            let var_0 = _wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(~(u_input.b >> (func_5(-vec2<i32>(1i, 1i), Struct_2(0i), vec4<bool>(arg_2.x, true, false, false), all(vec4<bool>(false, false, arg_2.x, false))).a.x % 32u)), 22u)] * _wgslsmith_f_op_f32(func_4(1i).b.x - arg_1.x));
            let var_1 = (1u >> ((select(arg_0.a.x, ~0u, arg_2.x) >> (arg_0.a.x % 32u)) % 32u)) << (_wgslsmith_add_u32(~12929u, _wgslsmith_dot_vec2_u32(arg_0.a.yz, max(vec2<u32>(38301u, 0u), vec2<u32>(arg_0.a.x, u_input.b))) << (abs(~u_input.d) % 32u)) % 32u);
        }
        default: {
            global0 = array<f32, 22>();
            if (arg_2.x) {
                let var_0 = Struct_3(func_4(-func_3(vec2<u32>(37839u, 4294967295u), 1i)).a.a, (11302i ^ (1i >> (_wgslsmith_mult_u32(4294967295u, u_input.a) % 32u))) & abs(_wgslsmith_add_i32(countOneBits(-79940i), -2147483647i)), _wgslsmith_mult_i32(abs(min(i32(-1i) * -1i, _wgslsmith_clamp_i32(i32(-2147483648), 7588i, 1i))), ~23738i), func_4(6914i).a.d, _wgslsmith_mod_i32(_wgslsmith_sub_i32(func_4(_wgslsmith_dot_vec2_i32(vec2<i32>(-1i, -69613i), vec2<i32>(52682i, 2160i))).a.c, _wgslsmith_dot_vec2_i32(vec2<i32>(18044i, -24764i) >> (arg_0.a.xz % vec2<u32>(32u)), vec2<i32>(-1i, 8287i))), countOneBits(-_wgslsmith_sub_i32(-25646i, -21709i))));
                global1 = array<Struct_1, 10>();
                global0 = array<f32, 22>();
                let var_1 = func_4(_wgslsmith_mult_i32(-var_0.a.a, var_0.b)).a.a;
            }
            if (_wgslsmith_f_op_f32(abs(-551f)) > _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-193f))) * _wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(12623u, 22u)] + _wgslsmith_f_op_f32(-arg_1.x)))) {
                global1 = array<Struct_1, 10>();
                let var_0 = _wgslsmith_f_op_f32(round(-670f));
            }
        }
    }
    if (true) {
        if (func_4(_wgslsmith_div_i32(1i, -2120i)).a.d.x) {
            var var_0 = Struct_2(1i);
            let var_1 = vec2<u32>(~u_input.d, u_input.c);
            global1 = array<Struct_1, 10>();
        }
        var var_0 = u_input.a <= countOneBits(~(~(~0u)));
    }
    return ~vec4<u32>(23767u, _wgslsmith_sub_u32(abs(reverseBits(arg_0.a.x)), u_input.d), arg_0.a.x, ~87488u);
}

fn func_9(arg_0: Struct_1, arg_1: bool, arg_2: bool, arg_3: Struct_2) -> bool {
    if (arg_2) {
        if (true & func_6(vec2<u32>(~1u, _wgslsmith_dot_vec2_u32(~arg_0.a.yy, arg_0.a.wy))).x) {
            let var_0 = arg_2;
            let var_1 = arg_3;
            global1 = array<Struct_1, 10>();
        }
        let var_0 = func_4(arg_3.a).a.d;
        loop {
            if (LOOP_COUNTERS[25u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
        }
        switch (_wgslsmith_mult_i32(1i, -(~(-4854i)))) {
            default: {
                var var_1 = _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(abs(vec3<f32>(_wgslsmith_f_op_f32(abs(arg_0.b.x)), _wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(u_input.d, 22u)] + -160f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_0.b.x + -2461f))))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(select(arg_0.b.x, global0[_wgslsmith_index_u32(3301u, 22u)], false)), arg_0.b.x, arg_0.b.x), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(-958f, arg_0.b.x, 1000f)))))));
                var var_2 = vec3<i32>(_wgslsmith_dot_vec3_i32(-_wgslsmith_add_vec3_i32(_wgslsmith_sub_vec3_i32(vec3<i32>(0i, i32(-2147483648), arg_3.a), vec3<i32>(1i, -5171i, i32(-2147483648))), countOneBits(vec3<i32>(arg_3.a, arg_3.a, arg_3.a))), -(~abs(vec3<i32>(arg_3.a, i32(-2147483648), 39040i)))), 1i, arg_3.a);
            }
        }
    }
    for (var var_0 = -33769i; var_0 < 8995i; ) {
        if (LOOP_COUNTERS[26u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
        break;
    }
    var var_0 = arg_0.a.yxx;
    var_0 = arg_0.a.yxw;
    if (true) {
        var var_1 = Struct_3(Struct_2(-8387i), arg_3.a, arg_3.a, !func_6(vec2<u32>(4294967295u, 1u)), _wgslsmith_dot_vec4_i32(~_wgslsmith_div_vec4_i32(countOneBits(vec4<i32>(arg_3.a, arg_3.a, arg_3.a, arg_3.a)), select(vec4<i32>(-14681i, i32(-2147483648), -26674i, arg_3.a), vec4<i32>(30458i, 21965i, arg_3.a, 13759i), vec4<bool>(false, false, arg_2, false))), _wgslsmith_mod_vec4_i32(vec4<i32>(-1i, arg_3.a, _wgslsmith_add_i32(21731i, 12497i), arg_3.a), ~(-vec4<i32>(arg_3.a, arg_3.a, arg_3.a, arg_3.a)))));
        switch (-arg_3.a) {
            case -1i: {
                global1 = array<Struct_1, 10>();
                let var_2 = arg_3.a;
                var_1 = Struct_3(Struct_2(_wgslsmith_clamp_i32(~_wgslsmith_dot_vec4_i32(vec4<i32>(-1i, 1i, i32(-2147483648), 39163i), vec4<i32>(2147483647i, var_1.b, var_2, var_1.e)), ~var_2, ~(i32(-1i) * -44395i))), arg_3.a, arg_3.a, var_1.d, _wgslsmith_clamp_i32(_wgslsmith_div_i32(33705i, func_3(~var_0.zz, var_2)), var_2, 1i | max(arg_3.a, -1i)));
            }
            default: {
            }
        }
    }
    return all(func_4(_wgslsmith_mult_i32(_wgslsmith_sub_i32(arg_3.a, arg_3.a), countOneBits(-11551i))).a.d);
}

fn func_1(arg_0: vec3<u32>) -> i32 {
    global1 = array<Struct_1, 10>();
    let var_0 = func_9(Struct_1(func_2(global1[_wgslsmith_index_u32(abs(1u), 10u)], vec4<f32>(_wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(3586u, 22u)]), _wgslsmith_f_op_f32(max(global0[_wgslsmith_index_u32(u_input.c, 22u)], 741f)), _wgslsmith_f_op_f32(f32(-1f) * -397f), 926f), !select(vec3<bool>(true, false, true), vec3<bool>(true, true, false), vec3<bool>(true, true, true))), vec2<f32>(_wgslsmith_f_op_f32(175f + func_5(vec2<i32>(-2020i, -69234i), Struct_2(1i), vec4<bool>(false, true, false, true), false).b.x), global0[_wgslsmith_index_u32(~_wgslsmith_clamp_u32(6749u, arg_0.x, 5734u), 22u)])), true, true, Struct_2(7295i));
    global0 = array<f32, 22>();
    var var_1 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(exp2(vec3<f32>(997f, -1605f, global0[_wgslsmith_index_u32(~u_input.c, 22u)]))), _wgslsmith_f_op_vec3_f32(vec3<f32>(global0[_wgslsmith_index_u32(1u, 22u)], func_5(vec2<i32>(48889i, 2147483647i), Struct_2(-1i), vec4<bool>(var_0, false, false, true), true).b.x, _wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(arg_0.x, 22u)])) * vec3<f32>(1889f, -305f, global0[_wgslsmith_index_u32(u_input.c ^ 0u, 22u)])))) - _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(-vec3<f32>(1567f, -575f, global0[_wgslsmith_index_u32(arg_0.x, 22u)])), _wgslsmith_f_op_vec3_f32(-vec3<f32>(-1324f, -755f, global0[_wgslsmith_index_u32(u_input.a, 22u)])))), vec3<f32>(_wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(u_input.d, 22u)]), func_4(-32702i).b.x, func_4(-1i).b.x), !vec3<bool>(var_0, var_0, true))) - _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(vec3<f32>(-161f, 1000f, global0[_wgslsmith_index_u32(10360u, 22u)]) * vec3<f32>(global0[_wgslsmith_index_u32(4294967295u, 22u)], -866f, -1000f)))))));
    var var_2 = _wgslsmith_sub_vec2_i32(~vec2<i32>(countOneBits(1i), -40536i), _wgslsmith_div_vec2_i32(~vec2<i32>(1i, 1i) >> (vec2<u32>(firstTrailingBit(u_input.a), u_input.c) % vec2<u32>(32u)), vec2<i32>(-6981i, _wgslsmith_mod_i32(1i, abs(-16386i)))));
    return ~var_2.x ^ -1i;
}

@compute
@workgroup_size(1)
fn main() {
    global0 = array<f32, 22>();
    var var_0 = Struct_3(Struct_2(_wgslsmith_mult_i32(i32(-1i) * -36054i, min(i32(-2147483648), func_1(vec3<u32>(42362u, 80253u, 4294967295u))))), 8280i, -(i32(-1i) * -29247i), vec3<bool>(func_4(_wgslsmith_dot_vec2_i32(-vec2<i32>(-19096i, 21983i), vec2<i32>(1i, 1i))).a.d.x, 427f == global0[_wgslsmith_index_u32(0u, 22u)], (u_input.d << (~u_input.c % 32u)) > reverseBits(~u_input.a)), reverseBits(~_wgslsmith_add_i32(2147483647i, i32(-2147483648))) << (u_input.d % 32u));
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(~u_input.a, 22u)]), _wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(741u, 22u)]), vec4<u32>(u_input.a, max(u_input.a, u_input.d >> (u_input.c % 32u)), ~_wgslsmith_dot_vec2_u32(~vec2<u32>(24859u, u_input.c), firstLeadingBit(vec2<u32>(9603u, 0u))), 42454u));
}

`;