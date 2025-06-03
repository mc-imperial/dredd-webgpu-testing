export const input = [156,232,213,174,238,220,255,196,23,150,52,121,223,138,133,130,148,159,141,123,64,1,10,223,95,79,137,213,150,191,132,106,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [156,232,213,174,238,220,255,196,23,150,52,121,223,138,133,130,148,159,141,123,64,1,10,223,95,79,137,213,150,191,132,106,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[156,232,213,174,238,220,255,196,23,150,52,121,223,138,133,130,148,159,141,123,64,1,10,223,95,79,137,213,150,191,132,106]}
// Seed: 11558869382821721356

struct Struct_1 {
    a: bool,
}

struct Struct_2 {
    a: f32,
    b: Struct_1,
    c: vec3<f32>,
    d: vec4<bool>,
}

struct Struct_3 {
    a: f32,
    b: Struct_2,
    c: vec4<i32>,
    d: Struct_2,
    e: Struct_1,
}

struct Struct_4 {
    a: Struct_3,
    b: f32,
    c: vec2<i32>,
    d: vec4<u32>,
}

struct Struct_5 {
    a: u32,
    b: vec4<u32>,
    c: i32,
    d: Struct_2,
}

struct UniformBuffer {
    a: vec2<u32>,
    b: u32,
    c: u32,
    d: vec3<u32>,
}

struct StorageBuffer {
    a: i32,
    b: vec2<u32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: vec3<u32>;

var<private> LOOP_COUNTERS: array<u32, 25>;

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn func_6() -> f32 {
    let var_0 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(floor(vec3<f32>(144f, 417f, -1555f))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(-424f, -827f, -1979f))))) + _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(725f, 1000f, 304f) + vec3<f32>(-544f, 402f, -138f))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(1000f, -1201f, 286f)) * vec3<f32>(-388f, 824f, 1607f)))) * _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(round(vec3<f32>(831f, 1958f, -384f))), vec3<f32>(-368f, 2011f, 411f))) - _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-368f, -631f, 1270f)) + _wgslsmith_f_op_vec3_f32(vec3<f32>(-1171f, 944f, -1602f) + vec3<f32>(1146f, -2119f, 679f))))));
    global0 = ~vec3<u32>(global0.x, abs(u_input.d.x & 1u) >> (global0.x % 32u), firstTrailingBit(12616u));
    for (var var_1 = 2147483647i; var_1 >= 2147483647i; var_1 = -1i) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        var var_2 = all(vec2<bool>(true, true));
        let var_3 = any(select(!select(select(vec3<bool>(true, true, false), vec3<bool>(false, true, true), true), vec3<bool>(false, false, true), true), select(select(vec3<bool>(true, true, false), vec3<bool>(false, true, false), 10591u <= global0.x), vec3<bool>(true, true, true), select(vec3<bool>(false, true, true), select(vec3<bool>(true, false, true), vec3<bool>(true, false, true), vec3<bool>(true, true, false)), true)), any(select(vec2<bool>(true, false), vec2<bool>(false, false), vec2<bool>(true, true)))));
        break;
    }
    for (var var_1 = _wgslsmith_add_i32(~(~_wgslsmith_mod_i32(-1i, 1i)), _wgslsmith_dot_vec3_i32(vec3<i32>(0i, 0i, _wgslsmith_add_i32(0i, i32(-2147483648))), ~(-vec3<i32>(-12158i, -1i, 14271i)))) << (0u % 32u); var_1 == 0i; var_1 += 1i) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        break;
    }
    let var_1 = _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(round(1000f)), _wgslsmith_div_f32(1590f, 154f), true));
    return _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_0.x)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(660f + var_1) + var_0.x))))));
}

fn func_5() -> vec2<bool> {
    if (!(!(!all(vec3<bool>(true, true, true))))) {
        let var_0 = Struct_2(-224f, Struct_1(~1u <= _wgslsmith_dot_vec4_u32(countOneBits(vec4<u32>(65679u, 4294967295u, 4294967295u, u_input.b)), select(vec4<u32>(global0.x, global0.x, 0u, global0.x), vec4<u32>(global0.x, 36439u, 0u, global0.x), vec4<bool>(true, false, true, false)))), vec3<f32>(289f, 304f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1467f))), vec4<bool>(true, true, 1u == ~u_input.c, true));
    }
    switch (_wgslsmith_dot_vec3_i32(vec3<i32>(~38755i, _wgslsmith_sub_i32(_wgslsmith_mod_i32(i32(-1i) * -1i, ~(i32(-2147483648))), 1i), _wgslsmith_div_i32(i32(-2147483648), 1i)), vec3<i32>(20391i, firstTrailingBit(select(-1i, 1i, true)), reverseBits(1i)))) {
        case -7406i: {
            let var_0 = 1i;
        }
        case 0i: {
            global0 = u_input.d;
        }
        case 1i: {
            let var_0 = Struct_4(Struct_3(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-203f) + -1640f), Struct_2(_wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -282f), _wgslsmith_f_op_f32(func_6())), Struct_1(true), _wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(vec3<f32>(-424f, -284f, 786f), vec3<f32>(529f, -1000f, 414f))), vec4<bool>(false, false, any(vec4<bool>(false, false, true, false)), true)), ~vec4<i32>(~2147483647i, 29310i, i32(-1i) * i32(-2147483648), 1i), Struct_2(_wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -1512f), _wgslsmith_f_op_f32(-634f + -1015f)), Struct_1(all(vec2<bool>(false, false))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(776f, -1149f, 471f))), vec4<bool>(true, true, true, true)), Struct_1(false)), _wgslsmith_f_op_f32(-1248f), _wgslsmith_clamp_vec2_i32(-vec2<i32>(~6408i, -1i), -(vec2<i32>(0i, 38879i) >> (_wgslsmith_add_vec2_u32(u_input.a, u_input.d.xy) % vec2<u32>(32u))), vec2<i32>(abs(_wgslsmith_div_i32(-6724i, 66634i)), -reverseBits(-1i))), vec4<u32>(~_wgslsmith_mod_u32(_wgslsmith_mod_u32(global0.x, global0.x), 19909u & u_input.d.x), reverseBits(max(u_input.b, abs(u_input.c))), max(abs(global0.x) << (u_input.a.x % 32u), global0.x), 0u >> (select(~u_input.b, u_input.b, 5560u < u_input.b) % 32u)));
            var var_1 = Struct_2(1f, Struct_1(!(var_0.b < var_0.a.d.c.x)), var_0.a.d.c, !(!(!select(vec4<bool>(false, true, var_0.a.b.d.x, false), var_0.a.d.d, var_0.a.e.a))));
            global0 = _wgslsmith_div_vec3_u32(u_input.d, vec3<u32>(select(countOneBits(4294967295u), u_input.b, false), 28451u, 74119u)) >> (vec3<u32>(~(~6370u), var_0.d.x, reverseBits(_wgslsmith_clamp_u32(7682u, 36441u, var_0.d.x))) % vec3<u32>(32u));
        }
        default: {
            global0 = reverseBits(vec3<u32>(0u, _wgslsmith_clamp_u32(0u, _wgslsmith_mod_u32(~1u, abs(global0.x)), ~u_input.a.x ^ ~u_input.a.x), global0.x));
            loop {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
                continue;
            }
        }
    }
    let var_0 = Struct_4(Struct_3(_wgslsmith_f_op_f32(f32(-1f) * -947f), Struct_2(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(1169f)) * _wgslsmith_f_op_f32(f32(-1f) * -751f)), Struct_1(all(vec4<bool>(false, false, true, false))), _wgslsmith_f_op_vec3_f32(select(vec3<f32>(1f, 1f, 1f), vec3<f32>(1261f, -1000f, 1897f), vec3<bool>(false, false, true))), vec4<bool>(true, true, true, true)), firstTrailingBit(countOneBits(vec4<i32>(1i, 1i, 1i, 1i))), Struct_2(_wgslsmith_f_op_f32(f32(-1f) * -537f), Struct_1(u_input.d.x > u_input.d.x), vec3<f32>(1f, 1f, 1f), vec4<bool>(true, true, any(vec4<bool>(true, false, false, true)), true)), Struct_1(true)), _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -332f))))), -(-vec2<i32>(1i, 12i) >> (~_wgslsmith_clamp_vec2_u32(u_input.d.xz, vec2<u32>(global0.x, global0.x), vec2<u32>(27674u, 1u)) % vec2<u32>(32u))), firstLeadingBit(~(~vec4<u32>(14546u, 4294967295u, u_input.d.x, u_input.b))));
    let var_1 = var_0.a;
    switch (_wgslsmith_mult_i32(abs(~_wgslsmith_div_i32(var_1.c.x, var_0.a.c.x)) ^ -(select(i32(-2147483648), var_1.c.x, false) | _wgslsmith_clamp_i32(var_0.c.x, var_0.a.c.x, 5846i)), 2147483647i)) {
        case i32(-2147483648): {
            for (; var_0.a.e.a; ) {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            }
            loop {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
            }
            loop {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                continue;
            }
        }
        case -14211i: {
            let var_2 = _wgslsmith_clamp_u32(~(~(var_0.d.x & max(6512u, global0.x))), ~(~38282u), 8445u >> (_wgslsmith_mod_u32(var_0.d.x, var_0.d.x) % 32u));
            if (reverseBits(max(_wgslsmith_clamp_i32(abs(var_1.c.x), max(-1i, i32(-2147483648)), var_1.c.x), var_1.c.x)) >= abs(1i)) {
                var var_3 = var_0.c.x;
            }
        }
        case -5098i: {
            for (; !select(any(!select(var_1.b.d.xy, var_1.d.d.zz, var_1.e.a)), any(!vec3<bool>(var_1.b.b.a, var_0.a.e.a, true)), select(_wgslsmith_div_i32(var_0.c.x, var_0.a.c.x), countOneBits(-56713i), var_0.d.x != 1u) > var_0.a.c.x); ) {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                global0 = var_0.d.yxx;
                let var_2 = select(var_0.a.d.b.a != (all(vec4<bool>(false, var_1.b.d.x, var_0.a.e.a, false)) | (false != var_1.d.b.a)), ~global0.x >= ~(~1u), true) && true;
                var var_3 = Struct_5(~(~_wgslsmith_sub_u32(u_input.a.x, 1u)), var_0.d, reverseBits(56542i), var_1.d);
            }
            global0 = var_0.d.xzx;
            loop {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                var var_2 = var_1.b.d.xy;
                let var_3 = Struct_2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(var_0.a.a, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_1.a) - _wgslsmith_f_op_f32(round(1070f))), all(select(var_1.b.d.wzz, vec3<bool>(var_0.a.b.b.a, false, var_0.a.d.b.a), var_0.a.d.d.zwy))))), Struct_1(!(u_input.d.x < firstLeadingBit(0u))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(var_1.a, 1271f, -1036f)) - vec3<f32>(1000f, 1099f, -811f))) + var_0.a.d.c), !vec4<bool>(var_1.e.a, true && any(var_0.a.b.d.yx), var_1.d.d.x, select(var_0.a.e.a, !var_0.a.d.d.x, all(vec4<bool>(var_0.a.b.d.x, false, true, false)))));
                let var_4 = var_0.a.d.c.yz;
                let var_5 = true;
            }
        }
        case 1i: {
        }
        default: {
        }
    }
    return !select(select(var_1.b.d.wz, select(!vec2<bool>(true, var_1.b.d.x), var_0.a.d.d.yz, !var_1.b.b.a), var_1.b.d.xy), var_1.b.d.ww, select(!var_0.a.d.d.zy, select(vec2<bool>(var_1.d.b.a, true), select(var_0.a.b.d.xz, var_1.d.d.xw, vec2<bool>(var_0.a.b.d.x, var_1.b.b.a)), var_0.a.d.b.a), vec2<bool>(all(var_1.b.d.yyy), var_1.d.d.x)));
}

fn func_7(arg_0: vec2<bool>, arg_1: u32, arg_2: Struct_4) -> Struct_5 {
    var var_0 = arg_2.a.b.b;
    var_0 = arg_2.a.d.b;
    loop {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        let var_1 = arg_2.d.x;
        for (var var_2 = 1i; var_2 != -33848i; var_2 -= 1i) {
            if (LOOP_COUNTERS[9u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
            var var_3 = -(arg_2.c.x & _wgslsmith_dot_vec4_i32(vec4<i32>(~arg_2.c.x, arg_2.c.x, _wgslsmith_sub_i32(arg_2.c.x, -275i), arg_2.a.c.x), vec4<i32>(18401i << (global0.x % 32u), ~43144i, -arg_2.c.x, select(-1i, arg_2.a.c.x, false))));
            var var_4 = ~(~firstTrailingBit(50786u & arg_1));
        }
    }
    var var_1 = vec4<bool>(any(vec3<bool>(arg_2.a.e.a, true, false)), arg_2.b >= _wgslsmith_div_f32(1251f, _wgslsmith_f_op_f32(-arg_2.a.a)), true && arg_0.x, !var_0.a);
    var var_2 = arg_2;
    return Struct_5(_wgslsmith_div_u32(countOneBits(10313u), _wgslsmith_mult_u32(global0.x, select(select(8011u, 33650u, var_2.a.b.d.x), arg_1 ^ 53641u, var_0.a))), var_2.d, arg_2.c.x, Struct_2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(arg_2.b, 192f, true)))), Struct_1(true), var_2.a.d.c, vec4<bool>(all(!vec2<bool>(var_2.a.d.d.x, false)), any(vec3<bool>(false, true, var_0.a)), !(!var_1.x), !all(var_2.a.d.d.zyy))));
}

fn func_4(arg_0: vec3<u32>, arg_1: vec3<f32>, arg_2: u32) -> vec4<bool> {
    global0 = vec3<u32>(reverseBits(_wgslsmith_dot_vec4_u32(vec4<u32>(arg_0.x, arg_2, arg_0.x, u_input.a.x), vec4<u32>(global0.x, 16804u, 64242u, 34714u) & vec4<u32>(4294967295u, 1u, arg_0.x, 81885u))) ^ 4294967295u, arg_2 >> (select(1u, 1u, true) % 32u), 1u);
    if (false) {
        let var_0 = func_7(select(vec2<bool>(true, true), func_5(), vec2<bool>(true, true)), ~global0.x, Struct_4(Struct_3(_wgslsmith_f_op_f32(arg_1.x * _wgslsmith_f_op_f32(max(arg_1.x, arg_1.x))), Struct_2(arg_1.x, Struct_1(true), vec3<f32>(arg_1.x, arg_1.x, 845f), select(vec4<bool>(true, true, true, true), vec4<bool>(true, false, true, false), false)), vec4<i32>(1i, 1i, 1i, 1i), Struct_2(_wgslsmith_f_op_f32(-arg_1.x), Struct_1(true), arg_1, select(vec4<bool>(true, true, false, true), vec4<bool>(false, false, false, false), vec4<bool>(true, true, true, false))), Struct_1(true)), _wgslsmith_f_op_f32(-arg_1.x), ~vec2<i32>(1i, 1i) >> (~_wgslsmith_add_vec2_u32(vec2<u32>(56422u, u_input.a.x), u_input.d.yx) % vec2<u32>(32u)), firstLeadingBit(~vec4<u32>(16812u, global0.x, 1u, 36402u)) | _wgslsmith_div_vec4_u32(~vec4<u32>(4486u, arg_0.x, 4294967295u, 51530u), _wgslsmith_add_vec4_u32(vec4<u32>(u_input.b, 4294967295u, u_input.b, u_input.c), vec4<u32>(73533u, 4294967295u, 152769u, 51424u)))));
        return select(var_0.d.d, vec4<bool>(var_0.d.b.a, !var_0.d.b.a, var_0.d.d.x, false), vec4<bool>(true, true, !(!(arg_0.x >= 42048u)), var_0.d.b.a));
    }
    for (var var_0 = -11570i; var_0 < 0i; var_0 += 1i) {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        break;
    }
    var var_0 = _wgslsmith_f_op_f32(-arg_1.x);
    loop {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        var_0 = arg_1.x;
        global0 = ~arg_0;
        var var_1 = Struct_1(any(select(func_7(vec2<bool>(false, true), u_input.c, Struct_4(Struct_3(-135f, Struct_2(arg_1.x, Struct_1(true), vec3<f32>(arg_1.x, arg_1.x, arg_1.x), vec4<bool>(true, false, false, false)), vec4<i32>(i32(-2147483648), 0i, -36782i, 14957i), Struct_2(arg_1.x, Struct_1(true), vec3<f32>(938f, 1127f, -553f), vec4<bool>(false, false, true, false)), Struct_1(false)), arg_1.x, vec2<i32>(24767i, -1i), vec4<u32>(arg_0.x, 80990u, global0.x, arg_0.x))).d.d, select(vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true), select(vec4<bool>(true, false, true, true), vec4<bool>(true, false, true, true), true)), false)));
    }
    return !select(!select(vec4<bool>(true, true, true, true), vec4<bool>(false, false, true, true), true), vec4<bool>(true, any(vec3<bool>(false, true, false)), all(vec4<bool>(true, true, true, true)), arg_0.x > 1u), func_7(vec2<bool>(arg_2 != u_input.d.x, true), ~_wgslsmith_dot_vec4_u32(vec4<u32>(10090u, arg_0.x, arg_2, 906u), vec4<u32>(27620u, 29380u, 0u, 1u)), Struct_4(Struct_3(arg_1.x, Struct_2(-296f, Struct_1(false), vec3<f32>(arg_1.x, arg_1.x, arg_1.x), vec4<bool>(true, false, true, false)), vec4<i32>(i32(-2147483648), -36907i, -22829i, 26378i), Struct_2(arg_1.x, Struct_1(true), vec3<f32>(-444f, arg_1.x, arg_1.x), vec4<bool>(false, true, true, true)), Struct_1(true)), _wgslsmith_f_op_f32(-1000f), _wgslsmith_clamp_vec2_i32(vec2<i32>(2147483647i, 1i), vec2<i32>(-30282i, 0i), vec2<i32>(-39623i, i32(-2147483648))), countOneBits(vec4<u32>(1u, global0.x, arg_0.x, global0.x)))).d.d);
}

fn func_3(arg_0: f32) -> Struct_1 {
    let var_0 = Struct_3(arg_0, Struct_2(-952f, Struct_1(all(select(vec3<bool>(true, false, true), vec3<bool>(true, true, true), vec3<bool>(false, false, true)))), vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -549f)), _wgslsmith_div_f32(arg_0, arg_0), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(arg_0)))), select(!func_4(vec3<u32>(u_input.b, u_input.a.x, global0.x), vec3<f32>(arg_0, arg_0, -151f), u_input.a.x), vec4<bool>(true, true, true, true), func_5().x)), _wgslsmith_mod_vec4_i32(_wgslsmith_div_vec4_i32(vec4<i32>(~(-70791i), 1i, 11164i, select(-1i, i32(-2147483648), true)), vec4<i32>(abs(7566i), 1i, 1i, 1i)), vec4<i32>(_wgslsmith_div_i32(_wgslsmith_sub_i32(-11322i, 15076i), 1i), _wgslsmith_div_i32(_wgslsmith_sub_i32(9961i, -16797i), _wgslsmith_dot_vec4_i32(vec4<i32>(i32(-2147483648), 0i, 37042i, 4525i), vec4<i32>(2147483647i, -1i, 2147483647i, 2831i))), 0i, 0i)), Struct_2(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-1741f), _wgslsmith_f_op_f32(func_6()))))), func_7(func_5(), 3507u, Struct_4(Struct_3(arg_0, Struct_2(arg_0, Struct_1(true), vec3<f32>(arg_0, arg_0, arg_0), vec4<bool>(false, false, false, false)), vec4<i32>(40772i, -1i, -1i, -76877i), Struct_2(-1113f, Struct_1(true), vec3<f32>(-1125f, -865f, arg_0), vec4<bool>(false, false, true, false)), Struct_1(false)), _wgslsmith_f_op_f32(exp2(arg_0)), -vec2<i32>(24949i, -1i), vec4<u32>(14569u, 1u, 4294967295u, u_input.b))).d.b, _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(arg_0, arg_0, arg_0) * vec3<f32>(arg_0, arg_0, -1652f)) * _wgslsmith_f_op_vec3_f32(vec3<f32>(arg_0, -268f, -493f) + vec3<f32>(arg_0, arg_0, -701f))) * _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(arg_0, -373f, arg_0) + vec3<f32>(arg_0, arg_0, -716f)) + _wgslsmith_f_op_vec3_f32(-vec3<f32>(1332f, arg_0, arg_0)))), !select(vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true), vec4<bool>(false, true, false, false))), func_7(func_7(func_7(select(vec2<bool>(true, true), vec2<bool>(true, false), vec2<bool>(false, false)), 103583u, Struct_4(Struct_3(arg_0, Struct_2(arg_0, Struct_1(true), vec3<f32>(-381f, arg_0, arg_0), vec4<bool>(true, false, true, false)), vec4<i32>(0i, 2147483647i, i32(-2147483648), -34562i), Struct_2(arg_0, Struct_1(false), vec3<f32>(506f, arg_0, -980f), vec4<bool>(false, false, true, true)), Struct_1(false)), -272f, vec2<i32>(-1i, 0i), vec4<u32>(u_input.b, 8977u, 40277u, u_input.c))).d.d.yx, countOneBits(firstLeadingBit(4294967295u)), Struct_4(Struct_3(-997f, Struct_2(-1441f, Struct_1(true), vec3<f32>(arg_0, -281f, arg_0), vec4<bool>(true, false, true, true)), vec4<i32>(i32(-2147483648), -38469i, -1i, 2147483647i), Struct_2(arg_0, Struct_1(true), vec3<f32>(-876f, arg_0, -989f), vec4<bool>(false, true, true, true)), Struct_1(false)), _wgslsmith_f_op_f32(-1037f), max(vec2<i32>(38465i, 5081i), vec2<i32>(1i, -14513i)), ~vec4<u32>(u_input.d.x, global0.x, 4294967295u, 44600u))).d.d.zx, 1u, Struct_4(Struct_3(_wgslsmith_f_op_f32(arg_0 * 358f), Struct_2(375f, Struct_1(false), vec3<f32>(393f, arg_0, arg_0), vec4<bool>(false, true, false, true)), abs(vec4<i32>(-13433i, -37491i, -1i, -6402i)), Struct_2(-331f, Struct_1(false), vec3<f32>(1440f, arg_0, arg_0), vec4<bool>(false, true, false, true)), func_7(vec2<bool>(true, true), 1091u, Struct_4(Struct_3(-1000f, Struct_2(-1642f, Struct_1(true), vec3<f32>(-1014f, 1987f, arg_0), vec4<bool>(true, true, true, true)), vec4<i32>(1i, 1i, 2147483647i, 27214i), Struct_2(arg_0, Struct_1(true), vec3<f32>(-908f, 363f, arg_0), vec4<bool>(false, true, false, false)), Struct_1(false)), -1925f, vec2<i32>(1i, 2147483647i), vec4<u32>(1u, 3884u, 26045u, 2749u))).d.b), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-2461f - 244f)), ~vec2<i32>(8808i, 54031i), vec4<u32>(30183u, 24481u & u_input.d.x, abs(91971u), ~u_input.c))).d.b);
    switch (~35248i) {
        default: {
            loop {
                if (LOOP_COUNTERS[12u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
            }
            if (true) {
                var var_1 = Struct_3(415f, func_7(var_0.d.d.yw, u_input.c, Struct_4(var_0, func_7(vec2<bool>(true, true), _wgslsmith_sub_u32(global0.x, 1u), Struct_4(Struct_3(arg_0, var_0.d, vec4<i32>(var_0.c.x, -1i, var_0.c.x, var_0.c.x), var_0.d, var_0.d.b), -1583f, var_0.c.wx, vec4<u32>(1u, 4294967295u, u_input.c, 4294967295u))).d.c.x, ~vec2<i32>(var_0.c.x, var_0.c.x), ~(~vec4<u32>(35243u, u_input.a.x, 33214u, 75370u)))).d, _wgslsmith_add_vec4_i32(-_wgslsmith_mult_vec4_i32(vec4<i32>(20163i, 26696i, -1i, var_0.c.x), firstLeadingBit(var_0.c)), var_0.c ^ var_0.c), Struct_2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(func_6())))), Struct_1(true), _wgslsmith_f_op_vec3_f32(-var_0.d.c), vec4<bool>(!var_0.b.b.a, _wgslsmith_f_op_f32(-355f + -828f) >= _wgslsmith_f_op_f32(372f + var_0.b.c.x), any(!var_0.d.d), !select(var_0.b.d.x, var_0.b.d.x, false))), func_7(select(var_0.b.d.zx, var_0.b.d.wx, any(vec2<bool>(false, var_0.b.d.x))), min(select(34742u, u_input.d.x, false), global0.x >> (~10271u % 32u)), Struct_4(Struct_3(arg_0, Struct_2(-989f, Struct_1(true), var_0.b.c, var_0.d.d), var_0.c, Struct_2(-681f, var_0.b.b, var_0.d.c, vec4<bool>(var_0.d.d.x, false, var_0.e.a, var_0.e.a)), Struct_1(var_0.e.a)), arg_0, var_0.c.yy, min(select(vec4<u32>(u_input.b, 1u, global0.x, u_input.b), vec4<u32>(u_input.d.x, 40235u, 1u, u_input.d.x), var_0.e.a), vec4<u32>(u_input.b, 24337u, global0.x, 22781u)))).d.b);
                global0 = ~u_input.d;
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        let var_1 = true;
        for (; true; ) {
            if (LOOP_COUNTERS[14u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        }
    }
    let var_1 = ((var_0.c.x ^ -_wgslsmith_sub_i32(24134i, -1i)) >> (u_input.b % 32u)) << (firstTrailingBit(_wgslsmith_sub_u32(1u & func_7(var_0.b.d.wx, global0.x, Struct_4(var_0, var_0.b.c.x, var_0.c.yy, vec4<u32>(1u, u_input.c, global0.x, 1u))).b.x, reverseBits(global0.x))) % 32u);
    for (var var_2: i32; func_5().x; var_2 -= 1i) {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
        global0 = _wgslsmith_mod_vec3_u32(firstLeadingBit(~u_input.d), ~vec3<u32>(~(u_input.d.x << (3737u % 32u)), ~(~1u), u_input.b));
        for (; !var_0.d.d.x; ) {
            if (LOOP_COUNTERS[16u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
            let var_3 = func_7(select(var_0.b.d.xw, !(!var_0.b.d.xz), vec2<bool>(var_0.b.d.x, true)), global0.x, Struct_4(Struct_3(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-1128f), _wgslsmith_f_op_f32(arg_0 - arg_0))), func_7(vec2<bool>(var_0.b.b.a, var_0.b.b.a), global0.x ^ u_input.b, Struct_4(Struct_3(var_0.b.a, Struct_2(-806f, var_0.e, vec3<f32>(arg_0, arg_0, arg_0), var_0.b.d), var_0.c, Struct_2(442f, var_0.d.b, vec3<f32>(-381f, 1000f, var_0.a), var_0.b.d), var_0.d.b), arg_0, var_0.c.zz, vec4<u32>(93406u, 0u, 5861u, global0.x))).d, _wgslsmith_clamp_vec4_i32(var_0.c, vec4<i32>(1i, var_0.c.x, -31818i, 0i), reverseBits(var_0.c)), Struct_2(_wgslsmith_div_f32(-473f, -341f), var_0.e, vec3<f32>(arg_0, arg_0, var_0.b.a), select(var_0.d.d, var_0.b.d, vec4<bool>(var_0.d.d.x, true, false, var_0.e.a))), var_0.d.b), var_0.a, -vec2<i32>(countOneBits(2766i), var_0.c.x), vec4<u32>(global0.x, ~u_input.b, 29572u, 4294967295u))).d.d.wzy;
            continue;
        }
        break;
    }
    return func_7(var_0.b.d.yx, 1u, Struct_4(Struct_3(_wgslsmith_f_op_f32(var_0.d.a * -420f), var_0.d, -_wgslsmith_add_vec4_i32(var_0.c, vec4<i32>(var_0.c.x, var_0.c.x, var_0.c.x, 18466i)), func_7(!var_0.b.d.yx, u_input.c, Struct_4(var_0, -429f, vec2<i32>(var_0.c.x, var_1), vec4<u32>(30441u, 71712u, 1u, u_input.b))).d, var_0.e), arg_0, ~var_0.c.wx, ~vec4<u32>(1u, _wgslsmith_dot_vec3_u32(u_input.d, u_input.d), countOneBits(0u), 1u))).d.b;
}

fn func_8(arg_0: Struct_3, arg_1: Struct_3) -> vec3<bool> {
    for (var var_0 = min(2147483647i, countOneBits(arg_0.c.x)); var_0 != -1i; global0 = vec3<u32>(1u, ~21749u, 0u)) {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
        break;
    }
    global0 = ~u_input.d | u_input.d;
    var var_0 = -1226f;
    global0 = u_input.d;
    if (-44083i < arg_0.c.x) {
        var_0 = arg_0.d.c.x;
    }
    return vec3<bool>(arg_0.b.b.a, all(func_5()), arg_0.e.a);
}

fn func_2(arg_0: bool, arg_1: vec2<bool>, arg_2: bool, arg_3: Struct_2) -> Struct_2 {
    var var_0 = !(!arg_3.d.xxz);
    loop {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        continue;
    }
    var_0 = select(func_8(Struct_3(1459f, arg_3, vec4<i32>(1i, 1i, 1i, 1i), arg_3, func_3(270f)), Struct_3(func_7(vec2<bool>(true, arg_1.x), 0u, Struct_4(Struct_3(553f, arg_3, vec4<i32>(-13850i, 0i, 2147483647i, -30161i), Struct_2(1673f, arg_3.b, vec3<f32>(338f, 480f, arg_3.c.x), vec4<bool>(var_0.x, arg_0, arg_1.x, arg_0)), arg_3.b), 728f, vec2<i32>(0i, -5648i), vec4<u32>(global0.x, global0.x, global0.x, u_input.a.x))).d.c.x, arg_3, vec4<i32>(1i, 1i, 1i, 1i), Struct_2(arg_3.a, func_3(1000f), _wgslsmith_f_op_vec3_f32(trunc(arg_3.c)), vec4<bool>(arg_0, arg_0, true, var_0.x)), func_7(vec2<bool>(true, true), abs(22894u), Struct_4(Struct_3(775f, arg_3, vec4<i32>(i32(-2147483648), 2147483647i, 0i, 8881i), arg_3, arg_3.b), -438f, vec2<i32>(-20665i, 38604i), vec4<u32>(132967u, u_input.a.x, global0.x, 1u))).d.b)), func_8(Struct_3(_wgslsmith_f_op_f32(-471f), func_7(!arg_3.d.yx, u_input.b, Struct_4(Struct_3(arg_3.a, Struct_2(1066f, arg_3.b, vec3<f32>(-1173f, arg_3.a, arg_3.a), vec4<bool>(false, true, arg_0, true)), vec4<i32>(-32148i, i32(-2147483648), 4097i, -1151i), arg_3, Struct_1(arg_0)), -125f, vec2<i32>(1265i, 0i), vec4<u32>(u_input.d.x, 4294967295u, 0u, global0.x))).d, ~vec4<i32>(68292i, 0i, 46315i, 1i), Struct_2(_wgslsmith_f_op_f32(-arg_3.a), arg_3.b, _wgslsmith_f_op_vec3_f32(arg_3.c * vec3<f32>(747f, arg_3.c.x, arg_3.c.x)), !arg_3.d), arg_3.b), Struct_3(arg_3.a, arg_3, vec4<i32>(_wgslsmith_dot_vec4_i32(vec4<i32>(30794i, 0i, -11837i, i32(-2147483648)), vec4<i32>(2147483647i, -1i, -12248i, -1i)), i32(-1i) * -29710i, 1i, ~42032i), func_7(arg_3.d.zy, 0u, Struct_4(Struct_3(-1398f, Struct_2(-922f, Struct_1(arg_2), arg_3.c, arg_3.d), vec4<i32>(2147483647i, -27733i, 1i, 2147483647i), arg_3, arg_3.b), -656f, vec2<i32>(1i, 18551i), vec4<u32>(u_input.c, 1u, global0.x, 1u))).d, func_3(_wgslsmith_f_op_f32(exp2(arg_3.a))))), any(arg_3.d));
    var_0 = !(!vec3<bool>(true & arg_0, !(!var_0.x), func_8(Struct_3(arg_3.c.x, Struct_2(1244f, arg_3.b, vec3<f32>(arg_3.c.x, arg_3.c.x, arg_3.a), arg_3.d), vec4<i32>(-14515i, 0i, i32(-2147483648), 38334i), Struct_2(arg_3.a, Struct_1(false), vec3<f32>(-499f, arg_3.a, 362f), vec4<bool>(false, false, true, var_0.x)), Struct_1(false)), Struct_3(-1424f, Struct_2(-342f, arg_3.b, vec3<f32>(1000f, 416f, arg_3.c.x), arg_3.d), vec4<i32>(1i, i32(-2147483648), 1i, -18135i), Struct_2(-313f, arg_3.b, vec3<f32>(arg_3.c.x, 1000f, arg_3.c.x), vec4<bool>(arg_2, false, arg_3.b.a, arg_0)), Struct_1(var_0.x))).x));
    loop {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
    }
    return arg_3;
}

fn func_9(arg_0: Struct_3, arg_1: Struct_2, arg_2: Struct_3) -> vec3<u32> {
    let var_0 = arg_0;
    let var_1 = select(select(!arg_1.d.wyy, func_8(Struct_3(655f, arg_2.d, -vec4<i32>(6174i, arg_2.c.x, var_0.c.x, i32(-2147483648)), arg_2.b, Struct_1(var_0.d.d.x)), var_0), vec3<bool>(!(!var_0.e.a), false, func_4(vec3<u32>(1u, u_input.b, global0.x) >> (vec3<u32>(1u, global0.x, u_input.b) % vec3<u32>(32u)), _wgslsmith_f_op_vec3_f32(arg_2.d.c - arg_2.d.c), _wgslsmith_mod_u32(global0.x, u_input.c)).x)), vec3<bool>(false, all(arg_2.b.d.zyz), (0u >> (1u % 32u)) > abs(reverseBits(u_input.b))), select(vec3<bool>(func_3(_wgslsmith_f_op_f32(func_6())).a, true, func_8(Struct_3(-607f, arg_1, vec4<i32>(arg_0.c.x, 68613i, var_0.c.x, i32(-2147483648)), Struct_2(arg_1.c.x, arg_2.e, vec3<f32>(-1242f, arg_0.d.a, arg_1.a), vec4<bool>(arg_1.b.a, arg_0.e.a, arg_1.d.x, false)), Struct_1(arg_1.d.x)), Struct_3(-528f, arg_1, arg_0.c, Struct_2(-445f, var_0.d.b, vec3<f32>(arg_1.c.x, var_0.b.a, var_0.a), vec4<bool>(arg_0.b.d.x, true, false, arg_2.e.a)), arg_1.b)).x), arg_1.d.wwx, true));
    var var_2 = vec4<u32>(~u_input.a.x, 0u, global0.x, global0.x << (u_input.c % 32u));
    for (var var_3 = 2147483647i; var_3 == i32(-2147483648); var_3 += 1i) {
        if (LOOP_COUNTERS[20u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
        var_3 = 16953i;
        global0 = ~_wgslsmith_add_vec3_u32(~(~var_2.xxz), _wgslsmith_mult_vec3_u32(vec3<u32>(var_2.x, global0.x, 0u) & vec3<u32>(30520u, 16875u, 0u), ~vec3<u32>(u_input.d.x, 33655u, 115871u)) ^ vec3<u32>(54251u, 4294967295u, _wgslsmith_add_u32(18060u, 36689u)));
        let var_4 = select(u_input.d, _wgslsmith_div_vec3_u32(firstLeadingBit(_wgslsmith_clamp_vec3_u32(_wgslsmith_sub_vec3_u32(u_input.d, var_2.zxx), vec3<u32>(1u, 13728u, 4294967295u) >> (u_input.d % vec3<u32>(32u)), max(var_2.zxw, vec3<u32>(0u, 110411u, 49897u)))), ~abs(firstLeadingBit(var_2.xzz))), func_8(arg_2, Struct_3(func_7(vec2<bool>(false, var_1.x), 2670u, Struct_4(var_0, arg_1.c.x, arg_0.c.yx, vec4<u32>(11256u, 64779u, 41246u, u_input.a.x))).d.c.x, Struct_2(_wgslsmith_f_op_f32(arg_1.c.x - arg_2.d.c.x), arg_1.b, arg_1.c, arg_1.d), _wgslsmith_mod_vec4_i32(_wgslsmith_div_vec4_i32(vec4<i32>(var_0.c.x, arg_2.c.x, -21279i, -1i), vec4<i32>(arg_0.c.x, arg_0.c.x, arg_0.c.x, arg_2.c.x)), abs(arg_0.c)), arg_1, arg_1.b)));
        continue;
    }
    let var_3 = min(i32(-1i) * 0i, countOneBits(arg_2.c.x)) & _wgslsmith_mod_i32(max(0i, 80129i), max(~var_0.c.x, 33118i) & 0i);
    return var_2.zzy;
}

fn func_1(arg_0: Struct_1) -> bool {
    global0 = max(~func_9(Struct_3(-403f, Struct_2(1109f, Struct_1(true), vec3<f32>(684f, -414f, -192f), vec4<bool>(arg_0.a, arg_0.a, false, true)), vec4<i32>(1i, 1i, 1i, 1i), func_2(false, vec2<bool>(arg_0.a, true), arg_0.a, Struct_2(-1994f, arg_0, vec3<f32>(-101f, -140f, 622f), vec4<bool>(arg_0.a, false, arg_0.a, false))), func_7(vec2<bool>(false, true), u_input.c, Struct_4(Struct_3(-371f, Struct_2(-374f, arg_0, vec3<f32>(-1000f, -691f, 980f), vec4<bool>(arg_0.a, arg_0.a, true, true)), vec4<i32>(-18986i, 2341i, 0i, 0i), Struct_2(-1362f, Struct_1(arg_0.a), vec3<f32>(-1337f, 517f, 635f), vec4<bool>(false, true, arg_0.a, arg_0.a)), Struct_1(arg_0.a)), 1000f, vec2<i32>(1i, -37374i), vec4<u32>(u_input.b, global0.x, 4294967295u, global0.x))).d.b), func_2(all(vec3<bool>(false, arg_0.a, false)), func_7(vec2<bool>(arg_0.a, arg_0.a), 52047u, Struct_4(Struct_3(-1000f, Struct_2(748f, Struct_1(false), vec3<f32>(-1552f, 1314f, -732f), vec4<bool>(false, false, true, arg_0.a)), vec4<i32>(i32(-2147483648), 0i, -13709i, -1i), Struct_2(-2276f, Struct_1(false), vec3<f32>(1716f, 870f, 621f), vec4<bool>(arg_0.a, true, false, false)), Struct_1(arg_0.a)), -1586f, vec2<i32>(34292i, 9847i), vec4<u32>(0u, 58491u, 112248u, 4294967295u))).d.d.wy, !arg_0.a, Struct_2(-2139f, arg_0, vec3<f32>(1954f, -1278f, 656f), vec4<bool>(arg_0.a, true, false, true))), Struct_3(-816f, func_7(vec2<bool>(false, false), u_input.a.x, Struct_4(Struct_3(-326f, Struct_2(-1267f, Struct_1(arg_0.a), vec3<f32>(1738f, 405f, -1802f), vec4<bool>(true, arg_0.a, false, arg_0.a)), vec4<i32>(0i, 2147483647i, -13342i, -13430i), Struct_2(1815f, arg_0, vec3<f32>(-291f, 1000f, 1000f), vec4<bool>(arg_0.a, true, arg_0.a, true)), arg_0), -887f, vec2<i32>(0i, i32(-2147483648)), vec4<u32>(1u, 0u, global0.x, u_input.b))).d, min(vec4<i32>(19418i, 0i, 0i, 53348i), vec4<i32>(-1i, 1i, 4646i, 28250i)), Struct_2(-839f, arg_0, vec3<f32>(1397f, -397f, 182f), vec4<bool>(arg_0.a, arg_0.a, arg_0.a, true)), func_3(457f))), ~(~_wgslsmith_div_vec3_u32(u_input.d, vec3<u32>(22317u, global0.x, 1u) ^ vec3<u32>(global0.x, 9621u, 4294967295u))));
    let var_0 = _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-1497f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(147f - 102f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(func_6()) + _wgslsmith_f_op_f32(ceil(1418f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(171f, 297f)) * 1447f))), vec4<f32>(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(trunc(-658f)))), _wgslsmith_f_op_f32(sign(421f)), _wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-359f - 587f), _wgslsmith_f_op_f32(-559f)) - _wgslsmith_f_op_f32(418f - _wgslsmith_f_op_f32(floor(921f)))), _wgslsmith_f_op_f32(1000f + 849f)));
    let var_1 = arg_0.a;
    global0 = u_input.d;
    switch (1i) {
        default: {
            let var_2 = arg_0;
            switch (~_wgslsmith_dot_vec2_i32((select(vec2<i32>(28380i, -4177i), vec2<i32>(29442i, -1i), false) >> (vec2<u32>(global0.x, 6035u) % vec2<u32>(32u))) ^ ~select(vec2<i32>(-51872i, 9410i), vec2<i32>(108120i, -1213i), vec2<bool>(var_2.a, var_1)), -vec2<i32>(1i, 1i))) {
                case -35954i: {
                    let var_3 = Struct_5(~u_input.a.x, ~(~(~(~vec4<u32>(1u, u_input.c, 4294967295u, 1u)))), countOneBits(0i), Struct_2(_wgslsmith_f_op_f32(1417f - _wgslsmith_f_op_f32(abs(var_0.x))), var_2, _wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(sign(var_0.x)), _wgslsmith_div_f32(var_0.x, var_0.x), 274f) - _wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(var_0.x, 791f, var_0.x)))), !func_2(select(var_2.a, false, true), func_4(u_input.d, vec3<f32>(-615f, 1718f, -1276f), u_input.c).zz, var_1, func_2(var_2.a, vec2<bool>(var_2.a, var_2.a), var_1, Struct_2(-1120f, arg_0, vec3<f32>(1170f, 1398f, var_0.x), vec4<bool>(var_2.a, arg_0.a, arg_0.a, false)))).d));
                    global0 = reverseBits(~(~vec3<u32>(var_3.a, 8941u, _wgslsmith_mult_u32(54352u, u_input.c))));
                    let var_4 = func_5();
                }
                case 0i: {
                }
                case -1i: {
                    let var_3 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_0.x))))) - func_7(func_7(func_5(), _wgslsmith_mod_u32(u_input.b, _wgslsmith_sub_u32(u_input.a.x, 438u)), Struct_4(Struct_3(var_0.x, Struct_2(var_0.x, arg_0, var_0.xyy, vec4<bool>(arg_0.a, true, var_2.a, false)), vec4<i32>(29737i, 2147483647i, 42868i, 40152i), Struct_2(-229f, Struct_1(var_1), var_0.zzw, vec4<bool>(false, true, true, false)), Struct_1(false)), _wgslsmith_f_op_f32(func_6()), ~vec2<i32>(23i, -26512i), vec4<u32>(79703u, u_input.a.x, 18105u, u_input.b))).d.d.zx, firstLeadingBit(global0.x) ^ ~max(26561u, u_input.d.x), Struct_4(Struct_3(569f, Struct_2(1605f, arg_0, var_0.yzy, vec4<bool>(arg_0.a, var_1, false, arg_0.a)), _wgslsmith_clamp_vec4_i32(vec4<i32>(-6267i, 2147483647i, -9082i, 0i), vec4<i32>(24747i, 34145i, -5347i, 9644i), vec4<i32>(-21355i, 1i, -16616i, 37035i)), Struct_2(-1479f, Struct_1(arg_0.a), vec3<f32>(var_0.x, var_0.x, 612f), vec4<bool>(var_1, var_2.a, var_1, var_2.a)), Struct_1(false)), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(max(-607f, -547f)))), select(max(vec2<i32>(1i, 2147483647i), vec2<i32>(1i, 1i)), _wgslsmith_clamp_vec2_i32(vec2<i32>(-10220i, -38034i), vec2<i32>(-1i, i32(-2147483648)), vec2<i32>(0i, i32(-2147483648))), vec2<bool>(var_2.a, false)), _wgslsmith_add_vec4_u32(_wgslsmith_div_vec4_u32(vec4<u32>(global0.x, 15173u, global0.x, u_input.b), vec4<u32>(15004u, global0.x, 10392u, u_input.d.x)), func_7(vec2<bool>(var_1, var_2.a), global0.x, Struct_4(Struct_3(-508f, Struct_2(var_0.x, Struct_1(true), var_0.yyz, vec4<bool>(false, var_2.a, false, arg_0.a)), vec4<i32>(2147483647i, 0i, -6726i, 1i), Struct_2(709f, arg_0, var_0.zyz, vec4<bool>(var_2.a, true, arg_0.a, false)), var_2), var_0.x, vec2<i32>(2147483647i, 7874i), vec4<u32>(1u, global0.x, global0.x, 68913u))).b))).d.c.x);
                }
                case 2147483647i: {
                    let var_3 = Struct_1(var_1);
                    global0 = ~vec3<u32>(~(~u_input.c), global0.x, ~_wgslsmith_sub_u32(global0.x, 4294967295u)) | ~(~_wgslsmith_mult_vec3_u32(u_input.d << (u_input.d % vec3<u32>(32u)), select(vec3<u32>(68064u, u_input.c, u_input.c), vec3<u32>(52198u, u_input.b, global0.x), vec3<bool>(var_2.a, var_1, false))));
                }
                default: {
                    global0 = u_input.d;
                    global0 = vec3<u32>(1u, min(func_7(vec2<bool>(true, true), func_9(Struct_3(-843f, Struct_2(var_0.x, var_2, vec3<f32>(471f, -1739f, -153f), vec4<bool>(false, true, false, false)), vec4<i32>(31016i, 0i, 5507i, 0i), Struct_2(var_0.x, Struct_1(false), vec3<f32>(-1311f, 2098f, var_0.x), vec4<bool>(var_1, var_1, false, true)), arg_0), func_2(arg_0.a, vec2<bool>(var_1, var_1), arg_0.a, Struct_2(-580f, Struct_1(false), var_0.zzx, vec4<bool>(var_2.a, true, true, false))), Struct_3(var_0.x, Struct_2(var_0.x, arg_0, var_0.zxy, vec4<bool>(var_1, false, false, false)), vec4<i32>(41263i, -1i, -73880i, -1i), Struct_2(var_0.x, Struct_1(true), var_0.wxw, vec4<bool>(arg_0.a, var_2.a, var_1, true)), Struct_1(false))).x, Struct_4(Struct_3(var_0.x, Struct_2(-653f, arg_0, var_0.wxz, vec4<bool>(arg_0.a, arg_0.a, false, false)), vec4<i32>(-1i, i32(-2147483648), i32(-2147483648), 1i), Struct_2(-1361f, arg_0, vec3<f32>(-1117f, var_0.x, -1000f), vec4<bool>(false, var_1, var_1, true)), Struct_1(arg_0.a)), 409f, vec2<i32>(1i, 1i), vec4<u32>(87605u, global0.x, 22253u, global0.x))).a, 1u), _wgslsmith_add_u32(min(4116u, global0.x), 9607u));
                    var var_3 = var_2;
                    var var_4 = _wgslsmith_f_op_vec4_f32(-var_0);
                }
            }
            for (var var_3 = 0i; arg_0.a; ) {
                if (LOOP_COUNTERS[21u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
                global0 = u_input.d;
                var_3 = i32(-2147483648);
            }
            var var_3 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(1017f - 483f), var_0.x, _wgslsmith_f_op_f32(sign(var_0.x)), var_0.x) - _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(var_0 - vec4<f32>(-1599f, 112f, var_0.x, var_0.x)))))));
        }
    }
    return true;
}

@compute
@workgroup_size(1)
fn main() {
    var var_0 = global0.x;
    switch (i32(-1i) * -_wgslsmith_dot_vec4_i32(vec4<i32>(1i, 1i, 1i, 1i), countOneBits(vec4<i32>(2147483647i, -1i, -2432i, 20330i)))) {
        default: {
        }
    }
    switch (~27401i) {
        case 0i: {
            var var_1 = select(!vec4<bool>(select(true, true, true), (46981i >> (global0.x % 32u)) > (2147483647i >> (u_input.c % 32u)), func_1(Struct_1(true)), any(select(vec4<bool>(false, false, true, true), vec4<bool>(true, false, true, true), false))), !func_7(vec2<bool>(true, func_1(Struct_1(false))), reverseBits(~1u), Struct_4(Struct_3(1424f, Struct_2(-148f, Struct_1(true), vec3<f32>(-1977f, 142f, -1256f), vec4<bool>(false, false, false, false)), vec4<i32>(i32(-2147483648), -17382i, 0i, 1i), Struct_2(2838f, Struct_1(false), vec3<f32>(-1075f, 745f, -490f), vec4<bool>(false, false, false, true)), Struct_1(true)), -1209f, vec2<i32>(1i, 1i), select(vec4<u32>(45337u, u_input.a.x, u_input.b, u_input.b), vec4<u32>(34868u, global0.x, global0.x, 54357u), false))).d.d, !(!vec4<bool>(u_input.c <= global0.x, true, select(true, true, false), false)));
            for (; false; ) {
                if (LOOP_COUNTERS[22u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
                let var_2 = Struct_5(~0u, firstLeadingBit(~select(vec4<u32>(global0.x, 4294967295u, global0.x, 1u), vec4<u32>(37054u, 4294967295u, 34530u, u_input.b), var_1.x) | vec4<u32>(firstTrailingBit(global0.x), ~u_input.a.x, u_input.b, u_input.c)), min(countOneBits(_wgslsmith_mult_i32(19464i, -29026i)), _wgslsmith_div_i32(reverseBits(0i), min(-9746i, ~3802i))), func_2((_wgslsmith_div_u32(48089u, global0.x) >= (global0.x & u_input.c)) && var_1.x, func_5(), true, func_7(func_2(var_1.x, vec2<bool>(var_1.x, false), false, Struct_2(376f, Struct_1(true), vec3<f32>(913f, -992f, 1651f), vec4<bool>(var_1.x, true, var_1.x, false))).d.wz, 1u, Struct_4(Struct_3(-859f, Struct_2(-122f, Struct_1(var_1.x), vec3<f32>(271f, 1000f, 1070f), vec4<bool>(var_1.x, true, false, true)), vec4<i32>(43119i, 21260i, 19364i, 28518i), Struct_2(-273f, Struct_1(false), vec3<f32>(963f, 450f, 605f), vec4<bool>(var_1.x, var_1.x, false, false)), Struct_1(false)), 970f, vec2<i32>(0i, i32(-2147483648)) << (u_input.a % vec2<u32>(32u)), vec4<u32>(32598u, 1u, 41613u, u_input.d.x))).d));
                var var_3 = func_1(var_2.d.b);
                continue;
            }
            loop {
                if (LOOP_COUNTERS[23u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
                global0 = abs(u_input.d) << (select(select(vec3<u32>(~u_input.d.x, u_input.d.x, 24759u), u_input.d, !func_4(vec3<u32>(u_input.d.x, u_input.d.x, 17361u), vec3<f32>(1000f, -326f, -241f), global0.x).xzy), vec3<u32>(~11832u, firstTrailingBit(4294967295u), func_9(Struct_3(-1937f, Struct_2(2124f, Struct_1(false), vec3<f32>(-982f, -899f, 229f), vec4<bool>(var_1.x, true, var_1.x, var_1.x)), vec4<i32>(-71287i, 18369i, -8312i, i32(-2147483648)), Struct_2(214f, Struct_1(true), vec3<f32>(-232f, -812f, -450f), vec4<bool>(false, var_1.x, var_1.x, var_1.x)), Struct_1(var_1.x)), Struct_2(693f, Struct_1(true), vec3<f32>(-1186f, 240f, 1000f), vec4<bool>(var_1.x, true, var_1.x, var_1.x)), Struct_3(-464f, Struct_2(-694f, Struct_1(var_1.x), vec3<f32>(429f, 1696f, -1132f), vec4<bool>(var_1.x, false, false, var_1.x)), vec4<i32>(88722i, 2147483647i, -1i, 2147483647i), Struct_2(368f, Struct_1(false), vec3<f32>(410f, -750f, 1181f), vec4<bool>(false, var_1.x, var_1.x, false)), Struct_1(var_1.x))).x), vec3<bool>(func_2(true, select(vec2<bool>(true, var_1.x), var_1.yy, vec2<bool>(var_1.x, false)), all(var_1.zw), Struct_2(145f, Struct_1(var_1.x), vec3<f32>(1000f, -1456f, 206f), vec4<bool>(false, var_1.x, var_1.x, var_1.x))).b.a, true, true)) % vec3<u32>(32u));
            }
            let var_2 = vec3<i32>(48480i, _wgslsmith_dot_vec3_i32(max(~vec3<i32>(51163i, 16371i, 40545i) >> (vec3<u32>(u_input.d.x, global0.x, 1u) % vec3<u32>(32u)), vec3<i32>(select(1i, 0i, false), ~(-26829i), -73004i)), -vec3<i32>(1i, 1i, 1i) | vec3<i32>(func_7(var_1.yz, global0.x, Struct_4(Struct_3(223f, Struct_2(-1385f, Struct_1(var_1.x), vec3<f32>(-724f, 960f, -890f), vec4<bool>(var_1.x, var_1.x, false, var_1.x)), vec4<i32>(-4572i, 1i, 0i, 20442i), Struct_2(784f, Struct_1(true), vec3<f32>(-2099f, 673f, 1654f), vec4<bool>(var_1.x, true, var_1.x, true)), Struct_1(true)), 281f, vec2<i32>(i32(-2147483648), 8432i), vec4<u32>(93327u, global0.x, 4294967295u, u_input.b))).c, 37104i, i32(-1i) * -30006i)), _wgslsmith_sub_i32(_wgslsmith_clamp_i32(~(~31565i), 46201i, i32(-1i) * -1i), _wgslsmith_dot_vec4_i32(-abs(vec4<i32>(-23572i, 1i, 5586i, 1702i)), reverseBits(vec4<i32>(2147483647i, 1i, 1i, i32(-2147483648))))));
            let var_3 = ~_wgslsmith_div_vec2_u32(select(~vec2<u32>(u_input.b, u_input.c), ~(~vec2<u32>(global0.x, global0.x)), vec2<bool>(var_1.x, false)), _wgslsmith_add_vec2_u32(vec2<u32>(4294967295u, ~0u), vec2<u32>(_wgslsmith_add_u32(8661u, 5013u), u_input.a.x & global0.x)));
        }
        default: {
            global0 = ~func_7(func_7(vec2<bool>(true, true), u_input.c | (10192u ^ global0.x), Struct_4(Struct_3(334f, Struct_2(2264f, Struct_1(false), vec3<f32>(220f, 2617f, -1784f), vec4<bool>(true, true, false, false)), vec4<i32>(i32(-2147483648), 42435i, 470i, 0i), Struct_2(980f, Struct_1(false), vec3<f32>(-439f, -607f, 1538f), vec4<bool>(false, true, true, false)), Struct_1(true)), _wgslsmith_f_op_f32(-1722f), vec2<i32>(1i, 1i), abs(vec4<u32>(u_input.c, 71346u, 36434u, u_input.d.x)))).d.d.wx, _wgslsmith_add_u32(func_7(vec2<bool>(false, true), abs(global0.x), Struct_4(Struct_3(1921f, Struct_2(1488f, Struct_1(true), vec3<f32>(-404f, 655f, -1317f), vec4<bool>(true, true, false, true)), vec4<i32>(13372i, 0i, 1049i, 43774i), Struct_2(-1266f, Struct_1(true), vec3<f32>(615f, 212f, -914f), vec4<bool>(true, true, false, false)), Struct_1(true)), 490f, vec2<i32>(2147483647i, 1i), vec4<u32>(38777u, u_input.c, 6132u, u_input.d.x))).b.x, global0.x), Struct_4(Struct_3(-961f, func_7(vec2<bool>(false, false), global0.x, Struct_4(Struct_3(586f, Struct_2(988f, Struct_1(false), vec3<f32>(-804f, -1000f, -152f), vec4<bool>(true, true, true, false)), vec4<i32>(-14254i, 24504i, 46732i, -38321i), Struct_2(-1334f, Struct_1(false), vec3<f32>(600f, 1000f, 908f), vec4<bool>(true, true, false, true)), Struct_1(true)), -592f, vec2<i32>(49780i, -47176i), vec4<u32>(0u, 0u, 63258u, 22612u))).d, vec4<i32>(22187i, i32(-2147483648), -55281i, 8676i), Struct_2(946f, Struct_1(false), vec3<f32>(773f, -255f, -293f), vec4<bool>(false, true, false, true)), func_3(-355f)), _wgslsmith_f_op_f32(f32(-1f) * -1417f), vec2<i32>(1i, ~(-19931i)), reverseBits(_wgslsmith_mult_vec4_u32(vec4<u32>(u_input.a.x, global0.x, 1u, 1u), vec4<u32>(71288u, 0u, 4294967295u, 0u))))).b.zxw;
            loop {
                if (LOOP_COUNTERS[24u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
                var var_1 = vec2<i32>(-firstTrailingBit(_wgslsmith_dot_vec4_i32(vec4<i32>(-48273i, 2147483647i, -12789i, 12453i), vec4<i32>(1i, 23453i, 16291i, i32(-2147483648)))), func_7(vec2<bool>(true, any(vec2<bool>(false, false)) || any(vec4<bool>(true, false, true, true))), ~_wgslsmith_mult_u32(_wgslsmith_add_u32(global0.x, 31359u), 41738u), Struct_4(Struct_3(_wgslsmith_div_f32(1413f, -122f), func_2(false, vec2<bool>(true, false), true, Struct_2(396f, Struct_1(true), vec3<f32>(1445f, 658f, 336f), vec4<bool>(true, false, false, false))), min(vec4<i32>(i32(-2147483648), -26989i, -1i, -18728i), vec4<i32>(18707i, -31175i, -1i, -2297i)), func_7(vec2<bool>(false, false), 0u, Struct_4(Struct_3(-1000f, Struct_2(570f, Struct_1(true), vec3<f32>(-328f, 1000f, 1462f), vec4<bool>(true, false, true, false)), vec4<i32>(i32(-2147483648), 23338i, 1i, 1948i), Struct_2(823f, Struct_1(false), vec3<f32>(326f, -491f, -2049f), vec4<bool>(true, false, true, false)), Struct_1(true)), 1000f, vec2<i32>(1i, -1i), vec4<u32>(u_input.b, 52722u, global0.x, 53578u))).d, Struct_1(true)), _wgslsmith_f_op_f32(1f - 169f), _wgslsmith_add_vec2_i32(vec2<i32>(-17853i, 2147483647i) << (global0.xy % vec2<u32>(32u)), ~vec2<i32>(1433i, 23921i)), vec4<u32>(32142u, global0.x, global0.x, ~global0.x))).c);
                break;
            }
        }
    }
    let var_1 = func_8(Struct_3(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(floor(940f)), -205f))), Struct_2(1f, Struct_1(true), _wgslsmith_f_op_vec3_f32(round(vec3<f32>(-1897f, 921f, -817f))), !select(vec4<bool>(true, true, false, false), vec4<bool>(true, false, false, false), false)), firstLeadingBit(vec4<i32>(1i, 1i, 1i, 1i)), func_2(true, func_4(_wgslsmith_mult_vec3_u32(vec3<u32>(43941u, 4294967295u, global0.x), vec3<u32>(u_input.d.x, global0.x, 78716u)), func_2(false, vec2<bool>(false, false), true, Struct_2(633f, Struct_1(true), vec3<f32>(217f, -1262f, 911f), vec4<bool>(false, false, false, true))).c, 0u).xw, true, Struct_2(_wgslsmith_f_op_f32(-1199f), func_2(true, vec2<bool>(false, true), true, Struct_2(-143f, Struct_1(true), vec3<f32>(614f, 1635f, -146f), vec4<bool>(false, true, false, true))).b, _wgslsmith_f_op_vec3_f32(select(vec3<f32>(-304f, 1000f, 1000f), vec3<f32>(333f, -1000f, -487f), true)), vec4<bool>(true, true, true, true))), Struct_1(func_5().x)), Struct_3(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(1295f, 1000f))) * func_7(select(vec2<bool>(false, false), vec2<bool>(false, true), false), u_input.a.x ^ 13232u, Struct_4(Struct_3(457f, Struct_2(414f, Struct_1(true), vec3<f32>(955f, -369f, 418f), vec4<bool>(true, false, true, true)), vec4<i32>(i32(-2147483648), 39058i, 1i, 3876i), Struct_2(1561f, Struct_1(false), vec3<f32>(1063f, 2937f, 806f), vec4<bool>(false, false, true, false)), Struct_1(false)), 668f, vec2<i32>(5116i, i32(-2147483648)), vec4<u32>(global0.x, u_input.a.x, u_input.d.x, global0.x))).d.a), Struct_2(_wgslsmith_div_f32(1000f, _wgslsmith_f_op_f32(f32(-1f) * -1000f)), Struct_1(func_7(vec2<bool>(false, false), 19914u, Struct_4(Struct_3(-517f, Struct_2(2101f, Struct_1(true), vec3<f32>(593f, 1314f, -482f), vec4<bool>(true, false, true, false)), vec4<i32>(1i, 14704i, 2147483647i, 39279i), Struct_2(224f, Struct_1(false), vec3<f32>(1577f, 1145f, -2095f), vec4<bool>(true, false, false, false)), Struct_1(false)), -512f, vec2<i32>(-9787i, i32(-2147483648)), vec4<u32>(13389u, u_input.b, u_input.d.x, 1u))).d.b.a), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1727f, -1029f, -1435f))), !select(vec4<bool>(true, false, false, false), vec4<bool>(false, true, true, true), true)), vec4<i32>(~(i32(-2147483648)), firstLeadingBit(2147483647i), countOneBits(-1i), i32(-1i) * -7178i), Struct_2(-484f, Struct_1(true), _wgslsmith_f_op_vec3_f32(ceil(func_7(vec2<bool>(true, false), 70571u, Struct_4(Struct_3(-1526f, Struct_2(-446f, Struct_1(true), vec3<f32>(-633f, -115f, -2160f), vec4<bool>(true, false, true, true)), vec4<i32>(-1i, 75786i, 1i, 1864i), Struct_2(-919f, Struct_1(true), vec3<f32>(-1000f, 1100f, 733f), vec4<bool>(false, true, false, true)), Struct_1(true)), -1500f, vec2<i32>(1i, 2147483647i), vec4<u32>(83772u, 4294967295u, 0u, u_input.c))).d.c)), vec4<bool>(false, false, all(vec4<bool>(true, false, false, false)), true)), Struct_1(!(22527u < global0.x)))).x;
    let var_2 = firstLeadingBit((~vec4<u32>(0u, 0u, 39066u, global0.x) | ~_wgslsmith_clamp_vec4_u32(vec4<u32>(101921u, 4294967295u, u_input.a.x, global0.x), vec4<u32>(global0.x, 7161u, u_input.b, 4294967295u), vec4<u32>(u_input.d.x, global0.x, 60156u, 32842u))) >> (~abs(vec4<u32>(u_input.d.x, global0.x, 1u, 21007u)) % vec4<u32>(32u)));
    var_0 = _wgslsmith_dot_vec4_u32(vec4<u32>(global0.x, abs(21748u), _wgslsmith_mult_u32(_wgslsmith_mod_u32(35501u << (u_input.a.x % 32u), 0u), 1u), ~countOneBits(9727u)), _wgslsmith_mult_vec4_u32(var_2, vec4<u32>(1u ^ (global0.x ^ 62023u), _wgslsmith_clamp_u32(global0.x | global0.x, 4294967295u, _wgslsmith_div_u32(85218u, 1u)), _wgslsmith_sub_u32(1u, global0.x), global0.x)));
    var var_3 = !func_2(false, func_2(func_1(Struct_1(false)), vec2<bool>(all(vec2<bool>(true, true)), false), true, Struct_2(_wgslsmith_f_op_f32(f32(-1f) * -509f), func_7(vec2<bool>(false, var_1), u_input.a.x, Struct_4(Struct_3(1069f, Struct_2(-2129f, Struct_1(var_1), vec3<f32>(408f, 2259f, 395f), vec4<bool>(var_1, var_1, var_1, true)), vec4<i32>(i32(-2147483648), 15332i, -101563i, 15132i), Struct_2(-1129f, Struct_1(true), vec3<f32>(785f, -1000f, -781f), vec4<bool>(var_1, true, true, false)), Struct_1(false)), -1159f, vec2<i32>(24869i, -31476i), vec4<u32>(4294967295u, 1u, 32402u, global0.x))).d.b, vec3<f32>(-1032f, 1694f, 602f), !vec4<bool>(var_1, true, true, false))).d.zw, true, Struct_2(-2498f, Struct_1(any(vec2<bool>(var_1, false))), vec3<f32>(_wgslsmith_f_op_f32(abs(1850f)), _wgslsmith_f_op_f32(715f + 398f), _wgslsmith_f_op_f32(-663f)), vec4<bool>(true, true, !var_1, true))).d;
    let x = u_input.a;
    s_output = StorageBuffer(1i, var_2.xz);
}

`;