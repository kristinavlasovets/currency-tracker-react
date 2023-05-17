describe('template spec', () => {
  it('should show the exchange rate card due to chosen currency code', () => {
    cy.visit('http://localhost:8080/')
    cy.get('[data-cy="selectOption"]').click({ multiple: true })
  })
})

describe('template spec', () => {
  it('should show the exchange rate calculations due to chosen currency from the list', () => {
    cy.visit('http://localhost:8080/')
    cy.get('[data-cy="selectOption"]').click({ multiple: true })
    cy.get('[data-cy="selectCurrency"]').should('exist')
    cy.get('[data-cy="selectCurrencyItem"]').click({ multiple: true })
  })
})
