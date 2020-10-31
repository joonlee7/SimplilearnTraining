/**
 * Class is blueprint of a user defined data type
 */

// class Employee {

//     empCode: number = 1001;
//     empName: string = "Joon Lee"
//     empAge: number = 26

//     displayDetails() {
//         console.log(`Employee Code: ${this.empCode}`);
//         console.log(`Employee Name: ${this.empName}`);
//         console.log(`Employee Age: ${this.empAge}`);
//     }
// }

//  var emp = new Employee();
// //  console.log(`${emp.empCode}  ${emp.empName}  ${emp.empAge}`);
// emp.displayDetails();

// ------------------------------------------------------------------------

class Employee {

    empCode: number;
    empName: string;
    empAge: number;

    constructor(empCode: number, empName: string, empAge: number,) {
        this.empCode = empCode;
        this.empName = empName;
        this.empAge = empAge;
    }

    displayDetails(emp: Employee) {
        console.log(`Employee Code: ${emp.empCode}`);
        console.log(`Employee Name: ${emp.empName}`);
        console.log(`Employee Age: ${emp.empAge}`);
    }
}

//  console.log(`${emp.empCode}  ${emp.empName}  ${emp.empAge}`);

var emp1 = new Employee(1001, "Joon Lee", 26);
emp1.displayDetails(emp1)
console.log("---------------------------")
var emp2 = new Employee(1002, "Sandi", 3);
emp2.displayDetails(emp2)