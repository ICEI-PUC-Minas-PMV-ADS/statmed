import React from 'react'

export default function Estatisticas() {

    return (
        <div className="container-fluid ms-3">
            <h3 className="text-uppercase fw-normal  mt-3 mb-3">Estatísticas</h3>
            <div className="w-100 d-inline-flex justify-content-center align-items-center mb-3">
                <div className="me-3 w-100">
                <div className="w-50 d-inline-flex flex-row justify-content-start align-items-start">
                    <div className="form-floating  mb-3 me-3 flex-fill">
                        <select className="form-select" id="estatisticaselec" aria-label="Floating label select example" required>
                            <option value="3dias">3 dias</option>
                            <option value="5dias">5 dias</option>
                            <option value="7dias">7 dias</option>
                            <option value="2semana">2 semanas</option>
                            <option value="1mes">1 mês</option>
                        </select>
                        <label htmlFor="floatingSelect">Mostrar últimos</label>
                    </div>
                    <div className="form-floating mb-3">
                        <button className="btn btn-bscpac btn-lg btn-primary btn-padrao h-100 text-uppercase">Gerar</button>
                    </div>

                </div>
                </div>
            </div>
        </div>
    )
}
