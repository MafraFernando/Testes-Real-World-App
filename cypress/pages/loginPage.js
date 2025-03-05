class loginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[type='password']",
            loginButton: '.SignInForm-submit',
            header: 'header',
            loginFail: "[data-test='signin-error']",
            
        }  
            return selectors
     }

    accessLoginPage() {
        cy.visit('http://localhost:3000/')
    }

    loginAnyWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    loginWithErrorAlert() {
        cy.get(this.selectorsList().loginFail)
    }
    loginSucessfulPage() {
        cy.get(this.selectorsList().header).should('be.visible')
    }
}

export default loginPage