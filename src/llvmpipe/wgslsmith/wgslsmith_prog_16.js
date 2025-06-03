export const input = [71,79,225,84,45,117,48,181,73,34,199,39,239,218,167,93,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [71,79,225,84,45,117,48,181,73,34,199,39,239,218,167,93,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[71,79,225,84,45,117,48,181,73,34,199,39,239,218,167,93]}
// Seed: 5963313275301514702

struct Struct_1 {
    a: vec2<f32>,
    b: f32,
    c: u32,
    d: vec4<f32>,
}

struct UniformBuffer {
    a: vec4<u32>,
}

struct StorageBuffer {
    a: i32,
    b: i32,
    c: f32,
    d: vec4<f32>,
    e: f32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<Struct_1, 25> = array<Struct_1, 25>(Struct_1(vec2<f32>(385f, -464f), -1174f, 19216u, vec4<f32>(1000f, -330f, 875f, -1067f)), Struct_1(vec2<f32>(-616f, -210f), -342f, 154288u, vec4<f32>(-2660f, -914f, 674f, -706f)), Struct_1(vec2<f32>(-1448f, -568f), 869f, 1u, vec4<f32>(1000f, -1750f, 220f, 1080f)), Struct_1(vec2<f32>(862f, -563f), 1417f, 0u, vec4<f32>(2317f, -1915f, 151f, -905f)), Struct_1(vec2<f32>(111f, -258f), -1038f, 6513u, vec4<f32>(625f, 992f, -441f, -1843f)), Struct_1(vec2<f32>(-1728f, -974f), 1528f, 12260u, vec4<f32>(404f, -1344f, 492f, -719f)), Struct_1(vec2<f32>(-538f, -558f), -1064f, 1u, vec4<f32>(-1000f, 231f, -129f, -1000f)), Struct_1(vec2<f32>(1397f, 627f), -1626f, 77227u, vec4<f32>(-470f, 1000f, -171f, -492f)), Struct_1(vec2<f32>(920f, 245f), 943f, 27166u, vec4<f32>(239f, -993f, -815f, 1781f)), Struct_1(vec2<f32>(485f, -326f), -124f, 0u, vec4<f32>(-708f, 556f, -1286f, 750f)), Struct_1(vec2<f32>(1000f, 997f), 1267f, 4294967295u, vec4<f32>(484f, 474f, -131f, -159f)), Struct_1(vec2<f32>(-1237f, 226f), -1312f, 5728u, vec4<f32>(-2015f, 1000f, 532f, -134f)), Struct_1(vec2<f32>(1000f, 680f), 439f, 4294967295u, vec4<f32>(-258f, 1113f, 615f, 1064f)), Struct_1(vec2<f32>(828f, -201f), -2059f, 47476u, vec4<f32>(472f, 854f, -275f, 1000f)), Struct_1(vec2<f32>(1000f, 671f), -344f, 22450u, vec4<f32>(-1825f, -730f, -1150f, 750f)), Struct_1(vec2<f32>(-1579f, 1171f), 1041f, 25504u, vec4<f32>(-1040f, 298f, -476f, -1583f)), Struct_1(vec2<f32>(-1522f, 1268f), -273f, 0u, vec4<f32>(-1000f, -356f, -458f, 157f)), Struct_1(vec2<f32>(-912f, 1000f), -1634f, 0u, vec4<f32>(1435f, -250f, 937f, -1206f)), Struct_1(vec2<f32>(938f, 885f), 1439f, 1u, vec4<f32>(-848f, -337f, -991f, -1277f)), Struct_1(vec2<f32>(-812f, 916f), 1843f, 0u, vec4<f32>(-1000f, -205f, -796f, 351f)), Struct_1(vec2<f32>(-614f, -834f), 394f, 1u, vec4<f32>(-1000f, 1000f, 936f, 178f)), Struct_1(vec2<f32>(752f, 1160f), 1000f, 65918u, vec4<f32>(1002f, -261f, 964f, -161f)), Struct_1(vec2<f32>(1530f, -121f), 135f, 0u, vec4<f32>(801f, 476f, -1237f, -1000f)), Struct_1(vec2<f32>(731f, -211f), -390f, 1u, vec4<f32>(1616f, 233f, 1155f, 1555f)), Struct_1(vec2<f32>(-1515f, -1048f), -682f, 77776u, vec4<f32>(1061f, 934f, 124f, 1272f)));

var<private> global1: vec2<u32>;

var<private> global2: array<Struct_1, 11>;

var<private> global3: vec2<u32>;

var<private> global4: array<Struct_1, 25> = array<Struct_1, 25>(Struct_1(vec2<f32>(-1419f, -1308f), -236f, 1u, vec4<f32>(-883f, -1647f, -931f, 1000f)), Struct_1(vec2<f32>(-1023f, 1016f), -1298f, 4294967295u, vec4<f32>(1616f, 1239f, -854f, 1146f)), Struct_1(vec2<f32>(-1607f, -564f), -1815f, 0u, vec4<f32>(1000f, -1000f, 231f, 1352f)), Struct_1(vec2<f32>(949f, 264f), -583f, 56272u, vec4<f32>(603f, -131f, 924f, -696f)), Struct_1(vec2<f32>(-405f, -1284f), 133f, 0u, vec4<f32>(-819f, 661f, -683f, 738f)), Struct_1(vec2<f32>(-1499f, 1141f), -649f, 0u, vec4<f32>(-381f, 1000f, -1036f, 817f)), Struct_1(vec2<f32>(-2005f, 175f), 494f, 3159u, vec4<f32>(963f, -448f, -1891f, 480f)), Struct_1(vec2<f32>(960f, -936f), -1189f, 2695u, vec4<f32>(1666f, 662f, 426f, -768f)), Struct_1(vec2<f32>(888f, -709f), -1064f, 4294967295u, vec4<f32>(-438f, -597f, -1000f, 1000f)), Struct_1(vec2<f32>(1239f, -248f), 1000f, 15216u, vec4<f32>(-1401f, 1000f, 1087f, -302f)), Struct_1(vec2<f32>(3065f, -429f), 511f, 4294967295u, vec4<f32>(185f, -641f, 2380f, 1449f)), Struct_1(vec2<f32>(2971f, 207f), 1997f, 0u, vec4<f32>(-362f, -203f, 884f, 1000f)), Struct_1(vec2<f32>(1138f, 1645f), -277f, 5990u, vec4<f32>(-885f, -1000f, 661f, 373f)), Struct_1(vec2<f32>(1000f, 1000f), 364f, 0u, vec4<f32>(916f, -1000f, -1016f, 1562f)), Struct_1(vec2<f32>(-1170f, -440f), -1027f, 1u, vec4<f32>(-427f, -431f, 128f, 189f)), Struct_1(vec2<f32>(1365f, 1552f), 616f, 0u, vec4<f32>(-1713f, -1000f, -173f, -595f)), Struct_1(vec2<f32>(1510f, 1642f), -1034f, 59633u, vec4<f32>(1000f, -886f, 1752f, -300f)), Struct_1(vec2<f32>(-350f, -822f), 1566f, 21782u, vec4<f32>(551f, 2138f, 1548f, 305f)), Struct_1(vec2<f32>(2257f, -131f), -1057f, 39350u, vec4<f32>(-253f, 646f, -100f, -577f)), Struct_1(vec2<f32>(-842f, -1000f), 1000f, 24802u, vec4<f32>(1207f, -964f, 198f, 550f)), Struct_1(vec2<f32>(1307f, 221f), -208f, 1u, vec4<f32>(-722f, 960f, -479f, -592f)), Struct_1(vec2<f32>(164f, 2317f), 1854f, 1u, vec4<f32>(502f, -126f, 1000f, -426f)), Struct_1(vec2<f32>(-218f, 328f), -901f, 0u, vec4<f32>(1616f, -1000f, 599f, -1331f)), Struct_1(vec2<f32>(274f, -523f), -709f, 4294967295u, vec4<f32>(1342f, 740f, 1188f, 193f)), Struct_1(vec2<f32>(1003f, 1629f), 1339f, 6751u, vec4<f32>(-766f, 481f, 1748f, 1774f)));

var<private> LOOP_COUNTERS: array<u32, 32>;

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn func_6(arg_0: Struct_1, arg_1: u32, arg_2: Struct_1) -> vec4<i32> {
    global3 = ~(~vec2<u32>(select(_wgslsmith_dot_vec3_u32(u_input.a.xzz, u_input.a.zzx), firstLeadingBit(7316u), true), 71080u));
    let var_0 = _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -216f), arg_0.d.x));
    global2 = array<Struct_1, 11>();
    global1 = min(max(u_input.a.xz, ~vec2<u32>(_wgslsmith_dot_vec3_u32(u_input.a.wxx, vec3<u32>(77919u, 44280u, 1u)), arg_2.c >> (4294967295u % 32u))), select(~(~u_input.a.wy), _wgslsmith_sub_vec2_u32(u_input.a.ww, _wgslsmith_div_vec2_u32(vec2<u32>(u_input.a.x, 2517u) & u_input.a.zy, vec2<u32>(arg_2.c, arg_0.c))), false));
    global1 = _wgslsmith_mult_vec2_u32(u_input.a.zz, reverseBits(u_input.a.xy));
    return -vec4<i32>(firstLeadingBit(~(-39975i)), ~(-1i), i32(-1i) * -47617i, _wgslsmith_dot_vec2_i32(-vec2<i32>(0i, 1i) << (~u_input.a.zx % vec2<u32>(32u)), vec2<i32>(reverseBits(5339i), _wgslsmith_div_i32(10806i, -15837i))));
}

fn func_5(arg_0: Struct_1, arg_1: f32, arg_2: bool) -> u32 {
    switch (firstTrailingBit(-(~_wgslsmith_dot_vec4_i32(func_6(Struct_1(arg_0.d.xx, arg_1, global3.x, vec4<f32>(arg_1, -1170f, 1000f, arg_1)), u_input.a.x, global2[_wgslsmith_index_u32(4294967295u, 11u)]), vec4<i32>(1i, 1i, 1i, 1i))))) {
        default: {
            let var_0 = 14127u;
            loop {
                if (LOOP_COUNTERS[0u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
                var var_1 = global2[_wgslsmith_index_u32(firstTrailingBit(arg_0.c), 11u)];
                var var_2 = arg_0;
                var var_3 = arg_0;
                var_2 = Struct_1(_wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(770f, var_3.a.x))) * _wgslsmith_f_op_vec2_f32(max(_wgslsmith_f_op_vec2_f32(sign(var_1.d.wx)), var_1.a))), _wgslsmith_f_op_vec2_f32(var_3.d.xy * _wgslsmith_f_op_vec2_f32(-vec2<f32>(var_2.d.x, -878f))), select(!(!vec2<bool>(arg_2, true)), vec2<bool>(true, true), !vec2<bool>(arg_2, false)))), var_2.b, abs(_wgslsmith_add_u32(_wgslsmith_clamp_u32(~45965u, 0u, ~593u), var_0)), _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(sign(var_1.b)), _wgslsmith_f_op_f32(-572f * 1000f), _wgslsmith_f_op_f32(f32(-1f) * -525f), -1181f)), _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(abs(_wgslsmith_div_vec4_f32(vec4<f32>(1182f, -128f, arg_0.b, 878f), arg_0.d))), vec4<f32>(-1000f, _wgslsmith_f_op_f32(sign(var_1.d.x)), _wgslsmith_f_op_f32(var_2.d.x - arg_1), arg_1), any(select(vec4<bool>(true, true, arg_2, false), vec4<bool>(arg_2, arg_2, arg_2, arg_2), arg_2))))));
                let var_4 = select(!arg_2, arg_2, true);
            }
            let var_1 = any(select(vec3<bool>(arg_2, false, all(vec3<bool>(false, true, true))), !vec3<bool>(!arg_2, any(vec2<bool>(arg_2, arg_2)), any(vec3<bool>(true, arg_2, false))), 1u == ~_wgslsmith_clamp_u32(arg_0.c, var_0, 0u)));
        }
    }
    global3 = vec2<u32>(58858u, ~(~firstLeadingBit(0u & global1.x)));
    var var_0 = _wgslsmith_mult_u32(~(min(1u, _wgslsmith_sub_u32(arg_0.c, 12649u)) ^ ~_wgslsmith_add_u32(arg_0.c, u_input.a.x)), 4294967295u);
    switch (-972i) {
        default: {
            if (true) {
                var var_1 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(2788f, 173f, -1435f, -394f)) - _wgslsmith_f_op_vec4_f32(exp2(arg_0.d))))) * arg_0.d);
            }
            global4 = array<Struct_1, 25>();
            let var_1 = !all(select(vec3<bool>(true, true, !arg_2), select(vec3<bool>(true, true, true), vec3<bool>(false, false, arg_2), true), vec3<bool>(arg_2, !arg_2, arg_2)));
        }
    }
    if (!(!arg_2)) {
        if (any(!vec4<bool>(true, false, !all(vec3<bool>(true, true, arg_2)), true))) {
            var var_1 = Struct_1(_wgslsmith_f_op_vec2_f32(floor(vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_0.b)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(939f)))))), _wgslsmith_f_op_f32(-1527f), _wgslsmith_add_u32(global1.x, _wgslsmith_sub_u32(4294967295u, 0u << ((u_input.a.x >> (1u % 32u)) % 32u))), vec4<f32>(arg_1, _wgslsmith_f_op_f32(-298f), _wgslsmith_f_op_f32(select(arg_1, _wgslsmith_div_f32(_wgslsmith_f_op_f32(max(arg_1, -324f)), 1087f), _wgslsmith_f_op_f32(430f - -1096f) >= _wgslsmith_f_op_f32(-arg_0.b))), -758f));
            let var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(-1089f), var_1.d.x)));
        }
        let var_1 = vec2<i32>(-1i) * -vec2<i32>(2147483647i, countOneBits(select(-5075i, i32(-2147483648), false)));
    }
    return countOneBits(_wgslsmith_add_u32(55666u, global3.x));
}

fn func_4(arg_0: i32, arg_1: vec3<i32>) -> vec2<u32> {
    switch (~(-41235i)) {
        case -1i: {
            for (var var_0 = 2147483647i; ; var_0 -= 1i) {
                if (LOOP_COUNTERS[1u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
                let var_1 = vec3<u32>(reverseBits(firstTrailingBit(~reverseBits(1u))), func_5(global4[_wgslsmith_index_u32(1u, 25u)], 915f, true), u_input.a.x);
                global1 = ~_wgslsmith_add_vec2_u32(select(~vec2<u32>(0u, u_input.a.x), ~(~vec2<u32>(1u, global1.x)), vec2<bool>(true, true)), ~select(vec2<u32>(global1.x, 23018u), u_input.a.zx, vec2<bool>(true, false)) ^ _wgslsmith_add_vec2_u32(_wgslsmith_clamp_vec2_u32(var_1.zy, vec2<u32>(49805u, global3.x), var_1.yy), abs(var_1.zx)));
                global2 = array<Struct_1, 11>();
            }
            var var_0 = _wgslsmith_sub_u32(1u, global3.x);
            for (var var_1 = -31324i; !all(!(!select(vec4<bool>(false, true, false, true), vec4<bool>(true, true, true, false), false))); var_1 -= 1i) {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
                var var_2 = Struct_1(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(1f, 1f))), _wgslsmith_f_op_f32(-673f), reverseBits(~1u), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(-vec4<f32>(722f, -1445f, 1106f, -1106f)), vec4<f32>(_wgslsmith_f_op_f32(-502f), _wgslsmith_f_op_f32(-248f), _wgslsmith_f_op_f32(trunc(-1000f)), _wgslsmith_f_op_f32(step(597f, 456f)))))));
                continue;
            }
            if (select(all(select(select(vec4<bool>(true, true, false, true), vec4<bool>(false, false, true, false), vec4<bool>(false, false, true, false)), vec4<bool>(true, true, true, true), true)), arg_0 <= countOneBits(_wgslsmith_dot_vec2_i32(~arg_1.yx, vec2<i32>(arg_1.x, arg_1.x))), any(vec4<bool>(true, true, true, true)))) {
                var var_1 = firstLeadingBit(~4294967295u) ^ u_input.a.x;
            }
        }
        case 1i: {
        }
        case -30155i: {
        }
        default: {
            var var_0 = u_input.a;
            let var_1 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(1000f * -241f)), _wgslsmith_f_op_f32(min(447f, -1000f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1004f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(293f - 246f))) + vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -1000f) * _wgslsmith_f_op_f32(f32(-1f) * -280f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-669f + 365f)), _wgslsmith_f_op_f32(-336f + 733f), 1f)) * vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(1251f))) + _wgslsmith_div_f32(_wgslsmith_f_op_f32(-485f), _wgslsmith_f_op_f32(f32(-1f) * -912f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-978f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-122f))) + _wgslsmith_f_op_f32(-711f)), _wgslsmith_f_op_f32(ceil(727f))));
            var var_2 = 921f;
            global0 = array<Struct_1, 25>();
        }
    }
    let var_0 = global0[_wgslsmith_index_u32(u_input.a.x, 25u)];
    if (!(var_0.c < func_5(Struct_1(vec2<f32>(-108f, -737f), var_0.b, global1.x, vec4<f32>(-1618f, var_0.b, var_0.b, -1000f)), 1844f, false)) | !(_wgslsmith_add_i32(firstLeadingBit(-33353i), abs(arg_0)) == _wgslsmith_dot_vec4_i32(_wgslsmith_clamp_vec4_i32(vec4<i32>(-30629i, arg_1.x, arg_1.x, 7714i), vec4<i32>(1i, -26431i, arg_1.x, 15430i), vec4<i32>(arg_1.x, arg_0, -6015i, -57549i)), vec4<i32>(arg_0, i32(-2147483648), -1205i, -2145i)))) {
        var var_1 = Struct_1(var_0.a, -387f, global3.x, var_0.d);
        var var_2 = func_5(global2[_wgslsmith_index_u32(~_wgslsmith_mod_u32(~(0u >> (1u % 32u)), abs(~global3.x)), 11u)], 784f, true);
    }
    switch (-19413i) {
        case 2147483647i: {
            var var_1 = arg_1;
            var_1 = select(abs(reverseBits(-arg_1)), arg_1, !vec3<bool>(true, 0u >= global3.x, true)) | arg_1;
            loop {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
                var_1 = ~select(arg_1, arg_1, !(!select(vec3<bool>(false, false, true), vec3<bool>(false, true, true), true)));
            }
            var var_2 = Struct_1(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(max(_wgslsmith_f_op_vec2_f32(exp2(vec2<f32>(var_0.a.x, var_0.b))), _wgslsmith_f_op_vec2_f32(-vec2<f32>(var_0.b, var_0.d.x))))) - _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(exp2(var_0.d.wx))))), 558f, _wgslsmith_div_u32(_wgslsmith_add_u32(38753u, ~(4294967295u >> (u_input.a.x % 32u))), global1.x), _wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(min(vec4<f32>(-317f, 743f, -363f, -900f), _wgslsmith_f_op_vec4_f32(vec4<f32>(825f, var_0.d.x, var_0.d.x, var_0.d.x) + vec4<f32>(-867f, 597f, var_0.a.x, 382f)))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(-790f, var_0.a.x, 104f, -1000f) * vec4<f32>(644f, var_0.d.x, var_0.b, var_0.b)))) + vec4<f32>(_wgslsmith_f_op_f32(var_0.b + _wgslsmith_f_op_f32(ceil(var_0.d.x))), _wgslsmith_f_op_f32(select(var_0.b, var_0.d.x, any(vec4<bool>(true, false, true, true)))), var_0.a.x, _wgslsmith_f_op_f32(-var_0.d.x))));
        }
        case -3594i: {
            let var_1 = select(!vec4<bool>(true, !(global3.x >= 2040u), true, true), vec4<bool>(any(vec2<bool>(select(true, true, false), true)), true, any(vec4<bool>(true, true, true, true)), true), true);
            switch (~1i) {
                case 7133i: {
                    global1 = _wgslsmith_clamp_vec2_u32(abs(u_input.a.zy), min(abs(firstTrailingBit(u_input.a.wy)), vec2<u32>(u_input.a.x, global1.x) << (vec2<u32>(_wgslsmith_dot_vec3_u32(u_input.a.www, u_input.a.wzy), abs(4294967295u)) % vec2<u32>(32u))), countOneBits(vec2<u32>(u_input.a.x, var_0.c >> (~1u % 32u))));
                    global2 = array<Struct_1, 11>();
                    global1 = vec2<u32>(_wgslsmith_mod_u32(~countOneBits(0u), _wgslsmith_dot_vec4_u32(max(u_input.a, vec4<u32>(55260u, 23107u, u_input.a.x, global1.x)), firstTrailingBit(vec4<u32>(global3.x, 1u, 1u, global3.x)))), var_0.c) | u_input.a.zy;
                    return vec2<u32>(4294967295u, _wgslsmith_div_u32(func_5(Struct_1(vec2<f32>(-193f, -236f), _wgslsmith_f_op_f32(-var_0.a.x), 1u, vec4<f32>(1661f, -1572f, var_0.a.x, -1000f)), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-var_0.b), _wgslsmith_f_op_f32(f32(-1f) * -186f)), var_1.x), _wgslsmith_dot_vec4_u32(abs(u_input.a | u_input.a), ~firstLeadingBit(vec4<u32>(global3.x, global1.x, u_input.a.x, 12469u)))));
                }
                case 10719i: {
                    let var_2 = global4[_wgslsmith_index_u32(_wgslsmith_add_u32(u_input.a.x, 0u), 25u)];
                    global1 = vec2<u32>(1u, 0u);
                    var var_3 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(var_2.d.x + var_2.a.x))) * _wgslsmith_f_op_f32(-632f + _wgslsmith_f_op_f32(abs(var_2.b)))))));
                }
                default: {
                }
            }
        }
        default: {
            if (all(vec3<bool>(true, true, true)) || true) {
                var var_1 = Struct_1(vec2<f32>(var_0.b, _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(sign(-586f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_0.d.x) * 818f)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(1372f)) - 1f) * var_0.a.x) * _wgslsmith_div_f32(var_0.d.x, _wgslsmith_f_op_f32(min(407f, var_0.a.x)))), u_input.a.x, _wgslsmith_f_op_vec4_f32(-var_0.d));
                let var_2 = _wgslsmith_dot_vec4_i32(vec4<i32>(arg_1.x, _wgslsmith_add_i32(abs(0i), 12124i), arg_1.x, -37689i), abs(_wgslsmith_mod_vec4_i32(vec4<i32>(~arg_0, max(arg_0, arg_1.x), _wgslsmith_dot_vec4_i32(vec4<i32>(arg_0, i32(-2147483648), 2147483647i, arg_0), vec4<i32>(1i, 2147483647i, arg_1.x, -61615i)), _wgslsmith_mod_i32(arg_0, arg_0)), -vec4<i32>(13060i, i32(-2147483648), 2147483647i, -1i))));
                let var_3 = Struct_1(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-555f, var_0.b)) + _wgslsmith_f_op_vec2_f32(-vec2<f32>(-195f, var_0.d.x))), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(select(vec2<f32>(var_0.d.x, var_0.d.x), var_0.d.xy, false)) - _wgslsmith_f_op_vec2_f32(-vec2<f32>(var_1.a.x, -509f))), true)) * vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-434f * -1000f)), var_0.a.x)), var_0.a.x, firstLeadingBit(global3.x), vec4<f32>(_wgslsmith_f_op_f32(ceil(942f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(trunc(162f)), var_1.d.x))), _wgslsmith_f_op_f32(select(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-796f), _wgslsmith_f_op_f32(-867f + var_0.d.x)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(594f, -503f, false))), true)), var_0.a.x));
            }
            switch (countOneBits(21069i)) {
                case 1i: {
                    var var_1 = Struct_1(_wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1362f + 1057f)), _wgslsmith_div_f32(_wgslsmith_div_f32(146f, var_0.a.x), var_0.a.x)) + _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(min(var_0.d.wz, var_0.a))))), 478f, _wgslsmith_dot_vec3_u32(abs(vec3<u32>(1u, global3.x, ~4294967295u)), u_input.a.zxw), var_0.d);
                    return _wgslsmith_sub_vec2_u32(select(vec2<u32>(0u, firstTrailingBit(var_1.c)), ~(vec2<u32>(u_input.a.x, u_input.a.x) << (_wgslsmith_clamp_vec2_u32(u_input.a.wx, u_input.a.wz, u_input.a.yy) % vec2<u32>(32u))), true), abs(~u_input.a.zw) >> (vec2<u32>(1u, ~countOneBits(1u)) % vec2<u32>(32u)));
                }
                case -20045i: {
                    var var_1 = Struct_1(var_0.d.zw, _wgslsmith_f_op_f32(-var_0.d.x), 61578u, _wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-544f) + _wgslsmith_f_op_f32(f32(-1f) * -1000f)), 2512f, _wgslsmith_div_f32(var_0.d.x, 1912f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_0.a.x) - 1f)))));
                    var var_2 = _wgslsmith_f_op_vec4_f32(max(var_1.d, _wgslsmith_f_op_vec4_f32(var_1.d + _wgslsmith_f_op_vec4_f32(vec4<f32>(-1000f, _wgslsmith_f_op_f32(min(-1000f, 1099f)), _wgslsmith_f_op_f32(min(var_1.a.x, -382f)), _wgslsmith_f_op_f32(step(var_1.b, 2325f))) * _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(round(vec4<f32>(var_0.a.x, -257f, var_1.a.x, 306f))), vec4<f32>(var_0.d.x, 578f, var_0.b, var_1.d.x))))));
                }
                case -13895i: {
                    var var_1 = Struct_1(_wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(select(vec2<f32>(var_0.b, _wgslsmith_f_op_f32(ceil(-1145f))), _wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(abs(vec2<f32>(var_0.a.x, var_0.d.x))), _wgslsmith_f_op_vec2_f32(floor(var_0.a)))), true)), vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(2221f, var_0.b, false)) + -621f), 1589f), vec2<bool>(true, true))), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_0.d.x)) + _wgslsmith_f_op_f32(f32(-1f) * -1034f)), _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(f32(-1f) * -982f))), all(!select(vec3<bool>(false, true, false), vec3<bool>(false, true, false), false)))), 34337u, var_0.d);
                    global2 = array<Struct_1, 11>();
                    var_1 = Struct_1(vec2<f32>(_wgslsmith_f_op_f32(var_0.a.x + -671f), var_1.a.x), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(floor(var_1.b))))), 0u << (~(~var_1.c & ~u_input.a.x) % 32u), _wgslsmith_f_op_vec4_f32(exp2(vec4<f32>(297f, _wgslsmith_f_op_f32(var_1.d.x - -2657f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_1.b)), -555f))));
                    let var_2 = ~u_input.a.x != 59370u;
                }
                case i32(-2147483648): {
                    let var_1 = _wgslsmith_div_vec4_u32(u_input.a, u_input.a ^ reverseBits(~vec4<u32>(global1.x, global3.x, global1.x, global3.x)));
                    var var_2 = vec2<u32>(min(~min(~38859u, var_1.x << (var_1.x % 32u)), ~(~109788u)), abs(1u));
                    let var_3 = _wgslsmith_f_op_f32(select(var_0.b, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(1034f, _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(select(var_0.b, var_0.b, false))))))), all(vec3<bool>(_wgslsmith_f_op_f32(-var_0.a.x) <= _wgslsmith_f_op_f32(exp2(var_0.a.x)), true, all(vec4<bool>(true, true, true, true))))));
                    var_2 = vec2<u32>(99894u, countOneBits(4294967295u));
                }
                default: {
                    global1 = firstLeadingBit(countOneBits(~vec2<u32>(select(23339u, 57438u, true), ~0u)));
                    var var_1 = global2[_wgslsmith_index_u32(~global1.x, 11u)];
                    let var_2 = Struct_1(_wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(-1000f, -1737f) - var_0.d.zz) * var_1.a))), _wgslsmith_f_op_f32(-2328f * _wgslsmith_f_op_f32(-242f)), _wgslsmith_mod_u32(~(~global1.x) >> (abs(var_1.c) % 32u), _wgslsmith_mod_u32(12568u ^ select(var_1.c, 4294967295u, false), global3.x)), vec4<f32>(_wgslsmith_f_op_f32(-var_0.d.x), _wgslsmith_div_f32(var_1.a.x, -615f), var_1.b, 1272f));
                }
            }
            global0 = array<Struct_1, 25>();
            for (var var_1 = -1i; !(max(global1.x, select(2207u >> (u_input.a.x % 32u), global3.x, false)) <= global1.x); ) {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                continue;
            }
            var var_1 = arg_1.x;
        }
    }
    for (var var_1 = -27071i; arg_1.x < 0i; global2 = array<Struct_1, 11>()) {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        return vec2<u32>(var_0.c, 7581u);
    }
    return ~(~firstTrailingBit(vec2<u32>(_wgslsmith_dot_vec4_u32(u_input.a, u_input.a), u_input.a.x)));
}

fn func_3(arg_0: Struct_1, arg_1: vec2<f32>) -> vec2<f32> {
    var var_0 = global0[_wgslsmith_index_u32(global3.x, 25u)];
    global3 = abs(firstLeadingBit(~u_input.a.zy));
    loop {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        var var_1 = _wgslsmith_dot_vec2_u32(_wgslsmith_clamp_vec2_u32(func_4(_wgslsmith_dot_vec4_i32(firstTrailingBit(vec4<i32>(1i, -1i, -63874i, 2147483647i)), firstTrailingBit(vec4<i32>(1i, -34168i, -36222i, 19028i))), vec3<i32>(1i, 1i, 1i)), vec2<u32>(u_input.a.x, u_input.a.x), ~firstLeadingBit(u_input.a.yw)), ~(~vec2<u32>(global3.x, u_input.a.x)));
    }
    for (; ((~func_6(global4[_wgslsmith_index_u32(arg_0.c, 25u)], global1.x, arg_0).x ^ (~2147483647i << (abs(global3.x) % 32u))) < (i32(-1i) * -52475i)) | true; ) {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        global2 = array<Struct_1, 11>();
        for (var var_1 = 0i; ; var_1 -= 1i) {
            if (LOOP_COUNTERS[8u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
            global2 = array<Struct_1, 11>();
            break;
        }
    }
    var var_1 = true;
    return _wgslsmith_div_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(min(arg_1.x, 373f)))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_1.x))), _wgslsmith_f_op_vec2_f32(_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(var_0.a + arg_0.a) - vec2<f32>(1337f, var_0.d.x)), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-var_0.a))) + _wgslsmith_f_op_vec2_f32(max(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(-554f, arg_1.x))) - vec2<f32>(arg_0.a.x, var_0.b)), vec2<f32>(_wgslsmith_f_op_f32(sign(arg_0.a.x)), -273f)))));
}

fn func_7(arg_0: Struct_1, arg_1: u32, arg_2: vec2<f32>) -> u32 {
    let var_0 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(exp2(arg_0.d.yxy)) - _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(min(vec3<f32>(arg_0.d.x, arg_2.x, -1960f), vec3<f32>(arg_2.x, -849f, 204f))), _wgslsmith_f_op_vec3_f32(step(vec3<f32>(1125f, arg_0.b, arg_2.x), vec3<f32>(arg_2.x, 185f, arg_0.d.x))))), _wgslsmith_f_op_vec3_f32(floor(arg_0.d.xyy)))));
    for (var var_1 = 8004i; all(vec4<bool>(true, true, true, true)); ) {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        let var_2 = _wgslsmith_mod_i32(-1035i, _wgslsmith_mod_i32(2147483647i << (func_4(2147483647i, vec3<i32>(1492i, 20674i, 2147483647i)).x % 32u), func_6(arg_0, global1.x >> (u_input.a.x % 32u), global2[_wgslsmith_index_u32(countOneBits(arg_0.c), 11u)]).x) | (i32(-1i) * -1i));
        var var_3 = abs(~(_wgslsmith_clamp_vec4_i32(vec4<i32>(i32(-2147483648), 1i, 0i, var_2), vec4<i32>(var_2, var_2, var_2, var_2) & vec4<i32>(1810i, 0i, -20846i, -25246i), select(vec4<i32>(-1i, var_2, -21128i, 0i), vec4<i32>(var_2, var_2, 9340i, 1i), vec4<bool>(true, true, true, true))) ^ max(_wgslsmith_mod_vec4_i32(vec4<i32>(19590i, var_2, var_2, var_2), vec4<i32>(3844i, var_2, -16111i, 1i)), vec4<i32>(var_2, 50072i, var_2, 20745i) >> (vec4<u32>(arg_1, global3.x, global3.x, 4294967295u) % vec4<u32>(32u)))));
    }
    switch (abs(i32(-2147483648))) {
        case -19345i: {
        }
        case 1i: {
            for (var var_1 = -41575i; var_1 != 37229i; var_1 += 1i) {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                var var_2 = true;
                let var_3 = global4[_wgslsmith_index_u32(~firstLeadingBit(_wgslsmith_mult_u32(~arg_0.c, 32021u)), 25u)];
                var_1 = -(~(-((i32(-1i) * -4399i) | _wgslsmith_clamp_i32(1i, -23585i, -56047i))));
            }
            var var_1 = select(vec3<u32>(~min(4294967295u, arg_1) >> ((~arg_0.c | 0u) % 32u), 18656u, arg_0.c), min(u_input.a.wzz, countOneBits(vec3<u32>(4294967295u, global1.x, 55044u)) & select(vec3<u32>(70028u, arg_1, 2668u) << (u_input.a.yxx % vec3<u32>(32u)), ~u_input.a.wzw, vec3<bool>(true, true, true))), false);
            var var_2 = Struct_1(var_0.xy, _wgslsmith_f_op_f32(_wgslsmith_div_f32(1252f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(var_0.x, arg_0.a.x)) + _wgslsmith_f_op_f32(exp2(var_0.x)))) + _wgslsmith_f_op_vec2_f32(func_3(Struct_1(_wgslsmith_div_vec2_f32(vec2<f32>(arg_0.b, arg_2.x), var_0.zz), _wgslsmith_f_op_f32(f32(-1f) * -285f), arg_1, _wgslsmith_f_op_vec4_f32(step(arg_0.d, arg_0.d))), vec2<f32>(1f, 326f))).x), ~(~arg_1), _wgslsmith_f_op_vec4_f32(max(vec4<f32>(var_0.x, -1002f, _wgslsmith_f_op_f32(var_0.x - _wgslsmith_f_op_f32(arg_2.x * var_0.x)), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(arg_2.x - var_0.x)))), arg_0.d)));
        }
        case 2147483647i: {
            if (true) {
                let var_1 = Struct_1(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(abs(_wgslsmith_f_op_vec2_f32(-arg_2)))), -1611f, _wgslsmith_div_u32(~abs(global1.x), max(1u, global1.x)), _wgslsmith_f_op_vec4_f32(sign(arg_0.d)));
            }
            loop {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                break;
            }
        }
        default: {
            let var_1 = global0[_wgslsmith_index_u32(u_input.a.x, 25u)];
            var var_2 = var_1.d;
            var var_3 = countOneBits(firstLeadingBit(arg_0.c) | var_1.c);
            var var_4 = _wgslsmith_f_op_vec2_f32(-vec2<f32>(var_2.x, var_2.x));
        }
    }
    var var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_div_f32(arg_2.x, _wgslsmith_f_op_f32(f32(-1f) * -395f)) + 956f) + 516f));
    var var_2 = global3.x;
    return global3.x;
}

fn func_8(arg_0: u32, arg_1: vec4<u32>, arg_2: Struct_1) -> Struct_1 {
    global3 = vec2<u32>(~433u, _wgslsmith_dot_vec2_u32(_wgslsmith_clamp_vec2_u32(~vec2<u32>(global1.x, global3.x), _wgslsmith_sub_vec2_u32(~vec2<u32>(0u, arg_1.x), arg_1.wx), vec2<u32>(~1u, ~u_input.a.x)), abs(~(~vec2<u32>(arg_2.c, arg_0)))));
    global3 = u_input.a.yx;
    var var_0 = Struct_1(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(ceil(vec2<f32>(arg_2.d.x, -1100f))) + _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-arg_2.a)))), 1866f, arg_2.c, vec4<f32>(_wgslsmith_f_op_f32(-1273f * _wgslsmith_div_f32(-1026f, arg_2.a.x)), arg_2.a.x, _wgslsmith_f_op_f32(_wgslsmith_div_f32(arg_2.a.x, arg_2.d.x) * _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(exp2(arg_2.a.x))))), _wgslsmith_f_op_f32(1044f + _wgslsmith_f_op_f32(-arg_2.b))));
    global2 = array<Struct_1, 11>();
    if (true) {
        var var_1 = select(select(vec4<bool>(any(select(vec3<bool>(true, true, true), vec3<bool>(false, true, false), false)), true, all(vec3<bool>(true, false, false)), false), select(vec4<bool>(true, true, true, any(vec3<bool>(true, false, false))), select(select(vec4<bool>(false, false, false, false), vec4<bool>(false, false, false, true), false), vec4<bool>(true, true, true, true), any(vec4<bool>(true, true, true, false))), !all(vec4<bool>(true, false, true, true))), vec4<bool>(_wgslsmith_f_op_f32(max(1111f, var_0.b)) < _wgslsmith_f_op_f32(select(arg_2.a.x, var_0.b, true)), false, any(vec4<bool>(true, true, true, true)) | true, false)), !vec4<bool>(_wgslsmith_f_op_f32(select(-786f, arg_2.a.x, true)) <= _wgslsmith_f_op_f32(var_0.d.x + 1680f), true, all(vec2<bool>(true, false)), false), true);
        switch (i32(-1i) * -40314i) {
            default: {
                global3 = arg_1.zz;
                global2 = array<Struct_1, 11>();
                var var_2 = Struct_1(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(select(vec2<f32>(339f, arg_2.d.x), vec2<f32>(293f, -1169f), var_1.x))), vec2<f32>(_wgslsmith_f_op_f32(trunc(1000f)), -351f)))), 208f, 1u, _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(ceil(var_0.b)), _wgslsmith_f_op_f32(var_0.b * arg_2.a.x), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_2.a.x + var_0.a.x)), _wgslsmith_f_op_f32(-499f))));
                let var_3 = global0[_wgslsmith_index_u32(_wgslsmith_div_u32(global1.x, ~func_4(-(i32(-1i) * -1i), vec3<i32>(_wgslsmith_clamp_i32(i32(-2147483648), -1i, -22572i), -16839i, ~1i)).x), 25u)];
            }
        }
        var var_2 = 11560u;
        loop {
            if (LOOP_COUNTERS[12u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
            var var_3 = abs(-vec2<i32>(abs(62424i), max(~20964i, -2147483647i)));
        }
    }
    return Struct_1(vec2<f32>(_wgslsmith_f_op_f32(-250f), arg_2.a.x), var_0.a.x, _wgslsmith_sub_u32(~0u, ~3858u), _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-148f, var_0.d.x, -582f, arg_2.b)), var_0.d, select(vec4<bool>(true, false, false, false), vec4<bool>(true, false, false, false), vec4<bool>(true, false, true, true)))))), vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_2.a.x)), _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(floor(var_0.b)))), _wgslsmith_f_op_f32(798f * _wgslsmith_f_op_f32(-var_0.a.x)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_0.b) - _wgslsmith_div_f32(276f, -1000f)))));
}

fn func_2(arg_0: f32, arg_1: bool, arg_2: vec2<i32>, arg_3: u32) -> Struct_1 {
    var var_0 = func_8(_wgslsmith_mult_u32(global1.x, ~4294967295u), vec4<u32>(func_7(Struct_1(_wgslsmith_f_op_vec2_f32(func_3(global0[_wgslsmith_index_u32(u_input.a.x, 25u)], vec2<f32>(arg_0, arg_0))), _wgslsmith_f_op_f32(sign(arg_0)), ~u_input.a.x, vec4<f32>(1212f, 1665f, -790f, arg_0)), abs(_wgslsmith_div_u32(global1.x, global3.x)), _wgslsmith_f_op_vec2_f32(floor(vec2<f32>(313f, -111f)))), ~(~(~global3.x)), select(global1.x, func_5(global0[_wgslsmith_index_u32(1u, 25u)], arg_0, arg_1) >> (max(4294967295u, u_input.a.x) % 32u), any(select(vec4<bool>(arg_1, true, arg_1, arg_1), vec4<bool>(arg_1, true, arg_1, true), false))), 35233u), Struct_1(_wgslsmith_f_op_vec2_f32(-vec2<f32>(arg_0, _wgslsmith_f_op_f32(ceil(arg_0)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_div_f32(1548f, arg_0), _wgslsmith_f_op_f32(trunc(1000f))))), 0u, _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(824f, arg_0, -891f, -1244f))))), _wgslsmith_f_op_vec4_f32(max(_wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(284f, arg_0, arg_0, arg_0))), _wgslsmith_div_vec4_f32(vec4<f32>(arg_0, -152f, 765f, arg_0), vec4<f32>(1328f, 1788f, arg_0, 1000f)))), arg_1))));
    loop {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        return global2[_wgslsmith_index_u32(firstLeadingBit(~(~reverseBits(global3.x ^ global3.x))), 11u)];
    }
    switch (_wgslsmith_sub_i32(8390i, ~((_wgslsmith_add_i32(arg_2.x, arg_2.x) & _wgslsmith_mult_i32(arg_2.x, arg_2.x)) << ((var_0.c & firstTrailingBit(88160u)) % 32u)))) {
        case i32(-2147483648): {
            var var_1 = global0[_wgslsmith_index_u32(firstTrailingBit(func_7(Struct_1(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-1682f, -1836f)), _wgslsmith_f_op_f32(round(var_0.a.x)), _wgslsmith_div_u32(5533u, arg_3), var_0.d), func_8(global1.x & 10079u, ~u_input.a, global2[_wgslsmith_index_u32(min(global3.x, 4294967295u), 11u)]).c, _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-var_0.d.xw) + var_0.a))) << (_wgslsmith_add_u32(4294967295u, var_0.c) % 32u), 25u)];
            let var_2 = _wgslsmith_dot_vec2_i32(vec2<i32>(_wgslsmith_mod_i32(_wgslsmith_mod_i32(arg_2.x, arg_2.x) | 1i, _wgslsmith_add_i32(countOneBits(arg_2.x), arg_2.x)), -1i), ~arg_2);
            let var_3 = global2[_wgslsmith_index_u32(select(_wgslsmith_clamp_u32(~8449u, 22159u, min(~(1u ^ var_1.c), u_input.a.x)), ~0u, !(~var_2 >= 24293i)), 11u)];
            switch (i32(-2147483648)) {
                default: {
                    let var_4 = reverseBits(select(_wgslsmith_sub_vec2_i32(~arg_2, select(~vec2<i32>(-24190i, -11850i), vec2<i32>(arg_2.x, var_2), !vec2<bool>(arg_1, false))), arg_2, all(vec3<bool>(true, true, true))));
                    var var_5 = func_8(38425u, ~u_input.a, Struct_1(vec2<f32>(_wgslsmith_f_op_f32(var_3.d.x - -137f), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(ceil(918f)), _wgslsmith_f_op_f32(floor(var_1.d.x)), true))), var_3.a.x, max(~_wgslsmith_mult_u32(4294967295u, var_3.c), 7365u), _wgslsmith_f_op_vec4_f32(func_8(~4294967295u, vec4<u32>(arg_3, global3.x, var_3.c, 1u), global0[_wgslsmith_index_u32(global1.x, 25u)]).d * _wgslsmith_f_op_vec4_f32(var_3.d + _wgslsmith_div_vec4_f32(var_0.d, vec4<f32>(arg_0, 496f, var_0.b, -546f))))));
                    var_5 = func_8(func_4(-countOneBits(func_6(Struct_1(vec2<f32>(782f, 1000f), var_1.a.x, global1.x, var_5.d), var_0.c, Struct_1(vec2<f32>(var_1.a.x, var_0.a.x), var_3.d.x, arg_3, var_5.d)).x), ~vec3<i32>(-16639i, arg_2.x, arg_2.x)).x, vec4<u32>(_wgslsmith_dot_vec2_u32(u_input.a.xw, _wgslsmith_sub_vec2_u32(vec2<u32>(arg_3, 48343u), vec2<u32>(4294967295u, var_5.c))) >> (arg_3 % 32u), ~_wgslsmith_dot_vec3_u32(~u_input.a.yzz, u_input.a.xww), ~arg_3, countOneBits(firstTrailingBit(var_1.c) | arg_3)), Struct_1(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(var_5.d.x, 1000f))), -629f, var_0.c, _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(-var_1.d))) - var_5.d)));
                    var var_6 = Struct_1(_wgslsmith_f_op_vec2_f32(max(vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(1000f)) + var_1.b), -829f), _wgslsmith_f_op_vec2_f32(sign(var_3.a)))), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-var_1.b), _wgslsmith_f_op_f32(max(-775f, -425f)))) - _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-1000f)))), 1521f)), global3.x, vec4<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -901f), _wgslsmith_f_op_f32(ceil(2670f))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_div_f32(var_3.d.x, arg_0) - _wgslsmith_f_op_f32(1126f * var_3.d.x))), _wgslsmith_f_op_f32(-1457f), 803f));
                    var_6 = global4[_wgslsmith_index_u32(func_7(Struct_1(var_0.d.ww, _wgslsmith_f_op_f32(-1802f), func_7(Struct_1(_wgslsmith_f_op_vec2_f32(var_5.d.wx * vec2<f32>(var_5.b, -489f)), var_6.d.x, var_1.c >> (var_0.c % 32u), _wgslsmith_f_op_vec4_f32(vec4<f32>(arg_0, 1733f, 1000f, var_6.a.x) + vec4<f32>(-389f, 1850f, var_0.b, arg_0))), abs(~30900u), _wgslsmith_f_op_vec2_f32(sign(_wgslsmith_f_op_vec2_f32(-var_5.a)))), vec4<f32>(-564f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1213f) * _wgslsmith_f_op_f32(f32(-1f) * -1494f)), var_1.b, _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-906f + var_3.a.x))))), var_3.c, _wgslsmith_f_op_vec2_f32(step(_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-560f, -608f)) + _wgslsmith_f_op_vec2_f32(-vec2<f32>(503f, var_0.d.x))), _wgslsmith_f_op_vec2_f32(-vec2<f32>(143f, -1522f))), var_3.a))), 25u)];
                }
            }
            global2 = array<Struct_1, 11>();
        }
        case -19927i: {
            if (true) {
                var var_1 = all(select(select(vec2<bool>(true, true), select(!vec2<bool>(arg_1, arg_1), vec2<bool>(true, true), select(vec2<bool>(false, false), vec2<bool>(arg_1, arg_1), vec2<bool>(false, arg_1))), arg_1), select(vec2<bool>(all(vec4<bool>(false, true, true, false)), any(vec2<bool>(false, arg_1))), vec2<bool>(arg_1, true), !(arg_3 < 31433u)), select(select(!vec2<bool>(arg_1, arg_1), vec2<bool>(true, true), true), select(select(vec2<bool>(true, true), vec2<bool>(true, arg_1), arg_1), !vec2<bool>(arg_1, false), vec2<bool>(true, arg_1)), false)));
                let var_2 = ~_wgslsmith_clamp_vec4_i32(-(~(vec4<i32>(arg_2.x, arg_2.x, arg_2.x, 26608i) >> (u_input.a % vec4<u32>(32u)))), ~(-func_6(global0[_wgslsmith_index_u32(47605u, 25u)], arg_3, Struct_1(var_0.d.zx, 1340f, var_0.c, var_0.d))), vec4<i32>(1i, _wgslsmith_clamp_i32(_wgslsmith_mod_i32(16312i, arg_2.x), arg_2.x, min(arg_2.x, -54i)), ~_wgslsmith_dot_vec3_i32(vec3<i32>(73922i, 1i, arg_2.x), vec3<i32>(27139i, arg_2.x, 28856i)), -1i));
                let var_3 = abs(-(~vec2<i32>(_wgslsmith_add_i32(33422i, 23590i), var_2.x)));
            }
            var var_1 = global0[_wgslsmith_index_u32(~firstLeadingBit(14632u), 25u)];
            if (any(vec2<bool>(all(select(select(vec3<bool>(arg_1, arg_1, arg_1), vec3<bool>(true, arg_1, true), vec3<bool>(true, true, arg_1)), !vec3<bool>(true, true, arg_1), !vec3<bool>(false, false, arg_1))), arg_1))) {
                let var_2 = global4[_wgslsmith_index_u32(min(45951u, ~func_7(global4[_wgslsmith_index_u32(var_1.c, 25u)], ~var_0.c, var_0.a)) | (_wgslsmith_add_u32(max(~1u, 1u), _wgslsmith_add_u32(~2593u, _wgslsmith_clamp_u32(23848u, 1u, var_0.c))) | var_1.c), 25u)];
                global0 = array<Struct_1, 25>();
                var var_3 = global4[_wgslsmith_index_u32(global1.x, 25u)];
                var var_4 = select(_wgslsmith_mod_vec4_u32(u_input.a, u_input.a), countOneBits(_wgslsmith_clamp_vec4_u32(u_input.a, u_input.a, _wgslsmith_sub_vec4_u32(_wgslsmith_add_vec4_u32(vec4<u32>(21999u, 37120u, 80359u, var_0.c), u_input.a), vec4<u32>(var_0.c, var_0.c, global3.x, 5045u)))), !any(vec4<bool>(arg_1, true, arg_1, !arg_1)));
                var var_5 = func_8(var_0.c, vec4<u32>(countOneBits(70635u), var_0.c, 0u, 1u), func_8(0u, vec4<u32>(global3.x, 43109u, func_4(43247i << (var_3.c % 32u), _wgslsmith_add_vec3_i32(vec3<i32>(i32(-2147483648), 2147483647i, -11982i), vec3<i32>(arg_2.x, arg_2.x, arg_2.x))).x, abs(var_3.c) ^ 1u), Struct_1(var_2.a, _wgslsmith_f_op_f32(step(1184f, -1000f)), _wgslsmith_mult_u32(abs(4294967295u), arg_3), _wgslsmith_div_vec4_f32(vec4<f32>(var_2.d.x, -436f, -591f, 2076f), vec4<f32>(735f, var_2.d.x, 198f, var_1.d.x)))));
            }
            for (var var_2 = 63989i; true; var_2 += 1i) {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                global0 = array<Struct_1, 25>();
            }
        }
        case -41973i: {
            loop {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
                global2 = array<Struct_1, 11>();
                global3 = u_input.a.yy;
                continue;
            }
            if (true) {
                var_0 = global2[_wgslsmith_index_u32(global3.x, 11u)];
                var var_1 = any(select(select(select(vec4<bool>(false, arg_1, false, arg_1), !vec4<bool>(false, true, true, arg_1), !arg_1), !vec4<bool>(true, true, true, arg_1), select(select(vec4<bool>(true, arg_1, true, false), vec4<bool>(arg_1, arg_1, arg_1, arg_1), false), select(vec4<bool>(arg_1, true, false, true), vec4<bool>(arg_1, arg_1, arg_1, arg_1), vec4<bool>(arg_1, true, arg_1, true)), vec4<bool>(arg_1, arg_1, false, arg_1))), select(select(select(vec4<bool>(arg_1, false, arg_1, true), vec4<bool>(false, false, true, arg_1), vec4<bool>(false, arg_1, arg_1, arg_1)), select(vec4<bool>(arg_1, false, arg_1, false), vec4<bool>(arg_1, false, arg_1, arg_1), vec4<bool>(false, true, arg_1, arg_1)), vec4<bool>(arg_1, arg_1, false, false)), !(!vec4<bool>(true, true, arg_1, true)), true), !arg_1));
            }
            global1 = ~(~vec2<u32>(4294967295u, 4294967295u));
            if (true) {
                var var_1 = func_8(4294967295u >> ((reverseBits(1u) | ~(arg_3 << (arg_3 % 32u))) % 32u), ~vec4<u32>(4012u, _wgslsmith_mult_u32(u_input.a.x, arg_3 & arg_3), ~1u, 1u), global4[_wgslsmith_index_u32(global1.x, 25u)]);
            }
        }
        case 20905i: {
            let var_1 = false;
        }
        default: {
            switch (28140i) {
                case 37863i: {
                }
                case -14058i: {
                    var var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -209f));
                    var var_2 = func_8(func_7(Struct_1(var_0.a, func_8(_wgslsmith_div_u32(420u, 4294967295u), u_input.a ^ vec4<u32>(arg_3, arg_3, 25472u, 1u), Struct_1(vec2<f32>(-136f, -1183f), -1489f, 1u, vec4<f32>(var_0.b, var_0.b, arg_0, arg_0))).a.x, var_0.c, var_0.d), global3.x, var_0.d.zw), ~u_input.a, func_8(~func_8(1u, u_input.a, global4[_wgslsmith_index_u32(u_input.a.x >> (0u % 32u), 25u)]).c, ~(~vec4<u32>(global1.x, 46550u, global3.x, arg_3)), global0[_wgslsmith_index_u32(_wgslsmith_sub_u32(global1.x, ~52568u), 25u)]));
                    let var_3 = 0u ^ (~(~_wgslsmith_dot_vec2_u32(vec2<u32>(39639u, 8788u), vec2<u32>(18547u, 0u))) ^ ~0u);
                    var var_4 = global0[_wgslsmith_index_u32(countOneBits(~var_3), 25u)];
                    var var_5 = var_2.b;
                }
                case i32(-2147483648): {
                    let var_1 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(floor(_wgslsmith_div_f32(_wgslsmith_f_op_f32(f32(-1f) * -1000f), 1986f))))) - _wgslsmith_f_op_f32(func_8(global1.x, u_input.a, func_8(~0u, _wgslsmith_add_vec4_u32(u_input.a, vec4<u32>(global3.x, 43467u, 0u, 11502u)), Struct_1(var_0.a, var_0.a.x, global3.x, vec4<f32>(arg_0, 639f, 183f, var_0.a.x)))).b + _wgslsmith_f_op_vec2_f32(func_3(Struct_1(_wgslsmith_f_op_vec2_f32(vec2<f32>(587f, 1000f) + var_0.d.wx), 347f, u_input.a.x, var_0.d), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(abs(vec2<f32>(775f, 1000f)))))).x));
                    var_0 = global2[_wgslsmith_index_u32(~firstTrailingBit((_wgslsmith_mult_u32(u_input.a.x, var_0.c) << (~u_input.a.x % 32u)) & ~0u), 11u)];
                }
                case 46128i: {
                    var var_1 = vec3<u32>(~var_0.c, 23405u, 1u);
                    var var_2 = Struct_1(var_0.d.yx, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_0.d.x))), ~var_0.c, vec4<f32>(-2210f, _wgslsmith_f_op_f32(ceil(-2335f)), 747f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(var_0.b - var_0.d.x) * _wgslsmith_div_f32(arg_0, arg_0)) + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_0) * _wgslsmith_f_op_f32(var_0.b + var_0.d.x)))));
                }
                default: {
                    let var_1 = _wgslsmith_mult_vec3_u32(vec3<u32>(79132u, _wgslsmith_add_u32(var_0.c, global3.x), ~(~16630u)), u_input.a.zyz) | vec3<u32>(0u, 15519u, u_input.a.x);
                    global0 = array<Struct_1, 25>();
                }
            }
            var var_1 = var_0.b;
            var var_2 = select(vec3<bool>(arg_2.x == i32(-2147483648), false, select(true, true, true) && select(all(vec4<bool>(true, false, arg_1, true)), true, true)), vec3<bool>(arg_1 == (_wgslsmith_f_op_f32(var_0.d.x + -1689f) == _wgslsmith_f_op_f32(-arg_0)), arg_1, arg_1 && (all(vec3<bool>(false, true, true)) || all(vec2<bool>(false, arg_1)))), select(select(!select(vec3<bool>(true, false, true), vec3<bool>(arg_1, false, arg_1), vec3<bool>(false, false, true)), vec3<bool>(true, true, true), !(!vec3<bool>(false, arg_1, arg_1))), !vec3<bool>(arg_1, true, select(arg_1, true, true)), true));
        }
    }
    let var_1 = ~(vec2<u32>(~u_input.a.x ^ select(37298u, global1.x, arg_1), _wgslsmith_div_u32(~u_input.a.x, _wgslsmith_mod_u32(global3.x, 234u))) >> ((abs(vec2<u32>(global3.x, 11873u)) | u_input.a.zx) % vec2<u32>(32u)));
    for (; ; ) {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        global4 = array<Struct_1, 25>();
        let var_2 = Struct_1(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(select(vec2<f32>(_wgslsmith_f_op_f32(f32(-1f) * -791f), _wgslsmith_f_op_f32(f32(-1f) * -1048f)), _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(var_0.d.x, var_0.b)) + _wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(870f, var_0.b)))), !(!vec2<bool>(arg_1, arg_1))))), 1020f, global3.x, _wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(-var_0.d), _wgslsmith_f_op_vec4_f32(select(var_0.d, var_0.d, false)), !arg_1)), vec4<f32>(_wgslsmith_f_op_f32(var_0.b - -378f), _wgslsmith_f_op_f32(f32(-1f) * -1003f), _wgslsmith_f_op_f32(646f * 1036f), var_0.b), true)))));
    }
    return func_8(~firstLeadingBit(var_1.x), ~_wgslsmith_clamp_vec4_u32(u_input.a, ~_wgslsmith_sub_vec4_u32(vec4<u32>(global3.x, global1.x, var_1.x, 22995u), u_input.a), ~vec4<u32>(u_input.a.x, var_0.c, global3.x, var_0.c) ^ ~u_input.a), global4[_wgslsmith_index_u32(func_8(func_7(func_8(1u, ~vec4<u32>(4294967295u, global3.x, 37063u, 0u), Struct_1(var_0.d.xz, 954f, u_input.a.x, var_0.d)), 64287u, vec2<f32>(var_0.d.x, _wgslsmith_div_f32(-393f, -484f))), reverseBits(~max(vec4<u32>(var_1.x, u_input.a.x, global1.x, global3.x), vec4<u32>(global1.x, global3.x, 4294967295u, 53247u))), Struct_1(vec2<f32>(_wgslsmith_f_op_f32(abs(333f)), -476f), arg_0, 83595u | (global3.x >> (0u % 32u)), vec4<f32>(-1038f, 566f, arg_0, _wgslsmith_f_op_f32(-1343f)))).c, 25u)]);
}

fn func_1(arg_0: bool, arg_1: f32) -> i32 {
    var var_0 = func_2(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_div_f32(1184f, 204f) + 1036f)), arg_1), true, vec2<i32>(~select(abs(1i), 1i, true), -_wgslsmith_div_i32(i32(-1i) * -15618i, 2147483647i)), ~global3.x);
    for (var var_1 = 2147483647i; var_1 != -10283i; var_1 -= 1i) {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
        var var_2 = u_input.a;
        for (var var_3 = -37886i; true; var_3 += 1i) {
            if (LOOP_COUNTERS[18u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
            global4 = array<Struct_1, 25>();
            break;
        }
        for (var var_3 = 3374i; false; var_3 -= 1i) {
            if (LOOP_COUNTERS[19u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
            var_1 = reverseBits(_wgslsmith_mod_i32(-reverseBits(i32(-2147483648)), -16376i)) << (global1.x % 32u);
            var var_4 = !select(vec3<bool>(true, false, arg_0), vec3<bool>(!(!arg_0), true, false), select(select(!vec3<bool>(true, false, arg_0), vec3<bool>(arg_0, arg_0, true), select(vec3<bool>(arg_0, false, arg_0), vec3<bool>(false, arg_0, arg_0), vec3<bool>(true, arg_0, arg_0))), select(select(vec3<bool>(arg_0, false, true), vec3<bool>(arg_0, arg_0, arg_0), false), !vec3<bool>(true, arg_0, arg_0), select(vec3<bool>(arg_0, false, true), vec3<bool>(arg_0, true, false), arg_0)), true != all(vec4<bool>(true, arg_0, arg_0, arg_0))));
            break;
        }
        for (var var_3 = 2147483647i; var_3 >= 1i; var_3 -= 1i) {
            if (LOOP_COUNTERS[20u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
            return ~_wgslsmith_sub_i32(2147483647i, 1i);
        }
    }
    for (var var_1 = 0i; var_1 < 29688i; global0 = array<Struct_1, 25>()) {
        if (LOOP_COUNTERS[21u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
        break;
    }
    if (true) {
        for (; ; ) {
            if (LOOP_COUNTERS[22u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
        }
        switch (firstLeadingBit(select(min(-9691i, min(1i, _wgslsmith_clamp_i32(13518i, 40939i, 1i))), abs(countOneBits(-13931i)), arg_0))) {
            case i32(-2147483648): {
                let var_1 = _wgslsmith_mult_vec3_u32(u_input.a.wxy, select(u_input.a.yzx, ~firstTrailingBit(vec3<u32>(1u, var_0.c, 0u)), arg_0));
                global3 = vec2<u32>(countOneBits(_wgslsmith_dot_vec3_u32(u_input.a.xyz, ~vec3<u32>(32239u, u_input.a.x, u_input.a.x)) << (_wgslsmith_mod_u32(18879u, u_input.a.x) % 32u)), ~0u);
            }
            default: {
                let var_1 = func_2(arg_1, !(!all(vec4<bool>(arg_0, arg_0, arg_0, arg_0))), _wgslsmith_add_vec2_i32(_wgslsmith_div_vec2_i32(~vec2<i32>(1i, 1i), vec2<i32>(-1i) * -vec2<i32>(2147483647i, -15107i)), _wgslsmith_sub_vec2_i32(vec2<i32>(0i, firstTrailingBit(-22996i)), vec2<i32>(reverseBits(2147483647i), 1i))), func_5(func_8(~(~global3.x), u_input.a, Struct_1(_wgslsmith_div_vec2_f32(var_0.a, vec2<f32>(-1949f, 1126f)), -864f, _wgslsmith_mod_u32(u_input.a.x, 9517u), _wgslsmith_f_op_vec4_f32(-var_0.d))), -161f, any(!select(vec4<bool>(false, false, true, arg_0), vec4<bool>(true, arg_0, arg_0, false), arg_0))));
                let var_2 = reverseBits(-max(vec3<i32>(i32(-2147483648), -79102i, 8903i), abs(vec3<i32>(9166i, 1i, -13445i))) | countOneBits(vec3<i32>(_wgslsmith_dot_vec4_i32(vec4<i32>(2147483647i, 2147483647i, -27259i, 12193i), vec4<i32>(0i, 10550i, 23328i, 27662i)), -23007i, -6185i)));
                global0 = array<Struct_1, 25>();
                global3 = reverseBits(u_input.a.wz);
            }
        }
        if (!arg_0) {
            let var_1 = u_input.a.xw;
            let var_2 = ~(vec3<i32>(-1i) * -vec3<i32>(9780i, i32(-1i) * i32(-2147483648), ~6369i));
            let var_3 = func_2(1025f, false, _wgslsmith_div_vec2_i32(-firstLeadingBit(~var_2.xy), var_2.xx), 0u);
            let var_4 = firstLeadingBit(_wgslsmith_div_i32(var_2.x, var_2.x));
        }
        switch (func_6(global4[_wgslsmith_index_u32(select(57180u, 13468u, true || arg_0), 25u)], func_7(global0[_wgslsmith_index_u32(func_8(~0u, ~_wgslsmith_mod_vec4_u32(u_input.a, u_input.a), global4[_wgslsmith_index_u32(9763u, 25u)]).c, 25u)], 22150u, _wgslsmith_f_op_vec2_f32(exp2(_wgslsmith_f_op_vec2_f32(var_0.d.xz * _wgslsmith_f_op_vec2_f32(round(vec2<f32>(arg_1, arg_1))))))), Struct_1(vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(var_0.b, -894f)) + _wgslsmith_f_op_vec2_f32(func_3(global4[_wgslsmith_index_u32(var_0.c, 25u)], var_0.d.wx)).x), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-2435f * arg_1), _wgslsmith_f_op_f32(-785f)))), func_2(-1121f, arg_0, _wgslsmith_div_vec2_i32(firstLeadingBit(vec2<i32>(-46728i, -36914i)), vec2<i32>(-1i, 16415i)), _wgslsmith_sub_u32(func_5(global0[_wgslsmith_index_u32(59901u, 25u)], 724f, arg_0), ~1u)).d.x, global1.x, _wgslsmith_f_op_vec4_f32(var_0.d * _wgslsmith_f_op_vec4_f32(-vec4<f32>(1067f, var_0.d.x, var_0.b, arg_1))))).x) {
            case -2685i: {
            }
            case -1i: {
            }
            case -55076i: {
                var var_1 = ~1u;
                let var_2 = reverseBits(u_input.a);
                let var_3 = 3356u;
                var var_4 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(abs(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-2756f, var_0.a.x, var_0.d.x, -1448f)) - _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(max(var_0.d, vec4<f32>(904f, arg_1, -261f, 334f))), _wgslsmith_f_op_vec4_f32(vec4<f32>(378f, arg_1, arg_1, 1462f) * var_0.d))))) + var_0.d);
            }
            case -42607i: {
                var var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(max(967f, _wgslsmith_f_op_f32(arg_1 + -177f))))));
                var_0 = func_2(arg_1, arg_0, vec2<i32>(2147483647i, i32(-1i) * -1i), _wgslsmith_dot_vec3_u32(~vec3<u32>(~4294967295u, var_0.c, _wgslsmith_dot_vec4_u32(u_input.a, u_input.a)), vec3<u32>(var_0.c, 52366u, func_5(func_2(-1355f, arg_0, vec2<i32>(-39314i, i32(-2147483648)), u_input.a.x), _wgslsmith_f_op_f32(min(378f, 1383f)), true))));
                let var_2 = firstTrailingBit(~(_wgslsmith_dot_vec3_i32(vec3<i32>(-29903i, 38474i, 0i), vec3<i32>(i32(-2147483648), 0i, 0i)) >> ((var_0.c | u_input.a.x) % 32u))) | ~(-(1i >> ((43434u & global1.x) % 32u)));
                let var_3 = vec3<i32>(-firstTrailingBit(-min(-21700i, -10597i)), _wgslsmith_dot_vec3_i32(select(reverseBits(vec3<i32>(var_2, 43779i, 1i)), vec3<i32>(-1i) * -vec3<i32>(var_2, var_2, 1391i), !arg_0), (countOneBits(vec3<i32>(var_2, var_2, var_2)) << (u_input.a.xyz % vec3<u32>(32u))) | abs(firstTrailingBit(vec3<i32>(18422i, 23207i, 0i)))), var_2);
            }
            default: {
                let var_1 = 0u;
                global3 = vec2<u32>(~var_1, u_input.a.x);
                let var_2 = arg_0;
                var var_3 = _wgslsmith_div_i32(14277i, i32(-1i) * -_wgslsmith_div_i32(1i, 1i));
                global4 = array<Struct_1, 25>();
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[23u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
    }
    return _wgslsmith_mod_i32(abs(firstLeadingBit(1i)), _wgslsmith_dot_vec3_i32(select(vec3<i32>(0i, 31704i, 25885i), vec3<i32>(9983i, 1i, -2696i), vec3<bool>(true, false, arg_0)) >> (countOneBits(u_input.a.xyz) % vec3<u32>(32u)), vec3<i32>(1i, 67686i, -21691i)) << (var_0.c % 32u));
}

@compute
@workgroup_size(1)
fn main() {
    switch (~func_1(!(!all(vec4<bool>(true, false, true, false))), 611f)) {
        case 44049i: {
            switch (-countOneBits(1i)) {
                case -1i: {
                    let var_0 = global4[_wgslsmith_index_u32(~(global1.x & ~(_wgslsmith_dot_vec4_u32(vec4<u32>(0u, u_input.a.x, global3.x, global1.x), vec4<u32>(1u, global1.x, 4294967295u, 2921u)) ^ abs(global1.x))), 25u)];
                    global4 = array<Struct_1, 25>();
                    var var_1 = var_0.c;
                }
                case 0i: {
                }
                case 43776i: {
                    return;
                }
                case i32(-2147483648): {
                    global4 = array<Struct_1, 25>();
                    let var_0 = ~(~_wgslsmith_add_vec3_i32(func_6(Struct_1(vec2<f32>(1181f, -931f), -757f, u_input.a.x, vec4<f32>(-859f, -1000f, -721f, 1128f)), 4294967295u, Struct_1(vec2<f32>(1402f, 758f), 172f, global3.x, vec4<f32>(2307f, -683f, -2442f, -657f))).yzx, vec3<i32>(max(i32(-2147483648), 1i), _wgslsmith_dot_vec4_i32(vec4<i32>(-11163i, 84156i, 18130i, 1i), vec4<i32>(0i, 0i, 0i, -35256i)), _wgslsmith_dot_vec3_i32(vec3<i32>(40642i, 1920i, 1i), vec3<i32>(2147483647i, -72821i, 41957i)))));
                }
                default: {
                    var var_0 = func_6(Struct_1(_wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(-598f), _wgslsmith_f_op_f32(f32(-1f) * -1457f)) + _wgslsmith_f_op_vec2_f32(step(vec2<f32>(-792f, -805f), _wgslsmith_f_op_vec2_f32(-vec2<f32>(137f, -376f))))), _wgslsmith_f_op_f32(864f - _wgslsmith_f_op_f32(f32(-1f) * -600f)), ~(global3.x >> (select(4294967295u, global3.x, true) % 32u)), _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-234f, -261f, 1000f, -533f)) + _wgslsmith_f_op_vec4_f32(sign(vec4<f32>(-963f, -1825f, 1652f, -105f)))), vec4<f32>(-1323f, func_8(u_input.a.x, u_input.a, global2[_wgslsmith_index_u32(89858u, 11u)]).b, _wgslsmith_div_f32(-556f, -915f), _wgslsmith_f_op_f32(1788f * 1000f)), !select(vec4<bool>(false, true, false, false), vec4<bool>(false, false, true, false), vec4<bool>(true, false, false, false))))), ~func_2(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(201f + -1517f) + _wgslsmith_f_op_f32(f32(-1f) * -1345f)), false, reverseBits(vec2<i32>(-37636i, 1i)), _wgslsmith_div_u32(max(global3.x, 4294967295u), 49514u)).c, func_8(1u >> (~global3.x % 32u), ~_wgslsmith_add_vec4_u32(~vec4<u32>(u_input.a.x, 1u, global3.x, 9359u), vec4<u32>(17539u, global3.x, 0u, global1.x)), global2[_wgslsmith_index_u32(u_input.a.x, 11u)])).x;
                    var_0 = ~(min(~0i, 1i) << ((func_8(global1.x, u_input.a, func_8(21643u, vec4<u32>(u_input.a.x, 0u, global3.x, global3.x), Struct_1(vec2<f32>(-708f, -228f), 1303f, u_input.a.x, vec4<f32>(1302f, 1752f, 114f, 168f)))).c << ((_wgslsmith_sub_u32(u_input.a.x, 0u) << (4622u % 32u)) % 32u)) % 32u));
                    let var_1 = _wgslsmith_add_vec2_i32(-vec2<i32>(1i, 1i), firstTrailingBit(firstLeadingBit(_wgslsmith_mod_vec2_i32(vec2<i32>(46333i, i32(-2147483648)), _wgslsmith_clamp_vec2_i32(vec2<i32>(i32(-2147483648), i32(-2147483648)), vec2<i32>(i32(-2147483648), 4859i), vec2<i32>(2147483647i, -10717i))))));
                    var var_2 = Struct_1(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(func_3(Struct_1(vec2<f32>(1797f, -172f), -620f, global1.x, vec4<f32>(1682f, -1826f, -680f, 721f)), _wgslsmith_div_vec2_f32(vec2<f32>(-1000f, 1589f), vec2<f32>(684f, -884f)))) + _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(min(vec2<f32>(1207f, 815f), vec2<f32>(-192f, -593f))) + _wgslsmith_f_op_vec2_f32(abs(vec2<f32>(315f, -597f)))))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(f32(-1f) * -1222f), 1000f, true)))) - _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-1268f), _wgslsmith_f_op_f32(min(-195f, 100f)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -127f)), true))), ~u_input.a.x, vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-683f - _wgslsmith_f_op_f32(-198f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -576f) - -812f)), _wgslsmith_f_op_f32(-539f + _wgslsmith_f_op_f32(f32(-1f) * -702f)), 181f));
                }
            }
        }
        case 0i: {
            loop {
                if (LOOP_COUNTERS[24u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
                let var_0 = 1i;
                break;
            }
            global1 = countOneBits(min(u_input.a.zw, u_input.a.zy));
            switch (~(-12283i)) {
                case 39419i: {
                    let var_0 = func_2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(min(2205f, 374f)) + 740f))), false, vec2<i32>(0i, -33037i), 4294967295u);
                    let var_1 = func_6(var_0, global3.x, var_0).wz;
                    global0 = array<Struct_1, 25>();
                }
                case -3765i: {
                    var var_0 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(151f, -1402f, -1710f, -1119f)) * vec4<f32>(_wgslsmith_f_op_f32(floor(174f)), _wgslsmith_f_op_f32(-386f), -505f, 650f))) - _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(-1000f, -846f, 1000f, -1337f))) * _wgslsmith_f_op_vec4_f32(-vec4<f32>(-1118f, 101f, -368f, -1730f))) * _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(1215f, 1299f, -319f, 227f) * vec4<f32>(-1198f, -1053f, -501f, 1006f)) - _wgslsmith_f_op_vec4_f32(max(vec4<f32>(898f, 1463f, -1505f, 526f), vec4<f32>(-1421f, 1069f, 1000f, 1000f)))))));
                    let var_1 = Struct_1(var_0.yz, 688f, 0u, _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(select(vec4<f32>(141f, -1117f, -501f, var_0.x), vec4<f32>(var_0.x, var_0.x, 1000f, 441f), vec4<bool>(true, true, true, false)))) - _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(var_0.x, 319f, -617f, var_0.x)) * _wgslsmith_f_op_vec4_f32(vec4<f32>(var_0.x, -1905f, -651f, -612f) + vec4<f32>(var_0.x, var_0.x, 650f, -1400f))))));
                    let var_2 = _wgslsmith_f_op_vec3_f32(max(_wgslsmith_div_vec3_f32(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(max(vec3<f32>(var_1.a.x, 1000f, -1000f), vec3<f32>(-1769f, -156f, 448f))), _wgslsmith_f_op_vec3_f32(var_1.d.xyw * var_0.yxx))), _wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(select(vec3<f32>(var_1.a.x, -2270f, -330f), vec3<f32>(var_0.x, var_1.b, 1214f), false)), var_0.wzz))), _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(floor(var_1.d.yzw))), _wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(select(vec3<f32>(132f, -510f, -1233f), vec3<f32>(var_0.x, var_0.x, var_0.x), vec3<bool>(true, false, true))), _wgslsmith_f_op_vec3_f32(step(var_0.zww, var_0.zwz)))), select(vec3<bool>(true, true, true), vec3<bool>(true, false, true), true)))), var_1.d.wzx));
                    var var_3 = _wgslsmith_dot_vec3_u32(~(~(~u_input.a.wxw)), ~(~u_input.a.zyz));
                }
                case -1i: {
                    let var_0 = -max(-25639i, 1i);
                    var var_1 = 2147483647i;
                    let var_2 = select(vec4<bool>(_wgslsmith_sub_i32(~var_0, abs(38431i)) != ((var_0 ^ 4412i) ^ var_0), true, !all(select(vec4<bool>(true, true, true, true), vec4<bool>(true, false, false, true), true)), true), !vec4<bool>(!all(vec2<bool>(false, false)), true, true, all(select(vec4<bool>(true, true, false, true), vec4<bool>(true, true, true, true), vec4<bool>(false, false, false, true)))), true);
                    var var_3 = !any(!(!var_2.yzy)) || !any(var_2.zxz);
                    return;
                }
                case -55055i: {
                    let var_0 = global4[_wgslsmith_index_u32(65117u, 25u)];
                    let var_1 = _wgslsmith_mod_vec2_u32(vec2<u32>(1u, ~(~4294967295u)), u_input.a.yw);
                    let var_2 = Struct_1(var_0.a, var_0.d.x, u_input.a.x, vec4<f32>(var_0.b, -150f, _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_vec2_f32(func_3(global4[_wgslsmith_index_u32(10770u, 25u)], vec2<f32>(var_0.d.x, var_0.b))).x)), var_0.d.x));
                }
                default: {
                }
            }
            for (var var_0: i32; var_0 <= -21446i; var_0 -= 1i) {
                if (LOOP_COUNTERS[25u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
                break;
            }
            var var_0 = global2[_wgslsmith_index_u32(u_input.a.x, 11u)];
        }
        case 2147483647i: {
            let var_0 = vec2<i32>(_wgslsmith_dot_vec2_i32(~_wgslsmith_clamp_vec2_i32(vec2<i32>(-9020i, -30323i) << (vec2<u32>(28562u, global3.x) % vec2<u32>(32u)), ~vec2<i32>(i32(-2147483648), -20925i), -vec2<i32>(-7254i, 1i)), reverseBits(select(-vec2<i32>(66133i, i32(-2147483648)), ~vec2<i32>(2147483647i, 1i), true))), 50788i);
            loop {
                if (LOOP_COUNTERS[26u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
                var var_1 = vec4<i32>(-(-1i | var_0.x), _wgslsmith_div_i32(10485i, -28947i), -var_0.x, _wgslsmith_mult_i32(~(~1i), 0i & (var_0.x << (_wgslsmith_clamp_u32(u_input.a.x, 19419u, global3.x) % 32u))));
                global1 = u_input.a.xx;
                let var_2 = Struct_1(vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(1713f, -791f)) * _wgslsmith_f_op_f32(-422f))), _wgslsmith_f_op_f32(117f * _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(floor(713f)))))), _wgslsmith_f_op_f32(-685f), _wgslsmith_div_u32(func_2(1861f, true, var_1.wy, _wgslsmith_mod_u32(u_input.a.x, 5306u)).c, ~0u), _wgslsmith_f_op_vec4_f32(trunc(vec4<f32>(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(f32(-1f) * -214f))), _wgslsmith_f_op_f32(max(244f, _wgslsmith_f_op_f32(select(-1115f, -1608f, false)))), 1809f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-983f) + _wgslsmith_f_op_f32(-526f))))));
            }
            var var_1 = func_8(1u, vec4<u32>(1u, global1.x, u_input.a.x, global1.x), Struct_1(_wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(-1381f), 168f) * _wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(315f, -1114f)))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(1711f, _wgslsmith_f_op_f32(floor(1247f))))), u_input.a.x >> (~0u % 32u), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(min(vec4<f32>(892f, -512f, 637f, 1000f), vec4<f32>(348f, -484f, -324f, 180f))), vec4<f32>(810f, -113f, -1000f, 3024f))))));
            let var_2 = func_2(715f, (false != all(vec4<bool>(true, true, false, false))) & (true | select(any(vec3<bool>(true, true, false)), false, true)), vec2<i32>(i32(-1i) * -(~var_0.x), _wgslsmith_div_i32(33320i, -var_0.x)), u_input.a.x);
            let var_3 = _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-var_1.d) + _wgslsmith_f_op_vec4_f32(-func_8(u_input.a.x, u_input.a, Struct_1(var_2.a, var_1.a.x, var_1.c, var_2.d)).d))), vec4<f32>(var_2.a.x, _wgslsmith_f_op_f32(sign(-188f)), 276f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(var_2.d.x + -333f), -329f)) + 439f)));
        }
        default: {
            loop {
                if (LOOP_COUNTERS[27u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[27u] = LOOP_COUNTERS[27u] + 1u;
            }
            loop {
                if (LOOP_COUNTERS[28u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[28u] = LOOP_COUNTERS[28u] + 1u;
                var var_0 = func_8(global3.x, _wgslsmith_add_vec4_u32(~min(u_input.a, u_input.a), _wgslsmith_clamp_vec4_u32(vec4<u32>(62039u, 1u, global1.x, 1u), ~vec4<u32>(4464u, global1.x, 4294967295u, global3.x), select(vec4<u32>(49139u, global1.x, 4294967295u, global3.x), vec4<u32>(u_input.a.x, 4294967295u, 4294967295u, 4294967295u), false))) << (_wgslsmith_clamp_vec4_u32(vec4<u32>(global1.x ^ 0u, ~u_input.a.x, ~49973u, global3.x), u_input.a, select(vec4<u32>(global1.x, 4294967295u, 31712u, global3.x), ~u_input.a, true)) % vec4<u32>(32u)), func_8(u_input.a.x | global1.x, vec4<u32>(global3.x, abs(~u_input.a.x), ~51030u, func_4(~1i, vec3<i32>(-50787i, 0i, -26702i)).x), Struct_1(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(303f, -1087f) - vec2<f32>(499f, 1406f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(-587f)) * _wgslsmith_div_f32(-979f, -529f)), ~(~37872u), vec4<f32>(_wgslsmith_f_op_f32(-533f * 375f), _wgslsmith_f_op_f32(-3013f), _wgslsmith_f_op_f32(round(294f)), _wgslsmith_f_op_f32(-875f)))));
                continue;
            }
            return;
        }
    }
    global3 = ~vec2<u32>(select(max(abs(4294967295u), global3.x), func_2(_wgslsmith_f_op_f32(-429f - -199f), true, min(vec2<i32>(18815i, 0i), vec2<i32>(28218i, -18865i)), ~0u).c, select(true, true, select(true, false, true))), _wgslsmith_div_u32(firstTrailingBit(~99918u), ~(u_input.a.x | global3.x)));
    switch (-3432i) {
        case -1i: {
            var var_0 = global1.x;
            let var_1 = !select(vec3<bool>(true, true, all(select(vec3<bool>(true, false, false), vec3<bool>(false, false, true), false))), select(select(select(vec3<bool>(true, true, false), vec3<bool>(false, true, false), true), vec3<bool>(true, true, true), vec3<bool>(true, true, true)), select(vec3<bool>(true, true, true), vec3<bool>(true, true, true), false), select(vec3<bool>(true, false, false), vec3<bool>(true, true, true), all(vec3<bool>(false, true, true)))), !select(vec3<bool>(false, true, false), vec3<bool>(true, true, true), vec3<bool>(false, false, false)));
            let var_2 = 290f;
            var var_3 = func_2(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_vec2_f32(func_3(global0[_wgslsmith_index_u32(global1.x, 25u)], vec2<f32>(-252f, var_2))).x, _wgslsmith_f_op_f32(round(-132f)))), -758f), false, ~(~func_6(global4[_wgslsmith_index_u32(12658u, 25u)], ~37575u, func_2(var_2, true, vec2<i32>(1i, 1i), global1.x)).xw), global3.x).d;
        }
        case -1466i: {
            loop {
                if (LOOP_COUNTERS[29u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[29u] = LOOP_COUNTERS[29u] + 1u;
            }
        }
        case 40254i: {
            var var_0 = func_8(~0u, ~vec4<u32>(_wgslsmith_div_u32(u_input.a.x, 44919u), _wgslsmith_add_u32(global3.x, select(0u, global3.x, false)), global3.x, 70122u), Struct_1(vec2<f32>(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-833f * -1000f))), _wgslsmith_f_op_f32(1010f * _wgslsmith_f_op_f32(1218f + -579f))), _wgslsmith_f_op_f32(exp2(_wgslsmith_div_f32(_wgslsmith_f_op_f32(floor(-730f)), _wgslsmith_f_op_f32(f32(-1f) * -551f)))), 1u, vec4<f32>(-1350f, _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(trunc(300f)))), -1409f, _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(round(931f)))))));
            var var_1 = all(!select(!select(vec2<bool>(true, true), vec2<bool>(true, true), vec2<bool>(false, true)), vec2<bool>(true, true), _wgslsmith_dot_vec2_u32(vec2<u32>(31767u, 4294967295u), u_input.a.zw) >= (0u << (1u % 32u))));
        }
        case 0i: {
            if (true) {
                let var_0 = func_1(true, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(943f + _wgslsmith_f_op_f32(122f + -1000f)))) != _wgslsmith_dot_vec3_i32(vec3<i32>(-24688i, abs(~(i32(-2147483648))), func_6(func_8(global3.x, u_input.a, global0[_wgslsmith_index_u32(64805u, 25u)]), global1.x, global0[_wgslsmith_index_u32(117053u, 25u)]).x), vec3<i32>(-1i) * -_wgslsmith_div_vec3_i32(vec3<i32>(-10111i, 0i, i32(-2147483648)), vec3<i32>(1i, 1i, 2147483647i)));
            }
            switch (abs(abs(_wgslsmith_clamp_i32(0i, ~0i, _wgslsmith_mod_i32(2329i, -35034i)) << (global3.x % 32u)))) {
                case i32(-2147483648): {
                    global2 = array<Struct_1, 11>();
                    var var_0 = func_8(~_wgslsmith_sub_u32(global1.x, u_input.a.x), u_input.a, Struct_1(_wgslsmith_f_op_vec2_f32(select(vec2<f32>(1f, 1f), _wgslsmith_f_op_vec2_f32(-vec2<f32>(-2270f, 318f)), select(select(vec2<bool>(true, false), vec2<bool>(false, false), vec2<bool>(false, true)), vec2<bool>(true, true), true))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -2260f)), -2047f), _wgslsmith_clamp_u32(firstTrailingBit(_wgslsmith_mult_u32(global3.x, global1.x)), _wgslsmith_clamp_u32(1u << (u_input.a.x % 32u), _wgslsmith_dot_vec3_u32(u_input.a.wwz, vec3<u32>(1u, global1.x, 40533u)), u_input.a.x), _wgslsmith_dot_vec3_u32(abs(vec3<u32>(0u, global3.x, 10109u)), _wgslsmith_add_vec3_u32(u_input.a.zzz, u_input.a.wzw))), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(vec4<f32>(260f, 928f, -726f, -1658f) * vec4<f32>(386f, 517f, 1028f, -1025f)))) - vec4<f32>(227f, -3001f, _wgslsmith_f_op_f32(-730f), _wgslsmith_f_op_f32(f32(-1f) * -711f)))));
                    global3 = u_input.a.yx;
                    let var_1 = min(0i, min(min(i32(-1i) * -4903i, ~(-2147483647i)), min(1i, -firstTrailingBit(2147483647i))));
                }
                default: {
                    let var_0 = Struct_1(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(func_3(global2[_wgslsmith_index_u32(~u_input.a.x, 11u)], _wgslsmith_div_vec2_f32(vec2<f32>(-417f, -511f), _wgslsmith_f_op_vec2_f32(vec2<f32>(-153f, -1000f) + vec2<f32>(-1413f, -833f))))) * vec2<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_vec2_f32(func_3(global2[_wgslsmith_index_u32(33430u, 11u)], vec2<f32>(1091f, 1192f))).x), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(-1000f, 1217f))))), -802f, _wgslsmith_clamp_u32(~_wgslsmith_clamp_u32(16027u, global1.x, global3.x), ~_wgslsmith_mult_u32(4382u, 1u), global3.x) & ~u_input.a.x, _wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(-768f, -1044f, -326f, 1000f) + vec4<f32>(-1665f, -1102f, 1000f, 248f))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(-427f, 2058f, -648f, 1000f))), all(vec2<bool>(true, true)))))));
                    global1 = vec2<u32>(_wgslsmith_mod_u32(global1.x, global3.x), abs(9046u));
                    global2 = array<Struct_1, 11>();
                }
            }
            let var_0 = func_8(4294967295u, u_input.a, Struct_1(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(-1376f, -563f) + vec2<f32>(1164f, 352f))) * vec2<f32>(_wgslsmith_f_op_f32(-526f - -1625f), func_8(u_input.a.x, vec4<u32>(43730u, 1u, u_input.a.x, global1.x), global4[_wgslsmith_index_u32(43399u, 25u)]).d.x)), _wgslsmith_f_op_f32(ceil(-1000f)), ~(global1.x << (0u % 32u)), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(sign(vec4<f32>(-944f, 1000f, 1068f, -1743f)))))));
            loop {
                if (LOOP_COUNTERS[30u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[30u] = LOOP_COUNTERS[30u] + 1u;
                var var_1 = 603f > _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(trunc(var_0.d.x))));
                global0 = array<Struct_1, 25>();
                let var_2 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-var_0.d));
                return;
            }
        }
        default: {
            if (!any(vec2<bool>(true, true)) && true) {
                let var_0 = global0[_wgslsmith_index_u32(21277u, 25u)];
            }
            var var_0 = _wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-722f * 970f) - _wgslsmith_f_op_f32(2432f * 1000f))), _wgslsmith_f_op_f32(f32(-1f) * -256f), -2592f));
            let var_1 = !vec2<bool>(true, any(vec2<bool>(false, any(vec4<bool>(true, false, true, false)))));
            var var_2 = 23691i;
            global0 = array<Struct_1, 25>();
        }
    }
    switch (-28288i) {
        case -31552i: {
        }
        case -27806i: {
            global1 = vec2<u32>(~(~_wgslsmith_dot_vec3_u32(u_input.a.wxy, vec3<u32>(1u, 61287u, 5608u)) | _wgslsmith_mult_u32(1u, _wgslsmith_mod_u32(u_input.a.x, 17073u))), 68875u);
            let var_0 = select(firstLeadingBit(~_wgslsmith_mult_vec4_i32(abs(vec4<i32>(i32(-2147483648), 1i, -4549i, 3883i)), vec4<i32>(1i, 5514i, 10144i, -19686i))), select(firstLeadingBit(~vec4<i32>(-1i, 1i, -8002i, 1i)), countOneBits(vec4<i32>(0i, 1i, 1i, 0i)), true), !select(vec4<bool>(any(vec2<bool>(false, false)), true, true, all(vec4<bool>(false, false, true, false))), select(select(vec4<bool>(true, true, true, false), vec4<bool>(true, true, true, true), vec4<bool>(false, true, true, false)), vec4<bool>(true, true, true, false), all(vec3<bool>(true, true, true))), select(any(vec3<bool>(false, false, false)), any(vec3<bool>(false, true, false)), false)));
            var var_1 = vec4<bool>(all(vec4<bool>(true, !select(false, true, false), true, false)), !all(vec3<bool>(false, true, true)), (((-20934i >> (global1.x % 32u)) ^ _wgslsmith_sub_i32(var_0.x, -40392i)) > -1i) || !select(true, true, true), _wgslsmith_mod_u32(func_5(global2[_wgslsmith_index_u32(u_input.a.x, 11u)], 521f, false) | global1.x, _wgslsmith_mod_u32(~global3.x, select(1u, global1.x, true))) >= global1.x);
            var var_2 = true;
        }
        case -34922i: {
            let var_0 = ~_wgslsmith_dot_vec3_i32(~(~reverseBits(vec3<i32>(i32(-2147483648), 0i, -32470i))), -vec3<i32>(1i, 1i, 1i));
            global3 = min(vec2<u32>(12509u, 4294967295u), ~(~(~_wgslsmith_mult_vec2_u32(u_input.a.zz, u_input.a.wy))));
            let var_1 = u_input.a.x;
            let var_2 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-471f + 1491f))), _wgslsmith_f_op_vec2_f32(func_3(Struct_1(vec2<f32>(218f, -369f), -425f, global3.x, vec4<f32>(-1288f, 316f, 369f, 1692f)), _wgslsmith_f_op_vec2_f32(select(vec2<f32>(-916f, -2077f), vec2<f32>(1198f, 929f), vec2<bool>(true, true))))).x, 1303f) + _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(step(_wgslsmith_div_vec3_f32(vec3<f32>(-894f, -504f, 1933f), vec3<f32>(1148f, -385f, -1645f)), _wgslsmith_f_op_vec3_f32(-vec3<f32>(499f, 284f, 481f)))))));
        }
        default: {
            var var_0 = min(func_1(any(vec3<bool>(true, false, false)), -112f) | ~(-(0i << (1u % 32u))), 0i);
            global1 = firstLeadingBit(func_4(~_wgslsmith_div_i32(1i, _wgslsmith_add_i32(-24405i, 0i)), vec3<i32>(-12094i, _wgslsmith_add_i32(345i, 56417i), -1i) >> (vec3<u32>(u_input.a.x, global3.x, 4294967295u) % vec3<u32>(32u))));
        }
    }
    switch (250i) {
        case 4734i: {
            global0 = array<Struct_1, 25>();
            let var_0 = _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(f32(-1f) * -282f)))), _wgslsmith_f_op_f32(-1f), func_8(u_input.a.x, vec4<u32>(global1.x, global1.x, 30722u, global3.x), global0[_wgslsmith_index_u32(countOneBits(global1.x), 25u)]).d.x, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(348f * -228f)))));
            global1 = u_input.a.xw;
            var var_1 = global0[_wgslsmith_index_u32(~_wgslsmith_clamp_u32(_wgslsmith_mod_u32(~_wgslsmith_clamp_u32(0u, 90751u, u_input.a.x), func_5(Struct_1(var_0.xz, var_0.x, global3.x, vec4<f32>(151f, var_0.x, var_0.x, var_0.x)), -436f, true)), _wgslsmith_add_u32(4294967295u, ~firstTrailingBit(96969u)), firstLeadingBit(~(u_input.a.x << (0u % 32u)))), 25u)];
        }
        case i32(-2147483648): {
            var var_0 = vec3<i32>(~(1i << (func_8(20628u, vec4<u32>(80282u, 85716u, global1.x, global3.x), global0[_wgslsmith_index_u32(firstTrailingBit(41121u), 25u)]).c % 32u)), firstLeadingBit(-44015i), min(reverseBits(~1i), _wgslsmith_dot_vec3_i32(-firstLeadingBit(vec3<i32>(-20503i, 39431i, 0i)), vec3<i32>(~(-29220i), 1i, -1i >> (global1.x % 32u)))));
            global0 = array<Struct_1, 25>();
            loop {
                if (LOOP_COUNTERS[31u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[31u] = LOOP_COUNTERS[31u] + 1u;
            }
        }
        default: {
            return;
        }
    }
    global4 = array<Struct_1, 25>();
    let x = u_input.a;
    s_output = StorageBuffer(-1i, 1i, _wgslsmith_f_op_f32(func_8(abs(4294967295u), vec4<u32>(~33329u, func_7(global2[_wgslsmith_index_u32(1u, 11u)], global1.x, vec2<f32>(401f, 1445f)), u_input.a.x, global3.x), func_8(global1.x, select(vec4<u32>(global1.x, u_input.a.x, u_input.a.x, 1u), u_input.a, vec4<bool>(false, false, false, false)), func_8(127162u, u_input.a, global2[_wgslsmith_index_u32(global3.x, 11u)]))).a.x + -228f), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(func_8(4294967295u, vec4<u32>(global1.x, 0u, u_input.a.x, u_input.a.x), global4[_wgslsmith_index_u32(global3.x, 25u)]).d - _wgslsmith_f_op_vec4_f32(min(vec4<f32>(1431f, -768f, 1258f, -1442f), vec4<f32>(1017f, -603f, 322f, 143f))))))), _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(493f - _wgslsmith_f_op_f32(-2944f + -1027f))), _wgslsmith_f_op_f32(-762f * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -835f) - _wgslsmith_f_op_f32(f32(-1f) * -209f))))));
}

`;