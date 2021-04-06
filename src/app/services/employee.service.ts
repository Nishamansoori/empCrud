import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Employee} from '../models/employee.model';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`https://crudcrud.com/api/8a962038808e4545b8e592fefb6e1fe9/employees`).pipe(
      map( (res) => {
        console.log("HIIII", res);
        const employee: Employee[] = [];
        for (let key in res) {
          employee.push({...res[key], id: key });
        }
        return employee;
      })
    );
  }

  addEmployee(employee: Employee): Observable<{ name: string }>{
    return this.http.post<{ name: string }>(`https://crudcrud.com/api/8a962038808e4545b8e592fefb6e1fe9/employees`, employee);
  }

  updateEmployee(employee: Employee) {
    const employeeData = {
      [employee._id]: {employee_name: employee.employee_name, employee_salary: employee.employee_salary, employee_age: employee.employee_age, profile_image: employee.profile_image},
    };
    return this.http.put('https://crudcrud.com/api/8a962038808e4545b8e592fefb6e1fe9/employees/', employeeData);
  }

  deleteEmployee(id: string) {
    return this.http.delete( `https://crudcrud.com/api/8a962038808e4545b8e592fefb6e1fe9/employees?id=${id}`);
  }
}
