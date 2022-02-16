import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';    
import { Observable, Subscription } from 'rxjs';
import * as fromReducer from '../reducers/user.reducer';
import * as fromActions from '../actions/users.actions';
import { UserState } from '../reducers/app.states';
import { Users } from '../models/user';
import { process, State } from "@progress/kendo-data-query";

@Component({
	selector: 'app-user',
	templateUrl: 'user.component.html',
	styleUrls: ['user.component.css']
})
export class UserComponent implements OnInit {
	public gridData: any
	public state: State = {
		skip: 0,
	};
	public usersList: any
	public usersubscription: Subscription
	public users$: Observable<Users[]>;

	constructor(private store: Store<UserState>) {
		this.users$ = store.select(fromReducer.getUsers);
	}

	ngOnInit(): void {
		this.store.dispatch(fromActions.ShowAllAction());
		this.usersubscription  = this.store.select(fromReducer.getUsers).subscribe((data) =>{
		if(data){
			this.usersList = data
			this.loadGridData();
		}
	})
		this.store.dispatch(fromActions.ShowAllAction());
	}

	loadGridData(): void {
		this.gridData = process(this.usersList, this.state)
	}
}	