import { Component, OnInit, Input } from '@angular/core';
import { WatchListService } from '../../services/watch-list.service';
import { APIService } from '../../services/api/api.service';
import { IMovieResult } from '../../interfaces/movie-response';

@Component({
  selector: 'app-watch-list-button',
  templateUrl: './watch-list-button.component.html',
  styleUrls: ['./watch-list-button.component.scss']
})
export class WatchListButtonComponent implements OnInit {
  private _data: IMovieResult;

  get data(): IMovieResult {
    return this._data;
  }

  @Input()
  set data(data: IMovieResult) {
    this._data = data;
  }

  constructor(private watchListService: WatchListService, private apiService: APIService) { }

  ngOnInit() {
    console.log(this.data);
  }

  toggleWatchlist() {
    console.log('toggle watchlist');
  }

}
