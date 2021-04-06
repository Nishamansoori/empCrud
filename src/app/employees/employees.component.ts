import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Employee} from '../models/employee.model';
import {AppState} from '../store/app.state';
import {Store} from '@ngrx/store';
import {getEmployees} from './store/employee.selectors';
import {deleteEmployee, loadEmployees} from './store/employee.actions';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees$: Observable<Employee[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.employees$ = this.store.select(getEmployees);
    this.store.dispatch(loadEmployees());
  }

  onDeleteEmployee(id: string) {
    if (confirm('Are you sure you want to delete this Employee?')) {
      this.store.dispatch(deleteEmployee({id}));
    }
  }

}
