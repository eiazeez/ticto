import { el } from './elements'

const FormPage = {

    go: function() {
        cy.visit('/')
    },

    shouldBeVisible: function() {
        cy.get(el.formTitle)
            .should('be.visible')
            .should('have.text', 'Formulário')
            .parent()
            .should('be.visible')
    },

    form: function(user) {
        if (user.name)      cy.get(el.inputName) .type(user.nome)
        if (user.email)     cy.get(el.inputEmail).type(user.email)
        if (user.password)  cy.get(el.inputPass) .type(user.senha)
    },

    submit: function() {
        cy.contains('button', 'Cadastrar').click()
    },

    successShouldHave: function(system) {
        cy.get(el.successMsg).contains(system.registeredUserMsg)
    },

    infoUserShouldBe: function(user) {

        cy.get(el.table)
                .find(el.tableColumn)
                .contains(user.email).as('Email')
                .siblings('th').as('Id')

                cy.get('@Id')
                    .siblings(el.tableColumn)
                    .contains(user.name).as('Name')    
        
        cy.get('@Name').should('have.text', user.name)
        cy.get('@Email').should('have.text', user.email)
    },

    errorShouldHave: function(user, system) {
        if (user.name) 
        cy.get(el.inputName)
            .siblings('small')
            .should('to.contain', system.errorsMsg.name)

        if (!user.email) 
        cy.get(el.inputEmail)
            .siblings('small')
            .should('to.contain', system.errorsMsg.email)

        if (user.password)
        cy.get(el.inputPass)
            .siblings('small')
            .should('to.contain', system.errorsMsg.pass)
    },

    editUser: function(user) {
        cy.get('@Id')
            .siblings(el.tableColumn)
            .find(el.actionsButton)
            .click()
            .siblings(el.actions)
            .contains('a', 'Editar')
            .click()
        cy.get(el.editName)
            .filter(':visible')
            .should('have.length.at.least', 1)
            .clear()
            .type(user.edit.name)
        cy.get(el.editEmail)
            .filter(':visible')
            .should('have.length.at.least', 1)
            .clear()
            .type(user.edit.email)
        cy.get(el.saveConfirm)
            .filter(':visible')
            .should('have.length.at.least', 1)
            .click() 
    },

    userEditedShouldBe: function(user) {
        cy.get(el.table)
                .find(el.tableColumn)
                .contains(user.edit.email).as('EditedEmail')
                .siblings('th').as('Id')

                cy.get('@Id')
                    .siblings(el.tableColumn)
                    .contains(user.edit.name).as('EditedName')   
        cy.get('@EditedName').should('have.text', user.edit.name)
        cy.get('@EditedEmail').should('have.text', user.edit.email)
    },

    delete: function() {

        cy.get('@Id')  
            .siblings(el.tableColumn)
            .find(el.actionsButton)
            .click()
            .siblings(el.actions)
            .contains('a', 'Excluir')
            .click()
        cy.get(el.deleteConfirm)
            .filter(':visible')
            .should('have.length.at.least', 1)
            .click()
    },

    deleteMsgShouldBe: function(system) {
        cy.get(el.deletedMsg)
            .should('to.contain', system.deletedUserMsg)
    }
}

export default FormPage
