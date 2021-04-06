import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  {
    path: 'employees',
    loadChildren: () =>
      import('./employees/employees.module').then((m) => m.EmployeesModule),
  },
  { path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'header', component: HeaderComponent },
  { path: '**', component: PageNotFoundComponent }

  // {
  //   path: 'employees',
  //   component: EmployeesComponent,
  //   children: [
  //     { path: 'employee/id', component: EmployeeDetailsComponent}
  //   ]
  // },

  // { path: '', redirectTo: '/employees', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
