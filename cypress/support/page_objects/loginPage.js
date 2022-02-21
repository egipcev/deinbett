export class LoginPage {

   goToRegistration() {
      cy.contains('button', 'Weiter zur Registrierung').click()
   }

   login(user) {
      cy.intercept('POST', '**/login').as('postLogin')
      if (user.email) {
         cy.get('#loginEmail').type(user.email)
      }
      if (user.password) {
         cy.get('#loginPassword').type(user.password)
      }

      cy.contains('#login-submit', 'Anmelden').click()
   }

   checkAPIResponse(code) {
      cy.wait('@postLogin')
      cy.get('@postLogin').then(xhr => {
         expect(xhr.response.statusCode).to.equal(code)
      })
   }

   checkEmailErrorMessage(errorMessage) {
      if (errorMessage) {
         cy.get('#loginEmail-error')
            .should('contain', errorMessage)
      }

   }

   checkPasswordErrorMessage(errorMessage) {
      if (errorMessage) {
         cy.get('#loginPassword-error')
            .should('contain', errorMessage)
      }

   }

}

export const onLoginPage = new LoginPage()