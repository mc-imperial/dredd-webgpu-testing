export const input = [146,177,226,156,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [146,177,226,156,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[146,177,226,156]}
// Seed: 14334868641722436763

struct Struct_1 {
    a: vec4<i32>,
    b: vec2<i32>,
    c: vec2<f32>,
    d: vec3<i32>,
}

struct Struct_2 {
    a: Struct_1,
}

struct UniformBuffer {
    a: i32,
}

struct StorageBuffer {
    a: u32,
    b: vec2<i32>,
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

var<private> global0: array<vec3<i32>, 27>;

var<private> global1: array<Struct_1, 7>;

var<private> global2: vec2<i32>;

var<private> LOOP_COUNTERS: array<u32, 15>;

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn func_6(arg_0: u32, arg_1: Struct_2, arg_2: Struct_1) -> f32 {
    var var_0 = 1i;
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        for (var var_1 = 0i; var_1 >= 1i; var_1 -= 1i) {
            if (LOOP_COUNTERS[1u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        }
    }
    switch (_wgslsmith_clamp_i32(abs(_wgslsmith_dot_vec3_i32(-(~vec3<i32>(6230i, 17722i, 15430i)), vec3<i32>(1i, abs(arg_1.a.d.x), ~u_input.a))), arg_1.a.a.x | select(-21446i, 2147483647i, false), abs(i32(-1i) * -firstTrailingBit(-4193i)))) {
        case 0i: {
            var_0 = countOneBits(-29859i);
            var var_1 = arg_1;
            loop {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
                var var_2 = ~select(vec2<u32>(_wgslsmith_dot_vec3_u32(vec3<u32>(arg_0, arg_0, 0u) | vec3<u32>(0u, 19267u, arg_0), ~vec3<u32>(arg_0, 4294967295u, arg_0)), arg_0), ~vec2<u32>(arg_0, ~39580u), 0u >= _wgslsmith_dot_vec2_u32(select(vec2<u32>(82927u, arg_0), vec2<u32>(arg_0, arg_0), vec2<bool>(false, true)), ~vec2<u32>(arg_0, arg_0)));
            }
            for (var var_2 = _wgslsmith_sub_i32(2147483647i, -arg_2.a.x); true; var_0 = _wgslsmith_sub_i32(var_1.a.d.x, _wgslsmith_mult_i32(~(-(~20546i)), _wgslsmith_dot_vec3_i32(vec3<i32>(-1i) * -var_1.a.a.xwy, countOneBits(countOneBits(vec3<i32>(4609i, 2147483647i, 2147483647i))))))) {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            }
        }
        default: {
            global2 = select(_wgslsmith_mult_vec2_i32(vec2<i32>(~arg_1.a.b.x, i32(-2147483648)), arg_2.d.zy), vec2<i32>(40310i, countOneBits(abs(_wgslsmith_div_i32(1i, 18566i)))), all(select(vec3<bool>(true, all(vec2<bool>(true, true)), true), vec3<bool>(true, all(vec3<bool>(true, true, true)), true), !select(vec3<bool>(false, true, true), vec3<bool>(true, true, true), false))));
            if (true) {
                global1 = array<Struct_1, 7>();
                global0 = array<vec3<i32>, 27>();
                var_0 = reverseBits(arg_2.d.x);
                global2 = min(firstTrailingBit(vec2<i32>(1i, 16493i)), arg_1.a.b) ^ abs(~(~vec2<i32>(-44160i, u_input.a) | ~arg_2.b));
            }
        }
    }
    var var_1 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(579f, _wgslsmith_f_op_f32(-848f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(select(arg_1.a.c.x, arg_2.c.x, false)), 548f))));
    let var_2 = arg_1;
    return _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(-1373f)) - _wgslsmith_f_op_f32(-_wgslsmith_div_f32(arg_1.a.c.x, _wgslsmith_div_f32(-733f, _wgslsmith_f_op_f32(651f - -1182f)))));
}

fn func_5(arg_0: Struct_2) -> vec2<i32> {
    var var_0 = _wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-1000f, -680f, -690f, arg_0.a.c.x)))), _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(arg_0.a.c.x - arg_0.a.c.x), _wgslsmith_f_op_f32(arg_0.a.c.x - arg_0.a.c.x), 821f, _wgslsmith_div_f32(arg_0.a.c.x, -406f)))) - _wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-1780f, _wgslsmith_f_op_f32(func_6(32725u, Struct_2(Struct_1(arg_0.a.a, arg_0.a.a.wz, arg_0.a.c, vec3<i32>(u_input.a, arg_0.a.d.x, global2.x))), global1[_wgslsmith_index_u32(0u, 7u)])), _wgslsmith_div_f32(-755f, arg_0.a.c.x), arg_0.a.c.x)), _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(sign(vec4<f32>(arg_0.a.c.x, -858f, arg_0.a.c.x, 1177f))) + _wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_0.a.c.x, arg_0.a.c.x, arg_0.a.c.x, 1062f))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(753f, 739f, arg_0.a.c.x, -452f)))))));
    if (!((_wgslsmith_clamp_i32(2147483647i, arg_0.a.d.x, -15620i) != arg_0.a.a.x) == !any(vec3<bool>(true, false, true))) || true) {
        global2 = abs(select(arg_0.a.b, vec2<i32>(-(~0i), _wgslsmith_add_i32(-13999i, min(1i, 0i))), true));
        var var_1 = _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(select(vec3<f32>(_wgslsmith_f_op_f32(round(-1490f)), _wgslsmith_f_op_f32(-arg_0.a.c.x), _wgslsmith_f_op_f32(trunc(1000f))), var_0.xwz, !select(vec3<bool>(true, true, true), vec3<bool>(true, false, true), false))), _wgslsmith_f_op_vec3_f32(var_0.xxw + vec3<f32>(var_0.x, var_0.x, _wgslsmith_f_op_f32(arg_0.a.c.x * var_0.x))), select(select(vec3<bool>(true, true, true), select(vec3<bool>(true, true, false), vec3<bool>(true, false, false), false), vec3<bool>(true, true, false)), vec3<bool>(true, true, true), vec3<bool>(true, -14513i == u_input.a, true)))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(abs(vec3<f32>(-1124f, var_0.x, arg_0.a.c.x)))) - _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-var_0.xwx), _wgslsmith_f_op_vec3_f32(min(vec3<f32>(-708f, arg_0.a.c.x, 972f), var_0.zwx)))) - _wgslsmith_f_op_vec3_f32(select(var_0.xxz, var_0.ywz, all(vec2<bool>(false, true))))), !vec3<bool>((35760u >> (0u % 32u)) > select(4294967295u, 0u, true), true, all(vec4<bool>(true, true, true, true)))));
        var_1 = var_0.wyy;
        var_1 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-var_0.yyz));
    }
    loop {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        global1 = array<Struct_1, 7>();
    }
    var var_1 = firstLeadingBit(vec2<i32>(global2.x, _wgslsmith_mod_i32(_wgslsmith_sub_i32(global2.x & 2147483647i, min(i32(-2147483648), 1i)), i32(-2147483648))));
    var_1 = -select(_wgslsmith_sub_vec2_i32(vec2<i32>(u_input.a, 1i), arg_0.a.d.zy) | vec2<i32>(-1i, arg_0.a.b.x), select(_wgslsmith_mod_vec2_i32(vec2<i32>(u_input.a, i32(-2147483648)), vec2<i32>(17215i, arg_0.a.b.x)), vec2<i32>(2147483647i, 2147483647i), true), true & select(false, true, false)) >> (~(~(~vec2<u32>(48616u, 35447u)) >> (vec2<u32>(select(4294967295u, 48322u, true), 1u) % vec2<u32>(32u))) % vec2<u32>(32u));
    return countOneBits(~arg_0.a.a.wy);
}

fn func_4(arg_0: Struct_1, arg_1: u32) -> vec2<i32> {
    return func_5(Struct_2(arg_0));
}

fn func_3() -> Struct_1 {
    var var_0 = _wgslsmith_mod_vec2_i32(firstTrailingBit(firstTrailingBit(vec2<i32>(countOneBits(u_input.a), 1i))), select(min(firstTrailingBit(vec2<i32>(2147483647i, i32(-2147483648))), select(_wgslsmith_mod_vec2_i32(vec2<i32>(global2.x, 36231i), vec2<i32>(u_input.a, u_input.a)), firstLeadingBit(vec2<i32>(1i, u_input.a)), select(vec2<bool>(true, false), vec2<bool>(true, true), false))), _wgslsmith_mod_vec2_i32(firstTrailingBit(-vec2<i32>(global2.x, -15940i)), func_4(global1[_wgslsmith_index_u32(_wgslsmith_mod_u32(60426u, 30342u), 7u)], 1u)), select(any(vec3<bool>(true, false, false)), true, all(vec4<bool>(true, false, true, false)) != true)));
    loop {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        var var_1 = Struct_2(Struct_1(vec4<i32>(_wgslsmith_div_i32(1i, 2147483647i ^ var_0.x), max(global2.x, abs(u_input.a)), u_input.a, abs(global2.x)), abs(vec2<i32>(_wgslsmith_dot_vec3_i32(global0[_wgslsmith_index_u32(4294967295u, 27u)], global0[_wgslsmith_index_u32(42455u, 27u)]), _wgslsmith_dot_vec2_i32(vec2<i32>(u_input.a, var_0.x), vec2<i32>(global2.x, 10884i)))), _wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(_wgslsmith_f_op_f32(abs(-376f)), _wgslsmith_f_op_f32(select(-207f, -510f, false))))), vec3<i32>(-1i) * -global0[_wgslsmith_index_u32(71444u, 27u)]));
        var var_2 = select(select(!select(vec3<bool>(true, true, true), vec3<bool>(true, true, true), vec3<bool>(true, true, false)), vec3<bool>(true, any(vec3<bool>(true, true, true)), any(vec3<bool>(true, true, true))), !all(vec2<bool>(true, true))), vec3<bool>(select(true, all(vec3<bool>(true, false, false)), true), (~u_input.a & -30711i) != -countOneBits(var_1.a.d.x), !select(true, true, true)), false);
        continue;
    }
    for (var var_1: i32; true; ) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        var var_2 = true;
    }
    let var_1 = Struct_2(Struct_1(_wgslsmith_sub_vec4_i32(-vec4<i32>(34825i, i32(-2147483648), 12611i, global2.x), vec4<i32>(-1i) * -vec4<i32>(var_0.x, global2.x, -1i, 1i)), _wgslsmith_div_vec2_i32(~(~vec2<i32>(1564i, 0i)), vec2<i32>(var_0.x | u_input.a, var_0.x)), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(622f, 1207f)) + _wgslsmith_f_op_vec2_f32(vec2<f32>(-650f, -809f) + vec2<f32>(112f, -1000f))) * vec2<f32>(_wgslsmith_f_op_f32(abs(863f)), _wgslsmith_f_op_f32(f32(-1f) * -579f))), _wgslsmith_sub_vec3_i32(abs(vec3<i32>(0i, -17229i, global2.x)), (global0[_wgslsmith_index_u32(0u, 27u)] << (vec3<u32>(47731u, 1u, 4038u) % vec3<u32>(32u))) & -vec3<i32>(global2.x, -1i, 5026i))));
    global1 = array<Struct_1, 7>();
    return Struct_1(firstLeadingBit((vec4<i32>(9913i, var_1.a.a.x, var_1.a.b.x, u_input.a) & var_1.a.a) & var_1.a.a) << (~(~vec4<u32>(1u, 1u, 1u, 1u)) % vec4<u32>(32u)), abs(max(_wgslsmith_clamp_vec2_i32(_wgslsmith_div_vec2_i32(vec2<i32>(23350i, -1i), vec2<i32>(global2.x, -61571i)), vec2<i32>(u_input.a, 55762i) | var_1.a.b, abs(var_1.a.d.xy)), vec2<i32>(u_input.a, 1i))), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(exp2(vec2<f32>(-1855f, var_1.a.c.x))) - _wgslsmith_f_op_vec2_f32(-var_1.a.c))) - vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(538f - -819f)), _wgslsmith_f_op_f32(-501f + _wgslsmith_f_op_f32(var_1.a.c.x + var_1.a.c.x)))), ~vec3<i32>(var_1.a.b.x | ~(-21634i), global2.x, -(~16734i)));
}

fn func_7(arg_0: vec2<bool>, arg_1: Struct_1, arg_2: vec2<u32>, arg_3: vec2<u32>) -> i32 {
    switch (~(-(~global2.x))) {
        default: {
            let var_0 = ~(~7173i);
            global1 = array<Struct_1, 7>();
            for (var var_1 = 38062i; false; ) {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                continue;
            }
            global1 = array<Struct_1, 7>();
            if (!all(select(vec3<bool>(false, arg_0.x, arg_0.x), select(select(vec3<bool>(true, arg_0.x, true), vec3<bool>(arg_0.x, true, arg_0.x), true), vec3<bool>(false, true, arg_0.x), select(vec3<bool>(true, arg_0.x, false), vec3<bool>(false, false, arg_0.x), arg_0.x)), arg_0.x | false))) {
                let var_1 = ~arg_1.d.x;
                global0 = array<vec3<i32>, 27>();
                var var_2 = -global2.x;
            }
        }
    }
    if (false) {
        let var_0 = Struct_1(arg_1.a | arg_1.a, -(arg_1.a.zy << (reverseBits(vec2<u32>(arg_3.x, arg_3.x)) % vec2<u32>(32u))), _wgslsmith_f_op_vec2_f32(select(arg_1.c, _wgslsmith_f_op_vec2_f32(min(arg_1.c, _wgslsmith_f_op_vec2_f32(exp2(arg_1.c)))), any(select(select(arg_0, vec2<bool>(arg_0.x, arg_0.x), arg_0.x), arg_0, !vec2<bool>(arg_0.x, arg_0.x))))), global0[_wgslsmith_index_u32(arg_3.x, 27u)] << (~vec3<u32>(~29713u, 1u, 1u) % vec3<u32>(32u)));
    }
    global2 = arg_1.a.yy;
    for (var var_0 = 17852i; var_0 >= 0i; var_0 = ~global2.x) {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        if (arg_0.x) {
            var_0 = ~(_wgslsmith_dot_vec4_i32(vec4<i32>(-1i) * -vec4<i32>(13344i, u_input.a, -41439i, arg_1.a.x), max(vec4<i32>(2147483647i, -29459i, u_input.a, u_input.a), vec4<i32>(-21298i, -1i, i32(-2147483648), global2.x))) ^ arg_1.a.x);
            continue;
        }
        for (var var_1 = 6468i; var_1 <= 1i; var_1 += 1i) {
            if (LOOP_COUNTERS[9u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        }
        loop {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
            var var_1 = ~countOneBits(vec4<i32>(_wgslsmith_clamp_i32(arg_1.b.x, 1i, arg_1.b.x), _wgslsmith_add_i32(global2.x, arg_1.d.x), arg_1.b.x, arg_1.b.x));
            break;
        }
        global2 = arg_1.d.zx;
        switch (2147483647i) {
            case i32(-2147483648): {
                break;
            }
            case 2147483647i: {
                break;
            }
            default: {
                let var_1 = Struct_2(func_3());
                global2 = ~(~_wgslsmith_div_vec2_i32(_wgslsmith_mod_vec2_i32(arg_1.b, var_1.a.b), ~var_1.a.a.xz) >> (abs(arg_2) % vec2<u32>(32u)));
                var var_2 = vec3<f32>(_wgslsmith_f_op_f32(968f + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(1f)))), _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_1.c.x + var_1.a.c.x))))), _wgslsmith_f_op_f32(-1000f));
            }
        }
    }
    global1 = array<Struct_1, 7>();
    return select(reverseBits(~global2.x), global2.x, true);
}

fn func_2(arg_0: bool) -> vec2<f32> {
    if (!any(vec4<bool>(arg_0, !(true || arg_0), !arg_0, arg_0))) {
    }
    if (_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-570f + 241f))), _wgslsmith_f_op_f32(-902f + _wgslsmith_f_op_f32(1304f + -1336f))))) < 319f) {
        var var_0 = vec2<i32>(global2.x, abs(1i));
        for (var var_1 = -25695i; var_1 >= 1i; var_1 += 1i) {
            if (LOOP_COUNTERS[11u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
            break;
        }
        var var_1 = ~0u;
        switch (_wgslsmith_mult_i32(_wgslsmith_clamp_i32(-21127i, ~func_7(!vec2<bool>(arg_0, arg_0), func_3(), vec2<u32>(4294967295u, 4294967295u), select(vec2<u32>(0u, 1883u), vec2<u32>(79787u, 15785u), vec2<bool>(true, false))), 1i), max(-1i, ~_wgslsmith_clamp_i32(u_input.a, global2.x, u_input.a)) << (~12369u % 32u))) {
            case -1i: {
                var var_2 = var_0.x >= select(~(~func_4(global1[_wgslsmith_index_u32(40578u, 7u)], 34569u).x), 1i << (_wgslsmith_div_u32(_wgslsmith_div_u32(1u, 21674u), 1u) % 32u), true);
            }
            default: {
                var var_2 = vec4<i32>(global2.x, min(~1i, select(_wgslsmith_sub_i32(78704i, u_input.a) >> (firstLeadingBit(4294967295u) % 32u), _wgslsmith_mod_i32(var_0.x, _wgslsmith_sub_i32(global2.x, -1i)), all(vec4<bool>(true, false, true, false)))), i32(-1i) * -global2.x, 1719i);
                let var_3 = Struct_2(func_3());
                let var_4 = (countOneBits(vec4<u32>(1u, 14056u, 4294967295u, 71732u) << (firstTrailingBit(vec4<u32>(0u, 0u, 0u, 0u)) % vec4<u32>(32u))) & (vec4<u32>(~40188u, 4294967295u, 4294967295u, ~1u) >> (firstLeadingBit(abs(vec4<u32>(4294967295u, 67395u, 23421u, 1u))) % vec4<u32>(32u)))) << (~reverseBits(abs(firstLeadingBit(vec4<u32>(1u, 1u, 47316u, 1u)))) % vec4<u32>(32u));
            }
        }
    }
    return _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(1f, 1f)));
}

fn func_1() -> vec3<u32> {
    var var_0 = Struct_1(vec4<i32>(max(_wgslsmith_dot_vec4_i32(-vec4<i32>(global2.x, 0i, 2147483647i, u_input.a), _wgslsmith_mult_vec4_i32(vec4<i32>(-1i, u_input.a, u_input.a, 2147483647i), vec4<i32>(u_input.a, 11897i, i32(-2147483648), u_input.a))), u_input.a), global2.x, ~(-_wgslsmith_dot_vec4_i32(vec4<i32>(global2.x, 2147483647i, u_input.a, global2.x), vec4<i32>(1i, global2.x, -7424i, u_input.a))), _wgslsmith_mod_i32(global2.x, ~(global2.x | 1i))), vec2<i32>(61150i, -(~u_input.a)) ^ -firstLeadingBit(vec2<i32>(1i, global2.x)), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(func_2(true)) - _wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(1426f + -1775f), _wgslsmith_f_op_f32(f32(-1f) * -968f)) + _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(1318f, -739f)), _wgslsmith_f_op_vec2_f32(-vec2<f32>(549f, 1855f))))), -(~(~select(global0[_wgslsmith_index_u32(15351u, 27u)], vec3<i32>(u_input.a, -9317i, 1545i), false))));
    let var_1 = _wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_div_f32(var_0.c.x, -2610f), _wgslsmith_f_op_vec2_f32(func_2(false)).x, 1f, func_3().c.x))))));
    global1 = array<Struct_1, 7>();
    for (var var_2 = _wgslsmith_mod_i32(~(~_wgslsmith_sub_i32(var_0.a.x, i32(-2147483648))), -var_0.b.x); var_2 == -16439i; var_2 -= 1i) {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        break;
    }
    loop {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        let var_2 = i32(-2147483648);
        let var_3 = var_1.zzz;
        continue;
    }
    return ~(~vec3<u32>(1u, 1u, 1u));
}

@compute
@workgroup_size(1)
fn main() {
    global1 = array<Struct_1, 7>();
    loop {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
    }
    global0 = array<vec3<i32>, 27>();
    var var_0 = firstLeadingBit(~vec3<u32>(35978u << (0u % 32u), ~1u, _wgslsmith_mod_u32(53579u, 163508u)) ^ ~(func_1() | abs(vec3<u32>(16284u, 0u, 5135u))));
    var var_1 = _wgslsmith_f_op_f32(-1614f);
    let x = u_input.a;
    s_output = StorageBuffer(~var_0.x, vec2<i32>(_wgslsmith_add_i32(_wgslsmith_add_i32(abs(-32777i), _wgslsmith_mod_i32(u_input.a, global2.x)), i32(-2147483648)), _wgslsmith_dot_vec4_i32(vec4<i32>(global2.x, _wgslsmith_div_i32(-21881i, -37895i), abs(u_input.a), _wgslsmith_div_i32(i32(-2147483648), u_input.a)), (vec4<i32>(-1i, u_input.a, i32(-2147483648), global2.x) << (vec4<u32>(4294967295u, var_0.x, 41062u, 26317u) % vec4<u32>(32u))) & max(vec4<i32>(global2.x, u_input.a, u_input.a, -93901i), vec4<i32>(u_input.a, -10741i, global2.x, 0i)))), vec3<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-1292f))))), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(func_6(var_0.x >> (1u % 32u), Struct_2(global1[_wgslsmith_index_u32(41849u, 7u)]), func_3())))), _wgslsmith_f_op_f32(func_6(6392u, Struct_2(Struct_1(vec4<i32>(global2.x, -56781i, u_input.a, -1i), vec2<i32>(45521i, global2.x), vec2<f32>(-192f, -1000f), vec3<i32>(u_input.a, 29029i, 40236i))), func_3()))), 1u, global2.x);
}

`;