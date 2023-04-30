function consultarPaciente() {
    fetch("http://localhost:5145/api/Paciente/Consultar", {
        method: "GET",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => response.json())
    .then((result) => {
        render(result)
    })
    .catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'Falha de comunicação com servidor, Contate seu Administrator.'
          })
    })
}

function renderizar(Paciente){
    
}