import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PortfolioService } from './portfolio.service';
import { PortfoliosComponent } from './portfolios/portfolios.component';

import { PortfolioRepository } from './portfolio.repository';
import { StaticDataSource } from './static.datasource';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    PortfoliosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  	StaticDataSource,
    PortfolioRepository,
    PortfolioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
