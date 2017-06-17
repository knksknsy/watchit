import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivate(next?: ActivatedRouteSnapshot, state?: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isLoggedIn()
      .map((loggedIn) => {
        if (loggedIn) {
          return loggedIn;
        }
        this.router.navigate(['/login']);
        return loggedIn;
      });
  }
}
