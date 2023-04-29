using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Statmed.Data.Entities
{
    public class Paciente
    {
        [Key]
        public int IdSame { get; set; }
        public string Nome { get; set; }
        public string NomeSocial { get; set; }
        public string Email { get; set; }
        public int Cpf { get; set; }
        public int Telefone { get; set; }
        public int DataNasc { get; set; }
        public int Cep { get; set; }
        public string Uf { get; set; }
        public string Rua { get; set; }
        public string Bairro { get; set; }
        public int Numero { get; set; }
        public string Prateleira { get; set; }
    }
}