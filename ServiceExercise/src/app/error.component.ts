import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<h2> Error</h2>
  <p>
      Cannot find the student profile
    </p> `
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
