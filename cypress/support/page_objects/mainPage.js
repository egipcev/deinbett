export class MainPage {

    

    open() {
        cy.visit('/')
        cy.contains('Alle auswählen & bestätigen').click()
    }

    goToLoginPage() {
        cy.contains('Anmelden').click()
    }

    checkUserLoggedIn() {

        cy.location('pathname').should('eq', '/')
        cy.get(".headerElement--login")
            .find('a')
            .should("have.attr", "href", "/kundenkonto");
    }

}

export const onMainPage = new MainPage()