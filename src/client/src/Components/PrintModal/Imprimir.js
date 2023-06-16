import React, { Component } from 'react'
import './Imprimir.css'
import { ReactComponent as HospitalLogo } from '../../Assets/img/svg/hospital_exemplo_anm.svg';

export default class Imprimir extends Component {
    render() { 
    // Variaveis de valor
    const idAtendimento = this.props.atendimentoPrint;
    const pacienteIdSame = this.props.idSame.current.value;
    const pacienteIdade = this.props.idade.current.value;
    const pacienteGenero = this.props.genero.current.value;
    const pacienteCPF = this.props.cpf.current.value;
    const medico = this.props.medico.current.value;
    const crm = this.props.crm.current.value;
    const nomeSocial = this.props.nomeSocial.current.value;
    const data = this.props.data.current.value;
    const pacienteRecepcionista = this.props.recepcionista.current.value;
    const pacienteNome = this.props.nome.current.value;
    const cid = this.props.cid.current.value;
    const conteudo = JSON.parse(this.props.conteudo);
    const titulo = this.props.titulo;

    return (
    <div className="container-deus">
      <div className="d-flex flex-column container-mae">
        <div className="d-flex justify-content-center align-items-center border-1 borda-preta">
            <h6 className="ft-arial text-uppercase m-1 fw-bold">{process.env.REACT_APP_NOMEHOSPITAL}</h6>
        </div> 
        <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start borda-preta">
            <div className="h-100p borda-right flex-row justify-content-center align-items-center">
                <HospitalLogo className="logo-anamnese" />
            </div>
            <div className="w-100"> 
            <div className="w-100 d-inline-flex justify-content-start align-items-start border-1 borda-preta">
                    <div className="p-1 w-50 borda-right d-inline-flex ">
                        <div className="me-1">
                        <p className="ft-arial">Atendimento:</p>
                        </div>
                        <div className="fw-bolder">
                        <p className="ft-arial" >{idAtendimento}</p>
                        </div>
                    </div>
                    <div className="p-1 w-50 d-inline-flex ">
                        <div className="me-1">
                        <p className="ft-arial">SAME:</p>
                        </div>
                        <div className="fw-bolder">
                        <p className="ft-arial ">{pacienteIdSame}</p>
                        </div>
                    </div>
                </div>
                <div className="w-100 d-inline-flex justify-content-start align-items-start border-1 borda-preta">
                    <div className="p-1 w-50 borda-right">
                        <p className="ft-arial">Nome: {pacienteNome} </p>
                    </div>
                    <div className="p-1 w-50 ">
                        <p className="ft-arial">Nome Social: {nomeSocial} </p>
                    </div>
                </div>
                <div className="w-100 d-inline-flex justify-content-start align-items-start border-1 borda-preta">
                    <div className="p-1 w-50 borda-right">
                        <p className="ft-arial">CID: {cid} </p>
                    </div>
                    <div className="p-1 w-50 ">
                        <p className="ft-arial">Idade: {pacienteIdade} anos </p>
                    </div>
                </div>
                <div className="w-100 d-inline-flex justify-content-start align-items-start border-1 borda-preta">
                    <div className="p-1 w-50 borda-right">
                        <p className="ft-arial">Genêro: {pacienteGenero} </p>
                    </div>
                    <div className="p-1 w-50 ">
                        <p className="ft-arial">CPF: {pacienteCPF}</p>
                    </div>
                </div>
                <div className="w-100 d-inline-flex justify-content-start align-items-start border-1 borda-preta">
                    <div className="p-1 w-50 borda-right">
                        <p className="ft-arial">Médico: {medico} </p>
                    </div>
                    <div className="p-1 w-50 ">
                        <p className="ft-arial">CRM: {crm} </p>
                    </div>
                </div>
                <div className="w-100 d-inline-flex justify-content-start align-items-start">
                    <div className="p-1 w-50 borda-right">
                        <p className="ft-arial">Data: {data} </p>
                    </div>
                    <div className="p-1 w-50 ">
                        <p className="ft-arial">Recepcionista: {pacienteRecepcionista}</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="d-flex justify-content-center align-items-center border-1 borda-preta">
            <h6 className="text-uppercase m-1 fw-bold">{titulo}</h6>
        </div>

        <div className="anamnese-container">
            <div className="m-1 ms-3">
            <p>{conteudo}</p>
            </div>
        </div>
        <div className="mt-auto d-flex justify-content-center align-items-center border-1 borda-top">
            <p className="text-uppercase m-1 fw-bold">{medico} {crm} - {data}</p>
        </div>
        <div className="mt-bottom d-flex justify-content-center align-items-center border-1 borda-top">
            <p className="text-uppercase m-1 fs-rodape">Conforme estabelecido pela Lei Geral de Proteção de Dados (LGPD), informamos que as informações pessoais fornecidas nesta ficha serão utilizadas apenas para fins de atendimento médico, administração hospitalar e cumprimento de obrigações legais. Proibida distribuição e cópia sem consentimento do paciente ou sem intimação judicial.</p>
        </div>
      </div>
    </div>
    )
  }
}