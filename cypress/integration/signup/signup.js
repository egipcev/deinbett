import { onLoginPage } from "../../support/page_objects/loginPage";
import { onRegisterPage } from "../../support/page_objects/registerPage";
import { navigateTo } from "../../support/page_objects/mainPage";
import { When, Then, Given } from 'cypress-cucumber-preprocessor/steps';
/// <reference types = "cypress" />

function randomEmail() {
    return 'test-' + Math.random().toString(36).substring(2, 16) + '@mail.com'
}

const ACCEPT_COOKIES_TEXT = 'Alle auswählen & bestätigen'

Given('user opens main page', () => {
    
    cy.visit('/')
    cy.contains(ACCEPT_COOKIES_TEXT).click()
})


When('user signs up', () => {

    let user = {
        "firstName": Cypress.env('firstName'),
        "lastName": Cypress.env('lastName'),
        "password": Cypress.env('password'),
        "salutation": Cypress.env('salutation'),
        "email": randomEmail()
    }
    navigateTo.loginPage()
    onLoginPage.goToRegistration()
    onRegisterPage.signup(user)
})

Then('user is logged in', () => {
    onRegisterPage.checkSignup()
})

Then ('API response is OK', () => {
    onRegisterPage.checkAPIResponse()
})