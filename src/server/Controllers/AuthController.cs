using Microsoft.AspNetCore.Mvc;
using Statmed.Models;

namespace Statmed.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class AuthController : ControllerBase
    {
        public static Usuario usuario = new Usuario();

        [HttpPost("register")]
        public ActionResult<Usuario> Register(UserDto request)
        {
            string senhaHash  = BCrypt.Net.BCrypt.HashPassword(request.Senha);
        
            usuario.Login = request.Login;
            usuario.SenhaHash = senhaHash;

            return Ok(usuario);
        }

        
        [HttpPost("Login")]
        public ActionResult<Usuario> Login(UserDto request)
        {
            if(usuario.Login != request.Login) 
            {
                return BadRequest("Usuário não encontrado.");
            }
            if(!BCrypt.Net.BCrypt.Verify(request.Senha, usuario.SenhaHash))
            {
                return BadRequest("Senha errada.");
            }
                return Ok(usuario);


        }
    }
}