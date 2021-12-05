import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { ItemsTypesListComponent } from './items-types-list/items-types-list.component';

const routes: Routes = [
  { path: 'orders', component: OrdersListComponent},
  { path: 'itemTypes', component: ItemsTypesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [OrdersListComponent, ItemsTypesListComponent]