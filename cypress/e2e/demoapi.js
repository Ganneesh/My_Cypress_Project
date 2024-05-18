


describe('api data',()=>{


    it('Test',()=>{
    cy.request({
    method:'GET',
    url:'https://reqres.in/api/user?page=2',
    }).then((response)=>{

    cy.log(response.body)
    cy.log(JSON.stringify(response.body))

    expect(response.body.data[2]).property('email','tobias.funke@reqres.in')

    expect(response.status).to.eq(200)

})

    })

})