export const input = [114,51,70,168,111,98,249,75,255,246,20,158,2,188,203,130,163,214,235,129,211,238,167,176,9,48,64,2,154,199,55,209,151,166,81,186,172,91,46,156,50,108,33,54,232,214,114,252,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [114,51,70,168,111,98,249,75,255,246,20,158,2,188,203,130,163,214,235,129,211,238,167,176,9,48,64,2,154,199,55,209,151,166,81,186,172,91,46,156,50,108,33,54,232,214,114,252,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[114,51,70,168,111,98,249,75,255,246,20,158,2,188,203,130,163,214,235,129,211,238,167,176,9,48,64,2,154,199,55,209,151,166,81,186,172,91,46,156,50,108,33,54,232,214,114,252]}
// Seed: 17260508368337562656

struct Struct_1 {
    a: i32,
}

struct UniformBuffer {
    a: vec2<i32>,
    b: vec3<i32>,
    c: vec2<i32>,
    d: i32,
    e: u32,
}

struct StorageBuffer {
    a: vec4<f32>,
    b: u32,
    c: i32,
    d: i32,
    e: u32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<i32, 11> = array<i32, 11>(-1i, 0i, -24586i, -62688i, i32(-2147483648), -13337i, 0i, -47782i, -1i, -35999i, -1i);

var<private> global1: array<i32, 29> = array<i32, 29>(11741i, -1i, 2147483647i, -1i, 60213i, i32(-2147483648), i32(-2147483648), 57143i, 2147483647i, 13562i, -26224i, -1i, -1i, 11800i, -62230i, -1i, i32(-2147483648), 49668i, -48706i, -1i, 2147483647i, 0i, 44473i, -19746i, 0i, 0i, 11589i, i32(-2147483648), 14490i);

var<private> global2: array<bool, 6> = array<bool, 6>(true, true, true, true, true, false);

var<private> global3: array<u32, 24>;

var<private> LOOP_COUNTERS: array<u32, 27>;

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn func_6() -> u32 {
    global0 = array<i32, 11>();
    for (var var_0 = i32(-2147483648); any(vec2<bool>(all(select(vec3<bool>(false, global2[_wgslsmith_index_u32(0u, 6u)], global2[_wgslsmith_index_u32(u_input.e, 6u)]), !vec3<bool>(true, global2[_wgslsmith_index_u32(4294967295u, 6u)], global2[_wgslsmith_index_u32(72228u, 6u)]), true)), true)); ) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        global2 = array<bool, 6>();
        var var_1 = Struct_1(global0[_wgslsmith_index_u32(abs(~(_wgslsmith_mod_u32(4294967295u, 113225u) ^ _wgslsmith_clamp_u32(global3[_wgslsmith_index_u32(4294967295u, 24u)], 30830u, 10999u))), 11u)]);
        break;
    }
    switch (1i) {
        case -1i: {
            global2 = array<bool, 6>();
            var var_0 = global2[_wgslsmith_index_u32(~46612u, 6u)];
            let var_1 = true;
            var var_2 = vec2<u32>(countOneBits(abs(min(0u, u_input.e)) ^ 3934u), 4294967295u);
            if (~(~var_2.x << (u_input.e % 32u)) == max(1u, 1u)) {
            }
        }
        default: {
            global2 = array<bool, 6>();
            loop {
                if (LOOP_COUNTERS[1u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
                break;
            }
        }
    }
    var var_0 = -(~(_wgslsmith_clamp_vec4_i32(_wgslsmith_mult_vec4_i32(vec4<i32>(global1[_wgslsmith_index_u32(17870u, 29u)], 1i, -34573i, -31333i), vec4<i32>(global0[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(14928u, 24u)], 24u)], 24u)], 11u)], u_input.b.x, global1[_wgslsmith_index_u32(u_input.e, 29u)], global0[_wgslsmith_index_u32(1u, 11u)])), vec4<i32>(5710i, global0[_wgslsmith_index_u32(1u, 11u)], global0[_wgslsmith_index_u32(40293u, 11u)], 0i), -vec4<i32>(global0[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(0u, 24u)], 24u)], 24u)], 11u)], global0[_wgslsmith_index_u32(9428u, 11u)], global0[_wgslsmith_index_u32(u_input.e, 11u)], -5502i)) | firstTrailingBit(vec4<i32>(global0[_wgslsmith_index_u32(u_input.e, 11u)], 52904i, u_input.b.x, 0i) & vec4<i32>(global0[_wgslsmith_index_u32(85470u, 11u)], u_input.a.x, 29082i, global1[_wgslsmith_index_u32(0u, 29u)]))));
    let var_1 = select(vec3<bool>(global2[_wgslsmith_index_u32(~global3[_wgslsmith_index_u32(abs(u_input.e), 24u)], 6u)], global2[_wgslsmith_index_u32(u_input.e, 6u)], true), vec3<bool>(true, global2[_wgslsmith_index_u32(_wgslsmith_mult_u32(~u_input.e, ~_wgslsmith_add_u32(69145u, global3[_wgslsmith_index_u32(1u, 24u)])), 6u)], global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(_wgslsmith_add_u32(1u | u_input.e, _wgslsmith_dot_vec2_u32(vec2<u32>(global3[_wgslsmith_index_u32(18656u, 24u)], global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 24u)]), ~vec2<u32>(global3[_wgslsmith_index_u32(u_input.e, 24u)], global3[_wgslsmith_index_u32(4294967295u, 24u)]))), 24u)], 6u)]), vec3<bool>(global2[_wgslsmith_index_u32(~_wgslsmith_add_u32(_wgslsmith_mod_u32(global3[_wgslsmith_index_u32(1u, 24u)], global3[_wgslsmith_index_u32(68023u, 24u)]), u_input.e), 6u)], global2[_wgslsmith_index_u32(~u_input.e, 6u)], all(vec2<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], global2[_wgslsmith_index_u32(40458u, 6u)]))));
    return firstLeadingBit(global3[_wgslsmith_index_u32(_wgslsmith_dot_vec3_u32(_wgslsmith_mod_vec3_u32(~vec3<u32>(20840u, 12526u, 37339u), ~(~vec3<u32>(4294967295u, 1414u, 2181u))), _wgslsmith_sub_vec3_u32(firstTrailingBit(~vec3<u32>(u_input.e, u_input.e, u_input.e)), ~(~vec3<u32>(0u, 116182u, 4294967295u)))), 24u)]);
}

fn func_5(arg_0: vec4<f32>, arg_1: f32) -> Struct_1 {
    let var_0 = Struct_1(u_input.d | global0[_wgslsmith_index_u32(_wgslsmith_mod_u32(~_wgslsmith_div_u32(u_input.e, 79951u), ~global3[_wgslsmith_index_u32(1u, 24u)] ^ (1u << (global3[_wgslsmith_index_u32(0u, 24u)] % 32u))), 11u)]);
    var var_1 = global1[_wgslsmith_index_u32(64294u, 29u)];
    var var_2 = ~vec3<u32>(_wgslsmith_dot_vec3_u32(vec3<u32>(u_input.e, u_input.e, func_6()), ~(~vec3<u32>(0u, global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 24u)], 0u))), 47883u, _wgslsmith_mult_u32(_wgslsmith_mult_u32(24276u, ~u_input.e), global3[_wgslsmith_index_u32(_wgslsmith_sub_u32(~u_input.e, _wgslsmith_add_u32(u_input.e, global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 24u)])), 24u)]));
    let var_3 = true;
    var var_4 = _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(step(arg_1, 1f)), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(arg_0.x, _wgslsmith_f_op_f32(-arg_0.x))), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(sign(-1129f)), arg_1)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_1) - arg_1)));
    return var_0;
}

fn func_7(arg_0: Struct_1, arg_1: vec4<bool>, arg_2: Struct_1, arg_3: vec2<bool>) -> Struct_1 {
    switch (_wgslsmith_dot_vec4_i32(vec4<i32>(-1i) * -(~(-vec4<i32>(-13811i, global1[_wgslsmith_index_u32(4294967295u, 29u)], u_input.c.x, i32(-2147483648)))), vec4<i32>(firstLeadingBit(_wgslsmith_clamp_i32(1i, -global0[_wgslsmith_index_u32(173023u, 11u)], _wgslsmith_sub_i32(arg_0.a, arg_2.a))), abs(-(~u_input.b.x)), -1i, _wgslsmith_mod_i32(-1636i, max(1i | global0[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(49694u, 24u)], 24u)], 11u)], global1[_wgslsmith_index_u32(4294967295u ^ global3[_wgslsmith_index_u32(66771u, 24u)], 29u)]))))) {
        default: {
            let var_0 = Struct_1(arg_0.a);
            var var_1 = Struct_1(~(-(~countOneBits(21162i))));
        }
    }
    var var_0 = false;
    switch (i32(-1i) * -max(arg_2.a, 2147483647i)) {
        case -23480i: {
            var var_1 = func_5(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(1000f, 307f, -205f, -1356f)))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1598f) + _wgslsmith_f_op_f32(1702f * 674f)) + _wgslsmith_f_op_f32(f32(-1f) * -1000f)), _wgslsmith_f_op_f32(select(398f, _wgslsmith_f_op_f32(-296f + _wgslsmith_f_op_f32(select(-395f, 104f, false))), true))));
            var_0 = global2[_wgslsmith_index_u32(u_input.e, 6u)];
            if (all(vec3<bool>(false, select(arg_3.x, true, true), !arg_1.x))) {
                global2 = array<bool, 6>();
                var var_2 = _wgslsmith_f_op_vec3_f32(vec3<f32>(156f, _wgslsmith_f_op_f32(1f * _wgslsmith_div_f32(_wgslsmith_f_op_f32(sign(650f)), -351f)), _wgslsmith_f_op_f32(f32(-1f) * -790f)) + _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(min(vec3<f32>(826f, 1536f, -1000f), vec3<f32>(-1073f, -226f, -2387f)))))) + vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-545f - -350f)), 265f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(1379f)) * _wgslsmith_f_op_f32(-903f)))));
                global1 = array<i32, 29>();
            }
            switch (~_wgslsmith_add_i32(_wgslsmith_add_i32(_wgslsmith_sub_i32(~25354i, ~arg_2.a), -1i), countOneBits(firstLeadingBit(i32(-2147483648)) << (~u_input.e % 32u)))) {
                case 20306i: {
                    global1 = array<i32, 29>();
                }
                case 1i: {
                    var var_2 = -(_wgslsmith_mod_i32(var_1.a, 1i) ^ -abs(0i));
                    let var_3 = ~(i32(-1i) * -1i);
                    let var_4 = func_5(_wgslsmith_f_op_vec4_f32(-vec4<f32>(1048f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -131f)), 881f, _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-438f))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -667f)));
                }
                default: {
                    let var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(-282f, 1f)));
                    var var_3 = var_2;
                    var_3 = 1236f;
                    var_0 = -1037f != _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(f32(-1f) * -1000f), -1321f)))) * 1101f);
                    let var_4 = Struct_1(countOneBits(0i) >> (~(~global3[_wgslsmith_index_u32(4294967295u, 24u)] & u_input.e) % 32u));
                }
            }
        }
        case -5575i: {
            global1 = array<i32, 29>();
            for (var var_1: i32; _wgslsmith_clamp_i32(~u_input.c.x, ~u_input.b.x, i32(-1i) * -arg_0.a) < _wgslsmith_dot_vec3_i32(abs(u_input.b), ~vec3<i32>(-arg_2.a, 331i, i32(-2147483648))); var_1 += 1i) {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
                let var_2 = Struct_1(~(-43368i));
                continue;
            }
            global2 = array<bool, 6>();
            let var_1 = vec4<u32>(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(_wgslsmith_dot_vec3_u32(select(~vec3<u32>(global3[_wgslsmith_index_u32(u_input.e, 24u)], 53753u, global3[_wgslsmith_index_u32(u_input.e, 24u)]), ~vec3<u32>(u_input.e, global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(45799u, 24u)], 24u)], 0u), vec3<bool>(false, false, arg_1.x)), select(_wgslsmith_mod_vec3_u32(vec3<u32>(u_input.e, global3[_wgslsmith_index_u32(u_input.e, 24u)], global3[_wgslsmith_index_u32(1u, 24u)]), vec3<u32>(6849u, 56595u, global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 24u)], 24u)])), _wgslsmith_div_vec3_u32(vec3<u32>(0u, 103294u, u_input.e), vec3<u32>(u_input.e, u_input.e, u_input.e)), select(arg_1.x, true, false))), 24u)], 24u)] >> (~(~u_input.e) % 32u), ~(~14774u), _wgslsmith_sub_u32(1u, ~global3[_wgslsmith_index_u32(_wgslsmith_mod_u32(0u ^ global3[_wgslsmith_index_u32(22999u, 24u)], u_input.e), 24u)]), 4294967295u);
            let var_2 = ((var_1.x | reverseBits(firstTrailingBit(0u))) | u_input.e) < global3[_wgslsmith_index_u32(_wgslsmith_add_u32(1u, 1u | _wgslsmith_dot_vec4_u32(vec4<u32>(4294967295u, 1u, var_1.x, 48273u) << (var_1 % vec4<u32>(32u)), ~vec4<u32>(u_input.e, global3[_wgslsmith_index_u32(4294967295u, 24u)], var_1.x, 59678u))), 24u)];
        }
        case 2147483647i: {
            loop {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
                var var_1 = -global0[_wgslsmith_index_u32(abs(min(~(~45990u), 4294967295u)), 11u)];
            }
            global1 = array<i32, 29>();
            var var_1 = Struct_1(func_5(_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(floor(-1000f)), _wgslsmith_f_op_f32(-204f * -376f), _wgslsmith_f_op_f32(-136f - -428f), _wgslsmith_div_f32(1000f, -408f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-341f))) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1537f - 1464f)))).a);
            var var_2 = global0[_wgslsmith_index_u32(1u, 11u)];
        }
        case -1359i: {
            var_0 = false;
            for (var var_1 = -60184i; !(_wgslsmith_dot_vec4_i32(vec4<i32>(-1i) * -vec4<i32>(i32(-2147483648), u_input.a.x, 2147483647i, arg_0.a), select(vec4<i32>(global0[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(20828u, 24u)], 24u)], 11u)], arg_0.a, u_input.b.x, global0[_wgslsmith_index_u32(1u, 11u)]), vec4<i32>(u_input.d, -43535i, 2147483647i, arg_2.a), arg_1) ^ (vec4<i32>(u_input.a.x, 0i, u_input.d, -41004i) >> (vec4<u32>(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 24u)], 46441u, 4294967295u, 1u) % vec4<u32>(32u)))) < global1[_wgslsmith_index_u32(_wgslsmith_add_u32(~_wgslsmith_dot_vec2_u32(vec2<u32>(64236u, 122897u), vec2<u32>(37744u, global3[_wgslsmith_index_u32(u_input.e, 24u)])), 0u), 29u)]); var_1 -= 1i) {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                let var_2 = u_input.b;
                continue;
            }
        }
        default: {
            let var_1 = Struct_1(global1[_wgslsmith_index_u32(17820u, 29u)]);
        }
    }
    let var_1 = Struct_1(global1[_wgslsmith_index_u32(u_input.e, 29u)]);
    let var_2 = arg_0;
    return Struct_1(_wgslsmith_dot_vec3_i32(u_input.b, -(~(u_input.b >> (vec3<u32>(1u, global3[_wgslsmith_index_u32(u_input.e, 24u)], global3[_wgslsmith_index_u32(u_input.e, 24u)]) % vec3<u32>(32u))))));
}

fn func_4(arg_0: vec3<u32>, arg_1: f32, arg_2: vec3<f32>, arg_3: bool) -> u32 {
    var var_0 = func_7(func_5(_wgslsmith_div_vec4_f32(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_1, -1000f, 1441f, -2464f)), _wgslsmith_f_op_vec4_f32(exp2(vec4<f32>(arg_2.x, -1664f, arg_2.x, -147f)))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(sign(vec4<f32>(arg_1, -1000f, arg_1, arg_2.x))))), -1663f), !select(!select(vec4<bool>(true, true, false, arg_3), vec4<bool>(true, true, false, arg_3), vec4<bool>(true, arg_3, false, true)), vec4<bool>(global2[_wgslsmith_index_u32(reverseBits(88399u), 6u)], arg_3, global2[_wgslsmith_index_u32(~u_input.e, 6u)], arg_3), any(select(vec2<bool>(true, false), vec2<bool>(true, global2[_wgslsmith_index_u32(arg_0.x, 6u)]), global2[_wgslsmith_index_u32(75990u, 6u)]))), Struct_1(global0[_wgslsmith_index_u32(u_input.e, 11u)]), !vec2<bool>(any(vec4<bool>(false, arg_3, false, global2[_wgslsmith_index_u32(1u, 6u)])), !(!arg_3)));
    let var_1 = func_5(_wgslsmith_f_op_vec4_f32(vec4<f32>(arg_1, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_1) - arg_1), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_1)), -1000f) - vec4<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(922f - arg_2.x), _wgslsmith_f_op_f32(-410f + arg_2.x)), _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-arg_1))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(arg_2.x)) - arg_1), arg_1)), arg_2.x);
    var var_2 = select(106627u, 93339u, all(select(select(select(vec4<bool>(arg_3, false, true, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(arg_0.x, 24u)], 6u)]), vec4<bool>(arg_3, true, arg_3, arg_3), vec4<bool>(global2[_wgslsmith_index_u32(1153u, 6u)], true, arg_3, false)), select(vec4<bool>(true, global2[_wgslsmith_index_u32(42830u, 6u)], global2[_wgslsmith_index_u32(1u, 6u)], arg_3), vec4<bool>(false, arg_3, true, true), arg_3), !vec4<bool>(arg_3, arg_3, true, false)), vec4<bool>(global2[_wgslsmith_index_u32(4294967295u << (u_input.e % 32u), 6u)], true, true, any(vec4<bool>(true, true, false, false))), false)));
    let var_3 = _wgslsmith_div_vec4_i32(abs(vec4<i32>(~(1i | global1[_wgslsmith_index_u32(arg_0.x, 29u)]), i32(-2147483648), -18825i, var_0.a | (24897i | global1[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(7496u, 24u)], 29u)]))), max(firstLeadingBit(~vec4<i32>(1i, 17784i, 27727i, var_0.a)), vec4<i32>(-1i, global0[_wgslsmith_index_u32(reverseBits(8769u), 11u)], var_0.a, _wgslsmith_add_i32(var_0.a, -41506i)) << (vec4<u32>(21295u, ~4294967295u, _wgslsmith_div_u32(0u, global3[_wgslsmith_index_u32(u_input.e, 24u)]), _wgslsmith_dot_vec4_u32(vec4<u32>(0u, 1463u, arg_0.x, global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 24u)]), vec4<u32>(5395u, global3[_wgslsmith_index_u32(130491u, 24u)], u_input.e, global3[_wgslsmith_index_u32(8951u, 24u)]))) % vec4<u32>(32u))));
    var var_4 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(arg_2 + vec3<f32>(arg_1, _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(sign(164f)))), 627f)));
    return abs(1u & _wgslsmith_mult_u32(~(~global3[_wgslsmith_index_u32(13921u, 24u)]), 1u));
}

fn func_3() -> Struct_1 {
    if (global1[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(~(~(~func_4(vec3<u32>(u_input.e, 4294967295u, 59766u), 217f, vec3<f32>(-360f, -1744f, 414f), global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(7894u, 24u)], 6u)]))), 24u)], 29u)] <= -(i32(-1i) * -71926i)) {
        var var_0 = !select(vec2<bool>(!global2[_wgslsmith_index_u32(~4294967295u, 6u)], ~global3[_wgslsmith_index_u32(1u, 24u)] > _wgslsmith_dot_vec2_u32(vec2<u32>(48123u, global3[_wgslsmith_index_u32(u_input.e, 24u)]), vec2<u32>(0u, 10351u))), vec2<bool>(true, !(global2[_wgslsmith_index_u32(u_input.e, 6u)] == true)), vec2<bool>(all(vec2<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], global2[_wgslsmith_index_u32(21348u, 6u)])), any(!vec4<bool>(true, true, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(45729u, 24u)], 6u)], global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(0u, 24u)], 6u)]))));
        let var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(sign(1145f)), _wgslsmith_f_op_f32(-999f * _wgslsmith_f_op_f32(f32(-1f) * -144f)))), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -403f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1620f + -1396f) + _wgslsmith_f_op_f32(min(267f, 371f))))), any(select(!vec3<bool>(true, true, var_0.x), !vec3<bool>(false, global2[_wgslsmith_index_u32(1u, 6u)], true), all(vec2<bool>(global2[_wgslsmith_index_u32(47150u, 6u)], false)))))));
        let var_2 = -max(~u_input.d, countOneBits(global1[_wgslsmith_index_u32(38826u, 29u)] >> (42489u % 32u)) >> (4294967295u % 32u));
        if (any(vec4<bool>(all(!vec3<bool>(global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(4294967295u, 24u)], 6u)], var_0.x, global2[_wgslsmith_index_u32(7414u, 6u)])), any(vec4<bool>(all(vec3<bool>(var_0.x, false, var_0.x)), true, false, global2[_wgslsmith_index_u32(select(global3[_wgslsmith_index_u32(u_input.e, 24u)], 8703u, var_0.x), 6u)])), global2[_wgslsmith_index_u32(_wgslsmith_mod_u32(1u, firstTrailingBit(_wgslsmith_dot_vec3_u32(vec3<u32>(53640u, global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(45188u, 24u)], 24u)], 4294967295u), vec3<u32>(88111u, u_input.e, 49705u)))), 6u)], true))) {
        }
        let var_3 = vec3<u32>(1u, global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(~_wgslsmith_sub_u32(4294967295u, ~reverseBits(1u)), 24u)], 24u)], _wgslsmith_add_u32(_wgslsmith_mult_u32(~global3[_wgslsmith_index_u32(~global3[_wgslsmith_index_u32(30757u, 24u)], 24u)], 4294967295u), ~(func_4(vec3<u32>(8923u, 98574u, 1u), -912f, vec3<f32>(1000f, var_1, 805f), var_0.x) >> (global3[_wgslsmith_index_u32(7882u, 24u)] % 32u))));
    }
    switch (_wgslsmith_dot_vec2_i32(vec2<i32>(u_input.a.x, _wgslsmith_div_i32(55295i, i32(-1i) * -53948i)), u_input.b.yy) | (i32(-1i) * -global1[_wgslsmith_index_u32(_wgslsmith_mult_u32(u_input.e, ~u_input.e), 29u)])) {
        case 1i: {
            var var_0 = func_7(Struct_1(global1[_wgslsmith_index_u32(98185u << (min(u_input.e, ~0u) % 32u), 29u)]), vec4<bool>(global2[_wgslsmith_index_u32(~_wgslsmith_add_u32(4294967295u, _wgslsmith_mod_u32(21790u, 1u)), 6u)], any(select(!vec3<bool>(global2[_wgslsmith_index_u32(26147u, 6u)], global2[_wgslsmith_index_u32(53136u, 6u)], global2[_wgslsmith_index_u32(u_input.e, 6u)]), select(vec3<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], global2[_wgslsmith_index_u32(1u, 6u)], true), vec3<bool>(false, global2[_wgslsmith_index_u32(4294967295u, 6u)], global2[_wgslsmith_index_u32(40061u, 6u)]), true), !vec3<bool>(false, true, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(1u, 24u)], 24u)], 24u)], 6u)]))), any(select(!vec4<bool>(true, true, global2[_wgslsmith_index_u32(12748u, 6u)], global2[_wgslsmith_index_u32(67760u, 6u)]), vec4<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], global2[_wgslsmith_index_u32(1u, 6u)], global2[_wgslsmith_index_u32(0u, 6u)], global2[_wgslsmith_index_u32(u_input.e, 6u)]), false)), all(!select(vec2<bool>(true, false), vec2<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], global2[_wgslsmith_index_u32(u_input.e, 6u)]), global2[_wgslsmith_index_u32(1u, 6u)]))), func_5(_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(trunc(433f)), 2256f, -1000f, _wgslsmith_f_op_f32(2133f - -506f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(-507f, 1221f, global2[_wgslsmith_index_u32(1u, 6u)])) + _wgslsmith_f_op_f32(select(1000f, 1301f, global2[_wgslsmith_index_u32(0u, 6u)]))))), !select(select(select(vec2<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], global2[_wgslsmith_index_u32(1u, 6u)]), vec2<bool>(global2[_wgslsmith_index_u32(1u, 6u)], false), vec2<bool>(false, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(23115u, 24u)], 6u)])), !vec2<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], global2[_wgslsmith_index_u32(u_input.e, 6u)]), true), select(vec2<bool>(global2[_wgslsmith_index_u32(64340u, 6u)], global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(1u, 24u)], 6u)]), !vec2<bool>(true, global2[_wgslsmith_index_u32(73584u, 6u)]), true), false));
            var var_1 = reverseBits(abs(u_input.b | ~(-u_input.b)));
            for (; global2[_wgslsmith_index_u32(73488u, 6u)]; ) {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                let var_2 = !select(!vec3<bool>(true, !global2[_wgslsmith_index_u32(0u, 6u)], !global2[_wgslsmith_index_u32(0u, 6u)]), select(vec3<bool>(!global2[_wgslsmith_index_u32(u_input.e, 6u)], all(vec3<bool>(false, true, global2[_wgslsmith_index_u32(31242u, 6u)])), true), !vec3<bool>(false, global2[_wgslsmith_index_u32(u_input.e, 6u)], global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(1u, 24u)], 24u)], 6u)]), all(select(vec4<bool>(global2[_wgslsmith_index_u32(4294967295u, 6u)], global2[_wgslsmith_index_u32(19474u, 6u)], false, false), vec4<bool>(false, global2[_wgslsmith_index_u32(u_input.e, 6u)], true, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 6u)]), vec4<bool>(true, false, global2[_wgslsmith_index_u32(22714u, 6u)], true)))), any(select(select(vec4<bool>(true, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(91148u, 24u)], 6u)], false, false), vec4<bool>(false, global2[_wgslsmith_index_u32(1u, 6u)], true, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(1u, 24u)], 6u)]), vec4<bool>(global2[_wgslsmith_index_u32(0u, 6u)], global2[_wgslsmith_index_u32(1u, 6u)], true, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 6u)])), select(vec4<bool>(global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 6u)], global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 6u)], global2[_wgslsmith_index_u32(936u, 6u)], global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(94829u, 24u)], 6u)]), vec4<bool>(global2[_wgslsmith_index_u32(4294967295u, 6u)], global2[_wgslsmith_index_u32(16209u, 6u)], global2[_wgslsmith_index_u32(4294967295u, 6u)], false), vec4<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], false, false, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(0u, 24u)], 6u)])), !vec4<bool>(false, false, false, global2[_wgslsmith_index_u32(u_input.e, 6u)]))));
                var var_3 = all(var_2.xx);
                let var_4 = true;
            }
            for (var var_2 = 0i; all(select(select(!select(vec3<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], false, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(1u, 24u)], 6u)]), vec3<bool>(false, true, false), vec3<bool>(false, false, true)), !vec3<bool>(global2[_wgslsmith_index_u32(57590u, 6u)], false, true), all(select(vec3<bool>(global2[_wgslsmith_index_u32(33106u, 6u)], true, true), vec3<bool>(global2[_wgslsmith_index_u32(27002u, 6u)], global2[_wgslsmith_index_u32(0u, 6u)], true), global2[_wgslsmith_index_u32(u_input.e, 6u)]))), select(vec3<bool>(true, false, global2[_wgslsmith_index_u32(_wgslsmith_dot_vec3_u32(vec3<u32>(u_input.e, global3[_wgslsmith_index_u32(686u, 24u)], u_input.e), vec3<u32>(u_input.e, 1u, 0u)), 6u)]), select(!vec3<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], global2[_wgslsmith_index_u32(2919u, 6u)], global2[_wgslsmith_index_u32(18939u, 6u)]), select(vec3<bool>(false, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(0u, 24u)], 6u)], global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(24897u, 24u)], 6u)]), vec3<bool>(global2[_wgslsmith_index_u32(0u, 6u)], false, false), global2[_wgslsmith_index_u32(69879u, 6u)]), !vec3<bool>(global2[_wgslsmith_index_u32(4294967295u, 6u)], true, global2[_wgslsmith_index_u32(4294967295u, 6u)])), select(select(vec3<bool>(global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(6156u, 24u)], 6u)], false, global2[_wgslsmith_index_u32(u_input.e, 6u)]), vec3<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], true, false), vec3<bool>(true, global2[_wgslsmith_index_u32(u_input.e, 6u)], true)), !vec3<bool>(global2[_wgslsmith_index_u32(4294967295u, 6u)], global2[_wgslsmith_index_u32(0u, 6u)], true), false && global2[_wgslsmith_index_u32(u_input.e, 6u)])), global2[_wgslsmith_index_u32(func_4(~vec3<u32>(4294967295u, u_input.e, 4294967295u), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(max(-716f, 1095f)), _wgslsmith_f_op_f32(1000f + 192f))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(1699f, 493f, -1128f) * vec3<f32>(-248f, 561f, 1166f))), true), 6u)])); var_2 -= 1i) {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                global2 = array<bool, 6>();
            }
        }
        case -5733i: {
            global0 = array<i32, 11>();
            let var_0 = true;
            if (false) {
                let var_1 = select(vec2<bool>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-236f + 1023f) - _wgslsmith_f_op_f32(step(1679f, -1944f))) > -245f, var_0), vec2<bool>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(-163f)) * _wgslsmith_f_op_f32(abs(1000f))) == 353f, var_0), !all(select(select(vec3<bool>(true, false, false), vec3<bool>(true, var_0, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(32571u, 24u)], 6u)]), vec3<bool>(false, global2[_wgslsmith_index_u32(0u, 6u)], true)), vec3<bool>(global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(42u, 24u)], 6u)], var_0, false), !vec3<bool>(global2[_wgslsmith_index_u32(11937u, 6u)], true, var_0))));
                global3 = array<u32, 24>();
                global2 = array<bool, 6>();
            }
            var var_1 = func_5(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(step(vec4<f32>(130f, 375f, 812f, -1449f), _wgslsmith_f_op_vec4_f32(-vec4<f32>(348f, 1034f, -1388f, 518f)))))), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(f32(-1f) * -1000f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -1182f) * _wgslsmith_f_op_f32(abs(401f)))), global1[_wgslsmith_index_u32(abs(func_6()), 29u)] >= 0i)));
            if (true) {
                var var_2 = func_7(Struct_1(u_input.a.x), !(!vec4<bool>(true, any(vec4<bool>(false, var_0, false, true)), !var_0, false)), Struct_1(global0[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(1u, 24u)], 11u)]), vec2<bool>(global2[_wgslsmith_index_u32(_wgslsmith_dot_vec3_u32(min(countOneBits(vec3<u32>(6437u, 4294967295u, u_input.e)), ~vec3<u32>(1u, 35118u, 0u)), vec3<u32>(1u, u_input.e, ~66043u)), 6u)], true));
            }
        }
        default: {
            for (var var_0 = -84584i; ; var_0 = _wgslsmith_clamp_i32(global0[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(min(4294967295u, 1u), 24u)], 11u)], -(~(~global1[_wgslsmith_index_u32(68096u, 29u)])), 2147483647i)) {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                break;
            }
            switch (-global1[_wgslsmith_index_u32(_wgslsmith_clamp_u32(38103u, 0u, u_input.e), 29u)]) {
                default: {
                    var var_0 = ~vec2<i32>(-u_input.b.x, abs(_wgslsmith_dot_vec4_i32(-vec4<i32>(global0[_wgslsmith_index_u32(8855u, 11u)], 1i, global0[_wgslsmith_index_u32(0u, 11u)], -8467i), vec4<i32>(global0[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 24u)], 11u)], i32(-2147483648), global1[_wgslsmith_index_u32(0u, 29u)], 2147483647i))));
                    var_0 = -select(~(-max(vec2<i32>(global0[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 11u)], var_0.x), u_input.b.xx)), _wgslsmith_mod_vec2_i32(vec2<i32>(global0[_wgslsmith_index_u32(_wgslsmith_mult_u32(u_input.e, global3[_wgslsmith_index_u32(1u, 24u)]), 11u)], 2147483647i), vec2<i32>(global0[_wgslsmith_index_u32(firstLeadingBit(0u), 11u)], i32(-2147483648))), select(!vec2<bool>(true, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(1u, 24u)], 6u)]), !vec2<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], false), select(select(vec2<bool>(global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(4294967295u, 24u)], 6u)], global2[_wgslsmith_index_u32(0u, 6u)]), vec2<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(1u, 24u)], 6u)]), vec2<bool>(true, global2[_wgslsmith_index_u32(4294967295u, 6u)])), vec2<bool>(global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(2815u, 24u)], 24u)], 24u)], 6u)], global2[_wgslsmith_index_u32(u_input.e, 6u)]), global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(min(u_input.e, global3[_wgslsmith_index_u32(36900u, 24u)]), 24u)], 24u)], 6u)])));
                    let var_1 = func_5(_wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-247f * 335f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(-1000f))), 1238f, 2817f) * vec4<f32>(267f, 1000f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1000f)), -958f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1425f)))) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1084f * _wgslsmith_f_op_f32(-1217f)))));
                    var var_2 = true;
                    global3 = array<u32, 24>();
                }
            }
            var var_0 = _wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(abs(vec4<f32>(485f, -145f, -969f, -981f))) * vec4<f32>(-432f, -1710f, 335f, 829f)) + _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-131f, -1120f, -1358f, -1518f)) - vec4<f32>(-1000f, -678f, 1121f, 526f))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(step(vec4<f32>(1027f, -1769f, 405f, -554f), vec4<f32>(610f, 1212f, -1000f, -250f)))))))), _wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(abs(vec4<f32>(645f, 230f, -607f, 836f))) * _wgslsmith_f_op_vec4_f32(vec4<f32>(1210f, -692f, 1393f, 997f) - vec4<f32>(978f, 2372f, 1003f, -110f)))))))));
        }
    }
    global2 = array<bool, 6>();
    switch (_wgslsmith_dot_vec4_i32(-countOneBits(-vec4<i32>(-9777i, -39539i, u_input.c.x, 1i)), max(vec4<i32>(19846i >> (firstLeadingBit(u_input.e) % 32u), u_input.d, global0[_wgslsmith_index_u32(4294967295u, 11u)], ~(-5460i)), _wgslsmith_mod_vec4_i32(select(~vec4<i32>(0i, i32(-2147483648), global0[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(23884u, 24u)], 11u)], 0i), select(vec4<i32>(13083i, u_input.b.x, u_input.b.x, -1265i), vec4<i32>(global0[_wgslsmith_index_u32(0u, 11u)], 9115i, u_input.b.x, 1i), vec4<bool>(false, true, false, false)), vec4<bool>(true, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 6u)], false, global2[_wgslsmith_index_u32(u_input.e, 6u)])), select(_wgslsmith_mod_vec4_i32(vec4<i32>(global0[_wgslsmith_index_u32(u_input.e, 11u)], global0[_wgslsmith_index_u32(57647u, 11u)], -22011i, global1[_wgslsmith_index_u32(135313u, 29u)]), vec4<i32>(global0[_wgslsmith_index_u32(66128u, 11u)], u_input.d, 2728i, 0i)), _wgslsmith_mod_vec4_i32(vec4<i32>(14019i, -3729i, global1[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(4294967295u, 24u)], 29u)], u_input.d), vec4<i32>(i32(-2147483648), global0[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(4269u, 24u)], 24u)], 11u)], 1i, 0i)), true))))) {
        case -11525i: {
            var var_0 = ~(~7171u);
            switch (-global0[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(firstTrailingBit(~_wgslsmith_mod_u32(~0u, _wgslsmith_clamp_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(4294967295u, 24u)], 24u)], 24u)], 4294967295u, 4294967295u))), 24u)], 24u)], 11u)]) {
                case i32(-2147483648): {
                    let var_1 = !(!(!select(vec4<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], global2[_wgslsmith_index_u32(34539u, 6u)], global2[_wgslsmith_index_u32(193u, 6u)], false), vec4<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], global2[_wgslsmith_index_u32(1u, 6u)], global2[_wgslsmith_index_u32(103428u, 6u)], global2[_wgslsmith_index_u32(u_input.e, 6u)]), vec4<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], global2[_wgslsmith_index_u32(0u, 6u)], true, true))));
                    var var_2 = func_7(Struct_1(-16835i), vec4<bool>(global2[_wgslsmith_index_u32(reverseBits(_wgslsmith_mod_u32(_wgslsmith_mult_u32(u_input.e, 4294967295u), u_input.e)), 6u)], true, all(vec3<bool>(global2[_wgslsmith_index_u32(~30045u, 6u)], select(true, false, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(32944u, 24u)], 24u)], 6u)]), true)), true), Struct_1(-(u_input.d & global0[_wgslsmith_index_u32(~u_input.e, 11u)])), vec2<bool>(true, var_1.x));
                }
                default: {
                    let var_1 = reverseBits(vec3<u32>(0u | ~u_input.e, ~_wgslsmith_mod_u32(0u, 4294967295u), 24152u) >> (~vec3<u32>(4294967295u, ~u_input.e, ~25340u) % vec3<u32>(32u)));
                    var var_2 = false;
                    var var_3 = Struct_1(-_wgslsmith_add_i32(i32(-1i) * -1i, i32(-1i) * -3031i));
                    var var_4 = Struct_1(~(-30962i));
                    var_2 = !global2[_wgslsmith_index_u32(~(~1u), 6u)] | true;
                }
            }
            let var_1 = _wgslsmith_mult_vec3_i32(vec3<i32>(u_input.b.x, u_input.d, _wgslsmith_dot_vec4_i32(vec4<i32>(-1i, u_input.d, global1[_wgslsmith_index_u32(43150u, 29u)], global1[_wgslsmith_index_u32(4294967295u, 29u)]), vec4<i32>(global1[_wgslsmith_index_u32(13774u, 29u)], u_input.a.x, 1i, global1[_wgslsmith_index_u32(76486u, 29u)]) << (vec4<u32>(u_input.e, global3[_wgslsmith_index_u32(4294967295u, 24u)], global3[_wgslsmith_index_u32(1u, 24u)], 0u) % vec4<u32>(32u)))), _wgslsmith_mod_vec3_i32(_wgslsmith_mult_vec3_i32(vec3<i32>(global1[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(4294967295u, 24u)], 29u)], u_input.a.x, i32(-2147483648)), u_input.b), reverseBits(_wgslsmith_clamp_vec3_i32(vec3<i32>(-27991i, global1[_wgslsmith_index_u32(u_input.e, 29u)], 2147483647i), u_input.b, u_input.b)))) << (vec3<u32>(_wgslsmith_clamp_u32(~1u, global3[_wgslsmith_index_u32(max(1u, ~12438u), 24u)], 0u), global3[_wgslsmith_index_u32(~firstLeadingBit(_wgslsmith_mod_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 1u)), 24u)], firstLeadingBit(~(~u_input.e))) % vec3<u32>(32u));
        }
        case 1i: {
            global0 = array<i32, 11>();
        }
        case 2147483647i: {
            if (global2[_wgslsmith_index_u32(~global3[_wgslsmith_index_u32(_wgslsmith_dot_vec4_u32(~(~vec4<u32>(1u, u_input.e, 50611u, global3[_wgslsmith_index_u32(1u, 24u)]) >> (~vec4<u32>(global3[_wgslsmith_index_u32(4294967295u, 24u)], global3[_wgslsmith_index_u32(1u, 24u)], 18236u, 38974u) % vec4<u32>(32u))), ~(~vec4<u32>(17813u, u_input.e, u_input.e, 0u)) & reverseBits(_wgslsmith_div_vec4_u32(vec4<u32>(32147u, u_input.e, u_input.e, 108347u), vec4<u32>(95140u, 15029u, u_input.e, 89793u)))), 24u)], 6u)]) {
                let var_0 = 0u;
                let var_1 = vec2<i32>(-_wgslsmith_mod_i32(-_wgslsmith_add_i32(global1[_wgslsmith_index_u32(u_input.e, 29u)], global0[_wgslsmith_index_u32(1u, 11u)]), select(i32(-1i) * -17443i, func_7(Struct_1(28836i), vec4<bool>(true, global2[_wgslsmith_index_u32(u_input.e, 6u)], true, global2[_wgslsmith_index_u32(1u, 6u)]), Struct_1(i32(-2147483648)), vec2<bool>(global2[_wgslsmith_index_u32(1u, 6u)], global2[_wgslsmith_index_u32(16230u, 6u)])).a, true)), _wgslsmith_dot_vec2_i32(vec2<i32>(func_5(vec4<f32>(201f, -1072f, 635f, 113f), -1559f).a ^ min(-24617i, global0[_wgslsmith_index_u32(var_0, 11u)]), global0[_wgslsmith_index_u32(var_0, 11u)] >> (global3[_wgslsmith_index_u32(_wgslsmith_mult_u32(u_input.e, global3[_wgslsmith_index_u32(2874u, 24u)]), 24u)] % 32u)), abs(vec2<i32>(global1[_wgslsmith_index_u32(u_input.e, 29u)], global1[_wgslsmith_index_u32(1u, 29u)]) & vec2<i32>(i32(-2147483648), u_input.d))));
                return Struct_1(var_1.x);
            }
        }
        case -22881i: {
            for (; false; ) {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                let var_0 = u_input.e;
                global0 = array<i32, 11>();
                global3 = array<u32, 24>();
                global0 = array<i32, 11>();
                global0 = array<i32, 11>();
            }
            loop {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
            }
        }
        default: {
            switch (global1[_wgslsmith_index_u32(_wgslsmith_mult_u32(u_input.e, ~4294967295u), 29u)]) {
                default: {
                }
            }
            var var_0 = select(!(!(!vec4<bool>(false, global2[_wgslsmith_index_u32(4294967295u, 6u)], global2[_wgslsmith_index_u32(u_input.e, 6u)], true))), !select(!vec4<bool>(true, true, false, global2[_wgslsmith_index_u32(4350u, 6u)]), !vec4<bool>(true, global2[_wgslsmith_index_u32(u_input.e, 6u)], true, global2[_wgslsmith_index_u32(0u, 6u)]), vec4<bool>(global2[_wgslsmith_index_u32(46768u, 6u)], 4294967295u >= u_input.e, all(vec2<bool>(global2[_wgslsmith_index_u32(4294967295u, 6u)], true)), select(global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(1u, 24u)], 6u)], global2[_wgslsmith_index_u32(4294967295u, 6u)], false))), !any(select(select(vec2<bool>(global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(4294967295u, 24u)], 24u)], 6u)], global2[_wgslsmith_index_u32(4294967295u, 6u)]), vec2<bool>(global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(0u, 24u)], 6u)], false), vec2<bool>(true, global2[_wgslsmith_index_u32(u_input.e, 6u)])), !vec2<bool>(global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(1u, 24u)], 6u)], global2[_wgslsmith_index_u32(48167u, 6u)]), vec2<bool>(false, global2[_wgslsmith_index_u32(1u, 6u)]))));
            for (var var_1 = 17101i; var_1 >= 2147483647i; ) {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                var_0 = select(select(select(vec4<bool>(select(true, true, global2[_wgslsmith_index_u32(1u, 6u)]), false, var_0.x, var_0.x), vec4<bool>(any(vec4<bool>(true, true, true, false)), true, false, select(global2[_wgslsmith_index_u32(40021u, 6u)], var_0.x, true)), !(!vec4<bool>(global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(0u, 24u)], 24u)], 6u)], true, var_0.x, global2[_wgslsmith_index_u32(u_input.e, 6u)]))), select(!vec4<bool>(var_0.x, global2[_wgslsmith_index_u32(0u, 6u)], false, var_0.x), vec4<bool>(false, var_0.x, any(var_0.zz), global2[_wgslsmith_index_u32(~global3[_wgslsmith_index_u32(4294967295u, 24u)], 6u)]), select(vec4<bool>(var_0.x, true, global2[_wgslsmith_index_u32(1u, 6u)], global2[_wgslsmith_index_u32(0u, 6u)]), vec4<bool>(global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(57835u, 24u)], 6u)], global2[_wgslsmith_index_u32(20995u, 6u)], true, true), any(var_0.ywx))), any(!vec4<bool>(false, var_0.x, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 6u)], global2[_wgslsmith_index_u32(3412u, 6u)]))), vec4<bool>(true, true, global2[_wgslsmith_index_u32(1u, 6u)], !(!global2[_wgslsmith_index_u32(1u, 6u)])), select(vec4<bool>(!global2[_wgslsmith_index_u32(u_input.e, 6u)] || global2[_wgslsmith_index_u32(8425u, 6u)], any(select(vec4<bool>(true, global2[_wgslsmith_index_u32(4294967295u, 6u)], false, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(5297u, 24u)], 6u)]), vec4<bool>(global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(9048u, 24u)], 24u)], 6u)], var_0.x, var_0.x, false), vec4<bool>(true, global2[_wgslsmith_index_u32(70286u, 6u)], var_0.x, false))), global2[_wgslsmith_index_u32(~12413u, 6u)], true), select(vec4<bool>(var_0.x, var_0.x, true, true), !vec4<bool>(false, true, true, var_0.x), global2[_wgslsmith_index_u32(44813u, 6u)]), any(var_0.yxw) || false));
                continue;
            }
            var_0 = vec4<bool>(true, false, var_0.x, any(vec4<bool>(!all(var_0.wyy), global2[_wgslsmith_index_u32(~1971u, 6u)], all(!vec4<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], true, global2[_wgslsmith_index_u32(4294967295u, 6u)], var_0.x)), true)));
        }
    }
    switch (global0[_wgslsmith_index_u32(abs(1u & u_input.e), 11u)]) {
        case 8500i: {
            var var_0 = func_7(func_7(Struct_1(_wgslsmith_add_i32(1i, u_input.a.x)), select(vec4<bool>(true && global2[_wgslsmith_index_u32(u_input.e, 6u)], true, true, global2[_wgslsmith_index_u32(1u, 6u)] && false), select(!vec4<bool>(global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 6u)], false, global2[_wgslsmith_index_u32(51920u, 6u)], global2[_wgslsmith_index_u32(u_input.e, 6u)]), vec4<bool>(true, false, global2[_wgslsmith_index_u32(5054u, 6u)], true), true), global2[_wgslsmith_index_u32(abs(global3[_wgslsmith_index_u32(4294967295u, 24u)]), 6u)]), Struct_1(firstLeadingBit(global0[_wgslsmith_index_u32(u_input.e, 11u)] | 1018i)), !vec2<bool>(true, select(false, false, global2[_wgslsmith_index_u32(1u, 6u)]))), select(select(vec4<bool>(true, any(vec2<bool>(global2[_wgslsmith_index_u32(31327u, 6u)], global2[_wgslsmith_index_u32(u_input.e, 6u)])), true, true | global2[_wgslsmith_index_u32(0u, 6u)]), !select(vec4<bool>(global2[_wgslsmith_index_u32(1u, 6u)], true, global2[_wgslsmith_index_u32(60730u, 6u)], false), vec4<bool>(false, global2[_wgslsmith_index_u32(u_input.e, 6u)], true, global2[_wgslsmith_index_u32(4294967295u, 6u)]), vec4<bool>(global2[_wgslsmith_index_u32(1u, 6u)], false, global2[_wgslsmith_index_u32(0u, 6u)], global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(4294967295u, 24u)], 6u)])), select(!vec4<bool>(global2[_wgslsmith_index_u32(1u, 6u)], false, global2[_wgslsmith_index_u32(u_input.e, 6u)], global2[_wgslsmith_index_u32(u_input.e, 6u)]), select(vec4<bool>(true, false, false, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(388u, 24u)], 6u)]), vec4<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], global2[_wgslsmith_index_u32(26836u, 6u)], true, global2[_wgslsmith_index_u32(105826u, 6u)]), vec4<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], false, global2[_wgslsmith_index_u32(u_input.e, 6u)], global2[_wgslsmith_index_u32(u_input.e, 6u)])), vec4<bool>(true, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(19659u, 24u)], 24u)], 6u)], false, false))), !(!(!vec4<bool>(true, global2[_wgslsmith_index_u32(8729u, 6u)], global2[_wgslsmith_index_u32(u_input.e, 6u)], global2[_wgslsmith_index_u32(30299u, 6u)]))), !select(select(vec4<bool>(global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(14573u, 24u)], 6u)], global2[_wgslsmith_index_u32(15988u, 6u)], global2[_wgslsmith_index_u32(4294967295u, 6u)], global2[_wgslsmith_index_u32(970u, 6u)]), vec4<bool>(false, true, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(0u, 24u)], 24u)], 24u)], 6u)], global2[_wgslsmith_index_u32(27580u, 6u)]), vec4<bool>(true, global2[_wgslsmith_index_u32(0u, 6u)], global2[_wgslsmith_index_u32(u_input.e, 6u)], false)), vec4<bool>(global2[_wgslsmith_index_u32(10842u, 6u)], global2[_wgslsmith_index_u32(57637u, 6u)], global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(4294967295u, 24u)], 6u)], global2[_wgslsmith_index_u32(27765u, 6u)]), global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)] & 1u, 6u)])), func_5(_wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(vec4<f32>(664f, -672f, 432f, -474f), _wgslsmith_f_op_vec4_f32(-vec4<f32>(-1138f, 1066f, 1000f, 237f)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(345f - 1420f)))), vec2<bool>(~56011u == ~_wgslsmith_div_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], global3[_wgslsmith_index_u32(u_input.e, 24u)]), false == (39935u != (global3[_wgslsmith_index_u32(0u, 24u)] ^ 0u))));
        }
        case -1i: {
            global3 = array<u32, 24>();
            for (var var_0 = -18666i; any(vec2<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], _wgslsmith_dot_vec4_u32(reverseBits(vec4<u32>(4294967295u, 5502u, u_input.e, 42349u)), reverseBits(vec4<u32>(global3[_wgslsmith_index_u32(u_input.e, 24u)], 3477u, 4294967295u, 1u))) >= _wgslsmith_clamp_u32(~u_input.e, u_input.e ^ global3[_wgslsmith_index_u32(0u, 24u)], u_input.e))); var_0 -= 1i) {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                global1 = array<i32, 29>();
                global3 = array<u32, 24>();
                let var_1 = func_5(vec4<f32>(_wgslsmith_f_op_f32(379f + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(511f)))), _wgslsmith_f_op_f32(1009f - _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(ceil(2267f)), -714f, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(0u, 24u)], 24u)] >> (u_input.e % 32u), 24u)], 6u)]))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1483f) + _wgslsmith_f_op_f32(-929f - 358f))), _wgslsmith_f_op_f32(-725f)), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(-1063f)) + _wgslsmith_f_op_f32(-140f * -620f))))));
            }
            var var_0 = func_5(vec4<f32>(_wgslsmith_div_f32(-1851f, _wgslsmith_div_f32(_wgslsmith_f_op_f32(sign(647f)), _wgslsmith_f_op_f32(min(-1206f, -449f)))), -1154f, 673f, _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(round(-1318f))))), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -492f) - _wgslsmith_f_op_f32(trunc(954f))), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(f32(-1f) * -617f))))))));
            let var_1 = 1u;
        }
        case 1i: {
            var var_0 = _wgslsmith_mod_u32(_wgslsmith_mult_u32(3945u, ~u_input.e), ~_wgslsmith_sub_u32(~(u_input.e << (1u % 32u)), global3[_wgslsmith_index_u32(~4294967295u, 24u)]));
            let var_1 = 855f;
            for (; ; ) {
                if (LOOP_COUNTERS[12u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
                break;
            }
            loop {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                global1 = array<i32, 29>();
                let var_2 = 4294967295u;
                var var_3 = Struct_1(~5834i);
                continue;
            }
            if (!any(select(select(select(vec2<bool>(false, true), vec2<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], global2[_wgslsmith_index_u32(u_input.e, 6u)]), true), vec2<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], false), select(vec2<bool>(global2[_wgslsmith_index_u32(48711u, 6u)], true), vec2<bool>(global2[_wgslsmith_index_u32(0u, 6u)], global2[_wgslsmith_index_u32(1u, 6u)]), true)), vec2<bool>(true, true), _wgslsmith_f_op_f32(f32(-1f) * -214f) != _wgslsmith_f_op_f32(-var_1)))) {
                let var_2 = 2038i;
            }
        }
        default: {
            for (; !(all(select(select(vec4<bool>(true, true, false, false), vec4<bool>(true, false, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 6u)], global2[_wgslsmith_index_u32(1u, 6u)]), vec4<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], global2[_wgslsmith_index_u32(u_input.e, 6u)], true, true)), vec4<bool>(true, global2[_wgslsmith_index_u32(u_input.e, 6u)], true, global2[_wgslsmith_index_u32(u_input.e, 6u)]), vec4<bool>(global2[_wgslsmith_index_u32(14987u, 6u)], true, true, global2[_wgslsmith_index_u32(86429u, 6u)]))) && global2[_wgslsmith_index_u32(max(_wgslsmith_add_u32(u_input.e, 10266u), u_input.e & 1u) | u_input.e, 6u)]); ) {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                let var_0 = func_5(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(-vec4<f32>(736f, -1944f, -1391f, -1000f)), _wgslsmith_f_op_vec4_f32(floor(vec4<f32>(-1506f, 187f, -826f, -539f))))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(min(-476f, 943f)))))));
                let var_1 = ~(~max(_wgslsmith_div_u32(45672u, ~0u), 7041u));
                continue;
            }
            var var_0 = func_7(Struct_1(global0[_wgslsmith_index_u32(78247u, 11u)] ^ _wgslsmith_div_i32(i32(-2147483648), global0[_wgslsmith_index_u32(0u, 11u)] >> (global3[_wgslsmith_index_u32(0u, 24u)] % 32u))), !(!(!select(vec4<bool>(global2[_wgslsmith_index_u32(1u, 6u)], true, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(5199u, 24u)], 24u)], 6u)], true), vec4<bool>(global2[_wgslsmith_index_u32(4294967295u, 6u)], global2[_wgslsmith_index_u32(3527u, 6u)], true, false), global2[_wgslsmith_index_u32(u_input.e, 6u)]))), func_7(Struct_1(abs(-u_input.b.x)), !(!(!vec4<bool>(true, false, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(59820u, 24u)], 24u)], 6u)], true))), Struct_1(8845i), vec2<bool>(true, false)), select(select(vec2<bool>(global0[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 11u)] == global0[_wgslsmith_index_u32(u_input.e, 11u)], global2[_wgslsmith_index_u32(~global3[_wgslsmith_index_u32(u_input.e, 24u)], 6u)]), select(vec2<bool>(true, true), select(vec2<bool>(global2[_wgslsmith_index_u32(0u, 6u)], global2[_wgslsmith_index_u32(1u, 6u)]), vec2<bool>(global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(59698u, 24u)], 24u)], 6u)], true), global2[_wgslsmith_index_u32(63732u, 6u)]), select(vec2<bool>(false, true), vec2<bool>(false, true), global2[_wgslsmith_index_u32(0u, 6u)])), !(!global2[_wgslsmith_index_u32(72048u, 6u)])), select(select(!vec2<bool>(global2[_wgslsmith_index_u32(4294967295u, 6u)], false), vec2<bool>(true, global2[_wgslsmith_index_u32(4294967295u, 6u)]), any(vec3<bool>(global2[_wgslsmith_index_u32(0u, 6u)], global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(4294967295u, 24u)], 6u)], true))), vec2<bool>(global2[_wgslsmith_index_u32(1u, 6u)], any(vec2<bool>(true, true))), true), global2[_wgslsmith_index_u32(22783u, 6u)]));
            for (var var_1 = -175i; all(!select(select(vec3<bool>(global2[_wgslsmith_index_u32(1u, 6u)], global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 24u)], 24u)], 6u)], true), vec3<bool>(true, true, true), global2[_wgslsmith_index_u32(_wgslsmith_div_u32(u_input.e, u_input.e), 6u)]), vec3<bool>(true, true, true), select(!vec3<bool>(false, true, global2[_wgslsmith_index_u32(71205u, 6u)]), select(vec3<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(10001u, 24u)], 6u)], global2[_wgslsmith_index_u32(u_input.e, 6u)]), vec3<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], false, false), vec3<bool>(global2[_wgslsmith_index_u32(1u, 6u)], true, global2[_wgslsmith_index_u32(u_input.e, 6u)])), true))); var_1 -= 1i) {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
                var var_2 = ~_wgslsmith_dot_vec4_i32(select(max(vec4<i32>(var_0.a, 7284i, -1i, var_0.a), vec4<i32>(global1[_wgslsmith_index_u32(1u, 29u)], var_0.a, 1i, 45949i)) | _wgslsmith_add_vec4_i32(vec4<i32>(global1[_wgslsmith_index_u32(u_input.e, 29u)], 20157i, 1756i, 0i), vec4<i32>(18640i, var_0.a, var_0.a, -7342i)), _wgslsmith_div_vec4_i32(_wgslsmith_mod_vec4_i32(vec4<i32>(1i, global0[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 11u)], u_input.d, -20157i), vec4<i32>(-42668i, global1[_wgslsmith_index_u32(u_input.e, 29u)], -2408i, u_input.d)), _wgslsmith_mod_vec4_i32(vec4<i32>(0i, 47887i, i32(-2147483648), var_0.a), vec4<i32>(i32(-2147483648), var_0.a, global0[_wgslsmith_index_u32(4294967295u, 11u)], 1i))), any(!vec3<bool>(global2[_wgslsmith_index_u32(11825u, 6u)], true, true))), vec4<i32>(min(i32(-2147483648), 22948i), i32(-2147483648), max(2147483647i, u_input.d), _wgslsmith_div_i32(global0[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(2967u, 24u)] << (4294967295u % 32u), 11u)], global1[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(4294967295u, 24u)], 29u)] << (4294967295u % 32u))));
                var_2 = ~_wgslsmith_clamp_i32(func_7(func_5(_wgslsmith_f_op_vec4_f32(round(vec4<f32>(152f, -941f, -845f, 1503f))), -639f), select(!vec4<bool>(false, true, true, global2[_wgslsmith_index_u32(0u, 6u)]), vec4<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], global2[_wgslsmith_index_u32(1561u, 6u)], false, false), false), func_5(_wgslsmith_f_op_vec4_f32(-vec4<f32>(624f, 512f, 191f, 1978f)), _wgslsmith_f_op_f32(499f - 1085f)), !select(vec2<bool>(false, false), vec2<bool>(global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 24u)], 6u)], global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(0u, 24u)], 6u)]), true)).a, ~(~1i), var_0.a);
                var var_3 = _wgslsmith_f_op_vec2_f32(vec2<f32>(1f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(-100f, _wgslsmith_f_op_f32(max(-1525f, 759f)))))) + vec2<f32>(_wgslsmith_f_op_f32(-786f), _wgslsmith_f_op_f32(sign(907f))));
            }
        }
    }
    return func_5(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(select(vec4<f32>(_wgslsmith_f_op_f32(-604f * -845f), _wgslsmith_f_op_f32(round(1004f)), _wgslsmith_f_op_f32(f32(-1f) * -748f), _wgslsmith_f_op_f32(step(-1898f, 477f))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(min(vec4<f32>(-1325f, 1000f, 1444f, 292f), vec4<f32>(3125f, -1378f, -1235f, 1656f)))), !(!vec4<bool>(false, true, true, global2[_wgslsmith_index_u32(u_input.e, 6u)]))))), 1058f);
}

fn func_8(arg_0: vec4<bool>, arg_1: vec4<i32>, arg_2: Struct_1, arg_3: Struct_1) -> bool {
    if ((u_input.e & global3[_wgslsmith_index_u32(u_input.e, 24u)]) >= func_4(countOneBits(vec3<u32>(4294967295u, u_input.e, 1u) >> (vec3<u32>(46033u, global3[_wgslsmith_index_u32(4937u, 24u)], u_input.e) % vec3<u32>(32u))) & vec3<u32>(~52075u, u_input.e, 0u), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(step(1341f, 110f)))) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(388f, -999f)))), _wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(round(1143f)), 1391f, -728f)), any(arg_0.wyw))) {
        var var_0 = min(global1[_wgslsmith_index_u32(1u, 29u)], arg_3.a);
        switch (_wgslsmith_add_i32((1i ^ _wgslsmith_mult_i32(_wgslsmith_dot_vec3_i32(vec3<i32>(global0[_wgslsmith_index_u32(18946u, 11u)], arg_2.a, u_input.b.x), vec3<i32>(3853i, arg_1.x, -23106i)), func_3().a)) << (_wgslsmith_div_u32(_wgslsmith_dot_vec4_u32(vec4<u32>(global3[_wgslsmith_index_u32(4294967295u, 24u)], u_input.e, 1u, u_input.e), ~vec4<u32>(21386u, 18154u, 103655u, global3[_wgslsmith_index_u32(18949u, 24u)])), _wgslsmith_dot_vec2_u32(vec2<u32>(4294967295u, 1u), ~vec2<u32>(global3[_wgslsmith_index_u32(u_input.e, 24u)], global3[_wgslsmith_index_u32(23216u, 24u)]))) % 32u), _wgslsmith_mod_i32(1835i, 313i))) {
            case 15896i: {
            }
            case -17245i: {
                var var_1 = ~(select(~min(vec2<u32>(123498u, 23909u), vec2<u32>(3957u, global3[_wgslsmith_index_u32(u_input.e, 24u)])), select(vec2<u32>(86615u, 74077u), vec2<u32>(0u, global3[_wgslsmith_index_u32(4294967295u, 24u)]), global2[_wgslsmith_index_u32(u_input.e, 6u)]) >> ((vec2<u32>(u_input.e, 37419u) << (vec2<u32>(u_input.e, u_input.e) % vec2<u32>(32u))) % vec2<u32>(32u)), arg_0.xx) & _wgslsmith_add_vec2_u32(vec2<u32>(firstLeadingBit(u_input.e), _wgslsmith_mod_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], global3[_wgslsmith_index_u32(45755u, 24u)])), _wgslsmith_mod_vec2_u32(vec2<u32>(1u, 1u), ~vec2<u32>(global3[_wgslsmith_index_u32(u_input.e, 24u)], 48955u))));
            }
            case 1i: {
                var var_1 = vec2<bool>(true, true);
            }
            case 0i: {
                var var_1 = !vec2<bool>(all(select(select(vec3<bool>(arg_0.x, global2[_wgslsmith_index_u32(9550u, 6u)], arg_0.x), vec3<bool>(arg_0.x, false, arg_0.x), false), !arg_0.zzz, -11845i == arg_3.a)), false);
                var var_2 = func_5(_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -375f) * _wgslsmith_f_op_f32(sign(917f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -440f) + _wgslsmith_f_op_f32(f32(-1f) * -705f)), _wgslsmith_div_f32(-983f, _wgslsmith_f_op_f32(ceil(547f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1248f) - _wgslsmith_f_op_f32(-988f - 168f)))), _wgslsmith_f_op_f32(abs(-840f)));
            }
            default: {
                var var_1 = all(!arg_0);
                return !any(arg_0.wz);
            }
        }
        global1 = array<i32, 29>();
        switch (global0[_wgslsmith_index_u32(u_input.e, 11u)]) {
            case 13009i: {
                global1 = array<i32, 29>();
                let var_1 = !arg_0;
                let var_2 = global3[_wgslsmith_index_u32(92770u, 24u)];
                global1 = array<i32, 29>();
            }
            case 2147483647i: {
                let var_1 = func_5(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(vec4<f32>(-1353f, 1075f, 283f, 625f) * vec4<f32>(-1607f, -232f, 298f, -1825f)), _wgslsmith_f_op_vec4_f32(sign(vec4<f32>(575f, -1477f, 1270f, 2145f))))))) - vec4<f32>(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(max(1000f, 1000f)), 691f)), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-726f * 2312f), _wgslsmith_f_op_f32(-1241f))), _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(trunc(228f)))), _wgslsmith_f_op_f32(-676f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(-1307f)) * _wgslsmith_f_op_f32(256f * _wgslsmith_div_f32(625f, -218f)))));
                var var_2 = ~(vec3<i32>(u_input.b.x, (0i >> (u_input.e % 32u)) >> ((0u >> (u_input.e % 32u)) % 32u), arg_3.a) >> (~vec3<u32>(_wgslsmith_dot_vec4_u32(vec4<u32>(u_input.e, 1u, 42333u, 1u), vec4<u32>(43166u, u_input.e, 10864u, global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 24u)])), u_input.e ^ global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(1u, 24u)], 24u)], abs(u_input.e)) % vec3<u32>(32u)));
                global2 = array<bool, 6>();
                global0 = array<i32, 11>();
                global2 = array<bool, 6>();
            }
            default: {
                let var_1 = vec2<i32>(0i, arg_3.a);
                var var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(-685f, _wgslsmith_f_op_f32(-415f * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(-641f)))))));
                global3 = array<u32, 24>();
                var var_3 = arg_1;
                global2 = array<bool, 6>();
            }
        }
    }
    var var_0 = select(arg_0, select(arg_0, vec4<bool>(-u_input.c.x >= reverseBits(arg_3.a), arg_0.x, true, !all(vec2<bool>(true, arg_0.x))), (i32(-1i) * -14785i) == -(~global1[_wgslsmith_index_u32(0u, 29u)])), select(vec4<bool>(true, arg_0.x, global2[_wgslsmith_index_u32(20157u, 6u)], arg_0.x || any(vec4<bool>(false, arg_0.x, arg_0.x, false))), vec4<bool>(!select(arg_0.x, true, global2[_wgslsmith_index_u32(0u, 6u)]), any(select(vec2<bool>(arg_0.x, arg_0.x), arg_0.zz, vec2<bool>(true, global2[_wgslsmith_index_u32(u_input.e, 6u)]))), all(!arg_0), arg_0.x), !(any(vec4<bool>(false, true, global2[_wgslsmith_index_u32(57627u, 6u)], global2[_wgslsmith_index_u32(0u, 6u)])) | arg_0.x)));
    loop {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        switch (arg_2.a) {
            default: {
                var var_1 = _wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(1f + -1000f), _wgslsmith_f_op_f32(sign(-575f))));
                var var_2 = _wgslsmith_f_op_f32(-540f);
            }
        }
        loop {
            if (LOOP_COUNTERS[17u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
            var var_1 = ~0u;
            let var_2 = _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(trunc(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(select(vec2<f32>(-118f, 663f), vec2<f32>(-487f, 1000f), arg_0.zw)) - vec2<f32>(-1066f, -218f))))), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(select(vec2<f32>(-448f, 841f), _wgslsmith_f_op_vec2_f32(vec2<f32>(983f, 1611f) * vec2<f32>(-1033f, -312f)), !arg_0.x)))));
            global2 = array<bool, 6>();
            global3 = array<u32, 24>();
            var var_3 = arg_3;
        }
    }
    if (any(select(vec2<bool>(any(arg_0.zyw), true), vec2<bool>(arg_0.x, arg_0.x), !(!(!vec2<bool>(global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(1u, 24u)], 6u)], false)))))) {
        var_0 = select(vec4<bool>(true, global2[_wgslsmith_index_u32(_wgslsmith_sub_u32(~global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 24u)] & func_6(), global3[_wgslsmith_index_u32(_wgslsmith_add_u32(42982u, 21024u), 24u)]), 6u)], true, any(!vec4<bool>(true, arg_0.x, var_0.x, true)) && true), select(arg_0, vec4<bool>(global2[_wgslsmith_index_u32(29714u, 6u)], false, !(global1[_wgslsmith_index_u32(27683u, 29u)] != -3286i), true), vec4<bool>(~global3[_wgslsmith_index_u32(26130u, 24u)] >= global3[_wgslsmith_index_u32(~34656u, 24u)], all(arg_0.ww), all(vec4<bool>(true, true, true, true)), global2[_wgslsmith_index_u32(_wgslsmith_mult_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], reverseBits(global3[_wgslsmith_index_u32(0u, 24u)])), 6u)])), !all(select(vec3<bool>(true, var_0.x, global2[_wgslsmith_index_u32(86801u, 6u)]), select(var_0.wyx, vec3<bool>(false, var_0.x, false), false), false)));
        var var_1 = !(!(!arg_0));
        let var_2 = abs(_wgslsmith_div_i32(func_7(Struct_1(func_3().a), vec4<bool>(!var_1.x, var_0.x, true, true), arg_2, vec2<bool>(true, var_0.x)).a, 22674i));
        switch (61312i) {
            case 6656i: {
            }
            case 16479i: {
            }
            case -44863i: {
                var var_3 = arg_2;
                var var_4 = func_7(arg_3, !(!(!vec4<bool>(true, true, var_0.x, true))), arg_2, !var_1.xz);
            }
            default: {
                global1 = array<i32, 29>();
                global1 = array<i32, 29>();
            }
        }
        var var_3 = Struct_1(_wgslsmith_dot_vec4_i32(arg_1, vec4<i32>(global0[_wgslsmith_index_u32(4294967295u, 11u)], -40397i, global0[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(~u_input.e ^ func_4(vec3<u32>(4294967295u, 0u, global3[_wgslsmith_index_u32(0u, 24u)]), 496f, vec3<f32>(-985f, 2722f, -1182f), true), 24u)], 11u)], -43401i)));
    }
    for (var var_1 = 36349i; global2[_wgslsmith_index_u32(19472u, 6u)]; ) {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        let var_2 = _wgslsmith_dot_vec2_i32(~(~(-arg_1.xx ^ vec2<i32>(-20011i, arg_1.x))), vec2<i32>(func_5(_wgslsmith_f_op_vec4_f32(max(vec4<f32>(1f, 1f, 1f, 1f), vec4<f32>(661f, -552f, -1495f, -127f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(-1698f)) + _wgslsmith_f_op_f32(-803f))).a, i32(-1i) * -869i));
        let var_3 = global2[_wgslsmith_index_u32((u_input.e << (~(~(~u_input.e)) % 32u)) << (~u_input.e % 32u), 6u)];
        break;
    }
    return !global2[_wgslsmith_index_u32(~global3[_wgslsmith_index_u32(u_input.e, 24u)], 6u)];
}

fn func_2(arg_0: Struct_1, arg_1: vec3<u32>, arg_2: u32) -> f32 {
    if (all(vec2<bool>(!any(vec3<bool>(true, false, global2[_wgslsmith_index_u32(4294967295u, 6u)])), global2[_wgslsmith_index_u32(select(41013u, _wgslsmith_add_u32(~arg_1.x, 4294967295u), func_8(!vec4<bool>(true, global2[_wgslsmith_index_u32(1u, 6u)], false, true), vec4<i32>(global0[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 11u)], 20263i, 56889i, arg_0.a), Struct_1(i32(-2147483648)), func_3())), 6u)]))) {
        let var_0 = _wgslsmith_div_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(-1f), _wgslsmith_f_op_f32(939f - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(-679f, 455f)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-480f) * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1839f))), 363f), _wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-1445f, -106f, -2598f, 332f)) + _wgslsmith_f_op_vec4_f32(-vec4<f32>(-1291f, 998f, -1766f, 1185f)))))));
        if (any(vec2<bool>(false, all(!select(vec2<bool>(true, false), vec2<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(5552u, 24u)], 6u)]), vec2<bool>(false, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(arg_2, 24u)], 6u)])))))) {
            var var_1 = func_5(var_0, _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(var_0.x - var_0.x), 694f)))), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(302f + _wgslsmith_f_op_f32(f32(-1f) * -1096f)))))));
            var var_2 = arg_1.x;
        }
        global2 = array<bool, 6>();
        if (true) {
            global0 = array<i32, 11>();
            let var_1 = func_7(Struct_1(select(arg_0.a, 16659i, false)), !(!vec4<bool>(global2[_wgslsmith_index_u32(1u, 6u)], !global2[_wgslsmith_index_u32(arg_1.x, 6u)], true, global2[_wgslsmith_index_u32(_wgslsmith_clamp_u32(4294967295u, arg_2, global3[_wgslsmith_index_u32(arg_1.x, 24u)]), 6u)])), func_5(_wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_div_vec4_f32(vec4<f32>(502f, -151f, 605f, -387f), var_0))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-var_0)))), _wgslsmith_f_op_f32(_wgslsmith_div_f32(var_0.x, _wgslsmith_f_op_f32(round(1989f))) * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -963f)))), !vec2<bool>(global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(0u, 24u)], 6u)], any(vec2<bool>(false, global2[_wgslsmith_index_u32(0u, 6u)]))));
            var var_2 = select(!vec3<bool>(!any(vec2<bool>(false, false)), false, countOneBits(global0[_wgslsmith_index_u32(84363u, 11u)]) != reverseBits(var_1.a)), vec3<bool>(any(vec4<bool>(true, any(vec4<bool>(true, false, false, true)), true, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(func_6(), 24u)], 6u)])), true, all(!select(vec2<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], true), vec2<bool>(global2[_wgslsmith_index_u32(42155u, 6u)], global2[_wgslsmith_index_u32(1u, 6u)]), global2[_wgslsmith_index_u32(arg_1.x, 6u)]))), false);
        }
        var var_1 = func_5(vec4<f32>(var_0.x, _wgslsmith_div_f32(-167f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-249f * var_0.x))), var_0.x, _wgslsmith_f_op_f32(-var_0.x)), -269f);
    }
    let var_0 = 16191u;
    for (var var_1 = 0i; true; var_1 -= 1i) {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
        global3 = array<u32, 24>();
    }
    for (; true; ) {
        if (LOOP_COUNTERS[20u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
        loop {
            if (LOOP_COUNTERS[21u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
        }
        for (var var_1 = 4822i; all(select(vec2<bool>(true, false), vec2<bool>((0i >> (var_0 % 32u)) > _wgslsmith_sub_i32(-12060i, 23042i), global2[_wgslsmith_index_u32(var_0, 6u)]), !(1i < (1i >> (arg_2 % 32u))))); ) {
            if (LOOP_COUNTERS[22u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
            break;
        }
        var var_1 = ~vec3<i32>(_wgslsmith_mult_i32(select(func_3().a, firstLeadingBit(-1i), !global2[_wgslsmith_index_u32(arg_1.x, 6u)]), ~_wgslsmith_div_i32(2147483647i, arg_0.a)), _wgslsmith_dot_vec3_i32(_wgslsmith_mod_vec3_i32(vec3<i32>(global1[_wgslsmith_index_u32(1u, 29u)], global0[_wgslsmith_index_u32(45531u, 11u)], global0[_wgslsmith_index_u32(0u, 11u)]) & u_input.b, ~u_input.b), u_input.b), _wgslsmith_add_i32(2147483647i, reverseBits(global1[_wgslsmith_index_u32(reverseBits(global3[_wgslsmith_index_u32(u_input.e, 24u)]), 29u)])));
        break;
    }
    if (true) {
        switch (u_input.d) {
            case 0i: {
                global3 = array<u32, 24>();
                let var_1 = vec4<i32>(-1i) * -(~(vec4<i32>(-1i) * -vec4<i32>(-9358i, -10792i, 0i, 1i)));
            }
            case 26142i: {
            }
            case -29111i: {
                let var_1 = Struct_1(abs(global1[_wgslsmith_index_u32(~1u, 29u)]));
            }
            default: {
            }
        }
        global3 = array<u32, 24>();
    }
    return _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-2962f) * _wgslsmith_div_f32(-659f, -1879f))))) - _wgslsmith_f_op_f32(max(1028f, _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(1442f, 987f)) * 1065f))))));
}

fn func_9(arg_0: f32, arg_1: vec4<f32>, arg_2: i32, arg_3: vec2<u32>) -> u32 {
    for (var var_0 = 0i; var_0 <= 34537i; var_0 -= 1i) {
        if (LOOP_COUNTERS[23u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
        loop {
            if (LOOP_COUNTERS[24u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
            let var_1 = ~vec4<u32>(10298u, _wgslsmith_div_u32(max(arg_3.x, global3[_wgslsmith_index_u32(u_input.e, 24u)]) >> (1u % 32u), ~(~arg_3.x)), arg_3.x, countOneBits(abs(global3[_wgslsmith_index_u32(firstLeadingBit(arg_3.x), 24u)])));
        }
        global2 = array<bool, 6>();
        var var_1 = Struct_1(~u_input.b.x);
        if ((func_4(vec3<u32>(_wgslsmith_add_u32(u_input.e, 4294967295u), 1u, 1u), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(-722f))), _wgslsmith_f_op_vec3_f32(min(arg_1.zwx, vec3<f32>(arg_1.x, -739f, arg_0))), all(!vec4<bool>(false, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(0u, 24u)], 6u)], global2[_wgslsmith_index_u32(0u, 6u)], global2[_wgslsmith_index_u32(89989u, 6u)]))) <= arg_3.x) & any(!vec4<bool>(true, true, global2[_wgslsmith_index_u32(0u, 6u)] != global2[_wgslsmith_index_u32(0u, 6u)], global2[_wgslsmith_index_u32(97405u, 6u)]))) {
            break;
        }
        break;
    }
    global0 = array<i32, 11>();
    var var_0 = arg_3;
    let var_1 = !select(vec4<bool>(all(vec2<bool>(global2[_wgslsmith_index_u32(4294967295u, 6u)], false)), false, !(!global2[_wgslsmith_index_u32(u_input.e, 6u)]), global2[_wgslsmith_index_u32(0u, 6u)]), !(!vec4<bool>(global2[_wgslsmith_index_u32(0u, 6u)], true, global2[_wgslsmith_index_u32(0u, 6u)], global2[_wgslsmith_index_u32(22264u, 6u)])), global2[_wgslsmith_index_u32(4294967295u, 6u)] || !all(vec4<bool>(global2[_wgslsmith_index_u32(0u, 6u)], global2[_wgslsmith_index_u32(0u, 6u)], false, false)));
    let var_2 = _wgslsmith_mult_vec3_i32(_wgslsmith_add_vec3_i32(vec3<i32>(global1[_wgslsmith_index_u32(_wgslsmith_clamp_u32(39868u, 0u, u_input.e) & 27814u, 29u)], i32(-1i) * -4015i, _wgslsmith_dot_vec2_i32(select(u_input.c, vec2<i32>(global1[_wgslsmith_index_u32(1u, 29u)], i32(-2147483648)), vec2<bool>(false, true)), vec2<i32>(arg_2, 22108i))), vec3<i32>(global1[_wgslsmith_index_u32(32853u >> (min(68533u, 1u) % 32u), 29u)], reverseBits(_wgslsmith_add_i32(-10821i, arg_2)), -27934i)), u_input.b);
    return ~_wgslsmith_sub_u32(arg_3.x, arg_3.x);
}

fn func_1(arg_0: vec3<i32>) -> Struct_1 {
    if (global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(func_9(_wgslsmith_f_op_f32(f32(-1f) * -384f), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(1f, 1f, 1f, 1f) + vec4<f32>(_wgslsmith_f_op_f32(func_2(Struct_1(0i), vec3<u32>(u_input.e, 53861u, u_input.e), 83072u)), _wgslsmith_div_f32(-1115f, 1290f), _wgslsmith_f_op_f32(func_2(Struct_1(41427i), vec3<u32>(global3[_wgslsmith_index_u32(u_input.e, 24u)], 6310u, 1u), global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(0u, 24u)], 24u)])), _wgslsmith_f_op_f32(f32(-1f) * -124f)))), countOneBits(arg_0.x), vec2<u32>(u_input.e, ~(_wgslsmith_dot_vec3_u32(vec3<u32>(u_input.e, 80159u, u_input.e), vec3<u32>(global3[_wgslsmith_index_u32(4294967295u, 24u)], u_input.e, 2295u)) ^ 14330u))), 24u)], 6u)]) {
        global3 = array<u32, 24>();
    }
    var var_0 = any(select(!vec3<bool>(true, true, !global2[_wgslsmith_index_u32(38509u, 6u)]), vec3<bool>(global2[_wgslsmith_index_u32(countOneBits(1677u) ^ _wgslsmith_dot_vec4_u32(vec4<u32>(u_input.e, global3[_wgslsmith_index_u32(1u, 24u)], 15252u, 85329u), vec4<u32>(global3[_wgslsmith_index_u32(u_input.e, 24u)], u_input.e, 1u, 1u)), 6u)], i32(-2147483648) >= _wgslsmith_mult_i32(4226i, global1[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(1u, 24u)], 24u)], 24u)], 29u)]), global2[_wgslsmith_index_u32(countOneBits(u_input.e), 6u)] && global2[_wgslsmith_index_u32(~u_input.e, 6u)]), _wgslsmith_mult_i32(u_input.d >> (4294967295u % 32u), global1[_wgslsmith_index_u32(u_input.e, 29u)]) < (~global0[_wgslsmith_index_u32(u_input.e, 11u)] >> (abs(u_input.e) % 32u))));
    var var_1 = Struct_1(_wgslsmith_dot_vec2_i32(~vec2<i32>(global0[_wgslsmith_index_u32(_wgslsmith_dot_vec3_u32(vec3<u32>(1u, u_input.e, u_input.e), vec3<u32>(4294967295u, global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(39081u, 24u)], 24u)], u_input.e)), 11u)], _wgslsmith_div_i32(global0[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(4294967295u, 24u)], 11u)], 1i)), -vec2<i32>(10455i, arg_0.x) ^ _wgslsmith_div_vec2_i32(_wgslsmith_mult_vec2_i32(arg_0.xy, arg_0.zx), arg_0.xz)));
    global3 = array<u32, 24>();
    let var_2 = vec2<f32>(_wgslsmith_f_op_f32(f32(-1f) * -1000f), _wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1000f) + -692f), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(384f, _wgslsmith_f_op_f32(-1611f + 503f)))));
    return func_7(Struct_1(-abs(abs(-32539i))), !vec4<bool>(func_8(vec4<bool>(true, false, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(62495u, 24u)], 6u)], global2[_wgslsmith_index_u32(u_input.e, 6u)]), vec4<i32>(1i, global0[_wgslsmith_index_u32(77486u, 11u)], u_input.b.x, -4197i), Struct_1(var_1.a), Struct_1(i32(-2147483648))) | true, all(vec2<bool>(false, global2[_wgslsmith_index_u32(u_input.e, 6u)])) || true, !global2[_wgslsmith_index_u32(max(39681u, 1u), 6u)], !(-4539i > arg_0.x)), Struct_1(-10297i), !vec2<bool>(global2[_wgslsmith_index_u32(~abs(0u), 6u)], true));
}

fn func_10(arg_0: vec3<u32>, arg_1: Struct_1) -> Struct_1 {
    if (global2[_wgslsmith_index_u32(max(42065u, global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(~_wgslsmith_div_u32(global3[_wgslsmith_index_u32(arg_0.x, 24u)], reverseBits(countOneBits(0u))), 24u)], 24u)]), 6u)]) {
        global2 = array<bool, 6>();
        switch (_wgslsmith_dot_vec3_i32(u_input.b, u_input.b)) {
            case 1i: {
                global0 = array<i32, 11>();
                var var_0 = true;
            }
            default: {
            }
        }
        let var_0 = vec4<f32>(_wgslsmith_f_op_f32(floor(773f)), 254f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(func_2(Struct_1(reverseBits(1i)), _wgslsmith_mult_vec3_u32(_wgslsmith_mod_vec3_u32(vec3<u32>(33671u, u_input.e, 28477u), arg_0), _wgslsmith_mod_vec3_u32(arg_0, vec3<u32>(5568u, global3[_wgslsmith_index_u32(u_input.e, 24u)], 50692u))), ~38281u)) * _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -2194f), 491f))), -882f);
        global0 = array<i32, 11>();
        let var_1 = arg_0.x;
    }
    global2 = array<bool, 6>();
    global1 = array<i32, 29>();
    var var_0 = vec4<bool>(select(global2[_wgslsmith_index_u32(~reverseBits(~77215u), 6u)], max(_wgslsmith_mult_i32(global1[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(1u, 24u)], 29u)], global0[_wgslsmith_index_u32(54290u, 11u)]), _wgslsmith_div_i32(arg_1.a, global0[_wgslsmith_index_u32(u_input.e, 11u)])) < global0[_wgslsmith_index_u32(min(arg_0.x, arg_0.x) >> (abs(4294967295u) % 32u), 11u)], false == global2[_wgslsmith_index_u32(~(4294967295u >> (u_input.e % 32u)), 6u)]), true, false, !((_wgslsmith_dot_vec4_i32(vec4<i32>(u_input.c.x, -15648i, u_input.a.x, global0[_wgslsmith_index_u32(1u, 11u)]), vec4<i32>(global1[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 29u)], global0[_wgslsmith_index_u32(u_input.e, 11u)], u_input.b.x, 15893i)) >= 0i) || (arg_0.x < select(global3[_wgslsmith_index_u32(4294967295u, 24u)], arg_0.x, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(10551u, 24u)], 24u)], 6u)]))));
    loop {
        if (LOOP_COUNTERS[25u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
        if (var_0.x) {
            let var_1 = 18169u;
            global0 = array<i32, 11>();
            break;
        }
        switch (0i) {
            case 0i: {
                global3 = array<u32, 24>();
                let var_1 = _wgslsmith_sub_vec2_i32(abs(firstLeadingBit(select(u_input.a, u_input.b.yy, true)) | countOneBits(~vec2<i32>(u_input.c.x, arg_1.a))), _wgslsmith_div_vec2_i32(-(~u_input.c << (vec2<u32>(arg_0.x, arg_0.x) % vec2<u32>(32u))), reverseBits(u_input.a)));
                var var_2 = ~_wgslsmith_clamp_vec4_u32(~vec4<u32>(_wgslsmith_sub_u32(global3[_wgslsmith_index_u32(135663u, 24u)], 4294967295u), 0u, u_input.e, global3[_wgslsmith_index_u32(~0u, 24u)]), ~(~vec4<u32>(1u, u_input.e, arg_0.x, 1923u)) | (select(vec4<u32>(u_input.e, global3[_wgslsmith_index_u32(4294967295u, 24u)], u_input.e, u_input.e), vec4<u32>(arg_0.x, 1u, u_input.e, global3[_wgslsmith_index_u32(0u, 24u)]), global2[_wgslsmith_index_u32(23590u, 6u)]) & vec4<u32>(arg_0.x, 4294967295u, u_input.e, global3[_wgslsmith_index_u32(10063u, 24u)])), ~vec4<u32>(arg_0.x, max(27803u, arg_0.x), 35655u, 4903u));
                var var_3 = -((vec3<i32>(-1i) * -vec3<i32>(global1[_wgslsmith_index_u32(51761u, 29u)], 23314i, -9428i)) | vec3<i32>(func_3().a, _wgslsmith_add_i32(2647i << (global3[_wgslsmith_index_u32(1u, 24u)] % 32u), 1i), 1i));
                let var_4 = 4294967295u;
            }
            case 2147483647i: {
                break;
            }
            default: {
                let var_1 = max(-min(-vec3<i32>(i32(-2147483648), -2806i, 2147483647i), u_input.b), reverseBits(max(abs(u_input.b), firstLeadingBit(vec3<i32>(arg_1.a, 25488i, global0[_wgslsmith_index_u32(arg_0.x, 11u)]))) ^ _wgslsmith_add_vec3_i32(vec3<i32>(global1[_wgslsmith_index_u32(u_input.e, 29u)], 1i, global0[_wgslsmith_index_u32(84108u, 11u)]), reverseBits(u_input.b))));
                var var_2 = global1[_wgslsmith_index_u32(arg_0.x, 29u)];
            }
        }
    }
    return Struct_1(-6979i);
}

@compute
@workgroup_size(1)
fn main() {
    global3 = array<u32, 24>();
    global2 = array<bool, 6>();
    global3 = array<u32, 24>();
    let var_0 = func_10(abs(~(~vec3<u32>(19128u, 0u, 0u))) | ~(~_wgslsmith_div_vec3_u32(vec3<u32>(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(90630u, 24u)], 24u)], u_input.e, 0u), vec3<u32>(5433u, global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 24u)], u_input.e))), func_1(reverseBits(_wgslsmith_mult_vec3_i32(vec3<i32>(global0[_wgslsmith_index_u32(4294967295u, 11u)], 1i, u_input.c.x), vec3<i32>(1i, u_input.d, global1[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(54757u, 24u)], 29u)])))));
    loop {
        if (LOOP_COUNTERS[26u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
        var var_1 = global1[_wgslsmith_index_u32(u_input.e, 29u)];
        switch (_wgslsmith_mult_i32(-1i, func_10(~_wgslsmith_mult_vec3_u32(~vec3<u32>(31014u, 31239u, global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(4294967295u, 24u)], 24u)], 24u)], 24u)]), vec3<u32>(u_input.e, 32063u, 28865u)), func_5(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-1284f, -1405f, 645f, -1334f)), _wgslsmith_f_op_f32(f32(-1f) * -685f))).a)) {
            default: {
                global0 = array<i32, 11>();
                let var_2 = ~_wgslsmith_add_i32(firstTrailingBit(~select(global0[_wgslsmith_index_u32(47682u, 11u)], 11419i, true)), reverseBits(-115392i));
                var var_3 = func_10(max(firstLeadingBit(vec3<u32>(u_input.e, func_6(), 0u)), ~_wgslsmith_mod_vec3_u32(vec3<u32>(u_input.e, global3[_wgslsmith_index_u32(0u, 24u)], 41544u), _wgslsmith_clamp_vec3_u32(vec3<u32>(41296u, u_input.e, 4294967295u), vec3<u32>(u_input.e, global3[_wgslsmith_index_u32(u_input.e, 24u)], u_input.e), vec3<u32>(1u, u_input.e, u_input.e)))), Struct_1(func_7(var_0, select(vec4<bool>(false, true, false, true), vec4<bool>(true, false, false, true), !vec4<bool>(false, true, global2[_wgslsmith_index_u32(0u, 6u)], global2[_wgslsmith_index_u32(1u, 6u)])), func_7(var_0, !vec4<bool>(true, true, false, global2[_wgslsmith_index_u32(1u, 6u)]), var_0, select(vec2<bool>(global2[_wgslsmith_index_u32(0u, 6u)], false), vec2<bool>(true, false), vec2<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], true))), !vec2<bool>(global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(20992u, 24u)], 24u)], 24u)], 6u)], global2[_wgslsmith_index_u32(0u, 6u)])).a));
                let var_4 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-649f) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-281f))), _wgslsmith_f_op_f32(func_2(Struct_1(~u_input.c.x), vec3<u32>(4294967295u, u_input.e, 4294967295u & global3[_wgslsmith_index_u32(0u, 24u)]), ~(global3[_wgslsmith_index_u32(4294967295u, 24u)] | 35653u))))));
                let var_5 = var_0;
            }
        }
        var var_2 = select(vec4<bool>(firstTrailingBit(_wgslsmith_mod_u32(0u, u_input.e)) >= _wgslsmith_dot_vec2_u32(~vec2<u32>(1u, 1u), ~vec2<u32>(global3[_wgslsmith_index_u32(48804u, 24u)], global3[_wgslsmith_index_u32(u_input.e, 24u)])), true, false, countOneBits(-global1[_wgslsmith_index_u32(1u, 29u)]) < (firstTrailingBit(global0[_wgslsmith_index_u32(1u, 11u)]) >> (func_9(784f, vec4<f32>(1579f, 952f, 516f, 1033f), 36318i, vec2<u32>(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(12079u, 24u)], 24u)], 4294967295u)) % 32u))), select(select(select(!vec4<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], true, true, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 24u)], 6u)]), select(vec4<bool>(global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(1u, 24u)], 6u)], false, global2[_wgslsmith_index_u32(4294967295u, 6u)], true), vec4<bool>(global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 6u)], true, false, global2[_wgslsmith_index_u32(u_input.e, 6u)]), vec4<bool>(false, global2[_wgslsmith_index_u32(24166u, 6u)], true, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 6u)])), any(vec2<bool>(false, global2[_wgslsmith_index_u32(50244u, 6u)]))), vec4<bool>(true, !global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(1u, 24u)], 24u)], 6u)], global1[_wgslsmith_index_u32(0u, 29u)] < var_0.a, 89865u == u_input.e), global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(func_9(_wgslsmith_f_op_f32(-1395f - -1537f), _wgslsmith_f_op_vec4_f32(sign(vec4<f32>(-299f, -457f, -623f, 3303f))), -global1[_wgslsmith_index_u32(13688u, 29u)], ~vec2<u32>(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(51733u, 24u)], 24u)], 24u)], 24u)], 1u)), 24u)], 6u)]), !select(select(vec4<bool>(false, true, true, false), vec4<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], true, global2[_wgslsmith_index_u32(58779u, 6u)], true), vec4<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], global2[_wgslsmith_index_u32(1u, 6u)], global2[_wgslsmith_index_u32(0u, 6u)], false)), !vec4<bool>(true, global2[_wgslsmith_index_u32(0u, 6u)], true, true), true), !(global2[_wgslsmith_index_u32(1u, 6u)] || all(vec2<bool>(false, global2[_wgslsmith_index_u32(u_input.e, 6u)])))), !select(select(select(vec4<bool>(true, false, false, true), vec4<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], true, true, false), vec4<bool>(false, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(41995u, 24u)], 6u)], false, true)), vec4<bool>(global2[_wgslsmith_index_u32(u_input.e, 6u)], global2[_wgslsmith_index_u32(u_input.e, 6u)], true, global2[_wgslsmith_index_u32(u_input.e, 6u)]), !vec4<bool>(global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(34459u, 24u)], 6u)], global2[_wgslsmith_index_u32(48172u, 6u)], false, global2[_wgslsmith_index_u32(35782u, 6u)])), vec4<bool>(global2[_wgslsmith_index_u32(firstLeadingBit(29783u), 6u)], true, false, all(vec4<bool>(true, false, global2[_wgslsmith_index_u32(0u, 6u)], true))), global2[_wgslsmith_index_u32(_wgslsmith_dot_vec3_u32(vec3<u32>(global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(u_input.e, 24u)], 24u)], u_input.e, 22592u), vec3<u32>(66651u, 19184u, 17755u)), 6u)]));
        if (false) {
        }
    }
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1335f - 1090f)), _wgslsmith_f_op_f32(trunc(808f)), _wgslsmith_f_op_f32(-463f), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(step(-1548f, 1494f))))) * vec4<f32>(1f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-279f - 345f) + _wgslsmith_f_op_f32(round(-783f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1584f)), _wgslsmith_f_op_f32(-1102f))), 92u, 2147483647i, u_input.a.x | _wgslsmith_div_i32(6577i ^ (global0[_wgslsmith_index_u32(u_input.e, 11u)] | global1[_wgslsmith_index_u32(8252u, 29u)]), 6479i), 51914u);
}

`;