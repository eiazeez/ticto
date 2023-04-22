import FormPage from "../pages/Formulario"
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

describe('', function() {

    before(function(){
        cy.fixture('form').then(function(form) {
            this.userInvalido = form.userInvalido
            this.userValido = form.userValido
            this.messages = form.messages
        })
    })

    Given ("que acesso o site Teste QA", function() {
        return true
    })

    When  ("acesso a página de cadastro", function() {
        FormPage.go()
    })

    Then  ("devo visualizar o formulário corretamente", function() {
        FormPage.shouldBeVisible()
    })

    When  ("preencho os dados com {string}", function(input) {
        cy.get('#name') .type(input)
        cy.get('#email').type(input)
        cy.get('#password') .type(input)
    })

    When  ("envio o Formulário com dados inválidos", function() {
        FormPage.submit()
    })

    Then  ("o sistema deve me retornar mensagens de erro", function() {
        FormPage.errorShouldHave(this.userInvalido, this.messages)
    })

})
