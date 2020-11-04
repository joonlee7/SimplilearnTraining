import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.css']
})
export class TemplateRefComponent implements OnInit {

  fname: string;

  constructor() { }

  fun(name: string): void {
    console.log('Event Fired')
    this.fname = name;
  }

  ngOnInit(): void {
  }

}
