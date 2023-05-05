using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Statmed.Models;

namespace Statmed.Repository
{
    public class MedicoRepository : RepositoryBase<Medico>
    {
        public MedicoRepository(StatmedDbContext statmedDbContext) : base(statmedDbContext)
        {
        }
    }
}