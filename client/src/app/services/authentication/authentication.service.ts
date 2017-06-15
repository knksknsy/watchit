import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

const apiUrl = 'http://localhost:3000';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  register(user) {
    return this.http.post(`${apiUrl}/user`, user)
      .map((res: Response) => {
        res.json();
      });
  }

  login(user) {
    return this.http.post(`${apiUrl}/user/login`, user)
      .map((res: Response) => {
        debugger;
        // todo: check if cookie is passed
        let user = res.json();
        if (user && user.token) {
          // save token in session
        }
      });
  }

  logout(session) {
    return this.http.post(`${apiUrl}/user/logout`, session)
      .map((res: Response) => { });
  }

}
