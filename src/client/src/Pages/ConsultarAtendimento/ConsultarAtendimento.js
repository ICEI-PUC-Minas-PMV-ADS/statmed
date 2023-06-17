import React, { useEffect } from 'react'
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
import Swal from 'sweetalert2';
import { useRef } from 'react';
import { useState } from 'react';
import Modal from "react-modal";
import ImprimirAtd from '../../Components/PrintModal/ImprimirConsultarAtd';

export default function ConsultaAtendimento() {
    useEffect(() => {
        document.title = 'Statmed - Consultar Atendimento';
    }, []);

    function modalPrint() {
        window.print();
    }

    //Transforma Ano em Idade
    const idade = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
    function buscaAtendimento() {
        let idAtendimento = document.getElementById('idAtendimento').value;
        if (idAtendimento !== "") {
            let url = process.env.REACT_APP_API_IDATD + "=" + idAtendimento;

            let req = new XMLHttpRequest();
            req.open("Get", url);
            req.send();

            req.onload = function () {
                if (req.status === 200) {
                    const puxapaciente = JSON.parse(req.response);
                    document.getElementById('nome').value = puxapaciente.paciente.nome;
                    document.getElementById('nomeSocial').value = puxapaciente.paciente.nomeSocial;
                    document.getElementById('idSame').value = puxapaciente.pacienteIdSame;
                    document.getElementById('dataNasc').value = idade(puxapaciente.paciente.dataNasc);
                    document.getElementById('genero').value = puxapaciente.paciente.genero;
                    document.getElementById('epidemia').value = puxapaciente.epidemia;
                    document.getElementById('cpf').value = puxapaciente.paciente.cpf;
                    document.getElementById('data').value = puxapaciente.data;
                    document.getElementById('recepcionista').value = puxapaciente.usuario_idFunc;
                    document.getElementById('crm').value = puxapaciente.usuario_crm;
                    document.getElementById('anamnese').value = puxapaciente.anamnese;
                    document.getElementById('cid').value = puxapaciente.cid;
                    document.getElementById('relatorio').value = puxapaciente.relatorio;
                    document.getElementById('encaminhamento').value = puxapaciente.encaminhamento;
                    document.getElementById('atestado').value = puxapaciente.atestado;
                    document.getElementById('receita').value = puxapaciente.receita;
                    document.getElementById('prateleira').value = puxapaciente.paciente.prateleira;
                }
                else if (req.status === 404) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro',
                        text: 'Paciente não encontrado, confira o ID!'
                    })
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro',
                        text: 'Erro de comunicação com servidor... Contate seu administrador'
                    })
                }
            }
        }
    }
        // Modal de impressão
        const AnamneseTitulo = "Anamnese";
        const RelatorioTitulo = "Relatório";
        const EncaminhamentoTitulo = "Encaminhamento";
        const AtestadoTitulo = "Atestado";
        const anamneseRef = useRef('')
        const relatorioRef = useRef('')
        const encaminhamentoRef = useRef('')
        const receitaRef = useRef('')
        const atestadoRef = useRef('')
        const recepcionistaRef = useRef('');
        const nomeRef = useRef('');
        const medicoRef = useRef('');
        const dataRef = useRef('');
        const idadeRef = useRef('');
        const idSameRef = useRef('');
        const generoRef = useRef('');
        const crmRef = useRef('');
        const cidRef = useRef('');
        const cpfRef = useRef('');
        const nomeSocialRef = useRef('');

        const [idAtendimento, setAtendimento] = useState('');
        const [anamneseIsOpen, setAnamneseIsOpen] = useState(false);
        const [relatorioIsOpen, setRelatorioIsOpen] = useState(false);
        const [encaminhamentoIsOpen, setEncaminhamentoIsOpen] = useState(false);
        const [atestadoIsOpen, setAtestadoIsOpen] = useState(false);

        function openAnamnese() {
            setAnamneseIsOpen(true);
        }
    
        function closeAnamnese() {
            setAnamneseIsOpen(false);
        }

        function openRelatorio() {
            setRelatorioIsOpen(true);
        }
    
        function closeRelatorio() {
            setRelatorioIsOpen(false);
        }

        function openEncaminhamento() {
            setEncaminhamentoIsOpen(true);
        }
    
        function closeEncaminhamento() {
            setEncaminhamentoIsOpen(false);
        }

        function openAtestado() {
            setAtestadoIsOpen(true);
        }
    
        function closeAtestado() {
            setAtestadoIsOpen(false);
        }

    return (
        <div className="container-fluid ms-3 me-3">
            <h3 className="text-uppercase fw-normal mt-3">Consultar Atendimento</h3>
            <div className="mt-3 ">
                <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                    <div className="form-floating w-100 me-3">
                        <input autoFocus type="text" onChange={e => setAtendimento(e.target.value)} onBlur={buscaAtendimento}   value={idAtendimento} className="form-control w-100" id="idAtendimento" autoComplete='off' placeholder="Example input" />
                        <label htmlFor="floatingInput">ID do atendimento <ManageSearchRoundedIcon /></label>
                    </div>
                    <div className="d-flex justify-content-end flex-fill">
                        <button onClick={openAnamnese} className="btn btn-padrao btn-pequeno text-uppercase mb-3 me-3" title="Imprimir Anamnese">Anamnese</button>
                        <Modal
                                onAfterOpen={modalPrint}
                                isOpen={anamneseIsOpen}
                                onRequestClose={closeAnamnese}
                                contentLabel="Imprimir"
                                overlayClassName="modal-overlay"
                                className="modal-content-print">
                                <ImprimirAtd
                                data={dataRef}
                                genero={generoRef}
                                nomeSocial={nomeSocialRef}
                                idade={idadeRef}
                                medico={medicoRef}
                                cpf={cpfRef}
                                cid={cidRef}
                                idSame={idSameRef}
                                crm={crmRef}
                                recepcionista={recepcionistaRef}
                                nome={nomeRef}
                                conteudo={anamneseRef}
                                atendimentoPrint={idAtendimento}
                                titulo={AnamneseTitulo}
                                />
                            </Modal>
                        <button onClick={openRelatorio} className="btn btn-padrao btn-pequeno text-uppercase mb-3 me-3" title="Imprimir Relatório">Relatório</button>
                        <Modal
                                onAfterOpen={modalPrint}
                                isOpen={relatorioIsOpen}
                                onRequestClose={closeRelatorio}
                                contentLabel="Imprimir"
                                overlayClassName="modal-overlay"
                                className="modal-content-print">
                                <ImprimirAtd
                                data={dataRef}
                                genero={generoRef}
                                nomeSocial={nomeSocialRef}
                                idade={idadeRef}
                                medico={medicoRef}
                                cpf={cpfRef}
                                cid={cidRef}
                                idSame={idSameRef}
                                crm={crmRef}
                                recepcionista={recepcionistaRef}
                                nome={nomeRef}
                                conteudo={relatorioRef}
                                atendimentoPrint={idAtendimento}
                                titulo={RelatorioTitulo}
                                />
                            </Modal>
                        <button onClick={openEncaminhamento} className="btn btn-padrao mb-3 btn-pequeno text-uppercase me-3" title="Imprimir Encaminhamento">Encaminhamento</button>
                        <Modal
                                onAfterOpen={modalPrint}
                                isOpen={encaminhamentoIsOpen}
                                onRequestClose={closeEncaminhamento}
                                contentLabel="Imprimir"
                                overlayClassName="modal-overlay"
                                className="modal-content-print">
                                <ImprimirAtd
                                data={dataRef}
                                genero={generoRef}
                                nomeSocial={nomeSocialRef}
                                idade={idadeRef}
                                medico={medicoRef}
                                cpf={cpfRef}
                                cid={cidRef}
                                idSame={idSameRef}
                                crm={crmRef}
                                recepcionista={recepcionistaRef}
                                nome={nomeRef}
                                conteudo={encaminhamentoRef}
                                atendimentoPrint={idAtendimento}
                                titulo={EncaminhamentoTitulo}
                                />
                            </Modal>
                        <button onClick={openAtestado} className="btn btn-padrao btn-pequeno mb-3 text-uppercase" title="Imprimir Atestado">Atestado</button>
                        <Modal
                                onAfterOpen={modalPrint}
                                isOpen={atestadoIsOpen}
                                onRequestClose={closeAtestado}
                                contentLabel="Imprimir"
                                overlayClassName="modal-overlay"
                                className="modal-content-print">
                                <ImprimirAtd
                                data={dataRef}
                                genero={generoRef}
                                nomeSocial={nomeSocialRef}
                                idade={idadeRef}
                                medico={medicoRef}
                                cpf={cpfRef}
                                cid={cidRef}
                                idSame={idSameRef}
                                crm={crmRef}
                                recepcionista={recepcionistaRef}
                                nome={nomeRef}
                                conteudo={atestadoRef}
                                atendimentoPrint={idAtendimento}
                                titulo={AtestadoTitulo}
                                />
                            </Modal>
                    </div>
                </div>
                <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                    <div className="form-floating mb-3 me-3 w-50 flex-fill">
                        <input readOnly type="text" ref={nomeRef} className="form-control w-100" id="nome" autoComplete='off' placeholder="Example input" />
                        <label htmlFor="floatingInput">Nome</label>
                    </div>
                    <div className="form-floating mb-3 w-50 flex-fill">
                        <input readOnly pe="text" ref={nomeSocialRef} className="form-control w-100" id="nomeSocial" placeholder="Example input" />
                        <label htmlFor="floatingInput">Nome Social</label>
                    </div>
                </div>
                <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                    <div className="form-floating mb-3 me-3 w-10">
                        <input readOnly type="text" ref={idSameRef} className="form-control w-100" id="idSame" autoComplete='off' placeholder="Example input" />
                        <label htmlFor="floatingInput">SAME</label>
                    </div>
                    <div className="form-floating mb-3 me-3 w-10">
                        <input readOnly type="text" ref={idadeRef} className="form-control w-100" id="dataNasc" autoComplete='off' placeholder="Example input" />
                        <label htmlFor="floatingInput">Idade</label>
                    </div>
                    <div className="form-floating mb-3 me-3 w-15">
                        <input readOnly type="text" className="form-control w-100" id="epidemia" autoComplete='off' placeholder="Example input" />
                        <label htmlFor="floatingInput">Epidemia?</label>
                    </div>
                    <div className="form-floating mb-3 me-3 w-20">
                        <input readOnly type="text" ref={generoRef} className="form-control w-100" id="genero" autoComplete='off' placeholder="Example input" />
                        <label htmlFor="floatingInput">Genêro</label>
                    </div>
                    <div className="form-floating mb-3 me-3 w-20">
                        <input readOnly type="text" ref={cpfRef} className="form-control w-100" id="cpf" autoComplete='off' placeholder="Example input" />
                        <label htmlFor="floatingInput">CPF</label>
                    </div>
                    <div className="form-floating mb-3 me-3 w-20">
                        <input readOnly type="text" ref={dataRef} className="form-control w-100" id="data" autoComplete='off' placeholder="Example input"  />
                        <label htmlFor="floatingInput">Data</label>
                    </div>
                    <div className="form-floating mb-3 w-10 flex-fill">
                        <input readOnly type="text" className="form-control w-100" id="prateleira" autoComplete='off' placeholder="Example input"  />
                        <label htmlFor="floatingInput">Prateleira</label>
                    </div>
                </div>
                <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                    <div className="form-floating mb-3 me-3 w-30">
                        <input readOnly type="text" ref={recepcionistaRef} className="form-control" id="recepcionista" placeholder="Example input" required />
                        <label htmlFor="floatingInput">Recepcionista</label>
                    </div>
                    <div className="form-floating mb-3 me-3 w-35">
                        <input readOnly type="text" ref={medicoRef} defaultValue={"Dr. Igor Pereira"} className="form-control w-100" id="nomeMedico" autoComplete='off' placeholder="Example input"  />
                        <label htmlFor="floatingInput">Médico</label>
                    </div>
                    <div className="form-floating mb-3 me-3 w-20">
                        <input readOnly type="text" ref={crmRef} className="form-control w-100" id="crm" autoComplete='off' placeholder="Example input"  />
                        <label htmlFor="floatingInput">CRM</label>
                    </div>
                    <div className="form-floating mb-3 w-15">
                        <input readOnly type="text" ref={cidRef} className="form-control w-100" id="cid" autoComplete='off' placeholder="Example input" />
                        <label htmlFor="floatingInput">CID</label>
                    </div>
                </div>
                <div className="form-floating mb-3">
                        <textarea readOnly ref={anamneseRef} className="form-control texto-area-consulta" id="anamnese" rows="20" cols="10"/>
                        <label htmlFor="mensagem">Anamnese</label>
                </div>
                <div className="form-floating mb-3">
                        <textarea readOnly ref={relatorioRef} className="form-control texto-area-consulta" id="relatorio" rows="20" cols="10"/>
                        <label htmlFor="mensagem">Relatório</label>
                </div>
                <div className="form-floating mb-3">
                        <textarea readOnly ref={encaminhamentoRef} className="form-control texto-area-consulta" id="encaminhamento" rows="20" cols="10"/>
                        <label htmlFor="mensagem">Encaminhamento</label>
                </div>
                <div className="form-floating mb-3">
                        <textarea readOnly ref={atestadoRef} className="form-control texto-area-consulta" id="atestado" rows="20" cols="10"/>
                        <label htmlFor="mensagem">Atestado</label>
                </div>
                <div className="form-floating mb-3">
                        <textarea readOnly ref={receitaRef} className="form-control texto-area-consulta" id="receita" rows="20" cols="10"/>
                        <label htmlFor="mensagem">Receita</label>
                </div>
            </div>
        </div>
    )
}

