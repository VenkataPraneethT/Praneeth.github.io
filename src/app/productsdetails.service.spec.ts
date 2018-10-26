import { TestBed, inject } from '@angular/core/testing';

import { ProductsdetailsService } from './productsdetails.service';

describe('ProductsdetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsdetailsService]
    });
  });

  it('should be created', inject([ProductsdetailsService], (service: ProductsdetailsService) => {
    expect(service).toBeTruthy();
  }));
});
