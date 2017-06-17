import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IMovieList } from '../interfaces/movie-list';
import { IMovieDetails } from '../interfaces/movie-details';
import 'rxjs/Rx';

const apiUrl = 'http://localhost:3000';

@Injectable()
export class MovieListService {

  constructor(private http: Http) { }

  createMovieList(listName: string): Observable<any> {
    let body = { newList: { name: listName } }
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers, withCredentials: true });
    return this.http.post(`${apiUrl}/list`, body, options)
      .map((res) => {
        return res.json();
      });
  }

  getMovieLists(): Observable<Array<IMovieList>> {
    return this.http.get(`${apiUrl}/lists`, { withCredentials: true })
      .map((res) => {
        return res.json();
      });
  }

  removeMovieList(listId: string): Observable<any> {
    let body = { id: listId };
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers, body: body, withCredentials: true });
    return this.http.delete(`${apiUrl}/lists`, options)
      .map((res) => {
        return res.json();
      });
  }

  getMoviesFromList(listId: string): Observable<Array<IMovieDetails>> {
    return this.http.get(`${apiUrl}/lists/${listId}`, { withCredentials: true })
      .map((res) => {
        return res.json();
      });
  }

  addMovieToList(listId: string, movie: IMovieDetails): Observable<any> {
    let body = { movie: movie };
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers, withCredentials: true });
    return this.http.put(`${apiUrl}/lists/${listId}`, body, options)
      .map((res) => {
        return res.json();
      });
  }

  removeMovieFromList(listId: string, movieId): Observable<IMovieDetails | any> {
    let body = { id: movieId };
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers, body: body, withCredentials: true });
    return this.http.delete(`${apiUrl}/lists/${listId}`, options)
      .map((res) => {
        return res.json();
      });
  }

}
