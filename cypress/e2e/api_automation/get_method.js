

describe('Get method',()=>{



it('To verify status code should be 200',()=>{


    cy.request('https://jsonplaceholder.typicode.com/posts/1').its('status').should('equal',200)
    

})

it('To dislay response',()=>{

cy.request({

    mehtod:"GET",
    url:"https://jsonplaceholder.typicode.com/posts/1"

}).then((response)=>{

    let str=JSON.stringify(response)

cy.log(str.userId)

expect(response.status).to.equal(200)
expect(response.body.title).to.equal('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
})

})


})