import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class FetchCartDetailsService {
  cartItems:any
  constructor(private http: HttpClient) { }

  getCartDetails() {
    return this.http.get("api/cart");
  }


  updateCartItems(data){
      this.cartItems = data;
  }

  getCartItems (){
    let finalData = [];
    if(this.cartItems && this.cartItems.length >0){
      finalData = this.cartItems.filter( item => {
        return item.count >0
      })
    }

    return finalData;
  }


}
