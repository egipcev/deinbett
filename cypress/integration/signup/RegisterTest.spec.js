import { onLoginPage } from "../../support/page_objects/loginPage";
import { onRegisterPage } from "../../support/page_objects/registerPage";
import { navigateTo } from "../../support/page_objects/mainPage";
/// <reference types = "cypress" />


describe('Register account test suite', () => {
    const ACCEPT_COOKIES_TEXT = 'Alle auswählen & bestätigen'
    let randomEmail;

    beforeEach(() => {
        cy.randomEmail().then((value) => (randomEmail = value));
        cy.visit('/')
        cy.contains(ACCEPT_COOKIES_TEXT).click()
    });



    it('Register account positive scenario', () => {
        let user = {
            "firstName": Cypress.env('firstName'),
            "lastName": Cypress.env('lastName'),
            "password": Cypress.env('password'),
            "salutation": Cypress.env('salutation'),
            "email": randomEmail
        }
        navigateTo.loginPage()
        onLoginPage.goToRegistration()
        onRegisterPage.signup(user)


    })

})