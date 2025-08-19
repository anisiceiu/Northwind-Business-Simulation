import { Routes } from '@angular/router';
import { ProductListComponent } from '../products/product-list/product-list.component';
import { ProductDetailsComponent } from '../products/product-details/product-details.component';

export const productsRoutes: Routes = [
  { path: '', component: ProductListComponent },
  { path: ':id', component: ProductDetailsComponent }
];
