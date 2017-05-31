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

  constructor(private http: Http) { }

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
    return this._region;
  }

  set region(region: string) {
    this._region = region;
  }

  appendRegion(url: string): string {
    // TODO: get region information of user
    if (this.region) {
      url += '&region=' + this.region;
    }
    return url;
  }

  appendToResponse(url: string, namespace: string): string {
    return url += "&append_to_response=" + namespace;
  }

  getImgUrlOriginal(path: string) {
    return this._imgUrl + 'original' + path;
  }

  getImgUrlW300(path: string) {
    return this._imgUrl + 'w300' + path;
  }

  searchMovies(query: string): Observable<IMovieResponse> {
    let url = this.url + 'search/movie?api_key=' + apiKey + '&language=' + this.language + '&query=' + query;
    return this.http.get(this.appendRegion(url))
      .map((res) => {
        return res.json();
      });
  }

  getUpcomingMovies(): Observable<IMovieResponse> {
    let url = this.url + 'movie/upcoming?api_key=' + apiKey + '&language=' + this.language;
    return this.http.get(this.appendRegion(url))
      .map((res) => {
        return res.json();
      });
  }

  getPopularMovies(): Observable<IMovieResponse> {
    let url = this.url + 'movie/popular?api_key=' + apiKey + '&language=' + this.language;
    return this.http.get(this.appendRegion(url))
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

  getMovieDetails(id: number, append?: string): Observable<IMovieDetails> {
    let url = this.url + 'movie/' + id + '?api_key=' + apiKey + '&language=' + this.language;
    if (append) {
      url = this.appendToResponse(url, append);
    }
    return this.http.get(url)
      .map((res) => {
        return res.json();
      });
  }

  getRecommendedMovies(id: number): Observable<IMovieResponse> {
    let url = this.url + 'movie/' + id + '/recommendations?api_key=' + apiKey + '&language=' + this.language;
    return this.http.get(url)
      .map((res) => {
        return res.json();
      })
  }
  
  
  getDiscoverMovies(sortBy : string, releaseDateGTE?: number, releaseDateLTE?: number, voteAverageGTE?: number, genres?: string, year?: number, pageIndex?: number): Observable<IMovieResponse>{
	  let url = this.url + 'discover/movie?api_key=' + apiKey + '&language=' + this.language + '&sort_by=' + sortBy + '&page=' + pageIndex;
	  if (releaseDateGTE) {
	  	url += '&release_date.gte=' + releaseDateGTE;
      }
	  if (releaseDateLTE) {
		url += '&release_date.lte=' + releaseDateLTE;
      }
	  if(voteAverageGTE){
		  url += '&vote_average.gte=' + voteAverageGTE;
	  }
	  if (genres) {
		url += '&with_genres=' + genres;
      }
	  if (year) {
		url += '&year=' + year;
      }
	  return this.http.get(url)
      .map((res) => {
        return res.json();
      })
  }

}
