import React, { useState, useEffect } from 'react'
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";
import axios from 'axios';

export default function HistoricoHospitalar() {
    const [data, setData] = useState([]);
    const [filters, setFilters] = useState({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
  
    useEffect(() => {
      (async () => {
        const result = await axios(process.env.REACT_APP_API_CONATD);
        setData(result.data);
      })();
    }, []);


    return (
        <div className="container-fluid ms-3">
        <h3 className="text-uppercase fw-normal mt-3 mb-3">Histórico Hospitalar</h3>
        <div className="form-floating me-3 mt-3 w-100">
                        <input onInput={(e) => 
                        setFilters({
                            global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS },
                        })} 
                        type="text" className="form-control w-100" id="cid10" autoComplete='off' placeholder="Example input" />
                        <label htmlFor="floatingInput">CID ou Descrição      </label>
                    </div>
        <div className="">
        <DataTable 
                        value={data} 
                        size={'small'} 
                        stripedRows 
                        filters={filters} 
                        paginator
                        rows={5}
                        >
                            <Column field="pacienteIdSame" header="SAME" sortable/>
                            <Column field="idAtendimento" header="Atendimento" sortable/>
                            <Column field="paciente.nome" header="Nome" sortable/>
                            <Column field="paciente.cpf" header="CPF" sortable/>
                            <Column field="data" header="data" sortable/>
                            <Column field="descr" header="Descrição" sortable/>

                        </DataTable>
        </div>
    </div>
    )
  }

