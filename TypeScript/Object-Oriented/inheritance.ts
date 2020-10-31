
// /**
//  * Inheritance helps with reusability of code and to reduce the time and efforts of developers
//  * Parent class -> Child class
//  * 
//  */

// class Person {
//     // instance variables
//     private name: string;
//     private age: number;
//     private city: string;

//     constructor(name: string, age: number, city: string) {
//         this.name = name;
//         this.age = age;
//         this.city = city;
//     }

//     displayDetails(): void {
//         console.log(`Name: ${this.name}`)
//         console.log(`Age: ${this.age}`)
//         console.log(`City: ${this.city}`)
//     }
// }

// // var person = new Person('Joon Lee', 26, 'Rochester, NY');
// // person.displayDetails();

// // -----------------------------------------------------------------------------------------

// class Employee extends Person {
//     // instance variables
//     private salary: number;
//     private position: string;

//     constructor(name: string, age: number, city: string, salary: number, position: string) {
//         super(name, age, city);
//         this.salary = salary;
//         this.position = position;
//     }

//     displayDetails(): void {
//         super.displayDetails();
//         console.log(`Salary: $${this.salary}`)
//         console.log(`Position: ${this.position}`)
//     }
// }

// var employee = new Employee('Joon Lee', 26, 'Rochester, NY', 70000, "Software Engineer");
// employee.displayDetails();