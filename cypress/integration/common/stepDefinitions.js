import { onLoginPage } from "../../support/page_objects/loginPage";
import { onRegisterPage } from "../../support/page_objects/registerPage";
import { onMainPage } from "../../support/page_objects/mainPage";
import { When, Then, Given } from 'cypress-cucumber-preprocessor/steps';
/// <reference types = "cypress" />

var user;

function getRandomEmail() {
    return 'test-' + Math.random().toString(36).substring(2, 16) + '@mail.com'
}

Then('user is logged in', () => {
    onMainPage.checkUserLoggedIn()
})

When('user logs in with {string} and {string}', (email, password) => {
    let userEmail;
    let userPassword;
    if (email === 'loginEmail') {
        userEmail = Cypress.env(email)
    } else {
        userEmail = email
    }
    if (password === 'loginPassword') {
        userPassword = Cypress.env(password)
    } else {
        userPassword = password
    }
    user = {
        "email": userEmail,
        "password": userPassword
    }
    onMainPage.goToLoginPage()
    onLoginPage.login(user)

})

Given('user opens main page', () => {
    onMainPage.open()

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

When('user logs in', () => {
    onMainPage.goToLoginPage()
    onLoginPage.login(user)
})