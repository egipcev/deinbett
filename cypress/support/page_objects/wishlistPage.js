
export class WishlistPage {

    checkWishEntries(count) {
        cy.get('.wishlistEntry').should('have.length', count)
    }

    enterPLZ(code) {
        cy.get('#zipcode-logistic-input').type(code)
    }

    addItemsToBasket() {
        cy.get('#addAddToWishlist').click()
    }

}

export const onWishlistPage = new WishlistPage()