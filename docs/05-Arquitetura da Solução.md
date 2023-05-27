# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![Diagrama de Classes ATT](https://user-images.githubusercontent.com/70419372/236355313-989495a3-0e84-452c-8f9f-0ece7fd694bd.PNG)




## Modelo ER (Projeto Conceitual)

![Banco de dados](https://github.com/ICEI-PUC-Minas-PMV-ADS/statmed/assets/70419372/93ec9eea-dec7-4b78-97e7-3d68e8994680)


## Projeto da Base de Dados

O projeto da base de dados corresponde à representação das entidades e relacionamentos identificadas no Modelo ER, no formato de tabelas, com colunas e chaves primárias/estrangeiras necessárias para representar corretamente as restrições de integridade.

A base de dados foi feita utilizando MySQL.
 
![image](https://user-images.githubusercontent.com/97044440/230523249-242171ac-d2f6-485b-bf42-1e4e80d3a372.png)


## Tecnologias Utilizadas

Decidimos por utilizar a .NET e MySQL com Entity Framework. Para serviço web o Heroku e Visual Studio Code como IDE devido ao seu suporte junto ao GitHub.

## Hospedagem

Devido a seu suporte para nossas tecnologias optamos em utilizar o Heroku App como hospedagem junto ao AWS como banco de dados.
