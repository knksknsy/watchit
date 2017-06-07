import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IMovieResult } from '../../interfaces/movie-response';
import { APIService } from '../../services/api/api.service';

@Component({
  selector: 'app-search-movie-card',
  templateUrl: './search-movie-card.component.html',
  styleUrls: ['./search-movie-card.component.scss']
})
export class SearchMovieCardComponent {
  private _data: IMovieResult;
  private _removable: boolean;
  public showOverview: boolean = false;

  constructor(private apiService: APIService, private router: Router) { }

  get data(): IMovieResult {
    return this._data;
  }

  @Input()
  set data(data: IMovieResult) {
    this._data = data;
  }

  get removable(): boolean {
    return this._removable;
  }

  @Input()
  set removable(removable: boolean) {
    this._removable = removable;
  }

  openDetails(id: number) {
    this.router.navigate(['/details', id]);
  }

  toggleFavorite() { }

  removeFromList() { }

}
