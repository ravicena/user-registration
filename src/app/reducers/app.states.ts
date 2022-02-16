import { Users } from '../models/user';
import { UnregisteredUsers } from '../models/unregisteredUsers'
import { AllUsers } from '../models/allusers';

export interface AppState {
	userState: UserState;
	unregisteredUsers: UnregisteredUser;
	allUsers: AllUser;
}

export interface UserState {
	users: Users[];
	message: any;
}

export interface UnregisteredUser {
	unregisteredUsers: UnregisteredUsers[];
}

export interface AllUser {
	allUsers: AllUsers[];
}

