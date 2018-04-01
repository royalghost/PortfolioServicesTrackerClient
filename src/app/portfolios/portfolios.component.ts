import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Portfolio } from '../portfolio';
import { PortfolioSummary } from '../portfolio-summary';

import { PortfolioRepository } from '../portfolio.repository';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css']
})
export class PortfoliosComponent implements OnInit {

  portfolio: Portfolio;
  portfolioResponse: PortfolioSummary; 
  title = 'Tracking your Networth';

  constructor(
  	private portfolioService: PortfolioService,
    private repository: PortfolioRepository
  	) { }

  ngOnInit(): void {
    //Initialize portfolio with mock data for first time 
    this.portfolio = this.repository.getPortfolio();
    //Call the HTTP PUT for calculating net assets for the first time
    this.addPortfolio(this.portfolio);
  }

  addPortfolio(portfolio: Portfolio): void {   
    this.portfolioService.addPortfolio(portfolio).subscribe(portfolio => this.portfolioResponse = portfolio);
  }


}
