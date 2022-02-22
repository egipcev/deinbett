
export class WishlistPage {

    checkWishEntries(count) {
        cy.get('.wishlistEntry').should('have.length', count)
    }

}

export const onWishlistPage = new WishlistPage()