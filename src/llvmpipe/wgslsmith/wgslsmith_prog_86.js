export const input = [108,218,232,161,221,187,175,216,68,131,22,34,149,114,194,98,43,129,205,98,37,81,163,40,249,228,204,203,9,246,24,142,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [108,218,232,161,221,187,175,216,68,131,22,34,149,114,194,98,43,129,205,98,37,81,163,40,249,228,204,203,9,246,24,142,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[108,218,232,161,221,187,175,216,68,131,22,34,149,114,194,98,43,129,205,98,37,81,163,40,249,228,204,203,9,246,24,142]}
// Seed: 3084791430196760026

struct Struct_1 {
    a: bool,
}

struct Struct_2 {
    a: Struct_1,
    b: Struct_1,
    c: Struct_1,
    d: Struct_1,
}

struct Struct_3 {
    a: u32,
}

struct Struct_4 {
    a: vec3<bool>,
    b: vec2<f32>,
    c: vec4<i32>,
}

struct Struct_5 {
    a: Struct_1,
    b: u32,
}

struct UniformBuffer {
    a: vec3<i32>,
    b: vec2<i32>,
    c: u32,
}

struct StorageBuffer {
    a: vec4<u32>,
    b: vec2<i32>,
    c: vec4<u32>,
    d: vec2<f32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> LOOP_COUNTERS: array<u32, 32>;

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
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

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn func_6() -> bool {
    for (var var_0 = -44234i; false; var_0 -= 1i) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
    }
    for (var var_0 = 0i; (u_input.c != firstLeadingBit(11621u)) && !all(select(vec2<bool>(true, true), vec2<bool>(true, false), select(vec2<bool>(false, false), vec2<bool>(false, true), vec2<bool>(false, true)))); var_0 -= 1i) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        let var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(-656f))), -1000f))));
        var var_2 = u_input.c;
        loop {
            if (LOOP_COUNTERS[2u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            break;
        }
        if (var_1 < _wgslsmith_f_op_f32(trunc(-1391f))) {
        }
    }
    return true;
}

fn func_7(arg_0: bool, arg_1: bool, arg_2: u32, arg_3: Struct_2) -> vec4<bool> {
    var var_0 = arg_3.d;
    if (var_0.a) {
        switch (_wgslsmith_dot_vec2_i32(select(u_input.a.xx, vec2<i32>(55807i ^ abs(u_input.a.x), u_input.b.x), !any(!vec4<bool>(true, true, true, var_0.a))), vec2<i32>(-u_input.b.x, 0i) ^ -min(u_input.b, -u_input.a.yz))) {
            case -1i: {
                let var_1 = _wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(-456f, 549f, 696f, -2108f))) + vec4<f32>(_wgslsmith_f_op_f32(-1000f), 646f, 1083f, _wgslsmith_f_op_f32(select(768f, 863f, arg_0)))))));
                var var_2 = vec2<bool>(true, var_1.x <= var_1.x);
                var var_3 = ~3598u >= _wgslsmith_mult_u32(u_input.c, ~(~countOneBits(arg_2)));
                let var_4 = Struct_2(arg_3.d, arg_3.c, arg_3.d, Struct_1(false));
            }
            case 11471i: {
                let var_1 = _wgslsmith_dot_vec3_i32(reverseBits(u_input.a) & u_input.a, -u_input.a);
                var_0 = arg_3.a;
                let var_2 = Struct_2(Struct_1(var_1 >= 1i), Struct_1(select(_wgslsmith_mult_i32(var_1, var_1) == _wgslsmith_dot_vec3_i32(u_input.a, vec3<i32>(-1i, u_input.a.x, u_input.b.x)), !(!arg_1), arg_1)), arg_3.b, arg_3.c);
            }
            case -28540i: {
                var_0 = Struct_1(arg_0);
            }
            case 1i: {
                var var_1 = arg_3.b;
            }
            default: {
                let var_1 = abs(~select(~vec4<u32>(arg_2, arg_2, 1u, arg_2), vec4<u32>(17371u, arg_2, 31451u, arg_2), select(vec4<bool>(false, false, arg_3.c.a, arg_3.d.a), vec4<bool>(arg_3.b.a, true, true, arg_1), arg_3.b.a))) >> (~vec4<u32>(u_input.c, arg_2, select(arg_2, u_input.c, arg_0) | 4294967295u, 13876u) % vec4<u32>(32u));
                let var_2 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1f - _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-483f), _wgslsmith_f_op_f32(select(-195f, 686f, true)))))) + 1866f);
                var_0 = Struct_1(arg_0);
                var_0 = Struct_1(all(select(select(vec2<bool>(arg_3.d.a, true), vec2<bool>(false, var_0.a), true), !select(vec2<bool>(true, true), vec2<bool>(arg_3.a.a, arg_0), vec2<bool>(arg_1, arg_1)), arg_0)));
            }
        }
        switch (-22484i) {
            case i32(-2147483648): {
                let var_1 = Struct_4(select(!vec3<bool>(true, select(arg_3.d.a, arg_0, false), arg_1), vec3<bool>(true, all(!vec3<bool>(arg_0, var_0.a, arg_3.c.a)), false), vec3<bool>(var_0.a, true, true)), vec2<f32>(165f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -438f)))), _wgslsmith_add_vec4_i32(firstLeadingBit(select(vec4<i32>(-1i, u_input.b.x, 9923i, -70185i), vec4<i32>(29890i, u_input.b.x, u_input.a.x, u_input.a.x), arg_1)) ^ vec4<i32>(-23876i, u_input.a.x, i32(-1i) * -24272i, u_input.b.x), min(min(-vec4<i32>(26691i, -1i, -4155i, 17931i), vec4<i32>(-1i, i32(-2147483648), u_input.a.x, i32(-2147483648)) << (vec4<u32>(u_input.c, arg_2, u_input.c, 0u) % vec4<u32>(32u))), -(vec4<i32>(14155i, u_input.a.x, u_input.a.x, u_input.a.x) & vec4<i32>(-61093i, 54042i, u_input.b.x, -15177i)))));
                let var_2 = vec3<bool>(arg_3.c.a, ((-var_1.c.x <= -1i) & arg_3.c.a) || select(all(!var_1.a.xz), !any(vec4<bool>(false, var_0.a, arg_1, true)), !arg_0), false);
                var var_3 = Struct_3(reverseBits(_wgslsmith_dot_vec4_u32(_wgslsmith_clamp_vec4_u32(vec4<u32>(0u, 46768u, 0u, 41893u), vec4<u32>(10151u, 15140u, 0u, 63666u), vec4<u32>(arg_2, 4294967295u, 3191u, 4294967295u)), _wgslsmith_add_vec4_u32(vec4<u32>(19570u, 13446u, arg_2, u_input.c), vec4<u32>(arg_2, 49693u, arg_2, arg_2))) >> (_wgslsmith_dot_vec3_u32(_wgslsmith_clamp_vec3_u32(vec3<u32>(1u, u_input.c, arg_2), vec3<u32>(5810u, 4294967295u, arg_2), vec3<u32>(u_input.c, arg_2, 1u)), firstTrailingBit(vec3<u32>(30834u, 4294967295u, arg_2))) % 32u)));
            }
            case 45252i: {
                let var_1 = arg_3.c;
                var var_2 = Struct_3(39688u);
                let var_3 = Struct_5(arg_3.b, 14003u);
                let var_4 = ~1u;
                let var_5 = 2147483647i;
            }
            case 35990i: {
            }
            case 1i: {
                let var_1 = Struct_3(1u);
                var var_2 = var_1.a;
                var_2 = ~_wgslsmith_div_u32(var_1.a, 34659u);
                let var_3 = _wgslsmith_add_vec3_i32(~max(vec3<i32>(2147483647i, -6122i, countOneBits(u_input.a.x)), max(-u_input.a, vec3<i32>(u_input.b.x, u_input.a.x, -1i))), u_input.a);
            }
            default: {
                let var_1 = vec3<u32>(arg_2, _wgslsmith_dot_vec3_u32(~select(vec3<u32>(arg_2, u_input.c, 11973u), _wgslsmith_div_vec3_u32(vec3<u32>(u_input.c, 46660u, u_input.c), vec3<u32>(73616u, 1u, u_input.c)), !vec3<bool>(true, arg_0, true)), ~(vec3<u32>(arg_2, u_input.c, arg_2) ^ vec3<u32>(95385u, u_input.c, 4294967295u)) | firstLeadingBit(_wgslsmith_sub_vec3_u32(vec3<u32>(u_input.c, 4294967295u, arg_2), vec3<u32>(u_input.c, 4294967295u, u_input.c)))), u_input.c);
                var_0 = Struct_1(arg_0);
                let var_2 = Struct_4(!select(!select(vec3<bool>(arg_1, false, var_0.a), vec3<bool>(arg_0, arg_3.a.a, true), true), vec3<bool>(true, var_0.a, true), select(any(vec3<bool>(false, arg_1, var_0.a)), true, arg_3.b.a & arg_1)), _wgslsmith_f_op_vec2_f32(min(_wgslsmith_f_op_vec2_f32(abs(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(631f, 189f)) - vec2<f32>(-219f, 925f)))), _wgslsmith_f_op_vec2_f32(-vec2<f32>(190f, _wgslsmith_f_op_f32(1925f + -660f))))), vec4<i32>(~u_input.b.x, -1i, _wgslsmith_sub_i32(min(-1i, reverseBits(u_input.a.x)), countOneBits(reverseBits(-43861i))), -_wgslsmith_dot_vec2_i32(-u_input.b, -vec2<i32>(26303i, -13526i))));
            }
        }
    }
    for (; ; ) {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        let var_1 = _wgslsmith_f_op_f32(round(-913f));
        if (func_6()) {
            var_0 = arg_3.a;
            let var_2 = Struct_2(arg_3.b, Struct_1(!((0u < u_input.c) == false)), arg_3.d, Struct_1(var_0.a));
            continue;
        }
        for (; ; ) {
            if (LOOP_COUNTERS[4u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        }
        var_0 = arg_3.b;
    }
    let var_1 = _wgslsmith_mult_u32(~(~arg_2), u_input.c);
    let var_2 = arg_1;
    return !(!(!vec4<bool>(false, false, var_0.a && false, u_input.c <= 24049u)));
}

fn func_5() -> bool {
    let var_0 = !func_7(!(!any(vec4<bool>(false, true, true, false))), func_6(), u_input.c, Struct_2(Struct_1(false), Struct_1(true), Struct_1(true), Struct_1(true)));
    for (var var_1 = -1109i; var_1 != 1i; var_1 -= 1i) {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
    }
    var var_1 = ~(firstTrailingBit(vec3<i32>(reverseBits(12349i), -16417i, i32(-2147483648))) >> (~firstLeadingBit(vec3<u32>(u_input.c, 70146u, 18379u) >> (vec3<u32>(18271u, u_input.c, u_input.c) % vec3<u32>(32u))) % vec3<u32>(32u)));
    for (; var_0.x; ) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        let var_2 = func_7(all(vec4<bool>(true, true, true, !var_0.x)), var_0.x, ~(~_wgslsmith_mod_u32(reverseBits(u_input.c), countOneBits(u_input.c))), Struct_2(Struct_1(true), Struct_1(true), Struct_1(!all(vec4<bool>(var_0.x, var_0.x, var_0.x, var_0.x))), Struct_1(true)));
        break;
    }
    if (!(any(func_7(all(vec3<bool>(var_0.x, var_0.x, var_0.x)), !var_0.x, 5256u, Struct_2(Struct_1(true), Struct_1(var_0.x), Struct_1(var_0.x), Struct_1(true))).xy) || false)) {
        let var_2 = Struct_1(true);
        var var_3 = ~vec3<u32>(countOneBits(_wgslsmith_sub_u32(_wgslsmith_div_u32(19160u, u_input.c), 82758u)), reverseBits(~1u), _wgslsmith_clamp_u32(_wgslsmith_mult_u32(_wgslsmith_mult_u32(u_input.c, 6253u), 0u), u_input.c, ~u_input.c));
        loop {
            if (LOOP_COUNTERS[7u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
            continue;
        }
        let var_4 = vec3<i32>(-21085i >> ((50031u & _wgslsmith_mult_u32(105056u, _wgslsmith_mod_u32(30491u, var_3.x))) % 32u), _wgslsmith_dot_vec2_i32(u_input.b, reverseBits(vec2<i32>(_wgslsmith_div_i32(1i, var_1.x), ~var_1.x))), _wgslsmith_div_i32(i32(-2147483648), 2147483647i));
        if (var_2.a) {
            var_3 = abs(~vec3<u32>(u_input.c, _wgslsmith_div_u32(~0u, 8090u << (var_3.x % 32u)), ~_wgslsmith_mult_u32(u_input.c, u_input.c)));
            let var_5 = true;
            var var_6 = Struct_5(Struct_1(var_2.a), countOneBits(29436u));
        }
    }
    return select(all(var_0.xx), !var_0.x, true);
}

fn func_4() -> Struct_1 {
    loop {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
    }
    for (var var_0 = 11141i; func_5(); ) {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        for (var var_1: i32; true; var_1 += 1i) {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
            let var_2 = abs(firstTrailingBit(abs(~vec3<u32>(73058u, u_input.c, u_input.c))) ^ ~_wgslsmith_mod_vec3_u32(_wgslsmith_clamp_vec3_u32(vec3<u32>(u_input.c, 34650u, 43214u), vec3<u32>(u_input.c, 0u, 56159u), vec3<u32>(4294967295u, u_input.c, u_input.c)), vec3<u32>(93441u, u_input.c, 33571u)));
            break;
        }
        let var_1 = Struct_5(Struct_1(any(vec3<bool>(true, true, u_input.a.x >= u_input.a.x))), ~(~1u));
    }
    var var_0 = Struct_2(Struct_1(func_5()), Struct_1(false), Struct_1(any(vec3<bool>(true, true, true))), Struct_1(true));
    var_0 = Struct_2(Struct_1(true), var_0.c, Struct_1(!(!all(vec4<bool>(var_0.b.a, true, var_0.a.a, var_0.a.a)))), Struct_1(all(!(!vec3<bool>(var_0.c.a, var_0.a.a, var_0.c.a)))));
    if (!(true != !(!(!var_0.b.a)))) {
        if (!func_5()) {
            var var_1 = Struct_5(Struct_1(!(!(1u == u_input.c))), u_input.c);
            var_0 = Struct_2(Struct_1(_wgslsmith_mult_i32(u_input.b.x, u_input.b.x ^ i32(-2147483648)) <= 51517i), var_1.a, var_0.c, var_0.c);
        }
        return var_0.d;
    }
    return var_0.b;
}

fn func_8(arg_0: Struct_1, arg_1: Struct_3, arg_2: f32) -> vec4<u32> {
    for (var var_0 = 2147483647i; var_0 <= -1i; var_0 -= 1i) {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        if (true) {
            var var_1 = -_wgslsmith_clamp_i32(~_wgslsmith_dot_vec2_i32(_wgslsmith_clamp_vec2_i32(u_input.a.zy, u_input.a.zy, vec2<i32>(1i, u_input.b.x)), vec2<i32>(u_input.a.x, -5626i)), firstTrailingBit(_wgslsmith_mult_i32(i32(-1i) * -55405i, -2851i)), u_input.a.x);
        }
        var var_1 = vec2<u32>(~_wgslsmith_mod_u32(~arg_1.a, u_input.c), ~(~(~abs(u_input.c))));
        break;
    }
    let var_0 = u_input.a.x;
    loop {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
    }
    if (func_5()) {
    }
    switch (min(-firstLeadingBit(var_0), _wgslsmith_div_i32(_wgslsmith_clamp_i32(26622i, reverseBits(var_0), -u_input.b.x), 64786i) << (1u % 32u))) {
        case 2919i: {
            if (arg_0.a) {
                var var_1 = arg_0;
                let var_2 = _wgslsmith_sub_u32(u_input.c, 2166u);
                var_1 = arg_0;
                let var_3 = u_input.a.x;
                return ~_wgslsmith_clamp_vec4_u32(vec4<u32>(arg_1.a, 1u, 20060u, _wgslsmith_clamp_u32(~62119u, 6117u & arg_1.a, var_2)), countOneBits(vec4<u32>(u_input.c, var_2, u_input.c, 40055u) << (vec4<u32>(u_input.c, 17649u, 4294967295u, 4294967295u) % vec4<u32>(32u))) | _wgslsmith_mult_vec4_u32(min(vec4<u32>(0u, arg_1.a, 42235u, var_2), vec4<u32>(arg_1.a, 0u, 21038u, u_input.c)), reverseBits(vec4<u32>(arg_1.a, arg_1.a, 33766u, u_input.c))), ~(~min(vec4<u32>(var_2, 7427u, 1u, 0u), vec4<u32>(45246u, 4294967295u, arg_1.a, arg_1.a))));
            }
            var var_1 = Struct_5(Struct_1(arg_0.a | true), 85812u);
        }
        case -8525i: {
            loop {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                var var_1 = Struct_1(true);
                var_1 = func_4();
            }
            if (all(!(!func_7(true, false, u_input.c, Struct_2(arg_0, arg_0, arg_0, Struct_1(arg_0.a))).wy))) {
                let var_1 = arg_0;
                let var_2 = arg_1.a;
                let var_3 = u_input.a.x;
            }
        }
        default: {
            loop {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                continue;
            }
            var var_1 = ~abs(vec3<u32>(arg_1.a, 51619u, ~u_input.c >> (abs(arg_1.a) % 32u)));
            for (var var_2 = 33450i; arg_0.a; var_2 += 1i) {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
                break;
            }
            let var_2 = arg_2;
            var_1 = abs(vec3<u32>(~(arg_1.a ^ u_input.c), _wgslsmith_clamp_u32(30460u, arg_1.a, ~0u), 19804u) & ~vec3<u32>(u_input.c, ~var_1.x, ~var_1.x));
        }
    }
    return ~(_wgslsmith_mod_vec4_u32(vec4<u32>(u_input.c, 1u, 1u, u_input.c) & reverseBits(vec4<u32>(4294967295u, 0u, 38695u, 17815u)), ~(~vec4<u32>(6348u, 91261u, 4294967295u, arg_1.a))) >> (vec4<u32>(0u, 1u, ~16528u, ~_wgslsmith_sub_u32(arg_1.a, u_input.c)) % vec4<u32>(32u)));
}

fn func_3() -> bool {
    for (var var_0 = 1i; var_0 > 17953i; ) {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        let var_1 = Struct_5(Struct_1(!all(vec4<bool>(true, true, true, true))), 0u);
        let var_2 = Struct_5(var_1.a, _wgslsmith_div_u32(_wgslsmith_add_u32(32466u, firstLeadingBit(u_input.c)), 0u));
        break;
    }
    let var_0 = ~(~func_8(func_4(), Struct_3(~47169u), _wgslsmith_f_op_f32(-1428f * _wgslsmith_f_op_f32(-801f - -115f))));
    for (var var_1 = i32(-2147483648); any(vec2<bool>(!(13620u >= u_input.c), func_7(true, true, u_input.c, Struct_2(Struct_1(true), Struct_1(true), Struct_1(false), Struct_1(false))).x)) && !any(vec4<bool>(true, all(vec2<bool>(true, false)), true, true)); var_1 = ~(~(-abs(~1i)))) {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
    }
    var var_1 = ~_wgslsmith_dot_vec2_u32(var_0.yw & _wgslsmith_div_vec2_u32(var_0.xy, _wgslsmith_add_vec2_u32(var_0.yw, var_0.yz)), var_0.yz);
    var_1 = u_input.c;
    return true;
}

fn func_2(arg_0: Struct_4, arg_1: vec4<f32>) -> vec4<bool> {
    for (var var_0 = -54362i; var_0 >= -38987i; var_0 += 1i) {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        if (true) {
            var_0 = 0i;
            var_0 = u_input.b.x;
            return !(!select(vec4<bool>(true, false, any(arg_0.a.yx), true), select(!vec4<bool>(false, false, false, arg_0.a.x), vec4<bool>(arg_0.a.x, arg_0.a.x, true, arg_0.a.x), !vec4<bool>(false, arg_0.a.x, false, arg_0.a.x)), select(!vec4<bool>(arg_0.a.x, arg_0.a.x, false, arg_0.a.x), vec4<bool>(false, false, arg_0.a.x, arg_0.a.x), vec4<bool>(false, arg_0.a.x, false, arg_0.a.x))));
        }
        loop {
            if (LOOP_COUNTERS[19u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
            let var_1 = _wgslsmith_f_op_f32(-arg_0.b.x);
        }
        return !select(!select(!vec4<bool>(true, arg_0.a.x, true, arg_0.a.x), !vec4<bool>(arg_0.a.x, false, arg_0.a.x, false), vec4<bool>(true, true, true, true)), vec4<bool>(true, any(!vec4<bool>(arg_0.a.x, true, false, true)), arg_0.a.x && false, arg_0.a.x), arg_0.a.x);
    }
    for (; ; ) {
        if (LOOP_COUNTERS[20u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
        let var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1f * _wgslsmith_f_op_f32(-arg_1.x))) * arg_0.b.x));
        for (var var_1 = 2147483647i; var_1 <= -11483i; ) {
            if (LOOP_COUNTERS[21u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
            continue;
        }
        var var_1 = true;
        if (arg_0.a.x) {
            continue;
        }
        if (all(select(!select(vec4<bool>(false, true, true, true), vec4<bool>(arg_0.a.x, arg_0.a.x, false, true), vec4<bool>(arg_0.a.x, true, arg_0.a.x, arg_0.a.x)), vec4<bool>(arg_0.a.x, func_3(), arg_0.a.x, false), select(!vec4<bool>(arg_0.a.x, true, arg_0.a.x, true), func_7(false, false, 0u, Struct_2(Struct_1(arg_0.a.x), Struct_1(arg_0.a.x), Struct_1(arg_0.a.x), Struct_1(arg_0.a.x))), !arg_0.a.x))) & any(select(!vec2<bool>(arg_0.a.x, arg_0.a.x), !select(vec2<bool>(false, false), arg_0.a.yx, arg_0.a.xx), vec2<bool>(true, u_input.c < 14289u)))) {
            var var_2 = vec4<u32>(u_input.c, u_input.c, 52106u, u_input.c);
            var var_3 = Struct_3(4294967295u);
        }
    }
    let var_0 = Struct_3(_wgslsmith_div_u32(_wgslsmith_sub_u32(u_input.c, 1u), _wgslsmith_mult_u32(_wgslsmith_mult_u32(0u, u_input.c), 4294967295u) ^ 19665u));
    switch (u_input.a.x) {
        case 2147483647i: {
            if (arg_0.a.x) {
            }
        }
        case 0i: {
            return vec4<bool>(arg_0.a.x, func_7(false, arg_0.a.x, abs(0u), Struct_2(Struct_1(func_4().a), Struct_1(true), Struct_1(true & arg_0.a.x), func_4())).x, false, true);
        }
        default: {
            for (var var_1 = 0i; var_1 < i32(-2147483648); ) {
                if (LOOP_COUNTERS[22u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
            }
            var var_1 = Struct_3(_wgslsmith_dot_vec2_u32(_wgslsmith_add_vec2_u32(vec2<u32>(var_0.a, var_0.a), vec2<u32>(41767u, u_input.c)) << (vec2<u32>(~var_0.a, u_input.c & u_input.c) % vec2<u32>(32u)), vec2<u32>(1u, 1u) >> (~_wgslsmith_clamp_vec2_u32(vec2<u32>(u_input.c, 12462u), vec2<u32>(37134u, u_input.c), vec2<u32>(var_0.a, var_0.a)) % vec2<u32>(32u))));
            switch (~u_input.b.x) {
                default: {
                    var var_2 = _wgslsmith_f_op_f32(-957f);
                    var_1 = var_0;
                    var_2 = arg_0.b.x;
                }
            }
            var var_2 = Struct_1(arg_0.a.x);
            if (arg_0.a.x) {
            }
        }
    }
    for (; ; ) {
        if (LOOP_COUNTERS[23u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
        switch (-16812i) {
            case -14457i: {
                let var_1 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-756f) - arg_1.x);
            }
            case -37046i: {
                break;
            }
            case 15655i: {
                let var_1 = _wgslsmith_f_op_f32(_wgslsmith_div_f32(-2347f, 733f) - _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(select(1085f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(arg_0.b.x, -721f))), arg_0.a.x != false)))));
                break;
            }
            case 2147483647i: {
            }
            default: {
                break;
            }
        }
    }
    return vec4<bool>(any(arg_0.a), func_6(), true, !arg_0.a.x);
}

fn func_1() -> vec4<bool> {
    return !select(!vec4<bool>(true, all(vec2<bool>(false, true)), true, true), vec4<bool>(!(u_input.c > u_input.c), _wgslsmith_f_op_f32(f32(-1f) * -1116f) >= _wgslsmith_f_op_f32(sign(-253f)), all(vec3<bool>(true, false, true)) || true, false), select(vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true), func_2(Struct_4(vec3<bool>(false, true, true), vec2<f32>(1000f, 467f), vec4<i32>(u_input.b.x, u_input.b.x, 26753i, u_input.b.x)), _wgslsmith_f_op_vec4_f32(vec4<f32>(-269f, -147f, -1174f, 1605f) + vec4<f32>(1351f, -1724f, 178f, -1148f)))));
}

@compute
@workgroup_size(1)
fn main() {
    var var_0 = true || all(vec4<bool>(any(func_1()), false, true, func_7(any(vec2<bool>(false, true)), true, 4294967295u, Struct_2(Struct_1(false), Struct_1(true), Struct_1(true), Struct_1(false))).x));
    loop {
        if (LOOP_COUNTERS[24u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
        var_0 = select(false, func_6(), select(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-702f))) <= _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(floor(-669f)))), u_input.b.x >= -1i, true));
        var_0 = !(!func_3());
    }
    switch (-30880i) {
        case -37635i: {
        }
        case -36526i: {
            var_0 = false;
            if (!(163f >= _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(f32(-1f) * -538f))))) {
                var var_1 = true;
                let var_2 = ~(-(-(~vec4<i32>(2147483647i, 52090i, u_input.b.x, 6839i)) >> (countOneBits(min(vec4<u32>(u_input.c, u_input.c, 38398u, u_input.c), vec4<u32>(u_input.c, u_input.c, u_input.c, 0u))) % vec4<u32>(32u))));
                var_0 = true;
                var_0 = all(!vec4<bool>(!all(vec3<bool>(true, false, true)), true, false, true & func_3()));
                var var_3 = ~vec3<u32>(u_input.c, firstTrailingBit((u_input.c | 67700u) ^ ~17615u), u_input.c);
            }
            var_0 = all(select(select(!select(vec4<bool>(true, false, false, true), vec4<bool>(false, false, true, true), false), vec4<bool>(true, true, true, true), false), vec4<bool>(!func_3(), all(func_7(true, false, u_input.c, Struct_2(Struct_1(true), Struct_1(false), Struct_1(false), Struct_1(false))).ywx), true, true), false));
            var var_1 = !(true != func_6()) & true;
            for (var var_2 = 1i; true; var_2 -= 1i) {
                if (LOOP_COUNTERS[25u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
                var var_3 = Struct_5(func_4(), ~u_input.c & ~u_input.c);
            }
        }
        case -26168i: {
            let var_1 = all(vec4<bool>(func_1().x, true, !(_wgslsmith_clamp_u32(u_input.c, u_input.c, u_input.c) <= _wgslsmith_dot_vec3_u32(vec3<u32>(u_input.c, 61619u, 4294967295u), vec3<u32>(u_input.c, 4294967295u, u_input.c))), true));
            loop {
                if (LOOP_COUNTERS[26u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
                let var_2 = ~104900u;
                let var_3 = var_1;
                continue;
            }
            var_0 = _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(floor(155f)), _wgslsmith_f_op_f32(round(624f))))))) < _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(427f - -1364f))));
        }
        case 0i: {
            switch (~(-(-17047i & u_input.a.x))) {
                case 0i: {
                    var var_1 = _wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(step(-351f, 1358f)), -1000f, u_input.a.x != 8107i)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-932f))), _wgslsmith_f_op_f32(f32(-1f) * -161f)) - _wgslsmith_f_op_f32(1f * _wgslsmith_f_op_f32(1219f - -105f)));
                    var_0 = true;
                    var_1 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-702f + -1469f)))))) - _wgslsmith_f_op_f32(select(-419f, _wgslsmith_f_op_f32(f32(-1f) * -1194f), u_input.c != _wgslsmith_mod_u32(u_input.c >> (57480u % 32u), countOneBits(u_input.c)))));
                }
                case -1i: {
                    var var_1 = Struct_4(func_7(false, all(vec3<bool>(true, func_7(true, false, u_input.c, Struct_2(Struct_1(true), Struct_1(true), Struct_1(true), Struct_1(false))).x, true)), _wgslsmith_clamp_u32(4294967295u, 1u, ~_wgslsmith_sub_u32(79898u, 6879u)), Struct_2(Struct_1(false), func_4(), Struct_1(false), func_4())).zxz, _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(abs(_wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(max(vec2<f32>(-918f, 2609f), vec2<f32>(-1291f, -1195f)))))))), vec4<i32>(_wgslsmith_dot_vec4_i32(firstTrailingBit(vec4<i32>(u_input.a.x, u_input.a.x, u_input.b.x, 1i)), _wgslsmith_clamp_vec4_i32(vec4<i32>(u_input.b.x, 11970i, u_input.a.x, u_input.a.x), vec4<i32>(u_input.b.x, -10102i, 1i, 13302i) >> (vec4<u32>(4294967295u, 11586u, 31436u, u_input.c) % vec4<u32>(32u)), -vec4<i32>(-26372i, u_input.b.x, i32(-2147483648), u_input.b.x))), u_input.b.x, u_input.b.x, u_input.b.x));
                    var_1 = Struct_4(func_2(Struct_4(vec3<bool>(true, all(vec2<bool>(false, true)), !var_1.a.x), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(var_1.b.x, -162f))), vec4<i32>(0i, -1i, 0i, -2100i) & max(vec4<i32>(-1i, u_input.a.x, i32(-2147483648), u_input.a.x), var_1.c)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(floor(-863f)), _wgslsmith_f_op_f32(-var_1.b.x), _wgslsmith_f_op_f32(var_1.b.x + 222f), 2015f))).wyy, _wgslsmith_f_op_vec2_f32(round(_wgslsmith_f_op_vec2_f32(_wgslsmith_div_vec2_f32(vec2<f32>(695f, 753f), vec2<f32>(var_1.b.x, var_1.b.x)) + vec2<f32>(_wgslsmith_f_op_f32(round(-350f)), _wgslsmith_f_op_f32(abs(var_1.b.x)))))), vec4<i32>(_wgslsmith_sub_i32(~countOneBits(var_1.c.x), (var_1.c.x << (4294967295u % 32u)) | -1i), -var_1.c.x, firstLeadingBit(countOneBits(2147483647i)), i32(-2147483648)));
                }
                default: {
                    var var_1 = u_input.c;
                    var var_2 = _wgslsmith_clamp_i32(i32(-2147483648), firstTrailingBit(i32(-2147483648)), -43262i);
                }
            }
            var_0 = false;
            for (var var_1 = 2147483647i; true; var_1 = _wgslsmith_dot_vec2_i32(u_input.b, -abs(vec2<i32>(u_input.a.x, ~u_input.a.x)))) {
                if (LOOP_COUNTERS[27u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[27u] = LOOP_COUNTERS[27u] + 1u;
                let var_2 = select(vec2<u32>(1042u ^ u_input.c, _wgslsmith_sub_u32(u_input.c, ~u_input.c)), vec2<u32>(u_input.c, _wgslsmith_clamp_u32(1u, 39625u, min(_wgslsmith_add_u32(u_input.c, 4294967295u), 0u))), vec2<bool>((u_input.c == u_input.c) == true, all(vec3<bool>(true, true, true)) && true));
                continue;
            }
            switch (-min(38347i, u_input.b.x)) {
                default: {
                    let var_1 = Struct_4(func_2(Struct_4(func_1().xzy, _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(447f, 350f) + vec2<f32>(-279f, -113f)) + _wgslsmith_f_op_vec2_f32(ceil(vec2<f32>(1081f, 1062f)))), _wgslsmith_add_vec4_i32(~vec4<i32>(u_input.a.x, u_input.b.x, u_input.b.x, u_input.a.x), ~vec4<i32>(u_input.a.x, -5607i, -13588i, -1i))), vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-853f) + _wgslsmith_f_op_f32(floor(1859f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(959f, -392f, true))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(625f)) - _wgslsmith_f_op_f32(-989f - -364f)), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(-984f, -427f)))).wyy, _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(round(vec2<f32>(-961f, 915f))), _wgslsmith_f_op_vec2_f32(-vec2<f32>(-221f, -969f)), vec2<bool>(true, true))) + _wgslsmith_f_op_vec2_f32(floor(vec2<f32>(171f, 1540f))))), vec4<i32>(u_input.a.x, -(~(~u_input.a.x)), _wgslsmith_clamp_i32(u_input.a.x, 0i << (~4294967295u % 32u), _wgslsmith_add_i32(_wgslsmith_div_i32(28362i, u_input.b.x), u_input.b.x)), ~u_input.b.x));
                    var var_2 = var_1;
                    let var_3 = Struct_3(0u);
                    let var_4 = Struct_4(var_2.a, var_1.b, vec4<i32>(_wgslsmith_mod_i32(0i & u_input.b.x, min(-var_1.c.x, _wgslsmith_div_i32(u_input.a.x, 1i))), var_2.c.x, var_1.c.x, ~1i));
                    var var_5 = Struct_2(func_4(), Struct_1(true), func_4(), Struct_1(false));
                }
            }
        }
        default: {
        }
    }
    switch (abs(reverseBits(u_input.b.x | u_input.b.x))) {
        case -1i: {
        }
        case -664i: {
            switch (u_input.b.x) {
                default: {
                    let var_1 = 1i;
                    var_0 = !all(!vec2<bool>(true, all(vec2<bool>(false, false))));
                    var_0 = select(all(vec2<bool>(true, func_6())), true, -1i == _wgslsmith_mult_i32(1i, u_input.a.x));
                    var var_2 = false;
                }
            }
        }
        case -30059i: {
            var_0 = true;
            var var_1 = ~(vec2<u32>(1u, 52992u) << (_wgslsmith_add_vec2_u32(firstTrailingBit(vec2<u32>(4294967295u, 14549u)), max(vec2<u32>(u_input.c, u_input.c), vec2<u32>(u_input.c, 41338u)) & ~vec2<u32>(u_input.c, 726u)) % vec2<u32>(32u)));
            var_1 = vec2<u32>(u_input.c, max(36036u, ~(~_wgslsmith_div_u32(u_input.c, u_input.c))));
            let var_2 = Struct_5(Struct_1(false), 13416u);
        }
        case -23176i: {
            let var_1 = 0u;
            var var_2 = Struct_3(min(0u, ~var_1));
        }
        default: {
            switch (_wgslsmith_clamp_i32(_wgslsmith_div_i32(-_wgslsmith_dot_vec3_i32(vec3<i32>(34745i, -1i, -30637i), u_input.a), 28715i), 32203i, -25015i)) {
                case 20835i: {
                    var_0 = false;
                }
                case i32(-2147483648): {
                    var_0 = !(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(f32(-1f) * -763f)))) >= _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(1206f - 1873f))) - -1851f));
                }
                case 18244i: {
                    var_0 = true;
                    let var_1 = Struct_5(Struct_1(any(vec3<bool>(true, true, true))), _wgslsmith_mult_u32(~(_wgslsmith_dot_vec2_u32(vec2<u32>(u_input.c, u_input.c), vec2<u32>(1u, 1u)) >> (1u % 32u)), u_input.c));
                    var_0 = var_1.a.a;
                }
                case 1i: {
                    return;
                }
                default: {
                    var var_1 = Struct_5(Struct_1(true), abs(631u));
                }
            }
        }
    }
    switch (u_input.b.x) {
        case -6396i: {
            let var_1 = Struct_2(Struct_1(true), Struct_1(all(func_1().xz)), func_4(), Struct_1(_wgslsmith_mod_u32(u_input.c | 33878u, u_input.c) >= (_wgslsmith_sub_u32(0u, u_input.c) ^ abs(3848u))));
            var_0 = false;
            for (var var_2: i32; var_2 < 85610i; var_2 += 1i) {
                if (LOOP_COUNTERS[28u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[28u] = LOOP_COUNTERS[28u] + 1u;
                let var_3 = Struct_2(Struct_1(var_1.a.a), func_4(), func_4(), func_4());
                continue;
            }
            var_0 = var_1.c.a;
        }
        case 4956i: {
            loop {
                if (LOOP_COUNTERS[29u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[29u] = LOOP_COUNTERS[29u] + 1u;
                let var_1 = !(!(!func_7(true, true, 1u, Struct_2(Struct_1(false), Struct_1(true), Struct_1(true), Struct_1(true))).yyx));
                var var_2 = Struct_1(var_1.x);
            }
            var var_1 = Struct_4(select(select(func_1().wyw, func_7(any(vec3<bool>(true, true, false)), true, _wgslsmith_clamp_u32(4294967295u, u_input.c, u_input.c), Struct_2(Struct_1(true), Struct_1(false), Struct_1(true), Struct_1(true))).wzy, vec3<bool>(any(vec3<bool>(true, true, true)), true, select(false, true, false))), vec3<bool>(true, !(u_input.c > u_input.c), func_4().a), vec3<bool>(true, true, true)), vec2<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -1752f) - _wgslsmith_f_op_f32(-2139f)), _wgslsmith_f_op_f32(select(1f, _wgslsmith_f_op_f32(-157f), false))), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-1413f - _wgslsmith_f_op_f32(floor(751f))), -623f))), select(vec4<i32>(reverseBits(2147483647i), u_input.a.x, _wgslsmith_mult_i32(u_input.a.x, -1i), 63506i), countOneBits(-vec4<i32>(42214i, i32(-2147483648), u_input.b.x, u_input.a.x)), vec4<bool>(true, true, true, true)) << (~func_8(Struct_1(true), Struct_3(u_input.c), _wgslsmith_f_op_f32(f32(-1f) * -1634f)) % vec4<u32>(32u)));
            let var_2 = select(func_7(true, false, _wgslsmith_mod_u32(abs(0u), 25366u & ~u_input.c), Struct_2(Struct_1(true), func_4(), Struct_1(false), Struct_1(false))), !vec4<bool>(var_1.a.x, var_1.a.x == true, true, _wgslsmith_dot_vec2_i32(var_1.c.wz, vec2<i32>(var_1.c.x, u_input.a.x)) < ~2147483647i), func_2(Struct_4(select(!vec3<bool>(true, var_1.a.x, var_1.a.x), vec3<bool>(var_1.a.x, var_1.a.x, false), true), _wgslsmith_f_op_vec2_f32(_wgslsmith_div_vec2_f32(vec2<f32>(var_1.b.x, var_1.b.x), var_1.b) * vec2<f32>(152f, var_1.b.x)), ~firstLeadingBit(vec4<i32>(38445i, 12434i, -48277i, 12970i))), vec4<f32>(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(ceil(var_1.b.x)), _wgslsmith_f_op_f32(-385f + var_1.b.x), func_5())), var_1.b.x, _wgslsmith_div_f32(_wgslsmith_f_op_f32(sign(1102f)), 1200f), var_1.b.x)).x);
            for (var var_3: i32; any(select(vec4<bool>(true, false, (6990i >= var_1.c.x) || (u_input.c < 44030u), true), select(!vec4<bool>(var_1.a.x, var_2.x, false, true), select(vec4<bool>(var_1.a.x, var_2.x, true, var_1.a.x), vec4<bool>(var_1.a.x, var_1.a.x, false, var_1.a.x), var_2.x), select(!var_2, var_2, var_2)), func_6())); var_1 = Struct_4(select(func_1().wzw, vec3<bool>(true, var_2.x, true), var_1.a), vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(1000f))), 135f), _wgslsmith_div_vec4_i32(var_1.c, var_1.c) & abs(var_1.c ^ vec4<i32>(32048i, u_input.a.x, var_1.c.x, i32(-2147483648))))) {
                if (LOOP_COUNTERS[30u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[30u] = LOOP_COUNTERS[30u] + 1u;
                var var_4 = Struct_2(Struct_1(var_2.x), func_4(), Struct_1(var_1.a.x), Struct_1(_wgslsmith_mult_i32(i32(-1i) * -38040i, u_input.b.x) != var_1.c.x));
                return;
            }
        }
        case 2147483647i: {
            let var_1 = -(-vec4<i32>(max(2147483647i, 34898i), 0i, _wgslsmith_dot_vec2_i32(vec2<i32>(u_input.b.x, u_input.a.x), vec2<i32>(-23163i, u_input.b.x)), -u_input.b.x) | max(select(vec4<i32>(-3294i, u_input.a.x, 2147483647i, u_input.a.x), -vec4<i32>(u_input.b.x, u_input.a.x, 1i, -34202i), true), _wgslsmith_mult_vec4_i32(_wgslsmith_mod_vec4_i32(vec4<i32>(i32(-2147483648), u_input.b.x, u_input.b.x, 31947i), vec4<i32>(u_input.a.x, u_input.b.x, u_input.a.x, 22055i)), min(vec4<i32>(-11010i, 1i, u_input.a.x, i32(-2147483648)), vec4<i32>(u_input.b.x, i32(-2147483648), 2147483647i, i32(-2147483648))))));
            switch (1i) {
                case 0i: {
                    var_0 = true;
                    var_0 = true;
                    var var_2 = !vec4<bool>(all(vec3<bool>(true, true, true)), func_6(), false, true);
                    var_2 = select(func_1(), select(func_2(Struct_4(!vec3<bool>(var_2.x, true, var_2.x), _wgslsmith_f_op_vec2_f32(ceil(vec2<f32>(-1202f, 1135f))), vec4<i32>(var_1.x, -28307i, 1i, 0i)), _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(vec4<f32>(-1307f, -343f, 676f, 1776f) * vec4<f32>(2510f, 158f, 279f, 1000f)), vec4<f32>(-886f, 222f, 1209f, -348f), !vec4<bool>(true, var_2.x, var_2.x, false)))), vec4<bool>(var_2.x, !var_2.x, var_2.x, func_6()), vec4<bool>(false, false, func_4().a, false)), vec4<bool>(var_2.x, true, !var_2.x, all(var_2.xx)));
                }
                case 52381i: {
                    var_0 = func_3();
                    var_0 = !func_1().x;
                    return;
                }
                case -22932i: {
                    return;
                }
                default: {
                    var var_2 = Struct_2(func_4(), func_4(), Struct_1(func_7(false, all(vec2<bool>(false, false)) || any(vec4<bool>(false, false, true, true)), u_input.c, Struct_2(func_4(), func_4(), Struct_1(false), Struct_1(false))).x), func_4());
                    var_2 = Struct_2(Struct_1(var_2.b.a), Struct_1(func_1().x), Struct_1(func_3()), var_2.d);
                    let var_3 = u_input.b;
                    var var_4 = Struct_5(var_2.d, u_input.c);
                    let var_5 = 0u;
                }
            }
        }
        case i32(-2147483648): {
            if (true | (~firstTrailingBit(u_input.c) <= ~u_input.c)) {
                let var_1 = Struct_3(274u);
            }
        }
        default: {
            var_0 = !(18313u == ~u_input.c);
            for (var var_1 = 0i; false; var_1 += 1i) {
                if (LOOP_COUNTERS[31u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[31u] = LOOP_COUNTERS[31u] + 1u;
            }
            if (false) {
                let var_1 = vec4<bool>(true, true, true, !func_2(Struct_4(vec3<bool>(true, true, true), _wgslsmith_div_vec2_f32(vec2<f32>(132f, 1554f), vec2<f32>(649f, -118f)), vec4<i32>(u_input.a.x, -706i, 0i, 28494i) << (vec4<u32>(0u, u_input.c, u_input.c, 0u) % vec4<u32>(32u))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(max(vec4<f32>(842f, 1239f, 1899f, -1037f), vec4<f32>(199f, -627f, -276f, 1328f))) - _wgslsmith_f_op_vec4_f32(-vec4<f32>(-1260f, 245f, 830f, -975f)))).x);
                let var_2 = Struct_2(func_4(), func_4(), Struct_1(var_1.x), func_4());
                var_0 = true;
                let var_3 = Struct_1(var_2.a.a);
            }
            var_0 = false;
        }
    }
    var var_1 = _wgslsmith_f_op_f32(f32(-1f) * -1000f);
    let var_2 = firstLeadingBit(vec3<i32>(min(1i, firstLeadingBit(reverseBits(u_input.a.x))), 1i, _wgslsmith_add_i32(-1i, u_input.a.x)));
    var_1 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-1072f))))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-295f) * _wgslsmith_f_op_f32(-647f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-642f) - 1000f)))) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(1375f))))));
    var var_3 = _wgslsmith_f_op_vec2_f32(sign(_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(821f, _wgslsmith_f_op_f32(1080f + -254f))), vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(-1633f))), _wgslsmith_f_op_f32(-874f)))));
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_sub_vec4_u32(~(~vec4<u32>(u_input.c, u_input.c, 30712u, 4294967295u)), vec4<u32>(~u_input.c, u_input.c, select(u_input.c, 1u, false), u_input.c) >> ((_wgslsmith_mod_vec4_u32(vec4<u32>(u_input.c, u_input.c, 79844u, u_input.c), vec4<u32>(u_input.c, u_input.c, u_input.c, u_input.c)) | vec4<u32>(69020u, 1u, u_input.c, 65149u)) % vec4<u32>(32u))), var_2.zx, abs(vec4<u32>(abs(u_input.c), u_input.c, 42571u, u_input.c)) << (abs((vec4<u32>(u_input.c, u_input.c, u_input.c, u_input.c) | vec4<u32>(2526u, u_input.c, 0u, u_input.c)) & vec4<u32>(98268u, 4294967295u, u_input.c, u_input.c)) % vec4<u32>(32u)), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(exp2(vec2<f32>(278f, var_3.x))), _wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(var_3.x, var_3.x))))))));
}

`;