import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovieResult } from '../../interfaces/movie-response';

@Component({
  selector: 'app-favorites-view',
  templateUrl: './favorites-view.component.html',
  styleUrls: ['./favorites-view.component.scss']
})
export class FavoritesViewComponent implements OnInit {
  public favorites: Array<IMovieResult>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.favorites = this.route.snapshot.data['favorites'];
    window.scrollTo(0, 0);
  }

}
