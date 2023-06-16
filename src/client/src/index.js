import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { AuthProvider } from './Context/AuthProvider';
import { ProSidebarProvider } from "react-pro-sidebar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <div>
          <ProSidebarProvider>
            <App />
          </ProSidebarProvider>
        </div>
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>
);