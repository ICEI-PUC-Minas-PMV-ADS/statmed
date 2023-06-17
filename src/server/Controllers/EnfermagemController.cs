using Microsoft.AspNetCore.Mvc;
using Statmed.Models;
using Statmed.Repository;

namespace Statmed.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EnfermagemController : ControllerBase
    {
        private readonly EnfermagemRepository enfermagemRepository;

        public EnfermagemController(EnfermagemRepository enfermagemRepository)
        {
            this.enfermagemRepository = enfermagemRepository;
        }

        [HttpPost]
        [Route("Cadastrar")]
        public ActionResult<Enfermagem> Cadastrar([FromBody] Enfermagem body)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return this.enfermagemRepository.Adicionar(body);
        }

        [HttpPut]
        [Route("Atualizar")]
        public ActionResult<Enfermagem> Atualizar([FromBody] Enfermagem body)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return this.enfermagemRepository.Atualizar(body);
        }

        [HttpGet]
        [Route("Listar")]
        public ActionResult<List<Enfermagem>> Listar()
        {
            return this.enfermagemRepository.Listar();
        }

        [HttpGet]
        [Route("BuscarId")]
        public ActionResult<Enfermagem> BuscarId(int id) => this.enfermagemRepository.BuscarPorId(id);

        [HttpDelete]
        [Route("DeletarPorId")]
        public void DeletarPorId(int id)
        {
            this.enfermagemRepository.DeletarPorId(id);
        }
    }
}