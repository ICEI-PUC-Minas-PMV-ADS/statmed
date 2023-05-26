import Axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';


export default function AttPaciente() {
    useEffect(() => {
        document.title = 'Statmed - Atualizar Cadastro de Paciente';
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

    // Foca no Input de Nome
    const nomeRef = useRef();

    const url = "http://localhost:5145/api/Paciente/Cadastrar"

    const [data, setData] = useState({
        nome: "",
        nomeSocial: "",
        genero: "",
        dataNasc: "",
        cpf: "",
        email: "",
        telefone: "",
        cep: "",
        rua: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        uf: ""
    })


    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            nome: data.nome,
            nomeSocial: data.nomeSocial,
            genero: data.genero,
            dataNasc: data.dataNasc,
            cpf: data.cpf,
            email: data.email,
            telefone: data.telefone,
            cep: data.cep,
            rua: data.rua,
            numero: data.numero,
            complemento: data.complemento,
            bairro: data.bairro,
            cidade: data.cidade,
            uf: data.uf
        }).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Paciente Cadastrado',
                showConfirmButton: false,
                timer: 2500
              });
        }).catch(() => {
            Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Falha de comunicação com servidor, Contate seu Administrator.'
              })
        })
    }

    function handle(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
    }

    function buscaSame() {
        let idSame = document.getElementById('idSame').value;
        if (idSame !== "") {
            let url = "http://localhost:5145/api/Paciente/BuscaIdSame?IdSame=" + idSame;

            let req = new XMLHttpRequest();
            req.open("Get", url);
            req.send();

            req.onload = function () {
                if (req.status === 200) {
                    let puxapaciente = JSON.parse(req.response);
                    document.getElementById('nome').value = puxapaciente.nome;
                    document.getElementById("rua").value = puxapaciente.rua;
                }
                else if (req.status === 404) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro',
                        text: 'Paciente não encontrado!'
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

    return (
        <div className="container-fluid">
            <h3 className="text-uppercase fw-normal  mt-3 mb-3">Atualizar Cadastro de Paciente</h3>
            <div className="">
                <form onSubmit={(e) => submit(e)}>
                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                    <div className="form-floating mb-3 me-3 w-25">
                            <input onBlur={buscaSame} type="number" className="form-control w-100" id="idSame" autoComplete='off' placeholder="Example input" />
                            <label htmlFor="floatingInput">ID Same       <ManageSearchRoundedIcon/></label>
                        </div>
                    </div>
                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                        <div className="form-floating mb-3 me-3 w-50 flex-fill">
                            <input onChange={(e) => handle(e)} value={data.nome} type="text" className="form-control w-100" id="nome" autoComplete='off' ref={nomeRef} placeholder="Example input" required />
                            <label htmlFor="floatingInput">Nome</label>
                        </div>
                        <div className="form-floating mb-3 w-50 flex-fill">
                            <input onChange={(e) => handle(e)} value={data.nomeSocial} type="text" className="form-control w-100" id="nomeSocial" placeholder="Example input" />
                            <label htmlFor="floatingInput">Nome Social</label>
                        </div>
                    </div>

                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                        <div className="form-floating mb-3 me-3 flex-fill">
                            <select onChange={(e) => handle(e)} value={data.genero} className="form-select" id="genero" aria-label="Floating label select example" required>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Outro">Outro</option>
                            </select>
                            <label htmlFor="floatingSelect">Gênero</label>
                        </div>
                        <div className="form-floating mb-3 me-3 flex-fill">
                            <input onChange={(e) => handle(e)} value={data.dataNasc} type="date" className="form-control" id="dataNasc" placeholder="Example input" required/>
                            <label htmlFor="floatingInput">Data de Nascimento</label>
                        </div>
                        <div className="form-floating mb-3 flex-fill">
                            <input onChange={(e) => handle(e)} value={data.cpf} onKeyUpCapture={handleCpf} onBlur={validaCPF} maxLength="14" type="text" className="form-control" id="cpf" placeholder="Example input" required/>
                            <label htmlFor="floatingInput">CPF</label>
                        </div>
                    </div>

                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                        <div className="form-floating mb-3 me-3 flex-fill">
                            <input onChange={(e) => handle(e)} value={data.email} type="email" className="form-control" id="email" placeholder="Example input" />
                            <label htmlFor="floatingInput">E-mail</label>
                        </div>

                        <div className="form-floating mb-3 flex-fill">
                            <input onChange={(e) => handle(e)} value={data.telefone} type="tel" maxLength="15" onKeyUp={handleTel} className="form-control" id="telefone" placeholder="Example input" required/>
                            <label htmlFor="floatingInput">Telefone</label>
                        </div>
                    </div>

                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                        <div className="form-floating mb-3 me-3 w-15">
                            <input onChange={(e) => handle(e)} value={data.cep} onKeyUp={handleCep} onBlur={buscaCep} type="text" maxLength="9" className="form-control" id="cep" placeholder="Example input" required/>
                            <label htmlFor="floatingInput">CEP</label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-75">
                            <input onChange={(e) => handle(e)} defaultValue={data.rua} type="text" className="form-control" id="rua" placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">Rua</label>
                        </div>
                        <div className="form-floating mb-3 flex-fill">
                            <input onChange={(e) => handle(e)} value={data.numero} type="number" className="form-control" id="numero" placeholder="Example input" required/>
                            <label htmlFor="floatingInput">Número</label>
                        </div>
                    </div>

                    <div className="w-100 d-inline-flex flex-row justify-content-start align-items-start">
                        <div className="form-floating mb-3 me-3 w-20">
                            <input onChange={(e) => handle(e)} value={data.complemento} type="text" className="form-control" id="complemento" placeholder="Example input" />
                            <label htmlFor="floatingInput">Complemento </label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-20">
                            <input onChange={(e) => handle(e)} defaultValue={data.bairro} type="text" className="form-control" id="bairro" placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">Bairro</label>
                        </div>
                        <div className="form-floating mb-3 me-3 w-40">
                            <input onChange={(e) => handle(e)} defaultValue={data.cidade} type="text" className="form-control" id="cidade" placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">Cidade</label>
                        </div>
                        <div className="form-floating mb-3 w-20">
                            <input onChange={(e) => handle(e)} defaultValue={data.uf} type="text" className="form-control" id="uf" placeholder="Example input" disabled />
                            <label htmlFor="floatingInput">Estado  </label>
                        </div>
                    </div>
                    <button className="btn btn-bscpac btn-lg btn-primary btn-padrao text-uppercase mb-2">Cadastrar </button>
                </form>
            </div>
        </div>
    )
}