export const input = [223,105,172,250,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [223,105,172,250,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[223,105,172,250]}
// Seed: 14791397895892539798

struct Struct_1 {
    a: i32,
    b: vec2<u32>,
}

struct UniformBuffer {
    a: i32,
}

struct StorageBuffer {
    a: i32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: bool;

var<private> global1: array<f32, 22>;

var<private> global2: i32 = 2147483647i;

var<private> LOOP_COUNTERS: array<u32, 23>;

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn func_6(arg_0: i32) -> f32 {
    global0 = true;
    global1 = array<f32, 22>();
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        let var_0 = 0u;
        continue;
    }
    var var_0 = Struct_1(_wgslsmith_mod_i32(abs(u_input.a), _wgslsmith_dot_vec4_i32(~vec4<i32>(-1i, arg_0, u_input.a, arg_0), -(~vec4<i32>(-1i, i32(-2147483648), arg_0, u_input.a)))), _wgslsmith_add_vec2_u32(min(vec2<u32>(79760u, 1u), _wgslsmith_mod_vec2_u32(vec2<u32>(16230u, 127756u), vec2<u32>(41072u, 1u))), _wgslsmith_mod_vec2_u32(~vec2<u32>(32529u, 0u), vec2<u32>(60887u, 4294967295u))) << (vec2<u32>(1u, 1u) % vec2<u32>(32u)));
    var var_1 = ~(~(~vec4<u32>(_wgslsmith_div_u32(32847u, 4294967295u), 4294967295u, 11002u, 21484u >> (0u % 32u))));
    return _wgslsmith_f_op_f32(f32(-1f) * -630f);
}

fn func_7(arg_0: Struct_1, arg_1: Struct_1, arg_2: vec4<u32>, arg_3: bool) -> i32 {
    global2 = ~_wgslsmith_sub_i32(arg_0.a, i32(-2147483648) ^ min(min(arg_1.a, -38365i), i32(-1i) * i32(-2147483648)));
    let var_0 = arg_2.x & arg_2.x;
    var var_1 = _wgslsmith_dot_vec2_i32(vec2<i32>(abs(arg_0.a), -27263i), vec2<i32>(~u_input.a, 0i)) << (~(~abs(0u)) % 32u);
    global0 = false;
    for (var var_2: i32; var_2 <= 0i; var_2 -= 1i) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
    }
    return 0i;
}

fn func_5(arg_0: vec2<f32>) -> bool {
    if (false) {
    }
    if (_wgslsmith_add_i32(func_7(Struct_1(0i, _wgslsmith_clamp_vec2_u32(vec2<u32>(4294967295u, 4294967295u), vec2<u32>(0u, 1u), vec2<u32>(0u, 4294967295u))), Struct_1(u_input.a, ~vec2<u32>(87417u, 4294967295u)), vec4<u32>(4294967295u, firstTrailingBit(1u), 1u, 1u), _wgslsmith_f_op_f32(func_6(u_input.a)) <= _wgslsmith_f_op_f32(func_6(7380i))), -(i32(-1i) * -66015i) >> (1u % 32u)) < -1i) {
        loop {
            if (LOOP_COUNTERS[2u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            var var_0 = Struct_1(_wgslsmith_mod_i32(u_input.a, -57714i), vec2<u32>(1u, 1u));
            var_0 = Struct_1(u_input.a, var_0.b);
            continue;
        }
    }
    var var_0 = 1u << (firstTrailingBit(0u) % 32u);
    let var_1 = _wgslsmith_f_op_vec3_f32(-vec3<f32>(-959f, _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -370f), _wgslsmith_f_op_f32(-1336f + -761f))), global1[_wgslsmith_index_u32(1u, 22u)]));
    let var_2 = Struct_1(u_input.a, vec2<u32>(~4294967295u, _wgslsmith_div_u32(64423u, 21732u)));
    return true | !select(all(select(vec2<bool>(false, true), vec2<bool>(true, false), vec2<bool>(false, true))), true, !select(true, true, false));
}

fn func_8(arg_0: bool, arg_1: vec4<f32>, arg_2: Struct_1) -> Struct_1 {
    switch (u_input.a) {
        case -16221i: {
            switch (i32(-2147483648)) {
                case -23670i: {
                    global2 = _wgslsmith_mod_i32(_wgslsmith_mult_i32(~_wgslsmith_mod_i32(u_input.a, abs(0i)), arg_2.a), 1i);
                }
                case -1i: {
                }
                case -17536i: {
                    var var_0 = _wgslsmith_mult_i32(abs(-arg_2.a), min(abs(min(u_input.a, select(-15146i, arg_2.a, arg_0))), min(arg_2.a, _wgslsmith_mult_i32(arg_2.a, arg_2.a))));
                    var var_1 = arg_2;
                    var var_2 = _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(round(vec4<f32>(-762f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(-1596f))), _wgslsmith_f_op_f32(-arg_1.x), _wgslsmith_div_f32(-1671f, arg_1.x)))), _wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(vec4<f32>(arg_1.x, arg_1.x, 279f, -1526f), arg_1)))));
                    var var_3 = arg_2.b.x;
                }
                default: {
                    global2 = 1i;
                    let var_0 = vec3<i32>((-63457i ^ u_input.a) & u_input.a, -3001i, ~arg_2.a);
                }
            }
        }
        case -2455i: {
            switch (~func_7(Struct_1(0i, arg_2.b), Struct_1(-6910i, _wgslsmith_div_vec2_u32(vec2<u32>(27123u, 15117u), vec2<u32>(arg_2.b.x, arg_2.b.x) & arg_2.b)), ~_wgslsmith_sub_vec4_u32(~vec4<u32>(4294967295u, arg_2.b.x, 1u, 0u), reverseBits(vec4<u32>(104976u, 0u, arg_2.b.x, arg_2.b.x))), all(select(!vec2<bool>(false, arg_0), vec2<bool>(true, false), select(vec2<bool>(true, arg_0), vec2<bool>(arg_0, arg_0), vec2<bool>(arg_0, arg_0)))))) {
                default: {
                    global0 = func_5(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-325f, _wgslsmith_f_op_f32(-656f))) + _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(abs(arg_1.xx))))));
                    return arg_2;
                }
            }
            for (var var_0 = -_wgslsmith_mult_i32(_wgslsmith_add_i32(u_input.a, 0i), arg_2.a >> (arg_2.b.x % 32u)); any(select(select(vec3<bool>(false | arg_0, arg_0, true), vec3<bool>(arg_0, all(vec2<bool>(arg_0, true)), false), _wgslsmith_f_op_f32(f32(-1f) * -692f) >= _wgslsmith_f_op_f32(abs(arg_1.x))), vec3<bool>(select(arg_0 & false, arg_0, any(vec3<bool>(false, true, false))), arg_0, !arg_0), all(vec3<bool>(-248f > global1[_wgslsmith_index_u32(82253u, 22u)], false, !arg_0)))); var_0 -= 1i) {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
                break;
            }
            let var_0 = vec3<f32>(-1839f, arg_1.x, _wgslsmith_f_op_f32(func_6(func_7(Struct_1(firstTrailingBit(-10029i), arg_2.b), arg_2, ~select(vec4<u32>(arg_2.b.x, 4294967295u, 32790u, 36418u), vec4<u32>(arg_2.b.x, 98725u, arg_2.b.x, arg_2.b.x), true), !arg_0))));
        }
        case i32(-2147483648): {
            for (; ; ) {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                global1 = array<f32, 22>();
            }
            switch (u_input.a) {
                case 9638i: {
                    let var_0 = arg_2;
                    global2 = select(-1i, -6186i, true);
                    global1 = array<f32, 22>();
                }
                case 25563i: {
                    global0 = arg_0;
                }
                default: {
                    var var_0 = all(select(select(select(!vec3<bool>(true, arg_0, false), !vec3<bool>(arg_0, true, false), false), !select(vec3<bool>(arg_0, true, arg_0), vec3<bool>(arg_0, arg_0, arg_0), vec3<bool>(true, arg_0, true)), !(!vec3<bool>(arg_0, true, arg_0))), vec3<bool>(select(true, arg_2.b.x < 36223u, arg_0 & true), false, true), true));
                    let var_1 = ~_wgslsmith_dot_vec2_u32(_wgslsmith_clamp_vec2_u32(reverseBits(vec2<u32>(1u, arg_2.b.x)), _wgslsmith_mult_vec2_u32(arg_2.b, firstLeadingBit(arg_2.b)), vec2<u32>(reverseBits(2112u), 4294967295u >> (arg_2.b.x % 32u))), (vec2<u32>(0u, 0u) ^ ~vec2<u32>(7643u, arg_2.b.x)) & arg_2.b);
                    let var_2 = Struct_1(u_input.a, ~_wgslsmith_div_vec2_u32(arg_2.b, _wgslsmith_add_vec2_u32(select(vec2<u32>(arg_2.b.x, 54830u), vec2<u32>(arg_2.b.x, 39498u), arg_0), ~arg_2.b)));
                    var var_3 = arg_2;
                }
            }
            let var_0 = _wgslsmith_sub_u32(arg_2.b.x, ~(~((arg_2.b.x & arg_2.b.x) & countOneBits(arg_2.b.x))));
            var var_1 = arg_0;
            let var_2 = arg_2;
        }
        case 2147483647i: {
        }
        default: {
        }
    }
    let var_0 = _wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(arg_1.ywx + vec3<f32>(global1[_wgslsmith_index_u32(arg_2.b.x, 22u)], 1729f, -1224f))))));
    let var_1 = Struct_1(_wgslsmith_add_i32(firstTrailingBit(~(-6584i)), select(u_input.a, 0i, arg_0)), arg_2.b);
    switch (-19180i) {
        default: {
            let var_2 = Struct_1(abs(_wgslsmith_dot_vec4_i32(-vec4<i32>(-24724i, var_1.a, 40775i, u_input.a), -(~vec4<i32>(-25232i, u_input.a, var_1.a, u_input.a)))), arg_2.b);
            loop {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                var var_3 = arg_2;
                let var_4 = -76925i;
                global1 = array<f32, 22>();
                let var_5 = vec4<i32>(-_wgslsmith_clamp_i32(_wgslsmith_mod_i32(arg_2.a, 22598i), var_4 >> (43785u % 32u), select(var_4, 74699i, arg_0)) & ~(-1i), var_3.a, -15160i, ~_wgslsmith_div_i32(-43954i, countOneBits(_wgslsmith_dot_vec2_i32(vec2<i32>(u_input.a, var_2.a), vec2<i32>(var_2.a, var_1.a)))));
            }
            switch (_wgslsmith_mod_i32(u_input.a, -1i) >> (_wgslsmith_mult_u32(arg_2.b.x, var_1.b.x) % 32u)) {
                default: {
                    global0 = arg_0;
                    let var_3 = var_0.x;
                    let var_4 = Struct_1(-49745i, vec2<u32>(9488u, arg_2.b.x) << (arg_2.b % vec2<u32>(32u)));
                    var var_5 = var_4;
                }
            }
            for (; false; ) {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                global2 = u_input.a;
            }
            var var_3 = arg_2;
        }
    }
    switch (~(-35246i)) {
        case 28406i: {
            let var_2 = arg_2;
            for (var var_3 = 21416i; func_5(var_0.xx); var_3 -= 1i) {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
            }
            switch (-((1i & u_input.a) | firstLeadingBit(firstTrailingBit(_wgslsmith_mult_i32(i32(-2147483648), u_input.a))))) {
                case 1i: {
                    global0 = any(select(select(vec2<bool>(arg_0, true), select(vec2<bool>(arg_0, arg_0), select(vec2<bool>(arg_0, false), vec2<bool>(arg_0, false), arg_0), func_5(arg_1.xy)), false), vec2<bool>(!(!arg_0), false), select(!select(vec2<bool>(true, arg_0), vec2<bool>(arg_0, true), arg_0), !(!vec2<bool>(arg_0, false)), vec2<bool>(select(arg_0, arg_0, true), any(vec4<bool>(arg_0, false, arg_0, arg_0))))));
                    var var_3 = Struct_1(-func_7(Struct_1(-arg_2.a, vec2<u32>(var_1.b.x, var_2.b.x)), Struct_1(40317i, abs(var_2.b)), vec4<u32>(abs(var_2.b.x), min(4294967295u, 4294967295u), 46097u, _wgslsmith_dot_vec3_u32(vec3<u32>(4294967295u, arg_2.b.x, arg_2.b.x), vec3<u32>(0u, 40982u, var_1.b.x))), select(!arg_0, all(vec4<bool>(true, true, false, false)), arg_0 & true)), var_1.b);
                }
                case 0i: {
                    var var_3 = vec3<bool>(false, !any(vec3<bool>(all(vec3<bool>(false, arg_0, false)), false, select(true, arg_0, arg_0))), !(!(!(arg_0 != true))));
                    var var_4 = arg_2;
                    var var_5 = Struct_1((_wgslsmith_mod_i32(arg_2.a | i32(-2147483648), ~(-32316i)) | ~(-var_2.a)) ^ arg_2.a, max(vec2<u32>(4294967295u, ~var_1.b.x), ~(var_4.b & arg_2.b) << (vec2<u32>(var_1.b.x, arg_2.b.x) % vec2<u32>(32u))));
                }
                case 31000i: {
                }
                default: {
                    var var_3 = select(var_0.x > var_0.x, !arg_0, false);
                    global1 = array<f32, 22>();
                    global0 = _wgslsmith_f_op_f32(-global1[_wgslsmith_index_u32(~var_2.b.x, 22u)]) <= _wgslsmith_f_op_f32(floor(-197f));
                    let var_4 = Struct_1(_wgslsmith_clamp_i32(var_1.a, arg_2.a, 1i), ~_wgslsmith_sub_vec2_u32(var_2.b, vec2<u32>(4294967295u, var_2.b.x)));
                }
            }
            var var_3 = Struct_1(_wgslsmith_mult_i32(_wgslsmith_dot_vec3_i32(vec3<i32>(-8590i, u_input.a & var_2.a, -26287i), ~(-vec3<i32>(u_input.a, 33797i, u_input.a))), -73904i), _wgslsmith_add_vec2_u32(arg_2.b, select(_wgslsmith_add_vec2_u32(vec2<u32>(0u, var_1.b.x) & vec2<u32>(65083u, 9609u), vec2<u32>(var_2.b.x, 1u)), vec2<u32>(max(0u, arg_2.b.x), 1u << (1u % 32u)), false)));
            loop {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                let var_4 = arg_2;
            }
        }
        case 2147483647i: {
            loop {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                var var_2 = Struct_1(_wgslsmith_add_i32(_wgslsmith_div_i32(-20461i, (arg_2.a & arg_2.a) << (firstLeadingBit(arg_2.b.x) % 32u)), ~(~arg_2.a >> ((1u & arg_2.b.x) % 32u))), arg_2.b);
                global2 = _wgslsmith_div_i32(min(~(i32(-2147483648)), 1i) | min(-5168i, firstLeadingBit(var_2.a)), _wgslsmith_sub_i32(59637i, ~var_1.a));
                var var_3 = _wgslsmith_mod_vec4_i32(-(-firstTrailingBit(vec4<i32>(var_2.a, 0i, var_2.a, var_1.a)) | ~select(vec4<i32>(var_2.a, var_1.a, arg_2.a, var_2.a), vec4<i32>(-17731i, var_1.a, 37267i, var_2.a), false)), max(max(vec4<i32>(var_1.a, 0i, -1i, var_1.a) >> (abs(vec4<u32>(var_2.b.x, 32855u, var_2.b.x, 15740u)) % vec4<u32>(32u)), _wgslsmith_mod_vec4_i32(vec4<i32>(-5619i, 2147483647i, -1i, var_2.a), vec4<i32>(var_2.a, u_input.a, var_1.a, 0i) & vec4<i32>(var_1.a, var_2.a, i32(-2147483648), var_2.a))), ~(-vec4<i32>(2147483647i, 2147483647i, u_input.a, -1i))));
            }
            for (var var_2 = -31577i; true; var_2 -= 1i) {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                break;
            }
            var var_2 = var_0;
            switch (_wgslsmith_clamp_i32(min(-38557i, _wgslsmith_add_i32(i32(-2147483648) << (arg_2.b.x % 32u), 1i)), arg_2.a, 69027i)) {
                case 2147483647i: {
                    return Struct_1(0i, vec2<u32>(32144u, arg_2.b.x));
                }
                case 1i: {
                    global1 = array<f32, 22>();
                }
                default: {
                    return Struct_1(-1i, ~vec2<u32>(var_1.b.x, firstTrailingBit(arg_2.b.x ^ arg_2.b.x)));
                }
            }
            var var_3 = reverseBits(~_wgslsmith_clamp_vec2_u32(var_1.b, ~_wgslsmith_mod_vec2_u32(vec2<u32>(4294967295u, var_1.b.x), vec2<u32>(94540u, 4661u)), ~(~var_1.b)));
        }
        case 1i: {
            global1 = array<f32, 22>();
            var var_2 = Struct_1(_wgslsmith_mod_i32(_wgslsmith_div_i32(var_1.a, _wgslsmith_clamp_i32(-arg_2.a, -arg_2.a, u_input.a & 18915i)), 2147483647i), ~firstTrailingBit(var_1.b));
        }
        default: {
            for (var var_2 = 3640i; var_2 >= 11080i; var_2 = -1i) {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                global1 = array<f32, 22>();
                let var_3 = Struct_1(_wgslsmith_dot_vec2_i32(vec2<i32>(~(u_input.a & -1i), var_1.a), _wgslsmith_clamp_vec2_i32(_wgslsmith_div_vec2_i32(firstTrailingBit(vec2<i32>(28614i, -1i)), min(vec2<i32>(arg_2.a, u_input.a), vec2<i32>(-25417i, -1i))), _wgslsmith_mod_vec2_i32(-vec2<i32>(u_input.a, i32(-2147483648)), vec2<i32>(var_1.a, u_input.a)), firstLeadingBit(countOneBits(vec2<i32>(0i, -27159i))))), vec2<u32>(32438u, firstTrailingBit(var_1.b.x | 1u)));
            }
            for (var var_2 = 0i; var_2 <= 2147483647i; var_2 += 1i) {
                if (LOOP_COUNTERS[12u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
                return arg_2;
            }
            return Struct_1(u_input.a, vec2<u32>(19382u, var_1.b.x));
        }
    }
    return Struct_1(36211i, arg_2.b);
}

fn func_4() -> Struct_1 {
    let var_0 = func_8(!func_5(_wgslsmith_f_op_vec2_f32(trunc(_wgslsmith_div_vec2_f32(vec2<f32>(-585f, global1[_wgslsmith_index_u32(74682u, 22u)]), vec2<f32>(global1[_wgslsmith_index_u32(1u, 22u)], -1991f))))), vec4<f32>(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global1[_wgslsmith_index_u32(18203u, 22u)]) + _wgslsmith_f_op_f32(-1901f)))), _wgslsmith_f_op_f32(global1[_wgslsmith_index_u32(1u, 22u)] + _wgslsmith_f_op_f32(-1016f)), -1000f, _wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(func_6(u_input.a)) - global1[_wgslsmith_index_u32(abs(49898u), 22u)]), 1040f)), Struct_1(-_wgslsmith_clamp_i32(min(19145i, -41929i), _wgslsmith_add_i32(-9141i, -5838i), -u_input.a), vec2<u32>(~select(0u, 0u, true), ~0u)));
    loop {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
    }
    loop {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        break;
    }
    switch (~1i) {
        case -27144i: {
        }
        default: {
            var var_1 = -vec3<i32>(_wgslsmith_add_i32(countOneBits(_wgslsmith_dot_vec4_i32(vec4<i32>(i32(-2147483648), u_input.a, u_input.a, 1i), vec4<i32>(u_input.a, 67342i, u_input.a, 29008i))), u_input.a), -1i ^ _wgslsmith_add_i32(u_input.a ^ 2147483647i, -27028i), 34621i);
        }
    }
    if (false) {
        let var_1 = var_0;
    }
    return Struct_1(abs(~select(_wgslsmith_mult_i32(1i, var_0.a), _wgslsmith_div_i32(u_input.a, 2147483647i), true)), ~_wgslsmith_div_vec2_u32(var_0.b, vec2<u32>(~0u, _wgslsmith_dot_vec3_u32(vec3<u32>(var_0.b.x, 4294967295u, 0u), vec3<u32>(var_0.b.x, 64940u, 1u)))));
}

fn func_3(arg_0: vec3<f32>, arg_1: u32) -> Struct_1 {
    let var_0 = vec3<bool>(any(vec2<bool>(true, true)) || (false != any(select(vec4<bool>(true, true, false, true), vec4<bool>(true, false, true, false), false))), true, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(global1[_wgslsmith_index_u32(arg_1, 22u)] + 238f)) >= _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-750f) * arg_0.x)));
    var var_1 = u_input.a;
    let var_2 = func_4();
    for (var var_3 = i32(-2147483648); var_0.x & true; var_3 += 1i) {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
    }
    loop {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        var_1 = _wgslsmith_mod_i32(42254i, firstLeadingBit(14360i));
    }
    return Struct_1(-(36643i >> (_wgslsmith_mult_u32(arg_1, ~47761u) % 32u)), vec2<u32>(1u, arg_1));
}

fn func_2(arg_0: bool) -> u32 {
    global2 = 2147483647i;
    var var_0 = func_3(_wgslsmith_f_op_vec3_f32(round(vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global1[_wgslsmith_index_u32(0u, 22u)])), _wgslsmith_f_op_f32(-549f), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(f32(-1f) * -195f)))))), 5994u);
    var_0 = Struct_1(u_input.a, max(vec2<u32>(_wgslsmith_dot_vec3_u32(_wgslsmith_mult_vec3_u32(vec3<u32>(66380u, var_0.b.x, 0u), vec3<u32>(1u, 0u, var_0.b.x)), countOneBits(vec3<u32>(var_0.b.x, var_0.b.x, var_0.b.x))), var_0.b.x), ~vec2<u32>(0u, 0u)));
    var var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(global1[_wgslsmith_index_u32(_wgslsmith_dot_vec2_u32(_wgslsmith_mod_vec2_u32(var_0.b, ~var_0.b), ~(vec2<u32>(0u, 4294967295u) & vec2<u32>(7490u, var_0.b.x))), 22u)])));
    for (; arg_0; ) {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
        if (true) {
            var var_2 = Struct_1(i32(-2147483648), ~(~select(var_0.b, var_0.b, !arg_0)));
            let var_3 = _wgslsmith_div_i32(select(select(func_8(any(vec2<bool>(arg_0, arg_0)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(545f, -861f, global1[_wgslsmith_index_u32(var_0.b.x, 22u)], 113f)), func_4()).a, i32(-1i) * -var_2.a, (var_2.b.x > var_0.b.x) && false), var_0.a ^ var_2.a, !all(vec4<bool>(arg_0, false, true, arg_0))), ~10045i);
            var var_4 = -vec3<i32>(max(37868i, -1i), -48207i, _wgslsmith_div_i32(u_input.a, var_0.a) & -u_input.a) >> (vec3<u32>(~_wgslsmith_sub_u32(32756u | var_2.b.x, firstLeadingBit(var_0.b.x)), ~_wgslsmith_mult_u32(var_2.b.x, var_2.b.x) >> (0u % 32u), var_0.b.x) % vec3<u32>(32u));
        }
    }
    return reverseBits(59300u);
}

fn func_9(arg_0: i32, arg_1: vec2<f32>, arg_2: vec4<u32>, arg_3: Struct_1) -> f32 {
    loop {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        global2 = arg_0;
        switch (43015i) {
            case 90084i: {
                var var_0 = ~55626u;
            }
            case 0i: {
                var var_0 = _wgslsmith_div_i32(_wgslsmith_div_i32(arg_0, arg_3.a), _wgslsmith_mod_i32(~(-1i | u_input.a), 1i) | u_input.a);
                let var_1 = _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(min(arg_1, vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(global1[_wgslsmith_index_u32(34932u, 22u)] - arg_1.x)), global1[_wgslsmith_index_u32(1u, 22u)]))) + _wgslsmith_f_op_vec2_f32(-arg_1));
                var_0 = arg_0;
            }
            case 6142i: {
                let var_0 = Struct_1(min(-firstTrailingBit(_wgslsmith_clamp_i32(arg_0, arg_0, 1i)), -1i | _wgslsmith_div_i32(arg_3.a, _wgslsmith_add_i32(43525i, arg_0))), vec2<u32>(~(~(~arg_2.x)), arg_3.b.x));
                let var_1 = _wgslsmith_div_i32(1i, ~func_3(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(global1[_wgslsmith_index_u32(42169u, 22u)], -410f, arg_1.x))), (22057u << (arg_2.x % 32u)) & var_0.b.x).a);
                continue;
            }
            case -1i: {
                let var_0 = arg_2.x;
                var var_1 = firstLeadingBit(arg_0);
                let var_2 = arg_3;
            }
            default: {
                var var_0 = !select(select(!select(vec4<bool>(false, false, false, true), vec4<bool>(true, true, true, false), vec4<bool>(true, true, false, false)), vec4<bool>(true, true, true, false), select(vec4<bool>(true, true, true, true), vec4<bool>(false, false, false, true), vec4<bool>(false, false, false, false))), vec4<bool>(false, all(select(vec4<bool>(true, false, false, true), vec4<bool>(true, false, false, false), vec4<bool>(true, true, false, true))), false, true), vec4<bool>((-4559i & u_input.a) >= reverseBits(arg_3.a), any(select(vec3<bool>(true, false, false), vec3<bool>(false, false, true), false)), 7127u >= _wgslsmith_clamp_u32(arg_3.b.x, 0u, arg_2.x), select(true, global1[_wgslsmith_index_u32(arg_3.b.x, 22u)] <= arg_1.x, true)));
                var var_1 = ~(~arg_3.b.x);
                continue;
            }
        }
        continue;
    }
    let var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -493f) - arg_1.x), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-772f))), false))));
    global2 = ~61258i;
    switch (313i) {
        case -1i: {
            let var_1 = 48850u;
        }
        case -9862i: {
        }
        case 7986i: {
            let var_1 = !select(!(!select(vec2<bool>(false, true), vec2<bool>(true, true), true)), vec2<bool>(_wgslsmith_f_op_f32(-841f) == _wgslsmith_f_op_f32(-var_0), all(vec2<bool>(true, true))), true);
        }
        default: {
            switch (func_7(Struct_1(arg_0, vec2<u32>(1u, arg_3.b.x)), Struct_1(func_4().a, vec2<u32>(~arg_3.b.x, ~4294967295u)), (_wgslsmith_div_vec4_u32(vec4<u32>(48729u, 8888u, 19111u, 76362u), vec4<u32>(22048u, 19050u, arg_3.b.x, arg_3.b.x)) ^ vec4<u32>(9093u, arg_2.x, arg_3.b.x, arg_2.x)) << (~arg_2 % vec4<u32>(32u)), true) << (_wgslsmith_add_u32(arg_2.x, arg_3.b.x) % 32u)) {
                default: {
                }
            }
            global0 = !all(vec2<bool>(true, true));
        }
    }
    global0 = true;
    return 1209f;
}

fn func_1(arg_0: Struct_1) -> vec4<i32> {
    for (var var_0 = 2147483647i; true; var_0 += 1i) {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
    }
    var var_0 = _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(func_9(_wgslsmith_dot_vec3_i32(firstLeadingBit(~vec3<i32>(u_input.a, arg_0.a, -30859i)), select(vec3<i32>(i32(-2147483648), arg_0.a, arg_0.a), vec3<i32>(u_input.a, arg_0.a, 0i), true) >> (_wgslsmith_mod_vec3_u32(vec3<u32>(6419u, 72674u, 30995u), vec3<u32>(0u, arg_0.b.x, arg_0.b.x)) % vec3<u32>(32u))), _wgslsmith_f_op_vec2_f32(-vec2<f32>(global1[_wgslsmith_index_u32(func_2(true), 22u)], _wgslsmith_f_op_f32(select(global1[_wgslsmith_index_u32(arg_0.b.x, 22u)], global1[_wgslsmith_index_u32(4294967295u, 22u)], false)))), vec4<u32>(min(select(24011u, 4294967295u, true), _wgslsmith_div_u32(11615u, arg_0.b.x)), arg_0.b.x, arg_0.b.x, 4294967295u), Struct_1(~1i, ~(vec2<u32>(1u, 33271u) & vec2<u32>(arg_0.b.x, arg_0.b.x))))), -550f));
    for (var var_1 = -1381i; ; global2 = u_input.a) {
        if (LOOP_COUNTERS[20u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
        break;
    }
    global2 = _wgslsmith_add_i32(countOneBits(61241i), -u_input.a);
    global1 = array<f32, 22>();
    return _wgslsmith_mod_vec4_i32(reverseBits(countOneBits(countOneBits(vec4<i32>(u_input.a, u_input.a, arg_0.a, -63672i)))) >> ((select(max(vec4<u32>(4294967295u, arg_0.b.x, 1u, 0u), vec4<u32>(arg_0.b.x, arg_0.b.x, 4294967295u, 0u)), ~vec4<u32>(0u, arg_0.b.x, 45585u, arg_0.b.x), select(vec4<bool>(false, false, true, true), vec4<bool>(false, false, false, true), true)) >> (~vec4<u32>(arg_0.b.x, arg_0.b.x, 1u, arg_0.b.x) % vec4<u32>(32u))) % vec4<u32>(32u)), vec4<i32>(_wgslsmith_add_i32(~u_input.a | 1i, firstTrailingBit(_wgslsmith_sub_i32(-10006i, -1i))), 1i, -26452i, -23853i));
}

fn func_10(arg_0: vec3<bool>, arg_1: Struct_1, arg_2: bool, arg_3: vec4<i32>) -> u32 {
    let var_0 = abs(_wgslsmith_div_vec4_u32(_wgslsmith_mult_vec4_u32(abs(vec4<u32>(93704u, 45853u, arg_1.b.x, 33737u)), ~vec4<u32>(31772u, 0u, 4294967295u, arg_1.b.x)), vec4<u32>(4294967295u ^ arg_1.b.x, _wgslsmith_clamp_u32(arg_1.b.x, arg_1.b.x, arg_1.b.x), 1u, 84957u << (1u % 32u)))) >> (~(~_wgslsmith_sub_vec4_u32(vec4<u32>(0u, arg_1.b.x, arg_1.b.x, arg_1.b.x), vec4<u32>(arg_1.b.x, arg_1.b.x, 48697u, arg_1.b.x))) % vec4<u32>(32u));
    return ~var_0.x;
}

@compute
@workgroup_size(1)
fn main() {
    let var_0 = _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(sign(-801f))));
    var var_1 = vec4<f32>(var_0, global1[_wgslsmith_index_u32(abs(func_10(vec3<bool>(true, true, false), Struct_1(u_input.a, vec2<u32>(54319u, 0u)), true, firstLeadingBit(func_1(Struct_1(-1794i, vec2<u32>(1u, 1u)))))), 22u)], 964f, global1[_wgslsmith_index_u32(29564u, 22u)]);
    for (var var_2 = 2147483647i; var_2 <= 0i; var_2 -= 1i) {
        if (LOOP_COUNTERS[21u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
        let var_3 = ~(~(~min(vec3<u32>(1u, 16555u, 533u), vec3<u32>(1u, 1u, 1u))));
    }
    var var_2 = vec3<u32>(reverseBits(_wgslsmith_mod_u32(1u, 47438u)), func_10(vec3<bool>(true, true, true), Struct_1(-(~u_input.a), ~vec2<u32>(53016u, 25543u)), true, select(vec4<i32>(~(-1i), max(1i, u_input.a), 42840i & u_input.a, _wgslsmith_clamp_i32(u_input.a, 2147483647i, 2147483647i)), -vec4<i32>(6943i, -15624i, u_input.a, i32(-2147483648)), vec4<bool>(true, true, false, false))), func_10(vec3<bool>(!all(vec2<bool>(true, true)), false, !any(vec3<bool>(false, true, false))), Struct_1(0i, ~vec2<u32>(4294967295u, 6228u)), !all(vec2<bool>(true, true)), _wgslsmith_clamp_vec4_i32(vec4<i32>(0i, u_input.a, reverseBits(u_input.a), u_input.a << (47648u % 32u)), _wgslsmith_div_vec4_i32(vec4<i32>(u_input.a, u_input.a, 0i, u_input.a), vec4<i32>(-1i, -66840i, u_input.a, 1i)) | vec4<i32>(15842i, 68913i, 42705i, u_input.a), max(vec4<i32>(u_input.a, u_input.a, 12878i, u_input.a), vec4<i32>(2358i, 1i, u_input.a, 22047i)))));
    global2 = _wgslsmith_mod_i32(~_wgslsmith_mod_i32(-25096i, _wgslsmith_add_i32(_wgslsmith_sub_i32(-64333i, u_input.a), _wgslsmith_mod_i32(u_input.a, u_input.a))), u_input.a);
    for (var var_3 = 69320i; select(true, select(i32(-2147483648), 42035i, true) <= u_input.a, any(select(vec2<bool>(false, true), vec2<bool>(true, true), all(vec4<bool>(true, false, false, true)))) && true); var_3 += 1i) {
        if (LOOP_COUNTERS[22u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
        let var_4 = _wgslsmith_mod_vec2_i32(-_wgslsmith_add_vec2_i32(vec2<i32>(u_input.a | u_input.a, func_1(Struct_1(-275i, var_2.xz)).x), _wgslsmith_div_vec2_i32(max(vec2<i32>(u_input.a, u_input.a), vec2<i32>(u_input.a, u_input.a)), _wgslsmith_sub_vec2_i32(vec2<i32>(4002i, u_input.a), vec2<i32>(2147483647i, u_input.a)))), ((vec2<i32>(i32(-2147483648), u_input.a) | (vec2<i32>(u_input.a, u_input.a) & vec2<i32>(20634i, u_input.a))) & ~_wgslsmith_add_vec2_i32(vec2<i32>(u_input.a, u_input.a), vec2<i32>(u_input.a, -1i))) & (vec2<i32>(-1i) * -vec2<i32>(0i, -14751i)));
        if (false) {
            continue;
        }
        global1 = array<f32, 22>();
        let var_5 = Struct_1(var_4.x, var_2.xz);
        let var_6 = vec4<u32>(~(~var_5.b.x), abs(72287u), func_3(var_1.zzy, 67453u).b.x, func_3(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(sign(vec3<f32>(var_1.x, -2565f, -340f))) + _wgslsmith_f_op_vec3_f32(var_1.www * var_1.xxx)) + _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-var_1.ywx), _wgslsmith_f_op_vec3_f32(exp2(vec3<f32>(var_0, 358f, global1[_wgslsmith_index_u32(4294967295u, 22u)]))), false))), var_2.x).b.x);
    }
    global0 = (true || ((_wgslsmith_mult_i32(u_input.a, -1i) == countOneBits(88714i)) & (_wgslsmith_f_op_f32(-1435f - var_0) != _wgslsmith_f_op_f32(step(var_0, 829f))))) & false;
    var var_3 = _wgslsmith_f_op_f32(-_wgslsmith_div_f32(global1[_wgslsmith_index_u32(min(var_2.x << (8957u % 32u), var_2.x), 22u)], _wgslsmith_f_op_f32(max(var_1.x, _wgslsmith_f_op_f32(max(300f, var_0))))));
    let x = u_input.a;
    s_output = StorageBuffer(~u_input.a);
}

`;