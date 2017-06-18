import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot } from '@angular/router';
import { FavoritesService } from '../favorites.service';
import { IMovieDetails } from '../../interfaces/movie-details';
import { Observable } from 'rxjs//Observable';

@Injectable()
export class FavoritesResolverService {

  constructor(private favoritesService: FavoritesService) { }

  resolve(state: RouterStateSnapshot): Observable<Array<IMovieDetails>> {
    return this.favoritesService.getFavorites()
      .map((details) => {
        details.forEach((detail) => {
          detail.fav = true;
        });
        return details;
      });
  }

}
