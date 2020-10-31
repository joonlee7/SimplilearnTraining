
// Import the classes from ./modules.ts

// import { Employee, Student } from "./modules";

// var emp = new Employee("Joon", "Lee");
// emp.showDetail();

// var student = new Student ("Joon Lee", 26);
// student.showDetail();

import { SalaryWorker, ContractWorker } from "./mynamespace";

var salEmp = new SalaryWorker.Employee("joon", "lee");
salEmp.showDetail();

var conEmp = new ContractWorker.Employee("sandi", "lee");
conEmp.showDetail();