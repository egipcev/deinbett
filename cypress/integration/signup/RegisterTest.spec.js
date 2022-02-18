import { onLoginPage } from "../../support/page_objects/loginPage";
import { onRegisterPage } from "../../support/page_objects/registerPage";
import { navigateTo } from "../../support/page_objects/mainPage";
/// <reference types = "cypress" />


describe('', () => {
    const ACCEPT_COOKIES_TEXT = 'Alle auswählen & bestätigen'
    let randomEmail;

    beforeEach(() => {
        cy.randomEmail().then((value) => (randomEmail = value));
        cy.visit('/')
        cy.contains(ACCEPT_COOKIES_TEXT).click()
    });



    it('Register account', () => {
        let user = {
            "firstName": "Firstname",
            "lastName": "Lastname",
            "password": "Password_12345!#",
            "salutation": "Herr",
            "email": randomEmail
        }
        navigateTo.loginPage()
        onLoginPage.goToRegistration()
        onRegisterPage.signup(user)


    })

})