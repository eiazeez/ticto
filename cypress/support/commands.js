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

import FormPage from "../support/pages/Formulario"

Cypress.Commands.add('ignoreUncaught', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
})

Cypress.Commands.add('deleteUser', (user, message) => {
    FormPage.delete(user) 
    FormPage.deleteMsgShouldBe(message)
})

Cypress.Commands.add('registerUser', (user, message) => {
    FormPage.go()
    FormPage.shouldBeVisible()
    FormPage.form(user)
    FormPage.submit()
    FormPage.successShouldHave(message)
    FormPage.infoUserShouldBe(user)
})


