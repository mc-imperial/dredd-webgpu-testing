export const input = [64,132,169,190,202,65,66,86,121,31,132,154,71,238,90,188,37,180,228,138,171,47,23,171,146,189,245,146,152,225,194,152,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [64,132,169,190,202,65,66,86,121,31,132,154,71,238,90,188,37,180,228,138,171,47,23,171,146,189,245,146,152,225,194,152,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[64,132,169,190,202,65,66,86,121,31,132,154,71,238,90,188,37,180,228,138,171,47,23,171,146,189,245,146,152,225,194,152]}
// Seed: 11978615222247306456

struct Struct_1 {
    a: u32,
    b: vec3<f32>,
    c: i32,
}

struct Struct_2 {
    a: Struct_1,
    b: Struct_1,
    c: vec2<bool>,
    d: f32,
}

struct Struct_3 {
    a: Struct_2,
    b: f32,
    c: bool,
    d: vec2<f32>,
    e: Struct_1,
}

struct Struct_4 {
    a: vec2<i32>,
    b: Struct_1,
    c: Struct_3,
}

struct Struct_5 {
    a: Struct_3,
}

struct UniformBuffer {
    a: vec3<u32>,
    b: i32,
    c: u32,
    d: u32,
    e: vec2<u32>,
}

struct StorageBuffer {
    a: i32,
    b: f32,
    c: f32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: vec2<bool> = vec2<bool>(false, true);

var<private> global1: vec3<u32> = vec3<u32>(32892u, 18209u, 27704u);

var<private> LOOP_COUNTERS: array<u32, 23>;

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
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

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn func_6(arg_0: vec2<u32>) -> i32 {
    let var_0 = Struct_1(22021u, vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -1544f), 607f, _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(max(349f, -871f))))), max(_wgslsmith_dot_vec4_i32(min(~vec4<i32>(-1i, 15730i, u_input.b, 0i), vec4<i32>(u_input.b, u_input.b, 25948i, 23299i) >> (vec4<u32>(arg_0.x, 18080u, arg_0.x, global1.x) % vec4<u32>(32u))), vec4<i32>(10482i, u_input.b, ~u_input.b, ~u_input.b)), u_input.b >> (4294967295u % 32u)));
    switch (select(_wgslsmith_mod_i32(u_input.b, var_0.c), -55793i, 1i <= var_0.c)) {
        case 20237i: {
            loop {
                if (LOOP_COUNTERS[0u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
            }
            global1 = u_input.a;
            global1 = u_input.a;
            return ~_wgslsmith_dot_vec4_i32(vec4<i32>(-1i) * -_wgslsmith_mult_vec4_i32(vec4<i32>(var_0.c, u_input.b, -1i, i32(-2147483648)), vec4<i32>(u_input.b, -6197i, u_input.b, var_0.c)), abs(_wgslsmith_mult_vec4_i32(_wgslsmith_mod_vec4_i32(vec4<i32>(i32(-2147483648), u_input.b, u_input.b, var_0.c), vec4<i32>(var_0.c, u_input.b, var_0.c, u_input.b)), _wgslsmith_sub_vec4_i32(vec4<i32>(u_input.b, var_0.c, 0i, 36170i), vec4<i32>(u_input.b, -28460i, -19476i, 12955i)))));
        }
        case 0i: {
            let var_1 = _wgslsmith_dot_vec4_u32(~(~min(reverseBits(vec4<u32>(global1.x, u_input.c, global1.x, 4294967295u)), select(vec4<u32>(arg_0.x, 0u, 95174u, 1u), vec4<u32>(65869u, 4294967295u, 40879u, 4294967295u), vec4<bool>(global0.x, false, true, global0.x)))), ~select(~(~vec4<u32>(u_input.a.x, var_0.a, 0u, u_input.c)), ~vec4<u32>(6420u, arg_0.x, 24979u, global1.x), !(-1966f >= var_0.b.x)));
            global1 = firstLeadingBit(~vec3<u32>(~arg_0.x, _wgslsmith_div_u32(_wgslsmith_dot_vec3_u32(u_input.a, u_input.a), ~arg_0.x), max(abs(4294967295u), global1.x)));
            switch (reverseBits(~1i)) {
                case -20843i: {
                    let var_2 = Struct_4(vec2<i32>(select(u_input.b, var_0.c, global0.x && true) & _wgslsmith_div_i32(_wgslsmith_sub_i32(-48757i, i32(-2147483648)), 17558i), -2708i), Struct_1(~(41632u >> (var_1 % 32u)), _wgslsmith_f_op_vec3_f32(vec3<f32>(-351f, 1f, _wgslsmith_f_op_f32(-103f + -816f)) - _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(var_0.b * vec3<f32>(649f, var_0.b.x, -1000f)))), -(~(~0i))), Struct_3(Struct_2(var_0, Struct_1(38298u, vec3<f32>(-1403f, 1176f, -1629f), -1i | var_0.c), select(!vec2<bool>(global0.x, global0.x), vec2<bool>(true, global0.x), global0.x), _wgslsmith_f_op_f32(var_0.b.x + _wgslsmith_f_op_f32(trunc(-344f)))), var_0.b.x, true, _wgslsmith_f_op_vec2_f32(trunc(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(967f, var_0.b.x)) - vec2<f32>(var_0.b.x, var_0.b.x)))), Struct_1(u_input.d ^ max(8318u, u_input.e.x), _wgslsmith_f_op_vec3_f32(-vec3<f32>(-181f, var_0.b.x, var_0.b.x)), _wgslsmith_dot_vec3_i32(vec3<i32>(u_input.b, 1i, u_input.b), countOneBits(vec3<i32>(-1i, 59713i, -21430i))))));
                    var var_3 = ~(~max(vec4<u32>(var_2.b.a, arg_0.x, u_input.c, global1.x) | vec4<u32>(global1.x, global1.x, 1u, 4294967295u), vec4<u32>(var_1, 0u, u_input.a.x, 132512u) | vec4<u32>(global1.x, global1.x, var_1, arg_0.x))) ^ abs(~abs(vec4<u32>(global1.x, 4294967295u, global1.x, 4294967295u) ^ vec4<u32>(arg_0.x, var_2.b.a, 1u, 57721u)));
                    var_3 = vec4<u32>(115635u, u_input.c, ~global1.x, arg_0.x);
                    let var_4 = Struct_2(Struct_1(firstTrailingBit(global1.x), vec3<f32>(-301f, -969f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(var_2.c.d.x, var_0.b.x)))), min(_wgslsmith_mod_i32(abs(u_input.b), 0i >> (var_3.x % 32u)), _wgslsmith_div_i32(var_0.c, ~var_2.b.c))), Struct_1(1u, _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(445f, var_0.b.x, 1460f)))), ~var_2.b.c), select(var_2.c.a.c, vec2<bool>(var_2.c.c, all(select(vec2<bool>(false, false), var_2.c.a.c, var_2.c.c))), global0.x || all(select(vec3<bool>(false, false, var_2.c.a.c.x), vec3<bool>(false, true, true), global0.x))), _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(step(var_2.b.b.x, 1000f)), _wgslsmith_f_op_f32(max(var_2.b.b.x, 494f)), true)))));
                    var_3 = countOneBits(~(~abs(reverseBits(vec4<u32>(11231u, 1u, 41243u, var_4.a.a)))));
                }
                case 0i: {
                    var var_2 = _wgslsmith_mod_vec3_i32(vec3<i32>(37240i, var_0.c, -48465i), _wgslsmith_add_vec3_i32(vec3<i32>(var_0.c, select(i32(-1i) * -39046i, 29462i, false || global0.x), u_input.b), vec3<i32>(~var_0.c, -1i, select(var_0.c, _wgslsmith_mod_i32(var_0.c, i32(-2147483648)), global0.x))));
                    var var_3 = ~(countOneBits(46465u) << ((var_1 | arg_0.x) % 32u));
                }
                default: {
                    let var_2 = Struct_2(Struct_1(~39693u, vec3<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(var_0.b.x - var_0.b.x))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(-532f)) - -608f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(var_0.b.x)))), var_0.c), var_0, select(vec2<bool>(all(vec2<bool>(global0.x, global0.x)), true), !vec2<bool>(global0.x, global0.x), vec2<bool>(false, global0.x)), _wgslsmith_f_op_f32(-var_0.b.x));
                }
            }
            for (var var_2 = 2147483647i; any(!select(select(vec4<bool>(true, global0.x, global0.x, true), vec4<bool>(global0.x, global0.x, true, false), vec4<bool>(true, true, false, global0.x)), !vec4<bool>(true, false, true, global0.x), true)) || any(select(select(vec2<bool>(global0.x, global0.x), select(vec2<bool>(global0.x, true), vec2<bool>(true, global0.x), vec2<bool>(global0.x, false)), true), select(select(vec2<bool>(true, global0.x), vec2<bool>(global0.x, true), vec2<bool>(false, false)), !vec2<bool>(global0.x, global0.x), any(vec2<bool>(false, false))), select(!vec2<bool>(global0.x, global0.x), vec2<bool>(global0.x, true), false))); var_2 -= 1i) {
                if (LOOP_COUNTERS[1u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
                continue;
            }
        }
        case 3875i: {
            var var_1 = _wgslsmith_clamp_vec4_i32(firstLeadingBit(vec4<i32>(~u_input.b, -13437i, 2147483647i, -var_0.c)) | _wgslsmith_mult_vec4_i32(~(-vec4<i32>(i32(-2147483648), u_input.b, 2147483647i, 0i)), countOneBits(min(vec4<i32>(u_input.b, u_input.b, var_0.c, -21311i), vec4<i32>(u_input.b, var_0.c, -1i, u_input.b)))), vec4<i32>(-2147483647i, i32(-1i) * -_wgslsmith_div_i32(27029i, -11960i), firstLeadingBit(firstTrailingBit(-1i) & ~(-1i)), min(~(-1327i), -33721i)), -abs(vec4<i32>(12920i, 0i, u_input.b, u_input.b) | vec4<i32>(u_input.b, u_input.b, 23437i, var_0.c)) >> (_wgslsmith_mult_vec4_u32(vec4<u32>(~4294967295u, u_input.d, _wgslsmith_mod_u32(0u, 45468u), ~var_0.a), ~vec4<u32>(var_0.a, u_input.e.x, u_input.c, global1.x)) % vec4<u32>(32u)));
            var var_2 = var_0.a;
            if (global0.x) {
            }
            var_2 = 1u;
        }
        case -36888i: {
            global1 = ~_wgslsmith_sub_vec3_u32(~vec3<u32>(abs(global1.x), _wgslsmith_mult_u32(arg_0.x, 20753u), _wgslsmith_clamp_u32(u_input.e.x, 9850u, 55072u)), vec3<u32>(arg_0.x, _wgslsmith_dot_vec3_u32(vec3<u32>(1u, 82792u, u_input.d) | vec3<u32>(33707u, global1.x, 4294967295u), u_input.a), 23024u));
            var var_1 = (_wgslsmith_sub_vec2_i32(-(~vec2<i32>(2147483647i, 18711i)), _wgslsmith_add_vec2_i32(firstTrailingBit(vec2<i32>(var_0.c, var_0.c)), vec2<i32>(u_input.b, var_0.c) ^ vec2<i32>(u_input.b, var_0.c))) << (arg_0 % vec2<u32>(32u))) & vec2<i32>(-u_input.b, _wgslsmith_add_i32(-abs(u_input.b), 2147483647i));
            var var_2 = ~(~vec3<i32>(reverseBits(1i), 2147483647i, -var_1.x));
            var var_3 = min(0i, min(min(u_input.b | u_input.b, var_2.x >> (arg_0.x % 32u)), i32(-2147483648) & _wgslsmith_mult_i32(u_input.b, u_input.b)) << (reverseBits(0u) % 32u));
        }
        default: {
            let var_1 = any(!vec2<bool>(global0.x, _wgslsmith_f_op_f32(min(var_0.b.x, 1752f)) >= _wgslsmith_f_op_f32(step(var_0.b.x, var_0.b.x))));
            if (all(select(select(select(vec2<bool>(true, true), !vec2<bool>(global0.x, global0.x), false), vec2<bool>(var_1, !global0.x), true), select(vec2<bool>(u_input.e.x != arg_0.x, true), vec2<bool>(true, false & var_1), !all(vec4<bool>(true, global0.x, var_1, var_1))), !((var_0.c != i32(-2147483648)) && true)))) {
                let var_2 = _wgslsmith_clamp_i32(~u_input.b, u_input.b, _wgslsmith_mod_i32(-var_0.c, var_0.c));
                let var_3 = 533f;
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        return 12912i;
    }
    if (global0.x) {
        loop {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            global0 = !select(vec2<bool>(any(vec2<bool>(global0.x, global0.x)), all(vec3<bool>(global0.x, false, true))), !vec2<bool>(var_0.b.x > var_0.b.x, true), !select(vec2<bool>(true, true), select(vec2<bool>(true, global0.x), vec2<bool>(global0.x, global0.x), vec2<bool>(global0.x, global0.x)), true));
            break;
        }
        let var_1 = ~abs(~firstLeadingBit(4294967295u) ^ (0u | _wgslsmith_add_u32(arg_0.x, var_0.a)));
    }
    if (!any(vec3<bool>(false, global0.x, global0.x))) {
        let var_1 = (_wgslsmith_sub_u32(var_0.a, _wgslsmith_clamp_u32(1u, ~var_0.a, 54494u)) >> (1u % 32u)) << ((_wgslsmith_div_u32(u_input.c, u_input.e.x | _wgslsmith_mod_u32(var_0.a, arg_0.x)) ^ _wgslsmith_mod_u32(~global1.x ^ 70011u, min(u_input.e.x, 1u) << (102375u % 32u))) % 32u);
    }
    return u_input.b;
}

fn func_5() -> Struct_1 {
    var var_0 = _wgslsmith_mult_i32(~_wgslsmith_div_i32(~u_input.b, u_input.b ^ (u_input.b & 1i)), u_input.b);
    return Struct_1(~(abs(16911u) >> (~_wgslsmith_sub_u32(global1.x, u_input.d) % 32u)), vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-940f - 832f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(select(-335f, 521f, true))))), 303f), func_6(u_input.e));
}

fn func_4() -> Struct_2 {
    let var_0 = abs(vec2<i32>(u_input.b, u_input.b));
    let var_1 = 81860u;
    let var_2 = func_5();
    var var_3 = vec3<bool>(global0.x, global0.x, select(select(_wgslsmith_dot_vec4_i32(vec4<i32>(-75327i, var_2.c, var_2.c, var_2.c), vec4<i32>(1i, 0i, 52483i, 34288i)) < countOneBits(37171i), global0.x, any(select(vec3<bool>(true, global0.x, false), vec3<bool>(global0.x, false, global0.x), true))), false, global1.x >= _wgslsmith_mod_u32(global1.x, _wgslsmith_div_u32(0u, u_input.a.x))));
    var_3 = vec3<bool>(any(!vec4<bool>(true, var_3.x, global0.x, select(false, global0.x, false))), !(!(!var_3.x) || global0.x), true);
    return Struct_2(func_5(), func_5(), !(!select(vec2<bool>(false, var_3.x), var_3.zz, select(var_3.xz, var_3.xx, false))), _wgslsmith_div_f32(var_2.b.x, _wgslsmith_f_op_f32(-var_2.b.x)));
}

fn func_3() -> Struct_2 {
    if (false) {
        return func_4();
    }
    loop {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        let var_0 = func_5();
        continue;
    }
    var var_0 = ~4294967295u | firstLeadingBit(~(~31982u & firstTrailingBit(u_input.d)));
    let var_1 = global1.x;
    var_0 = 0u;
    return func_4();
}

fn func_7(arg_0: vec3<bool>, arg_1: f32, arg_2: Struct_2, arg_3: i32) -> Struct_2 {
    return func_4();
}

fn func_8(arg_0: vec3<u32>, arg_1: Struct_3) -> u32 {
    loop {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        continue;
    }
    global1 = arg_0;
    switch (arg_1.e.c) {
        case 14810i: {
            switch (select(func_7(select(select(select(vec3<bool>(arg_1.c, true, arg_1.a.c.x), vec3<bool>(true, true, true), true), vec3<bool>(true, true, true), select(vec3<bool>(global0.x, arg_1.c, arg_1.c), vec3<bool>(false, false, arg_1.a.c.x), vec3<bool>(true, global0.x, false))), select(select(vec3<bool>(false, false, global0.x), vec3<bool>(global0.x, false, true), true), !vec3<bool>(arg_1.c, global0.x, global0.x), true), all(select(vec4<bool>(true, false, false, global0.x), vec4<bool>(global0.x, arg_1.c, arg_1.a.c.x, true), vec4<bool>(global0.x, false, global0.x, global0.x)))), arg_1.e.b.x, func_7(vec3<bool>(true, true, true), _wgslsmith_div_f32(arg_1.b, 145f), arg_1.a, arg_1.e.c), _wgslsmith_div_i32(arg_1.a.b.c, 2147483647i)).a.c, 1i, 1675u < firstTrailingBit(1u))) {
                case -11458i: {
                    global1 = vec3<u32>(u_input.e.x, 10527u, _wgslsmith_mod_u32(abs(_wgslsmith_dot_vec3_u32(vec3<u32>(21912u, 2934u, 12381u), u_input.a)) ^ ~(~1u), global1.x));
                    let var_0 = arg_1.c;
                    global1 = vec3<u32>(func_3().a.a, _wgslsmith_mult_u32(func_3().b.a, firstTrailingBit(_wgslsmith_sub_u32(_wgslsmith_mod_u32(28385u, 57824u), ~arg_0.x))), _wgslsmith_mult_u32(_wgslsmith_add_u32(arg_0.x ^ arg_1.e.a, u_input.c), _wgslsmith_div_u32(select(arg_0.x, _wgslsmith_add_u32(4294967295u, arg_0.x), var_0), _wgslsmith_add_u32(func_3().b.a, func_4().b.a))));
                    global0 = select(!(!arg_1.a.c), vec2<bool>(!all(!vec4<bool>(global0.x, false, false, arg_1.a.c.x)), false), select(arg_1.a.c.x, !(!any(vec4<bool>(false, arg_1.c, true, var_0))), true));
                    let var_1 = u_input.e.x;
                }
                case -19908i: {
                    let var_0 = Struct_1(~(~global1.x & _wgslsmith_mult_u32(4294967295u << (0u % 32u), global1.x)), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(-vec3<f32>(453f, arg_1.d.x, arg_1.a.a.b.x)))) * _wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(vec3<f32>(arg_1.a.b.b.x, -976f, -188f), vec3<f32>(1000f, arg_1.b, arg_1.b))))), 0i);
                    var var_1 = -1231f;
                    let var_2 = -u_input.b;
                }
                default: {
                }
            }
            loop {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                continue;
            }
            var var_0 = arg_1.a.c.x;
        }
        case 0i: {
            loop {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                var var_0 = arg_1.e.b.x;
                let var_1 = func_4();
                continue;
            }
            loop {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                let var_0 = arg_1;
            }
            var var_0 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(-1631f, arg_1.b, 1956f, arg_1.d.x) + vec4<f32>(534f, arg_1.d.x, 969f, arg_1.d.x))), _wgslsmith_f_op_vec4_f32(select(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(exp2(vec4<f32>(arg_1.e.b.x, arg_1.b, arg_1.b, arg_1.e.b.x))), vec4<f32>(arg_1.b, 925f, arg_1.e.b.x, -1799f)), _wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_1.b, arg_1.e.b.x, arg_1.d.x, -1000f)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_1.e.b.x, arg_1.d.x, arg_1.e.b.x, arg_1.d.x)))), !vec4<bool>(true, false, true, arg_1.c))))));
            if (any(select(select(!(!vec3<bool>(false, arg_1.a.c.x, true)), select(vec3<bool>(global0.x, arg_1.c, arg_1.a.c.x), !vec3<bool>(arg_1.c, arg_1.c, true), !global0.x), arg_1.c), !select(vec3<bool>(global0.x, arg_1.c, arg_1.a.c.x), vec3<bool>(true, true, true), select(true, true, arg_1.a.c.x)), !arg_1.a.c.x))) {
                var var_1 = max(firstLeadingBit(-vec3<i32>(_wgslsmith_mult_i32(-40144i, -1i), _wgslsmith_dot_vec4_i32(vec4<i32>(-29028i, u_input.b, 4298i, 2147483647i), vec4<i32>(u_input.b, 26683i, arg_1.e.c, 1i)), _wgslsmith_add_i32(u_input.b, u_input.b))), ~_wgslsmith_clamp_vec3_i32(abs(vec3<i32>(-10413i, i32(-2147483648), u_input.b)), abs(vec3<i32>(1i, arg_1.a.b.c, u_input.b)), countOneBits(vec3<i32>(u_input.b, arg_1.e.c, 0i))) << (countOneBits(~vec3<u32>(0u, arg_1.a.a.a, 4294967295u)) % vec3<u32>(32u)));
                var_1 = vec3<i32>((func_4().b.c ^ var_1.x) & -23964i, var_1.x, func_6(arg_0.yy));
                var var_2 = arg_1.a;
            }
            global0 = !(!vec2<bool>(!global0.x && true, arg_1.c));
        }
        case 13833i: {
        }
        case -13264i: {
            global0 = vec2<bool>(global0.x, true);
        }
        default: {
            var var_0 = Struct_4(countOneBits(~firstTrailingBit(vec2<i32>(u_input.b, arg_1.a.a.c))), Struct_1(abs(~0u) & global1.x, arg_1.e.b, u_input.b), arg_1);
            return 0u;
        }
    }
    for (var var_0 = -1i; var_0 == -14274i; var_0 -= 1i) {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        if (_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(f32(-1f) * -100f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_1.b) * arg_1.a.a.b.x))))) <= _wgslsmith_f_op_f32(-1189f)) {
            break;
        }
        continue;
    }
    for (var var_0: i32; var_0 > 38102i; var_0 -= 1i) {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        var_0 = arg_1.a.b.c;
        global1 = countOneBits(~(~_wgslsmith_div_vec3_u32(arg_0, vec3<u32>(62040u, 4294967295u, 669u)))) & abs(reverseBits(_wgslsmith_div_vec3_u32(u_input.a, ~vec3<u32>(4294967295u, arg_1.a.b.a, u_input.e.x))));
        for (var var_1 = 7227i; !global0.x; var_0 = ~(arg_1.a.b.c << (~arg_1.a.a.a % 32u))) {
            if (LOOP_COUNTERS[11u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
            let var_2 = !(!(!(!arg_1.c || arg_1.c)));
            let var_3 = _wgslsmith_dot_vec2_u32(u_input.e, u_input.a.zy);
            let var_4 = Struct_5(Struct_3(arg_1.a, _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(1670f, arg_1.e.b.x)))), arg_1.a.b.c >= _wgslsmith_dot_vec3_i32(min(vec3<i32>(27668i, i32(-2147483648), u_input.b), vec3<i32>(u_input.b, 13022i, u_input.b)), -vec3<i32>(arg_1.e.c, u_input.b, arg_1.a.b.c)), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-arg_1.e.b.zy)), arg_1.a.a));
        }
        var var_1 = _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(func_3().b.b.zy * vec2<f32>(arg_1.a.a.b.x, _wgslsmith_f_op_f32(-1000f - -305f)))), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(min(func_7(vec3<bool>(global0.x, arg_1.c, false), _wgslsmith_f_op_f32(-1033f - 1000f), arg_1.a, _wgslsmith_div_i32(arg_1.a.a.c, arg_1.e.c)).b.b.yy, _wgslsmith_f_op_vec2_f32(-_wgslsmith_div_vec2_f32(vec2<f32>(arg_1.b, -304f), vec2<f32>(-244f, -1074f)))))));
    }
    return 4294967295u | arg_1.e.a;
}

fn func_2() -> Struct_1 {
    for (var var_0 = 10727i; -1i > u_input.b; var_0 -= 1i) {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        var_0 = 1i;
        loop {
            if (LOOP_COUNTERS[13u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
            let var_1 = func_8(select(_wgslsmith_mult_vec3_u32(u_input.a, vec3<u32>(3794u, ~global1.x, _wgslsmith_sub_u32(global1.x, 104534u))), u_input.a, vec3<bool>(true, any(vec3<bool>(global0.x, global0.x, global0.x)), any(select(vec2<bool>(true, global0.x), vec2<bool>(true, true), vec2<bool>(true, true))))), Struct_3(func_7(vec3<bool>(true, global0.x, i32(-2147483648) >= u_input.b), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-893f) * -558f), func_3(), -(~1i)), _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(439f, 1337f))))), true, _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(select(vec2<f32>(1085f, 997f), _wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(-2155f, -820f))), vec2<bool>(global0.x, global0.x)))), Struct_1(u_input.e.x, vec3<f32>(-473f, _wgslsmith_f_op_f32(f32(-1f) * -1000f), _wgslsmith_f_op_f32(-891f)), _wgslsmith_mult_i32(u_input.b, u_input.b))));
            let var_2 = 2147483647i;
        }
        var var_1 = true;
        switch (u_input.b) {
            case 23538i: {
            }
            case 899i: {
            }
            default: {
                let var_2 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(vec3<f32>(-604f, func_7(vec3<bool>(global0.x, false, true), -1093f, Struct_2(Struct_1(u_input.d, vec3<f32>(1703f, 1174f, -154f), u_input.b), Struct_1(u_input.e.x, vec3<f32>(-1998f, -690f, 116f), 1i), vec2<bool>(global0.x, true), 975f), -67436i).b.b.x, func_7(vec3<bool>(global0.x, global0.x, false), -696f, Struct_2(Struct_1(4294967295u, vec3<f32>(943f, 1581f, 1136f), u_input.b), Struct_1(u_input.a.x, vec3<f32>(-1338f, -536f, -677f), u_input.b), vec2<bool>(global0.x, global0.x), 1428f), -63248i).b.b.x), _wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(vec3<f32>(408f, 718f, 815f), vec3<f32>(-404f, -474f, -1148f)))) + _wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(106f * -325f), _wgslsmith_f_op_f32(720f + 220f), _wgslsmith_f_op_f32(f32(-1f) * -379f)) + _wgslsmith_f_op_vec3_f32(vec3<f32>(1338f, 2383f, 1000f) * func_7(vec3<bool>(global0.x, true, global0.x), 104f, Struct_2(Struct_1(20606u, vec3<f32>(1310f, -1483f, -817f), u_input.b), Struct_1(u_input.d, vec3<f32>(1841f, -1574f, -201f), -31512i), vec2<bool>(false, true), 1284f), 0i).b.b))));
                var var_3 = vec3<bool>(func_3().c.x, global0.x, !(u_input.a.x > 34082u));
            }
        }
        switch (u_input.b) {
            case -1i: {
                global1 = abs(u_input.a);
                var_1 = false;
            }
            case 0i: {
                let var_2 = Struct_3(func_7(select(vec3<bool>(true, true, true), vec3<bool>(true, global0.x | false, !global0.x), vec3<bool>(true, func_7(vec3<bool>(true, false, true), 883f, Struct_2(Struct_1(4294967295u, vec3<f32>(-1000f, 472f, -300f), u_input.b), Struct_1(u_input.a.x, vec3<f32>(679f, -867f, -1000f), u_input.b), vec2<bool>(global0.x, false), 243f), u_input.b).c.x, global0.x)), func_7(vec3<bool>(!global0.x, false, global0.x), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1027f)), Struct_2(func_4().b, Struct_1(u_input.a.x, vec3<f32>(815f, -1330f, -1276f), 35793i), vec2<bool>(global0.x, false), _wgslsmith_f_op_f32(-151f)), max(-u_input.b, i32(-2147483648))).a.b.x, Struct_2(func_3().a, Struct_1(4294967295u, vec3<f32>(388f, -557f, -827f), -u_input.b), vec2<bool>(true, true), 1f), func_6(vec2<u32>(_wgslsmith_div_u32(u_input.c, global1.x), u_input.e.x))), 1501f, -586f != func_4().d, _wgslsmith_f_op_vec2_f32(-vec2<f32>(func_4().d, _wgslsmith_f_op_f32(select(func_7(vec3<bool>(global0.x, true, global0.x), -217f, Struct_2(Struct_1(4294967295u, vec3<f32>(342f, 1064f, 838f), -11066i), Struct_1(global1.x, vec3<f32>(452f, 584f, 731f), -6751i), vec2<bool>(global0.x, false), -226f), u_input.b).d, _wgslsmith_f_op_f32(round(584f)), u_input.b != i32(-2147483648))))), func_5());
            }
            default: {
                let var_2 = Struct_1(u_input.e.x, vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1349f) - _wgslsmith_f_op_f32(max(-1086f, -838f)))), 1f, 1f), -u_input.b);
                let var_3 = Struct_3(func_7(select(select(vec3<bool>(false, false, true), !vec3<bool>(true, global0.x, global0.x), true), select(vec3<bool>(false, global0.x, global0.x), select(vec3<bool>(false, global0.x, true), vec3<bool>(global0.x, global0.x, true), false), vec3<bool>(global0.x, global0.x, false)), select(!vec3<bool>(global0.x, false, false), select(vec3<bool>(false, global0.x, false), vec3<bool>(global0.x, true, true), vec3<bool>(true, true, global0.x)), select(vec3<bool>(global0.x, true, global0.x), vec3<bool>(global0.x, true, global0.x), vec3<bool>(true, global0.x, false)))), _wgslsmith_f_op_f32(round(271f)), Struct_2(Struct_1(_wgslsmith_dot_vec4_u32(vec4<u32>(4294967295u, global1.x, u_input.d, u_input.d), vec4<u32>(global1.x, u_input.a.x, 0u, global1.x)), var_2.b, -u_input.b), var_2, vec2<bool>(func_4().c.x, false), 1f), _wgslsmith_div_i32(u_input.b, 0i)), var_2.b.x, all(select(select(!vec3<bool>(false, global0.x, global0.x), vec3<bool>(true, true, true), select(vec3<bool>(true, global0.x, false), vec3<bool>(global0.x, true, true), false)), !(!vec3<bool>(false, true, global0.x)), select(vec3<bool>(global0.x, global0.x, global0.x), select(vec3<bool>(true, global0.x, false), vec3<bool>(global0.x, false, global0.x), vec3<bool>(false, true, global0.x)), select(vec3<bool>(true, true, global0.x), vec3<bool>(true, global0.x, global0.x), false)))), var_2.b.zx, var_2);
                var var_4 = _wgslsmith_f_op_f32(ceil(237f));
                var_0 = _wgslsmith_mod_i32(countOneBits(firstTrailingBit(_wgslsmith_div_i32(var_2.c & 17430i, var_2.c))), var_2.c);
                break;
            }
        }
    }
    var var_0 = func_3();
    let var_1 = !vec4<bool>(!select(func_4().c.x, !global0.x, global0.x), firstLeadingBit(~var_0.b.a) >= ~_wgslsmith_dot_vec2_u32(global1.zy, vec2<u32>(28861u, 1u)), !select(true, any(vec4<bool>(false, global0.x, global0.x, true)), var_0.b.b.x != var_0.d), any(vec3<bool>(!var_0.c.x, any(var_0.c), false)));
    for (var var_2 = 2147483647i; var_2 > 29038i; var_0 = Struct_2(var_0.b, func_3().b, var_1.ww, _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -456f), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(1149f, 886f)))))) {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
    }
    let var_2 = ~(~(_wgslsmith_add_vec4_u32(vec4<u32>(global1.x, 11901u, var_0.b.a, 14049u), vec4<u32>(2900u, 4294967295u, var_0.a.a, global1.x)) >> (vec4<u32>(0u, max(var_0.a.a, 4294967295u), ~4294967295u, func_7(var_1.wwz, -1000f, Struct_2(Struct_1(0u, var_0.a.b, 2147483647i), Struct_1(42042u, vec3<f32>(var_0.d, var_0.b.b.x, var_0.b.b.x), u_input.b), vec2<bool>(var_0.c.x, var_1.x), var_0.b.b.x), i32(-2147483648)).a.a) % vec4<u32>(32u))));
    return var_0.b;
}

fn func_9(arg_0: f32, arg_1: bool, arg_2: Struct_3, arg_3: vec3<f32>) -> Struct_1 {
    let var_0 = _wgslsmith_f_op_vec4_f32(abs(vec4<f32>(arg_2.d.x, _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(arg_0, 824f))))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_3.x * arg_0) - _wgslsmith_f_op_f32(ceil(arg_2.b))), _wgslsmith_f_op_f32(round(arg_0))), _wgslsmith_f_op_f32(-1338f))));
    let var_1 = ~(~countOneBits(vec4<u32>(6210u, u_input.a.x, _wgslsmith_mod_u32(15389u, u_input.e.x), ~1u)));
    switch (u_input.b) {
        case 1i: {
            global0 = !arg_2.a.c;
            let var_2 = _wgslsmith_sub_vec4_u32(vec4<u32>(46341u, global1.x, func_5().a, 26006u), _wgslsmith_mod_vec4_u32(~_wgslsmith_sub_vec4_u32(_wgslsmith_mult_vec4_u32(vec4<u32>(var_1.x, 0u, 4294967295u, var_1.x), vec4<u32>(arg_2.e.a, 73915u, 66618u, var_1.x)), firstTrailingBit(vec4<u32>(1u, global1.x, arg_2.e.a, var_1.x))), var_1));
            global0 = arg_2.a.c;
        }
        case -40227i: {
            if (global0.x) {
                global1 = select(_wgslsmith_clamp_vec3_u32(~u_input.a, var_1.zzz, ~vec3<u32>(global1.x, 39290u, var_1.x)), vec3<u32>(max(48703u, arg_2.a.a.a) << (~var_1.x % 32u), var_1.x, ~1u), global0.x) | u_input.a;
            }
        }
        default: {
            let var_2 = _wgslsmith_mult_vec3_u32(var_1.yyw, vec3<u32>(_wgslsmith_sub_u32(abs(var_1.x), ~u_input.e.x), u_input.e.x, global1.x)) ^ vec3<u32>(global1.x, var_1.x, reverseBits(select(_wgslsmith_mult_u32(1u, 0u), 15322u, true)));
        }
    }
    if (false) {
        var var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(926f)))));
        global1 = ~(~(~(~vec3<u32>(0u, 46112u, 20053u))));
        var_2 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_0) - _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_div_f32(_wgslsmith_div_f32(var_0.x, var_0.x), _wgslsmith_f_op_f32(536f * arg_3.x)), -671f)));
        global0 = func_3().c;
        for (var var_3 = i32(-2147483648); 0u >= var_1.x; var_3 -= 1i) {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            let var_4 = vec3<u32>(global1.x, ~4294967295u, arg_2.e.a);
            let var_5 = 26800u;
        }
    }
    var var_2 = true;
    return func_4().a;
}

fn func_1(arg_0: i32, arg_1: vec2<f32>, arg_2: Struct_5, arg_3: bool) -> f32 {
    if (!any(select(!vec4<bool>(false, global0.x, global0.x, false), !vec4<bool>(true, arg_3, arg_2.a.c, true), true))) {
        switch (-27812i) {
            case 1i: {
                global1 = abs(countOneBits(firstLeadingBit(vec3<u32>(4807u & global1.x, 85924u << (arg_2.a.a.b.a % 32u), 1u))));
                let var_0 = Struct_1(max(~(~0u), _wgslsmith_div_u32(1u, arg_2.a.e.a)), _wgslsmith_f_op_vec3_f32(exp2(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(select(arg_2.a.e.b, arg_2.a.a.a.b, vec3<bool>(global0.x, global0.x, true))) + _wgslsmith_f_op_vec3_f32(-vec3<f32>(309f, arg_2.a.d.x, 257f))) * vec3<f32>(_wgslsmith_f_op_f32(max(arg_1.x, arg_2.a.e.b.x)), arg_1.x, arg_1.x)))), max(abs(u_input.b), _wgslsmith_sub_i32(u_input.b, _wgslsmith_div_i32(-1i, 2147483647i) & _wgslsmith_mult_i32(arg_2.a.a.a.c, 53534i))));
                var var_1 = global1.x;
                var var_2 = arg_2.a.a;
            }
            case -18342i: {
                var var_0 = func_9(_wgslsmith_f_op_f32(f32(-1f) * -1394f), (~arg_2.a.a.b.c > (-u_input.b >> (18656u % 32u))) & ((_wgslsmith_div_u32(3434u, arg_2.a.a.a.a) & ~arg_2.a.a.a.a) == 12207u), Struct_3(arg_2.a.a, 1272f, !global0.x, _wgslsmith_div_vec2_f32(_wgslsmith_div_vec2_f32(vec2<f32>(arg_1.x, -456f), arg_1), _wgslsmith_f_op_vec2_f32(vec2<f32>(1023f, 1000f) + _wgslsmith_f_op_vec2_f32(vec2<f32>(arg_1.x, arg_1.x) - vec2<f32>(arg_2.a.a.a.b.x, 1935f)))), func_2()), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1000f, -810f, -1000f)))) + func_5().b));
                let var_1 = _wgslsmith_f_op_vec4_f32(vec4<f32>(727f, _wgslsmith_f_op_f32(-_wgslsmith_div_f32(arg_1.x, var_0.b.x)), arg_2.a.e.b.x, _wgslsmith_div_f32(_wgslsmith_div_f32(arg_1.x, arg_2.a.a.d), 1045f)) * _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(150f, 1346f, arg_1.x, -180f)))) + _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(abs(_wgslsmith_f_op_vec4_f32(-vec4<f32>(var_0.b.x, arg_1.x, 1106f, -578f)))))));
            }
            case 0i: {
                global1 = firstTrailingBit(u_input.a);
                global1 = ~u_input.a;
                global1 = select(vec3<u32>(4294967295u >> ((20866u ^ select(22211u, global1.x, arg_3)) % 32u), global1.x, 12303u), _wgslsmith_mult_vec3_u32(countOneBits(u_input.a), abs(u_input.a)), _wgslsmith_mult_i32(1i, arg_2.a.a.b.c) >= u_input.b);
                var var_0 = func_5().b.zz;
                var_0 = vec2<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(func_9(_wgslsmith_f_op_f32(-988f), u_input.b <= 0i, arg_2.a, _wgslsmith_f_op_vec3_f32(-vec3<f32>(-172f, var_0.x, -529f))).b.x * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(-197f)))), func_5().b.x), 958f);
            }
            default: {
            }
        }
        var var_0 = Struct_1(~1u, _wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(arg_2.a.e.b - _wgslsmith_f_op_vec3_f32(trunc(arg_2.a.e.b))), vec3<f32>(1450f, -389f, _wgslsmith_f_op_f32(-arg_2.a.b)))), ~40896i);
        var_0 = arg_2.a.a.b;
        if (true) {
            global0 = !arg_2.a.a.c;
            var var_1 = arg_2.a.a.c.x;
            let var_2 = arg_2.a;
            let var_3 = -u_input.b;
        }
        var var_1 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(var_0.b.x + arg_1.x) - _wgslsmith_f_op_f32(f32(-1f) * -743f));
    }
    for (; ; ) {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
    }
    switch (u_input.b) {
        case -1i: {
            var var_0 = select(~(i32(-2147483648)), -22838i >> (~(~_wgslsmith_mult_u32(46875u, arg_2.a.a.a.a)) % 32u), !((select(1u, 11231u, false) <= reverseBits(arg_2.a.e.a)) | true));
            let var_1 = -vec2<i32>(_wgslsmith_mult_i32(48462i, arg_0), ~select(5430i, -1i, arg_2.a.a.c.x));
            let var_2 = Struct_1(_wgslsmith_mult_u32(~global1.x, ~(~func_2().a)), _wgslsmith_f_op_vec3_f32(vec3<f32>(-717f, _wgslsmith_f_op_f32(step(arg_1.x, 146f)), arg_2.a.a.a.b.x) * _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(1025f, -268f, arg_1.x) - arg_2.a.a.b.b)), arg_2.a.e.b, select(select(vec3<bool>(false, false, false), vec3<bool>(false, true, false), true), !vec3<bool>(arg_2.a.c, arg_3, global0.x), func_4().c.x)))), 10832i >> (u_input.d % 32u));
        }
        default: {
            for (var var_0: i32; ; ) {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                var var_1 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(round(arg_2.a.d)));
                var var_2 = func_4().a;
            }
            global1 = ~vec3<u32>(~(~1u), arg_2.a.a.b.a, _wgslsmith_div_u32(1u, 95503u));
            loop {
                if (LOOP_COUNTERS[18u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
                let var_0 = i32(-1i) * -11780i;
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
        loop {
            if (LOOP_COUNTERS[20u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
            global1 = ~u_input.a;
            continue;
        }
        let var_0 = !vec2<bool>(all(vec3<bool>(true, arg_3, arg_2.a.a.c.x)) | true, true);
    }
    let var_0 = Struct_2(func_7(select(select(!vec3<bool>(global0.x, arg_2.a.c, true), vec3<bool>(global0.x, true, global0.x), true), vec3<bool>(true, func_7(vec3<bool>(false, true, global0.x), 1007f, Struct_2(arg_2.a.a.a, Struct_1(0u, arg_2.a.a.b.b, arg_2.a.a.b.c), vec2<bool>(global0.x, true), arg_1.x), 19895i).c.x, true), vec3<bool>(true, false, false)), 395f, arg_2.a.a, firstLeadingBit(-arg_2.a.e.c)).b, arg_2.a.e, !(!vec2<bool>(all(vec4<bool>(arg_3, global0.x, arg_2.a.c, true)), true)), arg_2.a.b);
    return _wgslsmith_f_op_f32(arg_1.x * _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(471f, _wgslsmith_f_op_f32(f32(-1f) * -727f))))));
}

fn func_10(arg_0: f32, arg_1: vec3<f32>) -> Struct_3 {
    var var_0 = Struct_3(Struct_2(Struct_1(global1.x, _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-arg_1) + _wgslsmith_f_op_vec3_f32(min(arg_1, arg_1))), u_input.b), func_3().a, func_7(vec3<bool>(false, !global0.x, true), _wgslsmith_f_op_f32(-arg_1.x), Struct_2(func_9(584f, global0.x, Struct_3(Struct_2(Struct_1(global1.x, vec3<f32>(-243f, -1188f, 174f), u_input.b), Struct_1(global1.x, vec3<f32>(arg_0, 809f, -1000f), i32(-2147483648)), vec2<bool>(true, global0.x), arg_0), 1581f, global0.x, vec2<f32>(1651f, arg_1.x), Struct_1(u_input.e.x, vec3<f32>(1418f, arg_0, arg_1.x), u_input.b)), vec3<f32>(1881f, arg_0, 756f)), func_9(arg_0, global0.x, Struct_3(Struct_2(Struct_1(u_input.c, arg_1, u_input.b), Struct_1(u_input.a.x, arg_1, -20542i), vec2<bool>(true, true), arg_0), -1000f, false, vec2<f32>(-638f, -682f), Struct_1(1325u, vec3<f32>(arg_1.x, arg_1.x, 1224f), u_input.b)), arg_1), !vec2<bool>(global0.x, false), _wgslsmith_f_op_f32(floor(arg_1.x))), max(_wgslsmith_dot_vec2_i32(vec2<i32>(-8838i, -20250i), vec2<i32>(2147483647i, u_input.b)), i32(-1i) * -1i)).c, 230f), _wgslsmith_f_op_f32(ceil(arg_1.x)), false, arg_1.zy, Struct_1(1u, _wgslsmith_f_op_vec3_f32(-vec3<f32>(arg_1.x, -155f, _wgslsmith_f_op_f32(f32(-1f) * -507f))), ~(-33532i)));
    let var_1 = vec3<bool>(true, (global0.x & all(var_0.a.c)) && any(vec3<bool>(var_0.c, true, true)), false);
    var var_2 = Struct_5(Struct_3(Struct_2(func_9(320f, !global0.x, Struct_3(Struct_2(Struct_1(22642u, vec3<f32>(208f, arg_1.x, arg_0), 83356i), var_0.e, vec2<bool>(global0.x, var_0.a.c.x), -1000f), arg_1.x, var_0.a.c.x, var_0.a.b.b.xz, Struct_1(1u, vec3<f32>(1534f, arg_1.x, arg_1.x), u_input.b)), _wgslsmith_f_op_vec3_f32(-var_0.e.b)), func_3().b, !(!var_1.yz), -504f), func_7(var_1, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(-260f)) * var_0.a.b.b.x), var_0.a, 45207i).b.b.x, !global0.x, vec2<f32>(var_0.d.x, var_0.b), Struct_1(u_input.d, _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(vec3<f32>(-894f, var_0.b, arg_0) + var_0.a.b.b), vec3<f32>(139f, 666f, var_0.e.b.x), true)), func_3().a.c)));
    let var_3 = Struct_5(var_2.a);
    if (func_7(vec3<bool>(true, var_0.c, true), 2899f, Struct_2(Struct_1(_wgslsmith_mult_u32(1u, var_3.a.e.a) >> (_wgslsmith_add_u32(48898u, 21977u) % 32u), vec3<f32>(197f, arg_0, var_3.a.e.b.x), 31713i << (var_2.a.e.a % 32u)), var_3.a.a.a, func_7(var_1, var_3.a.d.x, func_4(), countOneBits(_wgslsmith_mult_i32(var_0.a.b.c, var_2.a.a.b.c))).c, -1713f), _wgslsmith_div_i32(-(func_6(vec2<u32>(var_2.a.a.a.a, var_0.e.a)) & max(var_0.e.c, 0i)), _wgslsmith_dot_vec2_i32(vec2<i32>(abs(var_0.e.c), _wgslsmith_clamp_i32(49950i, 2147483647i, -1i)), ~vec2<i32>(i32(-2147483648), var_0.e.c)))).c.x) {
        let var_4 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(137f - var_2.a.b)), arg_1.x) * var_3.a.d.x), _wgslsmith_f_op_f32(1f + _wgslsmith_f_op_f32(var_2.a.a.b.b.x + _wgslsmith_f_op_f32(select(var_2.a.a.b.b.x, _wgslsmith_f_op_f32(var_0.b + -1237f), false)))));
        var var_5 = -1315f;
        var_2 = Struct_5(var_3.a);
    }
    return Struct_3(var_2.a.a, var_2.a.d.x, var_0.a.c.x, _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(step(vec2<f32>(-643f, _wgslsmith_f_op_f32(arg_0 - arg_0)), func_2().b.zz)) * _wgslsmith_div_vec2_f32(_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(arg_1.xz - vec2<f32>(var_3.a.e.b.x, var_3.a.a.a.b.x)), var_0.d), var_3.a.e.b.xy)), var_0.a.b);
}

@compute
@workgroup_size(1)
fn main() {
    var var_0 = func_10(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_1(u_input.b, _wgslsmith_f_op_vec2_f32(vec2<f32>(-1286f, 2851f) * vec2<f32>(625f, 713f)), Struct_5(Struct_3(Struct_2(Struct_1(4294967295u, vec3<f32>(-1193f, -803f, 2233f), i32(-2147483648)), Struct_1(global1.x, vec3<f32>(-434f, -977f, 1108f), 1i), vec2<bool>(true, global0.x), 374f), -1157f, true, vec2<f32>(-622f, 779f), Struct_1(global1.x, vec3<f32>(-1630f, 1738f, 579f), -39095i))), true))))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(874f, 1345f, 1388f)))));
    var var_1 = Struct_2(func_5(), Struct_1(~_wgslsmith_div_u32(0u, var_0.a.b.a), _wgslsmith_f_op_vec3_f32(-vec3<f32>(337f, 974f, _wgslsmith_f_op_f32(1000f + 459f))), _wgslsmith_add_i32(~(i32(-2147483648)), u_input.b)), !var_0.a.c, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1276f + _wgslsmith_div_f32(_wgslsmith_f_op_f32(-1030f * -1000f), _wgslsmith_f_op_f32(-519f)))));
    for (var var_2 = 2147483647i; var_0.c; var_2 += 1i) {
        if (LOOP_COUNTERS[21u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
        let var_3 = Struct_4(vec2<i32>(0i, -13995i), Struct_1(37801u, var_1.b.b, 1i), Struct_3(var_0.a, _wgslsmith_f_op_f32(332f - var_0.e.b.x), !var_1.c.x, vec2<f32>(225f, _wgslsmith_f_op_f32(func_2().b.x * var_1.a.b.x)), func_2()));
        var var_4 = !(!global0.x);
        break;
    }
    global0 = func_7(vec3<bool>(var_0.c, !all(!vec2<bool>(var_1.c.x, false)), abs(-u_input.b) == -(~var_1.b.c)), _wgslsmith_f_op_f32(-var_1.b.b.x), func_10(460f, _wgslsmith_f_op_vec3_f32(-func_10(var_1.d, var_0.e.b).e.b)).a, _wgslsmith_mult_i32(_wgslsmith_dot_vec3_i32(_wgslsmith_clamp_vec3_i32(vec3<i32>(18800i, i32(-2147483648), u_input.b), vec3<i32>(u_input.b, var_0.a.a.c, -3677i), vec3<i32>(1i, var_0.a.a.c, u_input.b)) & -vec3<i32>(var_1.a.c, 10387i, var_1.a.c), vec3<i32>(42210i, firstTrailingBit(1i), max(i32(-2147483648), var_1.b.c))), func_10(var_1.a.b.x, var_0.e.b).a.b.c)).c;
    loop {
        if (LOOP_COUNTERS[22u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
        var var_2 = vec4<f32>(var_1.a.b.x, _wgslsmith_f_op_f32(trunc(func_10(func_10(_wgslsmith_f_op_f32(-1000f), _wgslsmith_f_op_vec3_f32(-vec3<f32>(674f, var_0.a.b.b.x, 236f))).a.b.b.x, vec3<f32>(-949f, 735f, _wgslsmith_f_op_f32(-var_1.b.b.x))).a.b.b.x)), _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_1(u_input.b ^ var_0.a.a.c, var_0.e.b.zy, Struct_5(Struct_3(var_0.a, var_1.d, var_1.c.x, var_1.a.b.zz, Struct_1(var_0.a.b.a, var_1.a.b, u_input.b))), 502f <= var_0.a.b.b.x))))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -414f)) * _wgslsmith_f_op_f32(abs(695f))) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -364f) * _wgslsmith_f_op_f32(-var_1.b.b.x)))));
        let var_3 = min(_wgslsmith_div_u32(14776u << (_wgslsmith_mod_u32(~var_1.a.a, _wgslsmith_mod_u32(13445u, u_input.e.x)) % 32u), abs(var_1.b.a) << (var_0.a.a.a % 32u)), 0u);
    }
    global0 = vec2<bool>(var_0.c, var_0.a.b.a < (func_3().a.a ^ 0u));
    let x = u_input.a;
    s_output = StorageBuffer(i32(-2147483648), func_2().b.x, var_1.b.b.x);
}

`;