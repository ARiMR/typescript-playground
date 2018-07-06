// ------------------------------------------------------------------------------------------------------------------ //

let ALPHA = Symbol('ALPHA');

console.log(ALPHA === ALPHA); // true
console.log(ALPHA === Symbol('ALPHA')); // false

// ------------------------------------------------------------------------------------------------------------------ //

type Primitive = number | string | boolean;
let primitiveArrayClone = <T extends Primitive>(array: T[]) => [...array];

primitiveArrayClone([1, 2, 3, 4]);

// ------------------------------------------------------------------------------------------------------------------ //

let deepCloneForSimpleObjects = <T>(obj: T) => JSON.parse(JSON.stringify(obj));

console.log(deepCloneForSimpleObjects({x: 1, y: {a: 1, b: 2}, z: [1, 2, 3]}));

// for advanced usage use lodash or other library

// ------------------------------------------------------------------------------------------------------------------ //

let obj = {
    x: 1,
    y: 2,
    z: 3,
    sum: function () {
        return this.x + this.y + this.z;
    }
};

let keys = Object.keys(obj); // returns ["x", "y", "z", "sum"]
for (let key of keys) {
    console.log(`obj[${key}]=`, (<any>obj)[key]);
}

// ------------------------------------------------------------------------------------------------------------------ //

let frozen = Object.freeze(obj);
console.log("Frozen: " + JSON.stringify(frozen));
// frozen.x =  5;
// frozen.y =  5;
// frozen.z =  5;

(<any>frozen).x = 5;
(<any>frozen).y = 5;
(<any>frozen).z = 5;
console.log("Frozen after changes: " + JSON.stringify(frozen));

try {
    frozen = Object.assign(frozen, {x: 5, y: 5, z: 6});
    console.log("Frozen after Object assign changes: " + JSON.stringify(frozen));
} catch (e) {
    console.error('Nope - It does not working - can not modify :)', e);
}

frozen = Object.assign({}, frozen, {x: 5, y: 5, z: 6});
console.log("Frozen copy to new instance " + JSON.stringify(frozen));

// ------------------------------------------------------------------------------------------------------------------ //
