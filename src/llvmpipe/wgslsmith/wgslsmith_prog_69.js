export const input = [120,222,201,14,110,62,63,133,246,125,212,55,50,178,120,82,3,1,129,175,70,183,110,224,85,212,218,138,145,189,216,107,176,106,55,140,17,231,110,69,59,11,177,112,181,1,15,228,247,134,157,72,89,22,102,171,105,97,49,13,53,109,192,168,224,17,149,245,214,216,173,73,225,7,143,11,167,214,252,145];
export const expected = [120,222,201,14,110,62,63,133,246,125,212,55,50,178,120,82,3,1,129,175,70,183,110,224,85,212,218,138,145,189,216,107,176,106,55,140,17,231,110,69,59,11,177,112,181,1,15,228,247,134,157,72,89,22,102,171,105,97,49,13,53,109,192,168,224,17,149,245,214,216,173,73,225,7,143,11,167,214,252,145];
export const shaderCode = ` 
 // {"0:0":[120,222,201,14,110,62,63,133,246,125,212,55,50,178,120,82,3,1,129,175,70,183,110,224,85,212,218,138,145,189,216,107,176,106,55,140,17,231,110,69,59,11,177,112,181,1,15,228,247,134,157,72,89,22,102,171,105,97,49,13,53,109,192,168,224,17,149,245,214,216,173,73,225,7,143,11,167,214,252,145]}
// Seed: 5586838569902200352

struct Struct_1 {
    a: bool,
    b: f32,
    c: f32,
    d: vec2<i32>,
    e: f32,
}

struct Struct_2 {
    a: vec2<u32>,
    b: vec3<bool>,
}

struct UniformBuffer {
    a: i32,
    b: vec3<i32>,
    c: vec2<i32>,
    d: vec4<u32>,
    e: u32,
}

struct StorageBuffer {
    a: i32,
    b: i32,
    c: vec3<f32>,
    d: u32,
    e: i32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: bool = false;

var<private> global1: array<Struct_1, 21>;

var<private> global2: i32 = i32(-2147483648);

var<private> global3: i32;

var<private> LOOP_COUNTERS: array<u32, 20>;

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn func_6(arg_0: Struct_1) -> vec2<f32> {
    let var_0 = Struct_2(u_input.d.xy, vec3<bool>(true, !arg_0.a & arg_0.a, any(select(vec4<bool>(arg_0.a, arg_0.a, true, false), vec4<bool>(false, arg_0.a, arg_0.a, arg_0.a), select(vec4<bool>(true, arg_0.a, arg_0.a, arg_0.a), vec4<bool>(arg_0.a, arg_0.a, true, false), vec4<bool>(arg_0.a, arg_0.a, true, false))))));
    if (var_0.b.x) {
        var var_1 = global1[_wgslsmith_index_u32(1u, 21u)];
        var var_2 = Struct_2(_wgslsmith_mod_vec2_u32(min(vec2<u32>(103700u, u_input.e), ~abs(vec2<u32>(4294967295u, var_0.a.x))), var_0.a), var_0.b);
    }
    let var_1 = 37719u;
    if (var_0.b.x) {
        for (var var_2 = 0i; var_2 != 20532i; var_2 += 1i) {
            if (LOOP_COUNTERS[0u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
            continue;
        }
        var var_2 = arg_0.e;
        var var_3 = vec2<f32>(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-arg_0.b))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_0.b) + arg_0.c) * -423f) - arg_0.b));
    }
    global3 = u_input.c.x;
    return _wgslsmith_f_op_vec2_f32(vec2<f32>(-653f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-679f * _wgslsmith_f_op_f32(sign(arg_0.c))) + _wgslsmith_f_op_f32(round(602f)))) - _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(sign(_wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_div_vec2_f32(vec2<f32>(arg_0.b, arg_0.c), vec2<f32>(arg_0.c, -252f)))))), vec2<f32>(_wgslsmith_f_op_f32(275f * _wgslsmith_f_op_f32(485f - arg_0.c)), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-arg_0.e), _wgslsmith_f_op_f32(arg_0.c - arg_0.e), true)))));
}

fn func_5(arg_0: vec3<f32>, arg_1: vec4<f32>) -> Struct_2 {
    var var_0 = _wgslsmith_f_op_vec2_f32(round(_wgslsmith_f_op_vec2_f32(func_6(global1[_wgslsmith_index_u32(7443u, 21u)]))));
    switch (-32236i) {
        case 1i: {
            if ((!all(vec3<bool>(true, false, true)) || (-1000f >= arg_1.x)) || false) {
            }
            global1 = array<Struct_1, 21>();
            switch (-24081i & _wgslsmith_add_i32(_wgslsmith_sub_i32(-1i, u_input.b.x), u_input.c.x)) {
                case 50333i: {
                    global0 = all(select(vec4<bool>(true, false, true, _wgslsmith_f_op_f32(-arg_0.x) < var_0.x), !vec4<bool>(false, true, arg_0.x != 217f, true), vec4<bool>(true, false, true, false)));
                    var var_1 = countOneBits(u_input.b);
                    var_0 = _wgslsmith_f_op_vec2_f32(arg_0.zy - _wgslsmith_f_op_vec2_f32(select(vec2<f32>(arg_0.x, _wgslsmith_f_op_f32(-1365f - var_0.x)), _wgslsmith_div_vec2_f32(vec2<f32>(var_0.x, var_0.x), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(737f, -896f) * vec2<f32>(arg_0.x, arg_1.x)) - _wgslsmith_f_op_vec2_f32(arg_0.zz - arg_1.wy))), !vec2<bool>(false, var_0.x != 1235f))));
                    let var_2 = _wgslsmith_mult_vec3_i32(abs(u_input.b), firstTrailingBit(max(-u_input.b, vec3<i32>(u_input.a, var_1.x, 21331i) & (u_input.b >> (vec3<u32>(60322u, 26197u, u_input.e) % vec3<u32>(32u))))));
                }
                case -6507i: {
                    var var_1 = _wgslsmith_f_op_vec4_f32(max(arg_1, _wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(sign(arg_1)), vec4<f32>(704f, 1132f, arg_0.x, arg_0.x)), _wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(ceil(arg_1))))) + vec4<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(arg_1.x - arg_0.x), arg_1.x), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-312f - var_0.x)), _wgslsmith_div_f32(_wgslsmith_f_op_f32(1305f * 877f), var_0.x), _wgslsmith_f_op_f32(f32(-1f) * -1184f)))));
                    return Struct_2(_wgslsmith_add_vec2_u32(~(~min(vec2<u32>(u_input.d.x, u_input.d.x), vec2<u32>(1u, 1u))), u_input.d.zz), !vec3<bool>(~u_input.c.x < u_input.a, all(vec4<bool>(true, false, true, true)) && select(true, false, true), true));
                }
                case -9597i: {
                    let var_1 = global1[_wgslsmith_index_u32(~_wgslsmith_dot_vec2_u32(vec2<u32>(_wgslsmith_dot_vec3_u32(_wgslsmith_sub_vec3_u32(u_input.d.yyw, vec3<u32>(4294967295u, u_input.e, u_input.d.x)), u_input.d.wzx), reverseBits(57238u)), _wgslsmith_mult_vec2_u32(~(u_input.d.xy << (u_input.d.xw % vec2<u32>(32u))), u_input.d.zw)), 21u)];
                    let var_2 = -301f;
                    var var_3 = var_1.a;
                    var_0 = _wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(-vec2<f32>(arg_1.x, var_1.b)), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(ceil(-2237f)), _wgslsmith_f_op_f32(sign(var_1.e)))) - _wgslsmith_f_op_vec2_f32(func_6(Struct_1(true | var_1.a, _wgslsmith_f_op_f32(abs(422f)), _wgslsmith_f_op_f32(-arg_0.x), -var_1.d, arg_0.x))))));
                }
                default: {
                    return Struct_2(_wgslsmith_div_vec2_u32(vec2<u32>(~u_input.e, _wgslsmith_dot_vec3_u32(countOneBits(vec3<u32>(u_input.e, 24547u, u_input.d.x)), _wgslsmith_clamp_vec3_u32(vec3<u32>(4294967295u, u_input.d.x, u_input.d.x), vec3<u32>(1u, 0u, 39964u), u_input.d.xxx))), vec2<u32>(_wgslsmith_sub_u32(_wgslsmith_mod_u32(4294967295u, u_input.d.x), ~u_input.e), _wgslsmith_dot_vec3_u32(vec3<u32>(u_input.e, u_input.e, 0u), u_input.d.wyz) << (_wgslsmith_dot_vec2_u32(u_input.d.wx, u_input.d.wy) % 32u))), select(select(select(select(vec3<bool>(false, false, false), vec3<bool>(true, true, true), vec3<bool>(true, false, false)), select(vec3<bool>(true, true, true), vec3<bool>(true, true, true), vec3<bool>(false, false, false)), true), vec3<bool>(true, true, true), select(vec3<bool>(true, true, true), vec3<bool>(true, false, false), vec3<bool>(true, true, true))), vec3<bool>(true, true, all(select(vec2<bool>(true, true), vec2<bool>(true, false), true))), vec3<bool>(any(vec4<bool>(true, true, false, true)) && true, ~u_input.e == ~u_input.e, true)));
                }
            }
            for (var var_1: i32; var_1 > 2147483647i; var_1 -= 1i) {
                if (LOOP_COUNTERS[1u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
                let var_2 = ~(_wgslsmith_clamp_u32(~u_input.e, 4294967295u << (firstTrailingBit(u_input.d.x) % 32u), 1u) << (_wgslsmith_dot_vec4_u32(vec4<u32>(_wgslsmith_dot_vec2_u32(u_input.d.xz, u_input.d.yw), ~1u, firstTrailingBit(1u), u_input.d.x), firstLeadingBit(u_input.d)) % 32u));
                return Struct_2(select(~u_input.d.zy, vec2<u32>(abs(31645u & u_input.e), 1u), !select(vec2<bool>(false, false), vec2<bool>(true, false), vec2<bool>(true, true))), vec3<bool>(false, false, select(any(vec3<bool>(true, true, false)), !select(false, true, false), any(vec3<bool>(false, false, false)))));
            }
        }
        case 0i: {
        }
        default: {
            let var_1 = -1i;
            var var_2 = Struct_2(~vec2<u32>(u_input.e, u_input.d.x), select(vec3<bool>(true, true, !all(vec3<bool>(false, false, false))), vec3<bool>(all(vec2<bool>(false, true)) != true, all(vec4<bool>(true, true, true, true)), all(vec4<bool>(false, false, false, true))), !select(select(vec3<bool>(false, false, false), vec3<bool>(true, true, false), false), select(vec3<bool>(false, true, true), vec3<bool>(false, false, true), vec3<bool>(true, true, false)), vec3<bool>(true, true, true))));
            let var_3 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(731f, 1511f)) + _wgslsmith_f_op_f32(-658f - var_0.x)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_1.x - -1000f) - _wgslsmith_f_op_f32(f32(-1f) * -1481f)), _wgslsmith_f_op_f32(arg_1.x + arg_0.x) >= _wgslsmith_f_op_f32(-arg_0.x))) * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_0.x * _wgslsmith_f_op_f32(f32(-1f) * -1000f)) * _wgslsmith_f_op_f32(max(512f, _wgslsmith_f_op_f32(var_0.x + 1016f))))) - _wgslsmith_f_op_f32(-_wgslsmith_div_f32(1000f, arg_0.x)));
            global0 = var_2.b.x;
            loop {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
                var var_4 = Struct_1(var_2.b.x & true, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_1.x)) * 556f) - var_3), arg_0.x, ~vec2<i32>(-_wgslsmith_sub_i32(u_input.a, u_input.a), -13939i >> (max(var_2.a.x, var_2.a.x) % 32u)), _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(-306f)))))));
            }
        }
    }
    if (713f == _wgslsmith_f_op_f32(arg_0.x - _wgslsmith_f_op_f32(select(196f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_0.x)), any(select(vec4<bool>(false, true, false, false), vec4<bool>(false, true, false, false), vec4<bool>(true, true, false, false))))))) {
        let var_1 = max(~u_input.e, ~4125u);
    }
    for (var var_1 = -1i; var_1 > 2147483647i; var_1 -= 1i) {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        var var_2 = ~(~(~(~(~u_input.d.x))));
    }
    loop {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        let var_1 = 35296u;
        var var_2 = global1[_wgslsmith_index_u32(30232u, 21u)];
        let var_3 = Struct_1(var_2.a, var_0.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -2228f) * _wgslsmith_f_op_f32(arg_0.x * var_2.c))) + _wgslsmith_f_op_f32(-var_2.b)), u_input.b.yx, arg_1.x);
    }
    return Struct_2(u_input.d.yy, select(select(vec3<bool>(u_input.e >= u_input.e, true, any(vec3<bool>(false, true, false))), vec3<bool>(any(vec3<bool>(true, false, false)), all(vec2<bool>(false, true)), true), true), select(vec3<bool>(true, all(vec3<bool>(true, false, true)), 0u != u_input.d.x), vec3<bool>(true, true, true), false), true));
}

fn func_4() -> f32 {
    global0 = true;
    loop {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        continue;
    }
    var var_0 = func_5(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(124f, 262f, 201f) + vec3<f32>(755f, 499f, -514f)))))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(1f, 1f, 1f, 1f)))));
    let var_1 = any(vec4<bool>(true, var_0.b.x, var_0.b.x, select(all(select(var_0.b, vec3<bool>(var_0.b.x, false, var_0.b.x), true)), !(u_input.d.x < u_input.e), any(!var_0.b.xz))));
    var var_2 = _wgslsmith_sub_u32(var_0.a.x, firstTrailingBit(reverseBits(_wgslsmith_add_u32(var_0.a.x << (u_input.e % 32u), var_0.a.x))));
    return 998f;
}

fn func_3(arg_0: vec3<f32>, arg_1: Struct_1, arg_2: bool, arg_3: vec4<bool>) -> i32 {
    for (var var_0 = 1i; ; var_0 += 1i) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        return u_input.b.x;
    }
    if (false) {
        var var_0 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(vec4<f32>(387f, -519f, -1671f, arg_0.x), vec4<f32>(arg_1.e, arg_0.x, arg_0.x, arg_0.x)) * vec4<f32>(165f, arg_0.x, -373f, arg_0.x)), _wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(vec4<f32>(1055f, -208f, 369f, -374f), vec4<f32>(-162f, arg_1.c, 180f, 1769f))))))));
        let var_1 = !(!(false & arg_1.a));
        var_0 = vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-205f * -2933f) * _wgslsmith_f_op_f32(257f - var_0.x)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-646f)))) - _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(var_0.x)) + _wgslsmith_f_op_f32(max(var_0.x, -569f)))))), _wgslsmith_f_op_f32(f32(-1f) * -918f), _wgslsmith_f_op_f32(ceil(-1720f)), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(arg_1.c))))));
    }
    var var_0 = abs(~72819u) > u_input.e;
    var var_1 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_div_f32(arg_1.e, -1212f))), arg_0.x, _wgslsmith_f_op_f32(-arg_0.x), _wgslsmith_f_op_f32(func_4()))));
    global2 = u_input.a;
    return countOneBits(u_input.c.x);
}

fn func_2(arg_0: i32, arg_1: Struct_1) -> vec2<u32> {
    let var_0 = _wgslsmith_mod_vec2_i32(vec2<i32>(~(max(1i, arg_0) ^ 19639i), func_3(_wgslsmith_f_op_vec3_f32(abs(vec3<f32>(arg_1.b, arg_1.c, arg_1.e))), arg_1, (arg_1.b >= 208f) == true, !(!vec4<bool>(arg_1.a, false, arg_1.a, false)))), _wgslsmith_mod_vec2_i32(_wgslsmith_mult_vec2_i32(_wgslsmith_clamp_vec2_i32(u_input.b.yz, vec2<i32>(arg_0, arg_1.d.x), u_input.c), vec2<i32>(1915i, 0i) ^ u_input.b.xz), vec2<i32>(abs(-33923i), -15902i)) >> (u_input.d.yx % vec2<u32>(32u)));
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        continue;
    }
    global1 = array<Struct_1, 21>();
    switch (-select(_wgslsmith_clamp_i32(firstTrailingBit(func_3(vec3<f32>(arg_1.b, -573f, arg_1.e), arg_1, arg_1.a, vec4<bool>(arg_1.a, arg_1.a, false, false))), u_input.a, ~(0i)), select(-2147483647i >> (u_input.e % 32u), ~(~(-56803i)), arg_1.a), all(select(!vec4<bool>(arg_1.a, false, true, true), vec4<bool>(arg_1.a, arg_1.a, false, true), arg_1.a)))) {
        case 2147483647i: {
            var var_1 = func_5(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(round(vec3<f32>(_wgslsmith_f_op_f32(-arg_1.e), _wgslsmith_f_op_f32(-arg_1.b), _wgslsmith_f_op_f32(-187f + arg_1.e))))), _wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(exp2(arg_1.b)) * 1000f), 888f, _wgslsmith_f_op_f32(1221f - 1234f), _wgslsmith_f_op_f32(func_4())) * _wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(floor(_wgslsmith_div_vec4_f32(vec4<f32>(-1717f, arg_1.b, 588f, 1384f), vec4<f32>(-570f, arg_1.e, arg_1.e, 210f))))))));
            global1 = array<Struct_1, 21>();
        }
        case i32(-2147483648): {
        }
        case -1i: {
            let var_1 = abs(_wgslsmith_mod_i32(firstTrailingBit(1i << (~u_input.e % 32u)), -15708i));
            let var_2 = u_input.d;
            global3 = arg_0;
        }
        default: {
            let var_1 = arg_1.a;
            for (var var_2 = ~_wgslsmith_dot_vec3_i32(vec3<i32>(_wgslsmith_dot_vec3_i32(reverseBits(u_input.b), select(u_input.b, vec3<i32>(arg_1.d.x, 26875i, 3170i), arg_1.a)), ~(~arg_1.d.x), -firstTrailingBit(-68074i)), vec3<i32>(_wgslsmith_div_i32(u_input.c.x, arg_1.d.x) & ~(-1i), -arg_0, arg_1.d.x)); !(!any(!select(vec4<bool>(true, true, true, false), vec4<bool>(arg_1.a, true, var_1, false), vec4<bool>(false, var_1, false, arg_1.a)))); ) {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                var_2 = firstTrailingBit(-1i) ^ (~arg_0 ^ ~_wgslsmith_div_i32(-var_0.x, arg_0));
                break;
            }
            global2 = var_0.x;
            loop {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                let var_2 = vec2<bool>(false, true);
                return reverseBits(~_wgslsmith_div_vec2_u32(_wgslsmith_sub_vec2_u32(u_input.d.xz, ~u_input.d.zz), ~(~u_input.d.xy)));
            }
        }
    }
    if ((_wgslsmith_clamp_u32(_wgslsmith_dot_vec2_u32(u_input.d.zz, u_input.d.wz), _wgslsmith_sub_u32(u_input.e, 1u), _wgslsmith_add_u32(firstLeadingBit(62562u), 0u)) >= _wgslsmith_sub_u32(~23398u, u_input.e)) & arg_1.a) {
        let var_1 = !vec3<bool>((max(arg_1.d.x, 4641i) | -12072i) > 2147483647i, true, arg_1.a);
        let var_2 = func_5(vec3<f32>(_wgslsmith_f_op_f32(-725f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -755f) * -1461f)), _wgslsmith_f_op_f32(1000f + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_1.c) - _wgslsmith_f_op_f32(trunc(arg_1.c))))), _wgslsmith_f_op_vec4_f32(step(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(-2367f, 717f, 499f, -2057f) + vec4<f32>(arg_1.e, arg_1.c, arg_1.e, 790f)) * _wgslsmith_f_op_vec4_f32(-vec4<f32>(-1521f, -366f, 675f, arg_1.e))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(exp2(vec4<f32>(265f, arg_1.e, -1650f, arg_1.e))) - _wgslsmith_f_op_vec4_f32(-vec4<f32>(-771f, arg_1.c, 172f, -766f)))), _wgslsmith_f_op_vec4_f32(-vec4<f32>(-412f, _wgslsmith_f_op_f32(max(arg_1.c, arg_1.e)), _wgslsmith_f_op_f32(select(arg_1.c, arg_1.b, false)), _wgslsmith_div_f32(arg_1.c, arg_1.e))))));
        var var_3 = _wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(2226f + _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-arg_1.c), _wgslsmith_f_op_f32(sign(1216f))))), arg_1.c) - _wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_vec2_f32(func_6(Struct_1(false, 639f, -1000f, vec2<i32>(i32(-2147483648), arg_1.d.x), arg_1.b))).x, -674f)), _wgslsmith_f_op_f32(-596f * arg_1.b))));
        global2 = min(~5793i ^ ~(abs(0i) & var_0.x), var_0.x);
        switch (~func_3(_wgslsmith_f_op_vec3_f32(exp2(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(min(vec3<f32>(arg_1.b, 1000f, var_3.x), vec3<f32>(191f, var_3.x, var_3.x)))))), arg_1, true, select(select(select(vec4<bool>(true, false, var_1.x, false), vec4<bool>(arg_1.a, true, var_2.b.x, arg_1.a), vec4<bool>(var_1.x, arg_1.a, false, false)), !vec4<bool>(arg_1.a, var_1.x, true, false), true), select(!vec4<bool>(var_1.x, arg_1.a, false, arg_1.a), vec4<bool>(false, arg_1.a, false, true), true), select(vec4<bool>(true, true, true, true), vec4<bool>(false, var_1.x, var_1.x, false), any(vec4<bool>(false, var_1.x, true, arg_1.a)))))) {
            default: {
                global2 = 57808i;
                var var_4 = arg_0 | u_input.b.x;
                global0 = any(vec4<bool>(true, false, true, ~abs(120732u) != u_input.e));
                global0 = true;
            }
        }
    }
    return ~abs(u_input.d.yy);
}

fn func_1() -> Struct_2 {
    if (false) {
        var var_0 = (vec2<u32>(0u | (u_input.d.x & u_input.d.x), firstLeadingBit(30812u << (u_input.d.x % 32u))) ^ select(_wgslsmith_div_vec2_u32(vec2<u32>(u_input.d.x, 4294967295u), func_2(6950i, Struct_1(true, -951f, 304f, vec2<i32>(-38015i, 0i), -1935f))), abs(firstLeadingBit(u_input.d.yy)), vec2<bool>(true, all(vec3<bool>(true, false, true))))) >> (vec2<u32>(u_input.e, _wgslsmith_mult_u32(~countOneBits(u_input.e), ~0u)) % vec2<u32>(32u));
        global2 = -(i32(-1i) * -_wgslsmith_div_i32(_wgslsmith_sub_i32(0i, 60579i), i32(-2147483648) | u_input.a));
        var var_1 = u_input.d;
    }
    if (false) {
        var var_0 = (!all(func_5(vec3<f32>(-977f, 1451f, -469f), vec4<f32>(846f, -466f, 243f, 1753f)).b) & false) && false;
        loop {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
            let var_1 = vec4<f32>(_wgslsmith_f_op_f32(1700f + _wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -1000f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1000f + -233f)))), _wgslsmith_f_op_f32(-455f), 436f, _wgslsmith_f_op_f32(-418f * 491f));
            global0 = true;
        }
        global1 = array<Struct_1, 21>();
        var var_1 = func_5(vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_div_f32(-256f, -1175f) * _wgslsmith_f_op_f32(-751f + -712f)) - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1463f) - _wgslsmith_f_op_f32(select(474f, -2015f, true)))), _wgslsmith_div_f32(_wgslsmith_f_op_vec2_f32(func_6(Struct_1(true, -1587f, 758f, u_input.b.yz, -431f))).x, _wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -675f), _wgslsmith_f_op_f32(f32(-1f) * -611f))), _wgslsmith_f_op_f32(trunc(533f))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(144f, -708f, -1000f, 2206f)) * _wgslsmith_f_op_vec4_f32(round(vec4<f32>(226f, 1402f, 1374f, 523f))))))));
        var var_2 = ~(~(~var_1.a.x));
    }
    for (var var_0 = 2147483647i; max(_wgslsmith_sub_u32(42703u, 1u), u_input.d.x) == _wgslsmith_mult_u32(countOneBits(~(~u_input.d.x)), _wgslsmith_mult_u32(_wgslsmith_dot_vec3_u32(vec3<u32>(u_input.e, 62172u, u_input.d.x), select(vec3<u32>(u_input.e, u_input.d.x, 1u), u_input.d.xyx, vec3<bool>(false, false, true))), ~_wgslsmith_dot_vec3_u32(u_input.d.xwy, vec3<u32>(32654u, 0u, u_input.d.x)))); global2 = u_input.a) {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        break;
    }
    global1 = array<Struct_1, 21>();
    global2 = _wgslsmith_dot_vec3_i32(reverseBits(vec3<i32>(u_input.b.x, 0i, u_input.c.x)), u_input.b);
    return func_5(_wgslsmith_f_op_vec3_f32(ceil(vec3<f32>(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-1142f), _wgslsmith_f_op_f32(f32(-1f) * -1000f))), _wgslsmith_f_op_f32(step(-1000f, _wgslsmith_div_f32(-103f, -527f))), 218f))), _wgslsmith_f_op_vec4_f32(sign(vec4<f32>(-1270f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-117f) * _wgslsmith_f_op_f32(func_4())), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-1026f + -642f), -823f), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(select(-834f, -588f, true)), _wgslsmith_f_op_vec2_f32(func_6(global1[_wgslsmith_index_u32(4294967295u, 21u)])).x))))));
}

fn func_7(arg_0: Struct_2, arg_1: Struct_1, arg_2: bool) -> Struct_2 {
    for (var var_0 = 1i; all(!vec3<bool>(false, true, !select(arg_1.a, arg_1.a, true))); ) {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        let var_1 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(arg_1.b, 1489f)) * vec2<f32>(arg_1.e, _wgslsmith_f_op_f32(-381f + -507f))), _wgslsmith_f_op_vec2_f32(select(vec2<f32>(_wgslsmith_f_op_f32(step(arg_1.e, 439f)), 2634f), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(-444f, arg_1.b))), true))));
        for (; ; ) {
            if (LOOP_COUNTERS[13u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
            var var_2 = func_5(_wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(vec3<f32>(1317f, var_1.x, arg_1.b) - vec3<f32>(var_1.x, -227f, arg_1.b)), vec3<f32>(-2154f, 1505f, 1131f), false))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(exp2(_wgslsmith_f_op_vec3_f32(-vec3<f32>(var_1.x, -375f, -1031f))))))), _wgslsmith_div_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-655f + arg_1.c) - _wgslsmith_f_op_f32(select(-1632f, var_1.x, false))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(-616f)) + var_1.x), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_1.x) - arg_1.b), _wgslsmith_f_op_f32(round(-482f))), _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(vec4<f32>(368f, 405f, arg_1.c, var_1.x), vec4<f32>(var_1.x, arg_1.b, 398f, arg_1.e))), vec4<f32>(-1000f, -148f, 1590f, 828f))));
            global3 = u_input.a;
            let var_3 = -vec4<i32>(_wgslsmith_sub_i32(_wgslsmith_clamp_i32(1i, u_input.c.x & 3630i, _wgslsmith_dot_vec3_i32(u_input.b, u_input.b)), 42808i), ~(i32(-2147483648)), -1i, i32(-2147483648));
            var var_4 = Struct_1(arg_0.b.x, _wgslsmith_f_op_f32(ceil(-934f)), _wgslsmith_f_op_vec2_f32(func_6(Struct_1(!(arg_2 & true), -1886f, _wgslsmith_f_op_f32(-var_1.x), vec2<i32>(arg_1.d.x, _wgslsmith_mult_i32(arg_1.d.x, u_input.a)), arg_1.b))).x, vec2<i32>(~(~2147483647i), abs(-50046i)) >> (select(_wgslsmith_clamp_vec2_u32(var_2.a, vec2<u32>(4294967295u, 4294967295u), arg_0.a), ~vec2<u32>(1u, var_2.a.x), arg_0.b.x) % vec2<u32>(32u)), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(var_1.x + -2691f)) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -769f))))));
        }
    }
    global0 = false;
    let var_0 = arg_0.b.x;
    var var_1 = arg_0;
    if (false) {
        let var_2 = ~(select(firstLeadingBit(select(vec2<u32>(arg_0.a.x, var_1.a.x), var_1.a, true)), _wgslsmith_mod_vec2_u32(firstTrailingBit(vec2<u32>(1u, 100544u)), ~vec2<u32>(var_1.a.x, var_1.a.x)), !(!var_1.b.zx)) << ((_wgslsmith_div_vec2_u32(vec2<u32>(u_input.d.x, 4294967295u) >> (vec2<u32>(4294967295u, var_1.a.x) % vec2<u32>(32u)), _wgslsmith_mod_vec2_u32(u_input.d.xy, arg_0.a)) >> (vec2<u32>(~1u, _wgslsmith_sub_u32(var_1.a.x, arg_0.a.x)) % vec2<u32>(32u))) % vec2<u32>(32u)));
    }
    return Struct_2(~reverseBits(u_input.d.ww), func_5(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-257f, -406f, arg_1.c)) + vec3<f32>(_wgslsmith_f_op_f32(-155f + -1053f), _wgslsmith_f_op_f32(-arg_1.b), -1206f)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_1.e, _wgslsmith_div_f32(arg_1.e, 1212f), _wgslsmith_f_op_f32(-218f), arg_1.e))).b);
}

@compute
@workgroup_size(1)
fn main() {
    global3 = _wgslsmith_mod_i32(~(i32(-2147483648)), u_input.b.x & u_input.a);
    for (var var_0 = ~(-23776i); ; var_0 += 1i) {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        var var_1 = func_7(func_1(), global1[_wgslsmith_index_u32(_wgslsmith_sub_u32(~((u_input.e >> (u_input.e % 32u)) & 0u), func_1().a.x), 21u)], true || any(vec2<bool>(all(vec4<bool>(false, true, false, false)), true)));
        let var_2 = global1[_wgslsmith_index_u32(~u_input.e, 21u)];
        loop {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
        }
        if (false) {
            continue;
        }
    }
    if (true) {
        loop {
            if (LOOP_COUNTERS[16u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
            global1 = array<Struct_1, 21>();
        }
        let var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(f32(-1f) * -407f))))) * _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1533f * -218f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(371f, 2241f))))));
        for (var var_1 = ~(i32(-2147483648)); var_1 < 16239i; var_1 -= 1i) {
            if (LOOP_COUNTERS[17u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
            break;
        }
        var var_1 = !func_1().b.x;
    }
    var var_0 = !select(select(vec4<bool>(true, false, true, false), !select(vec4<bool>(true, true, false, true), vec4<bool>(false, true, false, false), vec4<bool>(false, false, false, true)), false), vec4<bool>(true, true, true, func_7(Struct_2(vec2<u32>(u_input.d.x, u_input.d.x), vec3<bool>(false, true, true)), global1[_wgslsmith_index_u32(u_input.e, 21u)], true).b.x), true);
    if (select(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(288f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(746f + -1714f)))) == _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-237f + 2643f), _wgslsmith_f_op_f32(519f + 459f))) * _wgslsmith_f_op_f32(func_4())), true == (select(~u_input.d.x, _wgslsmith_mult_u32(509u, u_input.e), var_0.x) <= (~u_input.e ^ ~0u)), true)) {
        for (; true; ) {
            if (LOOP_COUNTERS[18u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
            global1 = array<Struct_1, 21>();
            continue;
        }
    }
    global0 = _wgslsmith_f_op_f32(step(_wgslsmith_f_op_vec2_f32(func_6(global1[_wgslsmith_index_u32(0u, 21u)])).x, _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(f32(-1f) * -1035f))), 676f)))) >= _wgslsmith_f_op_f32(-162f);
    if (var_0.x) {
        let var_1 = Struct_1(func_7(Struct_2(_wgslsmith_clamp_vec2_u32(vec2<u32>(u_input.e, 4294967295u), vec2<u32>(u_input.d.x, 5137u), vec2<u32>(1u, u_input.d.x)), vec3<bool>(true, true, true)), global1[_wgslsmith_index_u32(~_wgslsmith_mult_u32(4294967295u, u_input.d.x), 21u)], var_0.x).b.x && true, _wgslsmith_f_op_f32(abs(377f)), -2788f, u_input.c, _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-558f)) * _wgslsmith_f_op_f32(291f - _wgslsmith_f_op_f32(f32(-1f) * -418f))))));
        global3 = -(18478i >> (u_input.d.x % 32u));
        loop {
            if (LOOP_COUNTERS[19u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
            var var_2 = !(!(!((45325u | u_input.e) < u_input.d.x)));
        }
    }
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_mod_i32(_wgslsmith_div_i32(48078i, ~u_input.c.x), u_input.b.x), i32(-2147483648), _wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(150f, -1207f, -403f) - vec3<f32>(462f, -219f, -825f))), vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -757f), 1000f, _wgslsmith_f_op_f32(-233f))) * _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(abs(vec3<f32>(1f, 1f, 1f))), vec3<f32>(-560f, _wgslsmith_f_op_f32(-1068f * 1781f), _wgslsmith_f_op_f32(513f + 841f))))), ~26877u, -(_wgslsmith_sub_i32(_wgslsmith_mult_i32(30477i, 3789i), _wgslsmith_mod_i32(u_input.b.x, 1i)) | firstTrailingBit(8588i)));
}

`;