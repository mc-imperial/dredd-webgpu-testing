export const input = [158,238,235,223,230,21,22,254,225,129,253,150,26,192,235,75,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [158,238,235,223,230,21,22,254,225,129,253,150,26,192,235,75,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[158,238,235,223,230,21,22,254,225,129,253,150,26,192,235,75]}
// Seed: 999449691181103209

struct Struct_1 {
    a: u32,
}

struct UniformBuffer {
    a: vec2<u32>,
    b: u32,
}

struct StorageBuffer {
    a: vec4<f32>,
    b: i32,
    c: vec2<f32>,
    d: vec3<i32>,
    e: u32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<Struct_1, 14>;

var<private> global1: i32 = -32955i;

var<private> LOOP_COUNTERS: array<u32, 33>;

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn func_6(arg_0: Struct_1, arg_1: f32) -> i32 {
    global1 = _wgslsmith_dot_vec2_i32(vec2<i32>(-84823i, max(i32(-2147483648), ~1i)), -(vec2<i32>(-1i) * -vec2<i32>(1i, 1i)));
    for (var var_0 = 1i; var_0 == 23714i; var_0 = -(~min(-611i, _wgslsmith_clamp_i32(-57741i, ~2147483647i, ~29609i)))) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        let var_1 = _wgslsmith_f_op_vec2_f32(abs(_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(arg_1, arg_1)), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(-428f, -642f) + _wgslsmith_f_op_vec2_f32(-vec2<f32>(arg_1, arg_1))) + _wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_f_op_vec2_f32(vec2<f32>(arg_1, arg_1) + vec2<f32>(-311f, arg_1))))))));
        if (any(vec3<bool>(false, !any(vec2<bool>(false, true)), true)) && false) {
        }
        global0 = array<Struct_1, 14>();
    }
    for (; ; ) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        switch (13728i) {
            case 0i: {
                return _wgslsmith_dot_vec2_i32(select(-vec2<i32>(-1i, 8553i), _wgslsmith_div_vec2_i32(select(vec2<i32>(-24854i, -34468i), vec2<i32>(i32(-2147483648), i32(-2147483648)), vec2<bool>(true, false)), vec2<i32>(47841i, i32(-2147483648))), all(vec2<bool>(true, true))) & select(vec2<i32>(1i, 29586i), reverseBits(-vec2<i32>(i32(-2147483648), -1468i)), true), -_wgslsmith_mult_vec2_i32(reverseBits(vec2<i32>(2147483647i, 13798i) << (u_input.a % vec2<u32>(32u))), ~vec2<i32>(0i, 0i)));
            }
            case 15982i: {
            }
            case 4579i: {
                continue;
            }
            case -46447i: {
            }
            default: {
                break;
            }
        }
        break;
    }
    if (arg_1 == _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(arg_1 + _wgslsmith_f_op_f32(step(arg_1, arg_1))), arg_1)))) {
        if (-2063f < arg_1) {
            let var_0 = _wgslsmith_sub_u32(_wgslsmith_dot_vec2_u32(u_input.a, ~select(u_input.a, u_input.a, all(vec4<bool>(true, true, false, true)))), ~0u);
            global0 = array<Struct_1, 14>();
        }
        let var_0 = vec3<bool>(all(!vec4<bool>(select(false, false, false), true, any(vec2<bool>(true, true)), true)), !(_wgslsmith_f_op_f32(-arg_1) > _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-arg_1)))), !(!(!all(vec2<bool>(true, false)))));
        global0 = array<Struct_1, 14>();
        loop {
            if (LOOP_COUNTERS[2u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            break;
        }
    }
    global0 = array<Struct_1, 14>();
    return _wgslsmith_clamp_i32(~_wgslsmith_div_i32(_wgslsmith_dot_vec2_i32(vec2<i32>(0i, -49191i), vec2<i32>(1i, i32(-2147483648))) >> (u_input.a.x % 32u), _wgslsmith_sub_i32(20675i, _wgslsmith_div_i32(i32(-2147483648), 105313i))), _wgslsmith_mult_i32(2147483647i, -countOneBits(i32(-2147483648))), firstTrailingBit(_wgslsmith_add_i32(~(-26727i), min(_wgslsmith_dot_vec3_i32(vec3<i32>(-21795i, 0i, -1i), vec3<i32>(23343i, -41154i, -1i)), i32(-1i) * -21605i))));
}

fn func_5(arg_0: vec2<bool>) -> f32 {
    if (true) {
    }
    var var_0 = global0[_wgslsmith_index_u32(~u_input.a.x, 14u)];
    switch (func_6(Struct_1(_wgslsmith_div_u32(~0u, _wgslsmith_mod_u32(var_0.a, 1u))), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(f32(-1f) * -1256f))))) {
        default: {
            var_0 = global0[_wgslsmith_index_u32(~(~_wgslsmith_dot_vec4_u32(_wgslsmith_mult_vec4_u32(countOneBits(vec4<u32>(10197u, var_0.a, 55314u, 0u)), ~vec4<u32>(62526u, var_0.a, 1u, u_input.b)), firstTrailingBit(~vec4<u32>(44329u, var_0.a, var_0.a, var_0.a)))), 14u)];
            global1 = ~(1i ^ -(_wgslsmith_clamp_i32(-18771i, -23275i, 39217i) << (0u % 32u)));
            loop {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
                global0 = array<Struct_1, 14>();
                continue;
            }
        }
    }
    var var_1 = vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(step(-987f, -572f)), _wgslsmith_f_op_f32(-222f + 119f)) - _wgslsmith_f_op_f32(-1414f))), _wgslsmith_f_op_f32(ceil(1143f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(310f * -729f))), _wgslsmith_f_op_f32(217f * _wgslsmith_f_op_f32(f32(-1f) * -1330f)))) * _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(trunc(545f)), _wgslsmith_f_op_f32(f32(-1f) * -505f)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(1459f - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1277f - -772f) - 1f)) + 610f));
    global1 = ~(~_wgslsmith_div_i32(i32(-1i) * -1i, _wgslsmith_dot_vec4_i32(vec4<i32>(1i, -67351i, 1i, -3313i), vec4<i32>(13950i, 35453i, -1i, 996i))) & 21871i);
    return _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -205f) + 2352f);
}

fn func_4(arg_0: u32) -> vec4<u32> {
    var var_0 = _wgslsmith_f_op_f32(func_5(select(vec2<bool>(true, true), !select(select(vec2<bool>(true, false), vec2<bool>(false, false), true), vec2<bool>(true, false), vec2<bool>(true, true)), true)));
    let var_1 = !(!vec4<bool>(false, arg_0 < 4294967295u, !all(vec4<bool>(false, true, false, false)), false));
    global1 = ~_wgslsmith_dot_vec2_i32(vec2<i32>(-1i) * -vec2<i32>(14280i, i32(-2147483648)), _wgslsmith_add_vec2_i32(vec2<i32>(select(2147483647i, 2147483647i, false), _wgslsmith_sub_i32(-1i, -1i)), firstTrailingBit(vec2<i32>(1i, 1i))));
    var var_2 = global0[_wgslsmith_index_u32(_wgslsmith_div_u32(firstLeadingBit(~(arg_0 << (~arg_0 % 32u))), ~arg_0 >> (~(~u_input.b) % 32u)), 14u)];
    global0 = array<Struct_1, 14>();
    return ~(~(vec4<u32>(max(18663u, 13826u), ~arg_0, abs(var_2.a), 4294967295u) >> (vec4<u32>(_wgslsmith_add_u32(u_input.a.x, 4294967295u), u_input.a.x, _wgslsmith_div_u32(u_input.a.x, 0u), ~136563u) % vec4<u32>(32u))));
}

fn func_7(arg_0: vec3<bool>, arg_1: vec4<u32>) -> Struct_1 {
    var var_0 = Struct_1(~_wgslsmith_dot_vec2_u32(~u_input.a ^ vec2<u32>(u_input.b, u_input.a.x), _wgslsmith_div_vec2_u32(arg_1.wz, select(arg_1.xw, vec2<u32>(u_input.a.x, arg_1.x), arg_0.xy))));
    for (var var_1 = -55067i; var_1 >= 47815i; var_1 += 1i) {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
    }
    switch (~0i) {
        case -8412i: {
            for (var var_1 = 1i; true; var_1 += 1i) {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                let var_2 = global0[_wgslsmith_index_u32(_wgslsmith_mod_u32(firstLeadingBit(69793u >> (var_0.a % 32u)), u_input.a.x), 14u)];
                global1 = func_6(global0[_wgslsmith_index_u32(26169u, 14u)], _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(f32(-1f) * -583f)))));
                var_1 = ~_wgslsmith_sub_i32(1i, 12269i);
                let var_3 = _wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(f32(-1f) * -870f))), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-752f + 414f)))), 1000f));
            }
            var var_1 = global0[_wgslsmith_index_u32(var_0.a, 14u)];
            var var_2 = ~abs(_wgslsmith_clamp_vec4_u32(arg_1 >> (_wgslsmith_add_vec4_u32(arg_1, vec4<u32>(var_0.a, 1u, var_0.a, 30988u)) % vec4<u32>(32u)), firstLeadingBit(arg_1) ^ vec4<u32>(7600u, 4294967295u, 0u, 4991u), (arg_1 ^ vec4<u32>(1u, 19858u, var_1.a, 32456u)) << (arg_1 % vec4<u32>(32u))));
            var_0 = global0[_wgslsmith_index_u32(92579u, 14u)];
        }
        case 0i: {
            var var_1 = global0[_wgslsmith_index_u32(~min(_wgslsmith_mult_u32(1u, 1u << (firstTrailingBit(var_0.a) % 32u)), var_0.a | 45566u), 14u)];
            switch (select(~35091i, i32(-2147483648), select(!arg_0.x, _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(f32(-1f) * -126f))) != _wgslsmith_f_op_f32(1004f - -113f), true))) {
                case 5569i: {
                }
                default: {
                    let var_2 = Struct_1(var_1.a);
                    var_0 = Struct_1(1u >> (0u % 32u));
                    let var_3 = firstTrailingBit(arg_1) << (func_4(_wgslsmith_div_u32(firstLeadingBit(var_2.a) >> (~arg_1.x % 32u), firstTrailingBit(_wgslsmith_dot_vec2_u32(vec2<u32>(u_input.b, 63584u), arg_1.ww)))) % vec4<u32>(32u));
                    var var_4 = 139f;
                    var_1 = Struct_1(firstTrailingBit(0u));
                }
            }
        }
        case i32(-2147483648): {
            loop {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                global1 = _wgslsmith_dot_vec2_i32(vec2<i32>(-min(17358i, 1i), ~36625i), ~select(~vec2<i32>(1i, 1i), -(~vec2<i32>(-20155i, i32(-2147483648))), vec2<bool>(true, !arg_0.x)));
            }
            loop {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
            }
            for (; ; ) {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                break;
            }
            if (false) {
                var var_1 = global0[_wgslsmith_index_u32(var_0.a, 14u)];
            }
            loop {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
            }
        }
        case -11956i: {
            for (; ; ) {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                global1 = _wgslsmith_sub_i32(-func_6(global0[_wgslsmith_index_u32(~var_0.a, 14u)], _wgslsmith_f_op_f32(-1f)), 0i);
                let var_1 = select(vec2<u32>(1u, 0u << (_wgslsmith_dot_vec4_u32(vec4<u32>(0u, u_input.b, 41407u, arg_1.x), arg_1) % 32u)) << (arg_1.yz % vec2<u32>(32u)), select(_wgslsmith_mod_vec2_u32(vec2<u32>(u_input.a.x & u_input.b, 1224u), u_input.a), _wgslsmith_clamp_vec2_u32(~vec2<u32>(arg_1.x, var_0.a), countOneBits(vec2<u32>(45750u, u_input.a.x)), ~vec2<u32>(arg_1.x, var_0.a)) >> (u_input.a % vec2<u32>(32u)), select(arg_0.xy, select(arg_0.xz, arg_0.zy, arg_0.x || false), arg_0.yz)), select(select(!(!vec2<bool>(arg_0.x, true)), arg_0.zx, true), vec2<bool>(countOneBits(arg_1.x) != ~u_input.b, arg_0.x), select(arg_0.xy, !vec2<bool>(arg_0.x, true), vec2<bool>(arg_0.x, arg_0.x))));
                global0 = array<Struct_1, 14>();
            }
        }
        default: {
            var var_1 = _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(select(vec2<f32>(128f, -448f), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(1f, 1f)) * _wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(1465f, -383f)))), arg_0.zx)), vec2<f32>(650f, _wgslsmith_f_op_f32(814f - -389f)));
            loop {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                var var_2 = select(arg_0.xx, arg_0.yx, false);
            }
            if ((_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-var_1.x), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(var_1.x, -782f)), true)) > _wgslsmith_div_f32(var_1.x, _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(floor(var_1.x)))))) & (any(!arg_0.zy) | (_wgslsmith_f_op_f32(abs(_wgslsmith_div_f32(674f, -855f))) != var_1.x))) {
                var_0 = Struct_1(func_4(u_input.a.x).x);
            }
        }
    }
    for (var var_1 = 2147483647i; var_1 <= 1i; var_1 += 1i) {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        switch (-(1i << (var_0.a % 32u))) {
            case 1i: {
                var var_2 = vec3<f32>(_wgslsmith_f_op_f32(-775f), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(f32(-1f) * -125f))), _wgslsmith_f_op_f32(-350f));
            }
            case 3503i: {
                break;
            }
            case 65092i: {
                var var_2 = vec4<i32>(3533i, -26654i, -41978i >> (arg_1.x % 32u), 0i);
                var var_3 = !vec4<bool>(false, any(!select(arg_0, vec3<bool>(true, arg_0.x, arg_0.x), false)), true, false);
                var var_4 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_div_f32(-1495f, 830f), _wgslsmith_f_op_f32(floor(-1155f)), 1f) - _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(-994f, 744f, -857f))))), _wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_div_f32(220f, -133f), _wgslsmith_f_op_f32(778f * 802f), _wgslsmith_f_op_f32(-249f * 525f)) + _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(max(vec3<f32>(-820f, -1000f, -3103f), vec3<f32>(1428f, -1519f, 834f)))))));
                var var_5 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-var_4.x), _wgslsmith_f_op_f32(var_4.x - 207f))))) + _wgslsmith_div_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(var_4.x * var_4.x)), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-var_4.x), var_4.x)), _wgslsmith_f_op_f32(ceil(377f))));
                var_2 = abs(vec4<i32>(~var_2.x, -var_2.x, _wgslsmith_sub_i32(var_2.x | var_2.x, _wgslsmith_mult_i32(26213i, -38866i)) | var_2.x, i32(-1i) * -(i32(-1i) * -1i)));
            }
            case i32(-2147483648): {
                var var_2 = _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-2529f, 2135f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1887f)))), _wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-130f + -1753f)), _wgslsmith_div_f32(_wgslsmith_f_op_f32(1000f + -714f), _wgslsmith_f_op_f32(-690f)), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(ceil(1000f))))))));
                var_2 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(var_2.x, _wgslsmith_f_op_f32(f32(-1f) * -834f), _wgslsmith_div_f32(var_2.x, var_2.x)))));
                return Struct_1(69625u);
            }
            default: {
            }
        }
        for (; ; ) {
            if (LOOP_COUNTERS[13u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
            continue;
        }
        let var_2 = Struct_1(_wgslsmith_mod_u32(~_wgslsmith_mod_u32(firstTrailingBit(1u), u_input.a.x), arg_1.x));
        continue;
    }
    global1 = _wgslsmith_div_i32(~_wgslsmith_clamp_i32(_wgslsmith_mod_i32(1i, countOneBits(i32(-2147483648))), func_6(Struct_1(var_0.a), 804f), min(~(-20626i), ~(-1i))), 7271i);
    return Struct_1(u_input.a.x);
}

fn func_8(arg_0: vec2<i32>, arg_1: Struct_1, arg_2: vec2<u32>) -> Struct_1 {
    let var_0 = Struct_1(_wgslsmith_dot_vec2_u32(_wgslsmith_mod_vec2_u32(abs(u_input.a), func_4(u_input.b).zw), _wgslsmith_add_vec2_u32(_wgslsmith_mod_vec2_u32(_wgslsmith_mult_vec2_u32(vec2<u32>(4294967295u, 0u), vec2<u32>(arg_1.a, arg_2.x)), vec2<u32>(arg_1.a, 1u)), u_input.a >> (~vec2<u32>(arg_1.a, arg_1.a) % vec2<u32>(32u)))));
    switch (min(-func_6(global0[_wgslsmith_index_u32(1u >> (0u % 32u), 14u)], _wgslsmith_f_op_f32(1475f - -535f)) << (1u % 32u), arg_0.x)) {
        default: {
            global1 = arg_0.x;
        }
    }
    return var_0;
}

fn func_9(arg_0: Struct_1, arg_1: f32, arg_2: Struct_1, arg_3: i32) -> Struct_1 {
    for (var var_0: i32; false; global0 = array<Struct_1, 14>()) {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        loop {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            global0 = array<Struct_1, 14>();
            var var_1 = vec2<u32>(func_7(select(!select(vec3<bool>(true, false, false), vec3<bool>(false, false, true), false), vec3<bool>(true, true, true), vec3<bool>(all(vec2<bool>(true, false)), true, true)), ~abs(~vec4<u32>(54437u, u_input.b, u_input.a.x, 66208u))).a, _wgslsmith_dot_vec4_u32(~_wgslsmith_mult_vec4_u32(~vec4<u32>(arg_2.a, u_input.b, u_input.b, 4294967295u), ~vec4<u32>(u_input.a.x, 1u, arg_2.a, u_input.a.x)), ~(~(~vec4<u32>(arg_0.a, arg_0.a, 0u, 801u)))));
            var_1 = vec2<u32>(var_1.x, _wgslsmith_clamp_u32(~25125u, ~var_1.x ^ ~arg_2.a, 0u));
        }
        global0 = array<Struct_1, 14>();
    }
    for (var var_0 = -20111i; ; global0 = array<Struct_1, 14>()) {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        global0 = array<Struct_1, 14>();
        let var_1 = 1u;
    }
    global1 = arg_3;
    global1 = _wgslsmith_clamp_i32(-2147483647i, -(_wgslsmith_div_i32(func_6(Struct_1(1u), 1309f), -33553i) << (8381u % 32u)), ~(-arg_3));
    loop {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
        let var_0 = Struct_1(~43032u << (arg_0.a % 32u));
        if (true) {
            global0 = array<Struct_1, 14>();
        }
        if (any(vec3<bool>(arg_1 <= -605f, true, true))) {
            continue;
        }
        var var_1 = func_7(!select(vec3<bool>(any(vec3<bool>(false, true, false)), false, true), select(vec3<bool>(true, true, true), select(vec3<bool>(false, false, false), vec3<bool>(true, true, true), vec3<bool>(true, true, true)), all(vec3<bool>(false, true, true))), true), ~_wgslsmith_add_vec4_u32(reverseBits(vec4<u32>(97661u, arg_2.a, var_0.a, u_input.a.x)), _wgslsmith_clamp_vec4_u32(vec4<u32>(var_0.a, u_input.b, arg_2.a, 31656u), vec4<u32>(var_0.a, 50382u, arg_2.a, 85075u), vec4<u32>(arg_0.a, 17533u, u_input.a.x, arg_0.a)) | (vec4<u32>(arg_0.a, 61364u, arg_0.a, 0u) & vec4<u32>(0u, arg_2.a, arg_2.a, 4294967295u))));
    }
    return func_7(select(select(vec3<bool>(true, true, true), select(vec3<bool>(false, false, true), vec3<bool>(true, true, true), false), !select(vec3<bool>(true, true, true), vec3<bool>(true, false, false), false)), !vec3<bool>(any(vec4<bool>(false, true, false, false)), all(vec3<bool>(true, false, true)), any(vec4<bool>(true, true, false, true))), arg_2.a > arg_0.a), firstLeadingBit(abs(~vec4<u32>(4294967295u, 0u, 4294967295u, 4294967295u))));
}

fn func_3(arg_0: f32, arg_1: vec2<u32>) -> bool {
    if (false) {
        let var_0 = _wgslsmith_dot_vec2_i32(vec2<i32>(i32(-1i) * -81001i, i32(-1i) * -62535i), -(~vec2<i32>(i32(-1i) * i32(-2147483648), _wgslsmith_clamp_i32(-4393i, 26317i, i32(-2147483648)))));
        let var_1 = Struct_1(firstTrailingBit(arg_1.x));
        let var_2 = func_9(func_8(countOneBits(~vec2<i32>(var_0, -40815i)), func_7(vec3<bool>(true, true, true), _wgslsmith_clamp_vec4_u32(func_4(0u), vec4<u32>(var_1.a, u_input.b, 4294967295u, var_1.a) & vec4<u32>(var_1.a, u_input.a.x, 40229u, 35559u), ~vec4<u32>(4250u, 71524u, arg_1.x, var_1.a))), select(arg_1, _wgslsmith_mod_vec2_u32(vec2<u32>(arg_1.x, var_1.a), select(u_input.a, vec2<u32>(arg_1.x, arg_1.x), vec2<bool>(true, true))), vec2<bool>(true, true))), -360f, global0[_wgslsmith_index_u32(~1u, 14u)], 2147483647i);
        let var_3 = select(select(vec4<bool>(var_0 <= max(var_0, -39269i), false, true, select(true, true, any(vec2<bool>(true, false)))), select(select(vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true), any(vec2<bool>(false, true))), vec4<bool>(true, true, any(vec2<bool>(false, false)), any(vec2<bool>(true, false))), vec4<bool>(true, true, true, true)), vec4<bool>(false, any(vec4<bool>(true, true, true, true)), any(vec4<bool>(true, true, false, false)), true)), select(!vec4<bool>(false, any(vec4<bool>(false, true, false, false)), true, arg_0 < 1031f), vec4<bool>(!(4294967295u <= u_input.a.x), false, true | (var_1.a < arg_1.x), false), vec4<bool>(true, (i32(-1i) * -42274i) < _wgslsmith_sub_i32(var_0, var_0), !(4536u <= arg_1.x), true)), vec4<bool>(true, any(vec2<bool>(true, true)), any(!select(vec4<bool>(false, false, false, true), vec4<bool>(false, false, false, true), false)), all(vec2<bool>(true, false))));
        global1 = abs(_wgslsmith_dot_vec4_i32(vec4<i32>(firstTrailingBit(var_0), var_0, _wgslsmith_add_i32(abs(-33396i), countOneBits(1i)), var_0), ~(vec4<i32>(13574i, -2810i, 44114i, -24229i) << (vec4<u32>(var_2.a, 4294967295u, 0u, arg_1.x) % vec4<u32>(32u))) >> ((~vec4<u32>(var_1.a, arg_1.x, var_2.a, 89u) << (vec4<u32>(4294967295u, 4882u, u_input.b, arg_1.x) % vec4<u32>(32u))) % vec4<u32>(32u))));
    }
    for (var var_0: i32; var_0 < 2147483647i; var_0 -= 1i) {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        let var_1 = _wgslsmith_clamp_vec3_u32(~_wgslsmith_mod_vec3_u32(_wgslsmith_div_vec3_u32(vec3<u32>(50075u, 20871u, 60017u), vec3<u32>(arg_1.x, 4294967295u, u_input.a.x)), firstTrailingBit(vec3<u32>(49025u, u_input.b, 31392u))), _wgslsmith_mult_vec3_u32(countOneBits(vec3<u32>(arg_1.x, arg_1.x, 1u)), ~_wgslsmith_add_vec3_u32(vec3<u32>(4294967295u, u_input.b, arg_1.x), vec3<u32>(1u, u_input.a.x, u_input.a.x))), vec3<u32>(u_input.a.x, 23429u, firstTrailingBit(func_9(global0[_wgslsmith_index_u32(9047u, 14u)], -649f, Struct_1(65511u), 57173i).a))) ^ vec3<u32>(_wgslsmith_mult_u32(min(arg_1.x, ~1u), u_input.b), ~(~23826u), u_input.b);
        loop {
            if (LOOP_COUNTERS[19u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
        }
    }
    var var_0 = vec2<bool>(select(false || !(-860f == arg_0), 48382u >= abs(u_input.b), true), true);
    global1 = -17613i;
    let var_1 = func_9(Struct_1(_wgslsmith_mod_u32(~(11904u ^ u_input.a.x), _wgslsmith_clamp_u32(~0u, ~arg_1.x, arg_1.x))), arg_0, global0[_wgslsmith_index_u32(u_input.b, 14u)], -16318i);
    return var_0.x;
}

fn func_2(arg_0: f32, arg_1: Struct_1) -> Struct_1 {
    switch (_wgslsmith_mult_i32(_wgslsmith_dot_vec2_i32(firstLeadingBit(-_wgslsmith_sub_vec2_i32(vec2<i32>(-26036i, 1653i), vec2<i32>(-56793i, 1717i))), reverseBits(~vec2<i32>(1i, 1i))), _wgslsmith_dot_vec4_i32(-(vec4<i32>(29085i, -3427i, -12348i, -31279i) << (vec4<u32>(7125u, 1u, arg_1.a, 32153u) % vec4<u32>(32u))) & ~(-vec4<i32>(-19748i, -23845i, 0i, 11980i)), -countOneBits(vec4<i32>(56489i, 0i, 38410i, 0i))))) {
        case -9784i: {
            var var_0 = vec2<bool>(true, true);
            loop {
                if (LOOP_COUNTERS[20u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
                continue;
            }
            if (true) {
                let var_1 = select(select(!(!select(vec4<bool>(true, var_0.x, var_0.x, var_0.x), vec4<bool>(false, false, var_0.x, true), vec4<bool>(var_0.x, true, var_0.x, var_0.x))), !(!vec4<bool>(false, var_0.x, true, false)), vec4<bool>(true, true, true, true)), !select(!vec4<bool>(var_0.x, false, true, var_0.x), !(!vec4<bool>(false, var_0.x, false, var_0.x)), !(var_0.x | true)), vec4<bool>(any(vec2<bool>(var_0.x, var_0.x)) & (!var_0.x || false), func_3(_wgslsmith_f_op_f32(round(arg_0)), select(vec2<u32>(arg_1.a, arg_1.a), reverseBits(vec2<u32>(u_input.b, 39043u)), !vec2<bool>(var_0.x, var_0.x))), u_input.a.x < abs(u_input.a.x), true));
                let var_2 = 63534u;
            }
            var var_1 = arg_1;
        }
        case -1i: {
        }
        default: {
            global1 = _wgslsmith_dot_vec4_i32(_wgslsmith_mult_vec4_i32(-vec4<i32>(1i, 1i, 1i, 1i) << (~abs(vec4<u32>(arg_1.a, 23406u, 0u, 58530u)) % vec4<u32>(32u)), vec4<i32>(2147483647i, _wgslsmith_add_i32(47487i, reverseBits(0i)), _wgslsmith_clamp_i32(-24256i, 1i, -45008i) | 0i, reverseBits(1i))), (firstTrailingBit(-vec4<i32>(-3192i, 45465i, 1i, -41275i)) << ((_wgslsmith_mod_vec4_u32(vec4<u32>(1u, u_input.b, u_input.b, 3529u), vec4<u32>(u_input.b, 1u, 0u, arg_1.a)) & vec4<u32>(85966u, u_input.a.x, arg_1.a, u_input.a.x)) % vec4<u32>(32u))) ^ vec4<i32>(19800i, firstTrailingBit(0i), ~(~(i32(-2147483648))), 24556i));
        }
    }
    loop {
        if (LOOP_COUNTERS[21u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
        if (false) {
            var var_0 = 1000f;
            let var_1 = select(vec2<bool>(all(vec2<bool>(true, true)), !any(vec4<bool>(false, false, false, true))), vec2<bool>(all(!select(vec4<bool>(false, false, true, true), vec4<bool>(true, false, true, false), vec4<bool>(true, false, true, true))), arg_0 > _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(1147f - arg_0), arg_0))), select(select(vec2<bool>(true, true), vec2<bool>(true, true), !select(true, true, false)), select(vec2<bool>(false, false), vec2<bool>(true, true), true), any(vec2<bool>(false, true)) || any(vec3<bool>(false, false, true))));
            let var_2 = func_9(global0[_wgslsmith_index_u32(_wgslsmith_add_u32(u_input.a.x, arg_1.a), 14u)], _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(-426f, arg_0)) * _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(1000f - 1055f), _wgslsmith_f_op_f32(-127f - 239f))))), Struct_1(~(~(u_input.b & 47428u))), abs(_wgslsmith_dot_vec2_i32(vec2<i32>(-1i) * -vec2<i32>(0i, 0i), _wgslsmith_sub_vec2_i32(vec2<i32>(1i, 1i), vec2<i32>(-1627i, 0i)))));
            continue;
        }
        for (var var_0 = 41723i; var_0 >= -1i; var_0 -= 1i) {
            if (LOOP_COUNTERS[22u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
            global0 = array<Struct_1, 14>();
            var var_1 = func_4(reverseBits(55409u)).x;
            let var_2 = _wgslsmith_f_op_f32(abs(-1000f));
            let var_3 = _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(exp2(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(min(vec2<f32>(arg_0, var_2), vec2<f32>(arg_0, -400f))) * _wgslsmith_div_vec2_f32(vec2<f32>(223f, var_2), vec2<f32>(arg_0, -1000f)))))) + vec2<f32>(_wgslsmith_f_op_f32(-arg_0), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-var_2)))))));
            global1 = ~_wgslsmith_div_i32(~0i, -countOneBits(~(-1948i)));
        }
        continue;
    }
    global1 = abs(2147483647i);
    global0 = array<Struct_1, 14>();
    if (any(vec3<bool>(any(vec4<bool>(any(vec2<bool>(true, true)), select(true, true, false), all(vec4<bool>(true, true, true, false)), true)), ~1u > func_9(arg_1, _wgslsmith_f_op_f32(-arg_0), func_8(vec2<i32>(54515i, 17817i), Struct_1(u_input.a.x), u_input.a), _wgslsmith_sub_i32(1i, -31187i)).a, true))) {
        global0 = array<Struct_1, 14>();
        for (; ; ) {
            if (LOOP_COUNTERS[23u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
            var var_0 = _wgslsmith_f_op_vec2_f32(exp2(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(ceil(vec2<f32>(878f, arg_0))) - _wgslsmith_f_op_vec2_f32(step(vec2<f32>(1508f, arg_0), vec2<f32>(arg_0, -1841f))))) - _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(arg_0, -246f))))));
        }
    }
    return Struct_1(_wgslsmith_dot_vec2_u32(countOneBits(countOneBits(u_input.a)), vec2<u32>(0u, arg_1.a)));
}

fn func_1(arg_0: Struct_1, arg_1: vec3<i32>) -> i32 {
    loop {
        if (LOOP_COUNTERS[24u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
        let var_0 = Struct_1(0u);
        var var_1 = true;
        global0 = array<Struct_1, 14>();
        continue;
    }
    loop {
        if (LOOP_COUNTERS[25u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
        loop {
            if (LOOP_COUNTERS[26u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
            let var_0 = func_2(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-678f) * _wgslsmith_div_f32(_wgslsmith_f_op_f32(floor(1749f)), _wgslsmith_f_op_f32(1661f - 1000f))), _wgslsmith_f_op_f32(min(1f, _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(ceil(-362f)))))), true || (abs(arg_1.x) >= min(arg_1.x, arg_1.x)))), Struct_1(u_input.b));
            var var_1 = func_8(arg_1.zz, Struct_1(_wgslsmith_dot_vec2_u32(vec2<u32>(select(u_input.b, 0u, true), u_input.b), reverseBits(vec2<u32>(u_input.b, 1u)))), abs(u_input.a));
        }
        let var_0 = vec2<bool>(!(!(!any(vec3<bool>(true, false, false)))), any(vec2<bool>(all(vec3<bool>(true, false, true)), false)));
        let var_1 = u_input.a;
    }
    let var_0 = ~_wgslsmith_mult_i32(-10058i, arg_1.x);
    global1 = _wgslsmith_mult_i32(~66131i, firstLeadingBit(func_6(global0[_wgslsmith_index_u32(func_2(_wgslsmith_f_op_f32(-1425f - -256f), func_9(Struct_1(arg_0.a), 153f, arg_0, -8354i)).a, 14u)], _wgslsmith_f_op_f32(ceil(111f)))));
    loop {
        if (LOOP_COUNTERS[27u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[27u] = LOOP_COUNTERS[27u] + 1u;
    }
    return var_0;
}

@compute
@workgroup_size(1)
fn main() {
    switch (-(~(~firstLeadingBit(~(-20248i))))) {
        case i32(-2147483648): {
            for (var var_0 = 2147483647i; ; var_0 = -1i) {
                if (LOOP_COUNTERS[28u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[28u] = LOOP_COUNTERS[28u] + 1u;
            }
            switch (~select(1i, _wgslsmith_div_i32(_wgslsmith_mod_i32(~1i, ~1i), i32(-2147483648)), false)) {
                default: {
                    global0 = array<Struct_1, 14>();
                }
            }
            switch (~func_1(global0[_wgslsmith_index_u32(17843u, 14u)], select(vec3<i32>(-67790i, -1i, -13524i), vec3<i32>(-40194i, 28271i, 55196i), all(vec2<bool>(false, true)))) & 16488i) {
                default: {
                    global0 = array<Struct_1, 14>();
                    var var_0 = global0[_wgslsmith_index_u32(11210u, 14u)];
                    let var_1 = ~vec3<i32>(func_6(func_7(vec3<bool>(false, false, false), vec4<u32>(4294967295u, var_0.a, var_0.a, u_input.a.x) | vec4<u32>(1u, var_0.a, 13174u, var_0.a)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -161f) + _wgslsmith_f_op_f32(-516f))), ~reverseBits(1i), ~(-1i));
                    var var_2 = func_8(var_1.xz, global0[_wgslsmith_index_u32(_wgslsmith_mod_u32(~u_input.a.x, _wgslsmith_sub_u32(~var_0.a | u_input.a.x, _wgslsmith_mod_u32(~var_0.a, 1105u))), 14u)], u_input.a);
                }
            }
            if (any(!select(vec2<bool>(true, true), vec2<bool>(true, true), vec2<bool>(true, true)))) {
                let var_0 = _wgslsmith_f_op_f32(-193f);
                var var_1 = (_wgslsmith_f_op_f32(floor(var_0)) == 1433f) || true;
            }
            global0 = array<Struct_1, 14>();
        }
        default: {
            let var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(446f))))));
            let var_1 = !(!select(select(select(vec4<bool>(false, true, true, false), vec4<bool>(false, true, false, true), vec4<bool>(true, false, true, true)), vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true)), vec4<bool>(true, func_3(-286f, u_input.a), true, var_0 == var_0), true));
            loop {
                if (LOOP_COUNTERS[29u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[29u] = LOOP_COUNTERS[29u] + 1u;
                global0 = array<Struct_1, 14>();
                continue;
            }
            global0 = array<Struct_1, 14>();
        }
    }
    var var_0 = vec3<bool>(all(select(vec4<bool>(true, select(true, false, true), true, true), vec4<bool>(true, true, true, true), !select(vec4<bool>(true, false, true, false), vec4<bool>(true, false, true, false), vec4<bool>(true, false, false, false)))), false, true);
    loop {
        if (LOOP_COUNTERS[30u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[30u] = LOOP_COUNTERS[30u] + 1u;
        let var_1 = ~0u ^ u_input.a.x;
        var var_2 = vec3<bool>(!var_0.x, all(var_0.zx), var_0.x);
        var var_3 = ~(-((firstTrailingBit(vec3<i32>(-44965i, -13409i, 1i)) & abs(vec3<i32>(-7272i, 37526i, 10770i))) ^ ~vec3<i32>(0i, -8979i, 2147483647i)));
        break;
    }
    let var_1 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(trunc(-1681f)), _wgslsmith_f_op_f32(floor(-263f)), _wgslsmith_f_op_f32(f32(-1f) * -570f), _wgslsmith_f_op_f32(sign(-519f)))))));
    var_0 = vec3<bool>(var_0.x, all(vec4<bool>(select(func_3(823f, vec2<u32>(94547u, 41376u)), !var_0.x, var_0.x), all(vec3<bool>(true, var_0.x, var_0.x)), any(select(vec3<bool>(var_0.x, false, var_0.x), vec3<bool>(var_0.x, var_0.x, var_0.x), vec3<bool>(var_0.x, var_0.x, true))), select(true, !var_0.x, all(vec3<bool>(false, true, false))))), !any(!(!vec4<bool>(false, var_0.x, var_0.x, false))));
    switch (_wgslsmith_add_i32(1i, -func_1(global0[_wgslsmith_index_u32(select(82283u, ~4294967295u, select(var_0.x, false, false)), 14u)], _wgslsmith_add_vec3_i32(vec3<i32>(13513i, 1i, 2147483647i) >> (vec3<u32>(u_input.b, u_input.b, 18964u) % vec3<u32>(32u)), _wgslsmith_clamp_vec3_i32(vec3<i32>(21086i, i32(-2147483648), 1i), vec3<i32>(-1i, -49915i, -1i), vec3<i32>(1i, 1i, -14758i)))))) {
        case 2997i: {
            for (; any(var_0.zy); ) {
                if (LOOP_COUNTERS[31u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[31u] = LOOP_COUNTERS[31u] + 1u;
                var_0 = !(!vec3<bool>(!all(vec3<bool>(false, true, var_0.x)), true, true));
            }
            global0 = array<Struct_1, 14>();
        }
        case 2147483647i: {
        }
        case -28166i: {
            if (var_0.x) {
            }
            var var_2 = Struct_1(u_input.b);
        }
        default: {
            switch (1i) {
                case i32(-2147483648): {
                    let var_2 = func_7(!select(vec3<bool>(true, true, true), select(!vec3<bool>(false, true, var_0.x), !vec3<bool>(false, var_0.x, var_0.x), !var_0.x), false), ~(~_wgslsmith_sub_vec4_u32(vec4<u32>(38323u, 4294967295u, u_input.a.x, u_input.a.x), countOneBits(vec4<u32>(58395u, u_input.a.x, 4294967295u, 4294967295u)))));
                }
                default: {
                    var_0 = !select(vec3<bool>(true, false, all(select(var_0.zz, vec2<bool>(var_0.x, false), var_0.xx))), vec3<bool>(any(var_0.xz), var_0.x, all(vec3<bool>(true, var_0.x, false))), select(select(vec3<bool>(var_0.x, var_0.x, var_0.x), !vec3<bool>(false, true, var_0.x), var_0.x), select(vec3<bool>(true, true, var_0.x), !vec3<bool>(var_0.x, false, var_0.x), var_0.x), false));
                    var var_2 = _wgslsmith_add_u32(func_9(Struct_1(8609u), var_1.x, Struct_1(1u), firstTrailingBit(-1i)).a, min(_wgslsmith_add_u32(u_input.a.x, _wgslsmith_clamp_u32(78u, u_input.b, 45087u)), 4294967295u) ^ u_input.b);
                    var var_3 = all(vec2<bool>(true, !select(false, true, true)));
                    var_0 = !(!select(vec3<bool>(true, true, true), select(vec3<bool>(false, false, var_0.x), !vec3<bool>(var_0.x, true, false), true), !(!vec3<bool>(var_0.x, false, var_0.x))));
                    var var_4 = Struct_1(u_input.b);
                }
            }
            for (var var_2 = 4568i; ; var_2 -= 1i) {
                if (LOOP_COUNTERS[32u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[32u] = LOOP_COUNTERS[32u] + 1u;
                return;
            }
            var var_2 = Struct_1(u_input.a.x);
            global0 = array<Struct_1, 14>();
        }
    }
    global1 = _wgslsmith_mult_i32(-27705i, ~min(22551i, ~(i32(-1i) * -3363i)));
    global0 = array<Struct_1, 14>();
    let var_2 = abs(min(vec2<i32>(1i, 1i) << (~(~u_input.a) % vec2<u32>(32u)), max(vec2<i32>(~0i, select(0i, 0i, var_0.x)), _wgslsmith_sub_vec2_i32(countOneBits(vec2<i32>(-1i, 70692i)), ~vec2<i32>(24284i, 24744i)))));
    let x = u_input.a;
    s_output = StorageBuffer(vec4<f32>(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(abs(var_1.x)))), _wgslsmith_f_op_f32(-var_1.x), var_1.x, 315f), _wgslsmith_div_i32(var_2.x, 0i), _wgslsmith_f_op_vec2_f32(-var_1.wz), abs(_wgslsmith_div_vec3_i32(vec3<i32>(-1i) * -vec3<i32>(2147483647i, i32(-2147483648), 2147483647i), vec3<i32>(-1i) * -vec3<i32>(var_2.x, var_2.x, var_2.x))), 38694u);
}

`;