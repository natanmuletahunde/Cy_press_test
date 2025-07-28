describe("form tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("Test subscribe form", () => {
    cy.contains(/testing forms/i);
    cy.getDataTest('subscribe-form').find('input').as('subscribe-input') // alias for the input field
    cy.get('@subscribe-input').type('natan@gmail.com')  // calling the alias 
    cy.contains(/Successfully subbed: natan@gmail.com!/i).should('not.exist');
    cy.getDataTest('subscribe-button').click();
    cy.contains(/Successfully subbed: natan@gmail.com!/i).should('exist');
    cy.wait(3000);
    cy.contains(/Successfully subbed: natan@gmail.com!/i).should('not.exist');
    cy.get('@subscribe-input').type('natan@gmail.io');
    cy.getDataTest('subscribe-button').click();
    cy.contains(/Invalid email: natan@gmail.io!/i).should('exist')
    cy.wait(3000);
    cy.contains(/Invalid email: natan@gmail.io!/i).should('not.exist')
    cy.contains(/fail!/i).should('not.exist');
    cy.getDataTest('subscribe-button').click();
    cy.contains(/fail!/i).should('exist');
  });
});
