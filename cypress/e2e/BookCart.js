
describe('Book cart related test cases',()=>{



it('Test case1 for registration',()=>{


cy.visit('https://bookcart.azurewebsites.net/')

cy.wait(1000)

cy.get("button[class='mat-focus-indicator mat-button mat-button-base ng-star-inserted']").click()


cy.get('.mat-focus-indicator mat-elevation-z4 mat-raised-button mat-button-base').should('be.visible')

cy.get('.mat-focus-indicator mat-elevation-z4 mat-raised-button mat-button-base').click()

cy.get("input[formcontrolname='firstname']").type("Ganesh")

cy.wait(500)

cy.get("input[formcontrolname='lastname']").type("Madane")

cy.get("input[formcontrolname='usename']").type("Ganesh123")

cy.get("input[formcontrolname='password']").type("Testing@123")

cy.get("input[formcontrolname='confirmPassword']").type("Testing@123")

cy.get('#mat-radio-group').first().click()

cy.get('mat-focus-indicator mat-raised-button mat-button-base mat-primary').should('be.visible').click()

f


})

})