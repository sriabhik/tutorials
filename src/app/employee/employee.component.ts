import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  title : string | undefined;
  people : any[] | undefined;
  constructor() { }

  ngOnInit(): void {
    this.title = 'employee';
    this.people =[
      {id:1,name :'iamneo1',city :'mumbai',exp :10,joined : new Date(2014,7,16) },
      {id:2,name :'iamneo2',city :'mumbai',exp :8,joined : new Date(2014,2,16) },
      {id:3,name :'iamneo3',city :'mumbai',exp :20,joined : new Date(2014,1,16) },
      {id:4,name :'iamneo4',city :'mumbai',exp :2,joined : new Date(2014,12,16) },
      {id:5,name :'iamneo5',city :'mumbai',exp :1,joined : new Date(2014,8,16) }
    ]
  }

}
