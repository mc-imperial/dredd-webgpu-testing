export const input = [223,165,54,246,54,179,56,237,32,77,40,58,185,252,250,198,98,184,141,98,215,148,128,42,80,61,204,70,63,150,91,169,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [223,165,54,246,54,179,56,237,32,77,40,58,185,252,250,198,98,184,141,98,215,148,128,42,80,61,204,70,63,150,91,169,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[223,165,54,246,54,179,56,237,32,77,40,58,185,252,250,198,98,184,141,98,215,148,128,42,80,61,204,70,63,150,91,169]}
// Seed: 4423736538848746285

struct Struct_1 {
    a: vec3<i32>,
    b: vec4<bool>,
}

struct UniformBuffer {
    a: vec3<i32>,
    b: vec4<i32>,
}

struct StorageBuffer {
    a: i32,
    b: i32,
    c: u32,
    d: vec2<u32>,
    e: vec3<f32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<vec4<f32>, 32> = array<vec4<f32>, 32>(vec4<f32>(1282f, -1141f, -1804f, 307f), vec4<f32>(501f, -707f, -987f, 149f), vec4<f32>(1099f, 1413f, 173f, 112f), vec4<f32>(829f, -369f, -1000f, -1271f), vec4<f32>(1000f, -423f, 1000f, 1554f), vec4<f32>(-1000f, -548f, 673f, -430f), vec4<f32>(1730f, 398f, -727f, -2660f), vec4<f32>(207f, -1083f, -638f, -646f), vec4<f32>(565f, 1678f, 1451f, 1366f), vec4<f32>(-692f, 239f, 913f, -1793f), vec4<f32>(-433f, -1698f, -289f, -1175f), vec4<f32>(-1508f, -1633f, 2197f, -301f), vec4<f32>(723f, 306f, -2142f, -564f), vec4<f32>(-938f, 366f, 1319f, 209f), vec4<f32>(622f, 820f, 1233f, 1000f), vec4<f32>(539f, -1307f, -1687f, -842f), vec4<f32>(720f, -148f, 1000f, -310f), vec4<f32>(-909f, 392f, 570f, 1246f), vec4<f32>(-245f, 1403f, -1000f, 202f), vec4<f32>(101f, 142f, -1000f, -164f), vec4<f32>(-824f, -1205f, 1613f, 1118f), vec4<f32>(-1299f, 573f, 962f, 755f), vec4<f32>(-1000f, 1047f, -1058f, 737f), vec4<f32>(2092f, 287f, -839f, -335f), vec4<f32>(538f, 709f, 825f, -771f), vec4<f32>(-1013f, -158f, 479f, 440f), vec4<f32>(1133f, -718f, 792f, -811f), vec4<f32>(508f, 643f, -166f, -892f), vec4<f32>(1398f, 1642f, -117f, 208f), vec4<f32>(-649f, 204f, -1000f, 1000f), vec4<f32>(-1566f, -174f, 316f, 109f), vec4<f32>(-148f, -636f, -3119f, 1745f));

var<private> global1: array<vec4<i32>, 16> = array<vec4<i32>, 16>(vec4<i32>(5668i, -20892i, i32(-2147483648), -1i), vec4<i32>(1i, 1i, 0i, -904i), vec4<i32>(-1i, 0i, -39294i, i32(-2147483648)), vec4<i32>(0i, 3739i, i32(-2147483648), -8871i), vec4<i32>(0i, 98769i, 70167i, 9821i), vec4<i32>(-14786i, 34370i, -39623i, 49075i), vec4<i32>(2147483647i, i32(-2147483648), 0i, -17360i), vec4<i32>(10963i, 29845i, 2147483647i, 4738i), vec4<i32>(1110i, -1i, 2147483647i, 17776i), vec4<i32>(18566i, 6968i, 28054i, -15927i), vec4<i32>(0i, i32(-2147483648), -15181i, -1i), vec4<i32>(-1949i, 0i, 2147483647i, i32(-2147483648)), vec4<i32>(-22912i, 2147483647i, -50603i, -1i), vec4<i32>(-52705i, -8686i, 1i, -15480i), vec4<i32>(-24533i, i32(-2147483648), 49554i, 5619i), vec4<i32>(i32(-2147483648), 8197i, i32(-2147483648), -63332i));

var<private> global2: array<Struct_1, 3> = array<Struct_1, 3>(Struct_1(vec3<i32>(i32(-2147483648), -25827i, i32(-2147483648)), vec4<bool>(true, false, false, false)), Struct_1(vec3<i32>(15610i, 762i, 35385i), vec4<bool>(false, true, true, true)), Struct_1(vec3<i32>(32924i, 1i, 2147483647i), vec4<bool>(true, false, true, false)));

var<private> LOOP_COUNTERS: array<u32, 28>;

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn func_6(arg_0: Struct_1, arg_1: bool, arg_2: Struct_1) -> vec3<f32> {
    for (var var_0 = abs(~_wgslsmith_mod_i32(_wgslsmith_dot_vec3_i32(arg_0.a, u_input.a), _wgslsmith_mult_i32(firstLeadingBit(u_input.b.x), countOneBits(arg_0.a.x)))); ; var_0 -= 1i) {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        var_0 = _wgslsmith_mult_i32(firstTrailingBit(firstLeadingBit(-1i)), ~select(0i ^ min(arg_0.a.x, 2147483647i), _wgslsmith_add_i32(-1i, 1i), true));
        var var_1 = arg_0;
        continue;
    }
    loop {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        for (; false; ) {
            if (LOOP_COUNTERS[2u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            let var_0 = Struct_1(firstTrailingBit(_wgslsmith_clamp_vec3_i32(-arg_0.a, vec3<i32>(-arg_0.a.x, max(arg_2.a.x, u_input.b.x), -23i), u_input.a)), !select(arg_0.b, vec4<bool>(false, arg_2.b.x, true, false), !select(vec4<bool>(arg_2.b.x, true, arg_0.b.x, arg_0.b.x), vec4<bool>(arg_2.b.x, arg_0.b.x, false, true), arg_0.b)));
            global2 = array<Struct_1, 3>();
            let var_1 = Struct_1(vec3<i32>(arg_2.a.x, i32(-2147483648), reverseBits(78520i)), vec4<bool>(true, !(var_0.b.x && all(arg_0.b)), firstTrailingBit(_wgslsmith_sub_u32(12073u, 0u)) > ~39545u, !arg_0.b.x));
            var var_2 = firstLeadingBit(abs(vec3<u32>(14956u, 1u, _wgslsmith_clamp_u32(109150u, 1u, 4294967295u)) | firstLeadingBit(_wgslsmith_mult_vec3_u32(vec3<u32>(41010u, 4294967295u, 44251u), vec3<u32>(0u, 0u, 72487u)))));
        }
    }
    switch (~(-abs(~(-arg_2.a.x)))) {
        case i32(-2147483648): {
            var var_0 = -986f;
            for (var var_1 = -24496i; _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(860f - _wgslsmith_f_op_f32(f32(-1f) * -1044f)), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-584f), _wgslsmith_f_op_f32(462f - 453f), any(vec4<bool>(arg_2.b.x, true, arg_1, true)))), !arg_0.b.x))) >= _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(max(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-1501f), _wgslsmith_f_op_f32(select(-657f, -1380f, arg_1))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(1759f)) + -1632f))))); ) {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
                global2 = array<Struct_1, 3>();
                continue;
            }
            switch (arg_2.a.x) {
                case 17119i: {
                    global2 = array<Struct_1, 3>();
                }
                case 19711i: {
                    var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(172f))), _wgslsmith_f_op_f32(floor(_wgslsmith_div_f32(-1000f, -246f)))))));
                    let var_1 = arg_2;
                    global2 = array<Struct_1, 3>();
                }
                case -84316i: {
                    global1 = array<vec4<i32>, 16>();
                }
                case 28961i: {
                    var var_1 = global2[_wgslsmith_index_u32(7312u, 3u)];
                    global0 = array<vec4<f32>, 32>();
                    global1 = array<vec4<i32>, 16>();
                    let var_2 = _wgslsmith_mod_i32(firstTrailingBit(0i), -(~(~(arg_0.a.x >> (4294967295u % 32u)))));
                }
                default: {
                    global0 = array<vec4<f32>, 32>();
                    let var_1 = _wgslsmith_f_op_vec3_f32(sign(vec3<f32>(-2516f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_div_f32(941f, -222f) + _wgslsmith_f_op_f32(f32(-1f) * -527f)) * _wgslsmith_f_op_f32(select(231f, 268f, arg_1 != arg_0.b.x))), _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(f32(-1f) * -651f))))));
                }
            }
        }
        default: {
            loop {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                global1 = array<vec4<i32>, 16>();
                let var_0 = ~_wgslsmith_dot_vec3_u32(vec3<u32>(1u, 1u, 1u), reverseBits(abs(~vec3<u32>(10874u, 49844u, 7587u))));
            }
            switch (u_input.b.x) {
                default: {
                    global2 = array<Struct_1, 3>();
                    var var_0 = vec3<u32>(_wgslsmith_add_u32(_wgslsmith_div_u32(max(~0u, 84591u), 1u), _wgslsmith_dot_vec4_u32(~min(vec4<u32>(20689u, 29106u, 1u, 0u), vec4<u32>(26038u, 0u, 1u, 34324u)), vec4<u32>(_wgslsmith_mult_u32(29154u, 29734u), ~35573u, _wgslsmith_add_u32(1u, 0u), reverseBits(3039u)))), ~(~(~1u)), 0u);
                    var var_1 = Struct_1(arg_2.a, vec4<bool>(true, i32(-2147483648) > ~_wgslsmith_mult_i32(0i, u_input.b.x), any(select(select(vec2<bool>(arg_2.b.x, true), arg_0.b.xy, false), arg_2.b.wx, 31793i <= u_input.a.x)), arg_0.b.x));
                }
            }
            let var_0 = Struct_1(arg_0.a, select(!vec4<bool>(true, true, any(vec3<bool>(arg_2.b.x, false, false)), any(vec4<bool>(arg_1, arg_2.b.x, true, arg_1))), !vec4<bool>(false, arg_1, !arg_0.b.x, false), arg_2.b.x));
        }
    }
    let var_0 = Struct_1(u_input.a, !select(select(!arg_0.b, !arg_0.b, false), vec4<bool>(true, all(vec2<bool>(true, true)), arg_1, true), !select(arg_2.b, arg_0.b, vec4<bool>(false, false, true, arg_2.b.x))));
    let var_1 = Struct_1(firstTrailingBit(arg_2.a), select(!vec4<bool>(!arg_2.b.x, all(var_0.b), !arg_2.b.x, true), !select(arg_2.b, vec4<bool>(true, false, arg_0.b.x, var_0.b.x), !vec4<bool>(true, arg_1, var_0.b.x, false)), arg_2.b.x));
    return _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(vec3<f32>(306f, 706f, -1538f) + vec3<f32>(-1000f, 457f, 1262f))))))));
}

fn func_7(arg_0: vec3<f32>) -> vec2<u32> {
    if (true) {
    }
    var var_0 = Struct_1(_wgslsmith_mult_vec3_i32(u_input.b.wxw, select(_wgslsmith_clamp_vec3_i32(abs(u_input.a), ~u_input.a, -u_input.b.xzy), countOneBits(u_input.a), !select(vec3<bool>(true, false, true), vec3<bool>(true, true, false), true))), !(!select(select(vec4<bool>(true, true, true, true), vec4<bool>(false, true, false, true), vec4<bool>(false, true, true, false)), vec4<bool>(true, true, true, true), true)));
    for (var var_1 = i32(-2147483648); var_1 != 19111i; var_0 = Struct_1(vec3<i32>(23768i, -19127i, ~u_input.a.x), var_0.b)) {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        if (!(-804f == _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-699f))) - arg_0.x))) {
        }
        global2 = array<Struct_1, 3>();
        var var_2 = vec3<bool>(true, any(var_0.b.zxx), var_0.a.x < _wgslsmith_mult_i32(-u_input.b.x, -var_0.a.x | firstLeadingBit(u_input.b.x)));
    }
    loop {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        switch (var_0.a.x) {
            case 24715i: {
                return select(vec2<u32>(~4294967295u, _wgslsmith_mod_u32(~(~54485u), ~(~1u))), ~reverseBits(~vec2<u32>(1u, 1u)), var_0.b.x);
            }
            case -1i: {
                break;
            }
            case -13758i: {
                continue;
            }
            case -5171i: {
                var var_1 = _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(arg_0.xz + _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(abs(_wgslsmith_f_op_vec2_f32(sign(arg_0.zz)))) + _wgslsmith_f_op_vec2_f32(abs(arg_0.yx)))) + vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(arg_0.x)) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(arg_0.x, arg_0.x, false)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -184f) + _wgslsmith_f_op_f32(min(arg_0.x, arg_0.x))) - arg_0.x)));
                var var_2 = u_input.a.x;
                global2 = array<Struct_1, 3>();
                var var_3 = abs(~_wgslsmith_mult_vec3_u32(vec3<u32>(1u, 1u, 1u), vec3<u32>(1u, 1u, 1u)));
            }
            default: {
            }
        }
        continue;
    }
    global0 = array<vec4<f32>, 32>();
    return vec2<u32>(1u, ~1u);
}

fn func_5() -> i32 {
    var var_0 = -62844i;
    for (var var_1 = firstLeadingBit(~u_input.a.x); true; global1 = array<vec4<i32>, 16>()) {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        var var_2 = u_input.a.yz >> (~func_7(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(func_6(global2[_wgslsmith_index_u32(361u, 3u)], false, Struct_1(vec3<i32>(u_input.b.x, u_input.a.x, 6991i), vec4<bool>(true, true, false, true)))))) % vec2<u32>(32u));
        var var_3 = global2[_wgslsmith_index_u32(~5890u >> (~_wgslsmith_dot_vec2_u32(vec2<u32>(1u, 1u), abs(~vec2<u32>(6566u, 4294967295u))) % 32u), 3u)];
        global2 = array<Struct_1, 3>();
        continue;
    }
    switch (-_wgslsmith_sub_i32(-197i, _wgslsmith_dot_vec3_i32(~u_input.a, vec3<i32>(2147483647i, select(u_input.b.x, 1i, false), u_input.a.x)))) {
        case i32(-2147483648): {
            var var_1 = global2[_wgslsmith_index_u32(abs(4294967295u), 3u)];
            var var_2 = Struct_1(vec3<i32>(-1i) * -_wgslsmith_mult_vec3_i32(~vec3<i32>(27857i, i32(-2147483648), -25064i), u_input.a << (vec3<u32>(35201u, 4294967295u, 0u) % vec3<u32>(32u))), !var_1.b);
            var var_3 = !var_1.b.xyy;
            if (true) {
                var_1 = global2[_wgslsmith_index_u32(abs(~(~select(25524u, 1u, var_3.x))), 3u)];
            }
            var_0 = _wgslsmith_dot_vec4_i32(-(firstLeadingBit(global1[_wgslsmith_index_u32(abs(1u), 16u)]) ^ vec4<i32>(0i, min(var_1.a.x, 1i), u_input.a.x, 37781i)), vec4<i32>(-1i) * -(~u_input.b << (~vec4<u32>(1u, 67472u, 3526u, 66427u) % vec4<u32>(32u))));
        }
        case 0i: {
            if (1i < _wgslsmith_div_i32(u_input.a.x, ~(-21571i))) {
                global0 = array<vec4<f32>, 32>();
                var var_1 = global2[_wgslsmith_index_u32(~countOneBits(~_wgslsmith_mod_u32(1u, 7297u >> (1u % 32u))), 3u)];
                var var_2 = vec3<u32>(_wgslsmith_mult_u32(1u, 1u), 24623u, ~(~(func_7(vec3<f32>(-552f, -1087f, 1740f)).x << (firstLeadingBit(4294967295u) % 32u))));
                var_2 = vec3<u32>(var_2.x, ~10536u, _wgslsmith_clamp_u32(countOneBits(1u), ~_wgslsmith_div_u32(~45069u, 41819u), 26856u << (_wgslsmith_dot_vec2_u32(~var_2.yy, _wgslsmith_mod_vec2_u32(vec2<u32>(var_2.x, 64205u), var_2.yx)) % 32u)));
                var_2 = vec3<u32>(var_2.x, 4294967295u, _wgslsmith_mod_u32(62153u, var_2.x));
            }
            var_0 = u_input.b.x;
            global2 = array<Struct_1, 3>();
        }
        case -1i: {
            for (var var_1 = i32(-2147483648); ; ) {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                global1 = array<vec4<i32>, 16>();
            }
        }
        case -84003i: {
            switch (countOneBits(u_input.b.x << (_wgslsmith_mult_u32(1u, _wgslsmith_sub_u32(~13689u, select(51762u, 40953u, false))) % 32u))) {
                case 2147483647i: {
                    global0 = array<vec4<f32>, 32>();
                    var_0 = 1i;
                    let var_1 = _wgslsmith_add_i32(abs(u_input.a.x), -18535i);
                    var var_2 = Struct_1(countOneBits(~vec3<i32>(2147483647i, 3296i, u_input.b.x) ^ u_input.b.zzx), vec4<bool>(all(vec4<bool>(true, true, true, true)), false, !any(vec3<bool>(false, true, false)) || false, true));
                }
                case 3945i: {
                    let var_1 = Struct_1(vec3<i32>(~(u_input.b.x | -1i), firstLeadingBit(u_input.a.x), u_input.a.x), vec4<bool>(all(vec4<bool>(true, true, true, true)), true & (_wgslsmith_div_f32(-331f, -395f) >= _wgslsmith_f_op_f32(step(-428f, 2085f))), false, true));
                    var var_2 = var_1.b.x;
                }
                default: {
                    global0 = array<vec4<f32>, 32>();
                    var var_1 = Struct_1(~u_input.a, select(vec4<bool>(select(true, true, true), true, false | any(vec4<bool>(false, false, false, true)), firstTrailingBit(0u) != 0u), vec4<bool>(true, true, true, true), select(vec4<bool>(true, true, all(vec4<bool>(true, false, true, true)), true), vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true))));
                    let var_2 = min(~firstTrailingBit(vec4<i32>(i32(-2147483648), var_1.a.x, 0i, 1i)) | reverseBits(u_input.b), u_input.b & _wgslsmith_mult_vec4_i32(u_input.b, global1[_wgslsmith_index_u32(1u, 16u)]));
                    let var_3 = 4294967295u;
                    var_1 = Struct_1(vec3<i32>(_wgslsmith_dot_vec4_i32(global1[_wgslsmith_index_u32(1u, 16u)], vec4<i32>(var_2.x, var_1.a.x, -37024i, u_input.a.x)) ^ 9719i, min(_wgslsmith_dot_vec3_i32(vec3<i32>(-11504i, 38039i, -1227i), vec3<i32>(var_2.x, -1i, -10987i)), ~var_2.x), var_1.a.x) ^ _wgslsmith_mod_vec3_i32(vec3<i32>(var_2.x | -46412i, u_input.b.x << (var_3 % 32u), var_1.a.x), var_1.a), vec4<bool>(any(select(var_1.b.wy, var_1.b.yx, !var_1.b.yy)), true, !all(var_1.b.yzz), _wgslsmith_f_op_f32(round(1f)) >= _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(625f)) * -629f)));
                }
            }
            var var_1 = global2[_wgslsmith_index_u32(0u, 3u)];
            var_1 = global2[_wgslsmith_index_u32(~(~abs(~0u)), 3u)];
            var var_2 = _wgslsmith_clamp_i32(~1i ^ _wgslsmith_dot_vec2_i32(firstLeadingBit(u_input.b.wz), countOneBits(_wgslsmith_mult_vec2_i32(vec2<i32>(0i, u_input.b.x), vec2<i32>(2147483647i, -16201i)))), ~(-(~0i)), -reverseBits(~u_input.a.x));
        }
        default: {
        }
    }
    switch (u_input.b.x ^ min(_wgslsmith_dot_vec4_i32(u_input.b, firstLeadingBit(global1[_wgslsmith_index_u32(_wgslsmith_sub_u32(66504u, 1u), 16u)])), _wgslsmith_clamp_i32(-select(u_input.b.x, 2147483647i, true), -1353i, ~firstLeadingBit(u_input.a.x)))) {
        case 0i: {
            let var_1 = select(true, false, !(!(all(vec4<bool>(false, true, true, false)) & any(vec4<bool>(false, true, false, true)))));
            var var_2 = (vec4<u32>(4294967295u, 0u, 96529u, ~(~0u)) ^ (vec4<u32>(~4294967295u, 0u, 1u, 1u) & vec4<u32>(0u, func_7(vec3<f32>(645f, -665f, 788f)).x, max(4294967295u, 4294967295u), ~0u))) & ~vec4<u32>(~1u, ~(~72214u), ~(~0u), func_7(_wgslsmith_f_op_vec3_f32(func_6(Struct_1(vec3<i32>(u_input.a.x, u_input.b.x, u_input.b.x), vec4<bool>(var_1, var_1, true, true)), true, global2[_wgslsmith_index_u32(51843u, 3u)]))).x);
            switch (_wgslsmith_sub_i32(2147483647i, countOneBits(i32(-2147483648)) << (abs(func_7(_wgslsmith_f_op_vec3_f32(vec3<f32>(-1683f, -345f, 279f) + vec3<f32>(1174f, 137f, 1000f))).x) % 32u))) {
                case 45033i: {
                    var var_3 = vec2<i32>(-_wgslsmith_div_i32(_wgslsmith_add_i32(u_input.b.x, -8740i) | ~u_input.b.x, ~(~2147483647i)), countOneBits(-_wgslsmith_mod_i32(1i & u_input.b.x, -1i)));
                }
                default: {
                    let var_3 = Struct_1(u_input.b.zxw << (vec3<u32>(~4294967295u, var_2.x, ~(~var_2.x)) % vec3<u32>(32u)), select(vec4<bool>(false, any(select(vec2<bool>(false, false), vec2<bool>(true, false), var_1)), any(vec3<bool>(var_1, var_1, false)), all(vec4<bool>(true, false, false, var_1))), select(vec4<bool>(any(vec3<bool>(var_1, true, var_1)), var_1, false, var_1), !vec4<bool>(false, true, false, var_1), select(vec4<bool>(var_1, true, false, false), select(vec4<bool>(false, true, var_1, var_1), vec4<bool>(true, true, var_1, var_1), true), true)), false));
                    var var_4 = ~vec3<u32>(~_wgslsmith_dot_vec3_u32(_wgslsmith_mod_vec3_u32(var_2.zxz, vec3<u32>(var_2.x, var_2.x, var_2.x)), select(var_2.ywz, var_2.wxz, vec3<bool>(false, false, false))), ~(~(~var_2.x)), ~select(var_2.x, var_2.x, !var_3.b.x));
                }
            }
            switch (-1i) {
                case 23861i: {
                    let var_3 = u_input.b.x;
                    global0 = array<vec4<f32>, 32>();
                }
                default: {
                    var var_3 = global2[_wgslsmith_index_u32(~abs(10672u), 3u)];
                    var var_4 = abs(~(~countOneBits(var_2.x >> (31487u % 32u))));
                    var var_5 = var_3.b.x;
                    var var_6 = vec2<f32>(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-1744f))), _wgslsmith_f_op_f32(1f + _wgslsmith_f_op_vec3_f32(func_6(global2[_wgslsmith_index_u32(_wgslsmith_clamp_u32(var_2.x, ~57749u, ~var_2.x), 3u)], false, global2[_wgslsmith_index_u32(func_7(vec3<f32>(-844f, 443f, -511f)).x, 3u)])).x));
                    global1 = array<vec4<i32>, 16>();
                }
            }
            let var_3 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_vec3_f32(func_6(Struct_1(vec3<i32>(8603i, 1i, u_input.b.x), select(vec4<bool>(false, true, false, var_1), vec4<bool>(var_1, true, var_1, false), true)), var_1, global2[_wgslsmith_index_u32(~var_2.x, 3u)])).x));
        }
        case -52500i: {
            loop {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                let var_1 = global2[_wgslsmith_index_u32(abs(func_7(_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-vec3<f32>(127f, 1112f, -728f)), vec3<f32>(-342f, _wgslsmith_f_op_f32(f32(-1f) * -1760f), -639f), false))).x), 3u)];
            }
            for (var var_1 = 0i; all(vec4<bool>(!all(select(vec4<bool>(false, false, true, false), vec4<bool>(false, true, false, false), false)), true, any(select(vec4<bool>(true, true, true, true), vec4<bool>(true, true, true, true), vec4<bool>(true, true, false, true))), !all(vec4<bool>(true, true, true, true)))); ) {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                let var_2 = !(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(1369f - 1126f)))) >= _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -1494f) - 444f) - 882f));
                break;
            }
            var var_1 = abs(_wgslsmith_div_u32(4294967295u, 1u));
            var_1 = firstLeadingBit(firstTrailingBit(22247u >> (~(~0u) % 32u)));
            var var_2 = global2[_wgslsmith_index_u32(~(firstTrailingBit(_wgslsmith_mult_u32(1u, ~18939u)) & ~max(1u, 1u)), 3u)];
        }
        case -39792i: {
            switch (u_input.b.x) {
                case 38268i: {
                    let var_1 = global2[_wgslsmith_index_u32(~5156u, 3u)];
                }
                case 23565i: {
                    var var_1 = ~_wgslsmith_div_vec3_u32(countOneBits(vec3<u32>(1u, 1u, 1u)), ~_wgslsmith_clamp_vec3_u32(vec3<u32>(0u, 27324u, 158878u), vec3<u32>(1u, 1u, 1u), vec3<u32>(10406u, 97589u, 3174u)));
                }
                case -5324i: {
                    global2 = array<Struct_1, 3>();
                    global0 = array<vec4<f32>, 32>();
                    var var_1 = global2[_wgslsmith_index_u32(~firstLeadingBit(~abs(_wgslsmith_mod_u32(52659u, 39u))), 3u)];
                    global1 = array<vec4<i32>, 16>();
                    let var_2 = abs(17878u & _wgslsmith_sub_u32(~select(17353u, 44590u, var_1.b.x), ~reverseBits(0u)));
                }
                case 9421i: {
                    let var_1 = Struct_1(-u_input.b.wyw, select(vec4<bool>(true, true, false, select(any(vec2<bool>(false, true)), any(vec2<bool>(false, false)), any(vec4<bool>(true, true, true, false)))), select(select(vec4<bool>(true, true, true, true), vec4<bool>(true, false, true, false), select(vec4<bool>(false, false, true, true), vec4<bool>(true, false, false, false), false)), vec4<bool>(true, any(vec3<bool>(true, true, false)), true, false), u_input.b.x <= 1i), all(!select(vec3<bool>(true, false, false), vec3<bool>(false, true, false), vec3<bool>(false, true, true)))));
                    global1 = array<vec4<i32>, 16>();
                    let var_2 = var_1.b.x & !var_1.b.x;
                    let var_3 = all(vec4<bool>(true, true, false, var_1.b.x));
                    var var_4 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(exp2(vec2<f32>(554f, _wgslsmith_f_op_vec3_f32(func_6(global2[_wgslsmith_index_u32(1u, 3u)], all(vec2<bool>(var_1.b.x, var_2)), var_1)).x))));
                }
                default: {
                    var var_1 = _wgslsmith_add_i32(~(-(_wgslsmith_div_i32(u_input.a.x, u_input.a.x) & u_input.a.x)), _wgslsmith_mult_i32(~u_input.a.x, 2147483647i));
                    let var_2 = 1f;
                    var var_3 = countOneBits(min(vec3<i32>(u_input.a.x, 54866i, 2147483647i) ^ u_input.b.zwx, u_input.a)) | _wgslsmith_mod_vec3_i32(_wgslsmith_mod_vec3_i32(abs(countOneBits(u_input.b.zww)), u_input.b.zyz), vec3<i32>(countOneBits(firstLeadingBit(-1i)), 0i, ~countOneBits(u_input.a.x)));
                    global1 = array<vec4<i32>, 16>();
                    var var_4 = all(select(vec4<bool>(false, all(select(vec2<bool>(true, true), vec2<bool>(false, true), true)), !any(vec2<bool>(false, false)), any(vec3<bool>(true, true, false))), !vec4<bool>(true, all(vec2<bool>(true, true)), true, true), !(!select(vec4<bool>(true, true, false, true), vec4<bool>(true, false, false, false), true))));
                }
            }
            var var_1 = global2[_wgslsmith_index_u32(_wgslsmith_clamp_u32(firstLeadingBit(_wgslsmith_dot_vec2_u32(vec2<u32>(63051u, 81895u), _wgslsmith_sub_vec2_u32(vec2<u32>(1u, 16944u), vec2<u32>(1u, 1u)))), ~_wgslsmith_dot_vec2_u32(vec2<u32>(0u, 0u), countOneBits(vec2<u32>(1u, 65465u))), 1u) | 34541u, 3u)];
        }
        case -53747i: {
            global2 = array<Struct_1, 3>();
            let var_1 = vec2<bool>(true, true);
        }
        default: {
        }
    }
    let var_1 = global2[_wgslsmith_index_u32(0u, 3u)];
    return _wgslsmith_mod_i32(abs(_wgslsmith_dot_vec4_i32(-vec4<i32>(61017i, u_input.a.x, -1i, var_1.a.x), reverseBits(vec4<i32>(2147483647i, -19521i, u_input.b.x, u_input.b.x))) | ~(-18379i)), _wgslsmith_sub_i32(1i, min(u_input.b.x, _wgslsmith_mult_i32(firstLeadingBit(0i), -11i))));
}

fn func_4() -> Struct_1 {
    global0 = array<vec4<f32>, 32>();
    var var_0 = global2[_wgslsmith_index_u32(1u, 3u)];
    var var_1 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(1867f))) - -308f);
    switch (var_0.a.x >> (0u % 32u)) {
        case -22033i: {
            for (; true; ) {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                global2 = array<Struct_1, 3>();
                let var_2 = Struct_1(var_0.a, !vec4<bool>(var_0.b.x, var_0.b.x, false, var_0.b.x));
                let var_3 = func_5();
            }
        }
        case 2147483647i: {
            let var_2 = vec4<bool>(false || all(vec4<bool>(true, true, true, true)), var_0.b.x, var_0.b.x, any(select(vec4<bool>(!var_0.b.x, true, false, var_0.b.x), vec4<bool>(true, all(var_0.b.xyw), any(vec2<bool>(true, var_0.b.x)), var_0.b.x && false), vec4<bool>(var_0.b.x, false, false, true))));
            var_0 = Struct_1(u_input.a, !(!var_0.b));
            var_1 = _wgslsmith_div_f32(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-834f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -435f) - _wgslsmith_f_op_vec3_f32(func_6(Struct_1(u_input.a, var_0.b), var_0.b.x, global2[_wgslsmith_index_u32(0u, 3u)])).x))))), 1113f);
            if (false) {
                let var_3 = _wgslsmith_mod_vec3_i32(-(~countOneBits(u_input.a) | countOneBits(_wgslsmith_mult_vec3_i32(var_0.a, vec3<i32>(u_input.b.x, -41376i, var_0.a.x)))), countOneBits(vec3<i32>(i32(-1i) * -1i, -_wgslsmith_sub_i32(u_input.b.x, var_0.a.x), _wgslsmith_mod_i32(u_input.a.x, reverseBits(var_0.a.x)))));
                global1 = array<vec4<i32>, 16>();
                var var_4 = Struct_1(-_wgslsmith_mod_vec3_i32(vec3<i32>(1i, 1i, 1i), vec3<i32>(-1i) * -u_input.b.yxw), vec4<bool>(any(!vec4<bool>(true, var_2.x, var_2.x, var_0.b.x)), true, var_2.x, !(!(true && var_0.b.x))));
                var var_5 = vec4<i32>(_wgslsmith_sub_i32(var_3.x, -var_4.a.x), u_input.b.x, 1i, abs(firstTrailingBit(max(var_0.a.x & var_4.a.x, -1i))));
            }
        }
        case -23673i: {
            var var_2 = (_wgslsmith_clamp_i32(-41026i, i32(-2147483648), u_input.a.x) ^ select(func_5(), i32(-2147483648), var_0.b.x)) | select(u_input.a.x, var_0.a.x, var_0.b.x);
            loop {
                if (LOOP_COUNTERS[12u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
                break;
            }
            loop {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                var_0 = Struct_1(~vec3<i32>(_wgslsmith_div_i32(_wgslsmith_clamp_i32(2147483647i, u_input.a.x, 2147483647i), 1i), -3516i ^ var_0.a.x, i32(-1i) * -var_0.a.x), !vec4<bool>(true, true, true, (-8598i > var_0.a.x) & all(vec3<bool>(true, true, true))));
                return Struct_1(~u_input.b.zyw << (vec3<u32>(1u, 1u, 1u) % vec3<u32>(32u)), !vec4<bool>(!var_0.b.x, true, var_0.b.x, true));
            }
        }
        case 9258i: {
        }
        default: {
            switch (3491i) {
                case 0i: {
                    let var_2 = _wgslsmith_mult_u32(firstLeadingBit(_wgslsmith_div_u32(1u, min(~14678u, 12992u))), ~(42439u ^ _wgslsmith_sub_u32(_wgslsmith_clamp_u32(31565u, 63858u, 4294967295u), _wgslsmith_mult_u32(1u, 64323u))));
                    let var_3 = vec4<bool>(true, true, var_0.b.x, _wgslsmith_add_u32(57588u, var_2) <= 4294967295u);
                    var var_4 = _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-883f)))))), 1817f));
                    var_4 = _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -652f), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(-662f)) * 970f)))));
                }
                case i32(-2147483648): {
                }
                case -1i: {
                    var var_2 = global2[_wgslsmith_index_u32(1u, 3u)];
                    var_1 = _wgslsmith_f_op_f32(_wgslsmith_div_f32(-1000f, _wgslsmith_div_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(1251f * 703f), -884f), _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(2232f - -1000f))))) + _wgslsmith_div_f32(685f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(371f * -1700f)) - _wgslsmith_f_op_f32(select(414f, _wgslsmith_f_op_f32(f32(-1f) * -206f), any(var_0.b.xxy))))));
                    var_0 = Struct_1(vec3<i32>(-1i) * -var_2.a, var_2.b);
                    var var_3 = _wgslsmith_mult_vec4_i32(-firstTrailingBit(vec4<i32>(var_2.a.x, u_input.b.x >> (34298u % 32u), -65010i, var_2.a.x)), reverseBits(max(vec4<i32>(~var_2.a.x, var_2.a.x, u_input.a.x, var_0.a.x), global1[_wgslsmith_index_u32(1u, 16u)])));
                    global1 = array<vec4<i32>, 16>();
                }
                case 7464i: {
                    global0 = array<vec4<f32>, 32>();
                }
                default: {
                    var_0 = global2[_wgslsmith_index_u32(func_7(_wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-744f), 1857f)), _wgslsmith_f_op_f32(-2050f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1259f - -954f))))).x, 3u)];
                }
            }
            global0 = array<vec4<f32>, 32>();
            for (var var_2 = i32(-2147483648); false; ) {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
            }
            global0 = array<vec4<f32>, 32>();
        }
    }
    if (var_0.b.x) {
        global1 = array<vec4<i32>, 16>();
        var var_2 = Struct_1(~vec3<i32>(max(u_input.b.x, var_0.a.x), 10420i, select(_wgslsmith_sub_i32(u_input.a.x, u_input.b.x), ~u_input.b.x, true)), !vec4<bool>(all(vec2<bool>(var_0.b.x, true)), true, true, 21254u == _wgslsmith_dot_vec3_u32(vec3<u32>(13575u, 14829u, 66989u), vec3<u32>(0u, 4294967295u, 0u))));
    }
    return Struct_1(-_wgslsmith_div_vec3_i32(_wgslsmith_div_vec3_i32(var_0.a, vec3<i32>(0i, -1i, u_input.b.x)) ^ (u_input.b.xwx << (vec3<u32>(21476u, 4294967295u, 44568u) % vec3<u32>(32u))), ~(~vec3<i32>(247i, var_0.a.x, var_0.a.x))), vec4<bool>(var_0.b.x, true, !(!var_0.b.x) != true, false));
}

fn func_8(arg_0: Struct_1) -> u32 {
    let var_0 = func_4();
    if (true) {
        var var_1 = -_wgslsmith_mult_vec3_i32(-vec3<i32>(-7000i, 38279i, 2147483647i), abs(vec3<i32>(-6971i, _wgslsmith_mult_i32(u_input.a.x, arg_0.a.x), _wgslsmith_clamp_i32(var_0.a.x, -51339i, u_input.b.x))));
        var var_2 = var_0.a.yx;
        global2 = array<Struct_1, 3>();
        var_2 = ~vec2<i32>(-func_4().a.x, var_0.a.x);
    }
    return ~min(firstTrailingBit(4294967295u) << (~_wgslsmith_clamp_u32(4294967295u, 4294967295u, 117126u) % 32u), 9046u);
}

fn func_9(arg_0: Struct_1, arg_1: i32) -> Struct_1 {
    global0 = array<vec4<f32>, 32>();
    if (all(vec4<bool>(!(!arg_0.b.x), arg_0.b.x & arg_0.b.x, true, all(vec4<bool>(true, !arg_0.b.x, !arg_0.b.x, false))))) {
        let var_0 = 23372i;
        let var_1 = global2[_wgslsmith_index_u32(firstTrailingBit(max(~_wgslsmith_dot_vec2_u32(vec2<u32>(26412u, 48604u), vec2<u32>(1u, 21368u)) ^ ~firstTrailingBit(1u), 24332u)), 3u)];
        global2 = array<Struct_1, 3>();
        switch (~var_1.a.x) {
            default: {
            }
        }
        if (var_1.b.x) {
            let var_2 = _wgslsmith_div_vec4_f32(global0[_wgslsmith_index_u32(~max(~func_8(arg_0), ~(~4294967295u)), 32u)], global0[_wgslsmith_index_u32(40203u, 32u)]);
        }
    }
    let var_0 = !vec3<bool>(arg_0.b.x, !all(select(vec4<bool>(false, false, true, false), vec4<bool>(true, false, false, true), arg_0.b)), all(!select(arg_0.b.yxy, arg_0.b.yzz, arg_0.b.x)));
    var var_1 = Struct_1(vec3<i32>(arg_1, -1i, i32(-1i) * -1i), select(vec4<bool>(false, arg_0.b.x, true, true), select(!vec4<bool>(arg_0.b.x, arg_0.b.x, arg_0.b.x, var_0.x), arg_0.b, select(vec4<bool>(true, true, true, true), !arg_0.b, any(vec3<bool>(arg_0.b.x, arg_0.b.x, true)))), -55932i == ~(~arg_0.a.x)));
    var var_2 = ~(~_wgslsmith_mod_u32(~4294967295u, 4294967295u));
    return global2[_wgslsmith_index_u32(~firstLeadingBit(~_wgslsmith_dot_vec3_u32(vec3<u32>(60336u, 4294967295u, 41274u), select(vec3<u32>(20239u, 1u, 1u), vec3<u32>(24926u, 28893u, 1u), var_1.b.zyw))), 3u)];
}

fn func_3(arg_0: Struct_1, arg_1: Struct_1, arg_2: vec2<i32>) -> i32 {
    global1 = array<vec4<i32>, 16>();
    loop {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
        global2 = array<Struct_1, 3>();
        var var_0 = -1000f;
        loop {
            if (LOOP_COUNTERS[16u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
            var var_1 = Struct_1(reverseBits(vec3<i32>(~(i32(-2147483648) | u_input.b.x), arg_1.a.x | ~arg_0.a.x, -arg_0.a.x)), arg_0.b);
            global2 = array<Struct_1, 3>();
            var var_2 = firstTrailingBit(abs(0u));
        }
    }
    var var_0 = -1i;
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
            continue;
        }
    }
    switch (u_input.a.x) {
        case 2147483647i: {
            let var_1 = arg_0.a.x;
            var var_2 = -vec2<i32>(-min(~arg_1.a.x, arg_0.a.x & arg_1.a.x), 2147483647i);
            var var_3 = func_9(global2[_wgslsmith_index_u32(func_8(func_4()), 3u)], firstLeadingBit(0i));
            var_2 = -vec2<i32>(-1i, 25569i);
        }
        case 0i: {
            switch (arg_1.a.x) {
                case 1i: {
                    var var_1 = vec2<u32>(_wgslsmith_sub_u32(~1u, abs(16914u)), ~22156u);
                    global2 = array<Struct_1, 3>();
                    var_0 = reverseBits(-_wgslsmith_dot_vec3_i32(arg_1.a, vec3<i32>(arg_0.a.x, 0i, arg_0.a.x)) ^ (arg_2.x >> (4294967295u % 32u)));
                    var var_2 = !func_4().b.x;
                    let var_3 = ~(-arg_1.a.x);
                }
                case 27684i: {
                    global1 = array<vec4<i32>, 16>();
                    var var_1 = true;
                    var var_2 = func_4();
                    let var_3 = ~vec2<i32>(-(u_input.a.x | u_input.b.x) ^ _wgslsmith_dot_vec2_i32(vec2<i32>(u_input.b.x, 0i), vec2<i32>(i32(-2147483648), arg_0.a.x)), arg_0.a.x);
                    let var_4 = vec2<i32>(u_input.a.x, countOneBits(-var_2.a.x));
                }
                case -44792i: {
                    var var_1 = firstLeadingBit(1i) != _wgslsmith_mod_i32(~(u_input.a.x & (arg_1.a.x ^ -44819i)), arg_0.a.x);
                    let var_2 = vec4<u32>(49750u, 84133u, abs(~_wgslsmith_div_u32(66060u, _wgslsmith_dot_vec2_u32(vec2<u32>(0u, 48012u), vec2<u32>(1u, 67968u)))), _wgslsmith_sub_u32(_wgslsmith_mult_u32(~0u, reverseBits(firstTrailingBit(60565u))), 1u));
                    let var_3 = Struct_1(arg_1.a, !vec4<bool>(arg_1.b.x, 1u != max(var_2.x, var_2.x), 1u < var_2.x, any(vec2<bool>(false, false)) || arg_1.b.x));
                    var var_4 = vec3<i32>(25601i, abs(~arg_1.a.x), 25595i);
                }
                case -19579i: {
                    let var_1 = vec3<i32>(u_input.a.x, 2147483647i, abs(-abs(arg_1.a.x)));
                    let var_2 = arg_0;
                    global0 = array<vec4<f32>, 32>();
                    var var_3 = _wgslsmith_add_u32(_wgslsmith_dot_vec3_u32(countOneBits(select(_wgslsmith_mult_vec3_u32(vec3<u32>(15781u, 18445u, 61181u), vec3<u32>(1u, 28894u, 1u)), max(vec3<u32>(0u, 0u, 0u), vec3<u32>(86292u, 4294967295u, 4294967295u)), func_4().b.yww)), _wgslsmith_mult_vec3_u32(select(vec3<u32>(9984u, 129543u, 39698u), vec3<u32>(16329u, 1u, 19412u), false), ~vec3<u32>(1u, 4294967295u, 4294967295u)) | vec3<u32>(~15258u, ~0u, 1u)), (firstTrailingBit(~1u) ^ 32994u) | 1u);
                }
                default: {
                    var_0 = u_input.a.x;
                    var var_1 = vec4<u32>(func_7(vec3<f32>(553f, -685f, 1780f)).x >> (~select(0u, 0u, arg_1.b.x) % 32u), ~1u, 1u, ~1u) << ((vec4<u32>(_wgslsmith_dot_vec2_u32(vec2<u32>(1u, 1u), func_7(vec3<f32>(1963f, 1616f, -1357f))), 1u, 1u, _wgslsmith_dot_vec4_u32(firstTrailingBit(vec4<u32>(6841u, 6996u, 4614u, 21474u)), vec4<u32>(1u, 1u, 74231u, 4317u))) & countOneBits(min(vec4<u32>(1u, 1u, 1u, 1u), min(vec4<u32>(1u, 18367u, 1u, 10167u), vec4<u32>(79991u, 1u, 1u, 31066u))))) % vec4<u32>(32u));
                    let var_2 = func_4();
                }
            }
            global1 = array<vec4<i32>, 16>();
            loop {
                if (LOOP_COUNTERS[19u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
                global2 = array<Struct_1, 3>();
                global1 = array<vec4<i32>, 16>();
                break;
            }
            global1 = array<vec4<i32>, 16>();
            for (var var_1 = 2147483647i; var_1 < 15749i; var_1 += 1i) {
                if (LOOP_COUNTERS[20u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
                let var_2 = !(!vec2<bool>(any(arg_1.b), true));
                global1 = array<vec4<i32>, 16>();
            }
        }
        case 53827i: {
            switch (arg_0.a.x) {
                case 0i: {
                    global1 = array<vec4<i32>, 16>();
                    global0 = array<vec4<f32>, 32>();
                }
                case -11360i: {
                }
                case 7425i: {
                    return -35080i;
                }
                case 35173i: {
                    var var_1 = _wgslsmith_f_op_vec4_f32(max(global0[_wgslsmith_index_u32(1u, 32u)], global0[_wgslsmith_index_u32(_wgslsmith_mult_u32(abs(~4294967295u), countOneBits(1u)) >> (func_8(arg_1) % 32u), 32u)]));
                    var_1 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(global0[_wgslsmith_index_u32(~max(abs(1086u), 1u), 32u)] * global0[_wgslsmith_index_u32(firstTrailingBit(_wgslsmith_sub_u32(68355u, 1u) >> (1u % 32u)), 32u)]));
                }
                default: {
                    var var_1 = !any(vec3<bool>(all(func_9(global2[_wgslsmith_index_u32(21875u, 3u)], arg_2.x).b.wxy), _wgslsmith_dot_vec2_i32(vec2<i32>(28369i, arg_1.a.x), vec2<i32>(26521i, 1i)) < ~2911i, (false | arg_0.b.x) || any(arg_1.b)));
                    var_1 = arg_0.b.x && true;
                    global1 = array<vec4<i32>, 16>();
                    global1 = array<vec4<i32>, 16>();
                }
            }
            let var_1 = arg_1.a.x;
            var var_2 = func_9(global2[_wgslsmith_index_u32(abs(_wgslsmith_add_u32(1u, ~func_8(Struct_1(vec3<i32>(0i, -63616i, var_1), vec4<bool>(arg_1.b.x, arg_0.b.x, arg_0.b.x, false))))), 3u)], -(~arg_0.a.x));
            switch (~_wgslsmith_clamp_i32(firstLeadingBit(arg_2.x), reverseBits(firstLeadingBit(41491i)), 2147483647i)) {
                case 6270i: {
                }
                case -25861i: {
                    let var_3 = false;
                    let var_4 = func_4();
                    global2 = array<Struct_1, 3>();
                }
                case 1i: {
                    let var_3 = arg_0.b;
                }
                case 25248i: {
                    global1 = array<vec4<i32>, 16>();
                }
                default: {
                    var var_3 = var_2.b.x;
                }
            }
        }
        case 16211i: {
        }
        default: {
            let var_1 = ~1i;
        }
    }
    return 1i;
}

fn func_2(arg_0: f32, arg_1: bool) -> Struct_1 {
    global2 = array<Struct_1, 3>();
    let var_0 = !select(vec4<bool>(arg_1, (u_input.a.x & u_input.a.x) >= func_3(global2[_wgslsmith_index_u32(0u, 3u)], Struct_1(u_input.a, vec4<bool>(arg_1, arg_1, false, true)), u_input.b.xw), true, _wgslsmith_f_op_f32(ceil(arg_0)) <= arg_0), !select(!vec4<bool>(true, arg_1, true, false), !vec4<bool>(arg_1, false, false, false), u_input.a.x <= u_input.b.x), !vec4<bool>(!arg_1, true, all(vec4<bool>(arg_1, true, false, arg_1)), true));
    loop {
        if (LOOP_COUNTERS[21u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
        global0 = array<vec4<f32>, 32>();
        global2 = array<Struct_1, 3>();
        var var_1 = false;
    }
    switch (countOneBits(_wgslsmith_div_i32(u_input.a.x, -59317i))) {
        case 2147483647i: {
            if (true) {
            }
        }
        case 30695i: {
        }
        default: {
            let var_1 = _wgslsmith_f_op_vec2_f32(ceil(vec2<f32>(343f, _wgslsmith_f_op_f32(-_wgslsmith_div_f32(arg_0, arg_0)))));
            global2 = array<Struct_1, 3>();
            if (true) {
                let var_2 = var_0;
                let var_3 = Struct_1(_wgslsmith_add_vec3_i32(func_9(func_9(global2[_wgslsmith_index_u32(1u, 3u)], u_input.a.x), 38642i).a, u_input.a), vec4<bool>(true, !(_wgslsmith_f_op_f32(max(var_1.x, 703f)) < arg_0), 1u > _wgslsmith_div_u32(firstTrailingBit(9885u), 51353u), var_2.x));
                let var_4 = Struct_1(-_wgslsmith_div_vec3_i32(u_input.a, u_input.a & u_input.b.xwy), !var_3.b);
                var var_5 = _wgslsmith_mod_vec4_u32(vec4<u32>(~1u, abs(4294967295u), max(1u, 57603u), _wgslsmith_dot_vec4_u32(vec4<u32>(1u, 4294967295u, ~0u, firstLeadingBit(70081u)), vec4<u32>(3631u, reverseBits(0u), ~4294967295u, ~54644u))), ~_wgslsmith_div_vec4_u32(vec4<u32>(4294967295u, min(51219u, 4294967295u), ~58154u, ~0u), select(vec4<u32>(1u, 1u, 1u, 1u), ~vec4<u32>(4294967295u, 1u, 2337u, 89178u), vec4<bool>(false, var_2.x, true, true))));
            }
            global1 = array<vec4<i32>, 16>();
            var var_2 = var_1.x;
        }
    }
    var var_1 = !func_4().b.yyx;
    return Struct_1(u_input.b.yzz, var_0);
}

fn func_10(arg_0: Struct_1, arg_1: Struct_1, arg_2: u32) -> Struct_1 {
    global2 = array<Struct_1, 3>();
    let var_0 = ~1u;
    if (!arg_0.b.x) {
        let var_1 = Struct_1(select(vec3<i32>(max(0i, i32(-2147483648)), _wgslsmith_dot_vec4_i32(vec4<i32>(-9929i, i32(-2147483648), u_input.a.x, u_input.b.x), vec4<i32>(u_input.b.x, 1i, arg_0.a.x, u_input.a.x)), -u_input.a.x & _wgslsmith_sub_i32(i32(-2147483648), arg_0.a.x)), -abs(min(vec3<i32>(arg_1.a.x, -10870i, -1i), u_input.a)), select(func_9(Struct_1(vec3<i32>(u_input.b.x, 0i, arg_0.a.x), arg_0.b), u_input.a.x).b.x, !(var_0 >= arg_2), false)), select(!select(!vec4<bool>(arg_0.b.x, true, false, false), !arg_1.b, arg_1.b.x), func_4().b, vec4<bool>(select(true, !arg_0.b.x, true), arg_0.b.x, arg_0.b.x, arg_0.b.x)));
    }
    global1 = array<vec4<i32>, 16>();
    if (true) {
        let var_1 = ~4294967295u;
    }
    return arg_0;
}

fn func_1(arg_0: Struct_1) -> u32 {
    let var_0 = func_10(func_2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-232f)))), false), Struct_1(vec3<i32>(-1i) * -countOneBits(vec3<i32>(0i, -1i, -27971i)), vec4<bool>(false, arg_0.b.x, max(56815i, u_input.a.x) > ~15768i, any(select(arg_0.b.zx, vec2<bool>(true, true), vec2<bool>(arg_0.b.x, arg_0.b.x))))), _wgslsmith_sub_u32(~(~(~1u)), 48651u));
    switch (i32(-2147483648)) {
        case -16611i: {
            for (var var_1 = 59408i; true; global2 = array<Struct_1, 3>()) {
                if (LOOP_COUNTERS[22u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
                var var_2 = Struct_1(max(vec3<i32>(var_0.a.x, reverseBits(arg_0.a.x >> (1510u % 32u)), func_2(_wgslsmith_f_op_f32(-1574f + 702f), false && arg_0.b.x).a.x), firstLeadingBit(-vec3<i32>(u_input.a.x, arg_0.a.x, -2960i))), var_0.b);
            }
            let var_1 = var_0.b;
            global0 = array<vec4<f32>, 32>();
        }
        case 28329i: {
            switch (1i) {
                case 1i: {
                    return reverseBits(4294967295u);
                }
                case 24068i: {
                    global1 = array<vec4<i32>, 16>();
                    let var_1 = -353f;
                    global0 = array<vec4<f32>, 32>();
                    var var_2 = Struct_1(func_2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -513f)), any(var_0.b)).a >> (max(vec3<u32>(1u, 1u, 1u), ~firstTrailingBit(vec3<u32>(1u, 1u, 0u))) % vec3<u32>(32u)), vec4<bool>(arg_0.b.x, var_0.b.x, arg_0.b.x, !func_2(_wgslsmith_f_op_f32(min(-1517f, var_1)), true).b.x));
                }
                case 2147483647i: {
                    let var_1 = vec3<f32>(332f, _wgslsmith_div_f32(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-1061f))))), _wgslsmith_f_op_f32(-863f)), -298f);
                    let var_2 = -func_10(func_4(), func_2(var_1.x, all(vec3<bool>(var_0.b.x, true, var_0.b.x))), ~1u).a;
                    let var_3 = ~vec4<u32>(func_7(vec3<f32>(var_1.x, _wgslsmith_div_f32(var_1.x, -1000f), _wgslsmith_f_op_f32(-var_1.x))).x, 0u, 41575u, 1u);
                }
                case -29445i: {
                }
                default: {
                    let var_1 = vec3<u32>(0u, _wgslsmith_clamp_u32(~_wgslsmith_mod_u32(firstTrailingBit(2256u), _wgslsmith_dot_vec4_u32(vec4<u32>(4294967295u, 420u, 0u, 55016u), vec4<u32>(69858u, 122756u, 10608u, 1u))), abs(~func_8(Struct_1(vec3<i32>(u_input.b.x, u_input.a.x, 0i), vec4<bool>(true, true, true, false)))), countOneBits(func_7(vec3<f32>(2011f, -518f, 1746f)).x)), ~(~_wgslsmith_add_u32(reverseBits(58297u), _wgslsmith_div_u32(9925u, 5191u))));
                    global2 = array<Struct_1, 3>();
                    var var_2 = Struct_1(arg_0.a, arg_0.b);
                }
            }
        }
        case 2147483647i: {
            loop {
                if (LOOP_COUNTERS[23u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
                let var_1 = 2147483647i;
                let var_2 = _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(floor(vec2<f32>(-456f, -663f))), _wgslsmith_div_vec2_f32(vec2<f32>(1000f, -144f), vec2<f32>(1000f, 334f)))))) - _wgslsmith_div_vec2_f32(vec2<f32>(-1097f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(218f - 553f) - _wgslsmith_f_op_f32(820f + -636f))), _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-818f, -1860f)) - _wgslsmith_f_op_vec2_f32(-vec2<f32>(-651f, 1000f))), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(-1457f, -453f))))));
            }
            let var_1 = func_4();
            var var_2 = func_4().b.zwx;
            if (false) {
                var var_3 = Struct_1(max(min(vec3<i32>(select(-24452i, var_0.a.x, false), -1i, 42781i ^ arg_0.a.x), _wgslsmith_clamp_vec3_i32(reverseBits(u_input.a), u_input.b.ywx, ~var_1.a)), _wgslsmith_mod_vec3_i32(vec3<i32>(var_0.a.x, var_0.a.x, u_input.b.x) >> (vec3<u32>(1u, 1u, 1u) % vec3<u32>(32u)), -var_1.a)), vec4<bool>(true, var_0.b.x, var_2.x, var_0.b.x | func_9(Struct_1(vec3<i32>(u_input.b.x, -47708i, 1i), vec4<bool>(arg_0.b.x, var_2.x, true, var_1.b.x)), ~var_0.a.x).b.x));
                global2 = array<Struct_1, 3>();
                global0 = array<vec4<f32>, 32>();
            }
        }
        case 1i: {
            var var_1 = vec3<i32>(abs(-23455i), _wgslsmith_mult_i32(select(~u_input.a.x >> (1u % 32u), -arg_0.a.x, true), i32(-1i) * -(var_0.a.x >> (1u % 32u))), var_0.a.x ^ arg_0.a.x);
        }
        default: {
            if (arg_0.b.x) {
                global1 = array<vec4<i32>, 16>();
                global1 = array<vec4<i32>, 16>();
            }
            let var_1 = Struct_1(countOneBits(min(var_0.a, (u_input.b.xxw << (vec3<u32>(1u, 1u, 1u) % vec3<u32>(32u))) >> (select(vec3<u32>(4294967295u, 0u, 31764u), vec3<u32>(1u, 34180u, 4974u), vec3<bool>(false, false, true)) % vec3<u32>(32u)))), !func_2(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-139f * 1058f), _wgslsmith_f_op_f32(271f * 1000f))), func_10(var_0, arg_0, ~4294967295u).b.x).b);
        }
    }
    global2 = array<Struct_1, 3>();
    let var_1 = -1i << (min(~(~2399u) | _wgslsmith_div_u32(_wgslsmith_dot_vec2_u32(vec2<u32>(26783u, 0u), vec2<u32>(8453u, 30479u)), countOneBits(2714u)), 1u) % 32u);
    loop {
        if (LOOP_COUNTERS[24u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
        var var_2 = _wgslsmith_f_op_vec2_f32(trunc(_wgslsmith_f_op_vec2_f32(min(_wgslsmith_f_op_vec2_f32(-vec2<f32>(1f, 1f)), _wgslsmith_div_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(-410f + -219f), _wgslsmith_div_f32(789f, 1671f)), _wgslsmith_f_op_vec2_f32(round(_wgslsmith_f_op_vec2_f32(vec2<f32>(1000f, -1366f) - vec2<f32>(651f, -1242f)))))))));
    }
    return ~(func_8(global2[_wgslsmith_index_u32(_wgslsmith_sub_u32(54596u, 1997u) >> (select(54772u, 11643u, arg_0.b.x) % 32u), 3u)]) & ~_wgslsmith_add_u32(_wgslsmith_div_u32(5292u, 11611u), ~9235u));
}

@compute
@workgroup_size(1)
fn main() {
    for (var var_0 = 0i; any(vec3<bool>(!any(vec4<bool>(true, true, true, true)), all(vec4<bool>(true, true, true, true)) || false, !all(vec4<bool>(true, false, false, false)))); var_0 -= 1i) {
        if (LOOP_COUNTERS[25u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
        var var_1 = global2[_wgslsmith_index_u32(firstLeadingBit(_wgslsmith_add_u32(firstTrailingBit(~(~56397u)), ~(~(~61108u)))), 3u)];
        global0 = array<vec4<f32>, 32>();
        global1 = array<vec4<i32>, 16>();
    }
    let var_0 = u_input.a.xz;
    global0 = array<vec4<f32>, 32>();
    loop {
        if (LOOP_COUNTERS[26u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
        continue;
    }
    for (var var_1 = 0i; var_1 > 33359i; var_1 -= 1i) {
        if (LOOP_COUNTERS[27u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[27u] = LOOP_COUNTERS[27u] + 1u;
        global1 = array<vec4<i32>, 16>();
        switch (-1i) {
            case -1i: {
                let var_2 = global2[_wgslsmith_index_u32(_wgslsmith_dot_vec2_u32(abs(reverseBits(vec2<u32>(1u, 1u))) ^ vec2<u32>(abs(30779u), _wgslsmith_dot_vec4_u32(~vec4<u32>(54773u, 4294967295u, 133977u, 4294967295u), abs(vec4<u32>(0u, 27719u, 1u, 27980u)))), vec2<u32>(~4294967295u, ~(~countOneBits(1u)))), 3u)];
                break;
            }
            case -22472i: {
            }
            default: {
                return;
            }
        }
        switch (~(~u_input.b.x)) {
            case 0i: {
                continue;
            }
            default: {
                var var_2 = i32(-2147483648);
                global1 = array<vec4<i32>, 16>();
                let var_3 = ~(~min(_wgslsmith_mult_vec4_u32(vec4<u32>(49877u, 56983u, 104926u, 55871u), vec4<u32>(1u, 8083u, 20344u, 15140u)), select(vec4<u32>(27539u, 19493u, 39362u, 26761u), vec4<u32>(4254u, 1u, 7540u, 1u), vec4<bool>(true, false, true, true)))) & max(~vec4<u32>(1u, 1u, 1u, 1u), vec4<u32>(~4294967295u, ~_wgslsmith_dot_vec3_u32(vec3<u32>(4294967295u, 1698u, 86577u), vec3<u32>(14838u, 1u, 3750u)), firstTrailingBit(~4294967295u), _wgslsmith_div_u32(min(1u, 112372u), func_1(Struct_1(vec3<i32>(var_0.x, i32(-2147483648), -14817i), vec4<bool>(true, false, false, false))))));
                global2 = array<Struct_1, 3>();
            }
        }
        continue;
    }
    var var_1 = func_4().b.zyw;
    let x = u_input.a;
    s_output = StorageBuffer(-32699i, ~1i, _wgslsmith_add_u32(firstLeadingBit(~(~4294967295u)), _wgslsmith_add_u32(1u, _wgslsmith_dot_vec2_u32(select(vec2<u32>(73713u, 706u), vec2<u32>(4294967295u, 4294967295u), var_1.yy), reverseBits(vec2<u32>(0u, 0u))))), firstLeadingBit(select(reverseBits(~vec2<u32>(0u, 4294967295u)), ~vec2<u32>(1u, 1u), vec2<bool>(true, true))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(1347f, _wgslsmith_f_op_f32(-613f), _wgslsmith_f_op_f32(-310f))) - _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(func_6(Struct_1(u_input.b.wxy, vec4<bool>(false, var_1.x, false, false)), true, Struct_1(vec3<i32>(i32(-2147483648), 13502i, i32(-2147483648)), vec4<bool>(var_1.x, false, false, true)))) - vec3<f32>(_wgslsmith_f_op_f32(991f * -1234f), -439f, _wgslsmith_f_op_f32(f32(-1f) * -1275f)))));
}

`;