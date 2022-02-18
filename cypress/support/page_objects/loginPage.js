export class LoginPage {

   goToRegistration() {
    cy.contains('button', 'Weiter zur Registrierung').click()
   }
}

export const onLoginPage = new LoginPage()