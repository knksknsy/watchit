import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIService } from '../../services/api/api.service';
import { IMovieDetails } from '../../interfaces/movie-details';
import { ICredit } from '../../interfaces/credit';
import 'rxjs/Rx';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  private _results: IMovieDetails;
  private _credit: ICredit;

  constructor(private apiService: APIService, private route: ActivatedRoute, private el: ElementRef) { }

  ngOnInit() {
    this.route.params.forEach(params => {
      this.results = this.route.snapshot.data['details'];
    });
  }

  get results(): IMovieDetails {
    return this._results;
  }

  set results(results: IMovieDetails) {
    this._results = results;
  }

  get credit(): ICredit {
    return this._credit;
  }

  set credit(credit: ICredit) {
    this._credit = credit;
  }

}
