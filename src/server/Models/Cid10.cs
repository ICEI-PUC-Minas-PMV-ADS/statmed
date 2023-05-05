
using System.ComponentModel.DataAnnotations;

namespace Statmed.Models
{
    public class Cid10
    {
        [Key]
        public string IdCid { get; set; }
        public string Desc { get; set; }
    }
}