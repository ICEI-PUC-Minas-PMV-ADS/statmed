using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Statmed.Models
{
    public class Atendimento
    {
        [Key]
        public int IdAtendimento { get; set; }
        public int Usuario_idFunc { get; set; }
        public string Usuario_crm { get; set; }
        public DateOnly Data { get; set; }
        public string Cid { get; set; }
        public string Epidemia { get; set; }
        public string Atestado { get; set; }
        public string Anamnese { get; set; }
        public string Relatorio { get; set; }
        public string Encaminhamento { get; set; }

        [ForeignKey("idSame")]
        public int PacienteIdSame { get; set; }
        public Paciente Paciente { get; set; }
    }
}