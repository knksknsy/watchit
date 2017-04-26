import {IPopularMovies} from '../../interfaces/popular-movies';
import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api/api.service';

@Component({
  selector: 'app-popular-movies-view',
  templateUrl: './popular-movies-view.component.html',
  styleUrls: ['./popular-movies-view.component.scss']
})
export class PopularMoviesViewComponent implements OnInit {
  public _response: IPopularMovies;

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.apiService.getPopularMovies()
      .subscribe((next) => {
        this._response = next;
      })
  }

  get response(): IPopularMovies {
    return this._response;
  }

  set response(response: IPopularMovies) {
    this._response = response;
  }

}
