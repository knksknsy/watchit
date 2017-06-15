import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovieResponse } from '../../interfaces/movie-response';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  public upcomingMovies: IMovieResponse;
  public popularMovies: IMovieResponse;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.upcomingMovies = this.route.snapshot.data['upcomings'];
    this.popularMovies = this.route.snapshot.data['populars'];
    window.scrollTo(0, 0);
  }

}
