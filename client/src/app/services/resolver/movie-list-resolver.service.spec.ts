import { TestBed, inject } from '@angular/core/testing';

import { MovieListResolverService } from './movie-list-resolver.service';

describe('MovieListResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieListResolverService]
    });
  });

  it('should ...', inject([MovieListResolverService], (service: MovieListResolverService) => {
    expect(service).toBeTruthy();
  }));
});
