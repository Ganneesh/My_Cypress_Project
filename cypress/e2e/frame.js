


describe('framedemo',()=>{


it('frame test1',()=>{


    cy.on('uncaught:exception',(err,runnable)=>{

        console.log(err.message())

    })

    cy.visit('https://demo.automationtesting.in/Frames.html')

    cy.iframe("iframe#singleframe",{timeout:20000}).should('exist').find('div>input:nth-child(1)').click().type("Ganesh")

    cy.get("a[href='#Multiple']").click()
    /cy.iframe("iframe[src='MultipleFrames.html']").within(()=>{

        

       cy.iframe("iframe[src='SingleFrame.html']:nth-child(2)").find('div.col-xs-6>input:nth-child(1)').click().type("Ganesh")
   
     })


})


})