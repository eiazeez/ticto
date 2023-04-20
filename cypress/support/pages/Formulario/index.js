import { el } from './elements'

const FormPage = {

    go: () => {
        cy.visit('/')
    },

    shouldBeVisible: () => {
        cy.get(el.formTitle)
            .should('be.visible')
            .should('have.text', 'Formulário')
            .parent()
            .should('be.visible')
    },

    form: function(user) {
        if (user.name)      cy.get(el.inputName).type(user.name)
        if (user.email)     cy.get(el.inputEmail).type(user.email)
        if (user.password)  cy.get(el.inputPass).type(user.password)
    },

    submit: function() {
        cy.contains('button', 'Cadastrar').click()
    },

    successShouldHave: function(user) {
        cy.get(el.successMsg).contains(user.success)
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

    delete: function(){

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
        cy.get(el.deletedMsg)
            .should('to.contain', 'Usuário removido com sucesso.')

    },

    errorShouldHave: function(user) {
        if (user.name) 
        cy.get(el.inputName)
            .siblings('small')
            .should('to.contain', user.errors.name)

        if (!user.email) 
        cy.get(el.inputEmail)
            .siblings('small')
            .should('to.contain', user.errors.email)

        if (user.password)
        cy.get(el.inputPass)
            .siblings('small')
            .should('to.contain', user.errors.pass)
    }
}

export default FormPage
