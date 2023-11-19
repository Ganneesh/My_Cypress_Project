///<reference types="cypress"/>

describe('Title of the page',()=>{


    it('To verify the title of the page',()=>{
    
    cy.visit('https://www.google.com/')
    cy.title().should('eq','Google')
    
    
    })
    
    
    })