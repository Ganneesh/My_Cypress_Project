


describe('filehandling demo',()=>{


    it('Read file',()=>{


        cy.readFile('cypress\\e2e\\file1.json').then((data)=>{ //cypress\e2e\file1.json


            cy.log(data.First_Name+ "\n  "+"   "+data.Last_Name)


        })


    })

    it('write file',()=>{

    
            cy.readFile('cypress\\e2e\\file1.json').then((data)=>{ 
                data.city="pune"
                let updateddata=JSON.stringify(data)
                cy.writeFile('cypress\\e2e\\file1.json',updateddata)
        
                })

        
             })

})


