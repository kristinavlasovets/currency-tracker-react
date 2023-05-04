describe('template spec', () => {
  it('should toogle the appearance of the components according to the theme', () => {
    cy.visit('http://localhost:8080/')
    cy.get('[data-cy="toggleTheme"]').click()
  })
})
