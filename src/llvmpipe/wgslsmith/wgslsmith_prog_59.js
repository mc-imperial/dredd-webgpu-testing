export const input = [125,254,120,91,67,134,218,35,109,175,84,94,136,21,173,179,95,246,250,21,95,22,28,122,152,172,85,22,81,192,205,196,43,42,211,187,154,142,58,142,74,249,184,60,253,203,123,103,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [125,254,120,91,67,134,218,35,109,175,84,94,136,21,173,179,95,246,250,21,95,22,28,122,152,172,85,22,81,192,205,196,43,42,211,187,154,142,58,142,74,249,184,60,253,203,123,103,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[125,254,120,91,67,134,218,35,109,175,84,94,136,21,173,179,95,246,250,21,95,22,28,122,152,172,85,22,81,192,205,196,43,42,211,187,154,142,58,142,74,249,184,60,253,203,123,103]}
// Seed: 258012650078878472

struct Struct_1 {
    a: i32,
}

struct UniformBuffer {
    a: u32,
    b: vec4<i32>,
    c: u32,
}

struct StorageBuffer {
    a: i32,
    b: vec4<i32>,
    c: f32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> LOOP_COUNTERS: array<u32, 23>;

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn func_1(arg_0: vec3<u32>, arg_1: Struct_1, arg_2: vec3<bool>) -> Struct_1 {
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
    }
    return arg_1;
}

fn func_4() -> f32 {
    let var_0 = vec3<f32>(-1318f, _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -2866f) * _wgslsmith_div_f32(1961f, -182f)))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-655f * -623f)) + _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-803f))))));
    let var_1 = select(false, false, u_input.b.x != 2147483647i);
    var var_2 = func_1(vec3<u32>(u_input.a, u_input.a, _wgslsmith_clamp_u32(~1u, abs(u_input.a), u_input.a)) << (~select(max(vec3<u32>(u_input.a, 4294967295u, 1u), vec3<u32>(4294967295u, u_input.a, 21985u)), vec3<u32>(6147u, u_input.c, 0u), vec3<bool>(var_1, var_1, var_1)) % vec3<u32>(32u)), Struct_1(func_1(~vec3<u32>(u_input.c, u_input.c, u_input.c) ^ ~vec3<u32>(4294967295u, 7854u, u_input.a), Struct_1(-u_input.b.x), !vec3<bool>(false, var_1, var_1)).a), !select(vec3<bool>(!var_1, !var_1, true), vec3<bool>(true, var_0.x != 162f, var_1 == true), select(!vec3<bool>(false, var_1, var_1), select(vec3<bool>(var_1, var_1, false), vec3<bool>(var_1, var_1, var_1), vec3<bool>(false, var_1, true)), select(vec3<bool>(true, true, false), vec3<bool>(false, var_1, false), true))));
    for (var var_3: i32; ; var_3 -= 1i) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
    }
    let var_3 = Struct_1(~(-1i));
    return var_0.x;
}

fn func_6() -> vec4<i32> {
    for (; ; ) {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        switch (_wgslsmith_dot_vec4_i32(vec4<i32>(-max(-172i, _wgslsmith_sub_i32(u_input.b.x, u_input.b.x)), -15550i, ~(firstLeadingBit(u_input.b.x) << (~54505u % 32u)), max(abs(~1i), u_input.b.x)), _wgslsmith_div_vec4_i32(_wgslsmith_clamp_vec4_i32(~vec4<i32>(-28228i, 23178i, -3820i, u_input.b.x), min(-vec4<i32>(1i, i32(-2147483648), u_input.b.x, u_input.b.x), u_input.b), u_input.b), vec4<i32>(-8311i, abs(62256i), ~9930i, 8896i)))) {
            case 0i: {
                var var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1551f));
                var_0 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-904f * 1273f))) - 1f)) - _wgslsmith_f_op_f32(-1564f * _wgslsmith_f_op_f32(f32(-1f) * -620f)));
            }
            case -74526i: {
                var var_0 = Struct_1(min(countOneBits(-u_input.b.x), -abs(1i)));
                break;
            }
            default: {
                let var_0 = Struct_1(-func_1(abs(~vec3<u32>(u_input.a, 0u, u_input.a)), Struct_1(-u_input.b.x), select(select(vec3<bool>(false, true, true), vec3<bool>(false, true, false), vec3<bool>(false, true, false)), vec3<bool>(true, true, true), vec3<bool>(false, false, false))).a);
                let var_1 = var_0;
                break;
            }
        }
        for (var var_0 = -31909i; any(vec2<bool>(true, true)); var_0 += 1i) {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            var_0 = _wgslsmith_div_i32(max(-(2277i << (u_input.a % 32u)), ~(~(-u_input.b.x))), 2147483647i);
        }
        for (var var_0 = 0i; false; var_0 += 1i) {
            if (LOOP_COUNTERS[4u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
            let var_1 = u_input.b.x;
            var_0 = u_input.b.x;
        }
        loop {
            if (LOOP_COUNTERS[5u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
            let var_0 = Struct_1(_wgslsmith_add_i32(u_input.b.x, u_input.b.x));
        }
        for (var var_0 = 2147483647i; var_0 < -40132i; var_0 = firstTrailingBit(u_input.b.x) | select(_wgslsmith_add_i32(abs(u_input.b.x), 48636i), 1i, all(select(vec2<bool>(false, false), select(vec2<bool>(true, true), vec2<bool>(true, true), true), any(vec2<bool>(true, true)))))) {
            if (LOOP_COUNTERS[6u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
            var var_1 = func_1(max(_wgslsmith_clamp_vec3_u32(vec3<u32>(1u, u_input.a, u_input.c), _wgslsmith_mult_vec3_u32(vec3<u32>(u_input.a, 6870u, u_input.a), vec3<u32>(0u, u_input.a, u_input.c)), _wgslsmith_mult_vec3_u32(vec3<u32>(u_input.a, 4294967295u, u_input.a), vec3<u32>(0u, u_input.c, 0u))) >> ((~vec3<u32>(u_input.a, u_input.c, u_input.a) << (~vec3<u32>(u_input.a, u_input.a, u_input.a) % vec3<u32>(32u))) % vec3<u32>(32u)), min(_wgslsmith_clamp_vec3_u32(vec3<u32>(u_input.c, 24169u, 50255u), vec3<u32>(26314u, 1u, u_input.c), vec3<u32>(4294967295u, u_input.c, 1u)), ~vec3<u32>(u_input.c, u_input.a, u_input.c)) >> (_wgslsmith_add_vec3_u32(_wgslsmith_mult_vec3_u32(vec3<u32>(29126u, u_input.c, 29635u), vec3<u32>(u_input.a, u_input.a, u_input.c)), ~vec3<u32>(4294967295u, 4294967295u, u_input.a)) % vec3<u32>(32u))), Struct_1(u_input.b.x), !vec3<bool>(true, !(u_input.c > 73462u), !any(vec4<bool>(false, true, false, false))));
            break;
        }
    }
    var var_0 = -(vec2<i32>(abs(-u_input.b.x), -35744i) & u_input.b.ww);
    for (var var_1 = 1i; var_1 <= -2202i; var_1 = firstTrailingBit(u_input.b.x)) {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        let var_2 = 29776u;
        var_0 = (u_input.b.zy >> ((~(vec2<u32>(u_input.a, u_input.a) >> (vec2<u32>(1u, 8322u) % vec2<u32>(32u))) << (vec2<u32>(1u, 1u) % vec2<u32>(32u))) % vec2<u32>(32u))) << (_wgslsmith_sub_vec2_u32(select(~vec2<u32>(u_input.a, var_2) << (~vec2<u32>(var_2, var_2) % vec2<u32>(32u)), min(vec2<u32>(u_input.a, var_2), vec2<u32>(0u, 64097u)) >> (~vec2<u32>(82713u, u_input.a) % vec2<u32>(32u)), vec2<bool>(true, true)), _wgslsmith_mod_vec2_u32(~(vec2<u32>(u_input.c, var_2) | vec2<u32>(u_input.a, 1u)), select(~vec2<u32>(var_2, var_2), ~vec2<u32>(1u, 25048u), 2147483647i < var_0.x))) % vec2<u32>(32u));
        var_0 = -select(select(u_input.b.yx, vec2<i32>(-34870i, -24774i | u_input.b.x), true), u_input.b.zw << (firstLeadingBit(_wgslsmith_clamp_vec2_u32(vec2<u32>(var_2, var_2), vec2<u32>(u_input.a, 4294967295u), vec2<u32>(50241u, u_input.a))) % vec2<u32>(32u)), !select(vec2<bool>(true, false), select(vec2<bool>(false, false), vec2<bool>(true, true), vec2<bool>(true, true)), true));
    }
    var_0 = -(~vec2<i32>(u_input.b.x >> (12901u % 32u), reverseBits(-5308i)));
    loop {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        if (!any(!select(select(vec4<bool>(true, false, false, true), vec4<bool>(true, false, false, false), false), select(vec4<bool>(false, true, false, true), vec4<bool>(true, true, true, false), vec4<bool>(true, true, false, false)), select(vec4<bool>(false, false, false, true), vec4<bool>(false, false, false, false), vec4<bool>(false, true, false, false))))) {
        }
        break;
    }
    return u_input.b;
}

fn func_5(arg_0: f32, arg_1: Struct_1) -> vec3<i32> {
    let var_0 = arg_1;
    var var_1 = Struct_1(102633i);
    let var_2 = min(92405u, _wgslsmith_mod_u32(~min(_wgslsmith_sub_u32(1u, u_input.c), u_input.a & u_input.c), _wgslsmith_mult_u32(1u, u_input.c)));
    loop {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        loop {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
            var var_3 = func_6();
            let var_4 = Struct_1(_wgslsmith_dot_vec3_i32(-(~u_input.b.wzw), -(vec3<i32>(u_input.b.x, 1i, var_1.a) << (vec3<u32>(4294967295u, u_input.a, 4294967295u) % vec3<u32>(32u)))));
            let var_5 = Struct_1(i32(-1i) * -1113i);
            let var_6 = ~(vec2<u32>(1u, ~(~u_input.c)) << (abs(vec2<u32>(reverseBits(287u), ~u_input.a)) % vec2<u32>(32u)));
        }
    }
    let var_3 = !(all(select(vec4<bool>(false, false, false, true), select(vec4<bool>(true, true, false, true), vec4<bool>(false, false, false, false), vec4<bool>(true, false, true, false)), true)) == all(select(select(vec2<bool>(false, true), vec2<bool>(true, false), vec2<bool>(false, true)), select(vec2<bool>(false, true), vec2<bool>(false, true), true), false)));
    return vec3<i32>(_wgslsmith_add_i32(firstTrailingBit(countOneBits(0i)) | u_input.b.x, _wgslsmith_mult_i32(13001i, ~arg_1.a)), -1i, countOneBits(~firstTrailingBit(u_input.b.x)));
}

fn func_3(arg_0: Struct_1) -> f32 {
    loop {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        var var_0 = arg_0;
        var var_1 = arg_0;
        break;
    }
    if (false) {
        if (true) {
            let var_0 = _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(round(vec3<f32>(_wgslsmith_div_f32(2043f, _wgslsmith_f_op_f32(trunc(219f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(716f, 622f)) + 1877f), -589f))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_div_f32(-387f, -986f), _wgslsmith_f_op_f32(-648f * -517f), _wgslsmith_f_op_f32(-737f + -916f)) + _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(round(vec3<f32>(-1000f, -630f, -1195f))))))));
        }
        let var_0 = vec3<i32>(1i, -u_input.b.x, ~(-1261i)) & func_5(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_4())), Struct_1(u_input.b.x));
        let var_1 = func_1(_wgslsmith_add_vec3_u32(vec3<u32>(~select(u_input.c, u_input.a, true), 0u, ~4294967295u), ~vec3<u32>(u_input.a, 50847u, u_input.c)), arg_0, vec3<bool>(false, true, !all(vec2<bool>(false, true))));
    }
    var var_0 = 1123f;
    switch (arg_0.a) {
        case -54734i: {
        }
        case -1i: {
        }
        case 1i: {
            var var_1 = select(select(!select(vec3<bool>(true, true, true), vec3<bool>(true, false, true), u_input.c != 4294967295u), vec3<bool>(true, true, true), vec3<bool>(true, true, true)), vec3<bool>(true | (_wgslsmith_sub_i32(u_input.b.x, u_input.b.x) < u_input.b.x), !select(u_input.c <= 24844u, true, all(vec3<bool>(false, true, false))), false), true);
            loop {
                if (LOOP_COUNTERS[12u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
                var_0 = 386f;
                var var_2 = Struct_1(firstLeadingBit(_wgslsmith_dot_vec2_i32(vec2<i32>(_wgslsmith_div_i32(u_input.b.x, u_input.b.x), ~u_input.b.x), u_input.b.xy)));
            }
            var_0 = _wgslsmith_f_op_f32(step(-782f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1000f))))));
            loop {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                let var_2 = 0i;
                return 189f;
            }
        }
        case 26012i: {
            var var_1 = 0i;
            var_1 = _wgslsmith_mult_i32(func_5(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(1713f - _wgslsmith_f_op_f32(885f - -285f)) - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-452f + 260f) - 2020f)), Struct_1(-17473i)).x, -14431i);
            var_0 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(step(1000f, 646f)), _wgslsmith_f_op_f32(ceil(-1670f))))) * _wgslsmith_f_op_f32(560f + _wgslsmith_f_op_f32(-631f - _wgslsmith_f_op_f32(f32(-1f) * -762f)))) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(func_4()) + _wgslsmith_f_op_f32(-_wgslsmith_div_f32(-444f, -1612f)))));
            var_1 = _wgslsmith_div_i32(~(-102555i), _wgslsmith_mod_i32(~(-10871i), 2147483647i));
            switch (_wgslsmith_mult_i32(i32(-2147483648), _wgslsmith_div_i32(func_6().x, _wgslsmith_clamp_i32(~_wgslsmith_div_i32(66041i, 57352i), arg_0.a, min(12331i ^ arg_0.a, _wgslsmith_dot_vec3_i32(u_input.b.yxy, vec3<i32>(arg_0.a, u_input.b.x, -1i))))))) {
                case -1i: {
                    var_1 = _wgslsmith_dot_vec3_i32(func_5(1172f, func_1(_wgslsmith_sub_vec3_u32(vec3<u32>(u_input.a, u_input.a, u_input.a), vec3<u32>(4294967295u, 0u, u_input.a)) | (vec3<u32>(5114u, u_input.c, 0u) >> (vec3<u32>(9881u, u_input.c, 0u) % vec3<u32>(32u))), arg_0, vec3<bool>(true, true, true))), u_input.b.wzy);
                    var_0 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_div_f32(1448f, -1836f) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(-294f))))) + _wgslsmith_div_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(-1854f, 3543f, true))), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(f32(-1f) * -866f)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-650f)) - _wgslsmith_f_op_f32(-147f))));
                    let var_2 = ~(vec4<u32>(_wgslsmith_mod_u32(4294967295u, 33120u), u_input.c << (_wgslsmith_mod_u32(u_input.a, 24905u) % 32u), u_input.c | 4294967295u, 0u) | _wgslsmith_mod_vec4_u32(abs(vec4<u32>(u_input.a, 0u, u_input.c, 44373u)) | ~vec4<u32>(u_input.a, 22617u, u_input.c, 81332u), (vec4<u32>(u_input.c, u_input.c, u_input.a, u_input.c) << (vec4<u32>(1u, u_input.a, 21429u, 62449u) % vec4<u32>(32u))) & _wgslsmith_mod_vec4_u32(vec4<u32>(1u, u_input.a, u_input.a, u_input.a), vec4<u32>(u_input.c, 43607u, 1u, 0u))));
                    let var_3 = Struct_1(0i);
                }
                case i32(-2147483648): {
                    var var_2 = func_1(~_wgslsmith_mult_vec3_u32(_wgslsmith_mod_vec3_u32(select(vec3<u32>(u_input.a, 35179u, 1u), vec3<u32>(u_input.a, 4294967295u, 6939u), false), ~vec3<u32>(4294967295u, 0u, u_input.a)), vec3<u32>(u_input.a, 0u, select(u_input.c, u_input.c, false))), arg_0, !select(vec3<bool>(true, true, true), !select(vec3<bool>(false, true, true), vec3<bool>(false, true, true), false), select(select(vec3<bool>(false, true, false), vec3<bool>(true, false, true), vec3<bool>(false, true, false)), vec3<bool>(true, true, true), true)));
                    let var_3 = Struct_1(var_2.a);
                    var var_4 = func_1(vec3<u32>(_wgslsmith_dot_vec2_u32(~firstTrailingBit(vec2<u32>(u_input.c, 1u)), vec2<u32>(2460u, u_input.c & 68875u)), (u_input.c ^ firstLeadingBit(55987u)) & ~_wgslsmith_clamp_u32(u_input.c, u_input.a, u_input.a), 4294967295u), func_1(countOneBits(max(vec3<u32>(1u, 83943u, u_input.c), vec3<u32>(54757u, u_input.a, u_input.c))) >> ((~vec3<u32>(4294967295u, 0u, 4294967295u) & vec3<u32>(u_input.c, 34815u, u_input.a)) % vec3<u32>(32u)), func_1(~reverseBits(vec3<u32>(16321u, 25408u, 0u)), Struct_1(u_input.b.x), vec3<bool>(true, true, true)), !vec3<bool>(true, u_input.a > u_input.a, all(vec3<bool>(false, true, true)))), vec3<bool>(true, true, false));
                    let var_5 = reverseBits(4294967295u);
                }
                default: {
                    var var_2 = _wgslsmith_f_op_vec4_f32(vec4<f32>(1550f, -342f, -997f, _wgslsmith_f_op_f32(-581f)) + _wgslsmith_f_op_vec4_f32(floor(vec4<f32>(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(719f + 1708f), 1379f, true)), 1f, _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(floor(842f)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(256f + -154f) + 1f)))));
                    var_1 = 1i;
                    var var_3 = firstLeadingBit(_wgslsmith_dot_vec3_i32(func_6().zyy, vec3<i32>(countOneBits(-58303i), firstTrailingBit(-1i), 40727i)));
                    var var_4 = select(vec4<bool>(true, true, true, true), vec4<bool>(true, true, !(!any(vec4<bool>(true, true, false, true))), true), all(!(!select(vec4<bool>(true, true, false, true), vec4<bool>(false, true, false, false), true))));
                }
            }
        }
        default: {
            switch (abs(u_input.b.x)) {
                case -9989i: {
                    var var_1 = Struct_1(u_input.b.x);
                    var var_2 = arg_0;
                }
                default: {
                    var var_1 = !(false | !all(vec4<bool>(false, true, true, true)));
                    var var_2 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(abs(_wgslsmith_f_op_vec2_f32(vec2<f32>(-514f, -714f) * _wgslsmith_f_op_vec2_f32(-vec2<f32>(-164f, -446f)))))));
                    var_2 = _wgslsmith_f_op_vec2_f32(floor(vec2<f32>(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-var_2.x))))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(var_2.x + -657f))) + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(340f + var_2.x) + _wgslsmith_f_op_f32(func_4()))))));
                }
            }
        }
    }
    switch (-(u_input.b.x ^ 2147483647i)) {
        default: {
            if (false) {
                var_0 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -1251f) * _wgslsmith_f_op_f32(round(2534f)));
                var var_1 = u_input.a;
                let var_2 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(-177f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(550f * 208f))))), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1000f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(-1579f, -179f))))))));
                var_1 = u_input.a;
                var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-872f));
            }
            switch (-1827i) {
                case -17862i: {
                    var_0 = 1000f;
                    var var_1 = func_1(min(_wgslsmith_div_vec3_u32(~(~vec3<u32>(1u, 43901u, 1u)), vec3<u32>(_wgslsmith_clamp_u32(0u, 1u, u_input.c), 1u, abs(4905u))), vec3<u32>(u_input.a, ~select(u_input.c, u_input.a, true), u_input.a >> (u_input.a % 32u))), func_1(~(max(vec3<u32>(13062u, u_input.c, u_input.a), vec3<u32>(8577u, 0u, u_input.a)) & ~vec3<u32>(6955u, 26694u, u_input.a)), Struct_1(arg_0.a), !(!select(vec3<bool>(true, false, false), vec3<bool>(true, false, true), false))), !select(select(select(vec3<bool>(false, true, false), vec3<bool>(true, true, false), vec3<bool>(true, true, true)), select(vec3<bool>(false, true, true), vec3<bool>(false, false, false), false), false), vec3<bool>(true, true, true), select(vec3<bool>(true, true, true), vec3<bool>(true, true, false), true)));
                    var_0 = _wgslsmith_f_op_f32(-1000f * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(-1116f, _wgslsmith_f_op_f32(1228f + 516f), all(vec3<bool>(true, true, true))))) - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(1590f + _wgslsmith_f_op_f32(step(249f, 341f))) * _wgslsmith_f_op_f32(-1653f))));
                    var var_2 = Struct_1(-4844i ^ (func_5(-145f, Struct_1(u_input.b.x)).x ^ abs(arg_0.a & 0i)));
                }
                case 0i: {
                    var_0 = -885f;
                    var_0 = _wgslsmith_f_op_f32(func_4());
                    var var_1 = _wgslsmith_f_op_f32(f32(-1f) * -110f);
                    var_0 = 1f;
                    var_1 = _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(_wgslsmith_div_f32(_wgslsmith_f_op_f32(func_4()), _wgslsmith_f_op_f32(max(152f, 206f))))))));
                }
                default: {
                }
            }
            var var_1 = ~u_input.a;
        }
    }
    return _wgslsmith_f_op_f32(func_4());
}

fn func_2(arg_0: vec3<i32>, arg_1: Struct_1, arg_2: i32, arg_3: Struct_1) -> vec3<bool> {
    loop {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        for (var var_0 = 2147483647i; true; var_0 = _wgslsmith_div_i32(func_1(vec3<u32>(countOneBits(_wgslsmith_mod_u32(48457u, 60498u)), u_input.c, 70076u), arg_1, select(vec3<bool>(all(vec4<bool>(true, true, true, true)), false, false), vec3<bool>(true, true, true), vec3<bool>(true, false, any(vec3<bool>(true, true, false))))).a, -arg_2)) {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            let var_1 = true;
            let var_2 = Struct_1(_wgslsmith_div_i32(-(~arg_2), -arg_3.a));
            var var_3 = vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1133f)) + -1866f), -820f, _wgslsmith_f_op_f32(func_3(arg_3)), -1274f);
            var_3 = _wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(sign(vec4<f32>(_wgslsmith_f_op_f32(-192f * var_3.x), _wgslsmith_f_op_f32(trunc(var_3.x)), var_3.x, 2259f))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(-vec4<f32>(1666f, var_3.x, var_3.x, 1530f)))) - vec4<f32>(_wgslsmith_f_op_f32(ceil(-941f)), var_3.x, _wgslsmith_f_op_f32(-171f), _wgslsmith_f_op_f32(317f * 673f)))) * vec4<f32>(_wgslsmith_f_op_f32(-1939f), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-var_3.x), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_3.x))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(var_3.x - _wgslsmith_f_op_f32(925f - -1030f))), _wgslsmith_div_f32(var_3.x, 1299f)));
            var var_4 = Struct_1(2147483647i);
        }
        let var_0 = _wgslsmith_f_op_f32(-362f);
        continue;
    }
    let var_0 = vec4<f32>(_wgslsmith_f_op_f32(select(215f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -1171f) + 333f)), true)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-661f - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(-141f)) * _wgslsmith_div_f32(-1334f, 1564f)))), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(trunc(-1000f)), _wgslsmith_f_op_f32(-185f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1942f)))));
    switch (1i) {
        case -20272i: {
            var var_1 = ~u_input.a;
        }
        case i32(-2147483648): {
            if (true | any(vec3<bool>(select(true, true, any(vec3<bool>(true, true, true))), (arg_3.a > arg_0.x) && true, any(vec4<bool>(true, true, true, true))))) {
                var var_1 = func_1(~reverseBits(vec3<u32>(u_input.c & 0u, reverseBits(u_input.c), 1u)), func_1(~vec3<u32>(_wgslsmith_add_u32(u_input.c, u_input.c), u_input.a | 37664u, 0u), func_1(select(max(vec3<u32>(45090u, u_input.c, 38163u), vec3<u32>(u_input.a, 0u, 0u)), vec3<u32>(41579u, u_input.a, u_input.c) & vec3<u32>(6481u, u_input.a, u_input.c), vec3<bool>(true, true, true)), arg_1, select(vec3<bool>(true, true, true), select(vec3<bool>(true, true, false), vec3<bool>(false, false, true), vec3<bool>(false, false, true)), true)), vec3<bool>(true, true, true)), vec3<bool>(true, arg_1.a < arg_0.x, true || ((2147483647i <= arg_2) && (6860i > arg_3.a))));
                var var_2 = arg_3;
                var_1 = arg_1;
                var var_3 = _wgslsmith_clamp_vec4_i32(u_input.b ^ reverseBits(~(u_input.b & u_input.b)), ~(-vec4<i32>(~var_1.a, 8312i, ~arg_0.x, var_2.a)), ~(~(u_input.b << (firstTrailingBit(vec4<u32>(u_input.c, 1u, u_input.a, 49131u)) % vec4<u32>(32u)))));
                let var_4 = !select(!vec2<bool>(any(vec4<bool>(true, false, true, true)), all(vec4<bool>(false, true, false, false))), vec2<bool>(true, true), vec2<bool>(true, true));
            }
            var var_1 = ~countOneBits(reverseBits(~select(vec4<u32>(u_input.a, 15063u, 16176u, 0u), vec4<u32>(10635u, u_input.a, u_input.a, u_input.a), vec4<bool>(false, false, true, true))));
            var_1 = vec4<u32>(4294967295u, _wgslsmith_mod_u32(var_1.x, 4294967295u), 15947u, var_1.x);
            var var_2 = u_input.b;
            for (var var_3 = -42138i; false; ) {
                if (LOOP_COUNTERS[16u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
                continue;
            }
        }
        default: {
            for (; false; ) {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                var var_1 = true;
                let var_2 = arg_2;
                var_1 = (false & !(!all(vec3<bool>(false, true, false)))) && (true | (_wgslsmith_f_op_f32(_wgslsmith_div_f32(var_0.x, var_0.x) - var_0.x) <= 1520f));
                var var_3 = arg_3;
                continue;
            }
            if (all(select(select(!select(vec4<bool>(true, false, true, false), vec4<bool>(true, false, true, true), vec4<bool>(false, true, true, false)), vec4<bool>(true, true, false, true), all(vec4<bool>(true, true, true, true))), select(select(vec4<bool>(true, false, true, true), vec4<bool>(true, true, false, true), any(vec2<bool>(false, false))), select(vec4<bool>(false, false, false, false), vec4<bool>(true, true, true, true), select(vec4<bool>(false, false, false, false), vec4<bool>(true, true, true, true), true)), select(vec4<bool>(true, false, true, false), select(vec4<bool>(true, true, false, false), vec4<bool>(true, true, true, true), false), true)), (-1154i << ((u_input.a << (u_input.c % 32u)) % 32u)) != _wgslsmith_add_i32(-u_input.b.x, -1i)))) {
                let var_1 = vec2<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-651f - var_0.x) - _wgslsmith_f_op_f32(215f * 1452f)) * _wgslsmith_div_f32(var_0.x, _wgslsmith_f_op_f32(max(-840f, var_0.x)))))), var_0.x);
                var var_2 = arg_1;
                var var_3 = arg_3;
            }
            loop {
                if (LOOP_COUNTERS[18u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
                let var_1 = all(vec3<bool>(!any(vec3<bool>(true, false, false)) & true, abs(_wgslsmith_dot_vec4_i32(u_input.b, vec4<i32>(-21414i, 1i, arg_0.x, arg_1.a))) == u_input.b.x, 47351u <= ~_wgslsmith_clamp_u32(4294967295u, u_input.a, 0u)));
                let var_2 = arg_1;
                var var_3 = vec2<u32>(1u << (u_input.c % 32u), _wgslsmith_clamp_u32(~firstTrailingBit(u_input.a) >> (u_input.a % 32u), ~_wgslsmith_mod_u32(~1u, ~14950u), u_input.a));
                continue;
            }
        }
    }
    switch (-23578i) {
        default: {
        }
    }
    for (var var_1 = 1i; ; var_1 -= 1i) {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
        break;
    }
    return !select(vec3<bool>(_wgslsmith_f_op_f32(var_0.x - 1121f) == var_0.x, true, _wgslsmith_mult_i32(16750i, 28582i) < func_1(vec3<u32>(34090u, u_input.a, 4294967295u), arg_3, vec3<bool>(false, false, true)).a), vec3<bool>(var_0.x > _wgslsmith_f_op_f32(-var_0.x), select(u_input.c, u_input.c, true) > u_input.c, true), !any(vec3<bool>(true, true, true)));
}

fn func_7(arg_0: u32, arg_1: vec3<bool>) -> StorageBuffer {
    let var_0 = ~select(~_wgslsmith_clamp_vec4_u32(countOneBits(vec4<u32>(arg_0, 40494u, arg_0, 20006u)), ~vec4<u32>(u_input.c, 75461u, 15348u, 19667u), reverseBits(vec4<u32>(u_input.a, arg_0, u_input.c, 20128u))), vec4<u32>(~u_input.c, ~u_input.c, _wgslsmith_dot_vec2_u32(vec2<u32>(1u, 23838u), vec2<u32>(4418u, u_input.a)), u_input.c) | (_wgslsmith_mult_vec4_u32(vec4<u32>(arg_0, arg_0, arg_0, u_input.c), vec4<u32>(12049u, 1u, u_input.a, 0u)) & _wgslsmith_add_vec4_u32(vec4<u32>(1u, 4294967295u, 37646u, arg_0), vec4<u32>(arg_0, arg_0, u_input.a, arg_0))), !((u_input.c > 4294967295u) || any(vec3<bool>(arg_1.x, arg_1.x, arg_1.x))));
    for (var var_1 = 0i; any(select(select(vec4<bool>(select(arg_1.x, arg_1.x, arg_1.x), false, all(vec4<bool>(true, arg_1.x, arg_1.x, arg_1.x)), arg_1.x), vec4<bool>(!arg_1.x, arg_1.x, all(vec2<bool>(arg_1.x, true)), true), !vec4<bool>(true, arg_1.x, arg_1.x, arg_1.x)), !vec4<bool>(true, all(vec4<bool>(arg_1.x, false, arg_1.x, false)), arg_1.x, all(arg_1.yz)), !vec4<bool>(any(arg_1), any(arg_1.xx), true, !arg_1.x))); var_1 = u_input.b.x) {
        if (LOOP_COUNTERS[20u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
    }
    for (var var_1 = max(-u_input.b.x << (_wgslsmith_mod_u32(arg_0 & _wgslsmith_dot_vec3_u32(var_0.xzx, vec3<u32>(1u, var_0.x, 1u)), var_0.x) % 32u), 1i); var_1 == 0i; var_1 = firstTrailingBit(_wgslsmith_mult_i32(-(~_wgslsmith_div_i32(u_input.b.x, u_input.b.x)), 29373i))) {
        if (LOOP_COUNTERS[21u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
        var var_2 = u_input.b << ((vec4<u32>(~(~u_input.c), abs(48414u), _wgslsmith_mod_u32(_wgslsmith_mod_u32(1u, 49659u), ~u_input.c), var_0.x) ^ var_0) % vec4<u32>(32u));
        for (; arg_1.x; ) {
            if (LOOP_COUNTERS[22u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
            break;
        }
        var var_3 = -544f;
        let var_4 = Struct_1(u_input.b.x & 12674i);
        continue;
    }
    var var_1 = Struct_1(-30382i);
    var var_2 = _wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(-277f, _wgslsmith_f_op_f32(f32(-1f) * -1379f), _wgslsmith_f_op_f32(-364f)) + _wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1500f, -869f, 438f)), vec3<f32>(-1428f, -547f, -295f)))) + _wgslsmith_f_op_vec3_f32(select(vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -2205f), 563f, _wgslsmith_f_op_f32(func_4())), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(258f, 1485f, -603f)) - vec3<f32>(-483f, 123f, 449f)), vec3<bool>(func_2(vec3<i32>(33200i, 94142i, u_input.b.x), Struct_1(i32(-2147483648)), var_1.a, Struct_1(var_1.a)).x, all(vec4<bool>(arg_1.x, false, arg_1.x, arg_1.x)), true))))));
    return StorageBuffer(-(~(-1i)), vec4<i32>(var_1.a, 2147483647i, _wgslsmith_mod_i32(-410i, var_1.a), i32(-1i) * -25375i), var_2.x);
}

@compute
@workgroup_size(1)
fn main() {
    let x = u_input.a;
    s_output = func_7(_wgslsmith_clamp_u32(abs(abs(~1u)), _wgslsmith_mult_u32(_wgslsmith_dot_vec4_u32(~vec4<u32>(0u, u_input.a, u_input.c, 0u), vec4<u32>(985u, u_input.c, u_input.a, 37176u) & vec4<u32>(u_input.c, 114854u, 0u, u_input.a)), 35885u), _wgslsmith_add_u32(~(u_input.c | 1u), 11414u)), !(!func_2(abs(u_input.b.yzw), Struct_1(u_input.b.x), _wgslsmith_clamp_i32(-450i, -1i, 0i), func_1(vec3<u32>(u_input.a, u_input.c, 4294967295u), Struct_1(i32(-2147483648)), vec3<bool>(true, false, true)))));
}

`;