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
        public async Task<ActionResult<List<Paciente>>> BuscaPaciente([FromServices] StatmedDbContext context)
        {
            var pacientes = await context.Paciente.ToListAsync();
            return pacientes;
        }

        [HttpGet]
        [Route("BuscaIdSame")]
        public async Task<ActionResult<Paciente>> BuscaIdSame(int IdSame)
        {
            Paciente User = await _statmedDbContext.Paciente.Select(s => new Paciente
            {
                IdSame = s.IdSame,
                Nome = s.Nome,
                NomeSocial = s.NomeSocial,
                Email = s.Email,
                Cpf = s.Cpf,
                Telefone = s.Telefone,
                DataNasc = s.DataNasc,
                Cep = s.Cep,
                Rua = s.Rua,
                Numero = s.Numero,
                Bairro = s.Bairro,
                Cidade = s.Cidade,
                Uf = s.Uf,
                Prateleira = s.Prateleira
            }).FirstOrDefaultAsync(s => s.IdSame == IdSame);
            if (User == null)
            {
                return NotFound(); 

            } else{

                return User; 
            }
        }

    }
}
