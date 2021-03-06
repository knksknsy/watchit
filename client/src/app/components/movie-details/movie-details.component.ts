import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIService } from '../../services/api/api.service';
import { ViewComponentService } from '../../services/view-component.service';
import { IMovieDetails } from '../../interfaces/movie-details';
import { IMovieResponse } from '../../interfaces/movie-response';
import { IMovieResult } from '../../interfaces/movie-response';
import { ICredit, ICast } from '../../interfaces/credit';
import 'rxjs/Rx';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  private _results: IMovieDetails;
  private _cast: Array<ICast>;
  public recommendations: IMovieResponse;
  public isMobile: boolean;
  public mobileWidth = 768;

  constructor(private apiService: APIService, private route: ActivatedRoute, private el: ElementRef, private viewComponentService: ViewComponentService) { }

  ngOnInit() {
    this.isMobile = window.document.body.offsetWidth <= this.mobileWidth;
    this.route.params.forEach(params => {
      this.results = this.route.snapshot.data['details'];
      this.recommendations = this.route.snapshot.data['recommendations'];
      if (this.results.credits.cast) {
        this.cast = this.results.credits.cast.slice(0, 5);
      }
      window.scrollTo(0, 0);
    });
  }

  onResize(event) {
    this.isMobile = event.target.innerWidth <= this.mobileWidth;
  }

  get results(): IMovieDetails {
    return this._results;
  }

  set results(results: IMovieDetails) {
    this._results = results;
  }

  get cast(): Array<ICast> {
    return this._cast;
  }

  set cast(cast: Array<ICast>) {
    this._cast = cast;
  }

}
