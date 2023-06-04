import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";
import axios from 'axios';



export default function ModalCid(props) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  useEffect(() => {
    (async () => {
      const result = await axios(process.env.REACT_APP_API_PEGACID);
      setData(result.data);
    })();
  }, []);

    return (
        <div className="container-fluid p-0 fundo-cid">
            <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                <div className="d-flex justify-content-end flex-fill">
                    <h3 className="text-uppercase fw-normal mt-2">Busca CID</h3>

                </div>
                <div className="d-flex justify-content-end flex-fill">
                    <button onClick={props.closeModal} className="btn btn-padrao mb-0 text-uppercase"><CloseIcon /></button>
                </div>
            </div>
            <hr className="p-0 mt-3 mb-2" />
            <div>
                <div className="container-fluid">
                    <div className="form-floating me-3 mt-3 w-100">
                        <input onInput={(e) => 
                        setFilters({
                            global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS },
                        })} 
                        type="text" className="form-control w-100" id="cid10" autoComplete='off' placeholder="Example input" />
                        <label htmlFor="floatingInput">CID ou Descrição      <ManageSearchRoundedIcon /></label>
                    </div>
                    <div className="form-floating me-3 mt-3 mb-3 w-100">
                        <div>

                        <DataTable 
                        value={data} 
                        size={'small'} 
                        stripedRows 
                        filters={filters} 
                        paginator
                        rows={5}
                        >
                            <Column field="idCid" header="CID" sortable/>
                            <Column field="descr" header="Descrição" sortable/>

                        </DataTable>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
