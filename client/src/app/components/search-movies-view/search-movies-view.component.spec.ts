import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMoviesViewComponent } from './search-movies-view.component';

describe('SearchMoviesViewComponent', () => {
  let component: SearchMoviesViewComponent;
  let fixture: ComponentFixture<SearchMoviesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMoviesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMoviesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
