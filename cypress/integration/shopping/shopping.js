import { onLoginPage } from "../../support/page_objects/loginPage";
import { onRegisterPage } from "../../support/page_objects/registerPage";
import { onMainPage } from "../../support/page_objects/mainPage";
import { When, Then, Given } from 'cypress-cucumber-preprocessor/steps';
/// <reference types = "cypress" />


When('user adds several items to wishlist', () => {

    cy.goToBettenPage()
    cy.addFirstProductToWishList()
    cy.goToMatratzenPage()
    cy.addFirstProductToWishList()
    cy.goToBettwarenPage()
    cy.addFirstProductToWishList()
    cy.goToLattenrostePage()
    cy.addFirstProductToWishList()
    cy.goToMoebelPage()
    cy.addFirstProductToWishList()

})