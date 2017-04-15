import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIService } from '../../services/api/api.service';
import { IDetailsMovie } from '../../interfaces/details-movie';
import 'rxjs/Rx';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  private _results: IDetailsMovie;

  constructor(private apiService: APIService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) =>
      this.apiService.detailsMovie(params['id']))
      .subscribe((next) => {
        this.results = next;
      });
  }

  get results(): IDetailsMovie {
    return this._results;
  }

  set results(results: IDetailsMovie) {
    this._results = results;
  }

}
