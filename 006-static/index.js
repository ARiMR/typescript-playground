var Person = /** @class */ (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        Person._instanceCount++;
    }

    Object.defineProperty(Person.prototype, "instanceCount", {
        get: function () {
            return Person._instanceCount;
        },
        enumerable: true,
        configurable: true
    });
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
    Person.of = function (name, surname) {
        return new Person(name || 'NoName', surname || 'NoSurname');
    };
    Person._instanceCount = 0;
    return Person;
}());
var p = Person.of('John', 'Doe');
console.log(p.name, p.surname, p.instanceCount);
p = Person.of('John');
console.log(p.name, p.surname, p.instanceCount);
p = Person.of();
console.log(p.name, p.surname, p.instanceCount);
