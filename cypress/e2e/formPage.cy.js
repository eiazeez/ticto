import FormPage from "../support/pages/Formulario";

describe('Dado que acesso a página de formulário', function() {

    before(function(){
        cy.fixture('form').then(function(form) {
            this.userInvalido = form.userInvalido
            this.userValido = form.userValido
        })
    })

    context('Quando preencho os campos com dados inválidos', function() {
       
        it ('O sistema deve me retornar mensagens de erro', function() {

            FormPage.go()
            FormPage.shouldBeVisible()
            FormPage.form(this.userInvalido)
            FormPage.submit()
            FormPage.errorShouldHave(this.userInvalido)

        }) 
    })

    context('Quando preencho os campos com dados válidos', function() {
       
        it ('O sistema deve me retornar o cadastro com as informações corretas', function() {
           
            FormPage.go()
            FormPage.shouldBeVisible()
            FormPage.form(this.userValido)
            FormPage.submit()
            FormPage.successShouldHave(this.userValido)
            FormPage.infoUserShouldBe(this.userValido)
            

        }) 

        after(function(){
            FormPage.delete(this.userValido)
        })
    })
})