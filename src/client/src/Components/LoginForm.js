import { React, useRef, useState, useEffect } from 'react';
// import useContext from 'react';
// import AuthContext from '../Context/AuthProvider';
// import axios from '../Api/axios';
import { useNavigate } from 'react-router-dom';

// const LOGIN_URL = '/auth';

function LoginForm() {
    useEffect(() => {
        document.title = 'Statmed - Login';
      }, []);

    // const { setAuth } = useContext(AuthContext);
    const usuaRef = useRef();
    const errRef = useRef();

    const [usuarioValue, setUsuario] = useState('');
    const [senhaValue, setSenha] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        usuaRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [usuarioValue, senhaValue])
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/statmed/inicio');
      };
    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const response = await axios.post(LOGIN_URL,
    //             JSON.stringify({ usuario: usuarioValue, senha: senhaValue }),
    //             {
    //                 headers: { 'Content-Type': 'application/json' },
    //                 withCredentials: true
    //             }
    //         );
    //         const acessToken = response?.data?.accessToken;
    //         const idFunc = response?.data?.roles;
    //         setAuth({ usuario: usuarioValue, senha: senhaValue, idFunc, acessToken });
    //         setUsuario('');
    //         setSenha('');
    //     } catch (err) {
    //         // Mudar depois de configurar o webAPI
    //         if (!err?.response) {
    //             setErrMsg('Erro inesperado, contate seu administrador!');
    //         } else if (err.response?.status === 400) {
    //             setErrMsg('Falta usuário ou senha');
    //         } else if (err.response?.status === 404) {
    //             setErrMsg('Erro inesperado, contate seu administrador!');
    //         } else if (err.response?.status === 401) {
    //             setErrMsg('Usuário bloqueado!');
    //         } else {
    //             setErrMsg('Erro inesperado, contate seu administrador!');
    //         }
    //         errRef.current.focus();
    //     }
    // }
    return (
        <>
            <h3 className="login-heading mb-4">Bem vindo(a)!</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input type="text" className={errMsg ? "form-control  errmsg" : "form-control"} id="usuario" autoComplete='off' ref={usuaRef} onChange={(e) => setUsuario(e.target.value)} value={usuarioValue} placeholder="Example input" required />
                    <label htmlFor="floatingInput">Usuário</label>
                    <span className={errMsg ? "errmsg ajuda text-uppercase" : ""} aria-live="assertive" ref={errRef}>{errMsg}</span>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className={errMsg ? "form-control  errmsg" : "form-control"} id="senha" onChange={(e) => setSenha(e.target.value)} value={senhaValue} placeholder="Example input" required />
                    <label htmlFor="floatingPassword">Senha</label>
                    <span className={errMsg ? "errmsg ajuda text-uppercase" : ""} aria-live="assertive" ref={errRef}>{errMsg}</span>
                </div>

                <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                    <label className="form-check-label" htmlFor="rememberPasswordCheck">
                        Lembrar senha
                    </label>
                </div>

                <div className="d-grid">
                    <button className="btn btn-lg btn-primary btn-padrao text-uppercase mb-2">Entrar</button>
                </div>
            </form>
        </>
    );
}

export default LoginForm;






