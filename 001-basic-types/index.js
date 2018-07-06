var whatever;
whatever = 'text';
whatever = 42;
// ------------------------------------------------------------------------------------------------------------------ //
var title;
title = 'From zero to typescript hero';
title = null;
title = undefined;
// ------------------------------------------------------------------------------------------------------------------ //
var price;
price = 42.0;
price = 0;
// ------------------------------------------------------------------------------------------------------------------ //
var logic;
logic = true;
// ------------------------------------------------------------------------------------------------------------------ //
var obj;
obj = {x: 1, y: 2};
obj = function () {
    console.log('Hello world');
};
// ------------------------------------------------------------------------------------------------------------------ //
var date;
date = new Date();
// ------------------------------------------------------------------------------------------------------------------ //
var implicit = 42;
// implicit = 'text';
// ------------------------------------------------------------------------------------------------------------------ //
var numbers = [1, 2, 3, 4];
// ------------------------------------------------------------------------------------------------------------------ //
var distinctNumbers = new Set(numbers);
console.log('distinct numbers', distinctNumbers);
// ------------------------------------------------------------------------------------------------------------------ //
var map = new Map();
map.set('a', 1);
map.set('b', 2);
if (map.has('b')) {
    map.set('b', map.get('b') + 1);
}
console.log('distinct numbers', distinctNumbers);
// ------------------------------------------------------------------------------------------------------------------ //
var add;
add = function (x, y) {
    return x + y;
};
add = function (x, y) {
    return x + y;
};
add = function (x, y) {
    return x + y;
};
// Don’t ever use the types Number, String, Boolean, or Object.
// These types refer to non-primitive boxed objects that are almost never used appropriately in JavaScript code.
// https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html
