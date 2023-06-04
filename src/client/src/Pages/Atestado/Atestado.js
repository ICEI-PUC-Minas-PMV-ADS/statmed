import React, { useEffect, useState, useRef } from "react";
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
import LocalPrintshopRoundedIcon from '@mui/icons-material/LocalPrintshopRounded';
import Modal from "react-modal";
import Swal from 'sweetalert2';
import axios from "axios";
import Imprimir from "../../Components/PrintModal/Imprimir";

export default function Atestado() {

    useEffect(() => {
        document.title = 'Statmed - Encaminhamento';
    }, []);

    // Modal
    const [modalIsOpen, setIsOpen] = useState(false);
    // Abre Janela de Impressão
    function modalPrint() {
        window.print();
    }
    //
    const idade = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
    // Busca Atendimento
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
                    document.getElementById('cid').value = puxapaciente.cid;
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

    const [atestado, setAtestado] = useState(``)
    const conteudo = JSON.stringify(atestado);
    const [idAtendimento, setAtendimento] = useState('');
    const titulo = "Atestado";
    // Gambiarra
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
    // Variáveis para mostrar sucesso
    const sucessoRef = useRef();
    const [sucessoMsg, setSucessoMsg] = useState('');
    
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handlePacienteAname = async (e) => {
        e.preventDefault();
        try {
            await axios.put(process.env.REACT_APP_API_SALATES,
                JSON.stringify({
                    idAtendimento: idAtendimento,
                    atestado: atestado
                }),
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );
            let nomeAviso = nomeRef.current.value;
            let atendimentoAviso = idAtendimento;
            Swal.fire({
                icon: 'success',
                title: 'Atestado Criado!',
                showConfirmButton: true,
                text: 'Atestado de ' + nomeAviso + ' salvo no atendimento ' + atendimentoAviso
            });
            setSucessoMsg("Atestado de " + nomeAviso + " salvo no atendimento " + atendimentoAviso);
        } catch (err) {
            if (!err?.response) {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro',
                    text: 'Falha de comunicação com servidor, Contate seu Administrator.'
                })
            } else if (err.response?.status === 401) {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro',
                    text: 'Falha de permissão.'
                })
            } else if (err.response?.status === 404) {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro',
                    text: 'Falha de comunicação com servidor, Contate seu Administrator.'
                })
            } else if (err.response?.status === 500) {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro',
                    text: 'CPF já cadastrado, confirme no busca cadastro os dados!'
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro',
                    text: 'Falha de comunicação com servidor, Contate seu Administrator.'
                })
            }
        }
    }

    return (
        <div className="container-fluid ms-3">
            <h3 className="text-uppercase fw-normal mt-3 mb-3">Atestado Médico</h3>
            <div className="">
                <form onSubmit={handlePacienteAname}>
                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                        <div className="form-floating mb-3 me-3 w-10 flex-fill">
                            <input autoFocus onChange={e => setAtendimento(e.target.value)} onBlur={buscaAtendimento} value={idAtendimento} type="text" className="form-control w-100" id="idAtendimento" autoComplete='off' placeholder="Example input" required/>
                            <label htmlFor="floatingInput">Atendimento <ManageSearchRoundedIcon /></label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-10 flex-fill">
                            <input type="text" ref={idSameRef} className="form-control w-100" id="idSame" autoComplete='off' placeholder="Example input" readOnly />
                            <label htmlFor="floatingInput">ID Same</label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-10 flex-fill">
                            <input type="text" ref={idadeRef} className="form-control w-100" id="dataNasc" autoComplete='off' placeholder="Example input" readOnly />
                            <label htmlFor="floatingInput">Idade</label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-10 flex-fill">
                            <input type="text" className="form-control w-100" id="epidemia" autoComplete='off' placeholder="Example input" readOnly />
                            <label htmlFor="floatingInput">Epidemia?</label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-10 flex-fill">
                            <input type="text"  ref={generoRef}  className="form-control w-100" id="genero" autoComplete='off' placeholder="Example input" readOnly />
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
                                <Imprimir
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
                                conteudo={conteudo}
                                atendimentoPrint={idAtendimento}
                                titulo={titulo}
                                />
                            </Modal>
                        </div>
                    </div>
                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                        <div className="form-floating mb-3 me-3 w-10">
                        <input readOnly ref={recepcionistaRef} type="text" className="form-control" id="recepcionista" placeholder="Example input" />
                            <label htmlFor="floatingInput">Recepcionista</label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-10">
                            <input type="text" ref={medicoRef} defaultValue={"Dr. Igor Pereira"} className="form-control w-100" id="nomeMedico" autoComplete='off' placeholder="Example input" readOnly />
                            <label htmlFor="floatingInput">Médico</label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-10">
                            <input type="text"  ref={crmRef}  defaultValue={"222314/SP"} className="form-control w-100" id="crm" autoComplete='off' placeholder="Example input" readOnly />
                            <label htmlFor="floatingInput">CRM</label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-10">
                            <input  type="text" ref={cidRef} className="form-control w-100" id="cid" autoComplete='off' placeholder="Example input" readOnly required/>
                            <label htmlFor="floatingInput">CID</label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-10">
                            <input type="text" ref={cpfRef} className="form-control w-100" id="cpf" autoComplete='off' placeholder="Example input" readOnly />
                            <label htmlFor="floatingInput">CPF</label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-10">
                            <input type="text" ref={dataRef} className="form-control w-100" id="data" autoComplete='off' placeholder="Example input" readOnly />
                            <label htmlFor="floatingInput">Data</label>
                        </div>
                    </div>
                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                        <div className="form-floating mb-3 me-3 w-50 flex-fill">
                            <input readOnly ref={nomeRef} type="text" className="form-control w-100" id="nome" autoComplete='off' placeholder="Example input" required/>
                            <label htmlFor="floatingInput">Nome</label>
                        </div>
                        <div className="form-floating mb-3 w-50 flex-fill">
                            <input type="text" ref={nomeSocialRef} className="form-control w-100" id="nomeSocial" placeholder="Example input" readOnly />
                            <label htmlFor="floatingInput">Nome Social</label>
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea value={atestado} onChange={e => setAtestado(e.target.value)} className="form-control anamnese-texto-area" minLength={20} id="desc" rows="20" cols="10" required/>
                        <label htmlFor="mensagem">Encaminhamento</label>
                    </div>
                    <button className="btn btn-bscpac btn-lg btn-primary btn-padrao text-uppercase mb-2">Criar Atestado</button>
                </form>
                <div className="w-100 d-inline-flex flex-row justify-content-center align-items-center">
                <span className={sucessoMsg ? "mensagem-sucesso text-uppercase" : ""} aria-live="assertive" ref={sucessoRef}>{sucessoMsg}</span>
                </div>
            </div>
        </div>
    )
}