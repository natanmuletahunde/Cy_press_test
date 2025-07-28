describe('Various example', () => {
    beforeEach(()=>{
        cy.visit('/examples')
    })
 it('multi-page testing' ,()=>{
    cy.getDataTest('nav-why-cypress').click()
    cy.location('pathname').should('equal','/');
 })
})
