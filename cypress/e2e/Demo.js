

describe('title validattion',()=>{


it('Test:Title verification',()=>{


cy.visit('https://www.google.com/')

cy.title().should('eq','Google')

//cy.xpath("//title[text()='Google']")

cy.get('title').should('contain','Google').then((data)=>{

    //cy.log(data.text())
    expect(data.text()).equal('Google')

})







})

})