import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.states';
import * as fromReducer from './user.reducer';

export const reducers: ActionReducerMap<AppState> = {
  userState: fromReducer.userReducer,
  unregisteredUsers: fromReducer.unregistereduserReducer,
  allUsers: fromReducer.alluserReducer
};
 