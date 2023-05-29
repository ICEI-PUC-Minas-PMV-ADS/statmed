import React, { Component } from 'react'
import './AnamnesePrint.css'
import { ReactComponent as HospitalLogo } from '../../Assets/img/svg/hospital_exemplo_anm.svg';

export default class AnamnesePrint extends Component {
    render() { 
        
    // Variaveis de valor
    const idAtendimento = this.props.atendimentoPrint;
    const pacienteIdSame = 80;
    const pacienteIdade = 49;
    const pacienteGenero = "Masculino";
    const pacienteCPF = "798.597.597-89";
    const medico = "Dr. João D'Artagnan";
    const crm = "213123/CRMSP";
    const data = "08/10/2023";
    const pacienteRecepcionista = "André Gonçalves";
    const pacienteNome = "João das Dores";
    const anamnese = JSON.parse(this.props.anamnesePrint);
    
    return (
    <div className="container-deus">
      <div className="d-flex flex-column container-mae">
        <div className="d-flex justify-content-center align-items-center border-1 borda-preta">
            <h6 className="ft-arial text-uppercase m-1 fw-bold">{process.env.REACT_APP_NOMEHOSPITAL}</h6>
        </div> 
        <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start borda-preta">
            <div className="h-100 borda-right flex-row justify-content-center align-items-center">
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
            <h6 className="text-uppercase m-1">Anamnese</h6>
        </div>

        <div className="anamnese-container">
            <div className="m-1 ms-3">
            <p>{anamnese}</p>
            </div>
        </div>
        <div className="mt-auto d-flex justify-content-center align-items-center border-1 borda-top">
            <p className="text-uppercase m-1 ">{medico} {crm} - {data}</p>
        </div>
        <div className="mt-bottom d-flex justify-content-center align-items-center border-1 borda-top">
            <p className="text-uppercase m-1 fs-rodape">Conforme estabelecido pela Lei Geral de Proteção de Dados (LGPD), informamos que as informações pessoais fornecidas nesta ficha serão utilizadas apenas para fins de atendimento médico, administração hospitalar e cumprimento de obrigações legais. Proibida distribuição e cópia sem consentimento do paciente ou sem intimação judicial.</p>
        </div>
      </div>
    </div>
    )
  }
}