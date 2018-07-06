let array_0_4: number[] = [0, 1, 2, 3, 4];
let array_5_9: number[] = [5, 6, 7, 8, 9];

// ------------------------------------------------------------------------------------------------------------------ //

let first_array_0_10 = [...array_0_4, ...array_5_9, 10];
console.log(first_array_0_10);

// ------------------------------------------------------------------------------------------------------------------ //

let second_array_0_10 = [...first_array_0_10];
console.log(second_array_0_10);

// ------------------------------------------------------------------------------------------------------------------ //

let array: number[] = [];
array.push(...array_5_9);
array.unshift(...array_0_4);
array.push(10);
console.log(array);

// ------------------------------------------------------------------------------------------------------------------ //

type XY = { x: number, y: number };
type XYZ = XY & { z: number }

let p2d: XY = {x: 1, y: 2};
let p3d: XYZ = {...p2d, z: 3};
console.log(p3d);

// ------------------------------------------------------------------------------------------------------------------ //

let f = function ({y, z}: XYZ) {
    console.log(y);
    console.log(z);
};

f(p3d);

// ------------------------------------------------------------------------------------------------------------------ //

function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

console.log(employeeName);