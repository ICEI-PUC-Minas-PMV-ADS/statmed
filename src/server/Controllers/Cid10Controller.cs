
using Microsoft.AspNetCore.Mvc;

namespace Statmed.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class Cid10Controller : ControllerBase
    {
        private readonly StatmedDbContext _statmedDbContext;

        public Cid10Controller(StatmedDbContext context)
        {
            _statmedDbContext = context;
        }

        [HttpGet("Consultar")]
        public async Task<IActionResult> PegaCid10()
        {
            var cid10 = await _statmedDbContext.CID10.ToListAsync();
            return Ok(cid10);
        }
    }
}