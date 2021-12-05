import { Component, NgModule, OnInit } from '@angular/core';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  title!: string;
  people!: any[];
  constructor() { }

  ngOnInit(): void {
    this.title ="Employees";
    this.people =[
      { id:1,name:'iamneo1',city:'mumbai',exp:10,joined:new Date(2014,7,16)},
      { id:2,name:'iamneo2',city:'chennai',exp:2,joined:new Date(2014,9,16)},
      { id:3,name:'iamneo3',city:'pune',exp:20,joined:new Date(2014,11,16)},
      { id:4,name:'iamneo4',city:'Bengaru',exp:11,joined:new Date(2014,12,16)}
    ]
  }

}
