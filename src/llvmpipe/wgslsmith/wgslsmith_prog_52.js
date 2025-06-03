export const input = [68,251,238,132,34,90,93,189,56,141,85,227,191,128,168,182,69,223,16,59,28,87,187,42,185,31,228,23,76,166,153,68,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [68,251,238,132,34,90,93,189,56,141,85,227,191,128,168,182,69,223,16,59,28,87,187,42,185,31,228,23,76,166,153,68,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[68,251,238,132,34,90,93,189,56,141,85,227,191,128,168,182,69,223,16,59,28,87,187,42,185,31,228,23,76,166,153,68]}
// Seed: 10013402688143336563

struct Struct_1 {
    a: u32,
    b: vec2<bool>,
    c: i32,
    d: u32,
}

struct UniformBuffer {
    a: u32,
    b: vec4<u32>,
}

struct StorageBuffer {
    a: vec3<i32>,
    b: u32,
    c: vec2<i32>,
    d: vec2<u32>,
    e: vec4<f32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> LOOP_COUNTERS: array<u32, 26>;

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn func_6() -> i32 {
    if (_wgslsmith_div_i32(_wgslsmith_add_i32(-firstLeadingBit(7305i), 1i), reverseBits(_wgslsmith_clamp_i32(2147483647i, 25991i, 2147483647i) >> (u_input.a % 32u))) == -max(2147483647i, -96682i)) {
        let var_0 = Struct_1(_wgslsmith_dot_vec2_u32(select(select(_wgslsmith_sub_vec2_u32(vec2<u32>(u_input.a, 1u), vec2<u32>(u_input.b.x, u_input.a)), u_input.b.yw, u_input.b.x > u_input.b.x), max(firstTrailingBit(u_input.b.zx), ~vec2<u32>(1u, u_input.a)), vec2<bool>(true, true)), select(_wgslsmith_div_vec2_u32(u_input.b.yy, u_input.b.zz), u_input.b.xy << (vec2<u32>(u_input.a, 0u) % vec2<u32>(32u)), true) ^ (select(vec2<u32>(16549u, u_input.a), u_input.b.xx, true) ^ vec2<u32>(23921u, 26119u))), vec2<bool>(select(false, true, false), any(vec2<bool>(true, all(vec3<bool>(false, true, true))))), i32(-2147483648), u_input.a);
        let var_1 = true;
        switch (_wgslsmith_mult_i32(-29701i, i32(-1i) * -(var_0.c | countOneBits(var_0.c)))) {
            case 1i: {
            }
            case -1i: {
                var var_2 = var_0;
                var_2 = Struct_1(var_0.a & ~58412u, var_0.b, _wgslsmith_dot_vec2_i32(vec2<i32>(2147483647i, reverseBits(8837i & var_2.c)), min(_wgslsmith_div_vec2_i32(firstLeadingBit(vec2<i32>(-5275i, var_2.c)), _wgslsmith_add_vec2_i32(vec2<i32>(2147483647i, var_2.c), vec2<i32>(var_2.c, -15138i))), -(~vec2<i32>(0i, -26147i)))), _wgslsmith_mult_u32(54309u, firstTrailingBit(_wgslsmith_clamp_u32(var_2.d, ~33825u, ~u_input.b.x))));
                var_2 = var_0;
            }
            case 53414i: {
                let var_2 = ~_wgslsmith_dot_vec2_i32(_wgslsmith_div_vec2_i32(firstTrailingBit(_wgslsmith_div_vec2_i32(vec2<i32>(var_0.c, 0i), vec2<i32>(var_0.c, var_0.c))), -(~vec2<i32>(i32(-2147483648), 0i))), ~(-vec2<i32>(var_0.c, var_0.c)));
                var var_3 = _wgslsmith_div_vec4_f32(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(abs(_wgslsmith_f_op_vec4_f32(abs(vec4<f32>(1774f, -1117f, 1340f, -837f))))) - _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(select(vec4<f32>(-513f, 869f, 1124f, -1137f), vec4<f32>(1181f, 476f, 672f, 1163f), true)))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(1000f, 998f, -1964f, 288f) * _wgslsmith_f_op_vec4_f32(round(vec4<f32>(529f, -377f, -145f, -565f)))))), _wgslsmith_f_op_vec4_f32(select(vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1000f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(230f))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-1000f), _wgslsmith_f_op_f32(f32(-1f) * -170f)), _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(select(1000f, -564f, var_0.b.x))))), _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(-1041f - -685f), _wgslsmith_f_op_f32(min(805f, 1449f)), 1654f, 154f)), var_1)));
            }
            default: {
                let var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1395f));
                let var_3 = vec3<u32>(u_input.b.x, ~(~26133u), (~u_input.b.x ^ 1208u) ^ 4294967295u) | u_input.b.xxy;
                var var_4 = var_0;
                let var_5 = reverseBits(abs(countOneBits(vec3<i32>(var_4.c, -29220i, var_4.c)) & ~vec3<i32>(i32(-2147483648), var_0.c, var_4.c))) ^ vec3<i32>(select(countOneBits(var_0.c), i32(-2147483648) | max(var_0.c, var_0.c), all(!vec4<bool>(false, var_1, var_1, var_4.b.x))), -1i, var_0.c);
            }
        }
        loop {
            if (LOOP_COUNTERS[0u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        }
        let var_2 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_div_vec2_f32(vec2<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -328f), _wgslsmith_div_f32(322f, 743f)), 231f), vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(-1042f, 1036f)), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(439f + -208f), 1000f)))));
    }
    switch (-1i) {
        case 0i: {
            var var_0 = ~u_input.b.xx;
            var var_1 = _wgslsmith_f_op_vec3_f32(vec3<f32>(-405f, _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(f32(-1f) * -190f), -355f)), 551f) - _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(floor(vec3<f32>(_wgslsmith_f_op_f32(-1094f), -1421f, -1657f))), _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(853f, 614f, -777f) - vec3<f32>(1993f, 1575f, -1203f)) - vec3<f32>(-1000f, 1305f, -1297f)), vec3<f32>(-1331f, 531f, _wgslsmith_f_op_f32(-154f))))));
            var_1 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(vec3<f32>(302f, var_1.x, 508f), _wgslsmith_f_op_vec3_f32(-vec3<f32>(215f, var_1.x, -1773f)))))));
        }
        case 1i: {
            switch (select(~(-select(1i, 9494i, true)), reverseBits(_wgslsmith_mod_i32(1i, i32(-2147483648)) >> (_wgslsmith_add_u32(u_input.a, 0u) % 32u)), all(vec3<bool>(true, true, true))) << (~(u_input.b.x ^ _wgslsmith_div_u32(u_input.a, countOneBits(u_input.a))) % 32u)) {
                case 1i: {
                    var var_0 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(444f * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(-514f)))), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -446f)))), 127f, all(vec2<bool>(all(vec2<bool>(true, true)), false)))));
                }
                default: {
                    let var_0 = (~(~u_input.a) != _wgslsmith_dot_vec3_u32(~select(vec3<u32>(0u, u_input.a, u_input.a), u_input.b.zxw, false), u_input.b.wyz)) || any(vec4<bool>(all(vec2<bool>(true, true)), true, true, false));
                    var var_1 = Struct_1(_wgslsmith_mod_u32(~_wgslsmith_dot_vec4_u32(firstLeadingBit(vec4<u32>(u_input.b.x, 4294967295u, 51307u, 55512u)), ~vec4<u32>(u_input.b.x, u_input.b.x, u_input.a, u_input.a)), min(49907u, _wgslsmith_mod_u32(_wgslsmith_mod_u32(0u, u_input.b.x), abs(83471u)))), !select(!select(vec2<bool>(var_0, false), vec2<bool>(var_0, true), vec2<bool>(var_0, var_0)), select(vec2<bool>(true, true), vec2<bool>(var_0, true), select(vec2<bool>(var_0, var_0), vec2<bool>(true, true), vec2<bool>(var_0, false))), var_0), _wgslsmith_div_i32(_wgslsmith_mult_i32(~_wgslsmith_clamp_i32(-43262i, 0i, -30290i), _wgslsmith_dot_vec3_i32(vec3<i32>(1i, 1i, 1i), vec3<i32>(1i, 1i, 1i))), _wgslsmith_add_i32(min(2147483647i, _wgslsmith_mult_i32(0i, -5052i)), 1i)), ~41852u);
                    let var_2 = ~_wgslsmith_sub_vec4_u32(~firstLeadingBit(_wgslsmith_div_vec4_u32(u_input.b, vec4<u32>(1u, u_input.b.x, 0u, 0u))), u_input.b | (vec4<u32>(0u, var_1.d, var_1.d, var_1.d) | vec4<u32>(0u, u_input.a, 4294967295u, var_1.d)));
                    var var_3 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(trunc(_wgslsmith_div_f32(1f, _wgslsmith_f_op_f32(max(-699f, _wgslsmith_f_op_f32(trunc(-597f))))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_div_f32(-1000f, 250f)))));
                }
            }
            var var_0 = Struct_1(select(u_input.b.x, 32315u, any(vec3<bool>(true, false, true)) & true), select(vec2<bool>(true, true), select(vec2<bool>(true, true), vec2<bool>(true, true), !select(vec2<bool>(false, false), vec2<bool>(true, true), vec2<bool>(false, false))), true), 2147483647i, select(select(_wgslsmith_dot_vec4_u32(u_input.b, u_input.b | vec4<u32>(u_input.b.x, 26995u, u_input.b.x, 23227u)), ~_wgslsmith_clamp_u32(u_input.a, u_input.b.x, u_input.b.x), _wgslsmith_f_op_f32(851f * -282f) != _wgslsmith_f_op_f32(round(1000f))), u_input.b.x, !select(true, all(vec2<bool>(false, true)), true)));
            let var_1 = ((var_0.a & _wgslsmith_dot_vec2_u32(abs(vec2<u32>(var_0.d, var_0.d)), u_input.b.zz)) ^ _wgslsmith_div_u32(~u_input.b.x, var_0.a)) >> (firstTrailingBit(~36400u) % 32u);
            let var_2 = true;
            switch (-(~(var_0.c << (~30004u % 32u)))) {
                case 26099i: {
                    var var_3 = _wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(f32(-1f) * -727f), _wgslsmith_f_op_f32(min(1000f, 1134f)), _wgslsmith_f_op_f32(step(757f, 489f)), _wgslsmith_f_op_f32(ceil(341f))))))));
                    var_0 = Struct_1(4294967295u << ((reverseBits(var_0.d) & var_0.d) % 32u), select(!(!vec2<bool>(var_0.b.x, true)), !vec2<bool>(any(var_0.b), true), false), ~(~9668i), select(_wgslsmith_mod_u32(~_wgslsmith_add_u32(u_input.b.x, 27642u), _wgslsmith_mod_u32(~4294967295u, firstTrailingBit(u_input.a))), ~u_input.b.x, false));
                    let var_4 = Struct_1(77996u, !vec2<bool>(_wgslsmith_f_op_f32(f32(-1f) * -1000f) > var_3.x, var_2), firstLeadingBit(2829i) >> (select(_wgslsmith_sub_u32(abs(var_0.d), _wgslsmith_clamp_u32(u_input.a, 11779u, u_input.b.x)), 0u ^ var_0.a, all(!vec3<bool>(true, var_0.b.x, var_2))) % 32u), var_0.a);
                }
                case -1i: {
                    let var_3 = vec2<bool>(false, !(~var_1 <= abs(var_0.a)));
                    let var_4 = vec3<bool>(!(!var_0.b.x & var_3.x), all(vec4<bool>(_wgslsmith_f_op_f32(select(145f, 1522f, var_3.x)) >= 1f, var_0.b.x, _wgslsmith_f_op_f32(select(183f, 1000f, false)) != _wgslsmith_f_op_f32(-263f), u_input.b.x > (var_0.d ^ var_0.a))), true);
                }
                case 0i: {
                    var var_3 = select(vec2<bool>(true, true), vec2<bool>(!all(var_0.b), var_2), !var_0.b);
                    var_3 = vec2<bool>(select(true || !any(vec3<bool>(true, var_0.b.x, var_0.b.x)), !(!var_3.x), true), false && select(!all(vec2<bool>(false, var_2)), !var_3.x, var_0.b.x));
                    let var_4 = _wgslsmith_mult_vec2_u32(~(~_wgslsmith_sub_vec2_u32(vec2<u32>(1u, 4288u), vec2<u32>(1u, u_input.a))), _wgslsmith_sub_vec2_u32(u_input.b.wy, vec2<u32>(~(var_0.d ^ u_input.a), firstTrailingBit(u_input.b.x))));
                    let var_5 = max(firstLeadingBit(-(~reverseBits(vec2<i32>(var_0.c, var_0.c)))), vec2<i32>(abs(var_0.c | firstTrailingBit(1i)), var_0.c));
                }
                default: {
                    let var_3 = false;
                    var_0 = Struct_1(_wgslsmith_div_u32(reverseBits(18533u), _wgslsmith_add_u32(~26416u, var_1)), var_0.b, var_0.c, u_input.a);
                    let var_4 = Struct_1(~(~select(var_0.a, 1u, true)), select(vec2<bool>(all(vec2<bool>(var_0.b.x, false)) != true, !(!var_2)), select(vec2<bool>(false, var_0.c < 1i), !var_0.b, var_2), vec2<bool>(var_2, select(false, true, any(vec3<bool>(var_0.b.x, false, false))))), -52033i, _wgslsmith_div_u32(firstTrailingBit(var_0.a), u_input.a));
                    var_0 = Struct_1(firstLeadingBit(~9119u), !var_4.b, -(~_wgslsmith_sub_i32(max(2147483647i, 48887i), var_0.c)), countOneBits(46012u));
                }
            }
        }
        case 5850i: {
            var var_0 = vec2<u32>(68189u, u_input.b.x & u_input.a);
            var_0 = _wgslsmith_div_vec2_u32(~abs(select(vec2<u32>(u_input.a, 0u), u_input.b.yw, vec2<bool>(false, false))) ^ _wgslsmith_mod_vec2_u32(_wgslsmith_sub_vec2_u32(vec2<u32>(69323u, var_0.x), u_input.b.xx), vec2<u32>(u_input.b.x, var_0.x)), u_input.b.yx);
            if (true) {
                var var_1 = vec4<bool>(!any(select(vec3<bool>(true, true, true), vec3<bool>(true, true, true), vec3<bool>(false, true, false))), !(~max(u_input.a, 4294967295u) == _wgslsmith_dot_vec3_u32(~vec3<u32>(70898u, var_0.x, 29530u), vec3<u32>(u_input.a, u_input.b.x, var_0.x))), false, true);
                var_1 = select(!(!vec4<bool>(all(vec2<bool>(var_1.x, false)), false | var_1.x, true, true)), !select(!(!vec4<bool>(var_1.x, var_1.x, var_1.x, var_1.x)), !vec4<bool>(false, var_1.x, true, true), !vec4<bool>(false, false, false, var_1.x)), vec4<bool>(true, var_1.x, true, var_1.x));
                var_0 = _wgslsmith_mod_vec2_u32(u_input.b.wy, vec2<u32>(0u, 4294967295u));
                let var_2 = Struct_1(select(94614u, _wgslsmith_add_u32(_wgslsmith_div_u32(u_input.a, 0u), u_input.a), true) | u_input.a, select(vec2<bool>(true || all(vec2<bool>(var_1.x, true)), !var_1.x), !vec2<bool>(true, var_1.x), var_1.yz), ~(-select(firstTrailingBit(20003i), 2147483647i, false && var_1.x)), countOneBits(_wgslsmith_add_u32(reverseBits(firstLeadingBit(var_0.x)), var_0.x << (_wgslsmith_dot_vec4_u32(vec4<u32>(4294967295u, u_input.b.x, u_input.b.x, 82015u), vec4<u32>(1u, u_input.a, u_input.a, var_0.x)) % 32u))));
            }
        }
        case -21605i: {
        }
        default: {
            let var_0 = min(~_wgslsmith_sub_vec2_i32(~vec2<i32>(1i, 1i), ~vec2<i32>(31656i, 1i)), ~max(abs(~vec2<i32>(7286i, -787i)), vec2<i32>(-12157i, 2147483647i) << (u_input.b.ww % vec2<u32>(32u))));
            var var_1 = false;
            let var_2 = Struct_1(countOneBits(4294967295u), vec2<bool>(false, any(vec2<bool>(true, any(vec4<bool>(true, true, false, false))))), var_0.x, select(u_input.a, 74561u, true));
            var_1 = true;
        }
    }
    var var_0 = vec3<f32>(1f, 1f, 1f);
    let var_1 = false;
    var_0 = _wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -1314f), 1000f, _wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(var_0.x, var_0.x, true)) - _wgslsmith_f_op_f32(step(-1026f, var_0.x))), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-2259f - 971f))))) * _wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(-1071f, 1200f, var_0.x))))))), _wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(579f, var_0.x, var_0.x)) * vec3<f32>(var_0.x, var_0.x, var_0.x)))))));
    return min(-firstLeadingBit(~(-37647i)), i32(-1i) * i32(-2147483648));
}

fn func_5(arg_0: vec2<i32>, arg_1: vec3<bool>) -> Struct_1 {
    for (var var_0 = i32(-2147483648); !any(select(select(select(vec4<bool>(arg_1.x, true, false, true), vec4<bool>(false, arg_1.x, arg_1.x, true), false), select(vec4<bool>(arg_1.x, arg_1.x, arg_1.x, arg_1.x), vec4<bool>(arg_1.x, arg_1.x, true, arg_1.x), vec4<bool>(false, arg_1.x, false, arg_1.x)), arg_1.x), !vec4<bool>(arg_1.x, arg_1.x, true, true), true)); var_0 -= 1i) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        let var_1 = true;
        continue;
    }
    var var_0 = func_6();
    for (var var_1: i32; any(!vec3<bool>(!all(vec3<bool>(false, arg_1.x, true)), true, false)); var_1 += 1i) {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
    }
    var_0 = _wgslsmith_div_i32(max(_wgslsmith_clamp_i32(i32(-2147483648) ^ arg_0.x, _wgslsmith_dot_vec4_i32(vec4<i32>(22042i, 1i, arg_0.x, arg_0.x), vec4<i32>(arg_0.x, arg_0.x, -44246i, 1i)), min(arg_0.x, 43900i)) & abs(arg_0.x), _wgslsmith_clamp_i32(arg_0.x & arg_0.x, _wgslsmith_mult_i32(_wgslsmith_dot_vec3_i32(vec3<i32>(0i, arg_0.x, 3857i), vec3<i32>(0i, arg_0.x, arg_0.x)), firstTrailingBit(arg_0.x)), arg_0.x)), arg_0.x);
    loop {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
    }
    return Struct_1(_wgslsmith_clamp_u32(_wgslsmith_sub_u32(u_input.b.x, u_input.a) & 55320u, ~45482u, firstLeadingBit(abs(_wgslsmith_add_u32(u_input.a, u_input.b.x)))), arg_1.zy, _wgslsmith_dot_vec4_i32(_wgslsmith_div_vec4_i32(vec4<i32>(i32(-2147483648), arg_0.x << (u_input.a % 32u), -arg_0.x, i32(-1i) * i32(-2147483648)), vec4<i32>(2147483647i, -36673i, arg_0.x, arg_0.x) & firstTrailingBit(vec4<i32>(arg_0.x, arg_0.x, 14385i, 0i))), abs(vec4<i32>(0i, -17035i, arg_0.x, 79324i) >> (max(vec4<u32>(22837u, u_input.b.x, u_input.b.x, 5337u), vec4<u32>(27748u, 0u, 27368u, 45626u)) % vec4<u32>(32u)))), 4294967295u);
}

fn func_4(arg_0: vec2<i32>, arg_1: f32, arg_2: i32) -> Struct_1 {
    switch (-(i32(-1i) * -40966i)) {
        default: {
            let var_0 = Struct_1(4294967295u, !vec2<bool>(true, any(vec3<bool>(true, true, true))), arg_2, u_input.b.x);
            for (var var_1 = -78985i; ; var_1 -= 1i) {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                let var_2 = func_5(_wgslsmith_mod_vec2_i32(_wgslsmith_div_vec2_i32(_wgslsmith_mult_vec2_i32(arg_0, vec2<i32>(arg_0.x, 0i)), arg_0) & vec2<i32>(countOneBits(arg_0.x), max(var_0.c, 0i)), arg_0), !(!(!vec3<bool>(var_0.b.x, false, true))));
                var_1 = 2147483647i >> (_wgslsmith_dot_vec3_u32(~u_input.b.zwx, u_input.b.ywx) % 32u);
                var var_3 = var_2;
                var var_4 = _wgslsmith_add_u32(_wgslsmith_clamp_u32(~(~2341u), ~reverseBits(reverseBits(var_2.d)), 4294967295u), abs(_wgslsmith_mod_u32(~max(4294967295u, 4294967295u), _wgslsmith_div_u32(var_0.a, 1u ^ u_input.a))));
            }
            switch (_wgslsmith_div_i32(0i, ~(i32(-1i) * -25808i))) {
                case 8555i: {
                    let var_1 = var_0.a;
                    var var_2 = false;
                    var var_3 = vec3<bool>(!(-1000f != arg_1), true | ((~arg_2 < arg_2) | false), all(vec4<bool>(var_0.b.x, !var_0.b.x != true, any(vec2<bool>(var_0.b.x, var_0.b.x)), false)));
                    let var_4 = ~(~(abs(var_0.a) << (24797u % 32u)));
                }
                case -1i: {
                    var var_1 = !vec3<bool>(true, !(!(!var_0.b.x)), var_0.b.x);
                    var var_2 = func_5(~_wgslsmith_div_vec2_i32(~vec2<i32>(var_0.c, -8143i), -arg_0 & vec2<i32>(arg_0.x, 0i)), vec3<bool>(var_1.x, var_0.b.x, var_1.x)).b;
                    let var_3 = any(!select(!select(vec3<bool>(var_2.x, var_0.b.x, false), vec3<bool>(false, true, var_2.x), var_0.b.x), select(!vec3<bool>(var_0.b.x, false, var_2.x), !vec3<bool>(var_1.x, false, var_0.b.x), true && var_2.x), !select(vec3<bool>(var_2.x, var_0.b.x, var_2.x), vec3<bool>(var_1.x, var_1.x, true), false)));
                    let var_4 = true;
                    var_1 = !(!(!select(vec3<bool>(var_1.x, var_3, false), !vec3<bool>(var_0.b.x, false, var_3), any(vec4<bool>(var_1.x, var_0.b.x, var_1.x, var_2.x)))));
                }
                case 1i: {
                    var var_1 = !func_5(vec2<i32>(2147483647i, -max(32608i, arg_2)), select(select(select(vec3<bool>(var_0.b.x, var_0.b.x, var_0.b.x), vec3<bool>(var_0.b.x, true, var_0.b.x), false), select(vec3<bool>(false, false, true), vec3<bool>(var_0.b.x, true, false), var_0.b.x), arg_1 <= arg_1), !(!vec3<bool>(var_0.b.x, var_0.b.x, var_0.b.x)), !(!vec3<bool>(var_0.b.x, false, false)))).b;
                    var_1 = !var_0.b;
                    var var_2 = arg_1;
                    var_1 = var_0.b;
                    var_1 = vec2<bool>(false, all(vec4<bool>(!(var_0.b.x && true), false & !var_1.x, var_1.x, var_1.x || (var_0.a <= 0u))));
                }
                default: {
                    let var_1 = !(!all(vec2<bool>(true, var_0.b.x)));
                    var var_2 = select(arg_0, firstTrailingBit(abs(arg_0)), arg_2 >= -7984i);
                    var_2 = _wgslsmith_mod_vec2_i32(select(vec2<i32>(i32(-2147483648), _wgslsmith_mod_i32(-20838i, arg_2)), abs(arg_0), _wgslsmith_mod_u32(u_input.a, var_0.a) <= 39137u) & vec2<i32>(1i, var_0.c << (~22429u % 32u)), arg_0);
                    var_2 = _wgslsmith_mod_vec2_i32(~(-arg_0), arg_0);
                    let var_3 = var_0.b.x;
                }
            }
        }
    }
    switch (countOneBits(firstLeadingBit(~(-arg_2)))) {
        case 1i: {
            let var_0 = Struct_1(4294967295u, !select(vec2<bool>(true, true), func_5(vec2<i32>(0i, 1i) << (u_input.b.wx % vec2<u32>(32u)), vec3<bool>(true, true, true)).b, vec2<bool>(any(vec4<bool>(false, true, true, true)), true)), arg_0.x, u_input.b.x);
            var var_1 = ~(~firstTrailingBit(countOneBits(vec4<u32>(1u, 32997u, 25753u, var_0.a))));
            switch (_wgslsmith_div_i32(i32(-2147483648), i32(-2147483648))) {
                case 1i: {
                }
                case 37018i: {
                }
                case 0i: {
                    var var_2 = _wgslsmith_dot_vec4_u32(~_wgslsmith_div_vec4_u32((vec4<u32>(1u, var_1.x, 1u, 0u) << (vec4<u32>(var_1.x, 16726u, u_input.a, u_input.a) % vec4<u32>(32u))) | max(u_input.b, vec4<u32>(4294967295u, 1u, 68171u, 1u)), ~(~vec4<u32>(1u, 62032u, var_1.x, 1u))), vec4<u32>(_wgslsmith_dot_vec4_u32(u_input.b, max(vec4<u32>(1u, 1u, 4294967295u, 20391u), vec4<u32>(var_1.x, 4294967295u, u_input.a, var_0.a))), u_input.a, ~var_1.x, 1u) ^ u_input.b);
                    var_2 = u_input.a;
                    var_1 = vec4<u32>(countOneBits(4294967295u), u_input.a, 1u, 34203u);
                    var_1 = ~vec4<u32>(~1u, _wgslsmith_div_u32(0u, 1245u), 53806u, abs(var_0.a));
                    let var_3 = var_0;
                }
                default: {
                    let var_2 = var_0;
                }
            }
            var var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-1000f * 327f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(arg_1, 369f)))))) != 843f;
        }
        case 12404i: {
            if (!(!select(all(vec3<bool>(false, true, true)), (u_input.b.x <= u_input.b.x) | true, all(select(vec3<bool>(false, true, true), vec3<bool>(false, true, true), vec3<bool>(false, true, true)))))) {
                let var_0 = vec2<bool>(select(all(vec4<bool>(false, false, false, false)) && !func_5(vec2<i32>(7954i, arg_2), vec3<bool>(false, false, false)).b.x, !(!select(true, false, true)), all(select(vec2<bool>(false, true), vec2<bool>(false, true), vec2<bool>(true, true)))), true);
                var var_1 = Struct_1(~select(~u_input.b.x, min(59490u, _wgslsmith_mult_u32(u_input.b.x, 4294967295u)), false), vec2<bool>(var_0.x, !select(var_0.x, u_input.b.x == 15700u, true)), ~1i, ~_wgslsmith_mult_u32(u_input.a, u_input.b.x));
                let var_2 = func_5(max(arg_0, vec2<i32>(arg_2, -1i)), select(select(vec3<bool>(var_1.b.x & var_0.x, true, all(var_1.b)), select(vec3<bool>(false, false, var_1.b.x), !vec3<bool>(var_1.b.x, false, true), vec3<bool>(false, true, var_1.b.x)), select(vec3<bool>(var_0.x, false, true), !vec3<bool>(var_1.b.x, var_1.b.x, var_1.b.x), var_1.a > 4294967295u)), vec3<bool>(!var_1.b.x, var_1.b.x, true), !select(select(vec3<bool>(var_0.x, false, true), vec3<bool>(var_1.b.x, var_1.b.x, var_0.x), vec3<bool>(var_0.x, var_1.b.x, var_1.b.x)), select(vec3<bool>(var_1.b.x, var_1.b.x, var_1.b.x), vec3<bool>(var_1.b.x, var_0.x, var_0.x), false), vec3<bool>(var_1.b.x, false, var_0.x))));
            }
            switch (func_5(_wgslsmith_div_vec2_i32(min(-(~vec2<i32>(-8416i, arg_0.x)), max(arg_0, arg_0) | arg_0), -vec2<i32>(arg_0.x | arg_0.x, 24325i)), !(!select(vec3<bool>(true, true, true), vec3<bool>(true, false, true), false))).c) {
                default: {
                    let var_0 = Struct_1(u_input.a, !vec2<bool>(false, any(vec4<bool>(false, false, true, true))), ~_wgslsmith_sub_i32(~14328i, arg_0.x), 4294967295u);
                    let var_1 = Struct_1(~_wgslsmith_mult_u32(~(var_0.a & u_input.b.x), _wgslsmith_mod_u32(_wgslsmith_dot_vec2_u32(u_input.b.yw, u_input.b.ww), var_0.d)), var_0.b, var_0.c, 4294967295u);
                    let var_2 = var_1;
                    var var_3 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -434f))) * _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(arg_1 + arg_1))));
                }
            }
            for (var var_0 = 1i; true; ) {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                let var_1 = select(select(select(select(vec4<bool>(true, false, false, false), vec4<bool>(true, true, true, true), any(vec2<bool>(true, false))), select(select(vec4<bool>(true, true, true, true), vec4<bool>(true, false, true, false), false), vec4<bool>(true, true, true, true), any(vec2<bool>(true, true))), vec4<bool>(all(vec4<bool>(false, true, true, true)), true, true, true)), select(vec4<bool>(true, all(vec4<bool>(false, true, false, false)), true, false), vec4<bool>(func_5(vec2<i32>(arg_2, 43606i), vec3<bool>(false, false, true)).b.x, true, true, true), true), select(select(vec4<bool>(false, false, false, false), select(vec4<bool>(true, true, false, false), vec4<bool>(false, false, true, true), vec4<bool>(false, false, true, false)), vec4<bool>(false, false, true, true)), select(select(vec4<bool>(false, true, true, false), vec4<bool>(true, false, false, false), false), vec4<bool>(true, false, true, true), vec4<bool>(false, false, false, false)), select(vec4<bool>(false, false, false, true), vec4<bool>(true, true, true, true), select(vec4<bool>(false, true, false, false), vec4<bool>(true, false, false, true), vec4<bool>(true, false, true, false))))), !vec4<bool>(!func_5(arg_0, vec3<bool>(true, true, false)).b.x, false, true, !(634f <= arg_1)), -1000f != _wgslsmith_f_op_f32(trunc(-1163f)));
                var var_2 = func_5(vec2<i32>(2147483647i | _wgslsmith_clamp_i32(_wgslsmith_add_i32(14110i, -1i), -arg_0.x, func_6()), i32(-2147483648)), var_1.yzz);
                let var_3 = -406f;
                var_2 = Struct_1(countOneBits(_wgslsmith_add_u32(~_wgslsmith_dot_vec4_u32(vec4<u32>(4294967295u, u_input.b.x, 11859u, 4294967295u), u_input.b), firstLeadingBit(_wgslsmith_mult_u32(var_2.d, 63333u)))), select(func_5(-arg_0, var_1.zyz).b, vec2<bool>(select(!var_2.b.x, true, !var_1.x), !var_1.x), true), -var_2.c, var_2.a);
            }
        }
        case 0i: {
            loop {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                continue;
            }
        }
        case i32(-2147483648): {
            if (any(vec3<bool>(true, true, true)) != true) {
                let var_0 = Struct_1(27082u & u_input.b.x, vec2<bool>(true, true), ~arg_0.x, u_input.b.x);
                let var_1 = abs(vec3<u32>(~firstLeadingBit(abs(var_0.a)), var_0.a, u_input.b.x));
                return Struct_1(func_5(vec2<i32>(arg_0.x, var_0.c), !(!select(vec3<bool>(false, true, false), vec3<bool>(true, var_0.b.x, true), var_0.b.x))).d, var_0.b, 1i, func_5(-arg_0, select(vec3<bool>(true, true, true), !vec3<bool>(var_0.b.x, false, var_0.b.x), vec3<bool>(false, var_0.b.x, var_0.b.x))).a | 17180u);
            }
        }
        default: {
            var var_0 = arg_0;
            var var_1 = Struct_1(abs(_wgslsmith_mult_u32(_wgslsmith_add_u32(~u_input.a, ~1u), u_input.b.x << (u_input.a % 32u))), !vec2<bool>(_wgslsmith_f_op_f32(1000f * -1376f) != _wgslsmith_f_op_f32(-arg_1), false), -(-1i | abs(arg_2)), ~u_input.a);
            var_0 = vec2<i32>(~(-_wgslsmith_clamp_i32(0i, 0i, arg_0.x) & ~(~var_1.c)), countOneBits(~max(1i, 2147483647i)));
        }
    }
    let var_0 = _wgslsmith_f_op_f32(f32(-1f) * -610f);
    return Struct_1(u_input.a, vec2<bool>(!any(vec4<bool>(true, true, true, true)), !any(select(vec2<bool>(true, true), vec2<bool>(false, true), false))), -_wgslsmith_clamp_i32(arg_2, 36813i, abs(20085i)) ^ _wgslsmith_mod_i32(-8227i, firstLeadingBit(i32(-1i) * i32(-2147483648))), u_input.b.x);
}

fn func_7(arg_0: Struct_1, arg_1: Struct_1) -> Struct_1 {
    let var_0 = firstLeadingBit(~(~vec2<i32>(i32(-1i) * i32(-2147483648), 1i)));
    for (; true; ) {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        switch (var_0.x) {
            default: {
                let var_1 = select(!select(vec3<bool>(true, true, true), vec3<bool>(!arg_1.b.x, -35733i >= var_0.x, false), select(!vec3<bool>(arg_0.b.x, false, arg_0.b.x), !vec3<bool>(arg_0.b.x, true, arg_1.b.x), !vec3<bool>(true, arg_1.b.x, false))), vec3<bool>(!(arg_0.b.x && true), !(!(var_0.x >= var_0.x)), !(!select(true, true, true))), vec3<bool>(arg_0.b.x, arg_1.b.x, func_5(countOneBits(countOneBits(var_0)), !vec3<bool>(arg_0.b.x, false, arg_0.b.x)).b.x));
            }
        }
        break;
    }
    var var_1 = vec2<u32>(16799u, arg_0.d);
    for (var var_2 = -1i; false; var_2 = -2147483647i) {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        var var_3 = func_4(~vec2<i32>(-_wgslsmith_mod_i32(arg_0.c, 60563i), select(arg_0.c, ~0i, arg_1.b.x)), 910f, 0i);
        var var_4 = Struct_1(var_3.a, func_4(_wgslsmith_div_vec2_i32(vec2<i32>(-1i) * -vec2<i32>(var_0.x, -1i), var_0), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1f * _wgslsmith_f_op_f32(956f - -828f))), (_wgslsmith_dot_vec2_i32(var_0, var_0) >> (~u_input.b.x % 32u)) | i32(-2147483648)).b, 37999i, _wgslsmith_sub_u32(~(~(1u << (var_3.a % 32u))), ~func_5(vec2<i32>(i32(-2147483648), -11354i), vec3<bool>(var_3.b.x, arg_0.b.x, arg_1.b.x)).a));
        let var_5 = ~reverseBits(~u_input.b.xw);
        switch (_wgslsmith_div_i32(_wgslsmith_add_i32(10116i, -5186i), -_wgslsmith_dot_vec2_i32(_wgslsmith_add_vec2_i32(var_0, firstLeadingBit(vec2<i32>(-41709i, -1i))), var_0 & vec2<i32>(-1i, -26931i)))) {
            case -30961i: {
                var var_6 = Struct_1(var_1.x, vec2<bool>(func_5(var_0, select(select(vec3<bool>(false, false, false), vec3<bool>(var_3.b.x, false, arg_1.b.x), vec3<bool>(false, true, arg_0.b.x)), vec3<bool>(var_3.b.x, true, true), select(vec3<bool>(false, arg_1.b.x, true), vec3<bool>(true, false, true), var_4.b.x))).b.x, arg_0.b.x), 1i, 81546u);
                var var_7 = 527f;
                break;
            }
            case 16361i: {
                var var_6 = firstTrailingBit(vec2<i32>(~35549i, i32(-1i) * -16466i));
            }
            case 15988i: {
                let var_6 = !func_4(~_wgslsmith_clamp_vec2_i32(var_0, vec2<i32>(var_4.c, i32(-2147483648)), _wgslsmith_mult_vec2_i32(var_0, var_0)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(-405f)))), countOneBits(abs(i32(-1i) * -55599i))).b.x;
                var_3 = Struct_1(~_wgslsmith_clamp_u32(_wgslsmith_clamp_u32(arg_0.d, u_input.a, 20477u) & ~var_1.x, 42267u | max(arg_0.a, 23032u), countOneBits(~27291u)), !select(!(!var_3.b), arg_0.b, true), _wgslsmith_div_i32(~2147483647i, arg_0.c), ~_wgslsmith_sub_u32(_wgslsmith_mod_u32(var_5.x | 20857u, func_5(var_0, vec3<bool>(false, var_4.b.x, false)).d), _wgslsmith_div_u32(12896u, _wgslsmith_add_u32(35877u, var_5.x))));
                var var_7 = _wgslsmith_f_op_vec3_f32(max(vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(-875f, _wgslsmith_f_op_f32(f32(-1f) * -1092f))) * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1367f))), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(600f, 507f)), 1f)), 761f), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(select(-643f, 501f, var_3.b.x)), _wgslsmith_f_op_f32(max(-380f, -1316f)), 2042f)) + _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(vec3<f32>(-133f, 170f, -1020f) - vec3<f32>(-1987f, 224f, -372f))))))));
                let var_8 = func_4(var_0, _wgslsmith_div_f32(_wgslsmith_div_f32(1000f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_7.x))), var_7.x), 17245i);
                let var_9 = _wgslsmith_add_i32(2147483647i | arg_1.c, 2147483647i);
            }
            case -48508i: {
                var_4 = func_5(-vec2<i32>(0i, var_0.x << (abs(arg_1.d) % 32u)), vec3<bool>(all(vec2<bool>(any(vec4<bool>(var_4.b.x, true, false, arg_1.b.x)), true)), !any(select(vec2<bool>(var_4.b.x, arg_0.b.x), vec2<bool>(true, var_3.b.x), true)), true));
            }
            default: {
                return Struct_1(arg_1.d, select(vec2<bool>(true, false), vec2<bool>(var_3.b.x, !(var_4.c <= -1i)), !arg_0.b), -25973i, arg_1.a);
            }
        }
    }
    var_1 = firstTrailingBit(~(~u_input.b.zz));
    return Struct_1(reverseBits(~(~countOneBits(var_1.x))), vec2<bool>(true, ~var_1.x > ~firstTrailingBit(0u)), 2147483647i, ~countOneBits(1u) & _wgslsmith_add_u32(~arg_1.a, ~(arg_1.d | u_input.a)));
}

fn func_8(arg_0: Struct_1, arg_1: Struct_1) -> Struct_1 {
    var var_0 = Struct_1(abs(reverseBits(~u_input.a)), func_7(arg_0, Struct_1(0u, !(!vec2<bool>(arg_0.b.x, arg_0.b.x)), ~2147483647i, _wgslsmith_clamp_u32(1614u, 79689u, _wgslsmith_div_u32(u_input.b.x, 1u)))).b, (arg_1.c ^ ~abs(3768i)) | arg_1.c, _wgslsmith_dot_vec3_u32(vec3<u32>(~arg_1.a, _wgslsmith_mod_u32(arg_1.a, 4294967295u), 4294967295u) & vec3<u32>(u_input.b.x, func_5(vec2<i32>(-12091i, -337i), vec3<bool>(arg_1.b.x, false, true)).d, _wgslsmith_mult_u32(u_input.a, 4294967295u)), max(~(~u_input.b.wyz), u_input.b.wzy)));
    if (true) {
        let var_1 = func_7(arg_0, arg_0);
    }
    let var_1 = vec3<i32>(_wgslsmith_dot_vec4_i32(countOneBits(select(select(vec4<i32>(arg_1.c, var_0.c, 0i, 0i), vec4<i32>(-30871i, arg_0.c, var_0.c, 63616i), vec4<bool>(arg_0.b.x, false, arg_1.b.x, true)), abs(vec4<i32>(arg_0.c, -6137i, arg_0.c, -1i)), vec4<bool>(arg_0.b.x, arg_0.b.x, arg_1.b.x, var_0.b.x))), abs(~vec4<i32>(var_0.c, var_0.c, arg_0.c, -1i) >> (vec4<u32>(0u, 74998u, 10768u, arg_1.a) % vec4<u32>(32u)))), arg_1.c, 47607i);
    if (!all(vec4<bool>(true, -1i > func_7(Struct_1(arg_1.a, vec2<bool>(false, arg_1.b.x), -1i, 26022u), Struct_1(arg_0.d, vec2<bool>(var_0.b.x, var_0.b.x), arg_1.c, 1u)).c, !all(vec3<bool>(arg_0.b.x, arg_1.b.x, false)), any(select(vec2<bool>(var_0.b.x, arg_1.b.x), arg_1.b, vec2<bool>(true, true)))))) {
        var_0 = func_7(arg_0, arg_1);
        for (var var_2 = 1804i; var_0.b.x; ) {
            if (LOOP_COUNTERS[9u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
            var_2 = i32(-1i) * -1i;
            var var_3 = _wgslsmith_f_op_vec2_f32(step(vec2<f32>(274f, 927f), vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(111f + -1071f), 1f))), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(_wgslsmith_div_f32(952f, 1376f) * 1f))))));
        }
        let var_2 = arg_1.b;
    }
    var_0 = Struct_1(_wgslsmith_mod_u32(~0u, ~select(1u, arg_1.a >> (arg_0.d % 32u), !arg_1.b.x)), func_4(~(~var_1.yz), _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1427f)))), -2180i).b, arg_1.c << (~(~(~var_0.a)) % 32u), _wgslsmith_div_u32(~0u, ~func_7(arg_0, Struct_1(arg_0.d, vec2<bool>(false, false), arg_1.c, 108801u)).a & 1u));
    return func_5(var_1.yz, select(vec3<bool>(arg_1.b.x, !arg_0.b.x, true), select(select(!vec3<bool>(arg_0.b.x, true, var_0.b.x), vec3<bool>(arg_0.b.x, false, false), !vec3<bool>(arg_0.b.x, arg_0.b.x, true)), !vec3<bool>(true, arg_1.b.x, false), select(vec3<bool>(arg_0.b.x, var_0.b.x, arg_0.b.x), vec3<bool>(false, arg_0.b.x, var_0.b.x), arg_1.b.x)), vec3<bool>(!arg_1.b.x, !(!var_0.b.x), var_0.b.x)));
}

fn func_3(arg_0: vec3<bool>, arg_1: Struct_1, arg_2: u32) -> vec2<bool> {
    loop {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        continue;
    }
    for (var var_0 = ~arg_1.c; var_0 != 2147483647i; var_0 = 4870i) {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        break;
    }
    let var_0 = func_8(func_7(Struct_1(arg_2, vec2<bool>(all(vec4<bool>(arg_1.b.x, true, true, arg_0.x)), arg_1.b.x), ~(i32(-2147483648)), 23539u), func_4(_wgslsmith_mult_vec2_i32(_wgslsmith_div_vec2_i32(vec2<i32>(arg_1.c, 2147483647i), vec2<i32>(2147483647i, arg_1.c)), vec2<i32>(-1719i, arg_1.c) | vec2<i32>(arg_1.c, arg_1.c)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1000f) - _wgslsmith_div_f32(-148f, 131f)), arg_1.c)), arg_1);
    let var_1 = _wgslsmith_mult_vec3_u32(~u_input.b.zwx, reverseBits(~firstLeadingBit(u_input.b.yxx)));
    let var_2 = var_0;
    return arg_1.b;
}

fn func_2(arg_0: f32, arg_1: u32) -> i32 {
    loop {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        for (var var_0 = 21099i; all(select(!(!select(vec2<bool>(false, false), vec2<bool>(false, true), true)), !func_3(select(vec3<bool>(false, true, true), vec3<bool>(false, true, true), true), Struct_1(0u, vec2<bool>(true, true), 12235i, u_input.b.x), max(200816u, arg_1)), select(vec2<bool>(false, true), vec2<bool>(true, true), all(vec4<bool>(true, true, true, true))))); var_0 += 1i) {
            if (LOOP_COUNTERS[13u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
            let var_1 = _wgslsmith_f_op_f32(arg_0 + _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_0) * _wgslsmith_f_op_f32(706f - -816f)))));
            var var_2 = Struct_1(firstTrailingBit(func_8(Struct_1(arg_1, vec2<bool>(true, true), func_6(), ~1u), func_8(Struct_1(arg_1, vec2<bool>(false, false), 0i, 4294967295u), func_7(Struct_1(arg_1, vec2<bool>(false, true), -35428i, u_input.b.x), Struct_1(0u, vec2<bool>(false, false), i32(-2147483648), 9242u)))).a), func_8(Struct_1(u_input.b.x, select(vec2<bool>(true, true), vec2<bool>(true, true), true), 0i, func_5(vec2<i32>(-8086i, 2147483647i), vec3<bool>(true, true, true)).a), func_8(func_7(func_5(vec2<i32>(-21972i, -1i), vec3<bool>(true, true, false)), Struct_1(31176u, vec2<bool>(true, true), -3237i, u_input.a)), func_7(Struct_1(u_input.b.x, vec2<bool>(false, true), 1i, 1u), func_7(Struct_1(4791u, vec2<bool>(true, false), -46643i, arg_1), Struct_1(u_input.b.x, vec2<bool>(true, false), 2147483647i, 40854u))))).b, ~(-min(2147483647i, -3875i) >> (func_5(vec2<i32>(1i, 1i), select(vec3<bool>(true, false, false), vec3<bool>(true, false, false), vec3<bool>(true, false, false))).d % 32u)), func_7(Struct_1(arg_1, vec2<bool>(true, false), -37434i, u_input.b.x), Struct_1(arg_1, vec2<bool>(true, true), func_6() << (select(0u, u_input.b.x, false) % 32u), ~15335u)).a);
            let var_3 = func_4(_wgslsmith_sub_vec2_i32(~(-(~vec2<i32>(var_2.c, var_2.c))), select(-vec2<i32>(1i, var_2.c), _wgslsmith_clamp_vec2_i32(_wgslsmith_add_vec2_i32(vec2<i32>(var_2.c, var_2.c), vec2<i32>(var_2.c, 13297i)), min(vec2<i32>(0i, var_2.c), vec2<i32>(i32(-2147483648), var_2.c)), select(vec2<i32>(var_2.c, var_2.c), vec2<i32>(var_2.c, 0i), var_2.b)), var_2.b)), _wgslsmith_f_op_f32(round(-1080f)), -20680i);
            let var_4 = Struct_1(~(~arg_1), func_7(Struct_1(~(~4294967295u), var_3.b, _wgslsmith_add_i32(var_3.c, var_3.c | -28218i), firstTrailingBit(_wgslsmith_dot_vec3_u32(u_input.b.yyz, vec3<u32>(60983u, var_2.a, 28675u)))), func_7(Struct_1(6468u, var_3.b, _wgslsmith_dot_vec4_i32(vec4<i32>(-2696i, 2741i, var_3.c, -42783i), vec4<i32>(-1i, var_2.c, var_3.c, 1i)), var_3.a), Struct_1(1u, vec2<bool>(false, var_2.b.x), var_3.c, countOneBits(8383u)))).b, _wgslsmith_mod_i32(var_2.c, ~(-4314i)), abs(~(~arg_1)));
        }
        switch (i32(-2147483648)) {
            case 63344i: {
            }
            default: {
            }
        }
        loop {
            if (LOOP_COUNTERS[14u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
            continue;
        }
        for (var var_0 = 1i; var_0 >= -1i; var_0 -= 1i) {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            continue;
        }
    }
    loop {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        let var_0 = Struct_1(24959u, func_7(Struct_1(countOneBits(0u) << (0u % 32u), vec2<bool>(true, true), -(-39548i << (arg_1 % 32u)), func_7(Struct_1(4294967295u, vec2<bool>(false, false), 0i, u_input.a), Struct_1(u_input.b.x, vec2<bool>(false, false), -13092i, arg_1)).d), func_4(vec2<i32>(1i, 1i), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(1509f, arg_0, true))), 1i)).b, -17432i, 13638u);
    }
    let var_0 = vec3<bool>(false, false, select(select(true, false, true), true, true) != false);
    let var_1 = _wgslsmith_f_op_vec2_f32(-vec2<f32>(arg_0, _wgslsmith_f_op_f32(-1000f)));
    switch (-1i) {
        case -33452i: {
            var var_2 = _wgslsmith_clamp_vec3_i32(vec3<i32>(38894i, _wgslsmith_div_i32(i32(-2147483648), _wgslsmith_sub_i32(_wgslsmith_add_i32(1i, -20240i), -1i)), ((i32(-1i) * -45007i) & _wgslsmith_clamp_i32(1i, 1i, i32(-2147483648))) << (~max(arg_1, 0u) % 32u)), _wgslsmith_clamp_vec3_i32(vec3<i32>(_wgslsmith_mod_i32(-12281i, 1i), _wgslsmith_mult_i32(_wgslsmith_clamp_i32(i32(-2147483648), -3847i, 2147483647i), ~0i), -countOneBits(0i)), vec3<i32>(i32(-2147483648), ~17925i, _wgslsmith_dot_vec4_i32(vec4<i32>(28134i, -6758i, 0i, -7977i), vec4<i32>(0i, 1i, 16701i, 2147483647i))) | ~vec3<i32>(i32(-2147483648), 9250i, -1i), vec3<i32>(~_wgslsmith_sub_i32(0i, 38432i), _wgslsmith_mult_i32(2147483647i, i32(-1i) * -1i), _wgslsmith_mod_i32(-7387i, _wgslsmith_mult_i32(9250i, -1i)))), vec3<i32>(~firstLeadingBit(_wgslsmith_mult_i32(-17679i, -23710i)), -1i, 55925i));
            var var_3 = ~vec3<u32>(72104u, ~_wgslsmith_dot_vec3_u32(vec3<u32>(arg_1, u_input.a, u_input.b.x), vec3<u32>(4294967295u, 0u, arg_1)), u_input.a) >> (~_wgslsmith_mult_vec3_u32(~_wgslsmith_mod_vec3_u32(u_input.b.xwx, vec3<u32>(0u, u_input.b.x, u_input.a)), _wgslsmith_div_vec3_u32(~vec3<u32>(arg_1, 63616u, 53810u), u_input.b.yzy)) % vec3<u32>(32u));
        }
        case 0i: {
            loop {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                var var_2 = Struct_1(_wgslsmith_mod_u32(abs(_wgslsmith_dot_vec2_u32(min(u_input.b.xy, vec2<u32>(0u, u_input.b.x)), _wgslsmith_mult_vec2_u32(vec2<u32>(47551u, 15817u), u_input.b.zy))), u_input.b.x), select(var_0.xy, func_4(vec2<i32>(~(i32(-2147483648)), i32(-1i) * -1886i), arg_0, -1i).b, any(select(!vec4<bool>(var_0.x, true, var_0.x, var_0.x), !vec4<bool>(true, var_0.x, false, var_0.x), true))), 20050i, 27980u);
                let var_3 = Struct_1(_wgslsmith_add_u32(_wgslsmith_sub_u32(var_2.a, abs(func_4(vec2<i32>(var_2.c, 29596i), arg_0, var_2.c).d)), _wgslsmith_div_u32(~0u, 13132u)), vec2<bool>(!func_7(Struct_1(u_input.a, var_2.b, -1i, 13520u), Struct_1(u_input.b.x, vec2<bool>(var_0.x, var_0.x), -1i, u_input.a)).b.x, !(!func_7(Struct_1(1u, var_2.b, var_2.c, 0u), Struct_1(1u, var_0.zz, i32(-2147483648), 84700u)).b.x)), -_wgslsmith_div_i32(-31189i, ~var_2.c), 64649u);
                break;
            }
        }
        case i32(-2147483648): {
            loop {
                if (LOOP_COUNTERS[18u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
                var var_2 = Struct_1(~_wgslsmith_add_u32(_wgslsmith_dot_vec4_u32(firstTrailingBit(vec4<u32>(u_input.a, 1u, arg_1, 23887u)), max(vec4<u32>(u_input.b.x, u_input.b.x, 46989u, arg_1), u_input.b)), 18392u), vec2<bool>(!var_0.x, all(func_8(func_7(Struct_1(0u, vec2<bool>(false, true), 3387i, u_input.b.x), Struct_1(u_input.b.x, var_0.xz, -11558i, arg_1)), Struct_1(4294967295u, vec2<bool>(true, var_0.x), i32(-2147483648), arg_1)).b)), _wgslsmith_dot_vec2_i32(_wgslsmith_sub_vec2_i32(min(countOneBits(vec2<i32>(2147483647i, 53720i)), vec2<i32>(-19991i, 1i)), vec2<i32>(reverseBits(i32(-2147483648)), -33985i)), vec2<i32>(1i, 1i)), arg_1);
                var_2 = func_4(vec2<i32>(-1i, ~var_2.c), _wgslsmith_f_op_f32(var_1.x * 395f), ~(-1i));
            }
            var var_2 = _wgslsmith_div_u32(_wgslsmith_add_u32(arg_1, arg_1), _wgslsmith_clamp_u32(1u, arg_1, firstTrailingBit(~u_input.b.x) | 1u));
            var var_3 = false | all(!(!(!vec4<bool>(var_0.x, true, false, true))));
        }
        default: {
            loop {
                if (LOOP_COUNTERS[19u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
                continue;
            }
            var var_2 = _wgslsmith_mod_u32(~countOneBits(func_7(Struct_1(arg_1, vec2<bool>(false, true), 13493i, 43855u), Struct_1(arg_1, vec2<bool>(false, var_0.x), 1i, arg_1)).d), ~(~u_input.a & 44859u)) ^ _wgslsmith_mod_u32(~0u, func_8(func_7(func_8(Struct_1(4294967295u, vec2<bool>(true, var_0.x), -19529i, u_input.b.x), Struct_1(0u, var_0.xy, -25659i, 1u)), Struct_1(24247u, vec2<bool>(var_0.x, var_0.x), -52314i, u_input.a)), Struct_1(_wgslsmith_mod_u32(arg_1, u_input.b.x), var_0.xy, 1i, ~u_input.a)).a);
        }
    }
    return 20204i;
}

fn func_1(arg_0: vec3<f32>, arg_1: Struct_1) -> u32 {
    var var_0 = _wgslsmith_mod_vec3_i32(~vec3<i32>(arg_1.c, 1i, ~arg_1.c), vec3<i32>(-49591i, arg_1.c, func_2(_wgslsmith_f_op_f32(-arg_0.x), 24300u)));
    if (!(!func_8(Struct_1(1u, vec2<bool>(arg_1.b.x, false), func_8(Struct_1(u_input.a, vec2<bool>(arg_1.b.x, true), 60393i, u_input.a), arg_1).c, 1u), Struct_1(abs(arg_1.a), vec2<bool>(false, true), -10810i, countOneBits(48085u))).b.x)) {
        var var_1 = arg_1.c >> (abs(32891u) % 32u);
        let var_2 = _wgslsmith_sub_i32(var_0.x, -2147483647i);
        for (var var_3 = -12007i; func_4((var_0.yz << (_wgslsmith_div_vec2_u32(select(vec2<u32>(arg_1.a, u_input.a), u_input.b.yz, arg_1.b), _wgslsmith_mult_vec2_u32(vec2<u32>(arg_1.a, arg_1.d), vec2<u32>(28075u, arg_1.a))) % vec2<u32>(32u))) & abs(var_0.zy), _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -633f))))), abs(var_0.x) | ~33067i).b.x; var_3 += 1i) {
            if (LOOP_COUNTERS[20u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
            break;
        }
    }
    let var_1 = Struct_1(u_input.a, func_7(func_7(arg_1, arg_1), Struct_1(u_input.a, vec2<bool>(true, any(vec2<bool>(true, arg_1.b.x))), ~arg_1.c, arg_1.d)).b, arg_1.c, arg_1.a);
    let var_2 = _wgslsmith_clamp_u32(1u, var_1.d, var_1.d);
    var_0 = firstLeadingBit(select(reverseBits(_wgslsmith_clamp_vec3_i32(select(vec3<i32>(i32(-2147483648), 0i, 1i), vec3<i32>(49859i, var_1.c, var_0.x), var_1.b.x), _wgslsmith_div_vec3_i32(vec3<i32>(var_1.c, var_1.c, 12307i), vec3<i32>(-1i, var_1.c, 0i)), vec3<i32>(-45477i, i32(-2147483648), var_1.c))), _wgslsmith_mod_vec3_i32(_wgslsmith_add_vec3_i32(~vec3<i32>(-22234i, 33302i, -1i), vec3<i32>(-18945i, var_1.c, -15946i)), (vec3<i32>(var_1.c, var_1.c, var_1.c) | vec3<i32>(var_0.x, -2332i, arg_1.c)) >> (abs(u_input.b.yyx) % vec3<u32>(32u))), true));
    return func_5(vec2<i32>(_wgslsmith_dot_vec2_i32(-vec2<i32>(arg_1.c, 25317i), _wgslsmith_mod_vec2_i32(vec2<i32>(var_1.c, var_0.x), ~vec2<i32>(var_0.x, 41501i))), ~arg_1.c), !vec3<bool>(_wgslsmith_f_op_f32(-1124f * 1813f) >= arg_0.x, arg_1.b.x, arg_1.b.x)).a;
}

fn func_9(arg_0: vec3<u32>, arg_1: vec3<f32>) -> Struct_1 {
    var var_0 = func_6();
    var var_1 = vec4<f32>(-544f, 941f, _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-892f + _wgslsmith_f_op_f32(f32(-1f) * -1000f)), _wgslsmith_f_op_f32(-arg_1.x), true)), 310f);
    for (var var_2 = 19115i; ; var_2 += 1i) {
        if (LOOP_COUNTERS[21u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
        var_2 = -16580i;
        var_1 = _wgslsmith_f_op_vec4_f32(max(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(step(vec4<f32>(var_1.x, var_1.x, var_1.x, arg_1.x), vec4<f32>(var_1.x, var_1.x, arg_1.x, 1544f))) + _wgslsmith_f_op_vec4_f32(max(vec4<f32>(var_1.x, var_1.x, -605f, var_1.x), vec4<f32>(1323f, -1885f, arg_1.x, var_1.x))))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(arg_1.x, 733f, 910f, -1000f))))))), _wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-1545f, -1518f, 619f, var_1.x)))))))));
    }
    var_0 = min(-14817i, -_wgslsmith_add_i32(func_8(func_4(vec2<i32>(2147483647i, i32(-2147483648)), arg_1.x, 1i), func_5(vec2<i32>(25908i, -1i), vec3<bool>(false, false, false))).c, min(_wgslsmith_mult_i32(-48398i, -1i), 1i)));
    switch (func_4(~vec2<i32>(select(-33591i, 0i >> (1u % 32u), select(true, false, false)), func_2(_wgslsmith_f_op_f32(var_1.x + arg_1.x), ~31544u)), -460f, 2845i << (_wgslsmith_add_u32(0u, arg_0.x) % 32u)).c) {
        case 0i: {
            if (true) {
                let var_2 = vec2<bool>(true, true);
                var var_3 = var_1.x;
                var var_4 = vec4<bool>(!any(vec2<bool>(any(vec4<bool>(false, var_2.x, var_2.x, var_2.x)), !var_2.x)), false, any(select(!(!vec3<bool>(true, false, var_2.x)), !(!vec3<bool>(var_2.x, var_2.x, var_2.x)), select(!vec3<bool>(var_2.x, var_2.x, true), vec3<bool>(true, var_2.x, var_2.x), vec3<bool>(var_2.x, false, var_2.x)))), !func_8(Struct_1(_wgslsmith_dot_vec2_u32(arg_0.yz, u_input.b.wy), !vec2<bool>(var_2.x, var_2.x), 1i, _wgslsmith_dot_vec3_u32(arg_0, u_input.b.xxw)), func_4(vec2<i32>(1i, 1i), arg_1.x, -1i)).b.x);
            }
            var_0 = _wgslsmith_add_i32(_wgslsmith_mult_i32(_wgslsmith_mod_i32(55086i, 2147483647i), -func_7(func_5(vec2<i32>(-36318i, 2147483647i), vec3<bool>(false, false, true)), func_8(Struct_1(u_input.a, vec2<bool>(true, true), 29852i, 1u), Struct_1(19391u, vec2<bool>(false, false), -21762i, u_input.a))).c), abs(~0i));
            switch (firstTrailingBit(1i ^ firstTrailingBit(1i))) {
                case 0i: {
                    var var_2 = !select(!select(vec3<bool>(true, true, true), select(vec3<bool>(false, false, false), vec3<bool>(true, false, true), false), true), select(vec3<bool>(var_1.x != 1000f, false, false), !select(vec3<bool>(true, false, false), vec3<bool>(true, true, true), vec3<bool>(true, true, false)), vec3<bool>(true, true, true)), any(select(vec3<bool>(true, true, false), vec3<bool>(false, false, true), vec3<bool>(true, false, true))) | any(vec2<bool>(true, true)));
                    let var_3 = i32(-1i) * -(~_wgslsmith_div_i32(~(-44122i), _wgslsmith_mod_i32(23049i, -40728i)));
                }
                default: {
                }
            }
            var var_2 = vec4<f32>(arg_1.x, _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_div_f32(-1579f, arg_1.x), _wgslsmith_div_f32(-515f, 241f))))), _wgslsmith_f_op_f32(-708f), _wgslsmith_f_op_f32(-483f * var_1.x));
        }
        case -17617i: {
            for (var var_2 = 0i; var_2 <= -1357i; var_2 -= 1i) {
                if (LOOP_COUNTERS[22u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
                break;
            }
            var_0 = 1i >> (_wgslsmith_add_u32(u_input.b.x, u_input.b.x) % 32u);
            switch (-1i) {
                case -36447i: {
                    var_1 = _wgslsmith_f_op_vec4_f32(step(_wgslsmith_div_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(-2534f + -1127f), 183f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-156f * var_1.x) + -543f), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(var_1.x, arg_1.x))), _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(var_1.x, var_1.x, -465f, -281f) * _wgslsmith_f_op_vec4_f32(min(vec4<f32>(arg_1.x, 683f, -808f, arg_1.x), vec4<f32>(1584f, 142f, 662f, 570f)))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(floor(vec4<f32>(arg_1.x, 170f, -123f, 1000f))) * _wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_1.x, arg_1.x, -376f, var_1.x))))), _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_1.x) * _wgslsmith_f_op_f32(max(-839f, arg_1.x))), _wgslsmith_f_op_f32(abs(var_1.x)), -1147f, _wgslsmith_f_op_f32(var_1.x + _wgslsmith_f_op_f32(min(-110f, -1129f)))))));
                    var_0 = abs(-_wgslsmith_sub_i32(1i, abs(40113i)));
                    let var_2 = func_4(~vec2<i32>(-9432i, i32(-1i) * -63112i), var_1.x, -1i).b;
                    var var_3 = ~firstLeadingBit(vec2<i32>(-2246i, -abs(0i)));
                }
                default: {
                    var_1 = _wgslsmith_f_op_vec4_f32(vec4<f32>(var_1.x, var_1.x, _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(var_1.x - var_1.x)))), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(830f - -2774f)))) - _wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(var_1.x, arg_1.x, 203f, arg_1.x) * vec4<f32>(var_1.x, 1178f, -457f, 198f)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_1.x, 499f, 516f, arg_1.x))) + _wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(-vec4<f32>(945f, -228f, -1201f, arg_1.x))))), vec4<f32>(arg_1.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1207f)), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-arg_1.x))), var_1.x))));
                    var_0 = ~func_8(Struct_1(func_7(Struct_1(arg_0.x, vec2<bool>(true, false), -37858i, u_input.a), func_7(Struct_1(arg_0.x, vec2<bool>(false, true), 36564i, arg_0.x), Struct_1(0u, vec2<bool>(false, true), -11139i, 51524u))).a, vec2<bool>(true, true), -1i, 47367u), Struct_1(4294967295u, func_3(vec3<bool>(true, true, false), func_5(vec2<i32>(12716i, i32(-2147483648)), vec3<bool>(false, false, false)), func_1(vec3<f32>(-211f, 1000f, arg_1.x), Struct_1(arg_0.x, vec2<bool>(true, false), 23572i, 51404u))), 1i, u_input.a | 12914u)).c;
                    var var_2 = func_5(~(~_wgslsmith_add_vec2_i32(~vec2<i32>(-1i, 41994i), min(vec2<i32>(-22709i, 23900i), vec2<i32>(-29003i, -9015i)))), select(select(select(vec3<bool>(true, true, false), vec3<bool>(true, true, true), true), !select(vec3<bool>(false, true, true), vec3<bool>(false, false, false), true), select(vec3<bool>(false, true, true), vec3<bool>(true, true, true), select(vec3<bool>(true, true, true), vec3<bool>(false, false, false), vec3<bool>(false, false, true)))), !vec3<bool>(true, true, func_4(vec2<i32>(0i, 18435i), -1103f, -523i).b.x), select(vec3<bool>(arg_0.x != 1u, true, true), vec3<bool>(true, false, func_3(vec3<bool>(true, false, true), Struct_1(u_input.a, vec2<bool>(true, false), -1i, arg_0.x), 0u).x), select(vec3<bool>(false, true, true), vec3<bool>(false, false, true), all(vec4<bool>(true, true, true, false))))));
                    var_1 = vec4<f32>(-1460f, _wgslsmith_f_op_f32(arg_1.x + 140f), _wgslsmith_div_f32(var_1.x, 754f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_1.x - _wgslsmith_f_op_f32(ceil(arg_1.x))) + arg_1.x));
                }
            }
            if (true) {
                var_0 = 62436i;
                var var_2 = Struct_1(u_input.b.x, vec2<bool>(!all(select(vec4<bool>(false, false, true, false), vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, false))), true), 1889i, firstTrailingBit(~41241u));
            }
            var_0 = -1i;
        }
        case -52901i: {
            return Struct_1(max(u_input.b.x, func_4(-(vec2<i32>(2736i, -1i) << (u_input.b.zx % vec2<u32>(32u))), -687f, 23692i).a), vec2<bool>(!all(vec2<bool>(false, true)), !any(vec4<bool>(true, true, true, true))), -func_5(-(vec2<i32>(-35873i, -37109i) >> (vec2<u32>(arg_0.x, 31329u) % vec2<u32>(32u))), vec3<bool>(all(vec4<bool>(false, false, true, true)), false, true)).c, (_wgslsmith_dot_vec4_u32(~u_input.b, vec4<u32>(u_input.a, arg_0.x, arg_0.x, u_input.a)) & func_5(-vec2<i32>(77664i, 2147483647i), vec3<bool>(false, false, true)).d) | arg_0.x);
        }
        default: {
            var var_2 = func_4(abs(abs(vec2<i32>(1i, 1i))), _wgslsmith_f_op_f32(sign(253f)), 1i).b;
            loop {
                if (LOOP_COUNTERS[23u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
                break;
            }
        }
    }
    return Struct_1(4168u, vec2<bool>(any(vec3<bool>(true, true, true)), false), 21962i, _wgslsmith_mod_u32(arg_0.x | u_input.a, u_input.a));
}

@compute
@workgroup_size(1)
fn main() {
    var var_0 = func_9(vec3<u32>(~u_input.b.x, func_1(_wgslsmith_f_op_vec3_f32(abs(vec3<f32>(-648f, -349f, -210f))), Struct_1(u_input.b.x, vec2<bool>(true, true), 2147483647i, 0u)), func_8(Struct_1(42256u, vec2<bool>(false, true), 81155i, 1u), func_4(vec2<i32>(0i, 29575i), -625f, -1i)).d) & u_input.b.yyw, _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(182f, -263f, 278f))))));
    var var_1 = Struct_1(~func_1(_wgslsmith_div_vec3_f32(vec3<f32>(-980f, -663f, 1000f), _wgslsmith_div_vec3_f32(vec3<f32>(840f, 1709f, -1264f), vec3<f32>(583f, 2426f, -1000f))), Struct_1(firstTrailingBit(var_0.a), func_3(vec3<bool>(var_0.b.x, var_0.b.x, true), Struct_1(var_0.d, vec2<bool>(true, false), var_0.c, u_input.b.x), 16429u), -27919i, ~1u)), !vec2<bool>(any(var_0.b) | !var_0.b.x, true), 1i | var_0.c, func_9(~vec3<u32>(u_input.b.x, _wgslsmith_mod_u32(u_input.a, var_0.a), _wgslsmith_mod_u32(69334u, var_0.d)), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(vec3<f32>(873f, 396f, -821f) - vec3<f32>(-1063f, -960f, 530f)))))).a);
    let var_2 = func_5(~(vec2<i32>(firstLeadingBit(var_1.c), func_9(u_input.b.wyy, vec3<f32>(-644f, -1605f, 1954f)).c) ^ (vec2<i32>(var_0.c, var_1.c) >> (vec2<u32>(1u, u_input.a) % vec2<u32>(32u)))), select(vec3<bool>(select(true, all(var_1.b), var_1.b.x), var_1.b.x, all(!vec2<bool>(var_1.b.x, true))), select(vec3<bool>(true, func_8(Struct_1(u_input.b.x, var_0.b, var_0.c, var_0.a), Struct_1(var_0.d, vec2<bool>(var_0.b.x, false), -22426i, var_0.a)).b.x, var_0.b.x), !(!vec3<bool>(var_1.b.x, false, var_1.b.x)), select(select(vec3<bool>(true, true, var_0.b.x), vec3<bool>(var_1.b.x, var_0.b.x, var_0.b.x), var_0.b.x), !vec3<bool>(true, false, var_1.b.x), var_0.b.x)), !vec3<bool>(func_5(vec2<i32>(-18783i, 0i), vec3<bool>(true, true, var_0.b.x)).b.x, var_0.b.x, true)));
    let var_3 = func_5(_wgslsmith_clamp_vec2_i32(~firstLeadingBit(vec2<i32>(var_2.c, 14221i)), vec2<i32>(_wgslsmith_add_i32(var_0.c, -31736i), func_9(u_input.b.xzz, vec3<f32>(-914f, 895f, -1076f)).c), (vec2<i32>(var_0.c, 1i) & vec2<i32>(0i, 1i)) << (countOneBits(vec2<u32>(84840u, 88589u)) % vec2<u32>(32u))), vec3<bool>(_wgslsmith_sub_i32(var_0.c, 4149i) < 15989i, true, var_2.b.x)).b.x | any(vec3<bool>(all(select(vec3<bool>(var_1.b.x, false, false), vec3<bool>(var_0.b.x, false, var_1.b.x), vec3<bool>(var_2.b.x, var_0.b.x, var_2.b.x))), true, var_1.b.x));
    var_1 = Struct_1(_wgslsmith_div_u32(0u, reverseBits(var_0.a)), !(!func_3(!vec3<bool>(false, var_2.b.x, var_2.b.x), Struct_1(var_2.a, vec2<bool>(var_0.b.x, true), var_1.c, 20189u), ~1u)), ~var_2.c, _wgslsmith_dot_vec4_u32(abs(select(u_input.b, vec4<u32>(76963u, 13437u, 58290u, 61456u), true)), vec4<u32>(func_8(Struct_1(74604u, var_0.b, var_2.c, 1u), var_2).a, firstTrailingBit(var_1.a), _wgslsmith_add_u32(u_input.a, 4294967295u), var_1.a)) & ~20809u);
    if (!(true || (37373u >= func_8(var_2, var_2).d)) & true) {
        loop {
            if (LOOP_COUNTERS[24u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
            let var_4 = _wgslsmith_add_vec4_u32(u_input.b, vec4<u32>(var_1.d, 17771u, abs(func_9(reverseBits(u_input.b.zzz), _wgslsmith_f_op_vec3_f32(-vec3<f32>(1599f, -612f, 1572f))).d), func_8(Struct_1(4917u, vec2<bool>(var_1.b.x, true), 30853i, var_1.d), var_2).a));
        }
        if (any(!func_3(!vec3<bool>(false, var_0.b.x, true), func_8(var_2, Struct_1(var_0.a, vec2<bool>(false, var_2.b.x), -2722i, var_2.d)), 0u))) {
            var var_4 = func_4(_wgslsmith_mod_vec2_i32(~abs(vec2<i32>(var_1.c, var_0.c)), ~_wgslsmith_clamp_vec2_i32(vec2<i32>(var_2.c, var_1.c), vec2<i32>(var_2.c, var_0.c), vec2<i32>(var_0.c, var_0.c)) | select(firstTrailingBit(vec2<i32>(var_2.c, i32(-2147483648))), -vec2<i32>(var_1.c, var_0.c), !var_3)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -736f)) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(-1643f, -1476f)) - _wgslsmith_div_f32(-647f, -1000f)))), i32(-2147483648) & var_2.c);
            var_0 = func_8(Struct_1(_wgslsmith_mod_u32(countOneBits(0u), 0u | _wgslsmith_div_u32(var_2.a, 31035u)), func_8(func_5(-vec2<i32>(var_4.c, var_1.c), vec3<bool>(true, false, var_0.b.x)), var_2).b, -26741i, u_input.a), var_2);
            return;
        }
        loop {
            if (LOOP_COUNTERS[25u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
            let var_4 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(trunc(-889f)), -500f) * vec2<f32>(1f, 1f))));
            let var_5 = Struct_1(_wgslsmith_mod_u32(~func_5(vec2<i32>(var_1.c, 58337i), vec3<bool>(false, false, var_0.b.x)).a, ~var_2.a), vec2<bool>(var_0.b.x, !any(select(vec3<bool>(var_2.b.x, var_0.b.x, false), vec3<bool>(false, var_2.b.x, var_0.b.x), var_2.b.x))), 2147483647i, _wgslsmith_dot_vec2_u32(select(vec2<u32>(u_input.a, var_1.d), u_input.b.wz, func_7(Struct_1(0u, vec2<bool>(var_2.b.x, false), -28892i, var_1.d), Struct_1(5713u, vec2<bool>(var_1.b.x, var_2.b.x), i32(-2147483648), u_input.a)).b.x), ~countOneBits(~vec2<u32>(5608u, var_1.d))));
            var_1 = func_5(max(vec2<i32>(i32(-1i) * i32(-2147483648), 1i) << (vec2<u32>(4294967295u, var_1.d) % vec2<u32>(32u)), max(-vec2<i32>(var_2.c, var_0.c), _wgslsmith_div_vec2_i32(-vec2<i32>(var_0.c, var_0.c), min(vec2<i32>(var_0.c, -37370i), vec2<i32>(i32(-2147483648), 1i))))), select(select(!select(vec3<bool>(var_5.b.x, false, var_0.b.x), vec3<bool>(var_1.b.x, false, true), var_2.b.x), select(!vec3<bool>(var_1.b.x, var_3, false), select(vec3<bool>(var_0.b.x, var_3, var_5.b.x), vec3<bool>(var_3, var_1.b.x, var_0.b.x), vec3<bool>(var_3, var_5.b.x, var_5.b.x)), all(vec3<bool>(var_2.b.x, true, false))), func_9(~vec3<u32>(var_1.d, 17329u, 4294967295u), vec3<f32>(var_4.x, 1599f, -582f)).b.x), !(!(!vec3<bool>(var_1.b.x, var_0.b.x, var_2.b.x))), select(select(vec3<bool>(false, var_0.b.x, var_3), select(vec3<bool>(false, var_5.b.x, true), vec3<bool>(false, false, true), var_3), select(vec3<bool>(var_3, false, false), vec3<bool>(false, true, var_3), vec3<bool>(var_2.b.x, var_3, false))), !select(vec3<bool>(var_3, var_3, true), vec3<bool>(var_2.b.x, false, var_0.b.x), vec3<bool>(false, var_1.b.x, false)), select(select(vec3<bool>(var_3, var_3, var_2.b.x), vec3<bool>(false, var_0.b.x, false), var_1.b.x), !vec3<bool>(true, var_3, var_2.b.x), vec3<bool>(true, true, true)))));
        }
        switch (-_wgslsmith_dot_vec2_i32(-(~(~vec2<i32>(1i, var_1.c))), vec2<i32>(min(var_0.c, 2147483647i), var_1.c & -var_0.c))) {
            case -3094i: {
            }
            default: {
                var var_4 = Struct_1(_wgslsmith_add_u32(var_2.d, 0u), select(!vec2<bool>(false, any(var_2.b)), !var_0.b, var_1.c > _wgslsmith_add_i32(var_1.c & 1i, 1i)), -1i, (~1u ^ countOneBits(abs(u_input.a))) << (4294967295u % 32u));
            }
        }
        return;
    }
    var_0 = func_8(var_2, Struct_1(_wgslsmith_clamp_u32(_wgslsmith_mod_u32(44921u, _wgslsmith_dot_vec2_u32(vec2<u32>(var_1.d, 67192u), u_input.b.yw)), var_1.a << (u_input.a % 32u), func_8(Struct_1(4294967295u, var_0.b, var_1.c, var_2.a), Struct_1(40103u, vec2<bool>(var_1.b.x, false), -9013i, 77036u)).d >> (var_2.d % 32u)), func_4(vec2<i32>(_wgslsmith_div_i32(-1i, var_1.c), 30556i), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(-469f)) - _wgslsmith_f_op_f32(ceil(825f))), var_1.c).b, ~var_0.c, u_input.a >> (~_wgslsmith_mod_u32(38359u, 36090u) % 32u)));
    let x = u_input.a;
    s_output = StorageBuffer(-(vec3<i32>(var_2.c, -1i, 1i) | min(vec3<i32>(var_1.c, 2147483647i, -758i), vec3<i32>(var_1.c, var_1.c, var_0.c))) & ~_wgslsmith_mult_vec3_i32(~vec3<i32>(var_1.c, var_1.c, -34840i), firstLeadingBit(vec3<i32>(var_2.c, -1667i, 28662i))), ~(~(~(~35302u))), ~(-vec2<i32>(i32(-1i) * -35688i, var_2.c)), u_input.b.yz, _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(ceil(-330f)), -266f, _wgslsmith_f_op_f32(min(-828f, 438f)), _wgslsmith_f_op_f32(-117f * -121f)))));
}

`;