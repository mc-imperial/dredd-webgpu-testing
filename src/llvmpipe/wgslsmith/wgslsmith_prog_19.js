export const input = [80,125,127,239,112,113,62,41,182,152,29,67,123,124,195,87,223,58,223,120,221,95,150,210,19,141,86,23,155,190,100,250,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [80,125,127,239,112,113,62,41,182,152,29,67,123,124,195,87,223,58,223,120,221,95,150,210,19,141,86,23,155,190,100,250,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[80,125,127,239,112,113,62,41,182,152,29,67,123,124,195,87,223,58,223,120,221,95,150,210,19,141,86,23,155,190,100,250]}
// Seed: 9077738811824554296

struct Struct_1 {
    a: vec3<i32>,
    b: i32,
    c: vec2<u32>,
    d: vec2<u32>,
}

struct Struct_2 {
    a: i32,
    b: u32,
}

struct Struct_3 {
    a: Struct_1,
    b: Struct_2,
    c: Struct_1,
}

struct UniformBuffer {
    a: u32,
    b: vec4<i32>,
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

var<private> global0: array<Struct_1, 28>;

var<private> LOOP_COUNTERS: array<u32, 25>;

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a / b, a / vec3<u32>(2u), ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn func_6(arg_0: bool) -> vec3<i32> {
    global0 = array<Struct_1, 28>();
    global0 = array<Struct_1, 28>();
    var var_0 = Struct_3(global0[_wgslsmith_index_u32(1u << (u_input.a % 32u), 28u)], Struct_2(u_input.b.x, ~(~(1u & u_input.a))), global0[_wgslsmith_index_u32(~(~35213u), 28u)]);
    switch (-min(_wgslsmith_clamp_i32(firstTrailingBit(-u_input.b.x), -u_input.b.x & abs(var_0.b.a), 1i), reverseBits(1i))) {
        case 49880i: {
            var_0 = Struct_3(Struct_1(_wgslsmith_mod_vec3_i32(vec3<i32>(_wgslsmith_sub_i32(0i, u_input.b.x), u_input.b.x | 20031i, reverseBits(1i)), vec3<i32>(_wgslsmith_mod_i32(u_input.b.x, var_0.c.a.x), 18705i, -u_input.b.x)), max(~1i, countOneBits(u_input.b.x)), ~min(~vec2<u32>(u_input.a, var_0.b.b), max(var_0.a.d, vec2<u32>(53724u, var_0.a.d.x))), var_0.c.d & vec2<u32>(22166u, 60899u)), Struct_2(0i, ~_wgslsmith_sub_u32(var_0.a.c.x, 45255u) | ~(~var_0.a.c.x)), Struct_1(var_0.c.a, u_input.b.x, var_0.a.d, var_0.c.d));
            loop {
                if (LOOP_COUNTERS[0u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
            }
            let var_1 = Struct_1(_wgslsmith_mod_vec3_i32(select(~u_input.b.wxy, vec3<i32>(~(i32(-2147483648)), _wgslsmith_dot_vec3_i32(u_input.b.wwz, var_0.a.a), ~u_input.b.x), any(select(vec4<bool>(false, false, arg_0, arg_0), vec4<bool>(true, arg_0, true, arg_0), true))), -(select(vec3<i32>(-27305i, var_0.a.a.x, u_input.b.x), vec3<i32>(-15994i, -25381i, 1i), arg_0) << (~vec3<u32>(u_input.a, 23614u, 1u) % vec3<u32>(32u)))), ~(_wgslsmith_dot_vec4_i32(-vec4<i32>(32350i, 23666i, var_0.c.b, -1i), abs(vec4<i32>(u_input.b.x, -1i, -931i, var_0.c.a.x))) << (var_0.c.d.x % 32u)), _wgslsmith_div_vec2_u32(var_0.a.d, var_0.a.d), var_0.a.c);
            var_0 = Struct_3(var_0.c, var_0.b, global0[_wgslsmith_index_u32(~_wgslsmith_mod_u32(~36841u, ~0u), 28u)]);
            switch (var_0.a.b) {
                case 2147483647i: {
                    global0 = array<Struct_1, 28>();
                    var var_2 = ~_wgslsmith_add_vec2_u32(var_1.c, ~firstTrailingBit(var_1.c)) >> (var_0.a.d % vec2<u32>(32u));
                    var var_3 = _wgslsmith_add_vec3_u32(vec3<u32>(~1u & var_0.c.c.x, var_1.d.x, 4294967295u), _wgslsmith_add_vec3_u32(_wgslsmith_clamp_vec3_u32(min(vec3<u32>(1u, var_1.d.x, u_input.a), ~vec3<u32>(var_0.b.b, var_2.x, var_2.x)), vec3<u32>(0u, ~4294967295u, 1u), vec3<u32>(~var_1.c.x, 33194u, ~4294967295u)), firstTrailingBit(vec3<u32>(1u, u_input.a, var_2.x)) << (_wgslsmith_mult_vec3_u32(firstLeadingBit(vec3<u32>(0u, var_2.x, u_input.a)), vec3<u32>(10705u, 1u, 1u)) % vec3<u32>(32u))));
                    var var_4 = Struct_1(_wgslsmith_mult_vec3_i32(var_0.a.a & var_0.a.a, ~_wgslsmith_mod_vec3_i32(var_1.a, var_1.a)) & max(abs(reverseBits(u_input.b.yyx)), select(vec3<i32>(var_1.b, var_1.b, -94525i), _wgslsmith_mod_vec3_i32(u_input.b.zzx, vec3<i32>(u_input.b.x, 16352i, var_0.a.b)), all(vec4<bool>(arg_0, arg_0, arg_0, true)))), u_input.b.x, var_1.c, max(~var_1.c, vec2<u32>(~1u, _wgslsmith_add_u32(58821u, 1u))));
                }
                case -62677i: {
                    global0 = array<Struct_1, 28>();
                    var var_2 = !(1u == u_input.a);
                    var var_3 = _wgslsmith_f_op_vec2_f32(-vec2<f32>(1f, 1f));
                    global0 = array<Struct_1, 28>();
                }
                case -53173i: {
                    var var_2 = arg_0;
                }
                case -17202i: {
                    let var_2 = arg_0;
                    var var_3 = u_input.b;
                    var var_4 = 1000f;
                }
                default: {
                    global0 = array<Struct_1, 28>();
                    global0 = array<Struct_1, 28>();
                    let var_2 = arg_0;
                }
            }
        }
        default: {
            global0 = array<Struct_1, 28>();
            let var_1 = -535f;
        }
    }
    var_0 = Struct_3(Struct_1(-_wgslsmith_add_vec3_i32(vec3<i32>(var_0.b.a, u_input.b.x, u_input.b.x), ~u_input.b.yxw), u_input.b.x, var_0.c.d, ~max(~vec2<u32>(24208u, 0u), min(vec2<u32>(49087u, var_0.a.d.x), vec2<u32>(1u, var_0.b.b)))), var_0.b, Struct_1(_wgslsmith_div_vec3_i32(vec3<i32>(var_0.b.a, i32(-1i) * -1i, firstTrailingBit(31971i)), countOneBits(var_0.a.a)), _wgslsmith_clamp_i32(select(var_0.b.a, var_0.b.a, arg_0) ^ -var_0.a.b, abs(1i), -u_input.b.x), ~firstTrailingBit(firstTrailingBit(vec2<u32>(u_input.a, u_input.a))), _wgslsmith_div_vec2_u32(var_0.c.d, select(~var_0.c.d, ~var_0.a.c, true != arg_0))));
    return _wgslsmith_div_vec3_i32(u_input.b.zyz, -u_input.b.xxy);
}

fn func_5() -> bool {
    var var_0 = -877f;
    for (var var_1: i32; var_1 < 2147483647i; var_1 -= 1i) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        let var_2 = Struct_1(~_wgslsmith_sub_vec3_i32(vec3<i32>(u_input.b.x, i32(-1i) * -30156i, -1i << (u_input.a % 32u)), func_6(true)), max(-u_input.b.x, ~(-11755i)), _wgslsmith_mult_vec2_u32(_wgslsmith_mult_vec2_u32(_wgslsmith_mod_vec2_u32(vec2<u32>(u_input.a, 43806u), vec2<u32>(40306u, u_input.a)), vec2<u32>(u_input.a, 0u)), vec2<u32>(~30503u, 4294967295u)) | vec2<u32>(u_input.a, ~max(1u, u_input.a)), vec2<u32>(4294967295u, _wgslsmith_clamp_u32(~6693u, 68221u, u_input.a)) ^ _wgslsmith_add_vec2_u32(vec2<u32>(min(u_input.a, 5504u), ~0u), ~vec2<u32>(1u, u_input.a) & ~vec2<u32>(38219u, u_input.a)));
    }
    global0 = array<Struct_1, 28>();
    for (var var_1 = -37864i; var_1 > 44142i; var_1 -= 1i) {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        var_0 = 210f;
        switch (-u_input.b.x) {
            case -1i: {
                let var_2 = _wgslsmith_add_u32(abs(_wgslsmith_div_u32(~u_input.a, _wgslsmith_add_u32(u_input.a, 1u) | ~1u)), u_input.a);
                let var_3 = _wgslsmith_f_op_vec2_f32(-_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(floor(vec2<f32>(614f, -271f))), _wgslsmith_f_op_vec2_f32(vec2<f32>(-406f, 1143f) + vec2<f32>(-937f, 1687f)), true))), _wgslsmith_f_op_vec2_f32(step(vec2<f32>(1f, 1f), _wgslsmith_f_op_vec2_f32(round(_wgslsmith_f_op_vec2_f32(step(vec2<f32>(1224f, -1176f), vec2<f32>(-297f, -1000f)))))))));
            }
            default: {
                let var_2 = Struct_2((u_input.b.x << (u_input.a % 32u)) & reverseBits(u_input.b.x), 4294967295u);
                let var_3 = Struct_3(global0[_wgslsmith_index_u32(var_2.b, 28u)], var_2, global0[_wgslsmith_index_u32(var_2.b, 28u)]);
            }
        }
        var_1 = countOneBits(_wgslsmith_mod_i32(u_input.b.x, u_input.b.x));
        continue;
    }
    var var_1 = Struct_3(Struct_1(vec3<i32>(firstLeadingBit(max(u_input.b.x, u_input.b.x)), ~u_input.b.x, _wgslsmith_clamp_i32(-u_input.b.x, firstLeadingBit(-4854i), ~0i)), 7773i, _wgslsmith_mod_vec2_u32(~_wgslsmith_mod_vec2_u32(vec2<u32>(1u, 1u), vec2<u32>(u_input.a, 1u)), vec2<u32>(1u, 1u)), firstTrailingBit(_wgslsmith_mod_vec2_u32(~vec2<u32>(62809u, u_input.a), ~vec2<u32>(1u, u_input.a)))), Struct_2(i32(-1i) * i32(-2147483648), ~(1u << ((u_input.a & u_input.a) % 32u))), Struct_1(min(u_input.b.yxx, _wgslsmith_sub_vec3_i32(u_input.b.yzz, u_input.b.yyz) & u_input.b.yxx), i32(-2147483648), abs(firstTrailingBit(firstLeadingBit(vec2<u32>(47980u, u_input.a)))), vec2<u32>(abs(~u_input.a), u_input.a)));
    return (true | all(vec4<bool>(true, true, true, true))) | false;
}

fn func_7(arg_0: i32, arg_1: vec2<bool>) -> f32 {
    global0 = array<Struct_1, 28>();
    if (_wgslsmith_f_op_f32(max(-761f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(-828f)))))) == _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(-634f, 458f)) + -759f) + _wgslsmith_f_op_f32(1989f * _wgslsmith_f_op_f32(193f - 502f)))))) {
        for (var var_0: i32; ; var_0 += 1i) {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            var_0 = ((-reverseBits(u_input.b.x) >> (u_input.a % 32u)) ^ -24272i) ^ -firstTrailingBit(7335i);
        }
        loop {
            if (LOOP_COUNTERS[4u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
            global0 = array<Struct_1, 28>();
            global0 = array<Struct_1, 28>();
            break;
        }
        global0 = array<Struct_1, 28>();
        var var_0 = Struct_3(global0[_wgslsmith_index_u32(abs(_wgslsmith_div_u32(_wgslsmith_add_u32(4294967295u, u_input.a) >> (~u_input.a % 32u), _wgslsmith_div_u32(u_input.a, u_input.a) >> (select(4294967295u, 1u, true) % 32u))), 28u)], Struct_2(firstLeadingBit(firstTrailingBit(_wgslsmith_mult_i32(arg_0, arg_0))), _wgslsmith_sub_u32(~u_input.a, 37561u)), global0[_wgslsmith_index_u32(_wgslsmith_mod_u32(firstLeadingBit(reverseBits(4294967295u)), 52700u), 28u)]);
        for (var var_1 = -1i; ; var_1 = arg_0) {
            if (LOOP_COUNTERS[5u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
            break;
        }
    }
    switch (~(-_wgslsmith_add_i32(abs(u_input.b.x), -18522i)) ^ -arg_0) {
        case 11228i: {
            global0 = array<Struct_1, 28>();
            for (var var_0: i32; !arg_1.x; var_0 = u_input.b.x ^ min(max(countOneBits(u_input.b.x), ~(-2571i)), _wgslsmith_dot_vec3_i32(vec3<i32>(reverseBits(arg_0), 1i, ~30262i), ~reverseBits(u_input.b.zzx)))) {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                global0 = array<Struct_1, 28>();
                var var_1 = -abs(firstTrailingBit(-arg_0));
                break;
            }
        }
        case 1i: {
            let var_0 = vec2<u32>(_wgslsmith_mult_u32(1u, u_input.a), ~(~1u));
            loop {
                if (LOOP_COUNTERS[7u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
                global0 = array<Struct_1, 28>();
                global0 = array<Struct_1, 28>();
                let var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(693f * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -211f)))));
                global0 = array<Struct_1, 28>();
                global0 = array<Struct_1, 28>();
            }
        }
        case -31207i: {
            for (var var_0 = -46126i; ; var_0 -= 1i) {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                continue;
            }
            for (; all(select(!(!vec4<bool>(false, arg_1.x, false, arg_1.x)), vec4<bool>(true, false, true, true), false)); ) {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                break;
            }
            global0 = array<Struct_1, 28>();
            for (var var_0 = ~30671i; true; var_0 -= 1i) {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                global0 = array<Struct_1, 28>();
                var_0 = _wgslsmith_clamp_i32(49217i, _wgslsmith_div_i32(-3824i, -2044i), ~u_input.b.x);
            }
        }
        default: {
            if (true) {
                var var_0 = vec2<bool>(any(vec3<bool>(!arg_1.x, true, true)), true);
                global0 = array<Struct_1, 28>();
                var var_1 = Struct_2(-abs(arg_0), u_input.a);
                global0 = array<Struct_1, 28>();
                let var_2 = Struct_3(Struct_1(vec3<i32>(2147483647i, _wgslsmith_sub_i32(1i >> (var_1.b % 32u), i32(-1i) * -76762i), ~(arg_0 >> (4294967295u % 32u))), ~(~(~20197i)), ~(abs(vec2<u32>(4294967295u, 39989u)) << ((vec2<u32>(0u, u_input.a) << (vec2<u32>(59077u, 14996u) % vec2<u32>(32u))) % vec2<u32>(32u))), _wgslsmith_mult_vec2_u32(vec2<u32>(u_input.a, firstLeadingBit(4294967295u)), max(~vec2<u32>(u_input.a, u_input.a), ~vec2<u32>(75490u, u_input.a)))), Struct_2(-1i, _wgslsmith_div_u32(u_input.a, firstLeadingBit(108584u) << (~4294967295u % 32u))), global0[_wgslsmith_index_u32(reverseBits(_wgslsmith_div_u32(~(~0u), 24332u)), 28u)]);
            }
            var var_0 = Struct_1(abs(u_input.b.wyz), -755i, ~vec2<u32>(firstLeadingBit(u_input.a), u_input.a) >> (~_wgslsmith_add_vec2_u32(vec2<u32>(1u, 1u), abs(vec2<u32>(u_input.a, 71385u))) % vec2<u32>(32u)), ~vec2<u32>(max(~1u, _wgslsmith_div_u32(u_input.a, 42997u)), reverseBits(countOneBits(u_input.a))));
            global0 = array<Struct_1, 28>();
        }
    }
    switch (_wgslsmith_add_i32(1i, -22792i >> (0u % 32u))) {
        case -15876i: {
            loop {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                global0 = array<Struct_1, 28>();
                global0 = array<Struct_1, 28>();
                global0 = array<Struct_1, 28>();
            }
            if (all(vec4<bool>(!any(select(arg_1, vec2<bool>(false, arg_1.x), vec2<bool>(false, arg_1.x))), arg_0 != 1i, func_5(), any(vec2<bool>(true, arg_1.x))))) {
                var var_0 = global0[_wgslsmith_index_u32(_wgslsmith_clamp_u32(_wgslsmith_dot_vec2_u32(_wgslsmith_mod_vec2_u32(vec2<u32>(u_input.a << (u_input.a % 32u), u_input.a), vec2<u32>(118590u, _wgslsmith_dot_vec4_u32(vec4<u32>(758u, u_input.a, u_input.a, 0u), vec4<u32>(u_input.a, 1u, u_input.a, 1u)))), firstTrailingBit(firstLeadingBit(vec2<u32>(4294967295u, u_input.a)))), _wgslsmith_dot_vec2_u32(abs(reverseBits(vec2<u32>(u_input.a, u_input.a)) & ~vec2<u32>(1u, u_input.a)), ~_wgslsmith_sub_vec2_u32(vec2<u32>(1u, u_input.a), vec2<u32>(1u, 26610u)) | _wgslsmith_sub_vec2_u32(vec2<u32>(u_input.a, u_input.a), ~vec2<u32>(1u, u_input.a))), ~4294967295u), 28u)];
                var var_1 = Struct_1(var_0.a, abs(i32(-2147483648)), reverseBits(~vec2<u32>(5780u, 0u)), firstTrailingBit(_wgslsmith_clamp_vec2_u32(~reverseBits(var_0.d), vec2<u32>(max(1u, u_input.a), _wgslsmith_dot_vec4_u32(vec4<u32>(var_0.c.x, u_input.a, 32991u, var_0.d.x), vec4<u32>(u_input.a, 1u, var_0.d.x, 8065u))), vec2<u32>(38306u, _wgslsmith_mod_u32(0u, 1u)))));
                global0 = array<Struct_1, 28>();
            }
        }
        case 0i: {
            for (; arg_1.x; ) {
                if (LOOP_COUNTERS[12u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
                let var_0 = vec3<bool>(true, any(!(!(!vec4<bool>(true, arg_1.x, arg_1.x, arg_1.x)))), !(!(true != arg_1.x)));
                global0 = array<Struct_1, 28>();
            }
            loop {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
            }
        }
        case -30422i: {
            let var_0 = !arg_1.x;
            global0 = array<Struct_1, 28>();
        }
        default: {
        }
    }
    switch (-1i) {
        case 0i: {
            loop {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                global0 = array<Struct_1, 28>();
                global0 = array<Struct_1, 28>();
            }
            let var_0 = Struct_2(-45867i | _wgslsmith_mod_i32(abs(u_input.b.x << (4294967295u % 32u)), 17473i), min(1u << (u_input.a % 32u), ~u_input.a ^ u_input.a) << (u_input.a % 32u));
            var var_1 = vec3<i32>(arg_0 ^ i32(-2147483648), select(~firstLeadingBit(arg_0), -51474i, _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(min(-961f, -313f)), _wgslsmith_f_op_f32(573f * 941f))) <= -1386f), max(-_wgslsmith_mult_i32(var_0.a, i32(-1i) * -15325i), 2147483647i));
        }
        case 1i: {
            global0 = array<Struct_1, 28>();
            global0 = array<Struct_1, 28>();
        }
        case i32(-2147483648): {
            loop {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
                global0 = array<Struct_1, 28>();
                var var_0 = Struct_3(Struct_1(vec3<i32>(i32(-2147483648), 0i, ~u_input.b.x << (~u_input.a % 32u)), 0i, reverseBits(vec2<u32>(~283u, ~4294967295u)), _wgslsmith_add_vec2_u32(vec2<u32>(1u, 4294967295u) | ~vec2<u32>(25706u, u_input.a), select(~vec2<u32>(1136u, u_input.a), ~vec2<u32>(u_input.a, u_input.a), !vec2<bool>(arg_1.x, arg_1.x)))), Struct_2(_wgslsmith_mod_i32(_wgslsmith_dot_vec4_i32(vec4<i32>(2147483647i, u_input.b.x, u_input.b.x, arg_0), vec4<i32>(u_input.b.x, arg_0, 0i, arg_0)) >> (10505u % 32u), 1i), ~45997u), Struct_1(abs(~u_input.b.yzx), -u_input.b.x, ~(~max(vec2<u32>(23751u, u_input.a), vec2<u32>(u_input.a, u_input.a))), vec2<u32>(u_input.a, ~countOneBits(4294967295u))));
                continue;
            }
            var var_0 = Struct_2(-_wgslsmith_mod_i32(u_input.b.x, arg_0), _wgslsmith_add_u32(firstTrailingBit(_wgslsmith_dot_vec2_u32(vec2<u32>(u_input.a, u_input.a), vec2<u32>(3074u, 2149u))) << ((~u_input.a & _wgslsmith_clamp_u32(4294967295u, u_input.a, 27722u)) % 32u), _wgslsmith_dot_vec3_u32(_wgslsmith_add_vec3_u32(vec3<u32>(16336u, 9348u, 4294967295u), vec3<u32>(u_input.a, u_input.a, 4294967295u) >> (vec3<u32>(24084u, 60714u, u_input.a) % vec3<u32>(32u))), _wgslsmith_sub_vec3_u32(firstTrailingBit(vec3<u32>(u_input.a, u_input.a, 39020u)), _wgslsmith_clamp_vec3_u32(vec3<u32>(56145u, u_input.a, u_input.a), vec3<u32>(u_input.a, 1u, u_input.a), vec3<u32>(1u, 0u, u_input.a))))));
            var var_1 = -1320f;
        }
        default: {
            global0 = array<Struct_1, 28>();
        }
    }
    return _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(-1f), _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(ceil(1469f)), _wgslsmith_f_op_f32(f32(-1f) * -1387f)))))));
}

fn func_4(arg_0: f32, arg_1: u32) -> u32 {
    if (any(!(!select(vec2<bool>(true, true), select(vec2<bool>(false, true), vec2<bool>(false, true), vec2<bool>(true, true)), true)))) {
        global0 = array<Struct_1, 28>();
        let var_0 = _wgslsmith_f_op_f32(func_7(u_input.b.x, select(select(vec2<bool>(func_5(), false), select(vec2<bool>(true, false), select(vec2<bool>(true, false), vec2<bool>(false, true), vec2<bool>(true, true)), select(vec2<bool>(true, true), vec2<bool>(false, false), vec2<bool>(false, true))), vec2<bool>(true, any(vec2<bool>(true, true)))), vec2<bool>(all(vec4<bool>(true, true, true, false)), false), vec2<bool>(true, true))));
        let var_1 = Struct_3(global0[_wgslsmith_index_u32(firstLeadingBit(1u), 28u)], Struct_2(u_input.b.x, _wgslsmith_div_u32(abs(_wgslsmith_dot_vec4_u32(vec4<u32>(arg_1, 1u, 36880u, 1u), vec4<u32>(4294967295u, 4294967295u, 1u, 52300u))), u_input.a)), global0[_wgslsmith_index_u32(~(~_wgslsmith_mod_u32(~0u, ~0u)), 28u)]);
    }
    var var_0 = vec2<f32>(_wgslsmith_div_f32(arg_0, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_0 * arg_0)) - 903f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(sign(arg_0)), _wgslsmith_f_op_f32(-arg_0))))) * _wgslsmith_f_op_f32(386f * _wgslsmith_f_op_f32(_wgslsmith_div_f32(527f, 187f) * _wgslsmith_f_op_f32(-1380f - -792f)))));
    var var_1 = _wgslsmith_mod_vec4_u32(_wgslsmith_add_vec4_u32(select(vec4<u32>(4294967295u, u_input.a, 1u, reverseBits(4294967295u)), _wgslsmith_mult_vec4_u32(vec4<u32>(u_input.a, 34093u, arg_1, arg_1), vec4<u32>(0u, arg_1, 4294967295u, 16283u)) & (vec4<u32>(4294967295u, u_input.a, 4294967295u, u_input.a) | vec4<u32>(arg_1, 46500u, 0u, u_input.a)), (arg_0 != 265f) | true), vec4<u32>(~(~arg_1), ~_wgslsmith_sub_u32(u_input.a, arg_1), ~1u, _wgslsmith_dot_vec2_u32(countOneBits(vec2<u32>(u_input.a, 29314u)), vec2<u32>(1u, 4294967295u) << (vec2<u32>(u_input.a, 4294967295u) % vec2<u32>(32u))))), _wgslsmith_mult_vec4_u32(~firstLeadingBit(vec4<u32>(71119u, arg_1, u_input.a, 10162u)), vec4<u32>(_wgslsmith_dot_vec2_u32(vec2<u32>(23928u, 6746u), vec2<u32>(u_input.a, 1u)), ~arg_1, 19035u >> (0u % 32u), _wgslsmith_dot_vec2_u32(vec2<u32>(4294967295u, arg_1), vec2<u32>(1u, u_input.a)))) << (~_wgslsmith_mod_vec4_u32(~vec4<u32>(4294967295u, u_input.a, 0u, u_input.a), ~vec4<u32>(arg_1, 0u, 4294967295u, 111568u)) % vec4<u32>(32u)));
    var_0 = _wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(1f, 1f))) - vec2<f32>(-147f, _wgslsmith_f_op_f32(495f + -1176f)))), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(max(vec2<f32>(_wgslsmith_f_op_f32(min(arg_0, var_0.x)), _wgslsmith_f_op_f32(-1031f)), vec2<f32>(_wgslsmith_f_op_f32(sign(arg_0)), arg_0)))), true || !any(vec4<bool>(true, true, true, true))));
    for (var var_2 = 1i; ; ) {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        let var_3 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_0 - var_0.x)));
        break;
    }
    return 1u;
}

fn func_3() -> Struct_2 {
    var var_0 = abs(_wgslsmith_add_vec2_u32(vec2<u32>(func_4(_wgslsmith_f_op_f32(trunc(-108f)), firstLeadingBit(83608u)), _wgslsmith_dot_vec4_u32(vec4<u32>(45903u, 0u, u_input.a, 4838u), vec4<u32>(1u, u_input.a, 0u, u_input.a)) >> (firstLeadingBit(u_input.a) % 32u)), max(firstLeadingBit(vec2<u32>(32981u, u_input.a)), vec2<u32>(u_input.a, u_input.a))));
    var var_1 = vec3<bool>(u_input.b.x >= i32(-2147483648), false, false);
    switch (-u_input.b.x) {
        case 0i: {
            for (var var_2: i32; ; var_2 += 1i) {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                let var_3 = _wgslsmith_mult_u32(~1u, abs(max(var_0.x, 0u)));
                continue;
            }
            return Struct_2(abs(1i), _wgslsmith_mult_u32(~_wgslsmith_dot_vec3_u32(_wgslsmith_div_vec3_u32(vec3<u32>(var_0.x, var_0.x, 56563u), vec3<u32>(u_input.a, 4294967295u, u_input.a)), ~vec3<u32>(u_input.a, 0u, 57973u)), u_input.a));
        }
        case -1i: {
        }
        case -32544i: {
        }
        case 1i: {
            var var_2 = false;
            var_0 = _wgslsmith_mod_vec2_u32(vec2<u32>(_wgslsmith_dot_vec2_u32(vec2<u32>(28697u, u_input.a), vec2<u32>(0u, u_input.a >> (u_input.a % 32u))), 6116u), ~vec2<u32>(~(~5817u), ~59381u ^ select(0u, var_0.x, false)));
            switch (_wgslsmith_mult_i32(47974i, u_input.b.x)) {
                case -1i: {
                }
                case 1i: {
                }
                default: {
                    var var_3 = Struct_3(Struct_1(-u_input.b.wxy & vec3<i32>(_wgslsmith_clamp_i32(u_input.b.x, -18764i, u_input.b.x), u_input.b.x, 1i), _wgslsmith_div_i32(~(~u_input.b.x), ~(u_input.b.x & 0i)), firstTrailingBit(_wgslsmith_div_vec2_u32(~vec2<u32>(u_input.a, var_0.x), abs(vec2<u32>(var_0.x, u_input.a)))), firstTrailingBit(~vec2<u32>(var_0.x, var_0.x))), Struct_2(i32(-2147483648), var_0.x), global0[_wgslsmith_index_u32(1u, 28u)]);
                    var var_4 = _wgslsmith_dot_vec4_i32(_wgslsmith_add_vec4_i32(vec4<i32>(_wgslsmith_mod_i32(u_input.b.x, abs(u_input.b.x)), -var_3.b.a, i32(-2147483648), 36801i >> (_wgslsmith_mult_u32(u_input.a, u_input.a) % 32u)), u_input.b | min(-vec4<i32>(var_3.b.a, -10658i, 0i, u_input.b.x), vec4<i32>(4368i, 2147483647i, -397i, -1i))), u_input.b);
                    var var_5 = false;
                    var var_6 = -(~(-1i)) > firstTrailingBit(u_input.b.x);
                    return Struct_2(_wgslsmith_dot_vec2_i32(max(firstTrailingBit(_wgslsmith_mult_vec2_i32(vec2<i32>(u_input.b.x, u_input.b.x), vec2<i32>(i32(-2147483648), u_input.b.x))), vec2<i32>(-13851i, _wgslsmith_add_i32(25308i, i32(-2147483648)))), _wgslsmith_add_vec2_i32(firstLeadingBit(vec2<i32>(i32(-2147483648), var_3.a.a.x)) >> (_wgslsmith_mod_vec2_u32(vec2<u32>(var_3.a.d.x, 1u), var_3.a.c) % vec2<u32>(32u)), ~(var_3.a.a.zz & vec2<i32>(var_3.a.b, 2147483647i)))), var_0.x);
                }
            }
            var var_3 = reverseBits(countOneBits(u_input.b.x & -u_input.b.x));
        }
        default: {
            global0 = array<Struct_1, 28>();
            var var_2 = !vec3<bool>(all(vec2<bool>(true, !var_1.x)), true && !(!var_1.x), true);
        }
    }
    var_0 = ~(abs(~vec2<u32>(u_input.a, 2u)) << (~countOneBits(_wgslsmith_sub_vec2_u32(vec2<u32>(0u, 0u), vec2<u32>(4294967295u, var_0.x))) % vec2<u32>(32u)));
    if (!(!(!var_1.x))) {
        global0 = array<Struct_1, 28>();
        let var_2 = ~select((vec3<u32>(0u, 0u, u_input.a) ^ vec3<u32>(var_0.x, 12553u, u_input.a)) | firstLeadingBit(vec3<u32>(u_input.a, 12045u, var_0.x)), vec3<u32>(1u, 0u, 0u) << ((vec3<u32>(var_0.x, u_input.a, var_0.x) & vec3<u32>(var_0.x, 97962u, var_0.x)) % vec3<u32>(32u)), false) & _wgslsmith_clamp_vec3_u32(~vec3<u32>(~1953u, _wgslsmith_add_u32(71189u, u_input.a), countOneBits(var_0.x)), ~(~(~vec3<u32>(var_0.x, 21209u, 46736u))), firstLeadingBit(vec3<u32>(firstLeadingBit(21433u), ~var_0.x, ~82298u)));
        let var_3 = var_2.x;
        for (var var_4 = 14631i; all(vec4<bool>(!(!var_1.x), !((u_input.a == var_0.x) && var_1.x), true, all(select(select(vec3<bool>(var_1.x, true, true), vec3<bool>(var_1.x, true, var_1.x), vec3<bool>(var_1.x, var_1.x, false)), vec3<bool>(true, var_1.x, var_1.x), vec3<bool>(var_1.x, var_1.x, false))))); ) {
            if (LOOP_COUNTERS[18u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
            var var_5 = _wgslsmith_div_i32(u_input.b.x ^ (u_input.b.x >> (46579u % 32u)), 0i);
        }
        for (var var_4 = -10175i; var_4 > i32(-2147483648); var_0 = abs(var_2.xy)) {
            if (LOOP_COUNTERS[19u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
            break;
        }
    }
    return Struct_2(u_input.b.x ^ 1i, reverseBits(u_input.a));
}

fn func_8(arg_0: vec3<u32>, arg_1: Struct_2, arg_2: vec4<i32>, arg_3: Struct_2) -> u32 {
    if (true) {
        global0 = array<Struct_1, 28>();
        return ~u_input.a << (0u % 32u);
    }
    var var_0 = Struct_3(global0[_wgslsmith_index_u32(arg_1.b, 28u)], arg_3, global0[_wgslsmith_index_u32(arg_3.b, 28u)]);
    var var_1 = Struct_1(vec3<i32>(arg_1.a, _wgslsmith_dot_vec3_i32(var_0.a.a, vec3<i32>(arg_2.x, arg_2.x, 45406i)) | _wgslsmith_dot_vec4_i32(select(vec4<i32>(2147483647i, 63165i, -58668i, arg_1.a), vec4<i32>(2147483647i, arg_3.a, arg_2.x, 10913i), vec4<bool>(false, false, true, true)), _wgslsmith_mod_vec4_i32(u_input.b, arg_2)), u_input.b.x >> (~var_0.b.b % 32u)), _wgslsmith_mod_i32(17574i, 8821i), ~(vec2<u32>(var_0.c.d.x | 14u, arg_3.b) & vec2<u32>(1u, 1u)), ~vec2<u32>(4294967295u, ~16285u));
    var_0 = Struct_3(Struct_1(~((vec3<i32>(2147483647i, var_1.b, -1i) << (vec3<u32>(0u, arg_0.x, 78016u) % vec3<u32>(32u))) & vec3<i32>(0i, var_1.b, i32(-2147483648))), ~u_input.b.x, select(abs(arg_0.xx), vec2<u32>(1u, var_0.b.b), vec2<bool>(true, true)), reverseBits(vec2<u32>(~1u, min(34719u, 4294967295u)))), func_3(), var_0.a);
    loop {
        if (LOOP_COUNTERS[20u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
        switch (arg_2.x) {
            case 1i: {
                var_1 = var_0.a;
                var var_2 = true;
                global0 = array<Struct_1, 28>();
            }
            case 0i: {
                global0 = array<Struct_1, 28>();
                let var_2 = Struct_3(Struct_1(select(-var_1.a, ~select(u_input.b.wzy, vec3<i32>(1i, arg_2.x, i32(-2147483648)), vec3<bool>(false, true, false)), vec3<bool>(true, true, select(true, true, false))), abs(12274i), var_0.c.d, _wgslsmith_add_vec2_u32(var_1.c, ~vec2<u32>(arg_0.x, 4294967295u))), Struct_2(24091i, countOneBits(4294967295u)), var_0.a);
                var var_3 = !vec3<bool>(!(any(vec4<bool>(false, true, false, true)) | true), true, any(select(vec2<bool>(true, false), vec2<bool>(true, false), true)));
                break;
            }
            case -1i: {
                var_0 = Struct_3(Struct_1(_wgslsmith_mod_vec3_i32(vec3<i32>(i32(-2147483648), arg_1.a, firstLeadingBit(var_1.b)), var_0.a.a), 0i, arg_0.xy, firstTrailingBit(firstLeadingBit(abs(arg_0.yz)))), func_3(), var_0.c);
                var var_2 = !select(vec2<bool>(true, true | func_5()), select(vec2<bool>(true, true), vec2<bool>(var_1.c.x >= arg_0.x, any(vec3<bool>(true, true, true))), true), vec2<bool>(all(vec2<bool>(true, true)), true));
            }
            default: {
                var var_2 = Struct_2(~(2147483647i >> (u_input.a % 32u)), arg_0.x);
                let var_3 = Struct_2(-1i, u_input.a);
            }
        }
        continue;
    }
    return ~_wgslsmith_dot_vec4_u32(select(vec4<u32>(_wgslsmith_div_u32(4280u, arg_0.x), var_0.c.c.x, select(26141u, var_0.c.d.x, false), ~33048u), abs(vec4<u32>(var_1.d.x, 16105u, 85173u, 84956u) >> (vec4<u32>(4294967295u, 1u, 15596u, 1u) % vec4<u32>(32u))), false), vec4<u32>(_wgslsmith_mod_u32(_wgslsmith_add_u32(51902u, 1u), 1u), ~(~arg_0.x), _wgslsmith_dot_vec3_u32(reverseBits(arg_0), arg_0), 4294967295u));
}

fn func_2(arg_0: u32) -> vec4<u32> {
    global0 = array<Struct_1, 28>();
    global0 = array<Struct_1, 28>();
    var var_0 = Struct_2(-reverseBits(-u_input.b.x) | _wgslsmith_mod_i32(~_wgslsmith_clamp_i32(u_input.b.x, u_input.b.x, u_input.b.x), u_input.b.x), ~(firstTrailingBit(45625u) >> (func_8(vec3<u32>(81522u, u_input.a, u_input.a), func_3(), vec4<i32>(0i, u_input.b.x, -1i, u_input.b.x), Struct_2(-1i, 0u)) % 32u)));
    var var_1 = Struct_3(Struct_1(vec3<i32>(var_0.a, i32(-2147483648), -func_3().a), var_0.a, countOneBits(firstLeadingBit(vec2<u32>(17665u, 1u)) | vec2<u32>(arg_0, 81015u)), ~abs(~vec2<u32>(u_input.a, 1u))), func_3(), global0[_wgslsmith_index_u32(~6222u, 28u)]);
    var var_2 = vec3<bool>(select(true, true, !any(vec3<bool>(false, false, false))), all(select(vec2<bool>(any(vec4<bool>(false, false, true, false)), false), select(select(vec2<bool>(false, false), vec2<bool>(true, false), vec2<bool>(false, false)), vec2<bool>(true, true), vec2<bool>(true, true)), !select(vec2<bool>(false, false), vec2<bool>(true, true), vec2<bool>(true, true)))), true);
    return ~_wgslsmith_add_vec4_u32(~select(select(vec4<u32>(arg_0, 4294967295u, arg_0, 18832u), vec4<u32>(var_0.b, var_1.b.b, 20590u, 1u), vec4<bool>(var_2.x, var_2.x, var_2.x, var_2.x)), ~vec4<u32>(arg_0, var_0.b, 78266u, u_input.a), !var_2.x), vec4<u32>(22471u, 18021u, 25642u, (var_1.b.b ^ u_input.a) | ~var_0.b));
}

fn func_1(arg_0: Struct_2, arg_1: vec4<f32>) -> bool {
    let var_0 = true;
    var var_1 = 13404u;
    var var_2 = global0[_wgslsmith_index_u32(~_wgslsmith_dot_vec4_u32(~select(~vec4<u32>(0u, arg_0.b, 1u, 0u), vec4<u32>(39197u, u_input.a, arg_0.b, 0u), true), func_2(4294967295u)), 28u)];
    var var_3 = Struct_3(global0[_wgslsmith_index_u32(func_3().b, 28u)], Struct_2(~u_input.b.x, func_4(-1000f, ~_wgslsmith_dot_vec2_u32(vec2<u32>(arg_0.b, var_2.d.x), vec2<u32>(arg_0.b, u_input.a)))), Struct_1(u_input.b.yyw, func_3().a >> (_wgslsmith_sub_u32(reverseBits(4294967295u), _wgslsmith_mult_u32(35183u, 7648u)) % 32u), var_2.c, vec2<u32>(1u, 1u)));
    global0 = array<Struct_1, 28>();
    return all(select(!select(vec4<bool>(var_0, true, var_0, true), select(vec4<bool>(false, var_0, true, false), vec4<bool>(var_0, var_0, true, var_0), vec4<bool>(false, false, true, true)), any(vec3<bool>(var_0, false, true))), !vec4<bool>(!var_0, false, true, true), vec4<bool>(var_0, var_0, var_0, true || any(vec2<bool>(true, false)))));
}

@compute
@workgroup_size(1)
fn main() {
    for (var var_0 = _wgslsmith_add_i32(i32(-1i) * -_wgslsmith_clamp_i32(u_input.b.x, _wgslsmith_mod_i32(u_input.b.x, u_input.b.x), u_input.b.x), ~(49586i << (_wgslsmith_mod_u32(~u_input.a, 1u) % 32u))); true; ) {
        if (LOOP_COUNTERS[21u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
        loop {
            if (LOOP_COUNTERS[22u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
            continue;
        }
        let var_1 = !(!select(vec3<bool>(true, true, true), select(select(vec3<bool>(false, false, true), vec3<bool>(false, true, true), true), select(vec3<bool>(true, true, true), vec3<bool>(true, true, false), false), vec3<bool>(true, true, true)), all(vec3<bool>(true, true, true))));
        continue;
    }
    global0 = array<Struct_1, 28>();
    var var_0 = reverseBits(vec4<i32>(u_input.b.x, u_input.b.x, -_wgslsmith_dot_vec3_i32(vec3<i32>(-1i, 17322i, u_input.b.x), vec3<i32>(u_input.b.x, u_input.b.x, 27138i)), 2147483647i));
    loop {
        if (LOOP_COUNTERS[23u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
        for (var var_1 = 993i; countOneBits(u_input.a) != u_input.a; var_1 -= 1i) {
            if (LOOP_COUNTERS[24u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
            var var_2 = !vec2<bool>(!any(vec2<bool>(false, true)), any(vec4<bool>(false, true, true, false)) || ((u_input.a >> (26949u % 32u)) != ~u_input.a));
            var_2 = vec2<bool>(var_2.x, true);
            continue;
        }
        continue;
    }
    var_0 = ~u_input.b;
    var_0 = vec4<i32>(-_wgslsmith_add_i32(~(~3383i), u_input.b.x), 20163i, ~u_input.b.x, -1i);
    var_0 = abs(~vec4<i32>(1i, u_input.b.x, -(var_0.x << (u_input.a % 32u)), max(_wgslsmith_sub_i32(40765i, var_0.x), var_0.x >> (u_input.a % 32u))));
    var var_1 = !select(!select(select(vec2<bool>(false, false), vec2<bool>(false, false), vec2<bool>(false, true)), select(vec2<bool>(false, false), vec2<bool>(false, true), true), func_1(Struct_2(u_input.b.x, u_input.a), vec4<f32>(295f, -1506f, 123f, 253f))), !select(vec2<bool>(true, true), vec2<bool>(true, false), vec2<bool>(true, true)), vec2<bool>(any(vec3<bool>(true, false, false)) & (u_input.a < u_input.a), !(1i <= u_input.b.x)));
    var_0 = vec4<i32>(u_input.b.x, var_0.x, abs(-_wgslsmith_dot_vec4_i32(u_input.b >> (vec4<u32>(u_input.a, 0u, 1u, u_input.a) % vec4<u32>(32u)), -vec4<i32>(u_input.b.x, u_input.b.x, 1i, -22996i))), ~var_0.x);
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(f32(-1f) * -1000f))))))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -526f)));
}

`;