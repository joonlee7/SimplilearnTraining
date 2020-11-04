import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {

  msg: string;

  constructor() { }

  checkLogin(userObj: any): void {
    // console.log(userObj);
    if (userObj.username == 'joonlee' && userObj.password == '710@yes') {
      this.msg = 'You have successfully logged in.'
      alert(this.msg);
    } else {
      this.msg = 'Login failed'
      alert(this.msg)
    }
  }

  ngOnInit(): void {
  }

}
