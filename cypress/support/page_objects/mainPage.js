export class MainPage {
    
    loginPage() {
        cy.contains('Anmelden').click()
    }

}

export const navigateTo = new MainPage()