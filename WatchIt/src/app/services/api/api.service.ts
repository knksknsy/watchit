import { Response } from '@angular/http/src/static_response';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class APIService {
  private url = 'https://api.themoviedb.org/3/';

  private _key: string;
  private _language = navigator.language;
  private _region: string;

  constructor(private http: Http) {
    this.http.get('../config/api-key.json')
      .subscribe((next) => {
        this.key = JSON.parse(next.text()).key;
      });
  }

  get key() {
    return this._key;
  }

  set key(key: string) {
    this._key = key
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

  searchMovie(query: string) {
    return this.http.get(this.url + 'search/movie?api_key=' + this.key + '&language=' + this.language + '&query=' + query + '&region=' + this.region);
  }

}
