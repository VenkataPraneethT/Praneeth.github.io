import { TestBed, inject } from '@angular/core/testing';

import { CommuncationServiceService } from './communcation-service.service';

describe('CommuncationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommuncationServiceService]
    });
  });

  it('should be created', inject([CommuncationServiceService], (service: CommuncationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
