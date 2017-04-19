import { Component, Input, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { APIService } from '../../services/api/api.service';
import { ISearchMovies, ISearchMoviesResult } from '../../interfaces/search-movies';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-search-movies-view',
  templateUrl: './search-movies-view.component.html',
  styleUrls: ['./search-movies-view.component.scss']
})
export class SearchMoviesViewComponent implements OnInit {
  private _response: ISearchMovies;
  private _results: Array<ISearchMoviesResult>;

  constructor(private apiService: APIService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => 
      this.apiService.searchMovies(params['query']))
      .subscribe((next) => {
        this.results = next.results;
      });

  }

  get response(): ISearchMovies {
    return this._response;
  }

  set response(response: ISearchMovies) {
    this._response = response;
  }

  get results(): Array<ISearchMoviesResult> {
    return this._results;
  }

  set results(results: Array<ISearchMoviesResult>) {
    this._results = results;
  }
}
