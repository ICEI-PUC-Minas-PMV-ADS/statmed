# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

| **Caso de Teste** | **CT-01 – Cadastrar perfil** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-001 - O Sistema deverá permitir que o usuário cadastre pacientes. |
| Objetivo do Teste 	| Verificar se o usuário obterá êxito ao cadastrar um paciente novo no sistema. |
| Passos 	| - Acessar o sistema <br> - Introduzir o usuário e senha<br> - Clicar no botão "Entrar" <br> - Clicar em "Cadastro de pacientes" <br> - Preencher os dados do paciente como nome, cpf, data de nascimento e endereço nos campos indicados <br> - Aceitar a confirmação <br> - Clicar em "Registrar" |
|Critério de Êxito | - O cadastro foi realizado com sucesso e o paciente receberá um número único de identificação. |
||
|**Caso de Teste**| **CT-02 – Busca de histórico de passagens do paciente**|
|Requisito Associado | RF-005	- O Sistema deverá permitir a pesquisa do histórico de passagens do paciente no local. |
| Objetivo do Teste 	| Verificar se é retornado o histórico de passagens de um paciente. |
| Passos 	| - Acessar o sistema <br> - Introduzir o usuário e senha<br> - Clicar no botão "Entrar" <br> - Clicar em "Histórico Hospitalar" <br> - Informar o nome do paciente, número único de identificação ou atendimento no campo "SAME", "NOME" ou "ATENDIMENTO"<br> - Clicar em "Pesquisa" |
|Critério de Êxito | - O histórico de passagens do paciente é retornado na mesma tela. |
||
|**Caso de Teste**| **CT-03 – Geração de gráficos e estatísticas**|
|Requisito Associado | RF-012	- O Sistema deverá gerar gráficos das estatísticas de atendimento e doenças. |
| Objetivo do Teste 	| Verificar se é gerado gráficos, estatísticas ou relatórios conforme o designado pelo usuário. |
| Passos 	| - Acessar o sistema <br> - Introduzir o usuário e senha<br> - Clicar no botão "Entrar" <br> - Clicar em "Relatórios" <br> - Informar os campos de "Data", "Epidemia" e se deseja gráficos, estatísticas ou somente um relatório com as passagens. <br> - Clicar em "Gerar" |
|Critério de Êxito | - É retornado em uma nova tela as requisições do usuário. |
||
|**Caso de Teste**| **CT-04 – Pesquisa de CID**|
|Requisito Associado | RF-008	- O Sistema deverá permitir a Pesquisa de CID. |
| Objetivo do Teste 	| Retornar o código de CID correto conforme os termos pesquisados . |
| Passos 	| - Acessar o sistema <br> - Introduzir o usuário e senha<br> - Clicar no botão "Entrar" <br> - Clicar em "CID" <br> - Preencher a pesquisa por código de CID (Campo "CID") ou descrição (Campo "Descrição". <br> - Clicar em "Pesquisa" |
|Critério de Êxito | - É retornado em uma lista na mesma tela os termos mais próximos. |
||
|**Caso de Teste**| **CT-05 – Impressão de ficha do paciente**|
|Requisito Associado | RF-013	- O Sistema deverá permitir a impressão da ficha e histórico do paciente. |
| Objetivo do Teste 	| Gerar em uma nova tela a versão de impressão dos dados do paciente . |
| Passos 	| - Acessar o sistema <br> - Introduzir o usuário e senha<br> - Clicar no botão "Entrar" <br> Clicar em "Histórico Hospitalar”<br> - Informar o nome do paciente no campo "Nome" ou o número único de identificação no campo "SAME" ou o número único de atendimento no campo "Atendimento" <br> - Clicar em "Pesquisa" <br> - Clicar no último atendimento gerado caso a pesquisa tenha sido feita por "Nome" ou "SAME" ou clicar no atendimento com o mesmo número pesquisado caso tenha sido feita pelo campo "Atendimento"<br> - Clicar no ícone de Impressora |
|Critério de Êxito | - É retornardo em uma nova tela uma versão com formato A4 para impressão dos dados do paciente requeridos. |
||
|**Caso de Teste**| **CT-06 – Criação de anamnese**|
|Requisito Associado | RF-003	- Sistema deverá permitir criar uma anamnese e adicionar informações a mesma. |
| Objetivo do Teste 	| Criar uma anamnese para o atendimento do paciente com as informações da consulta. |
| Passos 	| - Acessar o sistema <br> - Introduzir o usuário e senha<br> - Clicar no botão "Entrar" <br> Clicar em "Anamnese”<br> - Informar o nome do paciente no campo "Nome" ou o número único de identificação no campo "SAME" ou o número único de atendimento no campo "Atendimento"<br> - Clicar em "Pesquisa" <br> - Clicar no último atendimento gerado caso a pesquisa tenha sido feita por "Nome" ou "SAME" ou clicar no atendimento com o mesmo número pesquisado caso tenha sido feita pelo campo "Atendimento"<br> - Clicar em "Nova" <br> - Preencher os dados da consulta no campo "Conteúdo" <br> - Clicar em "Salvar" para guardar os dados da anamnese do paciente |
|Critério de Êxito | - É salvo junto ao número de atendimento e número de identificação único do paciente os dados da anamnese. |
||
|**Caso de Teste**| **CT-07 – Localizar Paciente**|
|Requisito Associado | RF-002	- O Sistema deverá permitir que o usuário localize pacientes. |
| Objetivo do Teste 	| Verificar se o usuario obterá êxito em localizar a ficha de cadastro do paciente pelo nome. |
| Passos 	| - Acessar o sistema <br> - Introduzir o usuário e senha<br> - Clicar no botão "Entrar" <br> Clicar em "Historico Hospitalar”<br> Clicar em "Localizar Pacientes- Colocar  "Nome do Paciente" na barra de pesquisa <br> - Clicar em "Pesquisar".| 
|Critério de Êxito | -É retornado na mesma tela o nome do paciente e sua ficha. |
||
|**Caso de Teste**| **CT-08 – Localizar onde o prontuário físico do paciente está**|
|Requisito Associado | RF-004	- O Sistema deverá indicar qual (Local ou prateleira) o prontuário físico do paciente está. |
| Objetivo do Teste 	| Verificar se o usuario obterá êxito em localizar prontuário fisico do paciente. |
| Passos 	| - Acessar o sistema <br> - Introduzir o usuário e senha<br> - Clicar no botão "Entrar" <br> Clicar em "Historico Hospitalar”<br> - Clicar em "Prontuário Físico" <br> - Clicar em "Localizar" <br> - Colocar "Nome do paciente na barra de pesquisa".<br>- Clicar em "Pesquisa" <br>   |
|Critério de Êxito | -É retornado na mesma tela a localização do prontuário. |
||
|**Caso de Teste**| **CT-09– Gerar atestado médico**|
|Requisito Associado | RF-006 - O Sistema deverá gerar atestado (comprovante de consulta). |
| Objetivo do Teste 	| Verificar se o usuario obterá êxito em gerar atestado médico. |
| Passos 	| - Acessar o sistema <br> - Introduzir o usuário e senha<br> - Clicar no botão "Entrar" <br> Clicar em "Atestado Médico” <br> - Clicar em "Gerar Atestado <br>  |
|Critério de Êxito | -É retornado em uma nova tela o atestado gerado. |
||
|**Caso de Teste**| **CT-10 – Gerar receituário médico**|
|Requisito Associado | RF-0010	- O Sistema deverá permitir gerar receituário médico. |
| Objetivo do Teste 	| Verificar se o usuario obterá êxito em gerar receituário médico. |
| Passos 	| - Acessar o sistema <br> - Introduzir o usuário e senha<br> - Clicar no botão "Entrar" <br> Clicar em "Historico Hospitalar”<br> - Clicar em "Receituário Médico" <br> - Clicar em "Gerar"  <br>   |
|Critério de Êxito | -É retornado em uma nova tela o receituário médico gerado. |
||
|**Caso de Teste**| **CT-11– Gerar relatorio de referência e contrarreferência**|
|Requisito Associado | RF-0011	- O Sistema deverá permitir  gerar formulário de referência e contrarreferência. |
| Objetivo do Teste 	| Verificar se o usuario obterá êxito em gerar relatorio de referência e contrarreferência. |
| Passos 	| - Acessar o sistema <br> - Introduzir o usuário e senha<br> - Clicar no botão "Entrar" <br> Clicar em "Historico Hospitalar”<br> - Clicar em "Formulário" <br> - Clicar em "Referência ou Contrarreferência" <br> - Clicar em "Gerar" <br>   |
|Critério de Êxito | -É retornado na mesma tela o formulário solicitado. |
||
|**Caso de Teste**| **CT-12 – Gerar atestado/ comprovante de consulta**|
|Requisito Associado | RF-0006	-O Sistema deverá gerar atestado (comprovante de consulta). |
| Objetivo do Teste 	| Verificar se o usuario obterá êxito em gerar atestado ou o comprovante de consulta. |
| Passos 	| - Acessar o sistema <br> - Introduzir o usuário e senha<br> - Clicar no botão "Entrar" <br> Clicar em "Atendimento”<br> - Clicar em "atestado" <br> - Clicar em "Referência ou Contrarreferência" <br> - Clicar em "Gerar" <br>   |
|Critério de Êxito | -É retornado na mesma tela o formulário solicitado. |
||
|**Caso de Teste**| **CT-13 – Gerar relatórios**|
|Requisito Associado | RF-0009	-O Sistema deverá gerar atestado (comprovante de consulta). |
| Objetivo do Teste 	| Verificar se o usuario obterá êxito em gerar os relatórios. |
| Passos 	| - Acessar o sistema <br> - Introduzir o usuário e senha<br> - Clicar no botão "Entrar" <br> Clicar em "gerar relatórios<br>Clicar em"Gerar"<br>  |
|Critério de Êxito | -É retornado na mesma tela o formulário solicitado. |
||
|**Caso de Teste**| **CT-14 – Ajuda**|
|Requisito Associado | RF0014 O Sistema deverá auxiliar o usuário contatar o responsável pelo sistema em caso de erro de login|
| Objetivo do Teste 	| Verificar se o usuario obterá êxito em solicitar ajuda em caso de não sucesso no login. |
| Passos 	| - Acessar o sistema <br>Clicar em "Ajuda"<br>  |
|Critério de Êxito | -É retornado na mesma tela o formulário solicitado. |

