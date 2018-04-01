import { Account } from './account';

export class PortfolioSummary {

	constructor(
		public totalAssets: number,
		public totalLiabilities: number,
		public netWorth: number

	){}

}
