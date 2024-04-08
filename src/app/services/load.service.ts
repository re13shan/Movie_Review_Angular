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


  updateReview(id: string | number, updatedReview: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    const updatedMovie = { reviews: [updatedReview] };
    return this.httpClient.put(url, updatedMovie);
  }

}
