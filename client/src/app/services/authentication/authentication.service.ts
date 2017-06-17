import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const apiUrl = 'http://localhost:3000';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  register(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers, withCredentials: true });
    return this.http.post(`${apiUrl}/user`, user, options)
      .map((res: Response) => {
        res.json();
      });
  }

  login(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers, withCredentials: true });
    return this.http.post(`${apiUrl}/user/login`, user, options)
      .map((res: Response) => {
        return res.json();
      })
      .flatMap((res) => {
        if (res.status && res.status === 'ok') {
          return Observable.of(res);
        }
        throw Observable.throw(res);
      });
  }

  logout() {
    return this.http.post(`${apiUrl}/user/logout`, { withCredentials: true })
      .map((res: Response) => {
        return res.json();
      });
  }

  isLoggedIn() {
    return this.http.get(`${apiUrl}/user/isLoggedIn`, { withCredentials: true })
      .map((res) => {
        return res.json().loggedIn;
      });
  }

}
