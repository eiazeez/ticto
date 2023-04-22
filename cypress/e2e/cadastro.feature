#language: pt

Funcionalidade: Cadastro de usuário

    Como usuário do sistema
    Eu gostaria de realizar um cadastro
    Para acessar minha conta

    Cenário: Acessar página com sucesso
    Dado    que acesso o site Teste QA
    Quando  acesso a página de cadastro
    Entao   devo visualizar o formulário corretamente

    Esquema do Cenário: Validar tratamento de erro por dados inválidos
    Dado    que acesso o site Teste QA
    Quando  acesso a página de cadastro
    E       preencho os dados com '<nome>', '<email>', '<senha>'
    E       envio o Formulário com dados inválidos
    Entao   o sistema deve me retornar mensagens de erro 

    Exemplos:
    | nome       | email               | senha  |
    | 12345      |                     | senha  |   