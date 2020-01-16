import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:'employeeFilter'
})
export class EmployeePipe implements PipeTransform {
    transform(employee_data:any, searchText:string) {
        if(!employee_data || !searchText) {
            return employee_data;
        }
        console.log('employee_data',employee_data);
        return employee_data.filter( (employee) => 
            employee.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
        
    }
}