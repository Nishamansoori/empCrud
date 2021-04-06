import {createFeatureSelector, createSelector} from '@ngrx/store';
import {EmployeeState} from './employee.state';

export const EMPLOYEE_STATE_NAME = 'employee';
const getEmployeeState = createFeatureSelector<EmployeeState>(EMPLOYEE_STATE_NAME);

export const getEmployees = createSelector(getEmployeeState, (state) => {
  return state.employees;
});

export const getEmployeeDetail = createSelector(getEmployeeState, (state, props) => {
  console.log("state values and prop are ", state.employees, props);
  return state.employees.find(employee => employee._id === props.id);
});


