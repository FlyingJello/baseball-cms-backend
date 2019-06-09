using Baseball.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Baseball.Data
{
    public class BaseballContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public DbSet<Player> Players { get; set; }

        public BaseballContext(DbContextOptions<BaseballContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>()
           .Ignore(u => u.Password);

            base.OnModelCreating(builder);
        }
    }

}
