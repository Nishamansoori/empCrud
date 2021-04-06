import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeesComponent} from './employees.component';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {EditEmployeeComponent} from './edit-employee/edit-employee.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {CommonModule} from '@angular/common';


const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
    children: [
      { path: 'add', component: AddEmployeeComponent },
      { path: 'edit/:id', component: EditEmployeeComponent},
      { path: 'details/:id', component: EmployeeDetailsComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
