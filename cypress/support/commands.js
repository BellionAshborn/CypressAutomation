// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
   cy.visit(Cypress.env('parabankUrl'));
});


Cypress.Commands.add('getIframeBody', (iframeSelector) => {
  // Find the iframe, its document, and body, and wrap it for Cypress chaining
  return cy
    .get(iframeSelector)
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap); // takes the raw DOM body of the iframe and wraps it in a Cypress chainable object
});