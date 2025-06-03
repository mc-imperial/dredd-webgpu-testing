export const input = [19,237,22,160,82,153,198,251,175,7,118,237,160,50,25,82,168,48,4,236,203,23,121,227,166,202,127,80,48,87,202,7,152,29,49,91,156,133,7,233,214,98,160,90,219,171,67,213,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [19,237,22,160,82,153,198,251,175,7,118,237,160,50,25,82,168,48,4,236,203,23,121,227,166,202,127,80,48,87,202,7,152,29,49,91,156,133,7,233,214,98,160,90,219,171,67,213,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[19,237,22,160,82,153,198,251,175,7,118,237,160,50,25,82,168,48,4,236,203,23,121,227,166,202,127,80,48,87,202,7,152,29,49,91,156,133,7,233,214,98,160,90,219,171,67,213]}
// Seed: 2604804803654408020

struct Struct_1 {
    a: vec4<i32>,
}

struct Struct_2 {
    a: Struct_1,
    b: bool,
    c: u32,
}

struct Struct_3 {
    a: vec4<f32>,
    b: u32,
}

struct Struct_4 {
    a: vec4<i32>,
}

struct Struct_5 {
    a: vec2<i32>,
}

struct UniformBuffer {
    a: vec4<i32>,
    b: u32,
    c: vec3<u32>,
    d: i32,
}

struct StorageBuffer {
    a: vec3<f32>,
    b: f32,
    c: u32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: vec4<bool> = vec4<bool>(false, true, true, false);

var<private> global1: Struct_1 = Struct_1(vec4<i32>(i32(-2147483648), i32(-2147483648), 4550i, 1i));

var<private> global2: array<Struct_3, 4>;

var<private> global3: array<u32, 12> = array<u32, 12>(36524u, 4294967295u, 1u, 65619u, 57673u, 24391u, 57563u, 4294967295u, 43994u, 4294967295u, 0u, 0u);

var<private> LOOP_COUNTERS: array<u32, 19>;

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn func_6() -> u32 {
    var var_0 = Struct_4(global1.a);
    let var_1 = Struct_5(u_input.a.wz);
    global0 = select(select(select(!vec4<bool>(global0.x, global0.x, true, false), !vec4<bool>(global0.x, global0.x, false, global0.x), all(select(global0.zwx, global0.yyz, global0.x))), vec4<bool>(false, !global0.x, false, global0.x), !any(global0.yx)), vec4<bool>(global0.x, true, global0.x, true), true);
    for (var var_2: i32; ; var_2 += 1i) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        continue;
    }
    for (var var_2 = 9152i; var_2 == -50471i; var_2 += 1i) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
    }
    return reverseBits(~u_input.c.x);
}

fn func_5(arg_0: Struct_4) -> vec2<f32> {
    if (false) {
        switch (~arg_0.a.x) {
            case 48437i: {
                global3 = array<u32, 12>();
                global0 = select(!select(!select(vec4<bool>(global0.x, global0.x, global0.x, global0.x), vec4<bool>(false, false, true, false), vec4<bool>(false, false, global0.x, false)), select(vec4<bool>(global0.x, true, false, global0.x), vec4<bool>(global0.x, false, false, false), vec4<bool>(global0.x, global0.x, true, true)), select(vec4<bool>(true, true, true, global0.x), vec4<bool>(false, true, global0.x, true), true)), vec4<bool>(global0.x, true, !global0.x, false), select(select(!select(vec4<bool>(global0.x, false, true, global0.x), vec4<bool>(global0.x, global0.x, false, false), vec4<bool>(true, false, true, true)), select(vec4<bool>(false, global0.x, global0.x, global0.x), vec4<bool>(global0.x, global0.x, false, global0.x), select(vec4<bool>(global0.x, true, false, global0.x), vec4<bool>(true, global0.x, true, global0.x), global0.x)), !(u_input.c.x < u_input.b)), vec4<bool>(true, global0.x, true, false), false));
            }
            case -1i: {
            }
            case 0i: {
                var var_0 = arg_0.a.yxz;
                global2 = array<Struct_3, 4>();
                let var_1 = ~_wgslsmith_clamp_u32(_wgslsmith_clamp_u32(abs(_wgslsmith_dot_vec4_u32(vec4<u32>(0u, 20660u, 1u, u_input.c.x), vec4<u32>(110466u, 4294967295u, 1u, u_input.b))), reverseBits(func_6()), u_input.c.x << (func_6() % 32u)), 14832u << (1u % 32u), 1u);
            }
            default: {
            }
        }
        for (; ; ) {
            if (LOOP_COUNTERS[2u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            var var_0 = Struct_2(Struct_1(-arg_0.a), all(vec4<bool>(!all(global0.xy), false, !global0.x, global0.x)), _wgslsmith_clamp_u32(_wgslsmith_dot_vec2_u32(u_input.c.zx, abs(u_input.c.zz)), _wgslsmith_dot_vec3_u32(countOneBits(vec3<u32>(4294967295u, global3[_wgslsmith_index_u32(1u, 12u)], 0u)), _wgslsmith_sub_vec3_u32(vec3<u32>(u_input.b, u_input.c.x, 10768u), u_input.c)), global3[_wgslsmith_index_u32(abs(~global3[_wgslsmith_index_u32(u_input.c.x, 12u)]), 12u)]) << (global3[_wgslsmith_index_u32(~(~4294967295u), 12u)] % 32u));
            var var_1 = Struct_5(arg_0.a.xz);
        }
        switch (arg_0.a.x) {
            case 31301i: {
                var var_0 = vec3<bool>(select(29894u >= _wgslsmith_mult_u32(~global3[_wgslsmith_index_u32(48913u, 12u)], _wgslsmith_mod_u32(0u, u_input.c.x)), true, true), global0.x, all(vec4<bool>(any(!vec4<bool>(global0.x, global0.x, global0.x, false)), any(vec4<bool>(true, global0.x, false, global0.x)), all(vec3<bool>(global0.x, true, false)) || true, all(vec4<bool>(true, true, global0.x, global0.x)))));
                var var_1 = _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(floor(vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -332f)), -1257f, 364f))) + _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(max(vec3<f32>(_wgslsmith_f_op_f32(-882f), _wgslsmith_f_op_f32(-2176f * 311f), _wgslsmith_f_op_f32(f32(-1f) * -1140f)), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(1000f, -473f, 1413f)) - vec3<f32>(-1260f, 754f, 861f))))));
            }
            case 20043i: {
                global3 = array<u32, 12>();
            }
            default: {
                let var_0 = 101841u;
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        let var_0 = all(vec4<bool>((_wgslsmith_mult_u32(0u, u_input.c.x) & ~13111u) >= ~(~0u), true, global0.x, any(!select(vec4<bool>(true, global0.x, global0.x, false), vec4<bool>(false, global0.x, true, false), vec4<bool>(global0.x, global0.x, true, global0.x)))));
    }
    let var_0 = Struct_1(~vec4<i32>(-48680i, _wgslsmith_mult_i32(-1i, -18760i), global1.a.x, _wgslsmith_add_i32(-15756i, -arg_0.a.x)));
    var var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(-822f)));
    loop {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        var var_2 = select(0u, 0u, false);
    }
    return vec2<f32>(_wgslsmith_div_f32(1000f, -339f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(1132f)) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(1241f * -500f))))));
}

fn func_4() -> f32 {
    var var_0 = _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(func_5(Struct_4(global1.a))), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(sign(_wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(-327f, -392f))))) + _wgslsmith_f_op_vec2_f32(vec2<f32>(186f, _wgslsmith_f_op_f32(select(1149f, 1193f, false))) * _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-1232f, -1584f)) * _wgslsmith_f_op_vec2_f32(-vec2<f32>(-810f, -1016f))))));
    switch (1037i) {
        case -1i: {
        }
        case 2147483647i: {
            var var_1 = ~(-(i32(-1i) * -22250i));
            let var_2 = Struct_2(Struct_1(~(-_wgslsmith_mult_vec4_i32(u_input.a, vec4<i32>(-7989i, -1i, -65397i, -1i)))), all(select(vec4<bool>(global0.x, select(false, global0.x, global0.x), 4728i < global1.a.x, global0.x), !select(vec4<bool>(global0.x, global0.x, global0.x, true), vec4<bool>(global0.x, true, true, false), vec4<bool>(global0.x, global0.x, global0.x, global0.x)), select(!vec4<bool>(global0.x, false, global0.x, true), !vec4<bool>(true, global0.x, false, true), all(vec4<bool>(global0.x, global0.x, false, global0.x))))), select(4294967295u, ~abs(~1u), !(!(var_0.x < var_0.x))));
            global0 = vec4<bool>(var_2.b, true, all(global0.xxw) || var_2.b, false);
        }
        case 3062i: {
        }
        default: {
            if (!(!all(global0.ywy))) {
            }
        }
    }
    let var_1 = select(!(!select(!vec4<bool>(global0.x, true, true, false), select(vec4<bool>(false, true, global0.x, false), vec4<bool>(global0.x, false, true, global0.x), vec4<bool>(global0.x, global0.x, false, global0.x)), !vec4<bool>(false, global0.x, global0.x, true))), select(select(!select(vec4<bool>(global0.x, false, global0.x, global0.x), vec4<bool>(global0.x, global0.x, global0.x, global0.x), global0.x), !(!vec4<bool>(true, false, false, global0.x)), global0.x), !select(vec4<bool>(true, true, true, true), vec4<bool>(false, global0.x, false, false), !vec4<bool>(false, false, global0.x, global0.x)), select(all(global0.yx), select(global0.x || true, !global0.x, true != global0.x), false)), global0.x);
    switch (~(~u_input.a.x)) {
        case 2147483647i: {
            global0 = var_1;
            var var_2 = Struct_5(_wgslsmith_clamp_vec2_i32(_wgslsmith_div_vec2_i32(u_input.a.zx, u_input.a.xy), u_input.a.yz, vec2<i32>(u_input.d, abs(u_input.a.x))) ^ global1.a.zw);
            switch (-(~(~(-u_input.a.x)))) {
                case -70760i: {
                    global0 = select(!select(vec4<bool>(all(global0.yx), true | global0.x, any(global0.xzy), false), select(var_1, select(vec4<bool>(false, false, global0.x, var_1.x), var_1, false), true), true), vec4<bool>(true, !all(select(vec3<bool>(true, global0.x, true), vec3<bool>(true, true, global0.x), global0.x)), true, true && all(var_1.zxz)), !var_1);
                    var var_3 = _wgslsmith_f_op_vec4_f32(vec4<f32>(-381f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-511f)), var_0.x, _wgslsmith_f_op_f32(var_0.x - _wgslsmith_f_op_f32(f32(-1f) * -976f))) * _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(1715f, 1476f, var_0.x, -1205f)) - vec4<f32>(var_0.x, var_0.x, _wgslsmith_f_op_f32(max(126f, var_0.x)), var_0.x))));
                    var var_4 = vec4<bool>(all(vec2<bool>(global0.x, any(!var_1))), any(!global0.yw) && false, min(_wgslsmith_div_u32(4294967295u, u_input.b) >> (global3[_wgslsmith_index_u32(~global3[_wgslsmith_index_u32(u_input.c.x, 12u)], 12u)] % 32u), abs(u_input.b)) >= (u_input.b << (_wgslsmith_dot_vec3_u32(~u_input.c, abs(u_input.c)) % 32u)), _wgslsmith_f_op_f32(511f + -1000f) >= _wgslsmith_f_op_f32(-var_3.x));
                    let var_5 = -1i;
                }
                default: {
                    let var_3 = _wgslsmith_mod_i32(countOneBits(var_2.a.x), abs(1i));
                    let var_4 = 1i;
                }
            }
            return _wgslsmith_f_op_f32(min(var_0.x, var_0.x));
        }
        default: {
            loop {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                var var_2 = !(~_wgslsmith_dot_vec2_u32(~u_input.c.zy, u_input.c.zz) != select(u_input.b, func_6(), true));
                continue;
            }
            let var_2 = Struct_4(-u_input.a);
            if (all(select(select(vec3<bool>(var_1.x, global0.x & true, var_1.x), !var_1.zzx, select(select(vec3<bool>(true, true, var_1.x), global0.zyz, vec3<bool>(var_1.x, false, false)), vec3<bool>(global0.x, global0.x, var_1.x), true)), vec3<bool>(any(vec3<bool>(false, true, var_1.x)), true & !global0.x, (-43852i | u_input.d) <= _wgslsmith_dot_vec3_i32(vec3<i32>(global1.a.x, global1.a.x, 46926i), vec3<i32>(-4002i, u_input.a.x, 1i))), (_wgslsmith_clamp_i32(u_input.d, 20913i, u_input.d) << (select(26391u, u_input.b, global0.x) % 32u)) <= _wgslsmith_sub_i32(0i ^ global1.a.x, _wgslsmith_mod_i32(global1.a.x, 10558i))))) {
                var var_3 = Struct_5(abs(abs(vec2<i32>(_wgslsmith_sub_i32(-3888i, -33910i), _wgslsmith_dot_vec3_i32(u_input.a.zwy, vec3<i32>(global1.a.x, -40191i, 22009i))))));
                let var_4 = min(2147483647i, _wgslsmith_add_i32(var_2.a.x << (u_input.c.x % 32u), _wgslsmith_add_i32(_wgslsmith_add_i32(var_2.a.x, ~var_3.a.x), var_3.a.x)));
                global3 = array<u32, 12>();
                global0 = var_1;
            }
            var var_3 = Struct_2(Struct_1(vec4<i32>(-21220i, global1.a.x >> (_wgslsmith_add_u32(1u, u_input.c.x) % 32u), min(7640i, 1i) | global1.a.x, -53046i)), any(var_1), global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(_wgslsmith_sub_u32(min(4294967295u, ~_wgslsmith_div_u32(21069u, u_input.c.x)), ~abs(706u)), 12u)], 12u)]);
        }
    }
    let var_2 = Struct_5(~(~u_input.a.yy >> (_wgslsmith_add_vec2_u32(~u_input.c.xz, u_input.c.zx) % vec2<u32>(32u))));
    return 1000f;
}

fn func_7(arg_0: bool, arg_1: vec2<bool>) -> i32 {
    switch (u_input.a.x) {
        case 43977i: {
            global2 = array<Struct_3, 4>();
        }
        case 2147483647i: {
            let var_0 = select(vec3<bool>(any(select(vec3<bool>(true, true, arg_1.x), !global0.wxw, global0.yzy)), true, global0.x), vec3<bool>(!arg_0, arg_0, true), global0.x);
            global1 = Struct_1(u_input.a);
        }
        default: {
            loop {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                break;
            }
            if (true) {
                global1 = Struct_1(~vec4<i32>(-(~(-70758i)), global1.a.x, countOneBits(~2147483647i), 0i));
                let var_0 = Struct_5(global1.a.zy);
                let var_1 = u_input.a;
                global3 = array<u32, 12>();
                global3 = array<u32, 12>();
            }
            let var_0 = global3[_wgslsmith_index_u32(_wgslsmith_sub_u32(~min(abs(u_input.c.x), global3[_wgslsmith_index_u32(_wgslsmith_dot_vec4_u32(vec4<u32>(4294967295u, u_input.b, 4294967295u, 2996u), vec4<u32>(u_input.c.x, global3[_wgslsmith_index_u32(7396u, 12u)], 4294967295u, 4294967295u)), 12u)]) & u_input.b, 0u), 12u)];
            if (any(select(select(!vec4<bool>(global0.x, true, global0.x, true), vec4<bool>(global0.x, all(global0.xw), false, arg_0), vec4<bool>(true, true, !global0.x, arg_1.x && arg_0)), vec4<bool>(any(select(vec4<bool>(arg_0, arg_1.x, arg_0, false), vec4<bool>(arg_1.x, global0.x, false, global0.x), vec4<bool>(global0.x, false, arg_1.x, arg_1.x))), any(vec2<bool>(true, true)), all(select(vec4<bool>(true, true, false, true), vec4<bool>(arg_0, global0.x, global0.x, false), vec4<bool>(true, true, arg_1.x, true))), !arg_0 || true), any(!vec4<bool>(true, global0.x, arg_1.x, global0.x))))) {
                let var_1 = Struct_4(-u_input.a >> (~vec4<u32>(1710u, u_input.c.x, ~global3[_wgslsmith_index_u32(20771u, 12u)], ~global3[_wgslsmith_index_u32(108951u, 12u)]) % vec4<u32>(32u)));
            }
            for (var var_1 = 20769i; global0.x; var_1 -= 1i) {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                let var_2 = Struct_2(Struct_1(global1.a), false, _wgslsmith_div_u32(31994u, u_input.b));
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        switch (-min(i32(-2147483648), u_input.d)) {
            default: {
                let var_0 = Struct_4(vec4<i32>(global1.a.x, ~(~(u_input.d >> (u_input.c.x % 32u))), 4652i, _wgslsmith_add_i32(18447i, _wgslsmith_mult_i32(-u_input.d, 1i))));
                let var_1 = vec3<f32>(1f, _wgslsmith_f_op_vec2_f32(func_5(var_0)).x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(700f - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-2161f * -1832f) + _wgslsmith_f_op_f32(floor(2937f))))));
                global1 = Struct_1(countOneBits(vec4<i32>(max(abs(i32(-2147483648)), u_input.d), (global1.a.x >> (2836u % 32u)) | u_input.a.x, 0i, _wgslsmith_sub_i32(var_0.a.x, 1i))));
                var var_2 = var_0;
                break;
            }
        }
    }
    var var_0 = true;
    for (var var_1 = -14140i; _wgslsmith_add_u32((0u >> ((global3[_wgslsmith_index_u32(0u, 12u)] << (4294967295u % 32u)) % 32u)) ^ ((global3[_wgslsmith_index_u32(u_input.b, 12u)] ^ global3[_wgslsmith_index_u32(1u, 12u)]) & abs(global3[_wgslsmith_index_u32(41723u, 12u)])), 4294967295u) <= _wgslsmith_mod_u32(u_input.b, global3[_wgslsmith_index_u32(u_input.b, 12u)]); ) {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        loop {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
            global3 = array<u32, 12>();
            var var_2 = _wgslsmith_f_op_f32(-647f);
        }
        var var_2 = 1368f;
        var_2 = _wgslsmith_f_op_f32(-1435f);
        var var_3 = Struct_1(-_wgslsmith_mod_vec4_i32(global1.a, min(_wgslsmith_mod_vec4_i32(u_input.a, vec4<i32>(global1.a.x, u_input.d, global1.a.x, 0i)), vec4<i32>(u_input.a.x, -34931i, u_input.d, global1.a.x))));
    }
    switch (reverseBits(0i)) {
        case 6444i: {
            switch (global1.a.x) {
                case 1i: {
                    let var_1 = Struct_1(vec4<i32>(max(-2416i, ~_wgslsmith_div_i32(u_input.a.x, global1.a.x)), _wgslsmith_sub_i32(u_input.d >> (_wgslsmith_mult_u32(u_input.c.x, global3[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(70195u, 12u)], 12u)]) % 32u), min(global1.a.x, firstLeadingBit(2147483647i))), abs(1i), u_input.d));
                    var var_2 = Struct_2(var_1, !(true | !any(global0.zyw)), abs(38926u));
                    global0 = vec4<bool>(false, false, all(!select(!vec3<bool>(false, var_2.b, global0.x), vec3<bool>(false, arg_1.x, true), all(vec4<bool>(false, arg_0, false, global0.x)))), true);
                    let var_3 = _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(select(vec3<f32>(_wgslsmith_f_op_f32(897f * -272f), _wgslsmith_div_f32(-1343f, -1122f), _wgslsmith_f_op_f32(-1261f)), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(451f, 2144f, -506f)) * _wgslsmith_f_op_vec3_f32(vec3<f32>(1098f, 1000f, -1471f) + vec3<f32>(-301f, -1357f, 1000f))), all(vec3<bool>(true, global0.x, var_2.b)))) + vec3<f32>(_wgslsmith_f_op_f32(abs(1431f)), _wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -866f), 126f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(901f + -1399f) - _wgslsmith_f_op_f32(func_4())))), vec3<f32>(248f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(909f, -450f))) * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(723f))))));
                }
                case -27624i: {
                }
                case -21211i: {
                }
                default: {
                    let var_1 = Struct_2(Struct_1(_wgslsmith_clamp_vec4_i32(vec4<i32>(max(global1.a.x, global1.a.x), global1.a.x | global1.a.x, countOneBits(global1.a.x), min(-14008i, 44679i)), global1.a, _wgslsmith_add_vec4_i32(vec4<i32>(i32(-2147483648), u_input.d, 25031i, global1.a.x), vec4<i32>(-38512i, 2707i, global1.a.x, global1.a.x)))), true, _wgslsmith_div_u32(46488u, u_input.c.x));
                }
            }
            var var_1 = u_input.a.zz | vec2<i32>(u_input.d, firstLeadingBit((i32(-1i) * -9897i) & global1.a.x));
            let var_2 = _wgslsmith_div_u32(82781u, ~global3[_wgslsmith_index_u32(57573u, 12u)]);
            let var_3 = -808f;
        }
        default: {
            let var_1 = firstLeadingBit(vec3<i32>(-1i) * -vec3<i32>(countOneBits(global1.a.x), reverseBits(global1.a.x), _wgslsmith_sub_i32(-1i, 1i)));
            var_0 = global0.x;
        }
    }
    return 1i;
}

fn func_3(arg_0: vec2<i32>) -> bool {
    loop {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        break;
    }
    let var_0 = ~abs(arg_0) & global1.a.yz;
    global3 = array<u32, 12>();
    if (false) {
    }
    switch (func_7(all(vec4<bool>(!global0.x, global0.x, global0.x, all(select(vec3<bool>(global0.x, global0.x, true), global0.yxw, global0.xzw)))), vec2<bool>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(549f, 1828f)) * _wgslsmith_f_op_f32(func_4())) >= _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-553f)), global0.x & global0.x))) {
        default: {
            for (var var_1 = -1i; var_1 < -31598i; global0 = !(!(!select(vec4<bool>(true, false, global0.x, global0.x), !vec4<bool>(global0.x, true, true, false), select(vec4<bool>(false, global0.x, global0.x, global0.x), vec4<bool>(true, true, global0.x, false), vec4<bool>(global0.x, global0.x, global0.x, global0.x)))))) {
                if (LOOP_COUNTERS[12u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
                global1 = Struct_1(vec4<i32>(reverseBits(-max(9743i, arg_0.x)), firstLeadingBit(_wgslsmith_div_i32(global1.a.x, -4936i)), -34362i, i32(-2147483648)));
                break;
            }
            for (var var_1 = -862i; var_1 != 2147483647i; var_1 -= 1i) {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                break;
            }
            var var_1 = vec4<bool>(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-230f), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-360f + 1083f), _wgslsmith_f_op_f32(select(-462f, 319f, global0.x)))))) > _wgslsmith_f_op_f32(sign(860f)), global0.x, true, false);
            global2 = array<Struct_3, 4>();
        }
    }
    return (_wgslsmith_add_u32(_wgslsmith_mod_u32(80916u, 30534u & global3[_wgslsmith_index_u32(0u, 12u)]), _wgslsmith_mult_u32(21268u, _wgslsmith_sub_u32(36909u, 9322u))) > ~max(global3[_wgslsmith_index_u32(14316u, 12u)], 1u)) == select(global0.x, !(global0.x && true), true);
}

fn func_2() -> Struct_1 {
    if (true) {
        let var_0 = func_3(u_input.a.ww);
        loop {
            if (LOOP_COUNTERS[14u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
            var var_1 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(func_4()) + _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(func_4()))));
            global0 = select(vec4<bool>(false, !(!select(var_0, var_0, var_0)), var_0, global0.x), !select(vec4<bool>(true, false, any(vec4<bool>(true, global0.x, true, global0.x)), var_0 && false), select(select(vec4<bool>(global0.x, true, true, true), vec4<bool>(var_0, var_0, global0.x, true), vec4<bool>(false, global0.x, false, global0.x)), select(vec4<bool>(var_0, var_0, true, true), vec4<bool>(false, global0.x, global0.x, global0.x), global0.x), true), global0.x), all(vec4<bool>(true, any(select(vec4<bool>(false, true, true, global0.x), vec4<bool>(false, var_0, global0.x, global0.x), vec4<bool>(false, false, false, global0.x))), all(!global0.wyz), true)));
            global1 = Struct_1(global1.a);
            var var_2 = Struct_2(Struct_1(-vec4<i32>(min(-1i, global1.a.x), global1.a.x, u_input.a.x >> (0u % 32u), global1.a.x)), !(!(~global3[_wgslsmith_index_u32(59014u, 12u)] != ~4294967295u)), ~_wgslsmith_clamp_u32(1u, _wgslsmith_clamp_u32(select(4294967295u, u_input.b, false), 27892u, ~u_input.b), _wgslsmith_dot_vec4_u32(vec4<u32>(u_input.b, 4294967295u, global3[_wgslsmith_index_u32(u_input.b, 12u)], u_input.c.x), vec4<u32>(4294967295u, u_input.c.x, 21780u, u_input.b))));
        }
        for (var var_1 = abs(_wgslsmith_mult_i32(global1.a.x, 15612i ^ (global1.a.x | global1.a.x))); ; global0 = vec4<bool>(true, true, global0.x, var_0)) {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            global1 = Struct_1(global1.a);
        }
    }
    let var_0 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(658f)) * _wgslsmith_f_op_f32(exp2(_wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -1349f), _wgslsmith_f_op_f32(820f - 442f))))), _wgslsmith_f_op_f32(-407f));
    var var_1 = _wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(ceil(-1552f)), _wgslsmith_f_op_f32(-var_0), -1717f));
    if (true & global0.x) {
        let var_2 = min(u_input.a, vec4<i32>(~(i32(-1i) * -global1.a.x), (i32(-1i) * -u_input.a.x) & -1i, ~u_input.d, countOneBits(~(u_input.d ^ i32(-2147483648)))));
        return Struct_1(-var_2);
    }
    if (!global0.x) {
        global1 = Struct_1(global1.a);
    }
    return Struct_1(vec4<i32>(global1.a.x, -u_input.d, func_7(true, global0.xz), 1i));
}

fn func_1(arg_0: vec4<i32>) -> vec2<bool> {
    let var_0 = global0.x;
    if (global0.x) {
        if (false) {
            var var_1 = func_2();
            global2 = array<Struct_3, 4>();
        }
        loop {
            if (LOOP_COUNTERS[16u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        }
        let var_1 = Struct_2(Struct_1(vec4<i32>(_wgslsmith_sub_i32(abs(i32(-2147483648)), countOneBits(arg_0.x)), _wgslsmith_dot_vec4_i32(u_input.a ^ vec4<i32>(arg_0.x, 5627i, i32(-2147483648), global1.a.x), select(arg_0, vec4<i32>(arg_0.x, i32(-2147483648), global1.a.x, 0i), global0.x)), min(-44546i, 29780i), global1.a.x)), !(arg_0.x <= ~(i32(-2147483648))), _wgslsmith_mod_u32(_wgslsmith_clamp_u32(~u_input.b, ~1u, 22076u), global3[_wgslsmith_index_u32(~_wgslsmith_mod_u32(abs(0u), u_input.c.x), 12u)]));
        var var_2 = any(!(!global0.yyx));
        global3 = array<u32, 12>();
    }
    global3 = array<u32, 12>();
    if (!(func_3(global1.a.zz) != (global3[_wgslsmith_index_u32(select(4294967295u, ~11915u, true), 12u)] < ~abs(u_input.c.x)))) {
        global0 = select(vec4<bool>(!(3387u != countOneBits(u_input.c.x)), false, all(select(vec2<bool>(true, true), vec2<bool>(global0.x, global0.x), global0.zz)) && all(global0.yxy), global0.x), select(vec4<bool>(global0.x, false, select(global0.x, true, global0.x) != true, global0.x), vec4<bool>(global0.x, all(select(vec3<bool>(false, global0.x, global0.x), global0.ywy, global0.x)), global3[_wgslsmith_index_u32(~global3[_wgslsmith_index_u32(12440u, 12u)], 12u)] > (u_input.c.x ^ 1u), true), any(global0.wz)), global0.x);
        let var_1 = arg_0.zz;
        global0 = select(select(select(!select(vec4<bool>(true, false, true, global0.x), vec4<bool>(global0.x, false, false, false), true), select(vec4<bool>(global0.x, global0.x, global0.x, true), vec4<bool>(false, false, global0.x, global0.x), !global0.x), vec4<bool>(all(vec3<bool>(false, global0.x, true)), true, all(global0.xzz), true)), !(!(!vec4<bool>(global0.x, global0.x, global0.x, false))), !(!(global1.a.x > var_1.x))), select(vec4<bool>(any(!global0.zy), true, (global0.x != global0.x) & any(global0.zxw), false), vec4<bool>(!global0.x, global0.x, all(global0.xwx), true), false && !(global0.x != false)), global0.x & true);
    }
    global2 = array<Struct_3, 4>();
    return global0.xw;
}

fn func_8(arg_0: vec2<bool>, arg_1: u32, arg_2: i32, arg_3: Struct_3) -> vec2<bool> {
    var var_0 = countOneBits(_wgslsmith_clamp_vec2_u32(select(vec2<u32>(1u, arg_3.b >> (u_input.b % 32u)), ~vec2<u32>(1u, global3[_wgslsmith_index_u32(arg_1, 12u)]), true), u_input.c.zy, u_input.c.zz));
    switch (0i) {
        case -1i: {
            global0 = !vec4<bool>(all(select(vec3<bool>(arg_0.x, false, false), global0.xwy, any(vec4<bool>(global0.x, arg_0.x, false, true)))), select(arg_3.b <= 1u, all(vec3<bool>(arg_0.x, true, true)), arg_0.x) && global0.x, all(vec3<bool>(false, arg_0.x, true)) | (arg_0.x && global0.x), arg_0.x);
            for (var var_1 = -40383i; false; ) {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                var var_2 = func_2();
                var var_3 = global1.a.zz;
                var var_4 = global1.a.x == _wgslsmith_mult_i32(_wgslsmith_dot_vec3_i32(max(vec3<i32>(arg_2, arg_2, 0i), -u_input.a.zzx), vec3<i32>(var_2.a.x, global1.a.x, var_2.a.x) & ~vec3<i32>(5659i, i32(-2147483648), 9860i)), ~(-(u_input.a.x >> (18581u % 32u))));
            }
        }
        case 0i: {
        }
        case i32(-2147483648): {
            if (true) {
            }
            return !vec2<bool>(!arg_0.x, any(select(!vec4<bool>(true, global0.x, true, false), !vec4<bool>(false, false, global0.x, arg_0.x), false)));
        }
        case -976i: {
            switch (~u_input.a.x) {
                default: {
                }
            }
        }
        default: {
            if (func_1(vec4<i32>(_wgslsmith_dot_vec3_i32(~global1.a.zzw, -vec3<i32>(arg_2, global1.a.x, u_input.d)), _wgslsmith_sub_i32(~1i, abs(global1.a.x)), func_7(!global0.x, !global0.xz), 1i)).x || (func_3(select(vec2<i32>(0i, u_input.a.x), vec2<i32>(30208i, u_input.a.x), select(vec2<bool>(arg_0.x, false), global0.zz, global0.zz))) | any(global0.zyx))) {
                var var_1 = Struct_5(u_input.a.ww);
                var var_2 = Struct_5(vec2<i32>(-65009i, -14100i));
            }
            var_0 = vec2<u32>(_wgslsmith_dot_vec3_u32(~max(firstLeadingBit(u_input.c), u_input.c), u_input.c), ~_wgslsmith_dot_vec3_u32(firstTrailingBit(vec3<u32>(40383u, u_input.b, 4294967295u)), _wgslsmith_sub_vec3_u32(~u_input.c, select(u_input.c, u_input.c, global0.zwy))));
            global2 = array<Struct_3, 4>();
            var var_1 = ~_wgslsmith_div_vec4_i32(_wgslsmith_mult_vec4_i32(vec4<i32>(-1i, 1i, -1i, 1973i), global1.a), vec4<i32>(_wgslsmith_sub_i32(global1.a.x, arg_2), -12075i, -23931i, -u_input.d)) << (vec4<u32>(reverseBits(~(arg_1 >> (u_input.c.x % 32u))), ~(~arg_1), ~1u, reverseBits(_wgslsmith_mult_u32(firstLeadingBit(arg_3.b), u_input.b & global3[_wgslsmith_index_u32(var_0.x, 12u)]))) % vec4<u32>(32u));
        }
    }
    let var_1 = ~(~vec3<u32>(countOneBits(_wgslsmith_mod_u32(4294967295u, arg_3.b)), ~reverseBits(arg_1), countOneBits(func_6())));
    if (true) {
        for (var var_2: i32; ; var_2 -= 1i) {
            if (LOOP_COUNTERS[18u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
            let var_3 = vec3<f32>(arg_3.a.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(-2309f, -1000f)), _wgslsmith_f_op_f32(min(757f, _wgslsmith_f_op_f32(-2043f * arg_3.a.x)))))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(arg_3.a.x, arg_3.a.x, arg_0.x)) * -961f))) - -1047f));
            var var_4 = _wgslsmith_f_op_vec2_f32(-arg_3.a.zx);
            let var_5 = !func_1(vec4<i32>(3698i, -(~arg_2), 28991i ^ -global1.a.x, func_2().a.x & _wgslsmith_mod_i32(global1.a.x, i32(-2147483648)))).x;
            var var_6 = -firstLeadingBit(abs(arg_2) ^ countOneBits(arg_2)) ^ -1i;
        }
        let var_2 = func_2();
        let var_3 = var_2;
        return vec2<bool>(arg_0.x, arg_0.x);
    }
    let var_2 = any(!select(!select(vec4<bool>(false, global0.x, true, arg_0.x), vec4<bool>(false, global0.x, global0.x, true), arg_0.x), !(!vec4<bool>(true, true, arg_0.x, false)), func_1(vec4<i32>(i32(-2147483648), global1.a.x, 1i, -26317i)).x));
    return vec2<bool>(!var_2 || false, var_2);
}

@compute
@workgroup_size(1)
fn main() {
    switch ((global1.a.x << (u_input.b % 32u)) | u_input.a.x) {
        case -78020i: {
            global3 = array<u32, 12>();
            let var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1590f - 515f));
            let var_1 = func_8(func_1(u_input.a << (select(~vec4<u32>(global3[_wgslsmith_index_u32(7081u, 12u)], global3[_wgslsmith_index_u32(1u, 12u)], 108238u, u_input.c.x), vec4<u32>(0u, 0u, 0u, 64849u) ^ vec4<u32>(global3[_wgslsmith_index_u32(0u, 12u)], global3[_wgslsmith_index_u32(37750u, 12u)], 0u, 4294967295u), vec4<bool>(true, true, true, true)) % vec4<u32>(32u))), (_wgslsmith_mult_u32(38994u, ~u_input.b) | ~(~28443u)) ^ _wgslsmith_dot_vec3_u32(_wgslsmith_clamp_vec3_u32(u_input.c, u_input.c, select(vec3<u32>(u_input.b, global3[_wgslsmith_index_u32(4352u, 12u)], global3[_wgslsmith_index_u32(0u, 12u)]), vec3<u32>(u_input.c.x, u_input.b, 15583u), vec3<bool>(global0.x, true, false))), abs(vec3<u32>(global3[_wgslsmith_index_u32(u_input.b, 12u)], 6351u, u_input.b))), u_input.d, global2[_wgslsmith_index_u32(global3[_wgslsmith_index_u32(_wgslsmith_dot_vec2_u32(firstTrailingBit(u_input.c.xx) | u_input.c.zy, u_input.c.yz), 12u)], 4u)]);
        }
        case 0i: {
        }
        default: {
            if (any(func_8(vec2<bool>(true, !(global0.x | true)), global3[_wgslsmith_index_u32(53550u, 12u)], global1.a.x, Struct_3(vec4<f32>(_wgslsmith_f_op_f32(-224f), _wgslsmith_f_op_f32(f32(-1f) * -604f), 738f, -1846f), u_input.b)))) {
                let var_0 = 0u;
                let var_1 = _wgslsmith_mod_u32(0u | ~(u_input.b | ~global3[_wgslsmith_index_u32(0u, 12u)]), abs(~(~(~u_input.b))));
            }
            global0 = vec4<bool>(func_8(vec2<bool>(true | func_8(vec2<bool>(global0.x, true), global3[_wgslsmith_index_u32(u_input.c.x, 12u)], global1.a.x, Struct_3(vec4<f32>(-730f, -499f, 1000f, -1018f), global3[_wgslsmith_index_u32(4294967295u, 12u)])).x, true), _wgslsmith_div_u32(func_6(), countOneBits(4294967295u)), -(~_wgslsmith_div_i32(u_input.a.x, 19656i)), Struct_3(_wgslsmith_div_vec4_f32(vec4<f32>(-1498f, 1516f, 338f, 697f), vec4<f32>(373f, -1647f, -1171f, -476f)), ~1u)).x, false, 8323i > u_input.a.x, !all(vec2<bool>(func_3(u_input.a.xw), true || global0.x)));
        }
    }
    let var_0 = func_7(func_1(firstLeadingBit(global1.a)).x, vec2<bool>(any(select(vec2<bool>(global0.x, false), global0.zz, vec2<bool>(global0.x, true))), global0.x)) >> (59638u % 32u);
    global1 = func_2();
    var var_1 = global2[_wgslsmith_index_u32(func_6(), 4u)];
    global0 = vec4<bool>(!(!((u_input.d <= u_input.d) | true)), false, !(!(var_1.a.x < 1355f)), !global0.x);
    global1 = Struct_1(~_wgslsmith_mult_vec4_i32(reverseBits(vec4<i32>(u_input.a.x, global1.a.x, var_0, 1i)), firstLeadingBit(u_input.a)));
    let var_2 = select(_wgslsmith_sub_vec3_i32(vec3<i32>(countOneBits(max(var_0, 43825i)), var_0, 37866i), _wgslsmith_mult_vec3_i32(~vec3<i32>(global1.a.x, global1.a.x, u_input.a.x), u_input.a.wzz)), vec3<i32>(abs(u_input.a.x), -40695i, -(~0i)), !select(select(!vec3<bool>(global0.x, global0.x, global0.x), !vec3<bool>(global0.x, true, false), vec3<bool>(global0.x, global0.x, global0.x)), vec3<bool>(any(vec2<bool>(false, true)), !global0.x, true), select(select(vec3<bool>(global0.x, true, global0.x), global0.xxx, global0.x), !vec3<bool>(false, global0.x, true), global0.x)));
    let var_3 = Struct_3(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(var_1.a * var_1.a), var_1.a, !(!(!vec4<bool>(false, global0.x, global0.x, global0.x))))), ~(~(~1u)));
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(var_1.a.x, _wgslsmith_f_op_f32(-1732f * 537f), _wgslsmith_f_op_f32(var_1.a.x * -1532f)))), _wgslsmith_f_op_f32(f32(-1f) * -1000f), _wgslsmith_add_u32(reverseBits(global3[_wgslsmith_index_u32(100673u, 12u)]), var_3.b));
}

`;