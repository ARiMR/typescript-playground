var Person = /** @class */ (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name.toUpperCase();
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "surname", {
        get: function () {
            return this._surname.toUpperCase();
        },
        set: function (value) {
            this._surname = value;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var p = new Person('John', 'Doe');
console.log(p.name, p.surname);
p.name = 'Jack';
p.surname = 'Daniels';
console.log(p.name, p.surname);
console.log(p._name, p._surname);
