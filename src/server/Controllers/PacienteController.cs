using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MySql.Data.EntityFrameworkCore.Extensions;

namespace Statmed.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PacienteController : ControllerBase
    {
        private readonly MySqlDatabaseContext _mySqlDatabaseContext;

        public PacienteController(MySqlDatabaseContext mySqlDatabaseContext)
        {
            _mySqlDatabaseContext = mySqlDatabaseContext;
        }
        // Pega TODOS registros na database de pacientes
        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            var pacientes = await _mySqlDatabaseContext.Pacientes.ToListAsync();
            return Ok(pacientes);
        }
        // Pega o Paciente pelo número único same
        [HttpGet("{idSame}")]
        public async Task<IActionResult> GetByIdAsync(int idSame)
        {
            var paciente = await _mySqlDatabaseContext.Pacientes.FindAsync(idSame);

            if (paciente == null)
            {
                return NotFound();
            }

            return Ok(paciente);
        }
        // Cria um novo registro no banco de dados
        [HttpPost]
        public async Task<IActionResult> CreateAsync(Paciente paciente)
        {
            if (paciente == null)
            {
                return BadRequest();
            }

            await _mySqlDatabaseContext.Pacientes.AddAsync(paciente);
            await _mySqlDatabaseContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetByIdAsync), new { idSame = paciente.IdSame }, paciente);
        }
        // Atualiza o Paciente
        [HttpPut("{idSame}")]
        public async Task<IActionResult> UpdateAsync(int idSame, Paciente paciente)
        {
            if (paciente == null || paciente.IdSame != idSame)
            {
                return BadRequest();
            }

            var existingPaciente = await _mySqlDatabaseContext.Pacientes.FindAsync(idSame);

            if (existingPaciente == null)
            {
                return NotFound();
            }

            existingPaciente.Nome = paciente.Nome;
            existingPaciente.NomeSocial = paciente.NomeSocial;
            existingPaciente.Email = paciente.Email;
            existingPaciente.Cpf = paciente.Cpf;
            existingPaciente.Telefone = paciente.Telefone;
            existingPaciente.DataNasc = paciente.DataNasc;
            existingPaciente.Cep = paciente.Cep;
            existingPaciente.Uf = paciente.Uf;
            existingPaciente.Rua = paciente.Rua;
            existingPaciente.Bairro = paciente.Bairro;
            existingPaciente.Numero = paciente.Numero;
            existingPaciente.Prateleira = paciente.Prateleira;

            _mySqlDatabaseContext.Pacientes.Update(existingPaciente);
            await _mySqlDatabaseContext.SaveChangesAsync();

            return NoContent();
        }
    }
}
