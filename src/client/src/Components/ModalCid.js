import React, { useState, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
import { ModalCidTable } from './ModalCidTable';
import axios from 'axios';

export default function ModalCid(props){
    const [busca, setBusca] = useState('')
    const [data, setData] = useState([])
    const [paginaAtual, setPaginaAtual] = useState(1)
    const itensPagina = 5;
    const ultimaIndex = 
    useEffect(() => {
        const pegaCid = async () => {
            const res = await axios.get(process.env.REACT_APP_API_PEGACID);
            setData(res.data);
        };
        pegaCid()
    }, [busca]);
    return (
            <div className="container-fluid p-0">
                <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                    <div className="d-flex justify-content-end flex-fill">
                        <h3 className="text-uppercase fw-normal mt-2">Busca CID</h3>

                    </div>
                    <div className="d-flex justify-content-end flex-fill">
                        <button onClick={props.closeModal} className="btn btn-padrao mb-0 text-uppercase"><CloseIcon /></button>
                    </div>
                </div>
                <hr className="p-0 mt-3 mb-2"/>
                <div>
                    <div className="container-fluid">
                        <div className="form-floating me-3 mt-3 w-100">
                            <input onChange={e => setBusca(e.target.value) }type="text" className="form-control w-100" id="cid10" autoComplete='off' placeholder="Example input" />
                            <label htmlFor="floatingInput">CID ou Descrição      <ManageSearchRoundedIcon/></label>
                        </div>
                        <div className="form-floating me-3 mt-3 w-100">
                            <div>
                                <ModalCidTable data={data}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
