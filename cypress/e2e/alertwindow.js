describe('Drop down practice',()=>{


    it('dropdown test case 1',()=>{

        cy.on('uncaught:exception', (err, runnable) => {
        
            console.error('Uncaught Exception Occurred:', err.message);
           
            return false;
          })

      cy.visit('https://demoqa.com/alerts')

          cy.get('#alertButton').click()

          cy.on('window:alert',(data)=>{


            expect(data).to.eq('You clicked a button')
            cy.contains('OK').should('be.visible').click()

          })

    })

})