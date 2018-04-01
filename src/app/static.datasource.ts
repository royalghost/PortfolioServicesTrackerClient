import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/from";

import { Account } from './account';
import { AccountType } from './account-type.enum';
import { Currency } from './currency.enum';
import { Portfolio } from './portfolio';

@Injectable()
export class StaticDataSource {
	private assets: Array<Account> = [
	  	new Account(1, 'Chequing', Currency.USD, 2000.00, AccountType.CASH_INVEST  ),	
		new Account(2, 'Savings for Taxes', Currency.USD, 4000.00, AccountType.CASH_INVEST), 
		new Account(3, 'Rainy Day Fund', Currency.USD, 506.00, AccountType.CASH_INVEST),
		new Account(4, 'Savings for Fun', Currency.USD, 5000.00, AccountType.CASH_INVEST),
		new Account(5, 'Savings for Travel',Currency.USD, 400.00, AccountType.CASH_INVEST),
		new Account(6, 'Savings for Personal Development', Currency.USD, 200.00, AccountType.CASH_INVEST),
		new Account(7, 'Investment 1', Currency.USD, 5000.00, AccountType.CASH_INVEST),
		new Account(8, 'Investment 2', Currency.USD, 60000.00, AccountType.CASH_INVEST),
		new Account(9, 'Investment 3', Currency.USD, 30000.00, AccountType.CASH_INVEST),
		new Account(10, 'Investment 4', Currency.USD, 50000.00, AccountType.CASH_INVEST),
		new Account(11, 'Investment 5', Currency.USD, 24000.00, AccountType.CASH_INVEST),
		new Account(12, 'Other', Currency.USD, 0.00, AccountType.CASH_INVEST),
		new Account(13, 'Primary Home', Currency.USD, 455000.00, AccountType.LONG_TERM_ASSET),	
		new Account(14, 'Second Home', Currency.USD, 1564321.00, AccountType.LONG_TERM_ASSET),
		new Account(15, 'Other', Currency.USD, 0.00, AccountType.LONG_TERM_ASSET),  
	  ];

	private liabilities: Array<Account> = [
		new Account(16, 'Credit Card 1', Currency.USD, 4342.00, AccountType.SHORT_TERM_LIAB),
		new Account(17, 'Credit Card 2', Currency.USD, 322.00, AccountType.SHORT_TERM_LIAB),
		new Account(18, 'Other', Currency.USD, 0.00, AccountType.SHORT_TERM_LIAB),
		new Account(19, 'Mortgage 1', Currency.USD, 250999.00, AccountType.LONG_TERM_LIAB),
		new Account(20, 'Mortgage 2', Currency.USD, 632634.00, AccountType.LONG_TERM_LIAB),
		new Account(21, 'Line of Credit', Currency.USD, 10000.00, AccountType.LONG_TERM_LIAB),
		new Account(22, 'Investment Loan', Currency.USD, 10000.00, AccountType.LONG_TERM_LIAB),
		new Account(23, 'Other', Currency.USD, 0.00, AccountType.LONG_TERM_LIAB)
	  ];

  	loadMockPortfolio(): Observable<Portfolio> {
  		let portfolio = new Portfolio(this.assets, this.liabilities);
  		return Observable.from<Portfolio>([portfolio]);
  	}

}
