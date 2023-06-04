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

function App() {
  return (
    <Routes>
      <Route path="/statmed/" element={<Layout />}>
        <Route path="/statmed/inicio" element={<Dashboard />}/>
        <Route path="/statmed/cad" element={<CadPaciente />}/>
        <Route path="/statmed/historicoPac" element={<HistoricoHospitalar />}/>
        <Route path="/statmed/atend" element={<Atendimento />} />
        <Route path="/statmed/atpac" element={<AttPaciente />} />
        <Route path="/statmed/anamnese" element={<Anamnese />} />
        <Route path="/statmed/arqsame" element={<ArquivoSame />} />
        <Route path="/statmed/relatorioMedico" element={<RelatoriosMedicos />} />
        <Route path="/statmed/consultaAtd" element={<ConsultaAtendimento />} />
        <Route path="/statmed/encaminhamento" element={<Encaminhamento />} />
        <Route path="/statmed/atestado" element={<Atestado />} />
      </Route>
      <Route path="/statmed/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
