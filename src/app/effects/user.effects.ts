import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap} from 'rxjs/operators';
import * as fromActions from '../actions/users.actions';
import { UsersService } from '../services/users.service';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) { }

  loadAllUsers$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.ShowAllAction),
    switchMap(() =>
      this.usersService.getAllRegisteredUsers().pipe(
        map(data => fromActions.ShowAllSuccessAction({payload: data}))
      )
    )
  ));

  loadAllUnregisteredUsers$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.ShowAllUnregisteredUsersAction),
    switchMap(() =>
      this.usersService.getAllUnregisteredUsers().pipe(
        map(data => fromActions.ShowAllUnregisteredUsersSuccessAction({payload: data}))
      )
    )
  ));

  loadAlltheUsers$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.ShowAllUsersAction),
    switchMap(() =>
      this.usersService.getAllUsers().pipe(
        map(data => fromActions.ShowAllUsersSuccessAction({payload: data}))
      )
    )
  ));

}