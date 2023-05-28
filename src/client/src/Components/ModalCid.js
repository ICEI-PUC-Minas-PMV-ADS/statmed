import React, { Component } from 'react'
import CloseIcon from '@mui/icons-material/Close';

export default class ModalCid extends Component {
    render() {
        return (
            <div className="container-fluid p-0">
                <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                    <div className="d-flex justify-content-end flex-fill">
                        <h3 className="text-uppercase fw-normal mt-2">Busca CID</h3>

                    </div>
                    <div className="d-flex justify-content-end flex-fill">
                        <button onClick={this.props.closeModal} className="btn btn-padrao mb-0 text-uppercase"><CloseIcon /></button>
                    </div>
                </div>
                <hr className="p-0 mt-2 mb-2"/>
            </div>
        )
    }
}
