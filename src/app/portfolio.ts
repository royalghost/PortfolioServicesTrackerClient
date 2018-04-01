import { Account } from './account';
import { AccountType } from './account-type.enum';

export class Portfolio {

	constructor(
		public assets: Array<Account>,
		public liabilities: Array<Account>,
		){}

}
