import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { APIService } from '../api/api.service';
import { IMovieResponse } from '../../interfaces/movie-response';
import { Observable } from 'rxjs//Observable';

@Injectable()
export class SearchMoviesResolverService implements Resolve<IMovieResponse>{

  constructor(private apiService: APIService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMovieResponse> {
    return this.apiService.searchMovies(route.params.query);
  }

}
