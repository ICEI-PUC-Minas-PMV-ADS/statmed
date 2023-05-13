using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Statmed.Models;

namespace Statmed.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class AuthController : ControllerBase
    {
        public static Usuario usuario = new Usuario();
        private readonly IConfiguration _configuration; //trocar para a database (?)

        public AuthController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

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
                string token = CreateToken(usuario);

                return Ok(token);
        }

        private string CreateToken(Usuario usuario)
        {
            List<Claim> claims = new List<Claim>{
                new Claim(ClaimTypes.Name, usuario.Login)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value!));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds
            );

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        
        }
    }
}