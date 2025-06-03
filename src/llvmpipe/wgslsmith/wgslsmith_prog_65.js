export const input = [200,192,219,226,118,37,123,79,233,193,38,57,78,103,34,56,97,173,104,8,92,106,162,179,192,167,173,196,126,33,132,37,166,59,1,125,6,158,159,51,155,192,23,126,123,94,39,224,35,119,53,33,70,149,189,179,17,43,56,33,187,116,57,126];
export const expected = [200,192,219,226,118,37,123,79,233,193,38,57,78,103,34,56,97,173,104,8,92,106,162,179,192,167,173,196,126,33,132,37,166,59,1,125,6,158,159,51,155,192,23,126,123,94,39,224,35,119,53,33,70,149,189,179,17,43,56,33,187,116,57,126];
export const shaderCode = ` 
 // {"0:0":[200,192,219,226,118,37,123,79,233,193,38,57,78,103,34,56,97,173,104,8,92,106,162,179,192,167,173,196,126,33,132,37,166,59,1,125,6,158,159,51,155,192,23,126,123,94,39,224,35,119,53,33,70,149,189,179,17,43,56,33,187,116,57,126]}
// Seed: 6937891248028565553

struct Struct_1 {
    a: f32,
    b: f32,
    c: f32,
    d: i32,
    e: vec2<i32>,
}

struct UniformBuffer {
    a: vec4<i32>,
    b: vec4<i32>,
    c: u32,
    d: vec2<u32>,
    e: vec3<i32>,
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

var<private> global0: array<vec4<bool>, 20>;

var<private> global1: array<i32, 9> = array<i32, 9>(1i, 2147483647i, -18943i, i32(-2147483648), -20398i, -30368i, -13461i, -78837i, 0i);

var<private> LOOP_COUNTERS: array<u32, 22>;

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn func_6(arg_0: Struct_1, arg_1: vec3<i32>, arg_2: u32, arg_3: vec2<u32>) -> f32 {
    for (var var_0 = -20936i; var_0 != -30744i; ) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        continue;
    }
    loop {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        global1 = array<i32, 9>();
        for (var var_0 = 16378i; var_0 < 0i; var_0 -= 1i) {
            if (LOOP_COUNTERS[2u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            let var_1 = !(!any(vec2<bool>(true, false)));
            let var_2 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(248f, arg_0.c, arg_0.c, 584f))), _wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_0.b, arg_0.c, arg_0.b, arg_0.a)), false))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(454f, arg_0.a, arg_0.b, -2152f))))));
        }
        for (var var_0 = _wgslsmith_div_i32(_wgslsmith_mod_i32(~global1[_wgslsmith_index_u32(_wgslsmith_dot_vec4_u32(vec4<u32>(arg_2, arg_2, 1u, arg_3.x), vec4<u32>(arg_2, u_input.c, 1u, arg_3.x)), 9u)] | _wgslsmith_mult_i32(_wgslsmith_mult_i32(global1[_wgslsmith_index_u32(u_input.d.x, 9u)], u_input.e.x), _wgslsmith_dot_vec2_i32(arg_1.zx, arg_1.xx)), _wgslsmith_sub_i32(~(~arg_0.d), 0i | min(arg_1.x, global1[_wgslsmith_index_u32(37471u, 9u)]))), global1[_wgslsmith_index_u32(~_wgslsmith_mult_u32(_wgslsmith_mod_u32(~4294967295u, arg_2 >> (20003u % 32u)), ~abs(19963u)), 9u)]); _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(max(arg_0.c, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(arg_0.c)) - _wgslsmith_f_op_f32(-838f)))))) > _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1456f - arg_0.b) + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -1237f) + _wgslsmith_f_op_f32(-arg_0.c))); var_0 = ~(_wgslsmith_div_i32(-1i, abs(2147483647i)) >> (u_input.d.x % 32u))) {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            let var_1 = vec2<i32>(-1i) * -vec2<i32>(_wgslsmith_div_i32(_wgslsmith_mult_i32(arg_1.x, i32(-2147483648)), ~0i), u_input.a.x);
            break;
        }
        var var_0 = 39984i;
        loop {
            if (LOOP_COUNTERS[4u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
            let var_1 = !select(vec3<bool>(true, true, true), !vec3<bool>(select(false, false, true), false, true), false);
            let var_2 = _wgslsmith_div_vec3_u32(~(~vec3<u32>(4294967295u, arg_3.x, u_input.d.x)), _wgslsmith_add_vec3_u32(_wgslsmith_div_vec3_u32(~vec3<u32>(36841u, arg_3.x, arg_3.x), firstTrailingBit(vec3<u32>(81654u, arg_2, 0u))), (vec3<u32>(u_input.d.x, arg_3.x, arg_2) >> (vec3<u32>(1u, 4294967295u, 71302u) % vec3<u32>(32u))) ^ vec3<u32>(arg_2, arg_3.x, 12304u))) & (vec3<u32>(_wgslsmith_mod_u32(1u, ~39299u), ~arg_3.x, _wgslsmith_div_u32(arg_2, 1197u)) | ~(~_wgslsmith_div_vec3_u32(vec3<u32>(4294967295u, arg_2, 15691u), vec3<u32>(arg_3.x, arg_3.x, arg_3.x))));
        }
    }
    for (var var_0 = i32(-2147483648); var_0 <= 10084i; var_0 += 1i) {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        return _wgslsmith_f_op_f32(-365f);
    }
    switch (u_input.b.x) {
        default: {
            var var_0 = Struct_1(arg_0.c, -2008f, _wgslsmith_f_op_f32(exp2(arg_0.b)), global1[_wgslsmith_index_u32(firstLeadingBit(_wgslsmith_dot_vec3_u32(~vec3<u32>(arg_2, arg_2, 13477u), vec3<u32>(0u, 0u, arg_2) >> (vec3<u32>(u_input.c, arg_2, 50738u) % vec3<u32>(32u)))), 9u)] << (~arg_3.x % 32u), u_input.b.yz);
            var var_1 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(floor(arg_0.a)), -576f);
            var var_2 = all(!vec3<bool>(false, false, true && select(false, false, false)));
            for (var var_3 = i32(-2147483648); all(vec3<bool>(true, true, true)); var_3 += 1i) {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                var var_4 = vec2<bool>(any(global0[_wgslsmith_index_u32(_wgslsmith_mod_u32(max(4294967295u, 24855u), _wgslsmith_dot_vec3_u32(vec3<u32>(u_input.d.x, 24171u, 31503u) << (vec3<u32>(4294967295u, 4294967295u, 71304u) % vec3<u32>(32u)), ~vec3<u32>(u_input.c, arg_3.x, u_input.c))), 20u)]), any(select(vec2<bool>(true, true), select(vec2<bool>(true, true), vec2<bool>(true, false), false), select(false, true, false))) != (_wgslsmith_f_op_f32(select(-1000f, var_0.c, true)) >= -500f));
                break;
            }
            if (select((-804f > var_0.c) & select(false, all(vec3<bool>(true, true, true)), true), all(!vec2<bool>(all(vec3<bool>(false, true, false)), true)), all(!vec2<bool>(global1[_wgslsmith_index_u32(arg_2, 9u)] != i32(-2147483648), select(true, true, true))))) {
                let var_3 = vec3<i32>((select(arg_1.x, i32(-2147483648), all(vec2<bool>(true, false))) << (firstLeadingBit(arg_2) % 32u)) ^ (~(i32(-2147483648) << (u_input.d.x % 32u)) & -45905i), -firstTrailingBit(-11241i), 0i);
                var var_4 = Struct_1(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_0.b) - _wgslsmith_f_op_f32(select(arg_0.c, var_0.a, true))) * _wgslsmith_f_op_f32(1598f - -179f)), _wgslsmith_f_op_f32(f32(-1f) * -608f))), _wgslsmith_f_op_f32(select(var_0.b, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(var_0.c - 995f))), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-2106f), arg_0.a)) > _wgslsmith_div_f32(var_0.a, arg_0.c))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(1f))), -1i, var_0.e);
            }
        }
    }
    var var_0 = Struct_1(-234f, arg_0.c, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(trunc(arg_0.c)))))), _wgslsmith_mult_i32(global1[_wgslsmith_index_u32(u_input.d.x, 9u)] >> (u_input.c % 32u), 2147483647i & firstTrailingBit(global1[_wgslsmith_index_u32(~u_input.d.x, 9u)])), _wgslsmith_mod_vec2_i32(vec2<i32>(~_wgslsmith_add_i32(-1i, u_input.b.x), countOneBits(u_input.e.x)), u_input.b.zx));
    return _wgslsmith_f_op_f32(-var_0.a);
}

fn func_7(arg_0: vec3<f32>, arg_1: Struct_1, arg_2: Struct_1, arg_3: Struct_1) -> bool {
    global1 = array<i32, 9>();
    for (var var_0 = -_wgslsmith_clamp_i32(_wgslsmith_sub_i32(_wgslsmith_mult_i32(-1i, min(arg_3.d, u_input.e.x)), global1[_wgslsmith_index_u32(0u, 9u)]), firstTrailingBit(_wgslsmith_dot_vec2_i32(-arg_3.e, arg_2.e)), -6743i); (~arg_1.d << (firstLeadingBit(1u & (u_input.c << (0u % 32u))) % 32u)) > arg_1.e.x; global0 = array<vec4<bool>, 20>()) {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        var var_1 = -(~(~max(arg_1.e.x, global1[_wgslsmith_index_u32(u_input.c, 9u)]))) >= _wgslsmith_div_i32(global1[_wgslsmith_index_u32(_wgslsmith_mod_u32(firstLeadingBit(_wgslsmith_dot_vec3_u32(vec3<u32>(23132u, u_input.c, u_input.d.x), vec3<u32>(u_input.d.x, 49357u, u_input.c))), u_input.c), 9u)], ~(-1i));
    }
    let var_0 = any(vec4<bool>(true, false, true, true));
    global0 = array<vec4<bool>, 20>();
    loop {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        if (!(!(!(any(vec2<bool>(var_0, false)) | (arg_2.a <= -516f))))) {
            continue;
        }
    }
    return var_0;
}

fn func_5(arg_0: Struct_1) -> Struct_1 {
    let var_0 = firstLeadingBit(u_input.e.x);
    var var_1 = vec3<bool>(true, func_7(vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_0.c) - -446f), arg_0.c, arg_0.a), arg_0, Struct_1(_wgslsmith_f_op_f32(func_6(arg_0, vec3<i32>(-1i, var_0, 2147483647i), firstLeadingBit(u_input.c), ~u_input.d)), _wgslsmith_f_op_f32(func_6(arg_0, vec3<i32>(u_input.b.x, u_input.a.x, u_input.e.x), _wgslsmith_dot_vec3_u32(vec3<u32>(u_input.d.x, u_input.c, u_input.c), vec3<u32>(109887u, u_input.c, u_input.c)), vec2<u32>(u_input.d.x, 12762u))), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-339f))), -(~u_input.e.x), select(-arg_0.e, vec2<i32>(global1[_wgslsmith_index_u32(u_input.c, 9u)], -3394i), true)), arg_0), true);
    global1 = array<i32, 9>();
    let var_2 = ~_wgslsmith_mult_vec2_u32(_wgslsmith_clamp_vec2_u32(abs(u_input.d), vec2<u32>(0u, u_input.c), vec2<u32>(98390u, 26442u)) >> (_wgslsmith_clamp_vec2_u32(u_input.d, u_input.d & vec2<u32>(u_input.c, 36839u), vec2<u32>(u_input.d.x, 3621u) >> (vec2<u32>(18681u, 1u) % vec2<u32>(32u))) % vec2<u32>(32u)), _wgslsmith_clamp_vec2_u32(max(u_input.d, _wgslsmith_div_vec2_u32(u_input.d, u_input.d)), ~(u_input.d >> (u_input.d % vec2<u32>(32u))), _wgslsmith_clamp_vec2_u32(u_input.d, vec2<u32>(u_input.d.x, 0u), ~vec2<u32>(u_input.d.x, u_input.c))));
    var var_3 = u_input.a;
    return arg_0;
}

fn func_4(arg_0: Struct_1, arg_1: Struct_1) -> u32 {
    let var_0 = func_5(arg_0);
    var var_1 = 115f;
    let var_2 = func_5(func_5(Struct_1(875f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_6(Struct_1(1044f, arg_1.c, arg_1.b, arg_1.d, u_input.e.yx), vec3<i32>(arg_1.e.x, global1[_wgslsmith_index_u32(u_input.c, 9u)], 0i), 85329u, u_input.d))), -1346f, 0i, var_0.e)));
    var var_3 = _wgslsmith_f_op_vec2_f32(max(_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(step(-861f, arg_0.a)), _wgslsmith_f_op_f32(1438f * 1004f)) - _wgslsmith_f_op_vec2_f32(exp2(_wgslsmith_f_op_vec2_f32(-vec2<f32>(var_2.b, -432f))))), _wgslsmith_f_op_vec2_f32(abs(_wgslsmith_f_op_vec2_f32(_wgslsmith_div_vec2_f32(vec2<f32>(arg_1.b, -108f), vec2<f32>(1037f, -309f)) + _wgslsmith_f_op_vec2_f32(vec2<f32>(var_0.a, var_0.c) * vec2<f32>(564f, var_2.b)))))), vec2<f32>(arg_0.a, _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(arg_0.c * 611f), _wgslsmith_div_f32(var_2.b, _wgslsmith_f_op_f32(step(var_0.c, var_2.a))))))));
    let var_4 = vec4<u32>(~u_input.c, ~5787u, u_input.c, u_input.c);
    return _wgslsmith_dot_vec4_u32(select(~countOneBits(_wgslsmith_clamp_vec4_u32(vec4<u32>(var_4.x, 0u, var_4.x, var_4.x), vec4<u32>(4294967295u, 0u, 1u, 0u), vec4<u32>(var_4.x, u_input.d.x, u_input.d.x, var_4.x))), vec4<u32>(u_input.c, ~4294967295u, u_input.c, ~(~u_input.d.x)), global0[_wgslsmith_index_u32(var_4.x, 20u)]), var_4);
}

fn func_8(arg_0: Struct_1, arg_1: vec4<f32>, arg_2: bool, arg_3: vec3<u32>) -> vec3<i32> {
    var var_0 = arg_0;
    let var_1 = vec2<bool>(arg_2, (arg_2 | !arg_2) | false);
    loop {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        global1 = array<i32, 9>();
    }
    var var_2 = func_5(arg_0);
    global0 = array<vec4<bool>, 20>();
    return -vec3<i32>(u_input.b.x, -(~global1[_wgslsmith_index_u32(95430u, 9u)]) | firstTrailingBit(_wgslsmith_add_i32(global1[_wgslsmith_index_u32(u_input.c, 9u)], 1i)), _wgslsmith_mod_i32(1i, -27929i));
}

fn func_3() -> Struct_1 {
    for (var var_0 = _wgslsmith_dot_vec3_i32(~(~_wgslsmith_clamp_vec3_i32(u_input.a.ywx, u_input.e, u_input.a.xyz)) ^ func_8(Struct_1(_wgslsmith_f_op_f32(abs(-209f)), _wgslsmith_f_op_f32(round(157f)), _wgslsmith_f_op_f32(-990f + 470f), global1[_wgslsmith_index_u32(u_input.c, 9u)] << (4294967295u % 32u), vec2<i32>(u_input.a.x, global1[_wgslsmith_index_u32(0u, 9u)]) ^ u_input.e.yy), vec4<f32>(976f, _wgslsmith_f_op_f32(795f * -386f), _wgslsmith_f_op_f32(abs(-867f)), _wgslsmith_f_op_f32(-930f - 734f)), i32(-2147483648) >= (u_input.e.x | 64301i), vec3<u32>(_wgslsmith_add_u32(1u, 37243u), func_4(Struct_1(1552f, -1027f, 2092f, u_input.b.x, u_input.e.yz), Struct_1(373f, -822f, -1000f, u_input.b.x, vec2<i32>(i32(-2147483648), 2147483647i))), _wgslsmith_dot_vec3_u32(vec3<u32>(1u, 1u, u_input.d.x), vec3<u32>(u_input.c, u_input.d.x, 1u)))), _wgslsmith_sub_vec3_i32(u_input.a.ywy, -u_input.e)); select(true, !(u_input.c == abs(u_input.c)), false); var_0 += 1i) {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        global1 = array<i32, 9>();
        break;
    }
    var var_0 = -(~u_input.b.wy);
    var_0 = vec2<i32>(1i, i32(-1i) * -firstLeadingBit(-u_input.e.x));
    loop {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        global0 = array<vec4<bool>, 20>();
        let var_1 = global1[_wgslsmith_index_u32(u_input.c, 9u)];
        return func_5(func_5(func_5(func_5(Struct_1(-2024f, 291f, -1000f, u_input.e.x, vec2<i32>(-6478i, var_0.x))))));
    }
    loop {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        continue;
    }
    return func_5(Struct_1(_wgslsmith_f_op_f32(1000f + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-406f))), 1039f, _wgslsmith_f_op_f32(floor(440f)), _wgslsmith_dot_vec2_i32(~u_input.e.xz, vec2<i32>(2147483647i, global1[_wgslsmith_index_u32(u_input.d.x, 9u)])) << (9401u % 32u), select(~vec2<i32>(global1[_wgslsmith_index_u32(u_input.c, 9u)], -27511i) | _wgslsmith_mult_vec2_i32(u_input.a.yy, u_input.e.yx), -vec2<i32>(u_input.b.x, u_input.e.x), !any(vec3<bool>(false, false, true)))));
}

fn func_2(arg_0: vec4<f32>, arg_1: u32, arg_2: vec3<f32>) -> vec2<bool> {
    for (var var_0 = 18031i; select(all(!global0[_wgslsmith_index_u32(arg_1, 20u)]), true, !((true & any(vec3<bool>(false, false, true))) | select(any(vec4<bool>(true, true, true, false)), false, false))); var_0 += 1i) {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
    }
    let var_0 = _wgslsmith_add_vec4_u32(firstLeadingBit(vec4<u32>(33613u, 36874u, _wgslsmith_mod_u32(48437u, u_input.c), arg_1 | 598u)), _wgslsmith_add_vec4_u32(~vec4<u32>(58402u, arg_1, 4294967295u, u_input.d.x), _wgslsmith_sub_vec4_u32(vec4<u32>(u_input.d.x, 1u, u_input.d.x, arg_1), vec4<u32>(34424u, arg_1, arg_1, 76959u))) >> (~firstTrailingBit(vec4<u32>(48460u, u_input.c, 1u, 20706u)) % vec4<u32>(32u))) ^ ~abs(~abs(vec4<u32>(67037u, 4294967295u, 51915u, arg_1)));
    let var_1 = _wgslsmith_mult_vec2_i32(abs(-vec2<i32>(-1i, _wgslsmith_dot_vec4_i32(vec4<i32>(global1[_wgslsmith_index_u32(0u, 9u)], i32(-2147483648), 1i, -5979i), u_input.b))), -u_input.a.zw);
    var var_2 = Struct_1(arg_0.x, _wgslsmith_f_op_f32(-_wgslsmith_div_f32(596f, arg_2.x)), -460f, -197i, vec2<i32>(-23539i, -18520i));
    var_2 = func_3();
    return select(!select(vec2<bool>(all(vec3<bool>(false, false, true)), true), select(vec2<bool>(true, true), select(vec2<bool>(true, true), vec2<bool>(false, true), true), vec2<bool>(true, true)), firstLeadingBit(1142i) > (67541i & var_2.d)), !(!vec2<bool>(true, any(vec4<bool>(false, true, true, true)))), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(func_6(func_3(), select(vec3<i32>(0i, u_input.b.x, var_2.d), vec3<i32>(-1i, global1[_wgslsmith_index_u32(var_0.x, 9u)], 33478i), false), abs(arg_1), ~vec2<u32>(u_input.d.x, 42459u))))) == func_3().c);
}

fn func_1(arg_0: vec4<f32>, arg_1: vec4<i32>) -> f32 {
    global1 = array<i32, 9>();
    global0 = array<vec4<bool>, 20>();
    for (var var_0 = -47342i; all(select(select(!select(vec2<bool>(false, true), vec2<bool>(false, true), vec2<bool>(false, false)), select(vec2<bool>(true, true), select(vec2<bool>(true, false), vec2<bool>(true, false), true), vec2<bool>(true, true)), vec2<bool>(u_input.c == u_input.c, true)), select(vec2<bool>(true, true), vec2<bool>(true, true), vec2<bool>(global1[_wgslsmith_index_u32(4294967295u, 9u)] <= global1[_wgslsmith_index_u32(4294967295u, 9u)], true)), any(func_2(arg_0, 0u << (u_input.c % 32u), arg_0.yxx)))); var_0 -= 1i) {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        var_0 = -7303i;
        for (var var_1 = 1i; var_1 != -99826i; ) {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            let var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0.x));
            var var_3 = any(vec3<bool>(any(vec3<bool>(true, all(vec3<bool>(false, true, false)), true)), true, any(vec3<bool>(true, any(vec3<bool>(true, true, false)), true))));
            let var_4 = vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_0.x + 1263f)), arg_0.x, _wgslsmith_f_op_f32(-709f));
        }
        continue;
    }
    var var_0 = _wgslsmith_f_op_vec2_f32(-vec2<f32>(-2526f, _wgslsmith_f_op_f32(-arg_0.x)));
    let var_1 = ~0u;
    return _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-372f)));
}

fn func_9(arg_0: f32, arg_1: vec4<u32>, arg_2: bool) -> f32 {
    var var_0 = _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(floor(2306f)), arg_0, arg_2));
    let var_1 = Struct_1(_wgslsmith_f_op_f32(floor(140f)), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -757f), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(step(arg_0, 943f)), _wgslsmith_div_f32(arg_0, arg_0))))), _wgslsmith_f_op_f32(round(arg_0)), _wgslsmith_sub_i32(-10944i, reverseBits(u_input.e.x)), -firstTrailingBit(firstTrailingBit(~u_input.b.zx)));
    for (var var_2: i32; ; var_2 -= 1i) {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
    }
    let var_2 = _wgslsmith_f_op_vec2_f32(exp2(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(max(_wgslsmith_f_op_vec2_f32(_wgslsmith_div_vec2_f32(vec2<f32>(1254f, var_1.a), vec2<f32>(arg_0, 357f)) + _wgslsmith_f_op_vec2_f32(-vec2<f32>(arg_0, var_1.a))), _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(-389f, -209f) + vec2<f32>(arg_0, -1000f)), _wgslsmith_f_op_vec2_f32(vec2<f32>(var_1.a, 1749f) * vec2<f32>(arg_0, var_1.c))))) - _wgslsmith_f_op_vec2_f32(ceil(vec2<f32>(_wgslsmith_f_op_f32(func_1(vec4<f32>(arg_0, arg_0, var_1.c, -111f), vec4<i32>(-10628i, i32(-2147483648), -1i, u_input.e.x))), _wgslsmith_f_op_f32(-arg_0)))))));
    switch (abs(_wgslsmith_dot_vec4_i32(abs(~u_input.b), -(~_wgslsmith_mod_vec4_i32(vec4<i32>(global1[_wgslsmith_index_u32(arg_1.x, 9u)], 45929i, -15263i, 1i), u_input.b))))) {
        case 16736i: {
            let var_3 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1123f));
            if (arg_2) {
                let var_4 = _wgslsmith_f_op_f32(var_1.c + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_1.c) + _wgslsmith_f_op_f32(417f - _wgslsmith_f_op_f32(var_2.x + -362f))) + var_1.a));
            }
        }
        case 43586i: {
            var_0 = -1077f;
        }
        case -22429i: {
            var var_3 = func_3();
            switch (2147483647i) {
                case 2147483647i: {
                    global1 = array<i32, 9>();
                    var_0 = _wgslsmith_f_op_f32(func_1(vec4<f32>(_wgslsmith_f_op_f32(f32(-1f) * -957f), -930f, _wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-arg_0), 1f) + _wgslsmith_div_f32(_wgslsmith_f_op_f32(-1000f + var_3.c), 242f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_1(_wgslsmith_f_op_vec4_f32(vec4<f32>(arg_0, arg_0, var_1.a, arg_0) - vec4<f32>(-239f, 534f, var_1.b, var_1.b)), vec4<i32>(u_input.e.x, 1134i, global1[_wgslsmith_index_u32(u_input.c, 9u)], global1[_wgslsmith_index_u32(arg_1.x, 9u)]))))), _wgslsmith_clamp_vec4_i32(~select(_wgslsmith_mod_vec4_i32(vec4<i32>(u_input.a.x, 1i, u_input.e.x, global1[_wgslsmith_index_u32(arg_1.x, 9u)]), vec4<i32>(0i, 0i, var_1.d, var_1.d)), _wgslsmith_mult_vec4_i32(u_input.a, u_input.a), false), u_input.b, _wgslsmith_mult_vec4_i32(_wgslsmith_sub_vec4_i32(vec4<i32>(27394i, u_input.a.x, var_1.e.x, -824i), _wgslsmith_mult_vec4_i32(u_input.a, u_input.b)), _wgslsmith_mult_vec4_i32(vec4<i32>(i32(-2147483648), 26261i, var_1.e.x, var_3.d), u_input.b) >> (select(vec4<u32>(25015u, u_input.d.x, arg_1.x, 4294967295u), arg_1, arg_2) % vec4<u32>(32u))))));
                }
                case 0i: {
                    var_3 = func_3();
                }
                default: {
                    var_3 = func_3();
                    var var_4 = var_1;
                    let var_5 = -_wgslsmith_mult_i32(-41706i, abs(~1i));
                    var var_6 = Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(288f + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-775f) * _wgslsmith_f_op_f32(-var_2.x)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_6(var_1, u_input.e, u_input.d.x, u_input.d))), 667f, ~min(-35017i, var_1.d), -u_input.e.yy);
                }
            }
            loop {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                var var_4 = 18092i ^ var_3.e.x;
                var var_5 = var_3.d;
                let var_6 = ~(i32(-2147483648));
                global1 = array<i32, 9>();
                var var_7 = var_1;
            }
            var var_4 = vec4<f32>(arg_0, _wgslsmith_f_op_f32(458f * 366f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(func_1(_wgslsmith_div_vec4_f32(vec4<f32>(var_3.a, -564f, 863f, var_2.x), vec4<f32>(-761f, var_2.x, 1774f, -308f)), _wgslsmith_mult_vec4_i32(u_input.b, u_input.b))), _wgslsmith_f_op_f32(-1279f))) - func_5(var_1).b), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-var_1.a), 545f)));
        }
        default: {
            for (var var_3 = 2147483647i; true | all(!select(!vec2<bool>(arg_2, false), !vec2<bool>(true, arg_2), !vec2<bool>(false, arg_2))); ) {
                if (LOOP_COUNTERS[18u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
                let var_4 = Struct_1(_wgslsmith_f_op_f32(-var_1.a), var_1.b, -648f, 0i, _wgslsmith_mod_vec2_i32(~(var_1.e | var_1.e), u_input.a.yy));
                var var_5 = _wgslsmith_add_vec4_u32(vec4<u32>(~arg_1.x << (4294967295u % 32u), ~(0u & arg_1.x), arg_1.x, arg_1.x), ~arg_1 << (arg_1 % vec4<u32>(32u))) & _wgslsmith_clamp_vec4_u32(vec4<u32>(firstTrailingBit(49988u) ^ u_input.d.x, max(1u, arg_1.x), 20892u, _wgslsmith_mod_u32(arg_1.x, arg_1.x)), abs(arg_1), ~vec4<u32>(u_input.c, arg_1.x, arg_1.x, arg_1.x) << (vec4<u32>(u_input.d.x, ~4294967295u, 51781u, ~0u) % vec4<u32>(32u)));
                break;
            }
            var_0 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(-305f, var_2.x)) - _wgslsmith_f_op_f32(-var_1.a))) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_1.a)))), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_div_f32(-682f, var_1.a) - _wgslsmith_f_op_f32(-582f + arg_0))))));
            var var_3 = select(_wgslsmith_div_vec3_i32(u_input.b.yyy, _wgslsmith_clamp_vec3_i32(~firstTrailingBit(u_input.b.ywx), vec3<i32>(i32(-2147483648), u_input.b.x, u_input.b.x) ^ select(vec3<i32>(global1[_wgslsmith_index_u32(arg_1.x, 9u)], global1[_wgslsmith_index_u32(49853u, 9u)], var_1.e.x), vec3<i32>(global1[_wgslsmith_index_u32(u_input.d.x, 9u)], var_1.e.x, -1i), vec3<bool>(arg_2, arg_2, false)), u_input.b.zwy)), reverseBits(-u_input.b.yxw) & vec3<i32>(_wgslsmith_add_i32(_wgslsmith_sub_i32(var_1.d, var_1.d), var_1.e.x), ~(-1i), global1[_wgslsmith_index_u32(~1298u, 9u)] & -1i), !(!vec3<bool>(func_7(vec3<f32>(1009f, arg_0, var_2.x), Struct_1(-1274f, 1000f, var_2.x, 44872i, vec2<i32>(-19627i, 3111i)), var_1, Struct_1(var_1.a, -1591f, 1290f, 46257i, vec2<i32>(-33972i, var_1.e.x))), select(false, arg_2, arg_2), true)));
            switch (_wgslsmith_dot_vec3_i32(vec3<i32>(-21217i & ~_wgslsmith_mod_i32(global1[_wgslsmith_index_u32(71978u, 9u)], var_1.d), _wgslsmith_dot_vec2_i32(var_3.yy, _wgslsmith_sub_vec2_i32(vec2<i32>(13131i, u_input.e.x), u_input.b.yw)) & _wgslsmith_add_i32(u_input.a.x & 1i, var_1.e.x), ~_wgslsmith_div_i32(global1[_wgslsmith_index_u32(77643u, 9u)], global1[_wgslsmith_index_u32(_wgslsmith_dot_vec3_u32(vec3<u32>(arg_1.x, u_input.d.x, 1u), vec3<u32>(1u, 32293u, 1u)), 9u)])), u_input.e)) {
                case 1i: {
                    var_3 = ~(-(~(-vec3<i32>(i32(-2147483648), u_input.a.x, 24684i)))) | u_input.e;
                    let var_4 = vec3<u32>(1u, _wgslsmith_mult_u32(_wgslsmith_mult_u32(~max(arg_1.x, 91313u), ~(arg_1.x & 1u)), arg_1.x), 23524u);
                }
                case -7753i: {
                    let var_4 = func_5(func_3());
                    global0 = array<vec4<bool>, 20>();
                }
                case 58467i: {
                    var var_4 = var_2.x;
                    global1 = array<i32, 9>();
                    var_0 = var_1.a;
                }
                case i32(-2147483648): {
                    global0 = array<vec4<bool>, 20>();
                    global1 = array<i32, 9>();
                    var var_4 = u_input.b.zyz;
                    var_4 = _wgslsmith_sub_vec3_i32(-select(vec3<i32>(var_4.x, var_4.x, var_3.x), ~vec3<i32>(0i, var_3.x, -1i), vec3<bool>(arg_2, true, true)) >> (arg_1.wzw % vec3<u32>(32u)), vec3<i32>(1i, firstTrailingBit(-32873i), _wgslsmith_mult_i32(-global1[_wgslsmith_index_u32(~arg_1.x, 9u)], u_input.e.x)));
                    var var_5 = Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(min(arg_0, _wgslsmith_f_op_f32(f32(-1f) * -637f)))))), arg_0, arg_0, func_5(Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_1.c)), 198f, -1545f, ~(-36019i), vec2<i32>(-9413i, global1[_wgslsmith_index_u32(~45300u, 9u)]))).e.x, _wgslsmith_sub_vec2_i32(_wgslsmith_div_vec2_i32(vec2<i32>(-15533i, u_input.a.x), -var_3.yy), u_input.a.xy));
                }
                default: {
                    var var_4 = _wgslsmith_f_op_f32(func_5(Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(812f, var_2.x)), var_2.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_1.a)), ~1i, u_input.b.ww)).b + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(min(1370f, arg_0)), 628f))));
                    var_0 = 269f;
                }
            }
            var var_4 = Struct_1(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -329f) * var_1.a), -163f, var_1.a, firstTrailingBit(~(~firstTrailingBit(0i))), abs(vec2<i32>(_wgslsmith_sub_i32(_wgslsmith_dot_vec4_i32(vec4<i32>(var_1.e.x, var_3.x, u_input.b.x, 6181i), vec4<i32>(16880i, -5441i, global1[_wgslsmith_index_u32(101398u, 9u)], 28639i)), u_input.b.x), _wgslsmith_mult_i32(-13645i, var_3.x))));
        }
    }
    return var_2.x;
}

fn func_10(arg_0: Struct_1, arg_1: u32, arg_2: Struct_1) -> bool {
    if (true) {
        global0 = array<vec4<bool>, 20>();
        var var_0 = func_5(func_3());
    }
    var var_0 = -(~(~func_8(arg_2, vec4<f32>(arg_2.b, arg_2.c, arg_2.b, arg_0.c), true, vec3<u32>(0u, arg_1, 61315u)).yz)) << (_wgslsmith_add_vec2_u32(~vec2<u32>(countOneBits(u_input.c), u_input.c & 3936u), u_input.d) % vec2<u32>(32u));
    var_0 = _wgslsmith_mult_vec2_i32(~arg_2.e, vec2<i32>(29150i, 1i));
    let var_1 = any(func_2(_wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(758f, 846f, 694f, arg_0.b)) * vec4<f32>(arg_2.c, arg_2.a, arg_0.a, -913f)), _wgslsmith_f_op_vec4_f32(abs(_wgslsmith_div_vec4_f32(vec4<f32>(arg_0.b, arg_2.a, -1015f, arg_2.c), vec4<f32>(arg_0.b, 1068f, arg_0.b, arg_0.c)))))), min(_wgslsmith_sub_u32(arg_1, ~8472u), u_input.c), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(arg_2.b, arg_0.b, -2131f) + vec3<f32>(345f, -1175f, arg_2.a)) + vec3<f32>(arg_2.a, arg_2.a, 995f)))));
    switch (-_wgslsmith_div_i32(firstLeadingBit(arg_0.d & u_input.a.x), firstLeadingBit(global1[_wgslsmith_index_u32(arg_1 ^ 4626u, 9u)]))) {
        case -6823i: {
            var_0 = reverseBits(vec2<i32>(i32(-1i) * -26649i, _wgslsmith_mod_i32(-1i, max(global1[_wgslsmith_index_u32(15006u, 9u)], 2147483647i)) | countOneBits(~arg_0.d)));
        }
        default: {
            let var_2 = u_input.d;
            let var_3 = Struct_1(arg_2.c, 1f, arg_2.b, var_0.x, -firstLeadingBit(~arg_2.e));
            let var_4 = select(select(vec4<bool>(false, all(global0[_wgslsmith_index_u32(u_input.d.x, 20u)]), !all(vec4<bool>(false, false, var_1, false)), !(-191f == arg_2.c)), global0[_wgslsmith_index_u32(var_2.x << (44952u % 32u), 20u)], all(select(!vec3<bool>(true, var_1, var_1), vec3<bool>(true, true, false), vec3<bool>(false, false, true)))), !(!global0[_wgslsmith_index_u32(4049u, 20u)]), select(!select(global0[_wgslsmith_index_u32(countOneBits(arg_1), 20u)], select(global0[_wgslsmith_index_u32(1118u, 20u)], vec4<bool>(true, var_1, true, var_1), vec4<bool>(false, false, false, false)), select(vec4<bool>(var_1, true, var_1, true), vec4<bool>(var_1, true, var_1, false), vec4<bool>(true, false, true, var_1))), vec4<bool>(any(vec2<bool>(true, true)), var_1, var_1, true), var_1));
        }
    }
    return !all(!(!vec3<bool>(true, var_1, var_1)));
}

@compute
@workgroup_size(1)
fn main() {
    let var_0 = _wgslsmith_f_op_vec4_f32(vec4<f32>(1193f, _wgslsmith_f_op_f32(ceil(141f)), 583f, -626f) * _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(abs(_wgslsmith_f_op_vec4_f32(vec4<f32>(-998f, 2682f, -1188f, -652f) - vec4<f32>(498f, 232f, 1165f, -507f)))))));
    loop {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
        if (func_10(Struct_1(var_0.x, _wgslsmith_f_op_f32(func_9(_wgslsmith_f_op_f32(func_1(var_0, u_input.a)), vec4<u32>(u_input.d.x, u_input.d.x, u_input.c, u_input.c), true)), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-var_0.x), _wgslsmith_f_op_f32(var_0.x * -362f))), max(min(u_input.b.x, -26280i), 0i), vec2<i32>(global1[_wgslsmith_index_u32(u_input.c, 9u)], 2147483647i) & ~u_input.e.zy), ~u_input.c, Struct_1(-853f, var_0.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_0.x)), abs(global1[_wgslsmith_index_u32(1u, 9u)]) << (reverseBits(u_input.c) % 32u), abs(u_input.b.zz))) & (true & (_wgslsmith_mod_u32(~u_input.d.x, ~39885u) <= 106708u))) {
            break;
        }
        global1 = array<i32, 9>();
        let var_1 = -9275i;
        global0 = array<vec4<bool>, 20>();
    }
    global1 = array<i32, 9>();
    var var_1 = func_3();
    let var_2 = var_1.d;
    var var_3 = func_5(func_5(func_3()));
    loop {
        if (LOOP_COUNTERS[20u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
        continue;
    }
    for (var var_4 = 2147483647i; ; ) {
        if (LOOP_COUNTERS[21u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
        var var_5 = vec3<u32>(select(~u_input.c, ~0u, true), ~(~(~_wgslsmith_sub_u32(u_input.d.x, 0u))), 29397u);
        var_1 = func_3();
        let var_6 = abs(select(vec3<u32>(~19245u, u_input.c, func_4(Struct_1(var_0.x, -230f, 246f, var_1.d, var_1.e), Struct_1(var_1.c, var_0.x, var_3.b, 1i, vec2<i32>(43570i, -2380i)))), max(_wgslsmith_mult_vec3_u32(vec3<u32>(8054u, 1u, u_input.d.x), vec3<u32>(u_input.c, 0u, var_5.x)), vec3<u32>(u_input.d.x, 6845u, u_input.c) | vec3<u32>(64176u, var_5.x, u_input.d.x)), 6832u != ~var_5.x) & ~vec3<u32>(~u_input.d.x, 18627u >> (u_input.c % 32u), select(var_5.x, 29623u, true)));
        if (1103f < _wgslsmith_f_op_f32(-func_3().a)) {
            let var_7 = Struct_1(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_div_f32(-945f, _wgslsmith_f_op_f32(264f + -1490f)) + _wgslsmith_f_op_f32(step(-597f, 829f))) + 793f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(var_3.a - _wgslsmith_f_op_f32(func_3().a + -2060f)) + _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(125f + var_0.x))))), _wgslsmith_f_op_f32(-386f + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_1.b) - _wgslsmith_f_op_f32(step(var_3.c, var_3.b)))), _wgslsmith_sub_i32(-_wgslsmith_div_i32(u_input.e.x, 28756i), -(u_input.e.x ^ _wgslsmith_dot_vec4_i32(u_input.b, u_input.a))), select(var_1.e, var_3.e, vec2<bool>(true, true)));
            var_4 = _wgslsmith_add_i32(~(_wgslsmith_add_i32(var_3.e.x, func_5(Struct_1(var_3.a, var_1.c, var_0.x, i32(-2147483648), var_1.e)).e.x) >> (0u % 32u)), i32(-2147483648));
            break;
        }
    }
    let x = u_input.a;
    s_output = StorageBuffer(u_input.d.x);
}

`;