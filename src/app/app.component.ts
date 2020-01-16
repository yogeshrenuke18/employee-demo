import { Component,OnInit } from '@angular/core';
import { EmployeeServiceService } from '../app/employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'employee';

  private employee_data : any;

  constructor(private employee_service : EmployeeServiceService, private router: Router) {

  }

  ngOnInit() {
    this.employee_service.getEmployeeData().subscribe(response=>{
      this.employee_data = response; 
    });
  }
 
  addEmployee() {
    this.router.navigate(['add']);
  }
}
