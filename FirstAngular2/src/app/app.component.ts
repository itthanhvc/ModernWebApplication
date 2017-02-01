import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First AngularJS 2!';
  ComponentCounterValue: Number;
  ComponentCounterValueChange(value: Number) {
    this.ComponentCounterValue = value;
  }
}
