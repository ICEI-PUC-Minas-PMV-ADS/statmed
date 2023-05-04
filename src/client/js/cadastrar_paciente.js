//Cadastro de Paciente
function CadastrarPaciente(nome, nomeSocial, email, cpf, telefone, dataNasc, cep, rua, numero, bairro, cidade, uf) {
    const data = {
        nome: nome,
        nomeSocial: nomeSocial,
        email: email,
        cpf: cpf,
        telefone: telefone,
        dataNasc: dataNasc,
        cep: cep,
        rua: rua,
        numero: numero,
        bairro: bairro,
        cidade: cidade,
        uf: uf
    }

    fetch("http://localhost:5145/api/Paciente/Cadastrar", {
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then((response) => response.json())
    .then((result) => {
        Swal.fire({
            icon: 'success',
            title: 'Paciente Cadastrado',
            showConfirmButton: false,
            timer: 1500
          })
    })
    .catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'Falha de comunicação com servidor, Contate seu Administrator.'
          })
    })
}

function salvar() {
    let nome = document.getElementById("nome").value;
    let nomeSocial = document.getElementById("nomeSocial").value;
    let email = document.getElementById("email").value;
    let cpf = document.getElementById("cpf").value;
    let telefone = document.getElementById("telefone").value;
    let dataNasc = document.getElementById("dataNasc").value;
    let cep = document.getElementById("cep").value;
    let rua = document.getElementById("rua").value;
    let numero = document.getElementById("numero").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;
    let uf = document.getElementById("uf").value;

    let erros = []
    // Validações de erro do formulário
    if (nome.indexOf(" ") === -1) {
        erros.push("Preencha o nome completo!")
    }
    if (cpf == "" || cpf.length < 14) {
        erros.push("Preencha o CPF ou CPF inválido!")
    }

    // Verifica se a lista de erros ta vazia e retorna a mensagem de sucesso depois da call de cadastrar
    if (erros.length === 0) {
        CadastrarPaciente(nome, nomeSocial, email, cpf, telefone, dataNasc, cep, rua, numero, bairro, cidade, uf)
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'Falha de comunicação. Contate seu Administrator.'
          })
    }

    return false
}
// Normalizar o input de CPF
function handleCpf(i) {

    var v = i.value;
  
    if (isNaN(v[v.length - 1])) { // impede entrar outro caractere que não seja número
      i.value = v.substring(0, v.length - 1);
      return;
    }
  
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
  
  }
  
  // Normalizar o input de Telefone
  const handleTel = (event) => {
    let input = event.target
    input.value = telMask(input.value)
  }
  
  const telMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
  }
  
  // Normalizar o input do CEP
  const handleCep = (event) => {
    let input = event.target
    input.value = cepMask(input.value)
  }
  
  const cepMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{5})(\d)/,'$1-$2')
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
        if(req.status === 200) {
          let endereco = JSON.parse(req.response);
          document.getElementById("rua").value = endereco.street;
          document.getElementById("bairro").value = endereco.neighborhood;
          document.getElementById("cidade").value = endereco.city;
          document.getElementById("uf").value = endereco.state;
        }
        else if(req.status === 404) {
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
  // Chama a função ao sair do campo de CEP
  window.onload = function() {
    let Fcep = document.getElementById("cep");
    Fcep.addEventListener("blur", buscaCep);
  }