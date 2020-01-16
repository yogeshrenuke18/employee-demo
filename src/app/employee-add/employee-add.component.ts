import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  private employee_data : any;
  private showHide : boolean = true;
  spresp: any;
  
  constructor(private employee_service : EmployeeServiceService) {

   }

  ngOnInit() {
    this.employee_service.getEmployeeData().subscribe(response=>{
      this.employee_data = response; 
    });
  }

  onSubmit(employeeForms) {
    console.log(employeeForms);
    this.employee_service.postEmployeeData(employeeForms).subscribe(resp=>{
      return this.employee_data.push(resp);
    });

  }

}
