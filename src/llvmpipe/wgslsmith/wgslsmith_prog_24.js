export const input = [228,214,86,55,179,81,125,90,103,245,233,251,172,133,64,13,5,200,10,78,193,56,99,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [228,214,86,55,179,81,125,90,103,245,233,251,172,133,64,13,5,200,10,78,193,56,99,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[228,214,86,55,179,81,125,90,103,245,233,251,172,133,64,13,5,200,10,78,193,56,99,137]}
// Seed: 10655273516901711486

struct Struct_1 {
    a: vec4<f32>,
    b: f32,
    c: bool,
    d: i32,
}

struct Struct_2 {
    a: Struct_1,
    b: i32,
    c: Struct_1,
    d: vec4<f32>,
}

struct UniformBuffer {
    a: vec2<u32>,
    b: vec2<i32>,
    c: u32,
    d: i32,
}

struct StorageBuffer {
    a: vec4<u32>,
    b: f32,
    c: u32,
    d: vec2<f32>,
    e: vec4<i32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<vec4<f32>, 2> = array<vec4<f32>, 2>(vec4<f32>(718f, -522f, -796f, -1269f), vec4<f32>(-1049f, -1477f, -745f, -1250f));

var<private> global1: Struct_2;

var<private> global2: array<vec4<u32>, 15>;

var<private> LOOP_COUNTERS: array<u32, 37>;

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
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

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn func_6() -> bool {
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        let var_0 = global1.c;
        global2 = array<vec4<u32>, 15>();
        if (select(any(select(vec2<bool>(u_input.d < -13817i, var_0.c), !(!vec2<bool>(var_0.c, true)), select(true, global1.c.c, true))), select(!var_0.c, all(vec4<bool>(global1.c.c, global1.c.c || false, 727f != global1.d.x, true)), false), ~(-55715i) != select(38005i, _wgslsmith_sub_i32(var_0.d, -1i) & var_0.d, any(vec2<bool>(true, var_0.c))))) {
            let var_1 = global1.a;
            continue;
        }
    }
    let var_0 = global1.c;
    var var_1 = ~(~(~select(countOneBits(vec2<u32>(4294967295u, 0u)), vec2<u32>(9575u, 32711u), !vec2<bool>(var_0.c, var_0.c))));
    let var_2 = vec3<f32>(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global1.d.x) - _wgslsmith_f_op_f32(select(860f, 997f, true))) - _wgslsmith_div_f32(_wgslsmith_f_op_f32(round(var_0.a.x)), _wgslsmith_f_op_f32(-108f + -442f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(min(-1229f, var_0.a.x)))) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1000f))))), _wgslsmith_f_op_f32(max(325f, -2106f)), _wgslsmith_f_op_f32(step(global1.a.a.x, _wgslsmith_f_op_f32(ceil(_wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -235f), _wgslsmith_f_op_f32(-var_0.a.x)))))));
    switch (-3081i >> (_wgslsmith_clamp_u32(44437u, ~u_input.a.x, 1u ^ _wgslsmith_mult_u32(38596u, var_1.x)) % 32u)) {
        case -23144i: {
        }
        case -1i: {
            global0 = array<vec4<f32>, 2>();
            let var_3 = global1.a;
            var var_4 = var_0.b;
            let var_5 = Struct_2(global1.c, var_3.d, Struct_1(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(global1.d - global0[_wgslsmith_index_u32(~u_input.c, 2u)])), _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-var_0.a.x))), true, 7909i), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(max(vec4<f32>(-192f, -320f, global1.d.x, -365f), var_0.a)))) + var_3.a)));
            for (; var_0.c; ) {
                if (LOOP_COUNTERS[1u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
            }
        }
        case 0i: {
            if (true) {
            }
        }
        case -1359i: {
            switch (_wgslsmith_sub_i32(var_0.d, ((i32(-1i) * -global1.a.d) | _wgslsmith_dot_vec2_i32(vec2<i32>(global1.a.d, i32(-2147483648)) << (vec2<u32>(4294967295u, u_input.a.x) % vec2<u32>(32u)), min(vec2<i32>(global1.c.d, var_0.d), u_input.b))) << (u_input.a.x % 32u))) {
                case 1i: {
                    let var_3 = Struct_2(Struct_1(vec4<f32>(global1.a.a.x, global1.a.a.x, _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(f32(-1f) * -814f))), _wgslsmith_f_op_f32(var_0.b - _wgslsmith_f_op_f32(sign(-655f)))), global1.d.x, all(!select(vec3<bool>(false, global1.a.c, global1.c.c), vec3<bool>(false, true, true), vec3<bool>(false, false, global1.c.c))), _wgslsmith_dot_vec2_i32(vec2<i32>(1i << (1u % 32u), _wgslsmith_sub_i32(-1i, 0i)), reverseBits(-u_input.b))), _wgslsmith_mult_i32(_wgslsmith_div_i32(-45038i, -2147483647i) >> (var_1.x % 32u), -_wgslsmith_mult_i32(var_0.d, select(u_input.d, -19265i, true))), global1.a, global0[_wgslsmith_index_u32(reverseBits(1u), 2u)]);
                    let var_4 = ~(-vec4<i32>(i32(-2147483648), _wgslsmith_add_i32(1i, i32(-1i) * -3989i), global1.c.d, global1.a.d & firstLeadingBit(var_0.d)));
                    var var_5 = _wgslsmith_add_vec4_i32(max(_wgslsmith_sub_vec4_i32(vec4<i32>(_wgslsmith_dot_vec2_i32(u_input.b, vec2<i32>(var_0.d, 2147483647i)), _wgslsmith_add_i32(u_input.d, 1i), 1i, -var_3.b), -(var_4 << (vec4<u32>(u_input.a.x, var_1.x, 28829u, 0u) % vec4<u32>(32u)))), -(var_4 >> (firstLeadingBit(global2[_wgslsmith_index_u32(4294967295u, 15u)]) % vec4<u32>(32u)))), select(vec4<i32>(countOneBits(22747i) << (u_input.a.x % 32u), _wgslsmith_dot_vec2_i32(vec2<i32>(-28303i, global1.c.d) & var_4.xw, vec2<i32>(global1.c.d, u_input.b.x) << (u_input.a % vec2<u32>(32u))), max(abs(1i), var_0.d), _wgslsmith_mod_i32(var_3.c.d, u_input.d)), abs(abs(_wgslsmith_mod_vec4_i32(vec4<i32>(21596i, var_4.x, 0i, var_0.d), vec4<i32>(-1i, 18442i, var_3.c.d, u_input.d)))), select(select(vec4<bool>(global1.c.c, false, var_0.c, false), select(vec4<bool>(false, global1.a.c, false, false), vec4<bool>(true, false, var_3.a.c, var_3.a.c), vec4<bool>(true, true, var_0.c, false)), false), select(select(vec4<bool>(var_3.a.c, var_3.c.c, true, false), vec4<bool>(true, false, var_3.a.c, var_0.c), vec4<bool>(var_3.a.c, var_3.c.c, false, true)), !vec4<bool>(var_0.c, true, true, global1.a.c), true), vec4<bool>(true, true, true, true))));
                }
                case i32(-2147483648): {
                }
                case -2163i: {
                    var var_3 = Struct_2(global1.a, 1i, Struct_1(_wgslsmith_f_op_vec4_f32(floor(global0[_wgslsmith_index_u32(var_1.x >> (reverseBits(0u) % 32u), 2u)])), _wgslsmith_f_op_f32(round(-1382f)), global1.c.c, global1.c.d), _wgslsmith_f_op_vec4_f32(max(vec4<f32>(1571f, _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-516f), _wgslsmith_f_op_f32(max(var_2.x, 2985f)), true)), global1.c.a.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(-2257f, 912f, true)) + global1.a.a.x)), _wgslsmith_div_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(f32(-1f) * -701f), global1.c.a.x, -1000f, _wgslsmith_f_op_f32(round(-2173f))), _wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(vec4<f32>(1513f, 1000f, var_2.x, var_2.x) - global0[_wgslsmith_index_u32(var_1.x, 2u)]), global1.c.a))))));
                }
                case 68851i: {
                    var var_3 = _wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(-527f, var_0.b))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(361f - 1004f)), _wgslsmith_f_op_f32(step(751f, 940f))) * global1.a.a.xyz)));
                }
                default: {
                    global0 = array<vec4<f32>, 2>();
                    var var_3 = countOneBits(reverseBits(_wgslsmith_mod_vec4_u32(global2[_wgslsmith_index_u32(1u, 15u)], _wgslsmith_mult_vec4_u32(countOneBits(vec4<u32>(4294967295u, u_input.a.x, 1u, u_input.a.x)), _wgslsmith_div_vec4_u32(vec4<u32>(u_input.c, 7551u, u_input.a.x, 4294967295u), global2[_wgslsmith_index_u32(u_input.a.x, 15u)])))));
                    var var_4 = vec3<u32>(select(4294967295u, var_1.x, all(!select(vec3<bool>(global1.a.c, var_0.c, global1.c.c), vec3<bool>(global1.a.c, var_0.c, var_0.c), var_0.c))), firstLeadingBit(var_3.x), _wgslsmith_dot_vec3_u32(~(~vec3<u32>(u_input.c, 0u, 88u)) & abs(vec3<u32>(u_input.c, 0u, 17223u)), vec3<u32>(_wgslsmith_mod_u32(25831u, ~60181u), ~var_1.x, var_3.x)));
                    var var_5 = Struct_2(Struct_1(vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(-642f))), var_0.a.x, _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-1000f * var_2.x))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_0.a.x) - _wgslsmith_f_op_f32(f32(-1f) * -970f))), -2487f, var_0.c, _wgslsmith_sub_i32(i32(-1i) * i32(-2147483648), var_0.d) >> ((2281u ^ ~var_1.x) % 32u)), _wgslsmith_clamp_i32(_wgslsmith_mod_i32(u_input.d << (var_3.x % 32u), i32(-2147483648)), u_input.b.x, _wgslsmith_dot_vec2_i32(vec2<i32>(1481i, var_0.d), _wgslsmith_div_vec2_i32(~u_input.b, vec2<i32>(u_input.d, 1i)))), global1.a, _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(global0[_wgslsmith_index_u32(_wgslsmith_mult_u32(var_4.x, var_4.x), 2u)] - vec4<f32>(_wgslsmith_f_op_f32(-global1.c.a.x), _wgslsmith_f_op_f32(global1.d.x - 679f), _wgslsmith_f_op_f32(-var_2.x), 629f)) * var_0.a));
                }
            }
            switch (~(~var_0.d & u_input.d)) {
                case 15048i: {
                    return any(select(!vec2<bool>(!var_0.c, all(vec3<bool>(true, false, true))), vec2<bool>(true, var_0.c), vec2<bool>(true, !(!var_0.c))));
                }
                default: {
                    global2 = array<vec4<u32>, 15>();
                    global2 = array<vec4<u32>, 15>();
                }
            }
            if (global1.a.c) {
            }
            let var_3 = Struct_2(Struct_1(_wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(min(vec4<f32>(-702f, -276f, -1651f, -1450f), global0[_wgslsmith_index_u32(4294967295u, 2u)])), vec4<f32>(-455f, -350f, var_0.a.x, -810f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(1007f))), true, abs(272i)), -global1.b & global1.c.d, Struct_1(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(sign(_wgslsmith_div_vec4_f32(global1.c.a, global0[_wgslsmith_index_u32(6323u, 2u)]))), _wgslsmith_div_vec4_f32(global0[_wgslsmith_index_u32(~4294967295u, 2u)], _wgslsmith_f_op_vec4_f32(global1.d + var_0.a))), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(-589f, _wgslsmith_f_op_f32(max(1546f, var_0.b)))), !all(select(vec3<bool>(false, global1.c.c, true), vec3<bool>(var_0.c, true, global1.a.c), true)), firstLeadingBit(global1.c.d)), _wgslsmith_f_op_vec4_f32(vec4<f32>(1000f, _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(max(898f, 548f)), _wgslsmith_div_f32(global1.d.x, var_2.x))), _wgslsmith_f_op_f32(-615f), global1.d.x) * global0[_wgslsmith_index_u32(1u, 2u)]));
        }
        default: {
            var_1 = u_input.a;
            loop {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            }
            return true;
        }
    }
    return true;
}

fn func_7(arg_0: Struct_2, arg_1: Struct_2, arg_2: f32, arg_3: Struct_1) -> i32 {
    for (; true & any(!select(!vec4<bool>(true, global1.a.c, false, arg_1.c.c), select(vec4<bool>(arg_3.c, arg_3.c, true, false), vec4<bool>(global1.a.c, true, arg_3.c, arg_0.a.c), vec4<bool>(false, global1.a.c, arg_1.c.c, global1.c.c)), all(vec4<bool>(false, false, false, arg_0.c.c)))); ) {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        loop {
            if (LOOP_COUNTERS[4u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
            break;
        }
        for (var var_0 = global1.c.d; false; var_0 += 1i) {
            if (LOOP_COUNTERS[5u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
            break;
        }
        continue;
    }
    for (var var_0 = 0i; var_0 < 61493i; ) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        var var_1 = Struct_1(vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(arg_2, 1095f)) * -578f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(1293f)) + arg_1.c.b)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1000f) + _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(f32(-1f) * -583f)))), global1.a.b), -775f, false, i32(-2147483648));
        continue;
    }
    let var_0 = -14651i | _wgslsmith_mult_i32(-66791i, arg_0.a.d);
    for (; arg_3.c; ) {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
    }
    let var_1 = ~48040i;
    return ~_wgslsmith_dot_vec4_i32(~vec4<i32>(_wgslsmith_dot_vec3_i32(vec3<i32>(var_0, 33009i, var_1), vec3<i32>(arg_3.d, var_1, -50445i)), var_1, -arg_3.d, 1i), vec4<i32>(-51422i, 22565i, 2147483647i, -5522i));
}

fn func_5(arg_0: bool, arg_1: f32) -> Struct_2 {
    global1 = Struct_2(global1.c, func_7(Struct_2(global1.a, _wgslsmith_mult_i32(global1.b, global1.b) ^ _wgslsmith_mult_i32(-60154i, u_input.b.x), Struct_1(global0[_wgslsmith_index_u32(u_input.a.x, 2u)], _wgslsmith_f_op_f32(1667f + arg_1), true, -global1.c.d), _wgslsmith_f_op_vec4_f32(round(global1.a.a))), Struct_2(global1.a, -1i, global1.c, global1.c.a), _wgslsmith_f_op_f32(_wgslsmith_div_f32(arg_1, _wgslsmith_f_op_f32(round(global1.c.b))) - arg_1), Struct_1(_wgslsmith_f_op_vec4_f32(global1.d - _wgslsmith_f_op_vec4_f32(-global1.d)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(-1099f))), func_6(), global1.c.d)), Struct_1(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-427f, global1.d.x, arg_1, global1.d.x)) * _wgslsmith_div_vec4_f32(vec4<f32>(global1.d.x, 1439f, 639f, arg_1), global0[_wgslsmith_index_u32(4294967295u, 2u)])), _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(249f * -2381f))))), global1.c.c, i32(-1i) * -global1.b), vec4<f32>(-837f, arg_1, 320f, _wgslsmith_f_op_f32(arg_1 + _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-global1.c.b))))));
    switch (-46046i) {
        case 2147483647i: {
            var var_0 = 0i;
            loop {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                let var_1 = Struct_2(Struct_1(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-global0[_wgslsmith_index_u32(~0u, 2u)])), _wgslsmith_f_op_f32(-global1.d.x), !(any(vec4<bool>(global1.a.c, true, true, true)) && !global1.a.c), global1.c.d), firstLeadingBit(firstTrailingBit(_wgslsmith_add_i32(u_input.d, 27839i))) ^ (i32(-1i) * -(-42349i | u_input.d)), global1.a, _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(677f + _wgslsmith_f_op_f32(f32(-1f) * -715f)), _wgslsmith_f_op_f32(arg_1 + _wgslsmith_f_op_f32(sign(1510f))), -713f, -565f)));
                continue;
            }
            let var_1 = Struct_2(Struct_1(global1.c.a, global1.d.x, arg_1 < arg_1, ~(i32(-1i) * -16019i)), global1.b, global1.c, _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(sign(arg_1)), -1199f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-522f - arg_1) + -707f), arg_1)));
            for (var var_2 = -1i; false; var_0 = reverseBits(~abs(~(-47252i) << (u_input.a.x % 32u)))) {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                var var_3 = var_1.a;
                break;
            }
            global2 = array<vec4<u32>, 15>();
        }
        case -1i: {
            global0 = array<vec4<f32>, 2>();
            if (firstLeadingBit(u_input.a.x) <= (48246u >> ((abs(firstLeadingBit(u_input.a.x)) << (~max(u_input.a.x, 13913u) % 32u)) % 32u))) {
                var var_0 = 15194i;
                var_0 = global1.a.d;
            }
            loop {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                var var_0 = arg_1;
                let var_1 = firstTrailingBit(select(min(-firstTrailingBit(vec3<i32>(1i, 24483i, global1.c.d)), vec3<i32>(global1.b, ~u_input.b.x, -1i)), vec3<i32>(0i << (u_input.a.x % 32u), countOneBits(~u_input.b.x), _wgslsmith_div_i32(select(global1.c.d, 1i, false), 1i)), -9227i != -_wgslsmith_dot_vec4_i32(vec4<i32>(24021i, 14457i, u_input.d, i32(-2147483648)), vec4<i32>(u_input.d, u_input.b.x, u_input.b.x, global1.a.d))));
                var var_2 = ~4294967295u;
            }
            global0 = array<vec4<f32>, 2>();
        }
        default: {
            switch (-1i) {
                default: {
                    let var_0 = select(vec2<bool>(true, true), !select(select(vec2<bool>(true, true), vec2<bool>(true, true), vec2<bool>(true, arg_0)), !vec2<bool>(arg_0, false), !(!vec2<bool>(arg_0, true))), vec2<bool>(true, global1.c.c));
                    let var_1 = Struct_2(global1.c, func_7(Struct_2(Struct_1(vec4<f32>(global1.d.x, -487f, arg_1, arg_1), _wgslsmith_f_op_f32(min(global1.d.x, arg_1)), true, _wgslsmith_sub_i32(global1.c.d, global1.a.d)), -(-5006i >> (u_input.a.x % 32u)), Struct_1(_wgslsmith_f_op_vec4_f32(abs(vec4<f32>(global1.c.b, arg_1, global1.d.x, global1.c.a.x))), _wgslsmith_f_op_f32(-944f), var_0.x & false, u_input.b.x), _wgslsmith_f_op_vec4_f32(-vec4<f32>(global1.c.b, -744f, -1393f, global1.a.a.x))), Struct_2(global1.c, ~_wgslsmith_add_i32(-2661i, u_input.d), global1.a, global0[_wgslsmith_index_u32(_wgslsmith_dot_vec2_u32(min(vec2<u32>(43345u, u_input.c), vec2<u32>(4294967295u, 4294967295u)), u_input.a), 2u)]), 408f, Struct_1(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(ceil(global1.d))), _wgslsmith_f_op_f32(abs(1780f)), false, _wgslsmith_dot_vec4_i32(select(vec4<i32>(9986i, 2147483647i, -1i, u_input.d), vec4<i32>(0i, u_input.b.x, u_input.b.x, u_input.d), vec4<bool>(false, false, global1.c.c, true)), firstTrailingBit(vec4<i32>(2147483647i, 35349i, global1.c.d, global1.a.d))))), Struct_1(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-1074f, _wgslsmith_f_op_f32(f32(-1f) * -271f), _wgslsmith_f_op_f32(-global1.c.b), _wgslsmith_div_f32(409f, 432f))), _wgslsmith_f_op_f32(-899f), (any(var_0) && (arg_0 || var_0.x)) || !arg_0, max(-2454i, firstLeadingBit(-6515i))), _wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global1.a.a.x) * _wgslsmith_f_op_f32(select(arg_1, -1068f, var_0.x))), global1.c.b, 522f, _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-global1.c.a.x)))) - _wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-1194f, 483f, arg_1, -300f)))), vec4<f32>(-487f, _wgslsmith_f_op_f32(abs(global1.d.x)), _wgslsmith_f_op_f32(f32(-1f) * -1000f), _wgslsmith_f_op_f32(-2153f))))));
                }
            }
        }
    }
    if (_wgslsmith_f_op_f32(-496f) != _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(arg_1 + arg_1))))))) {
        if (false) {
            global2 = array<vec4<u32>, 15>();
            global0 = array<vec4<f32>, 2>();
            global2 = array<vec4<u32>, 15>();
            global2 = array<vec4<u32>, 15>();
            global0 = array<vec4<f32>, 2>();
        }
        var var_0 = global1.b;
    }
    for (var var_0 = 26961i; ; var_0 += 1i) {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        continue;
    }
    global2 = array<vec4<u32>, 15>();
    return Struct_2(Struct_1(_wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(-global0[_wgslsmith_index_u32(u_input.c & u_input.c, 2u)]))), _wgslsmith_f_op_f32(sign(_wgslsmith_div_f32(1f, _wgslsmith_f_op_f32(trunc(293f))))), true, abs(~68666i)), u_input.b.x, global1.c, _wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_div_vec4_f32(global0[_wgslsmith_index_u32(10954u, 2u)], global0[_wgslsmith_index_u32(26069u, 2u)])))), _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(global1.c.a.x * 710f), global1.c.b, global1.d.x, global1.a.b)))));
}

fn func_8(arg_0: Struct_2, arg_1: i32, arg_2: Struct_1, arg_3: vec4<u32>) -> Struct_2 {
    if (global1.c.c) {
        global2 = array<vec4<u32>, 15>();
    }
    for (var var_0 = -1i; ; var_0 += 1i) {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        loop {
            if (LOOP_COUNTERS[13u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
            let var_1 = arg_0;
            var var_2 = func_5(global1.c.c, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(-553f)) + arg_2.b)).c;
            break;
        }
        break;
    }
    loop {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        let var_0 = func_5(arg_0.a.c, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(-593f, 581f)) - _wgslsmith_f_op_f32(min(arg_2.a.x, _wgslsmith_f_op_f32(arg_0.a.b - _wgslsmith_f_op_f32(sign(arg_0.a.b))))))).c;
        global2 = array<vec4<u32>, 15>();
        if (all(vec2<bool>(all(vec2<bool>(true, global1.a.c)), true))) {
        }
        let var_1 = abs(~_wgslsmith_div_vec2_u32(u_input.a, select(arg_3.zw, countOneBits(arg_3.xw), select(vec2<bool>(false, arg_0.a.c), vec2<bool>(global1.c.c, false), vec2<bool>(true, true)))));
        for (var var_2 = i32(-2147483648); var_0.c; var_2 -= 1i) {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            var_2 = arg_1;
            return arg_0;
        }
    }
    loop {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
    }
    if (arg_2.c) {
        global0 = array<vec4<f32>, 2>();
        let var_0 = abs(u_input.a.x);
        if (!(!arg_0.a.c)) {
            let var_1 = Struct_2(func_5(true, _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-858f) + _wgslsmith_f_op_f32(-1170f)), _wgslsmith_f_op_f32(f32(-1f) * -1773f)))).a, ~(i32(-1i) * -59535i) & u_input.d, func_5(global1.a.c, global1.c.b).a, global1.a.a);
            let var_2 = ~var_0 >> (0u % 32u);
            let var_3 = _wgslsmith_div_vec4_i32(~(max(vec4<i32>(u_input.d, global1.c.d, global1.b, arg_0.c.d) << (arg_3 % vec4<u32>(32u)), _wgslsmith_sub_vec4_i32(vec4<i32>(arg_2.d, -1i, 0i, arg_0.c.d), vec4<i32>(-1i, arg_2.d, var_1.b, i32(-2147483648)))) | -(~vec4<i32>(-1i, -7761i, 1i, u_input.d))), -(firstLeadingBit(~vec4<i32>(1i, u_input.d, arg_2.d, 19770i)) | vec4<i32>(arg_0.b & global1.b, i32(-1i) * -24114i, firstTrailingBit(2147483647i), i32(-1i) * -1i)));
            global1 = arg_0;
        }
        global2 = array<vec4<u32>, 15>();
    }
    return arg_0;
}

fn func_9(arg_0: u32, arg_1: Struct_2, arg_2: f32, arg_3: Struct_1) -> bool {
    if (!arg_3.c && func_6()) {
        var var_0 = _wgslsmith_f_op_f32(max(arg_3.b, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_1.c.a.x)))) == _wgslsmith_f_op_f32(_wgslsmith_div_f32(func_8(func_5(arg_1.c.c, arg_2), u_input.b.x ^ 2147483647i, Struct_1(arg_3.a, -1000f, global1.c.c, arg_3.d), select(vec4<u32>(34404u, 0u, u_input.c, arg_0), global2[_wgslsmith_index_u32(u_input.c, 15u)], arg_1.c.c)).a.b, 1873f) * _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-1299f))));
    }
    loop {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
        loop {
            if (LOOP_COUNTERS[18u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
            var var_0 = firstTrailingBit(u_input.b);
            continue;
        }
        continue;
    }
    loop {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
        switch (max(_wgslsmith_mult_i32(_wgslsmith_clamp_i32(-_wgslsmith_div_i32(i32(-2147483648), global1.c.d), func_8(arg_1, arg_1.b, Struct_1(vec4<f32>(arg_1.c.b, arg_3.b, arg_3.a.x, arg_2), arg_2, false, u_input.d), min(vec4<u32>(0u, 40823u, arg_0, u_input.a.x), vec4<u32>(u_input.c, 1u, 29208u, 4294967295u))).a.d, _wgslsmith_sub_i32(countOneBits(u_input.d), _wgslsmith_dot_vec3_i32(vec3<i32>(12748i, -10533i, arg_1.c.d), vec3<i32>(arg_3.d, 1i, -2812i)))), 1i), u_input.d)) {
            default: {
                var var_0 = func_8(arg_1, -11527i, arg_3, _wgslsmith_add_vec4_u32(_wgslsmith_add_vec4_u32(global2[_wgslsmith_index_u32(u_input.c << (_wgslsmith_add_u32(arg_0, u_input.a.x) % 32u), 15u)], ~vec4<u32>(arg_0, 6525u, 62608u, 29482u)), ~global2[_wgslsmith_index_u32(~_wgslsmith_dot_vec4_u32(global2[_wgslsmith_index_u32(48048u, 15u)], global2[_wgslsmith_index_u32(6550u, 15u)]), 15u)])).c;
                var var_1 = global1.c;
            }
        }
        global1 = Struct_2(Struct_1(arg_3.a, arg_3.b, arg_1.a.c, arg_1.b), arg_3.d, func_5(any(vec3<bool>(true, !global1.a.c, true)), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-350f)), global1.c.b))).a, _wgslsmith_f_op_vec4_f32(-func_5(true, _wgslsmith_div_f32(-2055f, global1.d.x)).a.a));
        let var_0 = func_8(Struct_2(Struct_1(_wgslsmith_div_vec4_f32(vec4<f32>(arg_2, 184f, arg_2, arg_1.a.a.x), arg_1.a.a), _wgslsmith_f_op_f32(round(arg_1.a.b)), arg_1.a.c, reverseBits(-33459i)), _wgslsmith_mod_i32(arg_1.a.d, -62406i) >> (min(u_input.a.x, u_input.a.x) % 32u), func_5(false, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-328f - 485f) + _wgslsmith_f_op_f32(1401f + arg_1.c.a.x))).c, _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(floor(global1.d)), _wgslsmith_f_op_vec4_f32(select(arg_1.c.a, vec4<f32>(-1000f, -447f, -1121f, arg_3.a.x), global1.a.c)))))), arg_3.d, global1.c, global2[_wgslsmith_index_u32(~_wgslsmith_dot_vec4_u32(~select(global2[_wgslsmith_index_u32(u_input.c, 15u)], vec4<u32>(arg_0, u_input.a.x, 18928u, u_input.a.x), global1.a.c), global2[_wgslsmith_index_u32(0u, 15u)]), 15u)]).c;
        loop {
            if (LOOP_COUNTERS[20u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
            continue;
        }
    }
    let var_0 = -abs(u_input.b) | (select(u_input.b, vec2<i32>(select(arg_1.b, 1i, arg_1.c.c), ~arg_1.a.d), true) | vec2<i32>(~(-39638i), 0i));
    for (var var_1 = 22187i; global1.c.c; var_1 += 1i) {
        if (LOOP_COUNTERS[21u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
    }
    return true;
}

fn func_4() -> Struct_2 {
    loop {
        if (LOOP_COUNTERS[22u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
        continue;
    }
    if (15542u == firstLeadingBit(_wgslsmith_mult_u32(_wgslsmith_dot_vec3_u32(vec3<u32>(u_input.c, 42769u, 4294967295u) ^ vec3<u32>(u_input.a.x, u_input.c, u_input.c), vec3<u32>(u_input.c, u_input.a.x, 4294967295u)), _wgslsmith_dot_vec2_u32(select(vec2<u32>(6312u, 1u), u_input.a, global1.c.c), _wgslsmith_sub_vec2_u32(vec2<u32>(u_input.a.x, 24633u), u_input.a))))) {
        let var_0 = min(countOneBits(0u), u_input.a.x) >> (firstLeadingBit(~u_input.a.x << (4294967295u % 32u)) % 32u);
        var var_1 = func_9(_wgslsmith_mod_u32(~1u, var_0), func_8(func_5(true, _wgslsmith_div_f32(626f, 1f)), ~28788i, global1.a, ~reverseBits(select(global2[_wgslsmith_index_u32(22903u, 15u)], vec4<u32>(12964u, 1u, var_0, 1u), vec4<bool>(global1.c.c, global1.a.c, global1.c.c, false)))), _wgslsmith_div_f32(_wgslsmith_div_f32(global1.d.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global1.a.a.x))), -1000f), func_5(false, _wgslsmith_f_op_f32(trunc(-322f))).a);
        let var_2 = 0i;
        for (var var_3 = 57703i; ; var_3 += 1i) {
            if (LOOP_COUNTERS[23u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
            break;
        }
        loop {
            if (LOOP_COUNTERS[24u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
            var var_3 = global1.c.a;
            break;
        }
    }
    global2 = array<vec4<u32>, 15>();
    global1 = Struct_2(func_5(global1.a.c, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(global1.d.x + global1.c.b)))).c, firstTrailingBit(i32(-1i) * -1i) ^ ((func_5(true, 1000f).c.d | _wgslsmith_clamp_i32(u_input.d, u_input.b.x, u_input.d)) << (4294967295u % 32u)), Struct_1(global0[_wgslsmith_index_u32(abs(countOneBits(u_input.a.x)) << (u_input.c % 32u), 2u)], _wgslsmith_f_op_f32(1411f + -1107f), !global1.c.c, 5327i), vec4<f32>(-1638f, _wgslsmith_f_op_f32(-1000f), _wgslsmith_f_op_f32(-global1.a.a.x), global1.c.b));
    if (true) {
    }
    return func_8(func_8(Struct_2(Struct_1(_wgslsmith_f_op_vec4_f32(global1.c.a - vec4<f32>(494f, global1.c.b, global1.d.x, global1.d.x)), _wgslsmith_f_op_f32(-475f), global1.c.c, -3860i), ~firstTrailingBit(u_input.b.x), Struct_1(vec4<f32>(-1095f, -376f, global1.a.b, global1.a.b), -231f, true, abs(u_input.b.x)), _wgslsmith_f_op_vec4_f32(vec4<f32>(global1.c.a.x, -924f, -906f, global1.a.b) * _wgslsmith_div_vec4_f32(global1.c.a, vec4<f32>(global1.a.a.x, -1059f, global1.d.x, 1000f)))), u_input.d, global1.a, vec4<u32>(firstTrailingBit(u_input.c), _wgslsmith_dot_vec4_u32(vec4<u32>(65142u, 75455u, u_input.a.x, u_input.a.x), vec4<u32>(1u, 77129u, u_input.a.x, 31920u)) >> (_wgslsmith_add_u32(u_input.c, u_input.c) % 32u), ~4294967295u, u_input.c)), _wgslsmith_add_i32(_wgslsmith_clamp_i32(firstTrailingBit(-9709i), ~1i, max(-42587i, i32(-1i) * -5587i)), ~u_input.d), global1.a, vec4<u32>(reverseBits(u_input.c), select(~_wgslsmith_dot_vec2_u32(vec2<u32>(u_input.a.x, u_input.c), vec2<u32>(u_input.a.x, u_input.a.x)), select(max(u_input.a.x, 59231u), 1u, true), func_8(Struct_2(Struct_1(vec4<f32>(-1199f, 348f, global1.c.a.x, global1.c.b), global1.c.b, true, 1i), u_input.b.x, Struct_1(vec4<f32>(global1.c.a.x, global1.d.x, -1371f, global1.a.a.x), 1172f, global1.a.c, u_input.d), vec4<f32>(-670f, global1.a.b, -1000f, global1.a.a.x)), global1.c.d, global1.c, ~global2[_wgslsmith_index_u32(u_input.a.x, 15u)]).a.c), u_input.c, u_input.c));
}

fn func_10(arg_0: Struct_2) -> vec3<bool> {
    let var_0 = -select(vec3<i32>(countOneBits(_wgslsmith_add_i32(global1.b, u_input.d)), max(~u_input.d, ~8502i), _wgslsmith_mult_i32(i32(-2147483648), _wgslsmith_add_i32(global1.b, 103429i))), vec3<i32>(abs(global1.a.d), arg_0.a.d, _wgslsmith_dot_vec2_i32(min(vec2<i32>(27011i, global1.a.d), u_input.b), vec2<i32>(-29422i, -44195i))), vec3<bool>(false, false, global1.a.c));
    switch (var_0.x) {
        default: {
            if (!(!global1.a.c)) {
                global0 = array<vec4<f32>, 2>();
                let var_1 = global1.c;
                global2 = array<vec4<u32>, 15>();
                let var_2 = func_5(var_1.c, _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(1739f - var_1.a.x) * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(global1.c.a.x + 233f) * _wgslsmith_f_op_f32(ceil(arg_0.a.b))))))).a;
            }
        }
    }
    var var_1 = global1.d;
    let var_2 = func_4().a;
    var var_3 = !(!vec3<bool>(global1.c.c, (2147483647i < var_2.d) | arg_0.c.c, !func_9(54201u, arg_0, -573f, var_2)));
    return vec3<bool>(false, true, func_8(arg_0, 41219i, var_2, ~firstLeadingBit(vec4<u32>(u_input.a.x, 0u, u_input.c, u_input.c))).c.c);
}

fn func_3(arg_0: u32) -> i32 {
    loop {
        if (LOOP_COUNTERS[25u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
        var var_0 = _wgslsmith_sub_vec2_i32(_wgslsmith_div_vec2_i32(select(vec2<i32>(-7666i, u_input.b.x), vec2<i32>(global1.a.d, u_input.b.x), vec2<bool>(true, true)) & firstTrailingBit(_wgslsmith_sub_vec2_i32(vec2<i32>(i32(-2147483648), global1.a.d), u_input.b)), select(firstLeadingBit(~u_input.b), _wgslsmith_mod_vec2_i32(~vec2<i32>(-3899i, i32(-2147483648)), abs(u_input.b)), any(vec3<bool>(global1.c.c, false, false)))), u_input.b << ((_wgslsmith_div_vec2_u32(max(vec2<u32>(4294967295u, u_input.a.x), u_input.a), vec2<u32>(u_input.c, u_input.c) & vec2<u32>(arg_0, 1u)) | vec2<u32>(~arg_0, 1u)) % vec2<u32>(32u)));
        var var_1 = !select(!(!select(vec3<bool>(true, true, global1.a.c), vec3<bool>(global1.a.c, global1.c.c, global1.c.c), global1.a.c)), select(func_10(func_4()), !select(vec3<bool>(true, global1.c.c, false), vec3<bool>(global1.a.c, true, false), global1.a.c), func_8(Struct_2(Struct_1(vec4<f32>(global1.d.x, -1000f, global1.c.b, global1.a.a.x), global1.a.a.x, true, 0i), u_input.d, Struct_1(vec4<f32>(global1.c.a.x, 203f, 1401f, -399f), -1131f, global1.a.c, global1.a.d), vec4<f32>(-754f, -177f, global1.a.a.x, global1.c.a.x)), -2147483647i, Struct_1(global0[_wgslsmith_index_u32(u_input.a.x, 2u)], global1.a.b, global1.c.c, 27594i), global2[_wgslsmith_index_u32(~u_input.c, 15u)]).a.c), func_10(func_8(func_8(Struct_2(global1.c, u_input.b.x, global1.c, vec4<f32>(global1.d.x, -1855f, global1.d.x, global1.a.b)), u_input.b.x, global1.c, vec4<u32>(12122u, u_input.a.x, 46987u, arg_0)), -39896i, func_4().c, ~global2[_wgslsmith_index_u32(u_input.c, 15u)])).x);
    }
    if (global1.a.c) {
    }
    for (var var_0 = 30801i; ; var_0 += 1i) {
        if (LOOP_COUNTERS[26u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
        let var_1 = Struct_1(_wgslsmith_f_op_vec4_f32(-global1.a.a), _wgslsmith_div_f32(1378f, _wgslsmith_f_op_f32(abs(1039f))), global1.a.c, _wgslsmith_add_i32(global1.b, ~1i >> (~4294967295u % 32u)));
        let var_2 = _wgslsmith_dot_vec4_u32(select(global2[_wgslsmith_index_u32(_wgslsmith_dot_vec2_u32(~(~u_input.a), vec2<u32>(max(arg_0, arg_0), u_input.a.x)), 15u)], vec4<u32>(~(~u_input.c), 17884u, _wgslsmith_div_u32(5113u, _wgslsmith_dot_vec3_u32(vec3<u32>(u_input.a.x, arg_0, u_input.c), vec3<u32>(0u, 1u, arg_0))), u_input.c), var_1.c), select(~vec4<u32>(~arg_0, 8120u, _wgslsmith_dot_vec3_u32(vec3<u32>(0u, 59429u, u_input.a.x), vec3<u32>(0u, u_input.c, 0u)), arg_0), vec4<u32>((4294967295u << (arg_0 % 32u)) | select(1u, arg_0, false), ~u_input.c, countOneBits(0u & u_input.a.x), _wgslsmith_dot_vec2_u32(u_input.a ^ u_input.a, u_input.a)), select(select(select(vec4<bool>(global1.a.c, false, false, global1.a.c), vec4<bool>(global1.c.c, var_1.c, false, var_1.c), true), !vec4<bool>(false, global1.c.c, var_1.c, var_1.c), false), select(!vec4<bool>(var_1.c, false, global1.a.c, global1.a.c), vec4<bool>(var_1.c, false, true, true), select(vec4<bool>(true, false, false, true), vec4<bool>(global1.c.c, true, false, true), false)), vec4<bool>(u_input.c != 26033u, func_8(Struct_2(Struct_1(global1.a.a, -547f, false, -57047i), var_1.d, var_1, vec4<f32>(1000f, -2346f, 2012f, -1679f)), u_input.b.x, global1.a, vec4<u32>(arg_0, 4294967295u, 1u, 50691u)).a.c, false, var_1.c))));
    }
    loop {
        if (LOOP_COUNTERS[27u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[27u] = LOOP_COUNTERS[27u] + 1u;
        break;
    }
    global0 = array<vec4<f32>, 2>();
    return ~u_input.b.x;
}

fn func_2(arg_0: vec3<u32>) -> Struct_1 {
    global1 = Struct_2(global1.a, func_3(~(~7287u)) ^ u_input.b.x, global1.a, _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(global1.a.a - _wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(max(vec4<f32>(global1.d.x, global1.d.x, -1440f, -262f), vec4<f32>(global1.d.x, global1.c.b, global1.d.x, 659f)))))) - vec4<f32>(-787f, _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(2314f + -676f))), 533f, _wgslsmith_div_f32(_wgslsmith_f_op_f32(-349f * global1.a.b), global1.a.b))));
    if (any(select(vec2<bool>(!(!global1.c.c), any(select(vec4<bool>(true, global1.a.c, global1.c.c, global1.c.c), vec4<bool>(true, true, global1.c.c, global1.c.c), true))), vec2<bool>(global1.c.c, false), true))) {
        let var_0 = abs(1i);
        loop {
            if (LOOP_COUNTERS[28u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[28u] = LOOP_COUNTERS[28u] + 1u;
            var var_1 = vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global1.a.b)), 385f);
            var_1 = _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(select(global1.c.a.wy, _wgslsmith_f_op_vec2_f32(global1.c.a.wx + _wgslsmith_f_op_vec2_f32(vec2<f32>(-3018f, -1023f) - global1.a.a.yz)), vec2<bool>(global1.c.c, true))) * _wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(f32(-1f) * -242f), _wgslsmith_div_f32(-1593f, 1000f)))) - _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-func_8(Struct_2(global1.c, global1.b, global1.c, vec4<f32>(-1348f, var_1.x, global1.d.x, 815f)), var_0, Struct_1(vec4<f32>(global1.d.x, 1005f, -469f, -333f), global1.a.b, true, 0i), global2[_wgslsmith_index_u32(87024u, 15u)]).d.xw)) - vec2<f32>(-357f, _wgslsmith_f_op_f32(select(2305f, _wgslsmith_div_f32(global1.c.a.x, 1000f), true)))));
            var var_2 = func_8(Struct_2(func_5(!(global1.c.c & false), -1423f).a, ~u_input.b.x << (~_wgslsmith_div_u32(u_input.c, 19128u) % 32u), Struct_1(vec4<f32>(var_1.x, _wgslsmith_f_op_f32(f32(-1f) * -731f), global1.d.x, _wgslsmith_f_op_f32(var_1.x - var_1.x)), _wgslsmith_f_op_f32(_wgslsmith_div_f32(-3025f, 223f) - _wgslsmith_f_op_f32(global1.c.a.x + var_1.x)), global1.c.c | any(vec4<bool>(false, global1.c.c, true, true)), -(~var_0)), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-942f, var_1.x, 771f, global1.d.x)) * vec4<f32>(580f, _wgslsmith_f_op_f32(global1.d.x - -2067f), _wgslsmith_f_op_f32(-global1.a.b), _wgslsmith_f_op_f32(floor(var_1.x))))), i32(-2147483648), global1.a, global2[_wgslsmith_index_u32(~countOneBits(_wgslsmith_clamp_u32(u_input.c, firstTrailingBit(50856u), ~arg_0.x)), 15u)]).c;
        }
    }
    var var_0 = func_4();
    let var_1 = Struct_2(Struct_1(vec4<f32>(_wgslsmith_f_op_f32(-global1.a.a.x), -872f, var_0.d.x, _wgslsmith_div_f32(-924f, -383f)), var_0.a.b, true, 37560i), 0i, Struct_1(global1.c.a, _wgslsmith_f_op_f32(-global1.a.a.x), true, ~1694i), vec4<f32>(_wgslsmith_f_op_f32(f32(-1f) * -543f), _wgslsmith_f_op_f32(-1299f + -481f), -271f, func_5(all(!vec4<bool>(true, var_0.c.c, true, false)), global1.a.a.x).a.a.x));
    for (var var_2 = 50506i; true; global1 = Struct_2(func_8(Struct_2(func_5(!var_1.a.c, global1.d.x).a, var_1.a.d, global1.c, _wgslsmith_f_op_vec4_f32(round(func_8(var_1, global1.c.d, Struct_1(var_0.c.a, var_1.a.a.x, var_1.c.c, global1.c.d), global2[_wgslsmith_index_u32(arg_0.x, 15u)]).c.a))), firstTrailingBit(i32(-1i) * -2147483647i), var_0.a, global2[_wgslsmith_index_u32(~4294967295u, 15u)]).a, func_4().a.d, Struct_1(_wgslsmith_f_op_vec4_f32(-global1.d), _wgslsmith_f_op_f32(612f + var_1.d.x), all(select(vec2<bool>(var_0.c.c, global1.c.c), select(vec2<bool>(true, var_0.c.c), vec2<bool>(true, global1.c.c), var_1.a.c), !vec2<bool>(var_0.c.c, true))), 37839i), global1.d)) {
        if (LOOP_COUNTERS[29u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[29u] = LOOP_COUNTERS[29u] + 1u;
        break;
    }
    return var_0.a;
}

fn func_1(arg_0: Struct_1) -> vec3<i32> {
    global1 = Struct_2(func_2(vec3<u32>(u_input.a.x, ~u_input.a.x, u_input.c) << (~(~vec3<u32>(u_input.c, 83901u, u_input.c)) % vec3<u32>(32u))), global1.b | _wgslsmith_add_i32(1i, 39807i), Struct_1(_wgslsmith_f_op_vec4_f32(-global1.d), 1000f, true, min(_wgslsmith_div_i32(~32773i, arg_0.d), _wgslsmith_sub_i32(_wgslsmith_mult_i32(arg_0.d, 22589i), arg_0.d))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(select(vec4<f32>(530f, _wgslsmith_f_op_f32(-arg_0.b), arg_0.b, global1.d.x), _wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_0.a.x, 833f, -163f, -131f)), !vec4<bool>(true, false, arg_0.c, global1.a.c)))));
    if (true) {
        let var_0 = i32(-1i) * -25800i;
        for (var var_1 = abs(_wgslsmith_dot_vec3_i32(-vec3<i32>(arg_0.d, global1.a.d, -1i), select(vec3<i32>(i32(-2147483648), i32(-2147483648), 2147483647i), vec3<i32>(u_input.d, -40737i, var_0), global1.a.c)) & (arg_0.d & func_4().a.d)); var_1 >= 0i; var_1 -= 1i) {
            if (LOOP_COUNTERS[30u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[30u] = LOOP_COUNTERS[30u] + 1u;
            var_1 = arg_0.d;
            var var_2 = u_input.c;
            let var_3 = Struct_2(Struct_1(vec4<f32>(arg_0.b, _wgslsmith_f_op_f32(abs(global1.d.x)), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-519f + global1.d.x))), global1.c.b), 1000f, true, 4506i), 4577i, func_2(~vec3<u32>(_wgslsmith_sub_u32(69622u, u_input.a.x), u_input.a.x, 0u)), vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -177f) + _wgslsmith_div_f32(arg_0.b, global1.a.a.x)), _wgslsmith_f_op_f32(513f - _wgslsmith_div_f32(_wgslsmith_f_op_f32(-global1.a.b), _wgslsmith_f_op_f32(f32(-1f) * -1908f))), _wgslsmith_f_op_f32(ceil(arg_0.b)), arg_0.b));
            break;
        }
        if (!func_6()) {
        }
        switch (17507i) {
            case 0i: {
                return abs(_wgslsmith_add_vec3_i32(vec3<i32>(reverseBits(i32(-2147483648)), func_3(14128u), -(~1i)), vec3<i32>(-42927i, -var_0, u_input.b.x << (65116u % 32u)) << (vec3<u32>(0u, min(0u, u_input.c), ~u_input.c) % vec3<u32>(32u))));
            }
            case -8807i: {
                global1 = func_5(!arg_0.c | !global1.c.c, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_0.a.x - 205f)))));
                global0 = array<vec4<f32>, 2>();
                var var_1 = arg_0.c;
                let var_2 = func_8(Struct_2(Struct_1(func_8(func_8(Struct_2(Struct_1(vec4<f32>(global1.a.b, arg_0.a.x, 1669f, global1.c.a.x), arg_0.a.x, false, global1.c.d), u_input.d, global1.a, global1.a.a), 2147483647i, Struct_1(arg_0.a, global1.c.a.x, arg_0.c, arg_0.d), global2[_wgslsmith_index_u32(8157u, 15u)]), u_input.b.x, Struct_1(global0[_wgslsmith_index_u32(4294967295u, 2u)], global1.c.a.x, global1.c.c, arg_0.d), global2[_wgslsmith_index_u32(0u, 15u)]).a.a, func_5(any(vec3<bool>(false, arg_0.c, false)), _wgslsmith_f_op_f32(trunc(global1.c.b))).d.x, func_5(!global1.a.c, _wgslsmith_f_op_f32(257f - -318f)).c.c, 35867i), var_0 >> (_wgslsmith_add_u32(u_input.a.x, 97218u) % 32u), func_4().a, vec4<f32>(arg_0.b, arg_0.a.x, 1000f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(global1.d.x)) + _wgslsmith_f_op_f32(select(arg_0.b, 921f, true))))), 1i, global1.c, select(vec4<u32>(~u_input.a.x, ~max(18582u, 1u), u_input.c, min(u_input.c, 1u)), ~(~(~global2[_wgslsmith_index_u32(u_input.c, 15u)])), -977f != _wgslsmith_f_op_f32(abs(arg_0.a.x))));
                let var_3 = arg_0.a.x;
            }
            case -17271i: {
                global1 = Struct_2(Struct_1(_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(ceil(-105f)), _wgslsmith_f_op_f32(-1242f - 1000f), _wgslsmith_f_op_f32(-875f), _wgslsmith_f_op_f32(exp2(arg_0.b)))), arg_0.a.x, !func_2(vec3<u32>(63384u, u_input.c, u_input.a.x)).c, 0i), arg_0.d, global1.c, func_4().c.a);
                global0 = array<vec4<f32>, 2>();
                let var_1 = func_2(select(~(vec3<u32>(1u, 0u, u_input.a.x) | vec3<u32>(0u, 34180u, u_input.c)), _wgslsmith_div_vec3_u32(vec3<u32>(u_input.a.x, 0u, u_input.a.x) << (vec3<u32>(4294967295u, 0u, u_input.c) % vec3<u32>(32u)), ~vec3<u32>(0u, 4294967295u, 0u)), !(!vec3<bool>(arg_0.c, false, true))) & _wgslsmith_mod_vec3_u32(vec3<u32>(~u_input.a.x, 13628u, reverseBits(u_input.a.x)), ~_wgslsmith_mult_vec3_u32(vec3<u32>(48049u, u_input.a.x, 4294967295u), vec3<u32>(4294967295u, 0u, u_input.a.x))));
                global0 = array<vec4<f32>, 2>();
            }
            case 1i: {
                let var_1 = ~u_input.a.x;
                global2 = array<vec4<u32>, 15>();
            }
            default: {
                var var_1 = vec2<f32>(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(f32(-1f) * -623f))), _wgslsmith_f_op_f32(-arg_0.b));
                let var_2 = 1i;
                var var_3 = select(func_10(func_5(true, -225f)), !select(!select(vec3<bool>(global1.a.c, true, true), vec3<bool>(true, arg_0.c, global1.a.c), false), !(!vec3<bool>(false, true, global1.a.c)), !(!vec3<bool>(false, false, global1.c.c))), global1.a.c);
            }
        }
        var var_1 = global1.b;
    }
    let var_0 = 1651f;
    for (var var_1 = -13745i; ~(1u & ~_wgslsmith_dot_vec3_u32(vec3<u32>(u_input.a.x, u_input.c, u_input.a.x), vec3<u32>(u_input.c, u_input.a.x, 46488u))) > u_input.c; var_1 = _wgslsmith_sub_i32(i32(-1i) * -1i, 1i)) {
        if (LOOP_COUNTERS[31u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[31u] = LOOP_COUNTERS[31u] + 1u;
        var var_2 = func_4();
        global0 = array<vec4<f32>, 2>();
    }
    if (!global1.a.c) {
        let var_1 = func_2(vec3<u32>(((u_input.a.x & 65280u) & 4294967295u) << ((abs(u_input.a.x) ^ (u_input.c << (0u % 32u))) % 32u), u_input.a.x, 42683u));
        for (var var_2: i32; var_2 == -6856i; ) {
            if (LOOP_COUNTERS[32u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[32u] = LOOP_COUNTERS[32u] + 1u;
            var_2 = ~arg_0.d;
            continue;
        }
        for (var var_2 = 1i; ; var_2 -= 1i) {
            if (LOOP_COUNTERS[33u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[33u] = LOOP_COUNTERS[33u] + 1u;
            let var_3 = func_4().a;
            var var_4 = Struct_1(vec4<f32>(-1833f, var_0, _wgslsmith_div_f32(_wgslsmith_div_f32(arg_0.a.x, _wgslsmith_f_op_f32(1231f - 1744f)), _wgslsmith_f_op_f32(-func_8(Struct_2(var_3, -8252i, Struct_1(var_1.a, 1242f, true, 10923i), var_3.a), var_3.d, Struct_1(vec4<f32>(arg_0.a.x, var_3.a.x, arg_0.b, -758f), -737f, arg_0.c, u_input.d), global2[_wgslsmith_index_u32(u_input.c, 15u)]).c.a.x)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(var_1.a.x * var_1.b) - _wgslsmith_f_op_f32(floor(arg_0.a.x))) * var_3.b)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(abs(var_0)), _wgslsmith_f_op_f32(-var_3.a.x))))) - -355f), !(true | arg_0.c) | true, -_wgslsmith_sub_i32(arg_0.d | arg_0.d, -var_1.d));
            let var_5 = ~(reverseBits(select(vec3<i32>(arg_0.d, -18903i, 801i), vec3<i32>(2147483647i, var_3.d, var_4.d), true) | -vec3<i32>(u_input.d, i32(-2147483648), global1.a.d)) ^ (-abs(vec3<i32>(-1i, arg_0.d, -21480i)) << (_wgslsmith_sub_vec3_u32(vec3<u32>(0u, 0u, u_input.a.x), ~vec3<u32>(u_input.a.x, u_input.a.x, 22893u)) % vec3<u32>(32u))));
        }
        if (var_1.c || true) {
            global0 = array<vec4<f32>, 2>();
            let var_2 = ~(~u_input.a.x) | max(_wgslsmith_sub_u32(~u_input.c & 0u, 77435u), firstLeadingBit(22887u));
        }
    }
    return ~countOneBits(vec3<i32>(_wgslsmith_mod_i32(1i, -8087i), _wgslsmith_dot_vec3_i32(select(vec3<i32>(-12266i, 40459i, u_input.b.x), vec3<i32>(u_input.b.x, arg_0.d, global1.c.d), vec3<bool>(false, true, global1.a.c)), reverseBits(vec3<i32>(u_input.d, -8212i, u_input.b.x))), 39300i));
}

@compute
@workgroup_size(1)
fn main() {
    let var_0 = -abs(vec4<i32>(1i, u_input.b.x, -2147483647i, _wgslsmith_add_i32(global1.c.d, -23390i)) & (select(vec4<i32>(i32(-2147483648), -19367i, u_input.b.x, global1.c.d), vec4<i32>(u_input.b.x, u_input.d, -21769i, -1i), vec4<bool>(global1.c.c, global1.c.c, global1.c.c, global1.a.c)) | ~vec4<i32>(-6320i, 0i, global1.a.d, 40982i)));
    let var_1 = _wgslsmith_sub_vec3_i32(var_0.zxx, -reverseBits(func_1(global1.a)) | -(var_0.ywx << (_wgslsmith_div_vec3_u32(vec3<u32>(u_input.c, u_input.c, u_input.c), vec3<u32>(u_input.a.x, 4294967295u, 1u)) % vec3<u32>(32u))));
    var var_2 = Struct_2(global1.a, var_0.x, Struct_1(vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(global1.a.a.x, 576f)) * 1415f), 626f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(global1.d.x))), 136f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-554f - 1f) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(global1.d.x * -1000f))), false & func_2(min(vec3<u32>(1u, u_input.c, u_input.c), vec3<u32>(3371u, 11142u, 44905u))).c, 68102i), _wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-global1.c.b))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global1.a.a.x)), _wgslsmith_f_op_f32(-165f * global1.d.x), global1.a.a.x) * _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(1039f, global1.a.b, -1000f, 256f)) * _wgslsmith_f_op_vec4_f32(global1.c.a - _wgslsmith_div_vec4_f32(vec4<f32>(global1.d.x, -1960f, global1.c.b, global1.a.a.x), vec4<f32>(global1.a.a.x, 1866f, 961f, global1.d.x))))));
    global2 = array<vec4<u32>, 15>();
    for (var var_3 = i32(-2147483648); var_2.c.c; var_3 += 1i) {
        if (LOOP_COUNTERS[34u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[34u] = LOOP_COUNTERS[34u] + 1u;
        for (var var_4 = -2303i; var_4 < 24972i; var_4 -= 1i) {
            if (LOOP_COUNTERS[35u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[35u] = LOOP_COUNTERS[35u] + 1u;
            var_4 = _wgslsmith_dot_vec4_i32(_wgslsmith_mod_vec4_i32(_wgslsmith_mod_vec4_i32(~var_0, (var_0 ^ vec4<i32>(u_input.b.x, -3810i, var_1.x, 0i)) ^ _wgslsmith_mod_vec4_i32(vec4<i32>(-40656i, i32(-2147483648), var_1.x, 28830i), vec4<i32>(0i, var_1.x, var_2.a.d, -52423i))), var_0), ~vec4<i32>(_wgslsmith_clamp_i32(-u_input.b.x, func_3(u_input.a.x), i32(-1i) * -1i), 49491i, global1.b, -31095i));
            var var_5 = var_2.c.a.x;
            var var_6 = var_0.x & ~0i;
            global0 = array<vec4<f32>, 2>();
        }
        var_2 = func_4();
        loop {
            if (LOOP_COUNTERS[36u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[36u] = LOOP_COUNTERS[36u] + 1u;
            global1 = func_4();
        }
    }
    let x = u_input.a;
    s_output = StorageBuffer(global2[_wgslsmith_index_u32(_wgslsmith_clamp_u32(~83153u >> (~u_input.c % 32u), ~(~u_input.c) >> (~1u % 32u), 4551u), 15u)], -408f, ~1u, _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(global1.d.x, 356f)), vec2<f32>(global1.a.a.x, 1219f))) * _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(149f, -1025f)))), var_2.c.a.zz)), var_0);
}

`;