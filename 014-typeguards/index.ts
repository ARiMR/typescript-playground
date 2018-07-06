interface AbcCount {
    a: number;
    b: number;
    c: number;
    total: () => number;
}

let x: any = {
    a: 12,
    b: 13,
    c: 15,
    d: 3,
    total: function () {
        return this.a + this.b + this.c + this.d;
    }
};

let y: any = {
    x: 1,
    y: 2,
    a: 3,
    b: 4
};

let isAbcCount = function (obj: any): obj is AbcCount {
    return typeof obj === 'object'
        && typeof  obj['a'] === 'number'
        && typeof  obj['b'] === 'number'
        && typeof  obj['c'] === 'number'
        && typeof  obj['total'] === 'function';
};

let calculateSum = function (obj: any) {
    if (isAbcCount(obj)) {
        console.log('Object is AbcCount');
        console.log(obj.total());
    } else if (typeof obj === 'string') {
        console.log('Object is string');
        console.log(obj.toUpperCase());
    } else {
        console.log('Object is not AbcCount');
        console.log(obj);
    }
};


calculateSum(x);
calculateSum(y);
calculateSum('hello world');
calculateSum(42);

