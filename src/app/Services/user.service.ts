import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User, UserLoginInfo } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<any>{ // backend ignores the role sent - set the role to 'General User'
    
    return this.http.post(registerUserUrl, user);
  }

  loginUser(userLogin: UserLoginInfo): Observable<any>{
    
    return this.http.post(loginUserUrl, userLogin);
  }
}

export const ServerUrl = 'https://localhost:3000/api/';
export const registerUserUrl = ServerUrl + 'auth/register/';
export const loginUserUrl = ServerUrl + 'auth/login/';


