# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

|ID    | Descrição do Requisito  | Artefato(s) produzido(s) |
|------|-----------------------------------------|----|
|RF-001| O Sistema deverá permitir que o usuário cadastre pacientes | client/Pages/CadastrarPaciente/CadPaciente.js / server/Controllers/PacienteController.cs / server/Models/Paciente.cs / server/Data/StatmedDbContext.cs | 
|RF-002| Sistema deverá permitir que o usuário localize pacientes | client/Pages/ConsultarAtendimento/ConsultarAtendimento.js / server/Controllers/AtendimentoController.cs / server/Models/Atendimento.cs / server/Data/StatmedDbContext.cs / client/Components/ImprimirConsultarAtd.js |
|RF-003| Sistema deverá permitir criar uma anamnese e adicionar informações a mesma | client/Pages/Anamnese/Anamnese.js / server/Controllers/AtendimentoController.cs / server/Models/Atendimento.cs / server/Data/StatmedDbContext.cs |
|RF-004| O Sistema deverá indicar qual (Local ou prateleira) o prontuário físico do paciente está   | client/src/Pages/ArquivoSAME/ArquivoSame.js / server/Controllers/PacienteController.cs / server/Paciente/Atendimento.cs / server/Data/StatmedDbContext.cs | 
|RF-005| O Sistema deverá permitir a pesquisa do histórico de passagens do paciente no local | client/Pages/HistoricoHospitalar/HistoricoHospitalar.js / server/Controllers/AtendimentoController.cs / server/Models/Atendimento.cs / server/Data/StatmedDbContext.cs |
|RF-006| O Sistema deverá gerar atestado (comprovante de consulta) | client/Pages/Atestado/Atestado.js / server/Controllers/AtendimentoController.cs / server/Models/Atendimento.cs / server/Data/StatmedDbContext.cs / client/Components/PrintModal/Imprimir.js |
|RF-007| O Sistema deverá mostrar uma tela de boas-vindas ápos o usuário entrar | client/Pages/Dashboard/Dashboard.js | 
|RF-008| O Sistema deverá permitir a Pesquisa de CID | client/Components/ModalCid.js / client/Components/ModalCidTable.js / server/Models/Cid10.cs / server/Controllers/Cid10Controller.cs |
|RF-009| O Sistema deverá permitir gerar relatórios médico conforme o solicitado | client/Pages/RelatoriosMedicos/RelatoriosMedicos.js / server/Controllers/AtendimentoController.cs / server/Models/Atendimento.cs / server/Data/StatmedDbContext.cs / client/Components/PrintModal/Imprimir.js |
|RF-011| O Sistema deverá permitir gerar formulário de referência e contrarreferência | client/Pages/Encaminhamento/Encaminhamento.js / server/Controllers/AtendimentoController.cs / server/Models/Atendimento.cs / server/Data/StatmedDbContext.cs / client/Components/PrintModal/Imprimir.js | 
|RF-013| O Sistema deverá permitir a impressão da ficha | client/Components/PrintModal/Imprimir.js / client/Components/PrintModal/ImprimirConsultaAtd.js |
|RF-014| O Sistema deverá auxiliar o usuário contatar o responsável pelo sistema em caso de erro de login | client/Pages/Login/Login.js / client/Components/AjudaForm.js |

# Instruções de acesso

No momento o sistema não está no ar.
