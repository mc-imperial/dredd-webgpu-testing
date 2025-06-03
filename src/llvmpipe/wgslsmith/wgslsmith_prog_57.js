export const input = [208,106,113,129,191,198,207,77,145,18,70,171,218,35,203,237,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const expected = [208,106,113,129,191,198,207,77,145,18,70,171,218,35,203,237,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const shaderCode = ` 
 // {"0:0":[208,106,113,129,191,198,207,77,145,18,70,171,218,35,203,237]}
// Seed: 17039041108566502482

struct Struct_1 {
    a: vec3<f32>,
}

struct Struct_2 {
    a: u32,
    b: Struct_1,
}

struct UniformBuffer {
    a: vec3<u32>,
}

struct StorageBuffer {
    a: i32,
    b: i32,
    c: vec2<i32>,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: vec3<bool> = vec3<bool>(true, true, true);

var<private> global1: array<u32, 16> = array<u32, 16>(4294967295u, 1u, 0u, 33372u, 0u, 0u, 7695u, 4294967295u, 24561u, 1u, 100067u, 58553u, 1u, 4294967295u, 1u, 0u);

var<private> global2: Struct_1 = Struct_1(vec3<f32>(514f, 462f, 235f));

var<private> global3: array<vec4<f32>, 7>;

var<private> LOOP_COUNTERS: array<u32, 17>;

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a - b, a, ((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_clamp_i32(e: i32, low: i32, high: i32) -> i32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_sub_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a - b, a, (((((b[0i] < 0i) && (a[0i] > (2147483647i + b[0i]))) || ((b[1i] < 0i) && (a[1i] > (2147483647i + b[1i])))) || ((b[2i] < 0i) && (a[2i] > (2147483647i + b[2i])))) || ((b[3i] < 0i) && (a[3i] > (2147483647i + b[3i])))) || (((((b[0i] > 0i) && (a[0i] < (i32(-2147483648) + b[0i]))) || ((b[1i] > 0i) && (a[1i] < (i32(-2147483648) + b[1i])))) || ((b[2i] > 0i) && (a[2i] < (i32(-2147483648) + b[2i])))) || ((b[3i] > 0i) && (a[3i] < (i32(-2147483648) + b[3i])))));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_clamp_vec2_i32(e: vec2<i32>, low: vec2<i32>, high: vec2<i32>) -> vec2<i32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> vec4<i32> {
    return select(a * b, a, ((((((a[0i] == -1i) && (b[0i] == i32(-2147483648))) || ((a[0i] == i32(-2147483648)) && (b[0i] == -1i))) || (((a[1i] == -1i) && (b[1i] == i32(-2147483648))) || ((a[1i] == i32(-2147483648)) && (b[1i] == -1i)))) || (((a[2i] == -1i) && (b[2i] == i32(-2147483648))) || ((a[2i] == i32(-2147483648)) && (b[2i] == -1i)))) || (((a[3i] == -1i) && (b[3i] == i32(-2147483648))) || ((a[3i] == i32(-2147483648)) && (b[3i] == -1i)))) || (((((b[0i] != 0i) && ((a[0i] > (2147483647i / b[0i])) || (a[0i] < (i32(-2147483648) / b[0i])))) || ((b[1i] != 0i) && ((a[1i] > (2147483647i / b[1i])) || (a[1i] < (i32(-2147483648) / b[1i]))))) || ((b[2i] != 0i) && ((a[2i] > (2147483647i / b[2i])) || (a[2i] < (i32(-2147483648) / b[2i]))))) || ((b[3i] != 0i) && ((a[3i] > (2147483647i / b[3i])) || (a[3i] < (i32(-2147483648) / b[3i]))))));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_i32(a: i32, b: i32) -> i32 {
    return select(a * b, a, (((a == -1i) && (b == i32(-2147483648))) || ((a == i32(-2147483648)) && (b == -1i))) || ((b != 0i) && ((a > (2147483647i / b)) || (a < (i32(-2147483648) / b)))));
}

fn _wgslsmith_mod_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a % b, a, (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_mod_i32(a: i32, b: i32) -> i32 {
    return select(a % b, a, (a < 0i) || (b <= 0i));
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_div_i32(a: i32, b: i32) -> i32 {
    return select(a / b, a / i32(2i), ((a == i32(-2147483648)) && (b == -1i)) || (b == 0i));
}

fn _wgslsmith_div_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a / b, a / vec4<u32>(2u), (((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u)) || (b[3i] == 0u));
}

fn _wgslsmith_mod_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> vec3<i32> {
    return select(a % b, a, (((a[0i] < 0i) || (b[0i] <= 0i)) || ((a[1i] < 0i) || (b[1i] <= 0i))) || ((a[2i] < 0i) || (b[2i] <= 0i)));
}

fn _wgslsmith_dot_vec3_i32(a: vec3<i32>, b: vec3<i32>) -> i32 {
    return dot(clamp(a, vec3<i32>(-26754i), vec3<i32>(26754i)), clamp(b, vec3<i32>(-26754i), vec3<i32>(26754i)));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn func_6(arg_0: vec4<bool>, arg_1: Struct_2, arg_2: Struct_1, arg_3: Struct_1) -> vec3<bool> {
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        var var_0 = firstLeadingBit(global1[_wgslsmith_index_u32(_wgslsmith_sub_u32(_wgslsmith_dot_vec2_u32((vec2<u32>(26924u, arg_1.a) ^ vec2<u32>(global1[_wgslsmith_index_u32(20448u, 16u)], u_input.a.x)) << ((vec2<u32>(u_input.a.x, 0u) | vec2<u32>(global1[_wgslsmith_index_u32(0u, 16u)], global1[_wgslsmith_index_u32(u_input.a.x, 16u)])) % vec2<u32>(32u)), vec2<u32>(1u, _wgslsmith_add_u32(83992u, arg_1.a))), ~1u), 16u)]);
        global2 = arg_3;
        var_0 = ~arg_1.a;
    }
    for (var var_0 = 1i; var_0 > 1077i; var_0 -= 1i) {
        if (LOOP_COUNTERS[1u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
        let var_1 = Struct_1(_wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -843f), 2294f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(global2.a.x + 1426f) * _wgslsmith_f_op_f32(f32(-1f) * -1580f)))));
        global1 = array<u32, 16>();
        break;
    }
    for (var var_0 = firstTrailingBit(_wgslsmith_clamp_i32(~countOneBits(1i), reverseBits(1i), 1i)); var_0 <= 1i; ) {
        if (LOOP_COUNTERS[2u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
        var var_1 = arg_3.a.zx;
        loop {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            let var_2 = _wgslsmith_clamp_u32(u_input.a.x, _wgslsmith_mod_u32(6312u, global1[_wgslsmith_index_u32(41733u, 16u)]), max(_wgslsmith_clamp_u32(select(_wgslsmith_dot_vec2_u32(vec2<u32>(4294967295u, u_input.a.x), u_input.a.xx), 1u, false && global0.x), _wgslsmith_div_u32(arg_1.a, u_input.a.x), ~0u), abs(abs(_wgslsmith_mod_u32(arg_1.a, u_input.a.x)))));
        }
        let var_2 = _wgslsmith_dot_vec3_i32(vec3<i32>(~60876i, i32(-1i) * -(~(-1i)), 1i), select(vec3<i32>(1i, ~(~1i), -10897i), vec3<i32>(-2147483647i, 35850i, 1i), arg_0.x));
        var var_3 = var_1.x;
        var var_4 = var_2;
    }
    switch (firstTrailingBit(_wgslsmith_mult_i32(firstTrailingBit(-1i), abs(_wgslsmith_mod_i32(62038i >> (global1[_wgslsmith_index_u32(4294967295u, 16u)] % 32u), min(-51193i, -47721i)))))) {
        case 2147483647i: {
            let var_0 = Struct_1(arg_3.a);
            for (var var_1 = -65319i; !(!all(select(!arg_0.xyx, !vec3<bool>(false, false, global0.x), arg_0.x))); var_1 -= 1i) {
                if (LOOP_COUNTERS[4u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
            }
            let var_1 = arg_1.a;
            let var_2 = Struct_1(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-vec3<f32>(1923f, 1908f, arg_3.a.x))), _wgslsmith_f_op_vec3_f32(exp2(var_0.a))));
        }
        case 32839i: {
            loop {
                if (LOOP_COUNTERS[5u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
                return !select(vec3<bool>(!(arg_0.x && false), true, global0.x), select(vec3<bool>(select(true, true, global0.x), any(vec3<bool>(true, false, true)), true), arg_0.yww, arg_0.wwz), !(!arg_0.zyw));
            }
            for (var var_0 = -(-(~max(1i, 1814i)) >> (~global1[_wgslsmith_index_u32(arg_1.a, 16u)] % 32u)); true; var_0 += 1i) {
                if (LOOP_COUNTERS[6u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
                let var_1 = Struct_1(vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-arg_3.a.x) + _wgslsmith_f_op_f32(f32(-1f) * -614f))), 1218f, _wgslsmith_f_op_f32(-439f * global2.a.x)));
                let var_2 = vec4<bool>(!arg_0.x, (arg_1.a < _wgslsmith_add_u32(u_input.a.x, u_input.a.x)) && true, arg_0.x, false && any(!select(global0.xz, arg_0.yx, global0.yx)));
                var var_3 = Struct_2(countOneBits(~(~abs(4294967295u))), arg_2);
            }
            return select(!vec3<bool>(select(all(vec2<bool>(false, true)), true, true), !any(vec4<bool>(global0.x, true, true, global0.x)), any(vec3<bool>(false, global0.x, true))), vec3<bool>(true, true, !any(vec2<bool>(true, true))), all(!(!arg_0)) | true);
        }
        default: {
            let var_0 = global3[_wgslsmith_index_u32(arg_1.a, 7u)];
            global0 = select(vec3<bool>(any(select(!global0.yy, select(vec2<bool>(false, global0.x), arg_0.zz, arg_0.ww), true)), all(!arg_0.zx), false), !vec3<bool>(true, any(select(arg_0.wwz, arg_0.xwy, vec3<bool>(true, arg_0.x, true))), global0.x), !vec3<bool>(arg_0.x, true, !any(vec4<bool>(global0.x, false, false, true))));
        }
    }
    loop {
        if (LOOP_COUNTERS[7u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
        continue;
    }
    return select(arg_0.xzx, !select(vec3<bool>(arg_0.x || global0.x, true, true & arg_0.x), arg_0.yxy, !arg_0.yxz), arg_0.zyw);
}

fn func_7(arg_0: bool) -> vec3<bool> {
    let var_0 = Struct_2(countOneBits(countOneBits(_wgslsmith_mod_u32(0u, u_input.a.x) >> (_wgslsmith_dot_vec3_u32(vec3<u32>(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(1u, 16u)], 16u)], global1[_wgslsmith_index_u32(1u, 16u)], 1u), vec3<u32>(global1[_wgslsmith_index_u32(0u, 16u)], 4294967295u, 18200u)) % 32u))), Struct_1(vec3<f32>(global2.a.x, global2.a.x, global2.a.x)));
    global3 = array<vec4<f32>, 7>();
    switch (countOneBits(abs(-1i))) {
        case -66966i: {
            switch (_wgslsmith_sub_i32(min(_wgslsmith_dot_vec3_i32(countOneBits(vec3<i32>(2131i, -1i, -39468i)), select(vec3<i32>(23098i, 2147483647i, -12451i), vec3<i32>(72843i, 10795i, 2147483647i), vec3<bool>(arg_0, false, true))), ~_wgslsmith_mult_i32(-1i, -41561i)), 1i) & 2147483647i) {
                case -7444i: {
                    var var_1 = _wgslsmith_f_op_vec3_f32(-global2.a);
                }
                case 1i: {
                    global0 = vec3<bool>(!(_wgslsmith_f_op_f32(f32(-1f) * -658f) > _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(abs(var_0.b.a.x)) + _wgslsmith_f_op_f32(step(-471f, var_0.b.a.x)))), true, ~var_0.a == 68725u);
                    let var_1 = max(0u, ~_wgslsmith_mult_u32(5697u, countOneBits(_wgslsmith_add_u32(30942u, 21872u))));
                    global1 = array<u32, 16>();
                    let var_2 = _wgslsmith_f_op_vec4_f32(step(global3[_wgslsmith_index_u32(_wgslsmith_div_u32(min(u_input.a.x, 89647u), min(var_1, _wgslsmith_mod_u32(firstLeadingBit(4294967295u), ~1u))), 7u)], _wgslsmith_f_op_vec4_f32(floor(_wgslsmith_f_op_vec4_f32(-vec4<f32>(global2.a.x, _wgslsmith_f_op_f32(427f + -815f), _wgslsmith_f_op_f32(trunc(-1190f)), _wgslsmith_f_op_f32(1101f * var_0.b.a.x)))))));
                    let var_3 = _wgslsmith_f_op_vec4_f32(-global3[_wgslsmith_index_u32(reverseBits(abs(0u)), 7u)]);
                }
                case 42419i: {
                    global0 = !func_6(vec4<bool>(true, false, true, all(vec3<bool>(arg_0, false, arg_0))), var_0, Struct_1(global2.a), Struct_1(vec3<f32>(global2.a.x, _wgslsmith_f_op_f32(1678f - var_0.b.a.x), 624f)));
                    global2 = var_0.b;
                    global3 = array<vec4<f32>, 7>();
                    var var_1 = Struct_2(~1u, Struct_1(global2.a));
                }
                default: {
                    let var_1 = false;
                    var var_2 = _wgslsmith_mult_i32(firstTrailingBit(abs(~(i32(-1i) * i32(-2147483648)))), min(_wgslsmith_dot_vec2_i32(-vec2<i32>(i32(-2147483648), 1i), firstTrailingBit(-vec2<i32>(2147483647i, i32(-2147483648)))), 0i));
                }
            }
            if (global2.a.x == _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(737f * global2.a.x)) * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(floor(var_0.b.a.x)) - var_0.b.a.x))) {
            }
            let var_1 = var_0;
        }
        case 0i: {
            var var_1 = Struct_1(_wgslsmith_f_op_vec3_f32(max(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(exp2(var_0.b.a))), var_0.b.a)));
        }
        default: {
        }
    }
    global1 = array<u32, 16>();
    var var_1 = var_0.a;
    return vec3<bool>(func_6(!vec4<bool>(true, true, global0.x, true), var_0, Struct_1(_wgslsmith_f_op_vec3_f32(floor(var_0.b.a))), var_0.b).x, true, true);
}

fn func_5() -> u32 {
    global2 = Struct_1(_wgslsmith_f_op_vec3_f32(-vec3<f32>(-1162f, global2.a.x, _wgslsmith_f_op_f32(floor(global2.a.x)))));
    global2 = Struct_1(vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(_wgslsmith_f_op_f32(176f - 291f), _wgslsmith_f_op_f32(-global2.a.x))), _wgslsmith_f_op_f32(-724f), _wgslsmith_f_op_f32(floor(-691f))));
    global0 = !(!func_7(any(func_6(vec4<bool>(global0.x, true, global0.x, true), Struct_2(0u, Struct_1(vec3<f32>(global2.a.x, global2.a.x, -1195f))), Struct_1(global2.a), Struct_1(global2.a)))));
    let var_0 = !(!(!select(func_7(global0.x), func_6(vec4<bool>(false, global0.x, global0.x, false), Struct_2(u_input.a.x, Struct_1(global2.a)), Struct_1(vec3<f32>(global2.a.x, -144f, -691f)), Struct_1(global2.a)), select(vec3<bool>(global0.x, true, global0.x), vec3<bool>(false, true, global0.x), vec3<bool>(false, false, true)))));
    switch (-47487i) {
        case -1i: {
        }
        case -3264i: {
            var var_1 = ~0u;
        }
        case 6217i: {
            global3 = array<vec4<f32>, 7>();
        }
        case i32(-2147483648): {
            let var_1 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(global2.a.x - 1463f))));
            let var_2 = u_input.a.yy;
            var var_3 = Struct_2(u_input.a.x, Struct_1(_wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(-vec3<f32>(1000f, -1263f, var_1))))))));
            if (!func_6(!vec4<bool>(false, var_0.x, false, false || global0.x), Struct_2(~(var_3.a << (20107u % 32u)), var_3.b), var_3.b, var_3.b).x) {
                let var_4 = var_3.b;
                var var_5 = _wgslsmith_dot_vec3_u32(vec3<u32>(_wgslsmith_div_u32(~42453u, reverseBits(var_3.a)), 16975u, min(4294967295u, var_3.a)), ~u_input.a);
                var var_6 = global0.x;
                let var_7 = _wgslsmith_div_vec4_u32(reverseBits(abs(_wgslsmith_mod_vec4_u32(vec4<u32>(1u, global1[_wgslsmith_index_u32(var_2.x, 16u)], 19058u, 0u), vec4<u32>(u_input.a.x, 41940u, u_input.a.x, global1[_wgslsmith_index_u32(var_3.a, 16u)]) ^ vec4<u32>(var_3.a, 4294967295u, var_2.x, var_2.x)))), vec4<u32>(~min(var_3.a, global1[_wgslsmith_index_u32(100950u, 16u)]) << (~firstLeadingBit(24563u) % 32u), min(var_2.x, global1[_wgslsmith_index_u32((54958u & global1[_wgslsmith_index_u32(1u, 16u)]) & min(u_input.a.x, 0u), 16u)]), ~4294967295u, var_2.x));
                let var_8 = Struct_1(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(vec3<f32>(var_1, -1000f, global2.a.x) + var_4.a))))));
            }
        }
        default: {
            var var_1 = vec2<bool>(global0.x, false);
            global1 = array<u32, 16>();
            if (any(select(vec4<bool>(true, _wgslsmith_clamp_u32(0u, 4294967295u, u_input.a.x) == u_input.a.x, func_7(true).x, ~32428u > u_input.a.x), !(!(!vec4<bool>(var_1.x, var_0.x, var_1.x, var_1.x))), select(var_1.x, true, var_0.x)))) {
                global1 = array<u32, 16>();
                let var_2 = Struct_1(_wgslsmith_f_op_vec3_f32(step(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(trunc(_wgslsmith_f_op_vec3_f32(-vec3<f32>(317f, -532f, global2.a.x))))), _wgslsmith_f_op_vec3_f32(round(_wgslsmith_f_op_vec3_f32(_wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(global2.a.x, 1221f, global2.a.x))) * vec3<f32>(-1015f, global2.a.x, global2.a.x)))))));
                var var_3 = u_input.a.yx;
            }
        }
    }
    return abs(((~0u | global1[_wgslsmith_index_u32(31901u, 16u)]) >> (countOneBits(firstLeadingBit(global1[_wgslsmith_index_u32(u_input.a.x, 16u)])) % 32u)) ^ max(47483u, firstTrailingBit(_wgslsmith_sub_u32(u_input.a.x, global1[_wgslsmith_index_u32(u_input.a.x, 16u)]))));
}

fn func_4() -> u32 {
    var var_0 = _wgslsmith_mult_u32(func_5(), firstLeadingBit(~_wgslsmith_add_u32(~global1[_wgslsmith_index_u32(u_input.a.x, 16u)], ~global1[_wgslsmith_index_u32(1u, 16u)])));
    let var_1 = ~(~vec4<u32>(~26149u, _wgslsmith_dot_vec4_u32(vec4<u32>(64572u, 1u, u_input.a.x, 1u), vec4<u32>(u_input.a.x, 29675u, 105u, 958u)) & 1u, u_input.a.x, 1u));
    var_0 = u_input.a.x;
    let var_2 = Struct_2(abs(_wgslsmith_mod_u32(59423u, 1u)), Struct_1(_wgslsmith_f_op_vec3_f32(ceil(_wgslsmith_f_op_vec3_f32(-_wgslsmith_f_op_vec3_f32(abs(global2.a)))))));
    var var_3 = Struct_2(1u, var_2.b);
    return 14991u;
}

fn func_3() -> Struct_1 {
    let var_0 = _wgslsmith_sub_vec3_i32(vec3<i32>(-max(12619i, -1i), _wgslsmith_add_i32(reverseBits(i32(-2147483648)), firstTrailingBit(_wgslsmith_mod_i32(1i, -17221i))), 1i >> (firstTrailingBit(48224u) % 32u)), vec3<i32>(1i, 1i, 1i));
    loop {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
        let var_1 = Struct_2(func_4(), Struct_1(vec3<f32>(_wgslsmith_f_op_f32(abs(-988f)), _wgslsmith_div_f32(_wgslsmith_f_op_f32(223f * 374f), 644f), global2.a.x)));
    }
    if (global0.x) {
        global3 = array<vec4<f32>, 7>();
        for (; ; ) {
            if (LOOP_COUNTERS[9u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
            global3 = array<vec4<f32>, 7>();
            continue;
        }
        let var_1 = ~((abs(vec4<u32>(0u, 0u, global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(u_input.a.x, 16u)], 16u)], 16u)], 16u)], 31274u)) << (~firstLeadingBit(vec4<u32>(4294967295u, 0u, global1[_wgslsmith_index_u32(4294967295u, 16u)], u_input.a.x)) % vec4<u32>(32u))) | min(vec4<u32>(_wgslsmith_div_u32(global1[_wgslsmith_index_u32(u_input.a.x, 16u)], 46076u), 69775u, _wgslsmith_mult_u32(global1[_wgslsmith_index_u32(59259u, 16u)], u_input.a.x), 34411u >> (1u % 32u)), min(vec4<u32>(global1[_wgslsmith_index_u32(25298u, 16u)], u_input.a.x, global1[_wgslsmith_index_u32(36185u, 16u)], 21311u), countOneBits(vec4<u32>(23594u, u_input.a.x, 4294967295u, u_input.a.x)))));
        var var_2 = Struct_2(u_input.a.x, Struct_1(vec3<f32>(1124f, _wgslsmith_f_op_f32(round(_wgslsmith_f_op_f32(floor(-158f)))), -1146f)));
        switch (_wgslsmith_mult_i32(2147483647i, -(2147483647i | ~(var_0.x & 31691i)))) {
            case -1i: {
            }
            default: {
                global3 = array<vec4<f32>, 7>();
                var var_3 = -341f;
                var var_4 = _wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(652f - _wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(step(global2.a.x, _wgslsmith_f_op_f32(-var_2.b.a.x))))))));
                var_3 = _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(743f + -109f));
            }
        }
    }
    let var_1 = global0.x;
    return Struct_1(_wgslsmith_div_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(-225f, global2.a.x)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-1421f) * -857f), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-887f * global2.a.x))), _wgslsmith_f_op_vec3_f32(abs(vec3<f32>(_wgslsmith_div_f32(global2.a.x, global2.a.x), 233f, _wgslsmith_f_op_f32(global2.a.x * 878f))))));
}

fn func_2(arg_0: i32, arg_1: vec2<bool>, arg_2: Struct_1, arg_3: Struct_2) -> Struct_1 {
    let var_0 = func_3();
    global3 = array<vec4<f32>, 7>();
    let var_1 = vec3<f32>(244f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(max(967f, 613f))), _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-2029f * 567f))));
    let var_2 = _wgslsmith_mult_vec4_i32(~select((vec4<i32>(arg_0, -1i, -26906i, arg_0) & vec4<i32>(1i, arg_0, arg_0, arg_0)) | firstLeadingBit(vec4<i32>(15816i, arg_0, -4321i, arg_0)), max(abs(vec4<i32>(arg_0, arg_0, arg_0, -3473i)), _wgslsmith_sub_vec4_i32(vec4<i32>(0i, arg_0, arg_0, arg_0), vec4<i32>(arg_0, arg_0, 1i, arg_0))), true), vec4<i32>(max(_wgslsmith_clamp_i32(_wgslsmith_div_i32(arg_0, arg_0), _wgslsmith_dot_vec3_i32(vec3<i32>(15994i, 2147483647i, arg_0), vec3<i32>(arg_0, -1i, 52506i)), arg_0), abs(i32(-1i) * -40532i)), arg_0, _wgslsmith_mod_i32(arg_0, _wgslsmith_sub_i32(~arg_0, reverseBits(arg_0))), -63604i));
    for (var var_3 = -1i; !(!(!(!(!arg_1.x)))); global0 = vec3<bool>(-57499i <= _wgslsmith_div_i32(0i >> (select(50017u, u_input.a.x, false) % 32u), 2147483647i), u_input.a.x != global1[_wgslsmith_index_u32(func_5(), 16u)], !(1041f > arg_2.a.x))) {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        break;
    }
    return func_3();
}

fn func_1(arg_0: Struct_1, arg_1: bool, arg_2: i32) -> Struct_2 {
    for (; ; ) {
        if (LOOP_COUNTERS[11u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
        for (var var_0 = 2147483647i; true; var_0 -= 1i) {
            if (LOOP_COUNTERS[12u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        }
    }
    global2 = func_2(arg_2, global0.yx, Struct_1(arg_0.a), Struct_2(u_input.a.x, arg_0));
    let var_0 = arg_0;
    let var_1 = arg_0;
    var var_2 = _wgslsmith_mult_i32(select(i32(-2147483648), _wgslsmith_dot_vec3_i32(countOneBits(_wgslsmith_mod_vec3_i32(vec3<i32>(-30394i, arg_2, 1i), vec3<i32>(arg_2, -64129i, 6886i))), vec3<i32>(~arg_2, -46870i, firstLeadingBit(arg_2))), global0.x), _wgslsmith_dot_vec4_i32(vec4<i32>(8775i, -1i, -_wgslsmith_sub_i32(arg_2, arg_2), -arg_2), _wgslsmith_sub_vec4_i32(vec4<i32>(-51922i, -1i, 15898i, -80180i), abs(vec4<i32>(arg_2, -31383i, i32(-2147483648), arg_2)))));
    return Struct_2(_wgslsmith_mult_u32(~global1[_wgslsmith_index_u32(~4294967295u, 16u)], ~_wgslsmith_div_u32(global1[_wgslsmith_index_u32(_wgslsmith_add_u32(u_input.a.x, 4294967295u), 16u)], func_5())), func_3());
}

fn func_8(arg_0: f32, arg_1: bool, arg_2: f32, arg_3: Struct_2) -> Struct_2 {
    let var_0 = true || arg_1;
    let var_1 = arg_3;
    for (var var_2 = 55947i; ; var_2 -= 1i) {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        global3 = array<vec4<f32>, 7>();
    }
    for (; !all(vec4<bool>(global0.x, global0.x, select(var_0, global0.x, any(vec4<bool>(var_0, global0.x, true, true))), var_0)); ) {
        if (LOOP_COUNTERS[14u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
        global1 = array<u32, 16>();
        global2 = arg_3.b;
        var var_2 = -((~(-1i) >> (func_5() % 32u)) ^ ~countOneBits(-1i)) << (0u % 32u);
        let var_3 = vec2<f32>(func_3().a.x, func_2(1i, select(select(func_7(true).zz, global0.yy, !vec2<bool>(global0.x, global0.x)), global0.xy, true), func_2(8254i, func_6(select(vec4<bool>(false, var_0, arg_1, true), vec4<bool>(true, var_0, var_0, true), false), arg_3, var_1.b, func_2(0i, global0.yx, var_1.b, arg_3)).yx, var_1.b, func_1(func_2(i32(-2147483648), vec2<bool>(true, true), Struct_1(vec3<f32>(107f, 389f, arg_0)), var_1), false && var_0, -17408i)), var_1).a.x);
    }
    global1 = array<u32, 16>();
    return var_1;
}

fn func_9(arg_0: Struct_2, arg_1: Struct_2, arg_2: Struct_1, arg_3: Struct_1) -> u32 {
    if (all(select(global0.xy, global0.yy, false))) {
        for (; ; ) {
            if (LOOP_COUNTERS[15u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
            global3 = array<vec4<f32>, 7>();
            var var_0 = true;
            continue;
        }
        let var_0 = countOneBits(_wgslsmith_dot_vec4_i32(abs(min(-vec4<i32>(2353i, 0i, 0i, 0i), vec4<i32>(0i, 2147483647i, 47330i, 0i))), vec4<i32>(firstTrailingBit(_wgslsmith_add_i32(26194i, 1i)), abs(-57265i), -1i, ~(-30645i))));
    }
    global3 = array<vec4<f32>, 7>();
    global3 = array<vec4<f32>, 7>();
    return ~(~(_wgslsmith_div_u32(~u_input.a.x, 23541u) | ~global1[_wgslsmith_index_u32(46353u, 16u)]));
}

@compute
@workgroup_size(1)
fn main() {
    var var_0 = _wgslsmith_add_u32(~_wgslsmith_mult_u32(_wgslsmith_mult_u32(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(16797u, 16u)], 16u)], 16u)], 91592u), global1[_wgslsmith_index_u32(~0u, 16u)]), u_input.a.x) << (_wgslsmith_mult_u32(~firstTrailingBit(0u), func_9(func_8(_wgslsmith_f_op_f32(-global2.a.x), false || global0.x, _wgslsmith_f_op_f32(f32(-1f) * -1000f), func_1(Struct_1(vec3<f32>(-1769f, global2.a.x, global2.a.x)), true, i32(-2147483648))), func_1(Struct_1(vec3<f32>(global2.a.x, -290f, -264f)), global0.x, 2147483647i), func_8(972f, select(true, true, false), _wgslsmith_f_op_f32(select(global2.a.x, 730f, false)), func_1(Struct_1(vec3<f32>(global2.a.x, 406f, 625f)), global0.x, 46769i)).b, Struct_1(_wgslsmith_f_op_vec3_f32(-global2.a)))) % 32u);
    global0 = vec3<bool>(global0.x, true, any(vec4<bool>(!global0.x, func_5() > 0u, global0.x, any(vec4<bool>(global0.x, global0.x, false, false)))));
    global2 = func_3();
    loop {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        global0 = select(func_7(global0.x), vec3<bool>(global0.x, true, global0.x), !func_7(!any(vec2<bool>(false, global0.x))).x);
        switch (1i) {
            default: {
                global0 = vec3<bool>(true, false, false);
                break;
            }
        }
        continue;
    }
    var var_1 = u_input.a ^ select(u_input.a, u_input.a & u_input.a, func_6(select(!vec4<bool>(global0.x, false, false, true), !vec4<bool>(global0.x, false, false, global0.x), select(vec4<bool>(true, global0.x, false, false), vec4<bool>(global0.x, true, true, global0.x), global0.x)), func_1(func_8(-176f, true, 146f, Struct_2(63810u, Struct_1(vec3<f32>(global2.a.x, global2.a.x, 616f)))).b, !global0.x, -2147483647i), func_3(), func_3()));
    let var_2 = Struct_1(global2.a);
    global0 = !(!(!select(vec3<bool>(global0.x, global0.x, global0.x), func_6(vec4<bool>(true, global0.x, global0.x, true), Struct_2(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(global1[_wgslsmith_index_u32(u_input.a.x, 16u)], 16u)], 16u)], Struct_1(vec3<f32>(var_2.a.x, -670f, -353f))), Struct_1(global2.a), var_2), true)));
    var var_3 = func_1(Struct_1(_wgslsmith_f_op_vec3_f32(exp2(_wgslsmith_f_op_vec3_f32(vec3<f32>(var_2.a.x, 643f, 125f) + global2.a)))), global0.x, select(-1i, i32(-1i) * -(i32(-1i) * -11132i), global0.x));
    var var_4 = _wgslsmith_mult_vec4_i32(firstLeadingBit(vec4<i32>(_wgslsmith_clamp_i32(-7307i, 14948i, 0i) >> (max(78216u, 0u) % 32u), -1i, ~46273i, min(-1i, -51715i))), _wgslsmith_sub_vec4_i32(-firstTrailingBit(vec4<i32>(-1i, -15891i, i32(-2147483648), 918i)), vec4<i32>(~(-1i), select(i32(-2147483648), 10545i, global0.x), 1i, 12263i)) >> (_wgslsmith_sub_vec4_u32(~firstTrailingBit(vec4<u32>(6933u, u_input.a.x, 14932u, 4294967295u)), firstTrailingBit(~vec4<u32>(var_3.a, 1u, var_3.a, global1[_wgslsmith_index_u32(var_1.x, 16u)]))) % vec4<u32>(32u)));
    let x = u_input.a;
    s_output = StorageBuffer(~var_4.x, ((var_4.x | firstTrailingBit(var_4.x)) & var_4.x) | (i32(-1i) * -11332i), _wgslsmith_clamp_vec2_i32(firstTrailingBit(~(-var_4.wz)), var_4.xx, ~(vec2<i32>(-23475i, var_4.x) >> (min(var_1.xz, var_1.xx) % vec2<u32>(32u)))));
}

`;