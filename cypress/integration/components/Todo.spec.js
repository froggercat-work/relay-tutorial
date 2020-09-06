describe('Todo', () => {
    it('should mark a unchecked checkbox on click', () => {
      cy.visit('http://localhost:6006/iframe.html?id=todo--incomplete');
      cy.get('#checkbox').click();
      cy.get('#checkbox').should('contain.text', '✓')
    });

    it('should uncheck a checked checkbox on click', () => {
        cy.visit('http://localhost:6006/iframe.html?id=todo--complete');
        cy.get('#checkbox').click();
        cy.get('#checkbox').should('not.contain.text', '✓')
      });
  })