export const input = [142,210,157,177,162,138,78,196,66,156,33,24,170,164,147,192,132,142,155,187,85,188,115,232,238,206,64,127,191,32,221,123,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [142,210,157,177,162,138,78,196,66,156,33,24,170,164,147,192,132,142,155,187,85,188,115,232,238,206,64,127,191,32,221,123,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[142,210,157,177,162,138,78,196,66,156,33,24,170,164,147,192,132,142,155,187,85,188,115,232,238,206,64,127,191,32,221,123]}
// Seed: 1173074980223423525

struct Struct_1 {
    a: f32,
    b: bool,
    c: i32,
    d: vec2<i32>,
    e: i32,
}

struct UniformBuffer {
    a: i32,
    b: vec4<i32>,
}

struct StorageBuffer {
    a: f32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<vec3<u32>, 22> = array<vec3<u32>, 22>(vec3<u32>(62777u, 0u, 90315u), vec3<u32>(34954u, 4294967295u, 34962u), vec3<u32>(0u, 59096u, 96773u), vec3<u32>(1u, 4294967295u, 87942u), vec3<u32>(0u, 26831u, 38079u), vec3<u32>(992u, 6439u, 1u), vec3<u32>(1u, 0u, 13225u), vec3<u32>(1u, 25605u, 50767u), vec3<u32>(4294967295u, 13397u, 0u), vec3<u32>(14656u, 92289u, 16526u), vec3<u32>(0u, 4294967295u, 0u), vec3<u32>(1u, 1u, 4294967295u), vec3<u32>(1u, 70420u, 46516u), vec3<u32>(0u, 1u, 27356u), vec3<u32>(4294967295u, 4294967295u, 4294967295u), vec3<u32>(30250u, 1u, 0u), vec3<u32>(4294967295u, 1u, 1u), vec3<u32>(51929u, 1u, 4294967295u), vec3<u32>(0u, 42399u, 84890u), vec3<u32>(21820u, 16175u, 25847u), vec3<u32>(0u, 1u, 10667u), vec3<u32>(22515u, 15239u, 0u));

var<private> global1: array<i32, 11>;

var<private> LOOP_COUNTERS: array<u32, 24>;

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn func_6(arg_0: vec3<bool>, arg_1: u32, arg_2: bool) -> i32 {
    switch (_wgslsmith_dot_vec3_i32(-_wgslsmith_mod_vec3_i32(_wgslsmith_mod_vec3_i32(min(u_input.b.zyw, u_input.b.zxz), ~u_input.b.xxz), abs(u_input.b.ywy)), u_input.b.ywx)) {
        case -1i: {
            global1 = array<i32, 11>();
            for (var var_0 = 28105i; var_0 != -1i; var_0 += 1i) {
                if (LOOP_COUNTERS[0u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
                global1 = array<i32, 11>();
                var_0 = -_wgslsmith_dot_vec3_i32(~(~max(vec3<i32>(-5284i, global1[_wgslsmith_index_u32(38108u, 11u)], 13940i), u_input.b.xyw)), vec3<i32>(_wgslsmith_add_i32(firstLeadingBit(-1i), -18725i), 1i, i32(-2147483648)));
                continue;
            }
            var var_0 = vec2<u32>(0u, _wgslsmith_mod_u32(~_wgslsmith_mult_u32(~arg_1, 0u), ~(_wgslsmith_dot_vec3_u32(global0[_wgslsmith_index_u32(arg_1, 22u)], global0[_wgslsmith_index_u32(arg_1, 22u)]) ^ _wgslsmith_mult_u32(arg_1, 4294967295u))));
        }
        case i32(-2147483648): {
        }
        case -11540i: {
            global1 = array<i32, 11>();
        }
        case 2147483647i: {
            if (false) {
                let var_0 = _wgslsmith_div_vec2_u32(~vec2<u32>(~_wgslsmith_dot_vec4_u32(vec4<u32>(arg_1, arg_1, 45299u, 21913u), vec4<u32>(arg_1, arg_1, arg_1, arg_1)), 35736u), _wgslsmith_clamp_vec2_u32(_wgslsmith_add_vec2_u32(abs(vec2<u32>(25496u, arg_1)) << (firstLeadingBit(vec2<u32>(4294967295u, arg_1)) % vec2<u32>(32u)), abs(max(vec2<u32>(4294967295u, arg_1), vec2<u32>(arg_1, arg_1)))), abs(min(_wgslsmith_mult_vec2_u32(vec2<u32>(1u, 38872u), vec2<u32>(54948u, 33128u)), _wgslsmith_mult_vec2_u32(vec2<u32>(arg_1, 6897u), vec2<u32>(arg_1, arg_1)))), vec2<u32>(24910u | (arg_1 & 5676u), arg_1)));
                var var_1 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(_wgslsmith_div_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(421f * -479f), _wgslsmith_div_f32(1139f, -1928f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(193f + 1412f) + 330f)), -222f, !any(select(arg_0, vec3<bool>(arg_0.x, true, arg_2), false)))) + _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-608f)))))));
                var_1 = -1467f;
                let var_2 = vec4<f32>(1f, _wgslsmith_div_f32(_wgslsmith_f_op_f32(floor(1f)), _wgslsmith_f_op_f32(-174f)), _wgslsmith_f_op_f32(-625f - _wgslsmith_f_op_f32(-431f * _wgslsmith_f_op_f32(round(-1010f)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-119f)))));
                let var_3 = _wgslsmith_f_op_f32(var_2.x * _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_2.x)) + _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(var_2.x * var_2.x)))))));
            }
            let var_0 = Struct_1(-195f, true, u_input.b.x, ~(-max(vec2<i32>(global1[_wgslsmith_index_u32(11041u, 11u)], global1[_wgslsmith_index_u32(arg_1, 11u)]), -u_input.b.zw)), abs(_wgslsmith_mod_i32(global1[_wgslsmith_index_u32(~_wgslsmith_clamp_u32(10615u, arg_1, 1u), 11u)], global1[_wgslsmith_index_u32(_wgslsmith_sub_u32(~0u, 22965u), 11u)])));
            return 21857i | firstTrailingBit(var_0.d.x);
        }
        default: {
            if (any(arg_0)) {
            }
            for (var var_0 = i32(-2147483648); ; ) {
                if (LOOP_COUNTERS[1u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
                var_0 = _wgslsmith_div_i32(global1[_wgslsmith_index_u32(arg_1, 11u)], _wgslsmith_mod_i32(_wgslsmith_dot_vec4_i32(abs(vec4<i32>(global1[_wgslsmith_index_u32(16535u, 11u)], 0i, -26780i, i32(-2147483648))), vec4<i32>(-20132i, global1[_wgslsmith_index_u32(0u, 11u)], u_input.a, u_input.a)), ~max(30599i, -7337i)) ^ firstTrailingBit(abs(-u_input.a)));
                continue;
            }
            for (; -4550i == ~(-u_input.a); ) {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
                let var_0 = Struct_1(_wgslsmith_f_op_f32(select(-2787f, _wgslsmith_f_op_f32(floor(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-125f - -1888f), _wgslsmith_f_op_f32(f32(-1f) * -703f)))), any(vec4<bool>(all(arg_0.zz), true, false, arg_2)))), true, 1i >> ((_wgslsmith_clamp_u32(abs(1u), max(arg_1, 40617u), ~68853u) << (~(~4294967295u) % 32u)) % 32u), vec2<i32>(13078i ^ _wgslsmith_add_i32(_wgslsmith_div_i32(2147483647i, u_input.b.x), global1[_wgslsmith_index_u32(~68076u, 11u)]), u_input.b.x), -firstTrailingBit(-global1[_wgslsmith_index_u32(0u, 11u)]));
                let var_1 = vec3<u32>(arg_1, arg_1, min(arg_1, countOneBits(_wgslsmith_dot_vec2_u32(vec2<u32>(arg_1, arg_1), vec2<u32>(41401u, 4294967295u)))) & ~arg_1);
                var var_2 = var_0;
                continue;
            }
            global0 = array<vec3<u32>, 22>();
            var var_0 = 4294967295u;
        }
    }
    global1 = array<i32, 11>();
    for (var var_0 = 72980i; var_0 > -1i; var_0 = _wgslsmith_mod_i32(global1[_wgslsmith_index_u32(arg_1, 11u)], _wgslsmith_mult_i32(~max(global1[_wgslsmith_index_u32(37516u, 11u)], -16441i), 0i))) {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
    }
    for (var var_0 = 0i; var_0 != 0i; var_0 += 1i) {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
    }
    var var_0 = _wgslsmith_div_vec4_u32(_wgslsmith_div_vec4_u32(vec4<u32>(arg_1, arg_1, _wgslsmith_dot_vec3_u32(vec3<u32>(0u, arg_1, arg_1), ~vec3<u32>(arg_1, 82405u, 4294967295u)), (arg_1 | arg_1) & ~3527u), ~(~(~vec4<u32>(arg_1, arg_1, 45084u, arg_1)))), ~firstLeadingBit(reverseBits(~vec4<u32>(26400u, arg_1, arg_1, arg_1))));
    return _wgslsmith_clamp_i32(reverseBits(0i) ^ u_input.a, -54655i, global1[_wgslsmith_index_u32(~_wgslsmith_div_u32(arg_1, var_0.x), 11u)] | u_input.b.x) << (1u % 32u);
}

fn func_5(arg_0: i32) -> vec2<i32> {
    switch (1i) {
        case -25030i: {
        }
        case -38369i: {
            for (var var_0 = abs(_wgslsmith_mod_i32(global1[_wgslsmith_index_u32(4294967295u, 11u)] >> (13103u % 32u), 1i)); !(0u > _wgslsmith_mod_u32(_wgslsmith_clamp_u32(4294967295u, 0u, 4294967295u), _wgslsmith_div_u32(4294967295u, 1u))) & any(!vec2<bool>(true, any(vec4<bool>(false, false, true, true)))); var_0 -= 1i) {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                let var_1 = Struct_1(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(floor(-919f)))), any(!vec2<bool>(all(vec2<bool>(true, false)), any(vec4<bool>(false, false, false, true)))), 12907i, -(vec2<i32>(abs(i32(-2147483648)), ~arg_0) << (_wgslsmith_mod_vec2_u32(vec2<u32>(1u, 1u), vec2<u32>(1u, 1u)) % vec2<u32>(32u))), u_input.b.x);
            }
            global0 = array<vec3<u32>, 22>();
            global0 = array<vec3<u32>, 22>();
            var var_0 = vec2<bool>(true, ~1i < (u_input.b.x ^ firstLeadingBit(-u_input.b.x)));
        }
        default: {
        }
    }
    for (var var_0 = -1i; var_0 <= 10669i; var_0 -= 1i) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        loop {
            if (LOOP_COUNTERS[7u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
            let var_1 = ~(~(~(~(~4294967295u))));
            var_0 = ~firstLeadingBit(_wgslsmith_add_i32(-31888i, 5807i) >> (~var_1 % 32u));
            var var_2 = Struct_1(987f, true, 0i, vec2<i32>(~(~(-global1[_wgslsmith_index_u32(37000u, 11u)])), 1i), global1[_wgslsmith_index_u32(66153u, 11u)]);
            var var_3 = Struct_1(var_2.a, var_2.b, _wgslsmith_dot_vec3_i32(vec3<i32>(-_wgslsmith_clamp_i32(global1[_wgslsmith_index_u32(4294967295u, 11u)], 15012i, var_2.e), -10600i, 1i), vec3<i32>(select(func_6(vec3<bool>(var_2.b, false, true), 0u, var_2.b), var_2.e, var_2.b), u_input.a, countOneBits(global1[_wgslsmith_index_u32(11727u | var_1, 11u)]))), u_input.b.xx, arg_0);
            global1 = array<i32, 11>();
        }
        var var_1 = !select(!select(vec3<bool>(true, false, false), vec3<bool>(true, true, true), vec3<bool>(true, true, true)), vec3<bool>(true, any(vec4<bool>(true, true, true, true)), true), select(select(vec3<bool>(false, true, true), vec3<bool>(true, true, true), vec3<bool>(true, false, true)), vec3<bool>(true, true, true), true));
        var var_2 = Struct_1(-207f, any(select(vec3<bool>(true, true & var_1.x, var_1.x), !select(vec3<bool>(false, var_1.x, var_1.x), vec3<bool>(false, var_1.x, false), false), true)), 2147483647i, ~vec2<i32>(_wgslsmith_dot_vec3_i32(countOneBits(vec3<i32>(u_input.a, -9453i, u_input.a)), _wgslsmith_mod_vec3_i32(vec3<i32>(arg_0, global1[_wgslsmith_index_u32(1u, 11u)], -1i), u_input.b.xyy)), 1i & global1[_wgslsmith_index_u32(_wgslsmith_dot_vec3_u32(global0[_wgslsmith_index_u32(29415u, 22u)], global0[_wgslsmith_index_u32(9828u, 22u)]), 11u)]), -51200i);
        var_0 = u_input.a | -reverseBits(arg_0);
        var_2 = Struct_1(605f, var_2.b || all(vec3<bool>(true, arg_0 > i32(-2147483648), false)), func_6(vec3<bool>(false, var_1.x, all(var_1.yz)), _wgslsmith_dot_vec3_u32(_wgslsmith_add_vec3_u32(_wgslsmith_sub_vec3_u32(vec3<u32>(0u, 4294967295u, 19262u), global0[_wgslsmith_index_u32(1u, 22u)]), _wgslsmith_mult_vec3_u32(vec3<u32>(4294967295u, 11353u, 12350u), global0[_wgslsmith_index_u32(64958u, 22u)])), vec3<u32>(84432u, 1u, 1u)), all(!select(vec2<bool>(true, var_2.b), vec2<bool>(var_1.x, var_1.x), vec2<bool>(true, var_1.x)))), firstLeadingBit(~(~vec2<i32>(var_2.c, -26434i))) ^ _wgslsmith_mult_vec2_i32(vec2<i32>(min(-3570i, 0i), 7700i), _wgslsmith_clamp_vec2_i32(abs(var_2.d), select(vec2<i32>(i32(-2147483648), -33845i), var_2.d, var_1.zz), var_2.d)), var_2.d.x);
    }
    var var_0 = Struct_1(570f, any(select(vec3<bool>(true, all(vec4<bool>(false, true, true, false)), true), select(select(vec3<bool>(true, false, false), vec3<bool>(false, true, false), vec3<bool>(false, false, true)), vec3<bool>(true, false, false), true), false)), min(global1[_wgslsmith_index_u32(_wgslsmith_div_u32(0u, ~_wgslsmith_dot_vec3_u32(global0[_wgslsmith_index_u32(1u, 22u)], vec3<u32>(38724u, 63042u, 0u))), 11u)], arg_0), ~select(_wgslsmith_clamp_vec2_i32(~vec2<i32>(2147483647i, arg_0), vec2<i32>(arg_0, 1i), reverseBits(vec2<i32>(-1i, -1i))), _wgslsmith_mod_vec2_i32(-vec2<i32>(arg_0, -1i), u_input.b.yx), countOneBits(52033i) >= -u_input.a), 2147483647i);
    let var_1 = var_0.a;
    switch (i32(-2147483648)) {
        case 0i: {
            for (; ; ) {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
            }
            switch (~(-24168i)) {
                case -3732i: {
                    var_0 = Struct_1(_wgslsmith_f_op_f32(abs(var_0.a)), reverseBits(firstLeadingBit(_wgslsmith_dot_vec2_i32(u_input.b.ww, var_0.d))) <= -1i, abs(-25478i), var_0.d, func_6(select(select(!vec3<bool>(var_0.b, false, true), select(vec3<bool>(var_0.b, var_0.b, true), vec3<bool>(var_0.b, var_0.b, false), true), var_0.b), !select(vec3<bool>(var_0.b, true, var_0.b), vec3<bool>(var_0.b, var_0.b, false), vec3<bool>(false, var_0.b, var_0.b)), true), _wgslsmith_clamp_u32(~(~1u), ~23365u, max(4066u, ~70738u)), !var_0.b));
                }
                default: {
                    var var_2 = vec2<u32>(~_wgslsmith_mult_u32(_wgslsmith_mod_u32(abs(1u), 31335u), abs(_wgslsmith_sub_u32(7110u, 0u))), ~countOneBits(~1u));
                    global0 = array<vec3<u32>, 22>();
                    let var_3 = _wgslsmith_clamp_vec4_i32(-abs(_wgslsmith_mult_vec4_i32(_wgslsmith_mult_vec4_i32(u_input.b, vec4<i32>(var_0.c, u_input.b.x, var_0.c, u_input.b.x)), u_input.b)), vec4<i32>(global1[_wgslsmith_index_u32(var_2.x, 11u)], _wgslsmith_clamp_i32(var_0.e << (abs(1u) % 32u), global1[_wgslsmith_index_u32(0u, 11u)], -22122i), _wgslsmith_add_i32(1i, -abs(1i)), ~(~_wgslsmith_dot_vec3_i32(u_input.b.zzw, u_input.b.wyz))), vec4<i32>(reverseBits(0i), ~(i32(-2147483648)), ~global1[_wgslsmith_index_u32(select(_wgslsmith_clamp_u32(0u, var_2.x, 10264u), ~var_2.x, var_0.a < -700f), 11u)], var_0.d.x));
                }
            }
            var var_2 = u_input.b;
            let var_3 = Struct_1(-1774f, all(!(!vec2<bool>(true, var_0.b))), var_0.c, max(_wgslsmith_sub_vec2_i32(var_2.xw, vec2<i32>(_wgslsmith_mod_i32(i32(-2147483648), arg_0), ~var_2.x)), (_wgslsmith_sub_vec2_i32(vec2<i32>(-1i, -8508i), vec2<i32>(var_0.d.x, u_input.a)) | ~u_input.b.wx) << (vec2<u32>(4294967295u, ~4294967295u) % vec2<u32>(32u))), global1[_wgslsmith_index_u32(~(~_wgslsmith_add_u32(115875u, 20111u) ^ ~_wgslsmith_dot_vec3_u32(vec3<u32>(0u, 45676u, 7272u), global0[_wgslsmith_index_u32(0u, 22u)])), 11u)]);
        }
        case 106862i: {
            var var_2 = Struct_1(_wgslsmith_f_op_f32(f32(-1f) * -1991f), any(select(vec2<bool>(true, true), vec2<bool>(any(vec2<bool>(var_0.b, false)), var_0.b), any(vec2<bool>(true, true)))), u_input.a, min(var_0.d, -vec2<i32>(~(-8139i), i32(-1i) * -1i)), _wgslsmith_dot_vec2_i32(_wgslsmith_mod_vec2_i32(vec2<i32>(i32(-2147483648), var_0.e), vec2<i32>(i32(-2147483648), global1[_wgslsmith_index_u32(1u, 11u)])), -u_input.b.yw) >> (~4294967295u % 32u));
            let var_3 = vec4<u32>(10191u, ~_wgslsmith_sub_u32(_wgslsmith_add_u32(4294967295u, abs(0u)), reverseBits(40886u)), _wgslsmith_dot_vec4_u32(vec4<u32>(1u, ~0u, ~0u, _wgslsmith_dot_vec3_u32(countOneBits(vec3<u32>(4294967295u, 13221u, 1u)), vec3<u32>(40727u, 32547u, 4294967295u))), vec4<u32>(firstTrailingBit(~0u), 1u, ~(~0u), 0u)), ~4294967295u);
            let var_4 = -vec2<i32>(reverseBits(~u_input.a), i32(-2147483648));
        }
        case -1i: {
            if (true) {
                var_0 = Struct_1(_wgslsmith_f_op_f32(var_0.a + _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_0.a))))), _wgslsmith_dot_vec2_u32(select(vec2<u32>(1u, 1u), vec2<u32>(1u, 1u), !var_0.b), ~_wgslsmith_mult_vec2_u32(vec2<u32>(0u, 9836u), vec2<u32>(0u, 107866u))) == ~0u, 0i, reverseBits(~vec2<i32>(_wgslsmith_dot_vec2_i32(var_0.d, u_input.b.yz), global1[_wgslsmith_index_u32(select(0u, 70930u, var_0.b), 11u)])), var_0.d.x);
                var_0 = Struct_1(var_0.a, var_0.b, -36853i, u_input.b.yz, -_wgslsmith_mult_i32(-6428i, var_0.c));
            }
        }
        default: {
            global1 = array<i32, 11>();
        }
    }
    return min(var_0.d, abs(u_input.b.ww)) ^ (~var_0.d | -vec2<i32>(i32(-1i) * i32(-2147483648), ~1i));
}

fn func_7(arg_0: f32, arg_1: vec2<i32>) -> Struct_1 {
    global0 = array<vec3<u32>, 22>();
    global0 = array<vec3<u32>, 22>();
    global1 = array<i32, 11>();
    global1 = array<i32, 11>();
    global1 = array<i32, 11>();
    return Struct_1(_wgslsmith_f_op_f32(max(-2063f, arg_0)), true, countOneBits(1i), ~u_input.b.xw, i32(-2147483648));
}

fn func_4(arg_0: Struct_1, arg_1: i32) -> Struct_1 {
    global0 = array<vec3<u32>, 22>();
    global1 = array<i32, 11>();
    if (true) {
        if (arg_0.b) {
            var var_0 = func_7(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(1497f))) + _wgslsmith_f_op_f32(trunc(298f))), min(_wgslsmith_add_vec2_i32(_wgslsmith_mult_vec2_i32(func_5(i32(-2147483648)), max(vec2<i32>(-1i, 0i), u_input.b.zy)), vec2<i32>(1i, _wgslsmith_dot_vec2_i32(vec2<i32>(17512i, 2147483647i), vec2<i32>(-38734i, arg_0.e)))), firstLeadingBit(-func_5(arg_1))));
            global1 = array<i32, 11>();
        }
        global0 = array<vec3<u32>, 22>();
        global1 = array<i32, 11>();
        var var_0 = _wgslsmith_f_op_vec3_f32(select(vec3<f32>(235f, 389f, _wgslsmith_div_f32(-562f, arg_0.a)), _wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(115f, 565f, -1338f) - vec3<f32>(842f, arg_0.a, -1291f)) + _wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(1034f, arg_0.a, 585f)))) + _wgslsmith_div_vec3_f32(_wgslsmith_div_vec3_f32(vec3<f32>(-601f, -1122f, arg_0.a), vec3<f32>(arg_0.a, arg_0.a, arg_0.a)), _wgslsmith_f_op_vec3_f32(-vec3<f32>(-301f, -1902f, arg_0.a)))))), arg_0.b));
        let var_1 = _wgslsmith_f_op_vec2_f32(var_0.yz - _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(exp2(_wgslsmith_f_op_vec2_f32(-vec2<f32>(var_0.x, 619f)))) + _wgslsmith_f_op_vec2_f32(vec2<f32>(-1493f, var_0.x) + _wgslsmith_f_op_vec2_f32(-var_0.zy)))));
    }
    let var_0 = (34125u << (~reverseBits(firstTrailingBit(67285u)) % 32u)) >> (abs(4294967295u) % 32u);
    switch (~u_input.a) {
        default: {
            let var_1 = vec4<u32>(~_wgslsmith_add_u32(firstTrailingBit(var_0 >> (0u % 32u)), _wgslsmith_add_u32(45791u, 1u)), var_0, _wgslsmith_dot_vec2_u32(countOneBits(reverseBits(min(vec2<u32>(0u, 1u), vec2<u32>(var_0, var_0)))), vec2<u32>(var_0, var_0)), abs(var_0));
            global1 = array<i32, 11>();
            for (var var_2: i32; arg_0.a >= arg_0.a; var_2 -= 1i) {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
            }
            global0 = array<vec3<u32>, 22>();
            if (arg_0.b) {
                global0 = array<vec3<u32>, 22>();
                global0 = array<vec3<u32>, 22>();
                var var_2 = var_1;
                let var_3 = func_7(arg_0.a, ~arg_0.d);
            }
        }
    }
    return func_7(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_0.a - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(-1217f))))), vec2<i32>(-func_5(-15106i).x ^ -u_input.a, _wgslsmith_div_i32(~(-32694i), -1i)));
}

fn func_8(arg_0: Struct_1, arg_1: vec2<i32>, arg_2: i32, arg_3: Struct_1) -> u32 {
    global0 = array<vec3<u32>, 22>();
    var var_0 = arg_3;
    if (!(!var_0.b)) {
        var var_1 = global0[_wgslsmith_index_u32(2496u, 22u)];
        global1 = array<i32, 11>();
    }
    let var_1 = u_input.b.yxy;
    loop {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        loop {
            if (LOOP_COUNTERS[11u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
            continue;
        }
        let var_2 = -countOneBits(~arg_1.x);
        var var_3 = _wgslsmith_mod_i32(var_0.d.x, 2770i);
        let var_4 = func_7(_wgslsmith_f_op_f32(trunc(var_0.a)), -(~(vec2<i32>(-1i) * -vec2<i32>(-9158i, arg_1.x))));
        if (select(arg_0.b, !((262f > arg_0.a) & true) & !(!arg_3.b), !func_7(_wgslsmith_f_op_f32(f32(-1f) * -1092f), countOneBits(arg_1)).b != (all(vec2<bool>(true, true)) | var_4.b))) {
        }
    }
    return _wgslsmith_add_u32(min(abs(_wgslsmith_dot_vec4_u32(firstLeadingBit(vec4<u32>(47134u, 0u, 0u, 1u)), vec4<u32>(78782u, 20814u, 4294967295u, 39627u))), 4294967295u), ~(~1u));
}

fn func_3(arg_0: vec3<f32>, arg_1: vec4<i32>, arg_2: vec4<i32>) -> vec4<bool> {
    switch (-64553i) {
        case 68591i: {
            var var_0 = abs(_wgslsmith_div_u32(_wgslsmith_div_u32(_wgslsmith_sub_u32(countOneBits(4294967295u), 0u), 1u), func_8(Struct_1(-1060f, false, arg_2.x ^ 34748i, _wgslsmith_add_vec2_i32(u_input.b.yy, arg_1.yz), firstLeadingBit(global1[_wgslsmith_index_u32(42810u, 11u)])), u_input.b.wx, ~_wgslsmith_dot_vec4_i32(vec4<i32>(global1[_wgslsmith_index_u32(4294967295u, 11u)], 40254i, global1[_wgslsmith_index_u32(4294967295u, 11u)], u_input.b.x), vec4<i32>(u_input.a, i32(-2147483648), -9002i, arg_1.x)), func_4(Struct_1(-397f, false, 2147483647i, vec2<i32>(arg_2.x, u_input.a), 2147483647i), _wgslsmith_div_i32(-1i, arg_1.x)))));
            for (; ; ) {
                if (LOOP_COUNTERS[12u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
                let var_1 = arg_0.x;
                let var_2 = func_7(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -849f) + _wgslsmith_f_op_f32(-467f)), u_input.b.xz);
                let var_3 = _wgslsmith_dot_vec3_i32(~max(max(-vec3<i32>(arg_1.x, -1950i, arg_1.x), arg_1.yxy), arg_2.xwy), vec3<i32>(~1i, i32(-1i) * -(u_input.b.x >> (111329u % 32u)), _wgslsmith_sub_i32(0i, func_7(var_2.a, vec2<i32>(2147483647i, 16602i)).c >> (32914u % 32u))));
            }
            switch (arg_1.x) {
                default: {
                }
            }
            global0 = array<vec3<u32>, 22>();
        }
        default: {
            for (var var_0 = -14439i; var_0 != 46268i; global0 = array<vec3<u32>, 22>()) {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                global1 = array<i32, 11>();
                let var_1 = Struct_1(-489f, !(true & all(vec3<bool>(true, true, true))), func_4(Struct_1(_wgslsmith_f_op_f32(step(-1308f, 568f)), any(select(vec4<bool>(false, false, false, false), vec4<bool>(true, false, true, true), true)), arg_1.x, u_input.b.yx | -vec2<i32>(arg_1.x, arg_2.x), _wgslsmith_sub_i32(25070i, -22230i)), -17956i).c, func_4(func_7(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1123f - 825f)), vec2<i32>(arg_1.x, 1i)), _wgslsmith_mult_i32(countOneBits(arg_2.x ^ arg_2.x), -6228i)).d, 43302i);
                var var_2 = _wgslsmith_sub_vec4_u32(abs(vec4<u32>(1u, 1u, 1u, 1u)), vec4<u32>(~firstTrailingBit(~68898u), 83344u, 22710u, 1u));
                var var_3 = true;
            }
            loop {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                var var_0 = Struct_1(423f, any(select(vec3<bool>(true, true, true), vec3<bool>(true, any(vec4<bool>(false, true, false, true)), any(vec3<bool>(false, true, false))), select(select(vec3<bool>(false, true, false), vec3<bool>(true, true, false), true), select(vec3<bool>(false, false, false), vec3<bool>(false, false, true), false), true))), func_5(~(~global1[_wgslsmith_index_u32(2412u, 11u)]) & countOneBits(arg_2.x)).x, vec2<i32>(func_6(select(vec3<bool>(true, false, true), select(vec3<bool>(false, true, true), vec3<bool>(true, true, false), false), vec3<bool>(false, false, false)), 4294967295u, false), _wgslsmith_mult_i32(0i, _wgslsmith_div_i32(i32(-2147483648), 2147483647i))), 2147483647i);
                continue;
            }
            for (var var_0: i32; (arg_0.x > _wgslsmith_f_op_f32(f32(-1f) * -355f)) & all(vec4<bool>(false, true, _wgslsmith_f_op_f32(min(arg_0.x, -527f)) > arg_0.x, false)); var_0 -= 1i) {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
                let var_1 = any(!(!vec4<bool>(true, all(vec4<bool>(true, true, true, true)), any(vec2<bool>(true, true)), false)));
                var var_2 = func_7(-1089f, arg_1.zw);
            }
        }
    }
    var var_0 = func_8(Struct_1(arg_0.x, any(vec2<bool>(true, true)), 1i, vec2<i32>(~global1[_wgslsmith_index_u32(1u, 11u)], 1i), ~arg_1.x), _wgslsmith_sub_vec2_i32(vec2<i32>(1i, 1i), func_4(Struct_1(arg_0.x, true, global1[_wgslsmith_index_u32(71587u, 11u)], vec2<i32>(-50651i, global1[_wgslsmith_index_u32(8373u, 11u)]), arg_1.x), i32(-2147483648)).d), 1i | _wgslsmith_dot_vec2_i32(~arg_2.yy, vec2<i32>(0i, i32(-2147483648))), Struct_1(_wgslsmith_div_f32(_wgslsmith_f_op_f32(max(-1000f, arg_0.x)), arg_0.x), false, arg_2.x, vec2<i32>(~arg_2.x, 56591i), ~(-15936i) & arg_2.x)) & select(max(1u, 83027u), firstTrailingBit(func_8(Struct_1(1157f, false, -7079i, arg_1.zx, -15318i), vec2<i32>(34125i, arg_2.x), global1[_wgslsmith_index_u32(~1u, 11u)], Struct_1(arg_0.x, false, arg_1.x, vec2<i32>(arg_1.x, 2147483647i), 1i))), false);
    var var_1 = _wgslsmith_f_op_vec3_f32(-vec3<f32>(205f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(arg_0.x, arg_0.x)) + _wgslsmith_f_op_f32(-732f)), _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-arg_0.x)))));
    loop {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        let var_2 = func_4(func_7(var_1.x, arg_1.ww), -1i).b;
        let var_3 = Struct_1(arg_0.x, true, countOneBits(arg_2.x), u_input.b.zw, ~_wgslsmith_sub_i32(i32(-1i) * -4601i, (61269i & arg_2.x) & _wgslsmith_sub_i32(u_input.a, 14719i)));
        global0 = array<vec3<u32>, 22>();
        for (var var_4 = -5253i; ; var_4 -= 1i) {
            if (LOOP_COUNTERS[17u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
            var_4 = 1i;
            break;
        }
    }
    var var_2 = reverseBits(1u);
    return select(vec4<bool>(true, true, true, true), !vec4<bool>(var_1.x < _wgslsmith_f_op_f32(arg_0.x * -705f), (arg_0.x >= -296f) | true, true, false), any(!select(select(vec4<bool>(false, false, true, true), vec4<bool>(true, false, false, true), false), select(vec4<bool>(true, true, false, false), vec4<bool>(false, true, false, true), vec4<bool>(true, false, false, false)), true)));
}

fn func_2() -> i32 {
    let var_0 = select(!select(vec4<bool>(true, true, true, true), vec4<bool>(true, false, true, true), select(vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true), select(vec4<bool>(false, false, true, false), vec4<bool>(true, false, false, true), vec4<bool>(true, false, false, false)))), select(!func_3(_wgslsmith_f_op_vec3_f32(vec3<f32>(607f, -943f, -591f) * vec3<f32>(595f, 240f, 1000f)), -vec4<i32>(u_input.a, global1[_wgslsmith_index_u32(6632u, 11u)], -22549i, global1[_wgslsmith_index_u32(0u, 11u)]), -vec4<i32>(24629i, 1i, global1[_wgslsmith_index_u32(30134u, 11u)], 0i)), vec4<bool>(true, true, true, true), !vec4<bool>(true, false, any(vec3<bool>(true, false, true)), true)), true | (any(vec3<bool>(true, true, true)) | true));
    let var_1 = u_input.b.xww;
    var var_2 = func_4(Struct_1(-1320f, !(!var_0.x) & var_0.x, -(36941i ^ u_input.b.x), -var_1.xy, ~(i32(-2147483648))), var_1.x);
    global1 = array<i32, 11>();
    global1 = array<i32, 11>();
    return -10126i;
}

fn func_1() -> f32 {
    let var_0 = _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -482f) + _wgslsmith_f_op_f32(floor(-1673f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-193f * -101f) + _wgslsmith_f_op_f32(-1421f - -531f)), _wgslsmith_f_op_f32(abs(-224f)))), _wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(416f, 550f, 1025f))))), _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(max(vec3<f32>(259f, 782f, 1404f), _wgslsmith_f_op_vec3_f32(-vec3<f32>(1901f, 517f, 199f)))), vec3<f32>(1f, 1f, 1f), vec3<bool>(true, true, true))))), true | ((all(vec3<bool>(false, false, false)) | true) || true)));
    var var_1 = vec3<u32>(0u, ~1u, 1u);
    var var_2 = Struct_1(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(-783f)) + _wgslsmith_f_op_f32(f32(-1f) * -110f)), false, u_input.b.x, vec2<i32>(_wgslsmith_add_i32(~func_2(), func_2()), u_input.a), firstTrailingBit(_wgslsmith_div_i32(func_2(), -global1[_wgslsmith_index_u32(var_1.x, 11u)]) & reverseBits(u_input.a | -38624i)));
    global1 = array<i32, 11>();
    var var_3 = i32(-2147483648);
    return _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(var_2.a * -434f)))));
}

fn func_9(arg_0: f32, arg_1: vec2<f32>, arg_2: bool) -> i32 {
    let var_0 = max(vec3<i32>(_wgslsmith_sub_i32(0i, u_input.b.x), ~global1[_wgslsmith_index_u32(0u, 11u)], ~_wgslsmith_add_i32(u_input.a, 2147483647i)), vec3<i32>(select(i32(-1i) * -1i, ~9121i, any(vec2<bool>(true, arg_2))) & 0i, firstLeadingBit(0i), 0i));
    var var_1 = func_4(Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_1.x)), !(arg_0 > -403f), ~max(i32(-2147483648), -41868i), -vec2<i32>(var_0.x, global1[_wgslsmith_index_u32(2996u, 11u)]), u_input.a), _wgslsmith_clamp_i32(select(_wgslsmith_div_i32(var_0.x, 2147483647i), var_0.x, !arg_2), _wgslsmith_add_i32(_wgslsmith_dot_vec2_i32(var_0.yx, u_input.b.zw), 6778i), u_input.b.x)).a >= arg_0;
    loop {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        var_1 = true;
        for (var var_2 = -56592i; ; var_2 -= 1i) {
            if (LOOP_COUNTERS[19u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
            var var_3 = vec4<f32>(-384f, 1318f, _wgslsmith_f_op_f32(-477f + _wgslsmith_f_op_f32(exp2(_wgslsmith_div_f32(_wgslsmith_f_op_f32(max(-311f, arg_1.x)), arg_0)))), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(arg_1.x * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-694f) * arg_0)), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(func_7(arg_0, vec2<i32>(var_0.x, global1[_wgslsmith_index_u32(0u, 11u)])).a, _wgslsmith_f_op_f32(arg_1.x + arg_0))))));
        }
    }
    global1 = array<i32, 11>();
    switch (_wgslsmith_add_i32(func_4(func_7(arg_0, -vec2<i32>(global1[_wgslsmith_index_u32(24660u, 11u)], global1[_wgslsmith_index_u32(1u, 11u)])), 14279i ^ var_0.x).d.x, u_input.a)) {
        case -5893i: {
            var_1 = true;
            switch (-(~(~(-var_0.x))) | _wgslsmith_clamp_i32(func_2() | 1i, global1[_wgslsmith_index_u32(_wgslsmith_clamp_u32(1u, ~_wgslsmith_mult_u32(1u, 16868u), 1u), 11u)], ~(-_wgslsmith_dot_vec4_i32(u_input.b, vec4<i32>(-23561i, u_input.b.x, i32(-2147483648), global1[_wgslsmith_index_u32(1u, 11u)]))))) {
                case 1i: {
                    var var_2 = !select(func_3(vec3<f32>(_wgslsmith_f_op_f32(round(1000f)), _wgslsmith_f_op_f32(arg_0 - arg_1.x), -766f), u_input.b, u_input.b).yyw, !select(vec3<bool>(arg_2, arg_2, false), select(vec3<bool>(arg_2, arg_2, false), vec3<bool>(true, arg_2, false), vec3<bool>(true, arg_2, true)), arg_2 || true), vec3<bool>(!all(vec4<bool>(arg_2, arg_2, true, false)), true, !arg_2));
                    let var_3 = Struct_1(-210f, arg_1.x > 217f, ~_wgslsmith_div_i32(global1[_wgslsmith_index_u32(~78830u, 11u)], -1i), var_0.zz, 3860i);
                    let var_4 = Struct_1(-1390f, true, min(i32(-1i) * -var_0.x, i32(-1i) * -69723i), -var_0.yy, 1i);
                    var var_5 = 1u;
                    let var_6 = !func_3(vec3<f32>(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-886f * 175f), _wgslsmith_f_op_f32(-var_4.a), arg_0 > 1000f)), var_4.a, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(var_4.a)) * _wgslsmith_f_op_f32(-434f))), u_input.b, vec4<i32>(~var_0.x, u_input.b.x ^ -1i, ~func_2(), _wgslsmith_add_i32(-1i & var_3.e, u_input.a & 18236i)));
                }
                default: {
                    let var_2 = Struct_1(_wgslsmith_f_op_f32(floor(-1000f)), select(false, true, false), 83947i, -u_input.b.zx, _wgslsmith_add_i32(~func_5(global1[_wgslsmith_index_u32(firstLeadingBit(4998u), 11u)]).x, u_input.b.x));
                    global1 = array<i32, 11>();
                }
            }
            loop {
                if (LOOP_COUNTERS[20u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
                global1 = array<i32, 11>();
                break;
            }
        }
        case 2147483647i: {
            if (all(!(!select(select(vec4<bool>(false, arg_2, true, false), vec4<bool>(true, arg_2, true, arg_2), arg_2), select(vec4<bool>(arg_2, arg_2, false, arg_2), vec4<bool>(false, true, arg_2, arg_2), arg_2), false)))) {
            }
            loop {
                if (LOOP_COUNTERS[21u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
            }
        }
        case -14112i: {
            for (var var_2 = _wgslsmith_add_i32(var_0.x, -u_input.b.x); _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(arg_1.x))) - arg_0) >= _wgslsmith_div_f32(1776f, arg_1.x); var_1 = !(!arg_2)) {
                if (LOOP_COUNTERS[22u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
                break;
            }
            switch (-10540i) {
                default: {
                    var var_2 = 5179u;
                    var_1 = !arg_2;
                }
            }
            switch (-1i) {
                case -28366i: {
                    let var_2 = !(all(!func_3(vec3<f32>(533f, arg_1.x, 1000f), u_input.b, vec4<i32>(76424i, var_0.x, 22216i, global1[_wgslsmith_index_u32(36899u, 11u)])).zzw) | !(!arg_2 && (arg_1.x > 327f)));
                    var var_3 = func_4(Struct_1(arg_0, func_3(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(arg_1.x, arg_1.x, -344f))), ~abs(vec4<i32>(1429i, 6343i, var_0.x, var_0.x)), ~(-u_input.b)).x, u_input.b.x, max(~vec2<i32>(2147483647i, i32(-2147483648)), select(u_input.b.xz, var_0.yz, vec2<bool>(true, false))) ^ u_input.b.wx, -u_input.b.x), 37925i);
                }
                case 1i: {
                    let var_2 = all(!vec4<bool>(2035f != _wgslsmith_f_op_f32(-arg_0), true, func_3(_wgslsmith_div_vec3_f32(vec3<f32>(1519f, arg_0, arg_0), vec3<f32>(1612f, -129f, -1751f)), vec4<i32>(1i, var_0.x, u_input.b.x, var_0.x), vec4<i32>(u_input.a, 2147483647i, -1025i, u_input.b.x) << (vec4<u32>(44562u, 20389u, 4294967295u, 1u) % vec4<u32>(32u))).x, any(vec2<bool>(true, true))));
                    return min(1888i, ~(-52920i));
                }
                case 34220i: {
                    let var_2 = func_7(_wgslsmith_f_op_f32(round(arg_1.x)), var_0.xz);
                    let var_3 = !func_3(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(ceil(vec3<f32>(arg_1.x, -962f, var_2.a))) - _wgslsmith_f_op_vec3_f32(vec3<f32>(arg_1.x, -1108f, arg_0) * vec3<f32>(arg_0, arg_1.x, 577f))) * _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(arg_1.x, arg_0, 2131f)))), vec4<i32>(max(global1[_wgslsmith_index_u32(4294967295u, 11u)] << (20776u % 32u), _wgslsmith_mult_i32(var_0.x, -1i)), 0i, 2147483647i & (var_0.x & u_input.a), ~57322i), min(-_wgslsmith_clamp_vec4_i32(u_input.b, vec4<i32>(var_0.x, var_2.c, var_2.e, var_2.d.x), vec4<i32>(41381i, 320i, u_input.b.x, var_0.x)), u_input.b)).ww;
                    let var_4 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(trunc(var_2.a)), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(arg_0 - var_2.a))), arg_0, arg_1.x) * _wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(step(var_2.a, arg_0)), 1f, _wgslsmith_div_f32(988f, arg_1.x), _wgslsmith_f_op_f32(-110f + var_2.a)) - _wgslsmith_f_op_vec4_f32(vec4<f32>(207f, -1169f, -477f, 1874f) + _wgslsmith_f_op_vec4_f32(step(vec4<f32>(541f, -407f, var_2.a, arg_1.x), vec4<f32>(592f, -478f, -140f, 1016f)))))));
                    let var_5 = abs(~(~1u));
                    let var_6 = select(select(var_3, var_3, vec2<bool>(select(any(vec2<bool>(true, true)), select(var_2.b, arg_2, arg_2), true), -5162i < firstLeadingBit(var_0.x))), select(!func_3(_wgslsmith_f_op_vec3_f32(select(vec3<f32>(var_2.a, arg_0, var_4.x), vec3<f32>(arg_0, var_2.a, var_2.a), vec3<bool>(var_3.x, true, var_3.x))), u_input.b, u_input.b).xy, vec2<bool>(false, true), var_3), any(select(!(!vec3<bool>(true, var_2.b, false)), vec3<bool>(var_2.b, func_7(arg_0, vec2<i32>(1i, var_0.x)).b, var_3.x), !vec3<bool>(true, var_2.b, var_3.x))));
                }
                default: {
                    var var_2 = min(-max(u_input.b.yxz >> (_wgslsmith_div_vec3_u32(global0[_wgslsmith_index_u32(22738u, 22u)], global0[_wgslsmith_index_u32(4294967295u, 22u)]) % vec3<u32>(32u)), var_0), abs(abs(vec3<i32>(~global1[_wgslsmith_index_u32(1u, 11u)], 0i, ~0i))));
                    var var_3 = vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-782f) * arg_1.x) - _wgslsmith_f_op_f32(func_1()))), -177f, arg_1.x, _wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_0 + _wgslsmith_f_op_f32(-arg_1.x)) - _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(arg_1.x + -1000f), _wgslsmith_f_op_f32(sign(arg_1.x))))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_0) - _wgslsmith_f_op_f32(1f + -1000f))));
                }
            }
            var var_2 = ~vec4<u32>(~(_wgslsmith_clamp_u32(0u, 1u, 47554u) >> (~45740u % 32u)), 14944u, 44519u, ~firstLeadingBit(_wgslsmith_mod_u32(16328u, 59571u)));
            var var_3 = func_4(Struct_1(_wgslsmith_f_op_f32(round(1031f)), any(vec3<bool>(true, !arg_2, select(arg_2, arg_2, arg_2))), func_6(!vec3<bool>(false, arg_2, false), max(var_2.x, 24167u), true), ~vec2<i32>(var_0.x << (1u % 32u), countOneBits(8739i)), -_wgslsmith_mult_i32(var_0.x, ~var_0.x)), u_input.b.x);
        }
        case -1i: {
            loop {
                if (LOOP_COUNTERS[23u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
                break;
            }
        }
        default: {
        }
    }
    return i32(-2147483648);
}

@compute
@workgroup_size(1)
fn main() {
    global1 = array<i32, 11>();
    switch (func_9(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_1())) + 1654f)), _wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(trunc(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(-1149f, -497f) + vec2<f32>(1337f, -146f)) + _wgslsmith_f_op_vec2_f32(-vec2<f32>(-1655f, -872f))))), _wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(floor(-1057f)), _wgslsmith_f_op_f32(-2076f))), select(vec2<bool>(false, true), vec2<bool>(true, func_4(Struct_1(-1343f, true, -6304i, vec2<i32>(1i, global1[_wgslsmith_index_u32(39579u, 11u)]), u_input.b.x), global1[_wgslsmith_index_u32(57642u, 11u)]).b), true))), !select(all(select(vec4<bool>(false, false, true, true), vec4<bool>(false, false, true, false), true)), true, true))) {
        case -35419i: {
            if (false) {
                var var_0 = Struct_1(-2550f, true, -(~(-1i)), ~vec2<i32>(~firstLeadingBit(global1[_wgslsmith_index_u32(21174u, 11u)]), ~7628i), u_input.a | _wgslsmith_mod_i32(-_wgslsmith_sub_i32(u_input.a, 14264i), 1i));
                var_0 = func_7(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-2316f)), ~abs(-_wgslsmith_mod_vec2_i32(var_0.d, u_input.b.wy)));
                let var_1 = vec2<bool>((~u_input.a >> (_wgslsmith_dot_vec4_u32(~vec4<u32>(4294967295u, 10516u, 8734u, 17926u), ~vec4<u32>(0u, 0u, 34495u, 30547u)) % 32u)) > ~global1[_wgslsmith_index_u32(~min(1u, 0u), 11u)], var_0.b | var_0.b);
                global0 = array<vec3<u32>, 22>();
                var var_2 = func_4(func_7(var_0.a, ~u_input.b.wz), var_0.e);
            }
            global0 = array<vec3<u32>, 22>();
            global0 = array<vec3<u32>, 22>();
        }
        case 48014i: {
            switch (i32(-1i) * -29578i) {
                default: {
                    global0 = array<vec3<u32>, 22>();
                    global0 = array<vec3<u32>, 22>();
                    var var_0 = !all(vec4<bool>(true, true, true, true)) || any(vec3<bool>(func_4(Struct_1(-1461f, false, global1[_wgslsmith_index_u32(4294967295u, 11u)], u_input.b.xz, 2147483647i), i32(-1i) * -16198i).b, all(vec2<bool>(true, false)) | any(vec3<bool>(true, true, true)), true));
                    let var_1 = func_4(Struct_1(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-1008f))) * -1000f), true, _wgslsmith_mult_i32(-_wgslsmith_div_i32(global1[_wgslsmith_index_u32(26695u, 11u)], u_input.a), _wgslsmith_dot_vec2_i32(abs(vec2<i32>(2147483647i, -45893i)), _wgslsmith_mod_vec2_i32(u_input.b.wz, vec2<i32>(0i, 28892i)))), -firstLeadingBit(firstTrailingBit(vec2<i32>(u_input.a, u_input.b.x))), -1i), -1i ^ (min(0i, global1[_wgslsmith_index_u32(4294967295u, 11u)] & 2912i) ^ _wgslsmith_add_i32(select(u_input.a, global1[_wgslsmith_index_u32(80470u, 11u)], true), u_input.a)));
                    var var_2 = u_input.b.zyx;
                }
            }
        }
        case 2147483647i: {
            global0 = array<vec3<u32>, 22>();
            let var_0 = func_7(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-610f - 1f)), vec2<i32>(countOneBits(global1[_wgslsmith_index_u32(~0u, 11u)]) << (~4294967295u % 32u), _wgslsmith_mult_i32(func_6(func_3(vec3<f32>(1574f, -211f, -310f), u_input.b, u_input.b).zwy, 42136u, true), global1[_wgslsmith_index_u32(_wgslsmith_dot_vec3_u32(vec3<u32>(26594u, 48755u, 1u), vec3<u32>(1u, 66212u, 8343u)), 11u)] & min(global1[_wgslsmith_index_u32(0u, 11u)], u_input.a))));
            global1 = array<i32, 11>();
            global0 = array<vec3<u32>, 22>();
            global1 = array<i32, 11>();
        }
        default: {
        }
    }
    global0 = array<vec3<u32>, 22>();
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_div_f32(-998f, 255f));
}

`;