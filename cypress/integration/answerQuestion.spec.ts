describe('Answer a question', () => {
  const baseUrl = Cypress.env('baseUrl')

  beforeEach(() => {
    cy.visit(baseUrl)
    cy.get('[data-testid="select"]').select('sarahedo')
    cy.get('[data-testid="submit"]').click()
  })

  it('Can answer a question', () => {
    cy.get('[data-testid="unanswered-questions"] > .card').should('have.length', 2)
    cy.get('[data-testid="unanswered-questions"] > .card:first-child .btn').click()

    cy.get('[data-testid="submit"]').click()

    cy.get('[data-testid="result"]').should('be.visible')

    cy.get('[data-testid=header-title]').click()
    cy.location('pathname').should('eq', '/')

    cy.get('[data-testid="unanswered-questions"] > .card').should('have.length', 1)
  })
})
