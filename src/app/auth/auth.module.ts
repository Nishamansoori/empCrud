import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import { LoginComponent } from './login/login.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {AUTH_STATE_NAME} from './store/auth.selectors';
import {AuthReducer} from './store/auth.reducer';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'login'},
      { path: 'login', component: LoginComponent}
    ]
  }
];
@NgModule( {
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer),
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class AuthModule {}
