export const input = [199,54,34,194,147,226,131,96,119,33,82,17,126,200,197,21,126,216,148,208,166,9,31,204,126,90,101,34,138,230,121,113,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [199,54,34,194,147,226,131,96,119,33,82,17,126,200,197,21,126,216,148,208,166,9,31,204,126,90,101,34,138,230,121,113,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[199,54,34,194,147,226,131,96,119,33,82,17,126,200,197,21,126,216,148,208,166,9,31,204,126,90,101,34,138,230,121,113]}
// Seed: 9358618612441335085

struct Struct_1 {
    a: bool,
    b: bool,
    c: i32,
    d: u32,
}

struct Struct_2 {
    a: vec2<u32>,
    b: Struct_1,
}

struct UniformBuffer {
    a: u32,
    b: vec3<i32>,
    c: u32,
}

struct StorageBuffer {
    a: vec3<u32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: i32;

var<private> global1: vec2<bool>;

var<private> global2: Struct_2;

var<private> LOOP_COUNTERS: array<u32, 30>;

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn func_6(arg_0: Struct_1, arg_1: i32, arg_2: Struct_2, arg_3: vec3<f32>) -> f32 {
    var var_0 = arg_0;
    let var_1 = var_0.c;
    if (true) {
        global1 = select(vec2<bool>(global1.x, !((global2.a.x < arg_0.d) & var_0.b)), select(!vec2<bool>(global1.x, true), select(select(select(vec2<bool>(true, global1.x), vec2<bool>(arg_0.b, global1.x), vec2<bool>(true, true)), select(vec2<bool>(false, global1.x), vec2<bool>(true, global1.x), vec2<bool>(arg_2.b.a, arg_0.b)), select(vec2<bool>(true, arg_2.b.b), vec2<bool>(false, true), vec2<bool>(true, arg_0.a))), select(vec2<bool>(true, true), vec2<bool>(global2.b.a, true), vec2<bool>(false, true)), vec2<bool>(false, arg_2.a.x < arg_2.b.d)), !vec2<bool>(!var_0.b, arg_2.b.b)), arg_2.b.b);
        var var_2 = any(vec2<bool>(_wgslsmith_dot_vec3_u32(vec3<u32>(4294967295u, 13138u, 4294967295u), ~vec3<u32>(0u, 12825u, u_input.c)) != abs(global2.b.d << (0u % 32u)), all(select(vec4<bool>(true, true, arg_2.b.b, true), !vec4<bool>(true, true, var_0.b, true), !vec4<bool>(true, var_0.a, arg_0.a, true)))));
    }
    var var_2 = _wgslsmith_sub_u32(~var_0.d, ~abs(10120u));
    var var_3 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(abs(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(arg_3.x, -402f))))));
    return _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(arg_3.x + _wgslsmith_div_f32(-1071f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1638f - var_3.x))))));
}

fn func_5() -> Struct_1 {
    let var_0 = _wgslsmith_f_op_f32(335f + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(func_6(Struct_1(true, false, 2533i, 1445u), ~2147483647i, Struct_2(global2.a, global2.b), _wgslsmith_f_op_vec3_f32(-vec3<f32>(1112f, 1000f, 730f))))))));
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        let var_1 = Struct_2(abs(select(~global2.a, ~vec2<u32>(4294967295u, 93679u), true) ^ vec2<u32>(u_input.c, min(74155u, 82132u))), global2.b);
        continue;
    }
    global2 = Struct_2(global2.a, Struct_1(all(!(!vec4<bool>(global2.b.a, global1.x, global2.b.b, global1.x))), any(vec2<bool>(any(vec3<bool>(false, global1.x, global2.b.a)), global2.b.a)), ~(~1i), (~63143u | firstTrailingBit(77292u)) << (u_input.a % 32u)));
    if (false && any(!select(vec2<bool>(true, true), vec2<bool>(global2.b.a, true), true))) {
        global1 = !vec2<bool>(global2.b.b, global2.b.a);
        var var_1 = global2.a;
    }
    loop {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        global0 = ~_wgslsmith_mult_i32(u_input.b.x, _wgslsmith_dot_vec4_i32(-(~vec4<i32>(53907i, u_input.b.x, 16714i, -11867i)), abs(vec4<i32>(1i, u_input.b.x, u_input.b.x, global2.b.c) >> (vec4<u32>(u_input.a, 0u, u_input.a, u_input.c) % vec4<u32>(32u)))));
        if (!(!any(!select(vec4<bool>(true, true, global2.b.b, global1.x), vec4<bool>(global1.x, false, true, false), vec4<bool>(false, global2.b.a, true, true))))) {
            break;
        }
        for (; ; ) {
            if (LOOP_COUNTERS[2u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            var var_1 = 36178i;
            var var_2 = _wgslsmith_div_vec3_u32(_wgslsmith_mult_vec3_u32(abs(vec3<u32>(1u, 17399u, 4294967295u)), abs(_wgslsmith_clamp_vec3_u32(vec3<u32>(u_input.c, global2.a.x, 0u), vec3<u32>(u_input.c, u_input.a, global2.a.x), vec3<u32>(38244u, 4294967295u, u_input.c)))), vec3<u32>(_wgslsmith_clamp_u32(~0u, 33588u, u_input.c), _wgslsmith_add_u32(_wgslsmith_dot_vec4_u32(vec4<u32>(u_input.a, 4294967295u, global2.b.d, global2.a.x), vec4<u32>(u_input.a, 0u, global2.a.x, 1u)), countOneBits(16145u)), abs(~u_input.a))) ^ countOneBits(firstLeadingBit(~(~vec3<u32>(u_input.c, 11505u, 1u))));
            continue;
        }
        switch (_wgslsmith_mod_i32(global2.b.c, ~_wgslsmith_dot_vec4_i32(-vec4<i32>(u_input.b.x, 12090i, global2.b.c, global2.b.c), abs(~vec4<i32>(-1i, 0i, 1i, 55555i))))) {
            case 5329i: {
                var var_1 = Struct_2(global2.a, global2.b);
                break;
            }
            case 0i: {
                continue;
            }
            default: {
                break;
            }
        }
    }
    return global2.b;
}

fn func_4(arg_0: vec3<bool>, arg_1: Struct_2, arg_2: vec2<bool>, arg_3: vec4<u32>) -> i32 {
    switch (reverseBits(_wgslsmith_sub_i32(-31966i, ~(-global2.b.c << ((43143u << (arg_3.x % 32u)) % 32u))))) {
        case i32(-2147483648): {
            for (var var_0: i32; false; var_0 -= 1i) {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
                let var_1 = func_5();
                break;
            }
            loop {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                continue;
            }
            var var_0 = Struct_2(~(~(~vec2<u32>(global2.a.x, global2.a.x))), func_5());
            if (!(!any(vec4<bool>(false, all(arg_2), true, any(vec3<bool>(global1.x, false, true)))))) {
                var var_1 = ~1u;
                let var_2 = vec3<i32>(40593i, select(~global2.b.c, -21132i, true) >> (4294967295u % 32u), var_0.b.c);
                let var_3 = func_5();
                return max(~22744i, arg_1.b.c);
            }
        }
        case -1i: {
            if (false) {
                let var_0 = arg_1;
                let var_1 = Struct_1(true, true, -abs(-arg_1.b.c), global2.b.d);
                let var_2 = var_0.a ^ countOneBits(global2.a);
                var var_3 = _wgslsmith_dot_vec4_u32(select(vec4<u32>(global2.a.x, ~0u, _wgslsmith_add_u32(4294967295u >> (arg_3.x % 32u), 114561u), 13432u), ~vec4<u32>(global2.a.x, var_0.b.d, u_input.a, 0u) ^ vec4<u32>(u_input.c, _wgslsmith_add_u32(4294967295u, arg_3.x), var_2.x, ~75591u), !select(vec4<bool>(false, var_1.b, arg_2.x, false), vec4<bool>(arg_2.x, true, true, true), select(vec4<bool>(var_0.b.a, global2.b.b, false, arg_0.x), vec4<bool>(false, var_0.b.a, var_0.b.b, true), arg_1.b.b))), vec4<u32>(_wgslsmith_div_u32(abs(abs(80763u)), reverseBits(u_input.c)), ~_wgslsmith_dot_vec4_u32(arg_3, _wgslsmith_sub_vec4_u32(vec4<u32>(1u, 3414u, 0u, var_0.b.d), vec4<u32>(var_2.x, global2.b.d, arg_3.x, global2.b.d))), arg_1.b.d, global2.a.x));
                var var_4 = arg_2.x;
            }
        }
        default: {
            var var_0 = select(vec2<bool>(all(vec4<bool>(arg_2.x, arg_1.b.b, true, global1.x)) & ((36158u | arg_1.a.x) < 51840u), global2.b.b), !(!select(!arg_0.xx, arg_2, vec2<bool>(true, false))), select(select(arg_2, arg_0.xz, arg_0.x && any(arg_0)), select(vec2<bool>(false, select(arg_1.b.a, global2.b.a, false)), vec2<bool>(true, u_input.a > 41638u), vec2<bool>(true, true)), vec2<bool>(!arg_1.b.b, any(arg_0))));
        }
    }
    var var_0 = vec2<i32>(~_wgslsmith_sub_i32(i32(-2147483648), _wgslsmith_dot_vec3_i32(vec3<i32>(u_input.b.x, u_input.b.x, 36605i), ~vec3<i32>(-15201i, 1i, -19176i))), 2147483647i);
    if (any(select(!arg_0, select(arg_0, select(!vec3<bool>(arg_1.b.a, arg_1.b.b, true), vec3<bool>(true, arg_1.b.a, true), select(vec3<bool>(global2.b.b, arg_2.x, arg_0.x), vec3<bool>(false, false, global2.b.a), arg_0)), true), global2.b.b))) {
    }
    switch (_wgslsmith_mod_i32(global2.b.c, func_5().c | _wgslsmith_add_i32((global2.b.c << (u_input.c % 32u)) << (~arg_3.x % 32u), max(arg_1.b.c, u_input.b.x) & -15915i))) {
        case 2147483647i: {
            loop {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                var var_1 = arg_1;
                continue;
            }
        }
        case -47367i: {
        }
        case 0i: {
            if (!(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(sign(-1000f)))) < -839f)) {
                let var_1 = arg_3.www;
                var var_2 = arg_1;
                var var_3 = firstLeadingBit(global2.b.c);
            }
            global0 = _wgslsmith_mult_i32(i32(-1i) * -1i, global2.b.c << (22125u % 32u));
            switch (reverseBits(0i)) {
                case 20023i: {
                    global0 = arg_1.b.c;
                }
                case 56929i: {
                    global1 = vec2<bool>(!(!(~arg_3.x > 1u)), arg_1.b.b);
                }
                case 2147483647i: {
                    var var_1 = -(~(-abs(vec3<i32>(-12416i, arg_1.b.c, 1i))));
                }
                case 2639i: {
                }
                default: {
                }
            }
            var var_1 = _wgslsmith_mult_vec2_i32(vec2<i32>(1i, global2.b.c), reverseBits(~u_input.b.zx) & (max(~vec2<i32>(14684i, 0i), vec2<i32>(1i, u_input.b.x)) >> (_wgslsmith_div_vec2_u32(~arg_3.yw, min(vec2<u32>(arg_3.x, 35626u), vec2<u32>(arg_1.b.d, arg_1.b.d))) % vec2<u32>(32u))));
        }
        case -16110i: {
            var_0 = ~_wgslsmith_mod_vec2_i32(~_wgslsmith_clamp_vec2_i32(vec2<i32>(u_input.b.x, global2.b.c), ~vec2<i32>(var_0.x, 0i), countOneBits(vec2<i32>(5577i, -2946i))), vec2<i32>(_wgslsmith_dot_vec3_i32(~u_input.b, max(vec3<i32>(0i, var_0.x, u_input.b.x), vec3<i32>(0i, 1i, global2.b.c))), var_0.x));
            var_0 = firstTrailingBit(-(vec2<i32>(0i, 1i) >> (abs(vec2<u32>(arg_3.x, 97043u)) % vec2<u32>(32u))));
        }
        default: {
        }
    }
    var_0 = select(~(vec2<i32>(-global2.b.c, global2.b.c << (arg_3.x % 32u)) << (~arg_3.zy % vec2<u32>(32u))), _wgslsmith_mult_vec2_i32(~(u_input.b.xy | u_input.b.xy), vec2<i32>(u_input.b.x, _wgslsmith_mult_i32(_wgslsmith_dot_vec3_i32(u_input.b, u_input.b), ~(i32(-2147483648))))), !global1.x);
    return 1i;
}

fn func_7(arg_0: vec3<i32>) -> i32 {
    switch (abs(_wgslsmith_mod_i32(_wgslsmith_dot_vec2_i32(-u_input.b.xz, vec2<i32>(-30225i, u_input.b.x)), global2.b.c)) & reverseBits(~func_4(!vec3<bool>(global1.x, false, true), Struct_2(global2.a, global2.b), select(vec2<bool>(global1.x, global2.b.a), vec2<bool>(global2.b.a, global1.x), vec2<bool>(global2.b.b, true)), _wgslsmith_mult_vec4_u32(vec4<u32>(global2.b.d, 1u, u_input.a, global2.b.d), vec4<u32>(32785u, 20358u, 30593u, 1u))))) {
        case -8406i: {
            var var_0 = func_5();
            for (var var_1 = 72165i; global1.x | true; global2 = Struct_2(vec2<u32>(~var_0.d, u_input.c), func_5())) {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                var var_2 = _wgslsmith_f_op_f32(f32(-1f) * -297f);
                let var_3 = func_5();
                var var_4 = u_input.b;
            }
            loop {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                var var_1 = Struct_2(_wgslsmith_clamp_vec2_u32(~select(~vec2<u32>(4294967295u, u_input.c), vec2<u32>(4294967295u, 22335u), var_0.b), ~countOneBits(~global2.a), ~global2.a), global2.b);
                let var_2 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(1000f, 2359f, false)) * -1167f), 792f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(576f * -702f)))));
                var var_3 = vec2<f32>(_wgslsmith_f_op_f32(var_2 * _wgslsmith_f_op_f32(func_6(global2.b, firstTrailingBit(global2.b.c), Struct_2(var_1.a, func_5()), _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-vec3<f32>(901f, var_2, var_2)), _wgslsmith_f_op_vec3_f32(sign(vec3<f32>(var_2, -290f, var_2))), any(vec3<bool>(global1.x, global2.b.a, true))))))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1409f) * _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_6(Struct_1(var_1.b.a, global2.b.b, var_0.c, var_1.b.d), var_1.b.c, Struct_2(vec2<u32>(var_0.d, var_1.b.d), Struct_1(true, false, 44536i, u_input.c)), vec3<f32>(1128f, 825f, 365f))))))));
                var var_4 = var_1.b;
            }
        }
        default: {
            let var_0 = 10624u >= select(19340u, 4294967295u, true);
            for (var var_1: i32; var_1 > i32(-2147483648); var_1 -= 1i) {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                continue;
            }
            for (var var_1 = 29658i; ; var_1 -= 1i) {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                var var_2 = Struct_2(countOneBits(~min(min(global2.a, vec2<u32>(4294967295u, 15173u)), vec2<u32>(1u, global2.a.x) << (vec2<u32>(19780u, 0u) % vec2<u32>(32u)))), func_5());
            }
            switch (-(~1i)) {
                case -29742i: {
                }
                case 0i: {
                    let var_1 = Struct_2(~vec2<u32>(~global2.b.d, ~4294967295u), global2.b);
                    let var_2 = var_1.b;
                    var var_3 = ~_wgslsmith_div_u32(_wgslsmith_add_u32(0u, u_input.a << (4294967295u % 32u)), 67270u) | 47477u;
                }
                case -1i: {
                    var var_1 = Struct_2(vec2<u32>(107987u, _wgslsmith_mod_u32(reverseBits(_wgslsmith_clamp_u32(u_input.c, global2.a.x, 9454u)), 4294967295u)), func_5());
                    var var_2 = !(!select(!vec4<bool>(true, false, var_1.b.a, global2.b.a), vec4<bool>(true, all(vec3<bool>(true, global2.b.a, var_0)), false, true), vec4<bool>(arg_0.x != global2.b.c, true, true, false)));
                    var var_3 = global2.b;
                }
                case -27884i: {
                    var var_1 = -244f;
                    var var_2 = vec2<i32>(-(abs(global2.b.c) ^ ~_wgslsmith_sub_i32(2147483647i, u_input.b.x)), global2.b.c);
                    var_1 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-196f) - -1000f);
                }
                default: {
                }
            }
        }
    }
    switch (7841i) {
        case 46421i: {
            var var_0 = !all(vec2<bool>(select(any(vec4<bool>(false, true, global1.x, global2.b.b)), global1.x, !global2.b.a), global2.b.a));
            switch (~func_5().c) {
                default: {
                    var_0 = !any(!vec2<bool>(any(vec3<bool>(global2.b.b, global1.x, global1.x)), 6453i >= arg_0.x));
                    global1 = select(!(!vec2<bool>(all(vec2<bool>(global1.x, false)), 2147483647i <= u_input.b.x)), select(select(select(vec2<bool>(true, true), vec2<bool>(false, true), select(vec2<bool>(global2.b.a, global1.x), vec2<bool>(global2.b.b, true), vec2<bool>(global2.b.a, true))), vec2<bool>(!global1.x, global1.x), true), select(vec2<bool>(global2.b.a, !global1.x), !(!vec2<bool>(false, global2.b.b)), select(true, true, global1.x & true)), !vec2<bool>(true, global2.b.b)), select(select(!select(vec2<bool>(global2.b.b, false), vec2<bool>(global1.x, global2.b.a), vec2<bool>(false, global1.x)), vec2<bool>(any(vec4<bool>(true, global1.x, global1.x, false)), false), true), vec2<bool>(false, true), (~4724u ^ (u_input.a >> (global2.a.x % 32u))) != (4294967295u | countOneBits(u_input.c))));
                    global2 = Struct_2(~global2.a, Struct_1(global2.b.b, true, _wgslsmith_sub_i32(select(arg_0.x, 1i, true), arg_0.x), ~u_input.a));
                    global1 = select(select(select(!(!vec2<bool>(global2.b.b, true)), vec2<bool>(true, true), vec2<bool>(8882u == global2.a.x, false)), !select(vec2<bool>(true, true), select(vec2<bool>(global2.b.b, true), vec2<bool>(global1.x, true), vec2<bool>(global1.x, global2.b.a)), select(vec2<bool>(global2.b.b, true), vec2<bool>(false, true), false)), true && (global1.x & global2.b.b)), vec2<bool>(any(vec3<bool>(global2.b.b, true, true)), all(select(!vec4<bool>(global1.x, true, global1.x, false), !vec4<bool>(global2.b.a, false, global1.x, global1.x), vec4<bool>(global2.b.b, global1.x, false, global2.b.b)))), !any(vec4<bool>(true, false, false & global1.x, global1.x)));
                }
            }
        }
        case -14550i: {
            for (var var_0 = global2.b.c; var_0 <= -20319i; global0 = 1i) {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                global1 = select(!select(vec2<bool>(false, global1.x), !(!vec2<bool>(global1.x, global1.x)), select(!vec2<bool>(global2.b.b, false), !vec2<bool>(true, global1.x), vec2<bool>(global2.b.b, global2.b.b))), select(!vec2<bool>(true, all(vec2<bool>(global2.b.b, false))), select(vec2<bool>(global2.b.a, global2.b.b), !select(vec2<bool>(true, false), vec2<bool>(global1.x, true), vec2<bool>(true, false)), false), !(reverseBits(u_input.b.x) > -7489i)), vec2<bool>(any(select(vec3<bool>(global1.x, global1.x, true), vec3<bool>(global2.b.b, global2.b.b, true), false)), select(true, func_5().a, true)));
                continue;
            }
            global2 = Struct_2(select(abs(min(global2.a, firstTrailingBit(global2.a))), vec2<u32>(63949u, 19880u), vec2<bool>(false, global2.b.b)), func_5());
            var var_0 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(-248f + _wgslsmith_f_op_f32(130f - -641f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(1519f * -1957f) - _wgslsmith_f_op_f32(-134f * 379f)), _wgslsmith_f_op_f32(f32(-1f) * -545f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(-204f)) - 867f)), _wgslsmith_f_op_vec4_f32(select(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(-1192f, 340f, 193f, -305f) - vec4<f32>(-2579f, -218f, 366f, 298f)), _wgslsmith_f_op_vec4_f32(vec4<f32>(-264f, -733f, 1000f, -616f) - vec4<f32>(1170f, 761f, -189f, 1000f))), _wgslsmith_f_op_vec4_f32(sign(vec4<f32>(1027f, 769f, -743f, 499f))), !global2.b.b))));
            let var_1 = func_5();
            let var_2 = vec3<f32>(_wgslsmith_f_op_f32(var_0.x + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-937f))), 550f, var_0.x);
        }
        case i32(-2147483648): {
            switch (u_input.b.x) {
                default: {
                    global0 = u_input.b.x;
                    var var_0 = arg_0.x;
                    var var_1 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(197f * _wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -134f) + _wgslsmith_div_f32(307f, -1702f)), _wgslsmith_f_op_f32(select(-1228f, 1000f, arg_0.x < u_input.b.x)))), 851f);
                    let var_2 = 1i;
                }
            }
            return func_5().c;
        }
        case 16092i: {
            var var_0 = Struct_2(global2.a, func_5());
            switch (_wgslsmith_dot_vec2_i32(vec2<i32>(arg_0.x, _wgslsmith_dot_vec3_i32(arg_0, -vec3<i32>(u_input.b.x, u_input.b.x, u_input.b.x))), firstLeadingBit(~countOneBits(u_input.b.zz)))) {
                case 89116i: {
                    global2 = Struct_2(abs(_wgslsmith_clamp_vec2_u32(max(~var_0.a, vec2<u32>(global2.a.x, 4294967295u) << (vec2<u32>(1u, u_input.c) % vec2<u32>(32u))), countOneBits(~vec2<u32>(45327u, var_0.a.x)), _wgslsmith_div_vec2_u32(global2.a, vec2<u32>(var_0.b.d, u_input.a) ^ vec2<u32>(global2.a.x, 1u)))), var_0.b);
                    global1 = !vec2<bool>(global2.b.a | !global1.x, any(!select(vec3<bool>(true, false, false), vec3<bool>(false, false, global1.x), vec3<bool>(false, true, var_0.b.a))));
                }
                default: {
                    let var_1 = ~(~1u);
                }
            }
            loop {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
            }
            let var_1 = _wgslsmith_mod_u32(_wgslsmith_mult_u32(u_input.a, u_input.c) | (abs(_wgslsmith_div_u32(u_input.a, global2.a.x)) << (4294967295u % 32u)), firstLeadingBit(_wgslsmith_dot_vec2_u32(_wgslsmith_mult_vec2_u32(vec2<u32>(global2.b.d, global2.a.x) | var_0.a, ~vec2<u32>(global2.b.d, u_input.c)), abs(vec2<u32>(33273u, var_0.b.d)) & (vec2<u32>(u_input.a, global2.a.x) ^ vec2<u32>(19531u, global2.b.d)))));
        }
        default: {
        }
    }
    if (_wgslsmith_sub_u32(global2.a.x, _wgslsmith_dot_vec3_u32(_wgslsmith_mod_vec3_u32(select(vec3<u32>(global2.b.d, global2.b.d, 1u), vec3<u32>(1307u, 15634u, u_input.a), vec3<bool>(false, global1.x, global2.b.a)), ~vec3<u32>(global2.a.x, u_input.c, global2.a.x)), ~vec3<u32>(0u, 59000u, 83648u) | (vec3<u32>(u_input.c, 1u, global2.b.d) >> (vec3<u32>(global2.b.d, u_input.c, 17510u) % vec3<u32>(32u))))) >= func_5().d) {
        let var_0 = Struct_2(_wgslsmith_clamp_vec2_u32(global2.a | select(global2.a, ~global2.a, any(vec4<bool>(true, global2.b.b, global1.x, global2.b.a))), ~(~global2.a), _wgslsmith_div_vec2_u32(global2.a, abs(~vec2<u32>(u_input.c, 0u)))), global2.b);
        global2 = Struct_2(vec2<u32>(firstTrailingBit(~reverseBits(var_0.b.d)), 63368u), func_5());
        let var_1 = vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(min(334f, _wgslsmith_f_op_f32(-1466f + -548f))), _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(floor(-949f)))))) - 952f), _wgslsmith_f_op_f32(f32(-1f) * -433f));
        global1 = select(vec2<bool>(false, !global2.b.b), !select(select(vec2<bool>(global1.x, global2.b.b), select(vec2<bool>(false, global1.x), vec2<bool>(global2.b.b, false), vec2<bool>(global1.x, true)), false), select(select(vec2<bool>(global2.b.b, true), vec2<bool>(false, global1.x), global1.x), !vec2<bool>(true, var_0.b.b), !vec2<bool>(var_0.b.b, false)), false), !(!vec2<bool>(global1.x, true)));
        loop {
            if (LOOP_COUNTERS[12u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
            var var_2 = vec4<u32>(1u, ~_wgslsmith_div_u32(~(~global2.b.d), _wgslsmith_dot_vec2_u32(~var_0.a, ~var_0.a)), min(~global2.a.x, max(var_0.b.d, 0u)), global2.a.x);
            let var_3 = global2.a.x;
            break;
        }
    }
    loop {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        global0 = abs(_wgslsmith_dot_vec3_i32(~(-vec3<i32>(u_input.b.x, arg_0.x, u_input.b.x)), select(arg_0, ~(-vec3<i32>(-27105i, arg_0.x, u_input.b.x)), vec3<bool>(global1.x, any(vec2<bool>(global2.b.a, false)), global1.x))));
        for (var var_0 = 0i; select(global1.x, false, true && !(!global1.x)); var_0 -= 1i) {
            if (LOOP_COUNTERS[14u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
            break;
        }
    }
    global2 = Struct_2(global2.a, func_5());
    return ~(global2.b.c ^ (global2.b.c & arg_0.x));
}

fn func_8(arg_0: u32, arg_1: vec3<u32>, arg_2: i32) -> bool {
    if (global1.x) {
        loop {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            continue;
        }
    }
    switch (_wgslsmith_div_i32(_wgslsmith_div_i32(_wgslsmith_mult_i32(u_input.b.x, firstLeadingBit(u_input.b.x)), countOneBits(_wgslsmith_clamp_i32(global2.b.c, arg_2, -77180i))) >> (select(arg_0, ~abs(global2.a.x), true == all(vec4<bool>(global1.x, global1.x, global1.x, false))) % 32u), _wgslsmith_dot_vec4_i32(_wgslsmith_clamp_vec4_i32((vec4<i32>(u_input.b.x, u_input.b.x, arg_2, arg_2) & vec4<i32>(-1i, u_input.b.x, global2.b.c, arg_2)) << (select(vec4<u32>(4294967295u, 1u, u_input.c, global2.a.x), vec4<u32>(1u, global2.b.d, 4294967295u, u_input.c), global1.x) % vec4<u32>(32u)), firstTrailingBit(-vec4<i32>(global2.b.c, arg_2, arg_2, u_input.b.x)), _wgslsmith_mod_vec4_i32(_wgslsmith_mult_vec4_i32(vec4<i32>(global2.b.c, 28352i, 0i, -1i), vec4<i32>(-14646i, arg_2, global2.b.c, u_input.b.x)), -vec4<i32>(u_input.b.x, global2.b.c, i32(-2147483648), global2.b.c))), vec4<i32>(_wgslsmith_mult_i32(~14712i, global2.b.c), _wgslsmith_dot_vec4_i32(-vec4<i32>(2147483647i, global2.b.c, 1i, u_input.b.x), firstTrailingBit(vec4<i32>(global2.b.c, 0i, -20266i, u_input.b.x))), _wgslsmith_sub_i32(1i, -global2.b.c), global2.b.c)))) {
        case -63107i: {
            switch (abs(arg_2)) {
                case -50789i: {
                    let var_0 = u_input.b.x;
                    var var_1 = false;
                    var_1 = true;
                    let var_2 = -1i;
                }
                case 3771i: {
                    var var_0 = Struct_2(~(arg_1.xz >> (_wgslsmith_clamp_vec2_u32(global2.a, countOneBits(vec2<u32>(u_input.a, u_input.c)), vec2<u32>(7941u, global2.b.d)) % vec2<u32>(32u))), Struct_1(global1.x, !select(true, !global2.b.a, all(vec4<bool>(false, true, global1.x, global2.b.a))), ~_wgslsmith_sub_i32(22649i ^ arg_2, 2147483647i), ~72558u));
                    global0 = ~arg_2;
                    let var_1 = _wgslsmith_mult_u32(~(~u_input.a), ~(~56326u));
                }
                case 1i: {
                    global1 = !(!select(!select(vec2<bool>(true, global2.b.a), vec2<bool>(global2.b.b, false), vec2<bool>(true, false)), !vec2<bool>(true, global1.x), true));
                }
                default: {
                }
            }
        }
        default: {
            var var_0 = _wgslsmith_mult_vec4_u32(~_wgslsmith_mult_vec4_u32(~_wgslsmith_clamp_vec4_u32(vec4<u32>(0u, arg_0, u_input.a, 11141u), vec4<u32>(4294967295u, arg_0, global2.a.x, 4294967295u), vec4<u32>(u_input.c, 4294967295u, arg_0, arg_1.x)), ~vec4<u32>(1u, 1u, 1u, arg_0) & _wgslsmith_sub_vec4_u32(vec4<u32>(1u, global2.a.x, 38794u, arg_1.x), vec4<u32>(22576u, 64321u, 0u, u_input.a))), ~(~(~vec4<u32>(global2.b.d, 1u, 70957u, global2.a.x)) >> (~(~vec4<u32>(global2.b.d, global2.b.d, global2.a.x, 95681u)) % vec4<u32>(32u))));
            global0 = func_5().c | ~(i32(-1i) * -(arg_2 & global2.b.c));
        }
    }
    global2 = Struct_2(vec2<u32>(36905u, ~24805u), global2.b);
    let var_0 = Struct_1(!(!(select(global1.x, global1.x, false) && true)), global1.x, -(~arg_2), _wgslsmith_clamp_u32(68857u, global2.b.d | (u_input.c | _wgslsmith_div_u32(arg_1.x, 4294967295u)), u_input.c));
    let var_1 = func_5();
    return true;
}

fn func_3() -> vec2<bool> {
    var var_0 = func_8(72897u, reverseBits(vec3<u32>(34828u, _wgslsmith_mod_u32(u_input.a, 65078u), ~_wgslsmith_dot_vec3_u32(vec3<u32>(28200u, global2.b.d, 57610u), vec3<u32>(1u, 12434u, 0u)))), -func_7(vec3<i32>(51944i, 1i & u_input.b.x, func_4(vec3<bool>(false, global2.b.a, true), Struct_2(global2.a, Struct_1(global1.x, global2.b.b, u_input.b.x, global2.a.x)), vec2<bool>(true, true), vec4<u32>(1u, u_input.a, u_input.a, u_input.a)))));
    if (global2.b.b) {
        var var_1 = true;
        var var_2 = select(global2.b.c, -396i, true | all(select(select(vec4<bool>(global2.b.a, false, true, global2.b.b), vec4<bool>(global2.b.a, false, true, global1.x), global1.x), vec4<bool>(true, global2.b.b, global2.b.b, false), vec4<bool>(true, global1.x, global1.x, false))));
        let var_3 = 1008f;
        if (any(!vec4<bool>(true, select(global1.x, true, global2.b.b), !global1.x, global2.b.a))) {
            let var_4 = _wgslsmith_clamp_vec4_u32(~countOneBits(abs(select(vec4<u32>(0u, 78567u, global2.a.x, 0u), vec4<u32>(u_input.c, global2.a.x, 0u, global2.b.d), global1.x))), ~_wgslsmith_sub_vec4_u32(~reverseBits(vec4<u32>(0u, 4294967295u, 4294967295u, u_input.c)), select(reverseBits(vec4<u32>(global2.a.x, u_input.c, 4294967295u, u_input.c)), ~vec4<u32>(10239u, global2.b.d, u_input.c, 1u), true)), vec4<u32>(25733u, firstLeadingBit(u_input.c), abs(20967u), u_input.c) | select(abs(_wgslsmith_div_vec4_u32(vec4<u32>(26101u, 59910u, global2.a.x, 57551u), vec4<u32>(global2.a.x, 4294967295u, global2.b.d, u_input.a))), countOneBits(firstTrailingBit(vec4<u32>(115869u, global2.b.d, 12580u, 13111u))), true));
            let var_5 = Struct_2(~select(global2.a, var_4.yz >> (~var_4.ww % vec2<u32>(32u)), true), func_5());
            return !vec2<bool>(true, global1.x);
        }
        let var_4 = vec2<bool>((func_5().d <= 0u) || false, !(false && global1.x));
    }
    if (false) {
        switch (~(-17487i & _wgslsmith_dot_vec4_i32(select(select(vec4<i32>(i32(-2147483648), global2.b.c, u_input.b.x, u_input.b.x), vec4<i32>(global2.b.c, i32(-2147483648), 23670i, 2147483647i), true), select(vec4<i32>(u_input.b.x, -26665i, u_input.b.x, u_input.b.x), vec4<i32>(2147483647i, i32(-2147483648), u_input.b.x, 31736i), false), vec4<bool>(false, global2.b.a, global1.x, global2.b.a)), vec4<i32>(2147483647i, 615i, i32(-2147483648) | global2.b.c, u_input.b.x >> (u_input.a % 32u))))) {
            case 1i: {
                return !select(!select(select(vec2<bool>(global2.b.a, true), vec2<bool>(true, false), false), !vec2<bool>(global1.x, true), select(vec2<bool>(false, global1.x), vec2<bool>(true, global1.x), vec2<bool>(false, false))), vec2<bool>(28580u <= _wgslsmith_div_u32(1u, global2.b.d), func_8(110776u, vec3<u32>(u_input.a, u_input.c, u_input.c), -u_input.b.x)), !vec2<bool>(true, select(true, true, global2.b.a)));
            }
            default: {
            }
        }
    }
    global1 = vec2<bool>(global1.x, all(vec3<bool>(44585u > _wgslsmith_add_u32(global2.b.d, 37035u), global1.x, true)));
    for (; ; ) {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        var_0 = any(vec4<bool>(func_8(~(~u_input.c), countOneBits(~vec3<u32>(global2.b.d, global2.b.d, 1u)), -51778i), (func_8(u_input.c, vec3<u32>(7371u, global2.b.d, global2.b.d), u_input.b.x) && !global1.x) == all(!vec4<bool>(global2.b.b, global1.x, global1.x, true)), false, global1.x && any(vec2<bool>(global1.x, global1.x))));
    }
    return !select(!(!select(vec2<bool>(false, false), vec2<bool>(false, false), vec2<bool>(true, global1.x))), select(!select(vec2<bool>(true, global2.b.a), vec2<bool>(false, true), vec2<bool>(global1.x, global1.x)), vec2<bool>(true, true), !(!vec2<bool>(false, global2.b.a))), !(!select(vec2<bool>(false, false), vec2<bool>(false, true), vec2<bool>(global2.b.b, global2.b.b))));
}

fn func_2(arg_0: f32, arg_1: vec3<u32>) -> f32 {
    global1 = !select(!(!func_3()), vec2<bool>(global1.x == true, any(vec4<bool>(global1.x, false, false, true))), false);
    loop {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
        for (var var_0 = -1i; !global2.b.b || (_wgslsmith_dot_vec4_i32(_wgslsmith_div_vec4_i32(~vec4<i32>(global2.b.c, global2.b.c, -55468i, -45183i), ~vec4<i32>(u_input.b.x, global2.b.c, u_input.b.x, 1i)), -vec4<i32>(u_input.b.x, global2.b.c, -1i, 0i) & vec4<i32>(global2.b.c, 0i, i32(-2147483648), global2.b.c)) < global2.b.c); var_0 += 1i) {
            if (LOOP_COUNTERS[18u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
            var var_1 = Struct_2(~vec2<u32>(_wgslsmith_mod_u32(u_input.a, 1u), ~1u), func_5());
        }
        global0 = global2.b.c;
        for (var var_0 = -1i; ; ) {
            if (LOOP_COUNTERS[19u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
            global1 = !select(!func_3(), vec2<bool>(true, true), select(select(vec2<bool>(false, global1.x), !vec2<bool>(false, global2.b.a), select(vec2<bool>(global1.x, true), vec2<bool>(false, true), vec2<bool>(false, true))), select(!vec2<bool>(global2.b.a, false), select(vec2<bool>(global2.b.b, false), vec2<bool>(false, false), false), arg_0 <= arg_0), vec2<bool>(global2.b.b, global1.x)));
            var var_1 = 41089u;
            var var_2 = _wgslsmith_dot_vec4_i32(_wgslsmith_clamp_vec4_i32(select(~(~vec4<i32>(u_input.b.x, 66421i, -11118i, u_input.b.x)), abs(abs(vec4<i32>(-36260i, global2.b.c, u_input.b.x, global2.b.c))), !vec4<bool>(false, true, true, global1.x)), ~reverseBits(~vec4<i32>(-13362i, -11334i, u_input.b.x, u_input.b.x)), select(vec4<i32>(i32(-2147483648), u_input.b.x, global2.b.c, u_input.b.x), ~vec4<i32>(-24305i, global2.b.c, u_input.b.x, u_input.b.x), select(vec4<bool>(global1.x, false, global2.b.b, true), vec4<bool>(global2.b.a, global1.x, true, global1.x), false)) ^ (~vec4<i32>(18944i, -1i, u_input.b.x, u_input.b.x) & _wgslsmith_mod_vec4_i32(vec4<i32>(u_input.b.x, global2.b.c, global2.b.c, -69164i), vec4<i32>(1i, -1i, 1i, -1i)))), vec4<i32>(i32(-2147483648), _wgslsmith_sub_i32(30734i, -62643i), -global2.b.c, _wgslsmith_mod_i32(~(~0i), _wgslsmith_dot_vec2_i32(abs(vec2<i32>(u_input.b.x, u_input.b.x)), vec2<i32>(-1i, global2.b.c)))));
            var_0 = global2.b.c;
            let var_3 = -global2.b.c;
        }
        loop {
            if (LOOP_COUNTERS[20u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
            var var_0 = Struct_2(_wgslsmith_clamp_vec2_u32(vec2<u32>(~u_input.a, u_input.c), vec2<u32>(~arg_1.x, 4294967295u), ~(~vec2<u32>(global2.a.x, 0u))) & countOneBits(arg_1.yz), Struct_1(!global2.b.b, arg_0 >= arg_0, 1i, select(1u, u_input.a, global2.b.a)));
        }
    }
    for (var var_0 = 0i; var_0 != 5671i; var_0 -= 1i) {
        if (LOOP_COUNTERS[21u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
        var var_1 = Struct_2(global2.a & vec2<u32>(41822u, ~1u), Struct_1(!func_8(~arg_1.x, arg_1, 1i), func_8(70157u, ~vec3<u32>(global2.a.x, 4294967295u, 1u), _wgslsmith_add_i32(u_input.b.x, u_input.b.x)), global2.b.c, ~global2.a.x));
        var_0 = 2147483647i << (0u % 32u);
        var_0 = global2.b.c;
        global0 = _wgslsmith_dot_vec3_i32(vec3<i32>(abs(0i) ^ abs(u_input.b.x), var_1.b.c, -_wgslsmith_add_i32(-38922i, var_1.b.c)), u_input.b) << ((~global2.b.d & (_wgslsmith_mult_u32(arg_1.x, _wgslsmith_div_u32(arg_1.x, arg_1.x)) ^ reverseBits(global2.a.x))) % 32u);
    }
    global0 = u_input.b.x;
    var var_0 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(554f, _wgslsmith_f_op_f32(-arg_0)) + _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(arg_0, -225f) + vec2<f32>(-1037f, arg_0))))));
    return _wgslsmith_f_op_f32(arg_0 - arg_0);
}

fn func_1(arg_0: vec2<bool>, arg_1: vec2<f32>) -> u32 {
    if (!global2.b.b && !all(select(vec3<bool>(true, true, true), select(vec3<bool>(arg_0.x, global1.x, global2.b.b), vec3<bool>(global1.x, arg_0.x, false), arg_0.x), !vec3<bool>(arg_0.x, global1.x, arg_0.x)))) {
        let var_0 = abs(44648i);
        loop {
            if (LOOP_COUNTERS[22u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
            var var_1 = select(~firstTrailingBit(~_wgslsmith_sub_vec2_u32(vec2<u32>(4294967295u, u_input.c), vec2<u32>(26015u, 1u))), ~global2.a, true);
            break;
        }
        var var_1 = Struct_1(any(vec2<bool>(true, !(!global1.x))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(func_2(arg_1.x, vec3<u32>(4294967295u, 92169u, global2.a.x))))) - arg_1.x) == arg_1.x, -(i32(-1i) * -1i), global2.a.x);
    }
    let var_0 = Struct_2(_wgslsmith_add_vec2_u32(global2.a, ~global2.a), func_5());
    global0 = 14206i;
    global1 = arg_0;
    for (var var_1 = 22840i; false; var_1 -= 1i) {
        if (LOOP_COUNTERS[23u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
        break;
    }
    return _wgslsmith_mod_u32(min((global2.a.x & var_0.b.d) | 67816u, ~15755u) & max(max(1u, global2.b.d), _wgslsmith_mod_u32(~37983u, abs(var_0.a.x))), u_input.a);
}

@compute
@workgroup_size(1)
fn main() {
    switch (global2.b.c) {
        case 32075i: {
            global1 = vec2<bool>(true, global2.b.b);
            for (var var_0 = 0i; var_0 <= -34902i; var_0 -= 1i) {
                if (LOOP_COUNTERS[24u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
                let var_1 = Struct_2(vec2<u32>(func_1(vec2<bool>(all(vec2<bool>(false, global1.x)), global2.b.b), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(368f, 1151f) * vec2<f32>(141f, -570f)) * _wgslsmith_div_vec2_f32(vec2<f32>(743f, -1000f), vec2<f32>(1000f, 1226f)))), global2.b.d), Struct_1(false, 53109u < _wgslsmith_mult_u32(~global2.a.x, 21674u), u_input.b.x, abs(~4294967295u)));
                var var_2 = Struct_2(~select(min(var_1.a, vec2<u32>(0u, global2.a.x)) ^ firstTrailingBit(global2.a), var_1.a, any(vec3<bool>(global2.b.b, global2.b.a, global1.x))), func_5());
                var var_3 = _wgslsmith_f_op_f32(f32(-1f) * -1457f);
                let var_4 = _wgslsmith_f_op_f32(f32(-1f) * -1348f);
            }
            var var_0 = Struct_2(firstTrailingBit(~global2.a), func_5());
            var var_1 = Struct_2(_wgslsmith_clamp_vec2_u32(vec2<u32>(global2.a.x, ~var_0.b.d) >> (~global2.a % vec2<u32>(32u)), vec2<u32>(var_0.b.d, var_0.a.x), ~global2.a >> (max(~vec2<u32>(global2.a.x, var_0.b.d), min(vec2<u32>(86516u, 4294967295u), vec2<u32>(1u, global2.b.d))) % vec2<u32>(32u))), var_0.b);
            var var_2 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(abs(_wgslsmith_f_op_vec4_f32(-vec4<f32>(1105f, -519f, 2516f, 934f)))), _wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(-425f), 260f, _wgslsmith_f_op_f32(trunc(1000f)), _wgslsmith_f_op_f32(206f + -242f)) + _wgslsmith_f_op_vec4_f32(-vec4<f32>(1f, 1f, 1f, 1f))))) - vec4<f32>(-572f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_6(global2.b, max(i32(-2147483648), -24749i), Struct_2(vec2<u32>(1u, 1u), global2.b), _wgslsmith_f_op_vec3_f32(round(vec3<f32>(-1760f, 1000f, 759f)))))), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(652f - -1191f)))), _wgslsmith_f_op_f32(ceil(-314f))));
        }
        default: {
            loop {
                if (LOOP_COUNTERS[25u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
            }
            if (true) {
                var var_0 = vec4<f32>(-2034f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-608f))) + _wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -1000f), _wgslsmith_f_op_f32(func_2(1680f, vec3<u32>(41159u, u_input.a, 15394u))))), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -1066f), _wgslsmith_f_op_f32(max(-798f, _wgslsmith_f_op_f32(func_2(792f, vec3<u32>(u_input.a, 12232u, u_input.a))))))), -632f);
                return;
            }
            let var_0 = Struct_2(_wgslsmith_add_vec2_u32(global2.a, select((vec2<u32>(0u, 1u) & global2.a) & global2.a, ~vec2<u32>(9235u, 5415u), !(!vec2<bool>(global1.x, true)))), global2.b);
            loop {
                if (LOOP_COUNTERS[26u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
                global0 = firstTrailingBit(_wgslsmith_mod_i32(countOneBits(_wgslsmith_sub_i32(u_input.b.x | global2.b.c, global2.b.c ^ var_0.b.c)), max(-(var_0.b.c << (global2.b.d % 32u)), _wgslsmith_div_i32(u_input.b.x << (var_0.b.d % 32u), ~1i))));
                continue;
            }
        }
    }
    let var_0 = func_5();
    let var_1 = vec4<u32>(~(~(15408u >> (0u % 32u))), _wgslsmith_mod_u32(u_input.c, reverseBits(_wgslsmith_mult_u32(4294967295u, _wgslsmith_dot_vec2_u32(vec2<u32>(4294967295u, var_0.d), vec2<u32>(global2.a.x, u_input.c))))), func_5().d, ~29861u);
    global1 = !vec2<bool>(select(any(!vec4<bool>(var_0.b, global2.b.a, global1.x, var_0.b)), !global1.x, global1.x), false);
    switch (_wgslsmith_mod_i32(global2.b.c, reverseBits(global2.b.c >> (var_0.d % 32u)))) {
        case -1i: {
            switch (u_input.b.x) {
                case 42328i: {
                    var var_2 = _wgslsmith_dot_vec2_u32(_wgslsmith_mult_vec2_u32(~_wgslsmith_sub_vec2_u32(firstTrailingBit(global2.a), vec2<u32>(630u, 37625u)), ~vec2<u32>(~53893u, ~u_input.a)), var_1.wz);
                }
                case -1i: {
                    let var_2 = vec4<bool>(!(u_input.c != 1u) & !global2.b.a, any(select(!vec2<bool>(true, global1.x), vec2<bool>(true, true), false)), !all(vec2<bool>(true, false)), true);
                }
                default: {
                    let var_2 = vec3<i32>(6780i, global2.b.c, -(~(~7784i)));
                    let var_3 = _wgslsmith_add_i32((firstTrailingBit(global2.b.c) | global2.b.c) & var_0.c, u_input.b.x);
                }
            }
            for (var var_2 = i32(-1i) * -var_0.c; var_2 >= 0i; ) {
                if (LOOP_COUNTERS[27u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[27u] = LOOP_COUNTERS[27u] + 1u;
                break;
            }
            loop {
                if (LOOP_COUNTERS[28u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[28u] = LOOP_COUNTERS[28u] + 1u;
                var var_2 = var_0.c;
                continue;
            }
            for (var var_2: i32; var_2 > 7445i; var_2 = u_input.b.x) {
                if (LOOP_COUNTERS[29u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[29u] = LOOP_COUNTERS[29u] + 1u;
            }
            let var_2 = _wgslsmith_f_op_f32(-727f);
        }
        case 19779i: {
        }
        case -19967i: {
            return;
        }
        default: {
            global0 = global2.b.c;
            return;
        }
    }
    var var_2 = Struct_2(reverseBits(var_1.yz), Struct_1(!global2.b.a != true, global1.x, 7895i, _wgslsmith_dot_vec4_u32(var_1, var_1)));
    global0 = -func_4(select(vec3<bool>(global1.x, true, global2.b.c < u_input.b.x), vec3<bool>(false || var_0.b, true, global2.b.a || global2.b.a), true), Struct_2(global2.a, func_5()), select(vec2<bool>(true, all(vec4<bool>(true, var_2.b.a, global1.x, false))), !func_3(), !func_3()), select(vec4<u32>(_wgslsmith_add_u32(var_0.d, 1u), ~var_2.a.x, 56347u, reverseBits(var_2.a.x)), ~vec4<u32>(0u, 47263u, 53282u, 0u), select(vec4<bool>(false, false, false, false), select(vec4<bool>(global1.x, false, false, false), vec4<bool>(false, var_2.b.b, false, true), true), !var_2.b.b)));
    let var_3 = vec3<i32>(-1i) * -_wgslsmith_mult_vec3_i32(vec3<i32>(_wgslsmith_div_i32(1i, 2147483647i), 0i, max(1i, 1i)), -u_input.b & u_input.b);
    global2 = Struct_2(max(_wgslsmith_div_vec2_u32(reverseBits(var_1.wx) << ((vec2<u32>(0u, var_1.x) | global2.a) % vec2<u32>(32u)), ~var_2.a), global2.a), var_2.b);
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_div_vec3_u32(var_1.xxw, vec3<u32>(_wgslsmith_mult_u32(50692u >> (var_0.d % 32u), _wgslsmith_add_u32(282u, 9143u)), 4294967295u, var_0.d)));
}

`;