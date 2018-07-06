interface IPerson {
    name: string,
    surname: string
}

class Person implements IPerson {

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
        Person._instanceCount++;
    }

    private static _instanceCount = 0;

    get instanceCount(): number {
        return Person._instanceCount;
    }

    private _name: string;

    get name() {
        return this._name.toUpperCase();
    }

    set name(value: string) {
        this._name = value;
    }

    private _surname: string;

    get surname() {
        return this._surname.toUpperCase();
    }

    set surname(value: string) {
        this._surname = value;
    }

    static of(name?: string, surname?: string): Person {
        return new Person(name || 'NoName', surname || 'NoSurname')
    }
}

let p = Person.of('John', 'Doe');
console.log(p.name, p.surname, p.instanceCount);

p = Person.of('John');
console.log(p.name, p.surname, p.instanceCount);

p = Person.of();
console.log(p.name, p.surname, p.instanceCount);

