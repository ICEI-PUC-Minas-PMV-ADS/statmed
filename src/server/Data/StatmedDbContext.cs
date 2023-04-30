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
    }
}
