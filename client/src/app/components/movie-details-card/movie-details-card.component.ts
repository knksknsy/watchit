import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { APIService } from '../../services/api/api.service';
import { IMovieDetails } from '../../interfaces/movie-details';
import { ICrew } from '../../interfaces/credit';
import 'rxjs/Rx';

@Component({
  selector: 'app-movie-details-card',
  templateUrl: './movie-details-card.component.html',
  styleUrls: ['./movie-details-card.component.scss']
})
export class MovieDetailsCardComponent implements OnInit {
  private _details: IMovieDetails;
  private _crew: Array<ICrew>;
  private _isMobile: boolean;

  constructor(private apiService: APIService, private el: ElementRef) { }

  ngOnInit() {
    this.crew = this.filterCrew(this.details.credits.crew);
  }

  get details(): IMovieDetails {
    return this._details;
  }

  @Input()
  set details(details: IMovieDetails) {
    this._details = details;
  }

  get crew(): Array<ICrew> {
    return this._crew;
  }

  set crew(crew: Array<ICrew>) {
    this._crew = crew;
  }

  get isMobile(): boolean {
    return this._isMobile;
  }

  @Input()
  set isMobile(isMobile: boolean) {
    this._isMobile = isMobile;
  }

  filterCrew(crew: Array<ICrew>): Array<ICrew> {
    let directing = [];
    let writing = [];
    let result = [];
    if (crew) {
      directing = crew.filter((director) => {
        return director.department === 'Directing'
      });
      writing = crew.filter((writer) => {
        return writer.department === 'Writing'
      });
      result.push(directing[0]);
      writing.slice(0, 2).forEach((writer) => {
        result.push(writer);
      });
    }
    return result;
  }
}
