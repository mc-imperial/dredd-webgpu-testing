export const input = [153,106,187,121,29,233,122,225,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [153,106,187,121,29,233,122,225,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[153,106,187,121,29,233,122,225]}
// Seed: 9831575787594967206

struct Struct_1 {
    a: i32,
    b: bool,
}

struct Struct_2 {
    a: i32,
}

struct UniformBuffer {
    a: i32,
    b: i32,
}

struct StorageBuffer {
    a: vec4<f32>,
    b: f32,
    c: vec2<i32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: vec4<i32>;

var<private> LOOP_COUNTERS: array<u32, 13>;

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn func_6(arg_0: vec2<i32>, arg_1: f32, arg_2: Struct_1, arg_3: f32) -> vec4<i32> {
    global0 = firstTrailingBit(vec4<i32>(reverseBits(~(~arg_2.a)), -41138i, _wgslsmith_sub_i32(-abs(arg_0.x), ~_wgslsmith_add_i32(0i, global0.x)), -firstLeadingBit(-1i)));
    global0 = abs(max(vec4<i32>(2147483647i, _wgslsmith_div_i32(arg_0.x, -1i), -13702i, 1i) & ~reverseBits(vec4<i32>(global0.x, global0.x, 64359i, global0.x)), _wgslsmith_clamp_vec4_i32(_wgslsmith_mod_vec4_i32(max(vec4<i32>(2147483647i, u_input.a, 1i, 4762i), vec4<i32>(-1i, i32(-2147483648), -5555i, arg_0.x)), max(vec4<i32>(u_input.b, 30484i, 15359i, 2147483647i), vec4<i32>(-17512i, i32(-2147483648), 2147483647i, i32(-2147483648)))), vec4<i32>(-1i) * -vec4<i32>(-42185i, -1972i, 26422i, 50641i), select(vec4<i32>(arg_0.x, arg_2.a, -45491i, global0.x), -vec4<i32>(arg_0.x, global0.x, 2147483647i, 29753i), vec4<bool>(true, arg_2.b, arg_2.b, arg_2.b)))));
    let var_0 = _wgslsmith_f_op_f32(-423f - 1f);
    for (; ; ) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        global0 = ~(-_wgslsmith_sub_vec4_i32(vec4<i32>(-37301i, _wgslsmith_add_i32(8716i, 0i), global0.x ^ 32223i, i32(-1i) * i32(-2147483648)), vec4<i32>(1i, arg_0.x, global0.x, 1i) ^ vec4<i32>(u_input.a, 8886i, u_input.b, u_input.b)));
        switch (-abs(-firstLeadingBit(-arg_2.a))) {
            case i32(-2147483648): {
            }
            default: {
                var var_1 = reverseBits(global0.wxz);
            }
        }
    }
    global0 = vec4<i32>(_wgslsmith_div_i32(select(0i, countOneBits(arg_0.x), arg_2.b), -10026i) << (max(_wgslsmith_dot_vec2_u32(firstLeadingBit(vec2<u32>(900u, 51556u)), vec2<u32>(1u, 1u)), ~_wgslsmith_div_u32(4294967295u, 20032u)) % 32u), arg_2.a, ~(-23870i), 1i);
    return min(select(_wgslsmith_sub_vec4_i32(select(~vec4<i32>(-13833i, i32(-2147483648), arg_2.a, 1i), ~vec4<i32>(arg_0.x, 25131i, arg_0.x, i32(-2147483648)), vec4<bool>(false, arg_2.b, arg_2.b, true)), ~abs(vec4<i32>(28591i, global0.x, -38160i, arg_0.x))), _wgslsmith_mod_vec4_i32(firstLeadingBit(vec4<i32>(global0.x, 57i, arg_2.a, arg_2.a) | vec4<i32>(-1i, global0.x, -1i, -17535i)), vec4<i32>(firstLeadingBit(0i), -14212i, ~20138i, i32(-2147483648))), all(vec3<bool>(arg_2.a > -42844i, arg_2.b, true))), -vec4<i32>(u_input.a, ~42162i, ~u_input.a, 0i) & ~(-reverseBits(vec4<i32>(-21340i, u_input.b, -1i, arg_0.x))));
}

fn func_5() -> f32 {
    global0 = -firstTrailingBit(_wgslsmith_mod_vec4_i32(_wgslsmith_add_vec4_i32(countOneBits(vec4<i32>(4326i, 2147483647i, -29495i, global0.x)), -vec4<i32>(global0.x, global0.x, u_input.b, -38099i)), abs(firstLeadingBit(vec4<i32>(-20583i, -1i, global0.x, -1i)))));
    for (var var_0 = u_input.b; var_0 != 2147483647i; ) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        continue;
    }
    var var_0 = Struct_2(0i);
    switch (-1705i) {
        case 1i: {
        }
        case 23107i: {
            var var_1 = ~1i;
        }
        default: {
            switch (~_wgslsmith_div_i32(u_input.a, ~_wgslsmith_mod_i32(u_input.a, firstLeadingBit(u_input.a)))) {
                case 0i: {
                    var_0 = Struct_2(~global0.x);
                    return 100f;
                }
                default: {
                    let var_1 = ~global0.xw;
                    global0 = _wgslsmith_add_vec4_i32(func_6(firstTrailingBit(-global0.yy), _wgslsmith_f_op_f32(-1949f - _wgslsmith_f_op_f32(f32(-1f) * -204f)), Struct_1(i32(-2147483648), all(vec3<bool>(false, true, false))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-194f), 1000f)), abs(func_6(countOneBits(vec2<i32>(u_input.a, u_input.a)), _wgslsmith_f_op_f32(round(-256f)), Struct_1(var_0.a, true), _wgslsmith_f_op_f32(f32(-1f) * -1000f)))) >> (vec4<u32>(~firstTrailingBit(~21564u), ~max(reverseBits(6034u), ~1u), countOneBits(min(~0u, ~4294967295u)), _wgslsmith_sub_u32(~_wgslsmith_dot_vec3_u32(vec3<u32>(1u, 7943u, 22332u), vec3<u32>(5574u, 72378u, 4294967295u)), ~_wgslsmith_div_u32(44895u, 61517u))) % vec4<u32>(32u));
                }
            }
            for (var var_1 = ~var_0.a; var_1 <= -1i; var_1 += 1i) {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
                let var_2 = ~vec4<u32>(1u, 1u, 1u, 1u) << (vec4<u32>(4294967295u, 1u, ~abs(_wgslsmith_dot_vec2_u32(vec2<u32>(4294967295u, 4294967295u), vec2<u32>(29195u, 1u))), firstTrailingBit(~45936u) >> (~28037u % 32u)) % vec4<u32>(32u));
                let var_3 = ~4294967295u;
                let var_4 = _wgslsmith_mult_vec4_i32(min(~func_6(-vec2<i32>(u_input.b, 1i), 383f, Struct_1(global0.x, false), _wgslsmith_f_op_f32(step(1766f, 1600f))), ~select(_wgslsmith_add_vec4_i32(vec4<i32>(i32(-2147483648), i32(-2147483648), i32(-2147483648), -24638i), vec4<i32>(-1i, var_0.a, var_0.a, -1i)), countOneBits(vec4<i32>(2147483647i, -20829i, -5913i, global0.x)), true)), select(max(_wgslsmith_add_vec4_i32(vec4<i32>(var_0.a, global0.x, 2147483647i, 3173i) & vec4<i32>(u_input.b, 0i, -53666i, global0.x), _wgslsmith_div_vec4_i32(vec4<i32>(var_0.a, 2147483647i, -1i, -1i), vec4<i32>(u_input.a, var_0.a, 2147483647i, u_input.b))), max(vec4<i32>(global0.x, 0i, u_input.a, -69213i), firstLeadingBit(vec4<i32>(u_input.a, -9467i, global0.x, -1i)))), vec4<i32>(i32(-2147483648), 1i, abs(u_input.a), _wgslsmith_clamp_i32(1i, 18628i, -33072i & var_0.a)), var_3 >= ~var_3));
                continue;
            }
        }
    }
    let var_1 = _wgslsmith_div_i32(var_0.a, ~(-13721i));
    return _wgslsmith_f_op_f32(f32(-1f) * -1303f);
}

fn func_4(arg_0: vec2<u32>, arg_1: vec3<f32>) -> i32 {
    let var_0 = _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(-1835f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1307f)))) >= _wgslsmith_f_op_f32(round(arg_1.x));
    var var_1 = -351f > _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_1.x) - _wgslsmith_f_op_f32(func_5())) - arg_1.x);
    global0 = vec4<i32>(-1i) * -min(_wgslsmith_mod_vec4_i32(max(vec4<i32>(u_input.b, u_input.b, 17018i, u_input.b), vec4<i32>(global0.x, -25617i, -9522i, 0i)), vec4<i32>(global0.x, 0i, 1i, u_input.a) | vec4<i32>(-20986i, 1i, u_input.b, -36985i)), vec4<i32>(~global0.x, global0.x, u_input.a ^ u_input.a, min(u_input.b, 2147483647i)));
    let var_2 = vec2<u32>(78199u, 37977u);
    let var_3 = Struct_2(firstTrailingBit(abs(_wgslsmith_dot_vec3_i32(max(global0.zww, vec3<i32>(22566i, u_input.b, 28415i)), _wgslsmith_clamp_vec3_i32(global0.zxz, global0.wxw, vec3<i32>(u_input.a, global0.x, 0i))))));
    return 0i;
}

fn func_3(arg_0: f32, arg_1: Struct_2, arg_2: vec3<bool>) -> bool {
    global0 = vec4<i32>(firstLeadingBit(global0.x), func_4(~(~(~vec2<u32>(19695u, 1u))), _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(floor(_wgslsmith_div_vec3_f32(vec3<f32>(arg_0, -1061f, arg_0), vec3<f32>(arg_0, arg_0, arg_0)))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(arg_0, -1399f, -2919f))), false))), _wgslsmith_clamp_i32(u_input.b, ~70538i, countOneBits(1i)), 1i);
    switch (_wgslsmith_dot_vec3_i32(~(-(~vec3<i32>(u_input.a, global0.x, u_input.b))), _wgslsmith_div_vec3_i32(global0.xxw, max(-_wgslsmith_sub_vec3_i32(vec3<i32>(arg_1.a, arg_1.a, 0i), global0.yxx), global0.zyz)))) {
        case 69955i: {
            loop {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
                global0 = vec4<i32>(-10950i, u_input.a, global0.x, ~reverseBits(_wgslsmith_sub_i32(firstTrailingBit(arg_1.a), u_input.a >> (1u % 32u))));
                let var_0 = select(vec2<i32>(48668i, reverseBits(abs(-32127i))), -global0.xz, !select(select(!arg_2.zy, select(vec2<bool>(arg_2.x, true), vec2<bool>(false, true), arg_2.yx), vec2<bool>(false, false)), arg_2.xz, !all(arg_2.xx)));
                global0 = _wgslsmith_sub_vec4_i32(-vec4<i32>(28913i, i32(-1i) * -2465i, 19526i, _wgslsmith_add_i32(-55121i, 78452i)), _wgslsmith_clamp_vec4_i32(~(firstLeadingBit(vec4<i32>(u_input.a, -1i, arg_1.a, 2147483647i)) & -vec4<i32>(arg_1.a, u_input.a, 52434i, u_input.b)), _wgslsmith_sub_vec4_i32(~vec4<i32>(6234i, -20425i, 2147483647i, u_input.a), vec4<i32>(1i, 17998i, countOneBits(2147483647i), func_6(vec2<i32>(i32(-2147483648), global0.x), arg_0, Struct_1(var_0.x, true), arg_0).x)), vec4<i32>(_wgslsmith_sub_i32(countOneBits(arg_1.a), global0.x), select(-var_0.x, u_input.a, arg_2.x || true), -_wgslsmith_clamp_i32(u_input.a, var_0.x, arg_1.a), i32(-1i) * i32(-2147483648))));
                var var_1 = Struct_1(-func_4(vec2<u32>(1u, 1u), vec3<f32>(arg_0, _wgslsmith_f_op_f32(-2063f), _wgslsmith_f_op_f32(1839f + arg_0))), false);
                break;
            }
        }
        case -1195i: {
            let var_0 = arg_2;
            if (arg_2.x) {
                let var_1 = arg_1;
                global0 = select(abs(firstTrailingBit(vec4<i32>(-8017i, i32(-2147483648), var_1.a, var_1.a)) ^ (vec4<i32>(arg_1.a, global0.x, 0i, arg_1.a) & vec4<i32>(var_1.a, arg_1.a, 41009i, -10189i))) ^ vec4<i32>(firstTrailingBit(0i), var_1.a, ~_wgslsmith_mult_i32(4265i, arg_1.a), 16446i), _wgslsmith_mult_vec4_i32(~func_6(-vec2<i32>(17344i, 33112i), _wgslsmith_f_op_f32(-arg_0), Struct_1(u_input.b, true), _wgslsmith_f_op_f32(-1042f + arg_0)), _wgslsmith_sub_vec4_i32(select(~vec4<i32>(arg_1.a, u_input.b, -23214i, global0.x), -vec4<i32>(i32(-2147483648), -1i, var_1.a, -36674i), true), ~(-vec4<i32>(arg_1.a, var_1.a, global0.x, arg_1.a)))), !(!select(true, arg_2.x, true)));
                var var_2 = _wgslsmith_sub_u32(49216u, 6592u);
                var var_3 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(arg_0)) + _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(arg_0 - -351f))));
            }
            loop {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                global0 = ~(vec4<i32>(-1i) * -max(vec4<i32>(u_input.a, -1i, arg_1.a, -17375i), vec4<i32>(0i, -775i, -6128i, u_input.b))) ^ (countOneBits(func_6(global0.zw, arg_0, Struct_1(global0.x, arg_2.x), _wgslsmith_f_op_f32(f32(-1f) * -1989f))) ^ func_6(countOneBits(global0.xx | global0.wx), arg_0, Struct_1(42418i, var_0.x), _wgslsmith_f_op_f32(exp2(_wgslsmith_div_f32(arg_0, arg_0)))));
                break;
            }
        }
        case 0i: {
            switch (_wgslsmith_dot_vec4_i32(vec4<i32>(~abs(-25902i), arg_1.a, _wgslsmith_dot_vec3_i32(abs(countOneBits(global0.wwz)), global0.ywx), countOneBits(abs(1i))), vec4<i32>(-15435i, global0.x, 0i, ~global0.x))) {
                case 45221i: {
                    var var_0 = _wgslsmith_dot_vec4_u32(~firstTrailingBit(vec4<u32>(1u, 1u, 1u, 1u)) ^ vec4<u32>(1u, 1u, 1u, 1u), min(abs(~vec4<u32>(47174u, 1u, 1u, 95639u)), vec4<u32>(_wgslsmith_clamp_u32(1u, 42431u, 54478u), reverseBits(94769u), ~57043u, _wgslsmith_clamp_u32(97214u, 0u, 769u)) >> (_wgslsmith_sub_vec4_u32(_wgslsmith_clamp_vec4_u32(vec4<u32>(4294967295u, 0u, 5790u, 77894u), vec4<u32>(43332u, 36156u, 16063u, 25897u), vec4<u32>(27574u, 1u, 4294967295u, 19272u)), vec4<u32>(1u, 1u, 1u, 1u)) % vec4<u32>(32u))));
                }
                default: {
                    return any(vec3<bool>(!(!(arg_2.x | arg_2.x)), arg_2.x || arg_2.x, _wgslsmith_add_i32(_wgslsmith_mod_i32(-19533i, 2147483647i), ~arg_1.a) >= select(-arg_1.a, ~global0.x, false)));
                }
            }
        }
        case 2147483647i: {
        }
        default: {
        }
    }
    if (false | !(!(!arg_2.x))) {
        var var_0 = vec4<f32>(_wgslsmith_f_op_f32(755f - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(floor(145f)))))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(max(404f, arg_0)), _wgslsmith_f_op_f32(arg_0 - -1000f)))) - arg_0), _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-arg_0))), 192f);
        var_0 = _wgslsmith_div_vec4_f32(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_0, var_0.x, 1000f, 1698f)) * _wgslsmith_f_op_vec4_f32(abs(vec4<f32>(1159f, var_0.x, var_0.x, var_0.x)))))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(var_0.x, var_0.x, 1291f, var_0.x) + vec4<f32>(arg_0, var_0.x, 761f, 567f)))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(exp2(vec4<f32>(arg_0, -1491f, var_0.x, -190f))))) + _wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(abs(vec4<f32>(951f, 472f, arg_0, -735f)))))))));
    }
    var var_0 = ~vec3<u32>(~min(0u, _wgslsmith_sub_u32(4294967295u, 4294967295u)), min(abs(firstTrailingBit(146993u)), _wgslsmith_mult_u32(~4294967295u, 39642u)), reverseBits(~_wgslsmith_add_u32(77688u, 13632u)));
    let var_1 = countOneBits(u_input.a);
    return arg_2.x;
}

fn func_7(arg_0: f32, arg_1: vec4<bool>, arg_2: Struct_1) -> Struct_2 {
    switch (-(~(i32(-2147483648)))) {
        case -9329i: {
            global0 = vec4<i32>(-62628i, arg_2.a | -(~u_input.b), _wgslsmith_sub_i32(arg_2.a, global0.x), -34668i) << (~select(~(~vec4<u32>(4294967295u, 1u, 82710u, 4294967295u)), ~reverseBits(vec4<u32>(4294967295u, 6317u, 0u, 41943u)), vec4<bool>(arg_1.x || arg_1.x, arg_1.x, arg_1.x, arg_2.b && arg_1.x)) % vec4<u32>(32u));
        }
        default: {
            switch (_wgslsmith_mult_i32(2147483647i, -u_input.a)) {
                case -1i: {
                    global0 = abs(countOneBits(func_6(global0.wz, _wgslsmith_f_op_f32(func_5()), Struct_1(func_4(vec2<u32>(61908u, 0u), vec3<f32>(arg_0, arg_0, -1000f)), true), arg_0)));
                    let var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(floor(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-arg_0), arg_0))), -599f)));
                    let var_1 = Struct_2(-arg_2.a & -u_input.a);
                    let var_2 = arg_2;
                    global0 = vec4<i32>(reverseBits(-_wgslsmith_clamp_i32(global0.x, 1i, ~18387i)), 0i, -2147483647i, max(-firstLeadingBit(0i), ~(-arg_2.a)));
                }
                case 2147483647i: {
                    let var_0 = Struct_2(arg_2.a);
                }
                case i32(-2147483648): {
                    var var_0 = _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(arg_0, arg_0) - vec2<f32>(-150f, -132f))) - _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(-659f, arg_0)))), _wgslsmith_f_op_vec2_f32(_wgslsmith_div_vec2_f32(vec2<f32>(arg_0, -176f), _wgslsmith_f_op_vec2_f32(-vec2<f32>(arg_0, 1000f))) - _wgslsmith_f_op_vec2_f32(vec2<f32>(459f, arg_0) * _wgslsmith_div_vec2_f32(vec2<f32>(-1144f, 1254f), vec2<f32>(arg_0, arg_0)))), arg_1.x)), vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(arg_0))), _wgslsmith_f_op_f32(f32(-1f) * -504f)));
                }
                case -32188i: {
                    global0 = func_6(global0.yw & vec2<i32>(u_input.a, global0.x), _wgslsmith_f_op_f32(-arg_0), arg_2, arg_0);
                    global0 = vec4<i32>(_wgslsmith_mult_i32(-36191i, u_input.a), abs(reverseBits(min(-u_input.a, reverseBits(arg_2.a)))), global0.x, min(max(global0.x, -func_6(global0.yw, arg_0, arg_2, 2924f).x), 0i));
                    var var_0 = arg_2;
                    let var_1 = Struct_1(_wgslsmith_mod_i32(arg_2.a, abs(global0.x)), true);
                }
                default: {
                    global0 = vec4<i32>(43102i, -(i32(-1i) * -14149i), _wgslsmith_div_i32(_wgslsmith_add_i32(1i, ~u_input.a), -arg_2.a), ~(~_wgslsmith_mod_i32(~0i, 1i)));
                    let var_0 = arg_2;
                }
            }
        }
    }
    global0 = vec4<i32>(12009i, select(_wgslsmith_add_i32(_wgslsmith_dot_vec3_i32(global0.xwy << (vec3<u32>(4659u, 59645u, 0u) % vec3<u32>(32u)), global0.xxx), -countOneBits(u_input.a)), min(firstTrailingBit(arg_2.a >> (34043u % 32u)), ~countOneBits(global0.x)), true), ~func_6(global0.yx, _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-arg_0))), Struct_1(countOneBits(-19110i), arg_1.x), 274f).x, arg_2.a);
    switch (_wgslsmith_dot_vec3_i32(global0.yzz >> (vec3<u32>(52419u, firstTrailingBit(56747u), 1u) % vec3<u32>(32u)), _wgslsmith_add_vec3_i32(global0.zxx, global0.xxz))) {
        case 21833i: {
            for (var var_0 = 32122i; ; var_0 += 1i) {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                global0 = vec4<i32>(arg_2.a, ~_wgslsmith_add_i32(19498i, -1i), max(global0.x, -25984i), ~_wgslsmith_mod_i32(-18345i, ~_wgslsmith_dot_vec4_i32(vec4<i32>(2147483647i, global0.x, global0.x, 4635i), vec4<i32>(global0.x, global0.x, arg_2.a, u_input.b))));
                var var_1 = vec4<bool>(all(select(arg_1.zzz, !(!vec3<bool>(false, arg_1.x, true)), !(true & arg_1.x))), true, !select(arg_1.x || true, all(!arg_1), false), func_3(_wgslsmith_f_op_f32(1097f - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0))), Struct_2(arg_2.a), vec3<bool>(arg_2.b, arg_2.b, true)));
            }
        }
        case 2147483647i: {
            global0 = _wgslsmith_div_vec4_i32(vec4<i32>(-u_input.b, ~(i32(-1i) * -64180i), 0i, u_input.a), vec4<i32>(_wgslsmith_clamp_i32(-2147483647i, global0.x, arg_2.a) | global0.x, arg_2.a, _wgslsmith_mod_i32(i32(-2147483648), global0.x >> (1u % 32u)), u_input.a ^ 1i));
            loop {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                let var_0 = i32(-2147483648);
                var var_1 = arg_2;
                var_1 = arg_2;
            }
            switch (_wgslsmith_dot_vec3_i32(-func_6(vec2<i32>(u_input.a << (0u % 32u), -global0.x), arg_0, arg_2, _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(func_5())))).yzy, vec3<i32>(i32(-1i) * -_wgslsmith_clamp_i32(1i, -8884i, 2147483647i), ~0i, func_4(_wgslsmith_sub_vec2_u32(~vec2<u32>(0u, 41433u), _wgslsmith_mod_vec2_u32(vec2<u32>(1u, 0u), vec2<u32>(4294967295u, 4294967295u))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(arg_0, arg_0, arg_0)))))))) {
                case 1i: {
                    let var_0 = Struct_2(u_input.a);
                    var var_1 = any(vec4<bool>(!(!any(arg_1)), arg_1.x, _wgslsmith_mod_u32(1u, countOneBits(31114u)) <= firstTrailingBit(1u), true));
                }
                default: {
                    var var_0 = !select(vec3<bool>(arg_1.x, true, func_3(arg_0, Struct_2(arg_2.a), vec3<bool>(arg_2.b, false, arg_1.x)) | any(vec4<bool>(true, arg_1.x, arg_2.b, arg_1.x))), select(vec3<bool>(all(vec2<bool>(arg_2.b, false)), !arg_1.x, true), vec3<bool>(-648f <= arg_0, false, true), !select(arg_1.xxy, vec3<bool>(arg_1.x, arg_1.x, arg_1.x), arg_1.xwy)), vec3<bool>(any(select(arg_1.yyz, vec3<bool>(true, false, false), arg_1.yxw)), true, arg_1.x));
                    global0 = vec4<i32>(func_4(vec2<u32>(1u, 1u), _wgslsmith_div_vec3_f32(vec3<f32>(arg_0, 486f, 1763f), vec3<f32>(-532f, 681f, arg_0))) | (-1i ^ max(arg_2.a, u_input.a)), _wgslsmith_mod_i32(u_input.a, -global0.x), global0.x, global0.x) << (~abs(reverseBits(vec4<u32>(1u, 1u, 1u, 1u))) % vec4<u32>(32u));
                    var var_1 = Struct_1(arg_2.a, true);
                }
            }
            let var_0 = !(!arg_2.b);
        }
        case -37561i: {
        }
        default: {
            let var_0 = ~_wgslsmith_sub_vec3_i32(max(~_wgslsmith_add_vec3_i32(global0.www, vec3<i32>(1i, 21863i, u_input.a)), vec3<i32>(countOneBits(u_input.a), -63972i, ~global0.x)), ~global0.xxw);
            return Struct_2(-1670i);
        }
    }
    return Struct_2(65258i);
}

fn func_2(arg_0: vec2<f32>, arg_1: vec4<bool>, arg_2: i32) -> vec4<i32> {
    global0 = vec4<i32>(5303i, u_input.b, 100132i, 5081i);
    let var_0 = 12976i;
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        loop {
            if (LOOP_COUNTERS[8u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
            break;
        }
        continue;
    }
    var var_1 = -global0.wwz ^ vec3<i32>(var_0, abs(var_0), 52452i);
    var var_2 = func_7(_wgslsmith_f_op_f32(1000f * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -903f)))), vec4<bool>(!arg_1.x, true, true, arg_1.x || select(arg_1.x, true, func_3(-682f, Struct_2(-29803i), vec3<bool>(false, arg_1.x, false)))), Struct_1(~(~(u_input.a << (11231u % 32u))), true));
    return -vec4<i32>(-max(max(-21703i, -2039i), ~21865i), 2147483647i, var_1.x, 1i);
}

fn func_1() -> Struct_2 {
    for (; ; ) {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
    }
    for (var var_0: i32; ; var_0 -= 1i) {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
    }
    switch (303i) {
        default: {
            var var_0 = _wgslsmith_mod_vec4_i32(firstLeadingBit(vec4<i32>(7572i, _wgslsmith_div_i32(global0.x, global0.x), -1i, ~1i) << (~(~vec4<u32>(1u, 10875u, 36905u, 1u)) % vec4<u32>(32u))), -_wgslsmith_mult_vec4_i32(max(func_2(vec2<f32>(-1738f, 425f), vec4<bool>(false, false, true, true), global0.x), ~vec4<i32>(u_input.b, 2147483647i, global0.x, global0.x)), min(reverseBits(vec4<i32>(-63678i, -17696i, global0.x, -34703i)), _wgslsmith_clamp_vec4_i32(vec4<i32>(-1i, u_input.a, -1i, 44689i), vec4<i32>(25135i, global0.x, u_input.a, 11138i), vec4<i32>(global0.x, -1i, global0.x, u_input.a)))));
            let var_1 = var_0.x;
            let var_2 = -1000f;
            global0 = vec4<i32>(i32(-2147483648), ~select(-1i, var_0.x, var_2 >= 2307f), u_input.a, ~u_input.b) << ((vec4<u32>(1u, reverseBits(4294967295u >> (0u % 32u)), _wgslsmith_clamp_u32(_wgslsmith_sub_u32(4294967295u, 25047u), ~1u, _wgslsmith_clamp_u32(0u, 0u, 4294967295u)), abs(1u)) & abs(vec4<u32>(1u, 1u, 1u, 1u))) % vec4<u32>(32u));
        }
    }
    if (false) {
        for (var var_0 = -35613i; var_0 >= -1i; ) {
            if (LOOP_COUNTERS[11u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
            break;
        }
        global0 = _wgslsmith_mult_vec4_i32(vec4<i32>(_wgslsmith_add_i32(i32(-1i) * -2147483647i, _wgslsmith_dot_vec4_i32(_wgslsmith_clamp_vec4_i32(vec4<i32>(global0.x, u_input.b, global0.x, -59890i), vec4<i32>(-55075i, 1i, 26646i, global0.x), vec4<i32>(38136i, 0i, 20210i, -1i)), countOneBits(vec4<i32>(-11305i, u_input.a, u_input.a, 29047i)))), -_wgslsmith_add_i32(-18134i, _wgslsmith_mult_i32(38643i, global0.x)), func_7(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -697f) + _wgslsmith_f_op_f32(max(-658f, 450f))), vec4<bool>(true, true, true, true), Struct_1(_wgslsmith_sub_i32(u_input.a, global0.x), all(vec4<bool>(true, true, false, false)))).a, _wgslsmith_add_i32(firstTrailingBit(u_input.b << (4294967295u % 32u)), _wgslsmith_add_i32(~6168i, u_input.b))), -vec4<i32>(abs(-18648i), countOneBits(1i), ~u_input.a, global0.x) ^ (vec4<i32>(-1i) * -abs(vec4<i32>(-1200i, 0i, global0.x, -1i))));
        let var_0 = vec3<i32>(~1i, -(-22927i | u_input.b), 83419i);
    }
    return func_7(_wgslsmith_f_op_f32(-1000f * 320f), select(!(!select(vec4<bool>(false, false, true, true), vec4<bool>(false, true, true, false), vec4<bool>(true, false, true, false))), select(vec4<bool>(true, select(false, false, false), true, all(vec2<bool>(false, true))), vec4<bool>(func_3(-331f, Struct_2(u_input.b), vec3<bool>(false, false, true)), true, true, global0.x != u_input.b), !(global0.x == -1655i)), vec4<bool>(true, (0i | u_input.b) < -23116i, true, _wgslsmith_dot_vec4_i32(vec4<i32>(5454i, u_input.a, u_input.b, i32(-2147483648)), vec4<i32>(4926i, u_input.b, i32(-2147483648), 36566i)) < firstTrailingBit(global0.x))), Struct_1(firstLeadingBit(abs(54803i)), any(vec3<bool>(true, true, any(vec2<bool>(true, true))))));
}

@compute
@workgroup_size(1)
fn main() {
    var var_0 = func_1();
    let var_1 = 537f;
    global0 = max(abs(~countOneBits(-vec4<i32>(-1i, 25852i, global0.x, 39789i))), _wgslsmith_add_vec4_i32(_wgslsmith_add_vec4_i32(-vec4<i32>(global0.x, -26383i, var_0.a, -31581i), -vec4<i32>(1i, -15869i, -1i, i32(-2147483648))), select(vec4<i32>(var_0.a, i32(-2147483648), u_input.b, global0.x), vec4<i32>(1i, u_input.b, var_0.a, var_0.a), true) << (~vec4<u32>(1u, 35281u, 0u, 1356u) % vec4<u32>(32u))) & vec4<i32>(_wgslsmith_div_i32(-1i, var_0.a) | global0.x, countOneBits(_wgslsmith_clamp_i32(u_input.b, 4634i, var_0.a)), _wgslsmith_mult_i32(4813i, ~33702i), ~15413i));
    global0 = vec4<i32>(-1i) * -(~(vec4<i32>(-1i) * -vec4<i32>(-1i, 1i, u_input.a, -24760i)));
    var var_2 = _wgslsmith_f_op_f32(763f + _wgslsmith_f_op_f32(-237f));
    for (var var_3 = 20601i; var_3 >= -6543i; ) {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        break;
    }
    switch (u_input.b) {
        case 5612i: {
            return;
        }
        case i32(-2147483648): {
        }
        default: {
            let var_3 = Struct_2(2147483647i);
        }
    }
    var_2 = 1252f;
    var var_3 = vec2<u32>(1u, 1u) >> (abs(vec2<u32>(1u, _wgslsmith_mod_u32(83203u, 62329u)) << (vec2<u32>(max(0u, 4294967295u), firstTrailingBit(0u)) % vec2<u32>(32u))) % vec2<u32>(32u));
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_div_f32(_wgslsmith_div_f32(var_1, -227f), var_1), _wgslsmith_f_op_f32(trunc(var_1)), -1259f, _wgslsmith_f_op_f32(var_1 - -240f)) - vec4<f32>(_wgslsmith_f_op_f32(-var_1), var_1, var_1, var_1)), -1000f, ~global0.wz);
}

`;