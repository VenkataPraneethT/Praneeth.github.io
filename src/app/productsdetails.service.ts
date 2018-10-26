import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProductsdetailsService {

  constructor(private http: HttpClient) {

  }

  getProductDetails() {
    return this.http.get("assets/productItems.json");
  }


}
