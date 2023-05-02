using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Statmed.Models;

namespace Statmed.Repository
{
    public class RepositoryBase<T> where T : Usuario
    {
        private readonly StatmedDbContext statmedDbContext;
        private readonly DbSet<T> DbSet;
        public RepositoryBase(StatmedDbContext statmedDbContext)
        {
            this.statmedDbContext = statmedDbContext;
            DbSet = statmedDbContext.Set<T>();
        }
        public T Adicionar(T item)
        {
            DbSet.Add(item);
            statmedDbContext.SaveChanges();
            return item;

        }
        public T Atualizar(T item)
        {
            DbSet.Update(item);
            statmedDbContext.SaveChanges();
            return item;

        }
        public T BuscarPorId(int id)
        {
            return DbSet.FirstOrDefault(l => l.IdFunc == id);

        }

        public List<T> Listar()
        {
            return DbSet.ToList();

        }


        public void DeletarPorId(int id)
        {
            DbSet.Remove(BuscarPorId(id));
            statmedDbContext.SaveChanges();
        }

    }
}