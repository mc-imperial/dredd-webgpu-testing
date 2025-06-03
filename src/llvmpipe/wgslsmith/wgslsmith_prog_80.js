export const input = [169,234,17,132,149,114,148,83,17,10,114,68,206,181,140,63,132,211,49,214,44,122,54,236,253,121,51,95,111,35,154,13,91,132,235,167,79,158,61,16,100,182,85,13,109,137,137,85,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [169,234,17,132,149,114,148,83,17,10,114,68,206,181,140,63,132,211,49,214,44,122,54,236,253,121,51,95,111,35,154,13,91,132,235,167,79,158,61,16,100,182,85,13,109,137,137,85,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[169,234,17,132,149,114,148,83,17,10,114,68,206,181,140,63,132,211,49,214,44,122,54,236,253,121,51,95,111,35,154,13,91,132,235,167,79,158,61,16,100,182,85,13,109,137,137,85]}
// Seed: 12451802358516171832

struct Struct_1 {
    a: bool,
    b: vec4<i32>,
}

struct Struct_2 {
    a: Struct_1,
    b: vec3<i32>,
    c: Struct_1,
    d: f32,
    e: vec3<i32>,
}

struct UniformBuffer {
    a: i32,
    b: i32,
    c: i32,
    d: vec3<u32>,
    e: vec3<i32>,
}

struct StorageBuffer {
    a: i32,
    b: vec3<f32>,
    c: u32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<Struct_1, 10> = array<Struct_1, 10>(Struct_1(false, vec4<i32>(1i, 26196i, 0i, 27592i)), Struct_1(false, vec4<i32>(17978i, -57171i, 228i, 1155i)), Struct_1(false, vec4<i32>(-70573i, i32(-2147483648), 15980i, 0i)), Struct_1(true, vec4<i32>(0i, 0i, 1i, 0i)), Struct_1(false, vec4<i32>(59669i, -21319i, 3888i, 54101i)), Struct_1(true, vec4<i32>(2147483647i, 29825i, 11276i, -70153i)), Struct_1(true, vec4<i32>(1i, -15381i, 11614i, i32(-2147483648))), Struct_1(false, vec4<i32>(-8790i, 44814i, 0i, -37143i)), Struct_1(true, vec4<i32>(0i, 15563i, 0i, -12561i)), Struct_1(true, vec4<i32>(-23572i, -40882i, 2147483647i, 16306i)));

var<private> global1: array<Struct_2, 7> = array<Struct_2, 7>(Struct_2(Struct_1(true, vec4<i32>(0i, 93342i, -1i, 1i)), vec3<i32>(-6212i, -30256i, -4186i), Struct_1(false, vec4<i32>(9751i, 1i, -13977i, 0i)), 118f, vec3<i32>(-31536i, -33081i, i32(-2147483648))), Struct_2(Struct_1(true, vec4<i32>(2147483647i, -1i, 49898i, -7415i)), vec3<i32>(44287i, 0i, 35352i), Struct_1(true, vec4<i32>(1i, -1i, i32(-2147483648), 32481i)), -1025f, vec3<i32>(1i, 0i, 0i)), Struct_2(Struct_1(false, vec4<i32>(12412i, i32(-2147483648), 1i, 0i)), vec3<i32>(-1i, -24662i, i32(-2147483648)), Struct_1(false, vec4<i32>(1i, -17651i, 62551i, 2147483647i)), -868f, vec3<i32>(2147483647i, 1i, i32(-2147483648))), Struct_2(Struct_1(false, vec4<i32>(-48935i, 9379i, -14602i, 0i)), vec3<i32>(19986i, -10971i, -14636i), Struct_1(true, vec4<i32>(-1i, i32(-2147483648), 160i, 24266i)), -104f, vec3<i32>(-1i, 16701i, -6136i)), Struct_2(Struct_1(true, vec4<i32>(2147483647i, -12432i, 0i, -15647i)), vec3<i32>(11279i, -1i, 5824i), Struct_1(false, vec4<i32>(1i, 50180i, i32(-2147483648), 0i)), -1253f, vec3<i32>(2147483647i, 1i, i32(-2147483648))), Struct_2(Struct_1(false, vec4<i32>(1i, 1i, -8717i, -50888i)), vec3<i32>(0i, -45696i, -18223i), Struct_1(true, vec4<i32>(-1i, i32(-2147483648), -32934i, -5632i)), 290f, vec3<i32>(1i, -1i, -10974i)), Struct_2(Struct_1(false, vec4<i32>(35230i, -32380i, 1095i, 1i)), vec3<i32>(i32(-2147483648), -1i, -1i), Struct_1(false, vec4<i32>(0i, 1i, 50284i, 2147483647i)), -1000f, vec3<i32>(-1i, -1i, 1i)));

var<private> global2: bool = false;

var<private> global3: array<vec4<f32>, 27> = array<vec4<f32>, 27>(vec4<f32>(-1362f, -1832f, 282f, -1997f), vec4<f32>(-1000f, 913f, -340f, -250f), vec4<f32>(382f, 472f, 1517f, -540f), vec4<f32>(2185f, 2696f, -729f, 1210f), vec4<f32>(573f, 1646f, 360f, 1073f), vec4<f32>(-117f, 1436f, -644f, 697f), vec4<f32>(571f, -400f, -977f, 195f), vec4<f32>(163f, 550f, -394f, 905f), vec4<f32>(950f, -988f, -1117f, 1510f), vec4<f32>(367f, -1000f, -241f, 1473f), vec4<f32>(-2524f, 169f, 1000f, -1000f), vec4<f32>(951f, -968f, 1497f, -140f), vec4<f32>(-329f, -280f, 186f, -1248f), vec4<f32>(356f, -1042f, 1474f, 228f), vec4<f32>(1084f, 1383f, -528f, -521f), vec4<f32>(453f, -1843f, 880f, -206f), vec4<f32>(1210f, -1000f, 1000f, 871f), vec4<f32>(-1028f, 1965f, -1406f, 1137f), vec4<f32>(-1788f, -800f, -421f, -1000f), vec4<f32>(459f, -265f, 843f, 1068f), vec4<f32>(-192f, -1372f, -762f, 1016f), vec4<f32>(-269f, 848f, -1205f, -278f), vec4<f32>(-1000f, 446f, -526f, 1000f), vec4<f32>(461f, -829f, 197f, -1000f), vec4<f32>(-925f, -827f, 772f, 1763f), vec4<f32>(-578f, -884f, -106f, -1195f), vec4<f32>(1105f, -1120f, -1000f, -2389f));

var<private> global4: array<Struct_1, 17> = array<Struct_1, 17>(Struct_1(false, vec4<i32>(1i, 31457i, 2147483647i, 0i)), Struct_1(false, vec4<i32>(4458i, -1i, 0i, 51423i)), Struct_1(false, vec4<i32>(-46002i, -21534i, 28016i, -775i)), Struct_1(false, vec4<i32>(0i, -1i, 1i, i32(-2147483648))), Struct_1(false, vec4<i32>(-1i, 31710i, -22116i, 2147483647i)), Struct_1(false, vec4<i32>(2147483647i, -2383i, 3207i, 1i)), Struct_1(false, vec4<i32>(-7308i, 10714i, -32738i, -45278i)), Struct_1(true, vec4<i32>(8034i, 12730i, -1i, 2147483647i)), Struct_1(false, vec4<i32>(0i, -2761i, i32(-2147483648), -3731i)), Struct_1(false, vec4<i32>(-6369i, 2147483647i, -11374i, 45872i)), Struct_1(true, vec4<i32>(0i, 4054i, i32(-2147483648), -17044i)), Struct_1(false, vec4<i32>(i32(-2147483648), 27011i, -11907i, i32(-2147483648))), Struct_1(true, vec4<i32>(-1i, -37638i, 29330i, -9447i)), Struct_1(false, vec4<i32>(1i, 65466i, 31615i, i32(-2147483648))), Struct_1(false, vec4<i32>(i32(-2147483648), -26779i, -24986i, -26658i)), Struct_1(true, vec4<i32>(0i, -1i, 7145i, 1i)), Struct_1(false, vec4<i32>(0i, -32372i, 2147483647i, 8497i)));

var<private> LOOP_COUNTERS: array<u32, 19>;

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn func_6() -> bool {
    if (_wgslsmith_dot_vec4_i32(~vec4<i32>(1i << (u_input.d.x % 32u), u_input.c, u_input.b, u_input.e.x), firstTrailingBit(~vec4<i32>(u_input.c, 0i, u_input.b, i32(-2147483648)) >> (~vec4<u32>(1u, 0u, 0u, 0u) % vec4<u32>(32u)))) >= -11664i) {
        if (any(select(!select(vec2<bool>(true, true), vec2<bool>(true, false), true), vec2<bool>(true, true), vec2<bool>(any(vec2<bool>(true, true)), true)))) {
            var var_0 = ~_wgslsmith_mult_u32(~55421u, _wgslsmith_mult_u32(_wgslsmith_dot_vec3_u32(vec3<u32>(53949u, 17149u, 83687u), u_input.d), u_input.d.x)) & u_input.d.x;
            let var_1 = _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1000f * _wgslsmith_f_op_f32(1788f + _wgslsmith_f_op_f32(max(-389f, -110f)))))));
            var var_2 = u_input.e.x | u_input.b;
            global0 = array<Struct_1, 10>();
            let var_3 = _wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(select(vec3<f32>(var_1, var_1, var_1), vec3<f32>(var_1, -996f, 141f), true)))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(439f, -705f, var_1))))), vec3<f32>(276f, _wgslsmith_f_op_f32(-294f + _wgslsmith_div_f32(var_1, var_1)), _wgslsmith_f_op_f32(var_1 + _wgslsmith_f_op_f32(f32(-1f) * -1622f))), select(select(select(vec3<bool>(true, false, false), vec3<bool>(true, true, true), true), select(vec3<bool>(false, true, false), vec3<bool>(false, true, false), vec3<bool>(true, true, false)), true), select(select(vec3<bool>(true, false, true), vec3<bool>(false, false, true), vec3<bool>(true, false, false)), select(vec3<bool>(false, false, false), vec3<bool>(true, false, false), vec3<bool>(true, false, false)), vec3<bool>(true, true, true)), vec3<bool>(false, any(vec3<bool>(false, false, false)), true))))));
        }
        global3 = array<vec4<f32>, 27>();
        var var_0 = global1[_wgslsmith_index_u32(reverseBits(u_input.d.x), 7u)];
        var var_1 = any(select(vec2<bool>(false, false), !vec2<bool>(all(vec2<bool>(true, var_0.c.a)), any(vec3<bool>(var_0.a.a, var_0.a.a, false))), !(!select(vec2<bool>(var_0.c.a, var_0.c.a), vec2<bool>(true, var_0.a.a), var_0.a.a))));
        loop {
            if (LOOP_COUNTERS[0u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
            continue;
        }
    }
    global1 = array<Struct_2, 7>();
    return !(all(vec2<bool>(true, true)) && (~(0u & u_input.d.x) > select(1u, _wgslsmith_dot_vec4_u32(vec4<u32>(u_input.d.x, 32700u, u_input.d.x, u_input.d.x), vec4<u32>(40425u, 0u, u_input.d.x, u_input.d.x)), any(vec2<bool>(true, true)))));
}

fn func_5(arg_0: vec4<bool>, arg_1: vec2<i32>) -> vec4<i32> {
    for (var var_0: i32; true; var_0 -= 1i) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        let var_1 = _wgslsmith_f_op_f32(-857f);
        if (select(true, u_input.d.x != 53228u, arg_0.x)) {
            let var_2 = Struct_1(true, vec4<i32>(arg_1.x, arg_1.x, i32(-2147483648), u_input.e.x) << (vec4<u32>(4294967295u, 60325u, firstLeadingBit(u_input.d.x), _wgslsmith_mult_u32(firstLeadingBit(u_input.d.x), 1u)) % vec4<u32>(32u)));
            global3 = array<vec4<f32>, 27>();
            global4 = array<Struct_1, 17>();
            break;
        }
        loop {
            if (LOOP_COUNTERS[2u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            let var_2 = _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(sign(vec2<f32>(var_1, var_1))) * _wgslsmith_f_op_vec2_f32(-vec2<f32>(var_1, -179f))) + vec2<f32>(_wgslsmith_f_op_f32(-657f + var_1), var_1)), _wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(var_1 + var_1), _wgslsmith_f_op_f32(var_1 * -1096f)) + _wgslsmith_f_op_vec2_f32(abs(_wgslsmith_f_op_vec2_f32(-vec2<f32>(var_1, var_1))))), false)) + _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(var_1, var_1) + _wgslsmith_f_op_vec2_f32(vec2<f32>(var_1, -307f) * vec2<f32>(var_1, var_1))) - vec2<f32>(var_1, _wgslsmith_f_op_f32(-646f)))));
            break;
        }
        var var_2 = _wgslsmith_sub_vec2_u32(u_input.d.zx, vec2<u32>(~0u, 27133u));
        switch (arg_1.x) {
            case -33394i: {
                var var_3 = true;
                let var_4 = Struct_2(Struct_1(arg_0.x, vec4<i32>(arg_1.x << (u_input.d.x % 32u), -1i, ~arg_1.x, _wgslsmith_dot_vec3_i32(vec3<i32>(-8796i, 0i, arg_1.x), u_input.e)) | vec4<i32>(1i, _wgslsmith_div_i32(-1i, u_input.b), countOneBits(arg_1.x), ~2147483647i)), ~(-_wgslsmith_clamp_vec3_i32(min(vec3<i32>(2147483647i, i32(-2147483648), arg_1.x), vec3<i32>(arg_1.x, 9173i, -19379i)), vec3<i32>(u_input.e.x, u_input.a, i32(-2147483648)) & u_input.e, _wgslsmith_div_vec3_i32(vec3<i32>(u_input.b, i32(-2147483648), 10855i), u_input.e))), Struct_1(~(~var_2.x) < 4294967295u, ~(~vec4<i32>(arg_1.x, -22486i, u_input.c, arg_1.x))), _wgslsmith_f_op_f32(-1240f), select(_wgslsmith_div_vec3_i32(~select(vec3<i32>(arg_1.x, 11052i, -53681i), vec3<i32>(arg_1.x, 1i, u_input.e.x), vec3<bool>(arg_0.x, false, true)), firstLeadingBit(vec3<i32>(0i, u_input.a, -17754i) << (vec3<u32>(2161u, u_input.d.x, var_2.x) % vec3<u32>(32u)))), vec3<i32>(u_input.b, -(~2147483647i), ~u_input.b), vec3<bool>(!func_6(), true, any(arg_0))));
                var var_5 = abs(59581i);
                let var_6 = vec3<f32>(_wgslsmith_f_op_f32(-var_4.d), 1722f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(_wgslsmith_div_f32(-241f, var_1), var_4.d)))));
                global3 = array<vec4<f32>, 27>();
            }
            case -7284i: {
                var var_3 = _wgslsmith_mod_vec2_i32(vec2<i32>(-1i) * -u_input.e.yz, firstLeadingBit(abs(arg_1))) << (vec2<u32>(u_input.d.x, abs(u_input.d.x)) % vec2<u32>(32u));
                var_0 = u_input.a;
            }
            case 23668i: {
                var_2 = u_input.d.yx;
                break;
            }
            default: {
                let var_3 = !select(vec4<bool>(arg_0.x, arg_0.x, any(select(arg_0.wxx, arg_0.wzx, arg_0.xwx)), arg_0.x), arg_0, vec4<bool>(all(select(vec4<bool>(false, arg_0.x, false, arg_0.x), arg_0, false)), true, !(!arg_0.x), func_6()));
                var var_4 = -u_input.e;
            }
        }
    }
    global2 = true;
    var var_0 = global1[_wgslsmith_index_u32(~select(_wgslsmith_dot_vec4_u32(firstTrailingBit(vec4<u32>(1u, 0u, 39286u, u_input.d.x)), ~vec4<u32>(u_input.d.x, u_input.d.x, 55981u, 4097u)) & firstTrailingBit(0u), ~(_wgslsmith_mod_u32(46223u, 1u) & (u_input.d.x >> (u_input.d.x % 32u))), false), 7u)];
    loop {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        let var_1 = global1[_wgslsmith_index_u32(~u_input.d.x, 7u)];
        for (var var_2 = 12678i; select(var_0.a.a, var_1.a.a, arg_0.x); ) {
            if (LOOP_COUNTERS[4u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        }
        break;
    }
    var var_1 = _wgslsmith_f_op_f32(-var_0.d);
    return _wgslsmith_add_vec4_i32(firstTrailingBit(var_0.a.b), var_0.a.b);
}

fn func_4() -> bool {
    var var_0 = -(max(func_5(vec4<bool>(true, true, true, true), -u_input.e.yz), vec4<i32>(u_input.a, u_input.a, -u_input.a, u_input.e.x)) << (_wgslsmith_sub_vec4_u32(~(vec4<u32>(4294967295u, u_input.d.x, 1u, 15807u) << (vec4<u32>(u_input.d.x, 24170u, 4294967295u, 47571u) % vec4<u32>(32u))), ~(~vec4<u32>(4294967295u, 4294967295u, u_input.d.x, 79355u))) % vec4<u32>(32u)));
    var var_1 = global1[_wgslsmith_index_u32(1u, 7u)];
    for (var var_2: i32; !var_1.a.a; var_2 += 1i) {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        continue;
    }
    let var_2 = var_1.d;
    loop {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        var var_3 = global0[_wgslsmith_index_u32(u_input.d.x, 10u)];
        for (var var_4 = 34248i; var_4 <= -22967i; ) {
            if (LOOP_COUNTERS[7u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
            var var_5 = -698f;
        }
        let var_4 = global1[_wgslsmith_index_u32(u_input.d.x, 7u)];
        var var_5 = select(!(!(!select(vec3<bool>(false, var_3.a, false), vec3<bool>(var_4.a.a, var_1.c.a, false), vec3<bool>(true, var_4.c.a, var_4.c.a)))), !select(vec3<bool>(false, var_4.a.a, func_6()), select(vec3<bool>(var_1.c.a, var_3.a, true), !vec3<bool>(true, var_4.c.a, true), any(vec4<bool>(true, var_3.a, var_4.c.a, var_4.c.a))), var_4.a.a), false);
    }
    return all(vec2<bool>(true, true));
}

fn func_3(arg_0: Struct_1, arg_1: vec3<bool>, arg_2: i32) -> u32 {
    var var_0 = global1[_wgslsmith_index_u32(u_input.d.x, 7u)];
    for (var var_1 = -30108i; var_1 == -38391i; global3 = array<vec4<f32>, 27>()) {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        continue;
    }
    for (var var_1 = 0i; !func_4(); global3 = array<vec4<f32>, 27>()) {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        loop {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
            break;
        }
        var var_2 = any(vec4<bool>(all(!vec3<bool>(false, true, arg_1.x)) && var_0.c.a, all(!(!vec3<bool>(arg_1.x, false, arg_1.x))), !(!(-647f >= var_0.d)), !func_4()));
        var var_3 = _wgslsmith_dot_vec2_u32(u_input.d.yy, vec2<u32>(u_input.d.x, firstTrailingBit(_wgslsmith_add_u32(select(u_input.d.x, u_input.d.x, true), 6604u & u_input.d.x))));
    }
    loop {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        continue;
    }
    var var_1 = arg_0;
    return 29629u;
}

fn func_2() -> vec3<bool> {
    loop {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        loop {
            if (LOOP_COUNTERS[13u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
            break;
        }
        for (var var_0 = 0i; var_0 <= i32(-2147483648); global1 = array<Struct_2, 7>()) {
            if (LOOP_COUNTERS[14u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
            continue;
        }
        for (var var_0 = 0i; true; global4 = array<Struct_1, 17>()) {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            var var_1 = firstLeadingBit(_wgslsmith_clamp_u32(u_input.d.x, u_input.d.x, _wgslsmith_sub_u32(~select(u_input.d.x, u_input.d.x, true), _wgslsmith_add_u32(~0u, func_3(Struct_1(true, vec4<i32>(u_input.b, u_input.c, u_input.b, -28795i)), vec3<bool>(false, true, true), u_input.b)))));
            var_0 = ~_wgslsmith_dot_vec4_i32(-abs(-vec4<i32>(2147483647i, u_input.a, 0i, u_input.b)), max(vec4<i32>(u_input.a, min(u_input.c, 0i), u_input.a, u_input.b), _wgslsmith_sub_vec4_i32(_wgslsmith_div_vec4_i32(vec4<i32>(u_input.e.x, 0i, u_input.c, 20964i), vec4<i32>(0i, u_input.e.x, 0i, u_input.a)), vec4<i32>(u_input.b, u_input.b, -23506i, u_input.b))));
        }
        break;
    }
    var var_0 = select(select(vec4<bool>(true, true, func_6(), false && (7892i >= u_input.e.x)), vec4<bool>(select(true, true, true), select(true, false, false), true, true), false), select(vec4<bool>(true, true, true, true), !select(vec4<bool>(false, true, true, false), select(vec4<bool>(false, false, true, false), vec4<bool>(false, false, true, false), true), true), !(!select(vec4<bool>(true, false, false, false), vec4<bool>(false, true, false, false), vec4<bool>(false, true, true, false)))), true);
    global2 = !all(vec4<bool>(var_0.x, var_0.x, _wgslsmith_dot_vec3_i32(vec3<i32>(-15615i, u_input.a, -10177i), vec3<i32>(i32(-2147483648), -8976i, -26468i)) < (1i << (u_input.d.x % 32u)), var_0.x));
    global3 = array<vec4<f32>, 27>();
    let var_1 = Struct_2(global0[_wgslsmith_index_u32(~(u_input.d.x >> (u_input.d.x % 32u)), 10u)], select(u_input.e, ~u_input.e, vec3<bool>(!var_0.x, var_0.x, all(var_0.zz))), Struct_1(all(vec4<bool>(var_0.x, var_0.x, var_0.x, true)), _wgslsmith_clamp_vec4_i32(vec4<i32>(u_input.b, i32(-2147483648), u_input.b, 2147483647i) >> (~vec4<u32>(u_input.d.x, 4294967295u, 51617u, 4306u) % vec4<u32>(32u)), _wgslsmith_add_vec4_i32(-vec4<i32>(-62944i, -6995i, -15032i, u_input.e.x), _wgslsmith_add_vec4_i32(vec4<i32>(6617i, 39509i, 52874i, u_input.b), vec4<i32>(17485i, 0i, u_input.a, -9238i))), _wgslsmith_sub_vec4_i32(vec4<i32>(u_input.c, -45274i, u_input.b, u_input.c) | vec4<i32>(u_input.c, u_input.e.x, 39767i, u_input.c), firstLeadingBit(vec4<i32>(1i, 7384i, 1i, u_input.e.x))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(-1755f))) - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(-501f))))), _wgslsmith_mod_vec3_i32(abs(_wgslsmith_clamp_vec3_i32(u_input.e, u_input.e, _wgslsmith_clamp_vec3_i32(vec3<i32>(-49412i, u_input.b, u_input.b), u_input.e, vec3<i32>(u_input.b, u_input.b, -6543i)))), vec3<i32>(-3682i, ~2147483647i, _wgslsmith_mod_i32(u_input.a, 0i)) & _wgslsmith_add_vec3_i32(vec3<i32>(-8107i, 21030i, -32219i), u_input.e)));
    return select(var_0.wzz, !var_0.wxx, min(~(u_input.d.x << (40039u % 32u)), ~(~1u)) < 1u);
}

fn func_1(arg_0: u32, arg_1: Struct_2, arg_2: vec2<bool>, arg_3: vec4<f32>) -> Struct_2 {
    let var_0 = arg_3.x;
    for (var var_1: i32; any(!vec3<bool>(!(!arg_2.x), -1i < u_input.a, u_input.a == u_input.a)); ) {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        if (!arg_2.x) {
        }
    }
    global4 = array<Struct_1, 17>();
    let var_1 = select(func_2(), !vec3<bool>(false | (arg_1.a.b.x < -1i), arg_2.x, arg_2.x), _wgslsmith_f_op_f32(select(949f, 1376f, true)) < 567f);
    let var_2 = Struct_2(Struct_1(true, _wgslsmith_mult_vec4_i32(~(-vec4<i32>(arg_1.c.b.x, i32(-2147483648), 21561i, i32(-2147483648))), ~vec4<i32>(arg_1.b.x, 11856i, u_input.e.x, -7574i))), ~reverseBits(vec3<i32>(54484i, 2147483647i, 0i)) ^ u_input.e, arg_1.c, _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(floor(-1133f)))), vec3<i32>(~(arg_1.b.x ^ arg_1.b.x) ^ arg_1.c.b.x, ~(~(-14521i) >> (_wgslsmith_clamp_u32(30399u, u_input.d.x, u_input.d.x) % 32u)), arg_1.e.x));
    return Struct_2(Struct_1(var_1.x, ~vec4<i32>(-arg_1.e.x, abs(0i), u_input.b, _wgslsmith_dot_vec3_i32(arg_1.c.b.wwz, vec3<i32>(u_input.e.x, i32(-2147483648), 0i)))), (_wgslsmith_mod_vec3_i32(abs(vec3<i32>(arg_1.b.x, u_input.a, 6171i)), u_input.e >> (vec3<u32>(arg_0, arg_0, 4294967295u) % vec3<u32>(32u))) & u_input.e) & firstTrailingBit(vec3<i32>(14917i, firstTrailingBit(arg_1.a.b.x), -17888i)), var_2.c, _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(round(-700f)), _wgslsmith_div_f32(100f, var_0), arg_2.x)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(var_0))))), var_2.a.b.ywy);
}

@compute
@workgroup_size(1)
fn main() {
    for (var var_0 = 3472i; ; var_0 += 1i) {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
        let var_1 = global1[_wgslsmith_index_u32(_wgslsmith_sub_u32(~(0u << ((~u_input.d.x >> (u_input.d.x % 32u)) % 32u)), _wgslsmith_dot_vec4_u32(vec4<u32>(~(~u_input.d.x), u_input.d.x, countOneBits(_wgslsmith_mod_u32(u_input.d.x, 44999u)), 49352u), max(min(reverseBits(vec4<u32>(u_input.d.x, 1u, u_input.d.x, 29987u)), firstTrailingBit(vec4<u32>(u_input.d.x, 1u, 1u, u_input.d.x))), vec4<u32>(firstTrailingBit(4294967295u), ~1u, 14639u, 4294967295u)))), 7u)];
    }
    var var_0 = func_1(abs(u_input.d.x), global1[_wgslsmith_index_u32(abs(58032u), 7u)], vec2<bool>(true, false), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(trunc(_wgslsmith_div_vec4_f32(vec4<f32>(348f, -417f, 1882f, -1000f), _wgslsmith_f_op_vec4_f32(-vec4<f32>(1575f, -473f, 491f, 883f)))))));
    let var_1 = var_0.a.a;
    loop {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        continue;
    }
    switch (~_wgslsmith_add_i32(355i, abs(21202i))) {
        default: {
        }
    }
    var var_2 = global3[_wgslsmith_index_u32(u_input.d.x, 27u)];
    global1 = array<Struct_2, 7>();
    var_2 = global3[_wgslsmith_index_u32(~u_input.d.x, 27u)];
    var var_3 = abs(-55282i);
    let x = u_input.a;
    s_output = StorageBuffer(var_0.b.x, _wgslsmith_f_op_vec3_f32(var_2.zwz * vec3<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(max(697f, var_2.x)))), _wgslsmith_f_op_f32(var_2.x - 839f), _wgslsmith_f_op_f32(-1799f))), _wgslsmith_dot_vec3_u32(_wgslsmith_add_vec3_u32(select(vec3<u32>(u_input.d.x, 1u, 58411u), ~vec3<u32>(61029u, u_input.d.x, 41200u), select(vec3<bool>(false, var_0.c.a, true), vec3<bool>(true, var_0.c.a, false), false)), firstTrailingBit(~u_input.d)), abs(~(vec3<u32>(u_input.d.x, 4294967295u, u_input.d.x) >> (u_input.d % vec3<u32>(32u))))));
}

`;