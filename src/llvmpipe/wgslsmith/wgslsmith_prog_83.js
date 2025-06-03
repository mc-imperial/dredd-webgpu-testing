export const input = [69,104,43,155,43,34,48,143,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [69,104,43,155,43,34,48,143,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[69,104,43,155,43,34,48,143]}
// Seed: 13265268377768620637

struct Struct_1 {
    a: i32,
}

struct UniformBuffer {
    a: vec2<i32>,
}

struct StorageBuffer {
    a: vec2<u32>,
    b: f32,
    c: u32,
    d: u32,
    e: vec2<i32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<bool, 3> = array<bool, 3>(true, false, false);

var<private> global1: array<vec4<i32>, 27> = array<vec4<i32>, 27>(vec4<i32>(i32(-2147483648), -52050i, 8850i, 1i), vec4<i32>(-47613i, -1i, -32445i, 1i), vec4<i32>(-1i, 20618i, -41169i, 76751i), vec4<i32>(0i, 28116i, 55884i, 2147483647i), vec4<i32>(1i, 18374i, 27942i, -6670i), vec4<i32>(2147483647i, -1i, -36083i, -25728i), vec4<i32>(2147483647i, -55294i, -54225i, 93251i), vec4<i32>(2147483647i, -8383i, 2147483647i, -15198i), vec4<i32>(2147483647i, i32(-2147483648), 2147483647i, 2147483647i), vec4<i32>(53947i, 0i, -1i, -32964i), vec4<i32>(2147483647i, -1i, -27115i, -1i), vec4<i32>(1i, 0i, -1i, 24778i), vec4<i32>(-1i, -7636i, -1i, -1i), vec4<i32>(-30924i, -51220i, 1i, -1i), vec4<i32>(2147483647i, 0i, 1i, -1i), vec4<i32>(2147483647i, 0i, -11751i, -1i), vec4<i32>(15382i, 1i, -1i, -40084i), vec4<i32>(-18409i, 108565i, -18985i, -39693i), vec4<i32>(17691i, 2147483647i, 2147483647i, 28510i), vec4<i32>(0i, i32(-2147483648), -11429i, 36975i), vec4<i32>(i32(-2147483648), -1i, 2147483647i, -18475i), vec4<i32>(0i, i32(-2147483648), 0i, 0i), vec4<i32>(1i, i32(-2147483648), -54637i, -29596i), vec4<i32>(i32(-2147483648), -1i, 1i, 2147483647i), vec4<i32>(25364i, 1i, -11701i, 2769i), vec4<i32>(35013i, i32(-2147483648), i32(-2147483648), -1i), vec4<i32>(0i, -12790i, -26596i, 0i));

var<private> global2: vec4<f32> = vec4<f32>(320f, -144f, 1000f, 1005f);

var<private> global3: Struct_1;

var<private> LOOP_COUNTERS: array<u32, 18>;

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn func_3(arg_0: vec2<bool>, arg_1: vec3<bool>) -> Struct_1 {
    return Struct_1(2147483647i);
}

fn func_6(arg_0: f32, arg_1: bool, arg_2: f32) -> Struct_1 {
    let var_0 = _wgslsmith_clamp_vec4_i32(global1[_wgslsmith_index_u32(0u, 27u)], -_wgslsmith_add_vec4_i32(vec4<i32>(global3.a, -12069i, global3.a, u_input.a.x), max(vec4<i32>(global3.a, 0i, global3.a, -53334i), vec4<i32>(global3.a, 44460i, 1i, global3.a))), global1[_wgslsmith_index_u32(~abs(1u), 27u)]) & countOneBits(_wgslsmith_mod_vec4_i32(global1[_wgslsmith_index_u32(~1u, 27u)], global1[_wgslsmith_index_u32(1u, 27u)]));
    switch (global3.a & 7120i) {
        case 52493i: {
            loop {
                if (LOOP_COUNTERS[0u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
                global1 = array<vec4<i32>, 27>();
                let var_1 = vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(max(arg_2, arg_0)), _wgslsmith_f_op_f32(170f + arg_2))))), 1451f, 342f, _wgslsmith_f_op_f32(f32(-1f) * -1392f));
                break;
            }
            switch (global3.a) {
                default: {
                }
            }
            global2 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(step(vec4<f32>(global2.x, _wgslsmith_f_op_f32(f32(-1f) * -138f), arg_2, _wgslsmith_f_op_f32(global2.x * arg_2)), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(max(vec4<f32>(-1634f, -294f, 2739f, 593f), vec4<f32>(1234f, -1870f, -1000f, 2217f)))))) + _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(select(vec4<f32>(global2.x, global2.x, arg_0, -360f), vec4<f32>(950f, -100f, 1288f, global2.x), vec4<bool>(true, false, true, global0[_wgslsmith_index_u32(3985u, 3u)]))), _wgslsmith_f_op_vec4_f32(-vec4<f32>(-556f, -777f, arg_2, 483f)))) * _wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(vec4<f32>(-1081f, arg_0, -108f, 981f) * vec4<f32>(-710f, arg_2, arg_0, arg_0)))))));
            global3 = func_3(!vec2<bool>(any(!vec2<bool>(arg_1, true)), arg_1), !(!(!(!vec3<bool>(false, global0[_wgslsmith_index_u32(16085u, 3u)], false)))));
        }
        case i32(-2147483648): {
            switch (_wgslsmith_dot_vec4_i32(vec4<i32>(u_input.a.x, abs(21308i >> (1u % 32u)), _wgslsmith_mod_i32(firstTrailingBit(-14105i), 1i), abs(i32(-2147483648))), var_0)) {
                default: {
                    let var_1 = Struct_1(1i);
                    let var_2 = ~8136u;
                }
            }
        }
        case 9273i: {
        }
        default: {
        }
    }
    let var_1 = -1i;
    for (; ; ) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        var var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_2 - -1266f));
    }
    let var_2 = Struct_1(max(_wgslsmith_mod_i32(_wgslsmith_div_i32(var_0.x, 2147483647i), ~(-19518i)), -var_1) ^ -_wgslsmith_mod_i32(i32(-1i) * -1i, ~var_0.x));
    return Struct_1(_wgslsmith_sub_i32(global3.a, _wgslsmith_dot_vec4_i32(_wgslsmith_clamp_vec4_i32(_wgslsmith_mult_vec4_i32(vec4<i32>(2147483647i, 16223i, -1i, u_input.a.x), vec4<i32>(0i, u_input.a.x, 2763i, global3.a)), global1[_wgslsmith_index_u32(1u, 27u)], var_0 >> (vec4<u32>(36797u, 13879u, 1u, 110239u) % vec4<u32>(32u))), ~vec4<i32>(var_1, var_2.a, var_0.x, var_0.x))));
}

fn func_7(arg_0: Struct_1, arg_1: Struct_1, arg_2: vec3<u32>, arg_3: vec4<f32>) -> i32 {
    loop {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        loop {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            let var_0 = arg_0;
        }
        switch (firstTrailingBit(~0i)) {
            default: {
                global0 = array<bool, 3>();
                var var_0 = _wgslsmith_dot_vec4_u32(vec4<u32>(_wgslsmith_add_u32(arg_2.x, _wgslsmith_dot_vec4_u32(max(vec4<u32>(arg_2.x, 1u, 0u, arg_2.x), vec4<u32>(1930u, 20397u, 10710u, 37234u)), max(vec4<u32>(19002u, arg_2.x, 1u, arg_2.x), vec4<u32>(30152u, 4294967295u, 66386u, arg_2.x)))), arg_2.x, _wgslsmith_dot_vec3_u32(_wgslsmith_div_vec3_u32(vec3<u32>(4294967295u, 1u, arg_2.x), arg_2), select(vec3<u32>(arg_2.x, arg_2.x, 40271u), arg_2, vec3<bool>(global0[_wgslsmith_index_u32(60085u, 3u)], false, true)) & ~vec3<u32>(arg_2.x, 84260u, 22558u)), 18266u), _wgslsmith_sub_vec4_u32(~(~(~vec4<u32>(4294967295u, arg_2.x, 16033u, 33994u))), vec4<u32>(firstTrailingBit(~arg_2.x), _wgslsmith_div_u32(arg_2.x, ~4294967295u), ~(~arg_2.x), 0u)));
            }
        }
    }
    let var_0 = -_wgslsmith_clamp_vec2_i32(u_input.a, vec2<i32>(max(2147483647i, _wgslsmith_mod_i32(33133i, arg_0.a)), func_3(select(vec2<bool>(false, false), vec2<bool>(global0[_wgslsmith_index_u32(34790u, 3u)], global0[_wgslsmith_index_u32(6835u, 3u)]), vec2<bool>(global0[_wgslsmith_index_u32(4294967295u, 3u)], global0[_wgslsmith_index_u32(arg_2.x, 3u)])), select(vec3<bool>(true, global0[_wgslsmith_index_u32(arg_2.x, 3u)], global0[_wgslsmith_index_u32(arg_2.x, 3u)]), vec3<bool>(true, global0[_wgslsmith_index_u32(arg_2.x, 3u)], global0[_wgslsmith_index_u32(arg_2.x, 3u)]), vec3<bool>(global0[_wgslsmith_index_u32(4294967295u, 3u)], false, global0[_wgslsmith_index_u32(1u, 3u)]))).a), vec2<i32>(func_3(!vec2<bool>(global0[_wgslsmith_index_u32(0u, 3u)], global0[_wgslsmith_index_u32(arg_2.x, 3u)]), !vec3<bool>(false, global0[_wgslsmith_index_u32(2882u, 3u)], false)).a, -countOneBits(i32(-2147483648))));
    loop {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        var var_1 = Struct_1(global3.a);
        global2 = _wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(1557f + 593f), _wgslsmith_f_op_f32(-1141f - global2.x), _wgslsmith_f_op_f32(-1055f), _wgslsmith_div_f32(-1831f, global2.x)) - _wgslsmith_f_op_vec4_f32(abs(_wgslsmith_f_op_vec4_f32(round(vec4<f32>(arg_3.x, global2.x, -1000f, global2.x)))))))));
        return global3.a;
    }
    for (var var_1 = 0i; var_1 != 1i; ) {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
    }
    global2 = vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1000f) * -240f) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_3.x + _wgslsmith_f_op_f32(-arg_3.x)))), _wgslsmith_f_op_f32(-global2.x), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(1122f - arg_3.x), _wgslsmith_f_op_f32(-1000f))) + arg_3.x))), arg_3.x);
    return firstLeadingBit(0i);
}

fn func_5(arg_0: vec3<u32>) -> vec4<f32> {
    global2 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(global2.x, 353f, global2.x, global2.x)) - vec4<f32>(2239f, global2.x, global2.x, global2.x)) + _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(872f, 113f, -469f, 1107f) * vec4<f32>(1148f, global2.x, 1362f, -381f)) * _wgslsmith_f_op_vec4_f32(-vec4<f32>(1000f, 360f, -377f, global2.x)))) + vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-116f + 529f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(-1080f, global2.x))), 1f, _wgslsmith_f_op_f32(-global2.x))));
    switch (~global3.a) {
        case 2147483647i: {
            switch (-49210i | (_wgslsmith_div_i32(_wgslsmith_mod_i32(2147483647i, ~0i), func_7(func_3(vec2<bool>(false, false), vec3<bool>(global0[_wgslsmith_index_u32(arg_0.x, 3u)], global0[_wgslsmith_index_u32(15199u, 3u)], global0[_wgslsmith_index_u32(1u, 3u)])), func_6(413f, false, 966f), arg_0, vec4<f32>(global2.x, 405f, global2.x, 886f))) ^ ~(~_wgslsmith_mod_i32(u_input.a.x, -1i)))) {
                case 0i: {
                    let var_0 = func_6(global2.x, all(select(select(vec4<bool>(global0[_wgslsmith_index_u32(102780u, 3u)], global0[_wgslsmith_index_u32(0u, 3u)], true, false), !vec4<bool>(true, false, true, global0[_wgslsmith_index_u32(arg_0.x, 3u)]), global0[_wgslsmith_index_u32(_wgslsmith_mod_u32(67988u, arg_0.x), 3u)]), !select(vec4<bool>(true, false, global0[_wgslsmith_index_u32(38539u, 3u)], global0[_wgslsmith_index_u32(69341u, 3u)]), vec4<bool>(global0[_wgslsmith_index_u32(32155u, 3u)], global0[_wgslsmith_index_u32(arg_0.x, 3u)], global0[_wgslsmith_index_u32(1u, 3u)], global0[_wgslsmith_index_u32(1u, 3u)]), global0[_wgslsmith_index_u32(27440u, 3u)]), select(!vec4<bool>(global0[_wgslsmith_index_u32(1u, 3u)], global0[_wgslsmith_index_u32(arg_0.x, 3u)], global0[_wgslsmith_index_u32(1u, 3u)], global0[_wgslsmith_index_u32(arg_0.x, 3u)]), !vec4<bool>(true, true, global0[_wgslsmith_index_u32(0u, 3u)], true), select(vec4<bool>(global0[_wgslsmith_index_u32(5086u, 3u)], global0[_wgslsmith_index_u32(25760u, 3u)], global0[_wgslsmith_index_u32(arg_0.x, 3u)], global0[_wgslsmith_index_u32(arg_0.x, 3u)]), vec4<bool>(false, true, true, false), vec4<bool>(false, global0[_wgslsmith_index_u32(arg_0.x, 3u)], true, global0[_wgslsmith_index_u32(9905u, 3u)]))))), -1000f);
                    var var_1 = _wgslsmith_mult_vec2_u32(vec2<u32>(4294967295u, reverseBits(~arg_0.x)), vec2<u32>(_wgslsmith_mult_u32(arg_0.x, arg_0.x), 0u >> ((_wgslsmith_mult_u32(0u, arg_0.x) << (arg_0.x % 32u)) % 32u)));
                }
                case 2147483647i: {
                    let var_0 = func_3(select(vec2<bool>(global0[_wgslsmith_index_u32(arg_0.x, 3u)], global0[_wgslsmith_index_u32(arg_0.x, 3u)]), !vec2<bool>(all(vec2<bool>(true, true)), !global0[_wgslsmith_index_u32(69262u, 3u)]), ~_wgslsmith_mod_u32(arg_0.x, 6659u) < _wgslsmith_mod_u32(~37339u, abs(1u))), vec3<bool>(true, true, true));
                    global1 = array<vec4<i32>, 27>();
                    var var_1 = _wgslsmith_f_op_f32(step(global2.x, _wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(global2.x, global2.x, all(vec4<bool>(global0[_wgslsmith_index_u32(arg_0.x, 3u)], false, true, false)))) * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(global2.x + -657f) - _wgslsmith_f_op_f32(global2.x * 1297f))), _wgslsmith_f_op_f32(abs(234f)))));
                    global2 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(global2.x, -114f, global2.x, 1000f))) + _wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(global2.x, global2.x, global2.x, -1000f)), _wgslsmith_f_op_vec4_f32(max(vec4<f32>(278f, global2.x, global2.x, 525f), vec4<f32>(global2.x, 2982f, global2.x, global2.x)))))));
                    var var_2 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(863f, global2.x)) + _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-global2.xw)))));
                }
                case -66942i: {
                    var var_0 = vec3<bool>(false, true, false);
                }
                default: {
                    global3 = func_6(913f, true || select(false, true, true), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global2.x))), -1000f)));
                }
            }
            if (!(select(global0[_wgslsmith_index_u32(select(arg_0.x, arg_0.x, any(vec4<bool>(false, global0[_wgslsmith_index_u32(arg_0.x, 3u)], true, global0[_wgslsmith_index_u32(arg_0.x, 3u)]))), 3u)], true, all(select(vec2<bool>(false, global0[_wgslsmith_index_u32(arg_0.x, 3u)]), vec2<bool>(true, global0[_wgslsmith_index_u32(arg_0.x, 3u)]), vec2<bool>(global0[_wgslsmith_index_u32(1u, 3u)], global0[_wgslsmith_index_u32(arg_0.x, 3u)])))) | (1968f <= _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(min(global2.x, global2.x))))))) {
            }
            var var_0 = _wgslsmith_f_op_vec2_f32(-global2.yy);
            var var_1 = func_3(vec2<bool>(true, global0[_wgslsmith_index_u32(arg_0.x, 3u)]), !vec3<bool>(!global0[_wgslsmith_index_u32(0u, 3u)], any(!vec2<bool>(global0[_wgslsmith_index_u32(598u, 3u)], global0[_wgslsmith_index_u32(27044u, 3u)])), (u_input.a.x ^ global3.a) <= ~u_input.a.x));
            var var_2 = abs(arg_0.xx);
        }
        case i32(-2147483648): {
            let var_0 = _wgslsmith_f_op_f32(510f - global2.x);
        }
        case -9505i: {
        }
        case -38325i: {
            loop {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                break;
            }
            global2 = _wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(round(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(global2.x, global2.x, 561f, 297f)), _wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(global2.x, global2.x, -589f, global2.x)))))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(vec4<f32>(554f, 847f, -1121f, -107f) - vec4<f32>(-304f, -475f, global2.x, -604f))))))));
        }
        default: {
            global2 = vec4<f32>(_wgslsmith_f_op_f32(global2.x - _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-1000f)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(global2.x))))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-345f), global2.x), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(_wgslsmith_div_f32(-1379f, global2.x))) - _wgslsmith_f_op_f32(-1889f)));
            var var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(global2.x + _wgslsmith_f_op_f32(f32(-1f) * -1012f)))) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(global2.x, _wgslsmith_f_op_f32(f32(-1f) * -446f))))));
            let var_1 = Struct_1(-func_3(!select(vec2<bool>(true, false), vec2<bool>(global0[_wgslsmith_index_u32(48966u, 3u)], global0[_wgslsmith_index_u32(10014u, 3u)]), vec2<bool>(global0[_wgslsmith_index_u32(arg_0.x, 3u)], global0[_wgslsmith_index_u32(1u, 3u)])), select(vec3<bool>(true, true, global0[_wgslsmith_index_u32(26491u, 3u)]), vec3<bool>(global0[_wgslsmith_index_u32(4294967295u, 3u)], global0[_wgslsmith_index_u32(arg_0.x, 3u)], global0[_wgslsmith_index_u32(36155u, 3u)]), !vec3<bool>(global0[_wgslsmith_index_u32(53670u, 3u)], global0[_wgslsmith_index_u32(4294967295u, 3u)], false))).a);
            global1 = array<vec4<i32>, 27>();
            global0 = array<bool, 3>();
        }
    }
    var var_0 = 1i;
    var var_1 = Struct_1((_wgslsmith_mod_i32(-1i, i32(-2147483648)) & max(u_input.a.x & 2147483647i, 1i)) << (~_wgslsmith_div_u32(~arg_0.x, 1u) % 32u));
    var var_2 = ~arg_0.x;
    return _wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(abs(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(max(vec4<f32>(730f, global2.x, -1420f, -1511f), vec4<f32>(1000f, 942f, global2.x, global2.x)))))))));
}

fn func_4(arg_0: Struct_1) -> u32 {
    global2 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(step(vec4<f32>(global2.x, 765f, 356f, -591f), _wgslsmith_div_vec4_f32(vec4<f32>(-379f, global2.x, -415f, global2.x), vec4<f32>(1281f, -331f, global2.x, -1080f)))) * _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(func_5(vec3<u32>(10546u, 1u, 1u))))) * _wgslsmith_f_op_vec4_f32(-vec4<f32>(global2.x, _wgslsmith_f_op_f32(max(global2.x, global2.x)), _wgslsmith_f_op_f32(max(479f, global2.x)), _wgslsmith_f_op_f32(global2.x * -907f)))));
    let var_0 = 1u;
    var var_1 = _wgslsmith_f_op_vec3_f32(min(_wgslsmith_div_vec3_f32(global2.wzx, _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-global2.zxz)) + global2.xzy)), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-global2.xyz)) + global2.wxx))));
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
    }
    loop {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        let var_2 = var_1.x;
        let var_3 = vec3<bool>(any(!(!(!vec3<bool>(global0[_wgslsmith_index_u32(0u, 3u)], global0[_wgslsmith_index_u32(var_0, 3u)], global0[_wgslsmith_index_u32(var_0, 3u)])))), all(vec4<bool>(any(vec4<bool>(true, true, true, true)), false, (global0[_wgslsmith_index_u32(var_0, 3u)] && false) | true, select(!global0[_wgslsmith_index_u32(5404u, 3u)], any(vec4<bool>(global0[_wgslsmith_index_u32(var_0, 3u)], global0[_wgslsmith_index_u32(0u, 3u)], global0[_wgslsmith_index_u32(var_0, 3u)], global0[_wgslsmith_index_u32(1u, 3u)])), global0[_wgslsmith_index_u32(~var_0, 3u)]))), false);
        global0 = array<bool, 3>();
        continue;
    }
    return 0u;
}

fn func_8(arg_0: i32, arg_1: bool) -> Struct_1 {
    global0 = array<bool, 3>();
    global0 = array<bool, 3>();
    global0 = array<bool, 3>();
    loop {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        let var_0 = _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-1038f)));
        global1 = array<vec4<i32>, 27>();
        var var_1 = func_3(vec2<bool>(true, false), select(vec3<bool>(global0[_wgslsmith_index_u32(~abs(4294967295u), 3u)], any(vec3<bool>(global0[_wgslsmith_index_u32(0u, 3u)], false, false)), false), !select(vec3<bool>(arg_1, false, false), select(vec3<bool>(arg_1, arg_1, global0[_wgslsmith_index_u32(19844u, 3u)]), vec3<bool>(true, arg_1, false), arg_1), !vec3<bool>(arg_1, global0[_wgslsmith_index_u32(4294967295u, 3u)], false)), select(vec3<bool>(any(vec3<bool>(true, arg_1, global0[_wgslsmith_index_u32(356u, 3u)])), true, any(vec2<bool>(arg_1, global0[_wgslsmith_index_u32(36472u, 3u)]))), !(!vec3<bool>(false, arg_1, global0[_wgslsmith_index_u32(0u, 3u)])), !any(vec3<bool>(arg_1, arg_1, true)))));
        global1 = array<vec4<i32>, 27>();
        let var_2 = !select(vec3<bool>(arg_1, global0[_wgslsmith_index_u32(firstLeadingBit(~65681u), 3u)], true), !vec3<bool>(true, arg_1, global0[_wgslsmith_index_u32(reverseBits(28430u), 3u)]), !vec3<bool>(false, false, arg_1));
    }
    switch (~(-13946i)) {
        case -9494i: {
            global2 = vec4<f32>(global2.x, global2.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(global2.x * -112f)) + -688f)), -203f);
            if (global0[_wgslsmith_index_u32(_wgslsmith_div_u32(0u, 1u), 3u)]) {
                let var_0 = _wgslsmith_mult_u32(abs(select(select(0u, 22428u, true), 1u, global0[_wgslsmith_index_u32(46356u, 3u)])) ^ func_4(Struct_1(global3.a >> (5241u % 32u))), ~_wgslsmith_div_u32(4294967295u, ~1u));
                var var_1 = _wgslsmith_add_i32(u_input.a.x, i32(-2147483648));
                let var_2 = func_6(207f, !any(select(vec3<bool>(true, true, arg_1), vec3<bool>(false, arg_1, global0[_wgslsmith_index_u32(31944u, 3u)]), arg_1)), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(floor(1000f)), global2.x, !(any(vec4<bool>(true, false, true, false)) | !global0[_wgslsmith_index_u32(1u, 3u)]))));
                var var_3 = func_6(global2.x, arg_1, _wgslsmith_f_op_f32(-279f));
            }
            return Struct_1(_wgslsmith_sub_i32(u_input.a.x, ~(-1i)));
        }
        case -16527i: {
        }
        case 0i: {
            let var_0 = _wgslsmith_mult_vec3_i32(~(-(~(-vec3<i32>(u_input.a.x, global3.a, u_input.a.x)))), ~vec3<i32>(~(~0i), global3.a, _wgslsmith_clamp_i32(-1i, _wgslsmith_dot_vec2_i32(vec2<i32>(global3.a, arg_0), vec2<i32>(9638i, 2147483647i)), u_input.a.x)));
            loop {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                continue;
            }
            if (any(vec4<bool>(false, all(vec2<bool>(true, true)), all(vec2<bool>(true, arg_1)) && true, false))) {
                let var_1 = ~vec3<u32>(2578u, 46058u, abs(~firstLeadingBit(0u)));
                global0 = array<bool, 3>();
            }
            for (var var_1 = 0i; all(select(vec3<bool>(any(select(vec4<bool>(arg_1, global0[_wgslsmith_index_u32(4294967295u, 3u)], false, global0[_wgslsmith_index_u32(1u, 3u)]), vec4<bool>(arg_1, true, global0[_wgslsmith_index_u32(0u, 3u)], global0[_wgslsmith_index_u32(2960u, 3u)]), global0[_wgslsmith_index_u32(31946u, 3u)])), false, any(vec4<bool>(global0[_wgslsmith_index_u32(1u, 3u)], false, true, global0[_wgslsmith_index_u32(2849u, 3u)])) && global0[_wgslsmith_index_u32(firstTrailingBit(1u), 3u)]), vec3<bool>(false, false, all(vec2<bool>(true, true)) && all(vec3<bool>(arg_1, arg_1, false))), vec3<bool>(false, global0[_wgslsmith_index_u32(_wgslsmith_dot_vec4_u32(vec4<u32>(19559u, 74026u, 50869u, 1u), _wgslsmith_clamp_vec4_u32(vec4<u32>(0u, 0u, 11582u, 1u), vec4<u32>(1u, 60010u, 87711u, 37231u), vec4<u32>(20691u, 4294967295u, 21911u, 14373u))), 3u)], !(global0[_wgslsmith_index_u32(21978u, 3u)] && true)))); ) {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                let var_2 = func_3(vec2<bool>(all(vec3<bool>(arg_1, true, arg_1)), any(select(vec2<bool>(true, arg_1), select(vec2<bool>(global0[_wgslsmith_index_u32(4294967295u, 3u)], arg_1), vec2<bool>(true, global0[_wgslsmith_index_u32(4294967295u, 3u)]), global0[_wgslsmith_index_u32(91990u, 3u)]), select(vec2<bool>(arg_1, true), vec2<bool>(true, arg_1), vec2<bool>(arg_1, global0[_wgslsmith_index_u32(0u, 3u)]))))), vec3<bool>(true, all(vec2<bool>(true, true)), true));
                var var_3 = select(vec4<u32>(_wgslsmith_dot_vec3_u32(_wgslsmith_add_vec3_u32(firstTrailingBit(vec3<u32>(53712u, 5144u, 33749u)), vec3<u32>(0u, 0u, 16798u)), vec3<u32>(4294967295u, ~0u, _wgslsmith_add_u32(8746u, 46373u))), ~abs(1u), ~(~1u), 1u), vec4<u32>(4294967295u, 44514u & _wgslsmith_mod_u32(0u, _wgslsmith_dot_vec3_u32(vec3<u32>(1u, 38587u, 4294967295u), vec3<u32>(53478u, 18118u, 67294u))), _wgslsmith_dot_vec3_u32(vec3<u32>(0u, ~4294967295u, 4294967295u), _wgslsmith_mod_vec3_u32(_wgslsmith_clamp_vec3_u32(vec3<u32>(1u, 4294967295u, 0u), vec3<u32>(169u, 1u, 53576u), vec3<u32>(49907u, 0u, 0u)), firstLeadingBit(vec3<u32>(1u, 67261u, 4294967295u)))), ~(~(~1u))), vec4<bool>(true, true, global0[_wgslsmith_index_u32(1u, 3u)], select(true, false, any(vec3<bool>(global0[_wgslsmith_index_u32(72653u, 3u)], global0[_wgslsmith_index_u32(21703u, 3u)], false)))));
            }
            if (arg_1) {
                let var_1 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(-vec4<f32>(global2.x, global2.x, 1191f, -484f)), vec4<f32>(global2.x, 1424f, -398f, -991f))) + vec4<f32>(_wgslsmith_f_op_f32(868f * -1481f), _wgslsmith_f_op_f32(global2.x + global2.x), _wgslsmith_div_f32(global2.x, -513f), -193f)))));
                global3 = func_6(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -409f)) * _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(var_1.x * global2.x)))) + -351f), false, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_1.x) + _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(1822f))), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(f32(-1f) * -326f), var_1.x, true))))));
                global1 = array<vec4<i32>, 27>();
                let var_2 = reverseBits(3745u);
            }
        }
        case -8106i: {
        }
        default: {
            if (false) {
            }
            var var_0 = select(!select(select(select(vec2<bool>(false, arg_1), vec2<bool>(global0[_wgslsmith_index_u32(4294967295u, 3u)], false), vec2<bool>(false, true)), vec2<bool>(false, arg_1), vec2<bool>(arg_1, arg_1)), select(vec2<bool>(global0[_wgslsmith_index_u32(58474u, 3u)], true), vec2<bool>(arg_1, true), select(vec2<bool>(arg_1, true), vec2<bool>(false, false), vec2<bool>(global0[_wgslsmith_index_u32(13912u, 3u)], global0[_wgslsmith_index_u32(55340u, 3u)]))), !select(vec2<bool>(arg_1, true), vec2<bool>(arg_1, arg_1), false)), select(select(select(select(vec2<bool>(true, false), vec2<bool>(arg_1, false), vec2<bool>(false, global0[_wgslsmith_index_u32(0u, 3u)])), vec2<bool>(true, true), select(vec2<bool>(arg_1, false), vec2<bool>(false, true), true)), vec2<bool>(true, !global0[_wgslsmith_index_u32(1u, 3u)]), false), vec2<bool>(true, true), global0[_wgslsmith_index_u32(~1u >> (1u % 32u), 3u)]), vec2<bool>(true, (i32(-1i) * -1i) <= (-3789i ^ u_input.a.x)));
        }
    }
    return Struct_1(-22313i);
}

fn func_2() -> bool {
    for (var var_0 = 4271i; var_0 == 43105i; var_0 -= 1i) {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        break;
    }
    global3 = func_8(u_input.a.x, global0[_wgslsmith_index_u32(_wgslsmith_clamp_u32(~(~1u), func_4(func_3(select(vec2<bool>(global0[_wgslsmith_index_u32(58879u, 3u)], true), vec2<bool>(global0[_wgslsmith_index_u32(1u, 3u)], true), global0[_wgslsmith_index_u32(3259u, 3u)]), vec3<bool>(false, global0[_wgslsmith_index_u32(8977u, 3u)], global0[_wgslsmith_index_u32(21213u, 3u)]))), 7771u), 3u)]);
    global3 = Struct_1(u_input.a.x);
    switch (1i) {
        default: {
            for (var var_0 = abs(~1i) << (_wgslsmith_dot_vec4_u32(vec4<u32>(1u, 1u, 1u, 1u) >> (select(vec4<u32>(0u, 2u, 91863u, 16090u), min(vec4<u32>(1u, 54203u, 7721u, 4294967295u), vec4<u32>(104858u, 4294967295u, 0u, 4294967295u)), global0[_wgslsmith_index_u32(1u, 3u)] || global0[_wgslsmith_index_u32(4112u, 3u)]) % vec4<u32>(32u)), select(~vec4<u32>(1u, 1u, 1u, 1u), vec4<u32>(1u, 1u, 1u, 1u), select(select(vec4<bool>(false, true, false, global0[_wgslsmith_index_u32(1u, 3u)]), vec4<bool>(global0[_wgslsmith_index_u32(16283u, 3u)], true, global0[_wgslsmith_index_u32(4294967295u, 3u)], global0[_wgslsmith_index_u32(39558u, 3u)]), false), select(vec4<bool>(false, true, false, global0[_wgslsmith_index_u32(42651u, 3u)]), vec4<bool>(false, global0[_wgslsmith_index_u32(25184u, 3u)], global0[_wgslsmith_index_u32(0u, 3u)], true), vec4<bool>(global0[_wgslsmith_index_u32(0u, 3u)], true, true, true)), vec4<bool>(global0[_wgslsmith_index_u32(4294967295u, 3u)], global0[_wgslsmith_index_u32(4294967295u, 3u)], true, true)))) % 32u); ; ) {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                var var_1 = global3.a >> (~firstLeadingBit(_wgslsmith_dot_vec3_u32(vec3<u32>(4294967295u, 1u, 20302u), ~vec3<u32>(114014u, 29328u, 0u))) % 32u);
                let var_2 = func_8(reverseBits(-_wgslsmith_dot_vec2_i32(u_input.a, vec2<i32>(-19860i, global3.a)) | (global3.a & 0i)), false);
                break;
            }
        }
    }
    var var_0 = ~(~(-(~countOneBits(vec3<i32>(u_input.a.x, 2147483647i, global3.a)))));
    return true;
}

fn func_9(arg_0: Struct_1, arg_1: i32, arg_2: vec4<i32>, arg_3: i32) -> Struct_1 {
    var var_0 = vec4<f32>(_wgslsmith_f_op_f32(abs(208f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(_wgslsmith_div_f32(1309f, _wgslsmith_f_op_f32(sign(global2.x)))))), 107f, _wgslsmith_div_f32(-392f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(global2.x)) * _wgslsmith_f_op_f32(694f + _wgslsmith_f_op_f32(sign(global2.x))))));
    var_0 = vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(var_0.x + _wgslsmith_f_op_f32(global2.x - global2.x))), var_0.x, _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(sign(global2.x)), _wgslsmith_f_op_f32(global2.x * _wgslsmith_f_op_f32(-_wgslsmith_div_f32(var_0.x, global2.x))), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(f32(-1f) * -886f))) == global2.x)), 1327f);
    switch (-2147483647i) {
        default: {
            var var_1 = Struct_1(24269i);
            switch (~_wgslsmith_div_i32(~arg_3, ~global3.a)) {
                case 2147483647i: {
                    global2 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(global2.x, 1135f, global2.x, 1683f) - vec4<f32>(687f, 1629f, 1454f, var_0.x))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(global2.x, global2.x, global2.x, var_0.x) * vec4<f32>(global2.x, 1638f, 1512f, var_0.x))), vec4<bool>(true, func_2(), global0[_wgslsmith_index_u32(59828u, 3u)], true)))) + _wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(var_0.x, 113f, 1308f, 2094f))));
                    let var_2 = ~abs(_wgslsmith_mult_u32(1u, _wgslsmith_dot_vec3_u32(firstLeadingBit(vec3<u32>(44068u, 25916u, 8136u)), vec3<u32>(25469u, 4294967295u, 69627u))));
                    var var_3 = func_3(select(!select(vec2<bool>(true, true), !vec2<bool>(global0[_wgslsmith_index_u32(var_2, 3u)], true), 1265f >= var_0.x), vec2<bool>(global0[_wgslsmith_index_u32(_wgslsmith_div_u32(_wgslsmith_dot_vec2_u32(vec2<u32>(12144u, 39616u), vec2<u32>(8871u, 0u)), 1u), 3u)], select(any(vec3<bool>(false, global0[_wgslsmith_index_u32(var_2, 3u)], false)), true, 2147483647i <= arg_3)), vec2<bool>(!all(vec2<bool>(true, false)), func_2())), vec3<bool>(true, all(vec4<bool>(false, false, true, global0[_wgslsmith_index_u32(45635u, 3u)])) == true, true));
                    var var_4 = vec4<u32>(~_wgslsmith_add_u32(59785u ^ _wgslsmith_add_u32(4294967295u, var_2), _wgslsmith_dot_vec2_u32(min(vec2<u32>(4294967295u, 0u), vec2<u32>(4294967295u, var_2)), vec2<u32>(var_2, 4294967295u))), var_2, abs(select(~_wgslsmith_mult_u32(var_2, var_2), abs(~var_2), true)), _wgslsmith_clamp_u32(~var_2, _wgslsmith_sub_u32(6508u, _wgslsmith_mod_u32(var_2, 3298u) >> (firstTrailingBit(80880u) % 32u)), 3798u));
                    var var_5 = Struct_1(8547i);
                }
                default: {
                }
            }
            loop {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                let var_2 = global0[_wgslsmith_index_u32(func_4(arg_0), 3u)];
                var var_3 = ~vec3<u32>(_wgslsmith_sub_u32(func_4(func_3(vec2<bool>(true, global0[_wgslsmith_index_u32(21538u, 3u)]), vec3<bool>(global0[_wgslsmith_index_u32(30637u, 3u)], global0[_wgslsmith_index_u32(14633u, 3u)], global0[_wgslsmith_index_u32(0u, 3u)]))), _wgslsmith_dot_vec3_u32(reverseBits(vec3<u32>(1u, 55361u, 1u)), ~vec3<u32>(4294967295u, 0u, 50071u))), 41091u, 1u >> (func_4(func_8(global3.a, global0[_wgslsmith_index_u32(1u, 3u)])) % 32u));
                global0 = array<bool, 3>();
                continue;
            }
            var var_2 = _wgslsmith_mod_vec4_u32(vec4<u32>(1u, 41147u, ~_wgslsmith_mod_u32(_wgslsmith_dot_vec3_u32(vec3<u32>(1u, 61733u, 4294967295u), vec3<u32>(4294967295u, 18939u, 4294967295u)), _wgslsmith_mult_u32(41621u, 1u)), ~abs(51528u) ^ _wgslsmith_sub_u32(_wgslsmith_add_u32(1776u, 34205u), select(124578u, 84583u, global0[_wgslsmith_index_u32(7122u, 3u)]))), _wgslsmith_div_vec4_u32(vec4<u32>(1u, 1u, 1u, 1u) ^ firstTrailingBit(~vec4<u32>(0u, 25557u, 28018u, 4294967295u)), _wgslsmith_mult_vec4_u32(vec4<u32>(4294967295u, _wgslsmith_div_u32(4294967295u, 4294967295u), abs(4294967295u), ~0u), vec4<u32>(1u, 1u, 1u, 1u))));
            let var_3 = func_3(!(!(!select(vec2<bool>(global0[_wgslsmith_index_u32(62193u, 3u)], global0[_wgslsmith_index_u32(1u, 3u)]), vec2<bool>(global0[_wgslsmith_index_u32(0u, 3u)], global0[_wgslsmith_index_u32(0u, 3u)]), vec2<bool>(global0[_wgslsmith_index_u32(var_2.x, 3u)], global0[_wgslsmith_index_u32(4294967295u, 3u)])))), select(select(vec3<bool>(func_2(), false, all(vec4<bool>(false, false, false, global0[_wgslsmith_index_u32(1u, 3u)]))), select(vec3<bool>(global0[_wgslsmith_index_u32(var_2.x, 3u)], false, true), !vec3<bool>(global0[_wgslsmith_index_u32(1u, 3u)], false, global0[_wgslsmith_index_u32(var_2.x, 3u)]), select(vec3<bool>(true, global0[_wgslsmith_index_u32(var_2.x, 3u)], true), vec3<bool>(global0[_wgslsmith_index_u32(2278u, 3u)], true, false), vec3<bool>(global0[_wgslsmith_index_u32(1u, 3u)], true, global0[_wgslsmith_index_u32(var_2.x, 3u)]))), global0[_wgslsmith_index_u32(firstLeadingBit(func_4(Struct_1(492i))), 3u)]), !(!(!vec3<bool>(false, global0[_wgslsmith_index_u32(27478u, 3u)], false))), select(select(select(vec3<bool>(true, global0[_wgslsmith_index_u32(var_2.x, 3u)], global0[_wgslsmith_index_u32(var_2.x, 3u)]), vec3<bool>(global0[_wgslsmith_index_u32(var_2.x, 3u)], global0[_wgslsmith_index_u32(82804u, 3u)], false), true), vec3<bool>(false, true, global0[_wgslsmith_index_u32(var_2.x, 3u)]), any(vec2<bool>(false, true))), select(vec3<bool>(global0[_wgslsmith_index_u32(var_2.x, 3u)], true, global0[_wgslsmith_index_u32(var_2.x, 3u)]), !vec3<bool>(global0[_wgslsmith_index_u32(28425u, 3u)], global0[_wgslsmith_index_u32(var_2.x, 3u)], false), select(vec3<bool>(true, global0[_wgslsmith_index_u32(var_2.x, 3u)], false), vec3<bool>(false, global0[_wgslsmith_index_u32(var_2.x, 3u)], true), global0[_wgslsmith_index_u32(var_2.x, 3u)])), false)));
        }
    }
    global2 = _wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(global2.x, -1130f, -2103f, 788f))), vec4<f32>(var_0.x, _wgslsmith_f_op_f32(exp2(global2.x)), global2.x, 1000f)))));
    var var_1 = func_6(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1259f)), true, _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-1482f - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(exp2(var_0.x)) * _wgslsmith_f_op_f32(-1000f - -1501f))))));
    return func_6(var_0.x, global0[_wgslsmith_index_u32(~0u, 3u)], _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(ceil(global2.x)), _wgslsmith_div_f32(-1119f, _wgslsmith_f_op_f32(min(var_0.x, var_0.x))))), -1060f)));
}

fn func_1(arg_0: f32, arg_1: vec4<i32>) -> Struct_1 {
    global1 = array<vec4<i32>, 27>();
    var var_0 = func_9(Struct_1(~select(u_input.a.x, global3.a, func_2())), func_6(global2.x, true, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(global2.x - global2.x), _wgslsmith_f_op_f32(f32(-1f) * -1459f))) * 760f)).a, -(firstLeadingBit(~global1[_wgslsmith_index_u32(1u, 27u)]) | arg_1), 11402i);
    loop {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
    }
    let var_1 = global2.wxy;
    return Struct_1(_wgslsmith_div_i32(var_0.a & ~(~arg_1.x), _wgslsmith_sub_i32(_wgslsmith_mult_i32(-var_0.a, countOneBits(global3.a)), ~(-38808i))));
}

fn func_10(arg_0: vec3<u32>, arg_1: u32, arg_2: Struct_1) -> Struct_1 {
    let var_0 = Struct_1(_wgslsmith_sub_i32(firstLeadingBit(min(0i, ~arg_2.a)), -43379i));
    let var_1 = select(select(!vec3<bool>(func_2(), false, global3.a > -21880i), vec3<bool>(true, true, true), vec3<bool>(true, true, global0[_wgslsmith_index_u32(~_wgslsmith_mult_u32(arg_1, 87377u), 3u)])), vec3<bool>(false, true, global0[_wgslsmith_index_u32(~arg_1 ^ (~arg_1 | 4294967295u), 3u)]), vec3<bool>(true, true, any(!vec2<bool>(global0[_wgslsmith_index_u32(0u, 3u)], global0[_wgslsmith_index_u32(arg_1, 3u)]))));
    if (!var_1.x != all(select(vec3<bool>(64325u <= arg_0.x, false, arg_1 <= arg_0.x), vec3<bool>(!global0[_wgslsmith_index_u32(arg_1, 3u)], func_2(), true), select(var_1, var_1, true)))) {
        switch (func_3(vec2<bool>(!(!any(vec3<bool>(false, var_1.x, global0[_wgslsmith_index_u32(33341u, 3u)]))), !var_1.x), select(!select(var_1, !vec3<bool>(false, false, var_1.x), arg_1 >= arg_1), !(!var_1), false)).a) {
            case -1i: {
                let var_2 = arg_2;
            }
            case 0i: {
            }
            default: {
                let var_2 = _wgslsmith_div_f32(1140f, _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global2.x))), global2.x, all(select(vec4<bool>(var_1.x, global0[_wgslsmith_index_u32(arg_1, 3u)], true, false), !vec4<bool>(false, var_1.x, global0[_wgslsmith_index_u32(arg_1, 3u)], false), var_1.x)))));
                var var_3 = Struct_1(~(37345i | _wgslsmith_dot_vec2_i32(vec2<i32>(u_input.a.x, u_input.a.x), -u_input.a)));
                var var_4 = vec4<u32>(4294967295u, 14362u, ~4294967295u, 14957u);
                var var_5 = global2.x;
                var var_6 = arg_2;
            }
        }
        global0 = array<bool, 3>();
        let var_2 = ~arg_0;
    }
    if (!(!(global0[_wgslsmith_index_u32(~_wgslsmith_dot_vec4_u32(vec4<u32>(arg_0.x, arg_0.x, 1u, 1u), vec4<u32>(70573u, 1u, 4294967295u, arg_0.x)), 3u)] || !(global0[_wgslsmith_index_u32(arg_0.x, 3u)] | global0[_wgslsmith_index_u32(arg_0.x, 3u)])))) {
        let var_2 = any(!select(vec4<bool>(global2.x == -362f, select(true, var_1.x, var_1.x), true, !var_1.x), vec4<bool>(select(false, false, global0[_wgslsmith_index_u32(arg_1, 3u)]), 4294967295u < arg_0.x, true, select(var_1.x, global0[_wgslsmith_index_u32(4294967295u, 3u)], true)), vec4<bool>(global0[_wgslsmith_index_u32(14685u, 3u)] && false, u_input.a.x < var_0.a, false, false)));
        let var_3 = func_1(381f, vec4<i32>(-global3.a | min(u_input.a.x, arg_2.a), u_input.a.x, var_0.a, global3.a) | global1[_wgslsmith_index_u32(_wgslsmith_add_u32(~_wgslsmith_clamp_u32(1u, 19198u, 40744u), 1u), 27u)]);
        let var_4 = func_8(var_0.a, 41219u != arg_0.x);
        var var_5 = func_8(~func_3(select(var_1.zy, !vec2<bool>(global0[_wgslsmith_index_u32(arg_0.x, 3u)], false), vec2<bool>(true, var_2)), var_1).a, global0[_wgslsmith_index_u32(_wgslsmith_div_u32(1u, 1u), 3u)]);
        loop {
            if (LOOP_COUNTERS[16u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        }
    }
    let var_2 = _wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(-vec4<f32>(global2.x, _wgslsmith_f_op_f32(-1234f), global2.x, _wgslsmith_f_op_vec4_f32(func_5(vec3<u32>(0u, 47828u, arg_0.x))).x))))));
    return arg_2;
}

fn func_11(arg_0: i32, arg_1: Struct_1, arg_2: vec3<i32>, arg_3: u32) -> vec3<i32> {
    let var_0 = false;
    let var_1 = vec3<bool>(all(select(!select(vec2<bool>(global0[_wgslsmith_index_u32(23535u, 3u)], var_0), vec2<bool>(false, false), vec2<bool>(var_0, global0[_wgslsmith_index_u32(9855u, 3u)])), select(select(vec2<bool>(var_0, true), vec2<bool>(global0[_wgslsmith_index_u32(19854u, 3u)], false), vec2<bool>(global0[_wgslsmith_index_u32(0u, 3u)], true)), vec2<bool>(true, true), vec2<bool>(global0[_wgslsmith_index_u32(arg_3, 3u)], var_0)), true)), global0[_wgslsmith_index_u32(~(min(arg_3, 17940u) & firstTrailingBit(4294967295u)) >> (reverseBits(arg_3) % 32u), 3u)], var_0);
    var var_2 = Struct_1(~arg_0);
    var var_3 = func_9(func_1(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(global2.x * 2235f) + 1785f) * global2.x), global1[_wgslsmith_index_u32(arg_3, 27u)]), _wgslsmith_div_i32(i32(-1i) * -_wgslsmith_add_i32(1i, u_input.a.x), ~(global3.a | u_input.a.x)), global1[_wgslsmith_index_u32(4294967295u, 27u)], u_input.a.x);
    loop {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
        var var_4 = Struct_1(global3.a);
        switch (_wgslsmith_div_i32(-_wgslsmith_mult_i32(-u_input.a.x, reverseBits(-49476i)), -arg_2.x)) {
            default: {
                global0 = array<bool, 3>();
                var var_5 = _wgslsmith_add_vec2_u32(firstLeadingBit(max(~(~vec2<u32>(50596u, 0u)), ~_wgslsmith_add_vec2_u32(vec2<u32>(4294967295u, 65407u), vec2<u32>(arg_3, arg_3)))), vec2<u32>(_wgslsmith_dot_vec3_u32(countOneBits(vec3<u32>(arg_3, arg_3, 31205u)), reverseBits(vec3<u32>(1u, arg_3, arg_3))), arg_3 ^ func_4(Struct_1(2147483647i))) ^ ~(~vec2<u32>(arg_3, arg_3)));
                let var_6 = vec2<bool>(~2147483647i >= func_8(var_3.a, true).a, any(!var_1));
            }
        }
        return ~arg_2;
    }
    return vec3<i32>(arg_1.a, 0i, ~_wgslsmith_div_i32(var_2.a | -78734i, i32(-1i) * 0i));
}

@compute
@workgroup_size(1)
fn main() {
    if (!global0[_wgslsmith_index_u32(1u, 3u)]) {
        if (!(~(~2719u) <= firstTrailingBit(~3656u))) {
        }
        let var_0 = Struct_1(u_input.a.x);
    }
    let var_0 = _wgslsmith_add_vec2_i32(u_input.a, u_input.a);
    global0 = array<bool, 3>();
    var var_1 = vec3<i32>(~(-21922i | -u_input.a.x), firstTrailingBit(global3.a), ~firstTrailingBit(global3.a << (4294967295u % 32u))) & firstLeadingBit(_wgslsmith_clamp_vec3_i32(vec3<i32>(u_input.a.x, global3.a, var_0.x), countOneBits(vec3<i32>(1i, -1044i, u_input.a.x)), vec3<i32>(var_0.x, 2147483647i, u_input.a.x) & vec3<i32>(u_input.a.x, global3.a, var_0.x)) & ~vec3<i32>(var_0.x, u_input.a.x, u_input.a.x));
    var var_2 = Struct_1(var_0.x);
    var_1 = ~(func_11(2147483647i, func_10(~vec3<u32>(34687u, 5262u, 0u), select(58636u, 4294967295u, true), func_1(-1000f, vec4<i32>(1i, -25539i, -188i, 0i))), _wgslsmith_sub_vec3_i32(vec3<i32>(var_2.a, global3.a, u_input.a.x), vec3<i32>(global3.a, 22873i, 2147483647i)) ^ firstTrailingBit(vec3<i32>(2147483647i, 44602i, -20167i)), 69794u) >> (~countOneBits(abs(vec3<u32>(1u, 109328u, 1u))) % vec3<u32>(32u)));
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_add_vec2_u32(_wgslsmith_mod_vec2_u32(_wgslsmith_div_vec2_u32(min(vec2<u32>(65921u, 38287u), vec2<u32>(2052u, 100504u)), _wgslsmith_add_vec2_u32(vec2<u32>(17669u, 27894u), vec2<u32>(25788u, 0u))), ~min(vec2<u32>(1u, 22974u), vec2<u32>(22918u, 10280u))), firstLeadingBit(~vec2<u32>(1u, 1u))), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(select(global2.x, global2.x, global0[_wgslsmith_index_u32(1u, 3u)])))), ~_wgslsmith_add_u32(_wgslsmith_dot_vec4_u32(vec4<u32>(18269u, 1u, 47532u, 36019u), vec4<u32>(4294967295u, 4294967295u, 67258u, 15663u)) >> (~51927u % 32u), ~_wgslsmith_mult_u32(0u, 3942u)), 1u, _wgslsmith_sub_vec2_i32(countOneBits(var_0), ~select(var_0, vec2<i32>(22919i, var_1.x), vec2<bool>(global0[_wgslsmith_index_u32(70789u, 3u)], global0[_wgslsmith_index_u32(1u, 3u)])) ^ _wgslsmith_mod_vec2_i32(~var_0, vec2<i32>(1i, var_0.x))));
}

`;