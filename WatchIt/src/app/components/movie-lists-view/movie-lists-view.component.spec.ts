import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListsViewComponent } from './movie-lists-view.component';

describe('MovieListsViewComponent', () => {
  let component: MovieListsViewComponent;
  let fixture: ComponentFixture<MovieListsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
