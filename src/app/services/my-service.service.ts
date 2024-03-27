import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(
    private myHttp: HttpClient
  ) { }

  add(num1: number, num2: number): number {
    return num1 + num2;
  }

  getUpcomingMovies(): Observable<any> {
    const apiUrl = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
    return this.myHttp.get<any>(apiUrl);
  }
}