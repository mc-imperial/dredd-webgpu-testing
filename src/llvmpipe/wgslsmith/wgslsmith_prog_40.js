export const input = [49,20,55,91,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [49,20,55,91,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[49,20,55,91]}
// Seed: 2610676977682699216

struct Struct_1 {
    a: u32,
}

struct UniformBuffer {
    a: i32,
}

struct StorageBuffer {
    a: vec2<f32>,
    b: u32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: bool;

var<private> LOOP_COUNTERS: array<u32, 33>;

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn func_6(arg_0: vec3<f32>, arg_1: f32) -> vec4<bool> {
    let var_0 = Struct_1(~_wgslsmith_dot_vec3_u32(~(~vec3<u32>(3525u, 4294967295u, 20472u)), vec3<u32>(1u, 1u, 1u)));
    global0 = _wgslsmith_dot_vec2_u32(countOneBits(_wgslsmith_mult_vec2_u32(max(vec2<u32>(0u, 49637u), vec2<u32>(var_0.a, 27363u)), vec2<u32>(var_0.a, 4294967295u) | vec2<u32>(var_0.a, 39492u))), vec2<u32>(~var_0.a, countOneBits(~0u))) == var_0.a;
    let var_1 = Struct_1(countOneBits(~abs(4294967295u ^ var_0.a)));
    global0 = !all(vec2<bool>(false, true));
    for (var var_2 = 2147483647i; any(!select(select(vec4<bool>(false, false, true, true), vec4<bool>(false, true, true, false), vec4<bool>(false, false, true, false)), select(vec4<bool>(true, false, false, false), vec4<bool>(false, true, false, false), true), select(vec4<bool>(true, true, false, true), vec4<bool>(false, true, false, true), vec4<bool>(false, true, false, false)))) || (_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_0.x * -1182f)) - _wgslsmith_f_op_f32(arg_0.x - arg_0.x)) == _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(abs(-1526f)), _wgslsmith_div_f32(933f, arg_0.x))))); ) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        var var_3 = min(~var_1.a ^ ~select(_wgslsmith_sub_u32(114449u, var_0.a), var_1.a, false), countOneBits(_wgslsmith_mult_u32(reverseBits(~var_1.a), firstTrailingBit(84151u) ^ min(var_1.a, var_0.a))));
        loop {
            if (LOOP_COUNTERS[1u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        }
        loop {
            if (LOOP_COUNTERS[2u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        }
    }
    return !vec4<bool>(false, any(vec4<bool>(all(vec4<bool>(true, false, true, true)), true, var_1.a <= var_1.a, true)), false, select(u_input.a < u_input.a, 643f > arg_1, true));
}

fn func_5(arg_0: vec3<i32>) -> bool {
    if (true | !any(!func_6(vec3<f32>(-1236f, 1398f, 241f), -674f))) {
        var var_0 = ~_wgslsmith_mult_vec4_u32(vec4<u32>(40591u, _wgslsmith_dot_vec2_u32(vec2<u32>(4294967295u, 22596u), ~vec2<u32>(38578u, 1u)), 4294967295u, _wgslsmith_div_u32(~0u, 179u)), vec4<u32>(1u, firstLeadingBit(_wgslsmith_dot_vec4_u32(vec4<u32>(3851u, 4294967295u, 4294967295u, 1u), vec4<u32>(24401u, 1u, 0u, 4294967295u))), 4294967295u, ~(~14692u)));
        if (any(func_6(vec3<f32>(1f, 1f, 1f), 1199f).wx)) {
            var var_1 = Struct_1(firstTrailingBit(var_0.x));
            let var_2 = select(!(!select(select(vec3<bool>(true, true, false), vec3<bool>(true, false, true), true), func_6(vec3<f32>(216f, -243f, -434f), 916f).yxx, any(vec2<bool>(true, false)))), select(!(!func_6(vec3<f32>(-313f, -672f, -1451f), 1028f).zzw), vec3<bool>(true, all(select(vec3<bool>(true, false, false), vec3<bool>(true, true, false), false)), false), any(!func_6(vec3<f32>(676f, -1945f, 1619f), 1140f).wzz)), any(vec2<bool>(false, any(func_6(vec3<f32>(-528f, 1808f, 292f), 838f).ywz))));
            var var_3 = 4294967295u;
            var var_4 = ~(i32(-1i) * -34537i);
        }
        switch (_wgslsmith_mult_i32(-45654i, -arg_0.x)) {
            case 2147483647i: {
                var var_1 = Struct_1(~var_0.x);
                let var_2 = Struct_1(~var_1.a ^ reverseBits(reverseBits(var_1.a)));
                let var_3 = var_2;
                var_0 = select(_wgslsmith_add_vec4_u32(~vec4<u32>(0u, var_0.x, 4294967295u, var_2.a), _wgslsmith_sub_vec4_u32(vec4<u32>(var_0.x, var_3.a, var_0.x, 0u), ~vec4<u32>(70478u, var_1.a, var_2.a, 29573u))), vec4<u32>(_wgslsmith_sub_u32(4294967295u, 4294967295u) & _wgslsmith_dot_vec3_u32(var_0.xzz, vec3<u32>(29233u, var_1.a, 0u)), ~(~78610u), ~(~4294967295u), 1u), func_6(vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -743f), _wgslsmith_f_op_f32(f32(-1f) * -196f), _wgslsmith_f_op_f32(ceil(1524f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1000f + -380f) + _wgslsmith_f_op_f32(1125f + 1000f)))) ^ (abs(~vec4<u32>(54913u, 106157u, var_2.a, 22884u) & vec4<u32>(var_2.a, var_3.a, 0u, 28878u)) | abs(~vec4<u32>(3416u, 24275u, 16897u, var_2.a)));
            }
            case -29701i: {
                let var_1 = ~17513u;
                let var_2 = -vec2<i32>(2147483647i, arg_0.x);
                let var_3 = Struct_1(~13865u);
            }
            case 41847i: {
                var_0 = ~vec4<u32>(var_0.x, _wgslsmith_add_u32(var_0.x, var_0.x), ~13698u, 9133u) << (~firstTrailingBit(_wgslsmith_clamp_vec4_u32(vec4<u32>(4294967295u, 42283u, var_0.x, 64195u) >> (vec4<u32>(var_0.x, var_0.x, var_0.x, var_0.x) % vec4<u32>(32u)), ~vec4<u32>(var_0.x, 26421u, var_0.x, var_0.x), vec4<u32>(0u, 38233u, 30042u, 8853u))) % vec4<u32>(32u));
            }
            case i32(-2147483648): {
                global0 = true;
                let var_1 = Struct_1(~(var_0.x ^ _wgslsmith_dot_vec2_u32(var_0.yz, vec2<u32>(4294967295u, 11502u))));
                var var_2 = vec4<u32>(13565u, _wgslsmith_mult_u32(var_0.x >> ((_wgslsmith_dot_vec2_u32(vec2<u32>(var_1.a, 67866u), var_0.zy) >> (var_1.a % 32u)) % 32u), var_1.a), ~(~abs(~var_0.x)), var_1.a);
                var var_3 = 2147483647i;
            }
            default: {
                var var_1 = 189f;
                var var_2 = 1i;
                var var_3 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(step(vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(625f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-612f * -162f)), _wgslsmith_f_op_f32(402f - 1311f)), _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(1046f, 874f, -1001f)), _wgslsmith_f_op_vec3_f32(sign(vec3<f32>(1000f, 825f, 1976f)))))) - vec3<f32>(928f, _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(_wgslsmith_div_f32(304f, 1038f) + _wgslsmith_f_op_f32(-492f + -163f)))), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(floor(-1000f)))), _wgslsmith_f_op_f32(min(111f, -596f))))));
            }
        }
        switch (abs(i32(-1i) * i32(-2147483648))) {
            default: {
                let var_1 = func_6(_wgslsmith_f_op_vec3_f32(step(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(abs(vec3<f32>(-1343f, 276f, 1752f))), _wgslsmith_f_op_vec3_f32(vec3<f32>(-767f, -249f, 894f) + vec3<f32>(427f, -370f, 1686f))), vec3<f32>(_wgslsmith_f_op_f32(select(1000f, -262f, false)), _wgslsmith_f_op_f32(f32(-1f) * -117f), _wgslsmith_f_op_f32(1104f - 342f)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-776f) - _wgslsmith_div_f32(_wgslsmith_f_op_f32(round(1000f)), _wgslsmith_f_op_f32(max(-1000f, 112f))))).x && true;
            }
        }
        let var_1 = Struct_1(_wgslsmith_mult_u32(var_0.x, 1105u));
    }
    global0 = any(!vec4<bool>(true, false, 1u <= _wgslsmith_dot_vec4_u32(vec4<u32>(4294967295u, 31674u, 3326u, 85427u), vec4<u32>(1u, 0u, 29851u, 4294967295u)), any(vec2<bool>(true, true))));
    if (func_6(_wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(vec3<f32>(251f, _wgslsmith_f_op_f32(-1210f), _wgslsmith_div_f32(547f, 326f)) + _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(723f, 558f, 120f) + vec3<f32>(-1260f, -1562f, 1000f)) - _wgslsmith_f_op_vec3_f32(-vec3<f32>(232f, -1000f, -358f)))), vec3<f32>(_wgslsmith_f_op_f32(sign(1f)), _wgslsmith_div_f32(_wgslsmith_f_op_f32(trunc(-222f)), _wgslsmith_f_op_f32(-1000f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-467f) - _wgslsmith_f_op_f32(f32(-1f) * -136f))))), 747f).x) {
        var var_0 = arg_0.x;
    }
    let var_0 = true;
    let var_1 = Struct_1(firstTrailingBit(~125090u));
    return var_0;
}

fn func_4(arg_0: i32, arg_1: bool, arg_2: vec2<bool>, arg_3: Struct_1) -> Struct_1 {
    let var_0 = vec4<bool>(false, true, all(arg_2), func_5(firstTrailingBit(_wgslsmith_add_vec3_i32(vec3<i32>(u_input.a, 1i, -6177i), vec3<i32>(9351i, 24209i, -1i))) ^ -(vec3<i32>(arg_0, 1i, arg_0) >> (vec3<u32>(arg_3.a, 0u, arg_3.a) % vec3<u32>(32u)))));
    global0 = false;
    let var_1 = vec3<bool>((false || (~arg_3.a <= ~arg_3.a)) | arg_1, any(vec3<bool>(true, arg_2.x, arg_2.x)), !any(arg_2));
    var var_2 = arg_3;
    var var_3 = _wgslsmith_mult_vec2_i32(countOneBits(min(-_wgslsmith_div_vec2_i32(vec2<i32>(-1i, 16664i), vec2<i32>(2147483647i, u_input.a)), vec2<i32>(23966i, i32(-2147483648)) ^ -vec2<i32>(u_input.a, 0i))), _wgslsmith_clamp_vec2_i32(~(~vec2<i32>(6114i, arg_0)), select(_wgslsmith_sub_vec2_i32(vec2<i32>(arg_0, arg_0), vec2<i32>(-7383i, u_input.a)), reverseBits(vec2<i32>(arg_0, arg_0)), var_0.x), ~vec2<i32>(2147483647i, arg_0) & _wgslsmith_add_vec2_i32(vec2<i32>(arg_0, arg_0), vec2<i32>(28352i, -17965i))) | (vec2<i32>(-1i) * -(vec2<i32>(arg_0, arg_0) >> (vec2<u32>(71668u, 1u) % vec2<u32>(32u)))));
    return Struct_1(~(~12142u));
}

fn func_7(arg_0: Struct_1, arg_1: vec4<bool>) -> u32 {
    global0 = arg_1.x;
    let var_0 = firstLeadingBit(vec3<u32>(arg_0.a, arg_0.a, func_4(firstLeadingBit(0i), true, func_6(vec3<f32>(126f, -940f, -1501f), -326f).zw, func_4(17143i, true, arg_1.zz, Struct_1(31163u))).a)) & vec3<u32>(_wgslsmith_sub_u32(_wgslsmith_mod_u32(~arg_0.a, arg_0.a), firstTrailingBit(max(arg_0.a, arg_0.a))), _wgslsmith_sub_u32(reverseBits(~62753u), abs(arg_0.a)), 1u);
    var var_1 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -1000f), _wgslsmith_f_op_f32(step(-720f, -465f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(1262f)))) + _wgslsmith_f_op_f32(abs(_wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -886f), _wgslsmith_div_f32(-939f, 939f))))) + _wgslsmith_f_op_f32(f32(-1f) * -361f));
    switch (-5040i << (_wgslsmith_dot_vec3_u32(~(~(vec3<u32>(arg_0.a, 4294967295u, arg_0.a) >> (vec3<u32>(53953u, arg_0.a, 554u) % vec3<u32>(32u)))), var_0) % 32u)) {
        default: {
            let var_2 = vec2<bool>(!all(select(vec4<bool>(arg_1.x, arg_1.x, false, false), !arg_1, arg_1.x)), arg_1.x);
        }
    }
    switch (0i) {
        case 1i: {
            var var_2 = _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1000f))), 1885f, func_5(select(~vec3<i32>(35755i, u_input.a, 0i), select(vec3<i32>(u_input.a, 1i, 2147483647i), vec3<i32>(-1i, u_input.a, u_input.a), vec3<bool>(false, true, arg_1.x)), arg_1.x))))));
            return ((var_0.x ^ arg_0.a) & firstLeadingBit(~var_0.x)) ^ arg_0.a;
        }
        case 2147483647i: {
            loop {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
                return _wgslsmith_mod_u32(var_0.x, ~(~(~8281u)));
            }
        }
        case 10099i: {
            let var_2 = arg_1.x;
        }
        default: {
            if (!arg_1.x) {
                var var_2 = ~(~u_input.a) <= 0i;
                var var_3 = Struct_1(~_wgslsmith_dot_vec2_u32(vec2<u32>(0u | var_0.x, 41174u), var_0.yz));
                let var_4 = u_input.a;
                var_3 = Struct_1(0u);
                let var_5 = -4943i;
            }
            if (arg_1.x) {
                var var_2 = arg_0;
                var_2 = func_4(abs(_wgslsmith_dot_vec4_i32(vec4<i32>(u_input.a, u_input.a, -74032i, _wgslsmith_mult_i32(-1i, u_input.a)), (vec4<i32>(2147483647i, 0i, u_input.a, u_input.a) >> (vec4<u32>(39815u, 0u, var_2.a, 1u) % vec4<u32>(32u))) & _wgslsmith_mult_vec4_i32(vec4<i32>(u_input.a, -1i, -4259i, 0i), vec4<i32>(u_input.a, u_input.a, u_input.a, u_input.a)))), arg_1.x, arg_1.xx, Struct_1(~var_2.a));
                return var_0.x;
            }
            loop {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                break;
            }
            for (; arg_1.x; ) {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                var var_2 = -(abs(_wgslsmith_mod_i32(u_input.a, -7216i)) | -14578i) > (u_input.a << (40963u % 32u));
                global0 = arg_1.x;
                continue;
            }
            var var_2 = u_input.a;
        }
    }
    return 110776u | arg_0.a;
}

fn func_3() -> vec4<u32> {
    global0 = all(select(vec4<bool>(all(vec3<bool>(false, false, true)), true, true, true), vec4<bool>(true, true, true, true), vec4<bool>(true, true, any(vec2<bool>(false, true)), true))) & false;
    for (var var_0 = -31075i; var_0 != i32(-2147483648); var_0 += 1i) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        let var_1 = func_7(func_4(min(~(-32083i) | u_input.a, u_input.a), !any(select(vec2<bool>(false, true), vec2<bool>(true, false), vec2<bool>(false, false))), select(vec2<bool>(true, true), vec2<bool>(all(vec2<bool>(true, false)), select(true, true, false)), -411f >= _wgslsmith_f_op_f32(select(-1142f, -1465f, true))), Struct_1(_wgslsmith_dot_vec3_u32(vec3<u32>(79951u, 26815u, 1u), vec3<u32>(4294967295u, 4963u, 21396u)) | ~31771u)), select(vec4<bool>(true, all(func_6(vec3<f32>(-246f, 1000f, -716f), 911f).yw), true, true), vec4<bool>(any(vec3<bool>(false, true, true)), true, any(vec2<bool>(true, true)), all(vec3<bool>(true, false, false))), false));
        switch (u_input.a) {
            default: {
                var var_2 = func_4(_wgslsmith_mult_i32(firstTrailingBit(u_input.a), min(u_input.a & i32(-2147483648), select(2147483647i, u_input.a, true)) << (0u % 32u)), all(vec2<bool>(all(vec2<bool>(true, true)), select(true, true, true))), vec2<bool>(true, any(vec3<bool>(true, true, true))), Struct_1(1u));
                var var_3 = func_4(_wgslsmith_sub_i32(~_wgslsmith_mult_i32(11346i, u_input.a), 2147483647i) ^ u_input.a, false, select(select(vec2<bool>(true, true), select(select(vec2<bool>(false, false), vec2<bool>(true, true), vec2<bool>(false, true)), vec2<bool>(true, true), true), false), select(select(vec2<bool>(false, true), vec2<bool>(true, false), select(vec2<bool>(false, true), vec2<bool>(true, false), false)), vec2<bool>(false, all(vec3<bool>(false, false, false))), select(vec2<bool>(true, false), select(vec2<bool>(true, true), vec2<bool>(true, true), false), true)), all(vec4<bool>(true, true, true, true))), func_4(u_input.a, (~u_input.a > u_input.a) | true, func_6(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(min(vec3<f32>(-542f, -229f, 1000f), vec3<f32>(337f, -487f, -1252f))) * _wgslsmith_f_op_vec3_f32(vec3<f32>(827f, -777f, -723f) + vec3<f32>(-1325f, -1779f, 813f))), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(trunc(425f)), _wgslsmith_f_op_f32(f32(-1f) * -930f)))).zx, func_4(_wgslsmith_add_i32(-2147483647i, u_input.a | u_input.a), any(select(vec3<bool>(true, true, false), vec3<bool>(true, false, false), true)), select(vec2<bool>(true, true), vec2<bool>(true, true), func_6(vec3<f32>(1064f, 329f, 1623f), 623f).xz), Struct_1(_wgslsmith_add_u32(var_1, 4294967295u)))));
                var var_4 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-853f) + _wgslsmith_f_op_f32(ceil(473f))));
            }
        }
        switch (abs(-firstLeadingBit(-(u_input.a ^ u_input.a)))) {
            default: {
                break;
            }
        }
        var var_2 = min(u_input.a, _wgslsmith_clamp_i32(-1i, -1i, u_input.a) << (reverseBits(~var_1) % 32u)) > -1i;
        var var_3 = func_4(_wgslsmith_dot_vec3_i32(-vec3<i32>(select(-592i, u_input.a, true), _wgslsmith_mult_i32(-26871i, 0i), u_input.a), select(vec3<i32>(-49262i, _wgslsmith_add_i32(u_input.a, -34583i), ~2147483647i), vec3<i32>(select(-39589i, u_input.a, false), 0i >> (var_1 % 32u), 1i), select(func_6(vec3<f32>(-1855f, 632f, 1000f), 1439f).yyy, select(vec3<bool>(false, true, true), vec3<bool>(true, true, false), vec3<bool>(true, true, true)), true))), false || (any(vec4<bool>(true, true, true, true)) && func_6(vec3<f32>(-1208f, -1637f, 527f), _wgslsmith_div_f32(-1000f, -421f)).x), select(!(!func_6(vec3<f32>(-1228f, -1997f, 1078f), 1572f).zy), select(select(vec2<bool>(true, false), vec2<bool>(false, true), vec2<bool>(true, true)), select(vec2<bool>(true, true), vec2<bool>(true, false), false), true), select(func_6(vec3<f32>(-571f, -346f, 330f), _wgslsmith_f_op_f32(step(1077f, 557f))).ww, select(vec2<bool>(true, true), func_6(vec3<f32>(1620f, 365f, -988f), 1000f).zz, true), func_5(firstTrailingBit(vec3<i32>(-1148i, u_input.a, 11150i))))), func_4(reverseBits(2147483647i), true, !vec2<bool>(67858u <= var_1, true), func_4(_wgslsmith_dot_vec3_i32(_wgslsmith_clamp_vec3_i32(vec3<i32>(u_input.a, u_input.a, u_input.a), vec3<i32>(u_input.a, 11531i, u_input.a), vec3<i32>(u_input.a, -1i, 2147483647i)), -vec3<i32>(u_input.a, u_input.a, -8187i)), false, vec2<bool>(true, true), func_4(u_input.a, func_5(vec3<i32>(0i, u_input.a, u_input.a)), vec2<bool>(true, true), func_4(u_input.a, true, vec2<bool>(false, false), Struct_1(4294967295u))))));
    }
    for (var var_0 = 15024i; var_0 > 39788i; var_0 -= 1i) {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        var var_1 = Struct_1(countOneBits(max(9932u, 1u) << (abs(1u) % 32u)));
        var_1 = func_4(~(~firstTrailingBit(_wgslsmith_div_i32(i32(-2147483648), 2147483647i))), 1u > _wgslsmith_div_u32(~_wgslsmith_sub_u32(var_1.a, 5520u), 12460u), vec2<bool>(!(false || any(vec3<bool>(false, false, true))), func_5(_wgslsmith_mod_vec3_i32(vec3<i32>(u_input.a, -14319i, 3057i), vec3<i32>(2147483647i, -13178i, 16437i)) ^ _wgslsmith_div_vec3_i32(vec3<i32>(1i, u_input.a, 2147483647i), vec3<i32>(u_input.a, 1i, -1i)))), Struct_1(_wgslsmith_dot_vec2_u32(vec2<u32>(4294967295u >> (0u % 32u), var_1.a), ~vec2<u32>(25528u, 22077u) & _wgslsmith_div_vec2_u32(vec2<u32>(1u, var_1.a), vec2<u32>(16541u, var_1.a)))));
        for (var var_2 = ~(-61538i); select(any(!(!func_6(vec3<f32>(-2085f, -282f, -1094f), -1123f).wx)), true, select(!(!all(vec4<bool>(false, true, true, true))), true | any(vec2<bool>(false, true)), func_5(~(-vec3<i32>(-1i, u_input.a, u_input.a))))); var_2 -= 1i) {
            if (LOOP_COUNTERS[8u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
            var var_3 = vec2<i32>(_wgslsmith_div_i32(firstLeadingBit(-(-49551i ^ u_input.a)), _wgslsmith_mult_i32(-u_input.a, abs(firstLeadingBit(u_input.a)))), u_input.a ^ u_input.a);
        }
        global0 = !(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-826f - -209f))) - 667f) > _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-361f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-275f) - _wgslsmith_f_op_f32(-703f)))));
        continue;
    }
    global0 = u_input.a <= reverseBits(_wgslsmith_clamp_i32(~u_input.a, -5348i, u_input.a) | -19844i);
    switch (-18154i) {
        case 55087i: {
            for (var var_0: i32; true; var_0 -= 1i) {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                var_0 = _wgslsmith_sub_i32(u_input.a, _wgslsmith_div_i32(u_input.a, u_input.a)) << (~9667u % 32u);
                let var_1 = vec2<i32>(abs(_wgslsmith_dot_vec3_i32(_wgslsmith_div_vec3_i32(vec3<i32>(3307i, u_input.a, i32(-2147483648)), vec3<i32>(35067i, u_input.a, 64668i)), firstTrailingBit(vec3<i32>(u_input.a, -3332i, 40217i)))) | -_wgslsmith_div_i32(u_input.a, i32(-1i) * -22049i), 2147483647i);
                let var_2 = Struct_1(_wgslsmith_div_u32(firstTrailingBit(~(~23496u)), 25612u));
                continue;
            }
            var var_0 = firstTrailingBit(abs(vec2<u32>(1u, 1u))) | min(_wgslsmith_mod_vec2_u32(vec2<u32>(1u, 1u), ~max(vec2<u32>(0u, 58028u), vec2<u32>(5476u, 1u))), firstTrailingBit(~countOneBits(vec2<u32>(70929u, 1u))));
        }
        case 51369i: {
            for (var var_0: i32; (any(vec3<bool>(true, -55302i == u_input.a, true)) || all(vec4<bool>(any(vec2<bool>(false, false)), true, any(vec4<bool>(true, true, true, false)), true))) != (func_4(1i, true, !select(vec2<bool>(true, false), vec2<bool>(true, true), vec2<bool>(true, true)), Struct_1(_wgslsmith_dot_vec3_u32(vec3<u32>(4294967295u, 30814u, 56270u), vec3<u32>(100084u, 32653u, 1u)))).a > ~1u); var_0 -= 1i) {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                break;
            }
            global0 = func_6(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(round(vec3<f32>(-769f, 220f, 707f)))), _wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(-vec3<f32>(1274f, 1000f, -809f))))), _wgslsmith_f_op_f32(638f * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(915f - 999f)) - _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-735f - -1759f)))))).x;
            var var_0 = Struct_1(1u);
            var var_1 = _wgslsmith_mod_i32(i32(-2147483648), u_input.a);
        }
        case -459i: {
            switch (-u_input.a) {
                default: {
                    let var_0 = -7765i;
                    var var_1 = Struct_1(_wgslsmith_dot_vec4_u32(min(vec4<u32>(1u, 1u, 1u, 1u), _wgslsmith_mod_vec4_u32(vec4<u32>(0u, 16557u, 0u, 31121u), vec4<u32>(33529u, 49245u, 13795u, 1u))), vec4<u32>(~31809u, firstTrailingBit(0u), ~0u, 1u)) | (~(0u >> (1u % 32u)) << (_wgslsmith_div_u32(reverseBits(0u), 62076u) % 32u)));
                    let var_2 = func_4(var_0, _wgslsmith_f_op_f32(f32(-1f) * -1156f) >= _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(ceil(-517f)))), _wgslsmith_div_f32(158f, _wgslsmith_f_op_f32(397f - 423f)))), vec2<bool>((any(vec3<bool>(true, false, false)) != true) | (select(1u, var_1.a, true) <= var_1.a), _wgslsmith_clamp_u32(~4294967295u, var_1.a ^ var_1.a, 52833u) > var_1.a), Struct_1(0u));
                }
            }
            let var_0 = Struct_1(1u);
        }
        case 0i: {
            global0 = _wgslsmith_dot_vec4_i32(firstLeadingBit(countOneBits(~vec4<i32>(-1i, -10184i, u_input.a, -1i))), countOneBits(countOneBits(firstTrailingBit(vec4<i32>(u_input.a, u_input.a, -1i, u_input.a))))) > reverseBits(abs(u_input.a));
            switch (u_input.a) {
                case -39979i: {
                    global0 = true;
                    global0 = !select(u_input.a < 2147483647i, true, func_5(vec3<i32>(-8193i, u_input.a, 0i) | vec3<i32>(u_input.a, u_input.a, i32(-2147483648)))) | true;
                    let var_0 = Struct_1(~abs(_wgslsmith_div_u32(1u, ~30484u)));
                    let var_1 = var_0;
                }
                case -1i: {
                    var var_0 = _wgslsmith_sub_u32(1u, (max(1u, 1u) << (~4294967295u % 32u)) << (func_7(func_4(~u_input.a, true, select(vec2<bool>(false, true), vec2<bool>(true, false), true), Struct_1(14604u)), !func_6(vec3<f32>(1000f, 563f, 198f), 501f)) % 32u));
                }
                default: {
                }
            }
        }
        default: {
            var var_0 = func_4(_wgslsmith_div_i32(_wgslsmith_mod_i32(u_input.a, 2147483647i), _wgslsmith_clamp_i32(i32(-2147483648), u_input.a, 0i)), any(vec2<bool>(true, any(vec3<bool>(true, true, true)))), !func_6(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1479f, -2096f, -2588f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -804f) - 938f)).wz, Struct_1(~_wgslsmith_clamp_u32(~34466u, ~0u, ~16841u)));
            var_0 = func_4(-u_input.a, !all(vec2<bool>(u_input.a != u_input.a, true)), vec2<bool>(!(-u_input.a <= (u_input.a & -103070i)), true), func_4(u_input.a, all(vec4<bool>(any(vec2<bool>(false, false)), select(false, true, false), u_input.a <= -28719i, false)), vec2<bool>(true, all(vec2<bool>(true, true))), Struct_1(firstTrailingBit(select(29672u, 35628u, false)))));
            loop {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                global0 = true;
                global0 = select(select(!all(vec3<bool>(true, true, true)), true, !(!(u_input.a > i32(-2147483648)))), any(!select(select(vec3<bool>(false, false, true), vec3<bool>(false, true, false), vec3<bool>(false, true, true)), select(vec3<bool>(false, false, true), vec3<bool>(true, true, true), true), func_6(vec3<f32>(355f, 739f, 1433f), -2415f).yyw)), !all(vec3<bool>(var_0.a == var_0.a, true, any(vec4<bool>(false, false, false, false)))));
                let var_1 = Struct_1(~countOneBits(func_7(Struct_1(1u), vec4<bool>(true, false, false, false))) ^ _wgslsmith_clamp_u32(~(~0u), abs(var_0.a), 10273u));
                var var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1904f));
                var var_3 = var_0.a;
            }
            var_0 = func_4(u_input.a, !(!(u_input.a == 18407i)) == !(false == func_6(vec3<f32>(-1071f, 1371f, 690f), -3922f).x), select(select(!select(vec2<bool>(true, true), vec2<bool>(true, true), false), vec2<bool>(true, true), !any(vec4<bool>(false, true, true, false))), !vec2<bool>(true, any(vec4<bool>(false, false, false, true))), var_0.a != func_4(1i, true, vec2<bool>(true, true), func_4(-1i, false, vec2<bool>(true, true), Struct_1(var_0.a))).a), func_4(-1i, ((var_0.a == 80176u) & all(vec4<bool>(true, true, true, false))) & true, select(vec2<bool>(all(vec3<bool>(true, false, false)), true), vec2<bool>(func_5(vec3<i32>(u_input.a, u_input.a, -4994i)), true), func_6(_wgslsmith_f_op_vec3_f32(vec3<f32>(-633f, -1768f, 558f) + vec3<f32>(504f, 1265f, -238f)), _wgslsmith_div_f32(2338f, 300f)).x), Struct_1(978u)));
        }
    }
    return ~max(_wgslsmith_add_vec4_u32(abs(vec4<u32>(43546u, 3312u, 1u, 1u)), _wgslsmith_clamp_vec4_u32(_wgslsmith_clamp_vec4_u32(vec4<u32>(1u, 27824u, 3766u, 4294967295u), vec4<u32>(3043u, 4429u, 9466u, 1u), vec4<u32>(66947u, 57779u, 1u, 1u)), abs(vec4<u32>(788u, 0u, 4294967295u, 4294967295u)), vec4<u32>(1u, 1u, 1u, 1u))), ~(~vec4<u32>(1u, 1u, 1u, 1u)));
}

fn func_2(arg_0: f32) -> u32 {
    var var_0 = countOneBits(func_3());
    for (var var_1 = 5641i; var_1 > i32(-2147483648); var_1 -= 1i) {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
    }
    loop {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        break;
    }
    var_0 = ~_wgslsmith_div_vec4_u32(firstTrailingBit(_wgslsmith_mult_vec4_u32(vec4<u32>(35428u, 4294967295u, var_0.x, var_0.x), firstLeadingBit(vec4<u32>(var_0.x, var_0.x, var_0.x, var_0.x)))), vec4<u32>(1u, func_3().x, _wgslsmith_dot_vec3_u32(min(vec3<u32>(var_0.x, 1u, var_0.x), var_0.xzz), firstTrailingBit(vec3<u32>(29705u, var_0.x, 38174u))), ~_wgslsmith_sub_u32(84542u, 1u)));
    let var_1 = select(select(select(vec3<bool>(true, true, arg_0 <= arg_0), vec3<bool>(true, true, true), vec3<bool>(true, u_input.a != u_input.a, true)), select(func_6(_wgslsmith_f_op_vec3_f32(round(vec3<f32>(476f, -754f, 862f))), _wgslsmith_f_op_f32(arg_0 * arg_0)).yxz, vec3<bool>(true, true, true), !(u_input.a > 1i)), vec3<bool>(all(vec3<bool>(true, true, true)), all(vec4<bool>(true, true, true, true)), any(vec4<bool>(true, true, true, true)))), vec3<bool>(true, !(!func_5(vec3<i32>(u_input.a, u_input.a, u_input.a))), !all(vec3<bool>(true, true, true))), true);
    return 0u;
}

fn func_8(arg_0: u32, arg_1: Struct_1, arg_2: i32) -> Struct_1 {
    var var_0 = _wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1491f)))), _wgslsmith_f_op_f32(1352f - -1000f), _wgslsmith_f_op_f32(-274f + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(694f))))));
    global0 = all(vec2<bool>(false, !(any(vec2<bool>(true, true)) && true)));
    if (all(func_6(vec3<f32>(-339f, 213f, -294f), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(var_0.x, _wgslsmith_f_op_f32(f32(-1f) * -1208f)))))) {
        for (; ; ) {
            if (LOOP_COUNTERS[14u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        }
        var var_1 = (0i >> (~max(arg_1.a, ~arg_1.a) % 32u)) >> (~arg_1.a % 32u);
        var_0 = vec3<f32>(var_0.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-var_0.x))) * _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(f32(-1f) * -352f)))), _wgslsmith_f_op_f32(abs(-334f)));
        for (var var_2 = arg_2; true; var_2 += 1i) {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            let var_3 = func_4(-_wgslsmith_mod_i32(arg_2, 54544i), any(vec3<bool>(func_6(_wgslsmith_f_op_vec3_f32(-vec3<f32>(var_0.x, var_0.x, -1529f)), _wgslsmith_f_op_f32(trunc(1000f))).x, select(select(false, false, true), true, any(vec3<bool>(false, true, false))), true)), vec2<bool>(any(vec2<bool>(true, var_0.x == var_0.x)), true), func_4(u_input.a, func_6(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(2131f, -432f, var_0.x) + vec3<f32>(-621f, var_0.x, var_0.x))), _wgslsmith_f_op_f32(trunc(var_0.x))).x, !vec2<bool>(any(vec3<bool>(true, false, true)), true), Struct_1(_wgslsmith_div_u32(arg_0, arg_1.a | 0u))));
            break;
        }
        var var_2 = func_4(0i, !all(vec3<bool>(true, true, true)), func_6(_wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -823f), _wgslsmith_f_op_f32(-var_0.x), _wgslsmith_f_op_f32(f32(-1f) * -313f))), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(var_0.x - 1568f)))))).zy, func_4(i32(-2147483648), true, vec2<bool>(true, true), Struct_1(arg_1.a)));
    }
    let var_1 = true;
    var_0 = _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(vec3<f32>(394f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(-1008f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1664f))) - _wgslsmith_f_op_vec3_f32(floor(vec3<f32>(var_0.x, var_0.x, _wgslsmith_f_op_f32(-388f - var_0.x))))), vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(var_0.x, _wgslsmith_f_op_f32(-1716f * var_0.x))), 791f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(var_0.x, var_0.x))) + var_0.x)), vec3<bool>(select(var_1 | var_1, var_1, !func_6(vec3<f32>(-1118f, var_0.x, var_0.x), 603f).x), select(true, var_1, any(vec4<bool>(true, true, true, true))), false)));
    return arg_1;
}

fn func_9(arg_0: Struct_1, arg_1: vec3<f32>, arg_2: bool, arg_3: Struct_1) -> i32 {
    switch (u_input.a) {
        case -29457i: {
        }
        case 34846i: {
            var var_0 = firstLeadingBit(u_input.a);
            global0 = arg_2;
            if (arg_2) {
            }
        }
        case -4289i: {
            loop {
                if (LOOP_COUNTERS[16u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
                global0 = !(!arg_2);
                var var_0 = func_8(76092u >> (_wgslsmith_sub_u32(func_4(1i, arg_2, vec2<bool>(arg_2, arg_2), Struct_1(1u)).a, arg_0.a) % 32u), Struct_1(_wgslsmith_sub_u32(4294967295u, arg_3.a)), u_input.a);
                var var_1 = vec2<bool>(func_6(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(ceil(arg_1))), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(1110f)) * _wgslsmith_f_op_f32(-arg_1.x)), arg_1.x))).x, u_input.a != u_input.a);
                continue;
            }
            var var_0 = i32(-1i) * -39714i;
        }
        case -1i: {
            for (var var_0 = 23645i; false || (true && (!(!arg_2) & false)); var_0 -= 1i) {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                var var_1 = u_input.a;
                let var_2 = func_8(firstTrailingBit(_wgslsmith_add_u32(arg_0.a, max(1u, 15110u | arg_0.a))), arg_0, _wgslsmith_mod_i32(934i, 2147483647i));
                var var_3 = _wgslsmith_f_op_vec4_f32(-vec4<f32>(316f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(1034f))) - arg_1.x), arg_1.x, -380f));
                var var_4 = Struct_1(arg_0.a);
            }
            for (var var_0 = 1i; var_0 == i32(-2147483648); var_0 += 1i) {
                if (LOOP_COUNTERS[18u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
                global0 = all(select(select(!vec4<bool>(arg_2, true, arg_2, arg_2), vec4<bool>(!arg_2, true, arg_2, false || arg_2), func_6(_wgslsmith_f_op_vec3_f32(-vec3<f32>(848f, arg_1.x, -859f)), arg_1.x)), vec4<bool>(true, arg_2, true, any(vec2<bool>(false, arg_2))), !any(!vec2<bool>(arg_2, true))));
            }
            var var_0 = min(countOneBits(max(~vec4<u32>(3654u, arg_3.a, 24754u, 2768u), ~vec4<u32>(arg_3.a, 9340u, arg_0.a, arg_3.a) & vec4<u32>(arg_0.a, 9708u, 4294967295u, arg_3.a))), ~_wgslsmith_clamp_vec4_u32(firstLeadingBit(vec4<u32>(arg_0.a, 0u, arg_0.a, 30843u)), vec4<u32>(~arg_0.a, arg_0.a, 4294967295u, func_2(arg_1.x)), _wgslsmith_mod_vec4_u32(vec4<u32>(arg_3.a, 36078u, 4294967295u, arg_3.a), vec4<u32>(5603u, arg_3.a, arg_3.a, 1u)) ^ vec4<u32>(70518u, 5991u, arg_0.a, 10674u)));
            let var_1 = func_8(arg_3.a << (arg_0.a % 32u), arg_3, max(1i, abs(-19361i)));
        }
        default: {
        }
    }
    loop {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
    }
    var var_0 = 0i << (_wgslsmith_div_u32(arg_3.a << (countOneBits(_wgslsmith_dot_vec4_u32(vec4<u32>(7503u, arg_3.a, arg_3.a, arg_0.a), vec4<u32>(arg_0.a, arg_0.a, 76469u, arg_0.a))) % 32u), _wgslsmith_sub_u32(arg_3.a, ~arg_0.a)) % 32u);
    let var_1 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(arg_1 + arg_1) * _wgslsmith_f_op_vec3_f32(-arg_1)) * arg_1))));
    let var_2 = Struct_1(~(_wgslsmith_mod_u32(1u, 4294967295u) >> (arg_3.a % 32u)));
    return _wgslsmith_mult_i32((u_input.a & (i32(-1i) * -38646i)) | _wgslsmith_clamp_i32(u_input.a, firstLeadingBit(_wgslsmith_sub_i32(u_input.a, u_input.a)), max(-1i, 1i)), -1i);
}

fn func_10(arg_0: vec2<i32>) -> Struct_1 {
    var var_0 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_div_f32(-1911f, 911f), 1185f, -323f)), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(700f, 1000f, -857f) - _wgslsmith_f_op_vec3_f32(-vec3<f32>(406f, -511f, -907f))) * _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(279f, 1012f, 1355f)))), vec3<bool>(all(vec3<bool>(true, true, true)), _wgslsmith_mult_i32(arg_0.x, 10243i) >= (2147483647i & arg_0.x), true))) - _wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(-917f, -240f, 1707f))), _wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(339f, 1556f, -176f) - vec3<f32>(-846f, -256f, 551f))))))));
    if (!all(select(vec3<bool>(true, true, true), !select(vec3<bool>(false, true, false), vec3<bool>(true, false, false), false), select(vec3<bool>(true, false, false), vec3<bool>(true, true, true), vec3<bool>(true, true, true))))) {
        var var_1 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(-var_0.x), _wgslsmith_f_op_f32(-301f), _wgslsmith_f_op_f32(-var_0.x))))) - _wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(715f * -578f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(var_0.x + -172f) * _wgslsmith_f_op_f32(abs(-345f))), _wgslsmith_f_op_f32(select(_wgslsmith_div_f32(-1080f, var_0.x), _wgslsmith_f_op_f32(var_0.x + 211f), any(vec2<bool>(true, false)))))));
        for (var var_2 = -1i; var_2 == -22136i; var_2 -= 1i) {
            if (LOOP_COUNTERS[20u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
            var var_3 = i32(-1i) * -_wgslsmith_clamp_i32(u_input.a, arg_0.x, 1313i);
            let var_4 = arg_0;
            var var_5 = !select(vec3<bool>(all(vec4<bool>(true, true, false, false)), false, false || func_5(vec3<i32>(0i, -5594i, u_input.a))), !vec3<bool>(true, arg_0.x > u_input.a, true), !func_6(_wgslsmith_f_op_vec3_f32(-vec3<f32>(var_1.x, 1218f, 282f)), _wgslsmith_f_op_f32(round(-1000f))).x);
            var var_6 = func_8(reverseBits(~1u), func_4(u_input.a, var_5.x, select(!(!vec2<bool>(false, var_5.x)), var_5.zy, true), Struct_1(firstLeadingBit(1u))), ~_wgslsmith_div_i32(abs(reverseBits(0i)), _wgslsmith_dot_vec4_i32(-vec4<i32>(u_input.a, i32(-2147483648), var_4.x, 2147483647i), select(vec4<i32>(arg_0.x, u_input.a, arg_0.x, arg_0.x), vec4<i32>(2147483647i, i32(-2147483648), 2147483647i, u_input.a), var_5.x))));
            global0 = select(var_5.x, -880f <= var_0.x, all(!func_6(vec3<f32>(var_0.x, var_0.x, var_0.x), var_0.x))) | !var_5.x;
        }
        var var_2 = _wgslsmith_mod_u32(~select(_wgslsmith_clamp_u32(func_3().x, 6012u, _wgslsmith_dot_vec4_u32(vec4<u32>(7657u, 36734u, 4294967295u, 4294967295u), vec4<u32>(4294967295u, 22635u, 7120u, 1u))), ~_wgslsmith_mod_u32(37578u, 15552u), all(select(vec3<bool>(false, true, false), vec3<bool>(false, true, false), true))), 17445u);
        for (var var_3: i32; ; var_3 += 1i) {
            if (LOOP_COUNTERS[21u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
            var_1 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(step(vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(var_0.x, var_1.x))), 439f, var_0.x), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(var_0.x, -692f, var_1.x)) * _wgslsmith_f_op_vec3_f32(-vec3<f32>(var_1.x, var_0.x, -417f)))))));
            var_3 = _wgslsmith_dot_vec4_i32(~abs(_wgslsmith_clamp_vec4_i32(vec4<i32>(arg_0.x, -54637i, 2147483647i, arg_0.x) & vec4<i32>(-40813i, u_input.a, u_input.a, -1i), _wgslsmith_clamp_vec4_i32(vec4<i32>(i32(-2147483648), u_input.a, 1i, arg_0.x), vec4<i32>(arg_0.x, -2275i, 1680i, -313i), vec4<i32>(0i, -1i, arg_0.x, -28017i)), ~vec4<i32>(1i, u_input.a, -1i, 32250i))), abs(countOneBits(vec4<i32>(arg_0.x ^ u_input.a, max(arg_0.x, 0i), _wgslsmith_div_i32(u_input.a, u_input.a), 2147483647i))));
        }
    }
    for (var var_1 = 33758i; ; var_1 -= 1i) {
        if (LOOP_COUNTERS[22u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
    }
    var_0 = _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(546f, -649f, var_0.x))))))), _wgslsmith_f_op_vec3_f32(vec3<f32>(-205f, _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-1818f))), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-var_0.x)))) - _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(var_0.x, var_0.x, -1360f) + vec3<f32>(var_0.x, var_0.x, var_0.x)) * vec3<f32>(var_0.x, var_0.x, -995f)))));
    loop {
        if (LOOP_COUNTERS[23u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
        var var_1 = _wgslsmith_sub_vec2_i32(min(vec2<i32>(min(i32(-1i) * -40707i, i32(-1i) * i32(-2147483648)), ~(-arg_0.x)), arg_0), vec2<i32>(_wgslsmith_dot_vec3_i32(vec3<i32>(-u_input.a, _wgslsmith_dot_vec4_i32(vec4<i32>(-1i, -1i, u_input.a, -25006i), vec4<i32>(26311i, u_input.a, arg_0.x, 29918i)), 21254i), firstTrailingBit(vec3<i32>(arg_0.x, -1i, 2147483647i) & vec3<i32>(u_input.a, -15326i, -22357i))), -1i));
    }
    return Struct_1(_wgslsmith_mod_u32(~0u, (abs(1u) & _wgslsmith_dot_vec3_u32(vec3<u32>(5925u, 0u, 0u), vec3<u32>(4294967295u, 10798u, 7563u))) ^ 7368u));
}

fn func_1(arg_0: Struct_1, arg_1: bool, arg_2: i32, arg_3: Struct_1) -> Struct_1 {
    switch (-arg_2) {
        case 1i: {
        }
        default: {
            loop {
                if (LOOP_COUNTERS[24u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
                let var_0 = func_10(vec2<i32>(abs(_wgslsmith_clamp_i32(max(arg_2, -1i), 0i, u_input.a << (arg_3.a % 32u))), func_9(func_8(func_2(-205f), arg_3, u_input.a), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(1206f, 1155f, 1243f))), u_input.a > -u_input.a, Struct_1(arg_3.a))));
                let var_1 = func_7(var_0, vec4<bool>(arg_1, arg_1, arg_1, arg_1));
                break;
            }
        }
    }
    return func_10(vec2<i32>(~(~_wgslsmith_clamp_i32(2147483647i, 22907i, arg_2)), 2147483647i));
}

@compute
@workgroup_size(1)
fn main() {
    if (false) {
        loop {
            if (LOOP_COUNTERS[25u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
            break;
        }
        let var_0 = countOneBits(~u_input.a);
    }
    var var_0 = 4294967295u;
    switch (0i) {
        default: {
            loop {
                if (LOOP_COUNTERS[26u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[27u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[27u] = LOOP_COUNTERS[27u] + 1u;
    }
    var var_1 = func_1(Struct_1(~46702u), true, countOneBits(_wgslsmith_mult_i32(firstTrailingBit(-2147483647i), ~(-20879i))), Struct_1(129191u));
    loop {
        if (LOOP_COUNTERS[28u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[28u] = LOOP_COUNTERS[28u] + 1u;
        let var_2 = _wgslsmith_mod_vec4_u32(firstTrailingBit(~func_3()), vec4<u32>(30814u, _wgslsmith_mult_u32(var_1.a, _wgslsmith_dot_vec3_u32(vec3<u32>(27016u, var_1.a, 31396u), vec3<u32>(53700u, var_1.a, 36742u))), firstLeadingBit(max(var_1.a, var_1.a)), 1u) & vec4<u32>(var_1.a, var_1.a, 4294967295u, func_10(vec2<i32>(u_input.a, -5940i)).a));
        let var_3 = (abs(var_2.x | 1u) << (_wgslsmith_mod_u32(countOneBits(~4294967295u), var_1.a) % 32u)) << (_wgslsmith_mult_u32(func_10(abs(vec2<i32>(u_input.a, 2147483647i))).a, select(min(var_1.a, 6258u), 12937u, all(vec2<bool>(false, true)))) % 32u);
        let var_4 = func_1(Struct_1(~(var_1.a ^ 111538u)), all(select(vec2<bool>(true, true), vec2<bool>(true, true), max(u_input.a, 14019i) == min(2147483647i, u_input.a))), 0i, Struct_1(88350u));
    }
    for (var var_2 = 10629i; any(!func_6(_wgslsmith_f_op_vec3_f32(abs(vec3<f32>(847f, 278f, -681f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(-193f)) * 627f)).yy); global0 = all(!(!select(vec3<bool>(false, false, false), vec3<bool>(true, true, true), select(vec3<bool>(false, true, false), vec3<bool>(true, true, true), vec3<bool>(false, false, false)))))) {
        if (LOOP_COUNTERS[29u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[29u] = LOOP_COUNTERS[29u] + 1u;
        var var_3 = vec3<i32>(~_wgslsmith_dot_vec2_i32(_wgslsmith_mult_vec2_i32(vec2<i32>(u_input.a, u_input.a), vec2<i32>(-1i, u_input.a)), abs(vec2<i32>(u_input.a, -53922i))), 1i, 0i) >> (select(vec3<u32>(var_1.a, ~func_1(Struct_1(var_1.a), false, u_input.a, Struct_1(5665u)).a, 1698u & var_1.a), ~firstTrailingBit(~vec3<u32>(0u, 4294967295u, var_1.a)), any(!func_6(vec3<f32>(-353f, -469f, 866f), 975f))) % vec3<u32>(32u));
        var var_4 = vec2<i32>(-(~1i), -18971i);
        loop {
            if (LOOP_COUNTERS[30u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[30u] = LOOP_COUNTERS[30u] + 1u;
            var var_5 = 2147483647i;
            continue;
        }
        loop {
            if (LOOP_COUNTERS[31u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[31u] = LOOP_COUNTERS[31u] + 1u;
            let var_5 = Struct_1(reverseBits(_wgslsmith_mod_u32(var_1.a, 33903u)));
            continue;
        }
    }
    for (; ; ) {
        if (LOOP_COUNTERS[32u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[32u] = LOOP_COUNTERS[32u] + 1u;
        break;
    }
    if (false) {
        global0 = func_6(_wgslsmith_f_op_vec3_f32(-vec3<f32>(1f, 1f, 1f)), _wgslsmith_f_op_f32(round(-214f))).x;
        var_1 = func_1(func_4(i32(-2147483648), false, select(vec2<bool>(true, func_6(vec3<f32>(-2669f, 875f, -325f), 880f).x), vec2<bool>(u_input.a != 28889i, false), true), Struct_1(_wgslsmith_dot_vec4_u32(~vec4<u32>(var_1.a, var_1.a, var_1.a, var_1.a), ~vec4<u32>(4294967295u, var_1.a, var_1.a, 0u)))), true, 1i, func_1(Struct_1(49748u ^ func_7(Struct_1(var_1.a), vec4<bool>(false, true, true, false))), !(!all(vec3<bool>(false, false, false))), u_input.a, Struct_1(_wgslsmith_dot_vec3_u32(vec3<u32>(14859u, 2135u, 1u), _wgslsmith_mod_vec3_u32(vec3<u32>(0u, 10810u, 31016u), vec3<u32>(84370u, var_1.a, 66341u))))));
        switch (0i) {
            default: {
                let var_2 = vec3<i32>(firstLeadingBit(_wgslsmith_dot_vec2_i32(abs(_wgslsmith_mult_vec2_i32(vec2<i32>(2147483647i, u_input.a), vec2<i32>(24689i, 2147483647i))), _wgslsmith_mult_vec2_i32(_wgslsmith_mult_vec2_i32(vec2<i32>(u_input.a, 28717i), vec2<i32>(u_input.a, u_input.a)), countOneBits(vec2<i32>(1i, u_input.a))))), func_9(Struct_1(~var_1.a), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(1000f, -484f, -1481f)) - _wgslsmith_f_op_vec3_f32(-vec3<f32>(-251f, 1130f, 1140f))), -3227i >= u_input.a, Struct_1(1u)) >> (abs(firstTrailingBit(_wgslsmith_dot_vec3_u32(vec3<u32>(var_1.a, 1u, 63220u), vec3<u32>(var_1.a, 0u, var_1.a)))) % 32u), ~(-_wgslsmith_clamp_i32(_wgslsmith_dot_vec3_i32(vec3<i32>(u_input.a, 23656i, u_input.a), vec3<i32>(-1i, -8258i, u_input.a)), ~u_input.a, u_input.a)));
                let var_3 = vec4<bool>(func_6(_wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(vec3<f32>(860f, -647f, -581f) * _wgslsmith_f_op_vec3_f32(-vec3<f32>(491f, -1361f, -488f))), vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -1268f), _wgslsmith_f_op_f32(f32(-1f) * -1421f), _wgslsmith_f_op_f32(sign(1300f))))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-1330f + -1000f))) + _wgslsmith_div_f32(_wgslsmith_f_op_f32(min(890f, 1369f)), _wgslsmith_f_op_f32(1399f - 513f)))).x, !any(vec3<bool>(true, true, true)), select(true, true, !all(select(vec2<bool>(false, false), vec2<bool>(true, false), false))), any(!(!select(vec4<bool>(true, false, false, true), vec4<bool>(false, true, false, false), vec4<bool>(false, false, false, false)))));
                var var_4 = func_6(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(ceil(vec3<f32>(593f, 576f, -344f))), _wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(824f, 1967f, -981f)))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-145f) + _wgslsmith_f_op_f32(-385f - 261f)) * _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(sign(275f))))))).x;
                var var_5 = !(!var_3);
            }
        }
    }
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(max(-1901f, 1532f)), 1f), 1481f) * _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-282f, 1000f)) * _wgslsmith_f_op_vec2_f32(-vec2<f32>(388f, 891f))) * _wgslsmith_f_op_vec2_f32(floor(vec2<f32>(381f, 184f))))), var_1.a);
}

`;