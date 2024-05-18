describe('table test cases',()=>{


    // before('table validation',()=>{


    //     cy.visit('https://practice.expandtesting.com/dynamic-table')


    // })

it('Find rows',()=>{

cy.visit('https://practice.expandtesting.com/dynamic-table')
cy.get('.table.table-striped>tbody>tr').should('have.length','4')

cy.get('.table.table-striped>tbody>tr').its('length').then((count)=>{

cy.log('number of rows:- '+count)

})


})


it('Find number of tds in each row',()=>{

    cy.visit('https://practice.expandtesting.com/dynamic-table')
    cy.get('.table.table-striped>tbody>tr:nth-child(1)>td').should('have.length','5')
    
    // cy.get('.table.table-striped>t>tr>td').its('length').then((count)=>{
    
    // cy.log('number of td:- '+count)
    
    // })
    
    
    })


    it.only('print the data of each td from tr',()=>{

        cy.visit('https://practice.expandtesting.com/dynamic-table')
        cy.get('.table.table-striped>tbody>tr').each(($row,$index,$rows)=>{

            cy.wrap($row).within(()=>{

                cy.get('td').each(($td,$index,$tds)=>{


                    cy.log($td.text())


                })

            })

                

          

        })
        
        // cy.get('.table.table-striped>t>tr>td').its('length').then((count)=>{
        
        // cy.log('number of td:- '+count)
        
        // })
        
        
        })

})