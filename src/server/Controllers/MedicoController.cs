using Microsoft.AspNetCore.Mvc;
using Statmed.Repository;
using Statmed.Models;

namespace Statmed.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class MedicoController : ControllerBase

    {
        public readonly MedicoRepository medicoRepository;

        public MedicoController(MedicoRepository medicoRepository)
        {
            this.medicoRepository = medicoRepository;
        }
        [HttpPost]
        [Route("Cadastar")]
        public ActionResult<Medico> Cadastrar([FromBody] Medico body)
        {
            if (ModelState.IsValid)
            {
                return this.medicoRepository.Adicionar(body);

            }
            return BadRequest(ModelState);
        }

    }
}