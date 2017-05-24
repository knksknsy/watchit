import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMovieCardComponent } from './search-movie-card.component';

describe('SearchMovieCardComponent', () => {
  let component: SearchMovieCardComponent;
  let fixture: ComponentFixture<SearchMovieCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMovieCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
