export const input = [161,157,68,121,207,228,44,135,46,98,100,221,140,135,252,205,80,146,206,131,66,162,165,253,76,100,237,242,206,151,121,109,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [161,157,68,121,207,228,44,135,46,98,100,221,140,135,252,205,80,146,206,131,66,162,165,253,76,100,237,242,206,151,121,109,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[161,157,68,121,207,228,44,135,46,98,100,221,140,135,252,205,80,146,206,131,66,162,165,253,76,100,237,242,206,151,121,109]}
// Seed: 16130614523451980303

struct Struct_1 {
    a: vec4<i32>,
}

struct Struct_2 {
    a: bool,
    b: Struct_1,
    c: Struct_1,
}

struct UniformBuffer {
    a: vec3<i32>,
    b: u32,
    c: vec3<i32>,
    d: i32,
}

struct StorageBuffer {
    a: i32,
    b: vec3<f32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> LOOP_COUNTERS: array<u32, 28>;

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn func_6() -> vec3<bool> {
    let var_0 = true;
    let var_1 = _wgslsmith_f_op_vec4_f32(-vec4<f32>(-380f, _wgslsmith_f_op_f32(floor(-1462f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-269f) * _wgslsmith_f_op_f32(-1000f)) - _wgslsmith_f_op_f32(-_wgslsmith_div_f32(675f, 721f))), _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(trunc(341f))))));
    var var_2 = ~u_input.b << ((max(reverseBits(4294967295u), 16759u) << (countOneBits(~countOneBits(u_input.b)) % 32u)) % 32u);
    var_2 = 0u;
    let var_3 = Struct_2(select(var_0, true, !(!any(vec4<bool>(var_0, var_0, var_0, var_0)))), Struct_1(reverseBits(abs(vec4<i32>(u_input.c.x, 0i, u_input.c.x, 28958i))) ^ ~reverseBits(vec4<i32>(2147483647i, i32(-2147483648), -1i, u_input.d))), Struct_1(~_wgslsmith_div_vec4_i32(vec4<i32>(1i, -11080i, i32(-2147483648), 15086i), vec4<i32>(u_input.d, 0i, -25919i, 23542i)) << (vec4<u32>(36428u, 93562u, 0u, ~21449u) % vec4<u32>(32u))));
    return select(select(select(!vec3<bool>(var_0, var_3.a, true), select(select(vec3<bool>(var_0, true, true), vec3<bool>(false, var_3.a, false), true), select(vec3<bool>(var_0, var_3.a, false), vec3<bool>(var_0, false, var_0), var_3.a), all(vec3<bool>(var_0, true, var_0))), var_3.a), vec3<bool>(false, _wgslsmith_f_op_f32(-var_1.x) < var_1.x, var_0), select(vec3<bool>(all(vec2<bool>(var_0, var_0)), true, !var_3.a), vec3<bool>(true, true, true), !(-470f < var_1.x))), !vec3<bool>(!all(vec2<bool>(var_0, var_0)), !var_0 && all(vec3<bool>(true, var_0, var_3.a)), var_0), vec3<bool>(false, false, !any(vec3<bool>(true, true, true))));
}

fn func_5() -> Struct_1 {
    if (true && all(func_6())) {
        if (true || (5857u <= _wgslsmith_add_u32(~32851u, ~_wgslsmith_mult_u32(u_input.b, u_input.b)))) {
        }
        loop {
            if (LOOP_COUNTERS[0u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
            var var_0 = Struct_1(-vec4<i32>(u_input.d, -12258i, -5169i, abs(_wgslsmith_sub_i32(5428i, -1i))));
        }
        switch (_wgslsmith_div_i32(32063i, -31725i)) {
            case 12514i: {
                var var_0 = Struct_2(all(vec3<bool>(true, false, true)), Struct_1(abs(vec4<i32>(2147483647i << (u_input.b % 32u), ~u_input.c.x, abs(u_input.d), u_input.d))), Struct_1(~_wgslsmith_sub_vec4_i32(-vec4<i32>(u_input.a.x, -22538i, u_input.d, 4729i), _wgslsmith_clamp_vec4_i32(vec4<i32>(15820i, u_input.a.x, -20926i, 2147483647i), vec4<i32>(u_input.a.x, u_input.c.x, u_input.a.x, u_input.d), vec4<i32>(u_input.a.x, -7362i, u_input.a.x, u_input.d)))));
                var var_1 = _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(2007f - -294f) - _wgslsmith_f_op_f32(f32(-1f) * -1000f)) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-304f))), _wgslsmith_f_op_f32(339f * _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(step(-1145f, 1254f)))))));
                var_0 = Struct_2(var_0.a, Struct_1(vec4<i32>(firstTrailingBit(abs(0i)), var_0.b.a.x, firstLeadingBit(u_input.a.x), var_0.c.a.x)), var_0.b);
            }
            default: {
                let var_0 = select(any(func_6().zx), any(vec3<bool>(any(vec2<bool>(false, true)), u_input.b != _wgslsmith_clamp_u32(21880u, 31399u, u_input.b), 28218i != _wgslsmith_sub_i32(u_input.a.x, u_input.a.x))), !(!(_wgslsmith_div_u32(4294967295u, u_input.b) < _wgslsmith_clamp_u32(1u, u_input.b, 4294967295u))));
                var var_1 = _wgslsmith_div_i32(0i, u_input.d);
                var var_2 = _wgslsmith_f_op_vec2_f32(_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(floor(-517f)), _wgslsmith_f_op_f32(sign(-467f))) * vec2<f32>(_wgslsmith_div_f32(880f, -725f), _wgslsmith_f_op_f32(1661f + -1393f))), vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1767f)), _wgslsmith_f_op_f32(-561f * _wgslsmith_div_f32(1358f, 2027f)))) + vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-414f), _wgslsmith_f_op_f32(-1000f)) + _wgslsmith_f_op_f32(-746f)), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(-588f)))))));
                var_2 = _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(sign(vec2<f32>(528f, _wgslsmith_div_f32(_wgslsmith_f_op_f32(var_2.x * var_2.x), _wgslsmith_f_op_f32(-var_2.x))))) * _wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(floor(-228f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(var_2.x)) + _wgslsmith_f_op_f32(max(-540f, 784f)))) + _wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(exp2(vec2<f32>(var_2.x, var_2.x)))), _wgslsmith_f_op_vec2_f32(vec2<f32>(var_2.x, var_2.x) + _wgslsmith_f_op_vec2_f32(vec2<f32>(-948f, var_2.x) + vec2<f32>(-800f, 587f))), select(func_6().zz, !vec2<bool>(var_0, var_0), true)))));
                let var_3 = Struct_1(vec4<i32>(1i >> (u_input.b % 32u), -1i, _wgslsmith_mod_i32(i32(-1i) * -1i, -(2147483647i ^ u_input.c.x)), select(u_input.d, 1i ^ _wgslsmith_dot_vec3_i32(u_input.c, u_input.a), true)));
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        if (!(!(all(vec3<bool>(true, true, false)) | any(select(vec2<bool>(true, false), vec2<bool>(false, false), false))))) {
            var var_0 = u_input.c.zy;
            var_0 = vec2<i32>(countOneBits(_wgslsmith_mod_i32(2147483647i, var_0.x)), abs(reverseBits(var_0.x))) << (min(_wgslsmith_sub_vec2_u32(firstLeadingBit(vec2<u32>(u_input.b, u_input.b)), ~(vec2<u32>(0u, u_input.b) << (vec2<u32>(u_input.b, 12383u) % vec2<u32>(32u)))), ~_wgslsmith_mult_vec2_u32(~vec2<u32>(4294967295u, u_input.b), ~vec2<u32>(u_input.b, 0u))) % vec2<u32>(32u));
            let var_1 = false;
            var_0 = select(-firstLeadingBit(firstTrailingBit(vec2<i32>(1i, var_0.x))), _wgslsmith_sub_vec2_i32(vec2<i32>(firstTrailingBit(-3005i), var_0.x | i32(-2147483648)), u_input.a.xz), !(!func_6().zz)) << (max(~select(~vec2<u32>(u_input.b, 4294967295u), vec2<u32>(45445u, 0u), vec2<bool>(var_1, false)), ~min(~vec2<u32>(1846u, 48928u), vec2<u32>(u_input.b, u_input.b))) % vec2<u32>(32u));
            var var_2 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(-651f, 1345f, 1702f, -2118f))), _wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(158f, 331f, 512f, -734f)), vec4<f32>(1f, 1f, 1f, 1f)) - vec4<f32>(1f, 1f, 1f, 1f)), all(vec4<bool>(false, any(vec4<bool>(true, var_1, var_1, var_1)), var_1, true)))));
        }
        let var_0 = !(!(!(true | any(vec4<bool>(false, false, true, true)))));
    }
    let var_0 = _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(1167f, -1779f, 492f) - vec3<f32>(-1027f, 782f, -582f)) * _wgslsmith_f_op_vec3_f32(max(vec3<f32>(463f, -701f, 347f), vec3<f32>(-1053f, -440f, -591f)))) + _wgslsmith_f_op_vec3_f32(exp2(_wgslsmith_f_op_vec3_f32(sign(vec3<f32>(1113f, -686f, -978f))))))), vec3<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(854f)) + _wgslsmith_f_op_f32(-1010f)))), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(116f * 1566f))))), _wgslsmith_f_op_f32(ceil(321f))), func_6()));
    switch (1i) {
        case 2147483647i: {
            var var_1 = Struct_2(any(func_6().zx), Struct_1(~(-vec4<i32>(2147483647i, u_input.a.x, -8640i, u_input.a.x) | _wgslsmith_add_vec4_i32(vec4<i32>(0i, 1i, u_input.a.x, u_input.a.x), vec4<i32>(u_input.a.x, u_input.a.x, u_input.c.x, u_input.d)))), Struct_1(reverseBits(abs(abs(vec4<i32>(u_input.c.x, 1i, -28205i, i32(-2147483648)))))));
            let var_2 = 259f;
            var_1 = Struct_2(var_1.a, var_1.c, Struct_1(var_1.c.a));
            var var_3 = var_1.c.a.x;
            loop {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            }
        }
        default: {
            var var_1 = vec2<bool>(true, true);
            var var_2 = Struct_2(true, Struct_1(~vec4<i32>(u_input.d, -70756i, firstTrailingBit(-17245i), u_input.a.x)), Struct_1(-vec4<i32>(_wgslsmith_mod_i32(-1i, 564i), _wgslsmith_mult_i32(u_input.c.x, i32(-2147483648)), ~u_input.d, 1i)));
        }
    }
    var var_1 = !any(vec2<bool>(any(vec3<bool>(false, true, false)) && true, true));
    return Struct_1(_wgslsmith_sub_vec4_i32(firstLeadingBit(vec4<i32>(u_input.c.x, -u_input.d, abs(u_input.d), _wgslsmith_add_i32(u_input.d, 1i))), vec4<i32>(min(~(-1613i), select(15616i, -9523i, true)), _wgslsmith_clamp_i32(_wgslsmith_dot_vec2_i32(u_input.a.yz, u_input.a.yz), _wgslsmith_div_i32(1i, u_input.c.x), _wgslsmith_mod_i32(-1i, u_input.c.x)), -u_input.c.x, u_input.d ^ _wgslsmith_dot_vec3_i32(vec3<i32>(-24527i, 0i, u_input.c.x), vec3<i32>(1358i, -1i, 1i)))));
}

fn func_7(arg_0: Struct_1, arg_1: vec3<f32>) -> Struct_1 {
    let var_0 = arg_0;
    let var_1 = _wgslsmith_div_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(arg_1.x - _wgslsmith_f_op_f32(-arg_1.x)), _wgslsmith_f_op_f32(trunc(arg_1.x))), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(floor(vec2<f32>(arg_1.x, arg_1.x))) * arg_1.zx)));
    return var_0;
}

fn func_4() -> vec2<f32> {
    let var_0 = func_7(func_5(), _wgslsmith_f_op_vec3_f32(max(vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -1000f) + 944f), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-1046f), _wgslsmith_f_op_f32(sign(316f)))), _wgslsmith_f_op_f32(round(1336f))), vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1162f) + _wgslsmith_f_op_f32(1495f - 618f)), 750f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(310f)) + _wgslsmith_f_op_f32(-546f))))));
    let var_1 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(-1704f, -656f))) * _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(step(vec2<f32>(830f, 179f), vec2<f32>(764f, -440f))) - _wgslsmith_f_op_vec2_f32(floor(vec2<f32>(-336f, -1000f))))), vec2<f32>(_wgslsmith_f_op_f32(ceil(1051f)), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(select(1006f, 2675f, true)), _wgslsmith_f_op_f32(-1313f))))));
    for (var var_2: i32; false; var_2 = _wgslsmith_mult_i32(u_input.a.x, _wgslsmith_div_i32(2147483647i, (5567i << (~u_input.b % 32u)) >> (~1u % 32u)))) {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        var var_3 = -func_7(var_0, _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(round(vec3<f32>(-720f, 273f, var_1.x))) + vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -738f), _wgslsmith_div_f32(408f, var_1.x), var_1.x))).a.zz;
        let var_4 = true;
        let var_5 = Struct_2(var_4, var_0, func_5());
    }
    loop {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        loop {
            if (LOOP_COUNTERS[5u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
            var var_2 = vec4<i32>(~(i32(-2147483648)), var_0.a.x, reverseBits(_wgslsmith_sub_i32(_wgslsmith_dot_vec4_i32(var_0.a, vec4<i32>(u_input.a.x, 21562i, u_input.c.x, var_0.a.x)), ~(i32(-2147483648)))), -10839i) ^ vec4<i32>(_wgslsmith_add_i32(-59362i, 1i), 61600i, _wgslsmith_mult_i32(1i, _wgslsmith_clamp_i32(-52945i, _wgslsmith_dot_vec4_i32(vec4<i32>(72231i, var_0.a.x, u_input.d, -1i), var_0.a), ~21311i)), select(_wgslsmith_clamp_i32(1i, 9807i, _wgslsmith_dot_vec3_i32(vec3<i32>(-13452i, u_input.c.x, u_input.a.x), vec3<i32>(var_0.a.x, 2147483647i, 2147483647i))), 0i, !func_6().x));
            let var_3 = 0u;
            continue;
        }
    }
    loop {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
    }
    return vec2<f32>(var_1.x, _wgslsmith_f_op_f32(ceil(-1460f)));
}

fn func_3(arg_0: f32, arg_1: Struct_1, arg_2: vec3<u32>) -> Struct_2 {
    let var_0 = _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(max(_wgslsmith_f_op_vec2_f32(func_4()), _wgslsmith_f_op_vec2_f32(round(vec2<f32>(arg_0, 914f))))))) + _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(-184f, arg_0) - vec2<f32>(1000f, arg_0)) * vec2<f32>(1000f, -980f)) - _wgslsmith_f_op_vec2_f32(-vec2<f32>(719f, arg_0)))));
    switch (2147483647i) {
        case 28097i: {
            loop {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                break;
            }
            var var_1 = 44853i;
        }
        case 37256i: {
            switch (max(func_5().a.x, 12926i)) {
                case 15492i: {
                }
                case -7129i: {
                    let var_1 = 1953i;
                    var var_2 = ~97302u;
                }
                default: {
                    var var_1 = _wgslsmith_sub_i32(abs(22022i), 0i);
                    var_1 = arg_1.a.x;
                    var_1 = ~(-1i);
                    var_1 = i32(-2147483648);
                    let var_2 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(-694f), -443f, _wgslsmith_f_op_f32(-arg_0), _wgslsmith_f_op_f32(1000f * -163f)) + _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_0, var_0.x, arg_0, var_0.x)) * vec4<f32>(-524f, -418f, arg_0, arg_0))) - _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(-257f), _wgslsmith_f_op_vec2_f32(func_4()).x, var_0.x, _wgslsmith_f_op_vec2_f32(func_4()).x))));
                }
            }
            for (; ; ) {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                var var_1 = vec2<bool>(false, any(select(vec3<bool>(true, true, true), vec3<bool>(true, true, false), true)));
                continue;
            }
            switch (_wgslsmith_mod_i32(~firstTrailingBit(~_wgslsmith_mod_i32(i32(-2147483648), arg_1.a.x)), _wgslsmith_clamp_i32(firstLeadingBit(u_input.d), _wgslsmith_mod_i32(1i, firstLeadingBit(u_input.a.x)), u_input.d) ^ 1i)) {
                case i32(-2147483648): {
                }
                default: {
                    let var_1 = !vec4<bool>(all(vec3<bool>(select(false, false, false), true, true)), all(vec2<bool>(true, true)), any(vec4<bool>(select(true, false, false), false, true, true)), !(_wgslsmith_f_op_f32(ceil(var_0.x)) < _wgslsmith_f_op_f32(round(var_0.x))));
                }
            }
        }
        default: {
            switch (~(-_wgslsmith_sub_i32(-(~u_input.c.x), abs(-28609i)))) {
                case -1i: {
                    var var_1 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(var_0.x, 253f)) - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(1f * _wgslsmith_f_op_f32(step(759f, arg_0))), 594f)) + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(var_0.x - -1254f)) * var_0.x)));
                    let var_2 = Struct_1(arg_1.a);
                    var var_3 = Struct_2(false, func_5(), func_7(Struct_1(vec4<i32>(i32(-2147483648), arg_1.a.x, u_input.c.x, var_2.a.x) ^ min(vec4<i32>(u_input.d, var_2.a.x, 1i, 47151i), vec4<i32>(-48468i, -2107i, 1i, -1i))), _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(select(vec3<f32>(arg_0, var_0.x, arg_0), vec3<f32>(-411f, arg_0, 672f), false)) * _wgslsmith_f_op_vec3_f32(exp2(vec3<f32>(arg_0, 1291f, var_0.x)))), _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(step(vec3<f32>(arg_0, var_0.x, -1000f), vec3<f32>(540f, arg_0, arg_0))), _wgslsmith_f_op_vec3_f32(vec3<f32>(var_0.x, var_0.x, -1335f) * vec3<f32>(1000f, arg_0, arg_0)))))));
                    let var_4 = var_2.a;
                }
                case 2147483647i: {
                    var var_1 = arg_1.a.x & abs(~_wgslsmith_sub_i32(i32(-2147483648), i32(-2147483648)) | ~_wgslsmith_dot_vec3_i32(u_input.a, vec3<i32>(u_input.d, 2147483647i, 0i)));
                    var var_2 = vec3<bool>(true, false == any(vec4<bool>(all(vec4<bool>(true, true, true, false)), true, true, true)), true);
                    let var_3 = arg_1;
                    var var_4 = ~_wgslsmith_div_vec2_u32(_wgslsmith_add_vec2_u32(_wgslsmith_sub_vec2_u32(vec2<u32>(u_input.b, 15740u), arg_2.xz), arg_2.xy), vec2<u32>(arg_2.x, 4294967295u));
                    var var_5 = !select(!(!vec3<bool>(false, true, var_2.x)), func_6(), true);
                }
                case 0i: {
                    var var_1 = u_input.a.x;
                }
                default: {
                    let var_1 = vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(-676f, -734f)) * _wgslsmith_f_op_f32(floor(809f)))))), var_0.x, 418f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(_wgslsmith_f_op_vec2_f32(func_4()).x + _wgslsmith_f_op_f32(arg_0 * arg_0)), -257f, true))));
                }
            }
            let var_1 = arg_2 & arg_2;
            return Struct_2(true, func_7(func_7(arg_1, _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(max(vec3<f32>(-234f, arg_0, 840f), vec3<f32>(-245f, var_0.x, -326f))), vec3<f32>(var_0.x, var_0.x, arg_0), func_6().x))), vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(arg_0, arg_0, true)) * var_0.x), _wgslsmith_f_op_f32(-arg_0), var_0.x)), func_5());
        }
    }
    var var_1 = Struct_2(true, Struct_1(abs(vec4<i32>(_wgslsmith_mult_i32(u_input.c.x, arg_1.a.x), -14515i, -28431i, ~(i32(-2147483648))))), arg_1);
    loop {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        continue;
    }
    if (_wgslsmith_f_op_f32(var_0.x - -793f) != _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(var_0.x - _wgslsmith_f_op_f32(f32(-1f) * -639f))))) {
        return Struct_2(var_1.a, Struct_1(vec4<i32>(func_5().a.x, var_1.c.a.x, u_input.d, i32(-1i) * -var_1.c.a.x)), Struct_1(vec4<i32>(_wgslsmith_add_i32(-u_input.a.x, 1i), -(~arg_1.a.x), 1i, _wgslsmith_dot_vec4_i32(var_1.c.a, vec4<i32>(17676i, u_input.d, -34091i, -35182i)))));
    }
    return Struct_2(any(select(vec2<bool>(func_6().x, false), func_6().yy, !(!vec2<bool>(false, var_1.a)))), arg_1, func_5());
}

fn func_8(arg_0: vec2<bool>, arg_1: Struct_2, arg_2: Struct_2) -> i32 {
    loop {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        continue;
    }
    var var_0 = vec3<bool>(true, !any(arg_0), arg_1.a);
    let var_1 = -215f;
    var_0 = !(!vec3<bool>(true, u_input.b != select(35977u, u_input.b, false), arg_0.x));
    if (!(!(firstTrailingBit(1i) == ~_wgslsmith_add_i32(u_input.c.x, arg_2.c.a.x)))) {
        switch ((_wgslsmith_div_i32(arg_1.b.a.x, ~(-1i)) << (select(~4665u, ~(~u_input.b), true) % 32u)) ^ -1389i) {
            case 58269i: {
                var var_2 = arg_2.c;
            }
            case 2147483647i: {
                let var_2 = _wgslsmith_f_op_vec3_f32(select(vec3<f32>(var_1, _wgslsmith_f_op_f32(abs(var_1)), _wgslsmith_div_f32(var_1, _wgslsmith_f_op_f32(abs(-1552f)))), vec3<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-398f + var_1), _wgslsmith_f_op_vec2_f32(func_4()).x), 762f, _wgslsmith_f_op_f32(var_1 - _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(step(-491f, var_1)))))), false));
                let var_3 = select(max(~vec3<u32>(0u, ~u_input.b, min(0u, 1u)), abs(~(vec3<u32>(u_input.b, u_input.b, 1u) << (vec3<u32>(1u, 47589u, 1u) % vec3<u32>(32u))))), _wgslsmith_div_vec3_u32(~select(vec3<u32>(0u, u_input.b, 57302u) >> (vec3<u32>(u_input.b, u_input.b, u_input.b) % vec3<u32>(32u)), abs(vec3<u32>(u_input.b, 0u, u_input.b)), false), ~countOneBits(_wgslsmith_mod_vec3_u32(vec3<u32>(u_input.b, 0u, u_input.b), vec3<u32>(1u, u_input.b, u_input.b)))), arg_1.c.a.x >= u_input.c.x);
                let var_4 = abs(_wgslsmith_mult_vec4_u32(~vec4<u32>(min(9824u, var_3.x), u_input.b << (0u % 32u), countOneBits(u_input.b), _wgslsmith_dot_vec3_u32(var_3, vec3<u32>(49067u, u_input.b, 0u))), vec4<u32>(u_input.b, u_input.b, 1u, ~u_input.b) >> (vec4<u32>(u_input.b, ~u_input.b, _wgslsmith_sub_u32(var_3.x, 6641u), var_3.x >> (78315u % 32u)) % vec4<u32>(32u))));
                var_0 = select(!select(vec3<bool>(!arg_2.a, var_0.x, any(vec3<bool>(true, true, true))), vec3<bool>(arg_2.a, !var_0.x, true), !vec3<bool>(arg_2.a, arg_1.a, true)), !(!select(!vec3<bool>(arg_2.a, false, false), vec3<bool>(arg_2.a, false, var_0.x), var_1 >= var_1)), vec3<bool>(all(vec4<bool>(arg_0.x, true, true, false)), select(func_3(_wgslsmith_f_op_f32(min(var_1, var_2.x)), func_5(), countOneBits(vec3<u32>(61214u, var_4.x, 4294967295u))).a, true, (true | arg_1.a) || arg_0.x), false));
                return arg_1.c.a.x;
            }
            case 41604i: {
                var var_2 = func_5();
            }
            default: {
            }
        }
        var_0 = !func_6();
    }
    return arg_1.b.a.x;
}

fn func_2(arg_0: u32, arg_1: u32, arg_2: vec3<bool>, arg_3: Struct_2) -> bool {
    let var_0 = Struct_1(arg_3.b.a);
    switch (_wgslsmith_dot_vec3_i32(u_input.a, ~vec3<i32>(reverseBits(var_0.a.x), abs(-1i), func_8(arg_2.xx, func_3(-1063f, Struct_1(vec4<i32>(37416i, var_0.a.x, arg_3.c.a.x, 17816i)), vec3<u32>(91916u, 32639u, 4294967295u)), func_3(1375f, Struct_1(vec4<i32>(u_input.d, -15667i, -39218i, -1i)), vec3<u32>(u_input.b, arg_1, u_input.b)))))) {
        case i32(-2147483648): {
            for (var var_1 = 2147483647i; var_1 != i32(-2147483648); var_1 = ~var_0.a.x) {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                var var_2 = false;
                var var_3 = 2265f;
                let var_4 = 1689f;
            }
            for (var var_1 = i32(-2147483648); var_1 == i32(-2147483648); var_1 -= 1i) {
                if (LOOP_COUNTERS[12u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
            }
            let var_1 = arg_3;
        }
        case -7688i: {
        }
        case 0i: {
            let var_1 = Struct_2(select(false, true, any(!vec3<bool>(true, false, arg_2.x))), Struct_1(arg_3.b.a), arg_3.c);
            if (arg_3.a) {
                var var_2 = !vec3<bool>(arg_2.x, !func_3(-290f, func_3(1867f, arg_3.b, vec3<u32>(1u, 0u, 107508u)).b, vec3<u32>(0u, 30373u, 1u)).a, arg_3.a);
                var_2 = vec3<bool>(arg_2.x, !(!var_2.x), var_2.x);
                let var_3 = Struct_1(func_5().a);
                var_2 = !arg_2;
                let var_4 = Struct_2(select(true, var_2.x, u_input.b >= ~42996u), var_3, func_3(-120f, func_3(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(-186f, -829f)) + _wgslsmith_f_op_f32(1000f + -1585f)), var_1.c, ~vec3<u32>(arg_1, arg_1, 1u) ^ ~vec3<u32>(1u, arg_0, arg_0)).b, reverseBits(vec3<u32>(~arg_1, _wgslsmith_mult_u32(arg_0, 5580u), _wgslsmith_mult_u32(1u, u_input.b)))).b);
            }
        }
        case 18087i: {
            var var_1 = select(!select(arg_2.yz, func_6().yz, arg_2.xx), vec2<bool>(true, true), arg_2.yy);
        }
        default: {
            var var_1 = func_3(_wgslsmith_div_f32(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(round(_wgslsmith_div_f32(2513f, 375f))))), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-853f) * _wgslsmith_f_op_f32(-2224f)), 1662f, arg_2.x))), func_5(), vec3<u32>(u_input.b, arg_0, abs(arg_1 ^ arg_0)));
            switch (var_0.a.x) {
                default: {
                    var_1 = func_3(158f, func_3(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-170f - -4503f) * _wgslsmith_f_op_f32(-645f + -136f))), var_0, ~(~firstLeadingBit(vec3<u32>(1u, 7860u, u_input.b)))).c, ~vec3<u32>(arg_0, 4294967295u, 31949u));
                    let var_2 = true;
                    var var_3 = true;
                    var_1 = Struct_2(arg_2.x, Struct_1(_wgslsmith_clamp_vec4_i32(_wgslsmith_div_vec4_i32(vec4<i32>(var_0.a.x, var_1.b.a.x, 3343i, var_1.b.a.x), _wgslsmith_sub_vec4_i32(var_0.a, arg_3.c.a)), firstTrailingBit(-var_0.a), var_1.b.a)), Struct_1(vec4<i32>(~(-102487i), i32(-1i) * -arg_3.b.a.x, var_0.a.x, -1i)));
                }
            }
            loop {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                let var_2 = func_3(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_vec2_f32(func_4()).x) - 1000f), Struct_1(vec4<i32>(var_0.a.x, _wgslsmith_div_i32(arg_3.c.a.x ^ -1i, reverseBits(45859i)), _wgslsmith_add_i32(var_0.a.x, func_3(490f, Struct_1(vec4<i32>(arg_3.c.a.x, -26177i, 0i, var_1.c.a.x)), vec3<u32>(arg_1, u_input.b, 18266u)).c.a.x), -var_1.b.a.x)), vec3<u32>(_wgslsmith_mod_u32(arg_1, ~u_input.b), 24888u & ~(u_input.b << (arg_1 % 32u)), u_input.b ^ _wgslsmith_sub_u32(arg_1, ~30072u)));
                var_1 = arg_3;
                break;
            }
            let var_2 = func_7(func_5(), _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(step(vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -1734f), -119f, _wgslsmith_div_f32(218f, 618f)), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(1922f, 386f, 1985f) + vec3<f32>(-721f, -795f, -1362f)) + vec3<f32>(1000f, 1913f, 784f)))), vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(-182f)) + _wgslsmith_f_op_f32(abs(692f))), -784f, _wgslsmith_f_op_f32(max(-886f, _wgslsmith_f_op_f32(-1325f)))))));
            if (_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(490f * -1428f), -876f)) - 1f) < _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(1f + -210f) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(_wgslsmith_div_f32(1092f, 1913f)))))) {
                var_1 = arg_3;
                var_1 = func_3(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -1909f) - _wgslsmith_f_op_f32(round(833f)))))), func_3(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(887f * _wgslsmith_f_op_f32(min(1472f, 491f))))), arg_3.b, vec3<u32>(4294967295u, _wgslsmith_mult_u32(_wgslsmith_dot_vec4_u32(vec4<u32>(u_input.b, 23320u, arg_1, 41016u), vec4<u32>(17807u, 11499u, 4294967295u, u_input.b)), arg_0), _wgslsmith_mod_u32(arg_1 << (arg_0 % 32u), arg_1))).b, abs(firstTrailingBit(select(vec3<u32>(arg_1, arg_0, arg_0), firstLeadingBit(vec3<u32>(0u, 30901u, u_input.b)), vec3<bool>(false, var_1.a, true)))));
                let var_3 = true;
                var_1 = Struct_2(var_1.a, func_5(), Struct_1(~_wgslsmith_sub_vec4_i32(func_5().a, _wgslsmith_sub_vec4_i32(var_1.b.a, var_1.c.a))));
            }
        }
    }
    let var_1 = arg_3;
    for (var var_2 = 1i; var_1.a; var_2 += 1i) {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        let var_3 = Struct_2(-abs(abs(var_1.c.a.x)) >= _wgslsmith_add_i32(~var_0.a.x ^ -31341i, (u_input.d | i32(-2147483648)) >> (_wgslsmith_clamp_u32(arg_1, u_input.b, arg_0) % 32u)), Struct_1(-(~(~arg_3.b.a))), var_1.b);
        let var_4 = var_1.a;
        if (arg_3.a) {
            var var_5 = !select(select(!(!vec3<bool>(true, true, var_3.a)), select(vec3<bool>(arg_2.x, arg_2.x, false), select(arg_2, arg_2, arg_2), arg_2), select(select(vec3<bool>(true, false, false), arg_2, vec3<bool>(true, var_1.a, false)), vec3<bool>(arg_3.a, true, var_1.a), !var_3.a)), arg_2, false);
            continue;
        }
        let var_5 = 1u;
        var_2 = abs(firstTrailingBit(var_1.c.a.x));
    }
    var var_2 = vec2<u32>(~firstLeadingBit(u_input.b), _wgslsmith_mult_u32(~_wgslsmith_mult_u32(_wgslsmith_mult_u32(u_input.b, 0u), ~1u), arg_1));
    return var_1.a;
}

fn func_1(arg_0: vec2<f32>, arg_1: Struct_2) -> vec3<f32> {
    let var_0 = max(u_input.b, 1u);
    for (var var_1 = -61600i; true; var_1 = -_wgslsmith_mod_i32(arg_1.b.a.x, 0i)) {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
        let var_2 = _wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(-arg_0), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(floor(vec2<f32>(_wgslsmith_f_op_f32(f32(-1f) * -644f), _wgslsmith_f_op_f32(step(arg_0.x, 138f))))) - arg_0), all(select(vec2<bool>(arg_1.a, true), vec2<bool>(true == arg_1.a, true), all(select(vec3<bool>(true, false, arg_1.a), vec3<bool>(arg_1.a, false, true), arg_1.a))))));
        break;
    }
    switch (2147483647i ^ ((arg_1.c.a.x << (0u % 32u)) | _wgslsmith_mod_i32(max(arg_1.c.a.x, u_input.c.x), -max(u_input.d, -1i)))) {
        case 1i: {
            var var_1 = arg_1.a;
            var_1 = !(true != arg_1.a);
            var_1 = arg_1.a;
        }
        case -42818i: {
            var var_1 = vec4<u32>(var_0, 66897u, _wgslsmith_sub_u32(_wgslsmith_div_u32(~(~1u), 4294967295u), ~(~(~u_input.b))), 7138u);
            var var_2 = Struct_2(all(vec2<bool>(select(func_2(u_input.b, 16500u, vec3<bool>(arg_1.a, arg_1.a, arg_1.a), arg_1), true, true), any(select(vec2<bool>(false, arg_1.a), vec2<bool>(true, false), vec2<bool>(true, arg_1.a))))), Struct_1(~_wgslsmith_div_vec4_i32(_wgslsmith_mult_vec4_i32(arg_1.b.a, vec4<i32>(-1i, -668i, u_input.a.x, arg_1.c.a.x)), -vec4<i32>(u_input.a.x, 1i, -7924i, u_input.c.x))), func_5());
            if (arg_1.a) {
                var_2 = Struct_2(true, Struct_1(func_5().a), Struct_1(~vec4<i32>(var_2.b.a.x, abs(u_input.a.x), u_input.c.x, 1i)));
                return vec3<f32>(-738f, _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(1339f))), arg_0.x), _wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -1277f), _wgslsmith_f_op_f32(ceil(-1138f))));
            }
            var var_3 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(-405f, arg_0.x, 204f) - vec3<f32>(-808f, arg_0.x, 1152f))), vec3<f32>(_wgslsmith_f_op_f32(arg_0.x - 726f), arg_0.x, _wgslsmith_div_f32(2099f, -1000f)))))) * _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(exp2(_wgslsmith_f_op_vec3_f32(vec3<f32>(arg_0.x, -741f, 1045f) * vec3<f32>(-1101f, 101f, arg_0.x)))), _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(-559f, arg_0.x, 473f) * vec3<f32>(arg_0.x, arg_0.x, arg_0.x)), _wgslsmith_f_op_vec3_f32(step(vec3<f32>(arg_0.x, -1070f, arg_0.x), vec3<f32>(arg_0.x, arg_0.x, arg_0.x)))))), _wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(abs(vec3<f32>(556f, arg_0.x, 1658f))) - vec3<f32>(272f, -160f, arg_0.x)), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(arg_0.x, 668f, -1304f))))))));
            let var_4 = func_7(func_5(), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(1338f, -1000f, -425f) * _wgslsmith_f_op_vec3_f32(min(vec3<f32>(-146f, arg_0.x, var_3.x), vec3<f32>(1338f, 555f, -1000f))))) - vec3<f32>(arg_0.x, _wgslsmith_f_op_f32(ceil(_wgslsmith_div_f32(var_3.x, -973f))), _wgslsmith_f_op_f32(var_3.x + var_3.x))));
        }
        case i32(-2147483648): {
            let var_1 = u_input.b;
            if (arg_1.a) {
                let var_2 = vec2<u32>(30933u, ~_wgslsmith_div_u32(u_input.b, _wgslsmith_dot_vec2_u32(vec2<u32>(1u, var_0), ~vec2<u32>(73245u, 92624u))));
                var var_3 = vec2<u32>(~var_1, ~_wgslsmith_dot_vec2_u32(var_2, _wgslsmith_clamp_vec2_u32(vec2<u32>(u_input.b, var_1), ~var_2, vec2<u32>(var_1, 28694u))));
            }
            var var_2 = arg_1.b;
            var_2 = arg_1.b;
            let var_3 = arg_1;
        }
        case -1i: {
            let var_1 = select(vec4<bool>(reverseBits(u_input.b) <= 23062u, u_input.a.x < (-14924i >> (_wgslsmith_sub_u32(var_0, 4294967295u) % 32u)), func_2(24931u << (u_input.b % 32u), 0u, func_6(), Struct_2(arg_0.x < arg_0.x, func_5(), arg_1.c)), !arg_1.a), vec4<bool>(!(all(vec3<bool>(arg_1.a, false, false)) || true), all(vec3<bool>(arg_1.a && arg_1.a, true, true)), any(!vec4<bool>(false, arg_1.a, true, arg_1.a)), false), select(select(!vec4<bool>(true, arg_1.a, true, arg_1.a), !(!vec4<bool>(true, arg_1.a, false, arg_1.a)), !arg_1.a && arg_1.a), !vec4<bool>(all(vec3<bool>(arg_1.a, false, arg_1.a)), arg_1.a || false, arg_1.a, arg_1.a && arg_1.a), u_input.d > arg_1.c.a.x));
            if (!all(!var_1.wzx)) {
                let var_2 = vec3<u32>(~(~firstLeadingBit(u_input.b)), ~u_input.b, ~18676u);
                let var_3 = -(~arg_1.b.a.x);
                let var_4 = Struct_1(arg_1.c.a);
                var var_5 = countOneBits(select(var_0, abs(50383u), any(select(!var_1, vec4<bool>(arg_1.a, false, arg_1.a, var_1.x), select(var_1, vec4<bool>(var_1.x, var_1.x, true, arg_1.a), var_1)))));
            }
        }
        default: {
        }
    }
    loop {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        if (arg_1.a) {
            return _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(-vec3<f32>(arg_0.x, 862f, arg_0.x)), vec3<f32>(arg_0.x, 301f, arg_0.x))) * _wgslsmith_f_op_vec3_f32(abs(vec3<f32>(arg_0.x, -1244f, arg_0.x)))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(-1000f, arg_0.x, arg_0.x) - vec3<f32>(1178f, -248f, -1578f)) - _wgslsmith_f_op_vec3_f32(-vec3<f32>(-960f, -1000f, -1315f))) - _wgslsmith_f_op_vec3_f32(exp2(vec3<f32>(arg_0.x, arg_0.x, 2674f)))), vec3<bool>(any(!vec4<bool>(true, arg_1.a, arg_1.a, false)), (u_input.b < 10681u) || (var_0 == var_0), true))) * _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(floor(vec3<f32>(arg_0.x, -1186f, arg_0.x))), _wgslsmith_f_op_vec3_f32(-vec3<f32>(-749f, 244f, arg_0.x))))));
        }
    }
    var var_1 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(236f, 1263f, 1000f) * vec3<f32>(arg_0.x, arg_0.x, -1000f)) * _wgslsmith_f_op_vec3_f32(floor(vec3<f32>(-343f, -269f, arg_0.x))))) - vec3<f32>(arg_0.x, _wgslsmith_div_f32(arg_0.x, _wgslsmith_f_op_f32(-arg_0.x)), _wgslsmith_f_op_f32(f32(-1f) * -448f))));
    return vec3<f32>(_wgslsmith_f_op_f32(var_1.x - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0.x))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(arg_0.x))) + _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(860f * -1262f), -1864f))) * _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(_wgslsmith_div_f32(arg_0.x, arg_0.x) + _wgslsmith_f_op_f32(exp2(arg_0.x)))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(round(var_1.x)), var_1.x))));
}

fn func_9(arg_0: vec3<f32>, arg_1: Struct_1) -> Struct_2 {
    if (true || select(true, true, ~u_input.b >= 45255u)) {
    }
    for (var var_0 = 1i; all(select(!select(vec3<bool>(true, false, false), vec3<bool>(true, false, true), true), select(vec3<bool>(true, true, true), vec3<bool>(false, true, false), !func_6()), all(select(vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, false))))); var_0 -= 1i) {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
        var var_1 = vec3<i32>(2147483647i, -14470i, reverseBits(~(arg_1.a.x ^ _wgslsmith_add_i32(arg_1.a.x, u_input.d))));
        break;
    }
    loop {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        let var_0 = _wgslsmith_f_op_f32(arg_0.x + -997f);
        loop {
            if (LOOP_COUNTERS[19u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
            let var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0.x));
            let var_2 = func_2(u_input.b, _wgslsmith_dot_vec3_u32(firstTrailingBit(~(~vec3<u32>(17597u, 4294967295u, 20628u))), ~firstLeadingBit(abs(vec3<u32>(u_input.b, u_input.b, 4294967295u)))), vec3<bool>(true || (_wgslsmith_f_op_f32(abs(arg_0.x)) < var_0), false, false), func_3(_wgslsmith_f_op_vec2_f32(func_4()).x, arg_1, ~abs(select(vec3<u32>(36011u, u_input.b, 1u), vec3<u32>(0u, 55894u, u_input.b), false))));
            let var_3 = func_6();
            continue;
        }
    }
    var var_0 = _wgslsmith_clamp_i32(-63719i, -(~1184i) ^ _wgslsmith_sub_i32(arg_1.a.x, -11774i), countOneBits(-arg_1.a.x)) & (arg_1.a.x << (_wgslsmith_clamp_u32(_wgslsmith_add_u32(1u, _wgslsmith_dot_vec3_u32(vec3<u32>(u_input.b, u_input.b, u_input.b), vec3<u32>(50953u, 1u, u_input.b))), 33813u, select(~1u, ~u_input.b, true)) % 32u));
    if (all(select(vec4<bool>(true, true, true, 14144i != u_input.a.x), vec4<bool>(true, true, true, true), !select(vec4<bool>(false, false, false, true), vec4<bool>(true, true, true, false), true))) || (((_wgslsmith_dot_vec4_u32(vec4<u32>(27302u, 1u, 16086u, 48522u), vec4<u32>(13256u, u_input.b, u_input.b, 79241u)) ^ u_input.b) >> (firstTrailingBit(_wgslsmith_mod_u32(20645u, 2366u)) % 32u)) > u_input.b)) {
        let var_1 = _wgslsmith_clamp_vec2_u32(max(select(vec2<u32>(1u, u_input.b), min(~vec2<u32>(u_input.b, 0u), vec2<u32>(u_input.b, 0u)), vec2<bool>(false, true)), ~(~_wgslsmith_mult_vec2_u32(vec2<u32>(0u, u_input.b), vec2<u32>(4294967295u, 0u)))), firstTrailingBit(vec2<u32>(~4294967295u, 4294967295u) >> ((firstTrailingBit(vec2<u32>(u_input.b, 1u)) | vec2<u32>(u_input.b, u_input.b)) % vec2<u32>(32u))), ~abs(vec2<u32>(1u, _wgslsmith_sub_u32(u_input.b, u_input.b))));
        for (var var_2 = -2496i; !(!(!(!any(vec4<bool>(true, true, true, false))))); var_2 += 1i) {
            if (LOOP_COUNTERS[20u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
            var var_3 = func_3(-1416f, func_7(Struct_1(arg_1.a), arg_0), firstTrailingBit(vec3<u32>(reverseBits(~4294967295u), var_1.x >> (1u % 32u), firstTrailingBit(~26995u))));
            var var_4 = 1044f;
            var var_5 = func_3(_wgslsmith_f_op_f32(abs(-1773f)), var_3.c, firstLeadingBit(vec3<u32>(firstTrailingBit(0u), ~u_input.b, abs(u_input.b)))).c.a.x << ((~(~firstTrailingBit(u_input.b)) << (_wgslsmith_dot_vec4_u32(_wgslsmith_clamp_vec4_u32(vec4<u32>(u_input.b, 63504u, 46811u, u_input.b), ~vec4<u32>(7230u, 8155u, 1779u, u_input.b), vec4<u32>(0u, var_1.x, u_input.b, u_input.b)), ~vec4<u32>(u_input.b, var_1.x, 1u, var_1.x) ^ (vec4<u32>(u_input.b, 54864u, 1u, 0u) | vec4<u32>(var_1.x, u_input.b, 19396u, 1u))) % 32u)) % 32u);
            continue;
        }
        if (any(select(func_6().zz, vec2<bool>(true, true), vec2<bool>(true, true))) || true) {
        }
    }
    return Struct_2(true, Struct_1(~(-arg_1.a)), func_7(arg_1, _wgslsmith_f_op_vec3_f32(exp2(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(sign(vec3<f32>(1647f, arg_0.x, 269f))))))));
}

@compute
@workgroup_size(1)
fn main() {
    switch (min(_wgslsmith_add_i32(-1i, select(u_input.c.x, _wgslsmith_div_i32(-u_input.c.x, ~1i), any(vec2<bool>(true, false)))), -_wgslsmith_div_i32(22i, _wgslsmith_dot_vec3_i32(u_input.a, u_input.a)) & ~(-u_input.d | -u_input.c.x))) {
        default: {
        }
    }
    let var_0 = func_9(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(func_1(vec2<f32>(1086f, 262f), Struct_2(false, Struct_1(vec4<i32>(17150i, u_input.a.x, -1i, 88144i)), Struct_1(vec4<i32>(i32(-2147483648), 32080i, u_input.d, -35587i))))), _wgslsmith_f_op_vec3_f32(-vec3<f32>(927f, 1189f, -113f)), vec3<bool>(true, false, false)))))), func_3(1000f, Struct_1(_wgslsmith_mult_vec4_i32(_wgslsmith_mod_vec4_i32(vec4<i32>(u_input.a.x, 25633i, -1i, i32(-2147483648)), vec4<i32>(i32(-2147483648), u_input.d, 0i, -34258i)), vec4<i32>(-1i, 9514i, 1i, u_input.d))), ~_wgslsmith_add_vec3_u32(~vec3<u32>(4294967295u, u_input.b, 1u), _wgslsmith_mod_vec3_u32(vec3<u32>(4294967295u, 9121u, u_input.b), vec3<u32>(u_input.b, u_input.b, 20256u)))).b);
    var var_1 = _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -2017f) + -1515f) - -2072f) * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(-573f))) + -450f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(679f)) * _wgslsmith_f_op_f32(-566f)), _wgslsmith_f_op_f32(_wgslsmith_div_f32(-1000f, 680f) + _wgslsmith_f_op_vec3_f32(func_1(vec2<f32>(869f, 832f), var_0)).x))))));
    if (var_0.a) {
        var var_2 = ~16925i;
        for (var var_3 = 2147483647i; var_3 >= -7221i; var_3 -= 1i) {
            if (LOOP_COUNTERS[21u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
            var_3 = countOneBits(_wgslsmith_add_i32(1i, _wgslsmith_clamp_i32(var_0.c.a.x, ~(i32(-2147483648)), 2467i)) << (_wgslsmith_add_u32(~u_input.b, reverseBits(~12937u)) % 32u));
            let var_4 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(-1436f))));
            let var_5 = var_0.c;
            var var_6 = true;
        }
        var_1 = -526f;
        loop {
            if (LOOP_COUNTERS[22u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
            var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-998f));
            continue;
        }
        loop {
            if (LOOP_COUNTERS[23u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
        }
    }
    switch (_wgslsmith_div_i32(u_input.d, var_0.b.a.x)) {
        case i32(-2147483648): {
        }
        case -66272i: {
        }
        case -1i: {
            loop {
                if (LOOP_COUNTERS[24u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
                var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(324f + _wgslsmith_f_op_f32(f32(-1f) * -1205f)))));
            }
        }
        case 1848i: {
            let var_2 = ~vec4<i32>(i32(-1i) * -1i, i32(-2147483648), _wgslsmith_mult_i32(-max(0i, u_input.c.x), u_input.d), 1i);
            let var_3 = Struct_1(var_0.b.a);
            var var_4 = vec4<u32>(55873u, 411u, u_input.b, ~_wgslsmith_dot_vec4_u32(~(~vec4<u32>(u_input.b, 1u, 8571u, 4294967295u)), _wgslsmith_clamp_vec4_u32(~vec4<u32>(u_input.b, 0u, 10940u, 4294967295u), vec4<u32>(1u, 58082u, u_input.b, 24355u), max(vec4<u32>(34415u, u_input.b, 88161u, 33629u), vec4<u32>(u_input.b, 1u, 58517u, u_input.b)))));
            switch (-30223i) {
                default: {
                    let var_5 = !(21971i != _wgslsmith_mod_i32(var_2.x, 20760i));
                }
            }
            for (var var_5 = 2147483647i; var_0.a; var_5 -= 1i) {
                if (LOOP_COUNTERS[25u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
            }
        }
        default: {
        }
    }
    var var_2 = _wgslsmith_clamp_u32(3994u, _wgslsmith_div_u32(u_input.b, _wgslsmith_add_u32(select(u_input.b, 20982u, true), u_input.b ^ u_input.b)) << (1u % 32u), u_input.b);
    loop {
        if (LOOP_COUNTERS[26u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
        loop {
            if (LOOP_COUNTERS[27u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[27u] = LOOP_COUNTERS[27u] + 1u;
            break;
        }
        let var_3 = _wgslsmith_sub_u32(_wgslsmith_dot_vec2_u32(vec2<u32>(u_input.b, u_input.b), min(~vec2<u32>(u_input.b, u_input.b), vec2<u32>(firstLeadingBit(u_input.b), u_input.b))), u_input.b);
        break;
    }
    let var_3 = vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_vec2_f32(func_4()).x), -338f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-296f), _wgslsmith_f_op_f32(-1266f))) + _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-484f), 748f))) + _wgslsmith_f_op_f32(_wgslsmith_f_op_vec2_f32(func_4()).x * _wgslsmith_f_op_f32(floor(_wgslsmith_div_f32(-396f, 543f))))));
    let x = u_input.a;
    s_output = StorageBuffer(1i, var_3);
}

`;