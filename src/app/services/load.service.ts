import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDes } from './movie-des';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoadService {
  private baseUrl = 'http://localhost:3000/api/movies/getMovieList';

  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<MovieDes[]> {
    return this.httpClient.get<MovieDes[]>(this.baseUrl);
  }


  updateReview(movieid: string | number, newReview: string, userName: string, likings: boolean): Observable<any> {
    const url = `http://localhost:3000/api/movies//update/${movieid}`;
    return this.httpClient.put(url, { review: newReview, userName, likings });
  }

}
