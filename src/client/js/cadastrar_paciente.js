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