class Person {
    _firstName = ""
    _lastName = ""
    _age = 0

    constructor (firstName,lastName,age){
        this._firstName = firstName
        this._lastName = lastName
        this._age = age
    }

    set firstName(newFirstName) {
        this._firstName = newFirstName
    }

    get firstName() {
        return this._firstName
    }

    set lastName(newLastName) {
        this._lastName = newLastName
    }

    get lastName() {
        return this._lastName
    }

    set age(newAge) {
        this.age = newAge
    }

    get age() {
        return this._age
    }

    get fullName() {
        return this.firstName + " " + this.lastName
    }
    }
    
    const person = new Person('Mario', 'Rossi', 25);
    console.log(person.fullName);
    
    person.firstName = 'Maria';
    person.lastName = 'Verdi';
    console.log(person.fullName);