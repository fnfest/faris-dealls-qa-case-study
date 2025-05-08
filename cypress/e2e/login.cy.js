describe('User Login', () => {

    it(' login successfully with valid credentials', () => {
        cy.visit('/login');
        cy.get('input[name="email"]').type('Alex1801@gmail.com');
        cy.get('input[name="password"]').type('123Alex123');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/dashboard');
  });
  
    it('login error with invalid credentials ', () => {
        cy.visit('/login');
        cy.get('input[name="email"]').type('alex@hmail.com');
        cy.get('input[name="password"]').type('1234al');
        cy.get('button[type="submit"]').click();
        cy.contains('Invalid email or password').should('be.visible');
        });
  });
  