import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieListService } from '../../services/movie-list.service';
import { APIService } from '../../services/api/api.service';
import { IMovieResult } from '../../interfaces/movie-response';

@Component({
  selector: 'app-movie-list-remove-button',
  templateUrl: './movie-list-remove-button.component.html',
  styleUrls: ['./movie-list-remove-button.component.scss']
})
export class MovieListRemoveButtonComponent implements OnInit {
  private _data: IMovieResult;
  private _listId: string;
  @Output() onRemove: EventEmitter<any> = new EventEmitter();

  get data(): IMovieResult {
    return this._data;
  }

  @Input()
  set data(data: IMovieResult) {
    this._data = data;
  }

   get listId(): string {
    return this._listId;
  }

  @Input()
  set listId(listId: string) {
    this._listId = listId;
  }

  constructor(private movieListService: MovieListService, private apiService: APIService) { }

  ngOnInit() { }

  removeFromList() {
    this.movieListService.removeMovieFromList(this.listId, this.data.id)
      .subscribe((res) => {
        if (!res.message) {
          this.onRemove.emit();
        }
      });
  }
}
