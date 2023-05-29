import Axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';


export default function AttPaciente() {
    useEffect(() => {
        document.title = 'Statmed - Atualização de Paciente';
    }, []);

    // Formata o telefone
    const handleTel = (event) => {
        let input = event.target
        input.value = telMask(input.value)
    }
    function telMask(value) {
        if (!value) return ""
        value = value.replace(/\D/g, '')
        value = value.replace(/(\d{2})(\d)/, "($1) $2")
        value = value.replace(/(\d)(\d{4})$/, "$1-$2")
        return value
    }
    // Formata o CPF
    const handleCpf = (event) => {
        let input = event.target
        input.value = formataCpf(input.value)
    }
    function formataCpf(value) {
        return value.replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
    }
    // Valida o CPF
    function verificarCPF(cpf) {
        if (typeof cpf !== 'string') return false
        cpf = cpf.replace(/[^\d]+/g, '')
        if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false
        cpf = cpf.split('').map(el => +el)
        const rest = (count) => (cpf.slice(0, count - 12)
            .reduce((soma, el, index) => (soma + el * (count - index)), 0) * 10) % 11 % 10
        return rest(10) === cpf[9] && rest(11) === cpf[10]
    }

    function validaCPF() {
        let cpf = document.getElementById('cpf').value;

        if (!verificarCPF(cpf)) {
            Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'CPF Inválido'
            })
        }
    }
    // Formata o CEP
    const handleCep = (event) => {
        let input = event.target
        input.value = cepMask(input.value)
    }
    function cepMask(value) {
        if (!value) return ""
        value = value.replace(/\D/g, '')
        value = value.replace(/(\d{5})(\d)/, '$1-$2')
        return value
    }
    // Retornar endereço ao digitar CEP
    function buscaCep() {
        let cep = document.getElementById('cep').value;
        if (cep !== "") {
            let url = "https://brasilapi.com.br/api/cep/v1/" + cep;

            let req = new XMLHttpRequest();
            req.open("Get", url);
            req.send();

            req.onload = function () {
                if (req.status === 200) {
                    let endereco = JSON.parse(req.response);
                    document.getElementById("rua").value = endereco.street;
                    document.getElementById("bairro").value = endereco.neighborhood;
                    document.getElementById("cidade").value = endereco.city;
                    document.getElementById("uf").value = endereco.state;
                }
                else if (req.status === 404) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro',
                        text: 'CEP Inexistente!'
                    })
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro',
                        text: 'Aconteceu algo errado... Contate seu administrador'
                    })
                }
            }
        }
    }

    // Retornar os dados do paciente ápos busca 
    function buscaSame() {
        let idSame = document.getElementById('idSame').value;
        if (idSame !== "") {
            let url = process.env.REACT_APP_API_PEGAIDSAME + "=" + idSame;

            let req = new XMLHttpRequest();
            req.open("Get", url);
            req.send();

            req.onload = function () {
                if (req.status === 200) {
                    let puxapaciente = JSON.parse(req.response);
                    document.getElementById('nome').value = puxapaciente.nome;
                    document.getElementById('nomeSocial').value = puxapaciente.nomeSocial;
                    document.getElementById('genero').value = puxapaciente.genero;
                    document.getElementById('dataNasc').value = puxapaciente.dataNasc;
                    document.getElementById('cpf').value = puxapaciente.cpf;
                    document.getElementById('email').value = puxapaciente.email;
                    document.getElementById('telefone').value = puxapaciente.telefone;
                    document.getElementById('cep').value = puxapaciente.cep;
                    document.getElementById('rua').value = puxapaciente.rua;
                    document.getElementById('numero').value = puxapaciente.numero;
                    document.getElementById('complemento').value = puxapaciente.complemento;
                    document.getElementById('bairro').value = puxapaciente.bairro;
                    document.getElementById('cidade').value = puxapaciente.cidade;
                    document.getElementById('uf').value = puxapaciente.uf;
                    document.getElementById('prateleira').value = puxapaciente.prateleira;
                }
                else if (req.status === 404) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro',
                        text: 'Paciente não encontrado, confira o ID!'
                    })
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro',
                        text: 'Erro de comunicação com servidor... Contate seu administrador'
                    })
                }
            }
        }
    }



    return (
        <div className="container-fluid ms-3">
            <h3 className="text-uppercase fw-normal  mt-3 mb-3">Atualizar Cadastro</h3>
            <div className="">
                <form>
                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                        <div className="form-floating mb-3 me-3 w-25">
                            <input autoFocus onBlur={buscaSame} type="number" className="form-control w-100" id="idSame" autoComplete='off' placeholder="Example input" />
                            <label htmlFor="floatingInput">ID Same       <ManageSearchRoundedIcon /></label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-25">
                            <input type="text" className="form-control w-100" id="prateleira" autoComplete='off' placeholder="Example input" />
                            <label htmlFor="floatingInput">Prateleira</label>
                        </div>
                    </div>
                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                        <div className="form-floating mb-3 me-3 w-50 flex-fill">
                            <input type="text" className="form-control w-100" id="nome" autoComplete='off' placeholder="Example input" required />
                            <label htmlFor="floatingInput">Nome</label>
                        </div>
                        <div className="form-floating mb-3 w-50 flex-fill">
                            <input type="text" className="form-control w-100" id="nomeSocial" autoComplete='off' placeholder="Example input" />
                            <label htmlFor="floatingInput">Nome Social</label>
                        </div>
                    </div>

                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                        <div className="form-floating mb-3 me-3 flex-fill">
                            <select className="form-select" id="genero" aria-label="Floating label select example" required>
                                <option>Selecione</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Outro">Outro</option>
                            </select>
                            <label htmlFor="floatingSelect">Gênero</label>
                        </div>
                        <div className="form-floating mb-3 me-3 flex-fill">
                            <input type="date" className="form-control" id="dataNasc" placeholder="Example input" required />
                            <label htmlFor="floatingInput">Data de Nascimento</label>
                        </div>
                        <div className="form-floating mb-3 flex-fill">
                            <input onKeyUpCapture={handleCpf} onBlur={validaCPF} maxLength="14" type="text" className="form-control" id="cpf" placeholder="Example input" required />
                            <label htmlFor="floatingInput">CPF</label>
                        </div>
                    </div>

                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                        <div className="form-floating mb-3 me-3 flex-fill">
                            <input type="email" className="form-control" id="email" placeholder="Example input" />
                            <label htmlFor="floatingInput">E-mail</label>
                        </div>

                        <div className="form-floating mb-3 flex-fill">
                            <input type="tel" maxLength="15" onKeyUp={handleTel} className="form-control" id="telefone" placeholder="Example input" required />
                            <label htmlFor="floatingInput">Telefone</label>
                        </div>
                    </div>

                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                        <div className="form-floating mb-3 me-3 w-15">
                            <input onKeyUp={handleCep} onBlur={buscaCep} type="text" maxLength="9" className="form-control" id="cep" placeholder="Example input" required />
                            <label htmlFor="floatingInput">CEP</label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-75">
                            <input readOnly type="text" className="form-control" id="rua" placeholder="Example input" />
                            <label htmlFor="floatingInput">Rua</label>
                        </div>
                        <div className="form-floating mb-3 flex-fill">
                            <input type="number" className="form-control" id="numero" placeholder="Example input" required />
                            <label htmlFor="floatingInput">Número</label>
                        </div>
                    </div>


                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                        <div className="form-floating mb-3 me-3 w-20">
                            <input type="text" className="form-control" id="complemento" placeholder="Example input" />
                            <label htmlFor="floatingInput">Complemento </label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-20">
                            <input type="text" className="form-control" id="bairro" placeholder="Example input" />
                            <label htmlFor="floatingInput">Bairro</label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-40">
                            <input type="text" className="form-control" id="cidade" placeholder="Example input" />
                            <label htmlFor="floatingInput">Cidade</label>
                        </div>
                        <div className="form-floating mb-3 w-20">
                            <input type="text" className="form-control" id="uf" placeholder="Example input" />
                            <label htmlFor="floatingInput">Estado</label>
                        </div>
                    </div>
                    <button className="btn btn-bscpac btn-lg btn-primary btn-padrao text-uppercase mb-2">Atualizar </button>
                </form>
            </div>
        </div>
    )
}