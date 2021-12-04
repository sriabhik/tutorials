import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { EmployeesComponent } from './employees/employees.component';
import { EmployessListComponent } from './employess-list/employess-list.component';


@NgModule({
  declarations: [
    AppComponent,
   // EmployeesListComponent,
    EmployeesComponent,
   EmployessListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
