import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesComponent } from './employees.component';

import { EmployeesListComponent } from './employees-list/employees-list.component' ;
import { SearchTextComponent } from './employees-list/search-textbox.component';
@NgModule({
  imports: [CommonModule],
  declarations: [EmployeesComponent,EmployeesListComponent,SearchTextComponent],
  
  exports :[EmployeesComponent]
})
export class EmployeesModule { }