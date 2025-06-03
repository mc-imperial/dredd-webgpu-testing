export const input = [149,75,63,44,86,199,255,66,186,69,236,182,134,118,227,79,134,95,188,52,131,176,161,234,176,234,7,254,189,134,142,87,124,193,246,22,29,28,46,143,208,219,36,176,157,219,245,66,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [149,75,63,44,86,199,255,66,186,69,236,182,134,118,227,79,134,95,188,52,131,176,161,234,176,234,7,254,189,134,142,87,124,193,246,22,29,28,46,143,208,219,36,176,157,219,245,66,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[149,75,63,44,86,199,255,66,186,69,236,182,134,118,227,79,134,95,188,52,131,176,161,234,176,234,7,254,189,134,142,87,124,193,246,22,29,28,46,143,208,219,36,176,157,219,245,66]}
// Seed: 14388409929205963076

struct Struct_1 {
    a: vec3<i32>,
    b: bool,
    c: bool,
    d: f32,
    e: vec2<i32>,
}

struct Struct_2 {
    a: f32,
}

struct Struct_3 {
    a: vec2<f32>,
    b: Struct_2,
    c: vec2<u32>,
    d: vec4<f32>,
}

struct Struct_4 {
    a: vec3<bool>,
}

struct UniformBuffer {
    a: vec4<u32>,
    b: vec3<u32>,
    c: vec2<i32>,
}

struct StorageBuffer {
    a: f32,
    b: u32,
    c: i32,
    d: vec2<i32>,
    e: f32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: vec2<bool>;

var<private> LOOP_COUNTERS: array<u32, 31>;

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_add_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a + b, a, a > (vec2<u32>(4294967295u) - b));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_mod_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a % b, a, ((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i)));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn func_6() -> vec2<bool> {
    switch (firstLeadingBit(~(firstLeadingBit(11781i << (0u % 32u)) << (_wgslsmith_div_u32(~u_input.b.x, u_input.b.x) % 32u)))) {
        case 1i: {
            var var_0 = Struct_2(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(sign(-446f)), -2507f)));
            switch (u_input.c.x) {
                case -10563i: {
                    var_0 = Struct_2(_wgslsmith_div_f32(-1060f, _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1230f))))));
                    var var_1 = Struct_4(vec3<bool>(global0.x, !any(!vec3<bool>(global0.x, global0.x, true)), !global0.x | global0.x));
                }
                case 2147483647i: {
                    var var_1 = Struct_1(select(-_wgslsmith_add_vec3_i32(vec3<i32>(u_input.c.x, u_input.c.x, 1i), vec3<i32>(u_input.c.x, 27460i, u_input.c.x)), (vec3<i32>(u_input.c.x, -1i, u_input.c.x) >> (u_input.a.xzz % vec3<u32>(32u))) ^ (vec3<i32>(2147483647i, u_input.c.x, i32(-2147483648)) | vec3<i32>(u_input.c.x, u_input.c.x, -50422i)), u_input.a.x <= 29922u) | -vec3<i32>(_wgslsmith_dot_vec4_i32(vec4<i32>(-14480i, u_input.c.x, i32(-2147483648), 1i), vec4<i32>(u_input.c.x, i32(-2147483648), u_input.c.x, -5595i)), min(u_input.c.x, u_input.c.x), u_input.c.x), !any(!(!vec2<bool>(true, global0.x))), true, _wgslsmith_div_f32(_wgslsmith_f_op_f32(abs(-763f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(var_0.a, _wgslsmith_f_op_f32(floor(-202f)))))), vec2<i32>(u_input.c.x, reverseBits(2147483647i)) & u_input.c);
                    var var_2 = vec3<i32>(u_input.c.x, 1i, 1i);
                    return vec2<bool>(!(_wgslsmith_sub_i32(var_1.a.x << (u_input.a.x % 32u), 2147483647i) > _wgslsmith_mod_i32(firstLeadingBit(2147483647i), reverseBits(-44808i))), global0.x);
                }
                case -48851i: {
                    global0 = !vec2<bool>(global0.x, _wgslsmith_f_op_f32(-896f * _wgslsmith_f_op_f32(f32(-1f) * -1429f)) != _wgslsmith_f_op_f32(select(344f, var_0.a, true)));
                    var var_1 = reverseBits(_wgslsmith_dot_vec2_u32(u_input.b.yz >> (~select(vec2<u32>(32334u, u_input.b.x), vec2<u32>(u_input.a.x, u_input.b.x), false) % vec2<u32>(32u)), _wgslsmith_sub_vec2_u32(abs(u_input.b.zx), vec2<u32>(u_input.b.x & 4294967295u, _wgslsmith_clamp_u32(u_input.b.x, u_input.b.x, 0u)))));
                }
                default: {
                    var var_1 = any(select(select(vec2<bool>(!global0.x, !global0.x), vec2<bool>(false, true), vec2<bool>(any(vec3<bool>(global0.x, global0.x, global0.x)), u_input.b.x > u_input.a.x)), vec2<bool>(all(select(vec2<bool>(global0.x, true), vec2<bool>(false, true), vec2<bool>(true, global0.x))), any(select(vec3<bool>(true, global0.x, global0.x), vec3<bool>(false, true, true), true))), true));
                    global0 = select(!select(vec2<bool>(true, !global0.x), !vec2<bool>(true, global0.x), vec2<bool>(!global0.x, global0.x)), vec2<bool>(global0.x, !global0.x), select(!vec2<bool>(u_input.c.x <= u_input.c.x, global0.x), select(vec2<bool>(true, false & global0.x), !vec2<bool>(global0.x, true), vec2<bool>(all(vec4<bool>(global0.x, true, false, true)), false)), true));
                    let var_2 = vec2<i32>(abs(1i), firstLeadingBit(-39493i));
                    let var_3 = _wgslsmith_mult_i32(u_input.c.x, max(firstLeadingBit(-34931i), 0i));
                }
            }
            let var_1 = Struct_2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -972f) - _wgslsmith_div_f32(-2197f, var_0.a)), -595f))));
        }
        case 0i: {
            switch (48988i) {
                case 23019i: {
                    var var_0 = u_input.a;
                    var var_1 = Struct_1(-(~(~vec3<i32>(2147483647i, u_input.c.x, u_input.c.x))) >> (_wgslsmith_add_vec3_u32(_wgslsmith_mult_vec3_u32(~vec3<u32>(u_input.a.x, var_0.x, u_input.b.x), firstTrailingBit(vec3<u32>(70271u, u_input.a.x, var_0.x))), var_0.wzy) % vec3<u32>(32u)), false, true, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(829f - _wgslsmith_div_f32(_wgslsmith_f_op_f32(-1648f - -1143f), -826f)) - -1000f), vec2<i32>(~u_input.c.x, -reverseBits(abs(u_input.c.x))));
                }
                default: {
                    var var_0 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(_wgslsmith_div_f32(1f, _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-488f), _wgslsmith_f_op_f32(floor(1594f))))))) - 1f);
                    var var_1 = ~vec4<u32>(4294967295u, u_input.b.x, u_input.a.x << (min(_wgslsmith_sub_u32(u_input.a.x, u_input.b.x), _wgslsmith_add_u32(u_input.b.x, u_input.b.x)) % 32u), u_input.b.x);
                    var var_2 = vec2<bool>(all(vec4<bool>(any(select(vec3<bool>(false, global0.x, global0.x), vec3<bool>(global0.x, true, global0.x), global0.x)), select(false, global0.x, false) && false, global0.x != true, !(u_input.c.x > 78934i))), global0.x);
                    var var_3 = _wgslsmith_mult_vec3_u32(~vec3<u32>(4294967295u, u_input.b.x, var_1.x), ~_wgslsmith_mod_vec3_u32(_wgslsmith_mod_vec3_u32(countOneBits(var_1.yzw), u_input.b), _wgslsmith_mult_vec3_u32(min(u_input.a.zyx, u_input.b), u_input.b)));
                    let var_4 = firstTrailingBit(vec2<i32>(select(~_wgslsmith_add_i32(4632i, u_input.c.x), -firstLeadingBit(21206i), true), u_input.c.x));
                }
            }
            if (!all(!(!(!vec3<bool>(true, global0.x, global0.x))))) {
                global0 = select(vec2<bool>(true, !(~u_input.b.x == ~u_input.b.x)), vec2<bool>(false, false), true);
                var var_0 = vec4<i32>(28279i, ~firstTrailingBit(abs(u_input.c.x)), 24748i, ~_wgslsmith_sub_i32(0i << (u_input.b.x % 32u), u_input.c.x));
                let var_1 = Struct_2(-1199f);
                var_0 = -max(vec4<i32>(-(var_0.x >> (u_input.b.x % 32u)), abs(u_input.c.x), abs(max(2147483647i, u_input.c.x)), i32(-2147483648)), vec4<i32>(var_0.x | 30616i, 10437i, select(_wgslsmith_sub_i32(u_input.c.x, var_0.x), _wgslsmith_sub_i32(u_input.c.x, u_input.c.x), global0.x), _wgslsmith_clamp_i32(var_0.x, 63944i, -1i)));
            }
            var var_0 = Struct_3(_wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(abs(vec2<f32>(-1000f, 793f)))) - _wgslsmith_f_op_vec2_f32(abs(_wgslsmith_f_op_vec2_f32(vec2<f32>(-991f, -265f) * vec2<f32>(-616f, 461f))))))), Struct_2(_wgslsmith_div_f32(653f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(835f * 1898f) - _wgslsmith_f_op_f32(select(659f, 162f, true))))), ~u_input.b.xz, vec4<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(324f * 1613f) - -1195f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(509f - -1925f) + _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(step(862f, 1759f)), _wgslsmith_f_op_f32(-1140f)))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-851f + -1390f) + _wgslsmith_f_op_f32(f32(-1f) * -643f)) - _wgslsmith_f_op_f32(_wgslsmith_div_f32(-1948f, 231f) - _wgslsmith_f_op_f32(select(1613f, -756f, global0.x)))), _wgslsmith_f_op_f32(-496f - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(145f))))));
            for (var var_1 = 0i; !(_wgslsmith_dot_vec4_i32(-vec4<i32>(-1i, u_input.c.x, u_input.c.x, u_input.c.x) & select(vec4<i32>(u_input.c.x, u_input.c.x, u_input.c.x, u_input.c.x), vec4<i32>(u_input.c.x, u_input.c.x, -16519i, -1i), false), vec4<i32>(~(-44781i), u_input.c.x, 1i, _wgslsmith_sub_i32(i32(-2147483648), u_input.c.x))) >= (-(u_input.c.x ^ -7793i) << (var_0.c.x % 32u))); var_1 -= 1i) {
                if (LOOP_COUNTERS[0u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
                return vec2<bool>(global0.x, true);
            }
            switch (select(u_input.c.x ^ u_input.c.x, ~(~u_input.c.x), true)) {
                case 2147483647i: {
                }
                default: {
                    let var_1 = Struct_2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(round(-1000f)))));
                    let var_2 = _wgslsmith_f_op_f32(abs(var_0.d.x)) >= -173f;
                }
            }
        }
        case 35382i: {
            if (!(!global0.x)) {
                let var_0 = Struct_1((-(vec3<i32>(2147483647i, 3311i, 2147483647i) | vec3<i32>(-44192i, 537i, u_input.c.x)) | select(_wgslsmith_mod_vec3_i32(vec3<i32>(u_input.c.x, u_input.c.x, 2147483647i), vec3<i32>(40224i, u_input.c.x, i32(-2147483648))), vec3<i32>(-1i, u_input.c.x, u_input.c.x), vec3<bool>(false, false, global0.x))) >> (~max(vec3<u32>(u_input.b.x, 0u, u_input.b.x), min(vec3<u32>(u_input.b.x, u_input.b.x, 54584u), u_input.b)) % vec3<u32>(32u)), true, global0.x, _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-470f))), _wgslsmith_div_vec2_i32(vec2<i32>(_wgslsmith_dot_vec3_i32(~vec3<i32>(u_input.c.x, -16082i, u_input.c.x), ~vec3<i32>(u_input.c.x, u_input.c.x, 0i)), ~(i32(-2147483648) >> (u_input.a.x % 32u))), ~select(_wgslsmith_mod_vec2_i32(vec2<i32>(u_input.c.x, 1i), vec2<i32>(27078i, u_input.c.x)), u_input.c, !vec2<bool>(global0.x, global0.x))));
                var var_1 = _wgslsmith_mult_vec4_u32(~vec4<u32>(firstLeadingBit(u_input.b.x), firstTrailingBit(1u), 1u, abs(~61658u)), _wgslsmith_sub_vec4_u32(~u_input.a, vec4<u32>(~u_input.b.x, ~(u_input.a.x ^ u_input.a.x), _wgslsmith_div_u32(_wgslsmith_sub_u32(4294967295u, u_input.a.x), ~u_input.b.x), max(78182u, max(u_input.b.x, 0u)))));
                var var_2 = any(vec2<bool>(false, all(select(vec4<bool>(var_0.c, global0.x, global0.x, true), vec4<bool>(false, true, global0.x, true), false)))) && false;
                let var_3 = vec2<f32>(var_0.d, -631f);
                var var_4 = var_0.b;
            }
            let var_0 = Struct_3(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(abs(vec2<f32>(-795f, -510f))))), Struct_2(_wgslsmith_div_f32(_wgslsmith_div_f32(-1021f, _wgslsmith_f_op_f32(abs(206f))), _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(296f + 1008f))))), ~_wgslsmith_mult_vec2_u32(_wgslsmith_mult_vec2_u32(~vec2<u32>(36339u, u_input.a.x), ~u_input.b.xx), abs(~vec2<u32>(u_input.b.x, 1u))), _wgslsmith_f_op_vec4_f32(-_wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(356f, -745f, -1207f, 844f) * vec4<f32>(1478f, 553f, 1156f, 370f))), _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(-935f, -870f, -2022f, 555f)), vec4<f32>(1f, 1f, 1f, 1f)))));
            var var_1 = _wgslsmith_f_op_vec3_f32(floor(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(round(_wgslsmith_div_vec3_f32(_wgslsmith_div_vec3_f32(vec3<f32>(-1088f, var_0.a.x, -627f), vec3<f32>(541f, -876f, var_0.b.a)), vec3<f32>(1614f, 101f, 545f)))))));
            var_1 = var_0.d.zzx;
            global0 = !vec2<bool>((reverseBits(0u) <= (var_0.c.x & var_0.c.x)) & any(vec4<bool>(false, false, true, true)), any(vec2<bool>(false, true)));
        }
        case 33237i: {
            let var_0 = !select(!(10458u >= _wgslsmith_div_u32(1u, u_input.b.x)), true, true);
        }
        default: {
            global0 = !select(select(!select(vec2<bool>(global0.x, global0.x), vec2<bool>(false, global0.x), vec2<bool>(global0.x, false)), vec2<bool>(all(vec3<bool>(true, global0.x, global0.x)), u_input.b.x == 4294967295u), true), select(!vec2<bool>(global0.x, true), vec2<bool>(true, true), vec2<bool>(global0.x, any(vec4<bool>(true, false, true, true)))), !select(vec2<bool>(global0.x, global0.x), !vec2<bool>(global0.x, false), all(vec4<bool>(global0.x, false, global0.x, true))));
            global0 = select(select(select(!select(vec2<bool>(true, global0.x), vec2<bool>(true, global0.x), vec2<bool>(false, true)), select(vec2<bool>(true, true), vec2<bool>(global0.x, true), !vec2<bool>(global0.x, global0.x)), any(!vec3<bool>(false, global0.x, false))), select(vec2<bool>(4294967295u < u_input.b.x, global0.x), vec2<bool>(any(vec4<bool>(true, global0.x, true, true)), false), select(!vec2<bool>(global0.x, global0.x), !vec2<bool>(false, global0.x), false)), !vec2<bool>(global0.x, true)), !vec2<bool>(all(select(vec3<bool>(global0.x, global0.x, global0.x), vec3<bool>(global0.x, false, false), global0.x)), select(false, !global0.x, global0.x)), !vec2<bool>(global0.x, false));
            let var_0 = select(select(select(!vec2<bool>(global0.x, false), vec2<bool>(global0.x, !global0.x), vec2<bool>(select(global0.x, true, false), true)), !select(select(vec2<bool>(true, true), vec2<bool>(false, global0.x), false), select(vec2<bool>(global0.x, true), vec2<bool>(true, global0.x), global0.x), true), select(global0.x, !global0.x, any(select(vec3<bool>(global0.x, true, global0.x), vec3<bool>(false, global0.x, true), vec3<bool>(false, false, true))))), select(select(select(!vec2<bool>(global0.x, false), !vec2<bool>(global0.x, global0.x), true), vec2<bool>(true, true), true), vec2<bool>(global0.x, all(vec3<bool>(global0.x, global0.x, global0.x))), select(select(!vec2<bool>(global0.x, true), vec2<bool>(true, true), !vec2<bool>(global0.x, global0.x)), vec2<bool>(true, true), global0.x)), select(select(!(!vec2<bool>(global0.x, global0.x)), vec2<bool>(true, global0.x), !(u_input.a.x >= 0u)), select(vec2<bool>(global0.x, all(vec2<bool>(global0.x, true))), vec2<bool>(true, true), select(!vec2<bool>(global0.x, global0.x), vec2<bool>(true, global0.x), global0.x)), select(true, global0.x, global0.x)));
            global0 = vec2<bool>((u_input.c.x != u_input.c.x) || any(select(!var_0, !vec2<bool>(global0.x, var_0.x), vec2<bool>(var_0.x, var_0.x))), true);
        }
    }
    var var_0 = Struct_2(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(select(1000f, -2008f, !all(vec4<bool>(global0.x, global0.x, true, true)))))));
    global0 = vec2<bool>(true, all(select(vec2<bool>(select(false, true, global0.x), !global0.x), !select(vec2<bool>(global0.x, global0.x), vec2<bool>(false, false), vec2<bool>(false, false)), !vec2<bool>(global0.x, true))));
    for (var var_1 = -1i; all(select(vec3<bool>(true, global0.x, true), vec3<bool>(~56395u == u_input.b.x, true, all(select(vec4<bool>(false, false, true, global0.x), vec4<bool>(global0.x, true, false, true), vec4<bool>(false, global0.x, false, true)))), !all(!vec2<bool>(true, global0.x)))); ) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
    }
    var_0 = Struct_2(-1204f);
    return vec2<bool>(34389u > (_wgslsmith_mod_u32(~u_input.b.x, _wgslsmith_sub_u32(u_input.a.x, 1u)) << (u_input.b.x % 32u)), !all(!select(vec4<bool>(false, false, global0.x, global0.x), vec4<bool>(false, global0.x, true, global0.x), vec4<bool>(global0.x, global0.x, global0.x, false))));
}

fn func_5(arg_0: vec2<u32>, arg_1: Struct_2) -> f32 {
    if (!(!all(func_6()))) {
        let var_0 = Struct_1(select(vec3<i32>(max(u_input.c.x, i32(-2147483648)), 2147483647i, u_input.c.x), ~vec3<i32>(-12585i, 2147483647i, u_input.c.x) & ~vec3<i32>(u_input.c.x, 1i, u_input.c.x), vec3<bool>(global0.x, any(vec4<bool>(global0.x, global0.x, true, global0.x)), global0.x)) >> ((u_input.b | u_input.b) % vec3<u32>(32u)), func_6().x, true == global0.x, _wgslsmith_f_op_f32(abs(arg_1.a)), vec2<i32>(u_input.c.x, 1i) & (vec2<i32>(-1i) * -vec2<i32>(u_input.c.x, 95648i)));
        switch (_wgslsmith_dot_vec2_i32(var_0.a.xx, _wgslsmith_clamp_vec2_i32(_wgslsmith_add_vec2_i32(_wgslsmith_mod_vec2_i32(~vec2<i32>(-29699i, 1i), vec2<i32>(0i, u_input.c.x)), abs(~var_0.e)), min(u_input.c, ~vec2<i32>(0i, var_0.e.x)), vec2<i32>(-1i) * -abs(vec2<i32>(41870i, u_input.c.x))))) {
            case -7490i: {
                let var_1 = select(vec3<bool>(true, global0.x, false), vec3<bool>(select(all(!vec2<bool>(var_0.c, false)), 973f <= _wgslsmith_f_op_f32(arg_1.a + var_0.d), all(vec2<bool>(true, true))), var_0.c, var_0.b), select(!select(select(vec3<bool>(var_0.b, true, global0.x), vec3<bool>(true, var_0.b, false), vec3<bool>(var_0.c, false, global0.x)), !vec3<bool>(true, false, var_0.b), global0.x), select(!vec3<bool>(var_0.c, var_0.c, global0.x), vec3<bool>(20549u == arg_0.x, all(vec2<bool>(true, global0.x)), false), select(!vec3<bool>(true, var_0.c, var_0.c), select(vec3<bool>(var_0.c, false, var_0.b), vec3<bool>(var_0.c, global0.x, true), true), vec3<bool>(var_0.b, var_0.c, global0.x))), select(select(!vec3<bool>(global0.x, false, false), vec3<bool>(global0.x, var_0.c, true), select(vec3<bool>(true, true, global0.x), vec3<bool>(global0.x, var_0.b, false), vec3<bool>(true, true, true))), !vec3<bool>(global0.x, false, global0.x), any(select(vec4<bool>(global0.x, true, false, true), vec4<bool>(var_0.c, false, var_0.b, global0.x), vec4<bool>(false, var_0.c, global0.x, true))))));
                let var_2 = vec3<i32>(i32(-2147483648), _wgslsmith_dot_vec2_i32(_wgslsmith_sub_vec2_i32(min(vec2<i32>(15606i, var_0.e.x), _wgslsmith_add_vec2_i32(vec2<i32>(-1i, 1i), u_input.c)), select(u_input.c, ~vec2<i32>(u_input.c.x, var_0.e.x), select(vec2<bool>(var_1.x, var_1.x), vec2<bool>(global0.x, true), var_1.zy))), vec2<i32>(_wgslsmith_dot_vec4_i32(vec4<i32>(u_input.c.x, -22995i, -9364i, var_0.a.x), vec4<i32>(2147483647i, 28153i, var_0.e.x, u_input.c.x)) | -58582i, var_0.a.x)), ~var_0.e.x);
                global0 = select(select(select(!select(vec2<bool>(true, true), var_1.yx, global0.x), vec2<bool>(all(var_1.xy), select(var_0.c, global0.x, false)), true), !var_1.yx, vec2<bool>(false, var_0.d < arg_1.a)), vec2<bool>(var_1.x, var_1.x), !var_1.xz);
                global0 = var_1.zx;
            }
            default: {
            }
        }
        for (var var_1 = 0i; any(select(vec3<bool>(true, global0.x, ~arg_0.x <= 38412u), select(!select(vec3<bool>(false, true, global0.x), vec3<bool>(global0.x, var_0.b, false), var_0.c), !(!vec3<bool>(var_0.c, true, false)), true), false)); global0 = !(!(!select(vec2<bool>(true, false), !vec2<bool>(global0.x, false), all(vec2<bool>(true, false)))))) {
            if (LOOP_COUNTERS[2u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            global0 = vec2<bool>(!(!(all(vec3<bool>(true, true, true)) && any(vec3<bool>(var_0.c, false, var_0.c)))), 651f != _wgslsmith_div_f32(_wgslsmith_f_op_f32(-658f - arg_1.a), _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(388f + arg_1.a), -886f))));
            var var_2 = Struct_4(vec3<bool>(!global0.x, true, true));
            let var_3 = Struct_2(_wgslsmith_f_op_f32(-var_0.d));
        }
    }
    if (func_6().x) {
        global0 = !(!(!(!vec2<bool>(global0.x, global0.x))));
        global0 = vec2<bool>(global0.x, global0.x);
    }
    for (var var_0 = 6853i; !(28564i != u_input.c.x); ) {
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
        global0 = vec2<bool>(global0.x, !any(vec3<bool>(global0.x, global0.x, select(global0.x, false, global0.x))));
    }
    var var_0 = Struct_4(vec3<bool>(!global0.x, global0.x, select(true, arg_1.a <= _wgslsmith_f_op_f32(f32(-1f) * -248f), global0.x)));
    return arg_1.a;
}

fn func_4() -> f32 {
    let var_0 = vec4<bool>(true, !(!all(!vec2<bool>(global0.x, true))), true, global0.x);
    global0 = var_0.zy;
    for (var var_1 = 1i; var_1 > i32(-2147483648); var_1 += 1i) {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        if (any(vec2<bool>(any(vec4<bool>(true, false, true, !var_0.x)), !((u_input.a.x ^ u_input.b.x) >= u_input.b.x)))) {
            var_1 = countOneBits(u_input.c.x);
            var_1 = u_input.c.x;
            let var_2 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -425f)))) + _wgslsmith_f_op_f32(-1118f * _wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(func_5(u_input.a.yw, Struct_2(201f))) * 289f), _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(select(-266f, -524f, true)))))));
        }
    }
    if (global0.x) {
        switch (_wgslsmith_dot_vec3_i32((min(_wgslsmith_mult_vec3_i32(vec3<i32>(5377i, u_input.c.x, u_input.c.x), vec3<i32>(u_input.c.x, -45391i, 2147483647i)), vec3<i32>(u_input.c.x, u_input.c.x, 2147483647i)) | countOneBits(vec3<i32>(4881i, u_input.c.x, i32(-2147483648)))) & (vec3<i32>(abs(u_input.c.x), u_input.c.x, 0i) | vec3<i32>(14753i, u_input.c.x, u_input.c.x)), -countOneBits(-vec3<i32>(u_input.c.x, 1i, u_input.c.x)) >> (_wgslsmith_clamp_vec3_u32(reverseBits(u_input.a.yzz), u_input.a.xzy, _wgslsmith_add_vec3_u32(vec3<u32>(u_input.b.x, 4294967295u, 1608u), _wgslsmith_sub_vec3_u32(u_input.a.xzw, u_input.a.yzy))) % vec3<u32>(32u)))) {
            case 37864i: {
                var var_1 = Struct_2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_div_f32(1f, _wgslsmith_f_op_f32(sign(1922f))))));
                let var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_div_f32(1101f, -979f) + _wgslsmith_f_op_f32(f32(-1f) * -1000f)))));
            }
            case -37132i: {
                let var_1 = u_input.c.x;
                var var_2 = Struct_4(!(!vec3<bool>(var_0.x, var_0.x, false)));
            }
            default: {
                let var_1 = u_input.c.x;
                var var_2 = var_0.zyx;
                var var_3 = max(_wgslsmith_mult_i32(~countOneBits(reverseBits(2147483647i)), -firstLeadingBit(2147483647i)), var_1);
            }
        }
        var var_1 = var_0.yz;
        return _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(2878f - 1043f) - _wgslsmith_div_f32(-936f, 171f)) * _wgslsmith_f_op_f32(max(-267f, _wgslsmith_f_op_f32(-346f))))))));
    }
    let var_1 = (u_input.c.x & 0i) <= _wgslsmith_sub_i32(22699i, _wgslsmith_dot_vec3_i32(~abs(vec3<i32>(u_input.c.x, u_input.c.x, u_input.c.x)), _wgslsmith_clamp_vec3_i32(vec3<i32>(u_input.c.x, 0i, u_input.c.x), vec3<i32>(u_input.c.x, 2147483647i, u_input.c.x), _wgslsmith_add_vec3_i32(vec3<i32>(u_input.c.x, -57027i, u_input.c.x), vec3<i32>(u_input.c.x, u_input.c.x, 811i)))));
    return _wgslsmith_f_op_f32(min(190f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_5(vec2<u32>(17996u, 41018u), Struct_2(_wgslsmith_f_op_f32(1709f * -734f)))))));
}

fn func_7(arg_0: Struct_1, arg_1: vec3<f32>, arg_2: Struct_1) -> Struct_1 {
    global0 = !func_6();
    for (var var_0 = abs(-494i); !arg_2.b; var_0 += 1i) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        global0 = vec2<bool>(_wgslsmith_f_op_f32(-774f) < arg_1.x, all(!vec2<bool>(2164f <= arg_2.d, any(vec3<bool>(false, global0.x, global0.x)))));
        var var_1 = Struct_3(_wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(step(arg_1.x, _wgslsmith_f_op_f32(-arg_0.d))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1293f * arg_2.d)))), Struct_2(_wgslsmith_f_op_f32(f32(-1f) * -724f)), vec2<u32>(u_input.a.x, 19479u) << (vec2<u32>(~max(1u, 4294967295u), ~(~13515u)) % vec2<u32>(32u)), _wgslsmith_f_op_vec4_f32(abs(_wgslsmith_div_vec4_f32(vec4<f32>(_wgslsmith_f_op_f32(func_5(vec2<u32>(1u, 92354u), Struct_2(1094f))), _wgslsmith_f_op_f32(-arg_0.d), -260f, _wgslsmith_f_op_f32(func_5(vec2<u32>(56102u, u_input.a.x), Struct_2(arg_2.d)))), _wgslsmith_f_op_vec4_f32(vec4<f32>(arg_2.d, arg_0.d, -127f, arg_2.d) + _wgslsmith_f_op_vec4_f32(-vec4<f32>(arg_0.d, 301f, arg_2.d, arg_2.d)))))));
        let var_2 = any(!select(!(!vec2<bool>(true, global0.x)), func_6(), func_6()));
        switch (u_input.c.x) {
            case 0i: {
                let var_3 = arg_2;
                let var_4 = _wgslsmith_mult_i32(~arg_2.e.x, ~(i32(-2147483648)));
                continue;
            }
            default: {
                var_0 = -66374i;
            }
        }
    }
    switch (9784i) {
        default: {
            switch (20127i) {
                case -1i: {
                    let var_0 = arg_1.x;
                }
                default: {
                    global0 = vec2<bool>(global0.x, arg_2.c);
                    let var_0 = select(select(!(!(!vec4<bool>(arg_0.b, arg_0.c, false, false))), !(!select(vec4<bool>(arg_0.c, arg_0.c, false, false), vec4<bool>(arg_0.b, arg_0.c, arg_0.b, global0.x), vec4<bool>(arg_2.c, true, false, global0.x))), vec4<bool>(false, _wgslsmith_f_op_f32(select(arg_0.d, arg_2.d, true)) >= _wgslsmith_f_op_f32(arg_2.d * arg_2.d), any(!vec3<bool>(arg_2.c, global0.x, true)), global0.x)), select(select(!vec4<bool>(true, arg_2.c, false, global0.x), !vec4<bool>(arg_0.c, true, false, arg_2.c), vec4<bool>(true, any(vec3<bool>(true, false, false)), true, true)), vec4<bool>(true, true, true, false), true), select(vec4<bool>(true, true, false, false), select(vec4<bool>(true, true, true, true), !select(vec4<bool>(true, global0.x, global0.x, global0.x), vec4<bool>(arg_0.c, arg_0.c, arg_0.b, arg_2.c), false), arg_0.b), !vec4<bool>(true, arg_0.a.x == arg_0.e.x, arg_0.b, arg_0.c)));
                }
            }
            var var_0 = Struct_4(vec3<bool>(true, global0.x, false));
        }
    }
    var var_0 = arg_1.xz;
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        if (arg_0.b) {
        }
        continue;
    }
    return arg_0;
}

fn func_8(arg_0: bool, arg_1: Struct_1) -> bool {
    switch (_wgslsmith_add_i32(u_input.c.x, ~0i)) {
        case -43832i: {
            if (!arg_1.b) {
            }
            for (; arg_1.a.x > _wgslsmith_div_i32(firstTrailingBit(-37706i), u_input.c.x); ) {
                if (LOOP_COUNTERS[8u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
                let var_0 = !(!arg_0);
                global0 = !(!vec2<bool>(arg_1.c == func_6().x, false));
                global0 = select(!vec2<bool>(all(select(vec3<bool>(global0.x, true, false), vec3<bool>(arg_0, var_0, arg_0), arg_0)), arg_0), !vec2<bool>(_wgslsmith_div_f32(arg_1.d, 650f) >= _wgslsmith_f_op_f32(-arg_1.d), arg_1.a.x < func_7(arg_1, vec3<f32>(330f, 1000f, arg_1.d), arg_1).e.x), arg_0);
                var var_1 = 1u;
                break;
            }
            for (var var_0 = 1i; var_0 > i32(-2147483648); var_0 -= 1i) {
                if (LOOP_COUNTERS[9u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
                var var_1 = 0i;
                var_0 = -u_input.c.x;
                continue;
            }
            let var_0 = vec3<u32>(u_input.b.x, u_input.b.x, select(1u, max(3241u, 0u), !(!(i32(-2147483648) == u_input.c.x))));
            var var_1 = Struct_2(_wgslsmith_f_op_f32(func_5(vec2<u32>(u_input.a.x, min(_wgslsmith_clamp_u32(u_input.b.x, var_0.x, var_0.x), _wgslsmith_dot_vec2_u32(vec2<u32>(u_input.b.x, 4294967295u), vec2<u32>(var_0.x, 13208u)))), Struct_2(arg_1.d))));
        }
        case 6429i: {
            var var_0 = _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-arg_1.d)));
        }
        case 1760i: {
            global0 = vec2<bool>(func_7(Struct_1(vec3<i32>(21657i, _wgslsmith_mod_i32(39353i, u_input.c.x), arg_1.e.x), global0.x, any(vec3<bool>(global0.x, arg_0, arg_1.b)), _wgslsmith_f_op_f32(-498f), u_input.c), _wgslsmith_f_op_vec3_f32(select(vec3<f32>(1000f, -1064f, arg_1.d), _wgslsmith_f_op_vec3_f32(exp2(_wgslsmith_f_op_vec3_f32(-vec3<f32>(arg_1.d, 1971f, -1597f)))), true)), Struct_1(vec3<i32>(_wgslsmith_div_i32(2147483647i, arg_1.a.x), _wgslsmith_add_i32(u_input.c.x, -5342i), reverseBits(arg_1.a.x)), arg_1.c, false, _wgslsmith_f_op_f32(func_4()), firstLeadingBit(vec2<i32>(u_input.c.x, u_input.c.x)))).c, all(select(vec3<bool>(false, true, false), vec3<bool>(true, arg_0, true), true || arg_1.c)) & true);
            loop {
                if (LOOP_COUNTERS[10u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
                continue;
            }
            let var_0 = _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(step(vec4<f32>(-1348f, -295f, arg_1.d, arg_1.d), vec4<f32>(arg_1.d, arg_1.d, 2267f, -226f))) - _wgslsmith_div_vec4_f32(vec4<f32>(arg_1.d, -1429f, 553f, -1309f), vec4<f32>(arg_1.d, arg_1.d, arg_1.d, arg_1.d)))))));
        }
        case -443i: {
        }
        default: {
            loop {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                break;
            }
            return !any(select(!select(vec4<bool>(false, arg_1.c, arg_0, false), vec4<bool>(arg_1.c, global0.x, true, false), arg_1.b), vec4<bool>(any(vec4<bool>(false, true, global0.x, global0.x)), u_input.b.x >= u_input.b.x, true, arg_1.c), arg_1.c));
        }
    }
    for (var var_0 = -1i; var_0 >= 2147483647i; var_0 -= 1i) {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        break;
    }
    switch (u_input.c.x) {
        default: {
        }
    }
    global0 = select(select(!func_6(), !(!vec2<bool>(global0.x, false)), func_6()), !(!select(func_6(), vec2<bool>(false, arg_1.c), func_7(arg_1, vec3<f32>(207f, arg_1.d, arg_1.d), arg_1).c)), all(select(!vec4<bool>(arg_0, false, arg_0, arg_0), !select(vec4<bool>(true, false, arg_1.b, global0.x), vec4<bool>(arg_1.c, false, arg_1.c, false), true), vec4<bool>(true, false, true, global0.x))));
    global0 = select(vec2<bool>(-(arg_1.a.x | 2147483647i) != -1i, false), !vec2<bool>(!select(false, true, true), _wgslsmith_f_op_f32(sign(-819f)) != _wgslsmith_f_op_f32(-arg_1.d)), all(select(vec4<bool>(!arg_1.b, arg_1.b || false, arg_1.c & false, arg_1.b || true), vec4<bool>(arg_1.e.x >= -29557i, func_6().x, true, true), (arg_1.a.x >> (u_input.a.x % 32u)) > 46946i)));
    return 26060u > ~u_input.a.x;
}

fn func_3(arg_0: vec2<i32>) -> Struct_2 {
    switch (_wgslsmith_mult_i32(_wgslsmith_add_i32(-1i, arg_0.x), (abs(u_input.c.x) ^ -1i) | _wgslsmith_mult_i32(abs(1i), _wgslsmith_dot_vec2_i32(u_input.c, arg_0 >> (vec2<u32>(1u, 22703u) % vec2<u32>(32u)))))) {
        case -80754i: {
            global0 = vec2<bool>(true, any(!vec3<bool>(!global0.x, !global0.x, global0.x)));
            for (; func_8(any(!(!vec2<bool>(true, global0.x))), func_7(Struct_1(~reverseBits(vec3<i32>(u_input.c.x, u_input.c.x, -1i)), !global0.x, !(!global0.x), _wgslsmith_div_f32(_wgslsmith_f_op_f32(func_4()), _wgslsmith_f_op_f32(-946f)), vec2<i32>(~1i, 0i)), _wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(vec3<f32>(-864f, 148f, 712f) * _wgslsmith_f_op_vec3_f32(select(vec3<f32>(434f, -147f, 961f), vec3<f32>(2090f, 512f, 149f), global0.x))))), Struct_1((vec3<i32>(u_input.c.x, -29846i, arg_0.x) << (u_input.a.wzw % vec3<u32>(32u))) << (u_input.a.xxw % vec3<u32>(32u)), func_6().x && true, global0.x, _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-1782f))), ~(~u_input.c)))); ) {
                if (LOOP_COUNTERS[13u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
                var var_0 = _wgslsmith_clamp_u32(88967u, u_input.a.x, 1u);
                var var_1 = Struct_4(select(vec3<bool>(true, true, true), !(!vec3<bool>(false, true, global0.x)), !global0.x));
                var var_2 = true;
                continue;
            }
        }
        case 0i: {
            global0 = select(!vec2<bool>(_wgslsmith_mult_u32(u_input.b.x, 50119u) < 45967u, global0.x), !vec2<bool>(global0.x, false), !((-54182i > u_input.c.x) || global0.x) && all(select(vec2<bool>(true, true), !vec2<bool>(false, global0.x), false & global0.x)));
            let var_0 = Struct_2(_wgslsmith_f_op_f32(step(-669f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(max(-1000f, -1000f)))) - _wgslsmith_f_op_f32(f32(-1f) * -421f)))));
            for (; false; ) {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
                global0 = select(vec2<bool>(true, true), !vec2<bool>(global0.x, all(select(vec4<bool>(global0.x, true, global0.x, false), vec4<bool>(true, global0.x, false, global0.x), vec4<bool>(global0.x, global0.x, global0.x, global0.x)))), false);
            }
            let var_1 = _wgslsmith_div_i32(_wgslsmith_sub_i32(1i, 1i), -1i) << (~u_input.a.x % 32u);
        }
        case 15558i: {
            var var_0 = select(71574u, _wgslsmith_mod_u32(_wgslsmith_clamp_u32(u_input.b.x, countOneBits(_wgslsmith_dot_vec3_u32(vec3<u32>(u_input.a.x, u_input.a.x, u_input.a.x), vec3<u32>(u_input.b.x, u_input.b.x, 1604u))), _wgslsmith_dot_vec3_u32(u_input.b & u_input.a.yxz, vec3<u32>(30069u, 4294967295u, 48822u))), u_input.b.x | ~(4716u >> (0u % 32u))), global0.x);
            var_0 = countOneBits(u_input.b.x);
        }
        case -1i: {
            global0 = vec2<bool>(true, !func_7(Struct_1(vec3<i32>(-1i, -1i, u_input.c.x), true, false, -1695f, vec2<i32>(440i, u_input.c.x)), vec3<f32>(1146f, -598f, 706f), Struct_1(vec3<i32>(u_input.c.x, arg_0.x, u_input.c.x), false, false, 418f, u_input.c)).b | false);
            switch (-(_wgslsmith_mult_i32(_wgslsmith_dot_vec4_i32(reverseBits(vec4<i32>(0i, 1i, u_input.c.x, u_input.c.x)), vec4<i32>(15838i, 0i, u_input.c.x, i32(-2147483648)) | vec4<i32>(arg_0.x, -19866i, 1i, -58079i)), 11440i) & i32(-2147483648))) {
                case 55682i: {
                    return Struct_2(-828f);
                }
                default: {
                    global0 = select(vec2<bool>(global0.x, global0.x), !(!(!(!vec2<bool>(false, global0.x)))), _wgslsmith_add_u32(u_input.b.x, _wgslsmith_div_u32(min(u_input.a.x, u_input.a.x), select(u_input.a.x, 0u, global0.x))) == 1u);
                    global0 = func_6();
                }
            }
            let var_0 = Struct_3(vec2<f32>(-1310f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(1046f + -929f), _wgslsmith_f_op_f32(max(1039f, -1787f)))))), Struct_2(414f), u_input.b.zz, _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(min(vec4<f32>(-1899f, 1351f, -1418f, 1353f), _wgslsmith_f_op_vec4_f32(vec4<f32>(1217f, -798f, -1080f, -796f) + vec4<f32>(-498f, 941f, 443f, -482f)))))));
            for (var var_1 = -5711i; (!global0.x && all(vec4<bool>(any(vec2<bool>(false, false)), !global0.x, false, false))) != true; var_1 += 1i) {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
                break;
            }
            let var_1 = _wgslsmith_f_op_f32(-875f - _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(ceil(var_0.a.x)), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(-1791f, 1458f)))));
        }
        default: {
            global0 = func_6();
            var var_0 = max(vec2<u32>(~reverseBits(10952u), u_input.b.x) ^ vec2<u32>(firstTrailingBit(abs(1u)), u_input.a.x), ~vec2<u32>(_wgslsmith_mod_u32(u_input.a.x, 4294967295u) | max(21346u, u_input.b.x), min(u_input.a.x, ~u_input.b.x)));
            if (_wgslsmith_f_op_f32(func_7(Struct_1(vec3<i32>(arg_0.x, u_input.c.x, u_input.c.x), !global0.x, true, _wgslsmith_f_op_f32(1427f * -2291f), _wgslsmith_add_vec2_i32(u_input.c, vec2<i32>(0i, -8290i))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(step(vec3<f32>(-382f, -551f, 1571f), vec3<f32>(609f, -1000f, 1100f))) + vec3<f32>(1f, 1f, 1f)), Struct_1(vec3<i32>(arg_0.x, -24502i, 0i), global0.x | true, true, 496f, arg_0)).d - _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-768f)))) >= _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(_wgslsmith_div_f32(946f, _wgslsmith_div_f32(1000f, 1472f)))))) {
                let var_1 = Struct_4(vec3<bool>(true, select(true, any(select(vec3<bool>(global0.x, global0.x, false), vec3<bool>(false, false, false), vec3<bool>(global0.x, true, false))), any(select(vec4<bool>(global0.x, true, global0.x, global0.x), vec4<bool>(global0.x, true, true, global0.x), vec4<bool>(false, global0.x, false, false)))), all(!(!vec3<bool>(global0.x, global0.x, global0.x)))));
                let var_2 = _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(436f, -1398f, 479f) + vec3<f32>(467f, -588f, 926f))))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(min(vec3<f32>(-968f, 560f, 169f), _wgslsmith_div_vec3_f32(vec3<f32>(-782f, -504f, 1916f), vec3<f32>(-314f, -1166f, -948f))))) * _wgslsmith_f_op_vec3_f32(exp2(_wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(vec3<f32>(-640f, 141f, -749f), vec3<f32>(-332f, 1386f, 208f)) * _wgslsmith_div_vec3_f32(vec3<f32>(259f, 1128f, 314f), vec3<f32>(856f, 673f, -1000f))))))));
            }
            switch (~u_input.c.x) {
                case i32(-2147483648): {
                    var var_1 = ~(-4772i);
                    var var_2 = global0.x;
                }
                case 48071i: {
                    var_0 = vec2<u32>(u_input.b.x & var_0.x, var_0.x);
                    var var_1 = Struct_4(!vec3<bool>(global0.x, func_6().x, true));
                    var var_2 = Struct_1(vec3<i32>(-1i, i32(-2147483648), -22368i), var_1.a.x, !select(global0.x, true, any(select(var_1.a.xy, var_1.a.yx, true))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(818f)) * _wgslsmith_f_op_f32(-2151f - 1098f)) - _wgslsmith_f_op_f32(abs(1597f)))), (vec2<i32>(_wgslsmith_div_i32(10338i, arg_0.x), func_7(Struct_1(vec3<i32>(12761i, 10092i, -23818i), true, global0.x, -254f, arg_0), vec3<f32>(-437f, -1286f, 1425f), Struct_1(vec3<i32>(1i, arg_0.x, i32(-2147483648)), global0.x, true, 669f, arg_0)).e.x) & _wgslsmith_div_vec2_i32(vec2<i32>(2147483647i, 2147483647i) | vec2<i32>(u_input.c.x, u_input.c.x), -vec2<i32>(arg_0.x, arg_0.x))) ^ ~(~(u_input.c & arg_0)));
                }
                case 29467i: {
                    var_0 = ~u_input.a.wx;
                    var var_1 = Struct_1(vec3<i32>(~func_7(Struct_1(vec3<i32>(u_input.c.x, u_input.c.x, arg_0.x), global0.x, true, 245f, u_input.c), _wgslsmith_f_op_vec3_f32(vec3<f32>(550f, 227f, -643f) * vec3<f32>(591f, 285f, -1404f)), Struct_1(vec3<i32>(arg_0.x, arg_0.x, i32(-2147483648)), global0.x, global0.x, 467f, vec2<i32>(-41968i, 15505i))).a.x, u_input.c.x, ~_wgslsmith_dot_vec3_i32(vec3<i32>(0i, 1i, arg_0.x), vec3<i32>(arg_0.x, i32(-2147483648), 22302i)) ^ -20111i), var_0.x >= ~((var_0.x >> (var_0.x % 32u)) >> (32823u % 32u)), !global0.x, -1000f, -(_wgslsmith_mod_vec2_i32(~vec2<i32>(28911i, -21234i), vec2<i32>(arg_0.x, 14185i)) & _wgslsmith_mult_vec2_i32(arg_0, vec2<i32>(27550i, u_input.c.x))));
                    let var_2 = _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(-280f * _wgslsmith_f_op_f32(var_1.d * 1000f)), _wgslsmith_f_op_f32(func_5(u_input.b.xz, Struct_2(var_1.d))))) * _wgslsmith_f_op_f32(var_1.d - 585f))));
                }
                case -1i: {
                    var var_1 = _wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(-492f, 542f, global0.x)) + _wgslsmith_f_op_f32(func_5(u_input.b.xx, Struct_2(-388f)))) + _wgslsmith_div_f32(_wgslsmith_f_op_f32(-875f), -1008f)), _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(442f - -432f)))), _wgslsmith_f_op_f32(-731f)));
                    var var_2 = Struct_2(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(var_1.x, var_1.x))))));
                }
                default: {
                    let var_1 = u_input.a;
                    var_0 = vec2<u32>(24253u, var_0.x);
                    let var_2 = Struct_1(-vec3<i32>(min(firstTrailingBit(1i), 1i), _wgslsmith_mult_i32(17385i, 43336i), arg_0.x), global0.x, false, -303f, -vec2<i32>(u_input.c.x, arg_0.x | u_input.c.x) & _wgslsmith_div_vec2_i32(vec2<i32>(u_input.c.x, i32(-1i) * i32(-2147483648)), _wgslsmith_sub_vec2_i32(_wgslsmith_mod_vec2_i32(arg_0, u_input.c), _wgslsmith_sub_vec2_i32(arg_0, u_input.c))));
                    var var_3 = _wgslsmith_sub_vec2_i32(u_input.c >> (select(_wgslsmith_mult_vec2_u32(min(var_1.wz, var_1.yx), vec2<u32>(var_1.x, var_0.x) << (vec2<u32>(4294967295u, var_1.x) % vec2<u32>(32u))), vec2<u32>(u_input.a.x, 4294967295u), any(vec3<bool>(var_2.b, false, true))) % vec2<u32>(32u)), select(vec2<i32>(abs(arg_0.x), 5995i), u_input.c, vec2<bool>(true, global0.x)));
                }
            }
        }
    }
    var var_0 = u_input.a.wxw;
    let var_1 = u_input.b.zy;
    let var_2 = Struct_4(select(select(select(!vec3<bool>(false, global0.x, global0.x), select(vec3<bool>(false, global0.x, global0.x), vec3<bool>(false, global0.x, global0.x), global0.x), select(vec3<bool>(false, global0.x, true), vec3<bool>(global0.x, global0.x, false), global0.x)), !vec3<bool>(global0.x, global0.x, global0.x), true), !vec3<bool>(global0.x, global0.x, !global0.x), true));
    var_0 = vec3<u32>(reverseBits(abs(_wgslsmith_dot_vec3_u32(u_input.b, u_input.b))), var_1.x, 1u);
    return Struct_2(-605f);
}

fn func_9(arg_0: Struct_2, arg_1: vec3<f32>, arg_2: Struct_1) -> Struct_2 {
    if (any(vec4<bool>(global0.x, all(!select(vec4<bool>(arg_2.c, false, arg_2.c, arg_2.b), vec4<bool>(global0.x, true, global0.x, false), vec4<bool>(false, global0.x, arg_2.b, false))), true, false))) {
        switch (1i) {
            case 1i: {
                global0 = !(!func_6());
                let var_0 = Struct_4(!select(!(!vec3<bool>(arg_2.b, true, true)), vec3<bool>(arg_2.c, true, -498f > arg_0.a), _wgslsmith_f_op_f32(-arg_2.d) != arg_0.a));
                global0 = !select(vec2<bool>(true, !var_0.a.x), var_0.a.yz, true);
                var var_1 = Struct_2(-290f);
                global0 = select(vec2<bool>(any(!vec4<bool>(arg_2.c, true, true, var_0.a.x)), arg_2.c), var_0.a.xx, !(!(!vec2<bool>(false, arg_2.c))));
            }
            case -1i: {
            }
            default: {
                var var_0 = arg_0.a;
                var var_1 = ~((u_input.c.x >> (countOneBits(0u) % 32u)) & 1i);
            }
        }
    }
    var var_0 = _wgslsmith_div_i32(11170i, countOneBits(i32(-2147483648)));
    if (global0.x) {
    }
    if (true) {
        let var_1 = global0.x;
        var var_2 = ~abs(countOneBits(~vec2<i32>(u_input.c.x, arg_2.a.x)));
        var var_3 = Struct_4(vec3<bool>(!arg_2.c, any(!vec4<bool>(false, global0.x, true, arg_2.b)), arg_2.d < _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-arg_2.d))));
    }
    if (true) {
        var var_1 = arg_2;
        var var_2 = select(!select(!(!vec4<bool>(arg_2.b, false, true, var_1.c)), vec4<bool>(true, arg_2.e.x >= 20639i, u_input.c.x > var_1.e.x, func_8(true, Struct_1(vec3<i32>(arg_2.a.x, -21839i, -1i), false, global0.x, -864f, arg_2.a.zz))), !global0.x), vec4<bool>(true, all(vec2<bool>(false, arg_2.d <= -1000f)), func_6().x, func_7(func_7(func_7(Struct_1(vec3<i32>(0i, u_input.c.x, arg_2.a.x), global0.x, arg_2.b, -169f, vec2<i32>(var_1.e.x, var_1.e.x)), arg_1, Struct_1(vec3<i32>(u_input.c.x, 4484i, -9004i), false, global0.x, 1613f, u_input.c)), arg_1, Struct_1(vec3<i32>(var_1.a.x, -19265i, 0i), false, false, -2166f, vec2<i32>(-24185i, arg_2.e.x))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(abs(arg_1))), func_7(Struct_1(var_1.a, arg_2.c, false, arg_0.a, var_1.a.xz), _wgslsmith_f_op_vec3_f32(-arg_1), arg_2)).b), func_7(func_7(func_7(arg_2, _wgslsmith_f_op_vec3_f32(max(arg_1, vec3<f32>(-859f, arg_1.x, var_1.d))), Struct_1(vec3<i32>(-9414i, arg_2.e.x, 0i), arg_2.c, var_1.c, -1417f, vec2<i32>(1i, 26355i))), _wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(floor(arg_1)), _wgslsmith_f_op_vec3_f32(-arg_1))), func_7(arg_2, _wgslsmith_f_op_vec3_f32(-vec3<f32>(-1000f, -1000f, arg_0.a)), Struct_1(var_1.a, false, var_1.b, arg_2.d, vec2<i32>(u_input.c.x, arg_2.a.x)))), _wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(-arg_1), _wgslsmith_f_op_vec3_f32(arg_1 * _wgslsmith_f_op_vec3_f32(arg_1 + vec3<f32>(arg_0.a, -1757f, 473f))))), func_7(arg_2, _wgslsmith_div_vec3_f32(vec3<f32>(-211f, var_1.d, -1954f), _wgslsmith_f_op_vec3_f32(-arg_1)), arg_2)).b);
        switch (countOneBits(var_1.e.x) | var_1.a.x) {
            case 52005i: {
                var_2 = select(vec4<bool>(false, all(var_2.ww), var_1.c, true), vec4<bool>((_wgslsmith_div_u32(3969u, 25203u) <= ~u_input.b.x) || func_6().x, any(var_2.yxw), true, false), var_2.x);
            }
            case i32(-2147483648): {
                var var_3 = max(u_input.a, ~(~countOneBits(vec4<u32>(u_input.a.x, u_input.b.x, u_input.b.x, u_input.b.x) & u_input.a)));
                return arg_0;
            }
            default: {
                var var_3 = func_3(vec2<i32>(-297i, ~arg_2.a.x | arg_2.e.x));
            }
        }
        if (true) {
            global0 = func_6();
            let var_3 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_4())));
            var_1 = arg_2;
            var_1 = arg_2;
            var var_4 = func_7(arg_2, _wgslsmith_f_op_vec3_f32(arg_1 * _wgslsmith_f_op_vec3_f32(arg_1 * vec3<f32>(_wgslsmith_f_op_f32(arg_2.d * -1000f), arg_0.a, var_1.d))), arg_2);
        }
        var var_3 = func_3(arg_2.a.zz);
    }
    return arg_0;
}

fn func_10(arg_0: Struct_3, arg_1: u32, arg_2: f32) -> f32 {
    let var_0 = arg_0;
    switch (~(~u_input.c.x)) {
        case 2147483647i: {
            global0 = !vec2<bool>(!all(select(vec4<bool>(global0.x, global0.x, global0.x, global0.x), vec4<bool>(global0.x, true, global0.x, global0.x), false)), true);
            loop {
                if (LOOP_COUNTERS[16u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
                var var_1 = Struct_4(select(vec3<bool>(_wgslsmith_f_op_f32(-var_0.d.x) < func_7(Struct_1(vec3<i32>(2147483647i, i32(-2147483648), u_input.c.x), false, false, -183f, u_input.c), var_0.d.ywz, Struct_1(vec3<i32>(-4124i, u_input.c.x, i32(-2147483648)), global0.x, false, -1560f, u_input.c)).d, all(select(vec4<bool>(true, global0.x, global0.x, true), vec4<bool>(global0.x, global0.x, global0.x, global0.x), global0.x)), select(arg_0.d.x == 606f, var_0.c.x != 4294967295u, u_input.c.x == -47686i)), !vec3<bool>(true, global0.x, func_6().x), !(!(!vec3<bool>(true, global0.x, global0.x)))));
                var var_2 = min(_wgslsmith_mod_u32(0u, 1u) << (_wgslsmith_add_u32(~_wgslsmith_add_u32(arg_1, 40655u), u_input.a.x) % 32u), ~((_wgslsmith_dot_vec3_u32(vec3<u32>(arg_1, u_input.b.x, u_input.a.x), u_input.b) & firstLeadingBit(31743u)) ^ u_input.a.x));
                var_1 = Struct_4(select(vec3<bool>(_wgslsmith_f_op_f32(arg_0.a.x * -807f) <= _wgslsmith_f_op_f32(-arg_0.d.x), global0.x, any(var_1.a.zz) == !global0.x), !select(var_1.a, !vec3<bool>(var_1.a.x, var_1.a.x, true), !vec3<bool>(var_1.a.x, var_1.a.x, var_1.a.x)), ~min(var_0.c.x, u_input.b.x) == var_0.c.x));
            }
            let var_1 = firstTrailingBit(_wgslsmith_sub_vec2_u32(~_wgslsmith_sub_vec2_u32(abs(arg_0.c), ~var_0.c), select(u_input.b.zx, _wgslsmith_add_vec2_u32(arg_0.c, vec2<u32>(u_input.b.x, u_input.a.x) >> (vec2<u32>(1u, 4294967295u) % vec2<u32>(32u))), func_6())));
            global0 = select(!select(vec2<bool>(false, var_0.c.x > var_1.x), vec2<bool>(false, false), vec2<bool>(true, global0.x)), select(vec2<bool>(u_input.c.x > 35155i, true), vec2<bool>(true, true), vec2<bool>(true, select(global0.x, true, global0.x))), !vec2<bool>(true, !select(global0.x, true, global0.x)));
        }
        case 16603i: {
            if (!(!global0.x)) {
            }
            if (global0.x) {
                global0 = vec2<bool>((firstLeadingBit(-9873i) & min(1i, u_input.c.x)) > u_input.c.x, !global0.x);
                let var_1 = Struct_4(!(!vec3<bool>(!global0.x, any(vec2<bool>(global0.x, global0.x)), true)));
                var var_2 = vec2<i32>(1i, u_input.c.x);
            }
            if (select(func_8(~(-48831i) == min(_wgslsmith_mult_i32(0i, -17615i), firstTrailingBit(113209i)), Struct_1(_wgslsmith_clamp_vec3_i32(min(vec3<i32>(-17928i, -832i, -28483i), vec3<i32>(u_input.c.x, -19638i, u_input.c.x)), vec3<i32>(u_input.c.x, u_input.c.x, u_input.c.x), vec3<i32>(u_input.c.x, -3520i, 0i)), all(vec4<bool>(global0.x, global0.x, true, global0.x)) && func_7(Struct_1(vec3<i32>(u_input.c.x, u_input.c.x, 44557i), false, global0.x, arg_2, vec2<i32>(i32(-2147483648), u_input.c.x)), arg_0.d.wxz, Struct_1(vec3<i32>(i32(-2147483648), 40306i, -2516i), true, global0.x, arg_2, u_input.c)).b, true, _wgslsmith_f_op_f32(min(arg_2, _wgslsmith_div_f32(arg_2, 937f))), u_input.c)), any(select(!select(vec2<bool>(false, global0.x), vec2<bool>(global0.x, global0.x), vec2<bool>(global0.x, global0.x)), vec2<bool>(arg_2 <= 404f, false), func_6())), true)) {
                global0 = vec2<bool>(22629i <= (u_input.c.x >> (1u % 32u)), func_6().x);
                let var_1 = !vec3<bool>((global0.x | (arg_0.a.x >= 1006f)) && (!global0.x || all(vec3<bool>(global0.x, false, true))), !any(vec2<bool>(false, true)) || global0.x, false);
                var var_2 = _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(sign(arg_2)), func_9(func_9(arg_0.b, vec3<f32>(991f, 1799f, arg_2), Struct_1(vec3<i32>(u_input.c.x, u_input.c.x, -496i), true, true, arg_2, u_input.c)), arg_0.d.xwx, func_7(Struct_1(vec3<i32>(-20918i, 0i, -13012i), true, false, var_0.d.x, u_input.c), vec3<f32>(-1147f, arg_2, -180f), Struct_1(vec3<i32>(u_input.c.x, u_input.c.x, 2910i), global0.x, var_1.x, arg_0.d.x, vec2<i32>(i32(-2147483648), 23924i)))).a, _wgslsmith_f_op_f32(max(-914f, _wgslsmith_f_op_f32(trunc(arg_2)))))), arg_0.d.xzx, u_input.c.x >= _wgslsmith_dot_vec4_i32(_wgslsmith_mod_vec4_i32(vec4<i32>(u_input.c.x, u_input.c.x, -1i, 2147483647i), vec4<i32>(u_input.c.x, -19970i, u_input.c.x, -63320i)), vec4<i32>(_wgslsmith_add_i32(u_input.c.x, 0i), u_input.c.x, 0i | u_input.c.x, abs(-6334i)))));
            }
            for (var var_1 = 1i; ; var_1 = _wgslsmith_mod_i32(2147483647i, select(u_input.c.x, 59018i, func_6().x))) {
                if (LOOP_COUNTERS[17u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
                continue;
            }
            for (; func_7(Struct_1(_wgslsmith_mod_vec3_i32(-firstLeadingBit(vec3<i32>(u_input.c.x, 39333i, 51251i)), -(vec3<i32>(1i, -29443i, -10566i) | vec3<i32>(u_input.c.x, i32(-2147483648), 2147483647i))), func_7(func_7(func_7(Struct_1(vec3<i32>(1i, u_input.c.x, 2147483647i), false, global0.x, arg_2, u_input.c), vec3<f32>(arg_2, arg_0.b.a, 578f), Struct_1(vec3<i32>(1717i, u_input.c.x, 5690i), true, global0.x, 575f, u_input.c)), _wgslsmith_f_op_vec3_f32(round(vec3<f32>(323f, 388f, var_0.d.x))), Struct_1(vec3<i32>(u_input.c.x, -1i, u_input.c.x), false, global0.x, var_0.d.x, vec2<i32>(u_input.c.x, u_input.c.x))), arg_0.d.zyz, func_7(func_7(Struct_1(vec3<i32>(13865i, u_input.c.x, -1i), false, global0.x, arg_2, u_input.c), vec3<f32>(arg_2, arg_2, 1143f), Struct_1(vec3<i32>(i32(-2147483648), u_input.c.x, -72185i), global0.x, global0.x, 1329f, u_input.c)), _wgslsmith_f_op_vec3_f32(-vec3<f32>(var_0.d.x, arg_0.b.a, var_0.d.x)), func_7(Struct_1(vec3<i32>(-34952i, u_input.c.x, u_input.c.x), global0.x, global0.x, var_0.b.a, vec2<i32>(-1i, u_input.c.x)), vec3<f32>(arg_0.b.a, var_0.b.a, arg_0.b.a), Struct_1(vec3<i32>(u_input.c.x, u_input.c.x, u_input.c.x), false, global0.x, var_0.b.a, vec2<i32>(1i, u_input.c.x))))).b, any(!vec3<bool>(false, false, global0.x)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(func_4())), vec2<i32>(-(~1i), u_input.c.x)), vec3<f32>(_wgslsmith_div_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -794f) - _wgslsmith_f_op_f32(-102f * var_0.b.a)), _wgslsmith_f_op_f32(step(1006f, _wgslsmith_f_op_f32(f32(-1f) * -919f)))), _wgslsmith_f_op_f32(var_0.b.a + _wgslsmith_div_f32(arg_0.a.x, _wgslsmith_f_op_f32(-355f + -992f))), -387f), func_7(func_7(Struct_1(select(vec3<i32>(u_input.c.x, u_input.c.x, 1i), vec3<i32>(-38215i, u_input.c.x, u_input.c.x), global0.x), true, func_6().x, 609f, _wgslsmith_div_vec2_i32(vec2<i32>(u_input.c.x, 2076i), u_input.c)), _wgslsmith_f_op_vec3_f32(-_wgslsmith_div_vec3_f32(arg_0.d.xyy, arg_0.d.yyw)), func_7(func_7(Struct_1(vec3<i32>(u_input.c.x, -9421i, u_input.c.x), global0.x, true, 726f, u_input.c), vec3<f32>(arg_0.a.x, -659f, var_0.b.a), Struct_1(vec3<i32>(u_input.c.x, -61638i, -1i), true, global0.x, arg_2, vec2<i32>(u_input.c.x, u_input.c.x))), _wgslsmith_f_op_vec3_f32(select(var_0.d.yxz, arg_0.d.wyz, true)), Struct_1(vec3<i32>(u_input.c.x, 22391i, -22777i), true, global0.x, -664f, vec2<i32>(u_input.c.x, 16828i)))), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(exp2(_wgslsmith_f_op_vec3_f32(step(arg_0.d.zzw, vec3<f32>(var_0.b.a, 1337f, var_0.b.a)))))), Struct_1((vec3<i32>(41769i, -1i, 2147483647i) << (vec3<u32>(u_input.b.x, var_0.c.x, 4294967295u) % vec3<u32>(32u))) ^ abs(vec3<i32>(i32(-2147483648), -15809i, i32(-2147483648))), true, !func_6().x, _wgslsmith_f_op_f32(-arg_0.b.a), firstLeadingBit(vec2<i32>(-10820i, 2147483647i)) | u_input.c))).b; ) {
                if (LOOP_COUNTERS[18u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
                let var_1 = _wgslsmith_f_op_f32(-func_7(Struct_1(select(vec3<i32>(-4344i, u_input.c.x, u_input.c.x), vec3<i32>(2147483647i, u_input.c.x, u_input.c.x), global0.x), func_7(Struct_1(vec3<i32>(i32(-2147483648), u_input.c.x, u_input.c.x), global0.x, global0.x, arg_2, u_input.c), var_0.d.wxx, Struct_1(vec3<i32>(-7882i, u_input.c.x, u_input.c.x), true, global0.x, 1023f, u_input.c)).c, true, _wgslsmith_f_op_f32(arg_2 * 403f), min(vec2<i32>(u_input.c.x, 2147483647i), vec2<i32>(u_input.c.x, 0i))), var_0.d.yxz, Struct_1(_wgslsmith_mult_vec3_i32(vec3<i32>(0i, 0i, 1i), vec3<i32>(u_input.c.x, u_input.c.x, 64153i)), func_7(Struct_1(vec3<i32>(u_input.c.x, u_input.c.x, 0i), false, global0.x, arg_0.d.x, u_input.c), arg_0.d.zzx, Struct_1(vec3<i32>(i32(-2147483648), i32(-2147483648), u_input.c.x), true, true, arg_0.b.a, u_input.c)).c, global0.x & global0.x, _wgslsmith_div_f32(-473f, -716f), vec2<i32>(-17358i, u_input.c.x))).d) >= _wgslsmith_f_op_f32(arg_0.a.x + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(trunc(1050f)))));
                global0 = vec2<bool>(false, u_input.c.x > -16480i);
                let var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1000f * _wgslsmith_f_op_f32(-arg_2)));
                break;
            }
        }
        default: {
            switch (_wgslsmith_dot_vec3_i32(vec3<i32>(_wgslsmith_sub_i32(-abs(-23388i), 0i), firstLeadingBit(u_input.c.x), _wgslsmith_div_i32(countOneBits(-19488i), -42806i)), vec3<i32>(-((u_input.c.x | u_input.c.x) >> (_wgslsmith_dot_vec2_u32(u_input.b.zy, u_input.b.zx) % 32u)), -(~(-1i)), 68776i))) {
                case -1i: {
                    let var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(floor(arg_0.b.a)), _wgslsmith_f_op_f32(exp2(arg_2))))));
                    var var_2 = arg_0.b;
                    let var_3 = 33281u;
                    var_2 = func_3(vec2<i32>(_wgslsmith_add_i32(u_input.c.x, select(20852i, _wgslsmith_dot_vec4_i32(vec4<i32>(-37478i, 3000i, u_input.c.x, u_input.c.x), vec4<i32>(1i, -58397i, 5547i, -1i)), global0.x)), 1i));
                    let var_4 = Struct_3(_wgslsmith_f_op_vec2_f32(max(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(max(var_0.d.zz, _wgslsmith_f_op_vec2_f32(floor(vec2<f32>(167f, arg_2))))) * vec2<f32>(_wgslsmith_f_op_f32(trunc(252f)), 562f)), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(var_0.a * vec2<f32>(arg_2, -1000f)) - _wgslsmith_f_op_vec2_f32(vec2<f32>(var_0.b.a, var_0.b.a) + vec2<f32>(var_2.a, var_1)))))), arg_0.b, vec2<u32>(148u ^ (firstLeadingBit(arg_0.c.x) >> (~23037u % 32u)), ~_wgslsmith_clamp_u32(~var_0.c.x, 50145u, u_input.b.x)), var_0.d);
                }
                case i32(-2147483648): {
                    global0 = select(!vec2<bool>(any(vec2<bool>(false, global0.x)), false), vec2<bool>(true, global0.x), select(select(vec2<bool>(true, true), func_6(), !(!vec2<bool>(global0.x, global0.x))), !(!select(vec2<bool>(true, global0.x), vec2<bool>(global0.x, global0.x), vec2<bool>(false, true))), vec2<bool>(true, all(!vec2<bool>(global0.x, false)))));
                    var var_1 = _wgslsmith_f_op_f32(trunc(arg_0.b.a));
                    global0 = select(!select(select(vec2<bool>(false, global0.x), vec2<bool>(false, global0.x), func_6()), vec2<bool>(true, true), func_6()), !vec2<bool>(all(vec3<bool>(true, global0.x, global0.x)), true | global0.x), select(vec2<bool>(global0.x, any(!vec3<bool>(global0.x, false, global0.x))), select(vec2<bool>(global0.x | false, true), !func_6(), global0.x), !global0.x));
                    global0 = vec2<bool>(all(vec3<bool>(all(vec4<bool>(true, true, false, global0.x)) || !global0.x, false, global0.x)), !(!func_6().x));
                }
                case 33091i: {
                }
                default: {
                    var var_1 = select(_wgslsmith_sub_vec3_i32(vec3<i32>(u_input.c.x, -22778i & (u_input.c.x ^ 1i), func_7(Struct_1(vec3<i32>(u_input.c.x, 429i, 894i), global0.x, global0.x, -224f, vec2<i32>(1i, u_input.c.x)), _wgslsmith_f_op_vec3_f32(var_0.d.zzz + vec3<f32>(arg_0.d.x, -828f, arg_2)), func_7(Struct_1(vec3<i32>(u_input.c.x, 0i, -1i), global0.x, false, arg_2, vec2<i32>(-1i, 38986i)), var_0.d.wzw, Struct_1(vec3<i32>(1i, u_input.c.x, i32(-2147483648)), true, global0.x, -1896f, vec2<i32>(62057i, u_input.c.x)))).e.x), vec3<i32>(_wgslsmith_mult_i32(~u_input.c.x, abs(i32(-2147483648))), -(~11976i), u_input.c.x)), vec3<i32>(23080i >> (~_wgslsmith_dot_vec4_u32(vec4<u32>(4294967295u, 44429u, arg_0.c.x, 41333u), vec4<u32>(0u, arg_0.c.x, var_0.c.x, 1u)) % 32u), i32(-2147483648), (u_input.c.x >> (_wgslsmith_dot_vec2_u32(arg_0.c, u_input.a.yz) % 32u)) | select(u_input.c.x << (arg_1 % 32u), abs(-89541i), !global0.x)), select(vec3<bool>(any(select(vec2<bool>(true, false), vec2<bool>(global0.x, true), vec2<bool>(global0.x, false))), any(vec2<bool>(global0.x, global0.x)), true), vec3<bool>(any(select(vec4<bool>(true, false, global0.x, false), vec4<bool>(true, global0.x, global0.x, false), vec4<bool>(global0.x, global0.x, global0.x, false))), true, func_7(func_7(Struct_1(vec3<i32>(0i, u_input.c.x, 0i), global0.x, false, -1000f, vec2<i32>(u_input.c.x, u_input.c.x)), var_0.d.yxy, Struct_1(vec3<i32>(u_input.c.x, i32(-2147483648), u_input.c.x), true, true, 476f, u_input.c)), arg_0.d.xyy, func_7(Struct_1(vec3<i32>(u_input.c.x, i32(-2147483648), u_input.c.x), true, global0.x, arg_0.b.a, vec2<i32>(0i, u_input.c.x)), vec3<f32>(1000f, -321f, 112f), Struct_1(vec3<i32>(u_input.c.x, 77474i, u_input.c.x), global0.x, true, var_0.d.x, vec2<i32>(u_input.c.x, i32(-2147483648))))).c), !vec3<bool>(global0.x, true, all(vec4<bool>(global0.x, true, global0.x, true)))));
                    let var_2 = _wgslsmith_clamp_i32(44714i, -27027i, _wgslsmith_dot_vec4_i32(-firstLeadingBit(vec4<i32>(-60956i, 43209i, u_input.c.x, 29793i)), _wgslsmith_mult_vec4_i32(-vec4<i32>(var_1.x, u_input.c.x, var_1.x, -28636i), ~vec4<i32>(u_input.c.x, -71806i, -28958i, u_input.c.x)))) ^ (select(2147483647i, -32376i, true) & var_1.x);
                    global0 = !vec2<bool>(true, all(vec4<bool>(true, global0.x, global0.x, !global0.x)));
                    var var_3 = arg_0.a.x;
                    var_3 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(arg_0.a.x * _wgslsmith_f_op_f32(-arg_0.a.x)) - _wgslsmith_f_op_f32(var_0.d.x + _wgslsmith_f_op_f32(func_5(~var_0.c, var_0.b))));
                }
            }
        }
    }
    loop {
        if (LOOP_COUNTERS[19u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
        if (true) {
        }
    }
    var var_1 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1000f)), _wgslsmith_f_op_f32(f32(-1f) * -427f), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(trunc(767f))))) * _wgslsmith_f_op_vec3_f32(min(var_0.d.zyz, _wgslsmith_div_vec3_f32(vec3<f32>(var_0.b.a, -1000f, -899f), vec3<f32>(-993f, var_0.d.x, -924f))))));
    if (any(select(!(!select(vec3<bool>(false, global0.x, global0.x), vec3<bool>(global0.x, true, false), global0.x)), !vec3<bool>(false, !global0.x, false), false))) {
        var_1 = _wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -813f)) - var_1.x), _wgslsmith_f_op_f32(-var_1.x), var_0.b.a) * vec3<f32>(var_1.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-833f)) * var_0.d.x), _wgslsmith_f_op_f32(-589f)));
    }
    return _wgslsmith_f_op_f32(var_1.x + _wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-var_1.x), arg_2) - _wgslsmith_f_op_f32(727f * 1000f)));
}

fn func_2(arg_0: Struct_1, arg_1: f32, arg_2: u32) -> vec2<bool> {
    switch (_wgslsmith_mult_i32(_wgslsmith_mod_i32(countOneBits(_wgslsmith_add_i32(u_input.c.x, arg_0.a.x)), (u_input.c.x ^ arg_0.e.x) << (countOneBits(22911u) % 32u)), 12204i) >> (_wgslsmith_dot_vec3_u32(reverseBits(~(u_input.b >> (u_input.a.wyz % vec3<u32>(32u)))), vec3<u32>(~u_input.b.x, _wgslsmith_add_u32(arg_2, 4294967295u), 1u)) % 32u)) {
        case 11761i: {
            var var_0 = _wgslsmith_div_i32(u_input.c.x ^ i32(-2147483648), i32(-1i) * -14247i);
            loop {
                if (LOOP_COUNTERS[20u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
            }
            for (var var_1 = 1i; _wgslsmith_f_op_f32(func_10(Struct_3(_wgslsmith_f_op_vec2_f32(max(vec2<f32>(-176f, arg_1), _wgslsmith_f_op_vec2_f32(vec2<f32>(arg_0.d, 1167f) * vec2<f32>(arg_0.d, 151f)))), func_9(func_3(vec2<i32>(u_input.c.x, 2147483647i)), _wgslsmith_f_op_vec3_f32(max(vec3<f32>(154f, 784f, arg_0.d), vec3<f32>(arg_1, 350f, 295f))), arg_0), u_input.b.xy, _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(1000f, -476f, 463f, arg_0.d)))), ~arg_2 ^ 1u, _wgslsmith_f_op_f32(sign(1261f)))) <= _wgslsmith_f_op_f32(func_5(_wgslsmith_sub_vec2_u32(max(vec2<u32>(u_input.a.x, 1u), min(u_input.a.xx, u_input.b.yx)), countOneBits(vec2<u32>(u_input.b.x, arg_2)) ^ (u_input.a.yz ^ u_input.a.yx)), func_9(func_9(func_3(vec2<i32>(-18963i, 27712i)), _wgslsmith_f_op_vec3_f32(max(vec3<f32>(arg_0.d, 669f, arg_0.d), vec3<f32>(arg_0.d, -1047f, arg_0.d))), func_7(Struct_1(vec3<i32>(arg_0.e.x, u_input.c.x, arg_0.e.x), false, arg_0.c, arg_0.d, vec2<i32>(-1i, -3776i)), vec3<f32>(arg_1, 1234f, -1690f), Struct_1(vec3<i32>(u_input.c.x, arg_0.a.x, -1i), true, false, -118f, vec2<i32>(arg_0.e.x, 2147483647i)))), _wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-2209f, -1000f, 969f)))), Struct_1(_wgslsmith_sub_vec3_i32(arg_0.a, vec3<i32>(1i, -19883i, u_input.c.x)), true, arg_0.b, arg_0.d, _wgslsmith_sub_vec2_i32(vec2<i32>(arg_0.a.x, u_input.c.x), vec2<i32>(0i, -1i)))))); var_1 += 1i) {
                if (LOOP_COUNTERS[21u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
            }
            let var_1 = arg_0;
            global0 = select(!vec2<bool>(all(!vec4<bool>(arg_0.b, var_1.b, true, true)), func_6().x), select(vec2<bool>(all(vec4<bool>(var_1.b, arg_0.c, false, arg_0.b)), true), select(select(!vec2<bool>(var_1.c, true), vec2<bool>(global0.x, global0.x), false), vec2<bool>(global0.x | var_1.b, true), select(vec2<bool>(true, true), vec2<bool>(true, var_1.b), vec2<bool>(var_1.b, true))), func_6()), false);
        }
        default: {
            global0 = vec2<bool>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(arg_1 * -1577f)) <= arg_0.d, all(!vec2<bool>(true, u_input.b.x <= arg_2)));
            let var_0 = true;
            var var_1 = Struct_1(vec3<i32>(reverseBits(1i), _wgslsmith_mult_i32(26401i, arg_0.a.x), -max(firstLeadingBit(u_input.c.x), -arg_0.e.x)), true, !(!(true && global0.x) | func_8(all(vec3<bool>(false, true, true)), func_7(Struct_1(vec3<i32>(0i, -43085i, u_input.c.x), arg_0.b, true, -1000f, arg_0.e), vec3<f32>(arg_0.d, arg_0.d, arg_1), Struct_1(arg_0.a, arg_0.c, var_0, arg_1, arg_0.e)))), 1342f, u_input.c);
        }
    }
    for (var var_0 = -1660i; var_0 > -47100i; ) {
        if (LOOP_COUNTERS[22u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
        var var_1 = _wgslsmith_f_op_vec2_f32(floor(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(sign(vec2<f32>(129f, arg_0.d)))) - _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(min(vec2<f32>(464f, 303f), vec2<f32>(arg_1, arg_1))), vec2<f32>(2022f, -1000f), select(vec2<bool>(false, global0.x), vec2<bool>(arg_0.b, arg_0.b), vec2<bool>(arg_0.c, global0.x))))))));
        let var_2 = Struct_2(arg_1);
        let var_3 = select(vec4<bool>(true, true, true, true), select(!vec4<bool>(global0.x | false, true, arg_0.c, true), !(!(!vec4<bool>(global0.x, false, arg_0.c, global0.x))), select(!select(vec4<bool>(arg_0.b, global0.x, false, global0.x), vec4<bool>(arg_0.c, false, false, false), global0.x), select(!vec4<bool>(global0.x, arg_0.b, global0.x, arg_0.b), select(vec4<bool>(false, arg_0.c, global0.x, global0.x), vec4<bool>(true, true, arg_0.c, global0.x), vec4<bool>(arg_0.b, arg_0.b, global0.x, arg_0.c)), !global0.x), vec4<bool>(arg_0.b, arg_0.b, !arg_0.b, !global0.x))), select(!(!vec4<bool>(global0.x, global0.x, arg_0.c, true)), select(vec4<bool>(func_7(arg_0, vec3<f32>(215f, 317f, arg_1), arg_0).c, true, true, arg_0.b), !(!vec4<bool>(false, true, arg_0.b, arg_0.b)), !vec4<bool>(arg_0.b, global0.x, arg_0.c, true)), !global0.x));
        if (false) {
            break;
        }
        var var_4 = Struct_2(var_1.x);
    }
    let var_0 = -542f;
    let var_1 = Struct_1(arg_0.a, select(any(!vec4<bool>(global0.x, arg_0.b, global0.x, global0.x)), true, !arg_0.c || all(vec4<bool>(true, false, arg_0.c, arg_0.c))) & false, false, _wgslsmith_f_op_f32(-arg_1), _wgslsmith_mod_vec2_i32(u_input.c, select(~_wgslsmith_sub_vec2_i32(u_input.c, vec2<i32>(36836i, arg_0.a.x)), firstLeadingBit(vec2<i32>(arg_0.a.x, u_input.c.x)) | _wgslsmith_clamp_vec2_i32(arg_0.e, vec2<i32>(-13639i, arg_0.e.x), arg_0.e), select(vec2<bool>(true, true), select(vec2<bool>(true, true), vec2<bool>(true, true), vec2<bool>(global0.x, false)), vec2<bool>(global0.x, true)))));
    for (var var_2 = -1i; false; var_2 -= 1i) {
        if (LOOP_COUNTERS[23u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
        loop {
            if (LOOP_COUNTERS[24u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
            global0 = select(select(!vec2<bool>(!var_1.c, true), !vec2<bool>(var_0 == -384f, !global0.x), false), vec2<bool>(0i >= (i32(-1i) * -arg_0.e.x), !var_1.c), vec2<bool>(arg_0.c, global0.x));
        }
        loop {
            if (LOOP_COUNTERS[25u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[25u] = LOOP_COUNTERS[25u] + 1u;
            continue;
        }
    }
    return vec2<bool>(false, all(!vec2<bool>(arg_0.b & arg_0.c, true)));
}

fn func_1() -> Struct_4 {
    loop {
        if (LOOP_COUNTERS[26u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[26u] = LOOP_COUNTERS[26u] + 1u;
    }
    global0 = !vec2<bool>(!(global0.x | (u_input.c.x != u_input.c.x)), global0.x);
    loop {
        if (LOOP_COUNTERS[27u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[27u] = LOOP_COUNTERS[27u] + 1u;
    }
    if (any(vec2<bool>(global0.x, false))) {
        let var_0 = _wgslsmith_div_u32(~4294967295u, _wgslsmith_mod_u32(~0u << ((41635u ^ _wgslsmith_dot_vec3_u32(vec3<u32>(71668u, 4120u, u_input.b.x), vec3<u32>(u_input.b.x, 42059u, u_input.b.x))) % 32u), u_input.b.x));
        global0 = func_2(Struct_1(_wgslsmith_sub_vec3_i32(min(vec3<i32>(-19336i, -6672i, 1i), -vec3<i32>(i32(-2147483648), u_input.c.x, u_input.c.x)), _wgslsmith_add_vec3_i32(vec3<i32>(0i, u_input.c.x, -62372i), ~vec3<i32>(2147483647i, 53i, 0i))), false, global0.x, _wgslsmith_f_op_f32(-876f - _wgslsmith_f_op_f32(-_wgslsmith_div_f32(-1251f, 762f))), -vec2<i32>(countOneBits(1i), abs(u_input.c.x))), _wgslsmith_f_op_f32(min(547f, -733f)), var_0);
        for (var var_1: i32; ; var_1 = u_input.c.x) {
            if (LOOP_COUNTERS[28u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[28u] = LOOP_COUNTERS[28u] + 1u;
            let var_2 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-func_3(u_input.c).a) - _wgslsmith_f_op_f32(-514f)) * 1134f));
            var var_3 = var_2;
            let var_4 = !(!select(vec4<bool>(true, true, true, true), vec4<bool>(func_7(Struct_1(vec3<i32>(u_input.c.x, u_input.c.x, -11439i), true, global0.x, var_2, u_input.c), vec3<f32>(-447f, var_2, var_2), Struct_1(vec3<i32>(u_input.c.x, 2147483647i, u_input.c.x), global0.x, true, 1617f, u_input.c)).c, func_2(Struct_1(vec3<i32>(u_input.c.x, u_input.c.x, u_input.c.x), true, false, 159f, vec2<i32>(-1i, u_input.c.x)), var_2, 3969u).x, global0.x, !global0.x), func_7(func_7(Struct_1(vec3<i32>(u_input.c.x, 0i, u_input.c.x), false, global0.x, -931f, vec2<i32>(2147483647i, 16866i)), vec3<f32>(-339f, var_2, var_2), Struct_1(vec3<i32>(18045i, u_input.c.x, 0i), global0.x, false, var_2, u_input.c)), vec3<f32>(753f, var_2, var_2), func_7(Struct_1(vec3<i32>(2147483647i, u_input.c.x, u_input.c.x), true, global0.x, var_2, vec2<i32>(u_input.c.x, -32340i)), vec3<f32>(var_2, -827f, var_2), Struct_1(vec3<i32>(u_input.c.x, 0i, -8805i), true, global0.x, var_2, vec2<i32>(-14590i, u_input.c.x)))).b));
            let var_5 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_div_f32(var_2, _wgslsmith_div_f32(-808f, var_2)))) + _wgslsmith_f_op_f32(-602f - _wgslsmith_f_op_f32(max(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(394f - -204f))), var_2))));
        }
    }
    if (global0.x) {
        let var_0 = _wgslsmith_f_op_f32(min(_wgslsmith_f_op_f32(step(-1309f, 1f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(467f - 148f) + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(func_4()))) * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -856f))))));
        var var_1 = 7620i;
    }
    return Struct_4(!(!(!vec3<bool>(false, global0.x, global0.x))));
}

fn func_11(arg_0: Struct_3, arg_1: Struct_1, arg_2: Struct_4, arg_3: Struct_4) -> vec2<bool> {
    var var_0 = ~abs(u_input.a.x) << (~52389u % 32u);
    let var_1 = Struct_2(-183f);
    var_0 = min(countOneBits(u_input.a.x), arg_0.c.x >> (~_wgslsmith_mod_u32(~79417u, arg_0.c.x) % 32u));
    switch (func_7(arg_1, _wgslsmith_f_op_vec3_f32(-arg_0.d.zxy), func_7(Struct_1(vec3<i32>(abs(u_input.c.x), ~arg_1.e.x, u_input.c.x), false, all(!vec3<bool>(arg_2.a.x, true, true)), 2547f, _wgslsmith_add_vec2_i32(vec2<i32>(-31051i, u_input.c.x) ^ vec2<i32>(2147483647i, 14404i), u_input.c)), _wgslsmith_f_op_vec3_f32(-arg_0.d.xwz), arg_1)).a.x) {
        case 1i: {
        }
        default: {
            switch (2147483647i) {
                case 2147483647i: {
                    global0 = arg_2.a.xz;
                    global0 = !select(vec2<bool>(false, select(4294967295u, 1u, global0.x) > 11771u), !func_6(), func_6());
                    let var_2 = false;
                }
                default: {
                    let var_2 = func_9(var_1, arg_0.d.www, func_7(Struct_1(arg_1.a ^ arg_1.a, any(!vec4<bool>(global0.x, true, arg_2.a.x, true)), false | arg_2.a.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(arg_0.b.a, arg_0.d.x, global0.x)) + _wgslsmith_f_op_f32(arg_1.d * -1000f)), _wgslsmith_div_vec2_i32(vec2<i32>(23571i, -43965i), arg_1.e)), arg_0.d.zzx, func_7(func_7(Struct_1(vec3<i32>(-17229i, u_input.c.x, u_input.c.x), false, false, -1570f, arg_1.a.xz), vec3<f32>(arg_0.a.x, 1000f, 558f), arg_1), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(arg_1.d, var_1.a, 832f) - arg_0.d.wzy) - _wgslsmith_f_op_vec3_f32(ceil(vec3<f32>(1063f, var_1.a, arg_0.d.x)))), func_7(arg_1, _wgslsmith_f_op_vec3_f32(trunc(arg_0.d.wzy)), func_7(arg_1, vec3<f32>(-1399f, -1000f, arg_0.d.x), Struct_1(arg_1.a, true, arg_3.a.x, 705f, vec2<i32>(1i, 0i)))))));
                    var_0 = u_input.a.x;
                    var var_3 = ~vec3<u32>(~(~1u), _wgslsmith_clamp_u32(reverseBits(~72494u), 653u, _wgslsmith_div_u32(u_input.b.x, arg_0.c.x)), 4294967295u);
                    let var_4 = ~u_input.b;
                    var_3 = _wgslsmith_clamp_vec3_u32(firstTrailingBit(vec3<u32>(var_4.x, abs(var_4.x), arg_0.c.x)), vec3<u32>(var_4.x, arg_0.c.x, countOneBits(7811u)), vec3<u32>(_wgslsmith_dot_vec3_u32(vec3<u32>(var_3.x & arg_0.c.x, 1u, _wgslsmith_add_u32(1u, u_input.b.x)), (vec3<u32>(0u, 29395u, 82971u) & vec3<u32>(var_3.x, arg_0.c.x, 4294967295u)) | vec3<u32>(u_input.a.x, 4294967295u, var_3.x)), var_3.x, 0u));
                }
            }
            var var_2 = select(!arg_2.a.yy, !arg_2.a.yz, vec2<bool>(global0.x, all(select(vec4<bool>(false, arg_1.c, false, false), select(vec4<bool>(arg_2.a.x, false, global0.x, global0.x), vec4<bool>(true, arg_1.b, false, true), vec4<bool>(false, false, true, global0.x)), !vec4<bool>(global0.x, false, global0.x, false)))));
        }
    }
    let var_2 = func_1();
    return arg_3.a.xx;
}

@compute
@workgroup_size(1)
fn main() {
    global0 = !select(vec2<bool>(all(vec2<bool>(true, global0.x)), any(vec2<bool>(global0.x, false)) == global0.x), select(func_11(Struct_3(vec2<f32>(1000f, 112f), Struct_2(104f), u_input.b.zy, vec4<f32>(-2103f, -555f, 2086f, 1000f)), Struct_1(vec3<i32>(2147483647i, u_input.c.x, u_input.c.x), global0.x, global0.x, -1124f, u_input.c), Struct_4(vec3<bool>(false, false, global0.x)), func_1()), func_2(Struct_1(vec3<i32>(u_input.c.x, 2147483647i, u_input.c.x), false, global0.x, -425f, vec2<i32>(-1i, u_input.c.x)), 1044f, ~u_input.a.x), true), func_6());
    global0 = vec2<bool>(false, !global0.x);
    loop {
        if (LOOP_COUNTERS[29u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[29u] = LOOP_COUNTERS[29u] + 1u;
        global0 = vec2<bool>(global0.x, !(u_input.b.x >= ~(~u_input.b.x)));
    }
    let var_0 = vec3<i32>(~u_input.c.x | 39575i, 1i, u_input.c.x);
    if (true) {
        var var_1 = Struct_3(_wgslsmith_f_op_vec2_f32(select(vec2<f32>(-1000f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-1286f))), _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(sign(_wgslsmith_f_op_vec2_f32(-vec2<f32>(-1441f, -258f))))), func_2(Struct_1(vec3<i32>(var_0.x, 1i, -28074i), !global0.x, func_7(Struct_1(vec3<i32>(var_0.x, u_input.c.x, 53149i), global0.x, true, -747f, var_0.zx), vec3<f32>(419f, -634f, 448f), Struct_1(vec3<i32>(-25083i, -2057i, 7345i), false, global0.x, -601f, vec2<i32>(18238i, 14744i))).c, _wgslsmith_f_op_f32(trunc(-1021f)), _wgslsmith_sub_vec2_i32(u_input.c, var_0.yz)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(-758f)) + _wgslsmith_f_op_f32(f32(-1f) * -1000f)), u_input.b.x).x)), func_9(Struct_2(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(select(1073f, 771f, false)) * -1284f)), _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(ceil(vec3<f32>(1000f, -188f, 974f))), _wgslsmith_f_op_vec3_f32(select(vec3<f32>(-969f, 129f, -1679f), vec3<f32>(514f, -1560f, -652f), global0.x))))), func_7(func_7(func_7(Struct_1(var_0, global0.x, true, 135f, u_input.c), vec3<f32>(1000f, 1568f, 1324f), Struct_1(var_0, global0.x, true, 1817f, u_input.c)), _wgslsmith_div_vec3_f32(vec3<f32>(2572f, -1496f, -398f), vec3<f32>(-115f, -1629f, -1572f)), func_7(Struct_1(vec3<i32>(u_input.c.x, 17502i, u_input.c.x), global0.x, false, 1180f, vec2<i32>(-23693i, var_0.x)), vec3<f32>(1000f, -897f, 214f), Struct_1(var_0, false, true, 612f, var_0.xz))), _wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(vec3<f32>(123f, -370f, 1000f) - vec3<f32>(236f, 859f, 1257f)) + _wgslsmith_f_op_vec3_f32(sign(vec3<f32>(-598f, 353f, 2232f)))), Struct_1(vec3<i32>(-1i, -9083i, var_0.x), global0.x, u_input.b.x < u_input.a.x, _wgslsmith_f_op_f32(f32(-1f) * -249f), _wgslsmith_add_vec2_i32(var_0.zx, var_0.yz)))), _wgslsmith_sub_vec2_u32(vec2<u32>(u_input.a.x, u_input.a.x), vec2<u32>(_wgslsmith_add_u32(u_input.a.x, 1u), 35331u)), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(vec4<f32>(-710f, -1191f, 858f, 581f) - _wgslsmith_div_vec4_f32(vec4<f32>(-1566f, -264f, 140f, -243f), vec4<f32>(1144f, -1442f, -1000f, 961f))))));
        let var_2 = Struct_4(!vec3<bool>(false, (var_0.x <= u_input.c.x) && all(vec4<bool>(global0.x, false, global0.x, global0.x)), global0.x));
        loop {
            if (LOOP_COUNTERS[30u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[30u] = LOOP_COUNTERS[30u] + 1u;
            var var_3 = var_1.c.x;
            let var_4 = var_2.a;
            continue;
        }
    }
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_f_op_f32(210f - _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(sign(630f))))), ~(45966u | u_input.a.x), -u_input.c.x, -(-vec2<i32>(11441i, u_input.c.x) << (~vec2<u32>(u_input.a.x, 92395u) % vec2<u32>(32u))) ^ vec2<i32>(2147483647i, 6399i), _wgslsmith_div_f32(204f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(f32(-1f) * -283f))) + _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(floor(-476f)), _wgslsmith_f_op_f32(-304f + 381f))))));
}

`;