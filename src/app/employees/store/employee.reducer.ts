import {createReducer, on} from '@ngrx/store';
import { Employee } from '../../models/employee.model';
import {addEmployeeSuccess, updateEmployeeSuccess, deleteEmployeeSuccess, loadEmployeesSuccess} from './employee.actions';
import {initialState} from './employee.state';


const employeeReducer = createReducer(
  initialState,
  // on(getEmployeeDataSuccess, (state, {employee: EmployeeModel[]}) => ({...state, employee}))
  on(addEmployeeSuccess, (state, action) => {
    const employee = { ...action.employee};
    // employee.id = (state.employees.length + 1).toString();
    return {
      ...state,
      employees: [...state.employees, employee]
    };
  }),
  on(updateEmployeeSuccess, (state, action) => {
    const updatedEmployee = state.employees.map((employee) => {
      return action.employee._id === employee._id ? action.employee : employee ;
    });
    return {
      ...state,
      employees: updatedEmployee
    };
  }),
  on(deleteEmployeeSuccess, (state, action) => {
    const updatedEmployee = state.employees.filter((employee) => {
      return employee._id !== action.id ;
    });
    return {
      ...state,
      employees: updatedEmployee
    };
  }),
  on(loadEmployeesSuccess, (state, action) => {
    return {
      ...state,
      employees: action.employee
    };
  })
);

export function emplReducer(state, action) {
  return employeeReducer(state, action);
}
