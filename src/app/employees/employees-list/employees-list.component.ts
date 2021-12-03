import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',

})
export class EmployeesListComponent implements OnInit {

  filteringEmp :any[] = [];
  experienceEmp :number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
