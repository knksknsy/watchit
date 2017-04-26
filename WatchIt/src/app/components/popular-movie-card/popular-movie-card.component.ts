import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IMovieResult } from '../../interfaces/movie-response';

@Component({
  selector: 'app-popular-movie-card',
  templateUrl: './popular-movie-card.component.html',
  styleUrls: ['./popular-movie-card.component.scss']
})
export class PopularMovieCardComponent {
  private _data: IMovieResult;
  private _imgPath = 'https://image.tmdb.org/t/p/original';

  constructor(private router: Router) { }

  get data(): IMovieResult {
    return this._data;
  }

  @Input()
  set data(data: IMovieResult) {
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
