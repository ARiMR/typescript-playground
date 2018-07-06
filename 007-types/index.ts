interface IPointA {
    x: number,
    y: number
}

interface IPointB {
    x: number,
    y: number
}

interface IPoint3D {
    x: number,
    y: number,
    z: number
}

let a: IPointA = {x: 1, y: 2};
let b: IPointB = a;
let c: IPoint3D = {x: 1, y: 2, z: 3};
let d: IPointA = c;


interface withX {
    x: number;
}

// ------------------------------------------------------------------------------------------------------------------ //

interface Calc {
    add: (x: number, y: number) => number;
    subtract: (x: number, y: number) => number;
    multiply?: (x: number, y: number) => number;
    divide?: (x: number, y: number) => number;
}

type NumberOperation = (x: number, y: number) => number;

interface BetterCalc {
    add: NumberOperation;
    subtract: NumberOperation;
    multiply?: NumberOperation;
    divide?: NumberOperation;
}

let bc: BetterCalc = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
};

// ------------------------------------------------------------------------------------------------------------------ //

type FortyTwo = 42;

let fortyTwo: FortyTwo = 42;
fortyTwo = null;
fortyTwo = undefined;


type FortyTwoOrThree = 42 | 43;
let fortyTwoOrThree: FortyTwoOrThree = 42;
fortyTwoOrThree = 43;
fortyTwoOrThree = null;
fortyTwoOrThree = undefined;

// ------------------------------------------------------------------------------------------------------------------ //

type StringOrNumberOrNullOrUndefined = string | number | null | undefined

// ------------------------------------------------------------------------------------------------------------------ //

type Person = { id: number, name: string, surname: string };
type Item = { id: number, name: string, serialNumber: string };

// ------------------------------------------------------------------------------------------------------------------ //

type PersonOrItem = Person | Item
let personOrItem: PersonOrItem = {
    id: 1,
    name: 'name',
    surname: 'xxx',
    // serialNumber: 'xxx'
};

// ------------------------------------------------------------------------------------------------------------------ //

type PersonAndItem = Person & Item
let personAndItem: PersonAndItem = {
    id: 1,
    name: 'name',
    surname: 'xxx',
    serialNumber: 'xxx'
};

// ------------------------------------------------------------------------------------------------------------------ //

let incompletItem: Partial<Item> = {
    id: 1,
    serialNumber: 'XXX-12-34'
};

// ------------------------------------------------------------------------------------------------------------------ //

let pickOfItem: Pick<Item, 'id' | 'name'> = {
    id: 1,
    name: 'product name'
};

// ------------------------------------------------------------------------------------------------------------------ //

let readOnlyPickOfItem: Readonly<Pick<Item, 'id' | 'name'>> = pickOfItem;

// ------------------------------------------------------------------------------------------------------------------ //

type KeyOfItem = keyof Item;
let keyOfItem: KeyOfItem = 'serialNumber';

// ------------------------------------------------------------------------------------------------------------------ //