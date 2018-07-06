var a = {x: 1, y: 2};
var b = a;
var c = {x: 1, y: 2, z: 3};
var d = c;
var bc = {
    add: function (x, y) {
        return x + y;
    },
    subtract: function (x, y) {
        return x - y;
    },
    multiply: function (x, y) {
        return x * y;
    },
    divide: function (x, y) {
        return x / y;
    },
};
var fortyTwo = 42;
fortyTwo = null;
fortyTwo = undefined;
var fortyTwoOrThree = 42;
fortyTwoOrThree = 43;
fortyTwoOrThree = null;
fortyTwoOrThree = undefined;
var personOrItem = {
    id: 1,
    name: 'name',
    surname: 'xxx',
};
var personAndItem = {
    id: 1,
    name: 'name',
    surname: 'xxx',
    serialNumber: 'xxx'
};
// ------------------------------------------------------------------------------------------------------------------ //
var incompletItem = {
    id: 1,
    serialNumber: 'XXX-12-34'
};
// ------------------------------------------------------------------------------------------------------------------ //
var pickOfItem = {
    id: 1,
    name: 'product name'
};
// ------------------------------------------------------------------------------------------------------------------ //
var readOnlyPickOfItem = pickOfItem;
var keyOfItem = 'serialNumber';
// ------------------------------------------------------------------------------------------------------------------ //
