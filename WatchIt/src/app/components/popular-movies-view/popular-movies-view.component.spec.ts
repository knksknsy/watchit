import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularMoviesViewComponent } from './popular-movies-view.component';

describe('PopularMoviesViewComponent', () => {
  let component: PopularMoviesViewComponent;
  let fixture: ComponentFixture<PopularMoviesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularMoviesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularMoviesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
