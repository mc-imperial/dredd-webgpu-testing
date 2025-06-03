export const input = [112,41,249,172,100,48,108,8,55,189,122,155,197,229,204,207,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [112,41,249,172,100,48,108,8,55,189,122,155,197,229,204,207,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[112,41,249,172,100,48,108,8,55,189,122,155,197,229,204,207]}
// Seed: 5000932065084842217

struct Struct_1 {
    a: bool,
    b: bool,
    c: vec4<u32>,
}

struct Struct_2 {
    a: vec2<bool>,
    b: Struct_1,
    c: Struct_1,
    d: f32,
    e: Struct_1,
}

struct UniformBuffer {
    a: vec3<u32>,
    b: i32,
}

struct StorageBuffer {
    a: u32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: array<vec2<bool>, 26> = array<vec2<bool>, 26>(vec2<bool>(true, true), vec2<bool>(true, false), vec2<bool>(true, false), vec2<bool>(false, true), vec2<bool>(true, true), vec2<bool>(false, true), vec2<bool>(true, true), vec2<bool>(false, false), vec2<bool>(true, true), vec2<bool>(false, true), vec2<bool>(false, true), vec2<bool>(false, true), vec2<bool>(false, false), vec2<bool>(true, false), vec2<bool>(false, true), vec2<bool>(true, true), vec2<bool>(false, true), vec2<bool>(true, true), vec2<bool>(true, true), vec2<bool>(true, true), vec2<bool>(false, true), vec2<bool>(true, false), vec2<bool>(false, true), vec2<bool>(false, false), vec2<bool>(true, true), vec2<bool>(false, true));

var<private> global1: array<Struct_2, 12> = array<Struct_2, 12>(Struct_2(vec2<bool>(false, true), Struct_1(false, true, vec4<u32>(4294967295u, 1u, 4294967295u, 4294967295u)), Struct_1(false, false, vec4<u32>(4294967295u, 0u, 4294967295u, 46133u)), 956f, Struct_1(false, true, vec4<u32>(1u, 11377u, 10460u, 4294967295u))), Struct_2(vec2<bool>(false, false), Struct_1(false, false, vec4<u32>(0u, 0u, 4294967295u, 4294967295u)), Struct_1(false, false, vec4<u32>(25771u, 4294967295u, 31454u, 1u)), -905f, Struct_1(false, false, vec4<u32>(16973u, 95785u, 1u, 0u))), Struct_2(vec2<bool>(true, false), Struct_1(true, false, vec4<u32>(35943u, 9448u, 4294967295u, 0u)), Struct_1(false, false, vec4<u32>(31501u, 62140u, 1u, 5994u)), 263f, Struct_1(false, false, vec4<u32>(46367u, 4294967295u, 473u, 39743u))), Struct_2(vec2<bool>(true, true), Struct_1(false, false, vec4<u32>(60642u, 1u, 0u, 46796u)), Struct_1(false, false, vec4<u32>(4294967295u, 94461u, 0u, 51203u)), 220f, Struct_1(true, false, vec4<u32>(1u, 7215u, 4294967295u, 1u))), Struct_2(vec2<bool>(true, false), Struct_1(true, true, vec4<u32>(4294967295u, 0u, 0u, 4294967295u)), Struct_1(false, false, vec4<u32>(32942u, 15349u, 31725u, 4294967295u)), 810f, Struct_1(false, true, vec4<u32>(1u, 1u, 4294967295u, 4294967295u))), Struct_2(vec2<bool>(false, true), Struct_1(false, false, vec4<u32>(0u, 4294967295u, 0u, 4294967295u)), Struct_1(false, false, vec4<u32>(80546u, 47051u, 37427u, 89024u)), 501f, Struct_1(true, true, vec4<u32>(59428u, 29293u, 28748u, 0u))), Struct_2(vec2<bool>(true, true), Struct_1(true, true, vec4<u32>(4294967295u, 8760u, 4294967295u, 60786u)), Struct_1(false, false, vec4<u32>(6570u, 1u, 14809u, 0u)), -660f, Struct_1(true, false, vec4<u32>(4294967295u, 1u, 42918u, 0u))), Struct_2(vec2<bool>(true, false), Struct_1(true, false, vec4<u32>(64016u, 4294967295u, 0u, 0u)), Struct_1(false, true, vec4<u32>(65892u, 0u, 52056u, 21769u)), 784f, Struct_1(false, true, vec4<u32>(3890u, 80796u, 0u, 1u))), Struct_2(vec2<bool>(true, true), Struct_1(true, true, vec4<u32>(4294967295u, 3135u, 8705u, 13514u)), Struct_1(false, false, vec4<u32>(4294967295u, 80642u, 71802u, 0u)), 222f, Struct_1(true, true, vec4<u32>(35443u, 1u, 77716u, 1u))), Struct_2(vec2<bool>(true, true), Struct_1(true, true, vec4<u32>(18618u, 0u, 15049u, 5483u)), Struct_1(true, true, vec4<u32>(26395u, 55692u, 1u, 79043u)), -1000f, Struct_1(false, false, vec4<u32>(13026u, 4294967295u, 4294967295u, 46033u))), Struct_2(vec2<bool>(true, true), Struct_1(false, true, vec4<u32>(69554u, 11805u, 12176u, 0u)), Struct_1(true, true, vec4<u32>(27280u, 38538u, 71209u, 61091u)), -267f, Struct_1(true, true, vec4<u32>(1u, 68193u, 1u, 1u))), Struct_2(vec2<bool>(false, false), Struct_1(false, true, vec4<u32>(4294967295u, 33677u, 4294967295u, 4779u)), Struct_1(false, false, vec4<u32>(4294967295u, 4294967295u, 59978u, 1u)), -283f, Struct_1(true, true, vec4<u32>(1u, 768u, 20622u, 111619u))));

var<private> global2: array<Struct_2, 29> = array<Struct_2, 29>(Struct_2(vec2<bool>(false, true), Struct_1(false, false, vec4<u32>(4294967295u, 55328u, 53597u, 16132u)), Struct_1(false, true, vec4<u32>(4294967295u, 42528u, 60453u, 54520u)), 1564f, Struct_1(true, false, vec4<u32>(17551u, 57123u, 26705u, 5376u))), Struct_2(vec2<bool>(true, true), Struct_1(true, false, vec4<u32>(17900u, 0u, 40183u, 41446u)), Struct_1(true, true, vec4<u32>(4294967295u, 0u, 0u, 20797u)), -1073f, Struct_1(false, true, vec4<u32>(1u, 1u, 16734u, 1260u))), Struct_2(vec2<bool>(false, false), Struct_1(true, true, vec4<u32>(65057u, 4294967295u, 1u, 54299u)), Struct_1(true, true, vec4<u32>(0u, 45154u, 45506u, 39478u)), -1169f, Struct_1(false, false, vec4<u32>(86746u, 0u, 4294967295u, 43665u))), Struct_2(vec2<bool>(true, false), Struct_1(true, false, vec4<u32>(26518u, 1094u, 73417u, 58678u)), Struct_1(true, false, vec4<u32>(0u, 83373u, 42965u, 30408u)), 531f, Struct_1(false, true, vec4<u32>(11596u, 4294967295u, 1u, 4294967295u))), Struct_2(vec2<bool>(false, false), Struct_1(false, false, vec4<u32>(45953u, 4294967295u, 65938u, 15246u)), Struct_1(true, true, vec4<u32>(1u, 4294967295u, 46042u, 4294967295u)), -1000f, Struct_1(true, false, vec4<u32>(1u, 7817u, 0u, 4294967295u))), Struct_2(vec2<bool>(true, true), Struct_1(true, false, vec4<u32>(1u, 0u, 0u, 84332u)), Struct_1(false, true, vec4<u32>(4294967295u, 24354u, 1u, 1u)), -380f, Struct_1(false, true, vec4<u32>(63513u, 39266u, 16700u, 30862u))), Struct_2(vec2<bool>(false, false), Struct_1(true, true, vec4<u32>(0u, 25890u, 30140u, 0u)), Struct_1(false, true, vec4<u32>(14882u, 1u, 0u, 1924u)), -1516f, Struct_1(true, false, vec4<u32>(0u, 17584u, 54829u, 103942u))), Struct_2(vec2<bool>(true, false), Struct_1(false, true, vec4<u32>(0u, 0u, 4294967295u, 0u)), Struct_1(false, true, vec4<u32>(30901u, 0u, 50179u, 4294967295u)), 529f, Struct_1(true, true, vec4<u32>(4294967295u, 0u, 19344u, 4294967295u))), Struct_2(vec2<bool>(false, true), Struct_1(false, true, vec4<u32>(4294967295u, 6757u, 1u, 67104u)), Struct_1(true, false, vec4<u32>(53953u, 4294967295u, 13591u, 0u)), -1365f, Struct_1(true, true, vec4<u32>(31941u, 125257u, 1u, 0u))), Struct_2(vec2<bool>(true, true), Struct_1(false, false, vec4<u32>(50159u, 1u, 4294967295u, 1u)), Struct_1(true, true, vec4<u32>(25822u, 16640u, 4294967295u, 4294967295u)), -1947f, Struct_1(false, true, vec4<u32>(0u, 4294967295u, 0u, 4294967295u))), Struct_2(vec2<bool>(false, true), Struct_1(false, true, vec4<u32>(28022u, 29156u, 32410u, 33920u)), Struct_1(false, true, vec4<u32>(1u, 0u, 11190u, 39988u)), -441f, Struct_1(true, false, vec4<u32>(1101u, 4294967295u, 3439u, 13121u))), Struct_2(vec2<bool>(false, true), Struct_1(true, false, vec4<u32>(6146u, 65136u, 18033u, 4294967295u)), Struct_1(true, true, vec4<u32>(25649u, 1u, 4294967295u, 40750u)), 1484f, Struct_1(false, false, vec4<u32>(37602u, 58198u, 1u, 0u))), Struct_2(vec2<bool>(true, false), Struct_1(false, true, vec4<u32>(37578u, 16723u, 39719u, 0u)), Struct_1(false, true, vec4<u32>(4294967295u, 10783u, 13235u, 0u)), 1669f, Struct_1(false, false, vec4<u32>(4294967295u, 45164u, 0u, 0u))), Struct_2(vec2<bool>(true, true), Struct_1(false, true, vec4<u32>(4294967295u, 4294967295u, 14329u, 4294967295u)), Struct_1(false, false, vec4<u32>(1u, 1u, 1u, 1u)), -2867f, Struct_1(true, false, vec4<u32>(40074u, 39842u, 0u, 1u))), Struct_2(vec2<bool>(false, false), Struct_1(true, false, vec4<u32>(80402u, 4294967295u, 1u, 21427u)), Struct_1(false, false, vec4<u32>(41103u, 61197u, 4294967295u, 76667u)), -1108f, Struct_1(true, false, vec4<u32>(31012u, 0u, 70207u, 23887u))), Struct_2(vec2<bool>(false, false), Struct_1(true, false, vec4<u32>(4294967295u, 0u, 55463u, 22263u)), Struct_1(false, true, vec4<u32>(4294967295u, 1u, 10306u, 86540u)), 1488f, Struct_1(true, true, vec4<u32>(103731u, 26838u, 4294967295u, 1u))), Struct_2(vec2<bool>(true, true), Struct_1(false, true, vec4<u32>(16088u, 0u, 1u, 0u)), Struct_1(false, false, vec4<u32>(4294967295u, 66324u, 4294967295u, 75336u)), 814f, Struct_1(true, true, vec4<u32>(21152u, 0u, 23851u, 6528u))), Struct_2(vec2<bool>(true, true), Struct_1(true, true, vec4<u32>(4294967295u, 66609u, 97109u, 4294967295u)), Struct_1(true, false, vec4<u32>(0u, 47324u, 4294967295u, 1u)), 586f, Struct_1(true, true, vec4<u32>(45155u, 1u, 46680u, 72807u))), Struct_2(vec2<bool>(false, true), Struct_1(false, false, vec4<u32>(72704u, 19384u, 1u, 1u)), Struct_1(true, false, vec4<u32>(1u, 6291u, 14167u, 140861u)), 381f, Struct_1(false, false, vec4<u32>(30674u, 4294967295u, 65940u, 1u))), Struct_2(vec2<bool>(true, false), Struct_1(false, true, vec4<u32>(4294967295u, 116277u, 39572u, 1u)), Struct_1(false, false, vec4<u32>(4489u, 23781u, 0u, 2115u)), 1112f, Struct_1(true, false, vec4<u32>(36378u, 25934u, 7363u, 1u))), Struct_2(vec2<bool>(false, false), Struct_1(true, false, vec4<u32>(88885u, 12945u, 1u, 30314u)), Struct_1(false, false, vec4<u32>(51019u, 4294967295u, 1u, 1u)), -479f, Struct_1(false, false, vec4<u32>(91923u, 8991u, 0u, 33367u))), Struct_2(vec2<bool>(false, false), Struct_1(false, false, vec4<u32>(22649u, 41361u, 31450u, 39602u)), Struct_1(true, false, vec4<u32>(1u, 1u, 54689u, 36000u)), -1000f, Struct_1(true, false, vec4<u32>(72581u, 35206u, 26133u, 4294967295u))), Struct_2(vec2<bool>(true, false), Struct_1(true, true, vec4<u32>(0u, 28092u, 1u, 4294967295u)), Struct_1(false, false, vec4<u32>(0u, 24897u, 26760u, 0u)), -677f, Struct_1(false, false, vec4<u32>(1u, 4294967295u, 31572u, 4294967295u))), Struct_2(vec2<bool>(true, false), Struct_1(false, true, vec4<u32>(0u, 4294967295u, 51860u, 4294967295u)), Struct_1(false, true, vec4<u32>(8589u, 0u, 4294967295u, 0u)), 336f, Struct_1(true, true, vec4<u32>(16484u, 1u, 7246u, 6891u))), Struct_2(vec2<bool>(false, false), Struct_1(false, true, vec4<u32>(1u, 4294967295u, 4294967295u, 1u)), Struct_1(false, false, vec4<u32>(1u, 0u, 28251u, 13150u)), 1674f, Struct_1(true, true, vec4<u32>(1u, 9296u, 0u, 1u))), Struct_2(vec2<bool>(false, false), Struct_1(true, false, vec4<u32>(97851u, 19683u, 1u, 16493u)), Struct_1(false, true, vec4<u32>(1u, 71411u, 17596u, 60266u)), 1375f, Struct_1(false, true, vec4<u32>(2814u, 0u, 40991u, 0u))), Struct_2(vec2<bool>(false, true), Struct_1(false, true, vec4<u32>(82603u, 2403u, 0u, 34799u)), Struct_1(true, true, vec4<u32>(3977u, 92346u, 34688u, 4294967295u)), 1000f, Struct_1(false, false, vec4<u32>(0u, 0u, 7812u, 15613u))), Struct_2(vec2<bool>(true, true), Struct_1(true, false, vec4<u32>(110484u, 49388u, 0u, 15446u)), Struct_1(false, false, vec4<u32>(4294967295u, 50704u, 0u, 1u)), -117f, Struct_1(true, true, vec4<u32>(11553u, 0u, 70530u, 0u))), Struct_2(vec2<bool>(false, true), Struct_1(true, true, vec4<u32>(107726u, 0u, 1u, 1u)), Struct_1(false, false, vec4<u32>(1u, 49013u, 30328u, 35564u)), 469f, Struct_1(false, false, vec4<u32>(0u, 0u, 0u, 4294967295u))));

var<private> global3: f32;

var<private> global4: vec3<u32>;

var<private> LOOP_COUNTERS: array<u32, 31>;

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_div_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a / b, a / vec4<i32>(2i), (((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i))) || (((a[3i] == i32(-2147483648)) && (b[3i] == -1i)) || (b[3i] == 0i)));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn func_6(arg_0: Struct_2) -> vec4<bool> {
    switch (~(countOneBits(~_wgslsmith_dot_vec3_i32(vec3<i32>(-1698i, 29832i, -2515i), vec3<i32>(u_input.b, u_input.b, u_input.b))) << (4294967295u % 32u))) {
        case 0i: {
        }
        case 42014i: {
            global4 = countOneBits(vec3<u32>(1u, 0u, min(arg_0.e.c.x, 64250u)));
            for (var var_0 = -1i; u_input.b <= (_wgslsmith_mult_i32(u_input.b, -14073i >> (_wgslsmith_mod_u32(arg_0.b.c.x, global4.x) % 32u)) ^ -1i); ) {
                if (LOOP_COUNTERS[0u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
            }
            loop {
                if (LOOP_COUNTERS[1u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
                global0 = array<vec2<bool>, 26>();
            }
            let var_0 = select(any(!select(select(vec3<bool>(arg_0.c.b, false, arg_0.e.b), vec3<bool>(false, arg_0.e.a, true), vec3<bool>(arg_0.a.x, arg_0.b.a, arg_0.a.x)), select(vec3<bool>(arg_0.c.a, false, false), vec3<bool>(arg_0.b.b, arg_0.a.x, arg_0.c.a), vec3<bool>(arg_0.c.a, arg_0.e.a, arg_0.a.x)), false)), true, all(vec4<bool>(false, true, !(!arg_0.b.b), !any(vec4<bool>(false, arg_0.b.a, true, arg_0.a.x)))));
        }
        case -10510i: {
            let var_0 = _wgslsmith_f_op_f32(-arg_0.d);
            var var_1 = u_input.b;
            global3 = _wgslsmith_f_op_f32(_wgslsmith_div_f32(arg_0.d, _wgslsmith_div_f32(_wgslsmith_f_op_f32(arg_0.d * var_0), _wgslsmith_div_f32(_wgslsmith_f_op_f32(arg_0.d - 1668f), -542f))) * -1128f);
            var_1 = _wgslsmith_add_i32(u_input.b, max(i32(-2147483648), ~u_input.b << (~global4.x % 32u))) ^ 12896i;
        }
        case 14454i: {
            global2 = array<Struct_2, 29>();
            let var_0 = global2[_wgslsmith_index_u32(global4.x, 29u)];
        }
        default: {
            let var_0 = Struct_2(vec2<bool>(arg_0.a.x, all(vec3<bool>(false, true, false))), Struct_1(arg_0.c.b, false, reverseBits(countOneBits(vec4<u32>(u_input.a.x, 87043u, u_input.a.x, global4.x)))), arg_0.e, _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(floor(arg_0.d)))), Struct_1(any(!select(arg_0.a, vec2<bool>(true, true), arg_0.e.a)), any(!select(global0[_wgslsmith_index_u32(arg_0.b.c.x, 26u)], vec2<bool>(false, false), arg_0.a)), ~(_wgslsmith_div_vec4_u32(vec4<u32>(global4.x, global4.x, 91048u, u_input.a.x), vec4<u32>(50231u, 0u, u_input.a.x, global4.x)) << (arg_0.b.c % vec4<u32>(32u)))));
            global1 = array<Struct_2, 12>();
            let var_1 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-610f, 750f)) + _wgslsmith_f_op_vec2_f32(vec2<f32>(arg_0.d, arg_0.d) * _wgslsmith_f_op_vec2_f32(-vec2<f32>(arg_0.d, 435f)))) * _wgslsmith_f_op_vec2_f32(exp2(vec2<f32>(var_0.d, _wgslsmith_f_op_f32(-616f - arg_0.d))))));
            var var_2 = Struct_2(vec2<bool>(any(!(!vec4<bool>(arg_0.e.b, arg_0.e.b, var_0.b.a, arg_0.e.a))), true), arg_0.c, Struct_1(true, select(true, !(u_input.b <= u_input.b), !arg_0.c.a), ~_wgslsmith_clamp_vec4_u32(~vec4<u32>(0u, 81588u, arg_0.c.c.x, var_0.e.c.x), ~var_0.c.c, var_0.e.c)), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(floor(arg_0.d)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(arg_0.d))))))), arg_0.e);
            let var_3 = min(u_input.a.yz, var_2.b.c.yw);
        }
    }
    var var_0 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(-474f), _wgslsmith_f_op_f32(1179f + 1000f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_0.d - arg_0.d) * _wgslsmith_f_op_f32(f32(-1f) * -399f))))));
    global1 = array<Struct_2, 12>();
    let var_1 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(step(vec2<f32>(-1255f, 289f), _wgslsmith_f_op_vec2_f32(floor(vec2<f32>(-331f, arg_0.d))))), vec2<f32>(_wgslsmith_f_op_f32(arg_0.d * arg_0.d), _wgslsmith_f_op_f32(-arg_0.d)))));
    var_0 = _wgslsmith_f_op_f32(exp2(var_1.x));
    return select(vec4<bool>(!(!any(global0[_wgslsmith_index_u32(arg_0.e.c.x, 26u)])), select(!(arg_0.d > arg_0.d), any(vec3<bool>(false, false, arg_0.c.a)) != any(vec4<bool>(arg_0.c.a, arg_0.e.a, arg_0.b.a, false)), arg_0.a.x), true | arg_0.a.x, _wgslsmith_f_op_f32(f32(-1f) * -880f) < arg_0.d), select(!select(vec4<bool>(arg_0.e.a, false, arg_0.c.b, true), select(vec4<bool>(arg_0.b.a, arg_0.c.a, false, false), vec4<bool>(arg_0.a.x, true, arg_0.b.b, true), vec4<bool>(true, arg_0.e.b, arg_0.c.a, true)), !vec4<bool>(arg_0.c.b, arg_0.a.x, false, arg_0.c.b)), !select(select(vec4<bool>(true, true, false, arg_0.e.a), vec4<bool>(false, true, false, false), vec4<bool>(arg_0.b.a, false, arg_0.e.b, false)), vec4<bool>(false, false, false, false), select(vec4<bool>(arg_0.a.x, arg_0.c.b, false, false), vec4<bool>(false, arg_0.e.a, false, arg_0.b.a), vec4<bool>(false, true, false, arg_0.a.x))), arg_0.e.b), !(!select(!vec4<bool>(arg_0.a.x, arg_0.c.b, arg_0.c.a, true), !vec4<bool>(arg_0.e.a, true, arg_0.e.a, arg_0.a.x), !arg_0.e.b)));
}

fn func_5(arg_0: bool, arg_1: i32) -> Struct_1 {
    let var_0 = 1i;
    var var_1 = !arg_0;
    switch (firstLeadingBit(2147483647i)) {
        default: {
            let var_2 = 1i;
            let var_3 = global2[_wgslsmith_index_u32(_wgslsmith_sub_u32(abs(u_input.a.x), firstTrailingBit(~73928u)), 29u)];
        }
    }
    switch (var_0) {
        case -25533i: {
            var var_2 = vec2<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1298f) - 2003f) * 113f), -232f);
            loop {
                if (LOOP_COUNTERS[2u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
                break;
            }
            var var_3 = vec2<bool>(select(!(all(vec3<bool>(false, arg_0, arg_0)) && arg_0), false, true), arg_0);
            var_2 = vec2<f32>(912f, var_2.x);
            loop {
                if (LOOP_COUNTERS[3u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
                global0 = array<vec2<bool>, 26>();
                let var_4 = !vec3<bool>(all(!func_6(global1[_wgslsmith_index_u32(42388u, 12u)])), var_3.x, !(!any(vec2<bool>(var_3.x, true))));
            }
        }
        case -38643i: {
        }
        case -39772i: {
            global2 = array<Struct_2, 29>();
            var var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(-1267f)));
            for (; ; ) {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                var var_3 = Struct_1(arg_0, !arg_0, vec4<u32>(1u, ~((0u & global4.x) ^ ~1u), 3023u, 1u));
                var var_4 = vec2<bool>(!((var_3.a && (var_3.c.x >= 5836u)) | all(select(vec2<bool>(var_3.b, false), vec2<bool>(var_3.a, false), vec2<bool>(false, true)))), !arg_0);
                var var_5 = Struct_2(global0[_wgslsmith_index_u32(u_input.a.x, 26u)], Struct_1(var_4.x, var_3.b, var_3.c), Struct_1(true & all(select(vec4<bool>(var_4.x, false, true, arg_0), vec4<bool>(false, false, true, false), vec4<bool>(false, true, false, var_4.x))), firstTrailingBit(u_input.b) <= -var_0, ~(~(var_3.c >> (vec4<u32>(u_input.a.x, global4.x, 0u, 1u) % vec4<u32>(32u))))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(max(281f, 1000f)))), _wgslsmith_f_op_f32(f32(-1f) * -1798f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-140f) + _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(1146f + 877f), -1464f)))), Struct_1(true, true, ~_wgslsmith_sub_vec4_u32(min(vec4<u32>(1u, global4.x, 27759u, global4.x), vec4<u32>(u_input.a.x, u_input.a.x, 49509u, var_3.c.x)), var_3.c)));
                continue;
            }
            global4 = _wgslsmith_div_vec3_u32(countOneBits(u_input.a), u_input.a);
            let var_3 = Struct_1(!all(vec2<bool>(arg_0, !arg_0)), true, firstTrailingBit(_wgslsmith_add_vec4_u32(~(~vec4<u32>(u_input.a.x, 72720u, 26354u, global4.x)), firstLeadingBit(_wgslsmith_add_vec4_u32(vec4<u32>(0u, global4.x, 80602u, 41445u), vec4<u32>(4294967295u, 1u, u_input.a.x, 26344u))))));
        }
        default: {
            global1 = array<Struct_2, 12>();
            loop {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
            }
            loop {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                var var_2 = !select(!(!select(vec4<bool>(arg_0, true, arg_0, true), vec4<bool>(arg_0, false, false, arg_0), vec4<bool>(arg_0, true, arg_0, arg_0))), select(!vec4<bool>(arg_0, arg_0, arg_0, true), vec4<bool>(arg_0 && false, all(vec2<bool>(true, arg_0)), true, arg_0), arg_0), !vec4<bool>(arg_0, arg_0, any(vec4<bool>(false, true, true, false)), !arg_0));
                var var_3 = ~(4294967295u << (~(firstLeadingBit(u_input.a.x) >> ((global4.x & 1u) % 32u)) % 32u));
                continue;
            }
            return Struct_1(any(vec3<bool>(false, true, true)), any(func_6(Struct_2(!global0[_wgslsmith_index_u32(u_input.a.x, 26u)], Struct_1(true, arg_0, vec4<u32>(51758u, u_input.a.x, u_input.a.x, u_input.a.x)), Struct_1(false, arg_0, vec4<u32>(29014u, 4294967295u, 47861u, global4.x)), 1f, Struct_1(arg_0, arg_0, vec4<u32>(global4.x, global4.x, 86684u, u_input.a.x)))).zww), firstTrailingBit(vec4<u32>(~_wgslsmith_sub_u32(global4.x, global4.x), u_input.a.x, ~_wgslsmith_sub_u32(global4.x, global4.x), 4294967295u & ~u_input.a.x)));
        }
    }
    for (var var_2 = i32(-2147483648); true; var_2 += 1i) {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        if (all(select(select(vec4<bool>(arg_0, arg_0, arg_0, true), !(!vec4<bool>(arg_0, arg_0, arg_0, false)), !any(vec3<bool>(arg_0, true, true))), func_6(Struct_2(vec2<bool>(true, true), Struct_1(arg_0, true, vec4<u32>(63238u, 15996u, 1768u, 21709u)), Struct_1(true, false, vec4<u32>(global4.x, u_input.a.x, 31015u, global4.x)), _wgslsmith_f_op_f32(-152f * -1338f), Struct_1(true, arg_0, vec4<u32>(u_input.a.x, 97548u, u_input.a.x, 0u)))), false))) {
            var var_3 = Struct_1(!(all(vec2<bool>(true, arg_0)) & select(arg_0, arg_0, true)), false, ~(~_wgslsmith_clamp_vec4_u32(abs(vec4<u32>(u_input.a.x, u_input.a.x, 1u, 43111u)), vec4<u32>(u_input.a.x, u_input.a.x, global4.x, 0u), _wgslsmith_sub_vec4_u32(vec4<u32>(43647u, 11400u, 0u, global4.x), vec4<u32>(4294967295u, global4.x, u_input.a.x, global4.x)))));
        }
    }
    return Struct_1(arg_0, arg_0, ~(vec4<u32>(global4.x, 46584u, 4294967295u, 1u) & ~vec4<u32>(1u, u_input.a.x, 1u, 32573u)) ^ _wgslsmith_mult_vec4_u32(max(firstLeadingBit(vec4<u32>(1u, global4.x, 16413u, 1u)), vec4<u32>(global4.x, global4.x, 68538u, 10191u)), firstLeadingBit(vec4<u32>(27253u, 13868u, u_input.a.x, u_input.a.x)) | countOneBits(vec4<u32>(global4.x, 0u, 1u, 1u))));
}

fn func_7(arg_0: Struct_1) -> bool {
    let var_0 = Struct_2(vec2<bool>(true, !arg_0.a), func_5(arg_0.b, -4673i), arg_0, _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(f32(-1f) * -1022f), _wgslsmith_f_op_f32(-1f))), Struct_1(reverseBits(~u_input.b) > 1i, u_input.b <= select(1i, 17230i, true), vec4<u32>(1u, ~select(u_input.a.x, 0u, false), (4294967295u << (u_input.a.x % 32u)) ^ global4.x, arg_0.c.x)));
    loop {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        var var_1 = min(vec3<u32>(67512u, 66930u, ~var_0.c.c.x), ~(_wgslsmith_mult_vec3_u32(vec3<u32>(9975u, global4.x, global4.x), vec3<u32>(var_0.b.c.x, 34959u, 0u)) & (vec3<u32>(4294967295u, 1u, 0u) ^ vec3<u32>(global4.x, arg_0.c.x, global4.x)))) ^ ~u_input.a;
        for (; ; ) {
            if (LOOP_COUNTERS[9u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
            global1 = array<Struct_2, 12>();
            let var_2 = _wgslsmith_f_op_f32(step(var_0.d, _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -423f)) - _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(min(var_0.d, var_0.d))))), 740f))));
            break;
        }
        continue;
    }
    global4 = max(abs(~(~(~arg_0.c.yxx))), u_input.a);
    var var_1 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(round(_wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(_wgslsmith_div_vec4_f32(vec4<f32>(1000f, var_0.d, var_0.d, var_0.d), vec4<f32>(1000f, var_0.d, var_0.d, var_0.d)), _wgslsmith_f_op_vec4_f32(min(vec4<f32>(var_0.d, var_0.d, -666f, var_0.d), vec4<f32>(var_0.d, var_0.d, 2296f, 794f))))))) * _wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(-498f + _wgslsmith_f_op_f32(step(-1000f, var_0.d))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(var_0.d * 795f) + 142f), _wgslsmith_f_op_f32(-1178f * _wgslsmith_f_op_f32(-944f)), var_0.d) * _wgslsmith_f_op_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(var_0.d * var_0.d), _wgslsmith_f_op_f32(floor(-601f)), 1260f, -1197f) + _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(step(vec4<f32>(var_0.d, 641f, 609f, var_0.d), vec4<f32>(var_0.d, 293f, 934f, 1297f)))))));
    if (firstTrailingBit(u_input.a.x) != (36134u ^ _wgslsmith_mod_u32(13858u, var_0.e.c.x))) {
        let var_2 = u_input.b;
        if (true) {
            var var_3 = !func_5(arg_0.a, ~_wgslsmith_dot_vec3_i32(firstLeadingBit(vec3<i32>(u_input.b, -13380i, -113i)), -vec3<i32>(0i, 2147483647i, 68071i))).b;
            let var_4 = Struct_2(!global0[_wgslsmith_index_u32(~28084u, 26u)], Struct_1(arg_0.a | var_0.c.b, select(!any(vec3<bool>(true, false, true)), !all(vec3<bool>(var_0.e.b, arg_0.a, var_0.a.x)), func_6(Struct_2(var_0.a, Struct_1(false, true, vec4<u32>(var_0.e.c.x, 18915u, 56572u, 4294967295u)), Struct_1(arg_0.b, true, vec4<u32>(u_input.a.x, 34982u, 52027u, 106501u)), var_0.d, Struct_1(arg_0.b, false, var_0.e.c))).x), _wgslsmith_div_vec4_u32(~arg_0.c, ~var_0.c.c)), arg_0, var_0.d, Struct_1(arg_0.b | false, var_1.x >= _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_1.x)), arg_0.c));
            global2 = array<Struct_2, 29>();
        }
        let var_3 = var_0.d;
    }
    return (_wgslsmith_f_op_f32(select(var_1.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-203f) * _wgslsmith_f_op_f32(select(1103f, 1697f, true))), func_5(true, _wgslsmith_dot_vec4_i32(vec4<i32>(i32(-2147483648), i32(-2147483648), u_input.b, u_input.b), vec4<i32>(u_input.b, i32(-2147483648), u_input.b, 0i))).b)) <= _wgslsmith_f_op_f32(-498f * _wgslsmith_f_op_f32(f32(-1f) * -631f))) && all(vec4<bool>(true, true, true, true));
}

fn func_4() -> Struct_1 {
    global1 = array<Struct_2, 12>();
    switch (79038i) {
        case -15036i: {
            var var_0 = _wgslsmith_f_op_f32(floor(166f));
            loop {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                var var_1 = !(!select(vec4<bool>(select(true, true, true), any(vec4<bool>(false, false, true, false)), all(global0[_wgslsmith_index_u32(global4.x, 26u)]), all(vec3<bool>(true, true, false))), vec4<bool>(true, true, true, true), true));
                var_0 = -786f;
                var var_2 = select(var_1.x && false, !(!var_1.x), var_1.x);
                global1 = array<Struct_2, 12>();
            }
            var var_1 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(abs(vec4<f32>(1511f, 412f, 185f, 349f))))) - vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1010f * 364f))), _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(select(821f, 144f, true)))))), -496f, -2306f));
            switch (24821i) {
                default: {
                    global2 = array<Struct_2, 29>();
                    var var_2 = -753f;
                    let var_3 = func_7(func_5(!all(vec2<bool>(true, true)), 22806i));
                }
            }
        }
        case -17533i: {
        }
        case 12419i: {
        }
        default: {
            for (var var_0 = 3290i; var_0 == 1i; var_0 += 1i) {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                var_0 = u_input.b;
                global3 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(200f, 321f, true))));
            }
            if (true) {
                var var_0 = ~(~(~_wgslsmith_clamp_vec3_u32(~u_input.a, u_input.a, ~vec3<u32>(global4.x, u_input.a.x, global4.x))));
                var var_1 = func_5((_wgslsmith_dot_vec4_i32(vec4<i32>(u_input.b, i32(-2147483648), u_input.b, 2147483647i) ^ vec4<i32>(u_input.b, -1i, 28655i, -21435i), vec4<i32>(u_input.b, 18353i, u_input.b, u_input.b)) ^ -select(u_input.b, u_input.b, false)) >= (~(i32(-1i) * -25800i) | u_input.b), i32(-1i) * -min(i32(-1i) * -1i, ~u_input.b));
            }
            if (any(vec4<bool>(1u > _wgslsmith_dot_vec3_u32(vec3<u32>(global4.x, 23436u, 38543u) << (u_input.a % vec3<u32>(32u)), u_input.a), true, true, (true && func_5(false, -4343i).b) & true))) {
                var var_0 = _wgslsmith_mod_vec4_u32(vec4<u32>(1u, 4294967295u, countOneBits(_wgslsmith_mod_u32(u_input.a.x, ~u_input.a.x)), ~u_input.a.x), vec4<u32>(min(u_input.a.x, u_input.a.x), u_input.a.x, ~70559u, ~(~u_input.a.x)));
                let var_1 = _wgslsmith_f_op_vec4_f32(_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(1806f, -1501f, -1000f, -143f) * vec4<f32>(1068f, 1032f, -172f, 870f)) + _wgslsmith_f_op_vec4_f32(-vec4<f32>(-349f, -298f, -468f, 394f))) + _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(-604f, -828f, -198f, 830f) * vec4<f32>(783f, -835f, -543f, -694f)), _wgslsmith_f_op_vec4_f32(-vec4<f32>(-1344f, -648f, -785f, 1081f)))), vec4<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -2731f) - _wgslsmith_f_op_f32(1290f * 222f)), _wgslsmith_div_f32(_wgslsmith_f_op_f32(trunc(-2137f)), _wgslsmith_f_op_f32(1344f * -1176f)), 302f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(1118f, -399f, true))))) * _wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(-508f))), _wgslsmith_f_op_f32(sign(453f)), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(trunc(447f)), -1011f)), -321f))));
            }
            var var_0 = func_5(!select(any(select(vec3<bool>(false, true, false), vec3<bool>(true, true, true), vec3<bool>(true, false, true))), false, true), 67099i);
        }
    }
    var var_0 = func_5(select(~u_input.b == (max(u_input.b, u_input.b) >> (88655u % 32u)), any(vec4<bool>(true, true, true, true)), all(vec4<bool>(true, true, any(global0[_wgslsmith_index_u32(u_input.a.x, 26u)]), true))), ~_wgslsmith_dot_vec3_i32(_wgslsmith_clamp_vec3_i32(vec3<i32>(u_input.b, 1i, -2175i), vec3<i32>(i32(-2147483648), -9649i, u_input.b), vec3<i32>(u_input.b, u_input.b, 31429i)) << (u_input.a % vec3<u32>(32u)), _wgslsmith_add_vec3_i32(vec3<i32>(38722i, u_input.b, u_input.b), _wgslsmith_mod_vec3_i32(vec3<i32>(0i, -44192i, u_input.b), vec3<i32>(1i, 3346i, u_input.b)))));
    if (var_0.b) {
        var var_1 = select(select(true, func_6(global2[_wgslsmith_index_u32(~abs(var_0.c.x), 29u)]).x, func_6(global1[_wgslsmith_index_u32(4264u, 12u)]).x), var_0.b, true | (firstTrailingBit(_wgslsmith_div_i32(u_input.b, -8760i)) <= ~(~(i32(-2147483648)))));
        if (var_0.b) {
            let var_2 = vec2<u32>(reverseBits(~_wgslsmith_sub_u32(3264u, _wgslsmith_dot_vec2_u32(vec2<u32>(var_0.c.x, u_input.a.x), vec2<u32>(global4.x, u_input.a.x)))), _wgslsmith_clamp_u32(func_5(true, firstTrailingBit(u_input.b)).c.x, select(~(~global4.x), reverseBits(0u), select(var_0.a, var_0.b, true) && !var_0.a), abs(4294967295u)));
        }
        var var_2 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(sign(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(322f, 1154f)) - _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(-1000f, 952f) - vec2<f32>(-252f, 917f)))))));
    }
    global0 = array<vec2<bool>, 26>();
    return func_5(all(vec4<bool>(!(!var_0.a), select(true, var_0.a, var_0.a), func_7(Struct_1(false, var_0.a, var_0.c)), !var_0.b)), _wgslsmith_dot_vec4_i32(vec4<i32>(firstLeadingBit(-62231i) >> (~var_0.c.x % 32u), -_wgslsmith_sub_i32(u_input.b, 44327i), _wgslsmith_clamp_i32(_wgslsmith_add_i32(-5338i, u_input.b), i32(-2147483648), _wgslsmith_add_i32(u_input.b, u_input.b)), u_input.b), ~(~min(vec4<i32>(u_input.b, 22493i, u_input.b, -32260i), vec4<i32>(u_input.b, u_input.b, -52050i, u_input.b)))));
}

fn func_8(arg_0: Struct_1, arg_1: vec2<i32>, arg_2: Struct_1) -> f32 {
    let var_0 = ~(~(~arg_2.c.x));
    var var_1 = !any(!vec3<bool>(u_input.a.x >= global4.x, func_7(Struct_1(true, true, arg_0.c)), false));
    let var_2 = global2[_wgslsmith_index_u32(select(_wgslsmith_div_u32(_wgslsmith_sub_u32(1u, ~global4.x), 1u), reverseBits(arg_0.c.x), false), 29u)];
    let var_3 = func_4();
    global3 = -1515f;
    return var_2.d;
}

fn func_3(arg_0: bool) -> bool {
    global0 = array<vec2<bool>, 26>();
    global2 = array<Struct_2, 29>();
    var var_0 = Struct_2(vec2<bool>(true, true), Struct_1(_wgslsmith_div_f32(-714f, _wgslsmith_f_op_f32(-629f - -334f)) < _wgslsmith_f_op_f32(func_8(Struct_1(arg_0, arg_0, vec4<u32>(u_input.a.x, u_input.a.x, u_input.a.x, u_input.a.x)), ~vec2<i32>(i32(-2147483648), -2590i), func_4())), true, abs(vec4<u32>(global4.x, 30096u, u_input.a.x, global4.x) & vec4<u32>(39800u, 4294967295u, global4.x, 4294967295u))), Struct_1(any(vec3<bool>(all(vec2<bool>(false, false)), u_input.a.x == 68101u, arg_0 && arg_0)), true, min(func_4().c, ~(vec4<u32>(u_input.a.x, 14818u, global4.x, 86885u) ^ vec4<u32>(global4.x, global4.x, u_input.a.x, u_input.a.x)))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(_wgslsmith_div_f32(177f, 1517f)))), 517f), Struct_1(true, true, ~abs(~vec4<u32>(1u, u_input.a.x, 64900u, 4294967295u))));
    let var_1 = Struct_1(var_0.b.a, func_6(Struct_2(!select(vec2<bool>(false, arg_0), global0[_wgslsmith_index_u32(23687u, 26u)], var_0.a), Struct_1(arg_0, u_input.b >= u_input.b, vec4<u32>(0u, global4.x, global4.x, 0u)), Struct_1(var_0.c.b | var_0.b.a, var_0.b.b, abs(vec4<u32>(u_input.a.x, var_0.c.c.x, u_input.a.x, global4.x))), -978f, Struct_1(global4.x >= var_0.b.c.x, any(vec4<bool>(arg_0, true, true, arg_0)), ~var_0.b.c))).x, vec4<u32>(~1u, 1u, ~min(~1u, abs(12004u)), global4.x));
    global2 = array<Struct_2, 29>();
    return !all(select(!func_6(Struct_2(vec2<bool>(true, arg_0), var_1, Struct_1(var_1.a, arg_0, var_0.e.c), -338f, Struct_1(var_1.b, false, vec4<u32>(u_input.a.x, 46639u, var_0.e.c.x, global4.x)))), vec4<bool>(!arg_0, func_5(false, u_input.b).a, arg_0, arg_0), vec4<bool>(var_1.a, select(var_1.b, arg_0, false), arg_0, true)));
}

fn func_9(arg_0: vec4<bool>, arg_1: vec4<u32>, arg_2: f32, arg_3: u32) -> Struct_1 {
    global3 = _wgslsmith_f_op_f32(abs(arg_2));
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
        }
        let var_0 = vec2<bool>(arg_0.x, !arg_0.x && arg_0.x);
    }
    var var_0 = global1[_wgslsmith_index_u32(~global4.x, 12u)];
    let var_1 = Struct_1(!any(func_6(global1[_wgslsmith_index_u32(~1u, 12u)])), arg_0.x != !(!(u_input.b > i32(-2147483648))), select(arg_1, vec4<u32>(arg_3, 45864u, ~arg_3, 128268u), func_6(Struct_2(select(vec2<bool>(var_0.b.a, false), vec2<bool>(true, var_0.b.b), global0[_wgslsmith_index_u32(global4.x, 26u)]), Struct_1(false, var_0.a.x, vec4<u32>(6760u, 1u, var_0.b.c.x, var_0.b.c.x)), var_0.b, 161f, func_4())).x));
    let var_2 = 27144u;
    return Struct_1(!(arg_0.x || ((false && var_0.e.a) | (u_input.b > i32(-2147483648)))), var_1.a, vec4<u32>(0u, _wgslsmith_sub_u32(0u, global4.x) & reverseBits(61813u), var_0.b.c.x, 4294967295u));
}

fn func_2(arg_0: vec3<bool>, arg_1: u32, arg_2: Struct_2) -> vec3<u32> {
    global1 = array<Struct_2, 12>();
    var var_0 = func_9(select(vec4<bool>(arg_2.b.b, all(select(vec3<bool>(false, false, arg_0.x), arg_0, arg_0)), func_3(true) == false, false), func_6(Struct_2(!global0[_wgslsmith_index_u32(u_input.a.x, 26u)], func_4(), func_5(true, u_input.b), _wgslsmith_f_op_f32(-444f * arg_2.d), arg_2.c)), any(!vec2<bool>(true, arg_2.a.x)) && arg_0.x), func_4().c, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(724f * -1083f)), arg_2.c.c.x);
    global3 = -1815f;
    var var_1 = _wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(step(vec2<f32>(arg_2.d, arg_2.d), vec2<f32>(485f, -166f))) + _wgslsmith_f_op_vec2_f32(step(vec2<f32>(-490f, arg_2.d), vec2<f32>(295f, arg_2.d))))))));
    let var_2 = _wgslsmith_f_op_f32(sign(arg_2.d));
    return reverseBits(firstTrailingBit(~vec3<u32>(arg_1 ^ var_0.c.x, 0u, arg_1 ^ global4.x)));
}

fn func_10(arg_0: Struct_1, arg_1: vec3<u32>, arg_2: u32) -> bool {
    for (; ; ) {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        global1 = array<Struct_2, 12>();
        var var_0 = abs(vec4<i32>(_wgslsmith_clamp_i32(min(_wgslsmith_add_i32(-12533i, 2147483647i), u_input.b ^ u_input.b), firstTrailingBit(u_input.b), 7526i), u_input.b, firstLeadingBit(firstTrailingBit(~(i32(-2147483648)))), _wgslsmith_sub_i32(u_input.b, _wgslsmith_dot_vec4_i32(-vec4<i32>(i32(-2147483648), u_input.b, 0i, u_input.b), -vec4<i32>(u_input.b, -10981i, u_input.b, u_input.b)))));
        var var_1 = Struct_1(arg_0.b, false, vec4<u32>(0u, 1u, _wgslsmith_dot_vec4_u32(~select(vec4<u32>(10042u, u_input.a.x, 33426u, u_input.a.x), vec4<u32>(1u, arg_2, global4.x, 0u), vec4<bool>(true, arg_0.a, false, true)), ~(~arg_0.c)), u_input.a.x));
    }
    var var_0 = arg_0.b;
    global4 = ~arg_1;
    let var_1 = arg_0;
    let var_2 = vec2<bool>(~4294967295u < arg_0.c.x, var_1.b);
    return var_1.a & !(!(true | func_5(var_1.a, u_input.b).b));
}

fn func_1(arg_0: i32, arg_1: Struct_1, arg_2: Struct_1) -> i32 {
    switch (firstTrailingBit(1i)) {
        case i32(-2147483648): {
            loop {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
                let var_0 = -arg_0;
                global3 = 377f;
                break;
            }
            let var_0 = Struct_1(func_10(Struct_1(true, all(vec3<bool>(arg_1.a, arg_2.b, false)), ~(~vec4<u32>(1u, 4294967295u, 1u, 45765u))), func_2(!vec3<bool>(true, arg_2.a, arg_2.b), global4.x, Struct_2(vec2<bool>(arg_2.b, arg_2.a), arg_1, Struct_1(false, arg_1.b, arg_2.c), _wgslsmith_f_op_f32(f32(-1f) * -978f), Struct_1(false, arg_2.b, vec4<u32>(arg_1.c.x, arg_2.c.x, 4294967295u, u_input.a.x)))), 0u ^ (u_input.a.x | arg_1.c.x)), !all(vec3<bool>(arg_2.a, arg_2.b, false)), vec4<u32>(45441u, arg_1.c.x, arg_2.c.x, 48384u));
        }
        case -11883i: {
            if (func_7(func_9(select(vec4<bool>(func_9(vec4<bool>(true, false, true, true), arg_2.c, 1517f, 20228u).b, arg_1.c.x <= 4294967295u, !arg_1.b, !arg_1.a), vec4<bool>(true, true, true, true), select(false, func_6(global2[_wgslsmith_index_u32(1u, 29u)]).x, true)), vec4<u32>(_wgslsmith_dot_vec3_u32(vec3<u32>(7706u, arg_2.c.x, global4.x) << (u_input.a % vec3<u32>(32u)), min(arg_2.c.yyz, vec3<u32>(1u, 112805u, 1u))), ~(~arg_1.c.x), 4294967295u, 1u), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-577f), _wgslsmith_f_op_f32(abs(762f)))) * _wgslsmith_f_op_f32(-777f + _wgslsmith_f_op_f32(select(1363f, 1116f, arg_1.b)))), 9353u))) {
            }
            global4 = _wgslsmith_clamp_vec3_u32(_wgslsmith_div_vec3_u32(max(select(arg_2.c.wwx, vec3<u32>(arg_1.c.x, global4.x, 4294967295u), vec3<bool>(arg_2.b, true, false)), vec3<u32>(0u, arg_2.c.x, arg_2.c.x)) << (vec3<u32>(1u, func_9(vec4<bool>(false, arg_1.a, arg_2.a, false), vec4<u32>(1u, arg_2.c.x, 115670u, 0u), 267f, global4.x).c.x, ~arg_1.c.x) % vec3<u32>(32u)), vec3<u32>(104631u, arg_1.c.x, abs(global4.x)) ^ vec3<u32>(~arg_2.c.x, 0u, ~arg_1.c.x)), reverseBits(reverseBits(vec3<u32>(~35613u, 7793u, ~90068u))), vec3<u32>(arg_2.c.x, _wgslsmith_mult_u32(firstTrailingBit(24175u) << (~1u % 32u), u_input.a.x), _wgslsmith_clamp_u32(firstLeadingBit(global4.x), _wgslsmith_div_u32(4294967295u, 121342u) & _wgslsmith_mod_u32(1u, arg_2.c.x), 8719u)));
            global1 = array<Struct_2, 12>();
            global1 = array<Struct_2, 12>();
        }
        case 468i: {
            loop {
                if (LOOP_COUNTERS[16u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
                var var_0 = func_5(!arg_2.a, select(2147483647i, 1i, (1u & u_input.a.x) <= ~arg_2.c.x) | -u_input.b);
            }
            global0 = array<vec2<bool>, 26>();
        }
        case 18436i: {
            for (var var_0: i32; var_0 != 37120i; global3 = _wgslsmith_f_op_f32(min(930f, 634f))) {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                continue;
            }
        }
        default: {
            for (var var_0 = ~(~u_input.b); var_0 != 59767i; var_0 += 1i) {
                if (LOOP_COUNTERS[18u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
                var var_1 = Struct_1(arg_2.b, true, vec4<u32>(17518u, ~_wgslsmith_add_u32(_wgslsmith_add_u32(u_input.a.x, 0u), _wgslsmith_clamp_u32(global4.x, 0u, arg_2.c.x)), 35796u, _wgslsmith_add_u32(~(~u_input.a.x), _wgslsmith_sub_u32(~arg_2.c.x, arg_1.c.x))));
                let var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(1537f - _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(abs(1404f)), _wgslsmith_f_op_f32(func_8(arg_1, vec2<i32>(1i, u_input.b), arg_2))))) + 2353f));
                var var_3 = global0[_wgslsmith_index_u32(4294967295u, 26u)];
                break;
            }
            return -39005i;
        }
    }
    switch (-1i) {
        default: {
            var var_0 = Struct_1(func_7(func_5(true, u_input.b)) && false, arg_2.b && all(vec4<bool>(true, arg_1.a, func_6(global1[_wgslsmith_index_u32(1u, 12u)]).x, arg_1.c.x == global4.x)), vec4<u32>(arg_1.c.x, min(abs(1u), ~_wgslsmith_clamp_u32(1u, arg_2.c.x, arg_2.c.x)), _wgslsmith_mult_u32(func_5(true, abs(1i)).c.x, 0u | (global4.x | 4294967295u)), (func_2(vec3<bool>(arg_2.a, arg_1.b, true), 0u, Struct_2(global0[_wgslsmith_index_u32(25784u, 26u)], Struct_1(true, arg_1.b, vec4<u32>(global4.x, u_input.a.x, arg_1.c.x, arg_1.c.x)), Struct_1(false, false, vec4<u32>(3603u, arg_2.c.x, arg_1.c.x, 87699u)), -1596f, Struct_1(arg_1.b, true, vec4<u32>(1u, global4.x, 67619u, arg_2.c.x)))).x >> (_wgslsmith_div_u32(arg_1.c.x, 0u) % 32u)) >> (global4.x % 32u)));
            let var_1 = Struct_1(all(!func_6(global2[_wgslsmith_index_u32(0u, 29u)])), true, _wgslsmith_clamp_vec4_u32(max(~vec4<u32>(u_input.a.x, 1u, global4.x, global4.x), ~vec4<u32>(4294967295u, 0u, 19195u, global4.x) | firstTrailingBit(vec4<u32>(4294967295u, 4290u, 3846u, 4294967295u))), var_0.c, vec4<u32>(2583u, 1u >> (0u % 32u), arg_2.c.x, 53466u)));
            switch (~(i32(-2147483648)) >> (global4.x % 32u)) {
                case 1i: {
                }
                case -5240i: {
                    let var_2 = vec2<i32>(u_input.b, 2147483647i);
                    let var_3 = _wgslsmith_f_op_vec2_f32(round(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(_wgslsmith_div_vec2_f32(vec2<f32>(2329f, 964f), vec2<f32>(252f, -1578f)) - _wgslsmith_f_op_vec2_f32(select(vec2<f32>(1083f, -1245f), vec2<f32>(-718f, 857f), arg_1.a))), _wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(-2249f, 1757f))), global0[_wgslsmith_index_u32(_wgslsmith_div_u32(var_1.c.x, 57445u) << (var_0.c.x % 32u), 26u)])) * _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(-1185f, -1263f))) + vec2<f32>(_wgslsmith_f_op_f32(f32(-1f) * -1000f), _wgslsmith_f_op_f32(trunc(941f)))))));
                    var var_4 = u_input.b;
                }
                case 0i: {
                    let var_2 = global1[_wgslsmith_index_u32(var_0.c.x, 12u)];
                    let var_3 = _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-var_2.d)));
                }
                default: {
                }
            }
            global0 = array<vec2<bool>, 26>();
            global4 = ~vec3<u32>(var_1.c.x, abs(_wgslsmith_mod_u32(~1u, max(var_0.c.x, 28994u))), firstTrailingBit(~1u) ^ var_0.c.x);
        }
    }
    let var_0 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1201f - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(147f + 788f))))) * 2380f);
    global3 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(_wgslsmith_div_f32(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(abs(361f)))), var_0))));
    for (var var_1: i32; var_1 > 1i; var_1 -= 1i) {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
        continue;
    }
    return 17833i;
}

fn func_11(arg_0: Struct_2, arg_1: vec4<i32>) -> bool {
    global0 = array<vec2<bool>, 26>();
    if (any(func_6(arg_0).xx)) {
        loop {
            if (LOOP_COUNTERS[20u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
            let var_0 = Struct_2(select(vec2<bool>(func_10(Struct_1(false, arg_0.c.b, vec4<u32>(1u, 43006u, global4.x, 0u)), min(arg_0.c.c.zxy, arg_0.c.c.wzy), ~11803u), true), select(vec2<bool>(arg_0.c.b, arg_1.x == -20720i), vec2<bool>(true, true), any(!vec2<bool>(arg_0.b.a, arg_0.e.a))), global0[_wgslsmith_index_u32(_wgslsmith_add_u32(45025u, func_5(false, -arg_1.x).c.x), 26u)]), arg_0.e, func_4(), arg_0.d, arg_0.b);
            global3 = 124f;
        }
        global3 = _wgslsmith_f_op_f32(func_8(Struct_1(arg_0.e.a, true, ~arg_0.e.c), vec2<i32>(arg_1.x, firstTrailingBit(_wgslsmith_sub_i32(_wgslsmith_mult_i32(u_input.b, 9476i), 27685i))), arg_0.b));
        loop {
            if (LOOP_COUNTERS[21u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
            return func_10(arg_0.e, arg_0.e.c.zyy, _wgslsmith_add_u32(arg_0.c.c.x, _wgslsmith_dot_vec3_u32(~arg_0.e.c.yxy, vec3<u32>(func_2(vec3<bool>(arg_0.b.b, arg_0.e.a, arg_0.c.b), 1u, Struct_2(vec2<bool>(false, true), arg_0.b, arg_0.b, 1098f, Struct_1(arg_0.e.b, false, vec4<u32>(global4.x, global4.x, global4.x, 83577u)))).x, 1u, arg_0.b.c.x))));
        }
        if (false) {
            let var_0 = !select(select(!select(vec2<bool>(arg_0.a.x, true), arg_0.a, global0[_wgslsmith_index_u32(arg_0.c.c.x, 26u)]), !func_6(Struct_2(global0[_wgslsmith_index_u32(arg_0.c.c.x, 26u)], arg_0.b, arg_0.b, arg_0.d, arg_0.b)).zx, vec2<bool>(arg_0.b.a, true)), !select(vec2<bool>(arg_0.b.a, arg_0.a.x), func_6(global2[_wgslsmith_index_u32(global4.x, 29u)]).zy, !arg_0.c.a), !func_6(Struct_2(vec2<bool>(true, false), arg_0.c, Struct_1(true, false, arg_0.c.c), 165f, Struct_1(true, false, arg_0.c.c))).zx);
            var var_1 = u_input.a;
            var var_2 = vec4<bool>(arg_0.b.a, true, all(func_6(Struct_2(global0[_wgslsmith_index_u32(_wgslsmith_div_u32(1u, 31824u), 26u)], Struct_1(arg_0.c.b, true, arg_0.e.c), arg_0.e, arg_0.d, func_5(arg_0.c.b, 22119i))).wz), true);
        }
        loop {
            if (LOOP_COUNTERS[22u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
            let var_0 = arg_1.yzz;
            let var_1 = Struct_2(global0[_wgslsmith_index_u32(min(~(0u << (arg_0.e.c.x % 32u)), arg_0.b.c.x) >> (_wgslsmith_add_u32(countOneBits(global4.x), abs(~arg_0.b.c.x)) % 32u), 26u)], Struct_1(func_7(Struct_1(true, any(vec2<bool>(arg_0.a.x, arg_0.e.a)), vec4<u32>(1u, arg_0.e.c.x, 4294967295u, u_input.a.x))), arg_0.a.x, arg_0.e.c << (select(func_9(vec4<bool>(false, true, arg_0.b.b, false), arg_0.e.c, arg_0.d, global4.x).c, max(arg_0.e.c, vec4<u32>(global4.x, 15728u, 57685u, 33445u)), global4.x <= arg_0.e.c.x) % vec4<u32>(32u))), Struct_1(arg_0.c.b, !arg_0.c.b, arg_0.c.c), _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(func_8(func_5(true, 30129i), _wgslsmith_mult_vec2_i32(var_0.yx, vec2<i32>(-7775i, -4276i) ^ arg_1.zy), func_4())))), func_9(vec4<bool>(true, all(vec4<bool>(false, true, arg_0.a.x, false)), true, ~0u <= ~u_input.a.x), ~arg_0.e.c & max(~arg_0.e.c, vec4<u32>(u_input.a.x, 43803u, arg_0.c.c.x, 4294967295u)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(1000f)) * arg_0.d), global4.x));
            var var_2 = countOneBits(-abs(_wgslsmith_clamp_vec2_i32(vec2<i32>(2240i, arg_1.x) ^ vec2<i32>(u_input.b, u_input.b), -vec2<i32>(8625i, u_input.b), abs(vec2<i32>(var_0.x, -8101i)))));
            global1 = array<Struct_2, 12>();
        }
    }
    var var_0 = vec3<u32>(1u, ((select(arg_0.b.c.x, 12991u, arg_0.b.a) >> (_wgslsmith_add_u32(27724u, 9332u) % 32u)) << ((~global4.x & global4.x) % 32u)) & max(~_wgslsmith_mod_u32(global4.x, 4294967295u), global4.x | u_input.a.x), 1u);
    switch (i32(-2147483648) ^ -arg_1.x) {
        case i32(-2147483648): {
            let var_1 = _wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(vec3<f32>(-1000f, 1000f, -413f), vec3<f32>(arg_0.d, arg_0.d, arg_0.d)) - vec3<f32>(_wgslsmith_f_op_f32(arg_0.d + 931f), _wgslsmith_f_op_f32(1000f + arg_0.d), -660f)))));
            for (; _wgslsmith_sub_i32(select(arg_1.x, arg_1.x, arg_0.e.b && true) << (0u % 32u), 0i) == -2147483647i; ) {
                if (LOOP_COUNTERS[23u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
            }
            global4 = func_5(!func_4().a, _wgslsmith_dot_vec3_i32(arg_1.zzy, -select(~arg_1.xzw, ~vec3<i32>(28109i, -19211i, 2147483647i), vec3<bool>(false, true, arg_0.e.b)))).c.xxw;
            global2 = array<Struct_2, 29>();
        }
        case -11718i: {
            loop {
                if (LOOP_COUNTERS[24u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
                var_0 = ~(~firstLeadingBit(u_input.a)) & vec3<u32>(14892u, _wgslsmith_mult_u32(1u, func_5(!arg_0.b.b, _wgslsmith_dot_vec2_i32(vec2<i32>(u_input.b, arg_1.x), vec2<i32>(-1i, 750i))).c.x), arg_0.c.c.x);
            }
            let var_1 = arg_0.b.a;
            global0 = array<vec2<bool>, 26>();
            var var_2 = vec3<i32>(i32(-1i) * -1i, arg_1.x, 0i ^ _wgslsmith_mult_i32(u_input.b, abs(_wgslsmith_mult_i32(arg_1.x, 2147483647i))));
        }
        case 9747i: {
            var var_1 = _wgslsmith_mod_u32(abs(_wgslsmith_clamp_u32(~var_0.x, ~var_0.x, arg_0.b.c.x)), _wgslsmith_sub_u32(88422u, 4294967295u << ((1u & global4.x) % 32u))) ^ ~2853u;
            switch (u_input.b) {
                default: {
                    var_1 = 22108u;
                    let var_2 = Struct_1(true, !arg_0.a.x, arg_0.e.c);
                    var_0 = ~(~u_input.a);
                }
            }
            let var_2 = vec4<u32>(_wgslsmith_mod_u32(~(~_wgslsmith_sub_u32(global4.x, 4712u)), var_0.x | 1u), arg_0.c.c.x, ~(~_wgslsmith_add_u32(48324u, _wgslsmith_dot_vec3_u32(vec3<u32>(4121u, 41738u, 7008u), vec3<u32>(arg_0.b.c.x, u_input.a.x, arg_0.c.c.x)))), func_2(!vec3<bool>(arg_0.b.b & true, all(arg_0.a), arg_0.d != 406f), _wgslsmith_mod_u32((39217u >> (arg_0.c.c.x % 32u)) & func_4().c.x, 0u), Struct_2(!global0[_wgslsmith_index_u32(~0u, 26u)], Struct_1(1u > u_input.a.x, true, ~arg_0.b.c), arg_0.c, -2026f, Struct_1(any(vec3<bool>(true, arg_0.b.b, arg_0.a.x)), false, arg_0.c.c))).x);
            global4 = select(_wgslsmith_sub_vec3_u32(arg_0.b.c.zzw, vec3<u32>(_wgslsmith_dot_vec4_u32(var_2, arg_0.e.c), 17955u, _wgslsmith_mod_u32(var_2.x, 1u))), vec3<u32>(u_input.a.x, abs(4294967295u), _wgslsmith_add_u32(1690u, var_2.x)), !(!arg_0.e.a));
        }
        default: {
            global0 = array<vec2<bool>, 26>();
            loop {
                if (LOOP_COUNTERS[25u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
                let var_1 = !select(!vec4<bool>(func_4().a, !arg_0.b.a, !arg_0.c.a, !arg_0.a.x), select(!(!vec4<bool>(arg_0.c.a, arg_0.c.a, arg_0.e.a, arg_0.b.a)), !vec4<bool>(arg_0.a.x, arg_0.c.a, false, arg_0.b.a), vec4<bool>(false, false, true, arg_0.c.b)), vec4<bool>(true, arg_0.c.b, true, !(!arg_0.a.x)));
                continue;
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[26u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
        global3 = _wgslsmith_f_op_f32(arg_0.d - _wgslsmith_div_f32(-339f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(f32(-1f) * -848f), _wgslsmith_f_op_f32(-arg_0.d), false)))));
    }
    return func_5(arg_0.b.a, -countOneBits(select(1i, min(2147483647i, -1i), true))).a;
}

@compute
@workgroup_size(1)
fn main() {
    loop {
        if (LOOP_COUNTERS[27u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[27u] = LOOP_COUNTERS[27u] + 1u;
        if (select(false, func_11(global2[_wgslsmith_index_u32(~(~_wgslsmith_mod_u32(4294967295u, 4294967295u)), 29u)], vec4<i32>(_wgslsmith_mult_i32(0i, u_input.b), min(func_1(-42852i, Struct_1(true, true, vec4<u32>(4294967295u, 1u, global4.x, u_input.a.x)), Struct_1(true, true, vec4<u32>(u_input.a.x, 1u, u_input.a.x, 97797u))), -u_input.b), 1i, _wgslsmith_add_i32(-1i & u_input.b, u_input.b >> (13104u % 32u)))), true)) {
        }
        var var_0 = Struct_1(!func_7(Struct_1(true, true, ~vec4<u32>(u_input.a.x, 4294967295u, 31535u, u_input.a.x))), !(8731i != firstTrailingBit(_wgslsmith_sub_i32(u_input.b, i32(-2147483648)))), vec4<u32>(u_input.a.x, global4.x, ~global4.x, u_input.a.x ^ global4.x));
        var var_1 = Struct_2(!vec2<bool>(!func_7(Struct_1(var_0.a, false, vec4<u32>(0u, 91934u, 58224u, global4.x))), func_3(all(vec2<bool>(false, false)))), func_5(var_0.b, -u_input.b << (abs(abs(var_0.c.x)) % 32u)), func_9(!(!(!vec4<bool>(var_0.a, var_0.b, false, var_0.b))), vec4<u32>(_wgslsmith_mod_u32(_wgslsmith_mult_u32(48861u, global4.x), _wgslsmith_mod_u32(4049u, var_0.c.x)), 1u, var_0.c.x, ~var_0.c.x), _wgslsmith_f_op_f32(1f - _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -1000f) - _wgslsmith_f_op_f32(-1942f))), _wgslsmith_dot_vec3_u32(var_0.c.yyz, countOneBits(var_0.c.zxx))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-976f) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(568f + 112f))) - 175f), func_9(vec4<bool>(false, func_3(false), true, !var_0.b), vec4<u32>((var_0.c.x & global4.x) | var_0.c.x, ~var_0.c.x, global4.x, 1u), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(748f)) * _wgslsmith_f_op_f32(min(-957f, 440f))))), countOneBits(~max(0u, var_0.c.x))));
        if (any(global0[_wgslsmith_index_u32(~_wgslsmith_mod_u32(_wgslsmith_div_u32(~0u, var_1.c.c.x), 0u), 26u)])) {
            var var_2 = vec4<i32>(~u_input.b, _wgslsmith_mod_i32(firstTrailingBit(u_input.b), _wgslsmith_mod_i32(min(u_input.b, -1i), u_input.b)), _wgslsmith_div_i32(~u_input.b, _wgslsmith_clamp_i32(i32(-1i) * -u_input.b, -abs(1i), _wgslsmith_sub_i32(~u_input.b, u_input.b))), _wgslsmith_mult_i32(u_input.b, u_input.b));
            var var_3 = _wgslsmith_div_vec4_i32(~(~firstLeadingBit(_wgslsmith_div_vec4_i32(vec4<i32>(-9796i, u_input.b, var_2.x, var_2.x), vec4<i32>(var_2.x, u_input.b, 2147483647i, u_input.b)))), select(vec4<i32>(var_2.x, ~u_input.b, countOneBits(32681i), _wgslsmith_add_i32(var_2.x, 0i)), select(~vec4<i32>(3976i, -5639i, -27090i, 12673i), reverseBits(vec4<i32>(var_2.x, 1i, 6629i, var_2.x)), var_1.e.a), u_input.a.x == _wgslsmith_mod_u32(global4.x, 5550u)) << (~(~var_0.c ^ var_1.b.c) % vec4<u32>(32u)));
            break;
        }
    }
    if (func_10(func_5(all(!select(vec4<bool>(true, true, true, false), vec4<bool>(true, false, true, true), false)), u_input.b), vec3<u32>(~_wgslsmith_mult_u32(_wgslsmith_mod_u32(0u, 1u), max(0u, 0u)), 1u, reverseBits(min(u_input.a.x, u_input.a.x))), 37973u)) {
    }
    for (; ; ) {
        if (LOOP_COUNTERS[28u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[28u] = LOOP_COUNTERS[28u] + 1u;
        global2 = array<Struct_2, 29>();
        for (; ; ) {
            if (LOOP_COUNTERS[29u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[29u] = LOOP_COUNTERS[29u] + 1u;
            global2 = array<Struct_2, 29>();
        }
        switch (countOneBits(-u_input.b)) {
            case -115i: {
                break;
            }
            case 31496i: {
                var var_0 = Struct_1(false, (countOneBits(~u_input.b) & ~(-28548i)) <= i32(-2147483648), abs(~vec4<u32>(min(u_input.a.x, global4.x), _wgslsmith_dot_vec3_u32(vec3<u32>(u_input.a.x, 4294967295u, u_input.a.x), vec3<u32>(u_input.a.x, global4.x, 10386u)), firstLeadingBit(u_input.a.x), ~u_input.a.x)));
                continue;
            }
            case 2147483647i: {
                var var_0 = vec4<bool>(!(!(46228i < _wgslsmith_clamp_i32(i32(-2147483648), 25257i, u_input.b))), func_3(false), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(f32(-1f) * -1153f))) * _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-455f), 1310f, true))) <= -269f, func_6(Struct_2(func_6(Struct_2(vec2<bool>(true, false), Struct_1(false, false, vec4<u32>(0u, 1u, u_input.a.x, 26662u)), Struct_1(false, false, vec4<u32>(17172u, u_input.a.x, u_input.a.x, 60868u)), 403f, Struct_1(true, false, vec4<u32>(23665u, u_input.a.x, global4.x, 4294967295u)))).yy, Struct_1(false, true, vec4<u32>(u_input.a.x, u_input.a.x, u_input.a.x, 58168u) & vec4<u32>(u_input.a.x, 18297u, global4.x, global4.x)), Struct_1(func_3(true), true, vec4<u32>(u_input.a.x, 26819u, 35329u, u_input.a.x)), _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(f32(-1f) * -1079f))), func_5(true, func_1(-4283i, Struct_1(false, false, vec4<u32>(global4.x, u_input.a.x, global4.x, u_input.a.x)), Struct_1(false, false, vec4<u32>(67192u, 1u, global4.x, 1u)))))).x);
                continue;
            }
            case -1i: {
                var var_0 = select(u_input.a.x, 62136u, any(vec3<bool>(true, true, false)) & func_11(Struct_2(vec2<bool>(true, false), Struct_1(false, true, vec4<u32>(20815u, 7682u, 81180u, 60518u)), Struct_1(false, true, vec4<u32>(global4.x, u_input.a.x, 0u, 73400u)), -128f, Struct_1(true, true, vec4<u32>(9138u, u_input.a.x, 0u, 1u))), vec4<i32>(~u_input.b, _wgslsmith_add_i32(u_input.b, u_input.b), abs(-41829i), u_input.b)));
                var var_1 = Struct_1(any(vec4<bool>(func_5(all(vec4<bool>(false, false, false, false)), -7849i).a, false, any(vec3<bool>(true, true, true)), func_9(vec4<bool>(true, true, true, true), max(vec4<u32>(global4.x, 0u, u_input.a.x, 18331u), vec4<u32>(u_input.a.x, global4.x, u_input.a.x, global4.x)), 745f, _wgslsmith_mult_u32(39919u, u_input.a.x)).b)), !(abs(1u << (global4.x % 32u)) <= global4.x), ~(~(~(vec4<u32>(u_input.a.x, 1u, global4.x, global4.x) ^ vec4<u32>(0u, 0u, 1u, global4.x)))));
                var var_2 = firstTrailingBit(-_wgslsmith_div_i32(reverseBits(-5755i), -9649i));
            }
            default: {
            }
        }
    }
    for (var var_0 = i32(-2147483648); var_0 != 49861i; var_0 -= 1i) {
        if (LOOP_COUNTERS[30u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[30u] = LOOP_COUNTERS[30u] + 1u;
        let var_1 = func_5(true, func_1(~u_input.b, Struct_1(!(u_input.a.x >= u_input.a.x), true, firstTrailingBit(~vec4<u32>(2490u, 1u, 6495u, 11997u))), Struct_1(true, true, reverseBits(_wgslsmith_add_vec4_u32(vec4<u32>(1u, global4.x, 0u, u_input.a.x), vec4<u32>(0u, u_input.a.x, 1u, 1u))))));
        var var_2 = func_4();
        if (var_2.b) {
            continue;
        }
    }
    global0 = array<vec2<bool>, 26>();
    let var_0 = Struct_2(func_6(global1[_wgslsmith_index_u32(func_4().c.x, 12u)]).zz, func_9(select(vec4<bool>(true, true, true, true), select(select(vec4<bool>(true, true, false, false), vec4<bool>(true, true, true, false), true), select(vec4<bool>(true, false, true, true), vec4<bool>(false, true, false, false), vec4<bool>(false, false, false, false)), vec4<bool>(false, false, true, true)), all(!global0[_wgslsmith_index_u32(0u, 26u)])), vec4<u32>(~_wgslsmith_clamp_u32(0u, u_input.a.x, 44919u), 1u, ~_wgslsmith_div_u32(u_input.a.x, u_input.a.x), 0u), _wgslsmith_f_op_f32(min(-892f, _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-214f + -408f), 444f, false)))), _wgslsmith_mod_u32(0u, ~(u_input.a.x & u_input.a.x))), Struct_1(global4.x == u_input.a.x, func_7(func_5(all(vec4<bool>(true, false, true, false)), u_input.b)), abs(~vec4<u32>(global4.x, 32796u, 22505u, u_input.a.x))), _wgslsmith_div_f32(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -608f)))), 1f), Struct_1(false, !(8652u <= ~global4.x), ~func_9(vec4<bool>(false, true, true, true), vec4<u32>(global4.x, 0u, u_input.a.x, global4.x), 1078f, u_input.a.x).c << (_wgslsmith_sub_vec4_u32(_wgslsmith_div_vec4_u32(vec4<u32>(60246u, u_input.a.x, 4132u, 1u), vec4<u32>(2339u, u_input.a.x, 1u, u_input.a.x)), vec4<u32>(1u, 8010u, u_input.a.x, 5318u)) % vec4<u32>(32u))));
    var var_1 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(f32(-1f) * -565f))) + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(var_0.d))) * _wgslsmith_f_op_f32(f32(-1f) * -1034f)) - _wgslsmith_f_op_f32(ceil(1340f))));
    global0 = array<vec2<bool>, 26>();
    let x = u_input.a;
    s_output = StorageBuffer(~var_0.e.c.x);
}

`;