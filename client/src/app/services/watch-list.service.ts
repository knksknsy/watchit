import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IMovieDetails } from '../interfaces/movie-details';
import { IMovieResult } from '../interfaces/movie-response';
import 'rxjs/Rx';

@Injectable()
export class WatchListService {

  constructor(private http: Http) { }

  getWatchList(): Observable<IMovieResult> {
    return this.http.get('http://localhost:3000/watchlist')
      .map((res) => {
        return res.json();
      });
  }

  addToWatchList(movie: IMovieDetails): Observable<Response> {
    return this.http.post('http://localhost:3000/watchlist', movie)
      .map((res) => {
        return res.json();
      })
  }

  removeFromWatchList(movieId: number): Observable<Response> {
    return this.http.delete(`http://localhost:3000/watchlist/${movieId}`)
      .map((res) => {
        return res.json();
      });
  }

}
