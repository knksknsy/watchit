import { TestBed, inject } from '@angular/core/testing';

import { MovieListsResolverService } from './movie-lists-resolver.service';

describe('MovieListsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieListsResolverService]
    });
  });

  it('should ...', inject([MovieListsResolverService], (service: MovieListsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
