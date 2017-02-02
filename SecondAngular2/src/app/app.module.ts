import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
import { OrderListComponent } from './order-list/order-list.component';
import { UpperDirectiveDirective } from './upper-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    OrderListComponent,
    UpperDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
