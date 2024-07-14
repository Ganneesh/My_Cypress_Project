describe('Parameterized Test', () => {
    it('Accepts a parameter from CI', () => {
      const testParam = Cypress.env('test_param');
      cy.log(`Received parameter: ${testParam}`);
      expect(testParam).to.be.a('string');
    })
  })