import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api/api.service';
import { IMovieResponse } from '../../interfaces/movie-response';

@Component({
  selector: 'app-popular-movies-view',
  templateUrl: './popular-movies-view.component.html',
  styleUrls: ['./popular-movies-view.component.scss']
})
export class PopularMoviesViewComponent implements OnInit {
  public _response: IMovieResponse;

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.apiService.getPopularMovies()
      .subscribe((next) => {
        this._response = next;
      })
  }

  get response(): IMovieResponse {
    return this._response;
  }

  set response(response: IMovieResponse) {
    this._response = response;
  }

}
