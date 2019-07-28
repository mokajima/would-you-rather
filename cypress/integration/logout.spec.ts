describe('Logout', () => {
  const baseUrl = Cypress.env('baseUrl')

  beforeEach(() => {
    cy.visit(baseUrl)
    cy.get('[data-testid=select]').select('sarahedo')
    cy.get('[data-testid=submit]').click()
  })

  it('Can logout', () => {
    cy.get('[data-testid="logout"]').click()
    cy.get('[data-testid="login-form"]').should('be.visible')
  })
})
