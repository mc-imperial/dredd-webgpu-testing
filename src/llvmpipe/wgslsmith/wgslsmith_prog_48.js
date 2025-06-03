export const input = [123,158,231,167,73,222,2,9,214,247,103,36,108,177,28,75,93,118,178,148,219,188,220,6,247,136,149,36,181,206,16,158,74,120,140,89,64,85,89,228,155,153,40,176,3,195,161,143,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [123,158,231,167,73,222,2,9,214,247,103,36,108,177,28,75,93,118,178,148,219,188,220,6,247,136,149,36,181,206,16,158,74,120,140,89,64,85,89,228,155,153,40,176,3,195,161,143,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[123,158,231,167,73,222,2,9,214,247,103,36,108,177,28,75,93,118,178,148,219,188,220,6,247,136,149,36,181,206,16,158,74,120,140,89,64,85,89,228,155,153,40,176,3,195,161,143]}
// Seed: 5606200831130646488

struct Struct_1 {
    a: f32,
    b: u32,
    c: u32,
    d: vec3<u32>,
    e: f32,
}

struct Struct_2 {
    a: f32,
}

struct Struct_3 {
    a: vec4<u32>,
    b: vec4<i32>,
}

struct Struct_4 {
    a: Struct_3,
    b: vec4<bool>,
    c: Struct_1,
    d: vec2<bool>,
    e: bool,
}

struct Struct_5 {
    a: vec3<f32>,
    b: vec3<i32>,
    c: f32,
}

struct UniformBuffer {
    a: vec4<i32>,
    b: u32,
    c: vec2<u32>,
    d: i32,
    e: vec2<u32>,
}

struct StorageBuffer {
    a: vec2<f32>,
    b: f32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<f32, 4>;

var<private> global1: array<Struct_4, 32>;

var<private> global2: bool = true;

var<private> global3: vec4<f32>;

var<private> global4: i32;

var<private> LOOP_COUNTERS: array<u32, 20>;

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn func_6(arg_0: Struct_5, arg_1: i32, arg_2: vec4<u32>) -> bool {
    var var_0 = ~_wgslsmith_add_u32(_wgslsmith_div_u32(4774u, abs(~arg_2.x)), 785u);
    for (var var_1: i32; var_1 == 2147483647i; var_1 -= 1i) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        return true;
    }
    global0 = array<f32, 4>();
    var var_1 = global1[_wgslsmith_index_u32(u_input.b >> (abs(u_input.c.x) % 32u), 32u)];
    if (true) {
    }
    return var_1.e;
}

fn func_5(arg_0: Struct_3, arg_1: vec4<bool>) -> f32 {
    global3 = _wgslsmith_div_vec4_f32(vec4<f32>(global3.x, global3.x, global0[_wgslsmith_index_u32(min(abs(arg_0.a.x << (arg_0.a.x % 32u)), _wgslsmith_dot_vec4_u32(vec4<u32>(arg_0.a.x, u_input.c.x, 29811u, 0u) >> (arg_0.a % vec4<u32>(32u)), ~vec4<u32>(1u, 39478u, arg_0.a.x, 4294967295u))), 4u)], global0[_wgslsmith_index_u32(~u_input.e.x ^ ~reverseBits(0u), 4u)]), vec4<f32>(_wgslsmith_f_op_f32(-global3.x), 1000f, _wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(~1u, 4u)] + 294f), -481f));
    var var_0 = _wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(vec2<f32>(global0[_wgslsmith_index_u32(~_wgslsmith_mult_u32(4294967295u, 1u), 4u)], _wgslsmith_f_op_f32(global3.x - _wgslsmith_f_op_f32(f32(-1f) * -438f))) - _wgslsmith_f_op_vec2_f32(vec2<f32>(1129f, 528f) * _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-global3.yy))))));
    var var_1 = ~(~u_input.c.x);
    let var_2 = arg_0;
    if (var_0.x == -2140f) {
        for (var var_3 = 13586i; false; ) {
            if (LOOP_COUNTERS[1u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
            global0 = array<f32, 4>();
            global2 = func_6(Struct_5(_wgslsmith_div_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(round(1056f)), var_0.x, _wgslsmith_f_op_f32(ceil(-1161f))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(global3.x, -313f, -2214f)))), arg_0.b.yyy, 626f), -3538i, var_2.a);
            var var_4 = Struct_5(global3.ywz, ~(~u_input.a.zyz), var_0.x);
            let var_5 = ~(~abs(1u));
        }
        switch (-u_input.a.x) {
            case 1i: {
                var_1 = 0u;
                var var_3 = abs(abs(~firstTrailingBit(var_2.a)));
                var var_4 = -1384i;
            }
            case 0i: {
                return 417f;
            }
            case i32(-2147483648): {
                var var_3 = vec3<u32>(max(~arg_0.a.x, 1u), ~(~var_2.a.x), 0u);
            }
            case -1i: {
                var var_3 = _wgslsmith_div_vec2_u32(~(~select(var_2.a.wz, vec2<u32>(68245u, arg_0.a.x), true)), arg_0.a.xx) ^ min(~_wgslsmith_mult_vec2_u32(~vec2<u32>(17644u, var_2.a.x), u_input.c >> (var_2.a.xz % vec2<u32>(32u))), firstTrailingBit(vec2<u32>(43300u, ~1u)));
                var var_4 = Struct_2(global0[_wgslsmith_index_u32(countOneBits(_wgslsmith_div_u32(var_2.a.x, _wgslsmith_dot_vec4_u32(abs(arg_0.a), arg_0.a))), 4u)]);
                var_0 = global3.xy;
                global0 = array<f32, 4>();
                var_3 = ~vec2<u32>(reverseBits(arg_0.a.x), 26150u);
            }
            default: {
                return global3.x;
            }
        }
        let var_3 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(var_0.x)) - _wgslsmith_div_f32(global3.x, global0[_wgslsmith_index_u32(_wgslsmith_div_u32(arg_0.a.x, 0u), 4u)])) - _wgslsmith_f_op_f32(select(global0[_wgslsmith_index_u32(arg_0.a.x, 4u)], _wgslsmith_f_op_f32(ceil(1888f)), arg_1.x | all(vec4<bool>(true, arg_1.x, true, arg_1.x))))));
    }
    return _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(1u, 4u)]) - -1000f);
}

fn func_4(arg_0: vec4<f32>) -> vec3<f32> {
    if (!(false & select(true, !(34517i != u_input.a.x), !all(vec2<bool>(true, false))))) {
        switch (u_input.a.x >> (_wgslsmith_mult_u32(4294967295u, u_input.e.x) % 32u)) {
            case 2147483647i: {
                global1 = array<Struct_4, 32>();
                var var_0 = _wgslsmith_add_i32(-u_input.a.x << ((_wgslsmith_dot_vec3_u32(vec3<u32>(u_input.b, 1u, 567u), max(vec3<u32>(u_input.c.x, 1u, u_input.e.x), vec3<u32>(u_input.e.x, u_input.e.x, 0u))) >> ((u_input.c.x >> (0u % 32u)) % 32u)) % 32u), reverseBits(-u_input.a.x));
                var_0 = 8108i;
                global3 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(func_5(Struct_3(vec4<u32>(u_input.e.x, u_input.c.x, u_input.e.x, 0u), vec4<i32>(0i, 5477i, u_input.a.x, u_input.d)), vec4<bool>(false, true, true, true))), _wgslsmith_f_op_f32(global3.x * global3.x), global3.x, _wgslsmith_f_op_f32(sign(-434f))))) - _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-arg_0) * vec4<f32>(_wgslsmith_f_op_f32(211f * -290f), _wgslsmith_f_op_f32(-global3.x), _wgslsmith_f_op_f32(f32(-1f) * -227f), -500f)) + vec4<f32>(arg_0.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0.x)), 283f, _wgslsmith_div_f32(_wgslsmith_f_op_f32(round(-1887f)), _wgslsmith_f_op_f32(floor(global0[_wgslsmith_index_u32(65773u, 4u)]))))));
                let var_1 = Struct_5(arg_0.xwz, u_input.a.xyx, global3.x);
            }
            case 0i: {
                global0 = array<f32, 4>();
                let var_0 = _wgslsmith_div_i32(22110i, -(i32(-1i) * -1i));
                var var_1 = _wgslsmith_sub_vec2_i32(_wgslsmith_clamp_vec2_i32(vec2<i32>(7788i, ~(0i)), _wgslsmith_mult_vec2_i32(countOneBits(vec2<i32>(1i, var_0)) & -vec2<i32>(var_0, 1i), u_input.a.xz), u_input.a.zx), u_input.a.xw);
                let var_2 = _wgslsmith_dot_vec3_u32(min(~vec3<u32>(u_input.e.x, 1u, 41222u), select(vec3<u32>(0u, 0u, 22190u), ~vec3<u32>(4294967295u, 11623u, u_input.c.x), true)), abs(_wgslsmith_add_vec3_u32(_wgslsmith_sub_vec3_u32(vec3<u32>(u_input.b, u_input.e.x, 44941u), vec3<u32>(1u, u_input.e.x, u_input.b)), max(vec3<u32>(u_input.e.x, u_input.c.x, 0u), vec3<u32>(0u, 0u, 3141u))))) == (~_wgslsmith_mult_u32(1u, ~u_input.e.x) & 38121u);
            }
            default: {
                let var_0 = global1[_wgslsmith_index_u32(~(u_input.b << (_wgslsmith_clamp_u32(~1u, ~55888u, u_input.e.x) % 32u)) & 18445u, 32u)];
                let var_1 = false;
                var var_2 = -1i;
                var var_3 = _wgslsmith_f_op_vec3_f32(select(arg_0.yyz, _wgslsmith_f_op_vec3_f32(global3.xzz - _wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(-vec3<f32>(global3.x, -2871f, global0[_wgslsmith_index_u32(24143u, 4u)]))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(_wgslsmith_div_f32(global0[_wgslsmith_index_u32(u_input.e.x, 4u)], global0[_wgslsmith_index_u32(9570u, 4u)])))) > _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(665f * arg_0.x) * global0[_wgslsmith_index_u32(var_0.c.d.x, 4u)]) + 1000f)));
            }
        }
        let var_0 = global0[_wgslsmith_index_u32(~_wgslsmith_mult_u32(abs(_wgslsmith_div_u32(u_input.c.x, 4294967295u) ^ ~u_input.b), 0u), 4u)];
        global3 = vec4<f32>(1f, 819f, _wgslsmith_f_op_f32(-914f + _wgslsmith_f_op_f32(round(-819f))), global0[_wgslsmith_index_u32(firstLeadingBit(~u_input.c.x), 4u)]);
        for (var var_1 = -47506i; ; ) {
            if (LOOP_COUNTERS[2u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            break;
        }
        switch (~reverseBits(2147483647i)) {
            default: {
                var var_1 = Struct_3(_wgslsmith_mod_vec4_u32(~vec4<u32>(18738u, ~28588u, u_input.b ^ 95232u, u_input.b), (_wgslsmith_sub_vec4_u32(vec4<u32>(u_input.c.x, u_input.b, u_input.e.x, 42490u), vec4<u32>(36197u, 1u, u_input.c.x, 1u)) >> (vec4<u32>(u_input.e.x, 37499u, u_input.c.x, 0u) % vec4<u32>(32u))) ^ ~_wgslsmith_add_vec4_u32(vec4<u32>(u_input.c.x, u_input.b, 1u, u_input.e.x), vec4<u32>(4294967295u, u_input.b, 1u, 64940u))), u_input.a);
            }
        }
    }
    let var_0 = Struct_2(-1017f);
    if (619f <= _wgslsmith_f_op_f32(min(-974f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(4294967295u, 4u)]) * _wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(u_input.c.x, 4u)])) + _wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(_wgslsmith_clamp_u32(15449u, u_input.e.x, u_input.b), 4u)] * _wgslsmith_f_op_f32(func_5(Struct_3(vec4<u32>(u_input.b, 4294967295u, 4294967295u, u_input.b), u_input.a), vec4<bool>(true, false, true, true)))))))) {
        switch (_wgslsmith_dot_vec3_i32(~vec3<i32>(u_input.a.x, min(15045i, i32(-1i) * -47692i), -u_input.d), _wgslsmith_sub_vec3_i32(vec3<i32>(i32(-2147483648), firstLeadingBit(49862i), ~(~u_input.d)), u_input.a.wwz))) {
            case 0i: {
                let var_1 = !vec2<bool>(false, true && select(true, u_input.e.x >= u_input.e.x, any(vec2<bool>(true, false))));
                return vec3<f32>(504f, -229f, var_0.a);
            }
            case -34371i: {
                global4 = _wgslsmith_sub_i32(firstLeadingBit(u_input.d), -u_input.d);
                let var_1 = firstLeadingBit(~select(~(~vec4<u32>(u_input.b, 74221u, u_input.e.x, 0u)), select(vec4<u32>(72807u, 88555u, u_input.e.x, u_input.e.x), vec4<u32>(u_input.e.x, 1u, 75632u, u_input.b), true) | vec4<u32>(u_input.e.x, u_input.c.x, u_input.b, u_input.c.x), _wgslsmith_f_op_f32(var_0.a + var_0.a) <= _wgslsmith_f_op_f32(-1000f)));
                var var_2 = global1[_wgslsmith_index_u32(~(~u_input.b), 32u)];
                global2 = var_2.e;
                let var_3 = var_0;
            }
            default: {
                global1 = array<Struct_4, 32>();
                global2 = true;
                global1 = array<Struct_4, 32>();
            }
        }
        global4 = ~_wgslsmith_clamp_i32(~_wgslsmith_mult_i32(-16904i, u_input.a.x), firstLeadingBit(~u_input.a.x), u_input.a.x) >> (~_wgslsmith_div_u32(4294967295u, ~_wgslsmith_add_u32(u_input.e.x, 51474u)) % 32u);
        loop {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            continue;
        }
        if (!(~countOneBits(-35744i ^ u_input.d) == firstLeadingBit(i32(-2147483648)))) {
            global2 = select(false, all(select(vec2<bool>(true, true), vec2<bool>(true, true), -1000f <= arg_0.x)), false);
            var var_1 = !(!any(select(vec3<bool>(true, false, true), vec3<bool>(true, true, true), select(vec3<bool>(false, true, false), vec3<bool>(true, false, true), true))));
            global2 = _wgslsmith_add_u32(abs(_wgslsmith_mod_u32(u_input.b, 31971u)), u_input.e.x << (u_input.b % 32u)) > max(1u, min(~_wgslsmith_clamp_u32(9823u, u_input.c.x, 43720u), ~1u));
            global2 = all(!select(vec4<bool>(select(false, true, true), true, all(vec4<bool>(true, false, true, false)), func_6(Struct_5(vec3<f32>(-232f, arg_0.x, 1001f), u_input.a.wyy, arg_0.x), -11936i, vec4<u32>(0u, u_input.c.x, 1u, 62081u))), vec4<bool>(true, all(vec3<bool>(false, false, false)), true, true), all(vec3<bool>(true, true, true))));
        }
    }
    return vec3<f32>(_wgslsmith_f_op_f32(abs(var_0.a)), -991f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_div_f32(var_0.a, _wgslsmith_f_op_f32(var_0.a + -1512f)) + _wgslsmith_f_op_f32(-_wgslsmith_div_f32(584f, var_0.a)))));
}

fn func_3(arg_0: u32, arg_1: bool, arg_2: Struct_4) -> bool {
    let var_0 = _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(global3.xww - _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(func_4(_wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_2.c.e, 1300f, global0[_wgslsmith_index_u32(1u, 4u)], 709f)))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(max(global3.yxy, vec3<f32>(713f, 133f, global0[_wgslsmith_index_u32(4294967295u, 4u)]))))))), global3.xzy, arg_2.b.x));
    global2 = !(!(select(arg_2.b.x, false, false) != true));
    if (false) {
        var var_1 = true;
    }
    var var_1 = 44038u;
    if ((countOneBits(_wgslsmith_dot_vec2_u32(~vec2<u32>(arg_0, 101666u), ~u_input.c)) != (abs(1u << (arg_0 % 32u)) << (1u % 32u))) && false) {
        global0 = array<f32, 4>();
        let var_2 = max(arg_2.a.a.x, firstTrailingBit(66502u));
        for (var var_3 = -1i; ; var_3 -= 1i) {
            if (LOOP_COUNTERS[4u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
            let var_4 = _wgslsmith_f_op_vec2_f32(_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(f32(-1f) * -1000f), _wgslsmith_f_op_f32(-399f))), _wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(-vec2<f32>(global3.x, -333f)), var_0.xx, false))) - _wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-616f - 353f))), -2019f)));
            continue;
        }
        var var_3 = arg_0;
        global0 = array<f32, 4>();
    }
    return !all(arg_2.b);
}

fn func_7(arg_0: bool, arg_1: Struct_4) -> Struct_4 {
    var var_0 = arg_0;
    for (var var_1 = _wgslsmith_mod_i32(u_input.d, -4381i); select(arg_1.e, !arg_1.e, _wgslsmith_f_op_f32(trunc(global0[_wgslsmith_index_u32(23868u, 4u)])) == 888f); var_1 += 1i) {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        let var_2 = _wgslsmith_f_op_vec3_f32(-global3.yxy);
        if (!(!(func_3(arg_1.c.d.x & arg_1.c.b, false, global1[_wgslsmith_index_u32(~u_input.b, 32u)]) == !arg_0))) {
            continue;
        }
        var var_3 = abs(max(_wgslsmith_div_vec3_i32(vec3<i32>(u_input.d, arg_1.a.b.x, u_input.a.x), arg_1.a.b.zwz), u_input.a.wxz) ^ arg_1.a.b.wyw);
        loop {
            if (LOOP_COUNTERS[6u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
            continue;
        }
        let var_4 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(arg_1.c.d.x, 4u)] - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_1.c.e) * _wgslsmith_f_op_f32(f32(-1f) * -527f)))));
    }
    let var_1 = vec4<f32>(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1021f) + _wgslsmith_f_op_f32(f32(-1f) * -709f)))), 1277f, global3.x, -361f);
    var var_2 = arg_1.c;
    switch (-u_input.a.x) {
        case 9937i: {
            let var_3 = Struct_2(_wgslsmith_f_op_f32(1325f + _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-var_1.x), 1418f))));
        }
        case -12125i: {
            var var_3 = arg_0;
            var var_4 = 4294967295u;
            var_3 = arg_1.d.x;
        }
        case 0i: {
            if (true) {
            }
            for (; arg_0; ) {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
            }
            for (var var_3 = 2147483647i; var_3 <= 0i; var_2 = arg_1.c) {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                var var_4 = 857f;
            }
        }
        case -1i: {
            var var_3 = arg_1.b;
            var var_4 = func_3(arg_1.a.a.x, all(select(arg_1.b.zwx, vec3<bool>(true, arg_1.d.x, true), func_3(u_input.c.x, var_3.x, Struct_4(Struct_3(vec4<u32>(81637u, u_input.b, arg_1.c.d.x, 4294967295u), vec4<i32>(arg_1.a.b.x, arg_1.a.b.x, 34782i, 32535i)), arg_1.b, Struct_1(-173f, arg_1.c.d.x, u_input.b, vec3<u32>(arg_1.a.a.x, 1u, u_input.c.x), 723f), var_3.wx, true)))), Struct_4(Struct_3(arg_1.a.a, _wgslsmith_clamp_vec4_i32(vec4<i32>(u_input.d, arg_1.a.b.x, -8447i, arg_1.a.b.x), ~vec4<i32>(0i, u_input.d, u_input.d, -1i), vec4<i32>(u_input.d, -1i, arg_1.a.b.x, u_input.a.x))), select(!(!arg_1.b), vec4<bool>(!arg_0, all(var_3.wxw), false, true), true), arg_1.c, vec2<bool>(!var_3.x, arg_1.e), firstTrailingBit(-arg_1.a.b.x) == firstTrailingBit(arg_1.a.b.x)));
            let var_5 = select(false, true, all(var_3.xzw) & true);
            var var_6 = arg_1.a;
        }
        default: {
        }
    }
    return Struct_4(arg_1.a, select(arg_1.b, select(select(select(arg_1.b, vec4<bool>(arg_1.d.x, false, arg_1.d.x, true), vec4<bool>(arg_1.e, arg_1.e, arg_0, arg_1.d.x)), vec4<bool>(false, arg_0, arg_0, arg_0), true), select(!vec4<bool>(arg_0, true, arg_0, arg_0), !arg_1.b, true), !arg_1.b), false), arg_1.c, select(select(!(!vec2<bool>(false, arg_1.e)), vec2<bool>(true, false), arg_1.d.x), select(arg_1.d, vec2<bool>(true, all(vec2<bool>(false, arg_1.d.x))), select(!arg_0, arg_0, true)), true), all(!(!arg_1.d)));
}

fn func_2(arg_0: u32, arg_1: vec3<i32>, arg_2: i32) -> u32 {
    switch (_wgslsmith_mod_i32(arg_2, arg_2)) {
        case i32(-2147483648): {
            var var_0 = func_7(select(true || (func_3(arg_0, false, global1[_wgslsmith_index_u32(u_input.b, 32u)]) & true), false, false), global1[_wgslsmith_index_u32(u_input.b, 32u)]);
            global1 = array<Struct_4, 32>();
        }
        case -2237i: {
            switch (~_wgslsmith_mod_i32(-abs(59849i), min(~(-1i), _wgslsmith_clamp_i32(u_input.d, arg_1.x, arg_2)) | arg_1.x)) {
                case -44293i: {
                    global1 = array<Struct_4, 32>();
                    var var_0 = Struct_5(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(trunc(global3.xxy)) * _wgslsmith_f_op_vec3_f32(vec3<f32>(299f, 319f, global3.x) * _wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(vec3<f32>(global3.x, global0[_wgslsmith_index_u32(u_input.c.x, 4u)], 348f), global3.xxy) * vec3<f32>(global3.x, global0[_wgslsmith_index_u32(arg_0, 4u)], 721f)))), u_input.a.yww, -2081f);
                    let var_1 = Struct_5(vec3<f32>(_wgslsmith_f_op_f32(floor(var_0.a.x)), _wgslsmith_f_op_vec3_f32(func_4(_wgslsmith_f_op_vec4_f32(vec4<f32>(924f, var_0.a.x, var_0.a.x, 258f) + vec4<f32>(1457f, global0[_wgslsmith_index_u32(12668u, 4u)], global3.x, 232f)))).x, -604f), u_input.a.wyw >> (~(vec3<u32>(6973u, u_input.b, arg_0) ^ reverseBits(vec3<u32>(5926u, u_input.c.x, 116850u))) % vec3<u32>(32u)), -714f);
                    var var_2 = -65349i;
                    global1 = array<Struct_4, 32>();
                }
                case 14267i: {
                    let var_0 = Struct_1(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(_wgslsmith_mod_u32(44376u, 4294967295u), 4u)])) * global0[_wgslsmith_index_u32(~7711u, 4u)]), ~0u, reverseBits(1u & ~arg_0), firstTrailingBit(~countOneBits(abs(vec3<u32>(u_input.c.x, 45324u, 84087u)))), global0[_wgslsmith_index_u32(arg_0, 4u)]);
                }
                case -13030i: {
                    let var_0 = _wgslsmith_dot_vec2_u32(vec2<u32>(~_wgslsmith_dot_vec2_u32(~u_input.c, reverseBits(vec2<u32>(15048u, 0u))), _wgslsmith_mult_u32(1u, 5590u)), reverseBits(func_7(!func_6(Struct_5(global3.zyz, vec3<i32>(arg_2, -87414i, u_input.a.x), -494f), arg_2, vec4<u32>(21479u, 62304u, 4294967295u, u_input.e.x)), Struct_4(Struct_3(vec4<u32>(u_input.e.x, 25963u, u_input.c.x, u_input.c.x), u_input.a), select(vec4<bool>(true, true, false, true), vec4<bool>(false, false, true, true), true), Struct_1(global3.x, u_input.b, arg_0, vec3<u32>(4294967295u, u_input.e.x, 4294967295u), -415f), select(vec2<bool>(false, true), vec2<bool>(true, false), false), true)).a.a.zx));
                    global4 = ~min(-firstTrailingBit(func_7(false, Struct_4(Struct_3(vec4<u32>(10018u, 4294967295u, 3160u, arg_0), u_input.a), vec4<bool>(true, true, true, false), Struct_1(global3.x, arg_0, 0u, vec3<u32>(var_0, 51529u, 0u), 1822f), vec2<bool>(false, true), true)).a.b.x), arg_2);
                }
                default: {
                    var var_0 = Struct_5(vec3<f32>(_wgslsmith_f_op_f32(-236f * global0[_wgslsmith_index_u32(4294967295u, 4u)]), 1167f, 858f), vec3<i32>(~(~_wgslsmith_add_i32(arg_1.x, u_input.a.x)), (-arg_2 | (-13834i ^ arg_2)) >> (_wgslsmith_add_u32(0u, u_input.c.x) % 32u), arg_2), -144f);
                    global3 = _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(vec4<f32>(global0[_wgslsmith_index_u32(4294967295u, 4u)], 1020f, 710f, 980f), vec4<f32>(global0[_wgslsmith_index_u32(arg_0, 4u)], 1461f, 986f, var_0.a.x)) - vec4<f32>(global3.x, 147f, var_0.c, -720f)) - vec4<f32>(_wgslsmith_f_op_f32(-var_0.a.x), _wgslsmith_f_op_f32(-var_0.a.x), global0[_wgslsmith_index_u32(1u | arg_0, 4u)], var_0.c)) - _wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(abs(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-271f, 1292f, 933f, global0[_wgslsmith_index_u32(21987u, 4u)])))), _wgslsmith_f_op_vec4_f32(select(_wgslsmith_div_vec4_f32(vec4<f32>(-226f, -965f, 538f, 1399f), vec4<f32>(-795f, -331f, global3.x, -1002f)), _wgslsmith_f_op_vec4_f32(vec4<f32>(-1026f, global3.x, -1347f, 1254f) * vec4<f32>(global3.x, global3.x, 424f, global3.x)), arg_0 <= 0u))))), _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(global0[_wgslsmith_index_u32(58850u, 4u)], 1733f, 476f, -160f))), _wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(-455f, -1167f, global3.x, var_0.a.x) - vec4<f32>(926f, 726f, global0[_wgslsmith_index_u32(u_input.e.x, 4u)], global0[_wgslsmith_index_u32(arg_0, 4u)])) + _wgslsmith_f_op_vec4_f32(floor(vec4<f32>(global0[_wgslsmith_index_u32(arg_0, 4u)], -1616f, 413f, global0[_wgslsmith_index_u32(23126u, 4u)]))))))));
                    var var_1 = ~(~vec2<i32>(u_input.d, -(~(-31152i))));
                    let var_2 = ~(~vec3<u32>(1u, u_input.b, ~arg_0));
                }
            }
            for (var var_0 = -3124i; false; var_0 += 1i) {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                var var_1 = reverseBits(min(1i, -15951i));
                var var_2 = global3.xw;
                break;
            }
            let var_0 = Struct_3(_wgslsmith_mod_vec4_u32(~vec4<u32>(u_input.e.x, 58651u, 0u, u_input.e.x) | ~min(vec4<u32>(34446u, 1u, u_input.b, 54004u), vec4<u32>(4294967295u, u_input.b, u_input.c.x, u_input.e.x)), vec4<u32>(arg_0, u_input.c.x, ~(~49826u), _wgslsmith_div_u32(countOneBits(arg_0), 1u))), vec4<i32>(_wgslsmith_add_i32(_wgslsmith_add_i32(-26276i, _wgslsmith_clamp_i32(arg_2, arg_2, -1i)), _wgslsmith_sub_i32(~u_input.d, u_input.d)), u_input.a.x, 14329i, arg_2));
            for (var var_1 = i32(-2147483648); select(true, false, all(vec4<bool>(!func_3(1u, true, global1[_wgslsmith_index_u32(arg_0, 32u)]), u_input.e.x < ~u_input.c.x, !all(vec2<bool>(false, true)), ~arg_0 <= u_input.c.x))); ) {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                break;
            }
        }
        default: {
            global4 = ~u_input.d;
            loop {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                let var_0 = u_input.a.zx;
                global3 = _wgslsmith_f_op_vec4_f32(round(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(-vec4<f32>(global3.x, 366f, global0[_wgslsmith_index_u32(13659u, 4u)], global3.x)), vec4<f32>(global0[_wgslsmith_index_u32(arg_0, 4u)], -1135f, global0[_wgslsmith_index_u32(4294967295u, 4u)], global0[_wgslsmith_index_u32(8970u, 4u)]), false))), _wgslsmith_f_op_vec4_f32(-vec4<f32>(-1291f, _wgslsmith_f_op_f32(step(1000f, -1775f)), _wgslsmith_f_op_f32(max(global0[_wgslsmith_index_u32(u_input.e.x, 4u)], global0[_wgslsmith_index_u32(1u, 4u)])), global0[_wgslsmith_index_u32(13710u, 4u)])))));
                global2 = all(select(vec4<bool>(true, true, true, true), !func_7(all(vec3<bool>(true, false, false)), Struct_4(Struct_3(vec4<u32>(arg_0, arg_0, arg_0, arg_0), vec4<i32>(var_0.x, -1i, 0i, 34856i)), vec4<bool>(false, true, true, true), Struct_1(global3.x, arg_0, 20871u, vec3<u32>(arg_0, 4294967295u, 1u), 778f), vec2<bool>(false, false), true)).b, !(!(44270u >= u_input.e.x))));
                let var_1 = select(vec2<bool>(!(!(u_input.c.x > u_input.b)), all(vec2<bool>(true, true)) || false), !select(vec2<bool>(true, var_0.x < 0i), vec2<bool>(true, true), func_3(u_input.c.x, global3.x == 1569f, global1[_wgslsmith_index_u32(~u_input.c.x, 32u)])), any(select(vec2<bool>(true, true), !select(vec2<bool>(true, true), vec2<bool>(false, true), false), all(vec3<bool>(true, true, true)))));
            }
        }
    }
    let var_0 = Struct_3(firstTrailingBit(_wgslsmith_clamp_vec4_u32(vec4<u32>(0u, 103712u, 22047u, u_input.b) >> (~vec4<u32>(4294967295u, arg_0, u_input.c.x, 73965u) % vec4<u32>(32u)), _wgslsmith_mult_vec4_u32(firstLeadingBit(vec4<u32>(u_input.b, u_input.c.x, arg_0, 4294967295u)), abs(vec4<u32>(57722u, arg_0, arg_0, 1u))), reverseBits(~vec4<u32>(u_input.e.x, u_input.c.x, arg_0, 1u)))), ~(-u_input.a ^ vec4<i32>(reverseBits(5626i), arg_2 >> (u_input.e.x % 32u), ~(-17384i), arg_2 >> (0u % 32u))));
    switch (abs(arg_2)) {
        case 2622i: {
        }
        default: {
        }
    }
    if (false) {
        let var_1 = _wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(exp2(func_7(true, Struct_4(var_0, vec4<bool>(true, true, false, false), Struct_1(-1000f, 0u, var_0.a.x, vec3<u32>(12389u, var_0.a.x, var_0.a.x), global3.x), vec2<bool>(false, false), false)).c.e)), _wgslsmith_f_op_f32(-global3.x), _wgslsmith_f_op_f32(f32(-1f) * -1234f)))));
    }
    let var_1 = -294f;
    return 1u;
}

fn func_1() -> Struct_4 {
    let var_0 = ~(~firstTrailingBit(_wgslsmith_div_i32(_wgslsmith_dot_vec3_i32(u_input.a.zxw, vec3<i32>(-5570i, -286i, -22182i)), 1i)));
    let var_1 = Struct_1(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(min(224f, global3.x)))))), ~reverseBits(28839u) | _wgslsmith_add_u32(_wgslsmith_mult_u32(_wgslsmith_sub_u32(u_input.e.x, u_input.c.x), func_2(0u, u_input.a.wwx, u_input.a.x)), 1u), _wgslsmith_dot_vec3_u32(~vec3<u32>(u_input.e.x, 1u, _wgslsmith_add_u32(31444u, 0u)), vec3<u32>(_wgslsmith_mod_u32(_wgslsmith_mod_u32(u_input.e.x, 4294967295u), u_input.c.x), ~(~0u), 0u ^ u_input.c.x)), ~firstTrailingBit(select(vec3<u32>(u_input.c.x, 0u, 4294967295u), vec3<u32>(u_input.e.x, u_input.b, 5082u), true) << (vec3<u32>(u_input.c.x, 1u, u_input.e.x) % vec3<u32>(32u))), _wgslsmith_f_op_f32(round(global3.x)));
    if (false) {
        global3 = _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(-global3.x), _wgslsmith_f_op_f32(f32(-1f) * -271f), global0[_wgslsmith_index_u32(abs(16917u), 4u)], _wgslsmith_f_op_f32(-488f))) + _wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(var_1.e, 1510f, 1000f, var_1.a)))))), _wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(global3.x, global3.x, global3.x, -476f)))))), select(vec4<bool>(any(vec4<bool>(true, true, true, true)), false, !func_7(true, global1[_wgslsmith_index_u32(0u, 32u)]).d.x, select(any(vec3<bool>(false, false, false)), all(vec4<bool>(true, true, true, false)), global3.x != global3.x)), select(vec4<bool>(true, true, true, true), select(select(vec4<bool>(false, true, true, true), vec4<bool>(false, false, true, false), vec4<bool>(true, false, false, false)), vec4<bool>(true, false, false, false), true), vec4<bool>(true, true, true, true)), !(_wgslsmith_f_op_f32(global3.x - global3.x) == var_1.a))));
        if (true) {
            var var_2 = !func_7(true, Struct_4(func_7(true, global1[_wgslsmith_index_u32(4294967295u, 32u)]).a, !func_7(false, global1[_wgslsmith_index_u32(4294967295u, 32u)]).b, Struct_1(_wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(var_1.b, 4u)]), 0u, _wgslsmith_clamp_u32(60330u, u_input.c.x, 38749u), vec3<u32>(1u, var_1.c, u_input.e.x), 238f), vec2<bool>(true, true), !all(vec4<bool>(true, true, true, false)))).d;
            let var_3 = any(!vec4<bool>(!(u_input.c.x == 1u), all(select(vec2<bool>(var_2.x, var_2.x), vec2<bool>(false, var_2.x), vec2<bool>(true, false))), var_2.x, 1u < ~var_1.b));
            let var_4 = var_2.x;
            var var_5 = !var_2.x;
            let var_6 = _wgslsmith_div_vec2_i32(u_input.a.wy, u_input.a.xw);
        }
        let var_2 = !all(vec3<bool>(true, true, true));
        switch (-35570i) {
            default: {
                global3 = _wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(step(vec4<f32>(global3.x, 1139f, var_1.e, global3.x), vec4<f32>(1386f, var_1.a, global0[_wgslsmith_index_u32(u_input.e.x, 4u)], var_1.a))))))))));
                global2 = var_2;
                global0 = array<f32, 4>();
                var var_3 = func_7(var_2 & !var_2, Struct_4(Struct_3(~(~vec4<u32>(4294967295u, 4294967295u, 36613u, 50974u)), func_7(!var_2, Struct_4(Struct_3(vec4<u32>(u_input.b, 37346u, 8122u, u_input.c.x), vec4<i32>(var_0, var_0, u_input.a.x, var_0)), vec4<bool>(false, var_2, var_2, false), var_1, vec2<bool>(var_2, false), var_2)).a.b), select(vec4<bool>(all(vec2<bool>(var_2, var_2)), !var_2, false, func_3(1u, true, Struct_4(Struct_3(vec4<u32>(1u, 4294967295u, u_input.b, 36027u), vec4<i32>(u_input.a.x, var_0, var_0, 12997i)), vec4<bool>(var_2, var_2, var_2, false), var_1, vec2<bool>(true, false), false))), !(!vec4<bool>(true, var_2, true, false)), vec4<bool>(var_2 || true, all(vec4<bool>(true, false, var_2, var_2)), func_3(1u, var_2, Struct_4(Struct_3(vec4<u32>(var_1.c, var_1.d.x, 45263u, u_input.c.x), vec4<i32>(u_input.a.x, u_input.a.x, 6044i, var_0)), vec4<bool>(false, true, var_2, false), Struct_1(979f, var_1.d.x, u_input.e.x, var_1.d, -916f), vec2<bool>(true, true), var_2)), true)), func_7((var_2 && true) && var_2, Struct_4(func_7(true, Struct_4(Struct_3(vec4<u32>(4294967295u, 5505u, var_1.b, 50902u), vec4<i32>(i32(-2147483648), 3825i, 24481i, 19052i)), vec4<bool>(var_2, true, var_2, false), var_1, vec2<bool>(false, true), var_2)).a, select(vec4<bool>(var_2, var_2, var_2, var_2), vec4<bool>(false, true, var_2, false), var_2), Struct_1(191f, var_1.c, 4294967295u, var_1.d, global3.x), vec2<bool>(false, var_2), select(var_2, var_2, false))).c, !(!select(vec2<bool>(true, var_2), vec2<bool>(var_2, true), vec2<bool>(true, true))), all(!(!vec4<bool>(var_2, var_2, true, var_2))))).b.zxx;
            }
        }
    }
    global0 = array<f32, 4>();
    if (func_7(false, global1[_wgslsmith_index_u32(_wgslsmith_div_u32(u_input.b, 4294967295u), 32u)]).b.x != all(select(vec3<bool>(true, select(true, false, false), false), select(select(vec3<bool>(true, false, true), vec3<bool>(false, false, false), vec3<bool>(true, true, false)), vec3<bool>(true, true, true), false), func_7(true, func_7(true, Struct_4(Struct_3(vec4<u32>(var_1.c, u_input.b, u_input.e.x, u_input.b), vec4<i32>(0i, var_0, var_0, u_input.a.x)), vec4<bool>(false, true, true, false), var_1, vec2<bool>(false, true), false))).b.yyx))) {
        let var_2 = false;
        for (var var_3 = -1i; ; var_3 -= 1i) {
            if (LOOP_COUNTERS[12u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
            var var_4 = reverseBits(~_wgslsmith_div_i32(u_input.d, u_input.a.x));
            var var_5 = firstTrailingBit(vec3<u32>(_wgslsmith_mult_u32(_wgslsmith_div_u32(19655u, ~u_input.c.x), _wgslsmith_sub_u32(max(40401u, u_input.b), _wgslsmith_mod_u32(u_input.b, 31499u))), _wgslsmith_mult_u32(_wgslsmith_sub_u32(u_input.b, 52920u) ^ 27479u, ~(0u & var_1.c)), var_1.d.x));
        }
        var var_3 = -682f;
    }
    return global1[_wgslsmith_index_u32(4294967295u, 32u)];
}

fn func_8(arg_0: vec3<f32>, arg_1: Struct_4, arg_2: vec2<u32>) -> u32 {
    global1 = array<Struct_4, 32>();
    let var_0 = func_1().d.x;
    var var_1 = Struct_5(_wgslsmith_f_op_vec3_f32(func_4(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(select(vec4<f32>(arg_1.c.a, -641f, -561f, -321f), vec4<f32>(global0[_wgslsmith_index_u32(4294967295u, 4u)], arg_1.c.a, 1403f, global3.x), false)) * vec4<f32>(arg_1.c.e, -975f, -586f, arg_0.x))))), ~_wgslsmith_sub_vec3_i32(_wgslsmith_mod_vec3_i32(arg_1.a.b.xzz & u_input.a.yxw, vec3<i32>(14962i, u_input.a.x, 2147483647i)), vec3<i32>(2147483647i, 0i, arg_1.a.b.x) >> (_wgslsmith_mult_vec3_u32(vec3<u32>(9118u, 1u, 0u), vec3<u32>(u_input.e.x, 3586u, 1u)) % vec3<u32>(32u))), _wgslsmith_div_f32(-937f, _wgslsmith_f_op_f32(floor(arg_0.x))));
    switch (-3358i) {
        case -3918i: {
            global4 = min(reverseBits(abs(var_1.b.x)), arg_1.a.b.x);
            for (var var_2 = 0i; var_2 != -6495i; var_2 = var_1.b.x) {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                let var_3 = 515f;
                continue;
            }
            switch (_wgslsmith_clamp_i32(1i, 1i, _wgslsmith_clamp_i32(-29273i, -arg_1.a.b.x, u_input.d))) {
                default: {
                }
            }
            let var_2 = func_1().a;
        }
        default: {
            global0 = array<f32, 4>();
            loop {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                break;
            }
        }
    }
    if (var_0) {
        for (var var_2 = 1i; ; var_2 += 1i) {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            global0 = array<f32, 4>();
            let var_3 = global1[_wgslsmith_index_u32(_wgslsmith_div_u32(max(3408u, 1u << (1u % 32u)), _wgslsmith_mult_u32(u_input.b, min(43230u, 1u))), 32u)];
            break;
        }
        var var_2 = -44673i;
        loop {
            if (LOOP_COUNTERS[16u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
            global1 = array<Struct_4, 32>();
        }
        global0 = array<f32, 4>();
        for (; ; ) {
            if (LOOP_COUNTERS[17u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
            continue;
        }
    }
    return ~arg_1.a.a.x;
}

@compute
@workgroup_size(1)
fn main() {
    let var_0 = 1000f;
    loop {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        switch (_wgslsmith_add_i32(u_input.d, -firstTrailingBit(u_input.a.x))) {
            case 20507i: {
                let var_1 = global3.yw;
                var var_2 = var_0;
            }
            case i32(-2147483648): {
                continue;
            }
            case -36978i: {
                global4 = _wgslsmith_mult_i32(_wgslsmith_sub_i32(_wgslsmith_dot_vec3_i32(u_input.a.zwx, countOneBits(~vec3<i32>(u_input.a.x, u_input.a.x, u_input.d))), ~_wgslsmith_clamp_i32(_wgslsmith_dot_vec4_i32(vec4<i32>(9939i, -1i, u_input.a.x, -7747i), vec4<i32>(0i, i32(-2147483648), 25078i, u_input.d)), max(27977i, 4125i), u_input.d)), _wgslsmith_mult_i32(0i, -1i ^ _wgslsmith_div_i32(_wgslsmith_div_i32(-1i, u_input.d), max(i32(-2147483648), u_input.d))));
                break;
            }
            case -1i: {
            }
            default: {
                let var_1 = Struct_1(_wgslsmith_div_f32(137f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -891f)) - global0[_wgslsmith_index_u32(~u_input.c.x & _wgslsmith_dot_vec2_u32(vec2<u32>(1u, 0u), u_input.c), 4u)])), max(u_input.c.x, func_8(vec3<f32>(global3.x, _wgslsmith_f_op_f32(f32(-1f) * -760f), _wgslsmith_f_op_f32(f32(-1f) * -220f)), func_1(), ~vec2<u32>(u_input.e.x, 107008u))), countOneBits(_wgslsmith_mult_u32(~4294967295u, firstTrailingBit(_wgslsmith_dot_vec3_u32(vec3<u32>(98686u, 4294967295u, u_input.c.x), vec3<u32>(29112u, 1u, 1u))))), vec3<u32>(u_input.b, _wgslsmith_dot_vec2_u32(~vec2<u32>(2346u, u_input.b), u_input.e), abs(38706u)) & _wgslsmith_mod_vec3_u32(firstLeadingBit(func_1().a.a.yyw), func_1().c.d), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(1204f + _wgslsmith_f_op_vec3_f32(func_4(_wgslsmith_f_op_vec4_f32(-vec4<f32>(121f, global0[_wgslsmith_index_u32(32233u, 4u)], -978f, global3.x)))).x))));
            }
        }
        break;
    }
    for (var var_1 = i32(-2147483648); ; var_1 += 1i) {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
        if (false) {
            global4 = reverseBits(-u_input.d);
            let var_2 = _wgslsmith_add_u32(_wgslsmith_dot_vec4_u32(vec4<u32>(1u, ~u_input.b << (1u % 32u), 4294967295u ^ ~u_input.c.x, _wgslsmith_mult_u32(u_input.c.x, u_input.c.x) ^ u_input.c.x), ~(vec4<u32>(u_input.c.x, 4294967295u, 35891u, 74012u) & vec4<u32>(u_input.e.x, u_input.c.x, u_input.c.x, 0u)) | ~min(vec4<u32>(0u, u_input.c.x, 43545u, 90645u), vec4<u32>(20397u, 106907u, 450u, 4574u))), u_input.c.x);
            continue;
        }
        continue;
    }
    let var_1 = _wgslsmith_div_u32(_wgslsmith_add_u32(u_input.c.x, ~0u), ~_wgslsmith_dot_vec4_u32(~(~vec4<u32>(41472u, 61757u, u_input.c.x, u_input.e.x)), select(vec4<u32>(u_input.b, u_input.e.x, u_input.b, u_input.b), vec4<u32>(u_input.c.x, u_input.b, 4294967295u, 55896u), vec4<bool>(false, true, false, false)) << (select(vec4<u32>(1u, u_input.c.x, 42724u, 1u), vec4<u32>(u_input.e.x, 4294967295u, 1u, u_input.c.x), vec4<bool>(false, true, true, false)) % vec4<u32>(32u))));
    let var_2 = _wgslsmith_f_op_f32(633f * _wgslsmith_div_f32(-2979f, var_0));
    let x = u_input.a;
    s_output = StorageBuffer(global3.xy, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(var_0, var_2)))) * 439f));
}

`;