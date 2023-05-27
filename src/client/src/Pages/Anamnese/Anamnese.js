import React, { useEffect } from "react";
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
import LocalPrintshopRoundedIcon from '@mui/icons-material/LocalPrintshopRounded';

export default function Anamnese() {
    useEffect(() => {
        document.title = 'Statmed - Anamnese';
      }, []);

    const handlePacienteAname = (e) => {
        e.preventDefault();
    }
    return(
        <div className="container-fluid ms-3">
            <h3 className="text-uppercase fw-normal mt-3 mb-3">Anamnese</h3>
            <div className="">
                <form onSubmit={handlePacienteAname}>
                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                        <div className="form-floating mb-3 me-3 w-10">
                            <input type="text" className="form-control w-100" id="idAtendimento" autoComplete='off' placeholder="Example input" />
                            <label htmlFor="floatingInput">Atendimento      <ManageSearchRoundedIcon/></label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-10">
                            <input type="text" className="form-control w-100" id="idSame" autoComplete='off' placeholder="Example input" disabled/>
                            <label htmlFor="floatingInput">ID Same</label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-10">
                            <input type="text" className="form-control w-100" id="dataNasc" autoComplete='off' placeholder="Example input" disabled/>
                            <label htmlFor="floatingInput">Idade</label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-10">
                            <input type="text" className="form-control w-100" id="epidemia" autoComplete='off' placeholder="Example input" disabled/>
                            <label htmlFor="floatingInput">Epidemia?</label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-10">
                            <input type="text" className="form-control w-100" id="genero" autoComplete='off' placeholder="Example input" disabled/>
                            <label htmlFor="floatingInput">Genêro</label>
                        </div>
                        <div className="d-flex justify-content-end mb-3 flex-fill">
                            <button className="btn btn-padrao btn-pequeno text-uppercase"><LocalPrintshopRoundedIcon/></button>
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
                        <textarea className="form-control anamnese-texto-area" id="mensagem" rows="20" cols="10"></textarea>
                    <label htmlFor="mensagem">Anamnese</label>
                    </div>
                    <button className="btn btn-bscpac btn-lg btn-primary btn-padrao text-uppercase mb-2">Criar Atendimento</button>
                </form>
            </div>
        </div>
    )
}