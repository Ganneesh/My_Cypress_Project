describe('File upload scenario',()=>{

it('File upload scenario',()=>{

    cy.on('uncaught:exception', (err, runnable) => {
        
        console.error('Uncaught Exception Occurred:', err.message);
       
        return false;
      })
cy.visit('https://the-internet.herokuapp.com/upload')
//cy.wait(3000)

cy.get('#file-upload').attachFile('mydata.json')
cy.wait(1000)
cy.get('#file-submit').click()
cy.get('h3').should('have.text','File Uploaded!')



})

})