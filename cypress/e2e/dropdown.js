describe('Drop down practice',()=>{


    it('dropdown test case 1',()=>{

        cy.on('uncaught:exception', (err, runnable) => {
        
            console.error('Uncaught Exception Occurred:', err.message);
           
            return false;
          })

       cy.visit('https://www.globalsqa.com/demo-site/select-dropdown-menu/')
      
          cy.xpath('//select').find('option').each(($data)=>{

          if($data.text()==='India')
          {
            cy.log("Ganesh:-  "+$data.text())
            cy.wrap($data).invoke('val').then((value) => {
              cy.get('select').select(value);
            });
          }

          })

    })

})