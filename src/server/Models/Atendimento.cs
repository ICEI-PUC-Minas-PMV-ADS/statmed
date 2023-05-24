using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;


namespace Statmed.Models
{
    public class Atendimento
    {
        [Key]
        public int IdAtendimento { get; set; }
        public int IdFunc_recepcionista { get; set; }
        public int IdSame_paciente { get; set; }
        public int IdFunc_medico { get; set; }
        public DateTime Data { get; set; }
        public string Cid { get; set; }
        public string Epidemia { get; set; }
        public string Atestado { get; set; }
        [JsonProperty("Anamnese")]
    public string Anamnese { get; set; }
        public string Relatorio { get; set; }
        public string Encaminhamento { get; set; }
    }
}