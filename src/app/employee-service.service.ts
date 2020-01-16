import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private employee_url = 'assets/employee.json'
  constructor(private http : HttpClient ) { }

  getEmployeeData() : Observable < any > {
    return this.http.get(this.employee_url);
    // get(this.employee_url);
  }

  getEmployeeDataById(id) {
    console.log(id);
    console.log('here-->',this.http.get(this.employee_url + 'id' + id));
    return this.http.get(this.employee_url + 'id' + id);
  }
  postEmployeeData(empData) {

    return this.http.post(this.employee_url,empData).pipe(
      catchError(this.handleError('postEmployeeData',empData))
    );
      // this.http.post<Hero>(this.emp, hero).pipe(
      //   catchError(this.handleError('addHero', hero))
      // );
    console.log('empData',empData);

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
  
      return error.message;
    };
  }
  
  private log(message: string) {
    console.log(message);
  }
}