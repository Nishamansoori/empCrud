import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {MatIconModule} from '@angular/material/icon';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import {EffectsModule} from '@ngrx/effects';
import {EmployeeEffects} from './store/employee.effects';
import {StoreModule} from '@ngrx/store';
import {EMPLOYEE_STATE_NAME} from './store/employee.selectors';
import {emplReducer} from './store/employee.reducer';



@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeDetailsComponent,
    AddEmployeeComponent,
    EditEmployeeComponent
  ],
  exports: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([EmployeeEffects]),
    StoreModule.forFeature(EMPLOYEE_STATE_NAME, emplReducer),
  ]
})
export class EmployeesModule { }
