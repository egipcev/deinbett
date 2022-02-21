import { onLoginPage } from "../../support/page_objects/loginPage";
import { onRegisterPage } from "../../support/page_objects/registerPage";
import { onMainPage } from "../../support/page_objects/mainPage";
import { When, Then, Given } from 'cypress-cucumber-preprocessor/steps';
/// <reference types = "cypress" />

var user;

function getRandomEmail() {
    return 'test-' + Math.random().toString(36).substring(2, 16) + '@mail.com'
}



Given('user opens main page', () => {
    onMainPage.open()
   
})

When('user logs in', () => {

    onMainPage.goToLoginPage()
    onLoginPage.login(user)

})


When('user signs up', () => {

    user = {
        "firstName": Cypress.env('firstName'),
        "lastName": Cypress.env('lastName'),
        "password": Cypress.env('password'),
        "salutation": Cypress.env('salutation'),
        "email": getRandomEmail()
    }
    onMainPage.goToLoginPage()
    onLoginPage.goToRegistration()
    onRegisterPage.signup(user)
})

Then('user is logged in', () => {
    onMainPage.checkUserLoggedIn()
})

Then ('Register API response is OK', () => {
    onRegisterPage.checkAPIResponseisOK()
})

Then ('Login API response is OK', () => {
    onLoginPage.checkAPIResponseisOK()
})