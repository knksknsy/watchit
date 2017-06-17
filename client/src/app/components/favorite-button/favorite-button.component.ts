import { Component, OnInit, Input } from '@angular/core';
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
export class FavoriteButtonComponent implements OnInit {
  private _data: any;
  private _dataType: string;
  public isFav: boolean = false;

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

  constructor(private favoritesService: FavoritesService, private apiService: APIService, private authGuard: AuthGuard) { }

  ngOnInit() {
    this.setIsFav();
  }

  setIsFav() {
    this.favoritesService.getFavorites()
      .subscribe((favs) => {
        let index = favs.findIndex((fav) => {
          return fav.id === this.data.id;
        });
        if (index > -1) {
          this.isFav = true
        } else {
          this.isFav = false;
        }
      });
  }

  toggleFavorite() {
    this.authGuard.canActivate()
      .subscribe((loggedIn) => {
        if (loggedIn && !this.isFav) {
          if (this.dataType === 'IMovieDetails') {
            this.favoritesService.addToFavorites(this.data)
              .subscribe((res) => {
                this.setIsFav();
              });
          }
          if (this.dataType === 'IMovieResult') {
            this.apiService.getMovieDetails(this.data.id, 'credits')
              .subscribe((details) => {
                this.favoritesService.addToFavorites(details)
                  .subscribe((res) => {
                    this.setIsFav();
                  });
              });
          }
        } else if (loggedIn && this.isFav) {
          this.favoritesService.removeFromFavorites(this.data.id)
            .subscribe((res) => {
              this.setIsFav();
            });
        }
      });
  }

}
