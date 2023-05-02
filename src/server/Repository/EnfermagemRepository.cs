using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Statmed.Models;

namespace Statmed.Repository
{
    public class EnfermagemRepository : RepositoryBase<Enfermagem>
    {
        public EnfermagemRepository(StatmedDbContext statmedDbContext) : base(statmedDbContext)
        {
        }
    }
}