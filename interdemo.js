
    let boo = true;
   
    it('test1', () => {
      cy.fixture("example").then(($ele)=>{
      boo = false;
      });
      cy.log(boo); // What value will be logged here
    })
   
    it('test2', () => {
      cy.log(boo);// What value will be logged here
    })
   