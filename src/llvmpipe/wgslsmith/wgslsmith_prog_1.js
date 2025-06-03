export const input = [182,184,180,177,225,7,153,205,188,80,117,226,105,159,103,87,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [182,184,180,177,225,7,153,205,188,80,117,226,105,159,103,87,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[182,184,180,177,225,7,153,205,188,80,117,226,105,159,103,87]}
// Seed: 583340079247156138

struct Struct_1 {
    a: vec2<i32>,
}

struct Struct_2 {
    a: i32,
    b: vec2<u32>,
    c: f32,
    d: f32,
    e: vec2<u32>,
}

struct Struct_3 {
    a: vec4<i32>,
    b: Struct_2,
    c: vec2<bool>,
    d: bool,
    e: vec3<i32>,
}

struct Struct_4 {
    a: bool,
    b: vec2<bool>,
    c: Struct_1,
    d: u32,
    e: u32,
}

struct UniformBuffer {
    a: vec3<i32>,
}

struct StorageBuffer {
    a: vec2<f32>,
    b: vec4<u32>,
    c: vec4<i32>,
    d: vec2<i32>,
    e: i32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> LOOP_COUNTERS: array<u32, 25>;

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_mult_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a * b, a, ((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_sub_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_add_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a + b, a, (((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || (((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_mult_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a * b, a, ((((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i])))) || ((b[3i] != 0u) && (a[3i] > (4294967295u / b[3i]))));
}

fn _wgslsmith_add_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a + b, a, (((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((b[3i] > 0i) && (a[3i] > (2147483647i - b[3i])))) || (((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))) || ((b[3i] < 0i) && (a[3i] < (i32(-2147483648) - b[3i])))));
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn func_6(arg_0: vec3<i32>, arg_1: bool, arg_2: f32) -> vec4<i32> {
    if (!(!arg_1)) {
        var var_0 = vec2<i32>(-42336i, abs(51353i));
        var var_1 = Struct_4(arg_1, select(!select(vec2<bool>(arg_1, false), vec2<bool>(false, false), !vec2<bool>(arg_1, arg_1)), select(select(vec2<bool>(true, true), select(vec2<bool>(arg_1, false), vec2<bool>(true, arg_1), false), arg_1), !select(vec2<bool>(false, arg_1), vec2<bool>(arg_1, true), vec2<bool>(arg_1, true)), arg_1), any(select(!vec2<bool>(arg_1, false), !vec2<bool>(arg_1, true), vec2<bool>(false, arg_1)))), Struct_1(-vec2<i32>(select(u_input.a.x, 17814i, true), -var_0.x)), ~33138u, 4294967295u);
        for (var var_2 = 2147483647i; _wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(arg_2))) * arg_2))) <= _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-1f))); var_2 -= 1i) {
            if (LOOP_COUNTERS[0u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
            var var_3 = _wgslsmith_f_op_f32(-arg_2);
            var var_4 = arg_2;
            var_0 = _wgslsmith_div_vec2_i32(_wgslsmith_clamp_vec2_i32(_wgslsmith_mult_vec2_i32(vec2<i32>(u_input.a.x, var_0.x), arg_0.yz) & _wgslsmith_clamp_vec2_i32(vec2<i32>(var_1.c.a.x, u_input.a.x), u_input.a.yy, arg_0.zx), ~arg_0.zz, -vec2<i32>(-29245i, u_input.a.x)), -countOneBits(vec2<i32>(var_0.x, 1i))) ^ -vec2<i32>(-5147i, var_1.c.a.x);
        }
        let var_2 = u_input.a.zx;
        loop {
            if (LOOP_COUNTERS[1u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        }
    }
    loop {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        let var_0 = Struct_4(all(!select(vec2<bool>(arg_1, false), vec2<bool>(false, true), !arg_1)), select(select(!(!vec2<bool>(true, arg_1)), vec2<bool>(true, true), vec2<bool>(true, true)), vec2<bool>(select(all(vec4<bool>(arg_1, arg_1, false, arg_1)), arg_1, !arg_1), any(vec3<bool>(arg_1, true, arg_1))), !vec2<bool>(any(vec3<bool>(true, false, arg_1)), false)), Struct_1(vec2<i32>(u_input.a.x, -_wgslsmith_clamp_i32(8696i, -1i, u_input.a.x))), ~(0u & select(4294967295u, 1u, arg_1)) ^ 48831u, _wgslsmith_dot_vec4_u32(~(~vec4<u32>(1u, 1u, 1u, 1u)), select(_wgslsmith_clamp_vec4_u32(~vec4<u32>(30148u, 70748u, 8743u, 31548u), vec4<u32>(1u, 1u, 1u, 1u), ~vec4<u32>(1u, 4294967295u, 5065u, 17452u)), vec4<u32>(1u, 1u, 1u, 1u), true)));
        switch (-firstLeadingBit(abs(firstTrailingBit(arg_0.x ^ -1376i)))) {
            case 2147483647i: {
                let var_1 = arg_2;
            }
            case -16059i: {
                let var_1 = _wgslsmith_div_f32(-1584f, arg_2);
            }
            default: {
                break;
            }
        }
        let var_1 = !select(var_0.b, vec2<bool>(all(!vec2<bool>(true, arg_1)), false), !((arg_2 >= -1277f) || true));
        var var_2 = Struct_2(max(arg_0.x, -(i32(-1i) * -13722i)), vec2<u32>(_wgslsmith_mult_u32(var_0.e, 1u) << (_wgslsmith_mult_u32(4294967295u, min(16141u, 0u)) % 32u), ~(~var_0.d)), arg_2, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(floor(arg_2))), abs(~reverseBits(vec2<u32>(var_0.d, var_0.e) >> (vec2<u32>(1864u, 0u) % vec2<u32>(32u)))));
        var var_3 = Struct_1(firstLeadingBit(~u_input.a.xy));
    }
    for (; !all(select(vec2<bool>(false, true), vec2<bool>(false, arg_1), all(vec2<bool>(false, false)))); ) {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        continue;
    }
    loop {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
        var var_0 = Struct_2(-4855i, vec2<u32>(~(~(~0u)), 7475u), -303f, arg_2, countOneBits(abs(firstLeadingBit(~vec2<u32>(0u, 29414u)))));
        let var_1 = Struct_4(true, !select(select(!vec2<bool>(arg_1, false), !vec2<bool>(false, arg_1), vec2<bool>(arg_1, true)), !vec2<bool>(arg_1, true), select(true, true, all(vec2<bool>(arg_1, false)))), Struct_1(vec2<i32>(-1i) * -(~vec2<i32>(16083i, arg_0.x))), _wgslsmith_dot_vec3_u32(vec3<u32>(~(~7911u), select(var_0.b.x << (961u % 32u), var_0.e.x, !arg_1), 4294967295u), _wgslsmith_mult_vec3_u32(vec3<u32>(var_0.e.x, var_0.b.x, 56973u), ~max(vec3<u32>(var_0.e.x, 39145u, var_0.b.x), vec3<u32>(1u, var_0.b.x, 1u)))), var_0.b.x);
        if (!((-(var_1.c.a.x << (0u % 32u)) << ((~4294967295u | _wgslsmith_dot_vec3_u32(vec3<u32>(var_1.d, var_0.b.x, 0u), vec3<u32>(var_0.e.x, 17100u, var_1.e))) % 32u)) != u_input.a.x)) {
            var var_2 = var_0.a < var_0.a;
            continue;
        }
        loop {
            if (LOOP_COUNTERS[5u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
            var var_2 = Struct_2(i32(-2147483648), _wgslsmith_clamp_vec2_u32(~var_0.b, vec2<u32>(var_1.e, 23042u), _wgslsmith_mult_vec2_u32(firstTrailingBit(var_0.b), var_0.e) >> (vec2<u32>(var_0.b.x, firstTrailingBit(0u)) % vec2<u32>(32u))), arg_2, -292f, _wgslsmith_sub_vec2_u32((_wgslsmith_mod_vec2_u32(var_0.b, vec2<u32>(var_1.d, var_1.e)) << (var_0.e % vec2<u32>(32u))) >> (var_0.e % vec2<u32>(32u)), var_0.b));
            var var_3 = ~max(i32(-1i) * -11129i, abs(max(u_input.a.x, var_2.a)) >> (var_1.d % 32u));
            var_0 = Struct_2(_wgslsmith_mult_i32(var_1.c.a.x, var_0.a), vec2<u32>(~3580u << (~var_2.b.x % 32u), ~(~select(16731u, 22490u, var_1.a))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_2.d)), -261f)) * 1366f), arg_2, var_0.e);
            break;
        }
    }
    for (var var_0 = 2147483647i; false; var_0 += 1i) {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        switch (arg_0.x) {
            case i32(-2147483648): {
                let var_1 = vec2<bool>(!arg_1, !arg_1);
                continue;
            }
            case 18598i: {
            }
            case 2147483647i: {
                let var_1 = _wgslsmith_add_i32(u_input.a.x, ~u_input.a.x);
                var var_2 = vec3<i32>(arg_0.x, arg_0.x, 2674i);
            }
            case -1i: {
            }
            default: {
                let var_1 = true;
                var var_2 = Struct_4(var_1, !vec2<bool>(any(select(vec2<bool>(var_1, arg_1), vec2<bool>(arg_1, var_1), vec2<bool>(true, true))), all(select(vec4<bool>(false, true, var_1, var_1), vec4<bool>(arg_1, true, arg_1, false), vec4<bool>(var_1, arg_1, arg_1, false)))), Struct_1(-vec2<i32>(-40626i, u_input.a.x)), select(~_wgslsmith_mult_u32(_wgslsmith_div_u32(4294967295u, 1u), 0u), 22403u, var_1), ~reverseBits(abs(1u)));
                break;
            }
        }
        var_0 = (_wgslsmith_sub_i32(_wgslsmith_mod_i32(arg_0.x | arg_0.x, reverseBits(-52272i)), u_input.a.x) & _wgslsmith_dot_vec3_i32(u_input.a, vec3<i32>(_wgslsmith_sub_i32(u_input.a.x, 12438i), _wgslsmith_dot_vec4_i32(vec4<i32>(2147483647i, i32(-2147483648), arg_0.x, -24832i), vec4<i32>(-4579i, -10808i, 1i, arg_0.x)), arg_0.x))) & firstTrailingBit(14642i);
    }
    return firstTrailingBit(-select(_wgslsmith_mod_vec4_i32(select(vec4<i32>(-1i, u_input.a.x, -1i, u_input.a.x), vec4<i32>(-1i, u_input.a.x, 9860i, i32(-2147483648)), true), _wgslsmith_sub_vec4_i32(vec4<i32>(u_input.a.x, arg_0.x, 2147483647i, 2147483647i), vec4<i32>(arg_0.x, u_input.a.x, 0i, 0i))), abs(_wgslsmith_mod_vec4_i32(vec4<i32>(-16535i, 5638i, 1i, arg_0.x), vec4<i32>(u_input.a.x, u_input.a.x, arg_0.x, u_input.a.x))), vec4<bool>(arg_1, arg_0.x <= -51467i, arg_1, arg_1 || true)));
}

fn func_5(arg_0: Struct_3) -> u32 {
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        loop {
            if (LOOP_COUNTERS[8u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
            break;
        }
        let var_0 = firstTrailingBit(~(~vec4<i32>(-45237i, arg_0.a.x, 18551i, -60800i))) | ~min(func_6(arg_0.a.xyx, all(vec3<bool>(arg_0.d, true, false)), _wgslsmith_f_op_f32(-1742f + -217f)), func_6(reverseBits(arg_0.e), all(vec4<bool>(false, true, arg_0.c.x, arg_0.c.x)), arg_0.b.d));
    }
    switch (u_input.a.x) {
        default: {
            if (all(arg_0.c)) {
                var var_0 = false;
                var var_1 = ~9578u;
            }
        }
    }
    let var_0 = !(!any(vec3<bool>(true, true, true))) || true;
    let var_1 = vec3<i32>(max(-33140i, min(abs(34814i), -u_input.a.x) << (3346u % 32u)), u_input.a.x, u_input.a.x ^ u_input.a.x);
    loop {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        switch (firstTrailingBit(countOneBits(-(firstTrailingBit(arg_0.b.a) >> (3470u % 32u))))) {
            default: {
                var var_2 = Struct_2(min(firstLeadingBit(~u_input.a.x & arg_0.a.x), min(var_1.x, _wgslsmith_dot_vec3_i32(vec3<i32>(var_1.x, -8859i, u_input.a.x), var_1))), vec2<u32>(29079u, select(max(arg_0.b.e.x, arg_0.b.e.x), _wgslsmith_mult_u32(countOneBits(arg_0.b.b.x), 1u), any(select(vec2<bool>(true, arg_0.d), arg_0.c, arg_0.c)))), -1346f, _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(select(arg_0.b.c, -1649f, true))))))), ~reverseBits(firstLeadingBit(arg_0.b.e)) << (countOneBits(~(~vec2<u32>(11627u, 0u))) % vec2<u32>(32u)));
                let var_3 = arg_0;
            }
        }
        continue;
    }
    return max(arg_0.b.e.x, ~(~4294967295u));
}

fn func_7(arg_0: u32, arg_1: u32, arg_2: vec3<u32>) -> Struct_3 {
    let var_0 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-vec3<f32>(872f, -943f, -616f)), _wgslsmith_f_op_vec3_f32(min(vec3<f32>(-1000f, -1285f, -1214f), vec3<f32>(735f, -838f, -240f)))) + vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -1049f), _wgslsmith_f_op_f32(-223f - 144f), 334f)) - vec3<f32>(-297f, _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(f32(-1f) * -737f))), -655f)));
    var var_1 = _wgslsmith_dot_vec4_i32(vec4<i32>(-8983i, -69701i, ~53607i, _wgslsmith_add_i32(_wgslsmith_div_i32(2147483647i, func_6(vec3<i32>(u_input.a.x, u_input.a.x, 28873i), true, 335f).x), u_input.a.x)), vec4<i32>(func_6(~select(vec3<i32>(u_input.a.x, -23022i, u_input.a.x), vec3<i32>(u_input.a.x, u_input.a.x, u_input.a.x), vec3<bool>(true, true, false)), true, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_0.x))).x, countOneBits(~_wgslsmith_mod_i32(2147483647i, 19598i)), -((2793i >> (arg_1 % 32u)) ^ -9644i), 0i));
    var var_2 = Struct_2(abs(34175i), ~arg_2.xy, var_0.x, _wgslsmith_f_op_f32(var_0.x * _wgslsmith_f_op_f32(f32(-1f) * -2412f)), arg_2.zz);
    if (all(select(vec3<bool>(all(vec2<bool>(true, true)), true, arg_2.x != ~10148u), select(select(select(vec3<bool>(false, false, true), vec3<bool>(true, false, false), vec3<bool>(true, false, true)), select(vec3<bool>(true, true, false), vec3<bool>(false, false, true), true), select(vec3<bool>(true, true, true), vec3<bool>(true, true, true), true)), !select(vec3<bool>(false, false, false), vec3<bool>(true, false, false), vec3<bool>(false, true, true)), all(vec2<bool>(true, false))), select(vec3<bool>(false, select(true, false, true), var_2.d == -1316f), select(select(vec3<bool>(true, true, false), vec3<bool>(false, false, false), vec3<bool>(true, false, false)), select(vec3<bool>(false, true, false), vec3<bool>(true, true, true), vec3<bool>(false, true, true)), vec3<bool>(false, true, true)), true)))) {
        for (var var_3 = 0i; var_3 >= i32(-2147483648); var_3 = abs(-_wgslsmith_add_i32(abs(_wgslsmith_mult_i32(10329i, var_2.a)), -18340i))) {
            if (LOOP_COUNTERS[10u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
            let var_4 = vec4<i32>(_wgslsmith_div_i32(_wgslsmith_sub_i32(var_2.a, var_2.a) & countOneBits(var_2.a), var_2.a) & (1i << (arg_0 % 32u)), abs(~abs(var_2.a)) | 0i, -u_input.a.x, 2147483647i);
            var_3 = _wgslsmith_dot_vec3_i32(vec3<i32>(_wgslsmith_clamp_i32(~countOneBits(0i), i32(-2147483648), _wgslsmith_dot_vec3_i32(u_input.a, _wgslsmith_clamp_vec3_i32(vec3<i32>(var_2.a, -25566i, u_input.a.x), var_4.yzz, var_4.wyy))), -var_4.x, (_wgslsmith_sub_i32(u_input.a.x, 2147483647i) ^ -11057i) << (1u % 32u)), ~u_input.a);
        }
        loop {
            if (LOOP_COUNTERS[11u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
            break;
        }
    }
    loop {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        break;
    }
    return Struct_3(vec4<i32>(-1i) * -func_6(-vec3<i32>(u_input.a.x, u_input.a.x, 44800i), any(vec4<bool>(false, false, false, false)), var_0.x), Struct_2(1i, arg_2.xy, _wgslsmith_div_f32(-493f, var_2.c), var_2.d, ~vec2<u32>(_wgslsmith_mult_u32(arg_1, 1u), arg_1)), select(vec2<bool>(true, any(vec4<bool>(true, true, true, true))), vec2<bool>(any(vec4<bool>(true, true, false, true)), false), select(vec2<bool>(any(vec2<bool>(false, false)), false), vec2<bool>(true, true), true || (arg_0 <= 8457u))), any(vec4<bool>(true, true, any(select(vec3<bool>(false, false, false), vec3<bool>(true, false, true), true)), all(vec4<bool>(true, true, true, false)))), u_input.a);
}

fn func_4(arg_0: f32) -> Struct_1 {
    let var_0 = !(!select(vec3<bool>(true, true, true), vec3<bool>(true, true, true), vec3<bool>(true, true, true)));
    var var_1 = func_7(_wgslsmith_dot_vec4_u32(_wgslsmith_clamp_vec4_u32(abs(~vec4<u32>(18676u, 4294967295u, 1u, 35005u)), vec4<u32>(~53528u, firstLeadingBit(79098u), func_5(Struct_3(vec4<i32>(u_input.a.x, u_input.a.x, u_input.a.x, -12593i), Struct_2(2147483647i, vec2<u32>(53212u, 1u), arg_0, -726f, vec2<u32>(4294967295u, 84091u)), vec2<bool>(var_0.x, var_0.x), false, u_input.a)), _wgslsmith_mult_u32(53083u, 2671u)), vec4<u32>(func_5(Struct_3(vec4<i32>(-8504i, u_input.a.x, u_input.a.x, 0i), Struct_2(-1i, vec2<u32>(4294967295u, 29998u), 481f, -381f, vec2<u32>(4294967295u, 1u)), vec2<bool>(var_0.x, false), true, u_input.a)), select(32366u, 4294967295u, var_0.x), ~1u, _wgslsmith_div_u32(1u, 23854u))), vec4<u32>(_wgslsmith_sub_u32(~0u, _wgslsmith_dot_vec4_u32(vec4<u32>(0u, 13123u, 33434u, 18960u), vec4<u32>(0u, 0u, 0u, 1u))), ~_wgslsmith_add_u32(10585u, 58505u), 1u, 77363u)), reverseBits(~(~(~32835u))), countOneBits(vec3<u32>(1u, ~(~58752u), ~_wgslsmith_dot_vec2_u32(vec2<u32>(1u, 4294967295u), vec2<u32>(4294967295u, 73288u)))));
    let var_2 = Struct_4(true, var_0.zz, Struct_1(select(vec2<i32>(var_1.e.x, _wgslsmith_sub_i32(-1273i, var_1.e.x)), -var_1.e.xz, var_0.x)), _wgslsmith_sub_u32(var_1.b.e.x ^ var_1.b.e.x, abs(_wgslsmith_clamp_u32(0u, firstTrailingBit(var_1.b.e.x), 4294967295u))), ~(~(var_1.b.e.x ^ var_1.b.b.x)));
    loop {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        var_1 = Struct_3(var_1.a, func_7(_wgslsmith_dot_vec4_u32(~vec4<u32>(var_2.d, var_2.e, 4294967295u, 38626u) & max(vec4<u32>(var_2.e, 20410u, var_2.d, var_2.d), vec4<u32>(4294967295u, var_1.b.e.x, 0u, var_1.b.e.x)), abs(_wgslsmith_add_vec4_u32(vec4<u32>(1u, var_1.b.e.x, 4294967295u, 0u), vec4<u32>(var_2.d, var_2.d, 0u, var_2.e)))), var_1.b.e.x & 23788u, _wgslsmith_add_vec3_u32(select(select(vec3<u32>(4294967295u, 19490u, 0u), vec3<u32>(68451u, 4294967295u, 90797u), var_0), vec3<u32>(var_2.e, var_2.d, 4943u), select(var_0, vec3<bool>(true, var_2.b.x, var_0.x), var_0)), vec3<u32>(~var_1.b.e.x, var_1.b.e.x, ~65502u))).b, select(select(!var_1.c, var_1.c, !var_0.x), vec2<bool>(true, true), true & (func_7(var_2.d, 4294967295u, vec3<u32>(var_1.b.e.x, var_1.b.e.x, 4294967295u)).b.d >= _wgslsmith_f_op_f32(max(var_1.b.c, 257f)))), true, -u_input.a << (vec3<u32>(_wgslsmith_mult_u32(var_2.d, 0u) | ~28405u, ~(0u >> (var_1.b.e.x % 32u)), _wgslsmith_clamp_u32(var_2.e, ~var_2.e, 0u)) % vec3<u32>(32u)));
        continue;
    }
    var var_3 = true;
    return var_2.c;
}

fn func_3() -> u32 {
    let var_0 = Struct_4(true, vec2<bool>(true, !(!any(vec4<bool>(false, true, true, true)))), func_4(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-200f) + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(-457f)) - _wgslsmith_f_op_f32(529f * -232f)))), 1u, 4294967295u);
    var var_1 = func_4(_wgslsmith_f_op_f32(f32(-1f) * -152f));
    if (var_0.a) {
        var_1 = Struct_1(_wgslsmith_sub_vec2_i32(vec2<i32>(1i, reverseBits(0i)) << (abs(vec2<u32>(var_0.e, var_0.d)) % vec2<u32>(32u)), _wgslsmith_add_vec2_i32(_wgslsmith_clamp_vec2_i32(~var_1.a, countOneBits(vec2<i32>(-23462i, u_input.a.x)), _wgslsmith_add_vec2_i32(vec2<i32>(i32(-2147483648), 1i), var_1.a)), func_7(~10136u, _wgslsmith_dot_vec4_u32(vec4<u32>(var_0.d, var_0.d, var_0.e, var_0.d), vec4<u32>(4294967295u, var_0.d, 30204u, 46564u)), vec3<u32>(var_0.e, 60396u, var_0.d) << (vec3<u32>(4294967295u, 25476u, 42732u) % vec3<u32>(32u))).a.yw)));
        if (true) {
            var_1 = func_4(_wgslsmith_f_op_f32(-1130f));
            let var_2 = !(!(~(-11158i) <= _wgslsmith_sub_i32(-20656i, var_1.a.x)));
            var var_3 = u_input.a;
            var_3 = u_input.a;
        }
        if (!(-50878i >= (-_wgslsmith_sub_i32(u_input.a.x, var_0.c.a.x) & ~var_1.a.x))) {
        }
    }
    let var_2 = Struct_3(vec4<i32>(_wgslsmith_dot_vec3_i32(u_input.a, -(vec3<i32>(u_input.a.x, 1i, var_1.a.x) << (vec3<u32>(43253u, var_0.d, var_0.e) % vec3<u32>(32u)))), i32(-1i) * i32(-2147483648), abs(max(func_6(u_input.a, var_0.a, -154f).x, select(-13235i, 13971i, false))), ~u_input.a.x), Struct_2(max(u_input.a.x, 0i), ~(~(~vec2<u32>(2744u, var_0.d))), _wgslsmith_f_op_f32(floor(240f)), _wgslsmith_f_op_f32(-1411f), _wgslsmith_clamp_vec2_u32(abs(vec2<u32>(var_0.d, var_0.e)), ~min(vec2<u32>(0u, var_0.d), vec2<u32>(var_0.e, var_0.d)), vec2<u32>(49431u, 13035u))), !vec2<bool>(!any(var_0.b), !var_0.b.x), var_0.b.x, u_input.a);
    var_1 = var_0.c;
    return _wgslsmith_mult_u32(~firstLeadingBit(63297u), var_2.b.e.x);
}

fn func_8(arg_0: u32, arg_1: u32, arg_2: vec2<f32>, arg_3: Struct_3) -> vec4<u32> {
    loop {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
    }
    if (true) {
    }
    if (arg_1 <= ~_wgslsmith_sub_u32(firstLeadingBit(arg_1), reverseBits(1u))) {
        switch (u_input.a.x) {
            default: {
                let var_0 = Struct_2(u_input.a.x, arg_3.b.b, _wgslsmith_f_op_f32(step(arg_3.b.d, arg_2.x)), arg_2.x, arg_3.b.b);
                let var_1 = Struct_4(reverseBits(~(u_input.a.x | -10006i)) > (_wgslsmith_mult_i32(~arg_3.e.x, 0i) << (~var_0.e.x % 32u)), vec2<bool>(!arg_3.d & (!arg_3.c.x || any(vec2<bool>(arg_3.c.x, arg_3.d))), true), func_4(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-var_0.d) + 401f))), ~(~(63201u >> (_wgslsmith_dot_vec4_u32(vec4<u32>(arg_1, 16726u, 5805u, 5380u), vec4<u32>(1u, var_0.b.x, arg_1, arg_0)) % 32u))), arg_0);
                var var_2 = var_1.c;
                var var_3 = i32(-1i) * -func_4(var_0.c).a.x;
                var var_4 = var_1.b.x;
            }
        }
        for (var var_0 = -1i; all(select(select(!select(vec3<bool>(arg_3.d, false, arg_3.c.x), vec3<bool>(arg_3.d, arg_3.c.x, arg_3.d), vec3<bool>(arg_3.d, arg_3.d, true)), !vec3<bool>(arg_3.d, true, arg_3.c.x), select(!vec3<bool>(arg_3.d, true, arg_3.c.x), vec3<bool>(arg_3.c.x, true, false), arg_3.c.x & arg_3.d)), !select(select(vec3<bool>(arg_3.c.x, arg_3.c.x, arg_3.c.x), vec3<bool>(arg_3.c.x, false, true), true), !vec3<bool>(arg_3.c.x, arg_3.d, arg_3.c.x), vec3<bool>(arg_3.d, false, true)), func_7(1u, _wgslsmith_add_u32(arg_1 << (arg_3.b.e.x % 32u), 27601u), ~(~vec3<u32>(arg_1, 1u, 31822u))).c.x)); ) {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            var var_1 = ~_wgslsmith_div_vec3_i32(u_input.a & ~arg_3.e, ~(vec3<i32>(-1i) * -vec3<i32>(1i, 0i, 1i)));
            var var_2 = func_5(arg_3);
        }
        loop {
            if (LOOP_COUNTERS[16u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
            continue;
        }
    }
    loop {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
        let var_0 = arg_3.b.c;
        continue;
    }
    var var_0 = func_7(~(~(~arg_1)) & arg_3.b.b.x, _wgslsmith_div_u32(1u, arg_0 & 0u), _wgslsmith_mod_vec3_u32(countOneBits(~(~vec3<u32>(0u, 74251u, 35760u))), vec3<u32>(min(0u, ~30675u), ~(arg_0 ^ 141645u), ~4294967295u)));
    return abs(~(_wgslsmith_mult_vec4_u32(vec4<u32>(1u, var_0.b.b.x, 48004u, arg_3.b.b.x) & vec4<u32>(arg_1, arg_0, var_0.b.b.x, arg_3.b.b.x), _wgslsmith_mult_vec4_u32(vec4<u32>(arg_0, 21772u, var_0.b.e.x, 69401u), vec4<u32>(arg_1, arg_1, 4294967295u, var_0.b.e.x))) & vec4<u32>(var_0.b.e.x, func_5(Struct_3(var_0.a, var_0.b, vec2<bool>(arg_3.c.x, false), var_0.c.x, var_0.a.xxy)), ~18522u, ~0u)));
}

fn func_2(arg_0: vec3<f32>, arg_1: vec3<f32>, arg_2: Struct_1, arg_3: Struct_4) -> f32 {
    let var_0 = arg_3;
    for (var var_1 = 2147483647i; var_1 < 24699i; var_1 += 1i) {
        if (LOOP_COUNTERS[18u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
        if (arg_2.a.x <= u_input.a.x) {
            var_1 = 2147483647i;
        }
        let var_2 = -268f;
        let var_3 = func_8(arg_3.d | func_3(), _wgslsmith_dot_vec3_u32(~countOneBits(abs(vec3<u32>(var_0.e, var_0.e, arg_3.e))), vec3<u32>(arg_3.d, _wgslsmith_div_u32(1u, reverseBits(var_0.e)), var_0.e)), _wgslsmith_f_op_vec2_f32(-vec2<f32>(arg_0.x, _wgslsmith_f_op_f32(-268f))), func_7(var_0.e, ~(~66111u), vec3<u32>(30105u, ~_wgslsmith_sub_u32(var_0.e, var_0.e), _wgslsmith_div_u32(var_0.d ^ arg_3.d, var_0.d))));
        for (; true; ) {
            if (LOOP_COUNTERS[19u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[19u] = LOOP_COUNTERS[19u] + 1u;
        }
    }
    let var_1 = 1000f;
    let var_2 = _wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(min(vec3<f32>(arg_0.x, 388f, var_1), arg_1))))));
    for (var var_3 = 0i; var_3 < -1i; var_3 -= 1i) {
        if (LOOP_COUNTERS[20u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[20u] = LOOP_COUNTERS[20u] + 1u;
        let var_4 = vec2<u32>(min(var_0.e, 83580u), max(_wgslsmith_dot_vec3_u32(_wgslsmith_sub_vec3_u32(vec3<u32>(0u, arg_3.e, var_0.d), ~vec3<u32>(21951u, 64620u, 1u)), vec3<u32>(79107u, 42630u, arg_3.d) << (countOneBits(vec3<u32>(arg_3.e, 1u, 45296u)) % vec3<u32>(32u))), ~4294967295u));
        let var_5 = arg_3;
        break;
    }
    return 2224f;
}

fn func_1() -> Struct_1 {
    var var_0 = _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(func_2(vec3<f32>(-2626f, -374f, 1000f), vec3<f32>(-195f, 636f, 167f), Struct_1(vec2<i32>(0i, 4085i)), Struct_4(false, vec2<bool>(false, true), Struct_1(vec2<i32>(7541i, 0i)), 38941u, 17602u))))))))));
    loop {
        if (LOOP_COUNTERS[21u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[21u] = LOOP_COUNTERS[21u] + 1u;
        let var_1 = func_4(_wgslsmith_f_op_f32(ceil(350f)));
        switch (-1i) {
            case i32(-2147483648): {
                continue;
            }
            case -1i: {
                break;
            }
            default: {
            }
        }
        continue;
    }
    for (var var_1 = i32(-2147483648); var_1 <= -29985i; var_1 = u_input.a.x >> (1u % 32u)) {
        if (LOOP_COUNTERS[22u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[22u] = LOOP_COUNTERS[22u] + 1u;
        if (true) {
        }
    }
    var_0 = _wgslsmith_f_op_f32(f32(-1f) * -537f);
    var_0 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-168f) + -1473f);
    return func_4(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(-1696f)) + _wgslsmith_f_op_f32(func_2(vec3<f32>(1395f, 974f, 1121f), vec3<f32>(142f, 1000f, 450f), Struct_1(u_input.a.yy), Struct_4(false, vec2<bool>(false, true), Struct_1(u_input.a.zy), 0u, 0u)))), 581f)) + _wgslsmith_f_op_f32(trunc(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1803f))))));
}

@compute
@workgroup_size(1)
fn main() {
    var var_0 = Struct_4(true, select(!vec2<bool>(true, all(vec4<bool>(true, false, false, true))), select(vec2<bool>(true, true), select(vec2<bool>(true, true), vec2<bool>(true, true), vec2<bool>(false, true)), vec2<bool>(true, true)), vec2<bool>(!all(vec2<bool>(true, false)), !all(vec3<bool>(true, true, false)))), func_1(), ~_wgslsmith_dot_vec2_u32(_wgslsmith_sub_vec2_u32(~vec2<u32>(1u, 67419u), vec2<u32>(56811u, 53762u)), vec2<u32>(9973u, 22438u)), 15340u);
    var var_1 = Struct_3(-(abs(vec4<i32>(u_input.a.x, var_0.c.a.x, 1i, 26420i)) & vec4<i32>(43466i, firstLeadingBit(9344i), u_input.a.x, _wgslsmith_mod_i32(var_0.c.a.x, 0i))), func_7(~var_0.e, var_0.d, vec3<u32>(func_7(6338u, 30728u, vec3<u32>(var_0.d, 0u, var_0.e)).b.b.x, abs(var_0.d), 4294967295u ^ var_0.e) & func_8(_wgslsmith_mod_u32(var_0.d, var_0.d), var_0.e, vec2<f32>(-163f, -318f), Struct_3(vec4<i32>(-32382i, i32(-2147483648), -18842i, 1i), Struct_2(-13876i, vec2<u32>(var_0.d, var_0.d), 376f, -1000f, vec2<u32>(1u, var_0.d)), vec2<bool>(false, true), var_0.a, u_input.a)).ywx).b, var_0.b, var_0.b.x, u_input.a);
    var_0 = Struct_4(var_1.c.x, !var_0.b, func_1(), 0u, _wgslsmith_dot_vec4_u32(_wgslsmith_div_vec4_u32(vec4<u32>(147u, 1u, var_0.e, var_0.e) | ~vec4<u32>(1u, var_0.e, var_1.b.b.x, var_1.b.e.x), vec4<u32>(func_8(var_0.d, 0u, vec2<f32>(var_1.b.d, 867f), Struct_3(var_1.a, Struct_2(i32(-2147483648), var_1.b.e, var_1.b.d, var_1.b.d, var_1.b.e), var_1.c, var_1.d, var_1.a.zxz)).x, func_5(Struct_3(var_1.a, Struct_2(-1758i, var_1.b.e, var_1.b.c, var_1.b.d, var_1.b.e), vec2<bool>(var_1.c.x, var_1.d), false, vec3<i32>(var_0.c.a.x, 1i, var_1.a.x))), var_1.b.b.x, var_0.d)), select(countOneBits(vec4<u32>(18604u, 59851u, 4294967295u, var_1.b.b.x)) << (_wgslsmith_clamp_vec4_u32(vec4<u32>(var_1.b.e.x, 15206u, 4294967295u, var_1.b.e.x), vec4<u32>(var_0.e, var_0.e, 4294967295u, 0u), vec4<u32>(4294967295u, var_1.b.e.x, var_1.b.e.x, var_1.b.e.x)) % vec4<u32>(32u)), _wgslsmith_sub_vec4_u32(vec4<u32>(78271u, 4294967295u, 3228u, 14610u) ^ vec4<u32>(1u, 728u, var_1.b.b.x, 38378u), ~vec4<u32>(0u, var_1.b.e.x, var_1.b.e.x, 0u)), vec4<bool>(var_1.d || var_1.d, var_0.a, all(vec3<bool>(var_1.c.x, true, false)), func_7(48548u, var_1.b.e.x, vec3<u32>(45209u, var_0.e, var_1.b.e.x)).c.x))));
    for (; false; ) {
        if (LOOP_COUNTERS[23u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[23u] = LOOP_COUNTERS[23u] + 1u;
        continue;
    }
    if (var_0.b.x && any(vec4<bool>(!var_0.b.x, false, var_1.c.x, true))) {
        var var_2 = ~((~vec3<u32>(1u, var_1.b.e.x, 4294967295u) & _wgslsmith_clamp_vec3_u32(_wgslsmith_add_vec3_u32(vec3<u32>(14383u, var_0.e, var_0.e), vec3<u32>(var_1.b.e.x, 1u, 77055u)), ~vec3<u32>(0u, 72799u, 4294967295u), vec3<u32>(var_1.b.b.x, 5743u, 1u))) | vec3<u32>(var_0.e, countOneBits(min(0u, 7686u)), ~(~82981u)));
        let var_3 = !(var_0.b.x & true);
        if (var_1.d) {
        }
    }
    if (var_0.b.x) {
    }
    loop {
        if (LOOP_COUNTERS[24u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[24u] = LOOP_COUNTERS[24u] + 1u;
        break;
    }
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_f_op_vec2_f32(abs(_wgslsmith_f_op_vec2_f32(abs(_wgslsmith_f_op_vec2_f32(max(_wgslsmith_f_op_vec2_f32(step(vec2<f32>(448f, 143f), vec2<f32>(-450f, var_1.b.c))), _wgslsmith_f_op_vec2_f32(vec2<f32>(var_1.b.d, var_1.b.c) * vec2<f32>(1000f, var_1.b.d)))))))), _wgslsmith_mod_vec4_u32(~select(_wgslsmith_clamp_vec4_u32(vec4<u32>(1u, 126815u, var_1.b.b.x, 5677u), vec4<u32>(36645u, 58650u, 826u, var_1.b.b.x), vec4<u32>(16652u, var_1.b.e.x, var_1.b.b.x, 46302u)), abs(vec4<u32>(0u, 4294967295u, var_0.e, 78506u)), vec4<bool>(var_1.c.x, true, var_0.a, var_0.b.x)), _wgslsmith_mult_vec4_u32(vec4<u32>(var_1.b.b.x, 0u, 0u, var_1.b.e.x), select(vec4<u32>(4294967295u, var_1.b.e.x, var_0.d, var_0.e) & vec4<u32>(var_1.b.e.x, var_1.b.e.x, var_1.b.b.x, 1u), max(vec4<u32>(0u, var_0.e, var_0.d, 0u), vec4<u32>(0u, 11858u, 42375u, 11166u)), vec4<bool>(false, true, false, var_0.a)))), ~_wgslsmith_add_vec4_i32(vec4<i32>(var_0.c.a.x, func_1().a.x, _wgslsmith_add_i32(i32(-2147483648), 0i), -var_0.c.a.x), -var_1.a | vec4<i32>(var_1.e.x, u_input.a.x, -1i, u_input.a.x)), u_input.a.yy, var_0.c.a.x);
}

`;