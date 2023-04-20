import FormPage from "../support/pages/Formulario";

describe('Dado que acesso a página de formulário', ()=> {

    it ('Devo visualizar os elementos da página corretamente', ()=> {

        FormPage.go()
        FormPage.shouldBeVisible()

    })

})