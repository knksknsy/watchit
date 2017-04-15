import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ISearchMoviesResult } from '../../interfaces/search-movies';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  private _data: ISearchMoviesResult

  constructor(private router: Router) { }

  get data(): ISearchMoviesResult {
    return this._data;
  }

  @Input()
  set data(data: ISearchMoviesResult) {
    this._data = data;
  }

  openDetails(id: number) {
    this.router.navigate(['/details', id]);
  }

}
