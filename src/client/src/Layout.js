import {Link, Outlet} from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { ReactComponent as HospitalLogo } from './Assets/img/svg/hospital_exemplo.svg';
import { Divider } from "@mui/material";

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

export default function Layout(){
    return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar 
      backgroundColor="rgb(0, 201, 117)"
      rootStyles={{
        color: '#23272A',
        borderColor: 'rgb(0, 201, 117)'
        }}>
        <HospitalLogo className="mb-3 ms-3 me-3 mt-3"/>
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
            <MenuItem icon={<PersonAddRoundedIcon/>} component={<Link to="/cad" />} > Novo Cadastro </MenuItem>
            <MenuItem icon={<ManageAccountsRoundedIcon/>} component={<Link to="/atpac"/>} > Atualizar Cadastro</MenuItem>
          </SubMenu>
          <Divider/>
          <SubMenu icon={<PortraitRoundedIcon/>} label="Atendimento">
            <MenuItem icon={<QueueRoundedIcon/>} component={<Link to="/atend" />} >Nova Consulta</MenuItem>
            <MenuItem icon={<DescriptionRoundedIcon/>}>Relatório Médico</MenuItem>
            <MenuItem icon={<SummarizeRoundedIcon/>}>Encaminhamento</MenuItem>
            <MenuItem icon={<SwapHorizontalCircleRoundedIcon/>}>Atestado</MenuItem>
          </SubMenu>
          <Divider/>
          <SubMenu icon={<TableChartRoundedIcon/>} label="Administrativo">
            <MenuItem icon={<AddchartRoundedIcon/>}>Relatórios</MenuItem>
            <MenuItem icon={<InsightsRoundedIcon/>}>Estatísticas</MenuItem>
          </SubMenu>
          <Divider/>
          <MenuItem icon={<HealthAndSafetyRoundedIcon/>}>Busca CID </MenuItem>
          <Divider/>
          <MenuItem icon={<LogoutRoundedIcon/>}>Logout </MenuItem>
        </Menu>
      </Sidebar>
      <Outlet/>
    </div>
    );
}