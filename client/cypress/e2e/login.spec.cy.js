import userData from '../fixtures/userData.json' 
import LoginPage from '../pages/loginPage.js' 

const loginPage = new LoginPage()

describe('Login Tests - Cypress Heroes', () => {
  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithValidUser(userData.userSuccess.email, userData.userSuccess.password)
  })  

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithValidUser(userData.userFail.email, userData.userFail.password)
    loginPage.checkAccessInvalid()
  }) 
}) 

