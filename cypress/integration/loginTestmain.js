/// <reference types="Cypress" />

describe('Login Page suite', function() {

    beforeEach('Visit our application.', function () {
        cy.visit('/');
    });  



    it('1. Login with empty username', function() {
        //cy.visit('/');
        cy.get('#username').clear();
        cy.get('#password').type('s3cret');
        cy.get('#username-helper-text').should('have.text', 'Username is required');
        cy.get('[data-test="signin-submit"]').should('be.disabled');
    });


});