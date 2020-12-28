describe('Application main view', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('contains titel', () => {
    cy.get("section[data-cy='title']")
      .should('contain', 'GitHub Search engine')
  });
});