import React from 'react'

export default function RelatorioAdm() {
    return (
        <div className="container-fluid ms-3 me-3">
            <h3 className="text-uppercase fw-normal mt-3 mb-3">Relatórios Administrativos</h3>
            <div className="me-3">
            <h6 className="text-uppercase fw-normal mt-3 mb-3">Atendimentos por período</h6>
                <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                <div className="form-floating mb-3 me-3 flex-fill">
                    
                        <input type="date" className="form-control w-100" id="cid10" autoComplete='off' placeholder="Example input" />
                        <label htmlFor="floatingInput">Data Inicial</label>
                    </div>
                    <div className="form-floating mb-3 me-3 flex-fill">
                        <input type="date" className="form-control w-100" id="cid10" autoComplete='off' placeholder="Example input" />
                        <label htmlFor="floatingInput">Data Final</label>
                    </div>
                    <div className="form-floating mb-3 me-3 flex-fill">
                        <select className="form-select" id="epidemia" aria-label="Floating label select example" required>
                            <option value="Masculino">Não</option>
                            <option value="Feminino">Sim</option>
                        </select>
                        <label htmlFor="floatingSelect">Epidemia?</label>
                    </div>
                    <div className="form-floating mb-3">
                        <button className="btn btn-bscpac btn-lg btn-primary btn-padrao h-100 text-uppercase">Gerar</button>
                    </div>

                </div>
            </div>
            <div className="me-3">
            <h6 className="text-uppercase fw-normal mt-3 mb-3">Média de atendimentos por período</h6>
                <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                <div className="form-floating mb-3 me-3 flex-fill">
                    
                        <input type="date" className="form-control w-100" id="cid10" autoComplete='off' placeholder="Example input" />
                        <label htmlFor="floatingInput">Data Inicial</label>
                    </div>
                    <div className="form-floating mb-3 me-3 flex-fill">
                        <input type="date" className="form-control w-100" id="cid10" autoComplete='off' placeholder="Example input" />
                        <label htmlFor="floatingInput">Data Final</label>
                    </div>
                    <div className="form-floating mb-3 me-3 flex-fill">
                        <select className="form-select" id="epidemia" aria-label="Floating label select example" required>
                            <option value="nao">Não</option>
                            <option value="sim">Sim</option>
                        </select>
                        <label htmlFor="floatingSelect">Epidemia?</label>
                    </div>
                    <div className="form-floating mb-3">
                        <button className="btn btn-bscpac btn-lg btn-primary btn-padrao h-100 text-uppercase">Gerar</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
