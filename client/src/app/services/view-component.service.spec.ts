import { TestBed, inject } from '@angular/core/testing';

import { ViewComponentService } from './view-component.service';

describe('ViewComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewComponentService]
    });
  });

  it('should ...', inject([ViewComponentService], (service: ViewComponentService) => {
    expect(service).toBeTruthy();
  }));
});
