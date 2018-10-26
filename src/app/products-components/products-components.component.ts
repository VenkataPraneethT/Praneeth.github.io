import { Component, OnInit } from '@angular/core';
import { ProductsdetailsService } from '../productsdetails.service';
import { CommuncationServiceService } from '../communcation-service.service';
import { FetchCartDetailsService } from '../fetch-cart-details.service';


@Component({
  selector: 'app-products-components',
  templateUrl: './products-components.component.html',
  styleUrls: ['./products-components.component.css']
})
export class ProductsComponentsComponent implements OnInit {

  productItems: any;
  chunkProducts: any;
  throttle = 50;
  batch = 10;
  scrollDistance = 10;
  scrollUpDistance = 2;

  constructor(private productService: ProductsdetailsService, private messageService:CommuncationServiceService ,private cartService:FetchCartDetailsService ) { }



  ngOnInit() {
    this.productService.getProductDetails()
        .subscribe(data => {
          this.productItems = data;
          this.productItems.forEach((data) => {
            if(!data.count){
                data.count = 0;
            }
          })

          this.chunkProducts = this.productItems.slice(0,this.batch);

          // console.log(this.productItems);

        })

    // console.log(results, "results")
  }

  increaseItemCount (productId)  {
      // console.log(productId, "productId")
      let filteredProduct = this.productItems.filter( (product) =>{
                              return product.id === productId.id;
                          });
      filteredProduct[0].count += 1;

      this.cartService.updateCartItems(this.productItems)
      this.messageService.sendMessage(this.productItems);
  }



  decreaseItemCount (productId)  {
      // console.log(productId, "productId")
      let filteredProduct = this.productItems.filter( (product) =>{
                              return product.id === productId.id;
                          });
      if(filteredProduct[0].count >0 ){
        filteredProduct[0].count -= 1;
      }
      else{
        filteredProduct[0].count = 0;
      }
        this.cartService.updateCartItems(this.productItems)
        this.messageService.sendMessage(this.productItems);
  }

  onScrollDown(){
    // console.log("came here")
    for(let i=this.batch; i< (this.batch + 10) ; i++){
      if(this.productItems[i]){
        this.chunkProducts.push(this.productItems[i]);
        this.batch++;
      }
      else{
        break;
      }
    }
  }

}
