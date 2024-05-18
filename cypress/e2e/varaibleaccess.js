describe('variable access',()=>{



it('my first test case',()=>{


cy.log(Cypress.config('baseUrl'))

let data=Cypress.env('baseUrl')
cy.log(data)

})

})