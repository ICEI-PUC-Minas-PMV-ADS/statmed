# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.


![Capturar](https://github.com/ICEI-PUC-Minas-PMV-ADS/statmed/assets/70419372/8f8bc2cb-cd6b-462e-a10e-8bbc026a9c83)




## Modelo ER (Projeto Conceitual)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/statmed/assets/98277143/755a2b4d-8e15-4770-97eb-3dc9648fceb7)

## Projeto da Base de Dados

O projeto da base de dados corresponde à representação das entidades e relacionamentos identificadas no Modelo ER, no formato de tabelas, com colunas e chaves primárias/estrangeiras necessárias para representar corretamente as restrições de integridade.

A base de dados foi feita utilizando MySQL.
 

![Captura de tela 2023-05-26 215255](https://github.com/ICEI-PUC-Minas-PMV-ADS/statmed/assets/70419372/eb5d1187-5f31-4351-af62-1b263f6db236)




## Tecnologias Utilizadas

Decidimos por utilizar o .NET 7 com Entity Framework e MySql para o backend e ReactJS para o frontend. Utilizamos o Visual Studio Code como IDE devido a sua integração com o GitHub.

## Hospedagem

Utilizamos a hospedagem gratuita fornecida pela SmarterASP.net para o front e back end & AWS Cloud para o banco de dados.
