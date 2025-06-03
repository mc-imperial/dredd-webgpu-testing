export const input = [33,50,99,126,151,127,116,157,58,237,150,120,60,117,180,104,0,36,208,152,217,242,149,230,113,252,136,133,220,68,98,241,57,44,164,253,198,167,80,68,151,110,33,16,5,168,195,62,110,10,200,47,176,75,204,237,214,120,213,14,110,49,203,165,144,23,188,93,26,229,70,60,100,62,0,225,231,130,221,57];
export const expected = [33,50,99,126,151,127,116,157,58,237,150,120,60,117,180,104,0,36,208,152,217,242,149,230,113,252,136,133,220,68,98,241,57,44,164,253,198,167,80,68,151,110,33,16,5,168,195,62,110,10,200,47,176,75,204,237,214,120,213,14,110,49,203,165,144,23,188,93,26,229,70,60,100,62,0,225,231,130,221,57];
export const shaderCode = ` 
 // {"0:0":[33,50,99,126,151,127,116,157,58,237,150,120,60,117,180,104,0,36,208,152,217,242,149,230,113,252,136,133,220,68,98,241,57,44,164,253,198,167,80,68,151,110,33,16,5,168,195,62,110,10,200,47,176,75,204,237,214,120,213,14,110,49,203,165,144,23,188,93,26,229,70,60,100,62,0,225,231,130,221,57]}
// Seed: 7220425219391362161

struct Struct_1 {
    a: vec2<u32>,
    b: u32,
}

struct Struct_2 {
    a: vec2<f32>,
}

struct UniformBuffer {
    a: u32,
    b: vec4<u32>,
    c: u32,
    d: vec4<i32>,
    e: vec3<u32>,
}

struct StorageBuffer {
    a: f32,
    b: u32,
}

@group(0)
@binding(0)
var<uniform> u_input: UniformBuffer;

@group(0)
@binding(1)
var<storage, read_write> s_output: StorageBuffer;

var<private> global0: vec3<bool>;

var<private> global1: array<f32, 30> = array<f32, 30>(-1742f, -171f, -533f, -1000f, 1535f, 1662f, 1215f, -1000f, -2488f, -2281f, 300f, 1261f, 934f, 1434f, 996f, -1026f, -1056f, -278f, -588f, -1657f, 987f, 777f, 266f, -105f, -101f, 233f, -589f, -1000f, 219f, -1751f);

var<private> global2: array<i32, 10>;

var<private> global3: vec3<f32>;

var<private> LOOP_COUNTERS: array<u32, 19>;

fn _wgslsmith_index_u32(index: u32, size: u32) -> u32 {
    return index % size;
}

fn _wgslsmith_clamp_vec2_u32(e: vec2<u32>, low: vec2<u32>, high: vec2<u32>) -> vec2<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_mult_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a * b, a, ((b[0i] != 0u) && (a[0i] > (4294967295u / b[0i]))) || ((b[1i] != 0u) && (a[1i] > (4294967295u / b[1i]))));
}

fn _wgslsmith_dot_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> u32 {
    return dot(clamp(a, vec4<u32>(0u), vec4<u32>(32767u)), clamp(b, vec4<u32>(0u), vec4<u32>(32767u)));
}

fn _wgslsmith_div_u32(a: u32, b: u32) -> u32 {
    return select(a / b, a / u32(2u), b == 0u);
}

fn _wgslsmith_f_op_vec4_f32(v: vec4<f32>) -> vec4<f32> {
    return select(v, vec4<f32>(10f), any(abs(v) < vec4<f32>(0.1f)) || any(abs(v) >= vec4<f32>(16777216f)));
}

fn _wgslsmith_add_i32(a: i32, b: i32) -> i32 {
    return select(a + b, a, ((b > 0i) && (a > (2147483647i - b))) || ((b < 0i) && (a < (i32(-2147483648) - b))));
}

fn _wgslsmith_div_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> vec2<u32> {
    return select(a / b, a / vec2<u32>(2u), (b[0i] == 0u) || (b[1i] == 0u));
}

fn _wgslsmith_f_op_f32(v: f32) -> f32 {
    return select(v, f32(10f), (abs(v) < f32(0.1f)) || (abs(v) >= f32(16777216f)));
}

fn _wgslsmith_div_f32(a: f32, b: f32) -> f32 {
    return select(f32(42f), f32(-123f), abs(a / b) > abs(a));
}

fn _wgslsmith_mod_u32(a: u32, b: u32) -> u32 {
    return select(a % b, a, b == 0u);
}

fn _wgslsmith_add_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a + b, a, a > (vec3<u32>(4294967295u) - b));
}

fn _wgslsmith_sub_vec4_u32(a: vec4<u32>, b: vec4<u32>) -> vec4<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_add_u32(a: u32, b: u32) -> u32 {
    return select(a + b, a, a > (u32(4294967295u) - b));
}

fn _wgslsmith_div_vec2_f32(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return select(vec2<f32>(42f), vec2<f32>(-123f), (abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i])));
}

fn _wgslsmith_mod_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a % b, a, ((b[0i] == 0u) || (b[1i] == 0u)) || (b[2i] == 0u));
}

fn _wgslsmith_clamp_vec4_u32(e: vec4<u32>, low: vec4<u32>, high: vec4<u32>) -> vec4<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> vec3<u32> {
    return select(a - b, a, a < b);
}

fn _wgslsmith_f_op_vec3_f32(v: vec3<f32>) -> vec3<f32> {
    return select(v, vec3<f32>(10f), any(abs(v) < vec3<f32>(0.1f)) || any(abs(v) >= vec3<f32>(16777216f)));
}

fn _wgslsmith_dot_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> i32 {
    return dot(clamp(a, vec2<i32>(-32767i), vec2<i32>(32767i)), clamp(b, vec2<i32>(-32767i), vec2<i32>(32767i)));
}

fn _wgslsmith_div_vec2_i32(a: vec2<i32>, b: vec2<i32>) -> vec2<i32> {
    return select(a / b, a / vec2<i32>(2i), (((a[0i] == i32(-2147483648)) && (b[0i] == -1i)) || (b[0i] == 0i)) || (((a[1i] == i32(-2147483648)) && (b[1i] == -1i)) || (b[1i] == 0i)));
}

fn _wgslsmith_sub_u32(a: u32, b: u32) -> u32 {
    return select(a - b, a, a < b);
}

fn _wgslsmith_mult_u32(a: u32, b: u32) -> u32 {
    return select(a * b, a, (b != 0u) && (a > (4294967295u / b)));
}

fn _wgslsmith_dot_vec3_u32(a: vec3<u32>, b: vec3<u32>) -> u32 {
    return dot(clamp(a, vec3<u32>(0u), vec3<u32>(37837u)), clamp(b, vec3<u32>(0u), vec3<u32>(37837u)));
}

fn _wgslsmith_clamp_u32(e: u32, low: u32, high: u32) -> u32 {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_sub_i32(a: i32, b: i32) -> i32 {
    return select(a - b, a, ((b < 0i) && (a > (2147483647i + b))) || ((b > 0i) && (a < (i32(-2147483648) + b))));
}

fn _wgslsmith_f_op_vec2_f32(v: vec2<f32>) -> vec2<f32> {
    return select(v, vec2<f32>(10f), any(abs(v) < vec2<f32>(0.1f)) || any(abs(v) >= vec2<f32>(16777216f)));
}

fn _wgslsmith_clamp_vec3_u32(e: vec3<u32>, low: vec3<u32>, high: vec3<u32>) -> vec3<u32> {
    return select(clamp(e, low, high), clamp(e, high, low), low > high);
}

fn _wgslsmith_dot_vec2_u32(a: vec2<u32>, b: vec2<u32>) -> u32 {
    return dot(clamp(a, vec2<u32>(0u), vec2<u32>(46340u)), clamp(b, vec2<u32>(0u), vec2<u32>(46340u)));
}

fn _wgslsmith_dot_vec4_i32(a: vec4<i32>, b: vec4<i32>) -> i32 {
    return dot(clamp(a, vec4<i32>(-23170i), vec4<i32>(23170i)), clamp(b, vec4<i32>(-23170i), vec4<i32>(23170i)));
}

fn _wgslsmith_div_vec3_f32(a: vec3<f32>, b: vec3<f32>) -> vec3<f32> {
    return select(vec3<f32>(42f), vec3<f32>(-123f), ((abs(a[0i] / b[0i]) > abs(a[0i])) || (abs(a[1i] / b[1i]) > abs(a[1i]))) || (abs(a[2i] / b[2i]) > abs(a[2i])));
}

fn func_4(arg_0: Struct_1, arg_1: u32, arg_2: u32) -> Struct_1 {
    return Struct_1(u_input.b.yw, ~arg_2);
}

fn func_6(arg_0: Struct_2) -> vec3<bool> {
    var var_0 = vec4<f32>(311f, -815f, 1528f, arg_0.a.x);
    if (global0.x) {
        var var_1 = func_4(func_4(func_4(Struct_1(firstTrailingBit(vec2<u32>(u_input.a, 41097u)), u_input.c), 4294967295u, ~1u), 1u, 18236u), 0u, 4294967295u);
        var var_2 = false;
        let var_3 = ~_wgslsmith_dot_vec3_u32(vec3<u32>(4294967295u, 12053u, ~_wgslsmith_mod_u32(57720u, var_1.b)), _wgslsmith_clamp_vec3_u32(vec3<u32>(select(30736u, u_input.a, global0.x), 70304u, 0u), select(~vec3<u32>(u_input.a, var_1.a.x, u_input.e.x), _wgslsmith_add_vec3_u32(vec3<u32>(49647u, u_input.b.x, 12913u), vec3<u32>(var_1.a.x, 1u, var_1.b)), !global0.x), ~u_input.e));
        global0 = vec3<bool>(all(vec3<bool>(false, all(global0.yz), var_3 < _wgslsmith_div_u32(var_3, 83715u))), true != all(!select(vec3<bool>(global0.x, true, global0.x), vec3<bool>(false, global0.x, global0.x), vec3<bool>(global0.x, false, false))), select(!any(vec3<bool>(false, global0.x, global0.x)), false, min(var_3, reverseBits(92121u)) == 1u));
        let var_4 = func_4(func_4(func_4(func_4(Struct_1(u_input.b.zy, var_3), _wgslsmith_clamp_u32(u_input.e.x, u_input.a, var_3), 45476u), 1u & firstLeadingBit(var_3), ~var_3 ^ 1u), 0u, ~4294967295u), var_1.b, _wgslsmith_add_u32(var_1.b, 23235u));
    }
    loop {
        if (LOOP_COUNTERS[0u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[0u] = LOOP_COUNTERS[0u] + 1u;
        continue;
    }
    var var_1 = vec4<bool>(all(vec2<bool>(global0.x, !all(vec3<bool>(global0.x, false, global0.x)))), true, global0.x, true);
    switch (global2[_wgslsmith_index_u32(firstTrailingBit(_wgslsmith_dot_vec2_u32(vec2<u32>(46776u, 1u) | u_input.e.yy, u_input.b.wx)), 10u)] >> (1u % 32u)) {
        default: {
        }
    }
    return select(select(!vec3<bool>(true, global0.x, true), vec3<bool>(true, (13801i == u_input.d.x) && (u_input.e.x > u_input.a), all(vec4<bool>(global0.x, var_1.x, true, false))), global0.x), vec3<bool>(var_1.x, any(!vec4<bool>(var_1.x, false, global0.x, false)), all(vec4<bool>(true & global0.x, false, any(vec2<bool>(var_1.x, global0.x)), global0.x))), vec3<bool>(all(select(!vec4<bool>(var_1.x, global0.x, global0.x, global0.x), !vec4<bool>(global0.x, false, global0.x, var_1.x), !vec4<bool>(var_1.x, false, true, true))), true, true));
}

fn func_5(arg_0: vec2<i32>, arg_1: Struct_1) -> vec2<f32> {
    if (global0.x) {
        for (var var_0 = -55371i; ; var_0 += 1i) {
            if (LOOP_COUNTERS[1u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[1u] = LOOP_COUNTERS[1u] + 1u;
            break;
        }
        loop {
            if (LOOP_COUNTERS[2u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[2u] = LOOP_COUNTERS[2u] + 1u;
            global0 = select(select(!vec3<bool>(true, global0.x, false), !(!func_6(Struct_2(global3.xy))), !vec3<bool>(true, true, global0.x)), func_6(Struct_2(_wgslsmith_f_op_vec2_f32(-vec2<f32>(1402f, global3.x)))), reverseBits(global2[_wgslsmith_index_u32(arg_1.a.x, 10u)]) >= 2628i);
            global0 = !vec3<bool>(global0.x, global3.x != -1000f, global0.x);
            let var_0 = Struct_2(global3.xx);
        }
        loop {
            if (LOOP_COUNTERS[3u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[3u] = LOOP_COUNTERS[3u] + 1u;
            var var_0 = Struct_1(_wgslsmith_div_vec2_u32(vec2<u32>(~arg_1.a.x, min(57592u, 22870u)), arg_1.a) << (select(_wgslsmith_clamp_vec2_u32(arg_1.a, max(vec2<u32>(37784u, 65359u), u_input.e.yx), ~u_input.b.xx), ~(~u_input.e.zz), true) % vec2<u32>(32u)), _wgslsmith_dot_vec4_u32(~u_input.b, vec4<u32>(67297u, u_input.b.x, select(u_input.b.x, u_input.b.x, true), 1u)) & arg_1.a.x);
            break;
        }
        var var_0 = func_4(Struct_1(min(arg_1.a, select(~arg_1.a, vec2<u32>(9400u, u_input.e.x), select(global0.yy, global0.yz, true))), 1u), _wgslsmith_mod_u32(~(~abs(u_input.a)), abs(_wgslsmith_mult_u32(arg_1.a.x, arg_1.b)) << (~1u % 32u)), _wgslsmith_sub_u32(reverseBits(16886u), ~(~(~arg_1.b))));
        switch (~(i32(-1i) * -9039i)) {
            case 1i: {
                var var_1 = arg_1;
                global2 = array<i32, 10>();
                return _wgslsmith_f_op_vec2_f32(-global3.zz);
            }
            default: {
                var var_1 = Struct_2(_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-global3.yx) * _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(global3.yx + vec2<f32>(global1[_wgslsmith_index_u32(var_0.a.x, 30u)], global3.x)) - _wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(vec2<f32>(global1[_wgslsmith_index_u32(u_input.a, 30u)], 596f) + vec2<f32>(1205f, global3.x)) - _wgslsmith_f_op_vec2_f32(vec2<f32>(global1[_wgslsmith_index_u32(0u, 30u)], 620f) - vec2<f32>(-1522f, global3.x))))));
                let var_2 = func_4(arg_1, 14321u & firstLeadingBit(~_wgslsmith_dot_vec4_u32(vec4<u32>(3594u, 1u, 0u, u_input.c), vec4<u32>(4294967295u, 51955u, u_input.c, 0u))), ~16300u);
                global1 = array<f32, 30>();
                let var_3 = global2[_wgslsmith_index_u32(1u, 10u)];
                let var_4 = _wgslsmith_f_op_vec3_f32(select(_wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_div_f32(1000f, -1121f), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(round(-1238f)) + 1771f), _wgslsmith_f_op_f32(select(_wgslsmith_f_op_f32(-global1[_wgslsmith_index_u32(var_0.b, 30u)]), 1f, -1180f >= global1[_wgslsmith_index_u32(66346u, 30u)])))), vec3<f32>(_wgslsmith_f_op_f32(ceil(global3.x)), -1435f, _wgslsmith_f_op_f32(-_wgslsmith_div_f32(global1[_wgslsmith_index_u32(arg_1.a.x, 30u)], _wgslsmith_f_op_f32(global3.x - 523f)))), false));
            }
        }
    }
    let var_0 = select(select(vec4<bool>(any(!vec4<bool>(global0.x, false, global0.x, global0.x)), global0.x, func_6(Struct_2(vec2<f32>(global1[_wgslsmith_index_u32(60773u, 30u)], global3.x))).x, true), vec4<bool>(func_6(Struct_2(global3.yx)).x & global0.x, select(global0.x, global3.x <= global1[_wgslsmith_index_u32(1u, 30u)], any(vec3<bool>(global0.x, global0.x, true))), 27481u >= _wgslsmith_mult_u32(u_input.a, 0u), global0.x), vec4<bool>(true, all(select(global0.yy, vec2<bool>(global0.x, global0.x), global0.x)), any(vec4<bool>(global0.x, global0.x, false, true)), (false || global0.x) & (global0.x || true))), select(!vec4<bool>(false, true, true, all(vec3<bool>(global0.x, global0.x, global0.x))), select(vec4<bool>(!global0.x, false, all(vec4<bool>(true, global0.x, false, global0.x)), all(global0.xx)), vec4<bool>(true, true, false, select(global0.x, false, false)), !select(vec4<bool>(false, global0.x, true, true), vec4<bool>(false, false, global0.x, true), global0.x)), !any(vec4<bool>(global0.x, true, false, false))), select(vec4<bool>(global0.x, global0.x, arg_0.x == (i32(-1i) * -1i), global0.x), select(select(select(vec4<bool>(global0.x, global0.x, false, false), vec4<bool>(global0.x, true, global0.x, false), false), vec4<bool>(true, global0.x, true, true), true), select(vec4<bool>(false, false, global0.x, global0.x), !vec4<bool>(global0.x, global0.x, false, true), any(vec4<bool>(global0.x, true, global0.x, global0.x))), !(!vec4<bool>(global0.x, global0.x, true, true))), vec4<bool>(true, true, true, true)));
    global1 = array<f32, 30>();
    for (var var_1 = 2147483647i; global0.x; var_1 -= 1i) {
        if (LOOP_COUNTERS[4u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[4u] = LOOP_COUNTERS[4u] + 1u;
    }
    return _wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(_wgslsmith_f_op_vec2_f32(-global3.yy) - _wgslsmith_f_op_vec2_f32(-vec2<f32>(_wgslsmith_f_op_f32(-global1[_wgslsmith_index_u32(4161u, 30u)]), global3.x))));
}

fn func_7(arg_0: Struct_2, arg_1: Struct_2) -> Struct_1 {
    global1 = array<f32, 30>();
    var var_0 = ~_wgslsmith_dot_vec3_u32(u_input.e, vec3<u32>(_wgslsmith_mult_u32(u_input.b.x, 21583u), u_input.a, select(u_input.b.x, u_input.e.x, global0.x))) << (firstLeadingBit(u_input.c) % 32u);
    loop {
        if (LOOP_COUNTERS[5u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[5u] = LOOP_COUNTERS[5u] + 1u;
        let var_1 = _wgslsmith_sub_u32(func_4(Struct_1(vec2<u32>(11350u, 19118u), ~u_input.a), u_input.a, u_input.c).a.x << (3251u % 32u), _wgslsmith_mult_u32(1u, 74000u & u_input.c));
        var var_2 = arg_0;
    }
    var var_1 = Struct_2(_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(-_wgslsmith_f_op_vec2_f32(step(_wgslsmith_f_op_vec2_f32(step(vec2<f32>(global3.x, -162f), vec2<f32>(-1264f, arg_1.a.x))), _wgslsmith_f_op_vec2_f32(-arg_0.a))))));
    if (true) {
        let var_2 = u_input.e;
    }
    return func_4(Struct_1(u_input.b.zz, 0u), firstLeadingBit(13620u), 47349u);
}

fn func_3() -> f32 {
    var var_0 = func_7(Struct_2(global3.yz), Struct_2(_wgslsmith_div_vec2_f32(_wgslsmith_f_op_vec2_f32(func_5(vec2<i32>(-20643i, -1076i) & u_input.d.zx, func_4(Struct_1(vec2<u32>(4294967295u, 40311u), 1u), 1u, 0u))), vec2<f32>(_wgslsmith_f_op_f32(917f - 106f), -1234f))));
    loop {
        if (LOOP_COUNTERS[6u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[6u] = LOOP_COUNTERS[6u] + 1u;
        var var_1 = _wgslsmith_dot_vec4_u32(u_input.b, _wgslsmith_clamp_vec4_u32(~(~firstTrailingBit(vec4<u32>(u_input.a, 1u, u_input.b.x, u_input.b.x))), _wgslsmith_sub_vec4_u32(u_input.b, u_input.b), ~(~(vec4<u32>(u_input.b.x, 0u, u_input.b.x, var_0.b) ^ vec4<u32>(var_0.a.x, u_input.c, 1u, 29985u)))));
        if (true) {
            let var_2 = Struct_2(_wgslsmith_f_op_vec2_f32(select(_wgslsmith_f_op_vec2_f32(-global3.zy), vec2<f32>(_wgslsmith_div_f32(-962f, _wgslsmith_f_op_f32(-global1[_wgslsmith_index_u32(1u, 30u)])), _wgslsmith_f_op_f32(793f - global3.x)), true)));
            let var_3 = _wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(sign(_wgslsmith_f_op_vec3_f32(-vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -2327f), _wgslsmith_f_op_f32(-440f), 154f)))), _wgslsmith_f_op_vec3_f32(sign(_wgslsmith_div_vec3_f32(_wgslsmith_f_op_vec3_f32(min(_wgslsmith_f_op_vec3_f32(vec3<f32>(1547f, global3.x, global1[_wgslsmith_index_u32(var_0.b, 30u)]) - vec3<f32>(-1295f, global3.x, global3.x)), _wgslsmith_f_op_vec3_f32(-vec3<f32>(-779f, var_2.a.x, var_2.a.x)))), _wgslsmith_f_op_vec3_f32(vec3<f32>(172f, 1000f, global3.x) - _wgslsmith_f_op_vec3_f32(trunc(vec3<f32>(-1000f, 301f, 134f))))))));
        }
        loop {
            if (LOOP_COUNTERS[7u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[7u] = LOOP_COUNTERS[7u] + 1u;
            break;
        }
    }
    loop {
        if (LOOP_COUNTERS[8u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[8u] = LOOP_COUNTERS[8u] + 1u;
    }
    let var_1 = _wgslsmith_clamp_vec3_u32(_wgslsmith_mod_vec3_u32(vec3<u32>(1u, var_0.a.x, _wgslsmith_mod_u32(4294967295u ^ var_0.b, u_input.a)), select(firstLeadingBit(firstLeadingBit(u_input.b.wxz)), u_input.e, select(!vec3<bool>(global0.x, global0.x, false), vec3<bool>(true, true, true), global0.x & true))), _wgslsmith_sub_vec3_u32(max(vec3<u32>(var_0.a.x, 4294967295u, _wgslsmith_mult_u32(u_input.a, u_input.b.x)), vec3<u32>(_wgslsmith_div_u32(var_0.b, var_0.b), u_input.c, u_input.e.x)), ~u_input.e), reverseBits(vec3<u32>(var_0.b, _wgslsmith_mult_u32(u_input.e.x | u_input.a, var_0.a.x), var_0.b)));
    loop {
        if (LOOP_COUNTERS[9u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[9u] = LOOP_COUNTERS[9u] + 1u;
        switch (-firstLeadingBit(i32(-1i) * -1i)) {
            case 1i: {
                break;
            }
            case 0i: {
            }
            default: {
                return global3.x;
            }
        }
        continue;
    }
    return _wgslsmith_f_op_f32(-1000f * _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(f32(-1f) * -1097f)));
}

fn func_2(arg_0: Struct_2, arg_1: Struct_2) -> bool {
    let var_0 = global0.x;
    for (var var_1 = 2147483647i; ((global2[_wgslsmith_index_u32(6944u, 10u)] | global2[_wgslsmith_index_u32(44608u, 10u)]) != 45936i) && false; global3 = vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(min(global3.x, -1583f))), _wgslsmith_f_op_f32(global3.x + _wgslsmith_f_op_f32(-_wgslsmith_div_f32(arg_1.a.x, _wgslsmith_f_op_f32(exp2(global1[_wgslsmith_index_u32(39217u, 30u)]))))), arg_0.a.x)) {
        if (LOOP_COUNTERS[10u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[10u] = LOOP_COUNTERS[10u] + 1u;
        let var_2 = ~u_input.b;
        var var_3 = vec4<f32>(arg_1.a.x, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(step(1959f, -2057f)))) - _wgslsmith_f_op_f32(-124f * _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(global3.x - 275f) - -486f))), _wgslsmith_f_op_f32(select(-281f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(exp2(global1[_wgslsmith_index_u32(10040u, 30u)]))) + -601f), false)), _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(ceil(global1[_wgslsmith_index_u32(min(0u, 65106u), 30u)])) + _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(trunc(global1[_wgslsmith_index_u32(4294967295u, 30u)])))) - _wgslsmith_f_op_f32(164f - _wgslsmith_f_op_f32(-global3.x)))));
        continue;
    }
    var var_1 = -521i;
    switch (select(0i, u_input.d.x, global0.x)) {
        case 2332i: {
            var var_2 = arg_1;
            let var_3 = u_input.a;
            loop {
                if (LOOP_COUNTERS[11u] >= 1u) {
                    break;
                }
                (LOOP_COUNTERS)[11u] = LOOP_COUNTERS[11u] + 1u;
                continue;
            }
            global3 = _wgslsmith_f_op_vec3_f32(-vec3<f32>(global1[_wgslsmith_index_u32(1u, 30u)], _wgslsmith_div_f32(_wgslsmith_f_op_f32(func_3()), _wgslsmith_f_op_f32(512f + _wgslsmith_f_op_f32(min(-792f, arg_1.a.x)))), _wgslsmith_div_f32(949f, -397f)));
        }
        case -1i: {
            global3 = _wgslsmith_f_op_vec3_f32(vec3<f32>(_wgslsmith_f_op_f32(f32(-1f) * -710f), _wgslsmith_f_op_f32(exp2(_wgslsmith_f_op_f32(-arg_1.a.x))), -2868f) + vec3<f32>(519f, 437f, _wgslsmith_f_op_f32(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(671f - global3.x) + 1414f) + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(global3.x * global1[_wgslsmith_index_u32(132474u, 30u)])))));
        }
        case 11029i: {
            var var_2 = abs(~(~u_input.e));
            let var_3 = arg_0;
        }
        case 1017i: {
        }
        default: {
        }
    }
    let var_2 = 12349i;
    return true;
}

fn func_1(arg_0: vec3<u32>, arg_1: bool, arg_2: Struct_2) -> bool {
    let var_0 = _wgslsmith_f_op_f32(step(_wgslsmith_f_op_f32(_wgslsmith_f_op_f32(-326f) + _wgslsmith_f_op_f32(-global3.x)), global3.x));
    loop {
        if (LOOP_COUNTERS[12u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[12u] = LOOP_COUNTERS[12u] + 1u;
        if (false) {
            var var_1 = true;
            let var_2 = 1u;
            return arg_1;
        }
        global0 = select(vec3<bool>(1i >= (~u_input.d.x ^ _wgslsmith_add_i32(global2[_wgslsmith_index_u32(arg_0.x, 10u)], u_input.d.x)), true, func_2(Struct_2(_wgslsmith_f_op_vec2_f32(exp2(vec2<f32>(394f, arg_2.a.x)))), Struct_2(_wgslsmith_div_vec2_f32(global3.zz, arg_2.a)))), vec3<bool>(global0.x, global0.x, global0.x), any(select(global0.yy, !global0.yz, func_6(arg_2).xz)));
    }
    global1 = array<f32, 30>();
    global3 = vec3<f32>(_wgslsmith_f_op_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-global3.x), _wgslsmith_div_f32(global1[_wgslsmith_index_u32(35319u, 30u)], global3.x)) * _wgslsmith_div_f32(-544f, _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(step(-568f, -466f))))), _wgslsmith_f_op_f32(global3.x + _wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-var_0)))), _wgslsmith_div_f32(_wgslsmith_div_f32(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(global3.x, var_0)), _wgslsmith_f_op_f32(-arg_2.a.x)), _wgslsmith_f_op_f32(floor(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(-global1[_wgslsmith_index_u32(u_input.a, 30u)]))))));
    let var_1 = _wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(vec4<f32>(-1237f, global3.x, -1000f, var_0) + _wgslsmith_f_op_vec4_f32(floor(vec4<f32>(217f, global3.x, -1216f, global1[_wgslsmith_index_u32(arg_0.x, 30u)]))))))))));
    return any(vec3<bool>(true, true, true));
}

@compute
@workgroup_size(1)
fn main() {
    loop {
        if (LOOP_COUNTERS[13u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[13u] = LOOP_COUNTERS[13u] + 1u;
        if (any(!global0.zy)) {
        }
        if ((global2[_wgslsmith_index_u32(_wgslsmith_mult_u32(abs(u_input.a), _wgslsmith_mod_u32(countOneBits(0u), 0u ^ u_input.e.x)), 10u)] < abs(select(1i, -55428i, func_1(vec3<u32>(39800u, 17846u, 0u), false, Struct_2(vec2<f32>(global3.x, -1000f)))))) && true) {
            var var_0 = Struct_1(vec2<u32>(u_input.e.x, 4294967295u), abs(u_input.a));
            break;
        }
        if (global0.x) {
        }
        for (var var_0 = 2147483647i; global0.x; global1 = array<f32, 30>()) {
            if (LOOP_COUNTERS[14u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[14u] = LOOP_COUNTERS[14u] + 1u;
            let var_1 = _wgslsmith_sub_i32(8259i, firstTrailingBit(-_wgslsmith_dot_vec4_i32(reverseBits(u_input.d), u_input.d)));
            var var_2 = func_4(Struct_1(vec2<u32>((u_input.e.x ^ 84152u) << (57682u % 32u), ~1u), ~abs(u_input.a << (u_input.b.x % 32u))), abs(min(_wgslsmith_div_u32(_wgslsmith_add_u32(0u, u_input.b.x), u_input.e.x), max(0u, _wgslsmith_dot_vec2_u32(vec2<u32>(26984u, u_input.c), u_input.b.xy)))), ~(~reverseBits(1u)));
            var var_3 = ~firstTrailingBit(4294967295u) | firstLeadingBit(func_4(Struct_1(var_2.a, 7445u), 1u, ~1u).a.x | ~var_2.a.x);
        }
    }
    loop {
        if (LOOP_COUNTERS[15u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[15u] = LOOP_COUNTERS[15u] + 1u;
    }
    loop {
        if (LOOP_COUNTERS[16u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[16u] = LOOP_COUNTERS[16u] + 1u;
        var var_0 = Struct_1(_wgslsmith_mult_vec2_u32(func_7(Struct_2(global3.zy), Struct_2(vec2<f32>(-335f, -992f))).a, u_input.b.zz), u_input.c);
        let var_1 = Struct_2(_wgslsmith_div_vec2_f32(global3.xx, _wgslsmith_f_op_vec2_f32(min(vec2<f32>(_wgslsmith_f_op_f32(trunc(-956f)), _wgslsmith_f_op_f32(f32(-1f) * -151f)), _wgslsmith_div_vec2_f32(global3.xz, _wgslsmith_f_op_vec2_f32(-global3.xz))))));
        continue;
    }
    if (!(!global0.x)) {
        global3 = vec3<f32>(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(abs(_wgslsmith_f_op_f32(-_wgslsmith_f_op_f32(global3.x - 709f))))), global3.x, _wgslsmith_f_op_f32(select(278f, 648f, true)));
        global2 = array<i32, 10>();
    }
    loop {
        if (LOOP_COUNTERS[17u] >= 1u) {
            break;
        }
        (LOOP_COUNTERS)[17u] = LOOP_COUNTERS[17u] + 1u;
        switch (global2[_wgslsmith_index_u32(abs(18879u), 10u)]) {
            case -22139i: {
                continue;
            }
            default: {
                var var_0 = _wgslsmith_f_op_f32(-1799f);
                continue;
            }
        }
        var var_0 = Struct_2(_wgslsmith_f_op_vec2_f32(select(global3.yy, vec2<f32>(1248f, _wgslsmith_div_f32(global1[_wgslsmith_index_u32(~57809u, 30u)], global3.x)), vec2<bool>(true, select(false, true, true)))));
        for (; ~(~(~_wgslsmith_dot_vec3_u32(vec3<u32>(u_input.a, 0u, u_input.b.x), vec3<u32>(u_input.b.x, 115356u, u_input.b.x)))) <= select(u_input.e.x, u_input.e.x, all(vec3<bool>(all(vec2<bool>(global0.x, global0.x)), all(vec3<bool>(true, global0.x, global0.x)), all(vec2<bool>(false, global0.x))))); ) {
            if (LOOP_COUNTERS[18u] >= 1u) {
                break;
            }
            (LOOP_COUNTERS)[18u] = LOOP_COUNTERS[18u] + 1u;
            var var_1 = vec2<i32>(~min(_wgslsmith_dot_vec2_i32(-u_input.d.ww, _wgslsmith_div_vec2_i32(vec2<i32>(u_input.d.x, u_input.d.x), vec2<i32>(global2[_wgslsmith_index_u32(1u, 10u)], u_input.d.x))), ~(-10068i)), u_input.d.x);
            var var_2 = u_input.b.x;
        }
    }
    let var_0 = _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(select(_wgslsmith_f_op_vec4_f32(step(vec4<f32>(global3.x, global3.x, global1[_wgslsmith_index_u32(u_input.e.x, 30u)], 501f), vec4<f32>(global3.x, -1765f, -256f, 282f))), _wgslsmith_f_op_vec4_f32(max(vec4<f32>(579f, global3.x, global1[_wgslsmith_index_u32(4294967295u, 30u)], 1283f), vec4<f32>(global1[_wgslsmith_index_u32(4294967295u, 30u)], global1[_wgslsmith_index_u32(18843u, 30u)], global3.x, -1580f))), select(vec4<bool>(false, global0.x, global0.x, false), vec4<bool>(true, global0.x, true, global0.x), vec4<bool>(global0.x, global0.x, global0.x, global0.x))))) * _wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(-_wgslsmith_f_op_vec4_f32(-vec4<f32>(-1420f, global1[_wgslsmith_index_u32(55765u, 30u)], -394f, global3.x))) - _wgslsmith_f_op_vec4_f32(sign(_wgslsmith_f_op_vec4_f32(-vec4<f32>(138f, global3.x, global1[_wgslsmith_index_u32(43468u, 30u)], 1621f)))))) - _wgslsmith_f_op_vec4_f32(abs(_wgslsmith_f_op_vec4_f32(ceil(_wgslsmith_f_op_vec4_f32(_wgslsmith_f_op_vec4_f32(vec4<f32>(global3.x, global3.x, global1[_wgslsmith_index_u32(48077u, 30u)], global1[_wgslsmith_index_u32(1u, 30u)]) + vec4<f32>(-450f, 1925f, global1[_wgslsmith_index_u32(0u, 30u)], global3.x)) - _wgslsmith_f_op_vec4_f32(vec4<f32>(global3.x, 690f, global3.x, global3.x) - vec4<f32>(-1252f, -594f, global1[_wgslsmith_index_u32(u_input.a, 30u)], 137f))))))));
    let x = u_input.a;
    s_output = StorageBuffer(_wgslsmith_div_f32(_wgslsmith_f_op_f32(ceil(_wgslsmith_f_op_f32(-_wgslsmith_div_f32(-362f, global3.x)))), -373f), firstLeadingBit(~_wgslsmith_dot_vec2_u32(vec2<u32>(u_input.b.x, 4294967295u), vec2<u32>(u_input.b.x, 4294967295u))) << (20694u % 32u));
}

`;