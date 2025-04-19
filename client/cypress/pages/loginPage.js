class loginPage {
    selectorsList() {
        const selectors = {
            genericLoginButton: "li > .undefined",
            emailField: "[type='email']",
            passwordField: "[type='password']",
            genericSignInButton: ".w-\\[380px\\] > .flex > .undefined",
            wrongCredentialAlert: ".text-red-500",
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('/heroes')
    }

    loginWithValidUser(email, password) {
        cy.get(this.selectorsList().genericLoginButton).click()
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().genericSignInButton).click()
    }

    checkAccessInvalid() {
        cy.get(this.selectorsList().wrongCredentialAlert)
    } 

}

export default loginPage