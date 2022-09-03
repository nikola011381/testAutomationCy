declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * @example cy.loginUser(username, password)
         */
        loginUser(username:any, password:any): Chainable<any>;

        /**
         * @example cy.logoutUser()
         */
        logoutUser(): Chainable<any>;

        /**
         * @example cy.tabNavigation('tab-selector')
         */
        tabNavigation(tab): Chainable<any>;

        /**
         * @example cy.newTransaction(contact, amount, description, type)
         */
        newTransaction(contact, amount, description, type): Chainable<any>;

           /**
         * @example cy.newTransaction(contact, amount, description, type)
         */
            testlogin(user, pass): Chainable<any>;
            /**
         * @example cy.newTransaction(contact, amount, description, type)
         */
            inputUserPass(user, pass): Chainable<any>;
            
    }
}