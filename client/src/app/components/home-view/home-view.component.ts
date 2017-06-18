import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewComponentService } from '../../services/view-component.service';
import { IMovieResponse } from '../../interfaces/movie-response';
import { IMovieDetails } from '../../interfaces/movie-details';
import { IMovieResult } from '../../interfaces/movie-response';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  public upcomingMovies: IMovieResponse;
  public popularMovies: IMovieResponse;

  constructor(private route: ActivatedRoute, private viewComponentService: ViewComponentService) { }

  ngOnInit() {
    this.upcomingMovies = this.route.snapshot.data['upcomings'];
    this.popularMovies = this.route.snapshot.data['populars'];
    window.scrollTo(0, 0);
  }

}
