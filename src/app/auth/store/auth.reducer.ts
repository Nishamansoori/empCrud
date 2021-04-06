import {createReducer} from '@ngrx/store';
import {initialState} from './auth.state';


const authReducer = createReducer(
  initialState,
);

export function AuthReducer(state, action) {
  return authReducer(state, action);
}
