import React, { useEffect } from 'react'
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
import LocalPrintshopRoundedIcon from '@mui/icons-material/LocalPrintshopRounded';
import Swal from 'sweetalert2';

export default function ConsultaAtendimento() {
    useEffect(() => {
        document.title = 'Statmed - Consultar Atendimento';
    }, []);
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

    return (
        <div className="container-fluid ms-3 me-3">
            <h3 className="text-uppercase fw-normal mt-3">Consultar Atendimento</h3>
            <div className="mt-3">
                <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start mb-3">
                    <div className="form-floating w-100 me-3">
                        <input autoFocus type="text" onBlur={buscaAtendimento}  className="form-control w-40" id="idAtendimento" autoComplete='off' placeholder="Example input" />
                        <label htmlFor="floatingInput">ID do atendimento <ManageSearchRoundedIcon /></label>
                    </div>
                    <div className="form-floating w-100">
                        <button className="btn btn-padrao btn-pequeno w-10 text-uppercase me-3" title="Imprimir Anamnese"><LocalPrintshopRoundedIcon /> </button>
                        <button className="btn btn-padrao btn-pequeno w-10 text-uppercase me-3" title="Imprimir Relatório"><LocalPrintshopRoundedIcon /> </button>
                        <button className="btn btn-padrao btn-pequeno w-10 text-uppercase me-3" title="Imprimir Encaminhamento"><LocalPrintshopRoundedIcon /> </button>
                        <button className="btn btn-padrao btn-pequeno w-10 text-uppercase" title="Imprimir Atestado"><LocalPrintshopRoundedIcon /> </button>
                    </div>
                </div>
                <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                    <div className="form-floating mb-3 me-3 w-50 flex-fill">
                        <input readOnly type="text" className="form-control w-100" id="nome" autoComplete='off' placeholder="Example input" />
                        <label htmlFor="floatingInput">Nome</label>
                    </div>
                    <div className="form-floating mb-3 w-50 flex-fill">
                        <input readOnly pe="text" className="form-control w-100" id="nomeSocial" placeholder="Example input" />
                        <label htmlFor="floatingInput">Nome Social</label>
                    </div>
                </div>
                <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                    <div className="form-floating mb-3 me-3 w-10">
                        <input readOnly type="text" className="form-control w-100" id="idSame" autoComplete='off' placeholder="Example input" />
                        <label htmlFor="floatingInput">ID Same</label>
                    </div>
                    <div className="form-floating mb-3 me-3 w-20 ">
                        <input readOnly type="text" className="form-control w-100" id="dataNasc" autoComplete='off' placeholder="Example input" />
                        <label htmlFor="floatingInput">Idade</label>
                    </div>
                    <div className="form-floating mb-3 me-3 w-10">
                        <input readOnly type="text" className="form-control w-100" id="epidemia" autoComplete='off' placeholder="Example input" />
                        <label htmlFor="floatingInput">Epidemia?</label>
                    </div>
                    <div className="form-floating mb-3 me-3 w-20">
                        <input readOnly type="text" className="form-control w-100" id="genero" autoComplete='off' placeholder="Example input" />
                        <label htmlFor="floatingInput">Genêro</label>
                    </div>
                    <div className="form-floating mb-3 me-3 w-20">
                        <input readOnly type="text" className="form-control w-100" id="cpf" autoComplete='off' placeholder="Example input" />
                        <label htmlFor="floatingInput">CPF</label>
                    </div>
                    <div className="form-floating mb-3 me-3 w-10 ">
                        <input readOnly type="text" className="form-control w-100" id="data" autoComplete='off' placeholder="Example input"  />
                        <label htmlFor="floatingInput">Data</label>
                    </div>
                    <div className="form-floating mb-3 w-10">
                        <input readOnly type="text" className="form-control w-100" id="prateleira" autoComplete='off' placeholder="Example input"  />
                        <label htmlFor="floatingInput">Prateleira</label>
                    </div>
                </div>
                <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                    <div className="form-floating mb-3 me-3 w-30">
                        <input readOnly type="text" className="form-control" id="recepcionista" placeholder="Example input" required />
                        <label htmlFor="floatingInput">Recepcionista</label>
                    </div>
                    <div className="form-floating mb-3 me-3 w-35">
                        <input readOnly type="text" defaultValue={"Dr. Igor Pereira"} className="form-control w-100" id="nomeMedico" autoComplete='off' placeholder="Example input"  />
                        <label htmlFor="floatingInput">Médico</label>
                    </div>
                    <div className="form-floating mb-3 me-3 w-20">
                        <input readOnly type="text" className="form-control w-100" id="crm" autoComplete='off' placeholder="Example input"  />
                        <label htmlFor="floatingInput">CRM</label>
                    </div>
                    <div className="form-floating mb-3 w-15">
                        <input readOnly type="text" className="form-control w-100" id="cid" autoComplete='off' placeholder="Example input" />
                        <label htmlFor="floatingInput">CID</label>
                    </div>
                </div>
                <div className="form-floating mb-3">
                        <textarea readOnly className="form-control texto-area-consulta" id="anamnese" rows="20" cols="10"/>
                        <label htmlFor="mensagem">Anamnese</label>
                </div>
                <div className="form-floating mb-3">
                        <textarea readOnly className="form-control texto-area-consulta" id="relatorio" rows="20" cols="10"/>
                        <label htmlFor="mensagem">Relatório</label>
                </div>
                <div className="form-floating mb-3">
                        <textarea readOnly className="form-control texto-area-consulta" id="encaminhamento" rows="20" cols="10"/>
                        <label htmlFor="mensagem">Encaminhamento</label>
                </div>
                <div className="form-floating mb-3">
                        <textarea readOnly className="form-control texto-area-consulta" id="atestado" rows="20" cols="10"/>
                        <label htmlFor="mensagem">Atestado</label>
                </div>
            </div>
        </div>
    )
}

