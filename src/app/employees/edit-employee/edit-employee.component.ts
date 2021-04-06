import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {getEmployeeDetail} from '../store/employee.selectors';
import {Employee} from '../../models/employee.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {updateEmployee} from '../store/employee.actions';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit, OnDestroy {
  employeeForm: FormGroup;
  employee: Employee;
  subscriptions: Subscription;
  constructor(private store: Store<AppState>,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router) {
    this.subscriptions = new Subscription();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.subscriptions = this.store.select(getEmployeeDetail, {id}).subscribe((data) => {
        this.employee = data;
        this.loadForm();
      });
    });
  }

  loadForm() {
    this.employeeForm = this.fb.group({
      empName: [this.employee.employee_name ? this.employee.employee_name : null, [Validators.required]],
      empSalary: [this.employee.employee_salary ? this.employee.employee_salary : null, [Validators.required, Validators.min(0)]],
      empAge: [
              this.employee.employee_age ? this.employee.employee_age : null,
              [Validators.required, Validators.min(1), Validators.max(150)]
      ],
      empProfile: [this.employee.profile_image ? this.employee.profile_image : null]
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

  onUpdateEmployee() {
    if (!this.employeeForm.valid) {
      return;
    }
    const employee: Employee = {
      _id: this.employee._id,
      employee_name: this.employeeForm.value.empName,
      employee_salary: this.employeeForm.value.empSalary,
      employee_age: this.employeeForm.value.empAge,
      profile_image: this.employeeForm.value.empProfile
    };

    this.store.dispatch(updateEmployee({employee}));
    this.router.navigate(['employees']);
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

}
