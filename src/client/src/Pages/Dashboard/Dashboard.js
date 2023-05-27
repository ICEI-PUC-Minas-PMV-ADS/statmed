import React, { useEffect } from "react";
import MasksRoundedIcon from '@mui/icons-material/MasksRounded';
import InsertEmoticonRoundedIcon from '@mui/icons-material/InsertEmoticonRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { ReactComponent as AvisoMascara } from '../../Assets/img/svg/aviso_mascara.svg';

export default function Dashboard() {
    useEffect(() => {
        document.title = 'Statmed - Olá ' + usuario;
    }, []);

    const usuario = "Dr. João";

    const medicosPlantao = Math.floor(Math.random() * 5);

    const consultasHoje = Math.floor(Math.random() * 25);

    const novosPacientes = Math.floor(Math.random() * 15);

    return (
        <div className="container-fluid ms-3">
            <h3 className="text-uppercase fw-normal  mt-3 mb-3">Olá {usuario}!</h3>
            <div className="w-100 d-inline-flex justify-content-center align-items-center mb-3">
                <div className="me-3">
                    <div className="w-100 d-inline-flex flex-row justify-content-center align-items-center">

                        <div class="card border-left-primary card-dashboard shadow h-100 py-2 me-5 mt-3 mb-3 ">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-3 text-card">
                                            Médicos ativos
                                        </div>
                                        <div class="h1 mb-0 font-weight-bold">
                                            {medicosPlantao}
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <MasksRoundedIcon/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card border-left-primary card-dashboard shadow h-100 py-2 me-5 mt-4 mb-3 ">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-3 text-card">
                                            Novos Pacientes
                                        </div>
                                        <div class="h1 mb-0 font-weight-bold">
                                            {novosPacientes}
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <InsertEmoticonRoundedIcon/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card border-left-primary card-dashboard shadow h-100 py-2 mt-3 mb-3 ">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-3 text-card">
                                            Consultas Hoje
                                        </div>
                                        <div class="h1 mb-0 font-weight-bold">
                                            {consultasHoje}
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <AssignmentRoundedIcon/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-100 d-inline-flex justify-content-center align-items-center">
                <div class="card shadow mb-4">
                    <div class="card-header py-3 d-inline-flex flex-row justify-content-start align-items-start">
                        <h3 class="m-0 mt-2 font-weight-b    text-primary text-card">Informativo </h3>
                        <div className="d-flex justify-content-end flex-fill">
                            <WarningRoundedIcon className="btn-card"/>
                        </div>
                    </div>
                    <div class="card-body">
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