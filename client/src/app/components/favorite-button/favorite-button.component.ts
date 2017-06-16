import { Component, OnInit, Input } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { APIService } from '../../services/api/api.service';
import { IMovieResult } from '../../interfaces/movie-response';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent implements OnInit {
  private _data: IMovieResult;

  get data(): IMovieResult {
    return this._data;
  }

  @Input()
  set data(data: IMovieResult) {
    this._data = data;
  }

  constructor(private favoritesService: FavoritesService, private apiService: APIService) { }

  ngOnInit() {
    console.log(this.data);
  }

  toggleFavorite() {
    console.log('toggle favorite');
  }

}
