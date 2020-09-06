describe('Checkbox', () => {
    it('should mark a unchecked checkbox on click', () => {
      cy.visit('http://localhost:6006/iframe.html?id=checkbox--incomplete');
      cy.get('#checkbox').click();
      cy.get('#checkbox').should('contain.text', '✓')
    });

    it('should uncheck a checked checkbox on click', () => {
        cy.visit('http://localhost:6006/iframe.html?id=checkbox--complete');
        cy.get('#checkbox').click();
        cy.get('#checkbox').should('not.contain.text', '✓')
      });
  })