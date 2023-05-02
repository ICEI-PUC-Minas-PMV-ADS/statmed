using System.ComponentModel.DataAnnotations;

namespace Statmed.Models
{
    public class Usuario
    {
        [Key]
        public int IdFunc { get; set; }
        public string Nome { get; set; }
    }
}