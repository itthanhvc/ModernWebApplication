import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { myRoutes } from './app.routes';
import { HomeComponent } from './home.component';
import { ErrorComponent } from './error.component';
import { StudentComponent } from './student/student.component';
import { ProfileComponent } from './profile/profile.component';
import { db } from './services/db.service';
import { CheckProfileEmptyGuard } from "./profile/checkProfileEmpty.guard";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    ProfileComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    myRoutes
  ],
  providers: [db, CheckProfileEmptyGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
