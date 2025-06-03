export const input = [72,143,170,198,135,233,241,146,14,152,30,101,150,204,155,203,245,133,197,121,149,196,32,242,142,170,11,10,78,79,208,74,66,225,141,43,4,18,196,165,121,0,106,160,132,65,139,147,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [72,143,170,198,135,233,241,146,14,152,30,101,150,204,155,203,245,133,197,121,149,196,32,242,142,170,11,10,78,79,208,74,66,225,141,43,4,18,196,165,121,0,106,160,132,65,139,147,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[72,143,170,198,135,233,241,146,14,152,30,101,150,204,155,203,245,133,197,121,149,196,32,242,142,170,11,10,78,79,208,74,66,225,141,43,4,18,196,165,121,0,106,160,132,65,139,147]}
// Seed: 8604434865306569107

struct Struct_1 {
    a: i32,
    b: bool,
    c: i32,
}

struct Struct_2 {
    a: Struct_1,
    b: f32,
}

struct UniformBuffer {
    a: vec4<i32>,
    b: i32,
    c: i32,
    d: vec2<i32>,
    e: vec3<u32>,
}

struct StorageBuffer {
    a: vec3<i32>,
    b: i32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: i32;

var<private> global1: array<Struct_1, 5>;

var<private> LOOP_COUNTERS: array<u32, 24>;

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn func_1() -> u32 {
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        continue;
    }
    for (var var_0 = 12936i; ; var_0 += 1i) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
    }
    global1 = array<Struct_1, 5>();
    for (var var_0 = 21609i; true; var_0 += 1i) {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        if (reverseBits(-43365i) > ~_wgslsmith_mult_i32(u_input.d.x, _wgslsmith_add_i32(47410i, -5889i) ^ (1i >> (u_input.e.x % 32u)))) {
        }
    }
    global0 = u_input.b << (_wgslsmith_div_u32(1u, 4294967295u) % 32u);
    return firstLeadingBit(_wgslsmith_mod_u32(_wgslsmith_mult_u32(u_input.e.x, 0u), 1u));
}

fn func_6(arg_0: Struct_1) -> u32 {
    if (i32(-2147483648) >= u_input.a.x) {
        switch (abs(~2147483647i)) {
            case -2377i: {
            }
            default: {
            }
        }
        let var_0 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(abs(vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -733f), _wgslsmith_f_op_f32(step(-1000f, 828f)), _wgslsmith_f_op_f32(-495f))))));
    }
    var var_0 = Struct_2(Struct_1(u_input.d.x, arg_0.b, u_input.c), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -956f)), 416f));
    global0 = var_0.a.a;
    for (var var_1 = -select(u_input.b, _wgslsmith_dot_vec4_i32(-vec4<i32>(u_input.d.x, 72046i, -40039i, var_0.a.c), abs(u_input.a)), var_0.a.b) & ~(i32(-1i) * -37135i); u_input.e.x <= ~(u_input.e.x & 81069u); var_1 += 1i) {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        var var_2 = !arg_0.b;
        continue;
    }
    loop {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        global1 = array<Struct_1, 5>();
        for (var var_1 = 59657i; var_1 > -53162i; ) {
            if (LOOP_COUNTERS[5u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
            var var_2 = vec2<f32>(var_0.b, var_0.b);
            continue;
        }
        for (var var_1 = 1i; true; ) {
            if (LOOP_COUNTERS[6u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
            return 0u;
        }
        let var_1 = !select(vec2<bool>(true, true), vec2<bool>(arg_0.b | false, abs(87884u) > u_input.e.x), select(vec2<bool>(any(vec4<bool>(true, true, var_0.a.b, arg_0.b)), !arg_0.b), !select(vec2<bool>(false, false), vec2<bool>(arg_0.b, arg_0.b), vec2<bool>(false, false)), arg_0.b));
    }
    return abs(0u);
}

fn func_7(arg_0: Struct_2, arg_1: vec2<f32>, arg_2: f32, arg_3: Struct_2) -> bool {
    var var_0 = _wgslsmith_mult_i32(_wgslsmith_dot_vec4_i32(abs(_wgslsmith_add_vec4_i32(vec4<i32>(16076i, i32(-2147483648), i32(-2147483648), arg_3.a.c), vec4<i32>(arg_0.a.c, 0i, arg_3.a.a, u_input.c))), u_input.a), -1i);
    let var_1 = _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_0.b - arg_3.b) - _wgslsmith_f_op_f32(sign(110f))))), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(abs(arg_2)), arg_1.x, -783f < arg_1.x))));
    if (true) {
        if (true) {
            var_0 = _wgslsmith_dot_vec2_i32(vec2<i32>(_wgslsmith_mod_i32(abs(~(i32(-2147483648))), select(abs(arg_3.a.a), ~u_input.a.x, any(vec4<bool>(arg_3.a.b, false, arg_3.a.b, arg_0.a.b)))), arg_0.a.c), vec2<i32>(max(u_input.c, _wgslsmith_mult_i32(-u_input.c, arg_0.a.c | 1i)), -(u_input.d.x & i32(-2147483648))));
            var var_2 = select(select(vec4<bool>(_wgslsmith_f_op_f32(abs(arg_3.b)) >= _wgslsmith_f_op_f32(arg_3.b + 800f), true, all(select(vec2<bool>(arg_0.a.b, true), vec2<bool>(arg_3.a.b, true), vec2<bool>(false, arg_3.a.b))), !(false | arg_0.a.b)), !vec4<bool>(any(vec2<bool>(arg_3.a.b, false)), true, select(arg_0.a.b, false, true), true), !vec4<bool>(arg_0.a.b, true, arg_0.a.b & true, false)), !(!vec4<bool>(all(vec2<bool>(arg_0.a.b, true)), true, -1054f != arg_1.x, false)), arg_0.a.b);
        }
        if (true) {
            var var_2 = _wgslsmith_f_op_f32(-arg_2);
            var var_3 = !select(select(select(!vec4<bool>(arg_3.a.b, false, arg_0.a.b, arg_3.a.b), vec4<bool>(true, arg_3.a.b, true, arg_3.a.b), !arg_3.a.b), vec4<bool>(true, arg_0.a.b & arg_3.a.b, -15525i == arg_0.a.a, arg_0.a.b), arg_3.a.b), !select(select(vec4<bool>(arg_3.a.b, false, true, true), vec4<bool>(true, arg_0.a.b, false, false), vec4<bool>(false, arg_3.a.b, arg_0.a.b, false)), vec4<bool>(false, arg_3.a.b, arg_3.a.b, arg_3.a.b), any(vec3<bool>(arg_0.a.b, true, true))), vec4<bool>(arg_3.a.b, all(!vec4<bool>(arg_3.a.b, true, arg_0.a.b, true)), arg_0.a.b, arg_3.a.b));
        }
        if (!arg_3.a.b) {
            let var_2 = ~(~(-_wgslsmith_clamp_i32(arg_3.a.a, 1i, u_input.b)));
        }
    }
    let var_2 = arg_3.a.b;
    let var_3 = u_input.e.x;
    return select(~u_input.e.x < _wgslsmith_mult_u32(_wgslsmith_sub_u32(firstLeadingBit(var_3), _wgslsmith_add_u32(17828u, 31158u)), u_input.e.x), select(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-arg_3.b))) >= _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(sign(arg_3.b)), arg_1.x)), true, _wgslsmith_f_op_f32(arg_0.b * 1011f) <= _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(arg_1.x)))), true);
}

fn func_5(arg_0: vec3<i32>, arg_1: vec4<i32>, arg_2: vec4<f32>) -> vec4<bool> {
    let var_0 = func_7(Struct_2(Struct_1(arg_0.x, all(vec2<bool>(true, true)), arg_0.x), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1616f + -213f))), arg_2.yx, _wgslsmith_f_op_f32(-arg_2.x), Struct_2(global1[_wgslsmith_index_u32(func_6(global1[_wgslsmith_index_u32(countOneBits(u_input.e.x), 5u)]), 5u)], _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1279f) - arg_2.x)));
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        if (true) {
            var var_1 = ~min(u_input.e.zz, ~((u_input.e.yy ^ vec2<u32>(u_input.e.x, u_input.e.x)) >> (vec2<u32>(0u, 0u) % vec2<u32>(32u))));
            var var_2 = Struct_2(Struct_1(u_input.b, any(select(!vec3<bool>(var_0, var_0, var_0), select(vec3<bool>(true, var_0, false), vec3<bool>(var_0, false, false), var_0), select(vec3<bool>(var_0, false, false), vec3<bool>(true, var_0, var_0), var_0))), arg_0.x), _wgslsmith_f_op_f32(122f + arg_2.x));
            break;
        }
        var var_1 = _wgslsmith_add_vec3_u32(vec3<u32>(u_input.e.x, ~4294967295u, u_input.e.x), _wgslsmith_div_vec3_u32(_wgslsmith_mod_vec3_u32(~_wgslsmith_mult_vec3_u32(vec3<u32>(2122u, 1u, u_input.e.x), u_input.e), vec3<u32>(u_input.e.x, ~u_input.e.x, ~u_input.e.x)), abs(vec3<u32>(~84699u, ~u_input.e.x, max(u_input.e.x, u_input.e.x)))));
        loop {
            if (LOOP_COUNTERS[8u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
            global0 = max(~reverseBits(arg_1.x | u_input.d.x), _wgslsmith_sub_i32(_wgslsmith_div_i32(-9429i, ~firstLeadingBit(arg_0.x)), ~_wgslsmith_sub_i32(-9240i & arg_0.x, i32(-1i) * -20116i)));
            let var_2 = true;
            global0 = abs(6248i);
            let var_3 = ~(~u_input.e & ~abs(~vec3<u32>(38568u, 55850u, u_input.e.x)));
        }
    }
    return select(vec4<bool>(any(!(!vec3<bool>(true, var_0, var_0))), true, false, var_0), select(select(!(!vec4<bool>(var_0, var_0, var_0, var_0)), !(!vec4<bool>(true, false, var_0, false)), ~arg_1.x <= (i32(-1i) * -1i)), vec4<bool>(any(!vec2<bool>(var_0, false)), !(var_0 & var_0), var_0, true), vec4<bool>(!var_0, _wgslsmith_clamp_i32(-10726i, 2147483647i, 564i) < -arg_1.x, false, var_0 & any(vec4<bool>(false, false, true, var_0)))), !(!select(vec4<bool>(true, var_0, var_0, var_0), !vec4<bool>(var_0, var_0, false, var_0), select(vec4<bool>(true, var_0, var_0, var_0), vec4<bool>(var_0, false, var_0, true), vec4<bool>(false, false, var_0, true)))));
}

fn func_4(arg_0: i32) -> vec2<bool> {
    var var_0 = func_5(~u_input.a.zzz >> (vec3<u32>(min(~55426u, 1u), ~10940u, u_input.e.x) % vec3<u32>(32u)), (_wgslsmith_div_vec4_i32(vec4<i32>(u_input.b, -78819i, u_input.b, -54595i), vec4<i32>(60007i, arg_0, arg_0, -27675i)) << (~(~vec4<u32>(5117u, 1u, u_input.e.x, u_input.e.x)) % vec4<u32>(32u))) | vec4<i32>(32634i, _wgslsmith_add_i32(arg_0, ~(-24580i)), abs(u_input.a.x), arg_0), vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-941f) + 1f) - _wgslsmith_f_op_f32(-1000f)), 1f, _wgslsmith_f_op_f32(845f - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1162f))), _wgslsmith_f_op_f32(f32(-1f) * -812f)));
    if (var_0.x) {
        switch (~u_input.b) {
            default: {
            }
        }
        return vec2<bool>(false, any(select(vec2<bool>(var_0.x, func_7(Struct_2(Struct_1(u_input.c, var_0.x, 1i), -653f), vec2<f32>(385f, -1997f), -857f, Struct_2(Struct_1(13256i, var_0.x, -12183i), 1000f))), vec2<bool>(select(true, var_0.x, var_0.x), func_7(Struct_2(global1[_wgslsmith_index_u32(0u, 5u)], -417f), vec2<f32>(230f, -927f), -202f, Struct_2(Struct_1(-62972i, var_0.x, 44427i), -670f))), false)));
    }
    let var_1 = global1[_wgslsmith_index_u32(u_input.e.x, 5u)];
    switch (1i) {
        case -58110i: {
            if (true) {
            }
            if (_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -571f) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(f32(-1f) * -513f))))) < _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1096f)))) + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(552f, 1763f)) + _wgslsmith_f_op_f32(step(-1005f, _wgslsmith_f_op_f32(ceil(-1629f))))))) {
                global1 = array<Struct_1, 5>();
                var var_2 = vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-294f - 810f)) + _wgslsmith_f_op_f32(step(248f, -3035f))) - -676f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-992f))) + _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(f32(-1f) * -539f), 722f))))), -680f);
            }
            var var_2 = true || var_1.b;
        }
        case -43480i: {
            loop {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                var_0 = select(select(vec4<bool>(!var_0.x & !var_1.b, var_1.b, (-1i << (u_input.e.x % 32u)) > select(-43794i, 1i, var_0.x), !var_0.x), !(!func_5(u_input.a.xwz, u_input.a, vec4<f32>(-567f, -343f, -759f, 1000f))), vec4<bool>((var_1.b == var_1.b) & false, true, true, !(!var_1.b))), vec4<bool>(any(func_5(u_input.a.zwx, u_input.a, _wgslsmith_f_op_vec4_f32(select(vec4<f32>(1499f, 1839f, -452f, 585f), vec4<f32>(-484f, 154f, 588f, 596f), vec4<bool>(var_1.b, true, false, true)))).yyw), !var_1.b, !any(vec4<bool>(var_1.b, var_1.b, false, var_1.b)), true), !(!(!(!vec4<bool>(false, false, false, var_1.b)))));
            }
            var var_2 = var_1.c >> (u_input.e.x % 32u);
        }
        case 23700i: {
            global1 = array<Struct_1, 5>();
            switch (firstTrailingBit(~(-_wgslsmith_mod_i32(abs(35253i), u_input.b)))) {
                case i32(-2147483648): {
                    var var_2 = Struct_2(Struct_1(33259i, true, reverseBits(2147483647i)), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(exp2(1f)), -1046f, !var_1.b != !var_1.b)), -168f)));
                }
                case -44428i: {
                    var var_2 = _wgslsmith_f_op_vec2_f32(exp2(_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(-897f, 938f) - vec2<f32>(-1262f, -1359f))), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(1211f, 607f) - vec2<f32>(-429f, -1468f))), var_0.x)), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(-1040f, 718f))) - _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-904f, -1014f)) * _wgslsmith_f_op_vec2_f32(vec2<f32>(1258f, -1429f) + vec2<f32>(-310f, 737f)))))));
                    let var_3 = i32(-1i) * -1i;
                    let var_4 = all(select(!vec4<bool>(true, var_1.b, !var_0.x, all(vec4<bool>(false, true, var_0.x, false))), !vec4<bool>(func_7(Struct_2(global1[_wgslsmith_index_u32(u_input.e.x, 5u)], var_2.x), vec2<f32>(var_2.x, 1333f), -1334f, Struct_2(Struct_1(var_3, var_1.b, arg_0), 263f)), false, true, any(vec3<bool>(true, false, var_1.b))), true));
                }
                default: {
                    let var_2 = Struct_1(1i << (~min(1u, ~u_input.e.x) % 32u), false, firstTrailingBit(i32(-2147483648)));
                    let var_3 = _wgslsmith_dot_vec4_u32(vec4<u32>(_wgslsmith_clamp_u32(u_input.e.x, ~(~u_input.e.x), max(u_input.e.x ^ u_input.e.x, min(u_input.e.x, u_input.e.x))), func_6(var_2), (~u_input.e.x << (1u % 32u)) | _wgslsmith_dot_vec2_u32(~vec2<u32>(u_input.e.x, 31546u), ~u_input.e.xy), u_input.e.x), ~firstLeadingBit(~_wgslsmith_div_vec4_u32(vec4<u32>(u_input.e.x, u_input.e.x, 1u, 1u), vec4<u32>(4294967295u, 1u, 64082u, u_input.e.x))));
                }
            }
        }
        case -8600i: {
            switch (_wgslsmith_dot_vec3_i32(vec3<i32>(0i, i32(-1i) * -47016i, _wgslsmith_dot_vec3_i32(u_input.a.zww, vec3<i32>(u_input.c, arg_0, i32(-2147483648))) | _wgslsmith_dot_vec2_i32(vec2<i32>(4910i, 2147483647i), vec2<i32>(var_1.c, arg_0))) << (u_input.e % vec3<u32>(32u)), ~u_input.a.yzz)) {
                case -1i: {
                    let var_2 = var_0.ywx;
                    var_0 = select(vec4<bool>(false, all(vec4<bool>(var_1.b && false, 16324u > u_input.e.x, !var_0.x, false)), !func_5(vec3<i32>(23672i, -46152i, -8864i), u_input.a, _wgslsmith_f_op_vec4_f32(vec4<f32>(-682f, -208f, 228f, -611f) + vec4<f32>(114f, -118f, -2582f, 2446f))).x, true), func_5(-_wgslsmith_sub_vec3_i32(u_input.a.xzy, u_input.a.wyw), _wgslsmith_div_vec4_i32(~_wgslsmith_add_vec4_i32(u_input.a, u_input.a), vec4<i32>(-1i, _wgslsmith_add_i32(var_1.a, u_input.d.x), arg_0, abs(var_1.c))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(-1938f, 1601f, 1108f, 212f))) * _wgslsmith_f_op_vec4_f32(-vec4<f32>(-118f, 718f, -2157f, 549f)))), !func_5(firstLeadingBit(u_input.a.yxx) << (~u_input.e % vec3<u32>(32u)), select(select(u_input.a, vec4<i32>(-1i, var_1.c, -8936i, var_1.a), true), _wgslsmith_sub_vec4_i32(vec4<i32>(var_1.c, u_input.b, arg_0, arg_0), vec4<i32>(1i, u_input.c, i32(-2147483648), -1i)), vec4<bool>(var_1.b, false, true, var_1.b)), vec4<f32>(_wgslsmith_f_op_f32(-755f), _wgslsmith_f_op_f32(1171f * 299f), _wgslsmith_f_op_f32(-1000f + 457f), _wgslsmith_f_op_f32(ceil(823f)))));
                    var var_3 = Struct_2(global1[_wgslsmith_index_u32(u_input.e.x, 5u)], _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-172f), _wgslsmith_f_op_f32(-1265f))))))));
                    let var_4 = var_1.c;
                    let var_5 = Struct_2(Struct_1(u_input.b >> (~(~u_input.e.x) % 32u), false, _wgslsmith_sub_i32(var_3.a.a, arg_0 << (50823u % 32u)) ^ max(2147483647i, arg_0)), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(-1059f, _wgslsmith_f_op_f32(-1000f)))))));
                }
                case -4742i: {
                    let var_2 = true;
                }
                case -22310i: {
                    let var_2 = _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(max(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(-652f, -1470f) - vec2<f32>(-1758f, 1429f))) - _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(-149f, 194f))))), _wgslsmith_f_op_vec2_f32(-vec2<f32>(819f, _wgslsmith_f_op_f32(-1000f + 1751f))))) - _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(max(_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(1000f, 2437f) * vec2<f32>(-1748f, -391f)), _wgslsmith_f_op_vec2_f32(min(vec2<f32>(-2312f, -654f), vec2<f32>(-541f, 1000f)))), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-1207f, -1169f)) * _wgslsmith_f_op_vec2_f32(-vec2<f32>(1671f, -2784f))))), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(sign(_wgslsmith_f_op_vec2_f32(vec2<f32>(-1564f, 832f) * vec2<f32>(1314f, 1000f)))))));
                    var var_3 = _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(sign(1f))));
                    var_0 = vec4<bool>(false, false, var_1.b, false);
                    var var_4 = u_input.a;
                    let var_5 = Struct_2(Struct_1(u_input.a.x, true, _wgslsmith_div_i32(0i, var_4.x) & abs(var_1.a ^ 2147483647i)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -877f) - _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(-829f, -1000f))), 1583f)));
                }
                case 0i: {
                    var_0 = select(!select(vec4<bool>(u_input.e.x >= 1u, false, true, var_1.b), select(func_5(vec3<i32>(84692i, arg_0, arg_0), vec4<i32>(arg_0, 2147483647i, var_1.a, var_1.c), vec4<f32>(-1316f, 844f, -832f, -1872f)), vec4<bool>(false, var_1.b, true, true), !vec4<bool>(var_1.b, var_0.x, var_0.x, false)), all(var_0.zzy) && (u_input.e.x > 0u)), vec4<bool>(var_1.b, all(vec4<bool>(var_0.x, -1i <= arg_0, any(vec4<bool>(true, true, false, var_1.b)), true)), true, !var_1.b), _wgslsmith_dot_vec2_u32(u_input.e.yz, _wgslsmith_div_vec2_u32(abs(u_input.e.zz), vec2<u32>(26814u, u_input.e.x))) > _wgslsmith_sub_u32(_wgslsmith_add_u32(0u, _wgslsmith_dot_vec4_u32(vec4<u32>(1u, u_input.e.x, u_input.e.x, 1u), vec4<u32>(u_input.e.x, u_input.e.x, 1u, 0u))), ~68194u));
                    var var_2 = Struct_1(firstTrailingBit(-1i), !(var_0.x | (var_1.b && true)), reverseBits(u_input.a.x));
                    let var_3 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(ceil(759f)))), _wgslsmith_div_f32(245f, _wgslsmith_div_f32(-413f, -1095f))))));
                }
                default: {
                    let var_2 = Struct_2(Struct_1(select(-1734i, _wgslsmith_mult_i32(var_1.c, -17440i), false), var_1.b, ~(~1i)), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(select(1f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -1711f) * 1f), all(vec2<bool>(false, true)))))));
                    let var_3 = _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-472f + 827f))), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(round(var_2.b)), _wgslsmith_f_op_f32(abs(-261f)))), _wgslsmith_f_op_f32(abs(2765f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1411f) - _wgslsmith_f_op_f32(-var_2.b)))), _wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(-vec4<f32>(var_2.b, var_2.b, 325f, var_2.b)), vec4<f32>(-1652f, var_2.b, 407f, -297f))))))));
                    global0 = 0i;
                    return var_0.xx;
                }
            }
            let var_2 = vec3<i32>(min(var_1.a, -var_1.a), abs(-1i), max(abs(countOneBits(abs(-1i))), 1i));
            switch (~countOneBits(_wgslsmith_mult_i32(countOneBits(1i), 1i << (u_input.e.x % 32u)))) {
                case i32(-2147483648): {
                }
                default: {
                    let var_3 = var_1.b;
                    var var_4 = -295f;
                }
            }
            global0 = -16951i;
        }
        default: {
            var var_2 = 32474i;
            loop {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                global1 = array<Struct_1, 5>();
                break;
            }
            let var_3 = var_0.zx;
            if (any(vec2<bool>((true || select(false, var_3.x, true)) || !(!var_1.b), true))) {
                var var_4 = (_wgslsmith_mult_u32(~8716u, u_input.e.x) | u_input.e.x) & 56988u;
                var var_5 = Struct_2(global1[_wgslsmith_index_u32(u_input.e.x, 5u)], _wgslsmith_f_op_f32(-344f));
            }
            let var_4 = Struct_2(global1[_wgslsmith_index_u32(_wgslsmith_mod_u32(_wgslsmith_add_u32(1u, firstTrailingBit(~u_input.e.x)), 9377u | u_input.e.x), 5u)], _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(889f + _wgslsmith_f_op_f32(-_wgslsmith_div_f32(873f, 184f)))));
        }
    }
    for (var var_2 = 52214i; var_2 <= 4192i; var_2 -= 1i) {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        var var_3 = reverseBits(firstLeadingBit(u_input.a.wwz << (~abs(u_input.e) % vec3<u32>(32u))));
    }
    return !select(var_0.zx, !var_0.xx, !vec2<bool>(var_1.b && var_1.b, true));
}

fn func_3(arg_0: i32) -> u32 {
    let var_0 = select(func_4(~(arg_0 | _wgslsmith_mult_i32(arg_0, -27232i))), vec2<bool>(true, true), true);
    let var_1 = func_4(countOneBits(select(_wgslsmith_sub_i32(-5072i, -9258i), _wgslsmith_mult_i32(-17926i, arg_0), var_0.x)) | 0i);
    switch (arg_0) {
        case 24929i: {
            loop {
                if (LOOP_COUNTERS[12u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
                continue;
            }
            let var_2 = global1[_wgslsmith_index_u32(u_input.e.x, 5u)];
        }
        default: {
            switch (arg_0) {
                case -1i: {
                    var var_2 = ~(~(_wgslsmith_clamp_u32(u_input.e.x, firstLeadingBit(u_input.e.x), u_input.e.x) << (~(~u_input.e.x) % 32u)));
                    var var_3 = select(~_wgslsmith_div_vec4_u32(~min(vec4<u32>(4294967295u, u_input.e.x, 57195u, 86391u), vec4<u32>(35527u, u_input.e.x, u_input.e.x, 1u)), select(select(vec4<u32>(u_input.e.x, u_input.e.x, u_input.e.x, u_input.e.x), vec4<u32>(1u, 4294967295u, u_input.e.x, 1812u), var_0.x), abs(vec4<u32>(u_input.e.x, 59316u, 75843u, 36770u)), !var_0.x)), vec4<u32>(4322u, u_input.e.x, ~reverseBits(~23420u), abs(~(~55364u))), !var_0.x);
                    var var_4 = Struct_1(firstLeadingBit(_wgslsmith_sub_i32(~abs(u_input.d.x), i32(-2147483648))), any(!vec4<bool>(true, var_1.x, var_1.x, var_1.x)) | true, -40318i);
                }
                case 10493i: {
                    var var_2 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-423f, 562f, -422f)) - _wgslsmith_div_vec3_f32(vec3<f32>(-474f, 2089f, 251f), vec3<f32>(1000f, -1823f, 2012f))))) + vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-1244f), _wgslsmith_f_op_f32(-164f))) * -268f), 1f, _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-2170f - -1367f) + _wgslsmith_f_op_f32(abs(-932f))), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(trunc(-580f))))))));
                    global1 = array<Struct_1, 5>();
                    let var_3 = global1[_wgslsmith_index_u32(~1u, 5u)];
                    var var_4 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(select(vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(var_2.x))), var_2.x), _wgslsmith_f_op_vec2_f32(ceil(var_2.zx)), func_5(countOneBits(u_input.a.wyx), vec4<i32>(var_3.c, 1i, i32(-2147483648), u_input.b), _wgslsmith_f_op_vec4_f32(select(vec4<f32>(var_2.x, 628f, var_2.x, var_2.x), vec4<f32>(var_2.x, var_2.x, var_2.x, var_2.x), vec4<bool>(true, var_0.x, var_1.x, var_0.x)))).x | func_5(vec3<i32>(24661i, u_input.a.x, var_3.a), firstLeadingBit(u_input.a), vec4<f32>(-300f, var_2.x, var_2.x, -473f)).x)));
                }
                case 1i: {
                    var var_2 = vec4<u32>(u_input.e.x, 19550u, _wgslsmith_clamp_u32(select(abs(~28129u), ~min(0u, 30493u), !any(vec3<bool>(var_1.x, var_1.x, true))), u_input.e.x, 26042u), u_input.e.x);
                    var var_3 = Struct_2(Struct_1(u_input.c, select((var_0.x && var_0.x) && true, var_1.x, true), arg_0), _wgslsmith_f_op_f32(f32(-1f) * -1739f));
                    global0 = -_wgslsmith_mod_i32(_wgslsmith_div_i32(var_3.a.c, -(1i << (var_2.x % 32u))), arg_0);
                }
                case 85163i: {
                    let var_2 = var_1.x;
                    let var_3 = Struct_2(Struct_1(2147483647i, ~(u_input.e.x & 1u) <= countOneBits(u_input.e.x), -max(~u_input.d.x, _wgslsmith_mod_i32(u_input.d.x, u_input.b))), 1000f);
                    var var_4 = _wgslsmith_f_op_f32(var_3.b + var_3.b);
                    global1 = array<Struct_1, 5>();
                }
                default: {
                    let var_2 = reverseBits(~min(~vec4<u32>(u_input.e.x, u_input.e.x, 59692u, 0u), vec4<u32>(~u_input.e.x, ~1u, 4294967295u ^ u_input.e.x, ~u_input.e.x)));
                    let var_3 = 73581u;
                    global0 = -1i;
                }
            }
            switch (u_input.d.x) {
                case 1i: {
                }
                case i32(-2147483648): {
                    var var_2 = !vec3<bool>(all(select(func_5(vec3<i32>(arg_0, -1310i, -24345i), vec4<i32>(u_input.a.x, u_input.d.x, arg_0, 2147483647i), vec4<f32>(-574f, 624f, 258f, -194f)), select(vec4<bool>(false, var_0.x, var_1.x, var_1.x), vec4<bool>(var_0.x, true, true, var_1.x), false), any(vec4<bool>(true, var_1.x, false, var_1.x)))), var_1.x, max(0i, select(1i, u_input.a.x, false)) >= u_input.b);
                    global0 = -1i;
                    let var_3 = u_input.e.x;
                }
                default: {
                    var var_2 = reverseBits(firstTrailingBit(2147483647i | u_input.d.x));
                    var var_3 = false;
                    global0 = i32(-2147483648);
                    var var_4 = true;
                    var var_5 = Struct_2(Struct_1(i32(-2147483648), var_0.x && !(var_0.x | var_0.x), min(1i, 1i)), 956f);
                }
            }
        }
    }
    var var_2 = Struct_2(global1[_wgslsmith_index_u32(~_wgslsmith_dot_vec3_u32(u_input.e, select(vec3<u32>(u_input.e.x, 4294967295u, u_input.e.x), u_input.e, all(var_0))), 5u)], _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(ceil(1002f)))))));
    var var_3 = vec2<f32>(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(f32(-1f) * -701f))), -760f);
    return u_input.e.x;
}

fn func_8(arg_0: vec3<f32>, arg_1: u32, arg_2: u32, arg_3: f32) -> vec4<u32> {
    global1 = array<Struct_1, 5>();
    loop {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        for (var var_0 = 0i; ; global0 = -_wgslsmith_sub_i32(u_input.d.x, min(4658i, 1i ^ abs(u_input.a.x)))) {
            if (LOOP_COUNTERS[14u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
            global0 = ~(~(i32(-1i) * -2542i));
            break;
        }
        continue;
    }
    let var_0 = Struct_1(u_input.b, all(vec4<bool>(true, true, true, true)), 37142i);
    global1 = array<Struct_1, 5>();
    switch (i32(-1i) * -(~select(-1i, _wgslsmith_div_i32(u_input.a.x, 20825i), !var_0.b))) {
        default: {
            let var_1 = Struct_2(var_0, arg_0.x);
            global1 = array<Struct_1, 5>();
            let var_2 = u_input.a.yyy;
            for (var var_3 = 0i; var_3 == 39604i; ) {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
                let var_4 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(f32(-1f) * -417f))) - _wgslsmith_div_f32(1000f, 228f))));
                break;
            }
        }
    }
    return vec4<u32>(~arg_1, _wgslsmith_sub_u32(arg_1, ~0u), ~arg_1 << (u_input.e.x % 32u), 107345u);
}

fn func_2(arg_0: bool, arg_1: bool) -> vec4<bool> {
    global1 = array<Struct_1, 5>();
    for (var var_0 = -12252i; ; var_0 += 1i) {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        let var_1 = reverseBits(func_8(vec3<f32>(-800f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(1027f)) - _wgslsmith_f_op_f32(286f * 310f)), 1080f), ~func_3(max(2147483647i, 1i)), firstLeadingBit(_wgslsmith_sub_u32(countOneBits(82194u), 0u)), _wgslsmith_f_op_f32(max(-686f, _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(abs(-1000f)), _wgslsmith_f_op_f32(-1887f)))))));
    }
    loop {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
        var var_0 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(round(vec4<f32>(1000f, -712f, -1350f, 1000f))), vec4<f32>(384f, 1000f, 673f, -649f))) * _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(step(vec4<f32>(-953f, 554f, -476f, 2904f), vec4<f32>(-584f, -486f, 1211f, 1000f))) - _wgslsmith_f_op_vec4_f32(-vec4<f32>(-227f, -530f, -371f, 782f))))));
    }
    global1 = array<Struct_1, 5>();
    let var_0 = 7729u;
    return !vec4<bool>(false, all(vec4<bool>(true, true, false | arg_0, false)), !func_4(-u_input.b).x, !any(!vec2<bool>(false, arg_1)));
}

@compute
@workgroup_size(1)
fn main() {
    loop {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        for (var var_0 = -11484i; true; var_0 -= 1i) {
            if (LOOP_COUNTERS[19u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
            var var_1 = 198f;
            continue;
        }
        break;
    }
    loop {
        if (LOOP_COUNTERS[20u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
        continue;
    }
    switch (~(-4782i) >> (firstLeadingBit(~_wgslsmith_add_u32(func_1(), _wgslsmith_sub_u32(u_input.e.x, 37804u))) % 32u)) {
        case 2147483647i: {
            var var_0 = all(!(!(!func_2(true, false))));
            switch (0i) {
                case 1i: {
                    let var_1 = select(~u_input.a.x, _wgslsmith_sub_i32(u_input.c, u_input.d.x), false);
                    var var_2 = i32(-2147483648);
                    let var_3 = global1[_wgslsmith_index_u32(u_input.e.x, 5u)];
                }
                default: {
                    let var_1 = global1[_wgslsmith_index_u32(func_1() >> (_wgslsmith_dot_vec2_u32(vec2<u32>(~1u >> (func_6(global1[_wgslsmith_index_u32(u_input.e.x, 5u)]) % 32u), u_input.e.x), u_input.e.yx) % 32u), 5u)];
                    let var_2 = Struct_2(Struct_1(var_1.a, false, 1i), -726f);
                }
            }
            let var_1 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(1f, 1f, 1f, 1f) + _wgslsmith_div_vec4_f32(vec4<f32>(-1135f, -577f, 1087f, 139f), vec4<f32>(214f, -948f, -807f, -505f)))) * _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(abs(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-334f, -1408f, -1197f, -319f)))) * _wgslsmith_f_op_vec4_f32(-vec4<f32>(-681f, 814f, -163f, -632f)))) * _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(sign(_wgslsmith_div_vec4_f32(vec4<f32>(142f, 505f, -760f, -138f), _wgslsmith_div_vec4_f32(vec4<f32>(-248f, 1000f, 889f, -2669f), vec4<f32>(429f, 1487f, 386f, -540f))))) * vec4<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-268f * 1151f))), -819f, _wgslsmith_f_op_f32(-351f), _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-1850f))))));
        }
        default: {
            global0 = abs(u_input.c);
        }
    }
    global0 = _wgslsmith_dot_vec2_i32(-(~u_input.d), u_input.d);
    var var_0 = Struct_1(-((_wgslsmith_mult_i32(u_input.a.x, u_input.b) << (u_input.e.x % 32u)) >> ((min(26523u, u_input.e.x) << (32859u % 32u)) % 32u)), true, _wgslsmith_dot_vec4_i32(u_input.a, countOneBits((vec4<i32>(51799i, 30783i, 24488i, 0i) & u_input.a) & _wgslsmith_clamp_vec4_i32(vec4<i32>(u_input.c, i32(-2147483648), -9030i, u_input.c), u_input.a, vec4<i32>(1i, u_input.a.x, i32(-2147483648), -21532i)))));
    loop {
        if (LOOP_COUNTERS[21u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
        switch (var_0.c | var_0.c) {
            case -1i: {
                break;
            }
            case 2147483647i: {
                var var_1 = Struct_2(Struct_1(-20192i, var_0.b, var_0.c), 1941f);
                var var_2 = ~vec4<i32>(var_0.c, -select(_wgslsmith_dot_vec2_i32(u_input.a.wz, vec2<i32>(-28594i, var_1.a.a)), var_0.a & var_1.a.c, !var_1.a.b), _wgslsmith_sub_i32(select(var_1.a.c, var_0.a, false), -2830i), u_input.c);
                let var_3 = _wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(exp2(_wgslsmith_f_op_vec3_f32(vec3<f32>(867f, -356f, var_1.b) * vec3<f32>(var_1.b, -1409f, -140f))))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(abs(vec3<f32>(var_1.b, var_1.b, 1259f))))) + vec3<f32>(_wgslsmith_f_op_f32(min(-718f, _wgslsmith_f_op_f32(f32(-1f) * -356f))), var_1.b, _wgslsmith_f_op_f32(-var_1.b)));
                let var_4 = !func_2(var_0.b, all(vec3<bool>(all(vec2<bool>(false, var_0.b)), select(var_0.b, true, true), false)));
            }
            case 0i: {
                var_0 = global1[_wgslsmith_index_u32(~0u, 5u)];
                continue;
            }
            case 10676i: {
                global0 = _wgslsmith_div_i32(-_wgslsmith_dot_vec3_i32(min(~u_input.a.zzz, max(vec3<i32>(i32(-2147483648), -83409i, 31951i), vec3<i32>(u_input.b, 2147483647i, u_input.c))), -(vec3<i32>(-11150i, 22581i, var_0.c) << (vec3<u32>(0u, 4294967295u, u_input.e.x) % vec3<u32>(32u)))), -27464i);
                break;
            }
            default: {
                var var_1 = vec3<i32>(~2147483647i, _wgslsmith_dot_vec2_i32(~(vec2<i32>(-1i) * -vec2<i32>(var_0.a, -39836i)), vec2<i32>(22864i, u_input.d.x)), max(-(~(-1i)), ~u_input.d.x));
                global0 = reverseBits(max(14582i, var_0.a & var_0.a));
            }
        }
        loop {
            if (LOOP_COUNTERS[22u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
            global1 = array<Struct_1, 5>();
            continue;
        }
        for (var var_1 = 64574i; var_1 != -5476i; var_1 += 1i) {
            if (LOOP_COUNTERS[23u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
        }
    }
    let var_1 = 1116f;
    let x = u_input.a;
    s_output = StorageBuffer(~select(vec3<i32>(abs(var_0.c), 50959i, ~u_input.c), abs(u_input.a.zxw), var_0.b), _wgslsmith_div_i32(-u_input.a.x, 1i));
}

`;