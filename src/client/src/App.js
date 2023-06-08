import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Routes, Route } from 'react-router-dom';
import CadPaciente from './Pages/CadastrarPaciente/CadPaciente';
import LoginPage from './Pages/Login/Login';
import Layout from './Layout';
import Atendimento from './Pages/Atendimento/Atendimento';
import Anamnese from './Pages/Anamnese/Anamnese';
import AttPaciente from './Pages/AtualizarPaciente/AtualizarPaciente';
import Dashboard from './Pages/Dashboard/Dashboard';
import HistoricoHospitalar from './Pages/HistoricoHospitalar/HistoricoHospitalar';
import ArquivoSame from './Pages/ArquivoSAME/ArquivoSame';
import RelatoriosMedicos from './Pages/RelatoriosMedicos/RelatoriosMedicos';
import ConsultaAtendimento from './Pages/ConsultarAtendimento/ConsultarAtendimento';
import Encaminhamento from './Pages/Encaminhamento/Encaminhamento';
import Atestado from './Pages/Atestado/Atestado';
import RelatorioAdm from './Pages/RelatorioAdm/RelatorioAdm';
import Receita from './Pages/Receita/Receita';
import Estatisticas from './Pages/Estatisticas/Estatisticas';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/inicio" element={<Dashboard />}/>
        <Route path="/cad" element={<CadPaciente />}/>
        <Route path="/historicoPac" element={<HistoricoHospitalar />}/>
        <Route path="/atend" element={<Atendimento />} />
        <Route path="/atpac" element={<AttPaciente />} />
        <Route path="/anamnese" element={<Anamnese />} />
        <Route path="/arqsame" element={<ArquivoSame />} />
        <Route path="/relatorioMedico" element={<RelatoriosMedicos />} />
        <Route path="/consultaAtd" element={<ConsultaAtendimento />} />
        <Route path="/encaminhamento" element={<Encaminhamento />} />
        <Route path="/atestado" element={<Atestado />} />
        <Route path="/relatorioAdm" element={<RelatorioAdm />} />
        <Route path="/receita" element={<Receita />} />
        <Route path="/estatisticas" element={<Estatisticas />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
