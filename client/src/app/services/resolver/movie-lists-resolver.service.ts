import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot } from '@angular/router';
import { MovieListService } from '../movie-list.service';
import { IMovieList } from '../../interfaces/movie-list';
import { Observable } from 'rxjs//Observable';

@Injectable()
export class MovieListsResolverService {

  constructor(private movieListService: MovieListService) { }

  resolve(state: RouterStateSnapshot): Observable<Array<IMovieList>> {
    return this.movieListService.getMovieLists();
  }

}
