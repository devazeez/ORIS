describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io').wait().should.contain()
  })
})