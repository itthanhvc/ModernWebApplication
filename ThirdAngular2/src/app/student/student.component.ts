import { Component, OnInit } from '@angular/core';
import { db } from '../services/db.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',

})
export class StudentComponent implements OnInit {
  constructor(private db: db) { }
  students = this.db.getData();
  ngOnInit() {
  }

}
