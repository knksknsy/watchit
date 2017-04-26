import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api/api.service';
import { IUpcomingMovies } from '../../interfaces/upcoming-movies';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss']
})
export class UpcomingMoviesComponent implements OnInit {

  public _response: IUpcomingMovies;

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.apiService.getUpcomingMovies()
      .subscribe((next) => {
        this._response = next;
      })
  }

  get response(): IUpcomingMovies {
    return this._response;
  }

  set response(response: IUpcomingMovies) {
    this._response = response;
  }

}
