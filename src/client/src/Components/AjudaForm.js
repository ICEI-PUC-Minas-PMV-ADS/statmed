import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


function AjudaForm() {
  useEffect(() => {
    document.title = 'Statmed - Ajuda';
  }, []);

  const nomeRef = useRef();
  const form = useRef();


  useEffect(() => {
    nomeRef.current.focus();
}, [])


  const enviarEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY
    )
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Mensagem enviada, aguarde retorno!',
          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <>
      <h3 className="login-heading mb-4">Precisa de ajuda?</h3>
      <form ref={form} onSubmit={enviarEmail}>
        <div className="form-floating mb-3">
          <input type="name" className="form-control" id="nome" name="nome" ref={nomeRef} autoComplete='off' placeholder="Example input" required />
          <label htmlFor="floatingInput">Nome</label>
        </div>
        <div className="form-floating mb-3">
          <input type="name" className="form-control" id="registroFunc" name="registroFunc" autoComplete='off' placeholder="Example input" required />
          <label htmlFor="floatingInput">Seu registro de funcionário</label>
        </div>
        <div className="form-floating mb-3">
          <input type="name" className="form-control" id="ramal" name="ramal" autoComplete='off' placeholder="Example input" required />
          <label htmlFor="floatingInput">Ramal de retorno</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="email" name="email" autoComplete='off' placeholder="Example input" required />
          <label htmlFor="floatingInput">Seu e-mail</label>
        </div>
        <div className="form-floating mb-3">
          <select className="form-select" name="ajudatipo" required>
            <option value="1">Minha senha</option>
            <option value="2">Meu usuário</option>
            <option value="3">Login bloqueado</option>
          </select>
          <label htmlFor="floatingInput">Preciso de ajuda com</label>
        </div>
        <div className="form-floating mb-3">
          <textarea className="form-control" name="mensagem" rows="3"></textarea>
          <label htmlFor="mensagem">Mensagem adicional</label>
        </div>
        <div className="d-grid">
          <button className="btn btn-lg btn-primary btn-padrao text-uppercase mb-2"  >Enviar</button>
        </div>
      </form>
    </>
  );
}

export default AjudaForm;
