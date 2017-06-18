import { AuthGuard } from '../guards/auth.guard';
import { Injectable } from '@angular/core';
import { WatchListService } from './watch-list.service';
import { FavoritesService } from './favorites.service';
import { IMovieDetails } from '../interfaces/movie-details';
import { IMovieResponse } from '../interfaces/movie-response';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ViewComponentService {

  constructor(private favoritesService: FavoritesService, private watchListService: WatchListService, private authGuard: AuthGuard) { }

  setListStatusResponse(movieResponse: IMovieResponse): Observable<IMovieResponse> {
    return this.authGuard.canActivateWithoutRedirecting()
      .flatMap((loggedIn) => {
        if (loggedIn) {
          return Observable
            .zip(
            this.favoritesService.getFavorites(),
            this.watchListService.getWatchList()
            )
            .map(([favorites, watchList]) => {
              movieResponse.results.forEach((movie) => {
                favorites.forEach((favorite) => {
                  if (movie.id === favorite.id) {
                    movie.fav = true;
                  }
                });
                watchList.forEach((watch) => {
                  if (movie.id === watch.id) {
                    movie.watch = true;
                  }
                });
              });
              return movieResponse;
            });
        } else {
          return Observable.of(movieResponse);
        }
      });
  }

  setListStatusDetails(movieDetails: IMovieDetails[]): Observable<IMovieDetails[]> {
    return Observable
      .zip(
      this.favoritesService.getFavorites(),
      this.watchListService.getWatchList()
      )
      .map(([favorites, watchList]) => {
        movieDetails.forEach((movie) => {
          favorites.forEach((favorite) => {
            if (movie.id === favorite.id) {
              movie.fav = true;
            }
          });
          watchList.forEach((watch) => {
            if (movie.id === watch.id) {
              movie.watch = true;
            }
          });
        });
        return movieDetails;
      });
  }

  setListStatusDetail(movieDetail: IMovieDetails): Observable<IMovieDetails> {
    return this.authGuard.canActivateWithoutRedirecting()
      .flatMap((loggedIn) => {
        if (loggedIn) {
          return Observable
            .zip(
            this.favoritesService.getFavorites(),
            this.watchListService.getWatchList()
            )
            .map(([favorites, watchList]) => {
              let favIndex = favorites.findIndex((favorite) => {
                return favorite.id === movieDetail.id
              });
              let watchIndex = watchList.findIndex((watch) => {
                return watch.id === movieDetail.id
              });
              if (favIndex > -1) {
                movieDetail.fav = true;
              }
              if (watchIndex > -1) {
                movieDetail.watch = true;
              }
              return movieDetail;
            });
        } else {
          return Observable.of(movieDetail);
        }
      });
  }

}
