<h1 align="center"> automationPractice no Cypress </h1>

<p align="center">
<img src="https://img.shields.io/badge/LICENSE-MIT-green"/> 
<img src="https://img.shields.io/badge/CYPRESS-9.7.0-brightgreen"/>
<img src="https://img.shields.io/badge/STATUS-WORKING-yellow"/>
</p>

<h2 align="center"> • Repositório destinado a laboratório de Teste Automatizados no Cypress para o site http://automationpractice.com/ </h2>

:construction: Este projeto segue em construção :construction:

## 👉 Índice 

* [Índice](#-índice) - [Getting Started](#-getting-started) - [Acesso ao projeto](#-acesso-ao-projeto) - [Abrir e rodar o projeto](#️-abrir-e-rodar-o-projeto)


## 🏁 Getting Started

![NodeV](https://img.shields.io/badge/NODE-14.17.1-blue)

O passo a passo para executar o Cypress é bem simples, será necessário que você tenha Node instalado previamente. No meu caso, o node utilizado foi a versão 14.17.1.

## 📁 Acesso ao projeto

* Clone o repositório na sua máquina usando:
```
git clone https://github.com/eiazeez/autoPracticeCypress.git 
```

## 🛠️ Abrir e rodar o projeto

* Lembre-se entrar na pasta do projeto e instalar as depedências com
```
npm install cypress --save-dev
```

![CPT2206080057-621x347](https://user-images.githubusercontent.com/92765887/172528698-9dbcfb13-1319-448d-9b3a-b60bb2878b8f.gif)


* ainda dentro da pasta do projeto, para abrir a interface do Cypress use o comando
```
npx cypress open
```
![CPT2206080106-621x349](https://user-images.githubusercontent.com/92765887/172529378-ecf15eec-8443-4a7f-8a84-c3db8304196b.gif)

#
* Arquivos '.spec.js' são arquivos de testes, ou seja, no exemplo abaixo temos 2 arquivos de execução de testes


![image](https://user-images.githubusercontent.com/92765887/172530236-85491f8c-1057-43d3-b769-8e3ca51dd946.png)

#

- 'onAir.spec.js' é um teste feito para verificar se o site estar no ar (automationpractice.com pode ser um bem instável às vezes)
- 'T01_testCase.spec.js' é um teste que segue o seguinte fluxo:

1. Acessar o site http://automationpractice.com/
2. Criar uma conta na plataforma
3. Realizar um login na conta criada
4. Adicionar um dos produtos das vitrines da home
5. Verificar se foi adicionado o produto ao carrinho  

- Para executar o teste, basta clicar em cima do nome do arquivo

![CPT2206080129-621x349](https://user-images.githubusercontent.com/92765887/172531877-b80bf33a-1769-4df3-9565-be0a795f8f3e.gif)





