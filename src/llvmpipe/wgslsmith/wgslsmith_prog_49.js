export const input = [98,65,201,195,198,91,98,102,247,84,217,76,13,107,94,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [98,65,201,195,198,91,98,102,247,84,217,76,13,107,94,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[98,65,201,195,198,91,98,102,247,84,217,76,13,107,94,19]}
// Seed: 15134451757585475611

struct Struct_1 {
    a: f32,
}

struct UniformBuffer {
    a: vec3<u32>,
    b: u32,
}

struct StorageBuffer {
    a: vec2<u32>,
    b: vec3<u32>,
    c: vec3<f32>,
    d: u32,
    e: vec2<f32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: i32 = 0i;

var<private> global1: array<Struct_1, 23> = array<Struct_1, 23>(Struct_1(-277f), Struct_1(-767f), Struct_1(252f), Struct_1(-926f), Struct_1(-2431f), Struct_1(-1268f), Struct_1(431f), Struct_1(288f), Struct_1(1014f), Struct_1(-464f), Struct_1(631f), Struct_1(-631f), Struct_1(-1048f), Struct_1(1640f), Struct_1(-1844f), Struct_1(492f), Struct_1(264f), Struct_1(-257f), Struct_1(194f), Struct_1(-924f), Struct_1(-1221f), Struct_1(161f), Struct_1(576f));

var<private> global2: array<u32, 11> = array<u32, 11>(4294967295u, 0u, 1u, 1u, 0u, 4294967295u, 69745u, 0u, 33813u, 0u, 0u);

var<private> global3: vec4<u32>;

var<private> LOOP_COUNTERS: array<u32, 21>;

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn func_5(arg_0: vec4<i32>, arg_1: vec4<bool>, arg_2: f32) -> vec3<i32> {
    global0 = min(arg_0.x, _wgslsmith_div_i32(arg_0.x, 8987i | ((arg_0.x | arg_0.x) >> (_wgslsmith_clamp_u32(u_input.a.x, 50684u, global2[_wgslsmith_index_u32(global3.x, 11u)]) % 32u))));
    let var_0 = arg_1.x;
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        continue;
    }
    let var_1 = ~global2[_wgslsmith_index_u32(~firstLeadingBit(_wgslsmith_div_u32(countOneBits(u_input.a.x), _wgslsmith_dot_vec3_u32(u_input.a, global3.zyx))), 11u)];
    for (var var_2 = 3692i; var_2 != -15496i; var_2 += 1i) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        continue;
    }
    return vec3<i32>(-arg_0.x, 2147483647i, -arg_0.x);
}

fn func_6() -> u32 {
    var var_0 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(1053f))) * -1012f);
    let var_1 = true != all(vec4<bool>(all(select(vec2<bool>(false, true), vec2<bool>(true, false), true)), true, !all(vec4<bool>(false, true, true, false)), true));
    global1 = array<Struct_1, 23>();
    var var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(-1000f, _wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-2117f - -903f) - _wgslsmith_f_op_f32(-398f * 1000f)), _wgslsmith_f_op_f32(-1000f)))));
    for (var var_3: i32; var_3 <= 39089i; var_3 -= 1i) {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        loop {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            var_2 = _wgslsmith_div_f32(1000f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(1200f, 1002f)))));
            continue;
        }
        let var_4 = max(reverseBits(max(0i, _wgslsmith_dot_vec4_i32(firstTrailingBit(vec4<i32>(i32(-2147483648), i32(-2147483648), -27476i, -13555i)), vec4<i32>(-1i, -30643i, 2147483647i, 37986i)))), i32(-2147483648));
        continue;
    }
    return 35070u;
}

fn func_4(arg_0: f32, arg_1: vec2<bool>) -> u32 {
    if (all(!arg_1)) {
        global2 = array<u32, 11>();
        return ~(~global3.x);
    }
    for (; true; ) {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        switch (i32(-1i) * -34726i) {
            case 36699i: {
                continue;
            }
            case 11622i: {
                var var_0 = abs(func_5(-vec4<i32>(-23947i, 1i, i32(-2147483648), 0i), select(vec4<bool>(false, false, arg_1.x, true), vec4<bool>(false, arg_1.x, false, false), arg_1.x | false), arg_0) >> (vec3<u32>(_wgslsmith_div_u32(global2[_wgslsmith_index_u32(func_6(), 11u)], _wgslsmith_mod_u32(1u, u_input.b)), select(~u_input.a.x, 36193u, false), global2[_wgslsmith_index_u32(_wgslsmith_sub_u32(_wgslsmith_mod_u32(u_input.b, 1u), _wgslsmith_dot_vec2_u32(global3.yy, vec2<u32>(global2[_wgslsmith_index_u32(1u, 11u)], 0u))), 11u)]) % vec3<u32>(32u)));
                let var_1 = Struct_1(1794f);
            }
            case -1i: {
                var var_0 = _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-679f)));
                continue;
            }
            case 2147483647i: {
                global3 = reverseBits(~(~_wgslsmith_div_vec4_u32(firstLeadingBit(vec4<u32>(u_input.a.x, u_input.a.x, global2[_wgslsmith_index_u32(12705u, 11u)], 4294967295u)), _wgslsmith_add_vec4_u32(vec4<u32>(u_input.b, u_input.a.x, global2[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(4294967295u, 11u)], 11u)], 0u), vec4<u32>(10640u, global2[_wgslsmith_index_u32(50138u, 11u)], u_input.b, global3.x)))));
                let var_0 = arg_0;
                global0 = -16601i;
                var var_1 = arg_0;
            }
            default: {
            }
        }
        for (var var_0: i32; var_0 == 8428i; global3 = _wgslsmith_add_vec4_u32(~firstLeadingBit(~(~vec4<u32>(4294967295u, global2[_wgslsmith_index_u32(4294967295u, 11u)], global3.x, global3.x))), _wgslsmith_div_vec4_u32(vec4<u32>(min(firstLeadingBit(u_input.b), max(0u, u_input.a.x)), select(~u_input.b, _wgslsmith_sub_u32(global2[_wgslsmith_index_u32(29049u, 11u)], global3.x), 1u <= u_input.b), u_input.b, _wgslsmith_sub_u32(1u << (1u % 32u), max(global2[_wgslsmith_index_u32(10404u, 11u)], u_input.a.x))), vec4<u32>(global2[_wgslsmith_index_u32(u_input.b, 11u)], _wgslsmith_div_u32(global3.x, 0u), 25054u, global3.x)))) {
            if (LOOP_COUNTERS[5u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
            let var_1 = global1[_wgslsmith_index_u32(~_wgslsmith_mult_u32(82455u, _wgslsmith_mod_u32(4294967295u, select(u_input.b, u_input.b, arg_1.x))), 23u)];
            let var_2 = true;
            return countOneBits(_wgslsmith_add_u32(6318u, ~24543u));
        }
        switch (_wgslsmith_div_i32(-59306i, 1i)) {
            case 0i: {
            }
            default: {
                break;
            }
        }
    }
    global0 = (select(-51383i, _wgslsmith_clamp_i32(abs(-9296i), _wgslsmith_dot_vec3_i32(vec3<i32>(-2603i, 2147483647i, 5769i), vec3<i32>(0i, 0i, 0i)), i32(-2147483648)), true) << (1u % 32u)) ^ -(_wgslsmith_add_i32(1i, 14270i) << (func_6() % 32u));
    let var_0 = global1[_wgslsmith_index_u32(~global2[_wgslsmith_index_u32(~max(_wgslsmith_mod_u32(~35835u, _wgslsmith_mod_u32(u_input.a.x, global3.x)), select(global2[_wgslsmith_index_u32(_wgslsmith_add_u32(3618u, global3.x), 11u)], 51161u, arg_1.x)), 11u)], 23u)];
    let var_1 = Struct_1(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-1106f * _wgslsmith_f_op_f32(-518f)), 935f)))));
    return ~_wgslsmith_dot_vec4_u32(select(~min(vec4<u32>(global2[_wgslsmith_index_u32(4294967295u, 11u)], 11838u, 0u, 19158u), vec4<u32>(u_input.a.x, 0u, global3.x, 0u)), firstLeadingBit(vec4<u32>(global3.x, u_input.a.x, global3.x, 78924u)), vec4<bool>(true || arg_1.x, any(vec3<bool>(true, false, arg_1.x)), arg_1.x, true)), min(vec4<u32>(0u, 0u >> (global2[_wgslsmith_index_u32(global3.x, 11u)] % 32u), u_input.a.x, 1u), firstLeadingBit(vec4<u32>(17535u, 4294967295u, 11552u, 45316u) << (vec4<u32>(global2[_wgslsmith_index_u32(69980u, 11u)], u_input.b, global2[_wgslsmith_index_u32(global3.x, 11u)], global3.x) % vec4<u32>(32u)))));
}

fn func_3(arg_0: bool, arg_1: u32) -> vec2<bool> {
    let var_0 = vec3<bool>(true, arg_0, ~(~arg_1) < global2[_wgslsmith_index_u32(~0u, 11u)]);
    var var_1 = global1[_wgslsmith_index_u32(~select(_wgslsmith_dot_vec4_u32(vec4<u32>(1u, ~4294967295u, global3.x, func_4(1365f, var_0.zx)), _wgslsmith_sub_vec4_u32(vec4<u32>(global2[_wgslsmith_index_u32(26063u, 11u)], 0u, 54816u, 0u), _wgslsmith_sub_vec4_u32(vec4<u32>(68978u, global3.x, 2978u, 4294967295u), vec4<u32>(arg_1, arg_1, 4294967295u, global3.x)))), ~(~global3.x), arg_0), 23u)];
    global1 = array<Struct_1, 23>();
    var var_2 = _wgslsmith_sub_vec2_i32(func_5(vec4<i32>(-max(-1791i, i32(-2147483648)), ~25388i, _wgslsmith_sub_i32(_wgslsmith_dot_vec2_i32(vec2<i32>(-81419i, 42646i), vec2<i32>(0i, 5127i)), _wgslsmith_mod_i32(755i, 1i)), 27836i), select(select(select(vec4<bool>(var_0.x, var_0.x, var_0.x, true), vec4<bool>(var_0.x, var_0.x, false, false), vec4<bool>(false, arg_0, true, arg_0)), !vec4<bool>(arg_0, false, var_0.x, true), vec4<bool>(true, var_0.x, true, false)), select(vec4<bool>(false, true, false, var_0.x), select(vec4<bool>(arg_0, var_0.x, arg_0, false), vec4<bool>(true, var_0.x, arg_0, var_0.x), vec4<bool>(true, false, var_0.x, false)), true), var_0.x), -1156f).xz, vec2<i32>(~(~(-41746i)), 42662i));
    for (var var_3 = firstLeadingBit(_wgslsmith_sub_i32(abs(~var_2.x), 32136i)) & 0i; !(true || !(!arg_0)) || false; ) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        for (var var_4: i32; var_4 <= 1i; global2 = array<u32, 11>()) {
            if (LOOP_COUNTERS[7u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
            let var_5 = global1[_wgslsmith_index_u32(70595u >> (global3.x % 32u), 23u)];
        }
    }
    return var_0.zy;
}

fn func_2() -> bool {
    global0 = ~firstTrailingBit(1i >> (1u % 32u));
    switch (_wgslsmith_clamp_i32(~(-1i), 1044i, ~abs(_wgslsmith_dot_vec3_i32(vec3<i32>(2147483647i, -30166i, -5240i), vec3<i32>(-1i, i32(-2147483648), 45577i))) & ~max(~(-27731i), 19619i))) {
        case 19442i: {
        }
        case 2147483647i: {
            global1 = array<Struct_1, 23>();
        }
        case -87956i: {
            for (var var_0 = i32(-2147483648); any(!(!(!func_3(true, 50276u)))); var_0 += 1i) {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                break;
            }
        }
        case 0i: {
            switch (-_wgslsmith_dot_vec2_i32(_wgslsmith_sub_vec2_i32(vec2<i32>(1i, 1i), vec2<i32>(1i, 1i)), vec2<i32>(~(~(-35619i)), _wgslsmith_dot_vec3_i32(vec3<i32>(59292i, -41553i, i32(-2147483648)), vec3<i32>(0i, -32902i, 0i) << (global3.zxz % vec3<u32>(32u)))))) {
                case i32(-2147483648): {
                    var var_0 = vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(-109f, _wgslsmith_f_op_f32(-486f))) + _wgslsmith_div_f32(-654f, 1124f)) * _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-382f - 167f), 747f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(abs(1223f)))), _wgslsmith_f_op_f32(ceil(_wgslsmith_div_f32(1127f, -536f)))))), _wgslsmith_f_op_f32(min(-1751f, -314f)));
                    var var_1 = max(50165i, ~(i32(-2147483648)));
                    let var_2 = vec2<i32>(_wgslsmith_div_i32(~min(reverseBits(-1i), 1i), 2147483647i), _wgslsmith_mult_i32(-21519i, ~(firstTrailingBit(-1i) | firstLeadingBit(17915i))));
                }
                case -19111i: {
                    global2 = array<u32, 11>();
                    var var_0 = 25184u;
                    global1 = array<Struct_1, 23>();
                    var_0 = ~5337u;
                }
                case 0i: {
                    global1 = array<Struct_1, 23>();
                    let var_0 = vec2<bool>(true != any(select(vec4<bool>(false, false, false, false), select(vec4<bool>(true, false, false, false), vec4<bool>(true, false, false, true), false), true)), any(select(vec4<bool>(select(false, false, false), true, true, select(true, true, false)), vec4<bool>(true, true, true, true), true)));
                    global3 = vec4<u32>(global2[_wgslsmith_index_u32(_wgslsmith_add_u32(~_wgslsmith_div_u32(~0u, _wgslsmith_clamp_u32(global2[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(0u, 11u)], 11u)], 58739u, global2[_wgslsmith_index_u32(global3.x, 11u)])), _wgslsmith_add_u32(u_input.a.x, 1u)), 11u)], firstLeadingBit(_wgslsmith_dot_vec4_u32(select(select(vec4<u32>(88987u, 62098u, 4294967295u, u_input.a.x), vec4<u32>(40797u, u_input.b, 4294967295u, global2[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(6632u, 11u)], 11u)]), var_0.x), vec4<u32>(1u, 102687u, 1u, 1u), !vec4<bool>(false, false, var_0.x, false)), countOneBits(vec4<u32>(u_input.a.x, 2006u, 39065u, 15557u)) >> (_wgslsmith_add_vec4_u32(vec4<u32>(1u, global3.x, global3.x, 1u), vec4<u32>(u_input.b, global2[_wgslsmith_index_u32(4294967295u, 11u)], 1u, 1u)) % vec4<u32>(32u)))), abs(select(1u, global2[_wgslsmith_index_u32(firstLeadingBit(22296u), 11u)], true)) | _wgslsmith_clamp_u32(25465u, ~_wgslsmith_mod_u32(0u, global3.x), ~4294967295u), ~u_input.b);
                    var var_1 = ~u_input.a.zy;
                    global0 = 1i;
                }
                default: {
                    let var_0 = global1[_wgslsmith_index_u32(u_input.b, 23u)];
                    var var_1 = global1[_wgslsmith_index_u32(_wgslsmith_sub_u32(1u, global3.x), 23u)];
                    var var_2 = false;
                }
            }
            var var_0 = !(!select(select(select(vec4<bool>(false, false, false, true), vec4<bool>(false, true, false, true), vec4<bool>(false, true, false, true)), vec4<bool>(true, true, true, true), true), vec4<bool>(true, true, true, any(vec4<bool>(true, true, false, true))), true));
            let var_1 = Struct_1(_wgslsmith_f_op_f32(562f + 1f));
            let var_2 = var_1;
            for (var var_3 = i32(-2147483648); !(!(var_0.x || (firstTrailingBit(i32(-2147483648)) != (0i << (0u % 32u))))); var_3 -= 1i) {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                var_3 = _wgslsmith_mult_i32(i32(-1i) * -_wgslsmith_mult_i32(i32(-1i) * -1i, 41909i), _wgslsmith_sub_i32(55564i, i32(-1i) * -35136i));
            }
        }
        default: {
            for (var var_0: i32; !select(true, true, true); ) {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                let var_1 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(step(vec4<f32>(-398f, -809f, -1000f, -1530f), vec4<f32>(512f, -691f, -1026f, -1000f))), _wgslsmith_div_vec4_f32(vec4<f32>(-475f, 1059f, -898f, 833f), vec4<f32>(334f, -1454f, 1347f, 1000f)))))));
                var var_2 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(-1038f)) * _wgslsmith_f_op_f32(var_1.x + _wgslsmith_div_f32(_wgslsmith_f_op_f32(-511f), _wgslsmith_div_f32(var_1.x, _wgslsmith_f_op_f32(-2854f)))));
            }
            let var_0 = global1[_wgslsmith_index_u32(_wgslsmith_dot_vec4_u32(_wgslsmith_clamp_vec4_u32(~_wgslsmith_sub_vec4_u32(~vec4<u32>(4294967295u, u_input.a.x, 4294967295u, global3.x), max(vec4<u32>(u_input.a.x, global2[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(global3.x, 11u)], 11u)], 42788u, global3.x), vec4<u32>(80279u, global3.x, global2[_wgslsmith_index_u32(1u, 11u)], 88361u))), vec4<u32>(~11027u << (_wgslsmith_dot_vec4_u32(vec4<u32>(4294967295u, 1u, 1u, u_input.b), vec4<u32>(1u, u_input.a.x, 1u, global3.x)) % 32u), global3.x, 1u, firstLeadingBit(abs(global3.x))), select(_wgslsmith_clamp_vec4_u32(firstTrailingBit(vec4<u32>(45458u, global3.x, global3.x, u_input.a.x)), firstTrailingBit(vec4<u32>(0u, global3.x, global2[_wgslsmith_index_u32(4294967295u, 11u)], 65396u)), vec4<u32>(50824u, global2[_wgslsmith_index_u32(u_input.a.x, 11u)], global2[_wgslsmith_index_u32(0u, 11u)], global2[_wgslsmith_index_u32(0u, 11u)])), ~vec4<u32>(81983u, 4294967295u, global2[_wgslsmith_index_u32(u_input.a.x, 11u)], 112911u), select(any(vec4<bool>(false, true, true, true)), true, any(vec4<bool>(false, false, false, false))))), vec4<u32>(~u_input.b, global2[_wgslsmith_index_u32(_wgslsmith_mult_u32(1u, abs(u_input.b)) >> (10050u % 32u), 11u)], func_6(), func_6())), 23u)];
            loop {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                break;
            }
            let var_1 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(max(vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-192f) - _wgslsmith_f_op_f32(var_0.a * var_0.a)), 293f, _wgslsmith_f_op_f32(var_0.a + _wgslsmith_f_op_f32(f32(-1f) * -1022f))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(vec3<f32>(var_0.a, 1000f, 1171f) + vec3<f32>(var_0.a, var_0.a, -1990f)), vec3<f32>(-759f, -1027f, var_0.a)))))) - vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(var_0.a - -1289f)))), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-1f))), -1080f));
            if (false) {
                var var_2 = global2[_wgslsmith_index_u32(37256u, 11u)] >> (_wgslsmith_add_u32(0u, 0u) % 32u);
                return !select(false, false, any(vec4<bool>(true, true, true, true)));
            }
        }
    }
    var var_0 = vec2<f32>(1f, 1f);
    var var_1 = _wgslsmith_add_i32(-1i, _wgslsmith_mult_i32(-893i, _wgslsmith_sub_i32(i32(-1i) * -41977i, 0i)));
    if (!any(select(vec2<bool>(true, false), vec2<bool>(true, true), vec2<bool>(true, true))) || all(select(vec2<bool>(true, true), vec2<bool>(false, all(vec4<bool>(false, true, false, false))), true))) {
        var var_2 = Struct_1(_wgslsmith_f_op_f32(-1f));
    }
    return true;
}

fn func_1(arg_0: vec3<f32>) -> vec2<u32> {
    if (select(!any(vec4<bool>(true, true, true, true)), !func_2(), func_3(true, 1u).x)) {
        let var_0 = _wgslsmith_mod_vec2_u32(~select(~(~global3.yy), ~(~vec2<u32>(0u, global3.x)), vec2<bool>(true, true)), u_input.a.yy);
        if (true) {
            global2 = array<u32, 11>();
            var var_1 = ~abs(_wgslsmith_clamp_u32(1u, 4294967295u, _wgslsmith_dot_vec2_u32(~u_input.a.zz, reverseBits(u_input.a.yy))));
            let var_2 = global1[_wgslsmith_index_u32(9896u, 23u)];
            var var_3 = true;
        }
        loop {
            if (LOOP_COUNTERS[12u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
            continue;
        }
        global0 = _wgslsmith_sub_i32(-30954i, -(~(-(~27001i))));
    }
    var var_0 = func_3(all(vec2<bool>(all(vec2<bool>(true, false)), true)) && all(vec3<bool>(true, true, true)), global3.x);
    var var_1 = _wgslsmith_div_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(arg_0.x * _wgslsmith_f_op_f32(f32(-1f) * -1223f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1000f + -223f) * _wgslsmith_f_op_f32(-arg_0.x)))), _wgslsmith_f_op_f32(max(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-arg_0.x), 874f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(1229f))))), 786f), arg_0);
    if (var_0.x) {
    }
    var_1 = _wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-259f, var_1.x, -1337f))));
    return u_input.a.zx;
}

fn func_7(arg_0: vec2<f32>, arg_1: vec2<u32>) -> f32 {
    let var_0 = func_3(select(!func_3(true, arg_1.x).x, all(select(vec2<bool>(true, true), vec2<bool>(true, true), true)), _wgslsmith_dot_vec4_u32(vec4<u32>(635u, global3.x, 15456u, 1u), vec4<u32>(17575u, global2[_wgslsmith_index_u32(4294967295u, 11u)], arg_1.x, global3.x)) == ~6856u) & !select(false, false, true), global3.x);
    let var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1339f)));
    for (var var_2 = -1i; false; global2 = array<u32, 11>()) {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        continue;
    }
    let var_2 = _wgslsmith_f_op_f32(max(var_1, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_0.x - var_1))) * _wgslsmith_div_f32(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(trunc(-1015f)))), -837f))));
    loop {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        var var_3 = select(false, false, var_0.x);
    }
    return var_1;
}

fn func_8(arg_0: vec3<bool>, arg_1: Struct_1, arg_2: vec2<i32>) -> bool {
    var var_0 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_1.a) + 166f);
    global0 = arg_2.x;
    for (var var_1 = 2147483647i; _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(712f - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_1.a)))) <= _wgslsmith_f_op_f32(abs(arg_1.a)); var_1 -= 1i) {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
        let var_2 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(590f, _wgslsmith_f_op_f32(func_7(vec2<f32>(arg_1.a, arg_1.a), global3.xx))))) * arg_1.a);
        for (var var_3 = 6075i; var_3 > -48421i; var_3 += 1i) {
            if (LOOP_COUNTERS[16u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        }
        var_1 = 3577i;
        var var_3 = Struct_1(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -576f) - _wgslsmith_div_f32(-1420f, arg_1.a))))));
        loop {
            if (LOOP_COUNTERS[17u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
        }
    }
    var var_1 = Struct_1(405f);
    for (var var_2: i32; false; ) {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        switch (_wgslsmith_sub_i32(arg_2.x, _wgslsmith_sub_i32(_wgslsmith_dot_vec3_i32(-vec3<i32>(-27621i, arg_2.x, -1i), vec3<i32>(-1359i, arg_2.x, arg_2.x)), arg_2.x) >> (global2[_wgslsmith_index_u32(~func_4(-782f, vec2<bool>(true, true)), 11u)] % 32u))) {
            case -1i: {
                var var_3 = Struct_1(1659f);
                let var_4 = _wgslsmith_f_op_f32(-_wgslsmith_div_f32(var_1.a, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_3.a) - _wgslsmith_div_f32(-370f, _wgslsmith_f_op_f32(arg_1.a + 629f)))));
            }
            case 0i: {
                let var_3 = Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-var_1.a)))))));
                global3 = ~vec4<u32>(min(~global2[_wgslsmith_index_u32(4294967295u, 11u)], 18704u) ^ global2[_wgslsmith_index_u32(max(96930u, ~0u), 11u)], global3.x, global3.x >> (75907u % 32u), _wgslsmith_add_u32(~global2[_wgslsmith_index_u32(1u, 11u)], ~95873u & global2[_wgslsmith_index_u32(63642u, 11u)]));
                continue;
            }
            default: {
                var var_3 = select(arg_0.yy, vec2<bool>(arg_0.x, arg_0.x), select(select(arg_0.xy, select(func_3(false, 0u), !vec2<bool>(arg_0.x, arg_0.x), any(vec2<bool>(arg_0.x, true))), arg_0.yy), !(!arg_0.xz), !(_wgslsmith_dot_vec4_i32(vec4<i32>(arg_2.x, 951i, arg_2.x, arg_2.x), vec4<i32>(-38678i, arg_2.x, arg_2.x, 21258i)) > arg_2.x)));
                let var_4 = ~(_wgslsmith_div_u32(_wgslsmith_clamp_u32(~14573u, 22151u, max(20269u, global3.x)), u_input.a.x) | u_input.a.x);
            }
        }
        continue;
    }
    return !(!any(select(select(arg_0.yx, vec2<bool>(true, false), false), vec2<bool>(arg_0.x, arg_0.x), true)));
}

@compute
@workgroup_size(1)
fn main() {
    global0 = 6887i;
    for (var var_0 = -1i; true | func_8(select(vec3<bool>(true, true, all(vec4<bool>(true, false, true, true))), select(select(vec3<bool>(false, false, false), vec3<bool>(true, false, true), vec3<bool>(true, true, true)), vec3<bool>(true, true, true), vec3<bool>(true, false, true)), vec3<bool>(true, false, true)), Struct_1(_wgslsmith_f_op_f32(func_7(_wgslsmith_f_op_vec2_f32(select(vec2<f32>(-1264f, 645f), vec2<f32>(1450f, -1047f), false)), func_1(vec3<f32>(-1305f, 878f, 1000f))))), vec2<i32>(reverseBits(-1i), 1i)); ) {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
    }
    var var_0 = select(vec4<u32>(func_1(_wgslsmith_f_op_vec3_f32(-vec3<f32>(1000f, -741f, -180f))).x, ~global2[_wgslsmith_index_u32(34537u, 11u)], _wgslsmith_sub_u32(global3.x, 0u), _wgslsmith_dot_vec4_u32(_wgslsmith_clamp_vec4_u32(abs(vec4<u32>(75577u, 11379u, u_input.a.x, 1u)), ~vec4<u32>(global3.x, 0u, 4294967295u, 4294967295u), _wgslsmith_add_vec4_u32(vec4<u32>(global2[_wgslsmith_index_u32(global3.x, 11u)], 25018u, global2[_wgslsmith_index_u32(0u, 11u)], global2[_wgslsmith_index_u32(89753u, 11u)]), vec4<u32>(15408u, global2[_wgslsmith_index_u32(4294967295u, 11u)], 32299u, 64020u))), _wgslsmith_mult_vec4_u32(vec4<u32>(0u, global2[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(4294967295u, 11u)], 11u)], 11u)], 4294967295u, u_input.b) | vec4<u32>(u_input.a.x, u_input.a.x, 4294967295u, 1u), vec4<u32>(global3.x, u_input.b, global3.x, global2[_wgslsmith_index_u32(4294967295u, 11u)]) & vec4<u32>(25865u, 1u, 123016u, global2[_wgslsmith_index_u32(54130u, 11u)])))), ~_wgslsmith_add_vec4_u32(max(~vec4<u32>(global2[_wgslsmith_index_u32(16917u, 11u)], 55310u, 1u, global2[_wgslsmith_index_u32(global3.x, 11u)]), _wgslsmith_clamp_vec4_u32(vec4<u32>(0u, global2[_wgslsmith_index_u32(25734u, 11u)], global2[_wgslsmith_index_u32(0u, 11u)], u_input.b), vec4<u32>(global2[_wgslsmith_index_u32(u_input.a.x, 11u)], 24760u, global3.x, 0u), vec4<u32>(4294967295u, 18627u, global2[_wgslsmith_index_u32(u_input.b, 11u)], u_input.a.x))), _wgslsmith_mult_vec4_u32(select(vec4<u32>(13484u, u_input.b, global3.x, global2[_wgslsmith_index_u32(global3.x, 11u)]), vec4<u32>(global3.x, 7993u, u_input.b, global2[_wgslsmith_index_u32(22289u, 11u)]), vec4<bool>(false, false, true, false)), ~vec4<u32>(global3.x, 8005u, 0u, 1u))), !vec4<bool>(any(vec4<bool>(true, false, false, true)), false, all(vec3<bool>(false, true, true)), ~global3.x >= _wgslsmith_mod_u32(4294967295u, 1u)));
    var var_1 = Struct_1(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-175f - _wgslsmith_div_f32(_wgslsmith_f_op_f32(-2179f - 367f), _wgslsmith_f_op_f32(1572f + 642f))), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(ceil(-1000f)), _wgslsmith_f_op_f32(max(619f, 230f)))), _wgslsmith_f_op_f32(-979f)))));
    switch (_wgslsmith_clamp_i32(0i, -_wgslsmith_mult_i32(9470i, ~firstLeadingBit(-1i)), 1i)) {
        case -7413i: {
            if (true) {
                let var_2 = Struct_1(var_1.a);
            }
            var_1 = global1[_wgslsmith_index_u32(~(select(~global3.x, global2[_wgslsmith_index_u32(50637u, 11u)], false) >> (4294967295u % 32u)), 23u)];
            var var_2 = -217f;
            switch (-21636i) {
                case -7595i: {
                    var var_3 = _wgslsmith_add_vec4_u32(~vec4<u32>(u_input.a.x | 742u, _wgslsmith_add_u32(u_input.a.x, _wgslsmith_div_u32(global2[_wgslsmith_index_u32(var_0.x, 11u)], var_0.x)), reverseBits(var_0.x), max(var_0.x, u_input.b)), ~(~(~(~vec4<u32>(0u, 2356u, global3.x, var_0.x)))));
                    var_3 = vec4<u32>(var_3.x, 67644u, _wgslsmith_mod_u32(~(~var_0.x), var_0.x), ~(~firstLeadingBit(select(1u, var_0.x, true))));
                    var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(1410f)) + _wgslsmith_f_op_f32(1187f * 407f)))) - var_1.a));
                    let var_4 = ~func_6();
                }
                case i32(-2147483648): {
                    let var_3 = Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_1.a)) + var_1.a)));
                    global3 = vec4<u32>(~_wgslsmith_dot_vec2_u32(vec2<u32>(~39198u, ~1u), ~global3.xz & min(global3.yw, var_0.wz)), u_input.a.x, u_input.b, _wgslsmith_mult_u32(_wgslsmith_div_u32(1u, 4294967295u) | ~_wgslsmith_add_u32(global2[_wgslsmith_index_u32(var_0.x, 11u)], global2[_wgslsmith_index_u32(0u, 11u)]), _wgslsmith_dot_vec3_u32(~u_input.a, max(global3.yzw, reverseBits(vec3<u32>(u_input.b, 15957u, 1034u))))));
                }
                case 2147483647i: {
                }
                case -1i: {
                }
                default: {
                    let var_3 = abs(abs(vec2<i32>(1i, 2147483647i)));
                    var_1 = Struct_1(var_1.a);
                    var_2 = var_1.a;
                }
            }
        }
        case 21923i: {
            let var_2 = Struct_1(_wgslsmith_f_op_f32(-var_1.a));
            let var_3 = vec2<f32>(var_1.a, -556f);
        }
        default: {
            let var_2 = false;
            switch (_wgslsmith_dot_vec3_i32(_wgslsmith_clamp_vec3_i32(~(~(vec3<i32>(i32(-2147483648), 44631i, -32186i) << (vec3<u32>(0u, u_input.a.x, u_input.a.x) % vec3<u32>(32u)))), vec3<i32>(1i, 1i, 1i), max(vec3<i32>(~0i, 1i, _wgslsmith_mod_i32(i32(-2147483648), 52757i)), func_5(-vec4<i32>(-8906i, 5475i, 2147483647i, 0i), select(vec4<bool>(var_2, false, var_2, false), vec4<bool>(true, true, true, true), vec4<bool>(var_2, var_2, false, false)), var_1.a))), ~vec3<i32>(firstTrailingBit(1i) | ~2147483647i, abs(_wgslsmith_dot_vec3_i32(vec3<i32>(-33492i, 1984i, i32(-2147483648)), vec3<i32>(-49090i, -1i, -2901i))), ~1i))) {
                default: {
                    var var_3 = vec2<u32>(24926u, ~var_0.x);
                    let var_4 = global1[_wgslsmith_index_u32(global3.x, 23u)];
                    var var_5 = Struct_1(_wgslsmith_f_op_f32(f32(-1f) * -1629f));
                    let var_6 = global1[_wgslsmith_index_u32(43758u, 23u)];
                    var_5 = global1[_wgslsmith_index_u32(_wgslsmith_clamp_u32(~45090u, firstTrailingBit(func_6()), u_input.b), 23u)];
                }
            }
        }
    }
    var_0 = abs(firstLeadingBit(~reverseBits(_wgslsmith_mod_vec4_u32(vec4<u32>(var_0.x, 21304u, 4294967295u, u_input.b), vec4<u32>(58127u, 15572u, 43089u, 4294967295u)))));
    for (var var_2 = ~_wgslsmith_dot_vec4_i32(~abs(firstTrailingBit(vec4<i32>(i32(-2147483648), 1i, 2147483647i, i32(-2147483648)))), vec4<i32>(-1i) * -select(vec4<i32>(-26703i, 0i, 2147483647i, 1i), vec4<i32>(-17652i, -1i, 0i, 20771i), vec4<bool>(true, false, false, true))); true || any(select(vec2<bool>(any(vec2<bool>(false, true)), true), func_3(any(vec2<bool>(false, false)), _wgslsmith_dot_vec4_u32(vec4<u32>(1u, 15694u, u_input.b, u_input.b), vec4<u32>(u_input.b, 0u, 1u, 69977u))), vec2<bool>(false, 12243u <= global2[_wgslsmith_index_u32(var_0.x, 11u)]))); var_2 += 1i) {
        if (LOOP_COUNTERS[20u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
    }
    var var_2 = _wgslsmith_f_op_f32(f32(-1f) * -1055f);
    var var_3 = _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-var_1.a), var_1.a, any(select(vec4<bool>(true, false, false, false), vec4<bool>(true, true, true, false), true)))), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(select(var_1.a, _wgslsmith_f_op_f32(f32(-1f) * -505f), true)), _wgslsmith_f_op_f32(var_1.a * _wgslsmith_f_op_f32(f32(-1f) * -611f)))), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(f32(-1f) * -1595f), _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(min(-913f, 136f)))))), var_1.a));
    let x = u_input.a;
    s_output = StorageBuffer(select(_wgslsmith_sub_vec2_u32(u_input.a.zy, ~vec2<u32>(4294967295u, u_input.b)), global3.xw, !any(vec3<bool>(true, true, true)) || true), _wgslsmith_add_vec3_u32(u_input.a ^ var_0.yyw, global3.xxz), _wgslsmith_f_op_vec3_f32(-var_3.yww), 1u, var_3.xz);
}

`;