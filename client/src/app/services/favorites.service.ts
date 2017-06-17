import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IMovieDetails } from '../interfaces/movie-details';
import { IMovieResult } from '../interfaces/movie-response';
import 'rxjs/Rx';

const apiUrl = 'http://localhost:3000';

@Injectable()
export class FavoritesService {

  constructor(private http: Http) { }

  getFavorites(): Observable<Array<IMovieDetails>> {
    return this.http.get(`${apiUrl}/favourites`, { withCredentials: true })
      .map((res) => {
        return res.json();
      });
  }

  addToFavorites(movie: IMovieDetails | IMovieResult): Observable<any> {
    let body = { movie: movie };
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers, withCredentials: true });
    return this.http.put(`${apiUrl}/favourites`, body, options)
      .map((res) => {
        return res.json();
      });
  }

  removeFromFavorites(movieId: string): Observable<any> {
    let body = { id: movieId };
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers, body: body, withCredentials: true });
    return this.http.delete(`${apiUrl}/favourites`, options)
      .map((res) => {
        return res.json();
      });
  }

}
