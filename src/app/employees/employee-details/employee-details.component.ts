import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Employee} from '../../models/employee.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {EmployeeService} from '../../services/employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {getEmployeeDetail} from '../store/employee.selectors';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy {

  employeeData$: Observable<Employee>;
  subscriptions: Subscription;
  constructor(private store: Store<AppState>,
              private employeeService: EmployeeService,
              private router: Router,
              private route: ActivatedRoute) {
    this.subscriptions = new Subscription();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params) => {
      // console.log("params id is ", params);
      const id = params.get('id');
      this.employeeData$ = this.store.select(getEmployeeDetail, {id});
    //   this.subscriptions = this.store.select(getEmployeeDetail, {id}).subscribe( (data) => {
    //     this.employeeData$ = data;
    //     console.log("Employee Details are ", this.employeeData$);
    //   });
    });
  }

  ngOnDestroy() {
    // if (this.subscriptions) {
    //   this.subscriptions.unsubscribe();
    // }
  }

}
