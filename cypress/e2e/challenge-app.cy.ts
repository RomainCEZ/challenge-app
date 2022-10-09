describe('challenge-app', () => {
  const champion = "cypress"
  const specialty = "end-to-end testing"
  before('should go to the url', () => {
    cy.visit('http://localhost:3000/')
  })
  it('should create a challenge', () => {
    cy.get('[data-cy="nav-button-new"]').click()
    cy.location('href').should('include', '/newchallenge')
    cy.get('[data-cy="champion-input"]').type(champion)
    cy.get('[data-cy="specialty-input"]').type(specialty)
    cy.get('[data-cy="new-challenge-form-button"]').click()
  })
  it('should delete the last challenge', () => {
    cy.get(`[data-cy="card-menu-${specialty}"]`).click()
    cy.get(`[data-cy="${specialty}-delete-button"]`).click()
    cy.get(`[data-cy="${specialty}-confirm-delete"]`).click()
  })
})