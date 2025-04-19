import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import HeroMenu from '../pages/heroMenu.js'

const loginPage = new LoginPage()
const heroMenu = new HeroMenu() 

describe('Hero Interaction - Using The Buttons On The Hero Menu', () => {

    it('Hero Creation - Creating And Editing A New Hero', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithValidUser(userData.userSuccess.email, userData.userSuccess.password) 
    
      heroMenu.accessCreateNewHero() 

      heroMenu.accessEditNewHero('The Testing Hero', '300', '90', '90') 

      heroMenu.saveForm()
    });  

    it('Hero Interaction - Using The Like Button For A Hero', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithValidUser(userData.userSuccess.email, userData.userSuccess.password) 
      
      heroMenu.accessLikeAnHero()
    }); 

    it('Hero Interaction - Using The Hire Button For Hiring A Hero', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithValidUser(userData.userSuccess.email, userData.userSuccess.password) 
      
      heroMenu.accessHireAnHero()
    }); 

    it('Hero Interaction - Using The Hire Button For Not Hiring A Hero', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithValidUser(userData.userSuccess.email, userData.userSuccess.password) 
      
      heroMenu.acessNotHireAnHero()
    });  


    it('Hero Interaction - Using Editing Hero Button For Editing A Hero', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithValidUser(userData.userSuccess.email, userData.userSuccess.password) 
      
      heroMenu.accessEditAnHero() 

      heroMenu.editHeroInfos('The Testing Hero', '300', '90', '90') 

      heroMenu.saveForm()
    });  

    it('Hero Interaction - Using The Delete A Hero Button For Delete A Hero', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithValidUser(userData.userSuccess.email, userData.userSuccess.password) 
      
      heroMenu.accessEditAnHero() 

      heroMenu.editHeroInfos('The Testing Hero', '300', '90', '90') 

      heroMenu.acessDeleteAnHero()

    });   

    it('Hero Interaction - Using For Not Delete A Hero', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithValidUser(userData.userSuccess.email, userData.userSuccess.password) 
      
      heroMenu.accessEditAnHero() 

      heroMenu.editHeroInfos('The Testing Hero', '300', '90', '90') 

      heroMenu.acessDeleteAnHero() 

      heroMenu.acessNotDeleteAnHero()
    }); 

  }); 

  
  


