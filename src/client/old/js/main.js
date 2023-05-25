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