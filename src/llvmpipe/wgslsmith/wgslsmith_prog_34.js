export const input = [31,1,65,48,142,58,37,121,190,15,47,140,89,220,95,138,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [31,1,65,48,142,58,37,121,190,15,47,140,89,220,95,138,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[31,1,65,48,142,58,37,121,190,15,47,140,89,220,95,138]}
// Seed: 16474278685800774775

struct Struct_1 {
    a: vec4<bool>,
    b: vec2<f32>,
    c: f32,
    d: vec2<bool>,
}

struct UniformBuffer {
    a: vec3<u32>,
    b: u32,
}

struct StorageBuffer {
    a: f32,
    b: vec4<f32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<vec4<bool>, 15>;

var<private> global1: array<u32, 22> = array<u32, 22>(52747u, 1u, 1606u, 50485u, 1u, 33505u, 1u, 1960u, 4294967295u, 51290u, 48911u, 13769u, 0u, 30704u, 4294967295u, 4446u, 38548u, 4294967295u, 4294967295u, 1u, 0u, 1u);

var<private> global2: array<bool, 22> = array<bool, 22>(false, true, false, false, false, false, false, false, false, false, true, false, true, true, false, false, false, true, true, false, true, false);

var<private> global3: i32 = 2147483647i;

var<private> global4: Struct_1 = Struct_1(vec4<bool>(false, true, true, true), vec2<f32>(-337f, 1000f), -438f, vec2<bool>(false, false));

var<private> LOOP_COUNTERS: array<u32, 16>;

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn func_6() -> f32 {
    global4 = Struct_1(global4.a, vec2<f32>(342f, 794f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(global4.b.x, _wgslsmith_f_op_f32(542f + 304f))) - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(global4.b.x, global4.b.x)) - 610f)) - 130f), global4.a.xw);
    var var_0 = Struct_1(!vec4<bool>(global2[_wgslsmith_index_u32(select(1u, u_input.a.x, true), 22u)], false && (global4.a.x == true), global4.a.x, global2[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(_wgslsmith_sub_u32(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(62016u, 22u)], 22u)] ^ 73760u, _wgslsmith_add_u32(global1[_wgslsmith_index_u32(0u, 22u)], global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(35753u, 22u)], 22u)])), 22u)], 22u)], 22u)]), _wgslsmith_f_op_vec2_f32(-vec2<f32>(global4.b.x, _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(floor(global4.b.x)), _wgslsmith_f_op_f32(-1366f - 1925f), global2[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(4294967295u, 22u)], 22u)], 22u)] | global2[_wgslsmith_index_u32(54218u, 22u)])))), 819f, global4.d);
    switch (~_wgslsmith_add_i32(_wgslsmith_dot_vec2_i32(countOneBits(firstTrailingBit(vec2<i32>(i32(-2147483648), -60969i))), ~firstTrailingBit(vec2<i32>(-15241i, 2147483647i))), abs(_wgslsmith_dot_vec4_i32(vec4<i32>(-6543i, 6576i, 40234i, 7990i), _wgslsmith_sub_vec4_i32(vec4<i32>(-19813i, 36i, 0i, -13352i), vec4<i32>(-34695i, -4591i, 58557i, -34991i)))))) {
        case -9616i: {
        }
        case -47249i: {
            var var_1 = select(vec4<bool>(var_0.d.x, any(select(vec4<bool>(true, global2[_wgslsmith_index_u32(4294967295u, 22u)], true, global2[_wgslsmith_index_u32(1u, 22u)]), select(vec4<bool>(var_0.a.x, var_0.d.x, global4.a.x, false), var_0.a, global2[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(26149u, 22u)], 22u)]), !global4.d.x)), global4.a.x, false), !select(vec4<bool>(select(true, false, false), true, true, select(true, true, false)), vec4<bool>(global2[_wgslsmith_index_u32(min(55487u, 4294967295u), 22u)], false, any(vec3<bool>(var_0.d.x, var_0.d.x, global2[_wgslsmith_index_u32(43375u, 22u)])), var_0.d.x), 4294967295u > global1[_wgslsmith_index_u32(firstLeadingBit(u_input.b), 22u)]), global4.d.x);
        }
        default: {
            global2 = array<bool, 22>();
            global2 = array<bool, 22>();
        }
    }
    var var_1 = Struct_1(vec4<bool>(true, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_0.b.x) + _wgslsmith_f_op_f32(floor(-837f))) < 1041f, true, _wgslsmith_f_op_f32(-155f) != _wgslsmith_f_op_f32(min(1f, var_0.c))), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(select(_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(-var_0.b), _wgslsmith_f_op_vec2_f32(-vec2<f32>(-1015f, global4.c))), var_0.b, vec2<bool>(true, true))) - _wgslsmith_div_vec2_f32(global4.b, _wgslsmith_div_vec2_f32(vec2<f32>(317f, global4.c), _wgslsmith_f_op_vec2_f32(round(global4.b))))), -207f, var_0.a.xz);
    global1 = array<u32, 22>();
    return var_0.c;
}

fn func_5() -> vec4<bool> {
    var var_0 = _wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(1107f, global4.c, -112f, 163f) - vec4<f32>(-315f, 373f, 1199f, -1000f))))), _wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(365f, -1352f, 1385f, 1076f) * vec4<f32>(-1077f, global4.c, 1720f, global4.b.x))) + _wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(vec4<f32>(global4.c, 2369f, global4.c, -2328f) * vec4<f32>(global4.c, global4.b.x, -467f, 2013f)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(global4.b.x, global4.c, global4.c, global4.b.x))))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(global4.c, 2170f, global4.b.x, 920f))))))));
    var_0 = _wgslsmith_f_op_vec4_f32(vec4<f32>(var_0.x, -1605f, _wgslsmith_f_op_f32(exp2(_wgslsmith_div_f32(280f, _wgslsmith_f_op_f32(-635f + 441f)))), var_0.x) * _wgslsmith_f_op_vec4_f32(vec4<f32>(-552f, _wgslsmith_f_op_f32(floor(global4.c)), 1178f, _wgslsmith_f_op_f32(func_6())) + _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(min(vec4<f32>(1099f, -566f, 599f, global4.c), vec4<f32>(-381f, var_0.x, global4.c, var_0.x))), _wgslsmith_f_op_vec4_f32(-vec4<f32>(var_0.x, -155f, -973f, global4.b.x)))))));
    global0 = array<vec4<bool>, 15>();
    var var_1 = ~29601u;
    switch (~select(1i, 1i, false)) {
        case -44620i: {
            switch (_wgslsmith_clamp_i32(i32(-1i) * -1i, -26942i, 1i)) {
                case 5531i: {
                }
                case -1i: {
                    let var_2 = Struct_1(global0[_wgslsmith_index_u32(13232u, 15u)], _wgslsmith_f_op_vec2_f32(exp2(vec2<f32>(_wgslsmith_f_op_f32(1000f - var_0.x), -2229f))), _wgslsmith_f_op_f32(f32(-1f) * -1000f), global4.a.yy);
                    var_1 = ~(u_input.a.x & _wgslsmith_dot_vec2_u32(vec2<u32>(firstLeadingBit(1u), global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(firstLeadingBit(1u), 22u)], 22u)]), u_input.a.zz & ~vec2<u32>(1u, 7901u)));
                    global2 = array<bool, 22>();
                    let var_3 = var_2;
                }
                case 0i: {
                    var var_2 = ~vec3<i32>(-countOneBits(14509i), ~(i32(-2147483648)), max(2147483647i, reverseBits(~16812i)));
                    let var_3 = Struct_1(global4.a, _wgslsmith_f_op_vec2_f32(-_wgslsmith_div_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(-601f + var_0.x), 1581f), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(global4.b * global4.b)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_0.x)), global4.d);
                }
                default: {
                    var var_2 = Struct_1(select(select(select(select(global4.a, vec4<bool>(global2[_wgslsmith_index_u32(45415u, 22u)], false, false, true), global4.a.x), vec4<bool>(global4.a.x, global4.a.x, false, false), true), !(!global0[_wgslsmith_index_u32(4294967295u, 15u)]), all(vec3<bool>(false, global2[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(5938u, 22u)], 22u)], global4.a.x))), select(select(vec4<bool>(global2[_wgslsmith_index_u32(u_input.a.x, 22u)], global2[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(6396u, 22u)], 22u)], true, global4.a.x), !vec4<bool>(true, global2[_wgslsmith_index_u32(473u, 22u)], true, global4.d.x), vec4<bool>(global2[_wgslsmith_index_u32(u_input.a.x, 22u)], global2[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(u_input.a.x, 22u)], 22u)], global4.d.x, global4.d.x)), select(global0[_wgslsmith_index_u32(~global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(6640u, 22u)], 22u)], 15u)], global0[_wgslsmith_index_u32(4294967295u, 15u)], global0[_wgslsmith_index_u32(~global1[_wgslsmith_index_u32(u_input.b, 22u)], 15u)]), global4.d.x), all(select(select(global0[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(21219u, 22u)], 15u)], vec4<bool>(false, global4.d.x, global2[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(61157u, 22u)], 22u)], true), global4.a), global0[_wgslsmith_index_u32(countOneBits(89615u), 15u)], global2[_wgslsmith_index_u32(u_input.a.x, 22u)] != true))), global4.b, var_0.x, select(select(global4.d, select(select(vec2<bool>(global2[_wgslsmith_index_u32(u_input.a.x, 22u)], true), vec2<bool>(false, global4.d.x), vec2<bool>(false, true)), !vec2<bool>(false, global2[_wgslsmith_index_u32(1u, 22u)]), global2[_wgslsmith_index_u32(_wgslsmith_clamp_u32(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(45077u, 22u)], 22u)], 22u)], u_input.b, u_input.b), 22u)]), _wgslsmith_div_f32(var_0.x, var_0.x) > -133f), select(!global4.a.xx, vec2<bool>(true, true), any(global4.a.wxx)), any(select(vec4<bool>(false, global2[_wgslsmith_index_u32(u_input.b, 22u)], global2[_wgslsmith_index_u32(4294967295u, 22u)], true), vec4<bool>(global4.a.x, true, global2[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(454u, 22u)], 22u)], 22u)], global2[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(41766u, 22u)], 22u)]), true)) && any(!vec2<bool>(global4.a.x, global2[_wgslsmith_index_u32(1u, 22u)]))));
                    global3 = max(0i, 0i);
                }
            }
            for (var var_2: i32; var_2 > 0i; var_2 = -(_wgslsmith_dot_vec3_i32(vec3<i32>(0i, 2147483647i, -18012i) << (_wgslsmith_add_vec3_u32(u_input.a, u_input.a) % vec3<u32>(32u)), vec3<i32>(1i, 1i, 1i)) & firstLeadingBit(1i))) {
                if (LOOP_COUNTERS[0u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
                var var_3 = _wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(var_0.zyw + vec3<f32>(-879f, _wgslsmith_f_op_f32(-_wgslsmith_div_f32(114f, global4.c)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global4.b.x))))));
            }
            let var_2 = Struct_1(global0[_wgslsmith_index_u32(~4294967295u, 15u)], _wgslsmith_f_op_vec2_f32(_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(ceil(var_0.yz))), _wgslsmith_f_op_vec2_f32(max(vec2<f32>(-1260f, 400f), _wgslsmith_f_op_vec2_f32(round(global4.b))))) - vec2<f32>(var_0.x, _wgslsmith_div_f32(999f, _wgslsmith_f_op_f32(-var_0.x)))), _wgslsmith_f_op_f32(1050f + -561f), global4.d);
        }
        case 1i: {
            var var_2 = Struct_1(global0[_wgslsmith_index_u32(_wgslsmith_dot_vec4_u32(vec4<u32>(_wgslsmith_div_u32(u_input.a.x << (1u % 32u), 1u), 1u, global1[_wgslsmith_index_u32(~0u, 22u)], ~0u & (u_input.a.x & 54446u)), _wgslsmith_div_vec4_u32(~(~vec4<u32>(0u, 4294967295u, u_input.a.x, u_input.a.x)), vec4<u32>(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(29906u, 22u)], 22u)], u_input.a.x, 1u, 35605u) << (_wgslsmith_mod_vec4_u32(vec4<u32>(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(4294967295u, 22u)], 22u)], 22u)], 22u)], 22u)], 28369u, u_input.a.x, u_input.b), vec4<u32>(0u, 0u, 17374u, u_input.a.x)) % vec4<u32>(32u)))), 15u)], _wgslsmith_f_op_vec2_f32(round(_wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(-global4.b.x), _wgslsmith_f_op_f32(-1399f))))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(var_0.x - _wgslsmith_f_op_f32(-427f + 1690f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(var_0.x)) * _wgslsmith_f_op_f32(select(-290f, global4.c, false))))), global4.a.zz);
        }
        case i32(-2147483648): {
            if (global4.a.x) {
                let var_2 = global1[_wgslsmith_index_u32(_wgslsmith_sub_u32(17683u, 13707u), 22u)] >> (countOneBits(_wgslsmith_dot_vec3_u32(reverseBits(abs(u_input.a)), u_input.a)) % 32u);
                var var_3 = vec4<bool>(true, !(!(true || global2[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(1u, 22u)], 22u)])) || global2[_wgslsmith_index_u32(~_wgslsmith_clamp_u32(abs(508u), ~44674u, global1[_wgslsmith_index_u32(~u_input.a.x, 22u)]), 22u)], all(vec4<bool>(any(vec3<bool>(global2[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(0u, 22u)], 22u)], true, true)), true, any(vec3<bool>(global2[_wgslsmith_index_u32(0u, 22u)], global2[_wgslsmith_index_u32(4294967295u, 22u)], global4.d.x)), !(4294967295u >= var_2))), all(global4.a.xw));
                let var_4 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(var_0.x, 614f)) - 1000f);
                var_0 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(-vec4<f32>(var_4, -1073f, var_4, global4.c)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(var_0.x, global4.b.x, var_0.x, -1313f))))))));
            }
            switch (~1i) {
                case -65638i: {
                    global2 = array<bool, 22>();
                }
                case 2147483647i: {
                    var var_2 = ~(-11689i);
                    var var_3 = Struct_1(select(select(global0[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(u_input.b, 22u)], 15u)], !(!vec4<bool>(global4.d.x, false, global2[_wgslsmith_index_u32(u_input.b, 22u)], false)), true), select(select(vec4<bool>(global4.d.x, global4.a.x, global4.a.x, global4.a.x), vec4<bool>(true, true, false, false), global0[_wgslsmith_index_u32(_wgslsmith_div_u32(u_input.a.x, 37397u), 15u)]), select(!global0[_wgslsmith_index_u32(u_input.a.x, 15u)], !vec4<bool>(global4.d.x, false, global2[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(73706u, 22u)], 22u)], true), global4.a), any(vec3<bool>(false, true, global2[_wgslsmith_index_u32(1u, 22u)]))), any(global0[_wgslsmith_index_u32(46625u >> (~global1[_wgslsmith_index_u32(u_input.a.x, 22u)] % 32u), 15u)])), _wgslsmith_f_op_vec2_f32(global4.b - vec2<f32>(global4.c, _wgslsmith_f_op_f32(step(1553f, 1000f)))), var_0.x, select(!select(vec2<bool>(global4.a.x, global2[_wgslsmith_index_u32(40984u, 22u)]), select(vec2<bool>(true, true), vec2<bool>(global2[_wgslsmith_index_u32(0u, 22u)], false), true), false), !(!select(vec2<bool>(true, global2[_wgslsmith_index_u32(75653u, 22u)]), vec2<bool>(global2[_wgslsmith_index_u32(13888u, 22u)], true), global4.d)), select(vec2<bool>(true, false), vec2<bool>(!global2[_wgslsmith_index_u32(54555u, 22u)], global4.d.x), select(vec2<bool>(false, global4.a.x), select(vec2<bool>(global4.a.x, true), global4.a.yw, false), select(global4.a.wx, global4.a.zw, vec2<bool>(global2[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(4798u, 22u)], 22u)], true))))));
                    let var_4 = 694f;
                    var var_5 = Struct_1(vec4<bool>(true, any(var_3.d), true, false), _wgslsmith_f_op_vec2_f32(min(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(var_0.zz + var_3.b))), _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(var_3.b.x, 104f)) + _wgslsmith_f_op_vec2_f32(-vec2<f32>(589f, -123f))), vec2<f32>(_wgslsmith_f_op_f32(func_6()), _wgslsmith_f_op_f32(global4.b.x * global4.b.x))))), -635f, vec2<bool>(var_3.a.x, true));
                    let var_6 = 4294967295u | ~(~_wgslsmith_dot_vec2_u32(abs(u_input.a.xz), vec2<u32>(26411u, u_input.b)));
                }
                default: {
                }
            }
            global0 = array<vec4<bool>, 15>();
            var var_2 = !vec2<bool>(true, all(global4.a.zyz));
            var_1 = global1[_wgslsmith_index_u32(~4221u | _wgslsmith_clamp_u32(39110u, ~1u, _wgslsmith_clamp_u32(u_input.a.x << (11378u % 32u), 4274u, ~global1[_wgslsmith_index_u32(u_input.a.x & u_input.b, 22u)])), 22u)];
        }
        default: {
        }
    }
    return vec4<bool>(true, !any(global4.a), true, global4.d.x);
}

fn func_4() -> bool {
    for (var var_0 = -1i; global4.a.x; var_0 -= 1i) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        var_0 = 2147483647i;
        var var_1 = ~(~(_wgslsmith_add_vec4_u32(_wgslsmith_add_vec4_u32(vec4<u32>(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(u_input.b, 22u)], 22u)], 1u, 12476u, 1u), vec4<u32>(u_input.a.x, 0u, u_input.b, 4294967295u)), vec4<u32>(u_input.b, 25690u, 6670u, 4294967295u)) | vec4<u32>(abs(u_input.b), global1[_wgslsmith_index_u32(u_input.b, 22u)], abs(0u), ~global1[_wgslsmith_index_u32(58005u, 22u)])));
    }
    switch (89691i) {
        case 58673i: {
            if (any(!func_5())) {
                global2 = array<bool, 22>();
                let var_0 = abs(_wgslsmith_div_vec2_u32(vec2<u32>(~4294967295u, ~51253u), abs(u_input.a.zy)) | _wgslsmith_mod_vec2_u32(abs(select(u_input.a.xy, vec2<u32>(0u, 44574u), false)), ~vec2<u32>(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(48846u, 22u)], 22u)], 22u)], 166687u)));
                let var_1 = _wgslsmith_f_op_vec3_f32(step(_wgslsmith_div_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -266f), _wgslsmith_f_op_f32(-global4.b.x), _wgslsmith_f_op_f32(func_6())), vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global4.c)), _wgslsmith_f_op_f32(abs(-1715f)), global4.b.x)), _wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-global4.b.x), _wgslsmith_f_op_f32(select(577f, global4.b.x, global4.a.x)), false)), _wgslsmith_f_op_f32(min(global4.c, _wgslsmith_f_op_f32(sign(749f)))), global4.b.x))));
            }
        }
        case 2147483647i: {
            return true;
        }
        case i32(-2147483648): {
            let var_0 = _wgslsmith_f_op_vec4_f32(-vec4<f32>(-1210f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(-699f)) - _wgslsmith_f_op_f32(-408f + global4.c)) - global4.b.x), global4.b.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-global4.c))) - _wgslsmith_f_op_f32(1313f + 386f))));
            global0 = array<vec4<bool>, 15>();
            loop {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
                return global2[_wgslsmith_index_u32(firstLeadingBit(_wgslsmith_clamp_u32(reverseBits(_wgslsmith_sub_u32(u_input.b, 4294967295u)), reverseBits(~global1[_wgslsmith_index_u32(4294967295u, 22u)]), _wgslsmith_mod_u32(~72377u, min(global1[_wgslsmith_index_u32(u_input.b, 22u)], 1u))) ^ u_input.a.x), 22u)];
            }
            let var_1 = Struct_1(select(!global0[_wgslsmith_index_u32(u_input.b, 15u)], global4.a, global2[_wgslsmith_index_u32(_wgslsmith_dot_vec4_u32(vec4<u32>(91642u, 0u, 23010u, global1[_wgslsmith_index_u32(u_input.a.x, 22u)]) << (vec4<u32>(u_input.b, 1u, global1[_wgslsmith_index_u32(u_input.b, 22u)], u_input.a.x) % vec4<u32>(32u)), firstTrailingBit(vec4<u32>(124778u, 1u, global1[_wgslsmith_index_u32(u_input.a.x, 22u)], 4294967295u))), 22u)] || global4.a.x), var_0.xz, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(f32(-1f) * -834f), global4.b.x))) + _wgslsmith_f_op_f32(2220f * global4.b.x)), global4.d);
            loop {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
                global0 = array<vec4<bool>, 15>();
                global3 = 4139i;
            }
        }
        case -22059i: {
            for (var var_0 = 0i; var_0 < 1363i; var_0 -= 1i) {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                global0 = array<vec4<bool>, 15>();
            }
            var var_0 = -440f;
            loop {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                let var_1 = Struct_1(select(global0[_wgslsmith_index_u32(~(~0u >> (firstTrailingBit(0u) % 32u)), 15u)], vec4<bool>(true, (global4.a.x || global4.d.x) && any(global4.a.wwx), true, global4.d.x), vec4<bool>(true, global2[_wgslsmith_index_u32(~1u, 22u)], !(true || global4.d.x), !(!global4.d.x))), global4.b, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(1381f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(global4.b.x))), false))), select(vec2<bool>(true, !global2[_wgslsmith_index_u32(15863u, 22u)] | true), select(!func_5().yx, global4.a.zw, !global4.d), vec2<bool>(true, global2[_wgslsmith_index_u32(_wgslsmith_mod_u32(firstTrailingBit(global1[_wgslsmith_index_u32(u_input.b, 22u)]), global1[_wgslsmith_index_u32(u_input.b | global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(u_input.a.x, 22u)], 22u)], 22u)], 22u)]), 22u)])));
            }
        }
        default: {
        }
    }
    global3 = ~1i;
    global3 = _wgslsmith_add_i32(i32(-1i) * -13960i, _wgslsmith_mult_i32(firstTrailingBit(~(-7349i)) ^ _wgslsmith_dot_vec3_i32(~vec3<i32>(1i, 1i, 58325i), vec3<i32>(-41253i, -1i, i32(-2147483648))), 8474i));
    var var_0 = Struct_1(!global0[_wgslsmith_index_u32(min(max(93007u, 0u & u_input.b), global1[_wgslsmith_index_u32(select(4294967295u & global1[_wgslsmith_index_u32(u_input.a.x, 22u)], 4294967295u, true), 22u)]), 15u)], _wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(ceil(vec2<f32>(global4.c, _wgslsmith_f_op_f32(2624f - global4.c)))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(_wgslsmith_div_f32(421f, global4.c) + _wgslsmith_f_op_f32(1219f * -142f))))), func_5().yy);
    return global2[_wgslsmith_index_u32(countOneBits(_wgslsmith_div_u32(_wgslsmith_div_u32(~(~u_input.a.x), u_input.a.x), 1u)), 22u)];
}

fn func_3(arg_0: Struct_1, arg_1: vec4<i32>) -> i32 {
    for (var var_0 = -19529i; var_0 > -29606i; var_0 += 1i) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
    }
    if (select(func_4(), all(arg_0.d), arg_0.a.x) & false) {
    }
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        var var_0 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-global4.b)));
        if (arg_0.d.x) {
            global0 = array<vec4<bool>, 15>();
            var var_1 = !(!select(vec3<bool>(!global2[_wgslsmith_index_u32(27708u, 22u)], !global2[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(40234u, 22u)], 22u)], all(arg_0.a.zzz)), !func_5().zxy, global4.a.zzx));
            break;
        }
    }
    for (var var_0 = 1i; false; ) {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        loop {
            if (LOOP_COUNTERS[9u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
            global1 = array<u32, 22>();
        }
        var var_1 = Struct_1(arg_0.a, vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0.c)), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-765f + _wgslsmith_f_op_f32(global4.c * -790f)), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-arg_0.b.x), _wgslsmith_div_f32(arg_0.b.x, 1339f)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(arg_0.b.x, _wgslsmith_f_op_f32(-arg_0.b.x), true)))), arg_0.d);
        loop {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
            continue;
        }
    }
    global1 = array<u32, 22>();
    return ~reverseBits((arg_1.x << (0u % 32u)) << (_wgslsmith_mod_u32(global1[_wgslsmith_index_u32(4294967295u, 22u)], 30843u) % 32u)) | reverseBits(arg_1.x);
}

fn func_2(arg_0: vec3<bool>, arg_1: Struct_1) -> Struct_1 {
    global1 = array<u32, 22>();
    global0 = array<vec4<bool>, 15>();
    switch (_wgslsmith_dot_vec3_i32(~vec3<i32>(_wgslsmith_dot_vec4_i32(vec4<i32>(i32(-2147483648), -35251i, -24490i, 2147483647i), vec4<i32>(i32(-2147483648), 2147483647i, 2147483647i, 25680i)) >> (global1[_wgslsmith_index_u32(reverseBits(4294967295u), 22u)] % 32u), 2147483647i, 0i), ~abs(select(vec3<i32>(1i, 1i, 1i), vec3<i32>(9356i, -35201i, 0i) << (u_input.a % vec3<u32>(32u)), vec3<bool>(arg_1.a.x, global2[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(4294967295u, 22u)], 22u)], global4.d.x))))) {
        default: {
            switch (~(~abs(-func_3(Struct_1(vec4<bool>(false, false, false, global2[_wgslsmith_index_u32(4294967295u, 22u)]), vec2<f32>(1697f, global4.b.x), 1117f, global4.d), vec4<i32>(2147483647i, i32(-2147483648), 1i, -9915i))))) {
                case 24241i: {
                    global3 = ~(-(~(-1i)) >> (0u % 32u));
                    global0 = array<vec4<bool>, 15>();
                    var var_0 = ~abs(~vec4<i32>(1i, 1i, 1i, 1i));
                }
                case 1i: {
                    var var_0 = arg_1;
                }
                case 0i: {
                    let var_0 = vec3<bool>(false, false, func_4());
                }
                case 18541i: {
                }
                default: {
                    var var_0 = vec2<u32>(0u, countOneBits(47076u));
                    var var_1 = _wgslsmith_f_op_f32(trunc(133f));
                    let var_2 = global4.a.x;
                }
            }
            let var_0 = vec4<u32>(~(~_wgslsmith_mult_u32(global1[_wgslsmith_index_u32(_wgslsmith_mult_u32(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(45856u, 22u)], 22u)], 22u)], global1[_wgslsmith_index_u32(4294967295u, 22u)]), 22u)], 1u)), ~global1[_wgslsmith_index_u32(~(~(~73539u)), 22u)], select(14704u, abs(44919u), !(13576u == u_input.a.x)) & _wgslsmith_clamp_u32(~min(u_input.a.x, 22930u), max(global1[_wgslsmith_index_u32(_wgslsmith_dot_vec2_u32(u_input.a.zy, vec2<u32>(1u, global1[_wgslsmith_index_u32(u_input.b, 22u)])), 22u)], 0u), 15189u), ~countOneBits(_wgslsmith_mult_u32(abs(104491u), abs(1u))));
        }
    }
    var var_0 = select(global4.a, global4.a, vec4<bool>(!(!(global1[_wgslsmith_index_u32(1u, 22u)] != global1[_wgslsmith_index_u32(u_input.a.x, 22u)])), true || !global4.a.x, arg_1.d.x, false));
    var var_1 = vec2<bool>(all(select(select(arg_1.a.xxy, global4.a.yzx, true), select(select(vec3<bool>(global4.a.x, false, false), arg_0, global2[_wgslsmith_index_u32(u_input.a.x, 22u)]), arg_1.a.xxw, true), vec3<bool>(true, true, true))), true | func_4());
    return arg_1;
}

fn func_7(arg_0: vec4<u32>, arg_1: vec2<f32>, arg_2: Struct_1, arg_3: vec2<f32>) -> bool {
    var var_0 = arg_2.c;
    let var_1 = Struct_1(vec4<bool>(!global4.a.x, any(vec4<bool>(global2[_wgslsmith_index_u32(0u, 22u)], true, any(arg_2.a), false)), any(vec3<bool>(arg_2.d.x, true, true)), global4.d.x), _wgslsmith_f_op_vec2_f32(select(_wgslsmith_div_vec2_f32(arg_3, _wgslsmith_f_op_vec2_f32(-func_2(global4.a.xyw, Struct_1(vec4<bool>(arg_2.a.x, global2[_wgslsmith_index_u32(1u, 22u)], false, global2[_wgslsmith_index_u32(u_input.b, 22u)]), vec2<f32>(-563f, arg_3.x), -817f, arg_2.a.xy)).b)), _wgslsmith_f_op_vec2_f32(sign(arg_2.b)), arg_2.a.wx)), arg_3.x, global4.d);
    var_0 = -1511f;
    switch (2147483647i << (_wgslsmith_clamp_u32(arg_0.x, ~(~(~4294967295u)), u_input.a.x) % 32u)) {
        case 61467i: {
            var var_2 = func_2(select(func_5().xxx, global4.a.wwz, 59080u >= global1[_wgslsmith_index_u32(select(_wgslsmith_mult_u32(0u, arg_0.x), ~31615u, arg_2.d.x), 22u)]), Struct_1(vec4<bool>(true, arg_2.a.x, arg_2.a.x, global4.a.x), _wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(global4.b.x + arg_2.b.x), _wgslsmith_f_op_f32(arg_1.x - -865f)) - _wgslsmith_f_op_vec2_f32(-vec2<f32>(1641f, global4.c))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(1591f, global4.c))), vec2<bool>(true, true)));
            global2 = array<bool, 22>();
            loop {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                let var_3 = select(func_5().xxz, arg_2.a.wyw, var_2.a.wxx);
                global2 = array<bool, 22>();
                break;
            }
            var var_3 = var_2.b;
            global2 = array<bool, 22>();
        }
        case 0i: {
            var var_2 = arg_2;
            var_0 = _wgslsmith_f_op_f32(-169f);
        }
        case -1i: {
        }
        default: {
        }
    }
    let var_2 = _wgslsmith_mod_u32(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(4294967295u, 22u)], 22u)], u_input.b);
    return !arg_2.d.x;
}

fn func_8(arg_0: vec4<bool>, arg_1: Struct_1, arg_2: vec2<bool>, arg_3: Struct_1) -> Struct_1 {
    switch (i32(-1i) * i32(-2147483648)) {
        case 13160i: {
            let var_0 = arg_1;
        }
        case 9855i: {
            for (var var_0 = 8419i; func_5().x; var_0 -= 1i) {
                if (LOOP_COUNTERS[12u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
                let var_1 = func_2(global4.a.yzw, Struct_1(!(!select(global4.a, vec4<bool>(global4.a.x, arg_1.a.x, true, false), global4.a)), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(arg_3.b + _wgslsmith_f_op_vec2_f32(arg_1.b + vec2<f32>(arg_3.b.x, -1000f)))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -1338f), arg_1.b.x), vec2<bool>(any(!arg_3.a), arg_0.x)));
                var var_2 = Struct_1(arg_3.a, _wgslsmith_f_op_vec2_f32(trunc(var_1.b)), _wgslsmith_div_f32(_wgslsmith_f_op_f32(751f + _wgslsmith_f_op_f32(-global4.c)), _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(max(-1000f, global4.c))))))), func_5().ww);
                break;
            }
            global1 = array<u32, 22>();
        }
        case -1i: {
            if (false) {
                let var_0 = func_2(!func_5().zww, func_2(func_2(select(arg_3.a.xwy, arg_3.a.xyy, select(arg_1.a.zww, vec3<bool>(false, arg_3.a.x, arg_0.x), global4.a.xxy)), Struct_1(vec4<bool>(true, true, false, arg_2.x), _wgslsmith_f_op_vec2_f32(-arg_3.b), _wgslsmith_f_op_f32(f32(-1f) * -2399f), vec2<bool>(false, true))).a.xxy, func_2(func_2(select(vec3<bool>(global2[_wgslsmith_index_u32(u_input.a.x, 22u)], false, arg_0.x), vec3<bool>(true, false, false), vec3<bool>(arg_3.a.x, false, global2[_wgslsmith_index_u32(u_input.a.x, 22u)])), func_2(vec3<bool>(false, global4.a.x, arg_3.d.x), arg_1)).a.wyy, arg_3)));
                global2 = array<bool, 22>();
                var var_1 = arg_1.b;
                let var_2 = _wgslsmith_f_op_vec4_f32(vec4<f32>(arg_1.b.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(391f)) + var_1.x) * global4.c), -430f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -430f))) * _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(711f, var_0.c, -153f, var_0.c)))))));
                let var_3 = func_2(global4.a.xwx, func_2(arg_1.a.ywx, arg_1));
            }
            let var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1f)));
            switch ((22990i >> (_wgslsmith_dot_vec2_u32(abs(firstTrailingBit(vec2<u32>(10312u, global1[_wgslsmith_index_u32(11746u, 22u)]))), vec2<u32>(~global1[_wgslsmith_index_u32(u_input.b, 22u)], abs(33649u))) % 32u)) ^ _wgslsmith_clamp_i32(_wgslsmith_mult_i32(abs(-20857i), -1i), firstLeadingBit(~_wgslsmith_dot_vec4_i32(vec4<i32>(2147483647i, -16685i, -10716i, 22457i), vec4<i32>(i32(-2147483648), 6999i, 0i, 1i))), i32(-1i) * -1i)) {
                case -17042i: {
                    return arg_3;
                }
                case 0i: {
                    var var_1 = firstLeadingBit(vec4<i32>(~(~(-51570i)), ~(-50715i), _wgslsmith_div_i32(~27358i, 1i), ~0i << (u_input.a.x % 32u))) ^ vec4<i32>(-64175i, _wgslsmith_add_i32(0i, 0i), _wgslsmith_add_i32(~(~2147483647i), ~0i), select(27165i, -1027i, _wgslsmith_f_op_f32(-var_0) < arg_1.c));
                    var var_2 = 34421u;
                }
                default: {
                    let var_1 = _wgslsmith_div_vec4_i32(vec4<i32>(2147483647i, -abs(i32(-2147483648)), min(min(_wgslsmith_mult_i32(-7458i, -1i), _wgslsmith_clamp_i32(i32(-2147483648), 2147483647i, 40213i)), 21820i), -(~_wgslsmith_div_i32(2147483647i, i32(-2147483648)))), vec4<i32>(2147483647i, _wgslsmith_mult_i32(reverseBits(1i), countOneBits(1i)), ~(-16538i), _wgslsmith_add_i32(_wgslsmith_dot_vec3_i32(_wgslsmith_sub_vec3_i32(vec3<i32>(0i, 1i, 2147483647i), vec3<i32>(3698i, 2147483647i, 2147483647i)), vec3<i32>(i32(-2147483648), 0i, 45005i)), 1i)));
                    return arg_3;
                }
            }
        }
        case 38141i: {
            var var_0 = _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-global4.c) * _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(step(arg_3.c, -320f)))))))));
            var var_1 = func_2(select(arg_1.a.xxx, select(arg_0.xzw, global4.a.wwy, arg_2.x || !global4.a.x), any(select(arg_0.yyw, !arg_1.a.wwx, arg_0.x && true))), Struct_1(select(arg_1.a, func_2(func_2(vec3<bool>(arg_3.d.x, arg_3.a.x, global2[_wgslsmith_index_u32(u_input.b, 22u)]), Struct_1(arg_1.a, arg_3.b, arg_3.c, global4.d)).a.xxy, Struct_1(vec4<bool>(false, global4.d.x, arg_2.x, false), vec2<f32>(arg_3.b.x, arg_1.c), global4.b.x, vec2<bool>(false, arg_3.a.x))).a, arg_2.x), _wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(-arg_1.c), _wgslsmith_f_op_f32(-arg_3.b.x)) - _wgslsmith_f_op_vec2_f32(vec2<f32>(-1366f, arg_3.c) * arg_3.b)), -649f, vec2<bool>(any(arg_2), global2[_wgslsmith_index_u32(u_input.a.x, 22u)])));
            global2 = array<bool, 22>();
        }
        default: {
            switch (_wgslsmith_mult_i32(abs(max(53576i, ~2147483647i)), ~(-24906i) >> (_wgslsmith_sub_u32(~(global1[_wgslsmith_index_u32(33176u, 22u)] & 67810u), global1[_wgslsmith_index_u32(~(global1[_wgslsmith_index_u32(u_input.b, 22u)] | 19656u), 22u)]) % 32u))) {
                case -1i: {
                    var var_0 = vec4<i32>(31744i, countOneBits(countOneBits(abs(reverseBits(2147483647i)))), _wgslsmith_dot_vec2_i32(~(-vec2<i32>(67721i, i32(-2147483648))) | firstTrailingBit(reverseBits(vec2<i32>(-35118i, i32(-2147483648)))), abs(vec2<i32>(i32(-2147483648), 10777i) & _wgslsmith_clamp_vec2_i32(vec2<i32>(0i, 0i), vec2<i32>(-1i, -24135i), vec2<i32>(2147483647i, i32(-2147483648))))), -15722i);
                }
                case 1i: {
                    var var_0 = 4294967295u;
                    global1 = array<u32, 22>();
                }
                case 4231i: {
                    global0 = array<vec4<bool>, 15>();
                }
                default: {
                    let var_0 = max(0u, abs(_wgslsmith_mod_u32(global1[_wgslsmith_index_u32(~1u, 22u)] ^ ~global1[_wgslsmith_index_u32(18490u, 22u)], u_input.b ^ _wgslsmith_clamp_u32(u_input.b, u_input.b, 41944u))));
                    global3 = -(~(-9128i));
                    let var_1 = func_2(!select(vec3<bool>(all(global4.a.www), true, arg_1.a.x), vec3<bool>(false, true, global2[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(86272u, 22u)], 22u)] && false), !(!vec3<bool>(false, arg_3.d.x, global4.a.x))), arg_1);
                }
            }
        }
    }
    let var_0 = ~(vec3<i32>(_wgslsmith_div_i32(_wgslsmith_sub_i32(2147483647i, 30316i), func_3(arg_3, vec4<i32>(1i, 37105i, 1i, -48141i))), _wgslsmith_sub_i32(0i, ~(-5460i)), -(~(-1i))) & vec3<i32>(min(10558i, i32(-2147483648) >> (u_input.a.x % 32u)), _wgslsmith_sub_i32(-1i, ~(-15038i)), _wgslsmith_mult_i32(1i, 60572i)));
    var var_1 = countOneBits((4294967295u ^ (1u & global1[_wgslsmith_index_u32(firstLeadingBit(u_input.a.x), 22u)])) ^ 1u);
    let var_2 = vec3<f32>(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(func_2(vec3<bool>(false, false, global4.d.x), Struct_1(vec4<bool>(true, global2[_wgslsmith_index_u32(0u, 22u)], global4.d.x, global4.d.x), arg_3.b, global4.c, vec2<bool>(arg_2.x, false))).b.x, -601f, false))))), arg_3.c, -614f);
    loop {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        switch (~(-(~abs(2147483647i))) ^ _wgslsmith_mod_i32(i32(-1i) * -var_0.x, var_0.x | ~(~(i32(-2147483648))))) {
            case 2147483647i: {
                var var_3 = _wgslsmith_f_op_vec2_f32(round(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-arg_1.b))));
                continue;
            }
            case i32(-2147483648): {
                global0 = array<vec4<bool>, 15>();
                global2 = array<bool, 22>();
            }
            default: {
                global3 = ~(~1i);
                continue;
            }
        }
    }
    return func_2(global4.a.xyz, Struct_1(func_5(), vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(arg_1.c, 559f, false)) + _wgslsmith_f_op_f32(f32(-1f) * -1000f)), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(global4.c * arg_1.c), _wgslsmith_f_op_f32(ceil(var_2.x))))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-func_2(vec3<bool>(arg_3.a.x, false, global4.a.x), Struct_1(vec4<bool>(arg_0.x, true, true, arg_3.a.x), arg_1.b, 440f, arg_1.d)).b.x), 1709f), func_5().xy));
}

fn func_1() -> f32 {
    for (var var_0 = 10216i; ; var_0 -= 1i) {
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
        global3 = _wgslsmith_dot_vec3_i32(vec3<i32>(max(66238i, reverseBits(-67429i)), 0i, 1i) << (_wgslsmith_add_vec3_u32(~u_input.a, ~vec3<u32>(14550u, 0u, 1u)) % vec3<u32>(32u)), ((vec3<i32>(-9688i, -3543i, 34089i) << (u_input.a % vec3<u32>(32u))) & -abs(vec3<i32>(0i, i32(-2147483648), 2147483647i))) >> (vec3<u32>(_wgslsmith_sub_u32(global1[_wgslsmith_index_u32(21070u, 22u)], 33616u) << (abs(u_input.a.x) % 32u), abs(60297u << (u_input.b % 32u)), reverseBits(4294967295u)) % vec3<u32>(32u)));
        if (global2[_wgslsmith_index_u32(u_input.b, 22u)]) {
        }
    }
    let var_0 = global1[_wgslsmith_index_u32(~_wgslsmith_div_u32(0u, abs(firstLeadingBit(1u))), 22u)];
    let var_1 = func_8(global4.a, Struct_1(vec4<bool>(!select(global4.a.x, global4.a.x, false), global4.d.x, func_7(select(vec4<u32>(u_input.b, global1[_wgslsmith_index_u32(12833u, 22u)], u_input.a.x, global1[_wgslsmith_index_u32(35618u, 22u)]), vec4<u32>(global1[_wgslsmith_index_u32(49256u, 22u)], 4294967295u, 1u, u_input.a.x), global4.d.x), global4.b, func_2(global4.a.wwz, Struct_1(vec4<bool>(global4.d.x, global2[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(u_input.b, 22u)], 22u)], true, global2[_wgslsmith_index_u32(53986u, 22u)]), vec2<f32>(-510f, 346f), 1062f, vec2<bool>(true, false))), global4.b), true), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(global4.c, 1671f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1922f * _wgslsmith_div_f32(global4.c, global4.b.x))), global4.a.zy), global4.a.yw, func_2(select(!vec3<bool>(global2[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(u_input.b, 22u)], 22u)], true, global4.d.x), global4.a.zzy, global4.a.zzz), Struct_1(vec4<bool>(global4.d.x, global4.d.x, !global2[_wgslsmith_index_u32(25358u, 22u)], global4.d.x && global2[_wgslsmith_index_u32(9800u, 22u)]), _wgslsmith_f_op_vec2_f32(vec2<f32>(global4.b.x, global4.c) * global4.b), global4.c, global4.a.xy)));
    var var_2 = abs(i32(-2147483648)) >> (~_wgslsmith_sub_u32(u_input.b, global1[_wgslsmith_index_u32(~14668u, 22u)] << ((1u << (global1[_wgslsmith_index_u32(u_input.b, 22u)] % 32u)) % 32u)) % 32u);
    return _wgslsmith_f_op_f32(sign(1344f));
}

@compute
@workgroup_size(1)
fn main() {
    var var_0 = _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_f_op_vec4_f32(-vec4<f32>(698f, global4.c, -2324f, global4.b.x))))), vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1700f * 1572f)) * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(global4.c)))), global4.b.x, _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(func_1()), global4.c)))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(step(-1337f, global4.b.x)), _wgslsmith_f_op_f32(-628f * global4.c))), 1315f)));
    global1 = array<u32, 22>();
    global1 = array<u32, 22>();
    if (func_7(~vec4<u32>(4294967295u, _wgslsmith_sub_u32(0u << (u_input.b % 32u), global1[_wgslsmith_index_u32(54735u, 22u)]), global1[_wgslsmith_index_u32(_wgslsmith_add_u32(~5465u, u_input.b << (4294967295u % 32u)), 22u)], ~10926u), _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(1272f + global4.c), var_0.x) - _wgslsmith_f_op_vec2_f32(-vec2<f32>(-969f, var_0.x))), _wgslsmith_f_op_vec2_f32(-global4.b)), func_8(select(!func_8(vec4<bool>(global4.a.x, global2[_wgslsmith_index_u32(u_input.a.x, 22u)], global4.d.x, false), Struct_1(global0[_wgslsmith_index_u32(u_input.b, 15u)], global4.b, 1000f, vec2<bool>(global2[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(1u, 22u)], 22u)], false)), vec2<bool>(false, global4.d.x), Struct_1(global4.a, vec2<f32>(global4.b.x, global4.b.x), global4.b.x, vec2<bool>(global2[_wgslsmith_index_u32(u_input.b, 22u)], true))).a, func_8(vec4<bool>(false, global2[_wgslsmith_index_u32(44522u, 22u)], true, true), func_8(global0[_wgslsmith_index_u32(67910u, 15u)], Struct_1(global0[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(7029u, 22u)], 15u)], vec2<f32>(-314f, global4.b.x), global4.c, vec2<bool>(false, false)), global4.a.xw, Struct_1(global0[_wgslsmith_index_u32(22017u, 15u)], var_0.wx, -1138f, vec2<bool>(global4.a.x, global4.d.x))), func_5().ww, Struct_1(global0[_wgslsmith_index_u32(u_input.a.x, 15u)], vec2<f32>(var_0.x, global4.c), -1562f, global4.d)).a, !vec4<bool>(true, global4.d.x, false, global2[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(1u, 22u)], 22u)])), func_8(global4.a, func_2(vec3<bool>(false, true, false), func_2(global4.a.wwy, Struct_1(global0[_wgslsmith_index_u32(0u, 15u)], vec2<f32>(global4.b.x, 2161f), 655f, global4.a.xw))), select(func_5().xz, vec2<bool>(global2[_wgslsmith_index_u32(68853u, 22u)], true), func_2(vec3<bool>(global2[_wgslsmith_index_u32(u_input.a.x, 22u)], true, global4.d.x), Struct_1(vec4<bool>(global4.a.x, true, global4.a.x, false), vec2<f32>(var_0.x, global4.b.x), var_0.x, vec2<bool>(true, global2[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(25702u, 22u)], 22u)]))).d), Struct_1(func_8(vec4<bool>(global4.a.x, global2[_wgslsmith_index_u32(u_input.a.x, 22u)], true, true), Struct_1(global4.a, vec2<f32>(1000f, global4.b.x), 198f, global4.d), global4.d, Struct_1(vec4<bool>(false, global4.a.x, false, global2[_wgslsmith_index_u32(9157u, 22u)]), var_0.zx, global4.c, vec2<bool>(false, global4.a.x))).a, vec2<f32>(276f, var_0.x), _wgslsmith_f_op_f32(-var_0.x), vec2<bool>(true, true))), select(!vec2<bool>(false, global2[_wgslsmith_index_u32(14344u, 22u)]), !(!vec2<bool>(true, global4.d.x)), global4.d.x), func_2(vec3<bool>(global2[_wgslsmith_index_u32(u_input.b, 22u)] == global2[_wgslsmith_index_u32(4294967295u, 22u)], func_2(global4.a.zwy, Struct_1(vec4<bool>(global4.d.x, false, true, false), var_0.ww, global4.c, vec2<bool>(false, false))).a.x, true), Struct_1(func_2(global4.a.wzy, Struct_1(global4.a, global4.b, var_0.x, global4.d)).a, _wgslsmith_f_op_vec2_f32(global4.b - var_0.xy), var_0.x, !global4.d))), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(exp2(_wgslsmith_f_op_vec2_f32(-vec2<f32>(1470f, global4.b.x))))))) {
    }
    var_0 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_0.x) + _wgslsmith_f_op_f32(f32(-1f) * -222f)), _wgslsmith_f_op_f32(-var_0.x), global4.b.x, var_0.x) - _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(356f, global4.c, global4.b.x, -828f) + vec4<f32>(global4.c, global4.b.x, global4.b.x, global4.c))))));
    global1 = array<u32, 22>();
    global3 = _wgslsmith_dot_vec3_i32(countOneBits(_wgslsmith_add_vec3_i32(vec3<i32>(_wgslsmith_add_i32(0i, 36145i), 1i, 0i), vec3<i32>(reverseBits(-9212i), 0i, 2147483647i))), max(vec3<i32>(~_wgslsmith_dot_vec3_i32(vec3<i32>(i32(-2147483648), -48656i, -31899i), vec3<i32>(-1i, -26339i, -71929i)), abs(-40904i), _wgslsmith_mod_i32(25231i, 2147483647i) << (_wgslsmith_sub_u32(1u, global1[_wgslsmith_index_u32(0u, 22u)]) % 32u)), vec3<i32>(73495i, -1i, -func_3(Struct_1(global0[_wgslsmith_index_u32(4294967295u, 15u)], var_0.yy, -136f, vec2<bool>(true, true)), vec4<i32>(-20826i, -82383i, 2147483647i, i32(-2147483648))))));
    let x = u_input.a;
    s_output = StorageBuffer(-448f, _wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(global4.b.x, 289f, var_0.x, var_0.x)))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(sign(vec4<f32>(-1940f, global4.c, 499f, var_0.x)))) + _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(global4.c, 756f, -1199f, -305f) * vec4<f32>(var_0.x, 372f, global4.b.x, -173f)) - _wgslsmith_f_op_vec4_f32(vec4<f32>(global4.c, -442f, global4.b.x, global4.b.x) + vec4<f32>(global4.b.x, global4.b.x, var_0.x, var_0.x)))))));
}

`;