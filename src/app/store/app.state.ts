
import {SHARED_STATE_NAME} from './shared/shared.selectors';
import {SharedState} from './shared/shared.state';
import {SharedReducer} from './shared/shared.reducer';

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer
};
