import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot } from '@angular/router';
import { FavoritesService } from '../favorites.service';
import { IMovieResult } from '../../interfaces/movie-response';
import { Observable } from 'rxjs//Observable';

@Injectable()
export class FavoritesResolverService {

  constructor(private favoritesService: FavoritesService) { }

  resolve(state: RouterStateSnapshot): Observable<Array<IMovieResult>> {
    return this.favoritesService.getFavorites();
  }

}
