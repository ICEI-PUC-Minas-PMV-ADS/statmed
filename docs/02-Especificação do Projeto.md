# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto


## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas a seguir:
#
<img style="margin-top: 40px;" align="left" width="240px" src="https://user-images.githubusercontent.com/114541642/226109557-bb6c56ce-7452-4be7-a9a4-7290f72e298c.png">

## Igor Pereira   

##### Profissão: Médico
##### Idade: 37 anos
Pediatra de 37 anos que trabalha no hospital público, tem uma rotina super corrida com a agenda de atendimentos sempre cheia e uma rotina na sua casa bastante acelerada. Recentemente vem enfrentando um problema em seu trabalho: devido a rotina acelerada a coleta e armazenamento de informações dos pacientes tem ficado complicadas e imprecisas.
#

<img style="margin-top: 40px;" align="left" width="240px" src="https://user-images.githubusercontent.com/114541642/226080962-4f0b2bd6-b559-4b8d-97b3-6df440338619.png">

## André Fernandes  

##### Profissão: Recepcionista
##### Idade: 25 anos
Recepcionista no hospital público e universitário. Possui sua rotina focada no seu trabalho e principalmente na sua faculdade no período noturno, vem sofrendo frequentemente com a dificuldade no atendimento dos pacientes do hospital devido ao método utilizado pelo hospital, gerando assim correrias e muitas vezes tumultos no hospital.
#

<img style="margin-top: 40px;" align="left" width="240px" src="https://user-images.githubusercontent.com/114541642/226110154-e99b6582-1512-4fba-9ff7-97c48ed278ba.png">

## Elizabeth Couto

##### Profissão: Supervisora Administrativa
##### Idade: 40 anos
Trabalha no hospital público. Seu papel é supervisionar e controlar  todo o setor administrativo. Em sua rotina ela enfrenta um problema em seu trabalho: devido ao fluxo de informações sobre a estatística de relatório de informações do paciente para repassar para a diretoria.
#

<img style="margin-top: 40px;" align="left" width="240px" src="https://user-images.githubusercontent.com/114541642/226110554-e69a2900-d08c-45da-b324-07a5cb19cd88.png">

## Rafaella Costa 

##### Profissão: Enfermeira
##### Idade: 28 anos
 É responsável por cuidar de pacientes em estado grave e monitorar sua saúde em tempo integral. No entanto, ela enfrenta um problema constante em seu trabalho: a falta de recursos e informações precisas sobre os pacientes.
#









## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

- Requisitos Funcionais

|  ID | Descrição do Requisito  |  Prioridade |
| ------------ | ------------ | ------------ |
|  RF-001 |  O Sistema deverá permitir que o usuário cadastre pacientes | ALTA  |
|  RF-002 |   Sistema deverá permitir que o usuário localize pacientes |  ALTA |
|  RF-003 |   Sistema deverá permitir criar uma anamnese e adicionar informações a mesma |  ALTA |
|  RF-004 | O Sistema deverá indicar qual (Local ou prateleira) o prontuário físico do paciente está  | BAIXA  |
|  RF-005 |  O Sistema deverá permitir a pesquisa do histórico de passagens do paciente no local |  ALTA |
|  RF-006 | O Sistema deverá gerar atestado (comprovante de consulta)  | BAIXA  |
|  RF-008 | O Sistema deverá permitir a Pesquisa de CID  |  MÉDIA |
|RF-009| O Sistema deverá permitir gerar relatórios conforme o solicitado | ALTA |
|  RF-0010 | O Sistema deverá permitir gerar receituário médico | MÉDIA  |
|  RF-0011 | O Sistema deverá permitir  gerar formulário de referência e contrarreferência  | MÉDIA  |
|  RF-0012 |  O Sistema deverá gerar gráficos das estatísticas de atendimento e doenças | BAIXA  |
|  RF-0013 | O Sistema deverá permitir a impressão da ficha e histórico do paciente  |  MÉDIA|

- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

![diagrama att](https://user-images.githubusercontent.com/70419372/226077379-bbe945ba-ff04-48ef-b565-17d5abb3a1d2.jpg)


