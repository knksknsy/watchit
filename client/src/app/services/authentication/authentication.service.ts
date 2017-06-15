import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  register(user) {
    // todo: implement backend
    return this.http.post('/api/register', user)
      .map((res: Response) => {
        res.json();
      });
  }

  login(user) {
    // todo: implement backend
    return this.http.post('/api/login', user)
      .map((res: Response) => {
        let user = res.json();
        if (user && user.token) {
          // save token in session
        }
      });
  }

}
