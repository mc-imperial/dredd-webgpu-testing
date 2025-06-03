export const input = [2,234,108,103,188,140,60,108,226,125,86,122,129,196,10,37,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [2,234,108,103,188,140,60,108,226,125,86,122,129,196,10,37,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[2,234,108,103,188,140,60,108,226,125,86,122,129,196,10,37]}
// Seed: 3550967330696625093

struct Struct_1 {
    a: i32,
    b: bool,
    c: i32,
    d: vec3<u32>,
    e: i32,
}

struct UniformBuffer {
    a: vec4<u32>,
}

struct StorageBuffer {
    a: u32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> LOOP_COUNTERS: array<u32, 24>;

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn func_6(arg_0: Struct_1) -> f32 {
    switch (_wgslsmith_mult_i32(5306i, arg_0.a)) {
        case -1i: {
            switch (_wgslsmith_clamp_i32(-(~abs(arg_0.a)), arg_0.e, _wgslsmith_mod_i32(-arg_0.c >> (abs(u_input.a.x) % 32u), ~1i))) {
                default: {
                    var var_0 = min(0u, 1102u);
                }
            }
            let var_0 = true;
            let var_1 = vec2<bool>(!arg_0.b, var_0);
            for (; ; ) {
                if (LOOP_COUNTERS[0u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
            }
            for (var var_2 = -14453i; var_2 < 0i; ) {
                if (LOOP_COUNTERS[1u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
            }
        }
        default: {
            if (any(vec2<bool>(true, true)) && true) {
                var var_0 = true;
                var_0 = all(select(vec3<bool>(arg_0.b, arg_0.b, arg_0.b & true), !vec3<bool>(true, arg_0.b, arg_0.b), arg_0.b & false));
                var_0 = arg_0.b;
                var var_1 = arg_0;
                var var_2 = true;
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        continue;
    }
    if (arg_0.b) {
        for (var var_0 = -25573i; ; var_0 -= 1i) {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            return _wgslsmith_f_op_f32(trunc(427f));
        }
    }
    var var_0 = arg_0;
    return -244f;
}

fn func_5() -> Struct_1 {
    for (var var_0 = 0i; var_0 < 0i; var_0 = 6925i) {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        for (var var_1 = 1i; true; var_1 -= 1i) {
            if (LOOP_COUNTERS[5u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
            var var_2 = Struct_1(max(~(0i), 1i) | _wgslsmith_mod_i32(-24175i, _wgslsmith_sub_i32(firstTrailingBit(0i), 2147483647i)), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-1056f))) <= _wgslsmith_f_op_f32(func_6(Struct_1(~0i, true, firstLeadingBit(-34492i), vec3<u32>(u_input.a.x, 9262u, u_input.a.x) | vec3<u32>(u_input.a.x, 40595u, u_input.a.x), 0i))), ~(~_wgslsmith_dot_vec2_i32(vec2<i32>(-1i, 29742i), vec2<i32>(0i, -39490i))) | 1i, u_input.a.ywz << (vec3<u32>(max(~22762u, _wgslsmith_add_u32(19296u, u_input.a.x)), u_input.a.x, u_input.a.x) % vec3<u32>(32u)), i32(-1i) * i32(-2147483648));
        }
    }
    for (var var_0 = -1i; ; var_0 -= 1i) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
    }
    switch (_wgslsmith_dot_vec3_i32(vec3<i32>(abs(6990i), -33965i, 2147483647i), vec3<i32>(1i, i32(-1i) * -(~(-19676i)), 15549i))) {
        default: {
        }
    }
    var var_0 = Struct_1(-6976i, true, _wgslsmith_add_i32(-41260i, countOneBits(firstTrailingBit(0i))), reverseBits(max(vec3<u32>(u_input.a.x, 0u, 19294u), countOneBits(vec3<u32>(u_input.a.x, u_input.a.x, u_input.a.x))) >> (firstLeadingBit(~u_input.a.zww) % vec3<u32>(32u))), 1i);
    var_0 = Struct_1(0i, true, -1i, firstLeadingBit(~firstTrailingBit(abs(var_0.d))), firstTrailingBit(firstTrailingBit(-48514i)));
    return Struct_1(reverseBits(-(~var_0.c)), true, i32(-1i) * -1i, _wgslsmith_sub_vec3_u32(~vec3<u32>(var_0.d.x, 4294967295u, ~var_0.d.x), _wgslsmith_clamp_vec3_u32(min(var_0.d, max(var_0.d, vec3<u32>(0u, 0u, 23399u))), ~u_input.a.wxz, vec3<u32>(0u, 1u, 4294967295u) << (var_0.d % vec3<u32>(32u)))), -2002i);
}

fn func_7(arg_0: u32, arg_1: Struct_1) -> i32 {
    var var_0 = (~(~_wgslsmith_add_u32(arg_0, 4294967295u)) >> (u_input.a.x % 32u)) << (_wgslsmith_add_u32(~firstTrailingBit(4294967295u), max(firstTrailingBit(~arg_1.d.x), ~_wgslsmith_mult_u32(u_input.a.x, 1u))) % 32u);
    let var_1 = !vec2<bool>(func_5().b, true);
    let var_2 = _wgslsmith_mult_i32(arg_1.e, ~_wgslsmith_add_i32(arg_1.a, arg_1.c));
    var var_3 = func_5();
    let var_4 = ~(42139u << (~(arg_1.d.x | 40174u) % 32u));
    return var_3.e;
}

fn func_8(arg_0: Struct_1, arg_1: vec4<i32>) -> u32 {
    if (all(vec4<bool>(arg_0.b, all(vec3<bool>(arg_0.b, false, arg_0.b)), true, arg_1.x == abs(_wgslsmith_mult_i32(0i, arg_0.c))))) {
        loop {
            if (LOOP_COUNTERS[7u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
            let var_0 = _wgslsmith_mult_u32(~(1u | ~u_input.a.x) >> (~1u % 32u), ~(~(~(~1u))));
            var var_1 = Struct_1(i32(-2147483648), select(false, !arg_0.b, arg_0.b), ~(-arg_1.x), select(arg_0.d, abs(~abs(arg_0.d)), select(vec3<bool>(true, false, arg_0.b), select(vec3<bool>(arg_0.b, true, false), select(vec3<bool>(false, false, true), vec3<bool>(arg_0.b, arg_0.b, false), vec3<bool>(arg_0.b, arg_0.b, arg_0.b)), true), select(!vec3<bool>(arg_0.b, false, arg_0.b), !vec3<bool>(arg_0.b, true, arg_0.b), select(vec3<bool>(false, arg_0.b, true), vec3<bool>(arg_0.b, arg_0.b, arg_0.b), vec3<bool>(false, true, arg_0.b))))), ~2147483647i << (_wgslsmith_div_u32(var_0, arg_0.d.x) % 32u));
        }
    }
    let var_0 = false;
    switch (abs(i32(-1i) * -_wgslsmith_div_i32(-45019i, arg_1.x))) {
        case 7733i: {
            let var_1 = ~min(arg_0.d.x, 48532u >> (_wgslsmith_clamp_u32(arg_0.d.x, arg_0.d.x, 4294967295u) % 32u)) ^ ~0u;
        }
        case -1i: {
            let var_1 = arg_0.a;
        }
        default: {
            loop {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                break;
            }
            let var_1 = Struct_1(arg_1.x, true, firstLeadingBit(-_wgslsmith_dot_vec3_i32(_wgslsmith_mult_vec3_i32(arg_1.wwz, arg_1.zxz), abs(vec3<i32>(-7478i, -12332i, arg_1.x)))), vec3<u32>(arg_0.d.x, min(u_input.a.x, 13699u >> (arg_0.d.x % 32u)), countOneBits(abs(849u))), ~arg_1.x);
            let var_2 = _wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(-707f), _wgslsmith_f_op_f32(f32(-1f) * -978f)));
            if (var_1.b) {
                let var_3 = Struct_1(arg_1.x, all(vec2<bool>(arg_0.b, all(!vec4<bool>(true, false, arg_0.b, true)))), _wgslsmith_mult_i32(_wgslsmith_dot_vec2_i32(select(~arg_1.yw, ~vec2<i32>(arg_0.c, arg_0.c), select(vec2<bool>(arg_0.b, arg_0.b), vec2<bool>(var_1.b, true), var_0)), -arg_1.yz), arg_1.x), _wgslsmith_div_vec3_u32(_wgslsmith_add_vec3_u32(~min(var_1.d, vec3<u32>(u_input.a.x, 4294967295u, u_input.a.x)), _wgslsmith_mod_vec3_u32(vec3<u32>(var_1.d.x, u_input.a.x, u_input.a.x), abs(u_input.a.xwz))), min(var_1.d, var_1.d)), 22888i);
            }
        }
    }
    var var_1 = _wgslsmith_f_op_f32(func_6(func_5()));
    var_1 = _wgslsmith_f_op_f32(f32(-1f) * -2631f);
    return ~(~arg_0.d.x) | _wgslsmith_mod_u32(select(~1764u, _wgslsmith_sub_u32(arg_0.d.x & 29646u, firstTrailingBit(arg_0.d.x)), !any(vec2<bool>(arg_0.b, arg_0.b))), 5424u);
}

fn func_9(arg_0: vec3<f32>, arg_1: u32) -> Struct_1 {
    var var_0 = vec2<u32>(~_wgslsmith_dot_vec2_u32(vec2<u32>(60480u, _wgslsmith_mod_u32(0u, u_input.a.x)), ~(~vec2<u32>(u_input.a.x, 4294967295u))), 26997u);
    let var_1 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-918f * arg_0.x)), _wgslsmith_f_op_f32(select(1726f, _wgslsmith_f_op_f32(-arg_0.x), true)));
    var var_2 = !select(!vec3<bool>(true, true, any(vec3<bool>(true, true, true))), !select(vec3<bool>(true, false, false), vec3<bool>(true, true, false), true), select(select(select(vec3<bool>(true, true, true), vec3<bool>(false, true, true), false), select(vec3<bool>(true, false, true), vec3<bool>(false, true, false), vec3<bool>(true, true, false)), vec3<bool>(true, true, true)), vec3<bool>(false, 723f <= var_1, any(vec2<bool>(true, true))), all(vec3<bool>(true, true, true))));
    let var_3 = any(select(var_2.yy, !vec2<bool>(false & var_2.x, true), var_1 < _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(482f + 355f))));
    var var_4 = Struct_1(-_wgslsmith_clamp_i32(-1i, func_7(0u, func_5()), ~_wgslsmith_dot_vec3_i32(vec3<i32>(13525i, 2147483647i, -53251i), vec3<i32>(55983i, i32(-2147483648), 2147483647i))), var_3, ~_wgslsmith_div_i32(41718i << (max(0u, u_input.a.x) % 32u), firstLeadingBit(countOneBits(-10624i))), min(u_input.a.yyw, reverseBits(vec3<u32>(firstLeadingBit(0u), select(u_input.a.x, 50450u, true), var_0.x))), _wgslsmith_add_i32(~max(_wgslsmith_div_i32(-28276i, -1i), 1i), 22963i));
    return Struct_1(~_wgslsmith_div_i32(firstLeadingBit(_wgslsmith_mult_i32(var_4.e, 17947i)), var_4.c), false, func_7(_wgslsmith_mult_u32(~firstLeadingBit(0u), u_input.a.x), Struct_1(var_4.a, var_2.x, _wgslsmith_dot_vec2_i32(vec2<i32>(var_4.e, -19676i), _wgslsmith_mod_vec2_i32(vec2<i32>(1i, -8799i), vec2<i32>(-1i, -17880i))), var_4.d & ~var_4.d, var_4.a)), ~((firstTrailingBit(var_4.d) >> (vec3<u32>(1u, 0u, var_4.d.x) % vec3<u32>(32u))) << ((vec3<u32>(arg_1, 0u, 1079u) << (vec3<u32>(var_4.d.x, arg_1, var_0.x) % vec3<u32>(32u))) % vec3<u32>(32u))), 1i);
}

fn func_4() -> Struct_1 {
    let var_0 = func_9(_wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(max(180f, _wgslsmith_f_op_f32(-677f + -2302f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -675f)), 837f)), func_8(Struct_1(func_7(_wgslsmith_dot_vec4_u32(u_input.a, u_input.a), func_5()), any(vec3<bool>(false, false, true)), _wgslsmith_add_i32(-2147483647i, abs(19001i)), ~abs(vec3<u32>(u_input.a.x, u_input.a.x, u_input.a.x)), 11442i), vec4<i32>(-42126i, ~1i, 1i, ~_wgslsmith_clamp_i32(-1i, 0i, 14512i))));
    var var_1 = 73315u;
    if (all(select(select(!vec3<bool>(var_0.b, var_0.b, true), select(select(vec3<bool>(false, var_0.b, var_0.b), vec3<bool>(var_0.b, false, true), var_0.b), !vec3<bool>(false, var_0.b, var_0.b), true), var_0.b), select(select(vec3<bool>(false, true, var_0.b), select(vec3<bool>(var_0.b, false, var_0.b), vec3<bool>(var_0.b, var_0.b, var_0.b), vec3<bool>(var_0.b, var_0.b, var_0.b)), var_0.b), vec3<bool>(var_0.b, var_0.b, false), true), var_0.b))) {
        var var_2 = _wgslsmith_dot_vec3_u32(max(vec3<u32>(u_input.a.x, u_input.a.x, _wgslsmith_mod_u32(u_input.a.x, 2896u)), ~(~vec3<u32>(1u, 13586u, 0u))), ~vec3<u32>(var_0.d.x, _wgslsmith_clamp_u32(var_0.d.x, var_0.d.x, 4407u), 102486u)) ^ 0u;
        for (var var_3 = i32(-2147483648); ; var_3 += 1i) {
            if (LOOP_COUNTERS[9u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
            var var_4 = vec2<u32>(max(~u_input.a.x, func_5().d.x >> (reverseBits(0u) % 32u)), var_0.d.x);
        }
        var_2 = var_0.d.x >> (40193u % 32u);
        var var_3 = !vec2<bool>(func_9(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(step(vec3<f32>(-547f, -306f, 1000f), vec3<f32>(179f, -153f, 1296f))) * vec3<f32>(-410f, 1263f, 1245f)), ~u_input.a.x).b, true);
    }
    var var_2 = -616f;
    switch (0i) {
        case -1663i: {
            for (; ; ) {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                continue;
            }
            let var_3 = -firstTrailingBit(vec3<i32>(func_7(u_input.a.x, var_0), _wgslsmith_mod_i32(29019i, var_0.e), -27090i) & min(~vec3<i32>(var_0.e, var_0.c, 1i), vec3<i32>(-1i, 0i, 2147483647i)));
            var var_4 = func_5();
            if (any(!(!vec4<bool>(true, var_0.b, var_4.b, var_0.b)))) {
                var var_5 = vec3<bool>(false, !(all(!vec4<bool>(var_0.b, false, var_4.b, false)) | true), !(var_4.b || true));
                var_1 = func_9(vec3<f32>(-940f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(-1741f, -1490f)))), _wgslsmith_f_op_f32(f32(-1f) * -343f)), 85776u).d.x;
            }
        }
        case i32(-2147483648): {
            var var_3 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(644f)));
            var_1 = 11089u;
            loop {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                break;
            }
        }
        case -8870i: {
            var_1 = _wgslsmith_dot_vec4_u32(~select(u_input.a, ~u_input.a, var_0.b), ~(_wgslsmith_add_vec4_u32(u_input.a, vec4<u32>(3621u, 33212u, 56812u, 4121u)) >> (max(u_input.a, vec4<u32>(1u, var_0.d.x, var_0.d.x, var_0.d.x)) % vec4<u32>(32u))) ^ ~vec4<u32>(u_input.a.x, 13052u, select(var_0.d.x, u_input.a.x, false), u_input.a.x));
            var_2 = _wgslsmith_f_op_f32(func_6(Struct_1(reverseBits(-6765i >> (firstTrailingBit(var_0.d.x) % 32u)), func_9(_wgslsmith_f_op_vec3_f32(vec3<f32>(1191f, 272f, 1311f) - _wgslsmith_f_op_vec3_f32(min(vec3<f32>(-615f, -1559f, 1136f), vec3<f32>(758f, -494f, -377f)))), var_0.d.x).b, i32(-2147483648), func_9(_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-773f, -631f, 535f)), vec3<f32>(132f, 631f, 363f), true)), u_input.a.x).d, _wgslsmith_add_i32(~var_0.a, var_0.a ^ _wgslsmith_add_i32(var_0.e, i32(-2147483648))))));
            let var_3 = var_0;
        }
        default: {
            var var_3 = 813f;
            if (!var_0.b) {
                let var_4 = Struct_1(-var_0.e, true, func_9(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-vec3<f32>(959f, 895f, 206f)), vec3<f32>(-385f, 1126f, -111f), vec3<bool>(true, false, var_0.b)))), var_0.d.x).e, vec3<u32>(max(79581u, u_input.a.x), _wgslsmith_clamp_u32(_wgslsmith_add_u32(func_8(var_0, vec4<i32>(i32(-2147483648), var_0.c, 2994i, var_0.a)), ~0u), abs(var_0.d.x), ~(~20492u)), 32583u), ~(-max(-var_0.e, var_0.c << (u_input.a.x % 32u))));
            }
            var var_4 = Struct_1(1i, true, i32(-1i) * -var_0.a, ~abs(vec3<u32>(0u, 1u, 4294967295u)), func_5().a);
            var var_5 = var_0;
            if (any(!vec4<bool>(any(vec3<bool>(var_4.b, var_5.b, var_5.b)), var_5.b | true, var_4.b && var_5.b, true))) {
                let var_6 = func_5();
                let var_7 = func_9(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(393f, -268f, -670f) * _wgslsmith_f_op_vec3_f32(vec3<f32>(-1352f, -762f, 728f) - vec3<f32>(289f, 510f, -298f))))), var_4.d.x ^ _wgslsmith_add_u32(25523u, func_8(var_6, abs(vec4<i32>(var_0.a, var_6.a, -6233i, 2147483647i)))));
                let var_8 = _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-1656f - _wgslsmith_f_op_f32(abs(409f))))), _wgslsmith_f_op_f32(-1f), -1192f, -642f));
            }
        }
    }
    return func_5();
}

fn func_3(arg_0: vec3<f32>, arg_1: vec2<bool>, arg_2: u32, arg_3: i32) -> u32 {
    for (; arg_1.x; ) {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
    }
    for (var var_0 = 52740i; var_0 != i32(-2147483648); var_0 -= 1i) {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        let var_1 = all(vec4<bool>(arg_1.x, arg_1.x, any(!select(vec3<bool>(arg_1.x, true, false), vec3<bool>(false, arg_1.x, arg_1.x), arg_1.x)), false));
        let var_2 = select(_wgslsmith_div_vec3_i32(max(firstTrailingBit(vec3<i32>(45349i, arg_3, arg_3)), vec3<i32>(_wgslsmith_dot_vec3_i32(vec3<i32>(arg_3, 1522i, arg_3), vec3<i32>(arg_3, arg_3, 1i)), arg_3, ~(-19382i))), reverseBits(~_wgslsmith_mod_vec3_i32(vec3<i32>(i32(-2147483648), -5013i, -52291i), vec3<i32>(arg_3, arg_3, -1i)))), -(-(~vec3<i32>(2147483647i, 1i, arg_3)) | -(vec3<i32>(arg_3, arg_3, arg_3) >> (vec3<u32>(88598u, u_input.a.x, u_input.a.x) % vec3<u32>(32u)))), true);
        break;
    }
    let var_0 = func_4();
    let var_1 = !(!arg_1.x);
    var var_2 = select(vec2<i32>(1i, -(var_0.c << (0u % 32u))), _wgslsmith_add_vec2_i32(max(-vec2<i32>(var_0.a, 45544i), vec2<i32>(arg_3, 25915i) & vec2<i32>(3649i, arg_3)), vec2<i32>(func_9(arg_0, var_0.d.x).a, 0i)), vec2<bool>(true, select(true | var_0.b, !var_0.b, !var_0.b))) | _wgslsmith_mult_vec2_i32(firstLeadingBit(vec2<i32>(1i, 0i)), countOneBits(vec2<i32>(var_0.e, arg_3)));
    return ~firstTrailingBit(~45421u);
}

fn func_10(arg_0: vec2<bool>) -> i32 {
    let var_0 = func_5();
    let var_1 = var_0;
    let var_2 = select(arg_0.x, func_9(_wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(select(vec3<f32>(-1000f, 741f, -696f), vec3<f32>(1000f, 1000f, -940f), var_1.b)), vec3<f32>(-215f, 312f, 1659f))), abs(13538u) ^ var_0.d.x).b, func_4().b);
    var var_3 = _wgslsmith_sub_vec4_i32(-vec4<i32>(1i, ~(~var_1.a), var_1.c, 15533i), vec4<i32>(((i32(-1i) * -1i) & var_0.e) ^ var_1.a, var_1.c, var_0.c, abs(var_0.a)));
    loop {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
    }
    return -1i;
}

fn func_2(arg_0: vec4<u32>, arg_1: f32, arg_2: f32, arg_3: Struct_1) -> vec4<f32> {
    switch (func_10(vec2<bool>(!(24168u <= func_3(vec3<f32>(arg_1, arg_1, -1182f), vec2<bool>(false, false), 0u, 0i)), !(!arg_3.b) || true))) {
        case -39456i: {
            loop {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
                let var_0 = arg_3.b;
                continue;
            }
            let var_0 = _wgslsmith_add_i32(arg_3.a, -arg_3.a);
        }
        case -1687i: {
            let var_0 = func_5();
        }
        case i32(-2147483648): {
            if (arg_2 <= arg_2) {
                var var_0 = arg_3.b;
            }
            if (any(select(!vec4<bool>(true, func_5().b, true, true), vec4<bool>(true, any(vec3<bool>(arg_3.b, true, arg_3.b)), !func_5().b, arg_3.b), select(select(vec4<bool>(true, false, arg_3.b, arg_3.b), !vec4<bool>(false, arg_3.b, false, false), true), vec4<bool>(arg_3.b, true != arg_3.b, !arg_3.b, arg_3.b), !(arg_1 != arg_2))))) {
                let var_0 = Struct_1(firstLeadingBit(abs(-reverseBits(-17911i))), all(!(!vec3<bool>(arg_3.b, false, arg_3.b))) && true, 0i, arg_0.zzz, ~_wgslsmith_dot_vec3_i32(-countOneBits(vec3<i32>(i32(-2147483648), arg_3.e, i32(-2147483648))), vec3<i32>(func_5().a, reverseBits(arg_3.a), arg_3.c)));
            }
        }
        default: {
            var var_0 = Struct_1((_wgslsmith_mod_i32(-arg_3.e, arg_3.e) >> (~u_input.a.x % 32u)) >> (~arg_3.d.x % 32u), any(select(select(select(vec3<bool>(false, arg_3.b, arg_3.b), vec3<bool>(false, arg_3.b, arg_3.b), vec3<bool>(arg_3.b, arg_3.b, true)), select(vec3<bool>(arg_3.b, arg_3.b, arg_3.b), vec3<bool>(false, arg_3.b, false), arg_3.b), select(vec3<bool>(true, false, arg_3.b), vec3<bool>(arg_3.b, arg_3.b, arg_3.b), arg_3.b)), vec3<bool>(all(vec4<bool>(arg_3.b, true, false, false)), !arg_3.b, arg_3.b), !(!vec3<bool>(true, true, arg_3.b)))), 36434i, vec3<u32>(_wgslsmith_mod_u32(firstTrailingBit(36863u), arg_3.d.x) >> (abs(~arg_0.x) % 32u), 0u, ~abs(85248u)), arg_3.c);
            var var_1 = arg_2;
            switch (i32(-2147483648)) {
                case 52143i: {
                    let var_2 = _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(abs(vec2<f32>(445f, 1000f))) + _wgslsmith_f_op_vec2_f32(vec2<f32>(arg_1, -937f) * vec2<f32>(964f, arg_1))))), _wgslsmith_f_op_vec2_f32(trunc(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(arg_1, -713f) - vec2<f32>(arg_1, arg_2)) - _wgslsmith_f_op_vec2_f32(vec2<f32>(arg_2, arg_1) - vec2<f32>(arg_2, arg_1)))))));
                    var var_3 = arg_3;
                    var_1 = var_2.x;
                }
                default: {
                    var var_2 = arg_0.x;
                    let var_3 = arg_3;
                    var var_4 = -31691i;
                    let var_5 = abs(vec3<i32>(select(_wgslsmith_clamp_i32(~var_3.c, -24586i, -37748i), _wgslsmith_mod_i32(func_5().c, ~var_3.a), var_3.b), _wgslsmith_sub_i32(~func_9(vec3<f32>(arg_2, 573f, -851f), 1u).c, func_5().c), _wgslsmith_div_i32(-8583i, var_3.c)));
                    var_4 = _wgslsmith_clamp_i32(1i, abs(_wgslsmith_dot_vec2_i32(_wgslsmith_clamp_vec2_i32(vec2<i32>(var_0.a, 2147483647i) | vec2<i32>(-23198i, var_5.x), -var_5.xx, ~var_5.zx), var_5.zx)), var_3.c);
                }
            }
        }
    }
    var var_0 = arg_3;
    let var_1 = func_4();
    return _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(step(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_2, -807f, arg_1, -473f)), _wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(vec4<f32>(-364f, -1513f, arg_1, arg_2) - vec4<f32>(-2002f, arg_2, arg_2, -543f)), _wgslsmith_f_op_vec4_f32(vec4<f32>(644f, arg_2, 2595f, arg_2) * vec4<f32>(-863f, arg_1, arg_2, arg_2))))), _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(679f, arg_2, -317f, -1373f) * vec4<f32>(arg_2, arg_1, 197f, 562f)) - vec4<f32>(238f, 1507f, arg_1, arg_2)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_1, 193f, arg_1, -894f))))));
}

fn func_1(arg_0: vec3<f32>) -> vec3<u32> {
    let var_0 = _wgslsmith_mod_vec3_u32(~select(~(~u_input.a.xzz), u_input.a.yzy, false), countOneBits(max(vec3<u32>(~1u, ~u_input.a.x, 0u | u_input.a.x), vec3<u32>(u_input.a.x, 31373u, firstLeadingBit(1u)))));
    let var_1 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(arg_0.x * 430f))), 793f, _wgslsmith_f_op_f32(-arg_0.x), 1997f) - _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(arg_0.x, arg_0.x, arg_0.x, arg_0.x))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(arg_0.x, -915f, 1721f, 1783f) * vec4<f32>(arg_0.x, 1417f, arg_0.x, -1029f)) - _wgslsmith_f_op_vec4_f32(func_2(vec4<u32>(24099u, var_0.x, u_input.a.x, u_input.a.x), 661f, arg_0.x, Struct_1(2147483647i, false, 0i, vec3<u32>(1u, var_0.x, 102929u), 2147483647i)))), select(select(vec4<bool>(true, true, true, true), vec4<bool>(true, false, false, true), vec4<bool>(true, false, false, false)), select(vec4<bool>(false, true, false, false), vec4<bool>(true, true, false, true), true), false)))) - _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_div_vec4_f32(vec4<f32>(arg_0.x, arg_0.x, 1616f, -1084f), vec4<f32>(-500f, 1026f, arg_0.x, 442f)))) * vec4<f32>(_wgslsmith_f_op_f32(round(arg_0.x)), -1193f, _wgslsmith_f_op_f32(-282f), _wgslsmith_div_f32(arg_0.x, 2847f))) * _wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(max(arg_0.x, arg_0.x)), _wgslsmith_f_op_f32(func_6(Struct_1(-1i, false, 1i, vec3<u32>(1u, u_input.a.x, 50652u), 1i))), _wgslsmith_f_op_f32(-arg_0.x), _wgslsmith_f_op_f32(318f + arg_0.x)) * vec4<f32>(arg_0.x, _wgslsmith_f_op_f32(min(arg_0.x, arg_0.x)), -1753f, -1841f))));
    let var_2 = var_1.zzz;
    switch (1i) {
        case 0i: {
        }
        default: {
            switch (-func_7(4294967295u, Struct_1(-1i, !any(vec2<bool>(false, true)), -17082i, vec3<u32>(4294967295u, ~u_input.a.x, ~var_0.x), ~_wgslsmith_add_i32(1i, 0i)))) {
                case 32440i: {
                    var var_3 = Struct_1(firstLeadingBit(-max(i32(-2147483648), -18032i)), false, firstLeadingBit(1i), (~(~vec3<u32>(var_0.x, 0u, u_input.a.x)) >> (vec3<u32>(_wgslsmith_mod_u32(0u, u_input.a.x), 1u, _wgslsmith_clamp_u32(0u, 0u, u_input.a.x)) % vec3<u32>(32u))) | var_0, 2147483647i);
                    var var_4 = func_4();
                    var var_5 = ~vec3<u32>(abs(_wgslsmith_mod_u32(_wgslsmith_mod_u32(var_4.d.x, 77373u), min(var_4.d.x, 0u))), 15518u, _wgslsmith_mult_u32(~4294967295u << (_wgslsmith_sub_u32(u_input.a.x, var_3.d.x) % 32u), func_5().d.x));
                }
                case 1i: {
                }
                default: {
                    return var_0;
                }
            }
            var var_3 = vec3<bool>(!(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(var_2.x * -384f))) < _wgslsmith_f_op_f32(ceil(-436f))), !func_5().b, !(any(vec2<bool>(true, true)) && (_wgslsmith_f_op_f32(-arg_0.x) <= _wgslsmith_f_op_f32(-arg_0.x))));
            var_3 = vec3<bool>(true, var_3.x, var_3.x);
            for (var var_4 = _wgslsmith_dot_vec2_i32(vec2<i32>(-7440i, ~(_wgslsmith_add_i32(0i, 1i) << (_wgslsmith_mod_u32(1u, var_0.x) % 32u))), _wgslsmith_mod_vec2_i32(vec2<i32>(abs(-53598i) & firstTrailingBit(-1i), 1i), -_wgslsmith_mult_vec2_i32(select(vec2<i32>(i32(-2147483648), -62968i), vec2<i32>(1i, -32337i), true), min(vec2<i32>(404i, i32(-2147483648)), vec2<i32>(0i, 2147483647i))))); ; var_4 += 1i) {
                if (LOOP_COUNTERS[16u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
                let var_5 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(arg_0.x, -257f)));
            }
            var_3 = select(vec3<bool>(false, false, true), select(select(select(select(vec3<bool>(var_3.x, var_3.x, true), vec3<bool>(true, var_3.x, var_3.x), vec3<bool>(true, false, false)), !vec3<bool>(var_3.x, var_3.x, false), select(vec3<bool>(true, true, false), vec3<bool>(var_3.x, true, var_3.x), true)), vec3<bool>(true, !var_3.x, var_3.x), var_1.x > var_1.x), vec3<bool>(false, var_3.x, !(var_3.x || false)), !select(select(vec3<bool>(var_3.x, var_3.x, false), vec3<bool>(true, var_3.x, var_3.x), false), select(vec3<bool>(false, var_3.x, var_3.x), vec3<bool>(true, true, false), true), func_9(vec3<f32>(var_2.x, var_1.x, arg_0.x), u_input.a.x).b)), !vec3<bool>(var_3.x, var_3.x, !(!var_3.x)));
        }
    }
    let var_3 = -58538i;
    return u_input.a.yyw;
}

@compute
@workgroup_size(1)
fn main() {
    if (true) {
        for (var var_0 = 2147483647i; var_0 >= -41738i; var_0 += 1i) {
            if (LOOP_COUNTERS[17u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
        }
        let var_0 = Struct_1(-25433i, !(!any(vec4<bool>(true, false, false, false))), countOneBits(0i), func_1(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(447f, -292f, -764f))))), -15758i);
        if (func_9(vec3<f32>(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-305f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(2074f * -1000f) + _wgslsmith_f_op_f32(f32(-1f) * -1405f)))), 1794f, _wgslsmith_f_op_f32(trunc(-1106f))), _wgslsmith_sub_u32(u_input.a.x, ~_wgslsmith_clamp_u32(var_0.d.x, _wgslsmith_add_u32(4294967295u, var_0.d.x), _wgslsmith_dot_vec2_u32(var_0.d.yy, var_0.d.zx)))).b) {
            var var_1 = _wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(func_6(Struct_1(_wgslsmith_clamp_i32(var_0.e, 1i, var_0.a), true, _wgslsmith_dot_vec3_i32(vec3<i32>(2147483647i, var_0.e, var_0.c), vec3<i32>(1i, var_0.a, 1i)), u_input.a.xyw, _wgslsmith_div_i32(39789i, 1i)))), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(sign(_wgslsmith_div_f32(808f, -2135f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1249f)), false))) - vec2<f32>(1633f, -199f));
        }
    }
    for (var var_0 = -1i; var_0 > 1i; var_0 += 1i) {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        switch (-_wgslsmith_mult_i32(-11301i, _wgslsmith_div_i32(_wgslsmith_div_i32(1i, 1i), firstLeadingBit(1i)))) {
            case 2147483647i: {
                let var_1 = func_4();
                var var_2 = var_1;
            }
            case 45854i: {
                let var_1 = ~(-59646i);
                var var_2 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(sign(vec4<f32>(-1032f, 932f, 1556f, -1637f)))))));
                var_0 = -_wgslsmith_sub_i32(func_4().c, var_1);
            }
            default: {
                let var_1 = select(!select(!select(vec2<bool>(false, false), vec2<bool>(false, false), vec2<bool>(true, true)), vec2<bool>(true, all(vec4<bool>(false, true, false, true))), select(vec2<bool>(true, true), vec2<bool>(true, true), select(vec2<bool>(true, true), vec2<bool>(false, true), true))), vec2<bool>(!(true & func_9(vec3<f32>(-1000f, -208f, 576f), u_input.a.x).b), true), !any(select(vec2<bool>(false, false), vec2<bool>(true, true), any(vec4<bool>(true, false, true, true)))));
                continue;
            }
        }
        switch (-(i32(-1i) * -2147483647i)) {
            case 0i: {
                var_0 = ~(-select(_wgslsmith_sub_i32(abs(-1i), func_10(vec2<bool>(true, true))), i32(-2147483648), any(vec4<bool>(false, false, false, false))));
            }
            default: {
                continue;
            }
        }
        return;
    }
    loop {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
        for (var var_0 = -1545i; select(func_9(_wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(408f * 861f), _wgslsmith_f_op_f32(ceil(887f)), _wgslsmith_f_op_f32(f32(-1f) * -865f))), u_input.a.x).b, all(vec2<bool>(true, true)), false); ) {
            if (LOOP_COUNTERS[20u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
            var var_1 = select(func_5().b, true == (((u_input.a.x ^ u_input.a.x) <= 4294967295u) && true), !(!select(false, false, true)) & true);
            let var_2 = vec2<bool>(false, false);
            continue;
        }
        var var_0 = _wgslsmith_dot_vec2_i32((_wgslsmith_add_vec2_i32(select(vec2<i32>(1i, 0i), vec2<i32>(-35945i, 46855i), false), select(vec2<i32>(-48531i, 1478i), vec2<i32>(0i, 57241i), vec2<bool>(true, true))) >> (_wgslsmith_mod_vec2_u32(vec2<u32>(u_input.a.x, 0u), ~vec2<u32>(u_input.a.x, 1u)) % vec2<u32>(32u))) ^ ~vec2<i32>(1i, 1i), vec2<i32>(~(-22554i), _wgslsmith_mod_i32(select(0i, 5237i, false) | -2147483647i, _wgslsmith_mult_i32(0i, ~2147483647i))));
    }
    loop {
        if (LOOP_COUNTERS[21u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
        let var_0 = _wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(min(vec3<f32>(1264f, 2242f, -890f), vec3<f32>(-235f, -2034f, -966f)))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(412f, -1307f, -1008f) + vec3<f32>(786f, 1452f, -522f)) - vec3<f32>(-1104f, 815f, 739f)), func_4().b)) * _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(round(vec3<f32>(-1241f, -1474f, 177f))), vec3<f32>(_wgslsmith_f_op_f32(trunc(-141f)), _wgslsmith_f_op_f32(384f - 1515f), _wgslsmith_div_f32(2287f, -1000f))))));
    }
    loop {
        if (LOOP_COUNTERS[22u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
        var var_0 = true;
        var_0 = true;
        break;
    }
    if (true) {
        let var_0 = ~_wgslsmith_div_vec4_u32(u_input.a, select(vec4<u32>(22846u, ~u_input.a.x, u_input.a.x, _wgslsmith_mod_u32(0u, 1u)), u_input.a, !func_4().b));
    }
    switch (max(-77043i, i32(-1i) * -1i)) {
        case -15591i: {
            loop {
                if (LOOP_COUNTERS[23u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
                continue;
            }
            switch (-7458i) {
                case -1i: {
                    return;
                }
                case -26475i: {
                    var var_0 = func_4();
                    let var_1 = _wgslsmith_dot_vec4_u32(min(max(_wgslsmith_sub_vec4_u32(vec4<u32>(var_0.d.x, 14713u, 0u, u_input.a.x) & u_input.a, _wgslsmith_mod_vec4_u32(vec4<u32>(0u, 1u, var_0.d.x, u_input.a.x), vec4<u32>(var_0.d.x, u_input.a.x, u_input.a.x, 33425u))), ~(~u_input.a)), vec4<u32>(u_input.a.x, u_input.a.x >> (var_0.d.x % 32u), ~u_input.a.x, var_0.d.x) | ~u_input.a), ~vec4<u32>(0u, _wgslsmith_div_u32(1u, 1u << (var_0.d.x % 32u)), 0u, _wgslsmith_clamp_u32(var_0.d.x & 13818u, var_0.d.x, ~535u)));
                    var var_2 = Struct_1(_wgslsmith_mod_i32(_wgslsmith_mult_i32(_wgslsmith_dot_vec3_i32(_wgslsmith_sub_vec3_i32(vec3<i32>(8550i, 2179i, 5260i), vec3<i32>(var_0.e, 2147483647i, -1i)), vec3<i32>(var_0.c, -13465i, 66269i)), -358i >> (1u % 32u)), var_0.e << (0u % 32u)), var_0.b, var_0.a, ~u_input.a.zwz, 2147483647i);
                    var_0 = func_4();
                }
                case 0i: {
                    var var_0 = Struct_1(45436i, false, ~func_7(90179u, func_5()), _wgslsmith_div_vec3_u32(_wgslsmith_add_vec3_u32(~func_1(vec3<f32>(-402f, -1000f, 539f)), ~(u_input.a.zyx ^ u_input.a.xzz)), countOneBits(u_input.a.xzw)), select(-(_wgslsmith_mod_i32(2147483647i, i32(-2147483648)) << (~u_input.a.x % 32u)), _wgslsmith_add_i32(~(i32(-1i) * -1i), -func_10(vec2<bool>(false, false))), func_4().b | true));
                    var_0 = Struct_1(_wgslsmith_add_i32(var_0.c | 26715i, var_0.e), var_0.b, 11918i, var_0.d | countOneBits(vec3<u32>(~4294967295u, 69647u, ~1u)), -var_0.c);
                }
                case -1769i: {
                    var var_0 = func_5();
                    var_0 = Struct_1(~20464i, true, -firstTrailingBit(~var_0.e), var_0.d, func_4().a);
                }
                default: {
                    let var_0 = select(true, func_5().b == !(!func_5().b), false);
                    var var_1 = _wgslsmith_sub_i32(_wgslsmith_mult_i32(1i, -func_10(vec2<bool>(true, var_0))), _wgslsmith_div_i32(countOneBits(13328i), _wgslsmith_mod_i32(54151i, abs(-16100i))) << (_wgslsmith_mod_u32(~_wgslsmith_div_u32(0u, u_input.a.x), u_input.a.x) % 32u));
                    let var_2 = _wgslsmith_clamp_vec4_u32(abs(abs(~u_input.a)), u_input.a ^ vec4<u32>(43161u, func_8(func_5(), -vec4<i32>(-11127i, 1i, 21639i, i32(-2147483648))), ~(~u_input.a.x), u_input.a.x), max(u_input.a, u_input.a));
                }
            }
        }
        case 8255i: {
            return;
        }
        default: {
        }
    }
    let x = u_input.a;
    s_output = StorageBuffer(~1u);
}

`;