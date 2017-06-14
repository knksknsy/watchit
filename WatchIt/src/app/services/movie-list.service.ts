import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IMovieList } from '../interfaces/movie-list';
import { IMovieDetails } from '../interfaces/movie-details';
import { IMovieResult } from '../interfaces/movie-response';
import 'rxjs/Rx';

@Injectable()
export class MovieListService {

  constructor(private http: Http) { }

  getMovieLists(): Observable<IMovieList> {
    return this.http.get('http://localhost:3000/lists')
      .map((res) => {
        return res.json();
      });
  }

  addMovieList(list: IMovieList): Observable<Response> {
    return this.http.put('http://localhost:3000/list', list)
      .map((res) => {
        return res.json();
      });
  }

  removeMovieList(listId: number): Observable<Response> {
    return this.http.delete(`http://localhost:3000/list/${listId}`)
      .map((res) => {
        return res.json();
      });
  }

  getMoviesFromList(listId: number): Observable<IMovieDetails> {
    return this.http.get(`http://localhost:3000/list/${listId}`)
      .map((res) => {
        return res.json();
      });
  }

  addMovieToList(listId: number, movie: IMovieDetails): Observable<Response> {
    return this.http.post(`http://localhost:3000/list/${listId}`, movie)
      .map((res) => {
        return res.json();
      });
  }

  removeMovieFromList(listId: number, movieId): Observable<IMovieDetails> {
    return this.http.delete(`http://localhost:3000/list/${listId}/${movieId}`)
      .map((res) => {
        return res.json();
      });
  }

}
