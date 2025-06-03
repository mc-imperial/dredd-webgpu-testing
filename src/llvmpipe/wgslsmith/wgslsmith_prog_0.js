export const input = [26,176,107,140,175,241,61,15,161,60,237,50,224,71,55,163,53,149,255,38,8,107,31,192,249,163,171,70,189,73,116,154,252,21,161,5,175,115,116,89,95,179,27,1,145,116,211,176,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [26,176,107,140,175,241,61,15,161,60,237,50,224,71,55,163,53,149,255,38,8,107,31,192,249,163,171,70,189,73,116,154,252,21,161,5,175,115,116,89,95,179,27,1,145,116,211,176,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[26,176,107,140,175,241,61,15,161,60,237,50,224,71,55,163,53,149,255,38,8,107,31,192,249,163,171,70,189,73,116,154,252,21,161,5,175,115,116,89,95,179,27,1,145,116,211,176]}
// Seed: 14036126144443243659

struct Struct_1 {
    a: u32,
    b: vec2<f32>,
    c: vec2<bool>,
    d: vec3<bool>,
    e: vec4<f32>,
}

struct UniformBuffer {
    a: u32,
    b: i32,
    c: vec3<i32>,
    d: vec4<i32>,
}

struct StorageBuffer {
    a: vec2<i32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<vec3<bool>, 25> = array<vec3<bool>, 25>(vec3<bool>(true, true, true), vec3<bool>(true, true, false), vec3<bool>(false, true, true), vec3<bool>(true, true, true), vec3<bool>(true, false, false), vec3<bool>(true, true, true), vec3<bool>(true, false, true), vec3<bool>(true, true, false), vec3<bool>(false, true, false), vec3<bool>(false, true, false), vec3<bool>(false, false, true), vec3<bool>(true, false, false), vec3<bool>(false, true, false), vec3<bool>(false, false, false), vec3<bool>(true, true, false), vec3<bool>(true, true, true), vec3<bool>(true, true, false), vec3<bool>(false, false, true), vec3<bool>(true, true, true), vec3<bool>(false, true, true), vec3<bool>(true, true, true), vec3<bool>(true, false, true), vec3<bool>(true, true, true), vec3<bool>(false, false, true), vec3<bool>(false, false, true));

var<private> global1: Struct_1 = Struct_1(23400u, vec2<f32>(1160f, -198f), vec2<bool>(false, true), vec3<bool>(false, false, false), vec4<f32>(413f, -2747f, -600f, -167f));

var<private> global2: vec3<f32> = vec3<f32>(-908f, -507f, -1210f);

var<private> global3: vec4<bool>;

var<private> LOOP_COUNTERS: array<u32, 20>;

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn func_5(arg_0: vec4<u32>, arg_1: Struct_1) -> Struct_1 {
    return arg_1;
}

fn func_6(arg_0: vec4<i32>, arg_1: Struct_1) -> i32 {
    var var_0 = ~abs(_wgslsmith_clamp_vec3_u32(vec3<u32>(arg_1.a, _wgslsmith_mult_u32(0u, 30773u), arg_1.a), vec3<u32>(4294967295u, global1.a, u_input.a), ~reverseBits(vec3<u32>(global1.a, arg_1.a, 9235u))));
    let var_1 = var_0.xx;
    let var_2 = !vec3<bool>(global3.x, firstLeadingBit(~arg_0.x) >= -29440i, !global1.d.x);
    var var_3 = vec3<bool>(any(vec2<bool>(any(vec4<bool>(false, true, var_2.x, true)), all(vec4<bool>(true, var_2.x, var_2.x, true)))), true, global3.x);
    if (true) {
        global2 = arg_1.e.zwz;
        if (any(vec4<bool>(var_3.x, global3.x, func_5(_wgslsmith_mult_vec4_u32(vec4<u32>(1u, u_input.a, 4294967295u, global1.a), min(vec4<u32>(10919u, 0u, 47544u, arg_1.a), vec4<u32>(4294967295u, 1u, 4294967295u, 1u))), Struct_1(~var_0.x, _wgslsmith_f_op_vec2_f32(max(vec2<f32>(arg_1.e.x, 232f), global1.b)), !arg_1.c, !vec3<bool>(var_3.x, true, global1.c.x), _wgslsmith_f_op_vec4_f32(round(vec4<f32>(arg_1.e.x, global1.b.x, global1.b.x, -936f))))).d.x, all(global1.c)))) {
            let var_4 = func_5(vec4<u32>(~_wgslsmith_dot_vec4_u32(vec4<u32>(1u, 41306u, arg_1.a, u_input.a), vec4<u32>(0u, arg_1.a, 36541u, 0u)), ~var_0.x, countOneBits(0u), ~(~0u)) ^ vec4<u32>(4294967295u, var_1.x, ~0u, ~(~59877u)), func_5(select(~vec4<u32>(4294967295u, var_1.x, u_input.a, 1u), _wgslsmith_add_vec4_u32(vec4<u32>(global1.a, 32978u, 8227u, var_0.x) | vec4<u32>(u_input.a, arg_1.a, arg_1.a, arg_1.a), _wgslsmith_clamp_vec4_u32(vec4<u32>(69595u, var_1.x, 57727u, 13949u), vec4<u32>(arg_1.a, u_input.a, 0u, var_1.x), vec4<u32>(arg_1.a, var_1.x, 1u, 52179u))), vec4<bool>(true, all(var_2.xy), global3.x & arg_1.d.x, var_2.x)), Struct_1(1u, arg_1.b, vec2<bool>(!global1.d.x, false | arg_1.d.x), arg_1.d, _wgslsmith_f_op_vec4_f32(vec4<f32>(arg_1.b.x, -112f, -1298f, arg_1.b.x) - _wgslsmith_f_op_vec4_f32(-vec4<f32>(1000f, -234f, 980f, global2.x))))));
            let var_5 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(-1112f))) - _wgslsmith_div_f32(_wgslsmith_f_op_f32(round(1788f)), _wgslsmith_f_op_f32(-var_4.b.x))) * _wgslsmith_f_op_f32(trunc(global1.e.x))) + 200f);
            let var_6 = all(vec4<bool>(arg_1.c.x, true, (false && var_3.x) && any(vec4<bool>(global1.d.x, false, global3.x, true)), var_3.x)) && false;
        }
        global0 = array<vec3<bool>, 25>();
        global0 = array<vec3<bool>, 25>();
        var var_4 = _wgslsmith_dot_vec2_u32(~(var_0.yy >> (select(~var_0.yy, var_0.yx, vec2<bool>(global3.x, true)) % vec2<u32>(32u))), vec2<u32>(~0u, var_1.x));
    }
    return max(8388i, _wgslsmith_dot_vec4_i32(u_input.d, abs(min(vec4<i32>(1i, i32(-2147483648), u_input.d.x, arg_0.x), vec4<i32>(2147483647i, arg_0.x, arg_0.x, arg_0.x) & u_input.d))));
}

fn func_7(arg_0: vec4<i32>, arg_1: vec4<u32>, arg_2: f32) -> vec2<bool> {
    global2 = _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(floor(global1.e.yyw)))), vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_2 * arg_2)), _wgslsmith_f_op_f32(-641f), global1.b.x));
    global1 = Struct_1(global1.a, global1.b, global3.wy, vec3<bool>(true, global3.x, global1.d.x), _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_div_f32(func_5(arg_1, Struct_1(u_input.a, vec2<f32>(global1.b.x, global2.x), vec2<bool>(true, global1.c.x), vec3<bool>(true, global3.x, false), vec4<f32>(global1.e.x, -917f, global1.e.x, global1.e.x))).e.x, _wgslsmith_f_op_f32(830f * -2262f)), -357f, _wgslsmith_f_op_f32(step(_wgslsmith_div_f32(global2.x, -1303f), global2.x)), arg_2)));
    var var_0 = vec4<bool>(any(!select(!vec4<bool>(global3.x, global1.c.x, global3.x, global3.x), select(vec4<bool>(false, global3.x, false, false), vec4<bool>(true, false, global3.x, global3.x), vec4<bool>(true, false, global1.c.x, global1.d.x)), arg_0.x < -48448i)), !(!(!global3.x)), global1.c.x, 4294967295u >= arg_1.x);
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        global1 = func_5(_wgslsmith_mod_vec4_u32(firstTrailingBit(~vec4<u32>(0u, u_input.a, u_input.a, u_input.a) | ~arg_1), arg_1), Struct_1(~arg_1.x, global1.e.zz, !(!vec2<bool>(true, var_0.x)), vec3<bool>(!var_0.x, global1.d.x, any(!vec4<bool>(true, global3.x, var_0.x, true))), func_5(vec4<u32>(0u, ~15383u, 1u, _wgslsmith_sub_u32(global1.a, 1u)), Struct_1(20383u, _wgslsmith_f_op_vec2_f32(vec2<f32>(arg_2, global1.e.x) + global2.zx), vec2<bool>(false, global1.d.x), vec3<bool>(false, global1.c.x, true), global1.e)).e));
        var var_1 = ~_wgslsmith_mod_u32(firstTrailingBit(u_input.a), 1u);
        loop {
            if (LOOP_COUNTERS[1u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
            let var_2 = _wgslsmith_add_vec3_u32(arg_1.zxz, vec3<u32>(75761u, _wgslsmith_add_u32(global1.a, 67129u), u_input.a ^ 16502u));
        }
        let var_2 = Struct_1(_wgslsmith_clamp_u32(0u, ~(~1u), arg_1.x), global1.b, select(global3.zz, global1.c, _wgslsmith_f_op_f32(round(-1047f)) <= _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(global2.x - global1.b.x)))), func_5(select(vec4<u32>(max(global1.a, u_input.a), ~1u, ~78355u, u_input.a), ~(~arg_1), !select(vec4<bool>(true, global1.c.x, var_0.x, global3.x), vec4<bool>(var_0.x, false, global3.x, global3.x), false)), func_5(vec4<u32>(countOneBits(4294967295u), _wgslsmith_sub_u32(u_input.a, global1.a), ~u_input.a, arg_1.x), Struct_1(u_input.a, vec2<f32>(1000f, global2.x), select(vec2<bool>(true, true), vec2<bool>(true, false), global1.c), !global1.d, _wgslsmith_f_op_vec4_f32(step(global1.e, vec4<f32>(-924f, 163f, global1.b.x, 1067f)))))).d, _wgslsmith_f_op_vec4_f32(-vec4<f32>(-1232f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-191f + arg_2)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_2)), _wgslsmith_div_f32(arg_2, _wgslsmith_f_op_f32(-165f * -962f)))));
        switch (firstTrailingBit(_wgslsmith_sub_i32(1i, countOneBits(arg_0.x)))) {
            case 38458i: {
                var var_3 = vec4<u32>(global1.a, func_5(countOneBits(vec4<u32>(~4294967295u, _wgslsmith_dot_vec2_u32(arg_1.zy, arg_1.xy), ~37413u, 0u)), var_2).a, _wgslsmith_clamp_u32(var_2.a, _wgslsmith_mod_u32(u_input.a, ~(~1u)), global1.a), u_input.a);
            }
            case -27814i: {
                var var_3 = var_2;
                let var_4 = vec3<i32>(-u_input.b, _wgslsmith_sub_i32(i32(-1i) * -(~u_input.c.x), ~(-1i ^ -u_input.c.x)), ~_wgslsmith_sub_i32(_wgslsmith_add_i32(arg_0.x, firstTrailingBit(2147483647i)), u_input.d.x));
                var var_5 = global3.xyz;
                let var_6 = var_2.c.x;
            }
            default: {
            }
        }
    }
    let var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_2 - global2.x)) * global2.x) * _wgslsmith_div_f32(arg_2, arg_2)));
    return vec2<bool>(global1.c.x, !var_0.x);
}

fn func_4() -> u32 {
    global0 = array<vec3<bool>, 25>();
    let var_0 = func_7(firstTrailingBit(vec4<i32>(2147483647i, 4315i, func_6(_wgslsmith_mod_vec4_i32(u_input.d, u_input.d), func_5(vec4<u32>(global1.a, u_input.a, global1.a, global1.a), Struct_1(1u, global2.xx, global3.zw, vec3<bool>(global1.d.x, false, global1.c.x), global1.e))), u_input.c.x)), _wgslsmith_clamp_vec4_u32(select(~vec4<u32>(19322u, u_input.a, 44264u, u_input.a), ~vec4<u32>(0u, u_input.a, global1.a, 4294967295u), select(vec4<bool>(global3.x, global1.d.x, true, global1.d.x), vec4<bool>(false, global1.d.x, global3.x, false), vec4<bool>(false, true, global1.d.x, global3.x))) << (~(vec4<u32>(0u, 1u, 0u, u_input.a) & vec4<u32>(39172u, global1.a, global1.a, 1u)) % vec4<u32>(32u)), _wgslsmith_mod_vec4_u32(_wgslsmith_mod_vec4_u32(vec4<u32>(0u, global1.a, u_input.a, u_input.a), ~vec4<u32>(global1.a, 4294967295u, global1.a, global1.a)), countOneBits(~vec4<u32>(4294967295u, 1u, 1u, 0u))), vec4<u32>(848u, ~(~60671u), _wgslsmith_add_u32(47937u, 15076u), _wgslsmith_div_u32(u_input.a, 6843u) >> (_wgslsmith_mod_u32(1u, 41533u) % 32u))), _wgslsmith_f_op_f32(468f * _wgslsmith_div_f32(_wgslsmith_f_op_f32(step(global2.x, _wgslsmith_div_f32(161f, -357f))), _wgslsmith_f_op_f32(-global1.e.x))));
    for (var var_1 = 0i; var_1 != -36844i; global2 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(step(global1.e.xzy, _wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(-global2.x), _wgslsmith_f_op_f32(188f - global2.x), _wgslsmith_f_op_f32(ceil(-1141f))) * func_5(vec4<u32>(33058u, global1.a, 4294967295u, u_input.a), Struct_1(global1.a, vec2<f32>(global1.e.x, global2.x), vec2<bool>(false, true), vec3<bool>(global1.c.x, global3.x, global3.x), global1.e)).e.ywy))))) {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        let var_2 = Struct_1(~u_input.a, _wgslsmith_f_op_vec2_f32(-global2.yz), func_7(max(u_input.d, firstTrailingBit(~u_input.d)), vec4<u32>(global1.a, 1u, 24740u, u_input.a), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -189f))), !global1.d, _wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(select(global1.e, vec4<f32>(global2.x, global2.x, global1.e.x, 708f), global3.x))) + _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(exp2(vec4<f32>(global1.b.x, global2.x, 973f, 401f))))))));
        global3 = vec4<bool>(global1.c.x, true, func_5(~countOneBits(~vec4<u32>(global1.a, u_input.a, var_2.a, 49153u)), func_5(firstLeadingBit(vec4<u32>(1u, 2334u, var_2.a, 4294967295u)), func_5(firstLeadingBit(vec4<u32>(u_input.a, 1u, 19531u, var_2.a)), var_2))).c.x, var_0.x);
    }
    var var_1 = global2.x;
    if (all(select(vec3<bool>(_wgslsmith_sub_i32(u_input.c.x, u_input.c.x) <= _wgslsmith_mod_i32(u_input.d.x, u_input.d.x), !global3.x, false), select(vec3<bool>(!global3.x, select(global1.d.x, true, var_0.x), true), global1.d, select(select(global1.d, global1.d, true), !vec3<bool>(false, false, global3.x), all(global0[_wgslsmith_index_u32(global1.a, 25u)]))), global1.d))) {
        global3 = vec4<bool>(global1.c.x, func_7(vec4<i32>(-u_input.b, i32(-2147483648), -9805i, _wgslsmith_div_i32(min(u_input.b, i32(-2147483648)), u_input.b)), firstTrailingBit(_wgslsmith_add_vec4_u32(~vec4<u32>(61550u, 45915u, 66521u, 4294967295u), _wgslsmith_clamp_vec4_u32(vec4<u32>(95410u, 0u, u_input.a, 30897u), vec4<u32>(3914u, 1u, 1u, 9339u), vec4<u32>(63625u, global1.a, 4347u, global1.a)))), 1000f).x, global3.x, !global1.d.x);
        switch (u_input.b & ~u_input.d.x) {
            default: {
                var_1 = _wgslsmith_f_op_f32(-global1.e.x);
            }
        }
    }
    return 9007u;
}

fn func_3(arg_0: vec2<i32>) -> bool {
    var var_0 = _wgslsmith_div_u32(62939u, func_4());
    for (var var_1 = _wgslsmith_dot_vec4_i32(u_input.d, _wgslsmith_sub_vec4_i32(u_input.d, u_input.d)); var_1 > 2147483647i; var_1 -= 1i) {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        for (var var_2 = -3669i; ; var_1 = i32(-2147483648)) {
            if (LOOP_COUNTERS[4u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
            let var_3 = Struct_1(_wgslsmith_dot_vec2_u32(~(~(vec2<u32>(u_input.a, u_input.a) << (vec2<u32>(1u, 0u) % vec2<u32>(32u)))), min(~(vec2<u32>(4294967295u, 102429u) & vec2<u32>(u_input.a, global1.a)), _wgslsmith_mult_vec2_u32(vec2<u32>(1921u, 48862u), vec2<u32>(global1.a, 1u) | vec2<u32>(global1.a, 6126u)))), global2.xz, vec2<bool>(global1.d.x, global3.x), !vec3<bool>(global1.c.x, global1.e.x >= -1638f, true), _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -225f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(global1.b.x))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(-1079f)) * global2.x), _wgslsmith_f_op_f32(-global1.b.x))));
            let var_4 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(682f - var_3.e.x));
            let var_5 = func_5(vec4<u32>(var_3.a, var_3.a, var_3.a, ~var_3.a), func_5(min(abs(vec4<u32>(var_3.a, 69670u, 1u, var_3.a)), ~vec4<u32>(4672u, 30143u, 4294967295u, u_input.a)) | vec4<u32>(u_input.a, var_3.a, u_input.a, _wgslsmith_clamp_u32(var_3.a, 83173u, var_3.a)), var_3));
            var_2 = min(u_input.b & ~(-10113i), ~u_input.b);
            var var_6 = u_input.d;
        }
        let var_2 = Struct_1(~_wgslsmith_dot_vec4_u32(_wgslsmith_div_vec4_u32(firstTrailingBit(vec4<u32>(1u, 5740u, u_input.a, 59953u)), vec4<u32>(50161u, global1.a, 15091u, global1.a)), select(vec4<u32>(global1.a, 1149u, u_input.a, u_input.a), vec4<u32>(29962u, 35694u, 39074u, 0u), vec4<bool>(global3.x, true, true, global1.c.x)) & _wgslsmith_mult_vec4_u32(vec4<u32>(0u, global1.a, u_input.a, 1u), vec4<u32>(u_input.a, u_input.a, 1u, 0u))), _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(global1.e.x, global2.x)), _wgslsmith_f_op_vec2_f32(sign(_wgslsmith_f_op_vec2_f32(vec2<f32>(1410f, global2.x) * vec2<f32>(global2.x, global1.e.x))))), vec2<bool>(~reverseBits(0u) >= (firstLeadingBit(u_input.a) ^ global1.a), !all(vec4<bool>(false, global3.x, false, global3.x))), global0[_wgslsmith_index_u32(global1.a, 25u)], global1.e);
        for (var var_3 = -1i; var_3 <= -59043i; var_3 += 1i) {
            if (LOOP_COUNTERS[5u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
            let var_4 = var_2;
        }
        break;
    }
    switch (i32(-2147483648)) {
        case -8462i: {
        }
        default: {
            for (var var_1 = 26797i; var_1 < -1i; var_1 -= 1i) {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                let var_2 = global1.e.xx;
                var var_3 = Struct_1(1u, _wgslsmith_f_op_vec2_f32(global1.e.zx - _wgslsmith_f_op_vec2_f32(vec2<f32>(888f, _wgslsmith_f_op_f32(-402f)) + vec2<f32>(_wgslsmith_f_op_f32(exp2(global2.x)), global2.x))), vec2<bool>(!(!(arg_0.x != i32(-2147483648))), (all(vec3<bool>(global3.x, global3.x, true)) && !global3.x) & all(func_5(vec4<u32>(global1.a, global1.a, 16549u, 67700u), Struct_1(0u, vec2<f32>(var_2.x, 380f), global3.zz, global0[_wgslsmith_index_u32(0u, 25u)], global1.e)).d.xy)), global1.d, _wgslsmith_f_op_vec4_f32(-global1.e));
            }
            var var_1 = Struct_1(1u, _wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(global2.xy - vec2<f32>(136f, -959f)) - _wgslsmith_f_op_vec2_f32(-vec2<f32>(global2.x, global2.x))))))), global3.yx, vec3<bool>(true, (global1.a | 10308u) >= _wgslsmith_clamp_u32(12803u, ~83377u, u_input.a), func_5(firstLeadingBit(vec4<u32>(1u, 4294967295u, global1.a, global1.a)), func_5(vec4<u32>(u_input.a, global1.a, u_input.a, global1.a), Struct_1(0u, vec2<f32>(-866f, 732f), vec2<bool>(global1.d.x, global3.x), global3.ywx, vec4<f32>(1000f, global1.b.x, global1.e.x, global2.x)))).b.x <= _wgslsmith_f_op_f32(sign(1f))), global1.e);
            let var_2 = Struct_1(17240u, _wgslsmith_f_op_vec2_f32(exp2(vec2<f32>(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(var_1.b.x + global2.x), var_1.e.x)), _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(ceil(461f))))))), select(global1.d.xx, vec2<bool>(true, any(vec4<bool>(false, false, true, var_1.d.x))), vec2<bool>(true, false)), select(select(vec3<bool>(!global1.d.x, var_1.d.x || false, all(global1.d)), global1.d, select(!vec3<bool>(global1.c.x, true, false), vec3<bool>(global3.x, true, false), global2.x == var_1.b.x)), !(!select(vec3<bool>(false, global3.x, false), vec3<bool>(true, false, true), vec3<bool>(var_1.c.x, global3.x, var_1.d.x))), var_1.d), _wgslsmith_div_vec4_f32(global1.e, var_1.e));
        }
    }
    global2 = global1.e.xwz;
    let var_1 = vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(-1613f, global2.x, select(global3.x, false, false)))) - -729f), _wgslsmith_f_op_f32(-global1.e.x), _wgslsmith_f_op_f32(round(_wgslsmith_div_f32(-1206f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(-484f, 529f)))))));
    return false;
}

fn func_8(arg_0: Struct_1, arg_1: Struct_1, arg_2: Struct_1, arg_3: u32) -> Struct_1 {
    if (false) {
        global3 = vec4<bool>(!arg_0.d.x, !(~arg_2.a != (arg_3 << (arg_3 % 32u))) && true, false == all(vec4<bool>(true, !global1.c.x, any(arg_1.d), arg_1.c.x)), (global1.c.x && true) && select(true, true, func_7(u_input.d, vec4<u32>(arg_3, 1u, 101878u, arg_3), arg_2.b.x).x != any(arg_2.d)));
        if (false) {
            var var_0 = 669f;
            var var_1 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(arg_2.e.zxy - _wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(arg_2.e.yww - vec3<f32>(arg_1.b.x, 1000f, arg_1.e.x)))))));
            var var_2 = _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(arg_2.e.x + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(1f)))), _wgslsmith_f_op_f32(arg_2.b.x * _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(arg_1.e.x, 1000f)), -1092f))), global3.x));
            var var_3 = ~vec4<u32>(~4294967295u, ~28732u, _wgslsmith_dot_vec2_u32(select(~vec2<u32>(arg_0.a, arg_0.a), vec2<u32>(global1.a, 34397u) >> (vec2<u32>(7768u, 0u) % vec2<u32>(32u)), arg_2.c.x), vec2<u32>(arg_3, arg_2.a)), 1u);
        }
    }
    var var_0 = func_5(~(~vec4<u32>(50365u, ~u_input.a, _wgslsmith_div_u32(4294967295u, 8914u), arg_2.a)), arg_2);
    let var_1 = arg_1.a;
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        let var_2 = arg_2;
        loop {
            if (LOOP_COUNTERS[8u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
            break;
        }
    }
    switch (_wgslsmith_sub_i32(i32(-1i) * -1i, u_input.b)) {
        case 44056i: {
            loop {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                global1 = func_5(vec4<u32>(_wgslsmith_div_u32(1u, abs(var_1)), 0u << ((arg_1.a ^ 1u) % 32u), _wgslsmith_div_u32(0u | var_1, 1u), firstTrailingBit(arg_0.a)) >> (vec4<u32>(_wgslsmith_clamp_u32(~arg_1.a, 4294967295u, ~arg_3), func_4(), ~arg_1.a, 7345u) % vec4<u32>(32u)), Struct_1(global1.a, _wgslsmith_f_op_vec2_f32(ceil(global2.zy)), var_0.c, vec3<bool>(false != !arg_2.c.x, !all(vec3<bool>(false, false, false)), !arg_2.d.x), vec4<f32>(_wgslsmith_f_op_f32(-var_0.b.x), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(global2.x, var_0.b.x)), _wgslsmith_div_f32(_wgslsmith_f_op_f32(trunc(arg_1.b.x)), arg_2.e.x), arg_0.b.x)));
                let var_2 = 64034u;
                var var_3 = !(1u == arg_2.a);
            }
            for (var var_2 = 16193i; ; global2 = vec3<f32>(global2.x, -591f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(f32(-1f) * -789f))) - _wgslsmith_f_op_f32(-_wgslsmith_div_f32(-231f, _wgslsmith_f_op_f32(global2.x + arg_1.b.x)))))) {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
            }
            var_0 = func_5(_wgslsmith_mult_vec4_u32(firstTrailingBit(firstTrailingBit(vec4<u32>(arg_1.a, 18098u, 0u, arg_3))), vec4<u32>(9636u, max(1u, min(45235u, arg_2.a)), 1u << (~arg_3 % 32u), _wgslsmith_dot_vec4_u32(vec4<u32>(20478u, u_input.a, global1.a, 0u) ^ vec4<u32>(arg_1.a, 33159u, 25962u, var_1), _wgslsmith_clamp_vec4_u32(vec4<u32>(global1.a, var_0.a, global1.a, 928u), vec4<u32>(4294967295u, arg_3, arg_1.a, global1.a), vec4<u32>(4294967295u, 4294967295u, 1u, 35836u))))), arg_2);
            let var_2 = Struct_1(4294967295u, _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-var_0.b) + _wgslsmith_f_op_vec2_f32(exp2(vec2<f32>(967f, arg_1.b.x))))) * _wgslsmith_f_op_vec2_f32(step(arg_1.b, _wgslsmith_f_op_vec2_f32(arg_2.b * vec2<f32>(529f, arg_0.b.x))))), arg_1.c, var_0.d, _wgslsmith_f_op_vec4_f32(arg_0.e + _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(arg_2.e + vec4<f32>(-733f, arg_1.e.x, 1000f, -277f)))));
            switch (u_input.b) {
                case -41383i: {
                }
                case -58263i: {
                    var var_3 = 44779u;
                    let var_4 = Struct_1(~_wgslsmith_clamp_u32(~countOneBits(0u), _wgslsmith_sub_u32(arg_1.a, u_input.a), 23061u), _wgslsmith_f_op_vec2_f32(var_2.e.yx + _wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(1126f * 635f), _wgslsmith_f_op_f32(arg_2.b.x + global2.x)))), !vec2<bool>(!global1.d.x, false), vec3<bool>(var_2.c.x, all(!arg_0.c), all(vec2<bool>(true, u_input.d.x >= u_input.c.x))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(f32(-1f) * -415f), _wgslsmith_f_op_f32(abs(-1716f)), _wgslsmith_f_op_f32(floor(arg_2.e.x)), _wgslsmith_f_op_f32(-1000f)))));
                    let var_5 = Struct_1(max(var_1, 55046u) | ~func_5(_wgslsmith_div_vec4_u32(vec4<u32>(11751u, 0u, arg_0.a, 10037u), vec4<u32>(var_0.a, 19876u, 0u, 68062u)), var_2).a, vec2<f32>(-492f, _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-global1.e.x)))))), select(var_0.c, arg_0.d.zx, true), arg_2.d, var_2.e);
                    let var_6 = ~vec3<i32>(u_input.d.x, firstTrailingBit(u_input.b), -_wgslsmith_div_i32(u_input.d.x | 8029i, u_input.d.x));
                    global1 = Struct_1(firstLeadingBit(var_4.a), _wgslsmith_f_op_vec2_f32(sign(vec2<f32>(arg_1.e.x, var_4.e.x))), vec2<bool>(arg_2.d.x, any(vec3<bool>(false, arg_1.d.x, true))), func_5(~select(~vec4<u32>(47373u, 40337u, var_2.a, var_2.a), vec4<u32>(1u, 1u, var_1, arg_0.a), all(vec3<bool>(global3.x, var_2.d.x, var_4.c.x))), Struct_1(_wgslsmith_mult_u32(1u, _wgslsmith_sub_u32(35736u, var_5.a)), _wgslsmith_f_op_vec2_f32(-vec2<f32>(global1.b.x, -2363f)), !vec2<bool>(arg_1.c.x, arg_2.c.x), !func_5(vec4<u32>(arg_0.a, 20821u, 109432u, var_2.a), arg_2).d, _wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(var_2.b.x, -1729f, -547f, var_5.e.x))))).d, vec4<f32>(var_5.e.x, var_5.b.x, 745f, _wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(-314f)) * _wgslsmith_f_op_f32(-var_0.e.x)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(302f - -264f) + _wgslsmith_f_op_f32(-1524f)))));
                }
                case 1i: {
                    let var_3 = _wgslsmith_f_op_f32(sign(var_0.b.x));
                    let var_4 = var_2;
                    let var_5 = Struct_1(arg_2.a, _wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(-359f, -1064f) * arg_1.b)))), arg_1.d.xx, select(select(!(!arg_1.d), func_5(~vec4<u32>(global1.a, 82099u, 9786u, var_1), arg_1).d, false & (1u >= var_1)), var_4.d, !arg_1.d), vec4<f32>(-1000f, arg_1.b.x, -537f, _wgslsmith_div_f32(304f, 161f)));
                    global3 = select(!(!select(vec4<bool>(arg_0.d.x, var_2.d.x, true, var_5.c.x), vec4<bool>(var_5.c.x, var_4.c.x, true, true), all(var_4.d))), vec4<bool>(var_4.d.x, global1.d.x, u_input.b > select(u_input.d.x, ~(-10198i), !global3.x), arg_0.d.x), false);
                }
                case 3743i: {
                    var var_3 = Struct_1(~max(firstLeadingBit(~var_2.a), _wgslsmith_sub_u32(1u, _wgslsmith_dot_vec3_u32(vec3<u32>(663u, 4294967295u, var_0.a), vec3<u32>(1u, 4294967295u, 0u)))), _wgslsmith_f_op_vec2_f32(max(vec2<f32>(global1.e.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(1853f)) * _wgslsmith_f_op_f32(-282f * global1.e.x))), arg_1.b)), arg_1.c, vec3<bool>(arg_3 <= 1u, !(!(!arg_1.c.x)), global3.x | true), vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-func_5(vec4<u32>(arg_3, 4294967295u, 4294967295u, var_1), Struct_1(1u, vec2<f32>(454f, arg_1.b.x), vec2<bool>(false, false), global1.d, arg_2.e)).b.x) * _wgslsmith_f_op_f32(min(var_2.b.x, func_5(vec4<u32>(global1.a, global1.a, arg_0.a, 63705u), Struct_1(global1.a, global1.e.zx, vec2<bool>(true, true), vec3<bool>(true, arg_1.d.x, arg_2.c.x), vec4<f32>(global2.x, arg_0.e.x, var_2.e.x, -597f))).e.x))), _wgslsmith_f_op_f32(-240f), _wgslsmith_f_op_f32(-392f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-func_5(vec4<u32>(21747u, 73620u, 20397u, 7600u), arg_2).e.x) - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(963f, 4277f)) + -477f))));
                }
                default: {
                }
            }
        }
        default: {
            global0 = array<vec3<bool>, 25>();
            let var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(select(arg_2.e.x, _wgslsmith_f_op_f32(max(296f, global1.e.x)), var_0.d.x)), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(arg_2.b.x + -887f)))) - _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-global2.x)))));
            for (var var_3: i32; true; ) {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                global2 = vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(arg_2.b.x, arg_2.b.x))) + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_0.b.x) * _wgslsmith_f_op_f32(max(-405f, -2163f)))) + _wgslsmith_f_op_f32(-global2.x)), _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(f32(-1f) * -692f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(-1152f, var_0.b.x))))))), _wgslsmith_f_op_f32(min(-1309f, _wgslsmith_f_op_f32(max(438f, _wgslsmith_div_f32(_wgslsmith_f_op_f32(floor(global2.x)), arg_0.b.x))))));
                break;
            }
            for (var var_3 = i32(-2147483648); ; var_3 = u_input.c.x) {
                if (LOOP_COUNTERS[12u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
                var_3 = -7168i << (0u % 32u);
                break;
            }
        }
    }
    return arg_1;
}

fn func_2(arg_0: vec3<bool>, arg_1: Struct_1, arg_2: bool, arg_3: Struct_1) -> u32 {
    global1 = arg_1;
    switch (~(-1i)) {
        case 29719i: {
        }
        case 9570i: {
            global3 = !select(vec4<bool>(_wgslsmith_div_f32(global2.x, arg_3.e.x) > _wgslsmith_f_op_f32(ceil(arg_1.b.x)), _wgslsmith_f_op_f32(1110f - 109f) != _wgslsmith_f_op_f32(floor(-1172f)), arg_1.c.x, false), !vec4<bool>(global3.x & false, !global1.c.x, !arg_2, all(vec4<bool>(global1.c.x, false, false, global3.x))), !(!(!vec4<bool>(arg_3.d.x, global3.x, arg_0.x, false))));
            loop {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                continue;
            }
        }
        default: {
            if (u_input.b == abs(~u_input.d.x)) {
            }
            global2 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(abs(global1.e.ywx)));
        }
    }
    var var_0 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(f32(-1f) * -1260f))) - arg_3.b.x);
    for (var var_1 = 2147483647i; var_1 > -4146i; var_1 -= 1i) {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        let var_2 = -u_input.b;
        var var_3 = global1.d.xz;
        loop {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            let var_4 = func_8(Struct_1(1u >> (~arg_1.a % 32u), arg_1.e.xw, arg_3.c, vec3<bool>(true, false, !func_3(vec2<i32>(u_input.d.x, var_2))), _wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(floor(arg_3.e))))))), Struct_1(~0u, vec2<f32>(func_5(~vec4<u32>(8982u, 1u, 4294967295u, arg_3.a), Struct_1(u_input.a, arg_3.b, vec2<bool>(false, global3.x), arg_3.d, vec4<f32>(global2.x, -381f, 1047f, arg_1.e.x))).e.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-339f))), select(select(select(vec2<bool>(var_3.x, arg_3.c.x), arg_1.c, vec2<bool>(false, false)), select(arg_0.yz, vec2<bool>(false, true), false), !vec2<bool>(true, global3.x)), vec2<bool>(false, true), var_3.x), global0[_wgslsmith_index_u32(~1u, 25u)], _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-arg_1.e))), arg_3, max(global1.a, _wgslsmith_dot_vec3_u32(~(~vec3<u32>(u_input.a, 69317u, 14342u)), ~vec3<u32>(0u, u_input.a, arg_3.a))));
            continue;
        }
    }
    loop {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        var var_1 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(abs(_wgslsmith_div_f32(arg_1.b.x, global1.b.x))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(918f, global1.e.x, arg_3.c.x))), global1.d.x)) * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(120f, 1128f, true))));
        global1 = arg_3;
        let var_2 = vec2<u32>(~(global1.a >> (max(~arg_3.a, 84783u) % 32u)), arg_1.a);
        global2 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-func_5(~select(vec4<u32>(0u, arg_3.a, arg_3.a, var_2.x), vec4<u32>(arg_1.a, arg_3.a, 42354u, arg_3.a), vec4<bool>(global1.d.x, arg_0.x, arg_0.x, false)), Struct_1(_wgslsmith_clamp_u32(u_input.a, global1.a, 0u), _wgslsmith_f_op_vec2_f32(-global1.e.yz), !arg_0.yz, !vec3<bool>(global3.x, arg_2, arg_1.c.x), _wgslsmith_f_op_vec4_f32(-vec4<f32>(303f, arg_3.e.x, global2.x, -104f)))).e.yyy) * vec3<f32>(_wgslsmith_f_op_f32(min(arg_1.e.x, _wgslsmith_f_op_f32(-global2.x))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-531f * arg_1.b.x)) + func_8(func_8(arg_1, arg_1, arg_3, u_input.a), Struct_1(0u, arg_1.b, arg_0.xx, vec3<bool>(global3.x, true, false), arg_1.e), func_5(vec4<u32>(u_input.a, global1.a, arg_3.a, 344u), Struct_1(4294967295u, vec2<f32>(424f, arg_1.e.x), arg_3.d.yy, global0[_wgslsmith_index_u32(var_2.x, 25u)], vec4<f32>(global1.b.x, global1.b.x, arg_1.e.x, global1.e.x))), u_input.a).b.x), 900f));
        let var_3 = vec3<u32>(_wgslsmith_mult_u32(arg_3.a, ~(32501u >> (0u % 32u))), _wgslsmith_add_u32(4294967295u, global1.a), ~(~arg_1.a)) << (vec3<u32>(abs(_wgslsmith_add_u32(arg_3.a, 26017u)), ~(~(~arg_1.a)), u_input.a) % vec3<u32>(32u));
    }
    return ~_wgslsmith_mult_u32(arg_1.a, ~(~global1.a));
}

fn func_1() -> vec4<f32> {
    loop {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
        var var_0 = Struct_1(func_2(select(select(!global3.zxz, vec3<bool>(global1.c.x, global1.d.x, true), global1.d), global1.d, select(!global3.ywx, global3.xyw, global3.wyy)), Struct_1(u_input.a, _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-global2.yz)), select(select(global3.zy, vec2<bool>(global3.x, false), vec2<bool>(global3.x, true)), !vec2<bool>(false, global3.x), !vec2<bool>(true, global1.c.x)), vec3<bool>(global3.x && true, false, true), _wgslsmith_f_op_vec4_f32(min(vec4<f32>(global1.b.x, -159f, 252f, global2.x), _wgslsmith_f_op_vec4_f32(vec4<f32>(-223f, global2.x, 558f, 109f) * global1.e)))), true, Struct_1(~1u, vec2<f32>(_wgslsmith_f_op_f32(-1540f + global2.x), _wgslsmith_f_op_f32(-global2.x)), global3.xy, !(!global3.wyx), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(global2.x, 476f, global2.x, -977f) * global1.e)))), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-global1.b)), global1.c, !(!global0[_wgslsmith_index_u32(u_input.a, 25u)]), vec4<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(1290f))), _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(abs(global2.x))))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(485f - -571f) * global2.x), 641f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(_wgslsmith_div_f32(global2.x, global2.x))) + _wgslsmith_f_op_f32(round(949f)))));
        let var_1 = func_8(Struct_1(~4294967295u, var_0.b, global3.wy, vec3<bool>(false, (0i <= u_input.d.x) | !global1.c.x, true), vec4<f32>(global1.b.x, global2.x, global1.b.x, global2.x)), Struct_1(func_4(), _wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(round(_wgslsmith_f_op_vec2_f32(step(vec2<f32>(-962f, -1444f), global2.zy)))), _wgslsmith_f_op_vec2_f32(-vec2<f32>(-526f, -430f)))), global3.zz, global0[_wgslsmith_index_u32(u_input.a, 25u)], _wgslsmith_f_op_vec4_f32(-var_0.e)), Struct_1(~(~_wgslsmith_dot_vec3_u32(vec3<u32>(u_input.a, 22546u, 4294967295u), vec3<u32>(37639u, u_input.a, 4294967295u))), _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(var_0.b.x, global2.x) - func_5(vec4<u32>(u_input.a, 15998u, 0u, var_0.a), Struct_1(17209u, global2.zx, var_0.c, vec3<bool>(var_0.c.x, var_0.c.x, false), var_0.e)).b), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(min(vec2<f32>(global2.x, 1105f), vec2<f32>(global2.x, global2.x))) - global1.e.xz)), !global1.c, !(!vec3<bool>(var_0.c.x, global1.c.x, global1.c.x)), _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(-vec4<f32>(global2.x, global2.x, var_0.e.x, global1.b.x)))), _wgslsmith_f_op_vec4_f32(-vec4<f32>(var_0.e.x, var_0.e.x, -198f, var_0.b.x)), select(!vec4<bool>(false, false, true, global3.x), select(vec4<bool>(true, global3.x, global3.x, global1.c.x), vec4<bool>(true, var_0.c.x, true, var_0.c.x), vec4<bool>(global1.d.x, var_0.c.x, false, true)), true)))), u_input.a);
    }
    let var_0 = ~_wgslsmith_sub_vec2_u32(~firstLeadingBit(vec2<u32>(3682u, global1.a) | vec2<u32>(u_input.a, 1u)), _wgslsmith_sub_vec2_u32(vec2<u32>(global1.a, global1.a) << (vec2<u32>(23742u, u_input.a) % vec2<u32>(32u)), ~vec2<u32>(0u, 1u)) >> (_wgslsmith_sub_vec2_u32(select(vec2<u32>(13312u, 1104u), vec2<u32>(global1.a, 44749u), global3.x), vec2<u32>(1u, u_input.a)) % vec2<u32>(32u)));
    var var_1 = Struct_1(~reverseBits(~global1.a) << (var_0.x % 32u), _wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_f_op_vec2_f32(-vec2<f32>(1636f, 237f)))), select(!(!vec2<bool>(false, global1.c.x)), select(!select(vec2<bool>(true, global1.d.x), global1.c, true), vec2<bool>(true, global3.x), _wgslsmith_f_op_f32(-502f) > global1.e.x), true), !(!global3.xxz), global1.e);
    loop {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        let var_2 = select(func_8(Struct_1(56813u, vec2<f32>(-372f, 529f), !global1.c, !(!global1.d), _wgslsmith_f_op_vec4_f32(vec4<f32>(965f, 1146f, global1.e.x, 116f) + _wgslsmith_f_op_vec4_f32(-vec4<f32>(global1.e.x, var_1.e.x, var_1.e.x, global1.e.x)))), Struct_1(_wgslsmith_add_u32(u_input.a, 0u), vec2<f32>(_wgslsmith_f_op_f32(f32(-1f) * -105f), _wgslsmith_f_op_f32(floor(-181f))), !select(var_1.c, vec2<bool>(true, var_1.c.x), false), vec3<bool>(true, global1.c.x, true), _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(global1.e * vec4<f32>(global2.x, global1.e.x, var_1.b.x, var_1.b.x)), _wgslsmith_f_op_vec4_f32(floor(vec4<f32>(global2.x, 558f, var_1.e.x, var_1.e.x))))), func_5(vec4<u32>(~1u, 41662u, var_0.x, ~8079u), func_8(Struct_1(1u, global2.yz, global3.zy, global0[_wgslsmith_index_u32(80807u, 25u)], vec4<f32>(var_1.b.x, global2.x, 420f, global1.b.x)), func_5(vec4<u32>(var_1.a, 1u, 30944u, var_1.a), Struct_1(9293u, vec2<f32>(global2.x, 1176f), vec2<bool>(global3.x, false), vec3<bool>(global1.c.x, true, global1.d.x), var_1.e)), Struct_1(0u, var_1.b, vec2<bool>(true, false), vec3<bool>(false, false, global3.x), global1.e), var_0.x)), var_0.x & u_input.a).d, !vec3<bool>(true, true, !func_5(vec4<u32>(1u, 4294967295u, 1u, 4294967295u), Struct_1(u_input.a, vec2<f32>(-1058f, var_1.b.x), vec2<bool>(var_1.d.x, var_1.d.x), global3.zzw, vec4<f32>(var_1.b.x, -1272f, 946f, 619f))).c.x), !func_8(func_8(func_5(vec4<u32>(0u, global1.a, 85755u, 46619u), Struct_1(13999u, global2.zz, vec2<bool>(global3.x, true), global3.zxx, vec4<f32>(var_1.b.x, -1097f, 932f, global2.x))), Struct_1(23719u, global1.e.zz, var_1.c, global1.d, vec4<f32>(635f, -1393f, -594f, global2.x)), Struct_1(u_input.a, vec2<f32>(global2.x, -747f), vec2<bool>(global3.x, false), vec3<bool>(true, false, global1.c.x), global1.e), ~0u), func_5(vec4<u32>(109062u, var_1.a, 1u, 45344u), func_8(Struct_1(11973u, global2.xy, var_1.c, var_1.d, var_1.e), Struct_1(1u, vec2<f32>(787f, 1003f), vec2<bool>(false, global1.d.x), vec3<bool>(true, false, true), global1.e), Struct_1(70801u, global2.yy, vec2<bool>(global1.d.x, global1.d.x), vec3<bool>(global3.x, var_1.d.x, false), vec4<f32>(var_1.e.x, 1272f, global1.e.x, -733f)), global1.a)), func_5(_wgslsmith_sub_vec4_u32(vec4<u32>(var_0.x, global1.a, var_0.x, var_0.x), vec4<u32>(1u, 1u, var_0.x, var_0.x)), func_8(Struct_1(var_0.x, var_1.b, vec2<bool>(true, true), vec3<bool>(false, global1.d.x, false), global1.e), Struct_1(global1.a, vec2<f32>(global2.x, -229f), global3.xz, var_1.d, vec4<f32>(global2.x, -1000f, -1281f, global1.e.x)), Struct_1(75117u, vec2<f32>(716f, -417f), vec2<bool>(false, false), vec3<bool>(true, global1.c.x, var_1.c.x), global1.e), 36633u)), global1.a).d);
        let var_3 = func_8(func_5(~vec4<u32>(_wgslsmith_sub_u32(4294967295u, u_input.a), firstTrailingBit(u_input.a), u_input.a, var_0.x), func_5(max(countOneBits(vec4<u32>(global1.a, 4294967295u, var_1.a, 0u)), vec4<u32>(var_1.a, 1u, 16472u, 1u)), func_8(func_5(vec4<u32>(global1.a, 4294967295u, global1.a, 103534u), Struct_1(92065u, vec2<f32>(var_1.b.x, -697f), vec2<bool>(true, global1.d.x), vec3<bool>(false, true, true), vec4<f32>(global1.b.x, -1156f, 202f, 840f))), Struct_1(var_0.x, vec2<f32>(1445f, var_1.b.x), var_2.yx, vec3<bool>(var_1.d.x, var_1.c.x, true), var_1.e), Struct_1(4294967295u, global2.yy, var_1.c, vec3<bool>(var_2.x, true, true), var_1.e), func_8(Struct_1(var_0.x, var_1.b, vec2<bool>(global1.d.x, global3.x), var_1.d, var_1.e), Struct_1(1u, vec2<f32>(1401f, 503f), var_1.d.yx, var_2, vec4<f32>(global2.x, 426f, global2.x, var_1.e.x)), Struct_1(0u, vec2<f32>(1474f, var_1.b.x), var_1.c, vec3<bool>(true, var_1.d.x, var_1.c.x), vec4<f32>(-138f, global1.e.x, -470f, 1305f)), 1u).a))), Struct_1(func_2(!vec3<bool>(true, global3.x, var_2.x), Struct_1(max(26411u, 0u), _wgslsmith_f_op_vec2_f32(select(global1.b, vec2<f32>(104f, global1.e.x), global1.c)), vec2<bool>(global1.c.x, var_1.d.x), global3.wzz, _wgslsmith_f_op_vec4_f32(-global1.e)), !global3.x, func_8(Struct_1(1u, vec2<f32>(global2.x, var_1.e.x), global3.yw, vec3<bool>(true, false, var_2.x), var_1.e), Struct_1(0u, global2.yz, global1.c, vec3<bool>(var_2.x, true, true), vec4<f32>(var_1.b.x, 1022f, -1053f, global1.b.x)), func_8(Struct_1(global1.a, vec2<f32>(global2.x, 1222f), global3.zz, vec3<bool>(false, var_2.x, var_2.x), vec4<f32>(global2.x, global1.b.x, 337f, -1898f)), Struct_1(90995u, var_1.b, global3.zx, global0[_wgslsmith_index_u32(4294967295u, 25u)], var_1.e), Struct_1(14013u, var_1.b, vec2<bool>(false, var_2.x), vec3<bool>(true, global3.x, false), vec4<f32>(var_1.e.x, -315f, global1.e.x, -248f)), var_1.a), _wgslsmith_sub_u32(4294967295u, 66950u))), vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-773f)), _wgslsmith_f_op_f32(-var_1.e.x)), !func_5(vec4<u32>(u_input.a, 0u, 9664u, 85663u), func_8(Struct_1(1u, vec2<f32>(-222f, global1.b.x), global3.xx, global0[_wgslsmith_index_u32(u_input.a, 25u)], var_1.e), Struct_1(49025u, global2.zy, global3.yw, vec3<bool>(false, true, true), vec4<f32>(-1036f, global1.b.x, global1.b.x, 1256f)), Struct_1(4294967295u, vec2<f32>(var_1.b.x, -334f), global3.zy, var_2, var_1.e), u_input.a)).d.zz, func_8(func_5(vec4<u32>(78792u, global1.a, var_0.x, u_input.a) << (vec4<u32>(4294967295u, 14382u, 1u, var_1.a) % vec4<u32>(32u)), Struct_1(global1.a, var_1.b, vec2<bool>(false, global3.x), vec3<bool>(global1.c.x, global1.c.x, false), var_1.e)), Struct_1(~19417u, _wgslsmith_f_op_vec2_f32(min(var_1.b, vec2<f32>(var_1.e.x, -359f))), func_8(Struct_1(u_input.a, var_1.e.zx, vec2<bool>(var_1.c.x, false), vec3<bool>(true, var_1.d.x, var_2.x), vec4<f32>(var_1.e.x, -206f, var_1.e.x, global2.x)), Struct_1(u_input.a, vec2<f32>(1000f, global2.x), vec2<bool>(global3.x, false), var_1.d, vec4<f32>(var_1.b.x, -1000f, var_1.b.x, -538f)), Struct_1(global1.a, vec2<f32>(-1000f, var_1.b.x), vec2<bool>(global3.x, false), global1.d, global1.e), u_input.a).d.xy, vec3<bool>(var_1.c.x, false, false), _wgslsmith_f_op_vec4_f32(vec4<f32>(618f, global2.x, global2.x, global2.x) + global1.e)), func_8(Struct_1(u_input.a, vec2<f32>(global1.e.x, -784f), vec2<bool>(false, false), vec3<bool>(var_2.x, true, var_2.x), global1.e), Struct_1(4294967295u, var_1.b, vec2<bool>(true, false), var_2, vec4<f32>(var_1.e.x, 2219f, 1396f, -795f)), func_5(vec4<u32>(62024u, 75957u, u_input.a, var_1.a), Struct_1(u_input.a, vec2<f32>(global1.b.x, global1.b.x), vec2<bool>(false, true), vec3<bool>(global1.c.x, global1.d.x, true), global1.e)), ~var_0.x), 10186u << (u_input.a % 32u)).d, func_8(func_8(Struct_1(1u, vec2<f32>(1210f, global1.e.x), var_2.xz, vec3<bool>(true, global1.c.x, false), vec4<f32>(global2.x, global2.x, -1467f, global2.x)), func_5(vec4<u32>(var_1.a, 1u, global1.a, 34974u), Struct_1(6039u, vec2<f32>(var_1.b.x, -1036f), vec2<bool>(true, global3.x), global0[_wgslsmith_index_u32(34505u, 25u)], var_1.e)), func_5(vec4<u32>(u_input.a, 4294967295u, 4294967295u, var_0.x), Struct_1(1u, global2.xx, vec2<bool>(false, false), var_1.d, vec4<f32>(1488f, var_1.b.x, 638f, var_1.b.x))), firstLeadingBit(var_0.x)), func_5(_wgslsmith_div_vec4_u32(vec4<u32>(var_0.x, var_0.x, u_input.a, u_input.a), vec4<u32>(26991u, var_1.a, 57229u, var_1.a)), Struct_1(4294967295u, global2.zx, vec2<bool>(var_1.d.x, false), global3.ywx, vec4<f32>(global2.x, 1011f, var_1.e.x, -1569f))), func_8(Struct_1(56167u, global1.e.yw, vec2<bool>(false, false), var_2, vec4<f32>(var_1.e.x, -846f, -1692f, var_1.e.x)), func_8(Struct_1(49559u, vec2<f32>(global1.e.x, -1349f), var_1.c, vec3<bool>(true, var_2.x, false), vec4<f32>(736f, -1036f, 1336f, global2.x)), Struct_1(42675u, vec2<f32>(global1.b.x, global1.b.x), vec2<bool>(var_1.c.x, global1.c.x), var_2, vec4<f32>(538f, var_1.e.x, var_1.e.x, global2.x)), Struct_1(4294967295u, vec2<f32>(global2.x, global1.e.x), vec2<bool>(true, true), var_1.d, vec4<f32>(914f, -109f, global1.e.x, 862f)), u_input.a), Struct_1(4294967295u, global1.e.wy, var_2.xx, vec3<bool>(var_2.x, true, false), vec4<f32>(-950f, 2517f, 1000f, global2.x)), 1u), func_4()).e), func_8(func_5(_wgslsmith_mult_vec4_u32(abs(vec4<u32>(4294967295u, 57419u, 7944u, u_input.a)), vec4<u32>(var_1.a, 0u, u_input.a, global1.a)), func_8(func_5(vec4<u32>(34245u, var_0.x, u_input.a, u_input.a), Struct_1(var_0.x, global2.zx, vec2<bool>(var_2.x, global1.c.x), vec3<bool>(var_1.d.x, global1.d.x, var_1.c.x), var_1.e)), func_5(vec4<u32>(310u, var_1.a, 1u, global1.a), Struct_1(0u, vec2<f32>(-199f, -446f), global3.zz, vec3<bool>(true, false, true), global1.e)), func_8(Struct_1(0u, var_1.e.yz, var_1.d.yz, var_1.d, vec4<f32>(global1.e.x, var_1.e.x, global1.b.x, -789f)), Struct_1(4294967295u, vec2<f32>(-1335f, global2.x), global3.wz, global1.d, global1.e), Struct_1(70211u, global1.e.wx, global3.xz, global1.d, vec4<f32>(global2.x, -400f, -988f, global2.x)), var_0.x), ~global1.a)), Struct_1(firstLeadingBit(4294967295u), _wgslsmith_f_op_vec2_f32(trunc(_wgslsmith_f_op_vec2_f32(round(global2.xy)))), !vec2<bool>(var_1.c.x, true), var_2, _wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(vec4<f32>(-224f, -217f, global2.x, -1000f) - vec4<f32>(var_1.e.x, var_1.e.x, global2.x, global1.e.x))))), func_5(~(vec4<u32>(4294967295u, 33008u, var_1.a, 53235u) >> (vec4<u32>(66013u, var_1.a, global1.a, 3578u) % vec4<u32>(32u))), Struct_1(4294967295u, _wgslsmith_f_op_vec2_f32(vec2<f32>(global1.b.x, -1000f) * global1.b), vec2<bool>(true, true), global1.d, func_8(Struct_1(90836u, var_1.b, global1.d.zx, vec3<bool>(var_2.x, false, global1.c.x), global1.e), Struct_1(u_input.a, var_1.e.xw, var_1.d.yz, vec3<bool>(true, global1.d.x, true), global1.e), Struct_1(u_input.a, vec2<f32>(var_1.b.x, global1.b.x), vec2<bool>(global3.x, var_2.x), var_1.d, vec4<f32>(201f, var_1.e.x, global1.b.x, -396f)), u_input.a).e)), _wgslsmith_sub_u32(_wgslsmith_mult_u32(global1.a, 34586u), _wgslsmith_mod_u32(u_input.a, global1.a))), func_8(Struct_1(var_1.a, func_5(vec4<u32>(u_input.a, 32525u, var_0.x, var_1.a), Struct_1(0u, vec2<f32>(-1390f, global2.x), global1.d.yy, vec3<bool>(false, true, true), vec4<f32>(823f, 391f, global2.x, 244f))).b, var_2.zz, func_8(func_5(vec4<u32>(var_1.a, global1.a, 40051u, 44509u), Struct_1(3244u, var_1.b, vec2<bool>(false, false), vec3<bool>(true, global3.x, true), global1.e)), Struct_1(1u, var_1.e.yx, vec2<bool>(var_1.d.x, var_1.d.x), vec3<bool>(var_2.x, var_1.d.x, var_2.x), global1.e), func_8(Struct_1(var_0.x, global1.e.wz, global3.wz, vec3<bool>(false, true, global1.c.x), vec4<f32>(global1.b.x, global2.x, global2.x, 152f)), Struct_1(var_1.a, vec2<f32>(2002f, 892f), var_1.c, vec3<bool>(var_1.c.x, global1.c.x, true), global1.e), Struct_1(global1.a, var_1.e.yz, var_2.xz, var_2, vec4<f32>(global2.x, var_1.b.x, global2.x, global2.x)), 13371u), _wgslsmith_mod_u32(global1.a, 0u)).d, vec4<f32>(_wgslsmith_f_op_f32(1903f + global1.e.x), _wgslsmith_f_op_f32(floor(-533f)), global1.e.x, _wgslsmith_div_f32(874f, global2.x))), func_8(Struct_1(u_input.a, var_1.b, var_1.d.xz, vec3<bool>(var_1.d.x, false, true), _wgslsmith_f_op_vec4_f32(select(vec4<f32>(global1.b.x, global2.x, 1369f, global2.x), var_1.e, false))), Struct_1(reverseBits(0u), _wgslsmith_f_op_vec2_f32(vec2<f32>(-1279f, 1171f) + vec2<f32>(global1.b.x, -1827f)), var_1.c, vec3<bool>(false, var_1.c.x, var_1.c.x), vec4<f32>(global1.b.x, -1000f, global1.e.x, -230f)), func_5(firstTrailingBit(vec4<u32>(var_0.x, var_1.a, 2994u, u_input.a)), func_5(vec4<u32>(var_0.x, 88292u, global1.a, 8543u), Struct_1(var_1.a, vec2<f32>(global1.e.x, var_1.e.x), var_1.c, vec3<bool>(true, var_1.c.x, false), var_1.e))), _wgslsmith_sub_u32(~var_0.x, firstTrailingBit(var_1.a))), func_5(~vec4<u32>(9353u, 4294967295u, 40355u, var_0.x), Struct_1(0u, _wgslsmith_f_op_vec2_f32(-global1.b), !vec2<bool>(true, var_1.d.x), select(vec3<bool>(true, true, true), vec3<bool>(true, var_2.x, true), vec3<bool>(var_1.c.x, global1.d.x, var_2.x)), global1.e)), ~firstTrailingBit(func_8(Struct_1(0u, vec2<f32>(global1.b.x, -1023f), vec2<bool>(true, var_1.d.x), global1.d, var_1.e), Struct_1(var_1.a, global1.b, var_1.c, vec3<bool>(false, true, true), global1.e), Struct_1(u_input.a, var_1.b, vec2<bool>(var_2.x, false), vec3<bool>(true, var_2.x, global1.d.x), global1.e), 0u).a)).a);
    }
    loop {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
        let var_2 = _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(global2.x, var_1.b.x))))) * _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(select(global1.b, global1.e.zy, true)) * _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-global2.zz)))));
        global3 = vec4<bool>(true, any(vec2<bool>(global3.x, global3.x)), !any(!func_8(Struct_1(global1.a, global1.e.yx, vec2<bool>(false, true), global0[_wgslsmith_index_u32(4294967295u, 25u)], var_1.e), Struct_1(global1.a, global1.b, vec2<bool>(true, true), var_1.d, vec4<f32>(var_1.b.x, global2.x, 1000f, global2.x)), Struct_1(global1.a, vec2<f32>(221f, -1000f), vec2<bool>(global3.x, true), global0[_wgslsmith_index_u32(u_input.a, 25u)], vec4<f32>(-3095f, -841f, 1397f, 1029f)), u_input.a).d), all(select(!(!vec4<bool>(false, var_1.d.x, false, global3.x)), !vec4<bool>(false, false, global1.d.x, global3.x), !select(vec4<bool>(true, global3.x, global1.d.x, global3.x), vec4<bool>(false, true, global3.x, global1.c.x), vec4<bool>(global3.x, false, false, var_1.c.x)))));
        switch (~(select(-76020i, u_input.c.x, var_1.d.x) << (func_2(func_8(Struct_1(4294967295u, global1.b, vec2<bool>(true, true), vec3<bool>(true, false, false), vec4<f32>(global2.x, -2885f, var_2.x, global2.x)), Struct_1(var_0.x, vec2<f32>(-224f, -912f), global3.wz, var_1.d, vec4<f32>(-320f, global2.x, -635f, global2.x)), Struct_1(var_0.x, global1.e.wy, global1.c, vec3<bool>(global1.c.x, true, global1.c.x), var_1.e), var_1.a).d, func_5(firstTrailingBit(vec4<u32>(4294967295u, u_input.a, global1.a, 12550u)), func_8(Struct_1(var_0.x, vec2<f32>(-847f, 1000f), global3.zy, vec3<bool>(global1.d.x, global1.c.x, global3.x), global1.e), Struct_1(4294967295u, vec2<f32>(var_2.x, 2187f), var_1.c, vec3<bool>(true, var_1.d.x, true), var_1.e), Struct_1(global1.a, var_1.b, global3.yz, vec3<bool>(false, false, true), vec4<f32>(var_1.b.x, -1251f, 787f, global1.e.x)), global1.a)), true, Struct_1(_wgslsmith_dot_vec3_u32(vec3<u32>(var_1.a, 4294967295u, 29882u), vec3<u32>(68109u, 0u, 1u)), _wgslsmith_f_op_vec2_f32(-vec2<f32>(-442f, var_1.b.x)), global1.d.yz, !vec3<bool>(global1.c.x, true, false), _wgslsmith_f_op_vec4_f32(-global1.e))) % 32u))) {
            default: {
                var var_3 = var_0.x;
                let var_4 = 1162f;
            }
        }
    }
    return _wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(vec4<f32>(-672f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1349f) * func_8(Struct_1(52671u, vec2<f32>(var_1.b.x, global2.x), global3.xy, global0[_wgslsmith_index_u32(var_1.a, 25u)], vec4<f32>(var_1.b.x, global1.e.x, global1.b.x, 939f)), Struct_1(1u, vec2<f32>(1000f, global2.x), vec2<bool>(var_1.c.x, true), global3.wwx, vec4<f32>(global2.x, global2.x, -1718f, -1000f)), Struct_1(var_1.a, vec2<f32>(1046f, var_1.e.x), global1.c, vec3<bool>(global3.x, true, true), global1.e), var_0.x).e.x), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1663f + 333f) + var_1.b.x), _wgslsmith_f_op_f32(max(global2.x, _wgslsmith_f_op_f32(-226f)))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(var_1.e.x, global2.x, global2.x, -751f) + _wgslsmith_f_op_vec4_f32(-vec4<f32>(var_1.e.x, global1.e.x, global1.b.x, global2.x))))));
}

@compute
@workgroup_size(1)
fn main() {
    let var_0 = Struct_1(_wgslsmith_div_u32(~global1.a, ~(u_input.a & global1.a)) ^ firstLeadingBit(1u), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(sign(vec2<f32>(global2.x, 1f))) + vec2<f32>(1f, 1f)), select(!vec2<bool>(true, select(global3.x, false, global3.x)), global1.d.zx, global1.d.x), vec3<bool>(false, !all(select(global3.wxw, vec3<bool>(true, global1.d.x, global1.d.x), false)), any(vec4<bool>(true, false, global1.d.x, global3.x)) & (global3.x & global1.d.x)), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(func_1()) - _wgslsmith_f_op_vec4_f32(-global1.e))) + _wgslsmith_f_op_vec4_f32(select(vec4<f32>(1549f, _wgslsmith_f_op_f32(-global2.x), _wgslsmith_f_op_vec4_f32(func_1()).x, _wgslsmith_f_op_f32(abs(global1.e.x))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(-1677f, global2.x, -784f, global1.b.x))), !(!vec4<bool>(global1.d.x, global1.d.x, global3.x, global3.x))))));
    if (var_0.d.x) {
        let var_1 = var_0;
        global2 = _wgslsmith_f_op_vec3_f32(-func_5(~reverseBits(_wgslsmith_sub_vec4_u32(vec4<u32>(var_1.a, var_0.a, var_1.a, u_input.a), vec4<u32>(0u, u_input.a, u_input.a, u_input.a))), var_0).e.wzy);
        var var_2 = vec4<i32>(-1i, _wgslsmith_sub_i32(-10023i, 1i), -2147483647i, _wgslsmith_dot_vec3_i32(-u_input.d.xxy, select(-u_input.d.wwz, min(-vec3<i32>(2147483647i, -11967i, -33695i), _wgslsmith_sub_vec3_i32(u_input.c, vec3<i32>(u_input.d.x, -17553i, u_input.c.x))), true)));
    }
    let x = u_input.a;
    s_output = StorageBuffer(vec2<i32>(u_input.c.x, u_input.b));
}

`;