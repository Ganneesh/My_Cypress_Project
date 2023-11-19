
describe('api testing',()=>{

    it('GET Method demo',()=>{


        cy.request({
        method:'GET',
        url:'https://reqres.in/api/users?page=2',
        }).then((res)=>{

            cy.log(res.body.data[0].email+"  "+res.body.data[0].id)
        })
        


    })

})