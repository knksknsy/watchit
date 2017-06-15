import { TestBed, inject } from '@angular/core/testing';

import { SearchMoviesResolverService } from './search-movies-resolver.service';

describe('SearchMoviesResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchMoviesResolverService]
    });
  });

  it('should ...', inject([SearchMoviesResolverService], (service: SearchMoviesResolverService) => {
    expect(service).toBeTruthy();
  }));
});
