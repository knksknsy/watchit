import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
import { MovieListService } from '../../services/movie-list.service';
import { APIService } from '../../services/api/api.service';
import { AuthGuard } from '../../guards/auth.guard';
import { IMovieList } from '../../interfaces/movie-list';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.scss']
})
export class ListModalComponent {
  @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
  public isModalShown: boolean = false;
  public selectedList: string;
  public selectedListId: string;
  public userLists: Observable<any>;
  public movieLists: Array<IMovieList>;
  @Output() onModalOpened: EventEmitter<any> = new EventEmitter();

  private _data: any;
  private _dataType: string;

  get data(): any {
    return this._data;
  }

  @Input()
  set data(data: any) {
    this._data = data;
  }

  get dataType(): string {
    return this._dataType;
  }

  @Input()
  set dataType(dataType: string) {
    this._dataType = dataType;
  }

  constructor(private movieListService: MovieListService, private authGuard: AuthGuard, private apiService: APIService, private router: Router) {
    this.userLists = Observable
      .create((observer: any) => {
        observer.next(this.selectedList);
      })
      .mergeMap((token: string) => this.getListsAsObservable(token));
  }

  public getListsAsObservable(token: string): Observable<any> {
    let query = new RegExp(token, 'ig');

    return Observable.of(
      this.movieLists.filter((list: IMovieList) => {
        return query.test(list.name);
      })
    );
  }

  public checkAuth() {
    this.authGuard.canActivateWithoutRedirecting()
      .subscribe((loggedIn) => {
        if (loggedIn) {
          this.movieListService.getMovieLists()
            .subscribe((lists) => {
              this.movieLists = lists;
            });
          this.showModal();
        } else {
          this.router.navigate(['/login']);
        }
      });
  }

  public showModal(): void {
    this.isModalShown = true;
    this.onModalOpened.emit(true);
  }

  public hideModal(): void {
    this.autoShownModal.hide();
  }

  public onHidden(): void {
    this.isModalShown = false;
    this.onModalOpened.emit(false);
  }

  addToList() {
    if (this.isNewListName()) {
      this.movieListService.createMovieList(this.selectedList)
        .subscribe((res) => {
          console.log(res);
          this.movieListService.addMovieToList(res.id, this.data)
            .subscribe((res) => {
              this.hideModal();
            });
        });
    } else if (this.dataType === 'IMovieDetails') {
      this.movieListService.addMovieToList(this.selectedListId, this.data)
        .subscribe((res) => {
          this.hideModal();
        })
    } else if (this.dataType === 'IMovieResult') {
      this.apiService.getMovieDetails(this.data.id)
        .subscribe((details) => {
          this.movieListService.addMovieToList(this.selectedListId, details)
            .subscribe((res) => {
              this.hideModal();
            });
        });
    }
  }

  isNewListName(): boolean {
    let index = this.movieLists.findIndex((list) => {
      return list.name === this.selectedList;
    });
    if (index > -1) {
      this.selectedListId = this.movieLists[index].id;
      return false;
    }
    return true;
  }

}
