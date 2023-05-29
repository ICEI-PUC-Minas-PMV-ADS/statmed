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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/inicio" element={<Dashboard />}/>
        <Route path="/cad" element={<CadPaciente />}/>
        <Route path="/atend" element={<Atendimento />} />
        <Route path="/atpac" element={<AttPaciente />} />
        <Route path="/anamnese" element={<Anamnese />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
