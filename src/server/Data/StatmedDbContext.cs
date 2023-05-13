using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Statmed.Models;

namespace Statmed.Data
{
    public class StatmedDbContext : DbContext
    {
        public StatmedDbContext(DbContextOptions<StatmedDbContext> options) : base(options) {

        }

        public DbSet<Paciente> Paciente { get; set; }
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Cid10> CID10 { get; set; }
        public DbSet<Medico> Medico { get; set; }
        public DbSet<Enfermagem> Enfermagem { get; set; }
        public DbSet<Recepcionista> Recepcionista { get; set; }
        public DbSet<SupervisoraAdm> SupervisoraAdm { get; set; }
    }
}
