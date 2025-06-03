export const input = [234,161,135,191,92,221,117,29,214,194,182,208,163,106,140,168,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [234,161,135,191,92,221,117,29,214,194,182,208,163,106,140,168,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[234,161,135,191,92,221,117,29,214,194,182,208,163,106,140,168]}
// Seed: 7907949056799512800

struct Struct_1 {
    a: bool,
}

struct Struct_2 {
    a: vec3<i32>,
    b: vec3<i32>,
}

struct UniformBuffer {
    a: vec4<i32>,
}

struct StorageBuffer {
    a: i32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> LOOP_COUNTERS: array<u32, 32>;

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn func_6(arg_0: vec2<f32>, arg_1: vec2<u32>, arg_2: Struct_1) -> u32 {
    var var_0 = ~(_wgslsmith_sub_vec2_u32(arg_1, _wgslsmith_clamp_vec2_u32(arg_1, arg_1, vec2<u32>(arg_1.x, arg_1.x)) & (vec2<u32>(arg_1.x, 0u) << (vec2<u32>(arg_1.x, 32316u) % vec2<u32>(32u)))) & vec2<u32>(4294967295u, abs(_wgslsmith_dot_vec2_u32(vec2<u32>(arg_1.x, 4294967295u), vec2<u32>(arg_1.x, 0u)))));
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        let var_1 = !arg_2.a;
        loop {
            if (LOOP_COUNTERS[1u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
            var var_2 = arg_0.x;
        }
        var_0 = firstTrailingBit(countOneBits(~vec2<u32>(~1u, 1u)));
        if (4294967295u != var_0.x) {
            var_0 = ~arg_1 << (arg_1 % vec2<u32>(32u));
            var_0 = arg_1;
        }
    }
    if (true) {
        let var_1 = -810f;
        switch (1i) {
            case -17976i: {
                var var_2 = arg_2;
                let var_3 = ~(arg_1.x & countOneBits(~0u)) << (max(_wgslsmith_dot_vec3_u32(vec3<u32>(~arg_1.x, 4294967295u & arg_1.x, 24427u), vec3<u32>(_wgslsmith_mult_u32(7823u, var_0.x), ~4294967295u, ~1u)), 4294967295u) % 32u);
                var var_4 = Struct_2(vec3<i32>(countOneBits(u_input.a.x), 0i, -5268i), vec3<i32>(~(~u_input.a.x & (u_input.a.x | u_input.a.x)), -52219i, i32(-2147483648)));
            }
            default: {
                var_0 = arg_1;
                var var_2 = Struct_1(true);
            }
        }
        if (!all(!select(select(vec3<bool>(true, false, true), vec3<bool>(arg_2.a, arg_2.a, true), false), vec3<bool>(false, arg_2.a, false), !vec3<bool>(arg_2.a, false, arg_2.a)))) {
            var_0 = ~arg_1 ^ vec2<u32>(78267u, arg_1.x);
        }
    }
    let var_1 = 1i;
    loop {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        continue;
    }
    return 0u;
}

fn func_7(arg_0: i32, arg_1: u32, arg_2: vec4<bool>, arg_3: vec2<i32>) -> i32 {
    for (var var_0 = 0i; false; var_0 -= 1i) {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        for (var var_1 = i32(-2147483648); any(!select(!select(vec4<bool>(true, false, arg_2.x, false), arg_2, vec4<bool>(false, arg_2.x, false, true)), !(!arg_2), true)); var_1 -= 1i) {
            if (LOOP_COUNTERS[4u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
            let var_2 = Struct_1(all(arg_2));
            var var_3 = countOneBits(arg_1);
        }
        var_0 = u_input.a.x;
        var_0 = arg_0 & arg_3.x;
        loop {
            if (LOOP_COUNTERS[5u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
            var var_1 = reverseBits(_wgslsmith_mult_vec4_u32(firstLeadingBit(~vec4<u32>(4294967295u, 2789u, 4294967295u, 4294967295u)), ~min(vec4<u32>(arg_1, arg_1, 657u, 744u), vec4<u32>(14746u, arg_1, 21610u, arg_1)))) | select(vec4<u32>(1u, func_6(_wgslsmith_f_op_vec2_f32(ceil(vec2<f32>(1000f, -1285f))), ~vec2<u32>(arg_1, 45386u), Struct_1(true)), ~arg_1, ~arg_1 & ~0u), vec4<u32>(20444u, firstLeadingBit(arg_1), ~arg_1 ^ 25508u, arg_1), vec4<bool>(!arg_2.x, false, arg_2.x, true));
            let var_2 = Struct_1(true);
            var_0 = ~arg_3.x;
        }
    }
    var var_0 = all(vec2<bool>(!any(!vec3<bool>(true, arg_2.x, false)), true));
    var var_1 = _wgslsmith_f_op_f32(ceil(-1264f));
    var_0 = !(select(-3226i, ~_wgslsmith_div_i32(arg_3.x, arg_3.x), !arg_2.x || (21595i >= arg_3.x)) > ~arg_3.x);
    var var_2 = vec4<u32>(~abs(arg_1), arg_1, 4294967295u, 43371u | arg_1);
    return i32(-1i) * i32(-2147483648);
}

fn func_5() -> bool {
    loop {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        var var_0 = Struct_1(false);
        var_0 = Struct_1(var_0.a);
        var var_1 = u_input.a.x;
        let var_2 = !vec3<bool>(all(!vec2<bool>(var_0.a, var_0.a)), any(!select(vec2<bool>(true, true), vec2<bool>(var_0.a, var_0.a), vec2<bool>(var_0.a, var_0.a))), var_0.a);
    }
    switch (_wgslsmith_div_i32(-1i, max(firstLeadingBit(-(i32(-1i) * -17177i)), firstLeadingBit(u_input.a.x) ^ u_input.a.x))) {
        case 1i: {
            switch (_wgslsmith_mult_i32((-(u_input.a.x | u_input.a.x) | ~u_input.a.x) & min(u_input.a.x, -60592i), countOneBits(func_7(29872i, ~func_6(vec2<f32>(866f, 1124f), vec2<u32>(7931u, 9130u), Struct_1(true)), vec4<bool>(true, true, true, true), max(vec2<i32>(u_input.a.x, 32474i), vec2<i32>(u_input.a.x, -10789i)))))) {
                default: {
                    return true;
                }
            }
        }
        case 11787i: {
            var var_0 = ~((u_input.a.zz | vec2<i32>(u_input.a.x << (0u % 32u), reverseBits(i32(-2147483648)))) << (_wgslsmith_sub_vec2_u32(min(~vec2<u32>(0u, 43183u), ~vec2<u32>(1u, 4294967295u)), vec2<u32>(_wgslsmith_dot_vec4_u32(vec4<u32>(38353u, 4294967295u, 68862u, 100217u), vec4<u32>(98059u, 18913u, 1u, 19794u)), ~1u)) % vec2<u32>(32u)));
        }
        case -27408i: {
            let var_0 = u_input.a.x;
            let var_1 = Struct_2(vec3<i32>(_wgslsmith_mod_i32(_wgslsmith_mod_i32(u_input.a.x, 2147483647i) & (2147483647i >> (1u % 32u)), 1i >> (_wgslsmith_dot_vec3_u32(vec3<u32>(1u, 41916u, 0u), vec3<u32>(4122u, 0u, 0u)) % 32u)), u_input.a.x, u_input.a.x), ~vec3<i32>(var_0, -45i, func_7(-68935i, ~19617u, vec4<bool>(false, true, true, true), u_input.a.yz >> (vec2<u32>(0u, 39913u) % vec2<u32>(32u)))));
            let var_2 = ~vec3<u32>(1u, 1u, 1u);
        }
        case -57272i: {
            switch (u_input.a.x) {
                case -30256i: {
                    let var_0 = Struct_2(-vec3<i32>(1i, 39806i, 0i), u_input.a.zww & vec3<i32>(50369i, -12875i, 5695i));
                    var var_1 = Struct_1(true && select(true, any(vec4<bool>(true, true, true, true)), all(select(vec4<bool>(false, true, true, true), vec4<bool>(true, true, true, false), vec4<bool>(true, false, true, true)))));
                    var var_2 = Struct_1(var_1.a);
                }
                case 18867i: {
                    var var_0 = Struct_2(firstLeadingBit(~vec3<i32>(3280i, u_input.a.x & u_input.a.x, 2885i)), abs(-u_input.a.wyx));
                    var_0 = Struct_2(abs(vec3<i32>(~u_input.a.x, abs(u_input.a.x), u_input.a.x)) ^ _wgslsmith_div_vec3_i32((vec3<i32>(u_input.a.x, -50464i, var_0.b.x) & vec3<i32>(var_0.b.x, 4046i, 0i)) & u_input.a.yyw, abs(u_input.a.www)), vec3<i32>(_wgslsmith_mult_i32(_wgslsmith_dot_vec2_i32(~vec2<i32>(76684i, 36088i), -vec2<i32>(var_0.a.x, u_input.a.x)), var_0.b.x), -24862i, 44i));
                }
                case 2147483647i: {
                    let var_0 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(-761f))))), 838f, all(select(vec3<bool>(true, true, true), vec3<bool>(true, true, true), any(vec3<bool>(true, false, true)))))) - 174f);
                    let var_1 = Struct_2(u_input.a.zwz, ~abs(abs(vec3<i32>(25510i, 17000i, u_input.a.x)) << (_wgslsmith_mult_vec3_u32(vec3<u32>(13870u, 27039u, 0u), vec3<u32>(1u, 29478u, 38607u)) % vec3<u32>(32u))));
                }
                case 12402i: {
                    var var_0 = func_6(_wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(trunc(586f)), _wgslsmith_f_op_f32(_wgslsmith_div_f32(-126f, -1248f) * _wgslsmith_f_op_f32(-338f)))), vec2<u32>(~20211u, 1u), Struct_1(all(!select(vec4<bool>(false, false, false, false), vec4<bool>(true, true, false, false), vec4<bool>(true, true, false, true)))));
                    var_0 = ~_wgslsmith_sub_u32(1u & select(4339u, 1u, any(vec3<bool>(false, false, true))), ~_wgslsmith_clamp_u32(1u, 1u, min(28466u, 21841u)));
                    var_0 = 1u;
                    var var_1 = Struct_2(~_wgslsmith_sub_vec3_i32(u_input.a.yxw, firstLeadingBit(reverseBits(vec3<i32>(u_input.a.x, -22924i, 9525i)))), select(u_input.a.yzx, vec3<i32>(-23869i, u_input.a.x ^ -u_input.a.x, firstTrailingBit(u_input.a.x >> (1u % 32u))), vec3<bool>(all(select(vec4<bool>(false, true, false, true), vec4<bool>(true, true, false, true), false)), false, true)));
                    var_1 = Struct_2(vec3<i32>(u_input.a.x, -50140i, 1i), select(min(u_input.a.zxz, ~(~var_1.a)), -vec3<i32>(0i, ~u_input.a.x, ~(-2879i)), all(select(vec2<bool>(false, false), vec2<bool>(true, true), vec2<bool>(true, true)))));
                }
                default: {
                }
            }
            loop {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                continue;
            }
            var var_0 = _wgslsmith_f_op_vec4_f32(abs(vec4<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-837f), _wgslsmith_f_op_f32(select(605f, 267f, false)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -1552f) + 802f)), 187f, _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(abs(_wgslsmith_div_f32(2641f, -794f))))), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(598f)) - _wgslsmith_f_op_f32(min(1434f, 779f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(195f * -1400f)))))));
            var var_1 = _wgslsmith_mod_vec4_u32(min(~select(vec4<u32>(1u, 4294967295u, 94u, 0u), vec4<u32>(4294967295u, 38322u, 83086u, 27784u), false), ~vec4<u32>(0u, 29953u, 0u, 0u)) & vec4<u32>(_wgslsmith_dot_vec2_u32(vec2<u32>(1u, 19286u), vec2<u32>(12937u, 4294967295u)) >> (1u % 32u), 0u, func_6(_wgslsmith_f_op_vec2_f32(-vec2<f32>(2065f, var_0.x)), countOneBits(vec2<u32>(43007u, 0u)), Struct_1(false)), _wgslsmith_dot_vec2_u32(vec2<u32>(1u, 1u), vec2<u32>(38033u, 4690u))), ~(~min(~vec4<u32>(101520u, 136705u, 61535u, 0u), vec4<u32>(29872u, 52089u, 4294967295u, 26366u))));
            for (var var_2 = i32(-2147483648); var_2 != 14178i; var_2 += 1i) {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                break;
            }
        }
        default: {
            let var_0 = vec2<u32>(4294967295u, reverseBits(4294967295u ^ ~_wgslsmith_dot_vec3_u32(vec3<u32>(4294967295u, 77825u, 1u), vec3<u32>(47455u, 29327u, 22312u))));
            for (var var_1 = -1471i; var_1 <= 2147483647i; var_1 = _wgslsmith_dot_vec3_i32(~max(_wgslsmith_mult_vec3_i32(-vec3<i32>(u_input.a.x, u_input.a.x, 4303i), _wgslsmith_mod_vec3_i32(vec3<i32>(2147483647i, u_input.a.x, -572i), u_input.a.zxw)), min(vec3<i32>(1i, u_input.a.x, 17250i), _wgslsmith_mult_vec3_i32(u_input.a.wxz, u_input.a.yzw))), u_input.a.zxw)) {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                var_1 = -1i;
                break;
            }
            if (true) {
                let var_1 = ~(~var_0) << (reverseBits(var_0) % vec2<u32>(32u));
                let var_2 = true;
            }
            let var_1 = Struct_1(any(vec4<bool>(true, true, u_input.a.x < -1i, false)));
            var var_2 = !all(!(!(!vec3<bool>(var_1.a, var_1.a, var_1.a))));
        }
    }
    for (; all(select(vec3<bool>(true, true, true), !select(select(vec3<bool>(true, false, true), vec3<bool>(false, false, true), false), select(vec3<bool>(true, false, true), vec3<bool>(false, true, false), vec3<bool>(false, false, true)), true), true)); ) {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        var var_0 = select(true, 1125f <= _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(sign(-356f)), -1163f))), all(!select(vec4<bool>(true, true, true, false), vec4<bool>(true, false, true, false), true)));
        if (true) {
            continue;
        }
        break;
    }
    let var_0 = Struct_1(all(select(vec4<bool>(true, true, true, true), vec4<bool>(any(vec3<bool>(true, true, true)), true, true, true), select(select(false, true, true), all(vec3<bool>(false, false, true)), false))));
    var var_1 = var_0;
    return true;
}

fn func_4(arg_0: bool) -> u32 {
    if (!arg_0) {
        if (!func_5()) {
            var var_0 = _wgslsmith_dot_vec3_i32(u_input.a.xzx, u_input.a.wxy);
            var var_1 = _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(651f, 698f))) * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(ceil(-324f)))))), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(_wgslsmith_div_f32(896f, _wgslsmith_f_op_f32(max(103f, 1779f))) + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(188f, 750f)) - _wgslsmith_div_f32(-704f, -1210f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(-227f, 694f)) * _wgslsmith_f_op_f32(901f + 720f)) - -1712f)))));
        }
        var var_0 = Struct_1(arg_0);
        let var_1 = select(vec4<u32>(4235u, 48615u, ~17867u, 115456u), abs(countOneBits(vec4<u32>(_wgslsmith_mod_u32(0u, 15913u), ~2165u, 1u, 21486u))), arg_0);
        for (var var_2 = -1i; var_2 < -11108i; var_2 = -max(u_input.a.x, _wgslsmith_dot_vec4_i32(~reverseBits(vec4<i32>(-2349i, 1i, u_input.a.x, -11723i)), max(~u_input.a, min(u_input.a, vec4<i32>(33791i, u_input.a.x, 1i, u_input.a.x)))))) {
            if (LOOP_COUNTERS[11u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
            var var_3 = !(!select(select(!vec3<bool>(var_0.a, false, false), vec3<bool>(var_0.a, var_0.a, arg_0), vec3<bool>(true, var_0.a, false)), vec3<bool>(select(false, true, true), var_1.x > var_1.x, var_0.a), select(select(vec3<bool>(arg_0, arg_0, true), vec3<bool>(arg_0, var_0.a, false), vec3<bool>(var_0.a, var_0.a, true)), vec3<bool>(true, arg_0, true), true)));
            var_2 = u_input.a.x;
            var_2 = -u_input.a.x;
        }
    }
    let var_0 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(-1455f - _wgslsmith_f_op_f32(f32(-1f) * -622f)), _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(276f)) - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(-781f)) - _wgslsmith_f_op_f32(-1091f))))));
    var var_1 = Struct_2(-select(u_input.a.xyy & (vec3<i32>(u_input.a.x, i32(-2147483648), u_input.a.x) ^ u_input.a.zww), u_input.a.wxy, select(!vec3<bool>(true, true, arg_0), select(vec3<bool>(arg_0, false, false), vec3<bool>(arg_0, false, arg_0), vec3<bool>(arg_0, false, true)), true)), firstTrailingBit(-firstTrailingBit(u_input.a.zyz)));
    var var_2 = select(vec3<bool>(all(select(!vec3<bool>(arg_0, true, arg_0), vec3<bool>(arg_0, true, arg_0), select(vec3<bool>(arg_0, arg_0, arg_0), vec3<bool>(false, true, arg_0), vec3<bool>(true, true, arg_0)))), true, true), vec3<bool>(~_wgslsmith_sub_u32(70997u, 25094u) == firstTrailingBit(39417u >> (1u % 32u)), any(vec2<bool>(true != arg_0, true)), !select(var_0 < var_0, arg_0 | true, all(vec2<bool>(false, arg_0)))), !func_5());
    if (_wgslsmith_mult_i32(35937i, var_1.b.x) > max(abs(~_wgslsmith_mult_i32(-53301i, var_1.a.x)), ~abs(u_input.a.x))) {
        var var_3 = 1i & u_input.a.x;
        var var_4 = min(vec2<u32>(_wgslsmith_mod_u32(76440u, max(67932u, 1854u)), _wgslsmith_dot_vec3_u32(countOneBits(~vec3<u32>(20851u, 29693u, 0u)), vec3<u32>(105128u, ~4294967295u, _wgslsmith_dot_vec2_u32(vec2<u32>(0u, 71795u), vec2<u32>(4294967295u, 53586u))))), firstTrailingBit(_wgslsmith_mod_vec2_u32(~countOneBits(vec2<u32>(4294967295u, 2811u)), firstTrailingBit(abs(vec2<u32>(34630u, 53870u))))));
        loop {
            if (LOOP_COUNTERS[12u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
            var var_5 = Struct_1(arg_0 | arg_0);
            var_5 = Struct_1(true);
            let var_6 = countOneBits(_wgslsmith_mod_vec3_u32(abs(~(~vec3<u32>(4294967295u, 1u, 0u))), ~select(~vec3<u32>(42320u, var_4.x, var_4.x), ~vec3<u32>(var_4.x, 0u, var_4.x), select(vec3<bool>(arg_0, var_2.x, arg_0), vec3<bool>(true, var_2.x, false), vec3<bool>(arg_0, false, var_5.a)))));
            let var_7 = max(_wgslsmith_add_vec3_i32(_wgslsmith_mod_vec3_i32(u_input.a.wwx, vec3<i32>(u_input.a.x, var_1.b.x, 1i)), vec3<i32>(34028i, u_input.a.x, var_1.a.x)) & vec3<i32>(i32(-2147483648), var_1.b.x, min(var_1.a.x, 1i)), var_1.a) | _wgslsmith_div_vec3_i32(countOneBits(vec3<i32>(reverseBits(i32(-2147483648)), _wgslsmith_dot_vec2_i32(vec2<i32>(var_1.b.x, u_input.a.x), u_input.a.zz), var_1.b.x)), var_1.b);
            let var_8 = var_6;
        }
        loop {
            if (LOOP_COUNTERS[13u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
            break;
        }
    }
    return ~(~(_wgslsmith_div_u32(func_6(vec2<f32>(var_0, var_0), vec2<u32>(34832u, 3872u), Struct_1(var_2.x)), 1u) & 1u));
}

fn func_3() -> Struct_2 {
    for (var var_0: i32; select(all(vec3<bool>(false, true, all(vec3<bool>(true, true, false)))), ~(~1u) >= max(1u, func_4(true)), true); var_0 += 1i) {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        let var_1 = Struct_1(false);
        let var_2 = Struct_2(-_wgslsmith_sub_vec3_i32(vec3<i32>(select(u_input.a.x, u_input.a.x, false), u_input.a.x, u_input.a.x & 22222i), -min(u_input.a.wzz, u_input.a.yzx)), u_input.a.zzx);
    }
    for (var var_0 = -27881i; true; var_0 = abs(-15540i ^ _wgslsmith_dot_vec2_i32(vec2<i32>(-1i, _wgslsmith_dot_vec4_i32(vec4<i32>(37800i, u_input.a.x, -11400i, u_input.a.x), u_input.a)), select(vec2<i32>(-29244i, 8706i) << (vec2<u32>(0u, 1u) % vec2<u32>(32u)), u_input.a.xx, true)))) {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
        switch (29533i << (1u % 32u)) {
            default: {
                var var_1 = firstLeadingBit(min(vec2<u32>(~countOneBits(47195u), 1u), vec2<u32>(reverseBits(_wgslsmith_dot_vec2_u32(vec2<u32>(0u, 22474u), vec2<u32>(1u, 4294967295u))), ~0u)));
            }
        }
        var_0 = _wgslsmith_dot_vec2_i32(_wgslsmith_mod_vec2_i32(-countOneBits(reverseBits(u_input.a.zy)), vec2<i32>(_wgslsmith_clamp_i32(u_input.a.x, u_input.a.x, 0i) | ~u_input.a.x, u_input.a.x)), u_input.a.xw);
        loop {
            if (LOOP_COUNTERS[16u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
            var var_1 = ~(104030u >> (1u % 32u));
        }
    }
    for (; ; ) {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
    }
    loop {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        return Struct_2(u_input.a.xwx, -select(u_input.a.xzx, u_input.a.zyx, true & any(vec3<bool>(true, false, true))));
    }
    let var_0 = -vec3<i32>(abs(u_input.a.x), u_input.a.x, u_input.a.x >> (min(abs(1u), 1980u) % 32u));
    return Struct_2(_wgslsmith_sub_vec3_i32(var_0, u_input.a.wwz ^ u_input.a.zxy), -_wgslsmith_add_vec3_i32(var_0, -countOneBits(vec3<i32>(1i, -15688i, var_0.x))));
}

fn func_2() -> Struct_1 {
    let var_0 = false;
    switch (u_input.a.x) {
        case 0i: {
        }
        case 67820i: {
            let var_1 = 4294967295u;
            let var_2 = Struct_1(var_0);
            for (var var_3: i32; var_3 > -19554i; ) {
                if (LOOP_COUNTERS[19u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
                break;
            }
            let var_3 = false;
            var var_4 = func_3();
        }
        default: {
            if (true) {
                let var_1 = 1290f;
            }
            let var_1 = -vec3<i32>(countOneBits(_wgslsmith_mod_i32(u_input.a.x, reverseBits(u_input.a.x))), u_input.a.x, _wgslsmith_dot_vec2_i32(vec2<i32>(abs(0i), reverseBits(u_input.a.x)), min(u_input.a.zz, countOneBits(vec2<i32>(u_input.a.x, u_input.a.x)))));
            let var_2 = vec4<u32>(_wgslsmith_mult_u32(60175u, 36692u) >> (_wgslsmith_clamp_u32(1u, abs(0u), 1u) % 32u), ~(_wgslsmith_mod_u32(0u, 19752u) << (1u % 32u)), firstLeadingBit(~countOneBits(58266u)), ~_wgslsmith_clamp_u32(_wgslsmith_div_u32(20244u, 17691u), min(79775u, 812u), func_4(var_0))) ^ ~(~firstLeadingBit(~vec4<u32>(1u, 4294967295u, 18063u, 43161u)));
            for (; select(_wgslsmith_mod_u32(4294967295u, var_2.x), func_6(_wgslsmith_div_vec2_f32(vec2<f32>(1606f, -1180f), _wgslsmith_f_op_vec2_f32(ceil(vec2<f32>(-1206f, -279f)))), vec2<u32>(var_2.x ^ var_2.x, 46184u), Struct_1(true)), false) > (firstLeadingBit(34382u) << (var_2.x % 32u)); ) {
                if (LOOP_COUNTERS[20u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
                break;
            }
        }
    }
    let var_1 = func_3();
    return Struct_1(var_0);
}

fn func_1(arg_0: vec4<f32>, arg_1: Struct_2, arg_2: u32) -> vec4<bool> {
    for (; ; ) {
        if (LOOP_COUNTERS[21u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
        break;
    }
    for (var var_0 = arg_1.b.x; ; var_0 = 7990i | arg_1.a.x) {
        if (LOOP_COUNTERS[22u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
        switch (arg_1.b.x) {
            case -6570i: {
                var var_1 = 1u;
                var_0 = arg_1.b.x;
                continue;
            }
            case 1i: {
                var var_1 = func_2();
                continue;
            }
            case 12962i: {
            }
            default: {
                var var_1 = vec4<u32>(_wgslsmith_dot_vec2_u32(_wgslsmith_sub_vec2_u32(_wgslsmith_div_vec2_u32(vec2<u32>(arg_2, arg_2), ~vec2<u32>(arg_2, arg_2)), min(vec2<u32>(arg_2, 1u), vec2<u32>(arg_2, arg_2)) >> (vec2<u32>(arg_2, 35357u) % vec2<u32>(32u))), countOneBits(_wgslsmith_mod_vec2_u32(vec2<u32>(arg_2, 11745u), vec2<u32>(arg_2, 43746u) ^ vec2<u32>(32150u, arg_2)))), arg_2, arg_2, arg_2);
                var_0 = abs(-min(i32(-1i) * -1i, abs(18417i >> (var_1.x % 32u))));
                var var_2 = var_1.xww;
                continue;
            }
        }
        switch (_wgslsmith_dot_vec3_i32(select(vec3<i32>(-_wgslsmith_mult_i32(u_input.a.x, 0i), _wgslsmith_add_i32(arg_1.b.x, arg_1.a.x) & ~(-41902i), -(~(i32(-2147483648)))), vec3<i32>(u_input.a.x, i32(-1i) * -u_input.a.x, 23537i), any(vec3<bool>(true, true, true))), ~reverseBits(firstTrailingBit(vec3<i32>(36451i, 0i, u_input.a.x))))) {
            case -1i: {
                continue;
            }
            case 1i: {
                var var_1 = false;
                var var_2 = func_3();
                var var_3 = -(~arg_1.a.xy);
            }
            case 7756i: {
                var var_1 = vec4<f32>(_wgslsmith_f_op_f32(-arg_0.x), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(max(arg_0.x, arg_0.x)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0.x)))) - _wgslsmith_f_op_f32(floor(arg_0.x))), -152f, _wgslsmith_div_f32(_wgslsmith_f_op_f32(min(arg_0.x, _wgslsmith_f_op_f32(-753f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(arg_0.x + -561f))))));
                let var_2 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(-1000f, _wgslsmith_f_op_f32(arg_0.x + arg_0.x), _wgslsmith_div_f32(433f, var_1.x), _wgslsmith_f_op_f32(ceil(arg_0.x)))))) + _wgslsmith_div_vec4_f32(arg_0, arg_0));
            }
            default: {
                break;
            }
        }
        if (all(select(vec2<bool>(true, true), select(vec2<bool>(true, true), !select(vec2<bool>(false, false), vec2<bool>(true, true), true), select(select(vec2<bool>(true, false), vec2<bool>(false, false), false), select(vec2<bool>(true, true), vec2<bool>(false, true), true), select(vec2<bool>(false, false), vec2<bool>(false, false), false))), any(select(vec2<bool>(false, true), vec2<bool>(true, true), true))))) {
            continue;
        }
        var_0 = ~41150i;
        let var_1 = func_2();
    }
    switch (_wgslsmith_dot_vec3_i32(~reverseBits(arg_1.a), _wgslsmith_mod_vec3_i32(abs(vec3<i32>(_wgslsmith_mod_i32(u_input.a.x, u_input.a.x), 1i, 23496i)), -firstLeadingBit(-arg_1.a)))) {
        case 10334i: {
            for (var var_0 = 14702i; true; var_0 += 1i) {
                if (LOOP_COUNTERS[23u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
                var var_1 = arg_1;
                break;
            }
            switch (i32(-2147483648)) {
                case 3249i: {
                }
                case i32(-2147483648): {
                    let var_0 = vec4<bool>(any(vec4<bool>(arg_2 >= ~2891u, !(arg_2 <= 13477u), true, func_5())), false, any(!select(vec3<bool>(true, true, true), vec3<bool>(false, false, false), vec3<bool>(false, true, true))), select(true, any(vec4<bool>(true, all(vec3<bool>(false, true, true)), true, false)), arg_0.x == _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(-1215f)))));
                    return vec4<bool>(true, true, false, true);
                }
                case 17706i: {
                    var var_0 = vec4<u32>(arg_2, ~(select(1u, select(64833u, 0u, true), false) ^ _wgslsmith_dot_vec4_u32(~vec4<u32>(arg_2, arg_2, 58597u, arg_2), vec4<u32>(arg_2, 17118u, arg_2, arg_2))), 0u, ~(~(~min(arg_2, arg_2))));
                    var var_1 = (vec3<i32>(-(1i ^ u_input.a.x), _wgslsmith_mult_i32(1i, abs(u_input.a.x)), u_input.a.x ^ -arg_1.a.x) << (_wgslsmith_mod_vec3_u32(countOneBits(_wgslsmith_sub_vec3_u32(var_0.zwy, vec3<u32>(arg_2, arg_2, 1u))), ~vec3<u32>(4294967295u, var_0.x, 40841u)) % vec3<u32>(32u))) ^ arg_1.a;
                    return vec4<bool>(all(select(vec4<bool>(true, true, true, true), vec4<bool>(true, false, true, true), select(vec4<bool>(true, true, true, true), vec4<bool>(false, false, true, false), false))) != (~_wgslsmith_add_u32(var_0.x, 1u) >= var_0.x), false, true, func_5());
                }
                default: {
                    var var_0 = Struct_1(true | (func_5() || ((arg_2 & arg_2) <= ~0u)));
                    var_0 = func_2();
                    var var_1 = func_3();
                    var_1 = Struct_2(abs(select(vec3<i32>(u_input.a.x, min(-30636i, 52903i), 1i), vec3<i32>(var_1.b.x >> (1u % 32u), _wgslsmith_mult_i32(-1i, var_1.b.x), reverseBits(25889i)), false)), vec3<i32>(~u_input.a.x, ~_wgslsmith_sub_i32(-43996i, -19870i), 1i));
                }
            }
            if (false) {
                let var_0 = select(vec3<bool>(true, func_2().a, true), select(select(select(select(vec3<bool>(true, false, true), vec3<bool>(false, false, false), vec3<bool>(false, true, true)), vec3<bool>(true, true, true), func_2().a), select(select(vec3<bool>(false, false, true), vec3<bool>(true, true, false), false), select(vec3<bool>(false, false, false), vec3<bool>(true, true, false), true), vec3<bool>(true, true, false)), false), vec3<bool>(_wgslsmith_f_op_f32(532f * 820f) >= arg_0.x, true, true), arg_1.a.x <= ~(0i)), select(select(select(vec3<bool>(false, true, false), select(vec3<bool>(false, false, true), vec3<bool>(false, false, false), vec3<bool>(false, false, true)), vec3<bool>(true, true, true)), vec3<bool>(true, any(vec3<bool>(true, false, false)), true), false), vec3<bool>(1484f == _wgslsmith_f_op_f32(-arg_0.x), true, true), select(vec3<bool>(true, false, true), vec3<bool>(true, true, true), !any(vec2<bool>(false, false)))));
                let var_1 = Struct_1(true);
            }
            let var_0 = Struct_2(-((vec3<i32>(1i, arg_1.a.x, -52379i) ^ arg_1.b) << (~(~vec3<u32>(arg_2, arg_2, arg_2)) % vec3<u32>(32u))), _wgslsmith_clamp_vec3_i32(vec3<i32>(-16016i, 0i, _wgslsmith_mod_i32(55342i, u_input.a.x >> (0u % 32u))), (~arg_1.a | ~vec3<i32>(1i, u_input.a.x, i32(-2147483648))) >> (~firstLeadingBit(vec3<u32>(arg_2, 1u, arg_2)) % vec3<u32>(32u)), select(select(~vec3<i32>(arg_1.a.x, u_input.a.x, -1i), u_input.a.zwz, true), _wgslsmith_sub_vec3_i32(-u_input.a.yzx, u_input.a.xyw | arg_1.a), vec3<bool>(func_2().a, true, true))));
        }
        case 11349i: {
            for (; !all(vec2<bool>(true, true)); ) {
                if (LOOP_COUNTERS[24u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
                var var_0 = ~arg_2;
                continue;
            }
            var var_0 = Struct_2(~(~(-abs(vec3<i32>(2147483647i, 18013i, u_input.a.x)))), _wgslsmith_mult_vec3_i32(_wgslsmith_div_vec3_i32(firstLeadingBit(arg_1.b) << (vec3<u32>(arg_2, arg_2, 1u) % vec3<u32>(32u)), arg_1.a), _wgslsmith_mod_vec3_i32(vec3<i32>(func_3().a.x, _wgslsmith_dot_vec2_i32(vec2<i32>(u_input.a.x, arg_1.b.x), vec2<i32>(arg_1.a.x, 65646i)), -23789i), _wgslsmith_sub_vec3_i32(min(u_input.a.zxy, vec3<i32>(u_input.a.x, 1i, -22509i)), arg_1.a & vec3<i32>(u_input.a.x, 23072i, 17084i)))));
            loop {
                if (LOOP_COUNTERS[25u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
                let var_1 = vec2<bool>(true, false);
                continue;
            }
        }
        case 1i: {
            if (func_5()) {
                let var_0 = select(select(-firstTrailingBit(u_input.a), ~_wgslsmith_mult_vec4_i32(vec4<i32>(23564i, arg_1.a.x, 29046i, arg_1.a.x), u_input.a), false), _wgslsmith_mult_vec4_i32(u_input.a, ~u_input.a), vec4<bool>(all(vec3<bool>(true, true, false)) && func_5(), !(-820f > _wgslsmith_f_op_f32(arg_0.x - -144f)), !any(vec2<bool>(true, true)), false));
                let var_1 = 1i;
                var var_2 = func_2();
                let var_3 = select(firstTrailingBit(_wgslsmith_div_vec2_u32(_wgslsmith_mult_vec2_u32(vec2<u32>(67560u, 35286u), vec2<u32>(4294967295u, arg_2)), vec2<u32>(arg_2, arg_2))) | reverseBits(vec2<u32>(~35794u, 9399u)), vec2<u32>(_wgslsmith_dot_vec4_u32(abs(~vec4<u32>(55001u, arg_2, arg_2, 4294967295u)), vec4<u32>(~4922u, ~arg_2, firstTrailingBit(52659u), ~38515u)), arg_2), select(select(vec2<bool>(false, func_2().a), vec2<bool>(true, 22637i == var_1), true), select(vec2<bool>(true, true), vec2<bool>(true, all(vec4<bool>(true, var_2.a, var_2.a, var_2.a))), false), select(!(!vec2<bool>(false, var_2.a)), select(vec2<bool>(false, false), !vec2<bool>(var_2.a, true), true), func_5())));
                var_2 = Struct_1(var_2.a);
            }
            switch (u_input.a.x) {
                default: {
                    let var_0 = vec4<u32>(~_wgslsmith_add_u32(min(0u, 0u), _wgslsmith_dot_vec3_u32(vec3<u32>(arg_2, arg_2, 0u), vec3<u32>(arg_2, arg_2, 1u))), 0u, 1u >> (_wgslsmith_div_u32(~arg_2, arg_2 << (arg_2 % 32u)) % 32u), arg_2) & ~(~(abs(vec4<u32>(4294967295u, 33646u, 129674u, arg_2)) & _wgslsmith_div_vec4_u32(vec4<u32>(arg_2, 0u, arg_2, arg_2), vec4<u32>(20353u, 0u, arg_2, arg_2))));
                }
            }
            var var_0 = 4294967295u;
            if (true) {
                var_0 = 1u;
            }
            loop {
                if (LOOP_COUNTERS[26u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
                var var_1 = func_3();
                continue;
            }
        }
        case -48197i: {
            for (; false; ) {
                if (LOOP_COUNTERS[27u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[27u] = LOOP_COUNTERS[27u] + 1u;
                let var_0 = arg_2;
            }
            let var_0 = _wgslsmith_div_vec4_u32(vec4<u32>(arg_2, ~max(arg_2, arg_2 | arg_2), 17626u, arg_2), abs(~(~(vec4<u32>(41504u, arg_2, arg_2, 0u) ^ vec4<u32>(arg_2, arg_2, 4888u, arg_2)))));
            for (var var_1 = -36772i; var_1 > 30872i; var_1 = 1i) {
                if (LOOP_COUNTERS[28u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[28u] = LOOP_COUNTERS[28u] + 1u;
                var_1 = firstLeadingBit(_wgslsmith_add_i32(i32(-2147483648), _wgslsmith_dot_vec4_i32(vec4<i32>(u_input.a.x >> (var_0.x % 32u), 63648i, -1i, _wgslsmith_dot_vec4_i32(u_input.a, u_input.a)), vec4<i32>(firstTrailingBit(1i), -arg_1.b.x, _wgslsmith_div_i32(arg_1.a.x, i32(-2147483648)), u_input.a.x))));
                var_1 = _wgslsmith_add_i32(1i, -func_3().b.x);
                var var_2 = var_0 | var_0;
                let var_3 = !((_wgslsmith_div_i32(-arg_1.a.x, arg_1.b.x) << (var_2.x % 32u)) == _wgslsmith_add_i32(-1i, ~(-arg_1.b.x)));
                var_2 = vec4<u32>(var_0.x, ~countOneBits(var_2.x), _wgslsmith_sub_u32(_wgslsmith_clamp_u32(_wgslsmith_add_u32(~var_0.x, firstTrailingBit(var_2.x)), _wgslsmith_sub_u32(_wgslsmith_dot_vec3_u32(var_2.xww, vec3<u32>(var_0.x, 84367u, var_2.x)), arg_2), arg_2), 1u), 1u);
            }
            let var_1 = _wgslsmith_sub_vec3_i32(_wgslsmith_mod_vec3_i32(func_3().b, _wgslsmith_clamp_vec3_i32(reverseBits(arg_1.b >> (var_0.ywx % vec3<u32>(32u))), vec3<i32>(arg_1.a.x & -8497i, _wgslsmith_div_i32(-5369i, arg_1.b.x), _wgslsmith_clamp_i32(arg_1.b.x, -35676i, -15587i)), -vec3<i32>(u_input.a.x, i32(-2147483648), i32(-2147483648)))), arg_1.b);
        }
        default: {
            let var_0 = _wgslsmith_add_vec3_u32(_wgslsmith_mod_vec3_u32(reverseBits(vec3<u32>(arg_2, 26009u, 2584u) | vec3<u32>(4294967295u, 1u, arg_2)), vec3<u32>(~arg_2 >> (arg_2 % 32u), arg_2, 23349u >> ((0u | arg_2) % 32u))), ~_wgslsmith_mult_vec3_u32(_wgslsmith_mod_vec3_u32(vec3<u32>(arg_2, arg_2, 4294967295u), vec3<u32>(arg_2, arg_2, arg_2)), ~vec3<u32>(8625u, 4294967295u, 39616u)) | _wgslsmith_sub_vec3_u32(abs(~vec3<u32>(arg_2, arg_2, arg_2)), select(vec3<u32>(arg_2, arg_2, arg_2) ^ vec3<u32>(2329u, 53689u, arg_2), _wgslsmith_mod_vec3_u32(vec3<u32>(13082u, 68405u, arg_2), vec3<u32>(0u, 14136u, arg_2)), select(vec3<bool>(false, false, false), vec3<bool>(false, false, true), vec3<bool>(false, true, true)))));
            if (true) {
                let var_1 = abs(abs(firstLeadingBit(vec4<u32>(0u, ~var_0.x, 1u, 89091u))));
                var var_2 = Struct_2(firstTrailingBit(vec3<i32>(-arg_1.b.x, (u_input.a.x & u_input.a.x) & u_input.a.x, 47076i)), vec3<i32>(-reverseBits(0i), _wgslsmith_mult_i32(-6730i, arg_1.b.x), reverseBits(u_input.a.x | _wgslsmith_clamp_i32(u_input.a.x, 35701i, u_input.a.x))));
                var_2 = arg_1;
            }
        }
    }
    var var_0 = func_2();
    var var_1 = true;
    return vec4<bool>(var_0.a != all(!(!vec2<bool>(false, var_0.a))), (arg_0.x == _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(arg_0.x)))) || select(true, false, any(vec2<bool>(false, false))), ~u_input.a.x == 2147483647i, true);
}

@compute
@workgroup_size(1)
fn main() {
    if (any(vec3<bool>(true, any(select(select(vec4<bool>(false, false, false, true), vec4<bool>(false, false, true, false), true), func_1(vec4<f32>(1129f, 449f, 1850f, 864f), Struct_2(vec3<i32>(u_input.a.x, -1i, u_input.a.x), u_input.a.zyz), 1u), vec4<bool>(true, true, true, true))), all(vec3<bool>(false, true, true))))) {
        return;
    }
    if (true) {
        loop {
            if (LOOP_COUNTERS[29u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[29u] = LOOP_COUNTERS[29u] + 1u;
            var var_0 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(-564f, 118f, 631f))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(315f, 528f, 425f))), vec3<bool>(true, true, true)))) + _wgslsmith_f_op_vec3_f32(round(vec3<f32>(_wgslsmith_f_op_f32(sign(-856f)), 281f, 145f))));
        }
        let var_0 = Struct_1(func_5() & true);
        var var_1 = Struct_2(u_input.a.zzy, u_input.a.zwy);
        var_1 = func_3();
        var_1 = func_3();
    }
    if (any(!func_1(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(-553f, -1291f, 1326f, 203f) * vec4<f32>(1000f, 1309f, -333f, 665f))), Struct_2(vec3<i32>(u_input.a.x, u_input.a.x, u_input.a.x), -vec3<i32>(u_input.a.x, 0i, u_input.a.x)), ~24175u << (0u % 32u)))) {
        loop {
            if (LOOP_COUNTERS[30u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[30u] = LOOP_COUNTERS[30u] + 1u;
            continue;
        }
        var var_0 = -vec4<i32>(0i, _wgslsmith_mod_i32(-32105i, i32(-2147483648)), -u_input.a.x, u_input.a.x);
        let var_1 = !vec4<bool>(all(select(vec4<bool>(false, true, true, false), vec4<bool>(true, true, true, true), true)), true, true, true);
        var var_2 = func_1(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(min(vec4<f32>(497f, 2060f, 2212f, 201f), _wgslsmith_f_op_vec4_f32(vec4<f32>(2505f, 1357f, 481f, 591f) - vec4<f32>(-872f, -343f, -1000f, -1731f)))), _wgslsmith_f_op_vec4_f32(vec4<f32>(511f, -1000f, -826f, 532f) * _wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(-509f, 1223f, 221f, -1036f))))), _wgslsmith_f_op_vec4_f32(vec4<f32>(902f, _wgslsmith_f_op_f32(round(415f)), 1394f, _wgslsmith_f_op_f32(-791f * -398f)) + _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(490f, -1545f, 2288f, 1120f)) * vec4<f32>(388f, -496f, -860f, -242f))), true)), Struct_2(vec3<i32>(23713i, var_0.x, 1i), u_input.a.xyx), 13687u).x;
    }
    if (false) {
    }
    let var_0 = 0u < _wgslsmith_clamp_u32(firstLeadingBit(1u), _wgslsmith_dot_vec3_u32(vec3<u32>(~0u, 1u, _wgslsmith_div_u32(1307u, 28140u)), vec3<u32>(1u, 1u, 1u)), 1u);
    loop {
        if (LOOP_COUNTERS[31u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[31u] = LOOP_COUNTERS[31u] + 1u;
        break;
    }
    let var_1 = !func_1(_wgslsmith_f_op_vec4_f32(-vec4<f32>(1f, 1f, 1f, 1f)), func_3(), 1u).yyw;
    let x = u_input.a;
    s_output = StorageBuffer(u_input.a.x);
}

`;