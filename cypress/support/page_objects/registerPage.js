import { expect } from "chai"

export class RegisterPage {

    signup(user) {

        cy.intercept('POST', '**/register').as('postRegister')

        if (user.salutation === 'Herr') {
            cy.get('#salutation').select('Herr')
        } else if (user.salutation === 'Frau') {
            cy.get('#salutation').select('Frau')
        }
        cy.get('#firstName').type(user.firstName)
        cy.get('#lastName').type(user.lastName)
        cy.get('#email').type(user.email)
        cy.get('#password').type(user.password)
        cy.get('#password2').type(user.password)
        cy.get('.accountNew__agbCheckbox').find('.checkbox__checkbox').click()
        cy.contains('#register-submit', 'Weiter').click()
        
        
    }

    checkAPIResponseisOK() {
        cy.wait('@postRegister')
        cy.get('@postRegister').then(xhr => {
            expect(xhr.response.statusCode).to.equal(200)
        })
    }
}

export const onRegisterPage = new RegisterPage()