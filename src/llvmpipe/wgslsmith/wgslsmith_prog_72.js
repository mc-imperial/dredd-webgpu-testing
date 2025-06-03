export const input = [245,32,22,24,52,121,133,245,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [245,32,22,24,52,121,133,245,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[245,32,22,24,52,121,133,245]}
// Seed: 6922854569543353811

struct Struct_1 {
    a: vec2<i32>,
    b: vec2<u32>,
    c: vec3<u32>,
    d: u32,
}

struct Struct_2 {
    a: u32,
    b: vec2<i32>,
}

struct Struct_3 {
    a: vec4<f32>,
    b: u32,
    c: f32,
}

struct Struct_4 {
    a: f32,
    b: Struct_3,
}

struct UniformBuffer {
    a: u32,
    b: i32,
}

struct StorageBuffer {
    a: vec3<i32>,
    b: f32,
    c: u32,
    d: vec3<i32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: vec4<bool> = vec4<bool>(true, false, false, true);

var<private> global1: array<vec2<f32>, 10>;

var<private> global2: array<i32, 8>;

var<private> global3: u32;

var<private> LOOP_COUNTERS: array<u32, 10>;

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn func_1(arg_0: bool, arg_1: vec3<f32>, arg_2: bool) -> u32 {
    return 0u;
}

fn func_6(arg_0: u32) -> vec4<u32> {
    var var_0 = -_wgslsmith_sub_vec2_i32(vec2<i32>(-17203i, u_input.b), vec2<i32>(-12993i, global2[_wgslsmith_index_u32(u_input.a, 8u)]));
    global1 = array<vec2<f32>, 10>();
    global3 = u_input.a;
    var var_1 = Struct_1(~(-_wgslsmith_div_vec2_i32(~vec2<i32>(var_0.x, -19891i), -vec2<i32>(1i, var_0.x))), ~vec2<u32>(u_input.a, ~(~0u)), (min(min(vec3<u32>(26053u, 4294967295u, arg_0), vec3<u32>(0u, 1u, 17937u)), max(vec3<u32>(arg_0, 1u, arg_0), vec3<u32>(u_input.a, u_input.a, 0u))) | firstTrailingBit(vec3<u32>(u_input.a, u_input.a, u_input.a))) & min(countOneBits(~vec3<u32>(u_input.a, 4294967295u, u_input.a)), _wgslsmith_sub_vec3_u32(vec3<u32>(u_input.a, 35140u, arg_0), vec3<u32>(17715u, arg_0, arg_0))), _wgslsmith_dot_vec2_u32(~(~_wgslsmith_div_vec2_u32(vec2<u32>(4294967295u, u_input.a), vec2<u32>(4294967295u, u_input.a))), abs(select(~vec2<u32>(u_input.a, 1u), vec2<u32>(1u, 40039u), select(vec2<bool>(global0.x, true), global0.yx, global0.zz)))));
    switch (1i) {
        case -33829i: {
            let var_2 = var_1.a.x;
            if (!((firstTrailingBit(4294967295u) >> (_wgslsmith_dot_vec2_u32(~vec2<u32>(2891u, 4294967295u), vec2<u32>(var_1.c.x, 33614u) >> (var_1.b % vec2<u32>(32u))) % 32u)) <= ~45199u)) {
                global1 = array<vec2<f32>, 10>();
                let var_3 = var_1.c;
                let var_4 = Struct_4(-2280f, Struct_3(vec4<f32>(-422f, _wgslsmith_f_op_f32(-1668f), _wgslsmith_div_f32(_wgslsmith_f_op_f32(185f * -1054f), _wgslsmith_div_f32(-1516f, -656f)), _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(step(-747f, 1294f))))), min(23593u, 4294967295u), -586f));
            }
            loop {
                if (LOOP_COUNTERS[0u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
                continue;
            }
            var_1 = Struct_1(~var_1.a, select(vec2<u32>(~arg_0, min(0u, u_input.a) | arg_0), ~(~var_1.b), any(!(!vec3<bool>(global0.x, false, true)))), vec3<u32>(~max(~29588u, ~var_1.d), ~u_input.a, ~63932u), select(_wgslsmith_sub_u32(~firstLeadingBit(7767u), ~(~arg_0)), ~abs(u_input.a), true && any(select(vec4<bool>(true, global0.x, false, global0.x), vec4<bool>(global0.x, global0.x, true, global0.x), global0.x))));
        }
        default: {
            for (var var_2 = 1i; var_2 > 19399i; ) {
                if (LOOP_COUNTERS[1u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
                var_1 = Struct_1(var_1.a, var_1.c.yy, _wgslsmith_div_vec3_u32(_wgslsmith_add_vec3_u32(~select(vec3<u32>(0u, 103469u, 0u), vec3<u32>(70113u, u_input.a, 92344u), global0.zzx), ~vec3<u32>(u_input.a, 1u, arg_0)), vec3<u32>(var_1.b.x, arg_0 ^ _wgslsmith_mod_u32(41287u, 77727u), 41077u << (var_1.d % 32u))), 5549u);
                continue;
            }
            var var_2 = Struct_4(1000f, Struct_3(vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-627f) * _wgslsmith_f_op_f32(-606f)), 918f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -270f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(1178f, 114f, false)) - _wgslsmith_div_f32(-793f, 164f))), 1u, -365f));
            var_0 = max(abs(vec2<i32>(1i, var_1.a.x)), abs(_wgslsmith_mod_vec2_i32(var_1.a, var_1.a)) << (~var_1.b % vec2<u32>(32u))) | _wgslsmith_clamp_vec2_i32(vec2<i32>(global2[_wgslsmith_index_u32(arg_0, 8u)], min(-42811i, u_input.b)), vec2<i32>(u_input.b, 1i) ^ firstLeadingBit(abs(vec2<i32>(-64514i, var_1.a.x))), var_1.a);
            let var_3 = _wgslsmith_mult_u32(_wgslsmith_mult_u32(_wgslsmith_sub_u32(var_2.b.b, u_input.a), 16549u), 5956u);
            var var_4 = Struct_3(vec4<f32>(787f, _wgslsmith_f_op_f32(round(var_2.a)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(var_2.b.c))) * _wgslsmith_f_op_f32(482f - var_2.a)), _wgslsmith_f_op_f32(f32(-1f) * -598f)), ~u_input.a, var_2.a);
        }
    }
    return min(_wgslsmith_mult_vec4_u32(vec4<u32>(~17063u, _wgslsmith_sub_u32(u_input.a, 28759u), u_input.a, _wgslsmith_sub_u32(4115u, 1u)) | ~(vec4<u32>(var_1.b.x, u_input.a, 0u, arg_0) ^ vec4<u32>(var_1.d, u_input.a, var_1.c.x, arg_0)), firstTrailingBit(select(vec4<u32>(var_1.b.x, 44300u, 87426u, 0u), vec4<u32>(u_input.a, var_1.b.x, var_1.c.x, 89347u), true) >> (abs(vec4<u32>(var_1.b.x, 57195u, 21651u, u_input.a)) % vec4<u32>(32u)))), max(_wgslsmith_div_vec4_u32(vec4<u32>(~4219u, max(u_input.a, 100118u), min(var_1.b.x, u_input.a), ~arg_0), select(_wgslsmith_sub_vec4_u32(vec4<u32>(u_input.a, 0u, arg_0, 74454u), vec4<u32>(46543u, u_input.a, var_1.c.x, arg_0)), vec4<u32>(var_1.b.x, var_1.b.x, 1u, arg_0) >> (vec4<u32>(55368u, 69682u, var_1.d, 1u) % vec4<u32>(32u)), any(global0.wzz))), vec4<u32>(_wgslsmith_add_u32(~29053u, 1u), var_1.c.x & ~var_1.b.x, 181u, 42459u)));
}

fn func_5() -> vec3<bool> {
    var var_0 = Struct_3(_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(select(-1234f, 823f, true)), _wgslsmith_f_op_f32(-867f * _wgslsmith_f_op_f32(-1000f)), 1f, _wgslsmith_f_op_f32(max(_wgslsmith_div_f32(-656f, -2167f), _wgslsmith_f_op_f32(-824f))))), ~1u, -1000f);
    var var_1 = Struct_3(vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_0.a.x))), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(-311f, 573f)), _wgslsmith_f_op_f32(floor(var_0.a.x)), -2160f), _wgslsmith_clamp_u32(abs(~var_0.b) & _wgslsmith_dot_vec4_u32(_wgslsmith_div_vec4_u32(vec4<u32>(1u, var_0.b, 51401u, u_input.a), vec4<u32>(68353u, 4294967295u, 56963u, 4294967295u)), vec4<u32>(var_0.b, var_0.b, 14566u, var_0.b) | vec4<u32>(1u, 2049u, 4294967295u, 20693u)), _wgslsmith_dot_vec4_u32(select(firstTrailingBit(vec4<u32>(u_input.a, u_input.a, var_0.b, u_input.a)), ~vec4<u32>(0u, var_0.b, var_0.b, var_0.b), true), func_6(~4294967295u)), u_input.a), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-1506f - -151f), -788f, false))))));
    global2 = array<i32, 8>();
    switch (_wgslsmith_add_i32(-max(1i, u_input.b), ~countOneBits(global2[_wgslsmith_index_u32(_wgslsmith_sub_u32(var_1.b, 18073u), 8u)])) | _wgslsmith_add_i32(_wgslsmith_mult_i32(_wgslsmith_div_i32(_wgslsmith_sub_i32(-1i, u_input.b), -9195i ^ u_input.b), global2[_wgslsmith_index_u32(~_wgslsmith_sub_u32(u_input.a, u_input.a), 8u)]), ~firstLeadingBit(i32(-1i) * -38396i))) {
        case -62557i: {
            let var_2 = _wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(global1[_wgslsmith_index_u32(_wgslsmith_dot_vec2_u32(countOneBits(~vec2<u32>(0u, var_1.b)), vec2<u32>(func_6(u_input.a).x, 39297u | u_input.a)), 10u)] - _wgslsmith_f_op_vec2_f32(sign(var_1.a.xx))), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(-797f, _wgslsmith_f_op_f32(-476f)))), !global0.xw));
            var var_3 = _wgslsmith_div_vec4_i32(vec4<i32>(~(-reverseBits(2147483647i)), u_input.b, -_wgslsmith_sub_i32(_wgslsmith_clamp_i32(95971i, u_input.b, -1i), u_input.b), -reverseBits(countOneBits(global2[_wgslsmith_index_u32(19896u, 8u)]))), max(vec4<i32>(~u_input.b, i32(-1i) * -39111i, global2[_wgslsmith_index_u32(var_0.b << (_wgslsmith_dot_vec4_u32(vec4<u32>(53575u, 4294967295u, var_0.b, 161277u), vec4<u32>(u_input.a, 31424u, u_input.a, var_1.b)) % 32u), 8u)], -_wgslsmith_div_i32(-3164i, global2[_wgslsmith_index_u32(1u, 8u)])), vec4<i32>(global2[_wgslsmith_index_u32(var_0.b, 8u)], abs(global2[_wgslsmith_index_u32(~4294967295u, 8u)]), ~1i, -27290i)));
            var var_4 = (u_input.a != abs(~(~4294967295u))) || any(global0.yz);
            if (false) {
                var var_5 = !(!select(!vec4<bool>(global0.x, false, false, true), select(vec4<bool>(true, global0.x, global0.x, true), vec4<bool>(global0.x, false, true, true), global0.x), select(vec4<bool>(false, true, global0.x, global0.x), select(vec4<bool>(false, false, false, global0.x), vec4<bool>(global0.x, true, global0.x, false), global0.x), !global0.x)));
                global0 = vec4<bool>(any(vec4<bool>(all(vec4<bool>(var_5.x, var_5.x, true, true)) || false, all(!vec4<bool>(false, var_5.x, true, false)), select(false, all(global0.yw), true), !var_5.x & var_5.x)), true, global0.x, all(vec2<bool>(true, var_5.x)));
                var_4 = var_5.x;
            }
        }
        case i32(-2147483648): {
            switch (i32(-1i) * -20878i) {
                default: {
                    var_1 = Struct_3(_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(sign(var_1.c)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_1.a.x)), 427f, _wgslsmith_f_op_f32(-879f))), u_input.a, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(var_1.a.x, var_0.a.x, var_1.a.x > -1188f)) + _wgslsmith_div_f32(_wgslsmith_f_op_f32(abs(-117f)), var_0.c)));
                    var var_2 = 2147483647i;
                    let var_3 = true;
                    let var_4 = Struct_2(68321u, vec2<i32>(abs(0i), 25779i));
                }
            }
        }
        default: {
            let var_2 = Struct_2(_wgslsmith_div_u32(1u, ~min(~0u, _wgslsmith_dot_vec3_u32(vec3<u32>(var_0.b, u_input.a, 4294967295u), vec3<u32>(var_1.b, var_1.b, 54698u)))), -vec2<i32>(_wgslsmith_dot_vec2_i32(vec2<i32>(global2[_wgslsmith_index_u32(var_0.b, 8u)], u_input.b) | vec2<i32>(20982i, i32(-2147483648)), firstTrailingBit(vec2<i32>(u_input.b, -29856i))), abs(_wgslsmith_mult_i32(u_input.b, -12573i))));
            global2 = array<i32, 8>();
        }
    }
    switch (_wgslsmith_clamp_i32(i32(-1i) * 0i, global2[_wgslsmith_index_u32(_wgslsmith_dot_vec4_u32(max(reverseBits(min(vec4<u32>(var_1.b, u_input.a, 1u, 117221u), vec4<u32>(var_1.b, 12905u, 4294967295u, 6762u))), ~vec4<u32>(40881u, 32029u, 52405u, 4294967295u) | _wgslsmith_div_vec4_u32(vec4<u32>(u_input.a, 4294967295u, var_1.b, var_0.b), vec4<u32>(var_0.b, var_1.b, 1u, var_0.b))), max(_wgslsmith_add_vec4_u32(vec4<u32>(24432u, var_1.b, var_0.b, var_0.b) ^ vec4<u32>(var_0.b, 0u, 1u, 1u), _wgslsmith_sub_vec4_u32(vec4<u32>(1u, 15407u, 22663u, 0u), vec4<u32>(var_0.b, var_1.b, u_input.a, 0u))), abs(firstLeadingBit(vec4<u32>(var_1.b, u_input.a, 4294967295u, u_input.a))))), 8u)], 34996i)) {
        default: {
            if (true) {
                global1 = array<vec2<f32>, 10>();
                let var_2 = Struct_3(vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(var_1.c)) * _wgslsmith_div_f32(var_0.c, _wgslsmith_f_op_f32(f32(-1f) * -931f))), 917f, _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-599f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(934f)) * var_1.a.x)), var_0.b << (func_6(u_input.a).x % 32u), var_0.a.x);
                let var_3 = vec4<bool>(929f <= _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-791f) - _wgslsmith_div_f32(var_2.c, _wgslsmith_f_op_f32(-var_2.c))), true, !(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(trunc(var_0.a.x)))) < _wgslsmith_f_op_f32(var_2.c - var_1.c)), select(any(!(!vec4<bool>(global0.x, true, true, false))), true, all(!vec2<bool>(false, global0.x))));
                let var_4 = Struct_4(var_0.a.x, Struct_3(var_1.a, 9281u, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(step(var_0.a.x, -306f)))))));
            }
            for (; (global0.x | (-1000f == _wgslsmith_f_op_f32(-var_1.a.x))) && (_wgslsmith_f_op_f32(abs(var_1.c)) > _wgslsmith_f_op_f32(floor(var_0.a.x))); ) {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            }
            let var_2 = var_0.a;
        }
    }
    return vec3<bool>(!global0.x, !select(false, true, !global0.x), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_div_f32(-777f, -750f))) > _wgslsmith_f_op_f32(var_0.c + 1000f));
}

fn func_4() -> Struct_4 {
    global2 = array<i32, 8>();
    let var_0 = select(func_5(), vec3<bool>(any(vec4<bool>(global0.x, global0.x, global0.x, false || global0.x)), false == all(global0.zzz), !(global0.x && true)), !(!all(func_5().yy)));
    let var_1 = _wgslsmith_div_vec2_i32(-select(vec2<i32>(17622i, 2147483647i), _wgslsmith_div_vec2_i32(vec2<i32>(global2[_wgslsmith_index_u32(u_input.a, 8u)], -35578i), vec2<i32>(-6048i, -67052i)), !global0.zz), _wgslsmith_mult_vec2_i32(_wgslsmith_clamp_vec2_i32(~vec2<i32>(u_input.b, 0i), vec2<i32>(-6066i, u_input.b), vec2<i32>(2189i, 10983i)), abs(vec2<i32>(-1i, u_input.b) << (vec2<u32>(u_input.a, u_input.a) % vec2<u32>(32u))))) & -(~_wgslsmith_div_vec2_i32(vec2<i32>(2147483647i, global2[_wgslsmith_index_u32(4294967295u, 8u)]), vec2<i32>(29631i, global2[_wgslsmith_index_u32(u_input.a, 8u)])));
    loop {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        continue;
    }
    if (var_0.x) {
        global1 = array<vec2<f32>, 10>();
    }
    return Struct_4(-300f, Struct_3(vec4<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-1050f), _wgslsmith_f_op_f32(min(2292f, 1485f))), _wgslsmith_f_op_f32(_wgslsmith_div_f32(-1824f, 1447f) + _wgslsmith_f_op_f32(max(1386f, 470f))), _wgslsmith_f_op_f32(-514f + _wgslsmith_f_op_f32(step(1566f, -1352f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -584f) * 1f)), _wgslsmith_mod_u32(~_wgslsmith_dot_vec3_u32(vec3<u32>(u_input.a, 4294967295u, u_input.a), vec3<u32>(68979u, 11139u, u_input.a)), 1u), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(select(-1507f, _wgslsmith_f_op_f32(-469f + 396f), !global0.x)), _wgslsmith_f_op_f32(-345f), var_0.x))));
}

fn func_3(arg_0: Struct_3, arg_1: u32) -> Struct_4 {
    global3 = 0u;
    loop {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        switch (-107763i) {
            case 30361i: {
                break;
            }
            case -7422i: {
                global2 = array<i32, 8>();
                var var_0 = global0.x;
                var var_1 = select(all(vec2<bool>(true, global0.x)), global0.x, arg_1 < _wgslsmith_sub_u32(arg_0.b, arg_1));
                let var_2 = global2[_wgslsmith_index_u32(_wgslsmith_dot_vec3_u32(firstTrailingBit(~vec3<u32>(firstTrailingBit(4294967295u), 4294967295u, 13316u)), ~((vec3<u32>(arg_0.b, 12378u, 4294967295u) << (_wgslsmith_div_vec3_u32(vec3<u32>(arg_0.b, u_input.a, arg_0.b), vec3<u32>(u_input.a, 61938u, u_input.a)) % vec3<u32>(32u))) ^ (reverseBits(vec3<u32>(16764u, 1u, arg_0.b)) << (vec3<u32>(arg_1, arg_0.b, 81287u) % vec3<u32>(32u))))), 8u)];
                return func_4();
            }
            default: {
                global3 = ~reverseBits(_wgslsmith_add_u32(_wgslsmith_mult_u32(u_input.a, arg_0.b), _wgslsmith_sub_u32(32967u, 7885u)) ^ select(arg_1, 26375u, false));
                continue;
            }
        }
        return Struct_4(arg_0.c, Struct_3(_wgslsmith_f_op_vec4_f32(sign(arg_0.a)), arg_1, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-204f * arg_0.a.x)))));
    }
    var var_0 = select(min(abs(firstLeadingBit(vec3<i32>(global2[_wgslsmith_index_u32(arg_0.b, 8u)], -26531i, i32(-2147483648)))), ~(~vec3<i32>(68713i, 34045i, -1i))), vec3<i32>(2147483647i, min(1i >> (_wgslsmith_sub_u32(arg_0.b, 35636u) % 32u), _wgslsmith_mod_i32(global2[_wgslsmith_index_u32(u_input.a, 8u)], u_input.b) >> (4294967295u % 32u)), 0i), vec3<bool>(true, !all(vec4<bool>(global0.x, true, false, global0.x)) | true, false));
    loop {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        global1 = array<vec2<f32>, 10>();
        continue;
    }
    let var_1 = ~(~min(_wgslsmith_dot_vec3_u32(~vec3<u32>(u_input.a, arg_0.b, arg_0.b), vec3<u32>(4294967295u, 60941u, u_input.a)), reverseBits(1u)));
    return func_4();
}

fn func_2(arg_0: vec4<bool>, arg_1: i32, arg_2: f32, arg_3: i32) -> Struct_4 {
    if (any(!vec3<bool>(true, true, !all(arg_0.wyy)))) {
        if (true) {
        }
        var var_0 = 171f;
        let var_1 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(min(vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(arg_2)) + _wgslsmith_f_op_f32(arg_2 - arg_2)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(678f - arg_2) - _wgslsmith_f_op_f32(-arg_2)), arg_2, 1228f), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(select(vec4<f32>(arg_2, arg_2, -675f, -1154f), vec4<f32>(-710f, arg_2, arg_2, arg_2), false)), _wgslsmith_f_op_vec4_f32(vec4<f32>(272f, arg_2, 227f, 1000f) + vec4<f32>(arg_2, arg_2, -259f, 585f))))))));
    }
    global3 = reverseBits(u_input.a);
    let var_0 = vec3<u32>(4294967295u, 4294967295u, u_input.a);
    global2 = array<i32, 8>();
    let var_1 = arg_0;
    return func_3(Struct_3(vec4<f32>(_wgslsmith_f_op_f32(trunc(-997f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_2) - _wgslsmith_f_op_f32(arg_2 * arg_2)), arg_2, arg_2), 35640u, _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(109f * -192f)))), _wgslsmith_dot_vec4_u32(vec4<u32>(var_0.x, _wgslsmith_mod_u32(min(var_0.x, 24423u), ~1u), 38281u, 1u), ~(vec4<u32>(0u, var_0.x, var_0.x, 103191u) & vec4<u32>(0u, var_0.x, var_0.x, u_input.a))));
}

fn func_7(arg_0: vec3<i32>, arg_1: Struct_4) -> Struct_1 {
    let var_0 = _wgslsmith_f_op_vec2_f32(round(_wgslsmith_f_op_vec2_f32(floor(vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(170f - 1187f)), 368f)))));
    global1 = array<vec2<f32>, 10>();
    global3 = u_input.a;
    for (var var_1 = ~arg_0.x; true; ) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
    }
    let var_1 = func_5();
    return Struct_1(-vec2<i32>(~abs(global2[_wgslsmith_index_u32(arg_1.b.b, 8u)]), ~1i), _wgslsmith_mult_vec2_u32((select(vec2<u32>(0u, arg_1.b.b), vec2<u32>(1u, 0u), var_1.xz) << (vec2<u32>(26707u, 64744u) % vec2<u32>(32u))) & vec2<u32>(7979u, 1u), vec2<u32>(_wgslsmith_mod_u32(~13343u, ~u_input.a), ~(~1u))), _wgslsmith_mult_vec3_u32(vec3<u32>(0u, select(_wgslsmith_sub_u32(u_input.a, 20039u), func_4().b.b, false), u_input.a), ~(~vec3<u32>(26501u, 0u, 0u))), u_input.a);
}

fn func_8(arg_0: Struct_2, arg_1: Struct_1, arg_2: vec4<i32>) -> Struct_4 {
    return func_3(func_3(Struct_3(vec4<f32>(_wgslsmith_f_op_f32(-287f), -154f, _wgslsmith_f_op_f32(f32(-1f) * -834f), _wgslsmith_f_op_f32(min(143f, -242f))), 4294967295u >> (~arg_1.d % 32u), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-2119f * 232f))), select(_wgslsmith_mult_u32(63263u, _wgslsmith_mult_u32(u_input.a, 21144u)), 61741u, (-36567i <= arg_2.x) && false)).b, arg_0.a);
}

@compute
@workgroup_size(1)
fn main() {
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        loop {
            if (LOOP_COUNTERS[8u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
            break;
        }
        loop {
            if (LOOP_COUNTERS[9u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
            let var_0 = global0.x;
        }
        global1 = array<vec2<f32>, 10>();
        break;
    }
    var var_0 = vec4<bool>(false, true, !any(!(!vec4<bool>(false, global0.x, true, false))), true);
    var var_1 = Struct_3(_wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(-325f))), _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(floor(-615f)))), _wgslsmith_f_op_f32(825f * _wgslsmith_f_op_f32(max(777f, 477f))), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-524f + 847f), -926f))) + _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(-493f, -671f, 157f, -1029f))) + _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(floor(vec4<f32>(1717f, -403f, -1171f, -210f))) + vec4<f32>(254f, 2744f, -106f, 1000f)))), ~(~(1u ^ u_input.a)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(389f, 1209f))) * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -315f))) * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(-509f)))));
    var var_2 = func_8(Struct_2(func_1(true, _wgslsmith_f_op_vec3_f32(vec3<f32>(var_1.a.x, var_1.a.x, var_1.c) + _wgslsmith_f_op_vec3_f32(-var_1.a.wwz)), false), -min(vec2<i32>(-1i, 0i), _wgslsmith_div_vec2_i32(vec2<i32>(global2[_wgslsmith_index_u32(0u, 8u)], global2[_wgslsmith_index_u32(47263u, 8u)]), vec2<i32>(u_input.b, 2147483647i)))), func_7(reverseBits(abs(vec3<i32>(u_input.b, u_input.b, -23721i))), func_2(select(vec4<bool>(global0.x, var_0.x, true, false), vec4<bool>(false, false, false, false), any(vec4<bool>(true, true, global0.x, true))), abs(abs(u_input.b)), _wgslsmith_f_op_f32(f32(-1f) * -870f), _wgslsmith_sub_i32(~3308i, _wgslsmith_sub_i32(u_input.b, -1i)))), vec4<i32>(-_wgslsmith_add_i32(-1507i, 46111i), _wgslsmith_mod_i32(countOneBits(1i) ^ -global2[_wgslsmith_index_u32(var_1.b, 8u)], -40500i), _wgslsmith_dot_vec4_i32(-_wgslsmith_add_vec4_i32(vec4<i32>(2147483647i, u_input.b, global2[_wgslsmith_index_u32(u_input.a, 8u)], global2[_wgslsmith_index_u32(u_input.a, 8u)]), vec4<i32>(u_input.b, 11168i, 22420i, global2[_wgslsmith_index_u32(1u, 8u)])), vec4<i32>(~u_input.b, -u_input.b, 0i, global2[_wgslsmith_index_u32(u_input.a, 8u)] & -1445i)), -global2[_wgslsmith_index_u32(1u, 8u)]));
    let var_3 = vec3<i32>(-1i) * -_wgslsmith_clamp_vec3_i32(firstLeadingBit(-vec3<i32>(-1i, -1i, u_input.b)), _wgslsmith_add_vec3_i32(vec3<i32>(global2[_wgslsmith_index_u32(9620u, 8u)], i32(-2147483648), u_input.b), vec3<i32>(global2[_wgslsmith_index_u32(var_2.b.b, 8u)], u_input.b, u_input.b) << (vec3<u32>(59408u, 1u, 51576u) % vec3<u32>(32u))), vec3<i32>(4915i, global2[_wgslsmith_index_u32(_wgslsmith_mod_u32(var_2.b.b, var_1.b), 8u)], global2[_wgslsmith_index_u32(49140u, 8u)]));
    let var_4 = Struct_2(36596u, max(_wgslsmith_div_vec2_i32(vec2<i32>(5694i, 0i) >> ((vec2<u32>(16944u, 1u) >> (vec2<u32>(u_input.a, var_1.b) % vec2<u32>(32u))) % vec2<u32>(32u)), vec2<i32>(global2[_wgslsmith_index_u32(4294967295u, 8u)] >> (var_1.b % 32u), _wgslsmith_mult_i32(var_3.x, i32(-2147483648)))), vec2<i32>(_wgslsmith_div_i32(~global2[_wgslsmith_index_u32(var_2.b.b, 8u)], ~u_input.b), countOneBits(2147483647i))));
    var_1 = Struct_3(vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-844f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(var_1.c, var_2.b.c)) + _wgslsmith_f_op_f32(-var_1.c))), _wgslsmith_div_f32(func_8(var_4, func_7(vec3<i32>(u_input.b, var_3.x, -31088i), Struct_4(var_1.a.x, var_2.b)), vec4<i32>(-19938i, var_4.b.x, -99i, var_3.x)).a, 164f), _wgslsmith_f_op_f32(270f - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1409f)))), abs(select(abs(var_4.a), var_2.b.b, any(vec2<bool>(var_0.x, true)))), _wgslsmith_f_op_f32(-1f));
    if (all(vec3<bool>(false, false, !global0.x))) {
    }
    let x = u_input.a;
    s_output = StorageBuffer(~(~select(vec3<i32>(42752i, var_4.b.x, global2[_wgslsmith_index_u32(3159u, 8u)]), vec3<i32>(var_3.x, var_3.x, 33929i), vec3<bool>(global0.x, var_0.x, true))), _wgslsmith_f_op_f32(var_1.a.x * var_2.b.c), _wgslsmith_add_u32(71703u, var_1.b), var_3);
}

`;