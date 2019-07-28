describe('Add a question', () => {
  const baseUrl = Cypress.env('baseUrl')

  beforeEach(() => {
    cy.visit(baseUrl)
    cy.get('[data-testid="select"]').select('sarahedo')
    cy.get('[data-testid="submit"]').click()
  })

  it('Can add a question', () => {
    cy.get('[data-testid="unanswered-questions"] > .card').should('have.length', 2)

    cy.get('[data-testid="add"]').click()
    cy.location('pathname').should('eq', '/add')

    cy.get('[data-testid="option-one"]').type('optionOne')
    cy.get('[data-testid="option-two"]').type('optionTwo')
    cy.get('[data-testid="submit"]').click()
    cy.location('pathname').should('eq', '/')

    cy.get('[data-testid="unanswered-questions"] > .card').should('have.length', 3)
  })
})
