import { TestBed, inject } from '@angular/core/testing';

import { MovieDetailsResolverService } from './movie-details-resolver.service';

describe('MovieDetailsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieDetailsResolverService]
    });
  });

  it('should ...', inject([MovieDetailsResolverService], (service: MovieDetailsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
