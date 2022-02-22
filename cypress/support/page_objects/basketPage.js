
export class BasketPage {

    checkBasketEntries(count) {
        cy.get('.cartEntry').should('have.length', count)
    }

}

export const onBasketPage = new BasketPage()