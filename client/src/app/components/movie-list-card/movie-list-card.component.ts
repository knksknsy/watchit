import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IMovieResult } from '../../interfaces/movie-response';
import { MovieListService } from '../../services/movie-list.service';
import { APIService } from '../../services/api/api.service';

@Component({
  selector: 'app-movie-list-card',
  templateUrl: './movie-list-card.component.html',
  styleUrls: ['./movie-list-card.component.scss']
})
export class MovieListCardComponent {
  private _data: IMovieResult;
  private _removable: boolean;
  @Output() onRemove: EventEmitter<any> = new EventEmitter();

  constructor(private apiService: APIService, private router: Router, private movieListService: MovieListService) { }

  get data(): IMovieResult {
    return this._data;
  }

  @Input()
  set data(data: IMovieResult) {
    this._data = data;
  }

  get removable(): boolean {
    return this._removable;
  }

  @Input()
  set removable(removable: boolean) {
    this._removable = removable;
  }

  removeMovieList(id: string) {
    this.movieListService.removeMovieList(id)
      .subscribe((res) => {
        if (res.status === 'ok') {
          this.onRemove.emit({ id: id });
        }
      });
  }

  openMovieList(id: string) {
    this.router.navigate(['/list', id]);
  }

}
