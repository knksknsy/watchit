import { Component, OnInit, Input } from '@angular/core';
import { APIService } from '../../services/api/api.service';
import { ICast } from '../../interfaces/credit';

@Component({
  selector: 'app-movie-details-cast',
  templateUrl: './movie-details-cast.component.html',
  styleUrls: ['./movie-details-cast.component.scss']
})
export class MovieDetailsCastComponent implements OnInit {
  private _cast: Array<ICast>;
  private _isMobile: boolean;

  constructor(private apiService: APIService) { }

  ngOnInit() { }

  @Input()
  set cast(cast: Array<ICast>) {
    this._cast = cast;
  }

  get cast(): Array<ICast> {
    return this._cast;
  }

  get isMobile(): boolean {
    return this._isMobile;
  }

  @Input()
  set isMobile(isMobile: boolean) {
    this._isMobile = isMobile;
  }

}
