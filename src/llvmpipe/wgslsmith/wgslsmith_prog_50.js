export const input = [228,57,84,61,114,240,239,6,207,91,154,9,189,167,106,249,237,178,38,138,187,168,141,212,53,221,67,192,225,115,248,119,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [228,57,84,61,114,240,239,6,207,91,154,9,189,167,106,249,237,178,38,138,187,168,141,212,53,221,67,192,225,115,248,119,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[228,57,84,61,114,240,239,6,207,91,154,9,189,167,106,249,237,178,38,138,187,168,141,212,53,221,67,192,225,115,248,119]}
// Seed: 10166820486395259927

struct Struct_1 {
    a: i32,
    b: vec3<i32>,
    c: f32,
    d: vec4<bool>,
}

struct Struct_2 {
    a: vec2<i32>,
}

struct Struct_3 {
    a: i32,
}

struct UniformBuffer {
    a: vec2<u32>,
    b: u32,
    c: vec2<i32>,
    d: i32,
    e: u32,
}

struct StorageBuffer {
    a: f32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: Struct_3 = Struct_3(-32196i);

var<private> global1: array<vec2<u32>, 19>;

var<private> global2: Struct_3 = Struct_3(3272i);

var<private> LOOP_COUNTERS: array<u32, 30>;

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn func_6() -> vec4<f32> {
    switch (global2.a) {
        case -19812i: {
            loop {
                if (LOOP_COUNTERS[0u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
            }
        }
        default: {
        }
    }
    let var_0 = Struct_2(vec2<i32>(u_input.c.x << (u_input.a.x % 32u), _wgslsmith_mult_i32(min(-24608i, 17684i), -u_input.d << (u_input.e % 32u))));
    let var_1 = select(vec2<bool>(1i > u_input.d, false), select(vec2<bool>(false, any(vec4<bool>(true, true, false, false))), vec2<bool>(all(vec2<bool>(true, true)), all(vec3<bool>(true, true, true))), vec2<bool>(_wgslsmith_f_op_f32(-1163f + 2214f) <= _wgslsmith_f_op_f32(sign(-589f)), true)), select(vec2<bool>(true, select(true, true, true)), select(vec2<bool>(true, true), select(select(vec2<bool>(false, true), vec2<bool>(false, true), false), vec2<bool>(true, true), vec2<bool>(true, false)), _wgslsmith_f_op_f32(select(319f, -1000f, false)) >= _wgslsmith_f_op_f32(631f * 398f)), !vec2<bool>(all(vec3<bool>(false, true, false)), select(false, true, false))));
    if (u_input.e != u_input.e) {
    }
    for (var var_2 = 2147483647i; var_1.x; var_2 += 1i) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        let var_3 = var_1.x;
        global0 = Struct_3(1i);
        switch (global0.a) {
            default: {
            }
        }
        loop {
            if (LOOP_COUNTERS[2u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            var var_4 = vec4<f32>(931f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(f32(-1f) * -697f), _wgslsmith_div_f32(-973f, -1517f), u_input.b == 4294967295u)) - _wgslsmith_f_op_f32(238f + _wgslsmith_f_op_f32(min(1000f, 1000f)))) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -482f) + _wgslsmith_div_f32(412f, -940f)))), _wgslsmith_f_op_f32(step(-165f, -1000f)), 2281f);
        }
    }
    return _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(vec4<f32>(-1240f, _wgslsmith_f_op_f32(-1000f * 1651f), _wgslsmith_f_op_f32(min(1248f, -207f)), _wgslsmith_f_op_f32(f32(-1f) * -682f)), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(1678f, -1000f, -1000f, -132f) - vec4<f32>(1061f, -1100f, 666f, 147f)) - _wgslsmith_f_op_vec4_f32(-vec4<f32>(127f, 502f, 448f, -361f)))) - _wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(-1321f), _wgslsmith_f_op_f32(min(-672f, 308f)), _wgslsmith_f_op_f32(step(1579f, -962f)), _wgslsmith_f_op_f32(f32(-1f) * -1895f)) * _wgslsmith_f_op_vec4_f32(sign(vec4<f32>(-1380f, 1304f, 722f, 568f))))) + _wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(1000f, -428f, 114f, -1499f) - vec4<f32>(226f, 467f, -454f, -1057f)) * _wgslsmith_f_op_vec4_f32(vec4<f32>(-1000f, 582f, 245f, -1257f) + vec4<f32>(350f, 432f, -426f, 187f))), vec4<f32>(_wgslsmith_f_op_f32(-296f), _wgslsmith_f_op_f32(f32(-1f) * -435f), 531f, -2585f))));
}

fn func_5(arg_0: vec3<u32>, arg_1: vec2<bool>, arg_2: vec2<f32>) -> i32 {
    loop {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        loop {
            if (LOOP_COUNTERS[4u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
            global0 = Struct_3(-select(_wgslsmith_sub_i32(reverseBits(-50704i), -1i), 2147483647i, true));
            let var_0 = Struct_2(vec2<i32>(-_wgslsmith_mult_i32(u_input.c.x, -4539i), min(_wgslsmith_div_i32(1i, _wgslsmith_mod_i32(0i, global0.a)), 2147483647i)));
            let var_1 = !vec3<bool>(arg_1.x, true, true);
            let var_2 = Struct_3(-1i);
            let var_3 = var_2;
        }
        let var_0 = vec4<bool>(!(!arg_1.x), all(vec4<bool>(true, all(select(vec4<bool>(arg_1.x, arg_1.x, arg_1.x, arg_1.x), vec4<bool>(arg_1.x, false, false, true), vec4<bool>(false, arg_1.x, arg_1.x, false))), true, all(vec3<bool>(arg_1.x, arg_1.x, false)) & (1479f <= arg_2.x))), arg_1.x, arg_1.x);
        var var_1 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(func_6()), _wgslsmith_f_op_vec4_f32(abs(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(round(vec4<f32>(arg_2.x, arg_2.x, 247f, -1000f)))))), var_0)) * _wgslsmith_f_op_vec4_f32(round(vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_2.x - -1000f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -463f) + _wgslsmith_f_op_f32(f32(-1f) * -400f)), -2062f, _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(arg_2.x - 707f)))))));
    }
    var var_0 = _wgslsmith_f_op_vec4_f32(max(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(step(vec4<f32>(-140f, arg_2.x, arg_2.x, _wgslsmith_f_op_f32(-arg_2.x)), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(arg_2.x, 955f, 361f, arg_2.x) - vec4<f32>(872f, 1493f, arg_2.x, arg_2.x))))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(func_6()), _wgslsmith_f_op_vec4_f32(vec4<f32>(-280f, 452f, arg_2.x, arg_2.x) + vec4<f32>(-1000f, arg_2.x, 492f, arg_2.x)))))), _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-1901f * arg_2.x))), _wgslsmith_f_op_f32(sign(1000f)), 2290f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(894f)))))));
    global0 = Struct_3(global2.a);
    var var_1 = !(!vec3<bool>(true, !arg_1.x && true, arg_1.x));
    for (; select(true, any(select(!vec2<bool>(false, var_1.x), select(arg_1, arg_1, false), !var_1.zx)), !(_wgslsmith_mod_i32(u_input.c.x, 9728i) >= min(u_input.d, 2147483647i))) || any(vec4<bool>(~1i > (-30811i & global2.a), _wgslsmith_sub_i32(global2.a, global2.a) == ~u_input.d, all(!vec2<bool>(arg_1.x, false)), var_1.x)); ) {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        continue;
    }
    return global0.a;
}

fn func_4(arg_0: bool, arg_1: i32, arg_2: vec2<bool>, arg_3: Struct_2) -> i32 {
    global2 = Struct_3(abs(_wgslsmith_dot_vec3_i32(-reverseBits(vec3<i32>(8595i, i32(-2147483648), i32(-2147483648))), firstLeadingBit(vec3<i32>(arg_3.a.x, -1i, global2.a)) ^ vec3<i32>(global2.a, global2.a, i32(-2147483648)))));
    switch (_wgslsmith_add_i32(select(arg_3.a.x, _wgslsmith_sub_i32(global2.a, func_5(~vec3<u32>(u_input.a.x, u_input.b, 46714u), vec2<bool>(false, arg_2.x), _wgslsmith_f_op_vec2_f32(abs(vec2<f32>(-522f, -2263f))))), arg_0), ~(i32(-2147483648)) >> (~(~63512u & _wgslsmith_dot_vec3_u32(vec3<u32>(1u, u_input.b, u_input.b), vec3<u32>(u_input.e, u_input.b, 40657u))) % 32u))) {
        default: {
        }
    }
    for (; ; ) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        var var_0 = _wgslsmith_div_vec2_u32(abs(vec2<u32>(u_input.a.x, u_input.e)), vec2<u32>(_wgslsmith_clamp_u32(~4294967295u, 1u, u_input.b), ~(~4294967295u))) >> ((global1[_wgslsmith_index_u32(u_input.b, 19u)] | u_input.a) % vec2<u32>(32u));
        loop {
            if (LOOP_COUNTERS[7u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
            continue;
        }
    }
    global2 = Struct_3(global0.a);
    let var_0 = Struct_1(0i, vec3<i32>(reverseBits(_wgslsmith_div_i32(~5634i, i32(-1i) * -14457i)), ~(-31738i), 29525i), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(f32(-1f) * -190f), -802f, all(!vec3<bool>(true, arg_2.x, false)))), vec4<bool>(any(select(vec3<bool>(arg_0, true, arg_0), select(vec3<bool>(false, true, true), vec3<bool>(false, true, arg_2.x), true), any(vec2<bool>(true, false)))), (~u_input.c.x >= arg_3.a.x) & all(!vec4<bool>(true, false, arg_0, true)), arg_2.x, arg_0));
    return -var_0.a;
}

fn func_7(arg_0: Struct_1, arg_1: Struct_2) -> Struct_2 {
    switch (func_5(_wgslsmith_clamp_vec3_u32(vec3<u32>(_wgslsmith_div_u32(u_input.e, ~6867u), abs(6082u) >> (_wgslsmith_mod_u32(u_input.b, 30520u) % 32u), u_input.e), ~vec3<u32>(u_input.b, 19759u, u_input.e), vec3<u32>(_wgslsmith_clamp_u32(1u, 30399u, _wgslsmith_dot_vec2_u32(global1[_wgslsmith_index_u32(34594u, 19u)], u_input.a)), _wgslsmith_dot_vec3_u32(~vec3<u32>(u_input.b, u_input.e, 63568u), ~vec3<u32>(11619u, 0u, u_input.a.x)), u_input.e)), select(select(vec2<bool>(true, true), select(select(vec2<bool>(true, arg_0.d.x), arg_0.d.wx, false), select(vec2<bool>(true, arg_0.d.x), vec2<bool>(true, true), vec2<bool>(false, false)), select(arg_0.d.yy, arg_0.d.wx, vec2<bool>(true, arg_0.d.x))), !any(vec2<bool>(false, true))), vec2<bool>(!any(vec3<bool>(arg_0.d.x, false, arg_0.d.x)), arg_0.d.x), !arg_0.d.x && (false & all(arg_0.d.xz))), _wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(min(arg_0.c, _wgslsmith_f_op_f32(-arg_0.c))), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(step(arg_0.c, -265f)), -989f, any(arg_0.d.yx))))))) {
        case 1i: {
            switch (abs(~_wgslsmith_dot_vec4_i32(vec4<i32>(2147483647i, -46596i, -774i, _wgslsmith_add_i32(arg_0.b.x, global2.a)), _wgslsmith_sub_vec4_i32(vec4<i32>(global0.a, -48709i, i32(-2147483648), global2.a) >> (vec4<u32>(46558u, u_input.a.x, u_input.b, u_input.b) % vec4<u32>(32u)), firstLeadingBit(vec4<i32>(arg_0.b.x, 14354i, -94568i, i32(-2147483648))))))) {
                case -43358i: {
                }
                default: {
                    var var_0 = select(vec2<u32>(u_input.e, _wgslsmith_mod_u32(_wgslsmith_div_u32(max(u_input.a.x, u_input.b), u_input.a.x), u_input.b)), _wgslsmith_div_vec2_u32(select(firstTrailingBit(vec2<u32>(1u, 2560u)), ~vec2<u32>(4294967295u, u_input.b), vec2<bool>(false, true)), max(_wgslsmith_clamp_vec2_u32(vec2<u32>(u_input.b, u_input.a.x), u_input.a, u_input.a), vec2<u32>(u_input.b, u_input.a.x))) >> (u_input.a % vec2<u32>(32u)), false);
                    global2 = Struct_3(32482i);
                    let var_1 = _wgslsmith_f_op_vec3_f32(round(vec3<f32>(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(arg_0.c * 272f))))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(arg_0.c))), -1301f), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(arg_0.c, 287f)), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_vec4_f32(func_6()).x, _wgslsmith_f_op_f32(-arg_0.c))))))));
                    global2 = Struct_3(firstLeadingBit(firstLeadingBit(max(countOneBits(0i), ~(-1i)))));
                }
            }
            if (!(!(!all(arg_0.d.zy)) && any(select(arg_0.d.yyw, select(vec3<bool>(true, arg_0.d.x, arg_0.d.x), vec3<bool>(true, true, false), arg_0.d.yzz), select(vec3<bool>(false, arg_0.d.x, arg_0.d.x), arg_0.d.wxw, vec3<bool>(arg_0.d.x, arg_0.d.x, arg_0.d.x)))))) {
                var var_0 = abs(vec3<u32>(_wgslsmith_div_u32(_wgslsmith_sub_u32(_wgslsmith_sub_u32(u_input.b, u_input.b), ~4294967295u), (u_input.e | 74745u) >> (~u_input.e % 32u)), u_input.a.x, u_input.b));
                global0 = Struct_3(-firstLeadingBit(countOneBits(arg_1.a.x)) & -6190i);
            }
            var var_0 = abs(~_wgslsmith_sub_vec3_u32(_wgslsmith_div_vec3_u32(~vec3<u32>(u_input.e, u_input.e, u_input.b), vec3<u32>(u_input.b, u_input.e, u_input.e) >> (vec3<u32>(u_input.a.x, u_input.a.x, u_input.e) % vec3<u32>(32u))), ~(~vec3<u32>(1u, 0u, u_input.e))));
            for (var var_1 = 2147483647i; true; var_1 += 1i) {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                let var_2 = Struct_3(0i);
                global0 = Struct_3(_wgslsmith_add_i32(_wgslsmith_mult_i32(20879i, 20037i), i32(-2147483648)));
                let var_3 = _wgslsmith_f_op_f32(abs(arg_0.c));
                var var_4 = any(arg_0.d);
            }
            for (; ; ) {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                var var_1 = vec4<bool>(any(!select(!arg_0.d.wx, select(arg_0.d.wy, arg_0.d.yx, vec2<bool>(arg_0.d.x, arg_0.d.x)), 4294967295u != u_input.e)), arg_0.d.x, arg_0.d.x, any(select(!select(arg_0.d.zxx, vec3<bool>(arg_0.d.x, arg_0.d.x, arg_0.d.x), arg_0.d.yzx), !arg_0.d.wxw, arg_0.d.yyz)));
                global0 = Struct_3(reverseBits(_wgslsmith_mod_i32(countOneBits(-u_input.c.x), select(1i, _wgslsmith_mult_i32(global0.a, 21985i), var_1.x))));
                var var_2 = Struct_3(countOneBits(global2.a));
            }
        }
        case -1i: {
            loop {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                return Struct_2(reverseBits(_wgslsmith_mult_vec2_i32(~(-vec2<i32>(u_input.c.x, u_input.c.x)), arg_1.a)));
            }
            let var_0 = select(false, false, arg_0.d.x);
            let var_1 = Struct_3(-12110i);
            var var_2 = arg_0.b;
        }
        default: {
            let var_0 = arg_1.a;
            switch (arg_1.a.x) {
                case 2147483647i: {
                    var var_1 = Struct_1(-arg_0.b.x << (firstTrailingBit(_wgslsmith_div_u32(u_input.a.x, 63855u)) % 32u), vec3<i32>(-1i) * -arg_0.b, -184f, arg_0.d);
                    global1 = array<vec2<u32>, 19>();
                }
                default: {
                    global0 = Struct_3(firstTrailingBit(0i ^ ~abs(global0.a)));
                }
            }
            global2 = Struct_3(~(~_wgslsmith_sub_i32(~u_input.d, _wgslsmith_mod_i32(2147483647i, global2.a))));
            let var_1 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(min(arg_0.c, arg_0.c)), _wgslsmith_f_op_f32(trunc(arg_0.c)))) * vec2<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -521f), 115f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0.c)))));
            var var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-749f) + -739f), 2412f)));
        }
    }
    if (all(arg_0.d.yx)) {
        var var_0 = _wgslsmith_mult_u32(abs(55146u), countOneBits(u_input.e));
    }
    var var_0 = arg_1;
    let var_1 = arg_0;
    for (var var_2: i32; ; var_0 = Struct_2(_wgslsmith_sub_vec2_i32(firstLeadingBit(vec2<i32>(1i, 1i) >> (vec2<u32>(0u, u_input.b) % vec2<u32>(32u))), vec2<i32>(_wgslsmith_mod_i32(~(-1i), _wgslsmith_sub_i32(global2.a, -42181i)), -7905i)))) {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        loop {
            if (LOOP_COUNTERS[12u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
            global1 = array<vec2<u32>, 19>();
        }
        break;
    }
    return Struct_2(select(reverseBits(u_input.c), arg_0.b.yx, false));
}

fn func_3(arg_0: vec3<f32>, arg_1: Struct_3, arg_2: vec4<i32>) -> Struct_1 {
    switch (_wgslsmith_clamp_i32(2147483647i, global0.a, _wgslsmith_sub_i32(firstTrailingBit(global0.a), ~global2.a))) {
        case 1i: {
            let var_0 = ~_wgslsmith_mod_u32(~u_input.a.x, u_input.b);
            var var_1 = ~u_input.a.x;
            var var_2 = func_7(Struct_1(func_4(all(vec3<bool>(true, true, true)), _wgslsmith_mod_i32(~arg_2.x, -2658i), !select(vec2<bool>(true, true), vec2<bool>(false, true), true), Struct_2(_wgslsmith_div_vec2_i32(vec2<i32>(-30184i, 1i), u_input.c))), (_wgslsmith_clamp_vec3_i32(vec3<i32>(39764i, -1i, 0i), vec3<i32>(28516i, global0.a, arg_2.x), vec3<i32>(2147483647i, arg_2.x, -9277i)) | (arg_2.zyy >> (vec3<u32>(1u, 1u, 1u) % vec3<u32>(32u)))) ^ -_wgslsmith_mult_vec3_i32(arg_2.xxx, vec3<i32>(u_input.c.x, 1004i, 9368i)), -623f, vec4<bool>(select(true, false, false) | any(vec3<bool>(false, false, true)), arg_0.x >= _wgslsmith_f_op_f32(arg_0.x * -1044f), any(vec3<bool>(true, true, true)), true)), Struct_2(_wgslsmith_sub_vec2_i32(firstTrailingBit(~arg_2.xw), min(arg_2.yy, u_input.c))));
            loop {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                var var_3 = !any(!select(select(vec3<bool>(false, false, true), vec3<bool>(true, false, true), false), vec3<bool>(true, true, true), vec3<bool>(true, true, true)));
                var_1 = ~u_input.a.x;
                break;
            }
            global0 = arg_1;
        }
        case 0i: {
            if (true) {
                var var_0 = ~_wgslsmith_mod_vec3_i32(~select(arg_2.xww, vec3<i32>(20883i, arg_2.x, u_input.d), true), arg_2.ywz & (vec3<i32>(global0.a, global2.a, u_input.d) << (~vec3<u32>(29393u, u_input.b, 43566u) % vec3<u32>(32u))));
            }
            global0 = arg_1;
        }
        case -12382i: {
            loop {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                global1 = array<vec2<u32>, 19>();
            }
            for (var var_0: i32; ; var_0 -= 1i) {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
                global1 = array<vec2<u32>, 19>();
                break;
            }
            var var_0 = reverseBits(vec3<i32>(max(min(27550i, _wgslsmith_add_i32(0i, global2.a)), arg_1.a), 22450i, global0.a));
            global2 = arg_1;
            global0 = arg_1;
        }
        default: {
            if (_wgslsmith_add_i32(_wgslsmith_dot_vec2_i32(u_input.c | func_7(Struct_1(i32(-2147483648), arg_2.wzz, -1205f, vec4<bool>(true, false, true, true)), Struct_2(arg_2.xx)).a, select(vec2<i32>(u_input.c.x, arg_1.a) | u_input.c, _wgslsmith_sub_vec2_i32(u_input.c, u_input.c), vec2<bool>(true, true))), ~(_wgslsmith_mult_i32(arg_2.x, u_input.c.x) << (u_input.b % 32u))) <= abs(arg_2.x)) {
            }
            var var_0 = Struct_2(vec2<i32>(-1i | _wgslsmith_sub_i32(_wgslsmith_mult_i32(u_input.c.x, arg_2.x), _wgslsmith_mult_i32(arg_1.a, 2147483647i)), ~u_input.c.x));
        }
    }
    var var_0 = arg_1;
    if (false) {
        global1 = array<vec2<u32>, 19>();
        switch (arg_1.a) {
            case 14388i: {
            }
            default: {
            }
        }
        switch (global0.a) {
            case 0i: {
                let var_1 = func_7(Struct_1(u_input.d, ~firstTrailingBit(vec3<i32>(i32(-2147483648), i32(-2147483648), var_0.a)), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(arg_0.x - _wgslsmith_f_op_vec4_f32(func_6()).x), arg_0.x)), vec4<bool>(false, any(vec4<bool>(true, true, false, false)), select(true, false, true), all(select(vec2<bool>(false, false), vec2<bool>(false, false), vec2<bool>(true, false))))), Struct_2(countOneBits(vec2<i32>(1i, global2.a))));
                var_0 = arg_1;
                var var_2 = firstLeadingBit(_wgslsmith_clamp_vec3_u32(firstLeadingBit(vec3<u32>(~u_input.e, ~65278u, abs(0u))), vec3<u32>(_wgslsmith_mod_u32(0u | u_input.b, _wgslsmith_dot_vec3_u32(vec3<u32>(0u, u_input.e, 4294967295u), vec3<u32>(u_input.e, u_input.a.x, u_input.e))), max(_wgslsmith_mult_u32(u_input.a.x, u_input.e), countOneBits(u_input.b)), 1u), ~(~(~vec3<u32>(4294967295u, 4863u, 57606u)))));
                var var_3 = min(max(-vec3<i32>(func_5(vec3<u32>(u_input.a.x, var_2.x, 90310u), vec2<bool>(true, false), vec2<f32>(arg_0.x, -2228f)), _wgslsmith_mod_i32(1i, i32(-2147483648)), arg_2.x), firstTrailingBit(select(vec3<i32>(1i, 1i, u_input.c.x), ~arg_2.zxz, true))), _wgslsmith_clamp_vec3_i32(-arg_2.zwz, arg_2.xzz, arg_2.yww));
                var_3 = -_wgslsmith_add_vec3_i32(abs(vec3<i32>(arg_1.a, ~1i, ~(-39470i))), arg_2.wyy);
            }
            case 1i: {
                var var_1 = (vec3<u32>(_wgslsmith_mult_u32(u_input.a.x, 2056u >> (u_input.e % 32u)), abs(u_input.b), ~1u) ^ _wgslsmith_mult_vec3_u32(~vec3<u32>(u_input.a.x, 0u, 0u), vec3<u32>(19132u, u_input.b ^ 4294967295u, 4294967295u))) ^ (~(~vec3<u32>(4294967295u, 80372u, 1u)) | _wgslsmith_div_vec3_u32(~vec3<u32>(u_input.b, u_input.e, u_input.b), select(_wgslsmith_div_vec3_u32(vec3<u32>(u_input.a.x, 41938u, u_input.e), vec3<u32>(0u, u_input.b, 1932u)), abs(vec3<u32>(7233u, 4294967295u, u_input.a.x)), select(vec3<bool>(false, true, false), vec3<bool>(true, false, true), vec3<bool>(true, true, false)))));
                var var_2 = ~vec2<i32>(3371i, abs(1i));
                global0 = Struct_3(_wgslsmith_clamp_i32(_wgslsmith_dot_vec2_i32(~min(vec2<i32>(0i, arg_1.a), arg_2.yz), (arg_2.zz & u_input.c) & arg_2.xz), func_4(any(vec4<bool>(true, true, true, true)), _wgslsmith_dot_vec3_i32(_wgslsmith_div_vec3_i32(arg_2.ywz, vec3<i32>(var_0.a, var_2.x, global0.a)), ~vec3<i32>(global0.a, var_0.a, 1i)), vec2<bool>(true, true), Struct_2(-arg_2.zx)), -global0.a));
                var var_3 = 1372f;
            }
            case -10184i: {
            }
            case -1448i: {
                global0 = arg_1;
                global1 = array<vec2<u32>, 19>();
                var var_1 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_0.x) * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(arg_0.x, arg_0.x, all(select(vec2<bool>(true, false), vec2<bool>(true, true), vec2<bool>(true, true)))))));
                let var_2 = all(!(!select(select(vec2<bool>(true, false), vec2<bool>(false, false), true), vec2<bool>(true, false), vec2<bool>(true, true))));
                let var_3 = Struct_2(u_input.c);
            }
            default: {
            }
        }
        if (true && any(vec2<bool>(any(vec3<bool>(true, false, false)), all(vec3<bool>(true, true, true))))) {
            let var_1 = arg_1;
            global1 = array<vec2<u32>, 19>();
            var_0 = arg_1;
        }
        loop {
            if (LOOP_COUNTERS[16u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
            global1 = array<vec2<u32>, 19>();
        }
    }
    for (var var_1 = -45844i; any(select(!select(vec3<bool>(true, true, true), select(vec3<bool>(false, false, true), vec3<bool>(false, false, true), vec3<bool>(true, false, true)), true), vec3<bool>(select(var_0.a, global0.a, false) < func_5(vec3<u32>(u_input.e, u_input.b, 70513u), vec2<bool>(false, true), vec2<f32>(arg_0.x, -665f)), false, true), !select(vec3<bool>(true, true, true), vec3<bool>(true, true, true), any(vec2<bool>(false, true))))); var_1 -= 1i) {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
        var var_2 = u_input.b;
        continue;
    }
    return Struct_1(firstLeadingBit(var_0.a), _wgslsmith_clamp_vec3_i32(~(-countOneBits(vec3<i32>(-1i, u_input.d, 19112i))), vec3<i32>(_wgslsmith_div_i32(-arg_1.a, ~arg_2.x), 0i, -u_input.d), firstLeadingBit(arg_2.zxx)), arg_0.x, select(!vec4<bool>(46615u < u_input.a.x, true, 1000f > arg_0.x, true), vec4<bool>(false, (u_input.d < global2.a) || any(vec4<bool>(true, false, false, false)), !any(vec3<bool>(true, true, false)), true), !vec4<bool>(false, any(vec3<bool>(true, false, false)), true, true)));
}

fn func_2(arg_0: f32) -> i32 {
    var var_0 = ~global0.a;
    loop {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        switch (-647i) {
            case 2147483647i: {
                continue;
            }
            case 48354i: {
                global1 = array<vec2<u32>, 19>();
                continue;
            }
            case 1i: {
                var var_1 = func_3(_wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-707f, arg_0, -247f)), _wgslsmith_f_op_vec3_f32(vec3<f32>(arg_0, arg_0, arg_0) + vec3<f32>(-1547f, arg_0, 236f))) + _wgslsmith_f_op_vec3_f32(floor(vec3<f32>(131f, 771f, arg_0)))))), Struct_3(-30485i), -(firstLeadingBit(~vec4<i32>(global2.a, 2147483647i, -9692i, -70584i)) ^ -_wgslsmith_mod_vec4_i32(vec4<i32>(-11626i, 13633i, u_input.c.x, u_input.c.x), vec4<i32>(-15829i, 2147483647i, i32(-2147483648), 8183i))));
                var_1 = func_3(vec3<f32>(_wgslsmith_f_op_f32(select(arg_0, _wgslsmith_div_f32(199f, -115f), !var_1.d.x)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-var_1.c), arg_0))), arg_0), Struct_3(-627i), vec4<i32>(func_4(true, _wgslsmith_clamp_i32(abs(u_input.d), 1269i ^ var_1.b.x, i32(-2147483648)), vec2<bool>(true, var_1.d.x && var_1.d.x), func_7(Struct_1(11700i, vec3<i32>(32756i, global0.a, -30529i), arg_0, var_1.d), Struct_2(vec2<i32>(u_input.d, -1i)))), abs(var_1.b.x), global0.a, 5197i));
            }
            default: {
                let var_1 = Struct_1(~(~5105i), vec3<i32>(global2.a, 0i, func_4(true, 1i, vec2<bool>(all(vec2<bool>(false, true)), true), Struct_2(~u_input.c))), -1000f, vec4<bool>(true, true, true, true));
                var var_2 = Struct_3(_wgslsmith_sub_i32(u_input.c.x, ~(i32(-2147483648))));
            }
        }
        loop {
            if (LOOP_COUNTERS[19u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
        }
    }
    let var_1 = select(func_3(_wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(vec3<f32>(-102f, 102f, -704f) + vec3<f32>(arg_0, arg_0, 271f)), _wgslsmith_f_op_vec3_f32(-vec3<f32>(arg_0, arg_0, arg_0)), 2147483647i != global2.a)))), Struct_3(~1i), vec4<i32>(0i, ~(~(-14451i)), _wgslsmith_sub_i32(_wgslsmith_div_i32(global2.a, i32(-2147483648)), _wgslsmith_dot_vec3_i32(vec3<i32>(63422i, 0i, global0.a), vec3<i32>(-13328i, 1i, i32(-2147483648)))), _wgslsmith_mod_i32(u_input.d, global2.a))).d.xzy, vec3<bool>(!select(1u > u_input.e, false, true), any(vec2<bool>(arg_0 >= -312f, true)), any(vec2<bool>(true, true))), true);
    var var_2 = _wgslsmith_f_op_f32(1176f + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(arg_0, arg_0)) + arg_0)));
    let var_3 = func_3(vec3<f32>(-404f, _wgslsmith_f_op_f32(-arg_0), _wgslsmith_f_op_f32(f32(-1f) * -665f)), Struct_3(global2.a), -vec4<i32>(u_input.c.x << (0u % 32u), -44184i, -9738i, global2.a)).d;
    return u_input.d;
}

fn func_1() -> vec3<i32> {
    loop {
        if (LOOP_COUNTERS[20u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
    }
    var var_0 = true;
    switch (countOneBits(global0.a) ^ select(_wgslsmith_clamp_i32(func_2(-230f), u_input.c.x, -_wgslsmith_dot_vec3_i32(vec3<i32>(global2.a, 12654i, -27129i), vec3<i32>(1i, -36003i, global2.a))), u_input.d & ~(-1i), all(vec3<bool>(true, true, true)))) {
        case 2147483647i: {
            switch (19204i) {
                case 0i: {
                    global2 = Struct_3(_wgslsmith_clamp_i32(max(-(~global2.a), 19812i), u_input.d, -38576i));
                    var_0 = any(vec2<bool>(true, true)) && true;
                    var var_1 = Struct_1(reverseBits(i32(-2147483648)), vec3<i32>(global2.a ^ global2.a, 4857i << (u_input.e % 32u), u_input.d), -274f, !(!func_3(_wgslsmith_f_op_vec3_f32(-vec3<f32>(631f, -1345f, -407f)), Struct_3(u_input.d), vec4<i32>(-1287i, 0i, -70638i, 1i) ^ vec4<i32>(global2.a, global0.a, -1i, u_input.d)).d));
                    var var_2 = _wgslsmith_f_op_f32(sign(882f));
                    var_2 = -1570f;
                }
                case 1i: {
                    let var_1 = 348f;
                    var var_2 = 2147483647i & global2.a;
                }
                default: {
                    let var_1 = vec4<u32>(~(~u_input.a.x), firstTrailingBit(1u), u_input.e, 38168u);
                    var var_2 = func_7(Struct_1(global2.a, _wgslsmith_add_vec3_i32(~vec3<i32>(u_input.c.x, 21034i, 1i) << (abs(vec3<u32>(32898u, var_1.x, var_1.x)) % vec3<u32>(32u)), countOneBits(~vec3<i32>(global2.a, global2.a, 32040i))), _wgslsmith_f_op_f32(f32(-1f) * -1543f), func_3(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1396f, -356f, 1534f)) + _wgslsmith_f_op_vec4_f32(func_6()).zxx), Struct_3(0i), countOneBits(vec4<i32>(-81947i, -1i, global0.a, u_input.d) ^ vec4<i32>(-1i, -60314i, global0.a, 28633i))).d), Struct_2(_wgslsmith_add_vec2_i32(vec2<i32>(u_input.d, 30617i), abs(-vec2<i32>(27575i, global0.a)))));
                    var var_3 = vec3<bool>(false, any(vec3<bool>(true, true, false)), true);
                }
            }
            global2 = Struct_3(func_5(min(countOneBits(vec3<u32>(u_input.b, 4294967295u, u_input.b) << (vec3<u32>(0u, u_input.b, 50123u) % vec3<u32>(32u))), vec3<u32>(0u, 1u, u_input.b) | ~vec3<u32>(u_input.b, u_input.b, 1u)), func_3(_wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(vec3<f32>(1000f, 938f, -272f), vec3<f32>(2238f, 1485f, -901f))), Struct_3(~(-21833i)), vec4<i32>(abs(i32(-2147483648)), global2.a, 14571i, global0.a)).d.wy, vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(318f))), -314f)));
            for (var var_1 = func_5(abs(~vec3<u32>(firstTrailingBit(u_input.b), 90969u, ~0u)), vec2<bool>(true, true), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec4_f32(func_6()).yz)))); true; global1 = array<vec2<u32>, 19>()) {
                if (LOOP_COUNTERS[21u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
                global0 = Struct_3(global0.a);
                continue;
            }
        }
        default: {
            var var_1 = 1513f;
            switch (min(~(-func_4(true, func_5(vec3<u32>(38566u, 4294967295u, u_input.b), vec2<bool>(false, true), vec2<f32>(-213f, -1000f)), vec2<bool>(false, true), func_7(Struct_1(0i, vec3<i32>(-24820i, global2.a, 1i), -550f, vec4<bool>(true, false, true, false)), Struct_2(u_input.c)))), _wgslsmith_sub_i32(global0.a, abs(max(global2.a >> (18311u % 32u), _wgslsmith_div_i32(global2.a, global2.a)))))) {
                case -11908i: {
                    var var_2 = Struct_3(u_input.c.x);
                    var_0 = true;
                    global0 = Struct_3(u_input.d);
                    let var_3 = Struct_1(max(-4167i, 2147483647i), select(~_wgslsmith_mod_vec3_i32(abs(vec3<i32>(global0.a, 2147483647i, 31008i)), vec3<i32>(global0.a, 1i, global2.a)), _wgslsmith_mod_vec3_i32(_wgslsmith_add_vec3_i32(_wgslsmith_mult_vec3_i32(vec3<i32>(u_input.d, 33587i, 1i), vec3<i32>(u_input.c.x, i32(-2147483648), global2.a)), -vec3<i32>(53726i, i32(-2147483648), -20135i)), vec3<i32>(_wgslsmith_dot_vec3_i32(vec3<i32>(1i, var_2.a, i32(-2147483648)), vec3<i32>(var_2.a, 1i, var_2.a)), _wgslsmith_mod_i32(u_input.d, u_input.d), var_2.a)), select(func_3(_wgslsmith_f_op_vec3_f32(vec3<f32>(-740f, 1226f, 1579f) * vec3<f32>(221f, 787f, 806f)), Struct_3(-34721i), vec4<i32>(-13418i, 1i, u_input.d, global2.a)).d.zxy, func_3(_wgslsmith_f_op_vec3_f32(max(vec3<f32>(-1066f, 766f, -1702f), vec3<f32>(-2266f, -210f, 138f))), Struct_3(global2.a), vec4<i32>(-52245i, 1i, global2.a, var_2.a)).d.yxz, vec3<bool>(true, any(vec3<bool>(false, false, false)), all(vec4<bool>(false, true, false, false))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-func_3(vec3<f32>(-415f, 510f, -306f), Struct_3(u_input.c.x), vec4<i32>(6963i, global0.a, global0.a, i32(-2147483648))).c) + _wgslsmith_div_f32(_wgslsmith_f_op_f32(-1000f + -2022f), _wgslsmith_f_op_f32(select(248f, -505f, false))))), select(!func_3(_wgslsmith_f_op_vec3_f32(-vec3<f32>(838f, -1000f, -647f)), Struct_3(u_input.c.x), -vec4<i32>(u_input.c.x, i32(-2147483648), 27758i, global2.a)).d, vec4<bool>(any(select(vec2<bool>(true, true), vec2<bool>(true, true), false)), true, all(vec2<bool>(true, true)), !select(false, false, false)), true));
                }
                case 1i: {
                    var var_2 = vec4<bool>(select(false, all(select(vec3<bool>(true, true, false), vec3<bool>(false, true, true), false)) & all(vec3<bool>(true, true, true)), true), any(vec4<bool>(true, true, true, true)), true, any(select(!func_3(vec3<f32>(855f, 2587f, 1529f), Struct_3(u_input.d), vec4<i32>(global0.a, 14184i, global0.a, global0.a)).d.yzx, vec3<bool>(true, true, true), vec3<bool>(func_3(vec3<f32>(783f, -1428f, -1026f), Struct_3(u_input.c.x), vec4<i32>(-1172i, global2.a, global2.a, 6461i)).d.x, true, false))));
                    var_2 = select(select(!(!(!vec4<bool>(var_2.x, false, true, false))), vec4<bool>(var_2.x, select(any(vec4<bool>(var_2.x, false, var_2.x, var_2.x)), true, true), all(!var_2.xxw), var_2.x), vec4<bool>(false, all(var_2.zx), false, !var_2.x)), !func_3(_wgslsmith_f_op_vec3_f32(min(vec3<f32>(-1120f, 1136f, -515f), _wgslsmith_f_op_vec3_f32(vec3<f32>(297f, 545f, -1000f) * vec3<f32>(823f, -643f, -1155f)))), Struct_3(global0.a), ~vec4<i32>(i32(-2147483648), -40860i, 19978i, global0.a)).d, func_3(vec3<f32>(-1400f, 1139f, 503f), Struct_3(global2.a), vec4<i32>(-42446i, 36334i, _wgslsmith_div_i32(u_input.d ^ global2.a, 0i), ~func_4(var_2.x, global2.a, vec2<bool>(false, true), Struct_2(vec2<i32>(2147483647i, 2147483647i))))).d);
                    global1 = array<vec2<u32>, 19>();
                    let var_3 = _wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(1000f, 688f)) + func_3(vec3<f32>(-737f, -490f, -2143f), Struct_3(global0.a), vec4<i32>(global2.a, global2.a, global0.a, u_input.c.x)).c) + _wgslsmith_f_op_f32(-_wgslsmith_div_f32(-451f, 651f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(212f + -1242f), _wgslsmith_f_op_f32(min(-207f, 306f)), all(vec4<bool>(var_2.x, var_2.x, var_2.x, false))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-465f) + _wgslsmith_f_op_f32(f32(-1f) * -2420f))))));
                }
                default: {
                    var_1 = -667f;
                    global2 = Struct_3(countOneBits(global2.a));
                    let var_2 = !vec4<bool>(true, true, true, all(vec4<bool>(true, true, true, true)));
                }
            }
            var_1 = -1021f;
            var var_2 = i32(-2147483648);
            let var_3 = u_input.e;
        }
    }
    global1 = array<vec2<u32>, 19>();
    for (; select(select(true, any(vec4<bool>(true, true, global2.a != -1i, true)), true), true, true); ) {
        if (LOOP_COUNTERS[22u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
        var_0 = false;
        loop {
            if (LOOP_COUNTERS[23u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
            var var_1 = ~global0.a;
            global1 = array<vec2<u32>, 19>();
            var_0 = true;
        }
        if (!(!(!any(vec4<bool>(true, false, false, false))))) {
        }
        break;
    }
    return vec3<i32>(_wgslsmith_div_i32(global2.a, global0.a), _wgslsmith_mod_i32(~global2.a, (i32(-1i) * -global2.a) & ((u_input.c.x | 0i) & _wgslsmith_mult_i32(u_input.d, -1i))), abs(2147483647i));
}

fn func_8(arg_0: Struct_2, arg_1: vec3<i32>, arg_2: Struct_3, arg_3: vec2<bool>) -> Struct_3 {
    var var_0 = 333f;
    if (arg_3.x) {
        var var_1 = arg_0;
        loop {
            if (LOOP_COUNTERS[24u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
            let var_2 = func_7(func_3(_wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(select(606f, 992f, arg_3.x)), _wgslsmith_f_op_f32(1188f * 215f), 1632f)), arg_2, ~_wgslsmith_mult_vec4_i32(firstTrailingBit(vec4<i32>(global0.a, global0.a, arg_2.a, 11788i)), _wgslsmith_sub_vec4_i32(vec4<i32>(var_1.a.x, 52531i, arg_0.a.x, -17367i), vec4<i32>(1i, 30034i, arg_1.x, 4840i)))), Struct_2(-_wgslsmith_sub_vec2_i32(~u_input.c, arg_0.a | u_input.c)));
            global0 = Struct_3(~(abs(_wgslsmith_clamp_i32(817i, global0.a, arg_0.a.x)) | max(var_1.a.x, arg_0.a.x)));
            break;
        }
        for (var var_2 = -60332i; var_2 != 0i; var_2 -= 1i) {
            if (LOOP_COUNTERS[25u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
            var_0 = func_3(_wgslsmith_f_op_vec3_f32(max(vec3<f32>(_wgslsmith_f_op_vec4_f32(func_6()).x, -1305f, _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-1791f)))), _wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(vec3<f32>(568f, -729f, 1596f), vec3<f32>(527f, -1189f, -1544f)) - vec3<f32>(1072f, 1455f, -117f)), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(max(vec3<f32>(777f, -1229f, -839f), vec3<f32>(-1291f, -2660f, 498f)))))))), arg_2, countOneBits(~vec4<i32>(min(u_input.d, global0.a), -2816i, 1i | global0.a, ~(-1i)))).c;
        }
    }
    var var_1 = _wgslsmith_mult_u32(u_input.e, u_input.e);
    global0 = Struct_3(func_2(-929f));
    return Struct_3(abs(18779i >> (((u_input.e ^ 1u) & countOneBits(u_input.a.x)) % 32u)));
}

fn func_9(arg_0: Struct_3) -> bool {
    loop {
        if (LOOP_COUNTERS[26u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
        global0 = func_8(func_7(Struct_1(41765i, _wgslsmith_mult_vec3_i32(vec3<i32>(-37093i, 1i, i32(-2147483648)), vec3<i32>(i32(-2147483648), global2.a, global0.a)) & vec3<i32>(global2.a, u_input.d, global2.a), 965f, select(select(vec4<bool>(false, true, true, true), vec4<bool>(false, true, true, false), vec4<bool>(true, false, false, true)), vec4<bool>(true, false, false, false), true)), Struct_2(max(-u_input.c, min(vec2<i32>(arg_0.a, 40355i), u_input.c)))), vec3<i32>(~(-select(39886i, global0.a, true)), ~global0.a, min(_wgslsmith_add_i32(1i, global0.a), firstLeadingBit(global0.a))), arg_0, vec2<bool>(true, true));
    }
    loop {
        if (LOOP_COUNTERS[27u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[27u] = LOOP_COUNTERS[27u] + 1u;
        if (false) {
        }
        if (max(_wgslsmith_clamp_u32(~reverseBits(u_input.e), firstTrailingBit(u_input.a.x), 4294967295u), ~_wgslsmith_dot_vec4_u32(vec4<u32>(u_input.e, u_input.e, u_input.e, u_input.a.x), vec4<u32>(u_input.e, 0u, 0u, u_input.a.x))) != 1u) {
            return any(!select(select(vec4<bool>(false, false, true, false), vec4<bool>(true, true, false, true), vec4<bool>(true, true, true, true)), vec4<bool>(true, true, true, true), func_3(vec3<f32>(273f, 459f, -1242f), Struct_3(i32(-2147483648)), vec4<i32>(arg_0.a, global2.a, global2.a, -2142i)).d));
        }
    }
    loop {
        if (LOOP_COUNTERS[28u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[28u] = LOOP_COUNTERS[28u] + 1u;
        var var_0 = Struct_3(u_input.d);
        loop {
            if (LOOP_COUNTERS[29u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[29u] = LOOP_COUNTERS[29u] + 1u;
            global0 = arg_0;
            return any(func_3(_wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(vec3<f32>(-805f, 1000f, 1074f) + vec3<f32>(1515f, -1324f, 1415f)))))), func_8(func_7(Struct_1(global0.a, vec3<i32>(-53998i, global2.a, global0.a), -685f, vec4<bool>(true, false, false, false)), Struct_2(u_input.c)), reverseBits(vec3<i32>(global0.a, var_0.a, 38597i) & vec3<i32>(41432i, var_0.a, global0.a)), Struct_3(-33773i), func_3(_wgslsmith_f_op_vec3_f32(round(vec3<f32>(-1198f, 360f, -282f))), Struct_3(global0.a), vec4<i32>(2147483647i, 2147483647i, global2.a, arg_0.a)).d.xz), _wgslsmith_add_vec4_i32(~(vec4<i32>(u_input.d, 15275i, var_0.a, var_0.a) << (vec4<u32>(1u, 7061u, u_input.e, 49850u) % vec4<u32>(32u))), -_wgslsmith_mult_vec4_i32(vec4<i32>(-1i, -1i, i32(-2147483648), 2147483647i), vec4<i32>(var_0.a, arg_0.a, global0.a, var_0.a)))).d.wxw);
        }
        switch (u_input.d) {
            default: {
                global0 = Struct_3(-1i);
                let var_1 = Struct_1(-(~2147483647i), ~vec3<i32>(_wgslsmith_add_i32(0i, global2.a ^ global0.a), 2147483647i, func_4(true, 77342i, select(vec2<bool>(false, false), vec2<bool>(true, false), false), func_7(Struct_1(arg_0.a, vec3<i32>(arg_0.a, 47727i, var_0.a), -1075f, vec4<bool>(false, true, false, false)), Struct_2(u_input.c)))), _wgslsmith_f_op_f32(1f + 1000f), func_3(_wgslsmith_f_op_vec3_f32(-vec3<f32>(104f, _wgslsmith_f_op_f32(1000f - 258f), _wgslsmith_div_f32(1154f, 741f))), func_8(func_7(func_3(vec3<f32>(1000f, -1815f, -955f), arg_0, vec4<i32>(global2.a, global2.a, arg_0.a, 2147483647i)), Struct_2(u_input.c)), _wgslsmith_add_vec3_i32(_wgslsmith_mult_vec3_i32(vec3<i32>(global0.a, global2.a, var_0.a), vec3<i32>(i32(-2147483648), 12468i, u_input.d)), -vec3<i32>(-11176i, var_0.a, var_0.a)), Struct_3(1i), func_3(_wgslsmith_f_op_vec3_f32(vec3<f32>(-276f, -269f, -1000f) + vec3<f32>(136f, 1000f, 762f)), func_8(Struct_2(u_input.c), vec3<i32>(arg_0.a, 11i, 2147483647i), Struct_3(35154i), vec2<bool>(false, true)), vec4<i32>(42657i, -78631i, var_0.a, i32(-2147483648))).d.zz), vec4<i32>(-1i) * -vec4<i32>(1i, i32(-2147483648), u_input.d, i32(-2147483648))).d);
                continue;
            }
        }
        let var_1 = !select(select(!select(vec4<bool>(false, true, false, true), vec4<bool>(false, true, false, true), true), vec4<bool>(true, true, true, true), select(select(vec4<bool>(false, false, true, false), vec4<bool>(false, true, false, false), vec4<bool>(false, false, true, true)), vec4<bool>(false, true, false, true), any(vec3<bool>(true, true, true)))), !select(select(vec4<bool>(true, false, true, true), vec4<bool>(false, true, true, false), vec4<bool>(false, false, false, true)), vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true)), false && (~u_input.d == global0.a));
        var var_2 = vec3<u32>(~4294967295u, _wgslsmith_sub_u32(u_input.e, (u_input.a.x | 0u) & 25124u) >> (reverseBits(_wgslsmith_dot_vec4_u32(abs(vec4<u32>(u_input.b, 1u, 2153u, u_input.e)), ~vec4<u32>(4294967295u, 50250u, 60029u, u_input.e))) % 32u), u_input.a.x);
    }
    if (!(!all(vec4<bool>(true, true, true, true)))) {
        var var_0 = vec2<bool>(true, !any(select(select(vec3<bool>(true, true, false), vec3<bool>(true, true, false), vec3<bool>(true, false, true)), vec3<bool>(true, true, true), vec3<bool>(false, true, false))));
        switch (arg_0.a) {
            default: {
                let var_1 = Struct_1(-max(_wgslsmith_div_i32(arg_0.a, -9388i), _wgslsmith_mod_i32(~(-27562i), arg_0.a)), vec3<i32>(_wgslsmith_div_i32(global0.a, -1i), 2147483647i, 19914i), 1378f, select(vec4<bool>(true, true, true, true), select(vec4<bool>(true, true, true, true), !(!vec4<bool>(false, var_0.x, var_0.x, true)), !select(vec4<bool>(false, true, false, var_0.x), vec4<bool>(false, var_0.x, var_0.x, var_0.x), vec4<bool>(var_0.x, true, true, true))), vec4<bool>(!any(vec4<bool>(false, false, true, true)), true, !(1i >= global2.a), _wgslsmith_mult_i32(u_input.d, 2147483647i) <= _wgslsmith_add_i32(-9614i, -9694i))));
                global2 = arg_0;
                global1 = array<vec2<u32>, 19>();
            }
        }
        let var_1 = _wgslsmith_f_op_vec2_f32(sign(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(step(vec2<f32>(-3757f, _wgslsmith_f_op_vec4_f32(func_6()).x), _wgslsmith_f_op_vec2_f32(trunc(_wgslsmith_f_op_vec2_f32(abs(vec2<f32>(-239f, 1680f))))))) + _wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(1000f - -340f), _wgslsmith_div_f32(-292f, -245f))))));
        switch (func_2(_wgslsmith_f_op_f32(ceil(var_1.x))) & global0.a) {
            case -27499i: {
            }
            case -1440i: {
                global0 = Struct_3(min(func_5(~vec3<u32>(10952u, u_input.b, u_input.e), !vec2<bool>(var_0.x, false), var_1) & (2147483647i << (countOneBits(u_input.e) % 32u)), func_8(Struct_2(reverseBits(u_input.c)), ~(vec3<i32>(u_input.d, 15623i, arg_0.a) >> (vec3<u32>(u_input.a.x, 62888u, 4294967295u) % vec3<u32>(32u))), arg_0, vec2<bool>(var_0.x, false)).a));
                global2 = arg_0;
                return !var_0.x;
            }
            default: {
                let var_2 = func_7(func_3(_wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(vec3<f32>(575f, var_1.x, var_1.x) + vec3<f32>(var_1.x, 529f, -2520f)))))), Struct_3(-33798i), vec4<i32>(global2.a, u_input.c.x, ~(~u_input.c.x), -10795i)), func_7(func_3(_wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(-1164f, 1464f, 1136f))))), func_8(func_7(Struct_1(-1i, vec3<i32>(i32(-2147483648), -1i, global2.a), var_1.x, vec4<bool>(var_0.x, var_0.x, false, var_0.x)), Struct_2(vec2<i32>(1i, global0.a))), vec3<i32>(global0.a, global2.a, i32(-2147483648)) >> (vec3<u32>(9320u, 38009u, 19234u) % vec3<u32>(32u)), Struct_3(-8246i), vec2<bool>(var_0.x, var_0.x)), vec4<i32>(1i, _wgslsmith_dot_vec2_i32(vec2<i32>(0i, global0.a), u_input.c), 0i, global0.a)), Struct_2(u_input.c)));
                let var_3 = false;
            }
        }
    }
    if (-458f > _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(-390f)) - -637f)))))) {
        var var_0 = Struct_3(_wgslsmith_clamp_i32(func_8(Struct_2(u_input.c), -vec3<i32>(u_input.d, arg_0.a, global0.a), arg_0, vec2<bool>(true, true)).a, func_1().x, -59100i));
        var var_1 = func_3(vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-718f))) + _wgslsmith_f_op_f32(func_3(vec3<f32>(-422f, 1228f, 802f), arg_0, vec4<i32>(0i, 2147483647i, var_0.a, global2.a)).c - _wgslsmith_f_op_f32(min(-108f, -572f)))), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-777f * -357f)))), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(458f + 1325f) + -1336f)))), func_8(Struct_2(u_input.c), countOneBits(vec3<i32>(var_0.a, 2147483647i, global0.a)), arg_0, select(vec2<bool>(true, any(vec4<bool>(false, true, false, true))), vec2<bool>(true, true), false)), _wgslsmith_sub_vec4_i32(~_wgslsmith_add_vec4_i32(_wgslsmith_mod_vec4_i32(vec4<i32>(var_0.a, var_0.a, global2.a, -7002i), vec4<i32>(var_0.a, -11467i, arg_0.a, u_input.c.x)), ~vec4<i32>(u_input.d, arg_0.a, -1i, 2147483647i)), vec4<i32>(-_wgslsmith_mod_i32(-8844i, global2.a), 19306i, _wgslsmith_clamp_i32(var_0.a, 0i, global2.a) & _wgslsmith_add_i32(arg_0.a, 32660i), var_0.a))).d;
    }
    return all(select(func_3(_wgslsmith_div_vec3_f32(vec3<f32>(-198f, 690f, 244f), _wgslsmith_f_op_vec3_f32(-vec3<f32>(-786f, 493f, 1646f))), func_8(Struct_2(vec2<i32>(-1i, global2.a)), firstTrailingBit(vec3<i32>(53711i, arg_0.a, -1i)), func_8(Struct_2(vec2<i32>(i32(-2147483648), global0.a)), vec3<i32>(46351i, u_input.d, 14298i), Struct_3(-34405i), vec2<bool>(false, false)), select(vec2<bool>(false, false), vec2<bool>(false, true), vec2<bool>(false, true))), -(vec4<i32>(arg_0.a, i32(-2147483648), global2.a, 0i) | vec4<i32>(13830i, 48965i, 1i, 9326i))).d, select(vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true), select(vec4<bool>(true, true, true, true), vec4<bool>(false, true, true, false), vec4<bool>(false, true, false, false))), vec4<bool>(!func_3(vec3<f32>(301f, 1715f, 907f), Struct_3(arg_0.a), vec4<i32>(arg_0.a, 2147483647i, arg_0.a, u_input.c.x)).d.x, true, any(vec2<bool>(true, true)), false)));
}

@compute
@workgroup_size(1)
fn main() {
    var var_0 = 1702f;
    let var_1 = ~(~(~vec4<u32>(u_input.a.x, 85632u, u_input.e, 1u | u_input.e)));
    var var_2 = vec4<bool>(!(u_input.d >= 138i), false, select(func_9(func_8(Struct_2(u_input.c), func_1(), Struct_3(-32548i), vec2<bool>(true, true))), true, true), 64118u != abs(_wgslsmith_mod_u32(u_input.e, u_input.a.x)));
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_f_op_vec4_f32(func_6()).x);
}

`;