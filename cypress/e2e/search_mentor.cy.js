describe('mentoring search', () => {

    it('find mentor by name ', () => {
        cy.visit('/login');
        cy.get('input[name="email"]').type('Alex1801@gmail.com');
        cy.get('input[name="password"]').type('123Alex123');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/dashboard');
        cy.visit('/mentoring');

        cy.get('input[placeholder="Search mentors"]').type('Alex ander');
        cy.contains('Alex ander').should('be.visible');
  });
  
    it('find not found mentor by name', () => {
        cy.visit('/login');
        cy.get('input[name="email"]').type('Alex1801@gmail.com');
        cy.get('input[name="password"]').type('123Alex123');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/dashboard');
        cy.visit('/mentoring');

        cy.get('input[placeholder="Search mentors"]').type('Hihihi');
        cy.contains('No mentors found').should('be.visible'); 
    });
  });