import {authModel} from '../../models/auth.model';


export interface AuthState {
  user: authModel | null;
}

export const initialState: AuthState = {
  user: null,
};
