describe('template spec', () => {
  it('should show the chart according to the chosen currency', () => {
    cy.visit('http://localhost:8080/timeline')
    cy.get('[data-cy="selectCurrency"]').click({ multiple: true })
  })
})
