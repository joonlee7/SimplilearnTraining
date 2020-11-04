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

  constructor(private fakeSer2: FakeService2) { }

  fun1(): void {
    let ff1 = new FakeService1();
    this.msg1 = ff1.sayHello();
  }

  fun2(): void {
    this.msg2 = this.fakeSer2.sayHello();
  }

  ngOnInit(): void {
    this.fakeSer2.loadData().subscribe(data=>this.fakeObj=data);
  }

}
