export type balance_sheet = {
    year:number,
    quarter:string|null,
    assets: {
        total:number,
        shortterm: {                        // cash, accounts receivable, inventory, and short-term investments.
            cash:number,
            inventory:number,
            total:number
        },                     
        longterm: {                         // long-term investments, and intangible assets (such as patents or trademarks)
            ppe:number,                     // property, plant, equipment
            total:number
        },           
    },
    liabilities: {                          // accounts payable (amt owed to suppliers for goods), short-term debt, accrued expenses (wages, interest), income taxes payable, unearned revenue
        total:number,
        shortterm: {
            accounts_payable:number,
            shortterm_debt:number,
            total:number
        },                      
        longterm: {                         // long-term debt (bonds, loans w/ maturities beyond 1 year), deferred tax liabilities, pension liabilities, lease (portion due beyond 1 year), etc.
            longterm_debt:number,
            total:number
        }             
    },
    equity: {
        stockholder_equity:number,         // the portion of equity that belongs to shareholders other than the parent company.
        total:number                       // the portion of equity that belongs to the parent company or the controlling interest
    }                
};

export type income_statement = {
    year:number,
    quarter:string|null,
    operating_income:number,
    net_income:number
};

export type cashflow_statement = {
    year:number,
    quarter:string|null,
    net:number,                           // operating activities + investing activities + financing activities
    free:number,                          // operating activities - capital expenditures
    operating:number,                     // cash generated/used in company's business operation
    capital_expenditure:number,
    investing:number,                     // cash transactions in acquisition/disposal of long-term assets
    financing:number                      // cash transactions for stock/debt/dividends
};

export type market_data = {
    price:number,
    shares_outstanding:number,
    market_cap:number
};

export type financial_statements = {
    balance_sheets:balance_sheet[],
    income_statments:income_statement[],
    cashflow_statements:cashflow_statement[]
};
export type company_profile = {
    name:string,
    symbol:string,
    market_data:market_data,
    financial_statements: {
        annual:financial_statements,
        quarter:financial_statements
    }
};
