import { Injectable } from '@angular/core';

import { Portfolio } from './portfolio';
import { PortfolioSummary } from './portfolio-summary';

import { Observable } from 'rxjs/Observable';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Account } from './account';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PortfolioService {
	  private netWorthTrackerUrl = 'http://localhost:8080/portfolios';

	  constructor(
	  	private http: HttpClient
		) { }

	  addPortfolio(portfolio: Portfolio): Observable<PortfolioSummary> {	
	  	//console.log(portfolio);
	  	return this.http.post<PortfolioSummary>(this.netWorthTrackerUrl, portfolio, httpOptions);
	  }

	  getPortfolios(): Observable<PortfolioSummary[]>{
	  	return this.http.get<PortfolioSummary[]>(this.netWorthTrackerUrl);
	  }

}
