import { TestBed, inject } from '@angular/core/testing';

import { RatingsResultsService } from './ratings-results.service';

describe('RatingsResultsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RatingsResultsService]
    });
  });

  it('should be created', inject([RatingsResultsService], (service: RatingsResultsService) => {
    expect(service).toBeTruthy();
  }));
});
