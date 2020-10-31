
export class Employee {

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    showDetail() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

export class Student {

    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    showDetail() {
        console.log(`${this.name} ${this.age}`);
    }
}