import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
    <label>Counter Component</label>
    <button (click)="update(-1)"> - </button>
    <span>{{counterValue}}</span>
    <button (click)="update(1)"> + </button>
    </div>
  `,
  inputs: ["counterValue: counter"],
  outputs: ["counterChange"],
  styles: []
})
export class CounterComponent {
  //Define Setter and Getter
  private _counterValue: number = 0;
  get counterValue() {
    return this._counterValue;
  }

  set counterValue(value) {
    this._counterValue = value;
    this.counterChange.emit(this.counterValue);
  }

  counterChange: EventEmitter<Number>;
  constructor() {
    this.counterChange = new EventEmitter();
  }

  update(value: number) {
    this.counterValue += value;
    this.counterChange.emit(this.counterValue);
    return false;
  }
}
