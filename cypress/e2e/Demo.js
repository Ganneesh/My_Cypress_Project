 describe('my suite',()=>{

it('my first test',()=>{
    cy.on('uncaught:exception', (err, runnable) => {
        
        console.error('Uncaught Exception Occurred:', err.message);
       
        return false;
      })
      cy.visit('https://the-internet.herokuapp.com/upload')

cy.wait(5000)

const fileContent = { name: 'Ganesh', city: 'Pune' };

    cy.get('#input-4').selectFile({
      fileContent: JSON.stringify(fileContent),
      fileName: 'mydata.json',
      mimeType: 'application/json'
    })

})


})
