export const input = [32,36,22,248,174,24,79,90,24,65,83,173,240,143,122,71,59,123,139,24,74,88,172,41,82,130,106,13,158,243,242,141,32,212,187,250,16,231,120,95,129,80,104,165,190,208,77,26,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [32,36,22,248,174,24,79,90,24,65,83,173,240,143,122,71,59,123,139,24,74,88,172,41,82,130,106,13,158,243,242,141,32,212,187,250,16,231,120,95,129,80,104,165,190,208,77,26,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[32,36,22,248,174,24,79,90,24,65,83,173,240,143,122,71,59,123,139,24,74,88,172,41,82,130,106,13,158,243,242,141,32,212,187,250,16,231,120,95,129,80,104,165,190,208,77,26]}
// Seed: 7685361164023055334

struct Struct_1 {
    a: f32,
    b: i32,
}

struct Struct_2 {
    a: i32,
    b: i32,
    c: vec4<i32>,
    d: Struct_1,
}

struct Struct_3 {
    a: vec3<f32>,
    b: bool,
    c: vec4<bool>,
    d: bool,
    e: Struct_2,
}

struct UniformBuffer {
    a: vec2<u32>,
    b: vec4<u32>,
    c: u32,
    d: i32,
    e: i32,
}

struct StorageBuffer {
    a: i32,
    b: vec3<f32>,
    c: i32,
    d: f32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<vec2<f32>, 16>;

var<private> global1: bool;

var<private> global2: array<Struct_2, 27> = array<Struct_2, 27>(Struct_2(i32(-2147483648), -1i, vec4<i32>(-1973i, -10655i, 0i, 1i), Struct_1(-799f, i32(-2147483648))), Struct_2(-90574i, 55574i, vec4<i32>(-41704i, -46561i, -29344i, 2147483647i), Struct_1(1000f, 13035i)), Struct_2(0i, -41969i, vec4<i32>(17686i, 0i, -33455i, 1i), Struct_1(538f, 0i)), Struct_2(-1i, 1i, vec4<i32>(-46940i, 10846i, i32(-2147483648), 45494i), Struct_1(568f, 14400i)), Struct_2(0i, 1i, vec4<i32>(39283i, 28070i, -1i, -1i), Struct_1(-1076f, 13162i)), Struct_2(-3769i, 1i, vec4<i32>(-1i, 24564i, 0i, -1224i), Struct_1(1082f, -17723i)), Struct_2(45934i, -34241i, vec4<i32>(17310i, 2147483647i, 14013i, -1i), Struct_1(653f, 2836i)), Struct_2(2147483647i, 31161i, vec4<i32>(-1i, i32(-2147483648), 14065i, -94i), Struct_1(-1000f, -2130i)), Struct_2(-8442i, -9230i, vec4<i32>(2147483647i, 1i, 10922i, -1i), Struct_1(902f, -17154i)), Struct_2(0i, -25110i, vec4<i32>(-20809i, 13257i, 2147483647i, 1i), Struct_1(-791f, 1i)), Struct_2(50756i, -9186i, vec4<i32>(1i, -1347i, -1i, -12732i), Struct_1(-1667f, -56757i)), Struct_2(i32(-2147483648), -42222i, vec4<i32>(0i, -5976i, -1i, -3379i), Struct_1(1000f, 38939i)), Struct_2(-49363i, -2264i, vec4<i32>(i32(-2147483648), 17222i, 499i, 0i), Struct_1(-555f, 11700i)), Struct_2(-19440i, -3506i, vec4<i32>(-1i, -1i, 14585i, 17293i), Struct_1(-733f, 0i)), Struct_2(19469i, 2147483647i, vec4<i32>(9925i, 2147483647i, 514i, -5655i), Struct_1(930f, 2859i)), Struct_2(-19637i, 0i, vec4<i32>(1i, 14510i, 33345i, 2147483647i), Struct_1(-1153f, 1i)), Struct_2(46856i, 1i, vec4<i32>(-7583i, 0i, 2147483647i, 0i), Struct_1(395f, 0i)), Struct_2(29456i, -1i, vec4<i32>(1i, -10768i, 52951i, 2147483647i), Struct_1(-307f, -28733i)), Struct_2(16680i, 0i, vec4<i32>(7807i, 1i, -29828i, 0i), Struct_1(1199f, -1170i)), Struct_2(-58532i, 0i, vec4<i32>(0i, 67414i, 58628i, 1i), Struct_1(-274f, i32(-2147483648))), Struct_2(35153i, -8293i, vec4<i32>(i32(-2147483648), 0i, 2147483647i, i32(-2147483648)), Struct_1(1441f, 29883i)), Struct_2(3020i, 2147483647i, vec4<i32>(0i, 1i, -70867i, -12219i), Struct_1(446f, i32(-2147483648))), Struct_2(-41509i, 1i, vec4<i32>(i32(-2147483648), -1i, -12478i, 0i), Struct_1(1624f, 14630i)), Struct_2(-1i, -30444i, vec4<i32>(15688i, i32(-2147483648), i32(-2147483648), 1i), Struct_1(-1000f, -54921i)), Struct_2(-34033i, 14954i, vec4<i32>(-1i, 49241i, 2147483647i, i32(-2147483648)), Struct_1(-205f, -1i)), Struct_2(33054i, -1i, vec4<i32>(-5368i, 12877i, i32(-2147483648), 1i), Struct_1(2287f, i32(-2147483648))), Struct_2(2147483647i, 0i, vec4<i32>(0i, -1i, 1i, i32(-2147483648)), Struct_1(1132f, 1i)));

var<private> LOOP_COUNTERS: array<u32, 21>;

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn func_6(arg_0: Struct_2, arg_1: vec4<i32>, arg_2: u32, arg_3: vec3<u32>) -> vec4<bool> {
    global1 = !all(vec3<bool>(any(select(vec4<bool>(true, false, false, false), vec4<bool>(false, false, false, true), true)), select(21107u <= arg_3.x, true, true), all(vec4<bool>(true, true, true, true))));
    global1 = reverseBits(~(~(~3413u))) >= abs(u_input.c);
    for (; ; ) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
    }
    global1 = false;
    global0 = array<vec2<f32>, 16>();
    return select(vec4<bool>(true, true, true, true), vec4<bool>(true, true, any(vec2<bool>(true, true)), !any(vec2<bool>(true, false))), select(true, false, !(!any(vec4<bool>(true, false, false, true)))));
}

fn func_5() -> i32 {
    var var_0 = abs(~(~1u));
    let var_1 = countOneBits(~(max(vec3<i32>(i32(-2147483648), 1i, u_input.d), vec3<i32>(1i, 36312i, u_input.e) | vec3<i32>(u_input.e, u_input.e, u_input.d)) << (vec3<u32>(~79650u, _wgslsmith_mult_u32(29366u, u_input.c), ~0u) % vec3<u32>(32u))));
    let var_2 = select(max(vec4<u32>(u_input.a.x, u_input.b.x ^ 1u, 0u, (u_input.b.x >> (u_input.c % 32u)) & u_input.c), _wgslsmith_add_vec4_u32(~firstLeadingBit(u_input.b), _wgslsmith_add_vec4_u32(~vec4<u32>(86465u, u_input.a.x, u_input.a.x, u_input.b.x), ~u_input.b))), abs(~_wgslsmith_sub_vec4_u32(abs(u_input.b), u_input.b)), vec4<bool>(all(vec2<bool>(true, true)), all(vec2<bool>(true, true)), all(func_6(global2[_wgslsmith_index_u32(37684u, 27u)], ~vec4<i32>(12407i, var_1.x, -13224i, -1i), firstLeadingBit(u_input.c), u_input.b.wyy)), 1i <= var_1.x));
    let var_3 = func_6(Struct_2(select(u_input.e, reverseBits(u_input.d), all(select(vec4<bool>(true, false, false, true), vec4<bool>(true, false, true, false), vec4<bool>(true, false, false, false)))), abs(max(1i, _wgslsmith_dot_vec4_i32(vec4<i32>(u_input.d, u_input.e, var_1.x, 0i), vec4<i32>(1i, var_1.x, 0i, -8570i)))), vec4<i32>(countOneBits(var_1.x), var_1.x, ~_wgslsmith_dot_vec4_i32(vec4<i32>(-10977i, u_input.d, 9167i, 1i), vec4<i32>(20480i, i32(-2147483648), u_input.d, -1i)), firstLeadingBit(-14043i)), Struct_1(-952f, ~(-86931i))), ~vec4<i32>(1i, 39606i, var_1.x, -(~(-1i))), ~(~var_2.x), vec3<u32>(20129u | ~(~var_2.x), 21817u, _wgslsmith_dot_vec3_u32(~var_2.wxy, vec3<u32>(1u, 0u, 4944u)) & (0u >> (1u % 32u))));
    switch (countOneBits(16587i)) {
        case -1i: {
            let var_4 = vec2<bool>(!(~var_2.x < _wgslsmith_clamp_u32(24165u, 4294967295u, var_2.x)) && false, all(select(!(!vec4<bool>(true, true, var_3.x, false)), var_3, var_3)));
            let var_5 = Struct_2(i32(-2147483648), -(~reverseBits(-28797i)) | (u_input.d >> (var_2.x % 32u)), _wgslsmith_clamp_vec4_i32(reverseBits(vec4<i32>(var_1.x >> (25238u % 32u), min(var_1.x, 2147483647i), -1i, 1i)), vec4<i32>(var_1.x, i32(-2147483648), -_wgslsmith_mult_i32(var_1.x, 2147483647i), _wgslsmith_mult_i32(var_1.x, u_input.e) | -48680i), ~_wgslsmith_div_vec4_i32(-vec4<i32>(58080i, 1653i, u_input.e, 2147483647i), -vec4<i32>(0i, var_1.x, 2147483647i, 1i))), Struct_1(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(1000f * _wgslsmith_f_op_f32(step(-492f, -539f))))), _wgslsmith_mod_i32(max(-49666i, -8716i), 13817i)));
        }
        default: {
        }
    }
    return 3558i;
}

fn func_7(arg_0: bool, arg_1: f32, arg_2: vec3<u32>, arg_3: i32) -> Struct_1 {
    global1 = true;
    if (any(!(!(!(!vec3<bool>(false, true, arg_0)))))) {
    }
    let var_0 = _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(-969f, _wgslsmith_f_op_f32(-_wgslsmith_div_f32(229f, 608f)), 1805f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -792f) * -242f)) + _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_1, arg_1, arg_1, -970f)) + vec4<f32>(arg_1, arg_1, 1000f, arg_1)), vec4<f32>(_wgslsmith_f_op_f32(-arg_1), _wgslsmith_f_op_f32(arg_1 - 217f), arg_1, _wgslsmith_f_op_f32(arg_1 + arg_1)))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(arg_1, arg_1, 1125f, 1090f) * vec4<f32>(-139f, 704f, arg_1, arg_1))) - _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(1122f, arg_1, 1473f, arg_1)))) * vec4<f32>(arg_1, arg_1, _wgslsmith_f_op_f32(select(-1162f, -1545f, arg_0)), _wgslsmith_f_op_f32(1f - -361f))));
    var var_1 = Struct_2(-((i32(-1i) * -978i) << (firstTrailingBit(4294967295u) % 32u)), i32(-1i) * -firstLeadingBit(arg_3 >> (u_input.b.x % 32u)), vec4<i32>(_wgslsmith_dot_vec3_i32(-vec3<i32>(u_input.d, arg_3, -27368i), countOneBits(vec3<i32>(0i, arg_3, u_input.d))), arg_3, arg_3, reverseBits(_wgslsmith_add_i32(arg_3, u_input.e))) >> (vec4<u32>(arg_2.x, ~arg_2.x, (15970u ^ u_input.a.x) | u_input.a.x, ~max(27269u, arg_2.x)) % vec4<u32>(32u)), Struct_1(_wgslsmith_f_op_f32(floor(_wgslsmith_div_f32(_wgslsmith_f_op_f32(sign(var_0.x)), _wgslsmith_f_op_f32(-var_0.x)))), -u_input.e));
    for (var var_2 = 59514i; ; var_1 = Struct_2(var_1.c.x, _wgslsmith_clamp_i32(u_input.d, -1i, 2147483647i), var_1.c, Struct_1(arg_1, -var_1.b))) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        if (!(!(true & all(!vec3<bool>(arg_0, arg_0, false))))) {
            global1 = true;
            let var_3 = global2[_wgslsmith_index_u32(_wgslsmith_sub_u32(_wgslsmith_div_u32(6877u, firstLeadingBit(1u)), abs(u_input.c)), 27u)];
            let var_4 = Struct_2(_wgslsmith_clamp_i32(arg_3, -(~1i << (_wgslsmith_mod_u32(arg_2.x, 0u) % 32u)), 14868i), -31880i, -min(-vec4<i32>(var_3.b, 2147483647i, arg_3, -1i), var_1.c) << ((_wgslsmith_clamp_vec4_u32(~vec4<u32>(4294967295u, arg_2.x, arg_2.x, u_input.b.x), ~u_input.b, _wgslsmith_div_vec4_u32(u_input.b, u_input.b)) ^ u_input.b) % vec4<u32>(32u)), Struct_1(_wgslsmith_f_op_f32(-var_3.d.a), -arg_3));
            var var_5 = Struct_2(~var_1.b, func_5(), (-_wgslsmith_clamp_vec4_i32(vec4<i32>(i32(-2147483648), 13838i, u_input.e, var_3.d.b), vec4<i32>(2147483647i, 17108i, var_4.c.x, var_3.a), var_1.c) ^ var_1.c) ^ var_3.c, Struct_1(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-862f), var_1.d.a)))), (1062i >> (0u % 32u)) ^ var_1.c.x));
            global1 = arg_0;
        }
        let var_3 = _wgslsmith_f_op_f32(418f + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1997f + var_1.d.a)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -671f) * _wgslsmith_f_op_f32(-1314f - var_0.x)))) * _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(var_1.d.a)))))));
    }
    return Struct_1(2576f, select(u_input.d, firstTrailingBit(countOneBits(38996i ^ u_input.d)), _wgslsmith_div_f32(_wgslsmith_f_op_f32(floor(var_1.d.a)), _wgslsmith_f_op_f32(step(209f, var_1.d.a))) != -192f));
}

fn func_4(arg_0: f32, arg_1: vec4<bool>, arg_2: Struct_3, arg_3: Struct_3) -> Struct_3 {
    switch (_wgslsmith_mult_i32(_wgslsmith_add_i32(~(-1i), ~44201i), -7585i)) {
        case i32(-2147483648): {
            let var_0 = _wgslsmith_clamp_u32(0u, ~(~(~4294967295u)), ~u_input.b.x) ^ u_input.a.x;
            global0 = array<vec2<f32>, 16>();
            global1 = false;
            for (var var_1 = -35250i; !all(vec2<bool>(any(vec4<bool>(arg_1.x, arg_2.b, arg_1.x, arg_3.d)), true)); var_1 += 1i) {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
                global0 = array<vec2<f32>, 16>();
                global2 = array<Struct_2, 27>();
                global1 = !(!(!(!arg_1.x)));
            }
        }
        case -1i: {
            return arg_3;
        }
        case 0i: {
            let var_0 = func_7(!all(vec2<bool>(arg_3.e.d.a <= 1210f, true)), _wgslsmith_div_f32(_wgslsmith_f_op_f32(ceil(arg_0)), arg_0), u_input.b.zyz, abs(_wgslsmith_div_i32(~func_5(), _wgslsmith_mult_i32(~arg_3.e.c.x, -arg_3.e.d.b))));
            let var_1 = u_input.b.x;
            let var_2 = var_0;
            global2 = array<Struct_2, 27>();
            var var_3 = Struct_3(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(var_2.a, -2120f, 3452f))) - vec3<f32>(_wgslsmith_f_op_f32(select(arg_3.e.d.a, -611f, true)), arg_0, _wgslsmith_f_op_f32(ceil(-562f))))), arg_1.x, select(!func_6(arg_3.e, ~vec4<i32>(-33758i, -23103i, var_0.b, -6567i), select(u_input.b.x, var_1, true), vec3<u32>(1u, 1u, 1u)), !vec4<bool>(true, any(arg_1.zww), arg_2.e.d.b == 2147483647i, arg_2.d), any(vec2<bool>(var_1 <= 46436u, true))), true, arg_2.e);
        }
        default: {
            loop {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
                var var_0 = arg_3.e;
                var var_1 = vec3<bool>(true, true, arg_3.b || (func_6(Struct_2(-1i, i32(-2147483648), arg_2.e.c, Struct_1(1234f, u_input.e)), ~vec4<i32>(-5945i, arg_3.e.b, i32(-2147483648), 1i), ~u_input.c, _wgslsmith_add_vec3_u32(vec3<u32>(1u, 24125u, 0u), u_input.b.wzx)).x | arg_3.d));
            }
            if (1u > u_input.b.x) {
                global0 = array<vec2<f32>, 16>();
                let var_0 = select(func_6(arg_3.e, -arg_2.e.c, 1u, u_input.b.wxx), select(vec4<bool>(any(func_6(Struct_2(-43940i, u_input.e, arg_3.e.c, Struct_1(1866f, -21708i)), vec4<i32>(u_input.d, arg_2.e.a, u_input.e, i32(-2147483648)), 5580u, u_input.b.zzz)), func_6(global2[_wgslsmith_index_u32(1u, 27u)], arg_3.e.c >> (vec4<u32>(u_input.c, u_input.c, 1u, u_input.b.x) % vec4<u32>(32u)), reverseBits(1u), vec3<u32>(0u, u_input.a.x, u_input.c)).x, true, true), arg_2.c, !arg_1), vec4<bool>(~(u_input.c & u_input.a.x) != firstLeadingBit(1u), !all(arg_1.xxy) & true, any(select(vec2<bool>(arg_2.d, arg_1.x), vec2<bool>(false, arg_2.c.x), true)), 1u <= u_input.a.x));
            }
            for (var var_0 = 25837i; false; global2 = array<Struct_2, 27>()) {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                global0 = array<vec2<f32>, 16>();
                let var_1 = _wgslsmith_sub_vec2_i32(min(arg_2.e.c.zw, _wgslsmith_sub_vec2_i32(arg_3.e.c.zw, arg_2.e.c.zw)), -_wgslsmith_sub_vec2_i32(vec2<i32>(arg_3.e.b, abs(1i)), _wgslsmith_clamp_vec2_i32(_wgslsmith_sub_vec2_i32(vec2<i32>(arg_2.e.c.x, 76318i), arg_3.e.c.wy), _wgslsmith_mod_vec2_i32(vec2<i32>(u_input.d, 0i), vec2<i32>(arg_3.e.a, arg_2.e.c.x)), ~arg_2.e.c.yy)));
                var var_2 = (arg_2.e.c.zx | vec2<i32>(var_1.x, _wgslsmith_mult_i32(arg_2.e.d.b, var_1.x) | 1i)) | countOneBits(vec2<i32>(-arg_3.e.b, firstLeadingBit(min(2147483647i, arg_2.e.d.b))));
                var_2 = ~arg_3.e.c.zw;
            }
            loop {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                var var_0 = _wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(-arg_2.a.x), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-arg_3.e.d.a)))), _wgslsmith_f_op_f32(-365f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(arg_0 * 644f))) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -614f)))) * _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(min(vec4<f32>(616f, -420f, 809f, arg_0), vec4<f32>(arg_2.a.x, arg_3.a.x, arg_3.e.d.a, 420f))), _wgslsmith_f_op_vec4_f32(sign(vec4<f32>(456f, arg_0, arg_3.a.x, arg_3.a.x))))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(274f, -1001f, -1028f, arg_3.a.x) + vec4<f32>(-2477f, -441f, arg_0, arg_0)) * _wgslsmith_div_vec4_f32(vec4<f32>(arg_2.e.d.a, 534f, 1000f, -1077f), vec4<f32>(arg_3.e.d.a, -1578f, arg_3.e.d.a, 609f))))), _wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(673f, arg_2.e.d.a, 1960f, arg_2.e.d.a)))))));
                let var_1 = func_7(all(select(!func_6(global2[_wgslsmith_index_u32(56391u, 27u)], arg_3.e.c, u_input.b.x, vec3<u32>(25614u, 0u, 0u)).zw, arg_3.c.yw, true)), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(select(func_7(arg_3.b, var_0.x, select(vec3<u32>(u_input.c, 4294967295u, 41253u), vec3<u32>(11683u, u_input.a.x, 35607u), arg_1.wzz), -45744i).a, _wgslsmith_f_op_f32(-243f), !any(vec4<bool>(false, arg_2.d, false, arg_2.d)))), _wgslsmith_f_op_f32(-arg_0))), u_input.b.yzy, ~arg_2.e.d.b);
                var var_2 = Struct_2(_wgslsmith_clamp_i32(_wgslsmith_mult_i32(i32(-2147483648), 1i & u_input.d), 1i, _wgslsmith_dot_vec4_i32(vec4<i32>(u_input.e, ~1i, -1i, i32(-1i) * -1i), vec4<i32>(-arg_2.e.b, _wgslsmith_mod_i32(var_1.b, arg_2.e.a), -51934i, 31028i))), u_input.e ^ (arg_3.e.c.x << (abs(~u_input.c) % 32u)), arg_3.e.c << (_wgslsmith_sub_vec4_u32(~_wgslsmith_mod_vec4_u32(u_input.b, u_input.b), u_input.b) % vec4<u32>(32u)), Struct_1(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(exp2(var_0.x)) + arg_0), _wgslsmith_add_i32(_wgslsmith_sub_i32(abs(arg_2.e.b), ~arg_2.e.a), u_input.e)));
                global1 = !(-17039i >= (_wgslsmith_add_i32(max(u_input.d, -15553i), ~0i) << (46345u % 32u)));
            }
        }
    }
    global2 = array<Struct_2, 27>();
    for (var var_0 = u_input.e; ; global0 = array<vec2<f32>, 16>()) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        break;
    }
    var var_0 = true;
    global1 = true;
    return arg_2;
}

fn func_8(arg_0: Struct_3, arg_1: vec3<u32>) -> Struct_3 {
    var var_0 = ~u_input.e;
    global0 = array<vec2<f32>, 16>();
    return Struct_3(_wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-arg_0.a)) * _wgslsmith_f_op_vec3_f32(trunc(arg_0.a))))), !(!(true && !arg_0.c.x)), func_6(Struct_2(~u_input.d, func_5(), -vec4<i32>(0i, u_input.d, u_input.e, 10424i) & -arg_0.e.c, Struct_1(_wgslsmith_f_op_f32(trunc(-316f)), _wgslsmith_dot_vec2_i32(arg_0.e.c.wx, arg_0.e.c.yy))), firstLeadingBit(~(-arg_0.e.c)), u_input.b.x, vec3<u32>(55041u, u_input.b.x, _wgslsmith_dot_vec4_u32(firstLeadingBit(vec4<u32>(arg_1.x, 0u, arg_1.x, u_input.b.x)), firstLeadingBit(u_input.b)))), (u_input.e << (~select(0u, 1u, arg_0.d) % 32u)) >= max(-45249i, _wgslsmith_dot_vec4_i32(arg_0.e.c, vec4<i32>(24493i, -3541i, u_input.d, -1i))), Struct_2(-2147483647i, -39654i, select(~arg_0.e.c, reverseBits(arg_0.e.c) & (arg_0.e.c ^ arg_0.e.c), arg_0.c.x), arg_0.e.d));
}

fn func_9(arg_0: Struct_3) -> vec4<i32> {
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        var var_0 = vec2<f32>(_wgslsmith_div_f32(arg_0.e.d.a, arg_0.e.d.a), _wgslsmith_f_op_f32(_wgslsmith_div_f32(func_4(_wgslsmith_f_op_f32(f32(-1f) * -139f), !arg_0.c, func_8(Struct_3(arg_0.a, arg_0.b, vec4<bool>(false, arg_0.b, false, true), arg_0.b, global2[_wgslsmith_index_u32(u_input.c, 27u)]), vec3<u32>(1u, u_input.a.x, u_input.c)), func_8(arg_0, vec3<u32>(u_input.c, 37288u, u_input.c))).e.d.a, arg_0.a.x) - 340f));
        if (true) {
            var_0 = vec2<f32>(arg_0.e.d.a, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-func_8(func_4(var_0.x, arg_0.c, Struct_3(arg_0.a, arg_0.b, arg_0.c, arg_0.d, global2[_wgslsmith_index_u32(7009u, 27u)]), Struct_3(arg_0.a, true, arg_0.c, arg_0.b, global2[_wgslsmith_index_u32(u_input.b.x, 27u)])), ~u_input.b.zwx).e.d.a)));
            global2 = array<Struct_2, 27>();
            let var_1 = max(~vec3<u32>(1u, 85885u, _wgslsmith_sub_u32(0u, u_input.b.x)), abs(select(u_input.b.zyw, ~u_input.b.xzx, !arg_0.c.zwz))) | u_input.b.yyz;
        }
        continue;
    }
    loop {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        break;
    }
    var var_0 = ((arg_0.e.c & _wgslsmith_sub_vec4_i32(arg_0.e.c, vec4<i32>(22323i, -50933i, u_input.d, i32(-2147483648)))) << (min(u_input.b, vec4<u32>(41086u, 4294967295u, u_input.b.x, 50567u)) % vec4<u32>(32u))) << (vec4<u32>(72808u & (max(45591u, 13984u) << (u_input.b.x % 32u)), 34119u, 1u, ~select(1u, firstLeadingBit(u_input.a.x), true)) % vec4<u32>(32u));
    loop {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        global1 = true;
        var var_1 = u_input.a.x;
    }
    if (arg_0.b) {
        if (true) {
        }
        let var_1 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(1444f, arg_0.a.x, arg_0.e.d.a, arg_0.e.d.a)), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-1057f, arg_0.a.x, -277f, arg_0.a.x)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(755f, arg_0.a.x, arg_0.e.d.a, arg_0.a.x)))))));
        for (var var_2 = 1i; var_2 >= 0i; var_2 -= 1i) {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
            global1 = all(arg_0.c.wyw);
        }
    }
    return select(-func_4(_wgslsmith_f_op_f32(f32(-1f) * -134f), vec4<bool>(false, any(vec2<bool>(arg_0.c.x, true)), arg_0.d, true), Struct_3(vec3<f32>(-549f, -942f, 1463f), arg_0.b, arg_0.c, false, Struct_2(var_0.x, arg_0.e.d.b, arg_0.e.c, arg_0.e.d)), func_8(Struct_3(vec3<f32>(arg_0.a.x, 611f, arg_0.e.d.a), true, arg_0.c, arg_0.b, global2[_wgslsmith_index_u32(u_input.b.x, 27u)]), u_input.b.wyz)).e.c, func_8(arg_0, _wgslsmith_sub_vec3_u32(vec3<u32>(u_input.b.x, 62335u, u_input.a.x) ^ reverseBits(u_input.b.yyx), _wgslsmith_div_vec3_u32(abs(vec3<u32>(42020u, u_input.b.x, u_input.a.x)), ~vec3<u32>(0u, 87907u, u_input.c)))).e.c, !arg_0.c);
}

fn func_3(arg_0: Struct_1) -> vec4<bool> {
    let var_0 = ~func_9(func_8(func_4(arg_0.a, vec4<bool>(false, false, false, true), Struct_3(vec3<f32>(-163f, arg_0.a, arg_0.a), true, vec4<bool>(false, true, true, false), false, global2[_wgslsmith_index_u32(26708u, 27u)]), Struct_3(vec3<f32>(arg_0.a, 532f, 932f), false, vec4<bool>(true, false, true, true), false, global2[_wgslsmith_index_u32(u_input.a.x, 27u)])), _wgslsmith_sub_vec3_u32(u_input.b.xwy, vec3<u32>(u_input.a.x, 28129u, u_input.c)) >> (vec3<u32>(u_input.a.x, u_input.a.x, 1u) % vec3<u32>(32u))));
    global1 = !any(!vec4<bool>(true, u_input.c > 4294967295u, true, true));
    for (var var_1 = 2147483647i; false; var_1 -= 1i) {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        var var_2 = global2[_wgslsmith_index_u32(_wgslsmith_dot_vec2_u32(vec2<u32>(0u, u_input.a.x), ~vec2<u32>(_wgslsmith_mult_u32(4294967295u, u_input.c), 29269u)), 27u)];
        break;
    }
    global1 = all(vec2<bool>(all(select(select(vec4<bool>(true, false, true, false), vec4<bool>(false, false, true, false), vec4<bool>(true, true, true, false)), vec4<bool>(true, false, false, true), vec4<bool>(true, true, false, true))), func_6(func_8(Struct_3(vec3<f32>(arg_0.a, arg_0.a, -1000f), true, vec4<bool>(false, true, false, true), false, Struct_2(arg_0.b, 1i, vec4<i32>(-33505i, u_input.e, u_input.e, 21924i), Struct_1(arg_0.a, 29185i))), ~u_input.b.yzz).e, -vec4<i32>(arg_0.b, -1i, u_input.e, var_0.x), u_input.c, vec3<u32>(7645u, 52657u, 1u) & ~u_input.b.yzz).x));
    global1 = any(func_4(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1897f) + 379f), vec4<bool>(true, true, true, true), func_8(Struct_3(vec3<f32>(arg_0.a, 881f, arg_0.a), true, vec4<bool>(true, true, true, false), true, global2[_wgslsmith_index_u32(u_input.a.x, 27u)]), countOneBits(vec3<u32>(10278u, u_input.b.x, u_input.c))), Struct_3(vec3<f32>(arg_0.a, -877f, arg_0.a), true, vec4<bool>(true, true, true, true), true, func_8(Struct_3(vec3<f32>(arg_0.a, arg_0.a, 1312f), true, vec4<bool>(true, false, false, false), false, global2[_wgslsmith_index_u32(u_input.c, 27u)]), vec3<u32>(u_input.c, u_input.b.x, 1u)).e)).c) && true;
    return vec4<bool>(true, (-(~18400i) & -(var_0.x | arg_0.b)) >= ~_wgslsmith_sub_i32(23307i, -26556i), !any(func_6(Struct_2(3778i, 2147483647i, vec4<i32>(2554i, u_input.e, -10820i, arg_0.b), Struct_1(arg_0.a, 37246i)), var_0, countOneBits(u_input.b.x), u_input.b.wwy).yzy), func_8(func_4(_wgslsmith_div_f32(1875f, arg_0.a), vec4<bool>(func_8(Struct_3(vec3<f32>(-936f, arg_0.a, -1323f), true, vec4<bool>(true, true, true, false), false, global2[_wgslsmith_index_u32(u_input.c, 27u)]), vec3<u32>(18567u, 18195u, u_input.c)).b, true, select(true, true, false), func_4(arg_0.a, vec4<bool>(false, false, true, true), Struct_3(vec3<f32>(arg_0.a, arg_0.a, arg_0.a), true, vec4<bool>(true, false, false, false), false, Struct_2(0i, 30401i, var_0, Struct_1(arg_0.a, var_0.x))), Struct_3(vec3<f32>(arg_0.a, -551f, 1177f), false, vec4<bool>(true, true, true, false), false, global2[_wgslsmith_index_u32(1u, 27u)])).c.x), Struct_3(_wgslsmith_f_op_vec3_f32(vec3<f32>(arg_0.a, -630f, -779f) - vec3<f32>(408f, arg_0.a, arg_0.a)), false, func_4(arg_0.a, vec4<bool>(false, false, true, true), Struct_3(vec3<f32>(-1004f, 444f, arg_0.a), true, vec4<bool>(false, true, false, true), true, global2[_wgslsmith_index_u32(u_input.c, 27u)]), Struct_3(vec3<f32>(arg_0.a, 393f, 1696f), false, vec4<bool>(false, true, true, false), true, Struct_2(-1i, -49255i, vec4<i32>(var_0.x, u_input.d, 1i, arg_0.b), Struct_1(718f, arg_0.b)))).c, true, Struct_2(0i, arg_0.b, vec4<i32>(u_input.e, u_input.d, -5737i, -36716i), arg_0)), Struct_3(_wgslsmith_f_op_vec3_f32(sign(vec3<f32>(arg_0.a, -1794f, 1543f))), select(false, true, true), vec4<bool>(true, true, true, true), true, func_8(Struct_3(vec3<f32>(arg_0.a, arg_0.a, arg_0.a), true, vec4<bool>(true, false, true, true), false, global2[_wgslsmith_index_u32(1u, 27u)]), u_input.b.wwy).e)), _wgslsmith_div_vec3_u32(u_input.b.zxx, vec3<u32>(0u, _wgslsmith_clamp_u32(u_input.b.x, 56111u, 38612u), u_input.c))).d);
}

fn func_2() -> Struct_2 {
    if (any(func_3(Struct_1(_wgslsmith_f_op_f32(f32(-1f) * -1319f), ~18018i))) || !(u_input.e >= -1i)) {
        global2 = array<Struct_2, 27>();
        for (var var_0 = 1i; any(!vec3<bool>(any(vec4<bool>(true, true, true, true)), select(all(vec3<bool>(true, false, true)), any(vec2<bool>(false, true)), true), false)); var_0 -= 1i) {
            if (LOOP_COUNTERS[12u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
            var_0 = select(_wgslsmith_clamp_i32(_wgslsmith_dot_vec4_i32(select(vec4<i32>(0i, u_input.d, i32(-2147483648), -89457i), _wgslsmith_sub_vec4_i32(vec4<i32>(1i, u_input.d, 27550i, 15279i), vec4<i32>(-14916i, u_input.e, u_input.d, u_input.e)), vec4<bool>(true, true, true, true)), vec4<i32>(abs(u_input.d), _wgslsmith_dot_vec4_i32(vec4<i32>(1i, 1i, -48703i, -25283i), vec4<i32>(0i, 12639i, -1i, u_input.e)), ~(-1i), ~(-1585i))), func_7(_wgslsmith_f_op_f32(-1348f * 1182f) != _wgslsmith_f_op_f32(floor(-899f)), _wgslsmith_f_op_f32(-1008f - -331f), vec3<u32>(u_input.b.x ^ 60815u, 21380u, _wgslsmith_add_u32(u_input.b.x, 1u)), -(~u_input.d)).b, -6388i), 21757i, true);
        }
        let var_0 = vec4<f32>(_wgslsmith_f_op_f32(step(func_4(-237f, select(vec4<bool>(true, false, true, false), vec4<bool>(true, true, true, true), func_8(Struct_3(vec3<f32>(-1165f, 1445f, -1946f), false, vec4<bool>(false, false, true, true), false, global2[_wgslsmith_index_u32(14162u, 27u)]), vec3<u32>(u_input.a.x, 7153u, u_input.c)).c), func_8(func_8(Struct_3(vec3<f32>(245f, -2661f, 813f), true, vec4<bool>(true, false, false, false), true, global2[_wgslsmith_index_u32(u_input.c, 27u)]), vec3<u32>(u_input.c, 0u, 87980u)), _wgslsmith_clamp_vec3_u32(u_input.b.xzz, vec3<u32>(1u, u_input.a.x, 16731u), u_input.b.wyz)), Struct_3(_wgslsmith_f_op_vec3_f32(round(vec3<f32>(-534f, 694f, 1659f))), any(vec3<bool>(false, false, false)), select(vec4<bool>(false, true, true, false), vec4<bool>(true, true, false, true), vec4<bool>(true, true, true, false)), all(vec4<bool>(false, false, true, false)), global2[_wgslsmith_index_u32(min(u_input.c, u_input.c), 27u)])).e.d.a, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(func_7(true, -617f, u_input.b.xyx, 0i).a + _wgslsmith_f_op_f32(1918f * -1000f)) + _wgslsmith_f_op_f32(func_7(true, 413f, u_input.b.xzz, u_input.d).a * _wgslsmith_f_op_f32(min(-486f, -342f)))))), _wgslsmith_f_op_f32(-502f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-689f) - _wgslsmith_f_op_f32(trunc(-817f)))) * _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-765f - 775f)), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-1528f), _wgslsmith_f_op_f32(step(-377f, -1000f)), true)))), 361f);
    }
    let var_0 = Struct_3(_wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(min(vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -498f), _wgslsmith_f_op_f32(round(-102f)), _wgslsmith_f_op_f32(-809f - -478f)), vec3<f32>(_wgslsmith_f_op_f32(trunc(839f)), _wgslsmith_f_op_f32(-347f + 315f), 1673f))), _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(select(_wgslsmith_div_vec3_f32(vec3<f32>(533f, 1191f, 1510f), vec3<f32>(811f, 1624f, 376f)), _wgslsmith_f_op_vec3_f32(-vec3<f32>(-353f, 797f, 982f)), true)), _wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1112f, 1061f, -1711f)))), func_6(global2[_wgslsmith_index_u32(_wgslsmith_dot_vec4_u32(u_input.b, vec4<u32>(59283u, u_input.a.x, 1u, 26945u)), 27u)], vec4<i32>(u_input.e, -9667i, u_input.d, -10632i), _wgslsmith_mod_u32(u_input.b.x, u_input.a.x), ~u_input.b.xzw).x)))), true, vec4<bool>((~32451u <= u_input.b.x) & (func_3(Struct_1(1000f, u_input.e)).x || any(vec2<bool>(true, true))), all(func_3(func_4(-802f, vec4<bool>(false, false, true, true), Struct_3(vec3<f32>(-1058f, 2852f, 508f), true, vec4<bool>(true, false, false, false), false, Struct_2(2147483647i, -47176i, vec4<i32>(u_input.d, 1i, i32(-2147483648), i32(-2147483648)), Struct_1(401f, 20010i))), Struct_3(vec3<f32>(879f, -957f, 888f), true, vec4<bool>(true, true, true, false), true, global2[_wgslsmith_index_u32(51027u, 27u)])).e.d).wz), (func_7(true, -2148f, u_input.b.wyy, u_input.d).a > _wgslsmith_f_op_f32(max(490f, -354f))) == true, !(~u_input.d != -2147483647i)), any(vec2<bool>(func_3(func_7(false, -156f, vec3<u32>(26125u, u_input.c, u_input.a.x), u_input.e)).x, false)), Struct_2(func_5(), 2147483647i, ~_wgslsmith_div_vec4_i32(vec4<i32>(i32(-2147483648), u_input.e, u_input.e, -1i), reverseBits(vec4<i32>(1i, 26205i, u_input.e, 1878i))), Struct_1(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-840f + 903f))), -1i)));
    var var_1 = select(var_0.c.ywz, !(!var_0.c.www), true);
    for (var var_2 = -57068i; !(!(!var_1.x)); ) {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        global0 = array<vec2<f32>, 16>();
    }
    global2 = array<Struct_2, 27>();
    return Struct_2(countOneBits(var_0.e.c.x), reverseBits(i32(-1i) * -var_0.e.d.b), vec4<i32>(6825i, abs(u_input.d), u_input.e, _wgslsmith_mod_i32(1157i, var_0.e.c.x)), func_8(Struct_3(vec3<f32>(var_0.a.x, 2090f, var_0.a.x), false, vec4<bool>(func_8(var_0, vec3<u32>(68994u, u_input.c, 4294967295u)).b, all(var_0.c.zz), var_1.x || true, true), var_1.x, var_0.e), ~(vec3<u32>(1u, u_input.c, 4294967295u) << (u_input.b.wxz % vec3<u32>(32u))) ^ ~u_input.b.zzy).e.d);
}

fn func_1() -> bool {
    switch (-1i) {
        case 1i: {
            let var_0 = Struct_1(_wgslsmith_f_op_f32(-1330f), 1399i);
            var var_1 = func_2();
            var var_2 = _wgslsmith_f_op_vec2_f32(select(vec2<f32>(var_1.d.a, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_0.a) * -450f)), vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_div_f32(var_0.a, var_0.a) + _wgslsmith_f_op_f32(-var_0.a)) - var_0.a), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(var_0.a + _wgslsmith_f_op_f32(abs(-2103f))) * _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(var_0.a * -1000f))))), vec2<bool>(any(vec2<bool>(true, any(vec2<bool>(true, false)))), func_6(Struct_2(1i, abs(var_0.b), vec4<i32>(var_1.a, 1i, var_0.b, 2147483647i) | var_1.c, var_1.d), _wgslsmith_sub_vec4_i32(~var_1.c, -var_1.c), u_input.b.x, u_input.b.yyx).x)));
            switch (1i) {
                case -30400i: {
                    var var_3 = func_4(_wgslsmith_f_op_f32(max(var_2.x, -1105f)), select(!func_6(Struct_2(i32(-2147483648), var_0.b, var_1.c, Struct_1(var_2.x, i32(-2147483648))), _wgslsmith_sub_vec4_i32(var_1.c, var_1.c), abs(u_input.c), _wgslsmith_sub_vec3_u32(u_input.b.ywx, u_input.b.ywy)), !(!func_6(Struct_2(-1i, 2147483647i, vec4<i32>(i32(-2147483648), var_0.b, u_input.e, 0i), Struct_1(var_0.a, i32(-2147483648))), var_1.c, u_input.c, u_input.b.yyx)), select(vec4<bool>(true, true, true, true), vec4<bool>(false, var_1.b > var_1.c.x, true, true), func_4(_wgslsmith_f_op_f32(var_0.a + 491f), func_3(var_0), Struct_3(vec3<f32>(-772f, 287f, var_1.d.a), false, vec4<bool>(false, false, false, true), false, global2[_wgslsmith_index_u32(48975u, 27u)]), func_8(Struct_3(vec3<f32>(var_1.d.a, 306f, -1312f), false, vec4<bool>(false, false, false, true), true, global2[_wgslsmith_index_u32(1u, 27u)]), vec3<u32>(0u, u_input.b.x, 0u))).d)), Struct_3(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(abs(func_8(Struct_3(vec3<f32>(1000f, var_1.d.a, -1000f), true, vec4<bool>(true, false, true, true), true, global2[_wgslsmith_index_u32(38621u, 27u)]), vec3<u32>(29939u, 62978u, 4294967295u)).a))), func_3(var_0).x, func_4(var_2.x, vec4<bool>(false, true, false, false), func_8(Struct_3(vec3<f32>(var_2.x, -689f, var_0.a), true, vec4<bool>(true, false, true, false), true, Struct_2(var_0.b, 1i, vec4<i32>(2147483647i, var_0.b, var_1.b, -7836i), Struct_1(var_2.x, var_0.b))), vec3<u32>(u_input.a.x, u_input.c, 0u)), func_4(176f, select(vec4<bool>(false, true, true, false), vec4<bool>(true, true, true, false), false), func_8(Struct_3(vec3<f32>(var_1.d.a, var_0.a, -865f), true, vec4<bool>(true, true, false, true), false, global2[_wgslsmith_index_u32(u_input.b.x, 27u)]), u_input.b.xyw), Struct_3(vec3<f32>(var_0.a, var_1.d.a, var_2.x), true, vec4<bool>(true, true, false, false), true, Struct_2(u_input.e, var_0.b, var_1.c, Struct_1(-830f, i32(-2147483648)))))).c, true, global2[_wgslsmith_index_u32(firstLeadingBit(~(u_input.b.x ^ 1u)), 27u)]), Struct_3(vec3<f32>(_wgslsmith_div_f32(-1370f, _wgslsmith_div_f32(1436f, var_1.d.a)), var_2.x, var_1.d.a), !(var_2.x >= _wgslsmith_f_op_f32(ceil(var_0.a))), vec4<bool>(true, true, true, true), u_input.e >= var_0.b, global2[_wgslsmith_index_u32(u_input.c, 27u)]));
                    var var_4 = 0u;
                }
                case 2147483647i: {
                    var var_3 = Struct_2(42140i, 20799i, var_1.c, Struct_1(2236f, func_7(true, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_1.d.a)), ~vec3<u32>(u_input.c, 1u, 41399u), -(~0i)).b));
                    var var_4 = func_8(Struct_3(vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(146f - var_2.x)), var_3.d.a, var_3.d.a), all(func_6(global2[_wgslsmith_index_u32(1u, 27u)], vec4<i32>(27990i, var_3.d.b, var_3.c.x, i32(-2147483648)), 0u, vec3<u32>(u_input.b.x, 4294967295u, 1u)).wyz) | false, vec4<bool>(true, any(vec2<bool>(false, true)) | true, all(vec2<bool>(true, true)), func_3(var_3.d).x), true, global2[_wgslsmith_index_u32(35080u, 27u)]), ~(~(~u_input.b.xzz)));
                    var var_5 = true;
                    let var_6 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-289f * var_0.a))) + -745f));
                }
                case -31854i: {
                    var var_3 = 0i;
                    let var_4 = !(!func_4(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(var_1.d.a + var_2.x)), func_3(Struct_1(var_2.x, u_input.e)), func_8(Struct_3(vec3<f32>(468f, -618f, -835f), true, vec4<bool>(false, true, false, true), true, global2[_wgslsmith_index_u32(23916u, 27u)]), _wgslsmith_mod_vec3_u32(u_input.b.ywy, u_input.b.wyx)), func_8(func_8(Struct_3(vec3<f32>(151f, var_2.x, var_1.d.a), false, vec4<bool>(true, true, true, false), false, Struct_2(var_1.b, 51567i, vec4<i32>(1i, 49099i, u_input.d, var_0.b), Struct_1(var_1.d.a, 8969i))), u_input.b.wzx), ~u_input.b.zxz)).c.ywz);
                    global1 = true;
                    global1 = !var_4.x;
                }
                default: {
                }
            }
        }
        default: {
        }
    }
    var var_0 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(-323f, -1196f))) - _wgslsmith_f_op_f32(abs(func_2().d.a)))) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(-506f)) * _wgslsmith_f_op_f32(-160f - 897f)))));
    loop {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        let var_1 = Struct_3(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(max(vec3<f32>(-620f, 1244f, 857f), vec3<f32>(881f, 1832f, -1000f))) - vec3<f32>(1120f, -1256f, -2021f)))), func_3(func_8(func_8(Struct_3(vec3<f32>(-820f, -1349f, 1388f), false, vec4<bool>(false, true, false, false), false, global2[_wgslsmith_index_u32(1u, 27u)]), vec3<u32>(u_input.c, u_input.a.x, u_input.b.x)), vec3<u32>(1u, u_input.c, 29797u)).e.d).x | false, vec4<bool>(true, true, true, true), true, global2[_wgslsmith_index_u32(_wgslsmith_mult_u32(max(select(u_input.b.x, u_input.b.x, true), 4294967295u), _wgslsmith_div_u32(~u_input.c, 1u | (u_input.c >> (4294967295u % 32u)))), 27u)]);
        let var_2 = Struct_2(-31509i, var_1.e.a, vec4<i32>(u_input.e, -28065i, func_5(), 1i), Struct_1(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(1010f + 1959f) - _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-665f - var_1.a.x), _wgslsmith_f_op_f32(abs(var_1.e.d.a)), false))), _wgslsmith_add_i32(func_7(true, _wgslsmith_f_op_f32(max(-504f, 779f)), u_input.b.yxx, u_input.d).b, _wgslsmith_div_i32(u_input.d, var_1.e.d.b))));
        for (var var_3 = -(~u_input.d); var_3 == 3791i; ) {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            continue;
        }
        let var_3 = 611f;
        global2 = array<Struct_2, 27>();
    }
    switch (~(~(~(~(i32(-1i) * i32(-2147483648)))))) {
        case i32(-2147483648): {
            let var_1 = func_3(Struct_1(275f, abs(2147483647i) << (~_wgslsmith_dot_vec3_u32(vec3<u32>(u_input.b.x, u_input.a.x, u_input.c), u_input.b.ywx) % 32u))).x;
            loop {
                if (LOOP_COUNTERS[16u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
                var var_2 = u_input.b & ~_wgslsmith_div_vec4_u32(_wgslsmith_add_vec4_u32(vec4<u32>(u_input.c, 4294967295u, 28671u, 4572u), min(vec4<u32>(u_input.a.x, u_input.b.x, 59398u, u_input.c), u_input.b)), u_input.b);
                var var_3 = _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(sign(global0[_wgslsmith_index_u32(u_input.c, 16u)])), vec2<f32>(-508f, _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(f32(-1f) * -367f)))))));
                continue;
            }
            loop {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
            }
        }
        case 0i: {
        }
        case 2147483647i: {
            switch (-58846i) {
                case 2147483647i: {
                }
                case -8401i: {
                    global1 = all(vec2<bool>(true, false));
                    let var_1 = !(!(!(_wgslsmith_dot_vec3_u32(u_input.b.yxz, u_input.b.ywz) <= u_input.b.x)));
                    let var_2 = u_input.b;
                }
                default: {
                    global0 = array<vec2<f32>, 16>();
                    let var_1 = func_2().d;
                    let var_2 = u_input.d;
                }
            }
            var var_1 = func_4(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1153f + 513f) - 1375f) - _wgslsmith_f_op_f32(-913f)) * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(-745f)) - 1162f))), !func_6(global2[_wgslsmith_index_u32(~(25162u & u_input.a.x), 27u)], _wgslsmith_mod_vec4_i32(vec4<i32>(2147483647i, -1i, i32(-2147483648), -30290i), vec4<i32>(0i, 11164i, u_input.e, u_input.d)), ~_wgslsmith_mod_u32(1u, 21812u), u_input.b.wwx), func_4(-1634f, vec4<bool>(!any(vec2<bool>(false, true)), true == func_4(-504f, vec4<bool>(false, false, true, true), Struct_3(vec3<f32>(531f, 707f, 575f), true, vec4<bool>(true, false, false, true), false, Struct_2(119319i, u_input.d, vec4<i32>(u_input.e, u_input.d, 6965i, u_input.e), Struct_1(190f, -41867i))), Struct_3(vec3<f32>(707f, -1252f, 311f), true, vec4<bool>(false, false, true, true), false, Struct_2(u_input.e, u_input.e, vec4<i32>(u_input.d, -5155i, 19349i, i32(-2147483648)), Struct_1(400f, u_input.d)))).c.x, false, true), Struct_3(_wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(vec3<f32>(-206f, -1270f, 1000f) + vec3<f32>(-1752f, 1330f, 1051f)))), !(u_input.c < 4294967295u), !func_6(Struct_2(-26853i, -16385i, vec4<i32>(2147483647i, u_input.e, u_input.d, -45920i), Struct_1(125f, u_input.d)), vec4<i32>(u_input.d, i32(-2147483648), 27201i, u_input.e), 1u, u_input.b.zxz), true, global2[_wgslsmith_index_u32(~27939u, 27u)]), func_4(_wgslsmith_f_op_f32(-451f), vec4<bool>(true, true, true, true), func_8(func_4(-212f, vec4<bool>(true, true, false, true), Struct_3(vec3<f32>(1091f, -1790f, 1000f), true, vec4<bool>(true, true, false, true), false, Struct_2(7638i, u_input.e, vec4<i32>(u_input.d, -14000i, u_input.d, 1i), Struct_1(-756f, u_input.d))), Struct_3(vec3<f32>(449f, 827f, -2148f), false, vec4<bool>(false, false, false, false), true, Struct_2(1i, 26163i, vec4<i32>(u_input.e, i32(-2147483648), 1i, u_input.e), Struct_1(1343f, 1i)))), vec3<u32>(u_input.a.x, u_input.b.x, 13605u)), Struct_3(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-179f, 2692f, 960f)), true, vec4<bool>(true, false, false, false), true, func_4(-1394f, vec4<bool>(false, false, true, true), Struct_3(vec3<f32>(-817f, -1167f, 369f), false, vec4<bool>(true, true, false, false), false, Struct_2(-4892i, u_input.d, vec4<i32>(u_input.d, -25785i, u_input.e, u_input.e), Struct_1(911f, u_input.e))), Struct_3(vec3<f32>(127f, 442f, 678f), true, vec4<bool>(true, true, false, true), true, Struct_2(u_input.e, u_input.d, vec4<i32>(u_input.d, 0i, u_input.d, u_input.e), Struct_1(166f, 3169i)))).e))), func_4(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(1216f + 231f))))), func_6(func_2(), vec4<i32>(~u_input.d, _wgslsmith_dot_vec3_i32(vec3<i32>(u_input.d, u_input.e, 12679i), vec3<i32>(-24640i, -30497i, 0i)), i32(-2147483648), u_input.d), _wgslsmith_clamp_u32(u_input.a.x, u_input.c, 4294967295u) << (~u_input.b.x % 32u), select(~vec3<u32>(u_input.a.x, u_input.b.x, u_input.b.x), select(vec3<u32>(u_input.c, u_input.a.x, 5251u), u_input.b.zzz, true), func_8(Struct_3(vec3<f32>(494f, 576f, -322f), false, vec4<bool>(true, true, true, true), false, Struct_2(-1i, u_input.d, vec4<i32>(u_input.e, u_input.e, -22369i, u_input.e), Struct_1(-1921f, u_input.d))), u_input.b.zxx).c.yzz)), func_8(Struct_3(vec3<f32>(-737f, -101f, -109f), any(vec4<bool>(true, false, true, false)), vec4<bool>(true, true, true, false), true, func_4(1000f, vec4<bool>(true, false, true, false), Struct_3(vec3<f32>(-461f, -375f, -547f), true, vec4<bool>(false, false, true, true), true, global2[_wgslsmith_index_u32(0u, 27u)]), Struct_3(vec3<f32>(-2109f, 1008f, 1467f), true, vec4<bool>(false, false, true, false), false, Struct_2(i32(-2147483648), 1i, vec4<i32>(u_input.d, -49594i, 18945i, 2147483647i), Struct_1(527f, u_input.e)))).e), abs(u_input.b.xzz)), func_8(func_4(_wgslsmith_div_f32(-509f, -973f), select(vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, false), true), Struct_3(vec3<f32>(368f, 1000f, -598f), true, vec4<bool>(true, true, false, false), false, Struct_2(1i, i32(-2147483648), vec4<i32>(u_input.e, 770i, 2147483647i, u_input.e), Struct_1(1082f, -1i))), func_4(-634f, vec4<bool>(true, false, true, true), Struct_3(vec3<f32>(892f, -801f, 1254f), false, vec4<bool>(false, true, false, false), false, Struct_2(61110i, u_input.d, vec4<i32>(-1i, i32(-2147483648), 2147483647i, u_input.d), Struct_1(-173f, 56502i))), Struct_3(vec3<f32>(1000f, 153f, -1070f), false, vec4<bool>(true, false, true, true), false, Struct_2(u_input.e, u_input.e, vec4<i32>(0i, -15371i, u_input.e, -91687i), Struct_1(576f, -23244i))))), max(_wgslsmith_mod_vec3_u32(u_input.b.yxy, vec3<u32>(73747u, 18598u, u_input.a.x)), _wgslsmith_mod_vec3_u32(vec3<u32>(u_input.a.x, 11531u, 4294967295u), vec3<u32>(u_input.c, u_input.b.x, u_input.b.x)))))).e;
        }
        case 33577i: {
            if (true) {
                global2 = array<Struct_2, 27>();
                var var_1 = !func_4(func_4(_wgslsmith_f_op_f32(f32(-1f) * -1789f), !func_8(Struct_3(vec3<f32>(-1404f, 467f, -1079f), true, vec4<bool>(true, false, true, true), true, global2[_wgslsmith_index_u32(1u, 27u)]), u_input.b.www).c, Struct_3(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-311f, -203f, -1526f)), true, vec4<bool>(true, true, true, true), false, global2[_wgslsmith_index_u32(~1u, 27u)]), Struct_3(_wgslsmith_f_op_vec3_f32(-vec3<f32>(883f, -267f, 498f)), false, select(vec4<bool>(true, true, true, true), vec4<bool>(true, false, true, false), false), false, global2[_wgslsmith_index_u32(u_input.c, 27u)])).e.d.a, !vec4<bool>(func_8(Struct_3(vec3<f32>(-179f, -1000f, -667f), false, vec4<bool>(true, false, true, false), false, Struct_2(69506i, 0i, vec4<i32>(1i, 28552i, u_input.d, 55876i), Struct_1(-525f, u_input.e))), u_input.b.wxy).b, true, true, all(vec3<bool>(true, true, false))), func_4(713f, vec4<bool>(true, true, true, true), func_4(_wgslsmith_f_op_f32(trunc(1097f)), vec4<bool>(true, false, true, true), func_8(Struct_3(vec3<f32>(-126f, 1184f, 749f), true, vec4<bool>(false, false, false, true), true, global2[_wgslsmith_index_u32(0u, 27u)]), vec3<u32>(39435u, 4294967295u, u_input.a.x)), Struct_3(vec3<f32>(629f, -834f, 1000f), true, vec4<bool>(true, false, false, true), false, global2[_wgslsmith_index_u32(4294967295u, 27u)])), Struct_3(vec3<f32>(921f, -341f, -1000f), false, select(vec4<bool>(false, false, true, true), vec4<bool>(true, true, false, false), false), true, func_2())), Struct_3(vec3<f32>(_wgslsmith_f_op_f32(abs(-914f)), _wgslsmith_f_op_f32(-572f), -549f), all(vec3<bool>(false, true, true)), select(vec4<bool>(false, false, true, true), func_6(global2[_wgslsmith_index_u32(u_input.b.x, 27u)], vec4<i32>(-1i, i32(-2147483648), -64359i, u_input.d), 4294967295u, vec3<u32>(4294967295u, u_input.a.x, u_input.a.x)), true), func_6(global2[_wgslsmith_index_u32(4294967295u, 27u)], vec4<i32>(u_input.d, u_input.e, -9696i, 2147483647i) & vec4<i32>(1i, u_input.e, -441i, 0i), 69276u, u_input.b.yxz).x, func_8(func_8(Struct_3(vec3<f32>(459f, 263f, 175f), false, vec4<bool>(true, true, false, true), true, Struct_2(u_input.d, u_input.e, vec4<i32>(2147483647i, -27183i, u_input.e, 32084i), Struct_1(-1152f, -53655i))), u_input.b.xyx), ~u_input.b.www).e)).c.zxx;
            }
        }
        default: {
            var var_1 = _wgslsmith_sub_i32(-16234i, ~2147483647i | u_input.e);
            var var_2 = func_7(true, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1969f)))), _wgslsmith_clamp_vec3_u32(abs(~u_input.b.yxy), ~u_input.b.yxw, _wgslsmith_mult_vec3_u32(countOneBits(vec3<u32>(u_input.c, 0u, 4294967295u) ^ u_input.b.xyy), _wgslsmith_mod_vec3_u32(reverseBits(u_input.b.xzz), ~vec3<u32>(u_input.a.x, u_input.a.x, u_input.c)))), u_input.e);
            loop {
                if (LOOP_COUNTERS[18u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
                var var_3 = func_4(_wgslsmith_f_op_f32(-var_2.a), vec4<bool>(false, true, false, true), Struct_3(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(vec3<f32>(310f, var_2.a, -949f) + vec3<f32>(var_2.a, 1000f, 930f))))), (func_8(Struct_3(vec3<f32>(var_2.a, var_2.a, 185f), true, vec4<bool>(true, false, true, true), false, global2[_wgslsmith_index_u32(u_input.a.x, 27u)]), vec3<u32>(0u, u_input.a.x, u_input.b.x)).d || true) || (_wgslsmith_add_i32(u_input.e, -16371i) >= 3820i), vec4<bool>(func_4(1344f, func_3(Struct_1(-829f, -40671i)), func_4(var_2.a, vec4<bool>(true, false, false, true), Struct_3(vec3<f32>(-500f, -1000f, var_2.a), false, vec4<bool>(false, true, false, true), true, global2[_wgslsmith_index_u32(u_input.c, 27u)]), Struct_3(vec3<f32>(var_2.a, 492f, var_2.a), false, vec4<bool>(true, true, false, true), true, Struct_2(var_2.b, -1i, vec4<i32>(18081i, var_2.b, 1i, -1i), Struct_1(-1335f, -1i)))), func_8(Struct_3(vec3<f32>(var_2.a, -630f, 1680f), false, vec4<bool>(false, false, true, true), true, global2[_wgslsmith_index_u32(u_input.b.x, 27u)]), vec3<u32>(u_input.b.x, u_input.c, 5041u))).b, _wgslsmith_f_op_f32(-var_2.a) > _wgslsmith_f_op_f32(f32(-1f) * -1111f), true, ~(-65933i) == var_2.b), true, Struct_2(~(-6124i), 46692i, vec4<i32>(func_9(Struct_3(vec3<f32>(-741f, var_2.a, -359f), true, vec4<bool>(false, false, true, false), false, global2[_wgslsmith_index_u32(u_input.c, 27u)])).x, abs(i32(-2147483648)), func_5(), var_2.b), Struct_1(_wgslsmith_f_op_f32(-var_2.a), _wgslsmith_sub_i32(u_input.d, u_input.e)))), func_8(Struct_3(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(var_2.a, -456f, 1537f) + vec3<f32>(var_2.a, var_2.a, var_2.a))), _wgslsmith_div_f32(663f, 427f) < _wgslsmith_f_op_f32(-var_2.a), func_4(_wgslsmith_div_f32(var_2.a, var_2.a), vec4<bool>(true, true, true, true), func_8(Struct_3(vec3<f32>(var_2.a, var_2.a, -1000f), false, vec4<bool>(false, true, false, false), false, global2[_wgslsmith_index_u32(2017u, 27u)]), u_input.b.xwy), func_4(var_2.a, vec4<bool>(false, true, true, true), Struct_3(vec3<f32>(-159f, 923f, -1054f), false, vec4<bool>(false, true, true, true), true, Struct_2(u_input.e, var_2.b, vec4<i32>(var_2.b, var_2.b, var_2.b, 0i), Struct_1(var_2.a, -1i))), Struct_3(vec3<f32>(263f, -261f, 439f), true, vec4<bool>(false, true, true, true), true, Struct_2(25712i, var_2.b, vec4<i32>(15300i, var_2.b, -32674i, -15743i), Struct_1(183f, 1i))))).c, false, global2[_wgslsmith_index_u32(abs(_wgslsmith_mod_u32(0u, u_input.c)), 27u)]), firstLeadingBit(~(~u_input.b.www)))).e;
                let var_4 = func_2().d;
                continue;
            }
        }
    }
    var var_1 = ~(u_input.a.x >> (1u % 32u));
    return !((_wgslsmith_dot_vec3_i32(~vec3<i32>(49386i, u_input.e, 1i), func_4(-1132f, vec4<bool>(false, true, true, true), Struct_3(vec3<f32>(-1000f, 1865f, -2562f), false, vec4<bool>(false, true, true, false), true, Struct_2(i32(-2147483648), u_input.e, vec4<i32>(u_input.d, -1i, -22757i, 1i), Struct_1(1515f, u_input.d))), Struct_3(vec3<f32>(-820f, -312f, -766f), false, vec4<bool>(true, true, false, true), true, Struct_2(u_input.d, u_input.e, vec4<i32>(u_input.d, u_input.e, 2147483647i, 2147483647i), Struct_1(144f, u_input.e)))).e.c.zyw) < (i32(-1i) * -13735i)) || true);
}

@compute
@workgroup_size(1)
fn main() {
    loop {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
        break;
    }
    global1 = false;
    if (true) {
        if (any(select(vec4<bool>(func_1(), !any(vec3<bool>(true, true, true)), false, true), !func_6(global2[_wgslsmith_index_u32(4294967295u, 27u)], _wgslsmith_sub_vec4_i32(vec4<i32>(20735i, -23469i, u_input.d, u_input.e), vec4<i32>(u_input.d, u_input.e, u_input.d, 0i)), u_input.c, ~vec3<u32>(u_input.b.x, 4294967295u, 24792u)), all(vec4<bool>(all(vec3<bool>(true, true, true)), true, true, true))))) {
            let var_0 = vec2<u32>(u_input.c, 4294967295u);
            global0 = array<vec2<f32>, 16>();
            var var_1 = u_input.b;
            let var_2 = _wgslsmith_f_op_vec2_f32(-global0[_wgslsmith_index_u32(u_input.a.x, 16u)]);
            var var_3 = ~(~_wgslsmith_sub_vec4_i32(-vec4<i32>(u_input.d, 2147483647i, 17770i, u_input.e) ^ vec4<i32>(u_input.e, u_input.e, u_input.d, u_input.e), _wgslsmith_mod_vec4_i32(vec4<i32>(u_input.e, u_input.d, 32210i, 16027i), ~vec4<i32>(12434i, -39894i, i32(-2147483648), u_input.e))));
        }
        global0 = array<vec2<f32>, 16>();
        for (var var_0: i32; ; var_0 += 1i) {
            if (LOOP_COUNTERS[20u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
        }
        global2 = array<Struct_2, 27>();
    }
    var var_0 = select(select(func_4(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(1171f * -2909f) - _wgslsmith_div_f32(282f, 1878f)), vec4<bool>(true, -16209i > u_input.d, all(vec3<bool>(true, true, false)), true), Struct_3(_wgslsmith_f_op_vec3_f32(abs(vec3<f32>(-1253f, -510f, 457f))), true, vec4<bool>(true, true, true, true), true, global2[_wgslsmith_index_u32(countOneBits(4294967295u), 27u)]), func_4(func_4(836f, vec4<bool>(true, false, true, true), Struct_3(vec3<f32>(-1668f, 1483f, -380f), false, vec4<bool>(true, false, true, false), false, global2[_wgslsmith_index_u32(u_input.c, 27u)]), Struct_3(vec3<f32>(-1517f, 386f, 806f), false, vec4<bool>(false, true, false, true), true, global2[_wgslsmith_index_u32(619u, 27u)])).a.x, vec4<bool>(true, true, true, true), Struct_3(vec3<f32>(-742f, -792f, 483f), true, vec4<bool>(false, false, false, false), false, global2[_wgslsmith_index_u32(4294967295u, 27u)]), func_4(318f, vec4<bool>(false, true, false, true), Struct_3(vec3<f32>(734f, 1265f, -904f), false, vec4<bool>(false, true, false, false), true, global2[_wgslsmith_index_u32(u_input.a.x, 27u)]), Struct_3(vec3<f32>(-760f, 248f, 172f), true, vec4<bool>(true, true, false, false), false, Struct_2(1i, u_input.e, vec4<i32>(i32(-2147483648), -13214i, i32(-2147483648), u_input.d), Struct_1(1000f, u_input.d)))))).c.ww, select(vec2<bool>(any(vec4<bool>(false, true, false, false)), false), !select(vec2<bool>(false, false), vec2<bool>(true, false), vec2<bool>(false, false)), vec2<bool>(true, true)), true), vec2<bool>(!func_4(-1260f, func_8(Struct_3(vec3<f32>(1712f, -1918f, 993f), true, vec4<bool>(false, false, false, true), true, global2[_wgslsmith_index_u32(u_input.a.x, 27u)]), vec3<u32>(4294967295u, u_input.c, 4294967295u)).c, Struct_3(vec3<f32>(-1541f, 1000f, 560f), true, vec4<bool>(true, false, true, true), false, global2[_wgslsmith_index_u32(4294967295u, 27u)]), func_8(Struct_3(vec3<f32>(-186f, 395f, -803f), false, vec4<bool>(false, false, true, false), false, global2[_wgslsmith_index_u32(u_input.b.x, 27u)]), vec3<u32>(u_input.c, 23959u, u_input.c))).d, false), !vec2<bool>(func_1(), func_3(Struct_1(663f, -8502i)).x));
    global2 = array<Struct_2, 27>();
    let x = u_input.a;
    s_output = StorageBuffer(u_input.e, _wgslsmith_f_op_vec3_f32(step(vec3<f32>(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-1213f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(923f + 216f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-183f))), vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -1023f), -393f, -1388f))), ~(_wgslsmith_dot_vec3_i32(vec3<i32>(u_input.e, u_input.e, 2147483647i) << (vec3<u32>(16649u, 0u, u_input.a.x) % vec3<u32>(32u)), -vec3<i32>(u_input.e, -21074i, i32(-2147483648))) >> (min(u_input.b.x ^ u_input.a.x, 4294967295u >> (u_input.b.x % 32u)) % 32u)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-264f)) * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1355f + -104f) - -1039f)) + func_8(func_4(-1969f, vec4<bool>(var_0.x, false, var_0.x, true), Struct_3(vec3<f32>(114f, 330f, -3421f), true, vec4<bool>(var_0.x, var_0.x, true, true), true, global2[_wgslsmith_index_u32(u_input.a.x, 27u)]), Struct_3(vec3<f32>(309f, 1161f, 839f), var_0.x, vec4<bool>(true, var_0.x, false, false), var_0.x, Struct_2(u_input.d, -3058i, vec4<i32>(u_input.d, 1i, i32(-2147483648), 45088i), Struct_1(-917f, -28071i)))), vec3<u32>(u_input.a.x, _wgslsmith_sub_u32(u_input.b.x, 0u), u_input.a.x)).a.x));
}

`;