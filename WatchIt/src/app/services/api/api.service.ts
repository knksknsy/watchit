import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { apiKey } from '../../../../config/globals';
import { Observable } from 'rxjs/Observable';
import { IMovieDetails } from '../../interfaces/movie-details';
import { IMovieResponse } from '../../interfaces/movie-response';
import { ICredit } from '../../interfaces/credit';
import 'rxjs/Rx';

@Injectable()
export class APIService {
  private _url = 'https://api.themoviedb.org/3/';
  private _imgUrl = "https://image.tmdb.org/t/p/";
  private _language = navigator.language;
  private _region: string;

  constructor(private http: Http) {
  }

  get url() {
    return this._url;
  }

  set url(url: string) {
    this._url = url;
  }

  get imgUrl() {
    return this._imgUrl;
  }

  set imgUrl(imgUrl: string) {
    this._imgUrl = imgUrl;
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

  getImgUrlOriginal(path: string) {
    return this._imgUrl + 'original' + path;
  }

  getImgUrlW300(path: string) {
    return this._imgUrl + 'w300' + path;
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

  getCredits(id: number): Observable<ICredit> {
    return this.http.get(this.url + 'movie/' + id + '/credits?api_key=' + apiKey)
      .map((res) => {
        return res.json();
      });
  }

  getMovieDetails(id: number): Observable<IMovieDetails> {
    return this.http.get(this.url + 'movie/' + id + '?api_key=' + apiKey + '&language=' + this.language)
      .map((res) => {
        return res.json();
      });
  }

}
