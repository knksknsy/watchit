import { Component, OnInit, Input } from '@angular/core';
import { MovieListService } from '../../services/movie-list.service';
import { APIService } from '../../services/api/api.service';
import { IMovieResult } from '../../interfaces/movie-response';

@Component({
  selector: 'app-movie-list-remove-button',
  templateUrl: './movie-list-remove-button.component.html',
  styleUrls: ['./movie-list-remove-button.component.scss']
})
export class MovieListRemoveButtonComponent implements OnInit {
  private _data: IMovieResult;

  get data(): IMovieResult {
    return this._data;
  }

  @Input()
  set data(data: IMovieResult) {
    this._data = data;
  }

  constructor(private movieListService: MovieListService, private apiService: APIService) { }

  ngOnInit() {
    console.log(this.data);
  }

  removeFromList() {
    console.log('remove from list');
  }
}
