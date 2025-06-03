export const input = [255,143,158,127,19,165,7,28,177,85,13,199,174,51,61,217,208,54,247,71,139,173,26,77,35,13,10,69,37,59,33,98,90,230,194,202,50,8,5,72,156,183,76,2,49,65,14,243,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [255,143,158,127,19,165,7,28,177,85,13,199,174,51,61,217,208,54,247,71,139,173,26,77,35,13,10,69,37,59,33,98,90,230,194,202,50,8,5,72,156,183,76,2,49,65,14,243,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[255,143,158,127,19,165,7,28,177,85,13,199,174,51,61,217,208,54,247,71,139,173,26,77,35,13,10,69,37,59,33,98,90,230,194,202,50,8,5,72,156,183,76,2,49,65,14,243]}
// Seed: 2367714160795105813

struct Struct_1 {
    a: i32,
    b: u32,
}

struct UniformBuffer {
    a: u32,
    b: i32,
    c: vec4<i32>,
    d: u32,
    e: u32,
}

struct StorageBuffer {
    a: vec3<u32>,
    b: vec3<u32>,
    c: vec4<u32>,
    d: vec2<f32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<vec3<bool>, 20> = array<vec3<bool>, 20>(vec3<bool>(true, true, false), vec3<bool>(true, true, true), vec3<bool>(false, false, true), vec3<bool>(false, true, true), vec3<bool>(true, false, false), vec3<bool>(true, false, false), vec3<bool>(true, true, true), vec3<bool>(false, false, true), vec3<bool>(false, true, true), vec3<bool>(true, true, true), vec3<bool>(true, true, false), vec3<bool>(true, true, false), vec3<bool>(false, false, false), vec3<bool>(true, true, false), vec3<bool>(true, true, true), vec3<bool>(true, true, false), vec3<bool>(false, false, true), vec3<bool>(true, false, true), vec3<bool>(false, false, true), vec3<bool>(true, false, true));

var<private> global1: array<vec3<u32>, 8> = array<vec3<u32>, 8>(vec3<u32>(1u, 4294967295u, 27317u), vec3<u32>(1u, 18029u, 4294967295u), vec3<u32>(1u, 1u, 1u), vec3<u32>(4294967295u, 0u, 4185u), vec3<u32>(0u, 19308u, 1u), vec3<u32>(47741u, 4294967295u, 46350u), vec3<u32>(48414u, 0u, 0u), vec3<u32>(1u, 0u, 31980u));

var<private> global2: vec3<u32>;

var<private> global3: i32;

var<private> LOOP_COUNTERS: array<u32, 29>;

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
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

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn func_6(arg_0: vec4<i32>) -> i32 {
    if (false) {
        switch (-25509i) {
            case -29562i: {
            }
            case -48217i: {
                return ~u_input.c.x;
            }
            case 1i: {
                let var_0 = ~(vec2<u32>(~_wgslsmith_mult_u32(global2.x, global2.x), u_input.d) & (global2.zz | global2.yz));
                let var_1 = _wgslsmith_clamp_vec4_u32(~_wgslsmith_sub_vec4_u32(_wgslsmith_sub_vec4_u32(vec4<u32>(u_input.e, 24099u, u_input.d, 1u), vec4<u32>(78101u, 0u, var_0.x, 0u)), vec4<u32>(8082u, u_input.e, 1u, 17991u) << (vec4<u32>(var_0.x, u_input.e, 27090u, u_input.e) % vec4<u32>(32u))) >> (vec4<u32>(1089u, firstLeadingBit(1u ^ u_input.e), ~global2.x, ~global2.x) % vec4<u32>(32u)), vec4<u32>((firstTrailingBit(53368u) | ~8399u) & _wgslsmith_add_u32(var_0.x, 14806u), var_0.x, var_0.x, 15874u), ~select(_wgslsmith_div_vec4_u32(~vec4<u32>(var_0.x, 0u, global2.x, u_input.d), ~vec4<u32>(0u, var_0.x, global2.x, 0u)), max(countOneBits(vec4<u32>(0u, 18285u, var_0.x, 1u)), ~vec4<u32>(u_input.d, u_input.d, global2.x, 0u)), !select(vec4<bool>(false, true, false, false), vec4<bool>(false, false, false, true), vec4<bool>(true, true, true, true))));
                let var_2 = _wgslsmith_f_op_f32(round(-759f));
                var var_3 = ~var_0.x;
                global2 = vec3<u32>(~(~var_0.x), 57985u & _wgslsmith_dot_vec2_u32(_wgslsmith_add_vec2_u32(vec2<u32>(11466u, var_0.x) ^ var_1.zw, var_0), select(_wgslsmith_mult_vec2_u32(vec2<u32>(var_0.x, global2.x), vec2<u32>(global2.x, var_0.x)), vec2<u32>(92663u, 1u), false)), firstLeadingBit(_wgslsmith_dot_vec2_u32(_wgslsmith_mult_vec2_u32(_wgslsmith_add_vec2_u32(var_1.wz, vec2<u32>(var_0.x, var_1.x)), select(var_0, vec2<u32>(u_input.d, var_0.x), false)), ~vec2<u32>(global2.x, 0u))));
            }
            case i32(-2147483648): {
                global2 = _wgslsmith_div_vec3_u32(reverseBits(global1[_wgslsmith_index_u32(_wgslsmith_mult_u32(abs(1u), 4294967295u), 8u)]), vec3<u32>(global2.x, ~_wgslsmith_clamp_u32(global2.x, 4294967295u | u_input.a, 1u), reverseBits(abs(global2.x >> (u_input.e % 32u)))));
                global1 = array<vec3<u32>, 8>();
                var var_0 = ~vec3<u32>(32865u, _wgslsmith_add_u32(u_input.a, reverseBits(65929u)), 42815u);
            }
            default: {
                global0 = array<vec3<bool>, 20>();
                var var_0 = vec2<bool>(any(!global0[_wgslsmith_index_u32(~(~u_input.e), 20u)]), true);
                var var_1 = abs(firstLeadingBit(~(~_wgslsmith_div_i32(-1i, -25003i))));
                let var_2 = firstLeadingBit(~min(firstTrailingBit(vec4<i32>(-1i, arg_0.x, u_input.b, 4553i)), ~(u_input.c ^ arg_0)));
                var var_3 = _wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(-1852f, -463f, -1000f) - _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(584f, -323f, 321f)) + _wgslsmith_f_op_vec3_f32(-vec3<f32>(813f, 351f, -1278f)))))));
            }
        }
    }
    switch (u_input.b) {
        case 1i: {
            let var_0 = select(vec4<bool>(!((i32(-1i) * -65278i) <= -arg_0.x), true, !any(vec4<bool>(false, false, false, true)) & any(vec2<bool>(true, true)), true & (true && select(true, false, false))), vec4<bool>(any(vec4<bool>(all(vec2<bool>(true, false)), false, false, false)), select(true, 1u < max(global2.x, global2.x), false), (-2147483647i >> (firstTrailingBit(4294967295u) % 32u)) != 2555i, any(vec2<bool>(any(vec4<bool>(true, false, true, false)), false))), vec4<bool>(select(!all(vec4<bool>(true, true, true, false)), any(select(global0[_wgslsmith_index_u32(1u, 20u)], vec3<bool>(false, false, false), vec3<bool>(true, true, false))), true), select(select(true, true, true), all(vec4<bool>(true, true, true, true)), all(vec2<bool>(true, true))), true, all(global0[_wgslsmith_index_u32(abs(0u), 20u)])));
            global0 = array<vec3<bool>, 20>();
        }
        case -33062i: {
            loop {
                if (LOOP_COUNTERS[0u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
                var var_0 = ~_wgslsmith_dot_vec4_u32(abs(max(vec4<u32>(19181u, u_input.d, global2.x, 85218u), vec4<u32>(global2.x, 4294967295u, 0u, global2.x))) | (vec4<u32>(u_input.a, 4294967295u, global2.x, 4294967295u) | ~vec4<u32>(19171u, global2.x, 0u, global2.x)), ~firstTrailingBit(~vec4<u32>(global2.x, 18894u, 4294967295u, 4294967295u)));
                global0 = array<vec3<bool>, 20>();
                global1 = array<vec3<u32>, 8>();
                var var_1 = ~vec2<i32>(-_wgslsmith_dot_vec2_i32(arg_0.zz, ~arg_0.wz), select(i32(-1i) * -13513i, ~u_input.b, any(global0[_wgslsmith_index_u32(u_input.d, 20u)])) | (firstTrailingBit(-7146i) >> (max(65715u, 0u) % 32u)));
                continue;
            }
            for (var var_0 = -1i; var_0 >= -1i; var_0 -= 1i) {
                if (LOOP_COUNTERS[1u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
                var var_1 = vec4<u32>(countOneBits(min(~_wgslsmith_dot_vec4_u32(vec4<u32>(global2.x, 1u, u_input.a, u_input.e), vec4<u32>(u_input.a, u_input.e, 0u, u_input.e)), 1u)), ~_wgslsmith_dot_vec2_u32(_wgslsmith_div_vec2_u32(~global2.yx, vec2<u32>(0u, global2.x)), abs(_wgslsmith_add_vec2_u32(global2.xx, vec2<u32>(4294967295u, 86903u)))), ~(~73688u), _wgslsmith_dot_vec2_u32(firstLeadingBit(global2.yx), global2.zz ^ vec2<u32>(26042u, 1u)));
                global3 = u_input.c.x;
                var var_2 = vec2<bool>(true, all(select(vec4<bool>(true, true, all(vec4<bool>(false, true, true, true)), true), vec4<bool>(true, true, true, true), any(select(vec3<bool>(false, true, false), global0[_wgslsmith_index_u32(global2.x, 20u)], global0[_wgslsmith_index_u32(13981u, 20u)])))));
            }
            var var_0 = vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(723f)) - _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(select(_wgslsmith_div_f32(260f, -200f), _wgslsmith_f_op_f32(sign(258f)), any(global0[_wgslsmith_index_u32(u_input.d, 20u)])))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(826f))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-473f) + _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(trunc(640f))))), 589f), _wgslsmith_f_op_f32(824f * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(-982f))) - _wgslsmith_f_op_f32(max(1279f, -1198f)))));
        }
        case 2147483647i: {
            global0 = array<vec3<bool>, 20>();
            let var_0 = ~u_input.a;
            let var_1 = Struct_1(~arg_0.x, abs(16785u | min(~0u, ~global2.x)));
            global0 = array<vec3<bool>, 20>();
        }
        case -1i: {
            loop {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
                continue;
            }
            global2 = _wgslsmith_mult_vec3_u32(_wgslsmith_div_vec3_u32(~global1[_wgslsmith_index_u32(~34425u, 8u)] | vec3<u32>(_wgslsmith_sub_u32(global2.x, 49578u), ~4294967295u, _wgslsmith_mult_u32(u_input.d, 1u)), global1[_wgslsmith_index_u32(firstTrailingBit(0u), 8u)]), vec3<u32>(33189u, u_input.a << (_wgslsmith_mult_u32(~37689u, abs(global2.x)) % 32u), 4294967295u));
            var var_0 = Struct_1(2147483647i, 75236u);
        }
        default: {
            for (var var_0 = 1i; any(!select(select(vec2<bool>(true, false), vec2<bool>(false, true), false), select(vec2<bool>(true, true), vec2<bool>(true, false), vec2<bool>(false, true)), all(vec4<bool>(true, false, false, false)))) || (-(~38146i) > max(arg_0.x & _wgslsmith_mult_i32(0i, i32(-2147483648)), abs(u_input.c.x))); var_0 += 1i) {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
                var var_1 = Struct_1(arg_0.x, _wgslsmith_add_u32(_wgslsmith_dot_vec2_u32(~vec2<u32>(4294967295u, global2.x) & vec2<u32>(50049u, 4294967295u), abs(~vec2<u32>(1u, u_input.d))), _wgslsmith_mult_u32(global2.x, _wgslsmith_mod_u32(1u, 4294967295u))));
            }
            var var_0 = Struct_1(-_wgslsmith_div_i32(27361i, 1i | _wgslsmith_mod_i32(arg_0.x, arg_0.x)), u_input.d);
            let var_1 = Struct_1(u_input.b, reverseBits(1u));
        }
    }
    switch (select(~(~firstLeadingBit(arg_0.x)), arg_0.x, true)) {
        case 0i: {
            var var_0 = 129f < _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(-172f, 1411f)) - _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(abs(-1348f)))))));
            for (var var_1 = 50361i; ; var_1 -= 1i) {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                let var_2 = true;
            }
        }
        case 54772i: {
            if ((firstTrailingBit(u_input.e) <= _wgslsmith_mult_u32(_wgslsmith_mod_u32(u_input.e, global2.x) | global2.x, _wgslsmith_mult_u32(global2.x << (30360u % 32u), _wgslsmith_dot_vec2_u32(global2.zx, vec2<u32>(63687u, 0u))))) || false) {
                var var_0 = 26000u;
                global3 = 1i;
                let var_1 = Struct_1(countOneBits(arg_0.x), max(~u_input.a, ~min(18929u, global2.x | u_input.a)));
            }
            if (!any(select(select(vec2<bool>(false, true), vec2<bool>(true, false), true), !select(vec2<bool>(false, true), vec2<bool>(true, true), vec2<bool>(false, false)), !select(vec2<bool>(false, false), vec2<bool>(true, true), true)))) {
            }
            let var_0 = Struct_1(_wgslsmith_mult_i32(-u_input.c.x | max(i32(-2147483648), -3134i), -62259i) ^ u_input.c.x, global2.x);
            for (var var_1 = i32(-2147483648); var_1 <= i32(-2147483648); global3 = _wgslsmith_clamp_i32(countOneBits(var_0.a), _wgslsmith_clamp_i32(u_input.b, _wgslsmith_mod_i32(var_0.a & u_input.c.x, var_0.a >> (u_input.d % 32u)), abs(0i)) | var_0.a, u_input.c.x)) {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                let var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1f) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(-2088f)))))));
            }
        }
        default: {
            let var_0 = Struct_1(_wgslsmith_sub_i32(u_input.c.x, 1i), 0u);
        }
    }
    if (!(!any(vec4<bool>(true, false, any(vec4<bool>(true, false, true, false)), all(global0[_wgslsmith_index_u32(1u, 20u)]))))) {
        global0 = array<vec3<bool>, 20>();
    }
    global2 = vec3<u32>(~abs(1u), _wgslsmith_dot_vec2_u32(~global2.zx, _wgslsmith_clamp_vec2_u32(global2.xy, _wgslsmith_clamp_vec2_u32(vec2<u32>(global2.x, u_input.e), global2.zx, vec2<u32>(2066u, global2.x)), vec2<u32>(0u, u_input.a))), u_input.d) << (vec3<u32>(1u, global2.x, global2.x) % vec3<u32>(32u));
    return abs(arg_0.x);
}

fn func_5(arg_0: f32, arg_1: u32) -> i32 {
    var var_0 = Struct_1(31330i, 1u);
    if (true) {
        global3 = _wgslsmith_mult_i32(func_6(u_input.c), _wgslsmith_dot_vec2_i32(~(~u_input.c.zw) << (_wgslsmith_add_vec2_u32(~global2.yx, ~vec2<u32>(var_0.b, 37267u)) % vec2<u32>(32u)), -_wgslsmith_clamp_vec2_i32(-u_input.c.xw, u_input.c.yz, min(vec2<i32>(-1i, -12685i), u_input.c.wz))));
    }
    global0 = array<vec3<bool>, 20>();
    var var_1 = Struct_1(~(~(-20546i)), reverseBits(~(~4294967295u)));
    for (; ; ) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
    }
    return -firstLeadingBit(-1i);
}

fn func_7(arg_0: u32, arg_1: Struct_1, arg_2: f32, arg_3: Struct_1) -> Struct_1 {
    let var_0 = vec4<bool>(all(!select(vec4<bool>(true, false, false, true), select(vec4<bool>(true, false, false, false), vec4<bool>(true, false, false, false), true), vec4<bool>(true, true, true, true))), true, !(_wgslsmith_f_op_f32(arg_2 - arg_2) >= arg_2) & true, any(!vec2<bool>(false, select(true, false, true))));
    switch (0i) {
        case -1i: {
            var var_1 = firstLeadingBit(func_6(u_input.c >> (~vec4<u32>(arg_3.b, arg_3.b, arg_0, arg_3.b) % vec4<u32>(32u))));
            var_1 = arg_3.a;
            var_1 = _wgslsmith_div_i32(1i, min(arg_1.a, -arg_1.a)) >> (~reverseBits(~1u >> (reverseBits(0u) % 32u)) % 32u);
        }
        case -28157i: {
            switch (arg_1.a ^ ~(-arg_1.a)) {
                case -1i: {
                    global2 = ~abs(min(_wgslsmith_clamp_vec3_u32(vec3<u32>(arg_0, arg_1.b, arg_0), ~global1[_wgslsmith_index_u32(arg_3.b, 8u)], global1[_wgslsmith_index_u32(arg_1.b, 8u)]), ~vec3<u32>(arg_0, arg_0, 1u)));
                }
                default: {
                }
            }
        }
        case 33290i: {
            global0 = array<vec3<bool>, 20>();
            switch (_wgslsmith_dot_vec3_i32(vec3<i32>(~abs(arg_1.a), min(abs(arg_1.a >> (7955u % 32u)), _wgslsmith_dot_vec2_i32(vec2<i32>(arg_3.a, -1i), abs(u_input.c.zx))), 5988i), -(~(vec3<i32>(u_input.b, arg_3.a, -60069i) >> (global1[_wgslsmith_index_u32(42245u, 8u)] % vec3<u32>(32u))) | abs(vec3<i32>(i32(-2147483648), -3714i, arg_1.a))))) {
                case 0i: {
                    global1 = array<vec3<u32>, 8>();
                    let var_1 = Struct_1(_wgslsmith_div_i32(arg_3.a, 31326i), firstTrailingBit(arg_0));
                    var var_2 = arg_3;
                    let var_3 = arg_1;
                    let var_4 = Struct_1(_wgslsmith_dot_vec4_i32(countOneBits(max(u_input.c, u_input.c) | reverseBits(u_input.c)), vec4<i32>(1i, var_1.a, ~(var_3.a << (15734u % 32u)), ~(-1i))), abs(global2.x) >> (var_1.b % 32u));
                }
                case 42172i: {
                    let var_1 = all(select(global0[_wgslsmith_index_u32(_wgslsmith_mult_u32(max(select(arg_3.b, 1u, true), arg_3.b), 1u), 20u)], select(global0[_wgslsmith_index_u32(countOneBits(_wgslsmith_mult_u32(arg_1.b, 4294967295u)), 20u)], !select(var_0.yxy, vec3<bool>(var_0.x, var_0.x, var_0.x), var_0.x), select(global0[_wgslsmith_index_u32(1u, 20u)], !global0[_wgslsmith_index_u32(arg_0, 20u)], false)), var_0.x));
                    global0 = array<vec3<bool>, 20>();
                    let var_2 = ~(~15734u);
                    let var_3 = _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(-404f)) * _wgslsmith_f_op_f32(arg_2 + arg_2)) - _wgslsmith_f_op_f32(trunc(arg_2))) * arg_2)));
                    let var_4 = Struct_1(0i, _wgslsmith_div_u32(select(~4294967295u, 9130u, any(vec3<bool>(var_1, false, var_1))), arg_3.b) ^ arg_3.b);
                }
                default: {
                }
            }
        }
        default: {
            let var_1 = select(!select(vec4<bool>(true, true, false, var_0.x), var_0, false), !vec4<bool>(all(vec4<bool>(true, var_0.x, true, var_0.x)) || false, select(var_0.x, var_0.x, var_0.x), true, true), all(select(vec4<bool>(!var_0.x, any(global0[_wgslsmith_index_u32(48579u, 20u)]), false, var_0.x & false), vec4<bool>(true, true, true, true), vec4<bool>(true, var_0.x, false | var_0.x, false))));
            var var_2 = Struct_1(-2147483647i, ~global2.x);
            global0 = array<vec3<bool>, 20>();
            loop {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                let var_3 = arg_3.a;
                global0 = array<vec3<bool>, 20>();
                let var_4 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_2, arg_2, 922f, 1161f))) - _wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_2, arg_2, arg_2, arg_2))))) + _wgslsmith_div_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(511f - arg_2), _wgslsmith_f_op_f32(arg_2 + arg_2), arg_2, _wgslsmith_f_op_f32(-arg_2)), vec4<f32>(_wgslsmith_f_op_f32(-1626f * -1043f), 747f, _wgslsmith_div_f32(1004f, arg_2), arg_2))));
                global1 = array<vec3<u32>, 8>();
                let var_5 = Struct_1(16257i & (func_5(_wgslsmith_f_op_f32(231f - var_4.x), arg_0) ^ _wgslsmith_div_i32(select(var_2.a, u_input.c.x, false), -var_3)), (arg_3.b >> (abs(arg_0) % 32u)) ^ firstTrailingBit(40253u));
            }
        }
    }
    if (_wgslsmith_f_op_f32(exp2(arg_2)) >= arg_2) {
        if (true) {
            var var_1 = i32(-2147483648);
        }
    }
    loop {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        if (all(select(global0[_wgslsmith_index_u32(arg_3.b, 20u)], global0[_wgslsmith_index_u32(~79575u, 20u)], var_0.yyy))) {
            var var_1 = _wgslsmith_f_op_f32(min(arg_2, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-468f + _wgslsmith_f_op_f32(-1802f)) * _wgslsmith_f_op_f32(floor(arg_2))))));
            continue;
        }
        continue;
    }
    var var_1 = vec2<i32>(func_5(-1013f, _wgslsmith_add_u32(global2.x >> (arg_3.b % 32u), _wgslsmith_mult_u32(global2.x, arg_1.b))), -21101i) ^ u_input.c.ww;
    return Struct_1(i32(-1i) * -arg_3.a, _wgslsmith_add_u32(~(~4294967295u), u_input.a));
}

fn func_4(arg_0: i32, arg_1: vec4<u32>) -> i32 {
    let var_0 = func_7(~56978u >> ((arg_1.x | _wgslsmith_add_u32(_wgslsmith_dot_vec4_u32(arg_1, vec4<u32>(0u, arg_1.x, global2.x, 37271u)), 24107u)) % 32u), Struct_1(func_5(_wgslsmith_f_op_f32(f32(-1f) * -930f), 68449u), _wgslsmith_add_u32(arg_1.x, ~(~arg_1.x))), _wgslsmith_f_op_f32(-610f), Struct_1(reverseBits(-1i), 0u));
    var var_1 = !(~arg_0 < 78847i);
    for (var var_2 = i32(-2147483648); ; var_2 -= 1i) {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        loop {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
            let var_3 = _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(ceil(1066f))));
            let var_4 = var_3;
            let var_5 = var_0;
        }
        let var_3 = var_0;
        var var_4 = var_3;
        var_2 = ~var_3.a;
        var var_5 = Struct_1(-(_wgslsmith_div_i32(var_0.a, -90i & arg_0) & var_4.a), 4294967295u);
    }
    switch (2147483647i) {
        case 2147483647i: {
            var_1 = var_0.b == 1u;
        }
        case -1i: {
            loop {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                global3 = func_5(_wgslsmith_f_op_f32(-1184f), var_0.b);
                global3 = -18948i;
                let var_2 = any(vec4<bool>((select(true, true, false) && true) & true, -_wgslsmith_dot_vec3_i32(u_input.c.xyx, u_input.c.xwz) >= -25392i, !(var_0.a >= var_0.a), true));
                global3 = -(0i >> (_wgslsmith_dot_vec3_u32(vec3<u32>(max(11666u, var_0.b), 4294967295u, ~36599u), _wgslsmith_add_vec3_u32(arg_1.wxx >> (arg_1.yyy % vec3<u32>(32u)), global1[_wgslsmith_index_u32(4294967295u, 8u)] & global1[_wgslsmith_index_u32(23710u, 8u)])) % 32u));
            }
        }
        default: {
            loop {
                if (LOOP_COUNTERS[12u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
                let var_2 = var_0.a;
            }
            for (var var_2 = 1i; var_2 < 2147483647i; ) {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                break;
            }
            loop {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                var var_2 = _wgslsmith_clamp_vec4_i32(_wgslsmith_div_vec4_i32(~vec4<i32>(-31899i, u_input.b | 9990i, min(-38575i, u_input.c.x), -1i), u_input.c), abs(u_input.c ^ _wgslsmith_sub_vec4_i32(vec4<i32>(18910i, -21555i, 1i, var_0.a), max(u_input.c, vec4<i32>(-23920i, var_0.a, arg_0, -16469i)))), vec4<i32>(arg_0, 1i, arg_0, -_wgslsmith_dot_vec3_i32(vec3<i32>(2147483647i, u_input.b, arg_0), abs(vec3<i32>(2147483647i, -48304i, u_input.c.x)))));
                global3 = 0i;
                let var_3 = arg_1.x;
                global0 = array<vec3<bool>, 20>();
                continue;
            }
            var var_2 = Struct_1(~(~u_input.b), var_0.b >> (reverseBits(_wgslsmith_dot_vec3_u32(vec3<u32>(1u, arg_1.x, 2727u), vec3<u32>(6289u, 0u, global2.x))) % 32u));
        }
    }
    switch (-31256i) {
        case 11176i: {
            let var_2 = var_0;
            let var_3 = abs(arg_1);
            var var_4 = func_7(~(~abs(arg_1.x)), var_2, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(1364f, _wgslsmith_f_op_f32(f32(-1f) * -705f))) + 1f) * 1f), var_0);
        }
        case -13448i: {
            switch (u_input.b) {
                case 42635i: {
                    let var_2 = all(!vec4<bool>(!select(false, true, true), false, false, select(all(global0[_wgslsmith_index_u32(var_0.b, 20u)]), true, true)));
                    var var_3 = Struct_1(_wgslsmith_sub_i32(-(~(~u_input.b)), func_5(1032f, ~_wgslsmith_clamp_u32(global2.x, 33855u, global2.x))), firstTrailingBit(countOneBits(u_input.d)));
                    let var_4 = Struct_1(_wgslsmith_dot_vec2_i32(vec2<i32>(-15947i, -var_3.a) | u_input.c.yy, select((vec2<i32>(var_3.a, 0i) & vec2<i32>(2147483647i, var_3.a)) >> (min(global2.xy, global2.zx) % vec2<u32>(32u)), _wgslsmith_sub_vec2_i32(u_input.c.zy, _wgslsmith_clamp_vec2_i32(u_input.c.xy, vec2<i32>(-59000i, -1i), vec2<i32>(arg_0, -24777i))), var_2)), global2.x);
                    let var_5 = Struct_1(-(~(~countOneBits(var_0.a))), _wgslsmith_mod_u32(~(~var_4.b), 1u));
                }
                case 2147483647i: {
                    return 1i;
                }
                default: {
                    var var_2 = select(!(!vec4<bool>(true, any(vec3<bool>(true, true, true)), true, true)), vec4<bool>(true, true, true | all(select(vec2<bool>(true, false), vec2<bool>(true, true), false)), true), !vec4<bool>(any(vec2<bool>(true, true)), true || select(true, true, true), select(true, all(vec4<bool>(true, true, true, true)), true), true));
                    global2 = ~global1[_wgslsmith_index_u32(_wgslsmith_dot_vec2_u32(vec2<u32>(_wgslsmith_dot_vec3_u32(arg_1.zxx, arg_1.zyx) >> (_wgslsmith_add_u32(u_input.d, 2526u) % 32u), _wgslsmith_dot_vec3_u32(reverseBits(arg_1.zxy), min(arg_1.zwy, vec3<u32>(global2.x, 1u, 1u)))), ~vec2<u32>(var_0.b, firstLeadingBit(33636u))), 8u)];
                }
            }
        }
        case i32(-2147483648): {
            global1 = array<vec3<u32>, 8>();
            global1 = array<vec3<u32>, 8>();
            for (var var_2 = 1i; var_2 == 0i; var_2 -= 1i) {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            }
            if (all(vec2<bool>(true, any(global0[_wgslsmith_index_u32(~0u, 20u)]))) | (_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-390f - -1304f) + -316f)) == _wgslsmith_f_op_f32(round(1f)))) {
                global1 = array<vec3<u32>, 8>();
                let var_2 = true;
                let var_3 = true;
                let var_4 = var_0;
                let var_5 = select(global0[_wgslsmith_index_u32(max(10893u, ~var_4.b) ^ u_input.d, 20u)], vec3<bool>(any(!select(vec2<bool>(var_2, var_3), vec2<bool>(false, false), true)), false, true), global0[_wgslsmith_index_u32(abs(77641u), 20u)]);
            }
            return 1i;
        }
        case 65931i: {
            global2 = _wgslsmith_sub_vec3_u32(~global1[_wgslsmith_index_u32(~30747u, 8u)], (arg_1.zwy << (_wgslsmith_mod_vec3_u32(countOneBits(vec3<u32>(global2.x, global2.x, 7198u)), ~vec3<u32>(1u, 0u, 19837u)) % vec3<u32>(32u))) >> (~_wgslsmith_div_vec3_u32(~vec3<u32>(var_0.b, var_0.b, 115837u), _wgslsmith_mod_vec3_u32(vec3<u32>(0u, 4294967295u, u_input.e), global1[_wgslsmith_index_u32(1u, 8u)])) % vec3<u32>(32u)));
            global0 = array<vec3<bool>, 20>();
            if (!any(select(vec2<bool>(true, true), !select(vec2<bool>(true, false), vec2<bool>(false, false), vec2<bool>(true, false)), vec2<bool>(true, true)))) {
            }
            global3 = -arg_0 & -(~reverseBits(i32(-2147483648)));
            var var_2 = countOneBits(global2.x);
        }
        default: {
            let var_2 = Struct_1(_wgslsmith_mult_i32(_wgslsmith_add_i32(var_0.a, 33633i), ~_wgslsmith_mod_i32(-53153i, 1i)) ^ ~_wgslsmith_add_i32(_wgslsmith_dot_vec4_i32(vec4<i32>(arg_0, var_0.a, 45568i, var_0.a), u_input.c), u_input.b), abs(abs(6809u)) & countOneBits(max(arg_1.x ^ arg_1.x, arg_1.x & global2.x)));
        }
    }
    return countOneBits(_wgslsmith_mult_i32(-abs(2291i), max((18464i | arg_0) & 0i, 1i)));
}

fn func_3() -> bool {
    loop {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        let var_0 = Struct_1(abs(_wgslsmith_div_i32(u_input.c.x, func_4(~u_input.b, _wgslsmith_clamp_vec4_u32(vec4<u32>(3055u, 4294967295u, 4294967295u, 1u), vec4<u32>(4294967295u, global2.x, 15256u, u_input.e), vec4<u32>(1u, 4294967295u, u_input.a, global2.x))))), firstTrailingBit(global2.x) >> (_wgslsmith_add_u32(global2.x | global2.x, global2.x & ~global2.x) % 32u));
        if (true) {
        }
        let var_1 = true;
        global0 = array<vec3<bool>, 20>();
    }
    switch (-32716i) {
        case 40459i: {
            if (any(vec3<bool>(true, !(!(u_input.e > 4294967295u)), false))) {
                global3 = 110i;
                var var_0 = 329u;
                global2 = global1[_wgslsmith_index_u32(29590u, 8u)];
                var_0 = select(_wgslsmith_clamp_u32(1u << (min(_wgslsmith_dot_vec3_u32(vec3<u32>(59997u, 28567u, global2.x), vec3<u32>(u_input.a, 8489u, u_input.e)), select(35117u, global2.x, true)) % 32u), countOneBits(min(~global2.x, firstLeadingBit(global2.x))), ~0u >> (((u_input.e >> (19884u % 32u)) << (firstLeadingBit(global2.x) % 32u)) % 32u)), 29790u, any(!(!global0[_wgslsmith_index_u32(global2.x, 20u)])) && true);
            }
            let var_0 = any(vec4<bool>(true, false, !any(vec2<bool>(false, true)) || all(vec4<bool>(false, false, true, true)), (any(vec2<bool>(false, true)) || all(vec4<bool>(true, true, false, true))) && !any(vec2<bool>(true, false))));
            let var_1 = func_7(max(global2.x ^ ~0u, ~abs(abs(u_input.e))), Struct_1(u_input.b, _wgslsmith_dot_vec2_u32(~global2.zx, _wgslsmith_mod_vec2_u32(vec2<u32>(32946u, u_input.d), vec2<u32>(global2.x, u_input.e)) & abs(vec2<u32>(47989u, global2.x)))), _wgslsmith_f_op_f32(-1362f * _wgslsmith_f_op_f32(1f * _wgslsmith_div_f32(_wgslsmith_f_op_f32(2355f + 260f), -1395f))), func_7(select(max(29208u, min(1u, 1u)), ~abs(18084u), true), func_7(1u, func_7(13557u, Struct_1(16008i, 4294967295u), _wgslsmith_f_op_f32(floor(-1966f)), Struct_1(1i, global2.x)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -241f)), Struct_1(u_input.b & u_input.c.x, ~0u)), _wgslsmith_f_op_f32(296f * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-389f + 957f))), func_7(_wgslsmith_mult_u32(~34942u, u_input.a), func_7(1u, Struct_1(u_input.b, 23029u), 1f, func_7(global2.x, Struct_1(u_input.b, 3776u), -1684f, Struct_1(-1i, global2.x))), _wgslsmith_div_f32(1221f, _wgslsmith_f_op_f32(f32(-1f) * -407f)), func_7(~0u, func_7(global2.x, Struct_1(-2944i, global2.x), 500f, Struct_1(u_input.b, 40722u)), _wgslsmith_f_op_f32(f32(-1f) * -1466f), Struct_1(u_input.c.x, 1u)))));
            global1 = array<vec3<u32>, 8>();
        }
        case 32745i: {
            switch (reverseBits(u_input.b)) {
                case -1867i: {
                    global2 = vec3<u32>(~func_7(4294967295u, func_7(27879u, func_7(u_input.a, Struct_1(u_input.b, global2.x), -934f, Struct_1(u_input.b, u_input.d)), _wgslsmith_f_op_f32(406f * 453f), func_7(u_input.a, Struct_1(30104i, global2.x), -1000f, Struct_1(u_input.c.x, u_input.d))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-805f)), func_7(~17035u, func_7(global2.x, Struct_1(u_input.c.x, u_input.d), -898f, Struct_1(u_input.c.x, 72122u)), _wgslsmith_f_op_f32(ceil(947f)), func_7(1u, Struct_1(46772i, global2.x), 1000f, Struct_1(2147483647i, 4294967295u)))).b, ~1u, ~(~(~(~u_input.d))));
                    let var_0 = func_7(global2.x, func_7(select(~(~14399u), 0u, false), func_7(global2.x, Struct_1(u_input.b, ~u_input.d), _wgslsmith_f_op_f32(f32(-1f) * -762f), func_7(44200u, func_7(44101u, Struct_1(u_input.c.x, 6001u), 341f, Struct_1(-1i, u_input.d)), -667f, func_7(global2.x, Struct_1(u_input.c.x, global2.x), -286f, Struct_1(u_input.b, global2.x)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(1246f))), Struct_1(~u_input.b, ~(~1u))), 446f, Struct_1(-1i, 15191u));
                    var var_1 = (i32(-1i) * i32(-2147483648)) >> (~(~u_input.e) % 32u);
                    let var_2 = func_7(var_0.b, func_7(_wgslsmith_dot_vec4_u32(vec4<u32>(u_input.e, 56228u, 44438u, var_0.b), ~(vec4<u32>(var_0.b, var_0.b, 23686u, 0u) >> (vec4<u32>(12099u, var_0.b, 1u, 1u) % vec4<u32>(32u)))), Struct_1(-1i, abs(53183u)), _wgslsmith_f_op_f32(sign(_wgslsmith_div_f32(1000f, _wgslsmith_f_op_f32(floor(-1000f))))), func_7(global2.x, func_7(_wgslsmith_clamp_u32(25906u, 9771u, 0u), Struct_1(var_0.a, global2.x), _wgslsmith_f_op_f32(abs(-1974f)), Struct_1(-1i, var_0.b)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -887f)), var_0)), _wgslsmith_f_op_f32(trunc(_wgslsmith_div_f32(-461f, -2019f))), Struct_1(-15895i, ~(~(~global2.x))));
                    let var_3 = -1617f;
                }
                case 12295i: {
                    var var_0 = global2.x;
                    let var_1 = select(~_wgslsmith_mult_vec4_i32(min(reverseBits(u_input.c), vec4<i32>(-7246i, 2147483647i, u_input.c.x, i32(-2147483648)) << (vec4<u32>(0u, u_input.d, u_input.a, 0u) % vec4<u32>(32u))), vec4<i32>(countOneBits(1i), u_input.b, ~u_input.b, u_input.c.x)), _wgslsmith_mult_vec4_i32(abs(u_input.c), vec4<i32>(_wgslsmith_clamp_i32(u_input.b, u_input.b, 31039i), -9112i, u_input.c.x, ~u_input.c.x) >> (~(~vec4<u32>(23179u, 4294967295u, global2.x, u_input.a)) % vec4<u32>(32u))), !vec4<bool>(all(vec2<bool>(false, true)), false, true, false));
                }
                default: {
                    let var_0 = _wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(select(vec2<f32>(568f, 405f), vec2<f32>(-1058f, 937f), false))) - _wgslsmith_f_op_vec2_f32(vec2<f32>(-922f, 1000f) * _wgslsmith_div_vec2_f32(vec2<f32>(-721f, 581f), vec2<f32>(709f, -1124f)))) * vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1967f)), -898f))));
                }
            }
        }
        default: {
        }
    }
    for (var var_0 = -1i; var_0 != 2147483647i; global2 = global1[_wgslsmith_index_u32(global2.x, 8u)]) {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
        continue;
    }
    global0 = array<vec3<bool>, 20>();
    for (; _wgslsmith_clamp_u32(13081u << (u_input.a % 32u), 4294967295u, u_input.d) > ~0u; ) {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
    }
    return select(true, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(-106f)))) >= _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -487f)))), any(select(select(vec3<bool>(false, false, true), !global0[_wgslsmith_index_u32(u_input.d, 20u)], select(vec3<bool>(false, true, false), global0[_wgslsmith_index_u32(global2.x, 20u)], false)), global0[_wgslsmith_index_u32(~(~global2.x), 20u)], vec3<bool>(true, u_input.c.x <= -53217i, u_input.b <= u_input.b))));
}

fn func_2() -> vec2<bool> {
    switch (u_input.b >> (global2.x % 32u)) {
        case 1i: {
            loop {
                if (LOOP_COUNTERS[19u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
                var var_0 = u_input.c.x;
                global3 = -abs(u_input.c.x);
            }
            return !vec2<bool>(false, func_3());
        }
        case 4054i: {
            let var_0 = u_input.a;
            for (var var_1 = 21394i; var_1 <= -22246i; ) {
                if (LOOP_COUNTERS[20u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
                continue;
            }
            let var_1 = _wgslsmith_f_op_vec3_f32(exp2(vec3<f32>(_wgslsmith_f_op_f32(max(699f, _wgslsmith_f_op_f32(min(-446f, _wgslsmith_f_op_f32(f32(-1f) * -1452f))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(step(-562f, 304f)), 436f))), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1194f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-521f)), true)))));
        }
        case 9840i: {
            let var_0 = -17657i;
            let var_1 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1000f) * 888f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-799f)))))), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(step(-1377f, 725f))))))));
        }
        default: {
            loop {
                if (LOOP_COUNTERS[21u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
                let var_0 = u_input.c.yy;
                let var_1 = _wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(-vec3<f32>(1311f, 776f, 233f)), _wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-498f, -1305f, -377f))))))))));
                var var_2 = Struct_1(abs(-var_0.x), 23789u);
                var_2 = func_7(_wgslsmith_mult_u32(u_input.e, _wgslsmith_div_u32(_wgslsmith_clamp_u32(~u_input.a, u_input.a, global2.x ^ var_2.b), 3921u)), func_7(~(~71165u), Struct_1(func_4(1i, vec4<u32>(4294967295u, 1365u, global2.x, 4294967295u) ^ vec4<u32>(2873u, u_input.a, global2.x, global2.x)), global2.x), _wgslsmith_f_op_f32(-var_1.x), func_7(firstLeadingBit(global2.x), func_7(1u, func_7(var_2.b, Struct_1(-17474i, var_2.b), -445f, Struct_1(-1i, 1u)), var_1.x, func_7(0u, Struct_1(u_input.c.x, u_input.e), -267f, Struct_1(u_input.b, global2.x))), var_1.x, Struct_1(u_input.c.x, global2.x))), var_1.x, func_7(u_input.e, Struct_1(var_2.a, u_input.a), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(var_1.x + var_1.x), _wgslsmith_f_op_f32(-190f - 196f))), 1100f)), Struct_1(-1i, _wgslsmith_div_u32(global2.x, 2959u))));
                let var_3 = Struct_1(11714i ^ var_2.a, 1u);
            }
            let var_0 = select(global1[_wgslsmith_index_u32(~(~(u_input.a << (1u % 32u))), 8u)] | (_wgslsmith_add_vec3_u32(~global1[_wgslsmith_index_u32(global2.x, 8u)], global1[_wgslsmith_index_u32(~u_input.d, 8u)]) & ~vec3<u32>(global2.x, global2.x, global2.x)), ~(~(vec3<u32>(global2.x, 0u, 42600u) & vec3<u32>(10056u, global2.x, 1u))), !global0[_wgslsmith_index_u32(global2.x, 20u)]);
            loop {
                if (LOOP_COUNTERS[22u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
                let var_1 = u_input.c;
                global2 = vec3<u32>(20221u, ~_wgslsmith_dot_vec2_u32(vec2<u32>(~4294967295u, ~0u), var_0.yz), ~u_input.e);
                let var_2 = 13495u;
                var var_3 = 40711i;
            }
            global1 = array<vec3<u32>, 8>();
            global3 = ~u_input.c.x;
        }
    }
    switch (abs(-(i32(-1i) * -func_6(u_input.c)))) {
        default: {
        }
    }
    global3 = u_input.c.x;
    var var_0 = func_7(_wgslsmith_dot_vec4_u32(~vec4<u32>(global2.x, u_input.d, 4294967295u, _wgslsmith_dot_vec2_u32(vec2<u32>(global2.x, 4294967295u), vec2<u32>(u_input.d, 0u))), vec4<u32>(u_input.e | 1u, ~max(52423u, 23985u), ~4294967295u, u_input.d)), Struct_1(0i ^ ~u_input.c.x, ~(~_wgslsmith_mult_u32(global2.x, u_input.d))), -1803f, func_7(~1u, func_7(u_input.e | ~global2.x, Struct_1(~u_input.b, ~global2.x), _wgslsmith_f_op_f32(801f - 1f), Struct_1(~2147483647i, ~u_input.a)), _wgslsmith_f_op_f32(f32(-1f) * -311f), Struct_1(u_input.b, _wgslsmith_clamp_u32(~global2.x, u_input.e, _wgslsmith_mod_u32(4294967295u, u_input.a)))));
    let var_1 = select(select(!(!select(vec2<bool>(true, true), vec2<bool>(false, true), vec2<bool>(false, true))), vec2<bool>(true, true), true), !vec2<bool>(!(var_0.a > u_input.c.x), true), var_0.a == -11481i);
    return !select(vec2<bool>(any(!global0[_wgslsmith_index_u32(u_input.e, 20u)]), all(var_1)), var_1, var_1.x && (_wgslsmith_f_op_f32(-976f) > _wgslsmith_f_op_f32(step(808f, 1000f))));
}

fn func_1(arg_0: i32) -> i32 {
    switch (_wgslsmith_div_i32(firstTrailingBit(min(abs(min(arg_0, u_input.c.x)), _wgslsmith_add_i32(42772i, 0i))), ~arg_0)) {
        case -5533i: {
            let var_0 = all(!select(select(vec2<bool>(true, true), vec2<bool>(false, true), false), vec2<bool>(true, true), func_2())) | select(true, any(vec4<bool>(false, false, any(vec3<bool>(true, false, true)), any(vec3<bool>(false, false, false)))), false);
            for (var var_1 = 4705i; true; ) {
                if (LOOP_COUNTERS[23u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
            }
        }
        case 0i: {
            global1 = array<vec3<u32>, 8>();
            var var_0 = Struct_1(func_7(_wgslsmith_div_u32(abs(global2.x), _wgslsmith_dot_vec2_u32(vec2<u32>(u_input.e, 0u), vec2<u32>(0u, 87847u)) & 0u), Struct_1(arg_0, ~global2.x), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-258f - -196f)), 1f), func_7(max(u_input.a, u_input.d), func_7(22856u, Struct_1(u_input.c.x, u_input.e), _wgslsmith_f_op_f32(317f - 1000f), Struct_1(0i, 40088u)), _wgslsmith_f_op_f32(-1000f), Struct_1(~arg_0, global2.x))).a, u_input.e);
            switch (~(i32(-2147483648))) {
                case 13509i: {
                    let var_1 = _wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-650f), -1798f)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(abs(-1400f))))), -670f, -402f)));
                    var var_2 = func_7(2350u, Struct_1(firstTrailingBit(_wgslsmith_clamp_i32(reverseBits(-11793i), arg_0 << (12935u % 32u), var_0.a)), u_input.e), var_1.x, Struct_1(u_input.c.x >> ((reverseBits(u_input.a) >> (firstTrailingBit(0u) % 32u)) % 32u), ~4294967295u));
                    let var_3 = var_2.a;
                    let var_4 = vec3<bool>(false, !select(true, true, !select(true, true, true)), all(vec2<bool>(true, true)) || true);
                }
                case 20314i: {
                    let var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(f32(-1f) * -692f), _wgslsmith_f_op_f32(max(-1359f, 247f)), all(vec2<bool>(false, false)))))) + _wgslsmith_f_op_f32(trunc(-1115f))));
                }
                case 2147483647i: {
                    let var_1 = func_7(_wgslsmith_mod_u32(countOneBits(global2.x), 1u), Struct_1(func_6(abs(u_input.c)), ~(26105u << (0u % 32u))), 1107f, Struct_1(arg_0, 4294967295u));
                }
                default: {
                    var var_1 = _wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(select(vec3<f32>(-854f, 1435f, -415f), vec3<f32>(729f, 113f, 1349f), false)), _wgslsmith_f_op_vec3_f32(vec3<f32>(-582f, -542f, 521f) + vec3<f32>(-1000f, -1000f, -1486f)))))))));
                    var_1 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(step(vec3<f32>(var_1.x, 670f, _wgslsmith_f_op_f32(-var_1.x)), vec3<f32>(-1000f, var_1.x, var_1.x))) + _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(var_1.x, var_1.x, var_1.x) + vec3<f32>(1000f, var_1.x, var_1.x))))));
                    let var_2 = var_0.a;
                    var_1 = _wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(-1538f, var_1.x, var_1.x) + vec3<f32>(var_1.x, 1000f, var_1.x))), _wgslsmith_f_op_vec3_f32(-vec3<f32>(592f, -363f, var_1.x))))));
                    var var_3 = vec3<i32>(i32(-2147483648), abs(-46238i), ~arg_0);
                }
            }
            return (2147483647i >> (~(~(global2.x & 64929u)) % 32u)) >> (0u % 32u);
        }
        case 1i: {
            global3 = -1i;
            loop {
                if (LOOP_COUNTERS[24u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
                global2 = abs(vec3<u32>(abs(4294967295u), _wgslsmith_mod_u32(_wgslsmith_mult_u32(u_input.d, 64666u), 79270u | global2.x), global2.x)) & vec3<u32>(global2.x, 4294967295u, 3238u);
                break;
            }
            global2 = _wgslsmith_mod_vec3_u32(max(global1[_wgslsmith_index_u32(~68344u, 8u)], reverseBits(global1[_wgslsmith_index_u32(abs(global2.x), 8u)])) << (_wgslsmith_mult_vec3_u32(global1[_wgslsmith_index_u32(abs(_wgslsmith_dot_vec2_u32(vec2<u32>(4294967295u, 35105u), vec2<u32>(4294967295u, 47408u))), 8u)], vec3<u32>(u_input.a, u_input.d, _wgslsmith_dot_vec4_u32(vec4<u32>(global2.x, 40449u, 1u, global2.x), vec4<u32>(global2.x, global2.x, 1u, 28235u)))) % vec3<u32>(32u)), select(~_wgslsmith_div_vec3_u32(select(global1[_wgslsmith_index_u32(19987u, 8u)], global1[_wgslsmith_index_u32(u_input.a, 8u)], true), vec3<u32>(4294967295u, 0u, 0u)), ~_wgslsmith_add_vec3_u32(vec3<u32>(44985u, global2.x, global2.x), _wgslsmith_mod_vec3_u32(global1[_wgslsmith_index_u32(u_input.a, 8u)], vec3<u32>(0u, 84679u, 4294967295u))), vec3<bool>(false, true, true)));
            global1 = array<vec3<u32>, 8>();
            loop {
                if (LOOP_COUNTERS[25u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
                let var_0 = Struct_1(_wgslsmith_div_i32(0i, u_input.b), _wgslsmith_clamp_u32(reverseBits(u_input.e ^ (4294967295u >> (0u % 32u))), ~(~_wgslsmith_add_u32(0u, 73247u)), ~31786u));
                continue;
            }
        }
        default: {
            let var_0 = func_7(global2.x, Struct_1(0i, abs(global2.x)), _wgslsmith_f_op_f32(-276f), Struct_1(func_7(1u, Struct_1(u_input.b, firstLeadingBit(global2.x)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1065f + 595f)), func_7(u_input.d, func_7(global2.x, Struct_1(2147483647i, global2.x), 1242f, Struct_1(arg_0, 7103u)), _wgslsmith_f_op_f32(-246f), func_7(14796u, Struct_1(2147483647i, global2.x), 1856f, Struct_1(arg_0, u_input.e)))).a, 17471u));
            var var_1 = 32507u;
        }
    }
    return func_7(firstTrailingBit(4294967295u), func_7(global2.x, func_7(_wgslsmith_mult_u32(countOneBits(global2.x), select(4294967295u, global2.x, true)), func_7(u_input.e, func_7(4848u, Struct_1(arg_0, 1u), 276f, Struct_1(-1i, 22018u)), 636f, func_7(27508u, Struct_1(arg_0, 23700u), 2091f, Struct_1(2147483647i, 1u))), 1553f, func_7(_wgslsmith_div_u32(44905u, global2.x), func_7(u_input.d, Struct_1(2147483647i, 1u), 1609f, Struct_1(0i, u_input.a)), _wgslsmith_f_op_f32(-974f), func_7(1u, Struct_1(u_input.b, global2.x), 376f, Struct_1(-18119i, global2.x)))), 721f, Struct_1(-1i, 0u)), _wgslsmith_f_op_f32(ceil(2203f)), Struct_1(i32(-2147483648), _wgslsmith_add_u32(52731u, 1u))).a;
}

fn func_8(arg_0: f32, arg_1: i32) -> Struct_1 {
    for (var var_0 = -15743i; !(_wgslsmith_div_f32(380f, -1246f) > _wgslsmith_f_op_f32(min(-526f, _wgslsmith_f_op_f32(select(arg_0, _wgslsmith_f_op_f32(-arg_0), any(vec3<bool>(true, false, false))))))); var_0 -= 1i) {
        if (LOOP_COUNTERS[26u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
        break;
    }
    var var_0 = func_7(~global2.x, func_7(global2.x, func_7(0u, Struct_1(u_input.b, _wgslsmith_dot_vec2_u32(vec2<u32>(4294967295u, u_input.e), global2.zy)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -498f) * arg_0), Struct_1(arg_1 << (5861u % 32u), 31477u)), -162f, func_7(_wgslsmith_mod_u32(_wgslsmith_dot_vec4_u32(vec4<u32>(4294967295u, 1u, 0u, global2.x), vec4<u32>(global2.x, 20447u, u_input.a, u_input.d)), global2.x), func_7(1u, func_7(0u, Struct_1(25i, u_input.e), -647f, Struct_1(arg_1, 0u)), _wgslsmith_f_op_f32(ceil(1198f)), func_7(u_input.e, Struct_1(arg_1, 1u), 1772f, Struct_1(2147483647i, 15112u))), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-254f))), Struct_1(u_input.c.x, 1u))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(arg_0 - _wgslsmith_f_op_f32(arg_0 - 831f))))), func_7(4294967295u, func_7(1u, Struct_1(~(i32(-2147483648)), 40717u), _wgslsmith_f_op_f32(arg_0 * arg_0), Struct_1(_wgslsmith_sub_i32(1i, arg_1), _wgslsmith_dot_vec4_u32(vec4<u32>(u_input.d, 26021u, 7971u, 4294967295u), vec4<u32>(4294967295u, 1u, u_input.d, 4294967295u)))), _wgslsmith_f_op_f32(arg_0 - 1856f), func_7(countOneBits(1u), Struct_1(11848i, ~4294967295u), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(2107f * 206f), _wgslsmith_f_op_f32(arg_0 + arg_0))), func_7(4294967295u, func_7(global2.x, Struct_1(1i, 0u), arg_0, Struct_1(u_input.b, u_input.d)), -260f, Struct_1(u_input.b, 6054u)))));
    global1 = array<vec3<u32>, 8>();
    if (!(any(!select(global0[_wgslsmith_index_u32(var_0.b, 20u)], global0[_wgslsmith_index_u32(18950u, 20u)], false)) && (_wgslsmith_div_f32(_wgslsmith_f_op_f32(select(arg_0, arg_0, true)), arg_0) >= _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1507f * arg_0) + _wgslsmith_f_op_f32(-arg_0))))) {
        global3 = 36547i;
    }
    let var_1 = func_2().x;
    return func_7(0u ^ ~min(min(42163u, var_0.b), ~u_input.a), func_7(~_wgslsmith_sub_u32(var_0.b, 17241u) << (30769u % 32u), func_7(0u, Struct_1(_wgslsmith_div_i32(-7646i, i32(-2147483648)), var_0.b), arg_0, Struct_1(-21126i << (1u % 32u), func_7(18942u, Struct_1(arg_1, global2.x), -1539f, Struct_1(-1i, var_0.b)).b)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-arg_0))) + arg_0), func_7(var_0.b, func_7(81797u, func_7(4294967295u, Struct_1(2147483647i, 4294967295u), arg_0, Struct_1(u_input.c.x, global2.x)), _wgslsmith_f_op_f32(arg_0 + 139f), Struct_1(i32(-2147483648), var_0.b)), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(abs(arg_0)))), func_7(~global2.x, func_7(var_0.b, Struct_1(-26511i, 31829u), arg_0, Struct_1(0i, 38247u)), -2628f, Struct_1(arg_1, 0u)))), 1136f, Struct_1(arg_1, _wgslsmith_dot_vec3_u32(global1[_wgslsmith_index_u32(~_wgslsmith_sub_u32(46088u, var_0.b), 8u)], vec3<u32>(4294967295u, global2.x | u_input.e, _wgslsmith_mult_u32(69518u, var_0.b)))));
}

fn func_9(arg_0: Struct_1) -> i32 {
    return arg_0.a;
}

@compute
@workgroup_size(1)
fn main() {
    let var_0 = global2.x;
    let var_1 = abs(1i);
    for (var var_2: i32; var_2 >= -8124i; ) {
        if (LOOP_COUNTERS[27u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[27u] = LOOP_COUNTERS[27u] + 1u;
        let var_3 = vec3<i32>(func_9(func_8(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(1000f + -502f) + _wgslsmith_f_op_f32(f32(-1f) * -471f)), func_1(reverseBits(2147483647i)))), -1i, 62015i);
        continue;
    }
    switch (~(var_1 >> (countOneBits(global2.x) % 32u))) {
        case -47031i: {
            switch (0i) {
                default: {
                    var var_2 = Struct_1(u_input.c.x, 20616u);
                }
            }
        }
        case 41650i: {
            var var_2 = func_8(-2200f, _wgslsmith_add_i32(var_1, _wgslsmith_mod_i32(firstLeadingBit(~45156i), u_input.b)));
            var_2 = Struct_1(-1i, _wgslsmith_mult_u32(func_8(754f, select(-30147i, 43369i, false) | ~(i32(-2147483648))).b, var_2.b));
            global1 = array<vec3<u32>, 8>();
            var var_3 = func_8(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(_wgslsmith_div_f32(1753f, _wgslsmith_f_op_f32(-581f)))) + _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(f32(-1f) * -627f)))), _wgslsmith_dot_vec3_i32(~vec3<i32>(~var_2.a, var_2.a, var_1), abs(vec3<i32>(var_1, -8661i, u_input.b) | u_input.c.yyy) | select(u_input.c.wzx & vec3<i32>(15583i, -12923i, -22851i), vec3<i32>(1i, var_1, u_input.b), any(vec3<bool>(true, false, true)))));
            for (var var_4 = -31041i; var_4 >= 41087i; var_4 += 1i) {
                if (LOOP_COUNTERS[28u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[28u] = LOOP_COUNTERS[28u] + 1u;
                var_4 = -(_wgslsmith_dot_vec4_i32(abs(u_input.c) ^ -u_input.c, reverseBits(vec4<i32>(1i, var_1, 10421i, var_3.a))) | var_2.a);
                let var_5 = vec3<i32>(func_6(~(-u_input.c)), -(~func_1(_wgslsmith_mult_i32(1i, var_3.a))), _wgslsmith_dot_vec3_i32(select(_wgslsmith_mod_vec3_i32(u_input.c.wyx, countOneBits(vec3<i32>(var_2.a, -46376i, 0i))), u_input.c.yyz, select(!global0[_wgslsmith_index_u32(var_2.b, 20u)], vec3<bool>(false, false, true), global0[_wgslsmith_index_u32(~4294967295u, 20u)])), _wgslsmith_mod_vec3_i32(-_wgslsmith_add_vec3_i32(u_input.c.wxz, vec3<i32>(var_2.a, -57019i, var_1)), vec3<i32>(countOneBits(u_input.c.x), 6577i, func_6(vec4<i32>(var_2.a, 6390i, var_3.a, 0i))))));
                break;
            }
        }
        case -43312i: {
            switch (var_1) {
                case 2147483647i: {
                    var var_2 = any(!func_2());
                    var var_3 = vec3<u32>(min(u_input.d, global2.x), ~max(~(~0u), _wgslsmith_dot_vec4_u32(~vec4<u32>(16876u, 4294967295u, 860u, global2.x), vec4<u32>(u_input.a, 4294967295u, 24897u, 50879u))), _wgslsmith_sub_u32(0u, 0u));
                    global0 = array<vec3<bool>, 20>();
                    let var_4 = _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-588f)));
                    var var_5 = Struct_1(u_input.b >> (var_3.x % 32u), _wgslsmith_dot_vec2_u32(vec2<u32>(0u, var_3.x) & global2.xz, _wgslsmith_clamp_vec2_u32(global2.xx, vec2<u32>(0u, global2.x) >> (select(vec2<u32>(4294967295u, global2.x), vec2<u32>(global2.x, global2.x), vec2<bool>(true, false)) % vec2<u32>(32u)), firstLeadingBit(_wgslsmith_add_vec2_u32(var_3.zy, vec2<u32>(52765u, u_input.e))))));
                }
                default: {
                }
            }
            let var_2 = Struct_1(_wgslsmith_dot_vec4_i32(abs(-u_input.c), vec4<i32>(-21966i, var_1 << (4294967295u % 32u), 1i, 0i) ^ max(_wgslsmith_mod_vec4_i32(u_input.c, u_input.c), u_input.c)), 1u);
            var var_3 = Struct_1(_wgslsmith_clamp_i32(max(1i, _wgslsmith_div_i32(_wgslsmith_mod_i32(i32(-2147483648), 35930i), var_1)), func_9(var_2), var_1), _wgslsmith_dot_vec4_u32((vec4<u32>(u_input.a, var_2.b, global2.x, u_input.a) & firstTrailingBit(vec4<u32>(0u, u_input.d, 19373u, 4294967295u))) ^ (_wgslsmith_sub_vec4_u32(vec4<u32>(u_input.e, 19599u, u_input.d, 18481u), vec4<u32>(u_input.d, 67933u, var_2.b, u_input.a)) << (~vec4<u32>(30066u, 0u, 4294967295u, var_2.b) % vec4<u32>(32u))), _wgslsmith_div_vec4_u32(vec4<u32>(~global2.x, 50403u, abs(u_input.a), u_input.e | 0u), vec4<u32>(var_2.b, 20413u, 1u, u_input.e) ^ ~vec4<u32>(4294967295u, var_2.b, 50665u, var_2.b))));
        }
        case 1i: {
        }
        default: {
            let var_2 = Struct_1(2147483647i, 22856u);
            global3 = func_8(144f, -(var_2.a >> (36633u % 32u))).a;
            var var_3 = Struct_1(-5130i, _wgslsmith_add_u32(var_2.b, _wgslsmith_sub_u32(~(u_input.d << (34624u % 32u)), ~max(var_2.b, 4294967295u))));
            if (!(var_3.b == _wgslsmith_div_u32(~_wgslsmith_clamp_u32(var_2.b, var_2.b, var_3.b), global2.x))) {
            }
            global1 = array<vec3<u32>, 8>();
        }
    }
    var var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(685f)));
    global0 = array<vec3<bool>, 20>();
    let x = u_input.a;
    s_output = StorageBuffer(min(select(vec3<u32>(_wgslsmith_add_u32(global2.x, u_input.e), ~1u, u_input.e), abs(~vec3<u32>(79997u, 4294967295u, u_input.e)), true), _wgslsmith_sub_vec3_u32(~(~vec3<u32>(global2.x, global2.x, 4956u)), global1[_wgslsmith_index_u32(~(~global2.x), 8u)])), ~global1[_wgslsmith_index_u32(_wgslsmith_add_u32(84962u, u_input.e), 8u)], vec4<u32>(1u, func_7(~global2.x, Struct_1(var_1, global2.x), _wgslsmith_f_op_f32(floor(-284f)), Struct_1(51106i, 4294967295u)).b | ~99775u, min(1u, countOneBits(_wgslsmith_clamp_u32(u_input.d, 63642u, 1u))), reverseBits(4294967295u)), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(trunc(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-1368f, 666f)))) - vec2<f32>(1f, 1f)));
}

`;