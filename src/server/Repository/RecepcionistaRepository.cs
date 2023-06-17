using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Statmed.Models;

namespace Statmed.Repository
{
    public class RecepcionistaRepository : RepositoryBase<Recepcionista>
    {
        public RecepcionistaRepository(StatmedDbContext statmedDbContext) : base(statmedDbContext)
        {
        }
    }
}