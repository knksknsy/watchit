import { TestBed, inject } from '@angular/core/testing';

import { WatchListResolverService } from './watch-list-resolver.service';

describe('WatchListResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WatchListResolverService]
    });
  });

  it('should ...', inject([WatchListResolverService], (service: WatchListResolverService) => {
    expect(service).toBeTruthy();
  }));
});
