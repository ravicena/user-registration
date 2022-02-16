import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/user';
import { UnregisteredUsers } from '../models/unregisteredUsers';
import { AllUsers } from '../models/allusers';

@Injectable()
export class UsersService {
    constructor(private http: HttpClient) { }

    url = "https://5c3ce12c29429300143fe570.mockapi.io/api/registeredusers";
    getAllRegisteredUsers(): Observable<Users[]> {
        return this.http.get<Users[]>(this.url);
    }

    unregisteredUsersURL = "https://5c3ce12c29429300143fe570.mockapi.io/api/unregisteredusers"
    getAllUnregisteredUsers(): Observable<UnregisteredUsers[]> {
        return this.http.get<UnregisteredUsers[]>(this.unregisteredUsersURL);
    }

    allUsersURL = "https://5c3ce12c29429300143fe570.mockapi.io/api/projectmemberships"
    getAllUsers(): Observable<AllUsers[]> {
        return this.http.get<AllUsers[]>(this.allUsersURL);
    }
}