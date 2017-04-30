import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { APIService } from '../../services/api/api.service';
import { IMovieDetails } from '../../interfaces/movie-details';
import { ICredit } from '../../interfaces/credit';
import { PopoverDirective } from 'ngx-bootstrap/popover/popover.directive';
import 'rxjs/Rx';

@Component({
  selector: 'app-movie-details-card',
  templateUrl: './movie-details-card.component.html',
  styleUrls: ['./movie-details-card.component.scss']
})
export class MovieDetailsCardComponent implements OnInit {
  private _details: IMovieDetails;
  private _credits: ICredit;
  public directing = [];
  public writing = [];
  public result = [];
  public isMobile: boolean;
  public mobileWidth = 767;
  @ViewChild('pop') pop: PopoverDirective;

  constructor(private apiService: APIService, private el: ElementRef) { }

  ngOnInit() {
    this.isMobile = window.document.body.offsetWidth <= this.mobileWidth;
    this.apiService.getCredits(this.details.id)
      .subscribe((next) => {
        this.credits = next;
        this.filterCrew(this.credits);
      });
  }

  get details(): IMovieDetails {
    return this._details;
  }

  @Input()
  set details(details: IMovieDetails) {
    this._details = details;
  }

  get credits(): ICredit {
    return this._credits;
  }

  set credits(credits: ICredit) {
    this._credits = credits;
  }

  onResize(event) {
    this.isMobile = event.target.innerWidth <= this.mobileWidth;
  }

  filterCrew(credits: ICredit) {
    this.directing = credits.crew.filter((director) => {
      return director.department === 'Directing'
    });
    this.writing = credits.crew.filter((writer) => {
      return writer.department === 'Writing'
    });
    this.result.push(this.directing[0]);
    this.writing.slice(0, 2).forEach((writer) => {
      this.result.push(writer);
    });
  }

  toggleFavorite() {

  }

  addToList() {
    this.pop.hide();
  }
}
