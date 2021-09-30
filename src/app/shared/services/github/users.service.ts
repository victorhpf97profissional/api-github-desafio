import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user';
import { UserInfo } from '../../interfaces/user-info';

@Injectable()
export class UsersService {

    private URL = environment.GITHUB_API_URL;

    constructor(private http: HttpClient,) { }

    getAll(): Observable<User[]> {
        return this.http.get<User[]>(`${this.URL}/users`);
    }

    getByName(userName: string): Observable<UserInfo> {
        return this.http.get<UserInfo>(`${this.URL}/users/${userName}`);
    }

}
