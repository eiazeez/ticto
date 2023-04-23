import FormPage from "../pages/Formulario"
import data from "../../fixtures/data.json"
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given ("que acesso o site Teste QA", function() {
    return true
})

Given ("que já possuo um usuário válido no site Teste QA", function() {
    cy.registerUser(data.userValido, data.messages)
})

When  ("acesso a página de cadastro", function() {
    FormPage.go()
})

When ("edito as informações do usuário", function(){
    cy.ignoreUncaught()
    FormPage.editUser(data.userValido)
})

When ("apago meu usuário", function(){
    FormPage.delete(data.userValido) 
})

And  ("envio o Formulário", function() {
    FormPage.submit()
})

And  ("preencho com dados Inválidos", function() {
    FormPage.form(data.userInvalido)
})

And  ("preencho com dados Válidos", function() {
    FormPage.form(data.userValido)
})

Then ("o sistema deve me retornar o cadastro com as informações atualizadas", function() {
    FormPage.userEditedShouldBe(data.userValido)
    cy.deleteUser(data.userValido, data.messages)      
})

Then  ("devo visualizar o formulário corretamente", function() {
    FormPage.shouldBeVisible()
    cy.screenshot('páginaVisível')
})

Then  ("o sistema deve me retornar que a exclusão foi realizada com sucesso", function() {
    FormPage.deleteMsgShouldBe(data.messages)
})

Then  ("o sistema deve me retornar mensagens de erro", function() {
    FormPage.errorShouldHave(data.userValido, data.messages)
})

Then  ("O sistema deve me retornar o cadastro com as informações corretas", function() {
    FormPage.successShouldHave(data.messages)
    FormPage.infoUserShouldBe(data.userValido)
    cy.deleteUser(data.userValido, data.messages)       
})
