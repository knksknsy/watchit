import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIService } from '../../services/api/api.service';
import { IMovieDetails } from '../../interfaces/movie-details';
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
  public recommendations;
  public isMobile: boolean;
  public mobileWidth = 767;

  constructor(private apiService: APIService, private route: ActivatedRoute, private el: ElementRef) { }

  ngOnInit() {
    this.isMobile = window.document.body.offsetWidth <= this.mobileWidth;
    this.route.params.forEach(params => {
      this.results = this.route.snapshot.data['details'];
      if (this.results.credits.cast) {
        this.cast = this.results.credits.cast.slice(0, 5);
      }
      this.apiService.getRecommendedMovies(this.results.id)
        .subscribe((next) => {
          this.recommendations = next.results;
        })
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
