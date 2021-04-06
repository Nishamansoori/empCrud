import {createAction, props} from '@ngrx/store';
import {Employee} from '../../models/employee.model';

export const LOAD_EMPLOYEES = '[Employee Page] load employees';
export const LOAD_EMPLOYEES_SUCCESS = '[Employee Page] load employees success';
export const ADD_EMPLOYEE_ACTION = '[Employee Page] add employee';
export const ADD_EMPLOYEE_SUCCESS = '[Employee Page] add employee success';
export const UPDATE_EMPLOYEE_ACTION = '[Employee Page] update employee';
export const UPDATE_EMPLOYEE_SUCCESS = '[Employee Page] update employee success';
export const DELETE_EMPLOYEE_ACTION = '[Employee Page] delete employee';
export const DELETE_EMPLOYEE_SUCCESS = '[Employee Page] delete employee success';

// export const getEmployeesData = createAction(LOAD_EMPLOYEES);
// export const getEmployeeDataSuccess = createAction(LOAD_EMPLOYEES_SUCCESS, props<{employee: Employee[]}>());
export const getEmployeeDetail = createAction('Get Employee Details', props<{empId: Employee['_id']}>());

export const loadEmployees = createAction(LOAD_EMPLOYEES);
export const loadEmployeesSuccess = createAction(LOAD_EMPLOYEES_SUCCESS, props<{ employee: Employee[]}>());
export const addEmployee = createAction(ADD_EMPLOYEE_ACTION, props<{ employee: Employee }>());
export const addEmployeeSuccess = createAction(ADD_EMPLOYEE_SUCCESS, props<{ employee: Employee }>());
export const updateEmployee = createAction(UPDATE_EMPLOYEE_ACTION, props<{ employee: Employee }>());
export const updateEmployeeSuccess = createAction(UPDATE_EMPLOYEE_SUCCESS, props<{ employee: Employee }>());
export const deleteEmployee = createAction(DELETE_EMPLOYEE_ACTION, props<{ id: string }>());
export const deleteEmployeeSuccess = createAction(DELETE_EMPLOYEE_SUCCESS, props<{ id: string }>());
