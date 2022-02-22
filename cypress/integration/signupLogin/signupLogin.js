import { onLoginPage } from "../../support/page_objects/loginPage";
import { onRegisterPage } from "../../support/page_objects/registerPage";
import { onMainPage } from "../../support/page_objects/mainPage";
import { When, Then, Given } from 'cypress-cucumber-preprocessor/steps';
/// <reference types = "cypress" />



Then('Register API response is {int}', (code) => {
    if (code != 0) {
        onRegisterPage.checkAPIResponse(code)
    }

})

Then('Login API response is {int}', (code) => {
    if (code != 0) {
        onLoginPage.checkAPIResponse(code)
    }

})

Then('email error message is {string}', (errorMessage) => {
    onLoginPage.checkEmailErrorMessage(errorMessage)
})

Then('password error message is {string}', (errorMessage) => {
    onLoginPage.checkPasswordErrorMessage(errorMessage)
})