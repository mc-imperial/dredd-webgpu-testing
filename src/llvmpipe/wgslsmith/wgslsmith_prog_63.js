export const input = [61,136,36,35,92,219,54,18,38,236,134,253,178,136,113,195,190,29,84,67,134,223,79,232,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [61,136,36,35,92,219,54,18,38,236,134,253,178,136,113,195,190,29,84,67,134,223,79,232,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[61,136,36,35,92,219,54,18,38,236,134,253,178,136,113,195,190,29,84,67,134,223,79,232]}
// Seed: 11009851508551129510

struct Struct_1 {
    a: vec3<f32>,
}

struct Struct_2 {
    a: i32,
    b: Struct_1,
    c: Struct_1,
}

struct Struct_3 {
    a: bool,
    b: Struct_2,
}

struct Struct_4 {
    a: u32,
}

struct Struct_5 {
    a: vec4<bool>,
}

struct UniformBuffer {
    a: i32,
    b: vec2<u32>,
    c: u32,
    d: u32,
}

struct StorageBuffer {
    a: u32,
    b: vec2<i32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: vec4<u32>;

var<private> global1: array<bool, 6>;

var<private> LOOP_COUNTERS: array<u32, 30>;

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn func_4(arg_0: vec4<f32>, arg_1: bool) -> i32 {
    var var_0 = global0.x;
    let var_1 = 1u;
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
    }
    let var_2 = u_input.b;
    var var_3 = arg_0.x;
    return ~max(select(28549i, ~(1i | u_input.a), true & (true != arg_1)), 2147483647i);
}

fn func_6(arg_0: vec4<bool>, arg_1: bool) -> u32 {
    global1 = array<bool, 6>();
    global1 = array<bool, 6>();
    let var_0 = Struct_4(48470u);
    let var_1 = Struct_5(arg_0);
    for (; 2147483647i <= (7886i | (_wgslsmith_add_i32(u_input.a << (var_0.a % 32u), u_input.a) << (_wgslsmith_dot_vec3_u32(vec3<u32>(0u, var_0.a, 1559u), global0.wyy >> (vec3<u32>(4294967295u, u_input.b.x, 57949u) % vec3<u32>(32u))) % 32u))); ) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        switch (_wgslsmith_add_i32(_wgslsmith_mod_i32(-27851i << (u_input.c % 32u), _wgslsmith_sub_i32(10318i, u_input.a)), 12162i)) {
            default: {
                global1 = array<bool, 6>();
                let var_2 = Struct_1(_wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(657f, -1593f, -186f) * vec3<f32>(-1116f, 2025f, 380f)))))));
            }
        }
        let var_2 = var_0;
        switch (u_input.a) {
            case 2147483647i: {
                var var_3 = vec4<i32>(~2147483647i, abs(-u_input.a), 1i, u_input.a) ^ -(~(vec4<i32>(u_input.a, u_input.a, u_input.a, 38027i) | vec4<i32>(u_input.a, u_input.a, -7221i, -15517i)) & -min(vec4<i32>(u_input.a, u_input.a, 39618i, u_input.a), vec4<i32>(u_input.a, -34320i, u_input.a, u_input.a)));
            }
            case 0i: {
                global1 = array<bool, 6>();
                continue;
            }
            case 41714i: {
                var var_3 = ~abs(vec4<u32>(0u, _wgslsmith_div_u32(58522u, var_0.a), _wgslsmith_dot_vec3_u32(global0.wxy, vec3<u32>(35746u, global0.x, u_input.d)), 23274u));
                var var_4 = -vec4<i32>(-39803i, u_input.a >> (var_3.x % 32u), firstLeadingBit(abs(max(1i, 2147483647i))), u_input.a);
                var_4 = abs(~(~vec4<i32>(-var_4.x, i32(-2147483648) ^ u_input.a, 16180i, 33304i)));
            }
            case -59765i: {
                break;
            }
            default: {
                var var_3 = Struct_5(!select(var_1.a, vec4<bool>(var_1.a.x, true, !arg_0.x, all(vec4<bool>(false, true, true, arg_1))), var_1.a));
                let var_4 = firstLeadingBit(u_input.a);
                let var_5 = !(var_1.a.x & true);
            }
        }
        break;
    }
    return countOneBits(u_input.b.x);
}

fn func_5() -> Struct_3 {
    global0 = vec4<u32>(~103421u, 1u, ~38918u, u_input.d);
    let var_0 = Struct_4(4294967295u);
    let var_1 = !all(select(!(!vec4<bool>(false, false, global1[_wgslsmith_index_u32(var_0.a, 6u)], global1[_wgslsmith_index_u32(22980u, 6u)])), vec4<bool>(true, global1[_wgslsmith_index_u32(~var_0.a, 6u)], global1[_wgslsmith_index_u32(u_input.c, 6u)], any(vec3<bool>(true, true, false))), global1[_wgslsmith_index_u32(1u, 6u)]));
    loop {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        let var_2 = select(vec4<bool>(false, 1i < ~firstTrailingBit(u_input.a), !(!global1[_wgslsmith_index_u32(func_6(vec4<bool>(false, global1[_wgslsmith_index_u32(u_input.d, 6u)], false, global1[_wgslsmith_index_u32(var_0.a, 6u)]), false), 6u)]), true), select(vec4<bool>(true, !select(true, global1[_wgslsmith_index_u32(1u, 6u)], global1[_wgslsmith_index_u32(global0.x, 6u)]), false, true), vec4<bool>(true, global1[_wgslsmith_index_u32(select(min(0u, var_0.a), ~var_0.a, true), 6u)], select(!var_1, global1[_wgslsmith_index_u32(3992u, 6u)], -8802i >= u_input.a), true), vec4<bool>(any(!vec3<bool>(true, var_1, global1[_wgslsmith_index_u32(4294967295u, 6u)])), true, false, !global1[_wgslsmith_index_u32(~4294967295u, 6u)])), var_1);
        var var_3 = vec2<f32>(-1000f, _wgslsmith_f_op_f32(-625f));
    }
    var var_2 = true;
    return Struct_3(any(select(select(vec4<bool>(true, true, global1[_wgslsmith_index_u32(u_input.b.x, 6u)], true), select(vec4<bool>(global1[_wgslsmith_index_u32(0u, 6u)], false, false, false), vec4<bool>(var_1, var_1, global1[_wgslsmith_index_u32(u_input.d, 6u)], false), global1[_wgslsmith_index_u32(30116u, 6u)]), !vec4<bool>(false, false, var_1, false)), select(!vec4<bool>(var_1, false, global1[_wgslsmith_index_u32(0u, 6u)], true), vec4<bool>(global1[_wgslsmith_index_u32(var_0.a, 6u)], false, false, false), true), false)), Struct_2(i32(-1i) * -_wgslsmith_add_i32(u_input.a, -1i), Struct_1(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(step(vec3<f32>(139f, 105f, -1160f), vec3<f32>(142f, 571f, -1938f))) + _wgslsmith_f_op_vec3_f32(vec3<f32>(1864f, 1185f, 105f) * vec3<f32>(-1568f, -1283f, 493f)))), Struct_1(_wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1309f, 547f, -665f)))))));
}

fn func_7(arg_0: Struct_4, arg_1: Struct_3, arg_2: u32, arg_3: Struct_4) -> i32 {
    var var_0 = countOneBits(vec3<u32>(global0.x, 32852u, u_input.c));
    switch (808i) {
        case 2147483647i: {
            let var_1 = ~vec2<i32>(1i, _wgslsmith_dot_vec3_i32(~vec3<i32>(-9232i, u_input.a, arg_1.b.a) & _wgslsmith_mod_vec3_i32(vec3<i32>(u_input.a, arg_1.b.a, arg_1.b.a), vec3<i32>(2147483647i, 0i, arg_1.b.a)), vec3<i32>(firstTrailingBit(u_input.a), arg_1.b.a, 44092i)));
            if (!any(select(vec2<bool>(arg_1.a, global1[_wgslsmith_index_u32(54924u, 6u)]), select(vec2<bool>(arg_1.a, true), vec2<bool>(true, false), global1[_wgslsmith_index_u32(global0.x, 6u)]), vec2<bool>(arg_1.a, true))) | all(vec3<bool>(global1[_wgslsmith_index_u32((global0.x | arg_2) << (abs(1u) % 32u), 6u)], false & (arg_1.a == true), any(vec4<bool>(arg_1.a, global1[_wgslsmith_index_u32(54414u, 6u)], false, arg_1.a)) | (1260f != arg_1.b.b.a.x)))) {
            }
            global0 = _wgslsmith_mod_vec4_u32(vec4<u32>(_wgslsmith_div_u32(_wgslsmith_mult_u32(arg_2, 83400u), _wgslsmith_sub_u32(0u, arg_0.a)), _wgslsmith_mult_u32(abs(4294967295u), ~global0.x), max(arg_3.a, global0.x), 0u) << (select(_wgslsmith_add_vec4_u32(~vec4<u32>(u_input.c, 65219u, arg_0.a, arg_3.a), countOneBits(vec4<u32>(0u, 0u, u_input.c, 29141u))), ~(~vec4<u32>(var_0.x, 63958u, global0.x, 4294967295u)), arg_1.a) % vec4<u32>(32u)), _wgslsmith_add_vec4_u32(vec4<u32>(~global0.x, arg_3.a, u_input.b.x, arg_2), select(vec4<u32>(u_input.c, 49458u, 4294967295u, u_input.b.x) << (~vec4<u32>(u_input.c, var_0.x, 0u, 4294967295u) % vec4<u32>(32u)), min(vec4<u32>(4294967295u, 41683u, 46703u, 4294967295u), vec4<u32>(43668u, arg_0.a, 68118u, 66008u)) & vec4<u32>(arg_2, 5565u, 4294967295u, 66925u), all(vec4<bool>(true, true, global1[_wgslsmith_index_u32(4294967295u, 6u)], global1[_wgslsmith_index_u32(var_0.x, 6u)])))));
            var var_2 = var_1;
        }
        default: {
            var var_1 = vec4<u32>(var_0.x | _wgslsmith_mod_u32(arg_3.a, var_0.x), _wgslsmith_dot_vec3_u32(~(~reverseBits(global0.zyy)), _wgslsmith_mod_vec3_u32(reverseBits(_wgslsmith_mod_vec3_u32(vec3<u32>(u_input.c, 0u, 1u), global0.wwy)), vec3<u32>(~global0.x, 4294967295u, _wgslsmith_dot_vec4_u32(vec4<u32>(1u, u_input.d, arg_3.a, arg_3.a), vec4<u32>(1u, arg_3.a, 41327u, 10133u))))), 4294967295u, ~(~0u));
        }
    }
    let var_1 = Struct_1(arg_1.b.c.a);
    var var_2 = global0.yzw;
    var_2 = ~(firstLeadingBit(abs(~vec3<u32>(arg_2, 0u, 35481u))) >> (~vec3<u32>(arg_0.a, ~arg_3.a, _wgslsmith_dot_vec4_u32(vec4<u32>(16261u, arg_0.a, 49040u, global0.x), vec4<u32>(1u, 95386u, 17106u, 1812u))) % vec3<u32>(32u)));
    return u_input.a;
}

fn func_3(arg_0: vec2<f32>, arg_1: vec2<f32>) -> Struct_1 {
    if (!((!(!global1[_wgslsmith_index_u32(4294967295u, 6u)]) & false) | (!(arg_1.x >= arg_1.x) || !all(vec3<bool>(true, global1[_wgslsmith_index_u32(u_input.d, 6u)], global1[_wgslsmith_index_u32(30978u, 6u)]))))) {
        for (var var_0 = _wgslsmith_mod_i32(_wgslsmith_div_i32(_wgslsmith_clamp_i32(0i, func_4(_wgslsmith_f_op_vec4_f32(abs(vec4<f32>(1000f, -938f, 420f, 1114f))), false), countOneBits(~u_input.a)), u_input.a), ~2147483647i); global1[_wgslsmith_index_u32(31341u, 6u)]; var_0 -= 1i) {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            continue;
        }
    }
    switch (func_7(Struct_4(~u_input.d), func_5(), 1u, Struct_4(_wgslsmith_clamp_u32(u_input.d, ~1u, u_input.d)))) {
        case 1i: {
        }
        case 50439i: {
            let var_0 = 2147483647i;
            global1 = array<bool, 6>();
            global1 = array<bool, 6>();
            for (var var_1 = 1i; var_1 <= -23605i; var_1 -= 1i) {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                let var_2 = !select(!select(vec2<bool>(true, global1[_wgslsmith_index_u32(1u, 6u)]), select(vec2<bool>(global1[_wgslsmith_index_u32(1u, 6u)], false), vec2<bool>(false, false), global1[_wgslsmith_index_u32(1u, 6u)]), select(vec2<bool>(global1[_wgslsmith_index_u32(0u, 6u)], global1[_wgslsmith_index_u32(15492u, 6u)]), vec2<bool>(global1[_wgslsmith_index_u32(4294967295u, 6u)], global1[_wgslsmith_index_u32(global0.x, 6u)]), false)), select(select(vec2<bool>(global1[_wgslsmith_index_u32(global0.x, 6u)], global1[_wgslsmith_index_u32(4294967295u, 6u)]), vec2<bool>(true, true), false), vec2<bool>(global1[_wgslsmith_index_u32(global0.x, 6u)], any(vec2<bool>(false, true))), !(global1[_wgslsmith_index_u32(96519u, 6u)] & true)), global1[_wgslsmith_index_u32(select(u_input.c, _wgslsmith_clamp_u32(global0.x, global0.x, _wgslsmith_dot_vec4_u32(vec4<u32>(23734u, u_input.c, global0.x, 1u), vec4<u32>(4294967295u, global0.x, u_input.b.x, 114534u))), any(vec3<bool>(global1[_wgslsmith_index_u32(1u, 6u)], global1[_wgslsmith_index_u32(u_input.c, 6u)], false))), 6u)]);
                var var_3 = vec3<f32>(arg_0.x, arg_1.x, -426f);
                return Struct_1(_wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(796f, arg_0.x, 1118f) - vec3<f32>(arg_1.x, -1250f, -1000f))))))));
            }
        }
        case -5394i: {
            loop {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                break;
            }
        }
        case 0i: {
            global0 = vec4<u32>(~func_6(select(!vec4<bool>(false, false, true, global1[_wgslsmith_index_u32(4149u, 6u)]), vec4<bool>(false, global1[_wgslsmith_index_u32(global0.x, 6u)], global1[_wgslsmith_index_u32(28242u, 6u)], false), vec4<bool>(false, false, global1[_wgslsmith_index_u32(0u, 6u)], false)), true || global1[_wgslsmith_index_u32(33050u, 6u)]), reverseBits(abs(global0.x)), ~(~firstTrailingBit(_wgslsmith_add_u32(u_input.c, 17278u))), ~_wgslsmith_add_u32(func_6(select(vec4<bool>(true, true, true, global1[_wgslsmith_index_u32(global0.x, 6u)]), vec4<bool>(true, global1[_wgslsmith_index_u32(0u, 6u)], global1[_wgslsmith_index_u32(1u, 6u)], true), vec4<bool>(false, global1[_wgslsmith_index_u32(u_input.d, 6u)], true, true)), any(vec3<bool>(true, true, global1[_wgslsmith_index_u32(24775u, 6u)]))), 24702u));
            switch (1i) {
                case 0i: {
                    let var_0 = _wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(-func_5().b.c.a.x), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_1.x))), arg_0.x, arg_0.x) * _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(382f, arg_1.x, arg_1.x, arg_1.x)))), _wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(vec4<f32>(arg_1.x, arg_1.x, arg_1.x, arg_0.x), vec4<f32>(1586f, 1315f, -726f, arg_1.x)) * _wgslsmith_f_op_vec4_f32(vec4<f32>(-940f, -1929f, arg_1.x, arg_0.x) - vec4<f32>(arg_0.x, arg_0.x, arg_0.x, -1457f))))) + _wgslsmith_f_op_vec4_f32(floor(vec4<f32>(arg_0.x, _wgslsmith_f_op_f32(trunc(arg_0.x)), arg_1.x, _wgslsmith_f_op_f32(-1104f + -2080f))))));
                    let var_1 = _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(arg_0.x * arg_1.x), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(672f * -2137f), _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(step(-2022f, arg_1.x)))))), !(!global1[_wgslsmith_index_u32(max(1u, 1u), 6u)])))));
                    var var_2 = Struct_1(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(select(vec3<f32>(var_1, arg_0.x, 845f), _wgslsmith_f_op_vec3_f32(trunc(var_0.wwx)), any(vec2<bool>(true, global1[_wgslsmith_index_u32(3068u, 6u)])))), _wgslsmith_f_op_vec3_f32(-vec3<f32>(var_1, arg_1.x, arg_1.x)))) * _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(select(var_0.yyy, _wgslsmith_f_op_vec3_f32(-vec3<f32>(-1557f, arg_0.x, var_0.x)), vec3<bool>(false, false, true))))));
                    let var_3 = vec4<u32>(u_input.d, (_wgslsmith_sub_u32(4294967295u | u_input.c, global0.x >> (0u % 32u)) >> (global0.x % 32u)) >> (~29678u % 32u), global0.x, 76985u ^ _wgslsmith_clamp_u32(0u, min(1u, ~global0.x), u_input.b.x));
                }
                case 62690i: {
                    global1 = array<bool, 6>();
                }
                case i32(-2147483648): {
                    var var_0 = func_5().b.b;
                }
                default: {
                    global1 = array<bool, 6>();
                    global1 = array<bool, 6>();
                    let var_0 = Struct_5(vec4<bool>(true, true, global1[_wgslsmith_index_u32(~global0.x, 6u)], !any(vec2<bool>(true, global1[_wgslsmith_index_u32(13532u, 6u)]))));
                    global0 = min(~vec4<u32>(u_input.b.x, _wgslsmith_dot_vec2_u32(global0.wz, ~u_input.b), max(global0.x << (4470u % 32u), countOneBits(u_input.d)), global0.x), vec4<u32>(global0.x, u_input.c, 40547u, ~(~42718u)) << (vec4<u32>(u_input.c, ~(~u_input.d), ~(~40080u), countOneBits(_wgslsmith_add_u32(0u, 1u))) % vec4<u32>(32u)));
                    var var_1 = var_0.a.zw;
                }
            }
            global0 = vec4<u32>(30436u, _wgslsmith_mult_u32(select(~_wgslsmith_div_u32(10235u, 95234u), u_input.d, global1[_wgslsmith_index_u32(max(u_input.b.x, u_input.b.x) << (u_input.b.x % 32u), 6u)]), u_input.c ^ ~global0.x), global0.x, u_input.c << (~u_input.d % 32u));
        }
        default: {
            global1 = array<bool, 6>();
            var var_0 = _wgslsmith_sub_vec3_u32(global0.zwz, vec3<u32>(u_input.d, 4294967295u, ~firstLeadingBit(global0.x >> (global0.x % 32u))));
            global0 = _wgslsmith_add_vec4_u32(~vec4<u32>(global0.x, u_input.d, _wgslsmith_mult_u32(~u_input.c, global0.x), 0u), ~firstTrailingBit(vec4<u32>(global0.x, var_0.x, ~0u, u_input.c)));
            var_0 = reverseBits(global0.zwy);
            var var_1 = _wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_0.x, -1333f, _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-arg_1.x))), 791f));
        }
    }
    global0 = _wgslsmith_add_vec4_u32(vec4<u32>(0u, 4294967295u, ~(~1u), 30164u), min(~(select(vec4<u32>(46100u, 4294967295u, u_input.d, u_input.d), vec4<u32>(u_input.c, global0.x, 88136u, 4294967295u), vec4<bool>(global1[_wgslsmith_index_u32(61441u, 6u)], false, false, true)) << (~vec4<u32>(global0.x, 4294967295u, 12329u, 4294967295u) % vec4<u32>(32u))), vec4<u32>(~4294967295u, _wgslsmith_mult_u32(8550u, ~u_input.b.x), 0u, countOneBits(_wgslsmith_clamp_u32(global0.x, 0u, 4392u)))));
    global0 = _wgslsmith_add_vec4_u32(~(vec4<u32>(~1u, ~global0.x, 1u, firstTrailingBit(u_input.c)) | min(vec4<u32>(global0.x, u_input.b.x, global0.x, 1u), ~vec4<u32>(4294967295u, 23382u, 1u, 36984u))), firstLeadingBit(vec4<u32>(u_input.b.x, global0.x, abs(10148u), u_input.b.x)));
    switch (-max(~(~_wgslsmith_dot_vec2_i32(vec2<i32>(3483i, 9045i), vec2<i32>(2147483647i, u_input.a))), _wgslsmith_mult_i32(~(u_input.a | u_input.a), u_input.a))) {
        case -1i: {
            var var_0 = firstTrailingBit(16061u) & _wgslsmith_dot_vec2_u32(vec2<u32>(99890u, u_input.b.x | u_input.b.x) ^ (u_input.b ^ (u_input.b ^ vec2<u32>(u_input.c, 0u))), _wgslsmith_add_vec2_u32(~(vec2<u32>(1u, global0.x) & vec2<u32>(4294967295u, u_input.c)), firstTrailingBit(~vec2<u32>(global0.x, 15198u))));
        }
        case -11593i: {
            if (global1[_wgslsmith_index_u32(reverseBits(2044u), 6u)]) {
                var var_0 = vec4<u32>(global0.x, ~89241u | _wgslsmith_dot_vec3_u32(_wgslsmith_mod_vec3_u32(vec3<u32>(0u, 29801u, global0.x) | global0.yzz, ~global0.zwy), vec3<u32>(~global0.x, reverseBits(global0.x), global0.x)), 25734u, u_input.b.x);
                global1 = array<bool, 6>();
                let var_1 = reverseBits(countOneBits(firstLeadingBit(firstLeadingBit(abs(24667u)))));
                let var_2 = ~_wgslsmith_clamp_vec4_u32(_wgslsmith_div_vec4_u32(vec4<u32>(global0.x, abs(1u), ~var_1, 1u), _wgslsmith_add_vec4_u32(vec4<u32>(8167u, 52454u, 48654u, u_input.c), vec4<u32>(4294967295u, 16130u, u_input.c, 17767u)) ^ _wgslsmith_mult_vec4_u32(vec4<u32>(25502u, u_input.b.x, 39424u, 43193u), vec4<u32>(1u, var_1, var_0.x, 1u))), vec4<u32>(~_wgslsmith_mod_u32(var_1, var_1), _wgslsmith_add_u32(_wgslsmith_mod_u32(20055u, 43589u), var_1), var_0.x, ~53533u & var_0.x), _wgslsmith_mod_vec4_u32(select(~vec4<u32>(4294967295u, global0.x, 4700u, var_0.x), vec4<u32>(699u, 23714u, 4294967295u, global0.x), global1[_wgslsmith_index_u32(u_input.c, 6u)] && true), firstLeadingBit(_wgslsmith_div_vec4_u32(vec4<u32>(23953u, 1u, 0u, 20335u), vec4<u32>(811u, 20791u, 28523u, var_1)))));
            }
            let var_0 = u_input.b;
            for (var var_1 = -58491i; var_1 != 2147483647i; global0 = ~select(reverseBits(vec4<u32>(1u, _wgslsmith_div_u32(var_0.x, 1u), 56022u, u_input.d)), min(abs(~vec4<u32>(u_input.b.x, var_0.x, global0.x, u_input.d)), _wgslsmith_sub_vec4_u32(vec4<u32>(global0.x, 18747u, 4294967295u, 44447u) << (vec4<u32>(var_0.x, 47324u, global0.x, u_input.d) % vec4<u32>(32u)), vec4<u32>(u_input.c, 1108u, 98948u, 51961u))), any(vec2<bool>(false, true)))) {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                var var_2 = countOneBits(vec3<i32>(firstTrailingBit(~(-u_input.a)), u_input.a, u_input.a));
                global1 = array<bool, 6>();
                let var_3 = select(!vec4<bool>(global1[_wgslsmith_index_u32(_wgslsmith_mod_u32(~u_input.d, global0.x), 6u)], global1[_wgslsmith_index_u32(1u, 6u)], !all(vec3<bool>(global1[_wgslsmith_index_u32(50087u, 6u)], global1[_wgslsmith_index_u32(var_0.x, 6u)], false)), true), select(vec4<bool>(global1[_wgslsmith_index_u32(20277u, 6u)], any(!vec2<bool>(false, global1[_wgslsmith_index_u32(global0.x, 6u)])), !(!global1[_wgslsmith_index_u32(global0.x, 6u)]), false), !select(vec4<bool>(global1[_wgslsmith_index_u32(1u, 6u)], global1[_wgslsmith_index_u32(3704u, 6u)], false, false), vec4<bool>(global1[_wgslsmith_index_u32(38133u, 6u)], global1[_wgslsmith_index_u32(u_input.b.x, 6u)], global1[_wgslsmith_index_u32(0u, 6u)], true), select(vec4<bool>(true, false, true, global1[_wgslsmith_index_u32(global0.x, 6u)]), vec4<bool>(false, false, global1[_wgslsmith_index_u32(3760u, 6u)], true), true)), !(!(global1[_wgslsmith_index_u32(7839u, 6u)] || false))), any(!(!select(vec2<bool>(true, true), vec2<bool>(global1[_wgslsmith_index_u32(var_0.x, 6u)], false), vec2<bool>(global1[_wgslsmith_index_u32(u_input.b.x, 6u)], false)))));
                global0 = firstTrailingBit(select(min(vec4<u32>(31198u, global0.x, 1u, u_input.c) & vec4<u32>(u_input.c, 44964u, 24159u, 0u), vec4<u32>(~0u, 93545u, var_0.x, ~u_input.d)), _wgslsmith_clamp_vec4_u32(~vec4<u32>(global0.x, var_0.x, global0.x, 0u), ~vec4<u32>(54143u, var_0.x, 4294967295u, var_0.x), reverseBits(reverseBits(vec4<u32>(var_0.x, var_0.x, 43604u, var_0.x)))), select(!(!vec4<bool>(var_3.x, var_3.x, var_3.x, var_3.x)), !select(var_3, var_3, global1[_wgslsmith_index_u32(4294967295u, 6u)]), var_3)));
                var_2 = -select(~firstTrailingBit(vec3<i32>(u_input.a, var_2.x, -34021i)), abs(vec3<i32>(-29067i, u_input.a, 1i) ^ (vec3<i32>(var_2.x, var_2.x, u_input.a) >> (global0.zyx % vec3<u32>(32u)))), true);
            }
            var var_1 = true;
            global1 = array<bool, 6>();
        }
        case 0i: {
        }
        default: {
            let var_0 = vec3<u32>(_wgslsmith_div_u32(u_input.c, global0.x), _wgslsmith_add_u32(select(func_6(!vec4<bool>(false, true, global1[_wgslsmith_index_u32(u_input.b.x, 6u)], false), !global1[_wgslsmith_index_u32(global0.x, 6u)]), global0.x, any(vec2<bool>(global1[_wgslsmith_index_u32(global0.x, 6u)], global1[_wgslsmith_index_u32(u_input.c, 6u)]))), 1u), _wgslsmith_sub_u32(func_6(select(select(vec4<bool>(global1[_wgslsmith_index_u32(7818u, 6u)], global1[_wgslsmith_index_u32(u_input.d, 6u)], true, global1[_wgslsmith_index_u32(u_input.b.x, 6u)]), vec4<bool>(global1[_wgslsmith_index_u32(5510u, 6u)], global1[_wgslsmith_index_u32(global0.x, 6u)], true, true), false), select(vec4<bool>(global1[_wgslsmith_index_u32(u_input.b.x, 6u)], true, global1[_wgslsmith_index_u32(global0.x, 6u)], true), vec4<bool>(global1[_wgslsmith_index_u32(0u, 6u)], global1[_wgslsmith_index_u32(u_input.b.x, 6u)], true, true), global1[_wgslsmith_index_u32(1u, 6u)]), select(vec4<bool>(global1[_wgslsmith_index_u32(49359u, 6u)], true, global1[_wgslsmith_index_u32(global0.x, 6u)], true), vec4<bool>(global1[_wgslsmith_index_u32(1u, 6u)], global1[_wgslsmith_index_u32(67847u, 6u)], global1[_wgslsmith_index_u32(global0.x, 6u)], global1[_wgslsmith_index_u32(4294967295u, 6u)]), global1[_wgslsmith_index_u32(global0.x, 6u)])), true), firstLeadingBit(_wgslsmith_mod_u32(min(0u, u_input.b.x), _wgslsmith_sub_u32(global0.x, global0.x)))));
            let var_1 = Struct_4(_wgslsmith_div_u32(~(~4294967295u), global0.x));
            loop {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                global0 = countOneBits(~(~vec4<u32>(u_input.b.x & global0.x, ~1u, _wgslsmith_clamp_u32(976u, var_1.a, var_0.x), 39131u)));
            }
        }
    }
    return func_5().b.c;
}

fn func_8(arg_0: Struct_1, arg_1: i32, arg_2: Struct_1) -> Struct_3 {
    loop {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
    }
    loop {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
    }
    loop {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        switch (select(1063i, u_input.a, global1[_wgslsmith_index_u32(abs(~_wgslsmith_sub_u32(abs(u_input.b.x), ~1422u)), 6u)])) {
            case 2147483647i: {
                global0 = ~abs(firstLeadingBit(abs(vec4<u32>(global0.x, 0u, 4294967295u, 4294967295u)) << (~vec4<u32>(u_input.d, u_input.b.x, 248u, 1u) % vec4<u32>(32u))));
            }
            case -1i: {
                let var_0 = global0.x;
                break;
            }
            case 54915i: {
                var var_0 = func_5().b.b;
                global0 = ~_wgslsmith_add_vec4_u32(_wgslsmith_div_vec4_u32(vec4<u32>(36897u, 77086u << (u_input.b.x % 32u), _wgslsmith_mod_u32(global0.x, u_input.b.x), ~u_input.d), countOneBits(min(vec4<u32>(29100u, 65976u, global0.x, global0.x), vec4<u32>(global0.x, u_input.d, u_input.d, 1u)))), ~(~_wgslsmith_mod_vec4_u32(vec4<u32>(13645u, 20287u, 53928u, 1u), vec4<u32>(1u, global0.x, u_input.b.x, 973u))));
                var var_1 = !(-2147483647i < -arg_1);
            }
            case -11253i: {
                let var_0 = Struct_3(global1[_wgslsmith_index_u32(~u_input.b.x, 6u)], func_5().b);
                var var_1 = vec4<f32>(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(exp2(arg_2.a.x)))), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-700f - -395f)) * 1f))), -1000f, -116f);
                let var_2 = arg_2;
                break;
            }
            default: {
                let var_0 = _wgslsmith_div_u32(u_input.d, global0.x);
            }
        }
        global0 = min(vec4<u32>(countOneBits(max(42926u, ~u_input.b.x)), max(u_input.d, 1u), global0.x, u_input.d), vec4<u32>(firstTrailingBit(~u_input.b.x) | _wgslsmith_dot_vec2_u32(vec2<u32>(u_input.d, global0.x), vec2<u32>(global0.x, 79366u) ^ u_input.b), 1u, countOneBits(select(1u, 1u, global1[_wgslsmith_index_u32(_wgslsmith_add_u32(global0.x, u_input.c), 6u)])), 0u));
        var var_0 = func_4(_wgslsmith_f_op_vec4_f32(min(vec4<f32>(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-638f))), _wgslsmith_f_op_f32(arg_2.a.x + 247f), 1644f, _wgslsmith_f_op_f32(1574f + _wgslsmith_div_f32(-190f, arg_0.a.x))), _wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(sign(vec4<f32>(arg_0.a.x, arg_2.a.x, arg_2.a.x, -339f)))), vec4<f32>(_wgslsmith_f_op_f32(arg_2.a.x * arg_2.a.x), arg_0.a.x, 1000f, 570f))))), false);
        let var_1 = !vec2<bool>(true, !(u_input.a < arg_1));
    }
    var var_0 = Struct_5(select(!(!select(vec4<bool>(true, false, global1[_wgslsmith_index_u32(105888u, 6u)], global1[_wgslsmith_index_u32(u_input.c, 6u)]), vec4<bool>(false, true, global1[_wgslsmith_index_u32(global0.x, 6u)], global1[_wgslsmith_index_u32(u_input.d, 6u)]), vec4<bool>(false, global1[_wgslsmith_index_u32(u_input.c, 6u)], true, global1[_wgslsmith_index_u32(4294967295u, 6u)]))), !vec4<bool>(all(vec3<bool>(true, false, global1[_wgslsmith_index_u32(14262u, 6u)])), 447f != arg_2.a.x, any(vec4<bool>(global1[_wgslsmith_index_u32(global0.x, 6u)], global1[_wgslsmith_index_u32(u_input.d, 6u)], false, global1[_wgslsmith_index_u32(global0.x, 6u)])), true), select(vec4<bool>(global1[_wgslsmith_index_u32(51004u, 6u)], all(vec3<bool>(global1[_wgslsmith_index_u32(11131u, 6u)], true, true)), true, global1[_wgslsmith_index_u32(u_input.c, 6u)]), !vec4<bool>(true, false, global1[_wgslsmith_index_u32(4294967295u, 6u)], global1[_wgslsmith_index_u32(global0.x, 6u)]), true)));
    switch (~firstTrailingBit(_wgslsmith_clamp_i32(max(~arg_1, _wgslsmith_mult_i32(arg_1, 4004i)), -_wgslsmith_dot_vec2_i32(vec2<i32>(arg_1, u_input.a), vec2<i32>(2147483647i, -8036i)), _wgslsmith_clamp_i32(i32(-2147483648), -19709i, 30584i)))) {
        case 1i: {
            let var_1 = _wgslsmith_f_op_f32(arg_2.a.x * _wgslsmith_f_op_f32(260f + _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(step(arg_0.a.x, _wgslsmith_f_op_f32(749f + arg_2.a.x))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(arg_0.a.x, arg_2.a.x)) - _wgslsmith_f_op_f32(arg_0.a.x + -760f))))));
            loop {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                var var_2 = Struct_3(var_0.a.x, Struct_2(2147483647i, Struct_1(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(arg_0.a.x, 354f, arg_2.a.x) + vec3<f32>(1560f, -1037f, arg_2.a.x)) * _wgslsmith_f_op_vec3_f32(arg_0.a * arg_0.a))), Struct_1(arg_0.a)));
                let var_3 = _wgslsmith_div_vec4_u32(abs(~(~vec4<u32>(global0.x, u_input.b.x, 0u, 0u)) >> (~abs(vec4<u32>(1u, 104096u, 43602u, global0.x)) % vec4<u32>(32u))), _wgslsmith_mod_vec4_u32(~vec4<u32>(~4294967295u, u_input.d, ~4294967295u, global0.x), select(countOneBits(~vec4<u32>(u_input.c, 1u, 26217u, u_input.b.x)), firstTrailingBit(countOneBits(vec4<u32>(global0.x, 0u, u_input.d, 0u))), select(select(var_0.a, var_0.a, var_0.a), !vec4<bool>(true, var_2.a, true, var_0.a.x), var_0.a))));
            }
        }
        case 2147483647i: {
            switch (abs(_wgslsmith_dot_vec3_i32(vec3<i32>(select(-1i, _wgslsmith_dot_vec2_i32(vec2<i32>(22820i, u_input.a), vec2<i32>(arg_1, u_input.a)), global1[_wgslsmith_index_u32(u_input.d, 6u)] | var_0.a.x), _wgslsmith_dot_vec4_i32(-vec4<i32>(arg_1, 0i, 7745i, 1i), vec4<i32>(u_input.a, -32480i, arg_1, -43123i) & vec4<i32>(10004i, arg_1, -1i, -1i)), -20957i), -vec3<i32>(_wgslsmith_div_i32(arg_1, u_input.a), arg_1, _wgslsmith_mod_i32(u_input.a, -13427i))))) {
                case -36169i: {
                    let var_1 = -373f;
                    let var_2 = arg_2.a.x;
                    let var_3 = _wgslsmith_clamp_vec2_i32(~vec2<i32>(-2147483647i, 2147483647i), _wgslsmith_add_vec2_i32(vec2<i32>(arg_1 | -5374i, _wgslsmith_div_i32(1i, u_input.a)), abs(select(vec2<i32>(-52366i, arg_1), vec2<i32>(u_input.a, 1i), vec2<bool>(false, var_0.a.x)))), ~select(vec2<i32>(arg_1, u_input.a) ^ vec2<i32>(0i, 46949i), ~vec2<i32>(2147483647i, arg_1), arg_2.a.x < var_2)) ^ firstTrailingBit(vec2<i32>(1i, ~firstTrailingBit(i32(-2147483648))));
                    global1 = array<bool, 6>();
                }
                case -1i: {
                    let var_1 = Struct_2(reverseBits(_wgslsmith_dot_vec2_i32(_wgslsmith_div_vec2_i32(~vec2<i32>(-1i, 1i), select(vec2<i32>(u_input.a, -10729i), vec2<i32>(arg_1, 8434i), global1[_wgslsmith_index_u32(63798u, 6u)])), ~min(vec2<i32>(i32(-2147483648), arg_1), vec2<i32>(u_input.a, u_input.a)))), Struct_1(arg_0.a), func_3(vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(arg_2.a.x))), arg_0.a.x), func_5().b.b.a.zy));
                }
                default: {
                    let var_1 = _wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_2.a.x)))), -2251f, -1122f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-arg_0.a.x), _wgslsmith_f_op_f32(-151f))))) * vec4<f32>(arg_0.a.x, _wgslsmith_f_op_f32(round(_wgslsmith_div_f32(arg_0.a.x, _wgslsmith_f_op_f32(arg_2.a.x - arg_2.a.x)))), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(arg_0.a.x)) + arg_2.a.x))), func_5().b.c.a.x));
                    global1 = array<bool, 6>();
                    var var_2 = _wgslsmith_clamp_i32(i32(-2147483648) & (arg_1 >> (u_input.d % 32u)), _wgslsmith_sub_i32(u_input.a, 2147483647i), u_input.a >> (func_6(!(!var_0.a), all(select(vec4<bool>(global1[_wgslsmith_index_u32(1u, 6u)], true, var_0.a.x, false), vec4<bool>(global1[_wgslsmith_index_u32(10151u, 6u)], true, global1[_wgslsmith_index_u32(u_input.c, 6u)], false), vec4<bool>(false, var_0.a.x, var_0.a.x, global1[_wgslsmith_index_u32(global0.x, 6u)])))) % 32u));
                }
            }
            var var_1 = arg_2.a;
            var_0 = Struct_5(var_0.a);
            if ((_wgslsmith_add_i32(u_input.a, _wgslsmith_div_i32(57202i, abs(u_input.a))) >> ((~4294967295u >> (_wgslsmith_dot_vec3_u32(vec3<u32>(global0.x, 25222u, 1u), _wgslsmith_add_vec3_u32(global0.xzy, global0.yxw)) % 32u)) % 32u)) > abs(-u_input.a)) {
                return func_5();
            }
            for (var var_2 = 19726i; any(!(!(!var_0.a.zzy))); ) {
                if (LOOP_COUNTERS[12u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
            }
        }
        default: {
            let var_1 = _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(arg_2.a.x * _wgslsmith_f_op_f32(arg_0.a.x + func_3(arg_0.a.zz, vec2<f32>(arg_2.a.x, -866f)).a.x)), 839f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_2.a.x + 1178f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_0.a.x + 2069f))));
            switch (firstLeadingBit(0i)) {
                default: {
                    var var_2 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(sign(vec2<f32>(arg_2.a.x, arg_0.a.x))) + _wgslsmith_f_op_vec2_f32(max(vec2<f32>(211f, arg_2.a.x), var_1.yx)))), arg_2.a.xz, func_5().a)));
                    let var_3 = ~(-(_wgslsmith_mult_vec3_i32(_wgslsmith_div_vec3_i32(vec3<i32>(-1i, 5721i, 1i), vec3<i32>(u_input.a, u_input.a, 57033i)), abs(vec3<i32>(arg_1, u_input.a, arg_1))) << (countOneBits(vec3<u32>(7617u, u_input.c, 0u) << (vec3<u32>(u_input.b.x, global0.x, 1u) % vec3<u32>(32u))) % vec3<u32>(32u))));
                }
            }
            global1 = array<bool, 6>();
            let var_2 = Struct_3(any(var_0.a.ywy), Struct_2(reverseBits(func_4(vec4<f32>(-863f, var_1.x, -1164f, var_1.x), global1[_wgslsmith_index_u32(4294967295u << (u_input.d % 32u), 6u)])), arg_0, Struct_1(var_1.wzw)));
            for (var var_3 = i32(-2147483648); var_2.a; var_3 += 1i) {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                global1 = array<bool, 6>();
                continue;
            }
        }
    }
    return Struct_3(all(vec2<bool>(var_0.a.x, all(select(vec2<bool>(global1[_wgslsmith_index_u32(108211u, 6u)], true), var_0.a.xw, var_0.a.yx)))), func_5().b);
}

fn func_9(arg_0: Struct_3) -> Struct_1 {
    global0 = firstLeadingBit(~(~firstLeadingBit(~vec4<u32>(u_input.c, global0.x, global0.x, global0.x))));
    for (var var_0 = -43379i; var_0 >= 2147483647i; var_0 += 1i) {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        continue;
    }
    global1 = array<bool, 6>();
    var var_0 = countOneBits(_wgslsmith_mod_vec4_i32(countOneBits(vec4<i32>(u_input.a | 0i, func_5().b.a, 15734i, abs(8142i))), ~(~(-vec4<i32>(u_input.a, -1i, arg_0.b.a, u_input.a)))));
    let var_1 = arg_0.b.c.a.x;
    return Struct_1(vec3<f32>(123f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-881f) - _wgslsmith_f_op_f32(1628f + 1736f))), _wgslsmith_div_f32(arg_0.b.c.a.x, _wgslsmith_f_op_f32(select(-1000f, 1585f, func_5().a)))));
}

fn func_2(arg_0: u32) -> Struct_4 {
    var var_0 = Struct_2(u_input.a, Struct_1(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(-620f, -1581f, 720f)))), func_9(func_8(func_3(_wgslsmith_div_vec2_f32(vec2<f32>(-461f, -1181f), vec2<f32>(1200f, 1192f)), vec2<f32>(-2395f, 309f)), 2147483647i, func_5().b.c)));
    switch (u_input.a) {
        case 5663i: {
            global0 = ~countOneBits(vec4<u32>(global0.x, _wgslsmith_add_u32(~global0.x, _wgslsmith_mod_u32(arg_0, 1u)), min(_wgslsmith_dot_vec3_u32(global0.yxy, vec3<u32>(global0.x, 24573u, u_input.b.x)), 11048u), ~u_input.c));
            switch (-var_0.a) {
                case -38506i: {
                    global0 = ~select(_wgslsmith_mod_vec4_u32(countOneBits(vec4<u32>(4294967295u, 1u, 33101u, arg_0)), vec4<u32>(global0.x, 60391u, global0.x, 0u) | vec4<u32>(105145u, arg_0, global0.x, 34701u)) << (vec4<u32>(_wgslsmith_dot_vec3_u32(vec3<u32>(arg_0, u_input.d, u_input.b.x), vec3<u32>(0u, global0.x, 83516u)), global0.x << (55092u % 32u), firstLeadingBit(arg_0), arg_0) % vec4<u32>(32u)), _wgslsmith_mod_vec4_u32(vec4<u32>(abs(arg_0), global0.x, 1u, _wgslsmith_dot_vec3_u32(vec3<u32>(59346u, 0u, arg_0), vec3<u32>(global0.x, 73227u, 58281u))), _wgslsmith_mult_vec4_u32(vec4<u32>(55810u, global0.x, 0u, 1u), vec4<u32>(37498u, 35509u, global0.x, 4294967295u))), select(vec4<bool>(true & global1[_wgslsmith_index_u32(0u, 6u)], !global1[_wgslsmith_index_u32(global0.x, 6u)], func_8(var_0.c, var_0.a, Struct_1(var_0.b.a)).a, global1[_wgslsmith_index_u32(min(arg_0, arg_0), 6u)]), vec4<bool>(select(true, global1[_wgslsmith_index_u32(global0.x, 6u)], true), global1[_wgslsmith_index_u32(88807u, 6u)] & false, func_5().a, true), true));
                    var var_1 = _wgslsmith_dot_vec2_i32(abs(~(vec2<i32>(var_0.a, u_input.a) ^ vec2<i32>(38688i, u_input.a))), max(-(vec2<i32>(var_0.a, -65359i) | vec2<i32>(var_0.a, 2044i)), ~vec2<i32>(var_0.a, 41675i))) ^ -(~1i);
                    let var_2 = Struct_4(40592u);
                }
                case -2926i: {
                    var var_1 = -vec3<i32>(1i, u_input.a, _wgslsmith_sub_i32(_wgslsmith_dot_vec3_i32(vec3<i32>(-1i, u_input.a, var_0.a), vec3<i32>(0i, var_0.a, u_input.a)) | -54629i, 50483i));
                }
                case 1i: {
                    global0 = min(vec4<u32>(25299u, 1u, _wgslsmith_add_u32(~arg_0, global0.x >> (global0.x % 32u)) ^ ~(4294967295u >> (1u % 32u)), global0.x), firstTrailingBit(vec4<u32>(43732u, min(~arg_0, u_input.b.x), ~u_input.b.x, arg_0 << ((arg_0 >> (u_input.d % 32u)) % 32u))));
                }
                case -1066i: {
                    global1 = array<bool, 6>();
                    global1 = array<bool, 6>();
                    var var_1 = !global1[_wgslsmith_index_u32(62473u, 6u)];
                    var var_2 = arg_0;
                    var_0 = Struct_2(~var_0.a, var_0.c, var_0.c);
                }
                default: {
                    var_0 = func_8(Struct_1(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(var_0.c.a.x, var_0.c.a.x, var_0.c.a.x) - _wgslsmith_f_op_vec3_f32(-var_0.c.a)))), ~(i32(-1i) * -func_8(var_0.c, -38174i, var_0.b).b.a), var_0.c).b;
                    let var_1 = func_8(func_9(Struct_3(select(global1[_wgslsmith_index_u32(arg_0, 6u)], global1[_wgslsmith_index_u32(1u, 6u)], true) != select(false, false, false), func_8(var_0.b, firstLeadingBit(17630i), var_0.b).b)), func_4(_wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(vec4<f32>(1062f, 1290f, 428f, 579f), _wgslsmith_f_op_vec4_f32(vec4<f32>(var_0.b.a.x, -160f, var_0.c.a.x, -1096f) * vec4<f32>(1301f, -457f, var_0.c.a.x, 1170f)))), global1[_wgslsmith_index_u32(_wgslsmith_mult_u32(~(~global0.x), _wgslsmith_mod_u32(0u, ~1u)), 6u)]), var_0.b).b;
                }
            }
        }
        case 72485i: {
            var_0 = func_8(func_3(_wgslsmith_f_op_vec2_f32(-func_8(Struct_1(var_0.b.a), countOneBits(u_input.a), var_0.c).b.b.a.zx), _wgslsmith_f_op_vec2_f32(var_0.c.a.zz * var_0.c.a.zx)), max(-(~(~2147483647i)), countOneBits(_wgslsmith_div_i32(1i, _wgslsmith_dot_vec4_i32(vec4<i32>(u_input.a, u_input.a, 11502i, u_input.a), vec4<i32>(1i, u_input.a, 0i, -70541i))))), var_0.b).b;
            for (var var_1 = 61459i; var_1 <= -1i; ) {
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
                let var_1 = reverseBits(vec4<u32>(4294967295u, _wgslsmith_dot_vec2_u32(global0.xy ^ ~vec2<u32>(1u, global0.x), ~reverseBits(u_input.b)), select(abs(_wgslsmith_mult_u32(global0.x, arg_0)), ~min(u_input.c, global0.x), global1[_wgslsmith_index_u32(_wgslsmith_mult_u32(global0.x | 4294967295u, ~1999u), 6u)]), arg_0 >> (_wgslsmith_sub_u32(2768u, u_input.d >> (u_input.c % 32u)) % 32u)));
            }
            var var_1 = Struct_4(1u);
        }
        case -44000i: {
            switch (_wgslsmith_dot_vec4_i32(~vec4<i32>(_wgslsmith_div_i32(-1i, func_5().b.a), countOneBits(_wgslsmith_mult_i32(u_input.a, u_input.a)), 53899i, _wgslsmith_div_i32(-1i, ~(i32(-2147483648)))), abs(-(~vec4<i32>(46579i, u_input.a, u_input.a, 2147483647i))))) {
                case 2147483647i: {
                }
                case 0i: {
                    var var_1 = func_8(var_0.c, -25840i, var_0.b);
                    var var_2 = _wgslsmith_mult_vec4_i32(max(~(abs(vec4<i32>(u_input.a, var_1.b.a, u_input.a, -13040i)) >> ((vec4<u32>(global0.x, 1u, arg_0, arg_0) & vec4<u32>(0u, 1u, 83536u, arg_0)) % vec4<u32>(32u))), vec4<i32>(0i, 31497i, 2147483647i, 31499i)), -(select(countOneBits(vec4<i32>(1i, var_1.b.a, var_0.a, 2147483647i)), _wgslsmith_mult_vec4_i32(vec4<i32>(47251i, i32(-2147483648), -88165i, u_input.a), vec4<i32>(u_input.a, 1i, var_1.b.a, var_1.b.a)), select(vec4<bool>(true, true, var_1.a, global1[_wgslsmith_index_u32(0u, 6u)]), vec4<bool>(var_1.a, true, false, false), var_1.a)) | -_wgslsmith_div_vec4_i32(vec4<i32>(22999i, var_0.a, var_1.b.a, -95017i), vec4<i32>(var_0.a, 1i, i32(-2147483648), var_1.b.a))));
                    return Struct_4(u_input.d);
                }
                case 1i: {
                    var var_1 = _wgslsmith_mult_i32(var_0.a, 20126i);
                    let var_2 = func_5().b;
                    var var_3 = _wgslsmith_div_vec2_i32(countOneBits(vec2<i32>(-43368i, -38555i)) | abs(vec2<i32>(0i, u_input.a) >> (global0.wz % vec2<u32>(32u))), -(~(_wgslsmith_mult_vec2_i32(vec2<i32>(41307i, 2147483647i), vec2<i32>(i32(-2147483648), u_input.a)) | vec2<i32>(var_0.a, var_0.a))));
                }
                case i32(-2147483648): {
                    let var_1 = Struct_3(func_5().a, func_8(Struct_1(vec3<f32>(_wgslsmith_f_op_f32(-1000f + var_0.b.a.x), var_0.b.a.x, func_3(vec2<f32>(653f, var_0.b.a.x), vec2<f32>(-1497f, var_0.b.a.x)).a.x)), _wgslsmith_mod_i32(-u_input.a, func_7(Struct_4(u_input.c), Struct_3(false, Struct_2(0i, Struct_1(vec3<f32>(704f, var_0.b.a.x, -1140f)), var_0.c)), 33029u, Struct_4(19324u))), var_0.c).b);
                    let var_2 = var_1.b.c;
                    var var_3 = _wgslsmith_mod_vec2_i32(_wgslsmith_div_vec2_i32(~(-(~vec2<i32>(-1i, var_0.a))), select(vec2<i32>(2147483647i, 6119i), vec2<i32>(var_1.b.a, 0i) ^ vec2<i32>(u_input.a, u_input.a), !vec2<bool>(global1[_wgslsmith_index_u32(27611u, 6u)], global1[_wgslsmith_index_u32(33115u, 6u)])) << (global0.ww % vec2<u32>(32u))), countOneBits(vec2<i32>(u_input.a, _wgslsmith_mod_i32(var_1.b.a, var_1.b.a))) & max(~_wgslsmith_mod_vec2_i32(vec2<i32>(0i, u_input.a), vec2<i32>(u_input.a, -20115i)), _wgslsmith_mult_vec2_i32(~vec2<i32>(u_input.a, u_input.a), ~vec2<i32>(-16738i, -1i))));
                    var var_4 = vec2<bool>(global1[_wgslsmith_index_u32(33541u, 6u)], var_1.a & select(true | !var_1.a, func_8(func_8(Struct_1(var_1.b.c.a), 0i, Struct_1(var_0.c.a)).b.b, var_1.b.a, var_0.c).a, any(select(vec2<bool>(false, global1[_wgslsmith_index_u32(51610u, 6u)]), vec2<bool>(global1[_wgslsmith_index_u32(1u, 6u)], global1[_wgslsmith_index_u32(130887u, 6u)]), global1[_wgslsmith_index_u32(arg_0, 6u)]))));
                }
                default: {
                    var_0 = func_8(var_0.b, -(~min(i32(-2147483648), u_input.a) & func_7(Struct_4(u_input.b.x), Struct_3(global1[_wgslsmith_index_u32(0u, 6u)], Struct_2(u_input.a, Struct_1(vec3<f32>(var_0.c.a.x, var_0.b.a.x, -1836f)), var_0.c)), 0u, Struct_4(arg_0))), var_0.b).b;
                    var var_1 = -(~7925i) ^ _wgslsmith_add_i32(firstTrailingBit(-u_input.a), _wgslsmith_dot_vec4_i32(vec4<i32>(min(-28358i, i32(-2147483648)), 1i >> (arg_0 % 32u), u_input.a, _wgslsmith_mod_i32(-1i, u_input.a)), max(vec4<i32>(u_input.a, 1i, -1i, i32(-2147483648)) & vec4<i32>(i32(-2147483648), var_0.a, -1i, u_input.a), _wgslsmith_mod_vec4_i32(vec4<i32>(29553i, -1i, i32(-2147483648), 1i), vec4<i32>(u_input.a, var_0.a, var_0.a, var_0.a)))));
                    let var_2 = all(vec3<bool>(global1[_wgslsmith_index_u32(49622u, 6u)], true, false));
                    let var_3 = func_8(func_5().b.b, ~_wgslsmith_dot_vec4_i32(reverseBits(_wgslsmith_sub_vec4_i32(vec4<i32>(var_0.a, 2147483647i, 2147483647i, var_0.a), vec4<i32>(var_0.a, u_input.a, 0i, u_input.a))), select(min(vec4<i32>(u_input.a, -62376i, u_input.a, var_0.a), vec4<i32>(-18250i, var_0.a, u_input.a, u_input.a)), vec4<i32>(u_input.a, 1i, var_0.a, 1i) & vec4<i32>(var_0.a, 1i, var_0.a, var_0.a), var_2)), Struct_1(_wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(-454f), _wgslsmith_f_op_f32(f32(-1f) * -167f), _wgslsmith_f_op_f32(-var_0.b.a.x))))).b;
                    var var_4 = vec3<u32>(u_input.d, ~_wgslsmith_dot_vec4_u32(~vec4<u32>(arg_0, 4294967295u, global0.x, 14599u), vec4<u32>(20679u, firstTrailingBit(1u), _wgslsmith_mult_u32(arg_0, u_input.d), 17425u)), 41283u);
                }
            }
            var var_1 = Struct_1(var_0.c.a);
            global1 = array<bool, 6>();
            var var_2 = func_6(!select(select(!vec4<bool>(global1[_wgslsmith_index_u32(0u, 6u)], true, false, global1[_wgslsmith_index_u32(1u, 6u)]), vec4<bool>(true, true, false, global1[_wgslsmith_index_u32(74343u, 6u)]), vec4<bool>(true, global1[_wgslsmith_index_u32(1u, 6u)], true, true)), !(!vec4<bool>(global1[_wgslsmith_index_u32(global0.x, 6u)], global1[_wgslsmith_index_u32(0u, 6u)], true, true)), select(global1[_wgslsmith_index_u32(global0.x, 6u)], false, global1[_wgslsmith_index_u32(global0.x, 6u)]) || global1[_wgslsmith_index_u32(abs(arg_0), 6u)]), false);
        }
        default: {
        }
    }
    var var_1 = !(!global1[_wgslsmith_index_u32(_wgslsmith_dot_vec2_u32(vec2<u32>(u_input.b.x, global0.x), countOneBits(vec2<u32>(global0.x, 43193u))), 6u)]) & global1[_wgslsmith_index_u32(abs(u_input.b.x), 6u)];
    var_1 = global1[_wgslsmith_index_u32(_wgslsmith_add_u32(~4294967295u, 4294967295u), 6u)];
    loop {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
        var_1 = global1[_wgslsmith_index_u32(~(~1u), 6u)];
    }
    return Struct_4(arg_0);
}

fn func_10(arg_0: vec2<i32>, arg_1: vec3<f32>, arg_2: Struct_4, arg_3: vec2<i32>) -> u32 {
    for (; !global1[_wgslsmith_index_u32(~u_input.d, 6u)]; ) {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        loop {
            if (LOOP_COUNTERS[19u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
            global1 = array<bool, 6>();
        }
        let var_0 = func_9(Struct_3(!global1[_wgslsmith_index_u32(reverseBits(_wgslsmith_mult_u32(global0.x, 16419u)), 6u)], Struct_2(func_7(arg_2, Struct_3(global1[_wgslsmith_index_u32(u_input.b.x, 6u)], Struct_2(-1i, Struct_1(arg_1), Struct_1(vec3<f32>(arg_1.x, 592f, arg_1.x)))), u_input.c, arg_2) & u_input.a, func_5().b.b, func_8(Struct_1(vec3<f32>(arg_1.x, arg_1.x, arg_1.x)), -1i, func_9(Struct_3(true, Struct_2(1i, Struct_1(arg_1), Struct_1(vec3<f32>(-498f, arg_1.x, -172f)))))).b.b))).a.x;
        var var_1 = func_8(Struct_1(_wgslsmith_f_op_vec3_f32(min(vec3<f32>(func_8(Struct_1(arg_1), -16469i, Struct_1(vec3<f32>(var_0, 1205f, 1437f))).b.c.a.x, -245f, 2632f), _wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(-arg_1), _wgslsmith_f_op_vec3_f32(-vec3<f32>(-265f, var_0, var_0))))))), func_8(Struct_1(vec3<f32>(1369f, -371f, var_0)), countOneBits(u_input.a), Struct_1(_wgslsmith_f_op_vec3_f32(select(arg_1, arg_1, vec3<bool>(global1[_wgslsmith_index_u32(54939u, 6u)], global1[_wgslsmith_index_u32(43869u, 6u)], global1[_wgslsmith_index_u32(0u, 6u)]))))).b.a | arg_3.x, func_3(vec2<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-arg_1.x), var_0), _wgslsmith_f_op_f32(-arg_1.x)), arg_1.yz)).b.b.a;
        for (; false; ) {
            if (LOOP_COUNTERS[20u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
            continue;
        }
    }
    for (var var_0 = 25652i; var_0 < 2147483647i; ) {
        if (LOOP_COUNTERS[21u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
        if (select(global1[_wgslsmith_index_u32(firstLeadingBit(u_input.d), 6u)], select(true, (global0.x << (select(arg_2.a, global0.x, false) % 32u)) != u_input.d, !(any(vec4<bool>(global1[_wgslsmith_index_u32(60044u, 6u)], false, false, global1[_wgslsmith_index_u32(1u, 6u)])) | true)), true)) {
        }
        var var_1 = select(~(~global0.yww), vec3<u32>(u_input.d, 31956u, _wgslsmith_dot_vec2_u32(abs(abs(vec2<u32>(u_input.b.x, 1u))), u_input.b)), global1[_wgslsmith_index_u32(global0.x, 6u)]);
        break;
    }
    for (var var_0 = -5392i; var_0 < 0i; ) {
        if (LOOP_COUNTERS[22u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
    }
    var var_0 = Struct_2(_wgslsmith_dot_vec3_i32(vec3<i32>(~u_input.a, -61145i, _wgslsmith_sub_i32(_wgslsmith_add_i32(1i, u_input.a), 2147483647i)), -reverseBits(vec3<i32>(i32(-2147483648), 14572i, -70080i))), Struct_1(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(arg_1.x, -1844f, 1006f))))), Struct_1(vec3<f32>(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(max(-250f, 647f)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_1.x + arg_1.x) - _wgslsmith_div_f32(arg_1.x, 1836f)), func_9(Struct_3(false, Struct_2(arg_0.x, Struct_1(arg_1), Struct_1(vec3<f32>(-1354f, -980f, 1000f))))).a.x)));
    if (!global1[_wgslsmith_index_u32(~_wgslsmith_clamp_u32(firstTrailingBit(global0.x >> (4294967295u % 32u)), max(_wgslsmith_sub_u32(arg_2.a, 3386u), 1586u ^ arg_2.a), 4294967295u), 6u)]) {
        var var_1 = Struct_2(arg_3.x, var_0.c, func_8(var_0.c, _wgslsmith_mod_i32(-1i, -16347i), Struct_1(arg_1)).b.b);
    }
    return arg_2.a;
}

fn func_1(arg_0: vec4<i32>) -> Struct_1 {
    if (arg_0.x <= (_wgslsmith_div_i32(_wgslsmith_dot_vec2_i32(vec2<i32>(arg_0.x, -25209i), reverseBits(vec2<i32>(37453i, 34279i))), -80078i) >> ((max(~global0.x, 0u) & 4294967295u) % 32u))) {
        for (var var_0: i32; !(!any(select(vec4<bool>(true, false, global1[_wgslsmith_index_u32(global0.x, 6u)], false), vec4<bool>(false, true, global1[_wgslsmith_index_u32(u_input.d, 6u)], global1[_wgslsmith_index_u32(1u, 6u)]), !vec4<bool>(true, global1[_wgslsmith_index_u32(95211u, 6u)], global1[_wgslsmith_index_u32(4294967295u, 6u)], global1[_wgslsmith_index_u32(30492u, 6u)])))); global0 = vec4<u32>(u_input.d, min(u_input.b.x, _wgslsmith_div_u32(~48163u, func_10(min(arg_0.wx, vec2<i32>(2147483647i, arg_0.x)), vec3<f32>(1f, 1f, 1f), func_2(20565u), arg_0.yw ^ arg_0.zw))), firstTrailingBit(u_input.d), global0.x)) {
            if (LOOP_COUNTERS[23u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
            continue;
        }
    }
    var var_0 = _wgslsmith_f_op_vec3_f32(func_3(vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -734f) - 169f), 1f), _wgslsmith_f_op_vec2_f32(sign(_wgslsmith_f_op_vec2_f32(_wgslsmith_div_vec2_f32(vec2<f32>(881f, 1000f), vec2<f32>(-131f, 690f)) * vec2<f32>(-792f, -757f))))).a + func_3(vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(-678f))), 205f), _wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(-593f * 433f), _wgslsmith_f_op_f32(-3152f + -785f)))).a);
    loop {
        if (LOOP_COUNTERS[24u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
        loop {
            if (LOOP_COUNTERS[25u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
            var_0 = _wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(var_0.x, _wgslsmith_f_op_f32(step(var_0.x, -406f)), var_0.x)) - vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(var_0.x * var_0.x)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(var_0.x, 1333f, false))), _wgslsmith_f_op_f32(floor(var_0.x))))));
            var var_1 = vec3<bool>(select(true, true, !all(!vec2<bool>(global1[_wgslsmith_index_u32(u_input.c, 6u)], true))), global1[_wgslsmith_index_u32(~global0.x, 6u)], global0.x != ~_wgslsmith_clamp_u32(global0.x & u_input.d, ~4952u, _wgslsmith_div_u32(global0.x, u_input.d)));
            return Struct_1(_wgslsmith_f_op_vec3_f32(-vec3<f32>(func_8(func_9(Struct_3(var_1.x, Struct_2(u_input.a, Struct_1(vec3<f32>(var_0.x, var_0.x, var_0.x)), Struct_1(vec3<f32>(-129f, 1008f, 2366f))))), u_input.a, Struct_1(vec3<f32>(var_0.x, var_0.x, -367f))).b.c.a.x, 259f, _wgslsmith_f_op_f32(119f + _wgslsmith_f_op_f32(var_0.x - -400f)))));
        }
        continue;
    }
    loop {
        if (LOOP_COUNTERS[26u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
        continue;
    }
    global1 = array<bool, 6>();
    return func_9(Struct_3(all(vec2<bool>(false, !global1[_wgslsmith_index_u32(u_input.b.x, 6u)])), Struct_2(-u_input.a & 17173i, func_9(func_8(Struct_1(vec3<f32>(var_0.x, var_0.x, -1841f)), i32(-2147483648), Struct_1(vec3<f32>(-1404f, -547f, var_0.x)))), Struct_1(_wgslsmith_f_op_vec3_f32(min(vec3<f32>(-994f, 1662f, var_0.x), vec3<f32>(-1656f, var_0.x, -1133f)))))));
}

@compute
@workgroup_size(1)
fn main() {
    var var_0 = true;
    let var_1 = Struct_3(false, Struct_2(firstTrailingBit(13952i), func_1(~vec4<i32>(u_input.a, u_input.a, 55375i, -54242i) | -vec4<i32>(u_input.a, u_input.a, -2890i, -28008i)), Struct_1(vec3<f32>(1190f, 1391f, 1f))));
    switch (select(0i, 13153i, _wgslsmith_div_f32(var_1.b.c.a.x, _wgslsmith_f_op_f32(round(1000f))) <= 1393f) | 2147483647i) {
        case 1i: {
            var var_2 = select(select(vec3<bool>(var_1.a, true, false), !(!select(vec3<bool>(var_1.a, global1[_wgslsmith_index_u32(8253u, 6u)], true), vec3<bool>(false, false, var_1.a), false)), var_1.a), select(select(vec3<bool>(true && global1[_wgslsmith_index_u32(u_input.d, 6u)], any(vec3<bool>(false, true, global1[_wgslsmith_index_u32(3234u, 6u)])), !var_1.a), vec3<bool>(false, false, true), select(!vec3<bool>(global1[_wgslsmith_index_u32(u_input.b.x, 6u)], true, global1[_wgslsmith_index_u32(4294967295u, 6u)]), !vec3<bool>(global1[_wgslsmith_index_u32(50895u, 6u)], true, global1[_wgslsmith_index_u32(u_input.d, 6u)]), !vec3<bool>(var_1.a, var_1.a, var_1.a))), select(vec3<bool>(true, any(vec2<bool>(global1[_wgslsmith_index_u32(u_input.b.x, 6u)], true)), false), vec3<bool>(false, select(false, true, var_1.a), true), var_1.a), select(!select(vec3<bool>(false, var_1.a, global1[_wgslsmith_index_u32(1u, 6u)]), vec3<bool>(global1[_wgslsmith_index_u32(47193u, 6u)], global1[_wgslsmith_index_u32(global0.x, 6u)], true), global1[_wgslsmith_index_u32(global0.x, 6u)]), vec3<bool>(func_5().a, !global1[_wgslsmith_index_u32(11027u, 6u)], global1[_wgslsmith_index_u32(abs(1u), 6u)]), select(select(var_1.a, true, var_1.a), var_1.a, !global1[_wgslsmith_index_u32(1u, 6u)]))), false);
            loop {
                if (LOOP_COUNTERS[27u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[27u] = LOOP_COUNTERS[27u] + 1u;
                let var_3 = func_5();
            }
            if (!any(vec4<bool>(false, global1[_wgslsmith_index_u32(1u, 6u)], var_2.x, false && global1[_wgslsmith_index_u32(global0.x, 6u)])) | (110f < var_1.b.b.a.x)) {
                var var_3 = var_1.b;
                let var_4 = u_input.d;
                var_3 = func_8(Struct_1(vec3<f32>(var_1.b.c.a.x, var_1.b.c.a.x, func_5().b.c.a.x)), func_7(func_2(_wgslsmith_mult_u32(~var_4, global0.x >> (var_4 % 32u))), func_5(), firstLeadingBit(max(4294967295u, global0.x >> (1u % 32u))), Struct_4(~0u)), func_5().b.b).b;
                let var_5 = Struct_1(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-var_1.b.b.a) - var_3.b.a)));
                var var_6 = func_5();
            }
        }
        case -23089i: {
        }
        case -1i: {
            var var_2 = _wgslsmith_f_op_f32(trunc(236f));
            var var_3 = 0i;
        }
        default: {
            loop {
                if (LOOP_COUNTERS[28u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[28u] = LOOP_COUNTERS[28u] + 1u;
            }
            global0 = ~_wgslsmith_add_vec4_u32(vec4<u32>(_wgslsmith_div_u32(u_input.c >> (u_input.b.x % 32u), firstLeadingBit(0u)), _wgslsmith_dot_vec2_u32(vec2<u32>(41680u, u_input.d) | u_input.b, global0.xx), _wgslsmith_clamp_u32(select(32737u, 4294967295u, global1[_wgslsmith_index_u32(59255u, 6u)]), u_input.b.x, abs(4294967295u)), ~firstTrailingBit(global0.x)), ~(vec4<u32>(u_input.d, u_input.b.x, 13595u, 27062u) << (_wgslsmith_mult_vec4_u32(vec4<u32>(global0.x, 81887u, global0.x, global0.x), vec4<u32>(global0.x, global0.x, u_input.b.x, 34034u)) % vec4<u32>(32u))));
        }
    }
    let var_2 = true;
    for (; false; ) {
        if (LOOP_COUNTERS[29u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[29u] = LOOP_COUNTERS[29u] + 1u;
        continue;
    }
    if (true) {
        switch (u_input.a) {
            case 1i: {
                global1 = array<bool, 6>();
            }
            default: {
                var_0 = global1[_wgslsmith_index_u32(~global0.x, 6u)];
                let var_3 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(select(vec4<f32>(func_5().b.c.a.x, _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-var_1.b.b.a.x), _wgslsmith_f_op_f32(-591f - var_1.b.b.a.x))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-526f + 814f) - _wgslsmith_div_f32(-882f, var_1.b.c.a.x)), -1478f), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(vec4<f32>(var_1.b.c.a.x, var_1.b.b.a.x, var_1.b.c.a.x, 442f) * vec4<f32>(779f, var_1.b.b.a.x, var_1.b.c.a.x, -1077f)), _wgslsmith_f_op_vec4_f32(vec4<f32>(var_1.b.b.a.x, var_1.b.b.a.x, 215f, -618f) - vec4<f32>(var_1.b.c.a.x, var_1.b.b.a.x, var_1.b.b.a.x, var_1.b.b.a.x)), true)) * _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(sign(vec4<f32>(-1000f, var_1.b.c.a.x, var_1.b.b.a.x, 1000f))), _wgslsmith_f_op_vec4_f32(-vec4<f32>(var_1.b.c.a.x, 1128f, 405f, -1517f)), !global1[_wgslsmith_index_u32(16597u, 6u)]))), !(~(-1i) >= _wgslsmith_dot_vec2_i32(vec2<i32>(12393i, i32(-2147483648)), vec2<i32>(u_input.a, u_input.a))))) * _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(-vec4<f32>(var_1.b.c.a.x, 1000f, -559f, 1893f)))) * _wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(vec4<f32>(1000f, var_1.b.c.a.x, 422f, var_1.b.b.a.x) - vec4<f32>(-526f, 1114f, var_1.b.c.a.x, -719f)), _wgslsmith_f_op_vec4_f32(vec4<f32>(1346f, var_1.b.c.a.x, -241f, 1246f) * vec4<f32>(-829f, var_1.b.b.a.x, var_1.b.b.a.x, var_1.b.b.a.x))))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-3466f, 463f, 679f, var_1.b.c.a.x)), vec4<f32>(1698f, 1000f, var_1.b.c.a.x, var_1.b.c.a.x))) * vec4<f32>(1000f, func_5().b.c.a.x, _wgslsmith_f_op_f32(exp2(var_1.b.c.a.x)), _wgslsmith_div_f32(-314f, var_1.b.b.a.x))), false)));
                let var_4 = true;
                var_0 = !(_wgslsmith_f_op_f32(var_1.b.c.a.x + _wgslsmith_f_op_f32(step(var_1.b.c.a.x, _wgslsmith_f_op_f32(-875f * var_1.b.c.a.x)))) < _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(var_1.b.b.a.x - -648f)))));
            }
        }
    }
    if (any(select(!(!select(vec4<bool>(true, global1[_wgslsmith_index_u32(global0.x, 6u)], global1[_wgslsmith_index_u32(44231u, 6u)], var_1.a), vec4<bool>(var_2, true, var_2, global1[_wgslsmith_index_u32(global0.x, 6u)]), global1[_wgslsmith_index_u32(4294967295u, 6u)])), vec4<bool>(true, !(!global1[_wgslsmith_index_u32(0u, 6u)]), all(select(vec4<bool>(var_2, true, var_1.a, true), vec4<bool>(true, var_2, true, true), vec4<bool>(global1[_wgslsmith_index_u32(56496u, 6u)], true, true, true))), all(select(vec3<bool>(var_1.a, true, var_1.a), vec3<bool>(true, var_2, true), false))), !vec4<bool>(all(vec2<bool>(var_2, var_2)), true, global1[_wgslsmith_index_u32(global0.x, 6u)] || true, select(var_1.a, global1[_wgslsmith_index_u32(u_input.b.x, 6u)], false))))) {
        if (global1[_wgslsmith_index_u32(4294967295u, 6u)]) {
        }
        var var_3 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-492f - _wgslsmith_f_op_f32(f32(-1f) * -524f)))));
        global0 = select(vec4<u32>(u_input.d, 45148u, _wgslsmith_sub_u32(1u, ~u_input.b.x), 1u), vec4<u32>(_wgslsmith_add_u32(_wgslsmith_sub_u32(4294967295u, 42162u) >> (~4294967295u % 32u), ~_wgslsmith_dot_vec3_u32(vec3<u32>(29819u, 4294967295u, 1u), vec3<u32>(4294967295u, global0.x, 0u))), reverseBits(~27860u) >> (global0.x % 32u), ~u_input.b.x, _wgslsmith_clamp_u32((global0.x << (global0.x % 32u)) ^ 4294967295u, u_input.c, _wgslsmith_mult_u32(u_input.d, u_input.d) & (45188u >> (0u % 32u)))), select(vec4<bool>(var_2, any(vec2<bool>(var_1.a, false)), !var_1.a, var_1.a), select(vec4<bool>(u_input.b.x != 4294967295u, true, true, true), !select(vec4<bool>(var_1.a, var_1.a, false, var_1.a), vec4<bool>(global1[_wgslsmith_index_u32(global0.x, 6u)], var_2, global1[_wgslsmith_index_u32(14406u, 6u)], global1[_wgslsmith_index_u32(1u, 6u)]), false), select(select(vec4<bool>(false, false, false, true), vec4<bool>(var_1.a, global1[_wgslsmith_index_u32(u_input.c, 6u)], var_1.a, false), var_1.a), vec4<bool>(true, global1[_wgslsmith_index_u32(4294967295u, 6u)], var_2, global1[_wgslsmith_index_u32(6701u, 6u)]), select(vec4<bool>(global1[_wgslsmith_index_u32(global0.x, 6u)], true, var_2, var_2), vec4<bool>(global1[_wgslsmith_index_u32(1u, 6u)], false, false, var_2), false))), func_8(var_1.b.c, _wgslsmith_clamp_i32(var_1.b.a, i32(-2147483648), -1i), var_1.b.b).a));
        switch (_wgslsmith_mod_i32(-u_input.a, _wgslsmith_div_i32(_wgslsmith_add_i32(_wgslsmith_div_i32(-var_1.b.a, u_input.a), var_1.b.a), _wgslsmith_dot_vec4_i32(-vec4<i32>(-12540i, 2147483647i, -23036i, u_input.a), -vec4<i32>(u_input.a, 2183i, -1i, 5056i))))) {
            default: {
            }
        }
        var var_4 = var_1.b.a;
    }
    let x = u_input.a;
    s_output = StorageBuffer(~_wgslsmith_mod_u32(10328u, global0.x), _wgslsmith_add_vec2_i32(select(max(abs(vec2<i32>(u_input.a, -85377i)), vec2<i32>(u_input.a, var_1.b.a)), vec2<i32>(1i, select(u_input.a, var_1.b.a, false)), false), ~(-vec2<i32>(-19081i, var_1.b.a)) | vec2<i32>(u_input.a | u_input.a, -2147483647i)));
}

`;