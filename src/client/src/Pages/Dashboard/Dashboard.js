import React, { useEffect } from "react";
import MasksRoundedIcon from '@mui/icons-material/MasksRounded';
import InsertEmoticonRoundedIcon from '@mui/icons-material/InsertEmoticonRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { ReactComponent as AvisoMascara } from '../../Assets/img/svg/aviso_mascara.svg';

export default function Dashboard() {
    useEffect(() => {
        document.title = 'Statmed - Olá ' + randomUsuarioRes + "!";
    }, );
    // Placeholder para gerar um nome aleatório para o Usuário
    const usuario = [
        "Dr. João", 
        "Dr. Alberto",
        "Dra. Luciana",
        "Elizabeth Couto",
        "André Fernandes",
        "Dr. Igor Pereira"
    ];
    const randomUsuario = Math.floor(Math.random() * usuario.length); 
    const randomUsuarioRes = usuario[randomUsuario];
    // Card 1 Placeholder
    const tituloCard1 = "Médicos ativos";
    const conteudoCard1 = Math.floor(Math.random() * 5);
    // Card 2 Placeholder
    const tituloCard2 = "Novos Pacientes";
    const conteudoCard2 = Math.floor(Math.random() * 25);
    // Card 3 Placeholder
    const tituloCard3 = "Consultas Hoje";
    const conteudoCard3 = Math.floor(Math.random() * 15);

    return (
        <div className="container-fluid ms-3">
            <h3 className="text-uppercase fw-normal  mt-3 mb-3">Olá {randomUsuarioRes}!</h3>
            <div className="w-100 d-inline-flex justify-content-center align-items-center mb-3">
                <div className="me-3">
                    <div className="w-100 d-inline-flex flex-row justify-content-center align-items-center">

                        <div className="card border-left-primary card-dashboard shadow h-100 py-2 me-5 mt-3 mb-3 ">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-3 text-card">
                                            {tituloCard1}
                                        </div>
                                        <div className="h1 mb-0 font-weight-bold">
                                            {conteudoCard1}
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <MasksRoundedIcon/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card border-left-primary card-dashboard shadow h-100 py-2 me-5 mt-3 mb-3 ">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-3 text-card">
                                            {tituloCard2}
                                        </div>
                                        <div className="h1 mb-0 font-weight-bold">
                                            {conteudoCard2}
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <InsertEmoticonRoundedIcon/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card border-left-primary card-dashboard shadow h-100 py-2 mt-3 mb-3 ">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-3 text-card">
                                            {tituloCard3}
                                        </div>
                                        <div className="h1 mb-0 font-weight-bold">
                                            {conteudoCard3}
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <AssignmentRoundedIcon/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-100 d-inline-flex justify-content-center align-items-center">
                <div className="card shadow mb-4">
                    <div className="card-header py-3 d-inline-flex flex-row justify-content-start align-items-start">
                        <h3 className="m-0 mt-2 font-weight-b    text-primary text-card">Informativo </h3>
                        <div className="d-flex justify-content-end flex-fill">
                            <WarningRoundedIcon className="btn-card"/>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-center flex-fill">
                            <AvisoMascara/>
                        </div>
                        <p className="mt-3 fs-5">O fim da emergência de saúde pública da COVID-19 acabou mas o uso de mascára nas depêndecias do hospital não! Atente-se para o uso correto.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}