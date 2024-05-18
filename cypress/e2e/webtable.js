
describe('web table',()=>{


beforeEach(()=>{

    cy.on('uncaught:exception', (err, runnable) => {
        
        console.error('Uncaught Exception Occurred:', err.message);
       
        return false;
      })

cy.visit('https://practice.expandtesting.com/dynamic-table')

})

it('Table th data ',()=>{

    cy.get('table.table-striped thead tr th').contains('Name').should('have.text', 'Name');

    cy.get('table.table-striped thead tr').find('th').each(($data)=>{

        // cy.wrap($data).invoke('text').then((headerText) => {
        //     cy.log(headerText);
        // })

        if($data.text()==='Name')
        {
            cy.log("Table Header Name:- "+$data.text())
        }
        
        
           // expect($data.text()).to.include('Name')  

    })

})


it.only('table td data',()=>{

    //cy.get('table.table-striped thead tr th td').contains('81.9 MB').should('have.text', '81.9 MB');

    cy.get('table.table-striped tbody tr td ').then(($data)=>{

        
    

        expect($data.text()).to.includes('Firefox')

       

    })

})

it.only('table td datadfd',()=>{

    //cy.get('table.table-striped thead tr th td').contains('81.9 MB').should('have.text', '81.9 MB');

    cy.get('table.table-striped tbody tr td ').each(($data)=>{

        
    

        expect($data.text()).to.includes('Firefox')

       

    })

})

})