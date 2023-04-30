using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Statmed.Data;
using Statmed.Data.Entities;
using Statmed.DTO;

namespace Statmed.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PacienteController : ControllerBase
    {
        private readonly StatmedDbContext StatmedDbContext;

        public PacienteController(StatmedDbContext StatmedDbContext)
        {
            this.StatmedDbContext = StatmedDbContext;
        }
        // Pega TODOS registros na database de pacientes
        [HttpGet("Busca")]
        public async Task<ActionResult<List<PacienteDTO>>> BuscarPaciente()
        {
            var List = await StatmedDbContext.Paciente.Select(
                s => new PacienteDTO
                {
                    IdSame = s.IdSame,
                    Nome = s.Nome,
                    NomeSocial = s.NomeSocial,
                    Email = s.Email,
                    Cpf = s.Cpf,
                    Telefone = s.Telefone,
                    DataNasc = s.DataNasc,
                    Cep = s.Cep,
                    Uf = s.Uf,
                    Rua = s.Rua,
                    Bairro = s.Bairro,
                    Numero = s.Numero,
                    Prateleira = s.Prateleira
                }
            ).ToListAsync();
            if (List.Count < 0)
            {
                return NotFound();
            }
            else
            {
                return List;
            }
        }
        [HttpGet("BuscaIdSame")]
        public async Task<ActionResult<PacienteDTO>> BuscarPacienteId(int IdSame)
        {
            PacienteDTO User = await StatmedDbContext.Paciente.Select(s => new PacienteDTO
            {
                IdSame = s.IdSame,
                Nome = s.Nome,
                NomeSocial = s.NomeSocial,
                Email = s.Email,
                Cpf = s.Cpf,
                Telefone = s.Telefone,
                DataNasc = s.DataNasc,
                Cep = s.Cep,
                Uf = s.Uf,
                Rua = s.Rua,
                Bairro = s.Bairro,
                Numero = s.Numero,
                Prateleira = s.Prateleira
            }).FirstOrDefaultAsync(s => s.IdSame == IdSame);
            if (User == null)
            {
                return NotFound();
            }
            else
            {
                return User;
            }
        }
        [HttpPost("Cadastro")]
        public async Task<HttpStatusCode> CadastrarPaciente(PacienteDTO Paciente)
        {
            var entidade = new Paciente()
            {
                IdSame = Paciente.IdSame,
                Nome = Paciente.Nome,
                NomeSocial = Paciente.NomeSocial,
                Email = Paciente.Email,
                Cpf = Paciente.Cpf,
                Telefone = Paciente.Telefone,
                DataNasc = Paciente.DataNasc,
                Cep = Paciente.Cep,
                Uf = Paciente.Uf,
                Rua = Paciente.Rua,
                Bairro = Paciente.Bairro,
                Numero = Paciente.Numero,
                Prateleira = Paciente.Prateleira
            };
            StatmedDbContext.Paciente.Add(entidade);
            await StatmedDbContext.SaveChangesAsync();
            return HttpStatusCode.Created;
        }
        [HttpPut("Atualiza")]
        public async Task<HttpStatusCode> AtualizarPaciente(PacienteDTO Paciente)
        {
            var entidade = await StatmedDbContext.Paciente.FirstOrDefaultAsync(s => s.IdSame == Paciente.IdSame);
                entidade.IdSame = Paciente.IdSame;
                entidade.Nome = Paciente.Nome;
                entidade.NomeSocial = Paciente.NomeSocial;
                entidade.Email = Paciente.Email;
                entidade.Cpf = Paciente.Cpf;
                entidade.Telefone = Paciente.Telefone;
                entidade.DataNasc = Paciente.DataNasc;
                entidade.Cep = Paciente.Cep;
                entidade.Uf = Paciente.Uf;
                entidade.Rua = Paciente.Rua;
                entidade.Bairro = Paciente.Bairro;
                entidade.Numero = Paciente.Numero;
                entidade.Prateleira = Paciente.Prateleira;
            await StatmedDbContext.SaveChangesAsync();
            return HttpStatusCode.OK;
        }
        [HttpDelete("Apagar/{IdSame}")]
        public async Task<HttpStatusCode> ApagarPaciente(int IdSame)
        {
            var entidade = new Paciente()
            {
                IdSame = IdSame
            };
            StatmedDbContext.Paciente.Attach(entidade);
            StatmedDbContext.Paciente.Remove(entidade);
            await StatmedDbContext.SaveChangesAsync();
            return HttpStatusCode.OK;
        }
    }
}
