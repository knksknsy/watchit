import { TestBed, inject } from '@angular/core/testing';

import { FavoritesResolverService } from './favorites-resolver.service';

describe('FavoritesResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoritesResolverService]
    });
  });

  it('should ...', inject([FavoritesResolverService], (service: FavoritesResolverService) => {
    expect(service).toBeTruthy();
  }));
});
