export const input = [117,45,43,246,123,40,50,6,220,165,2,81,149,236,126,229,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [117,45,43,246,123,40,50,6,220,165,2,81,149,236,126,229,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[117,45,43,246,123,40,50,6,220,165,2,81,149,236,126,229]}
// Seed: 10270729018373600873

struct Struct_1 {
    a: vec2<bool>,
    b: vec2<f32>,
    c: bool,
}

struct Struct_2 {
    a: vec4<bool>,
    b: f32,
}

struct UniformBuffer {
    a: vec4<i32>,
}

struct StorageBuffer {
    a: f32,
    b: f32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<vec2<i32>, 29> = array<vec2<i32>, 29>(vec2<i32>(-43067i, 871i), vec2<i32>(-794i, 14064i), vec2<i32>(-6903i, 37800i), vec2<i32>(-56887i, -14365i), vec2<i32>(51550i, 1i), vec2<i32>(-5986i, 2147483647i), vec2<i32>(14390i, 5271i), vec2<i32>(-1575i, 33720i), vec2<i32>(1317i, -1i), vec2<i32>(0i, i32(-2147483648)), vec2<i32>(-1i, 9393i), vec2<i32>(-10042i, i32(-2147483648)), vec2<i32>(2147483647i, 1i), vec2<i32>(7895i, i32(-2147483648)), vec2<i32>(0i, -1570i), vec2<i32>(-1i, 14508i), vec2<i32>(2147483647i, 2147483647i), vec2<i32>(0i, i32(-2147483648)), vec2<i32>(-1i, -1i), vec2<i32>(9776i, 1i), vec2<i32>(i32(-2147483648), 0i), vec2<i32>(-33018i, 2147483647i), vec2<i32>(2147483647i, 35827i), vec2<i32>(2748i, 2147483647i), vec2<i32>(i32(-2147483648), -29473i), vec2<i32>(-39252i, 2147483647i), vec2<i32>(46807i, 10919i), vec2<i32>(57787i, 28226i), vec2<i32>(i32(-2147483648), 18972i));

var<private> global1: array<Struct_2, 15> = array<Struct_2, 15>(Struct_2(vec4<bool>(false, true, false, false), -1522f), Struct_2(vec4<bool>(true, false, false, false), 1374f), Struct_2(vec4<bool>(false, false, true, false), -990f), Struct_2(vec4<bool>(true, false, true, true), 342f), Struct_2(vec4<bool>(false, true, false, false), -1289f), Struct_2(vec4<bool>(true, true, true, false), -1436f), Struct_2(vec4<bool>(true, false, true, false), -876f), Struct_2(vec4<bool>(true, true, false, true), -1631f), Struct_2(vec4<bool>(false, false, true, true), 937f), Struct_2(vec4<bool>(false, false, true, false), -1845f), Struct_2(vec4<bool>(true, false, true, false), 1646f), Struct_2(vec4<bool>(false, false, true, true), 226f), Struct_2(vec4<bool>(true, false, true, true), -2271f), Struct_2(vec4<bool>(true, true, true, true), 648f), Struct_2(vec4<bool>(true, true, false, false), 611f));

var<private> global2: vec2<i32>;

var<private> global3: vec3<i32> = vec3<i32>(-727i, 49016i, i32(-2147483648));

var<private> global4: vec3<u32> = vec3<u32>(4294967295u, 8907u, 44808u);

var<private> LOOP_COUNTERS: array<u32, 21>;

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn func_6(arg_0: Struct_1, arg_1: Struct_2, arg_2: f32, arg_3: Struct_1) -> vec3<u32> {
    global4 = max(firstTrailingBit(vec3<u32>(1u, 40698u, global4.x)), firstTrailingBit(select(countOneBits(vec3<u32>(77136u, 1u, 0u)) & ~vec3<u32>(global4.x, 47593u, global4.x), _wgslsmith_clamp_vec3_u32(vec3<u32>(global4.x, global4.x, global4.x) << (vec3<u32>(global4.x, global4.x, 58129u) % vec3<u32>(32u)), countOneBits(vec3<u32>(global4.x, global4.x, global4.x)), ~vec3<u32>(0u, global4.x, 56524u)), select(!vec3<bool>(arg_3.c, false, true), select(vec3<bool>(false, arg_3.a.x, arg_0.a.x), arg_1.a.xwy, arg_3.a.x), select(vec3<bool>(arg_3.c, arg_3.a.x, true), arg_1.a.wyy, vec3<bool>(arg_1.a.x, false, arg_0.a.x))))));
    global1 = array<Struct_2, 15>();
    var var_0 = Struct_1(!vec2<bool>(0u == _wgslsmith_dot_vec2_u32(vec2<u32>(85641u, 4294967295u), vec2<u32>(global4.x, 1u)), all(arg_3.a) || arg_1.a.x), _wgslsmith_f_op_vec2_f32(exp2(_wgslsmith_f_op_vec2_f32(-arg_3.b))), 1u > min(2880u, global4.x));
    let var_1 = arg_3;
    if (arg_1.a.x | !(arg_0.b.x < _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-1000f * arg_3.b.x))))) {
        global4 = firstTrailingBit(vec3<u32>(_wgslsmith_clamp_u32(4294967295u, 1u, global4.x), global4.x, 20817u) | abs(_wgslsmith_mult_vec3_u32(vec3<u32>(13830u, global4.x, 34201u), vec3<u32>(global4.x, global4.x, 43044u)))) << (abs(~vec3<u32>(~11477u, ~global4.x, _wgslsmith_mod_u32(4294967295u, global4.x))) % vec3<u32>(32u));
        var var_2 = arg_1;
    }
    return ~(~vec3<u32>(~(~1u), 0u, 40950u));
}

fn func_5(arg_0: vec4<bool>, arg_1: i32) -> Struct_2 {
    let var_0 = Struct_1(vec2<bool>(!arg_0.x, arg_0.x), vec2<f32>(_wgslsmith_f_op_f32(trunc(_wgslsmith_div_f32(-1288f, _wgslsmith_f_op_f32(step(887f, 528f))))), -392f), !all(vec3<bool>(!arg_0.x, arg_0.x && true, !arg_0.x)));
    for (var var_1 = -31866i; var_1 == 1i; global0 = array<vec2<i32>, 29>()) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
    }
    global1 = array<Struct_2, 15>();
    global0 = array<vec2<i32>, 29>();
    loop {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        global2 = countOneBits(reverseBits(global0[_wgslsmith_index_u32(abs(_wgslsmith_dot_vec2_u32(vec2<u32>(global4.x, global4.x), max(vec2<u32>(4294967295u, 4294967295u), vec2<u32>(0u, 3282u)))), 29u)]));
        let var_1 = firstTrailingBit(vec3<i32>(i32(-2147483648), global3.x, ~2147483647i)) >> (_wgslsmith_clamp_vec3_u32(~countOneBits(vec3<u32>(4294967295u, 40730u, 29337u)), _wgslsmith_add_vec3_u32(func_6(Struct_1(vec2<bool>(var_0.a.x, true), vec2<f32>(478f, -635f), arg_0.x), global1[_wgslsmith_index_u32(~88982u, 15u)], _wgslsmith_f_op_f32(777f - 193f), Struct_1(var_0.a, vec2<f32>(var_0.b.x, 2362f), var_0.c)), _wgslsmith_mod_vec3_u32(_wgslsmith_add_vec3_u32(vec3<u32>(global4.x, global4.x, global4.x), vec3<u32>(global4.x, 6048u, 14534u)), vec3<u32>(global4.x, 0u, 4294967295u))), ~vec3<u32>(global4.x, global4.x, global4.x) >> (select(vec3<u32>(0u, 1u, global4.x), vec3<u32>(global4.x, global4.x, 24489u), true) % vec3<u32>(32u))) % vec3<u32>(32u));
    }
    return global1[_wgslsmith_index_u32(global4.x, 15u)];
}

fn func_7(arg_0: Struct_2, arg_1: Struct_1) -> bool {
    let var_0 = arg_1.a.x;
    var var_1 = abs(~1u);
    if (var_0) {
        for (var var_2 = 0i; ; var_2 += 1i) {
            if (LOOP_COUNTERS[2u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            let var_3 = countOneBits(global4.x);
            continue;
        }
        var var_2 = arg_0;
        loop {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            global3 = vec3<i32>(0i, 11402i, max(global2.x, _wgslsmith_mult_i32(~max(1i, 1i), _wgslsmith_div_i32(~1i, firstTrailingBit(1i)))));
            let var_3 = _wgslsmith_f_op_f32(sign(-289f));
            let var_4 = Struct_1(!vec2<bool>(select(!arg_1.c, all(vec3<bool>(var_0, arg_0.a.x, arg_0.a.x)), all(vec3<bool>(false, arg_0.a.x, false))), false & any(vec2<bool>(arg_1.c, arg_0.a.x))), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-arg_1.b)), (~func_6(Struct_1(arg_1.a, arg_1.b, false), Struct_2(vec4<bool>(false, var_2.a.x, arg_1.a.x, var_0), 980f), -1729f, Struct_1(vec2<bool>(true, false), vec2<f32>(1137f, -1597f), false)).x & _wgslsmith_clamp_u32(global4.x ^ 25513u, _wgslsmith_add_u32(global4.x, 10224u), 1u)) >= ~global4.x);
            var var_5 = _wgslsmith_add_i32(41511i | u_input.a.x, global2.x);
        }
        var var_3 = firstLeadingBit(-vec4<i32>(select(max(global2.x, -1i), firstLeadingBit(u_input.a.x), true), ~(i32(-1i) * i32(-2147483648)), i32(-1i) * -18767i, _wgslsmith_clamp_i32(~8533i, select(-11835i, 0i, var_0), u_input.a.x)));
        if (!var_0) {
            return all(func_5(!func_5(vec4<bool>(arg_1.a.x, true, false, false), -u_input.a.x).a, abs(global3.x)).a.wy);
        }
    }
    global3 = firstLeadingBit(~u_input.a.yxx);
    var var_2 = vec2<u32>(~57874u, ~countOneBits(4294967295u));
    return !(!all(select(arg_0.a.yyz, !arg_0.a.wyy, arg_0.a.zwx)));
}

fn func_4(arg_0: vec4<i32>, arg_1: vec3<bool>) -> vec3<i32> {
    global2 = arg_0.yw;
    if (func_7(func_5(vec4<bool>(select(arg_1.x, arg_1.x, true), false, all(vec4<bool>(false, true, arg_1.x, true)), 15577u == global4.x), abs(_wgslsmith_dot_vec4_i32(arg_0, vec4<i32>(-59722i, u_input.a.x, 1i, arg_0.x)))), Struct_1(!(!arg_1.yz), _wgslsmith_f_op_vec2_f32(min(_wgslsmith_f_op_vec2_f32(-vec2<f32>(1284f, 1758f)), _wgslsmith_f_op_vec2_f32(-vec2<f32>(1000f, -972f)))), true)) | arg_1.x) {
        for (var var_0 = 0i; var_0 == 2147483647i; global0 = array<vec2<i32>, 29>()) {
            if (LOOP_COUNTERS[4u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
            continue;
        }
        global0 = array<vec2<i32>, 29>();
        for (; select(true, all(arg_1), true); ) {
            if (LOOP_COUNTERS[5u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
            return vec3<i32>(_wgslsmith_sub_i32(~(_wgslsmith_mult_i32(u_input.a.x, -1i) & (u_input.a.x | global2.x)), 1i), _wgslsmith_div_i32(-42338i, arg_0.x), abs(2147483647i));
        }
        for (var var_0 = 0i; ; var_0 -= 1i) {
            if (LOOP_COUNTERS[6u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
            let var_1 = arg_1.x;
            let var_2 = Struct_1(vec2<bool>(false, all(select(select(vec4<bool>(arg_1.x, arg_1.x, true, arg_1.x), vec4<bool>(arg_1.x, var_1, true, arg_1.x), vec4<bool>(arg_1.x, arg_1.x, true, var_1)), !vec4<bool>(var_1, var_1, true, false), global2.x > -1i))), vec2<f32>(_wgslsmith_f_op_f32(sign(519f)), 1070f), true);
            let var_3 = 0u ^ global4.x;
            let var_4 = select(~global4.x, _wgslsmith_sub_u32(global4.x, ~1u), arg_1.x) & ~(~(var_3 << (~var_3 % 32u)));
            global0 = array<vec2<i32>, 29>();
        }
        if (false & arg_1.x) {
            var var_0 = !arg_1.x;
            let var_1 = ~(~vec2<u32>(1u ^ global4.x, global4.x));
            var var_2 = ~(min(~(i32(-2147483648)), ~countOneBits(-43990i)) | (i32(-1i) * -(global3.x >> (var_1.x % 32u))));
            let var_3 = select(~abs(_wgslsmith_mult_vec3_u32(_wgslsmith_add_vec3_u32(vec3<u32>(4294967295u, 4294967295u, var_1.x), vec3<u32>(global4.x, global4.x, 105378u)), vec3<u32>(96797u, global4.x, 0u))), vec3<u32>(~(~(~0u)), ~(~1u), (max(40828u, 0u) & _wgslsmith_mod_u32(global4.x, global4.x)) | 39213u), true);
            var var_4 = vec4<f32>(1467f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(-1061f, -641f)) - _wgslsmith_f_op_f32(144f + -1577f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1000f)), true & arg_1.x))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-281f + -266f)) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1142f)))), -158f);
        }
    }
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
    }
    loop {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        if (false) {
            let var_0 = global4.x;
            let var_1 = vec2<u32>(min(4294967295u, global4.x) ^ (global4.x | _wgslsmith_div_u32(_wgslsmith_mult_u32(global4.x, global4.x), 0u)), abs(114446u ^ global4.x));
            var var_2 = _wgslsmith_mult_i32(-arg_0.x, _wgslsmith_dot_vec2_i32(firstLeadingBit(vec2<i32>(-26397i, 0i) ^ u_input.a.wx), vec2<i32>(_wgslsmith_clamp_i32(0i, -15196i, -66201i), arg_0.x))) >= 1i;
        }
    }
    var var_0 = _wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(-697f, -627f, 1085f, -370f)))), _wgslsmith_f_op_vec4_f32(select(vec4<f32>(func_5(vec4<bool>(arg_1.x, false, arg_1.x, arg_1.x), 65908i).b, _wgslsmith_f_op_f32(select(1592f, -788f, arg_1.x)), -409f, 1951f), vec4<f32>(_wgslsmith_f_op_f32(301f * 817f), 735f, _wgslsmith_f_op_f32(trunc(402f)), _wgslsmith_f_op_f32(-1368f)), arg_1.x)))), vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(1004f * -524f), _wgslsmith_f_op_f32(1441f * -479f))) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(-1835f)))), -270f, _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-2142f * -377f)))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(f32(-1f) * -193f))), _wgslsmith_f_op_f32(f32(-1f) * -255f)))));
    return -vec3<i32>(~(-reverseBits(u_input.a.x)), ~global3.x, u_input.a.x);
}

fn func_3() -> Struct_2 {
    for (var var_0 = 14011i; any(vec3<bool>(true, true, all(vec4<bool>(true, true, true, true)))); global3 = ~(-func_4(-vec4<i32>(0i, 2147483647i, 2147483647i, global3.x), vec3<bool>(true, true, -11274i <= global3.x)))) {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
    }
    loop {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        let var_0 = _wgslsmith_sub_i32(i32(-1i) * 0i, global3.x) >= min(-1i, -u_input.a.x);
    }
    switch (global2.x) {
        case 16589i: {
            global4 = _wgslsmith_sub_vec3_u32(vec3<u32>(37156u, 63085u, global4.x), select(~(~vec3<u32>(global4.x, global4.x, 4294967295u)), vec3<u32>(1102u, func_6(Struct_1(vec2<bool>(true, false), vec2<f32>(-291f, 155f), true), global1[_wgslsmith_index_u32(global4.x, 15u)], _wgslsmith_f_op_f32(floor(402f)), Struct_1(vec2<bool>(true, false), vec2<f32>(1347f, 726f), false)).x, 1u), select(vec3<bool>(true, false, any(vec4<bool>(true, true, true, true))), vec3<bool>(true, false, global4.x < 95403u), true & all(vec2<bool>(false, true)))));
            if (any(select(vec2<bool>(true, true), vec2<bool>(true, all(vec4<bool>(false, false, false, true))), select(vec2<bool>(true, false), vec2<bool>(true, true), true))) && true) {
                let var_0 = -vec4<i32>(func_4(u_input.a, !select(vec3<bool>(true, false, true), vec3<bool>(false, false, true), vec3<bool>(true, false, false))).x, -global3.x, u_input.a.x, firstLeadingBit(-countOneBits(i32(-2147483648))));
                var var_1 = func_5(vec4<bool>(true, true, false, all(!select(vec3<bool>(true, true, true), vec3<bool>(true, true, false), false))), _wgslsmith_dot_vec2_i32(vec2<i32>(u_input.a.x, min(var_0.x, -global3.x)), -abs(var_0.zw)));
                let var_2 = func_5(var_1.a, countOneBits(firstTrailingBit(2147483647i)));
                var var_3 = Struct_1(select(vec2<bool>(var_1.a.x, any(var_1.a) != var_1.a.x), var_1.a.yx, global4.x < global4.x), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(exp2(vec2<f32>(var_2.b, var_2.b))))), var_1.a.x);
                var_3 = Struct_1(var_3.a, _wgslsmith_f_op_vec2_f32(-vec2<f32>(var_2.b, _wgslsmith_f_op_f32(var_1.b + _wgslsmith_div_f32(-1202f, var_2.b)))), var_1.a.x);
            }
            global3 = _wgslsmith_add_vec3_i32(select(u_input.a.ywz, ~min(u_input.a.yxw, vec3<i32>(global3.x, 11807i, global2.x)), all(vec2<bool>(true, true))), reverseBits(u_input.a.wyz)) ^ u_input.a.yxy;
            switch (global3.x) {
                case i32(-2147483648): {
                    var var_0 = countOneBits(min(select(u_input.a.yz, u_input.a.wx, vec2<bool>(true, true)), _wgslsmith_clamp_vec2_i32(vec2<i32>(-6927i, u_input.a.x), global0[_wgslsmith_index_u32(62738u, 29u)], u_input.a.wx)) | global0[_wgslsmith_index_u32(global4.x, 29u)]) >> (~(~vec2<u32>(global4.x, _wgslsmith_dot_vec3_u32(vec3<u32>(global4.x, global4.x, global4.x), vec3<u32>(68318u, global4.x, 4294967295u)))) % vec2<u32>(32u));
                    global2 = select(vec2<i32>(_wgslsmith_dot_vec2_i32(firstTrailingBit(vec2<i32>(u_input.a.x, u_input.a.x)), global0[_wgslsmith_index_u32(reverseBits(global4.x), 29u)]), 1i ^ firstLeadingBit(global3.x)), global0[_wgslsmith_index_u32(global4.x, 29u)], any(select(vec4<bool>(false, true, true, true), vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true)))) << (~(reverseBits(~global4.xx) ^ global4.zy) % vec2<u32>(32u));
                }
                case -32646i: {
                    var var_0 = func_5(vec4<bool>(false, all(vec3<bool>(true, all(vec3<bool>(false, true, false)), true)), any(vec3<bool>(true, true, true)), func_7(global1[_wgslsmith_index_u32(global4.x, 15u)], Struct_1(select(vec2<bool>(false, false), vec2<bool>(false, true), vec2<bool>(false, true)), _wgslsmith_f_op_vec2_f32(-vec2<f32>(-125f, 178f)), any(vec3<bool>(false, true, false))))), -global2.x);
                    let var_1 = Struct_1(var_0.a.zw, _wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_div_f32(-523f, 441f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-477f + var_0.b) - _wgslsmith_f_op_f32(floor(var_0.b)))) - _wgslsmith_f_op_vec2_f32(trunc(_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(ceil(vec2<f32>(1078f, 104f))), _wgslsmith_f_op_vec2_f32(-vec2<f32>(-738f, -2068f)))))), var_0.a.x);
                }
                default: {
                }
            }
            for (; true; ) {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                var var_0 = any(vec4<bool>(false, true, true, !func_7(func_5(vec4<bool>(true, true, false, false), 11269i), Struct_1(vec2<bool>(true, false), vec2<f32>(-1690f, 104f), false))));
                break;
            }
        }
        case 2147483647i: {
            switch (u_input.a.x) {
                default: {
                }
            }
            loop {
                if (LOOP_COUNTERS[12u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
                continue;
            }
            var var_0 = abs(~(-vec3<i32>(func_4(u_input.a, vec3<bool>(false, true, false)).x, _wgslsmith_clamp_i32(-16262i, -16800i, -45505i), min(global3.x, u_input.a.x))));
        }
        case -11374i: {
            switch (~(-u_input.a.x)) {
                case -1i: {
                    global2 = _wgslsmith_sub_vec2_i32(-global0[_wgslsmith_index_u32(global4.x, 29u)], u_input.a.ww | abs(vec2<i32>(-20244i, -global3.x)));
                    let var_0 = Struct_1(vec2<bool>(true, false | all(vec3<bool>(false, false, true))), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(min(_wgslsmith_f_op_vec2_f32(max(_wgslsmith_div_vec2_f32(vec2<f32>(-1068f, 462f), vec2<f32>(-392f, 234f)), _wgslsmith_div_vec2_f32(vec2<f32>(-253f, 1000f), vec2<f32>(-127f, -1662f)))), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(-1412f, -1418f))))) + vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1837f) * -1640f), _wgslsmith_f_op_f32(trunc(-450f)))), !any(vec3<bool>(true, true, true)));
                    let var_1 = global1[_wgslsmith_index_u32(53469u, 15u)];
                    let var_2 = Struct_1(!vec2<bool>(false, all(vec3<bool>(true, true, true))), vec2<f32>(360f, _wgslsmith_f_op_f32(select(var_1.b, -1386f, true))), true);
                }
                case 42518i: {
                    var var_0 = -(abs(min(-35902i, func_4(u_input.a, vec3<bool>(true, true, true)).x)) >> (88476u % 32u));
                    return global1[_wgslsmith_index_u32(_wgslsmith_sub_u32(global4.x, ~_wgslsmith_clamp_u32(_wgslsmith_dot_vec2_u32(global4.xy, ~vec2<u32>(global4.x, 1u)), global4.x, (34596u & global4.x) | global4.x)), 15u)];
                }
                case i32(-2147483648): {
                    global2 = vec2<i32>(u_input.a.x, global3.x);
                }
                default: {
                }
            }
            global2 = global0[_wgslsmith_index_u32(37469u, 29u)];
            var var_0 = vec3<i32>(_wgslsmith_sub_i32(func_4(abs(vec4<i32>(2147483647i, -1i, -6375i, -13746i)), func_5(vec4<bool>(false, false, true, true), global2.x).a.zwz).x, -1i), u_input.a.x, max(global2.x, 1i)) >> ((vec3<u32>(~_wgslsmith_dot_vec4_u32(vec4<u32>(global4.x, global4.x, global4.x, global4.x), vec4<u32>(global4.x, global4.x, 83051u, 0u)), ~4294967295u, abs(_wgslsmith_sub_u32(global4.x, global4.x))) << (vec3<u32>(_wgslsmith_div_u32(1u, _wgslsmith_dot_vec2_u32(global4.yz, vec2<u32>(global4.x, global4.x))), ~(~95218u), countOneBits(global4.x)) % vec3<u32>(32u))) % vec3<u32>(32u));
            var var_1 = global1[_wgslsmith_index_u32(global4.x, 15u)];
            var var_2 = -1393f;
        }
        default: {
            let var_0 = global1[_wgslsmith_index_u32(reverseBits(4294967295u), 15u)];
        }
    }
    loop {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        let var_0 = 569f;
        var var_1 = -783f;
        let var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_0));
    }
    var var_0 = Struct_1(select(!(!func_5(vec4<bool>(false, true, false, false), 28947i).a.zx), vec2<bool>(func_7(global1[_wgslsmith_index_u32(1u, 15u)], Struct_1(vec2<bool>(true, false), vec2<f32>(-864f, 1239f), false)), true), any(select(vec2<bool>(false, true), vec2<bool>(true, false), vec2<bool>(false, false))) & (func_5(vec4<bool>(true, false, false, true), u_input.a.x).b >= -1383f)), _wgslsmith_f_op_vec2_f32(sign(_wgslsmith_div_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(-943f), _wgslsmith_f_op_f32(-382f - 1731f)), vec2<f32>(_wgslsmith_f_op_f32(f32(-1f) * -543f), _wgslsmith_f_op_f32(f32(-1f) * -385f))))), !(_wgslsmith_mult_u32(0u, global4.x ^ 0u) == abs(_wgslsmith_clamp_u32(global4.x, 4294967295u, global4.x))));
    return Struct_2(select(vec4<bool>(var_0.c, _wgslsmith_f_op_f32(-1000f) == _wgslsmith_f_op_f32(-var_0.b.x), var_0.a.x & all(vec3<bool>(false, true, var_0.a.x)), any(select(vec4<bool>(false, true, var_0.c, false), vec4<bool>(true, var_0.c, var_0.a.x, var_0.c), true))), vec4<bool>(true, true, true, true), true), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(var_0.b.x * 1113f)) + -1698f) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(var_0.b.x * -2380f))));
}

fn func_8(arg_0: Struct_1, arg_1: i32, arg_2: vec2<u32>, arg_3: Struct_2) -> vec3<i32> {
    let var_0 = 1u ^ (global4.x | global4.x);
    switch (-1i) {
        case 2147483647i: {
            global2 = _wgslsmith_add_vec2_i32(-(~firstTrailingBit(firstLeadingBit(global3.zy))), min(min(func_4(vec4<i32>(6345i, 29480i, arg_1, global2.x), arg_3.a.zyy).zy, global3.xy & vec2<i32>(-1i, u_input.a.x)), vec2<i32>(min(_wgslsmith_dot_vec2_i32(u_input.a.zw, global0[_wgslsmith_index_u32(var_0, 29u)]), _wgslsmith_clamp_i32(66635i, 0i, global3.x)), -13814i)));
            loop {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                var var_1 = -global0[_wgslsmith_index_u32(var_0, 29u)];
            }
        }
        default: {
            var var_1 = ~abs(firstTrailingBit(vec3<u32>(global4.x, arg_2.x, global4.x)));
            global3 = max(vec3<i32>(_wgslsmith_add_i32(i32(-1i) * -3143i, ~global2.x), u_input.a.x, ~countOneBits(52125i)), u_input.a.zzz) | _wgslsmith_sub_vec3_i32(vec3<i32>(u_input.a.x, 233i, arg_1), u_input.a.zzw);
            var var_2 = u_input.a;
        }
    }
    global2 = u_input.a.xz;
    let var_1 = Struct_1(vec2<bool>(arg_0.c, any(select(!vec4<bool>(arg_3.a.x, false, arg_3.a.x, arg_3.a.x), func_3().a, !arg_3.a))), arg_0.b, true);
    let var_2 = vec3<u32>((4294967295u | arg_2.x) ^ 48585u, _wgslsmith_mult_u32(global4.x, ~max(global4.x, 22885u)), ~(~1u)) | ~(~(~abs(vec3<u32>(arg_2.x, global4.x, 27202u))));
    return u_input.a.wyz;
}

fn func_2(arg_0: vec2<f32>, arg_1: vec4<bool>, arg_2: Struct_1, arg_3: Struct_1) -> vec4<bool> {
    loop {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
        loop {
            if (LOOP_COUNTERS[16u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
            global3 = _wgslsmith_mod_vec3_i32(func_8(Struct_1(vec2<bool>(any(arg_2.a), 474f >= arg_3.b.x), vec2<f32>(_wgslsmith_f_op_f32(arg_2.b.x + arg_0.x), _wgslsmith_f_op_f32(sign(arg_3.b.x))), all(!vec4<bool>(false, arg_3.c, true, true))), _wgslsmith_clamp_i32(34660i, _wgslsmith_mod_i32(global2.x, 0i), 0i) >> (30445u % 32u), global4.xy, func_3()), select(u_input.a.zzw, vec3<i32>(global2.x, countOneBits(2147483647i), max(u_input.a.x, global3.x)), false) ^ _wgslsmith_div_vec3_i32(~min(vec3<i32>(u_input.a.x, u_input.a.x, u_input.a.x), u_input.a.ywy), _wgslsmith_mod_vec3_i32(~u_input.a.wwy, func_8(Struct_1(vec2<bool>(arg_2.c, arg_3.c), vec2<f32>(-1132f, -884f), arg_3.a.x), -17896i, vec2<u32>(global4.x, 13238u), global1[_wgslsmith_index_u32(global4.x, 15u)]))));
            let var_0 = Struct_1(!(!vec2<bool>(all(vec2<bool>(true, arg_3.a.x)), true)), vec2<f32>(_wgslsmith_f_op_f32(-arg_3.b.x), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -240f)) * _wgslsmith_f_op_f32(-arg_3.b.x))), all(select(!arg_1, vec4<bool>(-1399f > arg_2.b.x, global4.x > global4.x, any(vec2<bool>(false, false)), true), !arg_3.c)));
            let var_1 = Struct_1(var_0.a, var_0.b, any(arg_3.a));
            global3 = _wgslsmith_div_vec3_i32(-min(_wgslsmith_sub_vec3_i32(-vec3<i32>(global3.x, -34686i, global2.x), _wgslsmith_div_vec3_i32(u_input.a.yzw, u_input.a.zxy)), _wgslsmith_div_vec3_i32(-vec3<i32>(0i, global3.x, global2.x), ~u_input.a.xww)), -select(func_8(arg_2, global2.x, global4.xx, Struct_2(vec4<bool>(var_1.c, true, false, false), arg_3.b.x)) & u_input.a.ywx, ~(-vec3<i32>(global2.x, global3.x, 2147483647i)), arg_3.a.x));
            continue;
        }
        if (all(vec3<bool>(arg_2.a.x, true | !arg_3.a.x, true))) {
            break;
        }
        let var_0 = true;
        global1 = array<Struct_2, 15>();
        let var_1 = Struct_1(vec2<bool>(true, true), arg_0, arg_1.x);
    }
    var var_0 = arg_2.b.x;
    global2 = _wgslsmith_clamp_vec2_i32(~func_8(Struct_1(!vec2<bool>(arg_3.c, true), _wgslsmith_f_op_vec2_f32(vec2<f32>(-1000f, -1051f) - vec2<f32>(-257f, -995f)), any(arg_1.xzx)), -3819i, vec2<u32>(_wgslsmith_div_u32(47339u, 52034u), 4294967295u), global1[_wgslsmith_index_u32(12928u, 15u)]).yx, countOneBits(vec2<i32>(-1i) * -global0[_wgslsmith_index_u32(~global4.x, 29u)]), ~(~vec2<i32>(i32(-1i) * -11249i, -global3.x)));
    switch (-1i) {
        case -1275i: {
            let var_1 = !vec2<bool>(arg_3.a.x, true && (abs(global3.x) > u_input.a.x));
            global0 = array<vec2<i32>, 29>();
        }
        case i32(-2147483648): {
            let var_1 = global1[_wgslsmith_index_u32(0u, 15u)];
            let var_2 = arg_3;
            let var_3 = global1[_wgslsmith_index_u32(select(4433u ^ (~(~36727u) ^ _wgslsmith_div_u32(_wgslsmith_mult_u32(global4.x, 4294967295u), _wgslsmith_dot_vec3_u32(vec3<u32>(global4.x, 28399u, global4.x), vec3<u32>(global4.x, global4.x, 40269u)))), 1u, func_5(vec4<bool>(all(var_1.a), false, true, var_1.a.x), -_wgslsmith_div_i32(abs(global3.x), global2.x)).a.x), 15u)];
            if (true) {
                global0 = array<vec2<i32>, 29>();
                var var_4 = _wgslsmith_mod_vec3_i32(func_4(u_input.a, var_3.a.xxy), vec3<i32>(2147483647i & (global3.x & -2147483647i), 2147483647i, ~(-global2.x | reverseBits(global3.x))));
            }
            var var_4 = vec4<u32>(abs(~max(abs(37250u), ~global4.x)), 1u, countOneBits(max(~1u | global4.x, global4.x)), ~0u);
        }
        default: {
            var var_1 = Struct_1(arg_2.a, vec2<f32>(arg_3.b.x, arg_3.b.x), !(true && arg_1.x));
            global4 = select(firstTrailingBit(vec3<u32>(max(global4.x, global4.x), ~global4.x, 16876u)), _wgslsmith_mult_vec3_u32(max(func_6(arg_3, Struct_2(arg_1, 912f), arg_0.x, Struct_1(arg_1.zy, vec2<f32>(1409f, 1008f), arg_2.a.x)), vec3<u32>(global4.x, global4.x, global4.x)), func_6(Struct_1(vec2<bool>(arg_2.c, true), var_1.b, arg_1.x), global1[_wgslsmith_index_u32(_wgslsmith_div_u32(1u, global4.x), 15u)], _wgslsmith_f_op_f32(-404f * -1534f), arg_2)), !arg_1.x) & (~vec3<u32>(firstLeadingBit(1u), _wgslsmith_mod_u32(1u, global4.x), 14143u) >> (vec3<u32>(func_6(Struct_1(arg_3.a, arg_2.b, true), global1[_wgslsmith_index_u32(_wgslsmith_dot_vec3_u32(vec3<u32>(global4.x, 4294967295u, global4.x), vec3<u32>(global4.x, 29319u, global4.x)), 15u)], _wgslsmith_f_op_f32(arg_3.b.x - arg_2.b.x), Struct_1(arg_2.a, vec2<f32>(-1771f, arg_2.b.x), true)).x, 0u, abs(_wgslsmith_dot_vec4_u32(vec4<u32>(78474u, global4.x, 40003u, global4.x), vec4<u32>(global4.x, 4294967295u, global4.x, 0u)))) % vec3<u32>(32u)));
            for (var var_2 = 1i; var_2 > -22292i; ) {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                var var_3 = _wgslsmith_sub_i32(global2.x, _wgslsmith_dot_vec4_i32(_wgslsmith_sub_vec4_i32(vec4<i32>(u_input.a.x, u_input.a.x, 10961i, u_input.a.x) >> (vec4<u32>(global4.x, global4.x, 8128u, 0u) % vec4<u32>(32u)), vec4<i32>(13690i, -1i, u_input.a.x, 27274i) | _wgslsmith_add_vec4_i32(vec4<i32>(-1i, u_input.a.x, global2.x, -40671i), vec4<i32>(38689i, 2905i, -1i, global2.x))), firstTrailingBit(vec4<i32>(_wgslsmith_mod_i32(0i, 3436i), 35080i, -u_input.a.x, firstLeadingBit(8230i)))));
                var var_4 = all(vec4<bool>(true, var_1.b.x > _wgslsmith_f_op_f32(arg_0.x + 287f), var_1.a.x, arg_3.c)) & !any(select(vec4<bool>(true, true, arg_1.x, true), !vec4<bool>(arg_1.x, arg_3.a.x, arg_1.x, arg_2.a.x), false));
                var var_5 = global2.x;
                let var_6 = Struct_1(vec2<bool>(true, arg_2.c), _wgslsmith_f_op_vec2_f32(max(_wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-var_1.b)))), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(exp2(_wgslsmith_f_op_vec2_f32(vec2<f32>(arg_0.x, 1194f) + arg_0)))))), !select(false, true, arg_2.a.x));
            }
            var var_2 = arg_3;
        }
    }
    global4 = _wgslsmith_add_vec3_u32(firstTrailingBit(vec3<u32>(41081u >> ((global4.x | global4.x) % 32u), firstTrailingBit(4294967295u), _wgslsmith_mod_u32(global4.x, global4.x))), vec3<u32>(firstTrailingBit(firstTrailingBit(0u)), _wgslsmith_sub_u32(_wgslsmith_mod_u32(~0u, _wgslsmith_div_u32(global4.x, global4.x)), _wgslsmith_dot_vec4_u32(vec4<u32>(1u, 1u, 0u, global4.x), vec4<u32>(global4.x, global4.x, 13363u, 4294967295u))), ~(0u | global4.x) >> (_wgslsmith_dot_vec3_u32(min(vec3<u32>(global4.x, global4.x, global4.x), vec3<u32>(0u, global4.x, 1u)), reverseBits(vec3<u32>(global4.x, global4.x, 63782u))) % 32u)));
    return vec4<bool>(true, arg_2.c, all(arg_1), true);
}

fn func_1(arg_0: Struct_1, arg_1: i32) -> u32 {
    var var_0 = select(1u, 46338u, any(!select(func_2(arg_0.b, vec4<bool>(false, arg_0.c, true, arg_0.a.x), arg_0, arg_0), vec4<bool>(false, false, arg_0.a.x, arg_0.a.x), !vec4<bool>(arg_0.c, arg_0.c, true, false))));
    var var_1 = _wgslsmith_sub_i32(reverseBits(1i) ^ _wgslsmith_dot_vec4_i32(u_input.a, -(~u_input.a)), ~u_input.a.x);
    for (var var_2 = 0i; var_2 != -25641i; ) {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
    }
    let var_2 = 25040u;
    for (var var_3 = 0i ^ global2.x; var_3 < 8513i; var_3 += 1i) {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
    }
    return ~(~1u);
}

@compute
@workgroup_size(1)
fn main() {
    global4 = _wgslsmith_sub_vec3_u32(select(vec3<u32>(global4.x, ~1u << (func_1(Struct_1(vec2<bool>(false, false), vec2<f32>(1000f, 183f), false), u_input.a.x) % 32u), 33260u), vec3<u32>(_wgslsmith_add_u32(reverseBits(4294967295u), global4.x), _wgslsmith_dot_vec2_u32(global4.zz, global4.zx), abs(_wgslsmith_dot_vec4_u32(vec4<u32>(1u, global4.x, 4294967295u, 25997u), vec4<u32>(global4.x, global4.x, 0u, 1u)))), func_3().a.xzw), ~(~(~vec3<u32>(0u, global4.x, 0u))));
    global0 = array<vec2<i32>, 29>();
    global1 = array<Struct_2, 15>();
    global1 = array<Struct_2, 15>();
    let var_0 = Struct_1(select(select(vec2<bool>(true, true), vec2<bool>(true, true), true), vec2<bool>(true, true), true), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(1635f, -1978f) - _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(select(vec2<f32>(132f, 1228f), vec2<f32>(-1000f, -866f), vec2<bool>(true, true)))))), func_2(_wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(floor(vec2<f32>(-515f, 1553f)))), vec2<f32>(func_5(vec4<bool>(true, false, true, false), i32(-2147483648)).b, _wgslsmith_f_op_f32(f32(-1f) * -1196f)), vec2<bool>(true, true))), func_3().a, Struct_1(vec2<bool>(true, true), _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(783f, 433f) - vec2<f32>(-476f, 566f)), _wgslsmith_f_op_vec2_f32(vec2<f32>(-1000f, -1000f) + vec2<f32>(478f, 131f))), true), Struct_1(select(func_3().a.zz, vec2<bool>(true, true), vec2<bool>(true, true)), vec2<f32>(_wgslsmith_f_op_f32(trunc(-220f)), _wgslsmith_f_op_f32(ceil(137f))), -35558i >= global2.x)).x);
    for (var var_1 = -1i; var_1 >= 2147483647i; ) {
        if (LOOP_COUNTERS[20u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
        if (var_0.a.x) {
            global0 = array<vec2<i32>, 29>();
            break;
        }
        break;
    }
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_f_op_f32(trunc(413f)), func_5(!select(vec4<bool>(false, true, var_0.a.x, var_0.c), vec4<bool>(var_0.a.x, false, var_0.c, var_0.c), !var_0.c), global2.x).b);
}

`;