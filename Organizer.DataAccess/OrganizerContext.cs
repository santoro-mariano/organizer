using System.Data.Entity;
using Organizer.Model;

namespace Organizer.DataAccess
{
    public class OrganizerContext : DbContext
    {
        public OrganizerContext(): base("name=DefaultConnection")
        {
        }

        public DbSet<User> Users { get; set; }

        public DbSet<Account> Accounts { get; set; }

        public DbSet<Card> Cards { get; set; }

        public DbSet<CardCompany> CardCompanies { get; set; }

        public DbSet<Currency> Currencies { get; set; }

        public DbSet<Movement> Movements { get; set; }
    }
}
