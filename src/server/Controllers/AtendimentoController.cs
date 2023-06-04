using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Statmed.Models;
using System.Text.Json;
using System.Web;

namespace Statmed.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtendimentoController : Controller
    {
        private readonly StatmedDbContext _statmedDbContext;

        public AtendimentoController(StatmedDbContext context)
        {
            _statmedDbContext = context;
        }

        [HttpGet("Consultar")]
        public async Task<IActionResult> BuscaAtendimento()
        {
            var atendimentos = await _statmedDbContext.Atendimento.ToListAsync();
            return Ok(atendimentos);
        }

        [HttpPost("Cadastrar")]
        public async Task<ActionResult<Atendimento>> CadastrarAtendimento([FromServices] StatmedDbContext _statmedDbContext, [FromBody] Atendimento body)
        {

            var atendimento = new Atendimento()
            {
                Usuario_idFunc = body.Usuario_idFunc,
                PacienteIdSame = body.PacienteIdSame,
                Data = body.Data,
                Epidemia = body.Epidemia,
            };

            _statmedDbContext.Atendimento.Add(atendimento);
            await _statmedDbContext.SaveChangesAsync();
            return atendimento;
        }

        [HttpGet("BuscaIdAtendimento")]
        public async Task<ActionResult<Atendimento>> BuscaIdAtendimento(int IdAtendimento)
        {
            Atendimento IdPaciente = await _statmedDbContext.Atendimento.Select(s => new Atendimento
            {
                IdAtendimento = s.IdAtendimento,
                Usuario_idFunc = s.Usuario_idFunc,
                Data = s.Data,
                Cid = s.Cid,
                Usuario_crm = s.Usuario_crm,
                Epidemia = s.Epidemia,
                Atestado = s.Atestado,
                Anamnese = s.Anamnese,
                Relatorio = s.Relatorio,
                Encaminhamento = s.Encaminhamento,
                PacienteIdSame = s.PacienteIdSame,
                Paciente = s.Paciente
            }).FirstOrDefaultAsync(s => s.IdAtendimento == IdAtendimento);
            if (IdPaciente == null)
            {
                return NotFound();
            }
            else
            {
                return IdPaciente;
            }
        }
        [HttpPut("AtendimentoAnamnese")]
        public async Task<HttpStatusCode> RegistrarAnamnese(Atendimento Atendimento)
        {
            var attPac = await _statmedDbContext.Atendimento.FirstOrDefaultAsync(s => s.IdAtendimento == Atendimento.IdAtendimento);

            // Escapar os caracteres inválidos no campo Anamnese
            string anamneseEscaped = RemoveInvalidCharacters(Atendimento.Anamnese);

            attPac.Usuario_crm = Atendimento.Usuario_crm;
            attPac.Cid = Atendimento.Cid;
            attPac.Anamnese = anamneseEscaped; // Usar a string escapada

            await _statmedDbContext.SaveChangesAsync();
            return HttpStatusCode.OK;
        }
        [HttpPut("AtendimentoRelatorio")]
        public async Task<HttpStatusCode> RegistrarRelatorio(Atendimento Atendimento)
        {
            var attPac = await _statmedDbContext.Atendimento.FirstOrDefaultAsync(s => s.IdAtendimento == Atendimento.IdAtendimento);

            // Escapar os caracteres inválidos no campo Anamnese
            string relatorioEscaped = RemoveInvalidCharacters(Atendimento.Relatorio);

            attPac.Relatorio = relatorioEscaped; // Usar a string escapada

            await _statmedDbContext.SaveChangesAsync();
            return HttpStatusCode.OK;
        }
        [HttpPut("AtendimentoEncaminhamento")]
        public async Task<HttpStatusCode> RegistrarEncaminhamento(Atendimento Atendimento)
        {
            var attPac = await _statmedDbContext.Atendimento.FirstOrDefaultAsync(s => s.IdAtendimento == Atendimento.IdAtendimento);

            // Escapar os caracteres inválidos no campo Anamnese
            string encaminhamentoEscaped = RemoveInvalidCharacters(Atendimento.Encaminhamento);

            attPac.Encaminhamento = encaminhamentoEscaped; // Usar a string escapada

            await _statmedDbContext.SaveChangesAsync();
            return HttpStatusCode.OK;
        }
        [HttpPut("AtendimentoAtestado")]
        public async Task<HttpStatusCode> RegistrarAtestado(Atendimento Atendimento)
        {
            var attPac = await _statmedDbContext.Atendimento.FirstOrDefaultAsync(s => s.IdAtendimento == Atendimento.IdAtendimento);

            // Escapar os caracteres inválidos no campo Anamnese
            string atestadoEscaped = RemoveInvalidCharacters(Atendimento.Atestado);

            attPac.Atestado = atestadoEscaped; // Usar a string escapada

            await _statmedDbContext.SaveChangesAsync();
            return HttpStatusCode.OK;
        }
        private string RemoveInvalidCharacters(string input)
        {
            // Expressão regular para remover caracteres inválidos (\x00-\x08, \x0B-\x0C, \x0E-\x1F)
            string pattern = @"[\x00-\x08\x0B-\x0C\x0E-\x1F]";
            string formatted = Regex.Replace(input, pattern, string.Empty);

            return formatted;
        }
    }
}