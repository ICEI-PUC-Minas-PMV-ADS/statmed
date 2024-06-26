import { React, useState } from 'react';
import './Login.css';
import { ReactComponent as StatmedLogo } from '../../Assets/img/svg/logo.svg';
import LoginForm from '../../Components/LoginForm';
import AjudaForm from '../../Components/AjudaForm';
import { Link } from 'react-router-dom';


// Função de login
export default function LoginPage() {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [bgLogin, bgAjuda] = useState(false);


  const handleButtonClick = () => {
    setShowLoginForm(false);
    bgAjuda(!bgLogin);
  };

  const handleBackButtonClick = () => {
    setShowLoginForm(true);
    bgAjuda(!bgAjuda);
  };

  return (
    <>
      <div className="login">
        <div className="container-fluid ps-md-0">
          <div className="row g-0">
            <div 
             className={bgLogin ? 'd-none d-md-flex col-md-4 col-lg-6 imagem-bg-esquerda-ajuda': 'd-none d-md-flex col-md-4 col-lg-6 imagem-bg-esquerda'} 
            ></div>
            <div className="col-md-8 col-lg-6">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto">
                      <StatmedLogo className="logo-login" />
                      {showLoginForm ? (
                        <LoginForm />
                      ) : (
                        <AjudaForm onBackButtonClick={handleBackButtonClick} />
                      )}
                      {showLoginForm ? (
                        <div className="text-center">
                          <Link className="small ajuda text-uppercase" to="#Acesso" component={AjudaForm} onClick={handleButtonClick} >Ajuda</Link>
                        </div>
                      ) : (
                        <div className="text-center">
                          <Link className="small ajuda text-uppercase" to="#Ajuda" component={AjudaForm} onClick={handleBackButtonClick}>Voltar</Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}