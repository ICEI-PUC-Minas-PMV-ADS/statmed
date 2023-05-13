using System.ComponentModel.DataAnnotations;

namespace Statmed.Models
{
    public class Usuario
    {
        [Key]
        public int IdFunc { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string Login { get; set; } = string.Empty;
        public string IdCargo { get; set; } = string.Empty;
        public string Cpf { get; set; } = string.Empty;
        public string Coren { get; set; } = string.Empty;
        public string DataNasc { get; set; } = string.Empty;
        public string Crm { get; set; } = string.Empty;
        public string SenhaHash { get; set; }
        public string SenhaSalt { get; set; }
    }
}