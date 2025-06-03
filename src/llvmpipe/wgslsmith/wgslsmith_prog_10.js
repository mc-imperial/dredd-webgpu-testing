export const input = [145,43,153,175,141,229,159,242,161,5,49,231,186,25,252,40,161,55,42,119,74,125,119,150,117,116,150,192,81,59,184,117,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [145,43,153,175,141,229,159,242,161,5,49,231,186,25,252,40,161,55,42,119,74,125,119,150,117,116,150,192,81,59,184,117,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[145,43,153,175,141,229,159,242,161,5,49,231,186,25,252,40,161,55,42,119,74,125,119,150,117,116,150,192,81,59,184,117]}
// Seed: 15836808220896762067

struct Struct_1 {
    a: f32,
    b: u32,
    c: vec4<i32>,
    d: i32,
}

struct Struct_2 {
    a: vec2<i32>,
    b: Struct_1,
    c: vec4<i32>,
    d: f32,
}

struct Struct_3 {
    a: i32,
}

struct Struct_4 {
    a: vec3<f32>,
    b: Struct_2,
}

struct Struct_5 {
    a: Struct_3,
    b: Struct_2,
    c: Struct_4,
}

struct UniformBuffer {
    a: vec2<u32>,
    b: vec2<i32>,
    c: vec3<u32>,
    d: u32,
}

struct StorageBuffer {
    a: vec4<f32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: vec3<i32> = vec3<i32>(-774i, 1i, i32(-2147483648));

var<private> global1: Struct_4;

var<private> global2: vec3<i32> = vec3<i32>(5735i, 10227i, -1i);

var<private> global3: array<f32, 24>;

var<private> LOOP_COUNTERS: array<u32, 33>;

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn func_6(arg_0: Struct_4, arg_1: vec2<u32>, arg_2: vec4<f32>) -> u32 {
    if ((140f != _wgslsmith_f_op_f32(select(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-182f), 1152f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-262f)), true))) & select(!all(vec3<bool>(true, true, true)), all(select(select(vec4<bool>(false, true, false, true), vec4<bool>(true, true, true, true), true), vec4<bool>(true, true, true, true), any(vec2<bool>(false, false)))), _wgslsmith_f_op_f32(global3[_wgslsmith_index_u32(global1.b.b.b | global1.b.b.b, 24u)] + _wgslsmith_f_op_f32(759f + -106f)) == arg_0.a.x)) {
    }
    for (; true; ) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        var var_0 = global2.yx;
    }
    for (; ((~global1.b.b.b < arg_0.b.b.b) || all(vec4<bool>(true, true, true, true))) || any(vec4<bool>(select(false, true, true) != any(vec4<bool>(true, false, true, false)), (1u << (global1.b.b.b % 32u)) == 26102u, false, _wgslsmith_f_op_f32(step(global1.b.d, 1000f)) >= _wgslsmith_f_op_f32(max(global3[_wgslsmith_index_u32(global1.b.b.b, 24u)], arg_2.x)))); ) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        switch (global2.x) {
            case 0i: {
                var var_0 = Struct_4(_wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(sign(arg_0.a)), vec3<f32>(arg_2.x, arg_0.b.d, -439f))))), global1.b);
                global1 = Struct_4(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-var_0.a) - vec3<f32>(var_0.a.x, _wgslsmith_f_op_f32(-337f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global3[_wgslsmith_index_u32(global1.b.b.b, 24u)]) + _wgslsmith_f_op_f32(-global1.b.b.a)))), global1.b);
                var_0 = Struct_4(global1.a, var_0.b);
            }
            default: {
                global3 = array<f32, 24>();
                global3 = array<f32, 24>();
                let var_0 = Struct_1(arg_0.b.b.a, 1u, vec4<i32>(_wgslsmith_dot_vec3_i32(vec3<i32>(-11186i, ~2147483647i, global0.x), vec3<i32>(8850i, -1i, abs(0i))), _wgslsmith_sub_i32(-1i, -28225i) ^ _wgslsmith_dot_vec2_i32(~global2.zy, global0.zy), u_input.b.x, (abs(-1i) ^ select(1i, 2147483647i, true)) ^ ~arg_0.b.a.x), global0.x);
                let var_1 = select(_wgslsmith_sub_vec3_i32(vec3<i32>(_wgslsmith_clamp_i32(u_input.b.x, 0i, 8397i), firstLeadingBit(-10972i), u_input.b.x), var_0.c.xxy << (vec3<u32>(1159u, 41344u, 1u) % vec3<u32>(32u))) & vec3<i32>(arg_0.b.a.x, firstTrailingBit(global2.x), global2.x | var_0.c.x), vec3<i32>(countOneBits(-51610i), _wgslsmith_add_i32(min(global0.x << (4294967295u % 32u), 0i), -u_input.b.x), abs(min(arg_0.b.a.x, var_0.c.x)) & select(_wgslsmith_sub_i32(global0.x, i32(-2147483648)), var_0.c.x, false)), !vec3<bool>(true, true, u_input.d <= _wgslsmith_sub_u32(u_input.c.x, 4294967295u)));
                let var_2 = -1319f;
            }
        }
        let var_0 = Struct_5(Struct_3(_wgslsmith_mod_i32((i32(-1i) * -25592i) | countOneBits(global2.x), _wgslsmith_dot_vec3_i32(~arg_0.b.c.yxw, arg_0.b.b.c.xwy))), Struct_2(arg_0.b.a, Struct_1(_wgslsmith_f_op_f32(step(global1.a.x, _wgslsmith_f_op_f32(arg_2.x - -2051f))), 4294967295u, -vec4<i32>(1i, global0.x, global1.b.c.x, global2.x), (2147483647i ^ u_input.b.x) >> (~0u % 32u)), select(-vec4<i32>(global1.b.b.d, arg_0.b.a.x, 2732i, global1.b.a.x), vec4<i32>(global1.b.b.c.x, i32(-1i) * -15007i, global0.x, global0.x), vec4<bool>(false, false, true, true)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_2.x) + _wgslsmith_f_op_f32(select(-930f, global3[_wgslsmith_index_u32(arg_1.x, 24u)], true))))), arg_0);
    }
    let var_0 = vec3<i32>(global1.b.a.x, -global1.b.b.c.x, _wgslsmith_dot_vec2_i32(arg_0.b.c.wy, firstTrailingBit(_wgslsmith_div_vec2_i32(arg_0.b.b.c.yw, vec2<i32>(49538i, global2.x))) | max(firstTrailingBit(arg_0.b.c.zx), _wgslsmith_sub_vec2_i32(global2.xx, vec2<i32>(u_input.b.x, u_input.b.x)))));
    global2 = vec3<i32>(_wgslsmith_div_i32(~23003i, _wgslsmith_sub_i32(_wgslsmith_sub_i32(global0.x, 0i), -1i)) >> (36679u % 32u), -24903i, 0i);
    return ~(~u_input.c.x);
}

fn func_5(arg_0: vec4<f32>) -> Struct_3 {
    var var_0 = global1.b;
    let var_1 = global1.b.b;
    let var_2 = _wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(-arg_0.xwx)));
    var var_3 = -reverseBits(var_0.c.x) >> (_wgslsmith_mod_u32(func_6(Struct_4(arg_0.yzz, global1.b), _wgslsmith_sub_vec2_u32(firstTrailingBit(vec2<u32>(39444u, u_input.c.x)), ~u_input.c.yx), _wgslsmith_f_op_vec4_f32(min(_wgslsmith_div_vec4_f32(arg_0, arg_0), vec4<f32>(-860f, arg_0.x, -274f, var_2.x)))), global1.b.b.b) % 32u);
    loop {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        let var_4 = u_input.a;
        for (var var_5 = 4460i; var_5 != -17609i; var_5 -= 1i) {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            var_3 = _wgslsmith_mult_i32(firstTrailingBit(var_1.d), -u_input.b.x & -_wgslsmith_mult_i32(_wgslsmith_dot_vec2_i32(vec2<i32>(u_input.b.x, global2.x), u_input.b), reverseBits(global1.b.c.x)));
        }
        loop {
            if (LOOP_COUNTERS[4u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        }
    }
    return Struct_3(i32(-1i) * -_wgslsmith_dot_vec3_i32(~var_0.c.xxz, abs(global1.b.b.c.ywy)));
}

fn func_4(arg_0: vec4<f32>, arg_1: f32) -> vec4<f32> {
    let var_0 = _wgslsmith_div_u32(global1.b.b.b | 4294967295u, global1.b.b.b);
    if (true) {
        var var_1 = Struct_5(func_5(_wgslsmith_f_op_vec4_f32(step(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_0.x, -669f, arg_0.x, 971f)), _wgslsmith_f_op_vec4_f32(arg_0 + arg_0)), _wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(arg_0, arg_0))))), Struct_2(global1.b.a, global1.b.b, countOneBits(vec4<i32>(~10886i, global0.x, firstTrailingBit(22886i), global2.x)), _wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_div_f32(global1.a.x, -720f), -243f) - global3[_wgslsmith_index_u32(var_0, 24u)])), Struct_4(global1.a, global1.b));
        global1 = Struct_4(_wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(-vec3<f32>(1064f, -440f, -1000f)), _wgslsmith_f_op_vec3_f32(-vec3<f32>(1000f, arg_1, arg_0.x)))) * vec3<f32>(_wgslsmith_f_op_f32(step(arg_1, arg_0.x)), arg_1, _wgslsmith_f_op_f32(sign(global3[_wgslsmith_index_u32(1u, 24u)])))))), Struct_2(min(vec2<i32>(select(global2.x, 1i, false), global0.x), _wgslsmith_add_vec2_i32(_wgslsmith_clamp_vec2_i32(vec2<i32>(13106i, global1.b.b.c.x), vec2<i32>(global2.x, var_1.a.a), u_input.b), firstLeadingBit(vec2<i32>(2147483647i, var_1.c.b.b.c.x)))), Struct_1(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(f32(-1f) * -134f))), var_0, select(vec4<i32>(u_input.b.x, 2147483647i, 18351i, var_1.c.b.b.d), global1.b.b.c, true), ~(~global2.x)), global1.b.b.c, 962f));
        let var_2 = global0.x;
    }
    var var_1 = u_input.c ^ _wgslsmith_mult_vec3_u32(u_input.c << (_wgslsmith_div_vec3_u32(u_input.c & vec3<u32>(global1.b.b.b, 1u, u_input.a.x), u_input.c) % vec3<u32>(32u)), ~_wgslsmith_mult_vec3_u32(vec3<u32>(1u, var_0, u_input.c.x), ~vec3<u32>(var_0, 24363u, global1.b.b.b)));
    loop {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        let var_2 = vec2<u32>(abs(min(var_0, var_0 | var_1.x) ^ _wgslsmith_mod_u32(0u, ~global1.b.b.b)), ~global1.b.b.b);
        global2 = abs(~(~global1.b.b.c.zzy));
        var var_3 = Struct_5(Struct_3(abs(max(-59791i | u_input.b.x, -global0.x))), Struct_2(vec2<i32>(select(-6252i, 25851i, false), _wgslsmith_dot_vec2_i32(global2.xx, vec2<i32>(global2.x, 0i))) << (_wgslsmith_clamp_vec2_u32(~var_1.zz, vec2<u32>(global1.b.b.b, var_1.x), reverseBits(vec2<u32>(u_input.c.x, u_input.a.x))) % vec2<u32>(32u)), global1.b.b, ~(-global1.b.c), 870f), Struct_4(global1.a, Struct_2(select(max(global2.xx, global2.zz), u_input.b, select(vec2<bool>(true, false), vec2<bool>(false, true), vec2<bool>(true, false))), Struct_1(228f, 2847u, _wgslsmith_mod_vec4_i32(global1.b.b.c, global1.b.c), firstTrailingBit(global0.x)), select(~global1.b.c, vec4<i32>(u_input.b.x, global1.b.b.c.x, 25947i, u_input.b.x), true), _wgslsmith_f_op_f32(select(-1062f, arg_1, false)))));
        var var_4 = _wgslsmith_clamp_vec3_i32(var_3.b.c.xyw, vec3<i32>(-41085i, global1.b.b.c.x, firstLeadingBit(select(_wgslsmith_mult_i32(global2.x, var_3.b.a.x), i32(-1i) * -1i, any(vec4<bool>(true, true, true, true))))), var_3.b.c.zxz);
        let var_5 = _wgslsmith_f_op_vec4_f32(-arg_0);
    }
    for (var var_2 = 2147483647i; var_2 == 23504i; var_2 -= 1i) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        continue;
    }
    return _wgslsmith_f_op_vec4_f32(select(arg_0, _wgslsmith_f_op_vec4_f32(-arg_0), !vec4<bool>(true, 1u > (global1.b.b.b << (var_1.x % 32u)), any(vec4<bool>(true, true, false, false)), true)));
}

fn func_7(arg_0: u32, arg_1: vec4<f32>, arg_2: vec4<u32>, arg_3: f32) -> vec3<i32> {
    for (var var_0 = ~(-1585i); var_0 != 10084i; var_0 -= 1i) {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        var var_1 = _wgslsmith_div_i32(func_5(arg_1).a, -1i);
        switch (_wgslsmith_dot_vec2_i32(vec2<i32>(i32(-2147483648), ~(-reverseBits(-25897i))), vec2<i32>(global0.x, -3097i ^ u_input.b.x))) {
            case -1i: {
                var_0 = -(abs(-(2147483647i | u_input.b.x)) | -((global0.x << (arg_0 % 32u)) << (0u % 32u)));
                let var_2 = select(vec4<bool>(true, all(select(vec3<bool>(true, true, true), vec3<bool>(false, true, false), true)), true, true), vec4<bool>(any(vec4<bool>(true, true, true, true)), false, true, true), !select(vec4<bool>(true, any(vec4<bool>(false, true, false, false)), true, true), select(select(vec4<bool>(false, false, true, false), vec4<bool>(false, true, false, true), false), vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true)), true));
            }
            case 65576i: {
            }
            case -20060i: {
                break;
            }
            default: {
                return _wgslsmith_clamp_vec3_i32(_wgslsmith_sub_vec3_i32(_wgslsmith_clamp_vec3_i32(countOneBits(-global1.b.b.c.wxz), firstTrailingBit(global1.b.c.xyy) << (~u_input.c % vec3<u32>(32u)), global1.b.b.c.zzx), firstTrailingBit(vec3<i32>(33052i, 41601i, u_input.b.x) | _wgslsmith_clamp_vec3_i32(vec3<i32>(global0.x, global2.x, -8178i), vec3<i32>(global2.x, -1i, 2147483647i), vec3<i32>(global1.b.c.x, -1i, 15825i)))), global1.b.b.c.www, global1.b.c.zyx);
            }
        }
        for (; true; ) {
            if (LOOP_COUNTERS[8u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        }
        var var_2 = (reverseBits(-18113i) <= u_input.b.x) && !any(vec3<bool>(true, true, false));
        if (1u == (1u | _wgslsmith_add_u32(arg_0, 24395u))) {
        }
    }
    for (var var_0 = -65868i; ; var_0 += 1i) {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        loop {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        }
        loop {
            if (LOOP_COUNTERS[11u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
            var var_1 = func_5(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(-arg_1), _wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(select(vec4<f32>(arg_1.x, arg_1.x, global3[_wgslsmith_index_u32(0u, 24u)], arg_1.x), vec4<f32>(-1000f, arg_1.x, -122f, global1.b.b.a), false)))), vec4<bool>(false, true, true, false))) - arg_1));
            continue;
        }
        break;
    }
    for (var var_0 = -1i; true; var_0 += 1i) {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        for (var var_1 = 2147483647i; any(vec2<bool>(((u_input.c.x ^ arg_0) >= u_input.c.x) & ((global3[_wgslsmith_index_u32(global1.b.b.b, 24u)] <= global3[_wgslsmith_index_u32(global1.b.b.b, 24u)]) | all(vec2<bool>(true, false))), true && select(all(vec3<bool>(false, true, false)), any(vec2<bool>(true, false)), all(vec2<bool>(true, true))))); var_1 += 1i) {
            if (LOOP_COUNTERS[13u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
            var var_2 = global1.b;
        }
        loop {
            if (LOOP_COUNTERS[14u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
            global1 = Struct_4(global1.a, Struct_2(vec2<i32>(abs(-20536i), global0.x) << (~min(vec2<u32>(4294967295u, u_input.a.x), arg_2.wz) % vec2<u32>(32u)), Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(415f + -741f)), arg_0, select(global1.b.c, global1.b.b.c | global1.b.c, true), 1i), global1.b.c, _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-global3[_wgslsmith_index_u32(4294967295u, 24u)])))));
            continue;
        }
    }
    global1 = Struct_4(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-631f, global1.a.x, global1.a.x)) + vec3<f32>(global1.a.x, -320f, global3[_wgslsmith_index_u32(1u, 24u)])) - vec3<f32>(global3[_wgslsmith_index_u32(_wgslsmith_mod_u32(arg_0, arg_2.x), 24u)], _wgslsmith_f_op_f32(select(-1438f, -1313f, false)), _wgslsmith_f_op_f32(-arg_3))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(global1.a.x, global3[_wgslsmith_index_u32(93u, 24u)], arg_3) + _wgslsmith_f_op_vec3_f32(-arg_1.zxx)) + _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-869f, arg_3, -1973f)) * vec3<f32>(339f, global1.a.x, 229f)))), global1.b);
    if (global2.x <= global0.x) {
        global3 = array<f32, 24>();
        for (; ; ) {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            return global1.b.b.c.xzz;
        }
    }
    return ~vec3<i32>(select(global1.b.a.x, _wgslsmith_dot_vec2_i32(global1.b.a, ~vec2<i32>(1i, 0i)), (-31181i >> (0u % 32u)) != countOneBits(global1.b.b.c.x)), abs(_wgslsmith_mult_i32(i32(-1i) * i32(-2147483648), u_input.b.x)), i32(-2147483648));
}

fn func_3() -> u32 {
    for (var var_0 = -11792i; var_0 == -51826i; global0 = func_7(min(820u, abs(~31640u)), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(global3[_wgslsmith_index_u32(0u, 24u)], -1416f, 396f, -706f)) - _wgslsmith_f_op_vec4_f32(func_4(vec4<f32>(-1006f, -1429f, 1268f, global3[_wgslsmith_index_u32(4294967295u, 24u)]), -1222f))) * _wgslsmith_f_op_vec4_f32(abs(vec4<f32>(global3[_wgslsmith_index_u32(4294967295u, 24u)], global3[_wgslsmith_index_u32(3241u, 24u)], 220f, global1.b.d))))), vec4<u32>(func_6(Struct_4(global1.a, global1.b), min(u_input.a, vec2<u32>(61285u, global1.b.b.b)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(global3[_wgslsmith_index_u32(global1.b.b.b, 24u)], -873f, global3[_wgslsmith_index_u32(4294967295u, 24u)], -1024f))) & 0u, min(_wgslsmith_dot_vec4_u32(_wgslsmith_add_vec4_u32(vec4<u32>(global1.b.b.b, 0u, 1u, 8412u), vec4<u32>(global1.b.b.b, 62238u, global1.b.b.b, u_input.c.x)), countOneBits(vec4<u32>(64735u, u_input.d, global1.b.b.b, 4294967295u))), global1.b.b.b & _wgslsmith_dot_vec2_u32(vec2<u32>(global1.b.b.b, global1.b.b.b), u_input.a)), ~(~65104u), 34540u ^ u_input.a.x), _wgslsmith_f_op_f32(trunc(_wgslsmith_div_f32(803f, global1.a.x))))) {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        if (all(vec4<bool>(true, true, false, all(select(vec4<bool>(true, true, true, true), vec4<bool>(true, false, true, true), vec4<bool>(true, true, false, true)))))) {
            global1 = Struct_4(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(sign(global1.a)) * vec3<f32>(-1853f, 1000f, global3[_wgslsmith_index_u32(0u, 24u)])) + _wgslsmith_f_op_vec3_f32(select(vec3<f32>(global3[_wgslsmith_index_u32(u_input.a.x, 24u)], global3[_wgslsmith_index_u32(4294967295u, 24u)], global3[_wgslsmith_index_u32(u_input.a.x, 24u)]), _wgslsmith_f_op_vec3_f32(min(vec3<f32>(global1.b.b.a, 381f, 560f), vec3<f32>(-467f, 1000f, 1000f))), true))) * _wgslsmith_f_op_vec3_f32(select(global1.a, _wgslsmith_div_vec3_f32(global1.a, vec3<f32>(446f, -229f, global1.b.b.a)), true))), global1.b);
        }
        for (var var_1 = 6042i; false; ) {
            if (LOOP_COUNTERS[17u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
        }
        switch (~global2.x) {
            case -25971i: {
                var var_1 = _wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(global3[_wgslsmith_index_u32(global1.b.b.b, 24u)], -820f, global1.b.b.a))), _wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(min(global1.a, global1.a)))))))));
                var var_2 = vec3<i32>(-_wgslsmith_clamp_i32(global0.x, -firstTrailingBit(-16406i), countOneBits(_wgslsmith_mult_i32(global2.x, -18635i))), -firstLeadingBit(reverseBits(global1.b.c.x)), _wgslsmith_add_i32(~_wgslsmith_dot_vec2_i32(global1.b.b.c.xy, ~global1.b.b.c.yx), ~global1.b.a.x));
            }
            case 57508i: {
                let var_1 = global1.b.a;
                let var_2 = _wgslsmith_f_op_f32(-global3[_wgslsmith_index_u32(max(_wgslsmith_div_u32(u_input.a.x, func_6(Struct_4(global1.a, global1.b), vec2<u32>(12984u, global1.b.b.b), vec4<f32>(-758f, -1263f, -178f, 753f))), global1.b.b.b), 24u)]) == global3[_wgslsmith_index_u32(~(((u_input.c.x >> (global1.b.b.b % 32u)) >> (13706u % 32u)) & reverseBits(u_input.c.x)), 24u)];
                var_0 = global0.x;
            }
            case 8136i: {
                continue;
            }
            default: {
                global1 = Struct_4(vec3<f32>(_wgslsmith_f_op_f32(ceil(global1.a.x)), global3[_wgslsmith_index_u32(0u, 24u)], _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(sign(global1.a.x))))), Struct_2(global1.b.a, Struct_1(_wgslsmith_f_op_f32(1000f + _wgslsmith_f_op_f32(-global3[_wgslsmith_index_u32(global1.b.b.b, 24u)])), (25747u | global1.b.b.b) & max(u_input.a.x, u_input.c.x), vec4<i32>(~global0.x, _wgslsmith_dot_vec4_i32(global1.b.c, global1.b.b.c), -1320i, global2.x), 2147483647i), _wgslsmith_mod_vec4_i32(vec4<i32>(i32(-1i) * i32(-2147483648), _wgslsmith_dot_vec2_i32(vec2<i32>(global1.b.b.c.x, global0.x), u_input.b), global1.b.a.x, abs(global0.x)), global1.b.b.c), _wgslsmith_f_op_f32(step(_wgslsmith_div_f32(922f, _wgslsmith_f_op_f32(f32(-1f) * -474f)), global1.b.d))));
                global2 = vec3<i32>(u_input.b.x, ~abs(1i), global0.x);
                let var_1 = false;
            }
        }
    }
    global3 = array<f32, 24>();
    global1 = Struct_4(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(558f, global3[_wgslsmith_index_u32(49637u, 24u)], global3[_wgslsmith_index_u32(global1.b.b.b, 24u)]))) + _wgslsmith_f_op_vec3_f32(vec3<f32>(-220f, 243f, 1000f) - vec3<f32>(687f, global1.b.d, global3[_wgslsmith_index_u32(1u, 24u)])))), global1.b);
    return u_input.d;
}

fn func_8(arg_0: Struct_1, arg_1: Struct_2) -> Struct_5 {
    for (var var_0: i32; false; var_0 += 1i) {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        var var_1 = _wgslsmith_mod_vec3_u32(~vec3<u32>(~_wgslsmith_mult_u32(u_input.c.x, arg_1.b.b), global1.b.b.b, arg_1.b.b), u_input.c);
        break;
    }
    if (false) {
        var var_0 = ~select(vec4<u32>(~16843u, 40147u, _wgslsmith_sub_u32(~0u, min(arg_0.b, 19997u)), arg_1.b.b), _wgslsmith_add_vec4_u32(vec4<u32>(global1.b.b.b & arg_0.b, ~9070u, global1.b.b.b, u_input.d), vec4<u32>(4294967295u, firstTrailingBit(14725u), global1.b.b.b, ~global1.b.b.b)), all(vec4<bool>(true, true, any(vec4<bool>(false, false, true, false)), true)));
    }
    global2 = _wgslsmith_clamp_vec3_i32(vec3<i32>(global2.x, _wgslsmith_add_i32(global0.x, -53682i), u_input.b.x), _wgslsmith_sub_vec3_i32(global1.b.c.xyz, vec3<i32>(arg_1.a.x, firstTrailingBit(-2147483647i), min(1i, u_input.b.x))), vec3<i32>(select(~(~(-10801i)), u_input.b.x, false), _wgslsmith_add_i32(1i, arg_0.c.x), -14254i));
    var var_0 = arg_0.d | -1i;
    var var_1 = Struct_4(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(arg_1.b.a, arg_1.d, global3[_wgslsmith_index_u32(u_input.a.x, 24u)]) * vec3<f32>(arg_1.d, -508f, 502f)))), arg_1);
    return Struct_5(func_5(_wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(global3[_wgslsmith_index_u32(arg_0.b, 24u)], -1000f, global3[_wgslsmith_index_u32(arg_1.b.b, 24u)], var_1.b.b.a) - vec4<f32>(-326f, -662f, arg_0.a, -1285f)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(1632f, 1113f, global3[_wgslsmith_index_u32(4294967295u, 24u)], arg_1.b.a))))), Struct_2(vec2<i32>(firstTrailingBit(0i), _wgslsmith_dot_vec2_i32(-vec2<i32>(global1.b.b.d, 1i), vec2<i32>(global0.x, global0.x))), arg_0, ~vec4<i32>(_wgslsmith_sub_i32(12969i, global2.x), 27710i, -14433i, u_input.b.x ^ -9276i), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-598f + global3[_wgslsmith_index_u32(global1.b.b.b, 24u)]))) - global3[_wgslsmith_index_u32(~_wgslsmith_clamp_u32(1u, 1u, 81540u), 24u)])), Struct_4(vec3<f32>(_wgslsmith_f_op_f32(min(global1.b.d, global1.b.d)), _wgslsmith_div_f32(global1.b.b.a, global1.b.d), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-418f), _wgslsmith_f_op_f32(floor(2263f)))), Struct_2(vec2<i32>(~global0.x, -arg_0.d), arg_1.b, vec4<i32>(countOneBits(arg_1.a.x), _wgslsmith_dot_vec2_i32(vec2<i32>(1i, arg_0.c.x), global0.xx), i32(-1i) * -29028i, global1.b.a.x), var_1.b.d)));
}

fn func_9(arg_0: Struct_5) -> Struct_3 {
    var var_0 = Struct_2(abs(global0.xx), func_8(Struct_1(global1.b.b.a, _wgslsmith_add_u32(~arg_0.b.b.b, _wgslsmith_mult_u32(u_input.a.x, 0u)), ~(-global1.b.c), i32(-2147483648)), arg_0.b).c.b.b, select(max(arg_0.b.b.c, firstLeadingBit(-arg_0.b.c)), _wgslsmith_mult_vec4_i32(global1.b.c, ~(~global1.b.b.c)), select(select(select(vec4<bool>(false, false, true, false), vec4<bool>(true, false, false, true), vec4<bool>(false, false, true, false)), vec4<bool>(true, true, true, true), vec4<bool>(false, false, false, true)), vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true))), arg_0.c.b.d);
    global1 = arg_0.c;
    global0 = countOneBits(var_0.c.zwx);
    for (var var_1 = -16471i; var_1 < 36239i; var_1 -= 1i) {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
        global0 = min(vec3<i32>(_wgslsmith_sub_i32(u_input.b.x, i32(-1i) * -u_input.b.x), var_0.b.d, i32(-1i) * -global1.b.a.x), max(vec3<i32>(~_wgslsmith_add_i32(1i, 1i), global0.x << ((arg_0.b.b.b & global1.b.b.b) % 32u), i32(-2147483648)), vec3<i32>(1i, arg_0.a.a, global1.b.b.c.x)));
        loop {
            if (LOOP_COUNTERS[20u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
            var_1 = abs(func_5(_wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(702f, arg_0.b.b.a, arg_0.b.d, -1360f)), _wgslsmith_f_op_vec4_f32(vec4<f32>(var_0.d, global3[_wgslsmith_index_u32(global1.b.b.b, 24u)], 1106f, 381f) + vec4<f32>(global3[_wgslsmith_index_u32(u_input.c.x, 24u)], 703f, global3[_wgslsmith_index_u32(4294967295u, 24u)], -545f))))).a);
            let var_2 = func_8(global1.b.b, Struct_2(max(~var_0.c.wz, -reverseBits(global1.b.b.c.wy)), Struct_1(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -636f) + arg_0.b.b.a), 4294967295u, ~vec4<i32>(global1.b.b.c.x, global1.b.a.x, arg_0.a.a, global0.x), _wgslsmith_add_i32(reverseBits(global2.x), func_8(Struct_1(-1479f, var_0.b.b, var_0.c, global0.x), Struct_2(vec2<i32>(global0.x, global1.b.c.x), Struct_1(global3[_wgslsmith_index_u32(global1.b.b.b, 24u)], u_input.d, vec4<i32>(-575i, global2.x, -16814i, 2147483647i), arg_0.c.b.a.x), var_0.b.c, -828f)).c.b.b.d)), _wgslsmith_sub_vec4_i32(vec4<i32>(-u_input.b.x, -22944i, i32(-1i) * -17482i, 0i), global1.b.c), _wgslsmith_f_op_f32(arg_0.c.b.d - _wgslsmith_f_op_f32(arg_0.b.b.a * _wgslsmith_f_op_f32(f32(-1f) * -449f))))).c.b.b;
        }
        continue;
    }
    if (~(~9243u) != global1.b.b.b) {
        let var_1 = arg_0.c.b.b.a;
        for (var var_2 = 1i; var_2 > -11513i; var_2 = _wgslsmith_add_i32(var_0.a.x, -var_0.c.x)) {
            if (LOOP_COUNTERS[21u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
            continue;
        }
    }
    return Struct_3(func_8(var_0.b, global1.b).c.b.b.c.x ^ _wgslsmith_div_i32(global1.b.c.x, var_0.c.x));
}

fn func_2() -> vec3<bool> {
    var var_0 = func_9(func_8(Struct_1(703f, _wgslsmith_add_u32(func_3(), _wgslsmith_mult_u32(global1.b.b.b, 69955u)), firstLeadingBit(~global1.b.c), ~u_input.b.x), Struct_2(u_input.b, Struct_1(914f, ~u_input.c.x, _wgslsmith_div_vec4_i32(global1.b.b.c, vec4<i32>(global0.x, 2147483647i, u_input.b.x, u_input.b.x)), -global1.b.b.c.x), global1.b.c, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global1.b.d)))));
    if (~firstTrailingBit(~global1.b.b.b & u_input.a.x) >= firstTrailingBit(_wgslsmith_mult_u32(40641u, ~u_input.d))) {
        let var_1 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(abs(vec4<f32>(global3[_wgslsmith_index_u32(34614u, 24u)], global3[_wgslsmith_index_u32(u_input.a.x, 24u)], global1.b.d, global1.b.d))))));
    }
    loop {
        if (LOOP_COUNTERS[22u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
    }
    switch (global2.x) {
        case i32(-2147483648): {
        }
        case 1i: {
            loop {
                if (LOOP_COUNTERS[23u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
                let var_1 = all(vec2<bool>(true, all(select(vec3<bool>(true, false, false), select(vec3<bool>(true, true, true), vec3<bool>(false, false, false), vec3<bool>(true, true, true)), 606f <= global1.a.x))));
                continue;
            }
            return vec3<bool>(!all(vec3<bool>(true, true, true)), !(all(vec4<bool>(true, true, true, true)) || true), !(-(~global2.x) > var_0.a));
        }
        case 2147483647i: {
            let var_1 = vec3<i32>(~(~2147483647i), ~global2.x, ~_wgslsmith_mod_i32(select(_wgslsmith_mult_i32(15228i, global2.x), 1i, false), _wgslsmith_add_i32(func_5(vec4<f32>(global1.b.b.a, 1000f, global1.b.b.a, global1.a.x)).a, -u_input.b.x)));
            var var_2 = ~u_input.d << (_wgslsmith_div_u32(97u, 97315u) % 32u);
        }
        case -73614i: {
        }
        default: {
            for (; ; ) {
                if (LOOP_COUNTERS[24u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
                let var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(global3[_wgslsmith_index_u32(3381u, 24u)] - _wgslsmith_f_op_f32(1157f - global1.b.d)));
            }
            if (any(!select(vec3<bool>(true, true, false), select(vec3<bool>(true, true, true), vec3<bool>(true, true, true), true), any(vec3<bool>(false, false, false))))) {
                let var_1 = Struct_1(731f, ~_wgslsmith_dot_vec4_u32(vec4<u32>(reverseBits(4294967295u), func_8(Struct_1(global3[_wgslsmith_index_u32(u_input.a.x, 24u)], u_input.d, vec4<i32>(u_input.b.x, global2.x, global1.b.a.x, 0i), global1.b.c.x), Struct_2(global0.yy, global1.b.b, vec4<i32>(13551i, global1.b.a.x, global2.x, global1.b.a.x), global3[_wgslsmith_index_u32(global1.b.b.b, 24u)])).b.b.b, ~1u, ~global1.b.b.b), vec4<u32>(u_input.c.x, global1.b.b.b, global1.b.b.b, u_input.d ^ 22694u)), global1.b.b.c, max(global0.x, global0.x));
                return vec3<bool>(reverseBits(firstTrailingBit(u_input.c.x)) <= ~global1.b.b.b, (_wgslsmith_div_f32(_wgslsmith_f_op_f32(round(global3[_wgslsmith_index_u32(39303u, 24u)])), global3[_wgslsmith_index_u32(var_1.b, 24u)]) != _wgslsmith_f_op_f32(var_1.a - _wgslsmith_f_op_f32(-global1.b.b.a))) | all(vec3<bool>(true, true, true)), false);
            }
            loop {
                if (LOOP_COUNTERS[25u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
                let var_1 = global1.b.b;
                continue;
            }
            var var_1 = _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(global1.a.x, global3[_wgslsmith_index_u32(1u, 24u)]) + _wgslsmith_f_op_vec2_f32(sign(vec2<f32>(_wgslsmith_f_op_f32(-831f - -1000f), 774f)))) - _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(-180f, -118f) * _wgslsmith_f_op_vec2_f32(step(vec2<f32>(global1.b.b.a, global1.a.x), vec2<f32>(424f, 2335f)))))));
            var var_2 = ~select(reverseBits(vec3<u32>(firstLeadingBit(4294967295u), _wgslsmith_sub_u32(8993u, u_input.d), ~u_input.a.x)), vec3<u32>(~func_6(Struct_4(global1.a, global1.b), u_input.a, vec4<f32>(2156f, -1000f, global1.b.d, var_1.x)), ~_wgslsmith_mult_u32(4294967295u, u_input.a.x), 4294967295u | func_8(Struct_1(global1.a.x, 0u, vec4<i32>(0i, global2.x, 16748i, 1i), var_0.a), global1.b).b.b.b), true);
        }
    }
    var var_1 = _wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(abs(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(vec4<f32>(-122f, -1193f, global1.a.x, global1.b.b.a), vec4<f32>(1046f, global3[_wgslsmith_index_u32(6445u, 24u)], global3[_wgslsmith_index_u32(48647u, 24u)], -608f))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(max(vec4<f32>(global3[_wgslsmith_index_u32(global1.b.b.b, 24u)], 1701f, -1127f, 640f), vec4<f32>(-1103f, -748f, 1596f, -776f))))))), _wgslsmith_f_op_vec4_f32(max(vec4<f32>(func_8(func_8(global1.b.b, Struct_2(vec2<i32>(var_0.a, 35616i), global1.b.b, vec4<i32>(u_input.b.x, 1192i, global0.x, -80429i), global1.a.x)).b.b, func_8(Struct_1(global1.b.b.a, u_input.a.x, global1.b.c, 18708i), Struct_2(global1.b.a, Struct_1(global3[_wgslsmith_index_u32(60333u, 24u)], 1u, global1.b.b.c, global2.x), vec4<i32>(1i, u_input.b.x, 2147483647i, var_0.a), global1.a.x)).c.b).b.d, -1191f, 343f, global1.b.b.a), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(floor(vec4<f32>(-289f, 181f, 679f, 1256f))) + vec4<f32>(global3[_wgslsmith_index_u32(15908u, 24u)], global1.a.x, global3[_wgslsmith_index_u32(u_input.a.x, 24u)], -1561f)) + _wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(func_4(vec4<f32>(global1.b.b.a, -909f, global3[_wgslsmith_index_u32(u_input.c.x, 24u)], 1000f), -1046f)))))))));
    return vec3<bool>(!(!select(select(true, true, true), any(vec3<bool>(false, true, true)), true)), !(!all(vec4<bool>(true, true, true, true))), any(vec4<bool>(true, all(vec4<bool>(false, true, false, false)) != true, any(vec4<bool>(true, true, true, true)), true)));
}

fn func_1(arg_0: Struct_1) -> f32 {
    if (all(select(!func_2(), vec3<bool>(all(vec2<bool>(true, true)), true, func_2().x), true))) {
        let var_0 = vec2<bool>(true, !(3013f == _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(global3[_wgslsmith_index_u32(32831u, 24u)] * global1.b.b.a))));
        switch (_wgslsmith_sub_i32(global1.b.c.x, arg_0.c.x)) {
            case -5939i: {
                var var_1 = global0.x;
            }
            case 1i: {
                let var_1 = Struct_2(vec2<i32>(u_input.b.x, arg_0.d), func_8(global1.b.b, func_8(arg_0, global1.b).c.b).b.b, ~_wgslsmith_mod_vec4_i32(abs(arg_0.c), _wgslsmith_mult_vec4_i32(~arg_0.c, ~arg_0.c)), global3[_wgslsmith_index_u32(~global1.b.b.b, 24u)]);
                global3 = array<f32, 24>();
            }
            default: {
                var var_1 = false;
                global0 = ~vec3<i32>(~u_input.b.x, u_input.b.x << (select(~global1.b.b.b, u_input.c.x >> (4294967295u % 32u), var_0.x) % 32u), 63263i);
                global1 = Struct_4(_wgslsmith_f_op_vec4_f32(func_4(vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0.a)), arg_0.a, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global1.b.b.a)), global1.b.b.a), -2366f)).xzy, global1.b);
                global3 = array<f32, 24>();
            }
        }
    }
    var var_0 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -1589f) + -776f);
    for (var var_1 = 1i; ; var_1 += 1i) {
        if (LOOP_COUNTERS[26u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
        loop {
            if (LOOP_COUNTERS[27u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[27u] = LOOP_COUNTERS[27u] + 1u;
        }
        continue;
    }
    var var_1 = global1.a;
    let var_2 = func_2().x;
    return _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-var_1.x)));
}

@compute
@workgroup_size(1)
fn main() {
    loop {
        if (LOOP_COUNTERS[28u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[28u] = LOOP_COUNTERS[28u] + 1u;
        var var_0 = Struct_3(i32(-1i) * -global2.x);
    }
    switch (-u_input.b.x) {
        case 12856i: {
            loop {
                if (LOOP_COUNTERS[29u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[29u] = LOOP_COUNTERS[29u] + 1u;
                break;
            }
            let var_0 = ~(~(~u_input.c));
            global3 = array<f32, 24>();
            for (var var_1 = -22458i; var_1 != 22911i; var_1 += 1i) {
                if (LOOP_COUNTERS[30u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[30u] = LOOP_COUNTERS[30u] + 1u;
                global3 = array<f32, 24>();
                continue;
            }
            let var_1 = _wgslsmith_f_op_vec2_f32(global1.a.zx * _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(func_1(global1.b.b)), global3[_wgslsmith_index_u32(~89821u, 24u)]) - _wgslsmith_f_op_vec2_f32(-global1.a.yy)) + global1.a.zx));
        }
        case 1i: {
            if (true) {
                let var_0 = Struct_4(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(select(vec3<f32>(global3[_wgslsmith_index_u32(u_input.c.x, 24u)], global3[_wgslsmith_index_u32(global1.b.b.b, 24u)], global3[_wgslsmith_index_u32(39283u, 24u)]), vec3<f32>(global3[_wgslsmith_index_u32(4478u, 24u)], -1000f, global1.b.b.a), true)))), Struct_2(_wgslsmith_mult_vec2_i32(vec2<i32>(select(1i, 72144i, true), global1.b.a.x ^ -1i), firstTrailingBit(firstTrailingBit(global1.b.c.xx))), Struct_1(global3[_wgslsmith_index_u32(~(~global1.b.b.b), 24u)], _wgslsmith_mod_u32(u_input.c.x, 1u) & 4294967295u, vec4<i32>(-160i, -25120i, global1.b.c.x << (64297u % 32u), global2.x), _wgslsmith_mod_i32(max(-48897i, i32(-2147483648)), _wgslsmith_sub_i32(global2.x, global1.b.c.x))), firstLeadingBit(select(_wgslsmith_mult_vec4_i32(global1.b.c, vec4<i32>(0i, 36769i, -10195i, -10053i)), vec4<i32>(-1i, 28561i, global2.x, u_input.b.x), select(vec4<bool>(false, false, true, false), vec4<bool>(true, true, false, true), false))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(global3[_wgslsmith_index_u32(func_8(global1.b.b, Struct_2(vec2<i32>(global0.x, -113i), Struct_1(global3[_wgslsmith_index_u32(4294967295u, 24u)], 1u, global1.b.b.c, global1.b.c.x), global1.b.c, -1518f)).c.b.b.b, 24u)])))));
                var var_1 = global1.b.a.x;
                let var_2 = vec2<bool>(u_input.b.x < -1i, false);
            }
            loop {
                if (LOOP_COUNTERS[31u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[31u] = LOOP_COUNTERS[31u] + 1u;
            }
        }
        case -1i: {
        }
        default: {
            global3 = array<f32, 24>();
            if (all(select(vec2<bool>(all(select(vec4<bool>(false, true, true, false), vec4<bool>(true, false, false, true), vec4<bool>(true, false, false, false))), true), !(!select(vec2<bool>(true, true), vec2<bool>(false, true), true)), any(vec4<bool>(186f >= global1.a.x, any(vec4<bool>(false, true, true, true)), true, true))))) {
                var var_0 = 54704u << (func_8(func_8(global1.b.b, func_8(Struct_1(global3[_wgslsmith_index_u32(10941u, 24u)], u_input.d, vec4<i32>(-1i, u_input.b.x, global2.x, u_input.b.x), -1i), Struct_2(vec2<i32>(global2.x, u_input.b.x), Struct_1(global3[_wgslsmith_index_u32(global1.b.b.b, 24u)], 1u, global1.b.c, 14634i), global1.b.b.c, 1734f)).b).b.b, Struct_2(global1.b.a, func_8(Struct_1(global1.a.x, global1.b.b.b, global1.b.b.c, 37009i), global1.b).c.b.b, vec4<i32>(max(global1.b.c.x, u_input.b.x), _wgslsmith_mod_i32(2147483647i, u_input.b.x), _wgslsmith_add_i32(-199i, 0i), reverseBits(global0.x)), _wgslsmith_f_op_f32(global1.b.b.a - 309f))).b.b.b % 32u);
                let var_1 = _wgslsmith_f_op_f32(-func_8(global1.b.b, global1.b).c.b.b.a);
                var var_2 = u_input.c.zz;
            }
            if (true) {
                let var_0 = -1000f;
                let var_1 = Struct_2(select(~(u_input.b | vec2<i32>(26420i, global0.x)) << (vec2<u32>(_wgslsmith_mod_u32(u_input.c.x, 45392u), ~global1.b.b.b) % vec2<u32>(32u)), reverseBits(_wgslsmith_clamp_vec2_i32(vec2<i32>(-25498i, -1684i), vec2<i32>(-2978i, 1i) | vec2<i32>(global1.b.b.d, global2.x), global2.xy)), !select(select(vec2<bool>(true, true), vec2<bool>(true, true), vec2<bool>(false, false)), vec2<bool>(false, false), vec2<bool>(true, true))), global1.b.b, ~_wgslsmith_add_vec4_i32((vec4<i32>(-57851i, global0.x, -1i, 1i) & vec4<i32>(0i, global1.b.a.x, global1.b.b.c.x, 40193i)) << (_wgslsmith_sub_vec4_u32(vec4<u32>(global1.b.b.b, global1.b.b.b, u_input.d, 26177u), vec4<u32>(global1.b.b.b, 0u, 167345u, 4294967295u)) % vec4<u32>(32u)), min(vec4<i32>(global2.x, 2147483647i, u_input.b.x, 12758i), vec4<i32>(u_input.b.x, global1.b.c.x, global1.b.c.x, 0i))), -1462f);
                var var_2 = func_8(var_1.b, func_8(global1.b.b, global1.b).c.b).c;
                global3 = array<f32, 24>();
            }
            global2 = _wgslsmith_add_vec3_i32(select(vec3<i32>(-15230i, -1i, 18851i << (u_input.c.x % 32u)), vec3<i32>(_wgslsmith_div_i32(50935i, 1i), reverseBits(global0.x), ~(i32(-2147483648))), ~11658u > global1.b.b.b) | vec3<i32>(_wgslsmith_dot_vec2_i32(vec2<i32>(global1.b.a.x, -1i) >> (vec2<u32>(44845u, global1.b.b.b) % vec2<u32>(32u)), ~global0.zy), 17334i, _wgslsmith_dot_vec3_i32(~vec3<i32>(-1i, 16838i, -10666i), firstTrailingBit(vec3<i32>(i32(-2147483648), global2.x, global1.b.b.c.x)))), global1.b.c.zwx);
        }
    }
    loop {
        if (LOOP_COUNTERS[32u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[32u] = LOOP_COUNTERS[32u] + 1u;
        continue;
    }
    let var_0 = false;
    let var_1 = global0.x;
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(-137f * 506f), _wgslsmith_div_f32(global3[_wgslsmith_index_u32(global1.b.b.b, 24u)], global3[_wgslsmith_index_u32(global1.b.b.b, 24u)]), global3[_wgslsmith_index_u32(u_input.a.x, 24u)], _wgslsmith_f_op_f32(f32(-1f) * -1319f))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(-vec4<f32>(global3[_wgslsmith_index_u32(77616u, 24u)], 350f, global1.b.b.a, -1243f)), _wgslsmith_f_op_vec4_f32(vec4<f32>(636f, 184f, 1080f, global1.b.d) * vec4<f32>(global3[_wgslsmith_index_u32(global1.b.b.b, 24u)], 215f, 1092f, -2265f))))))));
}

`;