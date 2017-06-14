import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchListViewComponent } from './watch-list-view.component';

describe('WatchListViewComponent', () => {
  let component: WatchListViewComponent;
  let fixture: ComponentFixture<WatchListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
