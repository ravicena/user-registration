import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';    
import { Observable, Subscription } from 'rxjs';
import * as fromReducer from '../reducers/user.reducer';
import * as fromActions from '../actions/users.actions';
import { UserState } from '../reducers/app.states';
import { AllUsers } from '../models/allusers';
import { process, State } from "@progress/kendo-data-query";

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  public gridData: any
	public state: State = {
		skip: 0,
	};
	public usersList: any
	public usersubscription: Subscription
	public users$: Observable<AllUsers[]>;
  constructor(private store: Store<UserState>) { 
    this.users$ = store.select(fromReducer.getAllUsers);
  }

  ngOnInit(): void {
    this.store.dispatch(fromActions.ShowAllUsersAction());
		this.usersubscription  = this.store.select(fromReducer.getAllUsers).subscribe((data) =>{
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
