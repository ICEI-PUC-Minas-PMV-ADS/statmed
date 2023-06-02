import React, { useEffect, useState } from "react";
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
import LocalPrintshopRoundedIcon from '@mui/icons-material/LocalPrintshopRounded';
import Modal from "react-modal";
import AnamnesePrint from "../../Components/AnamnesePrint/AnamnesePrint";
import Swal from 'sweetalert2';

export default function Anamnese() {

    useEffect(() => {
        document.title = 'Statmed - Anamnese';
    }, []);

    // Modal
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handlePacienteAname = (e) => {
        e.preventDefault();
    }

    function modalPrint() {
        window.print();
    }

    // function buscaSame() {
    //     let idAtendimento = document.getElementById('idAtendimento').value;
    //     if (idAtendimento !== "") {
    //         let url = process.env.REACT_APP_API_PEGAIDATT + "=" + idAtendimento;

    //         let req = new XMLHttpRequest();
    //         req.open("Get", url);
    //         req.send();

    //         req.onload = function () {
    //             if (req.status === 200) {
    //                 let puxapaciente = JSON.parse(req.response);
    //                 document.getElementById('nome').value = puxapaciente.nome;
    //                 document.getElementById('nomeSocial').value = puxapaciente.nomeSocial;
    //                 document.getElementById('dataNasc').value = puxapaciente.dataNasc;
    //                 document.getElementById('genero').value = puxapaciente.genero;
    //                 document.getElementById('cpf').value = puxapaciente.cpf;
    //                 document.getElementById('email').value = puxapaciente.email;
    //                 document.getElementById('telefone').value = puxapaciente.telefone;
    //             }
    //             else if (req.status === 404) {
    //                 Swal.fire({
    //                     icon: 'error',
    //                     title: 'Erro',
    //                     text: 'Paciente não encontrado, confira o ID!'
    //                 })
    //             }
    //             else {
    //                 Swal.fire({
    //                     icon: 'error',
    //                     title: 'Erro',
    //                     text: 'Erro de comunicação com servidor... Contate seu administrador'
    //                 })
    //             }
    //         }
    //     }
    // }

    const [anamnese, setAnamnese] = useState(`Queixa Principal: 
Tempo de Evolução:
Antecedentes:
É A primeira vez?: 
Medicações em uso: 
Queixa Principal: 
    `)
    const anmneseJson = JSON.stringify(anamnese);

    const [idAtendimento, setAtendimento] = useState('')


  
    return (
        <div className="container-fluid ms-3">
            <h3 className="text-uppercase fw-normal mt-3 mb-3">Anamnese</h3>
            <div className="">
                <form onSubmit={handlePacienteAname}>
                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                        <div className="form-floating mb-3 me-3 w-10 flex-fill">
                            <input autoFocus onChange={e => setAtendimento(e.target.value)} value={idAtendimento} type="text" className="form-control w-100" id="idAtendimento" autoComplete='off' placeholder="Example input" />
                            <label htmlFor="floatingInput">Atendimento      <ManageSearchRoundedIcon /></label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-10 flex-fill">
                            <input type="text" className="form-control w-100" id="idSame" autoComplete='off' placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">ID Same</label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-10 flex-fill">
                            <input type="text" className="form-control w-100" id="dataNasc" autoComplete='off' placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">Idade</label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-10 flex-fill">
                            <input type="text" className="form-control w-100" id="epidemia" autoComplete='off' placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">Epidemia?</label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-10 flex-fill">
                            <input type="text" className="form-control w-100" id="genero" autoComplete='off' placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">Genêro</label>
                        </div>
                        <div className="d-flex justify-content-end mb-3 flex-fill">
                            <button className="btn btn-padrao btn-pequeno text-uppercase" onClick={openModal}><LocalPrintshopRoundedIcon /></button>
                            <Modal
                                onAfterOpen={modalPrint}
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                contentLabel="Imprimir"
                                overlayClassName="modal-overlay"
                                className="modal-content-print">
                                <AnamnesePrint 
                                anamnesePrint={anmneseJson}
                                atendimentoPrint={idAtendimento}
                                />
                            </Modal>
                        </div>
                    </div>
                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                    <div className="form-floating mb-3 me-3 w-10">
                            <input type="text" className="form-control w-100" id="nomeMedico" autoComplete='off' placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">Médico</label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-10">
                            <input type="text" className="form-control w-100" id="crm" autoComplete='off' placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">CRM</label>
                        </div>
                    </div>
                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                        <div className="form-floating mb-3 me-3 w-50 flex-fill">
                            <input type="text" className="form-control w-100" id="nome" autoComplete='off' placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">Nome</label>
                        </div>
                        <div className="form-floating mb-3 w-50 flex-fill">
                            <input type="text" className="form-control w-100" id="nomeSocial" placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">Nome Social</label>
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea value={anamnese}  onChange={e => setAnamnese(e.target.value)} className="form-control anamnese-texto-area" minLength={20} id="desc" rows="20" cols="10" required/>
                        <label htmlFor="mensagem">Anamnese</label>
                    </div>
                    <button className="btn btn-bscpac btn-lg btn-primary btn-padrao text-uppercase mb-2">Criar Atendimento</button>
                </form>
            </div>
        </div>
    )
}