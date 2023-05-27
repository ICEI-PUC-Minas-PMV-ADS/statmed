import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { ReactComponent as HospitalLogo } from './Assets/img/svg/hospital_exemplo.svg';
import { Divider } from "@mui/material";
import Modal from "react-modal";

// Import dos icones do menu
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import HealthAndSafetyRoundedIcon from '@mui/icons-material/HealthAndSafetyRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import TableChartRoundedIcon from '@mui/icons-material/TableChartRounded';
import AddchartRoundedIcon from '@mui/icons-material/AddchartRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import PortraitRoundedIcon from '@mui/icons-material/PortraitRounded';
import QueueRoundedIcon from '@mui/icons-material/QueueRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import SummarizeRoundedIcon from '@mui/icons-material/SummarizeRounded';
import SwapHorizontalCircleRoundedIcon from '@mui/icons-material/SwapHorizontalCircleRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import ModalCid from './Components/ModalCid';

Modal.setAppElement("#root")
export default function Layout(){

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
    
    function closeModal() {
      setIsOpen(false);
    }

    return (
    <div className="main-conteudo">
      <Sidebar 
      backgroundColor="rgb(0, 201, 117)"
      width="350px"
        rootStyles={{
        color: '#23272A',
        borderColor: 'rgb(0, 201, 117)',
        background: 'rgb(0, 201, 117)'
        }}>
        <Link to="/inicio"><HospitalLogo className="mb-3 ms-3 me-3 mt-3"/></Link>
        <Divider/>
        <Menu menuItemStyles={{
            button: {
                backgroundColor: 'rgb(0, 201, 117)',
                '&:hover': {
                    backgroundColor: 'rgb(0, 222, 129)',
                    color: '#fff'
                },
                
            },
        }}>
          <SubMenu icon={<SupervisedUserCircleRoundedIcon/>}  label="Paciente">
            <MenuItem icon={<PersonAddRoundedIcon/>} component={<Link to="/cad" />} >Novo Cadastro </MenuItem>
            <MenuItem icon={<ManageAccountsRoundedIcon/>} component={<Link to="/atpac"/>} >Atualizar Cadastro</MenuItem>
            <MenuItem icon={<InventoryRoundedIcon/>} component={<Link to="/"/>} >Histórico Hospitalar</MenuItem>
          </SubMenu>
          <Divider/>
          <SubMenu icon={<PortraitRoundedIcon/>} label="Atendimento">
            <MenuItem icon={<QueueRoundedIcon/>} component={<Link to="/atend" />} >Nova Consulta</MenuItem>
            <MenuItem icon={<QueueRoundedIcon/>} component={<Link to="/anamnese" />} >Registrar Anamnese</MenuItem>
            <MenuItem icon={<DescriptionRoundedIcon/>}>Relatório Médico</MenuItem>
            <MenuItem icon={<SwapHorizontalCircleRoundedIcon/>}>Encaminhamento</MenuItem>
            <MenuItem icon={<SummarizeRoundedIcon/>}>Atestado</MenuItem>
          </SubMenu>
          <Divider/>
          <SubMenu icon={<TableChartRoundedIcon/>} label="Administrativo">
            <MenuItem icon={<AddchartRoundedIcon/>}>Relatórios</MenuItem>
            <MenuItem icon={<InsightsRoundedIcon/>}>Estatísticas</MenuItem>
            <MenuItem icon={<Inventory2RoundedIcon/>}>Arquivo SAME</MenuItem>
          </SubMenu>
          <Divider/>
          <MenuItem icon={<HealthAndSafetyRoundedIcon/>} onClick={openModal}>Busca CID</MenuItem>
          <Modal 
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content">
              <ModalCid closeModal={closeModal}/>
            </Modal>
          <Divider/>
          <MenuItem icon={<LogoutRoundedIcon/>}>Logout</MenuItem>
        </Menu>
      </Sidebar>
      <Outlet/>
    </div>
    );
}