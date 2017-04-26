import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularMovieCardComponent } from './popular-movie-card.component';

describe('PopularMovieCardComponent', () => {
  let component: PopularMovieCardComponent;
  let fixture: ComponentFixture<PopularMovieCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularMovieCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularMovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
