import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ViewComponentService } from '../../services/view-component.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { IMovieResponse, IMovieResult } from '../../interfaces/movie-response';

@Component({
  selector: 'app-search-movies-view',
  templateUrl: './search-movies-view.component.html',
  styleUrls: ['./search-movies-view.component.scss']
})
export class SearchMoviesViewComponent implements OnInit {
  private _response: IMovieResponse;

  constructor(private route: ActivatedRoute, private viewComponentService: ViewComponentService) { }

  ngOnInit() {
    this.route.params.forEach(params => {
      this.response = this.route.snapshot.data['response'];
      window.scrollTo(0, 0);
    });
  }

  get response(): IMovieResponse {
    return this._response;
  }

  set response(response: IMovieResponse) {
    this._response = response;
  }

}
