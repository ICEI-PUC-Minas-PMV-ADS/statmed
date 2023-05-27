import React, { Component } from 'react'
import CloseIcon from '@mui/icons-material/Close';

export default class ModalCid extends Component {
    render() {
        return (
            <div className="container-fluid ">
                <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                    <div className="d-flex justify-content-start flex-fill">
                        <h3 className="text-uppercase fw-normal mt-2">Anamnese</h3>

                    </div>
                    <div className="d-flex justify-content-end flex-fill">
                        <button onClick={this.props.closeModal} className="btn btn-padrao text-uppercase"><CloseIcon /></button>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}
