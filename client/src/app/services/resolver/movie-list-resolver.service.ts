import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MovieListService } from '../movie-list.service';
import { ViewComponentService } from '../view-component.service';
import { IMovieDetails } from '../../interfaces/movie-details';
import { Observable } from 'rxjs//Observable';

@Injectable()
export class MovieListResolverService {

  constructor(private movieListService: MovieListService, private viewComponentService: ViewComponentService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<IMovieDetails>> {
    return this.movieListService.getMoviesFromList(route.params.id)
      .flatMap((details) => {
        return this.viewComponentService.setListStatusDetails(details)
      });
  }
}
