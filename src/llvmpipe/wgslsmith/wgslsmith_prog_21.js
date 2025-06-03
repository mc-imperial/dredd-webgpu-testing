export const input = [44,38,225,59,56,228,247,50,210,76,180,168,76,245,60,11,39,172,108,64,228,18,240,37,112,254,56,208,54,137,210,74,57,111,145,217,161,158,8,210,220,194,112,3,162,53,229,59,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [44,38,225,59,56,228,247,50,210,76,180,168,76,245,60,11,39,172,108,64,228,18,240,37,112,254,56,208,54,137,210,74,57,111,145,217,161,158,8,210,220,194,112,3,162,53,229,59,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[44,38,225,59,56,228,247,50,210,76,180,168,76,245,60,11,39,172,108,64,228,18,240,37,112,254,56,208,54,137,210,74,57,111,145,217,161,158,8,210,220,194,112,3,162,53,229,59]}
// Seed: 13612043585765665386

struct Struct_1 {
    a: vec3<i32>,
    b: bool,
    c: i32,
    d: u32,
}

struct Struct_2 {
    a: f32,
    b: i32,
    c: u32,
    d: vec2<u32>,
}

struct Struct_3 {
    a: vec3<u32>,
}

struct Struct_4 {
    a: Struct_2,
    b: i32,
    c: bool,
    d: Struct_3,
    e: vec4<f32>,
}

struct Struct_5 {
    a: bool,
    b: u32,
    c: bool,
    d: vec2<f32>,
    e: Struct_1,
}

struct UniformBuffer {
    a: vec4<u32>,
    b: i32,
    c: vec4<u32>,
}

struct StorageBuffer {
    a: f32,
    b: vec3<u32>,
    c: vec2<f32>,
    d: vec3<i32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<u32, 6> = array<u32, 6>(0u, 44328u, 4294967295u, 7079u, 1564u, 85063u);

var<private> global1: Struct_5;

var<private> LOOP_COUNTERS: array<u32, 29>;

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn func_4(arg_0: bool, arg_1: vec3<f32>, arg_2: Struct_4) -> u32 {
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        let var_0 = i32(-1i) * -(_wgslsmith_clamp_i32(41504i, -48582i, -1i) >> (~_wgslsmith_dot_vec3_u32(vec3<u32>(global1.e.d, global1.e.d, 0u), arg_2.d.a) % 32u));
        continue;
    }
    var var_0 = arg_2.c;
    var var_1 = arg_0;
    var var_2 = global1.e.a;
    return 7154u;
}

fn func_6(arg_0: i32, arg_1: Struct_1) -> vec3<i32> {
    loop {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
    }
    if (!all(select(!select(vec2<bool>(arg_1.b, true), vec2<bool>(arg_1.b, arg_1.b), true), vec2<bool>(all(vec2<bool>(global1.c, true)), arg_1.b), any(select(vec4<bool>(global1.e.b, true, true, true), vec4<bool>(global1.a, false, arg_1.b, true), vec4<bool>(arg_1.b, global1.c, true, arg_1.b)))))) {
    }
    loop {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        let var_0 = global1.d.x;
        global1 = Struct_5(-797f != _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(global1.d.x - 2146f))), ~(~1u), arg_1.b, vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(global1.d.x - -406f)), _wgslsmith_f_op_f32(sign(global1.d.x))), Struct_1(arg_1.a, arg_1.b, _wgslsmith_sub_i32(_wgslsmith_dot_vec4_i32(_wgslsmith_div_vec4_i32(vec4<i32>(i32(-2147483648), 1i, 0i, u_input.b), vec4<i32>(-1i, i32(-2147483648), -1i, 28466i)), min(vec4<i32>(arg_1.a.x, u_input.b, 9090i, 0i), vec4<i32>(19870i, 1i, u_input.b, arg_0))), -(~(-27935i))), countOneBits(~countOneBits(43390u))));
        break;
    }
    return global1.e.a;
}

fn func_5(arg_0: vec3<i32>, arg_1: Struct_1, arg_2: Struct_4) -> u32 {
    switch (_wgslsmith_dot_vec3_i32(-func_6(i32(-1i) * -arg_0.x, global1.e), -vec3<i32>(arg_2.a.b, _wgslsmith_mod_i32(i32(-1i) * -31405i, ~u_input.b), 26469i))) {
        case 18959i: {
        }
        case i32(-2147483648): {
            var var_0 = Struct_5(!(!all(select(vec2<bool>(false, true), vec2<bool>(arg_1.b, arg_2.c), vec2<bool>(false, true)))), arg_2.a.d.x, !any(!vec4<bool>(arg_1.b, global1.e.b, true, arg_2.c)), _wgslsmith_f_op_vec2_f32(round(arg_2.e.xy)), Struct_1(firstLeadingBit(select(min(global1.e.a, arg_0), abs(global1.e.a), !vec3<bool>(arg_1.b, arg_2.c, false))), all(!vec2<bool>(arg_2.c, arg_2.c)), u_input.b, _wgslsmith_dot_vec4_u32(~(u_input.a ^ vec4<u32>(global1.e.d, global0[_wgslsmith_index_u32(1u, 6u)], 107011u, 60862u)), u_input.c)));
            let var_1 = 4284u;
            var var_2 = _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(global1.d.x, arg_2.e.x)) * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(var_0.d.x, var_0.d.x)))) - _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(f32(-1f) * -2401f))))));
            if (!any(vec2<bool>(true, arg_1.b))) {
                var_0 = Struct_5(all(vec4<bool>(any(vec2<bool>(arg_1.b, var_0.c)) != (31589u <= var_1), var_0.c, all(vec3<bool>(false, true, false)), true)), global1.e.d, false, _wgslsmith_f_op_vec2_f32(-vec2<f32>(var_0.d.x, -416f)), global1.e);
                let var_3 = select(!vec2<bool>(global1.a, false), !(!vec2<bool>(any(vec3<bool>(arg_2.c, true, false)), all(vec2<bool>(arg_2.c, var_0.c)))), vec2<bool>(arg_1.b, !arg_2.c));
                var_2 = 943f;
                global1 = Struct_5(select(arg_2.c, false, true), ~firstTrailingBit(~_wgslsmith_sub_u32(1u, global1.b)), var_0.c, vec2<f32>(674f, arg_2.a.a), Struct_1(vec3<i32>(9051i, ~15736i, 19004i), all(!select(var_3, vec2<bool>(false, arg_2.c), var_3)), -u_input.b, ~(func_4(var_3.x, arg_2.e.wwx, arg_2) | 1u)));
            }
            let var_3 = Struct_3(vec3<u32>(firstLeadingBit(abs(18915u)), global0[_wgslsmith_index_u32(~arg_2.d.a.x, 6u)], ~var_1));
        }
        case -33735i: {
            loop {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
                let var_0 = Struct_3(vec3<u32>(1u >> ((min(arg_2.d.a.x, 0u) ^ min(1u, 0u)) % 32u), abs(16857u), ~global1.e.d));
                continue;
            }
            if (true) {
                let var_0 = reverseBits(firstTrailingBit(global1.e.a));
                global1 = Struct_5(false, _wgslsmith_dot_vec3_u32(min(reverseBits(max(vec3<u32>(global1.e.d, 4294967295u, 1u), vec3<u32>(global1.b, arg_1.d, 0u))), u_input.a.xzz), ~(~countOneBits(vec3<u32>(6216u, 4281u, 103649u)))), !arg_1.b, _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(abs(arg_2.e.zx)) * _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(arg_2.e.x, global1.d.x)) + _wgslsmith_f_op_vec2_f32(round(vec2<f32>(1238f, arg_2.a.a)))))), Struct_1(select(vec3<i32>(1i, _wgslsmith_add_i32(var_0.x, 2147483647i), min(0i, 1i)), _wgslsmith_sub_vec3_i32(vec3<i32>(global1.e.c, -16181i, arg_0.x), vec3<i32>(-10626i, 2147483647i, var_0.x)) | -vec3<i32>(arg_1.a.x, arg_1.c, -40350i), global1.e.b), arg_1.b, -1i, min(1u, u_input.c.x)));
                global0 = array<u32, 6>();
            }
            global0 = array<u32, 6>();
            let var_0 = arg_2.a;
        }
        case -1i: {
            for (var var_0 = 17391i; false; var_0 += 1i) {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
            }
        }
        default: {
            var var_0 = abs(_wgslsmith_sub_vec3_u32(max(max(arg_2.d.a, vec3<u32>(global0[_wgslsmith_index_u32(1u, 6u)], arg_2.a.d.x, global1.b)), _wgslsmith_clamp_vec3_u32(vec3<u32>(21887u, 4294967295u, 10904u), vec3<u32>(1u, global1.e.d, 8563u), vec3<u32>(15838u, u_input.a.x, arg_1.d))), firstTrailingBit(arg_2.d.a)) >> (firstTrailingBit(_wgslsmith_div_vec3_u32(~u_input.c.wwx, vec3<u32>(62320u, u_input.c.x, u_input.c.x))) % vec3<u32>(32u)));
        }
    }
    let var_0 = select(select(select(!select(vec2<bool>(true, arg_2.c), vec2<bool>(true, true), true), !(!vec2<bool>(global1.c, false)), !vec2<bool>(arg_2.c, arg_2.c)), !vec2<bool>(arg_2.c, any(vec4<bool>(global1.c, true, false, true))), true), vec2<bool>(all(select(select(vec3<bool>(arg_1.b, arg_1.b, false), vec3<bool>(arg_1.b, false, false), vec3<bool>(true, false, arg_1.b)), !vec3<bool>(false, arg_2.c, arg_2.c), true)), true), (arg_1.d & 4294967295u) == ~3081u);
    let var_1 = arg_2;
    for (; ; ) {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        var var_2 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(round(vec4<f32>(global1.d.x, 491f, 1644f, 383f)))))));
        break;
    }
    var var_2 = var_1.a;
    return global0[_wgslsmith_index_u32(arg_1.d >> (firstLeadingBit(~(~74935u)) % 32u), 6u)];
}

fn func_3(arg_0: vec2<i32>, arg_1: vec3<u32>) -> Struct_2 {
    global1 = Struct_5(true, ~4294967295u, all(vec3<bool>(global1.c, false, true)) | select(false, false, all(select(vec2<bool>(false, global1.e.b), vec2<bool>(global1.e.b, global1.c), false))), _wgslsmith_f_op_vec2_f32(sign(global1.d)), global1.e);
    let var_0 = true;
    var var_1 = _wgslsmith_f_op_f32(f32(-1f) * -628f);
    loop {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        let var_2 = select(~(~12629u), ~_wgslsmith_clamp_u32(func_4(any(vec3<bool>(var_0, true, false)), _wgslsmith_f_op_vec3_f32(round(vec3<f32>(global1.d.x, -1199f, global1.d.x))), Struct_4(Struct_2(700f, i32(-2147483648), u_input.c.x, vec2<u32>(28854u, 1u)), u_input.b, false, Struct_3(vec3<u32>(4294967295u, 6882u, global0[_wgslsmith_index_u32(u_input.c.x, 6u)])), vec4<f32>(global1.d.x, 1113f, 828f, global1.d.x))), global0[_wgslsmith_index_u32(func_5(global1.e.a, global1.e, Struct_4(Struct_2(global1.d.x, arg_0.x, global0[_wgslsmith_index_u32(4294967295u, 6u)], vec2<u32>(global1.b, u_input.a.x)), -39607i, global1.e.b, Struct_3(vec3<u32>(arg_1.x, 1u, u_input.a.x)), vec4<f32>(788f, global1.d.x, 1974f, global1.d.x))) ^ firstTrailingBit(4294967295u), 6u)], 1u), global1.e.b);
        var var_3 = u_input.b;
        switch (-50057i) {
            case -20516i: {
                break;
            }
            case -1i: {
                var var_4 = ~(-vec2<i32>(firstLeadingBit(1i), -43912i));
                var var_5 = ~u_input.c.xzx;
                break;
            }
            default: {
                var var_4 = global1.b;
                continue;
            }
        }
        continue;
    }
    for (var var_2 = 0i; any(!select(select(select(vec2<bool>(false, global1.e.b), vec2<bool>(var_0, var_0), false), !vec2<bool>(global1.c, false), var_0), select(vec2<bool>(var_0, false), select(vec2<bool>(var_0, global1.a), vec2<bool>(true, false), true), select(vec2<bool>(var_0, false), vec2<bool>(true, global1.e.b), true)), !(!var_0))); var_2 += 1i) {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(global1.d.x)));
        if (true) {
            var var_3 = false;
            let var_4 = select(var_0, var_0, all(vec2<bool>(var_0, var_0))) | select(global1.e.b, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(global1.d.x * global1.d.x)) <= -1946f, true);
            var_1 = global1.d.x;
            continue;
        }
        global0 = array<u32, 6>();
        continue;
    }
    return Struct_2(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(global1.d.x * 304f) * -1118f), 1748f)), max(1i, u_input.b), ~_wgslsmith_mult_u32(1u, u_input.a.x), ~firstTrailingBit(u_input.a.wz));
}

fn func_7(arg_0: Struct_2, arg_1: f32) -> Struct_2 {
    var var_0 = !global1.a;
    var_0 = true;
    var var_1 = func_3(vec2<i32>(2147483647i, 2147483647i), vec3<u32>(~4294967295u, abs(~u_input.c.x | u_input.a.x), arg_0.c));
    var var_2 = _wgslsmith_f_op_vec4_f32(-vec4<f32>(828f, arg_1, _wgslsmith_f_op_f32(-var_1.a), var_1.a));
    global1 = Struct_5(((true || any(vec4<bool>(global1.a, true, false, true))) == all(!vec4<bool>(global1.c, true, false, false))) | false, 25399u, any(select(!vec3<bool>(global1.c, global1.a, global1.a), vec3<bool>(false, global1.e.b, global1.a), vec3<bool>(global1.c, false, true))) | global1.c, _wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(-global1.d))), Struct_1(~func_6(-arg_0.b, Struct_1(vec3<i32>(2147483647i, i32(-2147483648), global1.e.c), true, -1900i, 1u)), !any(select(vec4<bool>(global1.e.b, global1.c, global1.c, global1.a), vec4<bool>(true, false, global1.a, true), vec4<bool>(true, global1.a, false, global1.a))), var_1.b, ~(~_wgslsmith_add_u32(global0[_wgslsmith_index_u32(global1.e.d, 6u)], global1.b))));
    return arg_0;
}

fn func_8(arg_0: u32, arg_1: bool, arg_2: Struct_2, arg_3: Struct_5) -> Struct_1 {
    let var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1032f));
    switch (arg_3.e.a.x) {
        case -25768i: {
            global1 = Struct_5(all(vec3<bool>(!arg_1, any(select(vec3<bool>(true, false, true), vec3<bool>(arg_3.a, false, false), vec3<bool>(arg_3.a, arg_1, false))), arg_1)), func_3(vec2<i32>(countOneBits(global1.e.c) ^ firstLeadingBit(global1.e.a.x), _wgslsmith_div_i32(2147483647i, _wgslsmith_sub_i32(-13985i, arg_3.e.c))), vec3<u32>(_wgslsmith_sub_u32(~global1.b, _wgslsmith_div_u32(global1.b, global0[_wgslsmith_index_u32(11661u, 6u)])), arg_2.d.x, arg_0)).c, true, _wgslsmith_f_op_vec2_f32(exp2(_wgslsmith_f_op_vec2_f32(arg_3.d + _wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(vec2<f32>(-1050f, arg_2.a) * global1.d), global1.d))))), arg_3.e);
            var var_1 = Struct_1(arg_3.e.a, true, min(arg_3.e.c, arg_3.e.c), ~42038u);
            let var_2 = func_7(arg_2, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_2.a + 1796f) - var_0)) * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_0) + _wgslsmith_f_op_f32(step(arg_2.a, global1.d.x)))));
            let var_3 = Struct_2(759f, -14521i, _wgslsmith_dot_vec3_u32(u_input.a.yyz, select(~_wgslsmith_clamp_vec3_u32(vec3<u32>(4294967295u, 4294967295u, arg_3.e.d), vec3<u32>(var_1.d, 4294967295u, global0[_wgslsmith_index_u32(40729u, 6u)]), u_input.a.xyx), _wgslsmith_mult_vec3_u32(~u_input.a.wzz, vec3<u32>(global1.b, global0[_wgslsmith_index_u32(49582u, 6u)], 1u)), any(vec3<bool>(arg_1, var_1.b, false)))), select(var_2.d, ~_wgslsmith_mult_vec2_u32(func_3(arg_3.e.a.xx, vec3<u32>(u_input.a.x, 25253u, 0u)).d, u_input.c.zy), vec2<bool>(false, arg_1 & any(vec2<bool>(false, true)))));
        }
        default: {
            global1 = arg_3;
            switch (func_3(~global1.e.a.yy, select(abs(~(u_input.c.zwz | u_input.a.xxz)), ~u_input.c.xzx, false)).b) {
                default: {
                    var var_1 = !(!(!vec3<bool>(arg_3.e.b, arg_1 || false, arg_2.c == global0[_wgslsmith_index_u32(4294967295u, 6u)])));
                    var var_2 = vec4<bool>(arg_3.c, global1.a, var_1.x, var_1.x == !(!(!var_1.x)));
                }
            }
            global0 = array<u32, 6>();
            let var_1 = Struct_5((arg_2.a > _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(f32(-1f) * -234f), _wgslsmith_f_op_f32(exp2(arg_3.d.x))))) != false, ~_wgslsmith_mod_u32(_wgslsmith_add_u32(max(13370u, global1.e.d), ~102929u), abs(func_4(true, vec3<f32>(-728f, -357f, 391f), Struct_4(Struct_2(-753f, i32(-2147483648), u_input.a.x, vec2<u32>(arg_2.c, arg_3.e.d)), 28648i, false, Struct_3(u_input.c.zxz), vec4<f32>(-926f, var_0, global1.d.x, global1.d.x))))), true, _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(global1.d * global1.d)), global1.e);
        }
    }
    global0 = array<u32, 6>();
    global1 = Struct_5(true, global1.e.d, !(!(!global1.e.b)), _wgslsmith_f_op_vec2_f32(-arg_3.d), global1.e);
    switch (func_6(0i, Struct_1(arg_3.e.a, all(!select(vec3<bool>(false, global1.a, arg_1), vec3<bool>(global1.e.b, false, false), vec3<bool>(global1.c, global1.c, global1.c))), 22137i << (((u_input.c.x ^ 4553u) & 26226u) % 32u), global0[_wgslsmith_index_u32(~(1u >> (func_7(Struct_2(var_0, arg_2.b, global0[_wgslsmith_index_u32(62957u, 6u)], vec2<u32>(5247u, arg_3.b)), arg_2.a).d.x % 32u)), 6u)])).x) {
        case -9030i: {
        }
        case -1i: {
            loop {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
            }
            if (all(select(!select(vec4<bool>(arg_1, true, true, true), vec4<bool>(arg_3.c, arg_1, arg_1, arg_1), !vec4<bool>(false, false, false, arg_1)), !select(vec4<bool>(arg_3.a, false, true, false), vec4<bool>(true, global1.e.b, false, false), select(vec4<bool>(true, true, arg_3.e.b, false), vec4<bool>(arg_1, arg_1, true, global1.a), vec4<bool>(global1.c, global1.c, true, false))), select(!(!vec4<bool>(true, arg_1, global1.c, global1.e.b)), select(!vec4<bool>(global1.c, true, arg_3.a, true), !vec4<bool>(true, true, true, arg_1), !global1.a), vec4<bool>(global1.d.x >= var_0, true || global1.c, arg_1, true))))) {
                var var_1 = _wgslsmith_dot_vec2_u32(min(_wgslsmith_sub_vec2_u32(_wgslsmith_add_vec2_u32(select(vec2<u32>(51891u, global0[_wgslsmith_index_u32(1u, 6u)]), vec2<u32>(20681u, 4294967295u), vec2<bool>(true, global1.e.b)), u_input.a.wz), vec2<u32>(73585u, _wgslsmith_div_u32(1u, global1.b))), vec2<u32>(77475u, ~abs(arg_0))), u_input.a.yy);
                let var_2 = _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(var_0, arg_3.d.x, -983f, -704f))) - _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(select(vec4<f32>(var_0, 1000f, var_0, -788f), vec4<f32>(262f, var_0, -999f, -716f), arg_1)))))), _wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(vec4<f32>(arg_2.a, arg_2.a, -369f, var_0), vec4<f32>(arg_3.d.x, global1.d.x, 728f, 1944f))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(-986f, arg_3.d.x, 1000f, arg_2.a)))) * _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(max(1419f, arg_2.a)), arg_2.a, -786f, _wgslsmith_f_op_f32(-global1.d.x)))));
                var var_3 = arg_2;
                var_1 = _wgslsmith_add_u32(arg_0, 4294967295u);
                let var_4 = !global1.a || (false & arg_3.e.b);
            }
            global1 = Struct_5(arg_1 && all(!(!vec3<bool>(arg_1, false, false))), func_3(vec2<i32>(i32(-2147483648) << (global1.b % 32u), 0i), vec3<u32>(1u, arg_2.d.x, func_3(global1.e.a.yy, u_input.a.xwx).c)).d.x & 59100u, (all(vec3<bool>(arg_3.e.b, arg_3.c, global1.c)) && arg_1) != all(vec2<bool>(0u > u_input.c.x, all(vec3<bool>(false, arg_1, true)))), _wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(trunc(global1.d)), _wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-global1.d)), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(arg_3.d.x, var_0)) + _wgslsmith_f_op_vec2_f32(round(global1.d))), true)), !global1.a)), global1.e);
        }
        case 1i: {
            if (!(!any(vec3<bool>(all(vec2<bool>(arg_1, false)), true, false)))) {
                let var_1 = !select(!select(vec4<bool>(arg_1, global1.c, global1.c, global1.a), vec4<bool>(arg_1, false, global1.a, true), all(vec3<bool>(global1.e.b, false, global1.a))), select(vec4<bool>(global1.e.b, arg_1, all(vec4<bool>(global1.c, true, true, arg_3.e.b)), arg_1), vec4<bool>(any(vec4<bool>(false, global1.c, arg_3.e.b, global1.e.b)), false & arg_3.e.b, !arg_1, all(vec3<bool>(false, arg_3.e.b, arg_1))), !vec4<bool>(true, true, true, arg_1)), vec4<bool>(!arg_3.c, true, !global1.a != all(vec4<bool>(arg_3.a, false, false, true)), false));
            }
            let var_1 = _wgslsmith_add_vec4_u32(vec4<u32>(8551u, arg_0, arg_3.e.d, global0[_wgslsmith_index_u32(~arg_2.c, 6u)]), vec4<u32>(~(~28763u), 36751u, global1.b, 43904u) ^ select(u_input.a, vec4<u32>(func_5(vec3<i32>(1i, 1i, arg_3.e.a.x), Struct_1(vec3<i32>(arg_3.e.c, global1.e.c, 3529i), true, -58205i, u_input.a.x), Struct_4(arg_2, global1.e.a.x, arg_1, Struct_3(u_input.c.yxz), vec4<f32>(global1.d.x, -2565f, 617f, global1.d.x))), _wgslsmith_mult_u32(0u, arg_2.d.x), func_7(arg_2, -1723f).c, arg_3.b), false));
        }
        default: {
            let var_1 = ~(~((~u_input.a.xx ^ ~vec2<u32>(u_input.c.x, 1u)) & u_input.c.ww));
            var var_2 = Struct_3(_wgslsmith_mod_vec3_u32(u_input.a.wzy, abs(~(~vec3<u32>(arg_2.d.x, arg_3.e.d, 81860u)))));
            var var_3 = arg_3;
        }
    }
    return global1.e;
}

fn func_9(arg_0: Struct_1, arg_1: vec4<bool>, arg_2: vec4<u32>, arg_3: u32) -> Struct_3 {
    let var_0 = -_wgslsmith_div_i32(i32(-2147483648), u_input.b);
    loop {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        let var_1 = Struct_3(u_input.a.zzx);
        var var_2 = func_3(vec2<i32>(reverseBits(-12325i) << (u_input.a.x % 32u), func_6(var_0, func_8(1u, select(global1.a, arg_0.b, false), Struct_2(554f, -4347i, arg_0.d, vec2<u32>(arg_0.d, 6587u)), Struct_5(global1.e.b, u_input.a.x, true, global1.d, Struct_1(vec3<i32>(1i, u_input.b, u_input.b), arg_1.x, -17662i, 100563u)))).x), vec3<u32>(~var_1.a.x, arg_3, ~(~func_8(17942u, global1.a, Struct_2(global1.d.x, var_0, 1u, vec2<u32>(arg_3, 4294967295u)), Struct_5(arg_0.b, 7564u, false, global1.d, arg_0)).d)));
        continue;
    }
    loop {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        global1 = Struct_5(arg_0.b, 11924u >> (_wgslsmith_mod_u32(arg_2.x, ~0u) % 32u), all(arg_1), _wgslsmith_f_op_vec2_f32(sign(vec2<f32>(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(max(global1.d.x, 1853f)), func_3(global1.e.a.zy, u_input.a.zxy).a)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global1.d.x) * _wgslsmith_f_op_f32(f32(-1f) * -2097f))))), global1.e);
        for (var var_1 = 0i; !all(!arg_1.zx); ) {
            if (LOOP_COUNTERS[11u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
            let var_2 = vec3<f32>(-789f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-global1.d.x)))), _wgslsmith_f_op_f32(649f - _wgslsmith_f_op_f32(func_3(_wgslsmith_add_vec2_i32(vec2<i32>(-15623i, var_0), vec2<i32>(arg_0.c, 1i)), abs(arg_2.yxx)).a + global1.d.x)));
        }
        let var_1 = ~func_5(vec3<i32>(_wgslsmith_dot_vec2_i32(_wgslsmith_add_vec2_i32(global1.e.a.yy, arg_0.a.zz), _wgslsmith_div_vec2_i32(arg_0.a.yx, global1.e.a.yx)), 2147483647i, reverseBits(0i)), Struct_1(select(_wgslsmith_mult_vec3_i32(vec3<i32>(arg_0.c, 16760i, 2147483647i), vec3<i32>(arg_0.c, arg_0.a.x, 2147483647i)), vec3<i32>(1i, u_input.b, u_input.b), arg_1.zwy), true, -_wgslsmith_sub_i32(i32(-2147483648), global1.e.c), arg_3), Struct_4(Struct_2(132f, 0i, _wgslsmith_mod_u32(0u, u_input.c.x), vec2<u32>(arg_3, 1u)), -_wgslsmith_dot_vec2_i32(global1.e.a.xy, vec2<i32>(0i, i32(-2147483648))), false, Struct_3(~u_input.a.xxw), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(min(vec4<f32>(global1.d.x, global1.d.x, global1.d.x, -150f), vec4<f32>(global1.d.x, -451f, 1126f, 1775f))) - _wgslsmith_f_op_vec4_f32(vec4<f32>(global1.d.x, 899f, global1.d.x, 1367f) - vec4<f32>(global1.d.x, global1.d.x, 233f, global1.d.x)))));
    }
    loop {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
    }
    for (var var_1 = -24297i; var_1 <= -1i; var_1 -= 1i) {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        loop {
            if (LOOP_COUNTERS[14u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
            var var_2 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(global1.d.x + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-2024f * _wgslsmith_f_op_f32(f32(-1f) * -1001f)))) + -799f);
        }
        let var_2 = _wgslsmith_f_op_f32(global1.d.x * -280f);
        for (var var_3 = 0i; arg_1.x; var_3 = firstLeadingBit(firstTrailingBit(var_0 ^ -30691i))) {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            var var_4 = func_7(func_3(_wgslsmith_add_vec2_i32(arg_0.a.yx, vec2<i32>(1i, global1.e.a.x)), u_input.c.zzx), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(-1000f))));
            let var_5 = _wgslsmith_div_u32(global0[_wgslsmith_index_u32(~arg_3, 6u)], arg_2.x);
        }
        loop {
            if (LOOP_COUNTERS[16u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
            break;
        }
        let var_3 = u_input.c;
    }
    return Struct_3(countOneBits(abs(firstLeadingBit(vec3<u32>(0u, arg_3, arg_0.d)))));
}

fn func_2() -> bool {
    if (!(false || any(!(!vec3<bool>(true, true, global1.a))))) {
        global1 = Struct_5(false, ~77335u, false, _wgslsmith_f_op_vec2_f32(-vec2<f32>(global1.d.x, -1602f)), global1.e);
        let var_0 = func_9(func_8(global0[_wgslsmith_index_u32(global1.b, 6u)], false, func_7(func_3(global1.e.a.yz, max(vec3<u32>(u_input.c.x, 0u, u_input.c.x), vec3<u32>(global1.b, 0u, u_input.c.x))), 682f), Struct_5(global1.a, abs(global0[_wgslsmith_index_u32(global1.e.d, 6u)] | u_input.a.x), global1.a, _wgslsmith_f_op_vec2_f32(select(vec2<f32>(1f, 1f), _wgslsmith_f_op_vec2_f32(global1.d * global1.d), true)), global1.e)), !(!vec4<bool>(true, -8106i < global1.e.a.x, true, true)), u_input.a, ~u_input.c.x);
        loop {
            if (LOOP_COUNTERS[17u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
            global0 = array<u32, 6>();
            global1 = Struct_5(func_7(Struct_2(321f, global1.e.c, u_input.a.x, ~vec2<u32>(1u, global0[_wgslsmith_index_u32(global1.e.d, 6u)])), global1.d.x).c == _wgslsmith_mod_u32(~global0[_wgslsmith_index_u32(_wgslsmith_sub_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global1.b, 6u)], 6u)], 54487u), 6u)], 80951u), global1.e.d & _wgslsmith_div_u32(~1u, u_input.a.x), false, _wgslsmith_f_op_vec2_f32(-_wgslsmith_div_vec2_f32(global1.d, _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-global1.d) + global1.d))), func_8(_wgslsmith_clamp_u32(0u, _wgslsmith_clamp_u32(firstLeadingBit(9357u), reverseBits(38200u), u_input.c.x), 1u), 9650i <= _wgslsmith_add_i32(func_7(Struct_2(836f, i32(-2147483648), 49253u, vec2<u32>(global1.e.d, u_input.a.x)), global1.d.x).b, 1i), Struct_2(533f, global1.e.c, reverseBits(global0[_wgslsmith_index_u32(_wgslsmith_div_u32(u_input.a.x, var_0.a.x), 6u)]), vec2<u32>(31605u ^ global0[_wgslsmith_index_u32(4294967295u, 6u)], 0u | var_0.a.x)), Struct_5(any(vec3<bool>(global1.e.b, false, global1.e.b)) || true, var_0.a.x, all(select(vec2<bool>(global1.a, global1.c), vec2<bool>(global1.e.b, false), true)), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(612f, -2221f)))), global1.e)));
            let var_1 = func_8(func_7(func_7(Struct_2(global1.d.x, -21411i, global0[_wgslsmith_index_u32(u_input.c.x, 6u)], var_0.a.zx), 1167f), -1611f).d.x & global0[_wgslsmith_index_u32(u_input.c.x, 6u)], global1.c, func_7(Struct_2(global1.d.x, 2494i, 9067u, vec2<u32>(42015u, global1.b) >> (_wgslsmith_mod_vec2_u32(var_0.a.zx, var_0.a.xx) % vec2<u32>(32u))), global1.d.x), Struct_5(false, global1.b, select(global1.c, all(select(vec4<bool>(true, false, global1.c, global1.a), vec4<bool>(false, global1.c, true, false), vec4<bool>(global1.e.b, true, global1.e.b, global1.a))), global1.d.x > _wgslsmith_f_op_f32(global1.d.x + -1417f)), global1.d, Struct_1(countOneBits(countOneBits(vec3<i32>(global1.e.c, global1.e.c, 2147483647i))), global1.a, -abs(u_input.b), _wgslsmith_mod_u32(global0[_wgslsmith_index_u32(~17790u, 6u)], firstTrailingBit(var_0.a.x)))));
            let var_2 = Struct_2(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(458f * global1.d.x) - _wgslsmith_f_op_f32(exp2(global1.d.x)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -302f)) + _wgslsmith_f_op_f32(f32(-1f) * -732f)), func_8(~u_input.c.x, func_7(Struct_2(1109f, u_input.b, 29925u, vec2<u32>(58494u, var_0.a.x)), global1.d.x).b != (i32(-1i) * -14332i), Struct_2(-1000f, func_3(vec2<i32>(u_input.b, global1.e.a.x), u_input.a.yzz).b, global1.b & 16541u, _wgslsmith_add_vec2_u32(var_0.a.yy, vec2<u32>(4294967295u, var_0.a.x))), Struct_5(var_1.b & global1.c, ~1u, true, global1.d, global1.e)).b)), 0i, _wgslsmith_mult_u32(1u, ~_wgslsmith_sub_u32(var_1.d, select(global0[_wgslsmith_index_u32(var_0.a.x, 6u)], global1.e.d, true))), var_0.a.xx);
            let var_3 = func_8(33145u, !any(!select(vec3<bool>(true, true, false), vec3<bool>(false, true, false), false)), Struct_2(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_2.a)))), -1i, 1u, vec2<u32>(1u, _wgslsmith_clamp_u32(1951u, ~var_1.d, 1037u))), Struct_5(global1.d.x != -542f, var_0.a.x, false, _wgslsmith_f_op_vec2_f32(-vec2<f32>(-1000f, _wgslsmith_f_op_f32(-global1.d.x))), Struct_1(-(~var_1.a), true, var_2.b, ~func_9(global1.e, vec4<bool>(true, true, true, false), u_input.c, var_0.a.x).a.x)));
        }
        global0 = array<u32, 6>();
        global1 = Struct_5(any(vec4<bool>(false && (global1.e.a.x > 2147483647i), (global1.a || true) || true, !(global1.d.x < -185f), any(!vec3<bool>(global1.c, true, global1.e.b)))), reverseBits(func_3(-(vec2<i32>(0i, u_input.b) & vec2<i32>(2147483647i, -36995i)), ~(u_input.c.yzw | var_0.a)).d.x), false, _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(trunc(_wgslsmith_f_op_vec2_f32(-global1.d))))), func_8(firstTrailingBit(_wgslsmith_mod_u32(~5053u, 1u)), !all(!vec4<bool>(global1.a, true, true, true)), Struct_2(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global1.d.x) - global1.d.x), _wgslsmith_clamp_i32(func_7(Struct_2(246f, 1i, u_input.c.x, u_input.a.zy), 290f).b, u_input.b, _wgslsmith_dot_vec2_i32(global1.e.a.zx, vec2<i32>(global1.e.a.x, global1.e.a.x))), 0u, _wgslsmith_add_vec2_u32(u_input.c.wz, var_0.a.xz)), Struct_5(any(select(vec2<bool>(global1.a, false), vec2<bool>(global1.a, global1.e.b), true)), global0[_wgslsmith_index_u32(4294967295u, 6u)], false, vec2<f32>(_wgslsmith_div_f32(global1.d.x, -576f), global1.d.x), func_8(~1531u, false, func_3(vec2<i32>(global1.e.a.x, 19873i), vec3<u32>(u_input.c.x, var_0.a.x, 4126u)), Struct_5(false, 31119u, false, global1.d, global1.e)))));
    }
    for (var var_0 = 5412i; var_0 >= 74988i; var_0 += 1i) {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        global0 = array<u32, 6>();
        for (var var_1 = 17386i; select(false, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(global1.d.x))) != _wgslsmith_f_op_f32(step(_wgslsmith_div_f32(global1.d.x, -1115f), global1.d.x)), global1.c); var_1 -= 1i) {
            if (LOOP_COUNTERS[19u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
            var var_2 = _wgslsmith_add_vec2_i32(_wgslsmith_clamp_vec2_i32(_wgslsmith_div_vec2_i32(select(countOneBits(vec2<i32>(global1.e.a.x, -1i)), firstTrailingBit(global1.e.a.yx), true), firstTrailingBit(vec2<i32>(global1.e.a.x, u_input.b))), _wgslsmith_div_vec2_i32(global1.e.a.yy, select(-vec2<i32>(-37422i, u_input.b), abs(global1.e.a.zy), select(vec2<bool>(true, false), vec2<bool>(global1.c, true), global1.c))), vec2<i32>(firstLeadingBit(global1.e.a.x), 33034i)), vec2<i32>(-18669i, global1.e.a.x));
        }
        switch (abs(-6856i & u_input.b)) {
            case -10221i: {
                var var_1 = min(1u, func_5(vec3<i32>(global1.e.a.x, max(0i, 66348i), -global1.e.c), Struct_1(global1.e.a, global1.c, global1.e.a.x, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(1640u, 6u)], 6u)] ^ 1u), Struct_4(func_3(vec2<i32>(23441i, 0i), u_input.a.xzy), -global1.e.a.x, global1.c, Struct_3(u_input.a.wxy), vec4<f32>(117f, global1.d.x, -1000f, global1.d.x)))) & 0u;
                var var_2 = !vec4<bool>(true, all(vec3<bool>(true, true, true)), all(vec4<bool>(true, false, false, global1.a)) == (global1.a | global1.e.b), true);
                continue;
            }
            case -25412i: {
                let var_1 = vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-622f - 983f)), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-global1.d.x))), 1475f);
                break;
            }
            default: {
                global0 = array<u32, 6>();
                let var_1 = Struct_4(Struct_2(_wgslsmith_f_op_f32(f32(-1f) * -1036f), global1.e.a.x, global1.e.d, max(min(u_input.c.wz, select(vec2<u32>(global0[_wgslsmith_index_u32(4294967295u, 6u)], global0[_wgslsmith_index_u32(4294967295u, 6u)]), vec2<u32>(1u, 34211u), false)), vec2<u32>(~global1.e.d, 58712u))), global1.e.a.x, false, func_9(Struct_1(global1.e.a, func_8(func_3(vec2<i32>(40600i, 0i), u_input.c.yyw).c, any(vec4<bool>(true, global1.e.b, true, false)), Struct_2(global1.d.x, global1.e.a.x, global0[_wgslsmith_index_u32(45786u, 6u)], u_input.c.yw), Struct_5(true, global1.e.d, global1.a, vec2<f32>(global1.d.x, global1.d.x), global1.e)).b, func_3(select(global1.e.a.yz, global1.e.a.xy, vec2<bool>(false, true)), max(vec3<u32>(global1.e.d, u_input.a.x, global0[_wgslsmith_index_u32(86588u, 6u)]), vec3<u32>(global0[_wgslsmith_index_u32(6168u, 6u)], 4294967295u, 4294967295u))).b, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(max(u_input.a.x, global1.e.d), 6u)] & global0[_wgslsmith_index_u32(func_4(global1.a, vec3<f32>(-221f, -982f, global1.d.x), Struct_4(Struct_2(1338f, u_input.b, u_input.a.x, u_input.a.xx), u_input.b, true, Struct_3(u_input.a.xzx), vec4<f32>(-1379f, -553f, 290f, global1.d.x))), 6u)], 6u)]), select(select(!vec4<bool>(true, true, global1.a, false), vec4<bool>(global1.e.b, true, global1.e.b, global1.e.b), select(vec4<bool>(true, global1.c, false, true), vec4<bool>(false, true, global1.e.b, false), vec4<bool>(false, global1.a, global1.c, false))), !vec4<bool>(false, global1.e.b, true, false), select(vec4<bool>(global1.e.b, false, true, global1.c), vec4<bool>(global1.c, global1.a, global1.e.b, global1.c), select(vec4<bool>(global1.e.b, global1.c, true, global1.c), vec4<bool>(true, false, true, global1.e.b), false))), _wgslsmith_mult_vec4_u32(_wgslsmith_div_vec4_u32(_wgslsmith_div_vec4_u32(vec4<u32>(53639u, global1.b, 2428u, 48421u), u_input.a), u_input.c), vec4<u32>(global0[_wgslsmith_index_u32(~0u, 6u)], ~4294967295u, 36862u, func_8(global0[_wgslsmith_index_u32(global1.b, 6u)], false, Struct_2(-2294f, -1i, 1u, vec2<u32>(global1.e.d, global1.e.d)), Struct_5(global1.c, global1.e.d, false, global1.d, Struct_1(vec3<i32>(global1.e.a.x, u_input.b, i32(-2147483648)), global1.a, -1378i, 0u))).d)), ~0u), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(global1.d.x, global1.d.x, global1.d.x, global1.d.x) + _wgslsmith_f_op_vec4_f32(sign(vec4<f32>(579f, global1.d.x, -675f, 930f)))) - _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(global1.d.x, 1348f, global1.d.x, global1.d.x) + vec4<f32>(262f, -1446f, global1.d.x, 648f)) * _wgslsmith_f_op_vec4_f32(vec4<f32>(380f, 908f, 1000f, global1.d.x) - vec4<f32>(global1.d.x, 1250f, -314f, 1000f))))));
                continue;
            }
        }
    }
    let var_0 = !select(select(select(select(vec2<bool>(true, false), vec2<bool>(false, global1.a), vec2<bool>(global1.c, false)), !vec2<bool>(global1.c, global1.a), true), !select(vec2<bool>(true, false), vec2<bool>(global1.c, false), vec2<bool>(global1.c, global1.a)), true), vec2<bool>(global1.c, !global1.e.b), select(vec2<bool>(true, true), vec2<bool>(i32(-2147483648) != u_input.b, global1.a | false), !vec2<bool>(true, global1.a)));
    let var_1 = u_input.a | u_input.a;
    global1 = Struct_5(all(vec3<bool>(global1.a, global1.a | false, !global1.c)) && (i32(-2147483648) == global1.e.a.x), ~(~_wgslsmith_dot_vec3_u32(min(vec3<u32>(var_1.x, 41414u, var_1.x), vec3<u32>(u_input.a.x, 1u, 1u)), ~var_1.zwx)), global1.e.b, _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(min(_wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(global1.d * vec2<f32>(global1.d.x, global1.d.x)), _wgslsmith_f_op_vec2_f32(abs(vec2<f32>(1090f, -1000f))), var_0.x)), _wgslsmith_f_op_vec2_f32(sign(global1.d)))) - global1.d), func_8(global1.e.d, true, Struct_2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global1.d.x)), 2147483647i, _wgslsmith_mod_u32(func_3(vec2<i32>(-7333i, -17750i), vec3<u32>(u_input.c.x, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.a.x, 6u)], 6u)], 1u)).d.x, _wgslsmith_mult_u32(global0[_wgslsmith_index_u32(50020u, 6u)], 0u)), ~firstTrailingBit(vec2<u32>(var_1.x, global0[_wgslsmith_index_u32(global1.b, 6u)]))), Struct_5(!all(vec4<bool>(var_0.x, global1.e.b, false, var_0.x)), global0[_wgslsmith_index_u32(4294967295u, 6u)], any(select(vec4<bool>(var_0.x, global1.a, false, false), vec4<bool>(true, true, var_0.x, global1.e.b), vec4<bool>(false, global1.e.b, var_0.x, global1.e.b))), vec2<f32>(_wgslsmith_f_op_f32(global1.d.x - -1508f), _wgslsmith_div_f32(global1.d.x, global1.d.x)), func_8(global0[_wgslsmith_index_u32(_wgslsmith_mult_u32(35416u, 100226u), 6u)], all(vec3<bool>(false, false, var_0.x)), func_3(vec2<i32>(global1.e.a.x, u_input.b), var_1.zzx), Struct_5(false, global0[_wgslsmith_index_u32(var_1.x, 6u)], global1.a, global1.d, global1.e)))));
    return global1.d.x <= _wgslsmith_f_op_f32(f32(-1f) * -372f);
}

fn func_1(arg_0: f32, arg_1: bool, arg_2: vec4<u32>) -> bool {
    let var_0 = !select(select(vec4<bool>(global1.e.b, arg_1, true, true), vec4<bool>(true, true, 1000f > global1.d.x, all(vec3<bool>(global1.a, false, global1.c))), !select(global1.c, true, arg_1)), vec4<bool>(global1.c, global1.c, reverseBits(arg_2.x) == ~0u, arg_1), select(select(!vec4<bool>(true, global1.c, true, arg_1), select(vec4<bool>(arg_1, false, global1.e.b, true), vec4<bool>(true, arg_1, global1.e.b, true), false), !vec4<bool>(arg_1, global1.a, global1.c, arg_1)), vec4<bool>(global1.c, false & arg_1, any(vec3<bool>(global1.a, false, false)), true), vec4<bool>(true, func_2(), any(vec4<bool>(global1.c, global1.a, arg_1, true)), func_8(4294967295u, true, Struct_2(arg_0, 1i, 64722u, vec2<u32>(1u, 4294967295u)), Struct_5(arg_1, 0u, false, global1.d, global1.e)).b)));
    switch (-23931i) {
        case 0i: {
            let var_1 = 2147483647i;
            var var_2 = global1.c;
            var var_3 = 426f;
            return !var_0.x && any(select(var_0.zx, select(select(vec2<bool>(var_0.x, arg_1), var_0.zx, var_0.ww), select(var_0.wx, vec2<bool>(true, arg_1), global1.c), global1.d.x > -1000f), select(vec2<bool>(false, var_0.x), select(var_0.zw, var_0.yz, false), select(var_0.xz, var_0.xx, global1.c))));
        }
        case -1i: {
            let var_1 = _wgslsmith_add_u32(abs(u_input.c.x), ~(~(~27261u)) >> (func_8(func_8(global1.e.d << (23449u % 32u), arg_1 | arg_1, func_7(Struct_2(arg_0, u_input.b, 1u, vec2<u32>(69245u, 4294967295u)), 330f), Struct_5(true, 4294967295u, arg_1, global1.d, global1.e)).d, true, func_3(select(global1.e.a.xy, global1.e.a.xx, var_0.x), u_input.c.xww), Struct_5(false, abs(global1.b), true, vec2<f32>(arg_0, arg_0), func_8(0u, arg_1, Struct_2(arg_0, u_input.b, global0[_wgslsmith_index_u32(21252u, 6u)], u_input.c.wx), Struct_5(true, 4294967295u, global1.a, vec2<f32>(global1.d.x, global1.d.x), global1.e)))).d % 32u));
            global0 = array<u32, 6>();
            var var_2 = select(var_0.zxw, !var_0.xzw, select(vec3<bool>(false, global1.e.a.x == 27604i, global1.a), vec3<bool>(all(!var_0.yy), 396f < _wgslsmith_f_op_f32(round(global1.d.x)), !(!arg_1)), select(vec3<bool>(true, false, 0u > var_1), !select(vec3<bool>(var_0.x, false, arg_1), vec3<bool>(true, arg_1, true), vec3<bool>(global1.e.b, true, true)), vec3<bool>(func_2(), var_0.x, arg_1 || arg_1))));
            global1 = Struct_5(-12459i > u_input.b, u_input.c.x, select(var_2.x, !all(var_0.zzz), !any(vec2<bool>(true, true))), _wgslsmith_f_op_vec2_f32(min(vec2<f32>(-420f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(-349f)) + global1.d.x)), _wgslsmith_div_vec2_f32(vec2<f32>(global1.d.x, 898f), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(-424f, 944f) - vec2<f32>(-205f, global1.d.x)))))), Struct_1(abs(vec3<i32>(1i, global1.e.c, _wgslsmith_sub_i32(2147483647i, 7537i))), true, func_7(func_7(Struct_2(496f, 36768i, global0[_wgslsmith_index_u32(23773u, 6u)], vec2<u32>(var_1, 80125u)), func_3(vec2<i32>(-54778i, -29057i), vec3<u32>(arg_2.x, global1.e.d, 47520u)).a), 205f).b, _wgslsmith_dot_vec2_u32(vec2<u32>(~4294967295u, ~var_1), ~(~arg_2.zw))));
        }
        default: {
            if (any(var_0.yxz)) {
                let var_1 = _wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(global1.d.x - global1.d.x), -842f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -1211f) + _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(trunc(107f)), arg_0)))) - _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(global1.d.x, global1.d.x, global1.d.x))) * vec3<f32>(-860f, global1.d.x, _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(round(arg_0)))))));
                let var_2 = func_9(global1.e, !var_0, arg_2, ~u_input.c.x);
                let var_3 = _wgslsmith_f_op_vec3_f32(ceil(var_1));
            }
        }
    }
    var var_1 = Struct_5(true, global1.b, !(~_wgslsmith_add_u32(arg_2.x, 0u) < ~(~36870u)), global1.d, Struct_1(vec3<i32>(_wgslsmith_div_i32(14914i ^ u_input.b, min(i32(-2147483648), global1.e.c)), i32(-2147483648), -(global1.e.c >> (global1.b % 32u))), arg_1, 2083i, _wgslsmith_dot_vec3_u32(vec3<u32>(~global1.b, 28609u ^ u_input.a.x, global0[_wgslsmith_index_u32(~global1.e.d, 6u)]), ~vec3<u32>(arg_2.x, 4294967295u, global1.e.d))));
    loop {
        if (LOOP_COUNTERS[20u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
        var var_2 = 4294967295u;
        for (var var_3 = -7953i; var_3 == 2747i; ) {
            if (LOOP_COUNTERS[21u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
            global0 = array<u32, 6>();
        }
        for (var var_3 = 0i; var_3 == -1i; ) {
            if (LOOP_COUNTERS[22u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
            break;
        }
        global0 = array<u32, 6>();
        let var_3 = firstLeadingBit(vec2<i32>(u_input.b, -1i));
    }
    var var_2 = !(!(!vec3<bool>(true, var_1.e.b, any(var_0))));
    return var_1.a;
}

fn func_10(arg_0: i32, arg_1: Struct_4, arg_2: i32) -> Struct_5 {
    let var_0 = global1.e.c;
    var var_1 = global1.b;
    var_1 = 11301u;
    switch (arg_0) {
        case -1i: {
            if (true) {
                let var_2 = select(select(vec3<bool>(!(0u != global0[_wgslsmith_index_u32(8613u, 6u)]), true, true), !(!(!vec3<bool>(false, arg_1.c, false))), vec3<bool>(true, all(!vec4<bool>(arg_1.c, arg_1.c, arg_1.c, arg_1.c)), false)), select(vec3<bool>(false, arg_1.c, true), select(vec3<bool>(global1.e.b & false, any(vec2<bool>(global1.e.b, true)), all(vec4<bool>(false, global1.c, false, true))), select(select(vec3<bool>(arg_1.c, arg_1.c, true), vec3<bool>(arg_1.c, true, arg_1.c), vec3<bool>(false, arg_1.c, true)), select(vec3<bool>(arg_1.c, global1.e.b, false), vec3<bool>(arg_1.c, global1.e.b, false), vec3<bool>(false, arg_1.c, arg_1.c)), !global1.e.b), vec3<bool>(arg_1.c, arg_1.c | global1.c, !arg_1.c)), vec3<bool>(all(select(vec4<bool>(false, true, false, global1.a), vec4<bool>(true, true, false, arg_1.c), false)), true, !(!global1.a))), vec3<bool>(arg_1.c, false, global1.c));
                var var_3 = -1800f;
                let var_4 = func_4(var_2.x, arg_1.e.wwz, arg_1);
                let var_5 = Struct_3(u_input.a.yyx);
                let var_6 = !(!(func_8(~40105u, var_2.x != arg_1.c, func_7(arg_1.a, 1259f), Struct_5(global1.e.b, var_5.a.x, var_2.x, arg_1.e.yy, Struct_1(vec3<i32>(u_input.b, 3516i, 2147483647i), true, arg_2, 4294967295u))).b && any(var_2)));
            }
            global0 = array<u32, 6>();
            let var_2 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(vec4<f32>(-957f, 142f, arg_1.e.x, arg_1.e.x) - _wgslsmith_f_op_vec4_f32(-vec4<f32>(1329f, -196f, -1000f, arg_1.e.x)))))) + _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(floor(vec4<f32>(-140f, global1.d.x, global1.d.x, arg_1.a.a))))) + arg_1.e));
            for (var var_3 = 43012i; var_3 < -1i; ) {
                if (LOOP_COUNTERS[23u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
            }
        }
        case -11204i: {
            for (var var_2: i32; var_2 >= -60031i; var_2 += 1i) {
                if (LOOP_COUNTERS[24u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
                continue;
            }
        }
        case -14788i: {
            var_1 = abs(41961u);
            let var_2 = u_input.b;
        }
        case -13499i: {
            global0 = array<u32, 6>();
            global1 = Struct_5(func_1(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_div_f32(global1.d.x, 814f) - -135f) + 565f), any(select(select(vec2<bool>(true, arg_1.c), vec2<bool>(false, true), false), vec2<bool>(global1.c, arg_1.c), any(vec2<bool>(true, arg_1.c)))), u_input.a ^ vec4<u32>(arg_1.a.d.x, _wgslsmith_add_u32(global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global1.b, 6u)], 6u)], 856u), arg_1.d.a.x, 0u)), _wgslsmith_clamp_u32(~(~20889u), ~(arg_1.a.d.x | ~global0[_wgslsmith_index_u32(arg_1.a.c, 6u)]), u_input.a.x), true, _wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(-global1.d), vec2<f32>(global1.d.x, global1.d.x), select(!vec2<bool>(global1.c, true), vec2<bool>(true, all(vec4<bool>(arg_1.c, global1.a, true, global1.e.b))), true))), func_8(max(~u_input.c.x ^ arg_1.d.a.x, arg_1.a.c & global1.b), true, arg_1.a, Struct_5(arg_1.c, ~_wgslsmith_dot_vec3_u32(vec3<u32>(global1.e.d, 4294967295u, 2563u), vec3<u32>(arg_1.d.a.x, arg_1.a.c, global0[_wgslsmith_index_u32(global1.e.d, 6u)])), func_1(-565f, arg_1.c, u_input.c), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(trunc(arg_1.e.wz))), func_8(func_7(Struct_2(-799f, arg_0, arg_1.d.a.x, u_input.a.xz), 1331f).c, func_2(), arg_1.a, Struct_5(arg_1.c, 1u, true, vec2<f32>(-1204f, global1.d.x), global1.e)))));
        }
        default: {
            let var_2 = _wgslsmith_f_op_vec2_f32(sign(global1.d));
        }
    }
    let var_2 = Struct_1(global1.e.a & (vec3<i32>(~arg_0, _wgslsmith_dot_vec2_i32(global1.e.a.yz, vec2<i32>(-12756i, global1.e.a.x)), abs(arg_0)) & (firstLeadingBit(vec3<i32>(-18938i, arg_2, arg_1.a.b)) | -global1.e.a)), func_8(firstLeadingBit(countOneBits(_wgslsmith_mod_u32(arg_1.d.a.x, 75685u))), func_1(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -493f) - _wgslsmith_f_op_f32(trunc(arg_1.e.x))), _wgslsmith_add_u32(87705u, 4789u) < ~global1.e.d, ~u_input.a), arg_1.a, Struct_5(global1.e.b, 17731u, all(vec4<bool>(arg_1.c, arg_1.c, false, global1.a)), _wgslsmith_f_op_vec2_f32(sign(vec2<f32>(arg_1.e.x, -552f))), func_8(27202u, func_1(global1.d.x, global1.e.b, u_input.c), arg_1.a, Struct_5(arg_1.c, 9159u, global1.c, vec2<f32>(global1.d.x, arg_1.a.a), Struct_1(vec3<i32>(31670i, -13494i, 76933i), false, arg_2, 39160u))))).b, ~arg_1.a.b, abs(global1.e.d));
    return Struct_5(_wgslsmith_div_f32(531f, global1.d.x) >= _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_div_f32(global1.d.x, -140f))), 21870u, any(vec3<bool>(true, var_2.b == true, all(vec2<bool>(global1.e.b, var_2.b)))), _wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(global1.d.x + _wgslsmith_f_op_f32(abs(arg_1.e.x))), arg_1.a.a) * _wgslsmith_f_op_vec2_f32(vec2<f32>(310f, _wgslsmith_f_op_f32(-global1.d.x)) - _wgslsmith_f_op_vec2_f32(step(arg_1.e.zy, _wgslsmith_f_op_vec2_f32(floor(vec2<f32>(global1.d.x, 685f))))))), func_8(22549u, any(vec2<bool>(false && var_2.b, true)), Struct_2(_wgslsmith_f_op_f32(sign(func_7(Struct_2(-618f, arg_0, 0u, vec2<u32>(4294967295u, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(4294967295u, 6u)], 6u)])), 345f).a)), i32(-1i) * -2145i, 4294967295u, arg_1.d.a.yx), Struct_5(all(select(vec3<bool>(global1.a, true, true), vec3<bool>(var_2.b, global1.a, true), vec3<bool>(true, true, false))), 4294967295u, (arg_1.c && true) | any(vec2<bool>(true, global1.a)), _wgslsmith_f_op_vec2_f32(exp2(_wgslsmith_f_op_vec2_f32(-global1.d))), Struct_1(var_2.a, false, 1i, func_9(Struct_1(vec3<i32>(-44078i, -1i, 1i), true, arg_1.a.b, global0[_wgslsmith_index_u32(arg_1.a.c, 6u)]), vec4<bool>(false, arg_1.c, global1.a, var_2.b), u_input.c, global1.e.d).a.x))));
}

@compute
@workgroup_size(1)
fn main() {
    if (40321u > (global0[_wgslsmith_index_u32(34862u, 6u)] << (_wgslsmith_add_u32(~firstTrailingBit(43448u), _wgslsmith_sub_u32(global1.e.d >> (307u % 32u), ~1u)) % 32u))) {
        loop {
            if (LOOP_COUNTERS[25u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
            var var_0 = -max(global1.e.c, ~(~_wgslsmith_add_i32(1i, u_input.b)));
            let var_1 = !select(select(vec4<bool>(true, global1.e.b, global1.c, any(vec3<bool>(global1.e.b, true, false))), !(!vec4<bool>(false, false, global1.a, true)), select(!vec4<bool>(true, global1.a, global1.e.b, true), select(vec4<bool>(false, true, true, false), vec4<bool>(false, global1.a, global1.a, false), false), global0[_wgslsmith_index_u32(9260u, 6u)] <= 27724u)), select(vec4<bool>(true, global1.e.b, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(u_input.c.x, 6u)], 6u)] >= 16826u, global1.a & global1.a), select(!vec4<bool>(false, global1.c, global1.a, global1.e.b), vec4<bool>(global1.c, true, global1.e.b, global1.e.b), vec4<bool>(true, global1.e.b, true, global1.a)), true && (false | global1.e.b)), 1513f != _wgslsmith_f_op_f32(340f - _wgslsmith_f_op_f32(global1.d.x * global1.d.x)));
        }
        global0 = array<u32, 6>();
        global1 = func_10(_wgslsmith_div_i32(-1i, select(~max(-12813i, u_input.b), i32(-1i) * -48554i, !all(vec4<bool>(global1.e.b, global1.e.b, global1.a, global1.e.b)))), Struct_4(Struct_2(-717f, u_input.b, min(0u, u_input.c.x >> (4294967295u % 32u)), ~u_input.a.yx), ~(-global1.e.c), func_1(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(max(580f, global1.d.x)))), any(select(vec4<bool>(global1.e.b, global1.e.b, global1.e.b, global1.a), vec4<bool>(false, false, global1.c, true), vec4<bool>(global1.e.b, global1.a, global1.c, global1.c))), _wgslsmith_div_vec4_u32(vec4<u32>(global1.e.d, u_input.a.x, global0[_wgslsmith_index_u32(38355u, 6u)], global1.e.d), vec4<u32>(1u, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(global1.b, 6u)], 6u)], 4294967295u, 4294967295u)) >> (vec4<u32>(global0[_wgslsmith_index_u32(65748u, 6u)], global0[_wgslsmith_index_u32(4294967295u, 6u)], 23072u, 4620u) % vec4<u32>(32u))), Struct_3(u_input.c.xzw ^ _wgslsmith_mod_vec3_u32(u_input.a.zzz, u_input.a.www)), _wgslsmith_f_op_vec4_f32(floor(_wgslsmith_div_vec4_f32(vec4<f32>(1000f, 1000f, -935f, global1.d.x), _wgslsmith_f_op_vec4_f32(-vec4<f32>(-1333f, 1724f, -2604f, global1.d.x)))))), max(u_input.b, func_6(_wgslsmith_dot_vec3_i32(vec3<i32>(u_input.b, 9484i, i32(-2147483648)), global1.e.a), Struct_1(global1.e.a, any(vec4<bool>(global1.e.b, false, true, true)), global1.e.a.x, global0[_wgslsmith_index_u32(~global0[_wgslsmith_index_u32(global1.b, 6u)], 6u)])).x));
    }
    for (var var_0 = 2147483647i; var_0 < 7411i; global0 = array<u32, 6>()) {
        if (LOOP_COUNTERS[26u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
        global1 = Struct_5(any(select(vec2<bool>(global1.c, false), select(vec2<bool>(global1.e.b, false), vec2<bool>(false, true), vec2<bool>(false, false)), func_10(global1.e.a.x, Struct_4(Struct_2(626f, global1.e.a.x, 30823u, vec2<u32>(global0[_wgslsmith_index_u32(global1.e.d, 6u)], 4294967295u)), 7120i, false, Struct_3(u_input.c.xwx), vec4<f32>(2314f, global1.d.x, global1.d.x, global1.d.x)), u_input.b).e.b)) == global1.c, _wgslsmith_mod_u32(_wgslsmith_sub_u32(global1.e.d ^ 31320u, global0[_wgslsmith_index_u32(u_input.a.x, 6u)]), _wgslsmith_div_u32(1u & (1u >> (global1.b % 32u)), _wgslsmith_clamp_u32(25880u, _wgslsmith_mult_u32(0u, 19353u), 4294967295u >> (global0[_wgslsmith_index_u32(1u, 6u)] % 32u)))), global1.c, _wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(round(_wgslsmith_f_op_vec2_f32(global1.d * vec2<f32>(2684f, 1069f)))) + _wgslsmith_f_op_vec2_f32(select(global1.d, global1.d, false))))), global1.e);
        if (all(vec2<bool>(false, true))) {
        }
        break;
    }
    loop {
        if (LOOP_COUNTERS[27u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[27u] = LOOP_COUNTERS[27u] + 1u;
        if (any(select(select(vec4<bool>(global1.e.b & false, global1.e.b, !global1.e.b, false), vec4<bool>(global1.e.b, false, true, true), global1.e.b), !select(select(vec4<bool>(false, global1.c, false, false), vec4<bool>(true, global1.a, global1.a, true), global1.c), vec4<bool>(true, true, true, true), all(vec2<bool>(false, global1.a))), vec4<bool>(all(!vec4<bool>(global1.a, global1.c, global1.e.b, global1.a)), any(vec3<bool>(true, global1.c, global1.c)), global1.a, true)))) {
        }
        if (false) {
            global0 = array<u32, 6>();
            continue;
        }
    }
    if (global1.c) {
        switch (8860i) {
            default: {
                var var_0 = !global1.c;
                let var_1 = !select(select(!vec4<bool>(true, global1.c, false, global1.e.b), !(!vec4<bool>(global1.a, global1.e.b, true, false)), select(vec4<bool>(false, global1.c, true, global1.a), !vec4<bool>(global1.e.b, global1.c, false, global1.a), !global1.c)), select(select(vec4<bool>(global1.a, global1.a, global1.c, true), vec4<bool>(global1.c, true, true, true), all(vec4<bool>(false, true, global1.a, false))), !vec4<bool>(global1.a, false, true, global1.c), select(!vec4<bool>(true, true, global1.e.b, global1.e.b), !vec4<bool>(false, false, global1.c, global1.a), !vec4<bool>(false, global1.c, false, true))), true & any(vec2<bool>(global1.e.b, global1.e.b)));
                global0 = array<u32, 6>();
            }
        }
        global0 = array<u32, 6>();
        if (~(~global0[_wgslsmith_index_u32(~u_input.a.x, 6u)]) == _wgslsmith_sub_u32(~_wgslsmith_mult_u32(27501u, global0[_wgslsmith_index_u32(_wgslsmith_clamp_u32(18398u, 0u, 0u), 6u)]), select(~u_input.c.x, u_input.c.x, true))) {
            global0 = array<u32, 6>();
            let var_0 = func_10(-global1.e.a.x, Struct_4(Struct_2(_wgslsmith_f_op_f32(1476f - _wgslsmith_f_op_f32(abs(1825f))), u_input.b, _wgslsmith_add_u32(~4294967295u, 11130u), select(vec2<u32>(1u, 1u), select(vec2<u32>(0u, 8529u), u_input.a.zz, true), !vec2<bool>(global1.a, global1.e.b))), 20563i, global1.a, Struct_3(vec3<u32>(0u << (global1.b % 32u), global1.e.d, countOneBits(u_input.c.x))), _wgslsmith_f_op_vec4_f32(abs(_wgslsmith_div_vec4_f32(vec4<f32>(global1.d.x, global1.d.x, 384f, -1555f), _wgslsmith_f_op_vec4_f32(select(vec4<f32>(1261f, -913f, global1.d.x, global1.d.x), vec4<f32>(global1.d.x, global1.d.x, 1000f, -414f), vec4<bool>(global1.a, false, global1.a, global1.c))))))), global1.e.a.x).e;
        }
        let var_0 = abs(vec3<u32>(reverseBits(3282u), 4294967295u, ~select(0u, ~7302u, true)));
    }
    let var_0 = func_10(i32(-1i) * -(global1.e.c ^ func_8(4294967295u, global1.e.b, Struct_2(global1.d.x, u_input.b, global1.b, vec2<u32>(42367u, 1u)), Struct_5(global1.a, 21742u, global1.c, vec2<f32>(-1000f, 1042f), Struct_1(vec3<i32>(global1.e.a.x, i32(-2147483648), u_input.b), global1.a, 0i, 15473u))).c), Struct_4(func_7(func_3(vec2<i32>(2147483647i, -6450i), abs(vec3<u32>(20157u, 1u, u_input.c.x))), _wgslsmith_div_f32(-2708f, global1.d.x)), -2147483647i, any(vec2<bool>(true, all(vec4<bool>(global1.a, true, global1.a, global1.c)))), Struct_3(~vec3<u32>(global0[_wgslsmith_index_u32(u_input.a.x, 6u)], 32512u, 78213u)), vec4<f32>(global1.d.x, _wgslsmith_f_op_f32(-global1.d.x), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(2240f - global1.d.x)), _wgslsmith_f_op_f32(exp2(func_7(Struct_2(1786f, 25986i, u_input.c.x, u_input.a.yy), 360f).a)))), _wgslsmith_mult_i32(-u_input.b & ~44788i, -global1.e.c) | (global1.e.c & global1.e.a.x)).e;
    switch (14725i) {
        case 2147483647i: {
            let var_1 = func_10(_wgslsmith_sub_i32(u_input.b ^ ~(-1912i), _wgslsmith_sub_i32(-var_0.a.x, countOneBits(-39618i))), Struct_4(func_7(Struct_2(1296f, global1.e.a.x << (4294967295u % 32u), abs(4294967295u), u_input.a.xz), global1.d.x), global1.e.c, true, func_9(Struct_1(global1.e.a, any(vec2<bool>(var_0.b, true)), u_input.b, ~u_input.a.x), vec4<bool>(any(vec4<bool>(global1.c, global1.a, global1.e.b, true)), true, var_0.b, func_1(-169f, true, vec4<u32>(20820u, 1u, u_input.c.x, u_input.a.x))), u_input.a ^ ~vec4<u32>(61562u, global0[_wgslsmith_index_u32(global0[_wgslsmith_index_u32(var_0.d, 6u)], 6u)], 81837u, var_0.d), ~func_3(vec2<i32>(-1i, global1.e.c), vec3<u32>(global1.b, u_input.c.x, 11080u)).d.x), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(abs(vec4<f32>(global1.d.x, global1.d.x, global1.d.x, -3350f)))))), var_0.c);
            loop {
                if (LOOP_COUNTERS[28u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[28u] = LOOP_COUNTERS[28u] + 1u;
                let var_2 = global1.e.b;
                var var_3 = _wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(var_1.d.x, _wgslsmith_f_op_f32(f32(-1f) * -1624f), _wgslsmith_f_op_f32(floor(global1.d.x)), _wgslsmith_f_op_f32(-func_7(func_7(Struct_2(var_1.d.x, 1i, u_input.a.x, u_input.a.zx), var_1.d.x), _wgslsmith_div_f32(var_1.d.x, -1345f)).a))));
                continue;
            }
            global1 = var_1;
        }
        case -1i: {
        }
        case i32(-2147483648): {
            global1 = func_10(u_input.b, Struct_4(func_3(abs(_wgslsmith_add_vec2_i32(global1.e.a.yy, vec2<i32>(-20120i, var_0.a.x))), u_input.c.wxx), ~abs(47890i), true, Struct_3(~u_input.a.yxz), vec4<f32>(_wgslsmith_div_f32(-145f, _wgslsmith_f_op_f32(-global1.d.x)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(global1.d.x, 740f))), 1000f, _wgslsmith_f_op_f32(-537f))), ~(-_wgslsmith_dot_vec2_i32(vec2<i32>(global1.e.a.x, var_0.c) & var_0.a.xy, var_0.a.yx)));
            global1 = Struct_5((u_input.c.x | (~global0[_wgslsmith_index_u32(1u, 6u)] & func_5(vec3<i32>(52622i, i32(-2147483648), var_0.a.x), Struct_1(vec3<i32>(-858i, 1i, global1.e.a.x), false, var_0.c, u_input.c.x), Struct_4(Struct_2(-524f, -20466i, 45840u, u_input.c.wy), u_input.b, true, Struct_3(vec3<u32>(120472u, u_input.c.x, 0u)), vec4<f32>(206f, global1.d.x, global1.d.x, global1.d.x))))) > var_0.d, u_input.a.x, all(!(!vec2<bool>(global1.c, false))), _wgslsmith_f_op_vec2_f32(exp2(_wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(global1.d + _wgslsmith_f_op_vec2_f32(step(global1.d, global1.d))), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(global1.d.x, -965f))))))), var_0);
            switch (_wgslsmith_mod_i32(13481i, global1.e.a.x)) {
                case 2147483647i: {
                    let var_1 = vec4<i32>(i32(-1i) * i32(-2147483648), -(_wgslsmith_dot_vec4_i32(-vec4<i32>(2147483647i, global1.e.a.x, global1.e.a.x, -31264i), _wgslsmith_mult_vec4_i32(vec4<i32>(1i, 8266i, global1.e.c, i32(-2147483648)), vec4<i32>(-41667i, 4692i, var_0.c, -39637i))) ^ 1i), ~global1.e.c, _wgslsmith_dot_vec2_i32((var_0.a.yy ^ global1.e.a.yz) << (vec2<u32>(var_0.d, ~16743u) % vec2<u32>(32u)), vec2<i32>(u_input.b, global1.e.a.x)));
                    global0 = array<u32, 6>();
                    global0 = array<u32, 6>();
                }
                default: {
                    global0 = array<u32, 6>();
                    var var_1 = func_10(global1.e.c, Struct_4(Struct_2(_wgslsmith_f_op_f32(global1.d.x * _wgslsmith_f_op_f32(ceil(global1.d.x))), global1.e.a.x, 24979u, u_input.a.zx), 22575i, true, func_9(func_10(~var_0.a.x, Struct_4(Struct_2(global1.d.x, -28580i, global0[_wgslsmith_index_u32(59516u, 6u)], vec2<u32>(global1.e.d, 1u)), -1i, true, Struct_3(u_input.a.zzy), vec4<f32>(373f, global1.d.x, -1557f, global1.d.x)), ~var_0.a.x).e, !(!vec4<bool>(global1.e.b, var_0.b, false, false)), reverseBits(u_input.c & u_input.c), var_0.d), vec4<f32>(_wgslsmith_f_op_f32(global1.d.x - 1000f), 1074f, global1.d.x, global1.d.x)), var_0.a.x << (u_input.a.x % 32u));
                    global0 = array<u32, 6>();
                }
            }
            if (true) {
            }
        }
        default: {
            return;
        }
    }
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(_wgslsmith_div_f32(_wgslsmith_div_f32(-1843f, -214f), _wgslsmith_f_op_f32(global1.d.x + -1208f)), _wgslsmith_f_op_f32(-global1.d.x))) * 1f), u_input.a.wwx, _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(sign(vec2<f32>(_wgslsmith_f_op_f32(min(1593f, 647f)), _wgslsmith_f_op_f32(max(-940f, global1.d.x))))) + vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(467f, -646f))), global1.d.x)), -global1.e.a);
}

`;