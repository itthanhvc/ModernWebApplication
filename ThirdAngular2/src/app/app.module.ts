import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
// use FormsModule Only when using Template Driven Forms
import { FormsModule } from '@angular/forms';
// use ReactiveFormsModule Only when using Template Driven Forms
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { myRoutes } from './app.routes';
import { HomeComponent } from './home.component';
import { ErrorComponent } from './error.component';
import { StudentComponent } from './student/student.component';
import { ProfileComponent } from './profile/profile.component';
import { db } from './services/db.service';
import { CheckProfileEmptyGuard } from "./profile/checkProfileEmpty.guard";
import { ValidationFormComponent } from './validation-form/validation-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    ProfileComponent,
    ErrorComponent,
    ValidationFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    myRoutes,
    ReactiveFormsModule
  ],
  providers: [db, CheckProfileEmptyGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
