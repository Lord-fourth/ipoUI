import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IpoListComponent } from './ipo-list/ipo-list.component';



const routes: Routes = [

  { path: 'ipoClasses', component: IpoListComponent },
 // { path: 'addstockexchange', component: AddStockExchangeComponent },
 // { path: 'companyList/:id', component : CompanyListComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
