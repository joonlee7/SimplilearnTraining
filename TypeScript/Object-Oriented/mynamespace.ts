
export namespace ContractWorker {
    export class Employee {

        firstName: string;
        lastName: string;

        static type: string

        constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
            Employee.type = "Contractual";
        }

        showDetail() {
            console.log(`${this.firstName} ${this.lastName} ${Employee.type}`);
        }
    }
}

export namespace SalaryWorker {
    export class Employee {

        firstName: string;
        lastName: string;

        static type: string

        constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
            Employee.type = "Salaried";
        }

        showDetail() {
            console.log(`${this.firstName} ${this.lastName} ${Employee.type}`);
        }
    }
}