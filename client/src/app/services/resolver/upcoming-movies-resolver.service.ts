import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { APIService } from '../api/api.service';
import { ViewComponentService } from '../view-component.service';
import { IMovieResponse } from '../../interfaces/movie-response';
import { Observable } from 'rxjs//Observable';

@Injectable()
export class UpcomingMoviesResolverService implements Resolve<IMovieResponse>{

  constructor(private apiService: APIService, private viewComponentService: ViewComponentService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMovieResponse> {
    return this.apiService.getUpcomingMovies()
      .flatMap((res) => {
        return this.viewComponentService.setListStatusResponse(res);
      });
  }

}
