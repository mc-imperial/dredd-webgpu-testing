export const input = [231,188,195,155,67,152,114,215,22,82,115,102,178,153,124,53,90,95,200,166,227,202,53,41,111,198,74,113,140,239,76,193,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [231,188,195,155,67,152,114,215,22,82,115,102,178,153,124,53,90,95,200,166,227,202,53,41,111,198,74,113,140,239,76,193,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[231,188,195,155,67,152,114,215,22,82,115,102,178,153,124,53,90,95,200,166,227,202,53,41,111,198,74,113,140,239,76,193]}
// Seed: 962402245962438689

struct Struct_1 {
    a: vec3<i32>,
    b: vec3<f32>,
    c: i32,
    d: i32,
}

struct UniformBuffer {
    a: vec2<u32>,
    b: u32,
    c: vec4<i32>,
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

var<private> global0: array<f32, 30>;

var<private> global1: array<bool, 20>;

var<private> LOOP_COUNTERS: array<u32, 38>;

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn func_6(arg_0: bool) -> vec3<i32> {
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        switch (countOneBits(1i)) {
            case -6411i: {
                global0 = array<f32, 30>();
                var var_0 = Struct_1(abs(-u_input.c.zxw ^ (u_input.c.www ^ -u_input.c.xzz)), _wgslsmith_f_op_vec3_f32(vec3<f32>(-1241f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(u_input.a.x, 30u)]) - _wgslsmith_f_op_f32(-737f * global0[_wgslsmith_index_u32(0u, 30u)])), _wgslsmith_f_op_f32(trunc(global0[_wgslsmith_index_u32(~u_input.b, 30u)]))) + _wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(u_input.b, 30u)]), global0[_wgslsmith_index_u32(u_input.a.x, 30u)], global0[_wgslsmith_index_u32(53794u, 30u)]))), -u_input.c.x, 84538i);
                var var_1 = vec4<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-var_0.b.x), _wgslsmith_f_op_f32(sign(-314f))) + var_0.b.x), _wgslsmith_div_f32(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(max(458f, 1000f)), _wgslsmith_f_op_f32(-var_0.b.x))), 623f)), -305f, global0[_wgslsmith_index_u32(abs(~u_input.a.x), 30u)], global0[_wgslsmith_index_u32(u_input.b, 30u)]);
            }
            case 46512i: {
                var var_0 = vec3<bool>(any(vec3<bool>(false, u_input.c.x == u_input.c.x, any(vec4<bool>(true, false, arg_0, global1[_wgslsmith_index_u32(u_input.a.x, 20u)])))), true, !global1[_wgslsmith_index_u32(u_input.a.x, 20u)]);
                global0 = array<f32, 30>();
                var var_1 = ~(-u_input.c.yzy);
                var var_2 = Struct_1(reverseBits(u_input.c.ywy) | (abs(u_input.c.wxw) & abs(-vec3<i32>(var_1.x, i32(-2147483648), u_input.c.x))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(global0[_wgslsmith_index_u32(u_input.b, 30u)], -3282f, global0[_wgslsmith_index_u32(u_input.a.x, 30u)]) - vec3<f32>(-222f, 904f, 1071f)))))), _wgslsmith_dot_vec3_i32(~vec3<i32>(var_1.x >> (29188u % 32u), i32(-2147483648) >> (u_input.b % 32u), ~u_input.c.x), u_input.c.wxw), reverseBits(_wgslsmith_sub_i32(~(-2364i), _wgslsmith_dot_vec3_i32(_wgslsmith_add_vec3_i32(vec3<i32>(u_input.c.x, var_1.x, u_input.c.x), u_input.c.xzw), vec3<i32>(-1i, u_input.c.x, u_input.c.x)))));
            }
            case -1i: {
                let var_0 = u_input.c.x;
            }
            case 2147483647i: {
                global0 = array<f32, 30>();
                var var_0 = _wgslsmith_sub_u32(reverseBits(_wgslsmith_add_u32(u_input.a.x, firstLeadingBit(u_input.b)) | u_input.a.x), abs(4294967295u));
                var_0 = min(u_input.b, _wgslsmith_dot_vec2_u32(abs(u_input.a) >> (vec2<u32>(firstTrailingBit(42489u), 1u) % vec2<u32>(32u)), u_input.a));
                var var_1 = Struct_1(-(~(-vec3<i32>(u_input.c.x, 1i, u_input.c.x)) | min(~u_input.c.zww, -vec3<i32>(-1i, 0i, u_input.c.x))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(global0[_wgslsmith_index_u32(1u, 30u)], global0[_wgslsmith_index_u32(1u, 30u)], 462f))) + _wgslsmith_f_op_vec3_f32(ceil(vec3<f32>(global0[_wgslsmith_index_u32(4294967295u, 30u)], global0[_wgslsmith_index_u32(4294967295u, 30u)], global0[_wgslsmith_index_u32(17565u, 30u)])))) * _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-vec3<f32>(1969f, global0[_wgslsmith_index_u32(u_input.b, 30u)], 923f)), vec3<f32>(_wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(34306u, 30u)] + -375f), _wgslsmith_f_op_f32(f32(-1f) * -503f), global0[_wgslsmith_index_u32(_wgslsmith_mod_u32(u_input.b, 0u), 30u)]), false != !global1[_wgslsmith_index_u32(u_input.b, 20u)]))), abs(_wgslsmith_mod_i32(-24571i, abs(i32(-1i) * -6759i))), ~(~u_input.c.x));
            }
            default: {
                var var_0 = Struct_1(reverseBits(-_wgslsmith_clamp_vec3_i32(-vec3<i32>(1i, 84385i, -12029i), _wgslsmith_mult_vec3_i32(vec3<i32>(u_input.c.x, -43756i, 1i), vec3<i32>(0i, u_input.c.x, u_input.c.x)), select(u_input.c.zwy, u_input.c.xyz, global1[_wgslsmith_index_u32(1u, 20u)]))), _wgslsmith_f_op_vec3_f32(exp2(vec3<f32>(_wgslsmith_f_op_f32(floor(global0[_wgslsmith_index_u32(u_input.a.x, 30u)])), _wgslsmith_f_op_f32(trunc(_wgslsmith_div_f32(-1353f, 1303f))), 523f))), i32(-1i) * -_wgslsmith_dot_vec4_i32(vec4<i32>(-9517i, 1i, i32(-2147483648), u_input.c.x), min(vec4<i32>(-8803i, u_input.c.x, -16479i, u_input.c.x), u_input.c)), abs(select(u_input.c.x, 19389i & _wgslsmith_add_i32(1i, u_input.c.x), global1[_wgslsmith_index_u32(_wgslsmith_clamp_u32(u_input.b, u_input.b, u_input.a.x >> (u_input.a.x % 32u)), 20u)])));
                continue;
            }
        }
        continue;
    }
    let var_0 = Struct_1(vec3<i32>(u_input.c.x, _wgslsmith_clamp_i32(-_wgslsmith_dot_vec4_i32(u_input.c, vec4<i32>(u_input.c.x, u_input.c.x, u_input.c.x, u_input.c.x)), u_input.c.x, -firstLeadingBit(u_input.c.x)), _wgslsmith_add_i32(_wgslsmith_mult_i32(min(35284i, u_input.c.x), _wgslsmith_div_i32(u_input.c.x, u_input.c.x)), _wgslsmith_dot_vec3_i32(-vec3<i32>(u_input.c.x, u_input.c.x, 61149i), -vec3<i32>(u_input.c.x, u_input.c.x, i32(-2147483648))))), _wgslsmith_div_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -226f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-2149f)), global0[_wgslsmith_index_u32(_wgslsmith_sub_u32(123521u, _wgslsmith_sub_u32(u_input.a.x, 0u)), 30u)]), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(vec3<f32>(global0[_wgslsmith_index_u32(1u, 30u)], -796f, 1107f) * vec3<f32>(global0[_wgslsmith_index_u32(u_input.b, 30u)], -711f, -1311f)))))), u_input.c.x, -max(29876i, 41775i));
    global1 = array<bool, 20>();
    if (!(global1[_wgslsmith_index_u32((min(0u, 64583u) ^ u_input.b) & 62384u, 20u)] | false)) {
        return -vec3<i32>(min(-_wgslsmith_div_i32(var_0.d, u_input.c.x), firstTrailingBit(u_input.c.x ^ 1i)), var_0.a.x, -1i);
    }
    for (; any(select(select(select(vec2<bool>(false, global1[_wgslsmith_index_u32(9386u, 20u)]), !vec2<bool>(global1[_wgslsmith_index_u32(0u, 20u)], global1[_wgslsmith_index_u32(u_input.a.x, 20u)]), vec2<bool>(true, true)), select(select(vec2<bool>(arg_0, global1[_wgslsmith_index_u32(1u, 20u)]), vec2<bool>(true, false), vec2<bool>(false, true)), vec2<bool>(global1[_wgslsmith_index_u32(u_input.a.x, 20u)], false), !arg_0), vec2<bool>(any(vec4<bool>(arg_0, false, true, true)), arg_0)), vec2<bool>(false, true), true)); ) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        if (false) {
        }
        return vec3<i32>(_wgslsmith_div_i32(u_input.c.x, _wgslsmith_dot_vec2_i32(vec2<i32>(~(-8250i), -u_input.c.x), vec2<i32>(_wgslsmith_dot_vec4_i32(u_input.c, vec4<i32>(var_0.c, var_0.d, var_0.c, -21678i)), 1i))), var_0.d, _wgslsmith_dot_vec4_i32(select(vec4<i32>(_wgslsmith_dot_vec2_i32(var_0.a.xx, u_input.c.yy), u_input.c.x, u_input.c.x, firstTrailingBit(0i)), vec4<i32>(abs(var_0.d), u_input.c.x ^ -17525i, firstTrailingBit(var_0.d), ~(-1i)), global1[_wgslsmith_index_u32(u_input.b >> (u_input.a.x % 32u), 20u)]), _wgslsmith_mult_vec4_i32(vec4<i32>(_wgslsmith_dot_vec2_i32(u_input.c.zx, u_input.c.zw), _wgslsmith_sub_i32(var_0.a.x, u_input.c.x), _wgslsmith_sub_i32(var_0.a.x, u_input.c.x), countOneBits(-5322i)), ~firstTrailingBit(u_input.c))));
    }
    return ~countOneBits(abs(_wgslsmith_div_vec3_i32(vec3<i32>(u_input.c.x, var_0.c, var_0.a.x) & var_0.a, _wgslsmith_add_vec3_i32(vec3<i32>(var_0.c, -1i, u_input.c.x), u_input.c.wzy))));
}

fn func_5() -> f32 {
    let var_0 = Struct_1(_wgslsmith_clamp_vec3_i32(func_6(!(!global1[_wgslsmith_index_u32(u_input.b, 20u)])), -vec3<i32>(-1i, ~u_input.c.x, 0i), max(u_input.c.yzy, -(vec3<i32>(2147483647i, 1i, u_input.c.x) ^ vec3<i32>(u_input.c.x, u_input.c.x, u_input.c.x)))), vec3<f32>(1000f, -169f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(u_input.a.x, 30u)]))), -1i, -func_6(false).x);
    switch (-1i & ~var_0.d) {
        case 2147483647i: {
            var var_1 = func_6(false).x;
            let var_2 = var_0;
            switch (firstLeadingBit(var_2.a.x)) {
                default: {
                }
            }
        }
        case i32(-2147483648): {
        }
        case 0i: {
        }
        case 88121i: {
            switch (6164i) {
                case 3042i: {
                }
                default: {
                }
            }
        }
        default: {
            if (global1[_wgslsmith_index_u32(abs(8691u), 20u)]) {
                let var_1 = var_0;
                global1 = array<bool, 20>();
                var var_2 = global1[_wgslsmith_index_u32(~0u, 20u)];
            }
            switch (_wgslsmith_add_i32(abs(var_0.a.x), i32(-2147483648))) {
                case -41513i: {
                    let var_1 = var_0;
                    let var_2 = _wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(-1000f)) * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(var_1.b.x)))), _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-474f * var_1.b.x))))));
                    global0 = array<f32, 30>();
                    global0 = array<f32, 30>();
                }
                case 0i: {
                    global1 = array<bool, 20>();
                }
                case 1i: {
                    global0 = array<f32, 30>();
                }
                default: {
                    var var_1 = _wgslsmith_f_op_f32(-var_0.b.x);
                    var var_2 = -u_input.c.wzz;
                    var var_3 = _wgslsmith_f_op_f32(-var_0.b.x);
                    var var_4 = _wgslsmith_mult_vec3_u32(firstTrailingBit(_wgslsmith_mod_vec3_u32(vec3<u32>(17491u, 47665u, 4294967295u) << (vec3<u32>(0u, 58010u, u_input.a.x) % vec3<u32>(32u)), reverseBits(vec3<u32>(u_input.b, u_input.b, 25186u))) << (select(vec3<u32>(u_input.b, u_input.b, 1u) >> (vec3<u32>(1u, u_input.b, 43203u) % vec3<u32>(32u)), vec3<u32>(u_input.b, 1u, u_input.b), select(vec3<bool>(global1[_wgslsmith_index_u32(60828u, 20u)], false, global1[_wgslsmith_index_u32(u_input.b, 20u)]), vec3<bool>(global1[_wgslsmith_index_u32(u_input.b, 20u)], false, global1[_wgslsmith_index_u32(0u, 20u)]), vec3<bool>(true, false, global1[_wgslsmith_index_u32(4294967295u, 20u)]))) % vec3<u32>(32u))), _wgslsmith_sub_vec3_u32(vec3<u32>(u_input.a.x, 13518u, 44402u), abs(vec3<u32>(1u, 1u, 1u) >> (vec3<u32>(u_input.a.x, 33437u, 1u) % vec3<u32>(32u)))));
                    var var_5 = var_0;
                }
            }
            global0 = array<f32, 30>();
            if (all(!select(!(!vec2<bool>(global1[_wgslsmith_index_u32(u_input.b, 20u)], global1[_wgslsmith_index_u32(u_input.a.x, 20u)])), vec2<bool>(all(vec3<bool>(global1[_wgslsmith_index_u32(8089u, 20u)], false, global1[_wgslsmith_index_u32(u_input.a.x, 20u)])), all(vec3<bool>(global1[_wgslsmith_index_u32(24067u, 20u)], global1[_wgslsmith_index_u32(1u, 20u)], global1[_wgslsmith_index_u32(17745u, 20u)]))), true))) {
                let var_1 = u_input.c.x;
                let var_2 = _wgslsmith_div_f32(_wgslsmith_div_f32(global0[_wgslsmith_index_u32(1u, 30u)], _wgslsmith_f_op_f32(step(global0[_wgslsmith_index_u32(7688u, 30u)], global0[_wgslsmith_index_u32(~38704u, 30u)]))), _wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(~29774u, 30u)]), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(1u, 30u)] - 119f), var_0.b.x))) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(f32(-1f) * -1649f), _wgslsmith_f_op_f32(ceil(133f)), true)))));
                var var_3 = Struct_1(~vec3<i32>(var_0.a.x | _wgslsmith_add_i32(0i, var_1), _wgslsmith_clamp_i32(abs(-1i), u_input.c.x, firstLeadingBit(u_input.c.x)), countOneBits(countOneBits(u_input.c.x))), _wgslsmith_f_op_vec3_f32(-vec3<f32>(1409f, _wgslsmith_f_op_f32(-1012f + var_2), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(u_input.a.x, 30u)])))), var_0.d, _wgslsmith_dot_vec4_i32(min(u_input.c, vec4<i32>(0i, var_0.a.x, var_0.a.x, var_1)) ^ vec4<i32>(abs(-1i), u_input.c.x, var_0.c, var_0.a.x ^ -34824i), countOneBits(~firstLeadingBit(vec4<i32>(u_input.c.x, 0i, var_1, 0i)))));
                var_3 = Struct_1(~var_0.a, _wgslsmith_f_op_vec3_f32(floor(var_3.b)), func_6((~u_input.a.x << (min(u_input.b, u_input.a.x) % 32u)) <= 32164u).x, -_wgslsmith_mult_i32(47342i, ~(-u_input.c.x)));
                let var_4 = var_0;
            }
            switch (1i) {
                case i32(-2147483648): {
                }
                case -1675i: {
                    var var_1 = _wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(exp2(var_0.b.x)) * _wgslsmith_f_op_f32(floor(-163f))))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(-1055f, var_0.b.x)) + _wgslsmith_f_op_f32(f32(-1f) * -203f)), _wgslsmith_f_op_f32(step(global0[_wgslsmith_index_u32(1u, 30u)], _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1332f - -450f) + global0[_wgslsmith_index_u32(48987u, 30u)]))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -939f))) + _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(select(vec4<f32>(var_0.b.x, _wgslsmith_f_op_f32(-var_0.b.x), global0[_wgslsmith_index_u32(u_input.b, 30u)], _wgslsmith_f_op_f32(min(-2036f, var_0.b.x))), _wgslsmith_f_op_vec4_f32(abs(vec4<f32>(global0[_wgslsmith_index_u32(0u, 30u)], var_0.b.x, 1159f, global0[_wgslsmith_index_u32(u_input.b, 30u)]))), select(vec4<bool>(global1[_wgslsmith_index_u32(u_input.b, 20u)], false, global1[_wgslsmith_index_u32(u_input.a.x, 20u)], global1[_wgslsmith_index_u32(u_input.b, 20u)]), !vec4<bool>(true, true, false, global1[_wgslsmith_index_u32(u_input.a.x, 20u)]), vec4<bool>(true, global1[_wgslsmith_index_u32(49899u, 20u)], global1[_wgslsmith_index_u32(36921u, 20u)], false))))));
                    var var_2 = _wgslsmith_f_op_vec3_f32(var_0.b - _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(abs(vec3<f32>(_wgslsmith_f_op_f32(-1291f), _wgslsmith_f_op_f32(-442f * -539f), _wgslsmith_f_op_f32(-var_1.x)))) * vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1759f - 764f)), 2307f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(308f))))));
                    var var_3 = -41822i;
                }
                default: {
                    global1 = array<bool, 20>();
                    let var_1 = vec2<bool>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(_wgslsmith_mult_u32(34603u, 25032u), 30u)]) * _wgslsmith_f_op_f32(floor(494f))) >= global0[_wgslsmith_index_u32(~abs(~u_input.a.x), 30u)], global1[_wgslsmith_index_u32(25404u, 20u)]);
                }
            }
        }
    }
    switch (_wgslsmith_clamp_i32(_wgslsmith_add_i32(~(-(i32(-1i) * -7835i)), var_0.d), abs(~_wgslsmith_dot_vec2_i32(var_0.a.yy, var_0.a.yx) << (1u % 32u)), var_0.c)) {
        case 1i: {
            if (true) {
            }
            global0 = array<f32, 30>();
            if (all(vec3<bool>(select(true, !(var_0.b.x <= -643f), !global1[_wgslsmith_index_u32(firstTrailingBit(u_input.a.x), 20u)]), _wgslsmith_div_u32(u_input.a.x, ~u_input.a.x) <= (_wgslsmith_add_u32(1u, 0u) ^ (69777u ^ u_input.b)), true))) {
                global0 = array<f32, 30>();
                global0 = array<f32, 30>();
            }
            for (var var_1 = -42656i; true; var_1 -= 1i) {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            }
        }
        default: {
            for (var var_1 = select(-55959i, _wgslsmith_mult_i32(firstTrailingBit(_wgslsmith_dot_vec2_i32(-vec2<i32>(-1i, 27743i), _wgslsmith_clamp_vec2_i32(vec2<i32>(3344i, 0i), u_input.c.xy, vec2<i32>(var_0.a.x, 2147483647i)))), ~(~var_0.a.x >> (~u_input.b % 32u))), true); ; var_1 += 1i) {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            }
            loop {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                global1 = array<bool, 20>();
                continue;
            }
            switch (abs(-(-(-14083i ^ u_input.c.x) ^ countOneBits(u_input.c.x)))) {
                case 2147483647i: {
                    var var_1 = vec4<i32>(u_input.c.x, reverseBits(reverseBits(_wgslsmith_clamp_i32(var_0.a.x, var_0.d, var_0.c) | _wgslsmith_mult_i32(u_input.c.x, 0i))), _wgslsmith_add_i32(var_0.c, -var_0.a.x), u_input.c.x);
                    var var_2 = !all(select(vec2<bool>(true, true), vec2<bool>(false, false), all(select(vec2<bool>(false, global1[_wgslsmith_index_u32(u_input.a.x, 20u)]), vec2<bool>(true, true), global1[_wgslsmith_index_u32(u_input.b, 20u)]))));
                    let var_3 = ~_wgslsmith_sub_u32(u_input.a.x | select(1u, u_input.a.x, false), ~u_input.b) >> (u_input.b % 32u);
                    let var_4 = var_0.b.x;
                    var var_5 = ~vec4<u32>(u_input.b, 0u, var_3, _wgslsmith_div_u32(~var_3, ~_wgslsmith_sub_u32(4294967295u, u_input.b)));
                }
                case i32(-2147483648): {
                    let var_1 = Struct_1(_wgslsmith_add_vec3_i32(firstTrailingBit(-var_0.a ^ _wgslsmith_clamp_vec3_i32(vec3<i32>(var_0.d, var_0.d, 2147483647i), vec3<i32>(0i, u_input.c.x, var_0.d), u_input.c.wyz)), select(vec3<i32>(2147483647i, abs(11905i), u_input.c.x), -abs(u_input.c.wyz), vec3<bool>(true, all(vec2<bool>(global1[_wgslsmith_index_u32(u_input.a.x, 20u)], true)), global1[_wgslsmith_index_u32(u_input.a.x, 20u)]))), var_0.b, _wgslsmith_div_i32(-(~u_input.c.x), select(1i, -15247i, false)), 1i);
                    let var_2 = var_1;
                    let var_3 = !(!select(!(!vec3<bool>(global1[_wgslsmith_index_u32(34928u, 20u)], global1[_wgslsmith_index_u32(u_input.b, 20u)], false)), vec3<bool>(true, var_1.b.x <= -649f, true), all(select(vec4<bool>(false, true, global1[_wgslsmith_index_u32(1u, 20u)], true), vec4<bool>(global1[_wgslsmith_index_u32(u_input.b, 20u)], true, true, global1[_wgslsmith_index_u32(4294967295u, 20u)]), global1[_wgslsmith_index_u32(u_input.a.x, 20u)]))));
                    global1 = array<bool, 20>();
                }
                case 29246i: {
                    global0 = array<f32, 30>();
                }
                default: {
                    let var_1 = 0i;
                    global1 = array<bool, 20>();
                }
            }
        }
    }
    var var_1 = var_0;
    switch (_wgslsmith_div_i32(_wgslsmith_clamp_i32(i32(-1i) * -1142i, ~(-1i), -53737i), _wgslsmith_add_i32(var_1.a.x & var_1.a.x, ~var_1.a.x))) {
        case i32(-2147483648): {
            var var_2 = -1i;
            switch (i32(-1i) * -9068i) {
                case 59213i: {
                    var_1 = Struct_1(~var_0.a, vec3<f32>(-177f, 335f, var_0.b.x), ~var_1.a.x ^ -firstTrailingBit(~var_0.a.x), var_1.a.x);
                }
                case 24889i: {
                }
                case 2147483647i: {
                    global1 = array<bool, 20>();
                }
                case 39964i: {
                    var var_3 = Struct_1(var_0.a, vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -988f)), 1000f, -338f), ~firstLeadingBit(min(var_0.d, var_1.a.x & var_1.c)), -34682i);
                }
                default: {
                    var var_3 = Struct_1(_wgslsmith_mod_vec3_i32(~(-vec3<i32>(var_0.c, 2147483647i, -1i)), abs(abs(~vec3<i32>(-40468i, 1i, 39011i)))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(var_1.b.x, -381f, 1049f) - var_1.b))), ~(~(~_wgslsmith_sub_i32(var_1.c, u_input.c.x))), var_0.c);
                    var var_4 = var_0;
                    var_3 = var_0;
                    var var_5 = Struct_1(var_0.a, _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-var_1.b) * _wgslsmith_f_op_vec3_f32(-var_1.b)), -1i, _wgslsmith_sub_i32(-25521i, var_3.c >> (~4294967295u % 32u)) << (_wgslsmith_sub_u32(4294967295u, ~1u) % 32u));
                    let var_6 = select(vec3<bool>(global1[_wgslsmith_index_u32(0u, 20u)], all(vec2<bool>(any(vec4<bool>(false, global1[_wgslsmith_index_u32(u_input.a.x, 20u)], global1[_wgslsmith_index_u32(u_input.a.x, 20u)], global1[_wgslsmith_index_u32(u_input.b, 20u)])), false)), global1[_wgslsmith_index_u32(78736u, 20u)]), vec3<bool>(true, !all(vec4<bool>(true, global1[_wgslsmith_index_u32(u_input.b, 20u)], global1[_wgslsmith_index_u32(4294967295u, 20u)], global1[_wgslsmith_index_u32(0u, 20u)])), true), any(vec2<bool>(global1[_wgslsmith_index_u32(_wgslsmith_dot_vec3_u32(abs(vec3<u32>(u_input.a.x, 915u, 4294967295u)), vec3<u32>(u_input.b, u_input.a.x, 64529u) << (vec3<u32>(u_input.a.x, 39284u, u_input.b) % vec3<u32>(32u))), 20u)], _wgslsmith_add_u32(u_input.b, u_input.b) >= ~u_input.b)));
                }
            }
            if (all(!select(!vec4<bool>(false, global1[_wgslsmith_index_u32(4294967295u, 20u)], true, true), !(!vec4<bool>(true, false, global1[_wgslsmith_index_u32(4294967295u, 20u)], true)), !vec4<bool>(global1[_wgslsmith_index_u32(7420u, 20u)], true, true, global1[_wgslsmith_index_u32(35362u, 20u)])))) {
                let var_3 = ~firstTrailingBit(vec4<u32>(4294967295u, 37284u, abs(firstLeadingBit(5367u)), ~(~u_input.a.x)));
                var var_4 = u_input.a.x;
            }
            var_1 = Struct_1(countOneBits(vec3<i32>(reverseBits(12572i), func_6(false).x, _wgslsmith_div_i32(var_0.a.x, var_0.d))) | (_wgslsmith_mod_vec3_i32(u_input.c.xxy, vec3<i32>(u_input.c.x, var_0.d, var_0.d)) ^ vec3<i32>(-u_input.c.x, u_input.c.x >> (0u % 32u), 1i)), var_1.b, firstTrailingBit(-min(u_input.c.x, var_1.d)), var_0.a.x);
            for (; ; ) {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                let var_3 = _wgslsmith_dot_vec2_i32(var_1.a.zx, _wgslsmith_div_vec2_i32(-_wgslsmith_add_vec2_i32(u_input.c.zz, -vec2<i32>(u_input.c.x, var_0.c)), var_0.a.zy | ~vec2<i32>(u_input.c.x, var_0.d)));
            }
        }
        default: {
            let var_2 = Struct_1(vec3<i32>(u_input.c.x, _wgslsmith_clamp_i32(min(1i, var_0.a.x ^ var_1.c), -(~(-75881i)), ~_wgslsmith_mult_i32(-2513i, var_1.d)), var_0.a.x), _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(exp2(var_0.b)), _wgslsmith_f_op_vec3_f32(ceil(vec3<f32>(var_0.b.x, var_1.b.x, -1232f))))), vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-2352f)), _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(exp2(var_0.b.x)), global0[_wgslsmith_index_u32(u_input.a.x, 30u)])), var_0.b.x), global1[_wgslsmith_index_u32(u_input.a.x, 20u)])), _wgslsmith_clamp_i32(-u_input.c.x | _wgslsmith_div_i32(-36995i, u_input.c.x), firstTrailingBit(u_input.c.x) ^ var_0.c, -42198i), _wgslsmith_dot_vec2_i32(firstTrailingBit(vec2<i32>(i32(-2147483648), 0i)) ^ vec2<i32>(-1761i, var_0.c & var_0.d), vec2<i32>(var_0.d, var_0.c)));
            loop {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                break;
            }
            for (var var_3: i32; var_3 < 49570i; ) {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                var var_4 = vec4<bool>(any(vec4<bool>(403f > global0[_wgslsmith_index_u32(~4294967295u, 30u)], all(select(vec3<bool>(true, false, global1[_wgslsmith_index_u32(30759u, 20u)]), vec3<bool>(false, true, global1[_wgslsmith_index_u32(4294967295u, 20u)]), true)), _wgslsmith_clamp_i32(var_1.a.x, var_2.a.x, var_2.c) < (var_1.a.x & var_0.c), false)), all(select(select(vec2<bool>(global1[_wgslsmith_index_u32(u_input.b, 20u)], false), vec2<bool>(true, true), false), vec2<bool>(true, true), select(global1[_wgslsmith_index_u32(21455u, 20u)], true, false))) || true, select(global1[_wgslsmith_index_u32(~(~90759u), 20u)], (global1[_wgslsmith_index_u32(u_input.b, 20u)] || true) | true, false) & !global1[_wgslsmith_index_u32(~(~1u), 20u)], false);
                break;
            }
            global0 = array<f32, 30>();
            var var_3 = _wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(global0[_wgslsmith_index_u32(47884u, 30u)], var_0.b.x)) + var_0.b.x), _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(var_1.b.x * 1139f))), -126f, _wgslsmith_f_op_f32(trunc(var_0.b.x)))))));
        }
    }
    return _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(-1073f)))) - _wgslsmith_f_op_f32(floor(var_1.b.x))));
}

fn func_7(arg_0: vec4<f32>) -> Struct_1 {
    global1 = array<bool, 20>();
    switch (u_input.c.x) {
        case 0i: {
            for (var var_0 = ~(~u_input.c.x); ; ) {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
            }
            var var_0 = _wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(-arg_0)));
            for (; any(vec2<bool>(16133i > u_input.c.x, all(!(!vec4<bool>(true, global1[_wgslsmith_index_u32(u_input.b, 20u)], true, global1[_wgslsmith_index_u32(u_input.b, 20u)]))))); ) {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                var_0 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(arg_0 + _wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(-339f, var_0.x, 1142f, arg_0.x))))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(var_0.x, -329f, 557f, 218f) + _wgslsmith_f_op_vec4_f32(-arg_0)) * arg_0), !select(vec4<bool>(false, false, global1[_wgslsmith_index_u32(4294967295u, 20u)], true), !vec4<bool>(true, global1[_wgslsmith_index_u32(u_input.a.x, 20u)], false, global1[_wgslsmith_index_u32(0u, 20u)]), !vec4<bool>(false, global1[_wgslsmith_index_u32(u_input.a.x, 20u)], false, global1[_wgslsmith_index_u32(u_input.a.x, 20u)])))) + _wgslsmith_f_op_vec4_f32(-arg_0));
                global0 = array<f32, 30>();
                global0 = array<f32, 30>();
            }
            let var_1 = Struct_1(max(select(_wgslsmith_div_vec3_i32(vec3<i32>(u_input.c.x, -7020i, u_input.c.x), vec3<i32>(57642i, -66994i, -1i)), firstLeadingBit(vec3<i32>(u_input.c.x, u_input.c.x, -1i)), !vec3<bool>(false, global1[_wgslsmith_index_u32(25399u, 20u)], global1[_wgslsmith_index_u32(1552u, 20u)])), _wgslsmith_sub_vec3_i32(_wgslsmith_sub_vec3_i32(vec3<i32>(u_input.c.x, u_input.c.x, u_input.c.x), vec3<i32>(u_input.c.x, 0i, 1i)), vec3<i32>(u_input.c.x, u_input.c.x, 24027i))) & _wgslsmith_clamp_vec3_i32(vec3<i32>(_wgslsmith_div_i32(u_input.c.x, u_input.c.x), 1i, ~53005i), u_input.c.zwz, ~min(vec3<i32>(0i, -131i, u_input.c.x), u_input.c.xzx)), _wgslsmith_f_op_vec3_f32(abs(_wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-442f, -1717f, 1000f)))))), _wgslsmith_sub_i32(~0i, min(-9573i, firstTrailingBit(u_input.c.x) >> (u_input.b % 32u))), -18791i);
        }
        case 1i: {
            if (!all(!(!vec3<bool>(true, global1[_wgslsmith_index_u32(u_input.a.x, 20u)], false)))) {
                let var_0 = select(max(~(~select(vec3<u32>(u_input.a.x, u_input.b, 4294967295u), vec3<u32>(0u, u_input.a.x, 994u), vec3<bool>(true, true, false))), min(vec3<u32>(0u, ~u_input.b, u_input.a.x), _wgslsmith_sub_vec3_u32(vec3<u32>(u_input.a.x, 1u, u_input.b), _wgslsmith_mult_vec3_u32(vec3<u32>(u_input.a.x, 5827u, 1u), vec3<u32>(u_input.b, 4294967295u, u_input.b))))), firstLeadingBit(countOneBits(~vec3<u32>(u_input.b, u_input.a.x, 32636u) << (firstTrailingBit(vec3<u32>(u_input.b, 0u, 37781u)) % vec3<u32>(32u)))), vec3<bool>(any(select(vec3<bool>(false, global1[_wgslsmith_index_u32(1u, 20u)], false), vec3<bool>(global1[_wgslsmith_index_u32(u_input.b, 20u)], true, true), select(vec3<bool>(false, false, global1[_wgslsmith_index_u32(1u, 20u)]), vec3<bool>(global1[_wgslsmith_index_u32(18022u, 20u)], global1[_wgslsmith_index_u32(u_input.a.x, 20u)], true), true))), global1[_wgslsmith_index_u32(_wgslsmith_clamp_u32(0u | u_input.a.x, u_input.a.x, u_input.a.x << (47469u % 32u)) ^ ~firstLeadingBit(1u), 20u)], any(vec3<bool>(all(vec4<bool>(global1[_wgslsmith_index_u32(14705u, 20u)], global1[_wgslsmith_index_u32(u_input.b, 20u)], global1[_wgslsmith_index_u32(0u, 20u)], true)), false & global1[_wgslsmith_index_u32(u_input.b, 20u)], global1[_wgslsmith_index_u32(~u_input.b, 20u)]))));
            }
            switch (-1i) {
                case 1i: {
                    let var_0 = -((-41940i & u_input.c.x) ^ _wgslsmith_add_i32(u_input.c.x, u_input.c.x));
                    let var_1 = Struct_1(-min(vec3<i32>(i32(-2147483648), ~0i, -81865i), u_input.c.yyx), arg_0.wyw, -1i, var_0);
                }
                case 2147483647i: {
                }
                case 0i: {
                    var var_0 = Struct_1(~u_input.c.ywy, vec3<f32>(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(f32(-1f) * -930f), -737f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(global0[_wgslsmith_index_u32(1u, 30u)])) - global0[_wgslsmith_index_u32(24764u | u_input.a.x, 30u)]), _wgslsmith_f_op_f32(-2138f)), u_input.c.x, 41483i);
                    let var_1 = select(vec4<bool>(global1[_wgslsmith_index_u32(_wgslsmith_sub_u32(1u, u_input.b), 20u)], true, !all(select(vec3<bool>(global1[_wgslsmith_index_u32(0u, 20u)], true, global1[_wgslsmith_index_u32(86155u, 20u)]), vec3<bool>(global1[_wgslsmith_index_u32(73106u, 20u)], global1[_wgslsmith_index_u32(u_input.a.x, 20u)], true), vec3<bool>(false, global1[_wgslsmith_index_u32(4294967295u, 20u)], false))), false), !(!vec4<bool>(global1[_wgslsmith_index_u32(1u << (u_input.a.x % 32u), 20u)], false, global1[_wgslsmith_index_u32(0u, 20u)], true)), true);
                    let var_2 = Struct_1(vec3<i32>(~abs(var_0.c) >> (firstLeadingBit(~9026u) % 32u), i32(-1i) * -(i32(-2147483648) ^ u_input.c.x), 0i), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(-arg_0.wzz)))))), _wgslsmith_mult_i32(~2147483647i << (~(~u_input.a.x) % 32u), 1i), ~(-1i));
                    global1 = array<bool, 20>();
                }
                case -69691i: {
                    global1 = array<bool, 20>();
                }
                default: {
                    var var_0 = _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(~u_input.b, 30u)]))));
                }
            }
            let var_0 = Struct_1(-_wgslsmith_clamp_vec3_i32(u_input.c.wwz, reverseBits(u_input.c.xxx) & firstTrailingBit(u_input.c.xyx), vec3<i32>(u_input.c.x, u_input.c.x, -u_input.c.x)), arg_0.wzy, _wgslsmith_mult_i32(-(_wgslsmith_add_i32(u_input.c.x, u_input.c.x) >> (~38385u % 32u)), firstTrailingBit(2147483647i) ^ _wgslsmith_dot_vec2_i32(u_input.c.zx, ~u_input.c.wz)), -1i);
            global0 = array<f32, 30>();
            var var_1 = ~_wgslsmith_div_u32(max(max(1u, 1u), ~27577u), (0u & ~u_input.a.x) | _wgslsmith_dot_vec2_u32(vec2<u32>(42974u, 16873u), vec2<u32>(u_input.a.x, u_input.b)));
        }
        case 18251i: {
            var var_0 = Struct_1(~min(vec3<i32>(max(u_input.c.x, u_input.c.x), firstLeadingBit(2147483647i), firstLeadingBit(18545i)), u_input.c.xyx), arg_0.yxx, 68478i, _wgslsmith_mod_i32(1i, ~u_input.c.x));
            for (; true; ) {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                var_0 = Struct_1(vec3<i32>(_wgslsmith_dot_vec3_i32(vec3<i32>(44690i, -var_0.a.x, i32(-2147483648)), vec3<i32>(u_input.c.x, _wgslsmith_dot_vec2_i32(u_input.c.xz, vec2<i32>(u_input.c.x, i32(-2147483648))), var_0.a.x)), ~_wgslsmith_sub_i32(_wgslsmith_mult_i32(u_input.c.x, -17682i), 35965i), -u_input.c.x), vec3<f32>(-1179f, -1088f, _wgslsmith_f_op_f32(-arg_0.x)), 1i, -2147483647i);
            }
            global0 = array<f32, 30>();
        }
        default: {
            if (38610u < max(u_input.a.x, ~46551u)) {
                var var_0 = arg_0.x;
            }
            let var_0 = Struct_1(~u_input.c.ywz, _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(-arg_0.zwz), vec3<f32>(-1159f, 887f, arg_0.x))) + _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(abs(vec3<f32>(arg_0.x, global0[_wgslsmith_index_u32(72457u, 30u)], 1198f))) + _wgslsmith_f_op_vec3_f32(floor(arg_0.wzy))))), -(~max(-43970i, ~u_input.c.x)), firstLeadingBit(u_input.c.x) ^ u_input.c.x);
        }
    }
    for (; ; ) {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        if (all(select(select(vec2<bool>(true, any(vec2<bool>(false, global1[_wgslsmith_index_u32(75541u, 20u)]))), select(vec2<bool>(global1[_wgslsmith_index_u32(u_input.a.x, 20u)], global1[_wgslsmith_index_u32(u_input.b, 20u)]), vec2<bool>(true, true), !vec2<bool>(global1[_wgslsmith_index_u32(u_input.a.x, 20u)], false)), -u_input.c.x < reverseBits(i32(-2147483648))), vec2<bool>(_wgslsmith_f_op_f32(-174f * arg_0.x) < global0[_wgslsmith_index_u32(u_input.a.x, 30u)], true), select(select(vec2<bool>(global1[_wgslsmith_index_u32(4294967295u, 20u)], global1[_wgslsmith_index_u32(1u, 20u)]), select(vec2<bool>(false, true), vec2<bool>(false, global1[_wgslsmith_index_u32(u_input.b, 20u)]), vec2<bool>(false, global1[_wgslsmith_index_u32(11413u, 20u)])), true), vec2<bool>(false, false), select(select(vec2<bool>(global1[_wgslsmith_index_u32(u_input.b, 20u)], global1[_wgslsmith_index_u32(u_input.b, 20u)]), vec2<bool>(global1[_wgslsmith_index_u32(55775u, 20u)], false), vec2<bool>(false, global1[_wgslsmith_index_u32(u_input.b, 20u)])), select(vec2<bool>(global1[_wgslsmith_index_u32(4294967295u, 20u)], false), vec2<bool>(global1[_wgslsmith_index_u32(u_input.b, 20u)], false), vec2<bool>(false, true)), !global1[_wgslsmith_index_u32(0u, 20u)]))))) {
            let var_0 = u_input.c.ywy;
            break;
        }
        break;
    }
    for (var var_0 = -1i; ~(select(_wgslsmith_div_u32(4294967295u, u_input.a.x), firstLeadingBit(1u), any(vec4<bool>(global1[_wgslsmith_index_u32(11790u, 20u)], true, false, global1[_wgslsmith_index_u32(u_input.b, 20u)]))) ^ ~u_input.a.x) == _wgslsmith_div_u32(55832u, 34997u); global1 = array<bool, 20>()) {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
    }
    loop {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        let var_0 = 1041f;
        global0 = array<f32, 30>();
        var var_1 = ~u_input.b;
    }
    return Struct_1(u_input.c.zxz, arg_0.wxz, abs(15754i), _wgslsmith_dot_vec2_i32(countOneBits(u_input.c.wz), vec2<i32>(-u_input.c.x, u_input.c.x)));
}

fn func_4() -> Struct_1 {
    switch (-(u_input.c.x & -(~(-u_input.c.x)))) {
        case 24456i: {
            loop {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                var var_0 = i32(-1i) * -select(1i, countOneBits(16466i), global1[_wgslsmith_index_u32(0u, 20u)]);
                break;
            }
            var var_0 = !vec3<bool>(global1[_wgslsmith_index_u32(u_input.b, 20u)], !(global0[_wgslsmith_index_u32(u_input.a.x, 30u)] != global0[_wgslsmith_index_u32(~u_input.a.x, 30u)]), global1[_wgslsmith_index_u32(0u, 20u)]);
            let var_1 = func_7(vec4<f32>(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(1f - global0[_wgslsmith_index_u32(_wgslsmith_dot_vec3_u32(vec3<u32>(4294967295u, u_input.a.x, u_input.a.x), vec3<u32>(67746u, u_input.b, 1u)), 30u)]), 292f)), _wgslsmith_f_op_f32(func_5()), global0[_wgslsmith_index_u32(u_input.b, 30u)], _wgslsmith_div_f32(_wgslsmith_f_op_f32(-871f), _wgslsmith_f_op_f32(min(-1565f, _wgslsmith_f_op_f32(select(global0[_wgslsmith_index_u32(u_input.a.x, 30u)], -1116f, true)))))));
            if (!select(194f >= _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_1.b.x) - _wgslsmith_f_op_f32(-var_1.b.x)), true, all(!vec2<bool>(var_0.x, false)))) {
            }
        }
        case 2147483647i: {
            loop {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
                let var_0 = ~(-u_input.c.zw);
                var var_1 = 1u;
                let var_2 = Struct_1(-select(-u_input.c.xwx, u_input.c.zwz, 46351u <= u_input.b) | (vec3<i32>(-1i) * -vec3<i32>(u_input.c.x, i32(-2147483648), -313i)), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(max(vec3<f32>(_wgslsmith_f_op_f32(-140f - -1513f), -1000f, global0[_wgslsmith_index_u32(u_input.b, 30u)]), _wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(183f, -638f, global0[_wgslsmith_index_u32(u_input.a.x, 30u)]))))))) - _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-986f, global0[_wgslsmith_index_u32(u_input.b, 30u)], -1816f)), vec3<f32>(_wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(u_input.a.x, 30u)] - global0[_wgslsmith_index_u32(4294967295u, 30u)]), _wgslsmith_f_op_f32(step(global0[_wgslsmith_index_u32(58131u, 30u)], 1115f)), global0[_wgslsmith_index_u32(u_input.a.x, 30u)]), global1[_wgslsmith_index_u32(firstTrailingBit(1u), 20u)]))), -1i, u_input.c.x);
            }
            global1 = array<bool, 20>();
            let var_0 = ((!global1[_wgslsmith_index_u32(u_input.b, 20u)] || any(select(vec3<bool>(true, global1[_wgslsmith_index_u32(u_input.b, 20u)], global1[_wgslsmith_index_u32(69368u, 20u)]), vec3<bool>(global1[_wgslsmith_index_u32(u_input.a.x, 20u)], true, false), global1[_wgslsmith_index_u32(u_input.a.x, 20u)]))) || all(!(!vec3<bool>(false, global1[_wgslsmith_index_u32(4294967295u, 20u)], true)))) && true;
        }
        case 38159i: {
            let var_0 = 6944i;
            let var_1 = 1332f;
            let var_2 = vec3<i32>(func_6(true).x, i32(-2147483648), max(_wgslsmith_sub_i32(var_0, 1i), firstLeadingBit(func_6(global1[_wgslsmith_index_u32(~4294967295u, 20u)]).x)));
        }
        case -10544i: {
            let var_0 = func_7(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(global0[_wgslsmith_index_u32(u_input.b, 30u)], 1000f, 1085f, global0[_wgslsmith_index_u32(u_input.a.x, 30u)]))) * _wgslsmith_f_op_vec4_f32(vec4<f32>(839f, global0[_wgslsmith_index_u32(4294967295u, 30u)], 132f, 934f) + vec4<f32>(global0[_wgslsmith_index_u32(1u, 30u)], -338f, 388f, -2977f))) - _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(max(vec4<f32>(global0[_wgslsmith_index_u32(u_input.b, 30u)], global0[_wgslsmith_index_u32(29420u, 30u)], -510f, 619f), vec4<f32>(global0[_wgslsmith_index_u32(93641u, 30u)], 334f, global0[_wgslsmith_index_u32(0u, 30u)], -751f))) + _wgslsmith_div_vec4_f32(vec4<f32>(-233f, -234f, global0[_wgslsmith_index_u32(1u, 30u)], global0[_wgslsmith_index_u32(u_input.a.x, 30u)]), vec4<f32>(global0[_wgslsmith_index_u32(u_input.a.x, 30u)], global0[_wgslsmith_index_u32(u_input.a.x, 30u)], -475f, -1660f)))), _wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(vec4<f32>(global0[_wgslsmith_index_u32(u_input.b, 30u)], 1000f, 194f, -349f), vec4<f32>(global0[_wgslsmith_index_u32(1u, 30u)], -309f, global0[_wgslsmith_index_u32(u_input.b, 30u)], -747f))), vec4<f32>(_wgslsmith_f_op_f32(select(314f, -1589f, true)), _wgslsmith_f_op_f32(-881f + -445f), -431f, 1617f)))));
            let var_1 = Struct_1(vec3<i32>(~(i32(-1i) * -u_input.c.x), ~max(5732i, u_input.c.x) << (_wgslsmith_dot_vec2_u32(min(u_input.a, u_input.a), vec2<u32>(u_input.a.x, 1u)) % 32u), ~(abs(var_0.c) ^ func_7(vec4<f32>(-2643f, -2082f, 1056f, 276f)).a.x)), _wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-var_0.b.x), _wgslsmith_f_op_f32(abs(global0[_wgslsmith_index_u32(0u, 30u)])))), _wgslsmith_div_f32(-647f, _wgslsmith_f_op_f32(ceil(-1368f))), func_7(vec4<f32>(-871f, var_0.b.x, var_0.b.x, -2180f)).b.x)), _wgslsmith_mult_i32(u_input.c.x, reverseBits(-1i ^ -var_0.a.x)), i32(-1i) * -14974i);
            var var_2 = _wgslsmith_dot_vec2_u32(countOneBits(_wgslsmith_div_vec2_u32(firstTrailingBit(vec2<u32>(u_input.a.x, 35572u) << (u_input.a % vec2<u32>(32u))), vec2<u32>(u_input.a.x, countOneBits(u_input.a.x)))), u_input.a);
            if (var_0.b.x != _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(round(-2630f))))) {
                global1 = array<bool, 20>();
                global1 = array<bool, 20>();
                let var_3 = func_7(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(vec4<f32>(global0[_wgslsmith_index_u32(u_input.a.x, 30u)], var_0.b.x, 1318f, 821f), vec4<f32>(302f, 448f, -524f, 717f)) + _wgslsmith_div_vec4_f32(vec4<f32>(-1322f, var_1.b.x, -1000f, var_1.b.x), vec4<f32>(var_0.b.x, var_1.b.x, -1245f, -2100f)))) + _wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(floor(vec4<f32>(global0[_wgslsmith_index_u32(u_input.b, 30u)], global0[_wgslsmith_index_u32(u_input.a.x, 30u)], 417f, 1669f))) - _wgslsmith_f_op_vec4_f32(sign(vec4<f32>(-1000f, var_1.b.x, var_1.b.x, var_0.b.x))))))));
                let var_4 = ~55836u;
                var var_5 = reverseBits(_wgslsmith_add_u32(u_input.a.x, var_4));
            }
        }
        default: {
        }
    }
    switch (98461i) {
        case 27458i: {
            var var_0 = Struct_1(_wgslsmith_div_vec3_i32(u_input.c.wwy, vec3<i32>(u_input.c.x >> (u_input.a.x % 32u), 1i, u_input.c.x) & _wgslsmith_mult_vec3_i32(~u_input.c.xww, min(vec3<i32>(u_input.c.x, 2147483647i, u_input.c.x), vec3<i32>(u_input.c.x, -1i, u_input.c.x)))), _wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(ceil(vec3<f32>(global0[_wgslsmith_index_u32(~4294967295u, 30u)], _wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(13849u, 30u)] + global0[_wgslsmith_index_u32(4294967295u, 30u)]), global0[_wgslsmith_index_u32(~75166u, 30u)]))))), u_input.c.x, u_input.c.x);
            var var_1 = i32(-1i) * i32(-2147483648);
            var var_2 = Struct_1(-vec3<i32>(~(-1i) | abs(var_0.a.x), var_0.c, _wgslsmith_add_i32(1i, u_input.c.x ^ i32(-2147483648))), _wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(min(var_0.b, _wgslsmith_f_op_vec3_f32(var_0.b - vec3<f32>(var_0.b.x, -375f, global0[_wgslsmith_index_u32(6471u, 30u)])))))))), var_0.d, firstTrailingBit(-var_0.c));
            var_1 = var_0.a.x;
            var_0 = func_7(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(vec4<f32>(-424f, var_2.b.x, var_2.b.x, 570f) + vec4<f32>(999f, -433f, -1930f, 228f)), vec4<f32>(var_2.b.x, var_2.b.x, _wgslsmith_f_op_f32(step(-540f, 709f)), global0[_wgslsmith_index_u32(firstTrailingBit(u_input.b), 30u)]), _wgslsmith_add_i32(u_input.c.x, var_0.a.x) <= firstLeadingBit(var_0.a.x)))));
        }
        case -30329i: {
        }
        default: {
            let var_0 = func_6(global1[_wgslsmith_index_u32(41135u, 20u)] && !(_wgslsmith_f_op_f32(f32(-1f) * -463f) > _wgslsmith_f_op_f32(min(global0[_wgslsmith_index_u32(12241u, 30u)], global0[_wgslsmith_index_u32(u_input.a.x, 30u)])))).x;
        }
    }
    var var_0 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(max(vec3<f32>(-101f, global0[_wgslsmith_index_u32(23352u, 30u)], global0[_wgslsmith_index_u32(u_input.b, 30u)]), vec3<f32>(global0[_wgslsmith_index_u32(0u, 30u)], 291f, -2350f)))))) - vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(u_input.b, 30u)] + global0[_wgslsmith_index_u32(1u, 30u)])), global0[_wgslsmith_index_u32(abs(1u), 30u)], _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(-296f)) - _wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(4294967295u, 30u)])))));
    let var_1 = func_7(_wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(global0[_wgslsmith_index_u32(1u, 30u)], -421f, 1209f, 445f)) - _wgslsmith_f_op_vec4_f32(-vec4<f32>(665f, var_0.x, 898f, global0[_wgslsmith_index_u32(1u, 30u)]))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(exp2(vec4<f32>(1156f, global0[_wgslsmith_index_u32(u_input.b, 30u)], var_0.x, global0[_wgslsmith_index_u32(4294967295u, 30u)]))) - _wgslsmith_f_op_vec4_f32(-vec4<f32>(var_0.x, global0[_wgslsmith_index_u32(u_input.b, 30u)], var_0.x, -912f)))))));
    loop {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        var var_2 = vec2<u32>(firstTrailingBit(_wgslsmith_div_u32(u_input.a.x, _wgslsmith_sub_u32(u_input.b, 78u))) << (u_input.b % 32u), 1u);
        for (; true; ) {
            if (LOOP_COUNTERS[17u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
            let var_3 = var_1;
            var_2 = _wgslsmith_sub_vec2_u32(reverseBits(vec2<u32>(var_2.x, firstTrailingBit(~1u))), _wgslsmith_mult_vec2_u32(u_input.a, ((u_input.a & vec2<u32>(42503u, 1u)) << (~u_input.a % vec2<u32>(32u))) << (~_wgslsmith_sub_vec2_u32(vec2<u32>(20450u, 65171u), u_input.a) % vec2<u32>(32u))));
            let var_4 = !((var_1.c <= var_3.c) | !global1[_wgslsmith_index_u32((24551u >> (u_input.b % 32u)) | 1u, 20u)]);
            let var_5 = _wgslsmith_clamp_i32(u_input.c.x, firstLeadingBit(-1534i), u_input.c.x);
            var var_6 = var_1.d << (15555u % 32u);
        }
        break;
    }
    return var_1;
}

fn func_3(arg_0: Struct_1, arg_1: Struct_1, arg_2: vec4<f32>, arg_3: Struct_1) -> Struct_1 {
    loop {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        continue;
    }
    var var_0 = ~vec4<u32>(u_input.a.x >> (_wgslsmith_clamp_u32(71477u, u_input.a.x, u_input.a.x) % 32u), u_input.a.x, u_input.b, 63200u ^ _wgslsmith_dot_vec3_u32(vec3<u32>(u_input.a.x, u_input.b, 7645u), vec3<u32>(56491u, 1u, u_input.a.x))) | vec4<u32>(min(~u_input.a.x, _wgslsmith_dot_vec3_u32(vec3<u32>(u_input.b, u_input.a.x, 23668u), vec3<u32>(4440u, u_input.b, 1u))) | max(u_input.b, ~u_input.a.x), ~u_input.a.x, _wgslsmith_dot_vec2_u32(_wgslsmith_div_vec2_u32(u_input.a, vec2<u32>(u_input.b, 20272u)), u_input.a), _wgslsmith_mod_u32(select(4294967295u, _wgslsmith_mult_u32(0u, 24804u), global1[_wgslsmith_index_u32(~u_input.a.x, 20u)]), u_input.b));
    loop {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
        let var_1 = -1845f;
        let var_2 = arg_0;
        switch (13831i) {
            case 2147483647i: {
                let var_3 = vec3<bool>(global1[_wgslsmith_index_u32(u_input.b & 4294967295u, 20u)], 730f != var_1, (arg_3.a.x < var_2.d) == all(!(!vec2<bool>(false, global1[_wgslsmith_index_u32(4294967295u, 20u)]))));
                var var_4 = arg_0.a.xy;
            }
            default: {
                let var_3 = abs(~u_input.a.x << (_wgslsmith_add_u32(1u, 20630u) % 32u));
                var var_4 = func_4();
            }
        }
    }
    for (; ; ) {
        if (LOOP_COUNTERS[20u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
    }
    switch (1i) {
        default: {
            let var_1 = vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(var_0.x, 30u)])), _wgslsmith_f_op_f32(func_4().b.x + arg_3.b.x), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1028f) - _wgslsmith_f_op_f32(max(arg_2.x, _wgslsmith_f_op_f32(func_5())))), _wgslsmith_f_op_f32(-arg_2.x));
            global0 = array<f32, 30>();
            var var_2 = vec2<u32>(u_input.b, _wgslsmith_dot_vec3_u32(vec3<u32>(~(~49801u), firstTrailingBit(u_input.b), _wgslsmith_div_u32(var_0.x, u_input.a.x << (102628u % 32u))), var_0.zwz));
            global0 = array<f32, 30>();
        }
    }
    return func_7(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(-arg_2))), _wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(vec4<f32>(-424f, 1490f, -412f, arg_0.b.x) + vec4<f32>(global0[_wgslsmith_index_u32(43049u, 30u)], 1000f, 894f, arg_0.b.x)))), !(!vec4<bool>(global1[_wgslsmith_index_u32(4294967295u, 20u)], false, true, false))))));
}

fn func_8(arg_0: vec3<bool>, arg_1: Struct_1, arg_2: vec3<u32>, arg_3: Struct_1) -> vec3<f32> {
    var var_0 = func_7(_wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(abs(_wgslsmith_f_op_vec4_f32(round(vec4<f32>(-868f, arg_3.b.x, global0[_wgslsmith_index_u32(1u, 30u)], 171f))))))))));
    global0 = array<f32, 30>();
    for (; true; ) {
        if (LOOP_COUNTERS[21u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
        let var_1 = ~_wgslsmith_dot_vec2_i32(reverseBits(countOneBits(vec2<i32>(arg_3.a.x, var_0.a.x))), func_7(_wgslsmith_f_op_vec4_f32(select(vec4<f32>(-1046f, global0[_wgslsmith_index_u32(u_input.a.x, 30u)], arg_3.b.x, arg_3.b.x), _wgslsmith_f_op_vec4_f32(-vec4<f32>(var_0.b.x, var_0.b.x, global0[_wgslsmith_index_u32(0u, 30u)], 2920f)), !vec4<bool>(false, arg_0.x, false, arg_0.x)))).a.yz);
        var_0 = func_4();
        var var_2 = arg_2.x;
        for (var var_3 = -11600i; false; var_3 += 1i) {
            if (LOOP_COUNTERS[22u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
            continue;
        }
    }
    var var_1 = arg_1.b.x;
    var_1 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(_wgslsmith_add_u32(1u, 35003u), 30u)]))) - global0[_wgslsmith_index_u32(_wgslsmith_mult_u32(firstLeadingBit(u_input.a.x), ~arg_2.x) | ~min(~u_input.a.x, u_input.b >> (arg_2.x % 32u)), 30u)]);
    return _wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(max(global0[_wgslsmith_index_u32(_wgslsmith_add_u32(_wgslsmith_clamp_u32(u_input.a.x, 18880u, arg_2.x), _wgslsmith_add_u32(u_input.b, arg_2.x)), 30u)], _wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -264f), -1785f))), _wgslsmith_f_op_f32(max(-118f, _wgslsmith_f_op_f32(func_5()))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(func_5()))))) - _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(var_0.b.x, global0[_wgslsmith_index_u32(83971u, 30u)], -919f)) + var_0.b)), vec3<f32>(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-268f - 461f))), -898f, _wgslsmith_f_op_f32(_wgslsmith_div_f32(-670f, arg_1.b.x) * _wgslsmith_f_op_f32(floor(-750f)))))));
}

fn func_9(arg_0: f32, arg_1: bool, arg_2: Struct_1, arg_3: vec3<f32>) -> u32 {
    global1 = array<bool, 20>();
    loop {
        if (LOOP_COUNTERS[23u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
        continue;
    }
    var var_0 = arg_2;
    global1 = array<bool, 20>();
    loop {
        if (LOOP_COUNTERS[24u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
        let var_1 = Struct_1(vec3<i32>(0i, ~(-1i), 2147483647i), arg_3, func_7(_wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(round(vec4<f32>(arg_2.b.x, -259f, arg_2.b.x, arg_3.x))), vec4<f32>(global0[_wgslsmith_index_u32(4294967295u, 30u)], arg_2.b.x, arg_0, 1000f)))))).c, func_6(arg_1).x | u_input.c.x);
        global1 = array<bool, 20>();
        global0 = array<f32, 30>();
        global0 = array<f32, 30>();
    }
    return 1u;
}

fn func_2(arg_0: f32) -> Struct_1 {
    switch (_wgslsmith_mult_i32(14113i ^ u_input.c.x, -8399i) & (_wgslsmith_add_i32(u_input.c.x, u_input.c.x) >> (func_9(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-358f * -1000f)), true, Struct_1(~vec3<i32>(-4705i, 1i, u_input.c.x), _wgslsmith_f_op_vec3_f32(vec3<f32>(1538f, arg_0, -1412f) + vec3<f32>(global0[_wgslsmith_index_u32(u_input.a.x, 30u)], -575f, arg_0)), _wgslsmith_dot_vec2_i32(u_input.c.yx, vec2<i32>(i32(-2147483648), 35119i)), u_input.c.x), _wgslsmith_f_op_vec3_f32(func_8(!vec3<bool>(false, global1[_wgslsmith_index_u32(u_input.a.x, 20u)], false), func_3(Struct_1(u_input.c.zzw, vec3<f32>(-371f, 248f, arg_0), 2147483647i, u_input.c.x), Struct_1(vec3<i32>(-6910i, u_input.c.x, -1i), vec3<f32>(arg_0, arg_0, -1788f), u_input.c.x, 0i), vec4<f32>(599f, arg_0, global0[_wgslsmith_index_u32(u_input.a.x, 30u)], arg_0), Struct_1(u_input.c.zwy, vec3<f32>(638f, arg_0, 2548f), -125i, i32(-2147483648))), _wgslsmith_sub_vec3_u32(vec3<u32>(83532u, 4294967295u, u_input.a.x), vec3<u32>(48921u, 0u, u_input.b)), Struct_1(u_input.c.zxw, vec3<f32>(global0[_wgslsmith_index_u32(u_input.a.x, 30u)], 412f, global0[_wgslsmith_index_u32(1u, 30u)]), 1i, 0i)))) % 32u))) {
        default: {
            var var_0 = func_3(func_7(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(vec4<f32>(global0[_wgslsmith_index_u32(u_input.b, 30u)], 1183f, global0[_wgslsmith_index_u32(u_input.b, 30u)], global0[_wgslsmith_index_u32(1u, 30u)]), vec4<f32>(-355f, -1759f, 386f, -1000f))), _wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(vec4<f32>(arg_0, 1305f, global0[_wgslsmith_index_u32(0u, 30u)], arg_0) - vec4<f32>(1730f, -308f, -124f, global0[_wgslsmith_index_u32(0u, 30u)])), _wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(1000f, global0[_wgslsmith_index_u32(u_input.a.x, 30u)], -1000f, arg_0))))))), func_4(), vec4<f32>(global0[_wgslsmith_index_u32(13947u, 30u)], -255f, 416f, -137f), func_7(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(-580f, global0[_wgslsmith_index_u32(u_input.a.x, 30u)], global0[_wgslsmith_index_u32(4294967295u, 30u)], 442f))) + _wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(global0[_wgslsmith_index_u32(u_input.a.x, 30u)], global0[_wgslsmith_index_u32(4294967295u, 30u)], -753f, 1116f))))));
            global0 = array<f32, 30>();
            if (!global1[_wgslsmith_index_u32(~(~(~u_input.b)), 20u)]) {
                let var_1 = _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(global0[_wgslsmith_index_u32(u_input.a.x, 30u)])) - func_7(vec4<f32>(-601f, global0[_wgslsmith_index_u32(24133u, 30u)], -285f, -940f)).b.x))), _wgslsmith_f_op_f32(-arg_0)));
                var var_2 = ~countOneBits(_wgslsmith_sub_vec2_u32(vec2<u32>(1u, 13306u), ~vec2<u32>(4294967295u, u_input.b)) >> (u_input.a % vec2<u32>(32u)));
                let var_3 = Struct_1(vec3<i32>(~(-1i), -248i, var_0.d) << (_wgslsmith_div_vec3_u32(~(~vec3<u32>(var_2.x, 31547u, 1u)), reverseBits(vec3<u32>(0u, 4294967295u, var_2.x) << (vec3<u32>(1u, 0u, 75944u) % vec3<u32>(32u)))) % vec3<u32>(32u)), var_0.b, ~u_input.c.x, 20565i >> (_wgslsmith_dot_vec3_u32(~(vec3<u32>(50101u, var_2.x, u_input.a.x) >> (vec3<u32>(var_2.x, 38211u, 56675u) % vec3<u32>(32u))), countOneBits(vec3<u32>(u_input.a.x, var_2.x, var_2.x)) ^ ~vec3<u32>(4294967295u, var_2.x, 74169u)) % 32u));
            }
            var var_1 = func_4();
            let var_2 = func_7(_wgslsmith_f_op_vec4_f32(exp2(vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_vec3_f32(func_8(vec3<bool>(global1[_wgslsmith_index_u32(13299u, 20u)], false, global1[_wgslsmith_index_u32(0u, 20u)]), Struct_1(vec3<i32>(u_input.c.x, 0i, 0i), var_1.b, var_1.c, 0i), vec3<u32>(11332u, u_input.b, 1u), Struct_1(var_0.a, vec3<f32>(var_0.b.x, 540f, var_0.b.x), 32865i, i32(-2147483648)))).x), func_3(Struct_1(vec3<i32>(7114i, 17459i, var_1.d), var_1.b, -26865i, var_0.d), Struct_1(var_1.a, var_0.b, var_0.a.x, i32(-2147483648)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(1978f, 1000f, var_0.b.x, global0[_wgslsmith_index_u32(u_input.a.x, 30u)])), Struct_1(var_1.a, var_0.b, var_1.c, u_input.c.x)).b.x, _wgslsmith_f_op_f32(arg_0 * _wgslsmith_f_op_f32(-arg_0)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1235f))))));
        }
    }
    switch (-1i) {
        case 49671i: {
            if (any(!select(select(!vec4<bool>(global1[_wgslsmith_index_u32(16337u, 20u)], false, global1[_wgslsmith_index_u32(u_input.a.x, 20u)], global1[_wgslsmith_index_u32(u_input.b, 20u)]), !vec4<bool>(global1[_wgslsmith_index_u32(0u, 20u)], global1[_wgslsmith_index_u32(94402u, 20u)], global1[_wgslsmith_index_u32(u_input.a.x, 20u)], global1[_wgslsmith_index_u32(0u, 20u)]), select(vec4<bool>(global1[_wgslsmith_index_u32(17180u, 20u)], global1[_wgslsmith_index_u32(21996u, 20u)], false, true), vec4<bool>(global1[_wgslsmith_index_u32(15904u, 20u)], global1[_wgslsmith_index_u32(1u, 20u)], global1[_wgslsmith_index_u32(4294967295u, 20u)], true), vec4<bool>(global1[_wgslsmith_index_u32(98817u, 20u)], true, global1[_wgslsmith_index_u32(93085u, 20u)], false))), select(select(vec4<bool>(global1[_wgslsmith_index_u32(49546u, 20u)], global1[_wgslsmith_index_u32(57673u, 20u)], global1[_wgslsmith_index_u32(u_input.a.x, 20u)], global1[_wgslsmith_index_u32(1u, 20u)]), vec4<bool>(false, global1[_wgslsmith_index_u32(114360u, 20u)], true, global1[_wgslsmith_index_u32(0u, 20u)]), vec4<bool>(global1[_wgslsmith_index_u32(1u, 20u)], global1[_wgslsmith_index_u32(u_input.b, 20u)], global1[_wgslsmith_index_u32(u_input.a.x, 20u)], global1[_wgslsmith_index_u32(11534u, 20u)])), !vec4<bool>(true, global1[_wgslsmith_index_u32(1u, 20u)], global1[_wgslsmith_index_u32(u_input.a.x, 20u)], global1[_wgslsmith_index_u32(22405u, 20u)]), true), global1[_wgslsmith_index_u32(~0u, 20u)]))) {
            }
        }
        case i32(-2147483648): {
        }
        case 21496i: {
        }
        default: {
            for (var var_0 = 2147483647i; ; var_0 += 1i) {
                if (LOOP_COUNTERS[25u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
            }
            switch (_wgslsmith_mod_i32(func_3(Struct_1(~(~vec3<i32>(u_input.c.x, u_input.c.x, 6371i)), _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(vec3<f32>(425f, global0[_wgslsmith_index_u32(24874u, 30u)], 669f) + vec3<f32>(1313f, arg_0, global0[_wgslsmith_index_u32(6155u, 30u)])), _wgslsmith_f_op_vec3_f32(-vec3<f32>(1349f, arg_0, -1460f)), select(vec3<bool>(false, global1[_wgslsmith_index_u32(126755u, 20u)], false), vec3<bool>(false, global1[_wgslsmith_index_u32(u_input.a.x, 20u)], global1[_wgslsmith_index_u32(51568u, 20u)]), false))), (i32(-2147483648) & u_input.c.x) | _wgslsmith_div_i32(u_input.c.x, u_input.c.x), ~u_input.c.x), Struct_1(u_input.c.xyz, vec3<f32>(_wgslsmith_f_op_f32(func_5()), -1000f, _wgslsmith_f_op_f32(func_5())), ~(-23931i), 0i), vec4<f32>(_wgslsmith_f_op_f32(round(arg_0)), -999f, 178f, -795f), func_4()).c, _wgslsmith_div_i32(14429i, 2147483647i))) {
                case 0i: {
                    let var_0 = u_input.c.x;
                    global1 = array<bool, 20>();
                    var var_1 = func_7(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-1478f, arg_0, _wgslsmith_f_op_f32(f32(-1f) * -1537f), _wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(36321u, 30u)]))) - _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(func_5()), _wgslsmith_f_op_f32(arg_0 - global0[_wgslsmith_index_u32(43938u, 30u)]), arg_0, global0[_wgslsmith_index_u32(select(1u, u_input.a.x, false), 30u)]))));
                    var var_2 = var_1.b.zy;
                    var_1 = Struct_1(~u_input.c.yzz, _wgslsmith_f_op_vec3_f32(vec3<f32>(-681f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0)), var_2.x) - _wgslsmith_f_op_vec3_f32(exp2(var_1.b))), ~(~u_input.c.x), _wgslsmith_mod_i32(u_input.c.x, _wgslsmith_mod_i32(~u_input.c.x, -1i)));
                }
                case -1i: {
                    global0 = array<f32, 30>();
                    global1 = array<bool, 20>();
                    global0 = array<f32, 30>();
                }
                case i32(-2147483648): {
                    let var_0 = Struct_1(-vec3<i32>(_wgslsmith_sub_i32(func_6(global1[_wgslsmith_index_u32(u_input.b, 20u)]).x, u_input.c.x | 18497i), 59576i, select(u_input.c.x, 33818i, true)), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(arg_0, 152f, _wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(u_input.a.x, 30u)])) - _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(select(vec3<f32>(arg_0, global0[_wgslsmith_index_u32(79335u, 30u)], arg_0), vec3<f32>(global0[_wgslsmith_index_u32(57009u, 30u)], global0[_wgslsmith_index_u32(u_input.b, 30u)], global0[_wgslsmith_index_u32(61533u, 30u)]), vec3<bool>(global1[_wgslsmith_index_u32(1u, 20u)], true, global1[_wgslsmith_index_u32(u_input.b, 20u)]))) - _wgslsmith_f_op_vec3_f32(-vec3<f32>(1396f, 1272f, global0[_wgslsmith_index_u32(54341u, 30u)]))))), -2787i, func_4().a.x);
                    let var_1 = !vec2<bool>(false, select(all(select(vec4<bool>(global1[_wgslsmith_index_u32(25835u, 20u)], true, true, false), vec4<bool>(global1[_wgslsmith_index_u32(4294967295u, 20u)], false, global1[_wgslsmith_index_u32(u_input.a.x, 20u)], global1[_wgslsmith_index_u32(4294967295u, 20u)]), global1[_wgslsmith_index_u32(11111u, 20u)])), global1[_wgslsmith_index_u32(4294967295u, 20u)], _wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(u_input.b, 30u)]) > 1260f));
                    global1 = array<bool, 20>();
                    var var_2 = select(true, false, select(false, _wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(_wgslsmith_mod_u32(12699u, 1u), 30u)] - 568f) > _wgslsmith_f_op_f32(f32(-1f) * -113f), var_1.x));
                }
                default: {
                    let var_0 = select(select(vec4<bool>(global1[_wgslsmith_index_u32(~(~u_input.b), 20u)], global1[_wgslsmith_index_u32(min(u_input.b, 0u), 20u)], !(!global1[_wgslsmith_index_u32(2060u, 20u)]), !(!global1[_wgslsmith_index_u32(u_input.a.x, 20u)])), vec4<bool>(global1[_wgslsmith_index_u32(29096u, 20u)], false, !(u_input.a.x >= 0u), u_input.c.x < firstLeadingBit(u_input.c.x)), !(!select(vec4<bool>(true, false, false, global1[_wgslsmith_index_u32(4294967295u, 20u)]), vec4<bool>(global1[_wgslsmith_index_u32(u_input.b, 20u)], global1[_wgslsmith_index_u32(u_input.a.x, 20u)], global1[_wgslsmith_index_u32(4294967295u, 20u)], global1[_wgslsmith_index_u32(1u, 20u)]), vec4<bool>(true, global1[_wgslsmith_index_u32(u_input.a.x, 20u)], true, global1[_wgslsmith_index_u32(1u, 20u)])))), select(!vec4<bool>(!global1[_wgslsmith_index_u32(1u, 20u)], true, true, !global1[_wgslsmith_index_u32(u_input.a.x, 20u)]), !select(select(vec4<bool>(false, true, global1[_wgslsmith_index_u32(4294967295u, 20u)], true), vec4<bool>(global1[_wgslsmith_index_u32(1u, 20u)], global1[_wgslsmith_index_u32(u_input.a.x, 20u)], false, global1[_wgslsmith_index_u32(4294967295u, 20u)]), global1[_wgslsmith_index_u32(97812u, 20u)]), !vec4<bool>(global1[_wgslsmith_index_u32(u_input.b, 20u)], false, false, false), true), !(!select(vec4<bool>(true, false, global1[_wgslsmith_index_u32(4755u, 20u)], global1[_wgslsmith_index_u32(0u, 20u)]), vec4<bool>(true, global1[_wgslsmith_index_u32(u_input.b, 20u)], global1[_wgslsmith_index_u32(u_input.a.x, 20u)], global1[_wgslsmith_index_u32(u_input.a.x, 20u)]), vec4<bool>(global1[_wgslsmith_index_u32(u_input.a.x, 20u)], true, false, global1[_wgslsmith_index_u32(u_input.b, 20u)])))), select(select(vec4<bool>(!global1[_wgslsmith_index_u32(1u, 20u)], true, any(vec2<bool>(global1[_wgslsmith_index_u32(80941u, 20u)], false)), true), vec4<bool>(all(vec2<bool>(global1[_wgslsmith_index_u32(1u, 20u)], true)), true && global1[_wgslsmith_index_u32(21909u, 20u)], 0i != u_input.c.x, -1954i < u_input.c.x), select(vec4<bool>(global1[_wgslsmith_index_u32(u_input.b, 20u)], global1[_wgslsmith_index_u32(u_input.b, 20u)], true, true), select(vec4<bool>(false, global1[_wgslsmith_index_u32(0u, 20u)], true, false), vec4<bool>(false, true, true, false), false), all(vec3<bool>(global1[_wgslsmith_index_u32(u_input.b, 20u)], global1[_wgslsmith_index_u32(4294967295u, 20u)], true)))), select(vec4<bool>(true, false, any(vec3<bool>(false, false, false)), any(vec2<bool>(true, true))), select(vec4<bool>(true, true, true, global1[_wgslsmith_index_u32(27162u, 20u)]), vec4<bool>(false, true, global1[_wgslsmith_index_u32(7248u, 20u)], global1[_wgslsmith_index_u32(29704u, 20u)]), select(vec4<bool>(true, true, global1[_wgslsmith_index_u32(u_input.b, 20u)], global1[_wgslsmith_index_u32(u_input.a.x, 20u)]), vec4<bool>(true, global1[_wgslsmith_index_u32(1u, 20u)], true, false), vec4<bool>(false, global1[_wgslsmith_index_u32(4294967295u, 20u)], true, false))), global1[_wgslsmith_index_u32(~u_input.b, 20u)]), vec4<bool>(false, false, true, func_7(vec4<f32>(arg_0, arg_0, global0[_wgslsmith_index_u32(u_input.a.x, 30u)], arg_0)).b.x < _wgslsmith_f_op_vec3_f32(func_8(vec3<bool>(false, true, global1[_wgslsmith_index_u32(41261u, 20u)]), Struct_1(vec3<i32>(28023i, 27619i, 2147483647i), vec3<f32>(512f, global0[_wgslsmith_index_u32(u_input.b, 30u)], global0[_wgslsmith_index_u32(1u, 30u)]), 0i, u_input.c.x), vec3<u32>(91147u, 63743u, 46093u), Struct_1(u_input.c.zzw, vec3<f32>(arg_0, -338f, global0[_wgslsmith_index_u32(8264u, 30u)]), u_input.c.x, u_input.c.x))).x)));
                    global1 = array<bool, 20>();
                    var var_1 = vec3<u32>(u_input.a.x, countOneBits(u_input.a.x), 0u);
                }
            }
            global0 = array<f32, 30>();
            global1 = array<bool, 20>();
            switch (countOneBits(func_3(Struct_1(vec3<i32>(u_input.c.x, 34435i, 18810i) & vec3<i32>(-25325i, i32(-2147483648), u_input.c.x), _wgslsmith_f_op_vec3_f32(-vec3<f32>(global0[_wgslsmith_index_u32(u_input.a.x, 30u)], 1077f, arg_0)), u_input.c.x, u_input.c.x), func_3(Struct_1(vec3<i32>(u_input.c.x, u_input.c.x, -11280i), vec3<f32>(794f, 1093f, arg_0), u_input.c.x, u_input.c.x), func_7(vec4<f32>(global0[_wgslsmith_index_u32(u_input.a.x, 30u)], -1000f, 919f, arg_0)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_0, global0[_wgslsmith_index_u32(u_input.a.x, 30u)], global0[_wgslsmith_index_u32(26791u, 30u)], 799f)), Struct_1(u_input.c.zwz, vec3<f32>(-1020f, arg_0, 1775f), u_input.c.x, u_input.c.x)), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(999f, global0[_wgslsmith_index_u32(0u, 30u)], global0[_wgslsmith_index_u32(u_input.b, 30u)], global0[_wgslsmith_index_u32(1u, 30u)])) + vec4<f32>(global0[_wgslsmith_index_u32(4294967295u, 30u)], 238f, global0[_wgslsmith_index_u32(1u, 30u)], 614f)), Struct_1(u_input.c.wxy & u_input.c.xzw, _wgslsmith_f_op_vec3_f32(-vec3<f32>(-1000f, global0[_wgslsmith_index_u32(u_input.b, 30u)], arg_0)), 0i, u_input.c.x)).a.x) >> (firstLeadingBit(4294967295u) % 32u)) {
                case 5333i: {
                    let var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-291f + global0[_wgslsmith_index_u32(48127u, 30u)]) + _wgslsmith_f_op_f32(sign(arg_0))) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(u_input.b, 30u)])))));
                }
                case -44439i: {
                    let var_0 = vec3<i32>(-1i) * -vec3<i32>(u_input.c.x, _wgslsmith_dot_vec3_i32(_wgslsmith_sub_vec3_i32(u_input.c.wyw, vec3<i32>(i32(-2147483648), 10878i, u_input.c.x)), firstTrailingBit(u_input.c.zwy)), u_input.c.x);
                    return func_3(Struct_1(vec3<i32>(1i, 1i, 1i), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(select(vec3<f32>(107f, arg_0, global0[_wgslsmith_index_u32(u_input.a.x, 30u)]), vec3<f32>(-936f, global0[_wgslsmith_index_u32(u_input.b, 30u)], -856f), vec3<bool>(global1[_wgslsmith_index_u32(u_input.b, 20u)], global1[_wgslsmith_index_u32(u_input.a.x, 20u)], true))), _wgslsmith_f_op_vec3_f32(-vec3<f32>(459f, 1571f, 759f))))), -3465i, -var_0.x), Struct_1(vec3<i32>(firstLeadingBit(var_0.x), min(var_0.x, 2147483647i), var_0.x), func_3(func_4(), Struct_1(_wgslsmith_mult_vec3_i32(u_input.c.zxx, vec3<i32>(var_0.x, u_input.c.x, 0i)), vec3<f32>(arg_0, global0[_wgslsmith_index_u32(u_input.b, 30u)], -124f), u_input.c.x, abs(var_0.x)), _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(1043f, -414f, arg_0, global0[_wgslsmith_index_u32(45100u, 30u)]))), _wgslsmith_f_op_vec4_f32(-vec4<f32>(-528f, -373f, -1286f, arg_0))), Struct_1(abs(var_0), _wgslsmith_f_op_vec3_f32(min(vec3<f32>(544f, -641f, 1277f), vec3<f32>(237f, 1211f, -537f))), -24406i, -42757i)).b, abs(~(~(-1i))), _wgslsmith_dot_vec4_i32(firstLeadingBit(~vec4<i32>(2147483647i, var_0.x, -48731i, -1i)), u_input.c)), _wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-1468f, global0[_wgslsmith_index_u32(0u, 30u)], global0[_wgslsmith_index_u32(u_input.a.x, 30u)], arg_0))))))), func_3(func_3(func_4(), Struct_1(var_0, vec3<f32>(global0[_wgslsmith_index_u32(13163u, 30u)], arg_0, arg_0), func_3(Struct_1(vec3<i32>(var_0.x, var_0.x, i32(-2147483648)), vec3<f32>(-954f, -608f, -270f), -1i, var_0.x), Struct_1(u_input.c.zxx, vec3<f32>(-887f, -1120f, 757f), 1i, u_input.c.x), vec4<f32>(204f, global0[_wgslsmith_index_u32(9852u, 30u)], -126f, -423f), Struct_1(var_0, vec3<f32>(global0[_wgslsmith_index_u32(u_input.a.x, 30u)], -1473f, -160f), 50636i, 1i)).c, var_0.x), _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(vec4<f32>(arg_0, 1259f, arg_0, arg_0) + vec4<f32>(386f, 564f, -1000f, 265f)), _wgslsmith_f_op_vec4_f32(step(vec4<f32>(global0[_wgslsmith_index_u32(4613u, 30u)], arg_0, arg_0, 175f), vec4<f32>(-780f, global0[_wgslsmith_index_u32(19122u, 30u)], arg_0, arg_0))), global1[_wgslsmith_index_u32(u_input.b, 20u)] || global1[_wgslsmith_index_u32(4294967295u, 20u)])), Struct_1(_wgslsmith_clamp_vec3_i32(vec3<i32>(35238i, -29420i, -1i), u_input.c.wwy, u_input.c.xzx), _wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(635f, -1248f, global0[_wgslsmith_index_u32(37661u, 30u)]))), -2996i, var_0.x)), func_7(vec4<f32>(global0[_wgslsmith_index_u32(~59355u, 30u)], _wgslsmith_f_op_f32(round(global0[_wgslsmith_index_u32(u_input.b, 30u)])), -1000f, _wgslsmith_div_f32(global0[_wgslsmith_index_u32(u_input.a.x, 30u)], global0[_wgslsmith_index_u32(21388u, 30u)]))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_0, global0[_wgslsmith_index_u32(u_input.b, 30u)], -612f, 1439f)) + _wgslsmith_f_op_vec4_f32(-vec4<f32>(827f, global0[_wgslsmith_index_u32(2229u, 30u)], arg_0, -1000f))) + _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_0, arg_0, arg_0, global0[_wgslsmith_index_u32(33574u, 30u)])), _wgslsmith_f_op_vec4_f32(vec4<f32>(-1870f, arg_0, 148f, arg_0) + vec4<f32>(322f, global0[_wgslsmith_index_u32(u_input.b, 30u)], arg_0, -221f)), u_input.b >= u_input.b))), Struct_1(~func_7(vec4<f32>(arg_0, arg_0, global0[_wgslsmith_index_u32(u_input.b, 30u)], -211f)).a, vec3<f32>(_wgslsmith_div_f32(arg_0, -747f), 1293f, arg_0), -_wgslsmith_sub_i32(2147483647i, u_input.c.x), var_0.x)));
                }
                case 0i: {
                    global0 = array<f32, 30>();
                    let var_0 = func_3(func_7(_wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_0, arg_0, 110f, -690f)))))), func_3(func_3(func_3(Struct_1(u_input.c.zyx, vec3<f32>(-1247f, 408f, 762f), -1i, -13696i), func_3(Struct_1(u_input.c.zwy, vec3<f32>(global0[_wgslsmith_index_u32(4294967295u, 30u)], 431f, -486f), u_input.c.x, u_input.c.x), Struct_1(vec3<i32>(u_input.c.x, -6340i, u_input.c.x), vec3<f32>(-356f, 1190f, 898f), -35793i, -43008i), vec4<f32>(-1000f, global0[_wgslsmith_index_u32(0u, 30u)], -841f, 332f), Struct_1(u_input.c.yxz, vec3<f32>(939f, global0[_wgslsmith_index_u32(1u, 30u)], -934f), 0i, u_input.c.x)), _wgslsmith_f_op_vec4_f32(step(vec4<f32>(2072f, global0[_wgslsmith_index_u32(u_input.b, 30u)], -1000f, -419f), vec4<f32>(1000f, global0[_wgslsmith_index_u32(u_input.b, 30u)], global0[_wgslsmith_index_u32(u_input.a.x, 30u)], arg_0))), Struct_1(vec3<i32>(i32(-2147483648), 2147483647i, u_input.c.x), vec3<f32>(global0[_wgslsmith_index_u32(1u, 30u)], 571f, -148f), i32(-2147483648), 1i)), func_3(Struct_1(vec3<i32>(-1i, i32(-2147483648), 41334i), vec3<f32>(arg_0, global0[_wgslsmith_index_u32(u_input.a.x, 30u)], global0[_wgslsmith_index_u32(u_input.a.x, 30u)]), -3548i, u_input.c.x), func_3(Struct_1(u_input.c.yyx, vec3<f32>(-722f, arg_0, 2264f), u_input.c.x, u_input.c.x), Struct_1(vec3<i32>(u_input.c.x, -29404i, -11055i), vec3<f32>(global0[_wgslsmith_index_u32(3830u, 30u)], global0[_wgslsmith_index_u32(0u, 30u)], arg_0), u_input.c.x, u_input.c.x), vec4<f32>(817f, global0[_wgslsmith_index_u32(u_input.b, 30u)], -882f, global0[_wgslsmith_index_u32(u_input.a.x, 30u)]), Struct_1(u_input.c.zxx, vec3<f32>(arg_0, arg_0, global0[_wgslsmith_index_u32(u_input.a.x, 30u)]), u_input.c.x, u_input.c.x)), _wgslsmith_f_op_vec4_f32(round(vec4<f32>(-1848f, arg_0, -572f, 1463f))), func_3(Struct_1(vec3<i32>(-51584i, u_input.c.x, u_input.c.x), vec3<f32>(global0[_wgslsmith_index_u32(u_input.b, 30u)], global0[_wgslsmith_index_u32(u_input.a.x, 30u)], global0[_wgslsmith_index_u32(u_input.b, 30u)]), 2147483647i, 0i), Struct_1(u_input.c.zxz, vec3<f32>(global0[_wgslsmith_index_u32(703u, 30u)], -927f, global0[_wgslsmith_index_u32(4294967295u, 30u)]), 2147483647i, u_input.c.x), vec4<f32>(-960f, global0[_wgslsmith_index_u32(u_input.b, 30u)], 1962f, 988f), Struct_1(vec3<i32>(u_input.c.x, u_input.c.x, u_input.c.x), vec3<f32>(global0[_wgslsmith_index_u32(u_input.b, 30u)], global0[_wgslsmith_index_u32(34130u, 30u)], global0[_wgslsmith_index_u32(u_input.b, 30u)]), 29638i, 15571i))), _wgslsmith_f_op_vec4_f32(floor(vec4<f32>(-631f, arg_0, 1611f, arg_0))), Struct_1(func_3(Struct_1(u_input.c.wwx, vec3<f32>(130f, global0[_wgslsmith_index_u32(33781u, 30u)], arg_0), u_input.c.x, u_input.c.x), Struct_1(vec3<i32>(u_input.c.x, 1i, 14049i), vec3<f32>(arg_0, global0[_wgslsmith_index_u32(u_input.a.x, 30u)], -505f), u_input.c.x, u_input.c.x), vec4<f32>(1575f, arg_0, arg_0, arg_0), Struct_1(u_input.c.zyw, vec3<f32>(arg_0, -793f, 237f), u_input.c.x, 2147483647i)).a, _wgslsmith_f_op_vec3_f32(-vec3<f32>(305f, -598f, 1915f)), i32(-1i) * -18986i, -u_input.c.x)), func_3(func_4(), func_3(Struct_1(vec3<i32>(u_input.c.x, 1i, u_input.c.x), vec3<f32>(-144f, 335f, arg_0), u_input.c.x, u_input.c.x), func_7(vec4<f32>(global0[_wgslsmith_index_u32(u_input.a.x, 30u)], arg_0, -1892f, 1237f)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(647f, 1070f, 772f, 899f)), func_7(vec4<f32>(arg_0, arg_0, 930f, arg_0))), _wgslsmith_f_op_vec4_f32(-vec4<f32>(global0[_wgslsmith_index_u32(1u, 30u)], arg_0, global0[_wgslsmith_index_u32(4294967295u, 30u)], arg_0)), Struct_1(~u_input.c.zzy, _wgslsmith_f_op_vec3_f32(-vec3<f32>(603f, arg_0, global0[_wgslsmith_index_u32(1u, 30u)])), -u_input.c.x, ~21829i)), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(global0[_wgslsmith_index_u32(0u, 30u)], global0[_wgslsmith_index_u32(3241u, 30u)], arg_0, arg_0) * vec4<f32>(global0[_wgslsmith_index_u32(u_input.a.x, 30u)], 620f, global0[_wgslsmith_index_u32(u_input.a.x, 30u)], -472f))) + vec4<f32>(1740f, -539f, _wgslsmith_f_op_f32(select(global0[_wgslsmith_index_u32(u_input.b, 30u)], global0[_wgslsmith_index_u32(u_input.a.x, 30u)], global1[_wgslsmith_index_u32(u_input.b, 20u)])), arg_0)), func_7(vec4<f32>(_wgslsmith_f_op_f32(-arg_0), 518f, _wgslsmith_f_op_f32(-377f + arg_0), _wgslsmith_f_op_f32(-667f * 986f)))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(select(vec4<f32>(global0[_wgslsmith_index_u32(u_input.b, 30u)], -420f, -1453f, 849f), vec4<f32>(global0[_wgslsmith_index_u32(u_input.b, 30u)], 555f, global0[_wgslsmith_index_u32(u_input.a.x, 30u)], arg_0), false)), _wgslsmith_f_op_vec4_f32(select(vec4<f32>(-1533f, global0[_wgslsmith_index_u32(u_input.a.x, 30u)], 647f, arg_0), _wgslsmith_f_op_vec4_f32(vec4<f32>(arg_0, global0[_wgslsmith_index_u32(u_input.b, 30u)], global0[_wgslsmith_index_u32(u_input.b, 30u)], -1495f) * vec4<f32>(705f, arg_0, 546f, -444f)), !vec4<bool>(true, global1[_wgslsmith_index_u32(u_input.a.x, 20u)], global1[_wgslsmith_index_u32(4294967295u, 20u)], global1[_wgslsmith_index_u32(0u, 20u)]))), select(vec4<bool>(global1[_wgslsmith_index_u32(u_input.b, 20u)], false, true, true), vec4<bool>(true, true, true, true), select(global1[_wgslsmith_index_u32(u_input.b, 20u)], global1[_wgslsmith_index_u32(u_input.a.x, 20u)], global1[_wgslsmith_index_u32(22028u, 20u)]))))), Struct_1(vec3<i32>(abs(~(-1i)), -8561i, -(~(i32(-2147483648)))), _wgslsmith_f_op_vec3_f32(vec3<f32>(-2329f, func_7(vec4<f32>(arg_0, global0[_wgslsmith_index_u32(u_input.b, 30u)], arg_0, global0[_wgslsmith_index_u32(1u, 30u)])).b.x, arg_0) - _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(-693f, global0[_wgslsmith_index_u32(u_input.b, 30u)], global0[_wgslsmith_index_u32(u_input.b, 30u)]) + vec3<f32>(546f, -1000f, -1034f)))), func_3(func_4(), Struct_1(reverseBits(vec3<i32>(-18625i, u_input.c.x, u_input.c.x)), vec3<f32>(global0[_wgslsmith_index_u32(u_input.b, 30u)], global0[_wgslsmith_index_u32(0u, 30u)], 113f), u_input.c.x, u_input.c.x), _wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(select(vec4<f32>(195f, global0[_wgslsmith_index_u32(0u, 30u)], 102f, global0[_wgslsmith_index_u32(u_input.a.x, 30u)]), vec4<f32>(arg_0, 583f, -207f, arg_0), vec4<bool>(global1[_wgslsmith_index_u32(u_input.a.x, 20u)], global1[_wgslsmith_index_u32(4294967295u, 20u)], global1[_wgslsmith_index_u32(4294967295u, 20u)], global1[_wgslsmith_index_u32(u_input.b, 20u)]))))), Struct_1(_wgslsmith_mult_vec3_i32(u_input.c.zyw, vec3<i32>(i32(-2147483648), u_input.c.x, 35128i)), _wgslsmith_f_op_vec3_f32(vec3<f32>(-1164f, arg_0, global0[_wgslsmith_index_u32(0u, 30u)]) + vec3<f32>(arg_0, 545f, arg_0)), -18699i, func_6(global1[_wgslsmith_index_u32(83819u, 20u)]).x)).c, i32(-2147483648)));
                    let var_1 = u_input.a.x;
                    var var_2 = !(!vec2<bool>(global1[_wgslsmith_index_u32(1325u, 20u)], any(!vec3<bool>(global1[_wgslsmith_index_u32(u_input.b, 20u)], global1[_wgslsmith_index_u32(1u, 20u)], global1[_wgslsmith_index_u32(23789u, 20u)]))));
                    var var_3 = global0[_wgslsmith_index_u32(var_1, 30u)];
                }
                case -45916i: {
                    var var_0 = -1000f;
                    let var_1 = func_7(_wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(vec4<f32>(1000f, arg_0, global0[_wgslsmith_index_u32(u_input.a.x, 30u)], -988f), _wgslsmith_f_op_vec4_f32(-vec4<f32>(229f, 169f, global0[_wgslsmith_index_u32(u_input.b, 30u)], arg_0))) * _wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(2052f, arg_0, global0[_wgslsmith_index_u32(19384u, 30u)], arg_0)))), vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -248f)), global0[_wgslsmith_index_u32(~(6455u >> (u_input.b % 32u)), 30u)], _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -255f) - _wgslsmith_f_op_f32(f32(-1f) * -940f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -1142f) - 1260f)))));
                    let var_2 = ~1u;
                }
                default: {
                    var var_0 = ~(u_input.b ^ (~1u & u_input.a.x));
                    var var_1 = Struct_1(u_input.c.ywy, _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(exp2(vec3<f32>(_wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(u_input.b, 30u)]), -323f, global0[_wgslsmith_index_u32(_wgslsmith_mult_u32(0u, u_input.a.x), 30u)]))), _wgslsmith_f_op_vec3_f32(exp2(vec3<f32>(_wgslsmith_f_op_f32(func_5()), _wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(11186u, 30u)] - 916f), arg_0))), global1[_wgslsmith_index_u32(abs(u_input.b), 20u)])), i32(-1i) * -1i, _wgslsmith_clamp_i32(18178i, func_7(vec4<f32>(_wgslsmith_f_op_f32(f32(-1f) * -2098f), global0[_wgslsmith_index_u32(_wgslsmith_mult_u32(17829u, u_input.b), 30u)], _wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(0u, 30u)] + -1035f), 718f)).d, _wgslsmith_add_i32(u_input.c.x, firstTrailingBit(29347i)) << (~1u % 32u)));
                    let var_2 = ~977u;
                    let var_3 = _wgslsmith_clamp_vec2_u32(vec2<u32>(u_input.b, 50261u), max(~vec2<u32>(var_2, var_2), vec2<u32>(u_input.b, reverseBits(21381u) & var_2)), _wgslsmith_clamp_vec2_u32(vec2<u32>(~u_input.a.x, 1u), vec2<u32>(_wgslsmith_div_u32(18970u, 4294967295u), 4294967295u), ~(~u_input.a)));
                }
            }
        }
    }
    var var_0 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(select(vec4<f32>(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(f32(-1f) * -1000f))), _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(sign(global0[_wgslsmith_index_u32(1u, 30u)])))), -1005f, _wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(u_input.b << (u_input.a.x % 32u), 30u)] + _wgslsmith_f_op_f32(-2591f))), vec4<f32>(arg_0, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(global0[_wgslsmith_index_u32(u_input.a.x, 30u)], global0[_wgslsmith_index_u32(u_input.b, 30u)])) - _wgslsmith_f_op_f32(-234f)), _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(step(arg_0, arg_0)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_0 - arg_0))), false)));
    if (_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(_wgslsmith_mult_u32(u_input.a.x, 0u), 30u)]) * _wgslsmith_f_op_f32(-var_0.x)) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -974f))) > _wgslsmith_f_op_f32(-_wgslsmith_f_op_vec3_f32(func_8(!select(vec3<bool>(false, global1[_wgslsmith_index_u32(u_input.b, 20u)], false), vec3<bool>(global1[_wgslsmith_index_u32(u_input.b, 20u)], false, false), false), func_4(), vec3<u32>(u_input.b, 1u, 44266u), Struct_1(u_input.c.ywx ^ vec3<i32>(u_input.c.x, u_input.c.x, u_input.c.x), _wgslsmith_f_op_vec3_f32(vec3<f32>(var_0.x, -1332f, global0[_wgslsmith_index_u32(36575u, 30u)]) + var_0.wyz), _wgslsmith_dot_vec3_i32(u_input.c.zzz, vec3<i32>(u_input.c.x, 0i, u_input.c.x)), _wgslsmith_dot_vec2_i32(u_input.c.zz, vec2<i32>(-34202i, i32(-2147483648)))))).x)) {
        let var_1 = vec4<u32>(_wgslsmith_dot_vec3_u32(abs(vec3<u32>(4294967295u, 4294967295u, 4294967295u)), _wgslsmith_mult_vec3_u32(vec3<u32>(4294967295u, 49908u, u_input.a.x), vec3<u32>(u_input.a.x, 1u, u_input.a.x))) ^ abs(~u_input.a.x), ~1u, reverseBits(u_input.b), 16459u) ^ ~vec4<u32>(_wgslsmith_sub_u32(_wgslsmith_dot_vec4_u32(vec4<u32>(u_input.b, 4294967295u, u_input.a.x, 33138u), vec4<u32>(u_input.b, u_input.a.x, 0u, u_input.a.x)), u_input.b), _wgslsmith_mod_u32(95467u, ~0u), firstLeadingBit(u_input.b), ~countOneBits(u_input.b));
        var_0 = _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(round(vec4<f32>(arg_0, _wgslsmith_f_op_f32(func_5()), _wgslsmith_f_op_f32(-2311f), _wgslsmith_div_f32(_wgslsmith_f_op_f32(trunc(global0[_wgslsmith_index_u32(0u, 30u)])), global0[_wgslsmith_index_u32(abs(var_1.x), 30u)])))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(ceil(global0[_wgslsmith_index_u32(var_1.x, 30u)])), arg_0, _wgslsmith_f_op_f32(-var_0.x), _wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(u_input.a.x, 30u)] * 535f)))));
        var var_2 = -1106f;
        var_2 = arg_0;
        var var_3 = Struct_1(_wgslsmith_add_vec3_i32(_wgslsmith_sub_vec3_i32(u_input.c.yzy, func_7(vec4<f32>(var_0.x, -570f, -860f, -599f)).a), u_input.c.yxy), vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-136f + var_0.x) + -386f) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_vec3_f32(func_8(vec3<bool>(global1[_wgslsmith_index_u32(var_1.x, 20u)], global1[_wgslsmith_index_u32(u_input.a.x, 20u)], true), Struct_1(vec3<i32>(2147483647i, -26678i, u_input.c.x), vec3<f32>(-2186f, arg_0, -1263f), -2043i, u_input.c.x), var_1.www, Struct_1(vec3<i32>(i32(-2147483648), 0i, -46629i), vec3<f32>(var_0.x, arg_0, arg_0), -1i, u_input.c.x))).x)), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(105f)) - _wgslsmith_f_op_f32(f32(-1f) * -2302f)))), 200f), i32(-1i) * -1i, -1i);
    }
    switch (func_3(func_7(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(vec4<f32>(var_0.x, global0[_wgslsmith_index_u32(u_input.b, 30u)], arg_0, global0[_wgslsmith_index_u32(1u, 30u)]), vec4<f32>(var_0.x, global0[_wgslsmith_index_u32(u_input.b, 30u)], 109f, 347f))), _wgslsmith_div_vec4_f32(_wgslsmith_div_vec4_f32(vec4<f32>(-765f, 171f, var_0.x, global0[_wgslsmith_index_u32(u_input.a.x, 30u)]), vec4<f32>(1000f, 849f, -493f, -172f)), vec4<f32>(arg_0, global0[_wgslsmith_index_u32(u_input.a.x, 30u)], global0[_wgslsmith_index_u32(65404u, 30u)], -1682f)))), Struct_1(func_3(Struct_1(vec3<i32>(u_input.c.x, u_input.c.x, 0i), _wgslsmith_f_op_vec3_f32(var_0.wyx + var_0.zxy), u_input.c.x, func_7(vec4<f32>(-1490f, -1265f, var_0.x, arg_0)).a.x), Struct_1(_wgslsmith_div_vec3_i32(u_input.c.xxx, vec3<i32>(u_input.c.x, 53550i, -1i)), _wgslsmith_f_op_vec3_f32(-vec3<f32>(var_0.x, arg_0, 1415f)), abs(-9852i), _wgslsmith_add_i32(u_input.c.x, u_input.c.x)), _wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(var_0.x, var_0.x, -702f, global0[_wgslsmith_index_u32(885u, 30u)]))), _wgslsmith_f_op_vec4_f32(-vec4<f32>(-600f, arg_0, -1000f, -738f)))), Struct_1(vec3<i32>(0i, 0i, u_input.c.x), _wgslsmith_f_op_vec3_f32(-vec3<f32>(var_0.x, global0[_wgslsmith_index_u32(u_input.b, 30u)], var_0.x)), u_input.c.x | -36491i, _wgslsmith_dot_vec4_i32(vec4<i32>(1i, 0i, u_input.c.x, 17125i), vec4<i32>(1i, -1i, u_input.c.x, 65820i)))).a, var_0.zyw, min(abs(_wgslsmith_mult_i32(u_input.c.x, -1i)), 2147483647i), _wgslsmith_div_i32(u_input.c.x, max(~(-24394i), _wgslsmith_div_i32(-18147i, u_input.c.x)))), _wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(min(vec4<f32>(var_0.x, 848f, -377f, -738f), vec4<f32>(var_0.x, var_0.x, var_0.x, var_0.x)))), _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(1157f, var_0.x, -1000f, 367f)) - _wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_0, -354f, var_0.x, -1000f))), vec4<f32>(573f, _wgslsmith_f_op_f32(step(arg_0, 1700f)), func_7(vec4<f32>(618f, 1969f, arg_0, arg_0)).b.x, _wgslsmith_f_op_f32(-1226f)), false)))), Struct_1(func_4().a, _wgslsmith_f_op_vec3_f32(-var_0.wzx), u_input.c.x, u_input.c.x)).d) {
        case -10706i: {
            switch (u_input.c.x) {
                case 0i: {
                    global0 = array<f32, 30>();
                    var var_1 = vec4<bool>(all(select(!select(vec3<bool>(global1[_wgslsmith_index_u32(33913u, 20u)], global1[_wgslsmith_index_u32(u_input.b, 20u)], true), vec3<bool>(global1[_wgslsmith_index_u32(u_input.a.x, 20u)], global1[_wgslsmith_index_u32(u_input.b, 20u)], false), vec3<bool>(global1[_wgslsmith_index_u32(11955u, 20u)], false, global1[_wgslsmith_index_u32(u_input.b, 20u)])), select(select(vec3<bool>(true, global1[_wgslsmith_index_u32(u_input.a.x, 20u)], global1[_wgslsmith_index_u32(u_input.a.x, 20u)]), vec3<bool>(true, true, global1[_wgslsmith_index_u32(88059u, 20u)]), global1[_wgslsmith_index_u32(2022u, 20u)]), select(vec3<bool>(false, true, false), vec3<bool>(true, global1[_wgslsmith_index_u32(u_input.a.x, 20u)], global1[_wgslsmith_index_u32(u_input.b, 20u)]), vec3<bool>(global1[_wgslsmith_index_u32(1u, 20u)], global1[_wgslsmith_index_u32(u_input.b, 20u)], global1[_wgslsmith_index_u32(u_input.a.x, 20u)])), select(vec3<bool>(global1[_wgslsmith_index_u32(u_input.b, 20u)], global1[_wgslsmith_index_u32(60041u, 20u)], global1[_wgslsmith_index_u32(11138u, 20u)]), vec3<bool>(global1[_wgslsmith_index_u32(u_input.b, 20u)], false, false), vec3<bool>(global1[_wgslsmith_index_u32(u_input.b, 20u)], global1[_wgslsmith_index_u32(4294967295u, 20u)], global1[_wgslsmith_index_u32(u_input.a.x, 20u)]))), select(vec3<bool>(true, global1[_wgslsmith_index_u32(4294967295u, 20u)], global1[_wgslsmith_index_u32(35891u, 20u)]), select(vec3<bool>(global1[_wgslsmith_index_u32(3405u, 20u)], global1[_wgslsmith_index_u32(22899u, 20u)], global1[_wgslsmith_index_u32(u_input.a.x, 20u)]), vec3<bool>(true, false, true), vec3<bool>(true, global1[_wgslsmith_index_u32(u_input.a.x, 20u)], global1[_wgslsmith_index_u32(u_input.a.x, 20u)])), true))), false, !(!all(!vec3<bool>(false, true, global1[_wgslsmith_index_u32(u_input.a.x, 20u)]))), select(select(!global1[_wgslsmith_index_u32(u_input.b, 20u)], false, true), any(!vec2<bool>(false, global1[_wgslsmith_index_u32(88535u, 20u)])), true));
                }
                case 2147483647i: {
                    global0 = array<f32, 30>();
                    global1 = array<bool, 20>();
                    global0 = array<f32, 30>();
                }
                case 38717i: {
                    var var_1 = vec2<bool>(!select(!global1[_wgslsmith_index_u32(u_input.b, 20u)] & global1[_wgslsmith_index_u32(~1u, 20u)], any(vec2<bool>(global1[_wgslsmith_index_u32(u_input.a.x, 20u)], true)), any(vec2<bool>(global1[_wgslsmith_index_u32(0u, 20u)], false))), !global1[_wgslsmith_index_u32(~u_input.b, 20u)]);
                }
                case 1i: {
                    return func_7(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(step(vec4<f32>(arg_0, global0[_wgslsmith_index_u32(1u, 30u)], var_0.x, 2089f), _wgslsmith_f_op_vec4_f32(-vec4<f32>(var_0.x, arg_0, global0[_wgslsmith_index_u32(u_input.a.x, 30u)], -689f)))) * vec4<f32>(_wgslsmith_f_op_f32(f32(-1f) * -820f), -974f, -210f, _wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(u_input.a.x, 30u)])))));
                }
                default: {
                    global0 = array<f32, 30>();
                    var var_1 = Struct_1(u_input.c.yww, _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-var_0.www) * _wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(-var_0.x), global0[_wgslsmith_index_u32(19446u, 30u)], _wgslsmith_f_op_f32(arg_0 - var_0.x)) - _wgslsmith_f_op_vec3_f32(var_0.zyz + _wgslsmith_f_op_vec3_f32(vec3<f32>(arg_0, 147f, 1417f) * vec3<f32>(-428f, var_0.x, 1362f))))), u_input.c.x, u_input.c.x);
                    let var_2 = Struct_1(vec3<i32>(~_wgslsmith_dot_vec4_i32(u_input.c >> (vec4<u32>(4427u, 0u, 4294967295u, u_input.a.x) % vec4<u32>(32u)), ~u_input.c), ~(-13340i), ~10100i), _wgslsmith_f_op_vec3_f32(exp2(var_0.xyw)), u_input.c.x, ~(-abs(u_input.c.x)));
                }
            }
        }
        case 0i: {
            var var_1 = vec4<i32>(_wgslsmith_mult_i32(-(u_input.c.x & _wgslsmith_dot_vec3_i32(u_input.c.yzw, u_input.c.yxw)), 0i << (reverseBits(select(4294967295u, u_input.a.x, false)) % 32u)), u_input.c.x, 53810i ^ ~(~u_input.c.x), ~(i32(-2147483648)));
            global0 = array<f32, 30>();
            switch (0i) {
                default: {
                }
            }
            for (var var_2 = -u_input.c.x; ; var_2 -= 1i) {
                if (LOOP_COUNTERS[26u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
            }
            let var_2 = func_4().b;
        }
        case i32(-2147483648): {
        }
        case 5406i: {
            for (var var_1 = 0i; ; var_1 += 1i) {
                if (LOOP_COUNTERS[27u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[27u] = LOOP_COUNTERS[27u] + 1u;
            }
            global0 = array<f32, 30>();
            let var_1 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_0.x) * _wgslsmith_div_f32(global0[_wgslsmith_index_u32(36186u ^ _wgslsmith_div_u32(u_input.b, ~u_input.b), 30u)], -867f));
            var var_2 = Struct_1(u_input.c.wyx, var_0.zwz, ~2147483647i, 25145i);
            if (global1[_wgslsmith_index_u32(u_input.a.x, 20u)]) {
                var var_3 = vec3<f32>(_wgslsmith_f_op_f32(246f - _wgslsmith_f_op_f32(-_wgslsmith_div_f32(1314f, _wgslsmith_div_f32(arg_0, arg_0)))), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-var_2.b.x))), 746f);
                let var_4 = global1[_wgslsmith_index_u32(abs(u_input.b), 20u)];
                var var_5 = _wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_2.b.x)), arg_0, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1781f)), 775f) * vec4<f32>(-427f, _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(532f + _wgslsmith_f_op_f32(-635f - -782f)), -532f)), _wgslsmith_f_op_f32(-var_2.b.x), var_3.x));
            }
        }
        default: {
            global1 = array<bool, 20>();
            global0 = array<f32, 30>();
            if (var_0.x == _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(floor(112f))))) {
                var var_1 = Struct_1(reverseBits(vec3<i32>(-(~u_input.c.x), u_input.c.x, _wgslsmith_sub_i32(u_input.c.x, 1i))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(sign(var_0.zww)) + _wgslsmith_f_op_vec3_f32(-vec3<f32>(global0[_wgslsmith_index_u32(22019u, 30u)], global0[_wgslsmith_index_u32(u_input.a.x, 30u)], var_0.x))) + vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(1933f, 2662f, false))), 1000f, _wgslsmith_f_op_f32(465f - 625f))), u_input.c.x >> (~4294967295u % 32u), u_input.c.x);
                var var_2 = 21153u;
                var var_3 = false;
                var var_4 = vec3<f32>(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(563f + arg_0) + global0[_wgslsmith_index_u32(min(u_input.a.x, u_input.b), 30u)])))), _wgslsmith_f_op_f32(_wgslsmith_f_op_vec3_f32(func_8(!select(vec3<bool>(global1[_wgslsmith_index_u32(u_input.b, 20u)], global1[_wgslsmith_index_u32(u_input.a.x, 20u)], global1[_wgslsmith_index_u32(u_input.a.x, 20u)]), vec3<bool>(false, true, global1[_wgslsmith_index_u32(u_input.b, 20u)]), vec3<bool>(false, global1[_wgslsmith_index_u32(u_input.a.x, 20u)], global1[_wgslsmith_index_u32(4294967295u, 20u)])), Struct_1(~u_input.c.zyx, vec3<f32>(var_0.x, var_0.x, var_0.x), u_input.c.x, abs(-1i)), vec3<u32>(~1u, _wgslsmith_dot_vec3_u32(vec3<u32>(17386u, u_input.a.x, 19731u), vec3<u32>(u_input.b, u_input.b, u_input.b)), 4294967295u), func_7(vec4<f32>(-782f, var_0.x, global0[_wgslsmith_index_u32(u_input.a.x, 30u)], -925f)))).x * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(f32(-1f) * -415f))) * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(4294967295u, 30u)] + arg_0) - _wgslsmith_div_f32(var_1.b.x, 1872f)))), _wgslsmith_f_op_f32(trunc(arg_0)));
                var var_5 = Struct_1(vec3<i32>(u_input.c.x, min(~(i32(-1i) * i32(-2147483648)), -countOneBits(i32(-2147483648))), _wgslsmith_div_i32(-func_4().c, -35672i)), _wgslsmith_f_op_vec3_f32(round(var_1.b)), func_6(true).x, _wgslsmith_mult_i32(_wgslsmith_dot_vec3_i32(~var_1.a, vec3<i32>(u_input.c.x, u_input.c.x, u_input.c.x)) & var_1.c, 19351i));
            }
            var var_1 = ~u_input.b;
        }
    }
    return func_4();
}

fn func_10(arg_0: Struct_1, arg_1: Struct_1, arg_2: bool, arg_3: f32) -> vec3<f32> {
    global1 = array<bool, 20>();
    if (global1[_wgslsmith_index_u32(1u, 20u)]) {
    }
    global0 = array<f32, 30>();
    let var_0 = Struct_1(func_7(_wgslsmith_f_op_vec4_f32(select(vec4<f32>(-413f, func_7(vec4<f32>(arg_1.b.x, arg_0.b.x, -1169f, arg_1.b.x)).b.x, 1112f, _wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(u_input.b, 30u)] + -299f)), _wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(vec4<f32>(261f, arg_3, arg_3, -1289f) - vec4<f32>(global0[_wgslsmith_index_u32(24791u, 30u)], 1230f, 322f, 253f)))), select(vec4<bool>(arg_2, true, global1[_wgslsmith_index_u32(u_input.a.x, 20u)], true), vec4<bool>(true, global1[_wgslsmith_index_u32(u_input.b, 20u)], true, false), !vec4<bool>(global1[_wgslsmith_index_u32(u_input.b, 20u)], global1[_wgslsmith_index_u32(52623u, 20u)], global1[_wgslsmith_index_u32(1u, 20u)], arg_2))))).a, arg_0.b, 5914i, _wgslsmith_clamp_i32(4140i & (i32(-1i) * -arg_0.a.x), 20419i, i32(-2147483648)));
    let var_1 = _wgslsmith_mult_i32(select(min(-19963i, _wgslsmith_mod_i32(countOneBits(arg_0.c), _wgslsmith_mod_i32(arg_0.c, -13249i))), _wgslsmith_sub_i32(abs(_wgslsmith_sub_i32(u_input.c.x, 0i)), arg_1.d), false & select(false & global1[_wgslsmith_index_u32(65850u, 20u)], false, false)), ~var_0.a.x);
    return _wgslsmith_div_vec3_f32(var_0.b, vec3<f32>(-1403f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_div_f32(arg_1.b.x, -1146f))), 1000f));
}

fn func_11(arg_0: vec3<f32>, arg_1: vec3<f32>) -> vec4<bool> {
    global1 = array<bool, 20>();
    let var_0 = !vec3<bool>(global1[_wgslsmith_index_u32(4294967295u, 20u)], 9606u < _wgslsmith_dot_vec4_u32(_wgslsmith_div_vec4_u32(vec4<u32>(u_input.a.x, u_input.b, u_input.b, u_input.b), vec4<u32>(1u, 1u, 77798u, u_input.a.x)), _wgslsmith_mult_vec4_u32(vec4<u32>(u_input.b, u_input.b, 4294967295u, 4294967295u), vec4<u32>(33558u, 0u, 4294967295u, 72459u))), global1[_wgslsmith_index_u32(firstTrailingBit(~u_input.b) << (50916u % 32u), 20u)]);
    var var_1 = vec4<u32>(18219u >> (_wgslsmith_mod_u32(min(4294967295u, ~4593u), _wgslsmith_div_u32(61752u, ~u_input.a.x)) % 32u), _wgslsmith_dot_vec3_u32(vec3<u32>(firstTrailingBit(~37636u), 0u, ~(~u_input.b)), vec3<u32>(_wgslsmith_div_u32(~u_input.b, _wgslsmith_mod_u32(u_input.a.x, u_input.b)), ~u_input.a.x & firstTrailingBit(u_input.a.x), _wgslsmith_div_u32(_wgslsmith_div_u32(u_input.a.x, 74346u), ~4294967295u))), u_input.a.x, u_input.a.x);
    for (var var_2: i32; var_2 != 35876i; var_2 = ~func_6(var_0.x && true).x) {
        if (LOOP_COUNTERS[28u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[28u] = LOOP_COUNTERS[28u] + 1u;
        global0 = array<f32, 30>();
    }
    global1 = array<bool, 20>();
    return select(vec4<bool>(global1[_wgslsmith_index_u32(_wgslsmith_clamp_u32(_wgslsmith_mult_u32(var_1.x, countOneBits(4294967295u)), 4294967295u, 64899u), 20u)], 2147483647i <= _wgslsmith_add_i32(u_input.c.x, _wgslsmith_sub_i32(-1i, u_input.c.x)), u_input.a.x == _wgslsmith_mod_u32(0u, 31170u), global1[_wgslsmith_index_u32(_wgslsmith_sub_u32(~(~var_1.x), ~var_1.x), 20u)]), !(!select(!vec4<bool>(false, true, true, global1[_wgslsmith_index_u32(u_input.a.x, 20u)]), vec4<bool>(var_0.x, false, var_0.x, global1[_wgslsmith_index_u32(u_input.b, 20u)]), !global1[_wgslsmith_index_u32(0u, 20u)])), !select(!vec4<bool>(global1[_wgslsmith_index_u32(var_1.x, 20u)], var_0.x, var_0.x, global1[_wgslsmith_index_u32(var_1.x, 20u)]), !(!vec4<bool>(global1[_wgslsmith_index_u32(u_input.a.x, 20u)], var_0.x, global1[_wgslsmith_index_u32(19488u, 20u)], var_0.x)), !select(vec4<bool>(var_0.x, false, true, var_0.x), vec4<bool>(true, global1[_wgslsmith_index_u32(62377u, 20u)], var_0.x, var_0.x), global1[_wgslsmith_index_u32(var_1.x, 20u)])));
}

fn func_1() -> i32 {
    var var_0 = !func_11(_wgslsmith_f_op_vec3_f32(func_10(func_2(global0[_wgslsmith_index_u32(max(39135u, u_input.b), 30u)]), Struct_1(reverseBits(u_input.c.zzw), _wgslsmith_f_op_vec3_f32(-vec3<f32>(global0[_wgslsmith_index_u32(u_input.b, 30u)], 974f, -552f)), -5750i, u_input.c.x), func_7(vec4<f32>(global0[_wgslsmith_index_u32(u_input.b, 30u)], global0[_wgslsmith_index_u32(u_input.a.x, 30u)], 914f, global0[_wgslsmith_index_u32(u_input.b, 30u)])).c == 0i, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1118f)))), _wgslsmith_f_op_vec3_f32(func_10(Struct_1(vec3<i32>(u_input.c.x, u_input.c.x, -40278i), _wgslsmith_div_vec3_f32(vec3<f32>(1118f, 927f, 1384f), vec3<f32>(global0[_wgslsmith_index_u32(1u, 30u)], 1726f, global0[_wgslsmith_index_u32(1208u, 30u)])), ~(-23879i), -62041i), func_4(), true, _wgslsmith_f_op_f32(-_wgslsmith_div_f32(global0[_wgslsmith_index_u32(4294967295u, 30u)], global0[_wgslsmith_index_u32(99493u, 30u)])))));
    for (var var_1 = -5719i; var_1 != -1i; var_1 += 1i) {
        if (LOOP_COUNTERS[29u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[29u] = LOOP_COUNTERS[29u] + 1u;
        switch (~(_wgslsmith_add_i32(u_input.c.x, 0i) ^ u_input.c.x)) {
            case 2147483647i: {
                break;
            }
            default: {
            }
        }
        let var_2 = u_input.c.x;
        loop {
            if (LOOP_COUNTERS[30u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[30u] = LOOP_COUNTERS[30u] + 1u;
            let var_3 = Struct_1(-vec3<i32>(~func_7(vec4<f32>(global0[_wgslsmith_index_u32(63502u, 30u)], global0[_wgslsmith_index_u32(1u, 30u)], global0[_wgslsmith_index_u32(u_input.b, 30u)], global0[_wgslsmith_index_u32(u_input.a.x, 30u)])).a.x, 1i, select(firstLeadingBit(35898i), u_input.c.x, global1[_wgslsmith_index_u32(firstLeadingBit(u_input.a.x), 20u)])), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(vec3<f32>(global0[_wgslsmith_index_u32(0u, 30u)], 125f, global0[_wgslsmith_index_u32(1u, 30u)]), vec3<f32>(global0[_wgslsmith_index_u32(41784u, 30u)], -1000f, global0[_wgslsmith_index_u32(u_input.a.x, 30u)])) - _wgslsmith_f_op_vec3_f32(-vec3<f32>(global0[_wgslsmith_index_u32(u_input.b, 30u)], 130f, global0[_wgslsmith_index_u32(60603u, 30u)])))))), 0i, func_3(Struct_1(u_input.c.yzy, func_4().b, ~2147483647i, _wgslsmith_dot_vec3_i32(u_input.c.wwz, vec3<i32>(0i, var_2, var_2)) >> ((u_input.a.x ^ u_input.b) % 32u)), func_2(_wgslsmith_div_f32(_wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(1u, 30u)] * global0[_wgslsmith_index_u32(55939u, 30u)]), _wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(u_input.b, 30u)]))), vec4<f32>(_wgslsmith_f_op_vec3_f32(func_8(!var_0.zxz, Struct_1(u_input.c.xyz, vec3<f32>(-788f, -1000f, global0[_wgslsmith_index_u32(62307u, 30u)]), u_input.c.x, 1i), vec3<u32>(45256u, 0u, 102840u) << (vec3<u32>(u_input.b, u_input.b, 0u) % vec3<u32>(32u)), func_4())).x, func_3(Struct_1(u_input.c.zxw, vec3<f32>(320f, global0[_wgslsmith_index_u32(u_input.b, 30u)], global0[_wgslsmith_index_u32(26123u, 30u)]), 9030i, u_input.c.x), func_3(Struct_1(vec3<i32>(var_2, u_input.c.x, u_input.c.x), vec3<f32>(global0[_wgslsmith_index_u32(1u, 30u)], global0[_wgslsmith_index_u32(u_input.b, 30u)], -852f), i32(-2147483648), 11113i), Struct_1(u_input.c.zyw, vec3<f32>(1000f, global0[_wgslsmith_index_u32(u_input.b, 30u)], 1000f), 2147483647i, var_2), vec4<f32>(420f, -553f, 1059f, global0[_wgslsmith_index_u32(16831u, 30u)]), Struct_1(u_input.c.yzz, vec3<f32>(168f, global0[_wgslsmith_index_u32(u_input.b, 30u)], 840f), 3443i, u_input.c.x)), _wgslsmith_div_vec4_f32(vec4<f32>(-544f, 366f, -676f, -567f), vec4<f32>(global0[_wgslsmith_index_u32(u_input.b, 30u)], 374f, global0[_wgslsmith_index_u32(13335u, 30u)], -683f)), func_7(vec4<f32>(global0[_wgslsmith_index_u32(57129u, 30u)], -484f, global0[_wgslsmith_index_u32(8972u, 30u)], -615f))).b.x, func_2(global0[_wgslsmith_index_u32(u_input.b, 30u)]).b.x, -1347f), Struct_1(u_input.c.xwx, _wgslsmith_f_op_vec3_f32(func_7(vec4<f32>(global0[_wgslsmith_index_u32(0u, 30u)], global0[_wgslsmith_index_u32(1u, 30u)], 191f, -1489f)).b + _wgslsmith_f_op_vec3_f32(max(vec3<f32>(global0[_wgslsmith_index_u32(90577u, 30u)], 655f, global0[_wgslsmith_index_u32(1u, 30u)]), vec3<f32>(1866f, -298f, 1139f)))), ~(-u_input.c.x), u_input.c.x)).a.x);
            global0 = array<f32, 30>();
            global1 = array<bool, 20>();
        }
    }
    switch (u_input.c.x) {
        default: {
        }
    }
    switch (min(u_input.c.x, ~min(u_input.c.x, -6656i))) {
        case 12573i: {
        }
        case i32(-2147483648): {
            var var_1 = func_2(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-659f) - -179f) + _wgslsmith_f_op_f32(-_wgslsmith_div_f32(-1247f, global0[_wgslsmith_index_u32(84873u, 30u)]))) - -1000f));
            for (var var_2 = (_wgslsmith_div_i32(_wgslsmith_dot_vec2_i32(~vec2<i32>(u_input.c.x, u_input.c.x), vec2<i32>(var_1.d, u_input.c.x)), 1i) | -_wgslsmith_div_i32(-38885i, ~(-17614i))) >> (_wgslsmith_dot_vec4_u32(~(~vec4<u32>(u_input.a.x, u_input.a.x, 71468u, 79673u)), firstTrailingBit(countOneBits(_wgslsmith_sub_vec4_u32(vec4<u32>(u_input.a.x, u_input.b, u_input.a.x, u_input.a.x), vec4<u32>(1u, 1u, u_input.a.x, u_input.b))))) % 32u); var_2 < 75133i; var_0 = !select(select(select(vec4<bool>(true, global1[_wgslsmith_index_u32(u_input.b, 20u)], global1[_wgslsmith_index_u32(24936u, 20u)], false), vec4<bool>(true, true, true, true), true), !(!vec4<bool>(var_0.x, var_0.x, false, false)), global1[_wgslsmith_index_u32(_wgslsmith_sub_u32(select(0u, u_input.b, var_0.x), max(u_input.a.x, u_input.b)), 20u)]), !vec4<bool>(u_input.b <= 8824u, var_0.x, true, true), select(vec4<bool>(var_0.x, false, any(vec4<bool>(var_0.x, true, var_0.x, global1[_wgslsmith_index_u32(53825u, 20u)])), true), vec4<bool>(true | var_0.x, var_1.d >= -1i, true, true), select(!vec4<bool>(global1[_wgslsmith_index_u32(35400u, 20u)], true, global1[_wgslsmith_index_u32(u_input.a.x, 20u)], var_0.x), func_11(var_1.b, vec3<f32>(205f, 829f, 1000f)), global1[_wgslsmith_index_u32(0u, 20u)])))) {
                if (LOOP_COUNTERS[31u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[31u] = LOOP_COUNTERS[31u] + 1u;
                let var_3 = global1[_wgslsmith_index_u32(u_input.b, 20u)] & all(vec4<bool>(!any(vec3<bool>(false, global1[_wgslsmith_index_u32(u_input.b, 20u)], global1[_wgslsmith_index_u32(1u, 20u)])), func_11(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-134f, global0[_wgslsmith_index_u32(u_input.a.x, 30u)], 109f)), _wgslsmith_f_op_vec3_f32(round(vec3<f32>(global0[_wgslsmith_index_u32(u_input.a.x, 30u)], 107f, global0[_wgslsmith_index_u32(55575u, 30u)])))).x, var_0.x, true));
                let var_4 = Struct_1(firstTrailingBit(-_wgslsmith_div_vec3_i32(vec3<i32>(u_input.c.x, -1i, u_input.c.x), ~vec3<i32>(var_1.a.x, u_input.c.x, -1i))), var_1.b, 39380i, ~1i);
            }
        }
        default: {
            var var_1 = !(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_div_f32(1633f, -857f))) <= _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(u_input.a.x << (46772u % 32u), 30u)] * _wgslsmith_div_f32(global0[_wgslsmith_index_u32(0u, 30u)], 388f)) * _wgslsmith_f_op_f32(f32(-1f) * -350f)));
            let var_2 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(-191f - 1586f), 793f, global0[_wgslsmith_index_u32(func_9(1628f, var_0.x, func_7(vec4<f32>(global0[_wgslsmith_index_u32(4073u, 30u)], -2018f, -1000f, 1000f)), vec3<f32>(global0[_wgslsmith_index_u32(0u, 30u)], -859f, global0[_wgslsmith_index_u32(u_input.a.x, 30u)])), 30u)], _wgslsmith_f_op_f32(-_wgslsmith_div_f32(global0[_wgslsmith_index_u32(u_input.b, 30u)], 1184f)))) + vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(f32(-1f) * -1111f))) * _wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(4294967295u, 30u)] + 1616f)), func_2(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(u_input.a.x, 30u)] - global0[_wgslsmith_index_u32(u_input.b, 30u)])))).b.x, _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(0u, 30u)] + global0[_wgslsmith_index_u32(countOneBits(u_input.b), 30u)]), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(global0[_wgslsmith_index_u32(1u, 30u)], -369f)), false)), global0[_wgslsmith_index_u32(min(~4390u, func_9(global0[_wgslsmith_index_u32(31366u | u_input.b, 30u)], !var_0.x, func_7(vec4<f32>(global0[_wgslsmith_index_u32(42858u, 30u)], global0[_wgslsmith_index_u32(34486u, 30u)], global0[_wgslsmith_index_u32(u_input.a.x, 30u)], -262f)), vec3<f32>(global0[_wgslsmith_index_u32(u_input.a.x, 30u)], -1357f, global0[_wgslsmith_index_u32(2257u, 30u)]))), 30u)]));
        }
    }
    let var_1 = func_3(Struct_1(u_input.c.xzy, vec3<f32>(global0[_wgslsmith_index_u32((u_input.b << (u_input.b % 32u)) & _wgslsmith_dot_vec3_u32(vec3<u32>(u_input.a.x, u_input.a.x, 68047u), vec3<u32>(u_input.a.x, u_input.a.x, u_input.b)), 30u)], global0[_wgslsmith_index_u32(~min(u_input.b, u_input.a.x), 30u)], _wgslsmith_f_op_f32(-func_3(Struct_1(vec3<i32>(u_input.c.x, -1i, -1i), vec3<f32>(-1093f, global0[_wgslsmith_index_u32(u_input.a.x, 30u)], 964f), 1i, u_input.c.x), Struct_1(u_input.c.zzz, vec3<f32>(global0[_wgslsmith_index_u32(0u, 30u)], 1328f, global0[_wgslsmith_index_u32(u_input.a.x, 30u)]), i32(-2147483648), u_input.c.x), vec4<f32>(911f, global0[_wgslsmith_index_u32(1u, 30u)], -1339f, -121f), Struct_1(u_input.c.zyy, vec3<f32>(760f, -515f, global0[_wgslsmith_index_u32(1u, 30u)]), u_input.c.x, -1076i)).b.x)), firstLeadingBit(select(u_input.c.x, u_input.c.x, !global1[_wgslsmith_index_u32(15659u, 20u)])), _wgslsmith_mult_i32(_wgslsmith_add_i32(max(33109i, -1i), u_input.c.x >> (u_input.b % 32u)), ~select(i32(-2147483648), 2147483647i, false))), Struct_1(select(vec3<i32>(u_input.c.x, u_input.c.x, ~58202i), _wgslsmith_mult_vec3_i32(~u_input.c.xyy, u_input.c.wzz), !func_11(vec3<f32>(global0[_wgslsmith_index_u32(3437u, 30u)], global0[_wgslsmith_index_u32(128721u, 30u)], global0[_wgslsmith_index_u32(860u, 30u)]), vec3<f32>(global0[_wgslsmith_index_u32(u_input.a.x, 30u)], global0[_wgslsmith_index_u32(u_input.a.x, 30u)], -1433f)).xyw), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(floor(vec3<f32>(global0[_wgslsmith_index_u32(0u, 30u)], global0[_wgslsmith_index_u32(u_input.b, 30u)], 2303f))), _wgslsmith_f_op_vec3_f32(vec3<f32>(global0[_wgslsmith_index_u32(0u, 30u)], -896f, global0[_wgslsmith_index_u32(28580u, 30u)]) - vec3<f32>(global0[_wgslsmith_index_u32(u_input.b, 30u)], global0[_wgslsmith_index_u32(33908u, 30u)], global0[_wgslsmith_index_u32(0u, 30u)])))) + _wgslsmith_f_op_vec3_f32(-vec3<f32>(global0[_wgslsmith_index_u32(u_input.a.x, 30u)], 247f, global0[_wgslsmith_index_u32(29506u, 30u)]))), ~_wgslsmith_clamp_i32(_wgslsmith_mult_i32(i32(-2147483648), u_input.c.x), _wgslsmith_sub_i32(u_input.c.x, u_input.c.x), func_2(-1000f).a.x), -43640i), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(step(vec4<f32>(global0[_wgslsmith_index_u32(u_input.b, 30u)], global0[_wgslsmith_index_u32(4294967295u, 30u)], global0[_wgslsmith_index_u32(u_input.a.x, 30u)], global0[_wgslsmith_index_u32(u_input.b, 30u)]), vec4<f32>(global0[_wgslsmith_index_u32(20374u, 30u)], 811f, -1076f, global0[_wgslsmith_index_u32(u_input.b, 30u)]))))) + _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(sign(vec4<f32>(global0[_wgslsmith_index_u32(1u, 30u)], -428f, global0[_wgslsmith_index_u32(u_input.a.x, 30u)], -426f))) + _wgslsmith_f_op_vec4_f32(-vec4<f32>(global0[_wgslsmith_index_u32(u_input.a.x, 30u)], 1317f, global0[_wgslsmith_index_u32(u_input.a.x, 30u)], global0[_wgslsmith_index_u32(u_input.b, 30u)]))))), Struct_1(-vec3<i32>(0i, _wgslsmith_dot_vec4_i32(u_input.c, vec4<i32>(-7994i, u_input.c.x, -30524i, u_input.c.x)), _wgslsmith_add_i32(u_input.c.x, u_input.c.x)), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(select(vec3<f32>(1112f, global0[_wgslsmith_index_u32(0u, 30u)], global0[_wgslsmith_index_u32(u_input.b, 30u)]), vec3<f32>(global0[_wgslsmith_index_u32(u_input.b, 30u)], global0[_wgslsmith_index_u32(76527u, 30u)], global0[_wgslsmith_index_u32(71046u, 30u)]), var_0.x)) * _wgslsmith_f_op_vec3_f32(vec3<f32>(global0[_wgslsmith_index_u32(1u, 30u)], -477f, -782f) - vec3<f32>(1757f, -1602f, 1364f))) * _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(global0[_wgslsmith_index_u32(u_input.b, 30u)], global0[_wgslsmith_index_u32(u_input.a.x, 30u)], global0[_wgslsmith_index_u32(1u, 30u)]) * vec3<f32>(global0[_wgslsmith_index_u32(4294967295u, 30u)], global0[_wgslsmith_index_u32(u_input.a.x, 30u)], global0[_wgslsmith_index_u32(u_input.b, 30u)])))), -2147483647i, 39450i));
    return select(u_input.c.x, func_3(Struct_1(reverseBits(select(u_input.c.xxx, var_1.a, var_0.zwy)), var_1.b, -_wgslsmith_dot_vec2_i32(vec2<i32>(u_input.c.x, u_input.c.x), var_1.a.yz), _wgslsmith_mod_i32(_wgslsmith_dot_vec2_i32(vec2<i32>(-4083i, -28703i), vec2<i32>(0i, -8675i)), 54487i)), func_3(Struct_1(var_1.a, var_1.b, _wgslsmith_mod_i32(0i, u_input.c.x), firstTrailingBit(var_1.a.x)), var_1, vec4<f32>(_wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(1u, 30u)]), _wgslsmith_f_op_f32(f32(-1f) * -1068f), -1738f, _wgslsmith_div_f32(1129f, 603f)), func_4()), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(exp2(vec4<f32>(global0[_wgslsmith_index_u32(u_input.a.x, 30u)], -522f, -1653f, global0[_wgslsmith_index_u32(u_input.b, 30u)])))))), func_7(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(191f, 1111f, global0[_wgslsmith_index_u32(45923u, 30u)], global0[_wgslsmith_index_u32(28574u, 30u)]) - vec4<f32>(var_1.b.x, global0[_wgslsmith_index_u32(u_input.b, 30u)], global0[_wgslsmith_index_u32(1u, 30u)], -1000f)) * _wgslsmith_f_op_vec4_f32(vec4<f32>(-344f, var_1.b.x, -116f, -465f) + vec4<f32>(global0[_wgslsmith_index_u32(u_input.b, 30u)], -567f, -355f, var_1.b.x))))).a.x, var_0.x);
}

@compute
@workgroup_size(1)
fn main() {
    global1 = array<bool, 20>();
    loop {
        if (LOOP_COUNTERS[32u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[32u] = LOOP_COUNTERS[32u] + 1u;
        var var_0 = Struct_1(vec3<i32>(u_input.c.x, reverseBits(u_input.c.x), _wgslsmith_dot_vec4_i32(u_input.c, vec4<i32>(u_input.c.x, 2716i, -6966i, select(0i, -1i, global1[_wgslsmith_index_u32(u_input.b, 20u)])))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(128f, -651f, global0[_wgslsmith_index_u32(u_input.a.x, 30u)])) * _wgslsmith_f_op_vec3_f32(vec3<f32>(global0[_wgslsmith_index_u32(60050u, 30u)], global0[_wgslsmith_index_u32(4294967295u, 30u)], -1311f) - vec3<f32>(756f, -484f, global0[_wgslsmith_index_u32(4294967295u, 30u)]))))), -_wgslsmith_sub_i32(~func_1(), -11900i << (~4294967295u % 32u)), u_input.c.x);
        let var_1 = u_input.a.x;
        global1 = array<bool, 20>();
        if (true) {
            var var_2 = _wgslsmith_f_op_vec2_f32(abs(_wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec3_f32(func_8(select(!vec3<bool>(false, global1[_wgslsmith_index_u32(var_1, 20u)], false), select(vec3<bool>(global1[_wgslsmith_index_u32(var_1, 20u)], false, global1[_wgslsmith_index_u32(0u, 20u)]), vec3<bool>(false, false, global1[_wgslsmith_index_u32(1u, 20u)]), vec3<bool>(global1[_wgslsmith_index_u32(u_input.a.x, 20u)], global1[_wgslsmith_index_u32(95772u, 20u)], false)), false), func_2(global0[_wgslsmith_index_u32(1u, 30u)]), _wgslsmith_mult_vec3_u32(vec3<u32>(0u, u_input.a.x, var_1), vec3<u32>(57867u, u_input.b, 4294967295u)) >> (~vec3<u32>(1532u, var_1, var_1) % vec3<u32>(32u)), Struct_1(~var_0.a, var_0.b, _wgslsmith_mod_i32(var_0.c, var_0.d), i32(-1i) * i32(-2147483648)))).xz, func_3(func_4(), Struct_1(vec3<i32>(-37954i, var_0.d, u_input.c.x), func_3(Struct_1(vec3<i32>(0i, var_0.a.x, 2147483647i), vec3<f32>(global0[_wgslsmith_index_u32(1u, 30u)], 862f, global0[_wgslsmith_index_u32(var_1, 30u)]), 1i, 17591i), Struct_1(vec3<i32>(u_input.c.x, u_input.c.x, 1i), var_0.b, 0i, 6284i), vec4<f32>(-1037f, 335f, global0[_wgslsmith_index_u32(21520u, 30u)], 823f), Struct_1(u_input.c.xwz, var_0.b, var_0.a.x, 0i)).b, var_0.a.x, 2147483647i), _wgslsmith_f_op_vec4_f32(-vec4<f32>(1456f, 1036f, 800f, 119f)), func_4()).b.yy, global1[_wgslsmith_index_u32(u_input.a.x, 20u)]))));
            let var_3 = true;
            continue;
        }
        loop {
            if (LOOP_COUNTERS[33u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[33u] = LOOP_COUNTERS[33u] + 1u;
            continue;
        }
    }
    global1 = array<bool, 20>();
    switch (u_input.c.x) {
        case -56592i: {
            for (var var_0 = -23162i; var_0 < 0i; global1 = array<bool, 20>()) {
                if (LOOP_COUNTERS[34u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[34u] = LOOP_COUNTERS[34u] + 1u;
                var_0 = -func_2(-167f).a.x >> (523u % 32u);
                global0 = array<f32, 30>();
                var var_1 = u_input.c.yw;
                var_0 = ~u_input.c.x;
            }
            switch (-5035i) {
                case -54532i: {
                    var var_0 = Struct_1(_wgslsmith_mult_vec3_i32(-_wgslsmith_mult_vec3_i32(min(vec3<i32>(u_input.c.x, u_input.c.x, i32(-2147483648)), u_input.c.zzx), vec3<i32>(u_input.c.x, 2147483647i, 2147483647i)), _wgslsmith_mod_vec3_i32(firstTrailingBit(u_input.c.xxw | vec3<i32>(u_input.c.x, u_input.c.x, -46334i)), vec3<i32>(u_input.c.x, u_input.c.x, 1371i) << (firstLeadingBit(vec3<u32>(40904u, 67036u, 10530u)) % vec3<u32>(32u)))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(func_10(Struct_1(u_input.c.xzw, vec3<f32>(global0[_wgslsmith_index_u32(0u, 30u)], -128f, global0[_wgslsmith_index_u32(1u, 30u)]), 19618i, -1i), func_7(vec4<f32>(624f, global0[_wgslsmith_index_u32(4234u, 30u)], global0[_wgslsmith_index_u32(u_input.a.x, 30u)], global0[_wgslsmith_index_u32(u_input.b, 30u)])), global1[_wgslsmith_index_u32(1u, 20u)], _wgslsmith_div_f32(-236f, 855f))))) * vec3<f32>(global0[_wgslsmith_index_u32(~u_input.b << (~u_input.b % 32u), 30u)], _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global0[_wgslsmith_index_u32(u_input.b, 30u)])), _wgslsmith_f_op_f32(floor(global0[_wgslsmith_index_u32(u_input.b << (u_input.b % 32u), 30u)])))), -_wgslsmith_dot_vec2_i32(u_input.c.yy, ~_wgslsmith_sub_vec2_i32(vec2<i32>(u_input.c.x, 209i), u_input.c.xy)), -1i);
                }
                default: {
                }
            }
            var var_0 = !global1[_wgslsmith_index_u32(u_input.b, 20u)];
            let var_1 = ~(~(~(_wgslsmith_mod_vec3_u32(vec3<u32>(u_input.b, u_input.a.x, u_input.a.x), vec3<u32>(4294967295u, u_input.a.x, 0u)) << (vec3<u32>(0u, 1u, u_input.a.x) % vec3<u32>(32u)))));
        }
        default: {
            switch (~(-(~_wgslsmith_add_i32(~(-255i), u_input.c.x)))) {
                default: {
                    return;
                }
            }
            var var_0 = -_wgslsmith_div_i32(_wgslsmith_dot_vec3_i32(vec3<i32>(0i, i32(-2147483648), -1i) ^ -vec3<i32>(u_input.c.x, 1i, 0i), -vec3<i32>(-1i, 0i, u_input.c.x)), u_input.c.x << (_wgslsmith_clamp_u32(~0u, u_input.a.x, ~u_input.a.x) % 32u));
        }
    }
    for (var var_0 = 2147483647i; var_0 <= 8696i; var_0 -= 1i) {
        if (LOOP_COUNTERS[35u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[35u] = LOOP_COUNTERS[35u] + 1u;
        if (func_11(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(_wgslsmith_div_vec3_f32(vec3<f32>(global0[_wgslsmith_index_u32(u_input.a.x, 30u)], 899f, global0[_wgslsmith_index_u32(u_input.a.x, 30u)]), vec3<f32>(-1000f, global0[_wgslsmith_index_u32(u_input.a.x, 30u)], global0[_wgslsmith_index_u32(0u, 30u)])), _wgslsmith_div_vec3_f32(vec3<f32>(global0[_wgslsmith_index_u32(77648u, 30u)], global0[_wgslsmith_index_u32(u_input.a.x, 30u)], -638f), vec3<f32>(-977f, 1444f, global0[_wgslsmith_index_u32(0u, 30u)]))))), func_3(Struct_1(vec3<i32>(u_input.c.x, ~(-1i), func_2(294f).c), func_3(func_7(vec4<f32>(global0[_wgslsmith_index_u32(4294967295u, 30u)], global0[_wgslsmith_index_u32(u_input.a.x, 30u)], 1457f, 551f)), func_3(Struct_1(u_input.c.yzx, vec3<f32>(162f, 1576f, global0[_wgslsmith_index_u32(0u, 30u)]), u_input.c.x, 0i), Struct_1(vec3<i32>(u_input.c.x, u_input.c.x, i32(-2147483648)), vec3<f32>(1580f, -631f, 619f), u_input.c.x, u_input.c.x), vec4<f32>(global0[_wgslsmith_index_u32(26327u, 30u)], global0[_wgslsmith_index_u32(31394u, 30u)], -2359f, global0[_wgslsmith_index_u32(u_input.b, 30u)]), Struct_1(u_input.c.wxx, vec3<f32>(global0[_wgslsmith_index_u32(59645u, 30u)], -121f, global0[_wgslsmith_index_u32(u_input.b, 30u)]), u_input.c.x, -54596i)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(-1000f, 702f, -1035f, -218f)), func_2(-1242f)).b, u_input.c.x, select(44680i, u_input.c.x, true)), func_3(func_7(_wgslsmith_f_op_vec4_f32(-vec4<f32>(global0[_wgslsmith_index_u32(0u, 30u)], 1401f, 822f, global0[_wgslsmith_index_u32(0u, 30u)]))), Struct_1(~vec3<i32>(-29554i, u_input.c.x, u_input.c.x), _wgslsmith_f_op_vec3_f32(vec3<f32>(590f, global0[_wgslsmith_index_u32(8480u, 30u)], -354f) - vec3<f32>(-1647f, global0[_wgslsmith_index_u32(u_input.a.x, 30u)], -156f)), u_input.c.x, i32(-1i) * -35870i), _wgslsmith_f_op_vec4_f32(select(vec4<f32>(global0[_wgslsmith_index_u32(u_input.b, 30u)], -1090f, -525f, global0[_wgslsmith_index_u32(u_input.b, 30u)]), _wgslsmith_f_op_vec4_f32(sign(vec4<f32>(1000f, -400f, -1041f, global0[_wgslsmith_index_u32(u_input.b, 30u)]))), any(vec3<bool>(global1[_wgslsmith_index_u32(u_input.a.x, 20u)], false, true)))), func_4()), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(157f, global0[_wgslsmith_index_u32(u_input.a.x, 30u)], -453f, 152f)) * _wgslsmith_f_op_vec4_f32(vec4<f32>(708f, global0[_wgslsmith_index_u32(u_input.b, 30u)], global0[_wgslsmith_index_u32(1u, 30u)], -496f) - vec4<f32>(global0[_wgslsmith_index_u32(u_input.a.x, 30u)], -967f, global0[_wgslsmith_index_u32(u_input.b, 30u)], global0[_wgslsmith_index_u32(u_input.b, 30u)])))), Struct_1(vec3<i32>(u_input.c.x, u_input.c.x, u_input.c.x), func_7(vec4<f32>(global0[_wgslsmith_index_u32(54135u, 30u)], global0[_wgslsmith_index_u32(1u, 30u)], 411f, 335f)).b, max(u_input.c.x, -28330i), -27856i)).b).x) {
            var var_1 = ~(~u_input.a);
        }
        for (var var_1: i32; var_1 > -33396i; var_1 += 1i) {
            if (LOOP_COUNTERS[36u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[36u] = LOOP_COUNTERS[36u] + 1u;
            continue;
        }
        var var_1 = Struct_1(countOneBits(u_input.c.xww), vec3<f32>(_wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(firstTrailingBit(u_input.a.x), 30u)] + 221f), _wgslsmith_f_op_f32(-1000f), _wgslsmith_f_op_f32(global0[_wgslsmith_index_u32(15351u, 30u)] * _wgslsmith_f_op_f32(trunc(_wgslsmith_div_f32(global0[_wgslsmith_index_u32(4294967295u, 30u)], 639f))))), 17340i, u_input.c.x);
    }
    for (var var_0 = -5651i; ; var_0 += 1i) {
        if (LOOP_COUNTERS[37u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[37u] = LOOP_COUNTERS[37u] + 1u;
    }
    let x = u_input.a;
    s_output = StorageBuffer(-1283f);
}

`;