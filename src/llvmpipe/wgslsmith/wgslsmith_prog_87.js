export const input = [170,4,8,242,225,100,222,57,208,27,244,244,153,127,186,159,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [170,4,8,242,225,100,222,57,208,27,244,244,153,127,186,159,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[170,4,8,242,225,100,222,57,208,27,244,244,153,127,186,159]}
// Seed: 3060353681429914235

struct Struct_1 {
    a: vec3<i32>,
    b: i32,
    c: u32,
}

struct Struct_2 {
    a: vec2<u32>,
    b: Struct_1,
    c: bool,
    d: i32,
    e: vec3<u32>,
}

struct UniformBuffer {
    a: vec3<i32>,
}

struct StorageBuffer {
    a: vec3<i32>,
    b: vec2<f32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> LOOP_COUNTERS: array<u32, 24>;

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn func_6(arg_0: vec3<u32>, arg_1: vec4<u32>, arg_2: vec3<bool>, arg_3: Struct_1) -> u32 {
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        var var_0 = firstLeadingBit(-arg_3.a.x);
        break;
    }
    let var_0 = select(select(!(!(!vec2<bool>(arg_2.x, arg_2.x))), !(!arg_2.zy), select(!arg_2.yz, !arg_2.zy, arg_2.x)), !(!arg_2.zz), !arg_2.yx);
    switch (firstLeadingBit(_wgslsmith_dot_vec3_i32(~(-vec3<i32>(1i, 17640i, arg_3.b)), vec3<i32>(14983i, _wgslsmith_dot_vec2_i32(max(vec2<i32>(arg_3.a.x, 3549i), u_input.a.xz), -vec2<i32>(arg_3.a.x, u_input.a.x)), ~u_input.a.x ^ 0i)))) {
        case 2147483647i: {
            if (arg_2.x) {
            }
            var var_1 = arg_3;
            loop {
                if (LOOP_COUNTERS[1u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
                break;
            }
            switch (_wgslsmith_div_i32(_wgslsmith_mod_i32(abs(var_1.a.x << (var_1.c % 32u)), arg_3.b), ~9666i) >> (_wgslsmith_div_u32(_wgslsmith_dot_vec4_u32(~arg_1, ~vec4<u32>(1u, arg_1.x, arg_3.c, 0u)), _wgslsmith_sub_u32(60869u, 1u)) % 32u)) {
                case -1i: {
                    let var_2 = arg_3;
                    let var_3 = var_2;
                    var_1 = Struct_1(-vec3<i32>(1i, arg_3.a.x, var_3.a.x << (16413u % 32u)), select(i32(-2147483648), _wgslsmith_mod_i32(countOneBits(0i), _wgslsmith_mod_i32(_wgslsmith_mod_i32(u_input.a.x, 40893i), ~(-66457i))), !arg_2.x), 9188u);
                    var_1 = Struct_1(countOneBits(~(firstLeadingBit(var_3.a) | var_2.a)), countOneBits(-16546i), firstTrailingBit(_wgslsmith_mod_u32(_wgslsmith_dot_vec2_u32(vec2<u32>(4294967295u, arg_1.x), arg_0.xy) | 24363u, ~arg_0.x)));
                }
                default: {
                    var_1 = Struct_1(vec3<i32>(~_wgslsmith_sub_i32(var_1.a.x, _wgslsmith_clamp_i32(arg_3.b, 0i, 13017i)), arg_3.b, arg_3.a.x), -_wgslsmith_div_i32(var_1.b, _wgslsmith_dot_vec3_i32(vec3<i32>(arg_3.b, u_input.a.x, u_input.a.x), vec3<i32>(arg_3.a.x, var_1.a.x, arg_3.a.x)) & (arg_3.a.x << (arg_0.x % 32u))), countOneBits(firstLeadingBit(21412u)));
                    let var_2 = vec3<bool>(!(all(vec3<bool>(var_0.x, var_0.x, arg_2.x)) && (var_0.x | true)) || true, true, true);
                    var var_3 = arg_3.c;
                    var var_4 = ~reverseBits(var_1.c);
                    var var_5 = arg_3;
                }
            }
        }
        case -37583i: {
            var var_1 = arg_0;
            var var_2 = Struct_2(_wgslsmith_clamp_vec2_u32(_wgslsmith_add_vec2_u32(select(vec2<u32>(arg_1.x, 4294967295u), _wgslsmith_div_vec2_u32(var_1.yz, arg_0.yx), true), _wgslsmith_clamp_vec2_u32(~var_1.zz, var_1.yx & arg_0.zx, var_1.yy)), vec2<u32>(countOneBits(arg_1.x), 93234u), vec2<u32>(_wgslsmith_dot_vec4_u32(_wgslsmith_div_vec4_u32(arg_1, vec4<u32>(23123u, 0u, var_1.x, 9923u)), select(vec4<u32>(76302u, 4294967295u, 5860u, arg_0.x), arg_1, vec4<bool>(arg_2.x, false, arg_2.x, true))), arg_3.c >> (min(4033u, var_1.x) % 32u))), Struct_1(_wgslsmith_sub_vec3_i32(arg_3.a, _wgslsmith_clamp_vec3_i32(u_input.a, vec3<i32>(u_input.a.x, u_input.a.x, 7912i), arg_3.a) << (~vec3<u32>(arg_0.x, arg_0.x, 4294967295u) % vec3<u32>(32u))), min(1i, -19988i), _wgslsmith_mult_u32(_wgslsmith_clamp_u32(arg_0.x, 4294967295u, arg_3.c), 16772u) | abs(min(10602u, 1u))), any(var_0), 1i | arg_3.b, _wgslsmith_mod_vec3_u32(abs(_wgslsmith_sub_vec3_u32(max(vec3<u32>(0u, var_1.x, arg_1.x), arg_0), ~vec3<u32>(4294967295u, arg_3.c, 4294967295u))), vec3<u32>(_wgslsmith_dot_vec3_u32(_wgslsmith_div_vec3_u32(vec3<u32>(var_1.x, 69791u, arg_3.c), arg_0), vec3<u32>(17853u, arg_0.x, 59136u)), min(arg_0.x, arg_0.x), ~_wgslsmith_clamp_u32(46935u, 0u, 65086u))));
            let var_3 = -_wgslsmith_sub_i32(-_wgslsmith_add_i32(16295i, -31861i) >> ((~arg_3.c >> (_wgslsmith_dot_vec2_u32(vec2<u32>(arg_0.x, 4294967295u), vec2<u32>(arg_3.c, 4294967295u)) % 32u)) % 32u), _wgslsmith_div_i32(u_input.a.x, firstLeadingBit(-64077i)));
            return 4294967295u;
        }
        default: {
            let var_1 = ~vec2<i32>(arg_3.b, abs(_wgslsmith_clamp_i32(17780i, i32(-2147483648), arg_3.a.x)) | _wgslsmith_dot_vec3_i32(_wgslsmith_mod_vec3_i32(u_input.a, u_input.a), vec3<i32>(-1i, arg_3.b, arg_3.b)));
            var var_2 = select(_wgslsmith_dot_vec2_i32(countOneBits(~reverseBits(vec2<i32>(30998i, u_input.a.x))), ~(~vec2<i32>(-18786i, u_input.a.x))), 1i, !((any(vec3<bool>(arg_2.x, false, arg_2.x)) && (var_0.x | var_0.x)) == true));
            if (all(select(vec4<bool>(all(select(vec4<bool>(arg_2.x, false, true, false), vec4<bool>(var_0.x, arg_2.x, true, var_0.x), vec4<bool>(false, false, false, var_0.x))), all(vec4<bool>(true, false, var_0.x, true)) & arg_2.x, all(select(arg_2, arg_2, arg_2.x)), abs(u_input.a.x) == min(u_input.a.x, -1i)), vec4<bool>(all(!vec2<bool>(true, var_0.x)), true, !arg_2.x, !(!var_0.x)), false))) {
                let var_3 = var_1.x;
            }
        }
    }
    let var_1 = arg_3.c;
    for (var var_2 = -1i; ; var_2 -= 1i) {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        let var_3 = Struct_1(_wgslsmith_clamp_vec3_i32(firstLeadingBit(~vec3<i32>(4401i, -6502i, -25953i)), ~(vec3<i32>(-13310i, u_input.a.x, arg_3.b) & vec3<i32>(u_input.a.x, u_input.a.x, 1i)), countOneBits(vec3<i32>(4773i, u_input.a.x, arg_3.a.x))), ~1i, ~firstLeadingBit(countOneBits(_wgslsmith_dot_vec4_u32(vec4<u32>(1u, arg_1.x, 54455u, arg_3.c), vec4<u32>(1u, 73129u, arg_3.c, arg_3.c)))));
        switch (u_input.a.x & 2147483647i) {
            case -1i: {
                continue;
            }
            case i32(-2147483648): {
                var_2 = -arg_3.a.x;
                let var_4 = Struct_2(~arg_1.wx, Struct_1(vec3<i32>(u_input.a.x, min(~2147483647i, _wgslsmith_sub_i32(arg_3.b, -14598i)), 12980i), 1i, countOneBits(22497u)), !all(select(vec4<bool>(false, arg_2.x, arg_2.x, var_0.x), !vec4<bool>(arg_2.x, arg_2.x, arg_2.x, true), arg_2.x)), -1i, ~abs(arg_0));
                let var_5 = Struct_2(vec2<u32>(4294967295u, _wgslsmith_dot_vec2_u32(_wgslsmith_sub_vec2_u32(arg_0.xz, arg_1.xx), ~(vec2<u32>(4294967295u, 1u) | var_4.e.zz))), Struct_1(u_input.a, var_4.d, select(_wgslsmith_clamp_u32(1u, arg_1.x, ~var_3.c), _wgslsmith_dot_vec3_u32(_wgslsmith_sub_vec3_u32(arg_0, vec3<u32>(7811u, 4294967295u, var_1)), ~arg_0), true)), any(select(arg_2, select(arg_2, !vec3<bool>(true, var_4.c, arg_2.x), any(vec3<bool>(true, true, var_0.x))), true)), 2147483647i, _wgslsmith_mod_vec3_u32(vec3<u32>(75075u, 4294967295u, arg_1.x), var_4.e << ((vec3<u32>(4294967295u, arg_1.x, 87785u) | vec3<u32>(arg_3.c, 4294967295u, 18043u)) % vec3<u32>(32u))));
                var var_6 = vec4<i32>(-1i) * -(~(~countOneBits(vec4<i32>(1i, i32(-2147483648), var_4.b.a.x, 1271i))));
            }
            case 2147483647i: {
                var var_4 = _wgslsmith_div_i32(i32(-2147483648), _wgslsmith_mult_i32(max(firstLeadingBit(arg_3.b), _wgslsmith_mult_i32(_wgslsmith_mod_i32(-44800i, -4055i), u_input.a.x)), reverseBits(-1i)));
                var_2 = arg_3.b;
            }
            default: {
                let var_4 = arg_2.xx;
                var_2 = u_input.a.x;
            }
        }
    }
    return arg_3.c;
}

fn func_5() -> vec3<bool> {
    switch (abs(~(u_input.a.x << (func_6(select(vec3<u32>(0u, 30497u, 1u), vec3<u32>(25699u, 89767u, 21018u), true), ~vec4<u32>(1u, 38229u, 10789u, 23198u), vec3<bool>(true, false, false), Struct_1(u_input.a, -1i, 59959u)) % 32u)))) {
        case -1i: {
        }
        case 2147483647i: {
            let var_0 = Struct_1(max(vec3<i32>(i32(-2147483648), i32(-1i) * -105507i, u_input.a.x), -_wgslsmith_div_vec3_i32(-vec3<i32>(-6106i, u_input.a.x, 9828i), vec3<i32>(0i, 21149i, u_input.a.x))), abs(u_input.a.x), _wgslsmith_dot_vec4_u32(vec4<u32>(1u, 1u, 1u, 1u), vec4<u32>(_wgslsmith_mult_u32(0u, 49465u), ~0u, reverseBits(1u), 0u)));
            switch (17505i | _wgslsmith_dot_vec2_i32(~vec2<i32>(1i, ~u_input.a.x), vec2<i32>(~(-60621i), 18400i))) {
                case 0i: {
                    let var_1 = max(u_input.a.x, ~(i32(-1i) * -15082i));
                    var var_2 = _wgslsmith_dot_vec4_i32(vec4<i32>(-1i) * -(min(vec4<i32>(46451i, var_0.a.x, u_input.a.x, i32(-2147483648)), vec4<i32>(u_input.a.x, 21371i, 38164i, var_1)) >> (vec4<u32>(var_0.c, 1u, var_0.c, var_0.c) % vec4<u32>(32u))), ~(~firstTrailingBit(-vec4<i32>(var_1, -20706i, u_input.a.x, var_1))));
                    var_2 = firstLeadingBit(-33602i);
                    let var_3 = !(!(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -1429f) - _wgslsmith_f_op_f32(round(1639f))) > _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-396f), _wgslsmith_f_op_f32(-1455f * -179f), true))));
                    var_2 = var_0.a.x;
                }
                default: {
                    var var_1 = _wgslsmith_dot_vec3_i32(-vec3<i32>(var_0.b | max(14771i, -26449i), ~(i32(-2147483648) << (0u % 32u)), ~var_0.b), u_input.a);
                    var var_2 = select(!select(vec2<bool>(true, true), select(vec2<bool>(true, true), vec2<bool>(true, true), false), any(vec3<bool>(true, true, false))), vec2<bool>(true, any(select(vec2<bool>(true, true), select(vec2<bool>(true, false), vec2<bool>(false, false), vec2<bool>(false, true)), true))), 0u > var_0.c);
                    var var_3 = _wgslsmith_f_op_vec2_f32(vec2<f32>(1f, -695f) - vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(1179f + 496f) + _wgslsmith_f_op_f32(ceil(1798f)))), -595f));
                    var var_4 = 0u;
                    var_3 = _wgslsmith_f_op_vec2_f32(vec2<f32>(var_3.x, -413f) + vec2<f32>(_wgslsmith_f_op_f32(var_3.x - -326f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1303f) + -2228f)));
                }
            }
        }
        default: {
            for (var var_0 = i32(-2147483648); var_0 < 0i; var_0 -= 1i) {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
                return vec3<bool>(true, 0u != _wgslsmith_mult_u32(3946u, ~_wgslsmith_dot_vec4_u32(vec4<u32>(1u, 0u, 11155u, 70302u), vec4<u32>(61443u, 0u, 109403u, 1u))), !any(select(vec4<bool>(false, true, true, false), select(vec4<bool>(false, false, false, false), vec4<bool>(false, true, true, false), vec4<bool>(false, false, true, false)), select(false, false, true))));
            }
            if (!(!all(vec4<bool>(true, true, true, true)))) {
                var var_0 = Struct_1(vec3<i32>(~(_wgslsmith_mult_i32(0i, 1i) ^ -u_input.a.x), -_wgslsmith_dot_vec2_i32(vec2<i32>(u_input.a.x, u_input.a.x), vec2<i32>(20854i, u_input.a.x)) | -1i, 2147483647i), (u_input.a.x & u_input.a.x) & -1i, func_6(vec3<u32>(1u, 1u, 1u), max(vec4<u32>(10190u, 0u, 1u, 30397u), select(vec4<u32>(14699u, 1u, 4294967295u, 38635u), vec4<u32>(0u, 4294967295u, 0u, 0u), vec4<bool>(true, false, true, true))), vec3<bool>(true, true, true), Struct_1(u_input.a, 1i, ~7210u)) ^ _wgslsmith_mod_u32(10262u, ~0u));
                var var_1 = _wgslsmith_mod_i32(-_wgslsmith_mod_i32(i32(-1i) * -var_0.a.x, ~(~(-1490i))), u_input.a.x);
                var_1 = -9724i;
                let var_2 = all(vec4<bool>(!any(vec2<bool>(false, true)), ~var_0.c != 109243u, any(select(vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true), true)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(2168f)) * _wgslsmith_f_op_f32(f32(-1f) * -1197f)) > _wgslsmith_f_op_f32(-837f)));
                var_1 = 1i;
            }
        }
    }
    let var_0 = !select(select(select(select(vec4<bool>(true, false, true, false), vec4<bool>(true, false, false, false), true), vec4<bool>(true, true, true, true), true), select(vec4<bool>(true, true, true, true), select(vec4<bool>(false, true, true, true), vec4<bool>(false, true, true, false), false), any(vec2<bool>(false, false))), select(vec4<bool>(false, false, false, true), vec4<bool>(true, true, true, true), select(vec4<bool>(false, false, false, true), vec4<bool>(true, true, true, true), true))), !vec4<bool>(any(vec4<bool>(true, true, false, true)), true, true, true), false);
    let var_1 = !var_0.x;
    let var_2 = vec4<bool>(var_0.x, any(select(var_0, select(vec4<bool>(var_0.x, false, true, true), var_0, var_0.x), any(var_0.yx))), var_1, false);
    var var_3 = u_input.a.x << (countOneBits(1u) % 32u);
    return !var_0.wyx;
}

fn func_4(arg_0: u32) -> i32 {
    var var_0 = func_5();
    switch (u_input.a.x) {
        case 2147483647i: {
        }
        case 19669i: {
        }
        case 86243i: {
            var_0 = select(!vec3<bool>(var_0.x, var_0.x, true), vec3<bool>(!any(var_0.xx), true, true), vec3<bool>(!var_0.x, true, true));
            var var_1 = Struct_1(-_wgslsmith_div_vec3_i32(vec3<i32>(1i, 39585i, select(-1i, u_input.a.x, var_0.x)), select(u_input.a, u_input.a, true) & firstTrailingBit(u_input.a)), u_input.a.x, arg_0);
        }
        case i32(-2147483648): {
        }
        default: {
            let var_1 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(1579f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(111f + 117f) - 365f), 376f)));
            for (var var_2 = -15405i; var_0.x; var_2 -= 1i) {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                let var_3 = Struct_2(~_wgslsmith_mod_vec2_u32(max(~vec2<u32>(19707u, 1u), vec2<u32>(arg_0, 1u)), _wgslsmith_mod_vec2_u32(vec2<u32>(88838u, 25215u) << (vec2<u32>(arg_0, 1u) % vec2<u32>(32u)), _wgslsmith_div_vec2_u32(vec2<u32>(79218u, arg_0), vec2<u32>(51302u, arg_0)))), Struct_1(_wgslsmith_div_vec3_i32(~u_input.a & -vec3<i32>(-66926i, u_input.a.x, u_input.a.x), u_input.a), u_input.a.x | (7047i ^ _wgslsmith_sub_i32(-1i, u_input.a.x)), 0u), false, _wgslsmith_mult_i32(_wgslsmith_mult_i32(1i, 0i), u_input.a.x), ~_wgslsmith_sub_vec3_u32(~_wgslsmith_mod_vec3_u32(vec3<u32>(arg_0, 0u, arg_0), vec3<u32>(4294967295u, arg_0, arg_0)), _wgslsmith_div_vec3_u32(vec3<u32>(arg_0, 0u, arg_0) ^ vec3<u32>(88827u, 4294967295u, 27368u), vec3<u32>(arg_0, 3460u, 72232u))));
                var_0 = !(!vec3<bool>(var_3.c, all(!vec3<bool>(true, var_3.c, var_3.c)), 1u == abs(arg_0)));
                let var_4 = select(vec3<bool>(all(func_5()), !all(!vec3<bool>(var_3.c, var_3.c, var_3.c)), true), func_5(), !(!vec3<bool>(true, var_0.x, all(vec4<bool>(var_3.c, false, var_0.x, var_3.c)))));
                let var_5 = !(var_3.d == var_3.b.a.x);
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        break;
    }
    var_0 = vec3<bool>(var_0.x, true, var_0.x);
    let var_1 = select(vec3<u32>(_wgslsmith_div_u32(46319u ^ _wgslsmith_dot_vec2_u32(vec2<u32>(arg_0, 43912u), vec2<u32>(27851u, 6977u)), ~arg_0 >> (55222u % 32u)), arg_0, ~0u), _wgslsmith_add_vec3_u32(vec3<u32>(_wgslsmith_div_u32(min(arg_0, arg_0), 19838u), firstTrailingBit(arg_0), abs(~arg_0)), reverseBits(~firstTrailingBit(vec3<u32>(4294967295u, arg_0, arg_0)))), false);
    return 3611i;
}

fn func_3(arg_0: i32) -> Struct_1 {
    var var_0 = ~2849i < arg_0;
    var_0 = true;
    for (var var_1 = i32(-2147483648); false; var_1 += 1i) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        if (any(!vec2<bool>(false, all(select(vec4<bool>(false, true, true, false), vec4<bool>(false, false, false, true), vec4<bool>(false, true, false, false)))))) {
            var var_2 = vec4<i32>(select(arg_0, _wgslsmith_mod_i32(countOneBits(_wgslsmith_add_i32(8015i, -39164i)), firstLeadingBit(_wgslsmith_dot_vec4_i32(vec4<i32>(u_input.a.x, 47237i, u_input.a.x, -1i), vec4<i32>(arg_0, u_input.a.x, 0i, arg_0)))), true), u_input.a.x, func_4(48084u) >> (countOneBits(4294967295u) % 32u), -4406i);
            var_2 = select(vec4<i32>(_wgslsmith_add_i32(_wgslsmith_dot_vec4_i32(select(vec4<i32>(u_input.a.x, var_2.x, var_2.x, var_2.x), vec4<i32>(-10533i, arg_0, i32(-2147483648), arg_0), vec4<bool>(true, true, true, false)), ~vec4<i32>(40137i, 2147483647i, -21497i, u_input.a.x)), _wgslsmith_mod_i32(12224i, -2147483647i)), i32(-1i) * i32(-2147483648), -34790i, -1i), _wgslsmith_clamp_vec4_i32(vec4<i32>(1i, var_2.x << (32791u % 32u), u_input.a.x, -abs(var_2.x)), abs(vec4<i32>(abs(-33364i), var_2.x, _wgslsmith_add_i32(var_2.x, 9031i), _wgslsmith_div_i32(-11675i, var_2.x))), reverseBits(firstTrailingBit(vec4<i32>(-26230i, var_2.x, 41497i, arg_0) & vec4<i32>(var_2.x, 0i, -56295i, 1i)))), select(vec4<bool>(any(select(vec3<bool>(false, true, false), vec3<bool>(false, false, true), vec3<bool>(true, true, true))), true, all(vec2<bool>(true, true)), select(false, true, true)), select(select(select(vec4<bool>(false, true, true, false), vec4<bool>(false, true, true, true), false), select(vec4<bool>(true, false, true, true), vec4<bool>(true, true, true, false), false), select(false, false, true)), select(select(vec4<bool>(false, true, false, false), vec4<bool>(true, false, true, true), true), select(vec4<bool>(true, true, false, false), vec4<bool>(false, false, false, false), false), vec4<bool>(true, false, false, true)), select(vec4<bool>(false, true, false, false), select(vec4<bool>(true, false, true, false), vec4<bool>(false, true, false, true), vec4<bool>(false, true, true, true)), vec4<bool>(false, false, true, true))), true));
        }
        var_1 = arg_0 | firstTrailingBit(-12561i);
        loop {
            if (LOOP_COUNTERS[7u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
            return Struct_1(~(~u_input.a), i32(-1i) * -38300i, min(~(14893u >> (1u % 32u)) << (~4294967295u % 32u), 1u));
        }
    }
    loop {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
    }
    var var_1 = _wgslsmith_sub_i32(_wgslsmith_dot_vec4_i32(vec4<i32>(i32(-2147483648), ~_wgslsmith_dot_vec2_i32(u_input.a.yx, vec2<i32>(u_input.a.x, i32(-2147483648))), arg_0, _wgslsmith_dot_vec4_i32(_wgslsmith_clamp_vec4_i32(vec4<i32>(arg_0, 4805i, u_input.a.x, arg_0), vec4<i32>(u_input.a.x, -60212i, -1i, u_input.a.x), vec4<i32>(0i, u_input.a.x, 0i, u_input.a.x)), ~vec4<i32>(arg_0, i32(-2147483648), u_input.a.x, 0i))), vec4<i32>(27809i, _wgslsmith_mult_i32(_wgslsmith_div_i32(i32(-2147483648), 65969i), 15130i), -24801i, u_input.a.x)), 1i);
    return Struct_1(u_input.a, -23593i, ~4294967295u);
}

fn func_7(arg_0: Struct_1, arg_1: Struct_1, arg_2: vec2<u32>) -> u32 {
    if (!(!(select(arg_0.c <= 4294967295u, false, arg_0.c == 28334u) == false))) {
        var var_0 = vec3<bool>(all(!vec4<bool>(true, any(vec4<bool>(true, false, false, true)), true, true)), !all(select(vec3<bool>(false, false, false), vec3<bool>(true, true, true), func_5())), any(vec4<bool>(true, true, true, true)));
        var var_1 = arg_0;
        var_0 = select(select(func_5(), select(select(vec3<bool>(false, true, var_0.x), !vec3<bool>(var_0.x, true, var_0.x), !var_0.x), vec3<bool>(any(var_0.yy), true, !var_0.x), !(!vec3<bool>(var_0.x, var_0.x, true))), true), !vec3<bool>(any(var_0.xz), all(select(vec3<bool>(false, true, var_0.x), vec3<bool>(var_0.x, var_0.x, var_0.x), false)), var_0.x), vec3<bool>(true, true, true));
    }
    loop {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        var var_0 = 1u << (_wgslsmith_sub_u32(12205u << (_wgslsmith_sub_u32(arg_1.c & arg_2.x, ~arg_2.x) % 32u), ~(~arg_0.c)) % 32u);
    }
    if (!(!(!select(true, true, false)))) {
        var var_0 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1424f)))) + -1076f);
        if (!(false || any(select(vec4<bool>(true, true, true, true), select(vec4<bool>(false, false, false, true), vec4<bool>(true, false, false, true), false), vec4<bool>(true, true, true, true))))) {
            var_0 = _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(ceil(761f))))));
            let var_1 = arg_0;
            var var_2 = u_input.a.x >> (4565u % 32u);
            var_2 = arg_1.b << ((~firstLeadingBit(65362u) ^ ~max(arg_1.c & 20038u, _wgslsmith_dot_vec2_u32(arg_2, arg_2))) % 32u);
        }
        var var_1 = !all(select(vec3<bool>(true, arg_0.c >= 40256u, true), select(select(vec3<bool>(false, false, false), vec3<bool>(true, true, true), vec3<bool>(true, false, false)), vec3<bool>(true, true, true), vec3<bool>(true, true, true)), select(vec3<bool>(true, true, true), select(vec3<bool>(false, true, false), vec3<bool>(false, false, false), false), select(vec3<bool>(false, true, true), vec3<bool>(false, false, false), true))));
        for (; func_5().x; ) {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
            var var_2 = Struct_2(vec2<u32>(_wgslsmith_div_u32(0u, _wgslsmith_mod_u32(~0u, select(arg_0.c, arg_0.c, false))), 9002u), Struct_1(vec3<i32>(_wgslsmith_sub_i32(arg_1.b, 1i), 29167i << (arg_1.c % 32u), abs(arg_1.a.x)) | min(vec3<i32>(u_input.a.x, u_input.a.x, i32(-2147483648)), vec3<i32>(2147483647i, arg_1.a.x, -1i) & vec3<i32>(32925i, u_input.a.x, arg_1.b)), firstLeadingBit(arg_0.a.x), 2006u), all(vec4<bool>(all(vec4<bool>(false, true, true, false)), true, false, select(true, false, false))), u_input.a.x, vec3<u32>(arg_1.c, func_3(1i).c, reverseBits(~4294967295u)));
            let var_3 = var_2.c;
        }
        var_1 = true;
    }
    for (var var_0 = 41860i; var_0 <= 1i; var_0 += 1i) {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        var var_1 = _wgslsmith_div_u32(4294967295u, abs(~_wgslsmith_clamp_u32(49096u, arg_0.c, ~arg_2.x)));
    }
    if (func_5().x) {
        return reverseBits(4294967295u);
    }
    return ~min(~0u, _wgslsmith_dot_vec3_u32(~(~vec3<u32>(arg_1.c, 0u, 1u)), _wgslsmith_mult_vec3_u32(~vec3<u32>(arg_2.x, 1u, arg_2.x), vec3<u32>(arg_0.c, 62968u, 0u) & vec3<u32>(8475u, arg_2.x, arg_2.x))));
}

fn func_2(arg_0: vec2<bool>, arg_1: vec2<i32>, arg_2: vec3<f32>, arg_3: Struct_1) -> Struct_1 {
    if (true) {
    }
    var var_0 = _wgslsmith_mod_u32(reverseBits(~func_7(func_3(1i), arg_3, ~vec2<u32>(5858u, arg_3.c))), arg_3.c);
    var_0 = ~609u;
    loop {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        continue;
    }
    var var_1 = Struct_1(vec3<i32>(_wgslsmith_sub_i32(-min(2147483647i, 1i), arg_1.x), _wgslsmith_add_i32(13124i >> (arg_3.c % 32u), firstTrailingBit(2147483647i)) & 61894i, _wgslsmith_add_i32(arg_1.x, u_input.a.x)), 25168i & u_input.a.x, arg_3.c);
    return Struct_1(~vec3<i32>(reverseBits(~(-40646i)), arg_3.a.x, ~2147483647i), _wgslsmith_sub_i32(select(abs(arg_1.x), 1i, false), arg_1.x), ~(~_wgslsmith_mod_u32(arg_3.c >> (var_1.c % 32u), 1u)));
}

fn func_1(arg_0: vec4<f32>) -> i32 {
    if (-1087f == arg_0.x) {
        for (; true; ) {
            if (LOOP_COUNTERS[13u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
            continue;
        }
        loop {
            if (LOOP_COUNTERS[14u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
            var var_0 = vec3<f32>(arg_0.x, _wgslsmith_div_f32(_wgslsmith_f_op_f32(967f * _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(floor(-2266f)), _wgslsmith_f_op_f32(-arg_0.x)))), 229f), _wgslsmith_f_op_f32(-arg_0.x));
        }
        if ((_wgslsmith_f_op_f32(-arg_0.x) >= -1416f) && true) {
        }
        loop {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            let var_0 = 4294967295u;
            let var_1 = Struct_1(u_input.a, 1i & -u_input.a.x, 1u << (var_0 % 32u));
            var var_2 = Struct_2(firstTrailingBit(~(~vec2<u32>(var_1.c, var_0)) ^ ~_wgslsmith_add_vec2_u32(vec2<u32>(var_1.c, 1u), vec2<u32>(1u, 0u))), func_2(!vec2<bool>(any(vec4<bool>(true, true, true, true)), true), var_1.a.yx, _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(-vec3<f32>(260f, arg_0.x, -797f))))), Struct_1(abs(_wgslsmith_clamp_vec3_i32(var_1.a, vec3<i32>(u_input.a.x, -4222i, 44758i), var_1.a)), (u_input.a.x & 1i) | var_1.a.x, ~countOneBits(var_0))), !all(func_5()) || (true & !all(vec4<bool>(false, true, true, true))), ~(~u_input.a.x), abs(reverseBits(~reverseBits(vec3<u32>(var_1.c, 0u, 57837u)))));
            var var_3 = _wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(f32(-1f) * -405f), arg_0.x, _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-arg_0.x))), arg_0.x)), _wgslsmith_f_op_f32(select(523f, -1233f, u_input.a.x != 4955i))) * arg_0);
            var_3 = vec4<f32>(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(var_3.x * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_0.x - var_3.x))))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1010f * -1000f) + arg_0.x)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -955f)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(exp2(_wgslsmith_div_f32(-1000f, -642f)))))), _wgslsmith_f_op_f32(sign(_wgslsmith_div_f32(_wgslsmith_f_op_f32(floor(687f)), arg_0.x))));
        }
    }
    let var_0 = Struct_2(vec2<u32>(1u, 1u), func_3(5706i), true, select(u_input.a.x, _wgslsmith_dot_vec4_i32(vec4<i32>(~(-47417i), -u_input.a.x, 77885i, min(-12349i, u_input.a.x)), vec4<i32>(_wgslsmith_clamp_i32(u_input.a.x, u_input.a.x, 0i), u_input.a.x >> (1u % 32u), ~0i, u_input.a.x)), all(vec4<bool>(false, false, true, false)) || true), select(select(_wgslsmith_clamp_vec3_u32(~vec3<u32>(1u, 4294967295u, 0u), ~vec3<u32>(1u, 115841u, 39822u), max(vec3<u32>(1u, 1u, 4294967295u), vec3<u32>(39009u, 46076u, 25922u))), ~vec3<u32>(1u, 1u, 1u), !select(vec3<bool>(true, true, false), vec3<bool>(true, true, false), vec3<bool>(false, false, true))), _wgslsmith_mult_vec3_u32(~vec3<u32>(1u, 0u, 20643u), _wgslsmith_mult_vec3_u32(vec3<u32>(69772u, 4294967295u, 0u), vec3<u32>(0u, 0u, 92291u))) ^ _wgslsmith_mod_vec3_u32(_wgslsmith_mod_vec3_u32(vec3<u32>(0u, 0u, 32278u), vec3<u32>(4294967295u, 37481u, 20u)), _wgslsmith_clamp_vec3_u32(vec3<u32>(46379u, 0u, 48480u), vec3<u32>(5398u, 21338u, 4294967295u), vec3<u32>(4294967295u, 1u, 47210u))), 2147483647i > u_input.a.x));
    let var_1 = _wgslsmith_f_op_f32(-576f);
    switch (_wgslsmith_sub_i32(u_input.a.x, u_input.a.x) & _wgslsmith_sub_i32(-abs(func_3(u_input.a.x).b), func_3(var_0.b.a.x).b)) {
        case 1i: {
        }
        case 42836i: {
            var var_2 = var_0.d;
            switch (_wgslsmith_div_i32(u_input.a.x, u_input.a.x)) {
                case -1i: {
                    let var_3 = var_0.c | false;
                    let var_4 = _wgslsmith_div_vec2_i32(~vec2<i32>(23523i, _wgslsmith_dot_vec4_i32(max(vec4<i32>(i32(-2147483648), -19867i, u_input.a.x, 1i), vec4<i32>(var_0.b.b, 2147483647i, -17974i, -51914i)), min(vec4<i32>(-16313i, 21219i, -1i, i32(-2147483648)), vec4<i32>(-14210i, -1i, -4601i, 5224i)))), ~(~_wgslsmith_mult_vec2_i32(~var_0.b.a.zz, _wgslsmith_mult_vec2_i32(u_input.a.yz, vec2<i32>(35470i, 57518i)))));
                    var_2 = -var_0.b.b;
                }
                case 16864i: {
                    var var_3 = -1i;
                    var var_4 = ~vec2<i32>(func_4(~_wgslsmith_dot_vec2_u32(vec2<u32>(var_0.e.x, 133288u), var_0.e.yx)), u_input.a.x);
                }
                case 0i: {
                }
                case 31488i: {
                }
                default: {
                    var var_3 = Struct_1(u_input.a, max(-36927i, min(~1i, var_0.b.a.x)), var_0.a.x);
                    let var_4 = true;
                }
            }
            switch (1i) {
                case 2147483647i: {
                    var var_3 = var_0;
                    let var_4 = var_0;
                    var_2 = u_input.a.x;
                }
                case 4057i: {
                    var var_3 = var_0;
                    var var_4 = Struct_2(var_3.a, func_3(select(~(-var_0.b.a.x), var_3.d, select(!var_0.c, var_0.c, true))), true, -u_input.a.x, ~var_0.e);
                }
                case 0i: {
                    var var_3 = Struct_2(~countOneBits(countOneBits(~vec2<u32>(var_0.e.x, var_0.e.x))), Struct_1(~(~min(u_input.a, u_input.a)), ~_wgslsmith_mod_i32(-20736i, reverseBits(u_input.a.x)), 63728u), true, u_input.a.x & _wgslsmith_add_i32(func_4(_wgslsmith_div_u32(45443u, var_0.b.c)), i32(-1i) * -48577i), _wgslsmith_div_vec3_u32(firstLeadingBit(var_0.e), _wgslsmith_clamp_vec3_u32(~min(var_0.e, vec3<u32>(4294967295u, var_0.a.x, 58609u)), ~var_0.e, var_0.e)));
                }
                case -1i: {
                    let var_3 = any(select(vec3<bool>(all(vec3<bool>(false, false, true)), false, !(var_0.c | var_0.c)), vec3<bool>(func_5().x, true, any(func_5())), var_0.c));
                    var var_4 = true;
                }
                default: {
                }
            }
            var var_3 = Struct_1(-u_input.a, _wgslsmith_div_i32(_wgslsmith_clamp_i32(_wgslsmith_mult_i32(~u_input.a.x, -1i << (var_0.a.x % 32u)), max(-1i, u_input.a.x), select(var_0.d >> (var_0.a.x % 32u), _wgslsmith_dot_vec3_i32(vec3<i32>(0i, -4820i, var_0.d), vec3<i32>(u_input.a.x, 42126i, var_0.b.a.x)), true)), var_0.d), 6147u);
        }
        case -42082i: {
            if (true) {
                let var_2 = _wgslsmith_dot_vec2_i32(_wgslsmith_mult_vec2_i32(var_0.b.a.xx, vec2<i32>(-(u_input.a.x ^ 34589i), func_4(_wgslsmith_clamp_u32(var_0.e.x, 43217u, 4294967295u)))), vec2<i32>(~(~(-var_0.b.b)), 11751i));
                let var_3 = -33212i;
                var var_4 = ~min(var_2, countOneBits(var_2) | i32(-2147483648)) ^ var_2;
            }
        }
        case i32(-2147483648): {
            var var_2 = var_0.e.x;
            loop {
                if (LOOP_COUNTERS[16u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
                var_2 = func_6(vec3<u32>(~(func_2(vec2<bool>(false, var_0.c), vec2<i32>(var_0.b.b, var_0.d), arg_0.yyz, Struct_1(vec3<i32>(u_input.a.x, u_input.a.x, u_input.a.x), u_input.a.x, 69895u)).c | min(0u, var_0.b.c)), 26773u ^ (1u ^ var_0.a.x), firstTrailingBit(func_6(vec3<u32>(4294967295u, var_0.a.x, var_0.b.c), vec4<u32>(36323u, var_0.e.x, var_0.a.x, 30692u), vec3<bool>(false, var_0.c, true), Struct_1(u_input.a, 2147483647i, 0u))) << (~_wgslsmith_mod_u32(var_0.e.x, var_0.a.x) % 32u)), _wgslsmith_div_vec4_u32(~(~(~vec4<u32>(0u, var_0.e.x, var_0.b.c, 20251u))), vec4<u32>(_wgslsmith_div_u32(69376u, var_0.b.c), 4294967295u, firstLeadingBit(54822u), 0u)), select(select(!(!vec3<bool>(var_0.c, var_0.c, var_0.c)), !(!vec3<bool>(var_0.c, true, var_0.c)), true), func_5(), false), Struct_1(vec3<i32>(u_input.a.x, var_0.d, var_0.b.a.x), var_0.b.b, ~var_0.b.c));
                let var_3 = Struct_2(var_0.a, func_3(_wgslsmith_div_i32(i32(-1i) * -11016i, i32(-1i) * -308i)), !(!any(select(vec4<bool>(false, var_0.c, var_0.c, true), vec4<bool>(true, false, var_0.c, true), vec4<bool>(false, var_0.c, var_0.c, var_0.c)))), var_0.d, ~_wgslsmith_div_vec3_u32(select(var_0.e << (var_0.e % vec3<u32>(32u)), vec3<u32>(90863u, 23979u, var_0.a.x), !vec3<bool>(var_0.c, var_0.c, false)), countOneBits(~var_0.e)));
                break;
            }
            for (var var_3 = 0i; var_0.c; var_3 += 1i) {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                let var_4 = func_3(-16767i);
                var var_5 = var_4;
            }
        }
        default: {
            for (var var_2 = 1i; true; var_2 -= 1i) {
                if (LOOP_COUNTERS[18u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
                var_2 = i32(-1i) * -1i;
                break;
            }
            var var_2 = firstLeadingBit(1i);
            var_2 = -var_0.b.a.x;
        }
    }
    loop {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
    }
    return var_0.d;
}

@compute
@workgroup_size(1)
fn main() {
    switch (_wgslsmith_clamp_i32(func_1(vec4<f32>(_wgslsmith_f_op_f32(-1000f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(-511f)) * _wgslsmith_f_op_f32(474f - 1000f)), _wgslsmith_f_op_f32(-1000f), -474f)), ~u_input.a.x, _wgslsmith_sub_i32(~u_input.a.x, select(12413i, min(reverseBits(u_input.a.x), 1i), false)))) {
        case 2147483647i: {
            switch (0i) {
                case i32(-2147483648): {
                    var var_0 = func_2(vec2<bool>(true, !(!all(vec3<bool>(false, false, true)))), u_input.a.zy, _wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(vec3<f32>(1f, 1f, 1f) + vec3<f32>(-362f, 2856f, 163f)))))), func_3(u_input.a.x));
                }
                case 60907i: {
                    let var_0 = u_input.a;
                }
                case -12573i: {
                    var var_0 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-873f * _wgslsmith_f_op_f32(min(2409f, -706f))))))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1788f) * _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(-258f)))))));
                    var_0 = _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1214f + -192f))))))));
                    let var_1 = _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(exp2(1f)) + _wgslsmith_f_op_f32(-1196f))));
                    var_0 = var_1;
                    var_0 = _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(sign(var_1)), var_1));
                }
                default: {
                    var var_0 = _wgslsmith_div_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(select(2677f, _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(f32(-1f) * -453f), _wgslsmith_f_op_f32(f32(-1f) * -685f))), true)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -472f)), _wgslsmith_f_op_f32(ceil(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-1105f + -1052f), _wgslsmith_f_op_f32(step(1701f, -823f)))))), _wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(-vec3<f32>(259f, -382f, -754f)), _wgslsmith_f_op_vec3_f32(select(_wgslsmith_div_vec3_f32(vec3<f32>(-903f, -2495f, -785f), vec3<f32>(823f, 767f, -918f)), _wgslsmith_f_op_vec3_f32(-vec3<f32>(830f, -933f, -2777f)), vec3<bool>(true, false, false))))))));
                    var_0 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(max(vec3<f32>(var_0.x, 603f, -1262f), vec3<f32>(376f, -227f, var_0.x))))))) * _wgslsmith_div_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(trunc(523f)), _wgslsmith_f_op_f32(max(-1343f, _wgslsmith_f_op_f32(trunc(-453f)))), var_0.x), _wgslsmith_f_op_vec3_f32(ceil(vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -1997f), _wgslsmith_f_op_f32(1000f - -698f), _wgslsmith_f_op_f32(110f * var_0.x))))));
                    var var_1 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-215f, var_0.x, _wgslsmith_f_op_f32(-var_0.x))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(var_0.x, var_0.x, var_0.x))))));
                    var var_2 = vec4<f32>(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1354f) + var_0.x))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(var_1.x + _wgslsmith_f_op_f32(f32(-1f) * -1109f)) + _wgslsmith_f_op_f32(f32(-1f) * -257f)), true)), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(max(var_0.x, _wgslsmith_f_op_f32(select(1522f, _wgslsmith_div_f32(-1235f, var_1.x), true)))), _wgslsmith_div_f32(-683f, -137f))), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(var_0.x))) - _wgslsmith_div_f32(_wgslsmith_f_op_f32(-1136f), -1153f)), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(897f, _wgslsmith_f_op_f32(var_0.x - var_0.x))))), _wgslsmith_f_op_f32(sign(var_0.x)));
                }
            }
        }
        case 1i: {
        }
        case 0i: {
            var var_0 = ~5018u;
            for (var var_1 = 2147483647i; !func_5().x; var_1 -= 1i) {
                if (LOOP_COUNTERS[20u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
            }
            let var_1 = _wgslsmith_add_vec3_u32(firstLeadingBit(~select(vec3<u32>(1u, 28909u, 52441u), vec3<u32>(6725u, 22961u, 13727u), false) | vec3<u32>(1u, 1u, 1u)), vec3<u32>(_wgslsmith_mod_u32(abs(4294967295u), ~22918u >> (_wgslsmith_clamp_u32(33094u, 1u, 1u) % 32u)), reverseBits(max(~4294967295u, reverseBits(48903u))), 1u));
            var var_2 = _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(select(-384f, _wgslsmith_f_op_f32(floor(1295f)), 1i >= ~u_input.a.x)), -1557f, true == any(vec4<bool>(true, true, true, true))));
            switch (-2147483647i) {
                case i32(-2147483648): {
                    let var_3 = i32(-2147483648);
                    var var_4 = Struct_1(_wgslsmith_sub_vec3_i32(vec3<i32>(-u_input.a.x, -1i, -(u_input.a.x << (1u % 32u))), select(_wgslsmith_mod_vec3_i32(-vec3<i32>(u_input.a.x, i32(-2147483648), u_input.a.x), _wgslsmith_div_vec3_i32(u_input.a, vec3<i32>(u_input.a.x, -74983i, var_3))), func_2(vec2<bool>(false, true), ~vec2<i32>(i32(-2147483648), 2147483647i), _wgslsmith_f_op_vec3_f32(vec3<f32>(370f, 216f, 304f) + vec3<f32>(-1415f, -442f, 345f)), Struct_1(u_input.a, u_input.a.x, 1u)).a, select(vec3<bool>(false, true, true), vec3<bool>(true, true, true), any(vec4<bool>(true, false, false, false))))), var_3, var_1.x);
                }
                case -39207i: {
                    return;
                }
                default: {
                }
            }
        }
        case 21714i: {
            var var_0 = 345f;
            var var_1 = _wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(1f, 1f, 1f, 1f))) * _wgslsmith_f_op_vec4_f32(abs(vec4<f32>(_wgslsmith_f_op_f32(-304f * 256f), _wgslsmith_f_op_f32(975f - -1242f), 1511f, _wgslsmith_f_op_f32(-238f))))), _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(357f, 533f, -1134f, 254f) + vec4<f32>(587f, -636f, -234f, 1178f)) + _wgslsmith_f_op_vec4_f32(sign(vec4<f32>(555f, -831f, -1106f, 1000f)))) * vec4<f32>(_wgslsmith_f_op_f32(-491f + -293f), 1070f, _wgslsmith_f_op_f32(max(992f, -232f)), _wgslsmith_f_op_f32(f32(-1f) * -106f))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(min(vec4<f32>(185f, -404f, 1119f, 681f), vec4<f32>(-2726f, -265f, -1504f, -1102f))) - _wgslsmith_div_vec4_f32(vec4<f32>(-1600f, 172f, 551f, -301f), vec4<f32>(124f, 521f, -891f, -1724f)))), true))));
        }
        default: {
            loop {
                if (LOOP_COUNTERS[21u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
                var var_0 = Struct_2(_wgslsmith_clamp_vec2_u32(~vec2<u32>(~53537u, 1u), vec2<u32>(4294967295u, 1u), min(_wgslsmith_mult_vec2_u32(vec2<u32>(1u, 1u), ~vec2<u32>(115064u, 1u)), vec2<u32>(1u, 1u))), func_2(func_5().xx, u_input.a.yz, _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(select(vec3<f32>(-353f, 159f, 2065f), _wgslsmith_f_op_vec3_f32(vec3<f32>(-969f, -1225f, 600f) + vec3<f32>(124f, 448f, 181f)), 1i >= u_input.a.x))), Struct_1(vec3<i32>(1i, _wgslsmith_add_i32(u_input.a.x, u_input.a.x), _wgslsmith_dot_vec4_i32(vec4<i32>(u_input.a.x, u_input.a.x, u_input.a.x, i32(-2147483648)), vec4<i32>(u_input.a.x, -11324i, 16519i, u_input.a.x))), 32362i, 4294967295u)), -48482i == u_input.a.x, firstTrailingBit(u_input.a.x), ~_wgslsmith_clamp_vec3_u32(vec3<u32>(_wgslsmith_dot_vec2_u32(vec2<u32>(790u, 37736u), vec2<u32>(51354u, 1u)), 92296u, ~33708u), select(vec3<u32>(19135u, 8630u, 4294967295u), select(vec3<u32>(29764u, 50790u, 0u), vec3<u32>(65971u, 8118u, 45677u), false), select(vec3<bool>(true, true, false), vec3<bool>(false, false, true), false)), ~vec3<u32>(1u, 20675u, 5449u)));
            }
            if (true) {
                let var_0 = Struct_1(vec3<i32>(_wgslsmith_sub_i32(abs(u_input.a.x << (11461u % 32u)), i32(-1i) * -2105i), ~u_input.a.x, -1i), 1i, firstTrailingBit(4294967295u));
            }
        }
    }
    var var_0 = Struct_2(~(~(~vec2<u32>(1u, 1u))), Struct_1(u_input.a, 2147483647i, ~_wgslsmith_sub_u32(1u, select(4294967295u, 32948u, true))), (func_2(func_5().xy, abs(vec2<i32>(u_input.a.x, u_input.a.x)), vec3<f32>(-540f, -748f, -923f), Struct_1(u_input.a, 0i, 1u)).b >= 2147483647i) & true, u_input.a.x, ~(~countOneBits(vec3<u32>(763u, 118930u, 4294967295u))));
    if (true) {
        var_0 = Struct_2(_wgslsmith_clamp_vec2_u32(var_0.e.yy, ~firstLeadingBit(var_0.a), vec2<u32>(firstTrailingBit(~1u), 1u)), Struct_1(_wgslsmith_add_vec3_i32(min(vec3<i32>(var_0.b.b, 14030i, 34204i), u_input.a) | var_0.b.a, vec3<i32>(_wgslsmith_sub_i32(51928i, u_input.a.x), i32(-2147483648), u_input.a.x)), var_0.d, var_0.a.x), var_0.b.b >= (select(_wgslsmith_mult_i32(u_input.a.x, i32(-2147483648)), ~u_input.a.x, var_0.c) ^ u_input.a.x), ~var_0.b.b, vec3<u32>(_wgslsmith_dot_vec2_u32(abs(max(vec2<u32>(var_0.a.x, var_0.b.c), vec2<u32>(var_0.a.x, var_0.a.x))), var_0.a), func_7(func_3(-u_input.a.x), func_3(_wgslsmith_sub_i32(var_0.b.b, -48660i)), var_0.a), _wgslsmith_div_u32(~39818u, min(49830u, ~var_0.a.x))));
        var var_1 = func_3(reverseBits(select(abs(u_input.a.x), ~u_input.a.x, false)));
        for (; ; ) {
            if (LOOP_COUNTERS[22u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
            let var_2 = -782f;
            var var_3 = ~(vec3<u32>(1u, _wgslsmith_dot_vec4_u32(vec4<u32>(var_0.a.x, 49649u, 42712u, 29011u) >> (vec4<u32>(0u, var_0.b.c, var_0.e.x, 4294967295u) % vec4<u32>(32u)), vec4<u32>(var_1.c, 18697u, var_1.c, var_0.a.x)), ~(var_1.c << (var_0.e.x % 32u))) ^ _wgslsmith_sub_vec3_u32(vec3<u32>(~1u, _wgslsmith_dot_vec2_u32(vec2<u32>(4294967295u, 1u), var_0.a), _wgslsmith_clamp_u32(0u, var_0.b.c, 0u)), ~vec3<u32>(var_0.e.x, var_1.c, 118641u)));
            var_0 = Struct_2(~(~(~firstTrailingBit(vec2<u32>(32669u, 1u)))), func_2(vec2<bool>(any(!vec2<bool>(var_0.c, var_0.c)), false), u_input.a.zx, _wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-856f, -1243f, var_2)), vec3<f32>(2462f, var_2, var_2)))), Struct_1(vec3<i32>(_wgslsmith_clamp_i32(u_input.a.x, 1i, var_1.a.x), _wgslsmith_mult_i32(u_input.a.x, 1i), var_0.d), -7040i, var_1.c)), all(select(!vec3<bool>(false, var_0.c, var_0.c), !vec3<bool>(true, var_0.c, false), !(!vec3<bool>(var_0.c, false, false)))), 1i, vec3<u32>(40406u, firstLeadingBit(~(var_1.c >> (var_1.c % 32u))), 0u));
            var var_4 = _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(-1222f, 1000f, -583f))))) * _wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(-vec3<f32>(298f, -236f, -141f))))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(var_2, -537f, -798f) - vec3<f32>(-2584f, -2402f, 373f)))))), _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-329f, 1413f, 2472f)), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(select(vec3<f32>(var_2, 985f, -249f), vec3<f32>(var_2, -1000f, 1216f), var_0.c)))), all(vec2<bool>(all(vec2<bool>(var_0.c, var_0.c)), all(vec4<bool>(var_0.c, true, var_0.c, var_0.c))))))));
        }
        switch (1i) {
            case 20362i: {
                let var_2 = Struct_1(vec3<i32>((_wgslsmith_mod_i32(u_input.a.x, u_input.a.x) >> (abs(0u) % 32u)) ^ (firstLeadingBit(var_1.b) ^ (-40506i | var_0.d)), _wgslsmith_sub_i32(-(~(-14881i)), _wgslsmith_mod_i32(u_input.a.x, abs(var_0.b.b))), -16849i), max(2147483647i, ~(~firstTrailingBit(var_0.b.b))), func_7(Struct_1(-var_0.b.a, select(1i, -u_input.a.x, any(vec4<bool>(var_0.c, true, true, true))), select(var_1.c, 1u, false) << (var_1.c % 32u)), Struct_1(var_0.b.a, var_0.b.a.x, 1u), vec2<u32>(max(var_0.e.x, 64479u), ~var_0.a.x)));
                let var_3 = 4294967295u;
                var var_4 = Struct_2(~vec2<u32>(firstTrailingBit(~1u), _wgslsmith_dot_vec4_u32(vec4<u32>(var_2.c, 16602u, 1u, 4294967295u), vec4<u32>(var_2.c, 72552u, var_2.c, var_3) >> (vec4<u32>(var_1.c, var_1.c, 1u, 1u) % vec4<u32>(32u)))), func_2(!vec2<bool>(true, all(vec2<bool>(var_0.c, var_0.c))), vec2<i32>(12857i, 2147483647i), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(1818f, 1429f, 1962f) - vec3<f32>(-395f, -918f, 987f))), Struct_1(~u_input.a >> ((var_0.e >> (vec3<u32>(var_3, var_2.c, var_3) % vec3<u32>(32u))) % vec3<u32>(32u)), 1i, 20854u)), true, _wgslsmith_mult_i32(~(-max(-66310i, var_1.a.x)), ~1749i), var_0.e);
                let var_5 = vec3<u32>(_wgslsmith_add_u32(~_wgslsmith_dot_vec4_u32(vec4<u32>(43065u, var_3, var_0.a.x, var_1.c), vec4<u32>(35081u, 4294967295u, var_4.a.x, 1u)), 57913u), ~(~(select(var_0.e.x, var_1.c, var_0.c) >> (var_4.b.c % 32u))), 4294967295u);
            }
            case i32(-2147483648): {
                var var_2 = select(vec2<bool>(var_0.c, !all(vec2<bool>(true, false)) || all(vec4<bool>(var_0.c, true, var_0.c, var_0.c))), select(!vec2<bool>(all(vec4<bool>(true, var_0.c, var_0.c, var_0.c)), false), vec2<bool>(true, var_0.c), select(var_0.c, !(!var_0.c), all(select(vec3<bool>(var_0.c, false, var_0.c), vec3<bool>(var_0.c, true, true), vec3<bool>(var_0.c, var_0.c, var_0.c))))), vec2<bool>(true, var_0.c));
                var_2 = !select(func_5().yz, !vec2<bool>(false || var_0.c, any(vec4<bool>(var_0.c, var_2.x, var_2.x, false))), all(select(vec2<bool>(true, var_0.c), vec2<bool>(true, var_2.x), var_0.c)) || func_5().x);
            }
            default: {
                let var_2 = Struct_2(_wgslsmith_mod_vec2_u32(max(reverseBits(var_0.e.yy) ^ vec2<u32>(var_1.c, 21712u), select(_wgslsmith_clamp_vec2_u32(var_0.a, vec2<u32>(11455u, var_1.c), var_0.a), _wgslsmith_div_vec2_u32(var_0.a, vec2<u32>(0u, var_0.e.x)), vec2<bool>(false, var_0.c))), var_0.e.zy), var_0.b, all(!(!vec4<bool>(var_0.c, false, var_0.c, true))), func_3(_wgslsmith_dot_vec3_i32(abs(var_1.a ^ var_0.b.a), var_0.b.a)).b, firstTrailingBit((~vec3<u32>(41707u, 4294967295u, 36460u) ^ ~var_0.e) | vec3<u32>(var_1.c, var_1.c, ~var_1.c)));
                let var_3 = var_2;
                var var_4 = Struct_1(-vec3<i32>(~var_1.a.x << (~var_2.b.c % 32u), i32(-1i) * -var_3.d, -59705i), i32(-2147483648) >> ((~_wgslsmith_mult_u32(var_3.a.x, var_0.a.x) >> (1890u % 32u)) % 32u), max(1u, 1u));
            }
        }
    }
    var_0 = Struct_2(max(var_0.e.zz, vec2<u32>(func_3(2147483647i).c, 4294967295u)), var_0.b, !func_5().x, _wgslsmith_div_i32(-(var_0.d & _wgslsmith_dot_vec3_i32(var_0.b.a, vec3<i32>(2147483647i, 0i, var_0.d))), firstTrailingBit(var_0.d)), ~abs(~(var_0.e & vec3<u32>(0u, 65001u, var_0.b.c))));
    var_0 = Struct_2(~(~(~var_0.e.zy)), var_0.b, true, _wgslsmith_mult_i32(_wgslsmith_dot_vec3_i32(_wgslsmith_div_vec3_i32(vec3<i32>(var_0.d, -12007i, 2147483647i), _wgslsmith_sub_vec3_i32(vec3<i32>(var_0.b.a.x, 0i, var_0.d), vec3<i32>(44309i, -1270i, u_input.a.x))), min(_wgslsmith_sub_vec3_i32(u_input.a, var_0.b.a), ~vec3<i32>(0i, 2147483647i, var_0.b.a.x))), firstLeadingBit(21109i)), var_0.e & vec3<u32>(0u, 58696u, ~func_6(vec3<u32>(36672u, var_0.e.x, 1u), vec4<u32>(var_0.e.x, 33164u, 0u, var_0.a.x), vec3<bool>(true, false, true), var_0.b)));
    loop {
        if (LOOP_COUNTERS[23u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
        switch (1350i) {
            case 2147483647i: {
                var var_1 = !select(!select(!vec4<bool>(false, var_0.c, var_0.c, true), select(vec4<bool>(false, var_0.c, var_0.c, var_0.c), vec4<bool>(false, var_0.c, true, true), vec4<bool>(true, var_0.c, false, var_0.c)), true), vec4<bool>(true, !all(vec4<bool>(false, false, var_0.c, true)), any(vec2<bool>(true, true)), any(vec3<bool>(var_0.c, var_0.c, var_0.c))), _wgslsmith_div_i32(_wgslsmith_sub_i32(u_input.a.x, u_input.a.x), _wgslsmith_mod_i32(u_input.a.x, i32(-2147483648))) != var_0.d);
                var var_2 = var_1.wz;
                break;
            }
            case -9760i: {
                var_0 = Struct_2(firstTrailingBit(~vec2<u32>(var_0.a.x, _wgslsmith_add_u32(40985u, var_0.a.x))), func_2(!(!select(vec2<bool>(true, false), vec2<bool>(false, false), vec2<bool>(false, var_0.c))), (_wgslsmith_sub_vec2_i32(vec2<i32>(var_0.b.b, -7422i), vec2<i32>(u_input.a.x, var_0.d)) ^ var_0.b.a.yx) << (_wgslsmith_mod_vec2_u32(~vec2<u32>(22668u, var_0.b.c), firstTrailingBit(vec2<u32>(12628u, 0u))) % vec2<u32>(32u)), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(vec3<f32>(356f, 530f, -701f) * vec3<f32>(-387f, 151f, -1616f))))), Struct_1(~_wgslsmith_div_vec3_i32(var_0.b.a, u_input.a), ~0i, min(_wgslsmith_mult_u32(var_0.e.x, 4294967295u), min(27260u, 101318u)))), var_0.c, ~var_0.b.b | var_0.d, _wgslsmith_div_vec3_u32(var_0.e, vec3<u32>(var_0.e.x >> (72405u % 32u), ~abs(66924u), var_0.e.x)));
                break;
            }
            default: {
            }
        }
        if (select(!any(!select(vec3<bool>(var_0.c, true, var_0.c), vec3<bool>(var_0.c, false, true), vec3<bool>(true, true, true))), false && (~1u <= (var_0.a.x | var_0.b.c)), !(((var_0.b.a.x | u_input.a.x) >= _wgslsmith_add_i32(23217i, u_input.a.x)) & true))) {
            var var_1 = _wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_f_op_vec2_f32(-vec2<f32>(1f, 1f))));
            var var_2 = func_5();
            var var_3 = var_1.x;
            var var_4 = var_0.b;
        }
        if (false) {
            break;
        }
    }
    let x = u_input.a;
    s_output = StorageBuffer(vec3<i32>(-1i) * -var_0.b.a, _wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(-1470f, -1000f) + vec2<f32>(-2974f, 380f))))));
}

`;