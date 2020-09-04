import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IpoListComponent } from './ipo-list/ipo-list.component';
import { IpoServiceService } from './ipo-service.service';
//import { StockExchangeService } from './stockexchange.service';

//import { StockExchangeListComponent } from './stockexchange-list/stockexchange-list.component';


@NgModule({
  declarations: [
    AppComponent,
    IpoListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
