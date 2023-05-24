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

        [HttpPut]
        [Route("Atualizar")]
        public ActionResult<Medico> Atualizar([FromBody] Medico body)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return this.medicoRepository.Atualizar(body);
        }
        [HttpGet]
        [Route("Listar")]
        public ActionResult<List<Medico>> Listar()
        {
            return this.medicoRepository.Listar();
        }

        [HttpGet]
        [Route("BuscarId")]
        public ActionResult<Medico> BuscarId(int id)
        => this.medicoRepository.BuscarPorId(id);

        [HttpDelete]
        [Route("DeletarPorId")]
        public void DeletarPorId(int id)
        {
            this.medicoRepository.DeletarPorId(id);
        }

    }
}