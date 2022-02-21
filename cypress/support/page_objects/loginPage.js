export class LoginPage {

   goToRegistration() {
    cy.contains('button', 'Weiter zur Registrierung').click()
   }

   login(user) {
      cy.intercept('POST', '**/login').as('postLogin')
      cy.get('#loginEmail').type(user.email)
      cy.get('#loginPassword').type(user.password)
      cy.contains('#login-submit', 'Anmelden').click()
   }

   checkAPIResponseisOK() {
      cy.wait('@postLogin')
      cy.get('@postLogin').then(xhr => {
          expect(xhr.response.statusCode).to.equal(200)
      })
  }
}

export const onLoginPage = new LoginPage()