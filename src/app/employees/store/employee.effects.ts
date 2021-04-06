import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  addEmployee,
  addEmployeeSuccess, deleteEmployee, deleteEmployeeSuccess,
  loadEmployees,
  loadEmployeesSuccess, updateEmployee, updateEmployeeSuccess
} from './employee.actions';
import {map, mergeMap, switchMap} from 'rxjs/operators';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../models/employee.model';


@Injectable()
export class EmployeeEffects {
  constructor(
    private action$: Actions,
    private employeeService: EmployeeService
  ) {}

  getEmployees$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loadEmployees),
      mergeMap(() => {
        return this.employeeService.getEmployees().pipe(
          map( (employee) => {
            console.log(employee);
            return loadEmployeesSuccess({employee});
          })
        );
      })
    );
  });

  addEmployee$ = createEffect( () => {
    return this.action$.pipe(
      ofType(addEmployee),
      mergeMap( (action) => {
        return this.employeeService.addEmployee(action.employee).pipe(
          map( (data) => {
            const employee = { ...action.employee, id: (data.name + 1).toString()};
            // console.log(employee, data);
            return addEmployeeSuccess({employee});
          })
        );
      })
    );
  });

  updateEmployee$ = createEffect( () => {
    return this.action$.pipe(
      ofType(updateEmployee),
      switchMap( (action) => {
        return this.employeeService.updateEmployee(action.employee).pipe(
          map( (data) => {
            console.log(data);
            return updateEmployeeSuccess({employee: action.employee});
          })
        );
      })
    );
  });

  deleteEmployee$ = createEffect( () => {
    return this.action$.pipe(
      ofType(deleteEmployee),
      switchMap( (action) => {
        return this.employeeService.deleteEmployee(action.id).pipe(
          map( (data) => {
            console.log("Deleted data is", data);
            return deleteEmployeeSuccess( {id: action.id});
          })
        );
      })
    );
  });

}
