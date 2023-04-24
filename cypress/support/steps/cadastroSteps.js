import FormPage from "../pages/Formulario"
import form from "../../fixtures/form.json"
import { Given, When, Then, After } from "cypress-cucumber-preprocessor/steps"

context('', function() {

    Given ("que acesso o site Teste QA", function() {
        return true
    })

    When  ("acesso a página de cadastro", function() {
        FormPage.go()
    })

    Then  ("devo visualizar o formulário corretamente", function() {
        FormPage.shouldBeVisible()
    })

})

context('', function(){
    And  ("preencho com dados Inválidos", function() {
        FormPage.form(form.userInvalido)
    })

    And  ("preencho com dados Válidos", function() {
        FormPage.form(form.userValido)
    })

    Given ("que já possuo um usuário válido no site Teste QA", function() {
        cy.registerUser(form.userValido, form.messages)
    })

    When ("edito as informações do usuário", function(){
        cy.ignoreUncaught()
        FormPage.editUser(form.userValido)
    })

    Then ("o sistema deve me retornar o cadastro com as informações atualizadas", function() {
        FormPage.userEditedShouldBe(form.userValido)
        cy.deleteUser(form.userValido, form.messages)      
    })

    And  ("envio o Formulário", function() {
        FormPage.submit()
    })

    When ("apago meu usuário", function(){
        FormPage.delete(form.userValido) 
    })

    Then  ("o sistema deve me retornar que a exclusão foi realizada com sucesso", function() {
        FormPage.deleteMsgShouldBe(form.messages)
    })

    Then  ("o sistema deve me retornar mensagens de erro", function() {
        FormPage.errorShouldHave(form.userValido, form.messages)
    })

    Then  ("O sistema deve me retornar o cadastro com as informações corretas", function() {
        FormPage.successShouldHave(form.messages)
        FormPage.infoUserShouldBe(form.userValido)
        cy.deleteUser(form.userValido, form.messages)       
    })
})
