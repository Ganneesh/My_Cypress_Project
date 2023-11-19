///<reference types="cypress"/>

describe('Backwoard and Forward',()=>{


it('Demo of backword and forward from web page',()=>{


    cy.visit('https://www.freshworks.com/')
    cy.wait(2000)
    cy.contains('IT Service').click({force:true})
    cy.wait(2000)
    //cy.go('back')
    cy.go(-1)
    cy.wait(2000)
    cy.go('forward')
    cy.wait(2000)
    

})


})