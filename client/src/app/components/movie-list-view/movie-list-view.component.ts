import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../../services/api/api.service';
import { IMovieDetails } from '../../interfaces/movie-details';
import { IMovieList } from '../../interfaces/movie-list';

@Component({
  selector: 'app-movie-list-view',
  templateUrl: './movie-list-view.component.html',
  styleUrls: ['./movie-list-view.component.scss']
})
export class MovieListViewComponent implements OnInit {
  public movieList: Array<IMovieDetails>;
  public movieLists: Array<IMovieList>;
  public movieListInfos: IMovieList = { id: null, name: null };

  constructor(private apiService: APIService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach(params => {
      this.movieList = this.route.snapshot.data['movielist'];
      this.route.params.subscribe((params) => {
        this.movieListInfos.id = params['id'];
      })
      this.movieListInfos.name = this.getListName(this.route.snapshot.data['movielists']);
    });
  }

  getListName(movieLists: Array<IMovieList>) {
    let list = movieLists.find((list) => {
      return list.id === this.movieListInfos.id;
    });
    return list.name;
  }

  refreshView(ev: any) {
    this.movieList = this.movieList.filter((movie) => {
      return movie.id !== ev.id;
    });
  }

}
