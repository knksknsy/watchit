import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api/api.service';
import { IPopularMoviesResult } from '../../interfaces/popular-movies';
import { IPopularMovies } from '../../interfaces/popular-movies';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  constructor(private apiService: APIService) { }

  ngOnInit() {
  }

}
