
import { onBasketPage } from "../../support/page_objects/basketPage";
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
    cy.checkCounter(count, '/wunschliste')
    cy.goToWishlistPage()
    onWishlistPage.checkWishEntries(count)
})

When('user adds items from wishlist to basket', () => {
    cy.goToWishlistPage()
    onWishlistPage.enterPLZ(12345)
    onWishlistPage.addItemsToBasket()
})

Then('{int} items are in basket', (count) => {
    cy.goToBasket()
    cy.checkCounter(count, '/warenkorb')
    onBasketPage.checkBasketEntries(count)
})