export const input = [16,62,10,197,249,248,48,139,57,155,39,161,14,77,9,203,47,111,59,6,70,237,242,157,244,165,252,234,241,166,211,78,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [16,62,10,197,249,248,48,139,57,155,39,161,14,77,9,203,47,111,59,6,70,237,242,157,244,165,252,234,241,166,211,78,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[16,62,10,197,249,248,48,139,57,155,39,161,14,77,9,203,47,111,59,6,70,237,242,157,244,165,252,234,241,166,211,78]}
// Seed: 18103399059354689192

struct Struct_1 {
    a: vec4<u32>,
    b: bool,
    c: vec2<i32>,
    d: i32,
}

struct Struct_2 {
    a: u32,
    b: i32,
}

struct UniformBuffer {
    a: vec3<u32>,
    b: i32,
    c: u32,
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

var<private> global0: array<i32, 20> = array<i32, 20>(2147483647i, 1i, -40311i, -6663i, 1i, -1i, 2147483647i, -1i, 17614i, 22504i, 0i, -31535i, 2147483647i, i32(-2147483648), -45915i, 0i, 3526i, i32(-2147483648), 1i, 13482i);

var<private> global1: vec2<f32> = vec2<f32>(-178f, -242f);

var<private> global2: array<vec3<bool>, 19>;

var<private> global3: array<vec4<u32>, 10>;

var<private> LOOP_COUNTERS: array<u32, 21>;

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn func_5(arg_0: vec3<f32>, arg_1: Struct_2, arg_2: u32) -> vec2<f32> {
    var var_0 = Struct_1(vec4<u32>(countOneBits(arg_1.a), arg_2, arg_2 << (firstTrailingBit(arg_2 ^ 1u) % 32u), u_input.a.x), !(!any(vec4<bool>(true, true, false, true)) & true), abs(~(-vec2<i32>(global0[_wgslsmith_index_u32(arg_1.a, 20u)], u_input.b) | (vec2<i32>(u_input.b, global0[_wgslsmith_index_u32(u_input.a.x, 20u)]) & vec2<i32>(-32923i, arg_1.b)))), -_wgslsmith_clamp_i32(-arg_1.b | 26707i, ~global0[_wgslsmith_index_u32(~arg_1.a, 20u)], 0i));
    switch (_wgslsmith_clamp_i32(-1i, 1i, select(1i, ~(i32(-2147483648)), !(_wgslsmith_f_op_f32(-125f - arg_0.x) > arg_0.x)))) {
        case i32(-2147483648): {
        }
        default: {
        }
    }
    return vec2<f32>(_wgslsmith_f_op_f32(sign(-326f)), -304f);
}

fn func_4(arg_0: f32, arg_1: i32, arg_2: f32, arg_3: Struct_2) -> bool {
    var var_0 = u_input.a;
    var var_1 = !global2[_wgslsmith_index_u32(4294967295u, 19u)];
    if (true) {
        global1 = vec2<f32>(global1.x, _wgslsmith_div_f32(arg_0, arg_2));
    }
    var var_2 = ~arg_3.b;
    global1 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-1000f, _wgslsmith_f_op_f32(arg_2 * 457f))) * _wgslsmith_f_op_vec2_f32(select(vec2<f32>(1606f, global1.x), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(select(vec2<f32>(-232f, 1037f), vec2<f32>(855f, arg_0), var_1.xy)) * _wgslsmith_f_op_vec2_f32(func_5(vec3<f32>(arg_0, arg_0, arg_2), arg_3, 0u))), vec2<bool>(true, var_1.x)))));
    return select(~(~(arg_3.a & arg_3.a)) < _wgslsmith_sub_u32(~29754u, _wgslsmith_mod_u32(u_input.a.x, _wgslsmith_dot_vec3_u32(u_input.a, u_input.a))), !var_1.x, -21321i != arg_3.b);
}

fn func_6(arg_0: Struct_1) -> f32 {
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
    }
    var var_0 = vec3<f32>(173f, global1.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(global1.x - 1000f) * global1.x)))));
    if (true) {
        let var_1 = arg_0;
        let var_2 = vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(529f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(1779f))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(var_0.x * _wgslsmith_f_op_f32(-var_0.x)))));
        switch (max(_wgslsmith_dot_vec3_i32(vec3<i32>(148i, var_1.d, global0[_wgslsmith_index_u32(var_1.a.x, 20u)]), _wgslsmith_div_vec3_i32(_wgslsmith_clamp_vec3_i32(vec3<i32>(-41199i, var_1.d, global0[_wgslsmith_index_u32(57913u, 20u)]), vec3<i32>(-46044i, u_input.b, 2147483647i), vec3<i32>(2147483647i, u_input.b, arg_0.c.x)) | -vec3<i32>(global0[_wgslsmith_index_u32(1u, 20u)], var_1.c.x, global0[_wgslsmith_index_u32(var_1.a.x, 20u)]), vec3<i32>(u_input.b, -1i, i32(-2147483648)) ^ ~vec3<i32>(-51970i, u_input.b, global0[_wgslsmith_index_u32(31758u, 20u)]))), _wgslsmith_add_i32(~_wgslsmith_mult_i32(countOneBits(-7161i), var_1.d), -1i))) {
            case -12005i: {
            }
            default: {
                let var_3 = Struct_2(4294967295u, var_1.d);
                var var_4 = var_1;
                global0 = array<i32, 20>();
            }
        }
        let var_3 = true || ((arg_0.b & false) && var_1.b);
    }
    global1 = vec2<f32>(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(max(-1220f, var_0.x)))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_vec2_f32(func_5(vec3<f32>(var_0.x, 568f, global1.x), Struct_2(u_input.a.x, -5156i), arg_0.a.x)).x), _wgslsmith_f_op_f32(-global1.x)))), _wgslsmith_f_op_f32(_wgslsmith_div_f32(var_0.x, _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(sign(global1.x)), _wgslsmith_f_op_f32(step(var_0.x, -802f))))) - _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-665f)))))));
    switch (abs(_wgslsmith_clamp_i32(u_input.b >> (~0u % 32u), global0[_wgslsmith_index_u32(_wgslsmith_clamp_u32(1568u, 38959u, 30527u), 20u)], -15122i))) {
        case 1i: {
            loop {
                if (LOOP_COUNTERS[1u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
                var_0 = vec3<f32>(global1.x, _wgslsmith_f_op_f32(-2560f * -792f), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(f32(-1f) * -788f), 1f)));
            }
            let var_1 = vec2<i32>(_wgslsmith_sub_i32(u_input.b, -38843i), global0[_wgslsmith_index_u32(42310u, 20u)]);
            switch (arg_0.d) {
                default: {
                    var var_2 = ~1u;
                    let var_3 = _wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -432f)), var_0.x) + vec2<f32>(771f, _wgslsmith_f_op_f32(-311f)));
                    var var_4 = select(true, true, false);
                }
            }
            var_0 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(min(_wgslsmith_div_vec3_f32(vec3<f32>(global1.x, global1.x, global1.x), vec3<f32>(var_0.x, 282f, 1000f)), _wgslsmith_f_op_vec3_f32(vec3<f32>(global1.x, -336f, global1.x) - vec3<f32>(1000f, global1.x, var_0.x))))))));
        }
        case -25050i: {
            let var_1 = _wgslsmith_f_op_f32(-global1.x);
            global0 = array<i32, 20>();
        }
        case -32337i: {
            let var_1 = arg_0.a.x;
        }
        case -1i: {
            global0 = array<i32, 20>();
            loop {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
                let var_1 = select(vec4<bool>(false, ~(u_input.c | arg_0.a.x) < 4294967295u, arg_0.b, max(-u_input.b, reverseBits(arg_0.d)) >= countOneBits(_wgslsmith_add_i32(arg_0.d, u_input.b))), select(!(!vec4<bool>(arg_0.b, arg_0.b, false, arg_0.b)), vec4<bool>(arg_0.b, true | all(vec4<bool>(arg_0.b, true, false, arg_0.b)), arg_0.b, true || (arg_0.b & arg_0.b)), !vec4<bool>(arg_0.b == false, true, true, false)), select(vec4<bool>(true, arg_0.b, any(global2[_wgslsmith_index_u32(~u_input.c, 19u)]), _wgslsmith_f_op_f32(f32(-1f) * -881f) <= var_0.x), vec4<bool>(arg_0.b, all(!vec2<bool>(false, arg_0.b)), any(select(global2[_wgslsmith_index_u32(1u, 19u)], vec3<bool>(arg_0.b, false, arg_0.b), arg_0.b)), any(vec3<bool>(arg_0.b, arg_0.b, true))), vec4<bool>(arg_0.b, all(vec4<bool>(arg_0.b, true, false, arg_0.b)), all(select(vec3<bool>(arg_0.b, arg_0.b, arg_0.b), vec3<bool>(true, false, arg_0.b), global2[_wgslsmith_index_u32(0u, 19u)])), !arg_0.b)));
                let var_2 = vec2<i32>(_wgslsmith_clamp_i32(27923i, firstTrailingBit(_wgslsmith_mult_i32(-arg_0.c.x, i32(-2147483648))), reverseBits(_wgslsmith_dot_vec4_i32(-vec4<i32>(global0[_wgslsmith_index_u32(34488u, 20u)], 0i, 1i, u_input.b), _wgslsmith_mod_vec4_i32(vec4<i32>(global0[_wgslsmith_index_u32(u_input.a.x, 20u)], 1i, arg_0.c.x, arg_0.d), vec4<i32>(u_input.b, u_input.b, -13941i, -42338i))))), u_input.b);
                let var_3 = !(!select(vec3<bool>(arg_0.b, var_0.x >= var_0.x, arg_0.d >= 0i), var_1.xwx, all(!vec4<bool>(arg_0.b, false, var_1.x, false))));
                break;
            }
        }
        default: {
            return _wgslsmith_div_f32(_wgslsmith_f_op_f32(floor(1732f)), -479f);
        }
    }
    return -1318f;
}

fn func_3() -> Struct_1 {
    let var_0 = ~(u_input.a | ~vec3<u32>(u_input.c >> (u_input.c % 32u), ~0u, 33573u));
    for (; 38836u != u_input.a.x; ) {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
    }
    global0 = array<i32, 20>();
    for (var var_1 = -2634i; ; var_1 += 1i) {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        break;
    }
    for (var var_1 = 88557i; select(!select(false && (global1.x < global1.x), 0u > u_input.a.x, func_4(global1.x, u_input.b, global1.x, Struct_2(u_input.a.x, 18947i))), false, !func_4(257f, global0[_wgslsmith_index_u32(~(~var_0.x), 20u)], 1f, Struct_2(select(u_input.c, u_input.c, false), 0i))); var_1 -= 1i) {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        switch (countOneBits(2147483647i)) {
            case -5309i: {
                var var_2 = Struct_1(global3[_wgslsmith_index_u32(abs(max(33219u, u_input.a.x)), 10u)], select(all(vec4<bool>(any(vec4<bool>(true, false, true, true)), true, func_4(global1.x, global0[_wgslsmith_index_u32(var_0.x, 20u)], 349f, Struct_2(var_0.x, 10684i)), true)), true, func_4(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(func_6(Struct_1(global3[_wgslsmith_index_u32(30934u, 10u)], false, vec2<i32>(global0[_wgslsmith_index_u32(u_input.c, 20u)], 0i), 2147483647i))) - global1.x), abs(global0[_wgslsmith_index_u32(_wgslsmith_dot_vec3_u32(vec3<u32>(0u, var_0.x, 31136u), var_0), 20u)]), -389f, Struct_2(var_0.x, i32(-1i) * -1i))), countOneBits(vec2<i32>(_wgslsmith_mod_i32(12635i, 38963i), _wgslsmith_dot_vec4_i32(vec4<i32>(55005i, global0[_wgslsmith_index_u32(u_input.c, 20u)], -1i, 2147483647i), vec4<i32>(global0[_wgslsmith_index_u32(1u, 20u)], 2147483647i, i32(-2147483648), u_input.b))) & -vec2<i32>(global0[_wgslsmith_index_u32(var_0.x, 20u)], u_input.b)), 1i);
                let var_3 = -592f;
                var var_4 = Struct_1(abs(vec4<u32>(select(countOneBits(30109u), ~12123u, any(vec4<bool>(false, false, var_2.b, false))), u_input.a.x, 75361u, 89382u)), false, vec2<i32>(0i, min(29337i, select(-var_2.c.x, -u_input.b, var_2.b))), -2147483647i);
                break;
            }
            default: {
                let var_2 = vec2<u32>(51805u, 4294967295u);
                var_1 = select(~1i, ~24187i, (any(select(vec2<bool>(true, false), vec2<bool>(true, false), vec2<bool>(false, false))) && true) && false);
                var var_3 = i32(-2147483648);
                var var_4 = Struct_1(~_wgslsmith_sub_vec4_u32(~vec4<u32>(1u, 50798u, 0u, var_2.x), ~vec4<u32>(0u, 8200u, var_2.x, var_2.x)), (_wgslsmith_f_op_f32(f32(-1f) * -1673f) >= _wgslsmith_f_op_f32(_wgslsmith_div_f32(431f, -1224f) - _wgslsmith_f_op_f32(-global1.x))) & false, vec2<i32>(i32(-2147483648), _wgslsmith_div_i32(~abs(global0[_wgslsmith_index_u32(1u, 20u)]), global0[_wgslsmith_index_u32(~(~var_2.x), 20u)])), firstLeadingBit(~(u_input.b & ~u_input.b)));
                return Struct_1(var_4.a, false, var_4.c, var_4.c.x);
            }
        }
        return Struct_1(_wgslsmith_add_vec4_u32(_wgslsmith_mod_vec4_u32(reverseBits(global3[_wgslsmith_index_u32(1u ^ var_0.x, 10u)]), vec4<u32>(var_0.x, 24937u, 1u, 25125u) << ((global3[_wgslsmith_index_u32(4294967295u, 10u)] << (vec4<u32>(var_0.x, 1u, u_input.a.x, var_0.x) % vec4<u32>(32u))) % vec4<u32>(32u))), vec4<u32>(var_0.x, _wgslsmith_mult_u32(var_0.x, var_0.x), var_0.x, countOneBits(~36851u))), !(_wgslsmith_f_op_f32(-507f - global1.x) > -299f) || (_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1000f * global1.x) * _wgslsmith_f_op_f32(global1.x * global1.x)) != global1.x), min(abs(vec2<i32>(-2147483647i, abs(1i))), -vec2<i32>(min(-1i, global0[_wgslsmith_index_u32(var_0.x, 20u)]), firstLeadingBit(u_input.b))), ~firstLeadingBit(u_input.b ^ firstTrailingBit(global0[_wgslsmith_index_u32(var_0.x, 20u)])));
    }
    return Struct_1(~vec4<u32>(u_input.c, ~(var_0.x | 15102u), _wgslsmith_dot_vec2_u32(select(u_input.a.yy, vec2<u32>(var_0.x, var_0.x), true), ~vec2<u32>(u_input.a.x, 60446u)), var_0.x << (_wgslsmith_dot_vec3_u32(vec3<u32>(var_0.x, var_0.x, var_0.x), vec3<u32>(4294967295u, var_0.x, 1u)) % 32u)), any(vec4<bool>(true && (i32(-2147483648) > u_input.b), !any(global2[_wgslsmith_index_u32(var_0.x, 19u)]), !all(vec3<bool>(false, false, false)), true)), vec2<i32>(-1i) * -_wgslsmith_mod_vec2_i32(vec2<i32>(global0[_wgslsmith_index_u32(u_input.c, 20u)], u_input.b), vec2<i32>(global0[_wgslsmith_index_u32(0u, 20u)], 41212i) ^ vec2<i32>(u_input.b, 46621i)), -61243i);
}

fn func_2(arg_0: vec3<u32>, arg_1: Struct_2, arg_2: u32, arg_3: Struct_2) -> vec4<i32> {
    if (true) {
        if (!all(!global2[_wgslsmith_index_u32(1u, 19u)]) == true) {
            global0 = array<i32, 20>();
            let var_0 = func_3();
            let var_1 = var_0;
            var var_2 = arg_1;
        }
        global0 = array<i32, 20>();
    }
    var var_0 = Struct_2(min(~(~arg_1.a & _wgslsmith_dot_vec3_u32(vec3<u32>(1u, 22045u, arg_2), u_input.a)), ~(~arg_2)), -1i);
    if (select(true, (all(select(vec3<bool>(true, false, false), global2[_wgslsmith_index_u32(4294967295u, 19u)], true)) & true) || false, true == (-127f >= global1.x))) {
    }
    var var_1 = abs(abs(~vec3<u32>(arg_1.a, arg_0.x ^ 42590u, arg_1.a << (4294967295u % 32u))));
    switch (u_input.b) {
        case 1i: {
            for (var var_2 = 5901i; ; var_2 -= 1i) {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                let var_3 = !vec4<bool>(global1.x < _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -266f)), u_input.b <= -global0[_wgslsmith_index_u32(_wgslsmith_dot_vec3_u32(vec3<u32>(0u, 4294967295u, arg_1.a), vec3<u32>(0u, 1u, 0u)), 20u)], any(vec4<bool>(true, true, true, true)) && true, 49611u >= abs(abs(arg_0.x)));
            }
            global2 = array<vec3<bool>, 19>();
            loop {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                let var_2 = _wgslsmith_mult_vec4_i32(firstLeadingBit(countOneBits(vec4<i32>(arg_3.b, i32(-2147483648), global0[_wgslsmith_index_u32(var_1.x, 20u)], var_0.b))) | -vec4<i32>(_wgslsmith_mult_i32(var_0.b, global0[_wgslsmith_index_u32(0u, 20u)]), global0[_wgslsmith_index_u32(29599u, 20u)], -1i, arg_1.b), vec4<i32>(2188i, -(func_3().d | 25676i), -16421i, max(_wgslsmith_clamp_i32(7461i, arg_1.b, -16120i), abs(1i)) | 21830i));
                var_0 = Struct_2(arg_1.a, 1i);
                break;
            }
        }
        default: {
            var var_2 = ~arg_1.b;
            global2 = array<vec3<bool>, 19>();
            var var_3 = !(!func_3().b);
            if (any(!select(vec2<bool>(false, true), vec2<bool>(any(vec3<bool>(true, false, true)), all(vec3<bool>(true, true, false))), func_4(_wgslsmith_f_op_f32(628f * global1.x), ~(-21053i), _wgslsmith_f_op_f32(-global1.x), arg_1)))) {
                let var_4 = vec2<f32>(1387f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(round(-924f))))) - _wgslsmith_f_op_f32(_wgslsmith_f_op_vec2_f32(func_5(_wgslsmith_div_vec3_f32(vec3<f32>(-1334f, global1.x, global1.x), vec3<f32>(-1301f, -169f, global1.x)), Struct_2(1u, u_input.b), ~34977u)).x + global1.x)));
            }
            let var_4 = _wgslsmith_sub_vec3_u32(arg_0, ~firstLeadingBit(arg_0));
        }
    }
    return firstTrailingBit(~_wgslsmith_div_vec4_i32(vec4<i32>(max(arg_1.b, arg_3.b), u_input.b >> (arg_2 % 32u), -54956i, ~arg_1.b), vec4<i32>(_wgslsmith_mod_i32(arg_3.b, 62700i), -17201i, 0i, var_0.b)));
}

fn func_7(arg_0: f32, arg_1: vec3<f32>, arg_2: Struct_1, arg_3: vec4<i32>) -> u32 {
    for (var var_0: i32; ; var_0 -= 1i) {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        if (all(!select(select(select(vec2<bool>(arg_2.b, arg_2.b), vec2<bool>(arg_2.b, false), false), vec2<bool>(true, arg_2.b), false | arg_2.b), vec2<bool>(any(vec3<bool>(true, true, true)), !arg_2.b), !select(vec2<bool>(arg_2.b, false), vec2<bool>(arg_2.b, false), vec2<bool>(false, false))))) {
            let var_1 = arg_2;
            var_0 = -38919i;
        }
        break;
    }
    global0 = array<i32, 20>();
    if (false) {
        switch (global0[_wgslsmith_index_u32(abs(min(abs(arg_2.a.x), ~countOneBits(u_input.a.x))), 20u)] << ((~(_wgslsmith_div_u32(u_input.c, arg_2.a.x) ^ _wgslsmith_mult_u32(4294967295u, arg_2.a.x)) | 77100u) % 32u)) {
            case -1i: {
            }
            case 38625i: {
                let var_0 = func_4(_wgslsmith_f_op_f32(f32(-1f) * -1634f), _wgslsmith_mult_i32(~1i, ~0i), 1860f, Struct_2(arg_2.a.x, arg_3.x));
            }
            default: {
            }
        }
        for (var var_0 = i32(-2147483648); !arg_2.b; var_0 += 1i) {
            if (LOOP_COUNTERS[9u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
            var var_1 = global2[_wgslsmith_index_u32(20870u, 19u)];
            var var_2 = -404f;
            break;
        }
        switch (global0[_wgslsmith_index_u32(0u, 20u)]) {
            case -39372i: {
                global1 = vec2<f32>(global1.x, arg_1.x);
                var var_0 = Struct_2(_wgslsmith_dot_vec2_u32(arg_2.a.yy, vec2<u32>(~arg_2.a.x, 1u)), global0[_wgslsmith_index_u32(min(arg_2.a.x, arg_2.a.x), 20u)]);
            }
            case -19643i: {
                global3 = array<vec4<u32>, 10>();
                var var_0 = firstTrailingBit(vec2<u32>(arg_2.a.x ^ ~1u, _wgslsmith_dot_vec4_u32(~(arg_2.a ^ global3[_wgslsmith_index_u32(15309u, 10u)]), arg_2.a)));
                let var_1 = Struct_2(22320u, _wgslsmith_mod_i32(~2147483647i, -_wgslsmith_sub_i32(_wgslsmith_dot_vec4_i32(arg_3, arg_3), _wgslsmith_dot_vec4_i32(vec4<i32>(2147483647i, -53648i, -1i, 9805i), arg_3))));
            }
            case -48659i: {
                global2 = array<vec3<bool>, 19>();
                var var_0 = func_3();
            }
            case 28522i: {
                global2 = array<vec3<bool>, 19>();
                global0 = array<i32, 20>();
                global3 = array<vec4<u32>, 10>();
                var var_0 = !(!(all(vec3<bool>(true, true, true)) & !(2147483647i == arg_2.c.x)));
            }
            default: {
                var var_0 = vec2<bool>(!select(arg_0 > _wgslsmith_f_op_f32(f32(-1f) * -1245f), any(select(vec2<bool>(arg_2.b, arg_2.b), vec2<bool>(arg_2.b, arg_2.b), vec2<bool>(false, arg_2.b))), false), ~(_wgslsmith_mod_u32(u_input.a.x, arg_2.a.x) & countOneBits(arg_2.a.x)) != arg_2.a.x);
                var var_1 = Struct_2(1u, arg_3.x);
                let var_2 = Struct_2(var_1.a, countOneBits(arg_3.x ^ global0[_wgslsmith_index_u32(_wgslsmith_mod_u32(min(u_input.a.x, arg_2.a.x), arg_2.a.x & var_1.a), 20u)]));
                let var_3 = arg_3.wxw;
            }
        }
    }
    global0 = array<i32, 20>();
    switch (i32(-1i) * -1i) {
        case 12272i: {
            global3 = array<vec4<u32>, 10>();
            var var_0 = ~abs(-_wgslsmith_mult_vec3_i32(arg_3.zwz, vec3<i32>(global0[_wgslsmith_index_u32(arg_2.a.x, 20u)], global0[_wgslsmith_index_u32(0u, 20u)], 36650i)));
            for (var var_1: i32; !(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-247f * 817f) + global1.x), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-656f * global1.x), -2047f))) < _wgslsmith_f_op_f32(func_6(arg_2))); ) {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                let var_2 = _wgslsmith_sub_i32(global0[_wgslsmith_index_u32(arg_2.a.x, 20u)], _wgslsmith_sub_i32(_wgslsmith_dot_vec3_i32(vec3<i32>(18083i, arg_2.d, _wgslsmith_dot_vec4_i32(vec4<i32>(1i, u_input.b, u_input.b, arg_3.x), arg_3)), -firstTrailingBit(vec3<i32>(-22420i, -7049i, var_0.x))), _wgslsmith_mult_i32(arg_2.d, var_0.x)));
                let var_3 = reverseBits(func_3().c);
                break;
            }
        }
        default: {
            global2 = array<vec3<bool>, 19>();
        }
    }
    return 86659u;
}

fn func_1() -> u32 {
    if (any(vec4<bool>(func_7(_wgslsmith_f_op_f32(-global1.x), _wgslsmith_f_op_vec3_f32(-vec3<f32>(global1.x, global1.x, global1.x)), Struct_1(global3[_wgslsmith_index_u32(u_input.a.x, 10u)], true, vec2<i32>(-63294i, u_input.b), 50277i), func_2(u_input.a, Struct_2(u_input.c, 19254i), 17046u, Struct_2(65957u, -40300i))) > u_input.c, select(true, false, true), any(!select(vec4<bool>(true, false, false, true), vec4<bool>(true, true, true, false), vec4<bool>(false, true, true, true))), true))) {
        global2 = array<vec3<bool>, 19>();
        var var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(global1.x - global1.x), _wgslsmith_div_f32(global1.x, global1.x))), global1.x))));
        let var_1 = ~min(_wgslsmith_add_i32(_wgslsmith_dot_vec2_i32(countOneBits(vec2<i32>(-11403i, u_input.b)), vec2<i32>(2147483647i, u_input.b)), countOneBits(min(-1i, u_input.b))), max(_wgslsmith_mod_i32(_wgslsmith_clamp_i32(global0[_wgslsmith_index_u32(81961u, 20u)], 0i, global0[_wgslsmith_index_u32(u_input.c, 20u)]), 1i), 2147483647i));
    }
    switch (u_input.b) {
        case -9981i: {
            global3 = array<vec4<u32>, 10>();
            switch (1i) {
                case 0i: {
                    let var_0 = abs(firstTrailingBit(~min(global3[_wgslsmith_index_u32(u_input.a.x, 10u)], ~global3[_wgslsmith_index_u32(u_input.c, 10u)])));
                    global3 = array<vec4<u32>, 10>();
                    global2 = array<vec3<bool>, 19>();
                    var var_1 = Struct_2(_wgslsmith_sub_u32(u_input.c, _wgslsmith_mult_u32(57885u, 34036u)), global0[_wgslsmith_index_u32(firstTrailingBit(0u), 20u)]);
                    let var_2 = Struct_1(select(~(max(vec4<u32>(var_0.x, 0u, var_1.a, u_input.a.x), vec4<u32>(84955u, 12541u, var_1.a, var_0.x)) >> ((vec4<u32>(4294967295u, var_1.a, 73431u, 25537u) >> (global3[_wgslsmith_index_u32(var_0.x, 10u)] % vec4<u32>(32u))) % vec4<u32>(32u))), ~func_3().a >> (global3[_wgslsmith_index_u32(select(u_input.c, u_input.c, true) << (_wgslsmith_mod_u32(var_0.x, 31618u) % 32u), 10u)] % vec4<u32>(32u)), select(select(vec4<bool>(true, false, false, false), vec4<bool>(true, false, true, false), true), vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true))), func_4(-159f, _wgslsmith_dot_vec4_i32(_wgslsmith_sub_vec4_i32(vec4<i32>(u_input.b, 47977i, u_input.b, 20067i), vec4<i32>(2147483647i, 234i, -17867i, 2147483647i) >> (var_0 % vec4<u32>(32u))), _wgslsmith_clamp_vec4_i32(vec4<i32>(23147i, i32(-2147483648), -67455i, u_input.b), vec4<i32>(global0[_wgslsmith_index_u32(24707u, 20u)], 59592i, var_1.b, i32(-2147483648)) | vec4<i32>(var_1.b, global0[_wgslsmith_index_u32(8045u, 20u)], global0[_wgslsmith_index_u32(var_1.a, 20u)], u_input.b), vec4<i32>(global0[_wgslsmith_index_u32(82833u, 20u)], -1i, global0[_wgslsmith_index_u32(0u, 20u)], 9188i))), 2283f, Struct_2(u_input.a.x, -countOneBits(0i))), vec2<i32>(~(-31234i >> (1u % 32u)), global0[_wgslsmith_index_u32(1u, 20u)]), 26983i);
                }
                case 25007i: {
                    var var_0 = _wgslsmith_f_op_f32(-global1.x);
                    let var_1 = Struct_1(global3[_wgslsmith_index_u32(_wgslsmith_mod_u32(_wgslsmith_clamp_u32(~135999u, _wgslsmith_sub_u32(0u, u_input.c), ~28701u), ~u_input.a.x), 10u)] >> (~vec4<u32>(u_input.c, u_input.a.x, func_3().a.x, u_input.a.x) % vec4<u32>(32u)), !any(vec4<bool>(false, true, false, true)) | true, min(vec2<i32>(global0[_wgslsmith_index_u32(_wgslsmith_mult_u32(_wgslsmith_add_u32(0u, u_input.c), ~40859u), 20u)], select(global0[_wgslsmith_index_u32(u_input.a.x, 20u)] ^ u_input.b, 16887i, false)), firstTrailingBit(vec2<i32>(-global0[_wgslsmith_index_u32(u_input.c, 20u)], -2359i))), _wgslsmith_clamp_i32(~1i, abs(~_wgslsmith_dot_vec2_i32(vec2<i32>(0i, u_input.b), vec2<i32>(0i, 2147483647i))), 0i));
                    var var_2 = Struct_2(_wgslsmith_add_u32(~0u >> (firstTrailingBit(6757u) % 32u), 40706u) | 1u, _wgslsmith_sub_i32(var_1.d, func_3().c.x));
                }
                case -13216i: {
                    global1 = vec2<f32>(-316f, _wgslsmith_f_op_f32(-1235f + global1.x));
                    let var_0 = global3[_wgslsmith_index_u32(u_input.c, 10u)];
                }
                case 1i: {
                    var var_0 = max(vec3<u32>(4294967295u, countOneBits(min(u_input.a.x, 45805u)), min(u_input.a.x, ~_wgslsmith_mod_u32(64466u, u_input.c))), ~(firstLeadingBit(abs(vec3<u32>(1088u, 49990u, u_input.c))) << (vec3<u32>(~u_input.a.x, u_input.a.x, 0u) % vec3<u32>(32u))));
                    var var_1 = Struct_1(_wgslsmith_mod_vec4_u32(countOneBits(global3[_wgslsmith_index_u32(var_0.x, 10u)]), ~(~global3[_wgslsmith_index_u32(u_input.a.x, 10u)])), u_input.b < 0i, vec2<i32>(_wgslsmith_add_i32(9805i, -(~u_input.b)), global0[_wgslsmith_index_u32(_wgslsmith_mod_u32(_wgslsmith_mod_u32(0u, u_input.a.x), 1u) | var_0.x, 20u)]), countOneBits(~(i32(-2147483648)) >> (u_input.a.x % 32u)) << (var_0.x % 32u));
                }
                default: {
                    global2 = array<vec3<bool>, 19>();
                    let var_0 = true;
                }
            }
            var var_0 = _wgslsmith_div_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global1.x) + _wgslsmith_f_op_f32(-global1.x)), global1.x), vec2<f32>(global1.x, _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-global1.x), 581f))));
            return _wgslsmith_dot_vec2_u32(_wgslsmith_sub_vec2_u32(vec2<u32>(0u, ~firstLeadingBit(u_input.c)), _wgslsmith_clamp_vec2_u32(vec2<u32>(_wgslsmith_dot_vec2_u32(u_input.a.yy, vec2<u32>(13142u, u_input.c)), _wgslsmith_mult_u32(98090u, u_input.c)), vec2<u32>(6854u, abs(u_input.c)), u_input.a.xx)), countOneBits(vec2<u32>(u_input.c, _wgslsmith_add_u32(0u, u_input.c) | _wgslsmith_dot_vec3_u32(u_input.a, u_input.a))));
        }
        case -1i: {
            global1 = vec2<f32>(-846f, global1.x);
        }
        case -2481i: {
            let var_0 = select(select(vec3<bool>(true, true, true), !(!(!global2[_wgslsmith_index_u32(u_input.c, 19u)])), vec3<bool>(u_input.c == u_input.a.x, select(true, true, true), true)), select(!select(!global2[_wgslsmith_index_u32(16257u, 19u)], select(global2[_wgslsmith_index_u32(1u, 19u)], global2[_wgslsmith_index_u32(u_input.a.x, 19u)], vec3<bool>(true, false, true)), !global2[_wgslsmith_index_u32(1u, 19u)]), global2[_wgslsmith_index_u32(89607u, 19u)], global2[_wgslsmith_index_u32(0u, 19u)]), !(all(select(vec4<bool>(true, false, false, true), vec4<bool>(true, false, false, true), vec4<bool>(true, false, true, false))) && !all(vec2<bool>(false, true))));
            global0 = array<i32, 20>();
            let var_1 = 1000f;
            let var_2 = Struct_2(~u_input.c << (_wgslsmith_mod_u32(u_input.c, 4294967295u) % 32u), 1i);
        }
        case 52396i: {
            loop {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                var var_0 = func_3();
                global3 = array<vec4<u32>, 10>();
                let var_1 = Struct_2(4945u, u_input.b ^ ~(~(0i | global0[_wgslsmith_index_u32(var_0.a.x, 20u)])));
            }
        }
        default: {
            for (var var_0 = 1i; var_0 >= 7747i; var_0 += 1i) {
                if (LOOP_COUNTERS[12u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
                continue;
            }
            switch (-1i) {
                case 13683i: {
                    var var_0 = Struct_2(24341u, ~(-1i));
                    let var_1 = _wgslsmith_mult_i32(19454i, 0i);
                    global3 = array<vec4<u32>, 10>();
                }
                case 2147483647i: {
                    return _wgslsmith_dot_vec4_u32(vec4<u32>(22668u, u_input.a.x, min(95968u, 1u), u_input.c), global3[_wgslsmith_index_u32(u_input.a.x, 10u)]);
                }
                case i32(-2147483648): {
                    let var_0 = Struct_1(vec4<u32>(~u_input.a.x, u_input.a.x, u_input.c, ~u_input.a.x), true, vec2<i32>(u_input.b << (_wgslsmith_mod_u32(1u, u_input.c) % 32u), global0[_wgslsmith_index_u32(8870u, 20u)]), -u_input.b);
                    let var_1 = Struct_2(~0u, _wgslsmith_clamp_i32(-7665i, u_input.b, -14595i));
                    var var_2 = ~func_2(~firstTrailingBit(~vec3<u32>(var_1.a, 90677u, 1u)), Struct_2(var_1.a, -var_0.d), var_0.a.x, var_1).x;
                    var var_3 = max(vec4<i32>(reverseBits(2147483647i ^ global0[_wgslsmith_index_u32(var_0.a.x, 20u)]), abs(global0[_wgslsmith_index_u32(var_0.a.x, 20u)] >> (0u % 32u)), global0[_wgslsmith_index_u32(var_1.a, 20u)], ~1i) << (vec4<u32>(1u, u_input.a.x, 4294967295u, 0u) % vec4<u32>(32u)), _wgslsmith_mod_vec4_i32(-vec4<i32>(_wgslsmith_mult_i32(u_input.b, 0i), global0[_wgslsmith_index_u32(var_1.a & 25505u, 20u)], var_0.d, u_input.b), select(firstLeadingBit(_wgslsmith_div_vec4_i32(vec4<i32>(-14010i, u_input.b, u_input.b, u_input.b), vec4<i32>(2147483647i, global0[_wgslsmith_index_u32(var_1.a, 20u)], -34999i, -1i))), select(firstLeadingBit(vec4<i32>(var_1.b, -1i, var_1.b, 7504i)), vec4<i32>(var_1.b, var_1.b, 39086i, var_1.b) | vec4<i32>(var_0.c.x, var_0.c.x, global0[_wgslsmith_index_u32(4294967295u, 20u)], var_1.b), select(vec4<bool>(var_0.b, true, var_0.b, true), vec4<bool>(var_0.b, false, true, var_0.b), true)), true)));
                }
                default: {
                    var var_0 = func_3();
                }
            }
        }
    }
    switch (i32(-2147483648)) {
        default: {
            if (true) {
                var var_0 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global1.x)))) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(1039f))))) * _wgslsmith_f_op_f32(sign(global1.x)));
                let var_1 = Struct_1(select(global3[_wgslsmith_index_u32(0u, 10u)], ~global3[_wgslsmith_index_u32(u_input.c, 10u)], all(vec4<bool>(true, true, true, true))), false, _wgslsmith_clamp_vec2_i32(~_wgslsmith_mult_vec2_i32(_wgslsmith_clamp_vec2_i32(vec2<i32>(1i, global0[_wgslsmith_index_u32(u_input.c, 20u)]), vec2<i32>(-1i, 36447i), vec2<i32>(32726i, u_input.b)), select(vec2<i32>(u_input.b, i32(-2147483648)), vec2<i32>(2147483647i, u_input.b), vec2<bool>(true, true))), vec2<i32>(firstLeadingBit(abs(u_input.b)), ~2147483647i), vec2<i32>(0i, 21632i)), -(~firstLeadingBit(u_input.b)));
                let var_2 = vec4<i32>(u_input.b, max(global0[_wgslsmith_index_u32(_wgslsmith_dot_vec2_u32(u_input.a.yz, vec2<u32>(31269u, 0u)), 20u)], _wgslsmith_div_i32(-global0[_wgslsmith_index_u32(45125u, 20u)], func_3().d)) << (((_wgslsmith_div_u32(u_input.a.x, u_input.c) >> (_wgslsmith_mult_u32(u_input.c, 0u) % 32u)) << (~func_3().a.x % 32u)) % 32u), _wgslsmith_clamp_i32(0i, ~_wgslsmith_add_i32(i32(-2147483648), countOneBits(i32(-2147483648))), global0[_wgslsmith_index_u32(122662u, 20u)]), 10697i >> (_wgslsmith_sub_u32(u_input.a.x, var_1.a.x) % 32u));
                var var_3 = 873f;
                var var_4 = Struct_1(countOneBits(min(countOneBits(var_1.a), var_1.a)) ^ vec4<u32>(~u_input.c, _wgslsmith_sub_u32(reverseBits(1u), _wgslsmith_sub_u32(var_1.a.x, u_input.c)), _wgslsmith_dot_vec2_u32(select(vec2<u32>(var_1.a.x, 4294967295u), vec2<u32>(u_input.c, var_1.a.x), vec2<bool>(true, false)), vec2<u32>(9857u, 31915u)), var_1.a.x), var_1.b != !var_1.b, ~_wgslsmith_mod_vec2_i32(_wgslsmith_div_vec2_i32(~vec2<i32>(var_2.x, 10516i), ~vec2<i32>(1i, 43557i)), firstLeadingBit(_wgslsmith_mult_vec2_i32(var_2.xy, var_2.xz))), u_input.b);
            }
            switch (min(~_wgslsmith_add_i32(u_input.b, 20942i), firstTrailingBit(_wgslsmith_sub_i32(-5485i, countOneBits(0i)) ^ ((i32(-1i) * i32(-2147483648)) >> (u_input.a.x % 32u))))) {
                case -1i: {
                    var var_0 = firstLeadingBit(vec3<u32>(~u_input.a.x, u_input.c, u_input.a.x));
                    let var_1 = Struct_1(_wgslsmith_mult_vec4_u32(global3[_wgslsmith_index_u32(~u_input.a.x, 10u)], global3[_wgslsmith_index_u32(func_7(_wgslsmith_f_op_f32(-global1.x), vec3<f32>(_wgslsmith_div_f32(global1.x, global1.x), _wgslsmith_f_op_f32(min(-974f, 1499f)), -1503f), func_3(), func_2(select(vec3<u32>(33208u, 4294967295u, u_input.c), vec3<u32>(u_input.c, var_0.x, var_0.x), false), Struct_2(var_0.x, u_input.b), reverseBits(var_0.x), Struct_2(47907u, -1i))), 10u)]), !(~(~38828u) <= var_0.x), -_wgslsmith_mult_vec2_i32(firstLeadingBit(vec2<i32>(global0[_wgslsmith_index_u32(0u, 20u)], global0[_wgslsmith_index_u32(4294967295u, 20u)])), -(~vec2<i32>(global0[_wgslsmith_index_u32(0u, 20u)], global0[_wgslsmith_index_u32(var_0.x, 20u)]))), -global0[_wgslsmith_index_u32(~u_input.a.x, 20u)]);
                    let var_2 = ((abs(select(vec3<i32>(60020i, u_input.b, -41861i), vec3<i32>(1970i, var_1.c.x, u_input.b), vec3<bool>(true, var_1.b, var_1.b))) << (min(u_input.a, vec3<u32>(var_1.a.x, 1u, u_input.a.x)) % vec3<u32>(32u))) ^ vec3<i32>(_wgslsmith_mod_i32(i32(-1i) * -1i, u_input.b), i32(-1i) * -var_1.c.x, abs(-15143i))) >> ((u_input.a >> (_wgslsmith_add_vec3_u32(~var_1.a.wyy, _wgslsmith_sub_vec3_u32(vec3<u32>(var_0.x, 37092u, var_1.a.x), abs(var_1.a.xxw))) % vec3<u32>(32u))) % vec3<u32>(32u));
                    let var_3 = func_3();
                    global3 = array<vec4<u32>, 10>();
                }
                case -6971i: {
                    let var_0 = countOneBits(~abs(~u_input.a));
                    var var_1 = vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(max(global1.x, 1066f)))))) + _wgslsmith_f_op_f32(969f - global1.x)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -807f))))), global1.x);
                    global1 = _wgslsmith_f_op_vec2_f32(exp2(vec2<f32>(_wgslsmith_f_op_f32(-625f), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(var_1.x * -268f)))))));
                    let var_2 = Struct_2(_wgslsmith_dot_vec2_u32(vec2<u32>(0u, func_3().a.x), reverseBits(func_3().a.wy) | var_0.yz), ~u_input.b);
                }
                case i32(-2147483648): {
                    var var_0 = vec2<i32>(u_input.b, u_input.b);
                    var var_1 = _wgslsmith_sub_vec4_i32(func_2(reverseBits(~vec3<u32>(u_input.a.x, 93995u, u_input.a.x)), Struct_2(~55157u, firstLeadingBit(0i)), min(7231u, _wgslsmith_add_u32(20748u, u_input.c)), Struct_2(firstLeadingBit(u_input.a.x), _wgslsmith_add_i32(var_0.x, 0i))) >> (global3[_wgslsmith_index_u32(4294967295u, 10u)] % vec4<u32>(32u)), vec4<i32>(i32(-1i) * -63310i, 0i, _wgslsmith_mult_i32(u_input.b, 0i) ^ 12559i, -_wgslsmith_dot_vec4_i32(vec4<i32>(u_input.b, -23794i, -22597i, var_0.x), vec4<i32>(var_0.x, u_input.b, 1i, -1i))));
                    let var_2 = Struct_2(reverseBits(30361u), global0[_wgslsmith_index_u32(~((~1u ^ u_input.a.x) >> (max(12734u, ~u_input.a.x) % 32u)), 20u)]);
                    var var_3 = false;
                    let var_4 = countOneBits(~global3[_wgslsmith_index_u32(_wgslsmith_sub_u32(39110u, ~var_2.a), 10u)]);
                }
                default: {
                    global2 = array<vec3<bool>, 19>();
                    let var_0 = countOneBits(func_3().a.xzx);
                    global3 = array<vec4<u32>, 10>();
                    let var_1 = 4294967295u;
                }
            }
            var var_0 = Struct_2(max(u_input.a.x, 13355u | u_input.a.x), min(1i, global0[_wgslsmith_index_u32(0u, 20u)] & 2147483647i));
            global1 = vec2<f32>(_wgslsmith_f_op_f32(global1.x + -338f), -629f);
            for (var var_1 = 2147483647i; ; ) {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
            }
        }
    }
    var var_0 = Struct_2(u_input.c, _wgslsmith_sub_i32(-reverseBits(_wgslsmith_mult_i32(2147483647i, global0[_wgslsmith_index_u32(u_input.a.x, 20u)])), u_input.b));
    loop {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        continue;
    }
    return _wgslsmith_mod_u32(var_0.a, ~_wgslsmith_dot_vec4_u32(~vec4<u32>(u_input.a.x, var_0.a, 14806u, var_0.a), _wgslsmith_div_vec4_u32(global3[_wgslsmith_index_u32(var_0.a, 10u)] & global3[_wgslsmith_index_u32(4294967295u, 10u)], global3[_wgslsmith_index_u32(1u, 10u)] & global3[_wgslsmith_index_u32(1u, 10u)])));
}

fn func_8(arg_0: Struct_2, arg_1: vec3<u32>, arg_2: u32, arg_3: f32) -> i32 {
    var var_0 = arg_0;
    if (-arg_0.b >= global0[_wgslsmith_index_u32(~var_0.a, 20u)]) {
        var_0 = arg_0;
        if (!(!all(vec2<bool>(arg_0.b <= arg_0.b, true)))) {
            global0 = array<i32, 20>();
        }
    }
    let var_1 = firstLeadingBit(~(~global3[_wgslsmith_index_u32(u_input.a.x, 10u)]));
    loop {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
        var var_2 = 1227f;
    }
    loop {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        global1 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(max(vec2<f32>(-1608f, arg_3), vec2<f32>(global1.x, global1.x)))), _wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-212f, 252f)))))));
        var var_2 = Struct_2(arg_2, -global0[_wgslsmith_index_u32(~_wgslsmith_sub_u32(_wgslsmith_dot_vec2_u32(vec2<u32>(4294967295u, var_0.a), vec2<u32>(56158u, 1u)), 1u), 20u)]);
        if (all(select(vec4<bool>(true, false, true, func_4(_wgslsmith_f_op_f32(-701f), _wgslsmith_dot_vec2_i32(vec2<i32>(u_input.b, -47629i), vec2<i32>(-1i, global0[_wgslsmith_index_u32(0u, 20u)])), arg_3, arg_0)), !select(select(vec4<bool>(true, true, false, true), vec4<bool>(true, false, false, false), vec4<bool>(true, false, true, false)), vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true)), vec4<bool>(!(global0[_wgslsmith_index_u32(var_1.x, 20u)] >= arg_0.b), true, any(select(vec2<bool>(false, true), vec2<bool>(true, false), vec2<bool>(false, false))), true)))) {
            var_2 = Struct_2(_wgslsmith_sub_u32(64280u, ~_wgslsmith_dot_vec4_u32(vec4<u32>(1u, 31172u, var_0.a, arg_1.x), vec4<u32>(var_0.a, arg_0.a, 1u, 1u))) >> (_wgslsmith_sub_u32(arg_1.x | _wgslsmith_div_u32(0u, var_1.x), u_input.c) % 32u), 5335i);
            var var_3 = arg_0;
            break;
        }
        global3 = array<vec4<u32>, 10>();
    }
    return 0i;
}

@compute
@workgroup_size(1)
fn main() {
    switch (~30159i) {
        case 29002i: {
            loop {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                global2 = array<vec3<bool>, 19>();
                let var_0 = Struct_1(vec4<u32>(u_input.a.x, ~(u_input.c >> (4294967295u % 32u)), 9087u ^ _wgslsmith_sub_u32(_wgslsmith_add_u32(4294967295u, u_input.a.x), ~1u), ~u_input.c), any(vec4<bool>(abs(u_input.b) <= 2147483647i, true, true, false)), vec2<i32>(-func_8(Struct_2(u_input.a.x, global0[_wgslsmith_index_u32(u_input.c, 20u)]), vec3<u32>(21871u, 0u, u_input.a.x), func_1(), -1000f), func_3().c.x), u_input.b | max(_wgslsmith_div_i32(-23551i, 38123i), i32(-1i) * -global0[_wgslsmith_index_u32(0u, 20u)]));
            }
            var var_0 = func_3();
        }
        case 2147483647i: {
        }
        default: {
            switch (~(0i | min(_wgslsmith_mod_i32(-49039i, global0[_wgslsmith_index_u32(u_input.c, 20u)]) >> (0u % 32u), -(~(-4656i))))) {
                case i32(-2147483648): {
                    global2 = array<vec3<bool>, 19>();
                }
                case 15771i: {
                    let var_0 = func_3();
                    let var_1 = Struct_2(~_wgslsmith_div_u32(0u, _wgslsmith_dot_vec3_u32(vec3<u32>(u_input.c, 43172u, 28100u), _wgslsmith_div_vec3_u32(var_0.a.zyw, vec3<u32>(0u, 78948u, var_0.a.x)))), func_3().d);
                    var var_2 = var_0.b;
                    global0 = array<i32, 20>();
                    let var_3 = true;
                }
                case 28813i: {
                    let var_0 = !(!vec3<bool>(all(vec3<bool>(false, false, true)), true & (global1.x < -674f), func_4(global1.x, global0[_wgslsmith_index_u32(4294967295u, 20u)], _wgslsmith_f_op_f32(global1.x + global1.x), Struct_2(4294967295u, global0[_wgslsmith_index_u32(u_input.c, 20u)]))));
                    global3 = array<vec4<u32>, 10>();
                    var var_1 = !(!select(vec4<bool>(true, true, true, any(global2[_wgslsmith_index_u32(4294967295u, 19u)])), vec4<bool>(any(vec3<bool>(true, false, var_0.x)), !var_0.x, var_0.x, true), !any(vec4<bool>(var_0.x, var_0.x, false, true))));
                    var var_2 = func_3().c.x;
                    global2 = array<vec3<bool>, 19>();
                }
                default: {
                    let var_0 = global1.x;
                    let var_1 = func_3();
                    var var_2 = ((u_input.b & reverseBits(~var_1.c.x)) ^ -1i) > u_input.b;
                    global1 = _wgslsmith_f_op_vec2_f32(abs(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(ceil(vec2<f32>(global1.x, global1.x))))))))));
                    let var_3 = var_1;
                }
            }
            var var_0 = Struct_2(_wgslsmith_mult_u32(u_input.a.x, ~44356u), -u_input.b);
        }
    }
    global2 = array<vec3<bool>, 19>();
    global3 = array<vec4<u32>, 10>();
    for (var var_0 = _wgslsmith_dot_vec4_i32(vec4<i32>(-_wgslsmith_mod_i32(-14208i, global0[_wgslsmith_index_u32(u_input.c, 20u)]), u_input.b, _wgslsmith_dot_vec3_i32(-vec3<i32>(-1i, u_input.b, u_input.b), vec3<i32>(global0[_wgslsmith_index_u32(u_input.a.x, 20u)], global0[_wgslsmith_index_u32(1u, 20u)], 7843i)), global0[_wgslsmith_index_u32(_wgslsmith_dot_vec2_u32(u_input.a.zz, u_input.a.zy), 20u)] << (~73117u % 32u)) | vec4<i32>(0i, _wgslsmith_add_i32(~u_input.b, u_input.b), select(_wgslsmith_mult_i32(u_input.b, u_input.b), u_input.b, false), global0[_wgslsmith_index_u32(~func_1(), 20u)]), vec4<i32>(u_input.b, -1i, abs(2147483647i), ~func_2(u_input.a, Struct_2(u_input.c, -1i), 1u, Struct_2(u_input.c, u_input.b)).x)); var_0 == 39563i; var_0 = ~(-1i)) {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        var var_1 = _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(abs(-1000f))));
        var_1 = global1.x;
    }
    loop {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
        for (; any(!(!vec4<bool>(true, true, false, select(true, true, false)))); ) {
            if (LOOP_COUNTERS[20u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
            let var_0 = func_3();
            var var_1 = false || all(vec3<bool>(var_0.b, true || any(vec2<bool>(var_0.b, var_0.b)), any(!vec4<bool>(var_0.b, var_0.b, false, true))));
            let var_2 = var_0;
        }
        if (true) {
        }
        global2 = array<vec3<bool>, 19>();
    }
    let x = u_input.a;
    s_output = StorageBuffer(global1.x);
}

`;