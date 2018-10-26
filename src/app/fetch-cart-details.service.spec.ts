import { TestBed, inject } from '@angular/core/testing';

import { FetchCartDetailsService } from './fetch-cart-details.service';

describe('FetchCartDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchCartDetailsService]
    });
  });

  it('should be created', inject([FetchCartDetailsService], (service: FetchCartDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
