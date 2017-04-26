import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { apiKey } from '../../../../config/globals';
import { Observable } from 'rxjs/Observable';
import { IMovieDetails } from '../../interfaces/movie-details';
import { IMovieResponse } from '../../interfaces/movie-response';
import 'rxjs/Rx';

@Injectable()
export class APIService {
  private url = 'https://api.themoviedb.org/3/';
  private _key: string;
  private _language = navigator.language;
  private _region: string;

  constructor(private http: Http) {
  }

  get language() {
    return this._language;
  }

  set language(language: string) {
    this._language = language;
  }

  get region() {
    return this.language.split('-')[1];
  }

  set region(region: string) {
    this._region = region;
  }

  searchMovies(query: string): Observable<IMovieResponse> {
    return this.http.get(this.url + 'search/movie?api_key=' + apiKey + '&language=' + this.language + '&query=' + query + '&region=' + this.region)
      .map((res) => {
        return res.json();
      });
  }

  getUpcomingMovies(): Observable<IMovieResponse> {
    return this.http.get(this.url + 'movie/upcoming?api_key=' + apiKey + '&language=' + this.language + '&region=' + this.region)
      .map((res) => {
        return res.json();
      });
  }

  getPopularMovies(): Observable<IMovieResponse> {
    return this.http.get(this.url + 'movie/popular?api_key=' + apiKey + '&language=' + this.language + '&region=' + this.region)
      .map((res) => {
        return res.json();
      });
  }

  detailsMovie(id: number): Observable<IMovieDetails> {
    return this.http.get(this.url + 'movie/' + id + '?api_key=' + apiKey + '&language=' + this.language)
      .map((res) => {
        return res.json();
      });
  }

}
