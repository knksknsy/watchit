import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IMovieResult } from '../../interfaces/movie-response';
import { APIService } from '../../services/api/api.service';

import { PopoverDirective } from 'ngx-bootstrap/popover';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  private _data: IMovieResult;
  private _removable: boolean;
  private _listName: string;

  @ViewChild('pop') pop: PopoverDirective;

  constructor(private apiService: APIService, private router: Router) { }

  get data(): IMovieResult {
    return this._data;
  }

  @Input()
  set data(data: IMovieResult) {
    this._data = data;
  }

  get removable(): boolean {
    return this._removable;
  }

  @Input()
  set removable(removable: boolean) {
    this._removable = removable;
  }

  get listName(): string {
    return this._listName;
  }

  set listName(listName: string) {
    this._listName = listName;
  }

  openDetails(id: number) {
    this.router.navigate(['/details', id]);
  }

  toggleFavorite() {

  }

  addToList() {
    this.pop.hide();
  }

  removeFromList() {

  }

}
