import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';    
import { Observable, Subscription } from 'rxjs';
import * as fromReducer from '../reducers/user.reducer';
import * as fromActions from '../actions/users.actions';
import { UserState } from '../reducers/app.states';
import { UnregisteredUsers } from '../models/unregisteredUsers';
import { process, State } from "@progress/kendo-data-query";

@Component({
  selector: 'app-unregistered',
  templateUrl: './unregistered.component.html',
  styleUrls: ['./unregistered.component.css']
})
export class UnregisteredComponent implements OnInit {
  public gridData: any
	public state: State = {
		skip: 0,
	};
	public usersList: any
	public usersubscription: Subscription
	public users$: Observable<UnregisteredUsers[]>;
  constructor(private store: Store<UserState>) { 
    this.users$ = store.select(fromReducer.getunregisteredUsers);
  }

  ngOnInit(): void {
    this.store.dispatch(fromActions.ShowAllUnregisteredUsersAction());
		this.usersubscription  = this.store.select(fromReducer.getunregisteredUsers).subscribe((data) =>{
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
