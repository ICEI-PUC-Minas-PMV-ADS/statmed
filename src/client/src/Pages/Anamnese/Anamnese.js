import React from "react";


export default function Anamnese() {

    const handlePacienteAname = (e) => {
        e.preventDefault();
    }
    return(
        <div className="container-fluid">
            <h3 className="text-uppercase fw-normal mt-3 mb-3">Anamenese</h3>
            <div className="">
                <form onSubmit={handlePacienteAname}>
                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                        <div className="form-floating mb-3 me-3 w-25">
                            <input type="text" className="form-control w-25" id="idSame" autoComplete='off' placeholder="Example input" />
                            <label htmlFor="floatingInput">ID Same</label>
                        </div>
                        <div className="form-floating mb-3 w-25 me-3">
                            <input type="text" className="form-control w-25" id="genero" placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">Gênero</label>
                        </div>
                        <div className="form-floating mb-3 w-25 me-3">
                            <input type="text" className="form-control w-25" id="dataNasc" placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">Idade</label>
                        </div>
                        <div className="form-floating mb-3 w-25">
                            <input type="text" className="form-control w-25" id="epidemia" placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">Epidemia</label>
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
                        <textarea className="form-control" name="mensagem" rows="2500"></textarea>
                    <label htmlFor="mensagem">Mensagem adicional</label>
                    </div>

                    <button className="btn btn-bscpac btn-lg btn-primary btn-padrao text-uppercase mb-2">Criar Atendimento</button>
                </form>
            </div>
        </div>
    )
}