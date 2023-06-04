import React, { useEffect, useRef } from 'react';
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useState } from 'react';



export default function Atendimento() {
    useEffect(() => {
        document.title = 'Statmed - Registrar Paciente';
      }, []);

    // Data Atual no Input
    const date = new Date();
    let currentDay= String(date.getDate()).padStart(2, '0');
    let currentMonth = String(date.getMonth()+1).padStart(2,"0");
    let currentYear = date.getFullYear();
    let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

    // Pega os dados do paciente pelo idSame
    function buscaSame() {
        let idSame = document.getElementById('idSame').value;
        if (idSame !== "") {
            let url = process.env.REACT_APP_API_PEGAIDSAME + "=" + idSame;

            let req = new XMLHttpRequest();
            req.open("Get", url);
            req.send();

            req.onload = function () {
                if (req.status === 200) {
                    let puxapaciente = JSON.parse(req.response);
                    document.getElementById('nome').value = puxapaciente.nome;
                    document.getElementById('nomeSocial').value = puxapaciente.nomeSocial;
                    document.getElementById('dataNasc').value = puxapaciente.dataNasc;
                    document.getElementById('genero').value = puxapaciente.genero;
                    document.getElementById('cpf').value = puxapaciente.cpf;
                    document.getElementById('email').value = puxapaciente.email;
                    document.getElementById('telefone').value = puxapaciente.telefone;
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
    // Transforma data de nascimento em Idade
    function pegaIdade(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    // Variáveis para mostrar o idAtendimento do paciente que foi criado
    const sucessoRef = useRef();
    const [sucessoMsg, setSucessoMsg] = useState('');
    //Checkbox
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckbox = event => {
        setIsChecked(event.target.checked);
    }

    // Gambiarra
    const nomeRef = useRef(undefined);
    const idSameRef = useRef(undefined);
    const atendenteRef = useRef(undefined);
    const dataRef = useRef(undefined);
    const epidemiaRef = useRef(undefined);
    const url = process.env.REACT_APP_API_ATDCAD;

    const submit = async (e) => {
        e.preventDefault();
        // Continuação da gambiarra
        const idSamePega = idSameRef.current.value;
        const atendentePega = "André Fernandes";
        const dataPega = dataRef.current.value;
        const epidemiaPega = epidemiaRef.current.value;
        const anamneseDefault = `Queixa Principal: \r\n    Tempo de Evolu\u00E7\u00E3o:\r\n    Antecedentes:\r\n    \u00C9 A primeira vez?: \r\n    Medica\u00E7\u00F5es em uso: \r\n    Queixa Principal: `;
        try {
            const postaxios = await axios.post(url,
                JSON.stringify({
                    usuario_idFunc: atendentePega,
                    data: dataPega,
                    epidemia: epidemiaPega,
                    pacienteidSame: idSamePega,
                    anamnese: anamneseDefault
                }),
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );
            console.log(postaxios.data.anamnese)
            let nomeCriado = nomeRef.current.value;
            e.target.reset();
            setIsChecked(false);
            let idAtendimentoCriado = (postaxios.data.idAtendimento)
            setSucessoMsg("Consulta do paciente " + nomeCriado + " foi salvo com sucesso! Seu nº de Atendimento é " + idAtendimentoCriado);
            Swal.fire({
                icon: 'success',
                title: 'Paciente Cadastrado',
                showConfirmButton: true,
                text: 'Consulta de ' + nomeCriado + ' registrada no Atendimento ' + idAtendimentoCriado
            });
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
            <h3 className="text-uppercase fw-normal mt-3 mb-3">Criar Atendimento</h3>
            <div className="">
                <form onSubmit={submit}>
                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                        <div className="form-floating mb-3 me-3 w-10">
                            <input autoFocus onBlur={buscaSame} ref={idSameRef} type="number" className="form-control w-100" id="idSame" autoComplete='off' placeholder="Example input" />
                            <label htmlFor="floatingInput">ID Same       <ManageSearchRoundedIcon/></label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-25">
                            <input ref={atendenteRef} type="name" value={"André Fernandes"} className="form-control w-100" id="idFunc_Usuario" placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">Atendente</label>
                        </div>

                        <div className="form-floating mb-3 me-3 w-10">
                            <input ref={dataRef} value={currentDate} type="normal" className="form-control w-100" id="dataAtend" placeholder="Example input" disabled/>
                            <label htmlFor="floatingInput">Data Atendimento</label>
                        </div>
                        <div className="form-check mb-3">
                            <input ref={epidemiaRef} className="form-check-input" type="checkbox" onChange={handleCheckbox}
        checked={isChecked} value={isChecked ? "Sim" : "Não"} id="epidemia" />
                            <label className="form-check-label" htmlFor="epidemia">
                                Epidemia?
                            </label>
                        </div>
                        
                    </div>

                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                        <div className="form-floating mb-3 flex-fill">
                            <input ref={nomeRef} type="text" className="form-control w-100" id="nome" autoComplete='off' placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">Nome</label>
                        </div>

                    </div>
                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                    <div className="form-floating mb-3 flex-fill">
                            <input type="text" className="form-control w-100" id="nomeSocial" placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">Nome Social</label>
                        </div>
                    </div>

                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                        <div className="form-floating mb-3 me-3 w-50">
                            <input type="text" className="form-control" id="genero" placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">Genêro</label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-25">
                            <input onChange={pegaIdade} type="text" className="form-control" id="dataNasc" placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">Idade</label>
                        </div>
                        <div className="form-floating mb-3 w-25">
                            <input maxLength="14" type="text" className="form-control" id="cpf" placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">CPF</label>
                        </div>
                    </div>

                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                        <div className="form-floating mb-3 me-3 w-50">
                            <input type="email" className="form-control" id="email" placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">E-mail</label>
                        </div>

                        <div className="form-floating mb-3 w-50">
                            <input type="tel" maxLength="15" className="form-control" id="telefone" placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">Telefone</label>
                        </div>
                    </div>
                    <button className="btn btn-bscpac btn-lg btn-primary btn-padrao text-uppercase mb-2">Criar Atendimento</button>
                </form>
                <div className="w-100 d-inline-flex flex-row justify-content-center align-items-center">
                    <span className={sucessoMsg ? "mensagem-sucesso text-uppercase" : ""} aria-live="assertive" ref={sucessoRef}>{sucessoMsg}</span>
                </div>            
            </div>
        </div>
    )
}