import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot } from '@angular/router';
import { WatchListService } from '../watch-list.service';
import { IMovieDetails } from '../../interfaces/movie-details';
import { Observable } from 'rxjs//Observable';

@Injectable()
export class WatchListResolverService {

  constructor(private watchListService: WatchListService) { }

  resolve(state: RouterStateSnapshot): Observable<Array<IMovieDetails>> {
    return this.watchListService.getWatchList();
  }
}
