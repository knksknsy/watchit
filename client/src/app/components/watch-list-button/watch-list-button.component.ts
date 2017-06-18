import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WatchListService } from '../../services/watch-list.service';
import { AuthGuard } from '../../guards/auth.guard';
import { APIService } from '../../services/api/api.service';
import { IMovieResult } from '../../interfaces/movie-response';

@Component({
  selector: 'app-watch-list-button',
  templateUrl: './watch-list-button.component.html',
  styleUrls: ['./watch-list-button.component.scss']
})
export class WatchListButtonComponent {
  private _data: any;
  private _dataType: string;

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

  constructor(private watchListService: WatchListService, private apiService: APIService, private authGuard: AuthGuard, private router: Router) { }

  toggleWatchlist() {
    this.authGuard.canActivateWithoutRedirecting()
      .subscribe((loggedIn) => {
        if (loggedIn && !this.data.watch) {
          if (this.dataType === 'IMovieDetails') {
            this.watchListService.addToWatchList(this.data)
              .subscribe((res) => {
                this.data.watch = true;
              });
          }
          if (this.dataType === 'IMovieResult') {
            this.apiService.getMovieDetails(this.data.id, 'credits')
              .subscribe((details) => {
                this.watchListService.addToWatchList(details)
                  .subscribe((res) => {
                    this.data.watch = true;
                  });
              });
          }
        } else if (loggedIn && this.data.watch) {
          this.watchListService.removeFromWatchList(this.data.id)
            .subscribe((res) => {
              this.data.watch = false;
            });
        } else if (!loggedIn) {
          this.router.navigate(['/login']);
        }
      });
  }

}
