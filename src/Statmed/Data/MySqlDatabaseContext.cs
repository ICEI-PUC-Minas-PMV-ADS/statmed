using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Statmed.Data
{

    public class MySqlDatabaseContext : DbContext
    {
        internal object paciente;

        public MySqlDatabaseContext(DbContextOptions<MySqlDatabaseContext> context) : base(context)
        {

        }
        public DbSet<Paciente> Pacientes { get; set; }
    }
}
