export const input = [94,252,202,248,135,17,18,180,15,229,197,196,204,247,40,131,100,49,166,22,158,146,247,204,217,241,181,162,79,206,78,130,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [94,252,202,248,135,17,18,180,15,229,197,196,204,247,40,131,100,49,166,22,158,146,247,204,217,241,181,162,79,206,78,130,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[94,252,202,248,135,17,18,180,15,229,197,196,204,247,40,131,100,49,166,22,158,146,247,204,217,241,181,162,79,206,78,130]}
// Seed: 10333724805946848785

struct Struct_1 {
    a: vec2<f32>,
}

struct Struct_2 {
    a: vec2<bool>,
    b: f32,
    c: i32,
}

struct Struct_3 {
    a: Struct_1,
    b: Struct_1,
    c: vec3<u32>,
}

struct UniformBuffer {
    a: vec3<u32>,
    b: i32,
    c: vec4<i32>,
}

struct StorageBuffer {
    a: vec2<u32>,
    b: vec4<u32>,
    c: i32,
    d: vec4<i32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: Struct_2;

var<private> global1: array<vec3<bool>, 9>;

var<private> LOOP_COUNTERS: array<u32, 24>;

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn func_1(arg_0: Struct_1, arg_1: bool) -> vec2<f32> {
    if (true) {
        loop {
            if (LOOP_COUNTERS[0u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
            break;
        }
        let var_0 = arg_0.a;
    }
    global1 = array<vec3<bool>, 9>();
    global0 = Struct_2(vec2<bool>(global0.a.x, true), _wgslsmith_f_op_f32(global0.b - _wgslsmith_f_op_f32(-arg_0.a.x)), global0.c);
    let var_0 = vec2<bool>(!(((1344f < global0.b) != true) | true), _wgslsmith_f_op_f32(-735f + global0.b) >= _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(-744f))));
    var var_1 = u_input.c.x;
    return vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_0.a.x * _wgslsmith_div_f32(-256f, arg_0.a.x))) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_div_f32(-663f, global0.b) - _wgslsmith_f_op_f32(939f - -371f)))), _wgslsmith_f_op_f32(arg_0.a.x - arg_0.a.x));
}

fn func_6(arg_0: bool, arg_1: Struct_3) -> u32 {
    var var_0 = arg_1.a;
    for (var var_1: i32; var_1 <= i32(-2147483648); ) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        if (firstTrailingBit(i32(-2147483648) ^ select(78122i, _wgslsmith_mod_i32(6573i, 1i), false)) <= -1i) {
        }
    }
    let var_1 = true;
    let var_2 = Struct_1(vec2<f32>(arg_1.b.a.x, _wgslsmith_f_op_f32(global0.b - -1047f)));
    var_0 = Struct_1(vec2<f32>(-1367f, var_2.a.x));
    return ~_wgslsmith_mult_u32(u_input.a.x, ~u_input.a.x) >> (u_input.a.x % 32u);
}

fn func_5(arg_0: vec2<u32>) -> f32 {
    let var_0 = firstLeadingBit(((vec3<u32>(40871u, arg_0.x, 0u) >> (u_input.a % vec3<u32>(32u))) >> (select(u_input.a, u_input.a, vec3<bool>(global0.a.x, global0.a.x, global0.a.x)) % vec3<u32>(32u))) | (_wgslsmith_mod_vec3_u32(u_input.a, u_input.a) & vec3<u32>(1u, 1u, 1u))) >> (vec3<u32>(_wgslsmith_mult_u32(~65687u, arg_0.x), _wgslsmith_div_u32(func_6(false | global0.a.x, Struct_3(Struct_1(vec2<f32>(global0.b, 623f)), Struct_1(vec2<f32>(global0.b, -1165f)), u_input.a)), _wgslsmith_div_u32(28256u, 4294967295u)), _wgslsmith_sub_u32(firstTrailingBit(firstTrailingBit(30534u)), u_input.a.x)) % vec3<u32>(32u));
    let var_1 = vec4<u32>(abs(~(~var_0.x)), _wgslsmith_mult_u32(min(10957u, arg_0.x), 1u), 82396u, arg_0.x);
    global1 = array<vec3<bool>, 9>();
    let var_2 = -1084f;
    global1 = array<vec3<bool>, 9>();
    return _wgslsmith_f_op_f32(-737f - _wgslsmith_f_op_f32(var_2 - _wgslsmith_f_op_f32(global0.b - _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(select(var_2, -537f, false)))))));
}

fn func_4() -> Struct_2 {
    global1 = array<vec3<bool>, 9>();
    loop {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        global1 = array<vec3<bool>, 9>();
        if (global0.a.x) {
            continue;
        }
    }
    global1 = array<vec3<bool>, 9>();
    var var_0 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(global0.b, -582f, -715f) + vec3<f32>(global0.b, global0.b, 1000f))))) + vec3<f32>(308f, -247f, _wgslsmith_f_op_f32(func_5(u_input.a.xx)))));
    var_0 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(-var_0.x), var_0.x, 390f)));
    return Struct_2(select(!select(select(global0.a, vec2<bool>(global0.a.x, global0.a.x), vec2<bool>(true, global0.a.x)), select(global0.a, vec2<bool>(true, true), global0.a), true), vec2<bool>(!(global0.b == 332f), global0.a.x && global0.a.x), all(select(vec3<bool>(false, global0.a.x, true), select(vec3<bool>(true, global0.a.x, true), global1[_wgslsmith_index_u32(0u, 9u)], true), select(vec3<bool>(global0.a.x, global0.a.x, global0.a.x), global1[_wgslsmith_index_u32(48643u, 9u)], global0.a.x)))), _wgslsmith_f_op_f32(-var_0.x), ~u_input.b);
}

fn func_3(arg_0: f32, arg_1: u32, arg_2: u32, arg_3: Struct_2) -> u32 {
    loop {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        let var_0 = 1u;
        for (var var_1 = 0i; var_1 <= -34272i; var_1 -= 1i) {
            if (LOOP_COUNTERS[4u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
            global0 = func_4();
            global0 = func_4();
        }
        continue;
    }
    global0 = func_4();
    switch (1i) {
        case 2147483647i: {
            global0 = func_4();
            var var_0 = Struct_3(Struct_1(_wgslsmith_f_op_vec2_f32(trunc(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(floor(vec2<f32>(arg_0, 874f))))))), Struct_1(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(abs(vec2<f32>(arg_3.b, arg_0))))), vec3<u32>(0u, abs(arg_2), _wgslsmith_sub_u32(~arg_2, arg_2)));
            var var_1 = any(select(vec2<bool>(arg_3.a.x, 23433u > u_input.a.x), arg_3.a, select(func_4().a, vec2<bool>(true, false), !global0.a)));
            for (var var_2 = -1i; var_2 > 1i; var_2 += 1i) {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                var var_3 = _wgslsmith_clamp_vec3_u32(max(~(u_input.a >> (u_input.a % vec3<u32>(32u))), vec3<u32>(~u_input.a.x, func_6(global0.a.x, Struct_3(var_0.a, var_0.b, u_input.a)), ~25872u)) >> (abs(var_0.c) % vec3<u32>(32u)), var_0.c, ~vec3<u32>(47422u, max(4294967295u, ~46469u), ~(~2434u)));
                break;
            }
        }
        case i32(-2147483648): {
            switch (-15670i) {
                case i32(-2147483648): {
                    var var_0 = _wgslsmith_f_op_vec4_f32(-vec4<f32>(global0.b, _wgslsmith_f_op_f32(arg_3.b * global0.b), _wgslsmith_f_op_f32(arg_3.b * -1054f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(-364f, _wgslsmith_f_op_f32(f32(-1f) * -998f))) + _wgslsmith_div_f32(-1311f, -252f))));
                    global0 = func_4();
                    var var_1 = arg_2;
                    var var_2 = vec3<u32>(~arg_1, _wgslsmith_dot_vec3_u32(~u_input.a, _wgslsmith_clamp_vec3_u32(vec3<u32>(_wgslsmith_sub_u32(u_input.a.x, 1u), ~arg_1, _wgslsmith_sub_u32(arg_1, arg_2)), abs(firstTrailingBit(vec3<u32>(62992u, 4294967295u, 55301u))), _wgslsmith_mult_vec3_u32(_wgslsmith_add_vec3_u32(u_input.a, vec3<u32>(68918u, u_input.a.x, 4294967295u)), vec3<u32>(1u, arg_1, 4294967295u)))), max(27545u, countOneBits(max(~0u, ~u_input.a.x))));
                    let var_3 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(step(vec4<f32>(2682f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1036f - global0.b)), var_0.x, -269f), _wgslsmith_f_op_vec4_f32(-vec4<f32>(func_4().b, _wgslsmith_f_op_f32(exp2(global0.b)), _wgslsmith_f_op_f32(-arg_3.b), _wgslsmith_div_f32(317f, 378f))))) - _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(select(vec4<f32>(arg_0, global0.b, arg_0, var_0.x), _wgslsmith_f_op_vec4_f32(vec4<f32>(478f, 1000f, 616f, global0.b) - vec4<f32>(global0.b, arg_3.b, 174f, arg_0)), all(global1[_wgslsmith_index_u32(0u, 9u)]))), vec4<f32>(_wgslsmith_f_op_vec2_f32(func_1(Struct_1(vec2<f32>(161f, global0.b)), global0.a.x)).x, var_0.x, _wgslsmith_f_op_f32(sign(arg_3.b)), arg_3.b))), vec4<f32>(-1267f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-436f)), -192f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(-604f)) - _wgslsmith_f_op_f32(126f + 760f))), true)));
                }
                case 34024i: {
                    let var_0 = ~(29844u >> (arg_1 % 32u)) >> (arg_1 % 32u);
                    global0 = arg_3;
                }
                default: {
                    global1 = array<vec3<bool>, 9>();
                    let var_0 = vec3<u32>(45628u, max(_wgslsmith_mod_u32(101600u, arg_2), 0u), arg_2);
                    return _wgslsmith_dot_vec4_u32(~(~vec4<u32>(_wgslsmith_dot_vec3_u32(u_input.a, var_0), _wgslsmith_mult_u32(16521u, 44516u), select(arg_1, var_0.x, global0.a.x), _wgslsmith_add_u32(0u, 1u))), countOneBits(_wgslsmith_add_vec4_u32(vec4<u32>(u_input.a.x, 0u, arg_1, arg_2), vec4<u32>(var_0.x, 4109u, 4294967295u, 10052u) >> (vec4<u32>(11127u, var_0.x, 0u, 4294967295u) % vec4<u32>(32u))) >> (max(vec4<u32>(56987u, var_0.x, 55750u, 4294967295u), vec4<u32>(var_0.x, u_input.a.x, var_0.x, arg_2)) % vec4<u32>(32u))));
                }
            }
            if (global0.a.x) {
                var var_0 = Struct_3(Struct_1(vec2<f32>(arg_3.b, arg_0)), Struct_1(_wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(exp2(global0.b)), _wgslsmith_f_op_f32(arg_0 - arg_3.b)) * vec2<f32>(_wgslsmith_f_op_f32(f32(-1f) * -3396f), global0.b))), _wgslsmith_clamp_vec3_u32(_wgslsmith_clamp_vec3_u32(u_input.a, countOneBits(select(u_input.a, u_input.a, global0.a.x)), vec3<u32>(~54783u, ~4663u, abs(arg_1))), ~_wgslsmith_sub_vec3_u32(u_input.a, firstTrailingBit(u_input.a)), vec3<u32>(~arg_2, _wgslsmith_mod_u32(1u, 1u ^ arg_1), ~(1u >> (u_input.a.x % 32u)))));
                var_0 = Struct_3(Struct_1(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(round(var_0.a.a)))), Struct_1(_wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(-vec2<f32>(arg_3.b, 753f)), _wgslsmith_f_op_vec2_f32(-var_0.b.a)))), reverseBits(max(u_input.a, min(vec3<u32>(var_0.c.x, 1u, 33737u), u_input.a))) & (var_0.c >> (min(vec3<u32>(arg_2, u_input.a.x, arg_2), vec3<u32>(var_0.c.x, 43691u, 4294967295u) >> (vec3<u32>(16472u, 51893u, 1u) % vec3<u32>(32u))) % vec3<u32>(32u))));
                var var_1 = ~(-_wgslsmith_mod_vec2_i32(u_input.c.yz, u_input.c.zx)) | u_input.c.xw;
            }
            switch (u_input.b) {
                default: {
                    var var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1759f + _wgslsmith_f_op_f32(-100f + _wgslsmith_f_op_f32(-global0.b))));
                    let var_1 = Struct_1(_wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(arg_3.b + _wgslsmith_f_op_f32(func_5(vec2<u32>(u_input.a.x, 95023u)))), arg_0) - _wgslsmith_f_op_vec2_f32(-vec2<f32>(289f, arg_0))));
                }
            }
        }
        case -1i: {
            global0 = arg_3;
            for (var var_0 = -1i; var_0 < i32(-2147483648); var_0 -= 1i) {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                var_0 = -arg_3.c;
                let var_1 = Struct_1(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(_wgslsmith_div_vec2_f32(vec2<f32>(385f, global0.b), vec2<f32>(arg_0, 1538f)) + _wgslsmith_f_op_vec2_f32(vec2<f32>(arg_0, -1417f) + vec2<f32>(-319f, 639f))), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(ceil(vec2<f32>(arg_3.b, global0.b)))), arg_3.a))));
                break;
            }
            let var_0 = ~vec2<i32>(arg_3.c, 0i ^ max(firstLeadingBit(i32(-2147483648)), ~global0.c));
            global1 = array<vec3<bool>, 9>();
        }
        case -54004i: {
            global1 = array<vec3<bool>, 9>();
            loop {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                var var_0 = !(global0.c <= 65944i);
            }
            let var_0 = vec4<bool>(u_input.b > _wgslsmith_dot_vec3_i32(-vec3<i32>(28903i, -9005i, -1i), firstLeadingBit(-vec3<i32>(u_input.b, -1i, 2147483647i))), global0.a.x, true, arg_3.a.x);
            if (global0.a.x) {
                global1 = array<vec3<bool>, 9>();
                var var_1 = countOneBits(_wgslsmith_sub_vec4_u32(vec4<u32>(u_input.a.x, u_input.a.x, arg_2, arg_1) | _wgslsmith_clamp_vec4_u32(vec4<u32>(1143u, 0u, 8126u, u_input.a.x), vec4<u32>(u_input.a.x, 4294967295u, u_input.a.x, 102186u), vec4<u32>(arg_2, arg_1, 5293u, 4294967295u)), ~vec4<u32>(arg_2, arg_2, u_input.a.x, u_input.a.x)) & _wgslsmith_add_vec4_u32(vec4<u32>(arg_1, 0u, 48108u << (0u % 32u), 1u), _wgslsmith_mod_vec4_u32(vec4<u32>(1u, 12850u, arg_2, arg_2), vec4<u32>(33588u, 1u, arg_1, arg_1))));
            }
        }
        default: {
            if (any(!select(!(!vec4<bool>(false, global0.a.x, false, arg_3.a.x)), !vec4<bool>(true, arg_3.a.x, true, global0.a.x), select(select(vec4<bool>(global0.a.x, arg_3.a.x, arg_3.a.x, global0.a.x), vec4<bool>(false, false, false, true), true), select(vec4<bool>(false, true, false, arg_3.a.x), vec4<bool>(true, global0.a.x, true, false), false), !vec4<bool>(global0.a.x, global0.a.x, global0.a.x, arg_3.a.x))))) {
                var var_0 = Struct_3(Struct_1(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(step(vec2<f32>(arg_3.b, -1586f), vec2<f32>(arg_0, arg_3.b))))), Struct_1(_wgslsmith_div_vec2_f32(vec2<f32>(_wgslsmith_div_f32(-249f, arg_3.b), global0.b), _wgslsmith_f_op_vec2_f32(-vec2<f32>(1624f, -209f)))), u_input.a);
                var_0 = Struct_3(var_0.a, Struct_1(_wgslsmith_f_op_vec2_f32(abs(_wgslsmith_f_op_vec2_f32(min(vec2<f32>(arg_3.b, arg_0), _wgslsmith_f_op_vec2_f32(-var_0.b.a)))))), vec3<u32>(arg_1, 14265u, 0u));
            }
            let var_0 = _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(global0.b * -733f), -1767f) + _wgslsmith_f_op_f32(arg_0 * _wgslsmith_f_op_f32(arg_3.b - global0.b))) * _wgslsmith_f_op_f32(round(arg_0)))));
        }
    }
    switch (-23952i) {
        case -55035i: {
            if (arg_3.a.x) {
                global0 = Struct_2(global0.a, _wgslsmith_div_f32(arg_0, global0.b), 0i);
            }
        }
        case -117i: {
            var var_0 = _wgslsmith_f_op_f32(floor(-2011f));
            for (var var_1 = 1i; var_1 == 1i; var_1 += 1i) {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                var var_2 = !vec4<bool>(false, (_wgslsmith_f_op_f32(159f - 1000f) != arg_3.b) | global0.a.x, true, !(arg_2 == arg_1) || true);
                break;
            }
            var var_1 = 16371u;
            let var_2 = func_4();
            let var_3 = Struct_3(Struct_1(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_div_vec2_f32(vec2<f32>(-692f, arg_0), vec2<f32>(global0.b, arg_3.b))))), Struct_1(_wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(min(vec2<f32>(global0.b, var_2.b), vec2<f32>(var_2.b, arg_0))) * _wgslsmith_f_op_vec2_f32(ceil(vec2<f32>(var_2.b, global0.b)))), _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-1322f, 881f)), _wgslsmith_f_op_vec2_f32(vec2<f32>(global0.b, var_2.b) - vec2<f32>(arg_3.b, global0.b)))))), select(_wgslsmith_sub_vec3_u32((vec3<u32>(u_input.a.x, 86460u, 49501u) ^ vec3<u32>(25107u, 0u, arg_2)) & ~vec3<u32>(4294967295u, arg_2, arg_2), (u_input.a >> (vec3<u32>(52098u, arg_1, 21909u) % vec3<u32>(32u))) & (vec3<u32>(1u, 1u, 0u) ^ vec3<u32>(u_input.a.x, 0u, arg_1))), vec3<u32>(1u, arg_1, _wgslsmith_clamp_u32(u_input.a.x, max(51804u, u_input.a.x), u_input.a.x & arg_2)), global1[_wgslsmith_index_u32(u_input.a.x, 9u)]));
        }
        case 29679i: {
        }
        default: {
            var var_0 = Struct_3(Struct_1(vec2<f32>(_wgslsmith_div_f32(_wgslsmith_div_f32(1000f, -702f), _wgslsmith_div_f32(-1045f, 213f)), -2121f)), Struct_1(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(round(vec2<f32>(1000f, -781f)))))), vec3<u32>(_wgslsmith_clamp_u32(_wgslsmith_clamp_u32(arg_1, u_input.a.x, u_input.a.x << (u_input.a.x % 32u)), ~firstTrailingBit(arg_1), ~_wgslsmith_div_u32(0u, u_input.a.x)), max(~arg_2, _wgslsmith_add_u32(1u, reverseBits(67945u))), _wgslsmith_mult_u32(~1u, 1u)));
            for (var var_1 = 58144i; var_1 > -9525i; var_1 -= 1i) {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                var var_2 = Struct_2(!(!select(vec2<bool>(true, true), select(vec2<bool>(global0.a.x, false), vec2<bool>(true, true), false), func_4().a)), arg_0, select(global0.c, global0.c, u_input.a.x != 0u));
                global0 = Struct_2(vec2<bool>(!global0.a.x, ~arg_2 == _wgslsmith_dot_vec3_u32(~vec3<u32>(u_input.a.x, 0u, var_0.c.x), ~vec3<u32>(1u, arg_2, u_input.a.x))), -375f, -42788i);
                let var_3 = 0u;
                var_1 = global0.c;
                let var_4 = var_0.a;
            }
        }
    }
    if (!(firstLeadingBit(u_input.a.x) < _wgslsmith_dot_vec2_u32(u_input.a.zz, u_input.a.zx)) == true) {
    }
    return u_input.a.x;
}

fn func_2(arg_0: Struct_1, arg_1: u32) -> Struct_1 {
    for (var var_0 = ~(-_wgslsmith_div_i32(~(global0.c >> (arg_1 % 32u)), -6327i)); ; global1 = array<vec3<bool>, 9>()) {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
    }
    var var_0 = arg_0.a;
    switch (_wgslsmith_add_i32(u_input.b, 1818i >> (((1u << (0u % 32u)) << (func_3(381f, 45780u, arg_1, Struct_2(global0.a, global0.b, 2147483647i)) % 32u)) % 32u)) >> (~73505u % 32u)) {
        default: {
            var var_1 = Struct_3(arg_0, arg_0, firstTrailingBit(abs(u_input.a)));
            loop {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                continue;
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        var_0 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(var_0.x)) - arg_0.a.x), -487f) - vec2<f32>(_wgslsmith_div_f32(-1094f, global0.b), -360f)));
        break;
    }
    var var_1 = func_4().a.x;
    return Struct_1(_wgslsmith_f_op_vec2_f32(max(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-arg_0.a)), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(arg_0.a - _wgslsmith_f_op_vec2_f32(min(vec2<f32>(-1094f, -426f), arg_0.a)))))));
}

fn func_7(arg_0: vec4<f32>, arg_1: Struct_3) -> f32 {
    loop {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        loop {
            if (LOOP_COUNTERS[14u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
            let var_0 = _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(max(vec4<f32>(global0.b, -165f, global0.b, _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(arg_1.a.a.x - arg_0.x)))), _wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(-vec4<f32>(global0.b, 1036f, arg_1.a.a.x, arg_1.b.a.x)))))))), _wgslsmith_f_op_vec4_f32(exp2(arg_0)));
            continue;
        }
        switch (u_input.b) {
            case -10740i: {
                let var_0 = vec3<i32>(10300i, firstTrailingBit(u_input.b), firstLeadingBit(global0.c));
            }
            case -1i: {
                break;
            }
            default: {
                var var_0 = _wgslsmith_f_op_f32(min(arg_1.a.a.x, func_2(arg_1.b, 1482u).a.x));
                continue;
            }
        }
        loop {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            let var_0 = min(vec4<i32>(u_input.b, firstLeadingBit(-1i), ~u_input.c.x, u_input.c.x), _wgslsmith_mult_vec4_i32(vec4<i32>(2147483647i, -10149i, (global0.c ^ 0i) ^ countOneBits(10282i), ~u_input.c.x), -_wgslsmith_clamp_vec4_i32(vec4<i32>(global0.c, u_input.c.x, i32(-2147483648), 13497i), vec4<i32>(global0.c, u_input.c.x, -1i, u_input.c.x), select(vec4<i32>(19668i, 1i, global0.c, global0.c), vec4<i32>(global0.c, 1i, global0.c, u_input.c.x), vec4<bool>(false, false, false, true)))));
            let var_1 = min(0i, _wgslsmith_dot_vec3_i32(abs(vec3<i32>(u_input.b, 28212i, -1i)) & firstLeadingBit(vec3<i32>(23262i, var_0.x, -30910i)), countOneBits(select(vec3<i32>(u_input.b, var_0.x, 47897i), vec3<i32>(58103i, global0.c, i32(-2147483648)), vec3<bool>(global0.a.x, global0.a.x, true))))) >= (0i ^ (~(~5716i) ^ _wgslsmith_dot_vec3_i32(-u_input.c.yyx, -var_0.wwx)));
            let var_2 = vec4<bool>(!(!var_1), any(global1[_wgslsmith_index_u32(arg_1.c.x, 9u)]), any(!select(!vec2<bool>(false, global0.a.x), func_4().a, vec2<bool>(false, global0.a.x))), true);
            var var_3 = ~2147483647i;
            continue;
        }
    }
    for (; ; ) {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        switch (~0i) {
            case -54493i: {
                continue;
            }
            case 0i: {
            }
            case -3849i: {
                return _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_1.a.a.x * arg_0.x));
            }
            default: {
                let var_0 = _wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1000f)), 594f, -1106f));
            }
        }
        var var_0 = Struct_2(func_4().a, _wgslsmith_f_op_f32(-1756f), 1210i);
    }
    global1 = array<vec3<bool>, 9>();
    global1 = array<vec3<bool>, 9>();
    global0 = func_4();
    return -344f;
}

@compute
@workgroup_size(1)
fn main() {
    var var_0 = u_input.c.x;
    switch (-74579i) {
        case i32(-2147483648): {
            if (!global0.a.x) {
            }
            for (var var_1 = i32(-2147483648); !any(select(global1[_wgslsmith_index_u32(1u, 9u)], !select(global1[_wgslsmith_index_u32(u_input.a.x, 9u)], global1[_wgslsmith_index_u32(4821u, 9u)], global0.a.x), global1[_wgslsmith_index_u32(~_wgslsmith_clamp_u32(23786u, u_input.a.x, 0u), 9u)])); var_1 -= 1i) {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                global1 = array<vec3<bool>, 9>();
                var_0 = ~_wgslsmith_mult_i32(1i, _wgslsmith_add_i32(_wgslsmith_mult_i32(global0.c, global0.c), -43122i)) | global0.c;
            }
            for (var var_1: i32; var_1 < -1i; var_1 -= 1i) {
                if (LOOP_COUNTERS[18u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
                var var_2 = Struct_3(Struct_1(_wgslsmith_f_op_vec2_f32(min(_wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_f_op_vec2_f32(func_1(Struct_1(vec2<f32>(global0.b, -1000f)), global0.a.x)))), _wgslsmith_f_op_vec2_f32(func_1(Struct_1(vec2<f32>(1220f, global0.b)), global0.a.x))))), Struct_1(_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(1317f, global0.b)), _wgslsmith_f_op_vec2_f32(trunc(_wgslsmith_f_op_vec2_f32(-vec2<f32>(321f, -1201f)))))), _wgslsmith_div_vec3_u32(~_wgslsmith_mult_vec3_u32(u_input.a | u_input.a, ~vec3<u32>(48059u, u_input.a.x, 4294967295u)), ~vec3<u32>(min(1u, u_input.a.x), _wgslsmith_div_u32(10461u, 5624u), u_input.a.x)));
            }
            let var_1 = u_input.c.zwy;
            var_0 = u_input.c.x;
        }
        case 0i: {
            loop {
                if (LOOP_COUNTERS[19u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
            }
            let var_1 = global0.c;
            if (false) {
                var var_2 = vec4<f32>(_wgslsmith_f_op_f32(-global0.b), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(_wgslsmith_div_f32(_wgslsmith_f_op_f32(203f * 561f), global0.b)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_7(_wgslsmith_f_op_vec4_f32(-vec4<f32>(global0.b, global0.b, global0.b, 186f)), Struct_3(func_2(Struct_1(vec2<f32>(-1033f, -715f)), 1u), func_2(Struct_1(vec2<f32>(global0.b, global0.b)), 1u), _wgslsmith_div_vec3_u32(vec3<u32>(u_input.a.x, 0u, 7778u), u_input.a))))), _wgslsmith_f_op_f32(-118f * _wgslsmith_f_op_f32(trunc(129f))));
                var_2 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-2664f, 324f, 914f, var_2.x)))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(global0.b, 1360f, 456f, 1167f)) + _wgslsmith_f_op_vec4_f32(-vec4<f32>(var_2.x, 281f, 288f, global0.b)))) - _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(-vec4<f32>(var_2.x, 324f, 803f, var_2.x)))))));
                var_2 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-457f, _wgslsmith_f_op_f32(floor(func_4().b)), var_2.x, var_2.x)) * _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(375f, _wgslsmith_f_op_f32(var_2.x * global0.b), _wgslsmith_f_op_f32(-var_2.x), global0.b))));
                let var_3 = global0.b;
                var_0 = 1i;
            }
        }
        case -1021i: {
            if (all(global0.a)) {
                return;
            }
            var_0 = max(func_4().c, min(_wgslsmith_dot_vec3_i32(u_input.c.zxy, vec3<i32>(i32(-2147483648), 28611i, _wgslsmith_mult_i32(u_input.c.x, u_input.c.x))), 0i));
            let var_1 = Struct_1(_wgslsmith_f_op_vec2_f32(round(_wgslsmith_f_op_vec2_f32(ceil(vec2<f32>(global0.b, _wgslsmith_f_op_f32(global0.b + global0.b)))))));
        }
        case -46050i: {
            let var_1 = !select(vec4<bool>(false && global0.a.x, global0.a.x, global0.a.x, true), !vec4<bool>(global0.a.x, false, global0.a.x, global0.a.x || true), vec4<bool>(true, all(!vec4<bool>(true, global0.a.x, global0.a.x, false)), global0.a.x, func_4().a.x));
            var var_2 = false;
        }
        default: {
            var var_1 = Struct_2(select(global0.a, !global0.a, func_4().a), global0.b, i32(-2147483648) & global0.c);
            let var_2 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-502f, global0.b, global0.b)))) - _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(-939f, global0.b, global0.b) * vec3<f32>(global0.b, var_1.b, 1484f)), vec3<f32>(-540f, var_1.b, 187f)))) - _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(round(vec3<f32>(var_1.b, 1179f, var_1.b)))))), _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(min(vec3<f32>(657f, global0.b, -2239f), vec3<f32>(global0.b, -990f, global0.b))), _wgslsmith_f_op_vec3_f32(vec3<f32>(1000f, global0.b, var_1.b) * vec3<f32>(var_1.b, global0.b, var_1.b)), false)), vec3<f32>(var_1.b, _wgslsmith_f_op_f32(global0.b + -557f), -691f))));
        }
    }
    global1 = array<vec3<bool>, 9>();
    for (; all(!select(select(select(vec4<bool>(true, global0.a.x, global0.a.x, global0.a.x), vec4<bool>(true, global0.a.x, true, false), global0.a.x), select(vec4<bool>(global0.a.x, global0.a.x, global0.a.x, global0.a.x), vec4<bool>(true, true, true, true), global0.a.x), select(vec4<bool>(true, false, global0.a.x, global0.a.x), vec4<bool>(true, true, false, true), global0.a.x)), vec4<bool>(!global0.a.x, all(vec4<bool>(global0.a.x, global0.a.x, global0.a.x, false)), global0.a.x, select(global0.a.x, global0.a.x, global0.a.x)), vec4<bool>(true, true, true, u_input.c.x <= global0.c))); ) {
        if (LOOP_COUNTERS[20u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
        for (var var_1 = abs(0i); var_1 != 2147483647i; var_1 -= 1i) {
            if (LOOP_COUNTERS[21u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
            var_0 = -26769i;
            global1 = array<vec3<bool>, 9>();
            let var_2 = firstTrailingBit(max(~0u, 0u));
            var var_3 = ~(~var_2);
        }
        break;
    }
    if (global0.b != global0.b) {
        global0 = Struct_2(!vec2<bool>(global0.c <= global0.c, true), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(func_7(vec4<f32>(-298f, -1000f, -418f, 470f), Struct_3(Struct_1(vec2<f32>(-235f, global0.b)), Struct_1(vec2<f32>(global0.b, global0.b)), vec3<u32>(u_input.a.x, 4294967295u, 64248u)))) * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1000f))) - global0.b), 0i);
        loop {
            if (LOOP_COUNTERS[22u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
            return;
        }
        let var_1 = u_input.a.x;
        loop {
            if (LOOP_COUNTERS[23u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
            var_0 = 53625i;
            var var_2 = Struct_3(func_2(func_2(Struct_1(_wgslsmith_f_op_vec2_f32(max(vec2<f32>(global0.b, global0.b), vec2<f32>(1841f, -1036f)))), firstLeadingBit(~u_input.a.x)), var_1), func_2(Struct_1(_wgslsmith_f_op_vec2_f32(exp2(_wgslsmith_f_op_vec2_f32(-vec2<f32>(global0.b, global0.b))))), ~abs(0u)), firstLeadingBit(u_input.a));
            continue;
        }
    }
    var_0 = 2147483647i;
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_clamp_vec2_u32(~countOneBits(_wgslsmith_sub_vec2_u32(vec2<u32>(32952u, 22963u), vec2<u32>(4294967295u, u_input.a.x))), abs(_wgslsmith_clamp_vec2_u32(_wgslsmith_mult_vec2_u32(u_input.a.xz, u_input.a.yy), u_input.a.zx, ~u_input.a.zz)), vec2<u32>(func_3(global0.b, 4294967295u, 36877u, Struct_2(global0.a, global0.b, 8838i)), u_input.a.x) | abs(~u_input.a.yx)), vec4<u32>(15716u, countOneBits(~u_input.a.x), 1u, _wgslsmith_mod_u32(25754u, ~u_input.a.x)) ^ ~_wgslsmith_mod_vec4_u32(vec4<u32>(u_input.a.x, u_input.a.x, 17858u, 43389u), select(vec4<u32>(50001u, 17796u, 15347u, 4294967295u), vec4<u32>(11387u, u_input.a.x, u_input.a.x, u_input.a.x), vec4<bool>(false, global0.a.x, global0.a.x, global0.a.x))), u_input.c.x, u_input.c);
}

`;