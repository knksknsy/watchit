import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovieResult } from '../../interfaces/movie-response';

@Component({
  selector: 'app-watch-list-view',
  templateUrl: './watch-list-view.component.html',
  styleUrls: ['./watch-list-view.component.scss']
})
export class WatchListViewComponent implements OnInit {
  public watchlist: Array<IMovieResult>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.watchlist = this.route.snapshot.data['watchlist'];
    window.scrollTo(0, 0);
  }

}
