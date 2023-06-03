using System.ComponentModel.DataAnnotations;


namespace Statmed.Models
{   
    public class Paciente
    {   
        [Key]
        public int IdSame { get; set; }
        public string Nome { get; set; }
        public string NomeSocial { get; set; }
        public string Genero { get; set; }
        public string Email { get; set; }
        public string Cpf { get; set; }
        public string Telefone { get; set; }
        public DateOnly DataNasc { get; set; }
        public string Cep { get; set; }
        public string Uf { get; set; }
        public string Rua { get; set; }
        public string Bairro { get; set; }
        public string Cidade { get; set; }
        public string Complemento { get; set; }
        public int Numero { get; set; }
        public string Prateleira { get; set; }
        public ICollection<Atendimento> Atendimento { get; set; }    
    }
}