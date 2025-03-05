class registerPage {
    selectorsList() {
        const selectors = {
            signButton: "[data-test='signup']",
            firstName: "[name='firstName']",
            lastName: "[name='lastName']",
            newUsername: "[name='username']",
            newPassword: "[name='password']",
            confirmPassword: "[name='confirmPassword']",
            signUpButton: ".SignUpForm-submit",
            headerLogin: "[fill-rule='nonzero']",
            signUpRequiredButton: ".SignUpForm-form"
            
        }  
            return selectors
     }

    accessLoginPage() {
        cy.visit('http://localhost:3000/')
    }

    registerNewUser(firstName, lastName, newUsername, newPassword, confirmPassword) {
          cy.get(this.selectorsList().signButton).click()
          cy.get(this.selectorsList().firstName).type('Fernando')
          cy.get(this.selectorsList().lastName).type('Mafra')
          cy.get(this.selectorsList().newUsername).type('fernandoqa')
          cy.get(this.selectorsList().newPassword).type('teste12345')
          cy.get(this.selectorsList().confirmPassword).type('teste12345')
          cy.get(this.selectorsList().signUpButton).click()
          cy.get(this.selectorsList().headerLogin)
    }

    registerNewUserFail(firstName, newUsername, newPassword, confirmPassword) {
        cy.get(this.selectorsList().signButton).click()
        cy.get(this.selectorsList().firstName).type('Fernando')
        cy.get(this.selectorsList().lastName).click()
        cy.get(this.selectorsList().newUsername).type('fernandoqa')
        cy.get(this.selectorsList().newPassword).type('teste12345')
        cy.get(this.selectorsList().confirmPassword).type('teste12345')
        cy.get(this.selectorsList().signUpButton).click({ force: true })
  }

}

export default registerPage