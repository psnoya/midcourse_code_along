describe('Application main view', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('contains titel', () => {
    cy.get("section[name='title']")
      .should('contain', 'GitHub Search engine')
  });
});