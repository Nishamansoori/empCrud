import { Component, OnInit } from '@angular/core';
import {AppState} from '../../store/app.state';
import {Store} from '@ngrx/store';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Employee} from '../../models/employee.model';
import {addEmployee} from '../store/employee.actions';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  subscriptions: Subscription;
  employeeForm: FormGroup;
  constructor(private store: Store<AppState>,
              private fb: FormBuilder
              ) {
    this.subscriptions = new Subscription();
  }

  ngOnInit(): void {
    this.loadEmployeeForm();
  }

  loadEmployeeForm() {
    this.employeeForm = this.fb.group( {
      // empId: ['', [Validators.required, Validators.min(0)]],
      empName: ['', Validators.required],
      empSalary: ['', [Validators.required, Validators.min(0)]],
      empAge: ['', [Validators.required, Validators.min(0), Validators.max(150)]],
      empProfile: ['']
    });
  }

  checkValidation(value) {
    const emplName = this.employeeForm.get('empName');
    const emplSalary = this.employeeForm.get('empSalary');
    const emplAge = this.employeeForm.get('empAge');

    if (value === 'empName') {
      if (emplName.touched && !emplName.valid) {
        if (emplName.errors.required){
          return 'Employee Name is required';
        }
      }
    } else if (value === 'empSalary') {
      if (emplSalary.touched && !emplSalary.valid) {
        if (emplSalary.errors.required){
          return 'Employee Salary is required';
        }
        if ( emplSalary.errors.min ) {
          return 'Employee Salary cannot be negative';
        }
      }
    } else if (value === 'empAge') {
      if (emplAge.touched && !emplAge.valid) {
        if (emplAge.errors.required){
          return 'Employee Age is required';
        }
        if ( emplAge.errors.min) {
          return 'Employee Age cannot be negative';
        }
        if ( emplAge.errors.max) {
          return 'Employee Age cannot be greater than 150';
        }
      }
    }
  }

  onAddEmployee() {
    if (!this.employeeForm.valid) {
      return;
    }

    const employee: Employee = {
      // id: this.employeeForm.value.empId,
      employee_name: this.employeeForm.value.empName,
      employee_salary: this.employeeForm.value.empSalary,
      employee_age: this.employeeForm.value.empAge,
      profile_image: this.employeeForm.value.empProfile
    };

    this.store.dispatch(addEmployee({employee}));
  }



}
