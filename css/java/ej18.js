class Person {
    static fromObject (objeto) {
        const nuevo = new Person(objeto.firstName, objeto.lastName)
        return nuevo
    }
    constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }
    }
    
    const obj = {
    firstName: 'Mario',
    lastName: 'Rossi'
    };
    
    const person = Person.fromObject(obj);
    console.log(person.firstName + " " + person.lastName);