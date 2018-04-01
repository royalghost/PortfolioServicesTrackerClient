import { Injectable } from "@angular/core";
import { Portfolio } from "./portfolio";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class PortfolioRepository{

	private portfolio: Portfolio;

	constructor(private dataSource: StaticDataSource){
		dataSource.loadMockPortfolio().subscribe(data => {
			this.portfolio = data;
		});
	}

	getPortfolio(): Portfolio {
		return this.portfolio;
	}
	
}