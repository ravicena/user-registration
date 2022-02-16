import { createFeatureSelector, createSelector, createReducer, on, Action } from '@ngrx/store';
import * as fromActions from '../actions/users.actions';
import { UserState, UnregisteredUser, AllUser } from './app.states';


export const initialState: UserState = {users: [], message: ''}
export const unregisteredUsersinitialState: UnregisteredUser = {unregisteredUsers: []}
export const AllUsersinitialState: AllUser = {allUsers: []}

// Creating reducer
const _userReducer = createReducer(
  initialState,
  on(fromActions.ShowAllSuccessAction, (state, {payload}) => ({users: payload, message: 'Success'})),
);


export function userReducer(state: any, action: Action) {
  return _userReducer(state, action);
}

const _unregistereduserReducer = createReducer(
  unregisteredUsersinitialState,
  on(fromActions.ShowAllUnregisteredUsersSuccessAction, (state, {payload}) => ({unregisteredUsers: payload})),
);

export function unregistereduserReducer(state: any, action: Action) {
  return _unregistereduserReducer(state, action);
}

const _alluserReducer = createReducer(
  AllUsersinitialState,
  on(fromActions.ShowAllUsersSuccessAction, (state, {payload}) => ({allUsers: payload})),
);

export function alluserReducer(state: any, action: Action) {
  return _alluserReducer(state, action);
}



export const getUsersState = createFeatureSelector<UserState>('userState');

export const getUsers = createSelector(
    getUsersState, 
    (state: UserState) => state.users 
);


export const unregisteredUsersState = createFeatureSelector<UnregisteredUser>('unregisteredUsers');

export const getunregisteredUsers = createSelector(
  unregisteredUsersState, 
    (state: UnregisteredUser) => state.unregisteredUsers 
);

export const allUsersUsersState = createFeatureSelector<AllUser>('allUsers');

export const getAllUsers = createSelector(
  allUsersUsersState, 
    (state: AllUser) => state.allUsers 
);

