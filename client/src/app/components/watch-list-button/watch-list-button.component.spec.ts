import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchListButtonComponent } from './watch-list-button.component';

describe('WatchListButtonComponent', () => {
  let component: WatchListButtonComponent;
  let fixture: ComponentFixture<WatchListButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchListButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchListButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
