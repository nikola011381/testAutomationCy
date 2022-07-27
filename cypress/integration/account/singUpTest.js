/// <reference types="Cypress" />


describe('SingUp Test  suite', function() {
    it('1. Navigate to Sing Up page', function() {
        cy.visit('/');
        cy.get('[data-test="signup"]').click();
        cy.get('[data-test="signup-title"]').should('have.text', 'Sign Up');
    });

    it('2. Click on Sing-up while all fields are not populated', function() {
        cy.get('[data-test="signup-submit"]').click();
      cy.get('#firstName-helper-text').should('have.text','First Name is required'); 
    });

    it('3. Check if all sign up fields are mandatory and have proper error message', function() {
        cy.get('#firstName').focus().blur()
        cy.get('#firstName-helper-text').should('have.text','First Name is required');
        cy.get('#lastName').focus().blur()
        cy.get('#lastName-helper-text').should('have.text','Last Name is required');
        cy.get('#username').focus().blur()
        cy.get('#username-helper-text').should('have.text','Username is required');
        cy.get('#password').focus().blur()
        cy.get('#password-helper-text').should('have.text','Enter your password');
        cy.get('#confirmPassword').focus().blur()
        cy.get('#confirmPassword-helper-text').should('have.text','Confirm your password');
        
     // GIT COMMIT VEZBA 6
    });

    it('4. Populate all sign up fields and Sing Up button should be enabled', function() {
        cy.get('#firstName').type('first name')
        cy.get('#lastName').type('last name')
        cy.get('#username').type('username')
        cy.get('#password').type('password')
        cy.get('#confirmPassword').type('password')
        cy.get('[data-test="signup-submit"]').should('be.enabled');

    });

    it('5. Navigate back to Sign In page', function() {
      //  cy.get('[data-test="signup"]').click();
      cy.get('[data-test="signup-submit"]').click();

        cy.get('.MuiGrid-root > a').click()
        cy.get('[class="MuiTypography-root MuiTypography-h5"]').contains('Sign in') 
    });
});
// GIT COMMIT VEZBA 6