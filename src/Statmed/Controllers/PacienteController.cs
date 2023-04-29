using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Statmed.Data;
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
        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            var pacientes = await _mySqlDatabaseContext.Pacientes.ToListAsync();
            return Ok(pacientes);
        }
    }

}
