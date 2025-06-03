export const input = [79,64,122,2,57,84,213,215,19,82,145,187,112,156,33,113,6,235,252,153,168,233,131,167,227,156,126,62,99,126,134,250,252,218,35,21,17,152,118,163,48,57,75,144,92,167,220,136,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [79,64,122,2,57,84,213,215,19,82,145,187,112,156,33,113,6,235,252,153,168,233,131,167,227,156,126,62,99,126,134,250,252,218,35,21,17,152,118,163,48,57,75,144,92,167,220,136,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[79,64,122,2,57,84,213,215,19,82,145,187,112,156,33,113,6,235,252,153,168,233,131,167,227,156,126,62,99,126,134,250,252,218,35,21,17,152,118,163,48,57,75,144,92,167,220,136]}
// Seed: 10856089146073130488

struct Struct_1 {
    a: vec3<bool>,
    b: vec2<f32>,
    c: u32,
    d: vec4<bool>,
}

struct Struct_2 {
    a: Struct_1,
    b: Struct_1,
    c: bool,
    d: Struct_1,
}

struct Struct_3 {
    a: i32,
    b: u32,
}

struct Struct_4 {
    a: vec3<u32>,
}

struct UniformBuffer {
    a: vec4<i32>,
    b: vec3<u32>,
    c: vec2<u32>,
}

struct StorageBuffer {
    a: vec3<i32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<vec2<f32>, 3> = array<vec2<f32>, 3>(vec2<f32>(-849f, 175f), vec2<f32>(-293f, -594f), vec2<f32>(-631f, 1467f));

var<private> global1: array<i32, 29>;

var<private> global2: Struct_1 = Struct_1(vec3<bool>(true, true, true), vec2<f32>(-691f, -2588f), 0u, vec4<bool>(true, false, false, true));

var<private> global3: array<Struct_1, 22>;

var<private> LOOP_COUNTERS: array<u32, 28>;

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn func_5(arg_0: Struct_3) -> bool {
    var var_0 = Struct_4(vec3<u32>(_wgslsmith_clamp_u32(1u | global2.c, ~4294967295u, u_input.b.x & 1u) >> (_wgslsmith_mod_u32(u_input.c.x, 1u) % 32u), countOneBits(reverseBits(u_input.b.x)) & _wgslsmith_add_u32(0u, ~39725u), 4323u));
    let var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(round(global2.b.x)))))))));
    global3 = array<Struct_1, 22>();
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        continue;
    }
    loop {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        break;
    }
    return all(global2.d.zyy);
}

fn func_6(arg_0: bool, arg_1: bool, arg_2: u32) -> bool {
    global2 = Struct_1(vec3<bool>(global2.a.x, global2.a.x | !all(vec2<bool>(true, false)), func_5(Struct_3(_wgslsmith_dot_vec2_i32(u_input.a.yy, vec2<i32>(666i, 0i)), min(1u, 22854u)))), vec2<f32>(_wgslsmith_f_op_f32(f32(-1f) * -635f), -103f), 41057u, vec4<bool>(true, arg_1, any(!select(global2.a, global2.d.wxw, global2.d.wyy)), !(any(global2.d) & any(global2.a))));
    switch (~global1[_wgslsmith_index_u32(~(global2.c >> (~u_input.c.x % 32u)) & firstLeadingBit(countOneBits(0u)), 29u)]) {
        case 2147483647i: {
            for (var var_0: i32; var_0 == 0i; global0 = array<vec2<f32>, 3>()) {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
                global2 = global3[_wgslsmith_index_u32(11740u, 22u)];
                var var_1 = Struct_1(vec3<bool>(true, false, !all(select(vec2<bool>(arg_0, true), global2.d.ww, vec2<bool>(arg_1, true)))), _wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_div_f32(853f, -661f))), global2.b.x)), 1u << (~(1u ^ arg_2) % 32u), !vec4<bool>(true, true, !global2.a.x, true));
                let var_2 = _wgslsmith_mult_vec4_i32(vec4<i32>(_wgslsmith_sub_i32(global1[_wgslsmith_index_u32(1u, 29u)], -38559i) & (1i << (0u % 32u)), 0i, ~_wgslsmith_add_i32(12839i, 36098i), global1[_wgslsmith_index_u32((u_input.b.x << (arg_2 % 32u)) << (abs(var_1.c) % 32u), 29u)]) >> (vec4<u32>(countOneBits(arg_2), 18938u | abs(u_input.c.x), 40969u, _wgslsmith_dot_vec3_u32(~u_input.b, _wgslsmith_mult_vec3_u32(vec3<u32>(u_input.c.x, 4294967295u, 80734u), vec3<u32>(var_1.c, 14313u, u_input.b.x)))) % vec4<u32>(32u)), _wgslsmith_mod_vec4_i32(_wgslsmith_div_vec4_i32(u_input.a, vec4<i32>(-1i) * -vec4<i32>(u_input.a.x, u_input.a.x, global1[_wgslsmith_index_u32(91889u, 29u)], 14767i)), max(-u_input.a, min(vec4<i32>(1i, u_input.a.x, u_input.a.x, -27512i), -u_input.a))));
            }
            global2 = Struct_1(vec3<bool>(arg_1, true, arg_0), vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(global2.b.x * -885f)) - _wgslsmith_f_op_f32(-720f * global2.b.x)), global2.b.x), _wgslsmith_clamp_u32(abs(_wgslsmith_div_u32(0u, ~9975u)), arg_2, _wgslsmith_div_u32(58168u, ~1u ^ arg_2)), global2.d);
        }
        case -1i: {
            global2 = Struct_1(select(global2.a, vec3<bool>(arg_1, true, false & any(vec4<bool>(global2.d.x, global2.d.x, arg_1, false))), false), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(sign(vec2<f32>(_wgslsmith_f_op_f32(round(global2.b.x)), -696f)))), ~0u, vec4<bool>(global2.a.x, false, any(vec3<bool>(all(global2.a.zz), global2.a.x, true)), true));
            var var_0 = global1[_wgslsmith_index_u32(_wgslsmith_mod_u32(_wgslsmith_dot_vec2_u32(_wgslsmith_sub_vec2_u32(_wgslsmith_clamp_vec2_u32(~vec2<u32>(127046u, arg_2), vec2<u32>(1u, u_input.c.x), ~u_input.b.yy), u_input.b.xy), _wgslsmith_mult_vec2_u32(vec2<u32>(max(global2.c, 0u), global2.c), u_input.b.yx)), ~arg_2), 29u)];
            let var_1 = ~arg_2;
        }
        default: {
            var var_0 = Struct_1(!vec3<bool>(any(vec3<bool>(arg_0, false, arg_0)), false, select(arg_1, global2.a.x, arg_1)), vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(trunc(-174f)), global2.b.x))), -810f), abs(~_wgslsmith_div_u32(global2.c, ~57728u)), !(!select(!global2.d, select(global2.d, vec4<bool>(true, true, true, global2.d.x), global2.d), arg_1)));
            for (var var_1 = -28071i; var_1 >= 17794i; ) {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
                break;
            }
            var var_1 = var_0.c;
        }
    }
    var var_0 = _wgslsmith_f_op_f32(abs(global2.b.x));
    return !arg_1;
}

fn func_4() -> Struct_1 {
    for (var var_0 = 46783i; var_0 == 2147483647i; ) {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        global2 = Struct_1(vec3<bool>(global2.a.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(global2.b.x, global2.b.x)) - _wgslsmith_f_op_f32(f32(-1f) * -1751f)) > 392f, global2.d.x != func_5(Struct_3(global1[_wgslsmith_index_u32(46793u, 29u)], 14766u))), _wgslsmith_f_op_vec2_f32(-global0[_wgslsmith_index_u32(4309u, 3u)]), 1u, select(!(!(!global2.d)), vec4<bool>(func_6(global2.a.x, global2.a.x, u_input.c.x), true, func_5(Struct_3(0i, global2.c)), true), true));
        continue;
    }
    switch (global1[_wgslsmith_index_u32(~u_input.c.x, 29u)] | reverseBits(u_input.a.x)) {
        case 0i: {
            if (!global2.d.x) {
                var var_0 = global2.b;
                var var_1 = Struct_2(Struct_1(select(!select(global2.a, global2.a, global2.a.x), select(select(global2.d.xyx, vec3<bool>(global2.d.x, true, false), true), select(global2.d.zxw, global2.a, global2.d.zwx), vec3<bool>(false, global2.d.x, global2.a.x)), !global2.d.x), vec2<f32>(_wgslsmith_f_op_f32(var_0.x - 184f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global2.b.x) - _wgslsmith_f_op_f32(round(-1378f)))), ~global2.c & ~_wgslsmith_div_u32(2260u, 1u), !(!global2.d)), global3[_wgslsmith_index_u32(~4294967295u, 22u)], any(select(global2.d.zy, vec2<bool>(func_6(global2.d.x, false, 7610u), any(vec3<bool>(global2.a.x, global2.a.x, false))), true)), global3[_wgslsmith_index_u32(53706u, 22u)]);
                let var_2 = i32(-1i) * -(~_wgslsmith_clamp_i32(global1[_wgslsmith_index_u32(max(var_1.b.c, 41716u), 29u)], abs(-1i), _wgslsmith_dot_vec3_i32(u_input.a.wwy, vec3<i32>(global1[_wgslsmith_index_u32(u_input.b.x, 29u)], -1i, i32(-2147483648)))));
                let var_3 = false;
            }
        }
        case 73928i: {
            for (var var_0 = 0i; var_0 != 2147483647i; var_0 += 1i) {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
            }
            if (false & (_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-global2.b.x))) > _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-536f - -100f)))) {
                return global3[_wgslsmith_index_u32((global2.c & 10764u) >> (min(min(firstLeadingBit(~0u), global2.c), _wgslsmith_sub_u32(_wgslsmith_clamp_u32(global2.c, u_input.b.x, max(36501u, 0u)), firstTrailingBit(u_input.c.x) >> (70534u % 32u))) % 32u), 22u)];
            }
            global3 = array<Struct_1, 22>();
            var var_0 = Struct_3(_wgslsmith_clamp_i32(13245i, global1[_wgslsmith_index_u32(0u, 29u)], 121069i), 1u);
        }
        case 22367i: {
            let var_0 = Struct_1(global2.d.zwz, _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(step(global2.b, _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(select(vec2<f32>(241f, global2.b.x), global2.b, global2.d.x)))))), ~firstTrailingBit(22345u), select(!select(global2.d, global2.d, select(vec4<bool>(false, false, global2.d.x, false), vec4<bool>(global2.a.x, global2.a.x, global2.d.x, global2.d.x), true)), !(!vec4<bool>(global2.d.x, true, false, false)), vec4<bool>(_wgslsmith_f_op_f32(step(global2.b.x, -770f)) >= _wgslsmith_f_op_f32(-global2.b.x), !(!global2.a.x), false, true)));
            loop {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                let var_1 = min(vec4<u32>(1u, 1u, _wgslsmith_dot_vec2_u32(vec2<u32>(4294967295u, 1u), u_input.c) | var_0.c, global2.c & global2.c) << (firstLeadingBit(_wgslsmith_clamp_vec4_u32(_wgslsmith_add_vec4_u32(vec4<u32>(6491u, var_0.c, var_0.c, 85527u), vec4<u32>(4294967295u, 1u, var_0.c, global2.c)), _wgslsmith_add_vec4_u32(vec4<u32>(global2.c, u_input.b.x, u_input.b.x, var_0.c), vec4<u32>(99949u, global2.c, 13192u, 4294967295u)), abs(vec4<u32>(global2.c, 4294967295u, var_0.c, 0u)))) % vec4<u32>(32u)), vec4<u32>(abs(~_wgslsmith_dot_vec4_u32(vec4<u32>(0u, global2.c, 78561u, 0u), vec4<u32>(72368u, 82816u, 24374u, u_input.c.x))), global2.c, 1u, ~(var_0.c | ~43251u)));
                let var_2 = Struct_2(Struct_1(global2.d.zwz, var_0.b, var_1.x, !vec4<bool>(true, global2.c < 0u, func_6(true, false, global2.c), !global2.d.x)), var_0, !var_0.d.x, Struct_1(vec3<bool>(true, true, var_0.a.x), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(sign(vec2<f32>(-125f, 355f)))), _wgslsmith_mult_u32(4294967295u, 0u), select(select(global2.d, vec4<bool>(global2.d.x, false, global2.a.x, var_0.d.x), select(vec4<bool>(var_0.d.x, false, var_0.d.x, var_0.d.x), vec4<bool>(global2.d.x, var_0.d.x, global2.d.x, global2.d.x), var_0.d)), !select(vec4<bool>(global2.d.x, var_0.d.x, var_0.d.x, true), var_0.d, global2.d.x), select(func_5(Struct_3(u_input.a.x, var_1.x)), false, var_0.d.x))));
                var var_3 = reverseBits(u_input.a.x) ^ _wgslsmith_clamp_i32(reverseBits(u_input.a.x) & abs(u_input.a.x), ~u_input.a.x, _wgslsmith_mod_i32(_wgslsmith_dot_vec3_i32(vec3<i32>(global1[_wgslsmith_index_u32(var_1.x, 29u)], global1[_wgslsmith_index_u32(79470u, 29u)], global1[_wgslsmith_index_u32(u_input.b.x, 29u)]), reverseBits(vec3<i32>(12974i, u_input.a.x, -28428i))), 2147483647i));
                global2 = Struct_1(!var_0.d.wzy, vec2<f32>(_wgslsmith_f_op_f32(abs(global2.b.x)), _wgslsmith_f_op_f32(-var_0.b.x)), ~var_2.a.c, select(global2.d, var_2.d.d, var_0.d));
                return Struct_1(!(!var_2.a.d.wxw), _wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(ceil(global2.b.x)))), var_0.b.x) + _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(var_0.b.x, var_2.d.b.x)) - _wgslsmith_f_op_vec2_f32(vec2<f32>(145f, global2.b.x) + vec2<f32>(var_2.a.b.x, global2.b.x))))), countOneBits(var_1.x), vec4<bool>(all(vec3<bool>(select(global2.a.x, var_0.d.x, var_2.a.a.x), true, false || var_0.a.x)), select(select(var_2.b.a.x, var_0.a.x, var_0.a.x) & any(var_0.d), false, global2.d.x), global2.d.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(var_2.a.b.x))) <= var_0.b.x));
            }
            global2 = Struct_1(!(!vec3<bool>(false | var_0.a.x, var_0.a.x, func_5(Struct_3(global1[_wgslsmith_index_u32(global2.c, 29u)], u_input.b.x)))), _wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(global2.b.x, -1070f))) + _wgslsmith_f_op_vec2_f32(vec2<f32>(-815f, var_0.b.x) * vec2<f32>(var_0.b.x, 1286f))), _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(global2.b.x, 1459f) - var_0.b)), _wgslsmith_f_op_vec2_f32(-vec2<f32>(-257f, 253f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(var_0.b.x - global2.b.x)) != 1262f)), firstLeadingBit(u_input.c.x), !global2.d);
            for (var var_1 = -56794i; var_1 < -7427i; global2 = var_0) {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                break;
            }
        }
        case 2147483647i: {
            var var_0 = Struct_4(select(firstTrailingBit(countOneBits(select(u_input.b, vec3<u32>(40801u, 44932u, global2.c), true))), vec3<u32>(18857u, 8311u, u_input.c.x), !(!global2.a)));
            var var_1 = Struct_2(Struct_1(global2.d.yyx, vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_div_f32(1851f, global2.b.x) * _wgslsmith_f_op_f32(-global2.b.x)), global2.b.x), min(global2.c, _wgslsmith_add_u32(1u, var_0.a.x)), global2.d), global3[_wgslsmith_index_u32(~(~u_input.b.x), 22u)], func_6(global2.a.x, true, 1u), global3[_wgslsmith_index_u32(~_wgslsmith_dot_vec3_u32(vec3<u32>(_wgslsmith_div_u32(1u, var_0.a.x), u_input.c.x, 36113u), vec3<u32>(_wgslsmith_clamp_u32(1u, u_input.c.x, 0u), global2.c, u_input.c.x)), 22u)]);
            var var_2 = var_1.a;
            var var_3 = ~1u;
        }
        default: {
            global2 = Struct_1(global2.d.xyw, global0[_wgslsmith_index_u32(_wgslsmith_add_u32(reverseBits(~72208u), 21156u << (~(global2.c >> (1u % 32u)) % 32u)), 3u)], u_input.c.x, vec4<bool>(global2.a.x, false, true, true));
            let var_0 = Struct_3(i32(-2147483648), u_input.c.x);
            var var_1 = select(reverseBits(~countOneBits(u_input.b) >> (_wgslsmith_div_vec3_u32(max(vec3<u32>(global2.c, 0u, global2.c), u_input.b), u_input.b) % vec3<u32>(32u))), u_input.b, false);
            if (true) {
                var var_2 = global3[_wgslsmith_index_u32(~(~(_wgslsmith_dot_vec2_u32(~vec2<u32>(global2.c, 1u), ~u_input.c) & var_1.x)), 22u)];
                let var_3 = any(!var_2.d.xy);
                global2 = Struct_1(select(global2.d.wzy, var_2.d.zyw, (~45792u ^ _wgslsmith_div_u32(4294967295u, var_1.x)) > _wgslsmith_mult_u32(_wgslsmith_div_u32(0u, 51619u), _wgslsmith_add_u32(u_input.b.x, 57345u))), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(vec2<f32>(-976f, global2.b.x) + _wgslsmith_f_op_vec2_f32(global2.b - vec2<f32>(var_2.b.x, var_2.b.x))), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(step(vec2<f32>(global2.b.x, -1000f), global2.b)))))), _wgslsmith_dot_vec3_u32(countOneBits(~vec3<u32>(var_1.x, var_2.c, 1u)), ~vec3<u32>(1u, 15706u, _wgslsmith_clamp_u32(0u, global2.c, global2.c))), global2.d);
            }
            switch (-27843i | firstTrailingBit(1i)) {
                case 1i: {
                    global1 = array<i32, 29>();
                    global2 = Struct_1(global2.d.zzx, _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-361f, _wgslsmith_f_op_f32(f32(-1f) * -1211f))) - vec2<f32>(global2.b.x, _wgslsmith_f_op_f32(-global2.b.x))), _wgslsmith_clamp_u32(~(~_wgslsmith_sub_u32(global2.c, 24677u)), ~max(u_input.c.x, _wgslsmith_add_u32(var_0.b, global2.c)), _wgslsmith_dot_vec3_u32(~u_input.b, min(~vec3<u32>(var_0.b, var_1.x, 53914u), _wgslsmith_mod_vec3_u32(u_input.b, vec3<u32>(u_input.c.x, 0u, 17935u))))), !select(global2.d, vec4<bool>(!global2.a.x, global2.a.x, any(vec4<bool>(false, global2.d.x, false, global2.a.x)), true & global2.d.x), vec4<bool>(!global2.a.x, true, !global2.a.x, global2.d.x)));
                    global1 = array<i32, 29>();
                    let var_2 = 0i;
                }
                case -44369i: {
                    global0 = array<vec2<f32>, 3>();
                    var_1 = ~abs(u_input.b);
                    let var_2 = firstLeadingBit(_wgslsmith_clamp_vec2_i32(countOneBits(u_input.a.xw), -(~(-u_input.a.yx)), ~countOneBits(~u_input.a.zz)));
                }
                default: {
                    var var_2 = _wgslsmith_f_op_f32(max(_wgslsmith_div_f32(global2.b.x, 519f), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(trunc(-946f))))));
                    var var_3 = vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(global2.b.x, _wgslsmith_f_op_f32(global2.b.x + global2.b.x))) * _wgslsmith_f_op_f32(-global2.b.x)), global2.b.x, _wgslsmith_f_op_f32(floor(1087f)));
                    var var_4 = Struct_1(!vec3<bool>(all(vec2<bool>(true, true)), true, global2.d.x), global2.b, 1u, global2.d);
                }
            }
        }
    }
    global2 = global3[_wgslsmith_index_u32(_wgslsmith_add_u32(~65633u, _wgslsmith_add_u32(abs(u_input.b.x), min(_wgslsmith_dot_vec3_u32(vec3<u32>(global2.c, global2.c, 82012u), ~vec3<u32>(global2.c, global2.c, global2.c)), reverseBits(_wgslsmith_add_u32(4294967295u, global2.c))))), 22u)];
    var var_0 = ~_wgslsmith_mult_vec2_i32(abs(vec2<i32>(select(8968i, global1[_wgslsmith_index_u32(u_input.c.x, 29u)], global2.a.x), i32(-2147483648))), u_input.a.yz);
    var var_1 = true == all(vec2<bool>(true, select(false, true, global2.c == u_input.b.x)));
    return Struct_1(select(global2.d.xyy, !select(global2.a, !global2.a, global2.a), !(!global2.a.x)), vec2<f32>(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(global2.b.x + 875f))), _wgslsmith_f_op_f32(global2.b.x + _wgslsmith_f_op_f32(global2.b.x - -821f)))), 723f), _wgslsmith_mod_u32(countOneBits(global2.c), u_input.c.x), global2.d);
}

fn func_3() -> Struct_4 {
    var var_0 = func_4();
    var var_1 = Struct_2(func_4(), Struct_1(!global2.a, _wgslsmith_f_op_vec2_f32(sign(global2.b)), global2.c, var_0.d), false, global3[_wgslsmith_index_u32(~abs(~18490u), 22u)]);
    let var_2 = vec2<bool>(!(!func_4().d.x), true);
    let var_3 = ~_wgslsmith_sub_vec2_u32(max(vec2<u32>(var_0.c, ~19324u), ~_wgslsmith_mod_vec2_u32(vec2<u32>(var_1.d.c, 4294967295u), u_input.c)), firstLeadingBit(vec2<u32>(var_1.d.c, _wgslsmith_dot_vec4_u32(vec4<u32>(0u, 28247u, global2.c, var_0.c), vec4<u32>(87364u, global2.c, global2.c, 0u)))));
    var_0 = global3[_wgslsmith_index_u32(_wgslsmith_mult_u32(_wgslsmith_div_u32(~(~_wgslsmith_mult_u32(1805u, var_0.c)), ~max(122340u, 25877u | var_0.c)), select(var_3.x, ~(~abs(u_input.b.x)), !var_1.c)), 22u)];
    return Struct_4(~vec3<u32>(~select(2456u, 4294967295u, false), var_3.x, _wgslsmith_div_u32(reverseBits(global2.c), _wgslsmith_add_u32(0u, global2.c))));
}

fn func_7(arg_0: Struct_4, arg_1: Struct_2, arg_2: vec3<f32>, arg_3: vec2<i32>) -> Struct_3 {
    switch (~_wgslsmith_dot_vec4_i32(u_input.a, -(vec4<i32>(global1[_wgslsmith_index_u32(global2.c, 29u)], 0i, arg_3.x, arg_3.x) ^ ~vec4<i32>(-1i, -1i, 0i, i32(-2147483648))))) {
        case 2147483647i: {
            loop {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
            }
            if (!all(select(vec2<bool>(false, func_6(true, global2.d.x, global2.c)), select(arg_1.b.a.xx, vec2<bool>(global2.a.x, global2.d.x), all(arg_1.b.d.yy)), global2.d.x))) {
                var var_0 = Struct_3(_wgslsmith_mult_i32(u_input.a.x, 17035i), 0u);
                let var_1 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_f_op_vec2_f32(-global0[_wgslsmith_index_u32(~arg_1.a.c, 3u)]))) * _wgslsmith_f_op_vec2_f32(abs(vec2<f32>(global2.b.x, _wgslsmith_f_op_f32(-1818f))))));
            }
            let var_0 = 1i;
        }
        default: {
            global2 = func_4();
            var var_0 = global3[_wgslsmith_index_u32(arg_1.b.c << (u_input.b.x % 32u), 22u)];
        }
    }
    for (; ; ) {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        let var_0 = select(~(~vec4<u32>(0u, 4294967295u, 1u, 2854u)), abs(~abs(abs(vec4<u32>(1868u, 1u, arg_1.d.c, arg_1.a.c)))), arg_1.b.a.x);
        loop {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        }
        var var_1 = ~_wgslsmith_add_vec2_i32(_wgslsmith_clamp_vec2_i32(arg_3, _wgslsmith_mod_vec2_i32(arg_3, -arg_3), u_input.a.wz), vec2<i32>(-_wgslsmith_add_i32(-37038i, global1[_wgslsmith_index_u32(global2.c, 29u)]), -1i));
        let var_2 = arg_1;
    }
    loop {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        if (all(!arg_1.a.a)) {
            break;
        }
        var var_0 = Struct_3(arg_3.x, abs(countOneBits(global2.c)) >> (~_wgslsmith_mod_u32(countOneBits(4294967295u), global2.c) % 32u));
        if (select(arg_1.b.d.x, func_5(Struct_3(1i >> (_wgslsmith_mod_u32(4294967295u, 1u) % 32u), ~abs(4294967295u))), true)) {
            let var_1 = Struct_2(Struct_1(arg_1.b.d.xyw, _wgslsmith_f_op_vec2_f32(arg_2.yz - global0[_wgslsmith_index_u32(global2.c, 3u)]), 4294967295u, global2.d), Struct_1(select(vec3<bool>(true, func_5(Struct_3(-24686i, 13904u)), true), vec3<bool>(global2.a.x, arg_1.b.a.x, global2.d.x), !global2.a.x), _wgslsmith_f_op_vec2_f32(trunc(_wgslsmith_f_op_vec2_f32(arg_2.zz + _wgslsmith_f_op_vec2_f32(global2.b + vec2<f32>(930f, global2.b.x))))), arg_1.a.c, arg_1.d.d), global2.d.x, func_4());
            var var_2 = _wgslsmith_f_op_f32(-global2.b.x);
            continue;
        }
        continue;
    }
    switch (arg_3.x) {
        case 2147483647i: {
            global0 = array<vec2<f32>, 3>();
            var var_0 = arg_1.d.a.x;
            var var_1 = Struct_1(arg_1.d.a, _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-global0[_wgslsmith_index_u32(min(countOneBits(arg_0.a.x), 0u), 3u)])), ~abs(global2.c), global2.d);
            let var_2 = arg_1;
            let var_3 = ~4294967295u;
        }
        case 0i: {
            if (true) {
                var var_0 = !(!any(arg_1.b.a));
                global2 = global3[_wgslsmith_index_u32(~_wgslsmith_mod_u32(u_input.c.x, _wgslsmith_add_u32(countOneBits(~53698u), arg_1.a.c)), 22u)];
                let var_1 = _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(select(vec3<f32>(_wgslsmith_f_op_f32(-arg_2.x), arg_1.a.b.x, _wgslsmith_f_op_f32(ceil(arg_1.a.b.x))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(-936f, arg_2.x, arg_1.a.b.x) * vec3<f32>(global2.b.x, global2.b.x, arg_2.x)) - _wgslsmith_div_vec3_f32(vec3<f32>(arg_1.b.b.x, -147f, -1268f), vec3<f32>(-1868f, global2.b.x, arg_2.x))), vec3<bool>(true, global2.d.x, !arg_1.b.a.x)))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(vec3<f32>(arg_1.d.b.x, 1250f, -474f), _wgslsmith_f_op_vec3_f32(-arg_2)) - _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(arg_2 * vec3<f32>(global2.b.x, arg_2.x, global2.b.x)))) + arg_2), select(!vec3<bool>(global2.d.x, arg_1.a.a.x & global2.d.x, !global2.d.x), !arg_1.d.a, func_4().d.x)));
                var var_2 = abs(u_input.a.wx);
                var var_3 = _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-651f) * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1925f + -925f))))));
            }
            global1 = array<i32, 29>();
            let var_0 = Struct_3(_wgslsmith_dot_vec4_i32(u_input.a, countOneBits(-vec4<i32>(0i, global1[_wgslsmith_index_u32(4294967295u, 29u)], -1i, -44577i))), 0u);
            global1 = array<i32, 29>();
        }
        case 47597i: {
            return Struct_3(reverseBits(~u_input.a.x) & -15690i, 4294967295u);
        }
        default: {
            if (false) {
                var var_0 = any(vec2<bool>(arg_1.d.a.x, true));
                var var_1 = arg_0;
            }
            var var_0 = global2.d.yy;
            global0 = array<vec2<f32>, 3>();
        }
    }
    let var_0 = ~min(6454u, 45816u);
    return Struct_3(~(~arg_3.x ^ -_wgslsmith_div_i32(u_input.a.x, arg_3.x)), _wgslsmith_sub_u32(106504u, u_input.b.x) & arg_0.a.x);
}

fn func_8(arg_0: vec4<u32>, arg_1: Struct_3, arg_2: Struct_3) -> Struct_3 {
    for (var var_0 = 18919i; var_0 > -53136i; var_0 += 1i) {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        var var_1 = !global2.a.x;
    }
    loop {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        let var_0 = global3[_wgslsmith_index_u32(u_input.b.x, 22u)];
        switch (max(u_input.a.x, arg_1.a)) {
            case 1i: {
                global0 = array<vec2<f32>, 3>();
                let var_1 = func_4();
            }
            case -1i: {
                let var_1 = func_3();
                let var_2 = Struct_2(func_4(), func_4(), global2.a.x & true, global3[_wgslsmith_index_u32(~(~1u), 22u)]);
            }
            default: {
                global0 = array<vec2<f32>, 3>();
                let var_1 = global2.a.x;
                var var_2 = ~(reverseBits(_wgslsmith_sub_vec2_i32(_wgslsmith_div_vec2_i32(u_input.a.yx, vec2<i32>(2147483647i, u_input.a.x)), u_input.a.ww)) ^ select(-min(vec2<i32>(-15709i, -44720i), u_input.a.ww), vec2<i32>(1i, abs(u_input.a.x)), select(vec2<bool>(true, var_0.d.x), vec2<bool>(true, true), !vec2<bool>(var_0.a.x, true))));
                let var_3 = Struct_1(func_4().d.xyy, _wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_div_f32(global2.b.x, 967f), func_4().b.x) + global0[_wgslsmith_index_u32(55036u, 3u)]), 38152u, select(select(!(!var_0.d), !(!var_0.d), !(!var_0.d)), select(!global2.d, vec4<bool>(false, false, all(vec2<bool>(var_0.d.x, var_0.d.x)), true), false), -686f > _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(abs(global2.b.x))))));
                var var_4 = arg_1;
            }
        }
        let var_1 = _wgslsmith_clamp_i32(_wgslsmith_div_i32(arg_2.a, ~(-(~arg_1.a))), arg_2.a, _wgslsmith_div_i32(min(1i, -1i) << (~global2.c % 32u), -1i));
        break;
    }
    global3 = array<Struct_1, 22>();
    switch (global1[_wgslsmith_index_u32(9277u | ~(~_wgslsmith_dot_vec4_u32(~arg_0, ~vec4<u32>(u_input.b.x, 1u, arg_1.b, arg_2.b))), 29u)]) {
        case 4833i: {
            global1 = array<i32, 29>();
            switch (u_input.a.x) {
                default: {
                }
            }
            loop {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                global2 = global3[_wgslsmith_index_u32(arg_2.b & reverseBits(arg_0.x), 22u)];
                global2 = func_4();
                return func_7(Struct_4(u_input.b), Struct_2(global3[_wgslsmith_index_u32(~arg_1.b, 22u)], global3[_wgslsmith_index_u32(u_input.c.x, 22u)], 4294967295u >= ~(~arg_0.x), global3[_wgslsmith_index_u32(arg_0.x, 22u)]), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(global2.b.x, global2.b.x, 1511f) + _wgslsmith_f_op_vec3_f32(-vec3<f32>(global2.b.x, global2.b.x, global2.b.x))))), abs(abs(u_input.a.zz)));
            }
        }
        case 1i: {
            switch (global1[_wgslsmith_index_u32(~(~_wgslsmith_dot_vec2_u32(~(vec2<u32>(7089u, 52711u) & vec2<u32>(u_input.c.x, global2.c)), ~select(u_input.c, arg_0.yx, vec2<bool>(global2.d.x, true)))), 29u)]) {
                case -43839i: {
                    var var_0 = global2.d.x;
                    var var_1 = _wgslsmith_add_vec2_i32(vec2<i32>(-3112i, -abs(arg_2.a)), ~u_input.a.xw);
                    global2 = global3[_wgslsmith_index_u32(_wgslsmith_dot_vec4_u32(~(~arg_0), vec4<u32>(1u, countOneBits(~4294967295u), 54876u, 8109u)), 22u)];
                }
                default: {
                    let var_0 = Struct_4(u_input.b ^ _wgslsmith_mod_vec3_u32(min(firstTrailingBit(arg_0.xyy), abs(vec3<u32>(33227u, arg_0.x, arg_2.b))), u_input.b));
                }
            }
            loop {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
                global0 = array<vec2<f32>, 3>();
                global3 = array<Struct_1, 22>();
                var var_0 = func_4().d;
            }
            for (var var_0 = _wgslsmith_clamp_i32(abs(reverseBits(~(-22162i))), -1i, arg_2.a); func_4().d.x; var_0 -= 1i) {
                if (LOOP_COUNTERS[16u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
                let var_1 = ~_wgslsmith_mult_vec4_u32(vec4<u32>(arg_2.b, _wgslsmith_clamp_u32(u_input.c.x, global2.c, 0u) >> (_wgslsmith_div_u32(arg_0.x, 1u) % 32u), _wgslsmith_dot_vec3_u32(reverseBits(arg_0.zyw), vec3<u32>(11940u, 4294967295u, arg_0.x)), _wgslsmith_dot_vec4_u32(firstLeadingBit(arg_0), ~arg_0)), ~arg_0);
                global1 = array<i32, 29>();
                let var_2 = 2147483647i;
                break;
            }
        }
        case 2446i: {
            switch (_wgslsmith_dot_vec4_i32(-u_input.a, vec4<i32>(_wgslsmith_add_i32(u_input.a.x, arg_2.a), _wgslsmith_mod_i32(~arg_1.a, ~global1[_wgslsmith_index_u32(22321u, 29u)]), -1i >> (u_input.c.x % 32u), min(2147483647i, 12937i))) | ~((_wgslsmith_mult_i32(global1[_wgslsmith_index_u32(arg_0.x, 29u)], -1i) >> (~arg_0.x % 32u)) >> (func_7(func_3(), Struct_2(global3[_wgslsmith_index_u32(4294967295u, 22u)], Struct_1(global2.d.yzx, vec2<f32>(global2.b.x, 368f), global2.c, global2.d), global2.a.x, Struct_1(global2.a, global0[_wgslsmith_index_u32(34551u, 3u)], 66u, global2.d)), vec3<f32>(global2.b.x, 1000f, 1123f), ~u_input.a.zz).b % 32u))) {
                case -12878i: {
                }
                case -1i: {
                    global1 = array<i32, 29>();
                    let var_0 = u_input.b.xz;
                    var var_1 = _wgslsmith_f_op_f32(-global2.b.x);
                }
                case 12327i: {
                    let var_0 = _wgslsmith_f_op_vec3_f32(select(vec3<f32>(_wgslsmith_f_op_f32(-1526f + _wgslsmith_f_op_f32(trunc(global2.b.x))), -331f, _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-global2.b.x)))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(-147f, global2.b.x, -1152f) * vec3<f32>(-1741f, global2.b.x, 253f)))) * _wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-429f, global2.b.x, 140f)), vec3<f32>(-1683f, -818f, -613f)))))), (~select(0u, arg_2.b, global2.a.x) < ~_wgslsmith_dot_vec3_u32(vec3<u32>(arg_1.b, 0u, arg_1.b), vec3<u32>(global2.c, 39750u, 35438u))) || !(all(global2.a.zx) || false)));
                    var var_1 = true;
                    global0 = array<vec2<f32>, 3>();
                    global1 = array<i32, 29>();
                }
                case i32(-2147483648): {
                    let var_0 = Struct_2(Struct_1(select(global2.d.wxx, global2.d.xzw, global2.a.x), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(global0[_wgslsmith_index_u32(4294967295u, 3u)] * global2.b))), ~19986u, vec4<bool>(all(!global2.d), global2.d.x, true & (true || global2.a.x), global2.d.x)), global3[_wgslsmith_index_u32(_wgslsmith_sub_u32(select(max(arg_0.x | 1u, arg_1.b), _wgslsmith_div_u32(arg_2.b, global2.c) | ~51262u, func_6(true, global2.d.x, _wgslsmith_add_u32(59866u, u_input.b.x))), _wgslsmith_div_u32(~(~4711u), ~u_input.c.x)), 22u)], select(7199i, countOneBits(-u_input.a.x), select(true, all(vec4<bool>(true, false, global2.a.x, false)), global2.d.x)) > ~arg_2.a, global3[_wgslsmith_index_u32(func_3().a.x ^ 13704u, 22u)]);
                    global0 = array<vec2<f32>, 3>();
                    global1 = array<i32, 29>();
                    global1 = array<i32, 29>();
                }
                default: {
                    global1 = array<i32, 29>();
                    var var_0 = _wgslsmith_clamp_vec4_i32(u_input.a, vec4<i32>(arg_2.a, -_wgslsmith_mod_i32(-1i, arg_1.a), countOneBits(select(arg_2.a, arg_1.a, global2.a.x)), 1i), vec4<i32>(select(i32(-1i) * i32(-2147483648), _wgslsmith_sub_i32(arg_1.a, u_input.a.x), true), ~u_input.a.x, ~2147483647i, -_wgslsmith_mod_i32(u_input.a.x, -11074i))) << (firstLeadingBit(vec4<u32>(u_input.c.x, ~48406u, 0u, global2.c)) % vec4<u32>(32u));
                    var var_1 = global3[_wgslsmith_index_u32(0u, 22u)];
                    var var_2 = Struct_1(select(vec3<bool>(true, true, _wgslsmith_f_op_f32(704f * 1337f) == _wgslsmith_f_op_f32(-global2.b.x)), global2.d.xwz, true), _wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(global2.b.x - 1000f))), 376f) + global0[_wgslsmith_index_u32(arg_1.b, 3u)]), ~37688u & (~_wgslsmith_dot_vec2_u32(arg_0.ww, arg_0.xz) & countOneBits(var_1.c)), vec4<bool>(global2.d.x, false, var_1.a.x, false));
                    var var_3 = _wgslsmith_div_u32(_wgslsmith_dot_vec4_u32(vec4<u32>(104903u, func_4().c, arg_0.x >> (var_1.c % 32u), ~4294967295u), ~countOneBits(vec4<u32>(u_input.c.x, global2.c, 0u, 43845u))) >> (119582u % 32u), var_1.c);
                }
            }
            let var_0 = Struct_2(func_4(), global3[_wgslsmith_index_u32(global2.c, 22u)], func_4().a.x, global3[_wgslsmith_index_u32(min(_wgslsmith_div_u32(global2.c << (25775u % 32u), global2.c ^ func_7(Struct_4(vec3<u32>(arg_0.x, 35786u, 4294967295u)), Struct_2(Struct_1(vec3<bool>(global2.d.x, global2.a.x, true), vec2<f32>(867f, global2.b.x), 0u, vec4<bool>(false, false, false, true)), Struct_1(vec3<bool>(false, false, global2.a.x), vec2<f32>(178f, -481f), arg_1.b, vec4<bool>(true, global2.d.x, global2.d.x, false)), true, Struct_1(vec3<bool>(global2.d.x, global2.d.x, global2.a.x), vec2<f32>(-2138f, global2.b.x), global2.c, global2.d)), vec3<f32>(-1000f, -1100f, global2.b.x), u_input.a.yx).b), func_3().a.x), 22u)]);
            loop {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                break;
            }
            if (!global2.d.x) {
                let var_1 = var_0.b.d.x;
                var var_2 = 812f;
            }
        }
        default: {
            for (var var_0 = -29483i; true; var_0 -= 1i) {
                if (LOOP_COUNTERS[18u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
                continue;
            }
            global1 = array<i32, 29>();
        }
    }
    global0 = array<vec2<f32>, 3>();
    return Struct_3(arg_2.a, firstLeadingBit(~arg_1.b));
}

fn func_2(arg_0: vec3<f32>, arg_1: bool, arg_2: Struct_2, arg_3: vec3<i32>) -> u32 {
    let var_0 = !(!global2.d.wz);
    for (; select(arg_1, false, false); ) {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
    }
    global1 = array<i32, 29>();
    global1 = array<i32, 29>();
    switch (16600i) {
        case -1i: {
            global0 = array<vec2<f32>, 3>();
            global0 = array<vec2<f32>, 3>();
            loop {
                if (LOOP_COUNTERS[20u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
                continue;
            }
            for (var var_1 = 9234i; ; var_1 = _wgslsmith_add_i32(18649i | (-firstLeadingBit(u_input.a.x) >> (_wgslsmith_mult_u32(64408u, _wgslsmith_sub_u32(4294967295u, 4294967295u)) % 32u)), _wgslsmith_div_i32(~arg_3.x, _wgslsmith_clamp_i32(-18820i, _wgslsmith_clamp_i32(arg_3.x, _wgslsmith_div_i32(-33658i, u_input.a.x), i32(-1i) * i32(-2147483648)), 28179i)))) {
                if (LOOP_COUNTERS[21u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
                break;
            }
            var var_1 = Struct_4(abs(vec3<u32>(~8416u, _wgslsmith_mult_u32(1u, ~global2.c), firstLeadingBit(25617u))));
        }
        case -32704i: {
            var var_1 = func_8(vec4<u32>(_wgslsmith_dot_vec4_u32(vec4<u32>(arg_2.d.c, 4294967295u, 50946u, 27198u), ~vec4<u32>(1u, arg_2.a.c, arg_2.d.c, arg_2.b.c)) << (global2.c % 32u), ~0u, 4294967295u, _wgslsmith_mult_u32(61919u, ~15543u >> (select(arg_2.d.c, 69172u, true) % 32u))), func_7(func_3(), arg_2, _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(vec3<f32>(-1520f, -454f, arg_2.a.b.x) - arg_0))) + _wgslsmith_f_op_vec3_f32(round(vec3<f32>(1662f, arg_2.d.b.x, -1292f)))), select((vec2<i32>(i32(-2147483648), arg_3.x) ^ vec2<i32>(global1[_wgslsmith_index_u32(0u, 29u)], -18206i)) >> (u_input.b.xz % vec2<u32>(32u)), u_input.a.xx, !func_4().a.xy)), func_7(Struct_4(_wgslsmith_mult_vec3_u32(u_input.b, u_input.b)), Struct_2(global3[_wgslsmith_index_u32(~_wgslsmith_sub_u32(41154u, arg_2.d.c), 22u)], Struct_1(global2.d.yxy, _wgslsmith_f_op_vec2_f32(-global2.b), 4294967295u, global2.d), arg_1, func_4()), vec3<f32>(-616f, arg_2.d.b.x, _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(abs(484f)), _wgslsmith_f_op_f32(round(global2.b.x))))), abs(-(~vec2<i32>(0i, u_input.a.x)))));
        }
        case 32349i: {
        }
        default: {
            let var_1 = global2.a;
        }
    }
    return 0u;
}

fn func_1(arg_0: vec3<f32>, arg_1: Struct_3) -> bool {
    global0 = array<vec2<f32>, 3>();
    global3 = array<Struct_1, 22>();
    let var_0 = ~reverseBits(abs(_wgslsmith_sub_vec4_u32(vec4<u32>(u_input.b.x, u_input.c.x, 0u, 1u), vec4<u32>(arg_1.b, global2.c, 33219u, 30048u)) >> (_wgslsmith_mod_vec4_u32(vec4<u32>(45436u, arg_1.b, 36164u, arg_1.b), vec4<u32>(arg_1.b, 0u, arg_1.b, global2.c)) % vec4<u32>(32u))));
    let var_1 = ~select(global1[_wgslsmith_index_u32(func_2(_wgslsmith_f_op_vec3_f32(-arg_0), true, Struct_2(global3[_wgslsmith_index_u32(arg_1.b, 22u)], Struct_1(vec3<bool>(global2.d.x, global2.d.x, global2.a.x), vec2<f32>(global2.b.x, -2302f), arg_1.b, vec4<bool>(global2.d.x, true, global2.d.x, global2.a.x)), global2.a.x, Struct_1(vec3<bool>(global2.a.x, true, global2.d.x), arg_0.yz, arg_1.b, global2.d)), u_input.a.zxy << (vec3<u32>(11285u, var_0.x, u_input.c.x) % vec3<u32>(32u))) & _wgslsmith_dot_vec2_u32(var_0.xx, vec2<u32>(2930u, 4294967295u)), 29u)], select(min(global1[_wgslsmith_index_u32(global2.c, 29u)], i32(-2147483648)), func_8(var_0, Struct_3(2398i, arg_1.b), arg_1).a, true) << (~81544u % 32u), global2.d.x);
    for (var var_2 = 2147483647i; var_2 != 2147483647i; var_2 -= 1i) {
        if (LOOP_COUNTERS[22u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
        switch (countOneBits(2625i)) {
            case i32(-2147483648): {
                break;
            }
            case -33799i: {
                break;
            }
            case 29744i: {
                global0 = array<vec2<f32>, 3>();
                global0 = array<vec2<f32>, 3>();
                return false;
            }
            default: {
                global3 = array<Struct_1, 22>();
            }
        }
        if (global2.a.x) {
            break;
        }
        for (var var_3 = ~(-(u_input.a.x >> (_wgslsmith_mult_u32(arg_1.b, u_input.c.x) % 32u)) ^ -66720i); var_3 > -28269i; var_3 -= 1i) {
            if (LOOP_COUNTERS[23u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
            global3 = array<Struct_1, 22>();
            break;
        }
    }
    return global2.d.x;
}

@compute
@workgroup_size(1)
fn main() {
    global3 = array<Struct_1, 22>();
    loop {
        if (LOOP_COUNTERS[24u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
        continue;
    }
    for (var var_0 = -1i; global2.a.x || true; var_0 += 1i) {
        if (LOOP_COUNTERS[25u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
        loop {
            if (LOOP_COUNTERS[26u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
            global0 = array<vec2<f32>, 3>();
        }
        loop {
            if (LOOP_COUNTERS[27u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[27u] = LOOP_COUNTERS[27u] + 1u;
            break;
        }
        continue;
    }
    if (all(!(!vec4<bool>(func_1(vec3<f32>(global2.b.x, global2.b.x, 225f), Struct_3(u_input.a.x, global2.c)), func_1(vec3<f32>(2449f, global2.b.x, global2.b.x), Struct_3(u_input.a.x, 4294967295u)), true, func_5(Struct_3(global1[_wgslsmith_index_u32(1u, 29u)], u_input.c.x)))))) {
    }
    global3 = array<Struct_1, 22>();
    let x = u_input.a;
    s_output = StorageBuffer(vec3<i32>(u_input.a.x, global1[_wgslsmith_index_u32(abs(_wgslsmith_add_u32(_wgslsmith_clamp_u32(u_input.b.x, u_input.b.x, u_input.c.x), 35432u)), 29u)], func_7(func_3(), Struct_2(func_4(), func_4(), global2.a.x, Struct_1(vec3<bool>(false, false, global2.a.x), vec2<f32>(-456f, -1000f), u_input.b.x, global2.d)), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(min(vec3<f32>(global2.b.x, -1474f, global2.b.x), vec3<f32>(global2.b.x, -137f, -819f))) + _wgslsmith_f_op_vec3_f32(min(vec3<f32>(1000f, global2.b.x, -1004f), vec3<f32>(1000f, -146f, -976f)))), vec2<i32>(u_input.a.x, 9271i)).a));
}

`;