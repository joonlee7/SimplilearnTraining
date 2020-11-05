import { Component, OnInit } from '@angular/core';
import { FakeService1 } from '../fake.service1';
import { Fake, FakeService2 } from '../fake.service2';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.css']
})

export class FakeComponent implements OnInit {

  msg1: string;
  msg2: string;

  fakeObj: Fake[];
  employeeDetails: Employee[] = [];

  constructor(private fakeSer2: FakeService2) { }

  fun1(): void {
    let ff1 = new FakeService1();
    this.msg1 = ff1.sayHello();
  }

  fun2(): void {
    this.msg2 = this.fakeSer2.sayHello();
  }

  i = 0;
  id = 0;
  name = null;
  salary = 0.0;
  loadEmpDetails() {
    this.id = this.employeeDetails[this.i].id;
    this.name = this.employeeDetails[this.i].name;
    this.salary = this.employeeDetails[this.i].salary;
    this.i++;
  }

  ngOnInit(): void {
    // this.fakeSer2.loadData().subscribe(data=>this.fakeObj=data);
    // this.fakeSer2.loadData().subscribe(data => console.log(data,
    //   (error: any) => console.log(error),
    //   () => console.log('Completed')));
    this.fakeSer2.loadData().subscribe(result => this.fakeObj = result);
    this.employeeDetails.push(new Employee(100, "Joon", 70000));
    this.employeeDetails.push(new Employee(101, "Bill", 45000));
    this.employeeDetails.push(new Employee(102, "Sally", 50000));
    this.employeeDetails.push(new Employee(101, "Sandi", 7));
  }
}

export class Employee {
  constructor(public id: number, public name: string, public salary: number) {

  }
}