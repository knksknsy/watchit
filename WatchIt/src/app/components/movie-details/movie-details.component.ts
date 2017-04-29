import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIService } from '../../services/api/api.service';
import { IMovieDetails } from '../../interfaces/movie-details';
import 'rxjs/Rx';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  private _results: IMovieDetails;

  constructor(private apiService: APIService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.results = this.route.snapshot.data['details'];
  }

  get results(): IMovieDetails {
    return this._results;
  }

  set results(results: IMovieDetails) {
    this._results = results;
  }

}
