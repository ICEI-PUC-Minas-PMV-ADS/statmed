
using Microsoft.AspNetCore.Mvc;
using Statmed.Models;

namespace Statmed.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class Cid10Controller : ControllerBase
    {
        private readonly StatmedDbContext _cidstatmedDbContext;

        public Cid10Controller(StatmedDbContext cidstatmedDbContext)
        {
            _cidstatmedDbContext = cidstatmedDbContext;
        }
        [HttpGet("Consultar")]
        public async Task<ActionResult<List<Cid10>>> PegaCid10([FromServices] StatmedDbContext cidstatmedDbContext)
        {
            var cid10 = await cidstatmedDbContext.CID10.ToListAsync(CancellationToken.None);
            return cid10;
        }
    }
}