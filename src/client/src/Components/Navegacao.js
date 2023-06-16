import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { ReactComponent as HospitalLogo } from '../Assets/img/svg/hospital_exemplo.svg';
import { Divider, IconButton } from "@mui/material";
import Modal from "react-modal";
import ModalCid from './ModalCid';

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
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AddToQueueRoundedIcon from '@mui/icons-material/AddToQueueRounded';
import MedicalServicesRoundedIcon from '@mui/icons-material/MedicalServicesRounded';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';

Modal.setAppElement("#root")

export default function Navegacao() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Sidebar
      collapsed={collapsed}
      transitionDuration={500}
      collapsedWidth="75px"
      backgroundColor="var(--principal)"
      width="350px"
      rootStyles={{
        color: 'var(--darkmode2)',
        borderColor: 'var(--principal-hover)',
        background: 'var(--principal)'
      }}>
      <IconButton className={collapsed ? 'bt-main-hide' : 'bt-main'} onClick={() => setCollapsed(!collapsed)} aria-label="fingerprint">
        <MenuRoundedIcon className="seta-menu" fontSize="large" />
      </IconButton>
      <Menu menuItemStyles={{
        button: {
          backgroundColor: 'var(--principal)',
          '&:hover': {
            backgroundColor: 'var(--principal-hover)',
            color: 'var(--light-mode2)'
          },

        },
      }}>
        <HospitalLogo className={collapsed ? 'sumir' : 'mb-3 ms-3 me-3 mt-3'} />
        <Divider />
        <MenuItem icon={<SpaceDashboardRoundedIcon />} component={<Link to="/inicio" />}>Início</MenuItem>
        <Divider />
        <SubMenu icon={<SupervisedUserCircleRoundedIcon />} label="Paciente">
          <MenuItem icon={<PersonAddRoundedIcon />} component={<Link to="/cad" />} >Novo Cadastro </MenuItem>
          <MenuItem icon={<ManageAccountsRoundedIcon />} component={<Link to="/atpac" />} >Atualizar Cadastro</MenuItem>
          <MenuItem icon={<InventoryRoundedIcon />} component={<Link to="/historicoPac" />} >Histórico Hospitalar</MenuItem>
        </SubMenu>
        <Divider />
        <SubMenu icon={<PortraitRoundedIcon />} label="Atendimento">
          <MenuItem icon={<QueueRoundedIcon />} component={<Link to="/atend" />} >Nova Consulta</MenuItem>
          <MenuItem icon={<MedicalServicesRoundedIcon />} component={<Link to="/anamnese" />} >Registrar Anamnese</MenuItem>
          <MenuItem icon={<DescriptionRoundedIcon />} component={<Link to="/relatorioMedico" />} >Relatório Médico</MenuItem>
          <MenuItem icon={<SummarizeRoundedIcon />} component={<Link to="/atestado" />}>Atestado</MenuItem>
          <MenuItem icon={<ReceiptRoundedIcon />} component={<Link to="/receita" />}>Receita</MenuItem>
          <MenuItem icon={<SwapHorizontalCircleRoundedIcon />} component={<Link to="/encaminhamento" />}>Encaminhamento</MenuItem>
          <MenuItem icon={<AddToQueueRoundedIcon />} component={<Link to="/consultaAtd" />}>Consultar Atendimento</MenuItem>
        </SubMenu>
        <Divider />
        <SubMenu icon={<TableChartRoundedIcon />} label="Administrativo">
          <MenuItem icon={<AddchartRoundedIcon />} component={<Link to="/relatorioAdm" />}>Relatórios</MenuItem>
          <MenuItem icon={<InsightsRoundedIcon />} component={<Link to="/estatisticas" />}>Estatísticas</MenuItem>
          <MenuItem icon={<Inventory2RoundedIcon />} component={<Link to="/arqsame" />}>Arquivo SAME</MenuItem>
        </SubMenu>
        <Divider />
        <MenuItem icon={<HealthAndSafetyRoundedIcon />} onClick={openModal}>Busca CID</MenuItem>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Busca Cid"
          overlayClassName="modal-overlay"
          className="modal-content">
          <ModalCid closeModal={closeModal} />
        </Modal>
      </Menu>
      <Menu>
        <div></div>
      </Menu>
      <Menu menuItemStyles={{
        button: {
          backgroundColor: 'var(--principal)',
          '&:hover': {
            backgroundColor: 'var(--principal-hover)',
            color: 'var(--light-mode2)'
          },

        },
      }}>
        <Divider />
        <MenuItem icon={<LogoutRoundedIcon />} component={<Link to="/login" />}>Logout</MenuItem>
      </Menu>
    </Sidebar>
  )
}
