import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';
import { AuthGuard } from '../../guards/auth.guard';
import { APIService } from '../../services/api/api.service';
import { IMovieDetails } from '../../interfaces/movie-details';
import { IMovieResult } from '../../interfaces/movie-response';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent {
  private _data: any;
  private _dataType: string;

  get data(): any {
    return this._data;
  }

  @Input()
  set data(data: any) {
    this._data = data;
  }

  get dataType(): string {
    return this._dataType;
  }

  @Input()
  set dataType(dataType: string) {
    this._dataType = dataType;
  }

  constructor(private favoritesService: FavoritesService, private apiService: APIService, private authGuard: AuthGuard, private router: Router) { }

  toggleFavorite() {
    this.authGuard.canActivateWithoutRedirecting()
      .subscribe((loggedIn) => {
        if (loggedIn && !this.data.fav) {
          if (this.dataType === 'IMovieDetails') {
            this.favoritesService.addToFavorites(this.data)
              .subscribe((res) => {
                this.data.fav = true;
              });
          }
          if (this.dataType === 'IMovieResult') {
            this.apiService.getMovieDetails(this.data.id, 'credits')
              .subscribe((details) => {
                this.favoritesService.addToFavorites(details)
                  .subscribe((res) => {
                    this.data.fav = true;
                  });
              });
          }
        } else if (loggedIn && this.data.fav) {
          this.favoritesService.removeFromFavorites(this.data.id)
            .subscribe((res) => {
              this.data.fav = false;
            });
        } else if (!loggedIn) {
          this.router.navigate(['/login']);
        }
      });
  }

}
