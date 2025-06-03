export const input = [40,134,52,113,160,237,246,221,55,14,217,204,225,7,44,165,162,177,68,45,118,230,217,221,72,103,168,205,51,120,142,202,195,65,8,162,68,118,82,7,14,156,81,218,204,130,94,34,238,37,239,162,158,247,193,122,39,40,180,73,103,92,224,170];
export const expected = [40,134,52,113,160,237,246,221,55,14,217,204,225,7,44,165,162,177,68,45,118,230,217,221,72,103,168,205,51,120,142,202,195,65,8,162,68,118,82,7,14,156,81,218,204,130,94,34,238,37,239,162,158,247,193,122,39,40,180,73,103,92,224,170];
export const shaderCode = ` 
 // {"0:0":[40,134,52,113,160,237,246,221,55,14,217,204,225,7,44,165,162,177,68,45,118,230,217,221,72,103,168,205,51,120,142,202,195,65,8,162,68,118,82,7,14,156,81,218,204,130,94,34,238,37,239,162,158,247,193,122,39,40,180,73,103,92,224,170]}
// Seed: 15384562859393466823

struct Struct_1 {
    a: vec3<i32>,
    b: vec3<i32>,
}

struct UniformBuffer {
    a: vec3<u32>,
    b: i32,
    c: i32,
    d: vec4<i32>,
    e: i32,
}

struct StorageBuffer {
    a: f32,
    b: i32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: vec2<bool> = vec2<bool>(false, true);

var<private> global1: vec2<u32>;

var<private> global2: array<u32, 29> = array<u32, 29>(1u, 0u, 0u, 5193u, 1u, 1u, 4294967295u, 15840u, 0u, 0u, 0u, 41474u, 1u, 12104u, 30591u, 12929u, 118u, 104220u, 51851u, 23536u, 4294967295u, 4294967295u, 21597u, 1u, 4294967295u, 1u, 56958u, 55609u, 0u);

var<private> global3: array<i32, 1>;

var<private> LOOP_COUNTERS: array<u32, 16>;

fn _wgslsmith_div_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a / b, a / vec3<i32>(2i), ((((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i))) || (((a[2i] == i32(-2147483648)) && (b[2i] == -1i)) || (b[2i] == 0i)));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_mod_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a % b, a, ((((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i))) || ((a[3i] < 0i) || (b[3i] <= 0i)));
}

fn _wgslsmith_add_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a + b, a, ((((b[0i] > 0i) && (a[0i] > (2147483647i - b[0i]))) || ((b[1i] > 0i) && (a[1i] > (2147483647i - b[1i])))) || ((b[2i] > 0i) && (a[2i] > (2147483647i - b[2i])))) || ((((b[0i] < 0i) && (a[0i] < (i32(-2147483648) - b[0i]))) || ((b[1i] < 0i) && (a[1i] < (i32(-2147483648) - b[1i])))) || ((b[2i] < 0i) && (a[2i] < (i32(-2147483648) - b[2i])))));
}

fn _wgslsmith_div_vec4_f32(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
    return select(vec4<f32>(42f), vec4<f32>(-123f), (((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i]))) || (abs(a[3i] / b[3i]) > abs(a[3i])));
}

fn _wgslsmith_add_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a + b, a, a > (vec4<u32>(4294967295u) - b));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_clamp_vec3_i32(e: vec3<i32>, low: vec3<i32>, high: vec3<i32>) -> vec3<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_mult_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a * b, a, (((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || ((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))));
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_clamp_vec4_i32(e: vec4<i32>, low: vec4<i32>, high: vec4<i32>) -> vec4<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mod_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a % b, a, (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_mult_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a * b, a, (((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i])))) || ((b[2i] != 0u) && (a[2i] > (4294967295u / b[2i]))));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_sub_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a - b, a, (((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || (((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))));
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn func_6(arg_0: i32, arg_1: vec4<f32>, arg_2: Struct_1) -> bool {
    global2 = array<u32, 29>();
    if (global0.x) {
        global3 = array<i32, 1>();
        let var_0 = arg_2;
        for (; ; ) {
            if (LOOP_COUNTERS[0u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
            var var_1 = arg_1.x;
            var var_2 = u_input.d;
        }
        loop {
            if (LOOP_COUNTERS[1u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
            break;
        }
    }
    switch (_wgslsmith_sub_i32(firstLeadingBit(min(~(-35715i) << (u_input.a.x % 32u), u_input.e)), 2842i)) {
        default: {
            let var_0 = ~vec2<u32>(0u, 47814u);
            if (false) {
            }
        }
    }
    if (global0.x) {
        global3 = array<i32, 1>();
        let var_0 = arg_2;
    }
    var var_0 = 1u;
    return true;
}

fn func_5(arg_0: vec2<f32>, arg_1: bool, arg_2: u32, arg_3: bool) -> vec3<bool> {
    let var_0 = Struct_1(countOneBits(u_input.d.yww), vec3<i32>(0i, u_input.e << (arg_2 % 32u), ~(~global3[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(global1.x ^ arg_2, 29u)], 1u)])));
    var var_1 = vec2<i32>(_wgslsmith_dot_vec4_i32(~vec4<i32>(_wgslsmith_sub_i32(u_input.c, var_0.b.x), 81797i, 25573i, -35193i), vec4<i32>(_wgslsmith_sub_i32(0i, 29506i) ^ u_input.c, -abs(global3[_wgslsmith_index_u32(global1.x, 1u)]), 24735i, _wgslsmith_clamp_i32(-global3[_wgslsmith_index_u32(u_input.a.x, 1u)], 6438i, _wgslsmith_div_i32(u_input.b, var_0.a.x)))), 1i);
    var_1 = _wgslsmith_sub_vec2_i32((select(_wgslsmith_sub_vec2_i32(vec2<i32>(u_input.c, -76814i), vec2<i32>(var_1.x, u_input.c)), vec2<i32>(-24373i, u_input.b) << (vec2<u32>(0u, 1u) % vec2<u32>(32u)), arg_1) << (_wgslsmith_mod_vec2_u32(u_input.a.zz, ~vec2<u32>(u_input.a.x, u_input.a.x)) % vec2<u32>(32u))) | u_input.d.wy, var_0.b.xz);
    global0 = select(vec2<bool>(func_6(var_1.x, _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(-263f, arg_0.x, -1603f, 969f))), var_0), false | func_6(~(-13459i), _wgslsmith_f_op_vec4_f32(floor(vec4<f32>(arg_0.x, 544f, arg_0.x, -341f))), var_0)), !vec2<bool>(false, arg_1), false);
    var var_2 = vec2<u32>(7366u, ~reverseBits(reverseBits(abs(arg_2))));
    return select(vec3<bool>(all(vec2<bool>(true, true)), true, global0.x), vec3<bool>(true, !arg_1, _wgslsmith_div_u32(global1.x, ~31117u) != arg_2), false);
}

fn func_4(arg_0: Struct_1) -> vec3<bool> {
    for (var var_0 = -1i; var_0 < 1i; var_0 -= 1i) {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        switch (~u_input.b) {
            case -4551i: {
                var var_1 = Struct_1(vec3<i32>(_wgslsmith_sub_i32(47371i, arg_0.a.x) >> (~0u % 32u), _wgslsmith_add_i32(~arg_0.a.x, u_input.d.x), -11496i >> (_wgslsmith_dot_vec4_u32(vec4<u32>(u_input.a.x, global1.x, 0u, 0u), vec4<u32>(global2[_wgslsmith_index_u32(0u, 29u)], 0u, 0u, 1864u)) % 32u)) | select(-vec3<i32>(u_input.c, global3[_wgslsmith_index_u32(global1.x, 1u)], arg_0.a.x), arg_0.a, select(func_5(vec2<f32>(1025f, -334f), global0.x, 1u, global0.x), !vec3<bool>(true, global0.x, false), global0.x)), _wgslsmith_mod_vec3_i32(arg_0.b, ~_wgslsmith_add_vec3_i32(arg_0.a ^ vec3<i32>(arg_0.b.x, -4230i, u_input.d.x), arg_0.b & vec3<i32>(50198i, 15521i, global3[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(1u, 29u)], 29u)], 1u)]))));
                let var_2 = _wgslsmith_div_vec3_i32(arg_0.a, min(abs(vec3<i32>(~(i32(-2147483648)), i32(-2147483648), -46430i)), vec3<i32>(select(-36171i, 0i, false) | select(var_1.b.x, 24076i, true), 79451i, 1i)));
                var_0 = i32(-2147483648);
                continue;
            }
            case 15619i: {
                var var_1 = -(u_input.d.zxy ^ ~_wgslsmith_clamp_vec3_i32(arg_0.a << (u_input.a % vec3<u32>(32u)), _wgslsmith_add_vec3_i32(vec3<i32>(2147483647i, 16160i, i32(-2147483648)), arg_0.b), vec3<i32>(arg_0.a.x, i32(-2147483648), 0i)));
                var var_2 = 2107f;
                global3 = array<i32, 1>();
                let var_3 = _wgslsmith_mod_vec4_i32(vec4<i32>(min(reverseBits(arg_0.a.x), ~_wgslsmith_clamp_i32(-1i, -56631i, var_1.x)), var_1.x, (i32(-1i) * -26462i) | arg_0.b.x, reverseBits(~22898i)), _wgslsmith_mod_vec4_i32(vec4<i32>(max(global3[_wgslsmith_index_u32(global1.x, 1u)] ^ 22969i, -1i >> (global1.x % 32u)), min(-13270i, reverseBits(1i)), u_input.e, arg_0.a.x), reverseBits(~firstLeadingBit(u_input.d))));
                var_0 = min(i32(-2147483648), ~_wgslsmith_add_i32(71563i, 10188i));
            }
            case 1i: {
            }
            default: {
                continue;
            }
        }
        if (global0.x) {
        }
        var var_1 = _wgslsmith_mod_vec4_i32(~vec4<i32>(-48001i, 4378i, i32(-1i) * -13902i, -global3[_wgslsmith_index_u32(_wgslsmith_dot_vec3_u32(u_input.a, u_input.a), 1u)]), u_input.d & (vec4<i32>(_wgslsmith_add_i32(1i, -24541i), u_input.e, 15689i, 48934i) ^ max(vec4<i32>(global3[_wgslsmith_index_u32(10776u, 1u)], u_input.c, u_input.d.x, global3[_wgslsmith_index_u32(37697u, 1u)]), _wgslsmith_clamp_vec4_i32(u_input.d, u_input.d, u_input.d))));
    }
    for (var var_0 = 0i; ; var_0 -= 1i) {
        if (LOOP_COUNTERS[3u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
        var var_1 = select(arg_0.b.zz ^ u_input.d.xz, ~vec2<i32>(select(-1i, min(21407i, global3[_wgslsmith_index_u32(global1.x, 1u)]), global0.x), _wgslsmith_sub_i32(_wgslsmith_dot_vec4_i32(u_input.d, vec4<i32>(arg_0.b.x, 11981i, -1i, 0i)), min(u_input.b, u_input.b))), all(vec4<bool>(1060f > _wgslsmith_f_op_f32(step(-1388f, 1000f)), true, global0.x, global0.x)));
        continue;
    }
    let var_0 = Struct_1(arg_0.b, vec3<i32>(countOneBits(firstTrailingBit(_wgslsmith_add_i32(-1i, global3[_wgslsmith_index_u32(1u, 1u)]))), _wgslsmith_dot_vec2_i32(~(arg_0.a.yy >> (u_input.a.xx % vec2<u32>(32u))), -min(vec2<i32>(i32(-2147483648), -346i), u_input.d.wx)), _wgslsmith_div_i32(2147483647i, -global3[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(u_input.a.x, 29u)], 1u)]) ^ -1i));
    switch (_wgslsmith_mod_i32(var_0.a.x, ~_wgslsmith_div_i32(var_0.a.x & -8210i, _wgslsmith_dot_vec4_i32(u_input.d, u_input.d))) >> (4644u % 32u)) {
        case i32(-2147483648): {
            loop {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
                global2 = array<u32, 29>();
                let var_1 = Struct_1(_wgslsmith_mod_vec3_i32(_wgslsmith_sub_vec3_i32(_wgslsmith_mod_vec3_i32(arg_0.a, ~vec3<i32>(u_input.d.x, var_0.a.x, 51557i)), vec3<i32>(arg_0.a.x | u_input.b, -39559i, min(i32(-2147483648), 1i))), u_input.d.xyw), firstLeadingBit(vec3<i32>(u_input.c, global3[_wgslsmith_index_u32(20774u, 1u)], _wgslsmith_add_i32(_wgslsmith_dot_vec4_i32(vec4<i32>(u_input.d.x, global3[_wgslsmith_index_u32(67320u, 1u)], global3[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(0u, 29u)], 1u)], -16306i), u_input.d), var_0.b.x ^ 51236i))));
                global0 = select(!vec2<bool>(any(!vec4<bool>(true, global0.x, global0.x, false)), true), select(!(!(!vec2<bool>(false, global0.x))), func_5(vec2<f32>(2254f, _wgslsmith_f_op_f32(f32(-1f) * -1000f)), global0.x, 1u, !(1u > global1.x)).yx, !vec2<bool>(true, true | global0.x)), global0.x);
            }
            global3 = array<i32, 1>();
            switch (~0i) {
                case i32(-2147483648): {
                    let var_1 = _wgslsmith_mult_u32(_wgslsmith_add_u32(~firstTrailingBit(~4294967295u), ~1u), _wgslsmith_add_u32(~1u, ~(~(101880u & global1.x))));
                    var var_2 = var_0;
                    var var_3 = Struct_1(_wgslsmith_div_vec3_i32(vec3<i32>(_wgslsmith_div_i32(-1i, u_input.b >> (global1.x % 32u)), ~_wgslsmith_dot_vec3_i32(vec3<i32>(-1i, u_input.b, -16881i), vec3<i32>(1991i, var_0.a.x, arg_0.a.x)), abs(_wgslsmith_dot_vec2_i32(var_2.a.zy, vec2<i32>(global3[_wgslsmith_index_u32(global1.x, 1u)], -1i)))), ~(arg_0.b | _wgslsmith_div_vec3_i32(arg_0.b, vec3<i32>(0i, var_0.a.x, i32(-2147483648))))), vec3<i32>(max(i32(-2147483648), firstLeadingBit(abs(u_input.c))), -(firstLeadingBit(19338i) ^ max(-37108i, var_0.b.x)), ~_wgslsmith_div_i32(_wgslsmith_dot_vec2_i32(var_2.a.xz, vec2<i32>(i32(-2147483648), arg_0.b.x)), u_input.e)));
                }
                case 1i: {
                    let var_1 = var_0;
                    var var_2 = Struct_1(vec3<i32>(max(var_0.b.x, var_1.a.x) & -21160i, ~reverseBits(1i), arg_0.a.x) & countOneBits(arg_0.b), -(~vec3<i32>(var_1.a.x, ~(i32(-2147483648)), ~1i)));
                    global1 = ~_wgslsmith_clamp_vec2_u32(u_input.a.zy, ~u_input.a.yy, vec2<u32>(0u, global1.x ^ 16336u));
                }
                case 37839i: {
                    var var_1 = Struct_1(min(u_input.d.yyy, var_0.b), arg_0.a);
                }
                case 0i: {
                    global3 = array<i32, 1>();
                }
                default: {
                    var var_1 = Struct_1(var_0.b, vec3<i32>(~_wgslsmith_dot_vec2_i32(vec2<i32>(global3[_wgslsmith_index_u32(43253u, 1u)], -2610i), arg_0.b.xy) & ~(1i ^ global3[_wgslsmith_index_u32(15626u, 1u)]), ~max(global3[_wgslsmith_index_u32(25332u, 1u)], ~u_input.c), -1i));
                }
            }
            loop {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                global0 = vec2<bool>(true, all(select(func_5(vec2<f32>(974f, -384f), !global0.x, ~14314u, func_5(vec2<f32>(459f, -707f), global0.x, global1.x, global0.x).x).xx, select(!vec2<bool>(false, global0.x), !vec2<bool>(global0.x, true), select(vec2<bool>(true, false), vec2<bool>(false, global0.x), false)), ~1u >= ~global2[_wgslsmith_index_u32(u_input.a.x, 29u)])));
                continue;
            }
        }
        default: {
            for (var var_1 = 1i; !(!(select(2147483647i, -arg_0.a.x, global0.x) == -select(-14606i, -30610i, false))); var_1 -= 1i) {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                let var_2 = _wgslsmith_dot_vec3_i32(arg_0.b ^ vec3<i32>(var_0.a.x, u_input.b, _wgslsmith_sub_i32(-u_input.b, 840i)), vec3<i32>(global3[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(~max(~1u, _wgslsmith_clamp_u32(global2[_wgslsmith_index_u32(u_input.a.x, 29u)], global1.x, 1u)), 29u)], 1u)], reverseBits(var_0.a.x), u_input.c));
                return func_5(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(1114f, -296f))))), func_5(vec2<f32>(_wgslsmith_f_op_f32(sign(1f)), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-657f * -250f))), global0.x, global2[_wgslsmith_index_u32(4294967295u, 29u)] & 42817u, true | all(vec3<bool>(global0.x, global0.x, global0.x))).x, 10677u, true);
            }
            var var_1 = Struct_1(~_wgslsmith_add_vec3_i32(min(vec3<i32>(1i, global3[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(4294967295u, 29u)], 29u)], 1u)], i32(-2147483648)), var_0.b >> (vec3<u32>(4294967295u, 5192u, global1.x) % vec3<u32>(32u))), u_input.d.wyz), u_input.d.www);
            var var_2 = _wgslsmith_f_op_vec4_f32(-vec4<f32>(_wgslsmith_f_op_f32(abs(-679f)), _wgslsmith_f_op_f32(-674f - 1288f), -1138f, _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-1f)))));
            global3 = array<i32, 1>();
        }
    }
    let var_1 = select(!(!func_5(_wgslsmith_f_op_vec2_f32(vec2<f32>(-1054f, -400f) + vec2<f32>(1560f, -683f)), global0.x, 4294967295u ^ global1.x, all(vec3<bool>(true, true, global0.x)))), vec3<bool>(false, true, true), !vec3<bool>(global0.x | any(vec2<bool>(true, false)), false | (global0.x | global0.x), !global0.x));
    return vec3<bool>(false, false, true);
}

fn func_7(arg_0: vec2<i32>, arg_1: vec3<bool>) -> vec3<i32> {
    let var_0 = Struct_1(u_input.d.wzz, vec3<i32>(~15454i, ~u_input.b, firstLeadingBit(-13577i)));
    var var_1 = var_0;
    global0 = func_5(vec2<f32>(-742f, 1627f), global0.x, 0u, arg_1.x).zx;
    let var_2 = ~abs(u_input.a) ^ u_input.a;
    global2 = array<u32, 29>();
    return u_input.d.xwy;
}

fn func_3(arg_0: vec3<f32>) -> vec3<i32> {
    var var_0 = Struct_1(~(-func_7(vec2<i32>(51069i, -53951i), func_4(Struct_1(u_input.d.xyz, u_input.d.yxy)))), vec3<i32>(u_input.d.x, ~(-15952i), 1i));
    var var_1 = vec2<i32>(var_0.a.x, -_wgslsmith_sub_i32(_wgslsmith_clamp_i32(countOneBits(u_input.c), _wgslsmith_div_i32(-1i, u_input.c), global3[_wgslsmith_index_u32(_wgslsmith_dot_vec4_u32(vec4<u32>(4294967295u, 1u, global2[_wgslsmith_index_u32(0u, 29u)], global2[_wgslsmith_index_u32(1u, 29u)]), vec4<u32>(global1.x, 0u, 19044u, 1u)), 1u)]), func_7(var_0.a.zz | u_input.d.yx, vec3<bool>(global0.x, global0.x, global0.x)).x));
    if (all(vec4<bool>(max(global2[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(u_input.a.x, 29u)], 29u)], 29u)] << (global1.x % 32u), 0u) <= 4294967295u, func_5(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-vec2<f32>(736f, 1000f))), 21130i > var_0.b.x, u_input.a.x, global0.x).x, all(func_5(vec2<f32>(1391f, -318f), true, 1u, true).zz), !(1i >= -u_input.b)))) {
        let var_2 = !(!vec3<bool>(all(func_5(arg_0.yx, false, 60695u, false)), false, (false | global0.x) & global0.x));
        var var_3 = Struct_1(_wgslsmith_mod_vec3_i32(~vec3<i32>(min(-16655i, -36322i), var_0.a.x, -1i), vec3<i32>(0i, i32(-1i) * i32(-2147483648), abs(-var_1.x))), ~var_0.a);
    }
    let var_2 = Struct_1(~vec3<i32>(-_wgslsmith_sub_i32(0i, global3[_wgslsmith_index_u32(4294967295u, 1u)]), 19614i, u_input.d.x), var_0.a);
    var var_3 = var_2;
    return select(select(vec3<i32>(i32(-2147483648), -1i, u_input.e), _wgslsmith_mod_vec3_i32(~var_2.a & ~var_0.a, _wgslsmith_mult_vec3_i32(vec3<i32>(var_3.a.x, -26899i, 30843i), vec3<i32>(var_0.b.x, 0i, i32(-2147483648)))), global0.x), ((vec3<i32>(i32(-2147483648), var_2.b.x, 1i) << (u_input.a % vec3<u32>(32u))) << (u_input.a % vec3<u32>(32u))) | var_3.a, all(!func_4(Struct_1(var_2.a, vec3<i32>(2147483647i, -1i, 1i)))));
}

fn func_2(arg_0: bool) -> Struct_1 {
    let var_0 = Struct_1(countOneBits(u_input.d.yyz), _wgslsmith_sub_vec3_i32(countOneBits(select(vec3<i32>(1i, u_input.b, global3[_wgslsmith_index_u32(u_input.a.x, 1u)]), vec3<i32>(u_input.c, -17936i, 1i), vec3<bool>(global0.x, arg_0, global0.x))) ^ select(vec3<i32>(global3[_wgslsmith_index_u32(global1.x, 1u)], 9983i, 1i) << (vec3<u32>(global2[_wgslsmith_index_u32(0u, 29u)], 3942u, global2[_wgslsmith_index_u32(4294967295u, 29u)]) % vec3<u32>(32u)), u_input.d.yyx ^ u_input.d.zyw, !vec3<bool>(global0.x, arg_0, arg_0)), countOneBits(func_3(_wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(1366f, -521f, 139f)))))));
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        return Struct_1(~var_0.b, u_input.d.zyw ^ vec3<i32>(~select(i32(-2147483648), global3[_wgslsmith_index_u32(0u, 1u)], arg_0), -9060i, -select(-36491i, 16911i, global0.x)));
    }
    let var_1 = _wgslsmith_div_vec2_f32(vec2<f32>(1000f, _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-1009f)))), _wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(round(vec2<f32>(137f, 470f))) - _wgslsmith_f_op_vec2_f32(-vec2<f32>(989f, 1130f))), _wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(select(-438f, -562f, false)), _wgslsmith_f_op_f32(max(1900f, 684f))) - _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(vec2<f32>(-444f, 1040f) + vec2<f32>(-393f, 528f))))));
    var var_2 = _wgslsmith_mult_vec3_u32(~vec3<u32>(countOneBits(48103u), ~47087u, 4294967295u) | ~u_input.a, u_input.a);
    global2 = array<u32, 29>();
    return Struct_1(u_input.d.yyx, _wgslsmith_mod_vec3_i32(vec3<i32>(-max(24326i, var_0.a.x), abs(1i), func_3(vec3<f32>(var_1.x, -1435f, -850f)).x), u_input.d.zwy & vec3<i32>(firstTrailingBit(12638i), 23234i, 29618i)));
}

fn func_8(arg_0: u32, arg_1: Struct_1) -> vec3<i32> {
    global1 = ~reverseBits(reverseBits(_wgslsmith_div_vec2_u32(u_input.a.zx, u_input.a.zy >> (vec2<u32>(9755u, 1u) % vec2<u32>(32u)))));
    for (var var_0: i32; var_0 < 0i; ) {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        let var_1 = ~vec4<u32>(_wgslsmith_dot_vec3_u32(~u_input.a >> (select(vec3<u32>(1u, arg_0, global1.x), u_input.a, false) % vec3<u32>(32u)), vec3<u32>(~9993u, u_input.a.x, _wgslsmith_clamp_u32(arg_0, 944u, global2[_wgslsmith_index_u32(106329u, 29u)]))), global1.x, global1.x, ~(arg_0 & 4294967295u));
        var var_2 = arg_1;
    }
    let var_0 = true;
    let var_1 = Struct_1(abs(arg_1.a), -u_input.d.yxx);
    loop {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        if (global0.x) {
            return var_1.a;
        }
        break;
    }
    return -max(arg_1.b, -(-vec3<i32>(2147483647i, var_1.b.x, u_input.c) << (vec3<u32>(arg_0, 15807u, global2[_wgslsmith_index_u32(arg_0, 29u)]) % vec3<u32>(32u))));
}

fn func_1() -> bool {
    global1 = abs(u_input.a.yx);
    global1 = select(vec2<u32>(0u, 1u), vec2<u32>(~1u, firstTrailingBit(countOneBits(1u))), select(vec2<bool>(true, true), vec2<bool>(global2[_wgslsmith_index_u32(67341u, 29u)] <= global1.x, !global0.x), vec2<bool>(!global0.x, true))) & abs(max(firstTrailingBit(~vec2<u32>(global2[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(16306u, 29u)], 29u)], 29u)], 0u)), u_input.a.yy));
    global2 = array<u32, 29>();
    loop {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        let var_0 = Struct_1(func_8(1u, func_2(true != global0.x)), min(~(~reverseBits(u_input.d.wzw)), _wgslsmith_mod_vec3_i32(u_input.d.xxz, _wgslsmith_mult_vec3_i32(u_input.d.wwy, u_input.d.yww))));
    }
    for (; any(func_5(_wgslsmith_f_op_vec2_f32(vec2<f32>(_wgslsmith_f_op_f32(-135f + -370f), _wgslsmith_f_op_f32(-279f)) + _wgslsmith_f_op_vec2_f32(-vec2<f32>(-344f, 703f))), true, _wgslsmith_div_u32(_wgslsmith_mod_u32(global2[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(u_input.a.x, 29u)], 29u)], u_input.a.x), 0u), func_6(u_input.c, vec4<f32>(-369f, _wgslsmith_f_op_f32(trunc(-1000f)), _wgslsmith_f_op_f32(-193f), _wgslsmith_f_op_f32(select(462f, 1123f, true))), Struct_1(func_8(1u, Struct_1(vec3<i32>(43124i, global3[_wgslsmith_index_u32(global1.x, 1u)], 16863i), u_input.d.xxy)), u_input.d.wyw & u_input.d.xwx))).zy); ) {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        global1 = _wgslsmith_div_vec2_u32(~vec2<u32>(1u, 1u), firstLeadingBit(u_input.a.xy));
    }
    return true;
}

@compute
@workgroup_size(1)
fn main() {
    for (var var_0 = 1i; ; var_0 += 1i) {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
    }
    let var_0 = vec2<u32>(_wgslsmith_sub_u32(~_wgslsmith_mod_u32(global2[_wgslsmith_index_u32(4294967295u, 29u)] & 30585u, u_input.a.x), 94393u), 103827u);
    if (select(!func_1(), global0.x, _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-1495f))))) > _wgslsmith_f_op_f32(f32(-1f) * -630f))) {
        loop {
            if (LOOP_COUNTERS[13u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        }
        let var_1 = 4294967295u;
        switch ((i32(-1i) * -89592i) >> (0u % 32u)) {
            default: {
                global0 = func_5(vec2<f32>(_wgslsmith_f_op_f32(sign(_wgslsmith_f_op_f32(-433f * _wgslsmith_f_op_f32(-1005f)))), -576f), !(!global0.x), 69439u, true).yy;
                let var_2 = !(!(!select(select(vec2<bool>(true, false), vec2<bool>(global0.x, false), true), vec2<bool>(true, true), vec2<bool>(global0.x, true))));
                global2 = array<u32, 29>();
                var var_3 = _wgslsmith_f_op_f32(ceil(-558f));
                let var_4 = Struct_1(u_input.d.yww, select(u_input.d.wwy, vec3<i32>((0i ^ global3[_wgslsmith_index_u32(u_input.a.x, 1u)]) << (_wgslsmith_dot_vec3_u32(vec3<u32>(46824u, u_input.a.x, 60893u), u_input.a) % 32u), ~select(-28390i, global3[_wgslsmith_index_u32(1u, 1u)], var_2.x), -select(-25476i, global3[_wgslsmith_index_u32(61533u, 1u)], global0.x)), vec3<bool>(func_4(Struct_1(vec3<i32>(3123i, u_input.b, 2147483647i), vec3<i32>(global3[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(u_input.a.x, 29u)], 1u)], -11991i, u_input.c))).x, global0.x, !(global0.x & false))));
            }
        }
    }
    switch (func_8(1u & (firstTrailingBit(_wgslsmith_dot_vec4_u32(vec4<u32>(global2[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(4294967295u, 29u)], 29u)], 1u, var_0.x, u_input.a.x), vec4<u32>(1u, 170u, var_0.x, 1u))) << (~(u_input.a.x << (1u % 32u)) % 32u)), Struct_1(vec3<i32>(global3[_wgslsmith_index_u32(38915u, 1u)], 2147483647i, _wgslsmith_mult_i32(firstTrailingBit(global3[_wgslsmith_index_u32(33980u, 1u)]), ~global3[_wgslsmith_index_u32(1u, 1u)])), abs(u_input.d.zwx))).x) {
        case 23228i: {
            let var_1 = firstTrailingBit(~firstLeadingBit(0u));
            global0 = func_5(vec2<f32>(_wgslsmith_f_op_f32(min(631f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1734f)))), 193f), global0.x, 0u, _wgslsmith_sub_i32(firstLeadingBit(_wgslsmith_add_i32(global3[_wgslsmith_index_u32(4294967295u, 1u)], 0i)), -global3[_wgslsmith_index_u32(_wgslsmith_div_u32(u_input.a.x, u_input.a.x), 1u)]) <= ~global3[_wgslsmith_index_u32(u_input.a.x, 1u)]).yx;
            if (false) {
                global0 = select(!(!vec2<bool>(true, !global0.x)), vec2<bool>(true, true), !select(vec2<bool>(true, true), func_4(func_2(false)).zz, func_4(Struct_1(u_input.d.xzx, vec3<i32>(i32(-2147483648), 45714i, global3[_wgslsmith_index_u32(var_0.x, 1u)]))).zx));
                let var_2 = vec4<bool>(!(!(!any(vec2<bool>(global0.x, global0.x)))), func_6(7901i, _wgslsmith_f_op_vec4_f32(min(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(-445f, -2842f, -2166f, -1139f))), vec4<f32>(_wgslsmith_f_op_f32(-1838f), _wgslsmith_f_op_f32(floor(168f)), _wgslsmith_f_op_f32(abs(-583f)), 1f))), Struct_1(u_input.d.zzx, _wgslsmith_div_vec3_i32(u_input.d.yxy, vec3<i32>(0i, 2147483647i, u_input.e) >> (u_input.a % vec3<u32>(32u))))), !global0.x, false);
                global3 = array<i32, 1>();
                global0 = func_5(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(712f, _wgslsmith_f_op_f32(-1436f))))), select(global0.x, all(vec3<bool>(true, any(var_2), true)), true), 59161u, var_2.x).xz;
            }
            global1 = abs(~(~var_0) ^ var_0);
        }
        case 64033i: {
            return;
        }
        default: {
            let var_1 = func_2(func_4(func_2(global0.x)).x);
            global2 = array<u32, 29>();
        }
    }
    switch (func_8(global1.x & _wgslsmith_clamp_u32(countOneBits(_wgslsmith_dot_vec4_u32(vec4<u32>(global1.x, global2[_wgslsmith_index_u32(global1.x, 29u)], 5350u, global2[_wgslsmith_index_u32(4294967295u, 29u)]), vec4<u32>(global2[_wgslsmith_index_u32(u_input.a.x, 29u)], global1.x, var_0.x, u_input.a.x))), var_0.x, global1.x ^ u_input.a.x), Struct_1(u_input.d.xzy, vec3<i32>(max(_wgslsmith_sub_i32(59836i, u_input.c), 12555i), -func_7(u_input.d.xx, vec3<bool>(global0.x, true, global0.x)).x, u_input.b & -1i))).x) {
        case 1i: {
            if (any(!func_4(Struct_1(~u_input.d.xww, u_input.d.zyw << (vec3<u32>(40992u, global1.x, global2[_wgslsmith_index_u32(var_0.x, 29u)]) % vec3<u32>(32u)))).xz)) {
                let var_1 = vec4<u32>(_wgslsmith_add_u32(select(countOneBits(u_input.a.x) | countOneBits(60250u), ~(~var_0.x), min(u_input.b, 170i) < abs(u_input.d.x)), ~(~global2[_wgslsmith_index_u32(0u, 29u)])), global2[_wgslsmith_index_u32(0u, 29u)], global2[_wgslsmith_index_u32(~firstTrailingBit(firstLeadingBit(0u)), 29u)], 15297u);
            }
            global0 = vec2<bool>(-8974i <= _wgslsmith_add_i32(countOneBits(u_input.c), _wgslsmith_add_i32(~1i, i32(-1i) * -30917i)), false);
            var var_1 = _wgslsmith_sub_vec3_i32(u_input.d.wyy, ~vec3<i32>(~_wgslsmith_sub_i32(i32(-2147483648), global3[_wgslsmith_index_u32(var_0.x, 1u)]), 1i, 1409i));
        }
        case 2147483647i: {
        }
        case -1i: {
        }
        case 38908i: {
            for (var var_1: i32; var_1 < -6396i; var_1 -= 1i) {
                if (LOOP_COUNTERS[14u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
            }
            var var_1 = _wgslsmith_f_op_f32(select(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-381f - _wgslsmith_f_op_f32(-611f))), _wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(min(302f, 1030f)), -229f))), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-1480f), -652f))) * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(sign(777f)) * _wgslsmith_div_f32(732f, _wgslsmith_f_op_f32(-301f)))), global0.x));
        }
        default: {
            var var_1 = vec4<u32>(~1u, 20555u, global2[_wgslsmith_index_u32(u_input.a.x, 29u)], ~global2[_wgslsmith_index_u32(u_input.a.x, 29u)]);
            switch (-7000i) {
                case -7020i: {
                }
                case 16977i: {
                    let var_2 = func_2(true);
                    let var_3 = Struct_1(~vec3<i32>(~1i, i32(-2147483648), var_2.b.x), -func_3(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(-942f, -943f, 540f)))));
                }
                case 1i: {
                    let var_2 = _wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(-vec4<f32>(1f, _wgslsmith_div_f32(_wgslsmith_f_op_f32(356f * -152f), _wgslsmith_f_op_f32(select(-142f, 785f, true))), _wgslsmith_f_op_f32(ceil(113f)), _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(abs(543f))))))));
                    let var_3 = vec4<bool>(global0.x, func_5(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(exp2(var_2.yx))), func_6((i32(-1i) * i32(-2147483648)) ^ _wgslsmith_dot_vec3_i32(vec3<i32>(-1i, 24858i, u_input.c), u_input.d.wxx), _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-vec4<f32>(var_2.x, var_2.x, 611f, var_2.x)) * _wgslsmith_f_op_vec4_f32(vec4<f32>(var_2.x, 990f, -450f, 181f) - var_2)), func_2(false)), ~global2[_wgslsmith_index_u32(u_input.a.x, 29u)], !(!(global0.x && true))).x, true, func_1());
                    global1 = ~u_input.a.yx;
                    global2 = array<u32, 29>();
                    var var_4 = Struct_1(vec3<i32>(-16258i, firstLeadingBit(func_2(true).a.x ^ -50627i), ~func_8(global2[_wgslsmith_index_u32(33517u, 29u)], Struct_1(u_input.d.zyy, u_input.d.yyy)).x << (_wgslsmith_mod_u32(abs(global1.x), 69527u) % 32u)), vec3<i32>(func_8(firstTrailingBit(_wgslsmith_dot_vec3_u32(vec3<u32>(30104u, 47958u, global2[_wgslsmith_index_u32(82961u, 29u)]), u_input.a)), Struct_1(min(vec3<i32>(2147483647i, global3[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(4294967295u, 29u)], 1u)], global3[_wgslsmith_index_u32(1u, 1u)]), vec3<i32>(i32(-2147483648), 60997i, 0i)), ~vec3<i32>(global3[_wgslsmith_index_u32(u_input.a.x, 1u)], global3[_wgslsmith_index_u32(0u, 1u)], global3[_wgslsmith_index_u32(103271u, 1u)]))).x, _wgslsmith_dot_vec4_i32(-_wgslsmith_sub_vec4_i32(u_input.d, u_input.d), _wgslsmith_sub_vec4_i32(u_input.d, -u_input.d)), u_input.e));
                }
                case 0i: {
                }
                default: {
                    var var_2 = func_2(true);
                    var_1 = vec4<u32>(global1.x, global2[_wgslsmith_index_u32(13807u, 29u)], global1.x, _wgslsmith_mult_u32(u_input.a.x, 1u));
                    var var_3 = func_2(false);
                    var var_4 = ~(~(~var_0.x & u_input.a.x)) | ~1u;
                }
            }
            if (func_4(func_2(func_6(-1i, vec4<f32>(_wgslsmith_f_op_f32(f32(-1f) * -1193f), _wgslsmith_f_op_f32(1000f - -171f), _wgslsmith_f_op_f32(-1896f + -563f), 116f), Struct_1(~u_input.d.yxw, min(vec3<i32>(-28715i, -4888i, 73391i), vec3<i32>(2147483647i, global3[_wgslsmith_index_u32(48460u, 1u)], global3[_wgslsmith_index_u32(18915u, 1u)])))))).x) {
                var var_2 = i32(-1i) * -2248i;
                global1 = u_input.a.xx;
                global3 = array<i32, 1>();
                var var_3 = Struct_1(-(u_input.d.wxz ^ vec3<i32>(select(global3[_wgslsmith_index_u32(var_1.x, 1u)], -52273i, global0.x), ~18649i, _wgslsmith_sub_i32(u_input.d.x, -9123i))), vec3<i32>(select(global3[_wgslsmith_index_u32(~(1u | global2[_wgslsmith_index_u32(5419u, 29u)]), 1u)], _wgslsmith_mult_i32(_wgslsmith_mult_i32(u_input.e, 0i), func_8(18754u, Struct_1(u_input.d.zyw, u_input.d.wyx)).x), global0.x & select(true, true, global0.x)), _wgslsmith_clamp_i32(global3[_wgslsmith_index_u32(firstTrailingBit(abs(1u)), 1u)], reverseBits(_wgslsmith_dot_vec3_i32(vec3<i32>(u_input.b, 0i, 0i), u_input.d.zxy)), u_input.d.x), u_input.c));
                var_1 = firstTrailingBit(~(~abs(vec4<u32>(0u, var_1.x, 26179u, 13305u) & vec4<u32>(global1.x, 73825u, 4294967295u, 63416u))));
            }
        }
    }
    switch (2147483647i) {
        case 0i: {
            global0 = vec2<bool>(abs(~global2[_wgslsmith_index_u32(_wgslsmith_dot_vec2_u32(u_input.a.zz, u_input.a.xz), 29u)]) < _wgslsmith_dot_vec4_u32(abs(abs(vec4<u32>(global2[_wgslsmith_index_u32(var_0.x, 29u)], 4294967295u, 0u, 24301u))), ~_wgslsmith_add_vec4_u32(vec4<u32>(133043u, 11530u, 3655u, global2[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(0u, 29u)], 29u)]), vec4<u32>(var_0.x, global1.x, global2[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(16434u, 29u)], 29u)], u_input.a.x))), global0.x);
            if (func_5(_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(1046f - 280f), _wgslsmith_f_op_f32(min(-884f, 871f)))), _wgslsmith_f_op_vec2_f32(ceil(_wgslsmith_f_op_vec2_f32(min(vec2<f32>(337f, 813f), vec2<f32>(395f, -1356f)))))), !(any(vec4<bool>(global0.x, true, true, global0.x)) && global0.x), ~1u, any(select(vec2<bool>(!global0.x, func_5(vec2<f32>(-1215f, -280f), global0.x, var_0.x, false).x), func_5(_wgslsmith_f_op_vec2_f32(step(vec2<f32>(-1214f, -205f), vec2<f32>(-454f, -1492f))), true, _wgslsmith_sub_u32(22641u, global2[_wgslsmith_index_u32(9345u, 29u)]), any(vec3<bool>(false, false, false))).zz, !vec2<bool>(true, global0.x)))).x) {
                let var_1 = vec2<i32>(min((func_2(false).b.x >> (1u % 32u)) | global3[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(1u, 29u)], 1u)], (_wgslsmith_mod_i32(global3[_wgslsmith_index_u32(u_input.a.x, 1u)], global3[_wgslsmith_index_u32(53228u, 1u)]) >> (var_0.x % 32u)) & (i32(-1i) * i32(-2147483648))), u_input.e);
                global3 = array<i32, 1>();
            }
            global0 = !select(func_5(_wgslsmith_f_op_vec2_f32(min(_wgslsmith_f_op_vec2_f32(trunc(vec2<f32>(430f, 893f))), vec2<f32>(585f, -1000f))), select(true, global0.x, global0.x), _wgslsmith_dot_vec3_u32(vec3<u32>(var_0.x, 20031u, 17290u), vec3<u32>(4294967295u, 56271u, var_0.x)), !global0.x && true).xy, select(!select(vec2<bool>(global0.x, global0.x), vec2<bool>(false, global0.x), vec2<bool>(false, global0.x)), vec2<bool>(true, true), true), select(vec2<bool>(true, true), !select(vec2<bool>(global0.x, true), vec2<bool>(false, global0.x), vec2<bool>(false, true)), false));
            let var_1 = 1u;
        }
        case i32(-2147483648): {
            global1 = ~u_input.a.yy;
            return;
        }
        case 41030i: {
            for (var var_1: i32; false; ) {
                if (LOOP_COUNTERS[15u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            }
        }
        default: {
            let var_1 = Struct_1(_wgslsmith_div_vec3_i32(u_input.d.xyx ^ u_input.d.wzz, reverseBits(vec3<i32>(u_input.e, i32(-1i) * -4537i, max(i32(-2147483648), -6321i)))), _wgslsmith_div_vec3_i32(vec3<i32>(abs(u_input.c) & global3[_wgslsmith_index_u32(countOneBits(916u), 1u)], -7788i, ~_wgslsmith_div_i32(global3[_wgslsmith_index_u32(4294967295u, 1u)], u_input.d.x)), firstTrailingBit(vec3<i32>(global3[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(u_input.a.x | 50736u, 29u)], 1u)], i32(-1i) * i32(-2147483648), 1i))));
            switch (countOneBits(global3[_wgslsmith_index_u32(7842u, 1u)])) {
                case -81444i: {
                    global2 = array<u32, 29>();
                    var var_2 = _wgslsmith_div_i32(-u_input.d.x, global3[_wgslsmith_index_u32(reverseBits(global2[_wgslsmith_index_u32(abs(0u), 29u)]), 1u)]);
                }
                case -36008i: {
                    let var_2 = Struct_1(vec3<i32>(func_7(firstLeadingBit(var_1.a.xx), select(!vec3<bool>(global0.x, true, false), !vec3<bool>(false, global0.x, false), func_4(Struct_1(u_input.d.zzw, var_1.b)))).x, 29596i, -_wgslsmith_div_i32(0i, var_1.b.x)), func_3(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(max(vec3<f32>(1580f, 1429f, -323f), vec3<f32>(-188f, 106f, -310f)))))));
                    var var_3 = func_2(global0.x);
                }
                case -1i: {
                    global1 = ~(select(_wgslsmith_mod_vec2_u32(~vec2<u32>(global2[_wgslsmith_index_u32(u_input.a.x, 29u)], 4294967295u), max(vec2<u32>(var_0.x, global1.x), u_input.a.xx)), vec2<u32>(4294967295u, _wgslsmith_div_u32(u_input.a.x, 5623u)), func_6(-u_input.b, _wgslsmith_f_op_vec4_f32(min(vec4<f32>(586f, -538f, -527f, 1000f), vec4<f32>(470f, 1929f, -143f, -874f))), var_1)) << (vec2<u32>(_wgslsmith_clamp_u32(global1.x, u_input.a.x, global1.x | global2[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(4294967295u, 29u)], 29u)]), global1.x | ~global1.x) % vec2<u32>(32u)));
                }
                default: {
                    let var_2 = !global0.x;
                    var var_3 = _wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(vec4<f32>(-1000f, _wgslsmith_f_op_f32(590f * _wgslsmith_div_f32(1293f, -356f)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(f32(-1f) * -273f) + _wgslsmith_f_op_f32(323f * -967f)), 723f) + _wgslsmith_div_vec4_f32(vec4<f32>(342f, _wgslsmith_f_op_f32(-1329f), _wgslsmith_f_op_f32(-1890f), _wgslsmith_f_op_f32(-796f)), _wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(-703f, 703f, -2622f, 560f))))), _wgslsmith_div_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(step(_wgslsmith_f_op_vec4_f32(sign(vec4<f32>(-1000f, -484f, -2443f, 542f))), vec4<f32>(329f, 1137f, -1000f, 2067f))) + _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(ceil(vec4<f32>(271f, 968f, -1391f, -309f))) - vec4<f32>(-2051f, -648f, -1745f, -1025f))), _wgslsmith_f_op_vec4_f32(exp2(_wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(floor(vec4<f32>(433f, -523f, -1264f, 463f)))))))), vec4<bool>(!(!var_2), var_2, true, true)));
                }
            }
        }
    }
    if (!all(vec2<bool>(!global0.x, all(!vec4<bool>(global0.x, true, false, global0.x))))) {
        switch (_wgslsmith_dot_vec3_i32(_wgslsmith_mult_vec3_i32(firstTrailingBit(vec3<i32>(func_8(4294967295u, Struct_1(vec3<i32>(0i, 2147483647i, 0i), u_input.d.xzy)).x, -1i, ~(-2677i))), u_input.d.xzw), u_input.d.zwy)) {
            case 25115i: {
            }
            case 9063i: {
                var var_1 = select(vec4<bool>(!(~11804i < global3[_wgslsmith_index_u32(global2[_wgslsmith_index_u32(24991u, 29u)] & 9540u, 1u)]), false, any(func_5(_wgslsmith_f_op_vec2_f32(vec2<f32>(1000f, -660f) * vec2<f32>(843f, -214f)), global0.x, var_0.x, func_6(2147483647i, vec4<f32>(-2565f, -1615f, 1771f, 573f), Struct_1(vec3<i32>(global3[_wgslsmith_index_u32(5044u, 1u)], 10892i, global3[_wgslsmith_index_u32(44671u, 1u)]), vec3<i32>(global3[_wgslsmith_index_u32(4294967295u, 1u)], 2147483647i, global3[_wgslsmith_index_u32(global1.x, 1u)]))))), !((true & global0.x) || all(vec3<bool>(true, true, true)))), select(select(select(vec4<bool>(false, true, global0.x, false), select(vec4<bool>(true, global0.x, global0.x, global0.x), vec4<bool>(global0.x, global0.x, true, false), vec4<bool>(global0.x, false, global0.x, global0.x)), global0.x && true), select(!vec4<bool>(global0.x, global0.x, false, false), !vec4<bool>(global0.x, false, global0.x, global0.x), vec4<bool>(true, true, true, true)), !(!vec4<bool>(global0.x, global0.x, global0.x, global0.x))), select(select(!vec4<bool>(false, global0.x, global0.x, false), vec4<bool>(false, global0.x, true, global0.x), !vec4<bool>(global0.x, true, global0.x, false)), !vec4<bool>(global0.x, true, false, true), false), select(vec4<bool>(true, false, select(global0.x, global0.x, global0.x), !global0.x), vec4<bool>(false, true, false, true), select(vec4<bool>(true, true, true, true), vec4<bool>(false, global0.x, false, false), true))), true);
                let var_2 = _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(979f))) - 651f);
                var var_3 = Struct_1(vec3<i32>(global3[_wgslsmith_index_u32(~abs(1u), 1u)], u_input.e, -u_input.b), u_input.d.zzx);
            }
            case -1i: {
                global1 = abs(select(var_0, ~reverseBits(vec2<u32>(var_0.x, u_input.a.x)), select(vec2<bool>(func_1(), true), vec2<bool>(global0.x != global0.x, true), !select(vec2<bool>(true, global0.x), vec2<bool>(true, global0.x), vec2<bool>(global0.x, global0.x)))));
                var var_1 = Struct_1(u_input.d.zww | min(u_input.d.wyy, abs(vec3<i32>(u_input.b, -23604i, global3[_wgslsmith_index_u32(global1.x, 1u)]))), -u_input.d.xyz);
            }
            case -29152i: {
                global1 = vec2<u32>(58251u, abs(_wgslsmith_dot_vec3_u32(firstTrailingBit(vec3<u32>(41767u, u_input.a.x, 4294967295u)), vec3<u32>(~41649u, abs(var_0.x), _wgslsmith_mod_u32(4294967295u, global1.x)))));
                return;
            }
            default: {
                var var_1 = func_2(all(select(!vec4<bool>(global0.x, false, true, global0.x), !vec4<bool>(global0.x, false, false, global0.x), abs(global1.x) >= _wgslsmith_sub_u32(global2[_wgslsmith_index_u32(38789u, 29u)], var_0.x))));
                var_1 = func_2(_wgslsmith_div_f32(_wgslsmith_f_op_f32(1868f - _wgslsmith_f_op_f32(-661f)), _wgslsmith_div_f32(_wgslsmith_f_op_f32(floor(1297f)), _wgslsmith_f_op_f32(f32(-1f) * -2089f))) > _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(_wgslsmith_div_f32(416f, 328f)))));
                let var_2 = vec4<bool>(_wgslsmith_add_i32(-(~global3[_wgslsmith_index_u32(u_input.a.x, 1u)]), global3[_wgslsmith_index_u32(~4294967295u & ~var_0.x, 1u)]) > global3[_wgslsmith_index_u32(~(~abs(0u)), 1u)], global0.x & true, !global0.x, true);
            }
        }
    }
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(-947f))))), u_input.b);
}

`;