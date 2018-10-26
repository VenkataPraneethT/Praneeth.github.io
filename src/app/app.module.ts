import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponentsComponent } from './products-components/products-components.component';
import { FetchCartDetailsService } from './fetch-cart-details.service';
import { ProductsdetailsService } from './productsdetails.service';
import { CommuncationServiceService } from './communcation-service.service';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { HttpClientModule } from '@angular/common/http';
import { AppHeaderComponent } from './app-header/app-header.component';

const appRoutes: Routes = [
  { path: 'Products', component: ProductsComponentsComponent },
  { path: 'Cart',      component: ShoppingCartComponent },
  { path: '',
    redirectTo: '/Products',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ProductsComponentsComponent,
    PageNotFoundComponent,
    AppHeaderComponent
  ],
  imports: [

    RouterModule.forRoot(
     appRoutes
     // ,
     // { enableTracing: true }
   ),
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule

  ],
  providers: [
    FetchCartDetailsService,
    ProductsdetailsService,
    CommuncationServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
