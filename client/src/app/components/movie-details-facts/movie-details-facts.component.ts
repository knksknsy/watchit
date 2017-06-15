import { Component, OnInit, Input } from '@angular/core';
import { IMovieDetails } from '../../interfaces/movie-details';

@Component({
  selector: 'app-movie-details-facts',
  templateUrl: './movie-details-facts.component.html',
  styleUrls: ['./movie-details-facts.component.scss']
})
export class MovieDetailsFactsComponent implements OnInit {
  private _details: IMovieDetails;

  constructor() { }

  ngOnInit() {
    this.details.original_language = this.getOriginalLanguage();
  }

  get details(): IMovieDetails {
    return this._details;
  }

  @Input()
  set details(details: IMovieDetails) {
    this._details = details;
  }

  getOriginalLanguage(): string {
    let language = this.details.spoken_languages.find((language) => {
      return language.iso_639_1 === this.details.original_language;
    });
    if (language && language.name) {
      return language.name;
    }
  }

}
