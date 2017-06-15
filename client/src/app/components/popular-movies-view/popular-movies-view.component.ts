import { Component, Input } from '@angular/core';
import { IMovieResponse } from '../../interfaces/movie-response';

@Component({
  selector: 'app-popular-movies-view',
  templateUrl: './popular-movies-view.component.html',
  styleUrls: ['./popular-movies-view.component.scss']
})
export class PopularMoviesViewComponent {
  private _data: IMovieResponse;

  get data(): IMovieResponse {
    return this._data;
  }

  @Input()
  set data(data: IMovieResponse) {
    this._data = data;
  }

  constructor() { }

}
