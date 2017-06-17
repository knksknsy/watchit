import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IMovieDetails } from '../interfaces/movie-details';
import { IMovieResult } from '../interfaces/movie-response';
import 'rxjs/Rx';

const apiUrl = 'http://localhost:3000';

@Injectable()
export class WatchListService {

  constructor(private http: Http) { }

  getWatchList(): Observable<Array<IMovieDetails>> {
    return this.http.get(`${apiUrl}/watchlist`, { withCredentials: true })
      .map((res) => {
        return res.json();
      });
  }

  addToWatchList(movie: IMovieDetails | IMovieResult): Observable<any> {
    let movieBody = { movie: movie };
    let body = JSON.stringify(movieBody);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers, withCredentials: true });
    return this.http.put(`${apiUrl}/watchlist`, body, options)
      .map((res) => {
        return res.json();
      });
  }

  removeFromWatchList(movieId: string): Observable<any> {
    let idBody = { id: movieId };
    let body = JSON.stringify(idBody);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers, body: body, withCredentials: true });
    return this.http.delete(`${apiUrl}/watchlist`, options)
      .map((res) => {
        return res.json();
      });
  }

}
