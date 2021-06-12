import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {path:'', redirectTo: '/productlist', pathMatch: 'full'},
  {path:'productlist', component: ProductListComponent},
  {path:'productlist/:id', component: ProductItemDetailComponent},
  {path:'cart', component: CartComponent},
  {path:'confirmation/:userName/:totalCost', component: ConfirmationComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ProductListComponent,
                                  ProductItemDetailComponent,
                                  CartComponent,
                                  ConfirmationComponent,
                                  PageNotFoundComponent]