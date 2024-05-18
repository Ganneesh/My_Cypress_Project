
describe('books data',()=>{

    let accesstoken
    let order

    before("Generation token",()=>{


        cy.request({

            method:"POST",
            url:"https://simple-books-api.glitch.me/api-clients/",
            headers:{'Content-Type':'application/json'},
            body:{ clientName:Math.random().toString(36).substring(2),clientEmail:Math.random().toString(36).substring(2)+"@gmail.com"}
        })
        .then((response)=>{
            expect(response.status).to.equal(201)
            accesstoken=response.body.accessToken
        })

    })

it('Submit an order',()=>{

cy.request({
    method:"POST",
    url:"https://simple-books-api.glitch.me/orders/",
    headers:{'Authorization':'Bearer '+accesstoken},
    body:{
        bookId:3,
        customerName:"Prathmesh"
    }
}).then((response)=>{
 expect(response.status).to.equal(201)
 cy.log(response.body.created+"   "+response.body.orderId)
  order=response.body.orderId
})

}) 

it('Get an order',()=>{

    cy.request({
        method:"GET",
        url:"https://simple-books-api.glitch.me/orders/"+order,
       // qs:{order},
        headers:{'Authorization':'Bearer '+accesstoken},
        //cookies:{'cookieName':'mycookie'}
}).then((response)=>{
expect(response.status).to.equal(200)
expect(response.body).have.property('id')
expect(response.body).have.property('bookId')
expect(response.body).have.property('customerName')
expect(response.body).have.property('quantity')
cy.log(response.body.id)
cy.log(response.body.bookId)
cy.log(response.body.customerName)
cy.log(response.body.createBy)
cy.log(response.body.quantity)
cy.log(response.body.timestamp)

})



})


})