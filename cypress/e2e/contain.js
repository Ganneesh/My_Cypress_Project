



describe('contain demo',()=>{



    it('contain demo',()=>{


        cy.visit('https://www.google.com/')
        cy.xpath("//textarea[@class='gLFyf']").type("Ganesh")
        cy.contains('Google Search').should('exist').click()


    })

    it.only('contain demo',()=>{


        cy.visit('https://www.google.com/')
        cy.xpath("//textarea[@class='gLFyf']").type("Ganesh")
        cy.wait(1000)
        cy.get("input[name='btnK'][role='button']").then(($data)=>{


            if($data)
            {
                $data.click()
            }

        })



    })

})