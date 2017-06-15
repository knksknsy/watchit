import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IMovieDetails } from '../interfaces/movie-details';
import { IMovieResult } from '../interfaces/movie-response';
import 'rxjs/Rx';

@Injectable()
export class FavoritesService {

  constructor(private http: Http) { }

  getFavorites(): Observable<Array<IMovieResult>> {
    return this.http.get('http://localhost:3000/favorites')
      .map((res) => {
        return res.json();
      });
  }

  addToFavorites(movie: IMovieDetails): Observable<Response> {
    return this.http.post('http://localhost:3000/favorites', movie)
      .map((res) => {
        return res.json();
      })
  }

  removeFromFavorites(movieId: number): Observable<Response> {
    return this.http.delete(`http://localhost:3000/favorites/${movieId}`)
      .map((res) => {
        return res.json();
      });
  }

}
