import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISearchMoviesResult } from '../../interfaces/search-movies';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  private _data: ISearchMoviesResult
  private _imgPath = 'https://image.tmdb.org/t/p/original';

  constructor(private router: Router) { }

  get data(): ISearchMoviesResult {
    return this._data;
  }

  @Input()
  set data(data: ISearchMoviesResult) {
    this._data = data;
  }

  get imgPath(): string {
    return this._imgPath;
  }

  set imgPath(imgPath: string) {
    this._imgPath = imgPath;
  }

  openDetails(id: number) {
    this.router.navigate(['/details', id]);
  }

}
