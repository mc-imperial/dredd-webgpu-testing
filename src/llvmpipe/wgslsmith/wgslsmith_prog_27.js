export const input = [170,188,61,237,234,207,43,136,169,8,62,192,96,1,215,149,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [170,188,61,237,234,207,43,136,169,8,62,192,96,1,215,149,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[170,188,61,237,234,207,43,136,169,8,62,192,96,1,215,149]}
// Seed: 17953407852285802887

struct Struct_1 {
    a: vec4<f32>,
    b: vec4<f32>,
    c: vec4<u32>,
    d: vec2<u32>,
}

struct UniformBuffer {
    a: vec2<u32>,
    b: i32,
}

struct StorageBuffer {
    a: f32,
    b: f32,
    c: vec3<f32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<u32, 24>;

var<private> global1: array<vec4<f32>, 7>;

var<private> LOOP_COUNTERS: array<u32, 7>;

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn func_5() -> u32 {
    var var_0 = false;
    global0 = array<u32, 24>();
    global1 = array<vec4<f32>, 7>();
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        var var_1 = true;
        continue;
    }
    global0 = array<u32, 24>();
    return 30763u;
}

fn func_6(arg_0: vec3<i32>, arg_1: Struct_1, arg_2: Struct_1, arg_3: Struct_1) -> vec2<u32> {
    switch (-20740i) {
        default: {
            var var_0 = max(~arg_0.x, -u_input.b);
        }
    }
    var var_0 = u_input.a.x;
    global1 = array<vec4<f32>, 7>();
    switch (select(abs(2147483647i), 45414i, true)) {
        case 12432i: {
            loop {
                if (LOOP_COUNTERS[1u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
            }
            switch (33179i) {
                case -1i: {
                    global1 = array<vec4<f32>, 7>();
                    global0 = array<u32, 24>();
                }
                case 20426i: {
                    global1 = array<vec4<f32>, 7>();
                }
                case 2147483647i: {
                    let var_1 = -(~firstLeadingBit(~(~u_input.b)));
                    let var_2 = -(reverseBits((vec4<i32>(arg_0.x, arg_0.x, 45536i, var_1) & vec4<i32>(0i, 1i, 1i, 32573i)) & vec4<i32>(i32(-2147483648), var_1, 1i, -7984i)) << (firstLeadingBit(_wgslsmith_clamp_vec4_u32(select(vec4<u32>(arg_1.c.x, global0[_wgslsmith_index_u32(0u, 24u)], u_input.a.x, arg_2.d.x), arg_3.c, vec4<bool>(false, true, false, false)), arg_1.c >> (vec4<u32>(u_input.a.x, arg_3.d.x, 0u, 4294967295u) % vec4<u32>(32u)), vec4<u32>(arg_3.d.x, 15793u, u_input.a.x, arg_2.d.x))) % vec4<u32>(32u)));
                }
                case 1572i: {
                }
                default: {
                    let var_1 = Struct_1(vec4<f32>(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(-385f, -644f)))), _wgslsmith_div_f32(1322f, _wgslsmith_f_op_f32(-1107f + _wgslsmith_f_op_f32(962f * arg_1.a.x))), -570f, 119f), _wgslsmith_div_vec4_f32(global1[_wgslsmith_index_u32(~select(_wgslsmith_add_u32(60060u, 1u), abs(arg_2.d.x), true), 7u)], vec4<f32>(-881f, _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(arg_3.b.x - -599f))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(arg_3.a.x - -696f), _wgslsmith_f_op_f32(ceil(arg_2.b.x))), -1521f)), vec4<u32>(reverseBits(_wgslsmith_dot_vec4_u32(vec4<u32>(arg_1.c.x, arg_3.c.x, 19886u, arg_3.c.x), vec4<u32>(1u, u_input.a.x, 51504u, 3594u))) | func_5(), ~(~func_5()), 8098u, ~reverseBits(68493u)), arg_1.c.wy);
                    var_0 = 1u;
                    var var_2 = var_1;
                    global0 = array<u32, 24>();
                }
            }
            var var_1 = Struct_1(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(abs(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_3.a.x, arg_2.b.x, -379f, 1496f)))))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(round(arg_3.a)) * _wgslsmith_f_op_vec4_f32(-vec4<f32>(1242f, -233f, _wgslsmith_f_op_f32(ceil(arg_1.b.x)), arg_1.a.x))), _wgslsmith_add_vec4_u32(vec4<u32>(~(~49940u), 9819u, ~0u, _wgslsmith_clamp_u32(_wgslsmith_mod_u32(5220u, 87801u), _wgslsmith_sub_u32(5368u, u_input.a.x), 16356u)), abs(select(max(arg_1.c, vec4<u32>(arg_2.c.x, 69389u, 40172u, 14655u)), arg_2.c | arg_2.c, vec4<bool>(false, true, false, false)))), countOneBits(min(~arg_1.d, arg_3.d)));
        }
        case 0i: {
            var var_1 = vec4<u32>(func_5(), 1u, _wgslsmith_dot_vec3_u32(vec3<u32>(select(1u, 38272u, true), 1u, max(1309u, min(44004u, u_input.a.x))), select(arg_3.c.yyz >> (~vec3<u32>(arg_1.c.x, u_input.a.x, global0[_wgslsmith_index_u32(1u, 24u)]) % vec3<u32>(32u)), ~(arg_1.c.xzx & arg_3.c.xwz), true)), ~abs(~21488u ^ u_input.a.x));
            let var_2 = _wgslsmith_add_u32(~_wgslsmith_dot_vec2_u32(vec2<u32>(6629u, ~25521u), abs(u_input.a << (vec2<u32>(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(4294967295u, 24u)], 24u)], var_1.x) % vec2<u32>(32u)))), _wgslsmith_add_u32(~(1u | _wgslsmith_clamp_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(0u, 24u)], 24u)], arg_1.d.x, arg_2.d.x)), arg_3.c.x));
            var_1 = countOneBits(arg_3.c);
            let var_3 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-arg_3.a.x), arg_2.a.x)) * _wgslsmith_f_op_f32(round(arg_2.a.x))) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(658f, _wgslsmith_f_op_f32(-607f - -1070f)))));
            if (any(vec4<bool>(~(~global0[_wgslsmith_index_u32(arg_2.c.x, 24u)]) >= arg_3.c.x, true, !(!select(true, false, true)), all(vec4<bool>(true, true, true, true))))) {
            }
        }
        default: {
            global0 = array<u32, 24>();
            let var_1 = Struct_1(_wgslsmith_f_op_vec4_f32(abs(vec4<f32>(_wgslsmith_div_f32(1f, _wgslsmith_f_op_f32(max(arg_1.a.x, arg_3.b.x))), arg_3.b.x, _wgslsmith_f_op_f32(1519f + -740f), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(abs(arg_2.b.x))))))), _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(max(vec4<f32>(1789f, _wgslsmith_f_op_f32(exp2(arg_1.a.x)), _wgslsmith_f_op_f32(-arg_1.a.x), _wgslsmith_f_op_f32(round(arg_1.b.x))), _wgslsmith_f_op_vec4_f32(max(vec4<f32>(-557f, -1039f, arg_2.b.x, arg_2.b.x), _wgslsmith_f_op_vec4_f32(-vec4<f32>(-1000f, arg_2.b.x, arg_2.a.x, 858f)))))), arg_3.b, false)), ~vec4<u32>(_wgslsmith_dot_vec4_u32(_wgslsmith_mod_vec4_u32(vec4<u32>(4294967295u, arg_1.d.x, arg_3.c.x, u_input.a.x), arg_1.c), arg_2.c), 33872u, arg_2.d.x, ~arg_3.c.x), ~vec2<u32>(reverseBits(u_input.a.x), u_input.a.x >> (~arg_2.c.x % 32u)));
            for (var var_2 = -11546i; ; var_0 = reverseBits(~firstTrailingBit(_wgslsmith_mod_u32(arg_1.c.x, global0[_wgslsmith_index_u32(u_input.a.x, 24u)]) & ~global0[_wgslsmith_index_u32(45218u, 24u)]))) {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
                let var_3 = true | all(!select(vec2<bool>(true, true), vec2<bool>(true, true), true));
                let var_4 = var_1;
                break;
            }
            loop {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
                global1 = array<vec4<f32>, 7>();
                var var_2 = _wgslsmith_f_op_f32(ceil(arg_2.b.x));
                return arg_1.d;
            }
        }
    }
    for (var var_1 = -1i; ; ) {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        continue;
    }
    return vec2<u32>(~_wgslsmith_sub_u32(abs(arg_3.d.x ^ 1u), abs(global0[_wgslsmith_index_u32(max(13601u, 0u), 24u)])), 0u);
}

fn func_4(arg_0: vec4<bool>, arg_1: vec2<bool>, arg_2: bool) -> vec2<i32> {
    let var_0 = _wgslsmith_f_op_vec2_f32(sign(_wgslsmith_div_vec2_f32(vec2<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -389f), _wgslsmith_f_op_f32(-694f)), -659f), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(sign(_wgslsmith_div_vec2_f32(vec2<f32>(424f, 123f), vec2<f32>(-194f, 296f))))))));
    let var_1 = Struct_1(_wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(-vec4<f32>(969f, var_0.x, var_0.x, var_0.x)), _wgslsmith_f_op_vec4_f32(global1[_wgslsmith_index_u32(4294967295u, 7u)] * vec4<f32>(119f, -1000f, 1000f, var_0.x)))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(select(vec4<f32>(1595f, var_0.x, var_0.x, var_0.x), global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(80578u, 24u)], 7u)], true)) * vec4<f32>(var_0.x, 353f, 276f, -183f)))), _wgslsmith_f_op_vec4_f32(-global1[_wgslsmith_index_u32(4294967295u, 7u)]), select(~vec4<u32>(firstLeadingBit(global0[_wgslsmith_index_u32(22321u, 24u)]), ~22560u, select(u_input.a.x, u_input.a.x, false), 0u), vec4<u32>(func_5(), global0[_wgslsmith_index_u32(u_input.a.x, 24u)], u_input.a.x, _wgslsmith_dot_vec2_u32(u_input.a, u_input.a)), all(vec4<bool>(true, arg_2, arg_0.x, arg_0.x || arg_2))), min(max(_wgslsmith_mod_vec2_u32(u_input.a | vec2<u32>(global0[_wgslsmith_index_u32(16162u, 24u)], 9044u), u_input.a), abs(u_input.a)), select(func_6(vec3<i32>(u_input.b, 0i, u_input.b), Struct_1(vec4<f32>(var_0.x, var_0.x, -1075f, -476f), global1[_wgslsmith_index_u32(58908u, 7u)], vec4<u32>(4294967295u, 4294967295u, 4294967295u, u_input.a.x), vec2<u32>(global0[_wgslsmith_index_u32(u_input.a.x, 24u)], 1u)), Struct_1(vec4<f32>(var_0.x, -904f, 1017f, -316f), vec4<f32>(1000f, var_0.x, -1657f, -603f), vec4<u32>(global0[_wgslsmith_index_u32(0u, 24u)], 37772u, 18827u, 22077u), u_input.a), Struct_1(global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(0u, 24u)], 7u)], vec4<f32>(var_0.x, var_0.x, 525f, 424f), vec4<u32>(global0[_wgslsmith_index_u32(4294967295u, 24u)], global0[_wgslsmith_index_u32(u_input.a.x, 24u)], 8811u, global0[_wgslsmith_index_u32(u_input.a.x, 24u)]), u_input.a)), vec2<u32>(u_input.a.x, 1u), select(arg_0.ww, arg_0.xx, false)) >> (_wgslsmith_mult_vec2_u32(_wgslsmith_add_vec2_u32(vec2<u32>(0u, 0u), u_input.a), ~u_input.a) % vec2<u32>(32u))));
    global0 = array<u32, 24>();
    global0 = array<u32, 24>();
    let var_2 = ~(-13680i) << (0u % 32u);
    return _wgslsmith_mult_vec2_i32(vec2<i32>(2147483647i, 0i), vec2<i32>(var_2, i32(-1i) * -1i));
}

fn func_3() -> i32 {
    global0 = array<u32, 24>();
    if (all(vec2<bool>(true, true))) {
        let var_0 = -612f;
    }
    var var_0 = vec4<bool>(-1i > -_wgslsmith_dot_vec2_i32(vec2<i32>(u_input.b, 0i), func_4(vec4<bool>(false, false, false, false), vec2<bool>(false, false), true)), (_wgslsmith_clamp_i32(u_input.b, firstTrailingBit(-10508i), -11902i) > ~firstTrailingBit(32177i)) || all(vec3<bool>(true, true, true)), true, false);
    var var_1 = Struct_1(_wgslsmith_f_op_vec4_f32(ceil(global1[_wgslsmith_index_u32(u_input.a.x, 7u)])), _wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(868f + _wgslsmith_f_op_f32(floor(-336f))), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(-757f, 116f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(844f, -542f, true)) - 1494f), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(max(-1343f, -220f)), _wgslsmith_f_op_f32(abs(-708f))))) + global1[_wgslsmith_index_u32(~firstTrailingBit(u_input.a.x) << (4294967295u % 32u), 7u)]), abs(vec4<u32>(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(1u, 24u)] & 17798u, 24u)], 24u)] >> ((global0[_wgslsmith_index_u32(u_input.a.x, 24u)] << (u_input.a.x % 32u)) % 32u), reverseBits(u_input.a.x), 62238u, global0[_wgslsmith_index_u32(firstLeadingBit(3576u), 24u)] & _wgslsmith_mod_u32(4294967295u, u_input.a.x))), vec2<u32>(_wgslsmith_div_u32(abs(1u), countOneBits(~global0[_wgslsmith_index_u32(u_input.a.x, 24u)])), ~global0[_wgslsmith_index_u32(u_input.a.x, 24u)] ^ 4294967295u));
    let var_2 = Struct_1(_wgslsmith_f_op_vec4_f32(-vec4<f32>(var_1.b.x, _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-187f))), var_1.a.x, _wgslsmith_f_op_f32(f32(-1f) * -1064f))), _wgslsmith_f_op_vec4_f32(-var_1.b), _wgslsmith_clamp_vec4_u32(~_wgslsmith_add_vec4_u32(vec4<u32>(var_1.c.x, var_1.c.x, 1u, 35178u), reverseBits(var_1.c)), _wgslsmith_mult_vec4_u32(var_1.c, var_1.c), var_1.c), u_input.a);
    return u_input.b;
}

fn func_2() -> i32 {
    global0 = array<u32, 24>();
    let var_0 = vec2<i32>(~firstLeadingBit(_wgslsmith_div_i32(36944i, u_input.b)) & -(~abs(u_input.b)), _wgslsmith_mult_i32(_wgslsmith_add_i32((-1i ^ u_input.b) ^ 0i, func_3()), _wgslsmith_clamp_i32(~_wgslsmith_div_i32(-38411i, -1165i), 14989i, u_input.b)));
    switch (~(i32(-1i) * -69154i) & -min(u_input.b, var_0.x)) {
        case 20725i: {
        }
        case 13591i: {
        }
        case 7327i: {
            global1 = array<vec4<f32>, 7>();
            let var_1 = 787f;
        }
        case 2147483647i: {
            global0 = array<u32, 24>();
            if (!(49120u >= _wgslsmith_div_u32(~31698u, u_input.a.x)) && any(select(vec2<bool>(true, true), vec2<bool>(true, true), true))) {
                var var_1 = -reverseBits(firstLeadingBit(vec4<i32>(_wgslsmith_div_i32(var_0.x, u_input.b), countOneBits(0i), u_input.b, -1i)));
                var var_2 = firstTrailingBit(select(firstLeadingBit(vec4<i32>(var_0.x, -40222i, _wgslsmith_mod_i32(49796i, -45148i), 0i)), -abs(vec4<i32>(2147483647i, var_1.x, var_0.x, var_0.x)), !vec4<bool>(u_input.b < 1i, any(vec4<bool>(true, false, true, true)), true, true)));
                var var_3 = vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(-1507f)) * -499f)), _wgslsmith_f_op_f32(floor(-777f)), _wgslsmith_f_op_f32(-626f + 2091f));
                var_3 = vec3<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-var_3.x), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-var_3.x), var_3.x, all(select(vec4<bool>(true, true, false, true), vec4<bool>(false, false, false, true), true))))), _wgslsmith_f_op_f32(581f - -2060f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(var_3.x * var_3.x) * var_3.x) + -255f));
            }
            switch (_wgslsmith_dot_vec2_i32(vec2<i32>(var_0.x, _wgslsmith_dot_vec2_i32(abs(var_0), vec2<i32>(var_0.x, -1i))) << ((u_input.a >> (vec2<u32>(u_input.a.x, u_input.a.x << (60782u % 32u)) % vec2<u32>(32u))) % vec2<u32>(32u)), vec2<i32>(_wgslsmith_dot_vec4_i32(vec4<i32>(1i, ~var_0.x, func_4(vec4<bool>(true, false, false, true), vec2<bool>(false, true), false).x, _wgslsmith_sub_i32(480i, var_0.x)), ~vec4<i32>(-18145i, u_input.b, -71839i, u_input.b)), u_input.b))) {
                case -38555i: {
                    var var_1 = _wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(max(_wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(-vec2<f32>(2047f, 814f)))), vec2<f32>(_wgslsmith_div_f32(-166f, 532f), -898f))))), vec2<f32>(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(_wgslsmith_div_f32(1502f, 1335f) + -1109f), -629f)), _wgslsmith_f_op_f32(f32(-1f) * -944f)), select(!(!select(vec2<bool>(false, false), vec2<bool>(false, false), vec2<bool>(false, true))), vec2<bool>(!any(vec2<bool>(false, false)), true), !(!all(vec3<bool>(false, true, true))))));
                    let var_2 = vec2<u32>(~26350u, ~1u);
                }
                case 2147483647i: {
                    let var_1 = countOneBits(vec3<u32>(u_input.a.x, u_input.a.x << (_wgslsmith_mod_u32(global0[_wgslsmith_index_u32(max(74667u, 1u), 24u)], 37479u) % 32u), ~abs(0u)));
                    global0 = array<u32, 24>();
                    global1 = array<vec4<f32>, 7>();
                    global1 = array<vec4<f32>, 7>();
                }
                case 0i: {
                    global0 = array<u32, 24>();
                    var var_1 = Struct_1(_wgslsmith_f_op_vec4_f32(min(vec4<f32>(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(max(313f, 364f)), 1551f)), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-881f), -147f)), _wgslsmith_f_op_f32(1000f + _wgslsmith_f_op_f32(-656f)), 241f), global1[_wgslsmith_index_u32(u_input.a.x, 7u)])), global1[_wgslsmith_index_u32(_wgslsmith_dot_vec4_u32(abs(firstLeadingBit(vec4<u32>(0u, 4294967295u, global0[_wgslsmith_index_u32(4294967295u, 24u)], u_input.a.x))) | _wgslsmith_add_vec4_u32(_wgslsmith_mod_vec4_u32(vec4<u32>(u_input.a.x, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(28528u, 24u)], 24u)], global0[_wgslsmith_index_u32(4294967295u, 24u)], 88321u), vec4<u32>(33113u, 4294967295u, global0[_wgslsmith_index_u32(u_input.a.x, 24u)], 1u)), _wgslsmith_clamp_vec4_u32(vec4<u32>(global0[_wgslsmith_index_u32(u_input.a.x, 24u)], global0[_wgslsmith_index_u32(1u, 24u)], 1u, 46129u), vec4<u32>(u_input.a.x, global0[_wgslsmith_index_u32(u_input.a.x, 24u)], 43356u, global0[_wgslsmith_index_u32(4294967295u, 24u)]), vec4<u32>(global0[_wgslsmith_index_u32(56164u, 24u)], global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a.x, 24u)], 24u)], 1u, global0[_wgslsmith_index_u32(u_input.a.x, 24u)]))), ~vec4<u32>(66780u, u_input.a.x, u_input.a.x, u_input.a.x) >> (vec4<u32>(min(4294967295u, 16204u), 49847u, 3599u, _wgslsmith_mult_u32(global0[_wgslsmith_index_u32(u_input.a.x, 24u)], global0[_wgslsmith_index_u32(4294967295u, 24u)])) % vec4<u32>(32u))), 7u)], countOneBits(max(vec4<u32>(min(74382u, u_input.a.x), _wgslsmith_mult_u32(0u, global0[_wgslsmith_index_u32(0u, 24u)]), _wgslsmith_mod_u32(u_input.a.x, 1u), _wgslsmith_dot_vec3_u32(vec3<u32>(42896u, 781u, 4294967295u), vec3<u32>(u_input.a.x, u_input.a.x, u_input.a.x))), _wgslsmith_clamp_vec4_u32(max(vec4<u32>(0u, 39510u, 4294967295u, 4294967295u), vec4<u32>(u_input.a.x, 2299u, global0[_wgslsmith_index_u32(1u, 24u)], 16647u)), ~vec4<u32>(u_input.a.x, 75289u, u_input.a.x, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(0u, 24u)], 24u)]), vec4<u32>(u_input.a.x, 5308u, u_input.a.x, u_input.a.x)))), ~u_input.a ^ _wgslsmith_mod_vec2_u32(vec2<u32>(0u, _wgslsmith_clamp_u32(u_input.a.x, u_input.a.x, u_input.a.x)), u_input.a));
                }
                case 7495i: {
                    global0 = array<u32, 24>();
                }
                default: {
                }
            }
        }
        default: {
        }
    }
    return ~27138i;
}

fn func_1() -> f32 {
    var var_0 = vec4<i32>(~(i32(-2147483648)), abs(func_2()), _wgslsmith_mod_i32(-(~25958i) >> (firstLeadingBit(u_input.a.x) % 32u), u_input.b), 7240i);
    var var_1 = Struct_1(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(floor(global1[_wgslsmith_index_u32(0u, 7u)])))) + _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(sign(global1[_wgslsmith_index_u32(u_input.a.x, 7u)])) + global1[_wgslsmith_index_u32(1u, 7u)]))), vec4<f32>(_wgslsmith_f_op_f32(trunc(-975f)), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -251f) - _wgslsmith_f_op_f32(round(-1000f))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -417f))), 1f), vec4<u32>(~u_input.a.x, global0[_wgslsmith_index_u32(firstLeadingBit(func_5()), 24u)], func_6(vec3<i32>(7919i, var_0.x | var_0.x, 13737i), Struct_1(vec4<f32>(-2088f, 162f, 345f, 644f), _wgslsmith_f_op_vec4_f32(global1[_wgslsmith_index_u32(0u, 7u)] * global1[_wgslsmith_index_u32(85473u, 7u)]), ~vec4<u32>(4294967295u, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(26957u, 24u)], 24u)], 1u, u_input.a.x), vec2<u32>(u_input.a.x, u_input.a.x) >> (vec2<u32>(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(104675u, 24u)], 24u)], 6804u) % vec2<u32>(32u))), Struct_1(_wgslsmith_f_op_vec4_f32(min(vec4<f32>(-2275f, 546f, 132f, 849f), global1[_wgslsmith_index_u32(u_input.a.x, 7u)])), global1[_wgslsmith_index_u32(74641u | global0[_wgslsmith_index_u32(14280u, 24u)], 7u)], vec4<u32>(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(1u, 24u)], 24u)], u_input.a.x, u_input.a.x, u_input.a.x) >> (vec4<u32>(u_input.a.x, u_input.a.x, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a.x, 24u)], 24u)], global0[_wgslsmith_index_u32(u_input.a.x, 24u)]) % vec4<u32>(32u)), _wgslsmith_mod_vec2_u32(vec2<u32>(u_input.a.x, global0[_wgslsmith_index_u32(4294967295u, 24u)]), u_input.a)), Struct_1(global1[_wgslsmith_index_u32(_wgslsmith_mod_u32(4294967295u, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a.x, 24u)], 24u)]), 7u)], global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(4294967295u, 24u)], 7u)], firstTrailingBit(vec4<u32>(u_input.a.x, 47992u, 44834u, 60158u)), ~vec2<u32>(47152u, 4294967295u))).x, 45857u), u_input.a);
    if (all(select(vec2<bool>(true, true), vec2<bool>(all(vec3<bool>(true, false, false)), true), _wgslsmith_sub_i32(u_input.b, 1i) < firstLeadingBit(-2635i)))) {
        var_1 = Struct_1(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(max(vec4<f32>(_wgslsmith_f_op_f32(floor(var_1.b.x)), _wgslsmith_f_op_f32(-var_1.a.x), _wgslsmith_f_op_f32(-var_1.a.x), -1035f), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(1u, 24u)], 7u)] * var_1.a))))), vec4<f32>(692f, var_1.a.x, -598f, var_1.a.x), var_1.c, vec2<u32>(var_1.c.x, var_1.c.x));
        if (any(!vec4<bool>(false, true, false, all(vec2<bool>(true, false)))) | (-63032i >= var_0.x)) {
            var var_2 = Struct_1(global1[_wgslsmith_index_u32(u_input.a.x, 7u)], _wgslsmith_f_op_vec4_f32(round(global1[_wgslsmith_index_u32(706u, 7u)])), min(firstTrailingBit(vec4<u32>(_wgslsmith_dot_vec2_u32(vec2<u32>(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(10331u, 24u)], 24u)], 23103u), vec2<u32>(0u, 37511u)), func_6(var_0.zyz, Struct_1(global1[_wgslsmith_index_u32(var_1.d.x, 7u)], global1[_wgslsmith_index_u32(4294967295u, 7u)], var_1.c, vec2<u32>(14765u, global0[_wgslsmith_index_u32(22u, 24u)])), Struct_1(vec4<f32>(var_1.b.x, var_1.a.x, var_1.b.x, -806f), global1[_wgslsmith_index_u32(0u, 7u)], vec4<u32>(global0[_wgslsmith_index_u32(1u, 24u)], 72396u, global0[_wgslsmith_index_u32(4294967295u, 24u)], 0u), vec2<u32>(42699u, 49679u)), Struct_1(vec4<f32>(var_1.b.x, 311f, -1329f, var_1.b.x), var_1.a, var_1.c, u_input.a)).x, var_1.c.x, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(~4294967295u, 24u)], 24u)])), ~(~vec4<u32>(24446u, 24231u, 4294967295u, 77142u))), var_1.d);
            var var_3 = Struct_1(vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1000f - -2424f)) - var_1.a.x), 202f, _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(-var_1.a.x), _wgslsmith_f_op_f32(select(-768f, -360f, false)))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-616f + -215f), _wgslsmith_f_op_f32(sign(var_2.a.x)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(var_1.b.x)) - _wgslsmith_f_op_f32(-1792f)))), _wgslsmith_f_op_vec4_f32(max(global1[_wgslsmith_index_u32(_wgslsmith_mod_u32(~(~var_2.d.x), ~0u), 7u)], _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(var_1.a.x, -381f, -373f, 514f)) + var_2.b)))), var_2.c, var_2.d);
            let var_4 = i32(-1i) * -(i32(-1i) * -_wgslsmith_dot_vec4_i32(vec4<i32>(i32(-2147483648), u_input.b, i32(-2147483648), -12480i), vec4<i32>(85558i, 43274i, -9019i, u_input.b)));
            global1 = array<vec4<f32>, 7>();
            var var_5 = global0[_wgslsmith_index_u32(49505u, 24u)];
        }
        switch (~u_input.b) {
            case 26910i: {
            }
            case 2269i: {
            }
            default: {
                var_1 = Struct_1(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(step(var_1.b, _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(var_1.b + vec4<f32>(var_1.b.x, var_1.b.x, -583f, var_1.b.x)) * _wgslsmith_f_op_vec4_f32(-vec4<f32>(var_1.b.x, 1302f, -708f, var_1.b.x))))) - var_1.a), var_1.b, _wgslsmith_mod_vec4_u32(~vec4<u32>(var_1.d.x, 0u, _wgslsmith_mult_u32(1u, 0u), select(global0[_wgslsmith_index_u32(4294967295u, 24u)], 4294967295u, true)), max(firstTrailingBit(var_1.c), var_1.c)), vec2<u32>(87884u, global0[_wgslsmith_index_u32(_wgslsmith_div_u32(var_1.c.x, _wgslsmith_clamp_u32(_wgslsmith_div_u32(46722u, var_1.c.x), 8709u, min(0u, u_input.a.x))), 24u)]));
                let var_2 = _wgslsmith_add_i32(_wgslsmith_clamp_i32(u_input.b, var_0.x, -_wgslsmith_mod_i32(_wgslsmith_dot_vec4_i32(vec4<i32>(-3843i, -19931i, u_input.b, 39317i), vec4<i32>(i32(-2147483648), var_0.x, -1i, -47735i)), min(1i, u_input.b))), 2147483647i);
                let var_3 = Struct_1(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(_wgslsmith_add_u32(max(11871u, u_input.a.x), 4294967295u), 24u)], 7u)])), global1[_wgslsmith_index_u32(0u, 7u)], select(~vec4<u32>(1u, global0[_wgslsmith_index_u32(u_input.a.x, 24u)], firstTrailingBit(1010u), countOneBits(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(1u, 24u)], 24u)])), _wgslsmith_mod_vec4_u32(~(~vec4<u32>(global0[_wgslsmith_index_u32(u_input.a.x, 24u)], 41083u, 0u, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a.x, 24u)], 24u)])), reverseBits(var_1.c)), !(!(u_input.a.x > 44173u))), ~abs(u_input.a));
                global0 = array<u32, 24>();
            }
        }
        var_0 = vec4<i32>(-17730i, i32(-2147483648), _wgslsmith_add_i32(i32(-1i) * i32(-2147483648), ~(-var_0.x)), ~var_0.x);
    }
    global0 = array<u32, 24>();
    var var_2 = select(vec2<bool>(true, any(select(vec4<bool>(true, true, true, true), vec4<bool>(false, false, false, false), false)) || (_wgslsmith_f_op_f32(-323f + var_1.a.x) <= _wgslsmith_f_op_f32(exp2(var_1.a.x)))), !select(select(vec2<bool>(true, false), select(vec2<bool>(false, false), vec2<bool>(true, true), vec2<bool>(false, true)), false), !select(vec2<bool>(false, true), vec2<bool>(false, false), vec2<bool>(true, true)), all(vec3<bool>(true, true, true))), (true & (_wgslsmith_f_op_f32(exp2(var_1.a.x)) < var_1.b.x)) == true);
    return var_1.a.x;
}

@compute
@workgroup_size(1)
fn main() {
    let var_0 = Struct_1(vec4<f32>(_wgslsmith_f_op_f32(func_1()), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(-725f)) * 526f), _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-418f))))), 1551f, -373f), global1[_wgslsmith_index_u32(_wgslsmith_sub_u32(global0[_wgslsmith_index_u32(_wgslsmith_add_u32(0u, global0[_wgslsmith_index_u32(~countOneBits(global0[_wgslsmith_index_u32(u_input.a.x, 24u)]), 24u)]), 24u)], 4294967295u), 7u)], reverseBits(vec4<u32>(u_input.a.x, select(1169u, 4294967295u, true), 4294967295u, abs(14607u))) | _wgslsmith_clamp_vec4_u32(min(vec4<u32>(107893u, 91499u, u_input.a.x, global0[_wgslsmith_index_u32(u_input.a.x, 24u)]) << (vec4<u32>(37844u, u_input.a.x, 4970u, u_input.a.x) % vec4<u32>(32u)), ~vec4<u32>(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(4294967295u, 24u)], 24u)], 77704u, u_input.a.x, u_input.a.x)), ~_wgslsmith_sub_vec4_u32(vec4<u32>(u_input.a.x, 0u, global0[_wgslsmith_index_u32(4294967295u, 24u)], global0[_wgslsmith_index_u32(4294967295u, 24u)]), vec4<u32>(0u, global0[_wgslsmith_index_u32(0u, 24u)], global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(33335u, 24u)], 24u)], 89364u)), _wgslsmith_sub_vec4_u32(~vec4<u32>(1u, 4294967295u, global0[_wgslsmith_index_u32(u_input.a.x, 24u)], global0[_wgslsmith_index_u32(u_input.a.x, 24u)]), vec4<u32>(14671u, u_input.a.x, 4294967295u, 4294967295u))), firstLeadingBit(reverseBits(_wgslsmith_div_vec2_u32(u_input.a, u_input.a))) << (u_input.a % vec2<u32>(32u)));
    switch (8505i) {
        case 14966i: {
            switch (u_input.b) {
                case 95608i: {
                    let var_1 = u_input.b;
                    global1 = array<vec4<f32>, 7>();
                    var var_2 = vec2<i32>(firstLeadingBit(u_input.b << (global0[_wgslsmith_index_u32(~29938u, 24u)] % 32u)), countOneBits(-2147483647i));
                    let var_3 = _wgslsmith_f_op_vec3_f32(min(vec3<f32>(var_0.a.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(var_0.a.x, var_0.a.x)) * _wgslsmith_div_f32(190f, var_0.a.x))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(func_1()))))), _wgslsmith_f_op_vec3_f32(trunc(var_0.b.yyy))));
                    var var_4 = var_0;
                }
                default: {
                    global1 = array<vec4<f32>, 7>();
                    var var_1 = var_0;
                    let var_2 = any(select(select(vec4<bool>(false, true, true, true), vec4<bool>(u_input.a.x != 4294967295u, any(vec2<bool>(true, true)), true, all(vec2<bool>(false, true))), all(vec4<bool>(false, false, false, false)) & any(vec2<bool>(true, true))), vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true)));
                    var var_3 = var_1.c;
                    let var_4 = _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-var_0.b.x))), -257f, _wgslsmith_f_op_f32(var_1.b.x * 219f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1000f * -350f))) * vec4<f32>(_wgslsmith_f_op_f32(-var_0.b.x), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -2261f) - _wgslsmith_f_op_f32(var_0.a.x * 847f)), 1086f, _wgslsmith_div_f32(_wgslsmith_f_op_f32(select(var_0.a.x, var_1.b.x, true)), var_1.b.x))), global1[_wgslsmith_index_u32(_wgslsmith_add_u32(~1u, _wgslsmith_mult_u32(_wgslsmith_dot_vec3_u32(var_0.c.ywy, vec3<u32>(1u, 1u, var_3.x)), ~0u)) & countOneBits(~(var_3.x >> (var_3.x % 32u))), 7u)], all(vec4<bool>(var_2, var_2, true, false))));
                }
            }
            for (; ; ) {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                var var_1 = 403f;
                let var_2 = true;
            }
            let var_1 = var_0;
        }
        case -33227i: {
            for (; _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_0.b.x) * _wgslsmith_f_op_f32(abs(-423f))), _wgslsmith_f_op_f32(abs(1272f)))) >= var_0.a.x; ) {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                let var_1 = _wgslsmith_dot_vec4_i32(vec4<i32>(abs(u_input.b), firstTrailingBit(func_3()), i32(-1i) * -_wgslsmith_mult_i32(u_input.b, u_input.b), u_input.b), vec4<i32>(~_wgslsmith_dot_vec4_i32(vec4<i32>(u_input.b, u_input.b, 2147483647i, u_input.b), vec4<i32>(u_input.b, u_input.b, u_input.b, 58045i)), 1i, countOneBits(_wgslsmith_div_i32(~1i, _wgslsmith_dot_vec2_i32(vec2<i32>(-23546i, 0i), vec2<i32>(u_input.b, u_input.b)))), firstTrailingBit(2147483647i)));
                let var_2 = _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(var_0.b.wwx + _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-var_0.b.wyz) - _wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(vec3<f32>(var_0.a.x, var_0.b.x, var_0.b.x), var_0.b.zxy)))), vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(501f - 1f)), var_0.b.x, 1793f)));
                continue;
            }
            let var_1 = u_input.a.x;
            if (true) {
                let var_2 = Struct_1(_wgslsmith_div_vec4_f32(global1[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(0u, 24u)], 7u)], _wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(vec4<f32>(var_0.a.x, -316f, 1200f, var_0.a.x), _wgslsmith_f_op_vec4_f32(-vec4<f32>(var_0.a.x, var_0.b.x, var_0.a.x, var_0.b.x))) * _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(max(global1[_wgslsmith_index_u32(u_input.a.x, 7u)], vec4<f32>(var_0.a.x, var_0.a.x, -879f, var_0.b.x))) * _wgslsmith_f_op_vec4_f32(-global1[_wgslsmith_index_u32(39792u, 7u)])))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(step(vec4<f32>(var_0.b.x, -967f, -1371f, var_0.a.x), var_0.b)) * _wgslsmith_f_op_vec4_f32(vec4<f32>(875f, var_0.b.x, var_0.a.x, -366f) + var_0.a)))) + _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-global1[_wgslsmith_index_u32(u_input.a.x, 7u)]))), ~vec4<u32>(4294967295u, func_6(~vec3<i32>(u_input.b, 3296i, u_input.b), Struct_1(global1[_wgslsmith_index_u32(u_input.a.x, 7u)], vec4<f32>(-283f, 1000f, var_0.a.x, var_0.a.x), vec4<u32>(1u, 1u, var_1, 0u), var_0.c.xy), var_0, var_0).x, u_input.a.x, ~1u), reverseBits(var_0.c.xz));
                global0 = array<u32, 24>();
            }
            var var_2 = _wgslsmith_mod_vec2_i32(select(select(_wgslsmith_add_vec2_i32(vec2<i32>(i32(-2147483648), 2147483647i), vec2<i32>(u_input.b, 1i)), abs(vec2<i32>(u_input.b, u_input.b)), any(vec4<bool>(false, true, true, true))) >> (~u_input.a % vec2<u32>(32u)), ~(vec2<i32>(1i, u_input.b) ^ (vec2<i32>(u_input.b, u_input.b) ^ vec2<i32>(u_input.b, 0i))), all(vec3<bool>(true, true, true))), -vec2<i32>(u_input.b & _wgslsmith_sub_i32(0i, u_input.b), ~_wgslsmith_add_i32(u_input.b, -37498i)));
        }
        default: {
        }
    }
    let var_1 = true;
    let var_2 = ~firstLeadingBit(vec2<i32>(countOneBits(-29109i), ~u_input.b));
    let var_3 = var_0;
    if (true) {
        if (false) {
            let var_4 = var_3;
        }
        global1 = array<vec4<f32>, 7>();
        let var_4 = var_2.x;
        switch (_wgslsmith_add_i32(var_4 | firstLeadingBit(var_4), var_2.x)) {
            case -1i: {
                global1 = array<vec4<f32>, 7>();
                global0 = array<u32, 24>();
                let var_5 = _wgslsmith_div_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(f32(-1f) * -333f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_0.a.x) - var_0.a.x)), _wgslsmith_f_op_f32(910f + _wgslsmith_f_op_f32(var_0.b.x + var_3.b.x)), -851f), var_3.a);
            }
            default: {
                var var_5 = Struct_1(_wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(global1[_wgslsmith_index_u32(_wgslsmith_dot_vec2_u32(firstLeadingBit(vec2<u32>(var_0.d.x, 0u)), select(vec2<u32>(0u, 1u), vec2<u32>(24431u, 1u), var_1)), 7u)] + _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-global1[_wgslsmith_index_u32(u_input.a.x, 7u)]) + _wgslsmith_f_op_vec4_f32(global1[_wgslsmith_index_u32(44958u, 7u)] * global1[_wgslsmith_index_u32(4294967295u, 7u)]))))), vec4<f32>(var_3.a.x, -1307f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-529f)) + _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-var_3.b.x), _wgslsmith_f_op_f32(var_3.b.x - var_0.b.x)))), _wgslsmith_f_op_f32(-var_0.a.x)), abs(_wgslsmith_add_vec4_u32(~vec4<u32>(var_0.d.x, 8647u, var_3.c.x, u_input.a.x), var_0.c)), vec2<u32>(_wgslsmith_sub_u32(var_3.d.x, 2518u), global0[_wgslsmith_index_u32(~(~global0[_wgslsmith_index_u32(1u, 24u)]), 24u)]));
            }
        }
        global1 = array<vec4<f32>, 7>();
    }
    let var_4 = vec2<u32>(27712u, min(49637u, _wgslsmith_mod_u32(_wgslsmith_mod_u32(70638u | var_3.c.x, 1u), _wgslsmith_mod_u32(_wgslsmith_dot_vec4_u32(vec4<u32>(31002u, 0u, 4294967295u, 73045u), vec4<u32>(1u, global0[_wgslsmith_index_u32(23596u, 24u)], var_3.d.x, 1u)), ~global0[_wgslsmith_index_u32(4294967295u, 24u)]))));
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-2388f + _wgslsmith_f_op_f32(max(var_0.b.x, _wgslsmith_f_op_f32(select(745f, var_0.b.x, true)))))), _wgslsmith_div_f32(1118f, 132f), var_3.a.zyy);
}

`;