import React, { useEffect } from 'react';
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
    


export default function Atendimento() {
    useEffect(() => {
        document.title = 'Statmed - Registrar Paciente';
      }, []);

    // Data Atual no Input
    var curr = new Date();
    curr.setDate(curr.getDate() + 3);
    var date = curr.toISOString().substring(0, 10);

    const handlePacienteAtend = (e) => {
        e.preventDefault();
    }


    return (
        <div className="container-fluid">
            <h3 className="text-uppercase fw-normal mt-3 mb-3">Criar Atendimento</h3>
            <div className="">
                <form onSubmit={handlePacienteAtend}>
                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                        <div className="form-floating mb-3 me-3 w-10">
                            <input type="text" className="form-control w-100" id="idSame" autoComplete='off' placeholder="Example input" />
                            <label htmlFor="floatingInput">ID Same       <ManageSearchRoundedIcon/></label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-25">
                            <input type="name" className="form-control w-100" id="idFunc_recepcionista" placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">Atendente</label>
                        </div>

                        <div className="form-floating mb-3 me-3 w-10">
                            <input defaultValue={date} type="date" className="form-control w-100" id="dataAtend" placeholder="Example input" disabled/>
                            <label htmlFor="floatingInput">Data do atendimento</label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value="" id="epidemia" />
                            <label className="form-check-label" htmlFor="epidemia">
                                Epidemia?
                            </label>
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

                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                        <div className="form-floating mb-3 me-3 flex-fill">
                            <select className="form-select" id="genero" aria-label="Floating label select example" disabled>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Outro">Outro</option>
                            </select>
                            <label htmlFor="floatingSelect">Gênero</label>
                        </div>
                        <div className="form-floating mb-3 me-3 flex-fill">
                            <input type="date" className="form-control" id="dataNasc" placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">Data de Nascimento</label>
                        </div>
                        <div className="form-floating mb-3 flex-fill">
                            <input maxLength="14" type="text" className="form-control" id="cpf" placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">CPF</label>
                        </div>
                    </div>

                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                        <div className="form-floating mb-3 me-3 flex-fill">
                            <input type="email" className="form-control" id="email" placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">E-mail</label>
                        </div>

                        <div className="form-floating mb-3 flex-fill">
                            <input type="tel" maxLength="15" className="form-control" id="telefone" placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">Telefone</label>
                        </div>
                    </div>


                    
                    <button className="btn btn-bscpac btn-lg btn-primary btn-padrao text-uppercase mb-2">Criar Atendimento</button>
                </form>
            </div>
        </div>
    )
}