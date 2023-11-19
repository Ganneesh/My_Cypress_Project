
describe('drag and drop',()=>{


    it('drag and drop',()=>{

        cy.on('uncaught:exception', (err, runnable) => {
        
            console.error('Uncaught Exception Occurred:', err.message);
           
            return false;
          })

        cy.visit('https://www.globalsqa.com/demo-site/draganddrop/')

        cy.xpath("(//li[@class='resp-tab-item'])[1]").click({force:true})

        cy.wait(2000)

       // cy.get("//div[@class='ui-widget-content ui-draggable ui-draggable-handle']").drag("//div[@id='droppable']")

        //div[id='draggable']

        //cy.iframe("(//iframe[@class='demo-frame lazyloaded'])[2]").find("div[id='draggable']").drag("div[id='droppable']")

        cy.xpath("(//iframe[@src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='])[2]").should('be.visible').then(($iframe)=>{

        cy.wrap($iframe).find("//div[@id='draggable']").drag("//div[@id='droppable']")

        })



    })

})