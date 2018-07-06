var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var array_0_4 = [0, 1, 2, 3, 4];
var array_5_9 = [5, 6, 7, 8, 9];
// ------------------------------------------------------------------------------------------------------------------ //
var first_array_0_10 = array_0_4.concat(array_5_9, [10]);
console.log(first_array_0_10);
// ------------------------------------------------------------------------------------------------------------------ //
var second_array_0_10 = first_array_0_10.slice();
console.log(second_array_0_10);
// ------------------------------------------------------------------------------------------------------------------ //
var array = [];
array.push.apply(array, array_5_9);
array.unshift.apply(array, array_0_4);
array.push(10);
console.log(array);
var p2d = { x: 1, y: 2 };
var p3d = __assign({}, p2d, { z: 3 });
console.log(p3d);
// ------------------------------------------------------------------------------------------------------------------ //
var f = function (_a) {
    var y = _a.y, z = _a.z;
    console.log(y);
    console.log(z);
};
f(p3d);
// ------------------------------------------------------------------------------------------------------------------ //
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
