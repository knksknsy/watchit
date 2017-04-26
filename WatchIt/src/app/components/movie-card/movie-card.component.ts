import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ISearchMoviesResult } from '../../interfaces/search-movies';

import { PopoverDirective } from 'ngx-bootstrap/popover';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  private _data: ISearchMoviesResult;
  private _imgPath = 'https://image.tmdb.org/t/p/original';
  private _removable: boolean;
  private _listName: string;

  @ViewChild('pop') pop: PopoverDirective;

  constructor(private router: Router) { }

  get data(): ISearchMoviesResult {
    return this._data;
  }

  @Input()
  set data(data: ISearchMoviesResult) {
    this._data = data;
  }

  get imgPath(): string {
    return this._imgPath;
  }

  set imgPath(imgPath: string) {
    this._imgPath = imgPath;
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
