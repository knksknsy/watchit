import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsFactsComponent } from './movie-details-facts.component';

describe('MovieDetailsFactsComponent', () => {
  let component: MovieDetailsFactsComponent;
  let fixture: ComponentFixture<MovieDetailsFactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailsFactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
