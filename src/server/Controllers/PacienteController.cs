using System.Net;
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

        public PacienteController(StatmedDbContext context)
        {
            _statmedDbContext = context;
        }

        // Cadastro
        [HttpPost("Cadastrar")]
        public async Task<ActionResult<Paciente>> CadastrarPaciente([FromServices] StatmedDbContext _statmedDbContext, [FromBody] Paciente body)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var paciente = new Paciente()
            {
                Nome = body.Nome,
                NomeSocial = body.NomeSocial,
                Genero = body.Genero,
                Email = body.Email,
                Cpf = body.Cpf,
                Telefone = body.Telefone,
                DataNasc = body.DataNasc,
                Cep = body.Cep,
                Rua = body.Rua,
                Numero = body.Numero,
                Bairro = body.Bairro,
                Cidade = body.Cidade,
                Complemento = body.Complemento,
                Uf = body.Uf
            };
                        string json = System.Text.Json.JsonSerializer.Serialize(paciente);

            _statmedDbContext.Paciente.Add(paciente);
            await _statmedDbContext.SaveChangesAsync();


            return body;
        }

        // Consulta
        [HttpGet("Consultar")]
        public async Task<IActionResult> BuscaPaciente()
        {
            var pacientes = await _statmedDbContext.Paciente.ToListAsync();
            return Ok(pacientes);
        }

        // Consulta Pelo IdSame
        [HttpGet("BuscaIdSame")]
        public async Task<ActionResult<Paciente>> BuscaIdSame(int IdSame)
        {
            Paciente IdPaciente = await _statmedDbContext.Paciente.Select(s => new Paciente
            {
                IdSame = s.IdSame,
                Nome = s.Nome,
                NomeSocial = s.NomeSocial,
                Genero = s.Genero,
                Email = s.Email,
                Cpf = s.Cpf,
                Telefone = s.Telefone,
                DataNasc = s.DataNasc,
                Cep = s.Cep,
                Rua = s.Rua,
                Numero = s.Numero,
                Bairro = s.Bairro,
                Complemento = s.Complemento,
                Cidade = s.Cidade,
                Uf = s.Uf,  
                Prateleira = s.Prateleira
            }).FirstOrDefaultAsync(s => s.IdSame == IdSame);
            if (IdPaciente == null)
            {
                return NotFound();
            }
            else
            {
                return IdPaciente;
            }

        }

        // Atualiza o cadastro do paciente
        [HttpPut("AtualizarPaciente")]
        public async Task<HttpStatusCode> AtualizarPaciente(Paciente Paciente)
        {
            var attPac = await _statmedDbContext.Paciente.FirstOrDefaultAsync(s => s.IdSame == Paciente.IdSame);

            attPac.Nome = Paciente.Nome;
            attPac.NomeSocial = Paciente.NomeSocial;
            attPac.Email = Paciente.Email;
            attPac.Cpf = Paciente.Cpf;
            attPac.Telefone = Paciente.Telefone;
            attPac.DataNasc = Paciente.DataNasc;
            attPac.Cep = Paciente.Cep;
            attPac.Rua = Paciente.Rua;
            attPac.Numero = Paciente.Numero;
            attPac.Bairro = Paciente.Bairro;
            attPac.Cidade = Paciente.Cidade;
            attPac.Uf = Paciente.Uf;

            await _statmedDbContext.SaveChangesAsync();
            return HttpStatusCode.OK;
        }

        // Deleta o paciente pelo Id
        [HttpDelete("DeletarPaciente")]
        public async Task<HttpStatusCode> DeletarPaciente(int IdSame)
        {
            var delPac = new Paciente() { IdSame = IdSame };
            _statmedDbContext.Paciente.Attach(delPac);
            _statmedDbContext.Paciente.Remove(delPac);
            await _statmedDbContext.SaveChangesAsync();
            return HttpStatusCode.OK;
        }

    }
}
