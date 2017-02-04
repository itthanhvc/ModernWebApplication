import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { db } from '../services/db.service';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html'
})
export class ValidationFormComponent {
  myForm: FormGroup;
  private userUrl: string = "http://jsonplaceholder.typicode.com/users/1";
  private userPostUrl: string = "http://jsonplaceholder.typicode.com/posts?userId=1";
  name: string;
  email: string
  post: string;
  constructor(private fb: FormBuilder, private db: db) {
    this.myForm = fb.group({
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'post': ['', Validators.minLength(10)]
    });
  }
  onSubmit(): void {
    console.log(this.myForm.value);
  }

  onGetData(): void {
    this.db.getDataFromUrl(this.userUrl).subscribe(
      (data: any) => {
        var response = JSON.parse(data.text());
       this.name = response['name'];
        this.email = response['email'];
      });
    this.db.getDataFromUrl(this.userPostUrl).subscribe(
      (data: any) => {
        var response = JSON.parse(data.text());
        console.log(response);
        response.forEach(element => {
             this.post += element['title'] + "\r\n" + element['body'];
        });
     
      });
  }
}