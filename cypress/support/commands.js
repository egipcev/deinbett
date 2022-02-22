// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addFirstProductToWishList', () => {
    cy.get('[data-tile-position="1"]').find('.wishlistIcon')
        .scrollIntoView()
        .click()
})

Cypress.Commands.add('openProductMenu', (link) => {
    cy.get('.menu__linkHref[href="' + link + '"]')
        .scrollIntoView()
        .click()
})

Cypress.Commands.add('openProductSubCategory', (link) => {
    cy.get('.flyoutSubCategory__link[href="' + link + '"]')
        .scrollIntoView()
        .click()
})

Cypress.Commands.add('goToBettenPage', () => {
    cy.openProductMenu('/betten')
    cy.openProductSubCategory('/bettgestelle')
})

Cypress.Commands.add('goToMatratzenPage', () => {
    cy.openProductMenu('/matratzen')
    cy.openProductSubCategory('/kaltschaummatratzen')
})

Cypress.Commands.add('goToBettwarenPage', () => {
    cy.openProductMenu('/bettwaren-bettdekoration')
    cy.openProductSubCategory('/4-jahreszeiten-bettdecken')
})

Cypress.Commands.add('goToLattenrostePage', () => {
    cy.openProductMenu('/lattenroste')
    cy.openProductSubCategory('/lattenroste-80x200')
})

Cypress.Commands.add('goToMoebelPage', () => {
    cy.openProductMenu('/moebel')
    cy.openProductSubCategory('/drehtuerenschraenke')
})

Cypress.Commands.add('goToWishlistPage', () => {
    cy.get('.headerElement__link[href="/wunschliste"]')
        .scrollIntoView()
        .click()
})

Cypress.Commands.add('goToBasket', () => {
    cy.contains('.button', 'Zum Warenkorb').click()
})

Cypress.Commands.add('checkCounter', (count, link) => {
    cy.get('.headerElement__link[href="' + link + '"] .headerElement__status').should('contain', count)
})


