describe('Login', () => {
  const baseUrl = Cypress.env('baseUrl')

  it('Can login', () => {
    cy.visit(baseUrl)

    cy.get('[data-testid="select"]').select('sarahedo');
    cy.get('[data-testid="submit"]').click();
    cy.get('[data-testid="nav"]').should('be.visible')
  })
})
