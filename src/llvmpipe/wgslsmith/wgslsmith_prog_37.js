export const input = [137,202,243,193,29,73,7,230,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [137,202,243,193,29,73,7,230,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[137,202,243,193,29,73,7,230]}
// Seed: 15126797565905424384

struct Struct_1 {
    a: vec4<bool>,
    b: u32,
    c: i32,
    d: i32,
}

struct Struct_2 {
    a: Struct_1,
}

struct Struct_3 {
    a: vec2<f32>,
}

struct Struct_4 {
    a: Struct_2,
}

struct UniformBuffer {
    a: i32,
    b: i32,
}

struct StorageBuffer {
    a: vec2<f32>,
    b: vec4<u32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: Struct_3;

var<private> global1: array<Struct_3, 2>;

var<private> global2: array<vec2<f32>, 28> = array<vec2<f32>, 28>(vec2<f32>(1384f, -1190f), vec2<f32>(669f, 376f), vec2<f32>(-666f, -681f), vec2<f32>(1740f, 946f), vec2<f32>(473f, -758f), vec2<f32>(-1737f, 297f), vec2<f32>(-898f, -265f), vec2<f32>(-780f, -1613f), vec2<f32>(1049f, 529f), vec2<f32>(-1461f, -635f), vec2<f32>(-719f, -504f), vec2<f32>(-202f, 2004f), vec2<f32>(-1229f, -541f), vec2<f32>(-135f, -1000f), vec2<f32>(-372f, 155f), vec2<f32>(-960f, 551f), vec2<f32>(-1728f, -925f), vec2<f32>(1472f, 1000f), vec2<f32>(568f, -754f), vec2<f32>(-255f, -1212f), vec2<f32>(-238f, 350f), vec2<f32>(-651f, -1000f), vec2<f32>(-468f, 2172f), vec2<f32>(1850f, -530f), vec2<f32>(-102f, -1235f), vec2<f32>(-737f, -1036f), vec2<f32>(-965f, 1540f), vec2<f32>(-518f, -2387f));

var<private> global3: vec2<bool> = vec2<bool>(false, false);

var<private> global4: Struct_2 = Struct_2(Struct_1(vec4<bool>(true, true, false, false), 4294967295u, 1i, -1i));

var<private> LOOP_COUNTERS: array<u32, 17>;

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn func_5(arg_0: Struct_2) -> vec3<i32> {
    var var_0 = Struct_3(global0.a);
    global1 = array<Struct_3, 2>();
    let var_1 = Struct_1(vec4<bool>(false, !(true & (true || arg_0.a.a.x)), all(vec2<bool>(global4.a.b <= arg_0.a.b, any(vec4<bool>(false, global3.x, global3.x, arg_0.a.a.x)))), all(!(!global4.a.a))), 0u, 2147483647i, global4.a.d);
    global1 = array<Struct_3, 2>();
    return ~(vec3<i32>(_wgslsmith_dot_vec3_i32(_wgslsmith_clamp_vec3_i32(vec3<i32>(0i, global4.a.d, 7860i), vec3<i32>(-34238i, var_1.c, arg_0.a.c), vec3<i32>(-1i, var_1.c, var_1.c)), ~vec3<i32>(var_1.c, var_1.c, 1i)), -1i, arg_0.a.c) << (vec3<u32>(var_1.b, 4294967295u, 0u) % vec3<u32>(32u)));
}

fn func_6() -> vec4<bool> {
    var var_0 = ~(~16429i);
    var var_1 = ~vec4<u32>(_wgslsmith_mult_u32((global4.a.b ^ 0u) | 28405u, global4.a.b), _wgslsmith_div_u32(1u, global4.a.b) & ~_wgslsmith_sub_u32(global4.a.b, 34156u), firstTrailingBit(23158u << (select(global4.a.b, 4294967295u, false) % 32u)), _wgslsmith_mod_u32(4294967295u, global4.a.b));
    global0 = Struct_3(global2[_wgslsmith_index_u32(global4.a.b, 28u)]);
    for (var var_2 = -54196i; true; ) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
    }
    global4 = Struct_2(global4.a);
    return global4.a.a;
}

fn func_7(arg_0: Struct_1, arg_1: f32, arg_2: Struct_1) -> vec2<bool> {
    if (u_input.b != 1i) {
        for (var var_0 = -771i; global3.x; ) {
            if (LOOP_COUNTERS[1u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
            global2 = array<vec2<f32>, 28>();
            break;
        }
        var var_0 = select(vec4<bool>(func_6().x, !(!global3.x), !any(select(arg_0.a.yw, global4.a.a.yy, vec2<bool>(global3.x, global3.x))), ~reverseBits(42184u) > (firstTrailingBit(arg_0.b) & min(arg_2.b, arg_0.b))), vec4<bool>(any(vec4<bool>(!global3.x, true, false, any(arg_2.a.yw))), arg_0.a.x, true, !all(!vec3<bool>(true, false, global4.a.a.x))), global4.a.a);
        var var_1 = true;
        let var_2 = true;
    }
    global2 = array<vec2<f32>, 28>();
    var var_0 = vec4<u32>(firstTrailingBit(4294967295u ^ global4.a.b), 1u, 40288u, (~abs(34666u) >> (~firstTrailingBit(global4.a.b) % 32u)) | _wgslsmith_clamp_u32(36585u, global4.a.b, arg_2.b));
    switch (~(~(-39831i))) {
        case -1i: {
            let var_1 = _wgslsmith_div_u32(1u, ~0u);
            switch (arg_0.c) {
                case 98243i: {
                    global0 = global1[_wgslsmith_index_u32(~firstLeadingBit(var_1), 2u)];
                    let var_2 = _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(-global0.a.x), 1202f, _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(select(global0.a.x, arg_1, global4.a.a.x)), _wgslsmith_f_op_f32(f32(-1f) * -849f)))) * _wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(vec3<f32>(arg_1, -1377f, -1000f), _wgslsmith_f_op_vec3_f32(max(vec3<f32>(989f, 1000f, -1027f), vec3<f32>(574f, 276f, 797f)))))), _wgslsmith_f_op_vec3_f32(step(vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(-963f))), global0.a.x, -736f), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(arg_1, arg_1, global0.a.x))))));
                    let var_3 = !(!vec3<bool>(!(false & arg_0.a.x), all(vec3<bool>(global4.a.a.x, arg_0.a.x, arg_2.a.x)) | global4.a.a.x, global4.a.a.x));
                }
                case 0i: {
                    global2 = array<vec2<f32>, 28>();
                }
                case -63155i: {
                    return vec2<bool>(true, true);
                }
                case 44521i: {
                    global4 = Struct_2(Struct_1(arg_2.a, 89338u, 41204i, (~arg_2.d << (~global4.a.b % 32u)) >> (31210u % 32u)));
                    let var_2 = arg_2.a.wx;
                    let var_3 = Struct_3(_wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(-641f))), _wgslsmith_f_op_f32(_wgslsmith_div_f32(arg_1, arg_1) + _wgslsmith_f_op_f32(-global0.a.x))) + vec2<f32>(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(floor(802f)))), -407f)));
                    global3 = func_6().yz;
                    let var_4 = _wgslsmith_f_op_f32(trunc(global0.a.x));
                }
                default: {
                    global1 = array<Struct_3, 2>();
                    let var_2 = global1[_wgslsmith_index_u32(1u, 2u)];
                }
            }
            for (var var_2 = 1i; ((-(~2147483647i) << (~global4.a.b % 32u)) & 1i) >= -firstTrailingBit(1i & -global4.a.d); global1 = array<Struct_3, 2>()) {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            }
            switch (select(select(-34948i, ~min(-arg_2.d, u_input.a), true), -_wgslsmith_mod_i32(global4.a.c, global4.a.d) << (countOneBits(var_0.x) % 32u), global3.x)) {
                case -1i: {
                    global1 = array<Struct_3, 2>();
                    let var_2 = _wgslsmith_f_op_f32(floor(-1628f)) <= _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -319f) - arg_1);
                    let var_3 = _wgslsmith_mod_vec2_i32(countOneBits(~(vec2<i32>(arg_2.d, arg_2.d) >> (var_0.wz % vec2<u32>(32u)))) | ~(~(-vec2<i32>(u_input.a, arg_0.d))), vec2<i32>(arg_0.d, arg_0.c));
                }
                case 30526i: {
                    let var_2 = _wgslsmith_div_f32(_wgslsmith_div_f32(741f, _wgslsmith_f_op_f32(arg_1 * arg_1)), _wgslsmith_f_op_f32(step(global0.a.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(945f, 533f)) + _wgslsmith_f_op_f32(max(515f, 2473f)))))));
                    let var_3 = firstLeadingBit(var_0.zw);
                    var var_4 = (vec4<u32>(reverseBits(arg_0.b), max(~1u, _wgslsmith_sub_u32(global4.a.b, 30489u)), 49497u, 62945u) | _wgslsmith_mult_vec4_u32(vec4<u32>(var_1, _wgslsmith_add_u32(var_0.x, 746u), ~var_1, 1u), vec4<u32>(var_1, _wgslsmith_dot_vec2_u32(vec2<u32>(4294967295u, arg_2.b), var_3), var_3.x, var_1))) & _wgslsmith_add_vec4_u32(abs(vec4<u32>(1u, ~global4.a.b, 3265u & arg_0.b, ~0u)), vec4<u32>(arg_0.b, _wgslsmith_add_u32(~arg_2.b, ~var_0.x), 66073u, global4.a.b));
                    var var_5 = vec3<i32>(_wgslsmith_mod_i32(abs(func_5(Struct_2(Struct_1(arg_2.a, 0u, arg_0.c, -1i))).x), _wgslsmith_mult_i32(firstTrailingBit(22191i), arg_2.d << (var_0.x % 32u))), arg_2.d, -arg_2.d) ^ vec3<i32>(_wgslsmith_clamp_i32(abs(min(1i, arg_2.d)), _wgslsmith_dot_vec4_i32(vec4<i32>(2400i, global4.a.c, arg_0.c, u_input.a), -vec4<i32>(-13334i, arg_0.c, 0i, u_input.b)), ~_wgslsmith_dot_vec4_i32(vec4<i32>(arg_2.d, -97408i, global4.a.c, 2147483647i), vec4<i32>(arg_0.d, 2147483647i, 6374i, 1i))), -arg_2.d, _wgslsmith_sub_i32(firstLeadingBit(_wgslsmith_add_i32(global4.a.c, 1i)), global4.a.d));
                }
                case 5187i: {
                    let var_2 = global1[_wgslsmith_index_u32(~(global4.a.b ^ firstLeadingBit(var_0.x)), 2u)];
                    global3 = global4.a.a.xw;
                    global3 = vec2<bool>(false, global4.a.a.x);
                    var var_3 = global1[_wgslsmith_index_u32(_wgslsmith_clamp_u32(_wgslsmith_add_u32(_wgslsmith_mod_u32(_wgslsmith_dot_vec2_u32(var_0.yz, ~vec2<u32>(20627u, var_0.x)), var_0.x << (firstLeadingBit(4294967295u) % 32u)), 1u), var_1, _wgslsmith_mult_u32(~((arg_2.b ^ arg_2.b) & _wgslsmith_mod_u32(0u, 106816u)), arg_0.b)), 2u)];
                }
                case 1i: {
                    var var_2 = countOneBits(80219u) >> (~firstTrailingBit(~global4.a.b) % 32u);
                    let var_3 = global1[_wgslsmith_index_u32(var_0.x, 2u)];
                }
                default: {
                    var var_2 = !func_6().x;
                    let var_3 = vec3<i32>(global4.a.d, _wgslsmith_mod_i32(countOneBits(31661i), 1i), _wgslsmith_add_i32(u_input.a, firstTrailingBit(~arg_0.c))) ^ ~_wgslsmith_div_vec3_i32(_wgslsmith_div_vec3_i32(vec3<i32>(global4.a.c, 0i, u_input.b), _wgslsmith_div_vec3_i32(vec3<i32>(u_input.b, u_input.b, u_input.a), vec3<i32>(3666i, 2147483647i, -17379i))), vec3<i32>(_wgslsmith_dot_vec3_i32(vec3<i32>(18857i, 15993i, 2147483647i), vec3<i32>(global4.a.c, global4.a.d, arg_2.c)), reverseBits(arg_0.d), arg_2.d));
                }
            }
        }
        case 0i: {
        }
        case 21254i: {
            global4 = Struct_2(global4.a);
            var var_1 = Struct_2(arg_0);
            global0 = global1[_wgslsmith_index_u32(_wgslsmith_clamp_u32(var_0.x, ~0u, (13919u ^ arg_0.b) << (select(~(~arg_2.b), min(global4.a.b, var_0.x), arg_0.d > _wgslsmith_mod_i32(-23684i, -1i)) % 32u)), 2u)];
            loop {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
                global4 = Struct_2(var_1.a);
                var var_2 = true;
                let var_3 = min(1u, 4294967295u | ~_wgslsmith_add_u32(global4.a.b >> (arg_2.b % 32u), arg_2.b));
                var_0 = ~(~vec4<u32>(var_1.a.b, ~(~var_0.x), _wgslsmith_dot_vec4_u32(vec4<u32>(4294967295u, arg_0.b, 51254u, 34997u), vec4<u32>(arg_2.b, arg_0.b, 4294967295u, var_0.x)), firstTrailingBit(~4080u)));
            }
        }
        case -262i: {
            global3 = !arg_2.a.yy;
            let var_1 = select(global4.a.a.wwx, global4.a.a.yww, vec3<bool>(func_6().x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(global0.a.x - -1000f) * global0.a.x) > _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(f32(-1f) * -343f))), arg_0.a.x));
        }
        default: {
            return !(!arg_2.a.zw);
        }
    }
    loop {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        loop {
            if (LOOP_COUNTERS[5u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
            let var_1 = _wgslsmith_clamp_vec2_i32(vec2<i32>(func_5(Struct_2(Struct_1(arg_2.a, var_0.x, global4.a.c, 0i))).x, _wgslsmith_mod_i32(1i, -2147483647i)), -reverseBits(vec2<i32>(u_input.b, 1i)), vec2<i32>(global4.a.c, -_wgslsmith_sub_i32(global4.a.c, 16088i))) ^ ~(~firstTrailingBit(~vec2<i32>(1i, -6185i)));
        }
        global1 = array<Struct_3, 2>();
    }
    return arg_2.a.yz;
}

fn func_4() -> Struct_1 {
    let var_0 = global3.x;
    let var_1 = _wgslsmith_div_vec4_i32(vec4<i32>(global4.a.c, ~global4.a.d, _wgslsmith_dot_vec3_i32(vec3<i32>(u_input.a, 6634i, 42845i), abs(vec3<i32>(global4.a.d, global4.a.c, u_input.a))), -64035i), _wgslsmith_add_vec4_i32(firstTrailingBit(vec4<i32>(global4.a.d, i32(-2147483648), 1i, -58765i)) << (vec4<u32>(global4.a.b, global4.a.b, 0u, global4.a.b) % vec4<u32>(32u)), select(vec4<i32>(2147483647i, u_input.a, global4.a.d, global4.a.d), countOneBits(vec4<i32>(0i, global4.a.d, 2147483647i, 0i)), select(global4.a.a, global4.a.a, vec4<bool>(global3.x, false, global4.a.a.x, false))))) >> (vec4<u32>(countOneBits(max(global4.a.b, 4294967295u) ^ (22899u & global4.a.b)), global4.a.b, 1u, global4.a.b) % vec4<u32>(32u));
    for (var var_2 = 0i; var_2 <= -19683i; var_2 += 1i) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        global1 = array<Struct_3, 2>();
        break;
    }
    switch (~var_1.x) {
        case 2253i: {
            loop {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                let var_2 = max(_wgslsmith_dot_vec3_i32(min(func_5(Struct_2(Struct_1(vec4<bool>(global3.x, false, global3.x, true), global4.a.b, 0i, var_1.x))), var_1.zwz) | _wgslsmith_add_vec3_i32(countOneBits(var_1.zwx), select(vec3<i32>(0i, u_input.a, var_1.x), var_1.wyx, false)), vec3<i32>(40250i, var_1.x & var_1.x, 2147483647i)), global4.a.c);
            }
            let var_2 = global1[_wgslsmith_index_u32(global4.a.b, 2u)];
            global1 = array<Struct_3, 2>();
            global2 = array<vec2<f32>, 28>();
        }
        case -1i: {
            var var_2 = ~_wgslsmith_mult_vec2_u32(vec2<u32>(_wgslsmith_mod_u32(52792u, global4.a.b), global4.a.b << (1u % 32u)) >> (vec2<u32>(0u ^ global4.a.b, 32595u) % vec2<u32>(32u)), countOneBits(_wgslsmith_mod_vec2_u32(min(vec2<u32>(2343u, global4.a.b), vec2<u32>(global4.a.b, 12089u)), ~vec2<u32>(global4.a.b, global4.a.b))));
            for (var var_3 = -10875i; var_3 != 1i; var_3 -= 1i) {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                let var_4 = any(vec4<bool>(true, global3.x, false, true));
                global3 = !func_7(Struct_1(func_6(), ~(~1u), i32(-1i) * -2063i, u_input.b), global0.a.x, global4.a);
                global1 = array<Struct_3, 2>();
                var var_5 = _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(-vec3<f32>(global0.a.x, -265f, global0.a.x)))))) * _wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(-global0.a.x), _wgslsmith_f_op_f32(exp2(global0.a.x)), _wgslsmith_f_op_f32(ceil(1822f))))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(1535f, 290f, global0.a.x)) * vec3<f32>(global0.a.x, global0.a.x, -977f))) + _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(215f, 1275f, -1000f) + vec3<f32>(299f, global0.a.x, global0.a.x))) - _wgslsmith_f_op_vec3_f32(-vec3<f32>(global0.a.x, 924f, global0.a.x)))));
            }
        }
        default: {
            global4 = Struct_2(global4.a);
            global1 = array<Struct_3, 2>();
            let var_2 = Struct_2(Struct_1(select(vec4<bool>(false, true, false, all(vec2<bool>(false, global3.x))), global4.a.a, select(u_input.b > -1i, global4.a.a.x, !global3.x)), 37568u, abs(var_1.x), global4.a.c));
            let var_3 = global0.a.x;
            let var_4 = var_2.a;
        }
    }
    switch (global4.a.c) {
        default: {
            if (any(select(vec4<bool>(false, global3.x != (global4.a.b <= global4.a.b), func_7(Struct_1(vec4<bool>(true, global4.a.a.x, global4.a.a.x, true), 1u, 0i, -1i), 1f, Struct_1(vec4<bool>(global3.x, global4.a.a.x, false, global3.x), global4.a.b, var_1.x, var_1.x)).x, any(global4.a.a.wz)), vec4<bool>(global4.a.a.x, true, _wgslsmith_div_i32(-45372i, global4.a.c) >= _wgslsmith_div_i32(var_1.x, var_1.x), true & global4.a.a.x), select(global4.a.a, !(!global4.a.a), select(true, !global4.a.a.x, true))))) {
            }
            var var_2 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(global2[_wgslsmith_index_u32(_wgslsmith_dot_vec2_u32(vec2<u32>(10908u, global4.a.b), abs(vec2<u32>(global4.a.b, 21038u))), 28u)] - vec2<f32>(global0.a.x, _wgslsmith_div_f32(534f, -646f))))));
            let var_3 = !(global4.a.a.x != false);
            let var_4 = false;
        }
    }
    return Struct_1(!vec4<bool>(global3.x, !global4.a.a.x == true, any(func_6().wxw), false), 82529u, -var_1.x, min(countOneBits(var_1.x), _wgslsmith_clamp_i32(-6161i, global4.a.d, -var_1.x)));
}

fn func_3(arg_0: Struct_2, arg_1: i32, arg_2: Struct_4, arg_3: vec3<u32>) -> vec4<u32> {
    var var_0 = func_4();
    var_0 = global4.a;
    var var_1 = arg_2.a.a.b;
    var_0 = func_4();
    var var_2 = arg_2;
    return _wgslsmith_add_vec4_u32(vec4<u32>(~_wgslsmith_dot_vec2_u32(vec2<u32>(arg_3.x, 796u), vec2<u32>(global4.a.b, 4294967295u)) >> (~32299u % 32u), 4294967295u, 1u, var_0.b << (~_wgslsmith_dot_vec4_u32(vec4<u32>(arg_3.x, 1u, 0u, 0u), vec4<u32>(4294967295u, 4294967295u, arg_0.a.b, 1u)) % 32u)), abs(vec4<u32>(_wgslsmith_sub_u32(_wgslsmith_dot_vec3_u32(vec3<u32>(arg_2.a.a.b, arg_3.x, arg_0.a.b), arg_3), _wgslsmith_sub_u32(1u, 0u)), global4.a.b, 1u, var_2.a.a.b << (min(arg_3.x, arg_3.x) % 32u))));
}

fn func_8(arg_0: vec4<u32>, arg_1: Struct_4, arg_2: Struct_4, arg_3: Struct_2) -> Struct_3 {
    if (false) {
        var var_0 = global1[_wgslsmith_index_u32(_wgslsmith_div_u32(0u, max(64435u, arg_1.a.a.b) & 1u), 2u)];
        var var_1 = 1803f;
        for (var var_2 = -2181i; all(!vec3<bool>(true, true, arg_1.a.a.a.x)); var_2 -= 1i) {
            if (LOOP_COUNTERS[9u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
            var var_3 = !(!vec2<bool>(func_4().a.x, all(select(arg_3.a.a, arg_2.a.a.a, true))));
            global0 = Struct_3(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(_wgslsmith_div_vec2_f32(vec2<f32>(1513f, 818f), vec2<f32>(var_0.a.x, 659f)) * _wgslsmith_f_op_vec2_f32(max(vec2<f32>(var_0.a.x, global0.a.x), var_0.a))))) + vec2<f32>(var_0.a.x, _wgslsmith_f_op_f32(sign(global0.a.x)))));
            break;
        }
    }
    switch (-7352i) {
        case 43964i: {
            global1 = array<Struct_3, 2>();
            return Struct_3(global2[_wgslsmith_index_u32(1u, 28u)]);
        }
        default: {
            var var_0 = Struct_2(arg_1.a.a);
            switch (-global4.a.c) {
                default: {
                    let var_1 = (~_wgslsmith_sub_vec4_i32(abs(vec4<i32>(-11293i, -5749i, global4.a.d, arg_2.a.a.c)), vec4<i32>(arg_1.a.a.c, arg_3.a.d, global4.a.d, 41466i)) >> (arg_0 % vec4<u32>(32u))) >> (~arg_0 % vec4<u32>(32u));
                    global0 = Struct_3(global2[_wgslsmith_index_u32(83946u, 28u)]);
                    let var_2 = Struct_4(Struct_2(arg_3.a));
                    global1 = array<Struct_3, 2>();
                    global1 = array<Struct_3, 2>();
                }
            }
        }
    }
    let var_0 = _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(abs(vec4<f32>(-1258f, _wgslsmith_f_op_f32(global0.a.x + _wgslsmith_f_op_f32(sign(933f))), global0.a.x, _wgslsmith_f_op_f32(sign(global0.a.x))))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(-vec4<f32>(global0.a.x, 1060f, global0.a.x, global0.a.x)))) * vec4<f32>(_wgslsmith_f_op_f32(-380f), global0.a.x, _wgslsmith_f_op_f32(round(1045f)), -1264f))));
    switch (~reverseBits(_wgslsmith_mult_i32(-global4.a.d, abs(-1i)))) {
        case 19141i: {
        }
        case -34817i: {
            let var_1 = select(!(arg_3.a.a.x == arg_3.a.a.x), func_4().a.x, !all(!arg_1.a.a.a.xxz));
            var var_2 = _wgslsmith_clamp_u32(~30167u, ~arg_2.a.a.b, arg_0.x);
            let var_3 = vec3<f32>(_wgslsmith_f_op_f32(var_0.x + _wgslsmith_f_op_f32(f32(-1f) * -585f)), -1174f, _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(var_0.x - global0.a.x), -1510f, true)))), _wgslsmith_f_op_f32(-var_0.x))));
            if (arg_3.a.a.x) {
                var_2 = 10538u;
                var var_4 = firstLeadingBit(_wgslsmith_mod_i32(-5135i, -func_5(arg_3).x)) << (~92153u % 32u);
            }
        }
        case 0i: {
            let var_1 = _wgslsmith_f_op_vec3_f32(-vec3<f32>(var_0.x, _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(217f - _wgslsmith_f_op_f32(-1621f)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(global0.a.x)))));
        }
        default: {
        }
    }
    var var_1 = Struct_4(arg_1.a);
    return global1[_wgslsmith_index_u32(21944u, 2u)];
}

fn func_2(arg_0: i32, arg_1: Struct_3, arg_2: u32) -> bool {
    let var_0 = func_8(func_3(Struct_2(global4.a), arg_0, Struct_4(Struct_2(global4.a)), _wgslsmith_add_vec3_u32(vec3<u32>(arg_2, arg_2, 0u), vec3<u32>(4294967295u, global4.a.b, 0u) | ~vec3<u32>(global4.a.b, arg_2, arg_2))), Struct_4(Struct_2(func_4())), Struct_4(Struct_2(func_4())), Struct_2(func_4()));
    let var_1 = _wgslsmith_dot_vec2_u32(select(~_wgslsmith_add_vec2_u32(vec2<u32>(73459u, 67086u), select(vec2<u32>(43118u, 4294967295u), vec2<u32>(global4.a.b, arg_2), global4.a.a.xx)), ~firstLeadingBit(vec2<u32>(arg_2, 63325u)), vec2<bool>(any(global4.a.a.wxy), !(global4.a.c >= i32(-2147483648)))), vec2<u32>(50487u, arg_2));
    var var_2 = _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(vec4<f32>(global0.a.x, arg_1.a.x, global0.a.x, global0.a.x) + vec4<f32>(var_0.a.x, -564f, var_0.a.x, 667f)))) * _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(-257f, 1310f, -728f, global0.a.x)))) + _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(var_0.a.x, global0.a.x, -710f, 1406f))))), _wgslsmith_f_op_vec4_f32(select(vec4<f32>(-1155f, _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(var_0.a.x - arg_1.a.x))), var_0.a.x, var_0.a.x), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(981f, -613f, 986f, 559f) * vec4<f32>(890f, arg_1.a.x, -993f, 783f)))), !func_4().a.x)), func_4().a));
    loop {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        break;
    }
    for (var var_3 = 106i; !func_6().x; var_3 += 1i) {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        continue;
    }
    return any(vec4<bool>(true, global4.a.a.x, select(true, global4.a.a.x, true) | !(!global4.a.a.x), true));
}

fn func_1(arg_0: vec2<f32>, arg_1: i32) -> u32 {
    let var_0 = vec2<i32>(arg_1, -57306i);
    if (func_2(u_input.a, Struct_3(_wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(arg_0 + vec2<f32>(global0.a.x, global0.a.x)), _wgslsmith_f_op_vec2_f32(select(arg_0, vec2<f32>(arg_0.x, -657f), false))))), countOneBits(global4.a.b | ~143225u)) || (_wgslsmith_dot_vec2_u32(vec2<u32>(8658u, global4.a.b | 0u), ~(~vec2<u32>(global4.a.b, global4.a.b))) != global4.a.b)) {
        let var_1 = global4.a;
        switch (~var_0.x) {
            case 1i: {
                let var_2 = func_7(func_4(), _wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(509f, _wgslsmith_f_op_f32(abs(-1052f)), select(false, true, true))) * _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-global0.a.x)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-484f))), func_4()).x;
                global0 = global1[_wgslsmith_index_u32(_wgslsmith_div_u32(countOneBits(_wgslsmith_clamp_u32(_wgslsmith_mod_u32(0u, var_1.b), 100534u, _wgslsmith_dot_vec4_u32(countOneBits(vec4<u32>(var_1.b, global4.a.b, 19123u, var_1.b)), _wgslsmith_div_vec4_u32(vec4<u32>(55107u, 37249u, var_1.b, 2000u), vec4<u32>(7547u, 46057u, 49378u, var_1.b))))), var_1.b), 2u)];
            }
            case 0i: {
                let var_2 = ~(~38083u);
            }
            case -548i: {
                var var_2 = 142f;
                return _wgslsmith_sub_u32(global4.a.b, 10127u);
            }
            case 10059i: {
                var var_2 = _wgslsmith_sub_vec3_u32(vec3<u32>(var_1.b, ~global4.a.b, global4.a.b >> (~_wgslsmith_add_u32(var_1.b, var_1.b) % 32u)), ~(~vec3<u32>(_wgslsmith_dot_vec3_u32(vec3<u32>(var_1.b, global4.a.b, 1u), vec3<u32>(20053u, 66905u, 1u)), ~36203u, global4.a.b)));
                let var_3 = global4.a.a.yxw;
                let var_4 = func_4();
                var var_5 = Struct_2(func_4());
            }
            default: {
                let var_2 = func_4().a.yxy;
            }
        }
        let var_2 = global1[_wgslsmith_index_u32(1u, 2u)];
        var var_3 = Struct_2(Struct_1(vec4<bool>(true, true, true, (global4.a.b ^ var_1.b) >= select(var_1.b, 0u, false)), global4.a.b, u_input.a, arg_1));
        global4 = Struct_2(global4.a);
    }
    let var_1 = Struct_2(Struct_1(func_4().a, reverseBits(global4.a.b) & _wgslsmith_add_u32(0u, global4.a.b), countOneBits(~global4.a.c | ~var_0.x), ~2147483647i));
    global2 = array<vec2<f32>, 28>();
    if (true) {
        global0 = func_8(firstLeadingBit(~(~vec4<u32>(4294967295u, 1u, var_1.a.b, var_1.a.b))), Struct_4(var_1), Struct_4(var_1), Struct_2(Struct_1(select(!global4.a.a, !vec4<bool>(false, false, global3.x, global4.a.a.x), vec4<bool>(true, global4.a.a.x, false, true)), 76810u, -(-33226i << (global4.a.b % 32u)), 8272i)));
        if (!var_1.a.a.x || global4.a.a.x) {
            var var_2 = vec4<bool>(true, false, !func_2(-36893i, Struct_3(_wgslsmith_f_op_vec2_f32(vec2<f32>(-329f, -134f) * arg_0)), ~reverseBits(var_1.a.b)), true);
        }
        let var_2 = vec3<f32>(arg_0.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -759f) + -208f), -1112f);
    }
    return var_1.a.b ^ _wgslsmith_div_u32(abs(1u), _wgslsmith_mult_u32(func_4().b, global4.a.b) & countOneBits(reverseBits(4294967295u)));
}

@compute
@workgroup_size(1)
fn main() {
    let var_0 = global4.a.d >> (~(~(~global4.a.b ^ global4.a.b)) % 32u);
    for (; ; ) {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        break;
    }
    var var_1 = global4.a.b < _wgslsmith_dot_vec3_u32(_wgslsmith_mod_vec3_u32(_wgslsmith_mod_vec3_u32(vec3<u32>(1u, global4.a.b, 4294967295u), select(vec3<u32>(global4.a.b, global4.a.b, 43740u), vec3<u32>(global4.a.b, 53929u, 1u), false)), ~_wgslsmith_sub_vec3_u32(vec3<u32>(global4.a.b, global4.a.b, global4.a.b), vec3<u32>(461u, 18908u, 0u))), vec3<u32>(~0u, _wgslsmith_div_u32(global4.a.b << (6137u % 32u), func_1(vec2<f32>(1287f, global0.a.x), -5985i)), global4.a.b));
    var var_2 = reverseBits(~_wgslsmith_clamp_vec4_i32(-vec4<i32>(-1i, u_input.b, global4.a.d, 1i) & -vec4<i32>(global4.a.c, 0i, u_input.a, u_input.b), _wgslsmith_mult_vec4_i32(~vec4<i32>(2147483647i, var_0, u_input.b, u_input.a), _wgslsmith_clamp_vec4_i32(vec4<i32>(var_0, -61791i, 2727i, 2147483647i), vec4<i32>(81993i, global4.a.c, -13987i, 0i), vec4<i32>(u_input.a, var_0, global4.a.d, 1i))), ~(-vec4<i32>(21937i, var_0, u_input.a, var_0))));
    var var_3 = !global4.a.a.x;
    for (; ; ) {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        loop {
            if (LOOP_COUNTERS[14u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        }
        loop {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
        }
    }
    let var_4 = Struct_2(global4.a);
    if (4294967295u == (_wgslsmith_dot_vec2_u32(~(~vec2<u32>(global4.a.b, 107089u)), vec2<u32>(_wgslsmith_add_u32(var_4.a.b, global4.a.b), var_4.a.b)) | func_4().b)) {
        for (var var_5 = -45920i; (1u < (global4.a.b << (var_4.a.b % 32u))) | !(true || global4.a.a.x); ) {
            if (LOOP_COUNTERS[16u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        }
    }
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_f_op_vec2_f32(round(vec2<f32>(global0.a.x, _wgslsmith_f_op_f32(-1000f - _wgslsmith_f_op_f32(-886f))))), _wgslsmith_div_vec4_u32(_wgslsmith_mod_vec4_u32(firstTrailingBit(select(vec4<u32>(1u, 1u, global4.a.b, 99581u), vec4<u32>(var_4.a.b, global4.a.b, var_4.a.b, var_4.a.b), vec4<bool>(true, false, global3.x, true))), _wgslsmith_mod_vec4_u32(vec4<u32>(0u, 2511u, 32192u, global4.a.b), vec4<u32>(18182u, global4.a.b, 46488u, var_4.a.b))), _wgslsmith_mult_vec4_u32(~(~vec4<u32>(37704u, var_4.a.b, var_4.a.b, global4.a.b)), ~(vec4<u32>(var_4.a.b, 1285u, var_4.a.b, 0u) << (vec4<u32>(34566u, 4294967295u, var_4.a.b, var_4.a.b) % vec4<u32>(32u))))));
}

`;