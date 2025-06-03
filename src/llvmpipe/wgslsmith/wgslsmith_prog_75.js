export const input = [5,219,230,137,18,69,203,127,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [5,219,230,137,18,69,203,127,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[5,219,230,137,18,69,203,127]}
// Seed: 7656500624095396

struct Struct_1 {
    a: vec4<u32>,
    b: vec4<i32>,
}

struct UniformBuffer {
    a: u32,
    b: i32,
}

struct StorageBuffer {
    a: vec2<u32>,
    b: vec4<f32>,
    c: vec3<u32>,
    d: vec4<f32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: bool = true;

var<private> global1: array<Struct_1, 8>;

var<private> global2: Struct_1 = Struct_1(vec4<u32>(1u, 36917u, 4294967295u, 37412u), vec4<i32>(0i, 0i, 108337i, 2147483647i));

var<private> LOOP_COUNTERS: array<u32, 11>;

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn func_6(arg_0: Struct_1, arg_1: Struct_1, arg_2: i32) -> bool {
    var var_0 = -591f;
    switch (16973i) {
        case 2147483647i: {
            var var_1 = Struct_1(_wgslsmith_clamp_vec4_u32(vec4<u32>(~max(u_input.a, 1u), abs(arg_0.a.x), min(arg_1.a.x, arg_1.a.x) | ~arg_1.a.x, 4294967295u), vec4<u32>(_wgslsmith_div_u32(u_input.a, _wgslsmith_dot_vec4_u32(arg_1.a, vec4<u32>(global2.a.x, 14695u, 49667u, u_input.a))), abs(max(123847u, 14617u)), _wgslsmith_dot_vec4_u32(vec4<u32>(arg_0.a.x, 0u, global2.a.x, global2.a.x), ~arg_0.a), countOneBits(0u)), _wgslsmith_sub_vec4_u32(select(vec4<u32>(46866u, u_input.a, 14443u, global2.a.x) >> (global2.a % vec4<u32>(32u)), countOneBits(global2.a), all(vec2<bool>(true, false))), vec4<u32>(13971u, arg_1.a.x, u_input.a, arg_0.a.x) ^ arg_0.a)), vec4<i32>(~arg_2, select(countOneBits(-20277i), 20609i, all(vec3<bool>(true, true, true))), ~global2.b.x, u_input.b));
            loop {
                if (LOOP_COUNTERS[0u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
                let var_2 = Struct_1(countOneBits(var_1.a), -arg_0.b);
                var var_3 = _wgslsmith_f_op_f32(1f * _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(f32(-1f) * -432f)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -345f)) - _wgslsmith_div_f32(_wgslsmith_f_op_f32(ceil(-760f)), _wgslsmith_f_op_f32(-457f))))));
                let var_4 = ~(var_1.b << (arg_0.a % vec4<u32>(32u)));
                let var_5 = select(vec3<bool>(false, false, true), vec3<bool>(true, _wgslsmith_mult_u32(~arg_1.a.x, global2.a.x) == var_1.a.x, true), vec3<bool>(false, all(vec3<bool>(true, true, true)), false));
            }
        }
        case -53189i: {
            return false;
        }
        case -1i: {
            switch (~_wgslsmith_dot_vec3_i32(vec3<i32>(min(-53464i, u_input.b) & ~(-1i), -max(arg_0.b.x, arg_1.b.x), arg_2), min(_wgslsmith_sub_vec3_i32(vec3<i32>(arg_2, arg_1.b.x, 19809i), _wgslsmith_mod_vec3_i32(vec3<i32>(arg_1.b.x, u_input.b, arg_0.b.x), vec3<i32>(arg_0.b.x, arg_0.b.x, -1i))), min(global2.b.zyw, vec3<i32>(i32(-2147483648), i32(-2147483648), i32(-2147483648))) ^ abs(vec3<i32>(global2.b.x, arg_1.b.x, i32(-2147483648)))))) {
                case 15443i: {
                    let var_1 = 48817u;
                    var var_2 = arg_1;
                    var var_3 = 4294967295u;
                    var var_4 = arg_0;
                    var_3 = ~u_input.a;
                }
                default: {
                    global1 = array<Struct_1, 8>();
                }
            }
        }
        default: {
            let var_1 = _wgslsmith_f_op_vec2_f32(max(vec2<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(sign(-1537f)), 150f), _wgslsmith_div_f32(-1290f, _wgslsmith_f_op_f32(-_wgslsmith_div_f32(-267f, 563f)))), vec2<f32>(_wgslsmith_f_op_f32(select(-694f, _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(f32(-1f) * -2235f))), true)), _wgslsmith_f_op_f32(abs(-351f)))));
        }
    }
    global2 = arg_0;
    let var_1 = arg_0.b.zxw;
    var_0 = _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(357f, -279f)))));
    return !any(select(vec4<bool>(true, true, true, true), select(vec4<bool>(true, false, true, false), vec4<bool>(true, false, false, false), 56274u >= arg_1.a.x), select(any(vec4<bool>(false, true, false, false)), true, true)));
}

fn func_5(arg_0: f32) -> vec3<bool> {
    global1 = array<Struct_1, 8>();
    global0 = _wgslsmith_sub_i32(u_input.b, -u_input.b) > ((global2.b.x << (16342u % 32u)) ^ 32883i);
    for (var var_0 = -1808i; true; ) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        var var_1 = 4294967295u;
    }
    switch (-48495i) {
        case i32(-2147483648): {
            global0 = true;
        }
        case -11337i: {
            if (true) {
                var var_0 = -17586i;
                var var_1 = Struct_1(abs(~_wgslsmith_mod_vec4_u32(global2.a, ~global2.a)), abs(vec4<i32>(global2.b.x, ~(-37187i), -36774i, -_wgslsmith_dot_vec4_i32(vec4<i32>(2147483647i, 0i, -45426i, u_input.b), global2.b))));
                let var_2 = global1[_wgslsmith_index_u32(1u, 8u)];
            }
        }
        default: {
            let var_0 = _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(arg_0))))));
            if (func_6(global1[_wgslsmith_index_u32(101709u, 8u)], global1[_wgslsmith_index_u32(51745u, 8u)], _wgslsmith_clamp_i32(u_input.b, 18158i, global2.b.x))) {
                let var_1 = min(vec4<u32>(max(~0u, 115417u), _wgslsmith_dot_vec3_u32(vec3<u32>(1u, global2.a.x, global2.a.x), vec3<u32>(u_input.a, ~0u, global2.a.x)), 1u, 1u), global2.a);
                global1 = array<Struct_1, 8>();
                global0 = !(any(select(vec4<bool>(true, false, true, false), select(vec4<bool>(false, true, false, true), vec4<bool>(true, true, true, false), false), vec4<bool>(true, true, false, true))) || !any(vec2<bool>(true, true)));
                var var_2 = global1[_wgslsmith_index_u32(72425u, 8u)];
            }
            var var_1 = _wgslsmith_div_f32(var_0, arg_0);
            switch (-global2.b.x) {
                case -40844i: {
                }
                case -12304i: {
                    var var_2 = global1[_wgslsmith_index_u32(~(~31075u), 8u)];
                }
                default: {
                    var var_2 = true;
                }
            }
        }
    }
    global2 = global1[_wgslsmith_index_u32(~global2.a.x, 8u)];
    return select(vec3<bool>(_wgslsmith_f_op_f32(sign(-192f)) > arg_0, select(u_input.a > 1u, true, true), true), select(select(select(vec3<bool>(false, false, true), vec3<bool>(true, true, true), true), vec3<bool>(true, true, true), vec3<bool>(true, u_input.a > u_input.a, true)), !(!select(vec3<bool>(false, true, false), vec3<bool>(true, true, true), vec3<bool>(false, false, false))), all(select(select(vec3<bool>(false, false, false), vec3<bool>(false, true, false), false), vec3<bool>(true, false, false), vec3<bool>(true, true, true)))), abs(-8148i) > global2.b.x);
}

fn func_7(arg_0: vec3<bool>) -> bool {
    var var_0 = vec2<u32>(reverseBits(5275u), ~global2.a.x);
    let var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(768f, _wgslsmith_f_op_f32(534f * _wgslsmith_f_op_f32(-_wgslsmith_div_f32(-363f, 1373f))))));
    switch (firstTrailingBit(-_wgslsmith_div_i32(_wgslsmith_dot_vec3_i32(_wgslsmith_mod_vec3_i32(global2.b.xyy, vec3<i32>(u_input.b, -15154i, i32(-2147483648))), vec3<i32>(48030i, global2.b.x, -23800i) >> (global2.a.yww % vec3<u32>(32u))), _wgslsmith_div_i32(_wgslsmith_add_i32(global2.b.x, global2.b.x), _wgslsmith_div_i32(1i, -52951i))))) {
        default: {
        }
    }
    if (true | !(!all(arg_0.yy))) {
        switch (firstTrailingBit(30448i)) {
            case 0i: {
                global2 = Struct_1(~_wgslsmith_mod_vec4_u32(vec4<u32>(reverseBits(u_input.a), _wgslsmith_mult_u32(13813u, 11499u), ~u_input.a, 1u), ~(~vec4<u32>(22180u, 83352u, u_input.a, 25157u))), max(min(vec4<i32>(i32(-2147483648), global2.b.x, 0i, global2.b.x), -global2.b) & vec4<i32>(23320i, 19621i, 23757i, global2.b.x), _wgslsmith_mult_vec4_i32(~abs(global2.b), countOneBits(-vec4<i32>(-53182i, -29474i, 0i, u_input.b)))));
                var var_2 = global1[_wgslsmith_index_u32(41512u, 8u)];
                var_0 = _wgslsmith_clamp_vec2_u32(~max(global2.a.zz ^ vec2<u32>(28790u, var_0.x), _wgslsmith_mult_vec2_u32(global2.a.xx, vec2<u32>(global2.a.x, 0u))), ~(~vec2<u32>(var_0.x, 0u)), abs(var_2.a.wx)) >> (abs(vec2<u32>(4294967295u, 0u)) % vec2<u32>(32u));
                var_0 = global2.a.yx;
            }
            default: {
                let var_2 = ~(~vec2<u32>(15129u, reverseBits(1u)));
                return true;
            }
        }
        return arg_0.x;
    }
    let var_2 = vec2<bool>(arg_0.x, !arg_0.x & (!arg_0.x == ((var_1 == -952f) & select(arg_0.x, false, arg_0.x))));
    return any(arg_0.xz);
}

fn func_4(arg_0: vec3<bool>, arg_1: vec3<bool>, arg_2: vec2<i32>) -> Struct_1 {
    let var_0 = -global2.b.yxy;
    loop {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
    }
    let var_1 = arg_0.x;
    global2 = Struct_1(global2.a, -global2.b);
    var var_2 = vec4<bool>(func_7(!func_5(-396f)), true, any(select(select(select(vec4<bool>(arg_1.x, true, arg_1.x, arg_1.x), vec4<bool>(arg_0.x, true, true, false), vec4<bool>(var_1, true, var_1, true)), !vec4<bool>(var_1, var_1, var_1, arg_0.x), false), select(!vec4<bool>(true, var_1, true, arg_0.x), select(vec4<bool>(true, true, false, false), vec4<bool>(true, var_1, true, var_1), vec4<bool>(arg_1.x, arg_1.x, false, false)), !vec4<bool>(var_1, arg_1.x, var_1, true)), !vec4<bool>(false, arg_1.x, false, false))), any(!vec4<bool>(!var_1, true, true, true)));
    return global1[_wgslsmith_index_u32(231u, 8u)];
}

fn func_3(arg_0: i32) -> Struct_1 {
    var var_0 = 4294967295u >> (~(~max(1u, _wgslsmith_add_u32(u_input.a, u_input.a))) % 32u);
    var_0 = max(_wgslsmith_add_u32(u_input.a, 69089u), _wgslsmith_div_u32(((u_input.a | 92781u) | u_input.a) & _wgslsmith_sub_u32(u_input.a, ~global2.a.x), ~min(_wgslsmith_dot_vec4_u32(vec4<u32>(27590u, global2.a.x, 0u, global2.a.x), vec4<u32>(0u, 4294967295u, 25423u, global2.a.x)), 4294967295u)));
    return func_4(select(select(vec3<bool>(true, true, all(vec2<bool>(true, false))), vec3<bool>(true, true, true), vec3<bool>(true, false, true)), vec3<bool>(false, !any(vec2<bool>(true, false)), true), vec3<bool>(true, any(vec2<bool>(true, true)), any(select(vec4<bool>(true, false, false, false), vec4<bool>(false, false, false, true), true)))), !(!(!select(vec3<bool>(true, false, false), vec3<bool>(false, false, false), vec3<bool>(true, true, false)))), global2.b.zz);
}

fn func_2(arg_0: bool, arg_1: u32, arg_2: f32) -> bool {
    var var_0 = abs(~min(~global2.a, vec4<u32>(arg_1 ^ 36488u, _wgslsmith_mult_u32(33899u, 0u), ~87389u, countOneBits(u_input.a))));
    let var_1 = func_3(-(~88874i) | min(_wgslsmith_div_i32(i32(-2147483648), max(-20970i, global2.b.x)), ~(~25780i)));
    global1 = array<Struct_1, 8>();
    if (!(!func_7(!(!vec3<bool>(arg_0, arg_0, arg_0))))) {
        var_0 = global2.a;
        let var_2 = false;
        global2 = Struct_1(max(~_wgslsmith_sub_vec4_u32(_wgslsmith_mult_vec4_u32(var_1.a, global2.a), global2.a), ~func_3(i32(-2147483648)).a), var_1.b);
        if (arg_0) {
            global1 = array<Struct_1, 8>();
            var var_3 = !select(select(!vec4<bool>(var_2, var_2, var_2, arg_0), !(!vec4<bool>(true, arg_0, false, false)), !select(vec4<bool>(false, var_2, arg_0, var_2), vec4<bool>(true, true, var_2, false), vec4<bool>(var_2, false, arg_0, true))), select(select(select(vec4<bool>(true, var_2, false, arg_0), vec4<bool>(true, arg_0, true, var_2), var_2), vec4<bool>(false, var_2, false, true), select(vec4<bool>(arg_0, arg_0, false, arg_0), vec4<bool>(true, arg_0, false, true), arg_0)), vec4<bool>(!var_2, func_5(1006f).x, !arg_0, var_2), func_5(_wgslsmith_f_op_f32(-1296f - -652f)).x), !arg_0);
        }
    }
    let var_2 = vec2<bool>(true, all(vec4<bool>(func_7(vec3<bool>(false, false, arg_0)) | any(vec4<bool>(arg_0, true, false, arg_0)), arg_0, any(!vec4<bool>(arg_0, true, arg_0, true)), !(u_input.b <= var_1.b.x))));
    return false;
}

fn func_8(arg_0: vec2<u32>, arg_1: vec2<bool>, arg_2: bool) -> vec2<bool> {
    let var_0 = 0u >> (_wgslsmith_div_u32(func_3(~global2.b.x).a.x & global2.a.x, 48534u) % 32u);
    for (var var_1 = 28246i; ; var_1 -= 1i) {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        var var_2 = -1000f <= _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(849f + _wgslsmith_f_op_f32(-2422f - 571f)) - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1563f) + _wgslsmith_f_op_f32(floor(-1668f)))));
        loop {
            if (LOOP_COUNTERS[4u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        }
        global2 = global1[_wgslsmith_index_u32(_wgslsmith_dot_vec2_u32(func_3(_wgslsmith_div_i32(~global2.b.x, u_input.b | 1i) ^ u_input.b).a.zz, _wgslsmith_mod_vec2_u32(select(_wgslsmith_mod_vec2_u32(global2.a.xy, vec2<u32>(36637u, 4294967295u)), ~global2.a.xw, arg_2 & true) << (reverseBits(arg_0) % vec2<u32>(32u)), arg_0)), 8u)];
        for (var var_3: i32; ; var_3 -= 1i) {
            if (LOOP_COUNTERS[5u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
            var var_4 = vec4<u32>(_wgslsmith_add_u32(~1u, ~global2.a.x), 16591u, _wgslsmith_dot_vec3_u32(global2.a.wzz, _wgslsmith_add_vec3_u32(~global2.a.xxy, ~vec3<u32>(u_input.a, 4294967295u, var_0))), firstTrailingBit(_wgslsmith_dot_vec3_u32(reverseBits(_wgslsmith_add_vec3_u32(global2.a.wyw, global2.a.xwx)), min(max(global2.a.zwx, global2.a.www), vec3<u32>(29896u, 9615u, 77462u) | vec3<u32>(global2.a.x, u_input.a, global2.a.x)))));
            var var_5 = Struct_1(global2.a, global2.b);
        }
        var var_3 = _wgslsmith_f_op_vec2_f32(trunc(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-2048f, 1000f)), vec2<f32>(-1093f, -762f))) - _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(max(vec2<f32>(-1769f, 1017f), vec2<f32>(1143f, -740f))) - vec2<f32>(2128f, -433f))))));
    }
    let var_1 = Struct_1(global2.a, vec4<i32>(_wgslsmith_clamp_i32(17800i, 2147483647i, -global2.b.x) << (func_3(_wgslsmith_dot_vec3_i32(global2.b.yyx, global2.b.xxz)).a.x % 32u), i32(-1i) * -1i, min(u_input.b, reverseBits(func_4(vec3<bool>(true, false, arg_2), vec3<bool>(arg_2, false, false), vec2<i32>(u_input.b, global2.b.x)).b.x)), -global2.b.x ^ _wgslsmith_div_i32(u_input.b, u_input.b)));
    global1 = array<Struct_1, 8>();
    for (; arg_1.x; ) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        continue;
    }
    return !vec2<bool>((arg_2 & false) == true, !func_2(false, 1u, _wgslsmith_f_op_f32(775f + 176f)));
}

fn func_1(arg_0: vec3<f32>) -> vec2<bool> {
    let var_0 = global2.b;
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        var var_1 = global1[_wgslsmith_index_u32(~(~_wgslsmith_dot_vec2_u32(_wgslsmith_sub_vec2_u32(vec2<u32>(global2.a.x, 0u), vec2<u32>(u_input.a, u_input.a)) >> (countOneBits(global2.a.yw) % vec2<u32>(32u)), ~(vec2<u32>(u_input.a, 1u) ^ global2.a.ww))), 8u)];
        for (var var_2 = max(global2.b.x, i32(-1i) * -1i); any(func_8(~vec2<u32>(abs(global2.a.x), ~38920u), !vec2<bool>(all(vec4<bool>(true, true, false, false)), func_2(false, u_input.a, 976f)), !(~global2.b.x > var_1.b.x))); global2 = func_4(select(!select(vec3<bool>(true, false, false), func_5(arg_0.x), func_6(Struct_1(var_1.a, vec4<i32>(u_input.b, var_1.b.x, 1i, 51274i)), Struct_1(vec4<u32>(35847u, u_input.a, u_input.a, global2.a.x), vec4<i32>(u_input.b, -28292i, global2.b.x, var_1.b.x)), i32(-2147483648))), func_5(_wgslsmith_f_op_f32(-arg_0.x)), select(select(vec3<bool>(false, true, true), func_5(2042f), vec3<bool>(false, false, false)), vec3<bool>(true, true, var_0.x > global2.b.x), vec3<bool>(true, true, true))), vec3<bool>(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(step(arg_0.x, 1115f)))) > _wgslsmith_f_op_f32(-237f), global2.b.x <= 1i, func_3(firstTrailingBit(1i)).a.x > _wgslsmith_sub_u32(_wgslsmith_sub_u32(u_input.a, u_input.a), abs(53385u))), abs(vec2<i32>(-1i, func_4(vec3<bool>(true, false, false), vec3<bool>(true, true, true), vec2<i32>(-14809i, global2.b.x)).b.x)) & vec2<i32>(u_input.b, _wgslsmith_sub_i32(1i, -var_0.x)))) {
            if (LOOP_COUNTERS[8u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
            continue;
        }
        continue;
    }
    let var_1 = func_3(i32(-2147483648));
    let var_2 = var_1;
    var var_3 = _wgslsmith_div_vec3_f32(vec3<f32>(1053f, 1002f, _wgslsmith_f_op_f32(select(arg_0.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_0.x - -250f)), !select(true, true, true)))), vec3<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(arg_0.x + _wgslsmith_f_op_f32(-1176f + arg_0.x)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(arg_0.x, arg_0.x)))), 429f, arg_0.x));
    return select(vec2<bool>(!(!any(vec4<bool>(true, true, false, true))), false), !select(vec2<bool>(var_3.x < arg_0.x, all(vec4<bool>(false, false, true, false))), vec2<bool>(true, true), true), !vec2<bool>(true, all(select(vec3<bool>(false, true, false), vec3<bool>(true, false, false), true))));
}

@compute
@workgroup_size(1)
fn main() {
    if (!(!((true != any(vec2<bool>(false, false))) || true))) {
        switch (u_input.b >> (global2.a.x % 32u)) {
            case i32(-2147483648): {
                global0 = all(vec2<bool>(true, true));
            }
            case -1i: {
                var var_0 = vec3<bool>(any(vec3<bool>(any(vec3<bool>(true, true, true)), _wgslsmith_dot_vec4_i32(global2.b, global2.b) > global2.b.x, true)), all(vec2<bool>(true, true)) & false, all(func_1(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(min(vec3<f32>(1760f, -325f, -587f), vec3<f32>(1512f, -1699f, -1948f)))))));
                let var_1 = Struct_1(_wgslsmith_add_vec4_u32(global2.a, func_3(_wgslsmith_sub_i32(global2.b.x, -1560i)).a) << (vec4<u32>(~0u | ~u_input.a, u_input.a, global2.a.x, ~(~global2.a.x)) % vec4<u32>(32u)), vec4<i32>(_wgslsmith_mult_i32(u_input.b, ~(global2.b.x & -44865i)), global2.b.x, u_input.b, 1i));
                var_0 = vec3<bool>(true, false, func_2(true, u_input.a, _wgslsmith_f_op_f32(sign(1697f))));
                var var_2 = var_1.b >> (var_1.a % vec4<u32>(32u));
                let var_3 = func_8(vec2<u32>(_wgslsmith_div_u32(_wgslsmith_sub_u32(4294967295u, 25428u), min(4294967295u, 16223u)) & u_input.a, 63222u), !var_0.yx, var_0.x).x;
            }
            case 2147483647i: {
            }
            case 1i: {
                var var_0 = global1[_wgslsmith_index_u32(1u, 8u)];
            }
            default: {
                global2 = global1[_wgslsmith_index_u32(global2.a.x, 8u)];
                return;
            }
        }
        switch (global2.b.x) {
            default: {
            }
        }
        var var_0 = reverseBits(global2.b << ((max(vec4<u32>(10141u, global2.a.x, 4294967295u, global2.a.x), _wgslsmith_div_vec4_u32(vec4<u32>(1u, u_input.a, global2.a.x, 105061u), vec4<u32>(1u, u_input.a, 0u, u_input.a))) & ~vec4<u32>(u_input.a, u_input.a, 27781u, 1u)) % vec4<u32>(32u)));
    }
    switch (max(u_input.b, func_3(-55256i).b.x)) {
        default: {
            global2 = Struct_1(~_wgslsmith_clamp_vec4_u32(global2.a, global2.a, _wgslsmith_mod_vec4_u32(global2.a ^ vec4<u32>(17225u, u_input.a, 1u, 72757u), ~global2.a)), vec4<i32>(1i, 0i, abs(u_input.b), global2.b.x));
        }
    }
    global0 = true;
    let var_0 = ~(1u ^ _wgslsmith_dot_vec4_u32(select(~vec4<u32>(global2.a.x, global2.a.x, 4294967295u, 1u), ~global2.a, select(vec4<bool>(false, true, false, true), vec4<bool>(true, true, false, true), vec4<bool>(true, true, false, false))), _wgslsmith_sub_vec4_u32(~global2.a, ~global2.a)));
    let var_1 = -(u_input.b ^ i32(-2147483648));
    let var_2 = vec3<u32>(abs(~global2.a.x), 23932u, min(0u, u_input.a));
    loop {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        for (var var_3 = -51241i; ; global1 = array<Struct_1, 8>()) {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
            continue;
        }
        let var_3 = vec3<i32>(11923i, max(global2.b.x >> (_wgslsmith_sub_u32(1u, 1u) % 32u), var_1) ^ 3737i, u_input.b);
        if (!func_2(all(vec3<bool>(true, func_1(vec3<f32>(-334f, -966f, -1095f)).x, false)), 0u, 972f)) {
            return;
        }
        continue;
    }
    let var_3 = false;
    let x = u_input.a;
    s_output = StorageBuffer(global2.a.xz, _wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(vec4<f32>(1064f, _wgslsmith_f_op_f32(f32(-1f) * -1859f), -1156f, -561f), _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(vec4<f32>(-894f, 317f, -175f, -1321f) + vec4<f32>(-157f, -155f, -316f, 663f)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(-1592f, -345f, 293f, 121f)), select(vec4<bool>(var_3, var_3, true, var_3), vec4<bool>(var_3, var_3, var_3, false), false))))), min(_wgslsmith_mult_vec3_u32(~global2.a.ywz, _wgslsmith_clamp_vec3_u32(_wgslsmith_mod_vec3_u32(var_2, vec3<u32>(var_2.x, var_0, 0u)), _wgslsmith_clamp_vec3_u32(global2.a.xyy, global2.a.xyw, global2.a.xyz), ~global2.a.zyy)), select(global2.a.xxz, _wgslsmith_div_vec3_u32(var_2, global2.a.zyy), true)), _wgslsmith_f_op_vec4_f32(vec4<f32>(1f, 1f, 1f, 1f) - vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(-453f, -1412f))), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-1150f), _wgslsmith_f_op_f32(f32(-1f) * -724f))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(floor(-375f)), _wgslsmith_f_op_f32(trunc(260f))), -388f)));
}

`;