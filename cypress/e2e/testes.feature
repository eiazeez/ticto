#language: pt

#language: pt

Funcionalidade: Controle de usuários

    Como usuário do sistema
    Eu gostaria de realizar um cadastro
    Editar minhas informações da conta cadastrada
    Apagar meu usuário

    Cenário: Acessar página com sucesso
    Dado    que acesso o site Teste QA
    Quando  acesso a página de cadastro
    Entao   devo visualizar o formulário corretamente

    Cenário: Validar tratamento de erro por dados inválidos
    Dado    que acesso o site Teste QA
    Quando  acesso a página de cadastro
    E       preencho com dados Inválidos
    E       envio o Formulário
    Entao   o sistema deve me retornar mensagens de erro 

    Cenário: Cadastrar um usuário válido
    Dado    que acesso o site Teste QA
    Quando  acesso a página de cadastro
    E       preencho com dados Válidos
    E       envio o Formulário
    Entao   O sistema deve me retornar o cadastro com as informações corretas

    Cenário: Editar um usuário já cadastrado
    Dado    que já possuo um usuário válido no site Teste QA
    Quando  edito as informações do usuário
    Entao   o sistema deve me retornar o cadastro com as informações atualizadas

    Cenário: Apagar um usuário já cadastrado
    Dado    que já possuo um usuário válido no site Teste QA
    Quando  apago meu usuário
    Entao   o sistema deve me retornar que a exclusão foi realizada com sucesso