using System.ComponentModel.DataAnnotations;

namespace Statmed.Models
{
    public class Usuario
    {
        [Key]
        public int IdFunc { get; set; }
        public string Nome { get; set; }
        public string Cpf { get; set; }
        public string Telefone { get; set; }
        public string DataNasc { get; set; }     
        public string Senha { get; set; }
        public string Sexo {get; set; }

    
    }
}