using Microsoft.AspNetCore.Mvc;
using Statmed.Models;
using Statmed.Repository;

namespace Statmed.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RecepcionistaController : ControllerBase
    {
        private readonly RecepcionistaRepository recepcionistaRepository;

        public RecepcionistaController(RecepcionistaRepository
         recepcionistaRepository)
        {
            this.recepcionistaRepository = recepcionistaRepository;
        }

        [HttpPost]
        [Route("Cadastrar")]
        public ActionResult<Recepcionista> Cadastrar([FromBody] Recepcionista body)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return this.recepcionistaRepository.Adicionar(body);
        }

        [HttpPut]
        [Route("Atualizar")]
        public ActionResult<Recepcionista> Atualizar([FromBody] Recepcionista body)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return this.recepcionistaRepository.Atualizar(body);
        }

        [HttpGet]
        [Route("Listar")]
        public ActionResult<List<Recepcionista>> Listar()
        {
            return this.recepcionistaRepository.Listar();
        }

        [HttpGet]
        [Route("BuscarId")]
        public ActionResult<Recepcionista> BuscarId(int id) => this.recepcionistaRepository.BuscarPorId(id);

        [HttpDelete]
        [Route("DeletarPorId")]
        public void DeletarPorId(int id)
        {
            this.recepcionistaRepository.DeletarPorId(id);
        }

    }
}