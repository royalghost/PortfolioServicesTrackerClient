import { Currency } from './currency.enum';
import { AccountType } from './account-type.enum';

export class Account {

	constructor(
		public id: number,
		public name: string,
		public currency: Currency,
		public amount: number,
		public type: AccountType,
		) {}

}
