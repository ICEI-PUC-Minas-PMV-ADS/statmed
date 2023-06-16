import React from 'react';
import { Outlet } from "react-router-dom";
import Navegacao from './Components/Navegacao';


export default function Layout() {


  return (
    <div className="main-conteudo">
      <Navegacao />
      <Outlet />
    </div>
  );
}