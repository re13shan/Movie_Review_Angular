import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from './user-info';
@Injectable({
  providedIn: 'root'
})
export class SignupVerifyService {

  private baseUrl = 'http://localhost:3000/register';

  constructor(private httpClient: HttpClient) { }

  getAlluser(): Observable<UserInfo[]> {
    return this.httpClient.get<UserInfo[]>(this.baseUrl);
  }

  onSubmit(user: UserInfo) {
    return this.httpClient.post(this.baseUrl, user);
  }
}
