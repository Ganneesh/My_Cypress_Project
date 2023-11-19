

describe('mouseover demo',()=>{


it('mouseover demo',()=>{


    cy.visit('https://demo.opencart.com/')

    cy.xpath("(//a[@class='nav-link dropdown-toggle'])[1]").trigger('mouseover').click()

    cy.wait(1000)

    cy.xpath("//a[text()='Mac (1)']").trigger('mouseover').click({force:true})


})

it.only('rightclick',()=>{

cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
cy.wait(300)

cy.get("span[class='context-menu-one btn btn-neutral']").trigger('contextmenu')

})


})