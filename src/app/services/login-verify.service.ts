import { Injectable } from '@angular/core';
import { Login, LoginResponce } from './login';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginVerifyService {

  private baseUrl = 'http://localhost:3000/login';

  constructor(private httpClient: HttpClient) { }

  authUser(login: Login): Observable<LoginResponce> {
    return this.httpClient.post(this.baseUrl, login);
  }
  isAuthenticated(): boolean {
    return localStorage.getItem('token') ? true : false
  }
}
