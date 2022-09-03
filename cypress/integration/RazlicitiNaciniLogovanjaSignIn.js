/// <reference types="Cypress" />

describe('Login Page suite', function() {

   
    beforeEach('Visit our application.', function () {
    cy.visit('/');
    cy.inputUserPass('Katharina_Bernier', 's3cret')

    });  
    afterEach('Visit our application.', function () {
        cy.logoutUser()
    }); 

    it ('Login by type Button ', function () {
        cy.get('button').click()
    }) 

    it ('Login by Text of button ', function () {
      //  cy.inputUserPass('Katharina_Bernier', 's3cret')
        cy.get('button').contains("Sign In").click()
    }) 

    it ('Login by type Submit ', function () {
      //  cy.inputUserPass('Katharina_Bernier', 's3cret')
        cy.get('[type="submit"]').click()
    }) 
    
    it  ('Login by Class ', function () {
    //    cy.inputUserPass('Katharina_Bernier', 's3cret')
        cy.get('.MuiButton-label').click() 
    })  

    it  ('Login by type Class and Text ', function () {
      //  cy.inputUserPass('Katharina_Bernier', 's3cret')
        cy.get('[class="MuiButton-label"]').contains("Sign In").click() 
    })   

    it  ('Login Form children and text', function () {
    //    cy.inputUserPass('Katharina_Bernier', 's3cret')
        cy.get('form').children().contains('Sign In').click()
     }) 
     it  ('Login Form children and type subbmit', function () {
     //   cy.inputUserPass('Katharina_Bernier', 's3cret')
        cy.get('form').children().get('[type="submit"]').click()
     }) 
     it  ('Login Form children and button ', function () {
     //   cy.inputUserPass('Katharina_Bernier', 's3cret')
        cy.get('form').children().get('button').click()
     }) 


     it ('Login Form 3 children and button ', function () {
      //  cy.inputUserPass('Katharina_Bernier', 's3cret')
        cy.get('form').children().eq(3).get('button').click()                  
        })

    it ('Login Form with childrens', function () {
      //  cy.inputUserPass('Katharina_Bernier', 's3cret')
        cy.get('form').children().eq(3).children().first().click()                  
        })   
     }) 



 

 
 