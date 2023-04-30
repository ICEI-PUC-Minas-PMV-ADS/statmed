using Microsoft.AspNetCore.Mvc;
using Statmed.Models;

namespace Statmed.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PacienteController : ControllerBase
    {
        // Evitar Sql Injection
        private readonly StatmedDbContext _statmedDbContext;

        public PacienteController(StatmedDbContext statmedDbContext)
        {
            _statmedDbContext = statmedDbContext;
        }
        // Cadastro
        [HttpPost]
        [Route("Cadastrar")]
        public async Task<ActionResult<Paciente>> CadastrarPaciente([FromServices] StatmedDbContext context, [FromBody] Paciente body)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var paciente = new Paciente()
            {
                Nome = body.Nome,
                NomeSocial = body.NomeSocial,
                Email = body.Email,
                Cpf = body.Cpf,
                Telefone = body.Telefone,
                DataNasc = body.DataNasc,
                Cep = body.Cep,
                Rua = body.Rua,
                Numero = body.Numero,
                Bairro = body.Bairro,
                Cidade = body.Cidade,
                Uf = body.Uf
            };

            context.Paciente.Add(paciente);
            await context.SaveChangesAsync();

            return body;
        }

        [HttpGet]
        [Route("Consultar")]
        public async Task<ActionResult<List<Paciente>>> BuscaPaciente([FromServices] StatmedDbContext context) {
            var pacientes = await context.Paciente.ToListAsync();
            return pacientes;
        }
    }
}
