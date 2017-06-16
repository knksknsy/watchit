import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListRemoveButtonComponent } from './movie-list-remove-button.component';

describe('MovieListRemoveButtonComponent', () => {
  let component: MovieListRemoveButtonComponent;
  let fixture: ComponentFixture<MovieListRemoveButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListRemoveButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListRemoveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
