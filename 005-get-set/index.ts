interface IPerson {
    name: string,
    surname: string
}

class Person implements IPerson {
    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
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
}

let p = new Person('John', 'Doe');
console.log(p.name, p.surname);

p.name = 'Jack';
p.surname = 'Daniels';
console.log(p.name, p.surname);

console.log((p as any)._name, (p as any)._surname);