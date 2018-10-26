import { Component, OnInit  } from '@angular/core';
import { FetchCartDetailsService } from '../fetch-cart-details.service';
import { CommuncationServiceService } from '../communcation-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: any;
  // subscription:any;
  message:any;
  constructor(private cartService: FetchCartDetailsService, private messageService:CommuncationServiceService) {

  }

  ngOnInit() {
    // console.log("Came here")
    let data = this.cartService.getCartItems();
    // console.log(data, "data")
    if(data && data.length >0){
      this.cartItems = data;
    }
    // else{
    //   this.getCartDetailsFromCart();
    // }
    // console.log(this.cartItems);
  }

  getCartDetailsFromCart (){
    this.cartService.getCartDetails()
        .subscribe(data => {
          this.cartItems = data;
        })
  }

  increaseItemCount (cartId)  {
      console.log(cartId, "productId")
      if(this.cartItems.length >0){
          let filteredCart = this.cartItems.filter( (cart) =>{
                                  return cart.id === cartId.id;
                              });
          filteredCart[0].count += 1;
          this.messageService.sendMessage(this.cartItems);

      }

  }



  decreaseItemCount (cartId)  {
      // console.log(cartId, "productId")
      if(this.cartItems.length >0){

          let filteredCart = this.cartItems.filter( (cart) =>{
                                  return cart.id === cartId.id;
                              });
          if(filteredCart[0].count >0 ){
              filteredCart[0].count -= 1;
          }
          else{
              filteredCart[0].count = 0;
          }
          this.messageService.sendMessage(this.cartItems);
      }



  }


}
