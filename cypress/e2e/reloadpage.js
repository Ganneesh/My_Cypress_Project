
describe('refresh the page',()=>{


    it('refresh the page',()=>{

        cy.visit('https://www.amazon.in/')

        cy.reload().contains('Mobiles').should('be.visible')

        //cy.reload(true) //we can apply true as parameter to reload to refresh the page forcefully.
       // cy.contains('Mobiles').should('be.visible')

    })

})