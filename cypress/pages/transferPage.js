class transferPage {
    selectorsList() {
        const selectors = {
            newTransferButton: "[data-test='nav-top-new-transaction']",
            searchPlaceholder: "[type='text']",
            searchFirstList: "[data-test='user-list-item-uBmeaz5pX']",
            amountPlaceholder: "[placeholder='Amount']",
            notePlaceholder: "[placeholder='Add a note']",
            payButton: "[data-test='transaction-create-submit-payment']",
            transferOk: ".css-1hbmzt3-MuiGrid-root"
            
        }  
            return selectors
     }

    newTransfer(contact) {
        cy.get(this.selectorsList().newTransferButton).click()
        cy.get(this.selectorsList().searchPlaceholder).type(contact)
        cy.get(this.selectorsList().searchFirstList).click()
    
    }

    amountTransfer(value, note) {
        cy.get(this.selectorsList().amountPlaceholder).type(value)
        cy.get(this.selectorsList().notePlaceholder).type(note)
        cy.get(this.selectorsList().payButton).click()
        cy.get(this.selectorsList().transferOk).contains('Paid')
    }

}

export default transferPage