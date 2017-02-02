import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
  inputs:["listOfString"]
})
export class OrderListComponent {
  constructor() { }
   private _listOfString: String[];
  get listOfString() {
    return this._listOfString;
  }

  set listOfString(value) {
    this._listOfString = value;
    console.log(value);
  }
}
