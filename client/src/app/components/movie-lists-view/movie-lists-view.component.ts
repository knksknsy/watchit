import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieListService } from '../../services/movie-list.service';
import { IMovieList } from '../../interfaces/movie-list';

@Component({
  selector: 'app-movie-lists-view',
  templateUrl: './movie-lists-view.component.html',
  styleUrls: ['./movie-lists-view.component.scss']
})
export class MovieListsViewComponent implements OnInit {
  public movieLists: Array<IMovieList>;

  constructor(private route: ActivatedRoute, private movieListService: MovieListService) { }

  ngOnInit() {
    this.movieLists = this.route.snapshot.data['movielists'];
    this.getBackDropImages();
    window.scrollTo(0, 0);
  }

  public randomIndex(max: number): number {
    if (max === 1) {
      return 0;
    }
    return Math.floor(Math.random() * max);
  }

  getBackDropImages() {
    this.movieLists.forEach((list) => {
      this.movieListService.getMoviesFromList(list.id)
        .subscribe((movies) => {
          let index: number;
          let validBackDrop: boolean = false;
          for (let i = 0; i < movies.length; i++) {
            index = this.randomIndex(movies.length);
            if (movies[index].backdrop_path && movies[index].backdrop_path.length > 0) {
              validBackDrop = true;
              break;
            }
          }
          if (validBackDrop) {
            list.backdrop = movies[index].backdrop_path;
          }
        });
    });
  }

  refreshView(ev: any) {
    this.movieLists = this.movieLists.filter((list) => {
      return list.id !== ev.id;
    });
  }

}
