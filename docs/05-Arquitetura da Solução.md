# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![diagrama de classes att](https://user-images.githubusercontent.com/70419372/228539989-e3ae2967-a0c1-4ab0-9e16-b9f387870fe8.PNG)



## Modelo ER (Projeto Conceitual)

![image](https://user-images.githubusercontent.com/98277143/230527029-7f20e933-b713-4e17-8c37-9cd559938a4b.png)

## Projeto da Base de Dados

O projeto da base de dados corresponde à representação das entidades e relacionamentos identificadas no Modelo ER, no formato de tabelas, com colunas e chaves primárias/estrangeiras necessárias para representar corretamente as restrições de integridade.

A base de dados foi feita utilizando MySQL.
 
![image](https://user-images.githubusercontent.com/97044440/230523249-242171ac-d2f6-485b-bf42-1e4e80d3a372.png)


## Tecnologias Utilizadas

Decidimos por utilizar a stack PHP & MySQL com a framework PHP Laravel devido a sua ajuda com autenticação de usuário, gerenciamento de seção, e cache. Para serviço web o Heroku e Visual Studio Code como IDE devido ao seu suporte junto ao GitHub.

## Hospedagem

Devido a seu suporte para nossas tecnologias optamos em utilizar o Heroku App como hospedagem.
