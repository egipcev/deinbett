import { onLoginPage } from "../../support/page_objects/loginPage";
import { onRegisterPage } from "../../support/page_objects/registerPage";
import { onWishlistPage } from "../../support/page_objects/wishlistPage";
import { When, Then, Given } from 'cypress-cucumber-preprocessor/steps';
/// <reference types = "cypress" />


When('user adds five items to wishlist', () => {

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

Then('{int} items are in wishlist', (count) => {
    cy.checkCounter(count)
    cy.goToWishlistPage()
    onWishlistPage.checkWishEntries(count)
})