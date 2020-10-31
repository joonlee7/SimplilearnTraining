
class Employee {
    // instance variables
    private empCode: number;
    private empName: string;
    private empSalary: number;

    // getter and setter methods
    get code(): number { return this.empCode; }
    set code(empCode: number) { this.empCode = empCode; }

    get name(): string { return this.empName; }
    set name(empName: string) { this.empName = empName; }

    get salary(): number { return this.empSalary; }
    set salary(empSalary: number) {
        if (empSalary < 5000) {
            throw new Error('Minimum balance is $5000')
        } else {
            this.empSalary = empSalary;
        }
    }
}

var emp = new Employee();

emp.code = 1001;
console.log(`Employee code: ${emp.code}`);
emp.name = "Joon Lee";
console.log(`Employee name: ${emp.name}`);
emp.salary = 70000;
console.log(`Employee salary: $${emp.salary}`);