import { Component, OnInit, Input } from '@angular/core';
import { WatchListService } from '../../services/watch-list.service';
import { AuthGuard } from '../../guards/auth.guard';
import { APIService } from '../../services/api/api.service';
import { IMovieResult } from '../../interfaces/movie-response';

@Component({
  selector: 'app-watch-list-button',
  templateUrl: './watch-list-button.component.html',
  styleUrls: ['./watch-list-button.component.scss']
})
export class WatchListButtonComponent implements OnInit {
  private _data: any;
  private _dataType: string;
  public inWatch: boolean = false;

  get data(): any {
    return this._data;
  }

  @Input()
  set data(data: any) {
    this._data = data;
  }

  get dataType(): string {
    return this._dataType;
  }

  @Input()
  set dataType(dataType: string) {
    this._dataType = dataType;
  }

  constructor(private watchListService: WatchListService, private apiService: APIService, private authGuard: AuthGuard) { }

  ngOnInit() {
    this.setInWatch();
  }

  setInWatch() {
    this.watchListService.getWatchList()
      .subscribe((movies) => {
        let index = movies.findIndex((movie) => {
          return movie.id === this.data.id;
        });
        if (index > -1) {
          this.inWatch = true
        } else {
          this.inWatch = false;
        }
      });
  }

  toggleWatchlist() {
    this.authGuard.canActivate()
      .subscribe((loggedIn) => {
        if (loggedIn && !this.inWatch) {
          if (this.dataType === 'IMovieDetails') {
            this.watchListService.addToWatchList(this.data)
              .subscribe((res) => {
                this.setInWatch();
              });
          }
          if (this.dataType === 'IMovieResult') {
            this.apiService.getMovieDetails(this.data.id, 'credits')
              .subscribe((details) => {
                this.watchListService.addToWatchList(details)
                  .subscribe((res) => {
                    this.setInWatch();
                  });
              });
          }
        } else if (loggedIn && this.inWatch) {
          this.watchListService.removeFromWatchList(this.data.id)
            .subscribe((res) => {
              this.setInWatch();
            });
        }
      });
  }

}
