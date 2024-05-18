

describe('check url',()=>{

it('check url',()=>{


    cy.visit('/') 

    cy.url().should('include','https://www.google.com/')

    cy.contains('Google').should('exist')

    cy.title().should('eq', 'Google')

})

})