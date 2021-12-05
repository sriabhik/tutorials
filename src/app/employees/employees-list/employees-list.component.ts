
import { Component, OnInit ,Input, Inject} from '@angular/core';
import { IEmployee } from '../shared/interface';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  private _employees : IEmployee[]=[]
  @Input() get employees():IEmployee[]{
    return this._employees
  }
  set employees(value: IEmployee[]){
    if(value)
      this.filteredEmployees = this._employees = value
  }
  filteredEmployees :any[] = []
  experienceEmp! :number
  joined! :string;
  constructor() { }

  ngOnInit(): void {
   /* this.filteredEmployees = [
      { id:1,name:'iamneo1',city:'mumbai',exp:10,joined:new Date(2014,7,16)},
      { id:2,name:'iamneo2',city:'chennai',exp:2,joined:new Date(2014,9,16)},
      { id:3,name:'iamneo3',city:'pune',exp:20,joined:new Date(2014,11,16)},
      { id:4,name:'iamneo4',city:'Bengalaru',exp:11,joined:new Date(2014,12,16)}
    ]*/
  }
  filter(data :string){
    if(data){
      this.filteredEmployees = this.employees.filter((emp:IEmployee)=>{
        return emp.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                emp.city.toLowerCase().indexOf(data.toLowerCase()) >  -1
      });
    }else
        this.filteredEmployees = this.employees;
  }

}
