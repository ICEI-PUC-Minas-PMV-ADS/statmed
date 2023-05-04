function arquivoPacientes() {
    fetch("http://localhost:5145/api/Paciente/Consultar", {
        method: "GET",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => response.json())
    .then((result) => {
        renderizar(result)
    })
    .catch((error) => {console.log(error)})
}

function renderizar(Pacientes){
    let tabela = document.querySelector("#tabela tbody")
    for (let Paciente of Pacientes) {

        let linha = `
            <tr>
                <td>${Paciente.idSame}</td>
                <td>${Paciente.nome}</td>
                <td>${Paciente.prateleira}</td>
            </tr>
        `

        let tr = document.createElement("tr")
        tr.innerHTML = linha
        tabela.appendChild(tr)
    }
}

