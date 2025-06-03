export const input = [122,158,146,197,248,21,132,3,213,221,97,142,162,211,138,153,7,79,217,93,169,131,19,248,160,255,178,104,48,166,122,143,129,50,119,224,175,214,117,230,48,152,37,153,188,170,18,139,141,161,85,241,172,146,241,59,193,129,2,175,91,13,53,51];
export const expected = [122,158,146,197,248,21,132,3,213,221,97,142,162,211,138,153,7,79,217,93,169,131,19,248,160,255,178,104,48,166,122,143,129,50,119,224,175,214,117,230,48,152,37,153,188,170,18,139,141,161,85,241,172,146,241,59,193,129,2,175,91,13,53,51];
export const shaderCode = ` 
 // {"0:0":[122,158,146,197,248,21,132,3,213,221,97,142,162,211,138,153,7,79,217,93,169,131,19,248,160,255,178,104,48,166,122,143,129,50,119,224,175,214,117,230,48,152,37,153,188,170,18,139,141,161,85,241,172,146,241,59,193,129,2,175,91,13,53,51]}
// Seed: 12062026590780924158

struct Struct_1 {
    a: vec3<f32>,
    b: vec3<u32>,
    c: u32,
    d: vec2<bool>,
}

struct Struct_2 {
    a: Struct_1,
    b: Struct_1,
}

struct UniformBuffer {
    a: vec3<u32>,
    b: vec3<i32>,
    c: vec2<u32>,
    d: vec4<i32>,
}

struct StorageBuffer {
    a: vec2<u32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<u32, 19>;

var<private> global1: Struct_2 = Struct_2(Struct_1(vec3<f32>(669f, -583f, 305f), vec3<u32>(10890u, 4294967295u, 9739u), 6432u, vec2<bool>(false, true)), Struct_1(vec3<f32>(333f, 1001f, 645f), vec3<u32>(0u, 4294967295u, 0u), 1u, vec2<bool>(true, true)));

var<private> LOOP_COUNTERS: array<u32, 32>;

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn func_6(arg_0: vec2<i32>) -> i32 {
    switch (-((i32(-1i) * -_wgslsmith_add_i32(arg_0.x, 47203i)) | i32(-2147483648))) {
        case 0i: {
            let var_0 = vec2<f32>(global1.b.a.x, 1000f);
        }
        case 5287i: {
            global0 = array<u32, 19>();
            global0 = array<u32, 19>();
            var var_0 = vec4<bool>(any(vec3<bool>(true, global1.a.d.x, true)) == !any(select(vec4<bool>(global1.b.d.x, global1.b.d.x, false, false), vec4<bool>(global1.b.d.x, global1.b.d.x, false, true), vec4<bool>(global1.b.d.x, global1.a.d.x, global1.b.d.x, global1.b.d.x))), true, !global1.b.d.x, true);
            switch (_wgslsmith_dot_vec2_i32(arg_0, firstLeadingBit(_wgslsmith_mod_vec2_i32(vec2<i32>(~u_input.b.x, arg_0.x), u_input.d.yx)))) {
                default: {
                }
            }
        }
        default: {
            loop {
                if (LOOP_COUNTERS[0u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
                global1 = Struct_2(Struct_1(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(global1.b.a - vec3<f32>(global1.b.a.x, global1.b.a.x, -180f)) + vec3<f32>(global1.b.a.x, -1149f, 1106f))), u_input.a, 4294967295u, vec2<bool>(true, select(global1.a.d.x, u_input.c.x < u_input.a.x, false | global1.a.d.x))), Struct_1(_wgslsmith_f_op_vec3_f32(select(global1.a.a, _wgslsmith_f_op_vec3_f32(vec3<f32>(global1.b.a.x, -1073f, global1.a.a.x) * vec3<f32>(-819f, global1.b.a.x, global1.b.a.x)), global1.a.d.x)), _wgslsmith_mult_vec3_u32(global1.b.b & u_input.a, ~_wgslsmith_mult_vec3_u32(u_input.a, u_input.a)), u_input.c.x, vec2<bool>(global1.a.b.x == reverseBits(global0[_wgslsmith_index_u32(47157u, 19u)]), global1.b.d.x | true)));
            }
        }
    }
    global0 = array<u32, 19>();
    global1 = Struct_2(Struct_1(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(-169f, global1.b.a.x, global1.b.a.x) * vec3<f32>(global1.b.a.x, global1.a.a.x, global1.a.a.x)) + _wgslsmith_f_op_vec3_f32(min(global1.a.a, vec3<f32>(global1.b.a.x, global1.b.a.x, -1205f)))), global1.b.a), u_input.a, 118390u, vec2<bool>(true, true)), Struct_1(global1.b.a, global1.b.b, firstTrailingBit(63536u), select(vec2<bool>(any(vec4<bool>(global1.a.d.x, global1.b.d.x, false, global1.b.d.x)), global1.a.d.x), global1.b.d, true | (global1.b.a.x < global1.a.a.x))));
    var var_0 = vec2<bool>(true, global1.a.d.x);
    loop {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        var var_1 = global1.b;
        return _wgslsmith_dot_vec4_i32(vec4<i32>(-1i, 2147483647i, u_input.d.x, reverseBits(-17703i) >> (_wgslsmith_dot_vec3_u32(vec3<u32>(u_input.c.x, 4294967295u, 0u), var_1.b) % 32u)) | _wgslsmith_clamp_vec4_i32(vec4<i32>(u_input.d.x, abs(1i), -1i, 1i), (u_input.d | u_input.d) | select(u_input.d, vec4<i32>(-8317i, u_input.b.x, arg_0.x, arg_0.x), vec4<bool>(true, true, false, global1.a.d.x)), max(_wgslsmith_sub_vec4_i32(vec4<i32>(14887i, arg_0.x, 1i, -65i), vec4<i32>(arg_0.x, 0i, u_input.d.x, 1i)), abs(u_input.d))), vec4<i32>(_wgslsmith_dot_vec2_i32(-vec2<i32>(arg_0.x, 41462i), ~vec2<i32>(u_input.d.x, u_input.d.x)), _wgslsmith_dot_vec4_i32(reverseBits(vec4<i32>(i32(-2147483648), u_input.d.x, 1i, u_input.b.x)), firstLeadingBit(u_input.d)), -1i, 1i) << (vec4<u32>(firstTrailingBit(var_1.c), _wgslsmith_add_u32(~global1.b.b.x, global0[_wgslsmith_index_u32(u_input.a.x << (global0[_wgslsmith_index_u32(35185u, 19u)] % 32u), 19u)]), global1.b.c, _wgslsmith_dot_vec3_u32(vec3<u32>(var_1.b.x, 7747u, 4294967295u), u_input.a) | global0[_wgslsmith_index_u32(_wgslsmith_add_u32(global1.a.b.x, u_input.a.x), 19u)]) % vec4<u32>(32u)));
    }
    return u_input.d.x << (u_input.c.x % 32u);
}

fn func_5(arg_0: Struct_2, arg_1: Struct_2) -> Struct_1 {
    loop {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        let var_0 = Struct_1(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-global1.b.a)), _wgslsmith_div_vec3_u32(max(arg_0.b.b, _wgslsmith_add_vec3_u32(arg_0.a.b, vec3<u32>(4294967295u, arg_0.a.c, 4294967295u)) ^ vec3<u32>(arg_1.b.b.x, 1u, global1.a.b.x)), ~_wgslsmith_mult_vec3_u32(~arg_1.a.b, vec3<u32>(arg_0.b.c, 5528u, u_input.a.x))), ~7807u, !(!select(!arg_1.b.d, global1.b.d, select(arg_1.b.d, global1.a.d, true))));
    }
    let var_0 = select(u_input.c, ~min(~_wgslsmith_clamp_vec2_u32(vec2<u32>(4294967295u, global1.a.b.x), vec2<u32>(1u, global1.b.c), u_input.c), ~(~vec2<u32>(4294967295u, arg_1.b.b.x))), vec2<bool>(1i > u_input.d.x, all(vec3<bool>(true, true, true))));
    var var_1 = Struct_2(arg_0.b, Struct_1(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(arg_1.b.a - _wgslsmith_div_vec3_f32(vec3<f32>(-201f, 452f, arg_0.b.a.x), arg_1.a.a))), arg_0.b.b, arg_0.a.c, !vec2<bool>(select(arg_1.a.d.x, arg_1.b.d.x, arg_0.b.d.x), any(arg_1.b.d))));
    loop {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        global1 = arg_0;
    }
    switch (firstTrailingBit(func_6(-u_input.d.wx))) {
        case 2147483647i: {
            switch (40598i) {
                case i32(-2147483648): {
                    global0 = array<u32, 19>();
                    var var_2 = var_1.a;
                    var_1 = arg_1;
                }
                case 25641i: {
                    global1 = arg_0;
                    let var_2 = arg_0.b.d.x | var_1.a.d.x;
                }
                case 2147483647i: {
                    let var_2 = arg_1.b.a.yx;
                }
                case -1i: {
                    var var_2 = abs(_wgslsmith_mult_vec4_i32(vec4<i32>(-u_input.b.x, u_input.b.x >> (_wgslsmith_mult_u32(u_input.a.x, global0[_wgslsmith_index_u32(arg_0.a.c, 19u)]) % 32u), _wgslsmith_add_i32(~1i, abs(1i)), 1i), vec4<i32>(_wgslsmith_dot_vec2_i32(vec2<i32>(1i, -11883i), u_input.b.xx), u_input.b.x ^ 0i, firstLeadingBit(u_input.b.x), 2308i & u_input.d.x) << (firstTrailingBit(vec4<u32>(128606u, 0u, arg_1.b.c, 25503u) ^ vec4<u32>(global1.a.c, u_input.a.x, var_0.x, 4294967295u)) % vec4<u32>(32u))));
                    return Struct_1(arg_0.a.a, _wgslsmith_sub_vec3_u32(~vec3<u32>(var_0.x, arg_0.a.c, 4294967295u) & select(arg_1.a.b, u_input.a, var_1.b.d.x), max(select(arg_0.a.b, vec3<u32>(var_0.x, global1.b.c, global0[_wgslsmith_index_u32(u_input.a.x, 19u)]), vec3<bool>(global1.a.d.x, true, false)), arg_1.a.b)) & select(~min(vec3<u32>(var_0.x, var_0.x, 4294967295u), vec3<u32>(global0[_wgslsmith_index_u32(4294967295u, 19u)], 4294967295u, 9528u)), select(~vec3<u32>(4294967295u, arg_0.a.c, 53188u), ~var_1.b.b, arg_0.b.d.x || true), select(select(vec3<bool>(true, true, false), vec3<bool>(arg_1.b.d.x, false, false), false), !vec3<bool>(true, true, arg_0.b.d.x), select(vec3<bool>(true, global1.b.d.x, var_1.a.d.x), vec3<bool>(arg_1.b.d.x, arg_0.b.d.x, false), vec3<bool>(true, global1.b.d.x, arg_1.b.d.x)))), ~91863u, !vec2<bool>(!arg_0.a.d.x, !(arg_0.b.a.x < 654f)));
                }
                default: {
                }
            }
            switch (-u_input.d.x) {
                default: {
                    var var_2 = Struct_1(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(select(vec3<f32>(global1.b.a.x, global1.b.a.x, -925f), var_1.a.a, arg_0.a.d.x)), _wgslsmith_f_op_vec3_f32(min(arg_0.a.a, vec3<f32>(1000f, arg_1.a.a.x, var_1.b.a.x))))) + _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(global1.a.a.x, global1.a.a.x, arg_1.b.a.x))))), vec3<u32>(_wgslsmith_dot_vec3_u32(var_1.a.b, ~(~arg_0.b.b)), _wgslsmith_div_u32(_wgslsmith_dot_vec4_u32(vec4<u32>(var_1.a.c, 22282u, u_input.c.x, 25033u), _wgslsmith_clamp_vec4_u32(vec4<u32>(4294967295u, global0[_wgslsmith_index_u32(var_1.a.c, 19u)], var_0.x, 14432u), vec4<u32>(33730u, 25257u, 87356u, arg_0.b.c), vec4<u32>(0u, var_1.a.c, 40497u, 1u))), _wgslsmith_dot_vec4_u32(vec4<u32>(arg_1.a.b.x, 11403u, 30724u, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(var_0.x, 19u)], 19u)]), vec4<u32>(global0[_wgslsmith_index_u32(46743u, 19u)], 22403u, var_0.x, arg_1.a.c)) | _wgslsmith_dot_vec4_u32(vec4<u32>(arg_1.b.b.x, 90883u, global0[_wgslsmith_index_u32(var_0.x, 19u)], 1u), vec4<u32>(var_0.x, 27108u, 4294967295u, 39436u))), global1.b.b.x), countOneBits(_wgslsmith_dot_vec3_u32(vec3<u32>(arg_1.b.c >> (var_0.x % 32u), 57136u, arg_0.a.b.x & 14898u), _wgslsmith_div_vec3_u32(_wgslsmith_mod_vec3_u32(arg_1.a.b, var_1.b.b), _wgslsmith_clamp_vec3_u32(vec3<u32>(var_1.a.c, 0u, u_input.a.x), vec3<u32>(var_1.b.b.x, arg_0.b.c, arg_1.b.b.x), global1.a.b)))), vec2<bool>(select(var_1.a.d.x, false, true), false));
                }
            }
            if (abs(select(u_input.a.x, _wgslsmith_mod_u32(arg_1.b.b.x << (arg_1.b.c % 32u), _wgslsmith_div_u32(0u, arg_0.a.c)), select(any(vec3<bool>(global1.b.d.x, false, arg_0.a.d.x)), true, arg_0.a.d.x | true))) < u_input.c.x) {
                var_1 = arg_0;
                var_1 = Struct_2(Struct_1(_wgslsmith_f_op_vec3_f32(select(var_1.a.a, vec3<f32>(var_1.b.a.x, _wgslsmith_f_op_f32(-var_1.b.a.x), arg_0.b.a.x), !select(vec3<bool>(false, arg_1.b.d.x, false), vec3<bool>(var_1.a.d.x, arg_0.b.d.x, var_1.b.d.x), var_1.b.d.x))), arg_0.a.b, ~global1.a.c, !(!vec2<bool>(false, var_1.b.d.x))), arg_1.a);
                return Struct_1(_wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_div_vec3_f32(arg_0.a.a, global1.b.a))), reverseBits(vec3<u32>(reverseBits(firstTrailingBit(74622u)), global0[_wgslsmith_index_u32(min(u_input.c.x, abs(14842u)), 19u)], global1.b.b.x)), ~u_input.a.x, select(!select(select(vec2<bool>(false, true), global1.b.d, var_1.a.d), var_1.a.d, select(vec2<bool>(false, true), vec2<bool>(arg_1.b.d.x, false), var_1.b.d.x)), !select(select(vec2<bool>(var_1.a.d.x, var_1.b.d.x), arg_0.a.d, arg_1.a.d.x), arg_1.b.d, vec2<bool>(true, true)), !all(!vec3<bool>(global1.a.d.x, false, true))));
            }
            loop {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                var var_2 = _wgslsmith_mult_vec2_i32(_wgslsmith_mod_vec2_i32(_wgslsmith_mult_vec2_i32(~(vec2<i32>(-39038i, u_input.b.x) | vec2<i32>(u_input.d.x, u_input.b.x)), min(vec2<i32>(0i, u_input.b.x), select(u_input.b.xz, u_input.d.wz, false))), vec2<i32>(i32(-1i) * -u_input.b.x, max(u_input.b.x, select(-4566i, 6132i, false)))), vec2<i32>(-1i) * -countOneBits(vec2<i32>(1i, u_input.b.x)));
            }
            loop {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                var_1 = Struct_2(var_1.b, Struct_1(_wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(exp2(vec3<f32>(978f, 643f, var_1.b.a.x))) - vec3<f32>(arg_0.b.a.x, -252f, var_1.b.a.x)))), ~_wgslsmith_mod_vec3_u32(countOneBits(vec3<u32>(0u, 44509u, var_0.x)), var_1.a.b), u_input.c.x, vec2<bool>(false, var_1.a.d.x)));
                let var_2 = u_input.c.x;
                var var_3 = arg_1;
                var var_4 = Struct_1(vec3<f32>(1183f, 1f, 1203f), ~(vec3<u32>(select(arg_0.a.b.x, global1.a.b.x, false), ~var_0.x, 62231u) << (arg_0.b.b % vec3<u32>(32u))), reverseBits(68933u), vec2<bool>(var_3.b.d.x, select(any(select(vec4<bool>(true, arg_1.b.d.x, arg_1.a.d.x, global1.a.d.x), vec4<bool>(arg_0.a.d.x, arg_0.a.d.x, true, arg_1.b.d.x), arg_0.a.d.x)), true, false)));
                continue;
            }
        }
        default: {
            loop {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                var var_2 = vec3<u32>(4294967295u, _wgslsmith_mult_u32(~(firstTrailingBit(arg_0.b.b.x) >> (_wgslsmith_mod_u32(global1.b.b.x, 37200u) % 32u)), ~_wgslsmith_add_u32(u_input.c.x, ~var_1.b.b.x)), global0[_wgslsmith_index_u32(_wgslsmith_add_u32(firstTrailingBit(arg_0.b.c), _wgslsmith_dot_vec2_u32(_wgslsmith_div_vec2_u32(arg_1.a.b.xx, select(u_input.c, var_1.a.b.zz, false)), _wgslsmith_add_vec2_u32(vec2<u32>(arg_1.a.c, 65473u), vec2<u32>(4294967295u, arg_1.b.c)))), 19u)]);
                let var_3 = _wgslsmith_clamp_vec4_i32(u_input.d, u_input.d, ~u_input.d);
                let var_4 = arg_0;
            }
            var_1 = Struct_2(Struct_1(vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-117f * -489f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1279f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(var_1.a.a.x, arg_1.b.a.x)) + _wgslsmith_f_op_f32(-1011f))), ~_wgslsmith_mod_vec3_u32(~vec3<u32>(0u, 1u, u_input.c.x), ~vec3<u32>(var_1.a.b.x, 2811u, u_input.a.x)), _wgslsmith_sub_u32(_wgslsmith_mod_u32(~30905u, ~arg_1.b.b.x), ~(4294967295u >> (global0[_wgslsmith_index_u32(43335u, 19u)] % 32u))), !select(!vec2<bool>(var_1.b.d.x, arg_0.a.d.x), arg_0.a.d, arg_1.b.d)), Struct_1(_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(arg_1.b.a - global1.b.a) - _wgslsmith_f_op_vec3_f32(-global1.a.a)), vec3<f32>(_wgslsmith_f_op_f32(-global1.a.a.x), _wgslsmith_f_op_f32(2375f + global1.a.a.x), _wgslsmith_f_op_f32(ceil(var_1.b.a.x))), global1.a.d.x)), var_1.a.b, reverseBits(0u), !vec2<bool>(global1.a.a.x <= arg_0.b.a.x, global1.b.c < arg_1.a.b.x)));
            var var_2 = vec2<u32>(_wgslsmith_mult_u32(1u, _wgslsmith_dot_vec4_u32(vec4<u32>(33034u, 63353u, var_0.x, 4294967295u), vec4<u32>(global1.a.c, 1u, 37822u, 1u)) >> (~1u % 32u)) | u_input.c.x, _wgslsmith_mult_u32(~_wgslsmith_sub_u32(_wgslsmith_dot_vec4_u32(vec4<u32>(1u, arg_1.b.b.x, arg_1.a.c, 4294967295u), vec4<u32>(var_0.x, 4294967295u, 18480u, 10058u)), global0[_wgslsmith_index_u32(23275u, 19u)]), 31979u >> (global1.b.b.x % 32u)));
            switch (i32(-1i) * -15842i) {
                case 22485i: {
                    var_1 = arg_1;
                    let var_3 = Struct_2(Struct_1(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(round(var_1.b.a)))), vec3<u32>(countOneBits(_wgslsmith_dot_vec3_u32(vec3<u32>(u_input.a.x, var_1.b.c, 8463u), vec3<u32>(u_input.c.x, 11497u, global1.a.c))), 1u, ~(~64396u)), ~29709u, vec2<bool>(any(!vec3<bool>(global1.b.d.x, false, global1.b.d.x)), !any(vec4<bool>(true, true, global1.b.d.x, global1.b.d.x)))), Struct_1(_wgslsmith_f_op_vec3_f32(min(vec3<f32>(_wgslsmith_f_op_f32(-246f), -699f, _wgslsmith_f_op_f32(-arg_1.a.a.x)), _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(arg_0.a.a + vec3<f32>(1157f, arg_0.a.a.x, 1000f)), _wgslsmith_f_op_vec3_f32(-var_1.b.a)))), vec3<u32>(~17668u, arg_1.b.b.x, global0[_wgslsmith_index_u32(var_1.b.b.x, 19u)]), _wgslsmith_clamp_u32(29936u, _wgslsmith_div_u32(66411u, var_0.x), firstTrailingBit(arg_0.a.b.x)), !select(!var_1.b.d, var_1.b.d, false)));
                    var var_4 = Struct_2(Struct_1(_wgslsmith_f_op_vec3_f32(-vec3<f32>(arg_0.b.a.x, _wgslsmith_f_op_f32(abs(-195f)), -1572f)), _wgslsmith_add_vec3_u32(vec3<u32>(~global0[_wgslsmith_index_u32(var_3.b.b.x, 19u)], select(4294967295u, 0u, var_3.a.d.x), arg_0.a.b.x), u_input.a), var_2.x, global1.b.d), var_3.b);
                }
                case 0i: {
                    var var_3 = Struct_1(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(-392f, var_1.a.a.x, global1.a.a.x) * _wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(-arg_0.a.a)))) + arg_0.a.a), _wgslsmith_mod_vec3_u32(select(global1.a.b, ~global1.b.b, true), firstLeadingBit(max(vec3<u32>(arg_0.a.b.x, 9392u, 7480u), global1.a.b))) ^ vec3<u32>(countOneBits(19113u), 1u, _wgslsmith_mod_u32(u_input.a.x, ~4294967295u)), 66348u, select(select(!select(vec2<bool>(true, false), vec2<bool>(false, var_1.b.d.x), var_1.b.d), arg_0.a.d, select(select(vec2<bool>(arg_0.a.d.x, arg_1.b.d.x), vec2<bool>(var_1.a.d.x, global1.a.d.x), false), vec2<bool>(global1.b.d.x, false), arg_0.a.d.x)), !global1.a.d, global1.b.d));
                    let var_4 = _wgslsmith_mod_vec4_i32(vec4<i32>(u_input.d.x, -28945i, func_6(countOneBits(vec2<i32>(u_input.d.x, u_input.b.x) << (var_1.b.b.yy % vec2<u32>(32u)))), u_input.b.x), select(vec4<i32>(1i, _wgslsmith_dot_vec3_i32(firstLeadingBit(u_input.b), abs(vec3<i32>(u_input.d.x, 67051i, u_input.d.x))), u_input.d.x, 22034i), vec4<i32>(_wgslsmith_mult_i32(~u_input.b.x, _wgslsmith_clamp_i32(0i, -30942i, -18157i)), 31418i, u_input.b.x, i32(-2147483648)), !(!select(vec4<bool>(var_1.b.d.x, var_1.b.d.x, false, arg_0.a.d.x), vec4<bool>(var_3.d.x, global1.a.d.x, var_3.d.x, var_1.b.d.x), vec4<bool>(false, false, true, arg_0.b.d.x)))));
                    var var_5 = Struct_1(_wgslsmith_div_vec3_f32(arg_1.a.a, _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(arg_1.a.a * vec3<f32>(-1800f, -513f, 1000f))))), vec3<u32>(global0[_wgslsmith_index_u32(arg_0.a.c, 19u)] >> (~(arg_1.a.c | 0u) % 32u), firstLeadingBit(_wgslsmith_dot_vec3_u32(vec3<u32>(global1.b.c, 4294967295u, 45404u), var_3.b)), abs(0u)), var_2.x >> (countOneBits(1u) % 32u), !select(vec2<bool>(u_input.d.x >= 0i, global1.a.d.x), vec2<bool>(global1.b.d.x, false), select(vec2<bool>(var_3.d.x, var_3.d.x), select(arg_0.b.d, var_3.d, arg_0.a.d), arg_1.a.d)));
                }
                case 10296i: {
                }
                default: {
                    global1 = arg_0;
                }
            }
            if (!(false | !all(vec2<bool>(true, true)))) {
                var var_3 = u_input.b.yy;
            }
        }
    }
    return global1.a;
}

fn func_7(arg_0: vec3<i32>, arg_1: vec2<bool>, arg_2: Struct_1, arg_3: bool) -> Struct_2 {
    global0 = array<u32, 19>();
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
    }
    let var_0 = func_5(Struct_2(arg_2, func_5(Struct_2(func_5(Struct_2(Struct_1(arg_2.a, arg_2.b, 1u, arg_1), arg_2), Struct_2(arg_2, Struct_1(global1.a.a, u_input.a, global0[_wgslsmith_index_u32(0u, 19u)], global1.b.d))), Struct_1(global1.a.a, arg_2.b, global0[_wgslsmith_index_u32(arg_2.b.x, 19u)], arg_1)), Struct_2(Struct_1(vec3<f32>(-747f, -160f, -739f), vec3<u32>(u_input.a.x, global1.a.b.x, 34585u), 19394u, arg_1), func_5(Struct_2(Struct_1(vec3<f32>(-310f, 1000f, -542f), u_input.a, global0[_wgslsmith_index_u32(arg_2.b.x, 19u)], arg_1), arg_2), Struct_2(Struct_1(vec3<f32>(global1.a.a.x, global1.a.a.x, global1.b.a.x), arg_2.b, u_input.c.x, vec2<bool>(arg_3, true)), arg_2))))), Struct_2(func_5(Struct_2(global1.b, Struct_1(vec3<f32>(arg_2.a.x, arg_2.a.x, 937f), vec3<u32>(4294967295u, 4294967295u, 10137u), 6261u, vec2<bool>(global1.b.d.x, arg_2.d.x))), Struct_2(Struct_1(arg_2.a, arg_2.b, u_input.a.x, arg_2.d), Struct_1(arg_2.a, u_input.a, 18724u, arg_2.d))), global1.b));
    if (true) {
    }
    var var_1 = _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-global1.b.a.x)));
    return Struct_2(func_5(Struct_2(func_5(Struct_2(arg_2, Struct_1(vec3<f32>(1184f, -495f, 580f), vec3<u32>(18322u, 4294967295u, 4294967295u), 5528u, global1.b.d)), Struct_2(global1.b, global1.a)), arg_2), Struct_2(arg_2, var_0)), func_5(Struct_2(Struct_1(vec3<f32>(-1000f, 852f, 307f), reverseBits(vec3<u32>(global0[_wgslsmith_index_u32(4294967295u, 19u)], global0[_wgslsmith_index_u32(14970u, 19u)], 4747u)), ~4294967295u, vec2<bool>(var_0.d.x, true)), arg_2), Struct_2(Struct_1(_wgslsmith_f_op_vec3_f32(-var_0.a), countOneBits(vec3<u32>(74137u, 1u, 0u)), 4294967295u, arg_1), arg_2)));
}

fn func_8(arg_0: Struct_2) -> vec3<u32> {
    loop {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        continue;
    }
    for (var var_0 = i32(-2147483648); var_0 > -1i; var_0 += 1i) {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        global1 = func_7(u_input.b, !global1.b.d, Struct_1(_wgslsmith_div_vec3_f32(_wgslsmith_div_vec3_f32(arg_0.a.a, _wgslsmith_f_op_vec3_f32(ceil(arg_0.b.a))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(arg_0.b.a.x, global1.a.a.x, 148f))) * _wgslsmith_f_op_vec3_f32(-vec3<f32>(636f, global1.a.a.x, global1.b.a.x)))), reverseBits(min(vec3<u32>(4294967295u, u_input.c.x, arg_0.b.b.x), u_input.a)), ~global1.a.c, arg_0.b.d), arg_0.b.a.x > 2458f);
        var_0 = -u_input.b.x;
        var var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(1251f + func_7(-u_input.b, !vec2<bool>(true, arg_0.b.d.x), func_7(u_input.b, vec2<bool>(true, global1.b.d.x), arg_0.a, true).a, global1.b.d.x).b.a.x) - arg_0.a.a.x));
    }
    for (var var_0 = 2147483647i; var_0 > -26070i; var_0 -= 1i) {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        continue;
    }
    global0 = array<u32, 19>();
    if (global1.a.d.x) {
        let var_0 = -1i;
        loop {
            if (LOOP_COUNTERS[11u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
            var var_1 = 4294967295u;
            let var_2 = arg_0.b;
            var var_3 = _wgslsmith_dot_vec4_i32(u_input.d >> (~abs(_wgslsmith_div_vec4_u32(vec4<u32>(37079u, 4294967295u, 1u, u_input.c.x), vec4<u32>(53467u, u_input.a.x, 47536u, global1.b.c))) % vec4<u32>(32u)), _wgslsmith_sub_vec4_i32(_wgslsmith_div_vec4_i32(reverseBits(-vec4<i32>(2147483647i, -25903i, 2147483647i, i32(-2147483648))), _wgslsmith_sub_vec4_i32(u_input.d, vec4<i32>(-1i, var_0, 1i, 5527i))), firstLeadingBit(u_input.d)));
            let var_4 = _wgslsmith_f_op_vec3_f32(-global1.a.a);
        }
    }
    return vec3<u32>(~global1.a.c, _wgslsmith_add_u32(~(~_wgslsmith_mult_u32(global1.b.c, 46939u)), 51317u), ~(~16809u));
}

fn func_9(arg_0: Struct_2, arg_1: vec4<i32>, arg_2: vec3<u32>, arg_3: Struct_2) -> Struct_1 {
    var var_0 = _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(round(arg_0.a.a.x)), _wgslsmith_f_op_f32(-1000f), _wgslsmith_div_f32(-2450f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_0.a.a.x) * 470f)), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(arg_3.b.a.x * arg_3.a.a.x), _wgslsmith_f_op_f32(f32(-1f) * -1528f)))))));
    var var_1 = arg_3.a;
    let var_2 = func_7(_wgslsmith_div_vec3_i32(vec3<i32>(u_input.d.x, arg_1.x, arg_1.x), arg_1.yzw), !arg_0.a.d, func_7(-arg_1.zwz, select(vec2<bool>(true, arg_0.a.d.x), vec2<bool>(arg_3.b.d.x, all(vec4<bool>(arg_0.b.d.x, arg_3.b.d.x, var_1.d.x, global1.a.d.x))), vec2<bool>(true, !var_1.d.x)), Struct_1(vec3<f32>(_wgslsmith_f_op_f32(ceil(arg_3.b.a.x)), _wgslsmith_f_op_f32(var_1.a.x + arg_0.a.a.x), arg_3.b.a.x), vec3<u32>(~0u, _wgslsmith_dot_vec2_u32(arg_2.yx, vec2<u32>(4294967295u, var_1.c)), global1.a.b.x), min(reverseBits(0u), _wgslsmith_sub_u32(75255u, arg_2.x)), vec2<bool>(!arg_0.a.d.x, func_7(u_input.b, vec2<bool>(global1.a.d.x, false), Struct_1(arg_3.b.a, arg_3.a.b, var_1.b.x, arg_3.a.d), var_1.d.x).b.d.x)), !any(vec2<bool>(true, arg_0.b.d.x))).a, !(true | !var_1.d.x));
    loop {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
    }
    var var_3 = func_5(func_7(-(~arg_1.yzx >> (select(vec3<u32>(var_2.b.b.x, 1u, 90300u), vec3<u32>(arg_3.b.c, arg_2.x, u_input.a.x), vec3<bool>(var_1.d.x, arg_3.b.d.x, true)) % vec3<u32>(32u))), select(var_1.d, vec2<bool>(false, global1.a.d.x != var_2.b.d.x), -u_input.b.x < (u_input.b.x << (10131u % 32u))), func_5(arg_3, func_7(_wgslsmith_mult_vec3_i32(vec3<i32>(1i, arg_1.x, u_input.d.x), vec3<i32>(-498i, 19056i, 50720i)), func_7(arg_1.ywy, vec2<bool>(var_1.d.x, true), Struct_1(vec3<f32>(1612f, -752f, global1.a.a.x), vec3<u32>(arg_3.b.b.x, 7316u, global1.b.c), arg_0.b.b.x, arg_0.b.d), true).a.d, Struct_1(arg_3.b.a, vec3<u32>(1u, arg_2.x, 20969u), 10088u, var_2.b.d), true)), var_1.a.x <= _wgslsmith_f_op_f32(-var_2.b.a.x)), Struct_2(func_7(_wgslsmith_mult_vec3_i32(-arg_1.xzy, vec3<i32>(-21073i, i32(-2147483648), -5392i)), var_1.d, func_7(_wgslsmith_div_vec3_i32(vec3<i32>(u_input.d.x, u_input.d.x, arg_1.x), vec3<i32>(-57747i, -16880i, u_input.d.x)), !var_2.b.d, func_5(var_2, Struct_2(arg_3.b, arg_0.b)), !var_1.d.x).b, arg_0.a.d.x).b, Struct_1(global1.a.a, vec3<u32>(~var_2.a.c, arg_2.x >> (arg_2.x % 32u), countOneBits(32450u)), _wgslsmith_dot_vec2_u32(_wgslsmith_add_vec2_u32(arg_0.b.b.yz, arg_3.a.b.zy), ~vec2<u32>(4846u, arg_0.a.c)), func_5(Struct_2(Struct_1(vec3<f32>(var_1.a.x, 1259f, -548f), arg_3.a.b, 7180u, vec2<bool>(global1.b.d.x, var_2.b.d.x)), Struct_1(arg_3.b.a, vec3<u32>(0u, 16280u, arg_0.b.c), var_2.b.b.x, vec2<bool>(false, var_2.a.d.x))), arg_3).d)));
    return func_5(var_2, func_7(vec3<i32>(u_input.d.x, _wgslsmith_mod_i32(_wgslsmith_div_i32(-20877i, 1i), i32(-1i) * -12658i), arg_1.x), vec2<bool>(true, true), Struct_1(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1000f, -432f, global1.a.a.x)), vec3<f32>(215f, global1.b.a.x, var_2.a.a.x)), reverseBits(~vec3<u32>(0u, 97055u, 1u)), _wgslsmith_sub_u32(~arg_3.b.b.x, global1.a.b.x << (var_2.b.c % 32u)), arg_3.a.d), true));
}

fn func_4(arg_0: vec2<i32>, arg_1: i32, arg_2: vec3<u32>, arg_3: f32) -> vec3<f32> {
    for (var var_0 = 0i; ; ) {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        var var_1 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -2588f) + _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_3)), _wgslsmith_f_op_f32(select(1000f, -459f, true)))));
        for (var var_2 = -1i; ; ) {
            if (LOOP_COUNTERS[14u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
            var var_3 = func_9(Struct_2(global1.b, Struct_1(vec3<f32>(_wgslsmith_f_op_f32(-1000f), _wgslsmith_f_op_f32(-952f), 1850f), vec3<u32>(0u | arg_2.x, arg_2.x, 57046u << (1u % 32u)), _wgslsmith_clamp_u32(0u, ~71571u, firstLeadingBit(global0[_wgslsmith_index_u32(35786u, 19u)])), global1.b.d)), firstLeadingBit(countOneBits(select(u_input.d, -u_input.d, vec4<bool>(true, true, global1.a.d.x, global1.b.d.x)))), u_input.a << (func_8(func_7(u_input.d.yyx, !global1.b.d, func_5(Struct_2(Struct_1(global1.a.a, u_input.a, 1u, global1.a.d), global1.a), Struct_2(global1.b, global1.a)), -885f != arg_3)) % vec3<u32>(32u)), func_7(~abs(vec3<i32>(32468i, arg_1, arg_0.x)), vec2<bool>(global1.a.d.x, false), Struct_1(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(global1.b.a.x, -230f, global1.a.a.x) * vec3<f32>(arg_3, arg_3, global1.b.a.x)) - global1.a.a), vec3<u32>(~44815u, _wgslsmith_dot_vec3_u32(vec3<u32>(4294967295u, 46318u, 0u), vec3<u32>(19504u, 1u, arg_2.x)), ~4294967295u), max(global1.b.b.x, ~1u), !func_7(vec3<i32>(1i, arg_1, 0i), vec2<bool>(global1.a.d.x, global1.b.d.x), global1.a, global1.b.d.x).b.d), all(global1.a.d)));
        }
    }
    if ((arg_0.x >= -1i) && true) {
    }
    if (!func_7(-abs(-vec3<i32>(-7153i, arg_0.x, arg_0.x)), global1.b.d, global1.a, true).b.d.x) {
        loop {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            break;
        }
        var var_0 = 21061i;
        var_0 = _wgslsmith_add_i32(arg_1, arg_1);
        switch (9789i) {
            case 0i: {
                var var_1 = global1.a.c;
            }
            case 14912i: {
                let var_1 = Struct_2(global1.b, Struct_1(_wgslsmith_f_op_vec3_f32(select(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-global1.a.a), _wgslsmith_f_op_vec3_f32(-vec3<f32>(global1.b.a.x, arg_3, arg_3))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(arg_3, -356f, arg_3) - global1.b.a) * func_5(Struct_2(global1.b, global1.a), Struct_2(global1.b, global1.b)).a), vec3<bool>(!global1.a.d.x, func_9(Struct_2(Struct_1(vec3<f32>(-542f, 184f, 630f), u_input.a, arg_2.x, global1.a.d), global1.a), u_input.d, global1.b.b, Struct_2(global1.b, Struct_1(global1.a.a, vec3<u32>(u_input.a.x, global1.b.b.x, u_input.c.x), 55320u, vec2<bool>(false, global1.b.d.x)))).d.x, false))), vec3<u32>(global1.a.c ^ 0u, 20302u, countOneBits(_wgslsmith_add_u32(4294967295u, arg_2.x))), 13756u, vec2<bool>(global1.a.d.x, global1.a.d.x)));
                let var_2 = -_wgslsmith_sub_vec2_i32(vec2<i32>(-2591i, arg_1), ~arg_0);
            }
            default: {
                let var_1 = global1.b.d.x;
                var var_2 = select(!(u_input.c.x != _wgslsmith_mod_u32(global1.a.c, firstLeadingBit(global0[_wgslsmith_index_u32(global1.b.c, 19u)]))), global1.b.d.x, global1.a.d.x);
                var_2 = ~_wgslsmith_sub_i32(u_input.d.x, ~20648i) == 2147483647i;
                global1 = func_7(~u_input.b, global1.a.d, func_7(-abs(_wgslsmith_sub_vec3_i32(u_input.b, vec3<i32>(-43641i, 2147483647i, arg_1))), !select(global1.b.d, !global1.a.d, !global1.b.d), global1.b, global1.b.d.x == select(any(vec3<bool>(global1.a.d.x, global1.a.d.x, global1.a.d.x)), !global1.a.d.x, global1.a.d.x)).b, true);
            }
        }
    }
    if (global1.a.d.x) {
        for (var var_0 = -18705i; false; var_0 += 1i) {
            if (LOOP_COUNTERS[16u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
            var_0 = 2147483647i;
            let var_1 = _wgslsmith_div_vec3_i32(countOneBits(vec3<i32>(-_wgslsmith_div_i32(0i, u_input.b.x), ~(-u_input.d.x), arg_1)), abs(vec3<i32>(-1i) * -vec3<i32>(u_input.b.x, u_input.d.x, -1i)));
            let var_2 = firstTrailingBit(u_input.a.x);
            var var_3 = ~arg_2.x;
            var var_4 = abs(var_1);
        }
    }
    let var_0 = global1.b.d;
    return vec3<f32>(-217f, global1.a.a.x, _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-764f + -270f))))));
}

fn func_3(arg_0: bool, arg_1: vec2<f32>) -> bool {
    global1 = Struct_2(Struct_1(_wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(global1.b.a, _wgslsmith_div_vec3_f32(vec3<f32>(-132f, global1.a.a.x, -220f), vec3<f32>(1457f, arg_1.x, -169f))) + global1.a.a), _wgslsmith_sub_vec3_u32(firstLeadingBit(countOneBits(global1.a.b)), u_input.a), 4294967295u, global1.b.d), Struct_1(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(vec3<f32>(global1.b.a.x, -350f, global1.a.a.x), vec3<f32>(global1.b.a.x, 149f, arg_1.x))), _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-global1.b.a), _wgslsmith_f_op_vec3_f32(func_4(u_input.d.xx, u_input.b.x, vec3<u32>(global1.a.b.x, global1.a.c, global0[_wgslsmith_index_u32(0u, 19u)]), -685f)), vec3<bool>(true, true, true)))), firstTrailingBit(max(u_input.a, ~vec3<u32>(41143u, u_input.c.x, global1.a.c))), 0u, select(vec2<bool>(select(true, global1.a.d.x, true), any(vec4<bool>(global1.a.d.x, true, false, false))), !func_9(Struct_2(Struct_1(global1.b.a, vec3<u32>(u_input.c.x, global1.a.c, global1.a.b.x), 0u, global1.a.d), Struct_1(vec3<f32>(-1988f, arg_1.x, -215f), u_input.a, 47094u, vec2<bool>(true, arg_0))), u_input.d, u_input.a, Struct_2(global1.a, global1.b)).d, !global1.b.d)));
    var var_0 = func_7(u_input.b, func_5(Struct_2(global1.a, Struct_1(global1.b.a, u_input.a & vec3<u32>(global0[_wgslsmith_index_u32(u_input.c.x, 19u)], global0[_wgslsmith_index_u32(global1.a.b.x, 19u)], global1.a.c), u_input.a.x, vec2<bool>(true, true))), Struct_2(Struct_1(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1460f, -127f, global1.a.a.x)), select(vec3<u32>(global1.b.b.x, 1u, u_input.a.x), global1.a.b, arg_0), ~74696u, vec2<bool>(false, true)), global1.a)).d, Struct_1(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(870f, arg_1.x, -130f))), ~u_input.a, ~global1.b.b.x, vec2<bool>(true, true)), true).b;
    switch (2147483647i) {
        case 3422i: {
            let var_1 = vec2<u32>(u_input.a.x, ~var_0.c);
            var var_2 = func_7(u_input.b, select(select(!var_0.d, func_5(func_7(vec3<i32>(u_input.b.x, 0i, 22876i), var_0.d, Struct_1(vec3<f32>(-944f, 1765f, 583f), vec3<u32>(global0[_wgslsmith_index_u32(u_input.c.x, 19u)], var_1.x, var_0.c), var_1.x, vec2<bool>(arg_0, var_0.d.x)), arg_0), func_7(u_input.b, vec2<bool>(true, var_0.d.x), Struct_1(vec3<f32>(arg_1.x, -1826f, 620f), vec3<u32>(var_0.c, 0u, 33086u), 5329u, vec2<bool>(true, false)), false)).d, func_7(vec3<i32>(i32(-2147483648), 1i, -7336i), var_0.d, global1.b, false).a.d.x), var_0.d, func_7(abs(~u_input.d.zwz), vec2<bool>(select(arg_0, arg_0, arg_0), true & global1.a.d.x), global1.b, 10816i < max(-1i, u_input.d.x)).b.d), func_9(func_7(vec3<i32>(u_input.b.x, -1i, ~(-34306i)), func_7(-u_input.b, global1.a.d, func_5(Struct_2(global1.a, Struct_1(vec3<f32>(arg_1.x, -1000f, global1.a.a.x), var_0.b, 1u, var_0.d)), Struct_2(Struct_1(var_0.a, vec3<u32>(u_input.c.x, 0u, global0[_wgslsmith_index_u32(global1.a.b.x, 19u)]), 41913u, vec2<bool>(global1.b.d.x, arg_0)), Struct_1(vec3<f32>(135f, var_0.a.x, 1882f), var_0.b, 73711u, global1.a.d))), func_5(Struct_2(global1.a, Struct_1(var_0.a, global1.a.b, var_1.x, var_0.d)), Struct_2(global1.a, Struct_1(vec3<f32>(var_0.a.x, arg_1.x, -598f), vec3<u32>(83291u, 4294967295u, global0[_wgslsmith_index_u32(1u, 19u)]), 45300u, vec2<bool>(arg_0, false)))).d.x).b.d, func_5(Struct_2(Struct_1(vec3<f32>(arg_1.x, arg_1.x, 585f), var_0.b, global1.a.c, var_0.d), global1.a), func_7(u_input.d.zwz, global1.b.d, global1.b, arg_0)), arg_0), u_input.d, global1.b.b, func_7(vec3<i32>(1i, ~58397i, i32(-2147483648)), vec2<bool>(true, global1.a.d.x), global1.a, true)), true);
        }
        case 2147483647i: {
        }
        case -16435i: {
            let var_1 = -u_input.b.x;
            let var_2 = func_9(func_7(max(u_input.b, ~u_input.d.zwz) & _wgslsmith_mult_vec3_i32(u_input.b, abs(u_input.b)), vec2<bool>(true, true), global1.a, !(_wgslsmith_dot_vec4_i32(vec4<i32>(0i, -28913i, -6036i, var_1), vec4<i32>(i32(-2147483648), var_1, u_input.d.x, i32(-2147483648))) >= (u_input.b.x | u_input.b.x))), _wgslsmith_mult_vec4_i32(firstTrailingBit(-u_input.d), u_input.d), _wgslsmith_mod_vec3_u32(global1.a.b, func_7(vec3<i32>(~2147483647i, abs(var_1), func_6(vec2<i32>(i32(-2147483648), u_input.d.x))), !(!global1.a.d), Struct_1(_wgslsmith_f_op_vec3_f32(select(var_0.a, vec3<f32>(2025f, -1707f, -1651f), global1.a.d.x)), ~vec3<u32>(var_0.c, global1.a.c, global1.b.b.x), ~global1.a.b.x, vec2<bool>(true, true)), any(func_5(Struct_2(global1.a, Struct_1(vec3<f32>(1326f, -236f, 670f), global1.b.b, 89747u, vec2<bool>(arg_0, false))), Struct_2(global1.b, global1.a)).d)).a.b), func_7(~vec3<i32>(1i, 61245i, -15086i), vec2<bool>(any(select(vec2<bool>(global1.a.d.x, false), vec2<bool>(arg_0, false), true)), select(global1.b.d.x, true, global1.a.d.x)), Struct_1(vec3<f32>(_wgslsmith_f_op_f32(282f * arg_1.x), _wgslsmith_f_op_f32(arg_1.x - var_0.a.x), arg_1.x), vec3<u32>(_wgslsmith_dot_vec3_u32(global1.b.b, vec3<u32>(var_0.c, 1u, var_0.b.x)), ~global1.a.b.x, global1.b.c), global0[_wgslsmith_index_u32(8291u, 19u)] | (21923u << (u_input.c.x % 32u)), !select(var_0.d, vec2<bool>(false, arg_0), global1.a.d.x)), func_7(u_input.d.xyy, vec2<bool>(true, arg_0), func_7(vec3<i32>(-42444i, 16170i, 2147483647i), global1.a.d, Struct_1(global1.a.a, vec3<u32>(1u, 5356u, u_input.c.x), 0u, global1.a.d), true).a, !arg_0).a.d.x || select(arg_0, !global1.a.d.x, true)));
            loop {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
            }
            for (var var_3 = 2147483647i; false; var_3 += 1i) {
                if (LOOP_COUNTERS[18u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
                let var_4 = vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -1325f), _wgslsmith_f_op_f32(f32(-1f) * -924f), -1037f);
                continue;
            }
            let var_3 = countOneBits(var_0.b);
        }
        default: {
        }
    }
    let var_1 = Struct_1(global1.b.a, max(vec3<u32>(global1.a.b.x, firstTrailingBit(select(global0[_wgslsmith_index_u32(global1.b.b.x, 19u)], global1.a.b.x, false)), global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.c.x >> (var_0.b.x % 32u), 19u)], 19u)]), global1.a.b), _wgslsmith_dot_vec3_u32(~_wgslsmith_sub_vec3_u32(u_input.a, u_input.a), func_8(Struct_2(Struct_1(var_0.a, u_input.a, global1.b.b.x, global1.a.d), global1.a))), func_5(Struct_2(Struct_1(_wgslsmith_f_op_vec3_f32(var_0.a + vec3<f32>(arg_1.x, arg_1.x, arg_1.x)), _wgslsmith_add_vec3_u32(u_input.a, vec3<u32>(56762u, var_0.c, global0[_wgslsmith_index_u32(var_0.b.x, 19u)])), var_0.c, vec2<bool>(false, true)), global1.a), Struct_2(Struct_1(_wgslsmith_f_op_vec3_f32(var_0.a - vec3<f32>(1324f, -656f, arg_1.x)), func_7(vec3<i32>(u_input.d.x, u_input.b.x, 10652i), vec2<bool>(global1.b.d.x, true), global1.a, var_0.d.x).a.b, var_0.c, !vec2<bool>(true, var_0.d.x)), global1.a)).d);
    loop {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
        if (global1.a.d.x) {
            break;
        }
    }
    return (firstTrailingBit(~(-539i)) << (global1.a.b.x % 32u)) > 2147483647i;
}

fn func_2(arg_0: vec3<f32>) -> vec3<i32> {
    for (; (_wgslsmith_mod_u32(0u, firstTrailingBit(~u_input.a.x)) < ~(_wgslsmith_dot_vec4_u32(vec4<u32>(global0[_wgslsmith_index_u32(15871u, 19u)], global0[_wgslsmith_index_u32(global1.b.b.x, 19u)], 73780u, 45737u), vec4<u32>(4294967295u, u_input.c.x, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(34137u, 19u)], 19u)], global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(0u, 19u)], 19u)])) << (~global1.b.b.x % 32u))) || true; ) {
        if (LOOP_COUNTERS[20u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
        if (any(select(vec4<bool>(func_3(global1.b.d.x, vec2<f32>(-2139f, -1576f)), false, global1.b.d.x, true), !vec4<bool>(false, true, global1.b.d.x, global1.b.d.x), select(vec4<bool>(false, false, global1.a.d.x, false), vec4<bool>(true, true, false, global1.b.d.x), vec4<bool>(true, true, true, true)))) | !any(func_7(~u_input.b, select(global1.b.d, vec2<bool>(global1.b.d.x, false), global1.a.d), Struct_1(vec3<f32>(global1.b.a.x, 201f, global1.a.a.x), u_input.a, 0u, global1.a.d), global1.b.d.x || false).a.d)) {
            return firstLeadingBit(u_input.b);
        }
        continue;
    }
    let var_0 = global1.b;
    let var_1 = func_7(vec3<i32>(max(i32(-1i) * -2147483647i, -35502i), -_wgslsmith_mod_i32(-15217i, u_input.b.x), 1i), !(!(!(!global1.b.d))), Struct_1(var_0.a, vec3<u32>(global0[_wgslsmith_index_u32(_wgslsmith_mod_u32(1u, u_input.c.x), 19u)], 77787u, 36622u), ~(func_8(Struct_2(global1.b, global1.b)).x >> (1u % 32u)), vec2<bool>(all(select(vec3<bool>(global1.a.d.x, var_0.d.x, var_0.d.x), vec3<bool>(global1.a.d.x, false, global1.b.d.x), global1.a.d.x)), global1.b.d.x)), func_7(countOneBits(_wgslsmith_div_vec3_i32(vec3<i32>(-8332i, u_input.b.x, 43966i), vec3<i32>(-751i, u_input.b.x, -1i))), func_9(func_7(u_input.b, vec2<bool>(true, global1.a.d.x), Struct_1(vec3<f32>(var_0.a.x, var_0.a.x, 1012f), vec3<u32>(global1.b.b.x, 31677u, u_input.a.x), u_input.a.x, vec2<bool>(false, global1.a.d.x)), var_0.d.x), -u_input.d, vec3<u32>(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(22563u, 19u)], 19u)], 19u)], var_0.b.x, 37707u) | vec3<u32>(var_0.c, var_0.c, 1u), func_7(vec3<i32>(u_input.d.x, i32(-2147483648), -16715i), global1.a.d, global1.a, var_0.d.x)).d, global1.a, false).a.d.x & !func_7(_wgslsmith_clamp_vec3_i32(vec3<i32>(u_input.b.x, u_input.b.x, u_input.d.x), vec3<i32>(1i, u_input.d.x, u_input.d.x), vec3<i32>(u_input.d.x, u_input.d.x, 8907i)), !vec2<bool>(false, global1.b.d.x), global1.a, true).b.d.x);
    var var_2 = min(u_input.a.x, _wgslsmith_sub_u32(~func_5(func_7(u_input.d.xxy, var_1.b.d, Struct_1(vec3<f32>(var_1.b.a.x, -139f, -294f), var_1.b.b, 8737u, vec2<bool>(false, true)), global1.a.d.x), Struct_2(Struct_1(var_0.a, u_input.a, u_input.a.x, vec2<bool>(global1.a.d.x, var_0.d.x)), global1.a)).c, abs(reverseBits(0u << (var_0.c % 32u)))));
    if (func_3(var_1.b.d.x | true, _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-var_1.b.a.xz)))) {
        var var_3 = var_0.d.x;
        for (var var_4: i32; ; var_4 -= 1i) {
            if (LOOP_COUNTERS[21u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
            let var_5 = var_1;
        }
    }
    return (vec3<i32>(-1i) * -(vec3<i32>(-1i) * -u_input.d.yxx)) >> (~((func_7(u_input.d.zxw, vec2<bool>(global1.a.d.x, var_0.d.x), Struct_1(var_1.b.a, vec3<u32>(var_0.c, var_0.b.x, global0[_wgslsmith_index_u32(63515u, 19u)]), 0u, global1.a.d), global1.a.d.x).b.b | (vec3<u32>(var_0.c, 22867u, 0u) ^ vec3<u32>(0u, var_1.a.c, 67564u))) << (var_1.b.b % vec3<u32>(32u))) % vec3<u32>(32u));
}

fn func_1() -> Struct_1 {
    let var_0 = _wgslsmith_dot_vec3_i32(func_2(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(round(global1.b.a)) * _wgslsmith_f_op_vec3_f32(-global1.b.a))), -(u_input.d.yzy >> (u_input.a % vec3<u32>(32u))));
    if (true) {
        loop {
            if (LOOP_COUNTERS[22u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
            global1 = func_7(firstTrailingBit(u_input.d.xzx), select(select(vec2<bool>(false, true), func_5(func_7(u_input.d.wzx, vec2<bool>(true, false), global1.a, global1.b.d.x), func_7(u_input.d.zwx, vec2<bool>(false, false), global1.a, global1.b.d.x)).d, func_9(Struct_2(global1.a, Struct_1(global1.a.a, global1.b.b, 2130u, global1.b.d)), vec4<i32>(34265i, var_0, var_0, i32(-2147483648)) | vec4<i32>(var_0, u_input.d.x, i32(-2147483648), var_0), ~vec3<u32>(global1.b.b.x, global0[_wgslsmith_index_u32(u_input.c.x, 19u)], u_input.a.x), func_7(vec3<i32>(var_0, var_0, -44477i), vec2<bool>(true, global1.b.d.x), Struct_1(vec3<f32>(global1.a.a.x, global1.a.a.x, -581f), u_input.a, 9494u, vec2<bool>(false, false)), global1.a.d.x)).d), global1.b.d, !(!vec2<bool>(false, global1.a.d.x))), global1.b, any(func_5(func_7(u_input.b, vec2<bool>(global1.b.d.x, false), Struct_1(global1.b.a, vec3<u32>(global0[_wgslsmith_index_u32(1u, 19u)], 1u, u_input.a.x), global0[_wgslsmith_index_u32(29623u, 19u)], vec2<bool>(global1.b.d.x, global1.a.d.x)), true), Struct_2(Struct_1(global1.b.a, global1.a.b, 4294967295u, global1.a.d), Struct_1(vec3<f32>(224f, global1.a.a.x, -877f), vec3<u32>(u_input.a.x, u_input.c.x, global1.a.c), 10803u, vec2<bool>(true, false)))).d));
            global1 = func_7(abs(-(~vec3<i32>(var_0, -61901i, var_0) ^ vec3<i32>(-25796i, 1i, u_input.b.x))), func_7(-u_input.d.wzx, select(func_5(func_7(u_input.d.xxx, global1.a.d, global1.a, global1.a.d.x), func_7(u_input.b, global1.b.d, global1.b, true)).d, global1.a.d, func_9(Struct_2(global1.b, Struct_1(vec3<f32>(828f, global1.a.a.x, global1.b.a.x), vec3<u32>(u_input.c.x, global1.b.c, 64946u), global0[_wgslsmith_index_u32(68598u, 19u)], vec2<bool>(global1.a.d.x, true))), u_input.d, global1.a.b, func_7(vec3<i32>(i32(-2147483648), -52576i, -1i), vec2<bool>(global1.b.d.x, true), global1.b, global1.b.d.x)).d), global1.a, !(!(!global1.b.d.x))).b.d, Struct_1(_wgslsmith_f_op_vec3_f32(min(vec3<f32>(1168f, global1.b.a.x, func_5(Struct_2(Struct_1(global1.a.a, vec3<u32>(39297u, 1u, global1.a.b.x), 55246u, vec2<bool>(false, global1.b.d.x)), global1.b), Struct_2(Struct_1(vec3<f32>(global1.a.a.x, global1.a.a.x, -405f), u_input.a, u_input.c.x, global1.a.d), Struct_1(global1.b.a, vec3<u32>(global1.b.c, global1.a.c, global1.b.b.x), 4294967295u, vec2<bool>(global1.a.d.x, false)))).a.x), _wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(vec3<f32>(global1.b.a.x, -1090f, -824f) - global1.b.a))))), ~global1.a.b << ((~vec3<u32>(u_input.a.x, 4294967295u, global0[_wgslsmith_index_u32(u_input.a.x, 19u)]) | u_input.a) % vec3<u32>(32u)), 139238u, vec2<bool>(38203u <= func_7(vec3<i32>(u_input.d.x, u_input.b.x, var_0), vec2<bool>(true, global1.a.d.x), Struct_1(global1.b.a, vec3<u32>(0u, 4294967295u, global0[_wgslsmith_index_u32(global1.a.b.x, 19u)]), global1.a.c, vec2<bool>(false, global1.a.d.x)), global1.a.d.x).a.c, global1.a.d.x)), global1.b.d.x);
            break;
        }
        var var_1 = func_7(u_input.d.yzz, vec2<bool>(global1.a.d.x, !global1.b.d.x), Struct_1(vec3<f32>(587f, 1f, -1000f), ~global1.a.b, global1.a.b.x, vec2<bool>(global1.b.d.x, func_5(func_7(vec3<i32>(2147483647i, u_input.b.x, 20181i), vec2<bool>(false, global1.a.d.x), global1.a, global1.a.d.x), func_7(u_input.b, global1.b.d, Struct_1(global1.b.a, u_input.a, 1u, global1.b.d), global1.a.d.x)).d.x)), true & global1.b.d.x);
        for (; ; ) {
            if (LOOP_COUNTERS[23u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
        }
        for (var var_2 = 36402i; ; var_2 += 1i) {
            if (LOOP_COUNTERS[24u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
            continue;
        }
        let var_2 = global1.a;
    }
    for (var var_1: i32; global1.a.d.x; var_1 -= 1i) {
        if (LOOP_COUNTERS[25u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
        for (var var_2: i32; var_2 != 0i; ) {
            if (LOOP_COUNTERS[26u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
            break;
        }
        for (var var_2 = -24595i; var_2 > 0i; var_2 += 1i) {
            if (LOOP_COUNTERS[27u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[27u] = LOOP_COUNTERS[27u] + 1u;
            var var_3 = _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-856f))));
            var var_4 = vec2<f32>(global1.a.a.x, 828f);
            let var_5 = _wgslsmith_f_op_f32(-973f - -145f);
            break;
        }
    }
    loop {
        if (LOOP_COUNTERS[28u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[28u] = LOOP_COUNTERS[28u] + 1u;
        global0 = array<u32, 19>();
        loop {
            if (LOOP_COUNTERS[29u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[29u] = LOOP_COUNTERS[29u] + 1u;
            var var_1 = global1.a;
            let var_2 = Struct_1(_wgslsmith_f_op_vec3_f32(vec3<f32>(-2594f, _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(var_1.a.x + 513f))), var_1.a.x) + var_1.a), global1.a.b, var_1.c, !var_1.d);
            global0 = array<u32, 19>();
        }
        let var_1 = _wgslsmith_f_op_vec2_f32(min(_wgslsmith_f_op_vec2_f32(-global1.a.a.xx), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(global1.a.a.zz + _wgslsmith_f_op_vec2_f32(global1.a.a.xy - _wgslsmith_f_op_vec2_f32(-global1.b.a.yy))))));
    }
    global1 = Struct_2(Struct_1(_wgslsmith_f_op_vec3_f32(-global1.a.a), vec3<u32>(~(~48400u), ~4294967295u, global1.a.c), 50223u, !vec2<bool>(func_7(u_input.b, global1.b.d, global1.b, true).b.d.x, global1.b.d.x)), global1.b);
    return func_7(~(-vec3<i32>(1i, 2147483647i, i32(-2147483648))) & vec3<i32>(u_input.d.x, _wgslsmith_div_i32(reverseBits(u_input.b.x), 35133i), var_0), vec2<bool>(!(select(var_0, 46790i, global1.b.d.x) <= -68832i), false), func_5(func_7(~u_input.b, vec2<bool>(false, true), global1.a, false), Struct_2(global1.a, Struct_1(global1.a.a, global1.b.b & u_input.a, 0u, !vec2<bool>(true, global1.a.d.x)))), func_9(func_7(~_wgslsmith_mod_vec3_i32(vec3<i32>(u_input.d.x, 0i, -8060i), vec3<i32>(12963i, var_0, 6135i)), func_5(Struct_2(Struct_1(vec3<f32>(-487f, -2121f, 832f), vec3<u32>(global0[_wgslsmith_index_u32(global1.b.c, 19u)], 63127u, 37917u), 1u, vec2<bool>(global1.a.d.x, global1.b.d.x)), global1.a), func_7(vec3<i32>(3495i, var_0, var_0), vec2<bool>(global1.a.d.x, true), Struct_1(vec3<f32>(global1.a.a.x, -438f, global1.a.a.x), u_input.a, global0[_wgslsmith_index_u32(global1.a.c, 19u)], global1.a.d), global1.b.d.x)).d, global1.b, false), abs(vec4<i32>(abs(var_0), -14715i ^ var_0, u_input.d.x, min(var_0, 0i))), func_5(Struct_2(Struct_1(vec3<f32>(856f, global1.b.a.x, global1.b.a.x), global1.b.b, u_input.c.x, vec2<bool>(true, global1.b.d.x)), func_9(Struct_2(global1.a, global1.b), u_input.d, global1.a.b, Struct_2(global1.a, Struct_1(global1.b.a, global1.a.b, u_input.c.x, global1.a.d)))), Struct_2(func_9(Struct_2(Struct_1(global1.a.a, vec3<u32>(u_input.c.x, 4920u, u_input.a.x), 94792u, global1.a.d), Struct_1(global1.a.a, vec3<u32>(53560u, 1u, 1u), 108989u, vec2<bool>(global1.a.d.x, true))), u_input.d, vec3<u32>(u_input.c.x, global1.b.b.x, global1.b.c), Struct_2(Struct_1(vec3<f32>(-544f, -687f, 811f), vec3<u32>(global0[_wgslsmith_index_u32(u_input.a.x, 19u)], 95689u, global1.a.b.x), global1.b.c, vec2<bool>(global1.a.d.x, global1.b.d.x)), Struct_1(global1.b.a, u_input.a, 0u, global1.b.d))), func_7(vec3<i32>(var_0, -33250i, 0i), global1.a.d, global1.b, global1.b.d.x).a)).b, func_7(vec3<i32>(u_input.d.x, func_2(vec3<f32>(-887f, -2492f, 104f)).x, -15854i), vec2<bool>(true, true), func_9(Struct_2(global1.b, Struct_1(global1.a.a, global1.b.b, global1.a.c, global1.b.d)), u_input.d & vec4<i32>(0i, u_input.d.x, 1i, 37466i), vec3<u32>(global0[_wgslsmith_index_u32(global1.b.b.x, 19u)], global0[_wgslsmith_index_u32(40805u, 19u)], 4294967295u), func_7(u_input.b, vec2<bool>(global1.a.d.x, true), global1.a, global1.b.d.x)), any(select(vec4<bool>(false, global1.a.d.x, true, false), vec4<bool>(global1.a.d.x, false, false, true), global1.a.d.x)))).d.x).b;
}

@compute
@workgroup_size(1)
fn main() {
    var var_0 = _wgslsmith_sub_i32(0i, ~u_input.d.x);
    var var_1 = func_1();
    global1 = Struct_2(global1.a, func_9(func_7(~func_2(vec3<f32>(1032f, global1.b.a.x, 712f)), !var_1.d, func_1(), global1.b.d.x), abs(-u_input.d), ~(~(u_input.a >> (vec3<u32>(115524u, var_1.b.x, 16602u) % vec3<u32>(32u)))), func_7(~max(u_input.d.xzz, u_input.b), func_5(func_7(u_input.d.wzx, global1.b.d, Struct_1(global1.a.a, vec3<u32>(0u, u_input.a.x, 4294967295u), u_input.a.x, vec2<bool>(var_1.d.x, var_1.d.x)), true), func_7(vec3<i32>(u_input.d.x, -1i, u_input.b.x), global1.b.d, global1.a, global1.a.d.x)).d, func_5(func_7(vec3<i32>(u_input.b.x, u_input.d.x, 72726i), vec2<bool>(global1.b.d.x, false), Struct_1(vec3<f32>(1328f, var_1.a.x, 1384f), global1.b.b, 2444u, vec2<bool>(true, var_1.d.x)), false), Struct_2(global1.a, Struct_1(vec3<f32>(-1539f, var_1.a.x, 517f), vec3<u32>(4294967295u, global1.a.b.x, var_1.b.x), 1u, var_1.d))), all(vec2<bool>(global1.a.d.x, false)))));
    var var_2 = func_7(firstTrailingBit(u_input.d.xzz), vec2<bool>(u_input.d.x > abs(-11234i), !(_wgslsmith_f_op_f32(-1695f * 1387f) == var_1.a.x)), Struct_1(vec3<f32>(_wgslsmith_f_op_f32(var_1.a.x * -1405f), _wgslsmith_f_op_f32(func_7(u_input.b, vec2<bool>(true, var_1.d.x), global1.b, false).a.a.x - -1512f), -110f), _wgslsmith_mult_vec3_u32(~(~global1.a.b), ~vec3<u32>(u_input.c.x, u_input.a.x, global1.a.b.x)), 43651u, var_1.d), var_1.d.x);
    var var_3 = func_7(u_input.b, vec2<bool>(u_input.d.x < _wgslsmith_div_i32(u_input.d.x, u_input.b.x), all(!select(var_1.d, vec2<bool>(var_2.a.d.x, true), var_2.a.d))), var_2.b, func_5(func_7(func_2(var_2.a.a), func_7(~vec3<i32>(-67234i, u_input.d.x, u_input.d.x), var_2.b.d, global1.b, !global1.a.d.x).b.d, func_7(abs(u_input.b), var_1.d, Struct_1(var_2.a.a, var_1.b, 33804u, vec2<bool>(true, false)), !global1.a.d.x).b, false), Struct_2(var_2.b, Struct_1(vec3<f32>(856f, 702f, 740f), ~u_input.a, var_1.b.x, !vec2<bool>(false, var_2.a.d.x)))).d.x);
    if (global1.a.d.x) {
        let var_4 = _wgslsmith_dot_vec2_u32(vec2<u32>(func_5(func_7(u_input.b, func_9(Struct_2(var_3.a, global1.b), vec4<i32>(u_input.b.x, u_input.d.x, u_input.d.x, -5372i), u_input.a, Struct_2(Struct_1(vec3<f32>(global1.a.a.x, 572f, var_1.a.x), var_1.b, 1u, vec2<bool>(true, false)), Struct_1(var_1.a, vec3<u32>(var_3.a.b.x, global0[_wgslsmith_index_u32(0u, 19u)], var_3.b.c), u_input.a.x, var_1.d))).d, Struct_1(vec3<f32>(562f, var_3.b.a.x, -957f), vec3<u32>(15061u, 4294967295u, 4294967295u), 0u, vec2<bool>(true, true)), func_5(Struct_2(Struct_1(var_1.a, vec3<u32>(u_input.a.x, var_2.b.b.x, u_input.a.x), global1.a.c, var_2.b.d), Struct_1(vec3<f32>(var_2.b.a.x, global1.b.a.x, global1.a.a.x), var_2.a.b, var_2.b.b.x, global1.a.d)), Struct_2(var_3.a, var_2.b)).d.x), func_7(vec3<i32>(u_input.b.x, u_input.b.x, i32(-2147483648)), var_2.a.d, var_3.a, true)).c, _wgslsmith_div_u32(_wgslsmith_add_u32(var_3.a.c, ~global0[_wgslsmith_index_u32(54345u, 19u)]), _wgslsmith_clamp_u32(u_input.c.x, 8172u, var_3.a.b.x | var_1.c))), _wgslsmith_add_vec2_u32(var_3.b.b.xz, ~func_5(func_7(u_input.d.zwz, var_1.d, Struct_1(global1.b.a, var_2.b.b, var_1.b.x, vec2<bool>(var_2.a.d.x, var_1.d.x)), var_1.d.x), func_7(u_input.d.wyw, var_2.b.d, Struct_1(vec3<f32>(-786f, var_1.a.x, 1167f), u_input.a, 37500u, var_1.d), false)).b.yz));
        var_2 = Struct_2(var_3.a, Struct_1(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(round(vec3<f32>(var_2.a.a.x, -1231f, -819f)))), max(vec3<u32>(var_3.a.c | var_2.a.b.x, 1u, 64099u), vec3<u32>(_wgslsmith_dot_vec4_u32(vec4<u32>(global0[_wgslsmith_index_u32(0u, 19u)], var_1.b.x, var_3.a.c, 0u), vec4<u32>(57351u, 4294967295u, 4205u, 32210u)), u_input.a.x, ~1u)), ~(abs(var_4) << (13734u % 32u)), !global1.b.d));
    }
    switch (-_wgslsmith_mod_i32(2147483647i, -(u_input.b.x & abs(u_input.d.x)))) {
        case 1i: {
            let var_4 = func_7(reverseBits(countOneBits(_wgslsmith_clamp_vec3_i32(u_input.d.xzy, vec3<i32>(2147483647i, -68468i, -13938i), vec3<i32>(u_input.b.x, u_input.b.x, u_input.d.x)) >> (~var_3.b.b % vec3<u32>(32u)))), vec2<bool>(all(!(!vec3<bool>(global1.b.d.x, true, true))), false), Struct_1(_wgslsmith_f_op_vec3_f32(step(vec3<f32>(_wgslsmith_f_op_vec3_f32(func_4(vec2<i32>(u_input.d.x, 18721i), 1i, var_3.a.b, var_3.a.a.x)).x, _wgslsmith_f_op_f32(-global1.a.a.x), 513f), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(906f, 239f, -156f))))), _wgslsmith_sub_vec3_u32(u_input.a, vec3<u32>(u_input.a.x, 35860u, 1u)), ~_wgslsmith_sub_u32(reverseBits(var_1.b.x), global0[_wgslsmith_index_u32(_wgslsmith_div_u32(1u, global1.a.b.x), 19u)]), var_1.d), var_2.a.d.x).b;
            var var_5 = func_9(func_7(u_input.d.xzz, vec2<bool>(any(select(vec4<bool>(true, var_3.b.d.x, true, global1.a.d.x), vec4<bool>(global1.b.d.x, false, true, global1.a.d.x), vec4<bool>(true, var_1.d.x, false, var_3.b.d.x))), reverseBits(i32(-2147483648)) < u_input.b.x), var_3.b, var_2.a.d.x), _wgslsmith_mult_vec4_i32(u_input.d, _wgslsmith_sub_vec4_i32(u_input.d, min(-u_input.d, firstTrailingBit(vec4<i32>(7732i, 36714i, u_input.d.x, u_input.d.x))))), ~u_input.a, func_7(vec3<i32>(-2147483647i, max(u_input.b.x, 1i), _wgslsmith_sub_i32(u_input.d.x, -1i)) & _wgslsmith_div_vec3_i32(vec3<i32>(u_input.b.x, u_input.b.x, u_input.b.x) | vec3<i32>(1i, u_input.d.x, -1i), u_input.d.wxw), vec2<bool>(false, any(var_2.a.d)), Struct_1(vec3<f32>(_wgslsmith_f_op_f32(min(global1.b.a.x, var_1.a.x)), -666f, _wgslsmith_f_op_f32(f32(-1f) * -1123f)), vec3<u32>(14471u & var_3.b.c, 53276u, select(22675u, u_input.a.x, var_4.d.x)), reverseBits(43497u), select(!var_2.a.d, func_1().d, !vec2<bool>(false, var_3.b.d.x))), false));
            if (true) {
                var_3 = Struct_2(global1.a, Struct_1(_wgslsmith_f_op_vec3_f32(var_1.a * _wgslsmith_f_op_vec3_f32(-vec3<f32>(1380f, 528f, var_4.a.x))), firstTrailingBit(vec3<u32>(1u, 4294967295u << (var_3.a.b.x % 32u), var_4.c)), func_5(func_7(~vec3<i32>(-61104i, u_input.b.x, -827i), !var_2.a.d, Struct_1(var_4.a, u_input.a, 4294967295u, global1.a.d), var_3.a.d.x), func_7(-vec3<i32>(u_input.b.x, u_input.d.x, u_input.d.x), vec2<bool>(true, true), Struct_1(vec3<f32>(var_2.a.a.x, var_3.a.a.x, global1.a.a.x), var_1.b, var_1.b.x, vec2<bool>(true, true)), var_4.d.x)).c, vec2<bool>(false, true)));
                var var_6 = countOneBits(~0i);
                var var_7 = vec4<bool>(true, any(select(select(vec4<bool>(true, true, true, true), !vec4<bool>(false, var_1.d.x, var_1.d.x, true), vec4<bool>(true, true, true, true)), select(!vec4<bool>(var_2.b.d.x, true, var_2.a.d.x, var_4.d.x), select(vec4<bool>(var_5.d.x, true, true, var_4.d.x), vec4<bool>(true, true, var_1.d.x, global1.a.d.x), var_2.b.d.x), select(vec4<bool>(false, true, true, false), vec4<bool>(true, true, var_3.b.d.x, false), vec4<bool>(true, var_1.d.x, false, true))), vec4<bool>(true, var_5.d.x, func_3(false, vec2<f32>(var_4.a.x, var_4.a.x)), any(vec3<bool>(var_4.d.x, false, false))))), var_5.d.x, true);
                let var_8 = vec2<i32>(-8085i, firstLeadingBit(~_wgslsmith_mult_i32(_wgslsmith_div_i32(u_input.d.x, -78031i), u_input.b.x)));
                var var_9 = false;
            }
            switch (~u_input.d.x) {
                case 14064i: {
                    var var_6 = func_7(u_input.d.yzy, !func_5(func_7(-vec3<i32>(u_input.d.x, u_input.d.x, 8896i), global1.b.d, var_2.b, !var_4.d.x), Struct_2(Struct_1(var_4.a, var_2.b.b, 4294967295u, vec2<bool>(var_4.d.x, var_2.b.d.x)), var_2.a)).d, var_3.b, true);
                    var_0 = _wgslsmith_mult_i32(_wgslsmith_sub_i32(u_input.d.x, _wgslsmith_div_i32(_wgslsmith_add_i32(u_input.d.x, u_input.b.x) | -u_input.b.x, abs(i32(-2147483648)))), 0i);
                    let var_7 = true;
                    var var_8 = func_7(_wgslsmith_sub_vec3_i32(~func_2(global1.b.a) | _wgslsmith_add_vec3_i32(vec3<i32>(5452i, -76937i, i32(-2147483648)), u_input.d.xyx), ~(~(~vec3<i32>(u_input.d.x, -63588i, u_input.d.x)))), func_1().d, Struct_1(_wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(func_9(Struct_2(var_4, global1.b), u_input.d, global1.b.b, Struct_2(var_2.b, var_3.a)).a * _wgslsmith_f_op_vec3_f32(-vec3<f32>(var_5.a.x, -1253f, var_2.a.a.x))))), ~(~reverseBits(u_input.a)), _wgslsmith_div_u32(~15867u, 1u), vec2<bool>(var_2.a.d.x, var_6.b.d.x)), u_input.d.x != func_6(_wgslsmith_mult_vec2_i32(u_input.b.yz, ~vec2<i32>(u_input.d.x, u_input.b.x)))).a.c;
                }
                case 2147483647i: {
                }
                case 11020i: {
                }
                default: {
                }
            }
            if (any(vec3<bool>(!select(true, !var_4.d.x, func_7(u_input.b, var_4.d, var_4, var_3.b.d.x).b.d.x), func_5(Struct_2(var_3.b, Struct_1(var_3.b.a, vec3<u32>(var_5.c, var_2.a.b.x, var_4.b.x), 58773u, var_2.b.d)), Struct_2(var_2.a, Struct_1(var_2.b.a, vec3<u32>(global1.a.b.x, global0[_wgslsmith_index_u32(1u, 19u)], 0u), u_input.c.x, vec2<bool>(false, var_4.d.x)))).d.x, false))) {
            }
        }
        default: {
        }
    }
    if (!var_2.b.d.x) {
        for (var var_4 = 2147483647i; global1.a.d.x; var_4 += 1i) {
            if (LOOP_COUNTERS[30u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[30u] = LOOP_COUNTERS[30u] + 1u;
            var_1 = func_1();
            continue;
        }
        var_1 = func_9(func_7(firstLeadingBit(~(vec3<i32>(34041i, u_input.b.x, -13670i) & u_input.b)), vec2<bool>(func_9(Struct_2(Struct_1(var_1.a, vec3<u32>(32765u, var_3.b.c, global1.a.c), var_3.b.b.x, vec2<bool>(true, var_1.d.x)), Struct_1(vec3<f32>(var_3.b.a.x, -516f, global1.a.a.x), u_input.a, 1u, var_1.d)), u_input.d, abs(u_input.a), func_7(u_input.b, vec2<bool>(false, false), var_3.b, true)).d.x, select(var_2.a.d.x, true, var_3.a.d.x)), global1.b, true), _wgslsmith_div_vec4_i32(reverseBits(_wgslsmith_mod_vec4_i32(-u_input.d, select(u_input.d, vec4<i32>(u_input.d.x, u_input.d.x, -24032i, u_input.b.x), false))), u_input.d), vec3<u32>(firstLeadingBit(max(u_input.c.x, 4294967295u) >> (global1.a.c % 32u)), abs(firstLeadingBit(abs(var_1.c))), _wgslsmith_div_u32(min(~global0[_wgslsmith_index_u32(var_2.a.c, 19u)], ~u_input.c.x), var_2.b.b.x)), func_7(vec3<i32>(u_input.b.x << (~var_1.b.x % 32u), (u_input.b.x ^ -13397i) << (126511u % 32u), u_input.b.x ^ 0i), var_3.b.d, Struct_1(var_3.a.a, _wgslsmith_mult_vec3_u32(vec3<u32>(0u, 4294967295u, 1u), global1.a.b) << ((vec3<u32>(16792u, u_input.a.x, 1u) >> (var_3.a.b % vec3<u32>(32u))) % vec3<u32>(32u)), global1.a.b.x & _wgslsmith_sub_u32(var_2.b.c, 56294u), vec2<bool>(var_1.d.x, global1.b.d.x && var_2.b.d.x)), any(select(!vec3<bool>(false, false, var_2.b.d.x), !vec3<bool>(false, global1.b.d.x, false), vec3<bool>(var_1.d.x, true, var_1.d.x)))));
        if (var_1.d.x) {
        }
        for (var var_4 = -37930i; false; ) {
            if (LOOP_COUNTERS[31u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[31u] = LOOP_COUNTERS[31u] + 1u;
            continue;
        }
        var_1 = Struct_1(vec3<f32>(_wgslsmith_div_f32(var_1.a.x, func_1().a.x), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_1.a.x) * _wgslsmith_f_op_f32(f32(-1f) * -1000f)), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(246f, var_2.b.a.x))), countOneBits(select(vec3<u32>(func_8(Struct_2(Struct_1(global1.a.a, u_input.a, global1.b.b.x, vec2<bool>(var_3.b.d.x, true)), var_3.a)).x, var_3.b.b.x, _wgslsmith_mult_u32(global1.a.b.x, var_1.b.x)), ~(vec3<u32>(var_3.a.b.x, var_3.a.b.x, var_1.b.x) >> (var_1.b % vec3<u32>(32u))), var_2.b.d.x)), max(~global0[_wgslsmith_index_u32(_wgslsmith_dot_vec2_u32(vec2<u32>(27008u, 4294967295u), _wgslsmith_clamp_vec2_u32(var_2.b.b.xx, global1.a.b.xz, var_3.a.b.zz)), 19u)], 231u), func_9(func_7(select(u_input.d.yxw, vec3<i32>(u_input.d.x, 0i, u_input.d.x) ^ vec3<i32>(u_input.b.x, -51170i, u_input.d.x), !vec3<bool>(true, var_3.a.d.x, var_2.b.d.x)), var_1.d, Struct_1(_wgslsmith_f_op_vec3_f32(vec3<f32>(804f, -965f, 742f) * vec3<f32>(-1000f, var_2.a.a.x, var_2.a.a.x)), _wgslsmith_div_vec3_u32(vec3<u32>(global1.b.b.x, var_1.b.x, var_1.b.x), vec3<u32>(13601u, global0[_wgslsmith_index_u32(0u, 19u)], 1u)), var_2.a.c, func_7(u_input.d.yzy, global1.b.d, Struct_1(vec3<f32>(598f, var_1.a.x, 1216f), var_1.b, u_input.c.x, var_2.b.d), false).a.d), var_3.a.d.x), vec4<i32>(u_input.d.x, (u_input.b.x >> (global1.b.b.x % 32u)) | -3625i, u_input.d.x, _wgslsmith_mod_i32(1i, -1i)), vec3<u32>(var_3.b.b.x, u_input.a.x, var_3.a.b.x), Struct_2(global1.a, var_3.a)).d);
    }
    var var_4 = !select(vec4<bool>(var_2.b.d.x, var_2.a.d.x, false, true), select(!select(vec4<bool>(var_1.d.x, true, true, var_3.b.d.x), vec4<bool>(global1.b.d.x, global1.a.d.x, true, var_1.d.x), vec4<bool>(true, var_1.d.x, false, global1.b.d.x)), !(!vec4<bool>(true, var_1.d.x, var_2.a.d.x, var_1.d.x)), select(select(vec4<bool>(var_1.d.x, var_2.b.d.x, var_3.b.d.x, var_3.b.d.x), vec4<bool>(global1.b.d.x, true, true, true), vec4<bool>(var_1.d.x, true, true, global1.a.d.x)), !vec4<bool>(var_1.d.x, true, global1.a.d.x, var_1.d.x), true)), select(!vec4<bool>(global1.a.d.x, false, false, var_3.a.d.x), !(!vec4<bool>(var_2.a.d.x, false, false, false)), _wgslsmith_add_u32(global0[_wgslsmith_index_u32(var_3.a.c, 19u)], u_input.a.x) <= (var_2.b.b.x >> (global0[_wgslsmith_index_u32(1u, 19u)] % 32u))));
    let x = u_input.a;
    s_output = StorageBuffer(func_1().b.xy);
}

`;