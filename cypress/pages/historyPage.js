class historyPage {
    selectorsList() {
        const selectors = {
            mineButton: "[data-test='nav-personal-tab']",
            genericTransaction: ".css-k5128g-MuiTypography-root",
            transactionDetail: "[data-test='transaction-detail-header']",
            historyDate: "[data-test='transaction-list-filter-date-range-button']",
            genericDateFilter: ".Cal__Day__root",
            noTransactionsAlert: "[data-test='empty-list-header']"

            
        }  
            return selectors
     }

    historytransaction() {
        cy.get(this.selectorsList().mineButton).click()
        cy.get(this.selectorsList().genericTransaction).eq(1).click()
        cy.get(this.selectorsList().transactionDetail).contains('Transaction Detail')
       
    }

    noHistoryTransaction() {
        cy.get(this.selectorsList().mineButton).click()
        cy.get(this.selectorsList().historyDate).click()
        cy.get(this.selectorsList().genericDateFilter).eq(200).click( {force: true} )
        cy.get(this.selectorsList().genericDateFilter).eq(201).click( {force: true} )
        cy.get(this.selectorsList().noTransactionsAlert).contains('No Transactions')
    }

}

export default historyPage