/// <reference types="Cypress" />

import { find } from "lodash";

describe('Login Page suite', function() {

    const expected = [
    'Ibrahim Dickens liked a transaction.',
    'Kaylin Homenick received payment.',
    'Kaylin Homenick requested payment.',
    'Edgar Johns received payment.',
    'Edgar Johns commented on a transaction.',
    'Edgar Johns requested payment.',
    'Edgar Johns received payment.',
    'Edgar Johns requested payment.'
    ]

    beforeEach('Visit our application.', function () {
    cy.visit('/');
    cy.intercept('GET', 'http://localhost:3001/notifications').as('notification')

    });  


    it('Test function ', function () {
        cy.testlogin('Katharina_Bernier', 's3cret')
        cy.get('[data-test="sidenav-notifications"]').click()
        cy.wait('@notification')
        cy.get('[data-test="notifications-list"]').children().then((item)=> {
        for (let  i=0; i<item.length; i++)
                {
                    cy.get('li')
                    .eq(i)
                    .find('div')
                    .eq(1)
                    .find('span')
                    .should('have.text', expected[i])
                }
            })

    }) 
 
    
}); 
 