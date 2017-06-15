import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.scss']
})
export class ListModalComponent implements OnInit {
  @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
  public isModalShown: boolean = false;
  public typeaheadLoading: boolean;
  public typeaheadNoResults: boolean;
  public selectedList: string;
  public userLists: Observable<any>;
  /**
   * todo: populate typeahead array with user's created lists
   */
  public mockLists: any[] = [
    { id: 1, listName: 'List 1' },
    { id: 2, listName: 'List 2' },
    { id: 3, listName: 'List 3' }
  ];

  @Output() onModalOpened: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.userLists = Observable
      .create((observer: any) => {
        // Runs on every search
        observer.next(this.selectedList);
      })
      .mergeMap((token: string) => this.getListsAsObservable(token));
  }

  ngOnInit() { }

  public getListsAsObservable(token: string): Observable<any> {
    let query = new RegExp(token, 'ig');

    return Observable.of(
      this.mockLists.filter((list: any) => {
        return list.listName;
      })
    );
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

  /**
   * todo: backend for lists required
   */
  addToList() { }

  changeTypeaheadLoading(event) { }

  changeTypeaheadNoResults(event) { }

  typeaheadOnSelect(event) { }

}
