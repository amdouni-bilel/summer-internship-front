import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ProductsComponent, ProductsDetailsComponent, ShoppingCartComponent],
  imports: [
    CommonModule,
    ECommerceRoutingModule,
    NgSelectModule,
    NgbModule
  ]
})
export class ECommerceModule { }
