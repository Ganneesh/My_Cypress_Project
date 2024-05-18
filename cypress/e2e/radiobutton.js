

describe('radio button related test cases',()=>{

    before('radio button',()=>{


        cy.on('uncaught:exception', (err, runnable) => {
        
            console.error('Uncaught Exception Occurred:', err.message);
           
            return false;
          })

          cy.visit('https://www.techlistic.com/p/selenium-practice-form.html')



    })


    it('validate radio button is visible or not',()=>{


        cy.get('input#sex-0').should('be.visible')
        cy.get('input#sex-1').should('be.visible')
        cy.get('input#sex-0').check().should('be.checked')
        cy.get('input#sex-1').should('not.be.checked')
        


    })


})