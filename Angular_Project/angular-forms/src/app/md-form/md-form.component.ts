import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-md-form',
  templateUrl: './md-form.component.html',
  styleUrls: ['./md-form.component.css']
})
export class MdFormComponent implements OnInit {

  msg: string;
  userRef = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor() { }

  checkLogin(): void {
    console.log(this.userRef.value);
    // if (uname == 'joonlee' && pword == 12345) {
    //   this.msg = 'You have successfully logged in.'
    //   alert(this.msg);
    // } else {
    //   this.msg = 'Login failed'
    //   alert(this.msg)
    // }
  }

  ngOnInit(): void {
  }

}
