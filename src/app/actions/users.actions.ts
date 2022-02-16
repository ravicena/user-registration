import { createAction, props } from '@ngrx/store';
import { Users } from '../models/user';
import { UnregisteredUsers } from '../models/unregisteredUsers';
import { AllUsers } from '../models/allusers';

export const ShowAllAction = createAction('[USERS] Show All');
export const ShowAllSuccessAction = createAction('[USERS] Show All Success', props<{ payload: Users[]}>());;

export const ShowAllUnregisteredUsersAction = createAction('[UNREGISTERED USERS] Show All');
export const ShowAllUnregisteredUsersSuccessAction = createAction('[UNREGISTERED USERS] Show All Success', props<{ payload: UnregisteredUsers[]}>());;

export const ShowAllUsersAction = createAction('[ALL USERS] Show All');
export const ShowAllUsersSuccessAction = createAction('[ALL USERS] Show All Success', props<{ payload: AllUsers[]}>());;