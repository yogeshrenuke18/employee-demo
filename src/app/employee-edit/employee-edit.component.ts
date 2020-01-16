import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  private emp_id;

  constructor(private employee_service : EmployeeServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( param => {
      console.log(param) ;
      this.emp_id = param;

      this.employee_service.getEmployeeDataById(param);
    });
  }

}
