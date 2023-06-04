# Instruções de utilização

## Instalação do Site
Utilizamos o ReactJS como frontend, para utiliza-lo localmente é necessário as bibliotecas NPM e React-scripts. 
No backend utilizamos o .net 7, para utiliza-lo localmente é necessário as bibliotecas entity framework.
Assim que abrir a pasta do backend (src/server) em um IDE como o Visual Studio Code, o mesmo alertará em um pop-up para instalar frameworks restantes.

Feito toda essa configuração, no root do front end digite no terminal:
**npm start**
e em seguida no root do back end digite no terminal:
**dotnet watch run **
Pronto, a aplicação interativa já pode ser testada localmente! caso seu localhost do .net tenha a porta diferente do padrão, é só editar no arquivo .env do frontend ReactJs.

## Histórico de versões

### [0.1.0] - 05/05/2023
#### Adicionado
- APIS HTTP Como Post, Put, Get e Delete para tabelas de paciente e funcionários.
- Estruturado nosso projeto front end na pasta "client" e o backend na pasta "server"
- Criado uma front end básica que se comunica com nosso backend:
- Página de login para o front end (não funcional)
- Página de busca e listagem de CID
- Página de arquivo para o SAME (Listar Conteúdos de prateleira) - Necessita atualização das tables no front end
- Página de cadastro de paciente com campos auto-regulatórios

### [1.0.0] - 04/06/2023
#### Adicionado
- Recriado todo front end em reactJS
- Criado APIS de cadastro, edição e busca por Id de Atendimento e Paciente
- Criado página de ajuda no front do login
- Criado as páginas :
> Início
Consulta
Anamnese
Relatório Médico
Encaminhamento
Atestado
Consulta de Atendimento
Arquivo médico
Componente para criar dados em uma ficha de impressão
Refeito o busca CID como modal
- Revisão geral das webAPIs.

