import { TestBed, inject } from '@angular/core/testing';

import { RecommendationsResolverService } from './recommendations-resolver.service';

describe('RecommendationsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecommendationsResolverService]
    });
  });

  it('should ...', inject([RecommendationsResolverService], (service: RecommendationsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
