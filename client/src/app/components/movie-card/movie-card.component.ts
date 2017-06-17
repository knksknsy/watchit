import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IMovieResult } from '../../interfaces/movie-response';
import { IMovieList } from '../../interfaces/movie-list';
import { APIService } from '../../services/api/api.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  private _data: IMovieResult;
  private _list: IMovieList;
  public showOverview: boolean = false;
  @Output() onRemove: EventEmitter<any> = new EventEmitter();

  constructor(private apiService: APIService, private router: Router) { }

  get data(): IMovieResult {
    return this._data;
  }

  @Input()
  set data(data: IMovieResult) {
    this._data = data;
  }

  get list(): IMovieList {
    return this._list;
  }

  @Input()
  set list(list: IMovieList) {
    this._list = list;
  }

  openDetails(id: number) {
    this.router.navigate(['/details', id]);
  }

  onRemovePressed() {
    this.onRemove.emit({ id: this.data.id });
  }

}
