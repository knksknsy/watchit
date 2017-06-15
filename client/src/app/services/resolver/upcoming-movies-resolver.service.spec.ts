import { TestBed, inject } from '@angular/core/testing';

import { UpcomingMoviesResolverService } from './upcoming-movies-resolver.service';

describe('UpcomingMoviesResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpcomingMoviesResolverService]
    });
  });

  it('should ...', inject([UpcomingMoviesResolverService], (service: UpcomingMoviesResolverService) => {
    expect(service).toBeTruthy();
  }));
});
