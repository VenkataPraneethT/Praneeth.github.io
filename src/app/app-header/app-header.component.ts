import { Component, OnInit } from '@angular/core';
import { CommuncationServiceService } from '../communcation-service.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  title = 'Shopping Cart';
  cartItemsCount: Number;
  navLinks:any;
  constructor(private messageService: CommuncationServiceService){

  }

  ngOnInit() {
      this.navLinks = [
        {
          "item":"Product",
          "isActive":true,
          "routerLink" :"/Products"
        },
        {
          "item":"cart",
          "isActive":false,
          "routerLink" :"/Cart"
        }
      ];
      this.getCartInfo();

  }

  changeClass(link){

    this.navLinks.forEach(function(ele){
      ele.isActive = false;
    })
    link.isActive = true;

  }

  getCartInfo(){
    // console.log("cam herhe")
    this.cartItemsCount = 0;
    this.messageService.getMessage().subscribe(
        (successData) => {
          let count = 0;
          // console.log(successData, "successData")
          successData.data.forEach(function(data){
              if(data.count > 0){
                count = count + data.count ;
              }
          })

          this.cartItemsCount = count;
          // console.log(this.cartItemsCount, "this.cartItemsCount");
        },
        (err) => {console.log(err, "err")}
    )
  }

}
