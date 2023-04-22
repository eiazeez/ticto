import FormPage from "../support/pages/Formulario";

describe('Dado que acesso a página de formulário', function() {

    before(function(){
        cy.fixture('form').then(function(form) {
            this.userInvalido = form.userInvalido
            this.userValido = form.userValido
            this.messages = form.messages
        })
    })

    context('Quando envio o Formulário com dados inválidos', function() {

        before(function(){
            FormPage.go()
            FormPage.shouldBeVisible()
        })

        it ('O sistema deve me retornar mensagens de erro', function() {
            FormPage.form(this.userInvalido)
            FormPage.submit()
            FormPage.errorShouldHave(this.userInvalido, this.messages)
        }) 
    })

    context('Quando preencho os campos com dados válidos', function() {
       
        before(function(){
            FormPage.go()
            FormPage.shouldBeVisible()
        })
        
        it ('O sistema deve me retornar o cadastro com as informações corretas', function() {
            FormPage.form(this.userValido)
            FormPage.submit()
            FormPage.successShouldHave(this.messages)
            FormPage.infoUserShouldBe(this.userValido)
        }) 

        after(function(){
            FormPage.delete(this.userValido) 
            FormPage.deleteMsgShouldBe(this.messages)
        })
    })

    context('Quando edito meu usuário já cadastrado', function() {
       
        before(function(){
            FormPage.go()
            FormPage.shouldBeVisible()
            FormPage.form(this.userValido)
            FormPage.submit()
            FormPage.successShouldHave(this.messages)
            FormPage.infoUserShouldBe(this.userValido)
        })
        
        it ('O sistema deve me retornar o cadastro com as informações corretas', function() {
            cy.ignoreUncaught()
            FormPage.editUser(this.userValido)
            FormPage.userEditedShouldBe(this.userValido)
        }) 

        after(function(){
            FormPage.delete(this.userValido)
            FormPage.deleteMsgShouldBe(this.messages)
        })
    })

    context('Quando eu apago meu usuário cadastrado', function() {
       
        before(function(){
            FormPage.go()
            FormPage.shouldBeVisible()
            FormPage.form(this.userValido)
            FormPage.submit()
            FormPage.successShouldHave(this.messages)
            FormPage.infoUserShouldBe(this.userValido)
        })
        
        it ('O sistema deve me retornar que o usuário foi apagado com sucesso', function() {
            FormPage.delete(this.userValido) 
            FormPage.deleteMsgShouldBe(this.messages)
        }) 
    })
})