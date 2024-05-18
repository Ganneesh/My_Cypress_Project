
describe('post related',()=>{


it('Post status code',()=>{

    

    cy.fixture('postpayload').then((data)=>{
    cy.request({
        method:"POST",
        url:"https://jsonplaceholder.typicode.com/posts/",
       
        body:data
    }).then((response)=>{
        //cy.log(response.body)
        cy.log(response.body.title)
        cy.log(response.body.userId)
        cy.log(response.body.body)
        cy.log(response.body.id)
        expect(response.status).to.equal(201)
    })
})

})

it.only('Post Dynamic code',()=>{

    cy.fixture('postpayload').then((data)=>{

        const dynamicTitle = Math.random().toString(36).substring(2);

        const requestBody = {
          ...data,
          title: dynamicTitle,
        };
    cy.request({
        method:"POST",
        url:"https://jsonplaceholder.typicode.com/posts/",
        body:requestBody
    }).then((response)=>{
        cy.log(response.body)
        cy.log(response.body.title)
        cy.log(response.body.userId)
        cy.log(response.body.body)
        cy.log(response.body.id)
        expect(response.body.title).to.equal(requestBody.title)

       expect(response.body).has.property('title',requestBody.title)      
            
        
    })
})

})


})