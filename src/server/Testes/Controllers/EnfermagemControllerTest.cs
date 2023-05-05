using Xunit;
using Statmed.Testes.MockRepository;
using Statmed.Models;

namespace Statmed.Testes.Repository
{
    public class EnfermagemControllerTest
    {
        [Fact]
        public void Cadastrar_enfermagem_com_sucesso()
        {
            var enfermagemRepository = new EnfermagemRepositoryMock();
            var enfermagem = new Enfermagem() { Coren = "CRC123", Nome = "Fulana de Tal" };
            var result = enfermagemRepository.Adicionar(enfermagem);

            Assert.Equal(1, result.IdFunc);
        }

        [Fact]
        public void BuscarPorId_enfermagem_com_sucesso()
        {
            var enfermagemRepository = new EnfermagemRepositoryMock();
            var enfermagem = new Enfermagem() { Coren = "CRC123", Nome = "Fulana de Tal" };
            enfermagemRepository.Adicionar(enfermagem);
            var result = enfermagemRepository.BuscarPorId(1);

            Assert.NotNull(result);
            Assert.Equal(1, result.IdFunc);
            Assert.Equal("Fulana de Tal", result.Nome);
            Assert.Equal("CRC123", result.Coren);
        }

        [Fact]
        public void BuscarPorId_enfermagem_com_item_nao_cadastrado_entao_retorna_null()
        {
            var enfermagemRepository = new EnfermagemRepositoryMock();
            var result = enfermagemRepository.BuscarPorId(1);

            Assert.Null(result);
        }
    }
}