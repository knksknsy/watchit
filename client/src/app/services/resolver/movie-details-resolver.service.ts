import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { APIService } from '../api/api.service';
import { ViewComponentService } from '../view-component.service';
import { IMovieDetails } from '../../interfaces/movie-details';
import { Observable } from 'rxjs//Observable';

@Injectable()
export class MovieDetailsResolverService implements Resolve<IMovieDetails> {

  constructor(private apiService: APIService, private viewComponentService: ViewComponentService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMovieDetails> {
    return this.apiService.getMovieDetails(route.params.id, 'credits')
      .flatMap((details) => {
        return this.viewComponentService.setListStatusDetail(details);
      });
  }

}
