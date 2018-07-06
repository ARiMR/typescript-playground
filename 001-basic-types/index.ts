let whatever: any;
whatever = 'text';
whatever = 42;

// ------------------------------------------------------------------------------------------------------------------ //

let title: string;
title = 'From zero to typescript hero';
title = null;
title = undefined;

// ------------------------------------------------------------------------------------------------------------------ //

let price: number;
price = 42.0;
price = 0;

// ------------------------------------------------------------------------------------------------------------------ //

let logic: boolean;
logic = true;

// ------------------------------------------------------------------------------------------------------------------ //

let obj: object;
obj = {x: 1, y: 2};
obj = function () {
    console.log('Hello world');
};

// ------------------------------------------------------------------------------------------------------------------ //

let date: Date;
date = new Date();

// ------------------------------------------------------------------------------------------------------------------ //

let implicit = 42;
// implicit = 'text';

// ------------------------------------------------------------------------------------------------------------------ //

let numbers: number[] = [1, 2, 3, 4];

// ------------------------------------------------------------------------------------------------------------------ //

let distinctNumbers = new Set<number>(numbers);
console.log('distinct numbers', distinctNumbers);

// ------------------------------------------------------------------------------------------------------------------ //

let map = new Map<string, number>();
map.set('a', 1);
map.set('b', 2);
if (map.has('b')) {
    map.set('b', map.get('b') + 1);
}
console.log('distinct numbers', distinctNumbers);

// ------------------------------------------------------------------------------------------------------------------ //

let add: (x: number, y: number) => number;

add = function (x, y) {
    return x + y;
};

add = (x, y) => {
    return x + y;
};

add = (x, y) => x + y;


// Don’t ever use the types Number, String, Boolean, or Object.
// These types refer to non-primitive boxed objects that are almost never used appropriately in JavaScript code.
// https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html