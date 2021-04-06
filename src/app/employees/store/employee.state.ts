import { Employee } from '../../models/employee.model';

export interface EmployeeState {
  employees: Employee[];
}

export const initialState: EmployeeState = {
  // employees: [
  //   {
  //     id: '1',
  //     employee_name: 'Nisha Mansoori',
  //     employee_salary: 30000,
  //     employee_age: 23,
  //     profile_image: ''
  //   },
  //   {
  //     id: '2',
  //     employee_name: 'Nisha',
  //     employee_salary: 30000,
  //     employee_age: 23,
  //     profile_image: ''
  //   }
  // ]
  employees: null
};
