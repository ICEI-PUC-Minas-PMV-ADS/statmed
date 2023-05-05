using Statmed.Models;

namespace Statmed.Testes.MockRepository
{
    public class EnfermagemRepositoryMock
    {
        private readonly List<Enfermagem> listaEnfermagem;
        public EnfermagemRepositoryMock()
        {
            listaEnfermagem = new List<Enfermagem>();
        }

        public Enfermagem Adicionar(Enfermagem enfermagem)
        {
            enfermagem.IdFunc = listaEnfermagem.Count + 1;
            listaEnfermagem.Add(enfermagem);
            return enfermagem;
        }

        public Enfermagem BuscarPorId(int id)
        {
            return listaEnfermagem.FirstOrDefault(x => id == x.IdFunc);
        }
    }
}