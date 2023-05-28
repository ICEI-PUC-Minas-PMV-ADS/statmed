using System.ComponentModel.DataAnnotations;

namespace Statmed.Models
{
    public class Atendimento
    {
        [Key]
        public int IdAtendimento { get; set; }
        public int Usuario_idFunc { get; set; }
        public int Usuario_crm { get; set; }
        public DateTime Data { get; set; }
        public string Cid { get; set; }
        public string Epidemia { get; set; }
        public string Atestado { get; set; }
        public string Anamnese { get; set; }
        public string Relatorio { get; set; }
        public string Encaminhamento { get; set; }

        public int PacienteIdSame { get; set; }
        public Paciente Paciente { get; set; }
    }
}