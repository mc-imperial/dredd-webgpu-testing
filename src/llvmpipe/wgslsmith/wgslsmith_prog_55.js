export const input = [161,94,40,27,96,137,144,171,46,254,220,249,30,54,151,120,153,120,130,125,149,33,186,30,48,134,23,20,182,225,229,22,73,253,205,156,184,228,246,192,14,151,188,93,225,208,71,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [161,94,40,27,96,137,144,171,46,254,220,249,30,54,151,120,153,120,130,125,149,33,186,30,48,134,23,20,182,225,229,22,73,253,205,156,184,228,246,192,14,151,188,93,225,208,71,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[161,94,40,27,96,137,144,171,46,254,220,249,30,54,151,120,153,120,130,125,149,33,186,30,48,134,23,20,182,225,229,22,73,253,205,156,184,228,246,192,14,151,188,93,225,208,71,102]}
// Seed: 12217351095845346832

struct Struct_1 {
    a: u32,
    b: vec4<u32>,
    c: vec4<bool>,
    d: f32,
    e: u32,
}

struct Struct_2 {
    a: vec2<u32>,
    b: vec2<i32>,
    c: vec2<i32>,
    d: f32,
}

struct UniformBuffer {
    a: u32,
    b: vec4<i32>,
    c: vec3<i32>,
    d: u32,
}

struct StorageBuffer {
    a: vec4<f32>,
    b: vec4<u32>,
    c: u32,
    d: u32,
    e: vec3<f32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> LOOP_COUNTERS: array<u32, 20>;

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
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

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn func_6() -> bool {
    var var_0 = vec3<u32>(1u, 1u, ~_wgslsmith_sub_u32(~(u_input.a ^ u_input.d), u_input.d));
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        var var_1 = Struct_2(vec2<u32>(_wgslsmith_mult_u32(~(~var_0.x), _wgslsmith_dot_vec3_u32(vec3<u32>(var_0.x, 4294967295u, var_0.x) >> (vec3<u32>(1u, 14434u, var_0.x) % vec3<u32>(32u)), _wgslsmith_sub_vec3_u32(vec3<u32>(var_0.x, 0u, u_input.d), vec3<u32>(var_0.x, 0u, 17688u)))), abs(35131u)), firstTrailingBit(~vec2<i32>(u_input.c.x, max(0i, -1i))), vec2<i32>(abs(_wgslsmith_dot_vec3_i32(u_input.b.wzw, _wgslsmith_add_vec3_i32(u_input.b.zww, vec3<i32>(0i, -1i, u_input.c.x)))), select(u_input.b.x, countOneBits(u_input.c.x), any(select(vec2<bool>(false, true), vec2<bool>(false, false), vec2<bool>(true, true))))), -1000f);
        switch (i32(-2147483648)) {
            case 36541i: {
                let var_2 = var_1.d;
                var_1 = Struct_2(abs(reverseBits(var_0.yx)), var_1.b, u_input.b.ww, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-140f) + 1830f))) - _wgslsmith_div_f32(var_1.d, var_1.d)));
                var_1 = Struct_2(~var_0.yz, vec2<i32>(u_input.b.x, 21923i), u_input.b.zw, 2301f);
            }
            case 2147483647i: {
            }
            case 0i: {
                var var_2 = _wgslsmith_div_vec4_u32(vec4<u32>(u_input.a, 1u, 24393u, var_0.x), _wgslsmith_div_vec4_u32(~(~vec4<u32>(4294967295u, var_1.a.x, 13114u, 4294967295u)) & ~(vec4<u32>(37830u, var_1.a.x, 2265u, var_1.a.x) | vec4<u32>(var_1.a.x, 29667u, var_1.a.x, 0u)), _wgslsmith_clamp_vec4_u32(~(vec4<u32>(55502u, 0u, var_1.a.x, var_1.a.x) ^ vec4<u32>(var_0.x, 2684u, var_0.x, 53917u)), firstLeadingBit(vec4<u32>(var_0.x, 1u, var_1.a.x, var_0.x) ^ vec4<u32>(34201u, var_1.a.x, u_input.d, 1u)), vec4<u32>(var_0.x, ~var_1.a.x, 0u | u_input.d, 15850u))));
                var var_3 = _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-1948f)));
                break;
            }
            default: {
                var var_2 = Struct_2(vec2<u32>(0u, var_1.a.x), _wgslsmith_mod_vec2_i32(vec2<i32>(_wgslsmith_dot_vec2_i32(vec2<i32>(var_1.b.x, u_input.b.x), u_input.c.xy) & (var_1.c.x | 1i), _wgslsmith_dot_vec4_i32(vec4<i32>(var_1.b.x, -27362i, var_1.c.x, var_1.b.x) >> (vec4<u32>(1u, var_1.a.x, var_0.x, 1u) % vec4<u32>(32u)), _wgslsmith_div_vec4_i32(u_input.b, vec4<i32>(-67934i, 5473i, u_input.b.x, 16737i)))), firstLeadingBit(vec2<i32>(firstLeadingBit(1i), 1i))), countOneBits(reverseBits(vec2<i32>(1i, -3193i) ^ _wgslsmith_clamp_vec2_i32(vec2<i32>(24950i, i32(-2147483648)), vec2<i32>(u_input.b.x, 27195i), var_1.c))), 161f);
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        let var_1 = !(!vec3<bool>(any(select(vec2<bool>(false, false), vec2<bool>(false, false), true)), true, true));
    }
    switch (i32(-2147483648)) {
        case i32(-2147483648): {
            var_0 = firstLeadingBit(min(max(~vec3<u32>(4294967295u, 0u, u_input.a), abs(vec3<u32>(0u, 50195u, u_input.d))) ^ _wgslsmith_mod_vec3_u32(abs(vec3<u32>(u_input.d, 0u, u_input.a)), select(vec3<u32>(69493u, 57156u, 25879u), vec3<u32>(var_0.x, u_input.a, 1u), vec3<bool>(false, true, true))), reverseBits(_wgslsmith_clamp_vec3_u32(_wgslsmith_div_vec3_u32(vec3<u32>(74448u, u_input.a, 2118u), vec3<u32>(59194u, 0u, 25713u)), _wgslsmith_sub_vec3_u32(vec3<u32>(u_input.a, 1u, 4294967295u), vec3<u32>(54666u, var_0.x, var_0.x)), vec3<u32>(var_0.x, var_0.x, var_0.x)))));
            switch (u_input.c.x) {
                default: {
                    let var_1 = 513f;
                    var_0 = select(~vec3<u32>(~var_0.x, abs(~var_0.x), ~u_input.a), _wgslsmith_sub_vec3_u32(firstTrailingBit(firstTrailingBit(~vec3<u32>(130407u, var_0.x, var_0.x))), _wgslsmith_mult_vec3_u32(abs(vec3<u32>(var_0.x, u_input.d, 4294967295u)), ~vec3<u32>(4294967295u, 22233u, var_0.x)) & ~(vec3<u32>(4294967295u, var_0.x, 1u) >> (vec3<u32>(31654u, var_0.x, u_input.d) % vec3<u32>(32u)))), vec3<bool>(true, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(var_1))) <= _wgslsmith_f_op_f32(min(1f, _wgslsmith_f_op_f32(step(var_1, var_1)))), true));
                    let var_2 = max(u_input.d, 95131u) | ~_wgslsmith_clamp_u32(reverseBits(27506u) << (1u % 32u), 4294967295u, 0u);
                    var var_3 = 54937u;
                }
            }
        }
        case 2147483647i: {
            loop {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
                break;
            }
        }
        default: {
        }
    }
    for (var var_1 = _wgslsmith_clamp_i32(-35878i, ~_wgslsmith_mod_i32(_wgslsmith_dot_vec2_i32(reverseBits(vec2<i32>(1102i, -52929i)), select(u_input.c.xy, vec2<i32>(0i, -1i), true)), 14485i), ~2147483647i); ; var_1 -= 1i) {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
    }
    return _wgslsmith_f_op_f32(step(418f, 1353f)) == _wgslsmith_f_op_f32(-170f);
}

fn func_5(arg_0: vec2<i32>) -> Struct_2 {
    if (!func_6()) {
    }
    var var_0 = Struct_2(~(~select(~vec2<u32>(8090u, u_input.a), ~vec2<u32>(43194u, 74909u), true)), ~(-firstLeadingBit(firstTrailingBit(vec2<i32>(arg_0.x, u_input.c.x)))), vec2<i32>(-(~u_input.c.x), arg_0.x), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-291f)));
    switch (firstTrailingBit(arg_0.x)) {
        case -1i: {
        }
        case 1i: {
            let var_1 = u_input.a;
        }
        case 0i: {
        }
        default: {
            let var_1 = !vec2<bool>(true, _wgslsmith_add_u32(48201u, ~var_0.a.x) >= 4294967295u);
            loop {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
            }
        }
    }
    var_0 = Struct_2(abs(var_0.a), arg_0 ^ _wgslsmith_mult_vec2_i32(~vec2<i32>(-9637i, var_0.b.x), u_input.b.wx), u_input.b.zy, _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(sign(336f)), _wgslsmith_f_op_f32(-var_0.d))));
    var_0 = Struct_2(var_0.a, firstTrailingBit(arg_0), arg_0, var_0.d);
    return Struct_2(var_0.a, -(~_wgslsmith_div_vec2_i32(_wgslsmith_clamp_vec2_i32(var_0.b, vec2<i32>(u_input.c.x, var_0.b.x), arg_0), var_0.c)), firstTrailingBit(~vec2<i32>(_wgslsmith_dot_vec3_i32(vec3<i32>(u_input.b.x, -57060i, u_input.b.x), vec3<i32>(-11976i, var_0.b.x, var_0.b.x)), _wgslsmith_dot_vec2_i32(u_input.b.wx, vec2<i32>(arg_0.x, -50471i)))), 624f);
}

fn func_7(arg_0: Struct_2, arg_1: Struct_1, arg_2: f32, arg_3: Struct_1) -> f32 {
    var var_0 = arg_1;
    return _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1436f + _wgslsmith_f_op_f32(f32(-1f) * -172f))));
}

fn func_4() -> vec4<bool> {
    for (var var_0 = -1i; var_0 != 0i; var_0 = 0i) {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        var_0 = _wgslsmith_dot_vec2_i32((vec2<i32>(-1i) * -(~vec2<i32>(u_input.c.x, i32(-2147483648)))) | _wgslsmith_div_vec2_i32(u_input.c.zx, -vec2<i32>(-32908i, u_input.c.x) & u_input.c.zz), ~select(u_input.b.zw, vec2<i32>(u_input.c.x, select(7976i, 3368i, false)), false));
    }
    if (false) {
        let var_0 = Struct_2(countOneBits(abs(~vec2<u32>(1u, u_input.a)) | ~(vec2<u32>(1u, 29667u) << (vec2<u32>(1u, u_input.d) % vec2<u32>(32u)))), vec2<i32>(firstLeadingBit(firstLeadingBit(u_input.c.x >> (u_input.a % 32u))), -18683i), u_input.c.xy, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_7(func_5(~u_input.b.xy), Struct_1(_wgslsmith_mod_u32(u_input.a, u_input.a), _wgslsmith_sub_vec4_u32(vec4<u32>(u_input.a, u_input.a, 1u, 4294967295u), vec4<u32>(u_input.a, u_input.d, 1u, u_input.a)), vec4<bool>(true, true, false, false), _wgslsmith_div_f32(465f, -176f), u_input.a), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-775f)), Struct_1(~0u, vec4<u32>(u_input.a, u_input.a, u_input.d, 25159u), vec4<bool>(false, false, false, false), -186f, ~1u)))));
        switch (u_input.b.x) {
            case i32(-2147483648): {
                var var_1 = func_5(~vec2<i32>(_wgslsmith_dot_vec4_i32(-vec4<i32>(u_input.b.x, -1i, -24570i, 31286i), -u_input.b), -(u_input.c.x | u_input.c.x)));
                let var_2 = true;
                let var_3 = Struct_1(firstLeadingBit(_wgslsmith_mult_u32(min(var_1.a.x, 0u), 25183u)), ~vec4<u32>(~var_0.a.x, ~u_input.d, 0u, _wgslsmith_add_u32(91880u ^ var_1.a.x, var_0.a.x)), select(!select(select(vec4<bool>(false, var_2, false, true), vec4<bool>(var_2, var_2, var_2, var_2), vec4<bool>(var_2, true, false, false)), vec4<bool>(false, var_2, var_2, var_2), vec4<bool>(var_2, var_2, false, var_2)), vec4<bool>(all(select(vec2<bool>(var_2, var_2), vec2<bool>(var_2, false), vec2<bool>(var_2, false))), (-340f > var_1.d) | true, all(!vec3<bool>(var_2, false, var_2)), select(true, var_2, true)), true), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_0.d)), 0u);
                var var_4 = func_5(vec2<i32>(-1i) * -vec2<i32>(_wgslsmith_sub_i32(-8960i, var_1.b.x), _wgslsmith_sub_i32(var_1.b.x, var_0.c.x)));
            }
            case -33594i: {
                let var_1 = false;
                return !(!(!(!vec4<bool>(var_1, var_1, false, var_1))));
            }
            default: {
                var var_1 = var_0;
                let var_2 = vec3<bool>(~reverseBits(_wgslsmith_mult_u32(var_1.a.x, 68281u)) == min(max(14009u, _wgslsmith_add_u32(var_0.a.x, var_0.a.x)), ~19796u << (~4294967295u % 32u)), true, true | (all(vec4<bool>(true, false, false, false)) | (_wgslsmith_f_op_f32(var_1.d + var_1.d) != _wgslsmith_f_op_f32(-var_0.d))));
                var var_3 = vec3<bool>(false, true, false);
                let var_4 = select(vec3<u32>(24141u, select(~var_1.a.x, ~var_1.a.x, false), abs(~4294967295u)), select(countOneBits(vec3<u32>(4294967295u, u_input.d, 4294967295u)), ~vec3<u32>(16957u, 35233u, var_1.a.x) ^ (vec3<u32>(38866u, var_1.a.x, var_1.a.x) | vec3<u32>(74842u, 31735u, var_0.a.x)), !(0i <= var_0.b.x)), false) ^ _wgslsmith_div_vec3_u32(vec3<u32>(firstTrailingBit(~0u), _wgslsmith_div_u32(_wgslsmith_dot_vec3_u32(vec3<u32>(4294967295u, 0u, 0u), vec3<u32>(var_1.a.x, var_0.a.x, var_0.a.x)), u_input.d), _wgslsmith_dot_vec3_u32(vec3<u32>(69225u, 0u, 4168u), ~vec3<u32>(26629u, var_0.a.x, 1u))), countOneBits(~_wgslsmith_clamp_vec3_u32(vec3<u32>(74499u, 4294967295u, 4294967295u), vec3<u32>(4294967295u, 29567u, 38385u), vec3<u32>(var_1.a.x, 24041u, u_input.a))));
                let var_5 = select(vec3<bool>(any(!var_2), all(!(!vec4<bool>(true, true, var_3.x, var_2.x))), func_6() && (_wgslsmith_f_op_f32(var_1.d * var_1.d) <= _wgslsmith_f_op_f32(-1447f))), var_2, vec3<bool>(select(all(!vec3<bool>(var_2.x, var_3.x, true)), true, all(var_2)), var_3.x, any(!select(vec2<bool>(false, true), vec2<bool>(true, var_2.x), var_2.yx))));
            }
        }
        loop {
            if (LOOP_COUNTERS[6u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        }
        let var_1 = func_5(abs(vec2<i32>(var_0.c.x, var_0.b.x)));
    }
    var var_0 = Struct_1(_wgslsmith_dot_vec4_u32(~vec4<u32>(1u, u_input.d, 1u, func_5(vec2<i32>(2147483647i, u_input.c.x)).a.x), vec4<u32>(u_input.a >> (u_input.a % 32u), _wgslsmith_mult_u32(~0u, u_input.d), u_input.a, ~u_input.a)), vec4<u32>(max(19040u, _wgslsmith_dot_vec2_u32(vec2<u32>(0u, u_input.a), vec2<u32>(43869u, 2772u))), ~_wgslsmith_dot_vec4_u32(~vec4<u32>(0u, 4294967295u, 26932u, u_input.a), min(vec4<u32>(u_input.d, 114590u, 10448u, 30378u), vec4<u32>(u_input.d, u_input.d, u_input.d, u_input.d))), 38258u, 0u), !select(!select(vec4<bool>(true, true, true, false), vec4<bool>(false, true, true, true), false), select(vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true), select(vec4<bool>(false, true, true, true), vec4<bool>(false, true, false, true), false)), true), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1380f - -431f))))), _wgslsmith_sub_u32(u_input.a, ~7893u));
    if (var_0.c.x) {
        var var_1 = Struct_1(4294967295u, ~var_0.b, var_0.c, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(300f + 859f)))), reverseBits(u_input.d));
        let var_2 = 1u;
        return !(!select(select(vec4<bool>(false, var_1.c.x, true, var_0.c.x), select(var_1.c, vec4<bool>(false, var_1.c.x, var_0.c.x, false), true), var_0.c.x), var_0.c, !(!var_1.c.x)));
    }
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
    }
    return var_0.c;
}

fn func_3() -> Struct_2 {
    for (var var_0 = 0i; ; var_0 += 1i) {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        var var_1 = select(vec4<bool>(true, !all(vec3<bool>(true, true, true)), false, !(!any(vec4<bool>(false, true, false, true)))), select(select(vec4<bool>(all(vec4<bool>(true, false, true, false)), true, true, all(vec2<bool>(true, true))), select(vec4<bool>(true, true, true, true), select(vec4<bool>(true, false, true, false), vec4<bool>(false, false, true, true), vec4<bool>(true, true, false, true)), false), true), vec4<bool>(true, all(select(vec2<bool>(true, true), vec2<bool>(true, false), false)), true, false), all(select(vec4<bool>(false, true, true, true), vec4<bool>(false, false, true, false), select(vec4<bool>(true, false, false, false), vec4<bool>(true, false, true, true), vec4<bool>(true, true, true, false))))), select(func_4(), select(vec4<bool>(true, true, true, true), !select(vec4<bool>(false, true, true, false), vec4<bool>(true, false, true, false), false), !select(vec4<bool>(true, false, true, false), vec4<bool>(true, true, true, true), vec4<bool>(true, true, false, false))), true));
        loop {
            if (LOOP_COUNTERS[9u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
            var var_2 = _wgslsmith_sub_vec2_i32(u_input.b.zz, vec2<i32>(u_input.b.x, (_wgslsmith_div_i32(26857i, 1i) << (~u_input.d % 32u)) << (u_input.d % 32u)));
            break;
        }
        var_1 = vec4<bool>(all(select(vec4<bool>(all(var_1.zw), !var_1.x, all(vec3<bool>(var_1.x, var_1.x, var_1.x)), true), select(func_4(), !vec4<bool>(true, false, var_1.x, true), select(vec4<bool>(var_1.x, true, true, true), vec4<bool>(var_1.x, false, var_1.x, false), var_1.x)), select(vec4<bool>(false, var_1.x, var_1.x, true), select(vec4<bool>(false, true, var_1.x, var_1.x), vec4<bool>(var_1.x, true, false, false), true), true))), true, var_1.x, true);
    }
    var var_0 = func_4().zyz;
    switch (~func_5(func_5(reverseBits(vec2<i32>(u_input.c.x, u_input.b.x) ^ vec2<i32>(u_input.b.x, u_input.c.x))).b).c.x) {
        default: {
        }
    }
    var_0 = !(!vec3<bool>(var_0.x, true, var_0.x));
    switch (20433i & abs(func_5(u_input.b.yz ^ vec2<i32>(0i, u_input.c.x)).b.x)) {
        case 0i: {
            for (var var_1 = 8628i; var_1 > 9657i; var_1 += 1i) {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                break;
            }
        }
        case -14560i: {
            switch (u_input.b.x) {
                default: {
                    let var_1 = countOneBits(vec4<i32>(_wgslsmith_div_i32(1i, abs(select(u_input.b.x, u_input.c.x, var_0.x))), u_input.c.x, 2147483647i, _wgslsmith_mult_i32(~(-u_input.c.x), max(-u_input.c.x, _wgslsmith_sub_i32(2147483647i, u_input.b.x)))));
                    var var_2 = true;
                }
            }
            var_0 = !vec3<bool>(!var_0.x, true, false);
            var_0 = select(!(!select(!vec3<bool>(var_0.x, true, var_0.x), vec3<bool>(var_0.x, false, var_0.x), select(vec3<bool>(true, var_0.x, false), vec3<bool>(true, var_0.x, false), true))), select(vec3<bool>(!any(vec3<bool>(false, var_0.x, false)), all(select(var_0.zy, vec2<bool>(false, var_0.x), var_0.x)), var_0.x), !(!select(vec3<bool>(var_0.x, false, false), vec3<bool>(true, var_0.x, var_0.x), vec3<bool>(var_0.x, var_0.x, true))), vec3<bool>(true, any(vec4<bool>(var_0.x, var_0.x, var_0.x, true)), false || (var_0.x != false))), true && var_0.x);
            for (var var_1 = i32(-2147483648); u_input.c.x != _wgslsmith_mult_i32(-1i, u_input.b.x << (_wgslsmith_mod_u32(u_input.a, ~97892u) % 32u)); var_1 -= 1i) {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                break;
            }
        }
        case 1i: {
            if (true) {
            }
        }
        default: {
            var_0 = select(!(!select(select(vec3<bool>(true, true, var_0.x), vec3<bool>(var_0.x, true, var_0.x), vec3<bool>(var_0.x, true, false)), !vec3<bool>(true, false, var_0.x), !vec3<bool>(var_0.x, false, var_0.x))), vec3<bool>(all(vec3<bool>(var_0.x, any(vec4<bool>(var_0.x, false, true, false)), true)), false, all(vec3<bool>(false, select(false, false, var_0.x), all(vec3<bool>(var_0.x, false, true))))), vec3<bool>(36462u <= _wgslsmith_mod_u32(74008u, reverseBits(u_input.d)), u_input.c.x != -1i, all(!select(vec3<bool>(var_0.x, var_0.x, var_0.x), vec3<bool>(false, false, var_0.x), true))));
            switch (_wgslsmith_dot_vec3_i32(_wgslsmith_mod_vec3_i32(vec3<i32>(_wgslsmith_sub_i32(func_5(vec2<i32>(-1i, u_input.c.x)).b.x, _wgslsmith_dot_vec3_i32(vec3<i32>(43567i, 99i, u_input.c.x), vec3<i32>(-18584i, u_input.c.x, 0i))), u_input.b.x, u_input.c.x), vec3<i32>(34971i, u_input.c.x, 51218i) ^ vec3<i32>(i32(-2147483648), _wgslsmith_add_i32(u_input.b.x, 1i), ~2147483647i)), vec3<i32>(min(0i, u_input.c.x), u_input.c.x, ~1i ^ (i32(-2147483648) ^ u_input.c.x)))) {
                case 2147483647i: {
                    let var_1 = u_input.a;
                    let var_2 = var_1;
                    var_0 = select(vec3<bool>(!var_0.x, (func_6() == !var_0.x) & !any(vec3<bool>(var_0.x, var_0.x, false)), func_4().x), vec3<bool>(true, true, true), vec3<bool>(select(true, any(select(vec4<bool>(var_0.x, var_0.x, var_0.x, true), vec4<bool>(true, true, var_0.x, true), var_0.x)), true), var_0.x, func_6()));
                    let var_3 = !var_0.x;
                    var_0 = func_4().zwy;
                }
                default: {
                    var var_1 = -vec2<i32>(-u_input.b.x, u_input.c.x);
                    var var_2 = Struct_2(vec2<u32>(34050u, 792u), u_input.c.zy, vec2<i32>(-(~u_input.c.x), -39443i) << (~(~(vec2<u32>(0u, u_input.d) >> (vec2<u32>(u_input.d, u_input.d) % vec2<u32>(32u)))) % vec2<u32>(32u)), _wgslsmith_f_op_f32(f32(-1f) * -1000f));
                    var var_3 = ~min(1u & u_input.d, ~10878u);
                    let var_4 = func_5(var_2.b);
                    let var_5 = Struct_2(var_2.a, -(var_2.b | (u_input.c.yx | vec2<i32>(67179i, 7118i))) ^ _wgslsmith_sub_vec2_i32(u_input.b.zy, vec2<i32>(1i, 25403i) << (vec2<u32>(var_2.a.x, var_2.a.x) % vec2<u32>(32u))), -_wgslsmith_sub_vec2_i32(_wgslsmith_mult_vec2_i32(firstTrailingBit(vec2<i32>(var_1.x, -72032i)), vec2<i32>(2147483647i, 2147483647i)), var_2.c), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_4.d)));
                }
            }
            var_0 = func_4().zzw;
            var_0 = !(!vec3<bool>(!all(vec3<bool>(false, false, true)), func_4().x, func_6()));
            loop {
                if (LOOP_COUNTERS[12u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
                break;
            }
        }
    }
    return Struct_2(~firstLeadingBit(abs(~vec2<u32>(4294967295u, 0u))), vec2<i32>(i32(-2147483648) | (_wgslsmith_sub_i32(-39486i, u_input.b.x) >> (u_input.d % 32u)), u_input.b.x), vec2<i32>(_wgslsmith_add_i32(_wgslsmith_div_i32(2147483647i, i32(-2147483648)) ^ u_input.b.x, -u_input.c.x), 1i >> (0u % 32u)), 2272f);
}

fn func_8(arg_0: Struct_2, arg_1: vec2<i32>) -> i32 {
    switch (_wgslsmith_div_i32(-(~select(1i, ~arg_0.b.x, 15709u > arg_0.a.x)), ~(i32(-1i) * -func_5(arg_1).c.x))) {
        default: {
            switch (-_wgslsmith_mod_i32(arg_0.c.x, ~arg_0.b.x & 0i)) {
                case 1i: {
                    var var_0 = _wgslsmith_f_op_f32(650f * _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(func_5(_wgslsmith_sub_vec2_i32(vec2<i32>(arg_1.x, u_input.c.x), u_input.c.yx)).d - _wgslsmith_f_op_f32(ceil(_wgslsmith_div_f32(1051f, -2264f)))))));
                }
                case i32(-2147483648): {
                    return -932i;
                }
                case 25649i: {
                }
                default: {
                    var var_0 = vec3<bool>(select(true & (true & (arg_0.d == arg_0.d)), arg_0.d >= _wgslsmith_f_op_f32(ceil(892f)), false), true, select(!(!func_4().x), !func_4().x, true));
                    var_0 = vec3<bool>(true && !(!var_0.x), any(var_0.zx), true);
                    var_0 = !(!vec3<bool>(!var_0.x, var_0.x, false));
                    var_0 = vec3<bool>(!((u_input.a & ~0u) >= ~u_input.d), 50919u == countOneBits(select(~42234u, 68534u, select(false, true, var_0.x))), !any(!(!vec4<bool>(false, var_0.x, var_0.x, var_0.x))));
                }
            }
            var var_0 = vec4<bool>(true, false, !(!select(true, true, any(vec3<bool>(false, true, true)))), false);
            var_0 = !(!func_4());
        }
    }
    switch (-(1i << (arg_0.a.x % 32u))) {
        case 0i: {
            var var_0 = reverseBits(u_input.b) & u_input.b;
            switch (-14322i) {
                case 0i: {
                    return i32(-1i) * -_wgslsmith_add_i32(u_input.b.x, _wgslsmith_add_i32(_wgslsmith_mod_i32(arg_0.c.x, -1i), ~arg_1.x));
                }
                case -20794i: {
                    let var_1 = Struct_1(7663u & reverseBits(_wgslsmith_div_u32(8430u, _wgslsmith_mult_u32(u_input.a, arg_0.a.x))), firstTrailingBit(abs(~vec4<u32>(6769u, u_input.a, 31359u, 38116u))) << (_wgslsmith_add_vec4_u32(vec4<u32>(_wgslsmith_div_u32(24836u, 83095u), reverseBits(4294967295u), u_input.a, ~0u), vec4<u32>(u_input.a << (1u % 32u), 4294967295u, u_input.d, firstLeadingBit(0u))) % vec4<u32>(32u)), select(vec4<bool>(u_input.a >= ~18099u, false, !func_6(), any(select(vec4<bool>(true, true, false, false), vec4<bool>(false, true, true, false), vec4<bool>(true, false, true, true)))), select(vec4<bool>(true, true, arg_0.a.x >= 0u, any(vec2<bool>(true, false))), vec4<bool>(any(vec4<bool>(false, false, true, false)), var_0.x != 0i, true, all(vec4<bool>(false, false, false, true))), true), true), arg_0.d, ~select(~arg_0.a.x, 4294967295u, !(u_input.a != arg_0.a.x)));
                    var var_2 = countOneBits(-u_input.c);
                }
                case 4588i: {
                    let var_1 = vec3<f32>(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(1000f * -1045f) - _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-1246f)))), -1673f, u_input.b.x < (-arg_1.x ^ arg_0.b.x))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -722f))), 260f);
                    var_0 = -firstLeadingBit(min(u_input.b, vec4<i32>(-49097i, arg_1.x, arg_1.x, 1i)));
                    var var_2 = func_6() & false;
                    var_0 = -abs(max(~vec4<i32>(arg_0.c.x, -11961i, var_0.x, 12146i), u_input.b)) ^ vec4<i32>(max(~u_input.c.x, -23061i), arg_1.x, _wgslsmith_mod_i32(func_5(countOneBits(vec2<i32>(-52703i, i32(-2147483648)))).c.x, arg_1.x), func_5(vec2<i32>(19077i, _wgslsmith_div_i32(47037i, -23884i))).c.x);
                    var_2 = all(vec2<bool>(true, true));
                }
                default: {
                    let var_1 = _wgslsmith_div_f32(1427f, _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-151f)), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(885f + arg_0.d), _wgslsmith_f_op_f32(arg_0.d - arg_0.d))))))));
                }
            }
            loop {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                var_0 = vec4<i32>(_wgslsmith_mult_i32(countOneBits(i32(-2147483648) | arg_0.c.x), reverseBits(arg_1.x)), _wgslsmith_clamp_i32(72225i, 1i, _wgslsmith_clamp_i32(var_0.x, 2147483647i, 0i)), func_5(_wgslsmith_add_vec2_i32(arg_1, vec2<i32>(1i, 1i))).c.x, i32(-1i) * -8505i);
                var var_1 = vec2<i32>(countOneBits(~select(_wgslsmith_div_i32(1i, 53053i), _wgslsmith_dot_vec2_i32(vec2<i32>(-1i, var_0.x), vec2<i32>(var_0.x, 10043i)), any(vec3<bool>(true, true, true)))), _wgslsmith_mod_i32(arg_0.c.x, firstLeadingBit(abs(~arg_1.x))));
                var_1 = arg_0.b;
                var_0 = -(u_input.b ^ vec4<i32>(var_1.x, _wgslsmith_add_i32(var_1.x, i32(-2147483648)), var_1.x, arg_0.b.x)) >> (~vec4<u32>(~arg_0.a.x, 12608u, reverseBits(arg_0.a.x) ^ ~0u, _wgslsmith_dot_vec3_u32(abs(vec3<u32>(4294967295u, 112461u, 1u)), vec3<u32>(u_input.d, 3665u, arg_0.a.x) & vec3<u32>(1u, arg_0.a.x, u_input.d))) % vec4<u32>(32u));
            }
            var var_1 = _wgslsmith_mult_vec4_u32(~vec4<u32>(_wgslsmith_dot_vec4_u32(firstLeadingBit(vec4<u32>(55919u, arg_0.a.x, 23643u, arg_0.a.x)), ~vec4<u32>(u_input.a, 18338u, u_input.a, 1u)), 4294967295u, 56790u, u_input.d), vec4<u32>(abs(~(~22136u)), ~func_3().a.x, arg_0.a.x, min(~func_3().a.x, ~(~u_input.a))));
            let var_2 = Struct_2(var_1.yx, vec2<i32>(var_0.x, -_wgslsmith_mod_i32(i32(-2147483648), arg_0.c.x)), max(-_wgslsmith_add_vec2_i32(min(vec2<i32>(-37158i, 2147483647i), vec2<i32>(1i, i32(-2147483648))), vec2<i32>(-28926i, arg_1.x)), select(~(vec2<i32>(arg_1.x, var_0.x) >> (vec2<u32>(u_input.d, 1u) % vec2<u32>(32u))), min(~arg_1, vec2<i32>(var_0.x, arg_1.x)), vec2<bool>(all(vec4<bool>(true, false, false, true)), true))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0.d))));
        }
        default: {
            switch (firstLeadingBit(min(countOneBits(arg_0.c.x), -1i))) {
                case 0i: {
                    var var_0 = false;
                    var_0 = !((_wgslsmith_dot_vec3_i32(vec3<i32>(-1i, u_input.b.x, u_input.c.x), abs(u_input.c)) << (_wgslsmith_mod_u32(u_input.d, 1u) % 32u)) <= -40274i);
                    var_0 = true;
                }
                case i32(-2147483648): {
                    let var_0 = 1u;
                    var var_1 = 0i;
                }
                case 60546i: {
                    return func_5(arg_1).b.x;
                }
                default: {
                    let var_0 = Struct_2(arg_0.a, ~abs(vec2<i32>(19978i, -1i) << (vec2<u32>(0u, 1u) % vec2<u32>(32u))), abs(arg_0.b), _wgslsmith_f_op_f32(-arg_0.d));
                }
            }
        }
    }
    if (false) {
        return 1i;
    }
    switch (_wgslsmith_sub_i32(-abs(u_input.c.x), max(u_input.c.x, (arg_1.x & -19287i) >> (firstLeadingBit(arg_0.a.x) % 32u))) ^ _wgslsmith_mod_i32(-(_wgslsmith_dot_vec4_i32(vec4<i32>(arg_1.x, u_input.b.x, arg_1.x, 30505i), vec4<i32>(u_input.c.x, arg_0.c.x, 1i, arg_0.b.x)) & ~arg_0.b.x), -1i)) {
        case 1i: {
            for (var var_0 = 1805i; ; var_0 -= 1i) {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                var_0 = u_input.b.x;
                continue;
            }
            switch (firstTrailingBit(arg_0.c.x)) {
                case -6217i: {
                }
                case 2147483647i: {
                    var var_0 = arg_0.a.x >> (1187u % 32u);
                    let var_1 = Struct_1(arg_0.a.x, select(_wgslsmith_div_vec4_u32(vec4<u32>(arg_0.a.x, u_input.d, arg_0.a.x, ~u_input.d), _wgslsmith_mult_vec4_u32(vec4<u32>(4294967295u, arg_0.a.x, 83137u, arg_0.a.x) ^ vec4<u32>(0u, 105125u, 4294967295u, 13972u), ~vec4<u32>(1u, arg_0.a.x, u_input.d, u_input.a))), ~vec4<u32>(0u, 14238u, countOneBits(arg_0.a.x), 1u), reverseBits(u_input.d) != _wgslsmith_div_u32(0u ^ arg_0.a.x, 1u)), vec4<bool>(!((arg_0.b.x & arg_0.c.x) < 21805i), arg_0.d == arg_0.d, !all(func_4()), all(vec3<bool>(true, true, true))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(arg_0.d - _wgslsmith_f_op_f32(max(514f, arg_0.d))), arg_0.d)) - arg_0.d), 79232u);
                    return 1i;
                }
                case -16902i: {
                    let var_0 = arg_0;
                    let var_1 = func_3();
                    var var_2 = var_1;
                    var var_3 = func_5(~(-vec2<i32>(2147483647i, var_0.b.x) >> (_wgslsmith_add_vec2_u32(_wgslsmith_mod_vec2_u32(var_0.a, vec2<u32>(1u, u_input.d)), vec2<u32>(arg_0.a.x, var_0.a.x)) % vec2<u32>(32u))));
                }
                case i32(-2147483648): {
                    let var_0 = max(arg_0.a.x, ~select(~1u, select(u_input.d, 16904u, false), true)) < firstLeadingBit(_wgslsmith_dot_vec4_u32(max(vec4<u32>(41344u, 24986u, arg_0.a.x, 0u), vec4<u32>(4294967295u, 0u, 99689u, arg_0.a.x) & vec4<u32>(4294967295u, 0u, arg_0.a.x, u_input.a)), vec4<u32>(u_input.d, max(0u, arg_0.a.x), func_5(vec2<i32>(u_input.c.x, arg_1.x)).a.x, max(58738u, 4294967295u))));
                    var var_1 = arg_0;
                    var var_2 = true;
                    var_1 = Struct_2(var_1.a, _wgslsmith_sub_vec2_i32(_wgslsmith_div_vec2_i32(abs(vec2<i32>(arg_0.c.x, arg_0.b.x)) >> (select(vec2<u32>(arg_0.a.x, var_1.a.x), vec2<u32>(u_input.d, 1u), true) % vec2<u32>(32u)), vec2<i32>(-27719i, arg_1.x)), vec2<i32>(arg_1.x | 0i, 0i) ^ -vec2<i32>(i32(-2147483648), u_input.b.x)), _wgslsmith_mult_vec2_i32(_wgslsmith_sub_vec2_i32(~vec2<i32>(var_1.b.x, -17124i), arg_0.c) << (reverseBits(arg_0.a) % vec2<u32>(32u)), vec2<i32>(abs(i32(-2147483648) >> (1u % 32u)), i32(-2147483648))), _wgslsmith_f_op_f32(-1838f + -1069f));
                }
                default: {
                }
            }
            var var_0 = max(_wgslsmith_mod_i32(2147483647i, countOneBits(firstLeadingBit(arg_1.x >> (44087u % 32u)))), 1i);
            let var_1 = 4820i;
        }
        case -20915i: {
            switch (reverseBits(_wgslsmith_dot_vec4_i32(_wgslsmith_clamp_vec4_i32(u_input.b, ~firstTrailingBit(u_input.b), max(u_input.b, vec4<i32>(arg_1.x, arg_0.b.x, arg_0.c.x, u_input.b.x))), u_input.b))) {
                case 32533i: {
                    var var_0 = arg_0;
                    var var_1 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(abs(vec3<f32>(_wgslsmith_div_f32(var_0.d, _wgslsmith_f_op_f32(-var_0.d)), _wgslsmith_f_op_f32(func_7(Struct_2(arg_0.a, arg_1, vec2<i32>(-1i, u_input.b.x), 267f), Struct_1(arg_0.a.x, vec4<u32>(1u, var_0.a.x, var_0.a.x, u_input.a), vec4<bool>(false, true, true, false), var_0.d, var_0.a.x), _wgslsmith_f_op_f32(-arg_0.d), Struct_1(var_0.a.x, vec4<u32>(arg_0.a.x, 4294967295u, 1u, arg_0.a.x), vec4<bool>(false, true, false, true), 1843f, 45351u))), arg_0.d))));
                }
                case -10870i: {
                }
                case 2147483647i: {
                }
                case -2290i: {
                    let var_0 = _wgslsmith_mod_i32(~_wgslsmith_div_i32(arg_1.x, func_3().b.x), -1i);
                    let var_1 = vec4<bool>(u_input.b.x >= (~(i32(-2147483648)) | arg_0.b.x), _wgslsmith_f_op_f32(func_7(arg_0, Struct_1(arg_0.a.x, ~vec4<u32>(4294967295u, 4294967295u, u_input.d, u_input.d), vec4<bool>(true, true, true, true), _wgslsmith_f_op_f32(arg_0.d - arg_0.d), 4294967295u >> (u_input.d % 32u)), 1207f, Struct_1(4294967295u << (u_input.d % 32u), vec4<u32>(u_input.d, u_input.a, 93671u, 0u), select(vec4<bool>(false, false, false, false), vec4<bool>(true, false, false, true), false), _wgslsmith_f_op_f32(-arg_0.d), arg_0.a.x))) < _wgslsmith_f_op_f32(min(603f, _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(func_7(Struct_2(vec2<u32>(0u, 4120u), arg_0.b, vec2<i32>(arg_0.c.x, 2147483647i), arg_0.d), Struct_1(arg_0.a.x, vec4<u32>(1u, 41508u, arg_0.a.x, arg_0.a.x), vec4<bool>(true, false, false, false), arg_0.d, 8861u), arg_0.d, Struct_1(1u, vec4<u32>(u_input.a, 6373u, 4294967295u, u_input.d), vec4<bool>(false, false, true, false), arg_0.d, arg_0.a.x))))))), !((~1u ^ _wgslsmith_clamp_u32(arg_0.a.x, u_input.d, u_input.a)) < ~4294967295u), all(vec3<bool>(all(vec4<bool>(true, false, true, false)) != (u_input.c.x == arg_0.c.x), false, true)));
                }
                default: {
                    var var_0 = _wgslsmith_div_vec2_f32(vec2<f32>(959f, arg_0.d), _wgslsmith_f_op_vec2_f32(max(_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(step(vec2<f32>(-1455f, 1420f), vec2<f32>(-365f, arg_0.d))), vec2<f32>(_wgslsmith_f_op_f32(arg_0.d - arg_0.d), _wgslsmith_f_op_f32(-arg_0.d))), _wgslsmith_f_op_vec2_f32(_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(arg_0.d, arg_0.d) - vec2<f32>(arg_0.d, 235f)), _wgslsmith_div_vec2_f32(vec2<f32>(209f, arg_0.d), vec2<f32>(arg_0.d, 1849f))) - _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(arg_0.d, -1025f) + vec2<f32>(1532f, 166f)) * vec2<f32>(arg_0.d, arg_0.d))))));
                    var_0 = vec2<f32>(-344f, _wgslsmith_f_op_f32(-func_5(_wgslsmith_mult_vec2_i32(-vec2<i32>(arg_0.b.x, u_input.b.x), -vec2<i32>(arg_1.x, -29709i))).d));
                }
            }
            if (true) {
                let var_0 = arg_0;
                var var_1 = func_5(var_0.c);
                let var_2 = ~(~_wgslsmith_add_u32(_wgslsmith_add_u32(0u, var_0.a.x), var_1.a.x));
            }
            var var_0 = Struct_1(74081u, _wgslsmith_add_vec4_u32(_wgslsmith_div_vec4_u32(vec4<u32>(arg_0.a.x, 0u, arg_0.a.x, 17838u) ^ vec4<u32>(arg_0.a.x, 5516u, u_input.a, u_input.a), vec4<u32>(arg_0.a.x, 14651u, arg_0.a.x, u_input.a)), select(_wgslsmith_mult_vec4_u32(vec4<u32>(0u, u_input.a, u_input.a, arg_0.a.x), vec4<u32>(9793u, u_input.a, 41460u, arg_0.a.x)), select(vec4<u32>(u_input.d, arg_0.a.x, 0u, arg_0.a.x), vec4<u32>(1u, 42143u, 1u, 36133u), vec4<bool>(true, false, false, true)), vec4<bool>(true, true, false, true))) >> (~abs(abs(vec4<u32>(u_input.d, 4294967295u, 16277u, 41079u))) % vec4<u32>(32u)), select(!select(func_4(), vec4<bool>(true, true, true, false), select(false, false, true)), !func_4(), !select(select(vec4<bool>(false, true, true, false), vec4<bool>(true, true, true, false), vec4<bool>(true, true, false, false)), vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true))), func_3().d, 0u);
            var var_1 = u_input.c.x;
            var_1 = max(~(-51927i) << (var_0.a % 32u), firstLeadingBit(~min(select(i32(-2147483648), arg_1.x, false), _wgslsmith_dot_vec3_i32(u_input.b.zwx, u_input.b.zyz))));
        }
        case -17061i: {
            let var_0 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-601f, arg_0.d, arg_0.d)) + _wgslsmith_f_op_vec3_f32(-vec3<f32>(arg_0.d, arg_0.d, arg_0.d)))) - _wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(-vec3<f32>(1674f, arg_0.d, arg_0.d))))));
            let var_1 = true;
            loop {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            }
        }
        default: {
            loop {
                if (LOOP_COUNTERS[16u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
                var var_0 = Struct_2(abs(~_wgslsmith_div_vec2_u32(select(vec2<u32>(31456u, 0u), vec2<u32>(u_input.d, 146334u), vec2<bool>(true, false)), _wgslsmith_clamp_vec2_u32(arg_0.a, vec2<u32>(0u, 4294967295u), arg_0.a))), -arg_0.b, vec2<i32>(u_input.b.x, _wgslsmith_dot_vec2_i32(-(vec2<i32>(arg_0.c.x, -1i) >> (arg_0.a % vec2<u32>(32u))), arg_0.b)), 277f);
            }
            var var_0 = false;
        }
    }
    var var_0 = _wgslsmith_mod_vec2_i32(-(~(~vec2<i32>(arg_1.x, 0i))) | ~arg_1, _wgslsmith_add_vec2_i32(_wgslsmith_add_vec2_i32(-_wgslsmith_mult_vec2_i32(vec2<i32>(arg_0.c.x, 52670i), vec2<i32>(1i, arg_0.b.x)), -vec2<i32>(arg_1.x, arg_1.x)), vec2<i32>(-arg_1.x, reverseBits(-1i)) ^ (vec2<i32>(arg_0.c.x, 0i) ^ -u_input.b.yw)));
    return u_input.b.x;
}

fn func_2(arg_0: f32) -> vec3<i32> {
    if (!all(select(vec2<bool>(true, true), vec2<bool>(0i == u_input.c.x, select(true, false, true)), true))) {
        var var_0 = vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(arg_0, _wgslsmith_div_f32(_wgslsmith_f_op_f32(-arg_0), _wgslsmith_f_op_f32(-arg_0))))), arg_0);
        let var_1 = u_input.c;
    }
    switch (~_wgslsmith_clamp_i32(func_8(func_3(), select(_wgslsmith_mult_vec2_i32(u_input.b.xx, u_input.c.yz), _wgslsmith_add_vec2_i32(vec2<i32>(u_input.b.x, u_input.c.x), u_input.b.yx), select(vec2<bool>(false, true), vec2<bool>(true, false), vec2<bool>(false, true)))), u_input.b.x, max(_wgslsmith_mult_i32(u_input.b.x, 0i), ~(-u_input.b.x)))) {
        case -60637i: {
        }
        default: {
            var var_0 = firstTrailingBit(~countOneBits(max(vec4<u32>(u_input.a, 39530u, u_input.d, u_input.d), vec4<u32>(1u, 3055u, u_input.a, u_input.a))) << (vec4<u32>(_wgslsmith_mod_u32(52124u, 10651u) & func_5(u_input.b.wy).a.x, firstLeadingBit(func_5(vec2<i32>(u_input.b.x, u_input.b.x)).a.x), ~func_5(u_input.c.yx).a.x, ~_wgslsmith_dot_vec4_u32(vec4<u32>(u_input.d, 22057u, u_input.d, 4294967295u), vec4<u32>(u_input.d, u_input.a, u_input.a, u_input.a))) % vec4<u32>(32u)));
            if (!(all(func_4().xyx) | true)) {
                var var_1 = vec2<u32>(~41743u, 27038u);
                var_0 = ~countOneBits(~vec4<u32>(~var_0.x, func_5(u_input.b.zy).a.x, countOneBits(66135u), 71545u));
                let var_2 = vec3<i32>(_wgslsmith_mod_i32(max(_wgslsmith_mod_i32(-1i, u_input.b.x), select(-65409i, _wgslsmith_dot_vec3_i32(vec3<i32>(-21038i, u_input.b.x, 1i), vec3<i32>(0i, -32664i, -7264i)), true)), 2147483647i), _wgslsmith_clamp_i32(~u_input.b.x, 14978i, i32(-2147483648)) << (abs(func_3().a.x) % 32u), -13484i);
                var var_3 = arg_0;
            }
            if (firstTrailingBit(_wgslsmith_mod_i32(~(-2147483647i), u_input.b.x)) < -(~abs(u_input.c.x) << (~_wgslsmith_dot_vec2_u32(var_0.zz, vec2<u32>(9262u, 52782u)) % 32u))) {
            }
            var_0 = min(_wgslsmith_mult_vec4_u32(~(~max(vec4<u32>(u_input.d, u_input.a, 29336u, u_input.d), vec4<u32>(60016u, u_input.d, u_input.a, u_input.d))), abs(select(vec4<u32>(u_input.d, 141995u, u_input.d, 25167u), vec4<u32>(var_0.x, 32058u, u_input.d, 1u), var_0.x >= 68068u))), vec4<u32>(~var_0.x, 36536u, abs(53860u), var_0.x));
        }
    }
    let var_0 = Struct_1(func_3().a.x, ~vec4<u32>(_wgslsmith_mult_u32(_wgslsmith_dot_vec2_u32(vec2<u32>(4294967295u, u_input.a), vec2<u32>(4294967295u, 0u)), 13043u), 0u, ~min(u_input.a, 0u), 35644u), vec4<bool>(all(select(vec3<bool>(true, true, true), select(vec3<bool>(false, false, true), vec3<bool>(true, true, true), vec3<bool>(true, false, false)), true)), any(func_4()), !any(vec2<bool>(true, false)), false), 1486f, func_3().a.x & abs(~_wgslsmith_dot_vec4_u32(vec4<u32>(1u, 20183u, u_input.d, u_input.a), vec4<u32>(1u, u_input.d, 4294967295u, 1u))));
    return u_input.b.wzz << (var_0.b.wxx % vec3<u32>(32u));
}

fn func_9(arg_0: vec3<i32>) -> f32 {
    for (var var_0 = 977i; all(select(vec2<bool>(true, true), select(vec2<bool>(true, true), select(func_4().xw, vec2<bool>(false, true), select(vec2<bool>(true, true), vec2<bool>(true, false), vec2<bool>(true, true))), vec2<bool>(any(vec3<bool>(true, false, false)), true)), func_4().zz)); var_0 += 1i) {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
    }
    var var_0 = _wgslsmith_mod_vec3_u32(vec3<u32>(77842u, ~_wgslsmith_mult_u32(countOneBits(u_input.d), countOneBits(u_input.a)), firstTrailingBit(_wgslsmith_mult_u32(2640u, u_input.a)) & ~(~u_input.d)), _wgslsmith_mult_vec3_u32(~(~(~vec3<u32>(1u, u_input.d, 73015u))), vec3<u32>(u_input.d, _wgslsmith_mod_u32(firstTrailingBit(u_input.a), u_input.a), ~_wgslsmith_sub_u32(u_input.d, 0u))));
    var var_1 = -vec4<i32>(~arg_0.x, _wgslsmith_dot_vec3_i32(vec3<i32>(func_8(Struct_2(var_0.xy, vec2<i32>(u_input.b.x, 18590i), arg_0.xz, 517f), vec2<i32>(i32(-2147483648), arg_0.x)), _wgslsmith_add_i32(13531i, arg_0.x), -7834i), _wgslsmith_add_vec3_i32(u_input.c, vec3<i32>(arg_0.x, u_input.c.x, u_input.c.x))), max(_wgslsmith_dot_vec4_i32(countOneBits(u_input.b), -vec4<i32>(u_input.c.x, arg_0.x, 59014i, u_input.b.x)), ~abs(2147483647i)), ~(1i << (~4294967295u % 32u)));
    var var_2 = Struct_1(reverseBits(~_wgslsmith_dot_vec3_u32(vec3<u32>(23872u, u_input.d, u_input.d) & vec3<u32>(30251u, 4294967295u, 1u), vec3<u32>(u_input.a, 46425u, var_0.x) >> (vec3<u32>(4294967295u, 9207u, 31676u) % vec3<u32>(32u)))), ~_wgslsmith_add_vec4_u32(min(vec4<u32>(var_0.x, u_input.d, 59890u, 10730u) | vec4<u32>(4294967295u, 1u, 1u, u_input.a), ~vec4<u32>(var_0.x, 8572u, u_input.a, 649u)), max(vec4<u32>(var_0.x, u_input.d, var_0.x, 1u), min(vec4<u32>(var_0.x, 4294967295u, 1u, u_input.d), vec4<u32>(0u, var_0.x, 34463u, u_input.d)))), func_4(), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-604f) - _wgslsmith_f_op_f32(2057f - -914f)))))), ~17183u);
    var_2 = Struct_1(_wgslsmith_mult_u32(func_3().a.x, ~u_input.a) | ~u_input.a, vec4<u32>(~var_0.x >> (1u % 32u), var_0.x >> (func_5(func_5(var_1.yz).b).a.x % 32u), var_0.x, _wgslsmith_mult_u32(_wgslsmith_mult_u32(var_2.a, 4294967295u), 24669u)), vec4<bool>(true, _wgslsmith_add_u32(select(var_0.x, 4294967295u, true), _wgslsmith_mod_u32(var_2.b.x, 64334u)) == ~var_2.e, all(var_2.c.wy) | true, var_2.d < _wgslsmith_f_op_f32(select(-580f, _wgslsmith_div_f32(var_2.d, 295f), false))), _wgslsmith_f_op_f32(-482f * _wgslsmith_f_op_f32(var_2.d - -1471f)), var_2.a);
    return -1078f;
}

fn func_1(arg_0: vec4<u32>) -> bool {
    var var_0 = !vec4<bool>(!any(vec3<bool>(true, true, false)) & true, !(!any(vec4<bool>(true, false, false, true))), any(vec3<bool>(u_input.c.x <= i32(-2147483648), true, false)), all(select(select(vec4<bool>(false, false, false, true), vec4<bool>(false, false, false, false), vec4<bool>(false, true, true, false)), select(vec4<bool>(true, true, false, false), vec4<bool>(true, false, true, false), vec4<bool>(false, true, false, true)), any(vec4<bool>(false, true, true, true)))));
    let var_1 = _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-1000f)))), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(169f + 399f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(2500f + 284f)))), var_0.x));
    let var_2 = ~_wgslsmith_dot_vec2_i32(~vec2<i32>(i32(-1i) * -1i, 2147483647i), vec2<i32>(u_input.c.x, ~u_input.b.x | ~11106i));
    let var_3 = vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_1)), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(f32(-1f) * -494f), 367f)))) + _wgslsmith_f_op_f32(trunc(-761f))), _wgslsmith_f_op_f32(func_9(u_input.c & _wgslsmith_clamp_vec3_i32(func_2(var_1), vec3<i32>(u_input.c.x, 0i, u_input.c.x) << (arg_0.wxx % vec3<u32>(32u)), countOneBits(vec3<i32>(-1038i, 1i, 0i))))));
    loop {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
    }
    return any(select(!select(!var_0.xz, var_0.xw, false && var_0.x), func_4().zx, false));
}

@compute
@workgroup_size(1)
fn main() {
    var var_0 = Struct_1(u_input.a, vec4<u32>(~0u, 0u, u_input.d, 0u), select(select(vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true)), vec4<bool>(!func_1(vec4<u32>(u_input.d, u_input.a, u_input.a, u_input.d)), func_4().x, all(vec4<bool>(true, true, true, true)), func_1(vec4<u32>(u_input.a, u_input.d, 53432u, u_input.d) >> (vec4<u32>(1u, 0u, u_input.d, 1u) % vec4<u32>(32u)))), true), _wgslsmith_f_op_f32(func_7(func_5(vec2<i32>(-1i) * -u_input.c.zx), Struct_1(u_input.a, vec4<u32>(u_input.d, u_input.d, _wgslsmith_dot_vec2_u32(vec2<u32>(u_input.a, u_input.a), vec2<u32>(u_input.a, u_input.d)), u_input.d | u_input.d), vec4<bool>(true, true, any(vec3<bool>(true, true, false)), any(vec2<bool>(true, true))), _wgslsmith_f_op_f32(-110f * _wgslsmith_f_op_f32(-1934f)), 4294967295u), _wgslsmith_f_op_f32(f32(-1f) * -236f), Struct_1(_wgslsmith_dot_vec2_u32(~vec2<u32>(80570u, 25607u), _wgslsmith_add_vec2_u32(vec2<u32>(u_input.d, u_input.d), vec2<u32>(u_input.d, u_input.d))), vec4<u32>(u_input.d, 36624u, firstTrailingBit(52459u), u_input.d), vec4<bool>(true, true, true, true), _wgslsmith_f_op_f32(-755f - 1410f), ~22851u))), _wgslsmith_sub_u32(~(~u_input.a), 1u));
    let var_1 = 67094u;
    for (var var_2 = 2147483647i; ~countOneBits(59298u) >= (func_3().a.x | var_1); var_2 += 1i) {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
    }
    var var_2 = var_0.a >= var_1;
    let var_3 = var_0.c.x;
    var var_4 = vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(var_0.d + 1889f), _wgslsmith_div_f32(var_0.d, var_0.d))), var_0.d))), -315f);
    if (var_0.c.x) {
        var var_5 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(var_4.x, 166f, var_4.x, var_4.x)) - _wgslsmith_f_op_vec4_f32(sign(vec4<f32>(-319f, -858f, -1320f, 891f)))) - _wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(var_0.d, -963f, var_0.d, -342f)))))) * _wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(abs(_wgslsmith_f_op_vec4_f32(vec4<f32>(-868f, var_4.x, var_0.d, var_0.d) - vec4<f32>(470f, var_4.x, 924f, -412f))))))) - _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(-var_4.x), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(var_4.x, var_0.d, true))), _wgslsmith_f_op_f32(-847f), _wgslsmith_f_op_f32(select(-1745f, _wgslsmith_f_op_f32(-var_0.d), true)))));
        var var_6 = Struct_1(~(max(0u & var_0.a, var_1 >> (29981u % 32u)) >> (((var_0.b.x | 117348u) ^ ~2608u) % 32u)), ~(~var_0.b), func_4(), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-var_0.d), var_5.x, func_6())))), func_3().a.x >> (~(~(~0u)) % 32u));
    }
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(floor(vec4<f32>(1224f, var_0.d, var_4.x, var_0.d)))))) + _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(-285f, -1334f, -420f, -2834f))))), ~var_0.b, func_3().a.x, _wgslsmith_dot_vec4_u32(select(var_0.b, vec4<u32>(~u_input.a, var_0.a, var_1, ~var_1), var_0.c.x), ~select(vec4<u32>(0u, 4294967295u, var_0.a, var_1), var_0.b, var_0.c) | min(vec4<u32>(u_input.a, 13774u, var_1, var_1), min(var_0.b, var_0.b))), vec3<f32>(var_0.d, -1450f, _wgslsmith_f_op_f32(func_7(Struct_2(countOneBits(var_0.b.wz), select(vec2<i32>(u_input.c.x, 2147483647i), vec2<i32>(13495i, -18027i), vec2<bool>(var_0.c.x, var_0.c.x)), vec2<i32>(u_input.b.x, 1i), _wgslsmith_f_op_f32(-var_0.d)), Struct_1(81212u, select(var_0.b, var_0.b, var_0.c.x), var_0.c, _wgslsmith_f_op_f32(-var_4.x), ~var_1), _wgslsmith_f_op_f32(-var_0.d), Struct_1(~37885u, ~vec4<u32>(59673u, 13461u, 14265u, 0u), select(var_0.c, var_0.c, vec4<bool>(var_0.c.x, false, true, var_0.c.x)), var_4.x, _wgslsmith_mod_u32(var_0.a, var_0.a))))));
}

`;