using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Statmed.Models;

namespace Statmed.Repository
{
    public class SupervisoraAdmRepository : RepositoryBase<SupervisoraAdm>
    {
        public SupervisoraAdmRepository(StatmedDbContext statmedDbContext) : base(statmedDbContext)
        {
        }
    }
}