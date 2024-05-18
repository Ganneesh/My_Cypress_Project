describe('new tab',()=>{



it('df',()=>{


    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('#opentab').click()

    cy.wait(1000)

    cy.window().then((win)=>{

        cy.wait(3000)
        expect(win.document.title).to.eq('Practice Page')
        
    })





    

})

})