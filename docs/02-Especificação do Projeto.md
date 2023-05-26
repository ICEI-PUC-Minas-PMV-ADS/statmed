# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas a seguir:


<img style="margin-top: 40px;" align="left" width="240px" src="https://user-images.githubusercontent.com/98277143/226173926-27e3a00b-83ca-4a12-86fc-1011fdeccead.png">

## Igor Pereira   

##### Profissão: Médico
##### Idade: 37 anos
Pediatra de 37 anos que trabalha no hospital público, tem uma rotina super corrida com a agenda de atendimentos sempre cheia e uma rotina na sua casa bastante acelerada. Recentemente vem enfrentando um problema em seu trabalho: devido a rotina acelerada a coleta e armazenamento de informações dos pacientes tem ficado complicadas e imprecisas.
#

<img style="margin-top: 40px;" align="left" width="240px" src="https://user-images.githubusercontent.com/98277143/226173982-ea43126c-4f02-42e7-bb60-07e432637880.png">

## André Fernandes  

##### Profissão: Recepcionista
##### Idade: 25 anos
Recepcionista no hospital público e universitário. Possui sua rotina focada no seu trabalho e principalmente na sua faculdade no período noturno, vem sofrendo frequentemente com a dificuldade no atendimento dos pacientes do hospital devido ao método utilizado pelo hospital, gerando assim correrias e muitas vezes tumultos no hospital.
#


<img style="margin-top: 40px;" align="left" width="240px" src="https://user-images.githubusercontent.com/98277143/226174080-458dbd32-6f7e-46e0-bca7-ac06b970bfcd.png">

## Elizabeth Couto

##### Profissão: Supervisora Administrativa
##### Idade: 40 anos
Trabalha no hospital público. Seu papel é supervisionar e controlar  todo o setor administrativo. Em sua rotina ela enfrenta um problema em seu trabalho: devido ao fluxo de informações sobre a estatística de relatório de informações do paciente para repassar para a diretoria.
#


## Histórias de Usuário
A partir da compreensão do dia a dia das pessoas identificadas para o projeto, foram registradas as seguintes histórias de usuários.

|  EU COMO... PERSONA | QUERO/PRECISO... FUNCIONALIDADE| PARA.. MOTIVO/VALOR  |
| ------------ | ------------ | ------------ |
|  Médico (Igor) | Registrar os atendimentos  | Facilitar e documentar meus atendimentos  |
| Médico (Igor)  |  consultar CID | Agilizar meus atendimentos, e o registro da conduta médica. |
| Médico (Igor) |  Gerar formulários de referência e contrarreferência   | Agilizar e minimizar os erros no encaminhamento de pacientes para especialidades  |
|  Recepcionista (André) | Que o CEP retorne endereço e cidade no cadastro  |  Diminuir o tempo que leva o cadastro dos pacientes |
|  Recepcionista (André) |  Gerar ficha do paciente cadastrado com todos os dados dele | Para fazer a recepção do paciente e a partir dessa etapa encaminhar ele para a especialidade desejada    |
| Supervisora administrativa (Elizabeth)  | Gerar relatórios de média de atendimentos   |  Controle e manutenção das atividades hospitalares |
| Supervisora administrativa (Elizabeth)  | Gerar diagramas com a quantidade de casos de doenças epidemiológicas  |  Prestar devida assistência ao ministério da saúde no controle de epidemias |
| Enfermeira (Rafaella)  | Consultar registros do paciente com suas observações médicas  | Diminuir a possibilidade de erros com medicação e cuidados   |
| Enfermeira (Rafaella)  |  Consultar local do prontuário físico (Prontuário impresso) | Realizar prova de medicações junto a convênios durante a auditoria  |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

#### Requisitos Funcionais

|  ID | Descrição do Requisito  |  Prioridade |
| ------------ | ------------ | ------------ |
|  RF-001 |  O Sistema deverá permitir que o usuário cadastre pacientes | ALTA  |
|  RF-002 |   Sistema deverá permitir que o usuário localize pacientes |  ALTA |
|  RF-003 |   Sistema deverá permitir criar uma anamnese e adicionar informações a mesma |  ALTA |
|  RF-004 | O Sistema deverá indicar qual (Local ou prateleira) o prontuário físico do paciente está  | BAIXA  |
|  RF-005 |  O Sistema deverá permitir a pesquisa do histórico de passagens do paciente no local |  ALTA |
|  RF-006 | O Sistema deverá gerar atestado (comprovante de consulta)  | BAIXA  |
|  RF-008 | O Sistema deverá permitir a Pesquisa de CID  |  MÉDIA |
|  RF-009 | O Sistema deverá permitir gerar relatórios conforme o solicitado | ALTA |
|  RF-010 | O Sistema deverá permitir gerar receituário médico | MÉDIA  |
|  RF-011 | O Sistema deverá permitir  gerar formulário de referência e contrarreferência  | MÉDIA  |
|  RF-012 |  O Sistema deverá gerar gráficos das estatísticas de atendimento e doenças | BAIXA  |
|  RF-013 | O Sistema deverá permitir a impressão da ficha e histórico do paciente  |  MÉDIA |
|  RF-014 | O Sistema deverá auxiliar o usuário contatar o responsável pelo sistema em caso de erro de login  |  BAIXA |


#### Requisitos Não Funcionais

|  ID | Descrição do Requisito  |  Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ter layout responsivo | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| Usuários deverão ter níveis de acessos e permissões diferentes conforme o cargo |  ALTA | 
|RNF-004| O sistema deve ser seguro, possuindo a guarda do  histórico médico sem acesso por terceiros, segundo a LGPD |  ALTA |
|RNF-005| O sistema deve ser fácil de manter e atualizar, permitindo a correção de possíveis falhas ou problemas rapidamente |  MEDIA |
|RNF-006| O sistema deve possibilitar o acesso simultâneo do quadro de funcionários responsáveis pelo atendimento direto ao paciente |  ALTA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |

## Diagrama de Casos de Uso

![diagrama att](https://user-images.githubusercontent.com/70419372/226077379-bbe945ba-ff04-48ef-b565-17d5abb3a1d2.jpg)


