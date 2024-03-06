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

    get firstNameGetter() {
        return this._firstName
    }

    set lastName(newLastName) {
        this._lastName = newLastName
    }

    get lastName() {
        return this._lastName
    }

    set age(x) {
        this._age = x
    }

    get age() {
        return this._age
    }

    get fullName() {
        return this.firstNameGetter + " " + this.lastName
    }
    }
    
    const person = new Person('Mario', 'Rossi', 25);
    console.log(person.fullName);
    
    person.firstName = 'Maria';
    person.lastName = 'Verdi';
    console.log(person.fullName);