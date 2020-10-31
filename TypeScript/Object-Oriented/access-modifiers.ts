/**
 * Three Access Modifier:
 *    1. Public (default)
 *          - Can be accessed freely
 *    2. Protected
 *          - Can only be accesses within its own class and any subclasses
 *    3. Private
 *          - Cannot be accessed at all outside its own class
 */

class Employee {

    private empCode: number;
    private empName: string;
    private empAge: number;

    // static variables for memory conservation
    private static empCompany: string;
    private static empCountry: string;

    constructor(empCode: number, empName: string, empAge: number) {
        this.empCode = empCode;
        this.empName = empName;
        this.empAge = empAge;
        Employee.empCompany = "Tata Consultancy Services";
        Employee.empCountry = "United States of America";
    }

    displayDetails(emp: Employee) {
        console.log(`Employee Code: ${emp.empCode}`);
        console.log(`Employee Name: ${emp.empName}`);
        console.log(`Employee Age: ${emp.empAge}`);
        console.log(`Employee Company: ${Employee.empCompany}`);
        console.log(`Employee Country: ${Employee.empCountry}`);
    }
}

var emp1 = new Employee(1001, "Joon Lee", 26);
emp1.displayDetails(emp1)

console.log("---------------------------")

var emp2 = new Employee(1002, "Sandi", 3);
emp2.displayDetails(emp2)















