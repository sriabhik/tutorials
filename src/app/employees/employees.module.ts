import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesComponent } from './employees.component';

import { EmployeesListComponent } from './employees-list/employees-list.component' ;

@NgModule({
  imports: [ CommonModule ],
  declarations: [ EmployeesComponent , EmployeesListComponent ],
  
  exports :[EmployeesComponent]
})
export class EmployeesModule { }