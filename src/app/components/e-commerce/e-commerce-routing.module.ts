import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes : Routes = [
    {
        path:'',
        children: [
            { path: 'product', component: ProductsComponent},
            { path: 'product-details', component: ProductsDetailsComponent},
            { path: 'shopping-cart', component: ShoppingCartComponent},
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class ECommerceRoutingModule { }